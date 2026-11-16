"""Authenticated C03 fit evidence; guarded recorders own every write.

Fit dependencies bind the numerical model, data, environment and sampling plan.
Teaching/registry/prediction changes require new envelope/prediction evidence, but
do not purport to change the already recorded numerical sampling execution.
"""
from __future__ import annotations
import hashlib
import json
from pathlib import Path
import platform
import importlib.metadata
import numpy as np
import air_quality_common as c

PACKAGES=('numpy','scipy','pymc','pytensor','numba','arviz','pandas')


def canonical_hash(value):
    return hashlib.sha256(json.dumps(value,sort_keys=True,separators=(',',':'),allow_nan=False).encode()).hexdigest()


def array_hash(value):
    a=np.ascontiguousarray(value)
    h=hashlib.sha256(str(a.dtype).encode()+str(a.shape).encode()+a.tobytes())
    return h.hexdigest()


def fit_inputs(spec: dict, sampler: dict, seed: int) -> dict:
    paths=['labs/air_quality_common.py','requirements.lock','artifacts/reference/c03/data/training.csv','plans/expansion_implementation/case/transforms_v1.json','plans/expansion_implementation/case/split_v1.json','plans/expansion_implementation/case/acquisition_manifest.json']
    return dict(source_hashes={p:c.digest(c.ROOT/p) for p in paths},spec=spec,sampler=sampler,seed=seed,versions={p:importlib.metadata.version(p) for p in PACKAGES},python=platform.python_version(),backend='PyMC native NUTS / float64 PyTensor C graph / analytic Numba Kalman Op')


def save_bundle(bundle: c.FitBundle, directory: Path, extra: dict) -> dict:
    """Explicit immutable persistence; no overwrite of attempts or failures."""
    directory.mkdir(parents=True,exist_ok=False)
    inputs=fit_inputs(bundle.metadata['spec'],bundle.metadata['sampler'],bundle.metadata['seed'])
    groups=('posterior','sample_stats','warmup_posterior','warmup_sample_stats')
    arrays={f'{group}__{key}':value for group in groups for key,value in getattr(bundle,group).items()}
    np.savez_compressed(directory/'arrays.npz',**arrays)
    inventory={k:dict(shape=list(v.shape),dtype=str(v.dtype),bytes=v.nbytes,sha256=array_hash(v)) for k,v in arrays.items()}
    manifest=dict(schema_version=1,inputs=inputs,cache_key=canonical_hash(inputs),arrays=inventory,array_file_sha256=c.digest(directory/'arrays.npz'),retained_array_bytes=sum(v.nbytes for v in arrays.values()),file_bytes=(directory/'arrays.npz').stat().st_size,metadata=bundle.metadata,execution=extra,status='diagnostics_pass' if bundle.metadata['diagnostics']['screen_pass'] else 'diagnostics_failed')
    (directory/'manifest.json').write_text(json.dumps(manifest,indent=2,allow_nan=False)+'\n')
    source_dir=directory/'sources'; source_dir.mkdir()
    for p in ('labs/air_quality_common.py','labs/air_quality_evidence.py'):
        (source_dir/Path(p).name).write_bytes((c.ROOT/p).read_bytes())
    for p in directory.rglob('*'):
        if p.is_file(): p.chmod(0o444)
    return manifest


def load_bundle(directory: Path, *, spec: dict, sampler: dict, seed: int,
                allow_failed=False, expected_manifest_sha256: str | None = None,
                fit_id: str | None = None) -> c.FitBundle:
    """Never refit on a cache miss; compare all current numerical dependencies."""
    manifest_path=directory/'manifest.json'
    actual_manifest_sha256=c.digest(manifest_path)
    if expected_manifest_sha256 is not None and actual_manifest_sha256!=expected_manifest_sha256:
        raise ValueError('Fit manifest differs from external source commitment')
    manifest=json.loads(manifest_path.read_text())
    inputs=fit_inputs(spec,sampler,seed)
    if manifest['inputs']!=inputs or manifest['cache_key']!=canonical_hash(inputs):
        raise ValueError('Stale C03 fit cache')
    for key,expected in [('spec',spec),('sampler',sampler),('seed',seed)]:
        if manifest['metadata'][key]!=expected:
            raise ValueError('Fit metadata differs from authenticated inputs')
    if c.digest(directory/'arrays.npz')!=manifest['array_file_sha256']:
        raise ValueError('Corrupt C03 fit cache')
    groups={key:{} for key in ('posterior','sample_stats','warmup_posterior','warmup_sample_stats')}
    with np.load(directory/'arrays.npz',allow_pickle=False) as stored:
        if set(stored.files)!=set(manifest['arrays']): raise ValueError('Fit array inventory mismatch')
        for key in stored.files:
            value=stored[key]; expected=manifest['arrays'][key]
            if list(value.shape)!=expected['shape'] or str(value.dtype)!=expected['dtype'] or array_hash(value)!=expected['sha256']:
                raise ValueError('Fit array binding mismatch')
            value.setflags(write=False)
            group,name=key.split('__',1); groups[group][name]=value
    if not allow_failed and not manifest['metadata']['diagnostics']['screen_pass']:
        raise ValueError('Fit diagnostics failed; failure evidence cannot support predictions')
    metadata=dict(manifest['metadata'],evidence_manifest_sha256=actual_manifest_sha256,
                  evidence_manifest_path=str(manifest_path))
    if fit_id is not None:
        if fit_id not in c.FINAL_SPECS or spec!=c.FINAL_SPECS[fit_id]:
            raise ValueError('Reuse role does not match an exact final model')
        if expected_manifest_sha256 is None:
            raise ValueError('Prototype reuse requires an external manifest commitment')
        metadata.update(recorded_fit_id=metadata.get('fit_id'),fit_id=fit_id,
                        reuse='Previously executed training fit; no new MCMC run')
    return c.FitBundle(**groups,metadata=metadata)
