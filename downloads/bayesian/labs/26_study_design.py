# %% [markdown]
# # Lab 26 — Evaluate the whole stopping policy
# Predict whether early stopping saves tests *and* reduces total loss. These are
# different targets. Save your reasoning before running this worked reference.
# Design Beta(8,2) generates studies; analysis Beta(1,1) determines decisions.
# %%
from pathlib import Path
import json
import numpy as np
from continuation_common import rng, numerical_check, save_result, save_figure
from continuation_records import record
from continuation_design import Policy, enumerate_stages, recurse, summarize, simulate, rational_anchor


def compute(seed=2626, *, settings=None):
    if settings is not None:
        raise ValueError('Use explicit Policy helpers for investigations; the reference settings are frozen')
    result = record('A11','26_study_design',seed,'beta-binomial enumeration, independent recursion, Monte Carlo')
    checks=[]
    cases={}
    for label,design in [('original',(8.,2.)),('changed',(3.,2.))]:
        policies={}
        for index,(name,looks) in enumerate([('fixed8',(8,)),('fixed14',(14,)),('fixed20',(20,)),('sequential',(8,20))]):
            policy=Policy(looks=looks)
            states=enumerate_stages(policy,design)
            exact=summarize(states,policy,design)
            recursive=summarize(recurse(policy,design),policy,design)
            # Separate, reproducible simulation streams for policies and scenario.
            simulation=simulate(policy,design,np.random.default_rng(np.random.SeedSequence([seed,5,index,0 if label=='original' else 1])))
            for target in ('assurance','expected_n','expected_loss'):
                checks.append(numerical_check(f'{label}:{name}:{target}:recursion',exact[target],recursive[target],tolerance=1e-12,reference_method='independent single-trial forward recursion'))
                checks.append(numerical_check(f'{label}:{name}:{target}:simulation',simulation[target]['mean'],exact[target],tolerance=5*simulation[target]['mcse'],reference_method='exact beta-binomial terminal enumeration; MCSE is simulation uncertainty'))
            checks.append(numerical_check(f'{label}:{name}:mass',exact['mass'],1.,tolerance=1e-12,reference_method='probability axiom'))
            operating={str(p):summarize(recurse(policy,truth=p),policy,truth=p) for p in [0.,.5,.7,.8,.9,1.]}
            policies[name]=dict(exact=exact,simulation=simulation,states=states,operating=operating)
        cases[label]=policies
    anchor_policy=Policy(looks=(2,4),p0=.5,success=.8,futility=.2)
    anchor=summarize(recurse(anchor_policy,(1.,1.)),anchor_policy,(1.,1.))
    for key,value in [('assurance',13/30),('expected_n',8/3)]:
        checks.append(numerical_check('rational_anchor:'+key,anchor[key],value,tolerance=1e-12,reference_method='rational ordered-path enumeration'))
    result['targets']=dict(definitions=['approval assurance','expected sample size','expected total loss in declared cost units'])
    result['metrics']=cases
    result['checks']=checks
    result['diagnostics']=dict(rational_anchor=rational_anchor(),all_checks_passed=all(c['passed'] for c in checks),simulation_stream_extension='SeedSequence([root,5,policy_index,scenario_index]); independent across policies',analysis_posteriors={str(n):[[1+s,1+n-s] for s in range(n+1)] for n in [8,14,20]})
    result['limitations']=['Synthetic exchangeable Bernoulli outcomes and immediate observation only.','Candidate policy is not globally optimized.','Costs and design priors are judgments; thresholds do not guarantee frequentist error control.']
    return result

# %% [markdown]
# The count method jumps between declared looks. The second calculation propagates
# one trial at a time. Both must reach the same terminal probabilities. Simulation
# draws one true reliability per complete study, never a new reliability per test.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    names=list(result['metrics']['original'])
    fig,axes=plt.subplots(1,2,figsize=(11,4))
    for ax,key,title in zip(axes,['assurance','expected_loss'],['Approval assurance','Expected total loss (cost units)']):
        exact=[result['metrics']['original'][n]['exact'][key] for n in names]
        sim=[result['metrics']['original'][n]['simulation'][key] for n in names]
        ax.plot(range(4),exact,'o',label='Exact')
        ax.errorbar(np.arange(4)+.12,[s['mean'] for s in sim],yerr=[2*s['mcse'] for s in sim],fmt='x',label='MC ±2 MCSE')
        ax.set(xticks=range(4),xticklabels=names,ylabel=title)
        ax.legend()
    fig.tight_layout()
    paths=[output_dir/'26_study_design_01.svg',output_dir/'26_study_design_02.svg']
    save_figure(fig,destination=paths[0],title='Assurance and loss of four frozen policies',description='Exact values and independent Monte Carlo estimates with two MCSE bars. Numerical values are in the chapter and result record.')
    plt.close(fig)
    fig,axes=plt.subplots(1,2,figsize=(11,4))
    states=result['metrics']['original']['sequential']['states']
    for decision,marker in [('approve','o'),('reject','x')]:
        rows=[v for v in states if v['action']==decision]
        axes[0].scatter([v['s'] for v in rows],[v['n'] for v in rows],s=[20+1000*v['probability'] for v in rows],marker=marker,label=decision)
    axes[0].set(xlabel='Success count',ylabel='Stopping sample size',yticks=[8,20],title='Terminal states; area encodes mass')
    axes[0].legend()
    for name in names:
        op=result['metrics']['original'][name]['operating']
        axes[1].plot([float(k) for k in op],[v['assurance'] for v in op.values()],'-o',label=name)
    axes[1].set(xlabel='Fixed true reliability',ylabel='Approval probability',ylim=(-.02,1.02))
    axes[1].legend()
    fig.tight_layout()
    save_figure(fig,destination=paths[1],title='Stopping states and fixed-truth approval',description='Only looks 8 and 20 can terminate the sequential study. Fixed-truth approval differs from assurance. Exact state probabilities and expected sample sizes accompany the chapter.')
    plt.close(fig)
    return paths


def main():
    result=compute()
    root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(result,destination=root/'artifacts/results/26_study_design.json')
    render(result,output_dir=root/'artifacts/figures')
    print(json.dumps({k:{n:v['exact'] for n,v in scenario.items()} for k,scenario in result['metrics'].items()},indent=2))
    if not result['diagnostics']['all_checks_passed']:
        raise RuntimeError('Numerical check failed; retain this run and investigate')

# %% [markdown]
# ## Changed givens
# Replace the design prior with Beta(3,2) while retaining the same decision rule.
# Predict which fixed-truth quantities stay unchanged. The reference above computes
# the changed design, but your explanation should distinguish weighting from action.
# %%
if __name__ == '__main__':
    main()
