var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: trigonometric-ratios-area
title: "Trigonometric Ratios and the Area Formula"
level: secondary
license: "CC BY-SA 4.0"
---

# Trigonometric Ratios and the Area Formula

Right-triangle trigonometry begins with acute angles, but a triangle may also contain a right or obtuse angle. We need a language that still works when a perpendicular from a vertex lands on an extension of the opposite side. The extension of sine and cosine to wider angles supplies that language, and the triangle area formula gives it an immediate geometric use.

Required preparation is [Right-Triangle Trigonometry](right-triangle-trigonometry.md) and the earlier area results. The definitions of signed angles, radians and the unit-circle functions have their primary home in [Radians and the Unit Circle](../precalculus/radians-unit-circle.md) and [Sine, Cosine and Tangent](../precalculus/sine-cosine-tangent.md). Read those chapters for the complete definitions. Here we use their established values and signs to solve geometric problems, rather than repeat the unit-circle construction.

Most numerical examples use degrees because school surveying commonly records degrees. A formula involving sine has the same geometric meaning in radians when its argument is interpreted consistently. An angle of $120^\\circ$ and an angle of $2\\pi/3$ describe the same turn; entering the number $120$ in a calculator set to radians describes a different turn.

## Which signs matter in triangle geometry?

**Definition 12.1 (Included angle and side labels).** In a nondegenerate triangle $ABC$, let $a=BC$, $b=CA$ and $c=AB$. The angle $C$ is included between the sides of lengths $a,b$. Every side length is positive, and every interior angle lies strictly between $0^\\circ$ and $180^\\circ$.

The wider trigonometric definitions give sine positive throughout that angle interval. Cosine is positive for an acute angle, zero at a right angle and negative for an obtuse angle. Tangent is sine divided by cosine and is therefore undefined at $90^\\circ$ and negative for an obtuse angle. Those signs describe directions in the extended definitions; they do not make triangle side lengths negative.

For $0^\\circ<\\theta<180^\\circ$, the supplementary angle has
$$
\\sin(180^\\circ-\\theta)=\\sin\\theta,\\qquad
\\cos(180^\\circ-\\theta)=-\\cos\\theta.
$$
These are the reflection relationships established by the wider definitions. In particular, $\\sin120^\\circ=\\sin60^\\circ=\\sqrt3/2$, while $\\cos120^\\circ=-1/2$. Replacing every trigonometric value of an obtuse angle by a negative number would be incorrect.

A useful geometric distinction is between a perpendicular height and a horizontal projection. A height is a nonnegative distance between a vertex and a line. A projection onto a directed baseline may be negative because the perpendicular foot lies behind the baseline's chosen origin. The area formula will use the height, so no negative area is needed.

## Area from two sides and the included angle

**Theorem 12.2 (Triangle sine-area formula).** For a nondegenerate triangle with positive side lengths $a,b$ enclosing angle $C$,
$$
K=\\frac12ab\\sin C,
$$
where $K$ is the triangle's ordinary positive area.

*Proof.* Place the vertex of angle $C$ at $O$, put the side of length $b$ along a horizontal ray, and let the other endpoint $P$ satisfy $OP=a$. Draw a perpendicular from $P$ to the line containing the baseline, with height $h$.

If $C$ is acute, its right triangle gives $h=a\\sin C$. The foot may lie beyond the far endpoint of the baseline, but it still gives the distance to the same line. If $C$ is right, $h=a=a\\sin90^\\circ$. If $C$ is obtuse, the perpendicular foot lies on the backward extension. The acute reference angle is $180^\\circ-C$, so $h=a\\sin(180^\\circ-C)=a\\sin C$.

The ordinary base-height area theorem gives $K=bh/2$ in all three cases, including an external perpendicular foot. Substituting the expression for $h$ proves the formula. ∎

The word “included” is essential. If two known sides do not meet at the known angle, inserting those three values into the formula is not justified. Label the vertex at which the given angle occurs and identify the two sides that actually enclose it.

Cyclic relabelling gives the equal expressions
$$
K=\\frac12bc\\sin A
=\\frac12ca\\sin B
=\\frac12ab\\sin C.
$$
These are three descriptions of the same area, not three different assumptions about the triangle. Comparing them will lead to the sine rule in the next chapter.

**Example 12.3 (An obtuse included angle).** Two sides of a triangle have lengths ten and six centimetres and enclose $120^\\circ$. Its area is
$$
K=\\frac12(10)(6)\\sin120^\\circ
=30\\cdot\\frac{\\sqrt3}{2}
=15\\sqrt3\\text{ cm}^2.
$$
The positive answer agrees with the fact that sine is positive for an obtuse triangle angle. An altitude drawn to one side may be external, but the height remains a positive distance.

Using $\\cos120^\\circ$ instead would give a negative result and would describe a projection rather than a height. This is a useful diagnostic: a formula for ordinary area cannot turn negative merely because the triangle is obtuse.

## Recovering missing data from area

If $K,a,C$ are known with $K>0$, $a>0$ and $0^\\circ<C<180^\\circ$, then $\\sin C>0$ and the area formula may be rearranged:
$$
b=\\frac{2K}{a\\sin C}.
$$
The denominator condition is automatic for a genuine nondegenerate triangle, but should be stated when the formula is used independently. If an angle were zero or a straight angle, its sine would vanish and the two sides would be collinear, producing a degenerate figure of zero area.

**Example 12.4 (Finding a side from area).** A triangular panel has area $20\\sqrt3$ square metres. One side is eight metres, and the included angle between that side and an unknown side $b$ is $60^\\circ$. Then
$$
b=\\frac{2(20\\sqrt3)}{8(\\sqrt3/2)}=10\\text{ metres}.
$$
Check by substituting: half of $8\\cdot10$ times $\\sqrt3/2$ is $20\\sqrt3$. The units also check: square metres divided by metres gives metres.

The result determines that side under the stated included-angle condition. If the sixty-degree angle were opposite the known side instead, the equation would not apply directly and an ambiguous triangle could arise.

Area can also recover an angle ratio:
$$
\\sin C=\\frac{2K}{ab}.
$$
A valid positive triangle therefore requires $0<2K/(ab)\\le1$. If the right side exceeds one, the data are inconsistent. If it lies strictly between zero and one, there are generally two possible interior angles, one acute and its obtuse supplement. The principal inverse-sine output alone does not choose between them.

**Example 12.5 (Two angles, one area).** Suppose two sides have lengths eight and twelve units, and the area is twenty-four square units. Then
$$
\\sin C=\\frac{48}{96}=\\frac12.
$$
Both $C=30^\\circ$ and $C=150^\\circ$ lie between zero and a straight angle and have this sine. Each gives a nondegenerate triangle with the specified sides and area. They are not congruent: one has a small included angle and the other a large one. Additional information would be needed to decide which triangle was intended.

This does not contradict the SAS congruence criterion. SAS includes the actual angle, whereas area supplied only its sine. Equal sines do not always mean equal triangle angles.

## Parallelograms and rhombi

**Proposition 12.6 (Parallelogram area).** A parallelogram with adjacent side lengths $a,b$ and included interior angle $\\theta$ has area
$$
K=ab\\sin\\theta.
$$

*Proof.* A diagonal divides the parallelogram into two congruent triangles. Each has the stated adjacent sides and included angle at a suitable opposite vertex, and therefore area $ab\\sin\\theta/2$. Adding their areas proves the result. Equivalently, the perpendicular height to side $b$ is $a\\sin\\theta$, including the obtuse case by the supplementary relationship. ∎

For a rhombus, $a=b=s$, so its area is $s^2\\sin\\theta$. A square is the right-angle case, giving $s^2$. An acute-looking drawing is not required: supplementary adjacent angles have equal sine and give the same area.

**Example 12.7 (A rhombus and its diagonal split).** A rhombus has side length eight centimetres and an interior angle of $60^\\circ$. Its area is
$$
K=8^2\\sin60^\\circ=32\\sqrt3\\text{ cm}^2.
$$
Splitting along the diagonal joining the other two vertices produces two triangles, each with sides eight and eight enclosing sixty degrees. Each area is $16\\sqrt3$, and the sum agrees.

If the angle is instead $120^\\circ$, the area is unchanged because its sine is still $\\sqrt3/2$. The side lengths and supplementary angle descriptions can refer to the same rhombus viewed from adjacent vertices. Identifying corresponding vertices prevents us from treating a change of label as a different shape.

## A maximum-area consequence

**Corollary 12.8 (Fixed-side area bound).** Among triangles with two fixed positive side lengths $a,b$, the area is at most $ab/2$, with equality exactly when their included angle is right.

*Proof.* For an interior angle, $0<\\sin C\\le1$, with equality one exactly at $90^\\circ$. Multiply by the positive factor $ab/2$ in the area formula. ∎

For a parallelogram with fixed adjacent sides, the corresponding maximum is $ab$, attained by the rectangle. These statements are geometric optimisation results obtained without derivatives. The correct quantity to hold fixed is part of the claim: fixing a perimeter or fixing a diagonal would define another problem.

A triangle with sides eight and twelve enclosing a right angle has area forty-eight. Moving the included angle toward zero or toward a straight angle makes the perpendicular height smaller and the area approach zero. The side lengths do not shrink; the shape flattens. This gives a geometric interpretation of why the sine-area expression behaves as it does.

## Composite figures and reliable setup

A polygon can often be divided by a diagonal into triangles with known sides and angles. Compute each positive triangle area and add if the pieces have disjoint interiors. For a concave polygon, a convenient external triangle may instead need to be subtracted. State the decomposition so the calculation counts each region exactly once.

If a figure is scaled by a positive factor $k$, the two side factors in the triangle formula each acquire $k$, while the angle remains unchanged. Thus area acquires $k^2$. This recovers the earlier similarity law and shows how trigonometry fits the same geometry.

The formula is exact for ideal data. If an angle is measured, the resulting area is approximate unless the angle happens to be known exactly by construction. A calculator's decimal output should not be presented as more accurate than its inputs. It is often clearer to retain an expression such as $30\\sin47^\\circ$ until the last line.

Common errors include using the angle opposite one of the given sides as though it were included, forgetting the factor one-half for a triangle, and treating an obtuse sine as negative. Another is assuming that area and two side lengths always determine one triangle. The supplementary ambiguity in Example 12.5 shows precisely why that last claim fails.

## Exercises

### Exercise 12.1
<a id="trigonometric-ratios-area-ex-1"></a>

Find the area of a triangle with sides $9$ and $4$ enclosing $30^\\circ$.

<details>
<summary>Hint 1</summary>

Use the two sides that meet at the given angle.

</details>
<details>
<summary>Hint 2</summary>

The sine of thirty degrees is one-half.

</details>
<details>
<summary>Solution</summary>

The area is $K=(1/2)(9)(4)(1/2)=9$ square units. The half-factor comes from the triangle area theorem, in addition to the one-half supplied by the sine value. Omitting either one would give the wrong result.

</details>

### Exercise 12.2
<a id="trigonometric-ratios-area-ex-2"></a>

Find the area of a triangle with sides $7$ and $10$ enclosing $150^\\circ$.

<details>
<summary>Hint 1</summary>

An obtuse sine is positive.

</details>
<details>
<summary>Hint 2</summary>

Use the supplementary angle thirty degrees.

</details>
<details>
<summary>Solution</summary>

Since $\\sin150^\\circ=\\sin30^\\circ=1/2$, the area is $(1/2)(7)(10)(1/2)=35/2$ square units. The corresponding acute included angle of thirty degrees would give the same area, though generally a different triangle.

</details>

### Exercise 12.3
<a id="trigonometric-ratios-area-ex-3"></a>

A triangle has area $18$ square centimetres, sides of lengths $6$ and $b$, and included angle $90^\\circ$. Find $b$.

<details>
<summary>Hint 1</summary>

At a right angle sine is one.

</details>
<details>
<summary>Hint 2</summary>

Solve the resulting linear equation for the positive side length.

</details>
<details>
<summary>Solution</summary>

The formula gives $18=(1/2)(6)b=3b$, so $b=6$ centimetres. The result is a right isosceles triangle. Square centimetres divided by centimetres correctly yields a length.

</details>

### Exercise 12.4
<a id="trigonometric-ratios-area-ex-4"></a>

Two sides have lengths $5$ and $8$. Could their triangle have area $25$? Explain.

<details>
<summary>Hint 1</summary>

The sine factor cannot exceed one.

</details>
<details>
<summary>Hint 2</summary>

Calculate the largest possible area with those two sides.

</details>
<details>
<summary>Solution</summary>

The maximum is $(1/2)(5)(8)=20$ square units, so area twenty-five is impossible. Equivalently the proposed data would require $\\sin C=50/40=5/4>1$. The inconsistency is exact and cannot be repaired by choosing an obtuse angle.

</details>

### Exercise 12.5
<a id="trigonometric-ratios-area-ex-5"></a>

Two sides are $6$ and $10$, and the area is $15$. Find all possible included interior angles.

<details>
<summary>Hint 1</summary>

Recover the sine of the included angle.

</details>
<details>
<summary>Hint 2</summary>

Include the supplement if it remains an interior angle.

</details>
<details>
<summary>Solution</summary>

The sine is $2K/(ab)=30/60=1/2$. The possible angles are thirty and one hundred fifty degrees. Both lie strictly between zero and one hundred eighty degrees and produce nondegenerate SAS triangles. A principal arcsine calculation supplies only the first of these.

</details>

### Exercise 12.6
<a id="trigonometric-ratios-area-ex-6"></a>

A parallelogram has adjacent sides $12$ and $5$ enclosing $60^\\circ$. Find its area.

<details>
<summary>Hint 1</summary>

A parallelogram has twice the area of its diagonal half-triangle.

</details>
<details>
<summary>Hint 2</summary>

Use $ab\\sin\\theta$, without the triangle half-factor.

</details>
<details>
<summary>Solution</summary>

The area is $12\\cdot5\\cdot(\\sqrt3/2)=30\\sqrt3$ square units. Each of its two congruent diagonal triangles has area $15\\sqrt3$, which checks the factor of two.

</details>

### Exercise 12.7
<a id="trigonometric-ratios-area-ex-7"></a>

A rhombus has side $10$ and area $50$. Determine its possible interior angles at a chosen vertex.

<details>
<summary>Hint 1</summary>

Use the rhombus form of the parallelogram formula.

</details>
<details>
<summary>Hint 2</summary>

The equation determines sine, so inspect both supplementary values.

</details>
<details>
<summary>Solution</summary>

We have $50=100\\sin\\theta$, hence $\\sin\\theta=1/2$. The possible angle measures are thirty or one hundred fifty degrees. These can be adjacent angles of the same rhombus, so vertex labelling matters when describing the answer.

</details>

### Exercise 12.8
<a id="trigonometric-ratios-area-ex-8"></a>

Prove directly from the sine-area formula that scaling a triangle by factor $3/2$ multiplies area by $9/4$.

<details>
<summary>Hint 1</summary>

The included angle is unchanged by similarity.

</details>
<details>
<summary>Hint 2</summary>

Both side factors receive the same length scale.

</details>
<details>
<summary>Solution</summary>

If the original area is $K=ab\\sin C/2$, the scaled triangle has area $((3a/2)(3b/2)\\sin C)/2=(9/4)K$. This argument uses two scaled length factors and an unchanged angle. Scaling the sine value itself would not represent a similar triangle.

</details>

### Exercise 12.9
<a id="trigonometric-ratios-area-ex-9"></a>

Explain why the formula $K=ab\\sin C/2$ cannot be used with arbitrary two sides and an arbitrary known angle of a triangle.

<details>
<summary>Hint 1</summary>

Locate the vertex of angle $C$.

</details>
<details>
<summary>Hint 2</summary>

The altitude proof relates the two sides meeting at that vertex.

</details>
<details>
<summary>Solution</summary>

The proof takes one side as a base and uses the other to produce height through its included angle with that base. If the known angle is opposite one of the sides rather than between them, that height relation does not follow. The labels must satisfy $a=BC$, $b=CA$, with $C$ at their common endpoint. Another rule may first be needed to recover a suitable angle.

</details>

### Exercise 12.10
<a id="trigonometric-ratios-area-ex-10"></a>

A triangular plot has two boundary lengths of $20$ and $30$ metres. Prove its area cannot exceed $300$ square metres and describe exactly when that value occurs.

<details>
<summary>Hint 1</summary>

The two lengths enclose some interior angle.

</details>
<details>
<summary>Hint 2</summary>

Use the equality condition for the largest sine value.

</details>
<details>
<summary>Solution</summary>

Its area is $K=300\\sin C\\le300$. Equality requires $\\sin C=1$, which for an interior triangle angle occurs exactly at ninety degrees. Thus the two specified boundaries must be perpendicular. This conclusion holds for fixed adjacent lengths; a fixed total perimeter would be a different optimisation problem.

</details>

## Sources

This chapter gives original exposition and exercises using the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md) as an outline. For further primary textbook coverage of the area formula, see OpenStax, [Non-right Triangles: Law of Sines](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-1-non-right-triangles-law-of-sines). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

The extended trigonometric functions distinguish signs of directed components from positive geometric lengths. For every nondegenerate triangle, sine of an interior angle is positive, including the obtuse case. An altitude proof gives $K=ab\\sin C/2$ for two sides and their included angle, and a diagonal gives parallelogram area $ab\\sin\\theta$. The formula supplies missing sides, detects inconsistent data and shows that fixed-side area is largest at a right angle. Recovering an angle from its sine may leave two supplementary possibilities. The next chapter compares the three area expressions and develops the sine and cosine rules.
`;export{e as default};