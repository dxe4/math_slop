var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: curved-metric-computation
title: "Curved Metric Computation"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Curved Metric Computation

Not all geometry is Euclidean. On the surface of the Earth, the shortest path between two points is a great circle, not a straight line. In the Poincar\\'{e} disk model of hyperbolic geometry, the shortest path is a circular arc orthogonal to the boundary. This chapter defines the spherical and hyperbolic distance formulas, shows how to evaluate them robustly, and explains why boundary points must be rejected explicitly.

## Spherical distance

For nonzero vectors $u,v\\in\\mathbb{R}^{3}$ representing directions, define the unit vectors $\\hat u=u/\\lVert u\\rVert$ and $\\hat v=v/\\lVert v\\rVert$. The **spherical distance** on the unit sphere is the angle between them:

$$d_{S}(u,v)=\\arccos\\bigl(\\operatorname{clamp}(\\hat u\\cdot\\hat v,-1,1)\\bigr).$$

The clamping protects against roundoff errors that might produce values slightly outside $[-1,1]$, such as $1+2\\times 10^{-16}$. It does not repair invalid zero vectors; those must be rejected before normalization.

The spherical distance is always in $[0,\\pi]$. It is symmetric and satisfies the triangle inequality on the unit sphere. On arbitrary nonzero vectors it is a metric only after identifying positive scalar multiples, because $u$ and $2u$ have distance zero although they are different vectors. Numerically, $\\operatorname{atan2}(\\lVert\\hat u\\times\\hat v\\rVert,\\hat u\\cdot\\hat v)$ often resolves small angles better than \`acos\` of a dot product rounded to one.

## Worked example: spherical distance

Find the spherical distance between $(1,0,0)$ and $(0,1,0)$.

Both are already unit vectors. Their dot product is $0$. The distance is $\\arccos(0)=\\pi/2$, which is $90^{\\circ}$. This is the angle between the positive $x$-axis and the positive $y$-axis, as expected.

## Hyperbolic distance in the Poincar\\'{e} disk

The Poincar\\'{e} disk model represents the hyperbolic plane as the open unit disk $D=\\{z\\in\\mathbb{C}:\\lvert z\\rvert<1\\}$. For points $u,v\\in D$, the hyperbolic distance satisfies

$$\\cosh d_{H}(u,v)=1+\\frac{2\\lVert u-v\\rVert^{2}}{(1-\\lVert u\\rVert^{2})(1-\\lVert v\\rVert^{2})}.$$

Boundary points with $\\lVert u\\rVert=1$ are infinitely far from any interior point, and points with norm greater than one are outside the model. A routine must reject all inputs with norm at least one before computing the denominator. Near coincident points, evaluating $\\operatorname{arccosh}(1+q)$ can lose the small increment $q$. An equivalent stable form is
$$d_H(u,v)=2\\operatorname{asinh}\\!\\left(\\frac{\\lVert u-v\\rVert}{\\sqrt{(1-\\lVert u\\rVert^2)(1-\\lVert v\\rVert^2)}}\\right).$$
Implement the norms and denominator with scaling when extreme magnitudes could overflow or underflow.

## Worked example: hyperbolic distance

Find the hyperbolic distance from the origin to $(0.5,0)$ in the Poincar\\'{e} disk.

Here $u=(0,0)$ and $v=(0.5,0)$. Then $\\lVert u\\rVert=0$, $\\lVert v\\rVert=0.5$, and $\\lVert u-v\\rVert=0.5$. The formula gives

$$\\cosh d_{H}=1+\\frac{2\\cdot 0.25}{(1-0)(1-0.25)}=1+\\frac{0.5}{0.75}=1+\\frac{2}{3}=\\frac{5}{3}.$$

Thus $d_{H}=\\operatorname{arccosh}(5/3)=\\ln(5/3+\\sqrt{25/9-1})=\\ln(5/3+4/3)=\\ln 3\\approx 1.0986$.

## Geodesics

On the sphere, geodesics are great circles: intersections of the sphere with planes through the origin. In the Poincar\\'{e} disk, geodesics are diameters and circular arcs orthogonal to the unit boundary. A rendered Euclidean chord is generally not the hyperbolic shortest path.

## Why the spherical angle is a metric and a shortest length

**L3 scope.** Use inner products, differentiation, integration and the exact normalization distinctions from [Representations](represent-geometric-objects-with-invariants.md). For full model geometry see the actual [elliptic](../geometry-proof-reference/elliptic-geometry.md) and [hyperbolic](../geometry-proof-reference/hyperbolic-geometry.md) chapters. The sphere below has radius one and the disk length normalization below has curvature minus one. A comparison of their numerical distances depends on those choices of length unit.

For unit vectors $p,q$, the angular value is zero exactly when $p=q$, since $\\lVert p-q\\rVert^2=2-2p\\cdot q$. Symmetry and nonnegativity are immediate. To prove the triangle inequality, put $\\alpha=d_S(p,q)$ and $\\beta=d_S(q,r)$. If their sum is at least $\\pi$, the bound follows from the range of the angle. Otherwise, away from the zero-angle endpoint cases, write
$$p=\\cos\\alpha\\,q+\\sin\\alpha\\,a,\\qquad r=\\cos\\beta\\,q+\\sin\\beta\\,b,$$
with unit vectors $a,b$ perpendicular to $q$. Since $a\\cdot b\\ge-1$, their dot product is at least $\\cos(\\alpha+\\beta)$. The inverse cosine is decreasing on its domain, so $d_S(p,r)\\le\\alpha+\\beta$. Endpoint cases follow directly or by continuity. This proves the metric laws on unit directions without assuming a shortest-path theorem first.

Let $\\theta=d_S(p,q)$. For nonantipodal distinct points, take the unit vector $e=(q-(p\\cdot q)p)/\\sin\\theta$. The curve $\\gamma(t)=\\cos t\\,p+\\sin t\\,e$, for $0\\le t\\le\\theta$, has unit speed, stays on the sphere and joins the points. Its length is $\\theta$. If the points are antipodal, choose any unit $e$ perpendicular to $p$ and use the same expression up to $\\pi$. If they coincide, the constant curve has length zero.

No piecewise continuously differentiable spherical path can have smaller length. For nearby unit points the chord length $c$ and angle satisfy $\\theta=2\\arcsin(c/2)$, so $\\theta/c\\to1$ as $c\\to0$. Given a positive tolerance, partition a continuous spherical path finely enough that every successive chord has angular length at most one plus that tolerance times its Euclidean length. The angular triangle inequality bounds the endpoint angle by the sum of these angular increments. The sum of Euclidean chord lengths is at most the path's arc length, by integrating its speed on each subinterval. Letting the tolerance decrease to zero proves the lower bound. Thus the constructed arc is a shortest path. A long great-circle arc need not minimize, and antipodal endpoints permit many minimizing semicircles.

On a sphere of radius $R>0$, multiply the angular distance by $R$. On nonzero direction vectors, positive scaling preserves their unit representatives; negative scaling changes a representative to its antipode. Quotienting by all nonzero scalars instead would identify antipodes and define a different geometry. The signed and unsigned scaling policies cannot be interchanged merely because both use normalized coordinates.

## Deriving the disk distance from path length

The disk metric assigns a piecewise continuously differentiable path $z(t)$ length
$$L_H(z)=\\int\\frac{2|z'(t)|}{1-|z(t)|^2}\\,dt.$$
For fixed $a$ in the open disk, define $T_a(z)=(z-a)/(1-\\overline a z)$. Its denominator cannot vanish there because $|\\overline a z|<1$. Direct expansion and differentiation give
$$1-|T_a(z)|^2=\\frac{(1-|a|^2)(1-|z|^2)}{|1-\\overline a z|^2},\\qquad |T_a'(z)|=\\frac{1-|a|^2}{|1-\\overline a z|^2}.$$
The first identity shows it maps the disk into itself. Its inverse is $(w+a)/(1+\\overline a w)$, which satisfies the same domain property. Substitution into the path-length integrand shows the two displayed factors cancel exactly. Hence $T_a$ and rotations preserve path length and its induced distance. These are algebraic identities for the stated domain, not assertions about a rendered image.

For a path from zero to a point of modulus $r$, set $\\rho(t)=|z(t)|$. This is absolutely continuous, with $|\\rho'|\\le|z'|$ almost everywhere; the norm is Lipschitz, and the usual derivative inequality follows wherever the derivatives exist. The fundamental theorem applied to $2\\operatorname{atanh}\\rho$ yields
$$L_H(z)\\ge\\left|\\int\\frac{2\\rho'}{1-\\rho^2}\\,dt\\right|=2\\operatorname{atanh}r.$$
The path stays in a compact subdisk on its compact parameter interval, so the derivative denominator in this argument stays positive. The radial segment attains that length by direct integration. Therefore the distance from zero is $\\log((1+r)/(1-r))$.

Apply the isometry $T_u$ to arbitrary endpoints. The exact formula becomes
$$d_H(u,v)=2\\operatorname{atanh}\\left|\\frac{v-u}{1-\\overline u v}\\right|.$$
The transformed modulus is less than one by the preceding identity. Using $\\cosh(2\\operatorname{atanh}r)=(1+r^2)/(1-r^2)$ gives the chapter's stated cosine-hyperbolic formula. Alternatively $\\cosh(2\\operatorname{asinh}s)=1+2s^2$ gives its near-coincident form. Positivity, symmetry and the triangle inequality also follow from the path-length definition: concatenate paths for the last property, taking infima and arbitrarily close upper approximations to their lengths. Moreover every path has length at least twice its Euclidean endpoint separation, because the density is at least two; hence distinct endpoints have positive distance.

Inverse images of radial minimizing segments give the disk's geodesic arcs. A disk Möbius map takes generalized circles to generalized circles: substitute its fractional-linear inverse into a real circle or line equation and clear the squared denominator to obtain another equation of that form. It preserves angles because its nonzero complex derivative is a rotation followed by a positive scale. It also maps the unit boundary circle to itself, as the first identity extends there without a zero denominator. Thus an orthogonal diameter becomes a circle or line orthogonal to the boundary. This derives the advertised shortest-arc description. It does not make every Euclidean circle arc a hyperbolic geodesic.

The distance to points of modulus approaching one diverges by the radial logarithm. A boundary point is therefore an ideal limiting direction, never a finite point accepted by this metric. Saying it is infinitely far away describes a limit of distances to interior points; it does not extend the finite metric domain by dividing by zero.

## Worked example: an off-center displacement

Compare real disk points $u=1/3$ and $v=2/3$. Their transformed separation is $(v-u)/(1-uv)=3/7$, so
$$d_H(u,v)=\\log\\frac{1+3/7}{1-3/7}=\\log(5/2).$$
The cosine-hyperbolic expression independently gives $\\cosh d=29/20$, agreeing with $(5/2+2/5)/2$. By contrast, the equally long Euclidean displacement from zero to $1/3$ has hyperbolic length $\\log2$. Both Euclidean displacements are one third, but the off-center one is hyperbolically longer. The location-dependent density explains the difference. A Euclidean translation is not generally a disk isometry, while $T_u$ is.

## Conditioning, admissible data and metric error bounds

The angular identities justify both inverse-cosine and two-argument-arctangent formulas in exact arithmetic. They do not make all evaluations equally informative. Near a zero angle, the dot product changes quadratically with angle, while the cross-product length changes linearly. Near an antipode, the cross product again vanishes but the dot product is negative; the two-argument function retains the correct quadrant. Computing raw products on extremely large vectors may overflow first, so normalize by a safely scaled norm before relying on either expression.

Clamping an almost valid rounded dot product can prevent an inverse-function domain error. It cannot certify a zero input vector, recover an angle already rounded away or legitimize an unexplained dot product far outside the permitted interval. A certified numerical result needs an enclosure for normalization and evaluation, or an exact representation of the relevant data. The earlier binary64 example describes its stated rounding behavior rather than a universal output of every evaluation order.

For the disk, evaluate domain admissibility before inverse functions. Factoring $1-r^2$ as $(1-r)(1+r)$ may help preserve a small positive factor when the radius itself is reliable, but it cannot recover an interior radius already rounded to one. An interval straddling the boundary is unresolved data, not a proved exterior point. Increasing arithmetic precision can settle uncertainty from evaluation of exact stored coordinates; it cannot remove genuine measurement uncertainty about the coordinates themselves.

A compact subdisk gives a useful explicit stability statement. If $|u|,|v|\\le r<1$, the Euclidean chord stays in that subdisk, so its metric length is at most $2|u-v|/(1-r^2)$. Together with the preceding lower bound,
$$2|u-v|\\le d_H(u,v)\\le\\frac{2}{1-r^2}|u-v|.$$
The constants are uniform only when the common radius bound stays strictly below one. By the metric triangle inequality, perturbing two endpoints within that same subdisk changes their distance by at most $2(|u-u'|+|v-v'|)/(1-r^2)$. Near the boundary this bound deteriorates for a geometric reason, rather than merely a poor formula choice.

For unit spherical endpoints, a Euclidean perturbation of size $e\\le2$ corresponds exactly to angle $2\\arcsin(e/2)$. Applying the triangle inequality twice bounds the change in an endpoint-to-endpoint distance by the sum of those two perturbation angles. Raw direction errors need an additional normalization bound: a perturbation small compared with a nonzero norm gives a controlled unit-direction error, whereas a vector near zero may change its direction greatly. These quantitative statements separate mathematical data sensitivity from rounding in an inverse trigonometric routine.

## Common errors

- **Forgetting to clamp the dot product in spherical distance.** A value of $1+\\epsilon$ due to roundoff produces \`NaN\` from $\\arccos$.
- **Accepting boundary points in hyperbolic distance.** The denominator $(1-\\lVert u\\rVert^{2})$ becomes zero, producing infinity or a division-by-zero exception.
- **Using Euclidean distance for spherical or hyperbolic comparisons.** Near the boundary of the Poincar\\'{e} disk, hyperbolic distance grows much faster than Euclidean distance. Two points that are close in Euclidean sense may be far apart hyperbolically.
- **Rendering Euclidean chords as hyperbolic geodesics.** In the disk model, the straight line segment between two points is not the shortest path unless the points lie on a diameter.

## Practice exercises with solutions

### Exercise 1
Find the spherical distance between $(1,0,0)$ and $(0,0,1)$.

<details><summary>Hint 1</summary>

Both vectors already have unit norm.

</details>

<details><summary>Hint 2</summary>

Their dot product vanishes.

</details>

<details><summary>Full solution</summary>

**Solution.** Both are unit vectors. Their dot product is $0$. The distance is $\\arccos(0)=\\pi/2$.

</details>

### Exercise 2
Find the hyperbolic distance between $(0,0)$ and $(0,0.5)$ in the Poincar\\'{e} disk.

<details><summary>Hint 1</summary>

Rotating the disk preserves its metric density.

</details>

<details><summary>Hint 2</summary>

The radius is one half, as in the horizontal example.

</details>

<details><summary>Full solution</summary>

**Solution.** By symmetry, this is the same as the distance to $(0.5,0)$, which is $\\ln 3\\approx 1.0986$.

</details>

### Exercise 3
Show that as $r\\to 1^{-}$, the hyperbolic distance from the origin to $(r,0)$ tends to infinity.

<details><summary>Hint 1</summary>

Use the exact radial logarithm or the cosine-hyperbolic formula.

</details>

<details><summary>Hint 2</summary>

The radius approaches the excluded boundary from inside.

</details>

<details><summary>Full solution</summary>

**Solution.** $\\cosh d=1+2r^{2}/(1-r^{2})$. As $r\\to 1^{-}$, the denominator $1-r^{2}\\to 0^{+}$, so $\\cosh d\\to\\infty$ and $d\\to\\infty$.

</details>

### Exercise 4
A binary64 routine computes the angle between $u=(1,10^{-8},0)$ and $v=(1,0,0)$ with \`acos\` of the normalized dot product. Explain the loss and give a more informative formula.

<details><summary>Hint 1</summary>

Compare the first-order cross-product signal with the second-order dot-product change.

</details>

<details><summary>Hint 2</summary>

A clamp does not restore a dot-product increment already lost to rounding.

</details>

<details><summary>Full solution</summary>

**Solution.** In typical binary64 evaluation, the norm and normalized first coordinate round to $1$, so the dot product is exactly $1$ and \`acos\` returns $0$, losing the nonzero angle of about $10^{-8}$ radians. Clamping prevents out-of-domain \`acos\` inputs but cannot restore lost information. The formula $\\operatorname{atan2}(\\lVert u\\times v\\rVert,u\\cdot v)$ returns about $10^{-8}$ here and is better conditioned for a small angle.

</details>

### Exercise 5
Two points on the sphere have spherical distance $\\pi$. What is their geometric relationship?

<details><summary>Hint 1</summary>

The inverse cosine takes its maximum at minus one.

</details>

<details><summary>Hint 2</summary>

Equality in the negative unit dot-product bound identifies opposite directions.

</details>

<details><summary>Full solution</summary>

**Solution.** A spherical distance of $\\pi$ means the angle between the directions is $180^{\\circ}$. The points are antipodal: they lie on opposite ends of a diameter.

</details>

### Exercise 6

Show that the unit-sphere angular formula does not define a metric on all nonzero vectors without a quotient. Does identifying negative as well as positive multiples preserve it?

<details><summary>Hint 1</summary>

Compare $u$ with $2u$ and with $-u$.

</details>

<details><summary>Hint 2</summary>

Metric zero must agree with equality of the objects in its domain.

</details>

<details><summary>Full solution</summary>

The vectors $u$ and $2u$ are distinct but normalize to the same point, giving zero angle. Thus the formula is only a pseudometric on raw nonzero vectors. Quotienting by positive scalars identifies exactly those zero-distance pairs and gives the unit-direction sphere. Identifying negative multiples as well would identify $u$ and $-u$, whose stated distance is $\\pi$, so the same formula would not even be well-defined on those new equivalence classes. Real projective distance requires a different definition.

</details>

### Exercise 7

Prove that the two hyperbolic distance expressions using inverse hyperbolic cosine and inverse hyperbolic sine agree for valid disk inputs.

<details><summary>Hint 1</summary>

Let $s=|u-v|/\\sqrt{(1-|u|^2)(1-|v|^2)}$.

</details>

<details><summary>Hint 2</summary>

Use $\\cosh(2\\operatorname{asinh}s)=1+2s^2$ and nonnegativity.

</details>

<details><summary>Full solution</summary>

Both denominator factors are positive, so $s\\ge0$ is defined. The nonnegative value $2\\operatorname{asinh}s$ has hyperbolic cosine $1+2s^2$, exactly the argument of the other formula. Since hyperbolic cosine is strictly increasing on the nonnegative axis, that value is its unique nonnegative inverse. The identity proves exact equivalence; it does not promise equal rounding errors when one formula first adds a very small increment to one.

</details>

### Exercise 8

Two disk endpoints and their perturbed versions all have modulus at most $3/5$. Each endpoint moves in Euclidean distance by at most $1/100$. Bound the change in their hyperbolic distance.

<details><summary>Hint 1</summary>

The common density upper bound is $2/(1-r^2)$.

</details>

<details><summary>Hint 2</summary>

Add the two endpoint displacement bounds before multiplying.

</details>

<details><summary>Full solution</summary>

Here $1-r^2=16/25$, so the common factor is $25/8$. The total endpoint displacement is at most $1/50$, yielding distance change at most $1/16$. This is a deterministic bound for the stated common subdisk. Merely knowing the nominal endpoints satisfy that radius bound would not suffice if the perturbed ones could approach the boundary; the hypothesis includes all four endpoints.

</details>

### Exercise 9

On a sphere of radius three, what is the shortest surface distance between two points whose central angle is $\\pi/2$? Why is their Euclidean chord not that distance?

<details><summary>Hint 1</summary>

A radius change multiplies arc length by three.

</details>

<details><summary>Hint 2</summary>

The chord leaves the spherical surface except at its endpoints.

</details>

<details><summary>Full solution</summary>

The surface distance is $3\\pi/2$. The Euclidean chord has length $3\\sqrt2$ from the chord identity, but it passes through the sphere's interior and is not an admissible surface path. The angular lower-bound proof applies to paths on the surface, not arbitrary ambient straight segments. Specifying the domain of paths is part of specifying the distance.

</details>

### Exercise 10

Show that a Euclidean translation preserving a particular pair of disk points need not preserve their hyperbolic distance, using pairs separated by one third on the real axis.

<details><summary>Hint 1</summary>

Compare the pair zero, one third with one third, two thirds.

</details>

<details><summary>Hint 2</summary>

Use the radial logarithm and the off-center worked example.

</details>

<details><summary>Full solution</summary>

The first pair has distance $\\log2$, while the second has distance $\\log(5/2)$. Both pairs consist of valid interior points and have the same Euclidean separation. Their distances differ, so that Euclidean translation is not a hyperbolic isometry on those pairs. This does not conflict with disk Möbius invariance: the translation is not the fractional-linear map with the density-cancellation identity.

</details>

## Transferred capstone: Curved distance comparison {#computational-legacy-capstone-10}

On the unit sphere, find the distance from $(1,0,0)$ to $(1/\\sqrt{2},1/\\sqrt{2},0)$. In the Poincar\\'{e} disk, find the distance from $(0,0)$ to $(1/2,1/2)$. Which distance is larger?

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Use the unit-sphere dot product and the curvature-minus-one disk formula.

</details>

<details><summary>Hint 2</summary>

The comparison uses two stated model normalizations rather than common Euclidean coordinates.

</details>

<details><summary>Full solution</summary>

**Solution.** Spherical: dot product is $1/\\sqrt{2}$, so distance is $\\arccos(1/\\sqrt{2})=\\pi/4\\approx 0.785$.

Hyperbolic: $\\lVert u\\rVert=0$, $\\lVert v\\rVert=\\sqrt{1/4+1/4}=1/\\sqrt{2}$. Then

$$\\cosh d=1+\\frac{2\\cdot(1/2)}{(1-0)(1-1/2)}=1+\\frac{1}{1/2}=3,$$

so $d=\\operatorname{arccosh}(3)=\\ln(3+\\sqrt{8})=\\ln(3+2\\sqrt{2})\\approx 1.763$.

The hyperbolic distance is larger.

</details>

## Looking backward and forward

This chapter defined spherical and hyperbolic distance formulas, emphasized the need for clamping and boundary rejection, and described the geodesics in each model. The numerical issues---scale awareness, roundoff, and explicit boundary policies---are the same ones that arose in the planar and three-dimensional predicates.

The next chapter, **Curvature, Polygon Turning, and Certified Orientation**, distinguishes smooth curvature, a declared polygon estimator and coordinate uncertainty. The final robustness reading collects mathematical contracts and their limitations.
`;export{e as default};