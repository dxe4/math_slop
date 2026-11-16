# Extension labs and case build

Current expansion: twelve extension labs 13–24, plus thirteen original core labs, give 25 registered source/notebook mappings. A07/A08 are fresh deterministic computations; A09 and C03 authenticate full recorded fits in pure offline replay. The inherited eight-lab description below remains the description of labs 13–20 only.

Before rebuilding A09 after bound inputs change, explicitly run `BAYES_VERIFY_TIMEOUT=7200 .venv/bin/python -B scripts/release_command.py hierarchy_refit .venv/bin/python -B artifacts/expansion/hierarchy_record.py`. Preserve all prior attempts. C03 has one frozen final evaluation with exposed outcomes: never rescore it as unseen validation. Both replay notebooks fail on stale or corrupt evidence. Scripts and downloadable notebooks need the original repository's local evidence; the static website excludes raw chains and private storage.

The shared builders now handle 25 labs, with `build_extensions.py` restricted to the exact twelve extension stems. Run notebook generation, actual fresh-kernel execution, then source scripts last to bind final result/figure bytes. Current evidence is `artifacts/expansion/notebook_execution.json`, `artifacts/expansion/extension_notebook_execution.json`, `artifacts/expansion/lab_execution.json` and unique `artifacts/expansion/extension_logs/` files. Old root reports are historical snapshots. No new lab/helper/registry dependency is removed for cache convenience.

| Added stem | Seed | Computation |
|---|---:|---|
| 21_prior_workflow | 2121 | Log-shape Beta quantile fitting, conflicting packets, provenance and action sensitivity |
| 22_categorical_conjugacy | 2222 | Dirichlet updating and independent predictive enumeration |
| 23_multivariate_hierarchy | 2323 | Authenticated weak/strong centered/noncentered fits, failed attempts and repairs |
| 24_case_air_quality | 2424 | Authenticated four-fit real-data comparison and frozen SC01 median-based evaluation |

All lab code, notebooks, results/figures and helpers are excluded from ordinary tutor retrieval and the learner ZIP. Case downloads and the complete self-study book deliberately contain answers. C03 scientific acceptance and all human/live gates remain pending.

## Inherited labs 13–20


Labs 13–18 implement the six advanced bridges; 19–20 are worked case references. All eight expose `compute(seed: int = DEFAULT_SEED) -> dict` without writes and a guarded `main() -> None` that creates the plot/result. Computation reads frozen local inputs and hashes; no ordinary run downloads data. Imports do not fit models. Percent cells remain the authoritative notebook sources. `labs/common.py` and all original helper signatures are unchanged.

Use the existing pinned Python 3.12 environment. No dependency changes or PyMC fits are needed for these eight examples. A single BLAS thread makes these small matrix operations efficient and reduces machine-dependent scheduling variation:

```sh
OPENBLAS_NUM_THREADS=1 .venv/bin/python -B scripts/build_extensions.py --notebooks --scripts
OPENBLAS_NUM_THREADS=1 .venv/bin/python -B scripts/build_extensions.py --execute-notebooks --scripts
OPENBLAS_NUM_THREADS=1 .venv/bin/python -B -m pytest -q -p no:cacheprovider tests/test_extensions.py tests/test_statistics.py
```

The first command builds notebooks 13–24 through the existing `scripts/build_notebooks.py:convert` function and runs their sources. The second executes those twelve notebooks in fresh `bayes-course` kernels, preserves them under `artifacts/executed/`, then reruns source scripts to bind final result/figure bytes to script execution evidence. Jupyter requires local kernel sockets; a restricted environment may require scoped permission. Ordinary source-script runs do not require sockets. Run from inside this repository; notebook bootstrap locates `labs/common.py` by walking parent directories.

| Source stem / notebook stem | Seed | Method and output |
|---|---:|---|
| `13_approximation` | 1313 | Normal exact/Laplace/mean-field functionals; Gamma tail/support contrast |
| `14_model_evidence` | 1414 | Exact evidence, quadrature checks, prior-width predictive mixtures |
| `15_observation_process` | 1515 | Gaussian convolution and conditioning; nonresponse sensitivity |
| `16_causal` | 1616 | Beta g-formula inference, known generator, absent-cell sensitivity |
| `17_time_series` | 1717 | Conditional AR grid, rolling forecasts, explicitly invalid leaked comparison |
| `18_gaussian_processes` | 1818 | Cholesky prediction, length scales, duplicate inputs and jitter |
| `19_case_penguins` | 1919 | Exact Gaussian and Student-t importance integration; frozen public CSV |
| `20_case_sensor_forecasting` | 2020 | Kalman/grid inference and chronological forecasts; synthetic CSV |

Each stem produces `artifacts/results/<stem>.json` and `artifacts/figures/<stem>.svg`. The eight figures come from computed quantities; captions distinguish intervals, moment bands and conditional assumptions. No unspecified extra figure stem is needed. NumPy/SciPy computations use variances in mathematical formulas and SD/scale in distribution calls; Student scale is not its SD.

The schema-version-1 envelope records lab ID, actual seed, method, parameters, metrics, scalar checks and limitations. `source_hashes` covers script, `common.py`, `extension_common.py`, lock and consumed local data/provenance. `save_result` rejects nonfinite JSON. Numerical checks have explicit absolute/relative tolerances, including six-MCSE comparisons for independent simulation. They supplement, rather than replace, independent tests.

`artifacts/expansion/lab_execution.json` appends script commands, UTC timestamps, elapsed seconds, source/output hashes and exit codes. `artifacts/expansion/extension_notebook_execution.json` retains successful and failed notebook attempts with input/output hashes. Script stdout/stderr are saved in `artifacts/expansion/extension_logs/`. Failed runs stop the builder; they are never marked passed merely because older outputs exist. SVG bytes may differ on regeneration because Matplotlib embeds dates/identifiers; hashes bind each actual run, not a universal byte-for-byte graphics promise.

The public penguin acquisition is separate from the offline build. Its immutable raw URL and checksum are in `data/provenance.json`; `data/PENGUINS_LICENSE.md` preserves the upstream CC0 text. `data/generate_sensor_forecasting.py` reproduces the original synthetic sensor file. Neither re-download nor regeneration is needed for study.

## Answer access and integration

Ordinary learner retrieval includes public readings and case briefs; executable assets are excluded. Both case scripts, both case notebooks (study and executed), their results/figures, worked reports, generators, hidden-process notes, tests, verification scripts/logs and handoffs are **answer-bearing review references**. The complete self-study site may expose them with explicit worked-reference labels. They must be excluded from answer-free tutor ingestion/export. The public CSVs and descriptive dictionary can remain available.

The integrated builders now use the explicit `llm/teaching.json` mappings: A01–A06 map to labs 13–18, C01/C02 to 19/20, and the 13 original mappings remain unchanged. `scripts/build_notebooks.py` builds all 25 registered notebooks; `scripts/execute_notebooks.py` executes all of them and records source-bound evidence. This extension-only builder remains available for focused reruns. Run scripts after notebooks to bind script evidence to the final saved figure/result bytes. Rebuild tutor, site and PDF after changing their inputs; the comprehensive checker detects stale outputs. Case reference assets remain excluded from the answer-free export.
