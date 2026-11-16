var e=`---
id: book-advanced-statistical-inference-reference
title: "Advanced Statistical Inference: Designs, Likelihoods, and Dependence"
level: graduate
estimated_minutes: 2700
license: CC BY-SA 4.0
---

# Advanced Statistical Inference: Designs, Likelihoods, and Dependence {#section-1-advanced-statistical-inference-designs-likelihoods-and-}

This proof-oriented reference connects survey randomization, generalized likelihoods, empirical distributions, multivariate geometry, dependent processes, censored event times, and spatial prediction. It assumes real analysis, linear algebra, probability at the level of convergence in distribution, likelihood inference, and basic stochastic processes. Measure-theoretic conditional expectation is helpful in the later chapters.

Theorems state the probability law under which their conclusion holds. Design-based results hold over repeated samples from a fixed finite population. Model-based results hold under a stochastic law. An asymptotic normal approximation names what tends to infinity. None of these alone identifies a causal intervention.

<a id="section-5-1-design-randomization-as-a-probability-space"></a>
## 1. Design randomization as a probability space {#section-7-1-design-randomization-as-a-probability-space}

Let $U_{N}=\\{1,…,N\\}$ have fixed values $y_{i}$. A sample $s$ is drawn from a set of allowable samples with probabilities $p_{N}(s)$. Define $I_{i}(s)=\\mathbf{1}_{\\{i\\in s\\}}$, first-order inclusion probability $\\pi_{i}=\\sum_{s\\ni i}p_{N}(s)$, and second-order probability $\\pi_{ij}=\\sum_{s\\ni i,j}p_{N}(s)$.

<a id="section-9-theorem-1-1-horvitz-thompson-unbiasedness"></a>
### Theorem 1.1 — Horvitz–Thompson unbiasedness {#section-11-theorem-1-1-horvitz-thompson-unbiasedness}

If $\\pi_{i}>0$ for every $i$, then

$\\hat{Y}_{HT}=\\sum_{i} I_{i} y_{i}/\\pi_{i}$

satisfies $\\mathbb{E}_{d}(\\hat{Y}_{HT})=Y_{N}=\\sum_{i} y_{i}$.

**Proof.** Finite sums permit rearrangement:

$\\mathbb{E}_{d} \\hat{Y}_{HT}=\\sum_{i} y_{i} \\mathbb{E}_{d}(I_{i})/\\pi_{i}=\\sum_{i} y_{i}\\pi_{i}/\\pi_{i}=Y_{N}$. ∎

The positivity hypothesis is structural. If $\\pi_{i}=0$, the expression is undefined and no randomization average observes $y_{i}$.

<a id="section-23-proposition-1-2-variance-identity"></a>
### Proposition 1.2 — Variance identity {#section-25-proposition-1-2-variance-identity}

With $\\Delta_{ij}=\\pi_{ij}-\\pi_{i}\\pi_{j}$,

$\\operatorname{Var}_{d}(\\hat{Y}_{HT})=\\sum_{i}\\sum_{j} \\Delta_{ij} y_{i} y_{j}/(\\pi_{i}\\pi_{j})$.

**Proof.** Expand the variance of $\\sum_{i} I_{i} y_{i}/\\pi_{i}$ and use $\\operatorname{Cov}_{d}(I_{i},I_{j})=\\Delta_{ij}$. ∎

For fixed-size designs, $\\sum_{j}\\Delta_{ij}=0$. This gives the Sen–Yates–Grundy form

$\\operatorname{Var}_{d}(\\hat{Y}_{HT})=-(1/2)\\sum_{i}\\sum_{j} \\Delta_{ij}(y_{i}/\\pi_{i}-y_{j}/\\pi_{j})^{2}$

when the algebraic conditions apply. Sign and estimability require attention to pairwise inclusion probabilities. A variance estimator cannot recover pairs that the design never permits jointly unless additional structure is imposed.

<a id="section-37-srswor-specialization"></a>
### SRSWOR specialization {#section-39-srswor-specialization}

For sample size $n$, $\\pi_{i}=n/N$ and, for $i\\ne j$, $\\pi_{ij}=n(n-1)/[N(N-1)]$. Substitution yields

$\\operatorname{Var}_{d}(\\bar{y}_{s})=(1-f)S_{N}^{2}/n$, $f=n/N$,

where $S_{N}^{2}=(N-1)^{-1}\\sum (y_{i}-\\bar{Y}_{N})^{2}$. The result is exact for a finite population and random sample, not an iid superpopulation approximation.

<a id="section-45-2-ratio-and-calibration-estimators"></a>
## 2. Ratio and calibration estimators {#section-47-2-ratio-and-calibration-estimators}

Let $X_{N}=\\sum x_{i}$ be known. The ratio estimator

$\\hat{Y}_{R}=X_{N} \\hat{Y}_{HT}/\\hat{X}_{HT}$

is nonlinear and generally biased. A first-order Taylor expansion around $(Y_{N},X_{N})$ gives

$\\hat{Y}_{R}-Y_{N}\\approx (\\hat{Y}_{HT}-Y_{N})-R_{N}(\\hat{X}_{HT}-X_{N})$,

where $R_{N}=Y_{N}/X_{N}$. Thus its approximate variance is the design variance of an HT total for residuals $e_{i}=y_{i}-R_{N}x_{i}$.

Calibration weights solve a constrained distance problem: minimise $\\sum_{i\\in s} G_{i}(w_{i},d_{i})$ around base weights $d_{i}=1/\\pi_{i}$, subject to $\\sum_{i\\in s} w_{i}x_{i}=X_{N}$. Different distance functions give generalized regression, raking, or bounded adjustments. Existence requires feasible calibration totals; uniqueness requires strict convexity on the feasible set and appropriate rank. Extreme calibration is a positivity warning.

Design consistency is an asymptotic property of a sequence of finite populations and designs. A useful theorem must bound inclusion probabilities, moments, and dependence as $N,n\\to \\infty$. “The sample is large” without a sequence is not a proof.

<a id="section-61-3-estimating-equations-and-sandwich-limits"></a>
## 3. Estimating equations and sandwich limits {#section-63-3-estimating-equations-and-sandwich-limits}

Let observations $Z_{1},…,Z_{n}$ be iid for the moment, and define an estimating equation

$\\Psi_{n}(\\theta )=n^{-1}\\sum_{i} \\psi (Z_{i},\\theta )=0$.

Suppose $\\theta_{0}$ is the unique solution of $\\mathbb{E}\\psi (Z,\\theta )=0$.

<a id="section-69-theorem-3-1-regular-m-estimator-limit"></a>
### Theorem 3.1 — Regular M-estimator limit {#section-71-theorem-3-1-regular-m-estimator-limit}

Assume:

1. $\\hat{\\theta }\\to_{p}\\theta_{0}$ and lies in an interior neighborhood;
2. $\\psi (z,\\theta )$ is differentiable in θ near $\\theta_{0}$ with a locally integrable dominating envelope for the derivative;
3. $A=\\mathbb{E}[\\partial \\psi (Z,\\theta_{0})/\\partial \\theta^{T}]$ exists and is nonsingular;
4. $\\mathbb{E}\\lVert \\psi (Z,\\theta_{0}) \\rVert^{2}<\\infty$;
5. the empirical derivative converges uniformly to $A$ in the neighborhood.

Then

$\\sqrt{n}(\\hat{\\theta }-\\theta_{0}) \\to_{d} \\mathcal{N}(0,A^{-1}BA^{-T})$,

where $B=\\operatorname{Var}[\\psi (Z,\\theta_{0})]$.

**Proof sketch.** Taylor-expand $0=\\Psi_{n}(\\hat{\\theta })$ around $\\theta_{0}$. Consistency and uniform derivative convergence make the derivative matrix converge to $A$. The multivariate central limit theorem applies to $\\sqrt{n}\\Psi_{n}(\\theta_{0})$. Slutsky’s theorem completes the result. ∎

For a correctly specified likelihood score, information equality gives $B=-A$ under differentiation and support regularity, producing inverse Fisher information. Under variance misspecification, the sandwich retains selected robustness if the mean estimating equation is unbiased. Clustered observations replace individual scores by independent-cluster sums. Under the standard controlled-cluster asymptotic regime the index is the number of clusters; growing cluster sizes and weaker within-cluster dependence can change the rate. Few-cluster corrections remain essential when inference relies on a many-cluster approximation.

<a id="section-89-4-generalized-linear-likelihood"></a>
## 4. Generalized linear likelihood {#section-91-4-generalized-linear-likelihood}

For independent exponential-dispersion-family observations, write

$f_i(y_i;\\theta_i,\\varphi)=\\exp\\{[y_i\\theta_i-b(\\theta_i)]/a_i(\\varphi)+c_i(y_i,\\varphi)\\}$.

Then $\\mu_i=b'(\\theta_i)$ and $\\operatorname{Var}(Y_i)=a_i(\\varphi)V(\\mu_i)$ with $V(\\mu_i)=b''(\\theta_i)$. Let $g(\\mu_i)=\\eta_i=x_i^T\\beta$. Differentiating through μ gives score

$U(\\beta )=\\sum_{i} [(y_{i}-\\mu_{i})/(a_{i}(\\varphi )V(\\mu_{i}))](d\\mu_{i}/d\\eta_{i})x_{i}$.

Fisher scoring leads to iteratively reweighted least squares with working weights proportional to

$[d\\mu_{i}/d\\eta_{i}]^{2}/[a_{i}(\\varphi )V(\\mu_{i})]$.

<a id="section-103-logistic-concavity"></a>
### Logistic concavity {#section-105-logistic-concavity}

For Bernoulli logistic regression, $U=X^{T}(y-p)$ and Hessian $H=-X^{T}WX$, where $W_{i}=p_{i}(1-p_{i})>0$ at finite β. Hence $v^{T}Hv=-(Xv)^{T}W(Xv)\\le 0$. If $X$ has full column rank, the finite-parameter log-likelihood is strictly concave. Existence of a finite maximizer still fails under complete or quasi-complete separation; concavity does not prevent the supremum at infinity.

<a id="section-107-identifiability-and-support"></a>
### Identifiability and support {#section-109-identifiability-and-support}

Full rank identifies β only relative to the chosen design encoding and available covariate support. Sparse factor combinations can create effective nonidentifiability. Extrapolated probabilities may be numerically defined but scientifically unsupported. Penalisation changes the estimating rule and its finite-sample sampling distribution; it does not automatically redefine the population parameter. Bayesian priors and Firth-type corrections can regularise separation, but the penalty or prior, target, and interval interpretation must be declared.

Likelihood-ratio, score, and Wald tests are first-order equivalent under interior regular conditions. They can differ materially near boundaries or with weak information. Variance-component zeros, mixture models, rare events, and selected models need nonstandard reference laws.

<a id="section-113-5-empirical-distributions-and-ranks"></a>
## 5. Empirical distributions and ranks {#section-115-5-empirical-distributions-and-ranks}

For iid real observations with CDF $F$, empirical CDF $F_{n}(x)=n^{-1}\\sum \\mathbf{1}_{\\{X_{i}\\le x\\}}$.

<a id="section-117-theorem-5-1-dvoretzky-kiefer-wolfowitz-bound"></a>
### Theorem 5.1 — Dvoretzky–Kiefer–Wolfowitz bound {#section-119-theorem-5-1-dvoretzky-kiefer-wolfowitz-bound}

For every $\\varepsilon >0$,

$\\mathbb{P}(\\sup_{x} \\lvert F_{n}(x)-F(x)\\rvert >\\varepsilon )\\le 2e^{-2n\\varepsilon^{2}}$.

Thus a simultaneous band $F_{n}(x)\\pm \\sqrt{\\log(2/\\alpha )/(2n)}$, clipped to $[0,1]$, has coverage at least $1-\\alpha$. The theorem uses iid sampling; time or cluster dependence changes the bound.

The probability integral transform makes ranks distribution-free for iid observations from a continuous common distribution. Ties destroy uniform random ordering and require a declared convention. A two-sample permutation test is exact when group labels are exchangeable under the sharp null distribution. Equality of means alone does not generally imply exchangeability.

<a id="section-127-kernel-bias-variance-calculation"></a>
### Kernel bias–variance calculation {#section-129-kernel-bias-variance-calculation}

For one sufficient version, let $K$ be bounded, symmetric, and compactly supported with integral 1, finite absolute second moment, and finite squared integral $R(K)$. If $f$ has two continuous derivatives near an interior point and $h\\to 0$, $nh\\to \\infty$, then

$\\operatorname{Bias}[\\hat{f}_{h}(x)]=(h^{2}/2)\\mu_{2}(K)f''(x)+o(h^{2})$,

$\\operatorname{Var}[\\hat{f}_{h}(x)]=f(x)R(K)/(nh)+o(1/(nh))$.

The leading mean squared error balances $h^{4}$ and $1/(nh)$, giving bandwidth order $n^{-1/5}$. At a support endpoint, an uncorrected symmetric kernel can have order-one bias; other near-boundary expansions can contain an order-$h$ term. In $d$ dimensions, variance scales like $1/(nh^{d})$, exposing the curse of dimensionality.

<a id="section-137-6-robust-functionals"></a>
## 6. Robust functionals {#section-139-6-robust-functionals}

For a distribution functional $T(F)$, the influence function is

$\\operatorname{IF}(x;T,F)=\\lim_{\\varepsilon \\downarrow 0}[T((1-\\varepsilon )F+\\varepsilon \\delta_{x})-T(F)]/\\varepsilon$,

when the limit exists. The mean has $\\operatorname{IF}(x)=x-\\mathbb{E}_{F} X$, unbounded. If $F$ has positive continuous density $f(m)$ at unique median $m$, the median has

$\\operatorname{IF}(x)= [\\mathbf{1}_{\\{ x>m \\}}-\\mathbf{1}_{\\{ x<m \\}}]/[2f(m)]$

away from the tie point, hence bounded. Bounded influence is local; it does not guarantee a good estimator under fifty percent adversarial contamination or a wrong target.

An M-estimator of location solves $\\sum \\psi ((x_{i}-\\theta )/s)=0$. Monotone bounded ψ can limit response outliers, while redescending ψ can create multiple roots. A robust scale and initialization are part of the algorithm. In regression, leverage makes $x_{i}\\psi (r_{i})$ unbounded even if ψ is clipped unless design influence is also controlled.

<a id="section-151-7-multivariate-normal-geometry"></a>
## 7. Multivariate normal geometry {#section-153-7-multivariate-normal-geometry}

If $X\\sim \\mathcal{N}_{p}(\\mu ,\\Sigma )$ with positive-definite $\\Sigma$, affine transforms are normal and quadratic contours are ellipsoids. For iid samples, $\\bar{x}$ and sample covariance $S$ are independent, and $(n-1)S$ has a Wishart law with $n-1$ degrees of freedom. These facts are special to multivariate normal sampling.

For testing $H_{0}:\\mu =\\mu_{0}$ with $n>p$, Hotelling statistic

$T^{2}=n(\\bar{x}-\\mu_{0})^{T}S^{-1}(\\bar{x}-\\mu_{0})$

satisfies

$[(n-p)/(p(n-1))]T^{2} \\sim F_{p,n-p}$

under the null. If $p\\ge n$, $S$ is singular and the theorem is inapplicable.

<a id="section-165-pca-variational-characterization"></a>
### PCA variational characterization {#section-167-pca-variational-characterization}

For symmetric positive-semidefinite $S$ with eigenvalues $\\lambda_{1}\\ge …\\ge \\lambda_{p}$, the Rayleigh quotient obeys

$\\max_{\\lVert v \\rVert=1}v^{T}Sv=\\lambda_{1}$,

with maximizers in the leading eigenspace. Expanding $v$ in an orthonormal eigenbasis proves the result because the quotient is a convex combination of eigenvalues. If $\\lambda_{1}=\\lambda_{2}$, the leading direction is not unique. Near ties make estimated eigenvectors unstable even when the subspace is stable.

Selecting the number of components after inspecting the same downstream outcome can bias validation. PCA must be recomputed inside each training fold to avoid leakage.

<a id="section-175-8-dependent-central-limits"></a>
## 8. Dependent central limits {#section-177-8-dependent-central-limits}

For a weakly stationary time series, uncorrelatedness is not independence. A sample-mean CLT often has asymptotic variance

$\\Omega =\\gamma (0)+2\\sum_{h=1}^\\infty \\gamma (h)=2\\pi f(0)$

under a spectral convention and conditions such as strong mixing plus moments and summable dependence. Then $\\sqrt{n}(\\bar{X}-\\mu )\\to N(0,\\Omega )$. The iid variance $\\gamma(0)$ is wrong when $2\\sum_{h\\ge1}\\gamma(h)\\ne0$; nonzero positive and negative autocovariances can cancel in the sum.

Heteroskedasticity-and-autocorrelation-consistent estimators truncate and weight sample autocovariances. Bandwidth growth must balance bias and variance. Fixed-span, long-memory, unit-root, and structural-break regimes require different theory.

For spatial data, asymptotics may expand the observation domain, increase density in a fixed domain, or do both. Some covariance parameters are not separately consistently estimable under fixed-domain asymptotics even with arbitrarily dense observations; only combinations can be microergodic. A generic “n→∞” claim hides the geometry.

<a id="section-187-9-counting-process-survival-theory"></a>
## 9. Counting-process survival theory {#section-189-9-counting-process-survival-theory}

For subject $i$, let $\\widetilde T_i=\\min(T_i,C_i)$ be the observed time and $\\delta_i=\\mathbf 1_{\\{T_i\\le C_i\\}}$. Define counting process $N_i(t)=\\mathbf{1}_{\\{\\widetilde T_i\\le t,\\delta_i=1\\}}$ and at-risk process $Y_i(t)=\\mathbf{1}_{\\{\\widetilde T_i\\ge t\\}}$ with a declared left-continuous convention. Under a multiplicative-intensity model,

$\\mathbb{E}[dN_{i}(t) \\mid F_{t-}]=Y_{i}(t)\\lambda_{i}(t)dt$.

Then

$M_{i}(t)=N_{i}(t)-\\int_{0}^{t}Y_{i}(u)\\lambda_{i}(u)du$

is a martingale under integrability and correct filtration assumptions. This converts survival estimators into sums of martingale increments.

The Nelson–Aalen cumulative-hazard estimator is

$\\hat{\\Lambda }(t)=\\sum_{t_{j}\\le t} d_{j}/n_{j}$.

Kaplan–Meier is $\\hat{S}(t)=\\prod_{t_{j}\\le t}(1-d_{j}/n_{j})$. For small increments, $-\\log \\hat{S}$ resembles Nelson–Aalen, but they are not exactly equal. Greenwood’s variance approximation is

$\\widehat{\\mathrm{Var}}[\\hat{S}(t)]=\\hat{S}(t)^{2}\\sum_{t_{j}\\le t} d_{j}/[n_{j}(n_{j}-d_{j})]$

when denominators remain positive. Transform-based intervals respect $[0,1]$ better than symmetric Wald intervals.

Independent censoring is a conditional intensity statement: given recorded history, censoring must not carry additional information about the event intensity. Marginal independence is sufficient but not necessary; conditioning can rescue informative marginal censoring when covariates are adequate. Inverse-probability-of-censoring weighting instead models the censoring survival and needs positivity.

<a id="section-211-cox-partial-likelihood"></a>
### Cox partial likelihood {#section-213-cox-partial-likelihood}

For intensity $Y_i(t)\\lambda_0(t)\\exp(x_i^T\\beta)$ and distinct event times, conditional comparison within risk sets gives

$L_{p}(\\beta )=\\prod_{i:\\delta_{i}=1} \\frac{\\exp(x_{i}^{T}\\beta )}{\\sum_{j\\in R(\\widetilde T_i)}\\exp(x_{j}^{T}\\beta )}$.

This removes the unspecified baseline hazard for β estimation. It does not remove proportional hazards, independent censoring, covariate measurement, or risk-set correctness. Time-dependent covariates must be predictable: their value just before an event cannot use future information.

<a id="section-219-10-spatial-covariance-and-kriging"></a>
## 10. Spatial covariance and kriging {#section-221-10-spatial-covariance-and-kriging}

A real covariance function $C(s,t)$ must be symmetric and positive semidefinite: for every finite set of sites and coefficients, $\\sum_{i}\\sum_{j} a_{i}a_{j}C(s_{i},s_{j})\\ge 0$. Second-order stationarity writes $C(s,t)=C_0(t-s)$ for a lag-covariance function $C_0$; isotropy further reduces $C_0(h)$ to a function of $\\lVert h\\rVert$.

For known mean $m$ and positive-definite covariance matrix $K$ at observed sites, the best linear predictor of $Z(s_{0})$ is

$m_{0}+k_{0}^{T}K^{-1}(z-m)$,

where $k_{0}$ is covariance between observations and target. Its model-based prediction-error variance is

$C(s_{0},s_{0})-k_{0}^{T}K^{-1}k_{0}$.

**Proof.** Minimize variance of $Z(s_{0})-a^{T}(Z-m)$ over $a$. Differentiating the quadratic gives $Ka=k_{0}$. Positive definiteness makes the minimizer unique. ∎

Ordinary kriging treats an unknown constant mean and imposes $1^{T}a=1$, adding a Lagrange multiplier. Its variance is at least the simple-kriging variance, with equality when the simple weights already meet the constraint. Universal kriging extends the mean basis. Estimated covariance parameters add an uncertainty layer: a plug-in conditional variance can understate it, but there is no general ordering relative to the model's parameter-integrated predictive variance. Under a specified posterior and finite predictive second moment, total variance averages conditional variances and adds the variance of conditional means; the plug-in uses one conditional variance and omits that mean-variation term.

Variograms must be conditionally negative definite. Empirical variogram bins are dependent noisy summaries, not observations with independent errors. Prefer likelihood, restricted likelihood, or principled minimum contrast with diagnostics, and validate at realistic spatial gaps.

<a id="section-237-11-multiplicity-and-post-selection-scope"></a>
## 11. Multiplicity and post-selection scope {#section-239-11-multiplicity-and-post-selection-scope}

For any collection of valid marginal p-values, Bonferroni’s union bound gives

$\\mathbb{P}(any false rejection)\\le \\sum_{j\\in H0}\\mathbb{P}(p_{j}\\le \\alpha /m)\\le \\alpha$.

No independence is required. Holm orders p-values and sequentially compares $p_{k}$ with $\\alpha /(m-k+1)$, retaining strong familywise control.

False discovery rate is $\\mathbb{E}[V/\\max(R,1)]$, not the probability that any error occurs. Benjamini–Hochberg controls it under independence and specified positive dependence. The guarantee refers to the family actually entered, not hypotheses silently screened out beforehand.

Post-selection intervals need a probability statement conditional on or averaging over the selection pipeline. Data splitting restores ordinary inference on the untouched portion at an efficiency cost. Nested validation protects predictive evaluation when models and tuning are selected. Bootstrap resampling must repeat selection to approximate the full algorithm, and even then nonregular selection boundaries can defeat naive bootstrap theory.

<a id="section-249-12-boundary-map-what-this-book-does-not-prove"></a>
## 12. Boundary map: what this book does not prove {#section-251-12-boundary-map-what-this-book-does-not-prove}

- A design-unbiased estimator does not correct frame undercoverage or nonresponse without assumptions.
- A GLM likelihood does not identify a causal coefficient.
- A sandwich covariance does not repair a wrong mean or a few independent clusters.
- A rank procedure is not assumption-free; its invariance group is the key hypothesis.
- A stationary fit does not establish future stationarity.
- A Kaplan–Meier curve does not identify survival under informative censoring.
- A kriging surface does not prove a covariance model or causal spatial exposure effect.
- An asymptotic theorem does not guarantee an accurate finite-sample approximation.

Use the [GLM and survival deep dive](#/item/deep-dive-glm-survival-event-data) for model interpretation, the [dependence deep dive](#/item/deep-dive-dependence-time-space-multivariate) for structured validation, and the [workflow recipe](#/item/recipe-robust-nonparametric-workflow) for implementation audits.

<a id="section-262-13-functional-delta-method-and-bootstrap-boundaries"></a>
## 13. Functional delta method and bootstrap boundaries {#section-264-13-functional-delta-method-and-bootstrap-boundaries}

Many estimators are functionals $T(\\mathbb{P}_{n})$ of the empirical distribution. If the empirical process converges weakly in a stated tangent space and $T$ is Hadamard differentiable there with a mean-zero, square-integrable influence function $IF$, then

$\\sqrt{n}[T(\\mathbb{P}_{n})-T(P)]=n^{-1/2}\\sum_{i} \\operatorname{IF}(X_{i};T,P)+o_{p}(1)$.

The central limit theorem then gives an asymptotic normal law when the influence function has finite variance. This representation explains the sandwich, infinitesimal jackknife, and ordinary nonparametric bootstrap for smooth functionals.

The sample mean is linear with influence $x-\\mu$. A quantile $q_{p}$ has influence

$[p-\\mathbf{1}_{\\{x\\le q_{p}\\}}]/f(q_{p})$

under a unique quantile and positive continuous density there. If density vanishes, the quantile rate and bootstrap can change. The sample maximum is not a smooth functional in this sense; its limit depends on tail behavior and the ordinary bootstrap maximum cannot exceed the observed maximum.

Bootstrap validity is a theorem about the conditional distribution of a resampled statistic. It is not guaranteed by running many replicates. Resample independent units, clusters, blocks, PSUs, or residual innovations according to the data-generating structure. Repeat transformations, imputation, bandwidth selection, and model selection when the target is the full algorithm. A confidence interval conditional on a frozen selected model answers a narrower question.

<a id="section-278-14-missingness-and-weighting-as-identification"></a>
## 14. Missingness and weighting as identification {#section-280-14-missingness-and-weighting-as-identification}

Let $R$ indicate whether outcome $Y$ is observed. Missing completely at random asserts $R$ independent of $(Y,X)$, usually too strong. Missing at random asserts $R$ independent of $Y$ conditional on recorded $X$. This is an identification condition paired with positivity $\\mathbb{P}(R=1 \\mid X)>0$ on target support.

If response probability $\\pi (X)=\\mathbb{P}(R=1 \\mid X)$ is known,

$\\mathbb{E}[RY/\\pi (X)]=\\mathbb{E}[\\mathbb{E}(RY/\\pi (X) \\mid X,Y)]=\\mathbb{E}[Y]$

under conditional independence. Estimated inverse-probability weights can be unstable near zero. Weight truncation changes bias and variance. A response model cannot be validated against missing $Y$; sensitivity parameters are necessary for departures not encoded in $X$.

An augmented estimator combines an outcome regression $m(X)$ with weighting:

$\\hat{\\mu }=n^{-1}\\sum_{i}[\\hat{m}(X_{i})+R_{i}{Y_{i}-\\hat{m}(X_{i})}/\\hat{\\pi }(X_{i})]$.

Under suitable cross-fitting, rates, positivity, and empirical-process conditions, it can be consistent if either the response model or outcome model is correct—hence “doubly robust.” The label does not protect against both being wrong, severe positivity failure, measurement error, or a target population absent from data.

Survey nonresponse adds this observation layer after design selection. The full weight may combine inverse inclusion and response probabilities, with variance reflecting estimation and clustering.

<a id="section-296-15-decision-targets-and-proper-scores"></a>
## 15. Decision targets and proper scores {#section-298-15-decision-targets-and-proper-scores}

Inference about a parameter and selection of a decision are distinct. A point forecast minimizes expected loss under the predictive distribution. With finite second moment, squared loss selects the conditional mean; with finite absolute moment, absolute loss selects a conditional median and asymmetric absolute loss selects a quantile. Without these integrability conditions, all candidate risks can be infinite. A classifier threshold depends on relative costs and prevalence, not AUC alone.

A scoring rule $S(Q,y)$ is proper when, under every true law $P$, reporting $Q=P$ minimises $E_P[S(Q,Y)]$ if $S$ is a loss (or maximises it if the sign convention makes $S$ a reward). It is strictly proper when equality is unique up to equality of distributions. Negative log score evaluates predictive density but heavily penalises assigning tiny probability to realised outcomes. Brier loss evaluates binary probabilities. Marginal calibration alone is not sufficient for an honest predictive distribution; proper scores compare calibration and sharpness together.

Survey weights may be needed to evaluate a target population rather than the observed sample. Time and spatial predictions require evaluation over the intended horizon and geometry. Censored-outcome scores often require censoring weights or pseudo-observations and inherit their assumptions. A scalar score does not reveal subgroup or tail failures.

<a id="section-304-16-small-sample-and-boundary-diagnostics"></a>
## 16. Small-sample and boundary diagnostics {#section-306-16-small-sample-and-boundary-diagnostics}

Asymptotic approximations become fragile when effective information is small:

- few survey PSUs, even with many people per PSU;
- few outcome events in a binary or survival model;
- few independent temporal regimes or spatial clusters;
- nearly separated logistic data;
- covariance eigenvalues near zero or tied;
- nuisance parameters on a boundary;
- censoring weights near infinity;
- smoothing bandwidth selected at an endpoint.

Diagnose the information unit, condition number, leverage, weight distribution, and profile likelihood. Exact randomization or conditional methods can help when their design hypotheses hold. Penalization stabilizes an estimator but changes its sampling distribution. Parametric bootstrap can emulate a fitted boundary model but is only as credible as that model. Honest reporting sometimes ends with a wide interval or a set of compatible conclusions.

<a id="section-319-17-model-checking-and-the-double-use-of-data"></a>
## 17. Model checking and the double use of data {#section-321-17-model-checking-and-the-double-use-of-data}

A fitted model makes claims about distributions of observables, residuals, or replicated statistics. A diagnostic chooses a discrepancy $T(y,\\theta )$ and asks whether the observed value is unusual relative to the fitted model. Useful discrepancies target assumptions that matter: link shape, conditional variance, tail behavior, autocorrelation, proportional hazards, or spatial residual pattern.

Raw residual $y_{i}-\\hat{\\mu }_{i}$ has variance depending on the mean in a GLM. Pearson residual divides by the modeled standard deviation. Deviance residual apportions likelihood deviance with a sign. Randomized quantile residuals can map discrete fitted distributions onto a continuous reference by adding controlled randomization within probability jumps. None becomes iid standard normal merely by its name; parameter fitting, leverage, and dependence alter the reference.

Plotting residuals against a predictor used to fit the model can reveal systematic shape but has built-in dependence. A smooth residual trend should be compared with uncertainty that repeats fitting. In time series, inspect residual autocorrelation and forecast errors by origin. In survival analysis, martingale residuals diagnose functional form imperfectly, while scaled Schoenfeld residuals target proportionality. In spatial models, map residuals and compute held-out variograms rather than declaring a covariance fitted because its training variogram looks close.

Using the same data to discover and test a feature makes a nominal p-value optimistic. There are several honest targets:

- exploratory checks, clearly labeled and followed by new confirmation;
- posterior predictive checks, whose p-values are not generally uniform because data inform the posterior, although special known-parameter or pivotal cases can be uniform;
- parametric-bootstrap checks, which simulate and refit under a fitted null;
- split-sample checks, which reserve data for a frozen diagnostic;
- simultaneous checks over a predeclared discrepancy family.

A model can pass low-power checks and still be wrong. The aim is not to certify truth but to find consequential incompatibilities and quantify sensitivity.

<a id="section-337-18-survey-weighted-models-and-targets"></a>
## 18. Survey-weighted models and targets {#section-339-18-survey-weighted-models-and-targets}

Regression with survey data raises two distinct goals. A finite-population descriptive coefficient minimizes a declared loss over the actual population; squared-error and negative-log-likelihood targets need not coincide. A superpopulation parameter describes a stochastic model from which population units are imagined drawn. A conditional model can be correctly specified even when unweighted estimation is consistent under informative sampling given covariates; otherwise sampling weights may be required.

The pseudo-log-likelihood

$ℓ_{w}(\\beta )=\\sum_{i\\in s} w_{i} \\log f(y_{i} \\mid x_{i};\\beta )$

uses survey weights, often normalized for numerical convention. Its optimizer solves a weighted score. Treating $w_{i}$ as frequency replication in ordinary likelihood software generally gives the wrong variance because it omits sampling stages and weight estimation. Design-based sandwich or replicate variance uses PSU-level score totals.

Weighting can increase variance. If selection variables are fully included and the outcome model is correct, an efficient model-based estimator may differ from a design-robust weighted one. Compare targets and sensitivity rather than choosing whichever interval is narrower. Calibration weights can improve covariate balance for a population target, but extreme weights indicate positivity or frame problems.

For prediction, ask where loss is averaged. Unweighted cross-validation estimates performance in the observed sample distribution. Weighted validation can target the represented population if weights and outcome observation are valid. Cluster and stratified splits still matter; weights do not create independence.

<a id="section-351-19-reproducible-numerical-inference"></a>
## 19. Reproducible numerical inference {#section-353-19-reproducible-numerical-inference}

Numerical error is a fourth uncertainty layer alongside sampling, model, and measurement error. Record parameterization, convergence criterion, initialization, scaling, and random seed. A status code saying “converged” usually means a local numerical criterion, not global identifiability or a valid standard error.

For log likelihoods, use log-sum-exp identities and avoid probabilities rounded to zero. For positive-definite systems, solve factorizations rather than form matrix inverses. A covariance matrix with a tiny negative eigenvalue can reflect roundoff or an invalid model; diagnose scale before silently clipping. Report condition numbers and regularization.

Simulation-based uncertainty needs an error budget. If a Monte Carlo estimate is an average of independent draws with variance $v$, its computational standard error is $\\sqrt{v/M}$. Markov-chain draws require autocorrelation adjustment and convergence diagnostics across chains. A bootstrap quantile with only a few hundred replicates cannot support many decimal places in a tail.

Reproduce the entire claimed procedure: survey replicate weights, selection, imputation, smoothing, validation folds, and censoring adjustments. Unit tests should include analytic cases, boundary inputs, invariance checks, and malformed-data rejection. A visual plot is not a numerical test; publish exact or adequately precise tables alongside it.

<a id="section-361-solved-reference-exercises"></a>
## Solved reference exercises {#section-363-solved-reference-exercises}

**1. Design covariance.** Under SRSWOR of one unit from two, show that inclusion indicators are negatively correlated.

**Solution.** Each $\\pi_{i}=1/2$, while $\\pi_{12}=0$ because both cannot appear. Thus $\\operatorname{Cov}(I_{1},I_{2})=0-1/4=-1/4$. Independent-row variance calculations ignore precisely this design dependence.

**2. Logistic information.** With an intercept-only Bernoulli model and a finite fitted coefficient, show observed information is $np(1-p)$ at fitted probability $p$.

**Solution.** $X$ is an $n$-vector of ones and $W=p(1-p)I$, so $X^{T}WX=np(1-p)$. If all outcomes are zero or all are one, no finite unpenalised logistic MLE exists; along the separating sequence $p$ approaches 0 or 1 and the information approaches zero.

**3. Kriging one observation.** A zero-mean field has variance 4. One observation at $s_{1}$ has covariance 3 with target $s_{0}$. Find the best linear coefficient and prediction variance.

**Solution.** $K=[4]$, $k_{0}=[3]$, so coefficient is $3/4$. Error variance is $4-3^{2}/4=7/4$. This assumes covariance is known and ignores measurement error unless already included in $K$.

**4. Exact versus asymptotic logistic inference.** A fitted logistic regression has full-rank design and a finite maximiser. Does that make a Wald interval exactly calibrated at finite $n$?

**Solution.** No. Full rank and finite maximisation settle parts of identification and computation. Ordinary Wald calibration additionally uses a large-sample normal approximation, consistent covariance estimation, and regular interior information. Separation, sparse cells, leverage, or weak information can make that approximation poor even though a finite optimiser was returned.

**5. Design and response layers.** A unit has survey inclusion probability $0.2$ and conditional response probability $0.5$. Under a correctly recorded design and a credible conditionally ignorable response model, what inverse weight represents it? What does that number not prove?

**Solution.** The observed-inclusion probability factors as $0.2(0.5)=0.1$, giving inverse weight $10$. The arithmetic does not prove response ignorability, frame coverage, positivity outside the observed covariate support, correct measurement, or a causal interpretation.

**6. Posterior action versus sampling guarantee.** A posterior mean minimises posterior squared loss. Does that fact imply an unbiased estimator or a confidence interval with nominal fixed-state coverage?

**Solution.** No. Posterior optimality averages loss under the posterior induced by a prior and likelihood. Unbiasedness and confidence coverage average over repeated samples at fixed parameter states. Either sampling property can be evaluated for the Bayes rule, but it needs a separate theorem and does not follow from posterior loss minimisation.

<a id="section-387-current-reading-route"></a>
## Current reading route {#section-389-current-reading-route}

The [reader guide](advanced-statistical-inference-reference/front-matter/reader-guide.md) lists the nineteen main chapters and retained earlier companions. The [boundary map](advanced-statistical-inference-reference/front-matter/boundary-map.md) is front matter. Four newly authored chapters address semiparametric efficiency, smoothing, spectral inference and high-dimensional inference. All nineteen main chapters now meet the authoring scope with worked examples and staged full solutions.
`;export{e as default};