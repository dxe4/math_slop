var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: symplectic-geometry
title: "Symplectic Geometry"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
status: draft
---

# Symplectic Geometry

Hamiltonian mechanics has a deep geometric structure. Phase space is not merely a collection of coordinates and momenta; it carries a natural geometric object called a symplectic form that encodes the essence of Hamilton's equations. This chapter introduces symplectic manifolds, Hamiltonian vector fields, the symplectic form, and the geometric formulation of canonical transformations.

## Manifolds and differential forms

We assume familiarity with smooth manifolds, tangent vectors, and differential forms. A brief review follows.

This is the L4 geometric continuation of the [canonical-coordinate chapter](canonical-transformations-poisson-brackets.md). The [Smooth Manifolds book](../smooth-manifolds.md) supplies the relevant differential-geometric route where available. The calculations below name whether they use one local chart or a globally defined form; an angular coordinate around a circle is not one global real-valued function.

**Definition 11.11 (Differential $k$-form).** A *differential $k$-form* on a manifold $M$ is a smooth, antisymmetric, multilinear map that assigns to each point $x \\in M$ an alternating $k$-linear functional on the tangent space $T_{x}M$.

The **exterior derivative** $d$ maps $k$-forms to $(k+1)$-forms, satisfying $d^{2} = 0$. The **wedge product** $\\wedge$ combines a $k$-form and an $l$-form into a $(k+l)$-form.

## The symplectic form

**Definition 11.1 (Symplectic form).** A *symplectic form* $\\omega$ on a manifold $M$ is a closed, nondegenerate 2-form. That is:

1. $d\\omega = 0$ (closed);
2. For every nonzero tangent vector $v$, there exists a tangent vector $w$ such that $\\omega(v, w) \\neq 0$ (nondegenerate).

A manifold equipped with a symplectic form is a **symplectic manifold**.

**Proposition 11.2 (Even dimension).** A finite-dimensional space with a nondegenerate alternating bilinear form has even dimension.

*Proof.* In any basis its matrix A is skew-symmetric. In odd dimension, $\\det A=\\det A^T=\\det(-A)=-\\det A$, so its determinant is zero over the real numbers. This contradicts nondegeneracy. Applying the argument to each tangent space gives the manifold statement. $\\square$

On $\\mathbb{R}^{2n}$ with coordinates $(q_{1}, \\dots, q_{n}, p_{1}, \\dots, p_{n})$, the standard symplectic form is

$$\\omega = \\sum_{i=1}^{n} dq_{i} \\wedge dp_{i}.$$

**Verification.** This 2-form is closed because $d(dq_{i} \\wedge dp_{i}) = d^{2}q_{i} \\wedge dp_{i} - dq_{i} \\wedge d^{2}p_{i} = 0$. It is nondegenerate because the matrix representation of $\\omega$ in the basis $(\\partial_{q_{1}}, \\dots, \\partial_{q_{n}}, \\partial_{p_{1}}, \\dots, \\partial_{p_{n}})$ is exactly the symplectic matrix $J$, which is invertible.

## Hamiltonian vector fields

**Definition 11.3 (Hamiltonian vector field).** Given a Hamiltonian function $H: M \\to \\mathbb{R}$ on a symplectic manifold $(M, \\omega)$, the *Hamiltonian vector field* $X_{H}$ is defined by

$$\\iota_{X_{H}}\\omega = dH,$$

where $\\iota_{X}$ denotes interior product (contraction) with $X$. In coordinates, this means $\\omega(X_{H}, \\cdot) = dH$.

Nondegeneracy makes the map from a tangent vector to its contraction with omega a linear isomorphism at every point. Solving it for dH therefore gives a unique vector field. Smooth matrix inversion in local charts makes that field smooth, and uniqueness makes the local solutions agree on overlapping charts. Thus the definition supplies a globally meaningful field for every globally defined smooth H.

On $\\mathbb{R}^{2n}$ with the standard symplectic form, if $X_{H} = (\\dot{q}, \\dot{p})$, then

$$\\iota_{X_{H}}\\omega = \\sum_{i}(\\dot{q}_{i}\\,dp_{i} - \\dot{p}_{i}\\,dq_{i}) = \\sum_{i}\\left(\\frac{\\partial H}{\\partial q_{i}}\\,dq_{i} + \\frac{\\partial H}{\\partial p_{i}}\\,dp_{i}\\right).$$

Matching coefficients gives Hamilton's equations:

$$\\dot{q}_{i} = \\frac{\\partial H}{\\partial p_{i}}, \\qquad \\dot{p}_{i} = -\\frac{\\partial H}{\\partial q_{i}}.$$

**Theorem 11.4 (Energy conservation).** The Hamiltonian is constant along the flow of $X_{H}$.

*Proof.* $\\mathcal{L}_{X_{H}}H = dH(X_{H}) = \\omega(X_{H}, X_{H}) = 0$, where the last equality follows from antisymmetry of $\\omega$.

## The Poisson bracket revisited

The symplectic form induces a natural Poisson bracket. For functions $f, g$ on a symplectic manifold:

$$\\{f, g\\} = \\omega(X_{f}, X_{g}) = df(X_{g}) = -dg(X_{f}).$$

In Darboux coordinates $(q, p)$, this reduces to the familiar formula:

$$\\{f, g\\} = \\sum_{i}\\left(\\frac{\\partial f}{\\partial q_{i}}\\frac{\\partial g}{\\partial p_{i}} - \\frac{\\partial f}{\\partial p_{i}}\\frac{\\partial g}{\\partial q_{i}}\\right).$$

**Theorem 11.5 (Jacobi identity).** The Poisson bracket satisfies $\\{\\{f, g\\}, h\\} + \\{\\{g, h\\}, f\\} + \\{\\{h, f\\}, g\\} = 0$.

*Proof.* Use a local Darboux chart, whose existence is the cited theorem below, and write $\\{f,g\\}=\\nabla f^TJ\\nabla g$ with constant J. Differentiation gives $\\nabla\\{g,h\\}=H_gJ\\nabla h-H_hJ\\nabla g$, where $H_g$ denotes the symmetric Hessian of g. In the cyclic Jacobi sum, the terms involving $H_g$ are $\\nabla f^TJH_gJ\\nabla h$ and its negative with f and h exchanged. They cancel because $JH_gJ$ is symmetric. The other two Hessians cancel in the same way. Thus the identity holds in every chart and hence as a scalar identity on the manifold. $\\square$

## Darboux's theorem

**Theorem 11.6 (Darboux).** Let $(M, \\omega)$ be a symplectic manifold of dimension $2n$. Near every point, there exist local coordinates $(q_{1}, \\dots, q_{n}, p_{1}, \\dots, p_{n})$ such that

$$\\omega = \\sum_{i=1}^{n} dq_{i} \\wedge dp_{i}.$$

This is remarkable: unlike Riemannian geometry, where curvature is a local invariant, symplectic geometry has no local invariants. Every symplectic manifold looks locally like $\\mathbb{R}^{2n}$ with the standard form.

The general Darboux theorem is used here as a cited geometric input; its deformation proof is beyond this chapter. It classifies the bare local symplectic form, not a simultaneously specified Hamiltonian, group action or global topology. Those additional structures can retain information after the form is made standard.

**Worked example (An explicit two-dimensional Darboux chart).** On a small coordinate rectangle, write a nondegenerate two-form as $\\omega=\\rho(q,p)dq\\wedge dp$ with smooth nonzero rho. Fix p0 in the rectangle and define
$$
Q=q,\\qquad P(q,p)=\\int_{p_0}^p\\rho(q,s)\\,ds.
$$
Then $dQ\\wedge dP=\\rho(q,p)dq\\wedge dp$, since the term involving dq twice vanishes. Its coordinate Jacobian is rho, so the inverse-function theorem gives a local coordinate chart. For example, $\\rho=e^q$ gives $P=e^q(p-p_0)$. This proves the normal-form conclusion directly for a surface without invoking the general theorem's proof. The construction is local: a periodic angle or a domain with a hole may prevent these coordinates from extending globally.

## Canonical transformations geometrically

**Definition 11.7 (Symplectomorphism).** A diffeomorphism $\\phi: M \\to M$ is a *symplectomorphism* if $\\phi^{*}\\omega = \\omega$.

In Darboux coordinates, a symplectomorphism is precisely a canonical transformation. The condition $\\phi^{*}\\omega = \\omega$ encodes the preservation of the Poisson bracket structure.

**Theorem 11.8 (Liouville).** The Hamiltonian flow $\\phi_{t}$ generated by $X_{H}$ preserves the symplectic form: $\\phi_{t}^{*}\\omega = \\omega$.

*Proof.* By the Cartan magic formula,

$$\\frac{d}{dt}\\phi_{t}^{*}\\omega = \\phi_{t}^{*}\\mathcal{L}_{X_{H}}\\omega = \\phi_{t}^{*}(d\\iota_{X_{H}}\\omega + \\iota_{X_{H}}d\\omega) = \\phi_{t}^{*}(d^{2}H + 0) = 0,$$

since $d\\omega = 0$ and $\\iota_{X_{H}}\\omega = dH$. Thus $\\phi_{t}^{*}\\omega$ is constant in $t$, and since $\\phi_{0} = \\text{id}$, we have $\\phi_{t}^{*}\\omega = \\omega$.

**Corollary 11.9 (Liouville's theorem).** Hamiltonian flow preserves the phase-space volume form $\\omega^{n} = \\omega \\wedge \\cdots \\wedge \\omega$ ($n$ times).

This is a cornerstone of statistical mechanics: the phase-space volume of a region of initial conditions is conserved under Hamiltonian evolution.

The conventional normalised volume form is $\\Omega=\\omega^n/n!$. In canonical coordinates it is $dq_1\\wedge dp_1\\wedge\\cdots\\wedge dq_n\\wedge dp_n$, which is nowhere zero and fixes the symplectic orientation. Pullback commutes with wedge product, so preservation of omega immediately preserves Omega as well. The argument applies only on the flow's existence domain; completeness is an additional dynamical property. For a time-dependent Hamiltonian, the same Cartan calculation uses its instantaneous vector field and still preserves the form, while energy need not be constant.

![An initial rectangular phase-space cell and an exactly equal-area sheared image under Hamiltonian flow](figures/hamiltonian-flow-area.svg)

The diagram shows the content of Liouville's theorem in one degree of freedom. The initial rectangle has coordinate area $120\\cdot115=13{,}800$ square drawing units. The image is a parallelogram with edge vectors $(120,-20)$ and $(0,-115)$, whose determinant also has magnitude $13{,}800$. The flow may stretch and shear a region $R$; symplectic area, rather than shape, is the invariant.

## Worked example: symplectic form on the sphere

The 2-sphere $S^{2}$ with its standard area form is a symplectic manifold. In spherical coordinates $(\\theta, \\phi)$:

$$\\omega = \\sin\\theta \\, d\\theta \\wedge d\\phi.$$

This is closed because it is a top form on a 2-dimensional manifold ($d\\omega = 0$ automatically). It is nondegenerate globally because it is the oriented area form. The factor $\\sin\\theta$ vanishes at $\\theta=0,\\pi$ only because spherical coordinates are singular at the poles; it does not mean the differential form degenerates there. On the regular coordinate patch $0<\\theta<\\pi$, nondegeneracy is visible from $\\sin\\theta>0$. The total area is

$$\\int_{S^{2}}\\omega = \\int_{0}^{2\\pi}\\int_{0}^{\\pi}\\sin\\theta \\, d\\theta \\, d\\phi = 4\\pi.$$

This example shows that symplectic manifolds need not be cotangent bundles. The sphere is compact, whereas the full cotangent bundle of a positive-dimensional manifold has noncompact vector-space fibers.

## The cotangent bundle

The most important class of symplectic manifolds in mechanics is the **cotangent bundle** $T^{*}Q$ of a configuration manifold $Q$. Given local coordinates $(q_{1}, \\dots, q_{n})$ on $Q$, the cotangent bundle has natural coordinates $(q_{1}, \\dots, q_{n}, p_{1}, \\dots, p_{n})$, where $p_{i}$ are the components of a covector.

**Definition 11.10 (Canonical 1-form).** The *canonical 1-form* $\\theta$ on $T^{*}Q$ is defined by

$$\\theta_{(q, p)}(v) = p(d\\pi(v)),$$

where $\\pi: T^{*}Q \\to Q$ is the projection and $v$ is a tangent vector to $T^{*}Q$.

In local coordinates, $\\theta = \\sum_{i} p_{i}\\,dq_{i}$. The symplectic form is $\\omega = -d\\theta = \\sum_{i} dq_{i} \\wedge dp_{i}$.

The definition of theta through the projection and covector evaluation is independent of coordinates. If $Q=Q(q)$ is a change of base coordinates, the covector components satisfy $p\\cdot dq=P\\cdot dQ$. Thus the local expressions for theta agree on overlaps, and so do their exterior derivatives. This gives a globally exact symplectic form on the cotangent bundle without assuming that the configuration manifold has one global coordinate chart.

## A symplectic field need not have a global Hamiltonian

**Worked example (Translation around a torus).** On $T^2$ with angle coordinates modulo $2\\pi$ and form $\\omega=d\\theta\\wedge d\\phi$, take $X=\\partial_\\theta$. Its flow translates the first angle and preserves omega. But $\\iota_X\\omega=d\\phi$, which has integral $2\\pi$ around the second angle circle. It cannot equal dH for a globally single-valued H, because every exact one-form has zero integral around a closed curve.

Locally one can use H equal to the chosen real-valued phi coordinate. Globally that coordinate jumps by a full turn, so it is not a single-valued function on the torus. The vector field is therefore locally Hamiltonian and globally symplectic, but is not globally Hamiltonian under this convention. Closedness and exactness are different hypotheses.

There is a related distinction for the sphere's area form. If it were d alpha for a globally defined one-form on the closed sphere, Stokes' theorem would make its total integral zero. Its integral is $4\\pi$, so it is not exact. Local Darboux charts do not contradict this obstruction. The [group-action chapter](lie-groups-and-symmetry.md) encounters the same issue when deciding whether a symplectic action admits a global moment map.

## Worked example: particle on a circle

For a particle constrained to a circle $S^{1}$, the configuration space is $Q = S^{1}$ with coordinate $\\theta$. The cotangent bundle $T^{*}S^{1}$ is a cylinder with coordinates $(\\theta, p_{\\theta})$. The symplectic form is

$$\\omega = d\\theta \\wedge dp_{\\theta}.$$

For a free particle, $H = p_{\\theta}^{2}/(2m\\ell^{2})$. The Hamiltonian vector field is $X_{H} = (p_{\\theta}/(m\\ell^{2}))\\partial_{\\theta}$. The flow is $\\theta(t) = \\theta_{0} + (p_{\\theta}/(m\\ell^{2}))t$, uniform motion on the circle.

**Common error:** Students often confuse the symplectic form $\\omega$ with the metric $g$. A symplectic form is antisymmetric and nondegenerate but not positive definite; there is no notion of length or angle, only area. Two vectors can be "symplectically orthogonal" ($\\omega(v, w) = 0$) without being metrically orthogonal.

## Finite preserved volume gives almost-everywhere recurrence

Symplectic volume preservation has a further consequence only when the
available invariant volume is finite. Let T be an invertible measurable
map preserving a measure on an invariant region of finite measure. Fix
a measurable set A in that region. Let B consist of points in A that
never return to A at a positive iterate. The forward images of B are
pairwise disjoint: an overlap would, after applying an inverse iterate,
show that a point of B returns to A. Every image has the same measure
as B. Infinitely many disjoint images cannot fit into a finite-measure
region unless B has measure zero.

Points of A that return only finitely many times have a last visit whose
image lies in B. They therefore belong to a countable union of inverse
images of this null set and also form a null set. Almost every point
of A returns to A infinitely often. Applying this reasoning to a countable
collection of small coordinate neighbourhoods gives the usual almost-everywhere
recurrence conclusion under the corresponding measurable-space assumptions.
This is the elementary measure argument behind Poincaré recurrence.

For a Hamiltonian system, take a time map whose trajectories remain in
the invariant finite-volume region and whose inverse is defined there.
Liouville supplies the required volume preservation. These hypotheses are
stronger than a divergence calculation at one state. A free particle on
an unbounded phase space preserves volume but can escape every fixed
position neighbourhood; the global available volume is infinite. Merely
being Hamiltonian does not make that example recurrent.

Recurrence also differs from periodicity. Returning arbitrarily close need
not mean returning exactly after a finite time. Irrational rotation on
a circle is a familiar illustration of this distinction. Nor does an
almost-everywhere assertion cover every exceptional initial state or provide
a useful finite waiting-time bound. A numerical run that shows no return
within its budget does not contradict the theorem, and a finite near
return does not establish an exact periodic orbit. Volume preservation,
finite measure, typicality and the desired time scale each have a separate
role in the conclusion.

## A regular energy surface is not itself symplectic

At a regular energy value, the
energy surface has one dimension
less than phase space and is
therefore odd dimensional. Its
restricted two-form is degenerate:
the nonzero Hamiltonian vector field
lies in its kernel because pairing
with every tangent vector gives
the energy differential of that
vector, which vanishes on the surface.

Fixing energy therefore does not
simply produce another canonical
phase space with one coordinate
deleted. A further reduction along
the flow, or a transversal
section with the right restrictions,
is needed to obtain an even-dimensional
reduced structure. Existence of a
global smooth quotient requires
additional hypotheses; periodic or
nonfree flow can obstruct a naive
identification. This dimensional
calculation explains why energy
conservation and symplectic reduction
are related but distinct ideas.
The original symplectic form remains
nondegenerate on phase space even
while its restriction to this
invariant hypersurface has a kernel.

## Practice exercises

### Exercise 1
<a id="symplectic-geometry-ex-1"></a>

Show that on $\\mathbb{R}^{2n}$ with $\\omega = \\sum_{i}dq_{i} \\wedge dp_{i}$, the matrix of $\\omega$ in the basis $(\\partial_{q_{1}}, \\dots, \\partial_{q_{n}}, \\partial_{p_{1}}, \\dots, \\partial_{p_{n}})$ is

$$\\begin{pmatrix} 0 & I_{n} \\\\ -I_{n} & 0 \\end{pmatrix}.$$

<details>
<summary>Hint 1</summary>

Evaluate the two-form on pairs of coordinate basis vectors.

</details>
<details>
<summary>Hint 2</summary>

The only nonzero mixed pairing matches a q coordinate with its p coordinate.

</details>
<details>
<summary>Full solution</summary>

**Solution.** We compute $\\omega(\\partial_{q_{i}}, \\partial_{q_{j}}) = 0$, $\\omega(\\partial_{p_{i}}, \\partial_{p_{j}}) = 0$, and $\\omega(\\partial_{q_{i}}, \\partial_{p_{j}}) = \\delta_{ij}$. The matrix has these entries.

</details>

### Exercise 2
<a id="symplectic-geometry-ex-2"></a>

Verify Darboux's theorem explicitly for the symplectic manifold $(\\mathbb{R}^{2}, \\omega = dx \\wedge dy)$. Show that any linear transformation preserving $\\omega$ has determinant 1.

<details>
<summary>Hint 1</summary>

Multiply the two-by-two matrices explicitly.

</details>
<details>
<summary>Hint 2</summary>

The coefficient of the standard alternating matrix is the determinant.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The coordinates $(x,y)$ already put $\\omega=dx\\wedge dy$ in Darboux form. Write $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ and $J=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$. Direct multiplication gives $A^TJA=\\begin{pmatrix}0&ad-bc\\\\bc-ad&0\\end{pmatrix}=(ad-bc)J$. Thus $A^TJA=J$ forces $ad-bc=\\det A=1$ by the $(1,2)$ entry. Taking determinants alone would leave a sign ambiguity: the reflection $R=\\operatorname{diag}(-1,1)$ has $(\\det R)^2=1$ but $R^TJR=-J$, so it does not preserve the form. This online coordinate proof postdates the retained draft PDF.

</details>

### Exercise 3
<a id="symplectic-geometry-ex-3"></a>

For the harmonic oscillator with $H = \\frac{1}{2}(p^{2} + q^{2})$ (in units where $m = k = 1$), find the Hamiltonian flow $\\phi_{t}$ explicitly and verify that $\\phi_{t}^{*}\\omega = \\omega$.

<details>
<summary>Hint 1</summary>

Solve the two scalar Hamilton equations.

</details>
<details>
<summary>Hint 2</summary>

Check the sign of the quarter-period rotation and its determinant.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Hamilton's equations are $\\dot{q} = p$, $\\dot{p} = -q$. The solution is $q(t) = q_{0}\\cos t + p_{0}\\sin t$, $p(t) = -q_{0}\\sin t + p_{0}\\cos t$. In the usual oriented $(q,p)$ plane its matrix is $M(t)=\\begin{pmatrix}\\cos t & \\sin t \\\\ -\\sin t & \\cos t\\end{pmatrix}$, rotation by angle $-t$. For example, $(q_0,p_0)=(1,0)$ reaches $(0,-1)$ at $t=\\pi/2$, rather than $(0,1)$. Its determinant is $\\cos^2t+\\sin^2t=1$, so $\\phi_{t}^{*}\\omega = \\omega$. This online sign correction postdates the retained draft PDF.

</details>

### Exercise 4
<a id="symplectic-geometry-ex-4"></a>

Show that the Poisson bracket satisfies the Leibniz rule: $\\{fg, h\\} = f\\{g, h\\} + g\\{f, h\\}$.

<details>
<summary>Hint 1</summary>

Apply the product rule to each derivative in the bracket.

</details>
<details>
<summary>Hint 2</summary>

Group the two terms carrying the same undifferentiated factor.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Using the definition, $\\{fg, h\\} = \\sum_{i}[\\partial(fg)/\\partial q_{i}\\partial h/\\partial p_{i} - \\partial(fg)/\\partial p_{i}\\partial h/\\partial q_{i}] = \\sum_{i}[(f\\partial g/\\partial q_{i} + g\\partial f/\\partial q_{i})\\partial h/\\partial p_{i} - (f\\partial g/\\partial p_{i} + g\\partial f/\\partial p_{i})\\partial h/\\partial q_{i}] = f\\{g, h\\} + g\\{f, h\\}$.

</details>

### Exercise 5
<a id="symplectic-geometry-ex-5"></a>

Consider the torus $T^{2} = S^{1} \\times S^{1}$ with coordinates $(\\theta, \\phi)$ and symplectic form $\\omega = d\\theta \\wedge d\\phi$. Show that $\\omega$ is closed and nondegenerate, and compute the total symplectic volume.

<details>
<summary>Hint 1</summary>

The form has constant coefficient on each angular chart.

</details>
<details>
<summary>Hint 2</summary>

Integrate once around both circles, each with period two pi.

</details>
<details>
<summary>Full solution</summary>

**Solution.** $\\omega$ is a top form on a 2-manifold, so $d\\omega = 0$. It is nondegenerate because the coefficient is 1. The volume is $\\int_{0}^{2\\pi}\\int_{0}^{2\\pi}d\\theta\\,d\\phi = 4\\pi^{2}$.

</details>

### Exercise 6 — An odd-dimensional obstruction
<a id="symplectic-geometry-ex-6"></a>

Why can no smooth three-dimensional manifold carry a nondegenerate two-form?

<details>
<summary>Hint 1</summary>

Inspect its alternating matrix at a single point.

</details>
<details>
<summary>Hint 2</summary>

Transposition leaves the determinant unchanged but negation changes its sign in odd dimension.

</details>
<details>
<summary>Full solution</summary>

A two-form on a three-dimensional tangent space has a skew-symmetric three-by-three matrix A. The identities $\\det A=\\det A^T=\\det(-A)=-\\det A$ force zero determinant. It is degenerate at every point, so it cannot be symplectic. Closedness cannot repair this linear-algebra obstruction.

</details>

### Exercise 7 — A variable area density
<a id="symplectic-geometry-ex-7"></a>

Find explicit Darboux coordinates for $\\omega=e^q dq\\wedge dp$ on the plane.

<details>
<summary>Hint 1</summary>

Keep Q equal to q and integrate the area coefficient in p.

</details>
<details>
<summary>Hint 2</summary>

The extra dq term in dP vanishes when wedged with dq.

</details>
<details>
<summary>Full solution</summary>

Take $Q=q$ and $P=e^qp$. Then $dP=e^qp\\,dq+e^qdp$, so $dQ\\wedge dP=e^qdq\\wedge dp$. The inverse is $q=Q$, $p=e^{-Q}P$, globally smooth in this example. The general construction in the text guarantees only local coordinates; this particular density permits a global inverse.

</details>

### Exercise 8 — The torus translation obstruction
<a id="symplectic-geometry-ex-8"></a>

Show why $X=\\partial_\\theta$ on the symplectic torus has no global single-valued Hamiltonian.

<details>
<summary>Hint 1</summary>

Contract X with $d\\theta\\wedge d\\phi$.

</details>
<details>
<summary>Hint 2</summary>

Integrate the resulting one-form around the second circle.

</details>
<details>
<summary>Full solution</summary>

The contraction is d phi. Its integral over a complete phi circle is $2\\pi$. A differential dH of a single-valued function integrates to zero on any closed curve, by the fundamental theorem for line integrals. Thus no such global H exists, even though each angular chart admits a local H equal to its phi coordinate.

</details>

### Exercise 9 — The sphere is not exact
<a id="symplectic-geometry-ex-9"></a>

Use the sphere's total area to rule out a global one-form alpha satisfying $\\omega=d\\alpha$.

<details>
<summary>Hint 1</summary>

The sphere is compact and has no boundary.

</details>
<details>
<summary>Hint 2</summary>

Apply Stokes' theorem to the proposed exact representation.

</details>
<details>
<summary>Full solution</summary>

If omega were d alpha, its integral would equal the integral of alpha over the empty boundary, hence zero. The actual area integral is $4\\pi$, a contradiction. This global obstruction is compatible with every point having a local Darboux chart.

</details>

### Exercise 10 — A cotangent coordinate change
<a id="symplectic-geometry-ex-10"></a>

On q positive let $Q=q^3$. Find the corresponding momentum P preserving the canonical one-form, and verify the symplectic form.

<details>
<summary>Hint 1</summary>

Require $p\\,dq=P\\,dQ$.

</details>
<details>
<summary>Hint 2</summary>

The derivative of Q is $3q^2$ and is nonzero on the specified domain.

</details>
<details>
<summary>Full solution</summary>

The required momentum is $P=p/(3q^2)$. Differentiating gives $dQ\\wedge dP=(3q^2dq)\\wedge[dp/(3q^2)-2p\\,dq/(3q^3)]=dq\\wedge dp$. Both form and one-form are preserved. The positive-domain restriction supplies a smooth inverse and avoids the vanishing derivative at q zero.

</details>

<a id="connections"></a>
## Summary

Symplectic geometry is the natural language of Hamiltonian mechanics. In **Lie Groups and Symmetry**, we study how group actions on symplectic manifolds generate conserved quantities via moment maps. The geometric perspective on integrable systems in **Integrable Systems** relies heavily on the symplectic structure, particularly the existence of action-angle variables on invariant tori.

Arnold’s *Mathematical Methods of Classical Mechanics* and McDuff and Salamon’s *Introduction to Symplectic Topology* provide further geometric reading. The general Darboux theorem is cited; the surface-chart, exactness-obstruction and preservation arguments above are proved directly.
`;export{e as default};