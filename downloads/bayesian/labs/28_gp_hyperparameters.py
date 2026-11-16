# %% [markdown]
# # Lab 28 — Integrating GP smoothness and noise
# This worked reference compares fixed, marginal-likelihood, and integrated predictions.
# First predict what a repeated measurement teaches about noise; save your explanation.
# %%
from pathlib import Path
import sys
if str(Path.cwd()/'labs') not in sys.path: sys.path.insert(0,str(Path.cwd()/'labs'))
import json
import numpy as np
from scipy.integrate import dblquad
from scipy.stats import norm
from continuation_common import rng,numerical_check,save_result,save_figure
from continuation_records import record
from continuation_gp import fit,fixed,empirical_bayes,predict,summaries,kernel
from continuation_depth import mixture_summary


def compute(seed=2828, *, settings=None):
    if settings is not None: raise ValueError('Reference settings are frozen; use subject helpers for investigations')
    result=record('A13','28_gp_hyperparameters',seed,'Analytic Gaussian conditioning; integrated log hyperparameters')
    from hashlib import sha256
    amendment='plans/comprehensive_continuation/specifications/A13_numerical_amendment01.json'
    root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    result['source_hashes'][amendment]=sha256((root/amendment).read_bytes()).hexdigest()
    pilot_checks=[]
    x=np.linspace(-2,2,12); y=.6*np.sin(1.8*x)+.2*x+rng(seed,'training').normal(0,.18,len(x))
    training=dict(x=x,y=y); checks=[]; query=np.array([0.,1.,3.]); seq=[]
    for order,bound in [(41,6),(81,6),(121,6),(121,8),(161,8)]:
        f=fit(training,settings=dict(order=order,bound=bound)); s=summaries(predict(f,query))
        seq.append(dict(order=order,bound=bound,logZ=f.log_normalizer,summary=s))
    for a,b in zip(seq,seq[1:]):
        if a['order']==81:
            pilot_checks=checks; checks=[]
        label=f"{a['order']}/{a['bound']} to {b['order']}/{b['bound']}"
        checks.append(numerical_check(label+' logZ',a['logZ'],b['logZ'],tolerance=1e-3,reference_method='refined/expanded independent quadrature rule'))
        for kind in ['latent','noisy']:
            for i in range(3):
                for key,tol in [('cdf_zero',1e-4),('q05',1e-3),('q95',1e-3)]:
                    checks.append(numerical_check(label+kind+str(i)+key,a['summary'][kind][i][key],b['summary'][kind][i][key],tolerance=tol,reference_method='refined/expanded quadrature'))
    integrated=f; eb,optimizers=empirical_bayes(training)
    modes={'fixed':fixed(training,.8,.2),'empirical_bayes':eb,'integrated':integrated}
    targets={name:summaries(predict(model,query)) for name,model in modes.items()}
    for jitter in [0.,1e-8]:
        other=fit(training,settings=dict(order=161,bound=8,jitter=jitter))
        s=summaries(predict(other,query))
        checks.append(numerical_check(f'jitter {jitter}',s['noisy'][2]['q95'],targets['integrated']['noisy'][2]['q95'],tolerance=1e-5,reference_method='repeat conditioning with changed diagonal jitter'))
    # A genuinely independent two-point inverse/determinant and adaptive integration.
    tx=np.array([-1.,1.]); ty=np.array([.2,-.1])
    def fixture(ls,le,quantity):
        ell,sigma=np.exp([le,ls]); r=np.exp(-2/ell**2); d=1+sigma**2+1e-10
        inv=np.array([[d,-r],[-r,d]])/(d*d-r*r)
        k=np.full(2,np.exp(-.5/ell**2)); m=k@inv@ty
        ll=-np.log(2*np.pi)-.5*np.log(d*d-r*r)-.5*ty@inv@ty
        density=np.exp(ll)*norm.pdf(le,np.log(.8),.6)*norm.pdf(ls,np.log(.2),.5)
        return density*(m if quantity=='mean' else 1.)
    bounds=[np.log(.8)-4.8,np.log(.8)+4.8,np.log(.2)-4,np.log(.2)+4]
    z,ze=dblquad(lambda ls,le:fixture(ls,le,'mass'),bounds[0],bounds[1],lambda _:bounds[2],lambda _:bounds[3],epsabs=1e-8,epsrel=1e-8)
    num,ne=dblquad(lambda ls,le:fixture(ls,le,'mean'),bounds[0],bounds[1],lambda _:bounds[2],lambda _:bounds[3],epsabs=1e-8,epsrel=1e-8)
    ff=fit(dict(x=tx,y=ty),settings=dict(order=121,bound=8)); fs=summaries(predict(ff,[0]))['latent'][0]
    checks.append(numerical_check('two-point adaptive mean',fs['mean'],num/z,tolerance=1e-6,reference_method='2x2 determinant/inverse plus adaptive dblquad'))
    checks.append(numerical_check('two-point adaptive logZ',ff.log_normalizer,np.log(z),tolerance=1e-6,reference_method='2x2 determinant/inverse plus adaptive dblquad'))
    # Sample a whole curve with ONE hyperparameter pair. Fine and coarse events share draws.
    g=np.linspace(-2,2,61); generator=rng(seed,'joint_prediction'); idx=generator.choice(len(f.weights),5000,p=f.weights)
    unique,reverse=np.unique(idx,return_inverse=True)
    from continuation_gp import Fit
    subset=Fit(f.x,f.y,f.nodes[unique],f.weights[unique]/f.weights[unique].sum(),f.log_normalizer,f.jitter)
    cp=predict(subset,g); curves=np.empty((5000,len(g)))
    for j in range(len(unique)):
        mask=np.flatnonzero(reverse==j); vals,vecs=np.linalg.eigh(cp['covariances'][j])
        if vals.min() < -1e-8: raise ValueError('Non-positive predictive covariance')
        curves[mask]=cp['means'][j]+generator.normal(size=(len(mask),len(g)))@(vecs*np.sqrt(np.maximum(vals,0))).T
    coarse=curves[:,::2]; event=(coarse.max(axis=1)>.8); fine=(curves.max(axis=1)>.8)
    a=np.ones(31)/30; a[[0,-1]]*=.5
    pp=predict(f,g[::2]); means=pp['means']@a; variances=np.einsum('i,nij,j->n',a,pp['covariances'],a)
    average=mixture_summary(f.weights,means,variances); sampled=coarse@a; mcse=sampled.std(ddof=1)/np.sqrt(len(sampled))
    checks.append(numerical_check('joint curve average mean',sampled.mean(),average['mean'],tolerance=5*mcse,reference_method='analytic linear functional aTVa and mixture weights'))
    variance_mcse=np.std((sampled-average['mean'])**2,ddof=1)/np.sqrt(len(sampled))
    checks.append(numerical_check('joint curve average variance',sampled.var(ddof=1),average['variance'],tolerance=5*variance_mcse,reference_method='law of total covariance'))
    changed=dict(x=np.r_[x,x[5]],y=np.r_[y,.6*np.sin(1.8*x[5])+.2*x[5]+rng(seed,'changed_givens').normal(0,.18)])
    changed_fit=fit(changed,settings=dict(order=121,bound=8))
    changed_coarse=fit(changed,settings=dict(order=81,bound=8))
    cs=summaries(predict(changed_coarse,query)); cf=summaries(predict(changed_fit,query))
    for kind in ['latent','noisy']:
        for i in range(3):
            for key,tol in [('cdf_zero',1e-4),('q05',1e-3),('q95',1e-3)]:
                checks.append(numerical_check(f'changed {kind}{i}{key}',cs[kind][i][key],cf[kind][i][key],tolerance=tol,reference_method='changed-data81to121 expanded quadrature'))
    plotgrid=np.linspace(-2.5,3,80)
    result['targets']=dict(predictions=targets,average=average,grid_event=dict(probability=float(event.mean()),mcse=float(event.std(ddof=1)/np.sqrt(5000)),fine_probability=float(fine.mean()),paired_grid_change=float(np.mean(fine.astype(float)-event)),draws=5000),changed=summaries(predict(changed_fit,query)))
    result['metrics']=dict(data=dict(x=x.tolist(),y=y.tolist()),query=query.tolist(),grid=plotgrid.tolist(),curves={k:summaries(predict(v,plotgrid)) for k,v in modes.items()},joint_grid=g.tolist(),joint_curves=curves[:12].tolist(),hyper_nodes=f.nodes.tolist(),hyper_weights=f.weights.tolist(),eb=np.exp(eb.nodes[0]).tolist(),posterior_hyper_means=(f.weights@np.exp(f.nodes)).tolist(),changed_hyper_means=(changed_fit.weights@np.exp(changed_fit.nodes)).tolist())
    result['checks']=checks; result['diagnostics']=dict(coarse_failed_checks=pilot_checks,refinements=seq,optimizers=optimizers,adaptive=dict(mass=z,mass_error=ze,numerator_error=ne),average_mcse=mcse,all_checks_passed=all(c['passed'] for c in checks))
    result['limitations']=['Mean and amplitude fixed; only length and noise integrated.','Finite bounds/refinement provide evidence, not exactness.','Maximum is a grid event, not continuum supremum.','Synthetic generating curve is not a prior GP draw.']
    return result

# %% [markdown]
# Mixture quantiles invert the weighted Normal CDF. Averaging component endpoints
# answers a different question. Joint curve events require conditional covariance.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    m=result['metrics']; paths=[output_dir/f'28_gp_hyperparameters_{i:02d}.svg' for i in [1,2]]
    n=np.array(m['hyper_nodes']); w=np.array(m['hyper_weights']); order=int(np.sqrt(len(w)))
    from numpy.polynomial.legendre import leggauss
    from matplotlib.ticker import NullFormatter
    _,quadweights=leggauss(order)
    density=w.reshape(order,order)/(np.outer(quadweights,quadweights)*8*.6*8*.5)
    fig,ax=plt.subplots(figsize=(8,5)); contour=ax.contourf(np.exp(n[:,0]).reshape(order,order),np.exp(n[:,1]).reshape(order,order),density,levels=18)
    fig.colorbar(contour,ax=ax,label='Density per log length × log noise')
    ax.scatter(.8,.2,c='white',edgecolor='black',label='Fixed'); ax.scatter(*m['eb'],c='red',marker='x',label='Empirical Bayes'); ax.set(xscale='log',yscale='log',xlim=(.15,4),ylim=(.03,1),xlabel='Length scale',ylabel='Noise SD',title='Posterior density in log hyperparameters'); ax.legend()
    ax.set_xticks([.2,.5,1,2,4],labels=['0.2','0.5','1','2','4']); ax.xaxis.set_minor_formatter(NullFormatter())
    ax.set_yticks([.05,.1,.2,.5,1],labels=['0.05','0.1','0.2','0.5','1']); ax.yaxis.set_minor_formatter(NullFormatter()); fig.tight_layout()
    save_figure(fig,destination=paths[0],title='Integrated hyperparameter posterior',description='Posterior density per unit log length and log noise, obtained by dividing posterior node masses by quadrature integration weights. Fixed and empirical-Bayes settings are marked; axes show positive length and noise on log scales.'); plt.close(fig)
    fig,axs=plt.subplots(1,2,figsize=(12,4.5))
    for name,color in [('fixed','tab:gray'),('empirical_bayes','tab:orange'),('integrated','tab:blue')]:
        rows=m['curves'][name]['latent']; axs[0].plot(m['grid'],[r['mean'] for r in rows],color=color,label=name)
        axs[0].plot(m['grid'],[r['q05'] for r in rows],':',color=color); axs[0].plot(m['grid'],[r['q95'] for r in rows],':',color=color)
    rows=m['curves']['integrated']['noisy']; axs[0].fill_between(m['grid'],[r['q05'] for r in rows],[r['q95'] for r in rows],alpha=.12,label='Integrated noisy 90%')
    axs[0].scatter(m['data']['x'],m['data']['y'],c='black',s=15); axs[0].set(xlabel='Input',ylabel='Calibration units',title='Means and pointwise 90% intervals'); axs[0].legend(fontsize=8)
    for c in m['joint_curves']: axs[1].plot(m['joint_grid'],c,alpha=.6,lw=1)
    e=result['targets']['grid_event']; axs[1].axhline(.8,color='black',ls='--'); axs[1].set(xlabel='Input',ylabel='Latent calibration curve',title=f"Joint curves; grid exceedance {e['probability']:.3f} ± {e['mcse']:.3f} MCSE")
    fig.tight_layout(); save_figure(fig,destination=paths[1],title='Conditional and integrated predictions',description='Left: fixed, empirical-Bayes and integrated latent intervals; pale band adds observation noise. Right: twelve whole-curve draws using shared hyperparameters, with threshold .8.'); plt.close(fig); return paths


def main():
    r=compute(); root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(r,destination=root/'artifacts/results/28_gp_hyperparameters.json'); render(r,output_dir=root/'artifacts/figures')
    print(json.dumps(r['targets'],indent=2))
    if not r['diagnostics']['all_checks_passed']: raise RuntimeError('Numerical checks failed')

# %% [markdown]
# ## Changed givens
# Add one independently noisy replicate at the sixth input. Compare the posterior
# noise/length means and response intervals; explain why uniform widening is not implied.
# %%
if __name__=='__main__': main()
