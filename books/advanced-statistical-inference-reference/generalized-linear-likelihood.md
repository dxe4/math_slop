
# Generalised Linear Likelihood

This chapter develops likelihood inference for exponential dispersion families and generalized linear models. We state regularity conditions precisely, derive the score and information, examine the special structure of logistic regression, and discuss what happens at boundaries and under separation.

## Exponential dispersion families

A family of distributions is an *exponential dispersion family* if its density or mass function has the form

$$f(y;\theta,\varphi)=\exp\Bigl\{\frac{y\theta-b(\theta)}{a(\varphi)}+c(y,\varphi)\Bigr\}$$

for functions $a$, $b$, $c$ and parameters $\theta$ (canonical parameter) and $\varphi$ (dispersion). Standard examples include:

- **Normal:** $b(\theta)=\theta^{2}/2$, $a(\varphi)=\sigma^{2}$
- **Poisson:** $b(\theta)=e^{\theta}$, $a(\varphi)=1$
- **Bernoulli:** $b(\theta)=\log(1+e^{\theta})$, $a(\varphi)=1$
- **Gamma:** $b(\theta)=-\log(-\theta)$, $a(\varphi)=1/\nu$

### Mean and variance structure

Differentiating the log-likelihood with respect to $\theta$ and using the identity $\mathbb{E}[\partial\log f/\partial\theta]=0$ gives

$$\mu=\mathbb{E}[Y]=b'(\theta),\qquad \operatorname{Var}(Y)=a(\varphi)b''(\theta)=a(\varphi)V(\mu),$$

where $V(\mu)=b''(\theta)$ is the *variance function*. For the Bernoulli, $V(\mu)=\mu(1-\mu)$; for Poisson, $V(\mu)=\mu$.

## Generalized linear models

A GLM links the mean $\mu_{i}$ to a linear predictor $\eta_{i}=x_{i}^{T}\beta$ through a link function $g$:

$$g(\mu_{i})=\eta_{i}=x_{i}^{T}\beta.$$

The canonical link sets $g=b'^{-1}$, so that $\theta_{i}=\eta_{i}$. For logistic regression, the canonical link is the logit: $g(\mu)=\log[\mu/(1-\mu)]$.

### Score and information

For independent observations, the log-likelihood is

$$\ell(\beta)=\sum_{i=1}^{n}\Bigl\{\frac{y_{i}\theta_{i}-b(\theta_{i})}{a_{i}(\varphi)}+c(y_{i},\varphi)\Bigr\}.$$

Using the chain rule $\partial\theta_{i}/\partial\beta=(d\theta_{i}/d\mu_{i})(d\mu_{i}/d\eta_{i})x_{i}$ and $d\theta_{i}/d\mu_{i}=1/V(\mu_{i})$, the score is

$$U(\beta)=\sum_{i=1}^{n}\frac{(y_{i}-\mu_{i})}{a_{i}(\varphi)V(\mu_{i})}\cdot\frac{d\mu_{i}}{d\eta_{i}}\cdot x_{i}.$$

The expected information is

$$I(\beta)=\mathbb{E}[-\partial^{2}\ell/\partial\beta\partial\beta^{T}]=\sum_{i=1}^{n}\frac{1}{a_{i}(\varphi)V(\mu_{i})}\Bigl(\frac{d\mu_{i}}{d\eta_{i}}\Bigr)^{2}x_{i}x_{i}^{T}.$$

Fisher scoring uses $I(\beta)$ in Newton's method, leading to *iteratively reweighted least squares* with working weights

$$w_{i}=\frac{1}{a_{i}(\varphi)V(\mu_{i})}\Bigl(\frac{d\mu_{i}}{d\eta_{i}}\Bigr)^{2}.$$

## Logistic regression: concavity and separation

For Bernoulli logistic regression with $Y_{i}\sim\text{Bernoulli}(p_{i})$ and $\text{logit}(p_{i})=x_{i}^{T}\beta$:

$$U(\beta)=X^{T}(y-p),\qquad H(\beta)=-X^{T}WX,$$

where $W=\operatorname{diag}\{p_{i}(1-p_{i})\}$. For any $v\in\mathbb{R}^{p}$,

$$v^{T}Hv=-(Xv)^{T}W(Xv)=-\sum_{i}p_{i}(1-p_{i})(x_{i}^{T}v)^{2}\le 0.$$

If $X$ has full column rank and every $p_{i}(1-p_{i})>0$, the Hessian is negative definite and the log-likelihood is *strictly concave*.

### Theorem 4.1 — Strict concavity of logistic log-likelihood

Assume $X$ is an $n\times p$ matrix with full column rank and $0<p_{i}<1$ for all $i$ at the candidate $\beta$. Then the logistic log-likelihood is strictly concave. Any finite maximizer is unique.

**Proof.** From the display above, $v^{T}Hv<0$ for all $v\neq 0$ because full rank ensures $Xv\neq 0$ and $p_{i}(1-p_{i})>0$ ensures the weighted sum is positive. A twice-differentiable function with negative definite Hessian everywhere is strictly concave. ∎

However, strict concavity does *not* guarantee existence of a finite maximizer. *Complete separation* occurs when there exists $\beta\neq 0$ such that $y_{i}=1$ implies $x_{i}^{T}\beta>0$ and $y_{i}=0$ implies $x_{i}^{T}\beta<0$. Along the ray $c\beta$ as $c\to\infty$, the likelihood increases monotonically to a supremum of $0$ (likelihood $1$) but no finite maximizer exists. *Quasi-complete separation* is the analogous phenomenon with ties on the boundary.

## Likelihood-ratio, score, and Wald tests

For testing $H_{0}:\beta_{2}=0$ where $\beta=(\beta_{1},\beta_{2})$, three standard tests are:

- **Likelihood-ratio:** $\text{LR}=2[\ell(\hat{\beta})-\ell(\tilde{\beta})]$, where $\tilde{\beta}$ is the restricted MLE.
- **Score:** $\text{SC}=U(\tilde{\beta})^{T}I(\tilde{\beta})^{-1}U(\tilde{\beta})$.
- **Wald:** $\text{W}=\hat{\beta}_{2}^{T}[\widehat{\operatorname{Var}}(\hat{\beta}_{2})]^{-1}\hat{\beta}_{2}$.

The interior chi-square conclusion additionally needs a fixed-dimensional score central limit theorem, stable positive information and local quadratic likelihood control, with consistent tight fitted roots. The bounded-design logistic theorem below proves these conditions and the resulting equivalence in one complete experiment.

### First-order equivalence and practical divergence

The three tests are first-order equivalent: their difference is $o_{p}(1)$ under $H_{0}$. But they can differ materially:

- At boundaries, each test needs its own nonregular reference theorem; the interior chi-square argument below no longer applies automatically.
- With weak information (rare events, small samples), the Wald test can have inflated Type I error because it uses the unrestricted variance estimate.
- The score test need not fit the unrestricted alternative, but a searched collection of score tests still requires its declared multiplicity procedure.

## Worked example: logistic regression information

Consider an intercept-only logistic model with $n$ trials and $k$ successes. The MLE is $\hat{\beta}_{0}=\log[k/(n-k)]$, and $\hat{p}=k/n$.

**Step 1: Score.** $U(\beta_{0})=k-np$ where $p=e^{\beta_{0}}/(1+e^{\beta_{0}})$. At the MLE, $U(\hat{\beta}_{0})=0$.

**Step 2: Observed information.** $J(\beta_{0})=np(1-p)$. At the MLE, $J(\hat{\beta}_{0})=n\hat{p}(1-\hat{p})$.

**Step 3: Wald interval.** The $95\%$ Wald interval for $\beta_{0}$ is

$$\hat{\beta}_{0}\pm 1.96\sqrt{\frac{1}{n\hat{p}(1-\hat{p})}}.$$

For $n=20$, $k=2$, $\hat{p}=0.1$: $\hat{\beta}_{0}=\log(1/9)\approx -2.197$, and the standard error is $\sqrt{1/(20\cdot 0.1\cdot 0.9)}=\sqrt{1/1.8}\approx 0.745$. The interval is $-2.197\pm 1.96\cdot 0.745=(-3.66,-0.73)$. Transforming to the $p$ scale by the inverse logit gives $(0.025,0.32)$. The exact binomial interval has different endpoints. Comparing two intervals for one observed count does not establish either procedure’s repeated-sampling coverage; that is a property of its full rule over possible counts.

## Common errors and misconceptions

- **Assuming full rank guarantees a finite MLE.** Full rank ensures strict concavity but not boundedness. Always check for separation, especially with many covariates or rare outcomes.

- **Using Wald tests near boundaries.** When a parameter is near or on a boundary, the Wald statistic does not have a $\chi^{2}$ distribution. A likelihood-ratio or score statistic also needs the appropriate boundary law; changing statistic alone does not restore the interior theorem.

- **Confusing penalized estimates with MLEs.** Firth's bias-reduced logistic regression adds a Jeffreys prior penalty. The resulting estimate is not the MLE, and its standard errors must account for the penalty.

- **Treating GLM coefficients as causal.** A GLM coefficient measures association conditional on the model and covariates. It does not identify a causal effect without additional assumptions.

## A complete bounded-design logistic likelihood limit

Fix coefficient dimension and a finite true coefficient vector. Let independent Bernoulli outcomes have logistic probabilities at deterministic covariate rows whose norms are uniformly bounded. Assume normalised Fisher information at the true parameter converges to a positive-definite matrix $I$.

The score divided by square root of sample size is a sum of independent centred bounded vectors. Its covariance converges to $I$, and the largest normalised summand tends to zero. The triangular-array Lindeberg theorem therefore gives its Gaussian limit.

Taylor expansion of the log likelihood on a local coefficient displacement $h/\sqrt n$ gives
$$
\ell_n(\beta_0+h/\sqrt n)-\ell_n(\beta_0)
=h^TZ_n-\tfrac12h^TIh+o_p(1)
$$
uniformly for bounded $h$. Logistic third derivatives are bounded by a constant times the cubed covariate norm; summing the Taylor remainder makes it order the inverse square root of sample size on each bounded local ball. Information convergence supplies the quadratic term.

We can also prove existence and tightness of the maximiser with probability tending to one. On an event where the score norm is bounded, choose a sufficiently large local radius. Positive information makes the negative quadratic term dominate the linear term uniformly on that sphere, so likelihood there is below its value at the true parameter.

Concavity then prevents any better value outside the sphere: along a ray, the secant slope beyond a lower boundary value cannot turn upward. The same uniform drop gives coercivity beyond that sphere. Continuity therefore gives a finite maximiser inside it, and full rank plus the positive logistic weights gives uniqueness.

Increasing the score-bound event and radius makes this conclusion arbitrarily probable. Thus the maximiser is root-sample-size tight and consistent. The score’s segment expansion then gives local coefficient limit $I^{-1}Z$, where $Z$ has covariance $I$.

This establishes the whole regular likelihood experiment, rather than assuming full rank alone prevents separation. Finite samples can still be separated; the theorem makes their problematic occurrence vanish under its bounded-design, stable-information regime.

## Linear constraints turn the limit into a projection

Test a fixed full-row-rank constraint $R\beta=r$ satisfied by the true parameter. Its local null space is the kernel of $R$. The limiting likelihood is a strictly concave quadratic in the local displacement.

Completing that square gives unrestricted maximiser $I^{-1}Z$. A Lagrange multiplier for the constraint subtracts its information-metric projection onto the constrained directions. The resulting twice-maximised likelihood gap is
$$
(RI^{-1}Z)^T(RI^{-1}R^T)^{-1}(RI^{-1}Z).
$$
The inner vector is centred Gaussian with the covariance matrix being inverted, so the limit is chi-square with rank of the constraint degrees of freedom.

The Wald statistic uses the same fitted-coefficient expansion and consistent information estimate, so it has that same first-order quadratic. The restricted score uses the nuisance-adjusted information, the Schur complement of the nuisance block, and gives the same expression.

Thus their differences vanish in probability under the null in this declared regular experiment. This is a first-order statement, not an assertion that all three finite-sample numbers or their confidence regions coincide.

For a scalar tested coefficient, nuisance adjustment is particularly visible: the score variance is its information entry minus the target–nuisance cross term times the inverse nuisance block. Using only the target diagonal entry would overstate information when nuisance is correlated with that score.

## Local alternatives quantify a power target

In the same bounded-design experiment, let the true coefficient differ from the null by a fixed vector divided by square root of sample size. Expanding the Bernoulli means makes the normalised null score’s mean converge to $Ih$, while its covariance still converges to $I$.

Bounded summands again satisfy Lindeberg, so the score has a shifted Gaussian limit. The constraint quadratic consequently becomes noncentral chi-square with parameter
$$
(Rh)^T(RI^{-1}R^T)^{-1}(Rh).
$$
This proves the local-power description by direct mean and variance calculations, without importing a general contiguity theorem.

It is a local alternative, not a universal approximation for large fixed effects or rare-event sequences. The covariate and information hypotheses remain the same, and the normalised displacement remains bounded.

## A scoring direction is not a global convergence theorem

When expected information is positive definite and the score is nonzero, its inverse times the score is an ascent direction: its inner product with the score is strictly positive. Differentiability therefore makes a sufficiently small positive step increase likelihood.

This justifies a line-search interpretation of Fisher scoring locally. It does not show that every full unit step increases likelihood, that a maximum exists under separation, or that a stopping point answers the desired inferential question.

For a canonical Bernoulli model, observed and expected information agree, but strong curvature can still vary along a step. For a noncanonical link, the observed Hessian also contains residual-dependent terms, so Fisher scoring and literal Newton iteration are different algorithms.

A reproducible fitting description therefore states step control, parameter constraints and the criterion for approximate roots. The estimating-equation chapter explains how the resulting score tolerance must compare with the inference scale.

## Penalisation repairs one optimisation problem by changing it

Penalise every coefficient by a positive multiple of squared Euclidean norm. Logistic log likelihood is bounded above, and the negative quadratic penalty drives the penalised objective to minus infinity as coefficients diverge. Continuity gives a finite maximiser.

The penalty makes curvature strictly negative in every direction, so that maximiser is unique even for a rank-deficient design. This is a complete optimisation result for the stated fully penalised objective.

If the intercept is left unpenalised and all outcomes are zero, it can still diverge negatively while slopes remain bounded. The earlier coercivity proof no longer covers that direction. Which coefficients are penalised is therefore a mathematical hypothesis, not a cosmetic software option.

The penalised estimate targets a different criterion from unpenalised likelihood. Ordinary MLE information and likelihood-ratio references cannot be attached unchanged merely because the optimisation now returns a finite vector. Bias-reduced and Bayesian alternatives likewise need their own declared target and uncertainty calculation.

## Worked example: a rare-event sequence violates information stability

Take an intercept-only sequence whose Bernoulli success probability is reciprocal sample size. Its expected number of successes stays one. The probability of seeing no successes tends to the reciprocal of the natural exponential base.

On that nonvanishing event, the unpenalised logistic intercept has no finite MLE. Full design rank is present at every sample size, but normalised Fisher information tends to zero rather than a positive constant.

Thus the bounded-parameter stable-information theorem does not apply. Increasing the number of rows did not create increasing event information. The binomial count approaches a Poisson regime, which is a different asymptotic experiment from a fixed interior Bernoulli probability.

## Worked example: nuisance removes apparent information

For two coefficients and one tested coordinate, write information entries as $I_{11},I_{12},I_{22}$ with a positive-definite matrix. At the restricted MLE, the nuisance score vanishes.

The score statistic for the second coordinate is its squared remaining score divided by $I_{22}-I_{12}^2/I_{11}$. This is the reciprocal target block of the full inverse information, not simply the reciprocal of $I_{22}$.

A nonzero cross-information term makes the denominator smaller, reflecting uncertainty spent estimating nuisance. If the Schur complement approaches zero, the regular local contrast becomes weakly identified and the stable positive-information theorem again fails.

## Bernoulli information has a design-dependent ceiling

For independent logistic responses at a fixed parameter, the score is the sum of covariate vectors multiplied by centred binary outcomes. Distinct summands have zero covariance by independence. Each binary variance is p times one minus p, so the score covariance equals the design information matrix exactly, before any asymptotics. Since every such variance is at most one quarter, the information matrix is bounded above, in positive-semidefinite order, by one quarter of the unweighted design cross-product.

For a scalar contrast direction, this bound follows by multiplying each squared projected covariate by its binary variance and comparing term by term. There is no matching positive lower bound without controlling fitted probabilities away from zero and one and controlling design rank. A large number of nearly deterministic responses can therefore contribute little local information in a particular direction. The bounded-design limit theorem explicitly assumes a positive-definite limiting information matrix for this reason. Increasing numerical precision or switching between likelihood pivots does not establish that design condition.

## Practice exercises

### Exercise 4.1
<a id="generalized-linear-likelihood-legacy-4-1"></a>

For Poisson regression with log link, derive the score and information in matrix form.

<details><summary>Hint 1</summary>

Differentiate the canonical Poisson log likelihood.

</details>
<details><summary>Hint 2</summary>

Its mean derivative supplies the diagonal working weights.

</details>
<details><summary>Solution</summary>

With $\mu_{i}=e^{x_{i}^{T}\beta}$, $U(\beta)=\sum_{i}(y_{i}-\mu_{i})x_{i}=X^{T}(y-\mu)$. The Hessian is $H=-\sum_{i}\mu_{i}x_{i}x_{i}^{T}=-X^{T}WX$ where $W=\operatorname{diag}(\mu_{i})$. The expected information is $I(\beta)=X^{T}WX$. ∎

</details>

### Exercise 4.2
<a id="generalized-linear-likelihood-legacy-4-2"></a>

In the intercept-only logistic model with $n=10$ and $k=0$, show that no finite MLE exists and the observed information at any finite $\beta_{0}$ is at most $2.5$.

<details><summary>Hint 1</summary>

With no successes, every finite success probability is too large for the likelihood maximum.

</details>
<details><summary>Hint 2</summary>

The Bernoulli variance never exceeds one-quarter.

</details>
<details><summary>Solution</summary>

With $k=0$, the log-likelihood is $\ell(\beta_{0})=-n\log(1+e^{\beta_{0}})$, which increases monotonically as $\beta_{0}\to -\infty$. There is no finite maximizer. The observed information is $J(\beta_{0})=np(1-p)=10p(1-p)\le 10\cdot 0.25=2.5$, with equality at $p=0.5$. As $\beta_{0}\to -\infty$, $p\to 0$ and $J\to 0$. ∎

</details>

### Exercise 4.3
<a id="generalized-linear-likelihood-legacy-4-3"></a>

For a probit model, show that the log-likelihood is also strictly concave when $X$ has full column rank.

<details><summary>Hint 1</summary>

Write each contribution as log normal CDF at a signed predictor.

</details>
<details><summary>Hint 2</summary>

Show its second derivative is strictly negative before applying design full rank.

</details>
<details><summary>Solution</summary>

Put $s_i=2y_i-1\in\{-1,1\}$. The observed probit
log-likelihood is

$$\ell(\beta)=\sum_i h(s_i x_i^T\beta),\qquad h(t)=\log\Phi(t).$$

Writing $\lambda(t)=\phi(t)/\Phi(t)>0$ gives
$h''(t)=-\lambda(t)[t+\lambda(t)]$. The second factor is positive because

$$\phi(t)+t\Phi(t)=\int_{-\infty}^{t}\Phi(u)\,du>0,$$

so $t+\lambda(t)>0$ and $h''(t)<0$ for every finite $t$. Therefore

$$v^T\nabla^2\ell(\beta)v=\sum_i h''(s_i x_i^T\beta)(x_i^Tv)^2<0$$

for every $v\ne0$ when $X$ has full column rank. This proves strict
concavity of the observed log-likelihood. As in logistic regression, strict
concavity does not guarantee that a finite maximizer exists under separation. ∎

</details>


## Further exercises on local likelihood and fitting boundaries

### Exercise 4.4
<a id="generalized-linear-likelihood-ex-4"></a>

Why does full rank prove uniqueness only after a finite maximum exists?

<details><summary>Hint 1</summary>

It gives strictly negative curvature at finite coefficients.

</details>
<details><summary>Hint 2</summary>

A strictly concave function can approach an unattained supremum.

</details>
<details><summary>Solution</summary>

Logistic curvature is strictly negative for finite predictors under full rank, so two finite maxima cannot coexist. A separating ray can still increase likelihood toward its supremum at diverging coefficients. Concavity does not compactify the parameter space.

</details>

### Exercise 4.5
<a id="generalized-linear-likelihood-ex-5"></a>

Explain the local likelihood Taylor remainder in the bounded-design theorem.

<details><summary>Hint 1</summary>

Each third derivative has a uniform covariate-cube bound.

</details>
<details><summary>Hint 2</summary>

Displacements are order inverse square root of sample size.

</details>
<details><summary>Solution</summary>

Summing cubic displacement remainders gives order $n\,n^{-3/2}=n^{-1/2}$ on each bounded local ball. The fixed-dimensional bounded rows make that bound uniform. Information convergence and the score CLT then identify the local quadratic experiment.

</details>

### Exercise 4.6
<a id="generalized-linear-likelihood-ex-6"></a>

Why is nuisance information a Schur complement?

<details><summary>Hint 1</summary>

Optimise the local quadratic over nuisance directions.

</details>
<details><summary>Hint 2</summary>

Use its Lagrange equations or block inverse.

</details>
<details><summary>Solution</summary>

Profiling removes the score component explained by nuisance. The remaining target variance is $I_{22}-I_{21}I_{11}^{-1}I_{12}$. The full inverse target block is its inverse, which is why the restricted full-score expression agrees with the efficient-score statistic.

</details>

### Exercise 4.7
<a id="generalized-linear-likelihood-ex-7"></a>

Does a likelihood-ratio preference over Wald automatically repair a boundary problem?

<details><summary>Hint 1</summary>

The interior projection theorem has hypotheses.

</details>
<details><summary>Hint 2</summary>

A boundary changes its local feasible set.

</details>
<details><summary>Solution</summary>

No. At a boundary the local constraint can be a cone rather than a linear space, and a different reference law is required. Changing statistic does not prove that law. The checking chapter’s exact Gaussian half-mixture is one specific example.

</details>

### Exercise 4.8
<a id="generalized-linear-likelihood-ex-8"></a>

Prove full quadratic penalisation gives a unique finite logistic fit.

<details><summary>Hint 1</summary>

Likelihood is bounded above.

</details>
<details><summary>Hint 2</summary>

The penalty is coercive and strictly concave after subtraction.

</details>
<details><summary>Solution</summary>

The objective tends to minus infinity as norm grows and is continuous, so it attains a maximum. Its Hessian is the likelihood Hessian minus a positive multiple of identity, hence negative definite even along design null directions. The maximum is unique.

</details>

### Exercise 4.9
<a id="generalized-linear-likelihood-ex-9"></a>

Why does leaving an intercept unpenalised change that proof?

<details><summary>Hint 1</summary>

A diverging intercept can carry no penalty.

</details>
<details><summary>Hint 2</summary>

Use all-zero outcomes.

</details>
<details><summary>Solution</summary>

The log likelihood increases as the intercept tends to minus infinity, while fixed slopes and their penalty need not change. Coercivity fails in that unpenalised direction, so a finite maximum is not established by the fully penalised argument.

</details>

### Exercise 4.10
<a id="generalized-linear-likelihood-ex-10"></a>

Show why the rare-event intercept sequence is outside the ordinary root-sample-size theorem.

<details><summary>Hint 1</summary>

Its expected event count stays bounded.

</details>
<details><summary>Hint 2</summary>

Compute the no-event probability and normalised information.

</details>
<details><summary>Solution</summary>

The no-event probability is $(1-1/n)^n\to e^{-1}$, so finite-MLE failure does not vanish. Information divided by sample size is $p_n(1-p_n)\to0$. Both features violate the fixed interior stable-information experiment, despite full rank.

</details>

## Forward and backward connections

This chapter applied the estimating-equations framework from *Estimating Equations and Sandwich Limits* to the specific case of exponential dispersion families, where the information equality simplifies the sandwich. In *Empirical Distributions and Ranks*, we step outside parametric likelihoods and examine nonparametric estimation and distribution-free procedures. In *Robust Functionals*, we consider estimators that sacrifice likelihood efficiency for resistance to distributional contamination.

## Summary

Exponential-family scores connect GLMs to estimating equations, but existence, local information and algorithmic convergence are separate questions. A bounded-design fixed-parameter logistic experiment proves the score limit, finite-MLE tightness and the common local projection behind LR, score and Wald tests. Rare-event, boundary and penalised problems require explicitly changed targets or reference laws.
