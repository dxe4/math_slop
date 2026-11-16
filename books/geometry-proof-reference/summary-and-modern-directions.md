
# Summary and Modern Directions

Geometry changes when we change the objects or the transformations we agree to preserve. A Euclidean motion preserves distances; an affine map preserves line ratios and convex combinations; a projective map preserves incidence and cross-ratio. These are related structures, not competing names for the same one.

This closing chapter develops that comparison mathematically. It proves the Euclidean isometry form, identifies affine transformations inside projective transformations, counts finite model groups, and explains a basic large-scale group invariant. It also gives a rigorous example of construction impossibility. These arguments connect the book's themes before the modern outlook points to further resources.

The complete earlier Open Problems and Modern Directions text is integrated below with its original statements, exercises, and stronger background. This closing chapter does not claim to prove its deep research theorems.

## 1. Every Euclidean isometry is orthogonal plus translation

**Theorem 16.1.** A distance-preserving map f:R²→R² has the form f(x)=Qx+b with Q orthogonal. Conversely every such map preserves distance.

*Proof.* Put b=f(0) and g(x)=f(x)-b. Then g fixes zero and preserves norms and pairwise distances. Polarization gives
$\langle g(x),g(y)\rangle
=\frac{\|g(x)\|^2+\|g(y)\|^2-\|g(x)-g(y)\|^2}{2}
=\langle x,y\rangle.$
The vectors g(e1),g(e2) are therefore orthonormal and form a basis of R². For any x, its inner products against them are x1,x2, so
$g(x)=x1g(e1)+x2g(e2)$.
Thus g is the orthogonal linear map Q with those columns. Conversely ||Q(x-y)||=||x-y|| proves distance preservation. $\square$

Surjectivity follows from this formula; it did not need to be assumed separately in this two-dimensional whole-space statement. A distance-preserving map defined only on a small subset need not admit the same elementary global argument without additional hypotheses.

The full Euclidean group is therefore O(2) combined with translations. Its orientation-preserving subgroup uses rotations, while orientation reversal introduces reflections or glide reflections. Adding a positive uniform scale gives similarities, with matrix cQ. A genuine isometry fixes the scale at c=1.

## 2. Affine structure inside projective structure

An affine transformation has f(x)=Mx+b with M invertible. It preserves every affine combination:
$f((1-t)x+ty)=(1-t)f(x)+tf(y).$
Consequently it preserves parallelism, midpoints, ratios of collinear directed displacements, and convexity. Triangle and polygon areas multiply by |det M|. Distances and angles need not be preserved.

**Proposition 16.2.** The projective transformations preserving the chosen line z=0 are exactly affine transformations in the chart z=1.

*Proof.* Write an invertible projective matrix in block form
$\begin{pmatrix}M&b\\r^T&c\end{pmatrix}.$
Preserving z=0 means r dot x=0 for every two-vector x, so r=0. Invertibility then forces c nonzero and M invertible. Scale the entire matrix by 1/c to make c=1. On z=1 its action is x↦Mx+b, with the scaled blocks. Conversely every such block matrix preserves z=0 and gives an affine map. $\square$

Thus an affine chart contains extra structure: a designated infinity line. Projective geometry forgets that designation. Euclidean geometry retains still more, namely an inner product on the affine displacement vectors.

A linear map preserving all Euclidean angles is a similarity. Its two basis images must be perpendicular because the original axes are. The perpendicular vectors e1+e2 and e1-e2 must also have perpendicular images, forcing the two column lengths equal. Hence M^TM=c²I and M=cQ. This short argument proves why an arbitrary affine map is not conformal.

### Proposition 16.3 — Convexity under a restricted projective map

Suppose a projective map is written f(x)=(Mx+b)/d(x) on an affine chart, with affine scalar denominator d. If C is convex and d has one strict sign on C, then f(C) is convex.

*Proof.* For x,y in C, evaluate the map on (1-t)x+ty:
$f((1-t)x+ty)
=\frac{(1-t)d(x)f(x)+td(y)f(y)}
{(1-t)d(x)+td(y)}.$
The coefficient of f(y) is
$s=td(y)/((1-t)d(x)+td(y))$.
Same-sign nonzero denominators make s continuous and increasing from zero to one as t runs from zero to one. Thus the image of the segment is exactly the segment between the images. Since the original segment lies in C, that image segment lies in f(C). $\square$

The sign condition matters. A segment crossing the denominator-zero line passes through infinity in the projective picture and has no single affine segment image. Convexity is fundamentally affine; the restricted statement explains when a projective chart change still respects it.

## 3. Sphere, elliptic quotient, and their matrix action

An orthogonal three-by-three matrix preserves the unit sphere, great circles, and dot products, hence spherical distance. It also descends to the elliptic quotient because Q(-p)=-Qp. Its quotient action preserves arccos|p dot q|.

**Proposition 16.4.** The kernel of the orthogonal action on the real projective plane is exactly {I,-I}.

*Proof.* If Q fixes every one-dimensional subspace, it sends each coordinate vector ei to epsilon_i ei, where epsilon_i is ±1 by orthogonality. Fixing the line generated by ei+ej forces epsilon_i=epsilon_j. Thus all signs agree and Q=±I. Conversely both matrices fix every antipodal class. $\square$

The natural elliptic matrix group is therefore PO(3)=O(3)/{±I}. The raw sphere action has a different kernel: -I sends each point to its distinct antipode, so acts nontrivially there. This is a group-theoretic version of the sphere/elliptic distinction proved earlier.

For the hyperbolic half-plane, real determinant-one fractional linear matrices act isometrically, with matrices differing by sign giving the same map. This supplies PSL(2,R), together with orientation-reversing reflections if those are allowed. The exact distance invariance was proved in [Hyperbolic Geometry](hyperbolic-geometry.md). We use these natural model groups without claiming that one group table alone proves every possible abstract geometric classification.

## 4. Finite transformation counts

Over a finite field Fq, an invertible two-by-two matrix has q²-1 choices for its first column and q²-q choices for the second, since the second must lie outside the first column's one-dimensional span. Hence
$|\mathrm{GL}(2,q)|=(q^2-1)(q^2-q).$
Adding q² translations gives
$|\mathrm{AGL}(2,q)|=q^2(q^2-1)(q^2-q).$
These affine transformations preserve lines and the finite affine incidence structure.

Similarly, choose three independent columns in Fq³ in sequence. There are q³-1, q³-q, and q³-q² choices. Scalar matrices with nonzero scalar form the kernel of the projective action, so
$|\mathrm{PGL}(3,q)|
=\frac{(q^3-1)(q^3-q)(q^3-q^2)}{q-1}.$
To verify that kernel, a matrix fixing every point line makes each coordinate vector an eigenvector; fixing each line ei+ej forces the corresponding eigenvalues equal. Thus it is scalar.

These counts describe the displayed linear model groups. A general finite field may have nontrivial field automorphisms, and an abstract finite plane may not be a field plane. Therefore we do not identify PGL with every incidence automorphism group in every setting without further analysis.

## 5. Construction impossibility as a statement about tools

A ruler-and-compass construction begins from specified points and applies finitely many allowed line, circle, and intersection operations. Its limitations belong to that formal toolkit, not to whether one can draw an approximate picture.

**Theorem 16.5 (necessary degree condition).** Starting with rational coordinates, every constructible real coordinate is algebraic of degree a power of two over Q.

*Proof.* Suppose coordinates so far belong to a field K. Line-line intersection solves linear equations over K. Intersecting a line and circle reduces to a quadratic equation over K. Subtracting two distinct circle equations gives a line, so circle-circle intersection also reduces to that case. Thus every new coordinate belongs either to K or to a field K(sqrt d) with vector-space dimension at most two over K.

A finite construction gives a tower whose total dimension over Q is a power of two: bases multiply along a tower, as expansion of each successive basis coefficient shows. If x belongs to its final field, the dimension of Q(x) over Q divides that total dimension by the same tower-basis argument. It is therefore a power of two. Its minimal polynomial degree is that dimension. $\square$

This is a necessary condition, not an assertion that every algebraic number with a power-of-two degree is constructible.

For cube duplication, x=cuberoot2 satisfies x³-2=0. A reducible cubic over Q would have a rational root; the rational-root criterion leaves only ±1,±2, none of which works. Thus the minimal degree is three, not a power of two, proving impossibility for this toolkit.

General angle trisection also fails. Trisecting a constructible 60-degree angle would construct 20 degrees. Put y=2cos20°. The triple-angle identity gives y³-3y-1=0. Its only possible rational roots are ±1, neither a root, so its degree is three. The same obstruction applies. Particular angles can still be trisected, and stronger allowed operations define a different construction problem.

Circle squaring additionally uses the deep transcendence of pi; that arithmetic theorem is not proved here. Its statement and the broader construction discussion remain in the retained modern-directions reading. A new drawing tool does not automatically bypass every obstruction.

## 6. A basic large-scale group theorem

Given a finite symmetric generating set S of a group, word length |g|S is the shortest number of generators needed to write g. Its distance is dS(g,h)=|g^-1h|S. These are graph distances in the Cayley graph.

**Theorem 16.6.** Two finite generating sets S,T give bilipschitz-comparable word metrics.

*Proof.* Every generator s in S is some finite T-word. Let M be the largest of their T-lengths. Replacing letters in a shortest S-word gives |g|T<=M|g|S. Interchanging S and T gives |g|S<=N|g|T for another finite N. Apply the inequalities to g^-1h. $\square$

Exact distances depend on generators; their large-scale comparison does not. For Z² with the standard two axis generators and their inverses, word length is |m|+|n|: each move changes at most one coordinate by one, giving the lower bound, and axis moves attain it. There are 4k elements at positive distance k, so the radius-r integer ball has
$1+\sum_{k=1}^r4k=1+2r(r+1)$
elements. Its growth is quadratic. The comparison theorem shows another finite generating set changes radii by bounded factors and preserves that growth order.

The much deeper classification of polynomial-growth groups is not proved by these inequalities. It belongs to the geometric-group-theory outlook of the retained reading. Our elementary result is the precise invariance statement on which that viewpoint begins.

## 7. Worked comparisons

### Worked example 1 — Area preservation is weaker than motion

The shear M=[[1,1],[0,1]] has determinant one, so it preserves polygon area. It sends e1 to (1,0) and e2 to (1,1), which meet at 45 degrees rather than 90 degrees. The second vector's length is sqrt2 rather than one. Thus this affine map preserves parallelism, convexity, and area but is neither an isometry nor a similarity.

### Worked example 2 — Projective incidence without midpoint preservation

Use f(x,y)=(x/(1+x),y/(1+x)) on x≠-1. The endpoints (0,0),(2,0) map to (0,0),(2/3,0). Their midpoint maps from (1,0) to (1/2,0), while the midpoint of the image endpoints is (1/3,0).

The entire original segment has positive denominator, so its image is still a segment by Proposition 16.3. The projective map preserves the line and its incidence but reparametrizes the affine ratio. Cross-ratio of four ordered collinear points remains preserved, as proved in the projective chapter.

### Worked example 3 — Finite group counts are concrete

For q=3, the affine model group has order $9(9-1)(9-3)=432$. There are nine possible images of the origin, and after fixing that image forty-eight invertible linear displacement maps.

For q=2, the projective group has order $(8-1)(8-2)(8-4)=168$. In the Fano plane this is in fact the full collineation group: choose images of three ordered noncollinear points in 7 times 6 times 4 ways. The remaining four points are reconstructed as third points on their joining lines and the final remaining point. Every such independent triple is realized by a binary linear map. This special full-group conclusion uses the two-element field and should not be copied unqualified to other planes.

### Worked example 4 — Exact distance changes, coarse growth does not

In standard Z² generators, (n,n) has length 2|n|. Add the diagonal generator (1,1) and its inverse; its new length is |n|. Exact lengths change by a factor two on this sequence. The finite-generating-set theorem still compares both entire metrics by constants, so their quadratic growth behavior agrees. Large-scale invariance is weaker than equality of distances.

## 8. Comparison of model geometries

The table records natural groups and preserved structures established or used in this book. A group action is not itself a proof that all models of an axiom package are isomorphic.

| Geometry | Objects and line model | Natural model group | Structure retained |
|---|---|---|---|
| Euclidean plane | points in R², ordinary lines | O(2) with translations | distances, angles, congruence |
| Similarity plane | same points and lines | positive scales times Euclidean motions | angles and uniform ratios |
| Real affine plane | points in R², affine lines | GL(2,R) with translations | parallelism, affine combinations, convexity |
| Real projective plane | one- and two-dimensional subspaces of R³ | PGL(3,R) | incidence and ordered cross-ratio |
| Unit sphere | unit vectors, great circles | O(3) | spherical distance and angles |
| Unit elliptic plane | antipodal classes, quotient great circles | PO(3) | elliptic distance and projective incidence |
| Hyperbolic plane | disk or upper-half-plane geodesics | PSL(2,R) and reflections | its metric, angles, and geodesic incidence |
| Affine field plane | Fq² and field-linear lines | AGL(2,q) | finite affine incidence |
| Projective field plane | subspaces of Fq³ | PGL(3,q), with possible semilinear extensions | finite projective incidence |

The sphere's diameter is pi and the unit elliptic plane's diameter is pi/2. The affine and projective rows do not come with a preferred Euclidean distance. Finite incidence alone supplies neither a real order nor curvature. Reading the table as one universal metric hierarchy would therefore lose the distinctions it is meant to clarify.

## 9. Modern directions by reference

Computational geometry turns incidence and convexity into algorithms. The relevant bridge is not just drawing many points: it is a mathematically specified predicate, exact or bounded-error evaluation, and an explicit degeneracy convention. The existing [analytic and computational geometry book](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) gives concrete orientation and uncertainty arguments.

Differential geometry asks how local metric derivatives constrain surfaces. The completed [curves and surfaces book](../differential-geometry-curves-surfaces/theorema-egregium.md) proves intrinsic Gaussian curvature and [Gauss–Bonnet](../differential-geometry-curves-surfaces/gauss-bonnet.md). Those are further theorems with calculus and regularity hypotheses, not consequences of the group table alone.

Projective conics lead toward algebraic geometry: polynomial equations define sets, and transformations change their presentations while preserving selected algebraic data. The retained [projective conic treatment](../conics-solids-projections/projective-geometry.md) supplies that next concrete step. A conic classification is not a classification of arbitrary algebraic varieties or their moduli.

Geometric group theory begins with actions and word metrics such as those just proved comparable. Hyperbolic group spaces, growth theorems, and moduli quotients require additional definitions and results. The separate retained [modern-directions chapter](summary-and-modern-directions.md#chapter-14) keeps its original discussions and scope qualifications.

Finally, measure and topology provide languages for limits and global obstructions that finite diagrams cannot resolve. The unchanged [advanced measure reading](length-area-and-measure.md#geometric-measure-theory) and [topology proof book](../topology-proof-counterexample/topological-manifolds-and-local-euclidean-structure.md) remain available. Their stronger hypotheses and imported theorems should remain visible when their conclusions are used.

A useful next mathematical project is therefore a precise extension: change one hypothesis, name the retained structure, and either prove the new statement or build a countermodel. The finite proofs in this closing chapter illustrate that method without claiming to settle the deeper classifications to which they point.

## Exercises

<a id="summary-and-modern-directions-ex-1"></a>
### Exercise 16.1

Prove a whole-plane Euclidean isometry fixing zero preserves dot products.

<details>
<summary>Hint 1</summary>

Use polarization.

</details>

<details>
<summary>Hint 2</summary>

All norms and pairwise distances are preserved.

</details>

<details>
<summary>Full solution</summary>

The identity <x,y>=(||x||²+||y||²-||x-y||²)/2 involves only distances from zero and between points. A distance-preserving map fixing zero preserves every term, hence the dot product. Comparing against its orthonormal basis images then proves its linear orthogonal form.

</details>

<a id="summary-and-modern-directions-ex-2"></a>
### Exercise 16.2

Give an affine area-preserving map that is not an isometry.

<details>
<summary>Hint 1</summary>

Use a shear.

</details>

<details>
<summary>Hint 2</summary>

Check determinant and the image of e2.

</details>

<details>
<summary>Full solution</summary>

The map (x,y)->(x+y,y) has determinant one and preserves polygon area. It sends e2 from length one to sqrt2, so it is not an isometry. It also changes the angle between coordinate axes, so it is not a similarity.

</details>

<a id="summary-and-modern-directions-ex-3"></a>
### Exercise 16.3

Identify the affine subgroup condition on the last row of a projective matrix.

<details>
<summary>Hint 1</summary>

The infinity line consists of vectors with last coordinate zero.

</details>

<details>
<summary>Hint 2</summary>

Its image must also have last coordinate zero.

</details>

<details>
<summary>Full solution</summary>

If the last row is (r1,r2,c), preservation of infinity requires r1x+r2y=0 for every x,y, so r1=r2=0. Invertibility gives c nonzero; scalar normalization sets c=1. The remaining block matrix yields an invertible affine map.

</details>

<a id="summary-and-modern-directions-ex-4"></a>
### Exercise 16.4

Why does -I act differently on the sphere and its elliptic quotient?

<details>
<summary>Hint 1</summary>

Compare a vector and its antipode.

</details>

<details>
<summary>Hint 2</summary>

The quotient identifies precisely that pair.

</details>

<details>
<summary>Full solution</summary>

On the raw sphere -I sends p to -p, a distinct point, so its action is not the identity. On the elliptic quotient they represent the same class, so -I fixes every point. This is why the natural elliptic group factors by {±I}.

</details>

<a id="summary-and-modern-directions-ex-5"></a>
### Exercise 16.5

Count GL(2,2) and AGL(2,2).

<details>
<summary>Hint 1</summary>

Choose independent columns.

</details>

<details>
<summary>Hint 2</summary>

Then choose a translation.

</details>

<details>
<summary>Full solution</summary>

There are 2²-1=3 choices for the first nonzero column and 2²-2=2 for the second outside its span. Thus GL(2,2) has six elements. Four translations give AGL(2,2) order 24. These are counts for the field-model transformation group.

</details>

<a id="summary-and-modern-directions-ex-6"></a>
### Exercise 16.6

Prove cube duplication violates the necessary constructible-degree condition.

<details>
<summary>Hint 1</summary>

Show x³-2 is irreducible over Q.

</details>

<details>
<summary>Hint 2</summary>

A cubic is reducible only if it has a rational root.

</details>

<details>
<summary>Full solution</summary>

The rational-root criterion permits only ±1,±2, none a root of x³-2. Hence cuberoot2 has degree three over Q. A finite ruler-and-compass construction from rational data lies in a tower of quadratic extensions, so its coordinate degree must divide a power of two. Three does not, proving impossibility for that toolkit.

</details>

<a id="summary-and-modern-directions-ex-7"></a>
### Exercise 16.7

Show equal degree being a power of two is only the necessary condition proved here.

<details>
<summary>Hint 1</summary>

Review the logical direction of the tower argument.

</details>

<details>
<summary>Hint 2</summary>

No converse construction algorithm was supplied.

</details>

<details>
<summary>Full solution</summary>

The theorem begins with an existing construction and derives a quadratic tower and degree restriction. It does not show that an arbitrary algebraic number of such degree embeds in a tower of quadratic fields. Therefore passing the degree check alone does not establish constructibility; an explicit tower or further theorem is needed.

</details>

<a id="summary-and-modern-directions-ex-8"></a>
### Exercise 16.8

Prove the two word-metric comparison constants exist for finite generating sets.

<details>
<summary>Hint 1</summary>

Each generator has a finite word in the other set.

</details>

<details>
<summary>Hint 2</summary>

Take the maximum over finitely many generators.

</details>

<details>
<summary>Full solution</summary>

Let M=max over s in S of |s|T, finite because S is finite and T generates. Substituting those T-words in a shortest S-word gives |g|T<=M|g|S. Reverse the roles for N. Applying to g^-1h compares the metrics.

</details>

<a id="summary-and-modern-directions-ex-9"></a>
### Exercise 16.9

Count the standard Z² word ball of integer radius r.

<details>
<summary>Hint 1</summary>

There are 4k points on the shell k>0.

</details>

<details>
<summary>Hint 2</summary>

Sum the arithmetic series.

</details>

<details>
<summary>Full solution</summary>

For |m|+|n|=k, the four axis points and four sign choices for each split with both coordinates positive give 4+4(k-1)=4k. Including the origin and summing yields 1+4r(r+1)/2=1+2r(r+1). The exact count is quadratic.

</details>

<a id="summary-and-modern-directions-ex-10"></a>
### Exercise 16.10

Why can the comparison table not assign Euclidean distance to every geometry?

<details>
<summary>Hint 1</summary>

Inspect affine and projective transformations.

</details>

<details>
<summary>Hint 2</summary>

A general shear or homography changes length.

</details>

<details>
<summary>Full solution</summary>

Those structures retain incidence or affine combinations without selecting an inner product. Their natural groups include maps changing Euclidean lengths and angles. Finite incidence likewise contains no preferred real metric. The spherical, elliptic and hyperbolic rows include additional metric choices, so one cannot transfer their distance claims to every row.

</details>

<a id="chapter-14"></a>
## Open Problems and Modern Directions

The complete earlier source `chapter-14.md` is preserved below with its original research statements, exercise headings, and full solutions. Its research-status paragraphs belong to that earlier exposition, rather than a newly performed literature survey. The inscribed-square smooth scope is regular C1 Jordan embeddings, as its full solution specifies. Deep packing, growth, uniformization/moduli, and topological classification inputs are referenced statements, not theorems proved by the elementary comparisons above.

## Learning purpose

This final chapter surveys open problems, modern research directions, and the interplay between geometry and other fields. It serves as a bridge from the proof-reference material of this book to current mathematical practice. The reader learns to read research statements critically, to recognize when a geometric problem remains open, and to locate appropriate references.

## The status of classical problems

### The parallel postulate

Euclid's parallel postulate was shown independent of the neutral axiom package through hyperbolic models in which the neutral axioms hold and Euclidean uniqueness of parallels fails. Elliptic geometry is a useful contrasting geometry, but it changes global incidence and order and is therefore not itself a neutral countermodel. The historical path was long: Lobachevsky and Bolyai developed hyperbolic geometry systematically, while Gauss investigated related ideas without publishing a comparable treatise.

**Modern perspective:** Relative-independence arguments use explicit models. The Poincaré disk or upper half-plane supplies the relevant model of the neutral axioms with many parallels. The sphere and elliptic quotient instead demonstrate what changes when incidence and order are also replaced. The proof-reference value lies in checking, for every Euclidean theorem, exactly which axiom package its proof uses.

### Squaring the circle, angle trisection, and cube duplication

These three classical problems were proved impossible in the nineteenth century using field theory:

- **Squaring the circle:** $\pi$ is transcendental (Lindemann, 1882), so a square with area equal to a given circle cannot be constructed with ruler and compass.
- **Angle trisection:** Trisecting a general angle requires solving a cubic equation that is not solvable by square roots alone (Wantzel, 1837).
- **Cube duplication:** Doubling a cube requires constructing $\sqrt[3]{2}$, which has minimal polynomial $x^{3}-2$ of degree $3$, not a power of $2$.

**Common error:** confusing impossibility with difficulty or treating all three problems alike under stronger tools. Neusis, marked-ruler, and origami constructions can solve the relevant cubic equations for general angle trisection and cube duplication. Their usual algebraic operations still do not construct the transcendental length involving $\pi$ required for exact circle squaring.

## Modern research directions

### Discrete and computational geometry

Discrete geometry studies combinatorial properties of finite point sets, arrangements, and polytopes. Key results include:

- **Erdős–Szekeres theorem:** For every $n$, there exists a minimal number $ES(n)$ such that any set of $ES(n)$ points in general position in $\mathbb{R}^{2}$ contains $n$ points in convex position. The exact value of $ES(n)$ is unknown for large $n$; the best bounds are roughly $2^{n-2} \leq ES(n) \leq 2^{n+o(n)}$.
- **Kepler conjecture:** Among packings of congruent balls with disjoint interiors in $\mathbb{R}^{3}$, the maximum upper occupied-volume density is $\pi/\sqrt{18} \approx 0.74048$, attained by the face-centered cubic packing. Proved by Hales in 1998 and formally verified in 2014.

### Geometric group theory

Geometric group theory studies groups by their actions on metric spaces. A finitely generated group $G$ with generating set $S$ has a **Cayley graph** whose vertices are group elements and edges connect $g$ to $gs$ for $s \in S$. The large-scale geometry of this graph (its quasi-isometry class) is independent of the finite generating set.

**Theorem (Gromov's polynomial growth).** A finitely generated group has polynomial growth if and only if it has a nilpotent subgroup of finite index. This deep result connects geometry, algebra, and analysis.

### Algebraic geometry and moduli spaces

Moduli spaces parametrize families of geometric objects. For **complex** elliptic curves, the coarse analytic moduli space is the underlying quotient $SL(2,\mathbb{Z})\backslash\mathbb{H}$, equivalently the $j$-line as a coarse space. The effective orbifold $PSL(2,\mathbb Z)\backslash\mathbb H$ records special stabilizers, while the modular stack $[\mathbb H/SL(2,\mathbb Z)]$ also retains the generic central automorphisms. Elliptic curves over other base fields require different moduli language.

## Open problems

### The inscribed square problem

**Problem (Toeplitz, 1911).** Does every Jordan curve in $\mathbb{R}^{2}$ contain four points that are the vertices of a square?

**Status:** Proved for convex curves and for $C^{1}$ curves, but open for arbitrary continuous Jordan curves. The related problem of inscribed rectangles (with prescribed aspect ratio) is also open in full generality.

### The happy ending problem

**Problem (Erdős–Szekeres).** Determine the exact value of $ES(n)$, the minimum number of points in general position that guarantee $n$ points in convex position.

**Status:** Known for $n \leq 6$ (with $ES(6)=17$), but open for $n \geq 7$. The conjecture $ES(n) = 2^{n-2}+1$ is widely believed but unproved.

### The smooth Poincaré conjecture in dimension 4

The topological Poincaré conjecture is proved in all dimensions. Smooth uniqueness is standard in dimensions at most $3$, while dimension $4$ remains open: it is unknown whether every smooth manifold homeomorphic to $S^4$ is diffeomorphic to the standard sphere. In higher dimensions the blanket smooth statement is false; exotic spheres, including examples in dimension $7$, are homeomorphic but not diffeomorphic to the standard sphere.

## Reading research literature

A proof-reference book prepares the reader to evaluate research claims. When reading a research paper in geometry, ask:

1. **What are the hypotheses?** Are they stated precisely? Are there hidden assumptions (e.g., smoothness, compactness, orientability)?
2. **What is the model?** Is the result proved in a specific model (e.g., $\mathbb{R}^{n}$) or axiomatically?
3. **What is the proof technique?** Is it constructive, existential, or computational? Does it generalize?
4. **What are the counterexamples?** Does the paper discuss boundary cases or known failures?
5. **What remains open?** Does the paper identify natural extensions or conjectures?

## Practice exercises

<a id="chapter-14-ex-1"></a>
### Exercise 1
Explain why the impossibility of angle trisection with ruler and compass does not imply that no angle can be trisected by any means.


<details>
<summary>Hint 1</summary>

List the allowed ruler-and-compass operations.

</details>
<details>
<summary>Hint 2</summary>

Changing the allowed tools changes the formal construction problem.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The impossibility result is relative to the axioms of ruler-and-compass construction: starting from two points, one may draw lines through constructed points and circles with constructed centers and radii, and one may intersect these lines and circles. This restricted toolkit cannot construct cube roots or trisect general angles. However, with a marked ruler (neusis construction) or with origami (Huzita–Hatori axioms), angle trisection is possible. The impossibility is a statement about a specific formal system, not about physical possibility in general.


</details>

<a id="chapter-14-ex-2"></a>
### Exercise 2
State the Kepler conjecture precisely and verify the density of the face-centered cubic packing.


<details>
<summary>Hint 1</summary>

Use one cubic face-centered cell.

</details>
<details>
<summary>Hint 2</summary>

Find its side from a face diagonal and count fractional sphere contributions.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
**Kepler conjecture:** Let $P$ be the union of congruent closed balls of radius $r>0$ in $\mathbb{R}^{3}$ with pairwise disjoint interiors. Its upper occupied-volume density is $\overline\delta(P)=\limsup_{R\to\infty}\operatorname{vol}(P\cap B_R(0))/\operatorname{vol}(B_R(0))$, where $B_R(0)$ is the radius-$R$ ball about the origin. Then $\overline\delta(P)\le\pi/\sqrt{18}$. This formulation does not assume that every packing has an ordinary density limit.

**Density verification for FCC:** Let the ball radius be $r$. Along a face diagonal, four radii span the diagonal, so the cubic cell side satisfies $a\sqrt2=4r$ and hence $a=2\sqrt2r$. The cell contains $8/8+6/2=4$ balls. Their volume is $16\pi r^3/3$, while the cell volume is $(2\sqrt2r)^3=16\sqrt2r^3$. Periodicity makes the ordinary occupied-volume density exist: cells meeting the boundary of $B_R(0)$ contribute only $O(R^2)$ volume against $O(R^3)$ total volume. Thus its density, and hence its upper density, is
$$\frac{16\pi r^{3}/3}{16\sqrt{2}r^{3}} = \frac{\pi}{3\sqrt{2}} = \frac{\pi}{\sqrt{18}} \approx 0.74048.$$
This is less than $1$, as required.


</details>

<a id="chapter-14-ex-3"></a>
### Exercise 3
Explain why the inscribed square problem is open for arbitrary continuous Jordan curves but proved for regular $C^{1}$ Jordan embeddings.


<details>
<summary>Hint 1</summary>

Distinguish regular tangent data from arbitrary continuous Jordan behavior.

</details>
<details>
<summary>Hint 2</summary>

The cited theorem is an input; explain its scope without inventing its proof.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Stromquist's theorem for smooth curves, with "smooth" defined there by a continuously turning tangent, covers regular $C^1$ Jordan embeddings and guarantees an inscribed square. Its configuration argument is not reproduced here. General continuous Jordan curves can defeat the nondegeneracy and limiting steps used in regular cases, and the full theorem remains open. This solution records the known scope and source rather than presenting the preceding sentence as a proof.


</details>

<a id="chapter-14-ex-4"></a>
### Exercise 4
Describe the moduli space of elliptic curves and explain why it is a quotient of the hyperbolic plane.


<details>
<summary>Hint 1</summary>

Represent a complex torus by a lattice with basis 1,tau.

</details>
<details>
<summary>Hint 2</summary>

Changing an oriented integral lattice basis acts by SL(2,Z); distinguish coarse space from stabilizer-sensitive objects.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Every elliptic curve over $\mathbb{C}$ is isomorphic to a complex torus $\mathbb{C}/\Lambda$ for some lattice $\Lambda$. Homothety of lattices lets us normalize $\Lambda=\mathbb Z+\tau\mathbb Z$ with $\tau\in\mathbb H$. Two normalized lattices give isomorphic tori exactly when their parameters are related by $SL(2,\mathbb Z)$. The underlying quotient gives the coarse analytic moduli space, identified by the $j$-invariant with the complex $j$-line. The effective orbifold uses $PSL(2,\mathbb Z)$ and has special stabilizers at parameters such as $i$ and $e^{2\pi i/6}$; the quotient stack by $SL(2,\mathbb Z)$ additionally retains the generic $\{\pm I\}$ automorphisms.


</details>

## Forward and backward connections

This chapter draws together threads from every preceding chapter: axiomatics from **The layers of a geometric argument** and **Axiomatic Systems**; non-Euclidean models from **Hyperbolic Geometry** and **Elliptic Geometry**; projective and finite structures from **Projective Planes** and **Finite Geometries**; order and convexity from **Ordered Geometry** and **Convexity**; measure from **Geometric Measure Theory**; and transformations and tilings from **Chapter 12** and **Chapter 13**. The reader who has worked through the book is now prepared to engage with research literature, to audit proofs for hidden hypotheses, and to construct countermodels when assumptions fail.

## Sources

The finite comparison, transformation, construction-degree, and word-metric proofs are supplied here. Primary-author perspective: [Nigel Hitchin, Projective Geometry notes](https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Projective_geometry/Chapter_1_Projective_geometry.pdf). All further directions link existing resources, including the unchanged [legacy modern-directions reading](summary-and-modern-directions.md#chapter-14), [advanced measure reading](length-area-and-measure.md#geometric-measure-theory), and conic, computational, differential-geometric, and topological books. Their deep results are referenced rather than claimed proved in this closing chapter.

## Summary

A geometry is specified by its objects, hypotheses, and preserved structure. Euclidean motions are orthogonal maps plus translations; affine maps form the infinity-line stabilizer inside projective transformations. Sphere and elliptic quotient actions differ by an antipodal kernel, while finite fields produce explicit model-group counts. Quadratic towers explain a construction obstruction and finite generating sets give comparable word metrics. These proved comparisons support further study without replacing the separate theorems and classifications to which the outlook points.
