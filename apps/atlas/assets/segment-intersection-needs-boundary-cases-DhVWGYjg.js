var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: segment-intersection-needs-boundary-cases
title: "Segment Intersection Needs Boundary Cases"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Segment Intersection Needs Boundary Cases

Determining whether two line segments meet is one of the oldest problems in computational geometry. It appears in collision detection, map overlay, computer graphics clipping, and geographic information systems. The calculation is simple enough to write on an index card, yet the boundary cases---parallel segments, collinear overlap, endpoint touching, and zero-length segments---are where production code fails. This chapter derives the general intersection formulas, handles every boundary case with an explicit policy, and shows how the orientation predicate from the previous chapter provides an alternative test that is often more robust.

This L3 chapter assumes exact orientation and line representations from the preceding readings. We first solve intersection of two closed segments as a set, returning empty, one point or one closed segment. Endpoint-excluding and proper-crossing policies are then separate questions. An endpoint-excluding zero-length segment is empty by that chosen convention; this should not be confused with the convex-analysis relative interior of a singleton, which is the singleton itself.

## Line intersection in parametric form

Consider two lines in parametric form:

$$L_{1}(t)=P+tu,\\qquad L_{2}(s)=Q+sv,$$

where $u\\neq 0$ and $v\\neq 0$. These nonzero hypotheses exclude degenerate segments; they must be dispatched before the line formulas are used. Two point-segments intersect exactly when their points are equal under the declared equality policy. A point-segment at $P$ intersects a nondegenerate segment $[Q,Q+v]$ exactly when $\\operatorname{cross}(P-Q,v)=0$ and each coordinate of $P$ lies in the inclusive bounding box of the endpoints. An endpoint-excluding membership test also requires $P\\neq Q$ and $P\\neq Q+v$ (equivalently, a strict parameter on a nonzero coordinate); a proper-crossing policy rejects a degenerate segment outright.

For nondegenerate inputs, the lines meet when there exist parameters $t$ and $s$ such that $P+tu=Q+sv$. Rearranging gives

$$tu-sv=Q-P.$$

Taking the two-dimensional cross product with $v$ eliminates $s$:

$$t\\,\\operatorname{cross}(u,v)=\\operatorname{cross}(Q-P,v).$$

Similarly, crossing with $u$ gives

$$s\\,\\operatorname{cross}(u,v)=\\operatorname{cross}(Q-P,u).$$

If $\\operatorname{cross}(u,v)\\neq 0$, the lines are not parallel and the unique solution is

$$t=\\frac{\\operatorname{cross}(Q-P,v)}{\\operatorname{cross}(u,v)},\\qquad s=\\frac{\\operatorname{cross}(Q-P,u)}{\\operatorname{cross}(u,v)}.$$

For this nonparallel case, the segments intersect at an interior point when both $t$ and $s$ lie in the open interval $(0,1)$. They intersect at an endpoint when one parameter is $0$ or $1$ and the other lies in $[0,1]$. They do not intersect when either parameter lies outside $[0,1]$.

### Prove uniqueness and compare parameters before constructing a point

When the cross denominator is nonzero, u and v are linearly independent. The two-by-two linear system therefore has the unique parameters just derived. Substitution, or Cramer's rule applied to the two coordinates, proves both parameter values satisfy the original vector equality; they are not merely necessary cross-product conditions. Distinct parameters on a nonzero segment direction give distinct points, so the parameter conditions exactly characterize membership.

For exact rational input, compare each numerator directly with zero and the denominator before dividing. If the denominator is positive, a parameter belongs to the closed unit interval exactly when its numerator lies between zero and that denominator. If it is negative, the correct order is denominator at most numerator at most zero. Strict inequalities give open parameters. Forgetting this reversal is a sign error even when every orientation was evaluated exactly.

Once membership is certified, the point can be represented homogeneously by its coordinate numerators and the common nonzero denominator: $P+(N_t/\\Delta)u$ has numerator vector $\\Delta P+N_tu$ and last coordinate $\\Delta$. This retains an exact rational result without premature decimal division. It does not remove the need to distinguish the parallel branch, where that last coordinate would vanish and this finite intersection representation would be invalid.

## The parallel case

If $\\operatorname{cross}(u,v)=0$, the directions are parallel. There are two subcases:

1. **Disjoint parallel.** The lines do not coincide. This occurs when $\\operatorname{cross}(Q-P,u)\\neq 0$.
2. **Collinear.** The lines coincide. The segments may be disjoint, touch at an endpoint, or overlap along a subsegment.

In the collinear case, project all four endpoints onto a coordinate axis where the direction is nonzero. If $u_{x}\\neq 0$, use the $x$-axis; otherwise use the $y$-axis. The segment overlap problem reduces to one-dimensional interval intersection. The segments overlap when

$$\\max(\\min(P_{x},P_{x}+u_{x}),\\min(Q_{x},Q_{x}+v_{x}))\\leq\\min(\\max(P_{x},P_{x}+u_{x}),\\max(Q_{x},Q_{x}+v_{x})).$$

For closed segments write the left maximum as L and the right minimum as R. If L exceeds R the intersection is empty; equality gives one point; strict inequality gives a full closed subsegment. Endpoint-excluding inputs require the corresponding endpoint flags, as detailed below.

### Prove coordinate projection loses no collinear information

On the common carrier line, choose a coordinate j where u has nonzero component. The coordinate map is injective there: its inverse is $z\\mapsto P+((z-P_j)/u_j)u$. A nonzero parallel vector v has a nonzero component in that same coordinate, so neither segment collapses under this one-dimensional comparison. The image of each closed segment is exactly the interval between its endpoint coordinates, regardless of which endpoint is larger. Inverse mapping takes their interval intersection back to precisely the spatial intersection. This proves the sorting/max/min procedure, including a negative direction component and vertical lines where the x-coordinate cannot be used.

The geometric shape of a closed-segment intersection is therefore exhaustive. Nonparallel carriers have at most one common point. Disjoint parallel carriers have none. Coincident carriers reduce to one closed interval, possibly empty or a point. Degenerate inputs were dispatched as point queries first. No general-position assumption remains in this classification.

## Worked example 1 {#worked-example}

Let $P=(0,0)$, $u=(4,2)$, $Q=(1,3)$, and $v=(1,-2)$.

The cross denominator is

$$\\operatorname{cross}(u,v)=4\\cdot(-2)-2\\cdot 1=-8-2=-10.$$

With $Q-P=(1,3)$, we compute

$$t=\\frac{\\operatorname{cross}((1,3),(1,-2))}{-10}=\\frac{1\\cdot(-2)-3\\cdot 1}{-10}=\\frac{-5}{-10}=\\frac{1}{2}.$$

The intersection point is

$$L_{1}(1/2)=(0,0)+\\frac{1}{2}(4,2)=(2,1).$$

Solving for $s$ gives $s=1$, so the intersection is the endpoint of the second segment. Whether this counts as a collision depends on the boundary policy.

## Orientation-based intersection test

An alternative test uses the orientation predicate. Two segments $AB$ and $CD$ intersect properly (at an interior point of both) when $A$ and $B$ lie on opposite sides of the line through $C$ and $D$, and $C$ and $D$ lie on opposite sides of the line through $A$ and $B$. In symbols:

$$\\operatorname{orient}(A,C,D)\\cdot\\operatorname{orient}(B,C,D)<0\\quad\\text{and}\\quad\\operatorname{orient}(C,A,B)\\cdot\\operatorname{orient}(D,A,B)<0.$$

Endpoint and collinear cases must be handled separately. The orientation test is often preferred because it generalizes to higher dimensions and because exact arithmetic libraries can evaluate it without division.

### Prove the strict straddling criterion

Put $u=B-A$, $v=D-C$ and let delta be their nonzero cross product. Along the second line, orientation relative to the first baseline varies affinely with its parameter: its endpoint values are $o_1=\\operatorname{orient}(A,B,C)$ and $o_2=o_1+\\Delta$. They have opposite strict signs exactly when their unique zero occurs at a parameter strictly between zero and one. Along the first line the analogous values relative to the second baseline vary by minus delta. Opposite strict signs there give its parameter strictly between zero and one as well.

The unique carrier intersection must therefore belong to both interiors. Conversely a transverse intersection in both interiors places the zero strictly between each pair of endpoint orientation values, forcing both strict straddles. If delta were zero, each pair would have equal values and could not straddle strictly, so the two strict products themselves already exclude parallelism. Cyclic invariance identifies this proof's orientation orderings with the displayed formula above.

An implementation can compare sign labels for opposition without multiplying two potentially large determinant integers; the product inequalities are mathematical notation, not a requirement to form larger intermediate products. The proof establishes the predicate's logical correctness. Exact or certified signs are a separate premise of any numerical realization.

### The complete inclusive predicate

For closed segments, accept a strict proper crossing or any endpoint that is collinear with the other carrier and belongs to its closed coordinate bounding box. There are four endpoint possibilities. This is sufficient by membership itself. It is necessary because a nonparallel intersection is either strict interior in both segments or an endpoint of at least one; in the parallel collinear case a nonempty interval intersection always contains an endpoint of one input interval in the other. The point branches satisfy the same containment logic after their directions are dispatched.

Replacing both strict sign products by nonpositive ones without those bounding conditions is insufficient: collinear disjoint segments make every orientation zero. The bounding boxes supply the missing one-dimensional order. An endpoint lying on the infinite carrier but beyond both endpoints is not a segment intersection. These facts prove the inclusive algorithm rather than listing zero cases as informal afterthoughts.

## Boundary policies

Every intersection API must document its answers to the following questions:

- Does touching at an endpoint count as intersection?
- Are zero-length segments (degenerate to a point) allowed?
- If two collinear segments overlap, does the routine return one point, two points, or a segment?
- What is the behavior when an input point has non-finite coordinates?

Closed-set intersection, endpoint-excluding intersection and proper transverse crossing are different predicates. A Boolean answer is meaningful only after one of them is specified. A point returned for closed endpoint contact is correct for that set intersection even if an application chooses not to count such contacts as collisions. The zero-length branches above are part of that convention and must run before choosing a nonzero projection axis or dividing by a cross product.

## Worked example 2: reversed endpoints and mixed interval boundaries

Consider the segment from $(5,1)$ to $(1,1)$ and the segment from $(3,1)$ to $(7,1)$. Projecting to x gives intervals from one to five and from three to seven, with closed intersection from three to five. Mapping back gives the entire horizontal segment joining $(3,1)$ and $(5,1)$. In the first input's reversed parameter direction that overlap is parameters zero through one half; sorting parameter values without regard to its coordinate map could reverse the reported endpoints.

If both original endpoint pairs are excluded, the intersection instead has x strictly between three and five. If the first is closed and the second endpoint-excluding, it has x greater than three and at most five, a half-open interval. None of these is a proper transverse crossing because the carriers coincide. A predicate asking only for existence may use strict overlap for the two-open case, but a routine returning the intersection set must retain its endpoint flags rather than replace every overlap by a closed segment.

## Worked example 3: a nonparallel near miss at an endpoint

Let the first segment run from $(0,0)$ to $(1,0)$ and the second vertically from $(1+\\eta,-1)$ to $(1+\\eta,1)$. The cross denominator is two regardless of eta, so the carrier problem is not nearly parallel. Its first parameter is one plus eta and its second is one half. For any positive eta there is no closed-segment intersection; at zero there is endpoint contact; for eta strictly between minus one and zero there is a proper crossing.

An absolute instruction to round a parameter close to one onto the endpoint changes some exact disjoint cases into contact. If eta is an uncertain measured quantity whose enclosure straddles zero, the data admit more than one answer and a routine should report that uncertainty or apply a separately declared approximate-collision model. Certifying only the denominator sign is insufficient: endpoint membership predicates also need their own exact or error-controlled treatment.

## Conditioning and geometric tolerances

Two line directions can become nearly parallel while their exact intersection remains a finite, well-defined rational point. With carrier equations y zero and $y=\\varepsilon x+\\delta$, the intersection x is minus delta divided by epsilon when epsilon is nonzero. Perturbing delta changes the constructed point by the perturbation divided by epsilon. This explains poor conditioning of the point construction near parallelism, even when the algebraic nonparallel predicate has a definite sign.

It does not justify declaring every small denominator parallel. Coefficient or direction rescaling changes its size, and some exact segment queries can be decided from parameter inequalities without constructing a distant point at all. If an application wants to count segments within a physical distance tolerance, it is asking about thickened segments or a distance bound, a different geometric object treated in the next chapter. A numerical policy must specify whether it preserves exact intersection, encloses uncertain input or deliberately answers that approximate proximity question.

## Common errors

- **Dividing by a zero cross product.** The formula for $t$ and $s$ is invalid when $\\operatorname{cross}(u,v)=0$. Always test the denominator before dividing.
- **Using strict inequalities for endpoint cases.** A test with $<0$ instead of $\\leq 0$ will miss endpoint contacts. Choose the inequality to match the boundary policy.
- **Ignoring collinear overlap.** Two segments on the same line may share infinitely many points. Returning a single intersection point discards information.
- **Assuming general position.** Real data contains collinearities, duplicate points, and near-parallel lines. Algorithms must handle them explicitly.

## Practice exercises with solutions

### Exercise 1
Find the intersection of the segments from $(0,0)$ to $(2,2)$ and from $(0,2)$ to $(2,0)$.

<details><summary>Hint 1</summary>

Use the nonzero denominator before solving both parameters.

</details>

<details><summary>Hint 2</summary>

Each resulting parameter is one half.

</details>

<details><summary>Full solution</summary>

**Solution.** $P=(0,0)$, $u=(2,2)$, $Q=(0,2)$, $v=(2,-2)$. The denominator is $\\operatorname{cross}(u,v)=2\\cdot(-2)-2\\cdot 2=-4-4=-8$. Then $t=\\operatorname{cross}((0,2),(2,-2))/(-8)=(0\\cdot(-2)-2\\cdot 2)/(-8)=(-4)/(-8)=1/2$. The intersection is $(0,0)+(1/2)(2,2)=(1,1)$. Both parameters are in $[0,1]$, so the segments intersect at their interiors.

</details>

### Exercise 2
Show that the segments from $(0,0)$ to $(1,1)$ and from $(2,2)$ to $(3,3)$ are collinear but disjoint.

<details><summary>Hint 1</summary>

The carriers coincide, so use a nonconstant coordinate on them.

</details>

<details><summary>Hint 2</summary>

The two scalar intervals have a positive gap.

</details>

<details><summary>Full solution</summary>

**Solution.** Both segments lie on the line $y=x$. Projecting onto the $x$-axis, the first interval is $[0,1]$ and the second is $[2,3]$. Their intersection is empty, so the segments do not meet.

</details>

### Exercise 3
The segments $(0,0)$-$(2,0)$ and $(2,0)$-$(4,0)$ touch at $(2,0)$. Under what boundary policies does this count as an intersection?

<details><summary>Hint 1</summary>

The shared point is an endpoint of both segments.

</details>

<details><summary>Hint 2</summary>

Proper crossing and closed intersection have different answers.

</details>

<details><summary>Full solution</summary>

**Solution.** If the policy includes endpoints, the contact counts. If the policy requires interior intersection of both segments, it does not count because $(2,0)$ is an endpoint of both segments. The API must document which policy it implements.

</details>

### Exercise 4
Explain why the orientation-based test is division-free.

<details><summary>Hint 1</summary>

Inspect the arithmetic operations in each orientation sign.

</details>

<details><summary>Hint 2</summary>

Avoiding division does not itself prevent overflow or certify rounded product signs.

</details>

<details><summary>Full solution</summary>

**Solution.** The orientation predicate uses only addition, subtraction, and multiplication. It never divides. This makes it compatible with arbitrary-precision integer arithmetic and with adaptive floating-point libraries that compute the sign without rounding error; fixed-width integer arithmetic still needs an overflow bound.

</details>

### Exercise 5
Two noncollinear segments share a common endpoint, so two of the four orientations in the inclusive intersection test vanish. How should the code proceed, and what changes if the segments are collinear?

<details><summary>Hint 1</summary>

A repeated endpoint makes two orientation triples zero automatically.

</details>

<details><summary>Hint 2</summary>

The collinear case requires interval overlap, not merely a zero sign.

</details>

<details><summary>Full solution</summary>

**Solution.** For a generic shared endpoint, exactly the two orientation triples containing that endpoint twice vanish. The code checks whether the endpoint lies in the coordinate bounding box of each segment and then applies its inclusive or proper-crossing policy. If the segments are collinear, all four orientations vanish and the code instead intersects their one-dimensional projected intervals. Exactly three vanishing orientations cannot occur for two segments sharing an endpoint: the third forces the remaining endpoints onto the same line, making the fourth vanish too.

</details>


### Exercise 6

Prove the closed-unit-interval parameter criterion when the cross denominator is negative. Apply it to horizontal segment $(0,0)$–$(1,0)$ and vertical segment $(1/2,1)$–$(1/2,-1)$ without first dividing either numerator.

<details><summary>Hint 1</summary>

Multiplication by the negative denominator reverses both inequalities.

</details>

<details><summary>Hint 2</summary>

The denominator is minus two and both parameter numerators are minus one.

</details>

<details><summary>Full solution</summary>

For a negative denominator delta, the condition zero at most N over delta at most one is equivalent to delta at most N at most zero. In this example minus two is at most minus one, which is at most zero, for both numerators. The strict inequalities hold, so the intersection is proper and occurs at both parameters one half. The point is $(1/2,0)$. Using the positive-denominator comparison would reject the intersection even though the rational algebra and orientation signs were otherwise correct.

</details>

### Exercise 7

A zero-length segment consists of $(1,0)$ and the other closed segment runs from $(0,0)$ to $(2,0)$. Classify their closed-set intersection and their endpoint-excluding intersection under this chapter's policy.

<details><summary>Hint 1</summary>

For the closed query dispatch the first object as a point and check its membership in the other segment.

</details>

<details><summary>Hint 2</summary>

The endpoint-excluding convention makes the zero-length input empty.

</details>

<details><summary>Full solution</summary>

The point lies on the second carrier and within its bounding box, so the closed intersection is the singleton $(1,0)$. Under the stated endpoint-excluding convention the first input is empty, so the intersection is empty. No cross denominator may be used for the zero direction. This answer depends on the declared endpoint convention, not on the relative interior of a zero-dimensional convex set, which would instead retain its point. Naming the intended geometric object prevents a silent policy change.

</details>

### Exercise 8

Find the complete intersection of vertical segments $(2,5)$–$(2,1)$ and $(2,3)$–$(2,7)$. Explain which coordinate is valid for interval reduction and how reversed endpoints are handled.

<details><summary>Hint 1</summary>

The x-coordinate is constant along the entire carrier and cannot be an injective coordinate.

</details>

<details><summary>Hint 2</summary>

Use y intervals from one to five and from three to seven.

</details>

<details><summary>Full solution</summary>

The intersection is the closed segment joining $(2,3)$ and $(2,5)$. The y-coordinate is nonconstant and has an affine inverse along the carrier, while x alone loses every distinction between its points. Sorting each pair of y endpoints before taking the maximum lower endpoint and minimum upper endpoint handles the first input's reversed direction. Returning just one point would discard a continuum of common points; treating equal x-coordinates as a zero-length spatial input would confuse a collapsed projection with a degenerate segment.

</details>

### Exercise 9

The closed segments $(0,0)$–$(4,0)$ and $(1,0)$–$(3,0)$ overlap. State the correct set result, the result when both endpoints are excluded, and the proper-crossing answer. Explain why a single Boolean cannot encode all three requests.

<details><summary>Hint 1</summary>

The second segment is wholly contained in the first.

</details>

<details><summary>Hint 2</summary>

Coincident carriers never produce a transverse crossing.

</details>

<details><summary>Full solution</summary>

The closed intersection is the full segment from one to three on the x-axis. Excluding endpoints of both inputs gives the open segment with x strictly between one and three. Proper transverse crossing is false because the directions are parallel. A Boolean existence answer for the first two requests would be true, but neither Boolean records which interval endpoints belong to the intersection. A proper-crossing Boolean answers a different question altogether. An output contract must identify both the predicate and, when requested, the intersection set type.

</details>

### Exercise 10

In Worked example 3 suppose eta is known only to lie between minus one thousandth and plus one thousandth. Can increased arithmetic precision alone certify one of disjointness, endpoint contact or proper crossing? Describe admissible configurations proving your answer.

<details><summary>Hint 1</summary>

The interval includes negative, zero and positive eta.

</details>

<details><summary>Hint 2</summary>

The denominator remains two in every case; only the endpoint parameter changes.

</details>

<details><summary>Full solution</summary>

No single answer is determined. A negative value in the enclosure gives a proper crossing, zero gives endpoint contact and a positive value gives disjoint closed segments. All satisfy the specified input uncertainty, and none involves a nearly parallel denominator. More precise evaluation of an arbitrarily chosen central eta cannot remove that uncertainty. A correct response needs refined input, an unresolved/set-valued answer, or an explicitly different tolerance-based collision policy. This is an information limit of the given model rather than an arithmetic failure.

</details>

## Transferred capstone: Segment intersection with boundary cases {#computational-legacy-capstone-3}

Determine whether the segments $P=(0,0)$ to $Q=(4,4)$ and $R=(2,2)$ to $S=(6,0)$ intersect. If they do, find the intersection point. State which boundary policy applies.

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Solve both line parameters before applying segment bounds.

</details>

<details><summary>Hint 2</summary>

The intersection equals an endpoint of one segment, so the boundary policy matters.

</details>

<details><summary>Full solution</summary>

**Solution.** The first segment is $L_{1}(t)=(0,0)+t(4,4)$. The second is $L_{2}(s)=(2,2)+s(4,-2)$.

The cross denominator is $\\operatorname{cross}((4,4),(4,-2))=4\\cdot(-2)-4\\cdot 4=-8-16=-24$.

With $R-P=(2,2)$, we get $t=\\operatorname{cross}((2,2),(4,-2))/(-24)=(-4-8)/(-24)=12/24=1/2$.

The intersection is $(0,0)+(1/2)(4,4)=(2,2)$. This is the endpoint $R$ of the second segment and an interior point of the first. Under a policy that includes endpoints, the segments intersect at $(2,2)$.

</details>

## Looking backward and forward

This chapter derived the parametric intersection formulas and showed that the real difficulty lies in boundary cases: parallel lines, collinear overlap, endpoint touching, and zero-length segments. The orientation predicate provides a robust alternative that avoids division entirely.

The next chapter, **Projection, Distance, and Closest Points**, moves from intersection to proximity. Given a point and a line segment, how do we find the closest point on the segment? The answer uses the same parametric machinery, with one new idea: clamping the parameter to the finite interval $[0,1]$.

## Summary and source

Closed-segment intersection is empty, a singleton or a closed segment, proved by separating point inputs, nonparallel carriers and collinear interval reduction. Exact parameter inequalities, strict straddles and bounded endpoint membership give complete predicates under their stated policies. Open or half-open requests retain different endpoint flags, and proper transverse crossing excludes collinear overlap. Near-parallel construction sensitivity and uncertain endpoint membership require separate numerical contracts.

The five original exercise statements/solutions and the transferred capstone remain, now with staged support; five new questions give eleven supported problems. New exhaustive set, interval and straddling proofs and worked boundary examples develop the L3 commission. No program, geometric example execution or independent review is represented by these algebraic arguments.
`;export{e as default};