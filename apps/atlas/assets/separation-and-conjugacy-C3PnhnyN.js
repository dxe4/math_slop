var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: separation-and-conjugacy
title: "Separation, Conjugacy, and Supporting Geometry"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Separation, Conjugacy, and Supporting Geometry {#section-1-separation-conjugacy-and-supporting-geometry}

Convex optimization works because curved objects can be interrogated by flat
ones. A hyperplane can certify that a point lies outside a feasible set. An
affine function can certify a lower bound on a convex objective. A dual vector
can simultaneously be a normal to a set, a subgradient of a function, and the
slope of a perturbation bound. This chapter develops those statements as
theorems rather than pictures.

The local prerequisites are finite-dimensional linear algebra, Euclidean
norms, compactness, and the definitions of convex sets, convex functions, and
supporting inequalities. The earlier convexity chapter introduced the
supporting-gradient inequality; subgradients are defined below. Here we explain where
supporting objects come from and why convex conjugacy is the algebraic language
that records them.

Unless stated otherwise, the ambient space is \\(\\mathbb R^n\\) with inner
product \\(\\langle x,y\\rangle=x^Ty\\). Extended-real functions may take the value
\\(+\\infty\\); this convention lets a constraint be represented by an objective
term without pretending that infeasible points have finite cost. A function
\\(f:\\mathbb R^n\\to(-\\infty,+\\infty]\\) is **proper** when it never takes
\\(-\\infty\\) and is finite somewhere. It is **closed** when its epigraph is
closed, equivalently when it is lower semicontinuous in finite dimensions.

<a id="section-23-projection-produces-a-separating-vector"></a>
## Projection produces a separating vector {#section-25-projection-produces-a-separating-vector}

Let \\(C\\subseteq\\mathbb R^n\\) be nonempty, closed, and convex. For every
\\(z\\in\\mathbb R^n\\), there is a unique point

\\[
P_C(z)=\\mathop{\\arg\\min}_{x\\in C}\\frac12\\|x-z\\|_2^2.
\\]

Existence uses closedness and coercivity of squared distance: a minimizing
sequence can be restricted to a bounded ball and therefore has a convergent
subsequence. Strict convexity of squared distance gives uniqueness on a convex
set. If \\(p=P_C(z)\\), then

\\[
\\langle z-p,y-p\\rangle\\le 0\\qquad\\text{for every }y\\in C. \\tag{1}
\\]

To derive (1), the segment \\(p+t(y-p)\\) remains in \\(C\\) for
\\(0\\le t\\le1\\). The one-variable function

\\[
\\phi(t)=\\frac12\\|z-p-t(y-p)\\|_2^2
\\]

has a minimum at the left endpoint \\(t=0\\), so its right derivative is
nonnegative. Since \\(\\phi'(0)=-\\langle z-p,y-p\\rangle\\), (1) follows. This
calculation is the geometric ancestor of many first-order optimality
conditions.

Suppose now that \\(z\\notin C\\). Set \\(p=P_C(z)\\) and \\(a=z-p\\), which is
nonzero. Equation (1) gives

\\[
\\langle a,y\\rangle\\le \\langle a,p\\rangle
<\\langle a,z\\rangle\\qquad(y\\in C), \\tag{2}
\\]

where the strict gap is
\\(\\langle a,z-p\\rangle=\\|z-p\\|_2^2\\). Thus a point outside a nonempty closed
convex set is **strictly separated** from the set. The coefficients are not
merely existential: projection supplies a normal \\(a\\), an offset
\\(\\langle a,p\\rangle\\), and a numerical margin.

Closedness matters. For the open unit ball, a point on the unit sphere is not
in the set, but its distance to the set is zero, so projection cannot furnish
a positive margin. Convexity matters too: the closest point to a nonconvex set
need not be unique, and a normal at one closest point can cut through another
component.

<a id="section-73-worked-example-1-separating-a-point-from-a-disk"></a>
### Worked example 1: separating a point from a disk {#section-75-worked-example-1-separating-a-point-from-a-disk}

Let \\(C=\\{x\\in\\mathbb R^2:\\|x\\|_2\\le2\\}\\) and \\(z=(3,4)\\). Because
\\(\\|z\\|_2=5\\), radial projection gives

\\[
p=P_C(z)=2\\frac{z}{\\|z\\|_2}=\\left(\\frac65,\\frac85\\right).
\\]

One separating normal is

\\[
a=z-p=\\left(\\frac95,\\frac{12}{5}\\right)=\\frac35(3,4).
\\]

The separating inequality \\(a^Tx\\le a^Tp\\) can be rescaled by the positive
factor \\(5/3\\) to the simpler inequality

\\[
3x_1+4x_2\\le10.
\\]

Every point in the disk satisfies it by Cauchy--Schwarz:
\\(3x_1+4x_2\\le5\\|x\\|_2\\le10\\). At \\(z\\), the left side is \\(25\\), so the
inequality detects the point with ample margin. Multiplying a separating
inequality by a positive number changes its numerical margin but not its
geometric halfspace; comparisons of margins therefore require a normalization
such as \\(\\|a\\|_2=1\\).

<a id="section-102-supporting-hyperplanes-and-normal-cones"></a>
## Supporting hyperplanes and normal cones {#section-104-supporting-hyperplanes-and-normal-cones}

A hyperplane \\(\\{x:\\langle a,x\\rangle=\\beta\\}\\) **supports** a convex set
\\(C\\) at \\(p\\in C\\) if \\(a\\ne0\\),

\\[
\\langle a,y\\rangle\\le\\beta=\\langle a,p\\rangle
\\quad\\text{for every }y\\in C.
\\]

For a nonempty closed convex set, every boundary point has a supporting
hyperplane. One proof makes the point-separation argument approach the
boundary. Choose exterior points \\(z_k\\to p\\), let \\(p_k=P_C(z_k)\\), and
normalize \\(a_k=(z_k-p_k)/\\|z_k-p_k\\|_2\\). The projection inequality says
\\(\\langle a_k,y-p_k\\rangle\\le0\\) for every \\(y\\in C\\). Because
\\(\\|p_k-p\\|_2\\le\\|z_k-p\\|_2\\), we have \\(p_k\\to p\\). The unit sphere is
compact, so a subsequence of \\(a_k\\) converges to a unit vector \\(a\\).
Taking limits gives \\(\\langle a,y-p\\rangle\\le0\\). Finite dimensionality enters
through compactness of the unit sphere; infinite-dimensional versions require
functional-analytic hypotheses.

The collection of all outward supporting directions is the **normal cone**

\\[
N_C(p)=\\{a:\\langle a,y-p\\rangle\\le0\\text{ for every }y\\in C\\}
\\]

when \\(p\\in C\\), and is empty when \\(p\\notin C\\). Interior points have only
the zero normal. Boundary corners can have a whole cone of normals. The
projection relation can now be written compactly as

\\[
p=P_C(z)\\quad\\Longleftrightarrow\\quad z-p\\in N_C(p). \\tag{3}
\\]

For a differentiable convex objective, minimizing \\(f\\) over \\(C\\) has the
first-order condition

\\[
0\\in \\nabla f(p)+N_C(p).
\\]

This says that the negative gradient is a supporting normal: no feasible
first-order direction can decrease the objective.

Two disjoint convex sets need not have a positive separation margin. A useful
strong form is: if \\(C\\) is nonempty and closed, \\(D\\) is nonempty and compact,
both are convex, and \\(C\\cap D=\\varnothing\\), then there are \\(a\\ne0\\) and
numbers \\(\\alpha<\\beta\\) such that

\\[
\\langle a,c\\rangle\\le\\alpha<\\beta\\le\\langle a,d\\rangle
\\quad(c\\in C,d\\in D).
\\]

The distance between the sets is attained at a pair \\((c_*,d_*)\\) and is
positive. Applying the segment derivative argument separately in each set to
\\(a=d_*-c_*\\) produces the two supporting inequalities and a gap
\\(\\|d_*-c_*\\|_2^2\\). Compactness cannot simply be erased: the closed convex
sets

\\[
C=\\{(x,y):y\\ge e^x\\},\\qquad D=\\{(x,0):x\\in\\mathbb R\\}
\\]

are disjoint but have distance zero as \\(x\\to-\\infty\\). The line \\(y=0\\)
weakly separates them, yet no positive uniform margin exists.

<a id="section-170-from-supporting-slopes-to-conjugates"></a>
## From supporting slopes to conjugates {#section-172-from-supporting-slopes-to-conjugates}

For a proper function \\(f:\\mathbb R^n\\to(-\\infty,+\\infty]\\), its
**convex conjugate** is

\\[
f^*(y)=\\sup_{x\\in\\mathbb R^n}\\{\\langle y,x\\rangle-f(x)\\}. \\tag{4}
\\]

Whatever the shape of \\(f\\), the function \\(f^*\\) is convex and lower
semicontinuous because it is a pointwise supremum of affine continuous
functions of \\(y\\). Formula (4) asks how high an affine function with slope
\\(y\\) must be shifted to dominate the pairing \\(\\langle y,x\\rangle\\) relative
to \\(f(x)\\).

For every \\(x,y\\), the definition immediately yields the **Fenchel--Young
inequality**

\\[
f(x)+f^*(y)\\ge\\langle y,x\\rangle. \\tag{5}
\\]

For a finite point x, a subgradient y means that f(z)≥f(x)+⟨y,z−x⟩ for every z. Write the set of all such slopes as ∂f(x). If \\(f\\) is proper and convex, equality has an exact geometric meaning:

\\[
f(x)+f^*(y)=\\langle y,x\\rangle
\\quad\\Longleftrightarrow\\quad y\\in\\partial f(x). \\tag{6}
\\]

Indeed, equality says that \\(x\\) attains the supremum in (4), so for every
\\(z\\),

\\[
\\langle y,z\\rangle-f(z)
\\le \\langle y,x\\rangle-f(x).
\\]

Rearranging gives
\\(f(z)\\ge f(x)+\\langle y,z-x\\rangle\\), precisely the subgradient inequality.
Every step is reversible. Thus conjugacy converts a supporting slope into an
equality certificate.

<a id="section-212-worked-example-2-a-positive-definite-quadratic"></a>
### Worked example 2: a positive-definite quadratic {#section-214-worked-example-2-a-positive-definite-quadratic}

Let \\(Q=Q^T\\succ0\\) and

\\[
f(x)=\\frac12x^TQx+b^Tx+c.
\\]

For a given \\(y\\), the expression in (4) is

\\[
(y-b)^Tx-\\frac12x^TQx-c.
\\]

It is strictly concave in \\(x\\). Its gradient vanishes at
\\(x_*=Q^{-1}(y-b)\\). Substitution gives

\\[
f^*(y)=\\frac12(y-b)^TQ^{-1}(y-b)-c.
\\]

At a primal point \\(x\\), equality in Fenchel--Young requires
\\(y=Qx+b=\\nabla f(x)\\). Numerically, one should solve a linear system with
\\(Q\\), not form \\(Q^{-1}\\). The formula exposes an important conditioning
fact: small eigenvalues of \\(Q\\) become large eigenvalues of the conjugate
quadratic.

If \\(Q\\) were merely positive semidefinite, this formula with an ordinary
inverse would be false. The conjugate is finite only when \\(y-b\\) lies in the
range of \\(Q\\), and then a pseudoinverse describes its value. This is a typical
claim boundary: a familiar closed form silently relies on strict positive
definiteness.

<a id="section-245-worked-example-3-norms-indicators-and-support-functions"></a>
### Worked example 3: norms, indicators, and support functions {#section-247-worked-example-3-norms-indicators-and-support-functions}

Let \\(f(x)=\\lambda\\|x\\|\\) for a norm \\(\\|\\cdot\\|\\), with \\(\\lambda>0\\), and
let \\(\\|\\cdot\\|_*\\) be its dual norm. If \\(\\|y\\|_*\\le\\lambda\\), Holder's
inequality gives

\\[
\\langle y,x\\rangle-\\lambda\\|x\\|
\\le(\\|y\\|_*-\\lambda)\\|x\\|\\le0.
\\]

The supremum is zero, attained at \\(x=0\\). If \\(\\|y\\|_*>\\lambda\\), choose a
unit vector \\(u\\) with \\(\\langle y,u\\rangle>\\lambda\\) and send
\\(x=tu\\) to infinity. Therefore

\\[
(\\lambda\\|\\cdot\\|)^*(y)=
\\begin{cases}
0,&\\|y\\|_*\\le\\lambda,\\\\
+\\infty,&\\|y\\|_*>\\lambda.
\\end{cases}
\\]

The right side is the indicator \\(\\delta_B(y)\\) of the dual ball
\\(B=\\{y:\\|y\\|_*\\le\\lambda\\}\\), where an indicator is zero on its set and
\\(+\\infty\\) outside. Conversely, for a nonempty set \\(C\\),

\\[
\\delta_C^*(y)=\\sup_{x\\in C}\\langle y,x\\rangle=\\sigma_C(y),
\\]

the **support function** of \\(C\\). The conjugate does not remember holes or
nonconvex indentations: the support function of a set equals that of its closed
convex hull. This is useful when only convex-hull bounds are intended, and a
warning when the original nonconvex membership structure matters.

<a id="section-281-biconjugacy-as-reconstruction-from-affine-minorants"></a>
## Biconjugacy as reconstruction from affine minorants {#section-283-biconjugacy-as-reconstruction-from-affine-minorants}

Conjugate again:

\\[
f^{**}(x)=\\sup_y\\{\\langle y,x\\rangle-f^*(y)\\}. \\tag{7}
\\]

Fenchel--Young shows that every term in this supremum is at most \\(f(x)\\), so
\\(f^{**}\\le f\\). Moreover, \\(f^{**}\\) is closed and convex. The
Fenchel--Moreau theorem supplies the converse:

> If \\(f\\) is proper, closed, and convex on \\(\\mathbb R^n\\), then
> \\(f^{**}=f\\).

Here is the geometric proof architecture, including the extended-valued
boundary case. Fix \\(x_0\\) and a finite height \\(r<f(x_0)\\). When
\\(f(x_0)<+\\infty\\), strong separation of \\((x_0,r)\\) from the closed epigraph
produces a separating normal \\((y,\\beta)\\). The upward rays in the epigraph
force \\(\\beta\\le0\\), while comparison with the epigraph point
\\((x_0,f(x_0))\\) rules out \\(\\beta=0\\). After normalizing \\(\\beta=-1\\), the
separator is an affine function
\\(\\ell(x)=\\langle y,x\\rangle-\\alpha\\) satisfying \\(\\ell\\le f\\) everywhere and
\\(\\ell(x_0)>r\\).

If \\(f(x_0)=+\\infty\\), the same separation can instead be vertical. A
nonvertical separator gives the preceding affine minorant directly. A
vertical one has the form

\\[
\\langle u,x\\rangle\\le\\gamma<\\langle u,x_0\\rangle
\\]

for every \\(x\\in\\operatorname{dom}f\\). A proper closed convex function in
finite dimensions has a global affine minorant \\(\\ell_0\\), another standard
separation consequence. Therefore

\\[
\\ell_t(x)=\\ell_0(x)+t\\bigl(\\langle u,x\\rangle-\\gamma\\bigr),
\\qquad t\\ge0,
\\]

still satisfies \\(\\ell_t\\le f\\): on the effective domain its added term is
nonpositive, and off the domain the right side is \\(+\\infty\\). Since
\\(\\ell_t(x_0)\\to+\\infty\\), some member of this family exceeds the chosen
\\(r\\) at \\(x_0\\).

Thus in either case an affine minorant with slope \\(y\\) exceeds \\(r\\) at
\\(x_0\\). Replacing its offset by the best permissible one, \\(f^*(y)\\), can
only raise its value, so \\(f^{**}(x_0)>r\\). For finite \\(f(x_0)\\), let
\\(r\\uparrow f(x_0)\\); for infinite \\(f(x_0)\\), let \\(r\\) range over all real
numbers. This proves \\(f^{**}(x_0)\\ge f(x_0)\\), and the easy inequality gives
equality.

If \\(f\\) is not convex or not lower semicontinuous, \\(f^{**}\\) is generally
the greatest closed convex function below \\(f\\), not \\(f\\) itself. Thus
biconjugation is a convexification operation as well as a representation
theorem. Replacing a model by its biconjugate can be a deliberate relaxation,
but calling it an equivalent reformulation without checking closed convexity
would overstate the claim.

<a id="section-342-worked-example-4-entropy-and-an-exponential-conjugate"></a>
### Worked example 4: entropy and an exponential conjugate {#section-344-worked-example-4-entropy-and-an-exponential-conjugate}

Define the closed convex function

\\[
f(x)=
\\begin{cases}
x\\log x-x,&x>0,\\\\
0,&x=0,\\\\
+\\infty,&x<0.
\\end{cases}
\\]

For fixed \\(y\\), maximize \\(xy-x\\log x+x\\) over \\(x\\ge0\\). At an interior
maximizer its derivative is \\(y-\\log x\\), so \\(x=e^y\\). The second derivative
is \\(-1/x<0\\), confirming a maximum. Its value is

\\[
e^y y-e^y y+e^y=e^y,
\\]

while the boundary value at \\(x=0\\) is zero. Hence \\(f^*(y)=e^y\\). Equality in
Fenchel--Young occurs when \\(y=\\log x\\) for \\(x>0\\). The endpoint \\(x=0\\) has
no finite subgradient: no finite-slope line can support \\(x\\log x-x\\) there.
That does not contradict closedness or biconjugacy; it shows why a supremum of
supporting affine functions need not be attained by one finite slope at every
point.

<a id="section-370-numerical-and-logical-failure-diagnostics"></a>
## Numerical and logical failure diagnostics {#section-372-numerical-and-logical-failure-diagnostics}

Separation and conjugacy are exact mathematical constructions, but their use
in computation introduces several distinct questions.

First, an approximate projection \\(\\widehat p\\) need not produce a valid
separating inequality. The vector \\(z-\\widehat p\\) is valid only if one has a
certificate that
\\(\\langle z-\\widehat p,y-\\widehat p\\rangle\\le0\\) for all \\(y\\in C\\), perhaps
with a rigorously bounded tolerance. A small projection residual measured at a
few test points is evidence, not a universal certificate.

Second, conjugate formulas have domains. The conjugate of \\(-\\log x\\) is not a
finite expression for every dual value, and a semidefinite quadratic does not
have the same conjugate domain as a definite one. Record extended values rather
than allowing a numerical routine to return a misleading large finite number.

Third, equality tests such as Fenchel--Young gaps must be scaled. For finite
values define

\\[
G(x,y)=f(x)+f^*(y)-\\langle y,x\\rangle\\ge0.
\\]

A computed \\(G\\) slightly below zero can arise from rounding, while a small
absolute gap can be insignificant when all terms are enormous and cancel.
Report the terms, a scale, and the arithmetic precision used.

Fourth, a separating normal is not unique at a corner and may be badly scaled.
Statements about the “largest” violation are meaningless until a norm or other
normalization is fixed. The same geometric halfspace can be represented by
infinitely many positive multiples.

Finally, separation proves nonmembership in the modeled closed convex set. It
does not prove that the set correctly represents the scientific or
mathematical intention. Modeling validity remains a separate claim.

<a id="section-407-practice-with-complete-solutions"></a>
## Practice with complete solutions {#section-409-practice-with-complete-solutions}

<a id="section-409-exercise-1-projection-onto-a-halfspace"></a>
### Exercise 1: projection onto a halfspace {#section-411-exercise-1-projection-onto-a-halfspace}

Let \\(H=\\{x:a^Tx\\le b\\}\\), where \\(a\\ne0\\). Derive \\(P_H(z)\\) for every
\\(z\\), and verify the projection inequality directly.

<details>
<summary>Hint 1</summary>

Separate the case where z is already feasible.
</details>
<details>
<summary>Hint 2</summary>

For an exterior point, subtract a positive multiple of a and set aᵀp=b.
</details>
<details>
<summary>Full solution</summary>

**Solution.** If \\(a^Tz\\le b\\), then \\(z\\in H\\) and \\(P_H(z)=z\\). Suppose
\\(a^Tz>b\\). The closest point must lie on \\(a^Tx=b\\), and moving only in the
normal direction gives

\\[
p=z-\\frac{a^Tz-b}{\\|a\\|_2^2}a.
\\]

Indeed, \\(a^Tp=b\\). For any \\(y\\in H\\),

\\[
\\langle z-p,y-p\\rangle
=\\frac{a^Tz-b}{\\|a\\|_2^2}a^T(y-p)
=\\frac{a^Tz-b}{\\|a\\|_2^2}(a^Ty-b)\\le0.
\\]

Thus the characterization (1) holds, proving that \\(p\\) is the projection.
The distance is \\((a^Tz-b)/\\|a\\|_2\\), which is unchanged if both \\(a\\) and
\\(b\\) are multiplied by the same positive scale.
</details>


<a id="section-449-exercise-2-conjugate-of-an-affine-shifted-square"></a>
### Exercise 2: conjugate of an affine-shifted square {#section-451-exercise-2-conjugate-of-an-affine-shifted-square}

For \\(f(x)=\\tfrac{q}{2}(x-c)^2+d\\) with \\(q>0\\), compute \\(f^*\\) and state the
Fenchel--Young equality relation.

<details>
<summary>Hint 1</summary>

Optimize the scalar pairing minus the shifted square.
</details>
<details>
<summary>Hint 2</summary>

Set y−q(x−c)=0, then substitute the unique maximizing x.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Maximize

\\[
yx-\\frac q2(x-c)^2-d.
\\]

The derivative \\(y-q(x-c)\\) vanishes at \\(x=c+y/q\\). Substitution gives

\\[
f^*(y)=cy+\\frac{y^2}{2q}-d.
\\]

Because \\(f\\) is differentiable, equality holds exactly when
\\(y=f'(x)=q(x-c)\\), equivalently \\(x=c+y/q\\). Direct substitution then gives
\\(f(x)+f^*(y)=xy\\), providing an algebraic check on every sign and constant.
</details>


<a id="section-485-exercise-3-conjugate-of-an-interval-indicator"></a>
### Exercise 3: conjugate of an interval indicator {#section-487-exercise-3-conjugate-of-an-interval-indicator}

Let \\(C=[-2,3]\\subset\\mathbb R\\). Compute \\(\\delta_C^*(y)\\), identify where it
is differentiable, and interpret its subgradient at \\(y=0\\).

<details>
<summary>Hint 1</summary>

A linear function on an interval maximizes at an endpoint unless its slope is zero.
</details>
<details>
<summary>Hint 2</summary>

For positive y choose 3; for negative y choose −2; at zero every point maximizes.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The conjugate is the support function

\\[
\\delta_C^*(y)=\\sup_{-2\\le x\\le3}yx
=\\begin{cases}3y,&y\\ge0,\\\\-2y,&y<0.\\end{cases}
\\]

It is differentiable for \\(y\\ne0\\), with derivative \\(3\\) on the positive
side and \\(-2\\) on the negative side. At zero its convex subdifferential is
the interval \\([-2,3]\\). This is not an accident: every \\(x\\in C\\) maximizes
\\(0x\\). For a nonempty closed convex \\(C\\subseteq\\mathbb R^n\\) and finite \\(\\sigma_C(y)\\), the subdifferential is exactly the maximizing face
\\(\\partial\\sigma_C(y)=\\{x\\in C:\\langle y,x\\rangle=\\sigma_C(y)\\}\\). This face may be empty if the finite supremum is unattained; it need not consist of exposed points.
</details>


<a id="section-518-exercise-4-why-closedness-changes-biconjugacy"></a>
### Exercise 4: why closedness changes biconjugacy {#section-520-exercise-4-why-closedness-changes-biconjugacy}

Define \\(f(x)=0\\) for \\(x>0\\) and \\(f(x)=+\\infty\\) for \\(x\\le0\\). Compute
\\(f^*\\) and \\(f^{**}\\). What property prevents equality at \\(x=0\\)?

<details>
<summary>Hint 1</summary>

The conjugate is the supremum of yx over positive x.
</details>
<details>
<summary>Hint 2</summary>

For y≤0 that supremum is zero; conjugate that negative-half-line indicator next.
</details>
<details>
<summary>Full solution</summary>

**Solution.** For any \\(y\\),

\\[
f^*(y)=\\sup_{x>0}yx.
\\]

If \\(y>0\\), this is \\(+\\infty\\). If \\(y\\le0\\), its supremum is zero: for
\\(y<0\\) it is approached as \\(x\\downarrow0\\), and for \\(y=0\\) every positive
\\(x\\) gives zero. Therefore

\\[
f^*(y)=\\begin{cases}0,&y\\le0,\\\\+\\infty,&y>0.\\end{cases}
\\]

Conjugating again,

\\[
f^{**}(x)=\\sup_{y\\le0}xy
=\\begin{cases}0,&x\\ge0,\\\\+\\infty,&x<0.\\end{cases}
\\]

Thus \\(f^{**}(0)=0\\) while \\(f(0)=+\\infty\\). The original epigraph is not
closed; biconjugation fills in its missing boundary. Convexity alone was not
enough for exact reconstruction.
</details>


<a id="section-563-exercise-5-a-normal-cone-optimality-certificate"></a>
### Exercise 5: a normal-cone optimality certificate {#section-565-exercise-5-a-normal-cone-optimality-certificate}

Minimize \\(f(x)=\\tfrac12\\|x-z\\|_2^2\\) over a nonempty closed convex set \\(C\\).
Show that the normal-cone optimality condition is exactly the projection
condition, and evaluate the certificate when \\(C=\\mathbb R_+^n\\).

<details>
<summary>Hint 1</summary>

Insert the objective gradient into the normal-cone condition.
</details>
<details>
<summary>Hint 2</summary>

For the orthant inspect separately coordinates where z is negative and nonnegative.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The gradient is \\(\\nabla f(x)=x-z\\). The condition

\\[
0\\in x-z+N_C(x)
\\]

is equivalent to \\(z-x\\in N_C(x)\\), or
\\(\\langle z-x,y-x\\rangle\\le0\\) for every \\(y\\in C\\). By (3), this holds
exactly when \\(x=P_C(z)\\).

For the nonnegative orthant, projection is componentwise:
\\(x_i=\\max\\{z_i,0\\}\\). Let \\(a=z-x\\). If \\(z_i\\ge0\\), then \\(a_i=0\\). If
\\(z_i<0\\), then \\(x_i=0\\) and \\(a_i=z_i<0\\). Hence for every \\(y\\ge0\\),
\\(a^T(y-x)=\\sum_{z_i<0}z_i y_i\\le0\\). This verifies the universal inequality,
not merely stationarity at a sampled direction.
</details>

<a id="section-599-exercise-6-projections-are-nonexpansive"></a>
### Exercise 6: projections are nonexpansive {#section-601-exercise-6-projections-are-nonexpansive}

For a nonempty closed convex set C, prove $\\|P_C(z)-P_C(w)\\|\\le\\|z-w\\|$.

<details>
<summary>Hint 1</summary>

Apply the two projection inequalities using the other projection as the feasible comparison point.
</details>
<details>
<summary>Hint 2</summary>

Writing p and q for the projections, derive $\\|p-q\\|^2\\le(z-w)^T(p-q)$.
</details>
<details>
<summary>Full solution</summary>

Projection gives $(z-p)^T(q-p)\\le0$ and $(w-q)^T(p-q)\\le0$.
Adding after rearrangement yields
$\\|p-q\\|^2\\le(z-w)^T(p-q)\\le\\|z-w\\|\\|p-q\\|$.
If p=q the result is immediate; otherwise divide by their positive distance.
This actually proves the stronger firm inequality before Cauchy–Schwarz.
In the boundary-support proof it justifies $\\|P_C(z_k)-p\\|\\le\\|z_k-p\\|$
when p is already in C, without assuming a nearest point moves continuously.
</details>

<a id="section-625-exercise-7-a-singular-quadratic-conjugate"></a>
### Exercise 7: a singular quadratic conjugate {#section-627-exercise-7-a-singular-quadratic-conjugate}

Compute the conjugate of $f(x_1,x_2)=x_1^2/2$ on $\\mathbb R^2$.

<details>
<summary>Hint 1</summary>

The supremum separates into one bounded quadratic optimization and one unrestricted linear optimization.
</details>
<details>
<summary>Hint 2</summary>

If the second dual coordinate is nonzero, send x₂ to infinity in its sign direction.
</details>
<details>
<summary>Full solution</summary>

The expression is $y_1x_1-x_1^2/2+y_2x_2$. When $y_2\\ne0$, its supremum
is $+\\infty$. When $y_2=0$, completing the square in x₁ gives supremum
$y_1^2/2$, attained at $x_1=y_1$ with arbitrary x₂. Thus the conjugate is
finite precisely on the range of the Hessian, the line $y_2=0$. Replacing the
singular Hessian by an inverse would lose this domain restriction.
</details>

<a id="section-649-exercise-8-the-logarithmic-domain"></a>
### Exercise 8: the logarithmic domain {#section-651-exercise-8-the-logarithmic-domain}

For $f(x)=-\\log x$ when x>0 and $+\\infty$ otherwise, compute $f^*(y)$.

<details>
<summary>Hint 1</summary>

Maximize yx+log x over positive x.
</details>
<details>
<summary>Hint 2</summary>

Only y<0 gives an interior maximizer, at x=−1/y. Check y=0 separately.
</details>
<details>
<summary>Full solution</summary>

If y<0, the derivative y+1/x vanishes at x=−1/y, and the second derivative
is negative. The value is $-1-\\log(-y)$. If y=0, log x is unbounded above;
if y>0 the positive linear term makes the supremum unbounded too. Therefore
$f^*(y)=-1-\\log(-y)$ for y<0 and is $+\\infty$ otherwise. The finite
Fenchel–Young equality relation is $y=-1/x$. A finite formula without this
negative-domain restriction is not the conjugate.
</details>

<a id="section-674-exercise-9-a-hole-is-invisible-to-support-functions"></a>
### Exercise 9: a hole is invisible to support functions {#section-676-exercise-9-a-hole-is-invisible-to-support-functions}

Let S be the unit circle in $\\mathbb R^2$ and B the closed unit disk. Show
their support functions agree, although their indicator functions differ.

<details>
<summary>Hint 1</summary>

Use Cauchy–Schwarz to bound the pairing with a vector in either set.
</details>
<details>
<summary>Hint 2</summary>

For a nonzero dual vector, its unit direction belongs to the circle already.
</details>
<details>
<summary>Full solution</summary>

For either set, $y^Tx\\le\\|y\\|$. If y is nonzero, x=y/‖y‖ lies on the
circle and attains that bound; if y=0 both suprema are zero. Thus both support
functions are ‖y‖. But $\\delta_S(0)=+\\infty$ while $\\delta_B(0)=0$.
Support functions remember the closed convex hull, so using one as a certificate
for disk membership does not prove circle membership.
</details>

<a id="section-699-exercise-10-normal-cones-at-a-corner"></a>
### Exercise 10: normal cones at a corner {#section-701-exercise-10-normal-cones-at-a-corner}

Compute $N_C(p)$ for C=$\\mathbb R_+^2$ at p=(0,0) and at p=(1,0).

<details>
<summary>Hint 1</summary>

Use the universal defining inequality against arbitrary nonnegative y.
</details>
<details>
<summary>Hint 2</summary>

At (1,0), the first feasible coordinate can move a little in either direction.
</details>
<details>
<summary>Full solution</summary>

At the origin, $a^Ty\\le0$ for all nonnegative y holds exactly when both
coordinates of a are nonpositive. At (1,0), comparisons with (1±ε,0) for
small ε force a₁=0, and comparisons with (1,t), t≥0, force a₂≤0. These
conditions also suffice by substitution. Thus the cones are the negative
orthant and the downward vertical ray respectively. Several supporting normals
at a corner are geometric information, not a failure of the definition.
</details>

<a id="section-724-summary-and-connections"></a>
## Summary and connections {#section-726-summary-and-connections}

Projection gives constructive strict separation of an exterior point from a
closed convex set. Boundary limits give supporting hyperplanes, and normal
cones collect all supporting directions. Convex conjugacy records every affine
minorant; Fenchel--Young equality is exactly a subgradient certificate, while
biconjugacy reconstructs proper closed convex functions and convexifies more
general ones.

These facts connect backward to first-order optimality: gradient balance with a
normal cone is a supporting-hyperplane statement. They connect forward to
perturbation duality: a multiplier will be a supporting slope of an optimal
value function, and a primal--dual gap will be a sum of Fenchel--Young gaps.
They also prepare later algorithmic chapters, where projections and proximal
maps turn these geometric certificates into iterations.

<a id="section-740-source-and-verification-note"></a>
## Sources {#section-742-source-and-verification-note}

Rockafellar, *Convex Analysis* (1970), develops separation and conjugacy in finite dimensions. The biconjugacy discussion above uses the standard global affine-minorant separation consequence as an explicitly stated input. Properness, closure, and ambient-space hypotheses remain explicit; no priority claim is made.
`;export{e as default};