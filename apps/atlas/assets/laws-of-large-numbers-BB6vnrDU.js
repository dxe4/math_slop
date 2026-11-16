var e=`---
parent_id: book-probability-models-proofs
chapter_id: laws-of-large-numbers
title: "Weak and Strong Laws of Large Numbers"
level: advanced-undergraduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Weak and Strong Laws of Large Numbers

Repeated observations often stabilize in aggregate even when no individual observation becomes predictable. A law of large numbers makes that statement precise: it names the average, the target, the mode of convergence, and the assumptions that pay for stabilization. Independence, identical distribution, moment conditions, and dependence control are hypotheses, not decorations.

This chapter proves the finite-variance weak law, develops a truncation route to the iid finite-mean weak law, and gives a precise proof architecture for the iid finite-mean strong law. It then separates iid theorems from useful non-identical variance criteria and from statistical consistency. The local prerequisites are expectation, variance, convergence modes, uniform integrability, and the first Borel–Cantelli lemma.

## 1. Empirical averages and two targets

For observations $X_{1},X_{2},...$, write

$S_{n}=\\sum_{k=1}^{n} X_{k}$, $\\bar{X}_{n}=S_{n}/n$.

If the variables share a finite mean $\\mu$, the **weak law of large numbers** asserts

$\\bar{X}_{n}\\to_{P} \\mu$.

The **strong law of large numbers** asserts

$\\bar{X}_{n}\\to \\mu$ almost surely.

The strong conclusion implies the weak one, but a proof of the weak law does not automatically prove the strong law. Probability convergence allows the exceptional set to move with $n$; almost-sure convergence requires almost every infinite sample path eventually to remain close to $\\mu$.

For Bernoulli trials, $\\bar{X}_{n}$ is the observed success proportion. The laws say that long-run relative frequency approaches the success probability, not that short sequences must look balanced and not that future trials compensate for past deviations.

## 2. The finite-variance weak law

Suppose $X_{1},X_{2},...$ are iid with $\\mathbb{E}[X_{1}]=\\mu$ and $\\operatorname{Var}(X_{1})=\\sigma^{2}<\\infty$. Independence gives

$\\mathbb{E}[\\bar{X}_{n}]=\\mu$, $\\operatorname{Var}(\\bar{X}_{n})=\\sigma^{2}/n$.

Chebyshev's inequality then yields, for every $\\varepsilon >0$,

$\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mu \\rvert \\ge \\varepsilon )\\le \\sigma^{2}/(n\\varepsilon^{2})\\to 0$.

This proves the weak law and provides a finite-sample upper bound. The rate $1/n$ belongs to the bound on probability, not to the typical size of the error; standard deviation shrinks as $1/\\sqrt{n}$.

### What was actually used?

Identical distribution is stronger than necessary for this proof. If $X_{1},...,X_{n}$ are pairwise uncorrelated with finite variances and

$(1/n^{2})\\sum_{k=1}^{n} \\operatorname{Var}(X_{k})\\to 0$,

then

$(1/n)\\sum_{k=1}^{n}(X_{k}-\\mathbb{E}[X_{k}])\\to_{P}0$.

To converge to one constant $\\mu$, the deterministic averages $(1/n)\\sum \\mathbb{E}[X_{k}]$ must also approach $\\mu$. Independence is one route to zero covariance, but uncorrelatedness is enough for this variance calculation.

## 3. The iid finite-mean weak law by truncation

Finite variance is convenient but not necessary. The iid weak law holds under the minimal integrability assumption $\\mathbb{E}\\lvert X_{1}\\rvert <\\infty$.

Let $X_{1},X_{2},...$ be iid copies of $X$, and for each row $n$ define

$Y_{n,k}=X_{k}\\mathbf{1}_{\\lvert X_{k}\\rvert \\le n}$, $1\\le k\\le n$.

Three estimates prove the result.

First, the chance that truncation changes any of the first $n$ observations satisfies

$\\mathbb{P}(\\exists k\\le n:Y_{n,k}\\ne X_{k})\\le n\\mathbb{P}(\\lvert X\\rvert >n)$.

Integrability implies $nP(\\lvert X\\rvert >n)\\to 0$. To see this, on $\\{\\lvert X\\rvert >n\\}$, $n\\le \\lvert X\\rvert$, and the tail variable $\\lvert X\\rvert \\mathbf{1}_{\\lvert X\\rvert >n}$ tends to zero and is dominated by $\\lvert X\\rvert$; hence

$nP(\\lvert X\\rvert >n)\\le \\mathbb{E}[\\lvert X\\rvert \\mathbf{1}_{\\lvert X\\rvert >n}]\\to 0$.

Second, Chebyshev controls the centered truncated row:

$\\mathbb{P}(\\lvert (1/n)\\sum_{k=1}^{n}(Y_{n,k}-\\mathbb{E}[Y_{n,k}])\\rvert >\\varepsilon )$

$\\le \\operatorname{Var}(Y_{n,1})/(n\\varepsilon^{2})$

$\\le \\mathbb{E}[X^{2} \\mathbf{1}_{\\lvert X\\rvert \\le n}]/(n\\varepsilon^{2})\\to 0$.

The last limit follows by dominated convergence because

$[X^{2}/n]\\mathbf{1}_{\\lvert X\\rvert \\le n}\\le \\lvert X\\rvert$

and the left integrand tends pointwise to zero.

Third, $\\mathbb{E}[Y_{n,1}]\\to \\mathbb{E}[X]=\\mu$ by dominated convergence. With probability tending to one the truncated and original averages agree, while the centered truncated average tends to zero in probability and its center tends to $\\mu$. Therefore $\\bar{X}_{n}\\to_{P}\\mu$.

The row index matters: this is a triangular-array device used to prove a theorem about the original sequence.

## 4. Borel–Cantelli turns summability into eventual control

The first Borel–Cantelli lemma says that if events $A_{n}$ satisfy

$\\sum_{n}\\mathbb{P}(A_{n})<\\infty$,

then $\\mathbb{P}(A_{n}\\ \\text{infinitely often})=0$. Independence is not required for this direction.

This lemma upgrades summable probability bounds to almost-sure eventual statements. For positive finite variance, a direct Chebyshev bound at every $n$ is not summable:

$\\sum_{n} \\sigma^{2}/(n\\varepsilon^{2})=\\infty$.

That divergence does not disprove a strong law; it only shows that this direct route is too crude.

### Dyadic rescue under finite variance

At times $n=2^{m}$, Chebyshev gives

$\\mathbb{P}(\\lvert S_{2^{m}}-2^{m}\\mu \\rvert >\\varepsilon 2^{m})\\le \\sigma^{2}/(\\varepsilon^{2} 2^{m})$,

which is summable in $m$. Borel–Cantelli yields convergence along dyadic times. To fill the gaps between $2^{m}$ and $2^{m+1}$, one uses a maximal inequality rather than a separate union bound over all intermediate indices.

**Kolmogorov maximal inequality.** If $Z_{1},...,Z_{n}$ are independent, centered, and have finite variances, then for $\\lambda >0$,

$\\mathbb{P}(\\max_{1\\le k\\le n}\\lvert \\sum_{j=1}^{k} Z_{j}\\rvert \\ge \\lambda )\\le \\operatorname{Var}(\\sum_{j=1}^{n}Z_{j})/\\lambda^{2}$.

Applied to each dyadic block, its bounds are summable. Almost surely, block fluctuations divided by $2^{m}$ eventually become small. Combining dyadic endpoints and block control proves $S_{n}/n\\to \\mu$ almost surely for iid finite-variance variables.

## 5. The iid finite-mean strong law

**Kolmogorov strong law.** If $X_{1},X_{2},...$ are iid and $\\mathbb{E}\\lvert X_{1}\\rvert <\\infty$, then

$S_{n}/n\\to \\mathbb{E}[X_{1}]$ almost surely.

Finite variance is not assumed. A proof truncates each variable at a level tied to its own index:

$Y_{n}=X_{n}\\mathbf{1}_{\\lvert X_{n}\\rvert \\le n}$.

The following chain records exactly where each tool enters.

### Step 1: truncation changes only finitely many terms

For a nonnegative variable $W$, the tail-sum bound gives

$\\sum_{n=1}^\\infty \\mathbb{P}(W>n)\\le \\mathbb{E}[W]$.

Thus $\\mathbb{E}\\lvert X_{1}\\rvert <\\infty$ implies

$\\sum_{n}\\mathbb{P}(X_{n}\\ne Y_{n})=\\sum_{n}\\mathbb{P}(\\lvert X_{1}\\rvert >n)<\\infty$.

By Borel–Cantelli, $X_{n}=Y_{n}$ for all sufficiently large $n$, almost surely.

### Step 2: centered truncated fluctuations form a convergent series

One can show

$\\sum_{n=1}^\\infty \\operatorname{Var}(Y_{n})/n^{2}<\\infty$.

Indeed, discard the negative square of the mean and use Tonelli:

$\\sum_{n} \\mathbb{E}[X^{2} \\mathbf{1}_{\\lvert X\\rvert \\le n}]/n^{2}$

$=\\mathbb{E}[X^{2} \\sum_{n\\ge \\left\\lceil \\lvert X\\rvert \\right\\rceil} 1/n^{2}]\\le C \\mathbb{E}\\lvert X\\rvert <\\infty$

for a universal constant $C$, with small $\\lvert X\\rvert$ handled harmlessly.

The **Kolmogorov convergence criterion** says that independent centered variables $Z_{n}$ with $\\sum \\operatorname{Var}(Z_{n})<\\infty$ have a sum $\\sum Z_{n}$ converging almost surely. Apply it to

$Z_{n}=(Y_{n}-\\mathbb{E}[Y_{n}])/n$.

Hence $\\sum_{n}(Y_{n}-\\mathbb{E}[Y_{n}])/n$ converges almost surely.

### Step 3: Kronecker's lemma converts series convergence to average convergence

Kronecker's lemma states that if $\\sum_{n} a_{n}/n$ converges, then

$(1/n)\\sum_{k=1}^{n} a_{k}\\to 0$.

Therefore

$(1/n)\\sum_{k=1}^{n}(Y_{k}-\\mathbb{E}[Y_{k}])\\to 0$ almost surely.

### Step 4: centers converge and truncation disappears

Dominated convergence gives $\\mathbb{E}[Y_{k}]\\to \\mu$, so Cesàro averaging gives

$(1/n)\\sum_{k=1}^{n}\\mathbb{E}[Y_{k}]\\to \\mu$.

Since $X_{k}$ and $Y_{k}$ differ only finitely often almost surely, their average difference tends to zero. Combining the four steps proves the stated strong law.

This route depends on iid sampling. The equality $\\mathbb{P}(\\lvert X_{n}\\rvert >n)=\\mathbb{P}(\\lvert X_{1}\\rvert >n)$ and the common limiting center both use identical distribution.

## 6. A non-identically distributed strong-law criterion

There is a clean variance criterion for independent but non-identical variables. Suppose the $X_{n}$ are independent, have finite means and variances, and

$\\sum_{n=1}^\\infty \\operatorname{Var}(X_{n})/n^{2}<\\infty$.

Apply the Kolmogorov convergence criterion to $(X_{n}-\\mathbb{E}[X_{n}])/n$, then Kronecker's lemma. The conclusion is

$(1/n)\\sum_{k=1}^{n}(X_{k}-\\mathbb{E}[X_{k}])\\to 0$ almost surely.

If additionally

$(1/n)\\sum_{k=1}^{n}\\mathbb{E}[X_{k}]\\to \\mu$,

then the averages converge almost surely to $\\mu$.

Uniformly bounded variances are sufficient because $\\sum_{n=1}^{\\infty} C/n^{2}<\\infty$. They are not necessary. Conversely, merely knowing that every variance is finite gives no common control on their growth.

For weak convergence, the milder condition

$\\sum_{k=1}^{n} \\operatorname{Var}(X_{k})=o(n^{2})$

is enough by Chebyshev. Strong laws typically need a summability or maximal-control argument.

## 7. Dependence can preserve or destroy averaging

Independence is sufficient, not always necessary. Stationary ergodic sequences satisfy an ergodic law of large numbers under integrability, and many weakly dependent processes average successfully. But dependence must be measured rather than guessed.

The simplest failure uses perfect dependence. Let $X_{k}=Y$ for every $k$, where $Y$ is nonconstant and integrable with mean $\\mu$. Then

$\\bar{X}_{n}=Y$

for all $n$, so the average does not converge in probability to $\\mu$. Repetition has created no new information.

Variance exposes covariance accumulation:

$\\operatorname{Var}(\\bar{X}_{n})=(1/n^{2})[\\sum_{k}\\operatorname{Var}(X_{k})+2\\sum_{j<k}\\operatorname{Cov}(X_{j},X_{k})]$.

If covariances are nonnegative and persist across many lags, the double sum may remain of order $n^{2}$. Under stationary dependence with absolutely summable autocovariances, the numerator is typically only order $n$, restoring a weak-law variance route.

## 8. Heavy tails and absent centers

The finite-mean assumption in the iid strong law is substantive. If iid $X_{k}$ have the standard Cauchy law, stability of the Cauchy family gives

$(X_{1}+\\cdot \\cdot \\cdot +X_{n})/n \\sim X_{1}$

for every $n$. The sample average does not concentrate at a constant. The population mean is not finite, so there is no $\\mu =\\mathbb{E}[X_{1}]$ for the ordinary law to target.

Trimming, medians, robust $M$-estimators, or stable-law normalization may still produce meaningful limits, but they answer different questions. One must not report a law of large numbers for an undefined expectation.

A large finite variance is not the same as infinite mean. The iid weak and strong laws still hold with a finite first moment even when variance is infinite; only the simple Chebyshev proof and usual square-root fluctuation scale may fail.

## 9. Consistency is an estimator statement

An estimator $T_{n}$ for a parameter $\\theta$ is **weakly consistent** if $T_{n}\\to_{P}\\theta$ and **strongly consistent** if $T_{n}\\to \\theta$ almost surely. The sample mean is therefore weakly and strongly consistent for $\\mu$ under iid integrable sampling.

For Bernoulli data, the sample proportion is consistent for $p$. If $g$ is continuous, the continuous mapping theorem gives $g(\\bar{X}_{n})\\to g(\\mu )$ in the same mode. This creates plug-in estimators, but discontinuities and zero denominators require separate checks.

Consistency is asymptotic and does not quantify finite-sample uncertainty. It also does not imply unbiasedness, a fast rate, robustness, or correct model specification. An estimator can be biased for every finite $n$ yet consistent if its bias vanishes and its random error concentrates.

### Mean-square decomposition

For square-integrable $T_{n}$,

$\\mathbb{E}[(T_{n}-\\theta )^{2}]=\\operatorname{Var}(T_{n})+(\\mathbb{E}[T_{n}]-\\theta )^{2}$.

If both variance and squared bias tend to zero, then $T_{n}\\to \\theta$ in $L^{2}$, hence in probability. This is a useful consistency proof that does not require the estimator to be exactly unbiased.

## 10. A large-number audit

Before invoking a law of large numbers, ask:

1. What exact average or estimator is converging?
2. Is the conclusion weak, strong, or an $L^{p}$ statement?
3. Are the observations iid, merely independent, uncorrelated, stationary, or dependent?
4. Does the target expectation exist absolutely?
5. Is finite variance genuinely assumed, or is truncation needed?
6. Do deterministic averages of non-identical means converge?
7. Is covariance accumulation small enough for a variance proof?
8. Does a Borel–Cantelli step have summable probabilities?
9. Is a subsequence or dyadic argument extended to every index?
10. Is “consistent” being confused with unbiased, accurate at current $n$, or robust?

## Worked examples: what averaging can and cannot promise

### Worked example 1. An integrable heavy tail outside the variance proof

Let iid $X_i$ have density $f(x)=(3/2)x^{-5/2}$ for $x\\ge1$ and zero elsewhere. The density integrates to one. Its first moment is $(3/2)\\int_1^\\infty x^{-3/2}\\,dx=3$, while its second moment is $(3/2)\\int_1^\\infty x^{-1/2}\\,dx=\\infty$. Thus the integrable iid strong law proves $\\bar X_n\\to3$ almost surely and consequently in probability.

The finite-variance Chebyshev argument is unavailable, as is the ordinary finite-variance iid CLT. This is a useful division of labor: a theorem about long-run stabilization can hold without the moment needed for a familiar rate or normal approximation. It would be incorrect either to quote $\\sigma^2/n$ with an infinite $\\sigma^2$ as a numerical bound or to conclude that averaging fails because Chebyshev is uninformative.

Tail summability still works at the correct truncation scale. For $n\\ge1$, $P(X_1>n)=n^{-3/2}$, whose series converges. Hence the moving truncations $X_n\\mathbf1_{X_n\\le n}$ eventually agree with $X_n$ almost surely, exactly the first step in the finite-mean strong-law proof. A heavy-tail label alone does not determine which law of large numbers is valid; integrability is the relevant hypothesis here.

### Worked example 2. Independent observations with drifting centers

Let independent $X_k$ have mean $2+1/k$ and variance at most $k^{1/2}$. The nonidentical strong-law variance condition holds because
$\\sum_k\\operatorname{Var}(X_k)/k^2\\le\\sum_kk^{-3/2}<\\infty$.
Consequently $n^{-1}\\sum_{k=1}^n(X_k-\\mathbb EX_k)\\to0$ almost surely.

The deterministic average of the means is $2+H_n/n$, where $H_n=\\sum_{k=1}^n1/k$. The bound $H_n\\le1+\\log n$ proves $H_n/n\\to0$. Adding the two parts yields $\\bar X_n\\to2$ almost surely. The conclusion is not an iid application, and centering each observation at the final limit before invoking a mean-zero theorem would conceal the deterministic correction.

For a finite probability bound, independence also gives
$\\operatorname{Var}(\\bar X_n)\\le n^{-2}\\sum_{k\\le n}\\sqrt{k}\\le n^{-1/2}$.
Chebyshev controls deviations from $2+H_n/n$, rather than from exactly two. To control error from two, first budget the deterministic term $H_n/n$ and then bound the centered random error. Bias and random fluctuation are different contributors.

### Worked example 3. A common hidden effect leaves a random limit

Let $Y$ be a symmetric sign and let $\\varepsilon_k$ be iid centered variables of finite variance, independent of $Y$. Set $X_k=Y+\\varepsilon_k$. Every observation has mean zero, but the average is $Y+n^{-1}\\sum_{k=1}^n\\varepsilon_k$. The iid strong law applies to the noise sequence and proves $\\bar X_n\\to Y$ almost surely.

The limit is random, not the marginal mean zero. In particular, for tolerance $1/2$, convergence to $Y$ implies that eventually $|\\bar X_n|>1/2$ almost surely, so $P(|\\bar X_n|>1/2)\\to1$ by bounded convergence. The shared variable creates covariance $\\operatorname{Cov}(X_i,X_j)=\\operatorname{Var}(Y)=1$ for distinct indices. If the noise variance is $v$, then $\\operatorname{Var}(\\bar X_n)=1+v/n$, consistent with the persistent random effect.

Conditionally on $Y$, averaging succeeds in estimating that conditional mean. Unconditionally it does not estimate the marginal mean from repeated observations of one shared environment. Specifying whether new replications redraw the environment changes the probability model and therefore changes the correct conclusion.

## 11. Exercises with complete solutions

### 1. Bernoulli frequencies

**Exercise 14.1**

<a id="laws-of-large-numbers-ex-1"></a>

Let $X_{k}$ be iid Bernoulli $(p)$. Prove the sample proportion converges to $p$ in probability and give a Chebyshev bound.

<details>
<summary>Hint 1</summary>

Compute the variance of the average of independent indicators.

</details>

<details>
<summary>Hint 2</summary>

Chebyshev bounds its error by $p(1-p)/(n\\varepsilon^2)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sample proportion is $\\bar{X}_{n}$, with mean $p$ and variance $p(1-p)/n$. Therefore

$\\mathbb{P}(\\lvert \\bar{X}_{n}-p\\rvert \\ge \\varepsilon )\\le p(1-p)/(n\\varepsilon^{2})\\to 0$.

This proves the weak law for empirical success frequency.

</details>

### 2. A numerical sample-size guarantee

**Exercise 14.2**

<a id="laws-of-large-numbers-ex-2"></a>

For iid variables with variance at most $4$, how large must $n$ be for Chebyshev to guarantee $\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mu \\rvert \\ge 0.1)\\le 0.05$?

<details>
<summary>Hint 1</summary>

Insert the variance bound and tolerance into Chebyshev.

</details>

<details>
<summary>Hint 2</summary>

Solve $4/(0.01n)\\le0.05$ and retain the integer sample-size requirement.

</details>

<details>
<summary>Solution</summary>

**Solution.** Chebyshev gives

$\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mu \\rvert \\ge 0.1)\\le 4/[n(0.1)^{2}]=400/n$.

Require $400/n\\le 0.05$, or $n\\ge 8000$. This is a conservative guarantee, not necessarily the smallest actual sample size.

</details>

### 3. Mean-square convergence of an iid average

**Exercise 14.3**

<a id="laws-of-large-numbers-ex-3"></a>

If the iid variables have finite variance $\\sigma^{2}$, prove $\\bar{X}_{n}\\to \\mu$ in $L^{2}$.

<details>
<summary>Hint 1</summary>

The sample mean has the correct mean, so its second-moment error is its variance.

</details>

<details>
<summary>Hint 2</summary>

Variance additivity gives $\\sigma^2/n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independence gives

$\\mathbb{E}[(\\bar{X}_{n}-\\mu )^{2}]=\\operatorname{Var}(\\bar{X}_{n})=\\sigma^{2}/n\\to 0$.

This is exactly $L^{2}$ convergence and is stronger than the weak-law conclusion.

</details>

### 4. Pairwise uncorrelated weak law

**Exercise 14.4**

<a id="laws-of-large-numbers-ex-4"></a>

Suppose $\\mathbb{E}[X_{k}]=\\mu$, the variables are pairwise uncorrelated, and $\\operatorname{Var}(X_{k})\\le C$. Prove $\\bar{X}_{n}\\to_{P}\\mu$.

<details>
<summary>Hint 1</summary>

Independence is stronger than needed for variance addition.

</details>

<details>
<summary>Hint 2</summary>

Expand the variance of the sum; every cross-covariance is zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Pairwise zero covariance gives

$\\operatorname{Var}(\\bar{X}_{n})=(1/n^{2})\\sum_{k=1}^{n}\\operatorname{Var}(X_{k})\\le C/n$.

Chebyshev then gives $\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mu \\rvert \\ge \\varepsilon )\\le C/(n\\varepsilon^{2})\\to 0$.

</details>

### 5. Non-identical means

**Exercise 14.5**

<a id="laws-of-large-numbers-ex-5"></a>

Let independent $X_{k}$ have $\\mathbb{E}[X_{k}]=1+1/k$ and $\\operatorname{Var}(X_{k})\\le 2$. Find the probability limit of their average.

<details>
<summary>Hint 1</summary>

Separate the centered random average from the average of the means.

</details>

<details>
<summary>Hint 2</summary>

The random part has variance at most $2/n$; the deterministic correction is a harmonic sum divided by $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The centered average tends to zero in probability because its variance is at most $2/n$. The deterministic mean average is

$1+(1/n)\\sum_{k=1}^{n}1/k$.

The harmonic sum is $O(\\log n)$, so its quotient by $n$ tends to zero. Hence the average converges in probability to $1$.

</details>

### 6. Perfect-dependence failure

**Exercise 14.6**

<a id="laws-of-large-numbers-ex-6"></a>

Let $X_{k}=Y$ for every $k$, where $\\mathbb{P}(Y=0)=\\mathbb{P}(Y=2)=1/2$. Does $\\bar{X}_{n}$ converge in probability to $\\mathbb{E}[Y]$?

<details>
<summary>Hint 1</summary>

Write the actual average when every observation is the same variable.

</details>

<details>
<summary>Hint 2</summary>

Its distance from the mean is always one, regardless of sample size.

</details>

<details>
<summary>Solution</summary>

**Solution.** The mean is one, but $\\bar{X}_{n}=Y$ for every $n$. Thus

$\\mathbb{P}(\\lvert \\bar{X}_{n}-1\\rvert >1/2)=1$

for all $n$. The average does not converge in probability to the mean because repeated variables add no independent information.

</details>

### 7. Equicorrelated observations

**Exercise 14.7**

<a id="laws-of-large-numbers-ex-7"></a>

Suppose $\\operatorname{Var}(X_{k})=\\sigma^{2}$ and $\\operatorname{Cov}(X_{j},X_{k})=\\rho \\sigma^{2}$ for all $j\\ne k$, with $\\rho >0$. Compute $\\operatorname{Var}(\\bar{X}_{n})$.

<details>
<summary>Hint 1</summary>

Count both diagonal and off-diagonal terms in the variance expansion.

</details>

<details>
<summary>Hint 2</summary>

There are $n(n-1)$ ordered off-diagonal contributions, each $\\rho\\sigma^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are $n$ variance terms and $n(n-1)$ ordered off-diagonal covariance contributions, so

$\\operatorname{Var}(\\bar{X}_{n})=[n\\sigma^{2}+n(n-1)\\rho \\sigma^{2}]/n^{2}$

$=\\sigma^{2}/n+\\rho \\sigma^{2}(n-1)/n$.

This tends to $\\rho \\sigma^{2}$, not zero. Persistent positive correlation defeats the usual variance-shrinkage proof.

</details>

### 8. Why direct Chebyshev is not a strong-law proof

**Exercise 14.8**

<a id="laws-of-large-numbers-ex-8"></a>

For iid variables with $0<\\sigma^2<\\infty$, show the sum of the Chebyshev bounds for $\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mu \\rvert >\\varepsilon )$ diverges.

<details>
<summary>Hint 1</summary>

Sum the Chebyshev bounds over all positive integers.

</details>

<details>
<summary>Hint 2</summary>

The resulting series is a positive constant times the divergent harmonic series; this does not show the actual error events recur.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $\\sigma^{2}/(n\\varepsilon^{2})$. Summing gives

$(\\sigma^{2}/\\varepsilon^{2})\\sum_{n=1}^\\infty 1/n$,

which diverges. Therefore the first Borel–Cantelli lemma cannot be applied directly at every integer $n$; a dyadic and maximal-inequality refinement is needed.

</details>

### 9. Dyadic summability

**Exercise 14.9**

<a id="laws-of-large-numbers-ex-9"></a>

Show that the corresponding Chebyshev bounds at $n=2^{m}$ are summable.

<details>
<summary>Hint 1</summary>

Replace the sample size by $2^m$ before summing.

</details>

<details>
<summary>Hint 2</summary>

The resulting error bounds form a convergent geometric series.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $n=2^{m}$, the bound is $\\sigma^{2}/(\\varepsilon^{2} 2^{m})$. Its sum over $m\\ge 0$ is a geometric series with total $2\\sigma^{2}/\\varepsilon^{2}$, hence finite. Borel–Cantelli gives almost-sure control along dyadic times.

</details>

### 10. A Borel–Cantelli conclusion

**Exercise 14.10**

<a id="laws-of-large-numbers-ex-10"></a>

If $\\mathbb{P}(\\lvert X_{n}-X\\rvert >\\varepsilon )\\le 3/n^{2}$, prove that $\\lvert X_{n}-X\\rvert >\\varepsilon$ occurs only finitely often almost surely.

<details>
<summary>Hint 1</summary>

The first Borel–Cantelli lemma needs only summability, not independence.

</details>

<details>
<summary>Hint 2</summary>

Sum the upper bounds $3/n^2$ for this fixed tolerance.

</details>

<details>
<summary>Solution</summary>

**Solution.** The probability sum is bounded by $3\\sum 1/n^{2}<\\infty$. The first Borel–Cantelli lemma therefore gives

$\\mathbb{P}(\\lvert X_{n}-X\\rvert >\\varepsilon\\ \\text{infinitely often})=0$.

This is an eventual statement for the fixed $\\varepsilon$.

</details>

### 11. From every rational tolerance to convergence

**Exercise 14.11**

<a id="laws-of-large-numbers-ex-11"></a>

Suppose for every positive integer $m$, $\\lvert X_{n}-X\\rvert >1/m$ occurs only finitely often almost surely. Prove $X_{n}\\to X$ almost surely.

<details>
<summary>Hint 1</summary>

Intersect the probability-one eventual-control events for $m=1,2,\\ldots$.

</details>

<details>
<summary>Hint 2</summary>

Given any real tolerance, choose $1/m$ smaller than it on that common probability-one event.

</details>

<details>
<summary>Solution</summary>

**Solution.** Intersect the probability-one events of eventual control over the countable set $m=1,2,...$; the intersection still has probability one. On it, given $\\varepsilon >0$, choose $m$ with $1/m<\\varepsilon$. Eventually $\\lvert X_{n}-X\\rvert \\le 1/m<\\varepsilon$. Hence pointwise convergence holds there.

</details>

### 12. Tail summability from integrability

**Exercise 14.12**

<a id="laws-of-large-numbers-ex-12"></a>

If $W\\ge 0$ and $\\mathbb{E}[W]<\\infty$, prove $\\sum_{n=1}^\\infty \\mathbb{P}(W>n)<\\infty$.

<details>
<summary>Hint 1</summary>

Count the positive integers strictly below the realized value of $W$.

</details>

<details>
<summary>Hint 2</summary>

Tonelli exchanges the nonnegative indicator sum and expectation, and the count is at most $W$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For each outcome,

$\\sum_{n=1}^\\infty \\mathbf{1}_{W>n}\\le W$ up to at most one unit, since the sum counts the positive integers below $W$. Taking expectations by Tonelli gives

$\\sum_{n}\\mathbb{P}(W>n)\\le \\mathbb{E}[W]$.

Thus the probability series is finite.

</details>

### 13. Truncations eventually agree

**Exercise 14.13**

<a id="laws-of-large-numbers-ex-13"></a>

For iid integrable $X_{n}$, set $Y_{n}=X_{n}\\mathbf{1}_{\\lvert X_{n}\\rvert \\le n}$. Prove $X_{n}=Y_{n}$ eventually almost surely.

<details>
<summary>Hint 1</summary>

The truncation differs only on $|X_n|>n$.

</details>

<details>
<summary>Hint 2</summary>

Identical distribution and integrability make these probabilities summable; apply Borel–Cantelli.

</details>

<details>
<summary>Solution</summary>

**Solution.** Identical distribution and the preceding tail bound give

$\\sum_{n}\\mathbb{P}(X_{n}\\ne Y_{n})=\\sum_{n}\\mathbb{P}(\\lvert X_{n}\\rvert >n)=\\sum_{n}\\mathbb{P}(\\lvert X_{1}\\rvert >n)<\\infty$.

By Borel–Cantelli, the events $X_{n}\\ne Y_{n}$ occur only finitely often almost surely.

</details>

### 14. Kronecker's lemma in use

**Exercise 14.14**

<a id="laws-of-large-numbers-ex-14"></a>

Suppose $\\sum_{n=1}^\\infty Z_{n}/n$ converges almost surely. What does Kronecker's lemma imply?

<details>
<summary>Hint 1</summary>

Kronecker's lemma is deterministic and applies sample path by sample path.

</details>

<details>
<summary>Hint 2</summary>

On every path where the weighted series converges, it forces the ordinary arithmetic averages to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the deterministic lemma on every sample path where the series converges. It gives

$(1/n)\\sum_{k=1}^{n} Z_{k}\\to 0$

on that probability-one event. Thus the averages converge to zero almost surely.

</details>

### 15. A non-iid strong law

**Exercise 14.15**

<a id="laws-of-large-numbers-ex-15"></a>

Let independent $X_{n}$ satisfy $\\mathbb{E}[X_{n}]=0$ and $\\operatorname{Var}(X_{n})\\le n^{1/2}$. Verify the variance criterion for almost-sure average convergence.

<details>
<summary>Hint 1</summary>

Divide the given variance upper bound by $n^2$.

</details>

<details>
<summary>Hint 2</summary>

The resulting series is bounded by $\\sum n^{-3/2}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** We have

$\\sum_{n} \\operatorname{Var}(X_{n})/n^{2}\\le \\sum_{n} n^{1/2}/n^{2}=\\sum_{n}1/n^{3/2}<\\infty$.

The non-identical strong-law criterion therefore gives $(1/n)\\sum_{k=1}^{n}X_{k}\\to 0$ almost surely.

</details>

### 16. Diagnose a failed variance criterion

**Exercise 14.16**

<a id="laws-of-large-numbers-ex-16"></a>

Suppose independent centered $X_{k}$ satisfy $\\operatorname{Var}(X_{k})=k$. Determine whether the usual variance method proves their averages converge to zero in probability.

<details>
<summary>Hint 1</summary>

Compute the exact variance of the centered average.

</details>

<details>
<summary>Hint 2</summary>

It approaches $1/2$, so this sufficient variance method fails; do not infer a weak law from it.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum of variances is

$\\sum_{k=1}^{n} k=n(n+1)/2$.

Therefore the average variance is $(n+1)/(2n)$, which tends to $1/2$, not zero. The variance method does **not** prove convergence. Indeed the stated assumptions are insufficient. This calculation diagnoses failure rather than establishing a weak law.

</details>

### 17. Cauchy averages

**Exercise 14.17**

<a id="laws-of-large-numbers-ex-17"></a>

Let $X_{1},...,X_{n}$ be iid standard Cauchy. Explain why their average does not converge in probability to zero.

<details>
<summary>Hint 1</summary>

Use the characteristic function $e^{-|t|}$ of a standard Cauchy variable.

</details>

<details>
<summary>Hint 2</summary>

Scaling the argument by $1/n$ and taking the $n$th power leaves the transform unchanged.

</details>

<details>
<summary>Solution</summary>

**Solution.** Characteristic functions give

$\\varphi_{(S_{n}/n)}(t)=[e^{-\\lvert t\\rvert /n}]^{n}=e^{-\\lvert t\\rvert }$.

Thus every average has the standard Cauchy law. For any fixed $\\varepsilon >0$, $\\mathbb{P}(\\lvert S_{n}/n\\rvert >\\varepsilon )$ is a positive constant independent of $n$, so it cannot tend to zero. The ordinary mean is undefined.

</details>

### 18. Consistency of the sample proportion

**Exercise 14.18**

<a id="laws-of-large-numbers-ex-18"></a>

For iid Bernoulli $(p)$ observations, state both weak and strong consistency of $\\hat{p}_{n}=\\bar{X}_{n}$.

<details>
<summary>Hint 1</summary>

Bernoulli variables satisfy the integrability hypothesis of the iid strong law.

</details>

<details>
<summary>Hint 2</summary>

Almost-sure convergence also implies convergence in probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since Bernoulli variables are integrable, the strong law gives $\\hat{p}_{n}\\to p$ almost surely. Consequently $\\hat{p}_{n}\\to_{P}p$ as well. Thus the sample proportion is both strongly and weakly consistent.

</details>

### 19. A plug-in estimator

**Exercise 14.19**

<a id="laws-of-large-numbers-ex-19"></a>

Suppose $\\bar{X}_{n}\\to_{P}\\mu$ and $\\mu >0$. Prove $\\sqrt{\\bar{X}_{n}}\\to_{P} \\sqrt{\\mu }$ when the square root is defined on the observed values.

<details>
<summary>Hint 1</summary>

The square-root map is continuous at the positive limiting mean.

</details>

<details>
<summary>Hint 2</summary>

Check that the statistic is real-valued on the observations, then apply continuous mapping.

</details>

<details>
<summary>Solution</summary>

**Solution.** The square-root function is continuous at the positive point $\\mu$. The continuous mapping theorem for convergence in probability gives

$\\sqrt{\\bar{X}_{n}}\\to_{P} \\sqrt{\\mu }$.

The positivity qualification prevents applying a real square root to invalid observations.

</details>

### 20. Vanishing bias and variance

**Exercise 14.20**

<a id="laws-of-large-numbers-ex-20"></a>

Let estimators $T_{n}$ satisfy $\\mathbb{E}[T_{n}]-\\theta =1/n$ and $\\operatorname{Var}(T_{n})=4/n$. Prove consistency.

<details>
<summary>Hint 1</summary>

Compute mean-square error as variance plus squared bias.

</details>

<details>
<summary>Hint 2</summary>

Both $4/n$ and $1/n^2$ vanish; Markov then implies consistency.

</details>

<details>
<summary>Solution</summary>

**Solution.** The mean-square error is

$\\mathbb{E}[(T_{n}-\\theta )^{2}]=\\operatorname{Var}(T_{n})+(\\mathbb{E}[T_{n}]-\\theta )^{2}=4/n+1/n^{2}\\to 0$.

Thus $T_{n}\\to \\theta$ in $L^{2}$, and therefore in probability. The estimators are biased at every finite $n$ but consistent.

</details>


## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](back-matter/references-and-attribution-guide.md) records the wider source map.


## 12. Summary and forward route

The finite-variance weak law follows from variance additivity and Chebyshev. Truncation extends the iid weak law to the finite-mean boundary. The iid finite-mean strong law combines tail summability, Borel–Cantelli, the Kolmogorov convergence criterion, and Kronecker's lemma. Independent non-identical sequences require separate control of variance and deterministic centers, while dependence and infinite-mean tails can destroy ordinary averaging.

As an inferential statement, a law of large numbers establishes consistency but not a finite-sample error distribution. The next chapter, [Central Limit Theorems](#/item/book-probability-models-proofs?chapter=central-limit-theorems), studies the fluctuation scale around the law-of-large-numbers target and the conditions under which normalized errors become approximately normal.
`;export{e as default};