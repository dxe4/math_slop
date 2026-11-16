
# Nonlinear Systems, Jacobians, and Globalization

## Purpose, prerequisites, and scope

The prerequisite chapter is **Nonlinear Equations and Root Certificates**
(`nonlinear-equations`). Its scalar Newton iteration, residual certificates,
and safeguarding are joined here by vector norms, matrix factorizations, and
the distinction between conditioning and algorithmic stability. We study the
numerical problem

\[
F(x)=0,\qquad F:\mathbb R^n\longrightarrow\mathbb R^n,
\]

for a specified continuously differentiable map. The central questions are
how to construct a step, how to prevent a locally excellent model from taking
a disastrous global step, and what evidence supports a reported solution.

A nonlinear solver does not establish that the model is appropriate, that all
solutions have been found, or that a small unscaled residual means every
component is accurate. Those are separate claims. The numerical contract here
is narrower: under stated smoothness, nonsingularity, scaling, and stopping
hypotheses, approximate one selected zero and audit the computation.

## Linearization and the Newton equation

Let \(J(x)\) denote the Jacobian matrix with entries

\[
J_{ij}(x)=\frac{\partial F_i}{\partial x_j}(x).
\]

For a small step \(s\), differentiability gives

\[
F(x+s)=F(x)+J(x)s+o(\lVert s\rVert).
\]

Newton's method sets the linear model to zero. It computes \(s_k\) from

\[
J(x_k)s_k=-F(x_k),\qquad x_{k+1}=x_k+s_k.
\]

This is a linear solve, not an instruction to form \(J(x_k)^{-1}\). A stable
factorization, a preconditioned iterative solve, or a structured solver should
be chosen according to the Jacobian. The linear residual

\[
r_k^{\rm lin}=J(x_k)s_k+F(x_k)
\]

records how accurately the model equation was solved. A tiny linear residual
does not say the nonlinear model was accurate over the whole step.

### Worked two-variable Newton step

**Example 3.0 (Two-variable Newton iteration).**

Consider

\[
F(x,y)=\begin{pmatrix}x^{2}+y^{2}-1\\x-y\end{pmatrix}.
\]

The first equation is the unit circle and the second is a diagonal. Start at
\((0.8,0.6)\). Then

\[
F(0.8,0.6)=\begin{pmatrix}0\\0.2\end{pmatrix},\qquad
J(0.8,0.6)=\begin{pmatrix}1.6&1.2\\1&-1\end{pmatrix}.
\]

The Newton equations are

\[
1.6s_x+1.2s_y=0,\qquad s_x-s_y=-0.2.
\]

Substitution gives \(s_y=0.32/2.8=0.1142857\ldots\) and
\(s_x=-0.0857143\ldots\). Thus

\[
(x_1,y_1)=(0.7142857\ldots,0.7142857\ldots).
\]

The second residual is now exactly zero in exact arithmetic, while the first is
\(2(5/7)^{2}-1=1/49\approx 0.0204082\). Symmetry makes the next two step
components equal. Solving \(2(10/7)s=-1/49\) gives \(s=-1/140\), so
\((x_2,y_2)=(99/140,99/140)\approx (0.7071429,0.7071429)\). The positive
solution is \((1/\sqrt{2},1/\sqrt{2})\approx (0.7071068,0.7071068)\).

The improving decimals illustrate local convergence. They are not a proof that
the start was in a convergence basin or that the positive intersection was the
only solution; the system also has the negative intersection.

## Local convergence and its hypotheses

**Theorem 3.3 (Local Newton).** Suppose \(F\) is continuously differentiable near a
zero \(x_{*}\), \(J(x_{*})\) is nonsingular, and \(J\) is Lipschitz continuous in a
neighborhood of \(x_{*}\). Then there is a smaller neighborhood such that exact
Newton steps starting inside it are defined, remain nearby, and converge
quadratically:

\[
\lVert x_{k+1}-x_*\rVert\le C\lVert x_k-x_*\rVert^{2}.
\]

The proof exposes the mechanism. Write \(e=x-x_{*}\). The fundamental theorem of
calculus along the line segment gives

\[
F(x)=\int_0^1J(x_*+te)e\,dt.
\]

After a Newton step,

\[
e_+=J(x)^{-1}\int_0^{1}\bigl[J(x)-J(x_*+te)\bigr]e\,dt.
\]

Lipschitz continuity makes the integral \(\mathcal O(\lVert e\rVert^{2})\), and
nonsingularity near the root bounds \(\lVert J(x)^{-1}\rVert\). Both ingredients
matter. If the root is singular, quadratic convergence can disappear. If the
start is remote, neither the inverse bound nor the local model need apply.

An inexact Newton method permits \(r_k^{\rm lin}\ne 0\), often with a forcing
condition

\[
\lVert r_k^{\rm lin}\rVert\le \eta_k\lVert F(x_k)\rVert,
\qquad 0\le\eta_k<1.
\]

Loose early solves can save work. Driving \(\eta_k\) toward zero appropriately
can recover superlinear behavior. Solving every early Jacobian system near
machine precision may be expensive oversolving; accepting a large uncontrolled
linear residual can destroy the outer convergence.

## Conditioning, residuals, and scaling

Near a nonsingular root, a perturbation in the equation satisfies the first
order relation

\[
J(x_*)\,\delta x\approx-\delta F.
\]

Thus \(\lVert J(x_{*})^{-1}\rVert\) is an absolute sensitivity factor. In the
Euclidean norm, a small smallest singular value means some residual direction
can correspond to a large state error. For an affine system \(F(x)=Ax-b\), the
relation is exact:

\[
\lVert x-x_*\rVert_2\le
\frac{\lVert F(x)\rVert_2}{\sigma_{\min}(A)}.
\]

For nonlinear \(F\), a comparable residual-to-error bound requires a justified lower-stretch condition for the averaged Jacobian along the segment to the relevant root. A pointwise inverse bound alone does not control cancellation in that average. The fixed-preconditioner condition proved below is one sufficient replacement; a single Jacobian sample is not enough.

Units and scaling can dominate the raw numbers. Replacing \(F\) by \(D_F F\)
with a nonsingular diagonal row scaling does not change its zeros, but it changes
the residual norm and the linear algebra. Replacing \(x=D_x z\) changes column
scales. A useful scaled system is

\[
\widehat F(z)=D_FF(D_xz),\qquad
\widehat J(z)=D_FJ(D_xz)D_x.
\]

Choose \(D_F\) from meaningful equation tolerances and \(D_x\) from meaningful
variable scales, not merely to make a diagnostic look small. Report the scales
so another computation can reconstruct the contract.

For example, multiplying the second equation in the circle-line system by
\(10^{6}\) preserves both intersections. It multiplies that raw residual by
\(10^{6}\) and heavily rescales a Jacobian row. A stopping rule based on the
unscaled Euclidean residual could reverse its decision even though the
mathematical solution set is unchanged.

## Why full Newton steps can fail

Newton's model is local, but the full step has no built-in radius. It can cross
a domain boundary, enter a region with a singular Jacobian, or increase the
residual enormously. A **globalization** strategy does not mean convergence
from every possible point. It means a mechanism that seeks progress from a
broader set of starts while retaining fast local steps when justified.

A common merit function for a square system is

\[
\phi(x)=\tfrac12\lVert F(x)\rVert_2^{2},
\qquad \nabla\phi(x)=J(x)^TF(x).
\]

If the Newton equation is solved exactly and \(F(x) \ne 0\), then

\[
\nabla\phi(x)^Ts=F(x)^TJ(x)s=-\lVert F(x)\rVert_2^{2}<0.
\]

So the Newton direction is a descent direction for this merit function when
the Jacobian is nonsingular. That statement does not say the full step lowers
\(\phi\); it says sufficiently short steps do.

## Backtracking line search

Start with \(\alpha=1\) and test \(x+\alpha\cdot s\). An Armijo rule accepts when

\[
\phi(x+\alpha s)\le
\phi(x)+c_1\alpha\nabla\phi(x)^Ts,
\qquad 0<c_1<1.
\]

If the test fails, reduce \(\alpha\), often by a fixed factor such as one half.
The sufficient-decrease term should use the actual directional derivative,
especially for an inexact step. Domain checks and finite-value checks occur
before accepting a trial point.

### Worked rejected full step

**Example 3.5 (A rejected full Newton step).**

Use the residual form associated with the Rosenbrock valley,

\[
F(x,y)=\begin{pmatrix}10(y-x^{2})\\1-x\end{pmatrix},
\]

whose zero is \((1,1)\). At \((-1.2,1)\),
\(F=(-4.4,2.2)^{\mathsf T}\) and \(\phi=12.1\). The Jacobian is

\[
J=\begin{pmatrix}24&10\\-1&0\end{pmatrix}.
\]

Solving \(Js=-F\) gives \(s=(2.2,-4.84)^{\mathsf T}\). The full trial is
\((1,-3.84)\), where \(F=(-48.4,0)^{\mathsf T}\) and
\(\phi=1171.28\). The exact Newton model predicted zero residual, but its
long step left the region where the model was informative.

Simple halving illustrates globalization. At \(\alpha=1/8\), the trial
\((-0.925,0.395)\) has approximately
\(F=(-4.60625,1.925)\), so \(\phi\approx 12.462\), still above 12.1. At
\(\alpha=1/16\), the trial is \((-1.0625,0.6975)\), with approximately
\(F=(-4.31406,2.0625)\) and \(\phi\approx 11.433\). This is actual decrease;
whether it satisfies a chosen Armijo rule also depends on \(c_1\). A line search
trades one factorization for extra residual evaluations and a safer accepted
step.

## Trust regions and regularized models

A trust-region method limits the model to \(\lVert s\rVert \le \Delta\). For a
square system it may approximately minimize

\[
\tfrac12\lVert F(x)+J(x)s\rVert_2^{2}
\quad\text{subject to}\quad \lVert D s\rVert_2\le\Delta,

\]

where \(D\) encodes variable scaling. The ratio

\[
\rho=\frac{\phi(x)-\phi(x+s)}
{\phi(x)-\tfrac12\lVert F(x)+J(x)s\rVert_2^{2}}

\]

compares actual with predicted reduction. A poor ratio rejects the step and
usually shrinks the radius; sustained agreement permits a larger radius.

Levenberg-Marquardt-type steps solve a regularized least-squares model such as

\[
(J^TJ+\lambda D^TD)s=-J^TF.
\]

They can remain defined when \(J\) is rank deficient, but forming \(J^{\mathsf T} J\)
explicitly squares the condition number. QR, augmented systems, or SVD-based
solves can be safer. Moreover, convergence to a stationary point of
\((1/2)\lVert F\rVert^{2}\) with nonzero residual is not a solution of
\(F=0\). The report must distinguish those outcomes.

## Jacobians: exact, approximate, and matrix-free

Analytic derivatives can be accurate but implemented incorrectly. Finite
differences introduce truncation and cancellation errors. If the Jacobian is
locally Lipschitz near $x$, one forward difference column satisfies

\[
\frac{F(x+h e_j)-F(x)}{h}=J(x)e_j+O(h).

\]

For a merely continuously differentiable $F$, the truncation remainder is
$o(1)$ as $h\to0$, and need not be $O(h)$: for $F(t)=|t|^{3/2}$ at $0$,
the forward quotient for $h>0$ is $\sqrt h$, while $F'(0)=0$.
Roundoff contributes roughly \(\mathcal O(u/h)\) after scaling. The balance is
problem dependent. Automatic differentiation, when available, differentiates
the implemented operations but does not repair a wrong model or a nonsmooth
branch.

Large problems may use only products \(Jv\), approximated by directional
differences or computed exactly by derivative propagation. Newton-Krylov
methods then solve the linearized equation iteratively. Preconditioning remains
essential, and the nonlinear forcing term must be coordinated with the Krylov
stopping rule.

Quasi-Newton methods update an approximate Jacobian or inverse. Broyden's
secant condition enforces the newest change

\[
B_{k+1}(x_{k+1}-x_k)=F(x_{k+1})-F(x_k).

\]

This saves derivative work but accumulates approximation error. Periodic
restarts, conditioning checks, and globalization are algorithmic choices, not
optional implementation details.

## Rank deficiency, multiple roots, and continuation

If \(J(x_{*})\) is singular, the solution may be nonisolated, multiple, or
poorly conditioned. For \(F(x,y)=(x^{2},y)\), Newton gives
\((x_{k+1},y_{k+1})=(x_k/2,0)\) whenever \(x_k \ne 0\). Convergence in \(x\) is
linear, not quadratic, and the limiting Jacobian is singular. A solver should
not advertise a violated local theorem merely because the iterates converge.

Rank-revealing QR or an SVD can expose nearly dependent Jacobian columns or
rows. A pseudoinverse step chooses one least-squares correction, but the choice
of minimum norm does not make an underdetermined physical parameter identifiable.

When a direct start is difficult, continuation embeds the target in
\(H(x,\lambda)=0\), begins at an easier parameter value, and tracks a branch as
\(\lambda\) changes. Predictor-corrector methods need step control and tangent
or arclength equations near folds. Following one branch does not enumerate all
branches, and crossing a bifurcation requires explicit rank and branch logic.

## A solver evidence ledger

A responsible nonlinear-system result records:

1. equation definitions, units, domains, and variable/equation scales;
2. initial point and any continuation path;
3. Jacobian source and derivative check;
4. linear solver, preconditioner, and linear residual;
5. line-search or trust-region parameters and rejected trials;
6. final scaled residual, step norm, and stopping reason;
7. Jacobian conditioning or rank diagnostic near the answer;
8. evidence of reproducibility from another start, formulation, or precision;
9. whether the claim is one root, a least-squares stationary point, or a
   certified unique root in a region.

Interval Newton or Krawczyk methods can sometimes turn an approximate root into
an existence-and-uniqueness enclosure, but only with outward-rounded interval
bounds and a verified inclusion test. Ordinary floating-point Newton output is
not that certificate.

## Common failure diagnostics

- **Residual decreases but variables look absurd:** inspect units, scaling, and
  a small singular value of the Jacobian.
- **Step becomes tiny while residual is large:** the line search may be trapped,
  the trust radius may have collapsed, or rounding may prevent progress.
- **Full Newton alternates or diverges:** the start may be outside the local
  basin; add globalization rather than claiming the theorem failed.
- **Linear solver works harder at every iteration:** the Jacobian may be growing
  ill conditioned or the preconditioner may be stale.
- **Different starts reach different answers:** multiple basins may exist; this
  is evidence against an unqualified uniqueness claim.
- **Finite-difference Jacobian changes with its step:** truncation, roundoff,
  nonsmoothness, or stateful function evaluations need diagnosis.
- **Merit function stalls above zero:** a nonzero-residual stationary point or
  incompatible equations may have been reached.

<a id="summary"></a>
## Connections

Newton's method for systems solves a Jacobian equation derived from a local
linear model. Nonsingularity and Jacobian regularity explain fast local
convergence; they do not make a full step globally safe. Scaling determines the
meaning of residuals and step sizes. Line searches and trust regions compare
the local model with actual progress. Inexact linear solves, derivative
approximations, rank deficiency, and continuation each add their own error or
claim boundary. A final vector deserves trust only when accompanied by scaled
residuals, conditioning evidence, a clear stopping reason, and an honest
statement of which root claim was established.

## Completing the local proof and choosing a region

**Theorem 3.1 (An explicit Newton neighbourhood).** Let $r$ be a zero of a continuously differentiable map on a convex ball about $r$. Suppose $J(r)$ is invertible, write $\beta=\|J(r)^{-1}\|$, and suppose $\|J(x)-J(y)\|\le K\|x-y\|$ in that ball for a subordinate norm. Choose a radius $d>0$ inside the ball with $\beta Kd\le1/2$. Exact Newton steps starting within distance $d$ are well defined and satisfy
\[
\|x_+-r\|\le\beta K\|x-r\|^2\le\tfrac12\|x-r\|.
\]

*Proof.* Write $J(x)=J(r)(I+T)$, with $T=J(r)^{-1}(J(x)-J(r))$. Its norm is at most $\beta Kd\le1/2$. The series $\sum_{j=0}^{\infty}(-T)^j$ converges in norm, since its tails are bounded by a geometric series. Multiplication by $I+T$ telescopes, giving its inverse and norm at most two. Hence $\|J(x)^{-1}\|\le2\beta$.

Put $e=x-r$. The line-segment identity in the earlier proof gives
\[
e_+=J(x)^{-1}\int_0^1[J(x)-J(r+te)]e\,dt.
\]
The integrand norm is at most $K(1-t)\|e\|^2$. Integration gives $K\|e\|^2/2$; multiplication by the inverse bound gives the result. The final inequality ensures that the next point remains in the ball, so induction applies to every iterate. If $K=0$, the Jacobian is constant and one exact step solves the affine system. ∎

The theorem makes the two obligations explicit: an inverse bound and a model-remainder bound. The inverse is controlled throughout the region, not merely at the start, and the contraction keeps subsequent iterates within the region where those controls apply. A proof of rapid convergence is therefore also a proof that the next linear system is defined.

## A residual bound that avoids cancellation in a matrix integral

**Theorem 3.2 (Fixed-preconditioner residual certificate).** Let $F$ be continuously differentiable on a neighbourhood of a convex region containing a root $r$ and an approximation $x$. Suppose a fixed square matrix $M$ obeys
\[
\|I-MJ(z)\|\le q<1
\]
at every point $z$ on the segment from $r$ to $x$. Then
\[
\|x-r\|\le\frac{\|MF(x)\|}{1-q}.
\]

*Proof.* With $e=x-r$ and $F(r)=0$, integration along the segment gives
\[
MF(x)=\int_0^1MJ(r+te)e\,dt
=e+\int_0^1[MJ(r+te)-I]e\,dt.
\]
Move the integral to the other side and take norms. The result is $\|e\|\le\|MF(x)\|+q\|e\|$. Divide by $1-q>0$. ∎

The fixed matrix is important. A separate bound on $\|J(z)^{-1}\|$ at each point is not, by itself, a lower bound on the norm of the averaged Jacobian: changing matrix directions can cancel in an integral. One must justify a uniform lower-stretch property for that average or supply a sufficient condition such as Theorem 3.2. Existence of the root is an assumption here; the inequality does not conjure one from a residual.

**Example 3.3 (An actual residual-to-error calculation).** Let $F(x,y)=(x^2-2,y-1)^{\mathsf T}$ and use the infinity norm on the box $[1,3/2]\times[0,2]$. Its positive root is $r=(\sqrt2,1)$. Choose $M=\operatorname{diag}(2/5,1)$. Then $MJ=\operatorname{diag}(4x/5,1)$, so $\|I-MJ\|_\infty\le1/5$ throughout the box. At $(7/5,1)$, $F=(-1/25,0)^{\mathsf T}$ and $MF=(-2/125,0)^{\mathsf T}$. The theorem gives
\[
\|(7/5,1)-r\|_\infty\le\frac{2/125}{4/5}=\frac1{50}.
\]
The bound uses a verified region containing both points, not one Jacobian sample. It also identifies the positive root by the specified box rather than claiming global uniqueness.

## What backtracking proves locally

**Proposition 3.4 (Termination along a descent direction).** If $\phi$ is differentiable at an interior domain point $x$, $\nabla\phi(x)^{\mathsf T}s<0$, and $0<c<1$, then sufficiently small positive step lengths satisfy the Armijo inequality.

*Proof.* Differentiability gives $\phi(x+\alpha s)=\phi(x)+\alpha\nabla\phi(x)^{\mathsf T}s+o(\alpha)$. The desired right side allows an excess of $(1-c)\alpha[-\nabla\phi(x)^{\mathsf T}s]$ above the linear prediction, a positive multiple of $\alpha$. The remainder divided by $\alpha$ tends to zero, so it is eventually smaller than that allowance. Interior-domain admissibility holds for sufficiently small steps. Repeated multiplication of a positive trial length by a fixed factor in $(0,1)$ eventually reaches that range. ∎

This proves one line search terminates under its hypotheses. It is not a theorem that every sequence of accepted iterates converges to a root. For an inexact Newton step with $Js=-F+r_{\rm lin}$ and $\|r_{\rm lin}\|_2\le\eta\|F\|_2$, Cauchy–Schwarz gives
\[
\nabla\phi^{\mathsf T}s=-\|F\|_2^2+F^{\mathsf T}r_{\rm lin}
\le-(1-\eta)\|F\|_2^2<0
\]
when $\eta<1$ and $F\ne0$. Thus a controlled inner solve retains the descent argument; an uncontrolled inner residual does not.

Finally, when $\lambda>0$ and $D$ is nonsingular, the regularized matrix $J^{\mathsf T}J+\lambda D^{\mathsf T}D$ is positive definite. For nonzero $v$, its quadratic form is $\|Jv\|_2^2+\lambda\|Dv\|_2^2>0$. This proves the regularized step exists uniquely even for singular $J$, while making no false promise that it resolves a nonzero-residual stationary point.
## Practice with fully worked solutions

### Exercise 3.1
<a id="nonlinear-systems-globalization-ex-1"></a>

**Carry out a Newton step.**

For
\(F(x,y)=(x^{2}+y^{2}-1,x-y)^{\mathsf T}\), compute one Newton step from \((1,1)\) and the
new residual.

<details>
<summary>Hint 1</summary>

Evaluate the residual and Jacobian at the supplied start.

</details>
<details>
<summary>Hint 2</summary>

The second Newton equation makes the two step components equal.

</details>
<details>
<summary>Solution</summary>

**Solution.** At \((1,1)\), \(F=(1,0)^{\mathsf T}\) and
\(J=\begin{pmatrix}2&2\\1&-1\end{pmatrix}\). The equations
\(2s_x+2s_y=-1\) and \(s_x-s_y=0\) give
\(s_x=s_y=-1/4\). Hence \((x_1,y_1)=(3/4,3/4)\). The second residual stays
zero, and the first is \(2(3/4)^{2}-1=18/16-1=1/8\). The step improves the
residual but does not itself certify the positive root or exclude the negative
one.

</details>

### Exercise 3.2
<a id="nonlinear-systems-globalization-ex-2"></a>

**Prove the descent identity.**

Let \(J\) be nonsingular and let
\(Js=-F\). Show that \(s\) is a descent direction for
\(\phi=(1/2)\lVert F\rVert_2^{2}\) whenever \(F \ne 0\).

<details>
<summary>Hint 1</summary>

Differentiate the squared Euclidean residual.

</details>
<details>
<summary>Hint 2</summary>

Substitute $Js=-F$ into the directional derivative.

</details>
<details>
<summary>Solution</summary>

**Solution.** The chain rule gives \(\nabla(\phi)=J^{\mathsf T} F\). Therefore

\[
\nabla\phi^Ts=F^TJs=F^T(-F)=-\lVert F\rVert_2^{2}<0.
\]

The strict negative derivative guarantees decrease for sufficiently small
positive step lengths. It does not guarantee that \(\alpha=1\) is acceptable.

</details>

### Exercise 3.3
<a id="nonlinear-systems-globalization-ex-3"></a>

**Convert a residual for an affine system.**

Suppose \(F(x)=Ax-b\),
\(\sigma_{\min}(A)=0.2\), and a computed point has
\(\lVert F(x)\rVert_2=3\times 10^{-4}\). Bound its distance from the exact
solution.

<details>
<summary>Hint 1</summary>

The inverse 2-norm is the reciprocal of the smallest singular value.

</details>
<details>
<summary>Hint 2</summary>

Multiply that inverse bound by the residual norm.

</details>
<details>
<summary>Solution</summary>

**Solution.** Nonsingularity follows from the positive smallest singular value.
Since \(F(x)=A(x-x_{*})\),

\[
\lVert x-x_*\rVert_2\le
\lVert A^{-1}\rVert_2\lVert F(x)\rVert_2
=\frac{3\times10^{-4}}{0.2}=1.5\times10^{-3}.
\]

For a nonlinear system, the same calculation would require a lower-stretch or
inverse bound throughout the relevant region, not just at one sampled point.

</details>

### Exercise 3.4
<a id="nonlinear-systems-globalization-ex-4"></a>

**Diagnose a singular root.**

Apply Newton's method to
\(F(x,y)=(x^{2},y)^{\mathsf T}\) from \((x_0,y_0)\) with \(x_0 \ne 0\). What rate is visible,
and which standard theorem is unavailable?

<details>
<summary>Hint 1</summary>

Solve the two diagonal Newton equations.

</details>
<details>
<summary>Hint 2</summary>

Inspect the Jacobian at the limiting root before invoking the simple-root theorem.

</details>
<details>
<summary>Solution</summary>

**Solution.** The Jacobian is \(J=\operatorname{diag}(2x,1)\). The Newton equations give
\(2x\cdot s_x=-x^{2}\), so \(s_x=-x/2\), and \(s_y=-y\). Thus
\(x_{k+1}=x_k/2\) and \(y_1=0\). The \(x\)-error decreases by the constant
factor one half, hence linearly. At the root \(J(0,0)=\operatorname{diag}(0,1)\)
is singular, so the nonsingular-root quadratic convergence theorem does not
apply.

</details>

### Exercise 3.5
<a id="nonlinear-systems-globalization-ex-5"></a>

**Audit equation scaling.**

A solver stops when
\(\lVert F\rVert_2 \le 1\times 10^{-6}\). The two residual components have natural
tolerances \(1\times 10^{-3} m\) and \(1\times 10^{-8} s\). Explain why the rule is
not meaningful and give a scaled alternative.

<details>
<summary>Hint 1</summary>

Residual components with different units cannot be combined meaningfully without scaling.

</details>
<details>
<summary>Hint 2</summary>

Divide each component by its own declared tolerance and use a dimensionless norm.

</details>
<details>
<summary>Solution</summary>

**Solution.** Adding squared metre and second residuals has no unit-invariant
meaning, and the one threshold is too strict for the first equation but too
loose for the second. Define the dimensionless scaled residual

\[
\widehat F=
\begin{pmatrix}
F_1/(10^{-3}\,\mathrm{m})\\
F_2/(10^{-8}\,\mathrm{s})
\end{pmatrix}.
\]

Then stop on a stated norm such as \(\lVert \widehat{F}\rVert_\infty \le 1\), together with step and stagnation
checks. The tolerances must reflect the problem contract rather than being
chosen after seeing the answer.

</details>

### Exercise 3.6
<a id="nonlinear-systems-globalization-ex-6"></a>

**Interpret a trust-region ratio.**

A model predicts that \(\phi\) will
drop from 50 to 30, but the trial step produces \(\phi=48\). Compute \(\rho\)
and state the reasonable radius response.

<details>
<summary>Hint 1</summary>

Compute actual reduction and predicted reduction separately.

</details>
<details>
<summary>Hint 2</summary>

Their ratio does not set the acceptance threshold; that is an algorithm parameter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Predicted reduction is \(50-30=20\); actual reduction is
\(50-48=2\). Hence \(\rho=2/20=0.1\). The model was poor over this step. A
standard policy would reject the step if its acceptance threshold exceeds
0.1, shrink the trust radius, and recompute. The numerical value 0.1 alone does
not prescribe universal thresholds; those are declared algorithm parameters.

</details>

### Exercise 3.7
<a id="nonlinear-systems-globalization-ex-7"></a>

**Inexact descent.**

An inexact Newton equation has $Js=-F+r$ with $\|r\|_2\le0.2\|F\|_2$. Prove a bound on the merit-function directional derivative.

<details>
<summary>Hint 1</summary>

Use $\nabla\phi=J^{\mathsf T}F$.

</details>
<details>
<summary>Hint 2</summary>

Apply Cauchy–Schwarz to $F^{\mathsf T}r$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The derivative is $F^{\mathsf T}Js=-\|F\|_2^2+F^{\mathsf T}r\le-\|F\|_2^2+0.2\|F\|_2^2=-0.8\|F\|_2^2$. It is strictly negative when $F\ne0$, so sufficiently short admissible steps decrease the merit function.

</details>

### Exercise 3.8
<a id="nonlinear-systems-globalization-ex-8"></a>

**Use a regional certificate.**

In Example 3.3, compute the bound using $\|MF\|_\infty=2/125$ and $q=1/5$. What existence information was required separately?

<details>
<summary>Hint 1</summary>

Divide by $1-q$.

</details>
<details>
<summary>Hint 2</summary>

The theorem assumes a root and a controlled segment, rather than proving existence from a small residual.

</details>
<details>
<summary>Solution</summary>

**Solution.** The bound is $(2/125)/(4/5)=1/50$. The known root $(\sqrt2,1)$ lies in the stated convex box, and the defect bound holds throughout it. Without existence and segment admissibility, the same two numbers alone would not establish an error-to-root claim.

</details>

### Exercise 3.9
<a id="nonlinear-systems-globalization-ex-9"></a>

**Check Armijo numerically and exactly.**

For $F(x)=x-1$, use the Newton step from zero and Armijo parameter $c=1/4$. Does the full step pass?

<details>
<summary>Hint 1</summary>

The merit function is $(x-1)^2/2$.

</details>
<details>
<summary>Hint 2</summary>

At zero its value is $1/2$, and its derivative times the Newton step is $-1$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The step is $s=1$. The trial point is one, where the merit value is zero. The Armijo right side at $\alpha=1$ is $1/2-(1/4)=1/4$, so $0\le1/4$ and the step passes. This is a calculation for this affine problem, not a universal full-step result.

</details>

### Exercise 3.10
<a id="nonlinear-systems-globalization-ex-10"></a>

**A stationary residual need not vanish.**

At a point where $J=\operatorname{diag}(0,1)$ and $F=(1,0)^{\mathsf T}$, compute the regularized step with $D=I$ and $\lambda=1$. Is the point a root?

<details>
<summary>Hint 1</summary>

The right side is $-J^{\mathsf T}F$.

</details>
<details>
<summary>Hint 2</summary>

The regularized matrix is $\operatorname{diag}(1,2)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The right side is zero, so the unique regularized step is zero. The merit gradient is also zero, yet the residual is $(1,0)$ and the point is not a root. Regularization ensures a defined linear step under these assumptions; it does not turn a nonzero-residual stationary point into a solution.

</details>


## Forward connection

The same Jacobian solves and globalization logic reappear in implicit time
steps, differential-algebraic constraints, nonlinear finite-element equations,
and constrained optimization. In each setting the interpretation of the
residual changes, but the audit remains: scale the equations, test the local
model, control inexact inner solves, and distinguish convergence of an
algorithm from validity of the surrounding model.

<a id="source-and-verification-note"></a>
## Sources

The existing Euler chapter's full examples and six exercise solutions are preserved. Further reading: C. T. Kelley, [Iterative Methods for Linear and Nonlinear Equations](https://epubs.siam.org/doi/book/10.1137/1.9781611970944), SIAM, 1995, and Peter Deuflhard, *Newton Methods for Nonlinear Problems: Affine Invariance and Adaptive Algorithms*, Springer, 2004. The local, defect-bound, and Armijo arguments used for the stated conclusions are proved here; no unverified edition-specific locator or global convergence theorem is inferred. The earlier reference to Kantorovich theory remains further reading rather than a theorem claimed by the local proof. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Newton's system step solves a Jacobian equation, while globalization compares the local model with actual progress. A quantitative inverse bound and a Lipschitz remainder estimate prove an invariant local convergence region. Residual-to-error certification needs a regional lower-stretch condition; a fixed-preconditioner defect below one supplies a proved sufficient version without assuming matrix integrals preserve pointwise inverse bounds. Scaling, inexact inner solves, and regularization change the numerical evidence and must be recorded. Descent and a defined regularized step do not by themselves prove a root has been found.
