"""Gaussian conditioning and hyperparameter integration. No import-time work."""
from dataclasses import dataclass
import numpy as np
from scipy.linalg import cho_solve
from scipy.optimize import minimize
from continuation_depth import vector, normal_grid, normalize, mixture_summary

@dataclass
class Fit:
    x: np.ndarray
    y: np.ndarray
    nodes: np.ndarray
    weights: np.ndarray
    log_normalizer: float
    jitter: float


def data(training):
    x=vector(training['x'],'x'); y=vector(training['y'],'y')
    if x.shape!=y.shape: raise ValueError('x and y lengths differ')
    return x,y


def kernel(x,z,ell):
    if not np.isfinite(ell) or ell<=0: raise ValueError('ell must be positive')
    return np.exp(-.5*((np.asarray(x)[:,None]-np.asarray(z)[None,:])/ell)**2)


def log_likelihood(x,y,nodes,jitter=1e-10):
    nodes=np.asarray(nodes,dtype=float)
    if nodes.ndim!=2 or nodes.shape[1]!=2 or not np.all(np.isfinite(nodes)) or not np.isfinite(jitter) or jitter<0: raise ValueError('finite log hyperparameters and nonnegative jitter required')
    ell,sigma=np.exp(nodes).T
    cov=np.exp(-.5*((x[:,None]-x[None,:])[None,:,:]/ell[:,None,None])**2)
    cov+=(sigma**2+jitter)[:,None,None]*np.eye(len(x))
    chol=np.linalg.cholesky(cov)
    solved=np.linalg.solve(chol,np.broadcast_to(y,(len(nodes),len(x)))[...,None])[...,0]
    return -.5*np.sum(solved**2,axis=1)-np.log(np.diagonal(chol,axis1=1,axis2=2)).sum(axis=1)-len(x)/2*np.log(2*np.pi)


def fit(training, *, settings, seed=None):
    x,y=data(training); jitter=settings.get('jitter',1e-10)
    nodes,lw=normal_grid(np.log([.8,.2]),np.array([.6,.5]),settings['order'],settings['bound'])
    weights,z=normalize(lw+log_likelihood(x,y,nodes,jitter))
    return Fit(x,y,nodes,weights,z,jitter)


def fixed(training,ell,sigma,jitter=1e-10):
    x,y=data(training)
    if min(ell,sigma)<=0 or not np.all(np.isfinite([ell,sigma])): raise ValueError('positive finite ell,sigma required')
    if not np.isfinite(jitter) or jitter<0: raise ValueError('jitter must be finite and nonnegative')
    return Fit(x,y,np.log([[ell,sigma]]),np.ones(1),0.,jitter)


def empirical_bayes(training):
    x,y=data(training); records=[]; bounds=[(-4,4),(-6,1)]
    for ell in [.3,.8,2]:
        for sigma in [.08,.2,.5]:
            start=np.log([ell,sigma]); objective=lambda t:-float(log_likelihood(x,y,np.array([t]))[0])
            r=minimize(objective,start,method='L-BFGS-B',bounds=bounds,options={'maxiter':1000})
            records.append(dict(start=start.tolist(),parameters=r.x.tolist(),objective=float(r.fun),success=bool(r.success),status=int(r.status),message=str(r.message),iterations=int(r.nit),gradient_norm=float(np.linalg.norm(r.jac)),boundary_hit=bool(any(abs(r.x[i]-b)<1e-6 for i in range(2) for b in bounds[i]))))
    best=min(records,key=lambda r:r['objective'])
    return fixed(training,*np.exp(best['parameters'])),records


def predict(fitted,queries, *, settings=None):
    q=vector(queries,'queries'); means=[]; covs=[]
    for ell,sigma in np.exp(fitted.nodes):
        c=kernel(fitted.x,fitted.x,ell)+(sigma*sigma+fitted.jitter)*np.eye(len(fitted.x))
        l=np.linalg.cholesky(c); cross=kernel(fitted.x,q,ell)
        means.append(cross.T@cho_solve((l,True),fitted.y))
        v=kernel(q,q,ell)-cross.T@cho_solve((l,True),cross)
        covs.append((v+v.T)/2)
    return dict(weights=fitted.weights,means=np.array(means),covariances=np.array(covs),noise=np.exp(2*fitted.nodes[:,1]))


def summaries(prediction):
    p=prediction; v=np.diagonal(p['covariances'],axis1=1,axis2=2)
    return {kind:[mixture_summary(p['weights'],p['means'][:,i],v[:,i]+(p['noise'] if kind=='noisy' else 0)) for i in range(v.shape[1])] for kind in ['latent','noisy']}
