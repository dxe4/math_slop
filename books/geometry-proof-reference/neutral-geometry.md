
# Neutral Geometry

## Learning purpose

Neutral geometry (also called absolute geometry) is the body of theorems provable without assuming any parallel postulate. This chapter identifies which classical Euclidean results survive, which fail, and where the proofs must change. The reader learns to recognize when a proof secretly invokes parallelism and how to repair or flag it.

## Axioms of neutral geometry

Neutral geometry consists of Hilbert's axioms of incidence, order, congruence, and continuity, but omits any axiom that would force a unique parallel through a point. Formally, the axioms are:

- Incidence axioms I1–I3 (as in the previous chapter);
- Order axioms (betweenness, line separation, Pasch's axiom);
- Congruence axioms (segment copying, angle copying, SAS);
- Continuity (Dedekind cuts or equivalent Archimedean and completeness principles).

No assumption is made about how many parallels exist through an external point.

## What still holds

### Triangle congruence

SAS, ASA, and SSS remain valid in neutral geometry because their proofs use only incidence, order, and congruence axioms. The standard SAS proof superimposes one triangle onto another by a rigid motion; the existence and uniqueness of such a motion depends on the congruence axioms, not on parallels.

**Theorem 5.1 (SAS).** Let $\triangle ABC$ and $\triangle DEF$ satisfy $AB = DE$, $AC = DF$, and $\angle BAC \cong \angle EDF$. Then $\triangle ABC \cong \triangle DEF$.

**Proof sketch.** Copy $\angle BAC$ to vertex $D$ so that ray $AB$ maps to ray $DE$. By segment congruence, $B$ maps to $E$. The copied angle places $C$ on the ray corresponding to $DF$, and $AC = DF$ places $C$ at $F$. Hence the triangles coincide.

### Isosceles triangle theorem

**Theorem 5.2.** In $\triangle ABC$, if $AB = AC$, then $\angle ABC \cong \angle ACB$.

**Proof (neutral).** Compare $\triangle ABC$ with $\triangle ACB$. The two copies of the equal sides $AB=AC$ exchange roles, and the included angle at $A$ is common. SAS gives $\triangle ABC\cong\triangle ACB$, so the corresponding base angles are congruent. This proof avoids the false assumption that an altitude foot must lie inside the opposite side; an obtuse Euclidean triangle already supplies a counterexample to that assumption.

### Exterior angle theorem

**Theorem 5.3.** An exterior angle of a triangle is greater than either remote interior angle.

**Proof sketch.** Let $\triangle ABC$ have exterior angle at $C$ formed by extending $BC$ through $C$ to $D$. Suppose for contradiction that $\angle ACD \leq \angle CAB$. Using angle copying and the crossbar theorem, one constructs a point on $AB$ or its extension that violates Pasch's axiom or the triangle inequality. The full proof uses only order and congruence axioms.

**Why this matters:** The exterior angle theorem implies that the sum of any two angles of a triangle is less than two right angles. In Euclidean geometry, the parallel postulate strengthens this to equality with two right angles for all three angles together. In neutral geometry, only the inequality is available.

## What fails or weakens

### Angle sum

In neutral geometry, the angle sum of a triangle is **at most** $180^{\circ}$ (or $\pi$ radians). Equality is equivalent to the Euclidean parallel postulate.

**Theorem 5.4 (Saccheri–Legendre).** In neutral geometry, the sum of the angles of any triangle is less than or equal to $\pi$.

**Proof sketch.** Suppose some triangle has angle sum $> \pi$. By repeatedly bisecting and constructing new triangles, one produces a triangle with angle sum $> \pi$ and one arbitrarily small angle. The exterior angle theorem then forces a contradiction. Hence no triangle can have angle sum $> \pi$.

**Boundary case:** In hyperbolic geometry, the angle sum is strictly $< \pi$ for every triangle. In Euclidean geometry, it is exactly $\pi$. The Saccheri–Legendre theorem is therefore sharp: it permits both possibilities.

### Rectangle existence

A **rectangle** is a quadrilateral with four right angles.

**Theorem 5.5.** In neutral geometry, the following are equivalent:

1. The Euclidean parallel postulate holds.
2. Some rectangle exists.
3. Every triangle has angle sum $\pi$.
4. Similar noncongruent triangles exist.

**Proof idea.** (2 $\Rightarrow$ 3) From one rectangle, construct larger and larger rectangles, then subdivide to show every right triangle has angle sum $\pi$, and hence every triangle does. (3 $\Rightarrow$ 1) If every triangle has angle sum $\pi$, the standard proof of the parallel postulate (construct a parallel via equal alternate interior angles) succeeds. The other equivalences are similar.

**Consequence:** In neutral geometry, we cannot assume rectangles exist. The proofs of many Euclidean theorems that rely on rectangle construction (e.g., some area formulas) must be replaced or omitted.

### Common error: smuggling parallels

A classic example is the "proof" that all triangles have angle sum $\pi$ by drawing a line through one vertex parallel to the opposite side. Neutral geometry can construct a nonintersecting line by copying an alternate angle and using the exterior-angle theorem, but it cannot prove that this parallel is unique. The angle-sum argument needs that uniqueness and is therefore invalid in the hyperbolic branch. Elliptic geometry is not a neutral model because its global incidence and order axioms differ.

## Saccheri and Lambert quadrilaterals

A **Saccheri quadrilateral** $ABCD$ has right angles at $A$ and $B$, with $AD = BC$ and $D,C$ on the same side of $AB$. A **Lambert quadrilateral** has three right angles.

In neutral geometry:

- The summit angles ($\angle D$ and $\angle C$ in the Saccheri quadrilateral) are congruent to each other.
- Each summit angle is right or acute; all Saccheri quadrilaterals in a given neutral geometry share the same character.
- Right summit angles characterize Euclidean geometry.
- Acute summit angles characterize hyperbolic geometry.

**Boundary note:** The Saccheri--Legendre theorem excludes the obtuse case under this Hilbert-style neutral package. Elliptic geometry belongs to a different global incidence-and-order setting rather than a third neutral branch.

## Explicit metric and angle conventions

For the full proofs below we use a complete ruler-and-angle formulation of the neutral package. Each line has a distance-preserving coordinate onto the real line, with the compatible order of the previous chapter. Distance is a metric; a segment can therefore be copied to a ray and has its unique coordinate midpoint. Angles have real measures between zero and pi, are additive when an interior ray splits an angle, and can be copied uniquely into a specified half-plane. Congruence is equality of these lengths and angle measures. SAS is an axiom of this formulation, not a theorem proved by moving a physical triangle. These assumptions are compatible with both the real Euclidean and real hyperbolic planes; they include no parallel uniqueness.

The original Hilbert-style description remains a useful axiomatic overview. Equivalence of fully developed ruler and primitive Hilbert presentations is a separate foundations result; the present proofs declare their working hypotheses rather than silently invoking that equivalence. In particular, taking a midpoint is licensed by the ruler property, and repeatedly halving an angle uses real-number Archimedean behavior.

### ASA from the stated copying axioms

**Theorem — ASA congruence.** If two triangles have corresponding equal angles at both endpoints of an equal included side, they are congruent.

**Proof.** Suppose AB=DE, angle A equals angle D, and angle B equals angle E. On ray DF choose G with DG=AC, using segment copying. SAS compares ABC with DEG, so angle DEG equals angle ABC, hence equals angle DEF. Both G and F lie in the same chosen half-plane of DE. Uniqueness of copying that angle at E makes rays EG and EF identical. Since G also lies on DF, uniqueness of the intersection of the noncollinear supporting lines gives G=F. The SAS comparison is therefore with the intended second triangle, proving congruence. $\square$

This is a deduction from SAS and the copying conditions. The earlier superposition paragraph explains the intuition behind SAS but is not an independent proof of that axiom. Treating a postulate as though it followed from its own geometric picture would reverse the logical order.

## Complete exterior-angle and angle-sum proofs

**Theorem — Strict exterior angle.** An exterior angle of a neutral triangle is strictly larger than either remote interior angle.

**Proof.** For triangle ABC extend BC beyond C to D. Let M be the midpoint of AC, and extend BM beyond M to E with BM=ME. Triangles AMB and CME have AM=MC, BM=ME and equal vertical included angles. SAS therefore gives angle MCE equal to angle MAB, the original angle at A.

We verify that ray CE lies strictly inside the exterior angle ACD. Points B and E are opposite sides of AC because segment BE crosses AC at M. Points B and D are opposite sides of AC because their segment passes through C. Hence E and D share a side of AC. Relative to BC, M is on A's side, and the positive ray BM, including E, stays on that side by the boundary-ray fact from ordered geometry. Thus E and A share a side of CD as well. These are precisely the two angular-interior conditions. Angle ACD therefore contains the proper subangle ACE, congruent to angle A, and is strictly larger. To handle the other remote angle, interchange A and B and use the vertical angle of the corresponding exterior angle at C. $\square$

**Corollary — Two-angle bound.** Any two angles of a neutral triangle have sum less than pi.

**Proof.** The exterior angle supplementary to the third selected interior angle is greater than the remaining remote angle. Rearranging that strict inequality gives the bound. $\square$

**Lemma — Angle-halving replacement.** Given a neutral triangle, there is another with the same angle sum and an angle no greater than half one chosen original angle.

**Proof.** For triangle ABC choose the midpoint M of BC and extend AM beyond M to E with AM=ME. SAS makes triangles AMC and EMB congruent: AM=ME, MC=MB and the included angles are vertical. Consequently angle AEB equals angle CAM, and angle EBC equals angle ACB. The segment BC crosses AE at M, so ray BC lies inside angle ABE by the crossbar converse. Thus angle ABE is the sum of angle ABC and angle CBE. At A, ray AE is ray AM, so angle BAE is angle BAM. Adding the angles of ABE now gives exactly the original sum A+B+C. Its angles at A and E are angle BAM and angle MAC, which sum to the original angle A. At least one is therefore no greater than A/2. $\square$

**Theorem — Saccheri–Legendre with the Archimedean hypothesis exposed.** Every triangle in this complete neutral package has angle sum at most pi.

**Proof.** Suppose a triangle has sum $S=\pi+\delta$ with $\delta>0$. Apply the replacement lemma repeatedly, each time selecting an angle no larger than half the previously selected angle. The sum remains S. After finitely many steps the selected positive angle is smaller than delta, because real angle measures are Archimedean. The other two angles then sum to more than pi, contradicting the two-angle bound. Thus no positive delta is possible. $\square$

This proves the actual angle-sum theorem rather than inferring it from a Euclidean parallel construction. The triangle defect $\pi-S$ is nonnegative. If a point divides one side, the two smaller triangle defects add to the original defect, since the new angles at the dividing point are supplementary. These facts will be useful in both Euclidean and hyperbolic comparisons.

## Further neutral deductions and their limits

The perpendicular-bisector converse in the original exercise can also be proved without invoking a separate hypotenuse-leg theorem. If PA=PB and P is not on AB, copy the half-angle ray at P. Crossbar makes it meet open AB at Q. SAS compares PAQ and PBQ, giving AQ=BQ and equal adjacent angles at Q. Thus Q is the unique midpoint and the two supplementary equal angles are right angles. The point P lies on the perpendicular bisector. If P is on AB, equality of its two endpoint distances forces the midpoint directly from its ruler coordinate. The forward direction is the original SAS proof. This supplies a full alternative certificate for the exercise's conclusion.

A Saccheri quadrilateral has equal summit angles without using parallels. Compare triangles DAB and CBA by SAS: their corresponding legs are equal, their base is shared and both included angles are right. This gives equal diagonals DB=AC. Then triangles ADC and BCD have equal corresponding three sides; the standard neutral SSS congruence theorem gives equal summit angles. Here SSS is a named standard congruence consequence, not proved by the angle-sum argument above. Since the convex quadrilateral splits into two triangles, its total angle sum is at most two pi; with two base right angles and equal summit angles, each summit angle is at most a right angle.

The four-way rectangle/parallel/similarity equivalence stated earlier is a standard additional foundations theorem. The full equivalence proof is not supplied by its earlier proof-idea paragraph, and we do not count that paragraph as one. Two directions can already be certified: in the Euclidean parallel branch the parallel-angle theorem constructs rectangles; and a rectangle split by a diagonal has two triangle sums each at most pi and total two pi, so both equal pi. The converse from one zero-defect triangle to global Euclidean parallel uniqueness, and the similar-noncongruent-triangle equivalence, retain their explicitly imported theorem status here. The next chapter develops the Euclidean branch directly from its parallel hypothesis.

### Worked example 1 — An angle-sum certificate

Suppose two angles of a neutral triangle are 50 degrees and 60 degrees. The third is positive and at most 70 degrees by Saccheri–Legendre. It need not equal 70 degrees: that equality is the Euclidean case, while a hyperbolic triangle may have a smaller third angle and positive defect. The strict two-angle bound also excludes an attempted third angle of 130 degrees immediately, even before considering all three together. The same numerical calculation has different logical strength depending on which theorem is invoked.

### Worked example 2 — Defect under a subdivision

Let a triangle have angle sum 170 degrees, hence defect 10 degrees. Divide it by a segment from one vertex to an interior point of the opposite side. If one smaller triangle has defect 4 degrees, the other has defect 6 degrees by additivity. Both are nonnegative, agreeing with the angle-sum theorem. Had the first claimed defect been 12 degrees, the other would be negative, so that proposed subdivision could not occur in the stated neutral package. This is an exact constraint on a configuration, not a scale drawing argument.

### Worked example 3 — Euclidean Saccheri data and a model boundary

A Euclidean Saccheri quadrilateral with base length four and equal perpendicular legs of length three is the rectangle with vertices $(0,0),(4,0),(4,3),(0,3)$. Its summit length is four and its two summit angles are right. In the curvature-minus-one hyperbolic model the same positive lengths give a longer summit according to the retained hyperbolic cosine formula. The construction's numerical inputs do not determine the output until the geometric model has been specified. Neither the Euclidean coordinates nor the hyperbolic formula can be substituted for a neutral synthetic proof without naming that change of setting.

## Practice exercises

### Exercise 1
<a id="neutral-geometry-ex-1"></a>
Prove that in neutral geometry, the perpendicular bisector of a segment $AB$ consists exactly of those points equidistant from $A$ and $B$.


<details><summary>Hint 1</summary>

Compare the two right triangles through the midpoint.

</details>
<details><summary>Hint 2</summary>

For the converse use the equal-distance condition and uniqueness of the perpendicular foot.

</details>
<details><summary>Full solution</summary>

**Solution.**
Let $M$ be the midpoint of $AB$. For $P=M$ the claim is immediate. For any other point $P$ on the perpendicular bisector, $\triangle PMA \cong \triangle PMB$ by SAS (shared $PM$, $AM = BM$, right angles at $M$), so $PA = PB$. Conversely, if $PA = PB$ and $P\ne M$, drop the perpendicular from $P$ to $AB$ at $Q$. Then $\triangle PQA \cong \triangle PQB$ by hypotenuse-leg, so $AQ = QB$ and $Q = M$. Hence $P$ lies on the perpendicular bisector. The proof uses only SAS, existence of midpoints (continuity), and uniqueness of the perpendicular from a point to a line.

</details>

### Exercise 2
<a id="neutral-geometry-ex-2"></a>
Explain why the statement "the altitudes of a triangle are concurrent" cannot be proved in neutral geometry without additional assumptions.


<details><summary>Hint 1</summary>

Distinguish a projective concurrence point from a point inside the hyperbolic model.

</details>
<details><summary>Hint 2</summary>

Substitute into the covectors, then check the disk inequality.

</details>
<details><summary>Full solution</summary>

**Solution.**
The standard Euclidean proof using a larger triangle with parallel sides is unavailable. There is also a concrete hyperbolic counterconfiguration. In the Klein disk, take

$A=(-3/4,-1/2),\quad B=(-3/4,-1/4),\quad C=(-1/2,1/4)$.

Use homogeneous Klein coordinates $[t:x:y]$, with affine chart $t=1$ and line at infinity $t=0$. Polarity with respect to the absolute conic $t^2-x^2-y^2=0$ gives altitude covectors proportional to $(-28,-26,-17)$, $(24,23,27)$, and $(4,3,-10)$. They concur projectively at $[311:-348:20]$, as substitution verifies, but its affine coordinates $(-348/311,20/311)$ satisfy

$(-348/311)^2+(20/311)^2=121504/96721>1$.

The concurrence point is outside the Klein disk, so the three hyperbolic altitude geodesics have no common point in the hyperbolic plane. Hence interior altitude concurrency is not a theorem of neutral geometry.

</details>

### Exercise 3
<a id="neutral-geometry-ex-3"></a>
In neutral geometry, prove that the sum of the angles of a convex quadrilateral is at most $2\pi$.


<details><summary>Hint 1</summary>

Split along a diagonal of the convex quadrilateral.

</details>
<details><summary>Hint 2</summary>

Apply the triangle angle-sum inequality on each side and add.

</details>
<details><summary>Full solution</summary>

**Solution.**
Let $ABCD$ be a convex quadrilateral. Draw diagonal $AC$. This divides the quadrilateral into $\triangle ABC$ and $\triangle ADC$. By the Saccheri–Legendre theorem, each triangle has angle sum $\leq \pi$. The angle sum of the quadrilateral is the sum of the angle sums of the two triangles, hence $\leq 2\pi$. Equality holds if and only if both triangles have angle sum $\pi$, which in neutral geometry is equivalent to the Euclidean parallel postulate.

</details>

### Exercise 4
<a id="neutral-geometry-ex-4"></a>
Construct a Saccheri quadrilateral in the Euclidean plane with base $AB$ of length $4$ and legs of length $3$. Compute the length of the summit $CD$.


<details><summary>Hint 1</summary>

Place the base on the horizontal axis and draw equal perpendicular legs.

</details>
<details><summary>Hint 2</summary>

The resulting Euclidean summit is a translate of the base.

</details>
<details><summary>Full solution</summary>

**Solution.**
Place $A=(0,0)$ and $B=(4,0)$. The legs are perpendicular to $AB$, so $D=(0,3)$ and $C=(4,3)$. Then $CD = 4$, equal to the base. The summit angles are right angles, confirming the Euclidean case. In curvature $-1$ hyperbolic geometry, the summit is longer than the base and the summit angles are acute. Indeed, for leg length $h$ and base length $b>0$, $\cosh s=\cosh^2h\cosh b-\sinh^2h$, so $\cosh s-\cosh b=\sinh^2h(\cosh b-1)>0$ and $s>b$.

</details>

## Forward and backward connections

This chapter builds on **Axiomatic Systems** by instantiating the general ideas in the specific setting where the parallel axiom is withheld. The next chapter, **Hyperbolic Geometry**, adds the hyperbolic parallel axiom (through an external point there pass at least two parallels) and explores the resulting theorems. **Elliptic Geometry** later modifies the incidence axioms so that no parallels exist. The ability to recognize neutral proofs, practiced here, is essential for every subsequent chapter.

## Further exercises

### Exercise 5
<a id="neutral-geometry-ex-5"></a>

Prove a triangle has no more than one right or obtuse angle in neutral geometry.

<details><summary>Hint 1</summary>

Use the strict bound on the sum of any two angles.

</details>
<details><summary>Hint 2</summary>

Two such angles would sum to at least pi.

</details>
<details><summary>Full solution</summary>

The exterior-angle theorem implies that any two interior angles have sum strictly less than pi. Two right or obtuse angles would each be at least pi/2, giving a sum at least pi and contradicting that bound. This proof does not assume the full triangle sum equals pi and therefore survives in the hyperbolic branch.

</details>

### Exercise 6
<a id="neutral-geometry-ex-6"></a>

Define triangle defect and prove its additivity when a point on one side subdivides a triangle.

<details><summary>Hint 1</summary>

Subtract angle sums from pi.

</details>
<details><summary>Hint 2</summary>

The two angles at the subdivision point sum to pi.

</details>
<details><summary>Full solution</summary>

Define defect as pi minus the triangle angle sum. For a point D inside BC, triangles ABD and ACD have the original angles at B,C and split the angle at A; their two angles at D are supplementary. Adding their defects therefore gives $2\pi$ minus (the original angle sum plus pi), exactly the original defect. No parallel axiom is used.

</details>

### Exercise 7
<a id="neutral-geometry-ex-7"></a>

Why does one zero-curvature or one Euclidean-looking picture not prove the parallel postulate?

<details><summary>Hint 1</summary>

A model claim concerns all configurations.

</details>
<details><summary>Hint 2</summary>

An isolated local appearance supplies no universal incidence statement.

</details>
<details><summary>Full solution</summary>

The parallel postulate specifies exactly one nonintersecting line through every external point for every line. A drawing of one configuration, or informal local flatness, does not verify those quantifiers or the supporting axioms. A valid equivalence theorem must prove how its stated geometric condition forces the universal assertion; visual similarity to a Euclidean diagram does not supply that proof.

</details>

### Exercise 8
<a id="neutral-geometry-ex-8"></a>

Show equal alternate interior angles force two lines not to meet in neutral geometry.

<details><summary>Hint 1</summary>

Assume a meeting point and form a triangle.

</details>
<details><summary>Hint 2</summary>

An exterior angle would equal a remote interior angle.

</details>
<details><summary>Full solution</summary>

If the two lines met on the relevant side of the transversal, the equal alternate-angle configuration would form a triangle with one specified angle exterior and the equal one remote interior. This contradicts the strict exterior-angle theorem. The opposite-side meeting is excluded by the corresponding vertical-angle configuration. Thus the lines do not meet; uniqueness of such a line is not concluded.

</details>

### Exercise 9
<a id="neutral-geometry-ex-9"></a>

Explain why an elliptic plane is not a counterexample to a neutral exterior-angle theorem.

<details><summary>Hint 1</summary>

Check the global order and line axioms before comparing angle sums.

</details>
<details><summary>Hint 2</summary>

Elliptic lines are closed and all pairs meet.

</details>
<details><summary>Full solution</summary>

The neutral theorem assumes an ordered incidence plane with extended rays, side separation and the stated congruence package. Elliptic geometry changes that global structure; it is not obtained by simply keeping all neutral axioms and denying parallels. A theorem can fail in a different axiom system without contradicting its proof under the original assumptions.

</details>

### Exercise 10
<a id="neutral-geometry-ex-10"></a>

Verify algebraically that the cited hyperbolic Saccheri summit exceeds its base for positive leg and base lengths.

<details><summary>Hint 1</summary>

Use cosh squared minus sinh squared equals one.

</details>
<details><summary>Hint 2</summary>

Cosh is strictly increasing on nonnegative arguments.

</details>
<details><summary>Full solution</summary>

The stated formula gives cosh(s)-cosh(b)=sinh(h)^2(cosh(b)-1)>0 when h,b>0. Both lengths are nonnegative and cosh is strictly increasing there, so s>b. The strict hypotheses matter: with h=0 the quadrilateral degenerates and equality occurs. This verifies the supplied model formula rather than proving that formula from neutral axioms.

</details>

## Sources and provenance

The original mathematical statements, model counterexample, exercise statements and full solutions are retained. Added proofs, examples and staged hints are original Euler prose under CC BY-SA 4.0. A primary historical reference is David Hilbert, [The Foundations of Geometry](https://www.gutenberg.org/ebooks/17384). The university author text [Angle Defect](https://books.physics.oregonstate.edu/MNEG/defect.html) records the classical halving mechanism; our construction and case justification are supplied above. The standard rectangle/similarity equivalence and SSS background remain named imported results where no complete derivation is given, rather than being presented as consequences proved by the old sketches.

## Summary

Neutral geometry retains order, metric congruence and continuity while leaving Euclidean parallel uniqueness undecided. With the explicit ruler-and-angle package, SAS is an axiom, ASA follows by copying, the exterior-angle theorem is strict, and midpoint replacement plus the Archimedean property proves the triangle angle-sum bound. Defects add under subdivision and expose invalid numerical configurations. The Euclidean branch adds a parallel hypothesis; elliptic geometry instead changes the global incidence and order setting. The next chapter develops Euclidean congruence, area and similarity with that distinction visible.
