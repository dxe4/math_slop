
# Stochastic Differential Equations

A stochastic equation is an integral identity on a specified probability space, not a differential equation driven by an ordinary derivative of Brownian motion. Existence, pathwise uniqueness, nonexplosion and uniqueness of the probability law are different claims. We prove a global theorem with time-dependent vector coefficients, explain its local extension and derive the assumptions behind familiar financial factor models.

**L4 preparation.** Use [The Itô Integral](ito-integral.md), [Itô’s Formula](ito-formula.md), square-mean completeness and Gronwall's inequality. The actual [earlier SDE introduction](../stochastic-processes-paths/sdes-diffusions-generators.md) remains linked preparation with its own proofs, exercises and identities. This new treatment extends the scalar introduction and supplies original supported problems rather than retiring that source.

## A theorem with all its data

Let $W$ be an $m$-dimensional Brownian motion with independent components relative to a usual filtration. Let $X_0$ be an adapted time-zero vector with finite second moment. The coefficient functions $b(t,x)$ and $\Sigma(t,x)$ are measurable in time and state. Assume uniform global Lipschitz continuity in the state and a uniform bound at zero. Matrix norms for the diffusion are Frobenius norms. These assumptions imply
$$|b(t,x)|^2+\|\Sigma(t,x)\|_F^2\le C(1+|x|^2).$$
We seek a continuous adapted process satisfying the integral identity on every finite horizon, with drift absolutely integrable and diffusion square-integrable locally. The theorem gives such a process with finite expected squared path supremum on each horizon. Any two solutions with the same initial variable and driving Brownian motion are indistinguishable. This is strong existence and pathwise uniqueness; the Brownian space is given before the solution is constructed.

For vector stochastic integrals, the scalar isometry applied to components and independence of different Brownian drivers give terminal second moment equal to the integrated Frobenius square. The maximal inequality applies to the norm submartingale and supplies the same factor four in the expected squared supremum. Thus the scalar construction extends componentwise with an explicitly stated matrix norm, rather than ignoring cross-component information.

## Picard construction and factorial convergence

Fix a horizon. Begin with the constant initial process and define the next iterate by integrating the coefficients evaluated at the preceding iterate. Linear growth, the isometry and the maximal inequality show inductively that each iterate has finite expected squared supremum. For the difference of two consecutive iterates, Cauchy–Schwarz on the drift integral and the stochastic maximal inequality give
$$d_j(t)\le C_T\int_0^t d_{j-1}(s)ds,$$
where $d_j$ is the expected squared supremum of that difference up to time $t$. The first difference is bounded by a constant times $t$, using the square-integrable initial variable and growth at zero. Iterating gives a factorial denominator, with bound proportional to $C_T^jT^{j+1}/(j+1)!$.

The sum of the square roots of those bounds is finite. Hence the expected sum of successive supremum differences is finite, and Tonelli makes the actual sum finite almost surely. The iterates converge uniformly almost surely to a continuous adapted process, and also in expected squared supremum by the norm triangle inequality. Lipschitz continuity passes their coefficient integrals to the limit: the drift in integrated square mean and the diffusion by isometry and its maximal estimate. The limit satisfies the required equation as an identity of continuous processes.

For two solutions on the same noise, the identical difference estimate has zero initial term. Gronwall makes its expected squared supremum zero, proving indistinguishability on that horizon. Constructions on successive integer horizons agree by uniqueness, giving one global process. This is not a formal iteration whose convergence is assumed. The factorial bound supplies existence, while the separate zero-difference estimate supplies uniqueness.

Applying the same estimates to a single solution gives
$$E\sup_{s\le T}|X_s|^2\le C_T(1+E|X_0|^2).$$
For arbitrary local-energy solutions, stop first on bounded state regions. The stopped estimates have constants independent of the region size under global growth. Fatou then supplies the same bound and permits the uniqueness argument. Likewise solutions with different initial variables but the same driver satisfy a finite-horizon difference bound proportional to their initial mean-square difference. The constants may grow with the horizon; no uniform-in-time stability is asserted.

## Local coefficients, explosion and Lyapunov control

For coefficients uniformly Lipschitz on each bounded state set, multiply them by cutoffs that agree with one on growing balls. The resulting coefficients are globally Lipschitz. Their solutions agree until they exit a shared agreement ball, by the proved stopped uniqueness argument. Patching them defines a unique maximal solution up to the increasing limit of those exit times. If that limit is finite, the state cannot remain in a compact set there, since another cutoff solution would extend it. This is explosion; local smoothness alone does not exclude it.

A useful sufficient nonexplosion criterion is a nonnegative twice continuously differentiable function $V\ge1$, tending to infinity at spatial infinity, with generator bound $\mathcal L_tV\le CV$. Stop on a ball. The coefficients and derivatives are then bounded, so the stochastic term in the formula has zero expectation. Gronwall gives expected stopped $V$ bounded by its initial expectation times $e^{CT}$. On the exit event, the stopped terminal value is at least the minimum of $V$ on the exit sphere. Thus
$$P(\tau_R\le T)\le\frac{e^{CT}EV(X_0)}{\inf_{|x|=R}V(x)},$$
for deterministic bounded initial state and larger radii, or with the corresponding initial-event localization. The denominator tends to infinity. Hence the explosion probability before any finite horizon is zero.

For globally linear growth, choose $V=1+|x|^2$. Its generator is twice the state dot the drift plus the diffusion Frobenius square, which the growth bounds control by a constant times $V$. This recovers nonexplosion with a geometric coercivity interpretation. A Lyapunov function is a proved bound for a particular equation, not an assumption that every locally defined process remains finite.

## Strong, weak and distributional statements

A weak solution allows the probability space, filtration and Brownian motion to be constructed along with the process. Pathwise uniqueness compares two solutions on one space with the same driver. Uniqueness in law compares their distributions even when they live on different spaces. These definitions do not imply each other by a change of notation.

Under the theorem's deterministic coefficient assumptions, Picard iterates are measurable constructions from the initial variable and Brownian path. Their limit supplies the same measurable solution functional. On any weak solution space, construct that Picard solution using its own initial variable and driver; pathwise uniqueness identifies it with the given weak solution. Brownian increments are independent of time-zero information, so their joint input law is determined by the initial law and Wiener law. The solution law is consequently unique. This is a concrete argument in the present Lipschitz setting, not a general weak-versus-strong equivalence theorem for singular coefficients.

At a deterministic time, restart the Picard construction from the present state with future Brownian increments. Those increments are independent of current information, and uniqueness identifies the restart with the existing future path. Conditional future expectations of bounded Borel state functions therefore depend on the history through the present state and the current time. This proves the deterministic-time Markov property for these coefficients. Stopping-time versions require the corresponding restart argument and are not inferred merely from the word strong in strong solution.

The same-driver continuous-dependence estimate also proves a continuity property of the transition law. Couple deterministic starting states approaching a fixed state with one common Brownian path. Their terminal states converge in square mean and hence in probability. Applying any bounded continuous function preserves convergence in probability, and boundedness turns it into convergence of expectations. Thus the transition operator sends bounded continuous functions to continuous functions. This is the Feller continuity conclusion in the present setting.

It is not a differentiability or smoothing theorem. With zero diffusion the equation can simply transport a discontinuous payoff along a deterministic flow, so a bounded measurable payoff need not become continuous. Nor does continuity alone give the twice spatially differentiable value function needed by a classical PDE formula. The later expectation/PDE chapter must state those stronger regularity assumptions or prove them in a specified model, instead of deriving them from existence and the Markov property.

For a compactly supported twice differentiable function, the generator is
$$\mathcal L_tf=b(t,x)\cdot\nabla f+\tfrac12\operatorname{tr}(\Sigma\Sigma^T D^2f).$$
The formula follows by summing the component covariations in the chain rule. Its compensated function is a true martingale on finite horizons because the derivative-weighted diffusion is bounded by compact support and the growth assumptions. Unbounded functions require their own moment checks. The generator records covariance through the diffusion matrix product, not through an arbitrary entrywise square.

## Worked example 1: a coupled mean-reverting system

For constant matrices $A,G$ and deterministic initial vector, the equation $dX=AXdt+GdW$ has solution
$$X_t=e^{At}x+\int_0^te^{A(t-s)}GdW_s.$$
Apply the time-dependent linear transform $e^{-At}$ to verify the equation, then use uniqueness. The mean is the deterministic term and covariance is the integral of $e^{A(t-s)}GG^Te^{A^T(t-s)}$. Deterministic kernels supply the joint Gaussian law.

For two mean-reversion rates $a,b>0$ and unit noise variances with correlation $\rho$, $|\rho|\le1$, the covariance between coordinates started deterministically is $\rho(1-e^{-(a+b)t})/(a+b)$. The marginal variances are $(1-e^{-2at})/(2a)$ and $(1-e^{-2bt})/(2b)$. Their limiting covariance matrix, used as an independent Gaussian initial law with mean zero, gives a stationary process. Mean reversion removes initial memory; it does not make the stationary random fluctuations vanish.

## Worked example 2: deterministic time-varying volatility

Let bounded deterministic functions specify drift and relative volatility. The exponential of their integrated drift minus half integrated squared volatility plus their Brownian integral solves the proportional price equation, by the preceding chain rule. Its logarithm is Gaussian with variance equal to integrated squared volatility. The price mean uses integrated drift, while its median additionally contains the half-variance subtraction.

For a one-year hypothetical model with drift $3/100$, volatility $1/5$ during the first half and $2/5$ during the second, integrated variance is $1/10$. The final mean is the initial price times $e^{3/100}$, while the median is the initial price times $e^{-1/50}$. The state coefficients remain globally Lipschitz uniformly in time despite their time discontinuity, so the theorem applies. Replacing the two volatilities by their arithmetic average would give a different integrated variance; squaring and time averaging do not commute.

## Worked example 3: uniqueness failure and finite-time explosion

The deterministic equation with zero diffusion and drift $2\sqrt{|x|}$, started at zero, has a family of solutions that remain zero until any chosen delay and then equal the square of elapsed time after that delay. Each is continuously differentiable at its departure time and directly satisfies the equation. The drift is continuous but not Lipschitz at zero. This proves that continuity alone does not give the theorem's pathwise uniqueness.

By contrast the drift $x^2$ is locally Lipschitz. Starting at a positive value $x$, its deterministic solution is $x/(1-xt)$ until time $1/x$, where it explodes. Separation of variables verifies both the equation and maximal finite lifetime. Local uniqueness is intact, while global existence fails. These two examples isolate different missing hypotheses; neither failure is repaired by calling the noise coefficient zero or by displaying a finite initial segment of a numerical path.

## Exercises

### Exercise 4.1
<a id="stochastic-differential-equations-ex-1"></a>

For scalar coefficients $b(t,x)=a(t)x$ and $\sigma(t,x)=c(t)x$ with bounded deterministic $a,c$, verify the theorem's hypotheses.

<details><summary>Hint 1</summary>

Bound coefficient differences by the supremum magnitudes.

</details>
<details><summary>Hint 2</summary>

Both coefficients vanish at the origin.

</details>
<details><summary>Solution</summary>

The sum of difference magnitudes is at most $(\|a\|_\infty+\|c\|_\infty)|x-y|$, uniformly in time. The origin bound is zero and the coefficients are measurable. Thus a square-integrable initial state gives the global strong solution and pathwise uniqueness claimed. Measurable time discontinuities are allowed; the state Lipschitz condition is the decisive uniform regularity here.

</details>

### Exercise 4.2
<a id="stochastic-differential-equations-ex-2"></a>

For deterministic relative volatility $a+bt$, compute integrated log-variance on a horizon $T$ and explain why it differs from the squared average volatility times the horizon.

<details><summary>Hint 1</summary>

Integrate the square before simplifying.

</details>
<details><summary>Hint 2</summary>

The average is $a+bT/2$.

</details>
<details><summary>Solution</summary>

The integrated variance is $a^2T+abT^2+b^2T^3/3$. Squared average times the horizon is $a^2T+abT^2+b^2T^3/4$, smaller by $b^2T^3/12$. Equality holds when the volatility is constant. This is an exact deterministic calculation, not a simulated estimate; the normal log-price law uses the integrated square.

</details>

### Exercise 4.3
<a id="stochastic-differential-equations-ex-3"></a>

Show that the square-root diffusion coefficient is not Lipschitz near zero on the nonnegative axis.

<details><summary>Hint 1</summary>

Compare zero with a small positive argument.

</details>
<details><summary>Hint 2</summary>

The difference ratio is an inverse square root.

</details>
<details><summary>Solution</summary>

The ratio $|\sqrt h-\sqrt0|/|h-0|=1/\sqrt h$ diverges as $h$ decreases to zero. No common Lipschitz constant exists there. Hence the global theorem cannot by itself justify square-root interest-rate models at their boundary. Such models can have valid separate existence and boundary theorems, but those additional results must be stated and proved or explicitly imported.

</details>

### Exercise 4.4
<a id="stochastic-differential-equations-ex-4"></a>

Verify the delayed nonnegative solutions of the square-root-drift deterministic equation.

<details><summary>Hint 1</summary>

Use zero before the delay and a squared linear function afterward.

</details>
<details><summary>Hint 2</summary>

Check the derivative at the joining point too.

</details>
<details><summary>Solution</summary>

For delay $c\ge0$, take $X_t=0$ for $t\le c$ and $X_t=(t-c)^2$ afterward. Its derivative is zero before and $2(t-c)$ after, with both limits zero at the join. That equals $2\sqrt{|X_t|}$ everywhere. Different delays give distinct solutions with identical initial value and zero driver, proving pathwise nonuniqueness under mere continuity of the drift.

</details>

### Exercise 4.5
<a id="stochastic-differential-equations-ex-5"></a>

Find the maximal lifetime of the deterministic equation $dX=X^2dt$ with initial value two.

<details><summary>Hint 1</summary>

Separate the reciprocal of the state.

</details>
<details><summary>Hint 2</summary>

The denominator reaches zero in finite time.

</details>
<details><summary>Solution</summary>

The solution is $2/(1-2t)$ up to time one half, diverging there. Local Lipschitz continuity gives uniqueness before that time, but no finite continuous extension through it. This is an explicit explosion example, not a failure of the local construction. The globally linear-growth condition and its Lyapunov estimate are absent.

</details>

### Exercise 4.6
<a id="stochastic-differential-equations-ex-6"></a>

Why does the factorial Picard estimate prove convergence when a bare one-step difference estimate does not yet do so?

<details><summary>Hint 1</summary>

Iterate the integral inequality in time.

</details>
<details><summary>Hint 2</summary>

The square roots of the resulting bounds form a summable series.

</details>
<details><summary>Solution</summary>

Repeated integration produces a factorial denominator, dominating every fixed exponential power of the horizon constant. Its square-root bounds are summable, so the norm triangle inequality makes the iterates Cauchy and Tonelli yields almost-sure uniform convergence along their successive differences. A single inequality without this iteration would not establish summability or existence of a continuous limit solving the equation.

</details>

### Exercise 4.7
<a id="stochastic-differential-equations-ex-7"></a>

Can two solutions with the same law but different Brownian drivers differ pathwise without contradicting pathwise uniqueness?

<details><summary>Hint 1</summary>

Compare a Brownian motion with its negative as two differently driven processes.

</details>
<details><summary>Hint 2</summary>

Pathwise uniqueness fixes the driver as part of its hypotheses.

</details>
<details><summary>Solution</summary>

Yes. A Brownian path and its negative have the same law and solve the unit-diffusion equation relative to their respective drivers. They are not indistinguishable on the common construction, but the drivers are different. Pathwise uniqueness compares solutions with the same initial state and the same Brownian driver, so its hypotheses are not met by that comparison. Distributional equality is a different claim.

</details>

### Exercise 4.8
<a id="stochastic-differential-equations-ex-8"></a>

Explain why a proper Lyapunov function with the stated generator bound excludes explosion before any fixed horizon.

<details><summary>Hint 1</summary>

Stop at larger state spheres and bound the expected stopped function.

</details>
<details><summary>Hint 2</summary>

On the exit event its value is at least its minimum on that sphere.

</details>
<details><summary>Solution</summary>

The stopped formula and Gronwall bound its expectation by a horizon-dependent constant independent of the radius. The exit probability is at most that constant divided by the sphere minimum. Properness makes the denominator tend to infinity, so the probability of exiting every radius before the horizon is zero. Countably many integer horizons then exclude finite explosion altogether. The argument uses both the generator inequality and growth of the Lyapunov function.

</details>

### Exercise 4.9
<a id="stochastic-differential-equations-ex-9"></a>

For two mean-reverting factors with rates $a,b>0$ and correlated unit noises, derive their covariance at time $t$ from deterministic initial values.

<details><summary>Hint 1</summary>

Write both factors with their exponential deterministic kernels.

</details>
<details><summary>Hint 2</summary>

Cross isometry integrates the kernel product times the noise correlation.

</details>
<details><summary>Solution</summary>

The covariance is $\rho\int_0^t e^{-(a+b)(t-s)}ds=\rho(1-e^{-(a+b)t})/(a+b)$. The deterministic initial terms contribute no covariance. Its sign is the sign of the noise correlation, and its limit is $\rho/(a+b)$. Mean reversion bounds long-run covariance but does not force it to zero unless the correlation or the relevant noise exposure vanishes.

</details>

### Exercise 4.10
<a id="stochastic-differential-equations-ex-10"></a>

For geometric Brownian motion with deterministic positive initial value, derive the expected second moment from the square formula and justify taking expectations.

<details><summary>Hint 1</summary>

Its squared drift coefficient becomes $2\mu+\sigma^2$.

</details>
<details><summary>Hint 2</summary>

The explicit lognormal model has finite fourth moments on finite horizons.

</details>
<details><summary>Solution</summary>

The formula gives $d(S^2)=(2\mu+\sigma^2)S^2dt+2\sigma S^2dB$. The explicit exponential solution has finite expected fourth power, making the last integrand's finite-horizon expected energy finite. Its expectation is zero, leaving the linear moment equation with solution $ES_t^2=s_0^2e^{(2\mu+\sigma^2)t}$. Without that moment check, an unbounded function in a generator calculation would initially yield only a localized statement.

</details>

## Summary

Uniform state Lipschitz bounds and growth give a constructed global strong solution and pathwise uniqueness. Local cutoffs expose explosion, Lyapunov bounds can exclude it, and noise-functional arguments distinguish law uniqueness from same-driver uniqueness. The next chapter changes probability while keeping the declared finite-horizon path events, making normalization and integrability of stochastic exponentials central.
