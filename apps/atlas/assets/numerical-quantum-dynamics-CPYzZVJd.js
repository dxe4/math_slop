var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: numerical-quantum-dynamics
title: "Numerical Eigenproblems and Quantum Dynamics"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
status: draft
---

# Numerical Eigenproblems and Quantum Dynamics

Numerical quantum mechanics converts operators into finite representations and time evolution into algorithms. A plausible plot is not enough: discretization, truncation, norm, residual, convergence, and benchmark evidence must travel with every result.

## 1. Spatial discretization

On a uniform grid, the centered second derivative is

$\\psi''(x_j) \\approx \\dfrac{\\psi_{j+1}-2\\psi_j+\\psi_{j-1}}{h^2}$,

with second-order local consistency for smooth functions. Boundary rows encode the chosen domain. The resulting Hamiltonian should be Hermitian under the discrete inner product.

## 2. Eigenpair residuals

This is an application chapter: the primary method route is [initial-value methods](../numerical-mathematics-error-algorithms/initial-value-methods.md), [stiff/multistep methods](../numerical-mathematics-error-algorithms/multistep-stiff-dae-methods.md), and [geometric integration](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md). [Matrix eigenvalue computation](../matrix-computation-applications/eigenvalue-computations.md) owns the linear-algebra algorithms. The calculations here connect those methods to quantum domains, phases and positive states; they are analytic reference calculations, not reports of executed programs or observed convergence.

### Worked example: the grid well has exact discrete energies

Use $N$ interior points, $h=L/(N+1)$, and zero Dirichlet endpoints for the free well. The matrix is $H_h=\\hbar^2\\operatorname{tridiag}(-1,2,-1)/(2mh^2)$. Substituting $v_j=\\sin(n\\pi j/(N+1))$ and the sine addition formula yields

$$E_{n,h}=\\frac{\\hbar^2}{mh^2}[1-\\cos(n\\pi h/L)],\\qquad1\\le n\\le N.$$

Taylor expansion for fixed $n$ gives $E_{n,h}=E_n-\\hbar^2n^4\\pi^4h^2/(24mL^4)+O(h^4)$. The leading grid error is second order and negative. There is no contradiction with Ritz upper bounds: this finite-difference matrix and its discrete norm are not the exact continuous Rayleigh form on an exactly integrated conforming trial space. The discretization theorem being invoked must match the actual matrix.

The physical grid norm is $h\\sum_j|\\psi_j|^2$. Its normalized samples are $\\psi_j=\\sqrt{2/L}\\sin(n\\pi j/(N+1))$; Euclidean coordinates instead use $\\sqrt h\\,\\psi_j$. On nonuniform schemes a positive weight matrix $M$ may define the inner product. Self-adjointness then reads $MH=H^\\dagger M$, and the equivalent Euclidean Hermitian matrix is $M^{1/2}HM^{-1/2}$. Blindly symmetrizing a weighted matrix changes the model; a declared similarity and matching normalization preserve it.

For computed normalized $(\\lambda,v)$, report

$r=Hv-\\lambda v$, $\\lVert r\\rVert$.

For a finite Hermitian matrix and normalized $v$, $\\operatorname{dist}(\\lambda,\\sigma(H))\\leq\\lVert r\\rVert$; closeness of $v$ to a particular eigenspace additionally depends on spectral separation. Neither statement proves the continuum discretization is accurate. Grid refinement and domain enlargement address that second question.

## 3. Variational discretizations

The residual estimate has a short proof. Expand $v$ into orthogonal eigenspaces $P_j$ of the finite Hermitian $H$. Then $\\|r\\|^2=\\sum_j|E_j-\\lambda|^2\\|P_jv\\|^2\\ge\\operatorname{dist}(\\lambda,\\sigma(H))^2$, since the weights sum to one. For a selected eigenspace $P_*$ separated from the reported $\\lambda$ by $|E_j-\\lambda|\\ge\\delta>0$ on every other sector, the same expansion gives $\\|(I-P_*)v\\|\\le\\|r\\|/\\delta$. A degenerate sector determines a subspace, not one preferred basis vector.

For an explicit gap warning take $H=\\operatorname{diag}(0,\\epsilon)$, $\\epsilon>0$, $v=(1,1)^\\mathsf T/\\sqrt2$, and Rayleigh value $\\lambda=\\epsilon/2$. The residual norm is $\\epsilon/2$, arbitrarily small as the gap closes, yet squared overlap with either coordinate eigenvector is only one half. At zero gap the entire plane is one eigenspace. An unqualified vector-accuracy claim inferred from residual size alone therefore loses its meaning. The proof also concerns this matrix's spectrum; it cannot decide whether the imposed box, boundary conditions or neglected basis tails represent the intended continuum problem.

Galerkin or finite-element methods project onto a trial space and can inherit variational upper-bound structure for low eigenvalues. Quadrature, basis conditioning, and imposed boundaries affect the result. Spectral methods converge rapidly for smooth compatible solutions but can perform poorly at singularities or discontinuities.

## 4. Time propagation

Forward Euler is not unitary. Crank–Nicolson uses

$\\left(I+\\dfrac{i\\,\\Delta t}{2\\hbar}H\\right)\\psi_{n+1}=\\left(I-\\dfrac{i\\,\\Delta t}{2\\hbar}H\\right)\\psi_n$

and is unitary for a fixed Hermitian matrix solved exactly. Split-operator methods alternate kinetic and potential exponentials; noncommutation creates splitting error.

## 5. Time-dependent Hamiltonians

### Worked example: exact norm, inaccurate phase

For constant Hermitian $H$ and real step, $I+i\\Delta tH/(2\\hbar)$ is invertible because each eigenvalue has nonzero modulus. Its Cayley update has scalar multiplier

$$u_E=\\frac{1-iE\\Delta t/(2\\hbar)}{1+iE\\Delta t/(2\\hbar)}
=e^{-2i\\arctan(E\\Delta t/(2\\hbar))}.$$

Thus the matrix is unitary and commutes with $H$, preserving its discrete energy expectation too. Its effective phase frequency, however, is

$$\\omega_{E,\\mathrm{num}}=\\frac2{\\Delta t}\\arctan\\frac{E\\Delta t}{2\\hbar}
=\\frac E\\hbar-\\frac{E^3\\Delta t^2}{12\\hbar^3}+O(\\Delta t^4).$$

Over duration $T$ the phase error grows at leading order like $TE^3\\Delta t^2/(12\\hbar^3)$. Exact norm and discrete energy conservation do not control a long-time interference phase. In the grid well, the independent spatial eigenvalue shift adds approximately $T(E_{n,h}-E_n)/\\hbar$ to the phase discrepancy. One can therefore preserve every discrete invariant while having an inaccurate continuum phase for two independent reasons. Solving the Cayley linear system only approximately introduces a third error that its exact-arithmetic unitary proof does not cover.

Step exponentials, Magnus expansions, and high-order ODE methods approximate ordered evolution. An adaptive solver's local tolerance is not a global physical error bound. Validate norm, reversibility where appropriate, step refinement, and comparison to exact two-level cases.

## 6. Open-system numerics

A symmetric kinetic/potential split is $e^{-iK\\Delta t/(2\\hbar)}e^{-iV\\Delta t/\\hbar}e^{-iK\\Delta t/(2\\hbar)}$. Each factor is unitary for a finite Hermitian split, but noncommutation creates a local $O(\\Delta t^3)$ defect and second-order fixed-interval global error under bounded-matrix hypotheses. Expanding both exponentials identifies nested commutators such as $[K,[K,V]]$ and $[V,[K,V]]$ in the constants. A first-order unsymmetric product instead has a leading ordinary-commutator defect. On refining a spatial grid, the kinetic matrix norm grows like $h^{-2}$, so a bounded-matrix estimate is not automatically uniform in the continuum limit. Smooth-state or stronger operator estimates are additional work. Likewise a midpoint frozen-Hamiltonian step may be exactly unitary while approximating a genuinely time-ordered evolution.

Density-matrix propagation must preserve trace, Hermiticity, and positivity. A generic integrator may violate positivity even for a valid master equation. Channel or exponential integrators can preserve more structure. Small negative eigenvalues must be diagnosed, not silently clipped without reporting.

## 7. Reproducibility ledger

For comparing two normalized pure-state outputs, a phase-invariant quantity is $F=|\\langle\\psi|\\widetilde\\psi\\rangle|^2$. The minimum vector distance over their irrelevant relative global phase has square $d^2=2-2\\sqrt F$, obtained by maximizing the real overlap. For any bounded observable, expanding its two quadratic forms and applying Cauchy–Schwarz gives expectation discrepancy at most $2\\|A\\|d$. A projector has norm at most one, so this also bounds its probability error. This connects a declared state comparison to an actual predicted quantity. A unit norm by itself supplies no such overlap bound, and an unbounded observable additionally requires moment or domain control rather than this bounded-operator estimate.

### Worked example: a trace-preserving step can be nonpositive

For amplitude-damping rate $\\kappa$, write $u=\\kappa\\Delta t$ and use a forward-Euler step on the density equation. It sends ground population $a$ to $a+u(1-a)$ and coherence $c$ to $(1-u/2)c$. At $u=1/2$, choose the pure input

$$\\rho=\\begin{pmatrix}9/10&3/10\\\\3/10&1/10\\end{pmatrix}.$$

The output is $\\begin{pmatrix}19/20&9/40\\\\9/40&1/20\\end{pmatrix}$. It is Hermitian, trace one, and has positive diagonal entries, but determinant $19/400-81/1600=-1/320<0$. Thus even population bounds plus trace checks miss its negative eigenvalue. The exact damping channel with parameter $1-e^{-u}$ is positive by its Kraus representation; this failure belongs to the numerical update. Higher order alone does not guarantee complete positivity for arbitrary states and ancillas. Chapter 17's finite square-root channel construction gives a different structure-preserving local step under its stated step restriction.

If a Hermitian trace-one computed matrix has negative spectral mass $\\eta$, clipping the negative eigenvalues and renormalizing the positive part changes it by trace norm exactly $2\\eta$. Indeed the positive eigenvalues originally sum to $1+\\eta$; rescaling them removes total mass $\\eta$, while deleting the negative part removes another $\\eta$. That quantifies the alteration but does not show the repaired state is close to the true solution. It is a nonlinear correction and need not define one valid channel across different inputs. A constrained statistical estimator can legitimately have a stated projection rule, whereas silently clipping an unstable time integrator hides a different error.

For time-dependent or stiff problems, error control must include phase and observable sensitivity, not only a solver's local state tolerance. A residual bound becomes an evolution bound only through an appropriate stability estimate, such as the finite unitary Duhamel argument in Chapter 4. Long-time, high-frequency and boundary-sensitive quantities can magnify errors that are small at one step. The numerical-analysis links above supply the general convergence and stability framework; this chapter's exact calculations specify which quantum claim each invariant can and cannot support.

Record equations, units, grids/bases, boundaries, ordering, tolerances, solver, initial state, observables, convergence tables, residuals, and deterministic seeds. Distinguish rounding error, algebraic solver error, discretization error, model discrepancy, and experimental uncertainty.

## A split propagator preserves norm but has a commutator error

For a finite Hermitian discretization H=T+V, set A=−iT/ℏ
and B=−iV/ℏ. Each exponential generated by A or B is
unitary. The symmetric split step
$$S_h=e^{hA/2}e^{hB}e^{hA/2}$$
therefore preserves the discrete norm exactly in exact
arithmetic. Expanding the three factors through second
order gives I+h(A+B)+h²(A+B)²/2, the same terms as
the exponential of the full generator. Bounded matrix
Taylor remainders then give a local operator error at
most C|h|³ on a stated bounded step interval. The
constant depends on the matrix norms and cannot be
treated as independent of every spatial mesh.

For N steps, compare Sₕᴺ with the Nth power of the
exact one-step exponential. The difference is a sum
of N terms, each containing one one-step difference
between products of unitary factors. Norm submultiplicativity
therefore bounds its norm by NC|h|³. At a fixed
horizon with N=T/h, this is of order Th². The
absence of an exponential amplification factor in this
particular estimate follows from unitarity of both
discrete propagators. It does not eliminate the local
splitting error.

If A and B commute, their exponentials combine exactly
and the split error vanishes. Otherwise the first
neglected terms involve their commutators. Thus a
large commutator, rapidly varying potential or demanding
long-time phase target can require a smaller step
even when every factor preserves norm. Conservation
of that norm is a structural property, rather than
a full accuracy certificate.

The symmetric composition also satisfies S₋ₕ=Sₕ†,
so the exact discrete update reverses when the
step sign is reversed. A finite-precision implementation
can accumulate roundoff in that comparison. Reversibility
and norm preservation still leave eigenphases and
interference observables to be assessed separately,
as the Cayley example already showed for a different
method.

For unbounded continuum kinetic and potential operators,
the same formal Taylor multiplication is not automatically
an operator-norm proof. Domains and commutator regularity
must be controlled for the states being propagated.
A finite spatial discretization makes the matrices
bounded, but their norms commonly grow as the mesh
is refined. Joint spatial and temporal convergence
therefore needs estimates that track that dependence.
An argument valid for one fixed matrix is insufficient
to claim a uniform continuum error bound. This is
why the numerical report names both the spatial
operator and the time propagator, together with the
observable whose error matters.

## State error transfers to bounded-observable error

Let normalized states ψ and φ differ
in norm by at most δ, and let
A be a bounded Hermitian observable.
Subtract their expectations by adding
and subtracting the mixed pairing.
Cauchy–Schwarz bounds each of the
two resulting terms by ‖A‖δ,
so the expectation difference is
at most twice that amount.

A propagator operator-norm allowance
therefore supplies such an observable
allowance for every normalized input.
A relative global phase can be
chosen before comparing pure states,
because it changes neither expectation.
In contrast, a phase error between
different populated eigencomponents can
change interference and cannot be
removed by one global alignment.
Unbounded energy or position moments
need extra domain and tail information;
the same simple norm estimate does
not apply to them. This connects
the propagator's mathematical error
to a specified measurement scale
instead of treating exact discrete
norm conservation as universal accuracy.

## Exercises with complete solutions

<a id="numerical-quantum-dynamics-ex-1"></a>

### 1. Difference stencil
What matrix entries represent $-d^2/dx^2$ internally?

<details>
<summary>Hint 1</summary>

Insert the centered second-difference formula with its overall minus sign.

</details>

<details>
<summary>Hint 2</summary>

The central coefficient is positive and both neighboring coefficients negative.

</details>

<details>
<summary>Full solution</summary>

Diagonal $2/h^2$ and adjacent off-diagonals $-1/h^2$.

</details>

<a id="numerical-quantum-dynamics-ex-2"></a>

### 2. Hermiticity
Why is the standard internal stencil symmetric?

<details>
<summary>Hint 1</summary>

Compare each adjacent coupling with the reversed row-column position.

</details>

<details>
<summary>Hint 2</summary>

A nonuniform weighted problem requires the declared inner product instead of a blind Euclidean comparison.

</details>

<details>
<summary>Full solution</summary>

Each neighbor coupling appears equally in both transposed positions.

</details>

<a id="numerical-quantum-dynamics-ex-3"></a>

### 3. Boundary ownership
What do omitted endpoint unknowns usually encode?

<details>
<summary>Hint 1</summary>

The fixed endpoint values are removed from the unknown vector.

</details>

<details>
<summary>Hint 2</summary>

Their zero contribution imposes Dirichlet data rather than periodic connections.

</details>

<details>
<summary>Full solution</summary>

Homogeneous Dirichlet boundary values fixed to zero.

</details>

<a id="numerical-quantum-dynamics-ex-4"></a>

### 4. Residual zero
If $Hv=\\lambda v$ exactly, what is the residual?

<details>
<summary>Hint 1</summary>

Insert the exact eigenvector equation in the residual definition.

</details>

<details>
<summary>Hint 2</summary>

The two terms cancel.

</details>

<details>
<summary>Full solution</summary>

Zero.

</details>

<a id="numerical-quantum-dynamics-ex-5"></a>

### 5. Rayleigh quotient
How may $\\lambda$ be estimated from normalized $v$?

<details>
<summary>Hint 1</summary>

Take the quadratic form of the Hermitian matrix.

</details>

<details>
<summary>Hint 2</summary>

For a unit vector no additional denominator is needed.

</details>

<details>
<summary>Full solution</summary>

$\\lambda=v^{\\dagger} Hv$.

</details>

<a id="numerical-quantum-dynamics-ex-6"></a>

### 6. Continuum error
Does a tiny matrix residual guarantee continuum accuracy?

<details>
<summary>Hint 1</summary>

The residual refers to the finite matrix actually supplied.

</details>

<details>
<summary>Hint 2</summary>

Its boundaries and approximation may differ from the intended continuum operator.

</details>

<details>
<summary>Full solution</summary>

No. The matrix may be a poor discretization or use the wrong boundary.

</details>

<a id="numerical-quantum-dynamics-ex-7"></a>

### 7. Grid refinement
For second-order convergence, how should leading error change when $h$ halves?

<details>
<summary>Hint 1</summary>

Use an asymptotic error proportional to h squared.

</details>

<details>
<summary>Hint 2</summary>

Replacing h by half its value multiplies that term by one quarter.

</details>

<details>
<summary>Full solution</summary>

Approximately by a factor of four in the asymptotic regime.

</details>

<a id="numerical-quantum-dynamics-ex-8"></a>

### 8. Domain truncation
Why enlarge a box for a decaying state?

<details>
<summary>Hint 1</summary>

A decaying exact tail still feels an artificially nearby boundary.

</details>

<details>
<summary>Hint 2</summary>

Separate box-size error from the internal grid error.

</details>

<details>
<summary>Full solution</summary>

To verify that artificial boundaries do not materially shift the state or eigenvalue.

</details>

<a id="numerical-quantum-dynamics-ex-9"></a>

### 9. Euler norm
For real $E,\\Delta t$ and $\\hbar>0$, when does forward Euler strictly increase an energy eigenmode's norm?

<details>
<summary>Hint 1</summary>

Apply the step to one real-energy eigenmode.

</details>

<details>
<summary>Hint 2</summary>

Multiply its scalar factor by its complex conjugate, including the zero-energy and zero-step exceptions.

</details>

<details>
<summary>Full solution</summary>

Its multiplier $1-iE\\,\\Delta t/\\hbar$ has squared modulus $1+(E\\,\\Delta t/\\hbar)^2\\ge1$, with strict growth exactly when $E\\,\\Delta t\\ne0$. Equality holds for $E=0$ or $\\Delta t=0$. For $H=\\operatorname{diag}(0,1)$, $\\psi=e_1=(1,0)^{T}$, $\\hbar=1$ and $\\Delta t=1/2$, the zero-energy mode keeps norm one although the step operator is not unitary.

</details>

<a id="numerical-quantum-dynamics-ex-10"></a>

### 10. Crank–Nicolson factor
What is its scalar eigenmode multiplier?

<details>
<summary>Hint 1</summary>

Diagonalize the fixed Hermitian step matrix conceptually.

</details>

<details>
<summary>Hint 2</summary>

The numerator is the conjugate of the denominator on a real eigenvalue.

</details>

<details>
<summary>Full solution</summary>

$\\dfrac{1-iE\\,\\Delta t/(2\\hbar)}{1+iE\\,\\Delta t/(2\\hbar)}$, whose modulus is one.

</details>

<a id="numerical-quantum-dynamics-ex-11"></a>

### 11. Splitting exactness
When is kinetic-potential splitting exact?

<details>
<summary>Hint 1</summary>

Pairwise commutation is a sufficient exact splitting condition.

</details>

<details>
<summary>Hint 2</summary>

Otherwise generic small-step expansions contain commutator terms.

</details>

<details>
<summary>Full solution</summary>

When the split operators commute, aside from numerical exponential errors.

</details>

<a id="numerical-quantum-dynamics-ex-12"></a>

### 12. Norm check
Is norm conservation sufficient for correct phase?

<details>
<summary>Hint 1</summary>

Inspect the exact Cayley scalar phase in the worked example.

</details>

<details>
<summary>Hint 2</summary>

Unit modulus does not equal the correct exponential angle.

</details>

<details>
<summary>Full solution</summary>

No. A unitary but inaccurate propagator can preserve norm while accumulating phase error.

</details>

<a id="numerical-quantum-dynamics-ex-13"></a>

### 13. Reversibility
What test uses forward then backward propagation?

<details>
<summary>Hint 1</summary>

Compose the specified forward and reverse maps in their actual order.

</details>

<details>
<summary>Hint 2</summary>

State which physical dynamics is reversible before interpreting any discrepancy.

</details>

<details>
<summary>Full solution</summary>

Apply the reversed algorithm and compare with the initial state, reporting overlap or norm difference.

</details>

<a id="numerical-quantum-dynamics-ex-14"></a>

### 14. Density trace
What should it remain?

<details>
<summary>Hint 1</summary>

The density operator has unit total probability.

</details>

<details>
<summary>Hint 2</summary>

Trace preservation is separate from Hermiticity and positivity.

</details>

<details>
<summary>Full solution</summary>

One.

</details>

<a id="numerical-quantum-dynamics-ex-15"></a>

### 15. Hermiticity residual
Give one metric.

<details>
<summary>Hint 1</summary>

Compare the matrix to its conjugate transpose.

</details>

<details>
<summary>Hint 2</summary>

Declare the norm and any numerical tolerance used for that comparison.

</details>

<details>
<summary>Full solution</summary>

$\\lVert \\rho-\\rho^{\\dagger}\\rVert$ in a stated matrix norm.

</details>

<a id="numerical-quantum-dynamics-ex-16"></a>

### 16. Positivity check
How is it checked numerically?

<details>
<summary>Hint 1</summary>

A Hermitian matrix is positive exactly when all eigenvalues are nonnegative.

</details>

<details>
<summary>Hint 2</summary>

Positive diagonal entries alone missed the explicit Euler counterexample.

</details>

<details>
<summary>Full solution</summary>

Compute the smallest Hermitian eigenvalue with tolerances and convergence reported.

</details>

<a id="numerical-quantum-dynamics-ex-17"></a>

### 17. Clipping
Why not silently replace negative eigenvalues by zero?

<details>
<summary>Hint 1</summary>

Deleting negative eigenvalues alters the state and usually its trace.

</details>

<details>
<summary>Hint 2</summary>

Renormalization is another nonlinear change, not an error estimate for the original integrator.

</details>

<details>
<summary>Full solution</summary>

It changes the computed state, hides instability, and alters trace and observables unless a documented estimator requires it.

</details>

<a id="numerical-quantum-dynamics-ex-18"></a>

### 18. Random seed
Why report it?

<details>
<summary>Hint 1</summary>

A stochastic procedure depends on its generated sequence as well as its equations.

</details>

<details>
<summary>Hint 2</summary>

Reporting the seed supports repeatability but does not prove accuracy or physical validity.

</details>

<details>
<summary>Full solution</summary>

It enables exact repetition of stochastic sampling or randomized tests.

</details>

<a id="numerical-quantum-dynamics-ex-19"></a>

### 19. Benchmark
Name a useful exact case.

<details>
<summary>Hint 1</summary>

Choose a model whose analytic spectrum or propagator is already derived.

</details>

<details>
<summary>Hint 2</summary>

The grid-well formula and constant two-level evolution supply independent mathematical references.

</details>

<details>
<summary>Full solution</summary>

A constant two-state Hamiltonian or the infinite-well spectrum.

</details>

<a id="numerical-quantum-dynamics-ex-20"></a>

### 20. Error layers
Can finer grids repair a wrong physical model?

<details>
<summary>Hint 1</summary>

Numerical approximation is performed inside the declared model.

</details>

<details>
<summary>Hint 2</summary>

No refinement can restore degrees of freedom or mechanisms excluded from that model.

</details>

<details>
<summary>Full solution</summary>

No. They reduce discretization error, not omitted physics or incorrect parameters.

</details>

## Project: verified quantum solver

Build a dependency-free solver for one bound-state spectrum and one driven two-state evolution. Include at least three refinements, eigenpair and norm residuals, boundary/domain documentation, exact benchmarks, and accessible text tables. Introduce one intentional bug—wrong boundary, sign, or missing conjugation—and demonstrate which invariant detects it. Separate numerical convergence from model validation.

## Chapter summary

Discretization turns continuum operators into matrices but also introduces boundary and truncation error. Residuals audit algebraic solutions; refinement audits discretization; structure-preserving propagators control norm and positivity. Reproducible computation reports every layer rather than only a curve.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=variational-semiclassical-methods) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=foundations-capstone-boundaries) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};