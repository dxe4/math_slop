var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: graphic-cographic-matroids
title: "Graphic and Cographic Matroids"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Graphic and Cographic Matroids

Graph theory supplies two complementary minimal structures. Cycles are minimal failures of acyclicity. Bonds are minimal edge cuts. A graphic matroid treats cycles as circuits; its dual, the cographic matroid, treats bonds as circuits. For a graph drawn in the plane, the two structures become literal geometric duals: primal cycles correspond to dual cuts, and primal spanning trees have complementary dual spanning trees.

The correspondences are exact only after conventions are fixed. Graph loops and parallel edges cannot be silently discarded, planar duality requires a chosen embedding, and a cycle matroid forgets more graph information than its notation suggests.

## Prerequisites and graph conventions

We assume finite graphs, paths, connected components, spanning forests, cuts, matroid rank, circuits, cocircuits, deletion, contraction, and basis duality. Graphs in this chapter may be multigraphs. A graph loop is a one-edge cycle. Two parallel nonloop edges form a two-edge cycle. A **forest** contains neither kind of cycle.

For $A\\subseteq E(G)$, let $c(A)$ be the number of connected components of the spanning subgraph $(V(G),A)$, including isolated vertices. This convention makes rank formulas uniform. Unless stated otherwise, a “cut” is an edge set $\\delta (X)$ with one endpoint in $X$ and one in $V\\setminus X$; a **bond** is an inclusion-minimal nonempty cut.

## 1. Forests satisfy augmentation

The **cycle matroid** or **graphic matroid** $M(G)$ has ground set $E(G)$ and declares $F$ independent exactly when $(V,F)$ is a forest.

Heredity is immediate. For augmentation, let forests $F_1,F_2$ satisfy $|F_1|<|F_2|$. A forest on the full vertex set has

$|F_i|=|V|-c(F_i)$.

Thus $c(F_1)>c(F_2)$. If every edge of $F_2\\setminus F_1$ had both endpoints inside one component of $(V,F_1)$, then every $F_2$-component would be contained in an $F_1$-component, forcing $c(F_2)\\ge c(F_1)$. Therefore some $e\\in F_2\\setminus F_1$ joins distinct $F_1$-components. Adding it cannot create a cycle, so it augments $F_1$.

Graph loops never belong to an independent set and become matroid loops. Parallel graph edges form a two-element circuit. The proof accommodates both without pretending the graph is simple.

## 2. Rank, bases, circuits, and closure are graphical

For every edge set $A$,

$r_M(A)=|V|-c(A)$.

Choose a spanning tree within each component of $(V,A)$. Their union is an independent subset of $A$ with $|V|-c(A)$ edges. No forest inside a component can use more than $|V_i|-1$ edges, so the bound is exact.

Several descriptions follow at once:

- bases of $A$ are spanning forests of $(V,A)$;
- bases of $E$ contain one spanning tree in each component of $G$;
- circuits are graph cycles, including loops and parallel pairs;
- an edge $uv$ belongs to $\\operatorname{cl}(A)$ exactly when $u$ and $v$ are already connected in $(V,A)$;
- graph bridges are matroid coloops because every spanning forest of full rank must include them.

The closure statement applies to arbitrary $A$, not only forests. If $A$ already contains cycles, rank still depends only on its component partition.

### Worked example: square with a diagonal

Let $G$ have edges $12,23,34,41,13$. It is connected on four vertices, so $r(E)=3$. Its circuits are the triangles

$\\{12,23,13\\}$ and $\\{13,34,41\\}$

and the square $\\{12,23,34,41\\}$. The full five-edge set is dependent but not minimal.

For $A=\\{12,23\\}$, vertices $1,2,3$ form one component and $4$ is isolated. Therefore $r(A)=2$ and

$\\operatorname{cl}(A)=\\{12,23,13\\}$.

The diagonal is rank-neutral because its endpoints are already connected; either edge incident with $4$ raises rank.

## 3. Fundamental cycles and cuts are exchange certificates

Let $T$ be a spanning tree of a connected graph.

- For $e\\notin T$, the fundamental circuit $C(e,T)$ is the unique graph cycle in $T+e$.
- For $t\\in T$, the fundamental cocircuit $D(t,T)$ is the set of all ambient edges joining the two components of $T-t$.

An edge $t$ can be removed after inserting $e$ exactly when $t\\in C(e,T)$. An outside edge $e$ can replace $t$ exactly when $e\\in D(t,T)$. Their common nonfixed member in the strong-exchange proof is visually an edge that lies on the fundamental cycle and crosses the fundamental cut.

This is a certificate, not merely a picture. A proposed tree exchange can be checked by listing the path in $T$ between the endpoints of $e$; those path edges, together with $e$, are the complete circuit.

## 4. Cocircuits of $M(G)$ are bonds

Assume first that $G$ is connected. Let $D$ be a bond. Removing $D$ separates the graph into exactly two connected shores; if one shore were disconnected internally, a smaller nonempty cut would lie inside $D$. Hence $H=E\\setminus D$ has two components and graphic rank $|V|-2$. Adding any $d\\in D$ joins the shores and raises rank to $|V|-1$. Thus $H$ is a hyperplane, and $D$ is a cocircuit.

Conversely, if $D$ is a cocircuit, $H=E\\setminus D$ is a graphic hyperplane of rank $|V|-2$. Its spanning subgraph has exactly two components. Flatness says that every edge whose endpoints lie inside one component already belongs to $H$; consequently $D$ is precisely the cut between the components. Adding any proper nonempty subset of that cut cannot be the complement of a hyperplane, so the cut is minimal: it is a bond.

For a disconnected graph, apply the statement inside a connected component. A cocircuit never mixes unrelated components.

### Cut versus bond

In a four-cycle with bipartition classes $\\{1,3\\}$ and $\\{2,4\\}$, the full four-edge set is the cut $\\delta (\\{1,3\\})$. It is not a bond because it contains smaller nonempty cuts: the two edges incident with any fixed vertex form a bond. A larger cut can contain a bond and is not minimal. Cographic circuits correspond to bonds, not to arbitrary cuts or to arbitrary sets whose removal happens to increase component count.

## 5. Deletion and contraction match graph operations

For an edge $e$,

$M(G)\\setminus e=M(G\\setminus e)$.

Both sides retain exactly the acyclic subsets avoiding $e$.

For a nonloop edge,

$M(G)/e=M(G/e)$,

where graph contraction identifies the endpoints and retains any loops or parallel edges created. An edge set outside $e$ is acyclic after contraction exactly when adjoining $e$ was acyclic before contraction.

If $e$ is a graph loop, matroid contraction equals deletion because the loop has rank zero. Naively contracting its endpoints has no ordinary graph meaning. If $e$ is a bridge, contraction removes a coloop and lowers both ground size and rank by one; deletion instead separates a component. These boundaries are why minor proofs should state whether an edge is a loop or bridge.

Cycle-matroid minors are graphic. Repeated graph deletion and contraction realize every matroid minor, with multigraph conventions preserving the resulting loops and parallel classes.

## 6. Cographic matroids turn cuts into circuits

The **bond matroid** or **cographic matroid** of $G$ is

$M^{*}(G)=M(G)^{*}$.

Its circuits are bonds of $G$, and its cocircuits are cycles of $G$. If $G$ is connected, a cographic basis is the complement of a spanning tree. Such a complement has $|E|-|V|+1$ edges, the cycle-space dimension.

For arbitrary $G$ and $A\\subseteq E$, dual rank gives

$r_{M^{*}(G)}(A)=|A|+c(G)-c(E\\setminus A)$.

Indeed,

$r^{*}(A)=|A|-r_M(E)+r_M(E\\setminus A)$

and the graphic rank formula cancels $|V|$. The result measures how many edges of $A$ can be chosen without containing a bond.

### Worked cographic rank

In a connected four-cycle, let $A$ consist of one edge. Its complement is a three-edge path, still connected, so $r^{*}(A)=1+1-1=1$. If $A$ consists of the two edges incident with one vertex, its complement has two components, so $r^{*}(A)=2+1-2=1$; the two-edge set is a cographic circuit, as expected for a bond.

## 7. Plane duality realizes matroid duality

A **plane graph** is a graph with a fixed crossing-free embedding. Its geometric dual $G^{*}$ has one vertex for each face and one dual edge $e^{*}$ crossing each primal edge $e$. Different embeddings can produce different dual graphs, so the embedding is data.

**Theorem 11.1 (Plane duality).** If $G$ is a connected plane multigraph, the edge bijection $e\\leftrightarrow e*$ gives

$M(G^{*})=M(G)^{*}$.

**Proof through bases.** Let $T$ be a spanning tree of $G$. The dual edges corresponding to $E\\setminus T$ contain no dual cycle: a dual cycle would correspond to a primal cut disjoint from $T$, impossible because a spanning tree crosses every nontrivial cut. Euler's formula gives

$|E\\setminus T|=|E|-|V|+1=|F|-1$,

so this acyclic dual set has exactly the size of a spanning tree of $G^{*}$; it is a dual spanning tree. Conversely, the same argument applied to the dual shows that complements of primal spanning trees are exactly dual spanning trees. Thus bases of $M(G^{*})$ are complements of bases of $M(G)$, which is the definition of matroid duality. ∎

Primal bridges correspond to dual loops, and primal loops correspond to dual bridges. The multigraph convention makes these boundary cases part of the theorem rather than exceptions discarded from the drawing.

## 8. Abstract duality is broader than plane drawing

Every matroid has a dual, and every graph has a cographic matroid, whether or not the graph is planar. A geometric dual graph is available only from a plane embedding.

A planarity criterion for finite graphs states that a graph is planar exactly when its cographic matroid is graphic. The forward direction is the plane duality theorem. The reverse direction is deeper: an abstract graph representing $M^{*}(G)$ can be used to recover a planar structure. This chapter uses the criterion as a boundary theorem, not as a substitute for a planarity proof.

Even for planar graphs, the dual graph need not be unique as an abstract labeled graph when embeddings vary. What remains invariant is the associated dual matroid under the edge correspondence.

## 9. What the cycle matroid forgets

The ground elements of $M(G)$ are edges. Vertices are not retained as named matroid elements. Consequently the cycle matroid need not determine the graph up to isomorphism.

The simplest loss occurs for forests: every subset of forest edges is independent, so any forest with $m$ edges has the free matroid $U(m,m)$. A path with three edges and a three-edge star are nonisomorphic graphs with the same cycle matroid.

Among graphs with cycles, flips along two-vertex separations can also preserve the cycle matroid. The appropriate equivalence is called 2-isomorphism. For 3-connected simple graphs, the cycle structure is much more rigid, but one should not infer vertex-level properties from an unlabeled matroid without a reconstruction theorem.

## 10. Project investigation: a bounded graphic–cographic audit

Choose a connected multigraph with at most seven edges and emit:

1. every spanning tree;
2. all graphic circuits and cocircuits;
3. every fundamental cycle and cut for a chosen tree;
4. graphic and cographic ranks for all edge subsets;
5. deletion and contraction checks for a loop, ordinary edge, and bridge when present;
6. for a fixed plane embedding, the dual edge table and complementary-tree verification.

The text fallback should identify edges by endpoints plus stable IDs so parallel edges remain distinguishable. A drawing alone cannot encode which parallel copy was selected. The investigation verifies a finite instance; the planarity criterion and plane duality still require proofs beyond enumeration.

## 11. Common errors

1. **The graph is silently simplified.** Loops and parallel edges carry one- and two-element circuit data.
2. **$c(A)$ ignores isolated vertices.** The rank formula uses the spanning subgraph on all of $V$.
3. **Every disconnecting set is called a bond.** Cocircuits are minimal nonempty cuts.
4. **Contraction is treated as deletion.** They agree for loops, not for ordinary edges.
5. **A geometric dual is claimed for a nonembedded graph.** Plane duality needs a fixed embedding.
6. **The matroid is assumed to remember vertices.** Nonisomorphic forests already disprove that assumption.

## Worked multigraph and dual examples

### Worked example: a plane triangle with both boundary cases

Draw a triangle on vertices $1,2,3$, attach a bridge $t=34$ outside it, and draw a loop $\\ell$ at vertex four so that the loop bounds a small face disjoint from the triangle interior. There are four vertices and five edges. Euler's formula gives three faces: the triangle interior $f_T$, the loop interior $f_L$, and the outer face $f_O$.

Each triangle edge has $f_T$ on one side and $f_O$ on the other, so the three corresponding dual edges are parallel links between $f_T$ and $f_O$. Both sides of the bridge meet $f_O$, so $t^*$ is a dual loop. The primal loop separates $f_L$ from $f_O$, so $\\ell^*$ is a dual bridge between those two dual vertices. Thus the bridge–loop correspondence is visible in one connected example rather than left to a verbal exception.

A primal spanning tree contains $t$, excludes $\\ell$, and chooses two of the three triangle edges. There are exactly three choices. Its edge complement consists of $\\ell$ and the unused triangle edge. In the dual, these become the bridge $f_Lf_O$ and one of the three parallel links $f_Of_T$, making a spanning tree on all three dual vertices. Conversely every dual spanning tree has precisely that form. The primal rank is three, the dual rank is two, and their sum is the five-edge ground size.

The example shows why a dual loop is not a dispensable drawing artifact. Removing it from the dual would delete the ground element corresponding to a primal coloop. The matroid equality uses the entire labeled edge bijection, including elements that occur in no basis on one side.

### Worked example: disconnected rank with an isolated vertex

Take vertices $1,\\ldots,6$, a triangle with edges $12,23,31$, a separate edge $45$, and a loop $\\ell$ at vertex six. The graph has three connected components: the triangle, the single-edge component, and vertex six with its loop. Thus $r(E)=6-3=3$, and the dual rank is $5-3=2$.

Let $A=\\{12,23,\\ell\\}$. Its spanning subgraph has four components: $\\{1,2,3\\}$, $\\{4\\}$, $\\{5\\}$ and $\\{6\\}$. Graphic rank is therefore $6-4=2$. The loop contributes no rank. The complement $E\\setminus A=\\{31,45\\}$ also has four components, now $\\{1,3\\}$, $\\{2\\}$, $\\{4,5\\}$ and $\\{6\\}$. The cographic formula gives
\\[
r^*(A)=|A|+c(G)-c(E\\setminus A)=3+3-4=2.
\\]

The equality of these two ranks is particular to this chosen set; it does not identify the two matroids. In the graphic matroid $\\ell$ is a loop, whereas in the cographic matroid it is a coloop. The pair $\\{12,23\\}$ is independent graphically but is a bond, hence a circuit cographically. Cographic rank two for $A$ consists of one unit from that pair and one from the dual coloop. Retaining isolated vertices in every component count makes the formulas agree with these structural descriptions.

## Filling in the cut and topology arguments

### Why connected shores give a bond

For a connected graph, a nonempty cut $\\delta(X)$ is a bond exactly when both induced shores $G[X]$ and $G[V\\setminus X]$ are connected.

**Proof.** If a shore is disconnected, take one of its connected components $K$. Every edge from $K$ to its complement crosses the original cut, so $\\delta(K)\\subseteq\\delta(X)$. Connectivity of the whole graph makes this cut nonempty. Another component of the original shore must also have an edge to the opposite shore, so some original cut edge is not in $\\delta(K)$. Thus the original cut was not minimal.

Conversely suppose both shores are connected and a nonempty cut $\\delta(Y)$ is contained in $\\delta(X)$. No edge internal to either shore can cross $Y$. Connectivity within each shore forces all its vertices to lie on the same side of $Y$. Since $\\delta(Y)$ is nonempty, the two shores lie on opposite sides of $Y$, and $\\delta(Y)=\\delta(X)$. Thus the original cut contains no proper nonempty cut and is a bond. ∎

This proves directly the minimality needed in the hyperplane-to-bond argument. It also explains why “a disconnecting set” is too broad: deleting additional edges can disconnect a graph without giving a minimal cut. The cocircuit description is about minimal dependence in the dual, so its minimality must be justified.

### The topological input in the plane-duality proof

The plane argument uses Euler's formula for connected plane multigraphs and the simple-closed-curve separation theorem. These are additional facts about a fixed plane embedding, not consequences of abstract matroid duality. In particular, a simple dual cycle can be drawn as a closed curve avoiding primal vertices and crossing exactly the corresponding primal edges. Each crossed edge has endpoints on opposite sides of the curve. Every primal path from one side to the other must cross it, so those crossed edges separate the primal vertices.

Both sides contain primal vertices: a crossed edge supplies an endpoint on each side. Hence a primal spanning tree must cross this cut. It follows that the dual edges corresponding to a primal tree complement contain no dual cycle. This is the separation step used before Euler's formula counts the remaining dual edges. Loops and parallel-edge cycles in the dual are included as simple embedded closed curves under the multigraph convention.

The dual graph is connected because one can join points in two faces by a curve avoiding the finitely many primal vertices and crossing edges transversely, then read the succession of faces it visits. Thus an acyclic dual subgraph on all face vertices with $|F|-1$ edges is indeed a spanning tree. This supplies the connectivity assumption implicit in the edge-count step. The reverse implication uses the same embedded construction on the dual; its double dual recovers the primal edge correspondence. No unproved planarity criterion is needed for this direction.

## 12. Solved exercises

<a id="graphic-cographic-matroids-ex-1"></a>
### Exercise 1: rank and closure in a square

For the square with diagonal $13$, let $A=\\{12,23,34\\}$. Compute $r(A)$ and $\\operatorname{cl}(A)$.


<details><summary>Hint 1</summary>

Compute the number of components after retaining the three specified edges.

</details>

<details><summary>Hint 2</summary>

A spanning tree has full rank, so every ambient edge has its endpoints already connected.

</details>

<details><summary>Solution</summary>

**Solution.** The three edges form the path $1-2-3-4$, a spanning tree, so $r(A)=3$, the full graph rank. Every remaining edge has endpoints already connected in $(V,A)$. Therefore both $41$ and $13$ are rank-neutral, and $\\operatorname{cl}(A)=E$. A full-rank set always spans the entire matroid even if it is not the only basis.

</details>

<a id="graphic-cographic-matroids-ex-2"></a>
### Exercise 2: bonds of a triangle

List the bonds of a triangle and identify the circuits of its cographic matroid.


<details><summary>Hint 1</summary>

A triangle remains connected after deleting only one edge.

</details>

<details><summary>Hint 2</summary>

Remove two incident edges and check that neither proper subset disconnects it.

</details>

<details><summary>Solution</summary>

**Solution.** Removing the two edges incident with any chosen vertex separates that vertex from the other two. Each such two-edge cut is minimal. There are three bonds: $\\{12,13\\}$, $\\{12,23\\}$, and $\\{13,23\\}$. They are exactly the cographic circuits. A single edge is not a cut because the remaining two-edge path stays connected.

</details>

<a id="graphic-cographic-matroids-ex-3"></a>
### Exercise 3: contraction creates parallel edges

Contract edge $12$ in a triangle with edges $12,23,31$. Describe the graph and its cycle matroid.


<details><summary>Hint 1</summary>

Identify the endpoints of the contracted edge and keep both remaining edge labels.

</details>

<details><summary>Hint 2</summary>

The two retained edges now have the same endpoints and form a two-element circuit.

</details>

<details><summary>Solution</summary>

**Solution.** Vertices $1$ and $2$ merge. Edges $23$ and $31$ now join the merged vertex to $3$, so they are parallel. Their two-element set is a graph cycle and a matroid circuit. This agrees with the contraction circuit rule: the original circuit $\\{12,23,31\\}$ loses contracted edge $12$ and becomes $\\{23,31\\}$.

</details>

<a id="graphic-cographic-matroids-ex-4"></a>
### Exercise 4: complementary plane trees

For a plane square with one diagonal, a spanning tree has three edges. How many edges does its dual complement have, and why is that the correct dual-tree size?


<details><summary>Hint 1</summary>

Use Euler's formula to count the face vertices of the dual.

</details>

<details><summary>Hint 2</summary>

The dual complement has one edge for each primal edge outside the chosen spanning tree.

</details>

<details><summary>Solution</summary>

**Solution.** The graph has $|V|=4$, $|E|=5$, so Euler gives $|F|=2-|V|+|E|=3$. The complement of a three-edge tree has two edges. A spanning tree on the three dual vertices also has $|F|-1=2$ edges. The plane duality proof shows the complement is acyclic in the dual, so its correct size makes it a dual spanning tree.

</details>

<a id="graphic-cographic-matroids-ex-5"></a>
### Exercise 5: distinguish graphic from cographic rank

In a connected four-cycle, let $A$ be two adjacent edges. Compute its graphic and cographic ranks.


<details><summary>Hint 1</summary>

For graphic rank inspect $A$; for cographic rank inspect its complement.

</details>

<details><summary>Hint 2</summary>

In both component calculations retain all four vertices, including an isolated one.

</details>

<details><summary>Solution</summary>

**Solution.** The two adjacent edges form a forest, so graphic rank is $2$. For cographic rank, the complement is the other two adjacent edges; as a spanning subgraph on four vertices it has two components. Thus $r^{*}(A)=|A|+1-c(E\\setminus A)=2+1-2=1$. The set $A$ is a bond isolating their common degree-two vertex, so it is a cographic circuit of size two and rank one.

</details>

<a id="graphic-cographic-matroids-ex-6"></a>
### Exercise 6: a loop and a bridge under duality

In the plane triangle–bridge–loop example, identify a loop and a coloop in each matroid and explain their membership in bases.

<details><summary>Hint 1</summary>

A primal spanning tree must connect vertex four but cannot contain a loop.

</details>
<details><summary>Hint 2</summary>

Bases of the dual are complements of primal bases.

</details>
<details><summary>Solution</summary>

In $M(G)$, $\\ell$ is a loop and belongs to no basis, while $t$ is a coloop and belongs to every basis. In the dual, $t$ belongs to no complementary basis and is a loop, while $\\ell$ belongs to every complementary basis and is a coloop. Geometrically $t^*$ is a loop at the outer-face vertex and $\\ell^*$ is a bridge to the loop-interior face.

</details>

<a id="graphic-cographic-matroids-ex-7"></a>
### Exercise 7: a disconnected full-rank forest

Let a graph consist of a triangle, a separate three-edge path, and an isolated vertex. Find its graphic rank and describe every basis.

<details><summary>Hint 1</summary>

Count the vertices and all three components.

</details>
<details><summary>Hint 2</summary>

A full-rank forest contains a spanning tree in each nontrivial component.

</details>
<details><summary>Solution</summary>

There are three vertices in the triangle, four in the path and one isolated vertex, so $|V|=8$ and $c(G)=3$. The rank is five. Every basis contains all three path edges and exactly two triangle edges. The isolated vertex requires no edge. There are three bases, according to the omitted triangle edge, each of size five.

</details>

<a id="graphic-cographic-matroids-ex-8"></a>
### Exercise 8: deleting and contracting a bridge

For a three-edge path, compare the graphic matroids obtained by deleting its middle edge and contracting its middle edge.

<details><summary>Hint 1</summary>

Both operations retain two edge labels, but their graphs have different component structures.

</details>
<details><summary>Hint 2</summary>

Every subset of edges of a forest is independent.

</details>
<details><summary>Solution</summary>

Deletion leaves two disjoint single-edge components, while contraction leaves a two-edge path. These are different graphs, but both are forests with two retained edges and therefore represent $U(2,2)$. The original rank is three and each resulting rank is two because the removed bridge was a coloop. Thus deletion and contraction can give isomorphic matroids in this case even though the graph operations have different meanings.

</details>

<a id="graphic-cographic-matroids-ex-9"></a>
### Exercise 9: full-cycle cographic rank

Determine the cographic matroid of a cycle with $m\\ge3$ edges by its bases and rank function.

<details><summary>Hint 1</summary>

A graphic spanning tree omits exactly one cycle edge.

</details>
<details><summary>Hint 2</summary>

The complementary bases are all singleton edge sets.

</details>
<details><summary>Solution</summary>

Every primal basis is the cycle with one edge deleted, so the dual bases are exactly the singletons. Thus the cographic matroid is $U(1,m)$, with rank zero on the empty set and one on every nonempty set. Its circuits are all two-edge subsets, agreeing with the fact that deleting any two cycle edges gives a minimal disconnection.

</details>

<a id="graphic-cographic-matroids-ex-10"></a>
### Exercise 10: the same matroid from different trees

Compare the cycle matroids of a four-vertex path and a four-vertex star. Explain what this says about vertex information.

<details><summary>Hint 1</summary>

Both graphs are trees on three edges.

</details>
<details><summary>Hint 2</summary>

Their degree sequences differ, but neither graph has any cyclic edge set.

</details>
<details><summary>Solution</summary>

Every edge subset is independent in either graph, so both cycle matroids are the free matroid $U(3,3)$ after choosing an edge-label bijection. The graphs are not isomorphic: their degree sequences are $(2,2,1,1)$ and $(3,1,1,1)$. Thus a cycle matroid does not in general retain vertex degrees or the graph's vertex-incidence structure.

</details>

## Chapter summary

Graphic matroids encode forests on graph edges. Their rank is $|V|-c(A)$, their circuits are cycles, their closure records endpoint connectivity, and their bases are spanning forests. Cocircuits are bonds, so the dual cographic matroid turns minimal cuts into circuits. Deletion and contraction agree with graph minors when loop conventions are respected. In a connected plane graph, complements of primal spanning trees are dual spanning trees, realizing $M(G^{*})=M(G)^{*}$. Abstract duality exists without an embedding, while a geometric dual does not. Finally, a cycle matroid forgets vertices and can represent several nonisomorphic graphs.


<a id="graphic-cographic-matroids-summary"></a>
## Summary

Graphic rank counts components, graphic circuits are cycles, and cographic circuits are bonds. Explicit multigraph examples keep loops, parallel edges, bridges and isolated vertices visible in both rank formulas. The connected-shore proof establishes bond minimality, while Euler's formula and closed-curve separation supply the embedding facts needed for plane duality. Abstract duality continues to exist when no plane drawing is available, and the matroid alone need not recover the original graph.
`;export{e as default};