
# Notation, Solution Classes, and Claim Conventions {#section-1-notation-solution-classes-and-claim-conventions}

<a id="section-1-state-time-and-domains"></a>
## State, time, and domains {#section-3-state-time-and-domains}

- $t$ is time and $x$ may be a scalar state or spatial coordinate when context is explicit. Vector states normally use $z$.
- $\Omega$ is a spatial domain; its boundary and outward normal are named in prose where plain-text notation avoids ambiguity.
- Initial data are written at $t_0$; boundary data always name Dirichlet, Neumann, periodic, inflow, or mixed type.
- $A,B,C$ normally denote state, input, and observation matrices. $D$ often denotes a diffusion matrix.
- A prime denotes derivative with respect to the displayed independent variable. Partial derivatives are written with subscripts in plain text.

<a id="section-9-norms-and-constants"></a>
## Norms and constants {#section-11-norms-and-constants}

The norm is Euclidean unless a function-space norm is named. $\lVert u\rVert_2$, $\lVert u\rVert_\infty$, $\lVert u\rVert_{H1}$, and dual norms are not interchangeable. Operator norms use the induced vector norm unless stated otherwise. Generic C may change from line to line only when its dependencies do not affect the claim; parameter-, time-, mesh-, or domain-dependent constants should be labeled.

<a id="section-13-solution-classes"></a>
## Solution classes {#section-15-solution-classes}

**Classical solution.** Has the pointwise derivatives in the equation and satisfies data in the classical sense.

**Mild/integral solution.** Satisfies an integral or variation-of-constants formulation. Equivalence with a classical solution requires additional regularity.

**Weak solution.** Satisfies an identity against a declared test space. Boundary values may be traces rather than pointwise values.

**Entropy solution.** A weak conservation-law solution satisfying a specified entropy inequality. Conservation alone does not select it.

**Numerical solution.** A finite representation satisfying discrete equations to a reported tolerance. It is not an exact solution unless a validation theorem encloses one.

<a id="section-25-stability-vocabulary"></a>
## Stability vocabulary {#section-27-stability-vocabulary}

- Lyapunov stable: trajectories starting close remain close.
- attractive: nearby trajectories converge to the invariant object.
- asymptotically stable: stable and attractive.
- exponentially stable: convergence obeys a uniform exponential bound.
- orbitally stable: closeness is to a periodic orbit as a set, allowing phase shift.
- absolutely stable numerical step: test-equation multiplier has modulus at most one.
- robustly stable: every model in a declared uncertainty set is stable.

The unqualified word stable is avoided when more than one meaning is possible.

<a id="section-37-local-and-global"></a>
## Local and global {#section-39-local-and-global}

Local always names a neighborhood, finite time, parameter regime, or chart. A local existence theorem does not imply continuation. A center manifold and normal form do not determine behavior after exit from their neighborhood. A local optimum or bifurcation branch does not imply uniqueness over the full admissible set.

<a id="section-41-exact-approximate-and-empirical-marks"></a>
## Exact, approximate, and empirical marks {#section-43-exact-approximate-and-empirical-marks}

**Theorem/proof** means the conclusion follows from stated hypotheses in the mathematical model.

**Derivation** means equations follow through stated modeling or formal assumptions; it may not be a proof that the model represents a system.

**Asymptotic approximation** names a limit and remainder order.

**Numerical evidence** names representation, resolution, tolerance, residual/refinement, and finite horizon.

**Empirical claim** requires data provenance, observation model, uncertainty, and validation design beyond this mathematical volume.

Rounded table equality is equality of displayed digits only. “Verified” is reserved for a named check or bound, never used as a synonym for “looks plausible.”

<a id="section-55-spectrum-and-geometry"></a>
## Spectrum and geometry {#section-57-spectrum-and-geometry}

Eigenvalues are counted with algebraic multiplicity. A hyperbolic equilibrium has no eigenvalue with zero real part. A Hurwitz matrix has all eigenvalues strictly in the left half-plane. Discrete-time stability uses the open unit disk. Nonnormality, pseudospectral sensitivity, and transient growth are recorded separately from eigenvalue location.

For periodic motion, a Floquet multiplier one represents the flow direction. Transverse multipliers decide orbital behavior under regularity. A closed-looking numerical curve is not automatically periodic.

<a id="section-61-pde-signs"></a>
## PDE signs {#section-63-pde-signs}

This book generally uses $-\Delta$ as a nonnegative elliptic operator. Conservation laws use $u_t+f(u)_x=0$. Diffusive flux signs and outward normals are rederived in each boundary balance rather than inferred from memory. Rankine–Hugoniot signs follow the written conservation form.

<a id="section-65-probability-and-long-time-language"></a>
## Probability and long-time language {#section-67-probability-and-long-time-language}

Invariant, ergodic, mixing, almost every, expectation, and entropy are relative to a named probability measure. Topological entropy and metric entropy are distinct. A physical measure requires a basin relative to a named reference volume. “Typical” is used only after its topological or measure meaning is specified.

<a id="section-69-computation-convention"></a>
## Computation convention {#section-71-computation-convention}

Every computation distinguishes:

1. model error;
2. discretization error;
3. algebraic iteration error;
4. floating-point error;
5. output sensitivity.

Step or mesh refinement holds the physical problem fixed. Solver tolerances are refined independently. Discrete mass, energy, symplecticity, positivity, entropy, and rank checks support different claims and cannot substitute for each other.

<a id="section-81-exercise-solutions"></a>
## Exercise solutions {#section-83-exercise-solutions}

Complete solutions state the decisive reasoning, check hypotheses, and interpret the result. A numerical solution includes an algorithm, parameters, refinement or residual, and a sentence saying what remains unproved. A counterexample identifies exactly which omitted hypothesis it defeats. Project solutions are reproducibility specifications rather than a single expected plot.

<a id="section-85-status-labels"></a>
<a id="section-87-status-labels"></a>
