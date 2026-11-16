
# Quadrilaterals and Polygons

A four-sided figure may have equal sides, parallel sides, right angles, or some combination of these properties. Names such as rectangle and rhombus are useful because their definitions package precise hypotheses. They are less useful if treated as separate-looking pictures with rules guessed from appearance.

The question of this chapter is how to derive a quadrilateral's properties from triangles. A diagonal divides a convex quadrilateral into two triangles; parallel-angle equalities and congruence then establish equal sides, equal angles and midpoint relations. We will also count triangle pieces in larger polygons to prove their angle sums.

Read [Congruent Triangles](congruent-triangles.md) and [Parallel Lines and Angle Sums](parallel-lines-angle-sums.md). A polygon here is a simple closed figure formed from straight segments, with adjacent sides meeting at their shared endpoint and no self-crossings. Unless otherwise stated, our quadrilaterals and polygons are convex: every segment joining two of their points remains inside or on the figure. This makes the diagonal decompositions unambiguous.

## Definitions that may overlap

**Definition 5.1 (Quadrilateral classes).** A parallelogram is a quadrilateral with both pairs of opposite sides parallel. A rectangle is a quadrilateral with four right angles. A rhombus is a quadrilateral with four equal sides. A square has four equal sides and four right angles.

We use inclusive definitions. Every square is both a rectangle and a rhombus. A rectangle need not have unequal adjacent sides, and a rhombus need not have non-right angles. Rejecting a square from either class would make many valid implications awkward or false by definition alone.

A kite has two pairs of equal adjacent sides, so in $ABCD$ one possible pattern is $AB=AD$ and $CB=CD$. A rhombus satisfies that condition as a special case. We use the British term trapezium for a quadrilateral with at least one pair of opposite sides parallel; some texts use “exactly one pair” or another regional name. The mathematical statement should specify the convention when it matters.

A diagonal joins nonadjacent vertices. Side equality, diagonal equality and diagonal bisection are different assertions. Bisection says that an intersection is the midpoint of a particular segment; perpendicularity says that lines meet at right angles. Neither term implies the other.

## Parallelograms from triangles

**Theorem 5.2 (Parallelogram properties).** In a parallelogram, opposite sides and opposite angles are equal, adjacent angles are supplementary, and the diagonals bisect one another.

*Proof.* Let $ABCD$ be a parallelogram in cyclic order. Draw diagonal $AC$. Because $AB\parallel CD$, $\angle BAC=\angle DCA$. Because $BC\parallel AD$, $\angle BCA=\angle DAC$. With common side $AC$, ASA gives
$$
\triangle ABC\cong\triangle CDA.
$$
Thus $AB=CD$, $BC=DA$, and the opposite angles at $B,D$ agree. Co-interior angles along each side are supplementary, which also gives equality of the other opposite pair.

Let the diagonals meet at $O$. Compare triangles $AOB,COD$. Parallel-angle equalities give $\angle BAO=\angle DCO$ and $\angle ABO=\angle CDO$, while $AB=CD$ was just proved. ASA therefore yields $AO=CO$ and $BO=DO$. Thus each diagonal is bisected by the other. ∎

**Theorem 5.3 (A diagonal test for a parallelogram).** If the diagonals of a convex quadrilateral bisect one another, then it is a parallelogram.

*Proof.* Let $AO=CO$ and $BO=DO$ at the diagonal intersection. Triangles $AOB,COD$ are congruent by SAS, using the vertically opposite angles at $O$. Hence $\angle BAO=\angle DCO$, which are alternate interior angles for $AB,CD$ cut by $AC$. Their equality proves $AB\parallel CD$.

Similarly, triangles $BOC,DOA$ are congruent by SAS. Their corresponding angle equality gives $BC\parallel DA$. Both required parallel pairs have been established. ∎

A converse must be proved separately. Theorem 5.2 says that a known parallelogram has bisected diagonals. Theorem 5.3 allows a midpoint observation supplied as exact data to establish a previously unknown parallelogram.

**Example 5.4 (Sides and angles from the definition).** Opposite sides of a parallelogram have lengths $6x-3$ and $3x+12$ centimetres. The other opposite pair has lengths $2y+1$ and $y+9$ centimetres. Theorem 5.2 gives $x=5$ and $y=8$, so the side lengths are $27$ cm and $17$ cm. The perimeter is $2(27+17)=88$ cm.

If one interior angle is $65^\circ$, its opposite is also $65^\circ$ and both adjacent angles are $115^\circ$. The statements about side pairs and angle pairs have different reasons, even though they come from the same theorem. A diagram with no supplied parallelism would not justify any of these equations automatically.

## Rectangles and rhombi

**Theorem 5.5 (Rectangles and diagonals).** A rectangle is a parallelogram and has equal diagonals. Conversely, a parallelogram with equal diagonals is a rectangle.

*Proof.* Opposite sides of a rectangle are both perpendicular to the same side, so they are parallel. Thus it is a parallelogram. Compare triangles $ABC,DCB$: $AB=DC$, $BC$ is common, and the included angles at $B,C$ are right. SAS gives $AC=DB$.

For the converse, suppose a parallelogram has $AC=DB$. The same two triangles have $AB=DC$, common $BC$, and equal third sides, so SSS gives $\angle ABC=\angle DCB$. These adjacent parallelogram angles are supplementary, hence both are $90^\circ$. The opposite angles are equal to them, so the quadrilateral is a rectangle. ∎

**Theorem 5.6 (Rhombi and diagonals).** A rhombus is a parallelogram. Its diagonals are perpendicular and each bisects the angles at its endpoints. Conversely, a parallelogram with perpendicular diagonals is a rhombus.

*Proof.* In rhombus $ABCD$, triangles $ABC,CDA$ are congruent by SSS. The corresponding equal angles give the two pairs of alternate interior equalities, hence both opposite side pairs are parallel.

The parallelogram theorem gives $AO=CO$. Triangles $AOB,COB$ now have $AB=CB$, common $BO$, and $AO=CO$. By SSS their adjacent angles at $O$ are equal, hence right. Thus the diagonals are perpendicular. Comparing $ABC,ADC$ by SSS also shows that $AC$ bisects the angles at $A,C$; the analogous argument applies to $BD$.

Conversely, perpendicular diagonals of a parallelogram bisect one another. Right triangles $AOB,COB$ have equal legs $AO=CO$ and common $BO$, so SAS gives $AB=BC$. Opposite sides were already equal; therefore all four sides agree and the quadrilateral is a rhombus. ∎

Equal diagonals alone do not imply a rhombus: a non-square rectangle is a counterexample. Perpendicular diagonals alone do not imply a parallelogram: a general kite may have that property without both diagonals being bisected. The complete set of hypotheses in a test matters.

## Kites and a locus argument

**Proposition 5.7 (The symmetry diagonal of a kite).** In a convex kite with $AB=AD$ and $CB=CD$, the line $AC$ is the perpendicular bisector of $BD$.

*Proof.* The equality $AB=AD$ puts $A$ on the perpendicular-bisector locus of $BD$. The equality $CB=CD$ puts $C$ on the same locus. Since $A,C$ are distinct, their joining line is that perpendicular bisector. ∎

This proves that $AC$ bisects $BD$, not necessarily the reverse. To conclude that both diagonals bisect, additional parallelogram information would be needed.

**Example 5.8 (What kite data do and do not determine).** A kite has $AB=AD=8$ cm and $CB=CD=5$ cm. Its perimeter is $8+8+5+5=26$ cm. Theorem 5.7 gives $AC\perp BD$ and says that their intersection is the midpoint of $BD$.

The data do not specify either diagonal's length. They also do not imply that $AC$ is bisected. If it were a parallelogram as well, opposite sides would require $AB=CD$, contradicting $8\ne5$. Thus this kite is not a parallelogram or rhombus. A valid conclusion can include an exact property and an explicit statement that another quantity remains undetermined.

## Polygons and angle sums

**Theorem 5.9 (Convex polygon angle sum).** A convex polygon with $n\ge3$ sides has interior-angle sum
$$
(n-2)180^\circ.
$$

*Proof.* Choose one vertex and draw diagonals from it to all nonadjacent vertices. Convexity keeps every diagonal inside the polygon, and these diagonals divide it into exactly $n-2$ nonoverlapping triangles. Every triangle contributes $180^\circ$. Their corner angles partition the polygon's interior angles, so the total is $(n-2)180^\circ$. ∎

For a quadrilateral the sum is $360^\circ$. The same formula extends to simple concave polygons, but the fan from an arbitrary vertex may leave such a polygon. Our displayed proof is for the stated convex case; changing the hypothesis requires a different triangulation argument. Self-crossing figures require additional conventions and are not covered by this formula as stated.

**Corollary 5.10 (Exterior turns and regular angles).** Taking one exterior turn in the same direction at every vertex of a convex polygon gives total $360^\circ$. In a regular $n$-gon, each exterior angle is $360^\circ/n$ and each interior angle is $180^\circ-360^\circ/n$.

*Proof.* At each vertex the exterior turn is $180^\circ$ minus the interior angle. Adding gives $n180^\circ-(n-2)180^\circ=360^\circ$. In a regular polygon the angles are equal, so division by $n$ gives the formulas. ∎

A regular polygon has all sides equal and all interior angles equal. Equal sides alone do not ensure regularity: a nonsquare rhombus is equilateral as a quadrilateral but not equiangular. Equal angles alone do not suffice either, as a nonsquare rectangle demonstrates.

**Example 5.11 (Recovering the number of sides).** Each interior angle of a regular polygon is $156^\circ$. Its exterior turn is $24^\circ$, so $n=360/24=15$. Its interior total is $15\cdot156^\circ=2340^\circ$, agreeing with $(15-2)180^\circ$.

If a calculation gives a noninteger value for $n$, no regular polygon with exactly those angle data exists. For example, an exterior turn of $50^\circ$ would demand $7.2$ sides. The equation can diagnose impossible exact data instead of producing a rounded side count.

The number of diagonals of a convex $n$-gon is $n(n-3)/2$: each vertex joins to $n-3$ nonadjacent vertices, and this counts every diagonal twice. This count concerns all diagonals, whereas the angle-sum proof used only the $n-3$ diagonals from one chosen vertex.

These distinctions make polygon arguments dependable. State whether a claim concerns all sides, a particular diagonal, a convex figure, or a regular figure before using its associated formula. A geometric name is a collection of hypotheses, not a promise that every familiar-looking property is available.

## Exercises

### Exercise 5.1
<a id="quadrilaterals-polygons-ex-1"></a>

A parallelogram has one angle $112^\circ$. Find the remaining three angles.

<details><summary>Hint 1</summary>

Opposite angles agree.

</details>
<details><summary>Hint 2</summary>

Adjacent angles are supplementary.

</details>
<details><summary>Solution</summary>

The opposite angle is $112^\circ$, and each adjacent angle is $180^\circ-112^\circ=68^\circ$. Thus the angles alternate $112^\circ,68^\circ,112^\circ,68^\circ$ and total $360^\circ$. The equality and supplementary relation both rely on the parallelogram hypothesis, not merely on the figure having four sides.

</details>

### Exercise 5.2
<a id="quadrilaterals-polygons-ex-2"></a>

The diagonals of a parallelogram meet at $O$. If $AC=30$ cm and $BO=11$ cm, find $AO,CO,BD$.

<details><summary>Hint 1</summary>

Each diagonal is bisected.

</details>
<details><summary>Hint 2</summary>

Do not confuse the two diagonal lengths.

</details>
<details><summary>Solution</summary>

We have $AO=CO=15$ cm and $DO=BO=11$ cm, so $BD=22$ cm. A parallelogram need not have equal diagonals, so there is no reason to set $AC=BD$. The midpoint theorem applies separately to each diagonal.

</details>

### Exercise 5.3
<a id="quadrilaterals-polygons-ex-3"></a>

A convex quadrilateral has $AO=CO=7$ and $BO=DO=4$ at its diagonal intersection. What class is guaranteed? Is a rectangle guaranteed?

<details><summary>Hint 1</summary>

Use the converse diagonal-bisection theorem.

</details>
<details><summary>Hint 2</summary>

Check whether equal diagonals were supplied.

</details>
<details><summary>Solution</summary>

Both diagonals bisect one another, so the quadrilateral is a parallelogram. Their full lengths are fourteen and eight, which are unequal. It therefore is not a rectangle, since a rectangle has equal diagonals. The given midpoint data establish exactly the parallelogram condition; additional properties require additional hypotheses.

</details>

### Exercise 5.4
<a id="quadrilaterals-polygons-ex-4"></a>

Explain why every square is both a rectangle and a rhombus under this chapter's definitions. Give one property that a general rectangle need not share with a square.

<details><summary>Hint 1</summary>

Read the definitions inclusively.

</details>
<details><summary>Hint 2</summary>

A rectangle controls angles but not equality of all sides.

</details>
<details><summary>Solution</summary>

A square has four right angles, so it is a rectangle, and four equal sides, so it is a rhombus. A general rectangle need not have all sides equal; for example, a rectangle with side lengths three and seven is not a square. Its diagonals need not be perpendicular either. Inclusive classes allow these special cases without contradiction.

</details>

### Exercise 5.5
<a id="quadrilaterals-polygons-ex-5"></a>

Prove that a parallelogram with equal diagonals is a rectangle.

<details><summary>Hint 1</summary>

Compare triangles using one common side and the two diagonals.

</details>
<details><summary>Hint 2</summary>

Equal adjacent angles of a parallelogram must each be right.

</details>
<details><summary>Solution</summary>

For parallelogram $ABCD$, triangles $ABC,DCB$ have $AB=DC$, common $BC$, and $AC=DB$. SSS gives equality of the angles at $B,C$. These adjacent angles are supplementary by parallelism, so each is $90^\circ$. Opposite-angle equality then makes all four angles right, establishing a rectangle.

</details>

### Exercise 5.6
<a id="quadrilaterals-polygons-ex-6"></a>

A kite satisfies $AB=AD$ and $CB=CD$. Which diagonal bisects which, and why?

<details><summary>Hint 1</summary>

Both $A,C$ are equidistant from $B,D$.

</details>
<details><summary>Hint 2</summary>

Use the perpendicular-bisector locus.

</details>
<details><summary>Solution</summary>

The points $A,C$ both lie on the perpendicular bisector of $BD$, so their joining line is that bisector. Thus $AC$ bisects $BD$ and is perpendicular to it. The reverse bisection is not supplied by the kite hypotheses. Claiming that both diagonals bisect would incorrectly assume a parallelogram property.

</details>

### Exercise 5.7
<a id="quadrilaterals-polygons-ex-7"></a>

Find the interior-angle sum of a convex decagon and the number of its diagonals.

<details><summary>Hint 1</summary>

The two formulas count different triangle or endpoint structures.

</details>
<details><summary>Hint 2</summary>

Use $n=10$ in each proved expression.

</details>
<details><summary>Solution</summary>

The interior-angle sum is $(10-2)180^\circ=1440^\circ$. The diagonal count is $10(10-3)/2=35$. The fan used in the angle proof has only seven diagonals from one vertex and creates eight triangles; it is not the set of all thirty-five diagonals. Keeping those counts separate avoids an incorrect triangulation total.

</details>

### Exercise 5.8
<a id="quadrilaterals-polygons-ex-8"></a>

Each interior angle of a regular polygon is $140^\circ$. Find the number of sides.

<details><summary>Hint 1</summary>

First find the corresponding exterior turn.

</details>
<details><summary>Hint 2</summary>

The exterior turns total one full turn.

</details>
<details><summary>Solution</summary>

The exterior turn is $180^\circ-140^\circ=40^\circ$. Hence $n=360^\circ/40^\circ=9$. Checking the interior total gives $9\cdot140^\circ=1260^\circ=(9-2)180^\circ$, consistent with the polygon theorem. The integer answer is required because side count is discrete.

</details>

### Exercise 5.9
<a id="quadrilaterals-polygons-ex-9"></a>

Can a regular polygon have every exterior turn exactly $70^\circ$? Explain without rounding the number of sides.

<details><summary>Hint 1</summary>

Divide the full turn by the proposed turn.

</details>
<details><summary>Hint 2</summary>

A noninteger side count signals inconsistent data.

</details>
<details><summary>Solution</summary>

The required side count would be $360/70=36/7$, not an integer. Therefore no regular polygon has those exact turns. Rounding this to five would change the given angle: a regular pentagon has exterior turn $72^\circ$. Exact construction data and approximate measurements must be distinguished.

</details>

### Exercise 5.10
<a id="quadrilaterals-polygons-ex-10"></a>

Give counterexamples to “equal diagonals imply a rhombus” and “perpendicular diagonals imply a parallelogram”.

<details><summary>Hint 1</summary>

Use a nonsquare rectangle for the first claim.

</details>
<details><summary>Hint 2</summary>

Use a kite with unequal adjacent side-pair lengths for the second.

</details>
<details><summary>Solution</summary>

A rectangle of unequal adjacent side lengths has equal diagonals but is not a rhombus. A convex kite with $AB=AD=8$ and $CB=CD=5$ has perpendicular diagonals by the locus theorem, but cannot be a parallelogram because its opposite sides are unequal. These counterexamples show why the converses of isolated diagonal properties need their full stated hypotheses.

</details>

## Sources

The chapter and exercises are original developments from the congruence and parallel-line material in [the retained geometry course](../../course-texts/atlas-euclidean-trigonometry-standard.md). For classical parallelogram arguments see Euclid, [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html), particularly propositions 33–34, David Joyce's online edition, consulted 13 November 2026. Definitions and convexity restrictions are specified above.

## Summary

Quadrilateral definitions may overlap: squares are rectangles and rhombi. Parallel sides and congruent triangles prove parallelogram side, angle and diagonal properties; the diagonal-bisection converse gives a useful recognition test. Rectangles have equal diagonals, rhombi have perpendicular angle-bisecting diagonals, and a kite's symmetry diagonal bisects the other. Convex polygon triangulation gives $(n-2)180^\circ$, leading to a full-turn exterior sum and regular-angle formulas. Next, area comparisons turn these shapes into measurements and a proof of Pythagoras.

