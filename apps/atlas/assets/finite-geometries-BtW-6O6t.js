var e=`---
parent_id: book-geometry-proof-reference
chapter_id: finite-geometries
title: "Finite Geometries"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Finite Geometries

## Learning purpose

Finite geometries are incidence structures with finitely many points. They provide concrete, computable examples where general theorems can be tested exhaustively, and they have applications in experimental design, coding theory, and cryptography. This chapter introduces finite affine and projective planes, counts their points and lines, and proves the Bruck–Ryser theorem on existence.

## Finite affine planes

A **finite affine plane** is an incidence structure satisfying:

- (A1) Any two distinct points lie on exactly one line.
- (A2) Given a line $\\ell$ and a point $P$ not on $\\ell$, there exists exactly one line through $P$ parallel to $\\ell$.
- (A3) There exist three noncollinear points.
- (A4) Every line contains at least two points.

In a finite affine plane the axioms imply that all lines have a common number $n\\ge2$ of points; this number is called the **order**.

**Theorem 12.5.** In a finite affine plane of order $n$, every point lies on exactly $n+1$ lines, there are $n+1$ parallel classes with $n$ lines in each class, and the total number of points is $n^{2}$.

**Proof sketch.** Fix a line $\\ell$ and a point $P$ off it. Joining $P$ to each of the $n$ points of $\\ell$, together with the unique line through $P$ parallel to $\\ell$, gives $n+1$ lines through $P$. Parallel projection between two lines along a third direction is a bijection, so every line has the same $n$ points and every point has the same $n+1$ incident lines. Each parallel class partitions the point set into lines of $n$ points; counting with a transversal shows there are $n$ lines per class. Hence there are $n^2$ points.

**Common error:** assuming that every integer $n$ yields an affine plane of order $n$. Existence is known for every prime power $n=p^k$ via $\\mathbb F_{p^k}$. The Bruck--Ryser--Chowla theorem rules out many orders, including $6$, and exhaustive computation rules out order $10$. Many composite non-prime-power orders remain open; there is no claim that only order $6$ is known not to exist.

## Finite projective planes

A **finite projective plane of order $n$** is a projective plane in which every line contains exactly $n+1$ points.

**Theorem 12.6.** In a finite projective plane of order $n$, every point lies on exactly $n+1$ lines, there are $n^{2}+n+1$ points, and there are $n^{2}+n+1$ lines.

**Proof.** Remove one line $\\ell_{\\infty}$ and its $n+1$ points from the projective plane. The remaining structure is an affine plane of order $n$, with $n^{2}$ points. Restoring $\\ell_{\\infty}$ adds $n+1$ points, giving $n^{2}+n+1$ total. By duality, the number of lines equals the number of points.

### The Fano plane revisited

The Fano plane is the projective plane of order $2$. It has $2^{2}+2+1 = 7$ points and $7$ lines, each line has $3$ points, and each point lies on $3$ lines. It can be constructed from the field $\\mathbb{F}_{2}$: points are nonzero triples $(x:y:z)$ with $x,y,z \\in \\mathbb{F}_{2}$, and lines are defined by linear equations over $\\mathbb{F}_{2}$.

## Coordinatization

After choosing a projective frame, every projective plane can be coordinatized by a **planar ternary ring**. Desargues' theorem is the additional condition that promotes the coordinates to a division ring, and Pappus' theorem promotes them further to a commutative field. For prime-power order, $\\mathbb{F}_{p^{k}}$ always gives a Desarguesian plane, while other planes need not have field coordinates.

**Theorem 12.7.** The projective plane $\\mathbb{P}^{2}(\\mathbb{F}_{q})$ over the finite field with $q$ elements has order $q$ and is Desarguesian.

**Proof sketch.** The number of nonzero triples in $\\mathbb{F}_{q}^{3}$ is $q^{3}-1$, and each point has $q-1$ scalar representatives, so the number of points is $(q^{3}-1)/(q-1) = q^{2}+q+1$. A line is the solution set of a linear equation; it contains $q^{2}-1$ nonzero solutions modulo $q-1$ scalars, giving $q+1$ points per line. Desargues' theorem holds because the coordinates allow linear algebra proofs identical to the real case.

## The Bruck–Ryser–Chowla theorem

**Theorem 12.8 (Bruck–Ryser–Chowla).** If a finite projective plane of order $n$ exists and $n \\equiv 1$ or $2 \\pmod{4}$, then $n$ must be expressible as a sum of two integer squares.

**Proof idea.** The incidence matrix $A$ of the plane satisfies $AA^{T} = nI + J$, where $J$ is the all-ones matrix. Rational congruence of quadratic forms implies that the Diophantine equation
$$z^{2} = nx^{2} + (-1)^{(n^{2}+n)/2} y^{2}$$
has a nontrivial integer solution. For $n \\equiv 1,2 \\pmod{4}$, this forces $n = a^{2}+b^{2}$.

**Consequence:** There is no projective plane of order $6$ (since $6 \\equiv 2 \\pmod{4}$ and $6$ is not a sum of two squares). There is no projective plane of order $14$ for the same reason.

**Boundary case:** The theorem is necessary but not sufficient. No projective plane of order $10$ exists, but $10 = 1^{2}+3^{2}$, so the Bruck–Ryser–Chowla condition does not rule it out. The nonexistence of order $10$ was proved by a massive computer search (Lam, Thiel, Swiercz, 1989).

## Applications

### Latin squares

An affine plane of order $n$ is equivalent to a set of $n-1$ mutually orthogonal Latin squares (MOLS) of order $n$. The existence of an affine plane of order $n$ implies the existence of $n-1$ MOLS, which is the maximum possible.

### Error-correcting codes

Taking the row span of a projective-plane incidence matrix (rows indexed by lines, columns by points) requires specifying a coefficient field; this is a separate choice from any field used to coordinatize the plane. For the Fano plane, its row span over $\\mathbb{F}_{2}$ is the binary $[7,4,3]$ Hamming code, which corrects one error. These parameters depend on the coefficient field: over $\\mathbb{F}_{5}$ the same $7\\times7$ incidence matrix has rank $7$ and its row code has minimum distance $1$. This online coefficient-field clarification leaves the retained draft PDF unchanged.

## Common errors

1. **Confusing affine and projective counts.** An affine plane of order $n$ has $n^{2}$ points; the corresponding projective plane has $n^{2}+n+1$ points. Forgetting to add the line at infinity leads to off-by-$n+1$ errors.
2. **Assuming all finite planes are field planes.** Non-Desarguesian planes exist for many orders (for example, order $9$). Their general coordinates are planar ternary rings; describing every such coordinate system merely as a nonassociative loop loses essential operations and identities.
3. **Treating the Bruck–Ryser–Chowla condition as sufficient.** It is only a necessary condition; many orders pass the test but have no known plane.

## Full counting arguments and algebraic models

Finite geometry is not a plane drawing with unusually few dots. Its lines are specified subsets or abstract incident objects, and Euclidean order need not exist. The counting theorems depend on unique joins, unique intersections where required, and the affine parallel axiom. We supply the counts without assuming a field coordinatization.

### Theorem 12.1 — Uniform affine order and all counts

First any two affine lines have the same number of points. If they are parallel, project one to the other along a direction different from theirs. Each projecting line meets both once, and reverse projection is its inverse. If the two lines intersect at O, choose A and B different from O on the respective lines. The direction of AB differs from both given directions, and projection along it again gives a bijection. Such alternate points exist by A4. Thus every line has a common finite size n>=2.

Fix a line ell and point P off it. Joining P to each of the n points of ell gives n different lines, and there is exactly one additional line through P parallel to ell. Any other line through P would either be that parallel or meet ell, so the list is exhaustive. Hence P lies on n+1 lines. For a point on ell, choose a line avoiding it and repeat. Such a line exists by taking a different point on ell and a point off ell; their join cannot pass through the original point without becoming ell.

A parallel class partitions the point set, since through every point there is exactly one line with that direction. A transversal in another direction meets every member once. Therefore the number of class members equals the n points on the transversal. The class covers all points by n disjoint lines each containing n points, giving n² points. There are n+1 classes, one for each line direction through a fixed point, and n(n+1) lines altogether. This completes the uniformity step and the counts previously sketched.

### Theorem 12.2 — Completion and deletion

Complete an affine plane by adding one ideal point for each parallel class, placing that point on every line of its class, and adding one line containing all the ideal points. Two old points retain their unique old join. An old point and an ideal point determine the unique old line of that direction through the point. Two different ideal points join on the new infinity line.

Two old lines in different directions meet at their old intersection, while two parallel old lines now meet at their class point. An old line meets the infinity line exactly at that same class point. Thus the projective join and intersection axioms hold. For nondegeneracy, two lines of one class and two of another form a four-corner grid. No three of its corners are collinear: among any three, two share a row whose unique joining line excludes the third. Hence a quadrangle exists.

Conversely, delete a projective line and all its points. Its intersection with an old line records that line's direction. Through a remaining point, the unique projective join to a direction point gives the unique affine parallel line. Distinct direction points give intersecting remaining lines. For affine nondegeneracy, choose two different points A1,A2 on a remaining line r and off the deleted line ell, and two different points B1,B2 on ell and off r. Each projective line has at least three points. The lines A1B1 and A2B2 intersect at R outside both r and ell: an intersection on r would force A1=A2, and one on ell would force B1=B2. Thus A1,A2,R remain noncollinear after deletion. In particular deleting from a projective plane of order n leaves the affine structure counted above.

### Theorem 12.3 — Projective counts directly

At a projective point P choose a line ell not containing it. Joining P to each of ell's n+1 points gives exactly all the n+1 lines through P, because every line through P meets ell once. Such a line avoiding P exists from the quadrangle axiom.

These n+1 lines meet pairwise only at P and each has n further points. They exhaust the point set by unique joins. Therefore the plane has
$1+n(n+1)=n^2+n+1$
points. Counting incident point-line pairs in two ways, and using n+1 on both sides, gives the same number of lines. This direct proof avoids relying on equality of two counts before the affine deletion argument has been checked.

### Theorem 12.4 — The affine field model

For a finite field F with q elements, take points F² and lines x=c or y=mx+b. Two points with equal first coordinate have the unique vertical join. Otherwise division by the nonzero first-coordinate difference determines one slope and one intercept. Equal-slope distinct lines do not meet; different slopes meet by solving one nonzero linear equation. A vertical and nonvertical line meet by substituting their specified x coordinate.

Thus all affine axioms hold, including uniqueness of the parallel through a point. Each line has q points. Its projective completion agrees with the subspace model P²(F): an infinity point (1:m:0) records slope m, and (0:1:0) records the vertical direction. The field-plane Desargues theorem follows from the full coordinate proof in [Projective Planes](projective-planes.md).

Existence of a field of every prime-power size is a separate algebraic theorem used here as an input. One should not replace a field by arithmetic modulo an arbitrary integer and expect the same geometry. In Z/6Z, the points (0,0) and (2,0) lie on both y=0 and y=3x. Unique join fails because division by a nonzero element is not always available.

## Worked examples

### Worked example 1 — The affine plane over three elements

Use coordinates modulo three. There are nine points, four directions 0,1,2,infinity, and three parallel lines of each direction. For instance y=2x+1 contains (0,1),(1,0),(2,2).

Intersect it with y=x+2. The equation 2x+1=x+2 gives x=1 and y=0. It is one point, as required. Two lines y=2x+1 and y=2x+2 have no affine intersection but meet at the projective point (1:2:0). Completion adds four direction points, making thirteen points and thirteen lines. Modular coordinates here use the field F3, not Euclidean segments between the plotted representatives.

### Worked example 2 — The Fano incidence code proved

Label the seven nonzero F2³ vectors as
$1=e_1,\\ 2=e_2,\\ 3=e_3,\\ 4=e_1+e_2,\\ 5=e_1+e_3,\\ 6=e_2+e_3,\\ 7=e_1+e_2+e_3.$
Every line consists of a,b,a+b for two different nonzero vectors. Let H be the three-by-seven binary matrix with these seven vectors as columns. A line's indicator row w satisfies Hw=0, because its three column vectors sum to zero. Hence the binary row span of the incidence matrix lies in ker H.

The columns e1,e2,e3 make rank H=3, so ker H has dimension four. The four line indicators supported on 124,135,236,167 are independent: coordinates 4,5,7 force the first, second, and fourth coefficients to vanish, and then the third coefficient vanishes. Therefore the incidence row span has dimension four and equals ker H.

No nonzero vector in this kernel has weight one, because no column is zero, or weight two, because no two columns agree. A line indicator has weight three, so minimum distance is exactly three. This proves the [7,4,3] claim. A single changed bit has syndrome equal to its unique nonzero column, identifying the error position.

This proof depends on the binary coefficient field. Over F5, the same incidence matrix A satisfies AA^T=2I+J. This matrix acts by 2 on the sum-zero subspace and by 9 on the all-ones direction, both nonzero modulo five. Thus A is invertible, its row span is the whole seven-dimensional space, and minimum distance is one. Identical incidence data can produce different codes over different coefficient fields.

### Worked example 3 — Necessary arithmetic is not existence

For order six, the sum-of-two-squares obstruction applies because six is two modulo four, and the only squares at most six are 0,1,4. No pair sums to six. Order fourteen similarly fails with possible squares 0,1,4,9.

Order ten passes that particular necessary condition because 10=1+9. It nevertheless has no projective plane, by the separate computer-assisted nonexistence result of Lam, Thiel, and Swiercz. Checking a necessary condition can rule out a structure but cannot manufacture one.

The Bruck–Ryser–Chowla paragraph above is deliberately a proof idea, not a full derivation of the rational quadratic-form obstruction. We cite that theorem as an imported arithmetic result. The incidence identities and finite counting proofs in this chapter do not supply the omitted quadratic-form theory, and the order-ten result is also cited rather than reproduced as an elementary argument.

## Incidence matrices and useful limits

For a projective plane of order n, index rows by lines and columns by points. Each row has n+1 ones. Distinct rows overlap in exactly one position, so over the integers
$AA^T=nI+J.$
This follows directly by reading each matrix entry as a number of common incident points. Passing to another coefficient field reduces the entries and can change the rank.

Over the reals, nI+J is positive definite for n>0, so A is invertible. This proves that the real incidence rows are linearly independent. It does not settle existence for a proposed n: the identity is a necessary property of a matrix that would come from a plane. Constructing an arbitrary zero-one matrix satisfying some row counts is not enough to establish every plane axiom.

The same caution applies to Latin squares. Labeling rows, columns, and additional parallel classes of an affine plane produces orthogonal Latin squares. Recovering a plane from a proposed collection requires the full orthogonality conditions. A handful of matching entries or pairwise numerical counts cannot replace them.

Finite examples are valuable because the entire configuration can be written down and reasoned about. Their main proof role is structural: they separate incidence from Euclidean order, exhibit field dependence, and show how local counts constrain a global design. They do not turn every geometric existence theorem into a trivial finite calculation.

## Practice exercises

<a id="finite-geometries-ex-1"></a>
### Exercise 1
Construct the affine plane of order $2$ from $\\mathbb{F}_{2}$ and list all its points and lines.


<details>
<summary>Hint 1</summary>

Use the field with two elements.

</details>
<details>
<summary>Hint 2</summary>

There are two lines in each of the three directions.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Points are pairs $(x,y)$ with $x,y \\in \\mathbb{F}_{2} = \\{0,1\\}$:
$$(0,0),\\;(0,1),\\;(1,0),\\;(1,1).$$
Lines have equations $y = mx + c$ or $x = c$:
- Slope $0$: $y=0$ gives $\\{(0,0),(1,0)\\}$; $y=1$ gives $\\{(0,1),(1,1)\\}$.
- Slope $1$: $y=x$ gives $\\{(0,0),(1,1)\\}$; $y=x+1$ gives $\\{(0,1),(1,0)\\}$.
- Vertical: $x=0$ gives $\\{(0,0),(0,1)\\}$; $x=1$ gives $\\{(1,0),(1,1)\\}$.
There are $6$ lines in $3$ parallel classes (slopes $0,1,\\infty$), each class partitioning the $4$ points.


</details>

<a id="finite-geometries-ex-2"></a>
### Exercise 2
Show that the projective plane of order $3$ has $13$ points and $13$ lines, with $4$ points per line and $4$ lines through each point.


<details>
<summary>Hint 1</summary>

Apply the projective counting formula.

</details>
<details>
<summary>Hint 2</summary>

Order three means four points on each line.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
By the counting theorem, the number of points is $n^{2}+n+1 = 9+3+1 = 13$. By duality, the number of lines is also $13$. Each line contains $n+1 = 4$ points, and each point lies on $n+1 = 4$ lines.


</details>

<a id="finite-geometries-ex-3"></a>
### Exercise 3
Verify that the Bruck–Ryser–Chowla theorem rules out projective planes of order $6$ and $14$, but not $10$.


<details>
<summary>Hint 1</summary>

List the squares no larger than the proposed order.

</details>
<details>
<summary>Hint 2</summary>

Passing a necessary condition does not prove existence.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
- $6 \\equiv 2 \\pmod{4}$. Is $6$ a sum of two squares? The squares $\\leq 6$ are $0,1,4$. No pair sums to $6$. Hence no plane of order $6$.
- $14 \\equiv 2 \\pmod{4}$. Squares $\\leq 14$ are $0,1,4,9$. No pair sums to $14$. Hence no plane of order $14$.
- $10 \\equiv 2 \\pmod{4}$. Since $10 = 1^{2}+3^{2}$, the theorem permits a plane of order $10$. However, exhaustive computer search proved none exists.


</details>

<a id="finite-geometries-ex-4"></a>
### Exercise 4
Explain why the Fano plane cannot be extended to an affine plane of order $2$ by removing one line.


<details>
<summary>Hint 1</summary>

Check whether the assertion in the question is true.

</details>
<details>
<summary>Hint 2</summary>

Delete the line and its three points, then restrict the remaining six lines.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Removing one line and its three points from the Fano plane leaves $4$ points. Each of the other six lines retains $2$ points, producing the six lines of the affine plane of order $2$ in three parallel pairs. Thus the Fano plane **can** be reduced to an affine plane by deleting its line at infinity; projective completion is the reverse construction. The exercise tests whether the reader confuses the direction of the embedding.


</details>

## Further exercises

<a id="finite-geometries-ex-5"></a>
### Exercise 12.5

Count points, lines, and parallel classes in the affine plane over F5.

<details>
<summary>Hint 1</summary>

Use the direct affine count.

</details>

<details>
<summary>Hint 2</summary>

Include the vertical direction.

</details>

<details>
<summary>Full solution</summary>

There are 25 points, six directions, five lines per direction, and 30 lines total. Through each point lie six lines. Every line has five points. All these counts follow from the field construction or the abstract affine theorem.

</details>

<a id="finite-geometries-ex-6"></a>
### Exercise 12.6

Complete that affine plane projectively and give the resulting counts.

<details>
<summary>Hint 1</summary>

Add one point per direction and one infinity line.

</details>

<details>
<summary>Hint 2</summary>

Each old line gains its direction point.

</details>

<details>
<summary>Full solution</summary>

Six added points give 31 points. The 30 old lines plus the infinity line give 31 lines. Every line contains six points and every point lies on six lines. The ideal points are ordinary projective points, not elements at an infinite metric distance.

</details>

<a id="finite-geometries-ex-7"></a>
### Exercise 12.7

Prove AA^T=nI+J for a projective-plane incidence matrix over the integers.

<details>
<summary>Hint 1</summary>

Interpret a matrix entry as a common-point count.

</details>

<details>
<summary>Hint 2</summary>

Separate equal and distinct rows.

</details>

<details>
<summary>Full solution</summary>

The diagonal entry counts the n+1 points on a line. A distinct-row entry counts the one intersection point of two lines. The matrix nI+J has diagonal n+1 and off-diagonal one, so it is exactly the product. The argument is combinatorial and precedes any reduction modulo a field characteristic.

</details>

<a id="finite-geometries-ex-8"></a>
### Exercise 12.8

Show explicitly why the Z/6Z line construction fails unique joins.

<details>
<summary>Hint 1</summary>

Compare y=0 and y=3x.

</details>

<details>
<summary>Hint 2</summary>

Evaluate both at x=0 and x=2.

</details>

<details>
<summary>Full solution</summary>

Both lines contain (0,0) and (2,0), because 3 times 2 is zero modulo six. They are distinct since at x=1 they give different y values. Thus two distinct points have two distinct joins, violating the affine incidence axiom. Nonzero does not mean invertible in this ring.

</details>

<a id="finite-geometries-ex-9"></a>
### Exercise 12.9

Explain why a binary kernel with parity-check columns all distinct and nonzero has no word of weight one or two.

<details>
<summary>Hint 1</summary>

Multiply a short-support vector by H.

</details>

<details>
<summary>Hint 2</summary>

In F2 a sum of two columns vanishes only if they agree.

</details>

<details>
<summary>Full solution</summary>

A weight-one word produces its nonzero column as syndrome, so is not in the kernel. A weight-two word produces the sum of two different columns, which cannot vanish because that would make them equal. Thus any nonzero kernel word has weight at least three. Existence of a line word shows equality for the Fano code.

</details>

<a id="finite-geometries-ex-10"></a>
### Exercise 12.10

Does an integer n passing the sum-of-two-squares condition necessarily admit a projective plane?

<details>
<summary>Hint 1</summary>

Recall the order-ten example.

</details>

<details>
<summary>Hint 2</summary>

Distinguish an obstruction from a construction.

</details>

<details>
<summary>Full solution</summary>

No. The condition is necessary in its stated congruence classes, not sufficient. Ten equals 1²+3² and passes it, while the cited order-ten nonexistence theorem excludes a plane. An existence proof needs a construction or another affirmative theorem, not merely absence of this obstruction.

</details>

## Forward and backward connections

This chapter applies the projective axioms of **Projective Planes** to the finite setting. The counting techniques and field coordinatizations are essential for **Incidence Geometry**, which studies weaker incidence structures and their combinatorial properties. The error-correcting code application points forward to **Geometric Measure Theory** and to algebraic geometry.

## Sources

The finite counting, field-model, and coding arguments are supplied here. Imported arithmetic source: R. H. Bruck and H. J. Ryser, [The Nonexistence of Certain Finite Projective Planes](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2A2E0D91C8E872232A01C7519F14D705/S0008414X00028686a.pdf/the-nonexistence-of-certain-finite-projective-planes.pdf), Canadian Journal of Mathematics 1 (1949). Imported computer-assisted result: C. W. H. Lam, L. Thiel, and S. Swiercz, [The Non-Existence of Finite Projective Planes of Order 10](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/EBD5E851090B1983978BBC6FE18D2A3F/S0008414X00002534a.pdf/the-non-existence-of-finite-projective-planes-of-order-10.pdf), Canadian Journal of Mathematics 41 (1989).

## Summary

Affine and projective plane counts follow from incidence and parallel classes, without assuming field coordinates. A finite field supplies a concrete plane model, while composite-modulus rings can fail unique joins. Incidence matrices expose further algebraic constraints and coefficient-field dependence. Arithmetic obstructions, field existence, and the order-ten computer result remain explicitly identified inputs rather than consequences claimed from counting alone.
`;export{e as default};