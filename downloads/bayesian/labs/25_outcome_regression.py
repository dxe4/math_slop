# %% [markdown]
# # Lab 25 — Nominal and ordinal regressions
# Predict category probabilities before examining coefficients. The fictional labels
# ready/service/retire are coded 0/1/2. Ordering alone does not establish proportional
# odds. This worked reference fits both models and a separately generated challenge.
# %%
from pathlib import Path
import json
import numpy as np
import arviz as az
from continuation_common import rng, numerical_check, save_result, save_figure
from continuation_records import record
from continuation_outcomes import softmax, ordinal_probabilities, generate, Fit, fit, predict, score, fixture_quadrature


def summary(values):
    return dict(mean=float(np.mean(values)),q05=float(np.quantile(values,.05)),q95=float(np.quantile(values,.95)))


def compute(seed=2525, *, settings=None):
    if settings is not None:
        raise ValueError('Reference settings frozen; use fit/predict for investigations')
    result=record('A10','25_outcome_regression',seed,'four-chain NUTS nominal and ordered logistic regression')
    checks=[]; scenarios={}; diagnostics={}
    center_corners=np.array([[0,0],[-1,-1],[-1,1],[1,-1],[1,1]],dtype=float)
    generator=rng(seed,'prior'); prior={}
    for kind in ['nominal','ordinal']:
        if kind=='nominal':
            draws=dict(alpha=generator.normal(0,1.5,(4000,2)),beta=generator.normal(size=(4000,2,2)))
        else:
            draws=dict(m=generator.normal(0,1.5,4000),loggap=generator.normal(np.log(1.3),.4,4000),beta=generator.normal(size=(4000,2)))
        p=predict(Fit(kind,draws,None,{}),center_corners)
        prior[kind]=dict(queries=center_corners.tolist(),mean=p.mean(axis=0).tolist(),q05=np.quantile(p,.05,axis=0).tolist(),q95=np.quantile(p,.95,axis=0).tolist())
        checks.append(numerical_check(kind+':prior_normalization',float(np.max(np.abs(p.sum(axis=-1)-1))),0,tolerance=1e-12,reference_method='probability simplex'))
    grid=np.linspace(25,75,51); queries=np.column_stack([(grid-50)/25,np.zeros(51)])
    for scenario_index,scenario in enumerate(['original','changed']):
        training=generate(rng(seed,'training') if scenario=='original' else rng(seed,'changed_givens'),90,changed=scenario=='changed')
        # Separate child stream for changed outer inspections; no fitting uses these outcomes.
        outer_generator=rng(seed,'outer') if scenario=='original' else np.random.default_rng(np.random.SeedSequence([seed,2,1]))
        outer=generate(outer_generator,30,changed=scenario=='changed')
        models={}
        for model_index,kind in enumerate(['nominal','ordinal']):
            sampler_seed=int(np.random.SeedSequence([seed,4,scenario_index,model_index]).generate_state(1)[0])
            fitted=fit(training,settings=dict(kind=kind),seed=sampler_seed)
            diagnostic=fitted.diagnostics; diagnostics[scenario+':'+kind]=diagnostic
            p=predict(fitted,queries); contrast=p[:,-1,2]-p[:,0,2]
            contrast_summary=summary(contrast)
            contrast_summary['mcse']=float(az.mcse(fitted.idata,var_names=['retire_contrast']).retire_contrast)
            posterior_train=predict(fitted,training['x'])
            checks.append(numerical_check(scenario+':'+kind+':normalization',float(np.max(np.abs(p.sum(axis=-1)-1))),0,tolerance=1e-12,reference_method='probability simplex'))
            selected=posterior_train[0,np.arange(90),training['y']]
            vector=float(np.log(selected).sum()); direct=float(np.log(np.prod(selected)))
            checks.append(numerical_check(scenario+':'+kind+':loglik',vector,direct,tolerance=1e-12,reference_method='direct product of 90 category probabilities'))
            critique=[]
            generator=np.random.default_rng(np.random.SeedSequence([seed,5,scenario_index,model_index]))
            ids=generator.integers(0,len(posterior_train),2000)
            replicated=(generator.random((2000,90,1))>np.cumsum(posterior_train[ids],axis=-1)).sum(axis=-1)
            for lo,hi in [(25,25+50/3),(25+50/3,25+100/3),(25+100/3,75.0001)]:
                mask=(training['load']>=lo)&(training['load']<hi)
                observed=[float(np.mean(training['y'][mask]<=k)) for k in [0,1]]
                reps=np.stack([(replicated[:,mask]<=k).mean(axis=1) for k in [0,1]],axis=1)
                critique.append(dict(load_interval=[lo,hi],n=int(mask.sum()),observed_cumulative=observed,replicated_mean=reps.mean(axis=0).tolist(),replicated_q05=np.quantile(reps,.05,axis=0).tolist(),replicated_q95=np.quantile(reps,.95,axis=0).tolist(),posterior_predictive_upper_tail=(reps>=observed).mean(axis=0).tolist()))
            models[kind]=dict(contrast=contrast_summary,center=p[:,25,:].mean(axis=0).tolist(),curves=dict(mean=p.mean(axis=0).tolist(),q05=np.quantile(p,.05,axis=0).tolist(),q95=np.quantile(p,.95,axis=0).tolist()),outer=score(predict(fitted,outer['x']),outer['y']),criticism=critique)
        diff=np.array(models['nominal']['outer']['pointwise_log_score'])-np.array(models['ordinal']['outer']['pointwise_log_score'])
        scenarios[scenario]=dict(models=models,training={k:v.tolist() for k,v in training.items()},outer={k:v.tolist() for k,v in outer.items()},paired_nominal_minus_ordinal=dict(mean=float(diff.mean()),se=float(diff.std(ddof=1)/np.sqrt(len(diff)))))
    references={}
    fixture=dict(x=np.zeros((8,2)),y=np.repeat([0,1,2],[3,2,3]))
    for model_index,kind in enumerate(['nominal','ordinal']):
        coarse=fixture_quadrature(kind,31); fine=fixture_quadrature(kind,61)
        sampler_seed=int(np.random.SeedSequence([seed,4,2,model_index]).generate_state(1)[0])
        benchmark=fit(fixture,settings=dict(kind=kind,fixture=True),seed=sampler_seed)
        diagnostics['fixture:'+kind]=benchmark.diagnostics
        mcse=np.asarray(az.mcse(benchmark.idata,var_names=['center']).center)
        mean=np.asarray(benchmark.idata.posterior.center.mean(('chain','draw')))
        errors=np.abs(np.array(coarse['mean'])-np.array(fine['mean']))
        for k in range(3):
            checks.append(numerical_check(kind+':fixture_category'+str(k),mean[k],fine['mean'][k],tolerance=5*mcse[k]+errors[k],reference_method='independent 2D GL61 under same priors; allowance five MCMC MCSE plus GL31/61 discrepancy'))
        references[kind]=dict(coarse=coarse,fine=fine,quadrature_discrepancy=errors.tolist(),sampler_mean=mean.tolist(),sampler_mcse=mcse.tolist())
    result['targets']=dict(retirement_contrast='P(retire|load75,age5)-P(retire|load25,age5)',category_codes=['ready','service','retire'])
    result['metrics']=dict(scenarios=scenarios,prior=prior,load_grid=grid.tolist(),reference=references)
    result['checks']=checks
    result['diagnostics']=dict(fits=diagnostics,all_checks_passed=all(c['passed'] for c in checks) and all(d['passed'] for d in diagnostics.values()),stream_extensions='Fit SeedSequence([root,4,scenario_index,model_index]); fixture scenario=2. Replication uses role5 plus same indices. Changed outer role2 extension1.')
    result['limitations']=['Synthetic generator is a teaching mechanism, not evidence about containers.','Small outer sample cannot establish general model superiority.','Intercept-only quadrature checks a subproblem, not the whole regression posterior.','Proportional odds remains a scientific restriction even when sampler diagnostics pass.']
    return result

# %% [markdown]
# The small fixture repeats codes with counts (3,2,3), omits covariates, and uses the
# same proper intercept/cutpoint priors. Quadrature and NUTS are independent methods;
# agreement there does not make the complete regression posterior exact.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    from scipy.special import expit
    fig,axes=plt.subplots(1,2,figsize=(11,4))
    eta=np.linspace(-4,4,201)
    for c,label in [(-.5,'P(ready)'),(.8,'P(ready or service)')]:
        axes[0].plot(eta,expit(c-eta),label=label)
    axes[0].set(xlabel='Linear predictor η',ylabel='Cumulative probability',title='Difference gives service probability')
    axes[0].legend()
    for offset,kind in [(-.12,'nominal'),(.12,'ordinal')]:
        prior=result['metrics']['prior'][kind]
        mean=np.array(prior['mean'])[0]; lo=np.array(prior['q05'])[0]; hi=np.array(prior['q95'])[0]
        axes[1].errorbar(np.arange(3)+offset,mean,yerr=[mean-lo,hi-mean],fmt='o',label=kind)
    axes[1].set(xticks=range(3),xticklabels=['ready','service','retire'],ylabel='Prior category probability',title='Center: mean and 90% prior interval',ylim=(0,1))
    axes[1].legend(); fig.tight_layout()
    paths=[output_dir/'25_outcome_regression_01.svg',output_dir/'25_outcome_regression_02.svg']
    save_figure(fig,destination=paths[0],title='Ordered cumulative probabilities and proper prior implications',description='The gap between two cumulative logistic curves is the service probability. Prior category probabilities at centered predictors have wide intervals; center and corner numerical summaries are in the result record and chapter.')
    plt.close(fig)
    fig,axes=plt.subplots(2,3,figsize=(12,7),sharex=True,sharey=True)
    grid=result['metrics']['load_grid']
    for row,scenario in enumerate(['original','changed']):
        data=result['metrics']['scenarios'][scenario]['training']
        for category,label in enumerate(['ready','service','retire']):
            ax=axes[row,category]
            for kind,color,style in [('nominal','tab:blue','-'),('ordinal','tab:orange','--')]:
                c=result['metrics']['scenarios'][scenario]['models'][kind]['curves']
                ax.plot(grid,np.array(c['mean'])[:,category],style,color=color,label=kind)
                ax.fill_between(grid,np.array(c['q05'])[:,category],np.array(c['q95'])[:,category],color=color,alpha=.12)
            for lo,hi in [(25,25+50/3),(25+50/3,25+100/3),(25+100/3,75.0001)]:
                mask=(np.array(data['load'])>=lo)&(np.array(data['load'])<hi)
                ax.scatter((lo+hi)/2,np.mean(np.array(data['y'])[mask]==category),color='black',marker='x')
            ax.set(title=scenario+': '+label,xlabel='Load units',ylabel='Category probability',ylim=(0,1))
    axes[0,0].legend(); fig.tight_layout()
    save_figure(fig,destination=paths[1],title='Nominal and ordinal fitted response probabilities',description='Lines at age five with 90% posterior intervals for probabilities; crosses are unadjusted observed category proportions by load band, not age-matched validation. Rows compare original ordinal and changed nominal generators.')
    plt.close(fig)
    return paths


def main():
    result=compute()
    root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(result,destination=root/'artifacts/results/25_outcome_regression.json')
    render(result,output_dir=root/'artifacts/figures')
    print(json.dumps({s:{k:dict(contrast=v['contrast'],score=v['outer']['mean_log_score']) for k,v in row['models'].items()} for s,row in result['metrics']['scenarios'].items()},indent=2))
    if not result['diagnostics']['all_checks_passed']:
        raise RuntimeError('Sampler or reference checks failed; retain and investigate')

# %% [markdown]
# ## Changed givens
# Predict what happens with nominal logits (0, 1+1.8*xL+.2*xA, -.3+4*xL+.6*xA).
# Service can rise then fall; that alone does not refute proportional odds. Compare
# the two cumulative splits, criticism, and outer scores before explaining the change.
# %%
if __name__ == '__main__':
    main()
