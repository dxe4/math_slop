
# Boundary Map: What This Book Does Not Prove

This chapter is a map of limitations. Every theorem in this book assumes conditions, and every estimator targets a specific parameter under specific circumstances. This chapter makes those boundaries explicit, serving as a reference for honest reporting and a guard against overclaiming.

## Design-based inference

A design-unbiased estimator corrects for the randomness introduced by the sampling mechanism. It does *not* correct for:

- **Frame undercoverage:** If the sampling frame omits part of the target population, no design-unbiased estimator based on that frame can recover the missing units.
- **Nonresponse:** If respondents differ systematically from nonrespondents, design unbiasedness does not apply to the nonrespondents. Response models or weighting adjustments require additional assumptions.
- **Measurement error:** If the recorded values $y_{i}$ differ from the true values, the HT estimator estimates the total of the recorded values, not the true values.
- **Causal interpretation:** A design-based estimate of a population mean difference is a descriptive quantity. It does not identify a causal effect without additional structural assumptions.

## Likelihood and model-based inference

A correctly specified likelihood yields efficient estimators and valid tests under regularity conditions. It does *not* imply:

- **Causal identification:** A GLM coefficient measures association conditional on covariates. Causal interpretation requires ignorability, positivity, and SUTVA, none of which follow from likelihood regularity.
- **Robustness to misspecification:** Consistency for the correctly specified model parameter requires identification and regularity conditions as well as a true distribution in the model. Under misspecification and suitable convergence conditions, the MLE instead targets a Kullback–Leibler projection, which may not answer the scientific question.
- **Validity at boundaries:** Standard likelihood theory assumes interior parameters. At boundaries (variance components at zero, mixture weights at zero or one), the asymptotic distribution is nonstandard.

## Sandwich variance and robust standard errors

The sandwich variance formula $A^{-1}BA^{-T}$ gives valid standard errors when the estimating equation is unbiased but the working variance model is wrong. It does *not*:

- **Repair a wrong mean model:** If $\mathbb{E}[\psi(Z,\theta_{0})]\neq 0$, the estimator is inconsistent, and no variance formula helps.
- **Fix few clusters:** No fixed cluster-count cutoff guarantees calibration. The asymptotic justification requires an increasing number of independent clusters together with suitable moments and non-dominance; a few or very unequal clusters can undermine the approximation.
- **Account for small-sample bias:** Sandwich variances can be more variable than model-based variances in small samples. Bias corrections exist but are not automatic.

## Rank and permutation procedures

Rank tests are distribution-free under their stated assumptions. They are *not* assumption-free:

- **Exchangeability is the key hypothesis:** A two-sample permutation test is exact when labels are exchangeable under the null. Equality of means alone does not imply exchangeability.
- **Ties change the null distribution:** For discrete data, ranks are not uniformly distributed, and standard tables do not apply.
- **Dependence invalidates the theory:** The Dvoretzky–Kiefer–Wolfowitz bound and rank null distributions assume iid sampling. Time or cluster dependence requires modified theory.

## Dependent processes

A stationary fit describes the observed data. It does *not* establish:

- **Future stationarity:** A model fit to historical data may fail to predict future regimes, especially after structural breaks.
- **Causal interpretation:** Time-series associations do not imply causation. Granger causality is predictive, not structural.
- **Separate identifiability:** Under fixed-domain spatial asymptotics, some covariance parameters are not separately estimable. Only microergodic combinations can be consistently estimated.

## Survival analysis

A Kaplan–Meier curve estimates survival under independent censoring. It does *not*:

- **Identify survival under informative censoring:** If censoring is related to prognosis, Kaplan–Meier is biased.
- **Prove proportional hazards:** The Cox model assumes proportional hazards. Schoenfeld residuals and time-varying coefficients can diagnose violation, but the model itself does not test it.
- **Handle immortal time bias:** Time-dependent covariates must be predictable. Using future information in the risk set creates bias.

## Spatial prediction

A kriging surface interpolates under a covariance model. It does *not*:

- **Prove the covariance model:** The fitted covariance is a working assumption. Cross-validation and held-out diagnostics are needed.
- **Identify causal spatial effects:** Spatial correlation does not imply causation. Confounding by unmeasured spatially structured variables is always possible.
- **Provide valid uncertainty under estimated covariance:** A plug-in conditional kriging variance treats covariance parameters as fixed and can understate predictive uncertainty, but it need not be smaller than the parameter-integrated predictive variance. Parameter uncertainty needs an explicit model and a justified integration or adjustment; the fixed-known-covariance theorem alone does not supply it.

## Asymptotic approximations

An asymptotic theorem describes behavior as $n\to\infty$. It does *not*:

- **Guarantee finite-sample accuracy:** A $\sqrt{n}$-consistent estimator may have large bias at $n=50$. Simulation studies and higher-order expansions can diagnose this.
- **Apply to all sample sizes:** Under appropriate moment, smoothness and nonlattice conditions, Edgeworth theory can quantify approximation error; no universal rate is asserted for every asymptotically normal estimator.
- **Replace careful diagnostics:** Residual plots, influence diagnostics, and sensitivity analyses are necessary regardless of asymptotic guarantees.

## Proper scores and decision theory

A proper scoring rule encourages honest forecasts. It does *not*:

- **Reveal all failures:** A scalar score does not reveal subgroup or tail failures. A well-calibrated forecast on average may be poorly calibrated in subpopulations.
- **Replace domain knowledge:** Score optimization finds the best forecast within a model class. It does not validate the model class itself.
- **Apply without survey weights:** When evaluation sampling differs from the target population, a valid weighting or standardization argument is needed.

## Summary table

| Procedure | What it does | What it does not do |
|-----------|--------------|---------------------|
| Design-unbiased estimation | Corrects for sampling randomness | Corrects for nonresponse, measurement error, or causality |
| Likelihood inference | Efficient estimation under correct model | Survives misspecification or boundary parameters |
| Sandwich variance | Robust variance under working-variance misspecification for a valid estimating target | Repairs a wrong estimating target or few clusters |
| Rank tests | Distribution-free under exchangeability | Works under dependence or heteroskedasticity |
| Stationary time-series fit | Describes historical dependence | Predicts future stationarity or identifies causality |
| Kaplan–Meier | Estimates survival under independent censoring | Works under informative censoring |
| Kriging | Optimal prediction under covariance model | Proves the model or identifies causal effects |
| Asymptotic normality | Approximates large-sample distribution | Guarantees small-sample accuracy |

## Forward and backward connections

This chapter summarized the boundaries of every major technique in the book. It connects backward to *Multiplicity and Post-Selection Scope* and forward to *Functional Delta Method and Bootstrap Boundaries*, where we examine the asymptotic tools that underpin many of the approximations whose limitations were mapped here. The current reader guide links the nineteen main chapters and their declared prerequisite routes.
