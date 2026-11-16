var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: stiff-geometric-integrators
title: Stiff and Geometric Time Integrators
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Stiff and Geometric Time Integrators

No integrator is best for every differential equation. Stiff decay rewards large stability regions; Hamiltonian motion rewards symplectic structure; constrained flows require constraint control. This chapter derives the central method properties and explains why stability, accuracy, conservation, and computational cost must be audited separately.

## 1. Stability functions

On $y'=\\lambda y$, a one-step method gives $y_{n+1}=R(h \\lambda)y_n$. Explicit Euler has $R=1+z$; backward Euler has $R=1/(1-z)$; trapezoidal rule has $R=(1+z/2)/(1-z/2)$. A-stability means $|R(z)|\\leq 1$ throughout the left half-plane. L-stability adds $R(z)\\to 0$ as z tends to infinity within it.

Backward Euler is L-stable. Trapezoidal is A-stable but approaches -1 on the negative real axis, so unresolved fast modes can oscillate. Absolute stability says nothing by itself about nonlinear solve convergence or global accuracy.

## 2. Stiff order and solvers

Implicit Runge–Kutta and backward-differentiation formulas trade algebraic solves for larger stable steps. Each step requires stopping criteria, Jacobian strategy, linear residual, and failure recovery. An inexact solve changes the numerical method. The algebraic tolerance should be small relative to the targeted discretization error, verified by tightening both separately.

Multistep methods need starting values and step-history management. Variable steps alter coefficients. High classical order can reduce on stiff or boundary-forced problems; report observed output order rather than assuming the design value.

## 3. Splitting fast and slow physics

For $y'=Ay+g(y)$, exponential or implicit-explicit methods can treat A exactly/implicitly and g explicitly. Stability depends on the chosen split, noncommutation, and nonlinear stiffness. Strang splitting is second order for sufficiently smooth subflows:

$$\\Phi_h\\approx\\Phi_A(h/2)\\circ\\Phi_B(h)\\circ\\Phi_A(h/2).$$

Discontinuities, incompatible boundaries, or inaccurate subsolves can reduce order. A small substep residual does not control splitting error.

## 4. Hamiltonian geometry

Canonical Hamiltonian dynamics are $q'=H_p$, $p'=-H_q$. The exact flow preserves the symplectic two-form and H. A numerical map is symplectic when its Jacobian satisfies $D \\Phi^{\\mathsf T} J D \\Phi=J$. Symplectic methods generally preserve a nearby modified Hamiltonian over long regular intervals, giving bounded oscillatory energy error rather than exact energy conservation.

Symplectic Euler for separable $H=T(p)+V(q)$ is

$$p_{n+1}=p_n-h\\nabla V(q_n),\\qquad q_{n+1}=q_n+h\\nabla T(p_{n+1}).$$

It is first order and symplectic. The order of subupdates matters. Symplecticity does not prevent large error at an oversized step or guarantee good behavior near collisions.

## 5. Verlet and reversibility

Velocity Verlet uses half momentum, full position, half momentum updates. It is second order, symplectic, and time reversible for separable autonomous Hamiltonians. Its stability interval for a harmonic oscillator remains finite. Exact time reversibility in floating point can be spoiled by rounding and solver asymmetry.

Energy-preserving methods and symplectic methods are distinct. A method can preserve H exactly while distorting phase geometry, or be symplectic while H oscillates. Choose structure based on the output of interest.

## 6. Constraints and manifolds

Holonomic constraints $g(q)=0$ introduce multipliers. Projection after an unconstrained step may enforce position but not tangent momentum and can destroy order or symplectic structure. SHAKE/RATTLE-type schemes solve coupled constraint equations under regular Jacobian assumptions. Report position and velocity constraint residuals plus solver tolerances.

## 7. Verification matrix

At fixed physical horizons, report step refinement of states and outputs; stability on fast modes; nonlinear/linear solve residuals; work counts; invariant drift; symplectic or reversibility defect where promised; and behavior across long horizons scaled in periods. Modified-energy theory is conditional on smoothness, analyticity, nonresonance, and step restrictions; it is not a universal eternal bound.

## Exercises with complete worked solutions

### 1. Euler interval
For lambda=-20, when is explicit Euler stable?

**Solution.** Require $|1-20h|<1$, giving $0<h<0.1$.

### 2. Backward multiplier
For the same equation, find R.

**Solution.** $R=1/(1+20h)$, with magnitude below one for every h>0.

### 3. Trapezoidal stiff limit
What is the multiplier limit as h grows?

**Solution.** $(1-10h)/(1+10h)$ tends to -1, so the fast component alternates rather than being strongly damped.

### 4. A versus L stability
State the distinction.

**Solution.** A-stability controls all left-half-plane modes; L-stability additionally damps infinitely stiff modes to zero in one-step multiplier limit.

### 5. Accuracy boundary
Can backward Euler use a proposed step $h=10$ accurately for $y'=-y$ when the requested final time is $t=1$?

**Solution.** Stability does not imply accuracy. A step of length $h=10$ advances from $t=0$ to $t=10$, not to the requested final time $t=1$; its multiplier $1/(1+h)=1/11$ should be compared with the exact ten-unit multiplier $e^{-10}$. A solver that shortens its final step to reach $t=1$ instead uses $h=1$, whose multiplier $1/2$ is stable but is a poor approximation to $e^{-1}$. Either comparison shows why A-stability alone is not an accuracy certificate.

### 6. Inexact solve
Why tighten nonlinear tolerance separately?

**Solution.** Otherwise iteration error can dominate or imitate discretization error, corrupting observed order.

### 7. Strang order
Write the symmetric composition.

**Solution.** Half A, full B, half A. Smooth exact subflows and regularity give local error order three and global order two.

### 8. Noncommutation
If A and B commute, what happens to exact splitting?

**Solution.** $\\exp\\left(hA\\right)\\exp\\left(hB\\right)=\\exp(h(A+B))$; splitting error vanishes for the linear exact subflows.

### 9. Symplectic determinant
In two dimensions, what determinant does a symplectic map have?

**Solution.** One. Area preservation is necessary and, for orientation-preserving two-dimensional maps, equivalent to the canonical symplectic condition.

### 10. Symplectic Euler oscillator
For $H=(p^2+q^2)/2$, write the update.

**Solution.** $p_{n+1}=p_n-hq_n$, then $q_{n+1}=q_n+h p_{n+1}$.

### 11. Not exact energy
Compute one step from q=1,p=0.

**Solution.** $p_1=-h$, $q_1=1-h^2$; energy is $[(1-h^2)^2+h^2]/2=1/2-h^2/2+h^4/2$, not exactly 1/2.

### 12. Verlet order
Why use symmetric half steps?

**Solution.** The symmetric composition cancels even powers in the local-error symmetry structure, yielding second order and time reversibility under exact arithmetic.

### 13. Structure choice
Does exact energy imply exact trajectory?

**Solution.** No. A method may remain on the correct energy level but have large phase error or wrong traversal speed.

### 14. Constraint residuals
Why check velocity as well as position?

**Solution.** A trajectory may lie on $g(q)=0$ while momentum has a normal component, violating the differentiated constraint and causing immediate drift.

### 15. Stiff order reduction
What should be reported?

**Solution.** Observed convergence of the actual output under step refinement, with algebraic tolerances and spatial/boundary errors separately controlled.

### 16. Work comparison
Why not compare methods only by step count?

**Solution.** Implicit steps require function, Jacobian, factorization, and iteration work; explicit stages differ too. Compare total work and accuracy.

### 17. Long-time state error
Can bounded energy error ensure small phase error?

**Solution.** No. Small frequency bias accumulates linearly in time while energy remains bounded.

### 18. Reversibility audit
Describe one.

**Solution.** Integrate N steps, reverse momenta/time as appropriate, integrate N steps back, and report return defect at h,h/2,h/4. Floating-point error sets a floor.

### 19. Modified equation boundary
Is a formal modified Hamiltonian necessarily convergent?

**Solution.** No. It is often an asymptotic series truncated optimally under smoothness and step assumptions.

### 20. Claim repair
Repair: “The symplectic solver conserves energy, so its orbit is correct forever.”

**Solution.** It preserves symplectic geometry and often nearly conserves a modified energy over a long conditional interval. State, phase, resonance, roundoff, and singularity errors still require independent checks.

## Chapter synthesis

Stiff integrators control decaying fast modes; splitting exposes model structure; symplectic and reversible methods protect geometric invariants. None replaces fixed-output refinement, algebraic residuals, work accounting, or a method-specific theorem.

## Dependency ledger

- Stability functions analyze the scalar linear test equation, not every nonlinear behavior.
- Implicit accuracy depends on converged algebraic solves.
- Splitting order requires regular compatible subflows.
- Symplectic long-time claims require Hamiltonian structure and step restrictions.
- Constraint methods require regular constraint Jacobians and dual residual checks.
`;export{e as default};