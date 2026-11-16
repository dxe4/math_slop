# Case 01 — Predict body mass for a restricted penguin population

**Public learner brief · C01 · extended route.** Prerequisites: regression, model checking, robustness, and advanced approximation/observation-process bridges. Allow approximately four to six hours for an initial analysis and revision. This is an additional project, outside the 114 registered assessment items.

A field team has measured flipper length and bill dimensions and wants a prediction of body mass, with an interval for an individual adult. Build an analysis that could support that limited prediction. Do not infer that changing a penguin's flipper length would change its mass, or that a successful prediction transports to other species, life stages, locations or eras.

## Data and target

Use the genuine public [penguins.csv](../../downloads/bayesian/data/penguins.csv). The byte-preserved table has 344 records with species, island, bill dimensions, flipper length, mass, recorded sex and study year. Missing values remain `NA`. Consult the [dictionary](../../downloads/bayesian/data/README.md), [provenance](../../downloads/bayesian/data/provenance.json) and [CC0 licence](../../downloads/bayesian/data/PENGUINS_LICENSE.md). The data were collected by Kristen Gorman and Palmer Station LTER; the simplified table is distributed by Horst, Hill and Gorman's [palmerpenguins project](https://allisonhorst.github.io/palmerpenguins/).

Define your target as another measured adult resembling the sampled population, conditional on the measured predictors and their observed support. The table is observational. It does not establish a random population sample or independent nesting units. The simplified file contains no nest identifier; do not manufacture one from row order.

## Analysis protocol

Reserve 2009 for a final temporal check, and fit on 2007–2008. State exclusions by missing field and by row; counts by field may overlap. Fit predictor transformations on training data only. Use all three numerical predictors and an intercept, and explain whether species or sex is a predictor, a diagnostic grouping, or unused. Different eligibility rules imply different prediction populations.

Write a generative model and proper coefficient priors in explicit units. Compare a Gaussian residual model with a Student-t residual model. A small conditional analysis with fixed residual scale and degrees of freedom is acceptable if you disclose what uncertainty it omits. Prior prediction must examine impossible masses as well as central intervals. Specify a computational reference, diagnostics suitable for your inference method, and at least one posterior predictive discrepancy sensitive to residual structure.

Report individual-level held-out log density, RMSE in grams, and interval coverage/width. State whether your scores are marginal or joint. Vary a prior assumption and the missing-data eligibility rule. Keep model selection separate from claims about ecological mechanisms; explain why choosing a model after examining 2009 would require fresh validation.

## Deliverable

Submit a reproducible script or notebook, a table of results, a predictive figure, and a stakeholder memo of no more than 250 words. Identify one concrete model weakness and a justified next data collection or modelling step. Distinguish calculation accuracy from scientific adequacy.

After your attempt, compare the [worked report](./case-01_penguins_solution.md), [reference script](../../downloads/bayesian/labs/19_case_penguins.py), and notebook. Those three resources and their generated results contain answers and are excluded from ordinary tutor retrieval. Reproduction is offline in the pinned environment.
