"""Validated Weibull observation likelihood and explicit deterministic integration."""
from dataclasses import dataclass
import numpy as np
from scipy.optimize import minimize
from scipy.special import logsumexp
from scipy.stats import norm
from numpy.polynomial.legendre import leggauss


def observations(times, events, x, *, censor=None) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    t=np.asarray(times,dtype=float); d=np.asarray(events); x=np.asarray(x,dtype=float)
    if t.ndim != 1 or not len(t) or d.shape != t.shape or x.shape != t.shape:
        raise ValueError('Aligned, nonempty one-dimensional records required')
    if not np.all(np.isfinite(t)) or np.any(t<=0) or not np.all(np.isfinite(x)):
        raise ValueError('Observed times must be positive and finite; covariates finite')
    if not np.all(np.isin(d,[0,1])):
        raise ValueError('Event indicators must equal zero or one')
    if censor is not None:
        c=np.asarray(censor,dtype=float)
        if c.shape != t.shape or not np.all(np.isfinite(c)) or np.any(c<=0) or np.any(t>c) or np.any((d==0)&(t!=c)):
            raise ValueError('Records inconsistent with administrative censoring')
    return t,d.astype(float),x


def survival(time, scale, shape):
    t=np.asarray(time,dtype=float); lam=np.asarray(scale,dtype=float); k=np.asarray(shape,dtype=float)
    if not np.all(np.isfinite(t)) or np.any(t<0) or not np.all(np.isfinite(lam)) or np.any(lam<=0) or not np.all(np.isfinite(k)) or np.any(k<=0):
        raise ValueError('Time must be nonnegative; scale and shape finite and positive')
    return np.exp(-(t/lam)**k)


def log_likelihood(theta, times, events, x) -> np.ndarray:
    t,d,x=observations(times,events,x)
    theta=np.atleast_2d(np.asarray(theta,dtype=float))
    if theta.shape[1] != 3 or not np.all(np.isfinite(theta)):
        raise ValueError('Finite (logscale intercept, slope, logshape) required')
    a,b,r=theta.T
    k=np.exp(r[:,None]); loglam=a[:,None]+b[:,None]*x
    z=k*(np.log(t)-loglam)
    # Large cumulative hazards correctly have negligible posterior mass.
    with np.errstate(over='ignore'):
        return (d*(r[:,None]-loglam+(k-1)*(np.log(t)-loglam))-np.exp(z)).sum(axis=1)


def log_prior(theta, *, unit_scale=1.):
    theta=np.atleast_2d(theta)
    if not np.isfinite(unit_scale) or unit_scale<=0:
        raise ValueError('Unit scale must be positive')
    return norm.logpdf(theta,[np.log(12*unit_scale),0,0],[.6,.5,.4]).sum(axis=1)


def geometry(times,events,x):
    t,d,x=observations(times,events,x)
    def objective(v):
        return float(-(log_likelihood(v,t,d,x)+log_prior(v))[0])
    opt=minimize(objective,[np.log(12),0,0],method='BFGS',options={'gtol':1e-8,'maxiter':1000})
    mode=opt.x; h=1e-4; eye=np.eye(3)*h
    hessian=np.empty((3,3))
    for i in range(3):
        for j in range(3):
            hessian[i,j]=(objective(mode+eye[i]+eye[j])-objective(mode+eye[i]-eye[j])-objective(mode-eye[i]+eye[j])+objective(mode-eye[i]-eye[j]))/(4*h*h)
    chol=np.linalg.cholesky(np.linalg.inv(hessian))
    return mode,chol,dict(success=bool(opt.success),status=int(opt.status),message=str(opt.message),iterations=int(opt.nit),gradient_norm=float(np.linalg.norm(opt.jac)),mode=mode.tolist(),hessian=hessian.tolist())


@dataclass
class Fit:
    nodes: np.ndarray
    weights: np.ndarray
    log_normalizer: float
    mean: np.ndarray
    geometry: dict
    order: int
    bound: float


def fit(training: dict, *, settings: dict, seed=None) -> Fit:
    """No file IO; integrates normalized prior times observation likelihood."""
    t,d,x=observations(training['t'],training['event'],training['x'],censor=training.get('censor'))
    order=settings['order']; bound=settings['bound']
    if isinstance(order,bool) or not isinstance(order,int) or order<3 or not np.isfinite(bound) or bound<=0:
        raise ValueError('Positive quadrature bound and integer order >=3 required')
    mode,chol,diagnostic=geometry(t,d,x)
    v,w=leggauss(order); v=v*bound; w=w*bound
    grids=np.meshgrid(v,v,v,indexing='ij')
    z=np.column_stack([g.ravel() for g in grids])
    nodes=mode+z@chol.T
    weights=np.einsum('i,j,k->ijk',w,w,w).ravel()
    logw=np.log(weights)+np.linalg.slogdet(chol)[1]
    for start in range(0,len(nodes),4096):
        sl=slice(start,start+4096)
        logw[sl]+=log_likelihood(nodes[sl],t,d,x)+log_prior(nodes[sl])
    normalizer=float(logsumexp(logw)); weight=np.exp(logw-normalizer)
    return Fit(nodes,weight,normalizer,weight@nodes,diagnostic,order,bound)


def weighted_summary(value: np.ndarray, weights: np.ndarray) -> dict:
    order=np.argsort(value)
    quant=np.interp([.05,.5,.95],np.cumsum(weights[order]),value[order])
    return dict(mean=float(weights@value),q05=float(quant[0]),median=float(quant[1]),q95=float(quant[2]))


def predict(fitted: Fit, queries, *, settings=None) -> dict:
    """Queries are (time in weeks, scaled workload); no observed outcomes accepted."""
    rows=[]
    for t,x in queries:
        if not np.isfinite(x):
            raise ValueError('Workload must be finite')
        v=survival(t,np.exp(fitted.nodes[:,0]+fitted.nodes[:,1]*x),np.exp(fitted.nodes[:,2]))
        rows.append(weighted_summary(v,fitted.weights))
    return dict(queries=np.asarray(queries).tolist(),survival=rows)


def targets(fitted: Fit) -> dict:
    theta=fitted.nodes; k=np.exp(theta[:,2])
    low=survival(12,np.exp(theta[:,0]-.5*theta[:,1]),k)
    high=survival(12,np.exp(theta[:,0]+.5*theta[:,1]),k)
    # Stable conditional event probability, avoiding a ratio of underflowed survivals.
    conditional=-np.expm1(-((12/np.exp(theta[:,0]))**k-(8/np.exp(theta[:,0]))**k))
    return {name:weighted_summary(v,fitted.weights) for name,v in [('low',low),('high',high),('contrast',high-low),('conditional',conditional)]}
