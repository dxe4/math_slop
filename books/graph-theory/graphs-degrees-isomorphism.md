
# Graphs, Degrees, and Isomorphism

## What remains when the drawing changes?

Two maps can place the same stations in different positions while recording exactly the same direct connections. A drawing may be stretched, rotated, or rearranged without changing those connections. Graph theory studies the incidence structure that survives such changes. Its first task is to specify that structure precisely; its second is to distinguish properties forced by the structure from features of one representation.

This chapter develops the language used throughout the book. We fix finite simple graphs as the default, explain exactly what changes for multigraphs, and prove the degree identities that constrain possible graphs. We then study isomorphism: when differently named graphs represent the same adjacency structure. Degree sequences and small subgraphs provide useful invariants, but examples will show why matching a few invariants does not establish an isomorphism.

## Preparation and conventions

Read [Introduction to Proof](#/books/introduction-to-proof), especially functions, equivalence relations, finite counting, and proof by contradiction. The graph preparation in [Discrete Mathematics: Graphs, Trees, and Connectivity](#/books/discrete-mathematics-proof-counting-structure/graphs-trees-connectivity), followed by [Spanning Trees and Shortest Paths](#/books/discrete-mathematics-proof-counting-structure/spanning-trees-shortest-paths), supplies earlier encounters with graph structure and algorithms. Here we give definitions and proofs at a more systematic level; no matrix theorem is needed.

Unless explicitly stated otherwise, every graph is finite, undirected, and simple. The empty vertex set is allowed in this chapter. Later statements about minimum degree, connectivity, or trees will name their nonempty hypotheses. Write $uv$ for the unordered edge $\{u,v\}$; thus $uv=vu$, not a directed instruction. The vertex names are distinct labels, even when two vertices have identical neighbourhoods.

## A graph is an incidence structure

**Definition 1.1 (Simple graph).** A finite simple graph is a pair $G=(V,E)$, where $V$ is a finite set and $E\subseteq\binom V2$, the set of two-element subsets of $V$. Its order is $n=|V|$ and its size is $m=|E|$. Two vertices are adjacent when their pair lies in $E$. A vertex is incident with an edge when it is one of its endpoints.

This definition excludes loops because an edge has two distinct endpoints. It excludes parallel edges because $E$ is a set of pairs: a particular pair occurs either once or not at all. A drawing conveys the definition only when it identifies which dots are vertices and which drawn connections represent edges. An unmarked crossing is not an extra vertex, and a curved edge has the same endpoints as a straight one.

A simple graph can model whether two sites are directly connected. It cannot record the number of separate cables between the same two sites without additional structure. Collapsing two cables into one simple edge may preserve a reachability question while changing a question about cable failures. The mathematics is exact about the stated model; choosing which model answers the practical question is a separate obligation.

**Definition 1.2 (Neighbourhood and degree).** The open neighbourhood of $v\in V$ is $N_G(v)=\{u\in V:uv\in E\}$. Its degree is $d_G(v)=|N_G(v)|$. A vertex of degree zero is isolated. A vertex of degree one is a leaf. When $V\ne\varnothing$, the minimum and maximum degrees are $\delta(G)$ and $\Delta(G)$.

In a simple graph, $v\notin N_G(v)$ and $0\le d_G(v)\le n-1$. The closed neighbourhood $N_G[v]=N_G(v)\cup\{v\}$ includes the vertex itself. Keeping the open and closed versions distinct matters when comparing neighbourhood sizes or asking whether a set covers all vertices. A leaf has one neighbour; an isolated vertex has none, so the two words are not interchangeable.

### Worked example 1.3 (Recovering local data from an edge list)

Let $V=\{a,b,c,d,e,f\}$ and $E=\{ab,ac,bc,cd,de,ef\}$. The complete adjacency list is

| Vertex | Neighbourhood | Degree |
| --- | --- | --- |
| $a$ | $\{b,c\}$ | $2$ |
| $b$ | $\{a,c\}$ | $2$ |
| $c$ | $\{a,b,d\}$ | $3$ |
| $d$ | $\{c,e\}$ | $2$ |
| $e$ | $\{d,f\}$ | $2$ |
| $f$ | $\{e\}$ | $1$ |

The order is six, size six, and degree sum twelve. Every edge appears at both of its endpoints in the adjacency list, so counting all entries and dividing by two recovers the size. The three vertices $a,b,c$ form a triangle: each pair is an edge. No location or edge length was needed to establish any of these facts.

If a drawing places the segment representing $cd$ across the segment representing $ab$, there is still no edge from $d$ to $a$ unless that edge is listed. The edge set, rather than a visual crossing, decides adjacency. The table is also a consistency check: in an undirected graph, $u$ must list $v$ exactly when $v$ lists $u$.

## Counting incidences proves the handshake identity

**Theorem 1.4 (Handshake lemma and parity).** Every finite simple graph satisfies
$$
\sum_{v\in V}d_G(v)=2|E|.
$$
Consequently the number of odd-degree vertices is even.

*Proof.* Count the set of incidences $I=\{(v,e):v\in V,\ e\in E,\ v\in e\}$. Grouping by vertex gives $|I|=\sum_v d_G(v)$. Grouping by edge gives two incidences for each edge, because its endpoints are distinct. Thus $|I|=2|E|$. Modulo two, each even degree contributes zero and each odd degree contributes one. Since the sum is even, the number of odd contributions is even. The argument includes the empty graph, whose two counts are both zero. ∎

**Corollary 1.5 (Degree bounds).** A finite simple graph has $m\le\binom n2$. If it is $r$-regular, meaning every degree is $r$, then $nr=2m$ is even. For $n\ge1$, its average degree is $2m/n$ and
$$
\delta(G)\le\frac{2m}{n}\le\Delta(G).
$$

*Proof.* There are only $\binom n2$ possible edges. In an $r$-regular graph the handshake sum is $nr$. For the last inequalities, every summand lies between the minimum and maximum degrees, so $n\delta(G)\le\sum_v d_G(v)\le n\Delta(G)$; divide by positive $n$. ∎

The corollary rules out a three-regular graph on seven vertices because its degree sum would be twenty-one. It does not say that every list of numbers with even sum is realisable. Incidence conditions impose more than parity, because choices of neighbours must fit together in a single simple edge set. A successful numerical check is a necessary-condition check unless a construction or a sufficiency theorem has also been given.

### Worked example 1.6 (An even degree sum need not be possible)

Could $(3,3,3,1)$ be the degree sequence of a simple graph on four vertices? All entries are between zero and three, and their sum is ten, so the handshake test alone does not reject it.

However, every degree-three vertex on four vertices is adjacent to all the others. The alleged degree-one vertex must therefore be adjacent to each of the three degree-three vertices. It has degree at least three, a contradiction. The sequence is not graphical.

By contrast, $(3,2,2,1)$ is realised on $\{a,b,c,d\}$ by $E=\{ab,ac,ad,bc\}$. Listing the neighbours verifies each degree. This construction proves possibility rather than merely passing a list of tests. Degree conditions can disprove a proposed graph quickly, but a graph that has not been constructed has not thereby been shown to exist.

## Subgraphs, complements, and familiar families

**Definition 1.7 (Subgraph operations).** A subgraph $H$ of $G$ has $V(H)\subseteq V(G)$ and $E(H)\subseteq E(G)$, with every retained edge having both endpoints in $V(H)$. It is spanning if $V(H)=V(G)$. The induced subgraph $G[S]$ on $S\subseteq V(G)$ retains exactly all edges whose endpoints both lie in $S$. Deleting a vertex removes it and every incident edge; deleting an edge retains every vertex.

A spanning subgraph need not be induced. On the full vertex set, the only induced subgraph is $G$ itself, whereas a spanning subgraph may keep any subset of edges. Conversely, an induced subgraph can have fewer vertices and need not span. These are separate requirements, not two names for the same construction.

For the graph in Worked example 1.3, the set $S=\{a,c,d,e\}$ induces the three edges $ac,cd,de$. Keeping only $ac$ and $de$ on that same set gives a subgraph that is not induced. Vertex selection and edge selection must both be specified. In particular, a vertex can be retained while becoming isolated after some of its edges are removed.

**Definition 1.8 (Complement and standard families).** The complement $\overline G$ has vertex set $V(G)$ and edge set $\binom{V(G)}2\setminus E(G)$. The complete graph $K_n$ contains every possible pair. The complete bipartite graph $K_{p,q}$ has two disjoint parts of sizes $p,q$, all pairs across the parts, and no pairs within a part.

For each vertex $v$ in a graph of order $n\ge1$,
$$
d_G(v)+d_{\overline G}(v)=n-1,
\qquad
|E(G)|+|E(\overline G)|=\binom n2.
$$
Indeed, every other vertex is a neighbour in exactly one of the two graphs, and every possible pair is an edge in exactly one. Complementing twice returns the original graph. These statements depend on simplicity: a multiplicity of three cannot be complemented by treating “absence” as its opposite in a two-choice scheme.

The path graph $P_n$ has vertices $1,\ldots,n$ and edges $i(i+1)$ for $1\le i<n$. The cycle graph $C_n$, defined for $n\ge3$, adds the edge $n1$. Their names describe particular graphs; the next chapter defines paths and cycles as routes inside an arbitrary graph. A star $K_{1,q}$ is a complete bipartite graph with one central vertex and $q$ leaves when $q\ge2$.

## Isomorphism preserves adjacency in both directions

**Definition 1.9 (Isomorphism).** An isomorphism from a simple graph $G$ to a simple graph $H$ is a bijection $\phi:V(G)\to V(H)$ such that for every pair of distinct vertices $u,v$,
$$
uv\in E(G)\quad\Longleftrightarrow\quad
\phi(u)\phi(v)\in E(H).
$$
Write $G\cong H$ when such a map exists. An automorphism is an isomorphism from a graph to itself.

The reverse implication excludes extra adjacency in the target. A bijection that sends every edge to an edge need not be an isomorphism if it sends some nonedge to an edge. For example, the identity map from $P_3$ into $K_3$ preserves the two path edges, but the target contains the additional edge $13$. The two graphs have different size and are not isomorphic.

Isomorphism is an equivalence relation. The identity map proves reflexivity. The inverse of an isomorphism is a bijection satisfying the reversed adjacency equivalence, proving symmetry. Composing two bijections with adjacency equivalences gives a bijection with the same property, proving transitivity. Thus an isomorphism class collects all relabellings of one abstract structure, while equality of graphs also retains their particular vertex and edge sets.

### Worked example 1.10 (Constructing a complete isomorphism certificate)

Let $G$ have vertex set $[5]$ and edge set $\{12,23,34,45,51,13\}$. Let $H$ have vertices $\{a,b,c,d,e\}$ and edges $\{ca,ae,eb,bd,dc,ce\}$. Define
$$
\phi(1)=c,\quad\phi(2)=a,\quad\phi(3)=e,\quad
\phi(4)=b,\quad\phi(5)=d.
$$

The images are distinct and exhaust the target vertices, so the map is bijective. Reading the six original edges in their displayed order gives exactly $ca,ae,eb,bd,dc,ce$, with no duplication. Therefore the image edge set equals $E(H)$.

Because a vertex bijection also bijects all unordered vertex pairs, equality of these edge sets ensures that nonedges map to nonedges as well. Thus $\phi$ is an isomorphism. This is a complete certificate. A picture with a similar shape would suggest the map, but checking the bijection and the edge-set equality proves it. A failed trial map, on the other hand, would only reject that map; it would not exclude every possible isomorphism.

**Theorem 1.11 (Elementary isomorphism invariants).** Isomorphic finite simple graphs have the same order, size, degree multiset, number of triangles, and component sizes. More locally, if $\phi:G\to H$ is an isomorphism, it maps $N_G(v)$ bijectively onto $N_H(\phi(v))$.

*Proof.* The vertex bijection gives equal order and induces an edge bijection, giving equal size. The adjacency equivalence says exactly that $u\in N_G(v)$ if and only if $\phi(u)\in N_H(\phi(v))$; restriction of $\phi$ is therefore the claimed neighbourhood bijection, proving equality of degrees.

A triangle is a three-element subset with all three pairs adjacent. Its image is such a subset in $H$, and the inverse map reverses this construction, proving equality of triangle counts. Finally, a sequence of adjacent vertices maps to a sequence of adjacent vertices, and the inverse map does the same. Hence two vertices can be joined by an edge sequence in one graph exactly when their images can in the other. The maximal sets connected in this way, its components, correspond bijectively with their vertex counts preserved. ∎

The degree multiset is often written as a nonincreasing degree sequence. It is invariant under relabelling, but it contains no information about which degrees occur next to which. Even the multiset of degrees of a vertex's neighbours can give a stronger restriction: an isomorphism must preserve that multiset at corresponding vertices. Such refinements can eliminate candidate maps. Agreement still needs to be distinguished from a full adjacency-preserving bijection.

### Worked example 1.12 (Matching degrees but different triangles)

Compare $K_{3,3}$ with the triangular prism graph on $[6]$ having edges
$$
12,23,31,\quad45,56,64,\quad14,25,36.
$$
Both graphs have six vertices, nine edges, and all degrees equal to three. In each graph one can move by edge sequences between all vertices, so even component sizes agree.

The prism contains the triangle on $\{1,2,3\}$ and another on $\{4,5,6\}$. The bipartite graph $K_{3,3}$ contains no triangle: among three vertices, two lie in the same part, and that pair is not adjacent. Triangle count is an isomorphism invariant, so the graphs are not isomorphic. The example disproves the claim that equal degree sequences determine a graph, even within connected regular graphs. It does not say degree information is useless; it says it is incomplete.

## Representations record a labelling

An adjacency list records $N_G(v)$ for every vertex, including empty neighbourhoods. An adjacency matrix for the ordered vertices $v_1,\ldots,v_n$ has entry $A_{ij}=1$ if $v_iv_j$ is an edge and zero otherwise. For a simple undirected graph it is symmetric, has zero diagonal, and its row sums are the degrees. Conversely, every symmetric zero-one matrix with zero diagonal defines one simple graph on its row labels.

Changing the order of the vertices changes the matrix by the same reordering of rows and columns. Reordering only rows generally destroys the meaning of the shared vertex indexing. More explicitly, if $\phi$ is an isomorphism, the adjacency entry for $u,v$ in the first graph equals the entry for $\phi(u),\phi(v)$ in the second. This entrywise statement captures relabelling without assuming any linear-algebra theorem.

A matrix and a list expose different information efficiently, but neither gives geometry. Their entries say whether adjacency occurs, not how far apart two points are drawn. Later, matrix multiplication will count walks after the relevant algebra has been established. The repeated intermediate vertices allowed in that calculation explain why walk counts should not be called simple-path counts.

## Multigraphs require edge identities

**Definition 1.13 (Undirected multigraph convention).** A finite undirected multigraph has a finite vertex set, a finite set of distinct edge identities, and for each edge an unordered pair of endpoints that may coincide. Different edges may have the same endpoints. An edge with coincident endpoints is a loop. Degree counts endpoint occurrences, so a loop contributes two.

A vertex sequence does not identify which parallel edge was used; a multigraph walk must therefore record edges as well as vertices. In a simple graph the edge between consecutive vertices is unique, making the shorter vertex-sequence notation sufficient. These different conventions cannot be swapped midway through an argument.

The handshake identity still holds with the stated loop convention: every edge has two endpoint occurrences, including two occurrences at one vertex for a loop. Counting distinct neighbours instead would not give degree. For instance, two parallel edges between $u,v$ and one loop at $u$ give $d(u)=4$, $d(v)=2$, and degree sum six for three edges, although $u$ has only one distinct other neighbour.

An isomorphism of multigraphs must preserve edge multiplicities and loops as well as the vertex incidence structure; it can be described using compatible vertex and edge bijections. A directed graph is another distinct model: its edges have ordered endpoints, and in-degree and out-degree replace the single undirected degree. No directed or multigraph exception should be imported into a theorem stated only for simple graphs.

## Labelled counts and symmetry

**Theorem 1.14 (Number of labelled simple graphs).** On a specified $n$-element vertex set there are $2^{\binom n2}$ simple graphs.

*Proof.* Each graph is a subset of the $\binom n2$ possible pairs. Choosing independently whether each pair belongs to the edge set gives a bijection with binary strings of that length. ∎

This counts labelled graphs, not isomorphism classes. Dividing by $n!$ is not generally valid, because different graphs have different numbers of relabellings that leave them unchanged. On three fixed vertices there are eight labelled graphs but four isomorphism types, distinguished by zero, one, two, or three edges. The classes have sizes one, three, three, and one, not a common size of six.

Automorphisms explain the repeated labellings. In a star with at least three vertices, its centre is fixed by every automorphism because its degree differs from each leaf's degree, while the leaves may be permuted arbitrarily. A graph with fewer symmetries has more distinct labelled descriptions of the same abstract object. Reliable counting must take the actual fibre sizes into account, just as in finite counting more generally.

## Exercises

### Exercise 1.1
<a id="graphs-degrees-isomorphism-ex-1"></a>

Let $V=[5]$ and $E=\{12,13,23,24,45\}$. Give the adjacency list, degree sequence, and the induced subgraph on $\{1,2,4,5\}$. Check the edge count from the degrees.

<details>
<summary>Hint 1</summary>

**Hint.** Record each undirected edge at both endpoints, and retain an induced edge exactly when both endpoints are chosen.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Sort the five degrees after constructing the list. A degree sum should count every original edge twice.

</details>
<details>
<summary>Solution</summary>

**Solution.** The neighbourhoods are $N(1)=\{2,3\}$, $N(2)=\{1,3,4\}$, $N(3)=\{1,2\}$, $N(4)=\{2,5\}$, and $N(5)=\{4\}$. The degree sequence is $(3,2,2,2,1)$, whose sum ten gives five edges. The chosen vertices induce edges $12,24,45$; every other original edge uses vertex three. Omitting $24$ while retaining all four chosen vertices would give a subgraph, but not the induced one.

</details>

### Exercise 1.2
<a id="graphs-degrees-isomorphism-ex-2"></a>

Prove that no three-regular simple graph has seven vertices. Construct a three-regular simple graph on eight vertices.

<details>
<summary>Hint 1</summary>

**Hint.** The handshake sum must be even. For the construction, begin with an eight-cycle and add one new neighbour to each vertex.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Pair opposite vertices of the cycle using four new edges, checking that none was already a cycle edge.

</details>
<details>
<summary>Solution</summary>

**Solution.** Seven degree-three vertices would give degree sum twenty-one, contradicting the handshake lemma. On $[8]$, take the cycle edges $12,23,34,45,56,67,78,81$ and add $15,26,37,48$. Every vertex lies on two cycle edges and exactly one added edge, so every degree is three. The added pairs are distinct nonedges of the cycle, so the graph remains simple. It has twelve edges, consistent with degree sum twenty-four.

</details>

### Exercise 1.3
<a id="graphs-degrees-isomorphism-ex-3"></a>

Can a finite undirected multigraph with loops have exactly one odd-degree vertex under this chapter's convention? Prove your answer, explicitly accounting for loops.

<details>
<summary>Hint 1</summary>

**Hint.** Count endpoint occurrences, rather than distinct neighbouring vertices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A loop contributes two to one vertex's degree, so each edge still contributes two to the total.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Every ordinary edge contributes one endpoint occurrence at each end, while each loop contributes two at its single vertex. Thus the total degree is twice the number of edge identities and is even. A sum with exactly one odd summand and all other summands even would be odd, a contradiction. Parallel edges do not affect the argument because their incidences are counted separately.

</details>

### Exercise 1.4
<a id="graphs-degrees-isomorphism-ex-4"></a>

For a simple graph on $n\ge1$ vertices, prove the complement degree formula and deduce that if $G\cong\overline G$, then $n\equiv0$ or $1\pmod4$.

<details>
<summary>Hint 1</summary>

**Hint.** Each other vertex belongs to exactly one of the two open neighbourhoods. Isomorphic complements have equal edge counts.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The common edge count would be $n(n-1)/4$, which must be an integer. Check the four residues of $n$ modulo four.

</details>
<details>
<summary>Solution</summary>

**Solution.** The $n-1$ other vertices partition into neighbours and nonneighbours of $v$, so $d_G(v)+d_{\overline G}(v)=n-1$. Also the two sizes sum to $\binom n2$. If $G\cong\overline G$, each size is half that number, namely $n(n-1)/4$. For $n\equiv2,3\pmod4$, the product $n(n-1)$ is congruent to two modulo four, impossible. Residues zero and one satisfy this necessary integrality condition. The argument proves necessity, not existence for every permitted order.

</details>

### Exercise 1.5
<a id="graphs-degrees-isomorphism-ex-5"></a>

Show that $C_6$ and the disjoint union of two copies of $K_3$ have the same degree sequence but are not isomorphic. Give a specific invariant distinguishing them.

<details>
<summary>Hint 1</summary>

**Hint.** Every vertex in either graph has two neighbours. Compare the three-element complete subgraphs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A six-cycle has no edge joining nonconsecutive cycle vertices; each three-cycle is itself a triangle.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both graphs have six vertices of degree two. The disjoint triangles contain two triangles. In $C_6$, the two neighbours of any vertex are not adjacent to one another, so no triangle contains that vertex; hence it contains no triangle at all. Triangle count is preserved by isomorphism, so the graphs are not isomorphic. Their component counts also differ, but matching degrees alone does not reveal either obstruction.

</details>

### Exercise 1.6
<a id="graphs-degrees-isomorphism-ex-6"></a>

Let $G$ have vertices $\{a,b,c,d\}$ and edges $ab,bc,cd$. Let $H$ have vertices $[4]$ and edges $13,34,24$. Construct and verify an isomorphism.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the endpoints of degree one and follow the chain through the two degree-two vertices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The target chain can be read as $1,3,4,2$. Match the original ordered chain to it.

</details>
<details>
<summary>Solution</summary>

**Solution.** Define $\phi(a)=1$, $\phi(b)=3$, $\phi(c)=4$, and $\phi(d)=2$. This is a bijection. Its edge images are $13,34,42$, exactly the three edges of $H$. Because a vertex bijection bijects unordered pairs and the entire edge sets correspond, it also preserves nonedges. Therefore it is an isomorphism. Reversing both chains would give another valid certificate, but uniqueness is not required.

</details>

### Exercise 1.7
<a id="graphs-degrees-isomorphism-ex-7"></a>

Explain why $(3,3,3,1)$ is not graphical, and give an edge set realising $(3,2,2,1)$. State which necessary tests both sequences satisfy.

<details>
<summary>Hint 1</summary>

**Hint.** On four vertices, a vertex of degree three is adjacent to every other vertex.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the realisation, begin with a vertex adjacent to all three others and then add a single edge between two of those others.

</details>
<details>
<summary>Solution</summary>

**Solution.** Three degree-three vertices would all be adjacent to the fourth, forcing its degree to be at least three instead of one. For the second sequence, edges $12,13,14,23$ give degrees three, two, two, and one. Both sequences have even degree sum and entries in the permitted range zero through three. Thus these elementary necessary conditions do not suffice for graphicality; the explicit contradiction and construction settle the two cases.

</details>

### Exercise 1.8
<a id="graphs-degrees-isomorphism-ex-8"></a>

For $G=K_{1,3}$ on a specified four-element vertex set, count its spanning subgraphs and its induced subgraphs on arbitrary vertex subsets, including the empty subset. How many induced subgraphs use the full vertex set?

<details>
<summary>Hint 1</summary>

**Hint.** A spanning subgraph chooses edges while retaining every vertex. An induced subgraph chooses vertices and then has no remaining edge choice.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The star has three edges and four vertices. Distinct retained vertex sets count as different subgraphs even if their resulting graphs are isomorphic.

</details>
<details>
<summary>Solution</summary>

**Solution.** Any subset of the three edges gives one spanning subgraph, so there are $2^3=8$. Each of the $2^4=16$ vertex subsets gives one induced subgraph. These are subgraphs with their specified vertex sets, not isomorphism classes. Only the full graph itself is induced on the full vertex set, because induction requires all three original edges between retained vertices.

</details>

### Exercise 1.9
<a id="graphs-degrees-isomorphism-ex-9"></a>

A bijection between two simple graphs sends every source edge to a target edge. Must it be an isomorphism? Give a counterexample, then prove that equal edge counts make the condition sufficient.

<details>
<summary>Hint 1</summary>

**Hint.** Look for a target that contains the whole image graph and one extra edge.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A vertex bijection gives an injective map on edges. Between finite edge sets of the same size, that map must be onto.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity bijection from $P_3$ to $K_3$ preserves the source edges but maps the nonedge $13$ to an edge, so it is not an isomorphism. If the two graphs have equal size, the induced edge map is injective into a target set of the same finite size, hence bijective. Every target edge is then the image of a source edge. Applying the inverse vertex bijection supplies the reverse adjacency implication, so the map is an isomorphism.

</details>

### Exercise 1.10
<a id="graphs-degrees-isomorphism-ex-10"></a>

Determine the number of automorphisms of $K_{1,4}$. Then count distinct graphs isomorphic to it on a fixed five-element vertex set, explaining why the answer is not $5!$.

<details>
<summary>Hint 1</summary>

**Hint.** The degree-four centre is uniquely determined by the structure, while the four leaves have interchangeable roles.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A labelled star is determined by its central vertex. Alternatively, inspect how many of the $5!$ assignments of names give each such star.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every automorphism fixes the centre and can permute the four leaves arbitrarily; each such permutation preserves adjacency. Thus there are $4!=24$ automorphisms. On the specified vertex set there are five distinct stars, one for each centre. In a labelling count, each of these is obtained $4!$ times by permuting the names assigned to the leaves, so $5!/4!=5$. Dividing by repeated descriptions is justified here by a constant fibre size, rather than by an assumed universal rule.

</details>

## Sources

This chapter rewrites and expands the graph-model and degree material in Euler's Discrete Mathematics chapter, [Graphs, Trees, and Connectivity](#/books/discrete-mathematics-proof-counting-structure/graphs-trees-connectivity), and the local Quarto seed “Graphs, walks, and degrees”, at modules/textbooks/combinatorics/chapters/11-graphs-walks-degrees.qmd. The mathematical statements are classical; this exposition, its worked examples, and its exercises are original. Earlier source files retain their own text and attribution.

Primary author-written parallel reading is Reinhard Diestel, [Graph Theory, “The Basics”](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf), especially its sections on graphs and degree, and Oscar Levin, [Discrete Mathematics: An Open Introduction, “Problems and Definitions”](https://discrete.openmathbooks.org/dmoi4/sec_gt-intro.html). They provide complementary treatments rather than the source of copied exercises. This chapter uses British spelling and licenses its original prose CC BY-SA 4.0.

## Summary

A graph records adjacency independently of its drawing. Fixing finite simple-graph conventions makes degree, induced subgraphs, complements, and standard families precise. Counting incidences proves the handshake lemma and its parity consequences, while explicit counterexamples show that degree tests do not determine existence or isomorphism.

An isomorphism is a vertex bijection preserving both edges and nonedges. Degrees, triangles, and components give necessary invariants, but a complete positive certificate checks the whole adjacency structure. Multigraphs require explicit edge identities and a loop convention; labelled counts must account for symmetry. In [Paths, Cycles, and Connectivity](paths-cycles-connectivity.md), we next study sequences of adjacent vertices and the structures that permit or obstruct travel through a graph.

