
# Convexity

## Learning purpose

Convexity is a geometric property that bridges order, incidence, and measure. This chapter defines convex sets in affine and Euclidean spaces, proves the fundamental separation theorems, and introduces convex hulls, extreme points, and Carathéodory's theorem. The reader learns to recognize convexity arguments in optimization, geometry, and measure theory.

## Convex sets

**Definition 13.7.** A subset $C$ of $\mathbb{R}^{n}$ is **convex** if for every $x,y \in C$ and every $\lambda \in [0,1]$, the point $(1-\lambda)x + \lambda y$ belongs to $C$.

In geometric terms: the segment joining any two points of $C$ lies entirely in $C$. This definition uses the vector-space structure of $\mathbb{R}^{n}$; in a more general setting, convexity is defined via betweenness and geodesics.

### Examples

- The empty set, any singleton, and $\mathbb{R}^{n}$ itself are convex.
- Closed and open balls are convex.
- Half-spaces $\{x : a \cdot x \leq b\}$ are convex.
- The intersection of any family of convex sets is convex.
- The union of two convex sets need not be convex.

**Common error:** confusing star-shaped with convex. A set is star-shaped with respect to $p$ if every point is visible from $p$ via a segment in the set. Every convex set is star-shaped with respect to every point, but not conversely. For example,

$([0,2]\times[0,1])\cup([0,1]\times[0,2])$

is star-shaped with respect to $(0,0)$, while the segment between $(2,1)$ and $(1,2)$ leaves the set.

## Convex hull

**Definition 13.8.** The **convex hull** of a set $S \subseteq \mathbb{R}^{n}$, denoted $\operatorname{conv}(S)$, is the intersection of all convex sets containing $S$. Equivalently, it is the set of all convex combinations of finitely many points of $S$:
$$\operatorname{conv}(S) = \left\{\sum_{i=1}^{k} \lambda_{i} x_{i} : k \geq 1,\; x_{i} \in S,\; \lambda_{i} \geq 0,\; \sum_{i=1}^{k} \lambda_{i} = 1\right\}.$$

**Theorem 13.1 (Carathéodory).** If $S \subseteq \mathbb{R}^{n}$, then every point of $\operatorname{conv}(S)$ can be expressed as a convex combination of at most $n+1$ points of $S$.

**Proof sketch.** Suppose $x = \sum_{i=1}^{k} \lambda_{i} x_{i}$ with $k > n+1$. The vectors $(x_{i},1) \in \mathbb{R}^{n+1}$ are linearly dependent, so there exist coefficients $\mu_{i}$, not all zero, with $\sum \mu_{i} x_{i} = 0$ and $\sum \mu_{i} = 0$. Adjust $\lambda$ by a multiple of $\mu$ to reduce the number of nonzero terms while preserving the convex combination property. Repeat until $k \leq n+1$.

**Boundary case:** The bound $n+1$ is sharp. The vertices of a nondegenerate simplex in $\mathbb{R}^{n}$ require all $n+1$ vertices to express the barycenter as a convex combination.

## Extreme points

**Definition 13.9.** A point $x \in C$ is an **extreme point** of a convex set $C$ if it is not a nontrivial convex combination of two distinct points of $C$. Equivalently, $x = (1-\lambda)y + \lambda z$ with $y,z \in C$ and $\lambda \in (0,1)$ implies $y=z=x$.

**Theorem 13.10 (Krein–Milman, finite-dimensional case).** Every compact convex set $C \subseteq \mathbb{R}^{n}$ is the convex hull of its extreme points.

**Proof sketch.** By induction on dimension. In $\mathbb{R}^{1}$, a compact convex set is a closed interval, whose extreme points are its endpoints. In $\mathbb{R}^{n}$, every supporting hyperplane intersects $C$ in a compact convex set of lower dimension, whose extreme points (by induction) are extreme points of $C$. Taking all such hyperplanes recovers $C$.

**Common error:** assuming that every convex set has extreme points. An open ball has no extreme points, and its convex hull is itself. Compactness is essential.

## Separation theorems

**Theorem 13.11 (Hyperplane separation).** Let $A$ and $B$ be disjoint nonempty convex subsets of $\mathbb{R}^{n}$.

1. If $A$ is open, there exists a hyperplane separating $A$ and $B$ (there exist $a \neq 0$ and $b$ such that $a \cdot x \leq b$ for all $x \in A$ and $a \cdot y \geq b$ for all $y \in B$).
2. If both $A$ and $B$ are closed and at least one is compact, there exists a strictly separating hyperplane.

**Proof sketch.** Consider the set $A-B = \{x-y : x \in A, y \in B\}$. It is convex and does not contain $0$. If $A$ is open, $A-B$ is open, so there exists a nonzero linear functional $a$ with $a \cdot z > 0$ for all $z \in A-B$. This gives $a \cdot x > a \cdot y$ for all $x \in A$, $y \in B$, yielding separation. Strict separation uses the fact that the distance between a compact set and a disjoint closed set is positive.

**Boundary case:** Disjoint closed convex sets need not be strictly separable. Example: $A = \{(x,y) : y \geq e^{x}\}$ and $B = \{(x,y) : y \leq 0\}$ are disjoint, closed, and convex, but their distance is zero, approached by $(x,e^x)$ and $(x,0)$ as $x\to-\infty$; no strictly separating hyperplane exists, as Exercise 4 proves.

## Polytopes and polyhedra

A **polyhedron** is an intersection of finitely many half-spaces. A bounded polyhedron is a **polytope**.

**Theorem 13.12 (Minkowski–Weyl).** A subset $P \subseteq \mathbb{R}^{n}$ is a polytope if and only if it is the convex hull of finitely many points.

**Proof idea.** (Hull $\Rightarrow$ polytope) The convex hull of finitely many points is bounded and defined by finitely many linear inequalities (via Fourier–Motzkin elimination). (Polytope $\Rightarrow$ hull) A bounded polyhedron has finitely many extreme points (vertices), and the Krein–Milman theorem expresses it as their hull.

**Common error:** confusing polyhedron (intersection of half-spaces) with polytope (bounded). An infinite strip in $\mathbb{R}^{2}$ is a polyhedron but not a polytope.

## Helly's theorem

**Theorem 13.13 (Helly).** Let $\{C_{i}\}_{i=1}^{m}$ be a finite family of convex sets in $\mathbb{R}^{n}$. If every subfamily of at most $n+1$ sets has nonempty intersection, then the intersection of all $m$ sets is nonempty. When $m\ge n+1$, it is enough to state the hypothesis for every subfamily of exactly $n+1$ sets.

**Proof.** Use induction on $m$; the case $m\le n+1$ is the hypothesis. For $m>n+1$, the induction hypothesis gives a point $x_i\in\bigcap_{j\ne i}C_j$ for each $i=1,\ldots,n+2$. Radon's theorem partitions these $n+2$ points into two sets whose convex hulls meet; let $x$ lie in both hulls. For $k\le n+2$, one of the two Radon parts omits $x_k$, and every point of that part belongs to $C_k$, so convexity gives $x\in C_k$. For $k>n+2$, all chosen points lie in $C_k$, so again $x\in C_k$. Thus $x$ belongs to every set. Radon's theorem itself follows from an affine dependence among $n+2$ points: separate positive and negative coefficients and normalize them to two convex combinations of the same point.

**Boundary case:** The bound $n+1$ is sharp. The $n+1$ half-spaces

$H_i=\{x:x_i\ge0\}\quad(1\le i\le n),\qquad H_{n+1}=\{x:\sum_i x_i\le-1\}$

have empty total intersection, while every $n$ of them intersect. If $H_{n+1}$ is omitted, use the origin; if $H_j$ is omitted, set $x_j=-1$ and all other coordinates to zero.

## Full finite-dimensional proofs

The earlier sketches identify the strategy. This section supplies the elimination and supporting-hyperplane steps, followed by complete Radon, Caratheodory, and Helly proofs. All spaces here are finite-dimensional real affine spaces. Compactness is ordinary Euclidean compactness; no infinite-dimensional separation or compactness theorem is assumed.

### Lemma 13.1 — Nearest points and supporting hyperplanes

For a nonempty closed convex C and y outside C, a nearest point p exists. Indeed a minimizing sequence can be restricted to a bounded ball about y; its closed bounded intersection with C is compact. A convergent subsequence attains the minimum. For z in C, minimizing along p+t(z-p), t in [0,1], and differentiating the squared distance at zero gives
$\langle y-p,z-p\rangle\le0.$
The distance is positive because C is closed and y is outside. Uniqueness follows from the strict midpoint identity for squared Euclidean norm, though existence and the inequality suffice below.

If p is a boundary point of a proper closed convex set C, choose points y_n outside C tending to p and nearest points p_n. Since distance(y_n,C)<=||y_n-p||, one has ||p_n-p||<=2||y_n-p||, so p_n tends to p. Normalize y_n-p_n to unit vectors and pass to a convergent subsequence on the compact unit sphere. Its unit limit v satisfies
$\langle v,z-p\rangle\le0\qquad(z\in C).$
Thus every boundary point has a supporting hyperplane. Applied in an affine hull, this is a relative supporting hyperplane.

### Theorem 13.2 — Separation with the missing cases supplied

First let A be open convex, B convex, both nonempty and disjoint. The set D=A-B is open convex and excludes zero. We need the elementary fact that a nonempty open convex set equals the interior of its closure. To prove the nontrivial containment, take x in that interior and z in D. Extend the ray from z through x slightly beyond x to y in closure D. Write x=(1-t)z+ty with t<1. Choose y_n in D tending to y. Then z_n=z+t(y-y_n)/(1-t) lies in D for large n by openness, and x=(1-t)z_n+ty_n belongs to D by convexity. The case x=z is immediate.

Consequently zero is either outside closure D or on its boundary. In the first case nearest-point separation gives a nonzero vector whose dot product is strictly of one sign on D. In the second case the supporting-hyperplane lemma at zero gives v nonzero with v dot d<=0 on closure D. The inequality is strict for d in D: otherwise a small open ball about d would contain a point with positive dot product. Reversing the first case's vector if necessary, in either case
$v\cdot x<v\cdot y\qquad(x\in A,\ y\in B).$
The supremum over A and infimum over B are finite on the relevant sides: fix one point in each set to bound the other set's values. Every A value is at most every B value, so choose b between that supremum and infimum. This gives the stated weak separating hyperplane. The pairwise inequalities may be strict even when no common positive gap exists.

Now suppose A,B are closed and one is compact. A closest pair p in A,q in B exists: in a minimizing sequence the compact-side points have a convergent subsequence, and the other points remain bounded because their distances to that subsequence are bounded. Closedness supplies the second limit. Disjointness and compactness make d=||q-p|| positive.

Put v=q-p. Vary p toward any x in A and q toward any y in B, differentiating their squared separation at zero. The two inequalities give
$v\cdot x\le v\cdot p<v\cdot q\le v\cdot y.$
The middle gap equals ||v||²>0. A hyperplane halfway between these levels strictly separates the sets. This proves the claimed strong conclusion and exposes the compactness use.

### Theorem 13.3 — The compact extreme-point theorem

Every nonempty compact convex set C is the convex hull of its extreme points.

*Proof.* Induct on the dimension of its affine hull. In dimension zero it is a singleton. For positive dimension, work inside the affine hull. Its relative boundary points have supporting hyperplanes by Lemma 13.1. The face cut out by such a hyperplane is nonempty compact convex of smaller affine dimension. Its extreme points are extreme in C: if a face point is a strict convex combination of C points, the supporting equality forces both endpoints into the face.

Induction therefore puts every boundary point in the convex hull of extreme points of C. A relative interior point lies on a line whose intersection with C is a compact segment with boundary endpoints; it is a convex combination of those endpoints. Thus it too lies in that hull. The reverse inclusion follows from convexity. Existence of relative interior follows by choosing an affine basis of points of C: their simplex has relative interior in the affine hull. $\square$

### Theorem 13.4 — Caratheodory with an explicit elimination

Take a convex combination x=sum lambda_i x_i with all zero coefficients discarded. If it uses k>n+1 terms, the lifted vectors (x_i,1) are dependent. Choose mu not all zero with sum mu_i x_i=0 and sum mu_i=0. There are both positive and negative mu_i. Set
$t=\min_{\mu_i>0}\frac{\lambda_i}{\mu_i}>0,\qquad
\lambda_i'=\lambda_i-t\mu_i.$
For positive mu_i these new weights are nonnegative, with at least one zero. For nonpositive mu_i they are no smaller than before. Their sum remains one and their weighted point remains x. Discard zero weights and repeat. Each step reduces a positive integer, so it terminates with at most n+1 points. The empty S has empty hull and requires no representation. This proves the theorem in full.

### Theorem 13.5 — Radon's theorem

Any n+2 points in R^n can be partitioned into two nonempty indexed groups whose convex hulls intersect.

*Proof.* Their lifted vectors are dependent, so choose coefficients mu_i with sum mu_i=0 and sum mu_i x_i=0. Positive and negative groups are nonempty. Their common positive total is s=sum_{mu_i>0}mu_i=-sum_{mu_i<0}mu_i. Divide by s to obtain
$\sum_{\mu_i>0}\frac{\mu_i}{s}x_i
=\sum_{\mu_i<0}\frac{-\mu_i}{s}x_i.$
Both sides are convex combinations. Assign any zero-coefficient indices arbitrarily to either nonempty group; their coefficient zero does not affect the shared point. This yields a partition of all indices. Repeated geometric points cause no difficulty because the assertion concerns indexed groups. $\square$

### Theorem 13.6 — Helly's theorem

Let a finite family of convex subsets of R^n have nonempty intersections for every subfamily of at most n+1 members. Then the entire intersection is nonempty.

*Proof.* Induct on the number m of sets. The case m<=n+1 is the hypothesis. Otherwise induction gives, for each i among the first n+2 indices, a point x_i in every set except possibly C_i: the family with C_i omitted still satisfies the hypothesis.

Radon's theorem partitions these n+2 indexed points into nonempty groups I,J whose hulls share x. For k among the first n+2 indices, one of these groups omits k; every point in that group belongs to C_k, and convexity gives x in C_k. For k>n+2, all selected points belong to C_k, so either hull puts x there. Thus x belongs to every set. $\square$

Finiteness is essential without an extra compactness condition. The intervals [m,infinity) in R have every finite intersection nonempty but empty total intersection. The theorem's n+1 threshold is sharp by the half-spaces already displayed above.

## Completing the finite polytope equivalence

For completeness, the finite-inequality step in Minkowski–Weyl can be made exact. A point x belongs to the convex hull of p1,...,pk precisely when there are lambda_i>=0 with sum lambda_i=1 and x=sum lambda_i p_i. This is a finite system of linear equalities and inequalities in x and lambda. Replace each equality by two inequalities.

Eliminate one scalar variable t by writing all its inequalities as lower bounds t>=L_j(x), upper bounds t<=U_i(x), and constraints independent of t. Such a t exists exactly when every lower bound is at most every upper bound and the independent constraints hold. If one type is absent, a sufficiently large positive or negative t works because only finitely many bounds exist. Thus elimination replaces the system by finitely many linear inequalities. Repeating removes every lambda variable. The hull is therefore a polyhedron, and is bounded because a convex combination of finitely many fixed points remains bounded.

Conversely a nonempty bounded polyhedron is compact. At an extreme point its active constraint normals span R^n. If they did not, a nonzero perpendicular direction would preserve the active equalities, and sufficiently short motions in both signs would preserve all finitely many inactive strict inequalities. That would express the point as the midpoint of two distinct feasible points. Hence some n active independent constraints determine each vertex uniquely. Only finitely many such constraint subsets exist, so there are finitely many extreme points. The compact extreme-point theorem makes the polyhedron their convex hull. Empty cases are interpreted using the empty finite hull.

## Worked examples

### Worked example 1 — Removing a redundant convex coefficient

The square center is the average of its four vertices (0,0),(1,0),(1,1),(0,1). Their affine dependence has coefficients (1,-1,1,-1). Starting from weights all 1/4, take t=1/4 in Caratheodory's elimination. The new weights are (0,1/2,0,1/2). Thus the center is the midpoint of the opposite vertices (1,0) and (0,1). A bound of three vertices in the plane does not mean every point needs three.

### Worked example 2 — Radon in a triangle with an interior point

Take triangle vertices (0,0),(2,0),(0,2) and point (1/2,1/2). The last is the convex combination with weights 1/2,1/4,1/4 of the three vertices. Hence a Radon partition separates that one point from the three vertices. The hull intersection contains that point. A Radon partition need not divide the number of indices equally.

### Worked example 3 — Pairwise intersection is insufficient in the plane

The half-planes x>=0, y>=0, and x+y<=-1 have pairwise intersections: use (0,0), (0,-1), and (-1,0) for the corresponding pairs. Their total intersection is empty because x+y>=0 follows from the first two. This verifies the sharp need to inspect triples in dimension two. Closedness alone does not lower Helly's threshold.

### Worked example 4 — Nearest-point separation made numerical

Let A be the closed unit disk and B the point (3,0). The closest disk point is p=(1,0), with q=(3,0). The normal v=q-p=(2,0) gives levels v dot p=2 and v dot q=6. The separating line v dot x=4 is x=2. The whole disk lies on its x<=1 side and the target point on its x=3 side, giving a strict positive gap.

## Practice exercises

<a id="convexity-ex-1"></a>
### Exercise 1
Prove that the intersection of any collection of convex sets is convex.


<details>
<summary>Hint 1</summary>

Take two points in the entire intersection.

</details>
<details>
<summary>Hint 2</summary>

Each lies in every individual convex set.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $\{C_{i}\}_{i \in I}$ be convex sets and $C = \bigcap_{i} C_{i}$. Take $x,y \in C$ and $\lambda \in [0,1]$. For each $i$, $x,y \in C_{i}$, so $(1-\lambda)x + \lambda y \in C_{i}$ by convexity of $C_{i}$. Hence $(1-\lambda)x + \lambda y \in C$. Therefore $C$ is convex.


</details>

<a id="convexity-ex-2"></a>
### Exercise 2
Find the extreme points of the closed unit disk $\{(x,y) : x^{2}+y^{2} \leq 1\}$ in $\mathbb{R}^{2}$.


<details>
<summary>Hint 1</summary>

Interior points lie inside short segments.

</details>
<details>
<summary>Hint 2</summary>

For boundary points use strict convexity or the equality case of the norm inequality.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The extreme points are exactly the boundary circle $\{(x,y) : x^{2}+y^{2} = 1\}$. Any interior point can be written as a convex combination of two boundary points on opposite sides. A boundary point cannot be written as a convex combination of two distinct disk points unless they are both the same boundary point: if $z = (1-\lambda)x + \lambda y$ with $\|z\|=1$ and $\lambda \in (0,1)$, then by strict convexity of the norm, $\|z\| < \max(\|x\|,\|y\|) \leq 1$ unless $x=y=z$. Hence only boundary points are extreme, and all boundary points are extreme.


</details>

<a id="convexity-ex-3"></a>
### Exercise 3
Use Carathéodory's theorem to show that in $\mathbb{R}^{2}$, the convex hull of any set $S$ is the union of convex hulls of at most three points of $S$ (equivalently, triangles with repeated vertices allowed).


<details>
<summary>Hint 1</summary>

Apply the dimension-two coefficient bound.

</details>
<details>
<summary>Hint 2</summary>

Include segments and points as degenerate small hulls.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
By Carathéodory's theorem with $n=2$, every point of $\operatorname{conv}(S)$ is a convex combination of at most three points of $S$. The convex hull of one point is a point, of two points a segment, and of three points a possibly degenerate triangle. Allowing repeated vertices covers $|S|<3$ without assuming extra points exist. Conversely each such hull lies in $\operatorname{conv}(S)$, proving equality.


</details>

<a id="convexity-ex-4"></a>
### Exercise 4
Give an example of two disjoint closed convex sets in $\mathbb{R}^{2}$ that cannot be strictly separated by a hyperplane.


<details>
<summary>Hint 1</summary>

Use an exponential epigraph and a lower half-plane.

</details>
<details>
<summary>Hint 2</summary>

Any globally separating line must be horizontal, after which the exponential tends to zero.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $A = \{(x,y) : y \geq e^{x}\}$ and $B = \{(x,y) : y \leq 0\}$. Both are closed and convex. They are disjoint because $e^{x} > 0$ for all $x$. A vertical line cannot separate them, since both sets project onto the whole $x$-axis. Thus any strictly separating line has the form $y = mx + c$, with $B$ below and $A$ above it: at each fixed $x$, $B$ is unbounded downward and $A$ unbounded upward, excluding the reverse orientation. Then $mx + c > 0$ for all $x$ and $mx + c < e^{x}$ for all $x$. The first inequality forces $m=0$ and $c > 0$. Then $c < e^{x}$ for all $x$, but $e^{x} \to 0$ as $x \to -\infty$, so for large negative $x$ we have $e^{x} < c$, a contradiction. Hence no strictly separating line exists.


</details>

## Further exercises

<a id="convexity-ex-5"></a>
### Exercise 13.5

Find a Radon partition of the four square vertices.

<details>
<summary>Hint 1</summary>

Compare opposite-vertex midpoints.

</details>

<details>
<summary>Hint 2</summary>

The same center belongs to both diagonal segments.

</details>

<details>
<summary>Full solution</summary>

Partition them into the two pairs of opposite vertices. Each convex hull is a diagonal segment, and both contain their common midpoint, the square center. Both groups are nonempty and exhaust the four indices.

</details>

<a id="convexity-ex-6"></a>
### Exercise 13.6

Explain why Caratheodory's adjusting parameter is a minimum over positive dependence coefficients.

<details>
<summary>Hint 1</summary>

The new weights must all stay nonnegative.

</details>

<details>
<summary>Hint 2</summary>

One positive coefficient must reach zero.

</details>

<details>
<summary>Full solution</summary>

For lambda_i'=lambda_i-t mu_i, only positive mu_i impose upper bounds on t. Choosing their minimum lambda_i/mu_i keeps all weights nonnegative and forces equality for at least one. Negative mu_i increase their weights, and the zero-sum dependence preserves both total weight and represented point.

</details>

<a id="convexity-ex-7"></a>
### Exercise 13.7

Use Helly to bound the size of a certificate that a finite family of convex sets in R³ has empty intersection.

<details>
<summary>Hint 1</summary>

Take the contrapositive.

</details>

<details>
<summary>Hint 2</summary>

The dimension threshold is n+1.

</details>

<details>
<summary>Full solution</summary>

If the entire intersection is empty, not every subfamily of at most four can have nonempty intersection. Therefore some subfamily of at most four is already empty. The theorem does not give the certificate's coordinates or an efficient search algorithm by itself.

</details>

<a id="convexity-ex-8"></a>
### Exercise 13.8

Give an infinite family of closed convex subsets of R with every finite intersection nonempty but empty total intersection.

<details>
<summary>Hint 1</summary>

Use rays with increasing endpoints.

</details>

<details>
<summary>Hint 2</summary>

No real number dominates all integers.

</details>

<details>
<summary>Full solution</summary>

The sets C_m=[m,infinity) are closed convex. A finite subfamily intersects in the ray beginning at its largest endpoint, so is nonempty. The total intersection would require x>=m for every positive integer m, impossible in R. This does not contradict finite Helly.

</details>

<a id="convexity-ex-9"></a>
### Exercise 13.9

Why must active normals span the ambient space at a vertex of a polyhedron?

<details>
<summary>Hint 1</summary>

Assume an orthogonal nonzero direction exists.

</details>

<details>
<summary>Hint 2</summary>

Finite inactive inequalities have positive slack.

</details>

<details>
<summary>Full solution</summary>

If v is perpendicular to all active normals, small ±epsilon v preserve their equalities. Choose epsilon smaller than every relevant inactive slack divided by the corresponding absolute directional coefficient; constraints with zero coefficient impose no restriction. Both displaced points remain feasible, making the original their midpoint and contradicting extremality.

</details>

<a id="convexity-ex-10"></a>
### Exercise 13.10

Prove the nearest-point supporting inequality from a one-variable derivative.

<details>
<summary>Hint 1</summary>

Vary p toward z within the convex set.

</details>

<details>
<summary>Hint 2</summary>

A minimum at the interval endpoint has nonnegative right derivative.

</details>

<details>
<summary>Full solution</summary>

Set f(t)=||y-(p+t(z-p))||² for t in [0,1]. Nearest-point minimality gives f'(0+)>=0. Differentiation yields -2<y-p,z-p>>=0, hence <y-p,z-p><=0. This is the supporting inequality used in separation.

</details>

## Forward and backward connections

This chapter builds on **Ordered Geometry** by using segments and half-planes to define convexity in vector spaces. The separation theorems and Carathéodory's theorem are foundational for **Geometric Measure Theory**, where convex bodies have well-defined volume, surface area, and mixed volumes. Helly's theorem and its relatives are central to combinatorial geometry and discrete optimization.

## Sources

All finite-dimensional proofs above are supplied directly. Background connections are [Projective Planes](projective-planes.md) for affine dependence and [Length, Area and Measure](length-area-and-measure.md) for geometric approximation. The retained statements and sketches remain in place; the added arguments execute their omitted steps.

## Summary

Affine dependence proves Radon and makes Caratheodory's coefficient elimination terminate. Radon then proves finite Helly with the sharp n+1 threshold. Nearest points give supporting and separating hyperplanes; compactness yields the finite-dimensional extreme-point theorem. Finite elimination of inequalities completes the polytope equivalence. These statements depend on finite dimension, convexity, and their explicitly stated compactness or finiteness hypotheses.
