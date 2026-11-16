
# Spectral Analysis and the Periodogram

Autocovariance describes dependence by lag. Spectral analysis describes the same second-order structure by frequency: which oscillation scales contribute to variation. The two views are connected by Fourier transforms under explicit summability conditions. We derive a spectral density for a simple AR model, calculate a finite periodogram exactly, and explain why a tall periodogram ordinate is a clue rather than a probability statement. The chapter uses cycles per observation step; angular frequency is two pi times that quantity.

Read [stationarity and autocovariance](stationarity-autocovariance.md) and [ARMA models](arma-models.md). Let gamma(h) be a real weakly stationary autocovariance. A frequency lambda is measured in cycles per step, with lambda and lambda plus any integer indistinguishable on an integer time grid. We use the interval [-1/2,1/2] as one full frequency period. Every formula below states its normalisation; some books insert a factor 1/(2pi) because they use radians rather than cycles.

## From covariance to frequency

**Definition 7.1 (Spectral density).** If sum over all integer h of |gamma(h)| is finite, define f(lambda)=sum_{h=-infinity}^{infinity} gamma(h)exp(-2pi i lambda h) for lambda in [-1/2,1/2]. The series converges uniformly and gives a real continuous function because gamma(-h)=gamma(h). Under this convention, gamma(h)=integral_{-1/2}^{1/2} f(lambda)exp(2pi i lambda h) d lambda.

**Proposition 7.2 (Fourier inversion under absolute summability).** The inversion formula in Definition 7.1 holds for each integer h.

*Proof.* Uniform absolute convergence permits interchange of the series and integral. The integral of exp(2pi i lambda(h-k)) over one full frequency period equals one when h=k and zero for other integer k. Only the coefficient gamma(h) remains. The argument establishes the stated inversion under the summability hypothesis; it does not prove the general spectral-representation theorem for processes without a density. ∎

The covariance matrix must be positive semidefinite, and this forces f(lambda)≥0 for a continuous density under the stated summability condition. A proof can be obtained by applying the covariance quadratic form to long finite complex sinusoid vectors and taking a normalised limit. We give the finite algebra: for vector a_t=exp(2pi i lambda t), t=1,...,n, the nonnegative quadratic form divided by n is sum_{|h|<n}(1-|h|/n)gamma(h)exp(-2pi i lambda h). Absolute summability permits the limit n→infinity, which is f(lambda), so f(lambda)≥0. This argument uses complex coefficients through the Hermitian covariance form; real and imaginary parts give the same nonnegativity if one prefers real vectors.

**Theorem 7.3 (Variance as spectral area).** Under Definition 7.1, gamma(0)=integral_{-1/2}^{1/2} f(lambda)d lambda.

*Proof.* Set h=0 in Proposition 7.2. The exponential factor becomes one, leaving the integral of f. Because f is nonnegative, the total area is a variance and cannot be negative. ∎

**Worked example 7.4 (White noise and an AR peak).** Weak white noise with variance sigma² has gamma(0)=sigma² and all other gamma(h)=0, so f(lambda)=sigma² at every frequency: its second-order power is flat. A causal AR(1) with phi=1/2 and innovation variance one has transfer factor 1/(1-phi exp(-2pi i lambda)), so f(lambda)=1/|1-(1/2)exp(-2pi i lambda)|². At lambda=0, its value is 1/(1-1/2)²=4; at the Nyquist frequency lambda=1/2, it is 1/(1+1/2)²=4/9. Positive persistence favors low frequencies. This comparison does not mean a particular observed series contains a deterministic sinusoid at zero frequency.

To justify the AR formula directly, use the causal coefficients psi_j=phi^j. Their Fourier series is sum_{j≥0}phi^jexp(-2pi i lambda j)=1/(1-phi exp(-2pi i lambda)) for |phi|<1. Covariance of the filtered white noise has spectral density sigma² times the squared modulus of this transfer function. This is the frequency counterpart of summing matching innovation coefficients for gamma(h). For negative phi, the denominator is smallest near lambda=1/2, so power is relatively high near alternating-step frequency instead.

## Finite Fourier transforms

**Definition 7.5 (Raw periodogram).** For observed x_0,...,x_{n-1}, let z_t=x_t-xbar and D_n(lambda)=sum_{t=0}^{n-1}z_t exp(-2pi i lambda t). Define I_n(lambda)=|D_n(lambda)|²/n. At Fourier frequencies lambda_j=j/n, j=0,...,n-1, the discrete transform can be computed without numerical integration. With centred data, I_n(0)=0 exactly; that is a consequence of subtracting xbar, not evidence of no low-frequency population power.

**Theorem 7.6 (Finite Parseval identity).** For real centred data, sum_{j=0}^{n-1} I_n(j/n)=sum_{t=0}^{n-1} z_t².

*Proof.* Expand the left side as n^{-1}sum_j sum_{t,s}z_t z_s exp(-2pi i j(t-s)/n). The inner sum over j is n when t=s modulo n and zero otherwise. Since t,s both lie in 0,...,n-1, equality modulo n means t=s. The remaining expression is sum_t z_t². ∎

**Worked example 7.7 (A four-point oscillation).** Take invented centred data x=(1,0,-1,0), indexed t=0,1,2,3. At lambda=1/4, D=1+(-1)exp(-pi i)=2, so I_4(1/4)=|2|²/4=1. The conjugate frequency 3/4 also has ordinate one. At zero and one half, D=0 and the ordinates vanish. Their sum is two, matching 1²+0²+(-1)²+0² by Parseval. The toy vector is exactly oscillatory, but four numbers do not establish a stationary stochastic frequency peak in a population.

For real data, D_n(1-lambda) is the complex conjugate of D_n(lambda) at matching Fourier frequencies, so the raw periodogram is symmetric. The special frequencies zero and one half, when n is even, are self-paired. Reporting only positive frequencies avoids duplicate information if the normalisation is adjusted consistently. A one-sided plot may double interior ordinates; comparing its vertical axis to the two-sided f(lambda) without noting that convention creates a factor-of-two error.

## Aliasing, leakage and uncertainty

At integer times, exp(2pi i(lambda+k)t)=exp(2pi i lambda t) for every integer k. Frequencies differing by an integer cycle per step are observationally aliased. More generally, a sinusoid above the Nyquist frequency can appear at a lower frequency after sampling. Increasing the recording rate or using prior band limits is needed to distinguish them; a longer record at the same step size alone cannot resolve exact aliases.

**Worked example 7.8 (An alias on an integer grid).** Compare cos(2pi(1/4)t) and cos(2pi(5/4)t) for integer t. Their difference in frequency is one cycle per step, so cos(2pi(5/4)t)=cos(2pi(1/4)t+2pi t)=cos(2pi(1/4)t). They produce identical sampled values at every integer time, not merely approximately equal periodograms. A claim that the sampled series identifies which continuous-time oscillation generated it would need an additional sampling or band-limiting assumption.

A finite observation window also spreads a sinusoid's energy across nearby Fourier bins when its frequency is not exactly a Fourier frequency. This is spectral leakage, a property of multiplying a long process by a rectangular time window. Tapering changes the leakage shape but also changes scale and effective information; smoothing periodogram ordinates trades frequency resolution for reduced variance. The raw periodogram at a fixed frequency is not generally a consistent pointwise estimator of a smooth spectral density: increasing n provides finer frequencies but does not automatically remove its random ordinate variability. Consistency claims for smoothed estimates require bandwidth and dependence assumptions.

**Proposition 7.9 (Expected true-mean periodogram).** Suppose a weakly stationary process has known mean mu, and define J_n(lambda)=n^{-1}|sum_{t=0}^{n-1}(X_t-mu)exp(-2pi i lambda t)|². Then E[J_n(lambda)]=sum_{|h|<n}(1-|h|/n)gamma(h)exp(-2pi i lambda h).

*Proof.* Expand the squared modulus into a double sum over times t and s. Its expected cross-product is gamma(t-s), and its exponential factor depends on t-s. For a fixed lag h=t-s with |h|<n, exactly n-|h| ordered pairs have that lag. Dividing by n gives the triangular weight 1-|h|/n. Summing all lags yields the formula. The result is real by covariance symmetry. ∎

The triangular weights explain a finite-window bias: the expected ordinate is a blurred version of the full covariance Fourier series, not exactly f(lambda). If the covariance is absolutely summable, the displayed expectation tends to f(lambda) at each fixed frequency by dominated convergence. That convergence of the **expectation** does not make the random raw ordinate concentrate around f; its variance can remain substantial. Also, the proposition uses the true mean mu. Replacing it by the sample mean changes the finite expectation, most visibly at lambda=0 where the centred periodogram is forced to zero. Keeping those two definitions separate prevents an apparent contradiction.

For an exact sinusoid at a Fourier-grid frequency j/n, its finite Fourier sum aligns at that bin. If the sinusoid instead completes j plus one half cycles in the n-point window, its phases do not cancel at all other bins. The geometric-sum formula for complex exponentials has numerator 1-exp(-2pi i n delta) and denominator 1-exp(-2pi i delta) for frequency offset delta from a bin. When delta is not an integer multiple of 1/n, several nearby bins receive nonzero magnitude. A large side lobe can therefore arise from windowing a deterministic oscillation rather than from a second physical frequency. Tapers reduce some side lobes by changing the time weights, but they broaden the main response and require a different normalisation. State the chosen window before comparing peak heights across analyses.

## Frequency resolution and physical interpretation

If observations are quarterly, one unit step is one quarter and the annual seasonal frequency is 1/4 cycle per step. A two-year oscillation is 1/8 cycle per quarterly step. With n=8 quarterly observations, Fourier frequencies are multiples of 1/8, so both example frequencies lie on the grid. With n=6 they do not both align; the periodogram can still be evaluated continuously, but its standard discrete ordinates sample only multiples of 1/6. More data refine the grid while retaining the same Nyquist limit of 1/2 cycle per step. A faster sampling rate changes the Nyquist limit in physical units, which is why longer duration and finer sampling solve different problems.

The spectrum of a stationary covariance process summarizes average second-order variation, not the phase of an individual observed pattern. Two processes can share f(lambda) yet differ in higher-order dependence, just as they can share all autocovariances. A periodogram peak is thus evidence about a candidate covariance scale under a model and observation window; it does not by itself identify a mechanism, establish a deterministic cycle, or prove that the next peak will occur at a predictable calendar date.

For a series with trend, a large low-frequency ordinate may reflect the changing mean rather than a stationary covariance spectrum. Seasonal deterministic means can produce sharp lines that are conceptually different from a smooth stochastic density. State whether data were centred, detrended, differenced, tapered or windowed before interpreting a spectral plot. The preprocessing choices must be fit using only the training period when spectra are used as forecast features.

## Inert base-R calculation

The source-owned four-point vector supplies every input. R's `fft` uses the same negative-exponent transform convention up to its standard indexing, and the code divides squared modulus by n. It is a self-contained listing, not executed output.

```r
x <- c(1, 0, -1, 0)
z <- x - mean(x)
n <- length(z)
frequency <- (0:(n-1)) / n
periodogram <- Mod(fft(z))^2 / n
data.frame(frequency, periodogram)
sum(periodogram)
sum(z^2)
```

The equal sums express Parseval for this normalisation. For real measurements, the sample interval must be attached to frequency units: if one step is a month, lambda=1/12 cycles per step corresponds to one cycle per year. A software plot labelled only “frequency” can otherwise be read at the wrong physical timescale.

## Exercises

### Exercise 7.1 {#spectral-analysis-periodogram-ex-white}

Find the spectral density of weak white noise with variance five under this chapter's cycles-per-step convention.
<details><summary>Hint 1</summary>Only lag-zero autocovariance is nonzero.</details>
<details><summary>Hint 2</summary>Insert gamma(0)=5 into the Fourier series.</details>
<details><summary>Solution</summary>f(lambda)=5 at every lambda in [-1/2,1/2]. Its integral over the unit-length interval is five, the marginal variance.</details>

### Exercise 7.2 {#spectral-analysis-periodogram-ex-inversion}

Why does integrating f(lambda) over one frequency period recover gamma(0)?
<details><summary>Hint 1</summary>Use the inversion formula with h=0.</details>
<details><summary>Hint 2</summary>The exponential factor is one.</details>
<details><summary>Solution</summary>At h=0, gamma(0)=integral f(lambda)exp(0)d lambda=integral f(lambda)d lambda. The result is a variance and f is nonnegative under the stated spectral-density assumptions.</details>

### Exercise 7.3 {#spectral-analysis-periodogram-ex-ar-zero}

For AR(1) phi=1/2 and innovation variance one, calculate f(0).
<details><summary>Hint 1</summary>At lambda zero the complex exponential is one.</details>
<details><summary>Hint 2</summary>Square the denominator 1-phi.</details>
<details><summary>Solution</summary>f(0)=1/|1-1/2|²=1/(1/4)=4. Positive persistence concentrates more second-order power at low frequencies than white noise of variance one.</details>

### Exercise 7.4 {#spectral-analysis-periodogram-ex-ar-half}

With the same AR(1), calculate f(1/2).
<details><summary>Hint 1</summary>exp(-2pi i(1/2))=-1.</details>
<details><summary>Hint 2</summary>The denominator magnitude is 1+phi.</details>
<details><summary>Solution</summary>f(1/2)=1/(1+1/2)²=4/9. It is smaller than f(0), matching the model's positive serial persistence.</details>

### Exercise 7.5 {#spectral-analysis-periodogram-ex-fourier}

Compute D_4(1/4) for x=(1,0,-1,0).
<details><summary>Hint 1</summary>The sample mean is zero.</details>
<details><summary>Hint 2</summary>Only times zero and two contribute.</details>
<details><summary>Solution</summary>D_4(1/4)=1+(-1)exp(-2pi i(1/4)2)=1-(-1)=2. The corresponding periodogram ordinate is |2|²/4=1.</details>

### Exercise 7.6 {#spectral-analysis-periodogram-ex-parseval}

Use the four-point example to check the finite Parseval identity.
<details><summary>Hint 1</summary>The Fourier ordinates are 0,1,0,1.</details>
<details><summary>Hint 2</summary>Compare with the squared-data sum.</details>
<details><summary>Solution</summary>The periodogram ordinates sum to two. The centred observations have squared sum 1+0+1+0=2. The equality uses the chapter's 1/n periodogram normalisation.</details>

### Exercise 7.7 {#spectral-analysis-periodogram-ex-centered-zero}

Why is I_n(0)=0 for every centred finite dataset?
<details><summary>Hint 1</summary>At lambda zero every exponential factor equals one.</details>
<details><summary>Hint 2</summary>The centred observations sum to zero.</details>
<details><summary>Solution</summary>D_n(0)=sum_t(x_t-xbar)=0, so its squared modulus divided by n is zero. This finite identity does not imply that the population spectral density at frequency zero vanishes.</details>

### Exercise 7.8 {#spectral-analysis-periodogram-ex-alias}

Show that frequencies 1/4 and 5/4 cycles per step are aliased on integer times.
<details><summary>Hint 1</summary>Their difference is one full cycle per step.</details>
<details><summary>Hint 2</summary>exp(2pi i t)=1 for integer t.</details>
<details><summary>Solution</summary>exp(2pi i(5/4)t)=exp(2pi i(1/4)t)exp(2pi i t)=exp(2pi i(1/4)t) for every integer t. Their real cosine observations are identical at all sampled times.</details>

### Exercise 7.9 {#spectral-analysis-periodogram-ex-units}

For monthly observations, what physical cycle corresponds to lambda=1/12 cycles per observation step?
<details><summary>Hint 1</summary>One step is one month.</details>
<details><summary>Hint 2</summary>Take the reciprocal number of steps per cycle.</details>
<details><summary>Solution</summary>The period is twelve monthly steps, so it is one cycle per year. The units would differ if the sampling interval were quarterly or daily.</details>

### Exercise 7.10 {#spectral-analysis-periodogram-ex-raw-limit}

Why does a longer record alone not make each raw periodogram ordinate a reliable point estimate of f(lambda)?
<details><summary>Hint 1</summary>Increasing n gives finer frequency bins.</details>
<details><summary>Hint 2</summary>The raw ordinate retains random variability under many stationary models.</details>
<details><summary>Solution</summary>A longer record improves frequency resolution but a single unsmoothed squared Fourier coefficient can remain highly variable. Smoothing or averaging introduces a variance–resolution tradeoff and requires assumptions for consistency; bin spacing alone does not remove ordinate noise.</details>

## Sources

Original Euler derivations, invented Fourier vector and exercises under CC BY-SA 4.0. The standard spectral route is benchmarked against Brockwell and Davis, *Time Series: Theory and Methods*, second edition. No external spectral estimate or executed R output is reproduced.

## Summary

Under absolute covariance summability, Fourier transformation gives a nonnegative spectral density whose area is marginal variance. The periodogram is a finite squared transform with a stated normalisation and Parseval identity. Aliasing, leakage, centering and random ordinate variability limit interpretation. The next chapter returns to the time domain through latent states and recursive prediction.
