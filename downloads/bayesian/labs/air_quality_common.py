"""C03 exact Gaussian state likelihood and training-only model.

Variance arguments are variances. No downloads, fitting, or writes on import.
Kalman likelihood includes all constants and the integrated stationary initial
law. The analytic reverse recursion is O(days), including completely empty days.
"""
from __future__ import annotations
from dataclasses import dataclass
import hashlib
import json
from pathlib import Path
import numpy as np
from numba import njit

ROOT = Path(__file__).resolve().parents[1]
CASE = ROOT/'plans/expansion_implementation/case'
TRAINING = ROOT/'artifacts/reference/c03/data/training.csv'
SAMPLER = dict(chains=4, tune=1000, draws=1000, cores=1, blas_cores=1, target_accept=.95, max_treedepth=10)
BASE = dict(effects='correlated', completeness=18, eta=2., phi_alpha=4., phi_beta=2., state_scale=.75, season_scale=.5, coordinates='noncentered')
FINAL_SPECS = {
    'pooled_base': dict(BASE, effects='none'),
    'hierarchical_base': dict(BASE),
    'hierarchical_covariance_alt': dict(BASE,eta=1.),
    'hierarchical_completeness_alt': dict(BASE,completeness=24),
}
DEVELOPMENT_SPECS = {
    'training_base': dict(BASE),
    'p_phi_Beta_2_2': dict(BASE,phi_alpha=2.,phi_beta=2.),
    'a_u_HalfNormal_1.5': dict(BASE,state_scale=1.5),
    'seasonal_Normal_0_1': dict(BASE,season_scale=1.),
}


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


@dataclass(frozen=True)
class TrainingPanel:
    """Calendar x training-station arrays; missing cells have zero placeholders."""
    y: np.ndarray
    x: np.ndarray
    mask: np.ndarray
    season: np.ndarray
    stations: tuple[str, ...]
    completeness: int
    source_sha256: str
    transforms: dict


def load_training_panel(completeness: int = 18) -> TrainingPanel:
    """Fixed allowlisted input; final outcome files are never accepted as arguments."""
    import pandas as pd
    if completeness not in (18,24):
        raise ValueError('Only frozen completeness rules 18 and 24 are permitted')
    acquisition = json.loads((CASE/'acquisition_manifest.json').read_text())
    expected = acquisition['derived'][str(TRAINING.relative_to(ROOT))]['sha256']
    if digest(TRAINING) != expected:
        raise ValueError('Training data hash mismatch')
    split = json.loads((CASE/'split_v1.json').read_text())
    frame = pd.read_csv(TRAINING)
    stations = tuple(split['training_sites'])
    if set(frame.station) != set(stations) or set(frame.split) != {'training'}:
        raise ValueError('Fitting accepts training stations only')
    transforms = json.loads((CASE/'transforms_v1.json').read_text())
    if transforms['training_sha256'] != expected:
        raise ValueError('Transform source mismatch')
    dates = pd.date_range('2016-01-01','2016-12-31').strftime('%Y-%m-%d')
    def grid(column: str) -> np.ndarray:
        return frame.pivot(index='date', columns='station', values=column).reindex(index=dates,columns=stations).to_numpy()
    mask = grid(f'eligible_{completeness}').astype(bool)
    raw_y, wind = grid('pm25_ug_m3'), grid('wspm_m_s')
    if np.any(raw_y[mask] <= 0) or not np.isfinite(raw_y[mask]).all() or not np.isfinite(wind[mask]).all():
        raise ValueError('Eligible training data outside model support')
    y = np.zeros_like(raw_y)
    y[mask] = np.log(raw_y[mask])
    x = np.where(mask,(wind-transforms['wind_mean'])/transforms['wind_population_sd'],0.)
    t = np.arange(366)
    season = np.column_stack((np.sin(2*np.pi*t/366),np.cos(2*np.pi*t/366)))
    season -= season.mean(axis=0)
    for arr in (y,x,mask,season):
        arr.setflags(write=False)
    return TrainingPanel(y,x,mask,season,stations,completeness,expected,transforms)


def require_training(panel: TrainingPanel) -> None:
    if type(panel) is not TrainingPanel:
        raise TypeError('Expected TrainingPanel, never a final-outcome container')
    split = json.loads((CASE/'split_v1.json').read_text())
    if panel.stations != tuple(split['training_sites']) or panel.source_sha256 != digest(TRAINING):
        raise ValueError('Unapproved training panel')
    # Reject fabricated/relabelled outcome arrays as well as final-site names.
    approved = load_training_panel(panel.completeness)
    if panel.transforms != approved.transforms:
        raise ValueError('Panel transform mismatch')
    for key in ('y','x','mask','season'):
        if not np.array_equal(getattr(panel,key),getattr(approved,key)):
            raise ValueError('Panel differs from immutable training source')


def daily_residual_stats(panel: TrainingPanel, mean_parameters: dict) -> tuple:
    if type(panel) is not TrainingPanel:
        raise TypeError('Expected TrainingPanel')
    b = np.asarray(mean_parameters.get('b',np.zeros((len(panel.stations),2))))
    mu = (mean_parameters['alpha'] + mean_parameters['beta']*panel.x
          + (panel.season @ np.asarray(mean_parameters['gamma']))[:,None]
          + b[:,0] + b[:,1]*panel.x)
    e = np.where(panel.mask,panel.y-mu,0.)
    n = panel.mask.sum(axis=1).astype(float)
    mean = e.sum(axis=1)/np.maximum(n,1)
    ss = np.where(panel.mask,(e-mean[:,None])**2,0.).sum(axis=1)
    return n,mean,ss


def validate_stats(n, mean, ss, phi, q, r) -> tuple:
    n,mean,ss = (np.asarray(a,dtype=float) for a in (n,mean,ss))
    if (n.ndim != 1 or len(n)==0 or n.shape!=mean.shape or n.shape!=ss.shape
        or not all(np.isfinite(a).all() for a in (n,mean,ss))
        or np.any(n<0) or np.any(n != np.floor(n)) or np.any(ss<0)
        or not np.isfinite([phi,q,r]).all() or abs(phi)>=1 or q<=0 or r<=0):
        raise ValueError('Invalid Gaussian state parameters or daily sufficient statistics')
    return n,mean,ss


@njit(cache=False, error_model='numpy')
def _filter(n, mean, ss, phi, q, r):
    size = len(n)
    a = np.empty(size); R = np.empty(size); m = np.empty(size); P = np.empty(size)
    value = 0.
    for t in range(size):
        a[t] = 0. if t==0 else phi*m[t-1]
        R[t] = q/(1-phi*phi) if t==0 else phi*phi*P[t-1]+q
        if n[t] == 0:
            m[t],P[t] = a[t],R[t]
        else:
            F = R[t]+r/n[t]
            v = mean[t]-a[t]
            value -= .5*((n[t]-1)*np.log(2*np.pi*r)+np.log(n[t])+ss[t]/r+np.log(2*np.pi*F)+v*v/F)
            m[t] = a[t]+R[t]/F*v
            P[t] = R[t]*r/(r+n[t]*R[t])
    return value,a,R,m,P


@njit(cache=False, error_model='numpy')
def _logp_gradient(n, mean, ss, phi, q, r):
    value,a,R,m,P = _filter(n,mean,ss,phi,q,r)
    gm = np.zeros(len(n)); gw = np.zeros(len(n))
    gp,gq,gr,am,ap = 0.,0.,0.,0.,0.
    for t in range(len(n)-1,-1,-1):
        if n[t]>0:
            F = R[t]+r/n[t]; v = mean[t]-a[t]; K = R[t]/F
            dF = -.5*(1/F-v*v/(F*F))
            da = am*(1-K)+v/F
            dR = am*(r/n[t])*v/(F*F)+ap*(r/(r+n[t]*R[t]))**2+dF
            gm[t] = am*K-v/F
            gw[t] = -.5/r
            gr += -am*(R[t]/n[t])*v/(F*F)+ap*n[t]*(R[t]/(r+n[t]*R[t]))**2+dF/n[t]-.5*((n[t]-1)/r-ss[t]/(r*r))
        else:
            da,dR = am,ap
        if t>0:
            gp += da*m[t-1]+dR*2*phi*P[t-1]
            gq += dR
            am,ap = da*phi,dR*phi*phi
        else:
            gq += dR/(1-phi*phi)
            gp += dR*2*q*phi/(1-phi*phi)**2
    return value,gm,gw,gp,gq,gr


@dataclass(frozen=True)
class FilterResult:
    logp: float
    predicted_mean: np.ndarray
    predicted_var: np.ndarray
    mean: np.ndarray
    var: np.ndarray


def filter_numpy(n, mean, ss, phi: float, process_var: float, residual_var: float) -> FilterResult:
    args = validate_stats(n,mean,ss,phi,process_var,residual_var)
    return FilterResult(*_filter(*args,phi,process_var,residual_var))


def smooth(filtered: FilterResult, phi: float, process_var: float) -> tuple:
    m,P = filtered.mean,filtered.var
    M,V = m.copy(),P.copy()
    for t in range(len(m)-2,-1,-1):
        R = phi*phi*P[t]+process_var
        J = P[t]*phi/R
        M[t] = m[t]+J*(M[t+1]-phi*m[t])
        V[t] = P[t]*process_var/R+J*J*V[t+1]
    return M,V


def ffbs(filtered: FilterResult, phi: float, process_var: float, rng: np.random.Generator) -> np.ndarray:
    m,P = filtered.mean,filtered.var
    u = np.empty(len(m))
    u[-1] = rng.normal(m[-1],np.sqrt(P[-1]))
    for t in range(len(m)-2,-1,-1):
        R = phi*phi*P[t]+process_var
        J = P[t]*phi/R
        u[t] = rng.normal(m[t]+J*(u[t+1]-phi*m[t]),np.sqrt(P[t]*process_var/R))
    return u


def kalman_logp_pt(n, mean, ss, phi, process_var, residual_var):
    """Differentiable float64 Op: analytic reverse derivatives, no finite differences."""
    import pytensor.tensor as pt
    from pytensor.graph.op import Op
    from pytensor.gradient import disconnected_type
    def representable(inputs):
        counts,means,sums,p,q,r=inputs
        return (np.isfinite([p,q,r]).all() and abs(p)<1 and q>0 and r>0
                and np.isfinite(means).all() and np.isfinite(sums).all())
    class KalmanGrad(Op):
        itypes = [pt.dvector,pt.dvector,pt.dvector,pt.dscalar,pt.dscalar,pt.dscalar]
        otypes = [pt.dvector,pt.dvector,pt.dscalar,pt.dscalar,pt.dscalar]
        def perform(self,node,inputs,outputs):
            # Extreme warmup proposals can round logistic phi to +/-1 or
            # underflow a scale. Their log density is -inf below. The unused
            # zero derivative lets native NUTS reject them, without a clipping
            # repair or a finite likelihood at a numerically invalid point.
            if representable(inputs):
                result = _logp_gradient(*inputs)
            else:
                result = (-np.inf,np.zeros_like(inputs[1]),np.zeros_like(inputs[2]),0.,0.,0.)
            if not all(np.isfinite(v).all() for v in result):
                result = (-np.inf,np.zeros_like(inputs[1]),np.zeros_like(inputs[2]),0.,0.,0.)
            for target,val in zip(outputs,result[1:],strict=True):
                target[0] = np.asarray(val,dtype='float64')
    grad_op = KalmanGrad()
    class KalmanLogp(Op):
        itypes = KalmanGrad.itypes
        otypes = [pt.dscalar]
        def perform(self,node,inputs,outputs):
            # Reject a proposal if either its density or derivative cannot be
            # represented; never combine a finite accepted density with the
            # unused derivative fallback above.
            if representable(inputs):
                result=_logp_gradient(*inputs)
                value=result[0] if all(np.isfinite(v).all() for v in result) else -np.inf
            else:
                value=-np.inf
            outputs[0][0] = np.asarray(value if np.isfinite(value) else -np.inf,dtype='float64')
        def grad(self,inputs,output_grads):
            derivatives = grad_op(*inputs)
            return [disconnected_type(),*[output_grads[0]*d for d in derivatives]]
        def connection_pattern(self,node):
            return [[False],[True],[True],[True],[True],[True]]
    return KalmanLogp()(*[pt.as_tensor_variable(v,dtype='float64') for v in (n,mean,ss,phi,process_var,residual_var)])


def kalman_scan_pt(n, mean, ss, phi, q, r):
    """Independent autodiff implementation for development timing/gradient comparison."""
    import pytensor
    import pytensor.tensor as pt
    def step(nt,mt,wt,a,R,phi,q,r):
        nn=pt.maximum(nt,1.)
        F=R+r/nn; v=mt-a
        ll=-.5*((nt-1)*pt.log(2*np.pi*r)+pt.log(nn)+wt/r+pt.log(2*np.pi*F)+v*v/F)
        m=pt.where(nt>0,a+R/F*v,a)
        P=pt.where(nt>0,R*r/(r+nt*R),R)
        return phi*m,phi*phi*P+q,pt.where(nt>0,ll,0.)
    outputs,_=pytensor.scan(step,sequences=[n,mean,ss],outputs_info=[pt.as_tensor_variable(np.float64(0)),q/(1-phi*phi),None],non_sequences=[phi,q,r],strict=True)
    return outputs[2].sum()


def build_model(panel: TrainingPanel, spec: dict):
    import pymc as pm
    import pytensor.tensor as pt
    require_training(panel)
    if spec['completeness'] != panel.completeness:
        raise ValueError('Panel completeness does not match model specification')
    with pm.Model() as model:
        alpha=pm.Normal('alpha',np.log(50),1.)
        beta=pm.Normal('beta',0,.5)
        gamma=pm.Normal('gamma',0,spec['season_scale'],shape=2)
        sigma=pm.HalfNormal('sigma_y',.5)
        pphi=pm.Beta('p_phi',spec['phi_alpha'],spec['phi_beta'])
        phi=pm.Deterministic('phi',2*pphi-1)
        au=pm.HalfNormal('a_u',spec['state_scale'])
        su=pm.Deterministic('sigma_u',au*pt.sqrt(1-phi**2))
        mu=alpha+beta*panel.x+pt.dot(panel.season,gamma)[:,None]
        if spec['effects']=='correlated':
            tau=pm.HalfNormal('tau',np.array([.5,.35]),shape=2)
            prho=pm.Beta('p_rho',spec['eta'],spec['eta'])
            rho=pm.Deterministic('rho',2*prho-1)
            L=pt.stack([pt.stack([tau[0],pt.zeros_like(rho)]),pt.stack([rho*tau[1],tau[1]*pt.sqrt(1-rho*rho)])])
            if spec['coordinates']=='noncentered':
                xi=pm.Normal('xi',0,1,shape=(len(panel.stations),2))
                b=pm.Deterministic('b',pt.dot(xi,L.T))
            elif spec['coordinates']=='centered':
                b=pm.MvNormal('b',mu=pt.zeros(2),chol=L,shape=(len(panel.stations),2))
            else:
                raise ValueError('Unknown coordinates')
            mu=mu+b[:,0]+b[:,1]*panel.x
        elif spec['effects']!='none':
            raise ValueError('Unknown effects specification')
        e=pt.where(panel.mask,panel.y-mu,0.)
        n=panel.mask.sum(axis=1).astype(float)
        mean=e.sum(axis=1)/np.maximum(n,1)
        ss=pt.where(panel.mask,(e-mean[:,None])**2,0.).sum(axis=1)
        pm.Potential('observed_logp',kalman_logp_pt(n,mean,ss,phi,su**2,sigma**2))
    return model


def sample_model(model, sampler: dict, seed: int):
    import pymc as pm
    with model:
        return pm.sample(draws=sampler['draws'],tune=sampler['tune'],chains=sampler['chains'],cores=sampler['cores'],blas_cores=sampler['blas_cores'],random_seed=seed,target_accept=sampler['target_accept'],nuts={'max_treedepth':sampler['max_treedepth']},init='jitter+adapt_diag',nuts_sampler='pymc',progressbar=False,compute_convergence_checks=True,discard_tuned_samples=False,idata_kwargs={'log_likelihood':False})


def diagnostics(idata) -> dict:
    import arviz as az
    summary=az.summary(idata,kind='all')
    stats=idata.sample_stats
    result=dict(divergences=int(stats.diverging.sum()),max_rhat=float(summary.r_hat.max()),min_bulk_ess=float(summary.ess_bulk.min()),min_tail_ess=float(summary.ess_tail.min()),min_bfmi=float(np.min(az.bfmi(idata))),depth_hits=int(stats.reached_max_treedepth.sum()),max_mean_mcse_sd_ratio=float((summary.mcse_mean/summary.sd).max()),mean_steps=float(stats.n_steps.mean()),parameters=json.loads(summary.to_json(orient='index')))
    # Unrounded diagnostics, not display-rounded summary values, decide acceptance.
    rh=max(float(np.max(a)) for a in az.rhat(idata).data_vars.values())
    eb=min(float(np.min(a)) for a in az.ess(idata,method='bulk').data_vars.values())
    et=min(float(np.min(a)) for a in az.ess(idata,method='tail').data_vars.values())
    result.update(max_rhat=rh,min_bulk_ess=eb,min_tail_ess=et)
    result['screen_pass']=bool(result['divergences']==0 and rh<=1.01 and eb>=400 and et>=400 and result['min_bfmi']>=.3 and result['depth_hits']==0 and result['max_mean_mcse_sd_ratio']<=.05)
    return result


@dataclass(frozen=True)
class FitBundle:
    """Parameter/sample-stat arrays retain chain, draw axes; no final outcomes."""
    posterior: dict
    sample_stats: dict
    warmup_posterior: dict
    warmup_sample_stats: dict
    metadata: dict


def fit_variant(panel: TrainingPanel, model_spec: dict, sampler_spec: dict, seed: int) -> FitBundle:
    """Explicit caller-owned fitting; no filesystem writes/downloads/cache fallback."""
    import time
    require_training(panel)
    started = time.perf_counter()
    model = build_model(panel, model_spec)
    built = time.perf_counter()
    idata = sample_model(model, sampler_spec, seed)
    sampled = time.perf_counter()
    report = diagnostics(idata)
    finished = time.perf_counter()
    def arrays(group):
        result = {k: np.asarray(v).copy() for k,v in group.data_vars.items()}
        for value in result.values():
            value.setflags(write=False)
        return result
    return FitBundle(arrays(idata.posterior), arrays(idata.sample_stats),
                     arrays(idata.warmup_posterior), arrays(idata.warmup_sample_stats),
                     dict(spec=dict(model_spec), sampler=dict(sampler_spec), seed=seed,
                          training_sha256=panel.source_sha256,
                          diagnostics=report,
                          timing_seconds=dict(build=built-started,
                              sampling_including_compile=sampled-built,
                              diagnostics=finished-sampled,total=finished-started)))


# Lazy public prediction interfaces keep the core numerical/cache dependency
# separate from reporting sources. Prediction evidence binds its own module.
def load_final_covariates():
    from air_quality_prediction import load_final_covariates as run
    return run()


def mixture_quantiles(mu, variance, probabilities=(.05,.5,.95), *, weights=None):
    from air_quality_prediction import mixture_quantiles as run
    return run(mu,variance,probabilities,weights=weights)


def mixture_logpdf(concentration, mu, variance, *, weights=None):
    from air_quality_prediction import mixture_logpdf as run
    return run(concentration,mu,variance,weights=weights)


def quantile_mcse(mu, variance, log_quantiles):
    from air_quality_prediction import quantile_mcse as run
    return run(mu,variance,log_quantiles)


def predict_marginals(bundle, training_panel, new_site_covariates):
    from air_quality_prediction import predict_marginals as run
    return run(bundle,training_panel,new_site_covariates)


def score_final(predictions, final_outcomes, freeze_sha256):
    from air_quality_prediction import score_final as run
    return run(predictions,final_outcomes,freeze_sha256)
