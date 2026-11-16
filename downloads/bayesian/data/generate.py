"""Create the course's original synthetic data. Run from any directory."""
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent


def main():
    rng = np.random.default_rng(20260926)
    # A continuous response with variation across eight fictional service centres.
    centres = np.repeat(np.arange(8), [8, 12, 18, 25, 35, 45, 55, 70])
    x = rng.uniform(-2, 2, len(centres))
    offsets = np.array([-1.1, -0.6, 0.3, 0.9, -0.4, 0.6, -0.8, 1.1])
    y = 10 + 1.7 * x + offsets[centres] + rng.normal(0, 1.0, len(x))
    np.savetxt(ROOT / "waiting.csv", np.column_stack([centres, x, y]),
               delimiter=",", header="centre,load_z,wait_minutes", comments="",
               fmt=["%d", "%.8f", "%.8f"])
    # Binary regression data: higher support improves completion probability.
    x = rng.uniform(-2, 2, 160)
    p = 1 / (1 + np.exp(-(-0.4 + 0.9 * x)))
    completed = rng.binomial(1, p)
    np.savetxt(ROOT / "completion.csv", np.column_stack([x, completed]),
               delimiter=",", header="support_z,completed", comments="",
               fmt=["%.8f", "%d"])
    # A stratified randomised synthetic experiment, including an independent holdout.
    rows = []
    baseline = np.array([-1.0, -0.7, -0.4, -0.2, 0.0, 0.2, 0.5, 0.8])
    for j, alpha in enumerate(baseline):
        for arm, effect in [(0, 0), (1, 0.32)]:
            n = 40 + 10 * j
            p = 1 / (1 + np.exp(-(alpha + effect)))
            rows.append([j, arm, n, rng.binomial(n, p), 30, rng.binomial(30, p)])
    np.savetxt(ROOT / "experiment.csv", rows, delimiter=",",
               header="centre,arm,trials,successes,holdout_trials,holdout_successes",
               comments="", fmt="%d")
    print("Generated waiting.csv, completion.csv, experiment.csv with seed 20260926")


if __name__ == "__main__":
    main()
