# %% [markdown]
# # E04: calibration, coverage, and confident mistakes
# This percent lab is the source of the sole authoritative fresh-kernel notebook.
# Read the frozen design before executing. R=4000 datasets, M=99 independent draws,
# n observations. This is synthetic particle-count science, not physical validation.
# Execution refuses to overwrite an earlier scientific attempt. Importing is safe.

# %%
from __future__ import annotations
import json
from pathlib import Path
import numpy as np
from scipy.stats import binom, norm
from extensions.calibration_v1.models import calibration as c


def _rng(seed: int) -> np.random.Generator:
    return np.random.Generator(np.random.PCG64(seed))


def _account(values: np.ndarray, attempted: int) -> dict:
    a = np.asarray(values)
    finite = np.isfinite(a)
    good = finite if a.ndim == 1 else finite.reshape(attempted, -1).all(axis=1)
    bad = int(np.sum(~good))
    return dict(attempted=attempted, completed=attempted-bad, failed=bad,
                nonfinite=bad, status='failed' if bad else 'complete',
                failure_details=['nonfinite numerical values'] if bad else [])


def compute(*, settings: dict) -> tuple[dict, dict]:
    """Explicit stochastic boundary. Returns arrays/results; no file writes."""
    seeds=settings['rng']['seeds']; sb=settings['sbc']; cov=settings['coverage']
    r,m,n=sb['replications'],sb['posterior_draws'],sb['n']
    truths=_rng(seeds['sbc_truths']).gamma(2,1,size=r)
    observations=_rng(seeds['sbc_observations']).poisson(truths[:,None],size=(r,n))
    totals=observations.sum(axis=1)
    arrays=dict(sbc_truths=truths,sbc_observations=observations,
                sbc_posterior_draws=np.empty((3,r,m)),
                **{name:np.empty((3,2,r),dtype=np.int64) for name in
                   ['sbc_less','sbc_equal','sbc_tie_offsets','sbc_ranks']},
                coverage_totals=np.empty((2,5,r),dtype=np.int64))
    panels=[]
    for ai,algorithm in enumerate(sb['algorithms']):
        shape=totals+2 if algorithm=='exact' else totals+8 if algorithm=='biased_pseudocount' else np.full(r,2)
        rate=1 if algorithm=='prior_only' else n+1
        draws=_rng(seeds['posterior_draws'][algorithm]).gamma(shape[:,None],1/rate,size=(r,m))
        arrays['sbc_posterior_draws'][ai]=draws
        for qi,quantity in enumerate(sb['quantities']):
            tq=truths if qi==0 else c.joint_log_likelihood(truths,observations)
            dq=draws if qi==0 else c.joint_log_likelihood(draws,observations)
            account=_account(np.column_stack([tq,dq]),r)
            if account['failed']:
                raise ArithmeticError(f'Nonfinite SBC quantities: {algorithm}/{quantity}: {account}')
            parts=c.rank_components(tq,dq)
            offsets=_rng(seeds['ties'][algorithm][quantity]).integers(0,parts['equal']+1)
            ranks=c.rank_with_ties(parts['less'],parts['equal'],offsets)
            for key,value in [('less',parts['less']),('equal',parts['equal']),('tie_offsets',offsets),('ranks',ranks)]:
                arrays['sbc_'+key][ai,qi]=value
            panels.append(dict(algorithm=algorithm,quantity=quantity,bin_counts=c.rank_bin_counts(ranks).tolist(),
                               rank_mean=float(ranks.mean()),tie_replications=int(np.sum(parts['equal']>0)),
                               equal_count_total=int(parts['equal'].sum()),nonzero_offset_count=int(np.sum(offsets>0)),
                               accounting=account))
    def band(tail,family,scope):
        return dict(lower=int(binom.ppf(tail,r,.1)),upper=int(binom.isf(tail,r,.1)),
                    confidence=.95,tail_probability=tail,family_bins=family,scope=scope)
    rows=[]; pairs=[]; checks=[]; boundary_reviews=[]; screens=[]
    for gi,g in enumerate(cov['generators']):
        generator=g['id']
        for ni,n in enumerate(cov['sample_sizes']):
            stream=_rng(seeds['coverage_totals'][generator][str(n)])
            s=stream.poisson(4*n,size=r) if gi==0 else stream.negative_binomial(2*n,1/3,size=r)
            arrays['coverage_totals'][gi,ni]=s
            for level in cov['levels']:
                indicators={}
                for method in cov['methods']:
                    q=c.interval_from_total(s,n,level,method)
                    account=_account(np.column_stack(list(q.values())),r)
                    if account['failed']:
                        raise ArithmeticError(f'Nonfinite intervals: {generator}/{n}/{level}/{method}: {account}')
                    hits=(q['lower']<=4)&(4<=q['upper']); indicators[method]=hits
                    k=int(hits.sum()); estimate=k/r
                    ref=c.coverage_sum(generator,n,level,method)
                    ref['independent_inversion']=None
                    if method=='exact':
                        inv=c.gamma_coverage_inversion(generator,n,level)
                        ref['independent_inversion']=inv
                        error=abs(inv['value']-ref['value'])
                        checks.append(dict(name=f'inversion/{generator}/{n}/{level}',passed=error<=1e-10+ref['tail_mass'],
                                           method='Poisson CDF event inversion versus explicit log-PMF sum',
                                           observed=ref['value'],reference=inv['value'],tolerance=1e-10,
                                           details={'absolute_difference':error,'tail_mass':ref['tail_mass']}))
                    # Examine all event boundaries, not only simulated totals.
                    full=c.interval_from_total(np.arange(ref['cutoff']+1),n,level,method)
                    for endpoint in ['lower','upper']:
                        near=np.flatnonzero(abs(full[endpoint]-4)<=1e-10)
                        for total in near:
                            boundary_reviews.append(dict(generator=generator,n=n,level=level,method=method,
                                                         total=int(total),endpoint=endpoint,value=float(full[endpoint][total])))
                    tail=1e-6/(2*90)
                    low=int(binom.ppf(tail,r,ref['lower_bound']))
                    high=int(binom.isf(tail,r,ref['upper_bound']))
                    screens.append(dict(generator=generator,n=n,level=level,method=method,successes=k,
                                        lower=low,upper=high,passed=low<=k<=high))
                    rows.append(dict(generator=generator,n=n,level=level,method=method,truth_mean=4,
                        truth_variance=g['observation_variance'],replications=r,accounting=account,successes=k,
                        coverage_estimate=estimate,mcse=float(np.sqrt(estimate*(1-estimate)/r)),
                        binomial_interval=dict(method='Wilson',confidence=.95,**c.wilson_interval(k,r)),
                        mean_width=float(np.mean(q['width'])),width_mcse=float(np.std(q['width'],ddof=1)/np.sqrt(r)),
                        negative_mass=dict(mean=float(np.mean(q['negative_mass'])),maximum=float(np.max(q['negative_mass']))),
                        finite_n_reference=ref,
                        asymptotic_reference=float(2*norm.cdf(norm.isf((1-level)/2)*np.sqrt(4/g['observation_variance']))-1),
                        illustrations=[dict(replicate_index=i,total=int(s[i]),lower=float(q['lower'][i]),
                                            upper=float(q['upper'][i]),width=float(q['width'][i]),covers_truth=bool(hits[i]),
                                            negative_mass=float(q['negative_mass'][i])) for i in range(12)]))
                for method in cov['methods'][1:]:
                    paired=c.paired_summary(indicators[method],indicators['exact'])
                    pairs.append(dict(generator=generator,n=n,level=level,method_a=method,method_b='exact',
                        replications=r,joint_counts=paired['joint_counts'],difference=paired['difference'],
                        paired_mcse=paired['mcse'],mc_interval=paired['interval'],confidence=.95,
                        zero_discordance=not np.any(indicators[method]!=indicators['exact']),
                        accounting=_account(np.ones(r),r)))
    examples=[]
    for example in settings['illustrations']['fixed_posteriors']:
        n,s=example['n'],example['total']; a,b=s+2,n+1
        x=np.linspace(-.6,5,561) if n==1 else np.linspace(2.2,6,561)
        intervals=[]
        for level in cov['levels']:
            for method in cov['methods']:
                q=c.interval_from_total(s,n,level,method)
                intervals.append(dict(level=level,method=method,**{k:q[k] for k in ['lower','upper','negative_mass']}))
        examples.append(dict(selection_rule='fixed prospectively',n=n,total=s,posterior_shape=a,posterior_rate=b,
                             intervals=intervals,density_grid=x.tolist(),
                             densities={method:c.posterior_density(x,a,b,method).tolist() for method in c.METHODS},
                             illustration_not_all_replications=True))
    result=dict(schema_version=1,extension_id='EXTENSION02',module_id='E04',status='complete',
        settings=settings,seeds=seeds,sbc=dict(n=5,replications=r,posterior_draws=m,rank_support=[0,99],
            bin_groups=sb['bin_groups'],panels=panels,
            pointwise_reference=band(.025,1,'One bin at a time'),
            simultaneous_reference=band(.05/(2*60),60,'All 60 displayed bins, conservative union bound')),
        coverage_rows=rows,paired_rows=pairs,posterior_examples=examples,checks=checks,
        diagnostics=dict(scientific_run_count=1,sbc_datasets=r,coverage_datasets=40000,posterior_draws=3*r*m,
                         failures=[],boundary_examinations=boundary_reviews,
                         empirical_reference_screen=dict(family_error=1e-6,cells=90,rows=screens,
                                                         passed=all(x['passed'] for x in screens))),
        figures=[dict(id=f'E04_{i:02}',svg=f'outputs/figures/E04_{i:02}.svg',png=f'outputs/figures/E04_{i:02}.png',
                      alt=alt,detailed_equivalent=f'chapters/figure_equivalents.md#e04-{i:02}',source_result_sha256=None)
                 for i,alt in enumerate([
                     'Resampling diagram: prior truths vary in SBC; truth is fixed for coverage; methods share each dataset.',
                     'Six rank histograms compare three algorithms on parameter and joint-likelihood quantities.',
                     'Coverage and mean width across sample sizes show concentration despite negative-binomial undercoverage.',
                     'Two fixed posterior illustrations and paired coverage contrasts show coordinate-dependent approximation error.'
                 ],1)],
        limitations=['Synthetic counts; no physical validation.','No human learning, accessibility or live tutor study.',
                     'Fixed-truth experiments retain totals only.','SBC quantities are not universal correctness tests.',
                     'Wilson and paired normal intervals describe Monte Carlo error; paired intervals may be degenerate.',
                     'Asymptotic references are limits, not finite-n coverage.'])
    if not all(x['passed'] for x in checks) or boundary_reviews or not result['diagnostics']['empirical_reference_screen']['passed']:
        result['status']='failed'
        result['diagnostics']['failures'].append('Numerical reference, boundary, or empirical screen requires investigation')
    return result,arrays


def render(result: dict, *, output_dir: Path) -> list[str]:
    """Rendering only: lazily load plotting code, never simulate."""
    from extensions.calibration_v1.scripts.figures import render_figures
    return render_figures(result,output_dir=output_dir)


def run(*, spec_path: Path, output_dir: Path, run_id: str) -> dict:
    """Only explicit I/O boundary; enforce freeze, containment, and no overwrite."""
    from datetime import datetime,timezone
    from extensions.calibration_v1.scripts.record import ROOT,EXTENSION,contained,fingerprint,write_new
    import jsonschema
    ext=ROOT/EXTENSION
    spec=contained(ROOT,str(spec_path),ext)
    out=contained(ROOT,str(output_dir),ext)
    if spec != ext/'specifications/study_design.json' or out != ext/'outputs':
        raise ValueError('frozen run requires canonical specification and output directory')
    freeze=json.loads((ext/'specifications/freeze_v1.json').read_text())
    for name,pin in freeze['bindings'].items():
        if fingerprint(ext/name)!=pin:
            raise ValueError(f'frozen binding changed: {name}')
    for sub in ['results','draws','executed']:
        contained(ROOT,str(out/sub),ext).mkdir(parents=True,exist_ok=True)
    if any((out/name).exists() for name in ['results/E04.json','draws/E04.npz','executed/science_attempt.json']):
        raise FileExistsError('scientific attempt already exists; never silently rerun')
    sources=['models/calibration.py','labs/e04_calibration.py','scripts/execute_notebook.py',
             'specifications/study_design.json','specifications/freeze_v1.json','schemas/results.schema.json',
             'notebooks/e04_calibration.ipynb','evidence/science/environment.json']
    inputs={str(EXTENSION/name):fingerprint(ext/name) for name in sources}
    inputs['requirements.lock']=fingerprint(ROOT/'requirements.lock')
    write_new(out/'executed/science_attempt.json',dict(run_id=run_id,started_at=datetime.now(timezone.utc).isoformat(),inputs=inputs))
    result,arrays=compute(settings=json.loads(spec.read_text()))
    np.savez_compressed(out/'draws/E04.npz',**arrays)
    result['specification']=dict(path=str(EXTENSION/'specifications/study_design.json'),sha256=fingerprint(spec)['sha256'])
    result['provenance']=dict(input_hashes=inputs,run_id=run_id,
        environment_binding=dict(path=str(EXTENSION/'evidence/science/environment.json'),sha256=inputs[str(EXTENSION/'evidence/science/environment.json')]['sha256']),
        arrays_binding=dict(path=str(EXTENSION/'outputs/draws/E04.npz'),sha256=fingerprint(out/'draws/E04.npz')['sha256']))
    jsonschema.validate(result,json.loads((ext/'schemas/results.schema.json').read_text()))
    write_new(out/'results/E04.json',result)
    if result['status']!='complete':
        raise ArithmeticError('Study retained as failed; investigate, do not replace seeds')
    return result

# %% [markdown]
# ## Run once, then inspect the retained evidence
# Independent deterministic checks precede this execution. The displayed tables are
# actual outputs from the current lab. Later figure/publication scripts read E04.json.
# A 90% credible interval is distinct from a 95% Monte Carlo interval for coverage.

# %%
if __name__ == '__main__':
    result=run(spec_path=Path('extensions/calibration_v1/specifications/study_design.json'),
               output_dir=Path('extensions/calibration_v1/outputs'),run_id='E04-v1-authoritative-notebook')
    print('Completed:',result['status'],'| datasets:',result['diagnostics']['coverage_datasets'])
    print('SBC algorithm | quantity | bins | mean rank | failed/nonfinite')
    for panel in result['sbc']['panels']:
        print(panel['algorithm'],panel['quantity'],panel['bin_counts'],panel['rank_mean'],panel['accounting'])
    print('90% exact coverage: generator n estimate MCSE Wilson finite-n mean width')
    for row in result['coverage_rows']:
        if row['level']==.9 and row['method']=='exact':
            print(row['generator'],row['n'],row['coverage_estimate'],row['mcse'],
                  row['binomial_interval'],row['finite_n_reference']['value'],row['mean_width'])
    print('Independent reference checks:',len(result['checks']),all(x['passed'] for x in result['checks']))
    print('Failures:',result['diagnostics']['failures'],'; near-threshold events:',result['diagnostics']['boundary_examinations'])
