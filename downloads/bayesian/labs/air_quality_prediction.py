"""C03 SC01 mixture quantiles and a sealed, one-pass scoring boundary.

No outcomes are opened here before explicit load_final_outcomes with a complete
four-fit seal. Predictive functions are pure. Custodian paths are allowlisted.
"""
from __future__ import annotations
from dataclasses import dataclass
import hashlib
import json
from pathlib import Path
import numpy as np
from scipy.optimize import brentq
from scipy.special import ndtr, ndtri, logsumexp
import air_quality_common as c

PROBABILITIES = (.05, .5, .95)
COVARIATES = c.ROOT / 'artifacts/reference/c03/data/final_covariates.csv'
FREEZE = c.ROOT / 'plans/expansion_implementation/c03_analysis_freeze.json'
SCORING_SPEC = c.ROOT / 'plans/expansion_implementation/case_contract_v2.json'
COLUMNS = ['station','date','n_hours','n_pm25','n_wspm','n_pair','wspm_m_s','eligible_18','eligible_24','split']
REQUIRED_FREEZE_BINDINGS = (
    'plans/expansion_implementation/case_contract_v2.json',
    'plans/expansion_implementation/case/SC01_amendment_v1.json',
    'plans/expansion_implementation/case/acquisition_manifest.json',
    'plans/expansion_implementation/case/split_v1.json',
    'plans/expansion_implementation/case/transforms_v1.json',
    'artifacts/reference/c03/data/training.csv',
    'artifacts/reference/c03/data/final_covariates.csv',
)


class PredictionError(ValueError):
    def __init__(self, reason: str, status: str = 'numerical_failure'):
        self.status, self.reason = status, reason
        super().__init__(reason)


def verified_freeze() -> dict:
    if not FREEZE.exists(): raise ValueError('Analysis freeze required before sealing final predictions')
    freeze=json.loads(FREEZE.read_text())
    if freeze.get('status')!='frozen': raise ValueError('Analysis freeze incomplete')
    if not set(REQUIRED_FREEZE_BINDINGS)<=set(freeze.get('bindings',{})):
        raise ValueError('SC01 and acquisition/transform bindings are mandatory')
    for path,expected in freeze['bindings'].items():
        if c.digest(c.ROOT/path)!=expected: raise ValueError(f'Frozen input changed: {path}')
    if set(freeze['model_specs'])!=set(c.FINAL_SPECS): raise ValueError('Frozen four-fit inventory mismatch')
    return freeze


def canonical_hash(value) -> str:
    return hashlib.sha256(json.dumps(value,sort_keys=True,separators=(',',':'),allow_nan=False).encode()).hexdigest()


def array_hash(value) -> str:
    a=np.ascontiguousarray(value)
    h=hashlib.sha256()
    h.update(str(a.dtype).encode()); h.update(str(a.shape).encode()); h.update(a.tobytes())
    return h.hexdigest()


@dataclass(frozen=True)
class FinalCovariates:
    stations: tuple[str,...]
    dates: tuple[str,...]
    x: np.ndarray
    eligible_18: np.ndarray
    eligible_24: np.ndarray
    source_sha256: str
    transform_sha256: str


def load_final_covariates() -> FinalCovariates:
    """No arbitrary paths: fixed manifest-bound weather/eligibility only."""
    import pandas as pd
    manifest=json.loads((c.CASE/'acquisition_manifest.json').read_text())
    expected=manifest['derived'][str(COVARIATES.relative_to(c.ROOT))]['sha256']
    if c.digest(COVARIATES)!=expected:
        raise ValueError('Final covariate hash mismatch')
    frame=pd.read_csv(COVARIATES)
    if list(frame.columns)!=COLUMNS:
        raise ValueError('Unexpected columns; final outcomes prohibited')
    stations=tuple(json.loads((c.CASE/'split_v1.json').read_text())['final_sites'])
    dates=tuple(pd.date_range('2016-01-01','2016-12-31').strftime('%Y-%m-%d'))
    keys={(s,d) for s in stations for d in dates}
    if (len(frame)!=len(keys) or frame.duplicated(['station','date']).any()
        or set(zip(frame.station,frame.date))!=keys or set(frame.split)!={'final'}):
        raise ValueError('Final covariate sites/calendar/keys mismatch')
    if not np.isfinite(frame[['n_hours','n_pm25','n_wspm','n_pair']]).all().all():
        raise ValueError('Nonfinite counts')
    for name in ['n_hours','n_pm25','n_wspm','n_pair']:
        a=frame[name].to_numpy()
        if np.any((a<0)|(a>24)|(a!=np.floor(a))):
            raise ValueError('Invalid hourly count')
    if np.any(frame.n_pair>np.minimum(frame.n_pm25,frame.n_wspm)):
        raise ValueError('Paired count exceeds observed counts')
    for rule in (18,24):
        expected_mask=(frame.n_pair>=18) if rule==18 else (frame.n_pair==24)
        if not np.array_equal(frame[f'eligible_{rule}'].to_numpy(),expected_mask.astype(int)):
            raise ValueError('Eligibility flags mismatch')
    transforms=json.loads((c.CASE/'transforms_v1.json').read_text())
    def grid(column):
        return frame.pivot(index='date',columns='station',values=column).reindex(index=dates,columns=stations).to_numpy()
    mask18,mask24=grid('eligible_18').astype(bool),grid('eligible_24').astype(bool)
    wind=grid('wspm_m_s').astype(float)
    if not np.isfinite(wind[mask18]).all() or np.any(wind[mask18]<0):
        raise ValueError('Invalid eligible wind')
    x=np.where(mask18,(wind-transforms['wind_mean'])/transforms['wind_population_sd'],0.)
    for a in (x,mask18,mask24): a.setflags(write=False)
    return FinalCovariates(stations,dates,x,mask18,mask24,expected,c.digest(c.CASE/'transforms_v1.json'))


def require_covariates(value):
    if type(value) is not FinalCovariates:
        raise TypeError('Expected FinalCovariates, never final outcomes')
    approved=load_final_covariates()
    for key in ('stations','dates','source_sha256','transform_sha256'):
        if getattr(value,key)!=getattr(approved,key): raise ValueError('Unapproved covariates')
    for key in ('x','eligible_18','eligible_24'):
        if not np.array_equal(getattr(value,key),getattr(approved,key)): raise ValueError('Altered covariates')


def _mixture(mu,variance,weights=None):
    mu,v=np.asarray(mu,dtype=float),np.asarray(variance,dtype=float)
    if mu.size==0 or mu.shape!=v.shape or not np.isfinite(mu).all() or not np.isfinite(v).all() or np.any(v<=0):
        raise PredictionError('Mixture needs finite locations and positive finite variances')
    if weights is None:
        w=np.full(mu.size,1/mu.size)
    else:
        w=np.asarray(weights,dtype=float).ravel()
        if w.size!=mu.size or not np.isfinite(w).all() or np.any(w<0) or w.sum()<=0:
            raise PredictionError('Invalid mixture weights')
        w=w/w.sum()
    return mu.ravel(),v.ravel(),w


def mixture_quantiles(mu, variance, probabilities=PROBABILITIES, *, weights=None) -> dict:
    mu,v,w=_mixture(mu,variance,weights)
    p=np.asarray(probabilities,dtype=float)
    if p.ndim!=1 or not len(p) or not np.isfinite(p).all() or np.any((p<=0)|(p>=1)):
        raise PredictionError('Quantile probabilities must be strictly between zero and one')
    sd=np.sqrt(v)
    answers=[]; residuals=[]
    for probability in p:
        component=mu+sd*ndtri(probability)
        lo,hi=float(component.min()),float(component.max())
        def objective(z): return float(w@ndtr((z-mu)/sd)-probability)
        try:
            q=lo if lo==hi else brentq(objective,np.nextafter(lo,-np.inf),np.nextafter(hi,np.inf),xtol=1e-10,rtol=1e-12,maxiter=200)
        except (ValueError,RuntimeError) as exc:
            raise PredictionError(f'CDF inversion failed: {exc}') from exc
        residual=abs(objective(q))
        if residual>1e-10: raise PredictionError('CDF inversion residual exceeds 1e-10')
        answers.append(q); residuals.append(residual)
    with np.errstate(over='ignore',under='ignore'):
        physical=np.exp(answers)
    if not np.isfinite(physical).all() or np.any(physical<=0):
        raise PredictionError('Physical quantile cannot be represented in float64')
    return dict(probabilities=p.tolist(),log_quantiles=answers,quantiles_ug_m3=physical.tolist(),cdf_residuals=residuals,status='ok')


def mixture_logpdf(concentration, mu, variance, *, weights=None) -> float:
    if not np.isfinite(concentration): raise PredictionError('Nonfinite eligible concentration','data_integrity_failure')
    if concentration<=0: raise PredictionError('Nonpositive eligible concentration','model_support_failure')
    mu,v,w=_mixture(mu,variance,weights)
    z=np.log(concentration)
    with np.errstate(divide='ignore',over='ignore'):
        value=float(logsumexp(np.log(w)-.5*np.log(2*np.pi*v)-.5*(z-mu)**2/v-z))
    if not np.isfinite(value): raise PredictionError('Log density cannot be represented')
    return value


def batch_mcse(values: np.ndarray, batch_lengths=(25,50)) -> dict:
    """Independent chains, equal lengths; batch boundaries never cross chains."""
    a=np.asarray(values,dtype=float)
    if a.ndim!=2 or not np.isfinite(a).all() or a.shape[0]<2:
        raise PredictionError('MCSE requires finite chain-by-draw contributions')
    estimates=[]
    for length in batch_lengths:
        if a.shape[1]%length or a.shape[1]//length<2:
            raise PredictionError('MCSE draw count must contain at least two complete batches of each length')
        chains,draws=a.shape
        batches=draws//length
        means=a.reshape(chains,batches,length).mean(axis=2)
        estimates.append(float(np.sqrt(means.var(axis=1,ddof=1).sum()/(chains**2*batches))))
    return dict(mcse=max(estimates),by_batch_length={str(k):v for k,v in zip(batch_lengths,estimates,strict=True)})


def quantile_mcse(mu, variance, log_quantiles) -> dict:
    a,v=np.asarray(mu),np.asarray(variance)
    if a.ndim!=2: raise PredictionError('Quantile MCSE requires chain/draw axes')
    _mixture(a,v)
    sd=np.sqrt(v)
    values=[]
    for q in log_quantiles:
        cdf=batch_mcse(ndtr((q-a)/sd))
        density=float(np.mean(np.exp(-.5*(q-a)**2/v)/np.sqrt(2*np.pi*v)))
        if density<=0 or not np.isfinite(density): raise PredictionError('Invalid log-axis quantile density')
        values.append(dict(cdf_mcse=cdf['mcse'],log_quantile_mcse=cdf['mcse']/density,batch_estimates=cdf['by_batch_length']))
    limits=[.03,.02,.03]
    if len(values)!=3: raise PredictionError('Production quantile MCSE expects .05/.50/.95')
    passed=all(a['cdf_mcse']<=.01 and a['log_quantile_mcse']<=limit for a,limit in zip(values,limits,strict=True))
    return dict(values=values,status='ok' if passed else 'insufficient_precision')


def log_density_mcse(log_concentration,mu,variance) -> dict:
    a,v=np.asarray(mu),np.asarray(variance)
    if a.ndim!=2: raise PredictionError('Density MCSE requires chain/draw axes')
    _mixture(a,v)
    logs=-.5*np.log(2*np.pi*v)-.5*(log_concentration-a)**2/v-log_concentration
    scale=float(logs.max())
    if not np.isfinite(scale): raise PredictionError('Nonfinite log-density contribution')
    values=np.exp(logs-scale)
    result=batch_mcse(values)
    mcse=result['mcse']/float(values.mean())
    return dict(log_density_mcse_nats=mcse,status='ok' if mcse<=.05 else 'insufficient_precision')


def state_components(bundle: c.FitBundle, panel: c.TrainingPanel):
    """Training-only smoother with calendar transitions, chain/draw axes."""
    c.require_training(panel)
    if type(bundle) is not c.FitBundle or bundle.metadata['training_sha256']!=panel.source_sha256:
        raise ValueError('Fit/training mismatch')
    if bundle.metadata['spec']['completeness']!=panel.completeness:
        raise ValueError('Fit completeness mismatch')
    p=bundle.posterior
    shape=p['alpha'].shape
    M=np.empty((*shape,len(panel.y))); V=np.empty_like(M)
    for chain,draw in np.ndindex(shape):
        params={k:p[k][chain,draw] for k in ('alpha','beta','gamma')}
        if 'b' in p: params['b']=p['b'][chain,draw]
        n,mean,ss=c.daily_residual_stats(panel,params)
        phi=float(p['phi'][chain,draw]); q=float(p['sigma_u'][chain,draw]**2)
        filtered=c.filter_numpy(n,mean,ss,phi,q,float(p['sigma_y'][chain,draw]**2))
        M[chain,draw],V[chain,draw]=c.smooth(filtered,phi,q)
    return M,V


def marginal_components(bundle, panel, covariates):
    """Yield each calendar row's Normal-mixture components; bounded memory."""
    require_covariates(covariates)
    M,V=state_components(bundle,panel)
    p=bundle.posterior
    eligibility=getattr(covariates,f'eligible_{panel.completeness}')
    for j,station in enumerate(covariates.stations):
        for t,date in enumerate(covariates.dates):
            if not eligibility[t,j]:
                yield (station,date),False,None,None
                continue
            x=covariates.x[t,j]
            mu=p['alpha']+p['beta']*x+np.einsum('cdk,k->cd',p['gamma'],panel.season[t])+M[:,:,t]
            variance=p['sigma_y']**2+V[:,:,t]
            if 'tau' in p:
                tau0,tau1=p['tau'][:,:,0],p['tau'][:,:,1]
                rho=p['rho']
                variance=variance+(tau0+rho*x*tau1)**2+(x*tau1)**2*(1-rho**2)
            yield (station,date),True,mu,variance


def simulate_new_site_trajectories(bundle, panel, covariates, seed):
    """Yield log draws in eligible station-major order; shared state/site effects.

    The generator keeps one calendar path and one effect vector per new site
    per posterior draw. Ineligible rows have no simulated concentration value.
    This is the trajectory interface; marginal mixture integration above is
    insufficient for maxima, totals, or cross-day/site dependence summaries.
    """
    require_covariates(covariates)
    c.require_training(panel)
    if type(bundle) is not c.FitBundle or bundle.metadata['training_sha256']!=panel.source_sha256:
        raise ValueError('Fit/training mismatch')
    if bundle.metadata['spec']['completeness']!=panel.completeness:
        raise ValueError('Fit completeness mismatch')
    rng=np.random.default_rng(seed); posterior=bundle.posterior
    mask=getattr(covariates,f'eligible_{panel.completeness}').T
    for chain,draw in np.ndindex(posterior['alpha'].shape):
        parameters={key:posterior[key][chain,draw] for key in ('alpha','beta','gamma')}
        if 'b' in posterior: parameters['b']=posterior['b'][chain,draw]
        phi=float(posterior['phi'][chain,draw]); q=float(posterior['sigma_u'][chain,draw]**2)
        sigma=float(posterior['sigma_y'][chain,draw])
        filtered=c.filter_numpy(*c.daily_residual_stats(panel,parameters),phi,q,sigma**2)
        state=c.ffbs(filtered,phi,q,rng)
        means=parameters['alpha']+parameters['beta']*covariates.x+(panel.season@parameters['gamma']+state)[:,None]
        if 'tau' in posterior:
            tau=posterior['tau'][chain,draw]; rho=float(posterior['rho'][chain,draw])
            L=np.array([[tau[0],0.],[rho*tau[1],tau[1]*np.sqrt(1-rho*rho)]])
            b=rng.normal(size=(len(covariates.stations),2))@L.T
            means=means+b[:,0]+b[:,1]*covariates.x
        simulated=means+rng.normal(0,sigma,means.shape)
        yield chain,draw,simulated.T[mask]


@dataclass(frozen=True)
class PredictionSummary:
    commitment: dict
    rows: tuple[dict,...]
    seal_sha256: str
    # Reconstruction inputs live in memory or authenticated cache, not giant
    # component arrays. Serialization writes commitment/rows only.
    bundle: c.FitBundle


def predict_marginals(bundle, training_panel, new_site_covariates) -> PredictionSummary:
    if type(bundle) is not c.FitBundle or type(training_panel) is not c.TrainingPanel or type(new_site_covariates) is not FinalCovariates:
        raise TypeError('Prediction requires FitBundle, TrainingPanel and FinalCovariates; final outcomes are prohibited')
    freeze=verified_freeze()
    fit_id=bundle.metadata.get('fit_id')
    if fit_id not in c.FINAL_SPECS: raise ValueError('Only the four frozen candidates can be sealed')
    if bundle.metadata['spec']!=freeze['model_specs'][fit_id]: raise ValueError('Model differs from freeze')
    if bundle.metadata['sampler']!=freeze['sampler'] or bundle.metadata['seed']!=freeze['seeds'][fit_id]:
        raise ValueError('Sampler/seed differs from freeze')
    if c.digest(SCORING_SPEC)!=freeze['bindings'][str(SCORING_SPEC.relative_to(c.ROOT))]:
        raise ValueError('SC01 scoring contract changed')
    for path,expected in freeze['prediction_source_hashes'].items():
        if c.digest(c.ROOT/path)!=expected: raise ValueError('Prediction source changed after freeze')
    rows=[]; stream=hashlib.sha256()
    for key,eligible,mu,v in marginal_components(bundle,training_panel,new_site_covariates):
        stream.update(json.dumps([*key,eligible],separators=(',',':')).encode())
        row=dict(station=key[0],date=key[1],eligible=eligible,status='not_eligible')
        if eligible:
            stream.update(np.ascontiguousarray(mu,dtype='<f8').tobytes()); stream.update(np.ascontiguousarray(v,dtype='<f8').tobytes())
            try:
                q=mixture_quantiles(mu,v)
                mcse=quantile_mcse(mu,v,q['log_quantiles'])
                density=[log_density_mcse(z,mu,v) for z in q['log_quantiles']]
                row.update(predictive_q05_ug_m3=q['quantiles_ug_m3'][0],predictive_median_ug_m3=q['quantiles_ug_m3'][1],predictive_q95_ug_m3=q['quantiles_ug_m3'][2],log_quantiles=q['log_quantiles'],mcse=mcse,density_prescore_mcse=density,status='ok' if mcse['status']=='ok' and all(a['status']=='ok' for a in density) else 'insufficient_precision')
            except PredictionError as exc:
                row.update(status=exc.status,reason=exc.reason)
        rows.append(row)
    commitments=dict(fit_id=fit_id,posterior_array_hashes={k:array_hash(v) for k,v in bundle.posterior.items()},analysis_freeze_sha256=c.digest(FREEZE),training_sha256=training_panel.source_sha256,transform_sha256=new_site_covariates.transform_sha256,split_sha256=c.digest(c.CASE/'split_v1.json'),covariate_sha256=new_site_covariates.source_sha256,scoring_specification_sha256=c.digest(SCORING_SPEC),numerical_source_hashes=freeze['prediction_source_hashes'],component_stream_sha256=stream.hexdigest(),reconstruction='marginal_components: station order from split, full calendar, little-endian float64 chain/draw means then variances for each eligible row; keys/eligibility JSON prefix',diagnostics_pass=bundle.metadata['diagnostics']['screen_pass'],precision_pass=all(r['status'] in ('ok','not_eligible') for r in rows))
    seal=canonical_hash(dict(commitment=commitments,rows=rows))
    return PredictionSummary(commitments,tuple(rows),seal,bundle)


def validate_seals(predictions,freeze_sha256):
    if set(predictions)!=set(c.FINAL_SPECS): raise ValueError('Complete four-fit inventory required')
    if not FREEZE.exists() or c.digest(FREEZE)!=freeze_sha256: raise ValueError('Freeze hash mismatch')
    freeze=verified_freeze()
    if freeze.get('final_outcome_access_authorized') is not True:
        raise ValueError('Scientific/resource gate has not authorized final outcome access')
    for fit_id,p in predictions.items():
        if type(p) is not PredictionSummary: raise TypeError('Expected sealed PredictionSummary')
        b=p.commitment
        if b['fit_id']!=fit_id or b['analysis_freeze_sha256']!=freeze_sha256:
            raise ValueError('Prediction/freeze ID mismatch')
        if (p.bundle.metadata['spec']!=freeze['model_specs'][fit_id]
            or p.bundle.metadata['sampler']!=freeze['sampler']
            or p.bundle.metadata['seed']!=freeze['seeds'][fit_id]):
            raise ValueError('Fit model/sampler/seed differs from freeze')
        if not b['diagnostics_pass'] or not b['precision_pass']:
            raise ValueError('Prescore diagnostics or precision failed; keep outcomes sealed')
        if canonical_hash(dict(commitment=b,rows=p.rows))!=p.seal_sha256: raise ValueError('Prediction seal mismatch')
        if b['scoring_specification_sha256']!=c.digest(SCORING_SPEC): raise ValueError('SC01 contract mismatch')
        if b['posterior_array_hashes']!={k:array_hash(v) for k,v in p.bundle.posterior.items()}:
            raise ValueError('Posterior arrays changed after sealing')
        cov=load_final_covariates()
        expected_keys=tuple((s,d) for s in cov.stations for d in cov.dates)
        if tuple((r['station'],r['date']) for r in p.rows)!=expected_keys:
            raise ValueError('Prediction keys differ from frozen calendar/sites')
        rule=p.bundle.metadata['spec']['completeness']
        eligibility=getattr(cov,f'eligible_{rule}').T.ravel()
        if not np.array_equal([r['eligible'] for r in p.rows],eligibility):
            raise ValueError('Prediction eligibility differs from frozen rule')
        if (b['covariate_sha256']!=cov.source_sha256 or b['transform_sha256']!=cov.transform_sha256
            or b['split_sha256']!=c.digest(c.CASE/'split_v1.json') or b['training_sha256']!=c.digest(c.TRAINING)):
            raise ValueError('Prediction input bindings changed')
        for path,sha in b['numerical_source_hashes'].items():
            if c.digest(c.ROOT/path)!=sha: raise ValueError('Numerical source changed')


@dataclass(frozen=True)
class FinalOutcomes:
    keys: tuple[tuple[str,str],...]
    concentrations: np.ndarray
    source_sha256: str
    freeze_sha256: str
    prediction_seals: dict


def load_final_outcomes(predictions,freeze_sha256) -> FinalOutcomes:
    """Explicit downstream unblinding only after four seals. Never used by gate."""
    import pandas as pd
    validate_seals(predictions,freeze_sha256)
    path=c.ROOT/'.private/evaluation/c03/final_outcomes.csv'
    expected=json.loads((c.CASE/'acquisition_manifest.json').read_text())['derived'][str(path.relative_to(c.ROOT))]['sha256']
    if c.digest(path)!=expected: raise ValueError('Quarantined outcome hash mismatch')
    df=pd.read_csv(path)
    cov=load_final_covariates()
    keys=tuple((s,d) for s in cov.stations for d in cov.dates)
    if df.duplicated(['station','date']).any() or set(zip(df.station,df.date))!=set(keys):
        raise ValueError('Outcome keys mismatch')
    indexed=df.set_index(['station','date'])
    values=indexed.loc[list(keys),'pm25_ug_m3'].to_numpy(float)
    values.setflags(write=False)
    return FinalOutcomes(keys,values,expected,freeze_sha256,{k:v.seal_sha256 for k,v in predictions.items()})


METRIC_KEYS=('empirical_mae_predictive_median_ug_m3','empirical_rmse_predictive_median_ug_m3','mean_marginal_log_density_nats','empirical_coverage_90','mean_interval_width_90_ug_m3')


def empirical_metrics(rows: list[dict]) -> dict:
    """Finite empirical descriptors; no expected-loss or independent-day SE claim."""
    selected=[r for r in rows if r['eligible']]
    result=dict(n_eligible=len(selected),n_calendar=len(rows),n_failures=sum(r['status']!='ok' for r in selected))
    if not selected or result['n_failures']:
        result.update({key:None for key in METRIC_KEYS})
        result['status']='no_eligible_rows' if not selected else 'required_comparison_failure'
        return result
    y=np.array([r['observed_ug_m3'] for r in selected]); median=np.array([r['predictive_median_ug_m3'] for r in selected])
    lo=np.array([r['predictive_q05_ug_m3'] for r in selected]); hi=np.array([r['predictive_q95_ug_m3'] for r in selected])
    error=y-median
    result.update(dict(zip(METRIC_KEYS,[float(np.abs(error).mean()),float(np.linalg.norm(error)/np.sqrt(len(error))),float(np.mean([r['log_density_nats'] for r in selected])),float(np.mean((y>=lo)&(y<=hi))),float((hi-lo).mean())],strict=True)))
    if not all(np.isfinite(result[k]) for k in METRIC_KEYS):
        result.update({key:None for key in METRIC_KEYS}); result['status']='numerical_failure'
        result['reason']='Empirical aggregate cannot be represented in float64'
    else: result['status']='ok'
    return result


def score_observation(row,concentration,mu,variance) -> dict:
    r=dict(row)
    if not row['eligible']: return r
    try:
        density=mixture_logpdf(concentration,mu,variance)
        mcse=log_density_mcse(float(np.log(concentration)),mu,variance)
        r.update(observed_ug_m3=float(concentration),log_density_nats=density,log_density_mcse_nats=mcse['log_density_mcse_nats'],status=mcse['status'])
    except PredictionError as exc:
        r.update(observed_ug_m3=float(concentration) if np.isfinite(concentration) else None,log_density_nats=None,status=exc.status,reason=exc.reason)
    return r


def score_final(predictions, final_outcomes, freeze_sha256) -> dict:
    """Reconstruct and verify all streams; no reading/writing/refitting here."""
    validate_seals(predictions,freeze_sha256)
    if type(final_outcomes) is not FinalOutcomes: raise TypeError('Expected protected FinalOutcomes')
    if final_outcomes.freeze_sha256!=freeze_sha256 or final_outcomes.prediction_seals!={k:v.seal_sha256 for k,v in predictions.items()}:
        raise ValueError('Outcomes/seals mismatch')
    expected=json.loads((c.CASE/'acquisition_manifest.json').read_text())['derived']['.private/evaluation/c03/final_outcomes.csv']['sha256']
    if final_outcomes.source_sha256!=expected: raise ValueError('Final outcome source mismatch')
    cov=load_final_covariates(); fits={}
    for fit_id,p in predictions.items():
        panel=c.load_training_panel(p.bundle.metadata['spec']['completeness'])
        reconstructed=predict_marginals(p.bundle,panel,cov)
        if reconstructed.seal_sha256!=p.seal_sha256: raise ValueError('Reconstruction does not match sealed prediction')
        keys=tuple((r['station'],r['date']) for r in p.rows)
        if final_outcomes.keys!=keys: raise ValueError('Ordered outcome keys mismatch')
        rows=[]
        # Paired posterior draws across dates are kept for aggregate numerical
        # log-score MCSE. Delta contributions share one common chain/draw axis.
        influence=np.zeros_like(p.bundle.posterior['alpha']); n_density=0
        for row,(_,eligible,mu,v),y in zip(p.rows,marginal_components(p.bundle,panel,cov),final_outcomes.concentrations,strict=True):
            scored=score_observation(row,y,mu,v) if eligible else dict(row)
            rows.append(scored)
            if eligible and scored['status']=='ok':
                z=np.log(y); logs=-.5*np.log(2*np.pi*v)-.5*(z-mu)**2/v-z
                scaled=np.exp(logs-logs.max()); influence+=scaled/scaled.mean()-1; n_density+=1
        native=empirical_metrics(rows)
        native['mean_log_density_numerical_mcse']=batch_mcse(influence/n_density)['mcse'] if n_density and native['status']=='ok' else None
        fits[fit_id]=dict(rows=rows,native=native,sites={s:empirical_metrics([r for r in rows if r['station']==s]) for s in cov.stations})
    common=set.intersection(*[{(r['station'],r['date']) for r in f['rows'] if r['eligible']} for f in fits.values()])
    for f in fits.values():
        f['common']=empirical_metrics([r for r in f['rows'] if (r['station'],r['date']) in common])
        f['common_sites']={s:empirical_metrics([r for r in f['rows'] if r['station']==s and (s,r['date']) in common]) for s in cov.stations}
    paired={}
    base=fits['pooled_base']['common']
    for name,f in fits.items():
        if name!='pooled_base': paired[name+'_minus_pooled_base']={k:f['common'][k]-base[k] if f['common'][k] is not None and base[k] is not None else None for k in METRIC_KEYS}
    result=dict(schema_version=1,analysis_freeze_sha256=freeze_sha256,prediction_seals=final_outcomes.prediction_seals,scoring_rule='SC01 predictive mixture median; finite empirical losses',fits=fits,common_n=len(common),paired_differences=paired,status='ok' if all(f['native']['status']=='ok' for f in fits.values()) else 'required_comparison_failure',limitations=['Marginal scores are not a joint trajectory density.','No independent-day or across-site confidence intervals.','Empirical errors do not imply finite posterior expected losses.','Numerical MCSE is distinct from predictive uncertainty.'])
    json.dumps(result,allow_nan=False)
    return result
