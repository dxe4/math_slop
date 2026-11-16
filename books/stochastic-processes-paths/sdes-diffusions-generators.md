
# SDEs, Diffusions and Generators

A stochastic differential equation specifies how drift and accumulated noise depend on the current state. Its notation resembles an ordinary differential equation, but Brownian motion has no ordinary time derivative. The equation is an integral identity, and a solution includes a probability space, filtration, driving Brownian motion and adapted process satisfying that identity.

This L4 introduction assumes [The Ito Integral](stochastic-integration-orientation.md), conditional expectation, L2 completeness and Gronwall’s inequality. We prove existence and pathwise uniqueness for globally Lipschitz scalar coefficients, derive generators using Ito’s formula, and solve three standard examples. Local coefficients, boundaries and weak solutions require additional hypotheses and are identified separately.

## What an equation asserts

**Definition 16.1 (strong solution).** Given a Brownian motion $B$ and an initial variable $X_0$ measurable at time zero, a strong solution to
$$
dX_t=b(X_t)\,dt+\sigma(X_t)\,dB_t
$$
is a continuous adapted process for which, almost surely simultaneously for all $t\ge0$,
$$
X_t=X_0+\int_0^tb(X_s)\,ds+\int_0^t\sigma(X_s)\,dB_s.
$$
The time integral must be locally absolutely integrable and the stochastic integrand locally square-integrable. For the theorem below we work in the stronger class with finite $E\sup_{s\le T}|X_s|^2$ on every finite horizon.

The Brownian increments are independent of the time-zero information, including $X_0$. A construction given the same initial variable and the same Brownian motion is called strong. A weak solution instead allows the probability space and Brownian motion to be part of what is constructed. These are different existence questions.

**Definition 16.2 (global Lipschitz condition).** There is a finite constant $L$ such that
$$
|b(x)-b(y)|+|\sigma(x)-\sigma(y)|\le L|x-y|
$$
for all real $x,y$. This implies linear growth: $|b(x)|^2+|\sigma(x)|^2\le C(1+|x|^2)$ for a finite constant $C$ determined by the values at zero and $L$.

## A complete existence and uniqueness argument

**Theorem 16.3.** Suppose the global Lipschitz condition holds and $E|X_0|^2<\infty$. On the given Brownian probability space there is a unique continuous adapted solution in the square-integrable finite-horizon class. Two such solutions with the same $X_0$ and $B$ are indistinguishable.

**Proof.** Fix a finite horizon $T$. Define Picard iterates by $X^{(0)}_t=X_0$ and
$$
X^{(n+1)}_t=X_0+\int_0^tb(X^{(n)}_s)\,ds
+\int_0^t\sigma(X^{(n)}_s)\,dB_s.
$$
Induction, linear growth and the Ito isometry show that each integral exists and each iterate has finite second moment of its supremum on $[0,T]$. For the stochastic term use the continuous L2 maximal inequality $E\sup_{s\le t}|M_s|^2\le4E|M_t|^2$, obtained from its discrete-time version on increasingly fine grids and continuity.

Put $d_n(t)=E\sup_{s\le t}|X^{(n+1)}_s-X^{(n)}_s|^2$. Cauchy–Schwarz for the time integral, the maximal inequality for the stochastic integral and the Lipschitz condition give, for $n\ge1$,
$$
d_n(t)\le C_T\int_0^td_{n-1}(u)\,du.
$$
For the first difference, $d_0(t)\le K_Tt$ follows by bounding the fixed coefficients $b(X_0),\sigma(X_0)$ with linear growth. Iteration gives
$$
d_n(T)\le K_T\frac{C_T^nT^{n+1}}{(n+1)!}.
$$
The sum of the square roots of these bounds is finite. Hence the iterates are Cauchy in the norm $(E\sup_{t\le T}|X_t|^2)^{1/2}$. More concretely, the expected sum of their successive sup-norm differences is finite; therefore that sum is finite almost surely. The iterates converge uniformly almost surely to a continuous adapted process, and also in the stated L2 supremum norm.

Lipschitz continuity makes their drift integrands converge in time-integrated L2. The Ito isometry and maximal inequality do the same for their stochastic integrals. Passing to the limit yields the integral equation as an identity of continuous processes.

For two solutions $X,Y$ with the same initial variable and driver, exactly the difference estimate gives
$$
E\sup_{s\le t}|X_s-Y_s|^2
\le C_T\int_0^tE\sup_{v\le u}|X_v-Y_v|^2\,du.
$$
Gronwall’s inequality makes the left side zero. Thus they agree at every time on $[0,T]$ outside one null event. Carrying out the construction for integer horizons and using uniqueness gives one compatible process for all times. ∎

The factorial estimate supplies existence rather than assuming that a formal iterative recipe converges. Global Lipschitz coefficients prevent finite-time divergence in this class. Neither conclusion automatically extends to arbitrary locally smooth coefficients.

## Moment control and continuous dependence

The same drift and martingale bounds applied to a solution yield
$$
E\sup_{s\le t}|X_s|^2
\le C_T(1+E|X_0|^2)
+C_T\int_0^tE\sup_{v\le u}|X_v|^2\,du.
$$
Gronwall therefore gives a finite bound on each horizon. Applying the difference argument to two initial values driven by the same Brownian motion gives
$$
E\sup_{s\le T}|X_s-Y_s|^2\le C_T E|X_0-Y_0|^2.
$$
The constant can depend on the horizon and coefficients; this is not a uniform-in-time stability statement.

These bounds concern ideal solutions, not a numerical discretisation. A computed path has additional time-step, finite-precision and random-number errors. Convergence of a numerical scheme needs its own theorem and cannot be inferred just from existence of the target diffusion.

## Worked example: constant drift and diffusion

For constants $v,\sigma$ and deterministic $x$, the solution is $X_t=x+vt+\sigma B_t$. Direct substitution into the integral equation proves it, and the global theorem proves uniqueness. Its mean is $x+vt$, variance is $\sigma^2t$, and increments over disjoint time intervals are independent.

The coefficient $\sigma$ has state units divided by the square root of time; $v$ has state units divided by time. Doubling elapsed time doubles the variance, not the standard deviation. For $\sigma=0$ the equation reduces to a deterministic straight line, so an SDE notation does not itself guarantee nontrivial randomness.

## Worked example: the Ornstein–Uhlenbeck process

Let $dX_t=-\theta X_t\,dt+\sigma\,dB_t$, with $\theta>0$. Multiplying by $e^{\theta t}$ and using the deterministic-product form of Ito’s formula gives
$$
X_t=e^{-\theta t}X_0+
\sigma\int_0^te^{-\theta(t-s)}\,dB_s.
$$
The deterministic kernel makes the integral Gaussian with mean zero and variance
$$
\sigma^2\int_0^te^{-2\theta(t-s)}\,ds
=\frac{\sigma^2}{2\theta}(1-e^{-2\theta t}).
$$
For deterministic $X_0=x$, the displayed expression gives the full Gaussian transition law. If instead $X_0$ is independent Gaussian with mean zero and variance $\sigma^2/(2\theta)$, then every $X_t$ has that same law, and the time-homogeneous Markov transitions make the process stationary.

Mean reversion does not mean a path approaches zero almost surely. In stationarity the variance remains positive. The deterministic memory of the initial state decays, while fresh noise continues to enter.

## Worked example: geometric Brownian motion

For $dS_t=\mu S_t\,dt+\sigma S_t\,dB_t$ and deterministic $S_0=s_0>0$, Ito’s formula verifies
$$
S_t=s_0\exp\{(\mu-\sigma^2/2)t+\sigma B_t\}.
$$
The correction in the exponent gives $ES_t=s_0e^{\mu t}$. Taking logarithms gives a normal variable with mean $\log s_0+(\mu-\sigma^2/2)t$ and variance $\sigma^2t$. The process stays strictly positive at every finite time.

Its median is $s_0e^{(\mu-\sigma^2/2)t}$, which can decrease even when its expectation increases. A typical quantile and a mean need not have the same trend. This is a probabilistic model, not an assertion that a financial price has constant coefficients or lognormal future uncertainty.

## The generator and its martingale

For a twice continuously differentiable function $f$, Ito’s formula gives the local expected-change operator
$$
\mathcal Lf(x)=b(x)f'(x)+\tfrac12\sigma(x)^2f''(x).
$$
This is the diffusion generator. For $f$ twice continuously differentiable with compact support, the global-growth hypotheses ensure the required finite-horizon integrability, and
$$
f(X_t)-f(X_0)-\int_0^t\mathcal Lf(X_s)\,ds
$$
is a martingale. Its remaining term is $\int_0^tf'(X_s)\sigma(X_s)\,dB_s$, a square-integrable stochastic integral. For an arbitrary unbounded $f$, the same expression may initially be only a local martingale; its expectation cannot be dropped without further control.

The Markov property follows from the strong construction and pathwise uniqueness. At a deterministic time, future Brownian increments are independent of the current information. The solution rebuilt from $X_t$ with those increments agrees with the existing future by uniqueness. Thus its future conditional law depends on the past through the present state.

For the Ornstein–Uhlenbeck model, $\mathcal Lf=-\theta x f'+(\sigma^2/2)f''$. Choosing $f(x)=x^2$ gives $-2\theta x^2+\sigma^2$. The expected-change identity then yields the second-moment equation $m_2'=-2\theta m_2+\sigma^2$, whose equilibrium is $\sigma^2/(2\theta)$. The second-moment assumptions of the explicit solution justify using this unbounded test function here.

## Boundaries and failures outside the theorem

Consider the deterministic equation $dX_t=X_t^2\,dt$ with $X_0=x>0$. The solution $x/(1-xt)$ diverges at time $1/x$. Its drift is locally Lipschitz but not globally Lipschitz or of linear growth. Local uniqueness therefore does not guarantee a global finite solution.

Likewise, square-root diffusion coefficients fail the global Lipschitz hypothesis at zero. Special boundary and uniqueness theorems may handle such models, but they require separate arguments. A positive initial state does not justify ignoring a reachable boundary. Absorption, reflection and killing produce different processes and different generator domains.

The backward equation $\partial_tu=\mathcal Lu$ and boundary-value problems connect diffusions to PDE. An expectation representation requires conditions ensuring the PDE solution has the stated regularity and the stopped martingale has adequate integrability. This introductory chapter derives the generator and model identities; it does not claim that every formal PDE solution has a unique probabilistic representation.

## Transition expectations and the backward equation

For the constant-coefficient diffusion, define $u(t,x)=E[f(x+vt+\sigma B_t)]$ for a smooth bounded function with bounded derivatives. The Gaussian transition law makes this an explicit integral. Applying Ito’s formula and then expectation gives
$$
\partial_tu=v\,\partial_xu+\tfrac12\sigma^2\partial_{xx}u,
\qquad u(0,x)=f(x).
$$
Differentiation under the Gaussian expectation is justified by bounded derivatives. This is a precise example in which the backward equation follows from an expectation. For general coefficients the same formal generator appears, but smoothness of $u$ requires a further regularity theorem; existence of the diffusion alone does not prove every desired derivative exists.

**Worked example 16.4 (a quadratic observable).** For $f(x)=x^2$ and constant coefficients, the explicit Gaussian moments give
$$
u(t,x)=(x+vt)^2+\sigma^2t.
$$
Its time derivative is $2v(x+vt)+\sigma^2$. Its spatial derivatives are $2(x+vt)$ and two, so the generator gives the same expression. Although this test is unbounded, its polynomial growth and the Gaussian moments justify the calculation directly. It illustrates how a generator acts on observables, rather than on a sample path derivative.

The same distinction appears at an absorbing boundary. A function solving a differential equation in an interval needs boundary values describing what happens when the process exits. Killing, absorption and reflection do not share the same domain of generator functions. An equation written only on the open interval cannot select among those processes.

## Reading a time-step approximation

For a small positive step $h$, freezing coefficients at the start suggests
$$
X_{t+h}\approx X_t+b(X_t)h+\sigma(X_t)\sqrt h\,Z,
$$
where $Z$ is a fresh standard normal variable independent of the current information. The drift scales as $h$ and the noise as $\sqrt h$. Using $hZ$ in place of $\sqrt h Z$ changes the variance order and no longer approximates the same stochastic equation.

The frozen update has a conditional Gaussian law, but a diffusion with state-dependent coefficients generally does not have Gaussian exact transitions. In particular, the geometric model’s exact transition is lognormal and positive. A frozen additive update for that model can produce a negative numerical value. Such a value is a discretisation feature, not evidence that the exact positive solution crossed zero.

No numerical convergence claim is needed for the constructions in this chapter. The approximation is presented to distinguish a formal increment rule from the integral identity it is intended to approach. A theorem about a particular scheme must state its error norm, coefficient assumptions and time horizon. The existence-and-uniqueness proof above instead constructs a mathematical process by Picard iteration of integrals on the given Brownian space.

## A dissipative generator gives a moment bound

Consider a nonexplosive diffusion from the chapter’s existence theorem and suppose its drift and diffusion coefficients satisfy
$$
2xb(x)+\sigma(x)^2\le A-Bx^2
$$
for constants $A\ge0$ and $B>0$. This is the generator inequality for the quadratic function. It describes an average restoring force strong enough to offset local noise.

Apply Ito’s formula to the exponentially weighted square, first stopped before leaving a bounded interval. The stochastic integral has mean zero under that bounded localisation. The generator inequality bounds its expected change by the integral of $Ae^{Bs}$. Letting the stopping intervals increase and using nonexplosion plus Fatou gives
$$
E X_t^2\le e^{-Bt}E X_0^2+\frac AB(1-e^{-Bt}).
$$
Thus a finite initial second moment remains uniformly bounded in time.

This bound does not by itself identify a stationary distribution or prove convergence toward one. Those require additional recurrence, compactness and uniqueness arguments. It supplies one useful quantitative ingredient while keeping moment control separate from an ergodic theorem.

## Additive noise and synchronous contraction

For a drift b that satisfies a one-sided dissipativity condition, two solutions driven by the same Brownian path can contract even without a bounded drift. Suppose the diffusion coefficient is the same constant for both solutions and
$$(x-y)^\top(b(x)-b(y))\le-c\|x-y\|^2,\qquad c>0.$$
Subtract their integral equations. The Brownian increments cancel, so the difference is an absolutely continuous path. Differentiating its squared norm almost everywhere and applying the displayed inequality gives a derivative at most minus twice c times that squared norm. Multiplication by the exponential integrating factor proves that the pathwise distance is at most its initial distance times the exponential of minus c times elapsed time.

This coupling result compares solutions under the stated common noise and common coefficients. It does not say independent realizations move toward each other pathwise. It yields a distributional comparison by taking expected squared distance whenever the initial coupling has finite second moment. If the diffusion coefficient depends on the state, its difference contributes a stochastic term and the same cancellation proof is unavailable.

## Exercises

### Exercise 16.1
<a id="sdes-diffusions-generators-ex-1"></a>

Find the mean and variance of the solution to $dX_t=2\,dt+3\,dB_t$ with $X_0=4$.

<details>
<summary>Hint 1</summary>

Write the explicit integral solution.
</details>
<details>
<summary>Hint 2</summary>

Brownian variance equals elapsed time.
</details>
<details>
<summary>Solution</summary>

The solution is $X_t=4+2t+3B_t$. Its mean is $4+2t$ and variance is $9t$. Independence and centring of Brownian increments justify both statements. The standard deviation is 3 sqrt(t), which has a different time dependence from the variance.
</details>

### Exercise 16.2
<a id="sdes-diffusions-generators-ex-2"></a>

Derive the Ornstein–Uhlenbeck solution by an integrating factor.

<details>
<summary>Hint 1</summary>

Multiply by exp(theta t).
</details>
<details>
<summary>Hint 2</summary>

The deterministic factor has zero quadratic covariation with Brownian motion.
</details>
<details>
<summary>Solution</summary>

Ito's product rule gives d(exp(theta t)X_t)=sigma exp(theta t)dB_t, because the two drift terms cancel. Integrate and multiply by exp(-theta t). This yields the stated convolution kernel and satisfies the original integral equation. The coefficients are globally Lipschitz, so the explicit candidate is the unique strong solution in the theorem's class.
</details>

### Exercise 16.3
<a id="sdes-diffusions-generators-ex-3"></a>

For OU with $\theta=2$ and $\sigma=2$ compute the stationary variance.

<details>
<summary>Hint 1</summary>

Use the equilibrium second-moment equation.
</details>
<details>
<summary>Hint 2</summary>

Set its derivative to zero.
</details>
<details>
<summary>Solution</summary>

The variance is $\sigma^2/(2\theta)=4/4=1$. An independent initial normal variable of mean zero and variance one produces a stationary process. A deterministic initial value instead gives time-dependent variance $1-e^{-4t}$; it approaches the stationary variance but is not stationary from time zero.
</details>

### Exercise 16.4
<a id="sdes-diffusions-generators-ex-4"></a>

Verify the drift correction in geometric Brownian motion.

<details>
<summary>Hint 1</summary>

Apply Ito to the exponential.
</details>
<details>
<summary>Hint 2</summary>

The second derivative contributes sigma squared over two.
</details>
<details>
<summary>Solution</summary>

For $S_t=s_0e^{at+\sigma B_t}$, Ito's formula gives dS_t=(a+sigma^2/2)S_t dt+sigma S_t dB_t. To obtain drift mu S_t, choose $a=\mu-\sigma^2/2$. Omitting that subtraction changes the equation rather than merely changing its representation.
</details>

### Exercise 16.5
<a id="sdes-diffusions-generators-ex-5"></a>

Compute the generator on f(x)=x and f(x)=x squared for constant coefficients v,sigma.

<details>
<summary>Hint 1</summary>

Differentiate each test function.
</details>
<details>
<summary>Hint 2</summary>

The second derivative vanishes for the linear function.
</details>
<details>
<summary>Solution</summary>

The generator gives $\mathcal Lx=v$ and $\mathcal L(x^2)=2vx+\sigma^2$. These are local expected-change rates. Using an expectation identity for the unbounded tests is justified here by the explicit Gaussian solution and its finite moments on bounded intervals; a general unbounded test would need an integrability argument.
</details>

### Exercise 16.6
<a id="sdes-diffusions-generators-ex-6"></a>

State where global Lipschitz continuity enters the Picard proof.

<details>
<summary>Hint 1</summary>

Compare coefficients evaluated at two iterates.
</details>
<details>
<summary>Hint 2</summary>

It bounds coefficient differences by state differences.
</details>
<details>
<summary>Solution</summary>

The difference estimate replaces |b(X^n)-b(X^(n-1))| and the analogous diffusion difference by L times |X^n-X^(n-1)|. The resulting integral recurrence yields factorial decay. The same estimate plus Gronwall proves uniqueness. Linear growth, obtained from global Lipschitz continuity, supplies the needed moment bounds.
</details>

### Exercise 16.7
<a id="sdes-diffusions-generators-ex-7"></a>

Explain the difference between pathwise uniqueness and merely having the same marginal distributions.

<details>
<summary>Hint 1</summary>

The driver and initial value are fixed in pathwise comparison.
</details>
<details>
<summary>Hint 2</summary>

Equality concerns coupled processes at all times.
</details>
<details>
<summary>Solution</summary>

Pathwise uniqueness requires two solutions on the same probability space, driven by the same Brownian motion and initial variable, to agree outside a single null event for all times. Equality of marginal laws compares distributions and need not identify coupled sample paths. The theorem proves the stronger coupled statement in its stated solution class.
</details>

### Exercise 16.8
<a id="sdes-diffusions-generators-ex-8"></a>

Show that local Lipschitz coefficients do not guarantee global existence.

<details>
<summary>Hint 1</summary>

Use the deterministic equation with quadratic drift.
</details>
<details>
<summary>Hint 2</summary>

Solve it by separation until its denominator vanishes.
</details>
<details>
<summary>Solution</summary>

For $dX_t=X_t^2\,dt$ and $X_0=x>0$, the solution is $x/(1-xt)$ on t<1/x. The locally Lipschitz drift permits a unique local solution, but that solution diverges at a finite time. This violates global existence because the global growth hypothesis is absent. A claim covering only local coefficients must describe explosion or rule it out separately.
</details>

### Exercise 16.9
<a id="sdes-diffusions-generators-ex-9"></a>

Why does stationarity of OU not imply convergence of every path to zero?

<details>
<summary>Hint 1</summary>

The stationary variance is positive.
</details>
<details>
<summary>Hint 2</summary>

New noise continues after old initial information decays.
</details>
<details>
<summary>Solution</summary>

Starting in the invariant normal law gives the same nondegenerate distribution at every time. If the process converged almost surely to zero, it would converge in distribution to a point mass, contradicting that fixed normal marginal. Mean reversion controls the drift and dependence, not a deterministic terminal value of every trajectory.
</details>

### Exercise 16.10
<a id="sdes-diffusions-generators-ex-10"></a>

For an SDE generator martingale, when may its stochastic integral be removed after taking expectations?

<details>
<summary>Hint 1</summary>

A local martingale need not be a true martingale.
</details>
<details>
<summary>Hint 2</summary>

Check square-integrability or another suitable condition.
</details>
<details>
<summary>Solution</summary>

On a finite horizon, $E\int_0^T|f'(X_s)\sigma(X_s)|^2\,ds<\infty$ is sufficient: the Ito integral is a mean-zero square-integrable martingale. Compactly supported C2 tests under the chapter's growth assumptions satisfy the required control. With an arbitrary unbounded test, localisation alone does not justify passing to an unstopped expectation.
</details>

## Sources and continuation

The Lipschitz proof, examples and exercises are original Euler treatments. Standard references for broader strong/weak existence, boundaries and martingale problems are Karatzas and Shreve, *Brownian Motion and Stochastic Calculus*, and Revuz and Yor, *Continuous Martingales and Brownian Motion*. The commissioned stochastic-calculus continuation develops change of measure, representation and financial models with their additional hypotheses.

## Summary

An SDE is an adapted integral equation. Global Lipschitz coefficients and a square-integrable initial condition give a strong solution through factorially convergent Picard iteration and pathwise uniqueness through Gronwall. Explicit linear and multiplicative models expose different moment and path behaviour. Ito’s formula gives the diffusion generator and a suitably integrable martingale. Local coefficients, explosion, boundary conditions and unbounded test functions require additional arguments.
