
# Kalman Filters and Linear Gaussian State-Space Models

## Continuous hidden states with exact Gaussian messages

The finite HMM used vectors of state probabilities. A linear Gaussian state-space model has real-valued hidden vectors, and its filtering distributions remain Gaussian. Means and covariance matrices replace finite tables, while the underlying prediction, update and smoothing logic remains the same. This chapter derives those operations from the joint Gaussian law rather than treating Kalman filtering as a separate estimation recipe.

Required preparation is Gaussian conditioning and block covariance from Chapter 5, plus the conditional structure of Chapter 7. All system matrices and covariance parameters are fixed and known in the derivations. Estimating them is another likelihood or Bayesian problem, even when the same filtering routine evaluates its objective.

Let the initial state have law $N(m_0,P_0)$, and for times one through T write
$$
X_t=F_tX_{t-1}+u_t+W_t,\qquad
Y_t=H_tX_t+v_t+V_t.
$$
The initial state and all noises are mutually independent, process noises have covariance $Q_t\succeq0$, and observation noises have covariance $R_t\succ0$. The offset vectors are known. The state dimension may be fixed while observation dimensions vary, provided matrix products match. Initial covariance may be semidefinite for the filtering formulas. All noises are centred Gaussian, not merely uncorrelated variables with stated second moments.

These assumptions define a joint Gaussian law by linear transformations of independent Gaussian vectors. They also give conditional independence of observations across times given the states and the Markov property of the state sequence. If process and observation noises are correlated, the block covariances change and the formulas below must be rederived; using the same labels for noises does not preserve independence.

## Prediction is propagation of a conditional Gaussian

Suppose the filtered state at the previous time has conditional mean m and covariance P given observations so far. The new process noise is independent of that past and state. Therefore the predicted state before seeing the next observation has
$$
m_t^-=F_tm_{t-1}+u_t,\qquad
P_t^-=F_tP_{t-1}F_t^T+Q_t.
$$
This follows by conditional expectation and variance of the affine sum, and its conditional law is Gaussian. The superscript minus means the new observation has not yet been used. It is a conditioning distinction, not a negative matrix or an approximate quantity.

The predicted observation has mean $H_tm_t^-+v_t$. Its innovation, or prediction residual, and covariance are
$$
e_t=y_t-H_tm_t^--v_t,\qquad
S_t=H_tP_t^-H_t^T+R_t.
$$
Strict positivity of the observation-noise covariance makes S positive definite even if the predicted state covariance is singular. Thus its ordinary Gaussian density and inverse solve are valid. The cross covariance between state error and observation error is $P_t^-H_t^T$.

## Update by Gaussian conditioning

**Theorem 11.1 (Gaussian filtering update).** Apply the block conditional formula to the joint predicted state and observation. With gain $K_t=P_t^-H_t^TS_t^{-1}$, the filtered mean and covariance are
$$
m_t=m_t^-+K_te_t,\qquad
P_t=P_t^--P_t^-H_t^TS_t^{-1}H_tP_t^-.
$$
The covariance subtraction is positive semidefinite because it is a covariance of a conditional Gaussian. One direct verification forms the residual $X_t-m_t^--K_t(Y_t-H_tm_t^--v_t)$. It is uncorrelated with the observation innovation and jointly Gaussian, hence independent of it. Its covariance is the displayed update. This proves the conditioning formula even when the latent state block is singular, since only the observation covariance was inverted.

Expanding that residual also gives the Joseph form
$$
P_t=(I-K_tH_t)P_t^-(I-K_tH_t)^T+K_tR_tK_t^T.
$$
Substituting the gain and S verifies equality with the subtraction formula in exact arithmetic. The expression as a sum of positive-semidefinite terms can be more robust numerically. It does not permit arbitrary K to be called the exact conditional gain: a different K yields the covariance of a different linear estimator residual, while the optimal conditional mean is the one derived above.

If the predicted covariance is positive definite, completing the Gaussian exponent also yields the information identity $P_t^{-1}=(P_t^-)^{-1}+H_t^TR_t^{-1}H_t$. Thus positive-definite prediction and positive observation noise give a positive-definite filtered covariance. More informative observations reduce covariance within this fixed model, but refitting noise parameters changes the model and need not preserve that comparison.

## Worked example 1: a random walk filter and smoother

**Example 11.2 (a random walk filter and smoother).** Consider a scalar model with initial mean zero and variance one, unit transition coefficient, process variance one and observation variance one. Observe values one and then zero. Before the first observation the state variance is two, so the innovation variance is three, the gain two thirds, the filtered mean two thirds and the filtered variance two thirds.

Before the second observation the mean is still two thirds and the variance five thirds. Its innovation is minus two thirds, the innovation variance eight thirds and the gain five eighths. The filtered second mean becomes one quarter and variance five eighths. Filtering has used each observation once and has propagated the process noise between them; averaging the two observations without that propagation would answer another problem.

The smoothing calculation below gives the first-state smoothed mean one half and variance one half. Its filtering mean had been two thirds. The future observation pulls the earlier latent estimate downward, demonstrating the same retrospective information flow as finite-state forward-backward.

## Likelihood from innovations

The probability chain rule writes the observed density as the product of the successive predicted observation densities. Consequently
$$
\log p(y_{1:T})=-\frac12\sum_t\{d_t\log(2\pi)+\log\det S_t+e_t^TS_t^{-1}e_t\},
$$
where d t is the observation dimension at that time. This is the marginal likelihood after integrating out the states, not the complete-data likelihood evaluated at their filtered means. Plugging in state estimates would omit their uncertainty and change the objective.

Under the stated model the innovations are independent centred Gaussian vectors with their displayed covariances. Each has conditional mean zero given earlier observations, so it is uncorrelated with every earlier innovation, which is a function of those observations. The whole innovation sequence is jointly Gaussian because the gains are deterministic functions of the fixed parameters and the innovations are linear transformations of the Gaussian observation sequence. Joint Gaussian uncorrelated blocks are independent. This proves the independence conclusion, including its dependence on fixed parameters and the correct model.

Standardizing each innovation by a square root of its covariance gives independent standard Gaussian vectors under that model. Fitting parameters from the same observations changes the distribution of residual diagnostics, and finite empirical agreement cannot establish the model assumptions. The likelihood formula is an exact model calculation; its use for inference about unknown parameters requires an additional statistical treatment.

## Backward smoothing: a full conditional derivation

**Theorem 11.3 (Gaussian backward smoothing).** Assume the predicted covariances at the next times are invertible, as is guaranteed when each process covariance is positive definite. From the filtering law at time t and the transition equation, the joint conditional Gaussian of current and next state has cross covariance $P_tF_{t+1}^T$. Define
$$
J_t=P_tF_{t+1}^T(P_{t+1}^-)^{-1}.
$$
Conditioning the current state on the next state and observations through time t gives mean $m_t+J_t(X_{t+1}-m_{t+1}^-)$ and covariance $P_t-J_tP_{t+1}^-J_t^T$. The state-space graph says that future observations are independent of the current state given the next state and that observed past. Therefore this same conditional kernel remains valid after the full observation record is supplied.

Integrate it against the already smoothed next-state distribution. Conditional total expectation and total covariance give the Rauch-Tung-Striebel recursions
$$
m_t^s=m_t+J_t(m_{t+1}^s-m_{t+1}^-),\qquad
P_t^s=P_t+J_t(P_{t+1}^s-P_{t+1}^-)J_t^T,
$$
starting from the final filtered mean and covariance. This proves the backward algorithm, with the inverse assumption visible. Singular predicted covariance needs a support-aware conditional kernel rather than an unqualified ordinary inverse.

The same representation yields adjacent smoothed covariance $\operatorname{Cov}(X_t,X_{t+1}\mid y_{1:T})=J_tP_{t+1}^s$. Such cross moments are required for state-space EM updates and cannot be reconstructed from singleton smoothed variances alone. The independent conditional residual used in the derivation supplies no extra cross term.

For the scalar example, the first backward gain is two fifths. Substituting the second filtered mean one quarter and predicted mean two thirds gives first smoothed mean one half. Its smoothed variance is $2/3+(2/5)^2(5/8-5/3)=1/2$. The adjacent covariance is one quarter. Each value follows from the two-state joint Gaussian, not from separately averaging filtered estimates.

## Worked example 2: scalar steady-state covariance

**Example 11.4 (scalar steady-state covariance).** Take a scalar stable autoregression with coefficient a of magnitude less than one, process variance q positive and observation variance r positive. The posterior covariance iteration is
$$
P\longmapsto\frac{r(a^2P+q)}{a^2P+q+r}.
$$
Its derivative is $a^2r^2/(a^2P+q+r)^2$, bounded by a squared, strictly below one. Thus it is a contraction on nonnegative covariances and has one fixed point, to which every nonnegative initial covariance converges. The fixed point solves
$$
a^2P^2+(q+r-ra^2)P-rq=0.
$$
When a is nonzero the quadratic has exactly one positive root because its constant term is negative and its leading coefficient positive. When a is zero the fixed point is rq divided by q plus r. These formulas prove a scoped steady-state result. They do not claim that every matrix system or every unstable scalar system has the same contraction proof; general detectability and stabilizability conditions belong to a fuller filtering theory.

## Missing measurements, observation mechanisms and observability

An unobserved measurement coordinate can be omitted from the observation vector and the corresponding rows and covariance block, when its absence is ignorable under the model. If an entire time has no measurement, perform prediction and retain it as the filter without an update. Process uncertainty still accumulates. Replacing an unobserved value by zero would add a fictitious measurement and generally shrink uncertainty incorrectly.

If missingness or censoring depends on the latent state, the observed indicator has a likelihood of its own. Its posterior may no longer remain Gaussian. The standard Kalman formulas do not become exact merely because the uncensored measurement equation was linear. The complete recording model determines whether Gaussian closure survives.

In a noise-free fixed-matrix system, the stack of rows from H, HF and subsequent powers describes which initial directions affect observations. Full column rank of a sufficiently long stack is observability. With noise present, this algebraic concept describes information paths, not finite-sample exact recovery. The covariance recursion quantifies the remaining uncertainty under the noise assumptions.

## Worked example 3: an unobserved random-walk coordinate

**Example 11.5 (an unobserved random-walk coordinate).** Let two independent coordinates each follow a random walk, with diagonal initial and process covariances, but observe only the first coordinate with positive Gaussian noise. The transition is the identity and the observation row is $(1,0)$. Every predicted and filtered covariance remains diagonal. The second gain component is zero, so observations never update its mean or reduce its variance.

After t transitions its second variance is its initial variance plus t times its process variance. A long observed record of the first coordinate cannot identify the independent second path. The observability stack has repeated row $(1,0)$ and rank one. If the transition instead transfers the second coordinate into the first, information can flow across time; whether it suffices for a stated estimation claim must be checked for that new system and its noises.

## Numerical and statistical limits of the exact recursion

Use solves with the positive-definite innovation covariance, preferably through a factorization, rather than forming an inverse explicitly. The likelihood needs log determinants from the same declared covariance. Tiny negative eigenvalues from subtraction are numerical errors to investigate; silently clipping them can conceal inconsistency. Square-root filtering propagates covariance factors and can improve numerical behaviour without changing the exact probabilistic target.

A Kalman filter remains the optimal linear estimator in some broader second-moment settings, but its full Gaussian posterior interpretation requires the Gaussian model. Extended and unscented filters for nonlinear models introduce additional approximation and do not inherit exact Gaussian-conditioning identities automatically. A state estimate, a conditional covariance and an empirical error bar must therefore be described with their actual model assumptions and approximation method.

## Exercises

<a id="kalman-filters-state-space-models-ex-1"></a>

### Exercise 1

Derive the predicted covariance.

<details><summary>Hint 1</summary>

Condition on the observed past.

</details>

<details><summary>Hint 2</summary>

The new process noise is independent of the previous state and has covariance Q.

</details>

<details><summary>Full solution</summary>

The affine transformed previous state has conditional covariance F times P times its transpose. The independent process noise adds Q, while the known offset has no variance. The cross covariance vanishes by independence. This gives the prediction formula and preserves positive semidefiniteness, even if the previous state distribution or process covariance is singular.

</details>

<a id="kalman-filters-state-space-models-ex-2"></a>

### Exercise 2

Why is the innovation covariance invertible under the stated assumptions?

<details><summary>Hint 1</summary>

Its state contribution is positive semidefinite.

</details>

<details><summary>Hint 2</summary>

Observation noise is strictly positive definite.

</details>

<details><summary>Full solution</summary>

For any nonzero observation-direction vector, the state covariance contribution gives a nonnegative quadratic form and the observation-noise contribution a strictly positive one. Their sum is strictly positive. Thus the innovation covariance is positive definite and can be inverted, even when the latent predicted covariance lacks an ordinary inverse.

</details>

<a id="kalman-filters-state-space-models-ex-3"></a>

### Exercise 3

Prove the Joseph covariance identity.

<details><summary>Hint 1</summary>

Expand the covariance of the linear residual.

</details>

<details><summary>Hint 2</summary>

Use $KS=P^-H^T$.

</details>

<details><summary>Full solution</summary>

Expanding the two positive-semidefinite terms gives the predicted covariance minus the two gain cross terms plus K times S times its transpose. With the derived gain, each cross term equals that last term. The result reduces to the usual covariance subtraction. The identity holds in exact arithmetic and exposes a form less vulnerable to cancellation.

</details>

<a id="kalman-filters-state-space-models-ex-4"></a>

### Exercise 4

Compute the second filtered mean and variance in the scalar example.

<details><summary>Hint 1</summary>

The predicted mean is two thirds and variance five thirds.

</details>

<details><summary>Hint 2</summary>

The new observation is zero with noise variance one.

</details>

<details><summary>Full solution</summary>

The innovation covariance is eight thirds and the gain five eighths. Updating the mean gives two thirds minus five eighths times two thirds, equal to one quarter. Updating variance multiplies five thirds by one minus five eighths, giving five eighths. These use both process propagation and the second measurement likelihood.

</details>

<a id="kalman-filters-state-space-models-ex-5"></a>

### Exercise 5

Why are Gaussian innovations independent across time?

<details><summary>Hint 1</summary>

Each innovation has conditional mean zero given the observed past.

</details>

<details><summary>Hint 2</summary>

All innovations are jointly Gaussian under fixed parameters.

</details>

<details><summary>Full solution</summary>

An earlier innovation is a measurable function of past observations, so conditional zero mean makes it uncorrelated with the later innovation. Fixed linear-system parameters make the whole sequence a linear transform of the Gaussian observation vector. Joint Gaussian blocks with zero cross covariance are independent. Without joint Gaussianity the uncorrelated conclusion alone would not imply independence.

</details>

<a id="kalman-filters-state-space-models-ex-6"></a>

### Exercise 6

Derive the smoother mean recursion from a conditional current-given-next law.

<details><summary>Hint 1</summary>

First condition the joint two-state Gaussian on the next state.

</details>

<details><summary>Hint 2</summary>

Then integrate against its smoothed distribution.

</details>

<details><summary>Full solution</summary>

The current-given-next mean is its filtered mean plus the backward gain times next state minus its predicted mean. Future observations add no further information once the next state and observed past are fixed. Taking expectation under the next smoothed law replaces next state by its smoothed mean, producing the recursion. Total covariance gives the corresponding variance formula.

</details>

<a id="kalman-filters-state-space-models-ex-7"></a>

### Exercise 7

Compute the first smoothed variance in the scalar example.

<details><summary>Hint 1</summary>

The backward gain is two fifths.

</details>

<details><summary>Hint 2</summary>

Use the next smoothed variance five eighths and predicted variance five thirds.

</details>

<details><summary>Full solution</summary>

The correction is four twenty-fifths times five eighths minus five thirds, which equals minus one sixth. Adding it to the first filtered variance two thirds gives one half. The variance decreases under the extra observation within this fixed Gaussian model. Re-estimating covariance parameters would be a different comparison.

</details>

<a id="kalman-filters-state-space-models-ex-8"></a>

### Exercise 8

Why does the scalar steady-state proof assume absolute a less than one?

<details><summary>Hint 1</summary>

Inspect the derivative bound of its Riccati map.

</details>

<details><summary>Hint 2</summary>

A strict contraction needs a constant below one.

</details>

<details><summary>Full solution</summary>

The map derivative is bounded above by a squared. With absolute a below one this supplies a uniform strict contraction and hence convergence to the unique fixed point. For other coefficients this particular bound is insufficient. Other filtering stability results may still hold under additional conditions, but cannot be concluded from this contraction argument unchanged.

</details>

<a id="kalman-filters-state-space-models-ex-9"></a>

### Exercise 9

What happens to an independent unobserved random-walk coordinate?

<details><summary>Hint 1</summary>

Its observation cross covariance is zero.

</details>

<details><summary>Hint 2</summary>

Only prediction contributes to its variance.

</details>

<details><summary>Full solution</summary>

Its gain is zero, so no observation update changes its conditional mean or covariance. Each transition adds its process variance. Starting from an initial variance, it therefore grows linearly in elapsed transition count. Observing another independent coordinate for a long time does not reduce this uncertainty or make the hidden direction observable.

</details>

<a id="kalman-filters-state-space-models-ex-10"></a>

### Exercise 10

Why is the marginal likelihood not obtained by substituting filtered state means into the observation densities?

<details><summary>Hint 1</summary>

The states have conditional uncertainty.

</details>

<details><summary>Hint 2</summary>

Integrating a Gaussian includes their predicted covariance in S.

</details>

<details><summary>Full solution</summary>

The marginal predicted observation density has covariance equal to the state-induced covariance plus observation noise. Plugging in a state mean removes the first contribution and omits the integration normalizer. The resulting product is another objective, not the innovation marginal likelihood. Exact filtering tracks both means and covariances precisely because both enter that integrated density.

</details>
