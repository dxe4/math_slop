# %% [markdown]
# # Lab 15 — What did the instrument and selection process observe?
# Read A03. The register supplies a respondent fraction of 0.4. Four readings
# cannot identify the nonrespondent shift. All shifts are sensitivity settings.
# %%
import numpy as np
from scipy import stats, integrate

STEM, DEFAULT_SEED = "15_observation_process", 1515


# %% [markdown]
# ## Fitted calibration and missing predictors
# Unit gain and the input population N(0,1) are stipulated. Calibration offset,
# instrument SD, regression coefficients and response SD are all inferred.
# The held-out outcomes are available only to the separate scoring function.
# %%
OBS_PRIOR = dict(a_sd=.5, alpha_sd=2., beta_sd=1.5,
                 log_tau_mean=float(np.log(.45)), log_tau_sd=.4,
                 log_sigma_mean=float(np.log(.60)), log_sigma_sd=.4)
OBS_PREDICTOR = dict(mean=0., sd=1.)


def make_observation_example(seed: int = DEFAULT_SEED) -> dict:
    """Freeze design first; independent streams keep hidden values out of fit data."""
    ids = np.arange(48)
    train_mask, available = ids % 4 != 3, ~np.isin(ids % 5, [1, 4])
    rng = [np.random.default_rng(np.random.SeedSequence([seed, k])) for k in range(1, 5)]
    standards = np.arange(-2., 3.)
    calibration = dict(standards=standards.tolist(),
                       readings=(standards[:, None]+.35+.55*rng[0].normal(size=(5, 3))).tolist())
    x = rng[1].normal(size=48)
    w = .35+x+.55*rng[2].normal(size=48)
    y = .7+1.3*x+.65*rng[3].normal(size=48)
    readings = [float(w[i]) if available[i] else None for i in ids]
    train = dict(ids=ids[train_mask].tolist(),
                 readings=[readings[i] for i in ids[train_mask]], outcomes=y[train_mask].tolist())
    queries = [dict(id=int(i), reading=readings[i]) for i in ids[~train_mask]]
    return dict(calibration=calibration, train=train, queries=queries,
                evaluation=dict(ids=ids[~train_mask].tolist(), outcomes=y[~train_mask].tolist(),
                                latent_truth=x.tolist()),
                provenance=dict(seed=int(seed), streams={'calibration': 1, 'latent': 2, 'reading': 3, 'response': 4},
                                generating_parameters=dict(a=.35, alpha=.7, beta=1.3, tau=.55, sigma=.65)))


def validate_training_data(train: dict, calibration: dict) -> None:
    ids, y = np.asarray(train['ids']), np.asarray(train['outcomes'], dtype=float)
    readings = train['readings']
    if (ids.ndim != 1 or y.ndim != 1 or len(ids) != len(y) or len(readings) != len(y)
            or not len(y) or not np.all(np.isfinite(y)) or not np.all(np.isfinite(ids))
            or np.any(ids != np.floor(ids)) or len(np.unique(ids)) != len(ids)):
        raise ValueError('Training IDs must be unique integers with matching finite outcomes')
    if any(w is not None and (not np.isscalar(w) or not np.isfinite(w)) for w in readings):
        raise ValueError('Absent readings must be None; available readings must be finite')
    c, w = np.asarray(calibration['standards'], float), np.asarray(calibration['readings'], float)
    if (c.ndim != 1 or w.ndim != 2 or w.shape[0] != len(c) or not w.size
            or not np.all(np.isfinite(c)) or not np.all(np.isfinite(w))):
        raise ValueError('Calibration requires finite standards and a matching replicate matrix')


def _validate_settings(prior: dict, predictor: dict) -> None:
    if any(not np.isfinite(prior[k]) for k in OBS_PRIOR) or any(
            prior[k] <= 0 for k in OBS_PRIOR if k.endswith('_sd')):
        raise ValueError('Prior scales must be finite and positive')
    if not np.isfinite(predictor['mean']) or not np.isfinite(predictor['sd']) or predictor['sd'] <= 0:
        raise ValueError('Predictor mean must be finite and SD positive')


def collapsed_loglik(q, train: dict, calibration: dict, prior: dict,
                     predictor: dict) -> tuple:
    """Vectorised Gaussian elimination; q columns beta, log tau, log sigma.

    All training W marginals are included. Missing W integrates to one.
    Group sufficient statistics avoid a dense covariance per quadrature node.
    """
    validate_training_data(train, calibration)
    _validate_settings(prior, predictor)
    q = np.asarray(q, float)
    if q.ndim != 2 or q.shape[1] != 3 or not np.all(np.isfinite(q)):
        raise ValueError('q must have three finite columns')
    b, t2, s2 = q[:, 0], np.exp(2*q[:, 1]), np.exp(2*q[:, 2])
    u, v = predictor['mean'], predictor['sd']**2
    observed = np.array([w is not None for w in train['readings']])
    w = np.array([w for w in train['readings'] if w is not None])-u
    y = np.asarray(train['outcomes'])
    yp, ym = y[observed], y[~observed]
    r = (np.asarray(calibration['readings'])-np.asarray(calibration['standards'])[:, None]).ravel()
    n, k, l = len(r), len(yp), len(ym)
    # Inverse paired covariance entries A,B,E; determinant retains both densities.
    vw, vy = v+t2, b*b*v+s2
    det = vw*vy-b*b*v*v
    A, B, E = vy/det, -b*v/det, vw/det
    p0, p1 = prior['a_sd']**2, prior['alpha_sd']**2
    Q00, Q01, Q11 = 1/p0+n/t2+k*A, k*B, 1/p1+k*E+l/vy
    sy = yp.sum()-k*b*u
    h0 = r.sum()/t2+A*w.sum()+B*sy
    h1 = B*w.sum()+E*sy+(ym.sum()-l*b*u)/vy
    zDz = (np.dot(r,r)/t2+A*np.dot(w,w)
           +2*B*(np.dot(w,yp)-b*u*w.sum())
           +E*(np.dot(yp,yp)-2*b*u*yp.sum()+k*b*b*u*u)
           +(np.dot(ym,ym)-2*b*u*ym.sum()+l*b*b*u*u)/vy)
    Qdet = Q00*Q11-Q01*Q01
    C = np.empty((len(q), 2, 2))
    C[:,0,0], C[:,1,1], C[:,0,1], C[:,1,0] = Q11/Qdet,Q00/Qdet,-Q01/Qdet,-Q01/Qdet
    h = np.column_stack([h0,h1])
    m = np.einsum('nij,nj->ni', C, h)
    ll = -.5*((n+2*k+l)*np.log(2*np.pi)+n*np.log(t2)+k*np.log(det)+l*np.log(vy)
              +np.log(p0*p1)+np.log(Qdet)+zDz-np.sum(h*m,axis=1))
    if not (np.all(np.isfinite(ll)) and np.all(np.isfinite(m)) and np.all(np.isfinite(C))):
        raise ValueError('Nonfinite Gaussian calculation; integration domain exceeds numerical range')
    return ll,m,C


def fit_observation_model(train: dict, calibration: dict, *, prior: dict | None = None,
                          predictor: dict | None = None, integration: dict | None = None) -> dict:
    """Pure fit: no evaluation data, truth, future readings, or file writes."""
    from scipy.special import roots_legendre, logsumexp
    prior = dict(OBS_PRIOR if prior is None else prior)
    predictor = dict(OBS_PREDICTOR if predictor is None else predictor)
    validate_training_data(train, calibration)
    _validate_settings(prior, predictor)
    integration = {} if integration is None else integration
    orders = integration.get('orders', (129, 73, 73))
    bounds = integration.get('bounds', [(-6.,6.),
        (prior['log_tau_mean']-6*prior['log_tau_sd'], prior['log_tau_mean']+6*prior['log_tau_sd']),
        (prior['log_sigma_mean']-6*prior['log_sigma_sd'], prior['log_sigma_mean']+6*prior['log_sigma_sd'])])
    if len(orders)!=3 or any(not isinstance(o,(int,np.integer)) or o<3 for o in orders):
        raise ValueError('Require three integer quadrature orders >=3')
    if np.shape(bounds)!=(3,2) or not np.all(np.isfinite(bounds)) or any(lo>=hi for lo,hi in bounds):
        raise ValueError('Require three ordered finite bounds')
    axes, volumes = [], []
    for order,(lo,hi) in zip(orders,bounds):
        x,w = roots_legendre(order)
        axes.append(lo+(hi-lo)*(x+1)/2); volumes.append(w*(hi-lo)/2)
    nodes = np.stack(np.meshgrid(*axes,indexing='ij'),axis=-1).reshape(-1,3)
    logvolume = sum(np.log(w) for w in np.meshgrid(*volumes,indexing='ij')).ravel()
    # Batches cap temporary storage; retain full posterior mass and moments.
    ll,ms,cs = [],[],[]
    for start in range(0,len(nodes),40000):
        value,m,c = collapsed_loglik(nodes[start:start+40000],train,calibration,prior,predictor)
        ll.append(value); ms.append(m); cs.append(c)
    logprior = (stats.norm.logpdf(nodes[:,0],0,prior['beta_sd'])
                +stats.norm.logpdf(nodes[:,1],prior['log_tau_mean'],prior['log_tau_sd'])
                +stats.norm.logpdf(nodes[:,2],prior['log_sigma_mean'],prior['log_sigma_sd']))
    mass = np.concatenate(ll)+logprior+logvolume
    logz = float(logsumexp(mass))
    weights = np.exp(mass-logz)
    shell = np.zeros(len(nodes),bool)
    for j,(lo,hi) in enumerate(bounds):
        shell |= (nodes[:,j]<lo+.05*(hi-lo)) | (nodes[:,j]>hi-.05*(hi-lo))
    return dict(nodes=nodes, weights=weights, intercept_mean=np.concatenate(ms),
                intercept_cov=np.concatenate(cs), log_normalizer=logz, prior=prior,
                predictor=predictor, orders=list(orders), bounds=np.asarray(bounds).tolist(),
                shell_mass=float(weights[shell].sum()), axes=axes, volumes=volumes)


def _mixture_summary(weights, means, variances) -> dict:
    mean = float(weights@means)
    within = float(weights@variances)
    between = float(weights@((means-mean)**2))
    return dict(mean=mean, variance=within+between, within_variance=within, between_variance=between)


def _mixture_interval(weights, means, variances) -> tuple:
    """Probability-only pruning with explicitly bounded omitted posterior mass."""
    from scipy.special import ndtr
    from scipy.optimize import brentq
    ordered = np.argsort(weights)
    cumulative = np.cumsum(weights[ordered])
    keep = ordered[cumulative>1e-13]
    omitted = float(weights[ordered[cumulative<=1e-13]].sum())
    w = weights[keep]/weights[keep].sum()
    m,sd = means[keep],np.sqrt(variances[keep])
    def cdf(x): return float(w@ndtr((x-m)/sd))
    low,high = float(np.min(m-12*sd)),float(np.max(m+12*sd))
    interval = [float(brentq(lambda x:cdf(x)-p,low,high,xtol=1e-9)) for p in (.05,.95)]
    return interval,omitted


def summarize_fit(fit: dict) -> dict:
    from scipy.interpolate import CubicSpline
    from scipy.optimize import brentq
    w,q,m,C = fit['weights'],fit['nodes'],fit['intercept_mean'],fit['intercept_cov']
    result = {}
    for j,name in enumerate(['a','alpha']):
        result[name] = _mixture_summary(w,m[:,j],C[:,j,j])
        result[name]['interval90'],_ = _mixture_interval(w,m[:,j],C[:,j,j])
    for j,name in enumerate(['beta','tau','sigma']):
        values = q[:,j] if j==0 else np.exp(q[:,j])
        result[name] = _mixture_summary(w,values,np.zeros(len(w)))
        # Interpolate marginal density, not the discontinuous node CDF.
        marginal = w.reshape(fit['orders']).sum(axis=tuple(k for k in range(3) if k!=j))
        axis = fit['axes'][j]
        density = marginal/fit['volumes'][j]
        spline = CubicSpline(axis,density,bc_type='natural').antiderivative()
        low,high=axis[0],axis[-1]
        total=float(spline(high)-spline(low))
        ends=[brentq(lambda x:float(spline(x)-spline(low))/total-p,low,high) for p in (.05,.95)]
        result[name]['interval90'] = ends if j==0 else np.exp(ends).tolist()
    return result


def prediction_components(fit: dict, *, reading: float | None,
                          missing_predictor_mean: float | None = None) -> dict:
    from scipy.special import logsumexp
    if reading is not None and (not np.isscalar(reading) or not np.isfinite(reading)):
        raise ValueError('Reading must be finite or None')
    if missing_predictor_mean is not None and (reading is not None or not np.isfinite(missing_predictor_mean)):
        raise ValueError('Population shift requires a missing reading and finite mean')
    q,m,C=fit['nodes'],fit['intercept_mean'],fit['intercept_cov']
    b,t2,s2=q[:,0],np.exp(2*q[:,1]),np.exp(2*q[:,2])
    u=fit['predictor']['mean'] if missing_predictor_mean is None else missing_predictor_mean
    v=fit['predictor']['sd']**2
    mw,vw=m[:,0]+u,v+t2+C[:,0,0]
    my,vl=m[:,1]+b*u,b*b*v+C[:,1,1]
    mx,vx=np.full(len(q),u),np.full(len(q),v)
    weights=fit['weights'].copy()
    if reading is not None:
        logw=np.log(weights,where=weights>0,out=np.full_like(weights,-np.inf))+stats.norm.logpdf(reading,mw,np.sqrt(vw))
        weights=np.exp(logw-logsumexp(logw))
        cov=b*v+C[:,0,1]
        my=my+cov/vw*(reading-mw); vl=vl-cov*cov/vw
        mx=mx+v/vw*(reading-mw); vx=vx-v*v/vw
    return dict(weights=weights, predictor_mean=mx,predictor_variance=vx,
                response_mean=my,latent_response_variance=vl,response_variance=vl+s2,
                noise_variance=s2)


def predict_available(fit: dict, *, reading: float | None,
                      missing_predictor_mean: float | None = None) -> dict:
    """Per-query p(Y*|available W*,training); never accepts a future outcome."""
    from scipy.special import ndtr
    c=prediction_components(fit,reading=reading,missing_predictor_mean=missing_predictor_mean)
    w=c['weights']; m=c['response_mean']; v=c['response_variance']
    result=dict(predictor=_mixture_summary(w,c['predictor_mean'],c['predictor_variance']),
                latent_response=_mixture_summary(w,m,c['latent_response_variance']),
                response=_mixture_summary(w,m,v),expected_response_noise_variance=float(w@c['noise_variance']),
                reading=reading,missing_predictor_mean=missing_predictor_mean,
                probability_response_above_2=float(w@ndtr((m-2)/np.sqrt(v))))
    result['response']['interval90'],result['cdf_omitted_mass']=_mixture_interval(w,m,v)
    return result


def reconstruct_training_predictors(fit: dict, train: dict) -> dict:
    """Explanatory reconstruction conditions on the recorded training response."""
    q,m,C,w=fit['nodes'],fit['intercept_mean'],fit['intercept_cov'],fit['weights']
    b,t2,s2=q[:,0],np.exp(2*q[:,1]),np.exp(2*q[:,2])
    u,v=fit['predictor']['mean'],fit['predictor']['sd']**2
    results=[]
    for identity,reading,y in zip(train['ids'],train['readings'],train['outcomes']):
        precision=1/v+b*b/s2
        rhs=u/v+b*(y-m[:,1])/s2
        la=np.zeros(len(w)); ly=-b/s2
        if reading is not None:
            precision=precision+1/t2; rhs=rhs+(reading-m[:,0])/t2; la=-1/t2
        conditional_variance=1/precision
        mean=conditional_variance*rhs
        variance=conditional_variance+conditional_variance**2*(la*la*C[:,0,0]+2*la*ly*C[:,0,1]+ly*ly*C[:,1,1])
        results.append(dict(id=identity,reading_available=reading is not None,
                            **_mixture_summary(w,mean,variance)))
    return dict(items=results,conditioning='training readings and outcomes')


def freeze_predictions(fit: dict, queries: list[dict], training_ids) -> list[dict]:
    """Validate split IDs then freeze predictions and density mixtures for scoring."""
    ids=[q['id'] for q in queries]
    if len(set(ids))!=len(ids) or set(ids)&set(training_ids):
        raise ValueError('Query IDs must be unique and disjoint from training')
    result=[]
    for query in queries:
        summary=predict_available(fit,reading=query['reading'])
        components=prediction_components(fit,reading=query['reading'])
        result.append(dict(id=query['id'],summary=summary,components={key:components[key] for key in
            ('weights','response_mean','response_variance')}))
    return result


def score_predictions(predictions: list[dict], heldout_outcomes) -> dict:
    """Only this evaluation boundary receives heldout responses, after prediction."""
    from scipy.special import logsumexp
    y=np.asarray(heldout_outcomes,float)
    if y.shape!=(len(predictions),) or not np.all(np.isfinite(y)):
        raise ValueError('Require one finite outcome per frozen prediction')
    rows=[]
    for p,value in zip(predictions,y):
        c=p['components']; w=c['weights']; summary=p['summary']
        logw=np.log(w,where=w>0,out=np.full_like(w,-np.inf))
        logp=float(logsumexp(logw+stats.norm.logpdf(value,c['response_mean'],np.sqrt(c['response_variance']))))
        lo,hi=summary['response']['interval90']
        rows.append(dict(id=p['id'],reading_available=summary['reading'] is not None,
                         log_predictive_density=logp,covered=bool(lo<=value<=hi)))
    groups={}
    for available in (True,False):
        group=[r for r in rows if r['reading_available']==available]
        if group:
            groups['available' if available else 'missing']=dict(n=len(group),
                mean_log_predictive_density=float(np.mean([r['log_predictive_density'] for r in group])),
                coverage90=float(np.mean([r['covered'] for r in group])))
    return dict(rows=rows,groups=groups,units='log density per response unit')


def _fit_comparison(left: dict, right: dict) -> dict:
    a,b=summarize_fit(left),summarize_fit(right)
    moments=[abs(left['log_normalizer']-right['log_normalizer'])]
    intervals=[]; probabilities=[]
    for key in a:
        moments.extend([abs(a[key]['mean']-b[key]['mean']),
                        abs(np.sqrt(a[key]['variance'])-np.sqrt(b[key]['variance']))])
        intervals.extend(np.abs(np.array(a[key]['interval90'])-b[key]['interval90']))
    for reading in (None,-1.,1.,3.):
        p,r=predict_available(left,reading=reading),predict_available(right,reading=reading)
        for key in ('predictor','latent_response','response'):
            moments.extend(abs(p[key][k]-r[key][k]) for k in ('mean','variance'))
        intervals.extend(np.abs(np.array(p['response']['interval90'])-r['response']['interval90']))
        probabilities.append(abs(p['probability_response_above_2']-r['probability_response_above_2']))
    result=dict(max_moment_or_logz_difference=float(max(moments)),
                max_interval_difference=float(max(intervals)),max_probability_difference=float(max(probabilities)))
    result['passed']=(max(moments)<1e-3 and max(intervals)<.01 and max(probabilities)<.002)
    return result


def checked_observation_fit(train: dict, calibration: dict, *, prior=None, predictor=None) -> tuple:
    coarse=fit_observation_model(train,calibration,prior=prior,predictor=predictor,
                                 integration={'orders':(97,73,73)})
    fine=fit_observation_model(train,calibration,prior=prior,predictor=predictor,
                               integration={'orders':(129,97,97)})
    refinement=_fit_comparison(coarse,fine)
    del coarse
    p=fine['prior']
    bounds=[(-9,9),(p['log_tau_mean']-8*p['log_tau_sd'],p['log_tau_mean']+8*p['log_tau_sd']),
            (p['log_sigma_mean']-8*p['log_sigma_sd'],p['log_sigma_mean']+8*p['log_sigma_sd'])]
    expanded=fit_observation_model(train,calibration,prior=prior,predictor=predictor,
                                   integration={'orders':(193,129,129),'bounds':bounds})
    expansion=_fit_comparison(fine,expanded)
    outside=np.any((expanded['nodes']<np.array(fine['bounds'])[:,0]) |
                   (expanded['nodes']>np.array(fine['bounds'])[:,1]),axis=1)
    report=dict(refinement=refinement,expansion=expansion,
                orders=[(97,73,73),(129,97,97),(193,129,129)],
                original_bounds=fine['bounds'],expanded_bounds=bounds,
                shell_mass=fine['shell_mass'],expanded_shell_mass=expanded['shell_mass'],
                expanded_mass_outside_original=float(expanded['weights'][outside].sum()),
                log_normalizer=fine['log_normalizer'])
    if not refinement['passed'] or not expansion['passed']:
        raise ArithmeticError(f'Observation integration tolerance not met: {report}')
    return fine,report


def _observation_statistics(calibration_readings, standards, readings, outcomes, available) -> dict:
    residuals=calibration_readings-standards[None,:,None]
    means=residuals.mean(axis=2)
    centered=standards-standards.mean()
    return dict(calibration_within_variance=np.mean(np.var(residuals,axis=2,ddof=1),axis=1),
        calibration_max_abs_mean=np.max(np.abs(means),axis=1),
        calibration_abs_trend=np.abs(means@centered/(centered@centered)),
        reading_sd=np.std(readings[:,available],axis=1,ddof=1),
        reading_response_covariance=np.sum((readings[:,available]-readings[:,available].mean(axis=1)[:,None])*
             (outcomes[:,available]-outcomes[:,available].mean(axis=1)[:,None]),axis=1)/(available.sum()-1),
        response_sd_available=np.std(outcomes[:,available],axis=1,ddof=1),
        response_sd_missing=np.std(outcomes[:,~available],axis=1,ddof=1),
        max_abs_response=np.max(np.abs(outcomes),axis=1))


def observation_predictive_checks(fit: dict, train: dict, calibration: dict, *, seed: int, draws: int=12000) -> dict:
    rng=np.random.default_rng(np.random.SeedSequence([seed,20]))
    idx=rng.choice(len(fit['weights']),size=draws,p=fit['weights'])
    q=fit['nodes'][idx]; mean=fit['intercept_mean'][idx]; cov=fit['intercept_cov'][idx]
    intercept=mean+np.einsum('nij,nj->ni',np.linalg.cholesky(cov),rng.normal(size=(draws,2)))
    a,alpha=intercept.T; beta,tau,sigma=q[:,0],np.exp(q[:,1]),np.exp(q[:,2])
    standards=np.asarray(calibration['standards']); shape=np.shape(calibration['readings'])
    cal=standards[None,:,None]+a[:,None,None]+tau[:,None,None]*rng.normal(size=(draws,*shape))
    x=fit['predictor']['mean']+fit['predictor']['sd']*rng.normal(size=(draws,len(train['ids'])))
    w=a[:,None]+x+tau[:,None]*rng.normal(size=x.shape)
    y=alpha[:,None]+beta[:,None]*x+sigma[:,None]*rng.normal(size=x.shape)
    available=np.array([w is not None for w in train['readings']])
    simulated=_observation_statistics(cal,standards,w,y,available)
    observed=_observation_statistics(np.asarray(calibration['readings'])[None,:,:],standards,
        np.array([[0 if w is None else w for w in train['readings']]]),np.array([train['outcomes']]),available)
    results={}
    for name,values in simulated.items():
        target=float(observed[name][0]); p=float(np.mean(values>=target))
        # Wilson interval remains informative for no observed exceedances.
        z=stats.norm.ppf(.975); center=(p+z*z/(2*draws))/(1+z*z/draws)
        radius=z*np.sqrt(p*(1-p)/draws+z*z/(4*draws*draws))/(1+z*z/draws)
        results[name]=dict(observed=target,replicated_q05_q50_q95=np.quantile(values,[.05,.5,.95]).tolist(),
                           probability_ge_observed=p,mcse=float(np.sqrt(p*(1-p)/draws)),
                           wilson95=[float(center-radius),float(center+radius)])
    return dict(draws=draws,statistics=results,conditioning='new population items; frozen training masks')


def observation_prior_checks(seed: int, draws: int=20000) -> dict:
    rng=np.random.default_rng(np.random.SeedSequence([seed,21]));p=OBS_PRIOR
    a=rng.normal(0,p['a_sd'],draws); alpha=rng.normal(0,p['alpha_sd'],draws)
    beta=rng.normal(0,p['beta_sd'],draws)
    tau=np.exp(rng.normal(p['log_tau_mean'],p['log_tau_sd'],draws))
    sigma=np.exp(rng.normal(p['log_sigma_mean'],p['log_sigma_sd'],draws))
    residual=a[:,None]+tau[:,None]*rng.normal(size=(draws,15))
    y=alpha[:,None]+beta[:,None]*rng.normal(size=(draws,36))+sigma[:,None]*rng.normal(size=(draws,36))
    values=dict(instrument_sd=tau,response_noise_sd=sigma,
                max_abs_standard_residual=np.max(np.abs(residual),axis=1),
                response_range=np.ptp(y,axis=1),response_sd=np.std(y,axis=1,ddof=1))
    return dict(draws=draws,q05_q50_q95={key:np.quantile(value,[.05,.5,.95]).tolist() for key,value in values.items()})


def calibrated_workflow(seed: int = DEFAULT_SEED) -> dict:
    data=make_observation_example(seed)
    train,cal=data['train'],data['calibration']
    fit,numerics=checked_observation_fit(train,cal)
    summary=summarize_fit(fit)
    predictions=freeze_predictions(fit,data['queries'],train['ids'])
    scores=score_predictions(predictions,data['evaluation']['outcomes'])
    frozen=[dict(id=p['id'],**p['summary']) for p in predictions]
    del predictions
    ppc=observation_predictive_checks(fit,train,cal,seed=seed)
    reconstruction=reconstruct_training_predictors(fit,train)
    missing_sensitivity=[predict_available(fit,reading=None,missing_predictor_mean=u) for u in (-.5,0.,.5)]
    sensitivity=[]
    cases=[('one_calibration_replicate',OBS_PRIOR,OBS_PREDICTOR,
            dict(standards=cal['standards'],readings=[[row[0]] for row in cal['readings']])),
           ('wider_instrument_priors',{**OBS_PRIOR,'a_sd':1.,'log_tau_sd':.65},OBS_PREDICTOR,cal),
           ('wider_regression_priors',{**OBS_PRIOR,'beta_sd':3.,'log_sigma_sd':.65},OBS_PREDICTOR,cal),
           ('predictor_sd_0.8',OBS_PRIOR,dict(mean=0.,sd=.8),cal),
           ('predictor_sd_1.2',OBS_PRIOR,dict(mean=0.,sd=1.2),cal)]
    for name,prior,predictor,calibration in cases:
        alternative,checks=checked_observation_fit(train,calibration,prior=prior,predictor=predictor)
        sensitivity.append(dict(scenario=name,parameters=summarize_fit(alternative),numerics=checks,
            available=predict_available(alternative,reading=1.),missing=predict_available(alternative,reading=None)))
        del alternative
    return dict(dataset=dict(train=train,calibration=cal,queries=data['queries'],
                counts=dict(train=36,train_reading=21,train_missing=15,heldout=12,heldout_reading=8,heldout_missing=4),
                provenance=data['provenance']),prior=dict(OBS_PRIOR),predictor=dict(OBS_PREDICTOR),
                posterior=summary,numerics=numerics,prior_predictive=observation_prior_checks(seed),
                posterior_predictive=ppc,reconstruction=reconstruction,predictions=frozen,heldout_scores=scores,
                sensitivity=sensitivity,missing_population_sensitivity=missing_sensitivity,
                limitations=['Unit gain, exact standards, no drift and independent equal-precision errors are assumed.',
                'The predictor population mean/SD are stipulated, not fitted from latent truth or heldout rows.',
                'Deterministic integration diagnostics are empirical; R-hat and ESS do not apply.',
                'Twelve heldout responses cannot establish predictive calibration or superiority.',
                'Missing-predictor outcomes constrain their distribution under the imposed regression model; the old nonresponse invariance does not transfer.'])


def compute(seed: int = DEFAULT_SEED) -> dict:
    from common import normal_update
    from extension_common import envelope, check
    y = np.array([8., 10., 11., 13.])
    mean, sd = normal_update(10, 4, np.sqrt(13), y)
    naive, naive_sd = normal_update(10, 4, 2, y)
    latent_mean = (9*mean + 4*y[-1])/13
    latent_var = 36/13 + (9/13)**2 * sd**2
    # Independent joint Gaussian conditioning: Cov(x4, y) = 16 + 4 I(j=4).
    cov_y = 16*np.ones((4, 4)) + 13*np.eye(4)
    cross = np.full(4, 16.); cross[-1] += 4
    conditioned_mean = 10 + cross @ np.linalg.solve(cov_y, y-10)
    conditioned_var = 20 - cross @ np.linalg.solve(cov_y, cross)
    convolution = integrate.quad(lambda x: stats.norm.pdf(x, 10, 2)
                                 * stats.norm.pdf(13, x, 3), -np.inf, np.inf)[0]
    delta = np.array([-2., 0., 2.])
    metrics = dict(mean_posterior_mean=mean, mean_posterior_variance=sd**2,
                   naive_mean=naive, naive_variance=naive_sd**2,
                   fourth_latent_mean=float(latent_mean), fourth_latent_variance=float(latent_var),
                   population_means=(mean+.6*delta).tolist(), population_variance=sd**2)
    checks = [check("convolution_density", convolution, stats.norm.pdf(13, 10, np.sqrt(13))),
              check("joint_latent_mean", latent_mean, conditioned_mean),
              check("joint_latent_variance", latent_var, conditioned_var)]
    result = envelope(STEM, seed, "Gaussian convolution/conditioning and pattern-mixture sensitivity",
                    {"readings": y.tolist(), "prior_mean": 10, "prior_variance": 16,
                     "item_variance": 4, "measurement_variance": 9, "respondent_fraction": .4,
                     "nonrespondent_shifts": delta.tolist()}, metrics, checks,
                    ["The target is a superpopulation mean, not a finite missing-data average.",
                     "Observed respondent likelihood is invariant to the nonrespondent shift."])
    workflow = calibrated_workflow(seed)
    result["parameters"]["calibrated_regression"] = dict(prior=workflow["prior"], predictor=workflow["predictor"])
    result["metrics"]["calibrated_regression"] = workflow
    result["checks"].append(check("calibrated_refinement", workflow["numerics"]["refinement"]["max_moment_or_logz_difference"], 0., atol=1e-3))
    return result


def main() -> None:
    from common import plt, save_figure, save_result
    result = compute(); m = result["metrics"]
    means = np.array(m["population_means"])
    plt.errorbar([-2, 0, 2], means, yerr=stats.norm.ppf(.95)*np.sqrt(m["population_variance"]),
                 fmt="o", capsize=6)
    plt.xlabel("Unidentified nonrespondent shift (units)")
    plt.ylabel("Population mean (units)")
    plt.title("Conditional 90% posterior intervals; register respondent fraction 0.4")
    save_figure(STEM); save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** assign a Normal prior to the shift and integrate it. Which
# additional variance term is prior-driven? Why does more respondent data not remove it?
