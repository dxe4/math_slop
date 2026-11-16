var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: points-lines-angles
title: "Points, Lines, Angles and Measurement"
level: secondary
license: "CC BY-SA 4.0"
---

# Points, Lines, Angles and Measurement

Geometry begins by deciding what the objects are and what is known about them. A pencil mark represents a point, but the ideal point has no width. A ruler edge represents a line, but the ideal line continues indefinitely. These idealisations let us prove exact statements even though every physical drawing has limited accuracy.

The question of this chapter is how to turn a diagram into a mathematical statement. We shall distinguish points from distances, segments from lines, and angle size from the lengths of its drawn arms. We will also separate assumptions, definitions, deductions and measurements. That habit will support every later construction and trigonometric calculation.

The required preparation is arithmetic with positive numbers, fractions and simple equations. The registered [Algebra from Stories](/atlas/#/item/book-algebra-from-stories) supplies that preparation; [Algebra and Functions](/atlas/#/item/book-algebra-and-functions) supplies further equation practice. We work in the ordinary flat Euclidean plane. Unless a reflex angle is explicitly specified, an angle written with three letters means the angle of size between zero and $180^\\circ$.

## Describing position without adding information

**Definition 1.1 (Basic geometric objects).** A point records a position. A line is an ideal straight path extending indefinitely in both directions. The segment $AB$ contains its distinct endpoints $A,B$ and the points between them. The ray from $A$ through $B$ starts at $A$, passes through $B$, and continues beyond $B$.

A line through distinct points $A,B$ is unique. This is a starting Euclidean assumption, not something established by the thickness of a drawn stroke. We use the same letters $AB$ for a segment and, in a numerical equality such as $AB=5\\text{ cm}$, for its length; the context distinguishes them.

Points are collinear if they lie on one line. Saying that $B$ lies between $A$ and $C$ asserts an order, not merely collinearity. It implies the segment-addition equation
$$
AC=AB+BC.
$$
If the order is different, that equation may be false. For three distinct collinear points, exactly one lies between the other two.

A diagram can communicate the intended configuration, but marks and words specify its constraints. An unmarked intersection that appears central need not be a midpoint. Two lines that look almost horizontal need not be parallel. A proof may use the information supplied in the statement and conclusions already justified from it; it may not silently promote a visual impression into an assumption.

**Example 1.2 (A length equation needs an order).** Points $A,B,C$ lie in that order on a line, with $AB=2x+1$ centimetres, $BC=x+4$ centimetres and $AC=20$ centimetres. Segment addition gives
$$
(2x+1)+(x+4)=20,
$$
so $3x=15$ and $x=5$. The resulting lengths are $11$ cm and $9$ cm, both positive and summing to $20$ cm. The positivity check matters: a formal equation solution producing a negative segment length would not describe the stated configuration.

If the order had instead been $A,C,B$, we would need $AB=AC+CB$. The same three expressions with a different order are a different problem.

## Angle measure and its conventions

**Definition 1.3 (Angles).** Two rays with a common endpoint form an angle. Their common endpoint is its vertex. In $\\angle ABC$, the vertex is the middle letter $B$, and the rays are $BA,BC$. A full turn measures $360^\\circ$, a straight angle $180^\\circ$, and a right angle $90^\\circ$.

An acute angle is strictly between zero and $90^\\circ$; an obtuse angle is strictly between $90^\\circ$ and $180^\\circ$. A reflex angle is strictly between $180^\\circ$ and $360^\\circ$. Zero and straight angles are useful limiting configurations, but the triangles studied later will be nondegenerate and have positive interior angles.

Extending the drawn arms of an angle does not change its measure. The rays specify directions; their visible lengths are a drawing choice. A degree is a unit of turn, rather than a unit of distance. Later trigonometry also uses radians, which are introduced in [Precalculus](/atlas/#/item/book-precalculus); we need only degrees in the first part of this book.

Angles are adjacent when they share a vertex and a boundary ray and have disjoint interiors. If ray $BD$ lies inside $\\angle ABC$, angle addition gives
$$
\\angle ABC=\\angle ABD+\\angle DBC.
$$
The interior-ray hypothesis is essential. Adding two angles on opposite or overlapping sides without checking their arrangement need not recover the intended angle.

**Definition 1.4 (Complementary and supplementary).** Two angle measures are complementary if their sum is $90^\\circ$ and supplementary if their sum is $180^\\circ$. These are statements about measures; the angles need not be drawn next to one another. A linear pair consists of adjacent angles whose nonshared rays are opposite rays, so its angles are supplementary.

**Example 1.5 (An angle split into two parts).** Ray $BD$ lies inside a right angle $ABC$. Suppose $\\angle ABD=3x+5$ degrees and $\\angle DBC=2x+10$ degrees. Then
$$
(3x+5)+(2x+10)=90,
$$
giving $x=15$. The parts are $50^\\circ$ and $40^\\circ$. Both are positive and their sum is the stated right angle. The equality comes from adjacency inside the right angle; knowing only the two algebraic expressions without the configuration would not justify adding them to ninety.

## A first complete proof

**Theorem 1.6 (Vertically opposite angles).** When two distinct lines intersect, each pair of opposite angles has equal measure.

*Proof.* Label three successive angle measures around the intersection $\\alpha,\\beta,\\gamma$, so that $\\alpha,\\beta$ form one linear pair and $\\beta,\\gamma$ form another. Then
$$
\\alpha+\\beta=180^\\circ,\\qquad \\beta+\\gamma=180^\\circ.
$$
Subtracting the same quantity $\\beta$ from equal totals gives $\\alpha=\\gamma$. The other pair is proved by the identical argument, using either remaining adjacent angle. ∎

The proof uses straight-angle measure, linear-pair addition and ordinary equality rules. It does not depend on the lines being perpendicular. If the lines are perpendicular, all four angles are right, which is a special case rather than the reason the general theorem holds.

**Example 1.7 (Intersecting lines).** Two intersecting lines have adjacent angles $(4x+8)^\\circ$ and $(2x+16)^\\circ$. They form a linear pair, so $6x+24=180$ and $x=26$. Their measures are $112^\\circ$ and $68^\\circ$. The opposite angles repeat these measures, so the four successive angles are $112^\\circ,68^\\circ,112^\\circ,68^\\circ$.

The calculation also checks the total turn: the four measures sum to $360^\\circ$. One must not set the two given adjacent expressions equal merely because opposite angles are equal. Identifying which angles are adjacent or opposite comes before choosing an equation.

**Definition 1.8 (Perpendicularity and bisection).** Two lines are perpendicular if they meet at a right angle. A midpoint of a segment is a point on the segment dividing its length into two equal parts. An angle bisector is a ray inside an angle dividing it into two equal angles.

The midpoint condition includes both equality and position. A point outside a segment is not its midpoint even if an unrelated distance happens to equal half the segment length. Likewise a line through a vertex is not an angle bisector merely because it cuts a triangular picture into two pieces.

The Euclidean framework includes rigid motions: translations, rotations and reflections preserve lengths and angle measures. We accept the standard triangle-congruence principles as basic geometric rules, and study their precise hypotheses in Chapter 3. The construction chapter can use those rules to explain why an ideal compass procedure works. A proof is a deduction from declared starting rules, not an attempt to prove everything without assumptions.

## Measurement, exactness and proof

A measured length such as $7.3$ cm usually abbreviates an approximation. An equality established by construction or proof has another status. For example, the two halves of an ideal bisected segment are exactly equal even if their measured readings differ slightly because of instrument resolution.

Suppose a ruler reading rounded to the nearest millimetre is $52$ mm. Under that rounding convention, the underlying length lies approximately in the interval from $51.5$ mm to $52.5$ mm, with the exact endpoint convention depending on how halfway values are rounded. The reading is not evidence that the true length is the integer fifty-two millimetres.

When adding measured quantities, compatible units are required. A length of $2$ metres plus $35$ centimetres is $2.35$ metres, not $37$ of an unnamed unit. Angle units must also agree: degrees and radians cannot be added as bare numbers without conversion. Our calculations state degrees explicitly while angle conventions are being established.

A counterexample refutes a claim about every figure. A non-square rectangle disproves “every rectangle has perpendicular diagonals”, even though squares satisfy it. Many confirming drawings do not prove the universal claim. Conversely, a poor physical drawing cannot refute an exact theorem if its required hypotheses were not accurately realised.

For written work, a short proof should make its structure visible. Begin with the givens, identify the result needed, give a reason for each equation or geometric step, and end with the requested conclusion. This is more informative than a chain of numerical answers whose geometric source is hidden. The exercises below practise those distinctions as well as arithmetic.

## Exercises

### Exercise 1.1
<a id="points-lines-angles-ex-1"></a>

Points $P,Q,R$ lie in that order on a line. If $PQ=7$ cm and $QR=12$ cm, find $PR$. Explain why the order matters.

<details>
<summary>Hint 1</summary>

Identify the point between the other two.

</details>
<details>
<summary>Hint 2</summary>

Use segment addition rather than subtracting unrelated lengths.

</details>
<details>
<summary>Solution</summary>

Since $Q$ is between $P$ and $R$, $PR=PQ+QR=19$ cm. If $R$ instead lay between $P$ and $Q$, the relevant equation would be $PQ=PR+RQ$. Collinearity alone would not justify the sum used here; the stated order supplies the hypothesis.

</details>

### Exercise 1.2
<a id="points-lines-angles-ex-2"></a>

Points $A,B,C$ lie in that order, with $AB=3x-1$, $BC=x+5$, and $AC=24$, all in centimetres. Find $x$ and both smaller lengths.

<details>
<summary>Hint 1</summary>

The two smaller segments partition the largest.

</details>
<details>
<summary>Hint 2</summary>

After solving, check that neither length is negative.

</details>
<details>
<summary>Solution</summary>

Segment addition gives $3x-1+x+5=24$, so $4x=20$ and $x=5$. Thus $AB=14$ cm and $BC=10$ cm. Both are positive and total $24$ cm, confirming that the algebraic answer describes the stated configuration.

</details>

### Exercise 1.3
<a id="points-lines-angles-ex-3"></a>

A segment of length $18$ cm has midpoint $M$. How far is $M$ from each endpoint? State the two conditions in the definition of midpoint.

<details>
<summary>Hint 1</summary>

The two parts are equal and add to the whole.

</details>
<details>
<summary>Hint 2</summary>

Include the position of the point, not just a numerical equality.

</details>
<details>
<summary>Solution</summary>

Each half has length $9$ cm. A midpoint must lie on the original segment and be equally distant from its two endpoints. Equality alone without the location condition is not the full definition. Here the two positive halves sum to the given eighteen centimetres.

</details>

### Exercise 1.4
<a id="points-lines-angles-ex-4"></a>

Classify angles of $0^\\circ,45^\\circ,90^\\circ,127^\\circ,180^\\circ,240^\\circ$ using the terminology of this chapter.

<details>
<summary>Hint 1</summary>

The acute and obtuse intervals have strict endpoints.

</details>
<details>
<summary>Hint 2</summary>

A reflex angle exceeds a straight angle but is less than a full turn.

</details>
<details>
<summary>Solution</summary>

They are respectively zero, acute, right, obtuse, straight and reflex angles. The measures $90^\\circ$ and $180^\\circ$ are not included in the strict acute or obtuse categories. Naming the exceptional endpoint cases prevents a classification based only on whether an angle looks small or large.

</details>

### Exercise 1.5
<a id="points-lines-angles-ex-5"></a>

Two complementary angles are $x^\\circ$ and $(2x+9)^\\circ$. Find their measures.

<details>
<summary>Hint 1</summary>

Complementary angles total ninety degrees.

</details>
<details>
<summary>Hint 2</summary>

Solve the linear equation and substitute back.

</details>
<details>
<summary>Solution</summary>

The equation is $x+2x+9=90$, so $3x=81$ and $x=27$. The angles are $27^\\circ$ and $63^\\circ$. They are positive and total $90^\\circ$. They need not be adjacent in a diagram for the complementary-measure statement to hold.

</details>

### Exercise 1.6
<a id="points-lines-angles-ex-6"></a>

Two supplementary angles differ by $38^\\circ$. Find both measures.

<details>
<summary>Hint 1</summary>

Use the smaller angle as the variable.

</details>
<details>
<summary>Hint 2</summary>

The larger is the smaller plus thirty-eight degrees.

</details>
<details>
<summary>Solution</summary>

Write the measures as $x$ and $x+38$. Their sum gives $2x+38=180$, hence $x=71$. The two angles are $71^\\circ$ and $109^\\circ$. Their difference is $38^\\circ$ and their sum is $180^\\circ$, so both supplied conditions have been checked.

</details>

### Exercise 1.7
<a id="points-lines-angles-ex-7"></a>

At an intersection of two lines, one angle is $73^\\circ$. Find the other three and give the reason for each kind of equality.

<details>
<summary>Hint 1</summary>

The opposite angle and adjacent angles follow different rules.

</details>
<details>
<summary>Hint 2</summary>

Use vertical equality and linear-pair sums.

</details>
<details>
<summary>Solution</summary>

The opposite angle is $73^\\circ$ by Theorem 1.6. Each adjacent angle is $180^\\circ-73^\\circ=107^\\circ$ because it forms a linear pair with the given angle. Thus the four measures alternate $73^\\circ,107^\\circ,73^\\circ,107^\\circ$. The sum is a full turn.

</details>

### Exercise 1.8
<a id="points-lines-angles-ex-8"></a>

A ray bisects a $136^\\circ$ angle. Find each part. Would an arbitrary ray through the vertex necessarily give this answer?

<details>
<summary>Hint 1</summary>

Bisection means two equal parts.

</details>
<details>
<summary>Hint 2</summary>

Equality of the parts is additional geometric information.

</details>
<details>
<summary>Solution</summary>

Each part is $136^\\circ/2=68^\\circ$. An arbitrary interior ray would create two parts with sum $136^\\circ$, but they need not be equal; for example, $50^\\circ$ and $86^\\circ$ have that sum. A ray outside the angle would not even be an interior split. The bisection hypothesis determines the answer.

</details>

### Exercise 1.9
<a id="points-lines-angles-ex-9"></a>

Convert $1.8$ metres plus $45$ centimetres to one length in metres. Explain why the calculation $1.8+45=46.8$ does not answer the question.

<details>
<summary>Hint 1</summary>

Put both quantities in the same unit before adding.

</details>
<details>
<summary>Hint 2</summary>

One centimetre is one hundredth of a metre.

</details>
<details>
<summary>Solution</summary>

Forty-five centimetres is $0.45$ metres, so the total is $1.8+0.45=2.25$ metres. The bare sum mixes metre and centimetre readings. A number without a consistent unit does not describe the requested physical length, even though the numerical addition itself is arithmetically valid.

</details>

### Exercise 1.10
<a id="points-lines-angles-ex-10"></a>

A drawing shows a point $M$ approximately halfway along $AB$, but the only stated data are $AM=4$ cm and $MB=5$ cm with $M$ between $A,B$. Can $M$ be a midpoint? What may a proof conclude?

<details>
<summary>Hint 1</summary>

Compare the data with every part of the definition.

</details>
<details>
<summary>Hint 2</summary>

A visual impression cannot override unequal stated lengths.

</details>
<details>
<summary>Solution</summary>

The point is not a midpoint because its endpoint distances differ. Segment addition does establish $AB=9$ cm, and its actual midpoint would be $4.5$ cm from either endpoint. The drawing may suggest what to investigate, but the supplied exact measurements determine which definitions and deductions apply. Calling $M$ a midpoint would contradict the givens.

</details>

## Sources

The exposition and exercises are original. The retained local seeds are [Geometry and Trigonometry: Proof, Coordinates, and Measurement](../../courses/euclidean-trigonometry-standard.md), module 1, and [Paper, Shapes, and Shadows](../../courses/paper-shadow-geometry.md), section 1. For the classical starting framework and opposite-angle theorem, see Euclid, [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html), definitions, postulates and proposition 15, in David Joyce's online edition, consulted 13 November 2026.

## Summary

Points, lines, segments and rays describe different objects, and segment addition needs a stated order. Angle measure concerns turning, with addition justified by a correctly placed interior ray. Linear pairs total a straight angle, giving a short proof that vertically opposite angles are equal. Midpoints, perpendiculars and bisectors are exact geometric conditions rather than visual impressions. Measurements carry units and possible error; proofs depend on givens and declared rules. Next we use those rules to describe and justify ruler-and-compass constructions.

`;export{e as default};