# Case 02 — Forecast a noisy sensor process

**Public learner brief · C02 · extended route.** Prerequisites: Normal conditioning, posterior prediction, dependent data, and numerical quadrature. Allow approximately four to six hours. This additional project is outside the 114 registered assessment items.

An operator needs forecasts for the next 24 equally spaced one-minute readings. Readings fluctuate around a nominal baseline of 10 instrument units. Sensor noise and changes in the underlying process are different uncertainty sources. Your task is to predict future observations, not simply reconstruct already observed values.

## Data and question

The included [sensor_forecasting.csv](../../downloads/bayesian/data/sensor_forecasting.csv) contains 120 **original synthetic** records. There are no real sensors, people or organisations behind these numbers. Columns are `time_index`, increasing from 0 to 119, and `reading`, in fictional instrument units. The [dictionary and provenance](../../downloads/bayesian/data/README.md) document the observation units. The generator and its hidden parameters are protected review references: make your analysis plan before inspecting them.

Use times 0–95 for training and reserve 96–119 for a final forecast check from origin 95. Within training, compare horizons one and five at rolling origins 60–90. Do not randomly shuffle the series or estimate transformations from the future. Decide whether your target is a latent state, a future noisy reading, or both.

## Analysis protocol

Fit a latent stationary AR(1) model with Gaussian observation noise. For a small reference analysis, treat the centre as 10, process variance as 0.16 and measurement variance as 0.09; infer persistence with a proper prior supported inside the stationary region. Treat the supplied scales as hypothetical calibration assumptions. Compare with an explicitly specified independent-reading baseline using the same centre and scales.

Check prior trajectories, including persistence, dispersion and plausible readings. Use the Kalman likelihood on a refined grid, or justify another numerical method. Independently verify a tiny fixed-parameter calculation and the zero-measurement-noise limit. Keep initial-state treatment explicit. Distinguish grid error, state uncertainty, innovation noise, sensor noise and uncertainty in persistence.

Evaluate training dynamics with posterior predictive trajectories. Report chronological forecast score, coverage and width; explain why multiple horizons from one origin are dependent. Vary both a persistence prior and fixed noise assumptions, reporting a concrete forecast consequence. Document whether the final holdout affected any modelling decision.

## Deliverable

Provide a runnable analysis, a forecast plot distinguishing fitted history from held-out readings, a numerical verification table, and a stakeholder memo of at most 250 words. A useful conclusion may say that a model is inadequate or that calibration uncertainty prevents a deployment decision.

After an attempt, consult the [worked report](./case-02_sensor_forecasting_solution.md), [reference script](../../downloads/bayesian/labs/20_case_sensor_forecasting.py), and notebook. These answer-bearing resources, the generator and result artifacts must stay outside ordinary tutor retrieval. The entire reference run uses local data and the pinned environment.
