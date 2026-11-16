
# Dependent Central Limits

This chapter extends central limit theory to dependent data: time series, spatial processes, and mixing sequences. The key insight is that dependence changes the asymptotic variance relative to the iid case—positive association often inflates it and negative association can reduce it—and the form of that change depends on the dependence structure and the asymptotic framework.

## Time series and the long-run variance

For a weakly stationary time series $\{X_{t}\}$ with mean $\mu$, autocovariance function $\gamma(h)=\operatorname{Cov}(X_{t},X_{t+h})$, and spectral density

$$f(\omega)=\frac{1}{2\pi}\sum_{h=-\infty}^{\infty}\gamma(h)e^{-ih\omega},$$

the variance of the sample mean is

$$\operatorname{Var}(\bar{X}_{n})=\frac{1}{n}\Bigl[\gamma(0)+2\sum_{h=1}^{n-1}\Bigl(1-\frac{h}{n}\Bigr)\gamma(h)\Bigr].$$

If $\sum_{h}|\gamma(h)|<\infty$, the *long-run variance* is

$$\Omega=\gamma(0)+2\sum_{h=1}^{\infty}\gamma(h)=2\pi f(0).$$

### Theorem 8.1 — CLT for mixing processes

Define $\alpha(m)$ as the supremum of $|P(A\cap B)-P(A)P(B)|$ over $A\in\sigma(X_t:t\le0)$ and $B\in\sigma(X_t:t\ge m)$. Let $\{X_{t}\}$ be strictly stationary with $\mathbb{E}[X_{t}]=\mu$, $\mathbb{E}[|X_{t}|^{2+\delta}]<\infty$ for some $\delta>0$, and $\alpha$-mixing coefficients satisfying $\sum_{m}\alpha(m)^{\delta/(2+\delta)}<\infty$. Then

$$\sqrt{n}(\bar{X}_{n}-\mu)\to_{d}\mathcal{N}(0,\Omega).$$

**Proof route and imported step.** A Bernstein blocking proof partitions the series into alternating large and small blocks. A covariance inequality for strongly mixing variables gives absolute covariance summability under the displayed moment and mixing assumptions. One then chooses block and gap rates, replaces the large blocks by independent copies at vanishing characteristic-function error, proves the gaps negligible, and verifies a Lindeberg bound for the large-block triangular array. Those quantitative blocking and Lindeberg estimates are the technical strong-mixing CLT lemma imported here; the three-sentence route is not a self-contained proof of that lemma. ∎

The iid variance $\gamma(0)$ is wrong whenever $2\sum_{h\ge1}\gamma(h)\ne0$. It can coincide with the long-run variance even with nonzero autocovariances if positive and negative terms cancel. Predominantly positive autocorrelation inflates the variance; predominantly negative autocorrelation can deflate it.

## Heteroskedasticity-and-autocorrelation-consistent estimation

The long-run variance $\Omega$ must be estimated. The *Newey-West* estimator is

$$\widehat{\Omega}=\hat{\gamma}(0)+2\sum_{h=1}^{m}w_{h}\hat{\gamma}(h),$$

where $\hat{\gamma}(h)=n^{-1}\sum_{t=1}^{n-h}(X_{t}-\bar{X})(X_{t+h}-\bar{X})$ and $w_{h}=1-h/(m+1)$ are Bartlett weights. The bandwidth must grow, but bandwidth conditions alone do not establish consistency. The Gaussian short-memory result proved in the spectral chapter uses $m\to\infty$ and $m=o(\sqrt n)$; broader results require explicit fourth-order or mixing assumptions as well.

### Bandwidth selection

Increasing $m$ ordinarily reduces truncation bias by including more
autocovariances, while increasing sampling variance because more noisy sample
autocovariances enter. Neither component must be monotone in every finite
sample, especially when autocovariances change sign. The optimal rate balances
their leading asymptotic terms. Under the short-memory smooth-spectrum
conditions used for Bartlett/Newey--West plug-in calculations, a bandwidth of
order $n^{1/3}$ arises; this is not a universal AR(1) prescription.
Data-dependent plug-in and automatic lag-selection rules inherit their stated
kernel, smoothness, and short-memory assumptions.

Fixed bandwidth, long memory, unit roots, and structural breaks each require different theory. A generic "$n\to\infty$" claim hides the geometry.

## Spatial asymptotics

For spatial data $\{Z(s):s\in\mathcal{D}\subset\mathbb{R}^{d}\}$, asymptotics may proceed by:

1. **Expanding domain:** $\mathcal{D}_{n}$ grows, with fixed observation density.
2. **Infilling:** $\mathcal{D}$ is fixed, with observation density increasing.
3. **Mixed:** Both domain expansion and infilling occur.

Some covariance parameters are not separately consistently estimable under fixed-domain (infill) asymptotics, even with arbitrarily dense observations. Only certain combinations (microergodic parameters) can be estimated consistently. This is a limitation on consistent estimation from one increasingly dense realization, distinct from whether two parameters define different finite-dimensional laws. The combinations and dimension restrictions depend on the covariance family; no universal range-to-sill formula is asserted here.

## Worked example: AR(1) long-run variance

For a stationary AR(1) process $X_{t}=\phi X_{t-1}+\varepsilon_{t}$ with $\varepsilon_{t}\sim\text{iid}\ \mathcal{N}(0,\sigma^{2}_{\varepsilon})$ and $|\phi|<1$:

$$\gamma(0)=\frac{\sigma^{2}_{\varepsilon}}{1-\phi^{2}},\qquad \gamma(h)=\frac{\sigma^{2}_{\varepsilon}\phi^{|h|}}{1-\phi^{2}}.$$

The long-run variance is

$$\Omega=\gamma(0)+2\sum_{h=1}^{\infty}\gamma(h)=\frac{\sigma^{2}_{\varepsilon}}{1-\phi^{2}}\Bigl(1+2\sum_{h=1}^{\infty}\phi^{h}\Bigr)=\frac{\sigma^{2}_{\varepsilon}}{1-\phi^{2}}\cdot\frac{1+\phi}{1-\phi}=\frac{\sigma^{2}_{\varepsilon}}{(1-\phi)^{2}}.$$

For $\phi=0.5$ and $\sigma^{2}_{\varepsilon}=1$, $\Omega=1/(0.5)^{2}=4$, while $\gamma(0)=4/3$. The long-run variance is three times the marginal variance. Using the iid formula would understate the true variance by a factor of $3$.

## Common errors and misconceptions

- **Using iid standard errors for time series.** The most common error in applied time series is to use standard errors that assume independence. Positive autocorrelation makes these standard errors too small, leading to overrejection.

- **Choosing bandwidth too small or too large.** A bandwidth of $m=1$ captures only first-order autocorrelation. A bandwidth of $m=n/2$ introduces too much noise. Automatic selection methods help but are not foolproof.

- **Ignoring the asymptotic framework in spatial data.** Infill asymptotics and expanding-domain asymptotics give different consistency results. A result proved under one framework may fail under the other.

- **Confusing different statistical experiments.** Dense sampling of one bounded region does not create independent realizations of its low-frequency component. Consistency claims for covariance parameters require a stated model, spatial dimension, and domain regime.

## A complete finite-dependence central limit proof

We now give a self-contained blocking argument for a useful subclass, rather than treating the preceding imported mixing theorem as proved. A stationary sequence is **m-dependent** when sigma-fields generated by index sets separated by more than the fixed integer m are independent. Merely having zero correlations beyond lag m is weaker and does not suffice. Assume a finite second moment and centre the sequence. Its long-run variance is the finite covariance sum. It can be zero; that case means convergence in probability to zero on the square-root scale, rather than a nondegenerate normal approximation.

First suppose the centred variables are bounded by a constant. Partition the first n indices into long blocks of length the integer part of the cube root of n, separating successive long blocks by gaps of length m. Discard the final incomplete block. All long-block sums are mutually independent by the sigma-field definition. Their normalised maximum magnitude tends to zero, so the Lindeberg condition holds automatically. The discarded indices number at most a constant times n divided by the block length, plus the block length. For any index subset, the variance of its sum is at most its cardinality times a fixed constant: each term has at most twice m possible nonzero covariance partners, and Cauchy–Schwarz bounds each covariance by the marginal variance. The discarded sum divided by the square root of n therefore tends to zero in mean square.

The exact stationary variance identity shows that the full normalised sum has variance converging to the finite covariance sum. Removing a term converging to zero in mean square leaves the same variance limit, since the full variances stay bounded. If this limit is positive, the independent triangular-array Lindeberg theorem gives a normal limit for the retained blocks, and adding back the gaps preserves it. If the limit is zero, Chebyshev's inequality supplies the claimed degenerate limit. The independent triangular-array theorem is the ordinary probability prerequisite being used here; no dependence lemma is hidden in that invocation.

For an unbounded sequence, clip each variable at a fixed height K and centre the clipped variable. This preserves stationarity and finite dependence. The centred residual has second moment tending to zero as K increases, by dominated convergence in the square-integrable tail. Uniformly over n, the variance of its normalised sum is at most twice m plus one times that residual second moment. Each of the finitely many clipped covariances converges to the original covariance by Cauchy–Schwarz. Thus their long-run variances converge too. For any fixed real frequency, the difference between the original and clipped characteristic functions is bounded by that frequency's magnitude times the residual standard deviation. First let n increase for fixed K, then let K increase. The Gaussian characteristic functions and this uniform approximation yield the finite-dependence CLT in full generality. This last truncation step is essential: a bounded-block proof alone would not cover Gaussian moving averages.

## A bounded martingale-difference central limit theorem

Here is a second complete dependent limit argument. Let D at time k be adapted to an increasing filtration, with zero conditional mean given the previous sigma-field, and let every increment be bounded by the same finite constant M. Write its conditional second moment as v at time k. Suppose the average of these conditional second moments converges in probability to a constant sigma squared. Then the sum of the first n increments divided by the square root of n converges to the centred normal law with that variance. No independence of the increments is assumed.

To prove the statement, fix a real number u, put S equal to the partial sum and A equal to the accumulated conditional variances, and consider

$$Z_{n,k}=\exp\{iuS_k/\sqrt n+u^2A_k/(2n)\}.$$

Conditional Taylor expansion of the imaginary exponential has its linear term vanish and its quadratic term equal minus u squared times the conditional variance divided by twice n. Its remainder is bounded uniformly by a constant times n to the power minus three halves, because the increments are bounded. Multiplication by the positive compensating exponential cancels that quadratic term; the additional remainder is of order n to the power minus two. Also the modulus of Z is bounded uniformly in n and k by the exponential of u squared M squared divided by two. Taking conditional expectations, then summing the n expectation increments, proves that the expectation of the terminal Z tends to one.

The assumed variance convergence, its deterministic bound by M squared, and dominated convergence in probability imply that the negative compensating exponential converges in mean to the constant exponential of minus u squared sigma squared divided by two. Multiplying by the uniformly bounded terminal Z therefore changes expectations by a quantity tending to zero. The characteristic function of the normalised sum consequently has the Gaussian limit. The continuity theorem for characteristic functions finishes the proof, including zero variance. The compensator here is random; replacing it prematurely by its expectation would incorrectly omit the conditional-variance hypothesis.

## Finite-state chains through a Poisson equation

Let P be the transition matrix of a finite irreducible chain, let pi be its unique stationary law, and let f be any real function on the state space. On the subspace of functions with pi-mean zero, the operator I minus P is invertible: a fixed vector of P is constant by the finite maximum principle and irreducibility, and a constant with zero pi-mean vanishes. Finite-dimensional injectivity gives surjectivity on this invariant subspace. There is therefore a unique centred g solving

$$g-Pg=f-\pi f.$$

Set $D_t=g(X_t)-Pg(X_{t-1})$. These are bounded martingale differences. Their conditional variance is the function $v=Pg^2-(Pg)^2$ evaluated at the preceding state. The finite irreducible-chain occupation law gives the average conditional variance converging to pi v from every initial state. We import that elementary chain law from the stochastic-processes course. The preceding bounded martingale theorem then applies. The identity

$$\sum_{t=1}^n\{f(X_{t-1})-\pi f\}
=\sum_{t=1}^nD_t+g(X_0)-g(X_n)$$

leaves only a bounded endpoint remainder. Hence the empirical mean has asymptotic variance pi v. This proof needs irreducibility but not aperiodicity. A periodic chain can have zero asymptotic variance. An absolutely convergent covariance representation may fail for a periodic chain even when this Poisson-equation proof works, so the two routes must not be conflated.

### Worked example: a persistent two-state chain

Take states minus one and plus one, switching with probability a at each step, with a strictly positive and at most one. The stationary law is fair, and P applied to the state function multiplies it by one minus twice a. The centred Poisson solution is the state divided by twice a. Its conditional variance, after substitution, is $(1-a)/a$. This is the long-run variance of the sample mean. With switching probability one quarter it equals three, whereas the stationary marginal variance equals one. With switching probability one, the chain alternates deterministically and the normalised empirical sum tends to zero; this is the degenerate case handled by the theorem. At switching probability zero the chain is reducible, and one random initial sign persists forever. The sample mean then does not even converge to its stationary expectation. An apparently harmless endpoint of a parameter interval changes the theorem's hypotheses.

### Worked example: uncorrelated yet dependent increments

Let the epsilon variables be independent fair signs. Define the next increment as its new sign times a multiplier which is one when the preceding sign is positive and two when the preceding sign is negative. Conditional on the complete past, its mean is zero and its second moment is respectively one or four. The average conditional variance converges to five halves by the law of large numbers for the preceding independent signs. The martingale theorem therefore gives a normal limit with variance five halves.

All distinct increments are uncorrelated by iterated expectation. Nevertheless they are dependent: the magnitude of an increment reveals the preceding sign, and thus information about the sign of the preceding increment. This example explains why checking only autocorrelations cannot establish independence, while it also demonstrates a setting in which a correct normal limit follows from conditional moments rather than strong-mixing calculations.

## What studentization still requires

A central limit theorem and a covariance estimator are separate results. If a positive long-run variance has been established and a nonnegative estimator converges to it, Slutsky's theorem gives a standard normal limit after dividing by the estimated standard deviation. At zero long-run variance that division is invalid. A fixed-bandwidth estimator generally converges to a truncated covariance sum, which can disagree with the target even though each included sample covariance is consistent. Conversely, an estimator's nonnegativity does not prove its consistency.

The spectral chapter proves a usable Bartlett consistency result for stationary Gaussian data with absolutely summable covariances and bandwidth smaller than the square root of sample size. Non-Gaussian fourth-order control or other precise dependence conditions can allow different rates. Long-memory data, local-to-unit-root arrays and changing distributions do not become covered by choosing a larger lag. In each case the normalisation, target variance and limit distribution must first be derived for the actual experiment.

## Practice exercises

<a id="dependent-central-limits-legacy-8-1"></a>

**Exercise 8.1.** For an MA(1) process $X_{t}=\varepsilon_{t}+\theta\varepsilon_{t-1}$ with $|\theta|<1$, compute the long-run variance.

<details><summary>Hint 1</summary>

Expand each covariance using independent innovations.

</details>

<details><summary>Hint 2</summary>

Only lags zero and one share an innovation.

</details>

<details><summary>Full solution</summary>

$\gamma(0)=(1+\theta^{2})\sigma^{2}_{\varepsilon}$, $\gamma(1)=\theta\sigma^{2}_{\varepsilon}$, $\gamma(h)=0$ for $|h|>1$. Thus

$$\Omega=(1+\theta^{2})\sigma^{2}_{\varepsilon}+2\theta\sigma^{2}_{\varepsilon}=(1+\theta)^{2}\sigma^{2}_{\varepsilon}.$$

For $\theta=0.5$, $\Omega=2.25\sigma^{2}_{\varepsilon}$, compared to $\gamma(0)=1.25\sigma^{2}_{\varepsilon}$. ∎

</details>

<a id="dependent-central-limits-legacy-8-2"></a>

**Exercise 8.2.** Show that for an AR(1) with $\phi=-0.8$, the long-run variance is smaller than $\gamma(0)$.

<details><summary>Hint 1</summary>

Compare the ratio of long-run to marginal variance.

</details>

<details><summary>Hint 2</summary>

The ratio is $(1+\phi)/(1-\phi)$.

</details>

<details><summary>Full solution</summary>

$\Omega=\sigma^{2}_{\varepsilon}/(1+0.8)^{2}=\sigma^{2}_{\varepsilon}/3.24\approx 0.309\sigma^{2}_{\varepsilon}$, while $\gamma(0)=\sigma^{2}_{\varepsilon}/(1-0.64)\approx 2.778\sigma^{2}_{\varepsilon}$. Negative autocorrelation makes the sample mean *more* precise than the iid formula suggests. ∎

</details>

<a id="dependent-central-limits-legacy-8-3"></a>

**Exercise 8.3.** Under what conditions does the Newey-West estimator converge in probability to $\Omega$?

<details><summary>Hint 1</summary>

Pointwise consistency cannot control a growing sum.

</details>

<details><summary>Hint 2</summary>

State both moment/dependence assumptions and bandwidth conditions.

</details>

<details><summary>Full solution</summary>

One concrete sufficient set of conditions is that the centred series is strictly stationary, has finite fourth moment, $\sum_h|\gamma(h)|<\infty$, and

$$\sum_{r,s,t\in\mathbb Z}|\operatorname{cum}(X_0,X_r,X_s,X_t)|<\infty,$$

with $m\to\infty$ and $m/n\to0$. Absolute covariance summability makes the Bartlett truncation bias vanish (and implies $m^{-1}\sum_{h\le m}h|\gamma(h)|\to0$). Absolute fourth-cumulant summability bounds the variance of the growing weighted autocovariance sum by $O(m/n)$; replacing the true mean by $\bar X$ is negligible under these conditions. Hence $\widehat\Omega\to_p\Omega$. Pointwise consistency at each fixed lag alone would not control a sum whose number of lags grows with $n$. ∎

</details>

<a id="dependent-central-limits-ex-4"></a>

**Exercise 4.** For a stationary m-dependent sequence with finite variance, prove a variance bound for the sum over any finite index subset A.

<details><summary>Hint 1</summary>

Expand the double covariance sum.

</details>

<details><summary>Hint 2</summary>

Each index has at most $2m+1$ nonzero covariance partners.

</details>

<details><summary>Full solution</summary>

If the marginal variance is V, Cauchy–Schwarz bounds every covariance magnitude by V. All pairs at separation greater than m have zero covariance. Thus the variance is at most $(2m+1)|A|V$. This bound also handles separated gaps without pretending the gaps are independent.

</details>

<a id="dependent-central-limits-ex-5"></a>

**Exercise 5.** Let $X_t=\varepsilon_t-\varepsilon_{t-1}$ for iid centred finite-variance innovations. Determine the square-root sample-mean limit.

<details><summary>Hint 1</summary>

Telescope the partial sum.

</details>

<details><summary>Hint 2</summary>

There are only two endpoint innovations.

</details>

<details><summary>Full solution</summary>

The sum is $\varepsilon_n-\varepsilon_0$, whose variance is twice the innovation variance for positive n. Division by $\sqrt n$ gives convergence to zero in mean square. The covariance sum also gives zero: marginal variance twice the innovation variance and lag-one covariance its negative. A nondegenerate normal approximation with the marginal variance is incorrect.

</details>

<a id="dependent-central-limits-ex-6"></a>

**Exercise 6.** In the bounded martingale theorem, why is convergence of average unconditional variances insufficient?

<details><summary>Hint 1</summary>

Use a random multiplier shared by every increment.

</details>

<details><summary>Hint 2</summary>

Let $D_t=H\varepsilon_t$, where the $\varepsilon_t$ are iid fair signs independent of H, and H is known at time zero, taking values one and two equally.

</details>

<details><summary>Full solution</summary>

The conditional-variance average equals $H^2$, while its unconditional expectation is always five halves. Conditional on H, the normalised sum tends to a centred normal law with variance H squared. Unconditionally the limit is an equal mixture of normals with variances one and four, which is not a normal law of variance five halves: their fourth moments differ. The theorem requires a deterministic conditional-variance limit.

</details>

<a id="dependent-central-limits-ex-7"></a>

**Exercise 7.** For the two-state chain, solve the Poisson equation and check the variance formula directly.

<details><summary>Hint 1</summary>

Use the state function as an eigenfunction.

</details>

<details><summary>Hint 2</summary>

The innovation conditional variance is $(1-\rho^2)/(4a^2)$ with $\rho=1-2a$.

</details>

<details><summary>Full solution</summary>

The centred solution is $g(x)=x/(2a)$. Since $g^2=1/(4a^2)$ and $Pg=\rho g$, its conditional variance is $(1-\rho^2)/(4a^2)=(1-a)/a$. For $0<a<1$ the geometric covariance sum is $(1+\rho)/(1-\rho)$, the same number. At a equal to one the covariance series is not absolutely summable, but the bounded telescoping proof still gives zero.

</details>

<a id="dependent-central-limits-ex-8"></a>

**Exercise 8.** Show how a consistent variance estimate yields a normal pivot, and explain the positive-variance requirement.

<details><summary>Hint 1</summary>

Apply continuous mapping to the estimated variance.

</details>

<details><summary>Hint 2</summary>

Division is continuous at a positive denominator only.

</details>

<details><summary>Full solution</summary>

If $\sqrt n(\bar X-\mu)\Rightarrow N(0,\Omega)$ and $\widehat\Omega\to_p\Omega>0$, then $\sqrt{\widehat\Omega}\to_p\sqrt\Omega$ and Slutsky gives the standard normal pivot. If $\Omega=0$, the numerator and denominator may both vanish at unknown relative rates. The displayed hypotheses then give no pivot.

</details>

<a id="dependent-central-limits-ex-9"></a>

**Exercise 9.** A process has absolutely summable covariance. Does a CLT automatically follow? Identify the missing logical step.

<details><summary>Hint 1</summary>

A variance limit controls only second moments.

</details>

<details><summary>Hint 2</summary>

Compare the distinct hypotheses in the mixing and martingale theorems.

</details>

<details><summary>Full solution</summary>

Absolute summability proves the limit of normalised variances by dominated convergence in the exact covariance identity. It does not establish convergence of characteristic functions or rule out higher-order dependence. One must supply an applicable CLT, such as finite dependence with finite second moment, the stated mixing theorem, or the bounded martingale theorem with conditional-variance convergence. This is a logical insufficiency claim, not an assertion that all summable-covariance processes fail.

</details>

<a id="dependent-central-limits-ex-10"></a>

**Exercise 10.** Suppose independent copies of a stationary series are pooled. Explain why the number of copies and length per copy define different asymptotic experiments.

<details><summary>Hint 1</summary>

Identify which units are independent.

</details>

<details><summary>Hint 2</summary>

A fixed-length copy can be treated as one random vector.

</details>

<details><summary>Full solution</summary>

With many independent fixed-length copies, a classical iid vector CLT can apply to per-copy summaries and their between-copy variance. With one copy growing in length, dependence within that realization determines a long-run variance and requires a dependent CLT. Treating every time point as an independent copy replaces the actual covariance structure and can change both variance and consistency. If both counts grow, an explicit triangular-array argument is needed; neither preceding theorem supplies it without added assumptions.

</details>

## Forward and backward connections

This chapter extended the iid limit theory from *Empirical Distributions and Ranks* to dependent processes. In *Counting-Process Survival Theory*, we apply similar martingale limit theory to event-time data, where the dependence structure is encoded in the filtration. In *Spatial Covariance and Kriging*, we study spatial dependence models and their implications for prediction.
