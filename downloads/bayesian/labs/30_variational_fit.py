# %% [markdown]
# # Lab 30 — Optimize variational distributions, then test their accuracy
# Exact exponential moments evaluate an ELBO; BFGS must still optimize it.
# The independently integrated posterior is a reference for approximation error.
# %%
from pathlib import Path
import sys
if str(Path.cwd()/'labs') not in sys.path: sys.path.insert(0,str(Path.cwd()/'labs'))
import json
import numpy as np
from numpy.polynomial.hermite import hermgauss
from scipy.stats import multivariate_normal
from continuation_common import rng,numerical_check,save_result,save_figure
from continuation_records import record
from continuation_vi import fit,reference,tensor_reference,targets,negative_elbo,gradient,unpack,optimize,log_joint


def compute(seed=3030, *, settings=None):
    if settings is not None: raise ValueError('Reference settings frozen')
    result=record('A15','30_variational_fit',seed,'BFGS optimized Gaussian ELBO; adaptive nonlinear reference')
    checks=[]; anchor={}; target_m=np.array([1.,-.5]); target_V=np.array([[1.,.8],[.8,1.]]); precision=np.linalg.inv(target_V)
    for family in ['diagonal','full']:
        def fn(theta):
            m,V,L=unpack(theta,family); delta=m-target_m
            return .5*(np.trace(precision@V)+delta@precision@delta-2+np.linalg.slogdet(target_V)[1]-2*(theta[2]+theta[3]))
        f=optimize(fn,family); expected=np.diag(1/np.diag(precision)) if family=='diagonal' else target_V
        for name,actual,ref in [('mean',f['mean'],target_m),('covariance',f['covariance'],expected)]:
            checks.append(numerical_check('optimized Gaussian '+family+name,np.max(np.abs(actual-ref)),0,tolerance=1e-6,reference_method='analytic reverse-KL Gaussian optimum'))
        anchor[family]=dict(mean=f['mean'].tolist(),covariance=f['covariance'].tolist(),records=f['records'])
    scenarios={}; plot={}
    for scenario,limits,role in [('original',[.2,1.2],'training'),('changed',[.2,.5],'changed_givens')]:
        x=np.linspace(*limits,12); y=.25+np.exp(-.4)*x+rng(seed,role).normal(0,.3,12); data=dict(x=x,y=y)
        refs=[reference(data,b) for b in [5,7]]; tensors=[tensor_reference(data,n) for n in [121,181]]
        checks.append(numerical_check(scenario+' reference tail bound expansion',refs[0]['tail'],refs[1]['tail'],tolerance=1e-5,reference_method='analytically integrated offset, independently expanded adaptive loggain integral'))
        for j,tt in enumerate(tensors):
            checks.append(numerical_check(scenario+f' tensor{[121,181][j]} mean',np.max(np.abs(np.array(tt['mean'])-refs[-1]['mean'])),0,tolerance=1e-4,reference_method='2D direct likelihood tensor versus 1D analytic-offset adaptive reference'))
            checks.append(numerical_check(scenario+f' tensor{j} covariance',np.max(np.abs(np.array(tt['covariance'])-refs[-1]['covariance'])),0,tolerance=1e-4,reference_method='independent 2D posterior moments'))
        families={}
        for family in ['diagonal','full']:
            fitted=fit(data,settings=dict(family=family)); families[family]=dict(targets=targets(fitted),records=fitted['records'])
            for m in [[0,0],[.7,-.7],[-.7,.7]]:
                theta=np.r_[m,np.log([.5,.5]),[] if family=='diagonal' else [.1]]; fn=lambda t:negative_elbo(t,family,x,y); analytic=gradient(fn,theta); central=[]
                for i in range(len(theta)):
                    d=np.eye(len(theta))[i]*1e-5; central.append((fn(theta+d)-fn(theta-d))/2e-5)
                checks.append(numerical_check(scenario+family+str(m)+' gradient',np.max(np.abs(analytic-central)),0,tolerance=1e-6,reference_method='centered finite differences h=1e-5 versus complex step'))
                mean,V,L=unpack(theta,family)
                for order in [21,41]:
                    h,w=hermgauss(order); z1,z2=np.meshgrid(h*np.sqrt(2),h*np.sqrt(2),indexing='ij'); nodes=np.column_stack([z1.ravel(),z2.ravel()])@L.T+mean
                    elog=np.outer(w,w).ravel()@log_joint(nodes[:,0],nodes[:,1],x,y)/np.pi
                    entropy=1+np.log(2*np.pi)+theta[2]+theta[3]
                    checks.append(numerical_check(scenario+family+str(m)+f' GH{order}',fn(theta),-elog-entropy,tolerance=1e-7,reference_method='direct Gauss-Hermite likelihood/prior expectation'))
        scenarios[scenario]=dict(data={k:v.tolist() for k,v in data.items()},reference=refs[-1],reference_refinements=refs,tensor_refinements=tensors,families=families)
    a=np.linspace(-.5,1,120); b=np.linspace(-1.8,.6,120); aa,bb=np.meshgrid(a,b); original=scenarios['original']; dd=original['data']; lp=log_joint(aa.ravel(),bb.ravel(),np.array(dd['x']),np.array(dd['y'])).reshape(120,120)
    plot=dict(a=a.tolist(),b=b.tolist(),relative_density=np.exp(lp-lp.max()).tolist())
    result['targets']=scenarios; result['metrics']=dict(anchor=anchor,plot=plot); result['checks']=checks
    result['diagnostics']=dict(all_checks_passed=all(c['passed'] for c in checks),optimization='All starts and precision-loss messages retained; use gradient plus independent target checks, not R-hat.')
    result['limitations']=['Both variational families remain Gaussian in offset/loggain.','Reference numerical refinement does not validate the response model.','Known observation SD .3 and independent observations assumed.','Tail concerns latent extrapolated mean, not future noisy observation.']
    return result

# %% [markdown]
# A small gradient supports stationarity. It does not make a Gaussian family flexible
# enough to represent a curved posterior or establish global optimality.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    p=result['metrics']['plot']; a=np.array(p['a']); b=np.array(p['b']); aa,bb=np.meshgrid(a,b); points=np.column_stack([aa.ravel(),bb.ravel()]); s=result['targets']['original']
    paths=[output_dir/f'30_variational_fit_{i:02d}.svg' for i in [1,2]]
    fig,ax=plt.subplots(figsize=(7,5)); ax.contour(a,b,p['relative_density'],levels=[.1,.5,.9],colors='black')
    for family,color in [('diagonal','tab:orange'),('full','tab:blue')]:
        t=s['families'][family]['targets']; density=multivariate_normal.pdf(points,t['mean'],t['covariance']).reshape(120,120); ax.contour(a,b,density/density.max(),levels=[.1,.5,.9],colors=color); ax.plot([],[],color=color,label=family)
    ax.plot([],[],color='black',label='Reference'); ax.set(xlabel='Offset a',ylabel='Log gain b',title='Contours at 10%, 50%, 90% of each density peak'); ax.legend(); fig.tight_layout(); save_figure(fig,destination=paths[0],title='Optimized variational and reference contours',description='Black nonlinear posterior contours compare with diagonal orange and full Gaussian blue. Levels are relative density heights, not enclosed probability.'); plt.close(fig)
    fig,axs=plt.subplots(1,2,figsize=(11,4))
    for family,color in [('diagonal','tab:orange'),('full','tab:blue')]:
        for i,r in enumerate(s['families'][family]['records']): axs[0].plot(r['trace'],color=color,alpha=.6,label=family if i==0 else None)
    axs[0].set(yscale='symlog',xlabel='BFGS iteration',ylabel='Negative ELBO',title='All three declared starts'); axs[0].legend()
    for j,scenario in enumerate(['original','changed']):
        row=result['targets'][scenario]; ref=row['reference']['tail']
        for i,family in enumerate(['diagonal','full']): axs[1].scatter(j+(i-.5)*.15,row['families'][family]['targets']['tail']-ref,color=['tab:orange','tab:blue'][i],label=family if j==0 else None)
    axs[1].axhline(0,color='black'); axs[1].set(xticks=[0,1],xticklabels=['Original inputs','Narrow inputs'],ylabel='Approximation minus reference tail',title='P(a + 1.5 exp(b) > 1.3)'); axs[1].legend(); fig.tight_layout(); save_figure(fig,destination=paths[1],title='Optimization evidence and residual family error',description='Left retains optimization trajectories from every declared start. Right compares extrapolation-tail errors with the independently integrated posterior for original and changed designs.'); plt.close(fig); return paths


def main():
    r=compute(); root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(r,destination=root/'artifacts/results/30_variational_fit.json'); render(r,output_dir=root/'artifacts/figures'); print(json.dumps({k:v['reference'] for k,v in r['targets'].items()},indent=2))
    if not r['diagnostics']['all_checks_passed']: raise RuntimeError('Numerical checks failed')

# %% [markdown]
# ## Changed givens
# Narrow the calibration range to [.2,.5]. Predict offset/gain dependence and
# extrapolation uncertainty before comparing the fitted families with the reference.
# %%
if __name__=='__main__': main()
