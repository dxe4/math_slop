var e=`---
id: deep-dive-topological-invariants
title: "Topological Invariants: Measuring Shape Without Measuring Length"
license: CC BY-SA 4.0
---

# Topological Invariants: Measuring Shape Without Measuring Length

**Before reading.** Read [Metric Spaces, Open Sets, and Closed Sets](../books/proof-safe-real-analysis/metric-spaces-open-and-closed.md), [Groups, Subgroups, and Generated Structure](../books/algebra-patterns-structure/groups-subgroups-generated-structure.md) and [Linear Maps, Isomorphism, and Rank–Nullity](../books/linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md). These are preparation for the ideas used below.

A rubber loop can be stretched into an ellipse without tearing. It cannot be stretched into a line segment while preserving its topology: removing an interior point disconnects a segment, whereas removing one point from a loop leaves it connected. Topology asks which properties survive continuous deformation, and invariants turn that question into something computable. You will need comfort with functions, basic groups and linear maps; if chains are new, begin with the triangle computation below and read a $k$-chain as a formal sum of oriented pieces.

## Spaces and homeomorphisms

A **topological space** is a set $X$ with a collection of open subsets containing the empty set and $X$, closed under arbitrary unions and finite intersections. A map $f:X\\to Y$ is continuous when the inverse image of every open set is open. A **homeomorphism** is a continuous bijection with continuous inverse. Homeomorphic spaces count as the same topological shape.

The inverse condition matters. The map from $[0,2\\pi)$ onto the unit circle given by $t\\mapsto(\\cos t,\\sin t)$ is a continuous bijection, but its inverse jumps at $(1,0)$; an interval with one endpoint excluded is not a circle.

An **invariant** assigns data $I(X)$ so that homeomorphic spaces receive the same data. Connectedness, compactness, and the number of components are basic invariants. They are useful but coarse: both the circle and the closed interval are compact and connected.

## Loops and the fundamental group

Choose a basepoint $x_0$. A loop is a continuous path $\\gamma:[0,1]\\to X$ with $\\gamma(0)=\\gamma(1)=x_0$. Two loops are **homotopic** if one can be continuously deformed into the other while endpoints remain fixed. Concatenating loops gives a product on homotopy classes. With the constant loop as identity and reversed paths as inverses, these classes form the **fundamental group** $\\pi_{1}(X,x_0)$.

For reasonable path-connected spaces, changing the basepoint produces an isomorphic group, though not a canonical one. A homeomorphism sends loops to loops and homotopies to homotopies, inducing a group isomorphism. Thus the fundamental group is a topological invariant.

On the circle, a loop can wind clockwise or anticlockwise. Lift a loop $\\gamma(t)$ to a continuous angle $\\theta(t)$ with $\\gamma(t)=(\\cos \\theta(t),\\sin \\theta(t))$. Because the endpoints agree, $\\theta(1)-\\theta(0)=2\\pi n$ for some integer $n$. This **winding number** adds under concatenation and does not change under homotopy. Conversely, loops with the same winding number can be deformed into one another. Therefore

$$\\pi_{1}(S^{1}) \\simeq \\mathbb Z$$

The integer $n$ is more than a label: it proves a loop winding once cannot contract to a point, whose winding number is zero.

### Worked comparison

**Worked example.**

The disk $D^{2}$ is **contractible**: the homotopy $H(x,t)=(1-t)x$ continuously shrinks every point to the origin. Hence every loop contracts and $\\pi_{1}(D^{2})$ is trivial. Since $\\pi_{1}(S^{1})\\simeq\\mathbb Z$, the disk and its boundary circle cannot be homeomorphic.

The sphere $S^{2}$ also has trivial fundamental group, however. So $\\pi_{1}$ does not distinguish the disk from the sphere. No single familiar invariant classifies all spaces.

## Euler characteristic

Choose a finite triangulation of a compact surface and count vertices $V$, edges $E$, and faces $F$. Its Euler characteristic is

$$\\chi=V-E+F$$

For a tetrahedral sphere, $\\chi=4-6+4=2$. For a torus represented by a suitably identified square, $\\chi=0$. Why should the answer not depend on the triangulation? If an edge belongs to $m$ triangular faces and we split it, the count changes by $(\\Delta V,\\Delta E,\\Delta F)=(1,m+1,m)$: the old edge is replaced by two, and each incident face gains a connecting edge and one extra face. Thus $\\Delta\\chi=0$. Adding a vertex inside a triangular face and connecting it to the three corners changes the counts by $(1,3,2)$, again giving zero. The standard common-subdivision theorem, together with such subdivision moves, makes $\\chi$ independent of the chosen finite triangulation of such a surface. Infinite triangulations do not permit this subtraction of three finite counts. This is a theorem about triangulations, not a claim that two pictures with the same count are homeomorphic.

Euler characteristic is not a complete invariant. The torus and Klein bottle both have $\\chi=0$ but are not homeomorphic; one is orientable and the other is not.

## Homology: holes made linear

Homology replaces paths and surfaces by formal sums so that linear algebra can detect holes. For a triangulated space, let $C_{k}$ be the free abelian group generated by oriented $k$-simplices. The boundary map $\\partial_{k}:C_{k}\\to C_{k-1}$ takes an oriented simplex to its alternating sum of faces. The crucial identity is

$$\\partial_{k-1} \\partial_{k}=0$$

every codimension-two face appears twice with opposite signs. Therefore every boundary is a cycle. The $k$th homology group is

$$H_{k} = \\ker(\\partial_{k}) / \\operatorname{im}(\\partial_{k+1})$$

It records cycles that are not themselves boundaries.

Triangulate a circle with vertices $1,2,3$ and cyclically oriented edges $e_1:1\\to2$, $e_2:2\\to3$, $e_3:3\\to1$. A 1-chain $ae_{1}+be_{2}+ce_{3}$ has zero boundary exactly when $a=b=c$, so the cycle group is generated by the once-around cycle $e_1+e_2+e_3$. There are no 2-simplices, hence no nonzero 1-boundaries. Thus $H_{1}(S^{1}) \\simeq \\mathbb Z$. If the triangle is filled by a face, its boundary is precisely that once-around cycle, so $H_{1}(D^{2})=0$. Algebra has detected the filled hole.

For a finite complex over a field, dimensions satisfy the Euler–Poincaré formula

$$\\chi = \\sum_{k} (-1)^{k} \\dim H_{k}$$

It follows by applying rank-nullity to each boundary map and observing that boundary-space dimensions cancel in the alternating sum. This explains why a combinatorial count equals an invariant of holes.

## Graph homology computed from a spanning tree

Treat a finite connected graph as a one-dimensional complex. There are vertices and edges but no 2-simplices, so

$$H_1(G)=\\ker\\partial_1.$$

Choose a spanning tree $T$. It has $V-1$ edges. Every remaining edge $e$ closes a unique cycle: follow $e$, then return along the unique path in $T$ between its endpoints. These **fundamental cycles** are independent because the cycle belonging to $e$ contains that particular non-tree edge and no other fundamental cycle does. They also span every cycle: subtract the appropriate fundamental cycle to remove each non-tree edge; what remains is a cycle supported inside a tree, and a tree has no nonzero cycle.

There are $E-(V-1)$ non-tree edges, so

$$H_1(G)\\simeq\\mathbb Z^{E-V+1}.$$

For a square with one diagonal, $V=4$ and $E=5$, so the rank is 2. Orient the square edges as $e_{12},e_{23},e_{34},e_{41}$ and the diagonal as $e_{13}$. Two cycles are

$$c_1=e_{12}+e_{23}-e_{13},\\qquad
c_2=e_{13}+e_{34}+e_{41}.$$

Their boundaries vanish, and the diagonal separates the two triangular routes. If the two triangular faces are filled in as 2-simplices, these same cycles become boundaries and $H_1$ vanishes. Homology records the complex, including which faces are filled, rather than the line drawing alone.

## Maps make invariants useful

The graph and triangle calculations used **simplicial** chains: formal sums of simplices in a chosen triangulation. An arbitrary continuous map need not take a simplex in one fixed triangulation onto a simplex in another; an edge may map to a curved path crossing several target simplices. Such a map does not supply a direct simplicial chain map between those chosen bases. A simplicial map does, and more general continuous maps can be handled by a suitable subdivision or approximation theorem under its hypotheses.

For arbitrary topological spaces, **singular** chains avoid that mismatch. A singular $k$-simplex is any continuous map $\\sigma:\\Delta^k\\to X$, and its boundary is the alternating sum of its restrictions to faces. A continuous $f:X\\to Y$ sends the generator $\\sigma$ to the generator $f\\circ\\sigma$. Restricting $f\\circ\\sigma$ to a face gives $f$ composed with the corresponding face restriction of $\\sigma$, so $f_\\#\\partial=\\partial f_\\#$. Passing to cycles modulo boundaries gives

$$f_*:H_k(X)\\to H_k(Y).$$

Composition and identity maps are preserved. Consequently a homeomorphism induces an isomorphism on every singular homology group. For a finite simplicial complex, the standard comparison theorem identifies simplicial and singular homology, so the triangle and graph calculations above compute the same invariants. We quote that comparison theorem here; the displayed chain construction explains the map-induced part directly. Homotopic maps also induce the same maps on singular homology, by the homotopy-invariance theorem (proved by a prism chain homotopy). This functorial behavior records how holes map, not just how many there are.

If $A\\subseteq X$ is a retract, there is an inclusion $i:A\\to X$ and a retraction $r:X\\to A$ with $r\\circ i=\\operatorname{id}_A$. On homology,

$$r_*\\circ i_*=\\operatorname{id}_{H_k(A)},$$

so $i_*$ is injective and $r_*$ is surjective. Those conclusions alone do **not** make either map an isomorphism: every circle retracts onto any chosen one-point subset by the constant map, while $H_1(S^1)\\simeq\\mathbb Z$ and $H_1(\\{p\\})=0$. The missing condition is that $i\\circ r$ be homotopic to $\\operatorname{id}_X$. When this holds, $A$ is a **deformation retract** of $X$, and homotopy invariance gives $i_*r_*=(i\\circ r)_*=\\operatorname{id}_{H_k(X)}$ as well. The two induced maps are then inverse isomorphisms.

For the punctured plane $X=\\mathbb R^2\\setminus\\{0\\}$ and $A=S^1$, radial projection is $r(x)=x/\\lVert x\\rVert$. Here the stronger condition can be verified rather than assumed. Define

$$H(x,t)=\\left((1-t)+\\frac{t}{\\lVert x\\rVert}\\right)x,\\qquad x\\in X,\\quad 0\\le t\\le1.$$

Both $1-t$ and $t/\\lVert x\\rVert$ are nonnegative and at least one is positive, so the coefficient is positive. Thus $H(x,t)\\ne0$ throughout, and the formula is continuous on $X\\times[0,1]$. It has $H(x,0)=x$ and $H(x,1)=r(x)=i(r(x))$; when $x\\in S^1$, the coefficient equals 1 for every $t$, so the circle stays fixed pointwise. This is a **strong deformation retraction**. Hence $i_*$ and $r_*$ are inverse on homology, and the triangle calculation gives

$$H_1(\\mathbb R^2\\setminus\\{0\\})\\simeq\\mathbb Z.$$

The missing point creates a loop that cannot be filled without passing through the puncture. The same homotopy equivalence also transfers $\\pi_1(S^1)\\simeq\\mathbb Z$ to $\\pi_1(X)$, with corresponding basepoints.

## What Euler characteristic says about closed surfaces

The classification theorem for closed connected surfaces gives two families. An orientable surface with $g$ handles has

$$\\chi=2-2g.$$

A nonorientable surface formed from $k$ projective-plane summands has

$$\\chi=2-k.$$

Thus a sphere has $\\chi=2$, a torus has $\\chi=0$, and a two-handled orientable surface has $\\chi=-2$. The Klein bottle is nonorientable with $k=2$, so it also has $\\chi=0$. Euler characteristic alone cannot distinguish it from the torus; orientability supplies the missing information. Within the classification of closed connected surfaces, orientability together with Euler characteristic determines the homeomorphism type.

The formula does not automatically apply to surfaces with boundary or noncompact surfaces. Removing an open disk changes the topology and requires the appropriate boundary version. State the class of spaces before treating a numerical invariant as a classifier.

## Common traps

- A picture that looks stretched is not a proof of homeomorphism; write the map and check its inverse.
- Homotopy equivalence is weaker than homeomorphism. A solid annulus retracts to a circle but is not homeomorphic to one.
- A trivial fundamental group does not imply a space is contractible; $S^{2}$ is a counterexample.
- Equal Euler characteristic does not guarantee homeomorphism.
- Homology deliberately forgets some information: different fundamental groups can have the same first homology.

## Practice ladder: from a count to a map

### 1. A first invariant

<a id="deep-dive-topological-invariants-ex-1"></a>

**Exercise 1.**

Prove that the continuous image of a connected space is connected. Then use a point-removal argument to distinguish a circle from a closed interval.

**Hint.** If the image had a separation, take inverse images. For the second part, remove a point that is interior to the interval.


<details>
<summary>Hint 1</summary>

A separation of the image would pull back along a continuous map.
</details>
<details>
<summary>Hint 2</summary>

Those inverse images would separate the connected domain, which is impossible; use the resulting invariant to compare spaces.
</details>
<details>
<summary>Solution</summary>

If $f(X)=U\\cup V$ were a disjoint union of two nonempty relatively open subsets, $f^{-1}(U)$ and $f^{-1}(V)$ would be disjoint nonempty open subsets separating $X$. Thus $f(X)$ is connected. A homeomorphism restricts to a homeomorphism after removing corresponding points. Removing any point from a circle leaves a connected space; removing an interior point from a closed interval leaves two components. Hence the spaces cannot be homeomorphic.

</details>

### 2. Count carefully

<a id="deep-dive-topological-invariants-ex-2"></a>

**Exercise 2.**

Compute $\\chi$ for the boundary of a cube. Does $\\chi=0$ distinguish a torus from a Klein bottle?

**Hint.** Count the cube's vertices, edges and square faces as a finite cell decomposition; subdividing the squares into triangles preserves the count.


<details>
<summary>Hint 1</summary>

Euler characteristic for a finite cell structure is vertices minus edges plus faces.
</details>
<details>
<summary>Hint 2</summary>

Count the cube-boundary cells, then compare its value with a torus without assuming Euler characteristic is complete.
</details>
<details>
<summary>Solution</summary>

The cube boundary has $8$ vertices, $12$ edges and $6$ faces, giving $8-12+6=2$. Dividing each square along a diagonal adds one edge and one face, so $\\chi$ stays 2. A torus and a Klein bottle both have $\\chi=0$; equality cannot establish homeomorphism. Orientability distinguishes them within the class of closed surfaces.

</details>

### 3. Fill one loop

Return to the square with diagonal and cycles $c_1,c_2$ above. Fill only the triangle with boundary $c_1$. Compute $H_1$ and explain why $c_2$ survives.

**Hint.** The original graph cycle group has basis $c_1,c_2$. Identify the image of $\\partial_2$ after adding one face.

**Reasoned solution.** Before filling, $\\ker\\partial_1=\\mathbb Zc_1\\oplus\\mathbb Zc_2$. The one 2-simplex has boundary $c_1$, so $\\operatorname{im}\\partial_2=\\mathbb Zc_1$. The quotient is $H_1\\simeq\\mathbb Z$, generated by the class of $c_2$. Filling the second triangle would add $c_2$ to the boundary subgroup and kill this class as well.

### 4. Audit a claimed isomorphism

A writer says, “$A$ retracts from $X$, so $H_k(A)\\simeq H_k(X)$ for every $k$.” Locate the unsupported implication, give a counterexample, and state an added hypothesis that makes the conclusion true.

**Hint.** Write the two composites $r\\circ i$ and $i\\circ r$ separately.

**Reasoned solution.** Retraction supplies $r\\circ i=\\operatorname{id}_A$, hence $r_*i_*=\\operatorname{id}_{H_k(A)}$; it gives no identity on $H_k(X)$. A point retracts from $S^1$, but their first homology groups are $0$ and $\\mathbb Z$. If $i\\circ r\\simeq\\operatorname{id}_X$, homotopy invariance supplies $i_*r_*=\\operatorname{id}_{H_k(X)}$, so the maps really are inverses.

### 5. Transfer a hole without counting edges

Let $A=\\{x\\in\\mathbb R^2:1\\le\\lVert x\\rVert\\le2\\}$. Construct a strong deformation retraction of $A$ onto its inner boundary circle, and determine $H_1(A)$.

**Hint.** Reuse the radial formula and check whether every intermediate radius remains in $[1,2]$.

**Reasoned solution.** Set $H(x,t)=((1-t)+t/\\lVert x\\rVert)x$. Its radius is $(1-t)\\lVert x\\rVert+t$, a convex combination of $\\lVert x\\rVert\\in[1,2]$ and 1, so it remains in $[1,2]$. At $t=0$ the map is the identity; at $t=1$ it is radial projection onto the inner circle; points with radius 1 are fixed throughout. Homotopy invariance therefore gives $H_1(A)\\simeq H_1(S^1)\\simeq\\mathbb Z$. The conclusion comes from the deformation, not from the retraction equation alone.

## Connections

Fundamental groups control covering spaces and knot complements. Homology and cohomology scale to manifolds, algebraic varieties, and data analysis. The recurring strategy is to translate flexible geometry into rigid algebra, compute there, and interpret the result back in terms of shape. In [Topology and Manifolds](#/item/course-topology-manifolds-standard), return to the compactness, quotient and chain-complex units: ask which maps actually exist before invoking an invariant, and distinguish a split injection from an isomorphism whenever a retract appears.
`;export{e as default};