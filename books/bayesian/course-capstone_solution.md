# Capstone reference report

This exemplar analyses the included synthetic data. Its rounded values come from [Lab 12](../../downloads/bayesian/labs/12_capstone.py) with seed 1212 and 80,000 independent joint draws, recorded in [12_capstone.json](../../downloads/bayesian/artifacts/results/12_capstone.json). Small platform differences in simulation are expected. It demonstrates a complete transparent analysis; it does not establish that its modelling assumptions are optimal for a real service.

## Decision memo

Adopt design B for the next 10,000 visits, equally distributed across the eight simulated centres, under the stated risk-neutral utility. The estimated absolute completion-rate improvement is **8.8 percentage points**, with a central 90% posterior interval of **4.1–13.5 points**. At 5 utility units per extra completion and a rollout cost of 1,000 units, expected net benefit is approximately **3,392 units**. The model assigns about **99.2% posterior probability that conditional expected incremental value is positive**. This is uncertainty about expected value at fixed completion probabilities, not a 99.2% predictive probability of positive realised rollout gain.

More concentrated and lower-completion priors reduce the estimated improvement to about 8.0 points while preserving the action. Increasing rollout cost to 5,000 reverses the expected-utility decision. The conclusion assumes stable centre-specific probabilities and the specified population mix. This is a synthetic demonstration; it supplies no empirical evidence about real onboarding services or unobserved centres.

## Target, data and assumptions

Each observation is an aggregate binomial count for one centre and arm. There are eight centres and sixteen centre-arm cells. Within each cell, visits are modelled as conditionally independent with a common completion probability. The primary target averages centre differences equally. Training allocation gives larger centres more observations, but that does not change the specified future-population weights.

The generator randomises arms within centres and uses a common log-odds treatment shift with heterogeneous baselines. The analysis does not use those hidden probabilities. Within this simulation a causal interpretation also presumes well-defined treatment, consistent measurement, and no interference. Actual randomised data would require checking design implementation and attrition as well.

Training counts determine the posterior. Holdout outcomes are consulted only for the final check; they are not incorporated into the reported primary posterior. The repository includes a data dictionary and deterministic generator so provenance and row meanings are auditable.

## Models and prior predictions

The pooled baseline uses one probability per arm with independent Beta(1,1) priors. It assumes away centre-specific rates. The primary model gives each centre-arm cell its own Beta(1,1) prior and binomial likelihood:

$$\theta_{ja}\mid y\sim\operatorname{Beta}(1+y_{ja},1+n_{ja}-y_{ja}).$$

The primary model preserves observed group structure without estimating a population distribution of centres. It is intentionally simple and uses no information sharing between cells. A hierarchical model could improve small-centre estimates, but its exchangeability and treatment-variation assumptions would need justification and checking.

The uniform prior permits a broad range of individual centre probabilities. Its prior predictive distribution for a single cell's completion count is uniform from zero to that cell's trial count. Across sixteen independent cells, averaging narrows the total completion fraction: the simulated central 90% range is approximately 0.374–0.625. This illustrates why checking only the overall average can conceal broad assumptions about individual centres.

Two planned sensitivity priors are Beta(4,4), concentrating more around 0.5, and Beta(2,6), favouring lower completion. They are illustrative defensible alternatives for the synthetic exercise, not elicited expert beliefs. All models use proper priors.

## Computation and inference

Draw each cell probability independently from its exact posterior. For each joint draw, calculate the average of the eight B–A differences. The saved simulation estimates the posterior mean as about 0.08784 and central 90% interval [0.04095,0.13457]. The probability of positive improvement is about 0.99899. The pooled baseline mean is about 0.08293 with interval [0.03600,0.12975]; numerical similarity does not establish the common-rate assumption.

For an independent beta model, an analytic check is available. If $m_k=a_k/(a_k+b_k)$ and $v_k=a_kb_k/[(a_k+b_k)^2(a_k+b_k+1)]$, then

$$E[\Delta]=\frac18\sum_j(m_{jB}-m_{jA}),\qquad
\operatorname{Var}(\Delta)=\frac1{64}\sum_j(v_{jB}+v_{jA}).$$

The exact primary mean is 0.08790924283813503 and SD is 0.028466857776079574, implying exact expected incremental value 3,395.4621419067516 units. The saved simulated value 3,391.972137663567 differs by less than one reported MCSE. These are analytic references and previously saved simulation estimates, respectively; no new Lab 12 run is claimed here. The numerical tests compare sampled summaries with these targets. MCSE for expected net utility is about 5.04 utility units, equivalent to about 0.000101 in improvement probability units. This is small relative to the thousands of units separating the expected utilities. It does not represent uncertainty about the economic value assumption. R-hat and divergences are inapplicable because these are independent exact draws, not MCMC.

## Criticism and independent prediction

The posterior predictive check compares the range across centre completion rates, separately for each arm. The fractions of replicated ranges exceeding the observed range are about 0.56 and 0.63. The check reveals no strong range discrepancy, but this is a flexible cell-specific model and an in-sample check; passing it is limited evidence.

For holdout counts, each cell has a beta-binomial posterior predictive distribution. The sum of marginal log predictive probabilities for the sixteen held-out counts is about −41.42, compared with −61.59 for the preplanned pooled baseline on the same cells. The primary model scores better on this small holdout. The pooled model induces dependence among holdout cells within an arm, so this sum of marginal scores must not be described as its joint log predictive probability. These scores are tied to the count representation and batch sizes; neither is an absolute pass mark. Fifteen of sixteen counts lie within the primary model's central 90% predictive intervals. With only sixteen discrete observations, coverage is noisy and cannot establish calibrated performance generally.

Further checks could inspect cell-specific holdout errors, calibration across additional future batches, treatment heterogeneity, and drift. An unseen-centre target would require a model for new centres and corresponding group-level validation, which this primary analysis does not supply.

## Utility and sensitivity

For each posterior draw, conditional expected incremental value is $V(\theta)=50000\Delta-1000$. Positive expected value requires improvement above 0.02. The saved estimate of the posterior probability of crossing this threshold is 0.9916, distinct both from the probability of any positive improvement and from the probability of positive realised rollout gain. Under risk neutrality the action compares $E[V(\theta)\mid y]$ with zero. Realised consequences additionally require future count draws under specified arm allocation and dependence assumptions; the existing `prob_profitable` result key retains its original calculation and denotes $P(V(\theta)>0\mid y)$, not realised profit probability.

The following table preserves the saved simulation estimates; differences between them should be assessed relative to Monte Carlo error.

| Prior/model | Mean improvement | 90% interval | Expected net utility | Action at cost 1,000 |
|---|---:|---|---:|---|
| Independent Beta(1,1) | 0.0878 | [0.0409, 0.1346] | 3,392 | B |
| Independent Beta(4,4) | 0.0802 | [0.0349, 0.1253] | 3,012 | B |
| Independent Beta(2,6) | 0.0805 | [0.0355, 0.1254] | 3,025 | B |
| Pooled Beta(1,1) baseline | 0.0829 | [0.0360, 0.1297] | About 3,147 | B |

Beta(4,4) and Beta(2,6) have the same total prior shape 8. Within each centre the two arms have equal training sample sizes, so their posterior mean contrast is $(y_{jB}-y_{jA})/(n_j+8)$ under either prior: the shared prior success shape cancels. Both exact mean contrasts are 0.080337572328579, giving exact expected incremental value 3,016.878616428949 units. Their posterior variances and tail probabilities can differ. The saved means 0.0802 and 0.0805 differ through Monte Carlo variation, not a different exact mean contrast.

Under the primary model, expected opportunity loss from adopting B is about 4.07 units; from keeping A it is about 3,396.05. Perfect information about the completion probabilities would let the service avoid the relatively rare states with negative conditional expected incremental value, yielding EVPI about 4.07 units for this particular decision. This low value reflects the model's preference for B under the given cost; it does not imply there is little value in learning about model failures or other future decisions.

At rollout cost 5,000, the saved simulated expected incremental value becomes about −608 (analytic value about −605), so the preferred action becomes A. The break-even rollout cost is $50000E[\Delta]$, about 4,392 from the saved simulation or 4,395 analytically. Changing population weights also changes the estimand: training-size weights yield an estimated improvement of about 0.08091 instead of 0.08784. Use those weights only if that mixture represents the intended future population; it must not replace the equal-centre primary result silently.

## Limitations and reproducibility

The primary analysis assumes stable probabilities, independent visits within cells, specified utilities, equal future centre weights, and no model uncertainty outside the sensitivity choices. Sixteen held-out counts provide limited evaluation. Complete no-pooling sacrifices shared information and cannot predict an unseen centre. All data are generated; realism and empirical applicability require a separate study.

Reproduce with `python labs/12_capstone.py` in the locked environment from the repository root. The script saves JSON summaries and an SVG posterior plot; the notebook version includes the same code and learner investigation. Mathematical tests check the exact moments and utility identities. The validation record documents the complete execution checks.
