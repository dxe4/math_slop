"""Read-only authenticated C03 reference replay. Contains protected answers.

Sampling and the single final evaluation are separate recorded executions.
No missing cache is replaced by sampling or by synthetic data.
"""
from __future__ import annotations

import json
from pathlib import Path

import air_quality_common as c
import air_quality_evidence as e
import air_quality_prediction as p

FINAL = c.ROOT / 'artifacts/reference/c03/final_v1'


def read_json(path: Path) -> dict:
    def reject(value: str):
        raise ValueError(f'Nonfinite JSON: {value}')
    return json.loads(path.read_text(), parse_constant=reject)


def load_predictions() -> tuple[dict, dict]:
    """Verify committed fit files and every seal without opening final outcomes."""
    inventory = read_json(FINAL / 'inventory.json')
    if inventory['freeze_sha256'] != c.digest(p.FREEZE):
        raise ValueError('Stale final inventory')
    predictions = {}
    for role, entry in inventory['fits'].items():
        path = c.ROOT / entry['manifest_path']
        bundle = e.load_bundle(path.parent, spec=c.FINAL_SPECS[role],
                               sampler=c.SAMPLER, seed=inventory['seeds'][role],
                               expected_manifest_sha256=entry['manifest_sha256'], fit_id=role)
        seal_path = FINAL / f'{role}_prediction.json'
        if c.digest(seal_path) != entry['prediction_file_sha256']:
            raise ValueError('Prediction file changed')
        saved = read_json(seal_path)
        predictions[role] = p.PredictionSummary(saved['commitment'], tuple(saved['rows']),
                                                saved['seal_sha256'], bundle)
    p.validate_seals(predictions, inventory['freeze_sha256'])
    return inventory, predictions


def load_final_record() -> tuple[dict, dict, dict]:
    """Read sealed scores; do not repeat evaluation or access quarantined data."""
    record = read_json(FINAL / 'record.json')
    for path, expected in record['bindings'].items():
        if c.digest(c.ROOT / path) != expected:
            raise ValueError(f'Stale C03 evaluation record: {path}')
    inventory, predictions = load_predictions()
    scores = read_json(FINAL / 'scores.json')
    if scores['prediction_seals'] != {k: v.seal_sha256 for k, v in predictions.items()}:
        raise ValueError('Scores and prediction seals differ')
    return record, inventory, scores
