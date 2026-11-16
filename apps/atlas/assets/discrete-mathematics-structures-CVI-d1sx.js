var e=`---
id: course-discrete-mathematics-structures
title: "Discrete mathematics"
level: undergraduate
estimated_minutes: 720
license: CC BY-SA 4.0
---

# Discrete mathematics

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-discrete-mathematics-structures/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This twelve-module course turns the discrete shelf into a supervised sequence of proof, computation, and counterexample work. It is not a compressed copy of either book. The first-course seed supplies sustained exposition; the advanced reference supplies theorem architecture. The studio supplies pacing, checkpoints, retrieval, and a capstone portfolio.

## Audience, prerequisites, and repair routes

The standard route assumes arithmetic, elementary algebra, functions, and willingness to write proofs. No calculus is required. Before beginning, a learner should be able to distinguish implication from converse, list the subsets of a three-element set, and manipulate a finite sum.

Use these repair routes when needed:

- For quantified claims and proof choice, study [Proof Foundations](#/item/course-proof-foundations).
- For problem-solving habits and estimation, consult [The Working Mathematician's Toolkit](#/item/book-mathematical-toolkit).
- For a focused counting bridge, [Structural Counting](#/item/course-structural-counting) can accompany Modules 4–6.
- For finite impartial games, [Winning with Invariants](#/item/book-winning-with-invariants) supplies additional examples.

The studio avoids automata, formal verification, and general algorithm-correctness coverage, which belong to the mathematics-for-computer-science lane. Graphs here are studied as mathematical structures, not as logistics or network-operations models.

## Entry diagnostic

Attempt these before Module 1:

1. Negate “every vertex has a neighbor.”
2. List all subsets of $\\{a,b,c\\}$.
3. Prove or refute: if $A\\subseteq B$ and $B\\subseteq A$, then $A=B$.
4. Evaluate $\\sum_{k=1}^{5}k$.
5. Explain why a million successful computer checks cannot prove an
   unrestricted statement about all positive integers.

The answers are “some vertex has no neighbor”; the eight subsets obtained by
choosing each element in or out; the claim follows from extensionality; 15;
and a finite search leaves untested cases unless a proof supplies a finite
reduction. If Questions 1 or 3 fail, take the proof-foundations repair route.
If Questions 2 or 4 fail, review elementary sets and finite sums before the
counting modules.

## Course outcomes

By the end, a learner can:

1. model a finite question with sets, functions, relations, equivalence classes, orders, lattices, and closure;
2. select and complete direct, contrapositive, inductive, invariant, and extremal proofs;
3. count through bijection, disjoint decomposition, inclusion–exclusion, double counting, recurrence, and generating functions;
4. prove structural graph, tree, planarity, coloring, and matching claims with stated conventions;
5. distinguish experimental evidence from a theorem and emit exact small-instance certificates;
6. use expectation to prove existence under a finite probability model;
7. state representative Mantel, Ramsey, Hall, and matroid results with their hypotheses;
8. audit exchange, rank, bases, circuits, closure, dual bases, and greedy selection on a bounded system;
9. explain why graph-stable sets and matchings are not automatically matroids;
10. communicate counterexamples and claim boundaries as part of a proof, not as afterthoughts.

## Working rhythm

Each module is designed for about one week or one intensive session:

1. attempt the opening problem before reading;
2. keep a definition ledger and a hypothesis ledger;
3. complete the exact computation by hand on the smallest case;
4. write one polished proof and one counterexample;
5. take the checkpoint without notes;
6. revise the proof after comparing with the checkpoint commentary.

Programming is optional. When used, it must enumerate a stated finite range with exact integer or rational arithmetic and produce a checkable table. A program run is never accepted as proof of an unbounded claim.

The 720-minute workload includes this reading route:

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Relations and proof | 1–3 | [Sets, relations, and orders](#/item/book-discrete-mathematics-proof-counting-structure?chapter=sets-functions-relations-orders) and [proof and invariants](#/item/book-discrete-mathematics-proof-counting-structure?chapter=proof-induction-invariants) | Relation audit and polished induction |
| 2. Counting | 4–6 | [Bijection and inclusion–exclusion](#/item/book-discrete-mathematics-proof-counting-structure?chapter=counting-bijections-inclusion-exclusion) and [generating functions](#/item/book-discrete-mathematics-proof-counting-structure?chapter=recurrences-generating-functions) | Reversible count and recurrence derivation |
| 3. Graph structure | 7–8 | [Graphs and trees](#/item/book-discrete-mathematics-proof-counting-structure?chapter=graphs-trees-connectivity) and [planarity, coloring, and matching](#/item/book-discrete-mathematics-proof-counting-structure?chapter=planarity-coloring-matchings) | Certificate-based graph portfolio |
| 4. Existence and extremality | 9–11 | [Probabilistic and extremal methods](#/item/book-discrete-mathematics-proof-counting-structure?chapter=probabilistic-extremal-methods) and [finite games](#/item/book-discrete-mathematics-proof-counting-structure?chapter=games-strategy-capstone) | Expectation proof, sharp bound, and strategy invariant |
| 5. Exchange and synthesis | 12 and capstone | [Matroid bridge](#/item/book-discrete-mathematics-proof-counting-structure?chapter=matroid-independence-bridge) and [weighted greedy objectives](#/item/book-discrete-combinatorial-structures?chapter=weighted-greedy-objectives) | Matroid/non-matroid comparison and seven-lens capstone |

## Module 1 — Sets, functions, and relation audits

**Opening problem:** A collection of objects is grouped by “has the same remainder modulo four.” Why do the groups never partly overlap?

Develop membership proofs, images and inverse images, binary relations, and the reflexive/symmetric/antisymmetric/transitive audit. Prove that equivalence relations partition their ground set. Contrast direct prerequisite edges with their reflexive-transitive reachability closure.

**Checkpoint:** Give a relation that is reflexive and symmetric but not transitive, and state a three-element witness. A correct answer supplies the ground set and checks all three properties, not just the failure.

## Module 2 — Orders, lattices, and closure

Order a power set by inclusion and divisors by divisibility. Distinguish maximal from greatest. Compute meets and joins. Verify extensivity, monotonicity, and idempotence for reachability closure and for equivalence saturation.

**Checkpoint:** In divisors of $30$, compute meet and join of $6$ and $10$;
answer $\\gcd(6,10)=2$, $\\operatorname{lcm}(6,10)=30$, with the
divisibility-order justification.

## Module 3 — Proof architecture, induction, and invariants

Repair a false converse, negate nested quantifiers, prove a finite-sum identity, and classify a recursively defined family by structural induction. Pair a preserved gcd invariant with a decreasing measure to separate correctness from termination.

**Checkpoint:** Explain why checking a recurrence through one million indices remains evidence. Then supply the inductive propagation statement that would make the conclusion general.

## Module 4 — Bijections and elementary enumeration

Encode subsets as bit strings and paths as words. Derive binomial identities by distinguishing an element. Use the sum and product rules only after proving unique descriptions and disjoint cases.

**Checkpoint:** Count five-person committees with a distinguished chair from twelve people in two ways and equate $5C(12,5)$ with $12C(11,4)$.

## Module 5 — Inclusion–exclusion, pigeonholes, and double counting

Choose boxes to force a relevant collision. Correct overlapping divisibility cases. Count graph incidences to prove the handshake lemma and a parity corollary.

**Checkpoint:** Find the flaw in $|A\\cup B\\cup C|=|A|+|B|+|C|-\\sum |pairwise intersections|$. The triple intersection has net coefficient zero and must be added once.

## Module 6 — Recurrences and generating functions

Derive recurrences from first or last structure, including boundary values. Solve constant-coefficient examples by characteristic roots. Translate index shifts into an ordinary generating function and interpret products as size convolution.

**Checkpoint:** Starting from $a_0=a_1=1$, derive $A(x)=1/(1-x-x^{2})$ without dropping $a_0$ or $a_1$.

## Module 7 — Graphs, trees, and connectivity

Audit graph conventions. Prove the handshake lemma, leaf existence, $|E|=|V|-1$ for trees, unique paths, and spanning-tree existence. Use cuts to characterize bridges and odd-cycle absence to characterize bipartiteness.

**Checkpoint:** A connected graph has $n-1$ edges. Explain why a cycle would contradict the connected lower bound after one cycle-edge deletion.

## Module 8 — Planarity, coloring, and matching

Derive Euler’s formula and planar edge bounds, including the triangle-free hypothesis. Separate a greedy coloring upper bound from chromatic optimality. Improve a matching along an augmenting path and use Hall subsets as obstruction certificates.

**Checkpoint:** On path $a-b-c-d$, show $\\{bc\\}$ is maximal but not maximum by displaying augmenting path $a-b-c-d$ and matching $\\{ab,cd\\}$.

## Module 9 — Finite games and recursive strategy

Classify P- and N-positions in a subtraction game. State a decreasing move measure, prove a modular strategy by induction, and compare normal with misère terminal rules. Audit one symmetry strategy for fixed points.

**Checkpoint:** For remove-1-or-2 normal play, prove multiples of three are P using both directions of the recursive classification.

## Module 10 — Probabilistic existence

Write a defect count as a sum of indicators. Use linearity without assuming unnecessary independence. Apply the $<1$ first-moment principle and the at-least-average principle to different objectives.

**Checkpoint:** If expected bad configurations are $0.8$, explain why some outcome has none when the count is nonnegative and integer-valued. Markov’s bound gives $P(X\\ge 1)\\le 0.8$, so success probability $P(X=0)$ is at least $0.2$; do not claim it is exactly $0.2$.

## Module 11 — Extremal and Ramsey-style reasoning

Prove Mantel’s edge bound and provide the balanced complete bipartite construction. Prove $R(3,3)=6$ by a majority argument and a five-cycle coloring. State exactly what random-coloring expectation proves for general $k$.

**Checkpoint:** Label separately the upper bound, construction, equality conclusion, and any unproved stability claim.

## Module 12 — Matroid exchange and capstone launch

Audit uniform, partition, graphic, and path-stable independence systems. Compute bases, rank, circuits, closure, and dual bases on at most five elements. Run descending-weight greedy and exhaustive optimum under the same bounded-integer contract. Use the path-three witness to diagnose failure; prove exchange for a partition or graphic matroid.

**Checkpoint:** Explain the objective difference between a maximum-weight independent set, which skips negative elements, and a maximum-weight basis, which may be forced to include them.

## Worked studio I — From an equivalence relation to a quotient

On the integers, define $a\\sim b$ when $a-b$ is divisible by 3. The relation is reflexive because $a-a=0$ is divisible by 3; symmetric because divisibility of $a-b$ implies divisibility of $b-a=-(a-b)$; and transitive because

$$a-c=(a-b)+(b-c)$$

is divisible by 3 whenever both summands are. Therefore $\\sim$ is an equivalence relation.

Its classes are

$$[0]=\\{\\ldots,-6,-3,0,3,6,\\ldots\\},$$

and similarly $[1]$ and $[2]$. To prove classes cannot partly overlap, suppose $[a]\\cap[b]$ contains $x$. Then $a\\sim x$ and $x\\sim b$, so transitivity gives $a\\sim b$. Every element equivalent to $a$ is then equivalent to $b$ and conversely, so $[a]=[b]$. This proves the general partition theorem rather than merely drawing three rows.

The quotient set $\\mathbb Z/{\\sim}$ has three elements. Addition can be defined by $[a]+[b]=[a+b]$, but this requires a representative check. If $a\\sim a'$ and $b\\sim b'$, then

$$(a+b)-(a'+b')=(a-a')+(b-b')$$

is divisible by 3, so the class of the sum is independent of the chosen representatives. A quotient operation is never justified just because the notation looks familiar.

**Repair prompt.** “Is friends with” is usually symmetric but need not be transitive, so its overlapping social neighborhoods do not form equivalence classes. Give three named people witnessing the failure before using the word partition.

## Worked studio II — Three faces of a tree

For a finite simple graph $G$ with $n\\ge1$ vertices, any two of the following force the third:

1. $G$ is connected;
2. $G$ has no cycle;
3. $G$ has $n-1$ edges.

First suppose $G$ is connected and acyclic. A longest path has a leaf at each endpoint: an extra neighbor outside the path would extend it, while an extra neighbor on the path would create a cycle. Remove one leaf and its incident edge. The remaining graph is connected and acyclic on $n-1$ vertices. Induction gives $n-2$ remaining edges, hence $n-1$ originally.

Next suppose $G$ is connected with $n-1$ edges. If it contained a cycle, deleting one cycle edge would leave it connected with $n-2$ edges. But a connected $n$-vertex graph has at least $n-1$ edges: start from one vertex and observe that each new vertex entering a connected exploration requires an edge. Contradiction. Thus $G$ is acyclic.

Finally suppose $G$ is acyclic with $n-1$ edges. If it had $c\\ge2$ components, each component would be a tree by the first implication and would contribute one fewer edge than vertex. Summing would give $n-c\\le n-2$ edges, a contradiction. Hence $G$ is connected.

The finiteness and simplicity assumptions matter to the formulation. The proof also shows why the edge count alone is insufficient: a triangle plus an isolated vertex has four vertices and three edges but is neither connected nor acyclic.

## Worked studio III — Hall's condition as a search certificate

Let the left vertices be $L=\\{a,b,c\\}$ and the right vertices $R=\\{1,2,3\\}$. Suppose

$$N(a)=\\{1,2\\},\\qquad N(b)=\\{2\\},\\qquad N(c)=\\{2,3\\}.$$

The matching $\\{a1,b2,c3\\}$ covers every vertex of $L$. Hall's theorem predicts this because every subset $S\\subseteq L$ has at least $|S|$ available neighbors. The singleton cases are immediate; the pairs have neighbor sets $\\{1,2\\}$, $\\{1,2,3\\}$, and $\\{2,3\\}$; the full set has all three right vertices.

Now change $N(c)$ to $\\{2\\}$. The subset $\\{b,c\\}$ has only the neighbor $\\{2\\}$, so two left vertices compete for one right vertex. No matching can cover both. This is a complete impossibility certificate, not a failed attempt by one greedy algorithm.

Hall's theorem says the subset condition is also sufficient in a finite bipartite graph. A standard proof uses induction or augmenting paths. The worked audit here applies the theorem; it does not substitute a few checked subsets for its general proof. For a large graph, finding a deficient subset or proving none exists is itself an algorithmic problem.

## Worked studio IV — Exchange distinguishes matroids

Let the ground set be the three vertices of the path $a-b-c$, and call a set independent when it contains no adjacent vertices. The independent sets are

$$\\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{a,c\\}.$$

They are hereditary: every subset of an independent set remains independent. But matroid exchange fails. Take $I=\\{b\\}$ and $J=\\{a,c\\}$. Although $|I|<|J|$, neither $I\\cup\\{a\\}$ nor $I\\cup\\{c\\}$ is independent. Therefore stable sets of a graph do not generally form a matroid.

Contrast this with forests in a graph, viewed as sets of edges. If forests $I,J$ satisfy $|I|<|J|$, some edge of $J\\setminus I$ connects two different components of $I$; adding it cannot create a cycle. If every edge of $J$ lay within a component of $I$, each forest induced inside those components could have no more edges than $I$, contradicting $|J|>|I|$. This is the exchange mechanism for the graphic matroid.

The difference explains greedy behavior. Descending-weight greedy is guaranteed to find a maximum-weight basis in every matroid. On arbitrary graph stable sets it can fail: in the path above, give $b$ weight 3 and $a,c$ weight 2 each. Greedy takes $b$ for total 3 and blocks the better stable set $\\{a,c\\}$ of total 4.

## Worked studio V — Mantel's theorem and equality

Let a triangle-free graph have $n$ vertices and $m$ edges. For every edge $uv$, the endpoints have no common neighbor, so

$$d(u)+d(v)\\le n.$$

Sum this inequality over all edges. A vertex $v$ contributes $d(v)$ once for each incident edge, hence contributes $d(v)^2$ in total:

$$\\sum_v d(v)^2\\le mn.$$

By Cauchy–Schwarz and the handshake lemma,

$$\\sum_v d(v)^2\\ge\\frac{(\\sum_v d(v))^2}{n}
=\\frac{4m^2}{n}.$$

Combining gives $4m^2/n\\le mn$, and for $m>0$,

$$m\\le\\frac{n^2}{4}.$$

Because $m$ is an integer, $m\\le\\lfloor n^2/4\\rfloor$. The complete bipartite graph $K_{\\lfloor n/2\\rfloor,\\lceil n/2\\rceil}$ is triangle-free and has exactly $\\lfloor n^2/4\\rfloor$ edges, so the bound is sharp. The upper bound and the construction together establish the extremal number; neither alone would.

## Retrieval set with feedback

1. On $\\mathbb Z$, is the relation $a\\sim b$ iff $|a-b|\\le2$ an equivalence relation?
2. A forest has 11 vertices and 4 components. How many edges does it have?
3. Give a maximal matching that is not maximum on a four-vertex path.
4. In the path stable-set system above, identify the exact exchange axiom failure.
5. A triangle-free graph has 10 vertices. What edge bound follows from Mantel's theorem, and which graph attains it?
6. Why does checking Hall's condition only for singleton subsets fail?

**Answers.** (1) It is reflexive and symmetric but not transitive: $0\\sim2$ and $2\\sim4$, while $0\\not\\sim4$. (2) Each component is a tree, so the edge count is $11-4=7$. (3) On $a-b-c-d$, the matching $\\{bc\\}$ is maximal, while $\\{ab,cd\\}$ has size two. (4) For $I=\\{b\\}$ and $J=\\{a,c\\}$, $|I|<|J|$ but neither element of $J\\setminus I$ can be added to $I$. (5) At most $\\lfloor100/4\\rfloor=25$ edges, attained by $K_{5,5}$. (6) Several left vertices may share too few neighbors even though each individually has at least one; the modified example above fails at $\\{b,c\\}$.

If 1 failed, audit each relation property with its own quantifiers. If 2 failed, apply the tree edge theorem component by component. If 3 confused maximal with maximum, say whether a single additional edge can be added and whether a larger matching exists. If 6 failed, remember that Hall's obstruction is collective competition.

## Three cumulative assessments

### Assessment A — proof and counting portfolio

Submit a membership proof, a counterexample to a false relation claim, an induction, a bijection, and an inclusion–exclusion problem. Each solution must name hypotheses and include a one-sentence failure mode.

### Assessment B — structural graph portfolio

For one graph on six to eight vertices, provide degrees, components, a spanning forest, bridges, bipartition or odd-cycle certificate, and a coloring with its status as upper bound. If an augmenting path improves an initial matching, display it; for the final maximum claim, give a complete no-augmenting-path argument or an independent cardinality upper-bound certificate.

### Assessment C — independence portfolio

For one matroid and one non-matroid independence system, list all independent sets, bases, circuits, ranks, and the first exchange witness if one exists. Compare greedy and exact optimum for two weight assignments, including a negative-weight boundary.

<!-- euler-discrete-cumulative-assignment:start -->
### DS-CUM-P001 — Assigned mixed portfolio: a path through three methods

This fixed assignment samples Assessments A, B, and C together. It does not replace the three open portfolios above or complete the seven-lens capstone below. Attempt all parts before reading the reference. Keep the definitions, first argument, any help used, and a corrected argument. The references and criteria support self-review; they do not grade a proof or establish unaided mastery.

Preparation is the studio's sets, counting, graph, and exchange work. Revisit [DM-CH16-P001, P002, and P004](#/item/book-discrete-mathematics-proof-counting-structure?chapter=cumulative-projects-solutions) for cardinality quotients, no-consecutive selections, and greedy repair. These are source methods being combined, not claims that their already displayed examples are unseen. [Solved graph exercises DM-SP1-E079–E090](#/item/book-discrete-mathematics-proof-counting-structure?section=back%3Aexercise-program-part-i) provide extra practice. The [finite matching proof clinic](/math_books/combinatorics/_output/chapters/14-matching-flows.html#sec-comb-berge-proof) gives the general augmenting-path argument.

**Object contract.** All graphs here are finite, undirected and simple. Vertices are labelled, so changing a label changes a recorded subset. In lists, a word such as \\(ac\\) abbreviates the vertex set \\(\\{a,c\\}\\), while \\(ab\\) in the edge column denotes the unordered edge \\(\\{a,b\\}\\). A stable set contains neither endpoint-pair of any edge.

| Assigned case | Vertices, in order | Edges | Vertex weights, in that order | Initial matching |
| --- | --- | --- | --- | --- |
| DS-CUM-P001 | a b c d e f | ab bc cd de ef | 4 7 4 2 5 2 | bc de |

The comparison system is a partition matroid on the same vertices with capacity one in each block:

**Partition blocks:** ab; cd; ef.

Here the block \\(ab\\) means the two-element set \\(\\{a,b\\}\\); a feasible partition selection takes at most one vertex from each displayed block. Its feasible sets differ from the graph's stable sets. Run greedy in descending weight order, breaking ties alphabetically. For a maximum-weight independent selection, skip negative weights and allow the empty set. A basis of the partition matroid must still select one vertex from every block.

1. **A — count and prove.** Encode a stable set by its six-bit membership word. Give the inverse encoding and list every stable set, grouped by cardinality. Let \\(a_n\\) count stable sets of an \\(n\\)-vertex path, including the empty path. Derive its recurrence and both starting values, then prove \\(a_n=F_{n+2}\\), where \\(F_0=0,F_1=1\\). On this assignment's stable sets, define \\(S\\sim T\\) when \\(|S|=|T|\\). Prove this is an equivalence relation and that ordering its classes by cardinality is well defined. Count ordered related pairs. Finally count stable sets containing \\(a\\) or \\(f\\) by inclusion–exclusion, showing the intersection separately.
2. **B — certify graph structure.** Give degrees, components, a spanning tree, every bridge, a bipartition and the chromatic number with both bounds. Improve the stated matching along one augmenting path; list the updated matching. Give a cardinality upper bound proving optimality. Using that final matching, prove Hall's inequality for every subset of the left part, rather than checking only individual vertices.
3. **C — distinguish feasible families.** Prove stable-set heredity, find a failed exchange pair, and refute “every maximal stable set has maximum cardinality.” For the partition system, describe every independent set without omission, list its bases and circuits, give a rank formula for arbitrary \\(S\\), and prove exchange. For each system, run greedy with the assigned weights and prove the exact optimum. Explain why comparing their two numerical optima does not compare algorithms on one common feasible family.
4. **C — change the objective.** Replace the weights, in vertex order, by \\((-1,-2,-3,-4,-5,-6)\\). Find a maximum-weight independent selection and a maximum-weight partition basis. State why these are different optimization questions.

#### DS-CUM-P001 — Complete reference and certificates

The membership map sends \\(S\\) to the word whose \\(i\\)-th bit is one exactly when the \\(i\\)-th vertex belongs to \\(S\\). Its inverse takes the positions of the ones. Adjacent ones are forbidden exactly when the corresponding path edge has both ends selected, so both maps preserve the required object and are inverse.

The complete stable-set ledger is:

| Size | Stable sets for DS-CUM-P001 |
| --- | --- |
| 0 | \\(\\varnothing\\) |
| 1 | \\(a,b,c,d,e,f\\) |
| 2 | \\(ac,ad,ae,af,bd,be,bf,ce,cf,df\\) |
| 3 | \\(ace,acf,adf,bdf\\) |

There are no larger sets: the three disjoint edges \\(ab,cd,ef\\) allow at most one chosen endpoint each. The listed triples show that the bound three is attained. This proves completeness of the cardinality boundary; the membership-word split below supplies a second check on the total.

For \\(n\\ge2\\), sets omitting the last vertex correspond bijectively to stable sets on the first \\(n-1\\) vertices. Sets containing it must omit its neighbor; deleting the last vertex then corresponds to stable sets on the first \\(n-2\\) vertices. The two cases are disjoint, exhaustive, and reversible. Thus

\\[
a_0=1,\\qquad a_1=2,\\qquad a_n=a_{n-1}+a_{n-2}\\quad(n\\ge2).
\\]

The empty path has one selection, its empty set. Since \\(F_2=1\\), \\(F_3=2\\), and the Fibonacci recurrence has the same two predecessors, induction proves \\(a_n=F_{n+2}\\) for every \\(n\\ge0\\): after the two bases, equality for the two smaller indices gives equality at the next. The values through \\(n=6\\) are \\(1,2,3,5,8,13,21\\).

Equality of cardinalities is reflexive, symmetric and transitive because equality of integers has those properties. Replacing representatives preserves cardinality, so class order is well defined and inherits total order from \\(0,1,2,3\\). The class sizes are \\(1,6,10,4\\); an ordered related pair chooses both entries from one class, giving

\\[
1^2+6^2+10^2+4^2=153.
\\]

Containing \\(a\\) forces \\(b\\) out and leaves a four-vertex path, giving \\(a_4=8\\) choices. Containing \\(f\\) similarly gives eight. Containing both forces \\(b,e\\) out; the remaining adjacent pair \\(c,d\\) permits only \\(\\varnothing,c,d\\). The three resulting sets are \\(af,acf,adf\\). Inclusion–exclusion therefore gives \\(8+8-3=13\\) selections containing \\(a\\) or \\(f\\). The eight selecting neither are the stable sets of path \\(b-c-d-e\\); \\(13+8=21\\) checks the total.

The degree list is \\((1,2,2,2,2,1)\\). The graph is connected and is itself a spanning tree. Every edge is a bridge: deleting an edge between consecutive vertices separates the labels before that cut from those after it. The parts \\(L=\\{a,c,e\\}\\), \\(R=\\{b,d,f\\}\\) give a two-coloring. At least two colors are needed because an edge has distinct-colored endpoints, hence \\(\\chi=2\\).

Starting with \\(M=\\{bc,de\\}\\), the path \\(a-b-c-d-e-f\\) alternates outside/inside/outside/inside/outside \\(M\\) and has unmatched endpoints. Its symmetric-difference update is \\(\\{ab,cd,ef\\}\\), of size three. No matching on six vertices exceeds three: each edge consumes two distinct vertices. Thus the updated matching is maximum. It also gives the map \\(a\\mapsto b,c\\mapsto d,e\\mapsto f\\). For arbitrary \\(S\\subseteq L\\), the images of its members are distinct and all belong to \\(N(S)\\). This injection proves \\(|N(S)|\\ge|S|\\) for every subset, including the empty one. It is a certificate for this graph, not a proof of Hall's sufficiency theorem in general.

Every subset of a stable set remains stable. But \\(I=\\{b\\}\\), \\(J=\\{a,c\\}\\) fail exchange: \\(|I|<|J|\\), and neither new vertex can join \\(I\\). The set \\(be\\) is maximal because \\(b\\) blocks \\(a,c\\) and \\(e\\) blocks \\(d,f\\), yet it has size two while \\(ace\\) has size three.

Every partition-independent set is exactly \\(X_1\\cup X_2\\cup X_3\\), with

\\[
X_1\\in\\{\\varnothing,\\{a\\},\\{b\\}\\},\\quad
X_2\\in\\{\\varnothing,\\{c\\},\\{d\\}\\},\\quad
X_3\\in\\{\\varnothing,\\{e\\},\\{f\\}\\}.
\\]

These \\(3^3=27\\) descriptions are distinct because the blocks are disjoint. The bases are \\(ace,acf,ade,adf,bce,bcf,bde,bdf\\). The circuits, meaning minimal dependent sets, are exactly \\(ab,cd,ef\\): dependence means selecting both elements of some block, and that pair is already dependent. For arbitrary \\(S\\), its rank is

\\[
r(S)=\\sum_{i=1}^{3}\\min(1,|S\\cap B_i|).
\\]

An independent subset uses at most one element from each occupied block; choosing one from every occupied block attains that bound. For exchange, independent \\(I,J\\) with \\(|I|<|J|\\) have a block occupied by \\(J\\) and not \\(I\\), since their sizes count occupied blocks. Add its element of \\(J\\) to \\(I\\). This verifies exchange for all pairs, not only a successful greedy run.

On graph stable sets, greedy takes \\(b\\), then \\(e\\), and rejects every other vertex, giving weight \\(7+5=12\\). The four triples in the ledger weigh \\(13,10,8,11\\), respectively. Every pair weighs at most the sum of the two largest weights, \\(7+5=12\\); singletons and the empty set cannot exceed this. Thus \\(ace\\), of weight 13, is the unique optimum and greedy fails. On the partition system, greedy takes \\(b,e,c\\), giving 16. Every selection is bounded above by the sum of the best weights in the three blocks, \\(7+4+5=16\\), attained by \\(bce\\). That set is not graph-stable because \\(b,c\\) are adjacent. The different feasible families license different optima.

With all six replacement weights negative, the empty independent selection has weight zero and every nonempty selection has negative weight in either system. A partition basis must choose three vertices; its best choices are \\(a,c,e\\), giving \\(-1-3-5=-9\\). Skipping all negative entries solves optional independent selection, not the prescribed-basis problem.

### DS-CUM-P002 — Assigned changed portfolio: close the path

At another sitting, begin from the changed data below without copying the earlier ledger. Record the actual date and any previous answer exposure; no elapsed delay or retained competence is inferred by this suggestion. Add edge \\(af\\) and keep the same partition comparison.

| Assigned case | Vertices, in order | Edges | Vertex weights, in that order | Initial matching |
| --- | --- | --- | --- | --- |
| DS-CUM-P002 | a b c d e f | ab bc cd de ef af | 5 4 3 2 1 -2 | af cd |

1. Rebuild the stable-set ledger. Derive the number deleted from the earlier ledger by naming all sets that become forbidden. Recompute the cardinality-class sizes, related ordered pairs, and inclusion–exclusion count for selections containing \\(a\\) or \\(f\\). For general cycle size \\(n\\ge3\\), prove \\(c_n=a_{n-1}+a_{n-3}\\) by a reversible split at one vertex.
2. Give the changed degrees, spanning tree, bridges, bipartition and chromatic-number certificates. Find an augmenting path for the new initial matching and certify the updated matching is maximum. Give a Hall injection for every subset of \\(L=\\{a,c,e\\}\\).
3. Run greedy and prove the exact optimum in both feasible families with the new weights. Does its success now prove that graph-stable sets satisfy matroid exchange? Give a decisive argument. State whether the earlier all-negative conclusion changes when edge \\(af\\) is added.

#### DS-CUM-P002 — Complete changed reference

Exactly the path-stable sets containing both \\(a\\) and \\(f\\) are deleted: \\(af,acf,adf\\). The complete remaining ledger is:

| Size | Stable sets for DS-CUM-P002 |
| --- | --- |
| 0 | \\(\\varnothing\\) |
| 1 | \\(a,b,c,d,e,f\\) |
| 2 | \\(ac,ad,ae,bd,be,bf,ce,cf,df\\) |
| 3 | \\(ace,bdf\\) |

The class sizes are \\(1,6,9,2\\), so the total is 18 and the ordered related-pair count is \\(1^2+6^2+9^2+2^2=122\\). For a cycle on \\(n\\ge3\\) vertices, omitting a chosen vertex leaves a path on \\(n-1\\) vertices. Including it excludes both neighbors and leaves a path on \\(n-3\\) vertices; removing the chosen vertex from the selection gives a reversible correspondence. Hence \\(c_n=a_{n-1}+a_{n-3}\\). At \\(n=3\\), the second path is empty and has one selection, not zero. At \\(n=6\\), \\(c_6=13+5=18\\).

Containing \\(a\\) now excludes \\(b,f\\) and leaves path \\(c-d-e\\), giving five choices; containing \\(f\\) similarly gives five. Their intersection is empty because \\(af\\) is an edge. Inclusion–exclusion gives \\(5+5-0=10\\). Selecting neither still gives eight choices on \\(b-c-d-e\\), confirming \\(10+8=18\\).

Every degree is two. The cycle is connected, deleting \\(af\\) gives the earlier path as a spanning tree, and there are no bridges: deleting any one cycle edge leaves a path through all vertices. The same parts \\(L,R\\) give a two-coloring, and an edge still forces the lower bound two. For \\(M=\\{af,cd\\}\\), the path \\(b-a-f-e\\) is outside/inside/outside \\(M\\) and its endpoints are unmatched. Flipping it gives \\(\\{ab,cd,ef\\}\\), a maximum matching of size three by the same six-vertex upper bound. Its matching partners again inject every \\(S\\subseteq L\\) into \\(N(S)\\).

With the changed weights, negative-skipping graph greedy takes \\(a,c,e\\), of weight 9. The only stable triples are \\(ace\\) of weight 9 and \\(bdf\\) of weight 4. The largest pair weight is 8, attained by \\(ac\\): a pair containing \\(a\\) cannot contain \\(b\\) or \\(f\\) and is at most \\(5+3\\); a pair without \\(a\\) is at most \\(4+3=7\\). Singletons weigh at most 5, and the empty set weighs zero. Thus \\(ace\\) is the unique optimum. Partition greedy also takes \\(ace\\); block maxima \\(5,3,1\\) prove its weight 9 is optimal for that different feasible family.

Graph greedy has succeeded on these weights, but the exchange failure \\(I=\\{b\\}\\), \\(J=\\{a,c\\}\\) survives unchanged. One success does not establish the universal greedy guarantee. With the all-negative weights from DS-CUM-P001, adding an edge cannot make any nonempty sum positive: the empty set remains optimal in either independent-selection problem. The partition system has not changed, so its best prescribed basis still has weight \\(-9\\).

### Descriptive rubric and repair for the assigned pair

Apply the following criteria separately to DS-CUM-P001 and DS-CUM-P002. Mark each **justified**, **incomplete**, or **not yet justified**, quoting a line of the attempt. A correct alternative proof or certificate is welcome. These descriptions do not change the original capstone weights or create a numerical pass threshold.

| Criterion | Evidence needed | Repair when the evidence fails |
| --- | --- | --- |
| Object and bijection | Labels, graph edges, feasible family, units of counting, and two inverse membership maps are explicit. | Decode one word and re-encode it; identify exactly which adjacency rule is violated by a rejected word. |
| General proof and finite boundary | The path split is disjoint, exhaustive and reversible; both bases and induction are supplied. The cycle split retains its empty-path case. | Reconstruct sizes zero, one and the three-cycle before using the recurrence; a finite table alone is not the general proof. |
| Quotients and inclusion–exclusion | Equivalence properties and representative independence are proved; ordered pairs use squared class sizes; the intersection is counted. | Keep subset, class and ordered pair in separate columns. Explain why selecting both end vertices is allowed on the path and forbidden on the cycle. |
| Graph and matching certificate | A spanning tree is distinguished from the whole graph; each bridge claim is justified; coloring has both bounds; augmentation and a maximum upper bound are supplied. | Check edge membership along the entire alternating path and distinctness of endpoints. A large matching or a greedy coloring alone does not prove optimality. |
| Universal and negative evidence | A concrete exchange failure refutes the matroid claim, whereas the partition proof covers arbitrary independent pairs. Hall's inequality uses an injection for arbitrary subsets. | Distinguish one counterexample, one constructed witness and a proof for every permitted input; singleton Hall checks cannot replace the subset argument. |
| Optimization and changed objective | A feasible greedy trace and complete upper bound or ledger establish each optimum; independent selection is separated from prescribed bases. | Re-evaluate the same subset under the stated family and weights. Negative entries may be skipped only when the objective permits fewer selections. |

After comparison, correct the first unsupported step and all conclusions depending on it. If counting failed, return to DM-CH16-P001–P002; if exchange or objective choice failed, return to P004. For a missing matching proof, revisit the linked proof clinic, then reconstruct the new augmentation without its displayed model. Keep earlier help exposure explicit when describing a later attempt as reconstruction.
<!-- euler-discrete-cumulative-assignment:end -->

## Capstone — one structure under seven lenses

Choose a bounded finite structure and submit:

- a typed set/relation specification;
- one proof using induction, invariant, or extremal choice;
- one nontrivial count with a reversible method;
- one graph or incidence representation;
- one extremal construction and upper bound;
- one probability or game interpretation with claim boundaries;
- one exact enumeration table and a statement of tested range;
- one polished counterexample to a tempting generalization.

The capstone is evaluated on mathematical contracts: 25% definitions and hypotheses, 25% proof correctness, 15% examples and counterexamples, 15% exact computation and reproducibility, 10% interpretation boundaries, and 10% exposition/accessibility. A visually attractive table cannot compensate for a missing proof, and a correct proof cannot excuse an unlabeled inaccessible visual.

## Exit routes

After the studio, a learner can continue toward advanced combinatorics and matroids, probability and random structures, algebraic graph theory, or theoretical computing. The course has intentionally not covered automata, formal languages, verification systems, queueing, logistics, or financial models. Those need their own definitions and are not disguised as applications of this vertical.

## Capstone and onward routes

For the capstone, run a complete [structure audit](#/item/recipe-discrete-structure-audit) on a problem of your choice and verify your independence and extremal reasoning in the [Independence and Extremal Structures Explorer](#/labs?lab=visual-lab-discrete-independence-extremal).

<!-- euler-discrete-studio-closure:start -->

## Required assignment sequence for all twelve modules

This selection makes the existing twelve-module studio concrete; it does not
replace it with DS-CUM-P001/P002. Complete the stated readings and the assigned
work below, then the joined synthesis sequence. An A/B/R label identifies one
assignment group, not a grade: A is the primary attempt, B changes the demand
or assumptions, and R is a later return. Where a group names two exercises,
both are required distinct tasks. Reuse an earlier artifact when it is cited
as preparation; do not submit a duplicate as new work.

All selected questions and worked solutions are public. Attempt before
opening a solution, then keep the first draft, help used, feedback comparison
and revision. Choose the later return at another sitting and record its
actual date and previous exposure; this source does not infer retention,
independence, mastery or qualified marking from a study checkmark. The earlier
720-minute figure is an planning estimate, not measured time
for this portfolio, revision, later returns or human feedback.

The abbreviations CH01–CH08, CH14 and CH16 refer to the named chapters of
[Discrete Mathematics: Proof, Counting, and Structure](#/item/book-discrete-mathematics-proof-counting-structure).
SP1 denotes its [solved exercise program, Part I](#/item/book-discrete-mathematics-proof-counting-structure?section=back%3Aexercise-program-part-i).
Exercise identifiers below are the exact visible native task labels. Each
linked chapter includes its corresponding worked solution; read that model
only after the attempt. The final column states the hinge to check and the
source to revisit.

| Module and assignment labels | Primary A | Changed B | Later return R | Feedback hinge and repair |
| --- | --- | --- | --- | --- |
| 1: DS-M01-A/B/R | CH01 DM-CH01-E001, inverse-image set operations | CH01 DM-CH01-E002, relation classification | CH16 DM-CH16-P001, cardinality quotient of binary strings | Check both directions of membership or representative independence; revisit CH01 §§3–5 |
| 2: DS-M02-A/B/R | CH01 DM-CH01-E003, maximal versus maximum | This course's Module 2 checkpoint: meet and join of 6 and 10 among divisors of 30 | CH01 DM-CH01-E004, equivalence saturation closure | A maximal element need not dominate all others; for closure prove all three properties, not just extensivity |
| 3: DS-M03-A/B/R | CH02 DM-CH02-E001 and SP1 DM-SP1-E019, ordinary induction and recursive-list structural induction | CH02 DM-CH02-E002 and SP1 DM-SP1-E029, invariant audit and structural induction on formulas | CH02 DM-CH02-E003 and §5's “Worked tree identity”, Euclid correctness and full-binary-tree constructors | Treat every constructor and its hypotheses; separate invariant, decreasing measure and postcondition |
| 4: DS-M04-A/B/R | CH03 DM-CH03-E001, complement bijection | This course's Module 4 checkpoint: a five-person committee and distinguished chair from twelve people | CH03 §2 “Lattice paths and words”, specialized to paths from (0,0) to (3,2) | Name the object and both inverse encodings; local check below fixes the two specializations |
| 5: DS-M05-A/B/R | CH03 DM-CH03-E002, symmetric-difference inclusion–exclusion | CH03 DM-CH03-E004, the three-set audit | CH03 DM-CH03-E003 and CH05 DM-CH05-E004, pigeonhole degrees and handshake count | Audit multiplicities and impossible degree values; adding overlapping cases is not the sum rule |
| 6: DS-M06-A/B/R | CH04 DM-CH04-E001 and DM-CH04-E002, repeated-root solution and ternary-word recurrence | CH04 DM-CH04-E003, generating-function boundary | CH04 DM-CH04-E004 and DM-CH04-E005, coefficient convolution and induction versus experiment | Keep empty/one-letter bases; a coefficient counts a specified nonnegative integer decomposition |
| 7: DS-M07-A/B/R | CH05 DM-CH05-E001, forest components | CH05 DM-CH05-E002, bridge characterization | CH05 DM-CH05-E003, degree forcing | State finite simple graph conventions and prove both implications; revisit Worked studio II for the tree equivalences |
| 8: DS-M08-A/B/R | CH06 DM-CH06-E001, planar degree on a nonempty finite simple graph | CH06 DM-CH06-E003, augmenting matching | CH06 DM-CH06-E002 and DM-CH06-E004, coloring upper bound and Hall obstruction | Distinguish maximal/maximum and upper/lower certificates; revisit CH06 §§2–4 and §§7–9 |
| 9: DS-M09-A/B/R | CH08 DM-CH08-E001, remove 1 or 3 | CH08 DM-CH08-E002 and §8's remove-1-or-2 misère change, with the local proof below | CH16 DM-CH16-P005, remove 1,3,4 and the proved period-seven classification | Give legal moves for every required state and a decreasing measure; one play or a finite pattern alone is not a strategy proof |
| 10: DS-M10-A/B/R | CH07 DM-CH07-E002, first-moment coloring | CH07 DM-CH07-E003, linearity without indicator independence | This course's Module 10 checkpoint: a nonnegative integer defect count with expectation 0.8 | Show probability of success is at least 0.2, not necessarily exactly 0.2; revisit CH07 §§5–6 |
| 11: DS-M11-A/B/R | CH07 DM-CH07-E001, Mantel on nine vertices | CH07 DM-CH07-E004, the scope of a Ramsey expectation bound | CH07 §4 “The exact small case R(3,3)=6”: reconstruct both the six-vertex upper proof and five-cycle lower coloring | Keep construction, universal upper bound and equality separate; a failed expectation test at seven is not an upper bound |
| 12: DS-M12-A/B/R | CH14 DM-CH14-E003 and DM-CH14-E004, uniform exchange and partition objectives | CH14 DM-CH14-E001, DM-CH14-E007, DM-CH14-E008 and DM-CH14-E009, failed exchange, graphic greedy, zero weights and false proof | The bounded closure/dual reading and its three solved exercises assigned next | Validate the matroid first; do not transfer matroid closure or duality to path stable sets |

Use these exact chapter destinations for the roster:
[CH01](#/item/book-discrete-mathematics-proof-counting-structure?chapter=sets-functions-relations-orders),
[CH02](#/item/book-discrete-mathematics-proof-counting-structure?chapter=proof-induction-invariants),
[CH03](#/item/book-discrete-mathematics-proof-counting-structure?chapter=counting-bijections-inclusion-exclusion),
[CH04](#/item/book-discrete-mathematics-proof-counting-structure?chapter=recurrences-generating-functions),
[CH05](#/item/book-discrete-mathematics-proof-counting-structure?chapter=graphs-trees-connectivity),
[CH06](#/item/book-discrete-mathematics-proof-counting-structure?chapter=planarity-coloring-matchings),
[CH07](#/item/book-discrete-mathematics-proof-counting-structure?chapter=probabilistic-extremal-methods),
[CH08](#/item/book-discrete-mathematics-proof-counting-structure?chapter=games-strategy-capstone),
[CH14](#/item/book-discrete-mathematics-proof-counting-structure?chapter=matroid-independence-bridge),
and [CH16](#/item/book-discrete-mathematics-proof-counting-structure?chapter=cumulative-projects-solutions).

### Local keys for the assigned specializations

**DS-M02-B.** In the divisibility order, a lower bound of 6 and 10 divides
both, hence divides their greatest common divisor 2; 2 itself divides both.
An upper bound in the divisor set must be divisible by their least common
multiple 30, so only 30 qualifies. This proves meet 2 and join 30 in this
poset, rather than treating numerical minimum and maximum as lattice operations.

**DS-M04-B.** Count the same pair (committee, chosen chair). Choosing the
five-person committee then its chair gives $5\\binom{12}{5}=3960$.
Choosing the chair first then four members from the other eleven gives
$12\\binom{11}{4}=3960$. Taking or restoring the distinguished member makes
the two descriptions inverse.

**DS-M04-R.** Encode a path by its three east steps E and two north steps N;
reading the word reconstructs the path. Choosing the three E positions among
five gives $\\binom53=10$. The complete words are EEENN, EENEN, EENNE, ENEEN,
ENENE, ENNEE, NEEEN, NEENE, NENEE and NNEEE. Every prefix gives a valid
monotone partial path, so there is no extra admissibility restriction.

**DS-M08-A boundary.** The adopted planar-degree claim requires a nonempty
finite simple planar graph. The empty graph has no vertex at all, so it cannot
supply a degree-at-most-five witness. With a nonempty graph, choose a component;
the linked solution treats components of orders one and two directly and uses
$2m/n<6$ for a planar component of order at least three.

**DS-M09-B.** For misère remove-1-or-2, a player who has no move wins;
therefore terminal 0 is N, and 1 is P because its only move loses.
For positive heaps, P holds exactly at $n\\equiv1\\pmod3$. Every legal move
from that class reaches residue 0 or 2, including terminal 0. From residue
2 remove 1 to reach residue 1; from a positive residue-0 heap remove 2
(which is legal since it is at least 3). These directions, terminal 0,
and induction on the decreasing heap size prove the classification for all
heaps. Contrast normal play's terminal P and residue-0 P-class. Do not
reuse the old terminal value after changing the winner rule.

**DS-M10-R.** For the assigned nonnegative integer count $X$,
$1_{\\{X\\ge1\\}}\\le X$. Taking expectations gives
$P(X\\ge1)\\le0.8$, hence $P(X=0)\\ge0.2$. The data do not determine the exact
success probability: a count equal to 2 with probability 0.4 and zero
otherwise also has mean 0.8 but succeeds with probability 0.6.

### DS-M12-R — Required bounded closure and dual preparation

The seed bridge intentionally stops before deeper closure and duality. To
meet this course's retained outcome, first recall finite independence,
augmentation, bases and rank from CH14; then make the following exact
reading and exercise connection, not a whole-graduate-book completion claim.

1. In [Rank, Submodularity, Closure, and Flats](#/item/book-discrete-combinatorial-structures?chapter=rank-submodularity-flats),
   read §1's rank definition, §2's submodularity proof and diminishing-returns
   consequence, and §4's closure definition and complete theorem proof. Do **Exercise 2: flats of U(2,4)** and **Exercise 3: closure exchange**,
   then compare their worked solutions.
2. In [Duality, Sums, and Matroid Connectivity](#/item/book-discrete-combinatorial-structures?chapter=duality-sums-connectivity),
   read the complementary-basis convention and §1's dual-rank identity with
   proof. Do **Exercise 1: derive total dual rank**, then compare its solution.
   Its eight-element numerical rank question is symbolic accounting, not an
   instruction to enlarge Module 12's at-most-five-element enumeration audit.

For the first answer, the flats of $U(2,4)$ are the empty set, four singletons
and the whole set; the four singletons are its hyperplanes. In Exercise 3,
use closure exchange to get each generator into the other's closure, then
monotonicity and idempotence to prove both inclusions. For the dual exercise,
the answers are total dual rank $8-3=5$ and subset rank $5-3+2=4$.
These checks locate a missing definition or reversed inclusion; the linked
proofs supply the full general argument. The selected finite partition
model below checks the same concepts directly.

## Required joined capstone — DS-SYN sequence

The required selected synthesis is DS-SYN-1, DS-SYN-2 and DS-SYN-3 below.
The original open-choice capstone remains available as a further project;
it is not silently marked completed by this fixed sequence. Keep its
definitions/proof/computation/exposition criteria and original weights
when they are used, while treating the feedback here as descriptive
source comparison rather than authenticated marking.

### DS-SYN-1 — Extend the path portfolio to seven lenses

Retain the exact DS-CUM-P001 path, labels, membership encoding, weights and
partition blocks. Cite your earlier A/B/C portfolio and its revision rather
than resubmitting copied work. In one connected paper:

1. State which claims concern graph-stable subsets and which concern the
   separate partition matroid. Reuse the explicit relation/quotient,
   recurrence/bijection, spanning-tree, matching/Hall and weighted-greedy
   evidence from DS-CUM-P001, naming where each theorem's hypotheses enter.
2. Prove the maximum **cardinality** of a graph-stable subset is three,
   give all attaining constructions, and explain how this differs from
   maximum weight and from a maximal stable set.
3. Select each vertex independently with probability $1/4$. Let $X$ count
   path edges whose two endpoints are both selected. Find $E[X]$, use a
   first-moment bound for $P(X=0)$, then compute that probability exactly
   from the stable-set cardinality ledger. State which conclusion does
   and does not concern the size of the chosen set.
4. For the partition matroid with blocks $ab,cd,ef$ and capacity one in each,
   prove a closure formula, list all flats, and prove the complete dual-basis
   description. Explain why none of this grants matroid closure to the
   path's nonmatroid stable family.
5. Supply a nonvisual finite ledger and an explicit counterexample to
   “one greedy success proves exchange”. Identify the exact finite range
   checked and the general arguments that go beyond that range.

### DS-SYN-1 — Complete extension model

Three disjoint edges $ab,cd,ef$ permit at most one chosen endpoint each, so
a stable set has at most three vertices. The four sets $ace,acf,adf,bdf$
from the complete earlier ledger attain three. The earlier maximal $be$
has only two, and the unique maximum-weight stable set $ace$ weighs 13
under the stated weights. Cardinality, inclusion-maximality and weight
are different objectives with different proof obligations.

For each path edge $e$, its defect indicator has mean $(1/4)^2=1/16$.
There are five edges; linearity, without assuming independence of edge
indicators, gives $E[X]=5/16$. Because $X$ is a nonnegative integer,
$P(X\\ge1)\\le E[X]$, hence $P(X=0)\\ge11/16$.
A specified subset of size $k$ has probability $3^{6-k}/4^6$.
The existing stable counts $(1,6,10,4)$ therefore give

\\[
P(X=0)=\\frac{3^6+6\\cdot3^5+10\\cdot3^4+4\\cdot3^3}{4^6}
=\\frac{3105}{4096}.
\\]

The remaining $991/4096$ is the probability of at least one selected edge,
not the expected number of such edges. The first-moment statement proves
a probability lower bound, not equality or the existence of a stable set
of size three. The empty selection always has zero defects; the separate
three-set construction proves the extremal size. One may subtract its
probability $729/4096$ to obtain the exact nonempty stable-selection
probability $2376/4096$.

For a subset $S$ of the partition ground set, the already established rank
formula counts its occupied blocks. Consequently

\\[
\\operatorname{cl}(S)=\\bigcup\\{B_i:S\\cap B_i\\ne\\varnothing\\}.
\\]

An element in an occupied block adds no rank, while one in an unoccupied
block raises it. Thus the flats are exactly the eight unions of whole
blocks: the empty union; $ab,cd,ef$; $abcd,abef,cdef$; and $abcdef$.
This also proves extensivity, monotonicity and idempotence directly.
Its bases choose exactly one element per two-element block. Complementing
such a basis also chooses exactly one per block, and every such choice is
a complement. The dual has exactly the same eight bases, so this particular
partition matroid is self-dual. The fact uses block sizes two and capacities
one, not a theorem that every matroid is self-dual.

The path-stable family still fails exchange at $I=\\{b\\}$ and $J=\\{a,c\\}$.
Its maximum-size function may be computed, but this does not license the
matroid closure theorem or complementary-basis duality for that family.
The representation, proof, count, graph, extremal, probability and exact
finite-audit lenses now refer to the same typed data, with the comparison
family explicitly separated.

### DS-SYN-2 — Changed cycle: rebuild the probability and closure claims

At another sitting, begin from DS-CUM-P002's exact changed graph and weights.
Use its complete revised portfolio rather than silently retaining the old path
ledger. Recompute all of DS-SYN-1's new extremal, probability and partition
claims. Name which ones change and which remain true for a stated reason.
Attempt before the following key; record the actual date and prior help.

### DS-SYN-2 — Complete changed model

The stable triples are only $ace,bdf$; the same three disjoint edges prove
the upper bound three. The original path proof cannot call the whole cycle
a tree: it has six edges and no bridges, while deleting $af$ gives a spanning
tree. Its largest matching still has size three, and its two-coloring and
Hall injection remain explicitly certified in DS-CUM-P002.

There are six edge indicators, each with mean $1/16$, so $E[X]=6/16=3/8$.
The first-moment bound is now $P(X=0)\\ge5/8$. The changed stable counts
$(1,6,9,2)$ give

\\[
P(X=0)=\\frac{3^6+6\\cdot3^5+9\\cdot3^4+2\\cdot3^3}{4^6}
=\\frac{2970}{4096}=\\frac{1485}{2048}.
\\]

This is smaller than the path probability: the deleted stable sets
$af,acf,adf$ have total probability
$(3^4+2\\cdot3^3)/4^6=135/4096$, exactly the difference.
The probability of at least one selected edge is $1126/4096$;
it is not the mean defect count $3/8$.

The partition blocks and capacities have not changed, so their rank,
closure, eight flats and self-dual basis description remain exactly those
proved above. The graph-stable family still fails the same exchange pair.
Graph greedy now succeeds at $ace$, but that one success cannot repair
the universal exchange axiom. Its maximum-weight score 9, the earlier
score 13, and the two probability values concern different assigned data;
none is evidence that all greedy algorithms improve after adding an edge.

### DS-SYN-3 — Later return: a triangle changes the applicable theorem

Use the labelled triangle with vertices $a,b,c$ and edges $ab,bc,ca$.
No old six-vertex ledger is an input. The comparison family is now **all
subsets of size at most one** on this same three-element ground set.
Select vertices independently with probability $1/4$ as before.

Write a short connected portfolio giving: all stable sets, cardinality
classes and ordered related pairs; a reversible cycle split including the
empty-path boundary; spanning tree/bridges/coloring/matching certificates;
maximum stable cardinality; exact and first-moment stable-selection
probabilities; an exchange audit and closure; all primal and dual bases.
State why Hall's bipartite matching theorem is not the theorem to apply to
this graph. Work before the model and retain actual date/help/exposure.

### DS-SYN-3 — Complete return model

The stable sets are exactly $\\varnothing,a,b,c$, with class sizes $(1,3)$.
The relation “same size” is an equivalence and has $1^2+3^2=10$ ordered
related pairs. The cycle recurrence from DS-CUM-P002 gives
$c_3=a_2+a_0=3+1=4$: deleting a selected vertex and its two neighbors leaves
the empty path, whose one empty selection must not be discarded.

The graph is connected. Edges $ab,bc$ give a spanning tree, but no edge is
a bridge of the whole triangle: the other two still connect all vertices.
A proper coloring needs three colors because each vertex pair is adjacent,
and three distinct colors attain the bound. Any one edge is a matching;
no two can be disjoint on three vertices, so the matching maximum is one.
The triangle is an odd cycle, hence not bipartite; a proposed two-shore Hall
certificate would be using the wrong graph hypothesis.

Every pair of vertices is adjacent, so a stable set has at most one element;
each singleton attains one. Under independent $1/4$ selection there are
three edge indicators, so $E[X]=3/16$ and $P(X=0)\\ge13/16$. From the four
stable subsets directly,

\\[
P(X=0)=\\frac{3^3+3\\cdot3^2}{4^3}=\\frac{54}{64}=\\frac{27}{32}.
\\]

The conditional probability of a nonempty selection given stability is
$(27/64)/(54/64)=1/2$. A probability lower bound need not equal the exact
finite-model probability.

Here the graph-stable family **does** equal the comparison matroid
$U(1,3)$. Heredity holds, and in a strict-size independent pair the smaller
is empty and the larger is a singleton, so its element augments the empty
set. Its rank is $\\min(|S|,1)$; its closure is empty for $S=\\varnothing$
and all of $E$ for nonempty $S$. Its only flats are $\\varnothing$ and $E$.
The primal bases are $a,b,c$; complementing them gives dual bases $bc,ac,ab$,
so the dual is $U(2,3)$, of rank two, not the original rank-one matroid.
This is an explicit counterexample to transferring the earlier self-duality.
It does not contradict the path/cycle exchange failures, which concerned
different graphs and feasible families.

### Connected-paper criteria and repair

For each DS-SYN task, identify a line of the attempt establishing every
criterion. Label it justified, incomplete or not yet justified, then repair
the first missing implication and every dependent conclusion.

| Criterion | Complete evidence | Specific repair |
| --- | --- | --- |
| Typed objects | Ground order, graph edges, stable family and comparison matroid are distinguished | Test the same pair in both families before assigning rank/closure language |
| Definitions and general proof | Quotient representatives, path/cycle empty boundaries and proof quantifiers are explicit | Reconstruct the inverse map or induction step without copying a finite table |
| Graph and extremal certificate | The actual graph, a spanning tree and upper/lower optimality arguments are separated | Compare the whole cycle with its spanning path; give the pairwise-adjacency bound for the triangle |
| Probability model | Vertex coins, full subset weights, indicator mean, exact sum and inequality are stated | Compute one selected subset's mass; do not replace weighted sampling by uniform sampling on stable sets |
| Closure and duality | Rank-neutral additions follow a validated matroid; all flats and complementary bases are accounted for | Revisit DS-M12-R; a graph-stable family is not automatically a matroid, and self-duality needs a basis proof |
| Changed and return scope | Changed ledgers and unchanged comparison data have explicit reasons; actual later sitting/help are recorded | Add the missing forbidden pair, or replace the six-vertex data entirely for DS-SYN-3 |
| Feedback boundary | First draft, model exposure and revised proof remain distinguishable | Treat a copied or help-exposed model as reconstruction, not an independent assessment event |

This assigned sequence supplies source models and repair guidance for the
retained teaching scope. It does not certify human learning effectiveness,
provide a qualified marking service, or convert study progress into mastery.

<!-- euler-discrete-studio-closure:end -->
`;export{e as default};