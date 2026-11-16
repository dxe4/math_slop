# Continuation questions

These assessments are optional. Save an attempt before requesting hints or consulting worked solutions. Each carries four optional marks without changing core grades.

<!-- begin:adv.outcome_regression.1 -->

## Adv outcome regression 1 {#adv-outcome-regression-1}

**Identify a nominal model.** A three-category model has logits (0, log 3, log 2). Calculate its probabilities and prove that adding the same constant to all logits changes none of them. If ready is replaced by service as the baseline, explain why assigning fresh independent Normal priors to the new coefficients need not preserve the original prior model.

<!-- end:adv.outcome_regression.1 -->

<!-- begin:adv.outcome_regression.2 -->

## Adv outcome regression 2 {#adv.outcome_regression.2}

**Calculate ordered probabilities.** Use cumulative logits c_k − 0.7x with thresholds (−0.8, 0.6). Find the category probabilities at x=0 and x=1. Calculate the common cumulative-odds multiplier and explain why it does not mean a constant change in each category probability.

<!-- end:adv.outcome_regression.2 -->

<!-- begin:adv.outcome_regression.3 -->

## Adv outcome regression 3 {#adv.outcome_regression.3}

**Diagnose identification and ordering.** An analyst includes an unrestricted intercept in the linear predictor and two unrestricted ordered cutpoints. They claim ordered labels establish proportional odds and that excellent R-hat validates the model. Diagnose the claims, state an identifiable proper-prior alternative, and propose a predictive criticism.

<!-- end:adv.outcome_regression.3 -->

<!-- begin:adv.study_design.1 -->

## Adv study design 1 {#adv-study-design-1}

**Separate planning from analysis.** A prospective evaluation uses design prior Beta(3,2) and analysis prior Beta(1,1). Explain which prior weights future datasets, which supplies a posterior approval probability, and how each updates after s successes in n tests. Why would multiplying both priors into the analysis be a mistake?

<!-- end:adv.study_design.1 -->

<!-- begin:adv.study_design.2 -->

## Adv study design 2 {#adv.study_design.2}

**Enumerate a new capped policy.** Use uniform design and analysis priors, reliability threshold 0.5, looks after 2 and 5 tests, success threshold 0.85, and early futility threshold 0.15. At the cap, reject unless successful. Give every terminal (n,s) state and its probability, assurance, and expected sample size. Check independently by trial recursion or rational ordered paths.

<!-- end:adv.study_design.2 -->

<!-- begin:adv.study_design.3 -->

## Adv study design 3 {#adv.study_design.3}

**Assess an error-rate claim.** A team says, “An approval threshold of 0.95 guarantees at most 5% false approvals, even if we add extra looks.” Assess the claim. Specify what calculation would actually evaluate false approval and what must be fixed before doing it.

<!-- end:adv.study_design.3 -->

<!-- begin:adv.survival.1 -->

## Adv survival 1 {#adv-survival-1}

**Derive a censored exponential likelihood.** Failures occur at three and seven weeks, while a third belt is right-censored at six weeks. Write the likelihood under exponential rate theta and derive the posterior from a Gamma(shape 3, rate 8 weeks) prior. State units and explain the censored record's contribution.

<!-- end:adv.survival.1 -->

<!-- begin:adv.survival.2 -->

## Adv survival 2 {#adv.survival.2}

**Compute an interval event probability.** A Weibull lifetime has shape 1.5 and scale ten weeks. Calculate survival to eight weeks and the probability of failure during weeks eight–twelve conditional on survival to eight. Explain why the latter is neither a density nor the hazard at week eight.

<!-- end:adv.survival.2 -->

<!-- begin:adv.survival.3 -->

## Adv survival 3 {#adv.survival.3}

**Critique informative withdrawal.** A belt is withdrawn after an unrecorded vibration alarm suggesting imminent failure. An analyst treats this as independent administrative censoring and proposes using more posterior draws to make the conclusion reliable. Critique the analysis and propose a defensible response.

<!-- end:adv.survival.3 -->

<!-- begin:adv.gp_hyperparameters.1 -->

## Adv gp hyperparameters 1 {#adv-gp-hyperparameters-1}

Derive total covariance for a two-component predictive mixture with weights w and 1−w, means m1,m2 and covariance matrices V1,V2. Evaluate the scalar case w=.4, means −2 and 1, variances .5 and 2. Explain why a plug-in covariance can differ.

<!-- end:adv.gp_hyperparameters.1 -->

<!-- begin:adv.gp_hyperparameters.2 -->

## Adv gp hyperparameters 2 {#adv.gp_hyperparameters.2}

Find the 90th percentile of .3N(−1,.5²)+.7N(1,1). Give a bracket, a root and its substituted CDF. Compare with the weighted average of component 90th percentiles and explain the difference.

<!-- end:adv.gp_hyperparameters.2 -->

<!-- begin:adv.gp_hyperparameters.3 -->

## Adv gp hyperparameters 3 {#adv.gp_hyperparameters.3}

A program draws a fresh length scale at each query, then samples each GP marginal independently. Diagnose the two lost dependencies, repair the hierarchy and propose a covariance-sensitive check.

<!-- end:adv.gp_hyperparameters.3 -->

<!-- begin:adv.predictive_combination.1 -->

## Adv predictive combination 1 {#adv-predictive-combination-1}

Optimize the stacking weight on probability columns (.8,.2,.6) and(.3,.7,.4). Give the objective, an interior or boundary check, and a numerical independent check. Explain why averaging log probabilities is different.

<!-- end:adv.predictive_combination.1 -->

<!-- begin:adv.predictive_combination.2 -->

## Adv predictive combination 2 {#adv.predictive_combination.2}

Find leakage in a pipeline that standardizes all rows and estimates each held-out group mean using its outcomes before cross-validation. Repair the workflow for prediction in entirely new groups, including the final evaluation boundary.

<!-- end:adv.predictive_combination.2 -->

<!-- begin:adv.predictive_combination.3 -->

## Adv predictive combination 3 {#adv.predictive_combination.3}

A stack assigns weight .9 to a complex component but its outer mean log score is below the simpler component. What does the weight mean, what conclusion is justified, and how should an outer-driven revision be evaluated?

<!-- end:adv.predictive_combination.3 -->

<!-- begin:adv.variational_fit.1 -->

## Adv variational fit 1 {#adv-variational-fit-1}

For a zero-mean Gaussian with covariance [[1,−.6],[−.6,1]], derive the reverse-KL mean-field variances. Compare exact and approximate variances of the sum and difference. Explain why “underestimates uncertainty” is incomplete.

<!-- end:adv.variational_fit.1 -->

<!-- begin:adv.variational_fit.2 -->

## Adv variational fit 2 {#adv.variational_fit.2}

Under a joint Gaussian approximation for (a,b), derive E[(y−a−x exp(b))²] in terms of means, variances and covariance. For y=1, x=2, means (0,0), variances (.25,.16) and covariance −.1, evaluate this expectation and diagnose the error from dropping covariance. State how it enters the sensor-model ELBO and give one independent implementation check.

<!-- end:adv.variational_fit.2 -->

<!-- begin:adv.variational_fit.3 -->

## Adv variational fit 3 {#adv.variational_fit.3}

An ELBO trace stabilizes but an independently refined posterior reference gives a materially different decision tail. Diagnose optimizer error, family error and scientific model error; propose the next checks without claiming that more draws solve all three.

<!-- end:adv.variational_fit.3 -->

<!-- begin:adv.splines.1 -->

## Adv splines 1 {#adv-splines-1}

At one input, three active spline basis values are(.1,.6,.3) and their coefficients are(2,−.5,1). Calculate the prediction. Explain linearity in coefficients versus nonlinearity in the predictor and why this distinction helps Gaussian fitting.

<!-- end:adv.splines.1 -->

<!-- begin:adv.splines.2 -->

## Adv splines 2 {#adv.splines.2}

A proposed spline prior is proportional only to exp(−cᵀRc/(2tau²)), where R has two zero eigenvalues. Explain whether it is proper, identify the derivative-penalty nullspace, and give an explicit proper repair.

<!-- end:adv.splines.2 -->

<!-- begin:adv.splines.3 -->

## Adv splines 3 {#adv.splines.3}

Repair an additive model with an intercept and two unconstrained smooths whose knots were chosen using all outcomes, including evaluation observations. Explain learned smoothing, boundary behavior and how to compare with a linear baseline.

<!-- end:adv.splines.3 -->
