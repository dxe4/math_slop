var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: similarity-proportion
title: "Similarity and Proportion"
level: secondary
license: "CC BY-SA 4.0"
---

# Similarity and Proportion

An enlarged photograph keeps its shape while changing its size. A small survey triangle can likewise represent an inaccessible larger triangle. The numerical connection is a common multiplier: corresponding lengths change by the same factor, while corresponding angles stay equal.

This chapter asks how we can prove that such a common multiplier exists. We shall first use area comparisons to prove the intercept theorem for a parallel cross-section of a triangle. That theorem will support an angle-based similarity proof without assuming proportional sides from a diagram. Applications then become equations with a justified correspondence.

Read [Parallel Lines and Angle Sums](parallel-lines-angle-sums.md) and [Area and the Pythagorean Theorem](area-pythagorean-theorem.md). All scale factors and segment lengths used in ratios are positive. We compare nondegenerate triangles and state when a point lies inside a side segment rather than on its extension.

## Similarity and the direction of a ratio

**Definition 7.1 (Similar triangles).** Triangles $ABC$ and $DEF$ are similar, written $\\triangle ABC\\sim\\triangle DEF$, if their corresponding angles are equal and there is one number $k>0$ such that
$$
DE=kAB,\\qquad EF=kBC,\\qquad FD=kCA.
$$
The written order fixes the correspondence.

The scale factor from the first triangle to the second is $k$. The reverse scale factor is $1/k$. Congruence is the special case $k=1$. Adding the same number to every side is generally not similarity: the triples $3,4,5$ and $6,7,8$ do not have equal corresponding ratios.

A ratio compares lengths expressed in a common unit. If a model side is $4$ cm and the corresponding real side is $6$ metres, the real-to-model factor is $600/4=150$, not $6/4$. Keeping units visible prevents a perfectly manipulated proportion from representing the wrong comparison.

## A parallel segment cuts sides proportionally

**Theorem 7.2 (Intercept theorem).** In triangle $ABC$, let $D$ lie strictly between $A,B$ and $E$ strictly between $A,C$, with $DE\\parallel BC$. Then
$$
\\frac{AD}{DB}=\\frac{AE}{EC},
\\qquad
\\frac{AD}{AB}=\\frac{AE}{AC}.
$$

*Proof.* Triangles $BDE,CDE$ share base $DE$. Their opposite vertices $B,C$ lie on a line parallel to that base, so their perpendicular heights agree. They therefore have equal area.

Triangles $ADE,BDE$ have bases $AD,DB$ on the same line and a common opposite vertex $E$. By the triangle-area formula,
$$
\\frac{[ADE]}{[BDE]}=\\frac{AD}{DB}.
$$
Here brackets denote area. Similarly, using bases $AE,EC$ and opposite vertex $D$,
$$
\\frac{[ADE]}{[CDE]}=\\frac{AE}{EC}.
$$
The equal denominator areas give the first ratio equality. If two positive pairs have equal part-to-part ratio, they also have equal part-to-whole ratio: writing $AD=tDB$ and $AE=tEC$ gives $AD/AB=t/(t+1)=AE/AC$. ∎

This proof uses area and parallelism, not an already assumed similarity of the two triangles. That distinction will matter in the next theorem.

**Theorem 7.3 (AA similarity).** If two pairs of corresponding angles of nondegenerate triangles are equal, the triangles are similar.

*Proof.* Let the corresponding angles at $A,A'$ and $B,B'$ agree. The third pair agrees by the triangle angle sum. After exchanging the two triangles if necessary, suppose $A'B'\\le AB$.

If these lengths are equal, ASA gives congruence and hence similarity with scale one. Otherwise choose $D$ inside $AB$ with $AD=A'B'$, and draw $DE\\parallel BC$ to meet $AC$ at $E$. The angle at $A$ agrees with $A'$, and the angle $ADE$ agrees with $B'$ by parallelism. With the included side $AD=A'B'$, ASA gives
$$
\\triangle ADE\\cong\\triangle A'B'C'.
$$
Hence $AE=A'C'$. The intercept theorem now yields
$$
\\frac{A'B'}{AB}=\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{A'C'}{AC}.
$$

Repeat the same construction from vertex $B$, using the side $BA$ as the matching base and a parallel to $AC$. The identical argument gives $B'C'/BC=B'A'/BA$. Thus all three corresponding ratios agree, establishing similarity. ∎

The angle test is called AA because two pairs suffice; an AAA statement is equivalent because the third pair follows automatically. Angles determine triangle shape, while one corresponding side pair determines the scale.

**Example 7.4 (Keeping part and whole apart).** In triangle $ABC$, $D$ lies on $AB$, $E$ on $AC$, and $DE\\parallel BC$. Suppose $AD=4$, $DB=6$, $AE=3$, and $BC=15$, all in centimetres.

The triangles $ADE,ABC$ are similar by AA. The small-to-large factor is $AD/AB=4/10=2/5$. Therefore $AE/AC=2/5$, giving $AC=7.5$ cm and $EC=4.5$ cm. Also $DE=(2/5)15=6$ cm.

The ratio $AD/DB=4/6$ instead compares one side part with its remainder and matches $AE/EC=3/4.5$. It does not match $AE/AC$. Writing the correspondence before substituting numbers distinguishes these two valid but different proportions.

## Side-based similarity tests

**Theorem 7.5 (SSS and SAS similarity).** Three proportional corresponding side pairs establish similarity. Alternatively, two proportional side pairs and equality of their included angles establish similarity.

*Proof.* Let the proposed scale from $ABC$ to $A'B'C'$ be $k$, and exchange the triangles if necessary so $k\\le1$. The case $k=1$ is the corresponding SSS or SAS congruence criterion.

For $k<1$, choose $D$ on $AB$ with $AD=kAB$ and draw $DE\\parallel BC$. AA similarity, already proved, gives $AE=kAC$ and $DE=kBC$. Under the three-side hypothesis, these are exactly the sides of $A'B'C'$, so SSS makes that triangle congruent to $ADE$. Since $ADE$ is similar to $ABC$, the required similarity follows.

Under the two-side-and-included-angle hypothesis, we have $AD=A'B'$, $AE=A'C'$, and $\\angle DAE=\\angle B'A'C'$. SAS makes the small triangle congruent to $A'B'C'$, and the same conclusion follows. ∎

The included-angle requirement remains essential, just as it did for congruence. Two side ratios and an arbitrary nonincluded angle do not generally eliminate the SSA ambiguity. Also these side tests are triangle results. Four proportional sides alone do not force two quadrilaterals to have the same angles; different rhombi supply counterexamples.

## Scaling perimeter and area

**Theorem 7.6 (Scale laws).** Similar polygons with length factor $k>0$ have perimeter factor $k$ and area factor $k^2$.

*Proof.* Adding corresponding side lengths multiplies their total by $k$, proving the perimeter statement. For similar triangles, corresponding altitudes have the same factor $k$: dropping perpendiculars creates matching right triangles with equal acute angles, so AA gives their corresponding height ratio. If an altitude foot is external, use the equal supplementary angles to identify the matching right triangles. The triangle-area formula then gives
$$
\\frac{A'}A=\\frac{(kb)(kh)/2}{bh/2}=k^2.
$$
Partition corresponding similar polygons into corresponding triangles. Each triangle area has the factor $k^2$, so adding their areas proves the polygon statement. ∎

When only an area ratio is known, the length factor is its positive square root, not the area ratio itself. Volumes of similar solids will have factor $k^3$, because a third length dimension contributes another multiplier; this is developed in the solids chapter.

**Example 7.7 (A scale with an exact area check).** A triangle has sides $5,12,13$ cm. Another has sides $15,36,39$ cm in the corresponding order. Every ratio is three, so SSS similarity gives scale factor $3$.

The first triangle is right by the converse of Pythagoras, and its area is $5\\cdot12/2=30\\text{ cm}^2$. The second has area $15\\cdot36/2=270\\text{ cm}^2$, a factor of nine. Their perimeters are thirty and ninety centimetres, a factor of three. These calculations verify the different length and area scale laws on one fully specified pair.

## Indirect measurement

**Example 7.8 (A shadow proportion).** A vertical pole of height $1.8$ metres casts a $1.2$ metre shadow while a tree casts an eight metre shadow. Assume level ground, a vertical tree and effectively parallel sunlight, with both shadows measured at the same time.

Each height and shadow form a right triangle. The sunlight rays make equal corresponding angles with the common ground direction, so AA makes the triangles similar. Thus
$$
\\frac{H}{8}=\\frac{1.8}{1.2},
\\qquad H=12\\text{ m}.
$$
The result depends on the geometric assumptions. Different ground slopes, a leaning tree or measurements at different solar angles would require another model.

If the pole shadow is known only to lie between $1.15$ and $1.25$ metres while the other quantities are treated as exact, then
$$
\\frac{14.4}{1.25}\\le H\\le\\frac{14.4}{1.15}.
$$
The lower shadow reading gives the larger inferred height because the denominator is positive. This interval runs from $11.52$ metres to about $12.52$ metres. It describes uncertainty within the model, rather than making the exact proportion itself approximate.

A map or photograph may introduce another limitation: perspective images do not generally preserve all length ratios across a plane. The parallel-light or uniform-enlargement assumptions must be supplied, not inferred from the word “picture”. Similarity is a proved relation between stated figures, not a promise that every practical image has one global scale.

A reliable proportional calculation therefore has four parts: establish the geometric test, write the correspondence, form ratios in one consistent direction, and interpret the answer with units and assumptions. Cross multiplication is only the algebraic middle of that argument.

## Exercises

### Exercise 7.1
<a id="similarity-proportion-ex-1"></a>

Two triangles have corresponding sides $4,6,8$ and $6,9,12$ centimetres. Establish similarity and give the factor from the first to the second.

<details><summary>Hint 1</summary>

Compare all three corresponding ratios.

</details>
<details><summary>Hint 2</summary>

One common multiplier supports the SSS test.

</details>
<details><summary>Solution</summary>

The ratios are $6/4=9/6=12/8=3/2$. Thus SSS similarity applies with factor $3/2$. Both triples satisfy the strict triangle inequalities. Adding two to the first triple would instead give $6,8,10$, whose ratios are not equal; similarity concerns multiplication, not a uniform additive change.

</details>

### Exercise 7.2
<a id="similarity-proportion-ex-2"></a>

Similar triangles have perimeters $28$ cm and $70$ cm. A side in the smaller triangle is $6$ cm. Find its corresponding larger side.

<details><summary>Hint 1</summary>

Perimeter has the same factor as side lengths.

</details>
<details><summary>Hint 2</summary>

Keep the smaller-to-larger direction consistent.

</details>
<details><summary>Solution</summary>

The factor is $70/28=5/2$. Therefore the corresponding side is $6(5/2)=15$ cm. Reversing the ratio would calculate a reduction instead of the stated enlargement. The perimeter rule follows by adding all corresponding side equalities, not by assuming that perimeter measures area.

</details>

### Exercise 7.3
<a id="similarity-proportion-ex-3"></a>

In triangle $ABC$, $D$ lies strictly between $A$ and $B$, and $E$ lies strictly between $A$ and $C$. If $DE\\parallel BC$, $AD=5$, $AB=12$, and $AC=18$, find $AE$ and $EC$.

<details><summary>Hint 1</summary>

Use AA for the small and large triangles.

</details>
<details><summary>Hint 2</summary>

The given $AB$ is a whole side, not the remainder $DB$.

</details>
<details><summary>Solution</summary>

The small-to-large factor is $AD/AB=5/12$. Hence $AE=(5/12)18=7.5$ and $EC=18-7.5=10.5$. A ratio using $AD/DB$ would instead have denominator $12-5=7$ and would match $AE/EC$, not $AE/AC$. The part-versus-whole distinction determines the equation.

</details>

### Exercise 7.4
<a id="similarity-proportion-ex-4"></a>

Two angles of one triangle are $42^\\circ,73^\\circ$ and the corresponding two of another are the same. Prove similarity and find the third angle.

<details><summary>Hint 1</summary>

Use the Euclidean angle sum.

</details>
<details><summary>Hint 2</summary>

AA establishes a common side scale even without a numerical side length.

</details>
<details><summary>Solution</summary>

The third angle in each triangle is $180^\\circ-42^\\circ-73^\\circ=65^\\circ$. AA gives similarity, including proportional corresponding sides. No numerical scale factor can be determined until at least one corresponding length comparison is supplied. Equal angles alone do not establish congruence.

</details>

### Exercise 7.5
<a id="similarity-proportion-ex-5"></a>

Similar triangles have area ratio $49:9$. Find the larger-to-smaller length factor and perimeter factor.

<details><summary>Hint 1</summary>

Area uses the square of the length factor.

</details>
<details><summary>Hint 2</summary>

Take a positive square root because lengths are positive.

</details>
<details><summary>Solution</summary>

The length factor is $\\sqrt{49/9}=7/3$. Perimeter has that same factor $7/3$. The area factor itself is $49/9$, so using it directly for lengths would overstate the enlargement. The positive root is required; a negative multiplier is not the length scale defined in this chapter.

</details>

### Exercise 7.6
<a id="similarity-proportion-ex-6"></a>

A model side is $3$ cm and its real counterpart is $7.5$ m. Find the real-to-model scale factor after converting units.

<details><summary>Hint 1</summary>

Express both lengths in centimetres.

</details>
<details><summary>Hint 2</summary>

The factor compares numerical values in one common unit.

</details>
<details><summary>Solution</summary>

The real length is $750$ cm, so the factor is $750/3=250$. A map statement would call this a scale of one to two hundred and fifty. The bare ratio $7.5/3$ mixes metres and centimetres and would not be the intended dimensionless length multiplier.

</details>

### Exercise 7.7
<a id="similarity-proportion-ex-7"></a>

A vertical one-metre stick casts a $0.8$ metre shadow while a vertical mast casts a twelve metre shadow on the same level ground at the same time. Find the mast height and state the similarity assumptions.

<details><summary>Hint 1</summary>

Compare height-to-shadow ratios.

</details>
<details><summary>Hint 2</summary>

Use parallel sunlight and right angles at the bases.

</details>
<details><summary>Solution</summary>

The right triangles are similar by AA under the verticality, level-ground and parallel-sunlight assumptions. Thus $H/12=1/0.8$, giving $H=15$ metres. Different solar angles or ground slopes could invalidate that model, so the assumptions belong in the answer rather than being left to the drawing.

</details>

### Exercise 7.8
<a id="similarity-proportion-ex-8"></a>

Give a counterexample to the claim that four proportional corresponding side lengths force quadrilateral similarity.

<details><summary>Hint 1</summary>

Compare two rhombi with different angles.

</details>
<details><summary>Hint 2</summary>

Equal sides do not fix a quadrilateral's shape.

</details>
<details><summary>Solution</summary>

A square with all sides one and a nonsquare rhombus with all sides two have every side ratio equal to two. But their corresponding angles are not equal: the square has right angles while the other rhombus does not. Therefore they are not similar. SSS similarity is a triangle criterion, not a rule for arbitrary polygons.

</details>

### Exercise 7.9
<a id="similarity-proportion-ex-9"></a>

Explain why the intercept theorem's area proof is not circular when used to establish AA similarity.

<details><summary>Hint 1</summary>

Identify exactly which earlier area results it uses.

</details>
<details><summary>Hint 2</summary>

It does not begin by assuming the small triangle is similar to the large.

</details>
<details><summary>Solution</summary>

The intercept theorem compares triangles with a common base or common altitude, using the already proved triangle-area formula and the parallel separation. Equal area denominators yield the side-part ratio. AA similarity is then deduced using that ratio and ASA congruence. Proportional sides were not assumed in the intercept proof, so they are legitimate new conclusions rather than the premise being proved.

</details>

### Exercise 7.10
<a id="similarity-proportion-ex-10"></a>

A triangle's lengths are reduced by factor $2/5$. Its original area is $75\\text{ cm}^2$. Find the new area and explain why congruence does not hold.

<details><summary>Hint 1</summary>

Square the length factor for area.

</details>
<details><summary>Hint 2</summary>

Congruence would require factor one.

</details>
<details><summary>Solution</summary>

The area is $75(2/5)^2=75(4/25)=12\\text{ cm}^2$. The triangles are similar but not congruent because their positive side lengths differ by factor $2/5$, not one. Angle preservation is consistent with a size change and does not by itself establish an exact rigid match.

</details>

## Sources

The chapter and exercises are original expansions of module 3 of [the retained geometry course](../../courses/euclidean-trigonometry-standard.md) and sections 4 and 7 of [Paper, Shapes, and Shadows](../../courses/paper-shadow-geometry.md). Classical proportionality and similarity results appear in Euclid, [Elements, Book VI](https://mathcs.clarku.edu/~djoyce/elements/bookVI/bookVI.html), propositions 1–6, David Joyce's online edition, consulted 13 November 2026.

## Summary

Similarity combines corresponding angle equality with one common positive length multiplier. Area comparisons prove the intercept theorem, which supports a noncircular AA proof; proportional sides also give SSS and SAS similarity tests. Perimeter scales by $k$ and area by $k^2$. Indirect measurement needs justified similarity, a consistent correspondence, common units and explicit physical assumptions. Next we apply congruence, angle sums and right triangles to chords, tangents and angles in circles.

`;export{e as default};