var e=`---
parent_id: book-smooth-manifolds
chapter_id: topological-manifolds-charts
title: "Topological Manifolds and Charts"
level: graduate
license: CC BY-SA 4.0
---

# Topological Manifolds and Charts {#section-1-topological-manifolds-and-charts}

Coordinates describe points by lists of real numbers, but one coordinate list need not describe an entire geometric object. A circle has ordinary interval coordinates near every point, while a coordinate chart onto one open interval cannot cover the whole compact circle. A torus has planar coordinates in small neighborhoods without being globally a plane. The starting question for manifold theory is therefore local: what topology makes these coordinate descriptions legitimate, and which global assumptions must accompany them?

This is an L4 opening chapter. Preparation is [Topological Manifolds and Surfaces](/books/topology-proof-counterexample/topological-manifolds-and-local-euclidean-structure/), [Subspaces and Embeddings](/books/topology-proof-counterexample/subspaces-embeddings-and-relative-topology/), and the countability and compactness tools of point-set topology. The longer point-set text owns the surface-classification discussion. Here we establish the coordinate foundations needed for later smooth structures, without proving general surface classification or importing it into elementary chart arguments.

We use real, finite-dimensional, Hausdorff, second-countable manifolds. The dimension $n$ is fixed and nonnegative. Unless explicitly stated otherwise, manifolds have no boundary. The empty space is allowed in every dimension. Invariance of dimension, a deep topological theorem supplied as a named input when needed, makes the dimension unique for nonempty manifolds; none of the coordinate constructions below is offered as a proof of that theorem.

<a id="section-7-1-charts-are-homeomorphisms-onto-open-sets"></a>
## 1. Charts are homeomorphisms onto open sets {#section-9-1-charts-are-homeomorphisms-onto-open-sets}

**Definition 1.1 (Topological manifold and chart).** A topological $n$-manifold is a Hausdorff, second-countable space $M$ such that every point belongs to an open subset $U\\subseteq M$ admitting a homeomorphism

$$\\varphi:U\\longrightarrow V,$$

where $V$ is open in $\\mathbb R^n$. The pair $(U,\\varphi)$ is a coordinate chart. A family of charts whose domains cover $M$ is an atlas.

The homeomorphism condition includes continuity of both $\\varphi$ and its inverse. A continuous bijection without a continuous inverse does not supply a chart. The image must be open in the full Euclidean model, rather than merely an arbitrary subspace of it. This openness lets local Euclidean arguments operate around the coordinate of every point.

A chart's domain is an actual subset of the manifold. Its coordinates are values assigned by $\\varphi$; they are not the points themselves. For $p\\in U$, the coordinate tuple $\\varphi(p)$ depends on the chart. Later derivatives must therefore be checked against coordinate changes rather than treated as properties of a preferred list.

**Proposition 1.2 (Restriction).** If $(U,\\varphi)$ is a chart and $W\\subseteq U$ is open in $M$, then $(W,\\varphi|_W)$ is a chart.

*Proof.* A restriction of a homeomorphism is a homeomorphism onto its image. Because $W$ is open in $U$ and $\\varphi$ is a homeomorphism, $\\varphi(W)$ is open in $V$. Since $V$ is open in $\\mathbb R^n$, so is $\\varphi(W)$. The restricted domain is open in $M$, as required. ∎

An open subspace of an $n$-manifold is consequently another $n$-manifold: restrict the charts, and inherit Hausdorffness and second countability. Arbitrary subspaces need not be manifolds. For example, crossing coordinate axes have a different local branching structure at their intersection.

<a id="section-25-2-coordinates-agree-through-transition-maps"></a>
## 2. Coordinates agree through transition maps {#section-27-2-coordinates-agree-through-transition-maps}

**Definition 1.3 (Transition map).** For overlapping charts $(U,\\varphi)$ and $(W,\\psi)$, the transition from $\\varphi$ coordinates to $\\psi$ coordinates is

$$\\tau_{\\psi\\varphi}=\\psi\\circ\\varphi^{-1}:\\varphi(U\\cap W)\\longrightarrow\\psi(U\\cap W).$$

Both coordinate domains are open in $\\mathbb R^n$, and the transition is a homeomorphism. Indeed, the overlap is open in both chart domains, and restriction followed by composition preserves the homeomorphism property. Its inverse is $\\tau_{\\varphi\\psi}$.

On a triple overlap the transitions satisfy the cocycle identity

$$\\tau_{\\chi\\varphi}=\\tau_{\\chi\\psi}\\circ\\tau_{\\psi\\varphi}.$$

This equation is asserted only where all three coordinate descriptions are available. Substituting the definitions gives $\\chi\\varphi^{-1}=\\chi\\psi^{-1}\\psi\\varphi^{-1}$ there. Tracking the domains is necessary: the symbolic composition is not an instruction to evaluate a chart outside its own domain.

Topological compatibility is automatic for charts of a fixed topological manifold: each transition is already a homeomorphism. Smooth compatibility will impose more. On the real line, the identity chart and $x\\mapsto x^3$ are both topological charts onto $\\mathbb R$. The inverse cube-root function is continuous but not differentiable at zero, so these charts do not have smooth transitions in both directions. Continuity of coordinates is a weaker requirement than the later smooth-atlas condition.

**Proposition 1.4 (Local coordinate test).** For an atlas, a subset $A\\subseteq M$ is open exactly when $\\varphi(A\\cap U)$ is open in each coordinate image. A map $f:M\\to Y$ is continuous exactly when $f\\circ\\varphi^{-1}$ is continuous on every coordinate image.

*Proof.* For openness, one direction follows from restriction of the chart. Conversely, the stated coordinate condition makes $A\\cap U$ open in $U$, hence in $M$. Their union over chart domains is $A$. For continuity, the forward direction is composition. In the reverse direction, for every open $O\\subseteq Y$ the intersection $f^{-1}(O)\\cap U$ is open by the coordinate expression. The openness criterion just proved gives $f^{-1}(O)$ open. ∎

<a id="section-45-3-countable-atlases-and-the-global-countability-axiom"></a>
## 3. Countable atlases and the global countability axiom {#section-47-3-countable-atlases-and-the-global-countability-axiom}

**Theorem 1.5 (Countable-atlas criterion).** A locally Euclidean space is second-countable if and only if it has a countable atlas.

*Proof.* Suppose an atlas is countable. Each open coordinate image has a countable basis, obtained by restricting a countable Euclidean basis. Pull these bases back through the charts. Their countable union is countable. Given any open set and any point of it, use a chart containing the point and a pulled-back basis member inside its intersection with that chart. Thus the union is a basis for the whole space.

Conversely, let $(B_j)$ be a countable basis for the space. Retain the basis members contained in at least one chart domain. They cover: around any point, choose a chart and then a basis member contained in it. For each retained $B_j$, choose one containing chart and restrict that chart to $B_j$. The resulting countable family is an atlas. ∎

This proof uses countability globally. It does not say that an arbitrary union of second-countable open sets is second-countable. In particular, an uncountable disjoint union of copies of the real line has interval charts at every point and is Hausdorff, but fails second countability. A countable basis would need a different nonempty member inside each disjoint open component, which is impossible.

A second-countable space is Lindelof. Given an open cover, consider basis members lying inside some cover member, and select one such cover member for each relevant basis member. These countably many choices still cover the space. This elementary reduction will turn local compact coordinate neighborhoods into countable global constructions.

<a id="section-57-4-shrinking-charts-and-local-consequences"></a>
## 4. Shrinking charts and local consequences {#section-59-4-shrinking-charts-and-local-consequences}

**Theorem 1.6 (Relatively compact chart neighborhoods).** For every $p\\in M$ and every open neighborhood $O$ of $p$, there is a chart neighborhood $W$ of $p$ whose closure in $M$ is compact and contained in $O$.

*Proof.* Choose a chart and restrict it to its intersection with $O$. Its coordinate image is open and contains $\\varphi(p)$. Choose a Euclidean open ball about that point with closed ball contained in the image. Its inverse image $W$ is a chart neighborhood. The inverse image $K$ of the closed ball is compact, by Euclidean compactness and continuity of the inverse chart. Since $M$ is Hausdorff, $K$ is closed in $M$. Hence $\\overline W\\subseteq K\\subseteq O$; the closure is a closed subset of compact $K$, so is compact. In dimension zero the same argument uses the one-point Euclidean model. ∎

Thus manifolds are locally compact and regular. The shrinking property supplies the regular-neighborhood criterion, and Hausdorffness includes the required separation of points. Chart balls also show local path connectivity and local contractibility. The straight contraction of a coordinate ball to $\\varphi(p)$ transports through the chart to a contraction of its inverse image.

Every connected manifold is path-connected. Fix a point and let $A$ be the points reachable from it by a path. A small path-connected chart ball meeting $A$ lies wholly in $A$, so $A$ is open. A chart ball meeting its complement cannot meet $A$, for otherwise its paths would connect back to the fixed point. Hence the complement is open too. Connectedness forces $A=M$.

Components are therefore open, and there are at most countably many. Each contains a nonempty member of a fixed countable basis; different components require different members. The theorem also gives sigma-compactness: cover $M$ by the neighborhoods $W$ just constructed, take a countable subcover by Lindelofness, and use their compact closures. Their union is all of $M$.

The point-set Urysohn metrization theorem applies to a regular second-countable Hausdorff space and supplies a compatible metric. This is a named input from [Metrization Theorems](/books/topology-proof-counterexample/metrization-theorems-and-compatible-metrics/). It supplies no preferred distance, inner product or Riemannian metric; those are additional geometric choices developed later.

<a id="section-71-5-worked-examples-and-a-global-axiom-failure"></a>
## 5. Worked examples and a global-axiom failure {#section-73-5-worked-examples-and-a-global-axiom-failure}

<a id="section-73-worked-example-1-a-four-chart-circle-atlas"></a>
### Worked example 1 — A four-chart circle atlas {#section-75-worked-example-1-a-four-chart-circle-atlas}

Let $S^1=\\{(x,y):x^2+y^2=1\\}$ with its Euclidean subspace topology. It is Hausdorff and second-countable as a subspace of $\\mathbb R^2$. On the open right semicircle $x>0$, use coordinate $t=y$. Its image is $(-1,1)$ and its inverse is $t\\mapsto(\\sqrt{1-t^2},t)$. Both directions are continuous and are inverse by the circle equation and the positive sign of $x$.

The left semicircle uses the negative square root. Upper and lower semicircles use $x$ as coordinate and solve for the appropriate sign of $y$. These four charts cover every circle point because at least one coordinate is nonzero. On the first-quadrant overlap, changing from the right-semicircle coordinate $t=y$ to the upper-semicircle coordinate $s=x$ gives $s=\\sqrt{1-t^2}$ for $0<t<1$. Its inverse has the same square-root form. The overlap domains and sign choices are part of the calculation, rather than assumptions left to a drawing.

<a id="section-79-worked-example-2-local-charts-for-a-quotient-torus"></a>
### Worked example 2 — Local charts for a quotient torus {#section-81-worked-example-2-local-charts-for-a-quotient-torus}

Let $T^2=\\mathbb R^2/\\mathbb Z^2$, where points differ by an integer vector, with quotient map $q$. This map is open: the inverse image of $q(U)$ is the union of the integer translates of $U$, open whenever $U$ is open. A box about $x$ with each side length less than one meets no nonzero integer translate of itself. The restriction of $q$ to that box is therefore injective, and its openness and continuity make it a homeomorphism onto its open image. Composing its inverse with the Euclidean coordinates gives a chart.

The quotient is Hausdorff. For inequivalent representatives $x,y$, the vector $x-y$ has positive distance from the integer lattice: only finitely many lattice points lie in any bounded region, none equals this vector, and distant ones cannot approach it. Choose balls about $x,y$ of radius less than one third of that distance. No integer translates of these balls meet, so their quotient images are disjoint open neighborhoods.

Images of a countable Euclidean basis form a countable basis for the quotient because $q$ is open and surjective. Thus all manifold axioms hold. This verifies the quotient topology as well as the local picture; identifying opposite sides in a sketch alone would not establish those properties.

<a id="section-87-worked-example-3-the-line-with-two-origins"></a>
### Worked example 3 — The line with two origins {#section-89-worked-example-3-the-line-with-two-origins}

Start with two copies of $\\mathbb R$ and identify corresponding nonzero points, leaving their origins distinct. Give the result the quotient topology. Each entire copy maps homeomorphically onto the complement of the other origin, an open subset: the quotient map is open because saturation only adds corresponding nonzero open pieces to the other copy. These two subsets supply interval coordinates and a countable basis.

Nevertheless the result is not Hausdorff. Neighborhoods of the two origins pull back to intervals about zero in the separate copies. They contain corresponding sufficiently small nonzero points, which are identified in the quotient. Thus every pair of such neighborhoods intersects. Local Euclidean structure and second countability have survived, while Hausdorffness has failed. The global axiom in Definition 1.1 therefore does real work.

<a id="section-93-6-boundary-conventions-and-what-comes-next"></a>
## 6. Boundary conventions and what comes next {#section-95-6-boundary-conventions-and-what-comes-next}

A manifold with boundary uses relatively open subsets of the closed half-space instead of only open Euclidean subsets. That is a separate convention. The interval $[0,1)$ has a half-line chart at zero, while ordinary interior points have interval charts. The general invariance of the boundary subset under coordinate changes is a topological theorem, not a consequence of assigning the word “edge” to a picture.

The next chapter introduces smooth atlases: a chosen class of topological charts with smooth transitions and smooth inverse transitions. The preceding work supplies their open domains, countable reductions and topology. Derivatives will act on these coordinate expressions, with explicit compatibility rather than a global coordinate assumption.

<a id="section-99-exercises"></a>
## Exercises {#section-101-exercises}

<a id="section-101-exercise-1"></a>
### Exercise 1 {#section-103-exercise-1}
<a id="topological-manifolds-charts-ex-1"></a>
Prove that a nonempty topological zero-manifold is exactly a countable discrete space, under this chapter's conventions.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The Euclidean model in dimension zero consists of one point.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
In a discrete space, a basis must contain every singleton.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A chart into the nonempty open subset of $\\mathbb R^0$ has a singleton domain. Thus every singleton is open and the space is discrete. Second countability makes its points countable because every singleton must occur in any basis. Conversely a countable discrete space is Hausdorff and has its singletons as a countable basis, and every singleton supplies a chart onto $\\mathbb R^0$. The empty space satisfies the declared convention separately.
</details>

<a id="section-114-exercise-2"></a>
### Exercise 2 {#section-116-exercise-2}
<a id="topological-manifolds-charts-ex-2"></a>
If $M$ and $N$ are manifolds of dimensions $m$ and $n$, prove that $M\\times N$ is an $(m+n)$-manifold.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Take products of coordinate domains and maps.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check both global axioms as well as the local model.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Products of Hausdorff spaces are Hausdorff. Products of members of countable bases give a countable basis for the finite product. A product chart is a homeomorphism onto the product of two Euclidean open subsets, open in $\\mathbb R^{m+n}$ after concatenating coordinates. Such charts cover the product, proving all three axioms. Empty factors produce the empty manifold under the stated convention.
</details>

<a id="section-127-exercise-3"></a>
### Exercise 3 {#section-129-exercise-3}
<a id="topological-manifolds-charts-ex-3"></a>
For a continuous map $f:U\\to\\mathbb R^k$, with $U$ open in $\\mathbb R^n$, prove that its graph is a topological $n$-manifold with its subspace topology.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare the graph with its first-coordinate projection onto $U$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Write the inverse and verify continuity in both directions.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The map $u\\mapsto(u,f(u))$ is a continuous bijection onto the graph, with continuous inverse the coordinate projection. It is a homeomorphism. The graph is also a subspace of Euclidean space, so is Hausdorff and second-countable. The inverse projection supplies a global chart onto open $U$. No differentiability of $f$ has been used; this is a topological statement.
</details>

<a id="section-140-exercise-4"></a>
### Exercise 4 {#section-142-exercise-4}
<a id="topological-manifolds-charts-ex-4"></a>
Find the transition and inverse transition between the right and upper circle charts on their overlap. State the exact domains.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The overlap has both coordinates positive.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the positive square root and exclude the endpoints.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The right chart uses $t=y$ and the upper uses $s=x$. On the first-quadrant overlap, $0<t<1$ and $s=\\sqrt{1-t^2}\\in(0,1)$. Conversely $t=\\sqrt{1-s^2}$ for $s\\in(0,1)$. Substituting either expression into the other returns the positive original coordinate. Both maps are continuous on the specified open intervals. Including either endpoint would leave the overlap.
</details>

<a id="section-153-exercise-5"></a>
### Exercise 5 {#section-155-exercise-5}
<a id="topological-manifolds-charts-ex-5"></a>
Explain why $x\\mapsto x^3$ is a topological chart on $\\mathbb R$ but is not smoothly compatible with the identity chart at zero.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A chart needs a continuous inverse, while smooth compatibility asks for more.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Examine the inverse's difference quotient at zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The cubic map is a continuous strictly increasing bijection of the real line with continuous cube-root inverse, so is a topological chart. One transition is the cubic and the reverse transition is cube root. Its difference quotient at zero is $t^{1/3}/t=|t|^{-2/3}$ for nonzero real $t$, which has no finite limit. Thus the inverse transition is not differentiable there and the pair is not smoothly compatible.
</details>

<a id="section-166-exercise-6"></a>
### Exercise 6 {#section-168-exercise-6}
<a id="topological-manifolds-charts-ex-6"></a>
Prove that a compact manifold has a finite atlas. Show that a finite atlas does not imply compactness.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The domains of any atlas form an open cover.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A whole Euclidean space already has one global chart.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Compactness selects finitely many chart domains from an atlas cover; their charts form a finite atlas. Conversely $\\mathbb R$ has the identity as a one-chart atlas and is not compact, for its increasing cover by bounded open intervals has no finite subcover. Atlas cardinality alone is therefore not a compactness criterion.
</details>

<a id="section-179-exercise-7"></a>
### Exercise 7 {#section-181-exercise-7}
<a id="topological-manifolds-charts-ex-7"></a>
Prove that a nonempty compact manifold of positive dimension cannot be covered by one chart.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Its global coordinate image would be a compact open subset of Euclidean space.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compact subsets of Euclidean space are closed; Euclidean space is connected.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A global chart would make the manifold homeomorphic to a nonempty open $V\\subseteq\\mathbb R^n$. Compactness makes $V$ closed too. Connectedness of $\\mathbb R^n$ forces $V=\\mathbb R^n$, but for $n>0$ that space is noncompact, a contradiction. The positive-dimension assumption excludes a single-point zero-manifold, which does have a global chart.
</details>

<a id="section-192-exercise-8"></a>
### Exercise 8 {#section-194-exercise-8}
<a id="topological-manifolds-charts-ex-8"></a>
Verify that an uncountable disjoint union of real lines is Hausdorff and locally Euclidean but not second-countable.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Components are open in the disjoint-union topology.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A countable basis cannot supply different nonempty members inside uncountably many disjoint open components.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Within one copy, intervals give local charts and Hausdorff separation. Points in different copies are separated by the disjoint open copies themselves. If a countable basis existed, the point zero in each copy would lie in a nonempty basis member contained in that copy. Members chosen for different copies must be distinct, yielding uncountably many basis members, a contradiction. Thus local second countability does not replace the global axiom.
</details>

<a id="section-205-exercise-9"></a>
### Exercise 9 {#section-207-exercise-9}
<a id="topological-manifolds-charts-ex-9"></a>
Prove that a continuous map from a connected manifold to a discrete space is constant.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use connectedness of the continuous image, or preimages of singleton sets.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A subset of a discrete space with two points has a separation.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The continuous image of a connected space is connected. Any discrete subset containing two points is disconnected: one singleton and its complement are disjoint nonempty open sets in the subspace. Hence the image has at most one point. For a nonempty domain it has exactly one, so the map is constant; on an empty domain the assertion is vacuous. Manifold structure is stronger than needed for this conclusion.
</details>

<a id="section-218-exercise-10"></a>
### Exercise 10 {#section-220-exercise-10}
<a id="topological-manifolds-charts-ex-10"></a>
Explain why $[0,1)$ has a half-line chart at zero but cannot be a one-manifold without boundary. Use connected components after deleting a point.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Inside any proposed ordinary chart at zero, choose a smaller connected neighborhood $[0,\\varepsilon)$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Deleting zero leaves one component, while deleting a point of an open interval leaves two.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A small neighborhood $[0,\\varepsilon)$ is relatively open in the closed half-line and gives the required half-line model. If an ordinary real-line chart existed at zero, restrict it to such a neighborhood. Its image would be a connected open subset of $\\mathbb R$, hence an open interval. Deleting the image of zero would leave two nonempty components, whereas $(0,\\varepsilon)$ is connected. A homeomorphism preserves this deletion property, giving a contradiction. The interval therefore needs the boundary convention at zero.
</details>

<a id="section-231-provenance-and-further-reading"></a>
## Provenance and further reading {#section-233-provenance-and-further-reading}

This is new Euler exposition and exercises in British English, CC BY-SA 4.0. The point-set manifold chapter is linked as preparation and remains intact. The commissioned source comparison is Lee, *Introduction to Smooth Manifolds*, and Tu, *An Introduction to Manifolds*. The earlier Quarto [Manifolds and Bundles chapter](/textbooks/topology/_output/chapters/17-manifolds-bundles.html) remains a separate reading. Invariance of dimension and Urysohn metrization are explicitly named imported inputs; general surface triangulation and classification are not asserted or proved here.

<a id="section-235-summary"></a>
## Summary {#section-237-summary}

A chart is a homeomorphism onto an open Euclidean set, with transition maps carrying one valid coordinate description to another. Hausdorffness and second countability impose global conditions that local Euclidean models alone do not supply. Countable atlases, relatively compact chart neighborhoods and local path connectivity provide the foundation for later constructions. Smooth structures next restrict the transition maps so that differentiation becomes compatible across charts.
`;export{e as default};