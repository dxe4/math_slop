var e=`---
id: course-origami-construction-geometry
title: "Fold, Reflect, Prove: An Origami Construction Course"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Fold, Reflect, Prove: An Origami Construction Course

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-origami-construction-geometry/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A paper fold is a physical action and a geometric transformation. When a point is folded onto another point, the crease is not guessed: it is forced to be the perpendicular bisector of the segment joining them. When one line lands on another, the crease carries an angle relation. Origami therefore turns hands-on play into exact Euclidean constructions.

This course needs a square sheet, a straightedge for checking but not constructing, and basic ideas of point, line, distance, angle, and reflection. Every construction includes a text description so it can also be followed with coordinates or tactile markers.

## Entry diagnostic and studio route

Try these before folding:

1. Find the midpoint of $(2,1)$ and $(8,5)$.
2. Describe the set of points equidistant from two distinct points $A,B$.
3. State one property preserved by a reflection and one property it reverses.
4. Explain why a measured angle of $59.8$ degrees cannot prove that an ideal
   construction makes a $60$ degree angle.

The answers are $(5,3)$; the perpendicular bisector of $AB$; distance and
angle are preserved while orientation is reversed; and measurement has finite
precision while the theorem is exact. If Question 2 is unfamiliar, work
Sections 1–2 with coordinates before attempting the constructions.

Use four studio sessions:

| Session | Sections | Product |
| --- | --- | --- |
| 1. A fold as a map | 1–2 and Exercise 1 | A crease equation plus a proof that it is the required locus |
| 2. Construct by invariants | 3–5 and Exercises 2, 5 | A quarter-grid and equilateral-triangle construction log |
| 3. Compose transformations | 6–7 and Exercises 3–4 | A coordinate trace verifying a rotation or translation |
| 4. Audit a physical model | 8–9 and the capstone | An exact proof beside a measurement and error record |

For a longer proof route, read
[the layers of a geometric argument](#/item/book-geometry-proof-reference?chapter=the-layers-of-a-geometric-argument)
before Session 2 and
[transformation geometries](#/item/book-geometry-proof-reference?chapter=chapter-12)
before Session 3.

## 1. Ideal paper versus physical paper

Our mathematical model treats paper as a perfect plane region and a crease as a straight line. Folding reflects one side of the plane across that line. Real paper has thickness, creases have width, corners fray, and layers slip. Those are measurement errors in a physical realization, not counterexamples to the ideal theorem.

A **reflection across line** $\\ell$ maps each point $P$ to a point $P'$ such that:

1. segment $PP'$ is perpendicular to $\\ell$;
2. the midpoint of $PP'$ lies on $\\ell$.

Points on the crease remain fixed. Distance and angle are preserved, so reflection is an isometry. Orientation reverses: clockwise order becomes anticlockwise.

## 2. Fold one point onto another

Mark distinct points $A$ and $B$. Fold so that $A$ lands exactly on $B$, then unfold. Call the crease $\\ell$.

### Claim

$\\ell$ is the perpendicular bisector of $AB$.

### Proof

Reflection across the crease maps $A$ to $B$. By the definition of reflection, the crease passes through the midpoint of $AB$ and is perpendicular to $AB$. Equivalently, every point $X$ on the crease is fixed, and reflection preserves distance, so $XA=XB$; the locus of points equidistant from $A$ and $B$ is their perpendicular bisector.

The last locus statement is a biconditional, and both directions matter.
Certainly reflection shows that a crease point has $XA=XB$. Conversely, if
$XA=XB$, then after squaring and subtracting,

$$
\\lVert X-A\\rVert^2-\\lVert X-B\\rVert^2
=2(X-M)\\mathbin{\\cdot}(B-A)=0,
$$

where $M=(A+B)/2$. Thus $X-M$ is perpendicular to $B-A$, so $X$ lies on the
line through $M$ perpendicular to $AB$. This proves that the construction
finds the entire locus rather than merely some equidistant points.

### Coordinate check

If $A=(a_{1},a_{2})$ and $B=(b_{1},b_{2})$, their midpoint is

$M=((a_{1}+b_{1})/2,(a_{2}+b_{2})/2)$.

A point $X=(x,y)$ lies on the crease exactly when

$(X-M)\\cdot (B-A)=0$.

Expanded, this is

$(b_{1}-a_{1})(x-M_{1})+(b_{2}-a_{2})(y-M_{2})=0$.

The vector $B-A$ is normal to the crease, which proves perpendicularity algebraically.

\`\`\`js
function foldPointToPoint(A, B) {
  const midpoint = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  const normal = [B[0] - A[0], B[1] - A[1]];
  return { midpoint, normal }; // line: normal dot (X - midpoint) = 0
}
\`\`\`

The computation takes constant time. It fails for $A=B$ because infinitely many creases keep that point fixed; distinctness is a necessary hypothesis.

## 3. Construct halves, quarters, and a coordinate grid

Fold the left edge onto the right edge. The crease is the vertical midline. Fold bottom onto top for the horizontal midline. Their intersection is the square’s centre.

Now fold each outer edge to its parallel midline. The resulting creases divide width and height into quarters. Repeating creates dyadic fractions: halves, quarters, eighths, and so on.

Why? Each fold takes a midpoint between two parallel target lines. If a coordinate interval is $[0,1]$, the first crease is at $1/2$; folding 0 to $1/2$ creates $1/4$; folding $1/2$ to 1 creates $3/4$. Inductively, after enough midpoint constructions, all positions $m/2^k$ can be marked.

This method cannot produce exactly $1/3$ by repeated halving alone. A decimal approximation may look close, but its construction history matters.

## 4. Diagonals and angle bisectors

Fold a square corner onto the opposite corner. The crease is the other diagonal: the perpendicular bisector of the diagonal joining the two corners. In a square, both diagonals meet at their common midpoint and are perpendicular.

To bisect an angle formed by two intersecting lines, fold one ray onto the other while keeping their vertex fixed. The crease is an angle bisector because reflection maps one boundary ray to the other and preserves angle. There are generally two perpendicular bisectors of the pair of complete lines: one bisects the smaller angle and one the larger.

A common mistake is to infer equal angles from an imprecise sketch. The proof relies on the reflection mapping, not apparent visual balance.

## 5. Build an equilateral triangle in a square

Let a square have lower corners $A$ and $B$. We want a point $C$ satisfying $CA=CB=AB$.

1. Fold $A$ onto $B$ and unfold. This constructs the perpendicular bisector $m$ of $AB$.
2. Make a new crease **through $A$** that folds $B$ onto $m$. Choose the landing point on the desired side of the base and call it $C$. (The reflected point is visible where $B$ touches $m$.)
3. Reflection across the new crease fixes $A$ and sends $B$ to $C$, so it preserves the distance from $A$: $AB=AC$. Since $C$ lies on the perpendicular bisector $m$, also $CA=CB$. Therefore all three sides are equal.

The construction can have mirror-image choices on opposite sides of the base; a finite sheet may physically admit only one. Stating “on the desired side” selects the intended solution rather than pretending uniqueness.

In coordinate geometry, with $A=(0,0)$ and $B=(1,0)$, the perpendicular bisector forces $C=(1/2,y)$. Requiring $CA=1$ gives

$(1/2)^2+y^2=1$, so $y=\\sqrt{3}/2$ for the point above the base.

All three sides are equal, hence all three angles are 60 degrees. The coordinate calculation is also a diagnostic: if a physical fold yields height far from $0.866$ times the side length, accumulated error is visible.

## 6. Composition creates rotations and translations

One reflection reverses orientation. Two reflections have richer effects:

- reflecting across two intersecting lines produces a rotation about their intersection by twice the angle between the lines;
- reflecting across two parallel lines produces a translation perpendicular to them by twice their separation.

### Why the angle doubles

Take a ray making angle $\\alpha$ with the first mirror. Reflection reverses its signed angle relative to that mirror, changing direction by $2\\alpha$. A second mirror contributes the remaining signed change. Tracking directions shows the total rotation is twice the directed angle from the first crease to the second.

Fold along two creases meeting at 30 degrees. Mark an off-centre point and perform the two reflections conceptually. Its image is rotated 60 degrees about the intersection. Distance to the intersection is invariant.

This connects paper folds to transformation groups: composing legal moves creates new symmetries, and invariants such as distance organize the possibilities.

## 7. Reflect a coordinate point across a line

Let a line be specified by a point $M$ and nonzero normal vector $n$. The signed normal coordinate of $P$ is

$d = ((P-M)\\cdot n)/(n\\cdot n)$.

Its reflection is

$P' = P - 2d n$.

\`\`\`js
function reflect(P, M, n) {
  const nx = n[0], ny = n[1];
  const denominator = nx * nx + ny * ny;
  if (denominator === 0) throw new Error("normal must be nonzero");
  const d = ((P[0] - M[0]) * nx + (P[1] - M[1]) * ny) / denominator;
  return [P[0] - 2 * d * nx, P[1] - 2 * d * ny];
}
\`\`\`

Correctness follows by decomposing $P-M$ into a component parallel to the crease and a component normal to it. Reflection leaves the parallel component and negates the normal one. Applying the function twice returns the original point, an excellent program invariant.

Floating-point results will usually agree only within a tolerance. Testing \`reflect(reflect(P)) === P\` with exact array equality is too strict for noninteger data; bound coordinate error instead.

## 8. Beyond straightedge and compass

Idealized origami axioms allow folds constrained by points and lines. Some folds correspond to solving cubic equations, so ideal origami can perform constructions beyond classical unmarked straightedge and compass, including certain angle trisections. This is not magic: a fold position satisfying simultaneous incidence and tangency conditions is encoded by polynomial equations of higher degree.

We do not prove the full origami-constructibility classification here. The honest continuation requires algebra, conic tangency, and careful specification of allowed fold axioms. A physical trial that seems to trisect an angle is evidence about accuracy, not a proof of exact construction.

## 9. Studio investigations

### Investigation A: error growth

Make repeated midpoint folds to mark eighths. Measure each segment. Does error drift consistently or alternate? State the ruler precision and distinguish systematic misalignment from random reading error.

### Investigation B: involution test

Choose a crease and mark a point. Reflect its coordinates by the program twice. The final point should match the original within rounding error. Alter the formula by removing the factor 2 and watch the invariant fail.

### Investigation C: composition

Choose two coordinate lines meeting at a known angle. Reflect several points across both. Check that all distances from the intersection remain fixed and that oriented angles change by the same amount.

### Investigation D: ambiguous constraints

Ask for “a crease through point P.” Infinitely many exist. Add the demand that it send $A$ to $B$. Determine when constraints define zero, one, or several folds. Construction problems need existence and uniqueness questions, not only execution.

### A measurement protocol

For any investigation, record the sheet size, instrument resolution, intended
ideal construction, measured quantities, and residual. For the equilateral
triangle with base length $s$, useful residuals are

$$
|CA-s|,\\qquad |CB-s|,\\qquad |CA-CB|.
$$

Report absolute residuals in the same unit as $s$ and relative residuals after
dividing by $s$. Repeating a fold does not reveal the exact mathematical
error, but it helps separate a consistent bias from variable handling error.
Do not average mirror-image choices as though they were repeated measurements
of one construction.

## Common errors

- Treating the crease as the segment $AB$ instead of its perpendicular bisector.
- Assuming a fold exists uniquely without checking degenerate cases.
- Measuring a diagram to prove an exact equality.
- Forgetting that two complete lines have two angle bisectors.
- Confusing a reflection’s fixed line with its direction of motion.
- Ignoring paper thickness when comparing an ideal theorem with a physical model.
- Using a zero normal vector in coordinate code.

## Exercises with worked answers

### 1. Perpendicular bisector equation

Find the crease folding $A=(1,2)$ to $B=(5,4)$.

**Answer.** Midpoint $M=(3,3)$ and normal $B-A=(4,2)$. The line is $4(x-3)+2(y-3)=0$, or $2x+y=9$.

### 2. Verify equal distance

Show point $(2,5)$ lies on that crease and is equidistant from $A$ and $B$.

**Answer.** $2\\cdot 2+5=9$, so it lies on the line. Squared distances are $(2-1)^2+(5-2)^2=10$ and $(2-5)^2+(5-4)^2=10$.

### 3. Reflect a point

Reflect $(3,4)$ across the x-axis.

**Answer.** Take $M=(0,0)$ and normal $n=(0,1)$. Then $d=4$, so $P'=(3,4)-8(0,1)=(3,-4)$.

### 4. Two parallel folds

Reflect a point across $x=0$, then across $x=2$. What is the net transformation?

**Answer.** $(x,y)$ first becomes $(-x,y)$, then $(4+x,y)$. The result is translation four units right, twice the distance between the mirror lines.

### 5. Dyadic limitation

Why can repeated midpoint operations starting from 0 and 1 never create exactly $1/3$?

**Answer.** Every new point is an average of already constructed dyadic rationals and therefore still has denominator a power of 2 after simplification. No power of 2 is divisible by 3, so $1/3$ is not dyadic.

### 6. Degenerate fold

What happens when asked to fold a point $A$ onto itself?

**Answer.** Any crease through $A$ fixes it, so the solution is not unique. The perpendicular-bisector formula has zero normal vector and correctly signals degeneration.

## Capstone: construction, proof, and audit

Design a construction using at least three folds, with one fold defined by a
point-to-point reflection. Submit:

1. a numbered physical procedure that does not rely on an unlabeled diagram;
2. a coordinate model of every marked point and crease;
3. an existence argument and a statement about uniqueness or multiplicity;
4. a proof of the target property using reflection, congruence, or a locus
   biconditional;
5. one invariant checked by computation;
6. three physical trials with the measurement protocol above;
7. one degenerate or impossible input and an explanation of how the procedure
   detects it.

Use this rubric: 4 points for a complete construction, 6 for the proof, 4 for
the coordinate verification, 3 for the error audit, and 3 for boundary cases.
A polished object with no proof earns at most the construction points; an
exact proof needs no claim that the paper trial was exact.

## Paths onward

Euclidean geometry formalizes construction proofs. Coordinate geometry translates folds into equations. Transformations and symmetry study reflection compositions. Similarity and congruence establish which lengths and angles are preserved. Algebra and polynomial equations explain the greater construction power of more constrained origami folds.

Paper makes the ideas tangible, but proof makes them transferable: describe the fold as a transformation, identify its invariant, and check existence, uniqueness, and physical error separately.
`;export{e as default};