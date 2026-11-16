# Investigations to work through

Choose a question, write a prediction, and then work through its derivation and experiment. Each investigation ends with a changed problem and a worked answer. Follow the chapter links below to begin; the explanations and Python references are available offline.

## Can a correct mean hide an incorrect sampler?

[Audit proposal correction in Chapter 9](09-metropolis-hastings.md#sec-991-proposal-correction-a-mean-that-hides-the-error). Compare two finite samplers whose stationary means agree, inspect their boundary probabilities, and transfer the balance calculation to a different graph in Exercise 8. Start after the Metropolis–Hastings acceptance derivation.

## Does negative correlation improve every estimate?

[Compare two estimands in Chapter 13's diagnostic laboratory](13-mc-error.md#sec-1310-laboratory-and-reproducible-calculation). Predict what negative correlation does to the mean and the second moment before switching the estimand. [Chapter 14](14-diagnostics.md#sec-147-precision-belongs-to-an-estimand) connects the comparison to reporting precision. Start after stationary covariance and ESS.

## What changes when a probability has a random denominator?

[Work through the conditional-probability investigation](13-mc-error.md#sec-1383-a-conditional-probability-has-a-random-denominator). Keep numerator–denominator covariance, account for runs with no eligible observations, and change the outcome dependence in Exercise 8. The chapter's Python example supplies exact finite-chain references.

## Can independent draws give slow median convergence?

[Derive a nonregular median reference in Chapter 14](14-diagnostics.md#worked-nonregular-benchmark-a-flat-cdf-at-the-median). Count the exact order-statistic event, derive its variance, and distinguish a distributional limit from a variance-supported draw budget. Exercise 7 changes the local CDF flatness and asks for a finite coverage calculation. Start after CDFs, binomial probabilities and the regular quantile-precision budget; the exact reference concerns independent draws of odd sample size.

## Can perfect HMC acceptance coexist with no movement?

[Investigate the oscillator and resonance in Chapter 20](20-hmc.md#sec-207-worked-example-oscillator-acceptance-and-resonance), then [change the distribution of integration times](20-hmc.md#sec-2091-what-random-integration-times-do-to-two-estimands). Compare the position and its square; Exercise 7 changes the timing law. Distinguish exact-flow resonance from the numerical clock before using the fixed-length browser lab.

## Can unobserved modes slow down scale inference?

[Derive the exact scale-mixing reference in Chapter 24](24-function-space.md#sec-2461-worked-scale-hierarchy-unchanged-target-slower-gibbs). Keep the scale posterior fixed while increasing latent resolution, derive stationary covariance and finite-window mean variance, then condition on an exact observed coefficient in Exercise 6. Distinguish this full Gibbs benchmark from fixed-covariance pCN and noncenter only the remaining free modes. Start after Gaussian conditioning and stationary covariance sums.

## Why can retrying a filter change the posterior?

[Audit positive-only proposed-filter retries in Chapter 28](28-particle-mcmc.md#sec-2881-retrying-a-proposed-filter-until-it-is-positive-changes-the-target). Derive the altered generator and stationary masses, distinguish initialization from every-proposal retrying, and change the model in Exercise 9. Start after pseudo-marginal state retention.

## What can maximal particle weight ESS conceal?

[Trace actual ancestors in Chapter 28](28-particle-mcmc.md#sec-2841-perfect-evidence-maximal-weight-ess-and-growing-estimation-error). Predict the effect of neutral resampling, inspect parent links, and compare outcome refresh at the same seed. Keep evidence, weight ESS, surviving roots, and conditional and unconditional variance separate. Exercise 4 changes the Bernoulli target.

## Which null model does a density ratio compare?

[Derive the conditional-prior ordinate identity in Chapter 30](30-reversible-jump.md#sec-3061-which-null-model-does-an-ordinate-ratio-compare). Keep the stipulated null nuisance prior separate from the alternative's conditional prior at the tested point, and average the correction under the conditional nuisance posterior. Then [change the nuisance dependence and model prior odds in Exercise 1](30-reversible-jump.md#exercise-1-a-missing-constant). Start after Gaussian conditioning and model evidence; a precise density estimate does not repair a comparison of different models.

## Which variance does an unbiased correction estimate?

[Separate target variance from correction noise in Chapter 31](31-coupling.md#sec-3191-target-variance-is-not-the-variance-of-unbiased-estimates). Estimate both target moments, combine independent completed copies, and explain why squaring a mean correction supplies a different expectation. Exercise 2 changes the chain and derives the repaired estimator's uncertainty. Start after the lagged correction; keep negative outputs and quantify Monte Carlo error across disjoint pairs.

## How can a tiny transition error produce a large bias?

[Study approximation-error amplification in Chapter 34](34-scalable.md#sec-34101-small-transition-errors-can-be-amplified-by-slow-mixing). Compute two exact finite transition laws, prove a bound using total-variation contraction, and change the target and tolerance in Exercise 3. Start after finite-state invariance and total variation; a contraction coefficient is a different object from a general spectral gap.

## Can a deadline change what a correct chain reports?

[Define the computation clock in Chapter 35](35-parallel.md#worked-computation-clock-which-state-is-reported). Keep the completed state, reported old state and pending next state distinct, and derive an exact finite phase law. Exercise 7 changes which state determines the computation cost and tests a fresh job boundary. Start after finite-state invariance; stationary clock probabilities and finite-deadline probabilities require different initialization statements.

## Can valid pair probabilities give an invalid grouping?

[Turn co-clustering probabilities into a partition decision in Chapter 38](38-mixtures.md#sec-3861-worked-decision-pair-probabilities-need-a-valid-partition). Check transitivity, compare all valid actions under an explicit pair-error loss, and explain why closing a majority relation need not minimize risk. Then [change the posterior in Exercise 3](38-mixtures.md#sec-3-prove-invariance-under-relabeling) and distinguish the MAP partition from a loss-optimal action. Start after co-clustering probabilities; the stipulated three-item laws are separate from the fixed-two-component mixture example.

## Can correct pointwise predictions hide wrong joint events?

[Calculate spatial exceedance events in Chapter 40](40-spatial.md#sec-40101-pointwise-probabilities-do-not-determine-simultaneous-exceedance). Keep whole prediction pairs, derive the Gaussian wedge probability, and compute separate functions for a count, both exceedances and any exceedance. Exercise 6 changes the dependence and preserves the prediction sites, threshold and event when comparing meshes. Start after multivariate Gaussian predictions; within-draw dependence is different from MCMC autocorrelation.

## Can identical censored records identify a lifetime distribution?

[Derive observational equivalence in Chapter 43](43-survival.md#sec-4321-worked-observational-equivalence-same-records-different-lifetimes). Two event/censoring models give every recorded time and label the same law while predicting different lifetimes. Integrate the missing branch, then change the prior and distinguish predictions for a new person, the next recorded minimum and someone already censored in Exercise 6. Start after censoring likelihoods; extra censoring-design information changes the inference problem.

## Can a summary preserve parameters but change model weights?

[Compare exact model probabilities in Chapter 46](46-likelihood-free.md#sec-4662-modelwise-sufficient-summaries-can-lose-model-probabilities). Keep ordered-data and summary-event masses separate, check each conditional parameter posterior, and derive a jointly sufficient summary for the stated model pair. Exercise 7 changes the sample size and model prior odds. Start after Bayes factors and ABC's summary target.

## Working without the browser experiments

Each linked chapter contains the mathematical reference and a runnable standard-library Python example. The complete PDF includes the derivations and worked answers. Browser experiments show particular realizations; the exact calculations describe the stated models and do not establish that an arbitrary sampler has converged.

## Reading, printing and the companion references

Open the book's HTML home page to use chapter search, reading routes, mathematical typesetting, themes, the glossary and bibliography. The reader and browser experiments are bundled locally and also work offline. Each chapter provides its own worked solutions and explains the scope of its laboratory.

The complete HTML download collects the text, figures, worked answers, glossary and bibliography. Use the browser's Print or Save as PDF command for a printable copy. The existing PDF and offline ZIP contain an earlier text; the exact calibration example and changed exercise added to Chapter 17 on 31 October 2026 are available in the current online and browser-print text. Extract the ZIP and open `mcmc-book/index.html` to read that portable edition.

The 48 companion programs use the Python standard library. From the MCMC module directory, run a reference such as `python3 examples/ch20.py`. The examples have explicit seeds, bounded work and numerical references. Changing a seed can change a finite-run result; an accurate finite experiment does not establish general convergence.

The [bibliography](bibliography.md) lists the primary references. Additional analytic examples, solution outlines, model qualifications and figure conventions are collected in mathematical notes. The book's reading paths retain the eight-part, 48-chapter structure.
