var e=`---
id: deep-dive-shape-before-distance
title: "Shape Before Distance: A First Encounter with Topology"
license: CC BY-SA 4.0
---

# Shape Before Distance: A First Encounter with Topology

Topology begins with a mischievous question: what can we know about a shape if stretching is allowed but cutting and gluing are forbidden? A circle can become an oval, a wobbly loop, or the boundary of a square. None of those changes creates an endpoint or breaks the loop. A closed interval can bend into an arc, but it cannot become a circle without joining its two endpoints. Topology studies this durable structure.

This first encounter assumes no calculus and no proof course. It uses finite models and careful language to prepare for [the standard topology and manifolds course](#/item/course-topology-manifolds-standard). A picture suggests a claim; an invariant or a map must certify it.

## 1. Nearness without a ruler

On a usual number line, points close to $3$ lie in small intervals around $3$. Topology remembers which sets count as neighborhoods without insisting on a numerical distance. A **topological space** is a set $X$ together with a chosen collection of subsets called **open sets**. The choices must satisfy three rules:

1. the empty set and all of $X$ are open;
2. any union of open sets is open, even an infinite union;
3. the intersection of finitely many open sets is open.

The familiar open intervals generate the usual topology on the real line. Why only finite intersections? Every interval $(-1/n,1/n)$ is open, but their intersection over all positive integers is the single point $\\{0\\}$, which is not open in the usual topology. Requiring arbitrary intersections would throw away this central example.

A set is **closed** when its complement is open. “Closed” does not mean “not open.” The empty set and the whole space are both open and closed. In a finite set with the **discrete topology**, every subset is open and every subset is closed.

### A three-point experiment

Let $X=\\{a,b,c\\}$ and declare $\\varnothing,\\{a\\},\\{a,b\\},X$ open. The rules hold. Point $a$ has a very small neighborhood, while every neighborhood of $c$ is the whole space. This topology is not produced by the usual distance among three distinct points: it deliberately encodes asymmetric information. Topological spaces can model convergence, computation, and information as well as visible shape.

## 2. When are two spaces the same shape?

A map $f:X\\to Y$ is **continuous** when the inverse image of every open subset of $Y$ is open in $X$. This definition looks backward because inverse images behave perfectly with unions and intersections. A **homeomorphism** is a continuous bijection whose inverse is also continuous. Homeomorphic spaces are topologically indistinguishable.

Continuity of the inverse cannot be omitted. The map

$$t \\mapsto (\\cos(2\\pi t), \\sin(2\\pi t))$$

from $[0,1)$ to the unit circle is a continuous bijection, but the inverse jumps where angles wrap from values near $1$ back to $0$. Therefore a half-open interval is not a circle.

An **invariant** is information preserved by homeomorphisms. It is a one-way test: different invariant values prove spaces are not homeomorphic; equal values need not prove that they are.

## 3. Connectedness: can the space be separated?

A space is **disconnected** if it is the union of two disjoint, nonempty open sets; otherwise it is **connected**. The interval $[0,1]$ is connected. The set $[0,1]\\cup [2,3]$ is not: its two intervals give a separation in the subspace topology.

Continuous maps cannot tear connected spaces apart. More precisely, if $X$ is connected and $f:X\\to Y$ is continuous, then $f(X)$ is connected. To see why, suppose $f(X)$ had a separation. Taking inverse images of the two pieces would separate $X$, contradicting connectedness.

This theorem proves the intermediate value property. A continuous real-valued function on an interval has connected image, and the connected subsets of the real line are intervals. If its values pass from negative to positive, the image contains zero.

**Tempting mistake.** A space can be connected but not **path-connected**. Path-connected means every pair of points can be joined by a continuous path. The topologist’s sine curve gives a standard counterexample. For familiar open subsets of Euclidean space the two notions often coincide locally, which can hide the distinction.

## 4. Compactness: no escape through infinitely many patches

An **open cover** of $X$ is a family of open sets whose union contains $X$. A space is **compact** when every open cover has a finite subcover. Compactness says that an apparently infinite collection of local observations can be reduced to finitely many observations.

For subsets of ordinary Euclidean space, the Heine–Borel theorem says compact is equivalent to closed and bounded. Those words are not the general definition, and the equivalence depends on the Euclidean setting. In an arbitrary metric space, closed and bounded need not imply compact.

The interval $[0,1]$ is compact. The interval $(0,1)$ is not: the sets $(1/n,1)$ for $n\\ge 2$ cover it, but no finite selection reaches all points sufficiently near $0$. A continuous real-valued function on a nonempty compact space attains a maximum and minimum: its image is nonempty and compact, so it is closed and bounded in the real line and contains its greatest lower bound and least upper bound. The identity on $[0,1]$ attains $0$ and $1$, while on $(0,1)$ neither endpoint occurs. The empty space is compact but has no point at which an extremum could be attained.

## 5. Counting holes with a triangulation


**Worked example.**
Build a surface out of vertices, edges, and triangular faces. Its **Euler characteristic** is

$$\\chi = V - E + F$$

The boundary of a tetrahedron has $V=4$, $E=6$, and $F=4$, so $\\chi=2$. A triangle boundary has $3-3=0$; filling it adds one face and changes the value to $1$.

Subdividing an edge adds one vertex and one edge, changing $V-E+F$ by zero. Splitting a triangular face by adding a central vertex and three spokes changes the counts by $+1-3+2=0$. A deeper theorem shows any two triangulations of the same compact triangulable surface have compatible subdivisions, so the result does not depend on a lucky drawing.

Euler characteristic is useful but incomplete. The torus and Klein bottle both have characteristic zero, yet one is orientable and the other is not. An invariant is a measuring instrument, not necessarily a complete fingerprint.

Open the [Simplicial Homology Workbench](#/item/visual-lab-simplicial-homology) and compare an empty triangle, a filled triangle, a tetrahedron boundary, and a figure-eight graph. Its exact table remains available without the picture.

## 6. Loops remember obstacles

Choose a basepoint. A **loop** begins and ends there. Two loops are considered equivalent when one can be continuously deformed into the other while the basepoint stays fixed. Concatenating loops—follow the first, then the second—turns their deformation classes into the **fundamental group** $\\pi₁(X)$.

For the circle, a loop’s signed winding number is an integer. Winding numbers add when loops concatenate, and every integer occurs, giving $\\pi₁(S^{1})\\simeq Z$. In a disk every loop contracts radially to a point, so its fundamental group is trivial. This proves a circle is not homeomorphic to a disk.

But a trivial fundamental group does not mean “no topology.” The two-sphere also has trivial fundamental group and is not contractible. Later invariants, including second homology, detect its enclosed two-dimensional cycle.

Covering spaces make winding concrete. The map $p:R\\to S^{1}$, $p(t)=(\\cos(2\\pi t),\\sin(2\\pi t))$, unwraps the circle. A loop lifts to a path in $R$; the difference between its lifted endpoints is its winding number. This clean statement needs a standard local condition on a covering, not just any surjective continuous map.

## 7. Locally flat, globally surprising

A two-dimensional **manifold** is a space in which every point has a neighborhood homeomorphic to an open disk in $R^{2}$. The sphere and torus are surfaces. The crossing point of a figure eight is not locally a one-dimensional interval, so the figure eight is not a one-manifold.

A smooth manifold adds compatible coordinate charts so calculus makes sense. A Riemannian metric gives an inner product on every tangent space, varying smoothly, so lengths, angles, geodesics, and curvature can be measured. A symplectic form is different: it is a closed, nondegenerate two-form on an even-dimensional manifold, designed to encode oriented area and Hamiltonian mechanics rather than distance.

The distinction matters. Topology asks what survives arbitrary homeomorphism; smooth topology restricts to smooth maps with smooth inverses; Riemannian geometry preserves still more structure. A statement about curvature is not automatically topological. Gauss–Bonnet is remarkable precisely because it connects the integral of geometric curvature to topological Euler characteristic under stated hypotheses.

## 8. Knots and polynomial worlds

A **knot** is an embedding of a circle in three-dimensional space, considered up to continuous motion through embeddings. A knot diagram records overcrossings and undercrossings. Reidemeister’s theorem says two diagrams represent equivalent knots exactly when planar deformation and three kinds of local moves connect them. The theorem justifies diagram calculations; it does not say any attractive redrawing is legal.

In algebraic geometry, the shapes are solution sets of polynomial equations. The circle $x^{2}+y^{2}=1$ is one example over the real numbers, but the theory changes when the allowed number system changes. Modern algebraic geometry studies coordinate rings, varieties, schemes, and sheaves. A scheme is not merely “a curved surface made of zeros”: it retains nilpotent and arithmetic information that a set of visible points can lose. The [algebraic-geometry orientation](#/item/deep-dive-algebraic-geometry-orientation) marks exactly where elementary pictures end.

## Worked practice with complete answers

<a id="deep-dive-shape-before-distance-ex-1"></a>

**Exercise 1.**

**1. Open, closed, both, or neither?** In the usual real line, classify $(0,1)$, $[0,1]$, $R$, and $[0,1)$.
<details>
<summary>Hint 1</summary>

For openness, ask whether every included point has a small interval still inside the set.
</details>
<details>
<summary>Hint 2</summary>

For closedness, test whether the complement is open, especially at the endpoints.
</details>
<details>
<summary>Solution</summary>

$(0,1)$ is open but not closed. $[0,1]$ is closed but not open. $R$ is both. $[0,1)$ is neither: it contains no neighborhood around $0$, while its complement is not open at $1$.

</details>

<a id="deep-dive-shape-before-distance-ex-2"></a>

**Exercise 2.**

**2. A compactness warning.** Why do the sets $U_{n}=(1/n,1)$ cover $(0,1)$ but have no finite subcover?
<details>
<summary>Hint 1</summary>

An open cover need only contain each point in at least one member.
</details>
<details>
<summary>Hint 2</summary>

A finite selection has a largest index; look for a small positive point missed below its left endpoint.
</details>
<details>
<summary>Solution</summary>

Every $x>0$ lies in $U_{n}$ once $n>1/x$. A finite selection has a largest index $N$, and its union misses every positive $x\\le 1/N$.

</details>

### Further practice

**3. A cube boundary.** Compute its Euler characteristic.

**Answer.** The boundary has $8$ vertices, $12$ edges, and $6$ square faces, so $\\chi=8-12+6=2$. Triangulating each square consistently adds one edge and one face per square, leaving the result unchanged.

**4. Local test.** Why is a letter $Y$ not a one-dimensional manifold at its central junction?

**Answer.** Removing the junction from a sufficiently small neighborhood leaves three pieces. Removing the center of an open interval leaves two, so no neighborhood of the junction is homeomorphic to an open interval.

## Where to go next

Use [Topology Through Proof and Counterexample](#/item/book-topology-proof-counterexample) for the logical foundations, [Chains, Spaces, and Invariants](#/item/book-algebraic-topology-chains-spaces) for homology, and [Knots and Three-Manifold Windows](#/item/deep-dive-knots-three-manifolds) for low-dimensional topology. The first durable habit is already available: whenever a picture says two shapes differ, ask which preserved quantity or impossible map proves it.
`;export{e as default};