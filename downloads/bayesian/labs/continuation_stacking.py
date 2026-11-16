"""Conjugate regressions and density stacking; pure fitting/prediction/scoring."""
from dataclasses import dataclass
import numpy as np
from scipy.special import logsumexp
from scipy.stats import t
from scipy.optimize import minimize_scalar,brentq
from continuation_depth import vector

@dataclass
class Fit:
    center: float
    scale: float
    degree: int
    mean: np.ndarray
    covariance: np.ndarray
    shape: float
    rate: float


def design(x,center,scale,degree):
    x=vector(x,'x')
    if degree not in [1,2] or not np.isfinite(scale) or scale<=0: raise ValueError('degree1/2 and positive scale required')
    return np.column_stack([((x-center)/scale)**j for j in range(degree+1)])


def fit(training, *, settings, seed=None):
    x=vector(training['x'],'x'); y=vector(training['y'],'y')
    if len(x)!=len(y) or len(x)<2: raise ValueError('paired observations required')
    center=float(x.mean()); scale=float(x.std()); degree=settings['degree']; X=design(x,center,scale,degree)
    precision=np.diag([.25]+[1.]*degree); V=np.linalg.inv(precision+X.T@X); m=V@X.T@y
    a=3+len(y)/2; b=1+.5*(y@y-m@np.linalg.solve(V,m))
    if b<=0: raise ValueError('nonpositive posterior scale')
    return Fit(center,scale,degree,m,V,a,float(b))


def predict(fitted,queries, *, settings=None):
    X=design(queries,fitted.center,fitted.scale,fitted.degree)
    return dict(df=2*fitted.shape,mean=X@fitted.mean,scale=np.sqrt(fitted.rate/fitted.shape*(1+np.einsum('ij,jk,ik->i',X,fitted.covariance,X))))


def score(prediction,outcomes):
    y=vector(outcomes,'outcomes')
    if y.shape!=prediction['mean'].shape: raise ValueError('outcome shape mismatch')
    return t.logpdf(y,df=prediction['df'],loc=prediction['mean'],scale=prediction['scale'])


def objective(weight,logs):
    logs=np.asarray(logs,dtype=float)
    if logs.ndim!=2 or logs.shape[1]!=2 or not np.all(np.isfinite(logs)) or not 0<=weight<=1: raise ValueError('finite Nx2 log densities and weight in [0,1] required')
    if weight==0: return float(logs[:,1].sum())
    if weight==1: return float(logs[:,0].sum())
    return float(np.logaddexp(np.log(weight)+logs[:,0],np.log1p(-weight)+logs[:,1]).sum())


def learn_weight(logs):
    r=minimize_scalar(lambda w:-objective(w,logs),bounds=(0,1),method='bounded',options={'xatol':1e-10})
    w=max([0.,float(r.x),1.],key=lambda w:objective(w,logs))
    scaled=np.exp(logs-np.max(logs,axis=1,keepdims=True)); derivative=float(np.sum((scaled[:,0]-scaled[:,1])/(w*scaled[:,0]+(1-w)*scaled[:,1])))
    residual=abs(derivative) if 0<w<1 else max(0.,derivative if w==0 else -derivative)
    return w,dict(success=bool(r.success),message=str(r.message),iterations=int(r.nit),objective=objective(w,logs),derivative=derivative,kkt_residual=residual)


def mixture_intervals(predictions,weight):
    rows=[]
    for i in range(len(predictions[0]['mean'])):
        def cdf(y): return sum(w*t.cdf(y,p['df'],loc=p['mean'][i],scale=p['scale'][i]) for w,p in zip([weight,1-weight],predictions))
        lo=min(p['mean'][i]-100*p['scale'][i] for p in predictions); hi=max(p['mean'][i]+100*p['scale'][i] for p in predictions)
        rows.append([brentq(lambda y:cdf(y)-q,lo,hi) for q in [.05,.95]])
    return np.array(rows)
