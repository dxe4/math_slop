
# Robust Control, Small Gain and Constraint Certificates

Ideal pole placement answers a mathematical question for an exact continuous linear model. A physical loop also samples, delays, saturates, quantizes, and faces parameter and unmodelled-dynamics errors. This chapter separates nominal stability, robust stability, constrained feasibility, and implementation evidence.

## 1. Nominal versus robust claims

For $z'=Az+Bu$, state feedback $u=-Kz$ gives $A_{\mathrm{cl}}=A-BK$. If every eigenvalue of $A_{\mathrm{cl}}$ has negative real part, the exact finite-dimensional continuous-time closed loop is exponentially stable. This theorem assumes exact matrices, full state availability, no saturation or delay, and continuous actuation.

With perturbations $\Delta$, robust stability means every member of a declared uncertainty set remains stable. It is meaningless without the uncertainty structure and size. Eigenvalue margins alone can mislead for nonnormal matrices: small matrix perturbations may move eigenvalues much more than their nominal distance to the imaginary axis suggests.

## 2. Lyapunov robustness certificate

If $A_{\mathrm{cl}}$ is Hurwitz and $Q$ is symmetric positive definite, the Lyapunov equation

$$A_{\mathrm{cl}}^TP+PA_{\mathrm{cl}}=-Q$$

has a unique positive-definite $P$. For additive uncertainty $E$, along $z'=(A_{\mathrm{cl}}+E)z$,

$$V'=-z^TQz+2z^TPEz,$$

hence

$$
V' \le-[\lambda_{\min}(Q)-2\lVert P\rVert\lVert E\rVert]\lVert z\rVert^2.
$$

Therefore every perturbation with $2\lVert P\rVert\lVert E\rVert<\lambda_{\min}(Q)$ preserves exponential stability. This is sufficient, often conservative, and tied to the chosen norm and unstructured additive model.

## 3. Input-to-state bounds

For $z'=A_{\mathrm{cl}} z+Ed$, variation of constants yields

$$\|z(t)\|\le Me^{-\alpha t}\|z(0)\|+\frac{M\|E\|}{\alpha}\sup_{0\le s\le t}\|d(s)\|$$

when $\lVert e^{A_{\mathrm{cl}} t}\rVert\leq M e^{-\alpha t}$. This is an input-to-state stability estimate. A small bounded disturbance produces a bounded state, not exact convergence to zero. Integral action can reject selected constant disturbances only if the augmented model is stabilizable and saturation does not cause windup.

## 4. Saturation and invariant ellipsoids

An actuator implements $u=\operatorname{sat}(-Kz)$ with $|u_i|\leq u_{i,\max}$. The nominal linear proof applies wherever $|K_i z|\leq u_{i,\max}$. With Lyapunov function $V=z^TPz$, one certified unsaturated region is an ellipsoid $V\leq \rho$ satisfying

$$\max_{z^TPz\le\rho}|K_iz|=\sqrt{\rho K_iP^{-1}K_i^T}\le u_{i,\max}.$$

For $P\succ0$, $\rho\ge0$, and $u_{i,\max}\ge0$, retain the undivided condition $\rho K_iP^{-1}K_i^{\mathsf T}\le u_{i,\max}^2$. Choose $\rho$ no larger than $u_{i,\max}^2/(K_iP^{-1}K_i^{\mathsf T})$ for each nonzero row $K_i$, whose denominator is positive. A zero row gives identically zero input and no radius limit; omit it from the minimum, and if all rows are zero there is no radius restriction from input bounds. A zero input limit forces $\rho=0$ only for a nonzero row. Stability and invariance still require the separate Lyapunov conditions. This is a local certificate, not the true region of attraction. Anti-windup changes controller dynamics and needs a separate proof. 

## 5. Sampling exactly

Under zero-order hold with period $T$,

$$z_{k+1}=A_dz_k+B_du_k,\qquad A_d=e^{AT},\quad B_d=\int_0^T e^{A\tau}B\,d\tau.$$

Discrete feedback $u_k=-K_dz_k$ is exponentially stable exactly when every eigenvalue of $A_d-B_dK_d$ lies strictly inside the unit disk. Reusing a continuous gain without analysis can fail. Forward Euler approximations $I+TA$ and $TB$ introduce an error whose significance depends on T and fast modes.

The block exponential

$$\exp\left(T\begin{pmatrix}A&B\\0&0\end{pmatrix}\right)=\begin{pmatrix}A_d&B_d\\0&I\end{pmatrix}$$

computes the exact held model without requiring $A^{-1}$.

## 6. Sampling zeros, aliasing, and observation

Sampling maps continuous eigenvalues through $\lambda \to \exp\left(\lambda T\right)$. Frequencies separated by integer multiples of $2\pi/T$ alias. A controllable continuous pair can lose controllability at exceptional sampling periods, and observability can likewise fail. The rank tests must be repeated on $(A_d,B_d,C)$.

Between samples, state and input constraints may be violated even when sampled endpoints are safe. Verification must inspect the held continuous trajectory or bound its intersample peak.

## 7. Delay margin

For scalar $x'=-a x-b x(t-\tau)$, exponential trials give

$$s+a+be^{-s\tau}=0.$$

When $\tau>0$ and the delayed coefficient $b\ne0$, this transcendental equation has infinitely many roots. If $\tau=0$ or $b=0$, it reduces to an affine characteristic equation instead. In the nondegenerate delay case, a finite-dimensional pole plot of the delay-free system is not a delay certificate. At a possible imaginary crossing $s=i \omega$, separate real and imaginary parts and solve for candidate margins; then verify crossing direction and that no earlier root destabilizes. Rational delay approximations provide evidence only relative to approximation order and frequency range.

## 8. Small gain

Let $G$ and $\Delta$ be compatible bounded **linear** causal operators on a specified Banach signal space. If $\lVert G\rVert\lVert\Delta\rVert<1$, then $\lVert G\Delta\rVert<1$ and

$$ (I-G\Delta)^{-1}=\sum_{k=0}^{\infty}(G\Delta)^k$$

converges in operator norm, giving the corresponding robust well-posedness and stability certificate. Nonlinear small-gain theorems require separate feedback-existence and gain/contraction hypotheses; the displayed Neumann-series proof does not apply to arbitrary nonlinear operators. Failure of the inequality does not prove instability; it means this sufficient certificate is silent.

## 9. Robustness computation ledger

A defensible test records uncertainty structure and units, nominal and worst sampled margins, matrix scaling, saturation levels, sample/hold model, delay, initial set, disturbance set, solver tolerances, and intersample peaks. Grid sweeps cannot cover a continuum unless combined with Lipschitz or interval bounds. Monte Carlo cannot establish worst-case robustness.

## Uniform energy estimates prove what a margin controls

The perturbation inequality above also applies to a measurable time-varying matrix error. Assume the same fixed positive matrices satisfy the nominal Lyapunov equation and that the error is essentially bounded by a radius for which the displayed strict margin is positive. Solutions are absolutely continuous, so the energy derivative inequality holds almost everywhere. Integration gives

$$V(t)\le e^{-\gamma t/\lambda_{\max}(P)}V(0),\qquad
\gamma=\lambda_{\min}(Q)-2\|P\|r>0.$$

The comparison between quadratic energy and Euclidean distance then proves a uniform exponential estimate, independent of the particular measurable error history. Frozen eigenvalues were never used. This matters for switching uncertainty: a different Lyapunov matrix for each frozen plant does not automatically provide a common energy during switches. The fixed certificate is what makes the estimate uniform.

With an added disturbance, write its input matrix as $D$ and its essential supremum as $d_*$. The same argument gives

$$\dot V\le-\gamma\|x\|^2+2\|PD\|\|x\|d_*
\le-\frac\gamma2\|x\|^2+\frac{2\|PD\|^2}{\gamma}d_*^2.$$

The second inequality is the elementary square inequality, with constants chosen explicitly. Replacing the state norm by its energy lower bound turns this into a scalar differential inequality. Thus the energy decays exponentially towards a disturbance-dependent ball. A bounded persistent forcing generally leaves a nonzero asymptotic radius. A disturbance that tends to zero does give state convergence in this exponentially stable setting: split the convolution into an old finite interval, whose contribution decays, and a recent interval on which the forcing is uniformly small.

Time dependence does require well-posedness. For essentially bounded measurable matrix coefficients and locally integrable forcing, the linear Carathéodory equation has a unique absolutely continuous solution on every finite interval. The energy proof then uses almost-everywhere derivatives and the integrated inequality. No differentiability of the uncertainty signal is needed. If the uncertainty depends nonlinearly on the state, one must additionally specify existence and uniqueness for that nonlinear equation; a matrix-norm bound alone does not supply local Lipschitz regularity.

### Worked example: a sheared stable system

Let

$$A=\begin{pmatrix}-1&m\\0&-1\end{pmatrix},\qquad m>0.$$

Both eigenvalues equal minus one, but the exact transition matrix is $e^{-t}\begin{pmatrix}1&mt\\0&1\end{pmatrix}$. Initial data in the second coordinate first feed the first coordinate before both decay. The off-diagonal response reaches $m/e$ at time one. A nominal pole distance of one therefore does not control transient amplification uniformly in the shear parameter.

Solving the Lyapunov equation with identity right-hand side gives

$$P=\begin{pmatrix}1/2&m/4\\m/4&1/2+m^2/4\end{pmatrix}.$$

Direct multiplication verifies the equation; the first principal minor and determinant are positive. Its norm grows with the square of the shear, so the unstructured additive perturbation radius supplied by this particular energy shrinks correspondingly. This is a sufficient radius, not an assertion that every perturbation outside it destabilizes. Rescaling the state also rescales the physical uncertainty set; an apparently improved numerical norm after scaling must be translated back into the original units.

For comparison, the perturbation $E=\begin{pmatrix}0&0\\e&0\end{pmatrix}$ gives eigenvalues $-1\pm\sqrt{me}$ when $e\ge0$. It becomes unstable as soon as $me>1$. Thus the fixed pole distance indeed misses a sensitivity that grows with the shear. The structured example has a different exact threshold from the sufficient full-matrix energy bound. Keeping those two statements distinct avoids presenting conservatism as a computational error.

## The small-gain proof includes a signal-space contract

Let $X$ be a Banach space of vector-valued signals with a named norm. Suppose $G$ and $\Delta$ are bounded linear operators on compatible spaces and let the feedback equation be

$$y=Gd+G\Delta y.$$

When the product of induced norms is less than one, the geometric operator series is absolutely convergent because the norm of its nth term is bounded by the nth power of that product. Multiplying each finite partial sum by the identity minus the loop operator leaves the identity minus a final power. That power tends to zero in operator norm, proving both inverse identities for the limit. Hence there is exactly one signal solution and

$$\|y\|_X\le\frac{\|G\|}{1-\|G\|\|\Delta\|}\|d\|_X.$$

If the operators are causal and the signal space supports restriction to earlier times, the resulting inverse is causal. Indeed each finite partial sum is causal, and the norm limit preserves equality of restrictions whenever restriction is continuous. For $L^p$ spaces this is immediate from restriction having norm at most one. This argument states why the feedback response can be computed without future input; invertibility of an unrelated noncausal operator would not establish an implementable loop.

The internal signals also need bounds. For example the uncertainty output is $w=\Delta y$, so it is bounded by the preceding estimate times the uncertainty norm. An injected disturbance at the uncertainty port can be included in the two simultaneous loop equations and bounded in the same way. Certifying only one external transfer after cancelling unstable factors can conceal an unstable internal realization. Here the component operators are assumed stable on the declared space before the inverse is formed, and each internal port is covered.

Zero initial conditions are part of a transfer-operator statement. A finite-dimensional stable plant with nonzero initial state adds its free response as another forcing term; exponential stability supplies a bound for that term. For a general infinite-dimensional realization, stability of a zero-state input/output map alone need not control every hidden internal state. One must establish the additional state estimate rather than infer it from the transfer norm.

### Worked example: an uncertain scalar feedback channel

Consider the causal plant $y'=-ay+d+w$, with positive $a$, zero initial state and an uncertain memoryless channel $w=ky$, where the real constant satisfies $|k|\le r$. In the essential-supremum signal norm, convolution with $e^{-at}$ has gain at most $1/a$. Constant forcing approached over longer intervals shows that this bound is sharp on the half-line. Small gain therefore certifies every allowed channel when $r<a$.

The exact closed-loop equation is $y'=-(a-k)y+d$. The worst positive channel reaches the boundary at $k=a$, matching the norm certificate in this example. A channel known instead to satisfy $-r\le k\le0$ only strengthens the decay for every finite radius. Throwing away that sign information gives a conservative full interval. An uncertainty description is a mathematical modelling choice, and its structure can matter as much as its numerical radius.

For a nonzero initial value, the exact solution adds $e^{-(a-k)t}y_0$. Under the strict robust condition its decay rate is at least $a-r$, uniformly over the allowed channels. If the disturbance is a nonzero constant, the limiting output is $d/(a-k)$, not zero. Robust stability and disturbance rejection are different conclusions even in a one-dimensional loop.

## Nonlinear contraction is a separate sufficient theorem

There is a useful nonlinear analogue, but its hypothesis is an incremental Lipschitz estimate. Let a complete signal space carry a bounded causal linear plant operator, and let the nonlinear uncertainty map take that space into itself. Assume the uncertainty has a global Lipschitz constant in the same signal norm. If the product of plant norm and Lipschitz constant is less than one, the map sending a candidate output to the plant response driven by the disturbance plus uncertainty output is a contraction. The Banach fixed-point theorem gives a unique signal solution and convergence of successive substitution in that norm.

If the nonlinear uncertainty vanishes at zero, the fixed-point equation yields the same geometric gain bound as above. If it does not vanish at zero, its zero-input output contributes an additional forcing term. Merely knowing a bound of the form $\|\Delta y\|\le r\|y\|$ is weaker than an incremental estimate between two distinct signals. That bound can support a priori estimates for a solution that already exists; it does not by itself prove uniqueness through this contraction argument.

On the half-line $L^\infty$, the contraction works for bounded measurable signals when the maps preserve that class. A static Lipschitz saturation is an example. A discontinuous relay requires different existence and solution conventions. Similarly, an algebraic feedthrough loop can fail pointwise well-posedness if its instantaneous map is not invertible. The contraction theorem supplies one sufficient way to resolve such loops, but a delayed differential realization should be analysed with its actual history state as well.

### Worked example: bounded slope and saturation

Take $x'=-ax+\varphi(x)+d$ with positive $a$ and a globally Lipschitz function $\varphi$ satisfying $\varphi(0)=0$ and Lipschitz constant $r<a$. The integral formulation uses the stable convolution operator of the preceding example. For bounded forcing and zero initial state the nonlinear signal contraction gives a unique bounded solution. Ordinary local Lipschitz ODE theory also supplies the solution, while the estimate prevents finite-time escape.

For two solutions driven by the same disturbance, multiply their difference equation by that difference. The slope bound gives an upper derivative of its squared magnitude bounded by minus twice $a-r$ times that squared magnitude. Integration proves exponential forgetting of initial conditions. This incremental conclusion is stronger than boundedness relative to the origin. With a disturbance difference, variation of the scalar comparison estimate gives a uniform gain bounded by the reciprocal of $a-r$.

The choice $\varphi(x)=r\tanh x$ has the required slope bound. The choice $\varphi(x)=r\operatorname{sat}(x)$ also works despite its corners, because it remains globally Lipschitz. Neither example needs differentiation of the nonlinear function at every point. If $r>a$, the zero equilibrium of the hyperbolic tangent example has positive linearised rate and is unstable. Equality leaves this sufficient exponential estimate silent; one must inspect the particular nonlinear term.

## Energy and frequency are different routes to a gain

For a stable finite-dimensional system $x'=Ax+Bw$, $z=Cx+Dw$, a sufficient quadratic dissipation certificate for induced $L^2$ gain at most $g$ is a positive matrix satisfying

$$\begin{pmatrix}A^TP+PA+C^TC&PB+C^TD\\
B^TP+D^TC&D^TD-g^2I\end{pmatrix}\preceq0.$$

To prove sufficiency, expand the quadratic form in the pair of state and input. It is precisely the derivative of $x^TPx$ plus squared output minus $g^2$ times squared input. Integrate from zero to any finite time with zero initial state and discard the nonnegative terminal energy. The resulting output-energy inequality holds uniformly in the horizon. Letting the horizon increase proves the half-line bound by monotone convergence of the nonnegative integrals. With nonzero initial energy, that energy appears as an additive allowance.

This is a sufficiency proof, so it needs no claim that every optimal gain has such a strict certificate. The bounded-real equivalence and its stabilizability/detectability hypotheses belong to a deeper result. For stable scalar $x'=-ax+w$, $z=x$, setting $P=1/a$ makes the dissipation form nonpositive for $g=1/a$: its determinant is zero and its diagonal entries have the required signs. Thus the same sharp gain occurs in both the energy and supremum examples, although the signal norms and proofs differ.

Frequency plots may suggest a gain, but the theorem used must match the signal norm. For a stable finite-dimensional continuous-time convolution on $L^2$, the supremum of the largest singular value of its transfer matrix on the imaginary axis equals its induced energy gain, by the Fourier multiplier theorem. That theorem is an input here, with stability and zero-state conventions explicit. A finite grid of frequencies does not itself prove the continuous supremum. An energy matrix can instead give a direct uniform upper bound without a frequency grid.

## Constraint and delay claims need their own state

The unsaturated ellipsoid above is positively invariant if the nominal energy is nonincreasing throughout it: a first exit would require reaching the energy boundary while the energy derivative points inward or tangentially. More formally, integrate the derivative inequality until the first exit, obtaining an energy no larger than its initial value, contradicting the exit. Under uncertainty the same proof works when the robust energy inequality holds throughout the ellipsoid. Under persistent disturbance, an outer boundary needs an inward-pointing inequality that dominates the forcing there; nominal decay alone does not certify it.

Delay changes the state space because an initial history, rather than only the current vector, determines future evolution. For the scalar delay equation already stated, the elementary imaginary-root equations are $a+b\cos(\omega\tau)=0$ and $\omega-b\sin(\omega\tau)=0$. If $b>a>0$, the first positive candidate is $\omega=\sqrt{b^2-a^2}$ and $\tau=\arccos(-a/b)/\omega$. These algebraic equations locate a possible crossing; they are not by themselves a proof that all smaller delays are stable. Such a proof needs the delay root-continuation or a separate functional-energy theorem, including the history norm. The distinction prevents a candidate calculation from being advertised as a complete delay margin.

## Exercises with complete worked solutions

### 1. Nominal pole
For $x'=2x+u$, choose $u=-kx$. Which k stabilizes?

<details><summary>Hint 1</summary>

Substitute the feedback into the plant.

</details>

<details><summary>Hint 2</summary>

A scalar exponential decays exactly when its real exponent is negative.

</details>

<details><summary>Full solution</summary>

**Solution.** Closed-loop rate is $2-k$; exponential stability requires $2-k<0$, hence $k>2$.

</details>

### 2. Additive uncertainty
If the scalar closed-loop rate is $-3+e$, stable for every $|e|\leq r$, what largest strict radius is certified?

<details><summary>Hint 1</summary>

Find the largest possible uncertain rate.

</details>

<details><summary>Hint 2</summary>

The endpoint with the most positive perturbation is the dangerous one.

</details>

<details><summary>Full solution</summary>

**Solution.** Worst rate is $-3+r$; it remains negative for $r<3$. At $r=3$ a zero eigenvalue appears, so the strict robust radius is any bound below three.

</details>

### 3. Lyapunov scalar certificate
For $x'=-2x$, $Q=1$, solve for P.

<details><summary>Hint 1</summary>

The scalar Lyapunov equation has two identical drift contributions.

</details>

<details><summary>Hint 2</summary>

Use the resulting positive scalar in the stated strict inequality.

</details>

<details><summary>Full solution</summary>

**Solution.** The equation $2(-2)P=-1$ gives $P=1/4$. The additive bound $2P|e|<1$ gives $|e|<2$, which is exact in this scalar case.

</details>

### 4. Disturbance bound
For $x'=-2x+d$, $|d|\leq 0.1$, bound the asymptotic magnitude.

<details><summary>Hint 1</summary>

Write the exact integrating-factor solution.

</details>

<details><summary>Hint 2</summary>

Bound the forcing integral by its kernel integral times the forcing limit.

</details>

<details><summary>Full solution</summary>

**Solution.** Variation of constants gives $|x(t)|\leq e^{-2t}|x_0|+0.1(1-e^{-2t})/2$; the limiting bound is $0.05$.

</details>

### 5. Exact sample map
For $x'=ax+bu$ held for T, with $a\neq0$, find $A_d,B_d$.

<details><summary>Hint 1</summary>

Integrate the scalar exponential over a hold.

</details>

<details><summary>Hint 2</summary>

Treat the zero-drift case by a limit rather than division by zero.

</details>

<details><summary>Full solution</summary>

**Solution.** $A_d=e^{aT}$ and $B_d=b(e^{aT}-1)/a$. For $a=0$, the continuous limit is $B_d=bT$.

</details>

### 6. Discrete stability
For $x_{k+1}=1.2x_k+u_k$, $u=-kx$, find k.

<details><summary>Hint 1</summary>

Insert the feedback into the one-step map.

</details>

<details><summary>Hint 2</summary>

The multiplier must lie strictly between minus one and one.

</details>

<details><summary>Full solution</summary>

**Solution.** The multiplier is $1.2-k$; unit-disk stability requires $|1.2-k|<1$, or $0.2<k<2.2$.

</details>

### 7. Continuous gain reused
For $x'=x+u$, use continuous gain $k=2$ and exact zero-order hold with period T. Find the sampled multiplier.

<details><summary>Hint 1</summary>

Use the exact hold map rather than Euler.

</details>

<details><summary>Hint 2</summary>

Solve both sides of the unit-disk inequality for the exponential.

</details>

<details><summary>Full solution</summary>

**Solution.** $A_d=e^{\mathsf T}$, $B_d=e^{\mathsf T}-1$, so the multiplier is $e^{\mathsf T}-2(e^{\mathsf T}-1)=2-e^{\mathsf T}$. Stability requires $|2-e^{\mathsf T}|<1$, which gives $0<T<\ln 3$. Continuous stability alone did not allow arbitrary T.

</details>

### 8. Euler stability trap
For $x'=-100x$, when is Euler stable?

<details><summary>Hint 1</summary>

Apply the explicit Euler update to the decay equation.

</details>

<details><summary>Hint 2</summary>

A real multiplier has modulus below one precisely on the open unit interval about zero.

</details>

<details><summary>Full solution</summary>

**Solution.** Its multiplier is $1-100T$; require absolute value below one, giving $0<T<0.02$. The exact sampled free decay is stable for every positive T.

</details>

### 9. Saturation region
If $P=2$, $K=3$, and $u_{\max}=6$ in one dimension, find maximum rho with $V=2x^2\leq \rho$ unsaturated.

<details><summary>Hint 1</summary>

Express the actuator bound as an interval for the state.

</details>

<details><summary>Hint 2</summary>

Evaluate the quadratic energy at that interval endpoint.

</details>

<details><summary>Full solution</summary>

**Solution.** Unsaturation requires $|3x|\leq 6$, hence $|x|\leq 2$, so $\rho\leq 2(2^2)=8$. The formula gives the same value.

</details>

### 10. Integral windup
Why can integral action worsen recovery under saturation?

<details><summary>Hint 1</summary>

Compare the commanded input with the applied clipped input.

</details>

<details><summary>Hint 2</summary>

The integrator can keep moving even while the actuator cannot respond.

</details>

<details><summary>Full solution</summary>

**Solution.** While the actuator is clipped, the integrator may continue accumulating error and command an unreachable input. After the state crosses the target, the stored integral keeps the actuator saturated, causing overshoot. Anti-windup must limit or back-calculate that state.

</details>

### 11. Aliasing
What continuous frequencies sample identically to omega at period T?

<details><summary>Hint 1</summary>

Compare the sampled complex exponentials.

</details>

<details><summary>Hint 2</summary>

Adding an integer number of full rotations per sample changes no sample.

</details>

<details><summary>Full solution</summary>

**Solution.** Every $\omega+2\pi m/T$, integer m, has the same sample multiplier because $\exp(i(\omega+2\pi m/T)T)=\exp\left(i \omega T\right)$.

</details>

### 12. Small gain scalar
If stable gains are $\lVert G\rVert=2$ and uncertainty bound $\lVert \Delta\rVert\leq 0.4$, what follows?

<details><summary>Hint 1</summary>

Multiply the two induced-norm bounds.

</details>

<details><summary>Hint 2</summary>

Invoke the convergent inverse only when the product is strictly below one.

</details>

<details><summary>Full solution</summary>

**Solution.** Their product is at most $0.8<1$, so the small-gain sufficient certificate applies in the named induced norm. It does not give an exact margin or handle unmodelled signal spaces.

</details>

### 13. Failed small gain
If the product is 1.2, is the loop unstable?

<details><summary>Hint 1</summary>

Recall which direction the small-gain implication has.

</details>

<details><summary>Hint 2</summary>

A sufficient inequality need not describe the exact stability region.

</details>

<details><summary>Full solution</summary>

**Solution.** Not necessarily. The sufficient condition is inconclusive. Phase, structure, or a sharper multiplier analysis may still certify stability.

</details>

### 14. Intersample violation
Can safe endpoints imply safe continuous trajectories?

<details><summary>Hint 1</summary>

Write the trajectory at a fractional hold time.

</details>

<details><summary>Hint 2</summary>

Its maximum need not occur at either endpoint.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Nonnormal or oscillatory dynamics can peak between samples. One must compute or bound $e^{A \tau}z_k+\int_0^\tau e^{As}B ds u_k$ for $0\leq \tau\leq T$.

</details>

### 15. Delay-free boundary
For $x'=-x-kx(t-\tau)$, state the characteristic equation.

<details><summary>Hint 1</summary>

Insert an exponential trial into the delayed equation.

</details>

<details><summary>Hint 2</summary>

Separate the genuine delay case from zero delay or zero delayed coefficient.

</details>

<details><summary>Full solution</summary>

**Solution.** Substituting $e^{st}$ yields $s+1+k e^{-s \tau}=0$. When $k\ne0$ and $\tau>0$, it has infinitely many roots, so the delay-free root $-(1+k)$ is not enough. For $k=0$ or $\tau=0$, the equation is affine in $s$ and has only one root; these degenerate cases do not support the infinite-root conclusion.

</details>

### 16. Uncertainty structure
Why distinguish repeated scalar from full matrix uncertainty?

<details><summary>Hint 1</summary>

List the algebraic relations enforced by a repeated parameter.

</details>

<details><summary>Hint 2</summary>

A full matrix perturbation allows independent changes that the repeated parameter forbids.

</details>

<details><summary>Full solution</summary>

**Solution.** Repeated parameters couple entries and permit fewer perturbations than an arbitrary full block. Ignoring structure can be needlessly conservative; inventing structure can miss real failures.

</details>

### 17. Rank tolerance
A controllability singular value is $10^{-9}$ with coefficient uncertainty $10^{-5}$. What claim is justified?

<details><summary>Hint 1</summary>

Compare the coefficient uncertainty scale with the weak singular direction.

</details>

<details><summary>Hint 2</summary>

Numerical rank without scaling or an error model is not a robustness certificate.

</details>

<details><summary>Full solution</summary>

**Solution.** Exact floating-point rank is not practically robust. Perturbations larger than the smallest singular value may destroy effective controllability; report scaling and an uncertainty-aware bound.

</details>

### 18. Grid sweep
Why do 10,000 stable random plants not prove robust stability?

<details><summary>Hint 1</summary>

Identify the quantifier in robust stability.

</details>

<details><summary>Hint 2</summary>

Finitely many sampled members do not cover every point of a continuum.

</details>

<details><summary>Full solution</summary>

**Solution.** They cover finitely many draws, not every member of the uncertainty set, and may miss a thin worst-case region. A uniform theorem, interval enclosure, or certified optimization bound is needed.

</details>

### 19. Project: sampled saturated loop
For $x'=x+u$, $|u|\leq 1$, use held $u_k=-2x_k$, period T. Derive the unsaturated map and certified local interval.

<details><summary>Hint 1</summary>

First derive the exact unsaturated sampled multiplier.

</details>

<details><summary>Hint 2</summary>

Intersect its strict stability condition with the actuator-feasible sample interval.

</details>

<details><summary>Full solution</summary>

**Solution.** The exact unsaturated multiplier is $2-e^{\mathsf T}$ from Exercise 7, stable for $T<\ln3$. Unsaturation at sample times requires $|2x_k|\leq 1$, so $|x_k|\leq 1/2$. To certify invariance, also require $|(2-e^{\mathsf T})x|\leq 1/2$, automatically true under strict sampled stability. Intersample input stays constant and within its bound, but any state constraint still needs the exact held curve. For example, compare analytically the multipliers at $T=\log(3/2)$, $T=\log 2$ and $T=\log 3$. They are respectively one half, zero and minus one, so the last is a boundary rather than a strict stability case.

</details>

### 20. Claim repair
Repair: “All simulated uncertain plants were stable, therefore the controller is robust.”

<details><summary>Hint 1</summary>

Separate the observed finite computations from the uniform theorem.

</details>

<details><summary>Hint 2</summary>

Name the horizon and sampled uncertainty law, then state the remaining uniform obligation.

</details>

<details><summary>Full solution</summary>

**Solution.** State instead that the sampled plants remained stable over the declared horizon, solver, and sampled uncertainty distribution. Robust stability for the full uncertainty set remains unproved until a uniform certificate or verified exhaustive bound is supplied.

</details>


## Chapter synthesis

Nominal eigenvalues, robustness, disturbance attenuation, constraint feasibility, sampled stability, and delay tolerance are separate claims. Lyapunov, exact discretization, invariant ellipsoids, and small gain give auditable sufficient certificates; the hypotheses delimit their mathematical conclusions.

## Dependency ledger

- Nominal feedback uses controllability and observation results from the preceding control chapter.
- Lyapunov certificates require positive-definite solutions and declared norms.
- Exact sample maps assume zero-order hold and fixed period.
- Saturation certificates are local unless a nonlinear global proof is supplied.
- Small gain depends on causal stable operators in a named signal norm.
- Numerical sweeps remain evidence, not continuum proofs.
