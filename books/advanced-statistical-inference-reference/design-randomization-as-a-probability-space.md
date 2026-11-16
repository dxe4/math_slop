
# Design-based Estimation

This chapter establishes the probability foundations of finite-population sampling. Every design-based inference statement is an expectation or variance over repeated samples from a fixed population. The probability space is not a superpopulation model; it is induced by the randomization mechanism that selects units.

## The finite-population setup

Let $U_{N}=\{1,\dots,N\}$ denote a finite population of $N$ identifiable units. Associated with unit $i$ is a fixed value $y_{i}$, which is not random. A *sample design* is a probability distribution $p_{N}(\cdot)$ over a collection $\mathcal{S}$ of allowable subsets $s\subseteq U_{N}$. The *sample* $s$ is the random object; the values $\{y_{i}\}$ are fixed.

Define the sample-membership indicator

$$I_{i}(s)=\mathbf{1}_{\{i\in s\}}.$$

The *first-order inclusion probability* is

$$\pi_{i}=\mathbb{E}_{d}[I_{i}]=\sum_{s\ni i}p_{N}(s),$$

and the *second-order inclusion probability* is

$$\pi_{ij}=\mathbb{E}_{d}[I_{i}I_{j}]=\sum_{s\ni i,j}p_{N}(s).$$

The subscript $d$ on $\mathbb{E}_{d}$ emphasizes that the expectation is over the design, not over a hypothetical data-generating model. This distinction is not pedantic: design-based and model-based variances can differ materially, and mixing the two without declaration is a common source of confusion.

## Horvitz–Thompson estimation

### Theorem 1.1 — Horvitz–Thompson unbiasedness

Assume $\pi_{i}>0$ for every $i\in U_{N}$. The Horvitz–Thompson estimator of the population total $Y_{N}=\sum_{i=1}^{N}y_{i}$ is

$$\hat{Y}_{HT}=\sum_{i\in s}\frac{y_{i}}{\pi_{i}}=\sum_{i=1}^{N}I_{i}\frac{y_{i}}{\pi_{i}}.$$

Then $\mathbb{E}_{d}(\hat{Y}_{HT})=Y_{N}$.

**Proof.** Because $N$ is finite, all sums are absolutely convergent and rearrangement is permitted:

$$\mathbb{E}_{d}(\hat{Y}_{HT})=\sum_{i=1}^{N}\frac{y_{i}}{\pi_{i}}\mathbb{E}_{d}(I_{i})=\sum_{i=1}^{N}\frac{y_{i}}{\pi_{i}}\pi_{i}=\sum_{i=1}^{N}y_{i}=Y_{N}.$$

The positivity hypothesis is structural: if $\pi_{i}=0$, the term $y_{i}/\pi_{i}$ is undefined, and no randomization average can observe $y_{i}$. ∎

### Proposition 1.2 — Variance of the HT estimator

Let $\Delta_{ij}=\pi_{ij}-\pi_{i}\pi_{j}=\operatorname{Cov}_{d}(I_{i},I_{j})$. Then

$$\operatorname{Var}_{d}(\hat{Y}_{HT})=\sum_{i=1}^{N}\sum_{j=1}^{N}\Delta_{ij}\frac{y_{i}y_{j}}{\pi_{i}\pi_{j}}.$$

**Proof.** Write $\hat{Y}_{HT}=\sum_{i}I_{i}y_{i}/\pi_{i}$ and expand the variance of a sum:

$$\operatorname{Var}_{d}(\hat{Y}_{HT})=\sum_{i}\sum_{j}\frac{y_{i}y_{j}}{\pi_{i}\pi_{j}}\operatorname{Cov}_{d}(I_{i},I_{j})=\sum_{i}\sum_{j}\Delta_{ij}\frac{y_{i}y_{j}}{\pi_{i}\pi_{j}}.$$

∎

For designs with fixed sample size $n$, the indicators satisfy $\sum_{i}I_{i}=n$ almost surely. Taking variances of both sides gives $\sum_{i}\sum_{j}\Delta_{ij}=0$. This constraint implies that the $\Delta_{ij}$ cannot all be positive; negative covariances are a feature, not a bug, of fixed-size designs.

### Sen–Yates–Grundy form

When $\pi_{ij}>0$ for all $i\neq j$ and the design has fixed size $n$, an algebraically equivalent expression is

$$\operatorname{Var}_{d}(\hat{Y}_{HT})=-\frac{1}{2}\sum_{i=1}^{N}\sum_{j=1}^{N}\Delta_{ij}\Bigl(\frac{y_{i}}{\pi_{i}}-\frac{y_{j}}{\pi_{j}}\Bigr)^{2}.$$

**Proof sketch.** Expand the square and use $\sum_{j}\Delta_{ij}=0$ for fixed-size designs to show equivalence with Proposition 1.2. The negative sign is consistent because $\Delta_{ij}\le 0$ for many standard designs. ∎

A variance *estimator* must be able to estimate every term that appears in the population variance formula. If $\pi_{ij}=0$ for some pair $(i,j)$, the corresponding term in the variance cannot be recovered from the sample without additional assumptions.

## Simple random sampling without replacement

For SRSWOR of size $n$ from $N$, every subset of size $n$ has probability $1/\binom{N}{n}$. Then

$$\pi_{i}=\frac{n}{N},\qquad \pi_{ij}=\frac{n(n-1)}{N(N-1)}\quad(i\neq j).$$

The population mean is $\bar{Y}_{N}=Y_{N}/N$ and the population variance is

$$S_{N}^{2}=\frac{1}{N-1}\sum_{i=1}^{N}(y_{i}-\bar{Y}_{N})^{2}.$$

### Corollary 1.3 — SRSWOR variance

For SRSWOR, the sample mean $\bar{y}_{s}=n^{-1}\sum_{i\in s}y_{i}$ satisfies

$$\operatorname{Var}_{d}(\bar{y}_{s})=\frac{1-f}{n}S_{N}^{2},\qquad f=\frac{n}{N}.$$

**Proof.** Apply Proposition 1.2 with $\pi_{i}=n/N$ and $\Delta_{ij}=-n(N-n)/[N^{2}(N-1)]$ for $i\neq j$. After simplification,

$$\operatorname{Var}_{d}(\bar{y}_{s})=\frac{N-n}{Nn}\cdot\frac{1}{N-1}\sum_{i=1}^{N}(y_{i}-\bar{Y}_{N})^{2}=\frac{1-f}{n}S_{N}^{2}.$$

∎

The factor $1-f$ is the *finite-population correction*. It reflects that sampling without replacement reduces variability relative to sampling with replacement. When $f$ is small, $1-f\approx 1$ and the SRSWOR variance approaches the iid variance; but the result is exact for any $f$, not an approximation.

## Worked example: HT variance under SRSWOR

Consider a population of $N=5$ units with values $y=(10,20,30,40,50)$. We draw an SRSWOR of size $n=2$.

**Step 1: Population quantities.**

$$Y_{N}=150,\qquad \bar{Y}_{N}=30,\qquad S_{N}^{2}=\frac{1}{4}\bigl[(10-30)^{2}+\dots+(50-30)^{2}\bigr]=250.$$

**Step 2: Variance of the sample mean.**

$$\operatorname{Var}_{d}(\bar{y}_{s})=\frac{1-2/5}{2}\cdot 250=\frac{3}{10}\cdot 250=75.$$

**Step 3: Verification by enumeration.** There are $\binom{5}{2}=10$ possible samples, each with probability $1/10$. The sample means are $15,20,25,25,30,30,35,35,40,45$, each occurring once. Their average is $30$, confirming unbiasedness. Their variance is

$$\frac{1}{10}\sum_{s}(\bar{y}_{s}-30)^{2}=\frac{1}{10}\bigl[225+100+25+25+0+0+25+25+100+225\bigr]=75.$$

The enumeration matches the formula exactly.

## Common errors and misconceptions

- **Confusing design-based and model-based variance.** The formula $\operatorname{Var}_{d}(\bar{y}_{s})=(1-f)S_{N}^{2}/n$ is exact under repeated SRSWOR from a fixed population. It is not an estimate of a superpopulation variance; it *is* the variance.

- **Ignoring the finite-population correction.** When $n$ is a substantial fraction of $N$, using $S_{N}^{2}/n$ instead of $(1-f)S_{N}^{2}/n$ overstates the variance. In a census ($n=N$), the correction gives variance zero, which is correct: there is no randomness left.

- **Assuming positive $\pi_{ij}$ without checking.** Systematic sampling, for example, can have $\pi_{ij}=0$ for some pairs. Plugging a variance estimator that requires $\pi_{ij}>0$ into such a design produces bias.

- **Treating $S_{N}^{2}$ as known.** In practice $S_{N}^{2}$ must be estimated from the sample. The usual unbiased estimator under SRSWOR is $s^{2}=(n-1)^{-1}\sum_{i\in s}(y_{i}-\bar{y}_{s})^{2}$, which satisfies $\mathbb{E}_{d}(s^{2})=S_{N}^{2}$.

## Ratio and calibration estimation

When auxiliary information is available, design-based estimators can be modified to exploit it. The ratio estimator uses a known population total of an auxiliary variable. Calibration estimators generalize this idea by finding sample weights that reproduce known population totals while staying close to design weights.

### The ratio estimator

Suppose $X_{N}=\sum_{i=1}^{N}x_{i}\ne0$ is known, where $x_{i}$ is an auxiliary variable correlated with $y_{i}$, and restrict attention to samples for which $\hat X_{HT}\ne0$. The *ratio estimator* of $Y_{N}$ is

$$\hat{Y}_{R}=X_{N}\cdot\frac{\hat{Y}_{HT}}{\hat{X}_{HT}},$$

where $\hat{X}_{HT}=\sum_{i\in s}x_{i}/\pi_{i}$ is the Horvitz–Thompson estimator of $X_{N}$. The ratio estimator is nonlinear and generally biased under the design. Its appeal lies in variance reduction when $y_{i}$ is approximately proportional to $x_{i}$.

#### Linearization and approximate variance

Let $R_{N}=Y_{N}/X_{N}$ be the population ratio. A first-order Taylor expansion of $\hat{Y}_{R}$ around $(Y_{N},X_{N})$ gives

$$\hat{Y}_{R}-Y_{N}\approx (\hat{Y}_{HT}-Y_{N})-R_{N}(\hat{X}_{HT}-X_{N}).$$

The right-hand side is the HT estimator of the population total of the *residuals*

$$e_{i}=y_{i}-R_{N}x_{i}.$$

Hence the approximate design variance is

$$\operatorname{Var}_{d}(\hat{Y}_{R})\approx\operatorname{Var}_{d}\Bigl(\sum_{i\in s}\frac{e_{i}}{\pi_{i}}\Bigr)=\sum_{i}\sum_{j}\Delta_{ij}\frac{e_{i}e_{j}}{\pi_{i}\pi_{j}}.$$

This is the variance of an HT estimator for a transformed variable. When $y_{i}\approx R_{N}x_{i}$, the residuals are small and the ratio estimator has much smaller variance than the direct HT estimator of $Y_{N}$.

#### SRSWOR specialization

Under SRSWOR with $\pi_{i}=n/N$, the ratio estimator of the mean is $\bar{y}_{R}=\bar{Y}_{X}\cdot\bar{y}_{s}/\bar{x}_{s}$, where $\bar{Y}_{X}=X_{N}/N$. Its approximate variance is

$$\operatorname{Var}_{d}(\bar{y}_{R})\approx\frac{1-f}{n}\cdot\frac{1}{N-1}\sum_{i=1}^{N}(e_{i}-\bar{e}_{N})^{2}.$$

If $y_{i}=R_{N}x_{i}$ exactly for all $i$, the residuals vanish and the variance is zero. In practice, the variance is small when the points $(x_{i},y_{i})$ lie close to a line through the origin.

### Calibration estimation

Calibration weights solve a constrained optimisation: find weights $\{w_{i}\}_{i\in s}$ that minimize a distance to the base design weights $d_{i}=1/\pi_{i}$, subject to calibration constraints.

#### General formulation

Minimize $\sum_{i\in s}G_{i}(w_{i},d_{i})$ subject to

$$\sum_{i\in s}w_{i}x_{i}=X_{N},$$

where $x_{i}$ is a vector of auxiliary variables with known population total $X_{N}$. The function $G_{i}$ is a distance measure. Common choices include:

- **Generalized regression (GREG), chi-squared distance:**
  $G_i(w,d)=(w-d)^2/(2d)$ (or $(w-d)^2/(2dq_i)$ with declared positive
  scale $q_i$). Its first-order condition gives the linear adjustment
  $w_i=d_i(1+q_i x_i^T\lambda)$, whose domain must be restricted if positive
  weights are required.
- **Raking, entropy distance:** $G_i(w,d)=w\log(w/d)-w+d$ for $w>0$.
  Its first-order condition gives the multiplicative adjustment
  $w_i=d_i\exp(x_i^T\lambda)$. Marginal raking is an iterative way to solve
  these entropy calibration equations.
- **Bounded adjustments:** penalties or box constraints that prevent extreme weights.

#### Existence and uniqueness

Feasibility is necessary but by itself does not guarantee that an infimum is attained. A sufficient setup is a nonempty closed feasible set together with a continuous coercive objective (or a compact feasible set); entropy distances also require feasibility within their positive domain. Strict convexity of the summed objective on the feasible set makes the weight vector unique. Full rank of the calibration columns instead identifies the Lagrange multipliers and makes the usual closed-form systems nonsingular; redundant constraints can leave multipliers nonunique even when the weights are unique.

Extreme calibration weights are a diagnostic, not merely a numerical inconvenience. A weight of $100$ means one sampled unit represents $100$ population units; if that unit is unusual, the estimator becomes unstable. Truncation or bounding changes the target from the original calibration constraints to a constrained optimisation, introducing bias that must be acknowledged.

### Worked example: ratio estimation in a business survey

A business survey samples $n=100$ establishments from $N=1000$. Total employment $X_{N}=50000$ is known from a register. We want to estimate total wages $Y_{N}$.

**Step 1: Sample data.** The sample has $\sum_{i\in s}x_{i}=5200$ and $\sum_{i\in s}y_{i}=312000$. Under SRSWOR, $\pi_{i}=n/N=0.1$.

**Step 2: HT estimates.**

$$\hat{X}_{HT}=\frac{5200}{0.1}=52000,\qquad \hat{Y}_{HT}=\frac{312000}{0.1}=3120000.$$

**Step 3: Ratio estimate.**

$$\hat{Y}_{R}=50000\cdot\frac{3120000}{52000}=50000\cdot 60=3000000.$$

**Step 4: Approximate variance.** Suppose the sample residuals $e_{i}=y_{i}-\hat{R}x_{i}$ with $\hat{R}=60$ have sample variance $s_{e}^{2}=40000$. Then

$$\widehat{\operatorname{Var}}_{d}(\hat{Y}_{R})=N^{2}\cdot\frac{1-f}{n}\cdot s_{e}^{2}=10^{6}\cdot\frac{0.9}{100}\cdot 40000=3.6\times 10^{8}.$$

The standard error is $\sqrt{3.6\times 10^{8}}=18974$. If the direct HT estimator had $s_{y}^{2}=250000$, its standard error would be $\sqrt{10^{6}\cdot 0.9\cdot 250000/100}=47434$. The ratio estimator reduces the standard error by a factor of about $2.5$.

### Design consistency

Design consistency is an asymptotic property of a *sequence* of finite populations and designs. Consider a sequence indexed by $\nu\to\infty$ with population sizes $N_{\nu}\to\infty$, sample sizes $n_{\nu}\to\infty$, and designs $p_{N_{\nu}}$. An estimator $\hat{\theta}_{\nu}$ is *design consistent* for $\theta_{\nu}$ if

$$\lim_{\nu\to\infty}\mathbb{P}_{d}\bigl(|\hat{\theta}_{\nu}-\theta_{\nu}|>\varepsilon\bigr)=0\quad\text{for all }\varepsilon>0.$$

A useful consistency theorem must bound inclusion probabilities, moments, and dependence as $N_{\nu},n_{\nu}\to\infty$. The statement "the sample is large" without a sequence is not a proof. Key regularity conditions include:

1. $\pi_{i}^{(\nu)}\ge\delta>0$ for all $i$ and $\nu$.
2. $\max_{i}\sum_{j}|\Delta_{ij}^{(\nu)}|/\pi_{i}\pi_{j}=O(N_{\nu}/n_{\nu})$.
3. The population moments $\sum_{i}y_{i}^{4}/N_{\nu}$ are bounded.

### Common errors and misconceptions

- **Using the ratio estimator when the intercept matters.** The ratio estimator assumes the relationship passes through the origin. If $y_{i}\approx \beta_{0}+\beta_{1}x_{i}$ with $\beta_{0}\neq 0$, a regression estimator (difference estimator) is more appropriate.

- **Ignoring the bias of the ratio estimator.** The ratio estimator is biased in finite samples. The bias is $O(1/n)$ under standard conditions, so it is often negligible compared to the standard error, but this must be verified rather than assumed.

- **Treating calibration as a free lunch.** Calibration reduces variance only to the extent that the auxiliary variables explain variation in the target. Adding irrelevant calibrators increases variance by increasing the spread of weights without reducing residual variance.

- **Confusing design consistency with model consistency.** Design consistency averages over repeated samples from a fixed population sequence. Model consistency averages over repeated realizations from a superpopulation model. The conditions and interpretations differ.

The complete earlier reading and its original exercises remain available as [Ratio and calibration estimation](ratio-and-calibration-estimators.md).

## A ratio limit with an explicit second-order remainder

Consider a sequence of fixed populations and random designs. Normalise the two Horvitz–Thompson totals by population size, obtaining estimators $U_N,V_N$ for fixed population means $\mu_{y,N},\mu_{x,N}$. Assume the latter means converge to finite limits with the auxiliary limit nonzero.

Suppose a joint design central limit theorem holds for square-root-effective-sample-size errors of these two estimators, with limiting covariance matrix $\Sigma$. This is an explicit input: inclusion positivity or a large realised sample alone does not establish that theorem.

Let $R_N=\mu_{y,N}/\mu_{x,N}$. Exact algebra gives
$$
\frac{U_N}{V_N}-R_N
=\frac{(U_N-\mu_{y,N})-R_N(V_N-\mu_{x,N})}{V_N}.
$$
Subtract the same numerator divided by the fixed auxiliary mean. The remainder is
$$
-\frac{V_N-\mu_{x,N}}{\mu_{x,N}V_N}
\{(U_N-\mu_{y,N})-R_N(V_N-\mu_{x,N})\}.
$$
The joint limit makes both errors order inverse square root of effective sample size. The auxiliary mean stays away from zero, and its estimate does too with probability tending to one. Hence the remainder is order inverse sample size and disappears on the central-limit scale.

The ratio therefore has the Gaussian limit obtained by applying the gradient $(1/\mu_x,-R/\mu_x)$ to the joint limit. Multiplying by the known auxiliary total gives the corresponding total-estimator expansion. This proves the linearisation step, while honestly leaving the particular design central limit theorem among the assumptions.

The same expansion does not guarantee a small finite-sample bias without uniform integrability and denominator control. Rare near-zero estimated denominators can dominate expectations even when convergence in probability is well behaved.

## Quadratic calibration has a global solution

For vector auxiliaries, minimise the sum of squared weight deviations divided by twice their positive base weights, subject to matching the known auxiliary totals. Let the weighted auxiliary cross-product matrix be nonsingular.

The Lagrange equations give each calibrated weight as its base weight times one plus its auxiliary row paired with a multiplier. Solving the cross-product system determines that multiplier from the difference between known and base-weighted totals. Nonsingularity ensures every unconstrained total discrepancy is feasible.

This stationary point is the global unique minimiser, not merely a candidate. For any other feasible weight vector, its difference from the proposed weights has zero auxiliary totals. The linear term in the expanded quadratic objective is the multiplier paired with that zero discrepancy and therefore vanishes. The remaining term is a positive weighted sum of squared differences, strictly positive unless all weights agree.

Nothing in that proof constrains the weights to be nonnegative. Positive-weight calibration requires the target totals to lie in the appropriate cone, or in the sample auxiliary convex hull once an intercept total is fixed. If they do not, imposing positivity makes the problem infeasible rather than changing the algebraic solution imperceptibly.

## Worked example: exact calibration with negative weights

A population has four auxiliary values $1,2,-1,-2$, so its known count is four and its auxiliary total is zero. Suppose the sample contains only the first two units. Matching count and auxiliary total requires weights summing to four and a weighted auxiliary sum of zero.

Solving those two equations gives weights eight and minus four. No pair of positive weights can attain a zero weighted mean when both sampled auxiliary values are positive. The unbounded quadratic problem is feasible; the positive-weight problem is not.

If outcomes are exactly affine in the auxiliary throughout the population, those weights nevertheless reproduce the outcome total algebraically, because both auxiliary constraints are exact. That property does not make the negative weights stable under departures from the affine relationship.

## A variance can fail to have an unbiased observable estimator

Take two fixed units and select exactly one with equal probabilities. The Horvitz–Thompson total takes values twice either observed outcome, and its design variance is the squared difference of the two fixed outcomes.

Any statistic based on that sample is a function of the observed unit label and its one observed outcome. Its expectation is therefore the sum of one function of the first outcome and one function of the second, each with weight one-half.

No such additive expression equals the squared outcome difference for every pair. Evaluate its mixed finite difference at outcomes zero and one: every additive expression cancels to zero, while the squared-difference target gives minus two. This contradiction proves nonexistence of a design-unbiased variance estimator across the unrestricted finite populations.

The problem is that the design never observes both outcomes together. It is not remedied by knowing each unit’s positive inclusion probability. Pairwise observation, a structural outcome restriction or a deliberately conservative bound supplies different information and must be stated separately.

## Practice exercises

### Exercise 1.1
<a id="design-randomization-as-a-probability-space-legacy-1-1"></a>

Under SRSWOR of one unit from a population of two units with values $y_{1}$ and $y_{2}$, show that $\operatorname{Cov}_{d}(I_{1},I_{2})=-1/4$.

<details><summary>Hint 1</summary>

The two sample indicators can never both equal one.

</details>
<details><summary>Hint 2</summary>

Compute their joint expectation and subtract the product of their marginal expectations.

</details>
<details><summary>Solution</summary>

Each $\pi_{i}=1/2$. Both units cannot appear together in a sample of size $1$, so $\pi_{12}=0$. Hence $\Delta_{12}=0-(1/2)(1/2)=-1/4$. This negative covariance is the source of the finite-population correction. ∎

</details>

### Exercise 1.2
<a id="design-randomization-as-a-probability-space-legacy-1-2"></a>

Consider a population $U_{4}=\{1,2,3,4\}$ with $y=(4,8,12,16)$. For SRSWOR with $n=2$, compute exactly (a) $\mathbb{E}_{d}(\hat{Y}_{HT})$, (b) $\operatorname{Var}_{d}(\hat{Y}_{HT})$, and (c) verify (b) by enumerating all samples.

<details><summary>Hint 1</summary>

Use the exact SRSWOR finite-population correction and then list the six sample totals.

</details>
<details><summary>Hint 2</summary>

Design variance averages squared deviations over six equally likely samples, so its denominator is six.

</details>
<details><summary>Solution</summary>

(a) $\pi_{i}=2/4=1/2$ for all $i$, so $\hat{Y}_{HT}=2\sum_{i\in s}y_{i}$. Since $\bar{y}_{s}$ is unbiased for $\bar{Y}_{4}=10$, we have $\mathbb{E}_{d}(\hat{Y}_{HT})=2\cdot 2\cdot 10=40=Y_{4}$.

(b) $S_{4}^{2}=\frac{1}{3}[(4-10)^{2}+\dots+(16-10)^{2}]=\frac{1}{3}(36+4+4+36)=80/3$. Then

$$\operatorname{Var}_{d}(\hat{Y}_{HT})=N^{2}\cdot\frac{1-f}{n}\cdot S_{N}^{2}=16\cdot\frac{1/2}{2}\cdot\frac{80}{3}=16\cdot\frac{1}{4}\cdot\frac{80}{3}=\frac{320}{3}\approx 106.67.$$

(c) The six samples and their $\hat{Y}_{HT}$ values are: $\{1,2\}\to 24$, $\{1,3\}\to 32$, $\{1,4\}\to 40$, $\{2,3\}\to 40$, $\{2,4\}\to 48$, $\{3,4\}\to 56$. Their mean is $40$. Their variance is

$$\frac{1}{6}\bigl[(24-40)^{2}+(32-40)^{2}+0+0+(48-40)^{2}+(56-40)^{2}\bigr]=\frac{1}{6}(256+64+64+256)=\frac{640}{6}=\frac{320}{3}.$$

The enumeration confirms the formula. ∎

</details>

### Exercise 1.3
<a id="design-randomization-as-a-probability-space-legacy-1-3"></a>

For a fixed-size design with $\pi_{i}=n/N$ for all $i$, prove that $\sum_{j}\Delta_{ij}=0$ for every $i$.

<details><summary>Hint 1</summary>

The sample size is a constant under the design.

</details>
<details><summary>Hint 2</summary>

Take the covariance of one membership indicator with the sum of all indicators.

</details>
<details><summary>Solution</summary>

From $\sum_{j}I_{j}=n$ a.s., take expectations: $\sum_{j}\pi_{j}=n$. Multiply by $\pi_{i}=n/N$: $\pi_{i}\sum_{j}\pi_{j}=n\pi_{i}$. Now take the expectation of $I_{i}\sum_{j}I_{j}=nI_{i}$: $\sum_{j}\pi_{ij}=n\pi_{i}$. Subtracting gives $\sum_{j}(\pi_{ij}-\pi_{i}\pi_{j})=\sum_{j}\Delta_{ij}=0$. ∎

</details>


## Further exercises on ratios and calibration

The original three exercise labels above remain unchanged. The following extensions complete the merged chapter’s ten supported problems.

### Exercise 2.4
<a id="design-randomization-as-a-probability-space-ex-4"></a>

Why does equal positive first-order inclusion not make inclusion indicators independent?

<details><summary>Hint 1</summary>

Use a fixed-size sample.

</details>
<details><summary>Hint 2</summary>

Their sum is constant.

</details>
<details><summary>Solution</summary>

In a fixed-size design, knowing many membership indicators constrains the remaining ones. In the two-unit one-selected example, both marginals are one-half but their joint probability is zero rather than one-quarter. Thus equal inclusion is not independent sampling.

</details>

### Exercise 2.5
<a id="design-randomization-as-a-probability-space-ex-5"></a>

Prove the ratio estimator is exact under a through-origin outcome relationship.

<details><summary>Hint 1</summary>

Replace every sampled outcome by the common multiple of its auxiliary.

</details>
<details><summary>Hint 2</summary>

Require a nonzero sampled auxiliary total.

</details>
<details><summary>Solution</summary>

If $y_i=Rx_i$ throughout the population, both estimated totals satisfy $\widehat Y=R\widehat X$ on every sample. The ratio estimate is the known auxiliary total times $R$, exactly the population outcome total. A zero denominator is still excluded; an undefined ratio is not an exact estimator.

</details>

### Exercise 2.6
<a id="design-randomization-as-a-probability-space-ex-6"></a>

Why does a ratio central limit theorem not automatically prove convergence of its expectation?

<details><summary>Hint 1</summary>

Rare denominators can be arbitrarily close to zero.

</details>
<details><summary>Hint 2</summary>

Probability convergence does not control unbounded tails.

</details>
<details><summary>Solution</summary>

The expansion holds on high-probability events where the denominator is bounded away from zero. A small exceptional event can still carry a huge ratio and dominate the mean. An expectation or bias theorem needs uniform integrability or another quantitative tail bound in addition to the distributional limit.

</details>

### Exercise 2.7
<a id="design-randomization-as-a-probability-space-ex-7"></a>

Prove global uniqueness of the unconstrained quadratic calibration weights.

<details><summary>Hint 1</summary>

Expand about the Lagrange solution.

</details>
<details><summary>Hint 2</summary>

Feasible perturbations have zero auxiliary totals.

</details>
<details><summary>Solution</summary>

The objective difference is a linear term plus a positive weighted quadratic term. The gradient at the solution is an auxiliary linear combination, so the linear term vanishes on every feasible perturbation. Positive base weights make the quadratic term strictly positive except at zero, proving the unique global minimum.

</details>

### Exercise 2.8
<a id="design-randomization-as-a-probability-space-ex-8"></a>

In the four-unit example, why is positive calibration infeasible?

<details><summary>Hint 1</summary>

The two observed auxiliary values are positive.

</details>
<details><summary>Hint 2</summary>

A positive weighted average cannot be zero.

</details>
<details><summary>Solution</summary>

Matching the intercept fixes total positive mass four. Any nonnegative weights with that sum give a strictly positive auxiliary total because sampled values are one and two. The target zero is outside their convex hull. Negative weights solve the unrestricted equations but do not satisfy the changed positivity problem.

</details>

### Exercise 2.9
<a id="design-randomization-as-a-probability-space-ex-9"></a>

Show the fixed-size covariance row sum vanishes without requiring equal inclusion probabilities.

<details><summary>Hint 1</summary>

Take covariance with the constant sample size.

</details>
<details><summary>Hint 2</summary>

Expand linearly.

</details>
<details><summary>Solution</summary>

For any unit, $\sum_j\Delta_{ij}=\operatorname{Cov}(I_i,\sum_jI_j)=\operatorname{Cov}(I_i,n)=0$. Equal first-order probabilities are unnecessary. This row identity supplies the algebraic Sen–Yates–Grundy rearrangement.

</details>

### Exercise 2.10
<a id="design-randomization-as-a-probability-space-ex-10"></a>

Why can there be no unbiased variance estimator in the one-of-two unrestricted example?

<details><summary>Hint 1</summary>

The observable expectation separates into two single-outcome functions.

</details>
<details><summary>Hint 2</summary>

Compare mixed finite differences.

</details>
<details><summary>Solution</summary>

The expectation of any statistic is $\tfrac12v_1(y_1)+\tfrac12v_2(y_2)$, whose mixed difference at $(0,0),(1,0),(0,1),(1,1)$ is zero. The true variance $(y_1-y_2)^2$ has mixed difference minus two. They cannot agree for all finite populations, proving the impossibility.

</details>

## Forward and backward connections

This chapter introduced the design-based probability space and the Horvitz–Thompson estimator. In *Ratio and Calibration Estimators*, we extend HT estimation to settings where auxiliary information is available and estimators become nonlinear. In *Estimating Equations and Sandwich Limits*, we move from design-based finite-population inference to model-based large-sample theory, where the probability space is over data generation rather than sample selection.

## Summary

Design averages use fixed populations and a declared selection law. Ratio linearisation needs denominator and joint-limit control; quadratic calibration has a precise feasible geometry. Positive marginal inclusion supports unbiased totals, while unavailable pairs can prevent unbiased variance estimation. The next chapter separates analogous estimating-equation limits from these design-specific probability spaces.
