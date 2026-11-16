"""Identifiable derivative-penalty splines, proper priors and integrated smoothing."""
from dataclasses import dataclass
import numpy as np
from scipy.interpolate import BSpline
from scipy.linalg import null_space
from numpy.polynomial.legendre import leggauss
from continuation_depth import vector,normal_grid,normalize,mixture_summary,normal_mixture_score


def spline():
    return BSpline(np.r_[np.zeros(4),[.2,.4,.6,.8],np.ones(4)],np.eye(8),3,extrapolate=False)


def basis(x):
    x=vector(x,'spline inputs')
    if np.any((x<0)|(x>1)): raise ValueError('Spline prediction restricted to physical domain [0,1]')
    return spline()(x)


def penalty():
    u,w=leggauss(3); R=np.zeros((8,8)); deriv=spline().derivative(2)
    for left in np.arange(0,1,.2):
        D=deriv(left+.1*(u+1)); R+=D.T@(D*(.1*w)[:,None])
    return (R+R.T)/2


def transform(x):
    B=basis(x); Q=null_space(B.mean(axis=0)[None,:]); values,vectors=np.linalg.eigh(Q.T@penalty()@Q)
    if abs(values[0])>1e-7 or np.any(values[1:]<=0): raise ValueError('Expected one centered affine null direction')
    T=Q@vectors; T[:,1:]/=np.sqrt(values[1:])
    # Resolve arbitrary eigensolver signs so records and figures remain interpretable.
    for j in range(T.shape[1]):
        if T[np.argmax(abs(T[:,j])),j]<0: T[:,j]*=-1
    return T


def queries(values):
    q=np.asarray(values,dtype=float)
    if q.ndim!=2 or q.shape[1]!=2 or not len(q) or not np.all(np.isfinite(q)) or np.any((q<0)|(q>1)): raise ValueError('finite Nx2 inputs inside [0,1] required')
    return q


def design(q,transforms,linear=False):
    q=queries(q); parts=[np.ones((len(q),1))]
    for j,T in enumerate(transforms): parts.append(basis(q[:,j])@T[:,:1] if linear else basis(q[:,j])@T)
    return np.column_stack(parts)

@dataclass
class Fit:
    transforms: list
    nodes: np.ndarray
    weights: np.ndarray
    means: np.ndarray
    covariances: np.ndarray
    log_normalizer: float
    linear: bool


def conditional(X,y,variances):
    # Prior-whitened coefficient space avoids unstable tiny-tau precision matrices.
    sd=np.sqrt(variances); Z=X*sd; A=np.eye(X.shape[1])+Z.T@Z/.04; L=np.linalg.cholesky(A)
    inv=np.linalg.solve(L.T,np.linalg.solve(L,np.eye(len(sd)))); rhs=Z.T@y/.04
    m=sd*(inv@rhs); V=sd[:,None]*inv*sd[None,:]
    logZ=-len(y)/2*np.log(2*np.pi*.04)-np.log(np.diag(L)).sum()-.5*(y@y/.04-rhs@inv@rhs)
    return m,V,float(logZ)


def fit(training, *, settings, seed=None):
    q=queries(training['x']); y=vector(training['y'],'y')
    if len(y)!=len(q): raise ValueError('paired training rows required')
    Ts=[transform(q[:,j]) for j in range(2)]; linear=settings.get('linear',False); X=design(q,Ts,linear)
    if linear: nodes=np.zeros((1,2)); lw=np.zeros(1)
    elif 'tau' in settings:
        tau=np.asarray(settings['tau'],dtype=float)
        if tau.shape!=(2,) or not np.all(np.isfinite(tau)) or np.any(tau<=0): raise ValueError('two positive smoothing SDs required')
        nodes=np.log(tau)[None,:]; lw=np.zeros(1)
    else: nodes,lw=normal_grid(np.log([5.,5.]),np.array([.7,.7]),settings['order'],settings['bound'])
    ms=[]; vs=[]; logz=[]
    for node in nodes:
        var=np.ones(3) if linear else np.r_[1.,1.,np.repeat(np.exp(2*node[0]),6),1.,np.repeat(np.exp(2*node[1]),6)]
        m,V,z=conditional(X,y,var); ms.append(m); vs.append(V); logz.append(z)
    weights,z=normalize(lw+logz)
    return Fit(Ts,nodes,weights,np.array(ms),np.array(vs),z,linear)


def predict(fitted,q, *, settings=None):
    X=design(q,fitted.transforms,fitted.linear)
    means=fitted.means@X.T; variances=np.einsum('ip,npq,iq->ni',X,fitted.covariances,X)
    return dict(weights=fitted.weights,means=means,variances=variances)


def summarize(prediction,noisy=False):
    p=prediction
    return [mixture_summary(p['weights'],p['means'][:,i],p['variances'][:,i]+(.04 if noisy else 0)) for i in range(p['means'].shape[1])]


def score(prediction,outcomes):
    weights=np.asarray(prediction['weights'],dtype=float)
    variances=np.asarray(prediction['variances'],dtype=float)
    if weights.ndim!=1 or not np.all(np.isfinite(weights)) or np.any(weights<0) or abs(weights.sum()-1)>1e-8:
        raise ValueError('Predictive mixture weights must be normalized, finite and nonnegative')
    if not np.all(np.isfinite(variances)) or np.any(variances<0):
        raise ValueError('Latent predictive variances must be finite and nonnegative')
    return normal_mixture_score(weights,prediction['means'],variances+.04,outcomes)


def effects(fitted,grid,term):
    if term not in [0,1]: raise ValueError('term must be0/1')
    B=basis(grid)@fitted.transforms[term]; X=np.zeros((len(grid),15)); start=1+7*term; X[:,start:start+7]=B
    return dict(weights=fitted.weights,means=fitted.means@X.T,variances=np.einsum('ip,npq,iq->ni',X,fitted.covariances,X))
