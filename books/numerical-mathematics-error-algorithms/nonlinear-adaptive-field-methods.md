
# Nonlinear and Adaptive Field Methods

## Purpose, prerequisites, and scope

The prerequisites are **Finite-Volume and Finite-Element Methods**
(`finite-volume-element-methods`) and **Nonlinear Systems, Jacobians, and
Globalization** (`nonlinear-systems-globalization`). We use weak residuals,
conservative fluxes, conforming meshes, Newton linearization, line searches,
and scaled stopping tests. Our subject is numerical field solution after the
model and boundary data are fixed; it is not a general treatment of nonlinear
PDE theory.

The main prototype is the nonlinear diffusion-reaction problem

\[
-\nabla\cdot(k(u,x)\nabla u)+r(u,x)=f
\quad\text{in }\Omega,
\qquad u=g_D\quad\text{on }\partial\Omega.
\]

For the cleanest statements, assume \(\Omega\) is bounded and polygonal,
\(k(s,x)\) is bounded above and below by positive constants, and the nonlinear
forms are continuously differentiable in the range visited by the iterates.
Uniqueness requires more, such as strong monotonicity of the full operator.
Local Newton convergence additionally requires a nonsingular derivative at
the selected solution and a locally Lipschitz derivative. Adaptivity requires
reliable indicators and a shape-regular refinement procedure. Each conclusion
below states which of these hypotheses it uses.

The computation has four nested error scales:

\[
\text{model error},\quad
\text{discretization error},\quad
\text{nonlinear iteration error},\quad
\text{linear algebra error}.
\]

Reducing an inner scale far below the next outer scale is oversolving. Stopping
a nonlinear iteration while it dominates the mesh error is undersolving.

## From a nonlinear weak form to algebraic residuals

Let \(G\) be a fixed lift of the Dirichlet values and let \(V=H_0^{1}(\Omega)\).
For a total field \(u=G+w\), define

\[
R(u;v)=\int_\Omega k(u,x)\nabla u\cdot\nabla v
+r(u,x)v-fv\,dx.
\]

The weak problem is: find \(w \in V\) with \(R(G+w;v)=0\) for every \(v \in V\).
Choose a conforming finite-element space \(V_h\) with basis \(\phi_1,\ldots,\phi_m\)
and a discrete lift \(G_h\); write the total field as
\(u_h=G_h+\sum_j U_j \phi_j\). The algebraic residual is

\[
F_i(U)=R(u_h;\phi_i).
\]

This definition is more reliable than guessing a matrix. It fixes signs,
boundary terms, coefficient evaluation, and the relationship between the
continuous and discrete nonlinear problems.

The directional derivative in direction \(w_h\) is

\[
D R(u_h;v_h)[w_h]
=\int_\Omega
k(u_h,x)\nabla w_h\cdot\nabla v_h
+k_u(u_h,x)w_h\nabla u_h\cdot\nabla v_h
+r_u(u_h,x)w_hv_h\,dx.
\]

Thus the Newton Jacobian entry is
\(J_{ij}=D R(u_h;\phi_i)[\phi_j]\). Omitting the \(k_u\) term produces a Picard-like
iteration, not Newton's method. It may still converge, but its convergence
claim and stopping interpretation must change.

## Newton, Picard, and globalization

At iterate \(U^m\), exact Newton computes

\[
J(U^m)S^m=-F(U^m),
\qquad U^{m+1}=U^m+\alpha_m S^m.
\]

Near a nonsingular solution and under a locally Lipschitz Jacobian, full steps
are quadratically convergent. Away from that neighborhood, choose \(\alpha_m\)
with a line search or trust-region rule. One possible merit function is
\(\Phi(U)=1/2 \lVert D^{-1}F(U)\rVert_2^{2}\), where \(D\) contains fixed residual scales. A
backtracking line search accepts a step only after sufficient decrease in
\(\Phi\). This globalizes a local algorithm; it does not guarantee convergence
to every solution or rescue an inconsistent discretization.

Picard iteration freezes nonlinear coefficients. For example, given \(u^m\),
solve

\[
\int_\Omega k(u^m,x)\nabla u^{m+1}\cdot\nabla v
+r_{\rm lin}(u^{m+1};u^m)v\,dx
=\int_\Omega f v\,dx.
\]

Its linear systems can be easier and preserve symmetry, but convergence is
usually linear and may require damping. A contraction proof needs an explicit
norm and a contraction constant below one on an invariant set.

### Worked example 1: scalar nonlinear finite-element residual

Take one interior degree of freedom with residual
\(F(U)=4U+U^{3}-1\). This can represent a diffusion stiffness \(4U\), a lumped cubic
reaction, and load \(1\). At \(U_0=0\), \(J(U)=4+3U^{2}\), so

\[
U_1=0-(-1)/4=0.25.
\]

Now \(F(0.25)=1+0.015625-1=0.015625\) and
\(J(0.25)=4.1875\). Hence

\[
U_2=0.25-0.015625/4.1875\approx0.246268657.
\]

Substitution gives a residual about \(1.04 \times 10^{-5}\). The decreasing residual
illustrates Newton convergence for this monotone scalar problem; it is not a
mesh-error estimate.

### Worked example 2: why damping matters

For \(F(U)=U^{3}-2U+2\), start at \(U_0=0\). Full Newton gives \(U_1=1\); from there it
gives \(U_2=0\), producing a two-cycle. At \(U_0=0\), the Newton direction is
\(S=1\). The residual-merit values are \(\Phi(0)=2\) and \(\Phi(1)=1/2\); the first
step is accepted. At \(U=1\), the full step to zero raises \(\Phi\) from \(1/2\) to
\(2\), so a sufficient-decrease line search rejects it. Backtracking does not by
itself prove eventual success, but it detects this disastrous full step.

## Conservative nonlinear finite volumes

For a cell-centered scheme, write one nonlinear face flux

\[
F_{K\sigma}(U)=-T_{K\sigma}(U)(U_L-U_K),
\qquad F_{L\sigma}(U)=-F_{K\sigma}(U).
\]

The transmissibility may depend on cell values through \(k\). Sharing the same
evaluated flux across a face preserves algebraic conservation even during a
nonlinear iterate. If each neighboring cell independently evaluates a
different coefficient, conservation can be lost before convergence and may
remain lost after an inexact solve.

The residual cell balance is

\[
F_K(U)=\sum_{\sigma\subset\partial K}F_{K\sigma}(U)
+|K|r(U_K)-|K|f_K.
\]

Differentiate the actual flux routine analytically or by automatic
differentiation to assemble the Jacobian. Use directional finite differences
only as checks; using them as derivative approximations gives an inexact or
approximate Newton method with a separate convergence contract. Lagging \(T(U)\) gives a fixed-point
method. In either case, recompute conservation defects using the nonlinear
flux at the accepted iterate, not a stale linearization.

### Worked example 3: a nonlinear two-cell balance

Let two cells have unknowns \(U_1,U_2\), boundary values zero, unit source in
each cell, and nonlinear internal transmissibility
\(T(U)=1+(U_1+U_2)/2\). Take unit boundary transmissibilities. Define

\[
F_1=U_1+T(U)(U_1-U_2)-1,
\qquad
F_2=U_2+T(U)(U_2-U_1)-1.
\]

Symmetry suggests \(U_1=U_2\). Then the internal flux vanishes and both
equations give \(U_1=U_2=1\). At this solution \(T=2\). The Jacobian is

\[
J=\begin{pmatrix}3&-2\\-2&3\end{pmatrix},
\]

because derivatives of \(T\) multiply \(U_1-U_2=0\). Its eigenvalues are \(1\) and
\(5\), so the solution is locally nonsingular. Adding the two residual equations
cancels the internal flux for every \(U\), not only at the root.

## Existence, uniqueness, and energy structure

A nonlinear algebraic solve is meaningful only if the discrete problem has a
solution, and reproducible only if the selected solution is identified. One
useful sufficient framework is strong monotonicity. Let an operator
\(A:V \to V'\) satisfy

\[
\langle A(w)-A(v),w-v\rangle
\ge m\|w-v\|_V^{2}
\quad\text{for some }m>0.
\]

Then it has at most one solution to \(A(u)=f\). Indeed, two solutions would make
the left side zero, forcing their distance to vanish. Existence also requires
continuity, coercive growth, and an appropriate finite- or infinite-dimensional
theorem; uniqueness alone does not prove existence.

For the semilinear problem

\[
-\Delta u+g(u)=f,
\]

with homogeneous Dirichlet data, if \(g\) is nondecreasing, then

\[
\int_\Omega |\nabla(w-v)|^{2}
+(g(w)-g(v))(w-v)\,dx
\ge \int_\Omega |\nabla(w-v)|^2dx.
\]

The Poincare inequality converts this gradient control into an \(H^{1}\)-type
strong monotonicity estimate. The same argument holds on a conforming
subspace, so it provides discrete uniqueness without inspecting Newton's path.

Some nonlinear residuals are gradients of an energy. If \(g=G'\), define

\[
E(u)=\int_\Omega
\frac12|\nabla u|^{2}+G(u)-fu\,dx.
\]

Its first variation is the weak residual. If \(G\) is convex, \(E\) is convex; if
the gradient term supplies strict convexity under Dirichlet conditions, the
minimizer is unique. A line search that decreases residual norm is not
necessarily an energy-decreasing method, and conversely. State which merit
quantity controls acceptance.

### Worked example 4: convex discrete energy

Let

\[
E(U)=\frac12U^TAU+\frac14\sum_iU_i^{4}-b^TU,
\]

where \(A\) is symmetric positive definite. Then
\(\nabla E=AU+U^{3}-b\) and
\(\nabla^{2} E=A+\operatorname{diag}(3U_i^{2})\). For nonzero \(z\),

\[
z^T\nabla^2E\,z=z^TAz+3\sum_iU_i^2z_i^{2}>0.
\]

Thus the energy is strictly convex and has at most one stationary point. The
Hessian is positive definite at every iterate, so the Newton direction is a
descent direction for \(E\) whenever the gradient is nonzero:
\(\nabla E^{\mathsf T} S=-\nabla E^{\mathsf T} (\nabla^2E)^{-1}\nabla E<0\).

## Positivity, admissibility, and continuation

Field coefficients may only be defined on an admissible range: density and
concentration may need to remain positive; a diffusion law may degenerate at
zero; a logarithmic energy is undefined for nonpositive arguments. An
unconstrained Newton step can leave that range even when the final solution is
admissible. A fraction-to-boundary rule chooses the largest step below one
that retains a strict margin. A variable transformation, such as \(u=\exp(w)\),
enforces positivity but changes conditioning and the Jacobian.

Continuation introduces a parameter \(\lambda\) and solves a sequence
\(F(U,\lambda_j)=0\), starting from an easier value. The previous solution is the
next initial guess. Ordinary parameter stepping can fail at a fold where the
Jacobian with respect to \(U\) is singular. Arclength continuation augments the
system with a path constraint and can pass some folds, but adds another
equation, tangent calculation, and scaling decision.

### Worked example 5: bounded Newton step

Suppose an iterate has positive components \(U=(0.2,1.0)\) and Newton direction
\(S=(-0.5,0.4)\). To retain \(U+\alpha S \ge 0.01\), the first component requires
\(0.2-0.5 \alpha\ge 0.01\), hence \(\alpha\le 0.38\); the second imposes no upper bound.
Using a safety factor \(0.9\) gives \(\alpha=0.342\). The trial state is
\((0.029,1.1368)\), still admissible. A merit-function line search may reduce
the step further; admissibility is a separate acceptance condition.

## What adaptivity is trying to control

A uniform mesh spends degrees of freedom everywhere. Adaptive refinement tries
to concentrate them where an indicator predicts large error: singular
corners, layers, fronts, coefficient jumps, or poorly resolved data. The basic
loop is

\[
\boxed{\text{SOLVE}\to\text{ESTIMATE}\to\text{MARK}\to\text{REFINE}}.
\]

For nonlinear problems, SOLVE means reduce nonlinear and algebraic errors
enough that the estimator reflects spatial error. ESTIMATE assigns local
nonnegative indicators \(\eta_K\). MARK selects cells. REFINE replaces them while
maintaining conformity or a documented nonconforming interface rule. Then
transfer the old solution as an initial guess and repeat.

An indicator is **reliable** if, under stated mesh, coefficient, and regularity
hypotheses,

\[
\|u-u_h\|_V\le C_{\rm rel}\eta,
\qquad \eta^{2}=\sum_K\eta_K^{2},
\]

possibly plus data oscillation and nonlinear-solve terms. It is **locally
efficient** if

\[
\eta_K\le C_{\rm eff}
\bigl(\|u-u_h\|_{V(\omega_K)}+\operatorname{osc}_{\omega_K}(f)\bigr).
\]

Reliability prevents missed error; efficiency prevents systematic overwarning.
Neither property follows from a visually plausible heat map.

## A residual estimator for diffusion

For the linear problem \(-\operatorname{div}(\kappa \nabla u)=f\) with affine conforming elements,
define the element residual

\[
R_K=f+\nabla\cdot(\kappa\nabla u_h)
\]

and, on an internal face \(e=K \cap L\), the jump as the sum of the two outward
normal traces

\[
J_e=(\kappa\nabla u_h|_K)\cdot n_K
 +(\kappa\nabla u_h|_L)\cdot n_L.
\]

A standard scaled indicator has the form

\[
\eta_K^{2}=h_K^{2}\|R_K\|_{L^{2}(K)}^{2}
+\frac12\sum_{e\subset\partial K\cap\Omega}
h_e\|J_e\|_{L^{2}(e)}^{2},
\]

with boundary-residual terms where appropriate. For nonlinear diffusion,
evaluate the strong residual and flux jump using the accepted nonlinear field,
and include a nonlinear iteration contribution if \(F(U)\) is not negligible.
The factor \(1/2\) prevents counting an internal face twice in the global sum.

For piecewise affine \(u_h\) and constant \(\kappa\) on each element, the element
Laplacian vanishes inside each element. The volume residual can still be
nonzero because \(f\) is nonzero, while missing curvature also appears through
flux jumps. This is expected, not evidence that the estimator is defective.

### Worked example 6: two-element residual indicators

On \((0,1)\), use the two-element approximation to \(-u''=1\) from the preceding
chapter: slopes are \(1/4\) and \(-1/4\), and each element has \(h_K=1/2\). Since
\(u_h''=0\) inside, \(R_K=1\). Therefore each volume contribution is

\[
h_K^{2}\|R_K\|_{L^{2}(K)}^{2}
=(1/2)^{2}(1/2)=1/8.
\]

At the midpoint, the derivative jump has magnitude
\(\lvert (-1/4)-(1/4)\rvert=1/2\). With \(h_e=1/2\) in this one-dimensional analogue, the
shared-face contribution is \((1/2)h_e J^{2}=1/16\) per neighboring element.
Thus each indicator squared is \(1/8+1/16=3/16\), and the global
\(\eta^{2}=3/8\). Constants in a rigorous one-dimensional reliability statement
depend on the precise convention; the calculation demonstrates the ledger.

## Marking and refinement

Maximum marking selects cells satisfying
\(\eta_K\ge \theta \max_L \eta_L\). A more robust bulk rule selects a smallest or
approximately smallest set \(M\) such that

\[
\sum_{K\in M}\eta_K^{2}\ge
\theta\sum_K\eta_K^{2},
\qquad 0<\theta<1.
\]

Sorting indicators from largest to smallest implements this rule
deterministically. Large \(\theta\) refines more aggressively; small \(\theta\) may
require more adaptive cycles. Convergence and optimal-complexity results need
additional estimator-reduction, quasi-orthogonality, and mesh-closure
hypotheses. Bulk marking alone is not such a theorem.

### Worked example 7: deterministic bulk marking

Suppose four squared indicators are \((9,4,1,1)\) and \(\theta=0.6\). The total is
\(15\), so the target is \(9\). Sorting selects the first cell alone, exactly
meeting the target. For \(\theta=0.8\), the target is \(12\); the first contribution
\(9\) is insufficient, and cells one and two give \(13\), so both are marked. A
deterministic tie rule, such as cell index, is needed if equal indicators meet
the cutoff.

## Mesh transfer and nested iteration

When a conforming mesh is refined by subdivision, the old affine function
often belongs exactly to the new space. Prolongation then evaluates the old
function at new nodes, preserving it as a field even though its coefficient
vector grows. This makes it an effective initial guess and ensures that a
reported improvement is not merely caused by changing the represented old
state. For cell averages, conservative transfer should preserve total mass;
copying a parent average to equal-volume children does so, while arbitrary
interpolation may not.

Coarsening is harder. Fine features are discarded, and a projection should be
chosen in a declared norm. If coarsening is permitted near a moving front,
use hysteresis so cells do not refine and coarsen on alternating cycles.
Transfer error belongs in the ledger, particularly for transient problems
where it is injected repeatedly.

### Worked example 8: exact affine prolongation

On the interval \([0,1]\), an old affine element has nodal values \((2,4)\). After
bisection, evaluating the same line at the midpoint gives new nodal values
\((2,3,4)\). The two new element slopes are both \(2\), equal to the old slope, so
the represented field and its energy are unchanged. Assigning midpoint value
\(2\) instead would introduce a kink, change energy, and contaminate comparison
before any new solve.

In one dimension, bisecting a marked interval is conforming after neighboring
closure as needed. In two dimensions, arbitrary subdivision can create hanging
nodes or increasingly thin triangles. Use a refinement rule with shape-
regularity and conformity guarantees. Closure may refine unmarked neighbors;
the report should distinguish marked and actually refined cells.

## Balancing nonlinear and spatial errors

Let \(\eta_{\mathrm{space}}\) estimate discretization error and let a scaled residual or
Newton correction estimate iteration error. One practical rule solves until

\[
\eta_{\rm nonlinear}\le\gamma\eta_{\rm space},
\qquad 0<\gamma<1,
\]

before marking. This is an engineering stopping policy, not a universal
theorem. A rigorous version must connect residual norm to field norm through a
stability or inverse-Jacobian bound.

Similarly, an inexact Newton solve may require

\[
\|J(U^m)S^m+F(U^m)\|
\le\xi_m\|F(U^m)\|.
\]

Loose \(\xi_m\) can be efficient early; it should shrink as the nonlinear solve
approaches its target. On coarse meshes, very accurate Newton solutions are
often wasted because spatial error dominates. On refined meshes, reusing the
prolongated coarse solution can put Newton quickly into its local convergence
region.

### Worked example 9: an error-budget decision

Suppose an adaptive cycle reports \(\eta_{space}=2.0\times 10^{-2}\), scaled nonlinear estimate
\(\eta_{nl}=8.0\times 10^{-3}\), and algebraic estimate \(\eta_{lin}=1.0\times 10^{-4}\). With policy
\(\eta_{nl}\le 0.2 \eta_{space}\), the nonlinear target is \(4.0\times 10^{-3}\), so another nonlinear
step is warranted. Tightening the linear solve below \(1.0\times 10^{-4}\) is unlikely to
help yet. After that step, suppose \(\eta_{nl}=9.0\times 10^{-4}\); the nonlinear error is now
below budget and refinement, rather than another Newton step, is the indicated
action.

## Goal-oriented adaptation

Sometimes the quantity of interest is not a global norm but a functional
\(Q(u)\), such as an average over a subregion or a boundary flux. Linearizing the
primal residual about \(u_h\) leads to an adjoint problem. In schematic form,

\[
R'_u(u_h;w,z)=Q'(u_h;w)
\quad\text{for every perturbation }w.
\]

The adjoint weights residual contributions by their influence on \(Q\). This can
refine a path from a local defect to a distant output. The estimator inherits
linearization, adjoint-discretization, and remainder errors. It does not imply
small global field error, and a different output may require a different mesh.

### Worked example 10: output sensitivity in a linear system

Let the discrete field equation be

\[
A U=b,
\qquad A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},
\]

and quantity \(Q(U)=U_2\). For an approximate solution with residual
\(r=b-AU_h\), solve the adjoint \(A^{\mathsf T} z=e_2\). Since \(A\) is symmetric,

\[
z=A^{-1}e_2=\frac13\begin{pmatrix}1\\2\end{pmatrix}.
\]

The exact output error is \(Q(U)-Q(U_h)=z^{\mathsf T} r\) for this linear problem. If
\(r=(0.03,-0.03)\), the output error is
\((1/3)(0.03)+(2/3)(-0.03)=-0.01\). The unweighted residual components have equal
magnitude, yet their output effects differ.

## Anisotropy, singularities, and what isotropic indicators miss

An indicator tells where error is large, not automatically how an element
should be shaped. Isotropic refinement reduces all element dimensions. It is
robust for point singularities but inefficient for a thin layer that is smooth
along its length. Anisotropic adaptation uses directional derivative or Hessian
information to stretch elements along low-curvature directions. Its analysis
requires metric-based shape conditions; extreme aspect ratios violate the
ordinary shape-regular assumptions used in residual-estimator theorems.

At a reentrant corner, the exact solution may fail to have two square-
integrable derivatives. Uniform affine elements then lose the smooth-solution
rate. Adaptive concentration near the corner can recover a better error-versus-
degrees-of-freedom curve even though no individual element uses a higher-order
polynomial. The correct comparison plots error against degrees of freedom or
work, not just adaptive-cycle number, since different cycles add different
numbers of unknowns.

Coefficient jumps need interface-aware indicators. A raw flux jump is physical
if it comes from a discontinuous coefficient times a continuous gradient only
when the true normal flux itself is discontinuous; for the usual diffusion
interface law, normal flux should be continuous while gradient may jump.
Weights involving local \(\kappa\) can make reliability constants robust to
contrast. Without such a result, an estimator that works for contrast ten
should not be assumed reliable for contrast one million.

## Adaptive convergence claims

An empirical decreasing estimator is evidence, not a general convergence
proof. Abstract adaptive analyses typically combine four ingredients:

1. stability of indicators on cells untouched by refinement;
2. reduction of indicators on refined cells;
3. discrete reliability relating two nested solutions to indicators on a
   refinement region;
4. quasi-orthogonality or an energy decrease that controls accumulated changes.

Together with bulk marking and mesh closure, these can imply contraction of a
combined error-estimator quantity. Optimal algebraic rates require an
additional approximation-class argument and complexity bound on closure.
For nonlinear operators, monotonicity and Lipschitz properties may replace
linear orthogonality. If the nonlinear systems are solved only approximately,
their iteration errors enter the contraction proof.

### Worked example 11: error versus work

Method A produces errors \((0.20,0.10,0.05)\) with degrees of freedom
\((100,400,1600)\). Method B produces \((0.20,0.08,0.032)\) with
\((100,200,400)\). Both reduce error every cycle, but cycle count hides cost.
For A, quadrupling degrees of freedom halves error, consistent with
\(E \propto N^{-1/2}\). For B, doubling degrees of freedom multiplies
error by \(0.4\), giving empirical exponent
\(-\log(0.4)/\log(2)\approx 1.322\). This short table supports better work efficiency for
B on this case, not an asymptotic optimality theorem.

## Time-dependent nonlinear adaptation

For a transient field, temporal and spatial defects interact. Refining space
without reducing the time step may expose a temporal-error floor. Changing the
mesh changes the mass matrix and transfers the state. A reproducible adaptive
time-space algorithm therefore records separate time and space indicators,
accepted and rejected time steps, every mesh change, and conservation through
transfer.

Implicit time stepping generates a nonlinear residual per step, for example

\[
F(U^{n+1})=
M(U^{n+1}-U^n)/\Delta t+G(U^{n+1})-b^{n+1}.
\]

The \(1/\Delta t\) mass contribution often improves Jacobian invertibility for
small time steps, while a large step can make Newton's initial prediction
poor. The nonlinear tolerance should be below the accepted local time-error
budget after compatible scaling. Rebuilding a spatial mesh inside a rejected
time step can make error attribution ambiguous; specify the order of decisions.

## A complete adaptive nonlinear workflow

An implementation should make state transitions explicit. Begin with a mesh
that resolves the domain and coefficient interfaces, construct an admissible
initial field, and evaluate the unscaled residual before taking a step. On
each mesh, alternate Jacobian assembly, inexact linear solution, admissibility
filtering, and merit acceptance until the declared nonlinear budget is met.
Only then compute spatial indicators, because indicators evaluated on a badly
unsolved field may mark Newton error rather than discretization error.

After marking, close the refinement set to preserve the mesh contract, refine,
and transfer the accepted field. Reapply essential boundary values after
transfer rather than assuming interpolation preserved them under a changed
boundary representation. Recompute coefficients, quadrature data, residual,
and estimator on the new mesh. Stop adaptivity when the estimator meets a
target, a degrees-of-freedom or minimum-size budget is reached, or improvement
stagnates under a declared rule. A resource limit is a legitimate stop reason;
it must not be described as mathematical convergence.

Three nested histories should remain available. The **linear history** stores
inner residuals and preconditioner changes for each Newton step. The
**nonlinear history** stores residuals, correction norms, merit values, and
accepted step lengths on each mesh. The **adaptive history** stores mesh size,
quality, estimator components, marked and refined sets, transfer defect, and
measured outputs. Flattening these into one iteration counter makes it nearly
impossible to diagnose which layer stalled.

For a termination claim, report both absolute and relative scaled criteria.
A typical correction test is

\[
\|S^m\|_D\le \tau_{\rm abs}
+\tau_{\rm rel}\|U^m\|_D,
\]

but a small correction can result from an inaccurate or nearly singular
Jacobian. Pair it with a residual criterion and an accepted-step condition.
Likewise, estimator stagnation can be caused by data oscillation or a fixed
time error, so preserve the estimator decomposition rather than only its total.

### Worked example 12: reading a nested history

On mesh 3, suppose Newton residuals are \(1.0\times 10^{-1}, 8.0\times 10^{-3}, 7.0\times 10^{-5}\), the final
linear residual is \(2.0\times 10^{-7}\), and the spatial estimator is \(4.0\times 10^{-3}\). The
nonlinear residual is now much smaller than the spatial indicator, while the
linear residual is smaller still, so refinement is sensible. On mesh 4, assume
Newton stalls at \(2.0\times 10^{-2}\) while the preliminary estimator is \(2.5\times 10^{-3}\) and step
lengths fall below \(1\times 10^{-4}\). Refining again would attack the smaller error scale.
The history instead points to globalization, admissibility, Jacobian, or
scaling diagnostics on the current mesh.

## Failure diagnostics

- **Residual stalls above target:** check inconsistent boundary conditions,
  singular Jacobians, inaccurate Jacobian terms, quadrature, and scaling before
  increasing the iteration limit.
- **Full Newton steps oscillate or diverge:** use a merit or trust-region test;
  inspect whether iterates leave the coefficient's admissible range.
- **Conservation defect persists:** ensure each internal nonlinear face flux is
  shared and recomputed at the accepted iterate.
- **Indicator marks almost everything:** the data may be globally rough, the
  estimator may be dominated by oscillation, or the initial mesh may be too
  coarse for localization.
- **Refinement chases one cell indefinitely:** inspect singular data, minimum
  mesh size, shape regularity, and whether the requested norm is finite.
- **Estimated error falls but measured error does not:** audit estimator
  hypotheses, transfer operators, quadrature, nonlinear stopping, and the
  reference solution.
- **Newton steps grow after refinement:** prolongation, boundary constraints,
  or null-space treatment may be inconsistent across meshes.
- **Goal estimate is good but the field is poor:** this can be correct; a
  goal-oriented estimator controls its specified output, not every norm.

## Reproducibility protocol

Record the nonlinear form, coefficient domain, derivative formula, quadrature,
mesh coordinates and connectivity, refinement and closure rule, tie-breaking
rule for marking, prolongation, boundary treatment, norm scaling, initial
guess, line-search constants, linear and nonlinear tolerances, maximum counts,
and arithmetic precision. For each adaptive cycle publish cells, degrees of
freedom, marked cells, refined cells, minimum element quality, residual norm,
linear residual, estimator and its volume/jump split, accepted step lengths,
and target quantity if used.

Keep exact text fixtures: one local residual/Jacobian pair, one global small
matrix, one marking list, and one conservation sum. Verify a Jacobian by the
directional quotient

\[
\frac{F(U+\varepsilon p)-F(U)}{\varepsilon}
\]

over a range of \(\epsilon\). Initially the difference from \(J(U)p\) should shrink
approximately linearly; eventually rounding and cancellation dominate. One
epsilon is not a convincing derivative test.


## Three finite-dimensional results behind the workflow

The nonlinear residual and Jacobian formulas are literal differentiable maps after choosing a finite mesh and quadrature. At the continuous level, positive bounded $k(s,x)$ and pointwise differentiability alone do not establish that every displayed expression is a bounded operator on all of $H^1$. Dimension, coefficient growth, solution bounds and Sobolev multiplication matter. Interpret continuous statements on a space where the forms are well-defined and bounded; the following proofs use a finite-dimensional Euclidean space with a stated norm. Existence or uniqueness for a general nonlinear PDE is not inferred from successful Newton iterations.

**Theorem 1 (Local Newton error).** Let $F:\mathbb R^m\to\mathbb R^m$ be continuously differentiable near a zero $U_*$. Suppose $J=F'$ is Lipschitz with constant $K$ in a convex neighborhood and nonsingular there with $\|J(U)^{-1}\|\le B$. If the full Newton iteration remains in that neighborhood, then
$$\|U^+-U_*\|\le \frac{BK}{2}\|U-U_*\|^2.$$

*Proof.* Set $e=U-U_*$. The integral identity gives
$F(U)=\int_0^1J(U_*+te)e\,dt$.
Since $U^+=U-J(U)^{-1}F(U)$,
$$U^+-U_*=J(U)^{-1}\int_0^1
[J(U)-J(U_*+te)]e\,dt.$$
The integrand norm is at most $K(1-t)\|e\|^2$. Integrating and multiplying by $B$ proves the estimate. A sufficiently small closed ball about $U_*$ is invariant because $(BK/2)\|e\|^2\le\|e\|$ there, and the errors then converge quadratically. Such a ball must lie inside the neighborhood on which both assumptions hold. ∎

This local proof does not establish a global convergence theorem for the line search. A residual-merit search can stop at a nonroot stationary point when the Jacobian becomes singular. Reporting its accepted step lengths and residuals distinguishes useful globalization evidence from a nonexistent universal guarantee.

**Proposition 2 (Existence for the cubic discrete energy).** For symmetric positive-definite $A$, the energy
$E(U)=U^{\mathsf T}AU/2+\sum_iU_i^4/4-b^{\mathsf T}U$
has exactly one minimizer on $\mathbb R^m$, and that minimizer is the unique zero of $AU+U^3-b$.

*Proof.* Let $\lambda_{\min}>0$ be the smallest eigenvalue. Then
$E(U)\ge\lambda_{\min}\|U\|_2^2/2-\|b\|_2\|U\|_2$, so $E(U)\to\infty$ as $\|U\|_2\to\infty$. Choose a sufficiently large closed ball whose outside energies exceed $E(0)$. Continuity and compactness give a minimum in that ball, hence a global minimum. Differentiability makes its gradient zero. The positive-definite Hessian computed earlier makes the function strictly convex, so two distinct minima or stationary points are impossible. ∎

This supplies the existence step missing from an “at most one” argument. Positive diffusion and cubic reaction make this specific discrete energy coercive. They do not prove existence for every nonmonotone reaction or degenerate diffusion law.

**Proposition 3 (A monotone residual bound).** If $A$ is strongly monotone with constant $m>0$ in a Hilbert norm and $A(U_*)=f$, then
$$\|U-U_*\|\le \frac1m\|A(U)-f\|_*.$$

*Proof.* Strong monotonicity gives
$m\|U-U_*\|^2\le\langle A(U)-A(U_*),U-U_*\rangle$.
The dual-norm inequality bounds the right side by
$\|A(U)-f\|_*\|U-U_*\|$. If the error is zero the result is immediate; otherwise divide by its norm. ∎

Here the norm and its dual must match the monotonicity theorem. A raw coefficient Euclidean residual can scale differently with mesh size from a field dual norm. Thus a stopping ratio between a coefficient residual and an energy indicator needs a proven or calibrated norm transfer; comparing two printed numbers with no scaling is insufficient.

The residual estimator and adaptive convergence framework earlier in the chapter are cited mathematical dependencies. This chapter defines their conclusions, computes explicit examples and states the additional assumptions. It does not reproduce the localization, bubble-function, interpolation, mesh-closure and approximation-class arguments required for general reliability, efficiency and optimal rates. In particular, the one-dimensional indicator example uses a declared point-jump weighting, whereas higher-dimensional faces have positive surface measure. Its numerical constants must not be imported unchanged into a two-dimensional reliability theorem.

## Practice with fully worked solutions

### Exercise 1: derive a nonlinear Jacobian
<a id="nonlinear-adaptive-field-methods-ex-1"></a>

For \(F_i(U)=\sum_j K_{ij}U_j+U_i^{3}-b_i\), find \(J\).

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate componentwise.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The cubic derivative contributes only to the matching diagonal.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differentiate componentwise. The linear part contributes
\(K_{ij}\), while \(\partial U_i^{3}/\partial U_j=3U_i^{2} \delta_{ij}\). Thus
\(J(U)=K+\operatorname{diag}(3U_i^{2})\). Dropping the diagonal term would not be Newton's method.

</details>

### Exercise 2: monotonicity and uniqueness
<a id="nonlinear-adaptive-field-methods-ex-2"></a>

Let \(F(U)=AU+U^{3}-b\), where the cube is componentwise and \(A\) is symmetric
positive definite. Prove \(F(U)=0\) has at most one solution.

<details>
<summary>Hint 1</summary>

**Hint.** Pair a difference of residuals with a difference of states.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use positive definiteness and monotonicity.

</details>

<details>
<summary>Solution</summary>

**Solution.** For two vectors \(U,V\),

\[
(U-V)^T(F(U)-F(V))
=(U-V)^TA(U-V)+\sum_i(U_i-V_i)(U_i^{3}-V_i^{3}).
\]

The first term is positive unless \(U=V\). Every summand in the second is
nonnegative because the scalar cube is increasing. Hence two distinct zeros
would give a positive left side while \(F(U)-F(V)=0\), a contradiction.

</details>

### Exercise 3: Newton correction
<a id="nonlinear-adaptive-field-methods-ex-3"></a>

For \(F(U)=4U+U^{3}-1\), compute the Newton correction at \(U=1/4\) exactly.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate as exact fractions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide minus residual by derivative.

</details>

<details>
<summary>Solution</summary>

**Solution.** \(F(1/4)=1/64\) and \(F'(1/4)=4+3/16=67/16\). Therefore
\(S=-(1/64)/(67/16)=-1/268\), and the next iterate is
\(1/4-1/268=33/134\approx 0.246268657\).

</details>

### Exercise 4: face conservation under linearization
<a id="nonlinear-adaptive-field-methods-ex-4"></a>

Suppose \(G(U_1,U_2)\) is added to cell 1 and \(-G(U_1,U_2)\) to cell 2. Show that
both the residual and its Newton linearization conserve across the face.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the two oriented contributions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Differentiate the zero identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** The two residual contributions sum identically to zero for every
\(U\). Differentiating that identity in any direction gives
\(DG(U)[S]-DG(U)[S]=0\). Thus the Jacobian face contributions also cancel,
provided both rows use the same evaluated \(G\) and derivative.

</details>

### Exercise 5: bulk marking
<a id="nonlinear-adaptive-field-methods-ex-5"></a>

Squared indicators are \((5,5,2,1)\) with cell-index tie breaking. Find the bulk
set for \(\theta=0.7\).

<details>
<summary>Hint 1</summary>

**Hint.** Compute the total squared indicator.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the declared index tie rule.

</details>

<details>
<summary>Solution</summary>

**Solution.** The total is \(13\), so the target is \(9.1\). Sorted order begins
with cells 1 and 2; their sum is \(10\), which meets the target, whereas either
alone gives \(5\). The marked set is \(\{1,2\}\).

</details>

### Exercise 6: estimator scaling
<a id="nonlinear-adaptive-field-methods-ex-6"></a>

On a one-dimensional element of length \(h=1/4\), a constant strong residual is
\(R=2\). Compute \(h^{2} \lVert R\rVert_{L^2(K)}^{2}\).

<details>
<summary>Hint 1</summary>

**Hint.** Integrate the squared constant.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Multiply by the squared element length.

</details>

<details>
<summary>Solution</summary>

**Solution.** \(\lVert R\rVert^{2}=\int_K 4 dx=4h=1\). Multiplying by \(h^{2}=1/16\) gives
\(1/16\). The unsquared indicator contribution has square root \(1/4\).

</details>

### Exercise 7: nonlinear stopping budget
<a id="nonlinear-adaptive-field-methods-ex-7"></a>

If \(\eta_{space}=5\times 10^{-3}\) and policy parameter \(\gamma=0.1\), should a solve with
\(\eta_{nl}=8\times 10^{-4}\) stop?

<details>
<summary>Hint 1</summary>

**Hint.** Compute the nonlinear target.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare estimates with consistent scaling.

</details>

<details>
<summary>Solution</summary>

**Solution.** The target is \(\gamma \eta_{space}=5\times 10^{-4}\). Since \(8\times 10^{-4}\) exceeds it,
the stated policy requests more nonlinear work. The decision assumes the two
estimates are comparable in scaling.

</details>

### Exercise 8: adjoint identity
<a id="nonlinear-adaptive-field-methods-ex-8"></a>

For linear \(AU=b\) and \(Q(U)=q^{\mathsf T} U\), prove
\(Q(U)-Q(U_h)=z^{\mathsf T}(b-AU_h)\) when \(A^Tz=q\).

<details>
<summary>Hint 1</summary>

**Hint.** Write the residual as A times state error.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Move A through the transpose.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let \(e=U-U_h\). Since \(AU=b\), the residual is
\(b-AU_h=Ae\). Therefore
\(z^{\mathsf T}(b-AU_h)=z^TAe=(A^Tz)^Te=q^Te=Q(U)-Q(U_h)\).

</details>

### Exercise 9: distinguish reliability and efficiency
<a id="nonlinear-adaptive-field-methods-ex-9"></a>

An estimator always equals one million, regardless of mesh or solution. Could
it be reliable? Could it be useful and efficient?

<details>
<summary>Hint 1</summary>

**Hint.** Imagine the true error tending to zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Reliability does not limit overestimation.

</details>

<details>
<summary>Solution</summary>

**Solution.** On a bounded class whose true errors never exceed one million,
it could satisfy an upper reliability inequality. It is not informative and
generally cannot satisfy a mesh-independent local efficiency bound as the true
error tends to zero. Reliability alone does not prevent extreme overestimation.

</details>

### Exercise 10: derivative check interpretation
<a id="nonlinear-adaptive-field-methods-ex-10"></a>

Errors \(\lVert [F(U+\epsilon p)-F(U)]/\epsilon-Jp\rVert\) are
\(1\times 10^{-2},1\times 10^{-3},1\times 10^{-4},4\times 10^{-5}\) for epsilon \(1\times 10^{-2},1\times 10^{-3},1\times 10^{-4},1\times 10^{-5}\). Interpret them.

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the initial decrease rates.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Rounding can interrupt the truncation regime.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first three pairs show first-order decrease, consistent with
a correct directional derivative and forward difference. The last decreases
by only a factor \(2.5\), suggesting cancellation or other arithmetic error is
starting to compete. The table supports, but does not prove, a correct
Jacobian; several directions should be tested.

</details>

## Sources

Dörfler, [A Convergent Adaptive Algorithm for Poisson's Equation](https://doi.org/10.1137/0733054), proves an adaptive convergence result for its specified Poisson setting; bulk marking alone is not that proof. Verfürth, [A Posteriori Error Estimation Techniques for Finite Element Methods](https://academic.oup.com/book/1859), especially the model, linear elliptic and nonlinear elliptic chapters, is further reading for estimator analysis. Bangerth and Rannacher, *Adaptive Finite Element Methods for Differential Equations* (2003), is further reading for goal-oriented methods. Exact theorem/page locators for reliability, efficiency, contraction or optimality under every variant discussed here are not asserted; those general proofs remain external dependencies. Local Newton convergence, cubic discrete existence and the monotone residual bound are proved above.

## Summary

A nonlinear field solver starts from a specified residual and differentiates every dependence used by Newton. Local convergence has explicit inverse and Lipschitz hypotheses, while globalization and admissibility handle different risks. Adaptive refinement needs meaningful spatial indicators, controlled mesh quality and inner errors below the spatial budget. Reliability, efficiency and optimal rates require their cited analyses. The following interval chapter turns selected residual inequalities into finite certificates with enclosed arithmetic.
