var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: congruent-triangles
title: "Congruent Triangles"
level: secondary
license: "CC BY-SA 4.0"
---

# Congruent Triangles

A triangle is much more rigid than an arbitrary outline. Three appropriately chosen measurements can determine all its remaining sides and angles. The word “appropriately” matters: three side lengths work, while three angles leave the scale undetermined. Two sides and an angle can work or fail depending on which angle is specified.

The question here is which data force two triangles to have the same size and shape. We will make the correspondence between vertices explicit, explain the usual congruence criteria, and use them to prove properties of isosceles triangles. The conclusions will justify later results about quadrilaterals and circles without measuring a picture.

Read [Points, Lines, Angles and Measurement](points-lines-angles.md) and the construction procedures of [Ruler-and-Compass Constructions](ruler-compass-constructions.md). We work with nondegenerate Euclidean triangles: their three vertices are not collinear. The fundamental rigid motions preserve lengths and angles, and reflection is allowed when comparing figures.

## What congruence says

**Definition 3.1 (Congruence and correspondence).** Two figures are congruent if a rigid motion, or a composition of rigid motions, maps one exactly onto the other. In
$$
\\triangle ABC\\cong\\triangle DEF,
$$
the order records $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$.

Thus $AB$ corresponds to $DE$, not arbitrarily to any equal-looking side. The corresponding equalities are $AB=DE$, $BC=EF$, $CA=FD$ and the equalities of angles at the matched vertices. A reflection reverses orientation but preserves congruence. Clockwise versus anticlockwise labelling is not a reason to reject an otherwise correct match.

To prove congruence, we seek enough information to force a rigid match; we do not assume every corresponding equality at the start. Once congruence has been established, those additional equalities become conclusions. Using a desired side equality as an input to prove the congruence from which it is supposed to follow would be circular.

**Criterion 3.2 (SAS).** Two triangles are congruent if two pairs of corresponding sides and the angles included between those sides are equal.

*Justification.* Move the first vertex and its first side onto the matching vertex and side. Reflect if necessary so that both triangles lie on the same side of this base. Equality of the included angle fixes the direction of the second side, and equality of its length fixes its endpoint. The two triangles now coincide. This uses the basic Euclidean ability to move a segment rigidly and the uniqueness of a ray at a specified angle on a chosen side. ∎

The included angle is the angle where the two supplied sides meet. If the supplied sides are $AB,AC$, the included angle is at $A$. An angle at $B$ does not meet that hypothesis.

**Criterion 3.3 (SSS).** If all three pairs of corresponding sides are equal, the triangles are congruent.

*Justification.* Align the matching base segments by a rigid motion. The third vertex must lie on a circle about one base endpoint with radius equal to one remaining side and on a circle about the other endpoint with radius equal to the other side. For a nondegenerate triangle these circles meet at exactly two points on opposite sides of the base. A reflection across the base exchanges them. After choosing the same side, the third vertices coincide. ∎

This explanation also makes existence a separate question. Three positive numbers $a,b,c$ form a nondegenerate triangle exactly when $|a-b|<c<a+b$, by the circle-intersection condition. For example, lengths $2,3,8$ do not form a triangle, so a claim about “the triangle with those sides” has no object to compare. Equality at an endpoint produces a collinear, degenerate configuration.

**Criterion 3.4 (ASA).** Two equal pairs of corresponding angles and the equal side between them determine congruent triangles.

*Justification.* Align the included sides and place the triangles on the same side of that line. At each endpoint, the specified angle determines the ray containing the third vertex. The third vertex is their intersection, which is unique when the nondegenerate triangle exists. Thus both triangles coincide. ∎

The AAS criterion uses two corresponding angles and a corresponding side not necessarily between them. The triangle-angle-sum theorem in [Parallel Lines and Angle Sums](parallel-lines-angle-sums.md) gives the missing angle as $180^\\circ$ minus the other two. We may then choose the angles adjacent to the supplied side and apply ASA. This is a forward reference to a theorem proved there without using AAS; it identifies exactly which extra fact justifies the criterion.

## Applying a criterion carefully

**Example 3.5 (Choosing the correspondence first).** Suppose $AB=7$, $AC=5$, $\\angle BAC=48^\\circ$, while $PQ=5$, $PR=7$, and $\\angle QPR=48^\\circ$. The matched vertex is $A\\leftrightarrow P$, the side of length seven gives $B\\leftrightarrow R$, and the side of length five gives $C\\leftrightarrow Q$.

Therefore
$$
\\triangle ABC\\cong\\triangle PRQ
$$
by SAS. We conclude $BC=RQ$, $\\angle ABC=\\angle PRQ$, and $\\angle ACB=\\angle PQR$. Writing $\\triangle ABC\\cong\\triangle PQR$ would pair the length-seven side with the length-five side and record the wrong correspondence, even though the unlabelled triangles are congruent.

A criterion does not require the two drawings to face the same direction. It requires the data to match under a consistent vertex assignment. Reflected diagrams are common in constructions and circle arguments.

## Isosceles triangles as a proof laboratory

**Theorem 3.6 (Isosceles base angles).** If $AB=AC$ in a nondegenerate triangle $ABC$, then $\\angle ABC=\\angle ACB$.

*Proof.* Compare the ordered triangles $ABC$ and $ACB$. Their three corresponding side pairs are $AB=AC$, $BC=CB$, and $CA=BA$. SSS establishes congruence. The correspondence swaps $B,C$, so their angles are equal. ∎

**Theorem 3.7 (The apex median).** In an isosceles triangle with $AB=AC$, let $M$ be the midpoint of $BC$. Then $AM$ bisects the apex angle and is perpendicular to $BC$.

*Proof.* The triangles $ABM,ACM$ have $AB=AC$, $BM=CM$, and common side $AM$. By SSS they are congruent. Hence $\\angle BAM=\\angle MAC$ and $\\angle AMB=\\angle AMC$. The latter equal angles form a linear pair because $B,M,C$ are collinear in that order. Their sum is $180^\\circ$, so each is $90^\\circ$. This proves both conclusions. ∎

The hypotheses explain why a single segment can be a median, angle bisector and altitude in this special triangle. An arbitrary triangle has a median from each vertex, but it need not be perpendicular or bisect that angle.

**Example 3.8 (Using the median without assuming the answer).** In an isosceles triangle $AB=AC$, the base $BC$ is $18$ cm and $M$ is its midpoint. Suppose $\\angle BAM=(3x+4)^\\circ$ and $\\angle MAC=(5x-12)^\\circ$.

Theorem 3.7 makes these angles equal, so $3x+4=5x-12$ and $x=8$. Both angles are $28^\\circ$, and the entire apex angle is $56^\\circ$. Also $BM=CM=9$ cm and $AM\\perp BC$. These are separate consequences of the proved geometry. We did not assume bisection merely because the median looked centrally placed.

**Theorem 3.9 (Converse isosceles theorem).** If two angles of a triangle are equal, their opposite sides are equal.

*Proof.* Suppose $\\angle ABC=\\angle ACB$. Compare triangles $ABC,ACB$ using the two angles at the base endpoints and the common included side $BC=CB$. ASA gives congruence, so $AB=AC$. Relabelling proves the corresponding assertion for any equal angle pair. ∎

## Right triangles and the hypotenuse-leg criterion

**Criterion 3.10 (RHS, or hypotenuse-leg).** Two right triangles with equal hypotenuses and one equal corresponding leg are congruent.

*Justification.* Align the equal legs as $AB$ and put the remaining vertices $C,D$ on opposite sides of $AB$. Because both angles at $A$ are right, $C,A,D$ lie on the perpendicular through $A$. Equal hypotenuses give $BC=BD$, so triangle $BCD$ is isosceles with apex $B$.

Its median to $CD$ is perpendicular to $CD$ by Theorem 3.7. The line $BA$ is also perpendicular to $CD$. Uniqueness of the perpendicular through $B$ makes the median line equal to $BA$, so $A$ is the midpoint of $CD$. Hence $AC=AD$. We now have three corresponding equal sides in triangles $ABC,ABD$, and SSS gives congruence. Reflecting back restores the original positions. ∎

This argument does not need Pythagoras, which comes later. The right-angle hypothesis removes an ambiguity that generally remains in two-side-and-nonincluded-angle data.

## Insufficient data and nonexamples

**Example 3.11 (A genuine SSA ambiguity).** Take a circle with centre $B$ and a secant line not passing through $B$. Let its intersections be $C,D$. Choose an external point $A$ on the line so that the order is $A,C,D$, and join $A$ to $B$.

The triangles $ABC,ABD$ have common side $AB$, equal sides $BC=BD$ because they are radii, and the same angle at $A$ because rays $AC,AD$ coincide. These are two side pairs and a nonincluded angle. Yet $AC\\ne AD$, so the triangles are not congruent. This exact construction gives a counterexample to SSA without needing approximate measurements.

AAA is also insufficient for congruence. An equilateral triangle with side two and one with side five have the same three angles but different side lengths. They have the same shape at different scales, a relation called similarity and developed in Chapter 7.

One side and one angle leave still more freedom. Even some collections of three measurements are redundant: knowing all three angles supplies only two independent angle constraints because the sum is fixed. Counting the number of numerical facts is therefore not a substitute for checking a valid criterion.

When writing a proof, list the corresponding equalities, identify their reasons, and name the criterion. Then draw conclusions using the same correspondence. A shared side needs no new measurement; it equals itself. A vertically opposite angle equality needs the intersection configuration. A radius equality needs the same circle or known equal radii. These short reasons make a proof reproducible rather than a judgement based on a sketch.

## Exercises

### Exercise 3.1
<a id="congruent-triangles-ex-1"></a>

If $\\triangle ABC\\cong\\triangle PQR$, list the three corresponding side pairs and the three vertex matches.

<details><summary>Hint 1</summary>

Read the names in their written order.

</details>
<details><summary>Hint 2</summary>

The first, second and third positions must match consistently.

</details>
<details><summary>Solution</summary>

The vertex matches are $A\\leftrightarrow P$, $B\\leftrightarrow Q$, $C\\leftrightarrow R$. Thus $AB=PQ$, $BC=QR$, and $CA=RP$, with equal angles at each matched vertex. A different ordering could describe another correspondence, so equal-looking edges should not be substituted arbitrarily once the statement has fixed the match.

</details>

### Exercise 3.2
<a id="congruent-triangles-ex-2"></a>

Triangles have $AB=DE$, $AC=DF$, and $\\angle BAC=\\angle EDF$. State a valid congruence conclusion and criterion.

<details><summary>Hint 1</summary>

Both angles are included between the two supplied sides.

</details>
<details><summary>Hint 2</summary>

Match the shared-side vertex first.

</details>
<details><summary>Solution</summary>

The correspondence is $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$. Therefore $\\triangle ABC\\cong\\triangle DEF$ by SAS. We can then conclude $BC=EF$ and the remaining corresponding angle equalities. The supplied angle at $A$ is between $AB,AC$, just as the angle at $D$ is between $DE,DF$.

</details>

### Exercise 3.3
<a id="congruent-triangles-ex-3"></a>

Do lengths $3,5,9$ form a nondegenerate triangle? What about $3,5,8$ and $3,5,7$?

<details><summary>Hint 1</summary>

Compare the largest length with the sum of the other two.

</details>
<details><summary>Hint 2</summary>

Strict triangle inequalities are required.

</details>
<details><summary>Solution</summary>

The first triple fails because $3+5<9$. The second has equality $3+5=8$, giving only a collinear degenerate configuration. The third satisfies $|5-3|<7<5+3$, so the corresponding circles meet at two reflected positions and a nondegenerate triangle exists. Congruence criteria compare triangles that exist; they do not establish existence for impossible side data.

</details>

### Exercise 3.4
<a id="congruent-triangles-ex-4"></a>

In triangle $ABC$, $AB=AC$ and $\\angle ABC=47^\\circ$. Find $\\angle ACB$ and explain the justification without using a protractor.

<details><summary>Hint 1</summary>

Use the equal-side hypothesis.

</details>
<details><summary>Hint 2</summary>

The SSS comparison reverses the two base vertices.

</details>
<details><summary>Solution</summary>

The isosceles base-angle theorem gives $\\angle ACB=47^\\circ$. Its proof compares $\\triangle ABC$ with $\\triangle ACB$ using equal legs and the common base, then uses the resulting vertex correspondence. The conclusion is exact from the hypothesis and congruence, regardless of the drawing's appearance or physical measuring accuracy.

</details>

### Exercise 3.5
<a id="congruent-triangles-ex-5"></a>

An isosceles triangle has base length $26$ cm. Its apex median meets the base at $M$. Find both base pieces and the angle made by the median with the base.

<details><summary>Hint 1</summary>

A median goes to the midpoint.

</details>
<details><summary>Hint 2</summary>

The isosceles apex-median theorem supplies perpendicularity.

</details>
<details><summary>Solution</summary>

The pieces are $13$ cm each. Theorem 3.7 shows that the median is also an altitude, so each adjacent angle at $M$ is $90^\\circ$. Equal base pieces follow from the median definition, while perpendicularity additionally uses equal legs. Those two reasons should not be interchanged in a general triangle.

</details>

### Exercise 3.6
<a id="congruent-triangles-ex-6"></a>

Two right triangles have hypotenuses $13$ cm and a corresponding leg $5$ cm. Are they necessarily congruent? Would the same statement follow without the right angles?

<details><summary>Hint 1</summary>

Identify the specialised right-triangle criterion.

</details>
<details><summary>Hint 2</summary>

General SSA allows an ambiguity.

</details>
<details><summary>Solution</summary>

The right triangles are congruent by RHS: the hypotenuse and one corresponding leg agree. Without the right-angle information, the two side lengths alone do not determine the third vertex, and even a nonincluded angle can admit two choices. The right-angle hypothesis is what makes this specialised criterion sufficient.

</details>

### Exercise 3.7
<a id="congruent-triangles-ex-7"></a>

A learner uses equal angles $A,D$, equal sides $AB,DE$, and equal sides $BC,EF$ to claim SAS congruence. Identify the issue.

<details><summary>Hint 1</summary>

Find where the two stated sides meet in each triangle.

</details>
<details><summary>Hint 2</summary>

The included angles are at $B,E$, not at $A,D$.

</details>
<details><summary>Solution</summary>

The supplied sides meet at $B$ and $E$, so SAS would require $\\angle ABC=\\angle DEF$. An equality at $A,D$ is nonincluded-angle information. It gives an SSA pattern, which is not sufficient in general. The learner must supply an additional valid condition or use another proved criterion.

</details>

### Exercise 3.8
<a id="congruent-triangles-ex-8"></a>

Show that equal angles at $B,C$ in a triangle imply $AB=AC$, stating the congruence comparison.

<details><summary>Hint 1</summary>

Compare the triangle with its reversed labelling.

</details>
<details><summary>Hint 2</summary>

Use the base as the included side for ASA.

</details>
<details><summary>Solution</summary>

Compare $\\triangle ABC$ and $\\triangle ACB$. Their angles at the two base endpoints agree under the exchange $B\\leftrightarrow C$, and the included base is common. ASA gives congruence and hence $AB=AC$. This is the converse isosceles theorem, rather than an assumption that equal-looking legs must match.

</details>

### Exercise 3.9
<a id="congruent-triangles-ex-9"></a>

Why do two equilateral triangles with sides $4$ cm and $10$ cm not satisfy congruence, even though all their corresponding angles agree?

<details><summary>Hint 1</summary>

Rigid motions preserve lengths as well as angles.

</details>
<details><summary>Hint 2</summary>

AAA allows changes of scale.

</details>
<details><summary>Solution</summary>

A rigid motion cannot change a four-centimetre side into a ten-centimetre side. Thus the triangles are not congruent. Their angle data determine shape but not size, so AAA alone is insufficient. They are similar with length scale factor $10/4=5/2$, a relation that will be proved and used in Chapter 7.

</details>

### Exercise 3.10
<a id="congruent-triangles-ex-10"></a>

A proof claims $\\triangle ABM\\cong\\triangle ACM$ by SSS and then deduces $BM=CM$, but its only given equality is $AB=AC$. What additional information is needed for that SSS argument?

<details><summary>Hint 1</summary>

The common side supplies only one of three pairs.

</details>
<details><summary>Hint 2</summary>

A desired conclusion cannot also be an unexplained input.

</details>
<details><summary>Solution</summary>

SSS would need $AB=AC$, $AM=AM$, and $BM=CM$. The third is not supplied by the stated single hypothesis. If $M$ is additionally given to be the midpoint of $BC$, then $BM=CM$ is valid and the argument works. Without such information, using that equality to prove the congruence and then reporting it as a consequence is circular.

</details>

## Sources

Original exposition and exercises develop module 2 of [the retained geometry course](../../courses/euclidean-trigonometry-standard.md) and section 3 of [Paper, Shapes, and Shadows](../../courses/paper-shadow-geometry.md). Classical references are Euclid, [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html), propositions 4, 5, 6, 8 and 26, David Joyce's online edition, consulted 13 November 2026. The framework uses standard Euclidean rigid-motion and circle-intersection principles explicitly.

## Summary

Congruence means an exact rigid match, and ordered triangle names record the correspondence. SAS, SSS and ASA supply sufficient data; AAS follows after the triangle-angle-sum theorem, and RHS is a valid specialised right-triangle criterion. Congruence proves equal isosceles base angles and the combined median, altitude and angle-bisector property at the apex. SSA and AAA are insufficient in general. The next chapter uses the Euclidean parallel postulate to establish transversal angle rules and the triangle angle sum.

`;export{e as default};