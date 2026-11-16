
# Prerequisite Diagnostic and Repair Routes

Attempt these without notes. Mark each item ready, repair, or new. The result routes study; it is not an admission test.

## Calculus and modeling

### 1. Integral formulation
Rewrite $x'=f(t,x)$, $x(t_0)=x_0$ as an integral equation.

**Answer.** $x(t)=x_0+\int_{t_0}^t f(s,x(s))ds$. This is the fixed-point starting point for existence and error estimates.

**Repair route.** Review the fundamental theorem of calculus, definite integrals, continuity, and substitution before chapter 1.

### 2. Chain rule energy
If $E(x,y)=(x^2+y^2)/2$ and $(x',y')=(y,-x-cy)$, find E'.

**Answer.** $E'=xx'+yy'=xy+y(-x-cy)=-cy^2$.

**Repair route.** Practice multivariable chain rule and interpreting a sign-definite derivative before the stability and bifurcation readings.

### 3. Taylor remainder
What local error follows from replacing $x(t+h)$ by $x(t)+hx'(t)$ when x has bounded second derivative?

**Answer.** Taylor’s theorem gives remainder bounded by $Mh^2/2$.

**Repair route.** Review Taylor’s theorem with remainder before the [numerical-analysis route](#/books/numerical-mathematics-error-algorithms).

### 4. Units
In $P'=rP(1-P/K)$, what are the units of r and K?

**Answer.** r has inverse-time units and K has population units.

**Repair route.** Practice dimensional consistency and nondimensionalization before chapter 1.

## Linear algebra

### 5. Eigenvalue stability
Classify $z'=\operatorname{diag}(-1,2)z$.

**Answer.** One direction decays and one grows, so the origin is an unstable saddle.

**Repair route.** Review eigenvalues, eigenvectors, matrix exponentials, and invariant subspaces before [stable manifolds](hyperbolic-equilibria-stable-manifolds.md).

### 6. Repeated eigenvalue
Does knowing both eigenvalues are -1 determine the transient response?

**Answer.** No. Jordan structure and nonnormal eigenvectors affect polynomial factors and transient amplification.

**Repair route.** Review diagonalization, Jordan blocks, norms, and singular values.

### 7. Positive definite form
Why does $z^TPz>0$ for nonzero z matter in Lyapunov analysis?

**Answer.** It makes V a local size measure; bounds by norm squared translate V decay into state stability.

**Repair route.** Review symmetric matrices, eigenvalue bounds, and quadratic forms before [bifurcation theory](nonlinear-stability-bifurcation.md) and robust-control continuation.

### 8. Rank and control
For $B=(1,0)^{\mathsf T}$ and $A=\operatorname{diag}(1,-1)$, find rank of $[B,AB]$.

**Answer.** $AB=B$, so both columns coincide and rank is one. The second mode is unreachable.

**Repair route.** Review span, rank, null spaces, and block matrices before the [control reading](../control-theory/control-reachability-observation.md).

## Proof and analysis

### 9. Quantifiers
Negate: “for every epsilon>0 there is delta>0 such that P(epsilon,delta).”

**Answer.** “There exists epsilon>0 such that for every delta>0, P fails.”

**Repair route.** Review quantifiers, contradiction, induction, and counterexamples before theorem-led chapters.

### 10. Cauchy versus convergent
When does every Cauchy sequence converge?

**Answer.** In a complete metric space.

**Repair route.** Review metric spaces and completeness; chapter 1 uses a concrete complete function space.

### 11. Uniform versus pointwise
Why is uniform convergence stronger for passing a limit through a maximum-norm estimate?

**Answer.** One index works simultaneously for every point, controlling the supremum error.

**Repair route.** Review sequences of functions and norm convergence before Fourier and PDE chapters.

### 12. Gronwall pattern
If $e(t)\leq a+L \int_0^t e(s)ds$, what bound is expected?

**Answer.** $e(t)\leq a e^{Lt}$ for nonnegative e under standard integrability hypotheses.

**Repair route.** Practice integral inequalities before local existence, scalar bounds and numerical-error arguments.

## Multivariable and variational tools

### 13. Jacobian
Find the Jacobian of $F(x,y)=(x^2-y,xy)$ at $(1,2)$.

**Answer.** $\begin{pmatrix}2&-1\\2&1\end{pmatrix}$.

**Repair route.** Review partial derivatives and linear approximation before bifurcations, centre reduction and reaction–diffusion continuation.

### 14. Integration by parts
Transform $\int_a^b u'v$.

**Answer.** $[uv]_a^b-\int_a^b uv'$.

**Repair route.** Track the boundary term explicitly before the [classical](#/books/partial-differential-equations) and [weak PDE](#/books/pde-weak-theory-waves-patterns) continuations.

### 15. Constrained variation
Why must a variation vanish at a fixed endpoint?

**Answer.** Otherwise the perturbed function violates the endpoint constraint.

**Repair route.** Review directional derivatives and Lagrange multipliers before [variational/direct methods](../pde-weak-theory-waves-patterns/variational-direct-methods.md).

### 16. Weak derivative
What distinguishes a weak derivative from a pointwise derivative?

**Answer.** It is defined by integration against compactly supported test functions; equality is almost everywhere and can exist without pointwise differentiability.

**Repair route.** Review L2 functions, integration by parts, and almost-everywhere equality before the [Sobolev opening](../pde-weak-theory-waves-patterns/sobolev-spaces.md).

## Probability, measures, and computation

### 17. Almost every
What information is missing from “the result holds almost everywhere”?

**Answer.** The measure relative to which the exceptional set has measure zero.

**Repair route.** Review probability measures, integrable random variables, and expectation before [invariant measures](ergodic-theorems-statistics.md).

### 18. Dependent average
Why is variance of a dependent sample mean not generally $\sigma^2/n$?

**Answer.** Cross-covariance terms appear in the double sum for the variance.

**Repair route.** Review covariance and stationary sequences before dynamic statistics.

### 19. Floating point
Why can exact equality tests fail for decimal computations?

**Answer.** Most decimals have no finite binary representation, and operations round. Use scale-aware tolerances with an error model.

**Repair route.** Review floating-point representation, cancellation, and conditioning before numerical chapters.

### 20. Refinement
Values on steps h,h/2,h/4 are 1.2,1.05,1.0125. What observed order is suggested?

**Answer.** Differences are 0.15 and 0.0375, ratio four, suggesting order two if in the asymptotic regime.

**Repair route.** Review logarithms, truncation/global error, and output-based refinement before the [numerical-analysis continuation](#/books/numerical-mathematics-error-algorithms).

## Routing result

- Repair items 1–4 before starting Part I.
- Repair items 5–8 before linear dynamics or control.
- Repair items 9–12 alongside chapters 1–3.
- Repair items 13–16 before weak PDE and variational chapters.
- Repair items 17–20 before long-time statistics and numerical projects.

A reader may use the no-prerequisite differential-equations encounter and standard course in the catalog for a slower repair route. Mastery means being able to explain the assumptions and failure boundary, not merely reproduce the final line.
