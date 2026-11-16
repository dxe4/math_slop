# %% [markdown]
# # Lab 29 — Learn a predictive combination
# Each held-out row is scored by a model and transformation fitted without that row.
# Outer observations are generated only after all development rules have been frozen.
# %%
from pathlib import Path
import sys
if str(Path.cwd()/'labs') not in sys.path: sys.path.insert(0,str(Path.cwd()/'labs'))
import json
from hashlib import sha256
from dataclasses import asdict
import numpy as np
from scipy.stats import t,multivariate_t
from scipy.optimize import minimize
from scipy.special import logsumexp
from continuation_common import rng,numerical_check,save_result,save_figure
from continuation_records import record
from continuation_stacking import fit,predict,score,objective,learn_weight,mixture_intervals,design


def generate(generator,n=100):
    x=generator.uniform(-2,2,n); y=1+.6*x+.35*x*x+.4*np.sin(2*x)+generator.normal(0,.5,n)
    return dict(x=x,y=y)


def compute(seed=2929, *, settings=None):
    if settings is not None: raise ValueError('Reference settings frozen')
    result=record('A14','29_predictive_combination',seed,'Conjugate Student-t predictions; five-fold learned stacking')
    dev=generate(rng(seed,'training')); perm=rng(seed,'fitting').permutation(100); folds=np.empty(100,dtype=int); folds[perm]=np.arange(100)%5
    logs=np.empty((100,2)); fold_records=[]
    for fold in range(5):
        train=folds!=fold; held=~train
        for col,degree in enumerate([1,2]):
            f=fit({k:v[train] for k,v in dev.items()},settings=dict(degree=degree)); p=predict(f,dev['x'][held]); logs[held,col]=score(p,dev['y'][held])
            fold_records.append(dict(fold=fold,degree=degree,training_ids=np.flatnonzero(train).tolist(),held_ids=np.flatnonzero(held).tolist(),center=f.center,scale=f.scale))
    weight,opt=learn_weight(logs); grid=np.linspace(0,1,10001); obj=np.array([objective(w,logs) for w in grid]); checks=[]
    checks.append(numerical_check('weight independent grid objective',opt['objective'],obj.max(),tolerance=1e-6,reference_method='10001 independently evaluated weights including endpoints'))
    checks.append(numerical_check('weight KKT residual',opt['kkt_residual'],0,tolerance=1e-5,reference_method='analytic derivative and endpoint sign conditions'))
    fits=[fit(dev,settings=dict(degree=d)) for d in [1,2]]
    rules=dict(weight=weight,models=[{k:v.tolist() if isinstance(v,np.ndarray) else v for k,v in asdict(f).items()} for f in fits],folds=folds.tolist())
    frozen_digest=sha256(json.dumps(rules,sort_keys=True).encode()).hexdigest()
    # Deliberately below rule construction: no outer values have existed above this line.
    outer=generate(rng(seed,'outer')); predictions=[predict(f,outer['x']) for f in fits]; outer_logs=np.column_stack([score(p,outer['y']) for p in predictions])
    mix=lambda w:np.logaddexp(np.log(w)+outer_logs[:,0],np.log1p(-w)+outer_logs[:,1]) if 0<w<1 else outer_logs[:,0 if w==1 else 1]
    scores={'linear':outer_logs[:,0],'quadratic':outer_logs[:,1],'half':mix(.5),'stack':mix(weight)}
    comparisons={name:dict(mean=float((scores['stack']-s).mean()),se=float((scores['stack']-s).std(ddof=1)/10)) for name,s in scores.items() if name!='stack'}
    intervals={name:mixture_intervals(predictions,w) for name,w in [('linear',1),('quadratic',0),('half',.5),('stack',weight)]}
    coverage={name:float(np.mean((outer['y']>=v[:,0])&(outer['y']<=v[:,1]))) for name,v in intervals.items()}
    # Independent joint t density ratio: joint(training,new)/marginal(training).
    tx=np.array([-1.,0.,1.]); ty=np.array([.2,.8,1.4]); fixture=fit(dict(x=tx,y=ty),settings=dict(degree=1)); q=np.array([.4]); outcome=.9
    X=design(tx,fixture.center,fixture.scale,1); Xall=np.vstack([X,design(q,fixture.center,fixture.scale,1)]); V0=np.diag([4.,1.])
    direct=multivariate_t.logpdf(np.r_[ty,outcome],loc=np.zeros(4),shape=(np.eye(4)+Xall@V0@Xall.T)/3,df=6)-multivariate_t.logpdf(ty,loc=np.zeros(3),shape=(np.eye(3)+X@V0@X.T)/3,df=6)
    checks.append(numerical_check('Student t joint conditioning',score(predict(fixture,q),[outcome])[0],direct,tolerance=1e-9,reference_method='ratio of direct joint and training multivariate Student-t densities'))
    dup=np.column_stack([logs[:,0],logs[:,0],logs[:,1]]); duplicates=[]
    for start in [[.2,.4,.4],[.6,.2,.2]]:
        def fn(w): return -float(logsumexp(dup+np.log(np.maximum(w,1e-300)),axis=1).sum())
        r=minimize(fn,start,method='SLSQP',bounds=[(0,1)]*3,constraints=[dict(type='eq',fun=lambda w:w.sum()-1)],options=dict(ftol=1e-12,maxiter=1000))
        combined=float(r.x[:2].sum()); residual=float(np.max(np.abs(np.exp(dup-np.max(dup,axis=1,keepdims=True))@r.x-(np.exp(logs-np.max(logs,axis=1,keepdims=True))@np.array([weight,1-weight])))))
        duplicates.append(dict(start=start,weights=r.x.tolist(),total_linear=combined,objective=-float(r.fun),success=bool(r.success),message=str(r.message),prediction_residual=residual))
        checks.append(numerical_check('duplicate predictive equivalence '+str(start),residual,0,tolerance=1e-5,reference_method='aligned mixture densities after summing duplicate weights'))
    query=np.array([-1.,0.,1.]); qpred=[predict(f,query) for f in fits]
    result['targets']=dict(weight_linear=weight,outer_mean_scores={k:float(v.mean()) for k,v in scores.items()},stack_minus=comparisons,coverage90=coverage,duplicate=duplicates)
    result['metrics']=dict(development={k:v.tolist() for k,v in dev.items()},outer={k:v.tolist() for k,v in outer.items()},oof_log_densities=logs.tolist(),folds=fold_records,weight_grid=grid[::100].tolist(),objectives=obj[::100].tolist(),queries=query.tolist(),query_predictions=[{k:v.tolist() if isinstance(v,np.ndarray) else v for k,v in p.items()} for p in qpred],outer_scores={k:v.tolist() for k,v in scores.items()})
    result['checks']=checks; result['diagnostics']=dict(optimizer=opt,frozen_rule_digest_before_outer=frozen_digest,frozen_rules=rules,order='development folds → weights → full development refits → digest → outer generation → prediction → score',all_checks_passed=all(c['passed'] for c in checks))
    result['limitations']=['No group effects in this row-independent synthetic example.','Outer SE assumes iid rows and is noisy with100 cases.','Weights are fitted predictive parameters, not truth probabilities.','Outer results cannot justify an unreported revision.']
    return result

# %% [markdown]
# A negative paired score difference is a scientific result, not a failed optimizer.
# Duplicate columns may split weight arbitrarily while defining the same prediction.
# %%
def render(result, *, output_dir: Path):
    import matplotlib.pyplot as plt
    m=result['metrics']; paths=[output_dir/f'29_predictive_combination_{i:02d}.svg' for i in [1,2]]
    fig,axs=plt.subplots(1,2,figsize=(11,4))
    for i,(label,detail) in enumerate([('Development','100 jobs; five fixed folds'),('Inside each fold','training-only scaling and posterior'),('Weight training','aligned held-out Student-t densities'),('Freeze rules','weight + full development refits'),('Independent outer','100 new jobs; score once')]):
        axs[0].text(.05,.94-i*.20,label+'\n'+detail,va='top',fontsize=10,bbox=dict(facecolor='#e5eef6',edgecolor='none'))
    axs[0].axis('off'); axs[1].plot(m['weight_grid'],m['objectives']); axs[1].axvline(result['targets']['weight_linear'],color='tab:red',ls='--'); axs[1].set(xlabel='Weight on linear model',ylabel='OOF log-score sum',title='Training objective for weights'); fig.tight_layout()
    save_figure(fig,destination=paths[0],title='Information flow and fitted stacking weight',description='Five folds keep transformations inside training. Weight fitting precedes full refits and independent outer evaluation. The objective marks the selected weight.'); plt.close(fig)
    fig,axs=plt.subplots(1,2,figsize=(11,4)); yy=np.linspace(-2,5,400); w=result['targets']['weight_linear']
    for j,q in enumerate(m['queries']):
        ps=[t.pdf(yy,p['df'],loc=p['mean'][j],scale=p['scale'][j]) for p in m['query_predictions']]
        axs[0].plot(yy,w*ps[0]+(1-w)*ps[1],label=f'Stack x={q:g}')
        if j==1:
            axs[0].plot(yy,ps[0],':',color='gray',label='Linear x=0'); axs[0].plot(yy,ps[1],'--',color='black',label='Quadratic x=0')
    axs[0].set(xlabel='Future response',ylabel='Density',title='Predictive densities'); axs[0].legend(fontsize=8)
    names=list(result['targets']['stack_minus']); means=[result['targets']['stack_minus'][k]['mean'] for k in names]; errors=[2*result['targets']['stack_minus'][k]['se'] for k in names]
    axs[1].errorbar(means,np.arange(3),xerr=errors,fmt='o'); axs[1].axvline(0,color='black',lw=1); axs[1].set(yticks=np.arange(3),yticklabels=names,xlabel='Stack minus comparator mean log score',title='Outer paired difference ± 2 SE'); fig.tight_layout()
    save_figure(fig,destination=paths[1],title='Mixture densities and untouched outer scores',description='Density mixtures at fixed queries and paired outer log-score differences, with two standard errors. A negative value favors the comparator.'); plt.close(fig); return paths


def main():
    r=compute(); root=Path(__file__).resolve().parents[1] if '__file__' in globals() else Path.cwd()
    save_result(r,destination=root/'artifacts/results/29_predictive_combination.json'); render(r,output_dir=root/'artifacts/figures'); print(json.dumps(r['targets'],indent=2))
    if not r['diagnostics']['all_checks_passed']: raise RuntimeError('Numerical checks failed')

# %% [markdown]
# ## Changed givens
# Duplicate the linear candidate. Predict whether individual weights remain identified.
# Inspect both optimization starts, the total linear weight, and predictive equivalence.
# %%
if __name__=='__main__': main()
