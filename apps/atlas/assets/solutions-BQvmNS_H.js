var e=`---
parent_id: book-geometry-proof-reference
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

These are the fifty-six original exercise answers from the earlier fourteen-chapter edition. They are preserved as an archive of that mathematical content, not claimed to cover every new question. Despite the retained historical heading, this appendix contains exercise answers, with no project solutions. Current main chapters pair each question with two staged hints and its full solution. The canonical alias destinations also retain their original four exercise headings and complete answers as distinct earlier-material supplements. No independent mathematical or copy review is implied.

---

## Chapter 1: The layers of a geometric argument

### Exercise 1
State the four layers for the theorem: "The diagonals of a parallelogram bisect each other." Identify which axioms are needed for the standard proof.

**Solution.**
- **Primitives:** point, line, incidence, betweenness, segment congruence.
- **Definitions:** parallelogram (quadrilateral with both pairs of opposite sides parallel); bisect (divide into two congruent segments); diagonal (segment joining nonadjacent vertices).
- **Axioms:** incidence and order (including the convex-quadrilateral diagonal-crossing result), the Euclidean parallel axiom for alternate interior angles, and ASA congruence. The parallelogram is given, so constructing one is not a step in this proof.
- **Theorem:** In parallelogram $ABCD$, diagonals $AC$ and $BD$ intersect at a point $M$ that is the midpoint of both.
- **Proof sketch:** First use diagonal $AC$ as a transversal. The two pairs of alternate interior angles and the common side $AC$ give $\\triangle BAC\\cong\\triangle DCA$ by ASA, hence $AB=CD$. At the intersection $M$ of the diagonals, alternate interior angles cut by $BD$ and by $AC$, together with $AB=CD$, give $\\triangle ABM\\cong\\triangle CDM$ by ASA. Therefore $AM=MC$ and $BM=MD$. The order axioms supply that the diagonals of the convex parallelogram meet in their interiors.

### Exercise 2
Give a precise definition of "rectangle" and prove that a parallelogram with one right angle is a rectangle. List every axiom or definition used.

**Solution.**
- **Definition:** A rectangle is a quadrilateral with four right angles.
- **Given:** Parallelogram $ABCD$ with $\\angle A = 90^{\\circ}$.
- **Proof:** In a parallelogram, consecutive angles are supplementary (definition of parallel lines and same-side interior angles). So $\\angle A + \\angle B = 180^{\\circ}$, giving $\\angle B = 90^{\\circ}$. Similarly $\\angle C = 90^{\\circ}$ and $\\angle D = 90^{\\circ}$. Hence $ABCD$ is a rectangle by definition.
- **Axioms used:** parallel postulate (to guarantee same-side interior angles are supplementary), angle measure axioms, definition of parallelogram.

### Exercise 3
Explain why "through any two distinct points there passes exactly one line" is an axiom rather than a definition.

**Solution.**
A definition would have to introduce a new term from old ones. "Exactly one line through two points" is a statement about existence and uniqueness of an object already named (line). It constrains the behavior of lines and points; it does not abbreviate a longer description. In some geometries (e.g., finite geometries) the axiom is modified, which confirms its status as an assumption rather than a matter of terminology.

### Exercise 4
Describe a model in which the incidence axioms hold but the parallel axiom fails.

**Solution.**
The real hyperbolic plane (Poincar\\'{e} disk model) satisfies all Hilbert incidence, order, and congruence axioms except the Euclidean parallel axiom. In this model "points" are points inside the unit disk, and "lines" are diameters or circular arcs orthogonal to the boundary. Through a point not on a given line there pass infinitely many lines not meeting the given line, violating uniqueness.

---

## Chapter 2: Axiomatic Systems

### Exercise 1
Show that axiom I2 is independent of $\\{I1, I3\\}$ by constructing a model of I1 and I3 in which some line has fewer than two points.

**Solution.**
Take three points $A,B,C$ and three lines $\\ell_{AB}=\\{A,B\\}$, $\\ell_{BC}=\\{B,C\\}$, $\\ell_{CA}=\\{C,A\\}$. Add one extra line $\\ell_{0}=\\{A\\}$. I1 holds for every pair of distinct points (each pair lies on exactly one of the first three lines). I3 holds because $A,B,C$ are noncollinear (no line contains all three). I2 fails because $\\ell_{0}$ contains only one point. Hence I2 is independent of $\\{I1, I3\\}$.

### Exercise 2
Prove that in any model of I1–I3, every point lies on at least two lines.

**Solution.**
Fix noncollinear points $A,B,C$ supplied by I3, and let $P$ be arbitrary. If $P$ is not on line $AB$, then $PA$ and $PB$ are two distinct lines. If $P$ is on $AB$ but $P\\ne A$, then $PA=AB$ and $PC$ are distinct because $C$ is not on $AB$. If $P=A$, use the distinct lines $AB$ and $AC$. Thus every point lies on at least two lines.

### Exercise 3
Explain why the rational Cartesian plane $\\mathbb{Q}^{2}$ satisfies I1–I3 and the unique-parallel axiom but does not satisfy the full Euclidean continuity and congruence-existence package.

**Solution.**
I1–I3 hold because two distinct rational points determine a unique rational line, every rational line contains infinitely many rational points, and $(0,0),(1,0),(0,1)$ are noncollinear. Parallelism is algebraic: through a rational point there is exactly one rational line with the same rational direction as a given rational line. What fails is continuity. The circle centered at $(0,0)$ through $(1,1)$ has equation $x^2+y^2=2$ and rational points, but the rational line $y=0$ through its center has no intersection with that circle in $\\mathbb Q^2$, since it would require $x=\\pm\\sqrt2$. Equivalently, the length $\\sqrt2$ cannot be copied onto the rational $x$-axis. Thus $\\mathbb Q^2$ is not a model of the full Euclidean axiom package.

### Exercise 4
Define a **dual** of an incidence geometry by interchanging "point" and "line" and reversing incidence. Show that the dual of the Fano plane is isomorphic to the Fano plane itself.

**Solution.**
In the displayed order call the seven blocks $L_1,\\ldots,L_7$. Map original point $i$ to the dual point represented by original line $L_i$, and map original line $L_j$ to the dual line represented by original point $j$. Direct inspection of the list gives

$i\\in L_j\\quad\\Longleftrightarrow\\quad j\\in L_i$.

Thus the map preserves incidence after incidence is reversed, so it is an explicit isomorphism from the Fano plane to its dual.

---

## Chapter 3: Neutral Geometry

### Exercise 1
Prove that in neutral geometry, the perpendicular bisector of a segment $AB$ consists exactly of those points equidistant from $A$ and $B$.

**Solution.**
Let $M$ be the midpoint of $AB$. For $P=M$ the claim is immediate. For any other point $P$ on the perpendicular bisector, $\\triangle PMA \\cong \\triangle PMB$ by SAS (shared $PM$, $AM = BM$, right angles at $M$), so $PA = PB$. Conversely, if $PA = PB$ and $P\\ne M$, drop the perpendicular from $P$ to $AB$ at $Q$. Then $\\triangle PQA \\cong \\triangle PQB$ by hypotenuse-leg, so $AQ = QB$ and $Q = M$. Hence $P$ lies on the perpendicular bisector. The proof uses only SAS, existence of midpoints (continuity), and uniqueness of the perpendicular from a point to a line.

### Exercise 2
Explain why the statement "the altitudes of a triangle are concurrent" cannot be proved in neutral geometry without additional assumptions.

**Solution.**
The standard Euclidean proof using a larger triangle with parallel sides is unavailable. There is also a concrete hyperbolic counterconfiguration. In the Klein disk, take

$A=(-3/4,-1/2),\\quad B=(-3/4,-1/4),\\quad C=(-1/2,1/4)$.

Use homogeneous Klein coordinates $[t:x:y]$, with affine chart $t=1$ and line at infinity $t=0$. Polarity with respect to the absolute conic $t^2-x^2-y^2=0$ gives altitude covectors proportional to $(-28,-26,-17)$, $(24,23,27)$, and $(4,3,-10)$. They concur projectively at $[311:-348:20]$, as substitution verifies, but its affine coordinates $(-348/311,20/311)$ satisfy

$(-348/311)^2+(20/311)^2=121504/96721>1$.

The concurrence point is outside the Klein disk, so the three hyperbolic altitude geodesics have no common point in the hyperbolic plane. Hence interior altitude concurrency is not a theorem of neutral geometry.

### Exercise 3
In neutral geometry, prove that the sum of the angles of a convex quadrilateral is at most $2\\pi$.

**Solution.**
Let $ABCD$ be a convex quadrilateral. Draw diagonal $AC$. This divides the quadrilateral into $\\triangle ABC$ and $\\triangle ADC$. By the Saccheri–Legendre theorem, each triangle has angle sum $\\leq \\pi$. The angle sum of the quadrilateral is the sum of the angle sums of the two triangles, hence $\\leq 2\\pi$. Equality holds if and only if both triangles have angle sum $\\pi$, which in neutral geometry is equivalent to the Euclidean parallel postulate.

### Exercise 4
Construct a Saccheri quadrilateral in the Euclidean plane with base $AB$ of length $4$ and legs of length $3$. Compute the length of the summit $CD$.

**Solution.**
Place $A=(0,0)$ and $B=(4,0)$. The legs are perpendicular to $AB$, so $D=(0,3)$ and $C=(4,3)$. Then $CD = 4$, equal to the base. The summit angles are right angles, confirming the Euclidean case. In curvature $-1$ hyperbolic geometry, the summit is longer than the base and the summit angles are acute. Indeed, for leg length $h$ and base length $b>0$, $\\cosh s=\\cosh^2h\\cosh b-\\sinh^2h$, so $\\cosh s-\\cosh b=\\sinh^2h(\\cosh b-1)>0$ and $s>b$.

---

## Chapter 4: Hyperbolic Geometry

### Exercise 1
Show that in the Poincar\\'{e} disk model, two distinct hyperbolic lines may share a boundary point without intersecting inside the disk. Such lines are called **asymptotically parallel** or **limiting parallel**.

**Solution.**
Take $\\ell$ to be the real diameter and $P=(0,1/2)$. The circle centered at $(1,5/4)$ with radius $5/4$ passes through $P$ and $(1,0)$; since $1^2+(5/4)^2=1+(5/4)^2$, it is orthogonal to the unit circle. Its interior arc is a hyperbolic line through $P$ that shares the ideal endpoint $(1,0)$ with $\\ell$ but does not meet $\\ell$ inside the disk. The circle centered at $(-1,5/4)$ supplies the other limiting parallel through $P$, sharing the other endpoint $(-1,0)$. Thus each limiting line and $\\ell$ are distinct hyperbolic lines with one common ideal endpoint.

### Exercise 2
In the upper half-plane model, verify that the $y$-coordinate scaling $(x,y) \\mapsto (\\lambda x, \\lambda y)$ for $\\lambda > 0$ preserves hyperbolic distance.

**Solution.**
Let $z = x + iy$ and $w = u + iv$. Under scaling, $z' = \\lambda z$ and $w' = \\lambda w$. Then $\\operatorname{Im}(z') = \\lambda \\operatorname{Im}(z)$, $\\operatorname{Im}(w') = \\lambda \\operatorname{Im}(w)$, and $|z'-w'| = \\lambda|z-w|$. Substituting into the distance formula:
$$d(z',w') = \\operatorname{arccosh}\\!\\left(1 + \\frac{\\lambda^{2}|z-w|^{2}}{2\\lambda^{2}\\operatorname{Im}(z)\\operatorname{Im}(w)}\\right)
           = d(z,w).$$
Hence the scaling is a hyperbolic isometry.

### Exercise 3
A hyperbolic triangle has angles $\\pi/4$, $\\pi/3$, and $\\pi/6$. Compute its area in the curvature $-1$ upper half-plane model.

**Solution.**
The angle sum is $\\pi/4 + \\pi/3 + \\pi/6 = (3+4+2)\\pi/12 = 9\\pi/12 = 3\\pi/4$. The area is
$$\\pi - \\frac{3\\pi}{4} = \\frac{\\pi}{4} \\approx 0.7854.$$

### Exercise 4
Prove that in hyperbolic geometry the angle sum of a convex geodesic quadrilateral is strictly less than $2\\pi$.

**Solution.**
Let $ABCD$ be a convex geodesic quadrilateral. Draw diagonal $AC$, which lies inside and divides it into $\\triangle ABC$ and $\\triangle ADC$. Each triangle has angle sum $< \\pi$ by the hyperbolic angle-sum theorem. Adding the two inequalities gives $\\angle A + \\angle B + \\angle C + \\angle D < 2\\pi$. Equality is impossible because it would require both triangles to have angle sum $\\pi$, which contradicts the hyperbolic parallel axiom. A nonconvex or self-intersecting four-vertex path needs a separate directed-angle convention and triangulation.

---

## Chapter 5: Elliptic Geometry

### Exercise 1
Prove that in elliptic geometry, two distinct lines always meet in exactly one point, and that through any two distinct points there passes exactly one line.

**Solution.**
These are axioms E1 and E2. In the spherical model, two distinct great circles lie in distinct planes through the origin; their intersection is a line through the origin, which meets the sphere in two antipodal points. After antipodal identification, the two lines meet in exactly one elliptic point. Similarly, two distinct points on the sphere (not antipodal) determine a unique plane through the origin, hence a unique great circle; antipodal points are identified, so the line is unique in elliptic space.

### Exercise 2
A spherical triangle on the unit sphere has angles $\\pi/2$, $\\pi/2$, and $\\pi/2$. Compute its area and verify Girard's theorem.

**Solution.**
The angle sum is $3\\pi/2$. By Girard's theorem, the area is $3\\pi/2 - \\pi = \\pi/2$. This triangle is one octant of the sphere; the unit sphere has total area $4\\pi$, and one octant indeed has area $4\\pi/8 = \\pi/2$. The verification agrees.

### Exercise 3
Show that a convex geodesic quadrilateral contained in an elliptic disk and lifting injectively to the sphere has angle sum strictly greater than $2\\pi$.

**Solution.**
Let $ABCD$ be a convex geodesic quadrilateral contained in an elliptic disk and lifting injectively to the sphere. The diagonal $AC$ stays in the disk and splits it into two triangles in the scope of Girard's theorem. Each has angle sum $>\\pi$, so the quadrilateral angle sum is $>2\\pi$. Noncontractible or self-intersecting four-vertex loops are outside this argument.

### Exercise 4
In the unit sphere model, find the side lengths of the spherical triangle with vertices at the coordinate axes: $A=(1,0,0)$, $B=(0,1,0)$, $C=(0,0,1)$. Verify the spherical law of cosines for side $c=AB$.

**Solution.**
Use the three minor great-circle arcs bounding the positive octant on the unit sphere, without antipodal identification. Each pair of these distinct nonantipodal vertices has a unique minimizing arc, of length $\\arccos(0)=\\pi/2$. The chosen arc from $A$ to $B$ lies in the $xy$-plane and has length $c=\\pi/2$; similarly $a=b=\\pi/2$. The angle $C$ between the chosen arcs is also $\\pi/2$. The law of cosines states
$$\\cos c = \\cos a \\cos b + \\sin a \\sin b \\cos C.$$
Substituting: $\\cos(\\pi/2) = 0$ on the left. On the right, $\\cos(\\pi/2)\\cos(\\pi/2) + \\sin(\\pi/2)\\sin(\\pi/2)\\cos(\\pi/2) = 0 + 1 \\cdot 1 \\cdot 0 = 0$. The identity holds.

---

## Chapter 6: Projective Planes

### Exercise 1
Verify that the Fano plane is a projective plane and obtain its affine plane by choosing and deleting one whole projective line as the line at infinity.

**Solution.**
The Fano plane has seven points and seven lines, each line contains three points, each point lies on three lines, and any two points determine a unique line. It satisfies P1--P3; for example, $\\{1,2,4,7\\}$ is a quadrangle. To obtain its affine plane, delete the entire line at infinity $\\{1,2,3\\}$ and its points. The remaining points are $4,5,6,7$, and the other six projective lines restrict to the affine lines $45,67,46,57,47,56$, arranged in three parallel pairs.

### Exercise 2
Prove that in $\\mathbb{P}^{2}(\\mathbb{R})$, every line has the same cardinality as the real numbers, and that the plane itself has the cardinality of $\\mathbb{R}^{3}$ modulo scaling.

**Solution.**
A line is defined by one linear equation in three variables, so its solution set is a two-dimensional vector subspace of $\\mathbb{R}^{3}$ minus the origin, modulo scaling. This is homeomorphic to $\\mathbb{P}^{1}(\\mathbb{R})$, which has cardinality $|\\mathbb{R}|$. For the plane, the affine chart $z\\ne0$ contains a copy of $\\mathbb R^2$, giving the lower bound $|\\mathbb R|$. Every projective point lies in at least one of the three charts $x\\ne0$, $y\\ne0$, $z\\ne0$, and normalizing that coordinate identifies each chart with $\\mathbb R^2$. A union of three continuum-sized charts has cardinality $|\\mathbb R|$, giving the upper bound.

### Exercise 3
Compute the cross-ratio $(A,B;C,D)$ for the points on the real projective line with affine coordinates $A=0$, $B=1$, $C=2$, $D=3$.

**Solution.**
Using directed distances on the affine line:
$$AC = 2,\\quad BC = 1,\\quad AD = 3,\\quad BD = 2.$$
Hence
$$(A,B;C,D) = \\frac{AC}{BC} \\bigg/ \\frac{AD}{BD} = \\frac{2}{1} \\bigg/ \\frac{3}{2} = \\frac{4}{3}.$$

### Exercise 4
State the dual of Pappus' theorem.

**Solution.**
Let $a,b,c$ be three distinct concurrent lines and $a',b',c'$ three distinct concurrent lines through a different point. Define
$$p = (a \\cap b') \\vee (a' \\cap b),\\quad q = (b \\cap c') \\vee (b' \\cap c),\\quad r = (c \\cap a') \\vee (c' \\cap a).$$
Then $p,q,r$ are concurrent. (In words: the lines joining opposite intersection points of two triples of concurrent lines are themselves concurrent.)

Here $X\\vee Y$ denotes the unique line joining distinct points $X$ and $Y$; it is not set union.

---

## Chapter 7: Finite Geometries

### Exercise 1
Construct the affine plane of order $2$ from $\\mathbb{F}_{2}$ and list all its points and lines.

**Solution.**
Points are pairs $(x,y)$ with $x,y \\in \\mathbb{F}_{2} = \\{0,1\\}$:
$$(0,0),\\;(0,1),\\;(1,0),\\;(1,1).$$
Lines have equations $y = mx + c$ or $x = c$:
- Slope $0$: $y=0$ gives $\\{(0,0),(1,0)\\}$; $y=1$ gives $\\{(0,1),(1,1)\\}$.
- Slope $1$: $y=x$ gives $\\{(0,0),(1,1)\\}$; $y=x+1$ gives $\\{(0,1),(1,0)\\}$.
- Vertical: $x=0$ gives $\\{(0,0),(0,1)\\}$; $x=1$ gives $\\{(1,0),(1,1)\\}$.
There are $6$ lines in $3$ parallel classes (slopes $0,1,\\infty$), each class partitioning the $4$ points.

### Exercise 2
Show that the projective plane of order $3$ has $13$ points and $13$ lines, with $4$ points per line and $4$ lines through each point.

**Solution.**
By the counting theorem, the number of points is $n^{2}+n+1 = 9+3+1 = 13$. By duality, the number of lines is also $13$. Each line contains $n+1 = 4$ points, and each point lies on $n+1 = 4$ lines.

### Exercise 3
Verify that the Bruck–Ryser–Chowla theorem rules out projective planes of order $6$ and $14$, but not $10$.

**Solution.**
- $6 \\equiv 2 \\pmod{4}$. Is $6$ a sum of two squares? The squares $\\leq 6$ are $0,1,4$. No pair sums to $6$. Hence no plane of order $6$.
- $14 \\equiv 2 \\pmod{4}$. Squares $\\leq 14$ are $0,1,4,9$. No pair sums to $14$. Hence no plane of order $14$.
- $10 \\equiv 2 \\pmod{4}$. Since $10 = 1^{2}+3^{2}$, the theorem permits a plane of order $10$. However, exhaustive computer search proved none exists.

### Exercise 4
Explain why the Fano plane cannot be extended to an affine plane of order $2$ by removing one line.

**Solution.**
Removing one line and its three points from the Fano plane leaves $4$ points. Each of the other six lines retains $2$ points, producing the six lines of the affine plane of order $2$ in three parallel pairs. Thus the Fano plane **can** be reduced to an affine plane by deleting its line at infinity; projective completion is the reverse construction. The exercise tests whether the reader confuses the direction of the embedding.

---

## Chapter 8: Incidence Geometry

### Exercise 1
Compute the parameters $(v,b,r,k,\\lambda)$ for the affine plane of order $3$ and verify the counting identities.

**Solution.**
Points: $v = 3^{2} = 9$. Lines: $b = 3^{2}+3 = 12$. Each line has $k=3$ points. Each point lies on $r=4$ lines (one per parallel class, and there are $4$ classes including vertical). Every pair of points determines a unique line, so $\\lambda=1$.

Check: $vr = 9 \\cdot 4 = 36$, $bk = 12 \\cdot 3 = 36$. And $r(k-1) = 4 \\cdot 2 = 8$, $\\lambda(v-1) = 1 \\cdot 8 = 8$. Both identities hold.

### Exercise 2
Show that in any linear space with $v \\geq 2$ points, $b \\geq 1$. When does $b=1$?

**Solution.**
If all points are collinear, one line suffices and $b=1$. If there exist three noncollinear points, at least three lines are needed (the sides of the triangle), so $b \\geq 3$. Thus $b=1$ if and only if the space consists of a single line containing all points.

### Exercise 3
Prove that every configuration $(v_r,b_k)$ satisfies $vr=bk$. Explain why the second identity $r(k-1)=\\lambda(v-1)$ requires the additional BIBD hypothesis, using the Pappus configuration as a counterexample to automatic pair regularity.

**Solution.**
Count incidences: each of $v$ points is on $r$ lines, giving $vr$ flags; each of $b$ lines has $k$ points, giving $bk$ flags. Hence $vr=bk$. The Pappus configuration is a $(9_3,9_3)$ configuration, so $r(k-1)=3\\cdot2=6$, while $v-1=8$; no integer $\\lambda$ can satisfy $6=8\\lambda$. A BIBD adds the hypothesis that every point pair occurs in the same number $\\lambda$ of blocks. Only then may one count, for fixed $P$, the pairs $(Q,\\ell)$ with $P,Q\\in\\ell$ to obtain $r(k-1)=\\lambda(v-1)$.

### Exercise 4
Explain why the Petersen graph is not the incidence graph of a partial linear space.

**Solution.**
The Petersen graph has $10$ vertices and girth $5$. If it were an incidence graph of a partial linear space, vertices would partition into points and lines, edges would represent incidence, and the girth condition would correspond to the absence of $4$-cycles (no two points on two lines). However, the Petersen graph is not bipartite: it contains odd cycles (girth $5$). An incidence graph of any incidence structure is bipartite by construction (points on one side, lines on the other). Hence the Petersen graph cannot be an incidence graph.

---

## Chapter 9: Ordered Geometry

### Exercise 1
Prove that if $B(A,C,B)$ and $B(C,D,B)$, then $B(A,D,B)$.

**Solution.**
The four-point ordering lemma derived from B1--B5 says that any four distinct collinear points admit a unique linear order up to reversal, compatible with every three-point betweenness relation. Its proof adjoins a point off the line and applies Pasch twice to compare the two triples; B4 alone would not justify the comparison. Here $B(A,C,B)$ fixes the order as $A,C,B$ up to reversal, and $B(C,D,B)$ inserts $D$ between $C$ and $B$. Hence the compatible order is $A,C,D,B$ (or its reverse), so $B(A,D,B)$.

### Exercise 2
State and prove the converse of Pasch's axiom: if a line $\\ell$ meets segment $AB$ and does not pass through $A$, $B$, or $C$, then it meets exactly one of $AC$ or $BC$.

**Solution.**
**Converse of Pasch:** If $\\ell$ meets $AB$ and does not pass through $A$, $B$, or $C$, then $\\ell$ meets exactly one of $AC$, $BC$.

**Proof:** By Pasch's axiom, $\\ell$ meets $AC$ or $BC$. Since it meets segment $AB$, points $A$ and $B$ lie in opposite half-planes. If it also met both segments $AC$ and $BC$, then $A,C$ would be opposite and $B,C$ would be opposite. Two points that are each opposite to $C$ lie in the same half-plane, forcing $A$ and $B$ to be on the same side, a contradiction. Hence exactly one of $AC$ and $BC$ is met.

### Exercise 3
Show that the interior of an angle is a convex set.

**Solution.**
Let $\\angle BAC$ be an angle. Its interior $I$ is the intersection of the $C$-side of $AB$ and the $B$-side of $AC$. Each half-plane is convex by the plane separation theorem. The intersection of convex sets is convex: if $P,Q \\in I$, then $P,Q$ are in both half-planes, so segment $PQ$ is in both half-planes, hence in $I$. Therefore $I$ is convex.

### Exercise 4
Explain why the rational plane $\\mathbb{Q}^{2}$ satisfies the incidence, order, Pasch, and unique-parallel axioms but fails the full Euclidean continuity and segment-copying package.

**Solution.**
Incidence, affine betweenness, and unique parallels restrict algebraically from $\\mathbb R^2$. For Pasch, a rational line meeting one side of a rational triangle has a second intersection obtained by solving rational linear equations, so the required intersection remains rational; density alone would not prove this. Rational segments do have rational midpoints. Continuity fails because the Dedekind cut determined by $x^2<2$ has no rational endpoint. Equivalently, the circle $x^2+y^2=2$ through $(1,1)$ has no intersection with the rational $x$-axis, so a segment of length $\\sqrt2$ cannot be copied onto that ray.

---

## Chapter 10: Convexity

### Exercise 1
Prove that the intersection of any collection of convex sets is convex.

**Solution.**
Let $\\{C_{i}\\}_{i \\in I}$ be convex sets and $C = \\bigcap_{i} C_{i}$. Take $x,y \\in C$ and $\\lambda \\in [0,1]$. For each $i$, $x,y \\in C_{i}$, so $(1-\\lambda)x + \\lambda y \\in C_{i}$ by convexity of $C_{i}$. Hence $(1-\\lambda)x + \\lambda y \\in C$. Therefore $C$ is convex.

### Exercise 2
Find the extreme points of the closed unit disk $\\{(x,y) : x^{2}+y^{2} \\leq 1\\}$ in $\\mathbb{R}^{2}$.

**Solution.**
The extreme points are exactly the boundary circle $\\{(x,y) : x^{2}+y^{2} = 1\\}$. Any interior point can be written as a convex combination of two boundary points on opposite sides. A boundary point cannot be written as a convex combination of two distinct disk points unless they are both the same boundary point: if $z = (1-\\lambda)x + \\lambda y$ with $\\|z\\|=1$ and $\\lambda \\in (0,1)$, then by strict convexity of the norm, $\\|z\\| < \\max(\\|x\\|,\\|y\\|) \\leq 1$ unless $x=y=z$. Hence only boundary points are extreme, and all boundary points are extreme.

### Exercise 3
Use Carath\\'{e}odory's theorem to show that in $\\mathbb{R}^{2}$, the convex hull of any set $S$ is the union of convex hulls of at most three points of $S$ (equivalently, triangles with repeated vertices allowed).

**Solution.**
By Carath\\'{e}odory's theorem with $n=2$, every point of $\\operatorname{conv}(S)$ is a convex combination of at most three points of $S$. The convex hull of one point is a point, of two points a segment, and of three points a possibly degenerate triangle. Allowing repeated vertices covers $|S|<3$ without assuming extra points exist. Conversely each such hull lies in $\\operatorname{conv}(S)$, proving equality.

### Exercise 4
Give an example of two disjoint closed convex sets in $\\mathbb{R}^{2}$ that cannot be strictly separated by a hyperplane.

**Solution.**
Let $A = \\{(x,y) : y \\geq e^{x}\\}$ and $B = \\{(x,y) : y \\leq 0\\}$. Both are closed and convex. They are disjoint because $e^{x} > 0$ for all $x$. Both sets project onto the entire $x$-axis, so a vertical line cannot separate them. Any possible separating line therefore has the form $y=mx+c$. Suppose such a line strictly separates them. At each fixed $x$, $B$ is unbounded below and $A$ is unbounded above, so separation must put $B$ below the graph and $A$ above it. Then $mx + c > 0$ for all $x$ (since $B$ lies below) and $mx + c < e^{x}$ for all $x$ (since $A$ lies above). The first inequality forces $m=0$ and $c > 0$. Then $c < e^{x}$ for all $x$, but $e^{x} \\to 0$ as $x \\to -\\infty$, so for large negative $x$ we have $e^{x} < c$, a contradiction. Hence no strictly separating line exists.

---

## Chapter 11: Geometric Measure Theory

### Exercise 1
Prove that the Cantor middle-thirds set $C \\subseteq [0,1]$ has Lebesgue measure zero.

**Solution.**
At stage $n$ of the construction, $C$ is contained in $2^{n}$ intervals each of length $3^{-n}$. The total length is $(2/3)^{n}$, which tends to $0$ as $n \\to \\infty$. Since $C$ is contained in every stage, its Lebesgue outer measure is $0$. Hence $m(C)=0$.

### Exercise 2
Compute the surface area of the torus obtained by revolving a circle of radius $r$ centered at distance $R > r$ from the origin around the $z$-axis.

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

### Exercise 3
Show that the Hausdorff dimension of the Cantor set $C$ is $\\ln 2 / \\ln 3$.

**Solution.**
At stage $n$, $C$ is covered by $2^{n}$ intervals of length $3^{-n}$. For $s = \\ln 2 / \\ln 3$, we have $2^{n} (3^{-n})^{s}=1$, giving a finite upper bound for $\\mathcal H^s(C)$. For the lower bound, put probability $2^{-n}$ on every level-$n$ basic interval, producing the Cantor probability measure $\\mu$. Any interval $I$ of length between $3^{-(n+1)}$ and $3^{-n}$ meets at most two level-$n$ basic intervals, so

$\\mu(I)\\le2\\cdot2^{-n}=2\\cdot3^{-ns}\\le 2\\cdot3^s|I|^s.$

The mass-distribution principle, proved by summing this inequality over any small cover of $C$, gives a positive lower bound for $\\mathcal H^s(C)$. The same cover calculation gives zero measure above $s$ and the mass bound gives infinite measure below $s$. Hence $\\dim_H(C)=\\ln2/\\ln3$.

### Exercise 4
Explain why the function $f(x) = x^{2}\\sin(1/x^{2})$ for $x \\neq 0$, $f(0)=0$, is not Lipschitz on $[0,1]$, and why it does not satisfy the Lipschitz hypothesis of the stated coarea theorem.

**Solution.**
The derivative is $f'(x)=2x\\sin(1/x^2)-(2/x)\\cos(1/x^2)$ for $x\\ne0$. At $x_n=(2\\pi n)^{-1/2}$, the sine term vanishes and $f'(x_n)=-2/x_n$, whose magnitude tends to infinity. If $f$ were $L$-Lipschitz, every classical derivative would have magnitude at most $L$, a contradiction. Thus the Lipschitz hypothesis of the stated theorem fails. This exercise has $k=n=1$, so it concerns the corresponding one-dimensional area/coarea variant rather than the earlier $k<n$ statement; failure of that stated hypothesis alone does not rule out every weaker extension.

---

## Chapter 12: Transformation Geometries: Affine, Projective, and Inversive

### Exercise 1
Find the affine transformation of $\\mathbb{R}^{2}$ that sends $(0,0) \\mapsto (1,2)$, $(1,0) \\mapsto (3,4)$, and $(0,1) \\mapsto (2,5)$.

**Solution.**
Write $T(x,y) = (ax+by+c,\\; dx+ey+f)$. From $T(0,0)=(1,2)$ we get $c=1$, $f=2$. From $T(1,0)=(3,4)$ we get $a+c=3$, $d+f=4$, so $a=2$, $d=2$. From $T(0,1)=(2,5)$ we get $b+c=2$, $e+f=5$, so $b=1$, $e=3$. Hence
$$T(x,y) = (2x+y+1,\\; 2x+3y+2).$$

### Exercise 2
Prove that the cross-ratio of four collinear points is invariant under projective transformations.

**Solution.**
Let the points be represented by vectors $v_{1},v_{2},v_{3},v_{4}$ in $\\mathbb{R}^{2}$ (for the projective line $\\mathbb{P}^{1}$). A projective transformation is multiplication by $A \\in GL(2,\\mathbb{R})$. The cross-ratio is
$$(v_{1},v_{2};v_{3},v_{4}) = \\frac{\\det(v_{3},v_{1})}{\\det(v_{3},v_{2})} \\bigg/ \\frac{\\det(v_{4},v_{1})}{\\det(v_{4},v_{2})}.$$
Since $\\det(Av_{i},Av_{j}) = \\det(A)\\det(v_{i},v_{j})$, the factor $\\det(A)$ cancels in every ratio, leaving the cross-ratio unchanged.

### Exercise 3
Under inversion in the unit circle, find the image of the line $x=2$.

**Solution.**
The line $x=2$ does not pass through the origin. Parametrize it as $(2,t)$. Inversion sends $(x,y)$ to $(x/(x^{2}+y^{2}),\\; y/(x^{2}+y^{2}))$. For $(2,t)$, the image is
$$\\left(\\frac{2}{4+t^{2}},\\; \\frac{t}{4+t^{2}}\\right).$$
Let $(u,v)$ be the image coordinates. Then $u^{2}+v^{2} = (4+t^{2})/(4+t^{2})^{2} = 1/(4+t^{2})$, so $u = 2(u^{2}+v^{2})$, or equivalently
$$u^{2}+v^{2} - \\frac{u}{2} = 0.$$
Completing the square: $(u-1/4)^{2} + v^{2} = (1/4)^{2}$. The image is this circle with the origin omitted, since no finite point of the original line maps to the inversion center. It becomes the full generalized circle only after adjoining the point at infinity.

### Exercise 4
Show that the composition of two inversions in concentric circles is a dilation.

**Solution.**
The first inversion gives $OP_1=r_1^2/OP$. Applying the second gives

$$OP_2=\\frac{r_2^2}{OP_1}=\\frac{r_2^2}{r_1^2}OP.$$

Both inversions preserve the ray from $O$, so on the punctured plane $P_2$ is obtained by the dilation of factor $r_2^2/r_1^2$ centered at $O$. This dilation extends continuously to fix $O$, although inversion itself is undefined there.

---

## Chapter 13: Discrete Groups and Tessellations

### Exercise 1
Prove that every discrete subgroup of $SO(2)$ is finite cyclic. Contrast this with the subgroup generated by an irrational rotation.

**Solution.**
Identify $SO(2)$ with the compact circle group. If $H$ is discrete, there is an identity neighborhood $U$ containing no other point of $H$. Choose a smaller neighborhood $V$ with $V^{-1}V\\subset U$. Compactness gives finitely many translates of $V$ covering the circle, and each translate contains at most one point of $H$; otherwise the quotient of two such points would lie in $U\\cap H$. Hence $H$ is finite. Every finite subgroup of the circle consists of roots of unity and is cyclic. By contrast, if $\\alpha/2\\pi$ is irrational, the cyclic subgroup generated by rotation through $\\alpha$ is infinite and dense, hence not discrete.

### Exercise 2
Give fundamental domains for three concrete actions: (a) translations by $(2,0)$ and $(0,1)$; (b) the same translations together with the half-turn about the origin; and (c) translations by $(1,0),(0,1)$ together with quarter-turns about lattice points. Explain why this does not by itself classify all wallpaper groups.

**Solution.**
(a) A $2\\times1$ rectangle, such as $[0,2]\\times[0,1]$, is a translation fundamental domain. (b) The half-turn doubles the stabilizing symmetry relative to the translation subgroup, so a $1\\times1$ rectangle is a fundamental domain up to boundary identifications. (c) A square of side $1/2$ is a fundamental domain up to boundary identifications; four quarter-turn images fill a unit translation cell. These examples show that square domains are possible for a $p4$ action and that adding point symmetries reduces domain area. A full classification must also track lattice type, mirrors, glides, rotation centers, and boundary stabilizers; the three examples do not supply the list of seventeen.

### Exercise 3
Verify that the regular $(7,3)$ hyperbolic tiling satisfies the hyperbolic angle condition.

**Solution.**
A regular heptagon has interior angle $(7-2)\\pi/7 = 5\\pi/7$ in Euclidean geometry. In hyperbolic geometry, the interior angle is smaller. For three heptagons to meet at a vertex, the sum of the three interior angles must be $2\\pi$. In the hyperbolic plane, the angle sum at a vertex of a regular tiling is exactly $2\\pi$ by construction. The condition $1/7 + 1/3 < 1/2$ (since $10/21 < 10.5/21$) confirms that the tiling fits in hyperbolic geometry, not Euclidean or spherical.

### Exercise 4
Construct a fundamental domain for the action of $\\mathbb{Z}^{2}$ on $\\mathbb{R}^{2}$ by translations and compute the Euler characteristic of the quotient torus.

**Solution.**
The unit square $[0,1]\\times[0,1]$ is a fundamental domain for $\\mathbb{Z}^{2}$ acting by integer translations. The quotient is the torus $T^{2}$. A cell decomposition has one vertex (all corners identified), two edges (horizontal and horizontal, vertical and vertical), and one face (the square interior). Hence
$$\\chi(T^{2}) = V - E + F = 1 - 2 + 1 = 0,$$
which matches the standard result for a torus.

---

## Chapter 14: Open Problems and Modern Directions

### Exercise 1
Explain why the impossibility of angle trisection with ruler and compass does not imply that no angle can be trisected by any means.

**Solution.**
The impossibility result is relative to the axioms of ruler-and-compass construction: starting from two points, one may draw lines through constructed points and circles with constructed centers and radii, and one may intersect these lines and circles. This restricted toolkit cannot construct cube roots in general or trisect general angles; particular cube roots such as $\\sqrt[3]{8}=2$ are constructible. However, with a marked ruler (neusis construction) or with origami (Huzita–Hatori axioms), angle trisection is possible. The impossibility is a statement about a specific formal system, not about physical possibility in general.

### Exercise 2
State the Kepler conjecture precisely and verify the density of the face-centered cubic packing.

**Solution.**
**Kepler conjecture (proved):** No packing of congruent spheres in $\\mathbb{R}^{3}$ has upper density greater than $\\pi/\\sqrt{18}$. For the occupied region $P$ of the packing, take upper density to mean $\\limsup_{R\\to\\infty}\\operatorname{vol}(P\\cap B_R(0))/\\operatorname{vol}(B_R(0))$, where $B_R(0)$ is the radius-$R$ Euclidean ball. The limsup covers packings for which a density limit need not exist; for periodic FCC the limit exists and equals the occupied fraction of a fundamental cell.

**Density verification for FCC:** Let the sphere radius be $r$. Along a face diagonal, four radii span the diagonal, so the cubic cell side satisfies $a\\sqrt2=4r$ and hence $a=2\\sqrt2r$. The cell contains $8/8+6/2=4$ spheres. Their volume is $16\\pi r^3/3$, while the cell volume is $(2\\sqrt2r)^3=16\\sqrt2r^3$. Therefore the density is
$$\\frac{16\\pi r^{3}/3}{16\\sqrt{2}r^{3}} = \\frac{\\pi}{3\\sqrt{2}} = \\frac{\\pi}{\\sqrt{18}} \\approx 0.74048.$$
This is less than $1$, as required.

### Exercise 3
Explain why the inscribed square problem is open for arbitrary continuous Jordan curves but proved for regular $C^{1}$ Jordan embeddings.

**Solution.**
Stromquist's theorem for smooth curves, with "smooth" defined there by a continuously turning tangent, covers regular $C^1$ Jordan embeddings and guarantees an inscribed square. Its configuration argument is not reproduced here. General continuous Jordan curves can defeat the nondegeneracy and limiting steps used in regular cases, and the full theorem remains open. This solution records the known scope and source rather than presenting the preceding sentence as a proof.

### Exercise 4
Describe the moduli space of elliptic curves and explain why it is a quotient of the hyperbolic plane.

**Solution.**
Every elliptic curve over $\\mathbb{C}$ is isomorphic to a complex torus $\\mathbb{C}/\\Lambda$ for some lattice $\\Lambda$. Homothety of lattices lets us normalize $\\Lambda=\\mathbb Z+\\tau\\mathbb Z$ with $\\tau\\in\\mathbb H$. Two normalized lattices give isomorphic tori exactly when their parameters are related by $SL(2,\\mathbb Z)$. The underlying quotient gives the coarse analytic moduli space, identified by the $j$-invariant with the complex $j$-line. The effective orbifold uses $PSL(2,\\mathbb Z)$ and has special stabilizers at parameters such as $i$ and $e^{2\\pi i/6}$; the quotient stack by $SL(2,\\mathbb Z)$ additionally retains the generic $\\{\\pm I\\}$ automorphisms.
`;export{e as default};