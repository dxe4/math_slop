
# Spectral and Dependent-data Inference

Preparation is stationary covariances, finite Gaussian moments, Fourier orthogonality and Slutsky’s theorem. General covariance identities and the later Gaussian estimator theorem have different hypotheses, which remain explicit.

## Spectral inference is a covariance question before it is a model fit

For a stationary series, nearby observations can carry overlapping information. The variance relevant to its mean is not generally the one-time marginal variance divided by sample size. Spectral analysis reorganises the covariance sequence into frequency contributions, and its value at zero controls long-run mean uncertainty.

This chapter treats inference for covariance and long-run variance. It does not replace the separate time-series curriculum on ARMA identification, forecasting or state-space dynamics. Preparation is [dependent central limits](dependent-central-limits.md), finite Gaussian vectors and Fourier sums.

We first prove deterministic covariance identities under absolute summability. Then a stationary Gaussian model supplies a transparent consistency proof for a Bartlett estimator. Outside that Gaussian setting, a central limit theorem and covariance-estimator consistency need their own dependence hypotheses.

## A spectral density from absolutely summable covariances

Let $(X_t)_{t\in\mathbb Z}$ be real, mean-zero, covariance-stationary, with covariance $\gamma(h)=E(X_{t+h}X_t)$ and
$$
\sum_{h\in\mathbb Z}|\gamma(h)|<\infty.
$$
Define
$$
f(\omega)=\frac1{2\pi}\sum_{h\in\mathbb Z}\gamma(h)e^{-ih\omega},
\qquad -\pi\le\omega\le\pi.
$$
Absolute summability makes this a uniformly convergent continuous real function. Reality follows from $\gamma(-h)=\gamma(h)$.

It is nonnegative. Indeed the expected squared Fourier sum divided by $2\pi n$ is
$$
f_n(\omega)=\frac1{2\pi}
\sum_{|h|<n}(1-|h|/n)\gamma(h)e^{-ih\omega}\ge0.
$$
The equality follows by expanding the square and counting pairs at each lag. The series converges uniformly to $f$: first control a fixed finite set of lags, then bound the remaining tail by absolute summability. Hence its limit is nonnegative.

Termwise integration is justified by the same summability and gives Fourier inversion,
$$
\gamma(h)=\int_{-\pi}^{\pi}e^{ih\omega}f(\omega)\,d\omega.
$$
Thus the density and covariance sequence encode the same second-order information. They do not identify the full joint law unless an additional family, such as a Gaussian process, is specified.

## Long-run variance of the mean

Directly expanding the sample-mean variance gives
$$
n\operatorname{Var}(\overline X_n)
=\sum_{|h|<n}(1-|h|/n)\gamma(h)
\longrightarrow\sum_h\gamma(h)=2\pi f(0).
$$
Dominated summation proves the limit. The result is a variance identity, not by itself a central limit theorem for arbitrary non-Gaussian series.

Write the limit as $\sigma_{\rm LR}^2$. It is nonnegative by the preceding variance expression, but can be zero even when marginal variance is positive. Studentising by an estimator converging to zero does not give the ordinary positive-variance normal pivot.

For a stationary Gaussian process, every finite sample mean is exactly Gaussian. If $\sigma_{\rm LR}^2>0$, the displayed variance convergence alone therefore proves the normal limit with that variance. No separate Gaussian mixing theorem is needed for this particular mean statistic.

For a non-Gaussian process, use a valid dependent central limit theorem with its stated moment and dependence conditions. Summable covariances alone do not supply all higher-order control required by every such theorem.

## A periodogram can have the right expectation and fail consistency

With the mean known to be zero, define
$$
I_n(\omega)=\frac1{2\pi n}
\left|\sum_{t=1}^nX_te^{-it\omega}\right|^2.
$$
Its expectation is exactly the nonnegative finite covariance sum above and tends to $f(\omega)$. Asymptotic unbiasedness is therefore available under the stated summability.

It does not imply consistency. For iid centred Gaussian noise of variance $\sigma^2$, choose a Fourier frequency $2\pi j/n$ that is neither zero nor the Nyquist frequency. Discrete sine and cosine orthogonality make the real and imaginary sums independent normals, each of variance $n\sigma^2/2$.

Consequently $I_n(\omega)/f(\omega)$ has the mean-one exponential distribution exactly. Its variation does not shrink as length grows along such frequencies. A single raw ordinate therefore does not consistently estimate the constant spectral density even in this simplest case.

If the sample mean is subtracted, the zero-frequency Fourier sum becomes identically zero. That is an algebraic consequence of centring, not evidence that the underlying process has zero long-run variance. Smoothing or a covariance-window estimator is needed.

## A Bartlett long-run variance estimator

For now keep the mean known and define
$$
\widehat\gamma(h)=\frac1n\sum_{t=1}^{n-h}X_tX_{t+h}.
$$
For an integer lag budget $b$, let
$$
\widehat\sigma_B^2
=\widehat\gamma(0)+
2\sum_{h=1}^b\left(1-\frac h{b+1}\right)\widehat\gamma(h).
$$
The triangular weights taper rather than abruptly retain every lag.

The estimator is nonnegative for every finite dataset. Extend observations by zero outside the sample. Then
$$
\widehat\sigma_B^2
=\frac1{n(b+1)}
\sum_{s=1-b}^{n}
\left(\sum_{j=0}^bX_{s+j}\right)^2.
$$
Expanding the sum shows each lag-$h$ product occurs $b+1-|h|$ times, giving exactly the displayed covariance formula. This positive-square representation is stronger than merely hoping an estimated spectral value is nonnegative.

The extension convention concerns computation, not a claim that the stationary process is zero outside its observed window. It accounts for boundary products precisely.

## A complete consistency proof in a Gaussian model

Assume now the stationary process is Gaussian and its covariances are absolutely summable. Let $b\to\infty$ with $b=o(\sqrt n)$.

The estimator expectation replaces each true lag covariance by $(1-h/n)\gamma(h)$ and applies a bounded triangular weight that tends to one at every fixed lag. Absolute summability and dominated summation therefore make the expectation converge to $\sigma_{\rm LR}^2$.

For variance, the centred Gaussian fourth-moment identity gives
$$
\operatorname{Cov}(X_tX_{t+h},X_sX_{s+h})
=\gamma(t-s)^2+\gamma(t-s-h)\gamma(t-s+h).
$$
The identity follows from Gaussian pairings after the product of the two means is cancelled.

Summing absolute values over observation pairs yields, uniformly in lag,
$$
\operatorname{Var}(\widehat\gamma(h))
\le\frac2n\sum_r\gamma(r)^2.
$$
For the second product, Cauchy–Schwarz bounds its lag sum by the same squared-covariance sum. Absolute summability implies that sum is finite.

The standard deviation of the weighted covariance sum is at most the sum of the weighted individual standard deviations, by the $L_2$ triangle inequality. There are order $b$ terms, so it is $O(b/\sqrt n)=o(1)$. Chebyshev completes consistency.

The bandwidth restriction is deliberately stronger than some refined results. It makes this elementary uniform variance argument sufficient. The proof does not assert that every larger lag budget is inconsistent; it simply does not cover them.

## Estimating the mean does not break this stated bandwidth result

Replace observations by their deviations from the sample mean and use the same covariance denominator and weights. The positive-square representation still applies, so the centred estimator remains nonnegative.

Under absolute covariance summability, the sample mean is $O_p(n^{-1/2})$. The average of absolute observations is $O_p(1)$, since stationarity and finite first moment bound its expectation.

Expanding each centred lag product shows its difference from the known-mean product is controlled by the sample mean times partial observation averages, plus a squared-mean term. Summing over at most $b$ lags makes the total difference $O_p(b/\sqrt n)+O_p(b/n)$, which vanishes under the chosen lag condition.

Thus the centred Bartlett estimator is also consistent in this Gaussian model. Combining its positive limiting variance with the Gaussian sample-mean limit and Slutsky gives the usual studentised normal limit.

The calculation specifies the centring convention rather than treating a zero-frequency periodogram as interchangeable with a lag-window estimate.

## Why serial dependence needs a declared sampling unit

A covariance estimate presumes an ordered time index and a stationarity model. Shuffling rows or splitting consecutive records as though they were independent observations does not remove dependence from the process that generated them.

Likewise, several participants each observed repeatedly introduce both subject and time structure. A scalar covariance sequence for one stationary series is not automatically the variance model for pooled longitudinal rows. Clusters, panel dimensions and observation schedules must be stated.

Missing or irregular times also change the available lag pairs. The denominator and stationarity interpretation cannot be inherited silently from a regularly sampled formula.

A practical lag budget trades truncation bias against estimation variability. Including more lags can represent more dependence while adding noisy covariance estimates. The present theorem makes one sufficient growth condition precise, but does not establish a universally optimal data-driven bandwidth.

## Spectral features and multiple comparisons

A large raw periodogram peak is not automatically a significant periodic component. Even white noise has exponential variation in its nonzero Fourier ordinates. Searching many frequencies changes the event being evaluated.

Pointwise frequency inference, detection of a sinusoidal mean and estimation of a smooth stochastic spectrum are different targets. Each needs a model for mean removal, dependence and the search procedure. A visually striking frequency can also arise from a trend, a boundary discontinuity or a nonstationary regime rather than a stationary oscillation.

The same caution applies to estimated long-run variance. A small estimate can reflect genuine cancellation, insufficient lag coverage or finite-sample error. Positive semidefiniteness prevents an impossible negative estimate but does not establish accuracy.

## Connection with resampling and other inference

An iid bootstrap destroys serial relationships by independently resampling individual observations. It therefore does not generally reproduce long-run mean variance for a dependent source. Block resampling keeps local stretches intact but adds block-length and mixing conditions.

The functional-delta and dependent-limit chapters state those broader boundary issues. The present chapter supplies a complete Gaussian covariance-window route, so its uncertainty claim is supported without an unproved assertion that every resampling method works.

Similarly, a spatial covariance model can use a different geometry and sampling domain. Fourier ideas remain relevant, but one-dimensional lag counts and limits must be replaced by the actual design. Naming dependence is only the beginning; the mathematical covariance and asymptotic experiment do the work.

## Worked example 13.1: A persistent Gaussian autoregression

For $X_t=\rho X_{t-1}+\varepsilon_t$ with $|\rho|<1$ and iid centred Gaussian innovations of variance $\tau^2$, covariance is $\tau^2\rho^{|h|}/(1-\rho^2)$. Its absolute sum is finite. Summing the geometric series gives long-run variance $\tau^2/(1-\rho)^2$. Relative to marginal variance, the ratio is $(1+\rho)/(1-\rho)$. Positive correlation raises mean uncertainty; negative correlation can reduce it. This is an exact model calculation, not a fitted guarantee for an arbitrary observed series.

## Worked example 13.2: A nonzero process with zero long-run variance

Let $X_t=\varepsilon_t-\varepsilon_{t-1}$ for iid centred Gaussian innovations of variance $\tau^2$. Covariances are $2\tau^2$ at zero, $-\tau^2$ at lags one and minus one, and zero elsewhere. Their sum is zero. The sample sum telescopes to $\varepsilon_n-\varepsilon_0$, so scaling the mean by square root of sample size gives a degenerate limit. The positive-variance studentised theorem is inapplicable even though marginal variance is positive and covariances are summable.

## Worked example 13.3: The smallest Bartlett window

With lag budget one, the estimator is $\widehat\gamma(0)+\widehat\gamma(1)$. Its square representation averages sums of two adjacent observations, including zero-padded boundary windows, divided by twice sample length. Each square is nonnegative, so the whole expression cannot be negative even when lag-one covariance is strongly negative. This finite positivity property says nothing by itself about whether a one-lag truncation captures all relevant serial dependence.

## Vector means and a positive-definite contrast target

For a fixed-dimensional stationary vector process, define a matrix covariance at each lag. Assume every entry’s absolute lag sum is finite. Summing those matrices gives a symmetric long-run covariance matrix, because opposite lags are transposes.

For every fixed vector, its quadratic form is the long-run variance of the corresponding scalar process. The scalar variance limit therefore proves that the matrix is positive semidefinite. Entrywise inversion of a covariance formula is not needed for this conclusion.

A multivariate Bartlett estimate can use outer products of the same zero-padded moving-window sums. Every outer product is positive semidefinite, so their weighted average is as well. Expanding it gives the corresponding tapered lag-covariance matrix with its opposite-lag transpose terms.

Under joint Gaussianity, fixed dimension and absolute summability of all cross-covariances, the Gaussian fourth-moment argument controls each matrix entry. The same lag-budget condition gives entrywise consistency, and finite dimension turns it into matrix-norm consistency.

If the target long-run covariance is positive definite, its inverse is a continuous function near that limit. The exact Gaussian vector mean and Slutsky then yield the usual chi-square quadratic form with degrees of freedom equal to the vector dimension.

If it is singular, one cannot obtain that result by dividing through numerically small eigenvalues. A fixed contrast matrix may still select a lower-dimensional target with positive-definite long-run covariance; the same proof then gives the chi-square law for that contrast dimension.

A pseudoinverse or an estimated rank can be useful, but its limiting reference needs a theorem controlling the rank decision and eigenvalue separation. Adding an arbitrary ridge to make a matrix invertible also changes the statistic. Positive semidefiniteness protects algebraic plausibility, while a positive limiting contrast covariance supplies the invertibility needed for inference.

This extension retains fixed dimension. Letting the number of simultaneous series grow with sample size requires bounds uniform in that dimension, which the entrywise finite-dimensional proof has not supplied.

## Sampling can hide frequency differences exactly

Frequency estimation also has an identification boundary independent of covariance-estimation error. At integer observation times, a sinusoid of frequency omega and one of frequency omega plus any integer multiple of two pi have identical sampled values, since their phases differ by full turns. A real-valued cosine additionally agrees with its negative frequency. No estimator using only those discrete observations can distinguish these continuous-time signals without a declared frequency range or other information.

A probabilistic version takes independent centred Gaussian coefficients of equal variance multiplying cosine and sine at a chosen frequency. Its continuous-time covariance is proportional to the cosine of frequency times lag, so it is stationary. Replacing frequency by its discrete-time alias gives exactly the same sampled Gaussian covariance and hence the same sampled law. These examples have spectral atoms and lie outside the absolutely summable covariance class used in the smooth-density results above. Their purpose is to separate sampling identification from those theorems: a fine numerical frequency grid cannot recover distinctions that the observation map has erased. Changing the time spacing changes which physical frequencies alias.

## Exercises

### Exercise 13.1
<a id="spectral-and-dependent-data-inference-ex-1"></a>

Prove the covariance spectral series is continuous under absolute summability.

<details>
<summary>Hint 1</summary>

Every summand is continuous.

</details>
<details>
<summary>Hint 2</summary>

The absolute covariance sum uniformly dominates the tails.

</details>
<details>
<summary>Solution</summary>

The absolute value of a tail is bounded by the corresponding covariance tail sum divided by $2\pi$, uniformly in frequency. Those bounds vanish, giving uniform convergence of continuous partial sums and therefore continuity. The same domination permits termwise integration.

</details>

### Exercise 13.2
<a id="spectral-and-dependent-data-inference-ex-2"></a>

Why is the spectral density nonnegative?

<details>
<summary>Hint 1</summary>

Use expected squared finite Fourier sums.

</details>
<details>
<summary>Hint 2</summary>

Pass to their uniform limit.

</details>
<details>
<summary>Solution</summary>

Each finite covariance taper equals a nonnegative expected squared modulus divided by $2\pi n$. Absolute summability makes these tapers converge uniformly to the defined density. A limit of nonnegative real values is nonnegative at every frequency.

</details>

### Exercise 13.3
<a id="spectral-and-dependent-data-inference-ex-3"></a>

Derive the mean-variance taper factor.

<details>
<summary>Hint 1</summary>

Count observation pairs at a fixed lag.

</details>
<details>
<summary>Hint 2</summary>

There are $n-|h|$ such pairs.

</details>
<details>
<summary>Solution</summary>

Expanding the sample-sum variance groups pairs by lag. Dividing by sample length gives coefficient $(n-|h|)/n$ for every lag with $|h|<n$. The absolute-sum condition then justifies convergence to the full covariance sum.

</details>

### Exercise 13.4
<a id="spectral-and-dependent-data-inference-ex-4"></a>

Does convergence of variance alone prove a non-Gaussian central limit theorem?

<details>
<summary>Hint 1</summary>

A distribution is not determined by its first two moments.

</details>
<details>
<summary>Hint 2</summary>

Identify the special Gaussian step.

</details>
<details>
<summary>Solution</summary>

No. The Gaussian argument works because each finite sample mean is already Gaussian, so its changing variance identifies its law. General non-Gaussian sums need a separate limit theorem controlling dependence and tails beyond covariance summability.

</details>

### Exercise 13.5
<a id="spectral-and-dependent-data-inference-ex-5"></a>

Why is an iid Gaussian periodogram ordinate inconsistent?

<details>
<summary>Hint 1</summary>

Its ratio to the true density remains exponential.

</details>
<details>
<summary>Hint 2</summary>

Its variance does not vanish.

</details>
<details>
<summary>Solution</summary>

At nonexceptional Fourier frequencies, orthogonal Gaussian sine and cosine sums yield a mean-one exponential ratio exactly. This distribution does not concentrate at one as length grows, despite the correct expected value. Smoothing is required for consistent spectral estimation.

</details>

### Exercise 13.6
<a id="spectral-and-dependent-data-inference-ex-6"></a>

Explain why centring forces the zero-frequency periodogram to zero.

<details>
<summary>Hint 1</summary>

The centred observations sum to zero.

</details>
<details>
<summary>Hint 2</summary>

The zero-frequency exponential factors are all one.

</details>
<details>
<summary>Solution</summary>

The Fourier sum at zero is exactly the sample sum of centred observations, hence zero. Its squared modulus is zero for algebraic reasons. This cannot establish that the population spectral density at zero is zero.

</details>

### Exercise 13.7
<a id="spectral-and-dependent-data-inference-ex-7"></a>

Prove Bartlett nonnegativity without using an asymptotic approximation.

<details>
<summary>Hint 1</summary>

Expand the moving-window square representation.

</details>
<details>
<summary>Hint 2</summary>

Count each lag product’s repetitions.

</details>
<details>
<summary>Solution</summary>

Each lag-$h$ product occurs $b+1-|h|$ times in the zero-padded moving sums. After normalisation, the coefficients equal the Bartlett covariance weights. The estimator is therefore a sum of squares and nonnegative on every dataset.

</details>

### Exercise 13.8
<a id="spectral-and-dependent-data-inference-ex-8"></a>

Where is Gaussianity used in the consistency proof?

<details>
<summary>Hint 1</summary>

Inspect the covariance of lag products.

</details>
<details>
<summary>Hint 2</summary>

It reduces fourth moments to covariance products.

</details>
<details>
<summary>Solution</summary>

The Gaussian pairing identity expresses the required fourth-order covariance through two products of the covariance sequence. That enables a uniform $O(1/n)$ bound. A non-Gaussian process may have additional fourth-order cumulants requiring another summability or dependence assumption.

</details>

### Exercise 13.9
<a id="spectral-and-dependent-data-inference-ex-9"></a>

Why is $b=o(\sqrt n)$ sufficient in this proof?

<details>
<summary>Hint 1</summary>

Sum at most order-$b$ individual standard deviations.

</details>
<details>
<summary>Hint 2</summary>

Use the uniform inverse-square-root sample bound.

</details>
<details>
<summary>Solution</summary>

The $L_2$ triangle inequality bounds total standard deviation by order $b/\sqrt n$. The stated condition sends this to zero, while $b\to\infty$ removes fixed-lag truncation bias. It is sufficient for this proof and need not be necessary.

</details>

### Exercise 13.10
<a id="spectral-and-dependent-data-inference-ex-10"></a>

Why does a positive Bartlett estimate not prove a valid confidence interval?

<details>
<summary>Hint 1</summary>

Positivity and consistency are different.

</details>
<details>
<summary>Hint 2</summary>

A central limit theorem and positive limiting variance are also required.

</details>
<details>
<summary>Solution</summary>

Finite positivity rules out a negative variance estimate but does not show it is close to the target. Studentised inference additionally needs estimator consistency, a valid sample-mean limit and strictly positive long-run variance. The zero-sum covariance example violates the last condition.

</details>

## Summary

Absolute covariance summability proves the spectral and mean-variance identities. Raw Gaussian periodograms expose the distinction between expectation and consistency. A Bartlett square representation and Gaussian fourth-moment bound prove nonnegative consistent long-run variance estimation under an explicit lag growth rate, supporting a scoped studentised mean limit.
