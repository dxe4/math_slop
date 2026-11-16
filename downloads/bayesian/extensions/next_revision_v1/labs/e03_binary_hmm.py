# %% [markdown]
# # E03: learn transitions while respecting time's information boundary
# Worked reference lab, with fixed informative emissions and initial law.
# Prefix filters relearn transition weights from each prefix. Smoothers use all data.

# %%
from __future__ import annotations
import argparse
from copy import deepcopy
import json
from pathlib import Path
import time
import numpy as np
from scipy.stats import beta
from extensions.next_revision_v1.models.binary_hmm import (
    fixed_hmm, integrate_hmm, collapse_paths, joint_forecast, sample_forecasts, transition_intervals,
)
from extensions.next_revision_v1.labs.latent_support import check, draw_summary, save_run


def collapsed(spec: dict, observations=None) -> dict:
    k=spec['known_quantities']
    return collapse_paths(spec['data']['observations'] if observations is None else observations,
                          initial1=k['initial1'],emission1=k['emission1'],**{key:spec['priors'][key] for key in ('prior01','prior10')})


def summary(fit: dict, paths: dict) -> dict:
    return dict(log_evidence=fit['log_evidence'], filtered1=fit['filtered1'],smoothed1=fit['smoothed1'],
                transition_mean=fit['transition_mean'], transition_second=fit['transition_second'],
                transition_interval90=transition_intervals(paths), nextState1=fit['nextState1'],
                nextObservation1=fit['nextObservation1'],joint_forecast=joint_forecast(fit),
                map_path=paths['map_path'],map_probability=paths['map_probability'],
                marginal_modal_path=(fit['smoothed1']>.5).astype(int),
                conditioning=dict(filter='each prefix, including transition posterior',smoother='full sequence',forecast='full sequence'),
                method='Beta-weighted forward/backward quadrature; continuous Beta-mixture CDF intervals')


def compute(*, settings: dict, seed: int) -> dict:
    if seed != settings['seeds']['posterior']:
        raise ValueError('Use the frozen seed')
    tick=time.perf_counter()
    coarse,fit=[integrate_hmm(settings,order=o) for o in settings['quadrature']['orders']]
    paths=collapsed(settings)
    changed_spec=deepcopy(settings);changed_spec['data']['observations']=settings['investigations'][0]['observations']
    changed_fit=integrate_hmm(changed_spec,order=settings['quadrature']['orders'][-1]);changed_paths=collapsed(changed_spec)
    checks=[]
    for key in ('filtered1','smoothed1','transition_mean','transition_second','nextState1','nextObservation1','log_evidence'):
        checks.append(check('quadrature_'+key,coarse[key],fit[key],method='Jacobi orders 12 versus 24'))
    for key in ('smoothed1','transition_mean','transition_second','log_evidence'):
        checks.append(check('collapsed_'+key,paths[key],fit[key],method='Beta-integrated paths versus forward quadrature'))
        checks.append(check('changed_collapsed_'+key,changed_paths[key],changed_fit[key],method='Beta-integrated paths versus forward quadrature'))
    prefix=[]
    for t in range(1,len(settings['data']['observations'])+1):
        prefix.append(collapsed(settings,settings['data']['observations'][:t])['smoothed1'][-1])
    checks.append(check('independent_prefix_filters',prefix,fit['filtered1'],method='separately enumerate every observed prefix'))
    forecasts=joint_forecast(fit);reference=joint_forecast(paths)
    checks += [check('joint_forecast_path_expansion',forecasts['probabilities'],reference['probabilities'],method='future path Beta-ratio moments versus quadrature matrix products'),
               check('changed_joint_forecast_path_expansion',joint_forecast(changed_fit)['probabilities'],joint_forecast(changed_paths)['probabilities']),
               check('joint_normalization',sum(forecasts['probabilities']),1,atol=1e-12,rtol=0),
               check('joint_first_marginal',sum(forecasts['probabilities'][forecasts['patterns'][:,0]==1]),fit['nextObservation1']),
               check('suffix_nonleakage',fit['filtered1'][:6],changed_fit['filtered1'][:6],atol=1e-12,rtol=0,method='replace future observations after time six'),
               check('prefix_parameter_nonleakage',fit['prefix_weights'][:,:6],changed_fit['prefix_weights'][:,:6],atol=1e-12,rtol=0)]
    anchor=fixed_hmm([1,0],initial1=.5,p01=.25,p10=.25,emission1=[.2,.8])
    checks += [check('fixed_anchor_filters',anchor['filtered1'],[4/5,13/41],atol=1e-12,rtol=0,reference='rational path sum'),
               check('fixed_anchor_smoothers',anchor['smoothed1'],[28/41,13/41],atol=1e-12,rtol=0),
               check('fixed_anchor_evidence',np.exp(anchor['logEvidence']),41/200,atol=1e-12,rtol=0),
               check('fixed_anchor_state',anchor['nextState1'],67/164,atol=1e-12,rtol=0),
               check('fixed_anchor_alert',anchor['nextObservation1'],73/164,atol=1e-12,rtol=0)]
    posterior=sample_forecasts(paths,rng=np.random.default_rng(seed),size=settings['draw_count'])
    predictive=sample_forecasts(paths,rng=np.random.default_rng(settings['seeds']['predictive']),size=settings['draw_count'])
    draws={name:draw_summary(posterior[name]) for name in ('p01','p10')}
    for i,name in enumerate(('p01','p10')):
        checks.append(check('draw_'+name,draws[name]['mean'],fit['transition_mean'][i],atol=6*draws[name]['mcse']+1e-11,rtol=0))
    forecast_draws={}
    for pattern,expected in zip(forecasts['patterns'],forecasts['probabilities']):
        name=''.join(map(str,pattern));d=draw_summary(np.all(predictive['alerts']==pattern,axis=1));forecast_draws[name]=d
        checks.append(check('forecast_draw_'+name,d['mean'],expected,atol=6*d['mcse']+1e-11,rtol=0))
    plugin=fixed_hmm(settings['data']['observations'],initial1=settings['known_quantities']['initial1'],
                     p01=fit['transition_mean'][0],p10=fit['transition_mean'][1],emission1=settings['known_quantities']['emission1'])
    plugin_fit=dict(kind='quadrature', y=fit['y'], emission1=fit['emission1'], weights=np.ones(1),
                    final=np.array([[1-plugin['filtered1'][-1],plugin['filtered1'][-1]]]),
                    transitions=np.array([[[1-fit['transition_mean'][0],fit['transition_mean'][0]],
                                           [fit['transition_mean'][1],1-fit['transition_mean'][1]]]]))
    grid=np.linspace(.001,.999,220)
    densities=[beta.pdf(grid, *settings['priors'][key]) for key in ('prior01','prior10')]
    posterior_densities=[np.sum(paths['weights'][None,:]*beta.pdf(grid[:,None],paths[key][:,0],paths[key][:,1]),axis=1) for key in ('posterior01','posterior10')]
    return dict(targets=dict(base=summary(fit,paths),changed_suffix=summary(changed_fit,changed_paths),
                             plugin_at_posterior_means=dict(nextState1=plugin['nextState1'],nextObservation1=plugin['nextObservation1'],joint_forecast=joint_forecast(plugin_fit))),
                checks=checks,metrics=dict(elapsed_seconds=time.perf_counter()-tick,path_count=len(paths['paths']),parameter_draws=draws,
                    forecast_draws=forecast_draws,density_grid=grid,prior_density=densities,posterior_density=posterior_densities,
                    fixed_anchor=anchor,prefix_max_difference=float(np.max(np.abs(fit['filtered1'][:6]-changed_fit['filtered1'][:6]))),
                    early_smoothing_max_change=float(np.max(np.abs(fit['smoothed1'][:6]-changed_fit['smoothed1'][:6])))),
                figures=[dict(path='outputs/figures/E03_01.svg',alt='Changing the suffix leaves early filters fixed but changes full-sequence smoothing.',equivalent='E03 chapter ten-row four-probability table'),
                         dict(path='outputs/figures/E03_02.svg',alt='Learned transition densities and eight integrated future alert patterns differ from a plug-in calculation.',equivalent='E03 chapter transition and joint-pattern tables')],
                limitations=['Initial law and informative emissions fixed, not learned. No SMC or general unknown-emission fit.',
                             'Finite collapsed paths up to length 12; Jacobi polynomial exactness concerns probabilities and low moments, not arbitrary quantiles.',
                             'Forecast paths share one posterior transition pair throughout; IID simulation MCSE is reported.'],
                _draws={**posterior,'predictive_alerts':predictive['alerts'],'predictive_states':predictive['states']})

# %% [markdown]
# The path check integrates each transition row using Beta ratios. Each prefix is
# enumerated again for filtering; marginalizing the final paths is smoothing.
# Future-pattern checks expand future states while retaining parameter dependence.

# %%
def render(result: dict, *, output_dir: Path) -> list[Path]:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    output_dir.mkdir(parents=True,exist_ok=True)
    base,changed=result['targets']['base'],result['targets']['changed_suffix']
    fig,ax=plt.subplots(1,2,figsize=(11,4),layout='constrained')
    for axis,key,title in zip(ax,('filtered1','smoothed1'),('Prefix-only filters','Full-sequence smoothers')):
        axis.plot(range(1,11),base[key],'o-',label='original');axis.plot(range(1,11),changed[key],'s--',label='changed suffix')
        axis.axvline(6.5,color='gray',linestyle=':');axis.set(xlabel='inspection time',ylabel='P(state 1)',ylim=(0,1),title=title);axis.legend()
    paths=[]
    for suffix in ('svg','png'):
        path=output_dir/f'E03_01.{suffix}';fig.savefig(path,dpi=140);paths.append(path)
    plt.close(fig)
    fig,ax=plt.subplots(1,2,figsize=(11,4),layout='constrained');m=result['metrics']
    ax[0].plot(m['density_grid'],m['prior_density'][0],':',color='black',label='shared prior')
    for i,name in enumerate(('p01','p10')):ax[0].plot(m['density_grid'],m['posterior_density'][i],label=name)
    ax[0].set(xlabel='transition probability',ylabel='density',title='Continuous transition learning');ax[0].legend()
    patterns=[''.join(map(str,p)) for p in base['joint_forecast']['patterns']];x=np.arange(8)
    ax[1].bar(x-.18,base['joint_forecast']['probabilities'],.36,label='integrated')
    ax[1].bar(x+.18,result['targets']['plugin_at_posterior_means']['joint_forecast']['probabilities'],.36,label='plug-in')
    ax[1].set(xticks=x,xticklabels=patterns,xlabel='next three alerts',ylabel='joint probability',title='Shared uncertain transitions');ax[1].legend()
    for suffix in ('svg','png'):
        path=output_dir/f'E03_02.{suffix}';fig.savefig(path,dpi=140);paths.append(path)
    plt.close(fig);return paths


def run(*, spec_path: Path, output_dir: Path, run_id: str) -> dict:
    settings=json.loads(spec_path.read_text())
    return save_run(module='E03',lab_path=Path(__file__),model_path=Path(__file__).parents[1]/'models/binary_hmm.py',spec_path=spec_path,output_dir=output_dir,run_id=run_id,result=compute(settings=settings,seed=settings['seeds']['posterior']),render=render)


def main() -> None:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--spec',type=Path,required=True);parser.add_argument('--output-dir',type=Path,required=True);parser.add_argument('--run-id',required=True)
    args=parser.parse_args();run(spec_path=args.spec,output_dir=args.output_dir,run_id=args.run_id)


if __name__ == '__main__':
    main()
