
# Finite-Volume and Finite-Element Methods

## Purpose, prerequisites, and numerical contract

The prerequisite is **Boundary-Value and Field Discretizations**
(`boundary-value-pde-methods`). We use its flux balances, weak forms, sparse
linear systems, and distinction between consistency, stability, and
convergence. Familiarity with norms and basic multivariable calculus is also
assumed. This chapter turns those ideas into two complete algorithm families:
cell-centered finite volumes and conforming finite elements.

The prototype problem is

\[
-\nabla\!\cdot(\kappa\nabla u)+cu=f\quad\hbox{in }\Omega,
\qquad u=g_D\quad\hbox{on }\Gamma_D,
\qquad -\kappa\nabla u\cdot n=g_N\quad\hbox{on }\Gamma_N.
\]

Assume that \(\Omega\) is a bounded connected polygonal domain, its boundary is split into
measurable Dirichlet and Neumann parts, \(\kappa\) is measurable with
\(0<\kappa_{\min}\le \kappa(x)\le \kappa_{\max}\), and \(c\ge 0\) is bounded. If \(\Gamma_D\) has
positive boundary measure, these hypotheses give the coercivity used below. For disconnected \(\Omega\), require such Dirichlet anchoring on every component unless a coercive reaction term controls it.
For a pure Neumann diffusion problem with \(c=0\), require \(\int_{\Omega_j}f\,dx=\int_{\partial\Omega_j}g_N\,ds\) and a zero-mean gauge on each connected component \(\Omega_j\).
On two disjoint unit squares with \(c=0\) and homogeneous Dirichlet data only on the first, \(u=0\) on the first and \(u=1\) on the second has zero energy but nonzero \(H^1\) norm.
A sufficiently positive reaction term can instead restore coercivity and uniqueness without a gauge.  Smooth-error rates
require more regularity and a regular mesh; the
basic conservation and existence statements do not.

Four questions must remain separate:

1. **Consistency:** does the discrete flux or weak residual approach the
   continuous one on smooth functions?
2. **Stability:** can data and local defects be amplified without a
   mesh-independent bound?
3. **Conservation:** do internal numerical fluxes cancel exactly?
4. **Approximation:** can the chosen cells or trial space represent the
   solution accurately?

A small linear residual addresses none of these alone. It only says that the
assembled algebraic equations were approximately solved.

## Cell balances and a finite-volume algorithm

Let a mesh partition \(\Omega\) into nonoverlapping control volumes \(K\). Integrate
the equation over a cell and apply the divergence theorem:

\[
\sum_{\sigma\subset\partial K}
 \int_\sigma -\kappa\nabla u\cdot n_{K\sigma}\,ds
+\int_K cu\,dx=\int_K f\,dx.
\]

Define one numerical face flux \(F_{K,\sigma}\) with the orientation outward from
\(K\). For an interior face shared by \(K\) and \(L\), impose

\[
F_{K\sigma}=-F_{L\sigma}.
\]

This antisymmetry, not a limiting argument, is the source of exact discrete
conservation. The paired *symbolic* contributions cancel exactly when one
stored face flux is inserted with opposite signs. A floating-point diagnostic
that later sums assembled cell residuals can still depend on reduction order
and rounding; it must use a declared accumulator and report its arithmetic
bound rather than promise bit-for-bit zero.

On a one-dimensional grid with cell centers \(x_i\), faces \(x_{i+1/2}\), widths
\(\Delta x_i\), and cell averages \(U_i\), a two-point diffusive flux is

\[
F_{i+1/2}=-T_{i+1/2}(U_{i+1}-U_i).
\]

For constant \(\kappa\) and center distance \(d_{i+1/2}\), the transmissibility is
\(T=\kappa/d\). For piecewise constant conductivity, treating the two half-cells
as resistors in series gives

\[
T_{i+1/2}=
\left(\frac{d_i}{\kappa_i}+\frac{d_{i+1}}{\kappa_{i+1}}\right)^{-1},
\]

where \(d_i\) and \(d_{i+1}\) are center-to-face distances. An arithmetic average
is generally wrong across a large jump because it does not reproduce a
constant flux through layered material.

The discrete cell equation is

\[
F_{i+1/2}-F_{i-1/2}+c_i|K_i|U_i=f_i|K_i|.
\]

An implementable assembly is therefore:

1. number cells, boundary faces, and internal faces;
2. accumulate one source integral per cell;
3. for every internal face, add the same transmissibility block with opposite
   orientations to the two rows;
4. add boundary fluxes or eliminate Dirichlet boundary values consistently;
5. solve the sparse system and report its scaled residual;
6. recompute every cell-balance defect and the global boundary balance.

### Worked example 1: three-cell diffusion

Discretize \(-u''=2\) on \((0,1)\) with \(u(0)=u(1)=0\) using three equal cells of
width \(h=1/3\) and cell-centered unknowns. The boundary center-to-face distance
is \(h/2\), so boundary transmissibility is \(2/h=6\); each internal
transmissibility is \(1/h=3\). The system is

\[
\begin{pmatrix}9&-3&0\\-3&6&-3\\0&-3&9\end{pmatrix}
\begin{pmatrix}U_1\\U_2\\U_3\end{pmatrix}
=\frac23\begin{pmatrix}1\\1\\1\end{pmatrix}.
\]

Symmetry gives \(U_1=U_3=a\) and \(U_2=b\). The equations reduce to
\(9a-3b=2/3\) and \(-6a+6b=2/3\), hence \(b-a=1/9\) and
\(6a-1/3=2/3\). Thus

\[
(U_1,U_2,U_3)=(1/6,5/18,1/6).
\]

These values are the solution of the declared cell-centered balance with its
boundary closure; they are not exact cell averages of \(u=x(1-x)\). The exact
averages are \((7/54,13/54,7/54)\), while center samples are
\((5/36,1/4,5/36)\). Distinguishing these three data types is part of the
discretization audit.

### Worked example 2: a conductivity jump

Two half-cells meet at a face. Their conductivities are \(1\) and \(100\), and
each center lies \(0.25\) from the face. The correct transmissibility is

\[
T=(0.25/1+0.25/100)^{-1}=1/0.2525\approx3.960396.
\]

If the cell values differ by \(U_R-U_L=2\), the left-to-right flux magnitude is
\(7.920792\). Using arithmetic conductivity \(50.5\) over center distance \(0.5\)
would give \(T=101\) and flux magnitude \(202\), over twenty-five times too large.
The harmonic construction encodes continuity of normal flux even though the
gradient jumps.

## Consistency and geometry limits of two-point fluxes

For a smooth one-dimensional solution on a uniform grid, centered difference
of face fluxes has local truncation error \(\mathcal O(h^{2})\) when \(\kappa\) and \(u\) have
enough bounded derivatives. In several dimensions, a two-point flux is
consistent on an orthogonal mesh when the segment joining neighboring cell
centers is normal to their shared face. On a skew mesh that geometric identity
fails. Then a two-point formula can be conservative yet inconsistent.
Multipoint fluxes, gradient reconstruction, or a different mesh may be needed.

For transient conservation laws

\[
u_t+\nabla\cdot q(u)=s,
\]

forward Euler applied to cell averages gives

\[
U_K^{n+1}=U_K^n-
\frac{\Delta t}{|K|}\sum_{\sigma\subset\partial K}
|\sigma|\widehat q_{K\sigma}^n+\Delta t\,s_K^n.
\]

A numerical flux must be consistent, meaning
\(\widehat q(a,a;n)=q(a) \cdot n\), and conservative across internal faces. Monotonicity
and a Courant restriction can give an \(l^{1}\) or maximum-norm stability property
for scalar problems. Those hypotheses are problem- and flux-specific.

### Worked example 3: upwind transport and mass conservation

For \(u_t+a u_x=0\) with \(a>0\), uniform \(h\), periodic boundaries, and
\(\nu=a \Delta t/h\), upwinding yields

\[
U_i^{n+1}=(1-\nu)U_i^n+\nu U_{i-1}^n.
\]

Take four cells, \(U^{0}=(1,0,0,0)\), and \(\nu=1/2\). One step gives
\(U^{1}=(1/2,1/2,0,0)\) and a second gives
\(U^{2}=(1/4,1/2,1/4,0)\). Every value remains in \([0,1]\) because each update is a
convex combination when \(0\le \nu\le 1\). The sums are all \(1\), since shifting the
periodic index does not change the sum. If \(\nu=1.2\), the coefficient
\(1-\nu=-0.2\) permits negative values; consistency and conservation still hold,
but this monotonicity argument does not.

## Weak form and conforming finite elements

Let

\[
V=\{v\in H^{1}(\Omega):v=0\text{ on }\Gamma_D\}.
\]

Choose a lift \(G \in H^{1}(\Omega)\) whose trace on \(\Gamma_D\) is \(g_D\), write the
total field as \(u=G+w\), and seek \(w \in V\) such that

\[
a(w,v)=\ell(v)-a(G,v)\quad\text{for every }v\in V,
\]

with

\[
a(w,v)=\int_\Omega \kappa\nabla w\cdot\nabla v+cwv\,dx,
\qquad
\ell(v)=\int_\Omega fv\,dx-\int_{\Gamma_N}g_Nv\,ds.
\]

The sign of the Neumann term follows the convention
\(-\kappa \nabla u \cdot n=g_N\); changing the prescribed-flux convention changes
that sign. Under the coefficient and boundary hypotheses stated at the start,
\(a\) is continuous and coercive in the \(H^{1}\) norm on \(V\) in the Dirichlet/reaction case; for pure Neumann diffusion take \(G=0\) and use its componentwise zero-mean subspace.
The correction \(w\), and hence \(u=G+w\), is unique in the specified space with compatible data.

Triangulate \(\Omega\) with a conforming, shape-regular mesh. Let \(V_h\) contain
continuous functions that are affine on each triangle and vanish on the
Dirichlet boundary. With nodal basis functions \(\phi_j\), write the discrete
correction as \(w_h=\sum_j U_j \phi_j\) and the total field as \(u_h=G+w_h\).
Testing with every basis function gives

\[
AU=b,\qquad
A_{ij}=a(\phi_j,\phi_i),\qquad
b_i=\ell(\phi_i)-a(G,\phi_i).
\]

Assembly loops over elements. For each triangle \(T\), compute a local matrix
and vector, then scatter their entries through the local-to-global node map.
Dirichlet values may be eliminated before solving or imposed by a symmetric
row-and-column modification. Merely overwriting rows can destroy symmetry and
confuse solvers, even if the solution values happen to be correct.

### Reference-element derivation

For a one-dimensional element \([x_i,x_{i+1}]\) of length \(h_e\), the two local
linear basis functions have derivatives \(-1/h_e\) and \(1/h_e\). With constant
\(\kappa\), direct integration gives

\[
K^{(e)}=\frac{\kappa}{h_e}
\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.
\]

For a reaction term with constant \(c\),

\[
M^{(e)}=\frac{c h_e}{6}
\begin{pmatrix}2&1\\1&2\end{pmatrix}.
\]

If \(f\) is constant on the element, its load vector is
\((f h_e/2)(1,1)^{\mathsf T}\). These formulas should be unit-tested before introducing
general quadrature or curved coordinate maps.

### Worked example 4: two linear elements

Solve \(-u''=1\) on \((0,1)\) with zero endpoint values using nodes
\(0,1/2,1\). Only the midpoint coefficient is unknown. Each element has
\(h_e=1/2\); its stiffness is
\(2\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\). Assembly gives the midpoint diagonal \(4\). The two element
load contributions are each \(h_e/2=1/4\), so the midpoint load is \(1/2\).
Consequently \(4U_1=1/2\) and \(U_1=1/8\). The exact solution
\(u=x(1-x)/2\) also has \(u(1/2)=1/8\), although the piecewise-linear field does
not equal the quadratic between nodes.

### Worked example 5: energy error from an interpolant

For that same exact solution, the finite-element function is its nodal
interpolant: its derivative is \(1/4\) on \((0,1/2)\) and \(-1/4\) on \((1/2,1)\).
The exact derivative is \(u'=1/2-x\). On the first half,

\[
\int_0^{1/2}(1/2-x-1/4)^2dx
=\int_0^{1/2}(1/4-x)^2dx=1/96.
\]

Symmetry doubles this value, so
\(\lVert u'-u_h'\rVert_{L2}^{2}=1/48\) and the energy seminorm error is
\(1/(4 \sqrt{3})\approx 0.144338\). This example distinguishes an exact nodal value from
an exact field.

## Galerkin stability and error statements

Galerkin orthogonality is immediate:

\[
a(u-u_h,v_h)=0\quad\text{for every }v_h\in V_h.
\]

If \(a\) has continuity constant \(M\) and coercivity constant \(\alpha\), then

\[
\|u-u_h\|_V=\|w-w_h\|_V\le \frac{M}{\alpha}
\inf_{v_h\in V_h}\|w-v_h\|_V.
\]

Equivalently, the infimum may be taken over total discrete fields
\(z_h \in G+V_h\) as \(\inf \lVert u-z_h\rVert_V\); it is not an infimum over the
zero-trace space for the nonhomogeneous total field.

This quasi-optimality result requires a conforming subspace and exact enough
evaluation of the forms. For symmetric diffusion with the energy norm induced
by \(a\), the Galerkin solution is the energy projection and the factor improves
to one. An \(\mathcal O(h)\) energy-error rate for affine elements additionally requires
\(u \in H^{2}(\Omega)\) and a shape-regular mesh family. Nonconvex corners,
coefficient interfaces, anisotropic slivers, or insufficient quadrature may
invalidate that rate without invalidating the method itself.

For nonsymmetric transport terms, coercivity can weaken or disappear.
Oscillations then signal a stability mismatch rather than merely an inaccurate
linear solve. Stabilized formulations change the discrete weak problem and
must state their consistency and parameter scaling.

## Quadrature, mass matrices, and time dependence

Numerical quadrature changes both load and matrix. A quadrature rule exact for
polynomials through degree \(r\) does not automatically integrate a variable
coefficient or curved mapping exactly. Treat quadrature error as a component
of the discretization ledger. Record the rule and evaluation points.

For \(u_t-\operatorname{div}(\kappa \nabla u)=f\), a spatial Galerkin discretization produces

\[
M\dot U+KU=F,
\qquad M_{ij}=\int_\Omega\phi_j\phi_i\,dx.
\]

The consistent mass matrix is sparse but not diagonal. Mass lumping replaces
it by a diagonal approximation, making explicit updates cheaper and sometimes
supporting positivity, at the cost of a changed spatial approximation.

### Worked example 6: consistent versus lumped mass

On one interval of length \(h=1/2\), the local consistent mass matrix is

\[
M^{(e)}=\frac{h}{6}\begin{pmatrix}2&1\\1&2\end{pmatrix}
=\begin{pmatrix}1/6&1/12\\1/12&1/6\end{pmatrix}.
\]

Row-sum lumping produces \(\operatorname{diag}(1/4,1/4)\). Both matrices integrate total mass
correctly because the sum of all entries is \(h=1/2\). They act differently on
the vector \((1,-1)\): the consistent result is \((1/12,-1/12)\), while the lumped
result is \((1/4,-1/4)\). Thus matching total mass is not equality as operators.

## Stability through discrete energies and monotonicity

For pure diffusion with homogeneous Dirichlet data, both the orthogonal
two-point finite-volume matrix and the conforming finite-element stiffness
matrix often satisfy an energy identity. In the finite-volume case, multiply
each zero-source cell equation by \(U_K\) and sum. Pairing the two orientations
of each internal face gives terms of the form

\[
T_{KL}(U_K-U_L)^{2}.
\]

Boundary faces contribute \(T_{K,b} U_K^{2}\). If every transmissibility is
positive and each connected component reaches a Dirichlet boundary, the sum
vanishes only for \(U=0\). This proves uniqueness and positive definiteness in a
mesh-dependent inner product. It also explains why a negative transmissibility
caused by an invalid geometric formula is dangerous: the energy proof breaks.

For finite elements, the corresponding identity is

\[
U^T A U=a(u_h,u_h)
\ge \alpha\|u_h\|_V^{2}.
\]

Coercivity therefore supplies a stability estimate
\(\lVert u_h\rVert_V\le \lVert \ell\rVert_{V'}/\alpha\). The constant must be uniform over the mesh
family for a convergence conclusion. A matrix can be nonsingular on every
individual mesh while its inverse norm grows too quickly as the mesh changes.

A different property, the **discrete maximum principle**, requires more than
positive definiteness. A sufficient algebraic pattern for a scalar Dirichlet
problem is a matrix with positive diagonal, nonpositive off-diagonal entries,
appropriate row sums, and an inverse with nonnegative entries. Acute or
nonobtuse mesh-angle conditions can enforce such a pattern for simple
diffusion finite elements. General anisotropic coefficients and obtuse
triangles need not. Failure of this sufficient condition does not prove that a
computed solution is wrong, but it removes a common nonoscillation guarantee.

### Worked example 7: energy identity for two cells

Let two cell unknowns have boundary transmissibilities \(b_1,b_2>0\) and shared
internal transmissibility \(T>0\). Their diffusion matrix is

\[
A=\begin{pmatrix}b_1+T&-T\\-T&b_2+T\end{pmatrix}.
\]

For \(U=(p,q)^{\mathsf T}\), direct expansion gives

\[
U^TAU=b_1p^{2}+b_2q^{2}+T(p-q)^{2}.
\]

All three terms are nonnegative and the first two force \(p=q=0\) when the sum
is zero. Hence \(A\) is positive definite. With \(b_1=b_2=T=1\), its eigenvalues
are \(1\) and \(3\); the constant-like mode \((1,1)\) is controlled only by the
boundary terms, while the difference mode \((1,-1)\) also pays internal energy.

## A two-dimensional element calculation

For a triangle \(T\) with vertices \((x_i,y_i)\), its affine basis functions have
constant gradients. If

\[
B=\begin{pmatrix}
x_2-x_1&x_3-x_1\\
y_2-y_1&y_3-y_1
\end{pmatrix},
\]

then mapping the reference triangle to \(T\) transforms gradients by
\(B^{-T}\) and area by \(\lvert \operatorname{det} B\rvert\). For scalar constant conductivity,

\[
K_{ij}^{(T)}=\kappa |T|\,\nabla\phi_j\cdot\nabla\phi_i.
\]

This formula has three invariants worth testing: symmetry, zero row sums, and
positive semidefiniteness. A reversed vertex order changes the sign of
\(\operatorname{det} B\), but physical area uses its absolute value. Gradients must still be
computed from the signed mapping consistently; mixing the two conventions can
create negative energy.

### Worked example 8: reference right triangle

On the triangle with vertices \((0,0),(1,0),(0,1)\), the basis functions are
\(\phi_1=1-x-y\), \(\phi_2=x\), and \(\phi_3=y\). Their gradients are
\((-1,-1)\), \((1,0)\), and \((0,1)\), and the area is \(1/2\). With \(\kappa=1\),

\[
K^{(T)}=\frac12
\begin{pmatrix}
2&-1&-1\\
-1&1&0\\
-1&0&1
\end{pmatrix}.
\]

Every row sums to zero. For any coefficient vector \(z\),
\(z^{\mathsf T} K z=\int_T \lvert \nabla(\sum z_i \phi_i)\rvert^{2} dx\ge 0\). The trace is \(2\), so the two
nonzero eigenvalues sum to \(2\); the zero eigenvector is \((1,1,1)\).

## Boundary data and local conservation nuances

At a finite-volume Dirichlet boundary, a center-to-boundary flux must use the
actual half-cell distance. Reusing an internal center-to-center distance often
halves the boundary transmissibility and can reduce accuracy globally. A
Neumann value enters as a prescribed oriented face flux. For pure Neumann
data with zero reaction, summing cell equations on each connected component exposes compatibility exactly:
each component's total source must equal its total prescribed outward flux under the chosen signs.

Conforming continuous finite elements impose Dirichlet values through traces
and include Neumann data naturally in the load functional. They conserve the
weak balance globally, but a raw conforming solution need not give equal and
opposite pointwise fluxes on every element face: its normal derivative can
jump. Local conservative fluxes can be recovered through equilibration or a
mixed method in which flux is an independent unknown. It is therefore too
broad to say simply that finite elements are nonconservative. One must specify
the control volumes, reconstructed flux, and sense of conservation.

Mixed methods rewrite diffusion using \(q=-\kappa \nabla u\) and solve

\[
\kappa^{-1}q+\nabla u=0,
\qquad \nabla\cdot q=f.
\]

Compatible flux spaces enforce continuity of normal flux and cellwise balance.
Their stability is governed by an inf-sup condition, not the coercivity
argument used for the primal conforming method. This chapter does not derive a
mixed element family, but the distinction matters when exact local balance is
a primary output.

## From local consistency to convergence

For the one-dimensional Dirichlet diffusion problem with sufficiently smooth
solution, uniformly positive smooth coefficient, and a quasi-uniform grid,
the centered two-point scheme has a second-order local defect. A discrete
maximum principle or energy estimate bounds the inverse operator uniformly in
the matching norm. Applying that bound to the error equation gives convergence
of the cell or point values. The argument has three explicit links:

\[
A_h I_h u-b_h=\tau_h,
\qquad A_h(I_h u-U_h)=\tau_h,
\qquad
\|I_h u-U_h\|\le C\|\tau_h\|.
\]

Here \(I_h u\) is the exact solution represented at discrete locations and
\(\tau_h\) is the truncation defect. The constant \(C\) must not deteriorate as
\(h\) tends to zero. In multiple dimensions, geometry and norms alter both the
consistency estimate and the stability proof.

For conforming Galerkin methods, consistency is built into using the same weak
form: the exact weak solution satisfies the discrete test equations. Galerkin
orthogonality plus approximation then gives the energy-norm rate. An \(L^{2}\)
rate one order higher is often obtained through a dual problem, but it needs
elliptic regularity of that dual solution. On a nonconvex polygon that
regularity may fail. Report observed \(L^{2}\) order without claiming the smooth-
domain theorem when its hypotheses are absent.

### Worked example 9: residual amplification versus truncation

Suppose a mesh sequence has truncation bounds \(\lVert \tau_h\rVert\le 3h^{2}\). If a stable
inverse estimate gives \(\lVert A_h^{-1}\rVert\le 5\), then
\(\lVert I_h u-U_h\rVert\le 15h^{2}\). Halving \(h\) reduces this bound by a factor of four.
If instead the available inverse bound grows as \(1/h\), the same calculation
only gives \(3h\); local second-order consistency alone would then support just
a first-order bound in these norms. This is why an order label cannot be read
from a stencil without its stability setting.

## Implementation invariants and independent checks

A robust implementation separates mesh topology, local mathematics, global
assembly, constraints, solution, and diagnostics. The following checks are
small enough to run on every change:

1. each internal face has exactly two incident cells and its two oriented
   contributions sum to zero;
2. each affine-element gradient sums to zero because
   \(\sum_i \phi_i=1\);
3. every pure-diffusion local matrix is symmetric, has row sums near zero, and
   has nonnegative quadratic forms on test vectors;
4. assembled indices are invariant under a permutation of element order;
5. changing vertex orientation does not change the physical element matrix;
6. constrained degrees of freedom reproduce the prescribed trace exactly;
7. the independently recomputed residual agrees with the solver's reported
   residual after accounting for scaling;
8. global finite-volume source and boundary flux agree to the declared
   arithmetic tolerance.

For a sparse iterative solver, also report the preconditioned residual used to
stop and an unpreconditioned physical residual. A preconditioner changes the
route to the answer, not the finite-volume balance or Galerkin equation being
solved. If a direct solver is used, iterative refinement can expose a poorly
scaled factorization, but mesh refinement is still needed to assess field
error.

## Choosing a field discretization responsibly

Finite volumes are a natural first choice when the primary contract is a local
balance of mass, charge, heat, or another conserved quantity, especially when
coefficients jump across cell faces. That recommendation assumes the mesh and
flux reconstruction fit the operator. A two-point flux on a highly nonorthogonal
grid can be inferior to a variational method even though its balance ledger is
perfect. If positivity is essential, verify a monotonicity theorem for the
specific flux, mesh, and time update rather than relying on the method family's
name.

Conforming finite elements are a natural first choice when the weak solution
space, energy norm, complex geometry, or systematic polynomial enrichment is
central. They provide a direct route from a coercive weak form to a stable
algebraic problem. They do not automatically supply cellwise conservative raw
fluxes or a maximum principle. If either property is required, choose an
appropriate mixed, discontinuous, stabilized, or flux-reconstruction variant
and state its additional unknowns and hypotheses.

The two families can coincide algebraically in special cases. On a uniform
one-dimensional mesh with constant diffusion, linear finite elements and a
centered flux or difference method produce the same tridiagonal stiffness
pattern after compatible choices of unknown location and load approximation.
This coincidence does not extend automatically to variable coefficients,
different quadrature, unstructured grids, or different boundary treatments.
Compare assembled operators rather than assuming equivalence from similar
three-point rows.

A practical decision record should answer five questions. What mathematical
quantity must be preserved? In which norm will accuracy be judged? Which
regularity can the true solution plausibly have? Which mesh geometries can be
generated with controlled quality? Which diagnostic can falsify the claimed
behavior? Those answers lead to a testable method choice. Runtime, memory, and
solver compatibility then select among discretizations that meet the
mathematical contract; they should not silently redefine the contract.

### Worked example 10: two methods, two correct claims

Suppose a discontinuous-conductivity calculation gives a finite-volume field
with maximum cell-balance defect \(3\times 10^{-13}\) and energy error \(1.8\times 10^{-2}\), while a
conforming finite-element field has energy error \(9\times 10^{-3}\) and an unreconstructed
element-flux jump norm \(4\times 10^{-2}\). The finite-volume result gives stronger direct
evidence for cell conservation; the finite-element result gives smaller
measured energy error. Neither table proves that one method is universally
better. A fair local-conservation comparison would reconstruct an equilibrated
finite-element flux, and a fair accuracy comparison would use common data,
mesh budget, norm, and algebraic tolerance.

## Diagnostics and reproducibility

Common failure signatures have different causes:

- a nonzero sum of internal face fluxes indicates orientation or double-
  evaluation error;
- convergence on orthogonal grids but stagnation on skew grids suggests an
  inconsistent two-point flux;
- an indefinite diffusion stiffness matrix suggests a sign, mapping, boundary,
  or coefficient error;
- an apparent high order on one manufactured polynomial may be exact
  reproduction rather than representative convergence;
- a tiny solver residual with unchanged mesh error indicates algebraic
  oversolving;
- alternating nodal values in transport may indicate missing stabilization or
  a violated time-step restriction;
- worsening results under mesh refinement can come from deteriorating element
  shape, not from small element diameter itself.

A reproducible report records the domain and boundary split; mesh generator or
explicit mesh table; cell-center and face conventions; coefficient evaluation;
quadrature rule; local-to-global numbering; boundary elimination; sparse-solver
tolerance and norm; arithmetic precision; and exact formulas for error and
balance diagnostics. Preserve at least one tiny mesh whose complete matrix,
right-hand side, and solution appear as text. For refinement studies, publish
\(h\), degrees of freedom, error norm, residual norm, conservation defect, and
observed order. Do not report only a plot.

## Bounded project: compare conservative and variational discretizations

Implement dependency-free one-dimensional solvers for

\[
-u''=\pi^{2}\sin(\pi x),\qquad u(0)=u(1)=0,
\]

whose exact solution is \(\sin(\pi x)\). Use (a) cell-centered finite volumes with
two-point fluxes and source integrals approximated at centers, and (b)
continuous piecewise-linear finite elements with two-point Gauss quadrature
for element loads. Use uniform meshes with \(N=8,16,32,64\); no unstructured
mesh, nonlinear solve, or visualization is required.

Required numerical outputs are a text table containing method, \(N\), maximum
or nodal maximum error, discrete energy error, scaled algebraic residual,
boundary-flux balance defect, and observed order. Required structural outputs
are the full matrix and load vector for \(N=4\), a statement of whether the
matrix is symmetric positive definite after boundary treatment, and an
explanation of why finite-volume unknowns are cell values while finite-element
unknowns are nodal coefficients. Use the Thomas tridiagonal algorithm without
pivoting after verifying symmetric positive definiteness and nonzero generated
pivots on the \(N=4\) text fixture, with left-to-right
elimination and substitution in binary64, and recompute its residual by an
independently written row loop. The hard ceiling is eight solves (two methods
on four meshes), \(1024\) assembled unknowns over all runs, and one residual and
balance audit per solve. The project is complete only when successive errors
decrease and the reported balance is computed from the stored face fluxes;
there is no performance or GUI requirement.


## A full quasi-optimality proof and its dependencies

**Definition 1 (Working Sobolev space).** The space $H^1(\Omega)$ contains square-integrable functions whose first weak derivatives are square-integrable. A weak derivative is defined by integration against smooth compactly supported test functions, so piecewise affine functions with continuous traces belong to this space even though their classical derivatives jump at element edges. The subspace with zero prescribed Dirichlet trace is $V$. Trace theory and the Poincaré inequality on Lipschitz polygonal domains are external analytic facts, used under the geometric hypotheses stated above.

**Theorem 2 (Céa estimate).** Suppose $V$ is a real Hilbert space, $a$ is a bilinear form satisfying $|a(v,w)|\le M\|v\|_V\|w\|_V$ and $a(v,v)\ge\alpha\|v\|_V^2$ with $\alpha>0$, and both the continuous correction $w$ and conforming Galerkin correction $w_h\in V_h\subset V$ solve the same bounded linear functional. Then
$$\|w-w_h\|_V\le\frac M\alpha\inf_{v_h\in V_h}\|w-v_h\|_V.$$

*Proof.* Subtraction of the two weak equations gives $a(w-w_h,z_h)=0$ for all $z_h\in V_h$. Set $e=w-w_h$. For any $v_h\in V_h$,
$$\alpha\|e\|_V^2\le a(e,e)
=a(e,w-v_h)+a(e,v_h-w_h)
=a(e,w-v_h)\le M\|e\|_V\|w-v_h\|_V.$$
If $e=0$ the result is immediate. Otherwise divide by $\alpha\|e\|_V$ and take the infimum. No symmetry assumption is needed for this estimate. ∎

Continuous existence is supplied by the Lax–Milgram theorem under these Hilbert-space, boundedness and coercivity assumptions; that general theorem is cited rather than proved here. Discrete existence needs only finite-dimensional linear algebra: a zero load implies $\alpha\|w_h\|_V^2\le a(w_h,w_h)=0$, so the square Galerkin matrix has trivial kernel and is invertible. Rates still need an approximation theorem. The commonly quoted $H^1$ order one and $L^2$ order two for affine elements require the stated primal and dual regularity and a controlled mesh family; they are not conclusions of Céa alone.

The lift deserves particular care. The displayed earlier formula uses an exact lift $G$ and hence total trial set $G+V_h$. In an implementable nodal method one usually has an approximating lift $G_h$. The boundary approximation then contributes another consistency term unless $G_h$ reproduces the required trace exactly. A numerical domain approximation can add a geometry term as well. Ignoring those terms amounts to comparing two different weak problems.

## Additional flux mathematics from continuum models

For a scalar conservation law with differentiable flux $F$, the local Lax–Friedrichs flux is
$$\widehat F(a,b)=\frac{F(a)+F(b)}2-\frac{\alpha}{2}(b-a),$$
where $\alpha$ bounds $|F'|$ over the states used for the face. Equal states return $F(a)$, proving consistency. Opposite orientations use opposite signed values, proving algebraic conservation. Holding a nonnegative global $\alpha$ fixed, the derivatives are
$\partial_a\widehat F=(F'(a)+\alpha)/2\ge0$ and
$\partial_b\widehat F=(F'(b)-\alpha)/2\le0$.

The explicit update is nondecreasing in each of its three old states when $\alpha\Delta t/h\le1$: its neighbor derivatives are nonnegative and its own derivative is $1-\alpha\Delta t/h$. This proves monotonicity on a state interval where the speed bound holds. It does not prove a systems entropy theorem or justify evaluating an unbounded wave speed outside that interval. The original Lax–Friedrichs choice $\alpha=h/\Delta t$ and a local variable-speed choice are different parameter contracts.

**Worked example 11 (Lax–Friedrichs becomes upwind).** For linear transport $F(u)=au$ with $a>0$ and $\alpha=a$,
$$\widehat F(u_L,u_R)=\tfrac a2(u_L+u_R)-\tfrac a2(u_R-u_L)=au_L.$$
Thus the flux formula reduces exactly to the upwind scheme derived earlier. Choosing $\alpha>a$ adds diffusion. The limiting speed choice has a physical interpretation, but conservation alone does not identify the best speed for a nonlinear system.

A discontinuity also changes the error norm one should expect to behave smoothly. If two unit-height step functions have shocks displaced by $\delta$ on a bounded interval, their maximum-norm difference remains one for every nonzero displacement, while their $L^1$ distance is $|\delta|$ if both jumps stay in the domain. A smooth-region maximum-error theorem cannot be applied unchanged at a shock. Compare cell averages through a declared reconstruction, use an appropriate integral norm, and state the entropy or weak-solution class if claiming convergence to a conservation-law solution.

The continuum manufactured square solution is $u=\sin(\pi x)\sin(\pi y)$, with source $2\pi^2u$ and homogeneous Dirichlet data. It supplies a useful smooth two-dimensional forcing with mixed coordinate dependence. Agreement on it does not validate a constitutive model or test a reentrant corner. A constant but wrong field can even preserve the total mass of a chosen initial state; one scalar balance cannot determine a spatial field. Held-out empirical regimes address physical validation separately from manufactured-solution verification.

The finite-difference heat restriction, Crank–Nicolson stiff oscillation, four-interior-point sine solution and manufactured transient source from the two field seeds are developed in the [boundary-value chapter](boundary-value-pde-methods.md). Its hypotheses explicitly restrict unconditional stability to the appropriate linear norm and boundary setting. This keeps the field-method comparison tied to a precise shared example.

## Practice with fully worked solutions

### Exercise 1: global finite-volume balance
<a id="finite-volume-element-methods-ex-1"></a>

Suppose every cell satisfies
\(\sum_{\sigma \in \partial K} F_{K,\sigma}=S_K\) and every internal face satisfies
\(F_{K,\sigma}=-F_{L,\sigma}\). Prove the global balance.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the cell balances.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Pair opposite orientations.

</details>

<details>
<summary>Solution</summary>

**Solution.** Sum every cell equation. Each internal face appears exactly
twice, once with each orientation, and contributes zero. Only boundary-face
fluxes remain. Hence
\(\sum_{\text{boundary faces}} F_{K,\sigma}=\sum_K S_K\). The conclusion is algebraic; it
does not require mesh refinement or smoothness.

</details>

### Exercise 2: harmonic transmissibility
<a id="finite-volume-element-methods-ex-2"></a>

Two center-to-face distances are \(0.1\) and \(0.4\), with conductivities \(2\) and
\(8\). Find the transmissibility and flux for a value jump of \(3\).

<details>
<summary>Hint 1</summary>

**Hint.** Add the two series resistances.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply the declared flux orientation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Series resistance is \(0.1/2+0.4/8=0.05+0.05=0.1\), so \(T=10\).
With the flux convention \(F=-T(U_R-U_L)\), the flux is \(-30\). Reversing the face
orientation changes its sign, not its magnitude.

</details>

### Exercise 3: upwind maximum principle
<a id="finite-volume-element-methods-ex-3"></a>

Show that the periodic upwind update preserves the interval \([m,M]\) when
\(0\le \nu\le 1\).

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the two weights.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use convexity of the old interval.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each new value is
\((1-\nu)U_i+\nu U_{i-1}\), a convex combination of two values in \([m,M]\).
Therefore it also lies in \([m,M]\). For \(\nu\) outside this interval, one
coefficient is negative, so this proof and generally the bound fail.

</details>

### Exercise 4: local stiffness null vector
<a id="finite-volume-element-methods-ex-4"></a>

Show that the element diffusion matrix
\((\kappa/h)\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\) annihilates constants and is positive semidefinite.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply by the constant vector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Expand the quadratic form.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiplication by \((1,1)^{\mathsf T}\) gives zero. For \(z=(z_1,z_2)^{\mathsf T}\),
\(z^{\mathsf T} K z=(\kappa/h)(z_2-z_1)^{2}\ge 0\). It is not positive definite locally because
constants have zero gradient; global Dirichlet constraints remove the global
constant mode.

</details>

### Exercise 5: assemble three nodes
<a id="finite-volume-element-methods-ex-5"></a>

Assemble diffusion stiffness for nodes \(0,1/2,1\) with \(\kappa=1\).

<details>
<summary>Hint 1</summary>

**Hint.** Assemble local blocks.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The shared node receives two diagonal contributions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each element contributes \(2\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\). Scattering gives

\[
K=\begin{pmatrix}2&-2&0\\-2&4&-2\\0&-2&2\end{pmatrix}.
\]

Before Dirichlet conditions its rows sum to zero. Eliminating endpoint values
leaves the positive scalar matrix \((4)\).

</details>

### Exercise 6: Galerkin best approximation
<a id="finite-volume-element-methods-ex-6"></a>

Assume \(a\) is symmetric and positive definite and define
\(\lVert v\rVert_a^{2}=a(v,v)\). For the corrections \(w,w_h \in V\), show that
\(\lVert w-w_h\rVert_a\le \lVert w-v_h\rVert_a\) for every \(v_h \in V_h\).

<details>
<summary>Hint 1</summary>

**Hint.** Decompose the comparison error.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use orthogonality to remove cross terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write \(w-v_h=(w-w_h)+(w_h-v_h)\). Galerkin orthogonality makes the
two terms orthogonal in \(a\), hence
\(\lVert w-v_h\rVert_a^{2}=\lVert w-w_h\rVert_a^{2}+\lVert w_h-v_h\rVert_a^{2}\). Dropping the nonnegative second
term proves the claim.

</details>

### Exercise 7: observed order
<a id="finite-volume-element-methods-ex-7"></a>

Energy errors on meshes \(h=1/8,1/16,1/32\) are
\(0.0610,0.0307,0.0153\). Estimate two observed orders.

<details>
<summary>Hint 1</summary>

**Hint.** Take successive ratios.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Convert them to logarithms base two.

</details>

<details>
<summary>Solution</summary>

**Solution.** They are
\(\log_2(0.0610/0.0307)\approx 0.990\) and
\(\log_2(0.0307/0.0153)\approx 1.005\). The data support first-order energy convergence
over this range; they do not prove an asymptotic theorem.

</details>

### Exercise 8: pure Neumann singularity
<a id="finite-volume-element-methods-ex-8"></a>

Why is the stiffness matrix singular for a pure Neumann diffusion problem, and
what two additions make the discrete problem meaningful?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the constant mode.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compatibility and a gauge have different roles.

</details>

<details>
<summary>Solution</summary>

**Solution.** Constant finite-element functions have zero gradient, so the
stiffness matrix has the constant vector in its null space. The load must be
compatible—its discrete sum against the constant test function must vanish—
and a gauge such as zero weighted mean must select one representative.

</details>

### Exercise 9: quadrature audit
<a id="finite-volume-element-methods-ex-9"></a>

On \([0,1]\), approximate \(\int_0^{1} x^{2} dx\) by midpoint and two-point Gauss rules.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the polynomial degrees.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The mapped Gauss rule is exact through degree three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Midpoint gives \((1/2)^{2}=1/4\), an error of \(-1/12\) from the exact
\(1/3\). The two-point Gauss rule on \([0,1]\) uses nodes
\(1/2 \pm 1/(2 \sqrt{3})\) with weights \(1/2\); it is exact through degree
three and therefore returns \(1/3\). Exactness here applies to this polynomial,
not to arbitrary coefficient-times-basis products.

</details>

### Exercise 10: separate residual and field error
<a id="finite-volume-element-methods-ex-10"></a>

A refined linear solve reduces \(\lVert AU-b\rVert\) from \(10^{-8}\) to \(10^{-12}\), but the
field error stays \(2.1 \times 10^{-3}\). Interpret the result.

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish the discrete solve from its spatial approximation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Tightening algebra does not enrich the field space.

</details>

<details>
<summary>Solution</summary>

**Solution.** Algebraic error was already below the dominant discretization,
quadrature, or modeling error. The extra solve accuracy does not enrich the
space or change the operator, so the field error need not move. Refine the
mesh or formulation and audit the error estimator rather than only tightening
the solver tolerance.

</details>

## Sources

Céa's primary paper, [Approximation variationnelle des problèmes aux limites](https://www.numdam.org/articles/10.5802/aif.181/), develops variational approximation. The quasi-optimality inequality needed here is proved above. Brenner and Scott, *The Mathematical Theory of Finite Element Methods*, third edition (2008), and Ciarlet, *The Finite Element Method for Elliptic Problems*, SIAM Classics edition (2002), are further reading for Lax–Milgram, interpolation, duality and mixed-method inf-sup theory; exact theorem locators for those imported results are not asserted. Ketcheson, LeVeque and del Razo, [Approximate solvers](https://www.clawpack.org/riemann_book/html/Approximate_solvers.html), gives the author-maintained finite-volume and Lax–Friedrichs framework.

## Summary

Finite volumes obtain local balance from one shared face flux. Conforming finite elements obtain Galerkin orthogonality from a common weak form; continuity and coercivity then give the proved best-approximation estimate. Geometry, boundary lifts, quadrature, regularity and algebraic error remain explicit parts of either method. Scalar Lax–Friedrichs monotonicity adds a separate speed and time-step contract. The following chapter treats nonlinear residuals and adaptive allocation of the mesh.

The complete earlier continuum discretization source is preserved as a [registered supporting reading](retained-continuum-discretization-reading.md), including its heat-step formulas, hat-function assembly and exact four-interior-node sine comparison. It supplements this primary rather than replacing its conservation, coercivity and approximation hypotheses.
