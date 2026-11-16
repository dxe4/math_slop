# %% [markdown]
# # E02: learned rates and weight by complete allocation integration
# Worked reference lab. Givens, seeds and checks are frozen in E02_v1.json.
# Exact finite sums are distinct from the Monte Carlo summaries below.

# %%
from __future__ import annotations
import argparse
from collections import defaultdict
from hashlib import sha256
import json
from pathlib import Path
import time
import numpy as np
from scipy.special import betaln, gammaln, logsumexp, roots_genlaguerre, roots_jacobi
from scipy.stats import gamma
from extensions.next_revision_v1.models.poisson_mixture import (
    collapse_allocations, predictive_pmf, predictive_tail, moments, coclustering,
    sample_posterior, sample_replicates,
)
from extensions.next_revision_v1.labs.latent_support import check, draw_summary, save_run


def subset_reference(y, *, alpha: float, shape: float, rate: float, counts) -> dict:
    """Independent subset multiplicities; no allocation arrays or primary weights."""
    dp = {(0, 0): 1}
    for value in y:
        new = defaultdict(int)
        for (n, s), count in dp.items():
            new[n, s] += count
            new[n+1, s+int(value)] += count
        dp = dict(new)
    logs, predictions, means = [], [], []
    for (n, s), multiplicity in dp.items():
        ns, ss = (len(y)-n, n), (sum(y)-s, s)
        logweight = np.log(multiplicity)+betaln(alpha+n, alpha+len(y)-n)-betaln(alpha, alpha)
        logweight -= sum(gammaln(float(value)+1) for value in y)
        pmf = np.zeros(len(counts))
        mean = 0.
        for nk, sk in zip(ns, ss):
            r, b = shape+sk, rate+nk
            logweight += shape*np.log(rate)-gammaln(shape)+gammaln(r)-r*np.log(b)
            wk = (alpha+nk)/(2*alpha+len(y))
            m = np.asarray(counts)
            pmf += wk*np.exp(gammaln(r+m)-gammaln(r)-gammaln(m+1)+r*np.log(b/(b+1))-m*np.log(b+1))
            mean += wk*r/b
        logs.append(logweight)
        predictions.append(pmf)
        means.append(mean)
    evidence = logsumexp(logs)
    weights = np.exp(np.array(logs)-evidence)
    return dict(log_evidence=float(evidence), pmf=weights @ predictions,
                mean=float(weights @ means), subset_count=sum(dp.values()), states=len(dp))


def tiny_quadrature(order: int) -> float:
    """Direct ordinary likelihood integral for two zeros, Gamma(1,1)/Beta(1,1)."""
    rates, gw = roots_genlaguerre(order, 0)
    x, bw = roots_jacobi(8, 0, 0)
    pi, bw = (x+1)/2, bw/bw.sum()
    likelihood = ((1-pi[:, None, None])*np.exp(-rates)[None, :, None]
                  + pi[:, None, None]*np.exp(-rates)[None, None, :])**2
    return float(np.einsum('ijk,i,j,k->', likelihood, bw, gw, gw))


def scenario(y, priors, settings) -> tuple[dict, dict]:
    fit = collapse_allocations(y, **priors)
    draws = sample_posterior(fit, rng=np.random.default_rng(settings['seeds']['posterior']), size=settings['draw_count'])
    mm = moments(fit)
    summary = dict(**mm, log_evidence=fit['log_evidence'],
                   pmf=predictive_pmf(fit, settings['prediction']['display_counts']),
                   tail_gt30=predictive_tail(fit, 30), tail_gt10=predictive_tail(fit, 10),
                   coclustering=coclustering(fit),
                   empty_component_probability=float(fit['weights'][np.any(fit['n']==0, axis=1)].sum()),
                   mixture_mean=draw_summary(draws['mixture_mean']),
                   sorted_low=draw_summary(draws['sorted_rates'][:, 0]),
                   sorted_high=draw_summary(draws['sorted_rates'][:, 1]),
                   separation=draw_summary(np.diff(draws['sorted_rates'], axis=1)[:, 0]),
                   high_rate_weight=draw_summary(draws['high_rate_weight']))
    return fit, dict(summary=summary, draws=draws)


def compute(*, settings: dict, seed: int) -> dict:
    if seed != settings['seeds']['posterior']:
        raise ValueError('Use the frozen seed')
    tick = time.perf_counter()
    priors = {k:settings['priors'][k] for k in ('alpha','shape','rate')}
    fit, base = scenario(settings['data']['y'], priors, settings)
    changed_fit, changed = scenario(settings['investigations'][0]['y'], priors, settings)
    sensitivity_fit, sensitivity = scenario(settings['data']['y'], {**priors,'alpha':settings['investigations'][1]['alpha']}, settings)
    counts = settings['prediction']['display_counts']
    ref = subset_reference(settings['data']['y'], **priors, counts=counts)
    checks = [check('subset_evidence', fit['log_evidence'], ref['log_evidence']),
              check('subset_prediction', base['summary']['pmf'], ref['pmf']),
              check('subset_mean', base['summary']['mean'], ref['mean']),
              check('subset_count', ref['subset_count'], 2**len(fit['y']), atol=0, rtol=0),
              check('allocation_normalization', fit['weights'].sum(), 1, atol=1e-12,rtol=0),
              check('label_complement', fit['weights'], fit['weights'][::-1], atol=1e-12,rtol=0),
              check('label_marginals', fit['weights'] @ fit['z'], .5,atol=1e-12,rtol=0)]
    for name, data in (('base',base),('changed',changed),('weight_prior',sensitivity)):
        s = data['summary']
        checks += [check(name+'_predictive_total', np.sum(s['pmf'])+s['tail_gt30'], 1,atol=1e-12,rtol=0),
                   check(name+'_draw_mean', s['mixture_mean']['mean'], s['mean'],atol=6*s['mixture_mean']['mcse']+1e-11,rtol=0)]
    for order in settings['quadrature']['gamma_generalized_laguerre_orders']:
        checks.append(check(f'tiny_quadrature_{order}', tiny_quadrature(order), 11/36,atol=1e-10,rtol=0,
                            method='ordinary mixture likelihood, Jacobi x Laguerre integration',reference='two-zero evidence 11/36'))
    anchor = collapse_allocations([0,0],alpha=1,shape=1,rate=1)
    one = collapse_allocations([0],alpha=1,shape=1,rate=1)
    checks += [check('two_zero_evidence', np.exp(anchor['log_evidence']), 11/36),
               check('two_zero_cocluster',coclustering(anchor)[0,1],8/11),
               check('one_zero_p0',predictive_pmf(one,[0])[0],11/18),
               check('one_zero_mean',moments(one)['mean'],2/3)]
    replicates = sample_replicates(base['draws'],rng=np.random.default_rng(settings['seeds']['predictive']),width=3)
    predictive = draw_summary(replicates[:,0])
    checks.append(check('simulated_predictive_mean',predictive['mean'],base['summary']['mean'],atol=6*predictive['mcse']+1e-11,rtol=0))
    grid = np.linspace(.01,18,220)
    density = [np.sum(fit['weights'][None,:]*gamma.pdf(grid[:,None],fit['r'][:,k],scale=1/fit['b'][:,k]),axis=1) for k in (0,1)]
    return dict(targets=dict(base=base['summary'],changed_last_count=changed['summary'],weight_prior=sensitivity['summary']),
                checks=checks, metrics=dict(elapsed_seconds=time.perf_counter()-tick, allocation_count=len(fit['z']),subset_states=ref['states'],
                    predictive_draw= predictive, label_density_grid=grid,label_density=density,
                    labelled_pi_mean=float(fit['weights'] @ ((fit['alpha']+fit['n'][:,1])/(2*fit['alpha']+len(fit['y'])))),
                    label_density_max_difference=float(np.max(np.abs(density[0]-density[1]))),
                    conditioning='all twelve counts; unknown rates and weight integrated', units='counts per unit exposure'),
                figures=[dict(path='outputs/figures/E02_01.svg',alt='Labelled rate densities coincide, while sorted rates separate and the mixture mean remains identifiable.',equivalent='E02 chapter summary table; targets and density grid in E02.json'),
                         dict(path='outputs/figures/E02_02.svg',alt='Low and high counts tend to cluster separately; replacing the largest count changes the predictive tail.',equivalent='E02 chapter full co-cluster and count-PMF tables')],
                limitations=['Two components stipulated, not selected. No physical groups established.',
                             'Exact analytic rate/weight integration and finite allocation sums only for N<=12; floating arithmetic.',
                             'IID simulation summaries have Monte Carlo error; interval endpoints are empirical.'],
                _draws={**base['draws'],'replicates':replicates})

# %% [markdown]
# The second counting algorithm uses subset sizes and sums instead of bit arrays.
# A third check directly integrates a tiny ordinary likelihood with quadrature.
# Scientific figures render saved JSON, including an explicit untruncated tail.

# %%
def render(result: dict, *, output_dir: Path) -> list[Path]:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    output_dir.mkdir(parents=True,exist_ok=True)
    b,c = result['targets']['base'],result['targets']['changed_last_count']
    fig, ax = plt.subplots(1,2,figsize=(10,4),layout='constrained')
    g=result['metrics']['label_density_grid']
    for k,style in ((0,'-'),(1,'--')):
        ax[0].plot(g,result['metrics']['label_density'][k],style,label=f'label {k}')
    ax[0].set(xlabel='rate per window',ylabel='posterior density',title='Symmetric labelled marginals');ax[0].legend()
    for i,key in enumerate(('sorted_low','sorted_high','mixture_mean')):
        s=b[key];lo,hi=s['interval90']; ax[1].errorbar(s['mean'],i,xerr=[[s['mean']-lo],[hi-s['mean']]],fmt='o',capsize=4)
    ax[1].set(yticks=range(3),yticklabels=['lower rate','higher rate','mixture mean'],xlabel='counts per window',title='IID draw means and central 90% intervals')
    paths=[]
    for suffix in ('svg','png'):
        path=output_dir/f'E02_01.{suffix}';fig.savefig(path,dpi=140);paths.append(path)
    plt.close(fig)
    fig,ax=plt.subplots(1,2,figsize=(11,4.5),layout='constrained')
    im=ax[0].imshow(b['coclustering'],vmin=0,vmax=1,cmap='viridis');fig.colorbar(im,ax=ax[0],label='P(same allocation)')
    ax[0].set(xticks=range(12),xticklabels=range(1,13),yticks=range(12),yticklabels=range(1,13),xlabel='window index',ylabel='window index',title='Integrated co-clustering')
    ax[1].plot(range(31),b['pmf'],'o-',label='original');ax[1].plot(range(31),c['pmf'],'s--',label='last count 4')
    ax[1].set(xlabel='future count',ylabel='probability',title=f"Tail >30: {b['tail_gt30']:.2g} / {c['tail_gt30']:.2g}");ax[1].legend()
    for suffix in ('svg','png'):
        path=output_dir/f'E02_02.{suffix}';fig.savefig(path,dpi=140);paths.append(path)
    plt.close(fig)
    return paths


def run(*, spec_path: Path, output_dir: Path, run_id: str) -> dict:
    settings=json.loads(spec_path.read_text())
    return save_run(module='E02',lab_path=Path(__file__),model_path=Path(__file__).parents[1]/'models/poisson_mixture.py',spec_path=spec_path,output_dir=output_dir,run_id=run_id,result=compute(settings=settings,seed=settings['seeds']['posterior']),render=render)


def main() -> None:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--spec',type=Path,required=True);parser.add_argument('--output-dir',type=Path,required=True);parser.add_argument('--run-id',required=True)
    args=parser.parse_args();run(spec_path=args.spec,output_dir=args.output_dir,run_id=args.run_id)


if __name__ == '__main__':
    main()
