var e=`---
parent_id: book-geometry-proof-reference
chapter_id: length-area-and-measure
title: "Length, Area and Measure"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Length, Area and Measure

Length and area begin with finite geometric pieces: segments, triangles, and rectangles. Passing to a curved boundary or a complicated set requires a limiting definition. The central issue is not merely choosing a formula; one must show that different sufficiently fine approximations lead to the same quantity.

This chapter proves the length formula for a regular smooth curve and develops bounded-set area through Jordan approximation. It supplies the boundary criterion and concrete examples of where finite-box approximation fails. Lebesgue measure, Hausdorff dimension, and coarea remain available in the unchanged [Geometric Measure Theory](length-area-and-measure.md#geometric-measure-theory) reading. Those advanced results are not deleted, silently simplified, or claimed proved by the elementary arguments here.

Our basic analysis inputs are completeness of the real numbers, compactness of closed bounded Euclidean sets, uniform continuity on compact intervals, and the Riemann integral. The smooth length proof uses the fundamental theorem of calculus. Earlier [Euclidean area](euclidean-congruence-area-and-similarity.md) supplies the finite triangle and rectangle area rules.

## 1. Length as a supremum

**Definition 14.1.** For a continuous curve gamma:[a,b]→R^n, a partition P is a finite list a=t0<...<tm=b. Its chord sum is
$L_P(\\gamma)=\\sum_{i=1}^m\\|\\gamma(t_i)-\\gamma(t_{i-1})\\|.$
The length L(gamma) is the supremum of these sums, possibly infinity. A curve is rectifiable if its length is finite.

Adding partition points cannot decrease a chord sum, by the triangle inequality. The supremum therefore reflects increasingly detailed polygonal inspection. A curve's endpoint distance is only the coarsest one-segment lower bound. Loops can have zero endpoint distance and positive length.

This definition counts traversal. A curve that goes around a circle twice has twice the length of a single traversal even though its image set is the same. Distinguishing parametrized length from the length of an unlabelled image is necessary before speaking about repeated or self-intersecting paths.

**Theorem 14.2 (smooth length).** If gamma is $C^1$ on [a,b], then
$L(\\gamma)=\\int_a^b\\|\\gamma'(t)\\|\\,dt.$

*Proof.* By the fundamental theorem of calculus, each chord is the integral of gamma' over its subinterval. The norm of an integral is at most the integral of the norm, so every chord sum is bounded above by the displayed integral.

For the reverse inequality, uniform continuity of gamma' gives a modulus omega(h) tending to zero such that derivatives at parameters within h differ by at most omega(h). On an interval [u,v] of length at most h,
$\\gamma(v)-\\gamma(u)=(v-u)\\gamma'(u)+E,\\qquad
\\|E\\|\\le(v-u)\\omega(h).$
Hence its chord length is at least $(v-u)\\|\\gamma'(u)\\|-(v-u)\\omega(h)$. Sum over a partition of mesh at most h. The first sum tends to the Riemann integral, and the total error is at most (b-a)omega(h), tending to zero. Thus chord sums approach the integral from below, proving equality. $\\square$

Regularity gamma'≠0 is not needed for this equality, though it is needed to use arc length as a smooth local parameter. A stationary timing point can invalidate a curvature quotient while leaving length perfectly well defined.

An increasing continuous bijection of parameter intervals preserves all ordered partitions and their chord sums; decreasing ones reverse their order without changing distances. Thus length is invariant under either kind of reparametrization directly from the supremum definition. Smooth substitution gives the same result for regular differentiable changes.

## 2. Polygon area and orientation

For an oriented triangle p,q,r in the plane, signed area is det(q-p,r-p)/2. Its absolute value is the usual area. For a counterclockwise convex polygon p1,...,pm, a fan triangulation from one vertex has disjoint interiors and fills the polygon. Expanding those triangle determinants cancels the internal diagonal terms and yields
$\\operatorname{Area}
=\\frac12\\sum_{i=1}^m\\det(p_i,p_{i+1}),\\qquad p_{m+1}=p_1.$
This is the shoelace formula. Reversing the order reverses the signed sum, while actual area remains nonnegative.

The formula also applies when a simple polygon is supplied with a valid consistently oriented triangulation, because every internal edge occurs twice in opposite directions. For a self-intersecting boundary it instead computes an algebraic signed quantity with multiplicity; taking its absolute value need not give the area of the union of the enclosed pieces.

A linear map M multiplies each triangle determinant by det M. Thus absolute area of any finite triangulated polygon scales by |det M|. Translations do not change determinants of edge differences. This proves the affine area scale on these finite pieces, rather than inferring it from a sketch of a sheared rectangle.

## 3. Inner and outer Jordan approximations

**Definition 14.3.** An elementary plane set is a finite union of axis-aligned rectangles, whose area is defined by subdivision into rectangles with disjoint interiors. Boundary edges have area zero. A bounded set S is Jordan measurable if for every epsilon>0 there are elementary sets A,B with A⊆S⊆B and area(B)-area(A)<epsilon.

Common finite refinements of rectangle boundaries make the area definition independent of overlapping descriptions: each resulting small cell is either included or excluded, and the ordinary rectangle rule is additive on those cells. Whether finitely many boundary edges are included does not change the area.

The inner supremum and outer infimum agree exactly under the displayed approximation condition. Their common value is the Jordan area. For the empty set it is zero. Unbounded sets fall outside this bounded Jordan definition; their size requires an additional limiting or measure-theoretic framework.

One may express the same construction with the indicator function 1_S on a rectangle Q containing S. For a grid partition, the lower sum counts cells where the indicator is identically one, and the upper sum counts those where it takes value one somewhere. Their difference is the total area of mixed cells. Grid boundaries can be enclosed in finitely many arbitrarily thin rectangles, so endpoint conventions do not change the limiting condition.

Refining a partition raises lower sums and lowers upper sums. Two candidate limiting values must lie between every sufficiently close pair, proving uniqueness. This is why finite approximation gives a number only after inner and outer errors are both controlled.

## 4. Full boundary criterion

Call a bounded set Jordan null if for every epsilon>0 it is covered by finitely many open rectangles with total area below epsilon.

**Theorem 14.4.** A bounded plane set is Jordan measurable if and only if its topological boundary is Jordan null.

*Proof of sufficiency.* The boundary is closed and bounded, hence compact. Cover it by finitely many open rectangles with total area below epsilon. Their union contains a fixed positive-distance neighborhood of the boundary: otherwise a sequence outside the union approaching the boundary would have a boundary limit contradicting openness and compactness.

Choose a grid fine enough that every cell touching the boundary lies inside that union. Every mixed cell touches the boundary, because a segment inside the cell joining a point in S to one outside must meet the boundary. Therefore the union of mixed cells has area below epsilon. The difference of the upper and lower sums is below epsilon, giving Jordan measurability.

*Proof of necessity.* Choose a grid whose upper-minus-lower gap is below epsilon. A boundary point lying strictly inside a cell makes that cell mixed; a cell entirely in S or entirely outside has no boundary point in its interior. Thus the boundary is contained in the mixed cells together with the finitely many grid edges. Expand the mixed closed rectangles slightly and cover the grid edges by thin open rectangles. Finiteness permits the total added area to be arbitrarily small. The resulting finite open cover of the boundary has total area below, say, 2epsilon. Since epsilon was arbitrary, the boundary is Jordan null. $\\square$

The criterion uses the boundary, not S itself. A disk has positive area while its boundary is null. Conversely a dense countable subset of a square has a large boundary, even though every individual point is null.

**Proposition 14.5.** A Lipschitz image of a bounded interval has Jordan area zero in the plane.

*Proof.* Suppose ||gamma(t)-gamma(s)||<=L|t-s| on an interval of length T. Divide it into N equal subintervals. Each image piece lies in an axis-aligned square of side at most 2LT/N centered at one endpoint, with an arbitrarily small enlargement if an open cover is wanted. The sum of square areas is at most $4L^2T^2/N$, tending to zero. Constant maps are immediate. $\\square$

A $C^1$ curve on a compact interval is Lipschitz because its derivative is bounded and the fundamental theorem bounds displacement. Thus finite unions of smooth boundary arcs are null. Disks, ellipses, and bounded polygonal regions are Jordan measurable by the criterion, without needing a separate integration formula for each one.

## 5. Additivity and the countable-union boundary

For disjoint Jordan measurable bounded sets A and B, their union is Jordan measurable and its area is area(A)+area(B). On a common containing rectangle,
$1_{A\\cup B}=1_A+1_B$.
Common refined partitions and the upper/lower sum inequalities prove integrability and additivity. For sets meeting on a null boundary, the same result holds because adding or deleting a null set changes no inner/outer limiting area.

This is a finite approximation theory. It is not closed under arbitrary countable unions. For example every singleton is null, but the union of rational points in [0,1]² is dense and has dense complement. Its indicator has lower sum zero and upper sum one on every nontrivial grid. It is not Jordan measurable.

The issue is not a contradiction to countable additivity when a suitable measure is defined. It is failure of the Jordan class to contain that countable union at all. Lebesgue theory enlarges the measurable class and uses countable covers; the unchanged advanced reading develops that separate construction.

Bounded open sets need not be Jordan measurable either. A complement of a positive-measure nowhere-dense closed set inside an interval has a large boundary. The precise advanced construction is retained in geometric-measure-theory.md; the rational dense-set example here already shows why topological size and finite-box area are different questions.

## 6. Areas under graphs

**Proposition 14.6.** If f is continuous and nonnegative on [a,b], the region 0<=y<=f(x) has Jordan area $\\int_a^bf(x)\\,dx$.

*Proof.* On each subinterval, the minimum and maximum of f produce an inner and outer rectangle. Their total areas are exactly the lower and upper Riemann sums of f. Uniform continuity makes their difference tend to zero. The common area is the Riemann integral. The graph and vertical end segments are null, so choosing strict or nonstrict edges changes nothing. $\\square$

The same proof applies to the region between two continuous functions with the lower one no greater than the upper, by subtracting their rectangle sums. It does not justify integrating a nonmeasurable indicator or ignoring a dense discontinuity set.

## 7. Worked examples

### Worked example 1 — A length independent of speed

Let gamma(t)=(3t²,4t²) for 0<=t<=1. Its speed is 10t, so length is $\\int_0^1 10t\\,dt=5$. The endpoint displacement is (3,4), also of length five. This curve traverses a straight segment with changing speed and a stationary derivative at t=0. Length remains valid despite the stationary endpoint.

If the same segment is traversed out and back, the image set stays the same but the chord-supremum length becomes ten. The distinction is traversal, not a failure of invariance under a bijective parameter change.

### Worked example 2 — A curved boundary with exact area

For the region below y=x² on [0,1], Proposition 14.6 gives area $\\int_0^1x²dx=1/3$. Its three boundary pieces are smooth and hence Jordan null, providing an independent measurability check.

The containing unit square is an outer bound but not an exact approximation. The Riemann rectangles resolve the curved top boundary with an error that tends to zero. A finite polygon drawing alone would give only an approximation unless its error were supplied.

### Worked example 3 — Disk area and a null circumference

The disk boundary is the Lipschitz image gamma(t)=(R cos t,R sin t), t in [0,2pi], so it is Jordan null. The disk is therefore measurable. Its area is
$4\\int_0^R\\sqrt{R^2-x^2}\\,dx=\\pi R^2,$
by substitution x=R sin theta and integration of cos²theta. The circumference has area zero but length $2\\pi R$. A set can therefore be negligible for area and nonnegligible for length without inconsistency.

### Worked example 4 — Rational dust has no Jordan area

Take S=Q²∩[0,1]². Every small open grid cell contains both a rational pair and a point with an irrational coordinate. Thus lower area is zero and upper area is one. Its boundary is the entire closed square, consistent with the boundary criterion. Lebesgue measure later assigns it zero, using countably many point covers rather than one finite-box approximation scheme.

## 8. Surface area and further measures

A smooth parametrized surface has local area factor ||Xu cross Xv||. Integrating it counts parametrized sheets, so repeating a patch can count the same image more than once. Equality with the area of an unlabelled image needs injectivity or an appropriate multiplicity theorem. The full first-form derivation is in [the differential-geometry book](../differential-geometry-curves-surfaces/first-fundamental-form.md); the retained advanced measure reading discusses its measure-theoretic scope.

Hausdorff dimension and coarea answer questions that finite Jordan approximation does not address. Their proofs require a countably additive measure framework, and coarea has explicit regularity and normalization hypotheses. They remain live in [Geometric Measure Theory](length-area-and-measure.md#geometric-measure-theory). This chapter establishes the elementary gateway rather than pretending that length and rectangle limits alone prove those advanced results.

## Exercises

<a id="length-area-and-measure-ex-1"></a>
### Exercise 14.1

Prove chord sums cannot decrease when a partition is refined.

<details>
<summary>Hint 1</summary>

Consider one inserted parameter.

</details>

<details>
<summary>Hint 2</summary>

Use the triangle inequality on its two new chords.

</details>

<details>
<summary>Full solution</summary>

Replacing a chord from gamma(u) to gamma(v) by chords through gamma(w), u<w<v, gives a sum at least the old chord by the triangle inequality. Any finite refinement is obtained by successive insertions, so its sum is no smaller.

</details>

<a id="length-area-and-measure-ex-2"></a>
### Exercise 14.2

Compute length of gamma(t)=(2cos t,2sin t), 0<=t<=pi.

<details>
<summary>Hint 1</summary>

Differentiate and take the norm.

</details>

<details>
<summary>Hint 2</summary>

The speed is constant.

</details>

<details>
<summary>Full solution</summary>

The derivative is (-2sin t,2cos t) and has norm two. The length is ∫0^pi 2dt=2pi. This is a half-circle traversal; extending to 4pi in parameter would count two full circuits, not the image circumference once.

</details>

<a id="length-area-and-measure-ex-3"></a>
### Exercise 14.3

Explain why a single endpoint chord can underestimate length.

<details>
<summary>Hint 1</summary>

Use a loop.

</details>

<details>
<summary>Hint 2</summary>

The supremum uses all finite partitions, not just endpoints.

</details>

<details>
<summary>Full solution</summary>

A full circle has identical starting and ending points, so its single endpoint chord has length zero. Its smooth length integral is positive, and partitions sampling intermediate points have positive chord sums. The supremum recovers traversal rather than endpoint displacement alone.

</details>

<a id="length-area-and-measure-ex-4"></a>
### Exercise 14.4

Show that a finite union of line segments is Jordan null in the plane.

<details>
<summary>Hint 1</summary>

Each segment is Lipschitz.

</details>

<details>
<summary>Hint 2</summary>

Split a desired total error among finitely many segments.

</details>

<details>
<summary>Full solution</summary>

Each segment has a finite rectangle cover of total area below epsilon/m when there are m segments. Combining these finitely many covers gives total area below epsilon. Thus the union is null. Countably many segments would require a different argument and need not admit such a finite cover.

</details>

<a id="length-area-and-measure-ex-5"></a>
### Exercise 14.5

Find the area under y=1-x on [0,1] by Jordan approximation.

<details>
<summary>Hint 1</summary>

Use lower and upper rectangles.

</details>

<details>
<summary>Hint 2</summary>

Their common integral is elementary.

</details>

<details>
<summary>Full solution</summary>

Continuity gives Jordan measurability of the subgraph and area ∫0^1(1-x)dx=1/2. The result also agrees with the area of the right triangle with unit legs. Agreement follows from the proved rectangle limit, not from assuming every curved subgraph formula.

</details>

<a id="length-area-and-measure-ex-6"></a>
### Exercise 14.6

Why is a disk Jordan measurable while its rational-point subset is not?

<details>
<summary>Hint 1</summary>

Compare their boundaries.

</details>

<details>
<summary>Hint 2</summary>

Density of both a set and its complement forces mixed cells.

</details>

<details>
<summary>Full solution</summary>

The disk has a circle boundary, which is Jordan null as a Lipschitz curve. Its rational-point subset is dense in the disk and has dense complement there, so its boundary includes the disk and has positive area. The boundary criterion separates the two cases.

</details>

<a id="length-area-and-measure-ex-7"></a>
### Exercise 14.7

Prove that changing a Jordan measurable set by finitely many points leaves its area unchanged.

<details>
<summary>Hint 1</summary>

A finite set is Jordan null.

</details>

<details>
<summary>Hint 2</summary>

Use arbitrarily small outer covers.

</details>

<details>
<summary>Full solution</summary>

Cover the changed points by finitely many rectangles of total area below epsilon. Add these rectangles to outer approximations and remove them from inner approximations. The area gap changes by at most an arbitrarily small quantity. Hence the modified set is measurable with the same area.

</details>

<a id="length-area-and-measure-ex-8"></a>
### Exercise 14.8

For a counterclockwise triangle (0,0),(2,0),(0,3), compute signed area by determinants and after reversing order.

<details>
<summary>Hint 1</summary>

Use half the oriented determinant.

</details>

<details>
<summary>Hint 2</summary>

Orientation affects sign, not actual area.

</details>

<details>
<summary>Full solution</summary>

The determinant of (2,0),(0,3) is six, so signed area is three. Reversing the order changes it to -3. The ordinary area is three in both cases. Applying an absolute value only after a self-intersecting polygon sum would not generally give union area.

</details>

<a id="length-area-and-measure-ex-9"></a>
### Exercise 14.9

If a linear map has determinant -2, how does it change area and orientation of a triangle?

<details>
<summary>Hint 1</summary>

Use determinant multiplication.

</details>

<details>
<summary>Hint 2</summary>

Separate signed from unsigned area.

</details>

<details>
<summary>Full solution</summary>

Signed area is multiplied by -2, so the orientation reverses and its magnitude doubles. Ordinary area is multiplied by two. The conclusion extends by finite triangulation to polygons; a general measurable-set statement requires the appropriate change-of-variables theorem.

</details>

<a id="length-area-and-measure-ex-10"></a>
### Exercise 14.10

Does the countable union of Jordan-null singletons have to be Jordan measurable?

<details>
<summary>Hint 1</summary>

Use rational points in a unit square.

</details>

<details>
<summary>Hint 2</summary>

Distinguish lack of closure of a class from a measure contradiction.

</details>

<details>
<summary>Full solution</summary>

No. Rational pairs in the unit square form such a countable union. Every grid cell has both types of points, giving lower sum zero and upper sum one, so the union is not Jordan measurable. Lebesgue theory treats this countable union differently by enlarging the measurable class.

</details>

<a id="geometric-measure-theory"></a>
## Geometric Measure Theory

The complete earlier mathematical text below is preserved from the source \`geometric-measure-theory.md\`, with its original exercise headings and full solutions. Its Lebesgue extension, area-formula, Hausdorff-measure and coarea assertions retain their stated scope. The Lebesgue construction and coarea theorem are imported advanced inputs here; the earlier proof sketch is not a full proof of them. The main chapter above supplies the elementary length and Jordan gateway.

## Learning purpose

This chapter introduces the measure-theoretic foundations of geometry: length, area, volume, and their generalizations to curved surfaces and fractal sets. We define Jordan and Lebesgue measure in $\\mathbb{R}^{n}$, compute surface area for parametric surfaces, and state the coarea formula. The goal is to equip the reader to compute geometric quantities rigorously and to recognize when naive formulas fail.

## Jordan measure

**Definition 14.7.** A **bounded** set $S \\subseteq \\mathbb{R}^{n}$ is **Jordan measurable** if for every $\\varepsilon > 0$ there exist elementary sets $A \\subseteq S \\subseteq B$ (finite unions of boxes) with $\\operatorname{vol}(B \\setminus A) < \\varepsilon$.

The **Jordan measure** $\\mu(S)$ is the common value of the supremum of volumes of inner approximations and the infimum of volumes of outer approximations.

**Boundary criterion.** A bounded set is Jordan measurable if and only if its topological boundary has Jordan measure zero.

**Common error:** assuming that every bounded open set is Jordan measurable. Let $F\\subset(0,1)$ be a fat Cantor set: it is closed relative to $(0,1)$, has empty interior, and has positive Lebesgue measure. The bounded open set $U=(0,1)\\setminus F$ has boundary containing $F$, so its boundary does not have measure zero and $U$ is not Jordan measurable. The rational points are not an open counterexample.

## Lebesgue measure

**Definition 14.8.** The **Lebesgue outer measure** of $S \\subseteq \\mathbb{R}^{n}$ is
$$m^{*}(S) = \\inf\\left\\{\\sum_{i=1}^{\\infty} \\operatorname{vol}(B_{i}) : S \\subseteq \\bigcup_{i=1}^{\\infty} B_{i}\\right\\},$$
where the $B_{i}$ are boxes. A set is **Lebesgue measurable** if for every $A \\subseteq \\mathbb{R}^{n}$,
$$m^{*}(A) = m^{*}(A \\cap S) + m^{*}(A \\setminus S).$$

**Theorem 14.9.** Every Jordan measurable set is Lebesgue measurable, and the measures agree. The Lebesgue measure is countably additive, complete (all subsets of null sets are measurable), and translation-invariant.

**Proof sketch.** Countable additivity follows from the Carath\\'{e}odory extension theorem applied to the premeasure on boxes. Translation invariance is inherited from boxes. Completeness is built into the definition via the Carath\\'{e}odory condition.

## Surface area

For a $C^{1}$ parametric surface $\\mathbf{r}: D \\to \\mathbb{R}^{3}$ with $D \\subseteq \\mathbb{R}^{2}$, the **surface area** is
$$\\operatorname{Area}(S) = \\iint_{D} \\|\\mathbf{r}_{u} \\times \\mathbf{r}_{v}\\|\\, du\\, dv.$$

**Hypothesis audit:** The integral is the parametric area and counts multiplicity. It equals the Hausdorff area of the image when the parametrization is injective almost everywhere and regular almost everywhere; folds or repeated sheets otherwise overcount. Isolated or boundary singularities on a parameter-null set are harmless when the area formula applies.

### Worked example: sphere area

**Problem.** Compute the surface area of the unit sphere $x^{2}+y^{2}+z^{2}=1$.

**Solution.** Use spherical coordinates:
$$\\mathbf{r}(\\theta,\\phi) = (\\sin\\theta\\cos\\phi,\\; \\sin\\theta\\sin\\phi,\\; \\cos\\theta),$$
with $\\theta \\in [0,\\pi]$, $\\phi \\in [0,2\\pi)$.

Compute partial derivatives:
$$\\mathbf{r}_{\\theta} = (\\cos\\theta\\cos\\phi,\\; \\cos\\theta\\sin\\phi,\\; -\\sin\\theta),$$
$$\\mathbf{r}_{\\phi} = (-\\sin\\theta\\sin\\phi,\\; \\sin\\theta\\cos\\phi,\\; 0).$$

Cross product:
$$\\mathbf{r}_{\\theta} \\times \\mathbf{r}_{\\phi}
= (\\sin^{2}\\theta\\cos\\phi,\\; \\sin^{2}\\theta\\sin\\phi,\\; \\sin\\theta\\cos\\theta).$$

Magnitude:
$$\\|\\mathbf{r}_{\\theta} \\times \\mathbf{r}_{\\phi}\\|
= \\sqrt{\\sin^{4}\\theta + \\sin^{2}\\theta\\cos^{2}\\theta}
= \\sin\\theta.$$

The cross product vanishes at the polar parameter edges $\\theta=0,\\pi$, so this chart is not regular there; those edges have two-dimensional parameter measure zero and do not affect the area integral. Hence
$$\\operatorname{Area} = \\int_{0}^{2\\pi} \\int_{0}^{\\pi} \\sin\\theta\\, d\\theta\\, d\\phi
= 2\\pi \\cdot [-\\cos\\theta]_{0}^{\\pi}
= 2\\pi \\cdot 2
= 4\\pi.$$

**Verification:** The result matches the standard formula $4\\pi R^{2}$ for $R=1$.

## Hausdorff measure and dimension

For a metric space $(X,d)$ and $s>0$, let $\\omega_s=\\pi^{s/2}/\\Gamma(1+s/2)$ and define the normalized **$s$-dimensional Hausdorff measure** by
$$\\mathcal{H}^{s}(S) = \\lim_{\\delta \\to 0} \\inf\\left\\{\\sum_{i} \\frac{\\omega_s}{2^s}(\\operatorname{diam} U_{i})^{s} : S \\subseteq \\bigcup_{i} U_{i},\\; \\operatorname{diam} U_{i} < \\delta\\right\\}.$$

For $s=0$, use the singleton convention, so $\\mathcal H^0$ is counting measure. The normalization makes $\\mathcal H^k$ agree with ordinary $k$-volume on smooth $k$-dimensional submanifolds; omitting the factor preserves dimension but changes this numerical agreement.

The **Hausdorff dimension** is
$$\\dim_{H}(S) = \\inf\\{s : \\mathcal{H}^{s}(S) = 0\\} = \\sup\\{s : \\mathcal{H}^{s}(S) = \\infty\\}.$$

**Boundary case:** For smooth $k$-dimensional submanifolds of $\\mathbb{R}^{n}$, the $k$-dimensional Hausdorff measure agrees with the $k$-dimensional volume computed via parametrization. For fractals, the Hausdorff dimension need not be an integer.

## The coarea formula

**Theorem 14.10 (Coarea).** Let $f: \\mathbb{R}^{n} \\to \\mathbb{R}^{k}$ be Lipschitz with $k < n$, and let $A \\subseteq \\mathbb{R}^{n}$ be Lebesgue measurable. Then, as an equality of extended nonnegative integrals,
$$\\int_{A} Jf(x)\\, dx = \\int_{\\mathbb{R}^{k}} \\mathcal{H}^{n-k}(A \\cap f^{-1}(y))\\, dy,$$
where $Jf(x) = \\sqrt{\\det(Df(x)\\, Df(x)^{T})}$ is the generalized Jacobian.

**Special case:** For nonnegative measurable $g$, or for integrable signed $g$, applying the weighted form to $f(x)=\\|x\\|$ in $\\mathbb R^n$ yields the standard formula for integration in spherical coordinates:
$$\\int_{\\mathbb{R}^{n}} g(x)\\, dx = \\int_{0}^{\\infty} \\int_{S^{n-1}} g(r\\omega)\\, r^{n-1}\\, d\\omega\\, dr.$$

**Common error:** applying the coarea formula without Lipschitz or an applicable Sobolev substitute. Infinite measure is not itself an obstruction: both sides may equal $+\\infty$. Lipschitzness also does not make every fiber have finite Hausdorff measure—a constant map has a full-dimensional exceptional fiber. Almost-everywhere finiteness follows only when the coarea integral is finite.

## Practice exercises

<a id="geometric-measure-theory-ex-1"></a>
### Exercise 1
Prove that the Cantor middle-thirds set $C \\subseteq [0,1]$ has Lebesgue measure zero.


<details>
<summary>Hint 1</summary>

Use the finite stage covers of the Cantor construction.

</details>
<details>
<summary>Hint 2</summary>

Their total length is (2/3)^n and tends to zero.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
At stage $n$ of the construction, $C$ is contained in $2^{n}$ intervals each of length $3^{-n}$. The total length is $(2/3)^{n}$, which tends to $0$ as $n \\to \\infty$. Since $C$ is contained in every stage, its Lebesgue outer measure is $0$. Hence $m(C)=0$.


</details>

<a id="geometric-measure-theory-ex-2"></a>
### Exercise 2
Compute the surface area of the torus obtained by revolving a circle of radius $r$ centered at distance $R > r$ from the origin around the $z$-axis.


<details>
<summary>Hint 1</summary>

Parametrize by the two circle angles.

</details>
<details>
<summary>Hint 2</summary>

The area factor is r(R+r cos theta), positive because R>r.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Parametrize by
$$\\mathbf{r}(\\theta,\\phi) = ((R+r\\cos\\theta)\\cos\\phi,\\; (R+r\\cos\\theta)\\sin\\phi,\\; r\\sin\\theta),$$
with $\\theta,\\phi \\in [0,2\\pi)$.

Partial derivatives:
$$\\mathbf{r}_{\\theta} = (-r\\sin\\theta\\cos\\phi,\\; -r\\sin\\theta\\sin\\phi,\\; r\\cos\\theta),$$
$$\\mathbf{r}_{\\phi} = (-(R+r\\cos\\theta)\\sin\\phi,\\; (R+r\\cos\\theta)\\cos\\phi,\\; 0).$$

Cross product magnitude: $\\|\\mathbf{r}_{\\theta} \\times \\mathbf{r}_{\\phi}\\| = r(R+r\\cos\\theta)$.

Area:
$$\\int_{0}^{2\\pi}\\int_{0}^{2\\pi} r(R+r\\cos\\theta)\\, d\\theta\\, d\\phi
= 2\\pi r \\int_{0}^{2\\pi} (R+r\\cos\\theta)\\, d\\theta
= 2\\pi r \\cdot 2\\pi R
= 4\\pi^{2} Rr.$$

**Verification:** For $r \\to 0$, the torus collapses to a circle of radius $R$ and $4\\pi^{2}Rr\\to0$. The derivation assumes $R>r$; as $R\\downarrow r$ the horn torus develops a singular inner point, so values such as $R=0$ are not regular cases of this parametrized family.


</details>

<a id="geometric-measure-theory-ex-3"></a>
### Exercise 3
Show that the Hausdorff dimension of the Cantor set $C$ is $\\ln 2 / \\ln 3$.


<details>
<summary>Hint 1</summary>

Use a stage cover for the upper bound and the Cantor probability for the lower bound.

</details>
<details>
<summary>Hint 2</summary>

Bound the probability of any short interval by a constant times its length to the exponent log2/log3.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
At stage $n$, $C$ is covered by $2^{n}$ intervals of length $3^{-n}$. For $s = \\ln 2 / \\ln 3$, we have $2^{n} (3^{-n})^{s}=1$, giving a finite upper bound for $\\mathcal H^s(C)$. For the lower bound, put probability $2^{-n}$ on every level-$n$ basic interval, producing the Cantor probability measure $\\mu$. Any interval $I$ of length between $3^{-(n+1)}$ and $3^{-n}$ meets at most two level-$n$ basic intervals, so

$\\mu(I)\\le2\\cdot2^{-n}=2\\cdot3^{-ns}\\le 2\\cdot3^s|I|^s.$

The mass-distribution principle, proved by summing this inequality over any small cover of $C$, gives a positive lower bound for $\\mathcal H^s(C)$. The same cover calculation gives zero measure above $s$ and the mass bound gives infinite measure below $s$. Hence $\\dim_H(C)=\\ln2/\\ln3$.


</details>

<a id="geometric-measure-theory-ex-4"></a>
### Exercise 4
Explain why the function $f(x) = x^{2}\\sin(1/x^{2})$ for $x \\neq 0$, $f(0)=0$, is not Lipschitz on $[0,1]$, and why it does not satisfy the Lipschitz hypothesis of the stated coarea theorem.


<details>
<summary>Hint 1</summary>

Differentiate away from zero.

</details>
<details>
<summary>Hint 2</summary>

Choose parameters where the oscillating cosine equals one; a Lipschitz derivative cannot be unbounded.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The derivative is $f'(x)=2x\\sin(1/x^2)-(2/x)\\cos(1/x^2)$ for $x\\ne0$. At $x_n=(2\\pi n)^{-1/2}$, the sine term vanishes and $f'(x_n)=-2/x_n$, whose magnitude tends to infinity. If $f$ were $L$-Lipschitz, every classical derivative would have magnitude at most $L$, a contradiction. Thus the Lipschitz hypothesis of the stated theorem fails. This exercise has $k=n=1$, so it concerns the corresponding one-dimensional area/coarea variant rather than the earlier $k<n$ statement; failure of that stated hypothesis alone does not rule out every weaker extension.


</details>

## Forward and backward connections

This chapter extends the Euclidean area and volume computations of earlier chapters (e.g., the spherical area in **Elliptic Geometry**) to a rigorous measure-theoretic framework. The convexity results of **Convexity** ensure that convex bodies have well-defined and finite measures. The coarea formula and Hausdorff measure are prerequisites for advanced topics in differential geometry and geometric analysis, and they reappear in the study of curvature and singular spaces.

## Sources

The length and Jordan proofs are supplied here from elementary real analysis. The preserved [Geometric Measure Theory](length-area-and-measure.md#geometric-measure-theory) chapter retains all its measure definitions, hypotheses, exercises, and coarea discussion. Related exact surface-area foundations are in [The First Fundamental Form](../differential-geometry-curves-surfaces/first-fundamental-form.md).

## Summary

Length is a supremum of chord sums, equal to the speed integral for C1 curves and sensitive to traversal multiplicity. Jordan area is the common limit of inner and outer finite-rectangle approximations. Its boundary-null criterion explains both smooth bounded regions and dense-set failures. Countable measure, surface multiplicity, Hausdorff dimension, and coarea require the additional frameworks preserved in the advanced reading.
`;export{e as default};