"""Explicit provenance assembly for continuation computations; no import-time IO."""
from hashlib import sha256
import json
from pathlib import Path
from continuation_common import STREAM_ROLES


def record(lab_id: str, stem: str, seed: int, method: str) -> dict:
    root = Path(__file__).resolve().parents[1]
    path = root / f'plans/comprehensive_continuation/specifications/{lab_id}.json'
    spec = json.loads(path.read_text())
    hashes = {name: sha256((root / name).read_bytes()).hexdigest()
              for name in spec['input_paths']}
    return dict(schema_version=1, lab_id=lab_id, method=method,
                seeds=dict(root=seed, roles=STREAM_ROLES), settings=spec,
                specification_sha256=sha256(path.read_bytes()).hexdigest(),
                source_hashes=hashes, targets={}, metrics={}, checks=[],
                diagnostics={}, limitations=[])
