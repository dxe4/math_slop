# %% [markdown]
# # Lab 8 — Logistic and count models
# A linear predictor becomes a probability through the inverse logit. A log link
# gives a rate; exposure multiplies it to give an expected count.
# %%
def run_logistic_reference():
    """Original binary computation, seeds, helpers and figure semantics."""
    from common import np, plt, data, sample_model, diagnostics, save_figure
    from scipy.special import expit
    import pymc as pm

    d = data("completion.csv")
    x, y = d["support_z"], d["completed"].astype(int)
    with pm.Model() as model:
        alpha = pm.Normal("alpha", 0, 1.5)
        beta = pm.Normal("beta", 0, 1)
        p = pm.math.sigmoid(alpha + beta*x)
        pm.Bernoulli("y", p=p, observed=y)
        prior = pm.sample_prior_predictive(draws=500, random_seed=808)
        idata = sample_model(808)
        pm.sample_posterior_predictive(idata, extend_inferencedata=True,
                                      random_seed=809, progressbar=False)
    a = idata.posterior.alpha.values.ravel()
    b = idata.posterior.beta.values.ravel()
    grid = np.linspace(-2, 2, 100)
    pred = expit(a[:, None] + b[:, None]*grid)
    lo, hi = np.quantile(pred,[0.05,0.95],axis=0)
    plt.scatter(x, y, alpha=0.25, s=12)
    plt.plot(grid,pred.mean(axis=0), label="Posterior mean probability")
    plt.fill_between(grid,lo,hi,alpha=0.2, label="90% probability interval")
    plt.xlabel("Support index")
    plt.ylabel("Completion probability")
    plt.legend()
    save_figure("08_logistic")
    result = diagnostics(idata,["alpha","beta"])
    result.update({"odds_ratio_median": float(np.median(np.exp(b))),
        "probability_at_zero": float(expit(a).mean()),
        "probability_change_zero_to_one": float((expit(a+b)-expit(a)).mean()),
        "count_means_exposure_1_3": (np.array([1,3])*np.exp(0.7)).tolist()})
    return result

# %% [markdown]
# ## Exposure-aware repair-call workflow
# The 48 frozen windows are synthetic. Fit all rows, then predict three future
# scenarios with no outcomes. Quadrature weights represent posterior mass.
# %%
import numpy as np
from scipy.special import gammaln, logsumexp, roots_legendre, xlogy
from scipy.integrate import cumulative_simpson
from scipy.stats import norm, halfnorm, poisson, nbinom

COUNT_BOUNDS = ((-2., 3.), (-2., 2.), (0., 6.))


def repair_call_data():
    """Fresh arrays; generator parameters are provenance, never fitting inputs."""
    return dict(ids=np.arange(48), workload=np.repeat([2., 4., 6.], 16),
                exposure=np.tile(np.repeat([.5, 1., 2., 4.], 4), 3),
                counts=np.array([2,0,4,2, 1,1,10,1, 0,6,1,1, 11,0,2,2,
                                 0,0,0,0, 3,1,0,1, 3,4,0,7, 0,8,22,7,
                                 0,0,0,2, 2,2,0,5, 2,1,4,11, 41,0,25,2]),
                provenance=dict(seed=81201, rate_intercept=float(np.log(2)),
                                slope=.45, gamma_shape=1.2,
                                unit='independent window; exposure in centre-days'))


def _vectors(workload, exposure, counts=None):
    w, t = np.asarray(workload, dtype=float), np.asarray(exposure, dtype=float)
    if w.ndim != 1 or t.shape != w.shape or not np.all(np.isfinite(w)) or not np.all(np.isfinite(t)) or np.any(t < 0):
        raise ValueError('Require matching finite 1D workload/exposure, exposure >= 0')
    if counts is None:
        return w, t
    y = np.asarray(counts, dtype=float)
    if y.shape != w.shape or not np.all(np.isfinite(y)) or np.any(y < 0) or np.any(y != np.floor(y)):
        raise ValueError('Counts must be matching finite nonnegative integers')
    if np.any((t == 0) & (y > 0)):
        raise ValueError('Positive count at zero exposure is inconsistent')
    return w, t, y


def count_logpmf(y, mu, d=0.):
    """Stable NB2 PMF, including the exact Poisson and zero-exposure limits."""
    y, mu, d = np.broadcast_arrays(np.asarray(y, float), np.asarray(mu, float), np.asarray(d, float))
    if not np.all(np.isfinite([y, mu, d])) or np.any(y < 0) or np.any(y != np.floor(y)) or np.any(mu < 0) or np.any(d < 0):
        raise ValueError('Invalid count, mean or dispersion')
    result = np.array(xlogy(y, mu) - mu - gammaln(y + 1))
    active = (d > 0) & (mu > 0)
    yy, mm, dd = y[active], mu[active], d[active] ** 2
    correction = np.zeros_like(yy)
    for k in range(int(yy.max(initial=0))):
        correction += (yy > k) * np.log1p(k * dd)
    result[active] = yy * np.log(mm) - gammaln(yy + 1) + correction - (yy + 1 / dd) * np.log1p(mm * dd)
    return result


def _log_density(nodes, x, t, y, family, prior):
    a, b = nodes[:, 0], nodes[:, 1]
    out = norm.logpdf(a, prior['alpha_mean'], prior['alpha_sd']) + norm.logpdf(b, 0, prior['beta_sd'])
    if family == 'nb2':
        d2 = nodes[:, 2] ** 2
        out += halfnorm.logpdf(nodes[:, 2], scale=prior['d_sd'])
        for k in range(int(y.max(initial=0))):
            out += np.count_nonzero(y > k) * np.log1p(k * d2)
    out -= gammaln(y + 1).sum()
    groups = np.unique(np.column_stack([x, t]), axis=0)
    for xx, tt in groups:
        mask = (x == xx) & (t == tt)
        sy, n = y[mask].sum(), mask.sum()
        logmu = np.log(tt) + a + b * xx
        mu = np.exp(logmu)
        out += sy * logmu
        if family == 'poisson':
            out -= n * mu
        else:
            # Gauss-Legendre nodes never include d=0; marginal CDF does.
            positive = d2 > 0
            term = n * mu
            term[positive] = (sy + n / d2[positive]) * np.log1p(mu[positive] * d2[positive])
            out -= term
    return out


def _tensor(axes, volumes):
    nodes = np.stack(np.meshgrid(*axes, indexing='ij'), axis=-1).reshape(-1, len(axes))
    logvolume = sum(np.broadcast_arrays(*np.meshgrid(*[np.log(v) for v in volumes], indexing='ij'))).ravel()
    return nodes, logvolume


def _legendre(order, bounds):
    z, q = roots_legendre(order)
    lo, hi = bounds
    return (lo + hi) / 2 + (hi - lo) / 2 * z, q * (hi - lo) / 2


def fit_count_model(workload, exposure, counts, *, family, order, bounds=COUNT_BOUNDS,
                    prior_alpha_mean=np.log(2), prior_alpha_sd=.7, prior_beta_sd=.5, prior_d_sd=1.):
    """Integrate the actual likelihood; never fit on future rows or hidden truths."""
    w, t, y = _vectors(workload, exposure, counts)
    if family not in ('poisson', 'nb2'):
        raise ValueError('family must be poisson or nb2')
    if isinstance(order, bool) or not isinstance(order, (int, np.integer)) or order < 2:
        raise ValueError('order must be an integer >= 2')
    prior = dict(alpha_mean=float(prior_alpha_mean), alpha_sd=float(prior_alpha_sd), beta_sd=float(prior_beta_sd), d_sd=float(prior_d_sd))
    if not np.all(np.isfinite(list(prior.values()))) or min(prior_alpha_sd, prior_beta_sd, prior_d_sd) <= 0:
        raise ValueError('Require finite priors with positive SDs')
    dim = 2 if family == 'poisson' else 3
    bounds = np.asarray(bounds, float)
    if bounds.shape not in ((dim, 2), (3, 2)) or not np.all(np.isfinite(bounds)) or np.any(bounds[:, 1] <= bounds[:, 0]) or (family == 'nb2' and bounds[2, 0] < 0):
        raise ValueError('Invalid integration bounds')
    bounds = bounds[:dim]
    informative = t > 0
    if not np.any(informative):
        raise ValueError('No positive-exposure training rows')
    w, t, y = w[informative], t[informative], y[informative]
    mean, sd = float(w.mean()), float(w.std(ddof=0))
    if sd <= 0:
        raise ValueError('Training workload SD must be positive')
    x = (w - mean) / sd
    axes, volumes = zip(*[_legendre(order, bound) for bound in bounds])
    nodes, logvolume = _tensor(axes, volumes)
    logmass = _log_density(nodes, x, t, y, family, prior) + logvolume
    normalizer = float(logsumexp(logmass))
    if not np.isfinite(normalizer):
        raise ValueError('Integration has no finite mass')
    return dict(family=family, preprocessing=dict(mean=mean, sd=sd), nodes=nodes,
                weights=np.exp(logmass - normalizer), log_normalizer=normalizer,
                workload_range=[float(w.min()), float(w.max())],
                prior=prior, order=order, bounds=bounds, training=dict(x=x, exposure=t, counts=y),
                numerical_checks=dict(method='tensor Gauss-Legendre; prior densities times volume weights'))


def _moments(fit):
    n, p = fit['nodes'], fit['weights']
    return np.r_[p @ n, p @ np.exp(n[:, 0]), p @ np.exp(n[:, 1]), fit['log_normalizer']]


def parameter_intervals(fit, points):
    """Refined marginal CDF, not quantiles of coarse quadrature nodes."""
    train = fit['training']
    dim = fit['nodes'].shape[1]
    result = {}
    for axis in range(dim):
        grid = np.linspace(*fit['bounds'][axis], points)
        axes, volumes = [], []
        for j in range(dim):
            values, weights = (grid, np.ones(points)) if j == axis else _legendre(fit['order'], fit['bounds'][j])
            axes.append(values); volumes.append(weights)
        nodes, logvolume = _tensor(axes, volumes)
        logmass = _log_density(nodes, train['x'], train['exposure'], train['counts'], fit['family'], fit['prior']) + logvolume
        shape = [len(a) for a in axes]
        marginal = logsumexp(logmass.reshape(shape), axis=tuple(j for j in range(dim) if j != axis))
        cdf = cumulative_simpson(np.exp(marginal - marginal.max()), x=grid, initial=0)
        cdf /= cdf[-1]
        result[['alpha', 'beta', 'd'][axis]] = np.interp([.05, .95], cdf, grid).tolist()
    return result


def _prediction_nodes(fit):
    # Omitted mass bounds errors of bounded probabilities only, never moments.
    weights = fit['weights']
    indices = np.argsort(weights)
    omitted = np.cumsum(weights[indices]) <= 1e-12
    keep = indices[~omitted]
    removed = float(weights[indices[omitted]].sum())
    return fit['nodes'][keep], weights[keep] / (1 - removed), removed


def _means(fit, workload, exposure, nodes=None):
    w, t = _vectors(workload, exposure)
    n = fit['nodes'] if nodes is None else nodes
    x = (w - fit['preprocessing']['mean']) / fit['preprocessing']['sd']
    rates = np.exp(n[:, 0, None] + n[:, 1, None] * x)
    return rates, rates * t


def predict_counts(fit, workload, exposure, *, tail_threshold=20):
    """Future available-information prediction. There is deliberately no y input."""
    w, t = _vectors(workload, exposure)
    if isinstance(tail_threshold, bool) or not isinstance(tail_threshold, (int, np.integer)) or tail_threshold < 1:
        raise ValueError('tail_threshold must be a positive integer')
    rates, mu = _means(fit, w, t)
    p = fit['weights']; n = fit['nodes']
    mean = p @ mu
    parameter_variance = p @ ((mu - mean) ** 2)
    within = mu if fit['family'] == 'poisson' else mu + n[:, 2, None] ** 2 * mu ** 2
    small, weights, removed = _prediction_nodes(fit)
    _, smu = _means(fit, w, t, small)
    rows = []
    for i in range(len(w)):
        if t[i] == 0:
            interval, tail = [0, 0], 0.
        else:
            if fit['family'] == 'poisson':
                dist = poisson(smu[:, i])
            else:
                phi = small[:, 2] ** -2
                dist = nbinom(phi, phi / (phi + smu[:, i]))
            def mixture_cdf(k):
                return float(weights @ dist.cdf(k))
            interval = []
            for probability in [.05, .95]:
                lower, upper = -1, max(1, int(mean[i]))
                while mixture_cdf(upper) < probability:
                    upper *= 2
                while upper - lower > 1:
                    middle = (lower + upper) // 2
                    if mixture_cdf(middle) >= probability:
                        upper = middle
                    else:
                        lower = middle
                interval.append(upper)
            tail = float(weights @ dist.sf(tail_threshold - 1))
        rate_mean = float(p @ rates[:, i])
        rows.append(dict(workload=float(w[i]), exposure=float(t[i]), extrapolation=bool(w[i] < fit['workload_range'][0] or w[i] > fit['workload_range'][1]),
                         rate_mean=rate_mean, rate_variance=float(p @ ((rates[:, i] - rate_mean) ** 2)),
                         mean_count=float(mean[i]), mean_count_variance=float(parameter_variance[i]),
                         expected_conditional_variance=float(p @ within[:, i]),
                         count_variance=float(p @ within[:, i] + parameter_variance[i]),
                         count_interval_90=interval, tail_probability=tail))
    return dict(scenarios=rows, tail_threshold=tail_threshold, cdf_omitted_mass=removed,
                cdf_probability_error_bound=removed, moments_pruned=False)


def _replication(fit, workload, exposure, draws, seed):
    if isinstance(draws, bool) or not isinstance(draws, (int, np.integer)) or draws < 1:
        raise ValueError('draws must be a positive integer')
    _vectors(workload, exposure)
    rng = np.random.default_rng(seed)
    indices = rng.choice(len(fit['weights']), size=draws, p=fit['weights'])
    nodes = fit['nodes'][indices]
    _, mu = _means(fit, workload, exposure, nodes)
    if fit['family'] == 'poisson':
        rep = rng.poisson(mu)
    else:
        phi = nodes[:, 2, None] ** -2
        rep = rng.poisson(mu * rng.gamma(phi, 1 / phi, size=mu.shape))
    return rep, mu


def replicate_counts(fit, workload, exposure, *, draws, seed):
    """One joint posterior node per dataset; independent count noise per window."""
    return _replication(fit, workload, exposure, draws, seed)[0]


def _mc_probability(events):
    n = len(events); p = float(np.mean(events)); z = 1.959963984540054
    centre = (p + z*z/(2*n)) / (1 + z*z/n)
    radius = z*np.sqrt(p*(1-p)/n + z*z/(4*n*n)) / (1 + z*z/n)
    return dict(probability=p, mc_se=float(np.sqrt(p*(1-p)/n)),
                wilson_95=[max(0., centre-radius), min(1., centre+radius)], draws=n)


def posterior_checks(fit, data, *, draws=20000, seed):
    y, t = data['counts'], data['exposure']
    rep, mu = _replication(fit, data['workload'], t, draws, seed)
    strata = []
    for exposure in np.unique(t):
        mask = t == exposure; observed = y[mask]; simulated = rep[:, mask]; means = mu[:, mask]
        zeros, tails = (simulated == 0).sum(axis=1), (simulated >= 20).sum(axis=1)
        dispersion_rep = (((simulated-means)**2)/means).sum(axis=1)
        dispersion_obs = (((observed-means)**2)/means).sum(axis=1)
        def report(values, obs):
            return dict(observed=int(obs), replicated_mean=float(values.mean()),
                        replicated_interval_90=np.quantile(values, [.05, .95]).tolist(),
                        exceedance=_mc_probability(values >= obs))
        strata.append(dict(exposure=float(exposure), zeros=report(zeros, (observed == 0).sum()),
                           tails=report(tails, (observed >= 20).sum()),
                           poisson_scaled_dispersion=dict(observed_median=float(np.median(dispersion_obs)),
                               observed_interval_90=np.quantile(dispersion_obs, [.05,.95]).tolist(),
                               replicated_median=float(np.median(dispersion_rep)),
                               exceedance=_mc_probability(dispersion_rep >= dispersion_obs))))
    return strata


def prior_prediction(data, *, draws=50000, seed=81204):
    rng = np.random.default_rng(seed)
    a, b, d = rng.normal(np.log(2), .7, draws), rng.normal(0, .5, draws), abs(rng.normal(0, 1, draws))
    x = (data['workload'] - 4) / np.sqrt(8/3)
    mu = data['exposure'] * np.exp(a[:, None] + b[:, None] * x)
    result = {}
    for family in ['poisson', 'nb2']:
        intensities = mu if family == 'poisson' else mu * rng.gamma(d[:,None]**-2, d[:,None]**2, size=mu.shape)
        rep = rng.poisson(intensities)
        result[family] = {key:np.quantile(values, [.05,.5,.95]).tolist() for key,values in
                          [('total',rep.sum(axis=1)), ('maximum',rep.max(axis=1)), ('zeros',(rep == 0).sum(axis=1))]}
    return dict(draws=draws, seed=seed, quantiles=[.05,.5,.95], statistics=result,
                baseline_rate_interval_95=np.exp(np.log(2) + np.array([-1,1])*1.95996398454*.7).tolist(),
                workload_rate_ratio_interval_95=np.exp(np.array([-1,1])*1.95996398454*.5).tolist())


def count_workflow():
    data = repair_call_data(); args = [data[k] for k in ['workload','exposure','counts']]
    fits, refinements, predictions, ppcs = {}, {}, {}, {}
    for family, orders, expanded_order in [('poisson', [96,128,160], 160), ('nb2', [52,72], 96)]:
        previous = None; differences = []
        for order in orders:
            fit = fit_count_model(*args, family=family, order=order)
            if previous is not None:
                delta = float(np.max(abs(_moments(fit) - _moments(previous))))
                old_pred = predict_counts(previous, [3,5,7], [.75,2.5,1])
                new_pred = predict_counts(fit, [3,5,7], [.75,2.5,1])
                prediction_delta = max(abs(a[key]-b[key]) for a,b in zip(old_pred['scenarios'],new_pred['scenarios'])
                                       for key in ['mean_count','count_variance','tail_probability'])
                intervals_match = all(a['count_interval_90'] == b['count_interval_90']
                                      for a,b in zip(old_pred['scenarios'],new_pred['scenarios']))
                differences.append(dict(from_order=previous['order'], to_order=order, max_mean_logz_change=delta,
                                        max_prediction_change=prediction_delta, count_intervals_match=intervals_match))
                if delta >= 1e-5 or prediction_delta >= 1e-4 or not intervals_match:
                    raise RuntimeError(f'{family}: quadrature refinement failed: {delta}')
            previous = fit
        expanded = fit_count_model(*args, family=family, order=expanded_order, bounds=((-3,4),(-3,3),(0,8)))
        delta = float(np.max(abs(_moments(expanded) - _moments(fit))))
        inside = np.all((expanded['nodes'] >= fit['bounds'][:,0]) & (expanded['nodes'] <= fit['bounds'][:,1]), axis=1)
        pred = predict_counts(fit, [3,5,7], [.75,2.5,1])
        expanded_pred = predict_counts(expanded, [3,5,7], [.75,2.5,1])
        pred_delta = max(abs(a[key]-b[key]) for a,b in zip(pred['scenarios'],expanded_pred['scenarios']) for key in ['mean_count','count_variance','tail_probability'])
        if delta >= 1e-5 or pred_delta >= 1e-4:
            raise RuntimeError(f'{family}: domain expansion failed')
        intervals_161, intervals_241 = parameter_intervals(fit, 161), parameter_intervals(fit, 241)
        interval_delta = max(np.max(abs(np.array(intervals_161[k])-intervals_241[k])) for k in intervals_161)
        if interval_delta >= .005:
            raise RuntimeError(f'{family}: marginal CDF refinement failed')
        means = fit['weights'] @ fit['nodes']
        sds = np.sqrt(fit['weights'] @ ((fit['nodes'] - means)**2))
        fits[family] = dict(parameter_means=means.tolist(), parameter_sds=sds.tolist(),
                            parameter_names=['alpha','beta'] + (['d'] if family == 'nb2' else []),
                            parameter_intervals_90=intervals_241, mean_baseline_rate=float(fit['weights'] @ np.exp(fit['nodes'][:,0])),
                            mean_workload_rate_ratio=float(fit['weights'] @ np.exp(fit['nodes'][:,1])), log_normalizer=fit['log_normalizer'],
                            preprocessing=fit['preprocessing'], prior=fit['prior'])
        refinements[family] = dict(order_checks=differences, final_order=fit['order'], expanded_order=expanded_order,
                                  expanded_mean_logz_change=delta, expanded_prediction_change=pred_delta,
                                  expanded_outside_mass=float(expanded['weights'][~inside].sum()),
                                  marginal_points=[161,241], marginal_interval_change=float(interval_delta))
        predictions[family] = pred
        ppcs[family] = posterior_checks(fit, data, seed=81205 if family == 'poisson' else 81206)
    sensitivity = []
    for scale in [.5,1.,1.5]:
        fit = fit_count_model(*args, family='nb2', order=72, prior_d_sd=scale)
        coarse = fit_count_model(*args, family='nb2', order=52, prior_d_sd=scale)
        pred = predict_counts(fit, [5], [2.5])
        coarse_pred = predict_counts(coarse, [5], [2.5])
        delta = float(np.max(abs(_moments(fit) - _moments(coarse))))
        pred_delta = max(abs(pred['scenarios'][0][key] - coarse_pred['scenarios'][0][key])
                         for key in ['mean_count','count_variance','tail_probability'])
        if delta >= 1e-5 or pred_delta >= 1e-4:
            raise RuntimeError('Sensitivity integration refinement failed')
        sensitivity.append(dict(prior_d_sd=scale, mean_d=float(fit['weights'] @ fit['nodes'][:,2]),
                                prediction=pred, refinement_mean_logz_change=delta,
                                refinement_prediction_change=pred_delta))
    return dict(dataset={k:v.tolist() if isinstance(v,np.ndarray) else v for k,v in data.items()},
                dataset_summary=dict(n=48,total=int(data['counts'].sum()),zeros=int((data['counts']==0).sum()),maximum=int(data['counts'].max())),
                prior_prediction=prior_prediction(data), fits=fits, refinement=refinements,
                posterior_checks=ppcs, predictions=predictions, sensitivity=sensitivity,
                limitations=['Training-data criticism is not held-out performance.',
                             'Window-specific gamma heterogeneity is not persistent centre dependence or identified structural zeros.',
                             'Independent-window model is not automatically consistent under arbitrary aggregation.',
                             'Workload 7 extrapolates beyond training workloads 2, 4, 6.',
                             'E(phi | y) diverges under half-normal d; report d instead.',
                             'Refinement is empirical numerical evidence, not a rigorous global error bound.'])

# %%
def main():
    from common import save_result
    result = run_logistic_reference()
    result['count_workflow'] = count_workflow()
    save_result('08_glm', result)


if __name__ == '__main__':
    main()
# %% [markdown]
# **Investigate:** calculate the probability difference from x=−2 to x=−1 and
# compare it with the difference from x=0 to x=1. Explain why a fixed odds ratio
# does not imply a fixed risk difference. For counts, derive the log-exposure offset.
# For repair calls, compare zeros and extreme counts within exposure strata,
# then explain why the future-count interval is wider than mean-count uncertainty.
