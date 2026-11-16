# Case 03 — Answer-free analysis worksheet

**C03.starter · learner material.** Read the [brief](./case-03_air_quality.md), complete
its prerequisites, and begin in a blank script before opening reference assets.
This worksheet contains no fitted results or preferred model conclusion.

## 1. Record the target and exposure

Write one sentence naming the unit predicted, reference year, information
available and population to which you will generalize. List what your answer
cannot establish. Record any prior access to final concentrations, reference
code, figures or scores, with date and assistance received. If exposed, label
this attempt development; do not manufacture a fresh holdout by hiding rows
you have already seen.

## 2. Audit only authorized data

Record archive/derived hashes and attribution. Confirm site/date uniqueness and
the 366-day grid. Explain `n_pair`, paired-hour means, concentration/wind units,
`NA`, observed zeros, the 18-hour rule and 24-hour alternative. Tabulate missing
and ineligible training rows by site/month. Determine whether the proposed
likelihood supports every eligible training outcome. Do not access Dongsi or
Guanyuan concentrations. Keep transformations restricted to base-training rows.

## 3. Explain the temporal model before fitting

First complete the brief’s [worked synthetic bridge and changed-givens checkpoint](./case-03_air_quality.md#worked-synthetic-bridge-from-a-filter-to-learned-scales). Its finite-prior normalization and continuous bounded quadrature prepare the independent checks in step 4. Then draw the C03.T1 uncertainty diagram. Derive stationary initial variance and the
transition variance after a missing day. Describe the difference between a
filter, smoother and joint state-path simulation. Explain how you will retain
one station effect across dates and one shared day process across sites.

Specify regression, annual pair, station covariance, state and residual priors.
Which scales have independent priors? Which are induced? Show prior implications
on log and physical scales without assuming physical mixture moments exist.
Explain why zero-mean priors do not imply realized sample orthogonality.

## 4. Verify computation independently

Build a small dense Gaussian fixture with missing calendar observations. Include
all normalizers and initial-state uncertainty. Compare likelihood, conditional
state moments and gradients. Create a separate bounded unknown-scale integration
reference and specify refinement and MCSE tolerances before running the sampler.
State which model this fixture can and cannot validate.

## 5. Develop on training sites

Use four chains, 1,000 warmup and 1,000 retained draws for the initial benchmark.
Record settings, seed, versions, hardware, time scopes, peak RAM and retained
bytes. Preserve every failed attempt. Write a ledger with observation, diagnosis,
intervention, changed assumptions and reevaluation. Check stationwise temporal
dependence, dispersion and skewness. Inspect intercept/season/state confounding
and training-only persistence, amplitude and seasonal-prior sensitivity.

## 6. Freeze every final comparison

Complete this table before outcome access; fill all blank specifications in
your own plan and hash the result.

| Role | Eligibility | Station effects | Numeric prior/specification | Seed | Diagnostic/precision status |
|---|---|---|---|---|---|
| Pooled base | ≥18 paired hours | None | To specify | To specify | To measure |
| Hierarchical base | ≥18 paired hours | Correlated intercept/slope | To specify | To specify | To measure |
| Covariance alternative | ≥18 paired hours | Same hierarchy | Change covariance prior only | To specify | To measure |
| Completeness alternative | 24 paired hours | Same hierarchy | Same base priors/transforms | To specify | To measure |

Declare mixture-median prediction, .05/.95 quantiles, empirical MAE/RMSE of
that median, marginal log density, coverage and width. Specify numerical units,
CDF inversion, MCSE rules, native/common row sets and failure policy. Protect
all final outcomes until every model and predictive distribution is sealed.
If any required prescore gate fails, record the reason and keep them sealed.

## 7. Evaluate once and communicate

Record the first outcome-access time and all prediction hashes. Show every
frozen model for each final site, native and common denominators, and paired
differences on identical keys. Distinguish predictive spread, numerical error,
model uncertainty and uncertainty about transport to other sites. Explain why
days are dependent and why two sites cannot certify general calibration.

Use the brief's rubric to review the memo and evidence. Identify your strongest
remaining limitation and what genuinely new validation would be needed for
a revised model. Keep reference access and assistance in the final record.
