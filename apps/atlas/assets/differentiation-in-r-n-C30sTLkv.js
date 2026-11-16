var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: differentiation-in-r-n
title: "Differentiation in Euclidean Space"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Differentiation in Euclidean Space

A derivative in several variables must predict the effect of every small displacement, with one coherent approximation. Separate coordinate tests do not automatically provide that prediction. Even testing every straight line through a point can miss behavior along a curved approach. The total derivative is therefore defined as a linear map with an error estimate uniform over all sufficiently small displacement vectors.

The required preparation is [Metric Spaces, Open Sets, and Closed Sets](metric-spaces-open-and-closed.md), [Continuity, Derivatives, and Hypothesis Audits](continuity-differentiation.md), and [The Fundamental Theorem and Its Boundaries](fundamental-theorem-and-absolute-continuity.md), together with matrix multiplication and linear maps; [Linear Algebra: Structure and Proofs](../linear-algebra-structure-proofs.md) provides further preparation. The preceding [Baire Category and Uniform Boundedness](baire-category.md) explains another passage from individual control to uniform control; the present chapter makes the uniformity in differentiability explicit. Needed finite-dimensional norm estimates are developed below. No measure-theoretic differentiation theorem is assumed.

We work on open subsets of finite-dimensional real Euclidean spaces. Openness ensures that all sufficiently small vectors are legal displacements. Statements at a boundary require different, explicitly restricted definitions and are not silently included in an interior derivative theorem.

## Linear maps and quantitative size

**Definition 20.1 (Euclidean and operator norms).** For $x=(x_1,\\ldots,x_n)$, let $\\|x\\|=(\\sum_jx_j^2)^{1/2}$. For a linear map $A:\\mathbb R^n\\to\\mathbb R^m$, let
$$\\|A\\|_{\\mathrm{op}}=\\sup_{\\|h\\|\\le1}\\|Ah\\|.$$
The same supremum may be taken over unit vectors when $n\\ge1$.

Every such linear map is bounded. If its matrix entries are $a_{ij}$, Cauchy–Schwarz in each row gives
$$\\|Ah\\|^2=\\sum_i\\left|\\sum_ja_{ij}h_j\\right|^2\\le\\left(\\sum_{i,j}|a_{ij}|^2\\right)\\|h\\|^2.$$
Thus the supremum is finite and $\\|Ah\\|\\le\\|A\\|_{\\mathrm{op}}\\|h\\|$. Applying that inequality twice gives $\\|BA\\|_{\\mathrm{op}}\\le\\|B\\|_{\\mathrm{op}}\\|A\\|_{\\mathrm{op}}$ for composable linear maps. These estimates, rather than a picture of an infinitesimal arrow, control remainder terms.

The norms $\\|x\\|_\\infty=\\max_j|x_j|$ and $\\|x\\|_1=\\sum_j|x_j|$ satisfy
$$\\|x\\|_\\infty\\le\\|x\\|\\le\\|x\\|_1\\le\\sqrt n\\|x\\|.$$
They give the same notion of convergence in a fixed finite dimension, although their numerical distances differ. Consequently a small-remainder definition is unchanged if one consistently replaces the norms by equivalent ones. The constants depend on the dimension; this observation is not a statement about arbitrary infinite-dimensional spaces.

**Worked Example 20.2 (A sharp matrix norm).** Let $A(h,k)=(3h,k/2)$. Then
$$\\|A(h,k)\\|^2=9h^2+k^2/4\\le9(h^2+k^2),$$
so $\\|A\\|_{\\mathrm{op}}\\le3$. Equality occurs at $(1,0)$, hence the norm is exactly three. The matrix-entry bound above would instead give $\\sqrt{9+1/4}$, a valid but larger bound. A usable bound need not be optimal, but an equality claim needs a vector attaining it or an equivalent argument.

## One linear approximation in every direction

**Definition 20.3 (Total, or Fréchet, derivative).** Let $U\\subseteq\\mathbb R^n$ be open and $f:U\\to\\mathbb R^m$. The function is differentiable at $a\\in U$ if a linear map $A$ satisfies
$$f(a+h)=f(a)+Ah+r(h),\\qquad \\frac{\\|r(h)\\|}{\\|h\\|}\\longrightarrow0\\quad(h\\to0,\\ h\\ne0).$$
The map is written $Df(a)$. The remainder notation $r(h)=o(\\|h\\|)$ means that for every $\\varepsilon>0$ one radius works for **all** displacement vectors inside it.

**Proposition 20.4 (Uniqueness and continuity).** The derivative is unique, and differentiability at $a$ implies continuity there.

*Proof.* If $A,B$ both work, subtract the two expansions to obtain $(A-B)h=o(\\|h\\|)$. For a fixed unit vector $u$, substitute $h=tu$, divide by $|t|$, and let $t\\to0$. The left norm is $\\|(A-B)u\\|$, so it is zero. Linearity extends agreement from unit vectors to every vector. For continuity, the derivative expansion gives $\\|f(a+h)-f(a)\\|\\le\\|A\\|\\|h\\|+\\|r(h)\\|$, which tends to zero. ∎

**Definition 20.5 (Partial and directional derivatives).** The $j$th partial derivative is the limit along $h=te_j$, where $e_j$ is the $j$th coordinate vector. A directional derivative in a vector $v$ is
$$D_vf(a)=\\lim_{t\\to0}\\frac{f(a+tv)-f(a)}t,$$
when this limit exists. If $f$ is totally differentiable, substitution into its expansion gives $D_vf(a)=Df(a)v$.

Thus the columns of the derivative's matrix are the partial derivatives. This matrix is the Jacobian. For scalar output, $Df(a)h=\\nabla f(a)\\cdot h$. Total differentiability guarantees all directional derivatives and their linear dependence on $v$. The reverse implication needs uniform control and is false even when all directional derivatives exist and are zero.

**Worked Example 20.6 (Every line test can miss a curved defect).** Define $f(0,0)=0$ and, away from the origin,
$$f(x,y)=\\frac{x^4y}{x^8+y^2}.$$
For a direction $(a,b)$ with $b\\ne0$,
$$\\frac{f(ta,tb)}t=\\frac{t^2a^4b}{t^6a^8+b^2}\\longrightarrow0.$$
For $b=0$ the function is zero along the line, so its directional derivative is again zero. Thus all directional derivatives at the origin exist and form the zero linear map.

Nevertheless, along $y=x^4$ with $x\\ne0$, $f(x,x^4)=1/2$. These points approach the origin, where the assigned value is zero. The function is not continuous and hence is not totally differentiable there. No radius can make every small vector behave like the separate fixed-direction limits. This example distinguishes a family of linewise limits from one uniform remainder estimate.

**Worked Example 20.7 (A direct remainder proof).** For $g(x,y)=x^2y$, compute the derivative at $(a,b)$ from the definition. Expanding gives
$$g(a+h,b+k)-g(a,b)=2ab\\,h+a^2k+bh^2+2ahk+h^2k.$$
The proposed linear part is $A(h,k)=2ab\\,h+a^2k$. Put $\\rho=\\sqrt{h^2+k^2}$. For $\\rho\\le1$, the remainder satisfies
$$|bh^2+2ahk+h^2k|\\le(|b|+2|a|+1)\\rho^2.$$
After dividing by $\\rho$, the bound tends to zero. Thus $Dg(a,b)$ really is the stated linear map. Merely computing the two partial derivatives would have suggested the same matrix but would not itself have established the total approximation.

## When continuous partial derivatives suffice

**Theorem 20.8 (A practical differentiability criterion).** Suppose all first partial derivatives of $f:U\\subseteq\\mathbb R^n\\to\\mathbb R^m$ exist on a neighbourhood of $a$ and are continuous at $a$. Then $f$ is totally differentiable at $a$, with Jacobian formed from those partial derivatives.

*Proof.* First take scalar output. Choose a ball about $a$ inside the neighbourhood. For sufficiently small $h$, change the coordinates one at a time from $a$ to $a+h$. The intermediate points and each connecting coordinate segment lie in that ball. The telescoping difference is a sum of $n$ one-coordinate increments. Apply the one-variable mean value theorem to each nonzero increment; a zero coordinate contributes zero without needing a mean-value point. We obtain
$$f(a+h)-f(a)=\\sum_{j=1}^n\\partial_jf(\\xi_j)h_j,$$
where each $\\xi_j$ lies on its coordinate segment and tends to $a$ as $h\\to0$.

Subtract $\\sum_j\\partial_jf(a)h_j$. Given $\\varepsilon>0$, continuity of the finitely many partials provides a common radius making every coefficient error below $\\varepsilon/\\sqrt n$. Therefore the absolute remainder is at most
$$\\frac\\varepsilon{\\sqrt n}\\sum_j|h_j|\\le\\varepsilon\\|h\\|.$$
For vector output, apply this argument to each of the finitely many components with tolerance $\\varepsilon/\\sqrt m$. Combining the component remainders in the Euclidean norm gives the same total bound. ∎

The neighbourhood assumption lets the one-variable restrictions be differentiated along the entire coordinate segments. Continuity is needed only at the base point for this pointwise conclusion. If the partials are continuous throughout an open set, the function is continuously differentiable there, written $C^1$. Differentiability alone does not imply that its derivative varies continuously.

## Chain rules preserve the remainder contract

**Theorem 20.9 (Chain rule).** Let $f:U\\subseteq\\mathbb R^n\\to\\mathbb R^m$ be differentiable at $a$, and let $g:V\\subseteq\\mathbb R^m\\to\\mathbb R^p$ be differentiable at $b=f(a)$, where both domains are open and $f$ maps a neighbourhood of $a$ into $V$. Then
$$D(g\\circ f)(a)=Dg(b)Df(a).$$

*Proof.* Write $f(a+h)=b+Ah+r(h)$ with $r(h)=o(\\|h\\|)$, and $g(b+k)=g(b)+Bk+s(k)$ with $s(k)=o(\\|k\\|)$. The displacement $k=Ah+r(h)$ satisfies $\\|k\\|\\le C\\|h\\|$ near zero for some constant $C$, by boundedness of $A$ and the remainder estimate. Substitution gives
$$g(f(a+h))-g(b)=BAh+Br(h)+s(Ah+r(h)).$$
The first error is $o(\\|h\\|)$ because $B$ is bounded. Given any small tolerance for the second remainder, its bound by that tolerance times $\\|k\\|$ is at most the tolerance times $C\\|h\\|$. This proves it too is $o(\\|h\\|)$. If $k=0$, that remainder is zero. The derivative is therefore $BA$. ∎

Sum and product rules follow either from direct expansions or by composing with the corresponding finite-dimensional arithmetic maps. Matrix order matters: $Dg(b)$ acts on the output displacement of $Df(a)$, so the product is written in that order. Even square Jacobian matrices generally do not commute.

**Proposition 20.10 (Mean-value inequality).** Suppose $f$ is continuous on a line segment $[x,y]$, differentiable at its interior points in an open neighbourhood, and $\\|Df(z)\\|_{\\mathrm{op}}\\le M$ there. Then
$$\\|f(y)-f(x)\\|\\le M\\|y-x\\|.$$

*Proof.* If the output difference is zero, the claim is immediate. Otherwise let $u=[f(y)-f(x)]/\\|f(y)-f(x)\\|$. Apply the scalar mean value theorem to $\\phi(t)=u\\cdot f(x+t(y-x))$ on $[0,1]$. By the chain rule, $|\\phi'(t)|\\le\\|u\\|\\|Df\\|\\|y-x\\|\\le M\\|y-x\\|$. But $\\phi(1)-\\phi(0)=\\|f(y)-f(x)\\|$, proving the inequality. ∎

There need not be one intermediate point giving a vector equality $f(y)-f(x)=Df(c)(y-x)$. For $f(t)=(\\cos t,\\sin t)$ on $[0,2\\pi]$, the output difference is zero, while its derivative $(-\\sin t,\\cos t)$ is never the zero vector. The inequality survives because a scalar projection is chosen for the argument, rather than demanding simultaneous mean-value equalities for all components.

Convex domains are useful here because every segment between two of their points stays in the domain. A uniform derivative bound on a nonconvex set does not automatically control pairs whose connecting segment leaves that set. This is the multivariable counterpart of the interval qualification in the one-variable mean value theorem.

## Second derivatives and quadratic approximation

**Definition 20.11 (Second derivative and Hessian).** If $f$ is differentiable on an open set and its derivative map is differentiable at $a$, its second derivative is a bilinear map. For scalar $f$, its matrix representation is the Hessian, with entries $\\partial_i\\partial_jf(a)$. A function is $C^2$ when its second partial derivatives exist and are continuous on the open set. Applying Theorem 20.8 to the matrix entries of the first derivative then makes that derivative map differentiable, so this coordinate condition supplies the stated second total derivative.

**Theorem 20.12 (Symmetry of mixed derivatives).** If a scalar function is $C^2$ near $a$, then $\\partial_i\\partial_jf(a)=\\partial_j\\partial_if(a)$.

*Proof.* Fix all coordinates except the two under consideration, and translate notation so the base coordinates are $(a,b)$. For small positive $h,k$, form
$$Q= f(a+h,b+k)-f(a,b+k)-f(a+h,b)+f(a,b).$$
Apply the mean value theorem in the first coordinate to the difference of the two horizontal restrictions, then in the second coordinate to the resulting derivative difference. This gives
$$Q/(hk)=f_{xy}(a+\\theta h,b+\\eta k)$$
for some $0<\\theta,\\eta<1$. Performing the mean value steps in the opposite order gives $Q/(hk)=f_{yx}(a+\\theta' h,b+\\eta' k)$. As $h,k\\to0$, continuity of the second partials makes these expressions tend to the two mixed partials at the base point. They are equal for every such rectangle, so their limits are equal. ∎

**Theorem 20.13 (Second-order Taylor approximation).** If $f:U\\to\\mathbb R$ is $C^2$ near $a$, then
$$f(a+h)=f(a)+Df(a)h+\\tfrac12h^TH_f(a)h+o(\\|h\\|^2).$$

*Proof.* For a small displacement whose segment is in $U$, set $\\phi(t)=f(a+th)$. The chain rule gives $\\phi'(t)=Df(a+th)h$ and $\\phi''(t)=h^TH_f(a+th)h$. Two applications of the one-variable fundamental theorem, or integration by parts, give
$$\\phi(1)=\\phi(0)+\\phi'(0)+\\int_0^1(1-t)\\phi''(t)\\,dt.$$
Subtract the same integral with constant Hessian $H_f(a)$. The remainder has magnitude at most
$$\\tfrac12\\|h\\|^2\\sup_{0\\le t\\le1}\\|H_f(a+th)-H_f(a)\\|_{\\mathrm{op}}.$$
Continuity at $a$ makes the supremum tend to zero, giving the stated remainder. ∎

For example, $f(x,y)=x^2+xy+2y^2$ has Hessian $\\begin{pmatrix}2&1\\\\1&4\\end{pmatrix}$. Its second-order formula is exact at every center because the Hessian is constant; there is no higher-order error. For a general $C^2$ function, the remainder estimate is local and depends on how much the Hessian varies on the segment. It should not be converted into a global quadratic model without such control.

## What a Hessian proves at a critical point

At an interior local minimum of a differentiable scalar function, every directional derivative vanishes, so its total derivative is zero. If the function is twice differentiable there, restriction to each line and the one-variable second-order expansion also give \\(v^TH_f(a)v\\ge0\\) for every vector \\(v\\). This is a necessary semidefiniteness condition.

For a \\(C^2\\) function, positive definiteness gives a sufficient strict-minimum condition. The continuous quadratic form on the unit sphere has a positive minimum \\(\\lambda\\), by compactness. Thus \\(h^TH_f(a)h\\ge\\lambda\\|h\\|^2\\). At a critical point the linear term vanishes; choose a small neighbourhood where the Taylor remainder is at most \\(\\lambda\\|h\\|^2/4\\). The second-order formula gives \\(f(a+h)-f(a)\\ge\\lambda\\|h\\|^2/4>0\\) for nonzero sufficiently small displacements. Negative definiteness gives a strict maximum by applying the same argument to the negative function.

If the Hessian has both positive and negative directions, the Taylor formula produces both larger and smaller nearby values along the corresponding lines. Such a critical point is a saddle. A zero or merely semidefinite Hessian requires more information: the functions \\(x^4+y^4\\) and \\(x^4-y^4\\) have the same zero Hessian at the origin, but one has a strict minimum and the other a saddle. The second derivative controls the quadratic term only. When that term vanishes in a direction, higher-order terms decide the behavior there; the necessary condition cannot be upgraded to a sufficient one without that extra control.

For a scalar function, the total derivative also identifies the steepest infinitesimal increase. Writing it as the inner product with the gradient, Cauchy–Schwarz bounds its value on unit vectors by the gradient length. If the gradient is nonzero, equality occurs in its normalized direction, and the opposite direction gives the negative of that value. Differentiability turns these first-order predictions into actual nearby increases and decreases: choose the remainder smaller than half the gradient length times the displacement norm along those directions. Every sufficiently short positive step then has the predicted strict sign. Hence a nonzero gradient excludes an interior local extremum. This argument concerns sufficiently small legal steps inside the open domain; it does not claim that following that direction by an arbitrary finite distance will keep increasing the function.

## Exercises

### ANA-CH26-E001 — Exercise 1: compare norms
<a id="ANA-CH26-E001"></a>

Prove $\\|x\\|_\\infty\\le\\|x\\|_2\\le\\sqrt n\\|x\\|_\\infty$ and explain why convergence in either norm is equivalent in fixed dimension.

<details>
<summary>Hint 1</summary>

Compare each coordinate square with the largest coordinate square.

</details>
<details>
<summary>Hint 2</summary>

Use the two inequalities in opposite directions for the two convergence implications.

</details>
<details>
<summary>Solution</summary>

Every coordinate square is at most the sum of all squares, giving the first inequality. The sum of $n$ coordinate squares is at most $n\\|x\\|_\\infty^2$, giving the second after square roots. Apply these inequalities to $x_k-x$; each norm tending to zero forces the other to do so, since $\\sqrt n$ is a fixed constant.

</details>

### ANA-CH26-E002 — Exercise 2: a scalar linear functional
<a id="ANA-CH26-E002"></a>

For $L(h)=a\\cdot h$, prove $\\|L\\|_{\\mathrm{op}}=\\|a\\|$.

<details>
<summary>Hint 1</summary>

Cauchy–Schwarz gives an upper bound.

</details>
<details>
<summary>Hint 2</summary>

If $a\\ne0$, test the unit vector in its direction; treat $a=0$ separately.

</details>
<details>
<summary>Solution</summary>

For $\\|h\\|\\le1$, $|a\\cdot h|\\le\\|a\\|$, so the norm is at most $\\|a\\|$. If $a\\ne0$, choose $h=a/\\|a\\|$, giving value $\\|a\\|$ and proving equality. If $a=0$, the functional and both norms are zero.

</details>

### ANA-CH26-E003 — Exercise 3: derivative uniqueness
<a id="ANA-CH26-E003"></a>

Prove derivative uniqueness by testing the difference of two candidate maps on $h=tv$, for an arbitrary fixed nonzero vector $v$.

<details>
<summary>Hint 1</summary>

Subtract the two small-remainder expansions.

</details>
<details>
<summary>Hint 2</summary>

Divide by $|t|$ and note that the resulting left side is independent of $t$.

</details>
<details>
<summary>Solution</summary>

If $A,B$ both work, $\\|(A-B)tv\\|/\\|tv\\|\\to0$. For $t\\ne0$ this ratio equals $\\|(A-B)v\\|/\\|v\\|$, so it must be zero. Thus $Av=Bv$ for every nonzero $v$, and both maps send zero to zero. Therefore they coincide.

</details>

### ANA-CH26-E004 — Exercise 4: a quadratic map
<a id="ANA-CH26-E004"></a>

Compute the derivative of $f(x,y)=x^2+3xy$ at $(a,b)$ and bound the remainder by a constant times $h^2+k^2$.

<details>
<summary>Hint 1</summary>

Expand $f(a+h,b+k)$ before collecting linear terms.

</details>
<details>
<summary>Hint 2</summary>

Use $2|hk|\\le h^2+k^2$ on the quadratic remainder.

</details>
<details>
<summary>Solution</summary>

The linear term is $(2a+3b)h+3ak$. The remainder is $h^2+3hk$, whose magnitude is at most $h^2+\\tfrac32(h^2+k^2)\\le\\tfrac52(h^2+k^2)$. Dividing by $\\sqrt{h^2+k^2}$ makes this bound tend to zero, so the stated linear map is the total derivative.

</details>

### ANA-CH26-E005 — Exercise 5: missing uniformity
<a id="ANA-CH26-E005"></a>

For the function in Example 20.6, verify all directional derivatives at the origin are zero and exhibit a convergent input sequence whose outputs do not tend to zero.

<details>
<summary>Hint 1</summary>

Treat directions with second coordinate zero separately.

</details>
<details>
<summary>Hint 2</summary>

Take inputs $(1/j,1/j^4)$ for the curved approach.

</details>
<details>
<summary>Solution</summary>

For direction $(a,b)$ with $b\\ne0$, the difference quotient is $t^2a^4b/(t^6a^8+b^2)$, tending to zero. For $b=0$ it is identically zero. But $(1/j,1/j^4)\\to(0,0)$ and every output is $1/2$, so continuity fails. Directionwise limits, even when the resulting map is linear, do not supply a total derivative.

</details>

### ANA-CH26-E006 — Exercise 6: product-output Jacobian
<a id="ANA-CH26-E006"></a>

For $F(x,y)=(x^2y,e^{x+y})$, compute $DF(1,0)$ and its prediction for a displacement $(h,k)$. Justify differentiability.

<details>
<summary>Hint 1</summary>

Compute the partial derivatives of both components.

</details>
<details>
<summary>Hint 2</summary>

The entries are continuous near the point, so Theorem 20.8 supplies the total-derivative justification.

</details>
<details>
<summary>Solution</summary>

The Jacobian is $\\begin{pmatrix}2xy&x^2\\\\e^{x+y}&e^{x+y}\\end{pmatrix}$, giving $DF(1,0)=\\begin{pmatrix}0&1\\\\e&e\\end{pmatrix}$. The predicted output change is $(k,e(h+k))$. All first partials are continuous, so the criterion proves total differentiability; the actual error divided by $\\sqrt{h^2+k^2}$ tends to zero.

</details>

### ANA-CH26-E007 — Exercise 7: chain-rule order
<a id="ANA-CH26-E007"></a>

Let $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ and $B=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$. Calculate derivatives of the linear compositions $B\\circ A$ and $A\\circ B$ and compare them.

<details>
<summary>Hint 1</summary>

A linear map is its own derivative at every point.

</details>
<details>
<summary>Hint 2</summary>

The outer map's matrix multiplies on the left.

</details>
<details>
<summary>Solution</summary>

The matrices are $BA=\\begin{pmatrix}2&2\\\\0&3\\end{pmatrix}$ and $AB=\\begin{pmatrix}2&3\\\\0&3\\end{pmatrix}$. They differ, for example in the image of $(0,1)$. The chain rule follows the order of the actual maps and does not permit commuting the factors.

</details>

### ANA-CH26-E008 — Exercise 8: a derivative bound
<a id="ANA-CH26-E008"></a>

Suppose $f:U\\to\\mathbb R^m$ is differentiable on an open convex set and $\\|Df(x)\\|\\le7$ throughout it. Prove a uniform continuity bound and give a valid $\\delta$ for output tolerance $\\varepsilon$.

<details>
<summary>Hint 1</summary>

Convexity keeps the segment between any pair of inputs in the domain.

</details>
<details>
<summary>Hint 2</summary>

Apply the mean-value inequality, then choose an input tolerance making its right side below $\\varepsilon$.

</details>
<details>
<summary>Solution</summary>

The inequality gives $\\|f(x)-f(y)\\|\\le7\\|x-y\\|$ for all inputs. Taking $\\delta=\\varepsilon/7$ ensures that input distance strictly below $\\delta$ gives output distance strictly below $\\varepsilon$. This is uniform because the choice does not depend on the base points.

</details>

### ANA-CH26-E009 — Exercise 9: no vector mean-value equality
<a id="ANA-CH26-E009"></a>

For $f(t)=(\\cos t,\\sin t)$ on $[0,2\\pi]$, show that no $c$ gives $f(2\\pi)-f(0)=2\\pi f'(c)$. Explain why the mean-value inequality still holds.

<details>
<summary>Hint 1</summary>

The endpoint outputs agree.

</details>
<details>
<summary>Hint 2</summary>

The derivative vector has norm one at every point.

</details>
<details>
<summary>Solution</summary>

The left side is zero. The right side has norm $2\\pi$ because $f'(c)=(-\\sin c,\\cos c)$ has norm one, so equality is impossible. The inequality reads $0\\le1\\cdot2\\pi$, which is true. Scalar mean-value theorems cannot be combined by assuming all components choose the same intermediate point.

</details>

### ANA-CH26-E010 — Exercise 10: a domain qualification
<a id="ANA-CH26-E010"></a>

Give an open disconnected subset of $\\mathbb R$ and a differentiable function with derivative zero everywhere that is not globally constant. Explain its relevance to derivative bounds on nonconvex domains.

<details>
<summary>Hint 1</summary>

Assign different constants on two disjoint intervals.

</details>
<details>
<summary>Hint 2</summary>

The segment joining points from different components leaves the domain.

</details>
<details>
<summary>Solution</summary>

On $U=(-2,-1)\\cup(1,2)$, define $f=0$ on the first interval and $f=1$ on the second. The function is differentiable with derivative zero everywhere but is not globally constant. A segment connecting the two intervals passes through omitted points, so the mean-value proof cannot be used for such a pair. A derivative bound must control a region containing the connecting segment to imply the displayed pairwise estimate.

</details>

### ANA-CH26-E011 — Exercise 11: Hessian symmetry
<a id="ANA-CH26-E011"></a>

Compute the Hessian of $f(x,y)=x^3y+xy^2$ and verify mixed-partial symmetry directly. Identify the general theorem's regularity hypothesis.

<details>
<summary>Hint 1</summary>

First find both first partial derivatives.

</details>
<details>
<summary>Hint 2</summary>

Differentiate them again in the two coordinate orders.

</details>
<details>
<summary>Solution</summary>

The first partials are $3x^2y+y^2$ and $x^3+2xy$. Thus the Hessian is $\\begin{pmatrix}6xy&3x^2+2y\\\\3x^2+2y&2x\\end{pmatrix}$, visibly symmetric. All these polynomial derivatives are continuous, meeting the $C^2$ hypothesis of Theorem 20.12. The theorem does not assert unrestricted equality from mere existence of two mixed derivatives at a single point.

</details>

### ANA-CH26-E012 — Exercise 12: exact Taylor polynomial
<a id="ANA-CH26-E012"></a>

For $f(x,y)=x^2+xy+2y^2$, write its second-order expansion at $(1,-1)$ and show its remainder is zero.

<details>
<summary>Hint 1</summary>

Find the value, gradient and constant Hessian at the center.

</details>
<details>
<summary>Hint 2</summary>

The quadratic part in a displacement $(h,k)$ is $h^2+hk+2k^2$.

</details>
<details>
<summary>Solution</summary>

The value is $2$ and the gradient is $(2x+y,x+4y)=(1,-3)$ at the center. Therefore $f(1+h,-1+k)=2+h-3k+h^2+hk+2k^2$. Expanding the original polynomial gives exactly this expression, so the remainder is identically zero. Equivalently, the Hessian is constant and the remainder integral subtracts itself.

</details>

### ANA-CH26-E013 — Exercise 13: vanishing derivative on a convex set
<a id="ANA-CH26-E013"></a>

Prove that a differentiable map with zero derivative everywhere on a nonempty open convex set is constant, allowing vector-valued output.

<details>
<summary>Hint 1</summary>

Join arbitrary points by their segment.

</details>
<details>
<summary>Hint 2</summary>

Use the mean-value inequality with bound $M=0$.

</details>
<details>
<summary>Solution</summary>

For any $x,y$ in the domain, convexity keeps their segment inside it and the derivative norm is zero at every interior point. The inequality yields $\\|f(y)-f(x)\\|\\le0$, so the outputs agree. Since the points were arbitrary, the map is constant. The argument does not need a false vector-valued equality at an intermediate point.

</details>

### ANA-CH26-E014 — Exercise 14: differentiability without a continuous derivative
<a id="ANA-CH26-E014"></a>

Define $f(x,y)=x^2\\sin(1/x)$ for $x\\ne0$ and $f(0,y)=0$. Prove total differentiability at $(0,0)$ but failure of continuity of its derivative there.

<details>
<summary>Hint 1</summary>

The function value has magnitude at most $x^2$.

</details>
<details>
<summary>Hint 2</summary>

For $x\\ne0$, the $x$ partial is $2x\\sin(1/x)-\\cos(1/x)$.

</details>
<details>
<summary>Solution</summary>

With proposed zero derivative, $|f(h,k)|/\\sqrt{h^2+k^2}\\le h^2/\\sqrt{h^2+k^2}\\le\\sqrt{h^2+k^2}\\to0$, proving total differentiability. For $x\\ne0$, the Jacobian is $(2x\\sin(1/x)-\\cos(1/x),0)$. Along $x_j=1/(2\\pi j)$ it equals $(-1,0)$, whereas at the origin it is zero. Thus the derivative map is not continuous there, distinguishing differentiability from $C^1$ regularity.

</details>

### ANA-CH26-E015 — Exercise 15: a quantitative quadratic remainder
<a id="ANA-CH26-E015"></a>

Suppose $f$ is $C^2$ on a convex neighbourhood and $\\|H_f(a+th)-H_f(a)\\|\\le L t\\|h\\|$ along a permitted segment for $0\\le t\\le1$. Bound its second-order Taylor remainder.

<details>
<summary>Hint 1</summary>

Use the exact integral remainder after subtracting the constant Hessian term.

</details>
<details>
<summary>Hint 2</summary>

Compute $\\int_0^1t(1-t)\\,dt$.

</details>
<details>
<summary>Solution</summary>

The remainder is $\\int_0^1(1-t)h^T[H_f(a+th)-H_f(a)]h\\,dt$. Its magnitude is at most $L\\|h\\|^3\\int_0^1t(1-t)\\,dt=L\\|h\\|^3/6$. The estimate uses a specified Hessian variation bound on the whole segment, strengthening the qualitative $o(\\|h\\|^2)$ conclusion under this additional hypothesis.

</details>

## Sources and provenance

This chapter is original exposition with original exercise development. The unchanged local seed is Quarto Real Analysis **Differentiation in Euclidean Space**. Primary author-text further reading is Jiří Lebl, [*Basic Analysis*, §8.3, The derivative](https://www.jirka.org/ra/html/sec_svtheder.html), with adjacent sections on continuity and higher derivatives. All derivative criteria and remainder arguments used here are proved in the chapter; matrix notation alone is not treated as proof of differentiability.

## Summary

The total derivative is one bounded linear map controlling every small vector with a uniform relative error. It is unique and implies continuity, while partial or directional limits alone may miss curved approaches. Continuous first partials supply a sufficient differentiability criterion. The chain rule composes the linear maps in their actual order, and scalar projection gives a valid vector mean-value inequality. Continuous second partials yield symmetry and a quadratic Taylor formula with an explicit integral remainder. In [Inverse and Implicit Function Theorems](inverse-implicit-function-theorems.md), these estimates will turn an invertible derivative into a genuine local inverse through a contraction argument.
`;export{e as default};