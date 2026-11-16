var e=`---
id: deep-dive-history-euclid-axiomatic-method
title: "Euclid and the axiomatic method"
license: CC BY-SA 4.0
---

# Euclid and the axiomatic method

A construction has two tasks: make the required object available and prove it has the promised property. In the equilateral-triangle construction of *Elements* I.1, equality of circle radii proves the three sides equal. It does not, by itself, prove that the two circles have a suitable intersection.

This L1 orientation assumes elementary circles, lengths and school algebra. Its single idea is to track the different jobs of a definition, a construction permission and an inferential equality rule. The actual primary [The Elements and the Idea of Proof](../books/history-of-mathematics/elements-and-the-idea-of-proof.md) develops the historical narrative. This article adapts the existing [two-edition source study](euclid-two-editions-source-criticism.md), retaining that longer manuscript, its witness records and its original exercises. Our coordinate supplement is explicitly modern mathematics, not evidence of an ancient coordinate argument.

## Definitions and permissions do different work

The circle definition explains why points on a circle are the same distance from its centre. A permission to describe a circle with a chosen centre and radius lets a construction introduce that circle. A permission to join points introduces the required segments. An equality principle then combines already established equalities.

These are different warrants. If a proof says two lengths equal the same third length, an equality rule supports their equality to one another. It does not draw either segment. If a construction draws two circles, the drawing permission creates two circles. It does not assert that every possible pair of circles intersects. That latter claim is false: two small circles with distant centres can be disjoint.

The older source study compares English edition transcriptions associated with Lardner and Heath. Its existing records distinguish the circle construction, the equality proof and local editorial discussion of intersection. Those are observations about particular represented pages. We do not turn them into a claim about every part of either edition, an original Greek manuscript or the first historical author of an explanatory paragraph.

## Worked example — Certify an equilateral triangle

Let the distinct base points be $A,B$, with length $d>0$. Describe a circle centred at each endpoint, giving both circles radius $d$. Suppose an intersection point $C$ off the base line has been supplied, and join it to the endpoints.

Membership in the first circle gives $AC=d$. Membership in the second gives $BC=d$. The base has length $AB=d$. Equality to the same length therefore yields $AC=BC=AB$. The three sides are equal, which is exactly the claimed equilateral property. No measurement of a diagram and no angle estimate is needed.

Every step has an identifiable source of authority: the two circle memberships, the shared radius and the equality principle. The proof is complete as an implication from its stated intersection premise. Its conclusion cannot be used backwards to justify that premise. This is not a flaw in equality reasoning; it is a separate existence question that the argument must expose rather than conceal.

## A modern supplement supplies the missing point

In the ordinary real coordinate plane put $A=(0,0)$ and $B=(d,0)$. A common point must satisfy

$$x^2+y^2=d^2,\\qquad(x-d)^2+y^2=d^2.$$

Subtracting the two equations and using the positive base length gives $x=d/2$. Substitution gives $y^2=3d^2/4$, which is positive. Hence the two points with that horizontal coordinate and vertical coordinates $\\pm\\sqrt3d/2$ lie on both circles and lie off the base line. Direct substitution verifies their membership, so existence is now established in this specified model.

The coordinate proof used real numbers, the distance formula and a positive square root. It is a valid supplement, but those resources must not be silently credited to the historical passage. A modern reconstruction can clarify a logical dependency while changing the tools used to discharge it. Keeping that label visible allows mathematical and historical reading to help one another without becoming the same claim.

The premise $d>0$ also matters. A zero base does not make this same construction a nondegenerate triangle. A proof intended for every permitted input should state what excludes that boundary case, even when an ordinary picture makes it look obvious.

## Change a premise to find what the proof uses

Keep the base length $d$ but give both circles another radius $r>0$. The same subtraction gives a common point's horizontal coordinate $d/2$, while its height must satisfy

$$y^2=r^2-d^2/4.$$

If the radius is smaller than half the base, there is no real intersection. If it equals half the base, the circles meet only at the midpoint and the joins are collinear. If it is greater, there are two off-base intersections. Their joined side lengths are $r,r,d$, so they form an equilateral triangle only when the radius equals the base length.

Thus “two equal circles” is not the whole explanation of the original result. Equal radii give two equal sides; matching that radius to the base gives the third equality. The changed case isolates precisely the extra hypothesis. This is a useful method for reading an axiomatic argument: vary one input, retain the valid steps and identify the first conclusion that no longer follows.

## Exercises

### Exercise 1 {#history-euclid-axiomatic-method-ex-1}

Use a base of length six and two circle radii of four. Determine the common points in coordinates and the three side lengths. Is the triangle equilateral?

<details><summary>Hint 1</summary>
Put the endpoints at horizontal coordinates zero and six.
</details>
<details><summary>Hint 2</summary>
The common points have horizontal coordinate three and height squared seven.
</details>
<details><summary>Full solution</summary>
The common points are $(3,\\sqrt7)$ and $(3,-\\sqrt7)$. Their distances to both endpoints are four because the squared distance is nine plus seven. Either choice gives sides four, four and six. It is a nondegenerate isosceles triangle but not equilateral. The equality of the two radii survives; their equality with the base does not. This is a modern changed-input reconstruction, not a newly discovered historical proposition.
</details>

### Exercise 2 {#history-euclid-axiomatic-method-ex-2}

For the same six-unit base, compare radii three and two. Explain why the statement “the circles were drawn” does not settle either existence question.

<details><summary>Hint 1</summary>
The height squared is the radius squared minus nine.
</details>
<details><summary>Hint 2</summary>
A triangle needs a common point off the base line, not merely any common point.
</details>
<details><summary>Full solution</summary>
Radius three gives height zero and a single common midpoint, so no nondegenerate triangle results. Radius two gives negative height squared and no real common point. Both pairs of circles can be drawn in the coordinate plane. Drawing them is therefore compatible with either tangency or disjointness and cannot by itself guarantee the off-base intersection used in the original equality proof. The requested existence condition must be stated separately.
</details>

## Continue in the primary book

Read [The Elements and the Idea of Proof](../books/history-of-mathematics/elements-and-the-idea-of-proof.md) for further source-bounded examples and [Reading Mathematical Sources](../books/history-of-mathematics/reading-mathematical-sources.md) for the witness-versus-reconstruction method. The original two-edition study retains its detailed source cards and advanced inquiry. This article adapts its mathematical argument with new orientation exercises, without claiming a new manuscript inspection or independent review.
`;export{e as default};