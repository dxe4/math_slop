"""Actually optimized Gaussian families and independently integrated sensor posterior."""
import numpy as np
from scipy.optimize import minimize
from scipy.integrate import quad
from scipy.special import ndtr
from numpy.polynomial.legendre import leggauss
from continuation_depth import vector,normalize


def unpack(theta,family):
    theta=np.asarray(theta)
    if family not in ['diagonal','full'] or len(theta)!=(4 if family=='diagonal' else 5): raise ValueError('invalid family/parameter shape')
    m=theta[:2]; z=theta[0]*0
    L=np.array([[np.exp(theta[2]),z],[z if family=='diagonal' else theta[4],np.exp(theta[3])]])
    return m,L@L.T,L


def negative_elbo(theta,family,x,y):
    m,V,L=unpack(theta,family); a,b=m; va,vb=V[0,0],V[1,1]; cab=V[0,1]
    eb=np.exp(b+vb/2); e2b=np.exp(2*b+2*vb); aeb=(a+cab)*eb
    sse=np.sum(y*y-2*y*a-2*y*x*eb+a*a+va+2*x*aeb+x*x*e2b)
    loglik=-len(y)/2*np.log(2*np.pi*.09)-sse/.18
    prior=-np.log(2*np.pi*.7)-.5*(a*a+va+(b*b+vb)/.49)
    entropy=1+np.log(2*np.pi)+theta[2]+theta[3]
    return -(loglik+prior+entropy)


def gradient(fn,theta):
    ans=[]
    for i in range(len(theta)):
        t=np.asarray(theta,dtype=complex); t[i]+=1e-25j; ans.append(np.imag(fn(t))/1e-25)
    return np.array(ans)


def optimize(fn,family):
    records=[]
    for mean in [[0,0],[.7,-.7],[-.7,.7]]:
        start=np.r_[mean,np.log([.5,.5]),[] if family=='diagonal' else [0.]]; trace=[float(fn(start))]
        r=minimize(fn,start,jac=lambda t:gradient(fn,t),method='BFGS',callback=lambda t:trace.append(float(fn(t))),options=dict(maxiter=2000,gtol=1e-8))
        records.append(dict(start=start.tolist(),parameters=r.x.tolist(),initial_objective=trace[0],final_objective=float(r.fun),trace=trace,gradient_norm=float(np.linalg.norm(gradient(fn,r.x))),iterations=int(r.nit),status=int(r.status),success=bool(r.success),message=str(r.message)))
    best=min(records,key=lambda r:r['final_objective']); m,V,L=unpack(best['parameters'],family)
    return dict(family=family,mean=m,covariance=V,parameters=np.array(best['parameters']),records=records)


def fit(training, *, settings, seed=None):
    x=vector(training['x'],'x'); y=vector(training['y'],'y')
    if x.shape!=y.shape: raise ValueError('paired x/y required')
    family=settings['family']
    return optimize(lambda theta:negative_elbo(theta,family,x,y),family)


def log_joint(a,b,x,y):
    return -len(y)/2*np.log(2*np.pi*.09)-np.sum((y-a[...,None]-np.exp(b[...,None])*x)**2,axis=-1)/.18-np.log(2*np.pi*.7)-.5*(a*a+b*b/.49)


def reference(training,bound=5):
    x=vector(training['x']); y=vector(training['y']); va=1/(1+len(y)/.09)
    def terms(b):
        r=y-np.exp(b)*x; ma=va*r.sum()/.09
        lp=-.5*(r@r/.09-(r.sum()/.09)**2*va)-.5*b*b/.49
        return np.exp(lp),ma
    def integrand(b,key):
        w,a=terms(b)
        val={'mass':1,'a':a,'b':b,'aa':va+a*a,'bb':b*b,'ab':a*b,'gain':np.exp(b),'gain2':np.exp(2*b),'tail':ndtr((a+1.5*np.exp(b)-1.3)/np.sqrt(va))}[key]
        return w*val
    raw={}; errors={}
    for key in ['mass','a','b','aa','bb','ab','gain','gain2','tail']:
        raw[key],errors[key]=quad(lambda b:integrand(b,key),-bound,bound,epsabs=1e-10,epsrel=1e-10,limit=200)
    z=raw['mass']; v={k:value/z for k,value in raw.items()}
    return dict(mean=[v['a'],v['b']],covariance=[[v['aa']-v['a']**2,v['ab']-v['a']*v['b']],[v['ab']-v['a']*v['b'],v['bb']-v['b']**2]],gain_mean=v['gain'],gain_variance=v['gain2']-v['gain']**2,tail=v['tail'],normalizer=z,absolute_integrator_errors=errors,bound=bound)


def tensor_reference(training,order):
    u,w=leggauss(order); a,b=np.meshgrid(3*u,5*u,indexing='ij'); weights=np.outer(3*w,5*w)
    lw=log_joint(a.ravel(),b.ravel(),training['x'],training['y'])+np.log(weights.ravel()); ww,z=normalize(lw)
    nodes=np.column_stack([a.ravel(),b.ravel()]); m=ww@nodes; cov=np.einsum('n,ni,nj->ij',ww,nodes-m,nodes-m)
    return dict(mean=m.tolist(),covariance=cov.tolist(),gain_mean=float(ww@np.exp(nodes[:,1])),log_normalizer=z)


def predict(fitted,queries, *, settings=None):
    q=vector(queries,'queries'); m=fitted['mean']; V=fitted['covariance']; eb=np.exp(m[1]+V[1,1]/2)
    return dict(mean=m[0]+q*eb,variance=V[0,0]+q*q*np.exp(2*m[1]+V[1,1])*np.expm1(V[1,1])+2*q*V[0,1]*eb)


def targets(fitted):
    m=fitted['mean']; V=fitted['covariance']; vb=V[1,1]; conditional=V[0,0]-V[0,1]**2/vb
    def fun(z):
        b=m[1]+np.sqrt(vb)*z; a=m[0]+V[0,1]/np.sqrt(vb)*z
        return np.exp(-z*z/2)/np.sqrt(2*np.pi)*ndtr((a+1.5*np.exp(b)-1.3)/np.sqrt(conditional))
    tail,error=quad(fun,-10,10,epsabs=1e-10,epsrel=1e-10)
    return dict(mean=m.tolist(),covariance=V.tolist(),gain_mean=float(np.exp(m[1]+vb/2)),gain_variance=float(np.exp(2*m[1]+vb)*np.expm1(vb)),tail=tail,tail_integration_error=error)
