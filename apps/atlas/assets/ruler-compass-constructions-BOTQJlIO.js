var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: ruler-compass-constructions
title: "Ruler-and-Compass Constructions"
level: secondary
license: "CC BY-SA 4.0"
---

# Ruler-and-Compass Constructions

A construction problem asks for an exact geometric procedure using specified operations. It does not ask for a sufficiently accurate sketch or a numerical approximation. A perpendicular bisector drawn by a justified compass procedure is defined by equal distances, even if an actual pencil line has width and a ruler reading is imperfect.

This chapter asks how to describe a construction so that another reader can reproduce it and understand why it works. We separate the instructions, the existence conditions, and the proof. The distinction is useful well beyond classical geometry: every procedure has inputs, permitted operations, and cases where an intersection may fail to exist or be unique.

Read [Points, Lines, Angles and Measurement](points-lines-angles.md) first. We use the elementary triangle congruence rules as declared Euclidean starting rules; their names and hypotheses are developed in [Congruent Triangles](congruent-triangles.md). No coordinate formula or trigonometric calculation is required.

## The permitted operations

**Definition 2.1 (Straightedge-and-compass construction).** Starting with given points and lengths, the ideal operations are to draw the line through two distinct known points, draw a circle with known centre and known positive radius, and mark intersections of lines and circles when those intersections exist. A straightedge is unmarked: its role is to draw lines, not to read a numerical scale.

We allow a compass opening to transfer a known segment length. Euclid's original formulation can reproduce such transfers with intermediate constructions; this book uses the familiar modern convention explicitly. Marking an arbitrary decimal from a graduated ruler is not one of these ideal operations. Nor is adjusting a sketch until an angle appears to be one-third of another.

Lines may have zero, one or infinitely many common points. Two distinct circles may have zero, one or two intersections; identical circles have infinitely many. Instructions such as “choose the intersection” must therefore explain which intersection is intended and why the required one exists.

We use the standard Euclidean intersection property: two circles of radii $r,s$ whose centres are distance $d$ apart intersect in two points when $|r-s|<d<r+s$. For $d>0$, equality $d=|r-s|$ or $d=r+s$ gives tangency. If $d=0$ and $r=s$, the circles coincide instead. This is a property of the ordinary Euclidean model, not an assertion about arbitrary curved geometry. For two equal circles of radius $AB$ centred at distinct points $A,B$, the strict inequalities are $0<AB<2AB$, so two intersections exist.

## An equilateral triangle

**Construction 2.2 (Equilateral triangle on a given segment).** Given distinct points $A,B$, draw circles centred at $A$ and $B$, each of radius $AB$. Choose either intersection $C$, and join $AC,BC$.

*Proof.* The first circle gives $AC=AB$. The second gives $BC=AB$. Thus all three sides of $ABC$ are equal, which is the definition of an equilateral triangle. The two intersection choices lie on opposite sides of $AB$ and give reflected triangles. Distinctness of $A,B$ ensures a positive radius and a nondegenerate triangle. ∎

**Example 2.3 (Two valid answers are not an error).** Suppose the given base has length $5$ cm. Both circles have radius exactly that base length, and either intersection gives a triangle with three sides of length $5$ cm. A condition such as “construct the triangle above the drawn base” selects one of the reflected answers; without it, both satisfy the problem.

The proof does not consist of measuring the three sides afterwards. Equalities follow from the chosen circle radii. Measurement can reveal a physical drawing mistake, but it is not the mathematical reason the ideal construction is equilateral.

## The perpendicular bisector

**Construction 2.4 (Bisecting a segment).** For distinct points $A,B$, draw the two circles of radius $AB$ as above, and call their intersections $P,Q$. Draw the line $PQ$. Let $M$ be its intersection with $AB$.

**Theorem 2.5 (Correctness and locus).** The line $PQ$ passes through the midpoint of $AB$ and is perpendicular to $AB$. Moreover it consists exactly of the points $X$ satisfying $XA=XB$.

*Proof.* The intersection points lie on opposite sides of $AB$, so the segment $PQ$ crosses $AB$ at $M$. We have $PA=PB$, $QA=QB$, and common side $PQ$. Thus triangles $APQ,BPQ$ are congruent by SSS, giving $\\angle APM=\\angle MPB$. Now triangles $APM,BPM$ are congruent by SAS: $PA=PB$, $PM$ is common, and the included angles are equal. Consequently $AM=BM$ and $\\angle AMP=\\angle PMB$. These last angles form a linear pair, so both are right. Hence $M$ is the midpoint and $PQ$ is perpendicular.

For any point $X$ on this perpendicular line with $X\\ne M$, the right triangles $AMX,BMX$ are congruent by SAS, using $AM=BM$, common $MX$, and included right angles. Thus $XA=XB$; the equality is also immediate at $M$.

Conversely, suppose $XA=XB$. If $X$ lies on $AB$, equality and segment order force $X=M$. Otherwise triangles $AMX,BMX$ are congruent by SSS, giving equal adjacent angles at $M$ and hence right angles there. Thus $MX$ is the perpendicular line through $M$, namely $PQ$. This proves both directions of the locus statement. ∎

A locus theorem must include the converse. Showing that constructed points have equal distances would establish only one containment; it would not show that every equidistant point lies on the constructed line.

**Example 2.6 (Locating an equally distant site).** Two fixed sites $A,B$ are $12$ metres apart. A new site must be equally distant from both. Their perpendicular bisector describes all possible sites, not one uniquely determined site. Its intersection with the segment is the midpoint, six metres from each endpoint, but points off the segment can also satisfy the equality.

If the new site must additionally lie on a given line $\\ell$, the answer is the intersection of $\\ell$ with this locus. Depending on $\\ell$, there may be one answer, no answer when the lines are distinct and parallel, or infinitely many when $\\ell$ is the locus itself. Adding a constraint changes the existence and uniqueness question.

## Perpendiculars through specified points

Given a point $P$ on a line $\\ell$, draw a circle centred at $P$ to obtain points $A,B$ on $\\ell$. They are equally distant from $P$ on opposite sides, so $P$ is their midpoint. Construct the perpendicular bisector of $AB$. It is therefore the perpendicular to $\\ell$ through $P$.

For a point $P$ off $\\ell$, choose a circle centred at $P$ that cuts $\\ell$ in two distinct points $A,B$. The equality $PA=PB$ places $P$ on their perpendicular bisector. Constructing that bisector therefore gives the perpendicular from $P$ to $\\ell$. Its intersection with $\\ell$ is the perpendicular foot.

The instruction about two intersections must be respected. A circle tangent to $\\ell$ does not provide two distinct points. One guaranteed choice is to select any known point $A$ on $\\ell$ and use radius $2PA$, formed by copying the segment twice along a ray. The distance from $P$ to $\\ell$ is at most $PA$, so this larger circle crosses the line in two points. A construction may contain a deliberate auxiliary choice without the final perpendicular depending on that choice.

## Bisecting and copying angles

**Construction 2.7 (An internal angle bisector).** Let $AOB$ be an angle strictly between zero and $180^\\circ$. A circle centred at $O$ meets its two boundary rays at $S,T$, so $OS=OT=r>0$. Draw circles centred at $S,T$ with radius $r$. They meet at $O$ and at a second point $P$ inside the angle. Draw ray $OP$.

*Proof.* The nondegenerate angle gives distinct $S,T$ with $0<ST<2r$, so the equal circles have two intersections. One is $O$; the other is on the interior side between the rays. We have $OS=OT$, $SP=TP$, and common $OP$. SSS congruence of $OSP,OTP$ gives $\\angle SOP=\\angle POT$. Thus $OP$ is the internal bisector. The restrictions exclude coincident circles at zero angle and tangency at a straight angle. ∎

To copy an angle at a new vertex, first draw the same-radius arc across both source rays and the new starting ray. The distance between the two source arc intersections is a chord. Transfer that chord length to locate a point on the new arc on the chosen side. The source and new triangles have two radii and the chord equal, so SSS proves the copied angle equal to the source angle.

**Example 2.8 (Constructing a quarter of a straight angle).** A perpendicular through a point on a line gives a right angle of $90^\\circ$. Apply the internal angle-bisector construction to obtain $45^\\circ$. Bisect again to obtain $22.5^\\circ$.

Each equality is exact in the ideal model because each step halves an already established angle. A protractor is unnecessary. This procedure demonstrates some constructible angles; it does not prove that every requested angle can be constructed or that every angle can be trisected.

## From instructions to a proof

A clear construction record should name the given data, list permitted operations in order, specify the selected intersections, and prove the desired conclusion. It should also state whether several valid choices are reflected copies, genuinely different answers, or irrelevant auxiliary choices leading to the same result.

A paper fold sending $A$ to $B$ has the same perpendicular-bisector locus as Construction 2.4. The retained [Fold, Reflect, Prove](../../courses/origami-construction-geometry.md) develops that interpretation. Physical folding and ideal straightedge-and-compass construction are different tool systems, however. Some more general origami constraints can solve problems outside the classical tool system; a fold is not automatically an allowed compass operation.

Construction error should be discussed separately. Finite pencil width can make two intended intersections appear to merge, and a very narrow angle can amplify placement uncertainty. Neither observation changes the exact proof. Conversely, a visually plausible result does not repair a missing existence argument. The mathematical record and the physical realisation answer related but distinct questions.

## Exercises

### Exercise 2.1
<a id="ruler-compass-constructions-ex-1"></a>

Construct an equilateral triangle on a nonzero segment $AB$ and prove that all three sides are equal.

<details><summary>Hint 1</summary>

Use one circle at each endpoint.

</details>
<details><summary>Hint 2</summary>

Each selected intersection belongs to both circles.

</details>
<details><summary>Solution</summary>

Draw circles centred at $A,B$ with radius $AB$ and choose an intersection $C$. Membership in the first gives $AC=AB$ and in the second gives $BC=AB$. Therefore all three sides agree. The equal-circle intersection condition holds because the centre distance is $AB$, strictly between zero and $2AB$. Either reflected intersection is valid unless a side of the base is specified.

</details>

### Exercise 2.2
<a id="ruler-compass-constructions-ex-2"></a>

Why does the equilateral-triangle procedure fail as stated if $A=B$?

<details><summary>Hint 1</summary>

Check the radius and whether two distinct centres exist.

</details>
<details><summary>Hint 2</summary>

A nondegenerate triangle needs three noncollinear vertices.

</details>
<details><summary>Solution</summary>

The proposed radius becomes zero and the two centres coincide. There are no two distinct circle intersections producing an equilateral triangle of positive side length. The given segment must be nonzero. This is an input restriction, not a problem caused by imperfect drawing accuracy.

</details>

### Exercise 2.3
<a id="ruler-compass-constructions-ex-3"></a>

Explain why two circles centred at $A,B$ with the same radius $r<AB/2$ cannot supply a perpendicular-bisector construction. What changes at $r=AB/2$?

<details><summary>Hint 1</summary>

Compare the centre distance with the sum of radii.

</details>
<details><summary>Hint 2</summary>

Two distinct intersection points are needed to draw their joining line.

</details>
<details><summary>Solution</summary>

For $r<AB/2$, the centre distance exceeds $2r$, so the circles do not meet. At equality they are tangent at the midpoint and provide only one intersection. One point cannot specify the intended bisector line by itself. Choosing $r>AB/2$ gives two intersections and permits the usual construction.

</details>

### Exercise 2.4
<a id="ruler-compass-constructions-ex-4"></a>

Prove that every point on a segment's perpendicular bisector is equally distant from its endpoints. Include the midpoint itself.

<details><summary>Hint 1</summary>

Join the point to both endpoints.

</details>
<details><summary>Hint 2</summary>

Use two right triangles with equal half-base lengths and a common leg.

</details>
<details><summary>Solution</summary>

Let $M$ be the midpoint of $AB$. For $X$ on the perpendicular bisector and $X\\ne M$, triangles $AMX,BMX$ have $AM=BM$, common $MX$, and included right angles. SAS gives $XA=XB$. At $X=M$ the equality is simply the midpoint condition. Thus the entire perpendicular bisector has the required equal-distance property.

</details>

### Exercise 2.5
<a id="ruler-compass-constructions-ex-5"></a>

A point $X$ is equally distant from distinct $A,B$. Explain why showing only that constructed bisector points are equidistant is not enough to locate $X$.

<details><summary>Hint 1</summary>

A locus statement has two directions.

</details>
<details><summary>Hint 2</summary>

The needed implication starts from the equality, not from membership in the line.

</details>
<details><summary>Solution</summary>

The forward result says that points on the bisector satisfy $XA=XB$. To locate an arbitrary equidistant point, we need the converse: the equality forces $X$ onto the bisector. The SSS argument using the midpoint proves that converse. Without it, another set of equidistant points outside the line would not yet have been ruled out by the argument.

</details>

### Exercise 2.6
<a id="ruler-compass-constructions-ex-6"></a>

Describe a perpendicular through a specified point $P$ on a line, and justify why it passes through $P$.

<details><summary>Hint 1</summary>

Create two points on the line equidistant from $P$.

</details>
<details><summary>Hint 2</summary>

Then bisect the segment joining those points.

</details>
<details><summary>Solution</summary>

Draw a positive-radius circle centred at $P$ meeting the line at $A,B$. These intersections lie on opposite sides of $P$ with $PA=PB$, so $P$ is the midpoint of $AB$. Construct its perpendicular bisector. By the proved construction theorem it passes through that midpoint, hence through $P$, and is perpendicular to the original line.

</details>

### Exercise 2.7
<a id="ruler-compass-constructions-ex-7"></a>

A circle centred at a point $P$ off a line meets the line at distinct $A,B$. Why does the perpendicular bisector of $AB$ pass through $P$?

<details><summary>Hint 1</summary>

Compare the distances $PA,PB$.

</details>
<details><summary>Hint 2</summary>

Use the converse part of the locus theorem.

</details>
<details><summary>Solution</summary>

Both are radii of the same circle, so $PA=PB$. The full locus theorem therefore puts $P$ on the perpendicular bisector of $AB$. Since $A,B$ lie on the given line, that bisector is perpendicular to it. Its intersection with the line is the foot from $P$. Distinctness of the intersections is required to define the segment and its bisector.

</details>

### Exercise 2.8
<a id="ruler-compass-constructions-ex-8"></a>

An angle of $124^\\circ$ is bisected twice. Find the final angle and explain why using a compass rather than a protractor does not make the answer approximate in the ideal model.

<details><summary>Hint 1</summary>

Each construction halves the current angle.

</details>
<details><summary>Hint 2</summary>

The proof comes from congruent triangles.

</details>
<details><summary>Solution</summary>

The first bisector gives $62^\\circ$ and the second gives $31^\\circ$. In the ideal model, equal radii and a shared side establish SSS congruence, so each split is exactly equal. A physical construction has placement error, but that is distinct from the exact geometric relation specified by the construction.

</details>

### Exercise 2.9
<a id="ruler-compass-constructions-ex-9"></a>

How many possible sites can be equidistant from $A,B$ and also lie on a given line $\\ell$? Describe all possibilities.

<details><summary>Hint 1</summary>

Intersect $\\ell$ with the perpendicular-bisector locus.

</details>
<details><summary>Hint 2</summary>

Two lines may meet, be distinct parallel lines, or coincide.

</details>
<details><summary>Solution</summary>

If $\\ell$ meets the bisector in one point, there is one site. If it is distinct and parallel to the bisector, there is none. If it coincides with the bisector, every point on it is a site and there are infinitely many. Equal-distance constraints alone specify a line, so uniqueness needs an additional independent condition.

</details>

### Exercise 2.10
<a id="ruler-compass-constructions-ex-10"></a>

A construction says, “Draw two circles and take their intersection.” Name three kinds of missing information that could make this instruction ambiguous or impossible.

<details><summary>Hint 1</summary>

The circles themselves need specified centres and radii.

</details>
<details><summary>Hint 2</summary>

Even distinct circles need not have exactly one common point.

</details>
<details><summary>Solution</summary>

The centres and positive radii must be specified; the relative sizes and centre distance must ensure intersection; and if two intersections occur, the intended one may need a side or position condition. Coincident circles instead give infinitely many common points, while separated circles give none. A complete construction must state these choices and exceptional cases rather than relying on a suggestive picture.

</details>

## Sources

The exposition and exercises are original, seeded by module 8 of [the retained geometry course](../../courses/euclidean-trigonometry-standard.md) and [Fold, Reflect, Prove](../../courses/origami-construction-geometry.md). Classical constructions appear in Euclid, [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html), especially propositions 1, 9, 10, 11 and 12, David Joyce's online edition, consulted 13 November 2026. The source courses remain separate readings.

## Summary

A construction specifies ideal operations, not a measured approximation. Circle membership gives exact equal lengths; triangle congruence then justifies equilateral triangles, perpendicular bisectors, perpendiculars and angle bisectors. The perpendicular-bisector locus needs both directions, and intersection choices need existence and multiplicity checks. Physical error and ideal correctness are different questions. The next chapter develops the triangle congruence rules used in these justifications and explains which collections of triangle data are sufficient.

`;export{e as default};