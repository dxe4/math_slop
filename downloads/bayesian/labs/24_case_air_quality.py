# %% [markdown]
# # Lab 24 — Protected air-quality reference analysis
# **Answer-bearing review reference. Attempt C03 from its public starter first.**
# This notebook executes an authenticated offline replay of four real-data fits
# and one previously frozen final-site evaluation. It does not run fresh NUTS
# sampling or create another unseen holdout. Full sampling and score chronology
# are retained separately. Missing, changed or corrupt evidence raises an error.
# The target is historical conditional prediction in 2016, with observed weather
# and concurrent outcomes at ten other monitored stations. It is not forecasting.
# %%
from pathlib import Path
from html import escape
import json
import re

from common import ROOT, np, plt, save_figure, save_result
from extension_common import envelope, check
import air_quality_common as c
import air_quality_prediction as prediction
import air_quality_package as package

STEM = '24_case_air_quality'
DEFAULT_SEED = 2424
FIGURE_TITLE = 'Omitted Beijing sites: predictive medians, intervals and model criticism'
FIGURE_DESCRIPTION = (
    'Protected reference results for Dongsi and Guanyuan in calendar 2016. '
    'Top panels show observed eligible daily PM2.5 as dots, hierarchical-base '
    'posterior predictive mixture medians as lines and equal-tailed 90 percent '
    'marginal predictive intervals as shading. These are historical conditional '
    'predictions, not forecasts or simultaneous bands. Bottom left compares '
    'empirical MAE of the predictive median for every frozen model on the common '
    'eligible rows, separately by site. Bottom right shows hierarchical-base '
    'training residual lag-one autocorrelation and replicated 90 percent ranges; '
    'persistent residual dependence challenges the likelihood. Interval width '
    'is predictive uncertainty, not numerical MCSE. No physical mixture mean '
    'or variance is claimed.'
)
EXTRA_INPUTS = (
    'labs/air_quality_common.py', 'labs/air_quality_prediction.py',
    'labs/air_quality_evidence.py', 'labs/air_quality_package.py',
    'plans/expansion_implementation/case/run_final.py',
    'plans/expansion_implementation/c03_analysis_freeze.json',
    'plans/expansion_implementation/case_contract_v2.json',
    'plans/expansion_implementation/c03_resource_manifest.json',
    'plans/expansion_implementation/c03_development_ledger.json',
    'plans/expansion_implementation/case/prior_weather_audit_v1.json',
    'plans/expansion_implementation/case/unknown_scale_fixture_v1.json',
    'plans/expansion_implementation/case/beijing_provenance_entry_v1.json',
    'plans/expansion_implementation/case/acquisition_manifest.json',
    'plans/expansion_implementation/case/transforms_v1.json',
    'plans/expansion_implementation/case/split_v1.json',
    'data/beijing_2016_daily.csv', 'data/provenance.json', 'data/licenses/beijing_CC_BY_4.md',
    'artifacts/reference/c03/final_v1/record.json',
    'artifacts/reference/c03/final_v1/resources.json',
)


# %% [markdown]
# ## The sealed estimand and numerical precision
# New-site marginal log variance includes residual variance, the training-only
# smoothed state variance and (tau0+rho*x*tau1)^2+(x*tau1)^2*(1-rho^2).
# The pooled model omits the group term. Invert the averaged Normal CDF using
# every retained draw. A mixture median is neither an average of component
# medians nor the exponential of the average log concentration.
# Bounded CDF contributions support quantile MCSE; density-contribution moments
# are supported by the training-only positive-residual integrability check.
# Batch estimates still require adequate chain exploration. Physical moments
# can diverge: finite simulation averages cannot certify their existence.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    """Pure finite schema-1 read-only replay; no fits, downloads or writes."""
    if isinstance(seed, bool) or seed != DEFAULT_SEED:
        raise ValueError('Frozen reference uses seed 2424; a new seed requires a separate development run')
    record, inventory, scores = package.load_final_record()
    _, predictions = package.load_predictions()
    freeze = prediction.verified_freeze()
    provenance = package.read_json(c.CASE/'beijing_provenance_entry_v1.json')
    if c.digest(ROOT/provenance['path']) != provenance['sha256']:
        raise ValueError('Offline daily data differ from frozen acquisition')
    resources = package.read_json(package.FINAL/'resources.json')
    prior = package.read_json(c.CASE/'prior_weather_audit_v1.json')
    fixture = package.read_json(c.CASE/'unknown_scale_fixture_v1.json')
    development = package.read_json(ROOT/'plans/expansion_implementation/c03_development_ledger.json')
    fits = {}
    checks = [check('four_frozen_roles', len(inventory['fits']), 4),
              check('single_final_evaluation', record['evaluation_passes'], 1),
              check('unknown_scale_posterior_fixture', fixture['passed'], True),
              check('resource_gate', resources['passed'], True)]
    import arviz as az
    for role, entry in inventory['fits'].items():
        bundle = predictions[role].bundle
        diag = c.diagnostics(az.from_dict(posterior=bundle.posterior, sample_stats=bundle.sample_stats))
        if diag != bundle.metadata['diagnostics']:
            raise ValueError('Recomputed sampler diagnostics differ from recorded evidence')
        inspection = package.read_json(ROOT/entry['inspection_path'])
        fit_scores = {k:v for k,v in scores['fits'][role].items() if k != 'rows'}
        rows = scores['fits'][role]['rows']
        eligible = [r for r in rows if r['eligible']]
        fits[role] = dict(**fit_scores, diagnostics=diag, model=freeze['model_specs'][role],
                         seed=freeze['seeds'][role], manifest=entry,
                         parameter_q05_q50_q95=inspection['parameter_q05_q50_q95'],
                         ppc=inspection['ppc'], confounding=inspection['confounding'],
                         numerical_precision=dict(
                             max_cdf_mcse=max(v['cdf_mcse'] for r in eligible for v in r['mcse']['values']),
                             max_log_quantile_mcse=max(v['log_quantile_mcse'] for r in eligible for v in r['mcse']['values']),
                             max_observed_log_density_mcse_nats=max(
                                 (r.get('log_density_mcse_nats',0) for r in eligible), default=0)))
        checks += [check(role+'.diagnostics', diag['screen_pass'], True),
                   check(role+'.prescore_precision', predictions[role].commitment['precision_pass'], True),
                   check(role+'.calendar_rows_preserved', len(rows), 732)]
    metrics = dict(fits=fits, common_n=scores['common_n'], paired_differences=scores['paired_differences'],
                   hierarchical_base_rows=scores['fits']['hierarchical_base']['rows'],
                   prior_prediction=prior, temporal_sensitivity=development['state_seasonal_sensitivity'],
                   independent_unknown_scale_fixture=fixture, resources=resources,
                   outcome_exposure=package.read_json(package.FINAL/'exposure_started.json'),
                   evaluation_status=scores['status'], scientific_acceptance=record['scientific_acceptance'],
                   computation_mode='Authenticated replay; three new final MCMC fits plus one freeze-authorized base reuse; one recorded evaluation')
    result = envelope(STEM, seed, 'Exact Gaussian state marginalization; PyMC NUTS; SC01 mixture-CDF quantiles',
        dict(target=freeze['target'], sampler=freeze['sampler'], model_definition=freeze['model_definition'],
             point_rule='posterior_predictive_mixture_median', interval='equal-tailed 90% marginal',
             density_units='numerical micrograms per cubic metre', physical_moments='not reported or assumed finite',
             final_sites=freeze['split']['final_sites'], transform=freeze['transforms']),
        metrics, checks, [
            'Training residual autocorrelation, unequal dispersion and skewness remain; no likelihood-adequacy or calibration claim.',
            'Seasonal/state projections are nearly perfectly negatively correlated; separate physical attribution is unsupported.',
            'Only ten training sites and two final sites; correlation and transport to other locations remain uncertain.',
            'Paired-hour missingness and nearest-station weather may be informative or share measurement error.',
            'Historical conditional smoothing uses the entire training year; not a forecast, exposure estimate or causal analysis.',
            'SC01: finite empirical MAE/RMSE of the predictive median do not establish finite expected losses or Bayes optimality.',
            'Marginal intervals are not simultaneous bands; marginal log scores are not a joint trajectory density.',
            'Numerical MCSE is not sampling uncertainty across independent days or a confidence interval across sites.',
            'The final sites are now exposed; further score-informed changes are development requiring fresh outer validation.',
            'AI-reviewed locally verified draft; scientific acceptance, human review and publication integration remain pending.'
        ], inputs=EXTRA_INPUTS)
    json.dumps(result, allow_nan=False)
    return result


# %% [markdown]
# ## Read all models, both sites and model criticism together
# The saved result retains native and common-row denominators, paired model
# differences, numerical precision, all parameter diagnostics and PPC evidence.
# Do not turn a small score difference into an independent-site confidence claim.
# The original single-pass row scores are authenticated by the evaluation record.
# %%
def main() -> None:
    result = compute()
    if not all(v['passed'] for v in result['checks']):
        raise ArithmeticError('Required case computation gate failed; inspect preserved evidence')
    metrics = result['metrics']
    fig, axes = plt.subplots(2, 2, figsize=(14, 9.5))
    rows = metrics['hierarchical_base_rows']
    for ax, site in zip(axes[0], result['parameters']['final_sites'], strict=True):
        values = [r for r in rows if r['station']==site and r['eligible']
                  and r.get('observed_ug_m3') is not None]
        dates = np.array([r['date'] for r in values], dtype='datetime64[D]')
        ax.fill_between(dates, [r['predictive_q05_ug_m3'] for r in values],
                        [r['predictive_q95_ug_m3'] for r in values], color='#087f8c', alpha=.2,
                        label='Equal-tailed 90% marginal interval')
        ax.plot(dates, [r['predictive_median_ug_m3'] for r in values], color='#087f8c', lw=1,
                label='Posterior predictive mixture median')
        ax.scatter(dates, [r['observed_ug_m3'] for r in values], s=7, color='#222222', label='Observed daily PM2.5')
        ax.set(title=f'{site}: hierarchical base, eligible days', ylabel='PM2.5 (µg/m³)', xlabel='Calendar 2016')
        ax.tick_params(axis='x', rotation=25)
        ax.legend(fontsize=7)
    roles = list(c.FINAL_SPECS)
    labels = ['Pooled', 'Hierarchy', 'Covariance prior', '24-hour rule']
    ax = axes[1,0]
    for offset, site, hatch in zip((-.18,.18), result['parameters']['final_sites'], ('','///'), strict=True):
        values = [metrics['fits'][r]['common_sites'][site]['empirical_mae_predictive_median_ug_m3'] for r in roles]
        valid = [(i,v) for i,v in enumerate(values) if v is not None]
        ax.bar([i+offset for i,v in valid], [v for i,v in valid], width=.36,
               label=site, hatch=hatch, edgecolor='black')
        for i,v in enumerate(values):
            if v is None:
                ax.text(i+offset, 0, 'Unavailable', rotation=90, ha='center', fontsize=7)
    ax.set(xticks=np.arange(4), xticklabels=labels, ylabel='Empirical MAE of predictive median (µg/m³)',
           title=f'All frozen models: common eligible rows (n={metrics["common_n"]})')
    ax.tick_params(axis='x', rotation=12)
    ax.legend(fontsize=8)
    ax = axes[1,1]
    ppc = metrics['fits']['hierarchical_base']['ppc']['residual_lag1']
    obs = np.array(ppc['observed_q05_q50_q95']); rep = np.array(ppc['replicated_q05_q50_q95'])
    x = np.arange(10)
    ax.errorbar(x-.1, obs[1], yerr=[obs[1]-obs[0],obs[2]-obs[1]], fmt='o', ms=4,
                label='Training residual: median and 90% range')
    ax.errorbar(x+.1, rep[1], yerr=[rep[1]-rep[0],rep[2]-rep[1]], fmt='s', ms=4,
                label='Replicated residual: median and 90% range')
    ax.set(xticks=x, xticklabels=ppc['stations'], ylabel='Adjacent-day residual correlation',
           title='Training PPC: unresolved temporal dependence')
    ax.tick_params(axis='x', rotation=55, labelsize=7)
    ax.legend(fontsize=7)
    fig.suptitle('Protected C03 reference · historical conditional prediction · imperfect models')
    save_figure(STEM)
    path = ROOT/'artifacts/figures'/f'{STEM}.svg'
    svg = re.sub(r'<(title|desc)\b[^>]*>.*?</\1>', '', path.read_text(), flags=re.S)
    semantics = (f'<title id="{STEM}-title">{escape(FIGURE_TITLE)}</title>'
                 f'<desc id="{STEM}-description">{escape(FIGURE_DESCRIPTION)}</desc>')
    def accessible(match: re.Match) -> str:
        tag = re.sub(r'\s+(?:role|aria-labelledby)="[^"]*"', '', match[1])
        return f'{tag} role="img" aria-labelledby="{STEM}-title {STEM}-description">{semantics}'
    path.write_text(re.sub(r'(<svg\b[^>]*?)>', accessible, svg, count=1))
    save_result(STEM, result, verbose=False)
    print(json.dumps(dict(lab_id=STEM, checks=len(result['checks']),
                         status=metrics['evaluation_status'], computation_mode=metrics['computation_mode'])))


if __name__ == '__main__':
    main()
# %% [markdown]
# **Investigation after your attempt:** identify the most consequential residual
# discrepancy and propose a change to the likelihood. State which target would
# change, what training evidence could assess it, and what fresh outer validation
# would be required. The exposed Dongsi/Guanyuan outcomes cannot certify a new
# score-informed model. No automated fit or hidden holdout reselection is made.
