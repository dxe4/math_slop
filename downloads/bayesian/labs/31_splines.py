# %% [markdown]
# # Lab 31 — Fit identifiable additive splines and integrate smoothing
# Fixed physical knots and training-only centering precede all outer prediction.
# A derivative penalty needs proper priors on its unpenalized affine directions.
# %%
from pathlib import Path
import sys
if str(Path.cwd()/'labs') not in sys.path: sys.path.insert(0,str(Path.cwd()/'labs'))
import json
import numpy as np
from scipy.stats import multivariate_normal
from continuation_common import rng,numerical_check,save_result,save_figure
from continuation_records import record
from continuation_splines import fit,predict,score,summarize,basis,penalty,design,conditional,effects,spline


def generate(generator,n):
    q=generator.uniform(0,1,(n,2)); y=.2+.7*np.sin(2*np.pi*q[:,0])+.6*np.cos(np.pi*q[:,1])+generator.normal(0,.2,n)
    return dict(x=q,y=y)


def compute(seed=3131, *, settings=None):
    if settings is not None: raise ValueError('Reference settings frozen')
    result=record('A16','31_splines',seed,'Gaussian coefficient integration and bivariate smoothing quadrature')
    from hashlib import sha256
    root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    amendment='plans/comprehensive_continuation/specifications/A16_numerical_amendment01.json'
    result['source_hashes'][amendment]=sha256((root/amendment).read_bytes()).hexdigest()
    pilot_checks=[]
    training=generate(rng(seed,'training'),80); checks=[]; q=np.array([[.25,.5],[.5,.5],[.9,.5]]); summaries={}; fits={}; grid=np.linspace(0,1,51)
    for scenario,data in [('original',training),('changed',{k:v[training['x'][:,0]<=.7] for k,v in training.items()})]:
        sequence=[]
        for order,bound in [(31,6),(61,6),(91,6),(91,8),(121,8)]:
            f=fit(data,settings=dict(order=order,bound=bound)); ss=summarize(predict(f,q),True); sequence.append(dict(order=order,bound=bound,logZ=f.log_normalizer,predictions=ss))
        for a,b in zip(sequence,sequence[1:]):
            start_checks=len(checks)
            label=scenario+str((a['order'],a['bound'],b['order'],b['bound']))
            checks.append(numerical_check(label+'logZ',a['logZ'],b['logZ'],tolerance=1e-3,reference_method='refined and expanded smoothing quadrature'))
            for i in range(len(q)):
                for key,tol in [('mean',1e-4),('cdf_zero',1e-4),('q05',1e-3),('q95',1e-3)]: checks.append(numerical_check(label+str(i)+key,a['predictions'][i][key],b['predictions'][i][key],tolerance=tol,reference_method='refined/expanded quadrature'))
            if a['order']==31:
                pilot_checks.extend(checks[start_checks:]); del checks[start_checks:]
        fits[scenario]=f; summaries[scenario]=dict(n=len(data['y']),predictions=ss,refinements=sequence,tau_means=(f.weights@np.exp(f.nodes)).tolist(),effects=[summarize(effects(f,grid,j)) for j in [0,1]])
    linear=fit(training,settings=dict(linear=True)); f=fits['original']
    # Outer generated only after fixed additive and linear fits are complete.
    outer=generate(rng(seed,'outer'),40); pred=predict(f,outer['x']); lp=predict(linear,outer['x']); diff=score(pred,outer['y'])-score(lp,outer['y']); intervals=summarize(pred,True)
    coverage=float(np.mean([(r['q05']<=y<=r['q95']) for r,y in zip(intervals,outer['y'])]))
    R=penalty(); B=basis(grid)
    checks.append(numerical_check('partition unity',np.max(abs(B.sum(axis=1)-1)),0,tolerance=1e-12,reference_method='B-spline partition identity including endpoints'))
    # Polynomial reproduction coefficients from an independent full-rank collocation solve.
    coll=np.linspace(0,1,8); bc=basis(coll); c1=np.linalg.solve(bc,coll); c2=np.linalg.solve(bc,coll**2)
    checks.append(numerical_check('affine penalty',c1@R@c1,0,tolerance=1e-8,reference_method='integral of affine second derivative is zero'))
    checks.append(numerical_check('quadratic penalty',c2@R@c2,4,tolerance=1e-8,reference_method='integral_0^1 (2)^2 du=4'))
    checks.append(numerical_check('two-dimensional penalty nullspace',np.sum(np.linalg.eigvalsh(R)<1e-7),2,tolerance=0,reference_method='constant and affine span'))
    for j,T in enumerate(f.transforms): checks.append(numerical_check(f'centered term{j}',np.max(abs((basis(training['x'][:,j])@T).mean(axis=0))),0,tolerance=1e-12,reference_method='empirical mean-zero reparameterization'))
    X=np.array([[1.,-.2],[1.,.4],[1.,.8]]); y=np.array([.2,.4,.3]); variances=np.array([1.,.3]); m,V,z=conditional(X,y,variances); C=.04*np.eye(3)+(X*variances)@X.T
    checks.append(numerical_check('direct marginal Gaussian',z,multivariate_normal.logpdf(y,cov=C),tolerance=1e-9,reference_method='observation-space multivariate Normal density'))
    direct=(variances[:,None]*X.T)@np.linalg.solve(C,y)
    checks.append(numerical_check('direct coefficient conditioning',np.max(abs(m-direct)),0,tolerance=1e-9,reference_method='observation-space Gaussian conditioning'))
    tiny=fit(training,settings=dict(tau=[1e-6,1e-6])); tiny_p=summarize(predict(tiny,q)); lin_p=summarize(predict(linear,q))
    checks.append(numerical_check('smoothing zero linear limit',max(abs(a['mean']-b['mean']) for a,b in zip(tiny_p,lin_p)),0,tolerance=1e-7,reference_method='matched proper nullspace-only linear model'))
    # Prior draws show the curve scale induced by the coordinate priors.
    generator=rng(seed,'prior'); tau=np.exp(generator.normal(np.log(5),.7,(2000,2))); coefs=generator.normal(size=(2000,15)); coefs[:,2:8]*=tau[:,0,None]; coefs[:,9:15]*=tau[:,1,None]
    prior=coefs@design(q,f.transforms).T
    result['targets']=dict(scenarios=summaries,outer=dict(additive_minus_linear=float(diff.mean()),paired_se=float(diff.std(ddof=1)/np.sqrt(40)),additive_coverage90=coverage,additive_mean_score=float(score(pred,outer['y']).mean()),linear_mean_score=float(score(lp,outer['y']).mean())),linear=lin_p,prior_mean_response_intervals=np.quantile(prior,[.05,.95],axis=0).tolist())
    result['metrics']=dict(training={k:v.tolist() for k,v in training.items()},outer={k:v.tolist() for k,v in outer.items()},grid=grid.tolist(),basis=B.tolist(),weighted_basis=(B*(f.transforms[0]@(f.weights@f.means[:,1:8]))).tolist(),hyper_nodes=f.nodes.tolist(),hyper_weights=f.weights.tolist(),outer_differences=diff.tolist(),queries=q.tolist(),penalty_eigenvalues=np.linalg.eigvalsh(R).tolist())
    result['checks']=checks; result['diagnostics']=dict(coarse_checks=pilot_checks,all_checks_passed=all(c['passed'] for c in checks),domain='[0,1] only; prediction rejects extrapolation',training_transform_means=[basis(training['x'][:,j]).mean(axis=0).tolist() for j in [0,1]])
    result['limitations']=['Known residual SD .2; smoothing scales learned under proper fixed priors.','Additivity excludes temperature-humidity interaction.','Training-centering changes component interpretation when rows are removed.','Outer40 rows provide imprecise performance evidence.']
    return result

# %% [markdown]
# As tau approaches zero only curvature disappears. Proper affine priors remain,
# producing the matched linear model, not an intercept-only prediction.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    m=result['metrics']; grid=m['grid']; paths=[output_dir/f'31_splines_{i:02d}.svg' for i in [1,2]]
    fig,axs=plt.subplots(1,3,figsize=(12,3.7)); axs[0].plot(grid,m['basis']); axs[0].set(title='Eight cubic basis functions',ylabel='Basis value')
    axs[1].plot(grid,m['weighted_basis']); axs[1].set(title='Posterior-mean weighted components',ylabel='Response contribution')
    axs[2].plot(grid,np.sum(m['weighted_basis'],axis=1),color='black'); axs[2].set(title='Their sum: centered temperature effect',ylabel='Response contribution')
    for ax in axs:
        ax.set_xlabel('Temperature on physical [0,1] scale')
        for knot in [.2,.4,.6,.8]: ax.axvline(knot,color='gray',alpha=.2,lw=1)
    fig.tight_layout(); save_figure(fig,destination=paths[0],title='Basis functions to fitted effect',description='Fixed cubic basis functions, their posterior-mean weighted contributions, and the summed centered temperature effect. Vertical lines mark the four fixed knots.'); plt.close(fig)
    fig,axs=plt.subplots(2,2,figsize=(11,8)); scenarios=result['targets']['scenarios']
    for j in [0,1]:
        ax=axs[0,j]
        for name,color in [('original','tab:blue'),('changed','tab:orange')]:
            rows=scenarios[name]['effects'][j]; ax.plot(grid,[r['mean'] for r in rows],color=color,label=name); ax.fill_between(grid,[r['q05'] for r in rows],[r['q95'] for r in rows],alpha=.15,color=color)
        ax.set(xlabel=['Temperature','Humidity'][j],ylabel='Centered effect',title='Pointwise 90% latent intervals'); ax.legend()
    nodes=np.array(m['hyper_nodes']); weights=np.array(m['hyper_weights']); n=int(np.sqrt(len(weights))); axs[1,0].contourf(np.exp(nodes[:,0]).reshape(n,n),np.exp(nodes[:,1]).reshape(n,n),weights.reshape(n,n),levels=15); axs[1,0].set(xscale='log',yscale='log',xlim=(1,50),ylim=(1,50),xlabel='Temperature smoothing SD',ylabel='Humidity smoothing SD',title='Posterior quadrature mass')
    d=np.array(m['outer_differences']); axs[1,1].scatter(np.arange(40),d,s=15); axs[1,1].axhline(0,color='black'); axs[1,1].axhline(d.mean(),color='tab:blue',ls='--'); axs[1,1].set(xlabel='Independent outer row',ylabel='Additive minus linear log score',title=f'Mean {d.mean():.3f}; SE {d.std(ddof=1)/np.sqrt(40):.3f}'); fig.tight_layout(); save_figure(fig,destination=paths[1],title='Learned smoothing and additive prediction',description='Centered effects with original and reduced temperature support, smoothing posterior masses, and paired outer score differences against the matching linear baseline. Changed effects use their own training centering.'); plt.close(fig); return paths


def main():
    r=compute(); root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(r,destination=root/'artifacts/results/31_splines.json'); render(r,output_dir=root/'artifacts/figures'); print(json.dumps(r['targets']['outer'],indent=2))
    if not r['diagnostics']['all_checks_passed']: raise RuntimeError('Numerical checks failed')

# %% [markdown]
# ## Changed givens
# Remove training temperatures above .7 while retaining knots and physical boundaries.
# Explain unsupported-region uncertainty and the changed centering of component effects.
# %%
if __name__=='__main__': main()
