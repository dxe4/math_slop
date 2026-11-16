var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: curvature-turning-and-certified-orientation
title: "Curvature, Polygon Turning, and Certified Orientation"
level: undergraduate
license: CC BY-SA 4.0
---

# Curvature, Polygon Turning, and Certified Orientation

How much does a path bend, how does a polygon represent that bending, and can a coordinate calculation reliably tell which way it turns? This optional clinic joins those three questions for plane circles and ellipses. It adds a bounded gateway to smooth, discrete and computational geometry, not a complete specialist course in any of them. Surfaces, manifolds, general mesh convergence and adaptive-predicate implementations remain further subjects.

**Preparation and effort.** Use vectors, Euclidean norms, signed two-by-two determinants, radians, trigonometric differentiation, the chain rule and elementary integration. You should be able to differentiate a parametrized curve twice and compare positive fractions. The optional JavaScript illustration uses only integer arithmetic and coordinate subtraction.

For preparation, read [the existing regular-curve lesson](/calculus/#chapter/19), [orientation and its numerical boundaries](#/item/book-analytic-computational-geometry?chapter=orientation-is-the-central-planar-predicate), and [conic predicates](conic-predicates.md). The [geometry and trigonometry course](#/item/course-euclidean-trigonometry-standard) refreshes unit-circle angles and radians. The existing curvature lesson already teaches the geometric meaning and space-curve formula; here we derive the planar form, prove a particular sampling bound, and derive a coordinate-uncertainty certificate.

Keep four claims separate:

- **Geometric curvature** belongs to a regular smooth curve.
- **Turn per chord length** below is our specified polygon estimator.
- **Coordinate uncertainty** permits a set of possible true points.
- **Arithmetic rounding** changes how recorded coordinates are represented or evaluated.

A small error in one sense does not automatically bound another. All models and answers here are public self-study feedback. Keep a first attempt and name any help used; comparison with a model is not an automated proof grade.

## Smooth viewpoint: a tangent changes per unit distance

Let \\(r:I\\to\\mathbb R^2\\) be \\(C^2\\) on an open interval and regular there: \\(r'(t)\\ne0\\). Write \\(v=r'\\), \\(a=r''\\), \\(q=\\|v\\|>0\\), and \\(T=v/q\\). Arc length satisfies \\(ds/dt=q\\). The unsigned curvature is

\\[
\\kappa=\\left\\|\\frac{dT}{ds}\\right\\|=\\frac{\\|T'\\|}{q}.
\\]

Since \\(q'=(v\\cdot a)/q\\),

\\[
T'=\\frac1q\\left(a-\\frac{v\\cdot a}{q^2}v\\right).
\\]

The parenthesized vector removes the component of acceleration parallel to the velocity. Squaring its norm and using
\\(\\det(v,a)^2=\\|v\\|^2\\|a\\|^2-(v\\cdot a)^2\\) gives

\\[
\\kappa=\\frac{|\\det(r',r'')|}{\\|r'\\|^3}.
\\]

The determinant is signed, but the absolute value makes this curvature unsigned. If position has length units and \\(t\\) is dimensionless, the numerator has squared-length units and the denominator cubed-length units; curvature has inverse-length units. With a time parameter the time units cancel as well.

Under a regular \\(C^2\\) reparameterization \\(t=\\phi(u)\\), with \\(\\phi'\\ne0\\), the new derivatives are \\(r'\\phi'\\) and \\(r''(\\phi')^2+r'\\phi''\\). Their determinant gains the factor \\((\\phi')^3\\), because the term involving \\(\\det(r',r')\\) vanishes. Speed cubed gains \\(|\\phi'|^3\\). The unsigned quotient is unchanged, including when orientation reverses. This calculation cannot be used at a stationary parameter value where \\(\\phi'=0\\).

For \\(r(t)=(R\\cos t,R\\sin t)\\), \\(R>0\\), the determinant is \\(R^2\\) and speed is \\(R\\), so \\(\\kappa=1/R\\). For
\\(r(t)=(a\\cos t,b\\sin t)\\), \\(a,b>0\\),

\\[
r'=(-a\\sin t,b\\cos t),\\qquad r''=(-a\\cos t,-b\\sin t),
\\]
\\[
\\det(r',r'')=ab,\\qquad
\\kappa(t)=\\frac{ab}{(a^2\\sin^2t+b^2\\cos^2t)^{3/2}}.
\\]

Speed is never zero because sine and cosine cannot both vanish. At the parameter values \\(t=0,\\pi/2\\), curvature is \\(a/b^2,b/a^2\\), respectively. These are evaluation points on a closed ellipse, not endpoints of an open curve. For \\(a=2,b=1\\), the values are \\(2,1/4\\): the ellipse does not have one constant circle curvature.

**Boundary check.** The timing \\(r(t)=(2\\cos t^3,2\\sin t^3)\\) has \\(r'(0)=0\\). The quotient above is undefined at that timing value. The geometric circle still has curvature \\(1/2\\), witnessed by its regular angle parameter. A stationary traversal is not, by itself, a geometric corner or zero curvature.

## Discrete viewpoint: define the estimator before bounding it

Take a strictly convex simple \\(N\\)-gon in the Euclidean plane, traversed counterclockwise. Its interior angles \\(\\alpha_i\\) lie between zero and \\(\\pi\\). Triangulating from one vertex makes \\(N-2\\) triangles, so

\\[
\\sum_i\\alpha_i=(N-2)\\pi,\\qquad
\\sum_i(\\pi-\\alpha_i)=2\\pi.
\\]

Thus the positive exterior turns sum to \\(2\\pi\\). Reversing traversal reverses the signed turns. This proof does not justify summing unsigned turns for a nonconvex polygon or ignoring self-intersections.

Now inscribe a regular \\(N\\)-gon in a circle of radius \\(R>0\\). Let

\\[
h=\\frac{2\\pi}{N},\\qquad \\ell=2R\\sin(h/2),\\qquad k_N=\\frac{h}{\\ell}.
\\]

The chord formula comes from bisecting an isosceles central triangle. We have explicitly chosen turn per edge length as the estimator \\(k_N\\). A polygon has corners rather than an ordinary smooth pointwise curvature there; other discrete conventions can use other denominators. Radians are dimensionless, so \\(k_N\\) also has inverse-length units.

Rotational symmetry makes all exterior turns equal. Since their sum is \\(2\\pi\\), each is exactly \\(h\\); the central angle and exterior turn agree for this regular inscribed polygon.

For \\(0\\le x\\le\\pi/4\\), one has

\\[
x-\\frac{x^3}{6}\\le\\sin x\\le x.
\\]

Here is a proof with its interval visible. Since \\(\\sin u\\le u\\) follows by integrating \\(\\cos u\\le1\\) from zero, and sine is nonnegative on this interval,
\\[
0\\le x-\\sin x
=\\int_0^x(1-\\cos t)\\,dt
=\\int_0^x\\int_0^t\\sin u\\,du\\,dt
\\le\\int_0^x\\frac{t^2}{2}\\,dt=\\frac{x^3}{6}.
\\]

For \\(N\\ge4\\), \\(x=h/2\\le\\pi/4\\). In particular \\(\\sin(h/2)>0\\), and the lower bound gives \\(2\\sin(h/2)\\ge h(1-h^2/24)\\), with \\(1-h^2/24>0\\). Taking reciprocals of positive quantities yields

\\[
\\frac1R\\le k_N\\le\\frac{1}{R(1-h^2/24)},\\qquad
0\\le k_N-\\frac1R\\le\\frac{h^2}{R(24-h^2)}.
\\]

This is a proved upper bound for this estimator on these regular inscribed circle polygons. It is not a theorem about arbitrary meshes or equally spaced ellipse parameters. On an ellipse, equal parameter increments need not give equal chord lengths or equal tangent turns.

### A self-contained enclosure of pi

To choose a finite sample count without assuming a decimal value of \\(\\pi\\), consider the continuous integrand
\\[
I=\\int_0^1\\frac{x^4(1-x)^4}{1+x^2}\\,dx.
\\]
It is strictly positive on \\(0<x<1\\), so \\(I>0\\). Polynomial division gives the exact identity below.

<!-- geo-turn-pi-division:start -->
\\[
\\frac{x^4(1-x)^4}{1+x^2}
=x^6-4x^5+5x^4-4x^2+4-\\frac{4}{1+x^2}.
\\]
<!-- geo-turn-pi-division:end -->

Integrating each term and using \\(\\arctan(1)=\\pi/4\\) gives
\\[
I=\\frac17-\\frac23+1-\\frac43+4-4\\arctan(1)
=\\frac{22}{7}-\\pi>0.
\\]
Consequently \\(\\pi<22/7\\) and \\(\\pi^2<484/49<10\\).

For \\(R=2\\) length units and \\(N\\ge10\\), \\(h^2\\le\\pi^2/25<2/5\\). The function \\(y/[R(24-y)]\\) increases for \\(0\\le y<24\\), as cross multiplication of positive denominators confirms. Therefore
\\[
0\\le k_N-\\frac12<\\frac{2/5}{2(24-2/5)}
=\\frac1{118}<\\frac1{100}.
\\]
Ten sides are sufficient for the tolerance \\(0.01\\) inverse-length units. This argument does not claim a minimum side count or require a plotted convergence pattern.

## Computational viewpoint: exact coordinates and uncertain coordinates

For \\(u=B-A\\), \\(v=C-A\\), define \\(D=\\det(u,v)\\) in a right-handed Cartesian plane. The determinant has squared-length units. Its sign determines the orientation of the ordered triple, and \\(|D|/2\\) is its area. Translation preserves this exact determinant. Swapping \\(B,C\\) reverses its sign.

### Input rounding can reverse a turn

Let \\(M=10^{16}\\) and use exact integer coordinates
\\[
A=(M,0),\\qquad B=(M+1,1),\\qquad C=(M+2,3).
\\]
The differences are \\(u=(1,1)\\), \\(v=(2,3)\\), so \\(D=3-2=1\\).

In binary64 with round-to-nearest, ties-to-even, the spacing near \\(M\\) is two. Both \\(M\\) and \\(M+2\\) are representable; \\(M+1\\) lies midway and rounds to \\(M\\), since \\(M/2\\) is even. The rounded inputs therefore give difference vectors \\((0,1),(2,3)\\) and determinant \\(-2\\). This is input rounding, before any difficult product cancellation. It differs from the existing chapter's binary32 example with exactly representable inputs and rounded products.

Exact translation **before conversion** preserves the small differences. Subtracting \\(M\\) after the coordinates have already been rounded cannot reconstruct the missing one. The following optional illustration performs its initial subtraction on exact integers. All resulting small coordinates and products in its last line are exactly representable; this is not a claim that arbitrary translated floating-point inputs become reliable.

<!-- geo-turn-integer-demo:start -->
\`\`\`javascript
const M = 10000000000000000n;
const points = [[M, 0n], [M + 1n, 1n], [M + 2n, 3n]];
function orientation(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1])
       - (b[1] - a[1]) * (c[0] - a[0]);
}
const rounded = points.map(point => point.map(Number));
const translated = points.map(([x, y]) => [Number(x - M), Number(y)]);
console.log(orientation(...points));      // exact integer: 1n
console.log(orientation(...rounded));     // rounded inputs: -2
console.log(orientation(...translated));  // exact subtraction first: 1
\`\`\`
<!-- geo-turn-integer-demo:end -->

### Derive a measurement certificate

Suppose each coordinate of each possible true point \\(A',B',C'\\) differs from its recorded counterpart by at most \\(\\eta\\ge0\\), in the same length unit. This is a deterministic error allowance, not a standard deviation, variance or probabilistic coverage claim. Put \\(u'=u+\\delta u\\), \\(v'=v+\\delta v\\). Each component of \\(\\delta u,\\delta v\\) is at most \\(2\\eta\\) in absolute value: both endpoints may move.

Expanding the determinant,
\\[
D'-D=\\det(\\delta u,v)+\\det(u,\\delta v)+\\det(\\delta u,\\delta v).
\\]
The two linear terms are bounded by \\(2\\eta\\) times the sum of the absolute components of \\(u,v\\); the quadratic term has two products, each bounded by \\(4\\eta^2\\). Hence
\\[
|D'-D|\\le E_\\eta,\\qquad
E_\\eta=2\\eta(|u_x|+|u_y|+|v_x|+|v_y|)+8\\eta^2.
\\]

Both sides have squared-length units. If \\(|D|>E_\\eta\\), every admitted true triple has the same nonzero sign as \\(D\\). If the strict inequality fails, this sufficient test is **inconclusive**. It does not generally prove that a zero or reversed sign is attainable.

For the translated example \\(A=(0,0),B=(1,1),C=(2,3)\\), the component sum is seven. At \\(\\eta=1/100\\), \\(E_\\eta=88/625=0.1408<1\\), so the orientation is certified positive. At \\(\\eta=1/10\\), \\(E_\\eta=37/25>1\\), so the test is inconclusive. In this particular case collinearity really is possible:
\\[
A'=(1/10,-1/10),\\quad B'=(9/10,11/10),\\quad C'=(21/10,29/10).
\\]
Every coordinate moves by at most \\(1/10\\), and the new differences \\((4/5,6/5),(2,3)\\) have determinant zero.

The inequality concerns exact determinants of exact possible coordinates. To turn it into a runtime certificate, evaluate the displayed rational presets exactly or provide arithmetic-error enclosures as well. Comparing two rounded numbers near the threshold without an arithmetic bound is not a certified decision. A program can display approximations, but the strict decision must retain that distinction.

## Worked example 1: a regular parabola and reversed traversal

For $r(t)=(t,t^2)$, velocity is $(1,2t)$ and acceleration is $(0,2)$. Speed is never zero. The signed determinant is two, so unsigned curvature is $2/(1+4t^2)^{3/2}$. At the vertex it is two inverse-length units, and away from the vertex it decreases. Merely observing that the second derivative is constant would miss this variation: acceleration depends on timing, whereas curvature measures the tangent's change per unit arc length.

Reverse the traversal by putting $t=-u$. The new velocity is $(-1,2u)$ and the new determinant is minus two. The unsigned quotient is unchanged at corresponding points, while the signed curvature changes sign. This gives a concrete reason for specifying whether a turning quantity is signed. Scaling the whole curve by a positive factor $c$ multiplies the determinant by $c^2$ and speed cubed by $c^3$, so curvature is divided by $c$. That scaling agrees with the inverse-length units and the circle formula.

## Worked example 2: a different certified sampling count

Take a radius-one circle and require the declared regular-polygon estimator error to be less than $1/20$. Six sides suffice by the proved bound. Indeed $h=\\pi/3$, so the earlier rational enclosure gives $h^2<10/9$. The error bound is increasing in that squared angle, hence
$$0\\le k_6-1<\\frac{10/9}{24-10/9}=\\frac5{103}<\\frac1{20}.$$
The final inequality follows by cross multiplication, since one hundred is less than one hundred and three. No decimal approximation to the sine or pi is needed. The exact regular-hexagon chord has length one, so the estimator itself is $\\pi/3$, consistent with the bound. This is another sufficient-count certificate, not a proof that every smaller polygon fails.

## Worked example 3: refining a nonuniform circle polygon

The regular sampling assumption matters even on a circle. Let two successive central gaps about a vertex be $a,b>0$, both at most $\\pi/2$. The incoming chord direction has angle equal to the preceding midpoint angle plus $\\pi/2$, and the outgoing chord direction has angle equal to the following midpoint angle plus $\\pi/2$. This follows by subtracting the two circle coordinate vectors and applying the sine and cosine difference identities. Therefore the positive turn at their common vertex is $(a+b)/2$, while the outgoing chord length is $2R\\sin(b/2)$.

Now alternate gaps $h,2h$ around the circle, with $h=2\\pi/(3m)$ and $m$ repeated pairs. For large $m$ the gap restriction holds, and all chord lengths tend to zero. Nevertheless turn divided by outgoing chord length has two limiting values: at a vertex followed by a long gap it tends to $3/(4R)$; at a vertex followed by a short gap it tends to $3/(2R)$. Neither is the circle curvature. The limits follow directly from $\\sin x/x\\to1$. Thus mesh refinement alone does not rescue this particular denominator convention.

A different declared estimator does behave correctly on these nonuniform circle samples. Divide the turn by the mean of the incoming and outgoing chord lengths. Its value is
$$\\widetilde k=\\frac{a+b}{2R(\\sin(a/2)+\\sin(b/2))}.$$
If both gaps are at most $\\delta\\le\\pi/2$, apply the earlier sine enclosure separately to their halves and add. The denominator lies between $R(a+b)(1-\\delta^2/24)$ and $R(a+b)$. All factors are positive, so
$$\\frac1R\\le\\widetilde k\\le\\frac1{R(1-\\delta^2/24)}.$$
This proves uniform convergence to circle curvature as the maximum gap tends to zero, without requiring the ratio of neighboring gaps to approach one. The proof still uses a circle, its exact chord identity and positive small central gaps. It does not establish a theorem for an ellipse, a general curve or a surface mesh. Changing an estimator is a mathematical design decision with a new proof, not an unnoticed repair of the original definition.

## Exercises with staged hints and complete solutions

### Exercise 1

Find the curvature of $r(t)=(t,t^2)$ at $t=1$ and explain why the speed denominator is required.

<details><summary>Hint 1</summary>

The velocity and acceleration are $(1,2)$ and $(0,2)$ there.

</details>

<details><summary>Hint 2</summary>

Curvature divides their determinant magnitude by speed cubed.

</details>

<details><summary>Full solution</summary>

The determinant is two and speed is $\\sqrt5$, giving curvature $2/(5\\sqrt5)$. The denominator converts change with the parameter into change per unit arc length and removes tangential acceleration. Using only the acceleration magnitude would give two everywhere on this parabola, contradicting the derived tangent-change expression and its reparameterization invariance.

</details>

### Exercise 2

The radius-two circle is timed by $r(t)=(2\\cos t^3,2\\sin t^3)$. Is its curvature at the recorded parameter zero, undefined or one half when the recorded parameter is zero?

<details><summary>Hint 1</summary>

Distinguish the regular-parameter formula from the geometric circle.

</details>

<details><summary>Hint 2</summary>

The derivative vanishes at zero, although a different timing is regular.

</details>

<details><summary>Full solution</summary>

The stated regular-parameter quotient is undefined there because its denominator vanishes. It does not give zero curvature. The underlying geometric circle has curvature one half, established by a regular angle parametrization. These are compatible statements about a formula's admissible inputs and the geometric curve, rather than competing numerical answers to one unqualified question.

</details>

### Exercise 3

A drawing of a regular curve is enlarged by factor five. What happens to its unsigned curvature and to the units of that curvature?

<details><summary>Hint 1</summary>

Count the factors in the determinant and speed cubed.

</details>

<details><summary>Hint 2</summary>

Curvature has inverse-length units.

</details>

<details><summary>Full solution</summary>

The determinant gains a factor twenty-five and speed cubed gains one hundred twenty-five. Curvature is therefore divided by five. Its units remain inverse length; the value changes because the curve is physically enlarged in the same length unit. A mere change of measurement unit also requires transforming all lengths consistently and is not the same operation as leaving the coordinates' units unexplained.

</details>

### Exercise 4

Certify that eight regular sides suffice for a radius-two circle estimator error less than $1/50$.

<details><summary>Hint 1</summary>

Here $h=\\pi/4$ and the proved enclosure gives $h^2<5/8$.

</details>

<details><summary>Hint 2</summary>

Substitute into the increasing error bound with radius two.

</details>

<details><summary>Full solution</summary>

The bound is strictly less than $(5/8)/(2(24-5/8))=5/374$. This is less than $1/50$ because two hundred fifty is less than three hundred seventy-four. The radius is essential in the denominator. The result certifies sufficiency for the stated regular-circle estimator and does not identify the smallest possible side count.

</details>

### Exercise 5

For alternating central gaps $h,2h$ on a circle, derive the limiting turn-per-outgoing-chord value at a vertex followed by a short gap.

<details><summary>Hint 1</summary>

The turn is $3h/2$, while the short chord is $2R\\sin(h/2)$.

</details>

<details><summary>Hint 2</summary>

Divide numerator and denominator by $h$ before taking the limit.

</details>

<details><summary>Full solution</summary>

The quotient is $3h/(4R\\sin(h/2))$, which tends to $3/(2R)$ because $\\sin(h/2)/h\\to1/2$. It differs from $1/R$. The largest chord still tends to zero, showing that refinement without a suitable neighboring-spacing assumption does not establish convergence of this outgoing-edge estimator.

</details>

### Exercise 6

Why does using the mean of adjacent chord lengths produce a uniform circle bound depending only on the largest central gap?

<details><summary>Hint 1</summary>

Apply the sine lower bound to each chord separately.

</details>

<details><summary>Hint 2</summary>

A common maximum-gap factor can be pulled outside their sum.

</details>

<details><summary>Full solution</summary>

For each gap $a\\le\\delta$, the sine term satisfies $\\sin(a/2)\\ge(a/2)(1-\\delta^2/24)$, and likewise for $b$. Adding gives a denominator lower bound proportional to $(a+b)(1-\\delta^2/24)$, while the sine upper bounds give the matching upper denominator proportional to $a+b$. That common factor cancels the turn numerator. The resulting enclosure is independent of the ratio of the two gaps, while retaining the circle and maximum-gap hypotheses.

</details>

### Exercise 7

Why does subtracting a large origin after binary64 conversion not repair the lost unit offset in the displayed large-integer example?

<details><summary>Hint 1</summary>

The two exact integers can already have become the same stored value.

</details>

<details><summary>Hint 2</summary>

Subtraction acts on the stored values, not their pre-conversion histories.

</details>

<details><summary>Full solution</summary>

The midpoint integer has already rounded to the lower representable value, so the stored input no longer contains its original unit increment. Subtracting the same origin from those stored values preserves their equality and cannot recover which original integer was intended. Exact subtraction before conversion retains the small difference; afterward the missing information requires an external exact source, not another algebraic rearrangement.

</details>

### Exercise 8

Explain the factor two in the coordinate-difference error and the factor eight in the quadratic determinant-error term.

<details><summary>Hint 1</summary>

Both endpoints of a difference may move in opposite directions.

</details>

<details><summary>Hint 2</summary>

The determinant of two error vectors contains two products.

</details>

<details><summary>Full solution</summary>

Each coordinate difference subtracts two coordinates with allowances $\\eta$, so its error can be as large as $2\\eta$. In the determinant of the two difference-error vectors, each of the two products has magnitude at most $4\\eta^2$. The triangle inequality bounds their difference by $8\\eta^2$. Omitting that term would drop a genuine second-order contribution and invalidate the stated sufficient certificate for finite allowances.

</details>

### Exercise 9

For $A=(0,0)$, $B=(1,0)$, $C=(0,1)$ and coordinate allowance $\\eta=1/5$, show that the chapter's sufficient bound is inconclusive although every admitted determinant is positive.

<details><summary>Hint 1</summary>

The nominal determinant is one and the component sum is two.

</details>

<details><summary>Hint 2</summary>

For the true differences, the first horizontal and second vertical components are at least three fifths; the other two have magnitude at most two fifths.

</details>

<details><summary>Full solution</summary>

The sufficient error bound is $4/5+8/25=28/25>1$, so it is inconclusive. But directly the determinant is at least $(3/5)^2-(2/5)^2=1/5>0$. The positive-component lower bounds hold for every independently perturbed endpoint, and the absolute upper bounds control the subtracted product regardless of its sign. Thus failure of the general sufficient bound does not prove ambiguity; a sharper configuration-specific proof can certify the same input family.

</details>

### Exercise 10

Rescale all coordinates and their error allowance by a positive factor $c$. Show that the determinant sign certificate is unchanged.

<details><summary>Hint 1</summary>

The determinant has squared-length units.

</details>

<details><summary>Hint 2</summary>

Both terms of the error bound must gain the same factor.

</details>

<details><summary>Full solution</summary>

The nominal determinant becomes $c^2D$, the component sum becomes $c$ times its old value, and the allowance becomes $c\\eta$. The linear error term and quadratic term both gain $c^2$, so the strict comparison becomes $c^2|D|>c^2E_\\eta$, equivalent to the original one. This explains why a correctly rescaled uncertainty certificate is unit-consistent, whereas a fixed unscaled determinant tolerance is not.

</details>

## GEO-TURN-P001 — Three views of a circle and its samples

Attempt all three parts before reading the model. Use the chosen length unit consistently and dimensionless angle parameter \\(t\\).

| Project | Ellipse a | Ellipse b | Circle R | Curvature tolerance | Proposed N | Small eta | Large eta |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GEO-TURN-P001 | 2 | 1 | 2 | 1/100 | 10 | 1/100 | 1/5 |

The computational sample uses three exact rational points on that same radius-two circle. They are **unevenly spaced**, not three consecutive vertices of the regular polygon.

| Project | A | B | C | Large-eta witness A' | Large-eta witness B' | Large-eta witness C' |
| --- | --- | --- | --- | --- | --- | --- |
| GEO-TURN-P001 | (2,0) | (6/5,8/5) | (0,2) | (11/5,1/5) | (1,7/5) | (1/5,11/5) |

1. **Smooth:** derive the planar curvature formula from the unit tangent, state regularity, calculate the circle curvature and the ellipse curvatures at \\(t=0,\\pi/2\\), and explain the stationary-timing boundary.
2. **Discrete:** prove the convex exterior-turn sum, derive the chord estimator and its error bound, then certify the proposed \\(N\\) meets the stated inverse-length tolerance. Separate a sufficient count from a minimum claim.
3. **Computational:** verify the three nominal points lie on the circle. Calculate their exact determinant, component sum and small-\\(\\eta\\) certificate. At the larger allowance, decide what the bound says and verify the supplied witness. Explain what exact translation can repair in the large-integer example and what it cannot repair after input rounding.

The measurement scenario permits independent coordinate errors; it does not impose an additional constraint that the true perturbed points remain on the nominal circle. That extra constraint would change the admissible set and could exclude the supplied witness.

<details><summary>Project hint 1</summary>

Separate the regular smooth parametrization, regular polygon sampling and independent-coordinate uncertainty model before substituting numbers.

</details>

<details><summary>Project hint 2</summary>

Use the proved rational pi enclosure for the sampling count, and verify the large-allowance witness coordinate by coordinate after the sufficient bound becomes inconclusive.

</details>

### GEO-TURN-P001 — Full model

The regular-\\(C^2\\) derivation above gives circle curvature \\(1/2\\) and ellipse values \\(2,1/4\\), all in inverse-length units. At zero-speed timing the quotient is undefined, while a regular parametrization of the same circle still gives \\(1/2\\). The exterior-turn proof and sine enclosure give the strict error certificate \\(1/118<1/100\\) for \\(N=10\\). This controls the declared estimator, not the ellipse or a computed rendering.

The nominal squared norms are \\(4\\), \\(36/25+64/25=4\\), and \\(4\\). Their differences are
\\[
u=(-4/5,8/5),\\qquad v=(-2,2),\\qquad D=8/5,\\qquad
|u_x|+|u_y|+|v_x|+|v_y|=32/5.
\\]
At \\(\\eta=1/100\\), \\(E_\\eta=161/1250<8/5\\), so every admitted true triple is counterclockwise. At \\(\\eta=1/5\\), \\(E_\\eta=72/25>8/5\\), and the bound is inconclusive. The supplied witness is admissible coordinate by coordinate, and all three of its points satisfy \\(x+y=12/5\\); it is exactly collinear. Its coordinates need not lie on the circle. The exact-integer example's sign reversal is a different issue: translating exact coordinates before conversion preserves the unit offset; translating already rounded coordinates does not.

## GEO-TURN-P002 — Changed radius, ellipse and uncertainty

At a later sitting, attempt the changed case without copying the model above. Record the actual date and earlier help or answer exposure. This suggested return does not establish that a delay occurred or that learning was retained.

| Project | Ellipse a | Ellipse b | Circle R | Curvature tolerance | Proposed N | Small eta | Large eta |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GEO-TURN-P002 | 3 | 2 | 3 | 1/200 | 11 | 1/50 | 3/10 |

| Project | A | B | C | Large-eta witness A' | Large-eta witness B' | Large-eta witness C' |
| --- | --- | --- | --- | --- | --- | --- |
| GEO-TURN-P002 | (3,0) | (9/5,12/5) | (0,3) | (33/10,3/10) | (3/2,21/10) | (3/10,33/10) |

Reconstruct all three viewpoints with these data. Give the two ellipse values and the circle curvature. Prove that eleven sides suffice for the new tolerance using the rational enclosure of \\(\\pi\\); do not reuse the previous numerical error bound. Compute the exact orientation and both uncertainty bounds, and audit the changed witness against the same independent-coordinate model. Finally swap \\(B,C\\) in the nominal triple: what changes in the certificate, and what does not? Explain why the circle's estimator theorem does not establish an equal-step ellipse sampling bound.

<details><summary>Project hint 1</summary>

Recompute the radius-dependent error bound and both ellipse evaluations rather than multiplying the previous model indiscriminately.

</details>

<details><summary>Project hint 2</summary>

Swapping the nominal last two points negates the determinant while preserving the absolute-component allowance.

</details>

### GEO-TURN-P002 — Full changed model

The ellipse curvatures at \\(0,\\pi/2\\) are \\(3/4,2/9\\), while the circle curvature is \\(1/3\\). For \\(N=11\\), the proved enclosure gives
\\[
h=\\frac{2\\pi}{11}<\\frac47,\\qquad h^2<\\frac{16}{49}.
\\]
The monotone error bound therefore gives
\\[
0\\le k_{11}-\\frac13<
\\frac{16/49}{3(24-16/49)}
=\\frac2{435}<\\frac1{200}.
\\]
The last comparison is exact: \\(400<435\\). Again eleven is a sufficient choice, not a proved minimum.

The nominal squared norms are nine. The difference vectors are
\\[
u=(-6/5,12/5),\\qquad v=(-3,3),\\qquad
D=18/5,\\qquad \\sum|\\text{components}|=48/5.
\\]
At \\(\\eta=1/50\\), the bound is \\(242/625<18/5\\), certifying a positive sign. At \\(\\eta=3/10\\), it is \\(162/25>18/5\\), so this test is inconclusive. Each witness coordinate is within \\(3/10\\) of its recorded value, and the witness points lie on \\(x+y=18/5\\), establishing actual collinearity in this case.

Swapping \\(B,C\\) interchanges \\(u,v\\): \\(D=-18/5\\), the component sum and \\(E_\\eta\\) are unchanged, and the small-allowance certificate now guarantees a negative sign. The ellipse has variable speed and curvature under its angle parameter. Neither its chords nor its exterior turns are forced equal by equal parameter steps, so the regular-circle estimator bound cannot simply be transferred.

### Reference certificate ledger

The curvature and tolerance columns have inverse-length units; determinant and uncertainty columns have squared-length units.

| Project | Ellipse kappa at 0 | Ellipse kappa at pi/2 | Circle kappa | Strict estimator error upper bound | Exact D | Component sum | Small-eta bound | Large-eta bound |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GEO-TURN-P001 | 2 | 1/4 | 1/2 | 1/118 | 8/5 | 32/5 | 161/1250 | 72/25 |
| GEO-TURN-P002 | 3/4 | 2/9 | 1/3 | 2/435 | 18/5 | 48/5 | 242/625 | 162/25 |

## Descriptive rubric and targeted repair

Apply these criteria to each project separately. Mark a criterion **justified**, **incomplete**, or **not yet justified**, naming the line of evidence and any assistance. A different correct proof is welcome. The criteria support revision of an argument, not a numerical readiness score.

| Criterion | Evidence | Repair |
| --- | --- | --- |
| Smooth contract | Regularity, unit tangent, derivative algebra, evaluation points and inverse-length units are explicit. | Check speed before division; distinguish geometric curvature from acceleration or a stationary timing value. |
| Polygon contract | Convexity, orientation, radians, chosen estimator and positive denominator are stated. | Recover the angle sum from the triangulation and derive the chord in the bisected central triangle. Do not call a corner a regular smooth point. |
| Error certificate | The sine bound is justified on its interval, the pi enclosure is proved, and the bound meets the stated tolerance. | Check every reciprocal and unit. A decimal trend or sufficient sample count is not a minimum proof. |
| Exact arithmetic boundary | The integer and rounded input triples are distinguished; translation occurs before conversion when recovering exact differences. | Compute the binade spacing and identify the lost coordinate. Subtracting a large origin cannot restore information already discarded. |
| Uncertainty boundary | Endpoint errors yield component errors at most twice eta; the determinant expansion and strict comparison are correct. | Keep the linear and quadratic contributions. An inconclusive upper bound alone does not prove a different sign is attainable; verify a witness separately. |
| Changed conclusion | Every changed value and witness is recomputed, and circle, ellipse and measurement constraints remain separate. | Check the changed radius and tolerance, then audit each coordinate. If a new constraint is imposed, recheck that the old witness is still admitted. |

After reading feedback, identify the first unsupported step and revise all conclusions that used it. For curvature, return to the regular-curve preparation; for sign errors, return to the existing orientation chapter; for a numerical certificate, distinguish input uncertainty from arithmetic error before recomputing. Retain any earlier answer exposure when describing another attempt as reconstruction.

## Where this gateway leads

The circle is a controlled meeting point of smooth curvature, discrete turning and signed predicates. Further differential geometry needs general curve and surface theory; further discrete geometry needs nonuniform meshes and convergence hypotheses; robust computational geometry needs complete exact or adaptive implementations and boundary contracts. The existing [curvature and Gauss–Bonnet article](#/item/deep-dive-curvature-gauss-bonnet) has its own surface/integral preparation and is an optional continuation, not an assumed prerequisite here. One clinic does not supply those separate specialist sequences.
`;export{e as default};