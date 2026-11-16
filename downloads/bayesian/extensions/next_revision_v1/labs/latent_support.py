"""Explicit lab I/O and reporting shared by E02/E03; import has no side effects."""
from __future__ import annotations

from hashlib import sha256
import json
from pathlib import Path
import numpy as np


def check(name: str, actual, expected, *, atol=1e-11, rtol=1e-10,
          method='independent finite calculation', reference='frozen specification') -> dict:
    delta = np.abs(np.asarray(actual)-np.asarray(expected))
    return dict(name=name, method=method, reference=reference,
                discrepancy=float(np.max(delta, initial=0)), tolerance=dict(atol=atol, rtol=rtol),
                passed=bool(np.all(delta <= atol+rtol*np.abs(expected))))


def draw_summary(x) -> dict:
    x = np.asarray(x, dtype=float)
    return dict(mean=float(x.mean()), sd=float(x.std(ddof=1)),
                mcse=float(x.std(ddof=1)/np.sqrt(len(x))),
                interval90=np.quantile(x, [.05, .95]).tolist(), size=len(x),
                method='IID joint posterior draws; empirical central interval; MCSE is for mean')


def json_value(value):
    if isinstance(value, np.ndarray):
        return value.tolist()
    if isinstance(value, np.generic):
        return value.item()
    raise TypeError(f'Unsupported JSON type: {type(value).__name__}')


def save_run(*, module: str, lab_path: Path, model_path: Path, spec_path: Path,
             output_dir: Path, run_id: str, result: dict, render) -> dict:
    extension = Path(__file__).resolve().parents[1]
    root = extension.parents[1]
    output_dir = output_dir.resolve()
    if not output_dir.is_relative_to(extension / 'outputs'):
        raise ValueError('Scientific output must remain inside extension outputs/')
    settings = json.loads(spec_path.read_text())
    draws = result.pop('_draws')
    inputs = [lab_path, model_path, Path(__file__), spec_path, extension/'evidence/environment.json']
    inputs += sorted((extension/'tests').glob(f'test_{module.lower()}*.py'))
    result.update(schema_version=1, module_id=module, status='measured',
                  specification=dict(path=str(spec_path.resolve().relative_to(extension)), sha256=sha256(spec_path.read_bytes()).hexdigest()),
                  settings={k:settings[k] for k in ('quadrature','draw_count','interval_probabilities','tolerances')},
                  seeds=settings['seeds'], provenance=dict(run_ids=[run_id], input_hashes={str(p.resolve().relative_to(root)):dict(sha256=sha256(p.read_bytes()).hexdigest(),size=p.stat().st_size) for p in inputs}))
    for name in ('results','draws','figures'):
        (output_dir/name).mkdir(parents=True, exist_ok=True)
    target = output_dir/'results'/f'{module}.json'
    target.write_text(json.dumps(result, default=json_value, indent=2, allow_nan=False)+'\n')
    np.savez_compressed(output_dir/'draws'/f'{module}.npz', **draws)
    # Render the serialized values, so plots and numerical equivalents share a source.
    render(json.loads(target.read_text()), output_dir=output_dir/'figures')
    print(json.dumps(dict(module=module, targets=result['targets'], checks=result['checks']),default=json_value,indent=2))
    if not all(c['passed'] for c in result['checks']):
        raise ArithmeticError('Scientific check failed; retain results and failure evidence')
    return result
