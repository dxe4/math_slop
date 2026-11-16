var e=`---
parent_id: book-time-series
chapter_id: state-space-kalman-filter
title: State-Space Models and the Kalman Filter
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# State-Space Models and the Kalman Filter

An observed series may be a noisy view of a changing hidden state. State-space modelling separates evolution from measurement and updates a forecast whenever a new observation arrives. The Kalman filter is the exact recursive conditional-mean calculation for a linear Gaussian state-space model with known parameters. We derive its scalar equations from projection and Gaussian conditioning, work two updates by hand, and mark the boundary between a mathematical filtering identity and parameter estimation from real data.

Read [conditional expectation and projection](../probability-models-proofs/conditional-expectation-and-projection.md), [ARMA models](arma-models.md), and [forecasting](forecasting-prediction-error.md). All variances below are in squared state or observation units, and time steps are regular. The process noises are independent across time and mutually independent of measurement noises and initial state. For a conditional-mean interpretation they are Gaussian. With merely zero means and specified covariances, the same formulas provide best linear updates but need not equal full conditional expectations.

## A scalar latent-state model

**Definition 8.1 (Linear Gaussian state space).** Let a_0 be Gaussian with mean m_0 and variance P_0≥0. For t≥1, define a_t=F a_{t-1}+w_t and y_t=H a_t+v_t, where F,H are known scalar coefficients, w_t are independent mean-zero Gaussian with variance Q≥0, v_t are independent mean-zero Gaussian with variance R≥0, and all stated families are mutually independent. The state a_t is latent; y_t is observed. Let m_{t|t}=E[a_t|y_1,...,y_t] and P_{t|t}=Var(a_t|y_1,...,y_t).

F controls state persistence, Q describes process uncertainty added at each step, H maps state units to observation units, and R describes measurement noise. These parameters have different roles. Raising Q lets the state change rapidly; raising R says an individual measurement is less precise. A rapidly moving plot alone may not identify which source of variation dominates. In applications with vector states, transposes and matrices replace scalar products; we derive only the scalar filter here so every denominator and hypothesis remains visible.

**Proposition 8.2 (Prediction step).** Given observations through t-1, the next state has conditional mean m_{t|t-1}=F m_{t-1|t-1} and variance P_{t|t-1}=F²P_{t-1|t-1}+Q. The next observation has predicted mean H m_{t|t-1} and innovation variance S_t=H²P_{t|t-1}+R.

*Proof.* Condition on the observed past. The new process noise is independent with mean zero and variance Q, so linearity gives the mean and independent-variance addition gives F²P+Q. The measurement noise is likewise new and independent, so the predicted observation mean is H times the state mean and its variance is H²P+R. ∎

Call u_t=y_t-H m_{t|t-1} the innovation or forecast error of the measurement. The word “innovation” here refers to the new observed surprise under the filter, not just w_t or v_t individually. If S_t=0, the next observation is already determined under the model and division by S_t is not allowed; use the deterministic constraint directly. We assume S_t>0 for the ordinary update formula.

## The filter update

**Theorem 8.3 (Scalar Kalman update).** Under Definition 8.1 and S_t>0, define K_t=P_{t|t-1}H/S_t. Then m_{t|t}=m_{t|t-1}+K_tu_t and P_{t|t}=(1-K_tH)P_{t|t-1}=P_{t|t-1}-P_{t|t-1}²H²/S_t.

*Proof.* Conditional on the past, the pair (a_t,y_t) is jointly Gaussian. Its covariance is Cov(a_t,y_t)=Cov(a_t,H a_t+v_t)=P_{t|t-1}H, and Var(y_t)=S_t. Gaussian conditioning, or projection with jointly Gaussian residual, gives E[a_t|past,y_t]=m_{t|t-1}+(P_{t|t-1}H/S_t)(y_t-Hm_{t|t-1}). The conditional variance is prior variance minus squared cross-covariance divided by observation variance, giving the second formula. Substituting K_t proves the equivalent first form. ∎

The gain K_t is an adjustment coefficient. With H=1, a high measurement-noise variance R makes it small, while a high prior uncertainty P makes it large. It is not a universal weight between zero and one when H has units or a negative sign; the dimensionless product K_tH controls the variance reduction. The update reduces or leaves unchanged P because the subtracted term is nonnegative, but the next prediction adds Q again. Filtering therefore alternates uncertainty growth in the transition with uncertainty reduction from new information.

**Worked example 8.4 (First noisy measurement).** Set F=H=1, m_0=0, P_0=1, Q=1 and R=4. Before observing time one, the predicted state is zero with variance 1+1=2. The predicted measurement variance is S_1=2+4=6. If y_1=3, the innovation is three and K_1=2/6=1/3. The updated state mean is 0+(1/3)3=1, and its variance is (1-1/3)2=4/3. The observation was three, but the state estimate moves only to one because the measurement is relatively noisy. Treating y_1 as the state itself would ignore R.

**Worked example 8.5 (The second update).** Keep the same parameters, so the next predicted state mean is one and variance is 4/3+1=7/3. Its observation variance is 7/3+4=19/3 and gain is (7/3)/(19/3)=7/19. If y_2=2, the innovation is one. The updated mean is 1+7/19=26/19 and posterior variance is (1-7/19)(7/3)=28/19. The filter does not average the two raw observations equally. It carries forward the posterior uncertainty from time one, adds process noise, then weights the new measurement according to its predicted uncertainty.

An exactly observed state offers a useful boundary check. If H=1, R=0 and P_{t|t-1}>0, then S_t=P_{t|t-1}, K_t=1, m_{t|t}=y_t and P_{t|t}=0. The next transition restores uncertainty Q if Q>0. If both P_{t|t-1} and R are zero, S_t=0 and the observation is deterministic; writing a numerical zero-over-zero gain would be an implementation mistake, not a new statistical phenomenon.

## Connection to AR models and forecasting

**Worked example 8.6 (AR(1) as a state).** Let the centred AR(1) from Chapter 3 be a_t=phi a_{t-1}+w_t and observe it exactly as y_t=a_t, so H=1 and R=0. When a_t is observed, posterior state variance becomes zero. The next state forecast is phi a_t with variance Q=sigma², the familiar one-step AR forecast. Two transitions give mean phi²a_t and variance sigma²(1+phi²). The state-space calculation therefore reproduces Theorem 5.3 without creating a different uncertainty model. Its advantage is that the same recursion also handles noisy or missing measurements by retaining nonzero posterior variance.

If y_t is missing but the time step exists, one prediction step still advances the latent state. There is simply no measurement update at that time: m_{t|t}=m_{t|t-1} and P_{t|t}=P_{t|t-1}. Replacing the missing y_t with zero would instead create a false innovation and pull the state toward a fabricated observation. For irregular time gaps, using the same F and Q as for one regular step is generally wrong; a transition over several intervals must be derived from the underlying dynamics or a declared multi-step rule.

**Proposition 8.7 (Several unobserved transitions).** With no measurements for h regular steps after origin n, the state forecast is F^h m_{n|n}, with variance F^{2h}P_{n|n}+Q sum_{j=0}^{h-1}F^{2j}.

*Proof.* Iterate the state equation h times: a_{n+h}=F^h a_n+sum_{j=0}^{h-1}F^j w_{n+h-j}. The initial posterior state and future independent process noises have zero cross-covariances conditional on observations through n. Their means and variances therefore add as displayed. ∎

The formula includes uncertainty about the current hidden state, unlike the exact-observation AR forecast where P_{n|n}=0. If |F|<1, the initial-state term decays with h; if F=1, the sum of Q terms grows linearly. This recovers the local-level random-walk behaviour in state-space language. A smoother, which estimates past states using later observations, has a different information set from this filter. Smoothing is appropriate for retrospective reconstruction but cannot be inserted into an earlier-origin forecast evaluation without leakage.

## Parameters, diagnostics and imports

The filter assumes F,H,Q,R and an initial distribution. Estimating them is a separate statistical problem. A likelihood can be assembled from the one-step observation innovations u_t and S_t under Gaussian assumptions, but maximizing it, proving identifiability, and obtaining uncertainty for fitted parameters require additional work. Two parameter settings can produce nearly the same short observed covariance pattern, especially when process and measurement noise are both large. The source examples choose parameters to show exact arithmetic, not to estimate them.

For a correctly specified Gaussian model, standardized innovations u_t/sqrt(S_t) should have zero mean, unit variance and no predictable lag structure under the model. Observed residual checks are diagnostic, not proof of correctness: fitted parameters, finite samples and regime changes affect their reference behaviour. State-space models can also use non-Gaussian or nonlinear transitions, but then this exact linear-Gaussian update no longer applies. Extended or particle filters introduce approximations and their own assumptions; they are not implied by this scalar derivation.

## Inert base-R recursion

The listing contains all parameters and the two invented observations from the worked examples. It uses only base R. Its arithmetic is explained above; no execution is claimed.

\`\`\`r
observed <- c(3, 2)
F <- 1; H <- 1; Q <- 1; R <- 4
mean_state <- 0; variance_state <- 1
trace <- data.frame(time = integer(), forecast = numeric(),
                    innovation = numeric(), gain = numeric(),
                    filtered = numeric(), variance = numeric())
for (t in seq_along(observed)) {
  predicted_mean <- F * mean_state
  predicted_variance <- F^2 * variance_state + Q
  innovation <- observed[t] - H * predicted_mean
  S <- H^2 * predicted_variance + R
  gain <- predicted_variance * H / S
  mean_state <- predicted_mean + gain * innovation
  variance_state <- (1 - gain * H) * predicted_variance
  trace <- rbind(trace, data.frame(time = t, forecast = predicted_mean,
                                  innovation, gain, filtered = mean_state,
                                  variance = variance_state))
}
trace
\`\`\`

The code presumes S>0 at every step, which the stated positive R guarantees. It is a didactic scalar implementation, not a robust general filtering library. The full multivariate case requires matrix dimensions and positive-semidefinite covariance handling; later multivariate statistics articles give the necessary covariance geometry rather than claiming that replacing each scalar by a matrix is automatically safe.

## Matrix form and the covariance boundary

For a vector state a_t and vector observation y_t, write a_t=F a_{t-1}+w_t and y_t=H a_t+v_t, with compatible matrices. If predicted covariance is P, process covariance Q and observation covariance R, prediction gives P^-=F P F transposed+Q. The observation innovation covariance is S=H P^- H transposed+R. When S is positive definite, the gain is K=P^- H transposed S^{-1}; the updated mean is m^-+K(y-Hm^-). This is the same covariance projection as the scalar proof, with matrix order preserved. Products cannot be rearranged as though matrices commute.

The updated covariance is P_filtered=P^- - P^- H transposed S^{-1} H P^-. For numerical work, an algebraically equivalent Joseph form (I-KH)P^-(I-KH) transposed+K R K transposed helps preserve symmetry and nonnegativity under floating-point rounding. These formulas require a valid positive-semidefinite prior and noise covariances. A negative eigenvalue in a proposed covariance is not repaired by an inverse call; it signals invalid inputs or numerical damage.

The matrix conditional-mean statement uses the multivariate Gaussian conditioning theorem when full conditional optimality is claimed. Under second moments alone, the same matrix gain minimizes mean-square error among linear functions of the new observation. This chapter does not prove general nonlinear filtering, state identifiability, or numerical stability for large matrices. It provides the scalar proof and states the exact covariance translation needed to read a vector implementation responsibly.

For an optional continuation, the actual [Kalman Filters and State-Space Models chapter](../probabilistic-graphical-models/kalman-filters-state-space-models.md) develops vector filtering, innovation likelihood and backward smoothing with their own inverse and noise assumptions. Its smoothing calculations use observations after the state time, so they answer a retrospective question; the forward filter here remains the origin-safe construction for forecasting.

## Exercises

### Exercise 8.1 {#state-space-kalman-filter-ex-predict}

With F=2, previous posterior mean three, previous variance one and Q=4, find the next state prediction.
<details><summary>Hint 1</summary>Multiply the mean by F.</details>
<details><summary>Hint 2</summary>For variance use F²P+Q.</details>
<details><summary>Solution</summary>The predicted mean is 2(3)=6. The predicted variance is 2²(1)+4=8. The variance scales by the square of F, not by F itself.</details>

### Exercise 8.2 {#state-space-kalman-filter-ex-innovation}

If H=1, predicted state mean six and observed y=9, find the measurement innovation.
<details><summary>Hint 1</summary>Predicted measurement is H times predicted state mean.</details>
<details><summary>Hint 2</summary>Subtract prediction from observation.</details>
<details><summary>Solution</summary>The predicted measurement is six, so u=9-6=3 in observation units. It is a measurement forecast error, not the latent process shock w alone.</details>

### Exercise 8.3 {#state-space-kalman-filter-ex-gain}

For predicted variance two, H=1 and R=4, compute S and K.
<details><summary>Hint 1</summary>S=H²P+R.</details>
<details><summary>Hint 2</summary>K=PH/S.</details>
<details><summary>Solution</summary>S=2+4=6 and K=2/6=1/3. The measurement receives less weight than a noise-free observation would.</details>

### Exercise 8.4 {#state-space-kalman-filter-ex-update}

Use K=1/3, predicted mean zero, innovation three and predicted variance two to update the scalar state.
<details><summary>Hint 1</summary>Add K times innovation to the predicted mean.</details>
<details><summary>Hint 2</summary>Multiply predicted variance by 1-KH with H=1.</details>
<details><summary>Solution</summary>The posterior mean is one. The posterior variance is (1-1/3)2=4/3. The observation changes the estimate and reduces its uncertainty.</details>

### Exercise 8.5 {#state-space-kalman-filter-ex-second}

From posterior variance 4/3 with F=1 and Q=1, find the next predicted state variance.
<details><summary>Hint 1</summary>Use F²P+Q.</details>
<details><summary>Hint 2</summary>Add one to 4/3.</details>
<details><summary>Solution</summary>The variance is 4/3+1=7/3. Process noise restores uncertainty after the prior observation reduced it.</details>

### Exercise 8.6 {#state-space-kalman-filter-ex-noiseless}

With H=1, R=0 and positive predicted variance P, what are gain and posterior variance?
<details><summary>Hint 1</summary>S=P in this case.</details>
<details><summary>Hint 2</summary>Substitute K=P/S into (1-K)P.</details>
<details><summary>Solution</summary>K=1 and posterior variance is zero. The observed value equals the state exactly under this model, so no state uncertainty remains immediately after observation.</details>

### Exercise 8.7 {#state-space-kalman-filter-ex-missing}

What update should be made if the time step occurs but y_t is unobserved?
<details><summary>Hint 1</summary>The transition still takes place.</details>
<details><summary>Hint 2</summary>There is no measured innovation to apply.</details>
<details><summary>Solution</summary>Carry out the prediction step, then set the filtered mean and variance equal to the predicted mean and variance. Inserting y_t=0 would add a fictitious measurement and is unjustified.</details>

### Exercise 8.8 {#state-space-kalman-filter-ex-two-step}

For F=1, Q=2, current filtered variance three and no observations for two steps, find the state variance after those steps.
<details><summary>Hint 1</summary>Each transition adds Q when F=1.</details>
<details><summary>Hint 2</summary>Use P+2Q.</details>
<details><summary>Solution</summary>The variance is 3+2+2=7. It includes the remaining uncertainty in the current latent state plus two new process-noise variances.</details>

### Exercise 8.9 {#state-space-kalman-filter-ex-units}

Why is K not necessarily a number between zero and one when H is not one?
<details><summary>Hint 1</summary>K maps an observation-unit innovation to a state-unit correction.</details>
<details><summary>Hint 2</summary>The product KH, rather than K alone, enters the variance reduction.</details>
<details><summary>Solution</summary>K=PH/(H²P+R) carries state units per observation unit and can be negative if H<0 or numerically exceed one under a change of units. The dimensionless product KH controls the fraction of prior state variance removed.</details>

### Exercise 8.10 {#state-space-kalman-filter-ex-gaussian}

What changes if state and measurement noises have the stated covariances but are not jointly Gaussian?
<details><summary>Hint 1</summary>The projection calculation still uses means and covariances.</details>
<details><summary>Hint 2</summary>Conditional expectations can depend on higher distributional details.</details>
<details><summary>Solution</summary>The same gain gives the best linear update under the covariance and orthogonality assumptions, but the full conditional mean need not be linear and the posterior distribution need not be Gaussian. Calling the recursion an exact conditional filter would require additional distributional assumptions.</details>

## Sources

Original Euler scalar proofs, invented observations and exercises under CC BY-SA 4.0. Standard state-space terminology is benchmarked against Brockwell and Davis, *Time Series: Theory and Methods*, second edition, and the forecast-state discussion in Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition. No external data or numerical execution is claimed.

## Summary

A linear Gaussian state-space model separates latent transition from noisy observation. Prediction propagates mean and variance; an observed innovation updates both by a gain derived from Gaussian conditioning. Missing values skip the measurement update, while uncertainty still grows through transitions. The recursion is exact for known linear-Gaussian parameters and a best linear calculation under weaker second-moment assumptions. The next chapter changes the focus from varying hidden means to varying conditional variance.
`;export{e as default};