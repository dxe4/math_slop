var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: triangles-bearings-surveying
title: "Solving Triangles, Bearings and Surveying"
level: secondary
license: "CC BY-SA 4.0"
---

# Solving Triangles, Bearings and Surveying

A triangle becomes a measuring instrument when one side can be reached and the others cannot. A measured baseline and two sighting angles can determine the distance to an inaccessible point. Bearings describe the directions of those sight lines, but their reference direction differs from the angle convention commonly used on coordinate axes.

Required preparation is [Sine and Cosine Rules](sine-cosine-rules.md), [Coordinates: Lines, Distance and Circles](coordinates-lines-distance-circles.md), and the interpretation of trigonometric functions for wider angles. For identities and general angle equations, use [Trigonometric Identities](../precalculus/trigonometric-identities.md) and [Trigonometric Equations](../precalculus/trigonometric-equations.md). Those chapters own the broader identities and periodic solution families; here we apply the needed relationships to finite geometric models.

The goal is to produce a complete triangle solution and a clear account of what the answer measures. Before calculating, decide whether a number is a side length, a compass bearing, an interior angle or an angle of elevation. They may all involve the same picture while answering different questions.

## Completing a triangle

**Definition 14.1 (Solving a triangle).** To solve a nondegenerate triangle means to determine its three side lengths and three interior angles from sufficient stated data. The result must satisfy positivity, the angle sum, the strict triangle inequalities and every supplied condition.

If two angles and a positive side are known, subtract the angles from a straight angle and use the sine rule. If two sides and their included angle are known, use the cosine rule first. If all three sides are known, check the triangle inequalities and recover an angle with cosine. For side-side-angle information, retain the possible supplementary branch from inverse sine and check its remaining angle.

These methods are not interchangeable recipes. A sine-rule equation is useful only when it contains a known opposite side-angle pair. A cosine-rule equation is especially useful when the known angle is between the known sides. Starting with the actual data prevents a calculation from introducing an unknown quantity on both sides unnecessarily.

**Example 14.2 (A complete exact solution).** A triangle has $AB=10$, $AC=10$ and $\\angle A=120^\\circ$. The cosine rule gives
$$
BC^2=100+100-200\\cos120^\\circ=300,
$$
so $BC=10\\sqrt3$. Since the two sides at $A$ are equal, the base angles at $B,C$ agree. Their sum is $60^\\circ$, so each is $30^\\circ$.

All six quantities are now determined: sides $10,10,10\\sqrt3$ and angles $120^\\circ,30^\\circ,30^\\circ$. The longest side is opposite the largest angle, and $10+10>10\\sqrt3$ confirms nondegeneracy. Its area, if needed, is $(1/2)(10)(10)\\sin120^\\circ=25\\sqrt3$. An exact answer keeps the relationship between these measurements visible.

## Bearing conventions

**Definition 14.3 (Whole-circle bearing).** A whole-circle bearing is measured clockwise from north, with values from $000^\\circ$ inclusive to $360^\\circ$ exclusive. East is $090^\\circ$, south is $180^\\circ$ and west is $270^\\circ$. Leading zeros clarify that a small angle such as $035^\\circ$ is a bearing.

A quadrant bearing such as N $35^\\circ$ E means thirty-five degrees east of north and corresponds to whole-circle bearing $035^\\circ$. S $20^\\circ$ W corresponds to $200^\\circ$, while N $20^\\circ$ W corresponds to $340^\\circ$. Write the convention explicitly rather than assume that a naked angle has the intended reference direction.

**Result 14.4 (Reverse bearing).** The reverse bearing along the same straight segment differs by $180^\\circ$, reduced to the interval $[0^\\circ,360^\\circ)$.

*Proof.* Reversing a ray is a half-turn. Adding a half-turn changes its whole-circle bearing by $180^\\circ$. If the result reaches or exceeds $360^\\circ$, subtract one full turn to represent the same ray in the required interval. ∎

Interior triangle angles are angles between two rays at the same vertex. Those rays must both begin at that vertex. Thus an incoming travel bearing must be reversed before it is compared with an outgoing bearing to obtain the triangle's interior angle. The turning angle between travel directions is often the supplement of that interior angle.

**Example 14.5 (Crossing north does not make a large angle).** Two rays from a station have bearings $350^\\circ$ and $020^\\circ$. Their listed difference has magnitude $330^\\circ$, but the smaller angle between the rays is $360^\\circ-330^\\circ=30^\\circ$. Both point near north, one on each side.

For bearings $110^\\circ$ and $250^\\circ$, the smaller angle is $140^\\circ$. In general, first reduce bearings to one turn, take their absolute difference $d$, and use the smaller of $d$ and $360^\\circ-d$ when the required interior angle is the smaller angle between rays. A diagram and the actual triangle determine which rays belong in the comparison.

## Turning bearings into coordinates

**Theorem 14.6 (East and north components).** A displacement of length $L>0$ on bearing $\\beta$ has east component $L\\sin\\beta$ and north component $L\\cos\\beta$.

*Proof.* Relative to the positive east axis, its usual anticlockwise coordinate angle is $90^\\circ-\\beta$, interpreted modulo a full turn. The coordinate definitions give east component $L\\cos(90^\\circ-\\beta)$ and north component $L\\sin(90^\\circ-\\beta)$. The cofunction identities reduce these to the stated expressions. Their signs agree with the four compass quadrants. ∎

The formula is worth checking at cardinal directions. At bearing zero, the east component is zero and the north component is $L$. At ninety degrees, they become $L$ and zero. At one hundred eighty degrees, the north component is $-L$, recording southward travel rather than a negative distance.

**Example 14.7 (Route length and displacement).** A walker travels six kilometres east, then eight kilometres north. The total route length is fourteen kilometres. The net displacement is six east and eight north, so its length is
$$
\\sqrt{6^2+8^2}=10\\text{ kilometres}.
$$
Its bearing $\\beta$ is acute east of north and satisfies $\\tan\\beta=6/8=3/4$. Thus $\\beta=\\arctan(3/4)$, approximately $036.87^\\circ$.

The coordinate angle measured anticlockwise from east is its complement, approximately $53.13^\\circ$. Confusing those conventions would give a numerically plausible angle pointing in the wrong direction. The route length fourteen and displacement length ten are also different quantities; a request for distance from the start asks for the latter.

## Triangulation from a baseline

Suppose two accessible stations $A,B$ have a known separation $c>0$, and an inaccessible point $P$ is sighted from both. Convert each bearing into the interior angle between its sight ray and the corresponding baseline ray. If the two angles $A,B$ are positive and sum to less than $180^\\circ$, the remaining angle is $C=180^\\circ-A-B$, and the sine rule gives the ranges
$$
AP=\\frac{c\\sin B}{\\sin C},\\qquad
BP=\\frac{c\\sin A}{\\sin C}.
$$
Every denominator is positive for a nondegenerate triangle.

These equations determine a triangle on a specified side of the baseline. Without directional or side information, reflection across the baseline may give another location with the same internal triangle measurements. Bearings usually provide that directional information.

**Example 14.8 (A symmetric two-station survey).** Station $B$ is one hundred metres due east of $A$. A point $P$ is sighted on bearing $030^\\circ$ from $A$ and $330^\\circ$ from $B$.

The baseline ray $AB$ has bearing $090^\\circ$, so the interior angle at $A$ is sixty degrees. The reverse baseline $BA$ has bearing $270^\\circ$, so the interior angle at $B$ is also sixty degrees. Therefore the angle at $P$ is sixty degrees and the triangle is equilateral. Both ranges are one hundred metres.

To locate $P$, its east and north components from $A$ are $100\\sin30^\\circ=50$ and $100\\cos30^\\circ=50\\sqrt3$. Hence it lies fifty metres east and $50\\sqrt3$ metres north of $A$. This agrees with the second station: relative to $B$, its east component is negative fifty. The component check confirms both bearings and the baseline.

## Surveying a height from two positions

**Example 14.9 (An inaccessible base distance).** Two observation positions lie on level ground on the same straight line toward a vertical tower. The farther position is forty metres behind the nearer one. The elevation angles to the top are thirty degrees at the farther station and sixty degrees at the nearer station. Ignore eye height initially.

Let $x$ be the nearer station's distance to the tower base and $H$ the tower height. Right triangles give
$$
H=x\\tan60^\\circ=x\\sqrt3,\\qquad
H=(x+40)\\tan30^\\circ=\\frac{x+40}{\\sqrt3}.
$$
Equating them gives $3x=x+40$, so $x=20$ and $H=20\\sqrt3$ metres.

If both instruments are $1.5$ metres above the same level ground, replace $H$ in the equations by $H-1.5$. The baseline solution remains $x=20$, while the full height becomes $20\\sqrt3+1.5$. Equal instrument heights matter; unequal heights require separate vertical offsets in the two equations.

The equations depend on coplanar sight lines, level ground and correctly measured horizontal distances. A baseline measured along a slope is not automatically the horizontal distance used by tangent.

## A travel turn and its interior angle

**Example 14.10 (Reversing the incoming direction).** A vehicle travels eight kilometres north, then six kilometres on bearing $060^\\circ$. The turn between its two travel directions is sixty degrees, but the triangle at the turning point uses the reverse incoming ray, bearing $180^\\circ$. Its interior angle is therefore $120^\\circ$.

The distance $d$ from start to finish satisfies
$$
d^2=8^2+6^2-2(8)(6)\\cos120^\\circ=148,
$$
so $d=2\\sqrt{37}$ kilometres. A component check gives east $6\\sin60^\\circ=3\\sqrt3$ and north $8+6\\cos60^\\circ=11$. Their squared length is $27+121=148$.

Using sixty degrees as the triangle's interior angle would instead subtract forty-eight and produce an incorrect shorter distance. Both angle measures appear naturally in the situation, so explaining which one a formula needs is part of the solution.

## Accuracy and completeness

Extra measurements can check a model. If all three sides and all three angles are measured independently, the data may not satisfy exact triangle relations because instruments have error. Do not silently overwrite an inconvenient measurement. State the discrepancy and, if appropriate, distinguish the ideal fitted triangle from the raw observations.

Near-parallel sight lines make triangulation sensitive. In the range formula, a small remaining angle $C$ has small positive sine, so dividing by it can magnify changes in the measured angles. This is a geometric reason to prefer a baseline that gives a well-shaped triangle when the setting permits it. A long list of output decimals does not repair uncertain input.

Finally, “all solutions” still matters in a finite geometry problem. If SSA information allows two triangles, list both or state the additional observation selecting one. If a bearing puts the point in a different quadrant from the computed coordinates, revisit the ray directions. A complete answer combines a valid calculation with the promised location, units and model assumptions.

## Exercises

### Exercise 14.1
<a id="triangles-bearings-surveying-ex-1"></a>

Convert N $25^\\circ$ W and S $40^\\circ$ E to whole-circle bearings.

<details>
<summary>Hint 1</summary>

North-west directions lie just below a full turn.

</details>
<details>
<summary>Hint 2</summary>

South-east directions lie between east and south.

</details>
<details>
<summary>Solution</summary>

N $25^\\circ$ W is $360^\\circ-25^\\circ=335^\\circ$. S $40^\\circ$ E is $180^\\circ-40^\\circ=140^\\circ$. The labels specify which side of north or south to use; treating both as clockwise additions would give the wrong quadrants.

</details>

### Exercise 14.2
<a id="triangles-bearings-surveying-ex-2"></a>

Find the reverse bearings of $075^\\circ$ and $250^\\circ$.

<details>
<summary>Hint 1</summary>

Reverse directions differ by a half-turn.

</details>
<details>
<summary>Hint 2</summary>

Reduce the result to the interval from zero inclusive to three hundred sixty exclusive.

</details>
<details>
<summary>Solution</summary>

The reverse of $075^\\circ$ is $255^\\circ$. For $250^\\circ$, adding one hundred eighty gives $430^\\circ$, which reduces to $070^\\circ$ after subtracting a full turn. Reversing again returns each original bearing.

</details>

### Exercise 14.3
<a id="triangles-bearings-surveying-ex-3"></a>

Two sight rays have bearings $355^\\circ$ and $015^\\circ$. Find their smaller included angle.

<details>
<summary>Hint 1</summary>

They lie on opposite sides of north.

</details>
<details>
<summary>Hint 2</summary>

Subtract the large listed difference from one full turn.

</details>
<details>
<summary>Solution</summary>

The absolute difference is $340^\\circ$. The smaller angle is $360^\\circ-340^\\circ=20^\\circ$. Subtracting the numerical labels without considering the full-circle wrap would describe the reflex angle instead of the smaller one.

</details>

### Exercise 14.4
<a id="triangles-bearings-surveying-ex-4"></a>

Find the east and north components of a ten-unit displacement on bearing $150^\\circ$.

<details>
<summary>Hint 1</summary>

The direction lies east of south.

</details>
<details>
<summary>Hint 2</summary>

Use sine for east and cosine for north.

</details>
<details>
<summary>Solution</summary>

East is $10\\sin150^\\circ=5$, and north is $10\\cos150^\\circ=-5\\sqrt3$. The negative north component records southward travel. Their squared length is $25+75=100$, recovering the ten-unit displacement.

</details>

### Exercise 14.5
<a id="triangles-bearings-surveying-ex-5"></a>

A person walks nine kilometres west and twelve kilometres north. Find the displacement length and an exact bearing expression.

<details>
<summary>Hint 1</summary>

The endpoint is in the north-west quadrant.

</details>
<details>
<summary>Hint 2</summary>

Find the acute angle west of north, then subtract it from a full turn.

</details>
<details>
<summary>Solution</summary>

The displacement length is $\\sqrt{9^2+12^2}=15$ kilometres. Let $\\alpha=\\arctan(9/12)=\\arctan(3/4)$ be the acute angle west of north. The whole-circle bearing is $360^\\circ-\\alpha$. An acute principal angle alone would point east of north and have the wrong horizontal sign.

</details>

### Exercise 14.6
<a id="triangles-bearings-surveying-ex-6"></a>

Station $B$ is eighty metres east of $A$. A point has bearing $045^\\circ$ from $A$ and $315^\\circ$ from $B$. Find both ranges and the point's coordinates relative to $A$.

<details>
<summary>Hint 1</summary>

The two baseline interior angles are equal.

</details>
<details>
<summary>Hint 2</summary>

A right isosceles triangle has its perpendicular above the baseline midpoint.

</details>
<details>
<summary>Solution</summary>

Both baseline angles are forty-five degrees, so the angle at the point is ninety degrees. The ranges are each $80/\\sqrt2=40\\sqrt2$ metres. The point lies forty metres east and forty metres north of $A$, since the forty-five-degree sight line has equal components. Relative to $B$ its east component is negative forty, matching bearing $315^\\circ$.

</details>

### Exercise 14.7
<a id="triangles-bearings-surveying-ex-7"></a>

A journey has successive legs of five kilometres north and five kilometres on bearing $120^\\circ$. Find the straight-line distance from start to finish.

<details>
<summary>Hint 1</summary>

Reverse the first leg's bearing at the turning point.

</details>
<details>
<summary>Hint 2</summary>

The interior angle there is sixty degrees.

</details>
<details>
<summary>Solution</summary>

The reverse first ray has bearing $180^\\circ$, so its angle with the second ray is sixty degrees. The cosine rule gives $d^2=25+25-50\\cos60^\\circ=25$, hence $d=5$ kilometres. Components give east $5\\sqrt3/2$ and north $5-5/2=5/2$, whose squared length also equals twenty-five.

</details>

### Exercise 14.8
<a id="triangles-bearings-surveying-ex-8"></a>

A tower is observed from level ground at distances $x$ and $x+30$ metres, with elevations $60^\\circ$ and $30^\\circ$. Instruments are at ground level. Find $x$ and the height.

<details>
<summary>Hint 1</summary>

Write two tangent equations with the same height.

</details>
<details>
<summary>Hint 2</summary>

Multiply the equation involving $1/sqrt3$ by $sqrt3$ before equating.

</details>
<details>
<summary>Solution</summary>

The height satisfies $H=x\\sqrt3=(x+30)/\\sqrt3$. Hence $3x=x+30$, giving $x=15$ and $H=15\\sqrt3$ metres. Both distances are positive and the nearer station has the larger angle, as the geometry requires.

</details>

### Exercise 14.9
<a id="triangles-bearings-surveying-ex-9"></a>

Explain why an SSA survey that returns two angle-sum-valid triangles cannot be made unique merely by reporting more decimal places.

<details>
<summary>Hint 1</summary>

The ambiguity comes from equal sines of supplementary angles.

</details>
<details>
<summary>Hint 2</summary>

Numerical precision and missing geometric information are different issues.

</details>
<details>
<summary>Solution</summary>

Two distinct interior angles can have exactly the same sine. If both leave a positive third angle, each defines a valid triangle with the supplied SSA data. More decimals approximate both possibilities more precisely but do not select one. A further direction, side-of-baseline observation or measurement is needed to remove the ambiguity.

</details>

### Exercise 14.10
<a id="triangles-bearings-surveying-ex-10"></a>

A calculated point has positive east and negative north components, but its reported whole-circle bearing is $030^\\circ$. Identify the inconsistency.

<details>
<summary>Hint 1</summary>

A thirty-degree bearing points north-east.

</details>
<details>
<summary>Hint 2</summary>

Use the signs of both components to identify the quadrant.

</details>
<details>
<summary>Solution</summary>

Positive east and negative north place the point south-east, so its bearing must lie strictly between $090^\\circ$ and $180^\\circ$. Bearing $030^\\circ$ has positive north component and cannot match. The error may be a reference-direction or quadrant mistake; the two component signs provide an independent geometric check.

</details>

## Sources

The exposition and exercises are original, expanding the measurement outline in the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md). Primary textbook treatments of the triangle methods are OpenStax, [Law of Sines](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-1-non-right-triangles-law-of-sines) and [Law of Cosines](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-2-non-right-triangles-law-of-cosines). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Solving a triangle means determining all its sides and angles while retaining every valid branch. Bearings run clockwise from north, and reverse bearings differ by a half-turn. Interior angles compare rays beginning at the same vertex, so incoming travel directions often need reversal. East and north components give a second route to distances and directions. Triangulation and height surveys become precise once baselines, angle references, eye heights and planar assumptions are stated. The next chapter extends geometric measurement to solids, surface area and cross-sections.
`;export{e as default};