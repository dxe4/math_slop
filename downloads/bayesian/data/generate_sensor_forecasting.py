"""Original synthetic sensor generator. Answer-bearing: review_reference.

Run only to reproduce the supplied CSV; ordinary lab execution reads it offline.
"""
from pathlib import Path
import numpy as np

DEFAULT_SEED = 20260927


def generate(seed: int = DEFAULT_SEED) -> tuple[np.ndarray, np.ndarray]:
    rng = np.random.default_rng(seed)
    latent = np.empty(120)
    latent[0] = rng.normal(0, .4/np.sqrt(1-.82**2))
    for t in range(1, 120):
        latent[t] = .82*latent[t-1] + rng.normal(0, .4)
    readings = 10 + latent + rng.normal(0, .3, 120)
    return readings, latent


def main() -> None:
    readings, _ = generate()
    path = Path(__file__).resolve().with_name("sensor_forecasting.csv")
    np.savetxt(path, np.column_stack([np.arange(120), readings]),
               delimiter=",", header="time_index,reading", comments="", fmt=["%d", "%.10f"])


if __name__ == "__main__":
    main()
