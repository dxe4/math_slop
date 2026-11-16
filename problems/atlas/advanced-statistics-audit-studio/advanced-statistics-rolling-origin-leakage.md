# Build a forecast test that cannot see the future

*Difficulty 3 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 6 of 12*

A monthly series has observations 1 through 60. An analyst standardizes using all 60 months, chooses an AR order using errors on months 49-60, fits on months 1-48, and reports those same months 49-60 as a test. Identify every leakage path and give a valid rolling-origin alternative for one- and three-month forecasts.

<details>
<summary>Hint 1</summary>

Preprocessing parameters are learned quantities

</details>

<details>
<summary>Hint 2</summary>

A test set used to choose model order is validation data

</details>

<details>
<summary>Hint 3</summary>

Each forecast origin may use only information available by that origin

</details>

<details>
<summary>Worked solution</summary>

The global mean and scale use future months 49-60 while constructing training values, so preprocessing leaks. Selecting AR order by months 49-60 adapts the model to the claimed test outcomes, so those months are no longer an untouched test. A valid design chooses an initial origin, for example month 36. At each origin $t=36,\ldots,57$, fit preprocessing and every candidate model using only months at or before t, select tuning within that history (for example by an inner series of earlier origins), and issue forecasts for t+1 and, when available, t+3. Record losses separately by horizon. If one final confirmation period is desired, freeze the entire pipeline before opening it. Overlapping three-month errors are dependent, so uncertainty should not treat them as iid rows.

**Answer.** Both global standardization and order selection leak; recompute the full pipeline within each historical origin and keep any final confirmation period untouched.

</details>

*Tags: time series analysis, backtesting, data leakage, forecast horizon*
