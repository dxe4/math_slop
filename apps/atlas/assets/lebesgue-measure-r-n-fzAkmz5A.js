var e=`---
parent_id: book-measure-and-integration
chapter_id: lebesgue-measure-r-n
title: "Lebesgue Measure on Euclidean Space"
level: graduate
license: CC BY-SA 4.0
---

# Lebesgue Measure on Euclidean Space

Length on the line extends to volume in Euclidean space. The construction must preserve ordinary box volumes, contain the Borel sets, include every subset of a null set and permit approximation by open and compact sets. Those requirements also determine how volume changes under a linear transformation. We prove them from box coverings and the [Carathéodory theorem](outer-measure-and-measurability.md), before relying on a product-integral theorem.

Fix d≥1. An open box is a product of d bounded open intervals, with volume the product of their lengths. Define md*(E) as the infimum of total volumes of countable open-box covers of E. The empty set has outer size zero, and the standard cover argument proves monotonicity and countable subadditivity. The infimum can be infinite or unattained. Lebesgue measurable sets are the Carathéodory splitting sets for this outer measure, and md is its complete measure restriction.

The preparation is compactness of closed bounded sets, countable bases of rational boxes, and the opening measure consequences. The later product chapter proves Fubini–Tonelli; no use of that theorem is hidden in the elementary box-volume construction here. In dimension one the construction agrees with the preceding length measure.

## 1. Box volume is really the covering infimum

Let Q be a closed bounded box. Enlarging its coordinate intervals slightly gives an open cover of volume tending to vol(Q), so md*(Q)≤vol(Q). For the reverse inequality, any open-box cover of Q has a finite subcover by compactness. A finite family of boxes covering Q has total volume at least vol(Q).

Here is the finite geometric proof. Put every relevant coordinate endpoint into a finite grid, including the endpoints of Q and the covering boxes. Within a large enclosing box, each open grid cell is either wholly inside or wholly outside each covering box. Assign every cell inside Q to one covering box containing it. The sum of assigned cell volumes is vol(Q), while each covering box's assigned cells have total volume at most its own volume by finite products and distributivity. Summing gives the inequality. Grid boundaries carry no volume in this finite combinatorial calculation; their cells have zero thickness in at least one coordinate.

Thus md*(Q)=vol(Q). A bounded face has outer measure zero: cover it by a box of arbitrarily small thickness in its normal coordinate, with fixed enlarged lengths in the others. Finite unions of faces are null. Consequently open, closed and half-open boxes with the same endpoints have the same outer size. Degenerate boxes have zero size. This establishes the geometric normalization, rather than assuming countable box additivity before the measure exists.

## 2. Half-spaces, Borel sets and completion

A coordinate half-space H={xj<a} is measurable. For a test set A of finite outer size, choose an open-box cover with total volume within ε of md*(A). Split every covering box at the plane xj=a. The two resulting box pieces have volumes adding to the original, regardless of endpoint conventions. Their outer sizes equal those volumes by the first section. Subadditivity on the pieces yields md*(A intersect H)+md*(A minus H)≤md*(A)+ε. Let ε decrease to zero; the opposite inequality is always outer subadditivity. For infinite outer size the required lower inequality is automatic.

The proved general Carathéodory theorem makes the splitting sets a sigma algebra. Coordinate half-spaces generate boxes, and every open set is a countable union of rational boxes contained in it. Thus all open and Borel sets are measurable. Every subset of an outer-null set is measurable and null by completeness. Countable unions of null sets remain null.

**Worked example 3.1: a dense null set.** Every point has outer measure zero by a shrinking cube cover. Hence Q^d is null, being countable. It is dense, since each open box contains a rational coordinate tuple. Its complement has full measure in every finite box despite containing no open box disjoint from that dense set. Topological density and measured volume answer different questions.

Translations and uniform dilations preserve the cover geometry. Translating a cover leaves each volume unchanged, giving md*(E+t)=md*(E). Dilating by nonzero r multiplies each volume by |r|^d, and the inverse dilation gives equality. Applying these bijections to the splitting criterion proves that they preserve measurability and yield the same equalities for md. An anisotropic or rotated transformation requires more than this immediate uniform-scaling argument and will be proved below.

## 3. Open and compact approximation

For any E, its outer size is the infimum of md(O) over open supersets O. A near-optimal box cover has open union O containing E and measure no greater than the cover total. The reverse inequality is monotonicity. The infinite-size case is immediate as both sides are infinite.

If E is measurable with finite measure, choose open On containing it and satisfying md(On minus E)<2^−n. Then G=intersection On is Borel, contains E and differs from it by a null set. A null set itself lies inside a Borel null set: choose open covers of size below2^−n and intersect them. Removing such a Borel null envelope from G gives a Borel subset B of E with E minus B null. Thus E differs from a Borel set by a subset of a Borel null set. Conversely every such set is measurable by completion.

For infinite E, intersect with an increasing sequence of finite cubes, perform the construction on each piece and take a countable union. This proves that Lebesgue measure is exactly the completion of its Borel restriction. It also explains why “Borel” and “Lebesgue measurable” should not be used interchangeably: completion deliberately adds subsets that may not be Borel.

There is inner approximation too. For finite E and ε>0, choose a large closed cube K with md(E minus K)<ε, using continuity from below. Cover K minus E by an open O with excess measure below ε. The compact set F=K minus O lies inside E. The part E minus F is contained in E minus K together with O intersect E intersect K, whose measure is below2ε. Therefore md(E) is the supremum of md(F) over compact F contained in E. For infinite E, finite-cube pieces have arbitrarily large measure, and the same approximation yields compact subsets of arbitrarily large measure.

These regularity proofs use measurable finite differences, compact cubes and the actual outer-cover definition. They are not consequences of Borel generation alone.

## 4. Uniqueness of translation-invariant volume

Let ν be a translation-invariant Borel measure finite on compact sets, and set c=ν([0,1)^d). Partition that cube into n^d translated half-open cubes of side1/n. Finite additivity and invariance give each mass c/n^d. Rational-side rectangles are unions of those grid cells, so their masses are c times their volumes. Increasing rational-side approximations and continuity from below give the same formula for arbitrary half-open boxes, and translation handles their positions.

Equality on boxes determines the Borel measure. For completeness, the needed pi–lambda argument is elementary. A pi system is a collection closed under finite intersections. A Dynkin class contains the whole space, relative complements of nested members and countable disjoint unions. The smallest Dynkin class L containing a pi system is closed under intersections: first fix A in the pi system and observe that {B:A intersect B belongs to L} is a Dynkin class containing the pi system; then fix B in L and repeat in the other variable. Thus L is intersection-stable, and with its Dynkin properties it is a sigma algebra. It therefore contains the generated sigma algebra.

Restrict ν and c md to a finite cube. Their equality class is Dynkin because their total masses are equal and finite, so differences involve no infinity subtraction; it contains the generating box pi system. They agree on all Borel subsets there. Exhausting Euclidean space by cubes proves ν=c md on every Borel set. When c=0, the conclusion means the zero measure, proved by countable cube exhaustion; it is not an ordinary product0·infinity. The theorem requires the finite-on-compact hypothesis used in the argument.

## 5. Rotations and the determinant factor

For an orthogonal map R, define ν(E)=md(RE) on Borel sets. It is a translation-invariant Borel measure finite on compact sets, hence c md by uniqueness. The unit ball is invariant under R and has positive finite measure, since it contains and is contained in nondegenerate boxes. Comparing its measures forces c=1. Thus rotations and reflections preserve Borel volume. They preserve completed Lebesgue measurability too: images of Borel null envelopes remain Borel null, so subsets of them remain measurable.

For an invertible linear map A, the same uniqueness argument gives md(AE)=cA md(E). The constants multiply under composition. A positive diagonal map has constant equal to the product of its entries, by applying it to the unit box. Singular-value decomposition writes A as orthogonal maps surrounding such a diagonal map. Therefore cA=|det A|, proving

\\[
 m_d(AE+b)=|\\det A|m_d(E)
\\]

for every Lebesgue measurable E, with measurability of the image included. The linear-algebra decomposition is the named finite-dimensional input; no integration change-of-variables theorem was presumed in deriving this measure identity.

If A is singular, its image lies in a proper linear subspace. Rotate that subspace into a coordinate hyperplane, whose bounded pieces are null by thin-box covers. Its countable union is null, so every image subset is Lebesgue measurable and has measure zero. For an infinite-measure E, writing0 times infinity would obscure this separate conclusion; the singular case has been stated directly.

**Worked example 3.2: an ellipse.** A diagonal map with entries two and three sends the unit disk to an ellipse with semiaxes two and three. Its measure is six times the disk's measure, hence6π using the elementary Riemann disk area. Rotation does not change the result. The determinant accounts for area scaling, while orthogonal changes account only for orientation.

## 6. Graphs and boundaries can be null

Let g be continuous on a compact box in R^{d−1}. Its graph is null in R^d. Partition the base into sufficiently small boxes. Uniform continuity makes g's oscillation on each cell at most ω, tending to zero with the mesh. Cover that graph portion by a vertical box of height at most ω plus an arbitrarily small enlargement. Summing the box volumes gives at most the base volume times that height, apart from a controllably small endpoint enlargement. Let the mesh and enlargement decrease to zero. This proves nullity without Fubini.

In particular coordinate planes and continuous graph patches have zero volume. A sphere also has zero volume: it lies in the difference between open balls of radii R+ε and R−ε. Uniform scaling makes the measure of that shell at most ωd((R+ε)^d−(R−ε)^d), tending to zero, where ωd is unit-ball volume. This proof does not assume the sphere null while computing the shell; the two open balls are already measurable.

A bounded set E with null boundary is measurable because it differs from its open interior only inside that boundary. Its indicator is Riemann integrable over an enclosing box and that integral is md(E). Cover the compact boundary by finitely many open boxes of total volume below ε. A sufficiently fine grid has every cell meeting the boundary contained in that open neighborhood, by positive distance from the compact boundary to its complement. Cells not meeting the boundary have constant indicator. Therefore upper minus lower Darboux sums are at most ε, since only boundary cells contribute. Inner and outer grid unions bound the measurable volume by those same step sums, proving agreement. The classical Jordan boundary criterion has emerged as a special case of measure regularity.

## 7. Positive volume need not contain an open set

**Worked example 3.3: a fat Cantor slab.** Start with [0,1]. At stage n remove from each of the2^{n−1} surviving intervals an open middle interval of length4^−n. The removed total at stage n is \\(2^{-n-1}\\), so all removals total one half. Every stage is feasible: its remaining component lengths are \\(2^{-n}(1/2+2^{-n-1})\\), positive and tending to zero. The limiting closed set C has measure one half and no interval, hence empty interior.

In the unit d-cube, C times [0,1]^{d−1} is the complement of the corresponding disjoint removed slabs. Each slab is a box with measure its removed first-coordinate length, and countable additivity gives the remaining measure one half. Any open ball in that product would project to an interval in C, impossible. Thus a compact measurable set can have positive volume and empty interior. This calculation uses only box volumes and countable additivity; it does not import the later general product-measure theorem.

This example complements the dense null rational set. Neither density nor interior alone specifies measured size. Compactness gives useful approximation and finite covering properties, but does not force positive measure or a nonempty interior.

## 8. Lipschitz maps preserve null sets

Let T:R^d→R^d satisfy |T(x)−T(y)|≤L|x−y|. It sends every outer-null set to an outer-null set. First observe that null sets admit cube covers of arbitrarily small total cube volume. An open box can be covered by finitely many small grid cubes of total volume at most a dimensional constant times its box volume: choose the cube side much smaller than every box side, count at most the product of the side-length ratios plus two, and enlarge the finite cubes slightly to open ones. Apply that conversion to each box in an arbitrarily small null cover.

The image of a side-s cube has diameter at most Lsqrt d times s. It lies in an open axis box of side at most2Lsqrt d times s, after a harmless enlargement. Its outer volume is therefore at most (2Lsqrt d)^d s^d. Summing over a cube cover with arbitrarily small total volume proves nullity of the image. If L=0 the image is a single point, already known null.

The result also proves that Lipschitz images of Lebesgue measurable sets are Lebesgue measurable in this equal-dimensional setting. For a finite-measure E, inner regularity supplies compact sets Fj inside E with md(E minus Fj) tending to zero. Their union F is Borel and E minus F is null. Its image T(F) is a countable union of compact sets, hence Borel, while T(E minus F) is null by the proved estimate. Their union is measurable by completion. For infinite E use a countable bounded-cube decomposition and apply the same argument to each finite piece.

This is an image theorem under quantitative regularity, not a general claim that continuous images of arbitrary Borel sets are Borel. The compact decomposition and null-image control are the two reasons it works here. A continuous function without a Lipschitz bound can map a null Cantor set onto an interval, so continuity alone would not justify the same null conclusion.

Locally Lipschitz maps preserve null sets as well: choose a countable cover by neighborhoods on which a Lipschitz constant exists, apply the preceding estimate on each piece and take a countable union. Smooth coordinate changes on compactly contained coordinate neighborhoods provide this condition through bounded derivatives and the mean value estimate. This supplies a useful protection for null exceptional sets when changing coordinates, while the exact determinant identity remains the stronger statement for a linear transformation.

## Exercises

### MEASURE-EUCLID-E001 — Box volume
Find the measure of [−1,2] times (0,4) in the plane.
<details><summary>Hint 1</summary>Endpoint conventions do not change volume.</details>
<details><summary>Hint 2</summary>Multiply the two side lengths.</details>
<details><summary>Full solution</summary>The measure is3·4=12. The four bounding line segments have planar measure zero by thin-box covers, so open/closed choices do not alter it.</details>

### MEASURE-EUCLID-E002 — A countable lattice
Why is Z^d null despite being unbounded?
<details><summary>Hint 1</summary>Each point has measure zero.</details>
<details><summary>Hint 2</summary>There are countably many integer tuples.</details>
<details><summary>Full solution</summary>Countable subadditivity makes its outer measure at most the sum of countably many zeros, hence zero. Boundedness is not needed for that conclusion.</details>

### MEASURE-EUCLID-E003 — Uniform scaling
If a measurable subset of R³ has measure five, what is the measure of its dilation by minus two?
<details><summary>Hint 1</summary>Use the absolute scale raised to dimension three.</details>
<details><summary>Hint 2</summary>Reflection does not change measure.</details>
<details><summary>Full solution</summary>The factor is eight, so the image measure is40. The negative sign changes orientation, while the absolute determinant determines volume.</details>

### MEASURE-EUCLID-E004 — Shear
What does the map (x,y)↦(x+3y,y) do to measurable area?
<details><summary>Hint 1</summary>Its determinant is one.</details>
<details><summary>Hint 2</summary>It is invertible.</details>
<details><summary>Full solution</summary>It preserves Lebesgue area and measurability. It generally changes shape and angles, showing that area preservation is broader than orthogonal invariance.</details>

### MEASURE-EUCLID-E005 — Singular image
Explain why projection of all R² onto the x-axis has planar measure zero.
<details><summary>Hint 1</summary>The image is a coordinate hyperplane in its ambient plane.</details>
<details><summary>Hint 2</summary>Use countably many bounded thin-box covers.</details>
<details><summary>Full solution</summary>Each bounded segment is null and their countable union is the entire axis. The source has infinite area, so the conclusion is stated directly rather than as an undefined0-times-infinity arithmetic expression.</details>

### MEASURE-EUCLID-E006 — Graph nullity
Why is the graph of sinx on [0,2π] planar null?
<details><summary>Hint 1</summary>It is continuous on a compact interval.</details>
<details><summary>Hint 2</summary>Use uniform oscillation control on short subintervals.</details>
<details><summary>Full solution</summary>Partition the interval finely and cover each graph part by a thin rectangle whose height is its small oscillation plus enlargement. The total area tends to zero, proving the outer measure is zero without an iterated integral.</details>

### MEASURE-EUCLID-E007 — Compact approximation
If E has finite measure, what does inner regularity give for a prescribed ε>0?
<details><summary>Hint 1</summary>Choose a compact subset, not a compact superset.</details>
<details><summary>Hint 2</summary>Its omitted measure can be made small.</details>
<details><summary>Full solution</summary>There is compact F contained in E with md(E minus F)<ε. A bounded cube first controls the far part, and an open cover of its complement constructs the compact interior approximation.</details>

### MEASURE-EUCLID-E008 — Completion
How is a Lebesgue measurable set related to a Borel set?
<details><summary>Hint 1</summary>Use open supersets with shrinking excess.</details>
<details><summary>Hint 2</summary>Put the exceptional part in a Borel null envelope.</details>
<details><summary>Full solution</summary>It differs from a Borel set by a subset of a Borel null set. Conversely every such modification is measurable by completion. The exceptional subset need not itself be Borel.</details>

### MEASURE-EUCLID-E009 — Spherical boundary
Prove a sphere of positive radius has zero volume from ball scaling.
<details><summary>Hint 1</summary>Place it between radii R−ε and R+ε.</details>
<details><summary>Hint 2</summary>The shell volume bound tends to zero.</details>
<details><summary>Full solution</summary>Its outer size is at mostωd((R+ε)^d−(R−ε)^d). This tends to zero, so the sphere is null. Both bounding open balls are measurable before this argument.</details>

### MEASURE-EUCLID-E010 — Translation uniqueness
What normalization turns a locally finite translation-invariant Borel measure into ordinary Lebesgue measure?
<details><summary>Hint 1</summary>All such measures are constant multiples of md.</details>
<details><summary>Hint 2</summary>Evaluate a unit half-open cube.</details>
<details><summary>Full solution</summary>Requiring its measure to be one forces the multiplicative constant to one. Translation, rational grid partitions and the finite-measure uniqueness argument then determine every Borel value.</details>

### MEASURE-EUCLID-E011 — Riemann agreement
Why does a bounded set with null boundary have a Riemann-integrable indicator?
<details><summary>Hint 1</summary>Only grid cells touching the boundary can have oscillation one.</details>
<details><summary>Hint 2</summary>Cover that compact boundary by a small-volume open neighborhood.</details>
<details><summary>Full solution</summary>For a fine enough grid all boundary cells lie in that neighborhood, so upper minus lower sums have arbitrarily small total volume. Their common limit also traps the Lebesgue measure, proving the stated agreement.</details>

### MEASURE-EUCLID-E012 — Interior and volume
Give a compact subset of the unit cube with empty interior and measure one half.
<details><summary>Hint 1</summary>Use the fat Cantor construction in the first coordinate.</details>
<details><summary>Hint 2</summary>Take its slab product with the remaining intervals.</details>
<details><summary>Full solution</summary>C times[0,1]^{d−1} has the required measure by subtracting the disjoint removed boxes, whose total volume is one half. An interior ball would project to an interval in C, contradicting the shrinking component lengths.</details>

## Sources and scope

This original development follows the Folland/Stein–Shakarchi Euclidean-measure syllabus and the existing Quarto Lebesgue-measure reading as local lineage. Box normalization, regularity, translation uniqueness and affine scaling are proved before product integration. Singular transformations and completed measurability are treated explicitly. No general manifold volume or integration change-of-variables theorem is inferred without its own hypotheses.

## Summary

Box covers construct complete Euclidean volume with the expected normalization. Half-space splitting gives Borel measurability; open and compact approximation identify the completed Borel measure. Translation uniqueness and linear algebra produce orthogonal invariance and the determinant rule. Null graphs, boundary criteria and fat Cantor slabs connect volume to geometry while keeping density, interior and measured size distinct.
`;export{e as default};