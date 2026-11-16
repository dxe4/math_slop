
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, domain conventions, and ambiguity policies.

## Particle mechanics notation

### Coordinates and velocities

- $q = (q_{1}, \dots, q_{n})$: generalized coordinates on a configuration manifold $Q$.
- $\dot{q}_{i} = dq_{i}/dt$: generalized velocity.
- $p_{i} = \partial L/\partial \dot{q}_{i}$: generalized momentum conjugate to $q_{i}$.
- $z = (q, p) \in \mathbb{R}^{2n}$: phase-space coordinates.

### Lagrangian and Hamiltonian objects

- $L(q, \dot{q}, t)$: Lagrangian, typically $L = T - V$.
- $S[q] = \int_{t_{0}}^{t_{1}} L(q, \dot{q}, t)\,dt$: action functional.
- $H(q, p, t) = \sum_{i} p_{i}\dot{q}_{i} - L$: Hamiltonian, defined by the Legendre transform.
- $E = \sum_{i}\dot{q}_{i}p_{i} - L$: energy function (equals $H$ when the Legendre transform is invertible).

### Brackets and differential operators

- $\{f, g\} = \sum_{i}\left(\frac{\partial f}{\partial q_{i}}\frac{\partial g}{\partial p_{i}} - \frac{\partial f}{\partial p_{i}}\frac{\partial g}{\partial q_{i}}\right)$: Poisson bracket.
- $\partial_{\mu} = \partial/\partial x^{\mu}$: spacetime partial derivative.
- $\nabla f$: gradient of a scalar function $f$.
- $\nabla \cdot \mathbf{F}$: divergence of a vector field $\mathbf{F}$.

## Geometric notation

### Manifolds and forms

- $M$: a smooth manifold.
- $T_{x}M$: tangent space at $x \in M$.
- $T^{*}M$: cotangent bundle.
- $\omega$: symplectic form, a closed ($d\omega = 0$), nondegenerate 2-form.
- $\omega = \sum_{i} dq_{i} \wedge dp_{i}$: standard symplectic form on $\mathbb{R}^{2n}$ in Darboux coordinates.
- $\iota_{X}\omega$: interior product (contraction) of vector field $X$ with form $\omega$.
- $d$: exterior derivative, satisfying $d^{2} = 0$.
- $\wedge$: wedge product of differential forms.

### Lie groups and algebras

- $G$: Lie group.
- $\mathfrak{g} = T_{e}G$: Lie algebra of $G$.
- $[X, Y]$: Lie bracket. For matrix Lie groups, $[X, Y] = XY - YX$.
- $\exp: \mathfrak{g} \to G$: exponential map.
- $\mathfrak{so}(3)$: Lie algebra of $SO(3)$, the space of $3 \times 3$ real antisymmetric matrices.
- $\mathfrak{su}(2)$: Lie algebra of $SU(2)$, the space of $2 \times 2$ traceless anti-Hermitian matrices.
- $\mu: M \to \mathfrak{g}^{*}$: moment map for a symplectic group action.

### Tensors and indices

- $\delta_{ij}$ or $\delta^{i}_{\phantom{i}j}$: Kronecker delta.
- $\epsilon_{ijk}$: Levi-Civita symbol, with $\epsilon_{123} = 1$.
- $g_{\mu\nu}$: metric tensor. In flat spacetime, $\eta_{\mu\nu} = \mathrm{diag}(1, -1, -1, -1)$ (mostly-minus convention).
- $A^{T}$: matrix transpose.
- $A^{\dagger}$: Hermitian conjugate (conjugate transpose).

## Field theory notation

- $\phi_{a}(x)$: field, where $x = (t, \mathbf{x})$ is a spacetime point and $a$ is a discrete index.
- $\mathcal{L}(\phi, \partial\phi, x)$: Lagrangian density.
- $S[\phi] = \int_{\Omega} \mathcal{L}\,d^{4}x$: field-theoretic action.
- $F_{\mu\nu} = \partial_{\mu}A_{\nu} - \partial_{\nu}A_{\mu}$: electromagnetic field strength tensor.
- $T^{\mu}_{\phantom{\mu}\nu}$: energy-momentum tensor.
- $j^{\mu}$: Noether current.
- $Q = \int j^{0}\,d^{3}x$: conserved charge.

## Numerical and perturbation notation

- $\epsilon$: small perturbation parameter.
- $O(\epsilon^{k})$: terms of order $\epsilon^{k}$ and higher.
- $h$: time step in numerical integration.
- $\Phi_{h}$: one-step numerical map with step size $h$.
- $\tilde{H}_{h}$: modified Hamiltonian in backward error analysis.

## Domain and unit conventions

- **Units:** Particle-mechanics chapters use SI units unless otherwise stated. Field-theory chapters use natural units $c = 1$ and, where noted, $\hbar = 1$.
- **Angles:** Radians are the default unit for angles. Degrees are used only when explicitly labeled, e.g., $30^{\circ}$.
- **Time:** $t$ denotes physical time. In numerical chapters, $t_{n} = t_{0} + nh$ denotes discrete time levels.
- **Summation:** The Einstein summation convention is used in field theory and geometric chapters. In particle mechanics, sums are often written explicitly for clarity.

## Ambiguity policies

- **$S$ for action vs.~$S$ for generating function:** In Hamilton--Jacobi theory, $S(q, P, t)$ is Hamilton's principal function. It is related to, but distinct from, the action functional $S[q]$. The text signals which meaning is intended by the argument type: function arguments $(q, P, t)$ for the principal function, functional brackets $S[q]$ for the action.
- **$L$ for Lagrangian vs.~$L$ for angular momentum:** $L$ always denotes the Lagrangian. Angular momentum is denoted $\mathbf{L}$ or $L_{z}$ with a subscript.
- **$H$ for Hamiltonian vs.~$H$ for Hessian:** $H$ denotes the Hamiltonian. The Hessian matrix of second derivatives is written $\partial^{2}L/\partial\dot{q}_{i}\partial\dot{q}_{j}$ or $W_{ij}$.
- **Poisson bracket vs.~commutator:** $\{f, g\}$ is the Poisson bracket. $[X, Y]$ is the Lie bracket or commutator. The text never uses $[\cdot, \cdot]$ for the Poisson bracket.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
