# %% [markdown]
# # Lab 27 — Failure times with incomplete follow-up
# An event contributes a density; a belt still running at its last scheduled visit
# contributes survival. Predict the direction of the error from calling both failures.
# This is a complete worked reference, including the shorter-follow-up investigation.
# %%
from pathlib import Path
import json
import numpy as np
from scipy.integrate import quad, dblquad
from scipy.stats import weibull_min, gamma, norm
from scipy.special import logsumexp
from numpy.polynomial.legendre import leggauss
from continuation_common import rng, numerical_check, save_result, save_figure
from continuation_records import record
from continuation_survival import observations, survival, log_likelihood, log_prior, fit, predict, targets


def independent_references():
    checks=[]
    t=np.array([2.,5.,4.]); d=np.array([1.,1.,0.]); x=np.zeros(3)
    theta=np.array([np.log(10),0,np.log(1.5)])
    reference=float(np.where(d,weibull_min.logpdf(t,1.5,scale=10),weibull_min.logsf(t,1.5,scale=10)).sum())
    checks.append(numerical_check('scipy event/censor loglik',log_likelihood(theta,t,d,x)[0],reference,tolerance=1e-10,reference_method='scipy.stats.weibull_min separate logpdf/logsf'))
    density,error=quad(lambda u: 1.5/10*(u/10)**.5*np.exp(-(u/10)**1.5),0,np.inf,epsabs=1e-11)
    checks.append(numerical_check('density integrates to one',density,1,tolerance=1e-9,reference_method='adaptive integration over time'))
    rate=.12
    checks.append(numerical_check('exponential likelihood',log_likelihood([np.log(1/rate),0,0],t,d,x)[0],d.sum()*np.log(rate)-rate*t.sum(),tolerance=1e-12,reference_method='event-count/exposure exponential expression'))
    # Direct numerical integration of gamma prior times likelihood checks conjugacy.
    kernel=lambda z: gamma.pdf(z,2,scale=.1)*z**2*np.exp(-11*z)
    z,ze=quad(kernel,0,np.inf,epsabs=1e-12)
    num,ne=quad(lambda rate: rate*kernel(rate),0,np.inf,epsabs=1e-12)
    checks.append(numerical_check('gamma posterior mean',num/z,4/21,tolerance=1e-10,reference_method='Gamma(shape 2+d, rate 10+exposure)'))
    day=theta.copy(); day[0]+=np.log(7)
    checks.append(numerical_check('week/day likelihood density shift',log_likelihood(day,7*t,d,x)[0]+d.sum()*np.log(7),reference,tolerance=1e-9,reference_method='density Jacobian for two events; censor probabilities dimensionless'))
    checks.append(numerical_check('week/day prior',log_prior(day,unit_scale=7)[0],log_prior(theta)[0],tolerance=1e-9,reference_method='shift logscale prior mean by log7'))
    # Independent two-dimensional reference: no b parameter; normalized a,r priors.
    def joint(a,r):
        k=np.exp(r)
        ll=np.sum(d*(r-k*a+(k-1)*np.log(t))-np.exp(k*(np.log(t)-a)))
        return float(np.exp(ll+norm.logpdf(a,np.log(12),.6)+norm.logpdf(r,0,.4)+10))
    denominator,err=dblquad(lambda r,a:joint(a,r),-1,6,lambda a:-2,lambda a:2,epsabs=1e-9,epsrel=1e-9)
    numerator,nerr=dblquad(lambda r,a:joint(a,r)*np.exp(-(12/np.exp(a))**np.exp(r)),-1,6,lambda a:-2,lambda a:2,epsabs=1e-9,epsrel=1e-9)
    v,w=leggauss(71); aa=2.5+3.5*v; rr=2*v
    ag,rg=np.meshgrid(aa,rr,indexing='ij')
    j=np.array([joint(a,r) for a,r in zip(ag.ravel(),rg.ravel())]).reshape(71,71)
    weights=np.outer(3.5*w,2*w)*j
    estimate=np.sum(weights*np.exp(-(12/np.exp(ag))**np.exp(rg)))/weights.sum()
    checks.append(numerical_check('tiny no-covariate posterior S12',estimate,numerator/denominator,tolerance=1e-5,reference_method='independent adaptive 2D integration versus tensor GL71 on same bounded rectangle'))
    return checks,dict(density_error_estimate=error,gamma_integral_error=ze,gamma_moment_error=ne,adaptive_denominator_error=err,adaptive_numerator_error=nerr,adaptive_S12=numerator/denominator,adaptive_bounds=dict(a=[-1,6],r=[-2,2]),bounded_reference=True)


def compute(seed=2727, *, settings=None):
    if settings is not None:
        raise ValueError('Reference settings frozen; call pure fit for a new investigation')
    result=record('A12','27_survival',seed,'curvature-centered deterministic Weibull integration')
    generator=rng(seed,'training'); x=generator.uniform(-1,1,90)
    latent=12*np.exp(-.35*x)*generator.weibull(1.4,90)
    censor=generator.uniform(6,18,90)
    training=dict(x=x,t=np.minimum(latent,censor),event=(latent<=censor).astype(int),censor=censor)
    checks,reference=independent_references()
    fits={}; summaries={}; refinements=[]
    changed_c=rng(seed,'changed_givens').uniform(3,9,90)
    scenarios={'original':training,'changed':dict(x=x,t=np.minimum(latent,changed_c),event=(latent<=changed_c).astype(int),censor=changed_c),'naive':dict(x=x,t=training['t'],event=np.ones(90,dtype=int))}
    for scenario,data in scenarios.items():
        sequence=[]
        for order,bound in [(31,7),(51,7),(71,7),(71,9)]:
            fitted=fit(data,settings=dict(order=order,bound=bound))
            summary=targets(fitted)
            sequence.append(dict(order=order,bound=bound,mean=fitted.mean.tolist(),log_normalizer=fitted.log_normalizer,targets=summary,optimizer=fitted.geometry))
        for earlier,later,label in [(sequence[0],sequence[1],'31to51'),(sequence[1],sequence[2],'51to71'),(sequence[2],sequence[3],'bounds7to9')]:
            for i in range(3):
                checks.append(numerical_check(f'{scenario}:{label}:mean{i}',earlier['mean'][i],later['mean'][i],tolerance=1e-3,reference_method='separate refined or expanded tensor rule'))
            checks.append(numerical_check(f'{scenario}:{label}:logZ',earlier['log_normalizer'],later['log_normalizer'],tolerance=1e-3,reference_method='separate refined or expanded tensor rule'))
            for name in summary:
                checks.append(numerical_check(f'{scenario}:{label}:{name}',earlier['targets'][name]['mean'],later['targets'][name]['mean'],tolerance=1e-4,reference_method='separate refined or expanded tensor rule'))
        fits[scenario]=fitted
        summaries[scenario]=dict(targets=summary,mean=fitted.mean.tolist(),events=int(np.sum(data['event'])),exposure=float(np.sum(data['t'])),refinements=sequence)
    grid=np.linspace(0,24,49)
    curves={name:{str(work):predict(f,[(t,work) for t in grid])['survival'] for work in [-.5,.5]} for name,f in fits.items()}
    # Replicate latent lifetimes, then impose the *observed* individual schedules.
    generator=rng(seed,'posterior_replication'); f=fits['original']; indices=generator.choice(len(f.weights),4000,p=f.weights); theta=f.nodes[indices]
    times=np.exp(theta[:,0,None]+theta[:,1,None]*x)*generator.weibull(np.exp(theta[:,2,None]),size=(4000,90))
    observed=np.minimum(times,censor); events=times<=censor
    replication={}
    for name,mask in [('low',x<0),('high',x>=0)]:
        event_fraction=events[:,mask].mean(axis=1); time_mean=observed[:,mask].mean(axis=1)
        replication[name]=dict(observed_event_fraction=float(training['event'][mask].mean()),replicated_event_fraction_mean=float(event_fraction.mean()),replicated_event_fraction_interval=np.quantile(event_fraction,[.05,.95]).tolist(),observed_mean_time=float(training['t'][mask].mean()),replicated_mean_time_interval=np.quantile(time_mean,[.05,.95]).tolist(),event_fraction_mean_mcse=float(event_fraction.std(ddof=1)/np.sqrt(4000)))
    result['targets']=summaries
    result['metrics']=dict(data={k:np.asarray(v).tolist() for k,v in training.items()},grid=grid.tolist(),curves=curves,replication=replication,exponential_anchor=dict(shape=2+int(training['event'].sum()),rate_weeks=10+float(training['t'].sum())))
    result['checks']=checks
    result['diagnostics']=dict(reference=reference,all_checks_passed=all(c['passed'] for c in checks),integration='bounded deterministic quadrature; normalizing prior and affine determinant included',quantiles='weighted quadrature quantiles; not covered by mean refinement tolerance')
    result['limitations']=['Administrative censoring independent conditional on workload is assumed.','Synthetic data do not validate the Weibull family or extrapolation.','Finite-bound/refinement checks are numerical evidence, not a proof of all omitted mass.','Weighted-node interval endpoints are less smooth than integrated means.']
    return result

# %% [markdown]
# The Gaussian curvature only supplies coordinates. Every node is weighted by the
# actual Weibull likelihood and proper priors. Check order and bound changes separately.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    data=result['metrics']['data']
    fig,ax=plt.subplots(figsize=(10,5))
    for i in range(24):
        t=data['t'][i]; event=data['event'][i]
        ax.plot([0,t],[i,i],color='0.55',linewidth=1)
        ax.scatter(t,i,marker='o' if event else '|',color='tab:red' if event else 'tab:blue',s=65)
    ax.scatter([],[],marker='o',color='tab:red',label='Observed failure')
    ax.scatter([],[],marker='|',color='tab:blue',label='Administrative censoring')
    ax.set(xlabel='Weeks since installation',ylabel='Belt index (first 24)',title='Observed time is the earlier of failure and scheduled follow-up')
    ax.legend(); fig.tight_layout()
    paths=[output_dir/'27_survival_01.svg',output_dir/'27_survival_02.svg']
    save_figure(fig,destination=paths[0],title='Failure and censoring timelines',description='First 24 individual records; circles indicate failures, vertical ticks censoring. Censored belts contribute all observed exposure, without an event density. Full times and indicators appear in the lab result.')
    plt.close(fig)
    fig,axes=plt.subplots(1,2,figsize=(11,4))
    grid=result['metrics']['grid']
    for ax,work in zip(axes,['-0.5','0.5']):
        for name,color,style in [('original','tab:blue','-'),('naive','tab:red','--'),('changed','tab:green',':')]:
            rows=result['metrics']['curves'][name][work]
            ax.plot(grid,[v['mean'] for v in rows],style,color=color,label=name if name!='naive' else 'Censor treated as failure')
            if name=='original':
                ax.fill_between(grid,[v['q05'] for v in rows],[v['q95'] for v in rows],alpha=.2,color=color,label='90% posterior probability interval')
        ax.set(xlabel='Weeks',ylabel='Survival probability',ylim=(0,1),title=f'Scaled workload {work}')
        ax.legend(fontsize=8)
    fig.tight_layout()
    save_figure(fig,destination=paths[1],title='Survival predictions and observation-model error',description='Solid curves and bands use proper censoring; dashed curves deliberately treat censoring as failure; dotted curves shorten follow-up. Numerical S12 values and conditional failure probabilities accompany the chapter.')
    plt.close(fig)
    return paths


def main():
    result=compute()
    root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(result,destination=root/'artifacts/results/27_survival.json')
    render(result,output_dir=root/'artifacts/figures')
    print(json.dumps(result['targets'],indent=2))
    if not result['diagnostics']['all_checks_passed']:
        raise RuntimeError('Numerical check failed; retain and investigate')

# %% [markdown]
# ## Changed givens
# Shorten independent follow-up to Uniform(3,9) weeks, retaining the latent lifetimes.
# Save a prediction about information at week 12 before inspecting the changed result.
# Explain why less information need not widen every realized posterior interval.
# %%
if __name__ == '__main__':
    main()
