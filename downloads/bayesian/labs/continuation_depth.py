"""Pure numerical utilities shared by the four depth labs; no fitting or IO on import."""
import numpy as np
from scipy.special import ndtr, logsumexp
from scipy.optimize import brentq
from numpy.polynomial.legendre import leggauss


def vector(value, name='values'):
    a=np.asarray(value,dtype=float)
    if a.ndim!=1 or not len(a) or not np.all(np.isfinite(a)):
        raise ValueError(f'{name} must be a nonempty finite vector')
    return a


def normal_grid(means, sds, order, bound):
    if isinstance(order,bool) or not isinstance(order,(int,np.integer)) or order<3:
        raise ValueError('order must be an integer at least three')
    if not np.isfinite(bound) or bound<=0:
        raise ValueError('bound must be positive and finite')
    u,w=leggauss(order)
    coords=[m+bound*s*u for m,s in zip(means,sds)]
    a,b=np.meshgrid(*coords,indexing='ij')
    weights=np.outer(w*bound*sds[0],w*bound*sds[1]).ravel()
    nodes=np.column_stack([a.ravel(),b.ravel()])
    lp=-.5*np.sum(((nodes-means)/sds)**2,axis=1)-np.log(2*np.pi*np.prod(sds))
    return nodes,np.log(weights)+lp


def normalize(logweights):
    z=logsumexp(logweights)
    if not np.isfinite(z): raise ValueError('No finite posterior mass')
    return np.exp(logweights-z),float(z)


def mixture_summary(weights, means, variances):
    w=vector(weights,'weights'); m=vector(means,'means'); v=vector(variances,'variances')
    if w.shape!=m.shape or v.shape!=m.shape or np.any(w<0) or abs(w.sum()-1)>1e-8 or np.any(v<=0):
        raise ValueError('Normalized nonnegative weights and positive variances of equal shape required')
    sd=np.sqrt(v)
    def cdf(t): return float(w@ndtr((t-m)/sd))
    low=float(np.min(m-12*sd)); high=float(np.max(m+12*sd))
    mean=float(w@m); variance=float(w@(v+(m-mean)**2))
    qs=[float(brentq(lambda t:cdf(t)-p,low,high,xtol=1e-11)) for p in [.05,.5,.95]]
    return dict(mean=mean,variance=variance,q05=qs[0],q50=qs[1],q95=qs[2],cdf_zero=cdf(0),quantile_residual=max(abs(cdf(q)-p) for q,p in zip(qs,[.05,.5,.95])))


def normal_mixture_score(weights, means, variances, outcomes):
    y=vector(outcomes,'outcomes')
    m=np.asarray(means); v=np.asarray(variances); w=vector(weights,'weights')
    if m.ndim!=2 or v.shape!=m.shape or m.shape!=(len(w),len(y)) or np.any(v<=0) or not np.all(np.isfinite(m)):
        raise ValueError('Prediction arrays must be components by observations with positive variance')
    return logsumexp(np.log(w+1e-300)[:,None]-.5*(np.log(2*np.pi*v)+(y-m)**2/v),axis=0)
