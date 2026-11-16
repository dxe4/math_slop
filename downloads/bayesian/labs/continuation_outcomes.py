"""Nominal/ordinal probabilities, explicit PyMC fits, and independent fixtures."""
from dataclasses import dataclass
import numpy as np
from scipy.special import expit, logsumexp
from scipy.stats import norm
from numpy.polynomial.legendre import leggauss


def softmax(logits):
    a=np.asarray(logits,dtype=float)
    if a.ndim<1 or a.shape[-1]<2 or not np.all(np.isfinite(a)):
        raise ValueError('Finite logits for at least two categories required')
    return np.exp(a-logsumexp(a,axis=-1,keepdims=True))


def ordinal_probabilities(eta, cutpoints):
    eta=np.asarray(eta,dtype=float); c=np.asarray(cutpoints,dtype=float)
    if c.shape[-1:]!=(2,) or not np.all(np.isfinite(c)) or np.any(c[...,1]<=c[...,0]) or not np.all(np.isfinite(eta)):
        raise ValueError('Finite predictor and two strictly increasing cutpoints required')
    cumulative=expit(c-eta[...,None])
    # Stable interior difference, including at very large eta.
    low=c[...,0]-eta; high=c[...,1]-eta
    middle=np.exp(-np.logaddexp(0,-high)-np.logaddexp(0,low)+np.log(-np.expm1(low-high)))
    return np.stack([expit(low),middle,expit(-high)],axis=-1)


def validate_data(x,y=None):
    x=np.asarray(x,dtype=float)
    if x.ndim!=2 or x.shape[1]!=2 or not len(x) or not np.all(np.isfinite(x)):
        raise ValueError('Finite N by 2 scaled load/age matrix required')
    if y is not None:
        y=np.asarray(y)
        if y.shape!=(len(x),) or not np.all(np.isin(y,[0,1,2])):
            raise ValueError('One category code 0, 1 or 2 per observation required')
        return x,y.astype(int)
    return x


def generate(generator, n=90, *, changed=False):
    load=generator.uniform(25,75,n); age=generator.uniform(1,9,n)
    x=np.column_stack([(load-50)/25,(age-5)/4])
    if changed:
        logits=np.column_stack([np.zeros(n),1+1.8*x[:,0]+.2*x[:,1],-.3+4*x[:,0]+.6*x[:,1]])
        p=softmax(logits)
    else:
        p=ordinal_probabilities(x@np.array([.9,.6]),np.array([-.5,.8]))
    y=(generator.random(n)[:,None]>np.cumsum(p,axis=1)).sum(axis=1)
    return dict(x=x,y=y,load=load,age=age)


@dataclass
class Fit:
    kind: str
    draws: dict
    idata: object
    diagnostics: dict


def fit(training: dict, *, settings: dict, seed: int) -> Fit:
    import pymc as pm
    import pytensor.tensor as pt
    import arviz as az
    x,y=validate_data(training['x'],training['y'])
    kind=settings['kind']; fixture=settings.get('fixture',False)
    if kind not in ('nominal','ordinal'):
        raise ValueError('Choose nominal or ordinal')
    with pm.Model() as model:
        if kind=='nominal':
            alpha=pm.Normal('alpha',0,1.5,shape=2)
            beta=pt.zeros((2,2)) if fixture else pm.Normal('beta',0,1,shape=(2,2))
            eta=alpha+pt.dot(x,beta)
            p=pm.math.softmax(pt.concatenate([pt.zeros((len(x),1)),eta],axis=1),axis=1)
            query=alpha+pt.dot(np.array([[-1.,0.],[1.,0.]]),beta)
            qp=pm.math.softmax(pt.concatenate([pt.zeros((2,1)),query],axis=1),axis=1)
            center=pm.math.softmax(pt.concatenate([pt.zeros(1),alpha]))
        else:
            m=pm.Normal('m',0,1.5)
            loggap=pm.Normal('loggap',np.log(1.3),.4)
            beta=pt.zeros(2) if fixture else pm.Normal('beta',0,1,shape=2)
            cut=pt.stack([m-pt.exp(loggap)/2,m+pt.exp(loggap)/2])
            cumulative=pm.math.sigmoid(cut[None,:]-pt.dot(x,beta)[:,None])
            p=pt.stack([cumulative[:,0],cumulative[:,1]-cumulative[:,0],1-cumulative[:,1]],axis=1)
            qc=pm.math.sigmoid(cut[None,:]-pt.dot(np.array([[-1.,0.],[1.,0.]]),beta)[:,None])
            qp=pt.stack([qc[:,0],qc[:,1]-qc[:,0],1-qc[:,1]],axis=1)
            cc=pm.math.sigmoid(cut)
            center=pt.stack([cc[0],cc[1]-cc[0],1-cc[1]])
        pm.Categorical('observed',p=p,observed=y)
        pm.Deterministic('center',center)
        if not fixture:
            pm.Deterministic('retire_contrast',qp[1,2]-qp[0,2])
        idata=pm.sample(draws=1500,tune=1000,chains=4,cores=1,target_accept=.95,
                        init='jitter+adapt_diag',random_seed=seed,progressbar=False,
                        compute_convergence_checks=True,return_inferencedata=True)
    variables=['alpha'] if kind=='nominal' else ['m','loggap']
    if not fixture:
        variables+=['beta','retire_contrast']
    variables+=['center']
    summary=az.summary(idata,var_names=variables,round_to='none')
    rows={str(k):{str(key):float(v) for key,v in row.items()} for k,row in summary.to_dict(orient='index').items()}
    divergences=int(idata.sample_stats.diverging.sum())
    rh=float(summary.r_hat.max()); ess=float(min(summary.ess_bulk.min(),summary.ess_tail.min()))
    diagnostic=dict(summary=rows,divergences=divergences,max_rhat=rh,min_ess=ess,
                    passed=divergences==0 and rh<1.01 and ess>=400,
                    sampler_seed=seed,initialization='jitter+adapt_diag',chains=4,cores=1,tune=1000,draws=1500,target_accept=.95,
                    mean_acceptance=float(idata.sample_stats.acceptance_rate.mean()),max_tree_depth=int(idata.sample_stats.tree_depth.max()),
                    step_size_by_chain=idata.sample_stats.step_size.mean('draw').values.tolist())
    draws={name:np.asarray(idata.posterior[name]).reshape((-1,)+np.asarray(idata.posterior[name]).shape[2:]) for name in variables if name not in ['center','retire_contrast']}
    return Fit(kind,draws,idata,diagnostic)


def predict(fitted: Fit, queries, *, settings=None):
    x=validate_data(queries); d=fitted.draws
    if fitted.kind=='nominal':
        eta=d['alpha'][:,None,:]+np.einsum('nf,sfk->snk',x,d.get('beta',np.zeros((len(d['alpha']),2,2))))
        return softmax(np.concatenate([np.zeros(eta.shape[:-1]+(1,)),eta],axis=-1))
    gap=np.exp(d['loggap']); cuts=np.column_stack([d['m']-gap/2,d['m']+gap/2])
    eta=np.einsum('nf,sf->sn',x,d.get('beta',np.zeros((len(gap),2))))
    return ordinal_probabilities(eta,cuts[:,None,:])


def score(prediction, outcomes):
    p=np.asarray(prediction,dtype=float); y=np.asarray(outcomes)
    if p.ndim!=3 or p.shape[2]!=3 or y.shape!=(p.shape[1],) or not np.all(np.isin(y,[0,1,2])) or np.any(p<0) or not np.all(np.isfinite(p)) or not np.allclose(p.sum(axis=-1),1,rtol=0,atol=1e-12):
        raise ValueError('Normalized posterior-draw probabilities and aligned categories required')
    pp=p.mean(axis=0); lp=np.log(pp[np.arange(len(y)),y.astype(int)])
    return dict(mean_log_score=float(lp.mean()),pointwise_log_score=lp.tolist(),expected_frequencies=pp.mean(axis=0).tolist(),observed_frequencies=np.bincount(y.astype(int),minlength=3).__truediv__(len(y)).tolist())


def fixture_quadrature(kind: str, order: int) -> dict:
    v,w=leggauss(order)
    if kind=='nominal':
        a=12*v; b=12*v; wa=12*w; wb=12*w
    elif kind=='ordinal':
        a=12*v; b=np.log(1.3)+3.2*v; wa=12*w; wb=3.2*w
    else:
        raise ValueError('Unknown model')
    ag,bg=np.meshgrid(a,b,indexing='ij'); aa=ag.ravel(); bb=bg.ravel()
    if kind=='nominal':
        p=softmax(np.column_stack([np.zeros(len(aa)),aa,bb])); prior=norm.logpdf(aa,0,1.5)+norm.logpdf(bb,0,1.5)
    else:
        p=ordinal_probabilities(np.zeros(len(aa)),np.column_stack([aa-np.exp(bb)/2,aa+np.exp(bb)/2])); prior=norm.logpdf(aa,0,1.5)+norm.logpdf(bb,np.log(1.3),.4)
    logw=np.log(np.outer(wa,wb).ravel())+prior+(np.log(p)*[3,2,3]).sum(axis=1)
    z=logsumexp(logw); weights=np.exp(logw-z)
    return dict(mean=(weights@p).tolist(),log_normalizer=float(z),order=order,bounds='eight prior SD per coordinate')
