
# Volatility Models

An uncorrelated series can still have predictable changes in scale. Large positive and negative deviations may arrive in clusters even when their signs are difficult to forecast. Volatility models separate a conditional mean from a conditional variance and use past squared shocks to update the latter. We prove elementary ARCH and GARCH variance identities, calculate conditional updates, and distinguish a model for uncertainty from any claim of investment performance. The chapter is general statistical theory and supplies no trading or financial advice.

Read [stationarity and autocovariance](stationarity-autocovariance.md), [forecast error](forecasting-prediction-error.md), and [ARIMA residual diagnostics](arima-model-selection.md). Write F_{t-1} for information available before time t. A mean-adjusted innovation is epsilon_t=X_t-mu_t, where mu_t is an F_{t-1}-measurable conditional mean. A standardized shock z_t has conditional mean zero and conditional variance one. We assume the z_t are independent of prior information where needed, and state stronger moment assumptions for squared-shock calculations. Calling epsilon_t “white noise” in a weak covariance sense does not make its squares uncorrelated.

## Conditional variance is a different target

**Definition 9.1 (Conditional heteroskedasticity).** A model has time-varying conditional variance h_t=Var(epsilon_t|F_{t-1}) even if its unconditional variance Var(epsilon_t) is constant. A common representation is epsilon_t=sqrt(h_t) z_t with h_t positive and known from past information, E[z_t|F_{t-1}]=0 and E[z_t²|F_{t-1}]=1. Then E[epsilon_t|F_{t-1}]=0 and E[epsilon_t²|F_{t-1}]=h_t.

The h_t forecast is in squared measurement units. Its square root is a conditional standard deviation in original units. A larger h_t does not mean that the next deviation will be positive; it predicts scale, not direction. If the conditional mean model is wrong, its residuals may contain both predictable mean and changing variance. A variance model fitted to those residuals can then absorb structure that belonged in the mean equation. Diagnose both components rather than assigning every unusual cluster to “volatility.”

**Definition 9.2 (ARCH(1)).** Set h_t=omega+alpha epsilon_{t-1}², with omega>0 and alpha≥0. The next conditional variance rises after a large squared deviation regardless of its sign. A second-moment stationary solution has E[epsilon_t²]=omega/(1-alpha) when 0≤alpha<1 and the standardized-shock assumptions permit a stationary construction.

**Proposition 9.3 (ARCH unconditional variance).** If an ARCH(1) process is strictly stationary with finite second moment, omega>0, and E[epsilon_t²|F_{t-1}]=h_t, then its unconditional variance v satisfies v=omega/(1-alpha). In particular, finite positive v requires alpha<1.

*Proof.* Mean zero follows by iterated expectation. Taking expectations in h_t=omega+alpha epsilon_{t-1}² gives E[h_t]=omega+alpha v. By the tower property E[epsilon_t²]=E[h_t]=v. Thus v=omega+alpha v, so (1-alpha)v=omega. A finite positive solution with omega>0 needs alpha<1. The identity is necessary under the stated stationarity and moment hypotheses; it is not by itself a full existence proof for every proposed innovation law. ∎

**Worked example 9.4 (An ARCH scale update).** Take omega=1 and alpha=1/4. The stationary second moment, if the model's existence conditions hold, is 1/(1-1/4)=4/3. If the most recent innovation is epsilon_{t-1}=2, then h_t=1+(1/4)4=2, so the next conditional standard deviation is sqrt(2). If instead epsilon_{t-1}=-2, the same h_t results. If the previous innovation were zero, h_t=1. These are conditional scale calculations; they do not specify a probability of an extreme next observation without a law for z_t.

## GARCH recursion and mean reversion

**Definition 9.5 (GARCH(1,1)).** Let h_t=omega+alpha epsilon_{t-1}²+beta h_{t-1}, with omega>0 and alpha,beta≥0, and epsilon_t=sqrt(h_t)z_t. The shock-square term reacts to the last realized deviation; the beta term carries forward the prior variance estimate. With appropriate stationary construction and finite second moment, alpha+beta<1 is the familiar sufficient second-moment regime for the recursion with standardized shocks.

**Theorem 9.6 (Second-moment identity).** Under a stationary finite-second-moment GARCH(1,1) solution with the standardized-shock assumptions, E[h_t]=E[epsilon_t²]=omega/(1-alpha-beta). If omega>0, a finite positive value requires alpha+beta<1.

*Proof.* Let v denote the common E[h_t]. By iterated expectation, E[epsilon_{t-1}²]=E[h_{t-1}]=v. Taking expectations of the recursion gives v=omega+(alpha+beta)v. Rearranging yields the expression. Positivity and finiteness with omega>0 force 1-alpha-beta>0. This proof derives the moment constraint from an assumed solution; existence, uniqueness and higher moments require their own conditions. ∎

**Worked example 9.7 (Two conditional updates).** Choose omega=1/2, alpha=1/4, beta=1/2. The coefficient sum is 3/4, and the stationary mean variance is (1/2)/(1/4)=2. Suppose h_{t-1}=2 and epsilon_{t-1}=2. Then h_t=1/2+(1/4)4+(1/2)2=5/2. If the next realized innovation is epsilon_t=-1, the subsequent variance is h_{t+1}=1/2+(1/4)1+(1/2)(5/2)=2. The first large shock raises forecast variance above its long-run mean; the smaller next shock and carried variance return it to two. These hand-chosen values demonstrate the recursion but are not a fitted history.

**Proposition 9.8 (Variance forecast recurrence).** Under Definition 9.5 and conditional E[epsilon_{t+1}²|F_t]=E[h_{t+1}|F_t], the h-step conditional expectation of future variance, after the first known update, obeys v_{h+1}=omega+(alpha+beta)v_h. Its fixed point is omega/(1-alpha-beta) when alpha+beta<1.

*Proof.* At origin t, h_{t+1} is known from epsilon_t and h_t. For the next step, take conditional expectation of h_{t+2}=omega+alpha epsilon_{t+1}²+beta h_{t+1}. The tower property replaces the expected squared innovation by expected h_{t+1}. Repeating gives the recurrence. Solving v=omega+(alpha+beta)v yields the fixed point, and a coefficient sum below one makes deviations from it contract geometrically. ∎

This recurrence concerns expected future variance, not a forecast path of realized squared deviations. A future epsilon² can be much larger or smaller than its conditional mean. Confidence intervals for future observations need a distribution for z_t as well as a forecast of h_t. Normal standardized shocks are a convenient assumption, but heavy-tailed alternatives can produce very different extreme-event probabilities at the same h_t. The moment equations alone do not choose between them.

## Uncorrelated levels, dependent squares

**Proposition 9.9 (Martingale-difference covariance).** If E[epsilon_t|F_{t-1}]=0 and epsilon_s is F_{t-1}-measurable for s<t, with finite second moments, then Cov(epsilon_t,epsilon_s)=0. The squared innovations need not have zero lag covariance.

*Proof.* E[epsilon_t epsilon_s]=E[E[epsilon_t epsilon_s|F_{t-1}]]=E[epsilon_s E[epsilon_t|F_{t-1}]]=0. Their means are zero, so covariance vanishes. By contrast E[epsilon_t²|F_{t-1}]=h_t explicitly depends on epsilon_{t-1}² in ARCH/GARCH, allowing serial association of squares. ∎

**Worked example 9.10 (A sign-blind diagnostic).** Consider an invented residual sequence 3,-3,0,1,-1,0. Its signs alternate in the first two and fourth/fifth positions, while squared residuals are 9,9,0,1,1,0. The adjacent large squares suggest a scale cluster that a plot of signs may hide. This finite vector does not prove an ARCH process: a pair of large values can occur by chance, and the order could be driven by a change in mean or an external event. It motivates checking autocorrelation of squared standardized residuals and documenting the model and time window.

A Gaussian ARCH or GARCH log-likelihood uses terms involving log h_t and epsilon_t²/h_t, plus a constant, conditional on an initialization. Maximizing that expression can estimate parameters, but the exact sampling distribution of the estimates depends on regularity, stationarity, tail and boundary conditions. We do not derive general GARCH likelihood asymptotics here. Treat a software convergence message as a numerical fact about an optimisation attempt, not as a proof that the underlying variance model is correct.

## A second moment need not control tails

For ARCH(1), suppose z_t is independent of past information and has fourth moment kappa=E[z_t^4]<infinity. If the process has a finite stationary fourth moment q=E[epsilon_t^4], then epsilon_t^4=h_t² z_t^4 and q=kappa E[h_t²]. Expanding h_t=omega+alpha epsilon_{t-1}² gives E[h_t²]=omega²+2omega alpha v+alpha² q, where v=omega/(1-alpha) is the stationary second moment. Therefore q(1-kappa alpha²)=kappa(omega²+2omega alpha v). The right side is strictly positive for omega>0 and kappa>0, so a finite positive q requires kappa alpha²<1. This is a sharper moment restriction than alpha<1.

**Worked example 9.11 (Finite variance, impossible fourth moment).** Let standardized shocks be independent standard normal, so kappa=3, and take omega=1, alpha=4/5. The second-moment identity gives v=1/(1-4/5)=5 under a stationary finite-variance construction. But kappa alpha²=3(16/25)=48/25>1. If a finite stationary fourth moment existed, the preceding identity would equate a nonpositive left side with a positive right side, a contradiction. Thus this model can have finite variance while its fourth moment is infinite under the standard stationary construction. A Gaussian shock does not make the resulting unconditional epsilon distribution Gaussian; random conditional scale can produce heavy unconditional tails.

The derivation is a moment argument, not a proof of the full ARCH existence theorem. It explains why a variance-only diagnostic may miss severe tail behaviour. If a procedure relies on fourth moments—for example a standard-error calculation for sample squared residuals—its assumptions can fail even when the unconditional variance is finite. Report which moment a statistical claim actually needs.

## Limits and applications

Symmetric ARCH/GARCH responds equally to positive and negative innovations of equal magnitude. Some processes exhibit asymmetric scale responses; that requires a different specification and its own positivity and moment conditions. Long apparent volatility persistence can also arise from regime changes, stochastic latent variance, or aggregation of several mechanisms. A fitted alpha+beta near one makes the variance forecast return slowly to its nominal fixed point, but it does not by itself identify a permanent structural mechanism.

When comparing forecasts of h_t, a squared next residual is a noisy proxy for the unobserved conditional variance, not the conditional variance itself. Scores and calibration should be tied to the actual target: predictive distributions, intervals, or particular scale summaries. A financial return is one possible application, but the same mathematics applies to any series with clustered conditional spread, such as measurement errors or environmental variation. Decisions involving money require context beyond this mathematical chapter.

## Inert base-R recursion

This listing updates h from fixed, invented standardized shocks. It uses only base R, sets its initial variance explicitly, and makes no claim that the supplied z values were sampled independently or that code was executed in the authoring pass.

```r
z <- c(0, 1, -1, 0.5, -0.5, 0)
omega <- 0.5; alpha <- 0.25; beta <- 0.5
h <- numeric(length(z)); epsilon <- numeric(length(z))
previous_h <- omega / (1 - alpha - beta)
previous_epsilon <- 0
for (t in seq_along(z)) {
  h[t] <- omega + alpha * previous_epsilon^2 + beta * previous_h
  epsilon[t] <- sqrt(h[t]) * z[t]
  previous_h <- h[t]
  previous_epsilon <- epsilon[t]
}
data.frame(time = seq_along(z), z, h, epsilon)
```

The first h uses a declared pre-sample shock of zero and a stationary-mean initial variance. That is an initialization convention for the finite calculation, not a proof that the generated vector has a stationary joint distribution. The recursion remains positive here because omega is positive and alpha,beta are nonnegative.

## Exercises

### Exercise 9.1 {#volatility-models-ex-conditional}

If epsilon_t=sqrt(h_t)z_t with E[z_t²|F_{t-1}]=1 and h_t known from the past, find E[epsilon_t²|F_{t-1}].
<details><summary>Hint 1</summary>Square the representation.</details>
<details><summary>Hint 2</summary>Pull h_t outside the conditional expectation.</details>
<details><summary>Solution</summary>E[epsilon_t²|F_{t-1}]=E[h_t z_t²|F_{t-1}]=h_t E[z_t²|F_{t-1}]=h_t. Its units are squared observation units.</details>

### Exercise 9.2 {#volatility-models-ex-arch-update}

For ARCH(1) omega=1, alpha=1/4 and previous innovation -2, calculate h_t.
<details><summary>Hint 1</summary>Square the previous innovation before applying alpha.</details>
<details><summary>Hint 2</summary>The sign disappears after squaring.</details>
<details><summary>Solution</summary>h_t=1+(1/4)(-2)²=1+1=2. A previous innovation of +2 would give the same conditional variance in this symmetric model.</details>

### Exercise 9.3 {#volatility-models-ex-arch-mean}

Find the ARCH(1) stationary second moment for omega=2 and alpha=1/2 under the stated existence conditions.
<details><summary>Hint 1</summary>Use v=omega+alpha v.</details>
<details><summary>Hint 2</summary>Divide omega by 1-alpha.</details>
<details><summary>Solution</summary>v=2/(1-1/2)=4. This is an unconditional variance, whereas h_t varies with the most recent squared innovation.</details>

### Exercise 9.4 {#volatility-models-ex-garch-mean}

For GARCH(1,1) omega=1/2, alpha=1/4, beta=1/2, find the stationary second moment.
<details><summary>Hint 1</summary>Add alpha and beta.</details>
<details><summary>Hint 2</summary>Divide omega by 1-alpha-beta.</details>
<details><summary>Solution</summary>alpha+beta=3/4<1. The finite stationary second moment, under the process assumptions, is (1/2)/(1/4)=2.</details>

### Exercise 9.5 {#volatility-models-ex-garch-step}

With the same parameters, h_{t-1}=2 and epsilon_{t-1}=2, calculate h_t.
<details><summary>Hint 1</summary>Use the three terms omega, alpha epsilon² and beta h.</details>
<details><summary>Hint 2</summary>They are 1/2, one and one.</details>
<details><summary>Solution</summary>h_t=1/2+(1/4)4+(1/2)2=5/2. The large previous deviation lifts the next conditional variance above its unconditional value two.</details>

### Exercise 9.6 {#volatility-models-ex-next-step}

From h_t=5/2 and epsilon_t=-1, calculate h_{t+1} under those parameters.
<details><summary>Hint 1</summary>Square -1 before multiplying by alpha.</details>
<details><summary>Hint 2</summary>Add 1/2+1/4+(1/2)(5/2).</details>
<details><summary>Solution</summary>The terms are 1/2,1/4 and 5/4, summing to two. The negative sign of epsilon_t has no separate effect in symmetric GARCH.</details>

### Exercise 9.7 {#volatility-models-ex-covariance}

Why can epsilon_t be uncorrelated with epsilon_{t-1} even though h_t depends on epsilon_{t-1}²?
<details><summary>Hint 1</summary>Use E[epsilon_t|F_{t-1}]=0.</details>
<details><summary>Hint 2</summary>Pull the past epsilon_{t-1} through conditional expectation.</details>
<details><summary>Solution</summary>E[epsilon_t epsilon_{t-1}]=E[epsilon_{t-1}E[epsilon_t|F_{t-1}]]=0. Dependence of conditional second moments does not force nonzero covariance of the signed innovations.</details>

### Exercise 9.8 {#volatility-models-ex-variance-forecast}

If v_h=3 and omega=1/2, alpha+beta=3/4, compute v_{h+1}.
<details><summary>Hint 1</summary>Use v_{h+1}=omega+(alpha+beta)v_h.</details>
<details><summary>Hint 2</summary>Calculate 1/2+(3/4)3.</details>
<details><summary>Solution</summary>v_{h+1}=1/2+9/4=11/4. It moves from three toward the fixed point two, because the difference from two is multiplied by 3/4.</details>

### Exercise 9.9 {#volatility-models-ex-positive}

Why does omega>0 with alpha,beta≥0 keep each finite GARCH recursion variance positive when the starting h is nonnegative?
<details><summary>Hint 1</summary>Each squared innovation is nonnegative.</details>
<details><summary>Hint 2</summary>Bound h_t below by omega.</details>
<details><summary>Solution</summary>h_t=omega+alpha epsilon_{t-1}²+beta h_{t-1}≥omega>0. Induction from a nonnegative initial variance gives positive finite-step variances, though stationarity needs more than this pointwise bound.</details>

### Exercise 9.10 {#volatility-models-ex-target}

Why is a single squared residual an imperfect observed stand-in for its conditional variance h_t?
<details><summary>Hint 1</summary>Write epsilon_t²=h_t z_t².</details>
<details><summary>Hint 2</summary>Even with conditional mean one, z_t² varies.</details>
<details><summary>Solution</summary>epsilon_t² has conditional expectation h_t, but its realized value multiplies h_t by random z_t². One observation can be much larger or smaller than h_t, so assessing variance forecasts requires aggregation or a predictive score with its assumptions.</details>

## Sources

Original Euler moment derivations, invented shock values and exercises under CC BY-SA 4.0. ARCH/GARCH terminology is standard statistical theory; the model-selection and forecast framing is informed by the official Hyndman and Athanasopoulos *Forecasting: Principles and Practice* route and Brockwell and Davis, *Time Series: Theory and Methods*. No external return data, trading claim or executed R result is used.

## Summary

Conditional variance can change even when unconditional variance is constant and signed innovations are uncorrelated. ARCH and GARCH use past squared deviations and variance forecasts; their finite-second-moment identities require explicit coefficient and stationarity hypotheses. Forecasting scale is distinct from forecasting direction, and extreme-event claims need a shock distribution beyond a variance recursion. The next chapter extends covariance and prediction to several related series and a stationary combination of nonstationary levels.
