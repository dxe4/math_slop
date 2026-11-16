
# Discrete Groups and Tessellations

A repeating pattern is more than a picture: it is a set acted on by transformations, together with rules about repetition and overlap. Lattices give the simplest exact examples. Adding rotations or reflections creates more symmetry, but also imposes arithmetic restrictions. This chapter proves those restrictions and constructs domains for the resulting actions.

We develop the translation and point-group structure in the Euclidean plane, then compare local angle conditions for spherical and hyperbolic tilings. The classification into seventeen wallpaper groups is a further theorem. We do not claim to prove that classification by listing a few examples or by proving the crystallographic restriction.

The complete earlier Discrete Groups and Tessellations text is integrated in the credited earlier-material section below, retaining its original exercises and solutions. The new main exercises have separate semantic identities. Preparation is [plane transformation groups](isometries-and-plane-transformation-groups.md), elementary groups, Euclidean linear algebra, and the preceding non-Euclidean metric models.

## 1. Discrete translations and lattices

**Definition 15.1.** A subgroup H of the additive plane is discrete if some open disk about zero contains no other element of H. A rank-two lattice is
$\Lambda=\{mv+nw:m,n\in\mathbb Z\}$
for two linearly independent vectors v,w.

A discrete translation subgroup has only finitely many elements in a bounded set. To prove it, choose epsilon>0 such that unequal elements are separated by at least epsilon: their difference is a nonzero subgroup element. Cover a containing compact disk by finitely many disks of radius epsilon/3. Each such disk contains at most one subgroup element, proving finiteness.

**Theorem 15.2.** Every discrete additive subgroup of R² is either zero, an integer span of one nonzero vector, or a rank-two lattice.

*Proof.* If nonzero, choose a shortest nonzero element v. It exists by the bounded-finiteness result applied to the elements no longer than one fixed nonzero element. Every subgroup element on its line is an integer multiple of v: subtract a suitable integer multiple to leave a shorter remainder on the same line, which must be zero.

If all elements lie on that line, the proof is complete. Otherwise orient the perpendicular coordinate so some element has positive height. Subtract multiples of v to move its horizontal coordinate into [0,||v||). Among elements in that horizontal strip whose positive height is no greater than one chosen height, there are finitely many, so choose w with least positive height.

For any h in H, subtract an integer multiple of w to leave height in [0,height(w)). Then subtract a multiple of v to leave horizontal coordinate in [0,||v||). If the remaining height were positive it would contradict minimality of w. The remainder has height zero and is a subgroup element on the v-line, hence an integer multiple of v. The horizontal restriction forces it to be zero. Therefore h is an integer combination of v and w. Their heights show independence. $\square$

This proof is special to finite-dimensional Euclidean discreteness. A dense subgroup such as Z+sqrt2 Z on one real axis has two formal generators but is not a rank-two plane lattice. Independence of the actual plane vectors and separation of subgroup points are essential.

## 2. Translation domains and area

**Theorem 15.3.** For a lattice basis v,w, the closed parallelogram
$P=\{sv+tw:0\le s,t\le1\}$
covers the plane by lattice translates, and distinct translates have disjoint interiors.

*Proof.* Write a point uniquely as sv+tw with real s,t. Subtract floor(s)v+floor(t)w to leave both coefficients in [0,1). This proves coverage. If two interior representations differed by an integer combination, their coefficient differences would be integers strictly between -1 and 1, hence zero. Thus the translating vectors coincide. $\square$

Boundary points have multiple representatives in the closed domain. A half-open parallelogram gives unique orbit representatives but is not closed. Neither choice should be described as both closed and uniquely representative on every edge.

Its area is |det(v,w)|. This covolume is independent of lattice basis. If another basis is expressed by an integer matrix A, the inverse change also has integer entries, because both bases generate the same lattice. Thus det A and its reciprocal are integers and det A=±1. Determinant multiplication proves the area unchanged.

The translation action is properly discontinuous in the compact-set sense: if (K+lambda) meets K, then lambda belongs to K-K, a bounded set with finitely many lattice points. A rank-two translation quotient is compact because the closed parallelogram maps onto it. Rank zero or one cannot give a compact quotient: an unbounded perpendicular coordinate survives in the rank-one case, and both coordinates survive in the zero case.

## 3. Crystallographic restriction in full

**Theorem 15.4.** A rotation preserving a plane lattice has order 1,2,3,4, or 6.

*Proof.* Express the rotation R in a lattice basis. Its matrix A has integer entries because it sends basis vectors into the lattice; its inverse has integer entries because R preserves the lattice onto itself. Its determinant is one, since it represents a rotation. Its trace is both an integer and the basis-independent real value $2\cos\theta$.

The only integers in [-2,2] are -2,-1,0,1,2. Thus cos theta is -1,-1/2,0,1/2, or 1. Modulo a full turn these give half-turns, third-turns, quarter-turns, sixth-turns, or the identity, with the stated orders. No other angle is possible. $\square$

Each order is realizable: every lattice admits the half-turn; a square lattice admits quarter-turns; the triangular lattice admits sixth-turns and their squares, third-turns. The identity has order one. The proof does not require guessing nearest-neighbor polygons.

If g(x)=Rx+b is an isometry in a group whose translation subgroup is Lambda, then
$g\,t_v\,g^{-1}=t_{Rv}.$
Therefore its linear part R preserves Lambda by conjugation. The restriction consequently applies to rotations in a wallpaper group even when their centers are not the origin.

A local fivefold motif is not forbidden by this theorem. What is forbidden is a genuine order-five rotational symmetry compatible with a rank-two translation lattice of the entire pattern. Nonperiodic structures and finite decorations lie outside that hypothesis.

## 4. Finite point groups, without a wallpaper classification claim

Let G be a plane isometry group whose translation subgroup is a rank-two lattice. The homomorphism sending an isometry to its orthogonal linear part has that translation subgroup as kernel. Its image is finite: in a fixed lattice basis the representing matrices are integer matrices, and the entries of V^-1 R V remain bounded as R ranges over the compact orthogonal group. Only finitely many integer matrices have those bounds.

The orientation-preserving part of a finite subgroup of O(2) is cyclic. Choose its smallest positive rotation angle. Dividing any other angle by it leaves a smaller nonnegative remainder, which must be zero by minimality. The angle is 2pi/n because its repeated powers return to the identity. If a reflection is present, every orientation-reversing element is that reflection times a rotation. Thus the point group is cyclic or dihedral, and the allowed rotational n obey the crystallographic restriction.

This does not produce the seventeen wallpaper groups. The point group and lattice type leave further questions: locations of centers, reflection axes, glide reflections, and how the finite quotient is realized by actual isometries. Distinct extensions can have the same broad point-group data. The complete classification is not proved here and is not used in any subsequent argument.

## 5. A finite-sided domain for a periodic action

A useful domain can be constructed without classifying the group. Choose x with trivial stabilizer. Such points exist: the group is a finite extension of a countable lattice, and each nonidentity plane isometry fixes at most a line. A parabola meets each such line in at most two points, so countably many fixed sets cannot cover its uncountably many points.

Define the Dirichlet region
$D=\{p:\|p-x\|\le\|p-gx\|\text{ for every }g\in G\}.$
Each comparison is a closed half-plane, by expanding squared norms, so D is closed and convex.

**Proposition 15.5.** The translates of D cover the plane and have disjoint interiors. The domain is bounded and determined by finitely many half-planes.

*Proof.* An orbit Gx has finitely many points in a bounded set, since it is a finite union of lattice translates. Therefore a point p has a nearest orbit point gx: among orbit points closer than one fixed candidate only finitely many occur. Transforming the distance comparisons by g^-1 gives g^-1p in D, proving coverage.

If p is interior to D, each comparison against a distinct orbit point is strict; equality would put p on the bounding line of a genuine half-plane. Trivial stabilizer ensures different g give different orbit points. Thus p cannot simultaneously be interior to another translate, where a different orbit point would be strictly closest.

The comparisons with x±v and x±w for a lattice basis bound p-x in two independent dot-product directions, making D bounded. On a fixed bounded region containing D, sufficiently distant orbit points cannot be closer than x. Only finitely many remaining orbit points give relevant half-planes. Hence D is a finite-sided convex polygon, with nonempty interior because x is separated from the other discrete orbit points. $\square$

The proof gives a domain for these hypotheses. It does not assert that every action on every metric space has such a polygon or even a well-behaved domain.

## 6. Worked examples

### Worked example 1 — A nonrectangular translation cell

Take v=(2,0), w=(1,3). The point (7,8) has coefficients t=8/3 and s=13/6 in that basis. Subtract 2v+2w=(6,6), leaving (1,2), whose coefficients are 1/6 and 2/3 in [0,1). Thus it lies in the chosen half-open cell. The cell area is |det(v,w)|=6. The area is independent of replacing w by w+v, an integer basis change of determinant one.

### Worked example 2 — Why fifth-turn periodicity fails

A rotation of 2pi/5 would have trace 2cos(2pi/5)=(sqrt5-1)/2, not an integer. It therefore cannot preserve any rank-two lattice in any choice of basis. Drawing a regular pentagon does not contradict this: one finite pentagon supplies a rotationally symmetric set but not a two-dimensional periodic translation pattern.

### Worked example 3 — A quarter-turn domain

Let G be generated by integer translations and the quarter-turn about zero. The centered unit square [-1/2,1/2]² is a translation cell. Its four closed quadrant squares are quarter-turn images of [0,1/2]². Their interiors are disjoint and their union is the translation cell. Thus the smaller square is a G-domain with area 1/4, and its boundaries carry the appropriate identifications.

This verifies one action. It does not classify all groups with square lattices, since mirrors or glides would change the group and possibly the domain identifications.

### Worked example 4 — The triangular lattice

Let v=(1,0), w=(1/2,sqrt3/2). Rotation through pi/3 sends v to w and w to w-v, so its lattice-basis matrix has integer columns (0,1) and (-1,1). Its determinant is one and trace one, agreeing with 2cos(pi/3)=1. The lattice cell has area sqrt3/2. Subdividing its parallelograms along a diagonal yields the familiar equilateral triangular tiling.

## 7. Polygon tilings in different geometries

Suppose a regular p-gon tiling is edge-to-edge and q polygons meet at each ordinary vertex. The face interior angle must be 2pi/q. In the Euclidean plane a regular p-gon has angle (p-2)pi/p. Therefore
$\frac1p+\frac1q=\frac12.$
With p,q>=3, rewriting gives (p-2)(q-2)=4, whose positive integer possibilities are (p,q)=(3,6),(4,4),(6,3). Each is realized by the triangular, square, or regular hexagonal tiling.

For curvature -1, the geodesic polygon area is
$(p-2)\pi-\frac{2\pi p}{q}.$
It is positive exactly when 1/p+1/q<1/2. For example (7,3) gives area $5pi-14pi/3=pi/3$ per heptagon. On the unit sphere the sign reverses and positive area requires 1/p+1/q>1/2.

These are necessary local angle-and-area conditions. Turning them into a global infinite hyperbolic tiling requires an existence argument, such as an appropriate polygon reflection theorem. We do not replace that argument by the inequality alone. Likewise a sphere has finite total area, so a valid spherical tiling must also satisfy the correct finite incidence counts.

The Euclidean regular-tiling list above concerns one regular polygon type, edge-to-edge. It is not the list of wallpaper groups, not a list of every possible tiling, and not a claim that irregular or nonperiodic tessellations are impossible.

## 8. Reading periodic geometry

A robust description names the ambient metric, the transformation group, the translation lattice if any, and the chosen boundary convention for a domain. It distinguishes a finite motif from the infinite pattern and a local vertex angle condition from a global tessellation.

The [legacy chapter](discrete-groups-and-tessellations.md#chapter-13) remains available for its original exercises and broader overview. The final main chapter compares what these transformation groups preserve across Euclidean, affine, projective, spherical, elliptic, and hyperbolic geometries.

## Exercises

<a id="discrete-groups-and-tessellations-ex-1"></a>
### Exercise 15.1

Prove a discrete translation subgroup has finitely many elements in a bounded set.

<details>
<summary>Hint 1</summary>

Differences of distinct elements avoid one fixed identity neighborhood.

</details>

<details>
<summary>Hint 2</summary>

Cover a compact containing disk by finitely many small disks.

</details>

<details>
<summary>Full solution</summary>

Choose epsilon so nonzero subgroup elements have length at least epsilon. Distinct elements are therefore epsilon-separated. A bounded set fits in a compact disk, coverable by finitely many epsilon/3 disks. Each contains at most one subgroup element, proving finiteness.

</details>

<a id="discrete-groups-and-tessellations-ex-2"></a>
### Exercise 15.2

For v=(3,0),w=(1,2), find the lattice cell area and reduce (8,5) into the half-open cell.

<details>
<summary>Hint 1</summary>

Solve for its real basis coefficients.

</details>

<details>
<summary>Hint 2</summary>

Subtract their integer floors.

</details>

<details>
<summary>Full solution</summary>

The coefficients are t=5/2 and s=11/6. Subtract v+2w=(5,4), leaving (3,1), whose coefficients are 5/6 and 1/2. The cell area is |det(v,w)|=6. The half-open coefficient convention gives a unique representative.

</details>

<a id="discrete-groups-and-tessellations-ex-3"></a>
### Exercise 15.3

Show replacing a lattice basis v,w by v,w+2v preserves covolume.

<details>
<summary>Hint 1</summary>

Use the change matrix.

</details>

<details>
<summary>Hint 2</summary>

Its determinant is one.

</details>

<details>
<summary>Full solution</summary>

The new basis matrix is the old matrix times [[1,2],[0,1]], whose determinant is one and inverse has integer entries. It generates the same lattice, and determinant multiplication preserves the absolute cell area.

</details>

<a id="discrete-groups-and-tessellations-ex-4"></a>
### Exercise 15.4

Prove the rotational restriction excludes order eight.

<details>
<summary>Hint 1</summary>

Compute the rotation trace.

</details>

<details>
<summary>Hint 2</summary>

Trace must be integer in a lattice basis.

</details>

<details>
<summary>Full solution</summary>

An order-eight generator rotation has angle pi/4 or another primitive eighth-turn, with trace ±sqrt2. This is not integer. Therefore it cannot preserve a rank-two lattice. A square picture having diagonal directions does not create an order-eight periodic symmetry.

</details>

<a id="discrete-groups-and-tessellations-ex-5"></a>
### Exercise 15.5

Verify the triangular-lattice sixth-turn matrix given in the example.

<details>
<summary>Hint 1</summary>

Express the two rotated basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Columns record their integer coefficients.

</details>

<details>
<summary>Full solution</summary>

Rotation sends v to w and w to w-v. Thus the matrix is [[0,-1],[1,1]], with trace one and determinant one. Applying the rotation six times is the identity, while fewer positive powers do not fix v. Its order is six.

</details>

<a id="discrete-groups-and-tessellations-ex-6"></a>
### Exercise 15.6

Explain why a closed translation cell has boundary duplicates but disjoint interiors.

<details>
<summary>Hint 1</summary>

Compare coefficient values zero and one.

</details>

<details>
<summary>Hint 2</summary>

Their difference is a lattice vector.

</details>

<details>
<summary>Full solution</summary>

Points with a coefficient one can be shifted to coefficient zero in an adjacent cell, so boundary orbit representatives repeat. Interior coefficient differences lie strictly between -1 and 1 and cannot be nonzero integers. Therefore distinct cell interiors do not overlap.

</details>

<a id="discrete-groups-and-tessellations-ex-7"></a>
### Exercise 15.7

Derive the hyperbolic area condition for a regular (8,3) candidate tiling.

<details>
<summary>Hint 1</summary>

Each face angle is 2pi/3.

</details>

<details>
<summary>Hint 2</summary>

Use the geodesic polygon area formula.

</details>

<details>
<summary>Full solution</summary>

The area is (8-2)pi-8(2pi/3)=6pi-16pi/3=2pi/3, positive. Equivalently 1/8+1/3=11/24<1/2. This verifies local angle compatibility, not a complete global tessellation construction.

</details>

<a id="discrete-groups-and-tessellations-ex-8"></a>
### Exercise 15.8

Why does the lattice restriction not forbid a finite regular pentagon?

<details>
<summary>Hint 1</summary>

Its hypothesis includes a rank-two translation lattice.

</details>

<details>
<summary>Hint 2</summary>

A finite set has no nonzero translation preserving it.

</details>

<details>
<summary>Full solution</summary>

A nonzero translation repeatedly applied to a finite set would generate infinitely many distinct translated points, impossible. Thus the pentagon's finite rotational group has no rank-two translation subgroup. It lies outside the crystallographic theorem's hypotheses.

</details>

<a id="discrete-groups-and-tessellations-ex-9"></a>
### Exercise 15.9

For a wallpaper-type action prove its point group is finite.

<details>
<summary>Hint 1</summary>

Represent orthogonal linear parts in a lattice basis.

</details>

<details>
<summary>Hint 2</summary>

Bounded integer matrices form a finite set.

</details>

<details>
<summary>Full solution</summary>

Each linear part preserves the lattice, so its basis matrix is integral. Writing it as V^-1RV with R orthogonal bounds all entries uniformly because the orthogonal group is bounded and V is fixed. Only finitely many integral matrices satisfy those entry bounds. Hence the image point group is finite.

</details>

<a id="discrete-groups-and-tessellations-ex-10"></a>
### Exercise 15.10

Does cyclic/dihedral point-group structure prove the seventeen wallpaper classification?

<details>
<summary>Hint 1</summary>

Identify data lost by taking only linear parts.

</details>

<details>
<summary>Hint 2</summary>

Think about translations, centers, mirrors, and glides.

</details>

<details>
<summary>Full solution</summary>

No. Passing to linear parts forgets the translational components of the isometries and how the finite quotient extends the lattice. Different placements of rotations, reflections, and glide axes can yield different groups. A classification must analyze those extensions and equivalences, which is beyond the proved restriction and examples.

</details>

<a id="chapter-13"></a>
## Earlier material: Discrete Groups and Tessellations

The complete earlier source `chapter-13.md` is preserved below, including its original four exercises and full solutions. Its opening classification aspiration and the statement that every compatible hyperbolic pair yields a tiling are not proofs supplied by this chapter. The full seventeen-group classification and the general polygon-tiling existence theorem remain imported results, while the lattice, restriction, and domain proofs above are complete.

## Learning purpose

This chapter studies discrete groups of geometric transformations and their associated tessellations or fundamental domains. We classify the crystallographic groups in the plane, prove the crystallographic restriction, and construct tilings in Euclidean, spherical, and hyperbolic geometry. The reader learns to recognize when a group action is properly discontinuous and how to read a wallpaper pattern.

## Group actions and fundamental domains

Let $G$ be a group acting on a topological space $X$. The action is **properly discontinuous** if for every compact $K \subseteq X$, the set $\{g \in G : gK \cap K \neq \emptyset\}$ is finite.

A **fundamental domain** for the action is a closed set $F \subseteq X$ such that:

1. The $G$-translates of $F$ cover $X$: $\bigcup_{g \in G} gF = X$.
2. Distinct translates overlap only on their boundaries: if $g \neq h$, then $\operatorname{int}(gF) \cap \operatorname{int}(hF) = \emptyset$.

**Common error:** assuming that every group action has a fundamental domain that is a topological ball. Some actions (e.g., of Fuchsian groups on the hyperbolic plane) have fundamental domains with fractal boundary.

## Euclidean wallpaper groups

A **wallpaper group** is a discrete subgroup of the Euclidean group $E(2)$ whose translation subgroup is a two-dimensional lattice.

**Theorem 15.6 (Crystallographic restriction).** The rotational symmetry group of a two-dimensional lattice can contain only rotations of order $1$, $2$, $3$, $4$, or $6$.

**Proof.** Let $R$ be a rotation by angle $\theta$ preserving a lattice $\Lambda$. The trace of $R$ in any lattice basis is an integer, because $R$ maps lattice vectors to lattice vectors. But $\operatorname{tr}(R) = 2\cos\theta$. Hence $2\cos\theta \in \mathbb{Z}$, giving $\cos\theta \in \{0, \pm 1/2, \pm 1\}$. The corresponding angles are $\pi/2$, $\pi/3$, $2\pi/3$, $0$, $\pi$, yielding orders $4$, $6$, $3$, $1$, $2$.

**Boundary case:** Order $5$ is impossible because $2\cos(2\pi/5) = (\sqrt{5}-1)/2$ is not an integer. This explains why regular pentagons do not tile the plane edge-to-edge by translations.

## Classification

There are exactly $17$ wallpaper groups up to affine equivalence. They are distinguished by:

- the lattice type (oblique, rectangular, centered rectangular, square, hexagonal);
- the presence or absence of reflection, glide reflection, and rotation symmetries;
- the highest order of rotation ($2$, $3$, $4$, or $6$).

**Common error:** confusing local motif symmetry with global wallpaper group. A pattern may have local $5$-fold symmetry (e.g., a single flower) without the global group containing $5$-fold rotations. The wallpaper group is determined by the full infinite pattern.

## Spherical and hyperbolic tilings

### Spherical tilings

For integers $n,k\ge3$, a spherical regular $n$-gon tiling with $k$ faces meeting at each vertex satisfies
$$\frac{1}{n} + \frac{1}{k} > \frac{1}{2}.$$
The integer solutions are $(n,k) \in \{(3,3),(3,4),(3,5),(4,3),(5,3)\}$, giving the five Platonic solids projected onto the sphere.

### Hyperbolic tilings

For integers $n,k\ge3$, the analogous hyperbolic condition is
$$\frac{1}{n} + \frac{1}{k} < \frac{1}{2}.$$
There are infinitely many solutions, and each gives a regular hyperbolic tiling. For example, the $(7,3)$ tiling has heptagons meeting three at each vertex.

**Common error:** applying the Euclidean tiling condition $1/n + 1/k = 1/2$ to spherical or hyperbolic geometry. The curvature changes the angle excess or defect, so the equality is special to the flat case.

## Worked example: fundamental domain for a lattice

**Problem.** Let $\Lambda$ be the lattice in $\mathbb{R}^{2}$ generated by $v_{1}=(2,0)$ and $v_{2}=(1,1)$. Find the area of a fundamental parallelogram and verify that the quotient torus has area equal to that of the fundamental domain.

**Solution.** The fundamental parallelogram has vertices $(0,0)$, $(2,0)$, $(3,1)$, $(1,1)$. Its area is the absolute value of the determinant of the matrix with columns $v_{1},v_{2}$:
$$\operatorname{Area} = |\det\begin{pmatrix}2&1\\0&1\end{pmatrix}| = 2.$$
The quotient $\mathbb{R}^{2}/\Lambda$ is a torus. By definition of the quotient measure, the torus inherits area $2$ from the fundamental domain. This is verified by integrating the constant function $1$ over the parallelogram.

## Practice exercises

<a id="chapter-13-ex-1"></a>
### Exercise 1
Prove that every discrete subgroup of $SO(2)$ is finite cyclic. Contrast this with the subgroup generated by an irrational rotation.


<details>
<summary>Hint 1</summary>

Use a small identity neighborhood containing no other subgroup element.

</details>
<details>
<summary>Hint 2</summary>

A finite cover of the compact circle by sufficiently small translates bounds the number of subgroup elements.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Identify $SO(2)$ with the compact circle group. If $H$ is discrete, there is an identity neighborhood $U$ containing no other point of $H$. Choose a smaller neighborhood $V$ with $V^{-1}V\subset U$. Compactness gives finitely many translates of $V$ covering the circle, and each translate contains at most one point of $H$; otherwise the quotient of two such points would lie in $U\cap H$. Hence $H$ is finite. Every finite subgroup of the circle consists of roots of unity and is cyclic. By contrast, if $\alpha/2\pi$ is irrational, the cyclic subgroup generated by rotation through $\alpha$ is infinite and dense, hence not discrete.


</details>

<a id="chapter-13-ex-2"></a>
### Exercise 2
Give fundamental domains for three concrete actions: (a) translations by $(2,0)$ and $(0,1)$; (b) the same translations together with the half-turn about the origin; and (c) translations by $(1,0),(0,1)$ together with quarter-turns about lattice points. Explain why this does not by itself classify all wallpaper groups.


<details>
<summary>Hint 1</summary>

First use a translation cell.

</details>
<details>
<summary>Hint 2</summary>

Then divide that cell into images under the additional half-turn or quarter-turn, keeping boundary identifications.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
(a) A $2\times1$ rectangle, such as $[0,2]\times[0,1]$, is a translation fundamental domain. (b) The half-turn doubles the stabilizing symmetry relative to the translation subgroup, so a $1\times1$ rectangle is a fundamental domain up to boundary identifications. (c) A square of side $1/2$ is a fundamental domain up to boundary identifications; four quarter-turn images fill a unit translation cell. These examples show that square domains are possible for a $p4$ action and that adding point symmetries reduces domain area. A full classification must also track lattice type, mirrors, glides, rotation centers, and boundary stabilizers; the three examples do not supply the list of seventeen.


</details>

<a id="chapter-13-ex-3"></a>
### Exercise 3
Verify that the regular $(7,3)$ hyperbolic tiling satisfies the hyperbolic angle condition.


<details>
<summary>Hint 1</summary>

Compare 1/7+1/3 with one half.

</details>
<details>
<summary>Hint 2</summary>

This checks the local angle condition, not the global tiling existence theorem.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
A regular heptagon has interior angle $(7-2)\pi/7 = 5\pi/7$ in Euclidean geometry. In hyperbolic geometry, the interior angle is smaller. For three heptagons to meet at a vertex, the sum of the three interior angles must be $2\pi$. In the hyperbolic plane, the angle sum at a vertex of a regular tiling is exactly $2\pi$ by construction. The condition $1/7 + 1/3 < 1/2$ (since $10/21 < 10.5/21$) verifies the necessary hyperbolic angle-and-area condition and excludes Euclidean or spherical geometry; global existence of the tiling remains the imported theorem identified above.


</details>

<a id="chapter-13-ex-4"></a>
### Exercise 4
Construct a fundamental domain for the action of $\mathbb{Z}^{2}$ on $\mathbb{R}^{2}$ by translations and compute the Euler characteristic of the quotient torus.


<details>
<summary>Hint 1</summary>

Identify opposite edges of the unit square.

</details>
<details>
<summary>Hint 2</summary>

Count cells after identification rather than counting all four drawn corners separately.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The unit square $[0,1]\times[0,1]$ is a fundamental domain for $\mathbb{Z}^{2}$ acting by integer translations. The quotient is the torus $T^{2}$. A cell decomposition has one vertex (all corners identified), two edges (horizontal and horizontal, vertical and vertical), and one face (the square interior). Hence
$$\chi(T^{2}) = V - E + F = 1 - 2 + 1 = 0,$$
which matches the standard result for a torus.


</details>

## Forward and backward connections

This chapter applies the group theory and transformation concepts from **Isometries, Similarities, Affine and Projective Transformations** to discrete settings. The crystallographic restriction and wallpaper classification are classical applications of Euclidean isometries from **Neutral Geometry**. Spherical and hyperbolic tilings connect directly to **Elliptic Geometry** and **Hyperbolic Geometry**. The next and final chapter, **Summary and Modern Directions**, surveys open problems and research directions in modern geometry.

## Sources

The lattice, restriction, domain, and angle-count arguments are supplied directly. The preserved [Discrete Groups and Tessellations legacy reading](discrete-groups-and-tessellations.md#chapter-13) retains its original statements and exercises. Metric dependencies are [Hyperbolic Geometry](hyperbolic-geometry.md), [Elliptic Geometry](elliptic-geometry.md), and the plane-transformation chapter. No full wallpaper classification is claimed.

## Summary

Discrete translation subgroups have rank at most two, and rank-two lattices supply parallelogram domains with basis-independent covolume. Integral rotation matrices prove the allowed orders 1,2,3,4,6. Periodic isometry actions have finite point groups and finite-sided Dirichlet domains under the stated hypotheses. Regular polygon angle conditions distinguish the three curvature signs, while global tiling existence and the seventeen wallpaper classification remain separate questions.
