var e=`---
parent_id: book-control-theory
chapter_id: optimal-control-variations
title: Calculus of Variations and Pontryagin Conditions
level: graduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Calculus of Variations and Pontryagin Conditions

Optimality depends on the admissible input class, state dynamics, horizon and endpoint restrictions. This chapter proves Euler–Lagrange variation, a normal fixed-horizon Pontryagin minimum principle for free terminal state, and a convex sufficiency theorem. It keeps those hypotheses distinct from the more general endpoint-constrained and abnormal principle.

The stable \`optimal-control-variations\` identity and all twenty original exercise statements/solutions remain. Its complete earlier LQR/HJB/variation body is a [registered companion](back-matter/retained-optimal-control-reading.md); the [LQR primary](linear-quadratic-regulation.md) now provides full Riccati proofs. The original cross-topic exercises remain as bridges rather than disappearing during the split.

## 1. The problem ledger

On $[0,T]$, choose measurable $u(t)$ in an admissible set U to minimize

$$J(u)=\\Phi(x(T))+\\int_0^T L(t,x(t),u(t))\\,dt$$

subject to $x'=f(t,x,u)$, $x(0)=x_0$, state constraints, and possibly endpoint constraints. Before calculating, name units, regularity, control bounds, whether T is fixed, and the topology in which a minimizer is sought.

An infimum need not be attained. Smooth stationarity need not survive bang-bang controls. A local extremal need not be globally optimal. Discretizing first creates a finite problem whose optimum need not equal the continuous optimum.


## 2. First variation and adjoint

Assume f, L, and Phi are continuously differentiable and an unconstrained control perturbation is admissible. Define Hamiltonian

$$H(t,x,u,p)=L(t,x,u)+p^Tf(t,x,u).$$

The state variation satisfies $\\delta x'=f_x \\delta x+f_u \\delta u$, $\\delta x(t_0)=0$. Integration by parts with

$$-p'=L_x+f_x^Tp,\\qquad p(T)=\\Phi_x(x(T))$$

gives

$$\\delta J=\\int_0^T H_u^T\\delta u\\,dt.$$

Thus an interior smooth optimum satisfies $H_u=0$ almost everywhere. With control constraints, needle-variation hypotheses from Pontryagin's principle yield pointwise minimization of H over U under the sign convention above; ordinary smooth variations alone may give only a variational inequality. These are necessary conditions under stated regularity, not automatically sufficient.


## 3. Pontryagin maximum principle boundary

The general principle introduces a nontrivial multiplier pair and an adjoint, accommodates endpoint manifolds and nonsmooth constrained controls, and requires the optimal control to minimize (or maximize under the alternative Hamiltonian sign) the Hamiltonian almost everywhere. Abnormal extremals have a zero cost multiplier and cannot be discarded without a normality argument.

State constraints can introduce measure multipliers and costate jumps. Simply clipping an unconstrained solution is generally wrong because clipping changes the state and future switching function.


## 6. Bang-bang and singular arcs

If H is affine in a scalar bounded control, $H=h_0+\\sigma(t)u$, minimizing over $[u_{\\min},u_{\\max}]$ selects an endpoint according to the sign of the switching function sigma. Where sigma vanishes only at isolated transversal crossings, the control switches. If sigma vanishes on an interval, a singular arc requires differentiated conditions and higher-order tests. Numerical chattering may be genuine, regularization-induced, or a discretization artifact.


## 7. Direct transcription and verification

Direct methods parameterize states and controls on a mesh and enforce dynamics by shooting or collocation. A credible computation reports mesh, polynomial degree, nonlinear tolerances, constraint residuals, cost, adjoint or KKT residual, and refinement. Compare independent forward integration under the reconstructed control. Mesh convergence supports a discretized extremal, not global optimality unless convexity or a certified bound supplies it.

For autonomous problems with no active time dependence, H is constant along a smooth normal extremal. This is a useful residual, subject to convention and switching qualifications.


## Euler–Lagrange necessity follows from arbitrary fixed-endpoint variations

For a twice continuously differentiable path and a sufficiently smooth integrand, perturb the path by a smooth variation vanishing at both endpoints. Differentiating the action under the integral gives the integral of the state derivative paired with the variation plus the velocity derivative paired with its derivative. Integration by parts removes the variation derivative. Stationarity for every compactly supported variation therefore gives

$$L_x-\\frac{d}{dt}L_v=0.$$

The fundamental lemma used here has a direct proof for a continuous residual. If one component were nonzero at an interior point, continuity would keep one sign on a smaller interval. A smooth nonnegative bump in that component would then have a nonzero residual integral, contradicting stationarity. Thus the residual vanishes pointwise under the stated regularity. Weak formulations use the corresponding distributional conclusion instead.

If the terminal state is free and a differentiable terminal cost is present, the boundary variation is arbitrary there. Its coefficient gives $L_v(T)+\\Phi_x(x(T))=0$. Fixed terminal components have no such arbitrary variation and do not impose that condition. This is why terminal constraints must be stated before an adjoint endpoint is selected.

For dynamics $x'=u$, the minimum-Hamiltonian convention gives interior condition $L_u+p=0$, so the control costate is minus the velocity derivative of the variational integrand. Its adjoint equation then recovers Euler–Lagrange with the same sign. Mechanical canonical momentum and this costate can therefore use opposite conventions without a contradiction; derive the convention from the actual functional.

## Positive velocity curvature is not a sufficient minimum theorem

At a smooth weak local minimum, the second variation must be nonnegative on every admissible fixed-endpoint variation. Its integrand contains the state Hessian, the mixed state/velocity term and the velocity Hessian. Positive velocity curvature alone does not control the other terms over a long interval.

**Worked example: a stationary path changes type with horizon.** On zero-endpoint paths use $J=\\frac12\\int_0^T(x'^2-\\omega^2x^2)dt$, with positive frequency. The zero path is stationary and the velocity Hessian is one. For variation $\\sin(\\pi t/T)$, the quadratic coefficient has the sign of $\\pi^2/T^2-\\omega^2$. Above the threshold horizon it is negative, and scaling that path makes the functional unbounded below. Below the threshold, the interval Poincaré inequality proves strict positivity on every nonzero path. At equality the sine family has zero cost. The local stationary equation and positive velocity curvature did not decide the horizon-dependent minimisation problem by themselves.

## A normal pointwise minimum principle from needle variations

Here is a precise case whose proof needs no abnormal endpoint multiplier. Fix the time horizon and initial state, allow a free terminal state with differentiable terminal cost, impose no state constraints, and let the control take values in a compact set. Assume the dynamics and running cost are continuous in time and control and continuously differentiable in state on a neighbourhood of the optimal trajectory, with uniform derivative bounds there. Assume the trajectory lies in a compact interior tube on which nearby needle controls have common existence. Let an admissible measurable control be optimal against such small needle replacements.

Along that trajectory, define the costate by the linear terminal equation $-p'=L_x+f_x^Tp$, $p(T)=\\Phi_x(x(T))$. Its coefficients are bounded measurable functions, so the linear integral theory gives an absolutely continuous solution. The claim is that the control minimises the Hamiltonian pointwise over its compact control set at almost every time.

To prove it, choose a time that is a Lebesgue point of the original composed dynamics and cost, and replace the control by one fixed alternative value over a short following interval. Boundedness of the fields and Gronwall make the resulting state change uniformly of order interval length throughout the remaining horizon. At the end of the needle, its first-order increment is the alternative velocity minus the original velocity, multiplied by that length.

After the needle the two controls agree. Uniform continuity of the state derivatives on the common compact tube shows that the rescaled state change converges to the linear variational trajectory starting from that velocity difference. This follows by subtracting the two integral equations, using the mean-value matrix in the state argument, and applying Gronwall to the remainder. The same expansion of running and terminal costs gives a direct running-cost difference over the needle plus their linear state-variation contributions later.

Pair the variational equation with the costate and integrate by parts. The future state contributions and terminal term collapse to the costate at the needle time paired with the velocity difference. The one-sided cost derivative is therefore

$$H(t,x_*(t),v,p(t))-H(t,x_*(t),u_*(t),p(t)).$$

Optimality makes this nonnegative for every fixed alternative. First apply the argument on a countable dense subset of the compact control set, choosing a common full-measure set of Lebesgue times. Continuity in the alternative control extends the inequality to every point of that set. This proves the almost-everywhere pointwise Hamiltonian minimum.

The proof uses a normal cost coefficient equal to one because the free terminal-state cost problem supplied the costate directly. It does not prove the full endpoint-manifold or state-constrained principle. Those problems can need nontrivial endpoint multipliers, abnormal cost coefficients, additional transversality or measure terms. Ordinary smooth control variations only give derivative tests; the needle argument explains why a pointwise minimum over a nonconvex control set is a stronger necessary conclusion.

## A convex Hamiltonian gives a separate sufficiency theorem

Suppose a candidate satisfies its state equation, adjoint endpoint equation and pointwise control minimum. Suppose the terminal cost is convex and, at each candidate costate, the Hamiltonian is jointly convex in state and control on a common convex domain. Assume the control set is convex and the differentiability needed for supporting inequalities holds. Affine dynamics and jointly convex running cost are a common sufficient setup for this hypothesis.

For any competing feasible trajectory, the terminal cost difference is bounded below by the terminal costate paired with its terminal state difference. The Hamiltonian supporting inequality bounds its difference below by the state derivative paired with state difference plus the control derivative paired with control difference. The latter is nonnegative by the candidate's minimum on the convex control set. The former is minus the costate derivative paired with state difference.

Subtracting the costate paired with the difference of the actual state velocities converts Hamiltonian difference back to running-cost difference. Integration by parts cancels the terminal lower bound and the common initial state. The total competing cost is at least the candidate's cost. This proves global optimality in the stated feasible class. Strict input convexity can give uniqueness, with the usual almost-everywhere convention.

This proof is not a consequence of necessary equations alone. A nonlinear or nonconvex problem may have several extremals, including maxima or saddles. It is the supporting inequality over the entire feasible comparison domain that supplies the global bound.

## Exact bounded-control and switching examples

**Worked example: a bounded integrator with terminal penalty.** Let $x'=u$, initial state $x_0$, cost one half the squared terminal error to a target plus one half $r\\int u^2dt$, and magnitude bound $M$. The costate is constant and equals terminal error. Hamiltonian minimisation gives a constant input obtained by clipping minus that costate divided by the positive input weight. Solving the endpoint relation yields

$$u_* =\\operatorname{clip}\\left(\\frac{a-x_0}{r+T},-M,M\\right).$$

The clipped constant satisfies the endpoint/costate relation in both saturated cases as well as in the interior. Convex dynamics, cost and control interval make the sufficiency theorem apply. This example permits clipping because the full coupled relation was solved and verified; clipping a general unconstrained time history need not satisfy its altered adjoint and endpoint equations.

**Worked example: rest-to-rest minimum time.** For a double integrator with acceleration magnitude bound $M$ and positive displacement $d$, the endpoint velocity condition gives zero input integral. Rewriting displacement with the centered time kernel bounds it by $MT^2/4$. Therefore every transfer needs $T\\ge2\\sqrt{d/M}$. Positive maximum acceleration for half that time and negative maximum acceleration for the other half attains the bound, proving minimum time directly.

Its switching function in the standard free-time extension of the principle is affine, because one costate is constant and the other has its negative as derivative. That explains at most one isolated switch in this scalar-input example. The elementary bound already proves optimality; no unproved claim that all bang-bang candidates are optimal is needed. Singular arcs, where the switching function vanishes on an interval, require further conditions and cannot be resolved by selecting either endpoint arbitrarily.

## Endpoint and numerical statements retain their actual strength

With a fixed endpoint, an arbitrary terminal variation is unavailable, so the free-endpoint costate formula cannot simply be copied. Free final time adds a time transversality condition. Path constraints can change both admissible needles and multiplier structure. Each extension must state which variations remain feasible before deriving necessary equations.

A finite transcription produces stationarity conditions for its own finite-dimensional approximation. The continuous state/admissibility error, the branch selected and a global cost bound remain separate questions. The exact arguments above supply explicit benchmark problems and sufficiency proofs, but no computation or solver completeness is claimed by writing them down.

## Exercises with complete worked solutions

<a id="optimal-control-variations-ex-1"></a>

### 1. Scalar first variation
Minimize $\\int_0^1 (u^2/2)dt$ subject to $x'=u$, $x(0)=0$, $x(1)=a$.

<details><summary>Hint 1</summary>

The fixed endpoint prescribes the integral of the input.

</details>

<details><summary>Hint 2</summary>

Use Cauchy–Schwarz and identify when equality holds.

</details>

<details><summary>Full solution</summary>

**Solution.** The endpoint requires $\\int u=a$. Cauchy–Schwarz gives $\\int u^2 \\geq a^2$, equality only for constant $u=a$. Thus minimum is $a^2/2$ and $x=at$.

</details>

<a id="optimal-control-variations-ex-2"></a>

### 2. Adjoint sign
For $H=L+p^Tf$, derive the terminal condition with terminal cost Phi and free terminal state.

<details><summary>Hint 1</summary>

Keep the terminal boundary term when integrating the costate pairing by parts.

</details>

<details><summary>Hint 2</summary>

A free terminal state permits an arbitrary terminal variation.

</details>

<details><summary>Full solution</summary>

**Solution.** Integration by parts leaves $(\\Phi_x-p(T))^{\\mathsf T} \\delta x(T)$. Arbitrary terminal variation forces $p(T)=\\Phi_x$.

</details>

<a id="optimal-control-variations-ex-3"></a>

### 3. Stationarity
For $x'=u$, $L=(x^2+u^2)/2$, find $H_u$.

<details><summary>Hint 1</summary>

Differentiate the stated minimum-Hamiltonian convention with respect to input.

</details>

<details><summary>Hint 2</summary>

The quadratic input cost contributes the input itself.

</details>

<details><summary>Full solution</summary>

**Solution.** $H=(x^2+u^2)/2+pu$, so $H_u=u+p$. An interior extremal has $u=-p$.

</details>

<a id="optimal-control-variations-ex-4"></a>

### 4. Costate equation
Continue Exercise 3.

<details><summary>Hint 1</summary>

Differentiate the same Hamiltonian with respect to state.

</details>

<details><summary>Hint 2</summary>

Combine the adjoint and state equations only after retaining their signs.

</details>

<details><summary>Full solution</summary>

**Solution.** $-p'=H_x=x$, hence $p'=-x$. Together with $x'=-p$, this gives $x''=x$, with endpoint conditions determined by the problem.

</details>

<a id="optimal-control-variations-ex-5"></a>

### 5. Terminal penalty
If Phi is $c x(T)^2/2$, what is p(T)?

<details><summary>Hint 1</summary>

Differentiate the terminal penalty with respect to the terminal state.

</details>

<details><summary>Hint 2</summary>

The free-endpoint adjoint condition uses that gradient without a sign reversal.

</details>

<details><summary>Full solution</summary>

**Solution.** Differentiate Phi: $p(T)=c x(T)$.

</details>

<a id="optimal-control-variations-ex-6"></a>

### 6. Bounded control
If $H=\\sigma u$ and $|u|\\leq 1$, minimize H.

<details><summary>Hint 1</summary>

An affine scalar function on a compact interval is minimised at an endpoint unless its slope is zero.

</details>

<details><summary>Hint 2</summary>

The zero switching-function case does not decide a singular arc.

</details>

<details><summary>Full solution</summary>

**Solution.** For positive sigma choose $u=-1$; for negative sigma choose $u=1$; for zero sigma every u is pointwise minimizing and further analysis is needed.

</details>

<a id="optimal-control-variations-ex-7"></a>

### 7. Minimum-time integrator
For $x'=u$, $|u|\\leq 1$, move from 0 to a. Find minimum time.

<details><summary>Hint 1</summary>

Bound displacement by the integral of input magnitude.

</details>

<details><summary>Hint 2</summary>

A constant maximum-magnitude input in the required direction attains the lower time bound.

</details>

<details><summary>Full solution</summary>

**Solution.** $|x(T)|\\leq \\int|u|dt\\leq T$, so $T\\geq |a|$. Constant $u=\\operatorname{sign}(a)$ reaches a at $T=|a|$, attaining the bound.

</details>

<a id="optimal-control-variations-ex-8"></a>

### 8. Riccati scalar
For $x'=u$, running cost $(q x^2+r u^2)/2$, terminal P(T)=s, write Riccati.

<details><summary>Hint 1</summary>

Insert the scalar plant coefficients into the proved matrix Riccati equation.

</details>

<details><summary>Hint 2</summary>

The terminal condition is imposed at the final time and the equation is integrated backward.

</details>

<details><summary>Full solution</summary>

**Solution.** Here A=0, B=1. The equation is $-P'=q-P^2/r$, or $P'=P^2/r-q$, integrated backward from s.

</details>

<a id="optimal-control-variations-ex-9"></a>

### 9. Why R positive
Why require positive-definite R in standard LQR?

<details><summary>Hint 1</summary>

The input Hessian controls strict convexity and solvability of stationarity.

</details>

<details><summary>Hint 2</summary>

A singular or indefinite weight changes the optimization theorem and can destroy uniqueness or boundedness.

</details>

<details><summary>Full solution</summary>

**Solution.** It makes the control cost strictly convex and invertible stationarity equation $Ru+B^Tp=0$. If R is singular or indefinite, minimizing controls may be nonunique or the cost unbounded below.

</details>

<a id="optimal-control-variations-ex-10"></a>

### 10. Algebraic Riccati assumptions
Does any Q positive semidefinite guarantee a stabilizing algebraic solution?

<details><summary>Hint 1</summary>

A matrix root must correspond to a stabilizing feasible design.

</details>

<details><summary>Hint 2</summary>

Unreachable unstable modes and unpenalised invisible unstable modes show why extra hypotheses are needed.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Standard results require stabilizability of $(A,B)$ and detectability of $(Q^{1/2},A)$, with precise continuous/discrete hypotheses. Uncontrolled unstable modes can defeat stabilization.

</details>

<a id="optimal-control-variations-ex-11"></a>

### 11. HJB for an integrator
Write HJB for $x'=u$, $L=u^2/2$, $|u|\\leq M$.

<details><summary>Hint 1</summary>

Use the integrator velocity in the value-gradient term.

</details>

<details><summary>Hint 2</summary>

Minimise the scalar quadratic over its allowed interval.

</details>

<details><summary>Full solution</summary>

**Solution.** $-V_t=\\min_{|u|\\leq M}(u^2/2+V_xu)$. The minimizer is the projection of $-V_x$ onto $[-M,M]$.

</details>

<a id="optimal-control-variations-ex-12"></a>

### 12. PMP versus HJB
State one difference.

<details><summary>Hint 1</summary>

Compare a state-costate trajectory with a function defined over states and times.

</details>

<details><summary>Hint 2</summary>

Necessary extremal equations and a value-verification statement have different logical strengths.

</details>

<details><summary>Full solution</summary>

**Solution.** PMP supplies necessary trajectorywise state-costate conditions and scales well in state dimension. HJB characterizes the value over state space and can verify global optimality, but solving its PDE suffers the curse of dimensionality.

</details>

<a id="optimal-control-variations-ex-13"></a>

### 13. Clipping error
Why not clip an unconstrained optimal control pointwise?

<details><summary>Hint 1</summary>

After clipping, the state no longer follows the old trajectory.

</details>

<details><summary>Hint 2</summary>

Its terminal condition and adjoint must be recomputed together, not held fixed from an infeasible solution.

</details>

<details><summary>Full solution</summary>

**Solution.** Clipping changes the state path, hence the costate and future unconstrained command. The clipped path generally fails the coupled state-adjoint and switching conditions.

</details>

<a id="optimal-control-variations-ex-14"></a>

### 14. Free terminal state
With no terminal cost and free terminal state, what transversality condition holds?

<details><summary>Hint 1</summary>

Inspect which terminal variations are permitted.

</details>

<details><summary>Hint 2</summary>

With free endpoint and no terminal penalty the boundary coefficient must vanish.

</details>

<details><summary>Full solution</summary>

**Solution.** $p(T)=0$, assuming there is no terminal constraint. Fixed terminal components instead have no arbitrary variation and need not impose zero costate there.

</details>

<a id="optimal-control-variations-ex-15"></a>

### 15. Autonomous Hamiltonian
When is H constant?

<details><summary>Hint 1</summary>

Differentiate the Hamiltonian along a smooth extremal and substitute its state and adjoint equations.

</details>

<details><summary>Hint 2</summary>

The remaining term is explicit time dependence, subject to the control stationarity and switching qualifications.

</details>

<details><summary>Full solution</summary>

**Solution.** Along a smooth normal extremal of an autonomous problem, away from nonsmooth switches and with the standard conditions, $dH/dt=H_t=0$. Explicit time dependence destroys this conclusion.

</details>

<a id="optimal-control-variations-ex-16"></a>

### 16. Discrete optimum boundary
A transcription solver reports KKT residual $10^{-10}$. What follows?

<details><summary>Hint 1</summary>

The residual belongs to the finite approximation that was solved.

</details>

<details><summary>Hint 2</summary>

Neither the continuum approximation nor a global comparison theorem is supplied by one small KKT number.

</details>

<details><summary>Full solution</summary>

**Solution.** It nearly satisfies first-order conditions for the finite nonlinear program under its scaling. This alone neither bounds continuous dynamics error nor proves a global optimum.

</details>

<a id="optimal-control-variations-ex-17"></a>

### 17. Mesh refinement
Costs are 1.20, 1.11, 1.10 on three meshes. Is 1.10 exact?

<details><summary>Hint 1</summary>

Three converging-looking costs give no rigorous remainder bound.

</details>

<details><summary>Hint 2</summary>

Other branches, state feasibility and a global lower bound remain separate questions.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The data support stabilization but lack an error bound and might converge to a local discrete branch. Report constraint residuals, observed order, independent integration, and lower bounds if available.

</details>

<a id="optimal-control-variations-ex-18"></a>

### 18. Abnormal extremal
Why retain the cost multiplier in the general principle?

<details><summary>Hint 1</summary>

The general constrained theorem need not permit normalization of the cost multiplier.

</details>

<details><summary>Hint 2</summary>

A zero cost coefficient can still belong to a nontrivial multiplier pair.

</details>

<details><summary>Full solution</summary>

**Solution.** Some constrained problems admit nontrivial necessary multipliers with zero cost multiplier. Normalizing it to one would erase these abnormal candidates unless constraint qualification proves normality.

</details>

<a id="optimal-control-variations-ex-19"></a>

### 19. Project: finite-horizon scalar LQR
For $x'=u$, $J=1/2 x(T)^2+1/2 \\int u^2 dt$, solve P and feedback.

<details><summary>Hint 1</summary>

Solve the scalar Riccati equation by differentiating its reciprocal.

</details>

<details><summary>Hint 2</summary>

Insert that coefficient into the closed state equation and check the resulting constant input.

</details>

<details><summary>Full solution</summary>

**Solution.** Riccati is $P'=P^2$ backward with $P(T)=1$. Solving gives $1/P(t)=1+T-t$, hence $P(t)=1/(1+T-t)$. Therefore $u=-P(t)x$. Closed-loop $x'=-x/(1+T-t)$ integrates to $x(t)=x_0(1+T-t)/(1+T)$. Then $u=-x_0/(1+T)$ is constant. Substitution verifies the endpoint and cost. A numerical audit integrates P backward and x forward at halved steps and compares against these formulas.

</details>

<a id="optimal-control-variations-ex-20"></a>

### 20. Claim repair
Repair: “The Pontryagin equations were solved, so the control is optimal.”

<details><summary>Hint 1</summary>

Necessary conditions identify extremals, which can have different objective types.

</details>

<details><summary>Hint 2</summary>

Add a proved sufficiency theorem or a valid global bound before claiming optimality.

</details>

<details><summary>Full solution</summary>

**Solution.** Say the trajectory is a numerical extremal satisfying specified necessary-condition residuals. Optimality additionally needs sufficiency such as convexity/verification, comparison with competing branches, or a certified global bound.

</details>

## Chapter synthesis

First variations and adjoints give necessary equations. Needle variations establish a pointwise control minimum under the stated normal free-endpoint hypotheses. Convexity supplies a separate global sufficiency theorem, while endpoint and state constraints require their own multiplier and admissibility analysis.
`;export{e as default};