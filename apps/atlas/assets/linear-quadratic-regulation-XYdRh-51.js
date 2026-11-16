var e=`---
parent_id: book-control-theory
chapter_id: linear-quadratic-regulation
title: "Linear–Quadratic Regulation and Riccati Equations"
level: graduate
estimated_minutes: 440
license: CC BY-SA 4.0
---

# Linear–Quadratic Regulation and Riccati Equations

A quadratic cost specifies which state deviations and input magnitudes matter to a design. The resulting regulator is optimal for that written cost and plant, not for every possible measure of performance. This chapter constructs the finite-horizon Riccati solution, proves optimality by completing a square, and then proves the additional stabilizability and detectability conditions behind the usual infinite-horizon theorem.

Required preparation is state transitions, positive-definite forms, [stabilizability](feedback-pole-placement.md) and [detectable observer design](observers-separation-principle.md). Inputs are square integrable on finite horizons. There are no amplitude or state constraints in the basic optimization problem; those restrictions are different problems.

## The finite-horizon problem states its endpoint cost

Let the linear plant have continuous time-dependent matrices on a closed finite interval. Let $Q(t)$ be continuous symmetric positive semidefinite, $R(t)$ continuous symmetric and uniformly positive definite, and terminal matrix $S$ symmetric positive semidefinite. For a fixed initial state, minimise

$$J(u)=\\frac12x(T)^TSx(T)
+\\frac12\\int_0^T[x(t)^TQ(t)x(t)+u(t)^TR(t)u(t)]\\,dt.$$

The input weight's positive lower bound is essential for the strict input penalty and the inverse appearing below. The terminal term penalises the endpoint; it does not impose a hard endpoint equality. A state weight can vanish in some directions without making the finite-horizon problem ill-posed. All statements concern the declared solution and input classes.

Seek a symmetric matrix satisfying the terminal Riccati equation

$$-P'=A^TP+PA-PBR^{-1}B^TP+Q,\\qquad P(T)=S.$$

Before using that equation as a design, we prove that its solution exists throughout the interval and stays nonnegative. A formal local matrix ODE solution alone would not exclude a finite backward singularity.

## A linear Hamiltonian system constructs the global finite-horizon solution

Put $G=BR^{-1}B^T$ and solve the linear matrix equations

$$X'=AX-GY,\\qquad Y'=-QX-A^TY,\\qquad X(T)=I,\\quad Y(T)=S.$$

Continuous coefficients give solutions on the whole finite interval. We show that $X(t)$ is invertible at every time. Suppose instead $X(t_0)v=0$ for a nonzero vector. The state and costate columns $x=Xv$, $p=Yv$ satisfy those Hamiltonian equations, with zero state at $t_0$ and terminal relation $p(T)=Sx(T)$. Direct differentiation gives

$$\\frac{d}{dt}(p^Tx)=-x^TQx-p^TGp.$$

Integrating makes the nonnegative terminal expression equal to minus a nonnegative integral. Both must vanish. In particular $B^Tp=0$ throughout, because the positive input weight turns its corresponding squared expression into zero. The state then obeys $x'=Ax$ with zero initial value at $t_0$, so it is identically zero. At the terminal time it equals $v$, a contradiction. Thus $X$ is invertible.

Define $P=YX^{-1}$. Differentiating gives exactly the Riccati equation. Symmetry follows from another conserved matrix: the derivative of $X^TY-Y^TX$ is zero, and its terminal value is zero. Multiplying that identity by the inverse matrices proves that $P$ equals its transpose.

It is positive semidefinite. For any chosen state at an intermediate time, select the Hamiltonian column combination producing that state. The same integrated identity writes its $P$-quadratic form as the terminal nonnegative cost plus the integral of two nonnegative forms. Therefore it cannot be negative. Continuity and invertibility over the compact interval give a finite matrix solution everywhere. Local uniqueness of the Riccati ODE, integrated from its common terminal condition, gives uniqueness of this full-interval solution.

No stabilizability or detectability condition was required for this finite-horizon construction. Those conditions enter the infinite-horizon conclusion, where the horizon itself no longer bounds the evolution or cost.

## Completing the square proves the optimal feedback

Along any admissible state-input pair, differentiate half the state $P$-quadratic form and insert the Riccati equation. After adding the running cost, the terms group as

$$\\frac{d}{dt}\\left(\\frac12x^TPx\\right)
+\\frac12(x^TQx+u^TRu)
=\\frac12(u+R^{-1}B^TPx)^TR(u+R^{-1}B^TPx).$$

This identity holds almost everywhere for the absolutely continuous state. Integration and the terminal condition give

$$J(u)=\\frac12x_0^TP(0)x_0
+\\frac12\\int_0^T(u+R^{-1}B^TPx)^TR(u+R^{-1}B^TPx)\\,dt.$$

The integral is nonnegative and vanishes exactly for the stated linear feedback, up to almost-everywhere equality. Its closed state equation has continuous coefficients, so that input is admissible and realises the lower value. This proves existence, uniqueness and global optimality within the unconstrained input class. The matrix is the value-function coefficient, not merely a stationarity multiplier.

The feedback is generally time dependent, even for a constant plant. Its terminal behavior reflects the endpoint penalty. Extending the last gain forever is not part of the finite-horizon theorem, nor does a design defined only to time $T$ carry an asymptotic-stability conclusion by itself.

## A scalar finite-horizon solution makes the boundary visible

**Worked example: an integrator without terminal penalty.** For unit input coefficient, positive scalar weights $q,r$ and terminal weight zero, the Riccati solution is

$$P(t)=\\sqrt{qr}\\tanh\\left(\\sqrt{q/r}(T-t)\\right).$$

Differentiate with reversed elapsed time to verify the equation and zero terminal value. The optimal gain is this coefficient divided by the input weight. It tends to zero at the terminal time because the cost assigns no penalty after the horizon and no endpoint penalty.

With $\\alpha=\\sqrt{q/r}$, the resulting state is $x(t)=x_0\\cosh(\\alpha(T-t))/\\cosh(\\alpha T)$. It generally ends at a nonzero state. The optimization has not imposed an exact terminal transfer to zero. Its minimum cost is half the initial squared state times the initial Riccati coefficient. As the horizon grows, that initial coefficient approaches the positive infinite-horizon scalar solution.

A hard terminal equality gives a different admissible set, as in the minimum-effort transfer chapter. It cannot be represented by substituting an infinite numerical matrix into the finite-terminal theorem. A limiting argument would have to establish its own convergence and domain statements.

## Constructing the infinite-horizon matrix limit

Now take constant matrices and weights. Assume the pair is stabilizable and the pair formed by the square root of the state weight and the generator is detectable. Let $P_T$ be the finite-horizon initial value with zero terminal penalty.

The matrices increase in the positive-semidefinite order as the horizon increases. For any fixed initial state, the longer-horizon cost of any input is at least the shorter-horizon optimum on its prefix, since the remaining running cost is nonnegative. Taking the longer optimum proves the corresponding quadratic-form inequality.

Stabilizability gives one fixed stable state-feedback law. Its infinite quadratic cost is a finite quadratic form, obtained by integrating the stable closed-loop transition against the state weight plus the feedback input cost. Every finite optimum is bounded above by that comparison cost. Thus the increasing matrices are bounded and have a finite symmetric positive-semidefinite limit. Entrywise convergence follows from convergence of quadratic forms, using polarisation for off-diagonal entries.

In reversed horizon time, the Riccati equation is an autonomous matrix ODE starting at zero. For any fixed positive time increment, its change is the integral of the Riccati right-hand side over that increment. As the horizon tends to infinity, the matrices converge, so the integrand tends uniformly over that fixed interval to the right-hand side at the limit. The change itself tends to zero. Therefore the limit satisfies the algebraic Riccati equation.

This proves existence of a nonnegative solution by finite-horizon limits rather than assuming an algebraic root has the desired dynamical meaning.

## Detectability makes the limiting feedback stabilizing

Write the algebraic solution as $P$ and the closed generator as $A-GP$. Its energy identity is

$$ (A-GP)^TP+P(A-GP)=-Q-PGP.$$

Because $P$ may be semidefinite, this identity is not by itself a strict Lyapunov theorem. Instead suppose a complex closed-loop eigenvector had nonnegative real part. Pairing the identity with that vector gives a nonnegative left side and a nonpositive right side. The state-weight output and the vector $B^TPv$ must both vanish. For positive real part, the $P$-quadratic form vanishes too; for zero real part the already obtained input-vector equality is sufficient.

In either case the same vector is an eigenvector of the original generator, since $GPv=0$, and is invisible to the state-weight output. Detectability excludes such a mode. Hence every closed eigenvalue has strictly negative real part. This proves stabilization using the exact additional hypothesis rather than treating semidefinite energy as automatically strict.

If the state-weight pair is fully observable, the value matrix is positive definite: zero value would force zero input and identically zero weighted state output, which observability permits only for zero initial state. Detectability alone allows a nontrivial value kernel on already stable unpenalised modes.

## Infinite-horizon optimality needs the terminal term to vanish

For any input of finite infinite-horizon cost, positive input weight makes the input square integrable, while the weighted state output is also square integrable. Detectability supplies a stable output-injection matrix for that state-weight output. Rewriting the state equation using that stable generator expresses the state as a decaying homogeneous term plus a convolution driven by those two square-integrable signals.

Such a stable convolution tends to zero. Split its integral into an early finite interval, whose contribution decays exponentially, and a late tail, bounded by the square-integrable kernel norm times the signal's tail energy. The latter can be made arbitrarily small. Therefore the state, and its bounded $P$-quadratic form, tend to zero for every finite-cost competitor.

Now integrate the constant-Riccati square-completion identity to a finite endpoint and let it grow. The terminal quadratic term vanishes, giving the same value lower bound and nonnegative square integral on the infinite horizon. The stabilizing feedback attains that value with exponentially decaying state and finite cost. Strict input weight makes the optimal input unique almost everywhere.

This also proves uniqueness of the stabilizing nonnegative algebraic solution. Any other such solution would give the same optimum value for every initial state by the same identity, so their quadratic forms and matrices coincide. Selecting an algebraic root without the stabilization and admissibility argument would omit the decisive part of the theorem.

## A missing detectability hypothesis changes the answer

**Worked counterexample: an unpenalised unstable state.** Take the scalar plant $x'=x+u$, zero state weight and unit input weight. The infinite-horizon cost is merely half the integral of squared input. Choosing zero input gives cost zero even while the state grows. It is optimal in that unconstrained finite-cost formulation.

The algebraic Riccati equation has both zero and two as nonnegative roots. The zero root gives the true zero-cost nonstabilizing law; the root two gives stable feedback but spends positive effort. The state-weight output is identically zero and cannot detect the unstable mode, so the usual detectability hypothesis fails. One could pose a different problem restricting admissible controls to stabilizing ones, but that is an additional requirement, not a consequence of the original cost.

This example explains why a positive-looking Riccati root and a stable closed matrix must be connected to the declared optimization problem. The algebraic equation alone is not the complete theorem.

## A position-only double-integrator cost gives an exact design

**Worked example: coupled matrix entries.** For the double integrator, unit input weight and state weight charging only position squared, write a symmetric unknown matrix with three entries. The algebraic equations force the off-diagonal entry to have magnitude one. Choosing the stabilizing positive branch gives

$$P=\\begin{pmatrix}\\sqrt2&1\\\\1&\\sqrt2\\end{pmatrix},\\qquad K=\\begin{pmatrix}1&\\sqrt2\\end{pmatrix}.$$

Substitution verifies the equation. The matrix is positive definite, with determinant one. The closed polynomial is $\\lambda^2+\\sqrt2\\lambda+1$, whose roots are a stable conjugate pair. The state weight was semidefinite, but the position history detects velocity, satisfying the theorem's observation condition.

The resulting gains are not arbitrary pole-placement choices. They follow from the ratio and structure of the declared position and acceleration-effort weights. Adding a velocity penalty, changing input units or imposing a terminal condition changes the optimization problem and generally changes the gain.

## Scaling and constraints belong to the cost contract

Multiplying every state, input and terminal weight by the same positive scalar multiplies the Riccati matrix and value by that scalar while leaving the feedback gain unchanged. Scaling only the state weight changes the state/input trade-off. In the scalar integrator, the asymptotic rate varies as the square root of the state-to-input weight ratio, not as either weight alone.

Under state and input coordinate changes, transform the quadratic weights by inverse congruences so the same physical cost is represented. Keeping numerical identity weights after a change of units defines a different cost. The word optimal is always conditional on that metric choice.

Amplitude limits can make the unconstrained feedback infeasible. The actuator ellipsoid method gives a region where it agrees with the applied law. Nonlinear plants can inherit local stability from the stabilizing linear feedback under a controlled remainder, using a strict closed-loop Lyapunov equation even when the LQR value matrix itself is semidefinite. None of these local conclusions turns the quadratic design into a global constrained or robust optimum.

Receding-horizon control uses a succession of finite-horizon problems and an explicit update policy. Its stability needs terminal, feasibility or other conditions developed in the sampled/MPC chapter. A finite Riccati solution by itself does not prove those properties for every repeated implementation.

## Exercises with staged hints and full solutions

<a id="linear-quadratic-regulation-ex-1"></a>
### Exercise 1: verify the scalar finite solution

For unit state and input weights and zero terminal weight, verify $P(t)=\\tanh(T-t)$.

<details><summary>Hint 1</summary>

Differentiate the hyperbolic tangent with its reversed time argument.

</details>
<details><summary>Hint 2</summary>

Use one minus squared hyperbolic tangent for its derivative factor.

</details>
<details><summary>Full solution</summary>

Its derivative is minus one plus its square, so $-P'=1-P^2$, the scalar Riccati equation. At the terminal time it is zero. It is nonnegative throughout the earlier interval. The gain vanishes at the endpoint because the terminal cost is zero, not because the plant has reached an imposed terminal state.

</details>

<a id="linear-quadratic-regulation-ex-2"></a>
### Exercise 2: the square-completion lower bound

Why does the displayed identity prove global input optimality rather than only stationarity?

<details><summary>Hint 1</summary>

The difference from the proposed value is an integral of a positive quadratic form.

</details>
<details><summary>Hint 2</summary>

The feedback realises equality and the input weight is strictly positive.

</details>
<details><summary>Full solution</summary>

Every admissible input has cost equal to the proposed value plus a nonnegative squared residual. The feedback makes that residual zero and exists on the full finite interval, so it attains the lower bound. Equality forces the same feedback relation almost everywhere; uniqueness of the resulting state equation gives the unique optimal input. No local second-variation argument is needed.

</details>

<a id="linear-quadratic-regulation-ex-3"></a>
### Exercise 3: why the Hamiltonian block stays invertible

Explain the contradiction if $X(t_0)v=0$ in the finite-horizon construction with nonzero $v$.

<details><summary>Hint 1</summary>

Integrate the derivative of state paired with costate.

</details>
<details><summary>Hint 2</summary>

The resulting nonnegative terminal term equals minus a nonnegative integral.

</details>
<details><summary>Full solution</summary>

Both terms must vanish, forcing $B^Tp=0$. Then the state satisfies its homogeneous equation from zero at $t_0$ and stays zero. At the terminal time the defining condition $X(T)=I$ makes that state equal to $v$, contradicting nonzero $v$. Thus the Riccati quotient is defined over the entire finite interval.

</details>

<a id="linear-quadratic-regulation-ex-4"></a>
### Exercise 4: uniform cost scaling

If all three weights are multiplied by a positive constant, how do value matrix and feedback change?

<details><summary>Hint 1</summary>

Try the same constant times the old Riccati matrix.

</details>
<details><summary>Hint 2</summary>

The inverse input weight introduces the reciprocal constant.

</details>
<details><summary>Full solution</summary>

The matrix and optimal value scale by that constant. The gain $R^{-1}B^TP$ is unchanged because the inverse-weight and value factors cancel. Scaling only one weight does not have that cancellation and generally changes the design. Thus a common currency conversion differs from changing relative objectives.

</details>

<a id="linear-quadratic-regulation-ex-5"></a>
### Exercise 5: scalar infinite-horizon gain

For a scalar integrator with state weight four and input weight one, find its stabilizing value coefficient and gain.

<details><summary>Hint 1</summary>

The algebraic equation equates squared value coefficient to the state weight.

</details>
<details><summary>Hint 2</summary>

Choose the root producing a negative closed coefficient.

</details>
<details><summary>Full solution</summary>

The stabilizing coefficient is two and the gain is two, giving $x'=-2x$. The value is the initial squared state. The negative algebraic root would give an unstable feedback and a negative quadratic value, so it is not the nonnegative optimal solution of this problem.

</details>

<a id="linear-quadratic-regulation-ex-6"></a>
### Exercise 6: the unpenalised unstable mode

In the scalar counterexample with zero state weight, compare zero input with the stabilizing algebraic root.

<details><summary>Hint 1</summary>

The written cost charges no state growth at all.

</details>
<details><summary>Hint 2</summary>

The two nonnegative roots have different admissibility meanings if stabilization is added as a separate requirement.

</details>
<details><summary>Full solution</summary>

Zero input costs zero and is optimal among the original finite-cost controls despite unstable state growth. The positive root gives a stabilizing controller with positive effort and is not optimal for that unrestricted cost. Detectability fails. Requiring a stabilizing controller would define a different admissible class and must be stated explicitly.

</details>

<a id="linear-quadratic-regulation-ex-7"></a>
### Exercise 7: verify the double-integrator matrix

Check the algebraic Riccati equation for the displayed matrix and position-only state weight.

<details><summary>Hint 1</summary>

The input matrix selects the last column of the value matrix.

</details>
<details><summary>Hint 2</summary>

Compare the two diagonal and one off-diagonal scalar equations.

</details>
<details><summary>Full solution</summary>

The off-diagonal value entry is one and the lower diagonal entry is square root of two. Their input outer product has entries one, square root of two and two. The generator congruence contributes zero, square root of two and two, while the state weight adds one to the first diagonal. The terms cancel exactly. The gain is $(1,\\sqrt2)$ and the resulting second-order polynomial is Hurwitz.

</details>

<a id="linear-quadratic-regulation-ex-8"></a>
### Exercise 8: monotone horizons

Why do zero-terminal-cost optimal value matrices increase with horizon?

<details><summary>Hint 1</summary>

Restrict any longer-horizon admissible input to its shorter prefix.

</details>
<details><summary>Hint 2</summary>

The discarded tail contributes a nonnegative running cost.

</details>
<details><summary>Full solution</summary>

The prefix cost is at least the shorter-horizon optimum, and the full cost adds a nonnegative tail. Minimising the longer cost preserves the inequality for every initial state. This gives positive-semidefinite monotonicity of the value matrices. A finite upper bound additionally needs a comparison control, supplied in the theorem by stabilizability.

</details>

<a id="linear-quadratic-regulation-ex-9"></a>
### Exercise 9: a zero terminal state is a different demand

Does the scalar finite-horizon optimal state with zero terminal penalty necessarily vanish at the terminal time?

<details><summary>Hint 1</summary>

Evaluate the exact hyperbolic-cosine state formula there.

</details>
<details><summary>Hint 2</summary>

The cost and a hard endpoint constraint define different problems.

</details>
<details><summary>Full solution</summary>

Its terminal value is $x_0/\\cosh(\\alpha T)$, nonzero for nonzero initial state and finite horizon. The optimiser trades state cost against input effort; it was not required to reach zero exactly. A terminal equality or an appropriate limiting problem needs a separate feasibility and optimization argument.

</details>

<a id="linear-quadratic-regulation-ex-10"></a>
### Exercise 10: when the infinite terminal term vanishes

Why does finite cost plus detectability justify dropping the terminal quadratic term in the infinite-horizon proof?

<details><summary>Hint 1</summary>

Finite cost controls the input and the state-weight output in square-integrable norm.

</details>
<details><summary>Hint 2</summary>

Represent the state using a stable output-injection generator driven by those two signals.

</details>
<details><summary>Full solution</summary>

Detectability supplies a stable injection. Variation of constants then expresses state as a decaying term plus a stable convolution with square-integrable forcing. Splitting early and late parts proves that state tends to zero. A bounded value matrix therefore gives a vanishing terminal quadratic. Without that reasoning, square completion on finite intervals would leave an unresolved boundary term and would not prove the claimed infinite-horizon value.

</details>

## Chapter synthesis

The finite-horizon Hamiltonian construction gives a globally defined nonnegative Riccati solution, and square completion proves its exact optimum. Infinite-horizon stabilization additionally uses stabilizability, detectability and terminal decay of every finite-cost competitor. Weight conventions, endpoint requirements and constraints determine which regulator problem has actually been solved.
`;export{e as default};