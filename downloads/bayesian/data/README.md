# Data dictionary and provenance

The three original service CSV files are synthetic teaching data created by [generate.py](./generate.py), seed `20260926`. They describe a fictional service; no people, organisations, or actual interventions are represented. The generators and [generating-process reference](./generating_processes.md) contain hidden numerical truths and are excluded from ordinary tutor retrieval. Write an analysis plan before inspecting them.

| File | Observation unit | Columns |
|---|---|---|
| waiting.csv | A service visit, 268 total | `centre`: integer 0–7; `load_z`: dimensionless centred workload index in [−2,2]; `wait_minutes`: continuous waiting time in minutes |
| completion.csv | A service user, 160 total | `support_z`: dimensionless centred support index in [−2,2]; `completed`: 0 or 1 |
| experiment.csv | Centre × randomised arm, 16 rows | `centre`: 0–7; `arm`: 0=A, 1=B; `trials` and `successes`: training counts; `holdout_trials` and `holdout_successes`: independent validation counts |

The `_z` variables are already defined on a centred teaching scale; they are not sample-standardised within each file. Waiting times follow a normal model with centre offsets and a common workload slope. That model can theoretically generate negative values, so its scientific plausibility is limited to these ranges. The completion data follow a logistic model. The experiment has differing centre baselines; allocation counts differ by centre but are equal between arms within each centre. Numerical generating coefficients belong to the protected reference.

The experiment's main decision targets an **equal mixture of the eight existing centres**, not the sample's size-weighted mixture and not unseen centres. The holdout is reserved for a final check, not prior selection or model tuning. Synthetic random assignment makes a treatment interpretation coherent within this simulation; it gives no evidence about an actual service.

Generate the files with `python data/generate.py` in the locked environment. Files are included so ordinary study needs no downloads. The three service datasets have no missing values; lesson 11 introduces missingness explicitly rather than silently discarding records. CSV decimals are rounded to eight places. The original service models assume independent visits conditional on their specified predictors and group effects.

## Genuine public penguin observations

[penguins.csv](./penguins.csv) is an unchanged public-data copy: **344 rows, eight columns**. It is not synthetic. The table concerns sampled adult penguins near Palmer Station in 2007–2009; it is not a random sample of all penguins. Kristen Gorman and Palmer Station LTER collected the observations, and Horst, Hill and Gorman distribute the simplified table in [palmerpenguins](https://allisonhorst.github.io/palmerpenguins/). See [provenance.json](./provenance.json) for the immutable commit, raw URL, retrieval date, scientific citations and SHA-256. The [upstream CC0 statement](https://allisonhorst.github.io/palmerpenguins/#license) and [preserved licence](./PENGUINS_LICENSE.md) support redistribution. No artwork was copied.

| Column | Meaning / units | Missing marker |
|---|---|---|
| `species` | Adelie, Chinstrap, Gentoo | `NA` |
| `island` | Biscoe, Dream, Torgersen | `NA` |
| `bill_length_mm` | Measured bill length, mm | `NA` |
| `bill_depth_mm` | Measured bill depth, mm | `NA` |
| `flipper_length_mm` | Measured flipper length, mm | `NA` |
| `body_mass_g` | Measured body mass, grams | `NA` |
| `sex` | Recorded female or male | `NA` |
| `year` | Study year, 2007–2009 | `NA` |

The marker policy is documented for every column; not every column actually has missing entries. Raw records retain all missing values. The case computes overlapping per-field counts and separate excluded-row counts. Measured precision is not an estimated measurement-error variance. This simplified table has no nesting identifier. Main-case eligibility requires the four measurements; recorded sex is not required. Training uses 2007–2008 and holdout uses 2009; transformations are fitted only on training records.

Citation: Horst AM, Hill AP, Gorman KB (2020), *palmerpenguins*, doi:10.5281/zenodo.3960218. Original scientific report: Gorman KB, Williams TD, Fraser WR (2014), *Ecological Sexual Dimorphism and Environmental Variability within a Community of Antarctic Penguins*, PLoS ONE 9(3):e90081, doi:10.1371/journal.pone.0090081. The three underlying species-dataset DOIs are retained in provenance. The maintainer's request that researchers preparing publications contact the investigator and follow LTER use guidance is preserved there; no contact or external publication was made in this task.

## Original synthetic sensor observations

[sensor_forecasting.csv](./sensor_forecasting.csv) contains **120 synthetic readings**, no missing entries, and only these public fields:

| Column | Meaning / units |
|---|---|
| `time_index` | Integer 0–119, equally spaced one-minute observations |
| `reading` | Continuous observation in fictional instrument units, ten decimal places |

The target is future readings from this fictional process. Training is 0–95; final chronological holdout is 96–119. Do not shuffle time. The generator seed is `20260927`, distinct from analysis seed `2020`. Reproduce the CSV with `.venv/bin/python data/generate_sensor_forecasting.py`; ordinary lab execution reads included data without generating or fetching them. Latent truths are not columns in this table. The generator and generating-process notes are protected review references.

`provenance.json` records all six CSV files, including the original synthetic service data. Public dataset licence terms do not establish a licence for the rest of this repository.


## Real Beijing daily air-quality observations

[beijing_2016_daily.csv](./beijing_2016_daily.csv) contains 4,392 station-days: all
366 dates of 2016 at twelve UCI monitoring sites. This is real observational
data, released after the reference's frozen evaluation. Treat it as exposed if
you inspect the final-site concentrations before planning your own analysis.
See the [attribution and CC BY 4.0 notice](./licenses/beijing_CC_BY_4.md). Its
quarantine wording records the original acquisition boundary; the release now
contains the exact frozen complete table. No original archive or license bytes
were changed. The source retrieval was 2026-09-26 UTC, DOI 10.24432/C5RK5G.

| Column | Meaning / units | Missing marker |
|---|---|---|
| `station` | Exact monitoring-site identifier | None |
| `date` | Recorded calendar date; no assumed timezone conversion | None |
| `n_hours` | Source hourly rows, 0–24 | None |
| `n_pm25` | Hours with finite recorded PM2.5, including observed zero | None |
| `n_wspm` | Hours with finite wind, including calm zero | None |
| `n_pair` | Hours with both measurements | None |
| `pm25_ug_m3` | Arithmetic mean PM2.5 over paired hours, µg/m³ | `NA` if no pair |
| `wspm_m_s` | Arithmetic mean wind over the same paired hours, m/s | `NA` if no pair |
| `eligible_18` | 1 when at least 18 paired hours, else 0 | None |
| `eligible_24` | 1 when exactly 24 paired hours, else 0 | None |
| `split` | Identifier-hash training/final assignment | None |

Dongsi and Guanyuan are the fixed final sites. Ten others supply training
outcomes. Both means use identical paired hours. Ineligible records remain in
the table and may have observed means; eligibility is distinct from missingness.
The base rule is a teaching assumption, not an environmental standard. Complete
hours can change the measured population and do not repair informative missingness.
Weather is matched to the nearest meteorological station, not necessarily
measured at the pollution monitor. No coordinates or adjacency are inferred.
Ordinary reference execution is offline and never redownloads or substitutes data.
