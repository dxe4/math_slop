
# Congruence, Area and Similarity in the Euclidean Plane

Neutral geometry controls congruence without deciding the parallel postulate. In this chapter we choose the Euclidean branch and explain how parallels, rigid motions, area and scaling fit together. The proofs alternate between an explicit parallel argument and the real coordinate model. A coordinate proof is universal for that model when arbitrary coordinates cover every configuration; it is not a proof that a bare incidence structure already possesses lengths and areas.

Preparation is the completed school [Euclidean geometry book](#/books/euclidean-geometry-trigonometry), algebra with real vectors, and the earlier distinction between assumptions and consequences. We do not repeat every school construction. Our aim is a proof framework that makes the roles of orientation, degeneracy and scale visible. The real coordinate plane has its usual norm and dot product. The general foundations theorem identifying a complete Euclidean axiom plane with that model is background, not a representation theorem proved here.

## Parallels and the triangle angle sum

**Euclidean assumption.** Through a point off a line there is exactly one line disjoint from it. Neutral geometry already shows that copying an alternate angle constructs a disjoint line; uniqueness identifies that constructed line with any proposed parallel through the point.

**Theorem 6.1 — Euclidean angle sum.** A nondegenerate Euclidean triangle has angle sum pi.

**Proof.** Through A draw the line parallel to BC. The angle-copy construction and uniqueness give alternate interior angles equal to the triangle angles at B and C. Along the straight line through A, these two angles and angle BAC fill one straight angle. Additivity of angle measure therefore gives their sum as pi. This is exactly where the Euclidean assumption enters: without uniqueness the particular line supplied by copying one alternate angle need not also be the line supplying the other required equality. $\square$

This proof is not a replacement for the neutral inequality. It strengthens that inequality after an additional hypothesis has been adopted. It also gives the polygon angle-sum theorem for a convex n-gon: diagonals from one vertex divide it into n-2 triangles with disjoint interiors, so its interior angles sum to $(n-2)\pi$. Convexity makes those diagonals remain inside; a general polygon requires a valid triangulation rather than an optimistic drawing.

## Rigid motions and congruence certificates

**Definition 6.2 — Euclidean rigid motion.** A map $f(x)=Qx+b$, where Q is a real orthogonal two-by-two matrix and b a vector, is a rigid motion. It preserves all distances because $\|Q(x-y)\|^2=(x-y)^TQ^TQ(x-y)=\|x-y\|^2$. Its determinant is plus or minus one, distinguishing orientation preservation and reversal. Two configurations are congruent when one rigid motion carries every labeled point of one to its corresponding point of the other.

A useful completeness result for this description will be proved in the transformation chapter. Here the displayed maps already give enough tools to move a nondegenerate triangle into a standard position: send its first vertex to zero, its second to $(c,0)$ with $c>0$, and choose the sign of its perpendicular coordinate by reflection if needed. A rotation or reflection of orthonormal bases supplies the required Q.

**Theorem 6.3 — Euclidean SSS.** Two nondegenerate labelled Euclidean triangles with three equal corresponding side lengths are congruent.

**Proof.** Put the first two vertices at $(0,0)$ and $(c,0)$ in both triangles, reflecting so that the third vertex has positive second coordinate. If its distances to those vertices are b and a, write it as $(x,y)$. Then $x^2+y^2=b^2$ and $(x-c)^2+y^2=a^2$. Subtracting gives $x=(b^2+c^2-a^2)/(2c)$. The positive value $y=\sqrt{b^2-x^2}$ is then determined. Nondegeneracy makes the radicand strictly positive. Thus the normalized triangles coincide, and undoing their rigid normalizations gives the congruence. $\square$

The same normalization proves SAS by specifying the third point as $(b\cos A,b\sin A)$ on a chosen side of the base. This is a coordinate verification of the Euclidean congruence criterion, while the earlier neutral chapter treated SAS as part of its axiom package. One must not describe that earlier axiom as if this later model calculation had proved it from pure incidence.

SSS, SAS and ASA contain enough data; a careless SSA substitute need not. Degenerate cases also require their own descriptions. Three collinear vertices can satisfy side equalities but do not have the positive height used in Theorem 6.3, and their triangle angles are not those of a nondegenerate triangle.

## Area as a determinant

**Definition 6.4 — Oriented triangle area.** For points A,B,C in the real plane set $[ABC]=\tfrac12\det(B-A,C-A)$. The ordinary triangle area is its absolute value. A zero determinant means collinearity; changing the order of two vertices reverses oriented area while preserving ordinary area.

**Proposition 6.5 — Subdivision and affine scale.** Oriented area is translation invariant, additive under a directed subdivision, and multiplied by $\det M$ under a linear map M. Ordinary area is multiplied by $|\det M|$.

**Proof.** Translation leaves the two difference vectors unchanged. Expanding determinants gives $[ABC]=[ABD]+[ADC]$ whenever D lies on line BC; more generally the same directed identity with the appropriate three terms holds for any inserted point. If D is inside segment BC and the triangle orientation is fixed, the two smaller determinants have that same sign, so ordinary areas add too. Finally $\det(Mu,Mv)=\det M\det(u,v)$, which proves the scale law and its absolute-value version. $\square$

This formula agrees with base times height divided by two: move AB by a rigid motion to a horizontal base of length c and let the third vertex's perpendicular coordinate be h. Its determinant magnitude is $c|h|$. Rigid motions have determinant magnitude one, so the value does not depend on that normalization. The same argument proves the parallelogram formula and area equality for triangles on a common base and between common parallels. A coordinate shear can preserve this area while changing angles and side lengths.

For a simple polygon, an interior triangulation allows its area to be defined by the sum of triangle areas, agreeing with the determinant boundary formula. Triangles with overlapping interiors cannot simply be added as if they formed a dissection. Area proofs must include coverage and nonoverlap, just as congruence proofs must include labeled correspondence.

## Similarity and its consequences

**Definition 6.6 — Euclidean similarity.** A similarity has the form $f(x)=rQx+b$ with $r>0$ and Q orthogonal. It multiplies distances by r, preserves unsigned angles, and multiplies ordinary area by $r^2$. Orientation is controlled by $\det Q$, independently of the positive scale.

**Theorem 6.7 — Triangle similarity criteria.** Two nondegenerate Euclidean triangles are similar if they have two equal corresponding angles, or three proportional corresponding sides, or two proportional corresponding sides and equal included angle.

**Proof.** For proportional sides, scale the first triangle so that its side lengths match those of the second, then apply SSS or SAS as appropriate. For two equal angles, choose r so that one corresponding side agrees and scale. The Euclidean angle-sum theorem makes the remaining pair of angles equal as well, and ASA now makes the scaled triangles congruent. Undoing the scaling proves similarity. Conversely a similarity multiplies every length by the same positive factor and preserves angles by the dot-product formula. $\square$

The intercept theorem follows with its hypotheses visible. If D lies in the open segment AB and E in the open segment AC, with DE parallel to BC, their corresponding angles agree by parallels, so ADE and ABC are similar. Therefore $AD/AB=AE/AC=DE/BC$. Conversely if the first two positive ratios agree and D,E lie on the corresponding positive rays, scaling about A carries B to D and C to E. The image of BC is the line DE. It is parallel to BC when the scale differs from one, and coincides with BC when the scale is one. The ray and positivity conditions rule out accidental use of directed ratios for points on opposite extensions.

A similarity of ratio r changes perimeter by r and area by $r^2$. Thus equal area does not imply congruence: a rectangle of sides one and four has the same area as a square of side two but different side lengths and angles of possible triangle subdivisions. Even equal perimeter together with equal area need not classify arbitrary polygons. Those are scalar invariants, not full rigid-motion data.

## Worked examples

### Worked example 1 — Reconstruct a triangle from its sides

Take base length c=6, distance b=5 from the first vertex to the third, and a=5 from the second to the third. The SSS coordinates give $x=(25+36-25)/12=3$ and $y=\sqrt{25-9}=4$. The vertices are $(0,0),(6,0),(3,4)$ up to rigid motion. Its area is $\tfrac12\cdot6\cdot4=12$. Scaling by two gives side lengths 10, 10, 12 and area 48. The linear scale and area scale differ exactly as the determinant law predicts.

### Worked example 2 — Two triangles with SSA data

Let A be the origin, B=(4,0), and C lie on the ray making 30 degrees with the positive horizontal axis. Write $C=(t\sqrt3/2,t/2)$ with t positive. Requiring BC=3 gives $t^2-4\sqrt3t+7=0$, whose two positive solutions are $2\sqrt3+\sqrt5$ and $2\sqrt3-\sqrt5$. Both triangles have AB=4, BC=3 and angle A=30 degrees, but their AC lengths differ. They are not congruent. This exact calculation exposes the ambiguous SSA arrangement without relying on a sketch with nearly overlapping intersections.

### Worked example 3 — Area preservation without congruence

The shear $M(x,y)=(x+2y,y)$ has determinant one. It sends the unit square to the parallelogram with vertices $(0,0),(1,0),(3,1),(2,1)$, so area stays one. But its vertical unit side becomes vector $(2,1)$ of length $\sqrt5$, and its angle with the horizontal has cosine $2/\sqrt5$. Thus neither length nor angle is preserved. The determinant certifies an area fact, not a claim that the map is a rigid motion or similarity.

## Exercises

### Exercise 6.1
<a id="euclidean-congruence-area-and-similarity-ex-1"></a>
Prove a Euclidean triangle with two angles equal has its opposite sides equal.
<details><summary>Hint 1</summary>
Compare the triangle with the same triangle under exchanged endpoint labels.
</details>
<details><summary>Hint 2</summary>
Use ASA on the side between the equal angles.
</details>
<details><summary>Full solution</summary>
If angles B,C are equal, compare ABC with ACB using common side BC as the included side. The two endpoint angles correspond equally, so ASA gives congruence. The opposite corresponding sides AB and AC are equal. Nondegeneracy is part of the triangle hypothesis, making the angles and ASA application legitimate. The argument is also valid under the neutral ASA theorem proved earlier.
</details>

### Exercise 6.2
<a id="euclidean-congruence-area-and-similarity-ex-2"></a>
Find the area of the triangle $(1,1),(5,1),(2,4)$.
<details><summary>Hint 1</summary>
Subtract the first vertex before taking the determinant.
</details>
<details><summary>Hint 2</summary>
The difference vectors are $(4,0)$ and $(1,3)$.
</details>
<details><summary>Full solution</summary>
The determinant is twelve, so the area is six. Reversing the last two labels gives oriented area minus six but leaves ordinary area six. A direct base–height calculation agrees: horizontal base four and height three give one-half times four times three. Translation to the origin simplifies the calculation without changing either kind of area.
</details>

### Exercise 6.3
<a id="euclidean-congruence-area-and-similarity-ex-3"></a>
A triangle is enlarged by positive ratio 3/2. Find the perimeter and area multipliers.
<details><summary>Hint 1</summary>
Every side has the same linear scale.
</details>
<details><summary>Hint 2</summary>
Area uses the determinant of a two-dimensional scaling.
</details>
<details><summary>Full solution</summary>
Perimeter is multiplied by 3/2 because it is a sum of side lengths. Area is multiplied by $(3/2)^2=9/4$. Using 3/2 for area would ignore the second independent length direction. This statement applies to a true similarity; changing just one height or side while holding the rest fixed need not be such a transformation.
</details>

### Exercise 6.4
<a id="euclidean-congruence-area-and-similarity-ex-4"></a>
Prove the midpoint segment in a Euclidean triangle is parallel to the opposite side and half its length.
<details><summary>Hint 1</summary>
Use the homothety of ratio one-half about the remaining vertex.
</details>
<details><summary>Hint 2</summary>
It carries both other vertices to their midpoints.
</details>
<details><summary>Full solution</summary>
The map $x\mapsto A+(x-A)/2$ sends B to the midpoint D of AB and C to the midpoint E of AC. It sends the line BC to the parallel line DE and scales the segment length by one-half. Thus DE is parallel to BC and $DE=BC/2$. This is a Euclidean similarity argument; it cannot be imported into neutral geometry before the Euclidean branch has been selected.
</details>

### Exercise 6.5
<a id="euclidean-congruence-area-and-similarity-ex-5"></a>
For side lengths 13, 14, 15, use base 14 to find a coordinate third vertex and area.
<details><summary>Hint 1</summary>
Put the length 13 side at the first endpoint and the length 15 side at the second.
</details>
<details><summary>Hint 2</summary>
Subtract the two squared-distance equations.
</details>
<details><summary>Full solution</summary>
With endpoints $(0,0),(14,0)$ and third vertex $(x,y)$, use b=13 and a=15. Then $x=(169+196-225)/28=5$ and positive $y=\sqrt{169-25}=12$. The area is $14\cdot12/2=84$. Reflection gives the other possible sign of y, which is congruent and has opposite oriented area. The positive height verifies nondegeneracy.
</details>

### Exercise 6.6
<a id="euclidean-congruence-area-and-similarity-ex-6"></a>
Show two triangles with the same base and third vertices on a parallel line have equal areas.
<details><summary>Hint 1</summary>
Choose the base horizontal by a rigid motion.
</details>
<details><summary>Hint 2</summary>
The third vertices then have equal perpendicular height.
</details>
<details><summary>Full solution</summary>
Normalize the base to $(0,0),(c,0)$ with c positive. A line parallel to it has fixed second coordinate h. A third vertex $(x,h)$ gives determinant $ch$, independent of x, so ordinary area is $c|h|/2$ for every such vertex. The vertices must lie off the base line for nondegenerate triangles; if h=0 the same formula gives zero but the triangle hypothesis fails.
</details>

### Exercise 6.7
<a id="euclidean-congruence-area-and-similarity-ex-7"></a>
Why is AA similarity a Euclidean conclusion rather than a neutral congruence axiom?
<details><summary>Hint 1</summary>
Its proof scales a triangle and invokes the Euclidean angle-sum law.
</details>
<details><summary>Hint 2</summary>
Noncongruent similar triangles are not available in every neutral model.
</details>
<details><summary>Full solution</summary>
The proof here chooses a global Euclidean dilation and uses angle-sum equality to match the remaining angle before applying ASA. A general neutral geometry has neither an assumed dilation structure nor the equality of all triangle angle sums. The hyperbolic model does not support arbitrary scaled copies with the same angles. Treating AA similarity as an axiom of neutral congruence would silently add Euclidean information.
</details>

### Exercise 6.8
<a id="euclidean-congruence-area-and-similarity-ex-8"></a>
Give an area-preserving linear map that is not a similarity and verify both claims.
<details><summary>Hint 1</summary>
A diagonal matrix can stretch in one direction and compress in another.
</details>
<details><summary>Hint 2</summary>
Use diagonal entries two and one-half.
</details>
<details><summary>Full solution</summary>
Take $M(x,y)=(2x,y/2)$. Its determinant is one, so it preserves ordinary areas. But it sends the two coordinate unit vectors to lengths two and one-half, so no single positive scale applies to all lengths. It is therefore not a similarity. Area preservation alone is weaker than uniform metric scaling, even for an invertible linear map.
</details>

### Exercise 6.9
<a id="euclidean-congruence-area-and-similarity-ex-9"></a>
Locate the exact parallel-postulate use in the triangle angle-sum proof.
<details><summary>Hint 1</summary>
Neutral geometry can already construct a disjoint alternate-angle line.
</details>
<details><summary>Hint 2</summary>
The same line must provide both equal alternate-angle relations.
</details>
<details><summary>Full solution</summary>
The Euclidean uniqueness assumption identifies the disjoint line obtained by one angle-copy construction with the line needed for the other alternate-angle relation through the same vertex. Only then can all three triangle angles be placed along one straight angle. Without that uniqueness, neutral nonintersection does not force both corresponding angles on one chosen line, so the equality proof is incomplete.
</details>

### Exercise 6.10
<a id="euclidean-congruence-area-and-similarity-ex-10"></a>
If a similarity takes one triangle of area 12 to another of area 75, find its positive length ratio.
<details><summary>Hint 1</summary>
The area ratio is the square of the length ratio.
</details>
<details><summary>Hint 2</summary>
Choose the positive square root by the similarity convention.
</details>
<details><summary>Full solution</summary>
The square of the ratio is $75/12=25/4$, so its positive value is $5/2$. Orientation may be preserved or reversed by the orthogonal part, but that does not change either this positive length ratio or the ordinary area ratio. A negative root would duplicate an orientation choice already handled separately rather than give a different length scale.
</details>

## Sources

Original Euler text, examples and exercises, CC BY-SA 4.0. The existing [school geometry book](#/books/euclidean-geometry-trigonometry) supplies the earlier construction route. Primary historical material is Euclid's [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html) and [Book VI](https://mathcs.clarku.edu/~djoyce/elements/bookVI/bookVI.html), in David Joyce's scholarly edition. The determinant and rigid-motion proofs are developed here in the explicitly chosen real coordinate model. The retained transformation chapter remains available at its original identity.

## Summary

Euclidean parallel uniqueness turns the neutral angle bound into equality. Rigid normalization gives complete coordinate congruence certificates, while determinants make oriented area, subdivision and affine scale precise. Similarities preserve angles and scale all lengths uniformly, with squared area scale. Neither SSA data nor area alone determines congruence. The next chapter studies circles and inversion, retaining the exceptional role of an inversion center and the distinction between ordinary and generalized circles.
