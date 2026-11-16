"""Small explicit helpers for new labs; no imports from frozen scientific helpers."""
import json
from numbers import Real
from pathlib import Path
import numpy as np

STREAM_ROLES = dict(training=1, outer=2, prior=3, fitting=4,
                    posterior_replication=5, joint_prediction=6, changed_givens=7)


def finite_scalar(value: float, *, name: str) -> float:
    if isinstance(value, (bool, np.bool_)) or not isinstance(value, Real):
        raise ValueError(f'{name} must be a finite real scalar')
    value = float(value)
    if not np.isfinite(value):
        raise ValueError(f'{name} must be finite')
    return value


def rng(seed: int, role: str) -> np.random.Generator:
    return np.random.default_rng(np.random.SeedSequence([seed, STREAM_ROLES[role]]))


def numerical_check(name: str, estimate: float, reference: float, *, tolerance: float,
                    reference_method: str) -> dict:
    estimate = finite_scalar(estimate, name='estimate')
    reference = finite_scalar(reference, name='reference')
    tolerance = finite_scalar(tolerance, name='tolerance')
    if tolerance < 0 or not reference_method:
        raise ValueError('Nonnegative tolerance and independent reference method required')
    error = abs(estimate - reference)
    return dict(name=name, estimate=estimate, reference=reference,
                reference_method=reference_method, absolute_error=error,
                tolerance=tolerance, passed=error <= tolerance)


def save_result(result: dict, *, destination: Path) -> None:
    required = {'schema_version','lab_id','method','seeds','settings','targets',
                'metrics','checks','diagnostics','limitations','specification_sha256','source_hashes'}
    if required - result.keys():
        raise ValueError(f'Missing result fields: {sorted(required-result.keys())}')
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(result, indent=2, allow_nan=False)+'\n')


def save_figure(fig, *, destination: Path, title: str, description: str) -> None:
    """Explicit companion metadata; never consult the frozen base registry."""
    if not title.strip() or not description.strip():
        raise ValueError('Figure title and visible-equivalent description required')
    destination.parent.mkdir(parents=True, exist_ok=True)
    import matplotlib as mpl
    with mpl.rc_context({'svg.hashsalt': destination.stem}):
        fig.savefig(destination, format='svg', bbox_inches='tight',
                    metadata={'Title': title, 'Description': description, 'Date': None})
