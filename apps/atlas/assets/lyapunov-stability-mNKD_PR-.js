var e=`---
parent_id: book-control-theory
chapter_id: lyapunov-stability
title: "Lyapunov Stability: Energy, Dissipation and Input Bounds"
level: graduate
estimated_minutes: 400
license: CC BY-SA 4.0
---

# Lyapunov Stability: Energy, Dissipation and Input Bounds

An eigenvalue test describes a linear model, while a Lyapunov inequality can expose a neighbourhood, a perturbation margin and a disturbance bound. This chapter proves the continuous and discrete quadratic Lyapunov theorems, carries a strict certificate into a nonlinear local model, and explains what extra invariant-set information is needed when dissipation is only semidefinite.

The [transition-matrix chapter](transition-matrices-linear-systems.md) supplies variation of constants and time-varying growth estimates. The dynamics first course supplies the quantified definitions of Lyapunov, asymptotic and exponential stability. Here stability always refers to the stated state domain, norm, equilibrium and input convention. A positive energy and a negative derivative are hypotheses to establish, not labels attached after viewing a trajectory.

## A positive-definite quadratic form is a comparable state measure

Let $P$ be a real symmetric positive-definite matrix. Its eigenvalue bounds give

$$p_-\\|x\\|^2\\le V(x)=x^TPx\\le p_+\\|x\\|^2,$$

with positive constants equal to its smallest and largest eigenvalues. If the orbital derivative is bounded above by minus a positive multiple of the squared state norm, those inequalities convert energy decay into a state estimate. This is the quantitative role of positive definiteness.

If the derivative is merely nonpositive, a sublevel is forward invariant, but attraction need not follow. A rotational linear system preserves its Euclidean quadratic energy and every nonzero circular orbit. If the form is only semidefinite, even remaining in a sublevel may leave an uncontrolled direction unbounded. The derivative and the function's level geometry must be read together.

On a local nonlinear domain, choose a compact sublevel contained in the region where the estimate holds. A first-exit argument prevents escape through its boundary, and compact continuation keeps the solution defined. A formal derivative inequality outside its justified region cannot be used to establish the very containment it assumes.

## The continuous quadratic Lyapunov theorem

**Theorem 3.1.** A real matrix $A$ has all eigenvalues with negative real part if and only if, for every symmetric positive-definite $Q$, there is a unique symmetric positive-definite $P$ satisfying

$$A^TP+PA=-Q.$$

Assume first that the matrix is Hurwitz. The exponential estimate from linear theory makes the integral

$$P=\\int_0^\\infty e^{A^Tt}Qe^{At}\\,dt$$

converge in matrix norm. It is symmetric. For a nonzero real vector, its quadratic form is the integral of a nonnegative continuous function whose value at time zero is strictly positive. The integral is therefore strictly positive, proving positive definiteness.

Differentiate the matrix integrand and integrate from zero to a finite endpoint. The resulting boundary difference tends to minus $Q$ as the endpoint tends to infinity. This proves the Lyapunov equation. For uniqueness, subtract two solutions. The matrix $e^{A^Tt}\\Delta e^{At}$ has zero derivative, so it is constant. Exponential decay makes its limit zero, hence its initial value is zero too.

Conversely, suppose positive-definite matrices satisfy that equation. For a complex eigenvector of the real matrix, multiply the equation by its conjugate transpose and itself. The left side becomes twice the real part of the eigenvalue times its positive $P$-quadratic form. The right side is strictly negative. Every eigenvalue must therefore have negative real part. Positive definiteness extends to complex vectors by separating their real and imaginary components, so this argument covers nonreal eigenvalues without assuming diagonalisation over the reals.

The integral is an existence proof and a mathematical representation. Computing a large matrix integral is not required by the theorem; numerical Lyapunov solvers use their own linear-algebra methods. A numerical matrix with small equation residual needs a separate sign and conditioning analysis before it becomes an exact certificate.

## The equation gives an explicit decay estimate

Along the homogeneous linear system, the Lyapunov equation gives $V'=-x^TQx$. If $q_-$ is the smallest eigenvalue of $Q$, then

$$V'\\le-\\frac{q_-}{p_+}V.$$

Integrating and using both comparison constants yields

$$\\|x(t)\\|\\le\\sqrt{p_+/p_-}\\,
e^{-q_-t/(2p_+)}\\|x(0)\\|.$$

The coefficient and rate are certified in the chosen Euclidean coordinates. They need not be optimal. The condition number of the energy matrix contributes a transient allowance; a nonnormal stable system can require such an allowance even though its long-time exponent is negative.

**Worked example: diagonal modes.** For rates minus one and minus two and $Q=I$, the integral gives diagonal energy weights one half and one quarter. The energy derivative is minus the sum of the squared coordinates. The displayed state bound has prefactor square root of two and rate one. The exact coordinates decay at rates one and two, so the bound is valid but allows more initial amplification than this particular diagonal system actually has. A certificate's conservatism should not be confused with false dynamics.

## Strict linear dissipation controls a local nonlinear remainder

Let a continuously differentiable nonlinear field be $x'=Ax+r(x)$ near zero, with $r(0)=0$, $Dr(0)=0$ and a Hurwitz linear part. Use a positive-definite solution of the Lyapunov equation. The derivative becomes

$$V'=-x^TQx+2x^TPr(x).$$

In a sufficiently small ball, the remainder norm is at most $\\epsilon\\|x\\|$. Therefore the derivative is at most $-(q_--2p_+\\epsilon)\\|x\\|^2$. Choose the ball so that the bracket is positive. A compact energy sublevel inside that ball is then invariant, and its trajectories exist for all forward time by continuation. The previous scalar integration gives a local exponential estimate with that reduced coefficient.

This proves the usual strict nonlinear linearisation result through a concrete energy. The ball radius comes from the remainder bound, while the sublevel containment comes from the energy geometry. They are separate choices. The argument does not classify center spectrum, because the strictly positive $Q$ equation is unavailable there.

**Worked example: a certified basin subset.** Take $x'=-x+x^3$, $y'=-2y$, and use $V=x^2/2+y^2/4$. Its derivative is $-x^2-y^2+x^4$. On the sublevel $V\\le1/4$, the first coordinate satisfies $x^2\\le1/2$, so the derivative is at most minus half the first squared coordinate minus the second squared coordinate. This proves invariance of the ellipse and exponential convergence of every start there.

The full scalar phase line gives a larger basin, namely the strip with first coordinate strictly between minus one and one, with arbitrary second coordinate. The ellipse is an explicit sufficient basin subset, not a claim to have found the entire basin. Outside that strip some trajectories escape, showing why a local energy certificate should not be described as global merely because it is a polynomial formula.

## Semidefinite dissipation requires an invariant-set or observation condition

Suppose $P>0$ and $A^TP+PA=-C^TC$, where the right side can have a nullspace. The energy is nonincreasing, and every trajectory remains in a compact ellipsoid. The zero-derivative set is $\\ker C$. Its largest invariant subspace consists of initial states whose full output $Ce^{At}x_0$ vanishes for all time.

That subspace equals the intersection of the kernels of $C,CA,\\ldots,CA^{n-1}$. One direction follows by differentiating the identically zero output at time zero. Conversely, the Cayley–Hamilton identity makes every higher power a linear combination of the first powers; the exponential series then gives zero output at every time. Thus if the pair is observable in this rank sense, only zero can remain forever in the zero-dissipation set. Compact LaSalle reasoning proves attraction to zero.

There is also a direct spectral proof in the linear case. The semidefinite equation first forces every eigenvalue real part to be nonpositive. A purely imaginary eigenvector would have zero squared output and would remain unobserved along its eigenmode, contradicting observability. Hence all real parts are strictly negative. This is an early link between dissipation and observation, not an assumption that a semidefinite derivative is automatically strict.

**Worked example: damping only the velocity.** For the oscillator $q'=v$, $v'=-q-cv$ with $c>0$, use $P=I$. Dissipation is $2cv^2$. The output row $(0,\\sqrt{2c})$ and its product with the generator form a nonsingular observation matrix. Equivalently, a trajectory with velocity identically zero must also have zero displacement. All energy sublevels are compact, so this semidefinite energy still proves global attraction. At zero damping the observation row vanishes and the conserved circles show that attraction fails.

## A common energy controls time variation and switching

For a time-varying or switched plant, one constant positive-definite matrix satisfying $A(t)^TP+PA(t)\\le-Q$ uniformly gives the same decay estimate across every allowed schedule. The energy does not jump when the coefficient switches, and its derivative inequality holds almost everywhere. Integration therefore gives a uniform state bound.

Separate energy matrices for each frozen mode do not imply a common certificate. Switching can move the state between directions measured very differently by those energies. The unstable two-stage example in the transition chapter proves that no uniform strict common energy can exist for that family and unrestricted repeated schedule. One cannot choose a new mode-dependent energy and ignore the change of its value at each switch.

Time-dependent energy matrices can be useful, but their derivative contributes another term: the correct expression contains $\\dot P+A^TP+PA$. Dropping the explicit derivative changes the stability question. A mode-dependent or time-dependent theorem must state how energy changes across every continuous interval and switching event.

## Disturbances turn decay into a forced bound

For $x'=Ax+Bd$, the quadratic derivative adds $2x^TPBd$. Bound it by twice the norm of $PB$ times state magnitude times disturbance magnitude. Young's inequality gives

$$V'\\le-\\frac{q_-}{2}\\|x\\|^2+
\\frac{2\\|PB\\|^2}{q_-}\\|d\\|^2
\\le-\\alpha V+\\beta\\|d\\|^2,$$

with positive constants determined by the displayed energy comparisons. Integrating yields an exponentially decaying initial-energy term plus a convolution of squared input magnitude. A bounded disturbance therefore gives an ultimate energy bound and, through the smallest energy eigenvalue, an ultimate state bound.

For the linear plant the statement is global. For a nonlinear local certificate, first absorb its remainder into a strictly negative state term, then apply the same argument. The resulting bound is valid only while the state remains in that certified region. A sublevel can be made robustly invariant if its boundary's negative energy drift dominates the maximum disturbance term and the whole sublevel stays inside the region. This supplies an explicit small-input condition rather than silently claiming global input-to-state stability from local calculations.

An integral disturbance estimate is different from a supremum estimate. Finite input energy can give a different transient statement than a persistent bounded disturbance. The norm and time class of the input should be chosen for the physical question, not inferred from whichever inequality is easiest to print.

## Discrete time has a different Lyapunov equation

For $x_{k+1}=Fx_k$, the quadratic difference is $x_k^T(F^TPF-P)x_k$. A matrix is Schur stable exactly when every positive-definite $Q$ admits a unique positive-definite solution of

$$F^TPF-P=-Q.$$

If the spectrum lies strictly inside the unit circle, the convergent series $P=\\sum_{k=0}^\\infty(F^T)^kQF^k$ proves existence and positivity. Shifting the summation index gives the equation. A difference of two solutions is unchanged under repeated congruence by powers of $F$, whose decay proves uniqueness. Conversely, a complex eigenvector gives $(|\\lambda|^2-1)v^*Pv=-v^*Qv<0$, forcing every eigenvalue magnitude below one.

**Worked example: scalar sampling.** For scalar multiplier one half and unit $Q$, the energy weight is the geometric sum $4/3$. Its energy difference is exactly minus the squared state. This is a discrete sum, whereas the continuous generator's certificate came from a time integral. Reusing the same equation without the discrete subtraction term would be incorrect.

For a forward-Euler approximation of a continuously stable generator, expanding its quadratic difference gives $-hQ+h^2A^TPA$. A sufficient step restriction makes the linear negative term dominate the quadratic positive term. In the scalar case with generator minus $a$, the exact condition is $0<h<2/a$. Exact exponential sampling of the homogeneous plant remains stable for every positive interval; Euler is a different discrete map with its own restriction.

## Coordinates transform the certificate as well as the state

Under $z=Tx$, the same energy is represented by $T^{-T}PT^{-1}$. Transforming the state while keeping the old numerical energy matrix generally measures a different quadratic quantity. The existence of a positive-definite certificate is invariant under invertible coordinates, but its numerical condition number and the Euclidean constants in its estimate can change.

This explains why an energy matrix can be ill-scaled without the underlying physical stability changing. It also explains why a small residual in a Lyapunov solve needs to be interpreted alongside positive-definiteness margins and units. The mathematical certificate is the complete inequality on its declared domain, not merely a list of matrix entries or one decreasing sample trace.

## Exercises with staged hints and full solutions

<a id="lyapunov-stability-ex-1"></a>
### Exercise 1: a scalar continuous certificate

Solve the Lyapunov equation for generator minus three and $Q=2$, then recover its state decay rate.

<details><summary>Hint 1</summary>

In one dimension the left side is twice the generator times the energy weight.

</details>
<details><summary>Hint 2</summary>

Convert the energy exponent to a state exponent by taking a square root.

</details>
<details><summary>Full solution</summary>

The equation is $-6P=-2$, so $P=1/3$. Its derivative is $-2x^2=-6V$, giving $V(t)=e^{-6t}V(0)$ and $|x(t)|=e^{-3t}|x(0)|$. Here the certified rate is exact because there is only one scalar mode and no condition-number allowance.

</details>

<a id="lyapunov-stability-ex-2"></a>
### Exercise 2: two diagonal rates

For generator $\\operatorname{diag}(-1,-4)$ and $Q=I$, compute $P$ and the displayed Euclidean estimate.

<details><summary>Hint 1</summary>

The two diagonal scalar equations separate.

</details>
<details><summary>Hint 2</summary>

Use the largest and smallest diagonal energy weights.

</details>
<details><summary>Full solution</summary>

The energy matrix is $\\operatorname{diag}(1/2,1/8)$. Its condition number is four, and $q_-/p_+=2$. The stated bound is $\\|x(t)\\|\\le2e^{-t}\\|x(0)\\|$. The exact diagonal flow has no transient amplification, so the prefactor is conservative while the slow exponential rate is correct.

</details>

<a id="lyapunov-stability-ex-3"></a>
### Exercise 3: a semidefinite counterexample

Use a planar rotation with $P=I$ to disprove attraction from a nonpositive derivative alone.

<details><summary>Hint 1</summary>

The rotation generator is skew-symmetric.

</details>
<details><summary>Hint 2</summary>

Every nonzero orbit preserves its distance from zero.

</details>
<details><summary>Full solution</summary>

The Lyapunov left side is zero, so $V'=0$. The origin is stable because circles remain circles, but no nonzero state approaches it. The largest invariant zero-dissipation set is the whole plane. An attraction argument therefore needs more than nonincrease, such as strict dissipation or a zero-set invariant analysis leaving only the equilibrium.

</details>

<a id="lyapunov-stability-ex-4"></a>
### Exercise 4: certify the nonlinear ellipse

For the nonlinear worked example, derive a strict norm-squared derivative bound on $V\\le1/4$.

<details><summary>Hint 1</summary>

The sublevel bounds the first squared coordinate by one half.

</details>
<details><summary>Hint 2</summary>

Use that bound on its fourth power in the exact derivative.

</details>
<details><summary>Full solution</summary>

The sublevel gives $x^2/2\\le1/4$, hence $x^4\\le x^2/2$. Therefore $V'=-x^2-y^2+x^4\\le-x^2/2-y^2\\le-(x^2+y^2)/2$. The compact ellipse is invariant and supports exponential convergence. It is a sufficient basin subset, not the whole basin of the system.

</details>

<a id="lyapunov-stability-ex-5"></a>
### Exercise 5: damping and observation

Compute the determinant of the oscillator observation matrix for output row $(0,\\sqrt{2c})$.

<details><summary>Hint 1</summary>

Multiply the output row by the oscillator generator for the second row.

</details>
<details><summary>Hint 2</summary>

The product of the two off-diagonal entries determines the determinant.

</details>
<details><summary>Full solution</summary>

The rows are $(0,\\sqrt{2c})$ and $(-\\sqrt{2c},-c\\sqrt{2c})$, giving determinant $2c$. It is nonzero for positive damping. Thus a state with velocity output identically zero must be zero, resolving the semidefinite derivative through observability. At zero damping the observation matrix loses this property.

</details>

<a id="lyapunov-stability-ex-6"></a>
### Exercise 6: integrate a forced energy bound

If $V'\\le-2V+3d^2$ and $|d|\\le D$, bound the energy and its eventual level.

<details><summary>Hint 1</summary>

Multiply by the scalar integrating factor.

</details>
<details><summary>Hint 2</summary>

Integrate the constant squared-input bound against the decaying kernel.

</details>
<details><summary>Full solution</summary>

The energy is at most $e^{-2t}V(0)+(3D^2/2)(1-e^{-2t})$, so its limiting upper bound is $3D^2/2$. A state-norm bound still requires the lower comparison between energy and squared state. For a local nonlinear estimate, a separate invariant-sublevel condition must keep the solution in the region where the inequality was proved.

</details>

<a id="lyapunov-stability-ex-7"></a>
### Exercise 7: why no common strict energy exists

What would a common strict quadratic certificate imply for the unstable periodic switching example from the preceding chapter?

<details><summary>Hint 1</summary>

The same energy would decrease across both modes and remain continuous at switches.

</details>
<details><summary>Hint 2</summary>

Compare the resulting uniform decay with its period multiplier above one.

</details>
<details><summary>Full solution</summary>

A uniform positive-definite energy with one strict negative bound would give exponential decay for every allowed schedule, including the repeated two-stage schedule. That schedule has a growing period eigenmode, a contradiction. Thus the family admits no such strict common certificate. Separate certificates for its two frozen matrices do not resolve the switching problem.

</details>

<a id="lyapunov-stability-ex-8"></a>
### Exercise 8: a scalar discrete certificate

For multiplier one half and unit $Q$, verify the discrete equation directly.

<details><summary>Hint 1</summary>

The left side is the energy weight times one quarter minus itself.

</details>
<details><summary>Hint 2</summary>

Solve for a positive weight and substitute it back.

</details>
<details><summary>Full solution</summary>

The equation is $(1/4-1)P=-1$, giving $P=4/3$. Its one-step energy difference is $-x_k^2$. Positivity and the decreasing quadratic certify Schur stability. The formula comes from the geometric series, not from the continuous-time equation with the same written numerical coefficient.

</details>

<a id="lyapunov-stability-ex-9"></a>
### Exercise 9: Euler's energy restriction

For generator minus two and $P=1$, find the exact positive Euler steps making the quadratic difference strictly negative away from zero.

<details><summary>Hint 1</summary>

Square the Euler multiplier and subtract one.

</details>
<details><summary>Hint 2</summary>

Factor the result into the positive step and its remaining linear factor.

</details>
<details><summary>Full solution</summary>

The multiplier is $1-2h$, so its squared-energy difference coefficient is $-4h+4h^2=4h(h-1)$. It is negative exactly for $0<h<1$. At the endpoint one, the multiplier is minus one and the energy no longer decreases. Exact exponential sampling would have multiplier $e^{-2h}$ and would decrease energy for every positive interval.

</details>

<a id="lyapunov-stability-ex-10"></a>
### Exercise 10: transform the energy

For a scalar state rescaling $z=2x$, how must a positive energy weight transform to represent the same physical quadratic quantity?

<details><summary>Hint 1</summary>

Replace the old coordinate by half the new coordinate.

</details>
<details><summary>Hint 2</summary>

The quadratic coefficient changes by the square of the inverse scale.

</details>
<details><summary>Full solution</summary>

The old energy $Px^2$ becomes $(P/4)z^2$. Keeping the original numerical weight would multiply the energy by four instead of preserving it. In higher dimensions the rule is inverse-transpose congruence. Positivity and existence of a certificate are coordinate invariant, while numerical eigenvalue ratios and Euclidean comparison constants depend on the chosen state units.

</details>

## Chapter synthesis

Strict quadratic dissipation is equivalent to linear stability and gives explicit rates. Local nonlinear remainders, semidefinite zero sets, switching, disturbances and discrete updates each add a distinct hypothesis. A useful certificate includes its metric, domain and admissible inputs, with preserved coordinate meaning and no unsupported global conclusion.
`;export{e as default};