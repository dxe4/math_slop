
# Dependence Across Variables, Time, and Space

**Before reading.** Read [Joint Distributions and Covariance](../books/introduction-to-probability/joint-distributions-covariance.md), [Specifying a Process](../books/stochastic-processes-paths/specifying-a-process.md) and [Inner Products and Orthogonal Decomposition](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md). These are preparation for the ideas used below.

Independent rows are an especially simple geometry. Multivariate measurements share a unit, time series share a past, and spatial measurements share a neighborhood. Dependence changes effective information, validation, uncertainty, and sometimes the estimand itself.

This deep dive assumes covariance, eigenvalues, regression, and stochastic processes. It develops the structured-data portion of the [advanced course](#/courses/atlas-advanced-statistics-design-dependence); the [reference book](#/books/advanced-statistical-inference-reference) states supporting limit theory.

## 1. Dependence is relative to a joint law

Marginal distributions do not determine a joint distribution. Two standard-normal variables can be independent, strongly correlated, or nonlinearly dependent while retaining identical marginals. Covariance captures linear co-movement but not every dependence pattern.

For random vector $X$, covariance $\Sigma$ is positive semidefinite. Zero covariance implies independence for a jointly multivariate-normal vector, but not generally. Example: if $X$ is symmetric about zero and $Y=X^{2}$, then $\operatorname{Cov}(X,Y)=E[X^{3}]-E[X]E[X^{2}]=0$, yet $Y$ is determined by $X$.

Conditional independence also differs from marginal independence. Two measurements can be correlated because both respond to a common latent factor and become independent given it. Conversely, conditioning on a common effect can create association.

## 2. Worked covariance geometry and whitening

**Worked example.**

If $\Sigma=Q\Lambda Q^{T}$ with positive eigenvalues, standardized principal coordinates

$$Z=\Lambda^{-1/2}Q^{T}(X-\mu)$$

have identity covariance. This whitening is not unique: any subsequent orthogonal rotation stays white. Independence follows only under extra distributional conditions, such as joint normality.

Mahalanobis distance

$$d^{2}=(x-\mu)^{T}\Sigma^{-1}(x-\mu)$$

measures displacement in covariance-scaled coordinates. Small-variance directions count more. Estimated distances can be unstable when covariance eigenvalues are small; robust or regularized covariance may be needed. A point can have ordinary-looking coordinates but be anomalous in a low-variance contrast.

**Worked direction.** With $\Sigma=\begin{pmatrix}10&9\\9&10\end{pmatrix}$, eigenvalues are 19 along $(1,1)/\sqrt{2}$ and 1 along $(1,-1)/\sqrt{2}$. Difference between the variables is tightly controlled, so a modest departure in their difference can have large Mahalanobis distance.

## 3. PCA, factors, and identifiable claims

PCA chooses directions maximizing sample variance. It is invariant to orthogonal coordinate rotation but not arbitrary rescaling. Loading signs are arbitrary; near-equal eigenvalues make individual directions unstable. Bootstrap plots should align signs and, near ties, compare subspaces rather than named eigenvectors.

Factor analysis posits $X=\Lambda F+\varepsilon$, with low-dimensional latent factors and structured residual covariance. Rotating factors can preserve the same observed covariance, so loadings are not unique without constraints. A visually interpretable rotation is not empirical identification of a psychological or biological cause.

Canonical correlation finds linear combinations of two variable sets with maximal correlation. Partial least squares and supervised dimension reduction use outcome information. Every supervised preprocessing step belongs inside validation folds; otherwise the test outcome leaks into representation learning.

## 4. Many variables and multiplicity

When $p$ is not small relative to $n$, sample covariance eigenvalues are noisy. If $p\ge n$, sample covariance is singular. Shrinkage toward a diagonal or structured target trades bias for stability. Sparse inverse covariance estimates encode conditional associations under model and penalty assumptions, not causal edges.

Testing every covariance, loading, subgroup, or spatial region creates multiplicity. A global multivariate test can answer whether any mean direction differs, while simultaneous intervals identify directions with familywise control. False-discovery-rate methods manage an expected proportion among reported discoveries. The family must include the hypotheses actually searched.

## 5. Temporal indexing and filtrations

A time series is a process $\{X_{t}\}$ plus its ordering and observation scheme. A filtration $F_{t}$ represents information available by time $t$. A forecast $E(X_{t+h}|F_{t})$ may not use future covariates unless those covariates will truly be known at deployment.

Weak stationarity requires constant mean and autocovariance dependent only on lag. Strict stationarity requires invariance of every finite-dimensional distribution under time shifts. Strict stationarity plus finite second moments implies weak stationarity; the reverse need not hold.

Sample autocorrelation is biased and noisy, especially after estimating a mean, trend, or seasonal component. Confidence bands based on iid white noise do not diagnose every alternative and do not account for searching many lags.

## 6. ARMA structure and innovations

An ARMA process satisfies

$$\phi(B)(X_{t}-\mu)=\theta(B)\varepsilon_{t}$$

where $B$ is the backshift and innovations are uncorrelated or iid according to the claim. Causality requires roots of $\phi(z)$ outside the unit circle; invertibility similarly restricts roots of $\theta(z)$. These conventions depend on polynomial definition, so state it.

For causal AR(1), $X_{t}-\mu=\phi(X_{t-1}-\mu)+\varepsilon_{t}$ with $|\phi|<1$. Autocorrelation is $\phi^{|h|}$ and spectral density is high near frequency zero for positive φ, high near π for negative φ.

White residuals mean no detected linear autocorrelation. They may remain heteroskedastic, heavy-tailed, nonlinear, or structurally unstable. Ljung–Box tests across lags require degrees-of-freedom adjustments after fitted ARMA parameters and still answer a limited null.

## 7. Trends, unit roots, and differencing

A deterministic trend $X_{t}=a+bt+U_{t}$ with stationary $U_{t}$ differs from a stochastic trend $X_{t}=X_{t-1}+\varepsilon_{t}$. Detrending can handle the first; first differencing handles the second under its model. Applying the wrong operation changes long-horizon uncertainty.

The random walk has $\operatorname{Var}(X_{t})=t\sigma^{2}$ from a fixed origin and is not weakly stationary. Differences $\Delta X_{t}=\varepsilon_{t}$ are stationary under iid innovations. Regressing unrelated random walks can produce apparently significant relationships because ordinary stationary standard errors do not apply.

Unit-root tests have low power near the boundary and depend on intercept/trend specification. Structural breaks can mimic unit roots. Combine tests with domain knowledge, plots on meaningful scales, and validation.

Cointegration says a linear combination of individually integrated series is stationary. It supports an error-correction representation under conditions but does not establish a causal economic equilibrium.

## 8. Forecast distributions and backtesting

Forecasts should declare origin, horizon, information set, and target: conditional mean, median, quantile, event probability, or full distribution. Squared error elicits the mean; absolute error elicits a median; pinball loss elicits a quantile. Comparing a mean forecast and median forecast under arbitrary loss is incoherent.

Rolling-origin evaluation uses successive historical cutoffs. Hyperparameter selection occurs inside each origin’s training information. If seasonal lag 12 is used, early folds need enough history. Performance across overlapping horizons is dependent, so a naive standard error over every forecast error is optimistic.

Prediction intervals combine innovation uncertainty and, ideally, parameter and model uncertainty. Standard ARIMA intervals commonly condition on selected order and estimated parameters. Scenario or bootstrap methods must preserve time dependence and structural constraints.

## 9. State-space models

A state-space model separates latent evolution and noisy observation:

$$\alpha_{t}=T_{t}\alpha_{t-1}+R_{t}\eta_{t}$$

$$Y_{t}=Z_{t}\alpha_{t}+\varepsilon_{t}$$

Under linear Gaussian assumptions and a specified initial distribution, the Kalman filter gives exact conditional Gaussian means and covariances. The prediction covariance is propagated before observing $Y_{t}$; the update weights prediction against measurement by their uncertainty.

Diffuse initial states, missing observations, irregular spacing, and time-varying matrices need explicit handling. An extended or unscented Kalman filter is approximate for nonlinear systems. Particle filters introduce Monte Carlo error and possible weight degeneracy. Smoothers use future data and therefore cannot serve as online filters.

## 10. Frequency-domain reasoning

For a weakly stationary process with summable autocovariance, spectral density is the Fourier transform of autocovariance. Variance is the integral of spectral density under the chosen normalization. A narrow peak indicates variance concentrated around a frequency, not necessarily a deterministic periodic law.

Finite observation windows convolve the spectrum with a window kernel, creating leakage. Sampling at interval $\Delta$ cannot distinguish frequencies separated by multiples of sampling frequency; frequencies above Nyquist alias downward. Irregular observation changes the analysis rather than magically removing aliasing.

Smoothing a periodogram reduces variance while blurring nearby frequencies. Selecting a peak and then using pointwise uncertainty ignores search. Seasonal and calendar mechanisms should be checked against phase, stability, and external timing.

## 11. Spatial support and random fields

Spatial data come in distinct forms:

- **geostatistical:** a value is observed at selected points or supports;
- **areal:** counts or rates are aggregated within regions;
- **point process:** locations themselves are random outcomes.

Changing support changes variance and covariance. A pollution measurement at a monitor, an average over a postal code, and an individual exposure are not interchangeable. The ecological fallacy infers individual relationships from area aggregates; atomistic fallacy moves the other direction.

A stationary covariance $C(h)$ depends on displacement. Isotropy assumes only $\lVert h\rVert$ matters. Great-circle distance rather than planar Euclidean distance may be required globally. Covariates can explain large-scale mean structure; residual stationarity remains an assumption.

## 12. Variograms and positive validity

Under intrinsic stationarity, semivariogram

$$\gamma(h)=1/2 \operatorname{Var}[Z(s+h)-Z(s)]$$

exists even when a global covariance may not. Common components are nugget, partial sill, and range. An empirical binned variogram averages squared differences, but pairs share observations and are dependent. Outliers have squared influence.

Not every curve is a valid variogram. Validity requires conditional negative definiteness so kriging variances remain nonnegative. Anisotropy can be geometric (rescaled/rotated distance) or zonal (direction-dependent sill). Directional variograms need enough pairs.

## 13. Kriging as conditional linear prediction

With known zero mean, observed covariance matrix $K$, and target covariance vector $k$, simple kriging weights are $w=K^{-1}k$. Prediction is $w^{T}z$; error variance is $C(0)-k^{T}K^{-1}k$.

**Two-site example.** Let each site and target have variance 1. Observed sites have covariance 0.2, and target covariances are both 0.6. Then

$K=\begin{pmatrix}1&.2\\.2&1\end{pmatrix}$, $K^{-1}=(1/0.96)\begin{pmatrix}1&-.2\\-.2&1\end{pmatrix}$.

Thus each weight is $(0.6-0.12)/0.96=0.5$; prediction is the average of two observations. Error variance is $1-[0.6,0.6]\cdot [0.5,0.5]=0.4$. These values are conditional on a valid known covariance; estimated parameters add uncertainty.

Ordinary kriging estimates an unknown constant mean through weights summing to one. Universal kriging includes mean covariates. Gaussian-process regression is closely related but often places explicit prior distributions on functions and hyperparameters. Terminology does not remove covariance assumptions.

## 14. Point patterns and areal dependence

A homogeneous Poisson point process has independent counts in disjoint regions and expected count proportional to area. Interaction, clustering, or inhibition violates this simple model. Ripley’s $K$ summarizes neighbor counts across distances, but edge corrections and inhomogeneous intensity matter. A cluster can reflect an omitted intensity covariate rather than interaction.

For areal counts, adjacency matrices encode one chosen neighborhood. Conditional autoregressive priors smooth neighboring random effects but can confound with spatially smooth covariates. Improper intrinsic priors require constraints. Disease maps based on tiny populations need exposure offsets and uncertainty; raw rates create noisy extremes.

The modifiable areal unit problem means associations can change with boundary and scale. Results tied to one partition should not be presented as point-level laws.

## 15. Spatiotemporal dependence

A separable covariance has $C((s,t),(s',t'))=C_{S}(s,s')C_{T}(t,t')$. This is computationally attractive but restrictive: temporal correlation must have the same form at every spatial separation. Advection and diffusion often produce nonseparable dependence.

Dynamic spatial models evolve a latent field over time and observe it with noise. Identifiability between process variance, measurement error, and microscale nugget can be weak. Sensor changes and moving sites create observation-process shifts.

Validation should mirror deployment:

- future prediction: hold out later blocks;
- new-location prediction: hold out spatial blocks or entire sites;
- both: hold out future periods at separated sites;
- interpolation within a dense monitored area: gaps may be smaller, but prevent near-duplicate leakage.

Random row splits answer none of these when neighboring records straddle the split.

## 16. Structured uncertainty audit

For any dependent analysis, report:

1. index set and observation support;
2. mean/trend model before residual dependence;
3. covariance, conditional, or spectral assumptions;
4. effective independent units and asymptotic regime;
5. parameter-identifiability and regularization choices;
6. missing-time, missing-location, or preferential-sampling mechanism;
7. split geometry and forecast horizon;
8. multiplicity over variables, lags, regions, or frequencies;
9. sensitivity to scaling, bandwidth, covariance family, and breaks;
10. boundary between prediction, association, and causation.

## Practice with solutions

<a id="deep-dive-dependence-time-space-multivariate-ex-1"></a>

**Exercise 1.**

**A. AR forecast variance.** For stationary AR(1) with $\phi=0.6$ and innovation variance 4, find stationary variance and two-step forecast-error variance with known parameters.
<details>
<summary>Hint 1</summary>

For a stationary AR(1), variance satisfies a one-step recursion using innovation variance.
</details>
<details>
<summary>Hint 2</summary>

For the two-step forecast, expand the future error into two independent innovations before adding variances.
</details>
<details>
<summary>Solution</summary>

Stationary variance is $4/(1-0.36)=6.25$. Two-step error uses $\varepsilon_{t+2}+0.6\varepsilon_{t+1}$, so variance is $4(1+0.36)=5.44$.

</details>

<a id="deep-dive-dependence-time-space-multivariate-ex-2"></a>

**Exercise 2.**

**B. Singular covariance.** Why is a sample covariance singular when $p\ge n$ after centering?
<details>
<summary>Hint 1</summary>

Centering forces the sample rows to sum to the zero vector.
</details>
<details>
<summary>Hint 2</summary>

Their span has dimension at most n minus one; compare that with p when assessing covariance rank.
</details>
<details>
<summary>Solution</summary>

The $n$ centered row vectors sum to zero, so their span has dimension at most $n-1$. The covariance range lies in that span, hence rank is at most $n-1<p$ when $p\ge n$; an ordinary inverse does not exist.

</details>

### Further practice

**C. Spatial validation.** Monitors are 100 metres apart, but deployment predicts towns 30 kilometres from any monitor. Why is random row cross-validation optimistic?

**Solution.** Held-out monitors usually retain near neighbors in training, testing interpolation over hundreds of metres. Deployment requires long-gap extrapolation, where covariance and trend errors are larger. Spatial blocks approximating 30-kilometre gaps are the relevant validation design.
