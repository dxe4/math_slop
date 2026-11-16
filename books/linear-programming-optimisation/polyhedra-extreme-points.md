
# Polyhedra and Extreme Points

A two-dimensional feasible region is more than a shaded drawing. It is a set defined by finitely many inequalities, and its corners are points with a precise algebraic property. That property connects graphical optimisation to bases, simplex pivots, and dual certificates. We will prove the connection without assuming that a feasible set is full dimensional or that every linear programme has a vertex.

Required preparation is [systems and rank](#/books/lucent-linear-algebra/systems-elimination), linear independence, and the definition of a convex set from the previous chapter. We work in a finite-dimensional real space with exact data. Numerical decisions about whether constraints are nearly active require additional tolerances and are discussed after the exact statements.

## Half-spaces, affine spaces, and polyhedra

**Definition 2.1 (Polyhedron and polytope).** A polyhedron in $\mathbb R^n$ is a set
$$
P=\{x:Ax\le b\},
$$
where $A$ has finitely many rows and inequalities are componentwise. An equality can be included as two opposite inequalities. A polytope is a bounded polyhedron. Empty sets are allowed in these definitions; existence theorems below explicitly assume nonemptiness.

A half-space is closed because a linear functional is continuous. A finite intersection is therefore closed. A polyhedron is also convex by the rowwise argument in chapter 1. Closedness is not boundedness: a line, strip, cone, or the entire space can be a polyhedron.

The affine hull of a nonempty set is the smallest affine space containing it, equivalently the set of its affine combinations whose coefficients sum to one. Its dimension is the dimension of the corresponding translated linear space. A segment in the plane has dimension one; a singleton has dimension zero. We keep ambient dimension $n$ distinct from the dimension of $P$.

**Definition 2.2 (Extreme point and active constraint).** A point $v\in P$ is an extreme point, or vertex, if every representation
$v=t u+(1-t)w$ with $u,w\in P$ and $0<t<1$ forces $u=w=v$. Row $i$ is active at $x$ when $a_i^Tx=b_i$. Write $I(x)$ for the active index set.

The definition excludes being in the interior of any nontrivial feasible segment. It does not mean that a point is the intersection of exactly $n$ listed rows. Extra rows may be redundant, several rows can be dependent, and a lower-dimensional feasible set has equalities active everywhere.

## The active-normal criterion

**Theorem 2.3 (Algebraic vertex test).** A feasible point $v$ is a vertex of $P$ if and only if the active row normals $\{a_i:i\in I(v)\}$ span $\mathbb R^n$.

*Proof.* Suppose they do not span. There is a nonzero $d$ orthogonal to every active normal. For each inactive row, its slack $b_i-a_i^Tv$ is strictly positive. Because there are finitely many rows, choose $\epsilon>0$ small enough that
$\epsilon|a_i^Td|<b_i-a_i^Tv$ whenever $a_i^Td\ne0$ and $i$ is inactive. Active rows stay equalities, and inactive rows remain feasible at both $v+\epsilon d$ and $v-\epsilon d$. These are distinct feasible points with midpoint $v$, so $v$ is not extreme.

Conversely suppose the active normals span, and $v=t u+(1-t)w$ is a feasible convex decomposition. For each active row,
$b_i=t a_i^Tu+(1-t)a_i^Tw$, while both terms' row values are at most $b_i$. Since both weights are positive, both row values must equal $b_i$. Thus $a_i^T(u-v)=a_i^T(w-v)=0$ for every active normal. Spanning forces $u=v=w$. $\square$

The proof applies even if $P$ lies in a proper affine subspace. Equalities represented by opposite inequalities supply the normals needed to account for that subspace. A lower-dimensional formulation may instead be parameterised by independent coordinates, but then the rank test must use that reduced ambient dimension.

**Example 2.4 (A redundant row does not create a corner).** Let
$$
P=\{(x,y):x\ge0,\ y\ge0,\ x+y\le1,\ 2x+2y\le2\}.
$$
At $(1/2,1/2)$, the final two rows are active but their normals $(1,1)$ and $(2,2)$ span only one direction. The point is not a vertex: it is the midpoint of $(1,0)$ and $(0,1)$. At $(1,0)$, the active normals include $(0,-1)$ and $(1,1)$, which are independent, so this point is a vertex. The redundant doubled row changes neither conclusion.

Counting active rows therefore cannot replace computing their rank. Degeneracy, meaning extra active constraints beyond a minimal independent description at a vertex, can complicate an algorithm's representation without changing the geometric point.

## Faces describe where bounds are tight

**Definition 2.5 (Exposed face and facet).** If $\alpha^Tx\le\beta$ is valid for $P$, its tight set
$F=\{x\in P:\alpha^Tx=\beta\}$ is an exposed face. We include $P$ and the empty set as improper faces by convention. For a nonempty polyhedron of dimension $d$, a proper nonempty face of dimension $d-1$ is a facet.

For a linear objective with finite attained maximum $\beta$, the optimiser set is such a face. It is convex. More strongly, if a strict convex combination of feasible points belongs to that face, both endpoints belong to it: the same weighted-bound argument used in Theorem 2.3 forces equality at both endpoints.

A vertex is a zero-dimensional face, but an optimal face need not be a vertex. If the objective is constant on $P$, every point is optimal. Calling a constraint a facet requires a dimension argument; it is not enough that the row is present or active at one point.

**Example 2.6 (Dimension and an optimal edge).** In the triangle $x,y\ge0$, $x+y\le1$, the valid inequality $x+y\le1$ exposes the segment between $(1,0)$ and $(0,1)$. The triangle has dimension two and the segment dimension one, so this is a facet. Maximising $x+y$ makes the whole segment optimal. Adding the equality $x+y=1$ as part of the feasible set changes the polyhedron to that segment itself. Its endpoints remain vertices, and its facets are now its two endpoints, relative to dimension one. The same line in the plane has different roles in the two formulations.

## Why bounded polyhedra reduce to vertices

**Theorem 2.7 (Vertex attainment).** Every nonempty bounded polyhedron has finitely many vertices. Every linear objective attains its maximum and minimum at vertices.

*Proof.* Any vertex has $n$ independent active rows by Theorem 2.3. Their equalities have a unique solution. There are only finitely many choices of $n$ rows, so there are finitely many vertices.

Now begin at any $x\in P$. If its active normals span, it is already a vertex. Otherwise choose a nonzero $d$ annihilating all active rows and orient its sign so that $c^Td\ge0$. Move along $x+td$ for $t\ge0$. Because $P$ is bounded, the ray cannot remain feasible forever. Thus some inactive row has $a_i^Td>0$, and the first blocking time is
$$
t_*=\min_{a_i^Td>0}\frac{b_i-a_i^Tx}{a_i^Td}>0.
$$
At $x+t_*d$, all previous active rows remain active, at least one new row becomes active, and the objective has not decreased. That new normal is independent of the old active span: it has nonzero dot product with $d$, whereas every old normal has zero dot product. The active rank strictly increases. After at most $n$ such moves we reach a vertex with objective at least $c^Tx$.

Apply this construction to every feasible $x$. Since the finite vertex set contains a point whose value dominates each individual feasible value, its largest objective value is the global maximum and is attained. Replace $c$ by $-c$ to obtain the minimum. $\square$

This proof avoids assuming compact optimisation theory, and it identifies what boundedness does: it guarantees a blocking constraint in the selected direction. It also proves existence of a vertex, because the construction starts from any feasible point. It makes no statement about a preferred numerical pivot rule or an efficient algorithm for large dimensions.

**Theorem 2.8 (Finite vertex hull).** A nonempty bounded polyhedron equals the convex hull of its vertices.

*Proof.* Convexity shows that every convex combination of vertices belongs to $P$. For the reverse inclusion, use induction on $n-r$, where $r$ is the rank of the active normals at $x$. At $r=n$, the point is a vertex. Otherwise choose a nonzero active-null direction $d$. Boundedness gives positive first blocking times $t_+,t_-$ in both directions. Then
$$
x=\frac{t_-}{t_++t_-}(x+t_+d)
+\frac{t_+}{t_++t_-}(x-t_-d).
$$
Both endpoints have larger active rank by the preceding proof. By induction each is a convex combination of vertices. Substituting those finite combinations gives a convex combination for $x$. The depth is finite because active rank increases at each branch. $\square$

The theorem supplies the hypothesis used by the previous chapter's finite-hull objective result. It also explains why checking vertices can establish a bounded graphical optimum once all vertices have been identified and feasibility checked.

## Unbounded geometry requires qualifications

**Definition 2.9 (Recession direction and lineality).** For nonempty $P$, a recession direction is $d$ such that $x+td\in P$ for every $x\in P$ and $t\ge0$. Its recession cone is
$$
\operatorname{rec}(P)=\{d:Ad\le0\}.
$$
A lineality direction permits all real $t$ and therefore satisfies $Ad=0$.

To prove the recession formula, substitute $x+td$ in every inequality when $Ad\le0$. Conversely, if a ray from one feasible point stays feasible for all $t\ge0$, any positive $a_i^Td$ would eventually violate that row, so $Ad\le0$. The same argument in both directions proves the lineality formula.

**Example 2.10 (An optimum without a vertex).** The line $P=\{(x,y):y=0\}$ is a polyhedron. Every point is the midpoint of two other points on the line, so it has no vertices. The objective maximise $y$ is constantly zero, with a finite attained optimum. Therefore “every linear programme has an optimal vertex” is false without a restriction on the feasible geometry. In contrast, the ray $\{(x,0):x\ge0\}$ has the vertex $(0,0)$, though it is unbounded.

A useful extension is that every nonempty polyhedron containing no line has a vertex. Indeed, if the active rank is deficient, choose a null direction $d$. If neither orientation encounters a blocking row, then $Ad=0$ and a full feasible line exists, contrary to the hypothesis. At least one orientation has a finite blocking time and increases active rank. Repeating reaches a vertex. This proves existence, but not an objective bound: the orientation with a finite blocking time may decrease the chosen objective. Standard-form programmes in the next chapter have additional nonnegativity structure that permits a sharper attainment argument.

## Numerical activity and exact geometry

An exact active row has zero slack. A floating-point calculation usually reports small residuals rather than exact equalities. Two nearly parallel active normals can give an ill-conditioned intersection: a tiny change in data moves the apparent corner substantially. Thus a tolerance for activity should reflect row scaling and data uncertainty, and a numerical rank threshold should be stated.

Multiplying a row by a positive scalar preserves its exact half-space, but changes the numerical size of its residual. A uniform absolute tolerance applied without scaling can treat mathematically identical formulations differently. A negative multiplier reverses the inequality and must be handled accordingly.

Do not infer integrality from a picture with integer coefficients. The triangle $x,y\ge0$, $2x+2y\le3$ has fractional vertices $(3/2,0)$ and $(0,3/2)$. Integer hulls and total unimodularity concern stronger structure. The later [integer-programming chapter](integer-programs-total-unimodularity.md) develops the relevant proofs. The existing Polyhedral Integrality and Valid Inequalities provides optional further examples; it is linked as a separate treatment.

Geometry supplies exact logical distinctions: an active constraint, an independent normal, a vertex, a face, and a recession direction are not interchangeable. Those distinctions become the vocabulary of a reliable simplex implementation and its certificates.

## Every vertex can be singled out by an objective

**Proposition 2.11 (Exposing a vertex).** Every vertex $v$ of a polyhedron is the unique maximiser of some linear objective over that polyhedron, even if the polyhedron is unbounded.

*Proof.* Choose $n$ independent active row normals $a_{i_1},\ldots,a_{i_n}$ and set $c=\sum_{k=1}^n a_{i_k}$. Every feasible $x$ satisfies
$c^Tx\le\sum_kb_{i_k}=c^Tv$. Equality in this sum requires equality in every selected inequality, because each individual slack is nonnegative. The independent equalities have the unique solution $v$. Thus $v$ is the unique maximiser. $\square$

Conversely, any unique maximiser of a linear objective over a convex set is an extreme point. If it were a strict convex combination of two distinct feasible points, both endpoint objective values would be at most the optimum and their weighted average would equal it. Both endpoints would therefore also be optimal, contradicting uniqueness.

The two implications connect a geometric definition to an optimisation description. They do not say that a preassigned objective selects a unique vertex: its supporting face may be an edge or a higher-dimensional set. Nor does the exposing construction minimise numerical sensitivity. Summing poorly scaled active rows may produce an awkward coefficient vector even though the exact argument is correct. Row scaling and robust numerical separation are additional questions.

This result also explains why a redundant active row is unnecessary in the proof. An independent subset already identifies the point, and its combined bound supplies uniqueness without relying on how many extra inequalities happen to be listed.

## Exercises

### Exercise 2.1 — Active rank
<a id="polyhedra-extreme-points-ex-1"></a>

For $P=\{x,y\ge0:x+y\le2\}$, determine the active rank at $(1,1)$ and at $(2,0)$.

<details>
<summary>Hint 1</summary>

**Hint.** List active row normals.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use independence rather than row count.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $(1,1)$ only $(1,1)$ is active, so the rank is one and the point is not a vertex. At $(2,0)$, normals $(1,1)$ and $(0,-1)$ are active and independent, so the rank is two and the point is a vertex.

</details>

### Exercise 2.2 — A singleton in the plane
<a id="polyhedra-extreme-points-ex-2"></a>

Use the active-normal criterion on $P=\{x\le0,-x\le0,y\le0,-y\le0\}$.

<details>
<summary>Hint 1</summary>

**Hint.** First identify the feasible set.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Opposite normals still span coordinate directions.

</details>
<details>
<summary>Solution</summary>

**Solution.** The set is the singleton $(0,0)$. All four rows are active, and their normals span $\mathbb R^2$. Thus the point is a vertex even though the polyhedron has dimension zero.

</details>

### Exercise 2.3 — A redundant inequality
<a id="polyhedra-extreme-points-ex-3"></a>

Does adding $2x+2y\le4$ to $x,y\ge0,x+y\le2$ change the vertices? Prove your answer.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the new row with an existing one.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The two feasible sets are identical.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new row is twice $x+y\le2$, so it is implied and implies nothing new. Both formulations define the same triangle with vertices $(0,0),(2,0),(0,2)$. At points on the hypotenuse the extra active normal is dependent.

</details>

### Exercise 2.4 — A recession cone
<a id="polyhedra-extreme-points-ex-4"></a>

Find the recession cone of $P=\{x\ge0,0\le y\le1\}$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the homogeneous row inequalities.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The upper and lower bounds force the vertical direction to vanish.

</details>
<details>
<summary>Solution</summary>

**Solution.** The homogeneous constraints give $d_x\ge0$, $d_y\ge0$, and $d_y\le0$. Hence the recession cone is $\{(t,0):t\ge0\}$. There is no nonzero lineality direction because both $d$ and $-d$ satisfy this only at zero.

</details>

### Exercise 2.5 — A full line
<a id="polyhedra-extreme-points-ex-5"></a>

Show directly that a polyhedron containing a line through each of its points has no vertices.

<details>
<summary>Hint 1</summary>

**Hint.** Use points one unit in both directions.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Apply the midpoint definition.

</details>
<details>
<summary>Solution</summary>

**Solution.** If a fixed nonzero direction $d$ gives $x\pm d\in P$ for each $x\in P$, then $x$ is the midpoint of two distinct feasible points. No point is extreme. A nonzero common null direction of all rows supplies such a line.

</details>

### Exercise 2.6 — An optimal face
<a id="polyhedra-extreme-points-ex-6"></a>

For the square $[0,1]^2$, describe the optimal face for maximise $x$ and for maximise $x+y$.

<details>
<summary>Hint 1</summary>

**Hint.** Find the tight objective bound.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check which feasible points attain equality.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first objective has maximum1 on the entire right edge $\{(1,t):0\le t\le1\}$. The second has maximum2 only at $(1,1)$. Optimal faces can therefore have different dimensions for the same polytope.

</details>

### Exercise 2.7 — A finite hull
<a id="polyhedra-extreme-points-ex-7"></a>

Let $P=\operatorname{conv}\{(0,0),(3,0),(0,2)\}$. Maximise $2x+5y$.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the listed points.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the finite-hull theorem for the global bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** The three values are0,6,10, so the maximum is10 at $(0,2)$. For a convex combination, any positive weight on either lower-valued point reduces the value; hence the optimiser is unique.

</details>

### Exercise 2.8 — Two-sided decomposition
<a id="polyhedra-extreme-points-ex-8"></a>

Express $(1/2,1/2)$ in $[0,1]^2$ as a convex combination of vertices in two different ways.

<details>
<summary>Hint 1</summary>

**Hint.** Use pairs of opposite corners.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check both coefficients sum to one.

</details>
<details>
<summary>Solution</summary>

**Solution.** It equals $\frac12(0,0)+\frac12(1,1)$ and also $\frac12(1,0)+\frac12(0,1)$. Vertex decompositions need not be unique, even though each representation proves membership.

</details>

### Exercise 2.9 — Fractional vertices
<a id="polyhedra-extreme-points-ex-9"></a>

Find the vertices of $P=\{x,y\ge0:2x+2y\le3\}$ and its maximum of $x+y$.

<details>
<summary>Hint 1</summary>

**Hint.** Intersect the boundary with the axes.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Integer coefficients do not imply integer intersections.

</details>
<details>
<summary>Solution</summary>

**Solution.** The vertices are $(0,0),(3/2,0),(0,3/2)$. The objective is bounded above by $3/2$ and attains that value on the whole segment between the two fractional vertices. An integer-domain version is a different problem.

</details>

### Exercise 2.10 — Why boundedness matters
<a id="polyhedra-extreme-points-ex-10"></a>

Identify the exact step in Theorem 2.7 that fails for a full line and for an improving unbounded ray.

<details>
<summary>Hint 1</summary>

**Hint.** Consider the first blocking time.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** There may be no row with positive directional derivative.

</details>
<details>
<summary>Solution</summary>

**Solution.** On a full line neither orientation has a blocking row, so active rank cannot be increased by that construction. Along an improving unbounded ray the chosen nondecreasing orientation may also have no blocker; then it proves objective unboundedness rather than vertex attainment.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

Vertices are extreme points, detected by the span of active normals rather than the number of active rows. Bounded polyhedra are finite vertex hulls and attain linear optima at vertices, while line-containing examples require care. Faces collect tight bounds and recession directions explain unbounded geometry. Standard form next connects vertices to independent column supports and bases.
