var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: optimal-control-variations
title: Optimal Control and Dynamic Constraints
level: advanced-undergraduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Optimal Control and Dynamic Constraints

Feedback asks how to react; optimal control asks which admissible reaction minimizes a declared functional. The answer depends on dynamics, horizon, information pattern, endpoint conditions, constraints, and existence. This chapter derives first-order conditions, solves the linear-quadratic case, and keeps necessary conditions separate from global optimality.

## 1. The problem ledger

On $[t_0,T]$, choose measurable $u(t)$ in an admissible set U to minimize

$$J(u)=\\Phi(x(T))+\\int_0^T L(t,x(t),u(t))\\,dt$$

subject to $x'=f(t,x,u)$, $x(t_0)=x_0$, state constraints, and possibly endpoint constraints. Before calculating, name units, regularity, control bounds, whether T is fixed, and the topology in which a minimizer is sought.

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

## 4. Linear-quadratic regulator

For

$$x'=Ax+Bu,\\qquad J=\\tfrac12x(T)^TSx(T)+\\tfrac12\\int_0^T(x^TQx+u^TRu)\\,dt,$$

assume $Q,S$ positive semidefinite and $R$ positive definite. Stationarity gives $u=-R^{-1}B^Tp$. With ansatz $p=P(t)x$, P solves backward

$$-P'=A^TP+PA-PBR^{-1}B^TP+Q,\\qquad P(T)=S.$$

The feedback is $u=-R^{-1}B^TP(t)x$. Convexity and $R>0$ make the extremal the unique global optimum in control, up to equality almost everywhere. Infinite-horizon algebraic Riccati conclusions additionally require stabilizability and detectability.

## 5. Dynamic programming

The value function $V(t,x)$ is the infimum of remaining cost. Formal short-time optimization yields the Hamilton–Jacobi–Bellman equation

$$-V_t=\\min_{u\\in U}\\{L(t,x,u)+\\nabla V\\cdot f(t,x,u)\\},\\qquad V(T,x)=\\Phi(x).$$

A smooth solution plus a minimizing selector gives a verification theorem when the resulting trajectory is admissible. Value functions often are not differentiable; viscosity solutions provide the correct weak framework, beyond this chapter’s proof scope. HJB suffers dimension growth but gives state feedback; Pontryagin conditions give trajectorywise boundary-value equations.

## 6. Bang-bang and singular arcs

If H is affine in a scalar bounded control, $H=h_0+\\sigma(t)u$, minimizing over $[u_{\\min},u_{\\max}]$ selects an endpoint according to the sign of the switching function sigma. Where sigma vanishes only at isolated transversal crossings, the control switches. If sigma vanishes on an interval, a singular arc requires differentiated conditions and higher-order tests. Numerical chattering may be genuine, regularization-induced, or a discretization artifact.

## 7. Direct transcription and verification

Direct methods parameterize states and controls on a mesh and enforce dynamics by shooting or collocation. A credible computation reports mesh, polynomial degree, nonlinear tolerances, constraint residuals, cost, adjoint or KKT residual, and refinement. Compare independent forward integration under the reconstructed control. Mesh convergence supports a discretized extremal, not global optimality unless convexity or a certified bound supplies it.

For autonomous problems with no active time dependence, H is constant along a smooth normal extremal. This is a useful residual, subject to convention and switching qualifications.

## Exercises with complete worked solutions

### 1. Scalar first variation
Minimize $\\int_0^1 (u^2/2)dt$ subject to $x'=u$, $x(0)=0$, $x(1)=a$.

**Solution.** The endpoint requires $\\int u=a$. Cauchy–Schwarz gives $\\int u^2 \\geq a^2$, equality only for constant $u=a$. Thus minimum is $a^2/2$ and $x=at$.

### 2. Adjoint sign
For $H=L+p^Tf$, derive the terminal condition with terminal cost Phi and free terminal state.

**Solution.** Integration by parts leaves $(\\Phi_x-p(T))^{\\mathsf T} \\delta x(T)$. Arbitrary terminal variation forces $p(T)=\\Phi_x$.

### 3. Stationarity
For $x'=u$, $L=(x^2+u^2)/2$, find $H_u$.

**Solution.** $H=(x^2+u^2)/2+pu$, so $H_u=u+p$. An interior extremal has $u=-p$.

### 4. Costate equation
Continue Exercise 3.

**Solution.** $-p'=H_x=x$, hence $p'=-x$. Together with $x'=-p$, this gives $x''=x$, with endpoint conditions determined by the problem.

### 5. Terminal penalty
If Phi is $c x(T)^2/2$, what is p(T)?

**Solution.** Differentiate Phi: $p(T)=c x(T)$.

### 6. Bounded control
If $H=\\sigma u$ and $|u|\\leq 1$, minimize H.

**Solution.** For positive sigma choose $u=-1$; for negative sigma choose $u=1$; for zero sigma every u is pointwise minimizing and further analysis is needed.

### 7. Minimum-time integrator
For $x'=u$, $|u|\\leq 1$, move from 0 to a. Find minimum time.

**Solution.** $|x(T)|\\leq \\int|u|dt\\leq T$, so $T\\geq |a|$. Constant $u=\\operatorname{sign}(a)$ reaches a at $T=|a|$, attaining the bound.

### 8. Riccati scalar
For $x'=u$, running cost $(q x^2+r u^2)/2$, terminal P(T)=s, write Riccati.

**Solution.** Here A=0, B=1. The equation is $-P'=q-P^2/r$, or $P'=P^2/r-q$, integrated backward from s.

### 9. Why R positive
Why require positive-definite R in standard LQR?

**Solution.** It makes the control cost strictly convex and invertible stationarity equation $Ru+B^Tp=0$. If R is singular or indefinite, minimizing controls may be nonunique or the cost unbounded below.

### 10. Algebraic Riccati assumptions
Does any Q positive semidefinite guarantee a stabilizing algebraic solution?

**Solution.** No. Standard results require stabilizability of $(A,B)$ and detectability of $(Q^{1/2},A)$, with precise continuous/discrete hypotheses. Uncontrolled unstable modes can defeat stabilization.

### 11. HJB for an integrator
Write HJB for $x'=u$, $L=u^2/2$, $|u|\\leq M$.

**Solution.** $-V_t=\\min_{|u|\\leq M}(u^2/2+V_xu)$. The minimizer is the projection of $-V_x$ onto $[-M,M]$.

### 12. PMP versus HJB
State one difference.

**Solution.** PMP supplies necessary trajectorywise state-costate conditions and scales well in state dimension. HJB characterizes the value over state space and can verify global optimality, but solving its PDE suffers the curse of dimensionality.

### 13. Clipping error
Why not clip an unconstrained optimal control pointwise?

**Solution.** Clipping changes the state path, hence the costate and future unconstrained command. The clipped path generally fails the coupled state-adjoint and switching conditions.

### 14. Free terminal state
With no terminal cost and free terminal state, what transversality condition holds?

**Solution.** $p(T)=0$, assuming there is no terminal constraint. Fixed terminal components instead have no arbitrary variation and need not impose zero costate there.

### 15. Autonomous Hamiltonian
When is H constant?

**Solution.** Along a smooth normal extremal of an autonomous problem, away from nonsmooth switches and with the standard conditions, $dH/dt=H_t=0$. Explicit time dependence destroys this conclusion.

### 16. Discrete optimum boundary
A transcription solver reports KKT residual $10^{-10}$. What follows?

**Solution.** It nearly satisfies first-order conditions for the finite nonlinear program under its scaling. This alone neither bounds continuous dynamics error nor proves a global optimum.

### 17. Mesh refinement
Costs are 1.20, 1.11, 1.10 on three meshes. Is 1.10 exact?

**Solution.** No. The data support stabilization but lack an error bound and might converge to a local discrete branch. Report constraint residuals, observed order, independent integration, and lower bounds if available.

### 18. Abnormal extremal
Why retain the cost multiplier in the general principle?

**Solution.** Some constrained problems admit nontrivial necessary multipliers with zero cost multiplier. Normalizing it to one would erase these abnormal candidates unless constraint qualification proves normality.

### 19. Project: finite-horizon scalar LQR
For $x'=u$, $J=1/2 x(T)^2+1/2 \\int u^2 dt$, solve P and feedback.

**Solution.** Riccati is $P'=P^2$ backward with $P(T)=1$. Solving gives $1/P(t)=1+T-t$, hence $P(t)=1/(1+T-t)$. Therefore $u=-P(t)x$. Closed-loop $x'=-x/(1+T-t)$ integrates to $x(t)=x_0(1+T-t)/(1+T)$. Then $u=-x_0/(1+T)$ is constant. Substitution verifies the endpoint and cost. A numerical audit integrates P backward and x forward at halved steps and compares against these formulas.

### 20. Claim repair
Repair: “The Pontryagin equations were solved, so the control is optimal.”

**Solution.** Say the trajectory is a numerical extremal satisfying specified necessary-condition residuals. Optimality additionally needs sufficiency such as convexity/verification, comparison with competing branches, or a certified global bound.

## Chapter synthesis

Adjoints compress first variations, Pontryagin conditions handle trajectory constraints, Riccati equations solve convex quadratic regulation, and HJB organizes global feedback. Existence, necessity, sufficiency, continuous feasibility, and numerical convergence remain separate ledgers.

## Dependency ledger

- Well-posed state dynamics are required before optimizing their trajectories.
- Adjoint derivation uses differentiability and admissible variations.
- LQR sufficiency uses convexity and positive control cost.
- Infinite-horizon Riccati theory needs stabilizability and detectability.
- Bang-bang rules require affine control dependence and named bounds.
- Transcription evidence needs residuals, independent integration, and mesh refinement.
`;export{e as default};