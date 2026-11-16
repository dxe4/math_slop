var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: topological-manifolds-and-local-euclidean-structure
title: "Topological Manifolds and Local Euclidean Structure"
level: advanced-undergraduate
estimated_minutes: 290
license: CC BY-SA 4.0
---

# Topological Manifolds and Local Euclidean Structure

A manifold is locally modeled on Euclidean space but is not usually one global Euclidean chart. The word “locally” supplies coordinates; Hausdorffness and countability prevent doubled points and uncontrollably many pieces. Those global requirements are not stylistic. Removing either produces spaces that look Euclidean near every point but fall outside the standard category used in topology and geometry.

This chapter fixes one convention, develops charts and atlases, introduces manifolds with boundary, derives the point-set consequences needed later, and audits examples and nonexamples. Two deep results—invariance of domain and invariance of dimension—are stated for orientation and used only where explicitly cited. Their proofs require tools beyond this point-set chapter.

## 1. Definition and convention audit

For a fixed nonnegative integer $n$, a **topological $n$-manifold without boundary** is a space $M$ satisfying:

1. $M$ is Hausdorff;
2. $M$ is second-countable;
3. every $p \\in M$ has an open neighborhood homeomorphic to an open subset of $\\mathbb{R}^n$.

The empty space is allowed as an $n$-manifold for every $n$; a nonempty manifold has a uniquely determined dimension by invariance of dimension. When $n=0$, $\\mathbb{R}^{0}$ is a one-point space, so a $0$-manifold is discrete. Second countability then forces it to be countable.

Conventions vary. Some authors omit second countability, some replace it by paracompactness, and some use “manifold” for spaces whose connected components may have different dimensions. This chapter always fixes one dimension and includes both Hausdorffness and second countability.

The alternatives are not automatically equivalent. An uncountable disjoint union of copies of $\\mathbb{R}$ is Hausdorff, paracompact, and locally Euclidean of dimension $1$, but it is not second-countable. The **line with two origins**, obtained by gluing two copies of $\\mathbb{R}$ away from their origins while leaving the origins distinct, is second-countable and locally Euclidean but not Hausdorff. Each excluded example violates exactly one global axiom.

Every manifold under this chapter's convention is paracompact. Indeed, it will be regular and second-countable, hence metrizable; every metric space is paracompact. This implication explains why some geometric constructions mention paracompactness even when the definition begins with second countability.

## 2. Charts, coordinates, and atlases

A **coordinate chart** on an $n$-manifold is a pair $(U,\\varphi)$ where $U$ is open in $M$ and

$\\varphi:U\\to \\varphi(U) \\subseteq \\mathbb{R}^n$

is a homeomorphism onto an open subset of $\\mathbb{R}^n$. The coordinate functions $x^i=\\pi_{i} \\circ \\varphi$ assign real coordinates on $U$. They depend on the chart; points of a manifold do not come with preferred coordinate tuples.

If $(U,\\varphi)$ and $(V,\\psi)$ overlap, the **transition map** is

$\\psi \\circ \\varphi^{-1}:\\varphi(U \\cap V)\\to \\psi(U \\cap V)$.

Its domain and codomain are open subsets of $\\mathbb{R}^n$, and it is a homeomorphism. For topological manifolds this is all the compatibility required. A **smooth atlas** adds the much stronger condition that transition maps are smooth. Smoothness, piecewise-linear structure, orientation, and a metric are additional structures; none is part of the topological-manifold definition.

An **atlas** is a family of charts whose domains cover $M$. A maximal topological atlas can be formed by adjoining every chart topologically compatible with the given ones, but topological compatibility is automatic: every overlap transition of charts for the same topology is a homeomorphism. Maximal-atlas language becomes informative when transition maps must belong to a smaller class such as smooth or analytic maps.

Second countability is equivalent to the existence of a countable atlas. One direction is immediate: a countable atlas combines countable Euclidean bases into a countable basis for $M$. Conversely, given a countable basis, restrict arbitrary charts to suitable basis members and choose countably many such restrictions that cover $M$.

Charts may be shrunk. If $p \\in U$ and $(U,\\varphi)$ is a chart, choose a Euclidean ball $B$ centered at $\\varphi(p)$ whose closure is compact and lies in $\\varphi(U)$. Then

$V=\\varphi^{-1}(B)$

is a chart neighborhood of $p$, and $\\operatorname{cl}_{M}(V)$ is compact and lies in $U$ after choosing the ball with closure in $\\varphi(U)$. Such **relatively compact charts** turn local Euclidean compactness into ambient compact control.

## 3. Local consequences

Euclidean open balls are convex, locally compact, first-countable, locally path connected, and locally contractible. Transporting sufficiently small balls through charts gives the corresponding local properties on every manifold:

- $M$ is locally compact;
- $M$ is first-countable;
- $M$ is locally path connected and locally connected;
- $M$ is locally contractible.

Hausdorff local compactness makes $M$ regular. Regularity plus second countability makes it metrizable by the Urysohn metrization theorem. The metric is not canonical; a chart atlas determines the topology, not a preferred distance.

Second countability also implies separability and the Lindelof property. Combining Lindelofness with relatively compact chart neighborhoods proves that $M$ is **sigma-compact**: choose a countable subcover $\\{V_{k}\\}$ by such neighborhoods, then

$M=\\bigcup_{k=1}^\\infty \\operatorname{cl}(V_{k})$

is a countable union of compact sets.

Because $M$ is locally path connected, its components are open and coincide with its path components. Therefore a connected manifold is path connected. There are at most countably many components: each nonempty open component contains a basis element, and disjoint components require distinct basis elements.

These conclusions depend on the global convention in different ways. Local compactness and local path connectedness use only local Euclidean structure. Metrizability uses Hausdorffness and second countability. Countably many components and sigma-compactness use second countability. The uncountable disjoint union of real lines shows why those distinctions matter.

## 4. Basic constructions and examples

Every open subset of $\\mathbb{R}^n$ is an $n$-manifold. More generally, every open subspace of an $n$-manifold is an $n$-manifold: restrict its charts. This statement concerns open subspaces; an arbitrary subspace need not have the same dimension or be a manifold at all.

Products add dimensions. If $(U,\\varphi)$ is an $m$-chart and $(V,\\psi)$ an $n$-chart, then

$(U \\times V, \\varphi \\times \\psi)$

is a chart into the open subset $\\varphi(U) \\times \\psi(V)$ of $\\mathbb{R}^{m+n}$. Products of Hausdorff spaces are Hausdorff, and a finite product of second-countable spaces is second-countable. Thus $M \\times N$ is an $(m+n)$-manifold.

The sphere

$S^n=\\{x \\in \\mathbb{R}^{n+1}:\\lVert x\\rVert=1\\}$

is an $n$-manifold. Removing the north pole or south pole and applying stereographic projection gives two charts onto $\\mathbb{R}^n$. Alternatively, near a point where coordinate $x_{j}$ is nonzero, solve $x_{j}$ continuously as a signed square root of $1-\\sum_{i \\ne j} x_{i}^{2}$; projection onto the other coordinates gives a chart.

The $n$-torus $(S^{1})^n$ is an $n$-manifold by the product theorem. It is also the quotient $\\mathbb{R}^n/\\mathbb{Z}^n$, but a quotient picture alone is not a manifold proof: one must exhibit local neighborhoods on which the quotient map is injective and open. Small boxes of side length below $1$ provide those neighborhoods.

Real projective space $\\mathbb{RP}^n$ is the quotient of $S^n$ identifying antipodal points. The relation is the union of the diagonal and the graph of the antipodal homeomorphism, so it is closed; the compact-Hausdorff closed-relation theorem makes the quotient Hausdorff. The quotient map $q$ is open because $q^{-1}(q(U))=U\\cup(-U)$ for open $U$. Images under $q$ of a countable basis for $S^n$ form a countable basis for the quotient. Finally, each point has an open neighborhood $U$ disjoint from its antipodal translate. The open continuous bijection $q|_U:U\\to q(U)$ is a homeomorphism, and composing it with a sphere chart gives local $\\mathbb{R}^n$ coordinates.

Graphs of continuous functions supply embedded examples. If $f:U\\to \\mathbb{R}^k$ is continuous on open $U \\subseteq \\mathbb{R}^n$, its graph is homeomorphic to $U$ through $x \\mapsto (x,f(x))$, with inverse the coordinate projection. Thus the graph is an $n$-manifold as a subspace of $\\mathbb{R}^{n+k}$, even when it is not smooth.

## 5. Manifolds with boundary

For $n\\ge 1$, let

$H^n=\\{(x_{1},...,x_{n}) \\in \\mathbb{R}^n:x_{n}\\ge 0\\}$

be the closed upper half-space. For $n\\ge1$, a **topological $n$-manifold with boundary** is Hausdorff and second-countable, and every point has an **open** neighborhood homeomorphic to a relatively open subset of $H^n$. A $0$-manifold with boundary is defined to be a $0$-manifold, with empty boundary.

A chart $(U,\\varphi)$ is now allowed to meet the edge

$\\partial H^n=\\mathbb{R}^{n-1}\\times\\{0\\}$.

A point $p$ is provisionally called a **boundary point** if some boundary chart sends it to $\\partial H^n$; it is an **interior point** if it is sent to a point with last coordinate positive. The deep point is that these alternatives do not depend on the chosen chart.

**Theorem 20.1 (Boundary invariance (orientation; not proved here)).** A homeomorphism between relatively open subsets of $H^n$ sends edge points to edge points and interior points to interior points.

This result follows from invariance of domain together with an appropriate local topological argument; modern proofs often use local homology. It makes the subsets $\\partial M$ and $\\operatorname{Int}(M)=M\\setminus\\partial M$ intrinsic.

The interior $\\operatorname{Int}(M)$ is an $n$-manifold without boundary. The boundary $\\partial M$, with its subspace topology, is an $(n-1)$-manifold without boundary: restrict a boundary chart and then read its first $n-1$ coordinates along the edge. The local statement that these restrictions are charts again uses boundary invariance to ensure overlap maps preserve the edge.

The notation $\\partial M$ does not mean the ambient topological boundary of $M$ in some larger space. The circle has empty manifold boundary, although as a subset of $\\mathbb{R}^{2}$ its ambient boundary is all of $S^{1}$. The closed disk has manifold boundary $S^{1}$; its ambient boundary in $\\mathbb{R}^{2}$ happens to agree, but that agreement uses the particular embedding.

The interval $[0,1]$ is a $1$-manifold with boundary $\\{0,1\\}$. A neighborhood of an endpoint is modeled on $[0,\\infty)$, not on an open interval. The half-open interval $[0,1)$ is also a $1$-manifold with boundary $\\{0\\}$. The circle is a boundaryless $1$-manifold.

Some authors define a manifold “with boundary” while allowing the boundary to be empty; this chapter follows that convention. Thus, for $n\\ge1$, every $n$-manifold without boundary is also an $n$-manifold with boundary having empty boundary; the declared $n=0$ convention has the same effect.

## 6. Global axioms do real work

Local Euclidean structure alone leaves serious pathologies.

**Failure of Hausdorffness.** In the line with two origins, each origin has an ordinary interval chart, as does every other point. Yet any two neighborhoods of the origins meet in nonzero points. Limits need not be unique, compact subsets need not be closed, and many geometric gluing arguments fail.

**Failure of second countability.** An uncountable topological sum of real lines is perfectly Hausdorff and locally Euclidean. It is even paracompact, because disjoint sums of paracompact spaces are paracompact. But no countable basis can meet every open component with a distinct basis member. It is nonseparable, has uncountably many components, and is not sigma-compact.

The long line is a subtler boundary: it is Hausdorff and locally homeomorphic to $\\mathbb{R}$, and it is connected, but it is not second-countable. Unlike the disjoint-union example, its defect cannot be seen merely by counting components. It demonstrates why global countability is not redundant even for connected locally Euclidean spaces.

Second countability is not a local property. Every point of the uncountable sum and the long line lies in a second-countable chart, but the whole space has no countable basis. A proof that says “cover by second-countable charts, therefore second-countable” is valid only after producing a countable atlas.

## 7. Local models detect nonexamples

The rational line $\\mathbb{Q}$ is not a manifold of any positive dimension because it is not locally connected. It is not a $0$-manifold because it is not discrete. An infinite-dimensional normed space is not a finite-dimensional manifold: it is not locally compact, whereas every finite-dimensional manifold is locally compact.

The coordinate cross

$C=(\\{0\\} \\times \\mathbb{R}) \\cup (\\mathbb{R} \\times \\{0\\})$

is not a $1$-manifold at the origin. If a chart domain $U$ existed there, choose $\\varepsilon>0$ so that the connected open four-arm neighborhood $W=C\\cap(-\\varepsilon,\\varepsilon)^2$ lies in $U$. Its chart image is a connected open subset of $\\mathbb{R}$, hence an open interval. But $W\\setminus\\{0\\}$ has four components, whereas that interval minus the chart image of $0$ has two. A homeomorphism cannot change the number of components.

Similarly, the wedge $S^{1}\\vee S^{1}$ is not a $1$-manifold at its wedge point. Inside any proposed chart domain choose a connected open neighborhood made of four short arc arms. Its chart image would be an open interval, but deleting the distinguished point leaves four components in the wedge neighborhood and two in the interval. Away from that point the wedge is locally an interval. This is a useful warning about quotients—gluing manifolds at points need not produce a manifold.

The closed interval is not a $1$-manifold **without** boundary. At an endpoint, deleting the point from a sufficiently small neighborhood leaves one component, whereas deleting the center of an open interval leaves two. It is a manifold with boundary because the correct local model is a half-line.

Not every cone point is singular. The cone on $S^{1}$ is homeomorphic to a disk and is a $2$-manifold with boundary; its cone point is an interior point. By contrast, cones on more complicated spaces may have a link unlike a sphere and fail to be manifolds. Pictures of sharpness or curvature do not decide a topological question.

## 8. Invariance of domain and dimension

The definition would be unstable if one nonempty space could be locally modeled on Euclidean spaces of different dimensions. The repair is deep.

**Invariance of domain (theorem orientation; not proved here).** If $U \\subseteq \\mathbb{R}^n$ is open and $f:U\\to \\mathbb{R}^n$ is continuous and injective, then $f(U)$ is open and $f:U\\to f(U)$ is a homeomorphism.

Continuity plus injectivity does not generally imply embedding, so the openness conclusion is substantial. The theorem is commonly proved using algebraic topology, degree theory, or local homology.

**Invariance of dimension (corollary orientation).** No nonempty open subset of $\\mathbb{R}^m$ is homeomorphic to an open subset of $\\mathbb{R}^n$ when $m\\ne n$.

For the key reduction, suppose $m<n$ and a homeomorphism from an open subset of $\\mathbb{R}^n$ to one of $\\mathbb{R}^m$ existed. Composing it with the standard inclusion $\\mathbb{R}^m\\to \\mathbb{R}^n$ gives a continuous injection from an open subset of $\\mathbb{R}^n$ into $\\mathbb{R}^n$. Invariance of domain says its image is open, but that image lies in a lower-dimensional coordinate hyperplane, which has empty interior. Swapping roles handles the other inequality.

Consequences include:

- a connected manifold has one well-defined dimension;
- a homeomorphism between manifolds preserves dimension;
- an injective continuous map between $n$-manifolds without boundary is open;
- a nonempty compact $n$-manifold cannot embed as a proper open subset of a connected $n$-manifold.

These conclusions may be used after citing invariance of domain. They must not be presented as elementary consequences of drawing coordinate pictures.

## 9. Embeddings, submanifolds, and extra structure

A **topological embedding** $e:N\\to M$ identifies $N$ homeomorphically with the subspace $e(N)$. If $N$ is a $k$-manifold, its image is an embedded topological $k$-manifold. The word “submanifold” should specify whether one means only this intrinsic subspace condition or a stronger locally flat/smooth condition.

For example, every knot is an embedded circle in $\\mathbb{R}^{3}$, but different embeddings need not be equivalent under an ambient homeomorphism fixing the surrounding space. The manifold type of the image and the geometry of its placement are separate questions.

Charts also do not supply a canonical smooth structure. To define a smooth manifold, transition maps must be smooth, and two smooth atlases may define inequivalent smooth structures. Some topological manifolds admit no smooth structure, while others admit more than one. Those existence and uniqueness questions lie beyond point-set topology; this chapter establishes only the topological stage on which they are asked.

Partitions of unity illustrate the division of labor. Paracompact Hausdorff topology supplies continuous partitions subordinate to open covers. To average tangent vectors, metrics, or differential forms, one additionally needs vector bundles and smooth partitions. Topological paracompactness is necessary infrastructure, not the entire differential construction.

## 10. Manifold proof audit

For a proposed manifold, check in this order:

1. Is one fixed dimension claimed?
2. Are chart domains open in the proposed space?
3. Are chart images open in $\\mathbb{R}^n$, or relatively open in $H^n$ for boundary charts?
4. Is each coordinate map actually a homeomorphism, not merely a continuous bijection?
5. Do the charts cover every point, including quotient or boundary points?
6. Has Hausdorffness been proved after gluing?
7. Has second countability been proved globally, often through a countable atlas?
8. Is manifold boundary being confused with ambient boundary?
9. Is a dimension claim relying on invariance of domain and labeled accordingly?
10. Is an extra smooth, metric, or embedding claim being inferred from topology alone?

This order separates elementary local work from global axioms and deep recognition theorems.

## TOP-CH17-P001 — Project: build and audit a surface atlas

Choose one of the sphere $S^{2}$, torus $S^{1} \\times S^{1}$, real projective plane $RP^{2}$, cylinder $S^{1} \\times [0,1]$, or Mobius band. Give an explicit finite atlas, including formulas or fully specified quotient-coordinate maps; compute at least one nonempty transition map; and prove the Hausdorff and second-countable conditions rather than appealing only to a picture.

Your report must also identify the manifold dimension, determine whether boundary is present, distinguish intrinsic from ambient boundary, and explain where invariance of domain or boundary invariance is being invoked rather than proved. Include one deliberately failed chart or quotient argument and repair it by checking openness, injectivity, saturation, or the global separation axioms. A diagram may supplement the atlas, but the coordinate domains and overlap calculations are the mathematical evidence.

## Polygonal Jordan separation

We distinguish an elementary polygonal separation theorem from the much deeper classification theorem for arbitrary compact surfaces. A **simple closed polygon** is the image of a cyclic finite sequence of nondegenerate line segments that meet only at consecutive shared endpoints. Redundant collinear vertices may be removed. No differentiability is assumed.

**Lemma 20.2 (two connected sides near a polygon).** A simple closed polygon $P$ has an open neighborhood $N$ such that $N\\setminus P$ has two connected components, each approaching every point of $P$.

**Proof.** Choose pairwise disjoint small disks around the finitely many vertices, each missing all nonincident edges and meeting its two incident edges in radial segments. This is possible because every vertex is a positive distance from the finitely many nonincident compact segments. Outside these disks the remaining edge segments are pairwise disjoint compact sets, hence have positive mutual distances. Surround each by a thin open rectangular strip, extended slightly into its two endpoint disks. Choose widths so that strips meet no other strips and overlap only their prescribed endpoint disks.

Inside a vertex disk the two incident radii divide the disk into exactly two sectors. Orient the polygon cyclically. The side lying on the left of an incoming oriented edge joins through one sector to the left side of the outgoing edge; the other sector joins the right sides. This can be checked by rotating the incoming radius to the outgoing radius through each of the two complementary angular intervals; neither interval meets a radius in its interior. Restrict the vertex sectors to small open neighborhoods of their boundary radii, joined inside the sector. In each sector include its intersection with a smaller concentric vertex disk, as well as the connections to the strips. Adjoining the vertex and its two incident edge pieces therefore contains that smaller disk, so the construction is open at the vertex too. Together with the strips these give a thin open neighborhood $N$.

After removing $P$, one collection consists of the left half of every strip and the joining left sector at each vertex; the other consists of the right halves and right sectors. Each collection is connected, since consecutive pieces overlap around the cyclic list. They are disjoint, and the strip-and-sector construction accounts for every point of $N\\setminus P$. Every point of an edge is approached from its two half-strips, and every vertex from its two sectors. This proves the lemma without assuming a theorem about the polygon's interior. $\\square$

**Theorem 20.3 (polygonal Jordan separation).** The complement of a simple closed polygon has exactly two components. Both have boundary $P$; exactly one is bounded.

**Proof.** First it has at most two components. For any $q\\notin P$, choose a polygonal path from $q$ to an interior point of an edge, in general position: it avoids the finitely many vertices and meets edges transversely at finitely many points. To choose such a path, use one intermediate point outside the finitely many forbidden lines through $q$, the destination, and vertices, and perturb the destination along its edge if necessary. The initial path up to its first intersection with $P$ avoids $P$. Just before this intersection it enters one of the two sides in the lemma. Therefore every point of the complement can be joined within the complement to one of those two connected sides. There are at most two components.

To show that the sides cannot join, rotate the axes so no edge is horizontal and distinct vertices have distinct heights. For a point whose height is not a vertex height, count modulo two the intersections of the horizontal ray to its right with $P$. Away from $P$, this parity is locally constant. It is unchanged when a ray passes a vertex height: if both incident edges lie on the same side of that height, zero intersections are exchanged for two; if they lie on opposite sides, one intersection is exchanged for one. The point must stay away from the vertex itself, so these changes occur together either to its right or to its left. Thus parity extends consistently to all points off $P$ and is locally constant there.

Across the interior of an edge, in a small disk meeting no other edges, the two sides have opposite parity: crossing that edge changes the ray count by one. Therefore the two connected collar sides have distinct parities. A connected subset cannot join distinct values of a locally constant two-valued function. There are at least two components, proving exactly two.

Choose a rectangle containing $P$ in its interior. The exterior of the rectangle is connected and lies in the complement, so it lies in one component. Every unbounded component meets that exterior; hence at most one is unbounded. At least one is unbounded because the entire complement is not bounded. The other is bounded.

Finally, no point off $P$ is a boundary point of either component: a small ball missing $P$ is connected and lies in its one component. Every point of $P$ is approached by both collar sides, which lie in the two different components. Hence each component has boundary exactly $P$. $\\square$

This proves separation for finite polygons. It does not prove the general Jordan curve theorem for arbitrary continuous embedded circles, nor the stronger Schoenflies assertion that the bounded region closes up to a disk. Those assertions require additional arguments. Even in the polygonal case, a claim about a disk homeomorphism must supply such a construction rather than merely cite the two-component conclusion.

## Compact surfaces: theorem and proof boundary

**Theorem 20.4 (Classification).** Every nonempty compact connected surface is determined up to homeomorphism by orientability, boundary count, and Euler characteristic. Its model is a sphere with $g\\ge0$ handles if orientable, or a connected sum of $k\\ge1$ projective planes if nonorientable, with the interiors of $b\\ge0$ disjoint disks removed. Its Euler characteristic is respectively $2-2g-b$ or $2-k-b$.

We prove the polygon reduction and the identification and distinction of these models below. Two standard inputs supply the passage from arbitrary topological surfaces and the intrinsic meaning of the invariants. Neither input is a surface-classification theorem.

- **Surface triangulability, including boundary.** A Hausdorff second-countable topological $2$-manifold has a locally finite surface triangulation; its manifold boundary is a subcomplex. The links of interior vertices are polygonal circles and the links of boundary vertices are polygonal intervals. In the compact case the triangulation can be taken finite. We use this form of the triangulability theorem, without proving it. See [Gallier and Xu, Appendix E and the boundary discussion in Section 4.6](https://www.cis.upenn.edu/~jean/surfclassif-root.pdf). Compactness makes a locally finite triangulation finite: finitely many neighborhoods, each meeting finitely many simplices, cover the space.
- **Intrinsic homology and orientation.** Singular homology is functorial under continuous maps, homeomorphisms induce isomorphisms, and the finite cellular chain complex computes singular homology. Interior local homology $H_2(M,M\\setminus\\{p\\};\\mathbb Z)$ is infinite cyclic. A surface is orientable when generators can be chosen coherently on disk neighborhoods; homeomorphisms preserve such choices. For a surface with boundary, use its interior. These are algebraic-topology inputs, not proved here; see [Hatcher, Sections 2.1–2.2, especially Theorem 2.35, and Section 3.3, “Orientations and Homology”](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

Boundary invariance is the theorem already stated in Section 5. Everything that changes a polygon, extracts its standard pieces, or handles puncture placement is justified in the argument that follows. In particular, we do not import a “normal-form lemma” containing the classification in another name.

### From triangles to one vertex and one face

First let $M$ be closed, connected and nonempty, and choose a finite surface triangulation. Its $1$-skeleton is connected: if its vertices split into two graph components, every simplex lies in one component, disconnecting its realization. Choose a spanning tree $T$ in this graph.

The dual graph has one vertex for each triangle and one edge across each triangle edge. It is connected. Indeed, triangles incident to a given vertex are joined consecutively around its circular link. Different dual components would therefore have disjoint primal vertex sets and would disconnect the triangulation.

**Lemma 20.5 (a disjoint dual tree exists).** The dual edges crossing edges outside $T$ form a connected graph.

*Proof.* Otherwise partition the triangles into two nonempty unions of components of that graph. Every primal edge separating the two colors belongs to $T$. There is at least one such edge because the full dual graph is connected. Around each primal vertex the triangle colors form a cyclic list; the number of color changes is even. Consequently the nonempty graph of separating primal edges has even degree at every vertex. Any nonempty finite graph with all degrees even contains a cycle: follow unused edges until a vertex repeats, which cannot fail by stopping at a vertex of odd used degree. This cycle would lie in $T$, a contradiction. $\\square$

Choose a dual spanning tree $T^*$ using only these edges. Take separate copies of all triangles and glue only the sides crossed by $T^*$. This gives an abstract polygonal disk: root the dual tree and attach each new triangle along its edge to its parent. Attaching a disk triangle along one whole boundary interval of a disk gives another disk. All other triangle sides remain separate in this construction, even when their images will later coincide in $M$. Pairing the remaining sides recovers $M$ and gives it one face. The embedded primal tree $T$ is still among its edges.

We next remove the extra vertices without presuming that arbitrary quotient collapses preserve a surface. Around the vertices of $T$ choose disjoint tiny polygonal disks, joined by narrow rectangular strips along the edges of $T$. The union is a disk: add a terminal vertex disk and its joining strip successively, using the tree. If there are no other edges, this neighborhood and the disk obtained by trimming the boundary collar from the original face give the two-disk sphere construction described below. Set that case aside. Otherwise the other edges meet its boundary in finitely many attaching points. Replace the graph inside this neighborhood by one central vertex and radial arcs to those points, in their existing circular order. Cut the neighborhood open along the original tree and its short attaching stubs. The resulting pieces are disk sectors, one for each consecutive pair of attaching points; the radial star gives cut-open sectors with the same outer boundary intervals. These sectors are abstract cut-open disks: a terminal tree branch with no attaching stub contributes two boundary copies of a slit, rather than an embedded closed sector in the uncut neighborhood. A boundary homeomorphism between two disks extends over their interiors by radial extension in disk parameters. Replacing each old sector by its corresponding new sector therefore preserves the topology of the complementary face. This changes the graph on the same surface and leaves one open disk as its complement. Equivalently, one can perform this operation along the edges of $T$ one at a time; each operation removes one tree edge and one vertex.

We now have one vertex, one face, and $n\\ge0$ edges. If $n>0$, the face is represented by a polygon whose cyclic boundary word contains every edge letter twice. Write a positive letter when the boundary traversal follows its chosen edge direction, and an inverse letter when it goes against that direction. Side pairing means the affine identification that respects the indicated edge directions. The quotient has one vertex; this last fact is essential to the reduction.

If $n=0$, the complement of the sole vertex is an open disk, hence a plane. A compact Hausdorff space obtained from a plane by adjoining one point is its one-point compactification: neighborhoods of that point have compact complements, and every compact subset of the plane is closed in the whole space. The stereographic model identifies that compactification with $S^2$. This is the zero-handle case. We can make the identification piecewise linear for later use with marked disks: a small polygonal neighborhood of the remaining vertex is a disk, and trimming the boundary collar from the original face gives the other disk. Their common boundary has polygonal parameters; match these with the equators of two triangulated hemispheres and extend over the two disks. Thus marked polygonal disks remain polygonal in the sphere model too.

### Two recut rules, with their homeomorphisms

For words, $X^{-1}$ means reverse the order and invert every letter. Cyclic rotation of a boundary word changes only the starting corner. Reversing an entire face word changes only the direction in which that face is read. A fresh letter below never appears elsewhere.

Our elementary operation is to cut a polygonal face along an embedded arc between two specified boundary corners. It replaces a word $AB$ by the two face words $Ad$ and $d^{-1}B$. Conversely, gluing two different disk faces along the two occurrences of $d$ erases that seam and gives one disk face. These are actual decompositions of disks, with the other side identifications retained. The map from either presentation to the original surface is the identity on the uncut pieces and respects the paired sides. It is a continuous bijection from a compact quotient to the Hausdorff surface, hence a homeomorphism. A polygon may be parameterized as a convex polygon when choosing the cutting arc; no Jordan or Schoenflies theorem for an arbitrary curve is assumed.

**Lemma 20.6 (crosscap recut).** With every other pairing retained,

$$aXaY\\ \\sim\\ ccX^{-1}Y.\\tag{C}$$

*Proof.* Cut into faces $aXd$ and $d^{-1}aY$. Read the first backwards and rotate it to $a^{-1}d^{-1}X^{-1}$; rotate the second to $aYd^{-1}$. Glue along $a$. The resulting boundary is $d^{-1}X^{-1}Yd^{-1}$, whose cyclic rotation is $d^{-1}d^{-1}X^{-1}Y$. Rename $d^{-1}$ as $c$. Each step is the elementary disk operation just justified. Empty strings are allowed: each of the two cut-off boundary paths still contains its displayed occurrence of $a$, so the cutting arc joins distinct corners of the abstract face disk, even though those corners represent the same surface vertex. $\\square$

**Lemma 20.7 (opposite-pair recut).** With every other pairing retained,

$$aUVa^{-1}X\\ \\sim\\ cVUc^{-1}X.\\tag{S}$$

*Proof.* Cut into $aUd$ and $d^{-1}Va^{-1}X$. Rotate to $Uda$ and $a^{-1}Xd^{-1}V$, and glue along $a$. The result is $UdXd^{-1}V$. Rotate to $d^{-1}VUdX$ and rename $d^{-1}$ as $c$. $\\square$

These are surface operations, not free-group equalities. For instance $aa$ cannot be canceled. New cutting edges have endpoints at the old vertex, and erasing an old seam changes no point of the surface. Thus a nonempty one-vertex presentation stays a one-vertex presentation during these recuts.

Three uses of (S) extract a handle from an interleaved pair. Put $Q=XVU$. Explicitly,

$$\\begin{aligned}
aUbVa^{-1}Xb^{-1}Y
&\\sim p\\,bVU\\,p^{-1}Xb^{-1}Y\\\\
&\\sim p\\,q\\,p^{-1}XVU\\,q^{-1}Y\\\\
&\\sim s\\,q\\,s^{-1}q^{-1}YXVU.
\\end{aligned}\\tag{H}$$

For the second line, start the word at $b$ and apply (S) with the two intervening strings $VU$ and $p^{-1}X$, then rotate back. For the third, start at $p^{-1}$ in $pqp^{-1}Qq^{-1}Y$, apply (S) with strings $Q$ and $q^{-1}Y$, and rename the inverse of the new cutting edge as $s$. Hence every step of (H) has a specified cut-and-glue realization.

### Why extraction terminates and exhausts the word

Call $aa$ a crosscap block and $aba^{-1}b^{-1}$ a handle block. Keep extracted blocks intact and call all other letters unprocessed. If an unprocessed letter occurs twice with the same sign, reverse its chosen edge direction if necessary and apply (C). Its two occurrences become one new crosscap block. This reduces the number of unprocessed edge letters by one.

A previously extracted block lies wholly within one of the intervening strings: a cut at an unprocessed occurrence cannot split it. Reversing that string keeps its blocks recognizable. The inverse of a crosscap block is a crosscap block after reversing its edge direction; the inverse of $aba^{-1}b^{-1}$ is $bab^{-1}a^{-1}$, again a handle block with renamed letters. Thus the bookkeeping does not undo earlier extraction.

After finitely many applications of (C), all unprocessed pairs have opposite signs. Suppose one remains, and write the cyclic word as $aXa^{-1}Y$. There must be another unprocessed letter with one occurrence in $X$ and one in $Y$. To prove this, assume no letter has its occurrences split between $X$ and $Y$. The corners from the end of the first $a$ through $X$ to the start of $a^{-1}$ form a nonempty set. The other corners form another nonempty set. Pairing $a$ with $a^{-1}$ identifies endpoints within these respective sets. Every other side pairing stays entirely within one set by the assumption. The quotient therefore has at least two vertices, contradicting the one-vertex construction. This also explains why an adjacent inverse pair would be impossible here: its middle corner would be a separate vertex.

A letter in a protected block cannot have its occurrences split between $X$ and $Y$, because no endpoint of either $a$ occurrence lies inside that block. The split pair is therefore unprocessed. Call it $b$, choosing its edge direction so that its occurrence in $X$ is positive. We have exactly the pattern in (H), and can extract a handle. This reduces the number of unprocessed letters by two and preserves all protected blocks. Repeating finishes after finitely many steps.

The word is now a cyclic concatenation of crosscap blocks and handle blocks. This is an existence argument with a decreasing finite quantity; it does not rely on a drawing suggesting that all unprocessed edges have disappeared.

### A handle together with a crosscap becomes three crosscaps

If both types of blocks occur, somewhere on their cyclic list a crosscap is immediately followed by a handle. Rotate to that location and write the remaining concatenation as $Z$. Repeatedly using (C), including its inverse for the first line, gives

$$\\begin{aligned}
aa\\,bcb^{-1}c^{-1}Z
&\\sim d\\,b^{-1}d\\,cb^{-1}c^{-1}Z\\\\
&\\sim ee\\,c^{-1}d^{-1}c^{-1}Zd\\\\
&\\sim ff\\,dZd\\,ee\\\\
&\\sim gg\\,Z^{-1}eeff.
\\end{aligned}\\tag{K}$$

Here $d,e,f,g$ are fresh at the steps where they appear. For the first recut, (C) sends $d b^{-1}d(cb^{-1}c^{-1}Z)$ to $aa bcb^{-1}c^{-1}Z$. For the second, start at the first $b^{-1}$, with intervening strings $dc$ and $c^{-1}Zd$. For the third, start at the first $c^{-1}$, with strings $d^{-1}$ and $Zdee$. For the last, start at the first $d$, with strings $Z$ and $eeff$.

In particular, when $Z$ is empty this proves the handle-plus-crosscap identity itself, rather than merely stating it. For general $Z$, its inverse remains a concatenation of the same types of blocks, in reverse order. The number of handle blocks has decreased by one and the number of crosscaps has increased by two. Repeat until there are no handles. No orientable surface can acquire a crosscap in this process, as the orientation check below also confirms.

We have proved that a closed connected surface has one of the polygon forms

$$\\prod_{i=1}^{g}a_i b_i a_i^{-1}b_i^{-1}\\quad(g\\ge1),
\\qquad
\\prod_{i=1}^{k}c_i c_i\\quad(k\\ge1),$$

or the sphere form already handled.

### Identifying the models and their orientations

The quotient of a square with boundary $aba^{-1}b^{-1}$ is $S^1\\times S^1$: the usual map $(u,v)\\mapsto(e^{2\\pi i u},e^{2\\pi i v})$ identifies exactly the opposite sides. The quotient of a disk with its boundary read as $aa$ is $\\mathbb{RP}^2$: represent antipodal lines by a closed hemisphere of $S^2$, whose boundary points are identified antipodally. Divide the equator into two semicircles to get the two equally directed occurrences of $a$.

Concatenating two standard block words implements connected sum. To see the operation, cut the concatenated polygon along an arc at the junctions between the two words, obtaining faces $W_1d$ and $d^{-1}W_2$. After the $W_i$ side identifications, each piece has boundary the circle $d$. Capping that circle by a disk and erasing the seam recovers the closed model $W_i$. Thus the original quotient glues two punctured models along their boundary circles, which is the definition of connected sum. Vertex sectors give half-disk neighborhoods on each side of the seam. Repeating interprets $g$ handle blocks as the connected sum of $g$ tori and $k$ crosscaps as the connected sum of $k$ projective planes. Zero handles means $S^2$.

For a polygon presenting a surface, its interior has two possible local orientations. An orientation extends across an identified edge exactly when its two boundary traversals have opposite signs: the two half-disks must induce opposite directions on their common seam. At the vertex, the cyclic sequence of sectors is a disk neighborhood; compatible orientations on consecutive sectors extend across its center. Consequently a word consisting of handle blocks is orientable. A crosscap block has two same-sign occurrences, so the orientation on the connected polygon interior cannot extend across that seam. Its surface is nonorientable. This verifies the orientation of the listed models using the intrinsic orientation convention, rather than declaring a surface nonorientable because a picture appears twisted.

### Polygonal disks and the placement of boundary components

Capping a boundary component will introduce a marked disk. We must justify that the final answer depends on how many disks are removed, not on their positions. The following elementary polygonal argument supplies the disk construction that separation alone did not supply above.

**Lemma 20.8 (polygonal disk and annulus constructions).** The closure of the bounded component of a simple closed polygon is a disk. If polygonal closed disks satisfy $D\\subset\\operatorname{Int}E$, the region $E\\setminus\\operatorname{Int}D$ is an annulus.

*Proof.* First produce a diagonal of a simple polygon with more than three vertices. Remove redundant collinear vertices and use a generic coordinate direction so it has a unique leftmost vertex $v$. Its neighbors $u,w$ lie to its right, and the interior angle at $v$ is less than $\\pi$. Consider the triangle $uvw$. If it contains no other polygon vertex, its interior meets no polygon edge: an edge entering that triangle without an endpoint inside would have to cross two triangle sides, and it cannot cross $uv$ or $vw$. Thus $uw$ is an interior diagonal. If there are other vertices in the closed triangle, including on $uw$, choose one, $z$, furthest from the line $uw$ toward $v$. The open smaller triangle bounded by $uv$, $vw$ and the line through $z$ parallel to $uw$ contains no polygon vertex. A polygon edge crossing the open segment $vz$ would have to enter and leave this smaller triangle across its base, since it cannot cross $uv$ or $vw$. A straight segment cannot do that. Nor can another vertex lie on $vz$ before $z$, by its choice. Hence $vz$ is an interior diagonal. Points sufficiently near $v$ on the proposed segment are inside the polygon, and the absence of crossings keeps its entire open segment in the same bounded component.

Either diagonal splits the boundary into two simple polygons with fewer vertices. The polygonal crossing parity proved earlier shows that their bounded regions partition the old bounded region, with common boundary precisely the diagonal: the diagonal is counted twice and the old boundary once. The unbounded side of the old polygon stays on the unbounded side of both new polygons. Induction triangulates the old bounded region. The inductively constructed disks meet along a boundary interval; gluing two disks along such an interval gives a disk. Their finite triangle maps therefore give a continuous bijection from a disk to the bounded closure, and compactness and Hausdorffness give the required homeomorphism. The triangular initial case is affine. This also supplies a piecewise-linear disk parameterization.

For the annulus assertion, join the nested boundaries by a simple polygonal arc in the region between them. Such an arc exists: paths in the outer disk can be perturbed to have finitely many transverse intersections with the inner polygon, and the parts entering its interior can be replaced by short outside detours along its boundary. Erase loops to make the path simple. Removing the interior of a thin rectangular neighborhood of the arc leaves a compact region whose boundary is one simple polygon: it follows the outer polygon, one side of the cut, the inner polygon backwards, and the other side of the cut. Polygonal separation identifies this region with that polygon's bounded closure, and the first assertion makes it a disk. Match its four boundary arcs with those of a rectangle, giving corresponding parameters on the two cut sides, and extend that boundary homeomorphism radially over the disk. Restoring the cut identifies the rectangle's two corresponding sides. The result is $S^1\\times[0,1]$. $\\square$

**Lemma 20.9 (finite disk placement).** In a connected triangulated closed surface, any two ordered families of $b$ pairwise disjoint embedded polygonal closed disks can be carried to one another by a homeomorphism of the surface.

*Proof.* A disk has a thin outside collar, made from finitely many edge strips and vertex sectors. Its union with the disk is a slightly larger disk. Radial reparameterization of this larger disk, fixing its outer boundary, shrinks the original disk to an arbitrarily small disk about any chosen interior point.

We also need a local way to move a disk. Inside a coordinate disk $B$, any two polygonal subdisks $D,E\\subset\\operatorname{Int}B$ are equivalent by a homeomorphism fixing $\\partial B$. Choose an orientation-preserving disk homeomorphism $D\\to E$. By the annulus construction, the complements between $D$ and $\\partial B$, and between $E$ and $\\partial B$, are annuli. Extend the prescribed inner boundary map and the identity on the outer boundary over these annuli. Explicitly, in annulus coordinates lift the two boundary circle maps to increasing maps $h_0,h_1:\\mathbb R\\to\\mathbb R$ with $h_i(t+1)=h_i(t)+1$. The formula

$$([t],r)\\longmapsto\\bigl([(1-r)h_0(t)+rh_1(t)],r\\bigr)$$

is a homeomorphism with those boundary values. Gluing to the chosen disk map gives the local move.

Shrink both families separately, choosing distinct centers for all $2b$ resulting disks, so that the two shrunken families are disjoint from each other as well. The shrinkings are ambient homeomorphisms, each supported in disjoint collars within its own family; their inverses will restore the original sizes at the end. A connected surface remains path connected after finitely many disjoint disks are deleted: take a polygonal path in its triangulation, put it in general position, and replace each portion entering a deleted disk by a boundary detour, displaced slightly outside when necessary. The collars make these detours avoid all the other disks.

Move the first small source disk to its target along such a path, avoiding the other source and target disks. Cover the path by a finite chain of coordinate disks avoiding those obstacles. Shrink the moving disk when needed and use the local move in successive members of the chain; choose intermediate disks in their overlaps. The last local move sends it onto the target disk. For the next source disk, include the already matched target among the obstacles. Continue finitely many times. The composite, together with the initial shrinking maps and the inverse target shrinking map, sends each original source disk to its prescribed original target. $\\square$

Now let $M$ have boundary. Its finite triangulation makes the boundary a finite graph in which every vertex has degree two, so its components are finitely many polygonal circles, say $b$ of them. Attach a disk to each circle, triangulating the disk by a cone on that boundary polygon. The resulting space $\\widehat M$ is a closed connected surface: along the old boundary, its interval links have been completed to circles, so the local half-disks have become disks. This construction needs no classification of $1$-manifolds and no assumption that arbitrary chart overlaps form triangles.

Apply the closed-surface reduction to $\\widehat M$. Its operations are piecewise linear on subdivisions, so the $b$ cap disks become disjoint embedded polygonal disks in its standard closed model. The finite disk-placement lemma moves them to any chosen standard $b$ positions. Removing their interiors proves the asserted existence of the punctured standard model. An orientation on $M$ extends across each cap by choosing the cap's disk orientation to match its boundary collar; conversely, an orientation on $\\widehat M$ restricts to $M$. Thus capping does not change orientability.

### Euler characteristic and uniqueness

For a finite cell complex define

$$\\chi(M)=\\sum_j(-1)^j\\dim_{\\mathbb Q}H_j(M;\\mathbb Q).$$

The homology inputs stated above make this a topological invariant. They also identify it with the alternating number of cells. Here is the algebra, so that cell counting is not being assumed to be intrinsic: in the finite rational cellular chain complex put $Z_j=\\ker\\partial_j$ and $B_j=\\operatorname{im}\\partial_{j+1}$. Rank-nullity gives

$$\\dim C_j=\\dim Z_j+\\dim B_{j-1}
=\\dim H_j+\\dim B_j+\\dim B_{j-1}.$$

The boundary terms cancel in the alternating sum. For a triangulation this is $V-E+F$, independently of the triangulation. No assertion that a homeomorphism is simplicial is needed.

A closed $g$-handle model has one vertex, $2g$ edges and one face, giving $2-2g$; the sphere has one $0$-cell and one $2$-cell, giving $2$. The closed $k$-crosscap model has one vertex, $k$ edges and one face, giving $2-k$. Attaching each cap adds one $2$-cell to a cell decomposition retaining its boundary and changes $\\chi$ by $1$. Therefore removing $b$ disk interiors gives precisely

$$\\chi=2-2g-b\\quad\\text{or}\\quad\\chi=2-k-b.$$

A homeomorphism preserves manifold boundary by boundary invariance, and hence preserves its number $b$ of components. It preserves orientability by the intrinsic local-orientation input and preserves $\\chi$ by homology. Within the orientable family these invariants recover $g=(2-b-\\chi)/2$; within the nonorientable family they recover $k=2-b-\\chi$. The two families have different orientations, so they cannot coincide. Conversely, equal invariants select the same closed block model and the same number of removed disks, and disk placement proves that these choices give homeomorphic surfaces. This proves uniqueness and finishes the classification theorem, conditional only on the explicitly named triangulation, homology/orientation, and boundary-invariance inputs. $\\square$

The point-set atlas argument alone still does not imply triangulability, and the polygonal separation theorem alone still does not imply classification. The proof supplied here bridges those steps by a finite, reversible reduction after triangulability is supplied. General Jordan separation and Schoenflies for arbitrary continuous embedded circles have not been used or proved.

## Worked examples: charts and surface data

### Worked example 1 — A punctured sphere is one chart

Remove the north pole from $S^2$. Stereographic projection sends $(x,y,z)$ to $(x/(1-z),y/(1-z))$. For $(u,v)\\in\\mathbb R^2$, put $r^2=u^2+v^2$. The inverse is
$(u,v)\\longmapsto\\left(\\frac{2u}{1+r^2},\\frac{2v}{1+r^2},\\frac{r^2-1}{1+r^2}\\right).$
The denominator is positive, the squared coordinates sum to one, and the last coordinate is strictly less than one. Substitution in each direction gives the identity. Thus these are continuous inverse maps with an open Euclidean image. The punctured sphere is a plane as a topological space, although its displayed embedding is curved.

Adding the omitted pole requires another chart, not a finite coordinate value for the first chart. In particular compactness prevents the whole sphere from being homeomorphic to the noncompact plane. The local formula and global compactness statement fit together without contradiction.

### Worked example 2 — A coordinate transition can reverse a coordinate

Use the two circle charts $\\varphi_+(x,y)=y/(1+x)$ and $\\varphi_-(x,y)=y/(1-x)$. The overlap omits both poles and corresponds to $t\\ne0$. Direct substitution gives transition $t\\mapsto1/t$. This is a homeomorphism on its declared open domain, with itself as inverse.

Taking products gives four torus charts and transitions such as $(u,v)\\mapsto(1/u,v)$. These coordinate formulas certify a topological atlas. One transition's coordinate behavior does not alone classify global orientability; orientations require consistent choices on every chart and overlap. The complete torus atlas key below retains all those domain and inverse checks.

### Worked example 3 — Equal Euler characteristics need not mean equal surfaces

A torus has a cell decomposition with one vertex, two edges and one face, so its Euler characteristic is zero. An annulus deformation picture suggests another zero, and a finite cell decomposition indeed gives zero as well. Yet the annulus has two boundary circles and the torus has none. The classification theorem therefore distinguishes them even though both are orientable and have equal Euler characteristic.

For an orientable compact connected surface with $b=3$ and $\\chi=-5$, the formula gives $-5=2-2g-3$, hence $g=2$. This arithmetic identifies the genus only after the surface, compactness, connectedness, orientability, and boundary count have been established. A combinatorial complex with the same counts might have singular vertices and fail to be a surface.

For a nonorientable surface with $b=1$ and $\\chi=-2$, the separate formula gives $-2=2-k-1$, so $k=3$. Using the orientable formula would produce a nonintegral genus and would diagnose a wrong hypothesis, not a new kind of fractional handle.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For a torus, begin with two stereographic charts on each circle and take their four products. Keep the omitted poles and the exact overlap domains visible.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Write the two rational inverse formulas first. Their overlap transition is reciprocation on the nonzero real numbers; product transitions apply that rule in each changed coordinate. Use the Euclidean subspace topology to verify both global axioms.

</details>

## Exercises with complete solutions

### TOP-CH17-E001 — Exercise 1

Prove that every $0$-manifold is a countable discrete space, and every countable discrete space is a $0$-manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the one-point local model.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each singleton is open; second countability then bounds how many such singletons exist.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E001 — Solution 1

Every open subset of $\\mathbb{R}^{0}$ is either empty or its one point. A chart at $p$ therefore has domain $\\{p\\}$, so every singleton in a $0$-manifold is open and the space is discrete. A second-countable discrete space is countable because every singleton must occur in any basis. Conversely, a countable discrete space is Hausdorff and has its countable singleton basis; each singleton is homeomorphic to $\\mathbb{R}^{0}$, so it is a $0$-manifold.


</details>

### TOP-CH17-E002 — Exercise 2

Show that an uncountable disjoint union of copies of $\\mathbb{R}$ is Hausdorff, locally Euclidean, and paracompact, but not second-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Work independently in each open summand.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A countable basis would require a distinct member in every summand.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E002 — Solution 2

Each summand is open and closed. Points in one summand are separated by Euclidean intervals, and points in different summands are separated by the summands, so the sum is Hausdorff. Every point has an interval chart. A disjoint union of paracompact spaces is paracompact: refine a cover separately in each open summand, then unite the locally finite refinements. If a countable basis existed, each open summand would contain a basis element, and disjoint summands would require distinct basis elements. Uncountably many summands therefore contradict countability of the basis.


</details>

### TOP-CH17-E003 — Exercise 3

Explain precisely why the line with two origins is excluded by this chapter's manifold definition.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check the three global axioms separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Only Hausdorffness fails: both origin neighborhoods contain shared small nonzero points.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E003 — Solution 3

It is locally Euclidean: away from the origins the quotient has ordinary interval charts, and each origin has a chart obtained from a small interval in its own copy. It is second-countable because images of rational-endpoint intervals from the two copies give a countable basis. It is not Hausdorff: every neighborhood of either origin contains images of sufficiently small nonzero real numbers, so any pair of origin neighborhoods intersects. Thus it fails the Hausdorff axiom and is not a manifold under the active convention.


</details>

### TOP-CH17-E004 — Exercise 4

Prove that a topological manifold is second-countable if and only if it has a countable atlas.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull countable Euclidean bases back through charts.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Conversely restrict charts to basis members and choose one chart for each basis member that occurs.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E004 — Solution 4

If $\\{(U_{i},\\varphi_{i})\\}$ is a countable atlas, pull back a countable basis of each Euclidean open set $\\varphi_{i}(U_{i})$. The union over countably many charts is a countable basis for $M$. Conversely, let $B$ be a countable basis. For each $p$, choose a chart domain $U_{p}$ and a basis member $B_{p}$ with $p \\in B_{p} \\subseteq U_{p}$; restricting the chart to open $B_{p}$ still gives a chart. For each basis member that arises this way, choose one such restricted chart. These countably many chart domains cover $M$, giving a countable atlas.


</details>

### TOP-CH17-E005 — Exercise 5

Prove that a transition map between two topological charts is a homeomorphism between open subsets of $\\mathbb{R}^n$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The overlap is open in each chart domain.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compose the two homeomorphisms and write its inverse.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E005 — Solution 5

For charts $(U,\\varphi)$ and $(V,\\psi)$, the overlap $U \\cap V$ is open in $M$. Because $\\varphi$ and $\\psi$ are homeomorphisms, $\\varphi(U \\cap V)$ and $\\psi(U \\cap V)$ are open in $\\mathbb{R}^n$. The transition $\\psi \\circ \\varphi^{-1}$ is a composition of homeomorphisms restricted to these sets, and its inverse is $\\varphi \\circ \\psi^{-1}$. Hence it is a homeomorphism.


</details>

### TOP-CH17-E006 — Exercise 6

Prove that every point of a manifold has a chart neighborhood whose closure is compact and contained in a prescribed chart domain.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a closed Euclidean ball inside the chart image.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its inverse image is compact and hence closed in the Hausdorff manifold.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E006 — Solution 6

Let $(U,\\varphi)$ be a chart and $p \\in U$. Since $\\varphi(U)$ is open, choose $r>0$ so that the closed Euclidean ball $\\overline{B}(\\varphi(p),r)$ lies in $\\varphi(U)$. Put $V=\\varphi^{-1}(B(\\varphi(p),r))$. The set $V$ is open and contains $p$. Its ambient closure lies in $\\varphi^{-1}(\\overline{B}(\\varphi(p),r))$, which is compact because the closed ball is compact and $\\varphi^{-1}$ is continuous. As $M$ is Hausdorff, that compact image is closed in $M$, so it contains $\\operatorname{cl}_{M}(V)$ and lies in $U$.


</details>

### TOP-CH17-E007 — Exercise 7

Derive metrizability and paracompactness of a manifold from the chapter's axioms.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Obtain compact neighborhoods from charts.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Then use locally compact Hausdorff regularity, second-countable metrization, and metric paracompactness.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E007 — Solution 7

Relatively compact charts show that $M$ is locally compact. A locally compact Hausdorff space is regular. By definition $M$ is second-countable, so the Urysohn metrization theorem gives a compatible metric. Every metric space is paracompact. Thus no metric or paracompactness assumption needs to be added separately under this convention.


</details>

### TOP-CH17-E008 — Exercise 8

Prove that every manifold is sigma-compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cover by relatively compact chart domains.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Lindelofness supplies a countable subcover; take their compact closures.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E008 — Solution 8

Relatively compact chart neighborhoods cover $M$. Second countability implies Lindelofness, so select a countable subcover $\\{V_{k}\\}$. Each $\\operatorname{cl}(V_{k})$ is compact, and

$M=\\bigcup_{k} V_{k} \\subseteq \\bigcup_{k} \\operatorname{cl}(V_{k}) \\subseteq M$.

Therefore $M$ is a countable union of compact subsets.


</details>

### TOP-CH17-E009 — Exercise 9

Prove that a connected manifold is path connected and that every manifold has at most countably many components.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Charts give locally path-connected neighborhoods.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Path components are open, and disjoint open components consume distinct basis members.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E009 — Solution 9

Charts supply a basis of path-connected neighborhoods, so $M$ is locally path connected. Path components are therefore open. Inside a connected space, the disjoint open path components cannot number more than one, hence a connected manifold is path connected. More generally, components equal path components and are open. Each component contains a basis member, and disjoint components contain distinct basis members. A countable basis therefore permits at most countably many components.


</details>

### TOP-CH17-E010 — Exercise 10

Prove that an open subspace of an $n$-manifold is an $n$-manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Restrict every chart to the open subspace.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its chart image remains Euclidean-open, while both global axioms are hereditary.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E010 — Solution 10

Let $O \\subseteq M$ be open. It inherits Hausdorffness and second countability. For $p \\in O$, choose a chart $(U,\\varphi)$ of $M$; then $U \\cap O$ is open, and the restriction of $\\varphi$ is a homeomorphism onto the open set $\\varphi(U \\cap O) \\subseteq \\mathbb{R}^n$. These restricted charts cover $O$, proving the claim.


</details>

### TOP-CH17-E011 — Exercise 11

Prove that the product of an $m$-manifold and an $n$-manifold is an $(m+n)$-manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take product charts.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their images are open in the product Euclidean space, and finite products preserve the global axioms.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E011 — Solution 11

The product is Hausdorff, and a product of two countable bases is countable. Around $(p,q)$, take charts $(U,\\varphi)$ and $(V,\\psi)$. The map $\\varphi \\times \\psi$ is a homeomorphism from $U \\times V$ onto the open set $\\varphi(U) \\times \\psi(V)$ in $\\mathbb{R}^m \\times \\mathbb{R}^n$, canonically homeomorphic to $\\mathbb{R}^{m+n}$. Hence these product charts give the required local model.


</details>

### TOP-CH17-E012 — Exercise 12

Give two explicit charts proving that $S^{1}$ is a $1$-manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Omit a different pole for each chart.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use rational stereographic formulas and check the inverse denominators.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E012 — Solution 12

Let $U_+=S^{1}\\setminus \\{(-1,0)\\}$ and $U_-=S^{1}\\setminus \\{(1,0)\\}$. Stereographic projection from the omitted point maps each set homeomorphically to $\\mathbb{R}$; explicitly, from $(-1,0)$ use $(x,y) \\mapsto y/(1+x)$, and from $(1,0)$ use $(x,y) \\mapsto y/(1-x)$. Their inverse formulas are rational functions obtained by intersecting the corresponding line with the circle, so they are continuous. The two open sets cover $S^{1}$. As a subspace of $\\mathbb{R}^{2}$, the circle is Hausdorff and second-countable, completing the proof.


</details>

### TOP-CH17-E013 — Exercise 13

Show that the graph of a continuous $f:U\\to \\mathbb{R}^k$, with $U \\subseteq \\mathbb{R}^n$ open, is an $n$-manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Parameterize the graph by its first coordinates.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The coordinate projection is a continuous inverse.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E013 — Solution 13

Define $g:U\\to \\mathbb{R}^{n+k}$ by $g(x)=(x,f(x))$. It is continuous and bijective onto the graph. The restriction of projection onto the first $n$ coordinates is a continuous inverse, so $g$ is a homeomorphism. Hence the graph is homeomorphic to the $n$-manifold $U$, and transported charts make it an $n$-manifold. Hausdorffness and second countability also follow from the homeomorphism.


</details>

### TOP-CH17-E014 — Exercise 14

Determine the manifold boundary of $[0,1]$, $[0,1)$, $\\mathbb{R}$, and $S^{1}$ under the boundary convention of this chapter.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use half-interval charts only at included endpoints.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A missing endpoint is not a point of the space and contributes no manifold boundary.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E014 — Solution 14

The boundary of $[0,1]$ is $\\{0,1\\}$: interior points have interval charts, while endpoint neighborhoods have half-line charts. The boundary of $[0,1)$ is $\\{0\\}$; points near $1$ do not exist in the space, and every positive point has an open-interval neighborhood. Both $\\mathbb{R}$ and $S^{1}$ are boundaryless because every point has a neighborhood modeled on an open interval. These are intrinsic manifold boundaries.


</details>

### TOP-CH17-E015 — Exercise 15

Give an example showing that manifold boundary and ambient topological boundary are different notions.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Embed a boundaryless circle in the plane.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its ambient interior is empty although every point has an interval chart.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E015 — Solution 15

The circle $S^{1}$ is a $1$-manifold without boundary, so $\\partial S^{1}=\\varnothing$ intrinsically. As a subset of $\\mathbb{R}^{2}$, it has empty interior and is closed, so its ambient topological boundary is $\\operatorname{cl}(S^{1})\\setminus \\operatorname{Int}_{\\mathbb{R}^{2}}(S^{1})=S^{1}$. The two boundaries differ completely.


</details>

### TOP-CH17-E016 — Exercise 16

Prove that the coordinate cross in $\\mathbb{R}^{2}$ is not a $1$-manifold at the origin.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Shrink a proposed chart to a connected four-arm neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Deleting its center gives four components, unlike deleting a point from an interval.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E016 — Solution 16

Suppose a chart neighborhood $U$ of the origin existed. Choose $\\varepsilon>0$ so that the connected open four-arm set $W=C\\cap(-\\varepsilon,\\varepsilon)^2$ lies in $U$. The chart maps $W$ to a connected open subset of $\\mathbb{R}$, hence an open interval. Removing the origin from $W$ leaves four components, while removing its image from that interval leaves two. Homeomorphisms preserve components, giving a contradiction. Therefore no interval chart exists at the origin.


</details>

### TOP-CH17-E017 — Exercise 17

Prove that $S^{1}\\vee S^{1}$ is not a $1$-manifold, while every point away from the wedge point has a $1$-manifold neighborhood.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Away from the wedge point use a short arc.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

At the wedge point use the same four-component deletion obstruction.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E017 — Solution 17

Away from the identified point, choose a small arc contained in one circle; it is homeomorphic to an open interval. If a chart domain existed at the wedge point, choose inside it a connected open neighborhood $W$ consisting of four short arc arms. The chart image of this same $W$ would be a connected open subset of $\\mathbb{R}$, hence an interval. Removing the wedge point from $W$ leaves four components, while removing its image from the interval leaves two. Thus no chart can exist there. The failure is local and confined to the gluing point.


</details>

### TOP-CH17-E018 — Exercise 18

Explain why $[0,1]$ is a $1$-manifold with boundary but not a $1$-manifold without boundary.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Reflect a neighborhood of the right endpoint.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An endpoint-deleted half-interval stays connected, unlike an interior-deleted interval.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E018 — Solution 18

Interior points have ordinary interval charts. Near $0$, the identity identifies $[0,\\varepsilon)$ with a relatively open subset of $H^{1}=[0,\\infty)$; near $1$, reflection $x \\mapsto 1-x$ does the same. Hence it is a manifold with boundary. If an endpoint had an open-interval chart, shrinking to a connected interval and deleting the endpoint would leave two components in the model. A sufficiently small endpoint neighborhood with the endpoint deleted is connected, giving a contradiction. Thus no boundaryless chart exists there.


</details>

### TOP-CH17-E019 — Exercise 19

Using invariance of domain as a cited theorem, prove that a continuous injective map $f:M\\to N$ between $n$-manifolds without boundary is open.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Express the map in source and target charts.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply invariance of domain to its injective Euclidean coordinate expression.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E019 — Solution 19

Fix $p \\in M$ and choose charts $(U,\\varphi)$ at $p$ and $(V,\\psi)$ at $f(p)$. Shrink $U$ so that $f(U) \\subseteq V$. The coordinate expression

$\\psi \\circ f \\circ \\varphi^{-1}:\\varphi(U)\\to \\mathbb{R}^n$

is continuous and injective. Invariance of domain says its image is open in $\\mathbb{R}^n$. Therefore $f(U)$ is open in $V$, hence in $N$. Such neighborhoods $U$ cover $M$, so for any open $O \\subseteq M$, the sets $f(O \\cap U)$ are open by applying the same argument to the restriction. Their union is $f(O)$, proving that $f$ is open. Since it is injective, it is an embedding onto the open subspace $f(M)$.


</details>

### TOP-CH17-E020 — Exercise 20

Audit the following claims, giving the missing theorem or counterexample: $(a)$ every locally Euclidean space is a manifold; $(b)$ chart overlaps of a topological manifold must be differentiable; $(c)$ $\\mathbb{R}^m$ and $\\mathbb{R}^n$ might be homeomorphic for $m\\ne n$; $(d)$ a quotient of manifolds is a manifold.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate local charts, global axioms, and extra structures.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use doubled origins, topological transitions, invariance of dimension, and the wedge quotient respectively.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH17-E020 — Solution 20

$(a)$ False under this chapter's convention. The line with two origins is locally Euclidean and second-countable but non-Hausdorff; an uncountable disjoint union of lines is Hausdorff and locally Euclidean but not second-countable.

$(b)$ False. Topological chart transitions are required only to be homeomorphisms. Differentiability belongs to a chosen smooth atlas and is extra structure.

$(c)$ False. Invariance of dimension, derived from invariance of domain, says nonempty Euclidean open sets of different dimensions are not homeomorphic.

$(d)$ False. The wedge $S^{1}\\vee S^{1}$ is a quotient of two circles (or of their disjoint union) but has a four-armed wedge point with no interval neighborhood. A quotient-manifold proof needs local injective charts, as well as Hausdorffness and second countability of the quotient.


</details>

<details data-euler-reveal="solution">
<summary>Full solution for TOP-CH17-P001: torus choice</summary>

## Selected project solution

### TOP-CH17-P001 — Worked torus choice

This is a complete public key for the torus choice of the existing open-choice project. The other surface choices remain available and retain their original scope. Only a topological atlas is required here: no multivariable calculus, tangent-space computation or orientation claim is used.

**The space and its global axioms.** Put

$$T^2=S^1\\times S^1
=\\{(x_1,y_1,x_2,y_2)\\in\\mathbb R^4:
x_1^2+y_1^2=x_2^2+y_2^2=1\\}$$

with the subspace topology. It is Hausdorff: distinct points of this subspace can be separated by disjoint Euclidean balls in $\\mathbb R^4$, intersected with $T^2$. Intersections with ambient open boxes whose endpoints are rational form a countable basis for the subspace, proving second countability. The product of the two circle subspace topologies agrees with this subspace topology, as is seen by intersecting product boxes with $S^1\\times S^1$.

**Two circle charts, with actual inverses.** For a circle point (x,y), define

$$U_+=S^1\\setminus\\{(-1,0)\\},\\qquad
U_-=S^1\\setminus\\{(1,0)\\},$$

$$\\varphi_+(x,y)=\\frac{y}{1+x},\\qquad
\\varphi_-(x,y)=\\frac{y}{1-x}.$$

The domains are open in $S^1$. Their denominators are positive on the corresponding domains, so the maps are continuous. Their inverses on all of $\\mathbb R$ are

$$
\\psi_+(t)=\\left(\\frac{1-t^2}{1+t^2},\\frac{2t}{1+t^2}\\right),\\qquad
\\psi_-(t)=\\left(\\frac{t^2-1}{1+t^2},\\frac{2t}{1+t^2}\\right).
$$

The denominator $1+t^2$ is positive for every real t. The identity

$$(1-t^2)^2+(2t)^2=(1+t^2)^2$$

puts both inverse images on the circle. Moreover $1+x=2/(1+t^2)>0$ for $\\psi_+(t)$ and $1-x=2/(1+t^2)>0$ for $\\psi_-(t)$, so neither lands at its omitted pole. Direct substitution gives $\\varphi_\\pm\\psi_\\pm(t)=t$.

For the other composition, put A=1+x for the plus chart and B=1−x for the minus chart. Using $x^2+y^2=1$ gives $A^2+y^2=2A$ and $B^2+y^2=2B$. Substitution into the inverse formulas gives respectively $((A^2-y^2)/(2A),2yA/(2A))=(x,y)$ and $((y^2-B^2)/(2B),2yB/(2B))=(x,y)$. The denominators are nonzero on the declared domains. Thus these really are mutually inverse continuous maps onto $\\mathbb R$, which is open in itself.

The overlap is $S^1\\setminus\\{(-1,0),(1,0)\\}$, where y≠0. Its image under either chart is $\\mathbb R\\setminus\\{0\\}$. On that exact nonzero domain,

$$\\varphi_-\\psi_+(t)=\\frac{1}{t},\\qquad
\\varphi_+\\psi_-(t)=\\frac{1}{t}.$$

For example the first fraction is $(2t)/(2t^2)=1/t$; it must not be extended to t=0. Reciprocation is continuous there and is its own inverse.

**Four product charts and every type of transition.** For signs σ,τ independently chosen from {+,−}, let

$$V_{\\sigma\\tau}=U_\\sigma\\times U_\\tau,\\qquad
\\Phi_{\\sigma\\tau}(p,q)=
(\\varphi_\\sigma(p),\\varphi_\\tau(q)).$$

These are four open domains in $T^2$. They cover it because the two circle domains cover each factor. Each chart maps onto all of $\\mathbb R^2$, with continuous inverse

$$\\Psi_{\\sigma\\tau}(u,v)=(\\psi_\\sigma(u),\\psi_\\tau(v)).$$

Both compositions are the identity coordinate by coordinate, using the already proved circle identities. This proves the homeomorphism property and coverage, not just continuity or a picture.

For a change from signs (σ,τ) to (σ′,τ′), use identity in a coordinate when its sign stays the same and reciprocation when it changes. The domain is $E_{\\sigma,\\sigma'}\\times E_{\\tau,\\tau'}$, where E is $\\mathbb R$ for unchanged signs and $\\mathbb R\\setminus\\{0\\}$ for changed signs. It is open in $\\mathbb R^2$, and the reverse transition has exactly the same coordinate rules. Two explicit nonempty cases are

$$
\\Phi_{-+}\\Psi_{++}(u,v)=(1/u,v)
\\quad\\text{on }(\\mathbb R\\setminus\\{0\\})\\times\\mathbb R,
$$

$$
\\Phi_{--}\\Psi_{++}(u,v)=(1/u,1/v)
\\quad\\text{on }(\\mathbb R\\setminus\\{0\\})^2.
$$

This is topological compatibility. The signs of a chosen coordinate transition do not themselves decide global orientability; an orientation is not being inferred or required by this project.

**Dimension and the two meanings of boundary.** The global axioms and explicit charts establish a topological 2-manifold. Uniqueness of that dimension, if claimed against a competing Euclidean dimension, uses the chapter's quoted invariance-of-dimension theorem; it is not proved by this atlas. Invariance of domain is not needed to show these particular maps are open homeomorphisms, since their continuous inverses have been written down.

The intrinsic manifold boundary is empty. Each point has a Euclidean chart; restrict to a small coordinate disk and translate its last coordinate so that the disk lies strictly inside the upper half-plane. This is an interior boundary-chart model. The quoted boundary-invariance theorem ensures that a different permissible boundary chart cannot turn that point into an edge point. That chart-independence theorem is used, not proved here.

In contrast, the ambient topological boundary in $\\mathbb R^4$ is all of $T^2$. The two circle equations define a closed subset. Its ambient interior is empty: for a point (p,q) with both p,q unit vectors, the arbitrarily close point ((1+ε)p,q), ε>0, fails the first circle equation. Hence closure minus ambient interior is $T^2$, despite its empty intrinsic boundary.

**A failed global-angle chart and its repair.** Assigning both principal angles in [0,2π) does not give one chart on the torus. The target [0,2π)² is not open in $\\mathbb R^2$, and the inverse angle assignment is not continuous at the cut: $(\\cos(2\\pi-1/n),\\sin(2\\pi-1/n))\\to(1,0)$, but the assigned angles tend to 2π rather than the angle 0 assigned to (1,0). Keep the other circle factor fixed to obtain the same obstruction in $T^2$. The periodic map from $\\mathbb R^2$ to the torus is continuous but not injective either. The four open rational-coordinate charts above repair these failures without a global angle choice.

For comparison and revision, check domains, pole exclusions, both inverse identities, the actual overlap, the two global axioms and the intrinsic/ambient distinction. If a draft divides by t on an overlap containing 0, remove that point from the overlap; if it infers nonorientability from one reciprocal transition, remove that unsupported conclusion. The original project and its other choices are unchanged, and no surface-classification theorem or whole-book qualification has been proved by this one key.

</details>

## Sources

Jean Gallier and Dianna Xu, [A Guide to the Classification Theorem for Compact Surfaces](https://www.cis.upenn.edu/~jean/surfclassif-root.pdf), Chapter 6, Section 4.6 and Appendix E, supplies comparison for the classification argument and the explicitly imported triangulability theorem. Allen Hatcher, [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Sections 2.1–2.2 and 3.3, supplies the named homology and intrinsic-orientation inputs. The polygonal separation, tree and dual-tree reduction, recut identities, normal-form termination and polygonal disk-placement arguments are developed in this chapter. The retained Quarto chapter \`modules/textbooks/topology/chapters/19-surfaces-knots.qmd\` supplies the existing surface-and-knot reading by reference; its source and exercises are unchanged. Point-set dependencies are [Paracompactness, Partitions and Refinements](paracompactness-partitions-and-refinements.md) and [Local Compactness and Compactifications](local-compactness-and-compactifications.md).

## Chapter checkpoint

A topological manifold combines local Euclidean charts with global Hausdorff and second-countable control. Charts automatically have homeomorphic transition maps; smoothness and other geometric structures are additional. Manifolds are locally compact, locally contractible, metrizable, paracompact, sigma-compact, and have countably many path-connected components. Half-space charts define manifolds with boundary, whose intrinsic boundary is protected by a deep invariance theorem and need not match ambient boundary. Invariance of domain and dimension secure the openness of same-dimensional embeddings and the uniqueness of dimension, but their proofs lie beyond elementary point-set topology. Quotient pictures and local resemblance are evidence only after every chart and global axiom has been audited.

Polygonal Jordan separation is proved here by connected local sides and crossing parity. Given the explicitly imported surface-triangulation theorem, the tree and dual-tree construction gives a one-vertex polygon. Reversible recuts exhaust it into handles or crosscaps; the handle-plus-crosscap identity removes mixed forms, and the disk-placement argument handles boundary components. Intrinsic orientation, boundary invariance and the stated homology inputs distinguish the resulting models. General surface triangulability and the underlying homology machinery remain named inputs; classification is established from them rather than inferred from Euler counts alone.
`;export{e as default};