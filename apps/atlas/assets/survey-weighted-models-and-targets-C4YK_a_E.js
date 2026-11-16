var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: survey-weighted-models-and-targets
title: "Survey-weighted Models and Targets"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Survey-weighted Models and Targets

Regression with survey data raises two distinct goals: finite-population description and superpopulation inference. This chapter clarifies the distinction, develops the pseudo-likelihood approach, and discusses when weighting is necessary and when it can be avoided.

## Two targets of inference

### Finite-population coefficient

A *finite-population descriptive coefficient* minimizes a declared loss over the actual population:

$$\\beta_{N,L}=\\arg\\min_{\\beta}\\sum_{i=1}^{N}L(y_i,x_i;\\beta).$$

For least squares, $L=(y_i-\\mu(x_i;\\beta))^2$. For a pseudo-likelihood fit, $L=-\\log f(y_i\\mid x_i;\\beta)$, so the population target solves $\\sum_i\\dot\\ell_i(\\beta)=0$. These losses need not have the same optimizer for a nonlinear model such as logistic regression. The chosen coefficient is a property of the fixed finite population, not a model parameter, and changes if the population or loss changes.

### Superpopulation parameter

A *superpopulation parameter* describes a stochastic model from which population units are imagined drawn:

$$\\beta_{0}=\\arg\\min_{\\beta}\\mathbb{E}[(Y-\\mu(X;\\beta))^{2}].$$

This is a fixed feature of a hypothetical data-generating process.

When selection is independent of the outcome conditional on included covariates, a correctly specified conditional model can retain its parameter in the selected distribution. Selection depending on the outcome even after this conditioning generally changes that distribution. These are assumptions about selection and the target, not consequences of including a variable name in a regression formula.

## Pseudo-likelihood estimation

The *pseudo-log-likelihood* uses survey weights:

$$\\ell_{w}(\\beta)=\\sum_{i\\in s}w_{i}\\log f(y_{i}\\mid x_{i};\\beta),$$

where $w_{i}$ are survey weights, often normalised for numerical convention. Its optimizer solves a weighted score equation:

$$\\sum_{i\\in s}w_{i}\\frac{\\partial\\log f(y_{i}\\mid x_{i};\\beta)}{\\partial\\beta}=0.$$

### Variance estimation

Treating $w_{i}$ as frequency replication in ordinary likelihood software generally gives the wrong variance because it omits sampling stages and weight estimation. Design-based sandwich or replicate variance uses PSU-level score totals:

$$\\widehat{\\operatorname{Var}}(\\hat{\\beta})=\\Bigl(\\sum_{i\\in s}w_{i}\\ddot{\\ell}_{i}\\Bigr)^{-1}\\widehat{\\operatorname{Var}}\\Bigl(\\sum_{i\\in s}w_{i}\\dot{\\ell}_{i}\\Bigr)\\Bigl(\\sum_{i\\in s}w_{i}\\ddot{\\ell}_{i}\\Bigr)^{-1}.$$

The middle term is estimated from the design: for stratified cluster sampling, it is the variance of cluster totals within strata.

## When to weight and when not to

Weighting can increase variance. If selection variables are fully included and the outcome model is correct, an efficient model-based estimator may differ from a design-robust weighted one. The choice depends on the target:

- **Finite-population description:** Inverse-probability totals are design-unbiased when all relevant inclusion probabilities are known and positive. Nonlinear coefficients and ratio estimates generally are not exactly unbiased; their design consistency requires further conditions.
- **Superpopulation inference with correct model:** Unweighted estimation may be more efficient if selection is ignorable given covariates.
- **Robustness to model misspecification:** Valid design weights can recover a declared population loss or score even when its working outcome model is wrong. They cannot repair missing frame units, zero inclusion probability or invalid weight construction.

Compare targets and sensitivity rather than choosing whichever interval is narrower.

## Calibration weights

Calibration weights can improve covariate balance for a population target:

$$\\sum_{i\\in s}w_{i}x_{i}=X_{N}.$$

But extreme weights indicate positivity or frame problems. An inverse inclusion weight of $100$ has a design expansion interpretation. A normalised or calibrated weight need not retain that literal scale. Large influence depends jointly on the weight, the outcome or score and the sampling design.

## Prediction and validation

For prediction, ask where loss is averaged:

- **Unweighted cross-validation:** Estimates performance in the observed sample distribution.
- **Weighted validation:** Targets the represented population if weights and outcome observation are valid.

Cluster and stratified splits still matter; weights do not create independence.

## Worked example: weighted versus unweighted logistic regression

A survey samples $n=500$ from $N=10000$ with inclusion probabilities proportional to income. We fit a logistic model for health outcome $Y$ on age and income.

**Scenario A:** Income is in the model, and the model is correct. Unweighted estimation is consistent for the superpopulation parameter because selection is ignorable given income. Under suitable design and root regularity conditions, the weighted fit is also consistent for the corresponding population target. There is no universal variance ordering.

**Scenario B:** Income affects selection but is omitted from the model. Unweighted estimation is biased because the omitted variable is correlated with both selection and outcome. Under the design consistency conditions developed below, the weighted fit targets the finite-population descriptive coefficient for the declared logistic loss, which need not equal the coefficient in the omitted-variable model for another population.

**Scenario C:** The target is the population proportion with poor health. If inclusion overrepresents a group with a different health proportion, the unweighted proportion generally targets a different mixture. Valid inclusion weights recover the population total or an appropriate ratio estimate.

## Common errors and misconceptions

- **Always weighting or never weighting.** The decision depends on the target and the model. Unequal sampling, the chosen loss and conditional selection assumptions determine the comparison. Correct model specification and ignorable selection do not by themselves prove a universal efficiency ordering.

- **Using standard software variance for weighted estimates.** Ordinary likelihood software treats weights as frequency replicates, giving incorrect standard errors. Design-based variance estimation is required.

- **Ignoring cluster structure.** Even with weights, observations within clusters are dependent. Cluster-robust standard errors or replicate weights are needed.

- **Confusing weighted estimates with causal estimates.** Survey weights correct for selection bias, not confounding. Causal inference requires additional assumptions.

## Exact design score covariance and a linearization theorem

Throughout this section the finite population is fixed, including every outcome and covariate. Only sample membership is random. Write I for inclusion indicators, pi for first-order inclusion probabilities and pi ij for joint inclusion probabilities, with pi ii equal to pi i. Let the normalised population score be the average of specified vector functions psi at beta, and let its unique root be beta N. The Horvitz–Thompson score replaces every population term by I divided by pi times that term. At every fixed beta its design expectation equals the population score. This does not imply that solving the random equation is unbiased.

At the population root the exact design covariance of the normalised sample score is

$$\\operatorname{Var}_d\\{\\widehat u_N(\\beta_N)\\}
=\\frac1{N^2}\\sum_{i,j}
\\frac{\\pi_{ij}-\\pi_i\\pi_j}{\\pi_i\\pi_j}
\\psi_i(\\beta_N)\\psi_j(\\beta_N)^\\top.$$

The cross terms are the sampling-design information that frequency-weighted independent likelihood omits. For fixed-size sampling many inclusion indicators are negatively correlated. For cluster sampling some positive within-cluster associations can dominate. Neither effect is encoded by the marginal weight alone.

Here is a precise general linearization contract. Let a positive rate r N tend to infinity; assume the selected sample root is design-consistent, the population roots remain interior, and the integrated derivative of the sample score along the segment between the two roots converges in design probability to a nonsingular fixed matrix A. Assume also that r N times the sample score at the population root has a centred normal limit with covariance B. Taylor's integral identity gives

$$r_N(\\widehat\\beta_N-\\beta_N)
=-\\left[\\int_0^1\\dot{\\widehat u}_N\\{\\beta_N+t(\\widehat\\beta_N-\\beta_N)\\}\\,dt\\right]^{-1}
r_N\\widehat u_N(\\beta_N).$$

Continuity of inversion at A and Slutsky's theorem prove the sandwich limit with covariance inverse A times B times inverse A transpose. This is a complete implication from the stated derivative and score conditions. Approximate numerical roots require their residual multiplied by r N to vanish. A local derivative evaluated only at the population root is insufficient unless local oscillation is controlled on the random segment.

## A complete independent-inclusion experiment

To demonstrate that the contract is achievable, consider a sequence of fixed populations with independent Bernoulli inclusions and probabilities bounded below by a positive constant. The sampling fraction consequently stays positive. Work on a fixed compact parameter region, assume scores and their first derivatives are uniformly bounded, and their first derivatives uniformly Lipschitz in beta. Assume population roots are interior with global score separation as in Exercise 18.1, their population derivative matrices converge to nonsingular A, and

$$B_N=\\frac1N\\sum_i\\frac{1-\\pi_i}{\\pi_i}
\\psi_i(\\beta_N)\\psi_i(\\beta_N)^\\top\\longrightarrow B.$$

At a fixed parameter value, each coordinate of the normalised score difference has design variance bounded by a constant divided by N, because independent inclusion eliminates cross covariances. The same bound applies to every derivative entry. To upgrade pointwise convergence to uniform convergence, cover the compact parameter region by a finite mesh of any fixed spacing. Chebyshev's inequality and a union bound give convergence at its finitely many points. Bounded score derivatives control deviations between mesh points. The normalised sum of inverse-weighted inclusions is bounded deterministically by a constant, so this Lipschitz control is uniform over samples. First let N increase, then shrink the mesh spacing. This proves the uniform score and derivative laws. Global separation and selection of an interior root yield design consistency as already shown; existence of such a root remains an explicit condition, rather than a numerical status-code assumption.

At the population root, the square-root-N score is a sum of independent centred bounded vectors divided by square root N. For every fixed linear contrast, the largest summand tends uniformly to zero and the variance converges to the corresponding quadratic form in B. Lindeberg's triangular-array theorem and Cramér–Wold therefore give the required vector normal limit, including singular B. Uniform derivative convergence and the Lipschitz assumption control the random Taylor segment. The preceding theorem applies with rate square root N. This proof concerns independent Poisson sampling; it must not be transferred to fixed-size or multistage designs by retaining only their first-order probabilities.

A consistent score covariance estimate in this experiment is

$$\\widehat B_N=\\frac1N\\sum_{i:I_i=1}
\\frac{1-\\pi_i}{\\pi_i^2}
\\psi_i(\\widehat\\beta_N)\\psi_i(\\widehat\\beta_N)^\\top.$$

At the true population root its expectation is B N, and bounded independent summands give entrywise variance of order inverse N. Replacing the root by its consistent estimate is negligible by the uniform Lipschitz bound. Thus the estimate converges to B; combined with the sample derivative, it consistently estimates the sandwich covariance. Independent inclusion makes this particular middle matrix positive semidefinite. A general pairwise Horvitz–Thompson covariance estimate can have a different algebraic form and may not be positive semidefinite in a finite sample.

### Worked example: unequal selection of a binary outcome

Take a superpopulation with equal probabilities of outcomes zero and one. Selection probabilities are one fifth for zeros and four fifths for ones, independently between units. The selected population has outcome-one probability four fifths: its joint probability of one and selection is two fifths, and its selection probability is one half. An unweighted intercept-only logistic fit consequently targets the log odds of four, rather than the population log odds zero.

Inverse-probability weighting restores the score expectation. The expectation of selected weight times outcome is one half; the expectation of selected weight is one. The corresponding ratio therefore targets one half. This is an informative-selection example with no covariates to render selection ignorable. It does not assert that each finite-sample weighted ratio is unbiased, and a zero-inclusion outcome category would destroy the identification argument.

## Ignorable selection and model misspecification

Let R denote selection into an observed superpopulation sample. If R is independent of Y given X and the conditional mean score is zero at the true parameter for every X, then

$$E\\{R\\psi(Y,X;\\beta_0)\\}
=E[P(R=1\\mid X)\\,E\\{\\psi(Y,X;\\beta_0)\\mid X\\}]=0.$$

With positivity, identification in the selected covariate support and ordinary sampling regularity, the selected model can therefore retain beta zero without weighting. The displayed equality is the essential mathematical reason; the phrase “include the selection variables” is not a substitute for conditional independence or correct specification.

Under misspecification, the conditional score expectation is generally nonzero and varies with X. Multiplying it by a covariate-dependent selection probability changes its population root. Valid design weighting can recover the original population score, but no longer makes the working model literally true. The finite-population target and a limiting superpopulation projection can also differ by ordinary population-generation variability. A design-based interval conditional on the realized population and a model-based interval for a superpopulation parameter therefore address different uncertainty experiments.

## Calibration and multiple sampling stages

If inclusion occurs through a primary unit and then a secondary selection conditional on that unit, the marginal inclusion probability is the product of the first-stage probability and the conditional second-stage probability. Iterated expectation proves unbiasedness of the inverse-product expansion for a fixed population total. Variance is not obtained by squaring only the final weights: the law of total variance separates uncertainty between primary units from conditional uncertainty within them. Replicate methods must reproduce the actual design's stages and strata.

Calibration imposes exact sample-weighted totals for known auxiliary variables. If an outcome lies exactly in the span of those variables, its calibrated estimated total is exact whenever the constraints are feasible. For a general outcome, write it as a chosen linear prediction plus residual; the error in the calibrated total is exactly the weighted residual total minus the population residual total. This algebra explains possible gains from good predictors while supplying no universal variance improvement. Random calibration weights can introduce dependence and nonlinear bias; estimated-response or nonresponse adjustments also require their own information and positivity assumptions.

### Worked example: why one cluster is not many independent units

Suppose there are M equal-size primary units, each containing b identical copies of its cluster value. Sample m primary units by simple random sampling without replacement and observe every member. The population mean equals the mean of the M cluster values, and the estimator is the sample mean of m cluster values. Its design variance is the finite-population correction times the between-cluster variance divided by m. Recording m times b outcome rows does not divide this variance by b. Marginal unit weights correctly expand the total, but the number of independently selected primary units controls uncertainty. The example also shows why increasing cluster size with a fixed number of selected clusters is a different asymptotic experiment from increasing the number of clusters.

## Practice exercises

<a id="survey-weighted-models-and-targets-legacy-18-1"></a>

**Exercise 18.1.** Show that the pseudo-MLE is design consistent for the finite-population log-likelihood target under regularity conditions.

<details><summary>Hint 1</summary>

Unbiased scores do not by themselves give consistent roots.

</details>

<details><summary>Hint 2</summary>

Use uniform convergence and global separation to exclude distant sample roots.

</details>

<details><summary>Full solution</summary>

The pseudo-score is $U_{w}(\\beta)=\\sum_{i\\in s}w_{i}\\dot{\\ell}_{i}(\\beta)$. For design weights $w_{i}=1/\\pi_{i}$, $\\mathbb{E}_{d}[U_{w}(\\beta)]=\\sum_{i=1}^{N}\\dot{\\ell}_{i}(\\beta)$, the population score. Normalize these as $\\hat u_N$ and $u_N$ on a declared compact parameter set $B$. A sufficient consistency contract is

$$\\sup_{\\beta\\in B}\\|\\hat u_N(\\beta)-u_N(\\beta)\\|\\to_{p,d}0$$

and, for every $\\varepsilon>0$, eventual global separation

$$\\inf_{\\beta\\in B:\\,\\|\\beta-\\beta_N\\|\\ge\\varepsilon}\\|u_N(\\beta)\\|>c_\\varepsilon>0,$$

where $\\beta_N$ is the unique interior population root. If an interior sample root $\\hat\\beta_N\\in B$ is selected, uniform convergence and separation force $\\hat\\beta_N\\to_{p,d}\\beta_N$. Controlled weights/moments and smooth nonsingular derivatives are standard ways to establish the convergence and local root conditions, but an isolated local root alone cannot rule out selecting a remote sample root. This argument does not identify the target with a squared-error optimizer unless the two objectives are proved to share one. ∎

</details>

<a id="survey-weighted-models-and-targets-legacy-18-2"></a>

**Exercise 18.2.** A population has two strata, each of size $100$, with finite-population means $10$ and $20$ and finite-population variances $S_1^2=S_2^2=25$. Independent SRSWOR samples take $n_1=50$ and $n_2=10$, so the inclusion probabilities are $0.5$ and $0.1$. Compute the design expectations and variances of (i) the population-weighted stratified mean $\\hat\\mu_w=(\\bar y_1+\\bar y_2)/2$ and (ii) the unweighted sample mean $\\hat\\mu_u=(50\\bar y_1+10\\bar y_2)/60$. Compare variance and mean squared error for the true population mean $15$.

<details><summary>Hint 1</summary>

Compute expectations before comparing variances.

</details>

<details><summary>Hint 2</summary>

The independent stratum variances add with squared coefficients.

</details>

<details><summary>Full solution</summary>

Since each stratum sample mean is design-unbiased,
$\\mathbb E_d(\\hat\\mu_w)=(10+20)/2=15$. The SRSWOR variances are
$\\operatorname{Var}_d(\\bar y_1)=(1-0.5)25/50=0.25$ and
$\\operatorname{Var}_d(\\bar y_2)=(1-0.1)25/10=2.25$. Independence across
strata gives

$$\\operatorname{Var}_d(\\hat\\mu_w)=\\tfrac14(0.25+2.25)=0.625.$$

The unweighted estimator instead has
$\\mathbb E_d(\\hat\\mu_u)=(5/6)10+(1/6)20=35/3\\approx11.67$, so its bias is
$-10/3$. Its variance is

$$\\operatorname{Var}_d(\\hat\\mu_u)=\\frac{25}{36}(0.25)+\\frac{1}{36}(2.25)
=\\frac{17}{72}\\approx0.236.$$

Thus the weighted-to-unweighted variance ratio is $45/17\\approx2.65$, but
variance alone hides the unweighted estimator's bias. The MSEs are $0.625$
and $17/72+100/9\\approx11.35$, respectively. ∎

</details>

<a id="survey-weighted-models-and-targets-legacy-18-3"></a>

**Exercise 18.3.** Explain why weighted cross-validation does not restore independence within clusters.

<details><summary>Hint 1</summary>

Weights change an objective, not the joint law of observations.

</details>

<details><summary>Hint 2</summary>

A held-out member can share latent information with a training member.

</details>

<details><summary>Full solution</summary>

Cross-validation splits data into folds. If observations within clusters are dependent, putting some cluster members in training and others in test creates leakage: the test observations are not independent of the training data. Weighting adjusts for selection probabilities but does not break within-cluster dependence. Cluster-level cross-validation is required. ∎

</details>

<a id="survey-weighted-models-and-targets-ex-4"></a>

**Exercise 4.** Show that multiplying all pseudo-likelihood weights by the same positive constant leaves the root and a correctly scaled sandwich unchanged.

<details><summary>Hint 1</summary>

Track both derivative and score-covariance scaling.

</details>

<details><summary>Hint 2</summary>

The middle covariance scales quadratically.

</details>

<details><summary>Full solution</summary>

The score and derivative multiply by c, so the zero set is unchanged. Its design covariance multiplies by $c^2$. The two inverse derivative factors each contribute $c^{-1}$, cancelling that middle factor. A frequency-likelihood inverse Hessian instead scales by $c^{-1}$, demonstrating why arbitrary weight normalisation cannot define the correct survey variance.

</details>

<a id="survey-weighted-models-and-targets-ex-5"></a>

**Exercise 5.** Prove the independent-inclusion covariance estimate in the text is unbiased at the population root.

<details><summary>Hint 1</summary>

Take expectation of each inclusion indicator.

</details>

<details><summary>Hint 2</summary>

Its factor pi cancels one denominator.

</details>

<details><summary>Full solution</summary>

The expectation of $I_i(1-\\pi_i)\\psi_i\\psi_i^\\top/\\pi_i^2$ is $(1-\\pi_i)\\psi_i\\psi_i^\\top/\\pi_i$. Summing and dividing by N yields B N exactly. Bounded scores and inclusion probabilities bounded below give variance of each averaged matrix entry of order inverse N by independence. Evaluating at an estimated root requires the separate continuity/consistency argument in the text.

</details>

<a id="survey-weighted-models-and-targets-ex-6"></a>

**Exercise 6.** For a two-stage design, prove inverse-product unbiasedness of the total.

<details><summary>Hint 1</summary>

Condition first on primary-unit selection.

</details>

<details><summary>Hint 2</summary>

Use the conditional probability of secondary inclusion.

</details>

<details><summary>Full solution</summary>

For a unit in primary cluster c, let primary inclusion be p c and conditional unit inclusion be q i given its primary is selected. Its final indicator has expectation $p_cq_i$ by the tower property. Thus its inverse-product weighted outcome has expectation its fixed outcome. Summing gives the population total. Joint inclusion probabilities still control variance; the first-order product alone does not determine it.

</details>

<a id="survey-weighted-models-and-targets-ex-7"></a>

**Exercise 7.** If calibration weights reproduce a constant and a covariate total, show exactness for an affine outcome.

<details><summary>Hint 1</summary>

Express every outcome as intercept plus slope times the covariate.

</details>

<details><summary>Hint 2</summary>

Apply the two constraints term by term.

</details>

<details><summary>Full solution</summary>

For $y_i=a+b x_i$, the weighted sample total is $a\\sum_s w_i+b\\sum_s w_ix_i=aN+bX_N$, exactly the population total. This does not require the weights to be inverse probabilities, but requires the constraints to hold. For non-affine outcomes, only the fitted affine part cancels and residual estimation remains.

</details>

<a id="survey-weighted-models-and-targets-ex-8"></a>

**Exercise 8.** Does design-unbiasedness of a sample score imply unbiasedness of its root? Give a concrete counterexample.

<details><summary>Hint 1</summary>

A nonlinear transformation of an unbiased estimate need not be unbiased.

</details>

<details><summary>Hint 2</summary>

Use a Bernoulli mean and a squared target.

</details>

<details><summary>Full solution</summary>

Fix a two-unit population with outcomes zero and one, and sample one unit uniformly. Its observed outcome Y has design expectation p equal to one half. The population score $p-\\sqrt\\theta$ has root one quarter, while the sample score $Y-\\sqrt\\theta$ is design-unbiased at every theta and has root $Y^2=Y$. The latter has expectation one half, not one quarter. This direct finite-population counterexample establishes the nonlinearity issue without asserting a regular interior-root asymptotic theorem.

</details>

<a id="survey-weighted-models-and-targets-ex-9"></a>

**Exercise 9.** Explain why an interval for a realized finite-population coefficient need not cover a superpopulation coefficient at the same rate.

<details><summary>Hint 1</summary>

Separate sampling design from population generation.

</details>

<details><summary>Hint 2</summary>

Conditioning on the population removes one uncertainty layer.

</details>

<details><summary>Full solution</summary>

A design interval treats the finite population and its coefficient as fixed, accounting only for which units are sampled. A superpopulation coefficient also differs from the realized coefficient because the finite population itself is random under that model. The variance decomposition includes this between-population variation, and potentially covariance with the sampling estimator. Valid conditional design coverage does not alone establish the unconditional target coverage.

</details>

<a id="survey-weighted-models-and-targets-ex-10"></a>

**Exercise 10.** For the identical-member cluster example, derive the design variance exactly.

<details><summary>Hint 1</summary>

Apply the ordinary SRS mean formula to cluster values.

</details>

<details><summary>Hint 2</summary>

The within-cluster multiplicity cancels from numerator and denominator.

</details>

<details><summary>Full solution</summary>

Writing the M cluster values as z c and their finite-population variance as $S_z^2=(M-1)^{-1}\\sum_c(z_c-\\bar z)^2$, the observed estimator is the mean of m sampled cluster values. Its variance is $(1-m/M)S_z^2/m$. Each cluster contributes b copies to both its total and population size, so b disappears. Treating all mb rows as iid would use a different design and generally understate uncertainty.

</details>

## Forward and backward connections

This chapter extended the design-based framework from *Design Randomization as a Probability Space* and *Ratio and Calibration Estimators* to model fitting. In *Model Checking and the Double Use of Data*, we examined diagnostics for model assumptions; here we saw how survey weights affect those diagnostics. In *Reproducible Numerical Inference*, we discuss how to ensure that weighted computations are numerically stable and reproducible.
`;export{e as default};