# Generating processes — protected review reference

**Answer-bearing: exclude this file and both generator scripts from ordinary tutor retrieval and the answer-free learner export.** These are original synthetic course mechanisms, not fitted discoveries. The public dictionary describes observations and units without exposing these numerical recovery targets.

## Original service data

`data/generate.py` uses NumPy `default_rng(20260926)` sequentially for three files. Waiting times use centre sizes [8,12,18,25,35,45,55,70], uniform workload on [−2,2], mean 10 + 1.7 × workload plus centre offsets [−1.1,−0.6,0.3,0.9,−0.4,0.6,−0.8,1.1], and independent Normal noise SD 1. Completion uses 160 uniform support values on [−2,2], logistic intercept −0.4 and slope 0.9. The experiment uses eight centre logit baselines [−1.0,−0.7,−0.4,−0.2,0.0,0.2,0.5,0.8], arm-B log-odds shift 0.32, training counts 40+10×centre in each arm, and 30 independent holdout trials per cell. CSV floating-point fields have eight decimals. No existing CSV or generator was changed for the extension work.

The exact generator, not a restatement in prose, determines the RNG draw order. A changed seed or inserted draw changes later files. None of these parameters describes an actual service. The original equal-centre capstone target is preserved.

## Sensor process

`data/generate_sensor_forecasting.py` uses NumPy `default_rng(20260927)`. It first draws a centred initial latent state with stationary SD 0.4/sqrt(1−0.82²). It recursively draws 119 innovations of SD 0.4 with persistence 0.82. Only after generating the whole latent path does it draw 120 independent sensor errors of SD 0.3, then adds baseline 10. The public file stores indices and readings at ten decimal places; latent states are returned by `generate(seed)` for review but are not written to the public CSV.

The case fits only persistence, with the true baseline/process/sensor variances supplied as hypothetical calibration. Recovery under those conditions is intentionally easier than estimating all parameters. The saved posterior interval contains 0.82 on this one series; this is not a repeated-simulation calibration study. Changing sensor/process assumptions changes forecast uncertainty, as the worked report demonstrates. Regenerate only deliberately: ordinary course runs use the frozen CSV and verify its hash.
