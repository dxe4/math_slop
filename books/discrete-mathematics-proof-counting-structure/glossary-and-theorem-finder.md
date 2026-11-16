
# Glossary and Theorem/Method Finder

This retrieval aid is not a replacement for the definitions, hypotheses, proofs, and worked examples in the chapters. References use stable chapter identifiers rather than page numbers. A theorem name below identifies a result or proof pattern developed in the book; it does not assert historical priority. Before applying any result, return to the cited chapter and check the object class, finiteness assumptions, endpoint conventions, and meaning of every parameter.

## Stable chapter key

1. `sets-functions-relations-orders` — sets, functions, relations, partial orders, and closure.
2. `proof-induction-invariants` — proof forms, induction, recursion, invariants, and extremal choice.
3. `counting-bijections-inclusion-exclusion` — structural counting and inclusion–exclusion.
4. `recurrences-generating-functions` — recurrences, characteristic roots, and generating functions.
5. `graphs-trees-connectivity` — graphs, trees, paths, components, and cuts.
6. `planarity-coloring-matchings` — planar bounds, coloring, bipartite graphs, and matchings.
7. `probabilistic-extremal-methods` — finite probability, expectation, and extremal arguments.
8. `games-strategy-capstone` — finite games, backward induction, and strategy certificates.
9. `quotients-and-canonical-representatives` — equivalence classes and well-defined quotient operations.
10. `finite-orders-lattices-mobius` — finite posets, lattices, incidence sums, and Möbius inversion.
11. `advanced-enumeration-partitions` — partitions and advanced coefficient methods.
12. `graph-decompositions-orientations` — orientations, decompositions, and graph certificates.
13. `designs-and-set-systems` — incidence identities, uniform families, and finite designs.
14. `matroid-independence-bridge` — hereditary independence, exchange, rank, and greedy choice.
15. `exact-computation-experiments` — exact enumeration, reproducible experiments, and claim boundaries.
16. `cumulative-projects-solutions` — proof repair, synthesis projects, and solution strategies.

## Glossary

**Antichain.** A subset of a partially ordered set in which no two distinct elements are comparable. Antichains in a divisibility order, a subset order, and a dependency order can behave very differently; the ambient order must always be declared. See `sets-functions-relations-orders`, `finite-orders-lattices-mobius`.

**Bijection.** A function that is both injective and surjective. A bijection proves equal cardinality by pairing every object on each side exactly once; a suggestive but partially defined correspondence does not. For infinite sets, a bijection remains the definition of equal cardinality, although most counts here are finite. See `sets-functions-relations-orders`, `counting-bijections-inclusion-exclusion`.

**Block design.** An incidence structure consisting of a point set and a family of subsets called blocks, together with stated regularity parameters. In a $2$-design, every pair of distinct points lies in exactly $\lambda$ blocks. Constant block size and point replication alone do not imply constant pair concurrence. See `designs-and-set-systems`.

**Canonical representative.** A consistently selected element of each equivalence class. A representative is useful for computation, but a quotient construction should not silently depend on which representative was selected unless the selection itself is part of the definition. See `quotients-and-canonical-representatives`.

**Cardinality.** The size of a finite set, written $|A|$. When a counting argument partitions a set, the parts must be disjoint and exhaustive before their cardinalities may be added. See `sets-functions-relations-orders`, `counting-bijections-inclusion-exclusion`.

**Certificate.** Finite, checkable data supporting a conclusion: a path certifies connectivity between two vertices, a proper coloring certifies an upper bound on chromatic number, and a displayed obstruction can certify failure. A certificate may verify one instance without proving a universal theorem. See `graph-decompositions-orientations`, `exact-computation-experiments`.

**Chain.** A subset of a partially ordered set whose elements are pairwise comparable. A chain need not contain every element of the poset, and a maximal chain need not have maximum possible length. See `sets-functions-relations-orders`, `finite-orders-lattices-mobius`.

**Chromatic number.** The least number of colors in a proper vertex coloring. A produced $k$-coloring proves only an upper bound $\chi(G)\le k$; a lower bound needs an obstruction such as a clique or a separate argument. See `planarity-coloring-matchings`.

**Closure operator.** A map $c$ on subsets that is extensive ($A$ is contained in $c(A)$), monotone, and idempotent. Repeated application of arbitrary rules gives a closure operator only after these properties are verified. See `sets-functions-relations-orders`.

**Coefficient extraction.** The operation $[x^{n}]F(x)$ that selects the coefficient of $x^{n}$ in a polynomial or formal power series. Algebraic manipulation is formal unless analytic convergence is explicitly invoked; equality of formal series means equality coefficient by coefficient. See `recurrences-generating-functions`, `advanced-enumeration-partitions`.

**Combination.** An unordered selection, commonly counted by the binomial coefficient $\binom{n}{k}$ when choosing $k$ distinct objects from $n$. If order, repetition, or distinguishability changes, so does the model and usually the formula. See `counting-bijections-inclusion-exclusion`.

**Component.** A maximal connected subgraph, equivalently an equivalence class under the relation “joined by a path.” “Maximal” means not contained in a larger connected subgraph; it does not mean largest by vertex count. See `graphs-trees-connectivity`.

**Connected graph.** A graph in which every pair of vertices is joined by a path. The empty graph convention must be stated when a result could include zero vertices. See `graphs-trees-connectivity`.

**Cycle.** A closed path with the chapter's stated distinctness convention. Results about forests and trees use simple undirected graphs unless explicitly broadened; loops and parallel edges alter short-cycle conventions. See `graphs-trees-connectivity`.

**Degree.** The number of edges incident with a vertex in a simple graph. In a directed graph, indegree and outdegree are separate. Loops and parallel edges require different counting conventions and are excluded unless announced. See `graphs-trees-connectivity`, `graph-decompositions-orientations`.

**Equivalence class.** For an equivalence relation $\sim$ on $A$, the class $[a]$ is $\{x \in A:x\sim a\}$. Equivalence classes partition $A$: they are nonempty, cover $A$, and are equal or disjoint. See `sets-functions-relations-orders`, `quotients-and-canonical-representatives`.

**Equivalence relation.** A reflexive, symmetric, and transitive relation. Similarity or local closeness often fails transitivity and therefore does not automatically produce a quotient. See `sets-functions-relations-orders`.

**Expectation.** For a finite probability space, the weighted sum of a random variable's values. Linearity of expectation does not require independence. Turning an expected bound into existence requires the relevant inequality direction and a nonempty finite probability space. See `probabilistic-extremal-methods`.

**Extremal choice.** A proof method that selects a smallest, largest, shortest, or longest counterexample or object and derives a contradiction by improving it. Existence of the selected extremum needs justification, often finiteness or well-ordering. See `proof-induction-invariants`, `probabilistic-extremal-methods`.

**Forest.** A simple undirected graph with no cycle. Each component of a forest is a tree; for a finite forest with $n$ vertices and $c$ components, the edge count is $n-c$. See `graphs-trees-connectivity`.

**Formal power series.** An algebraic sequence container $\sum a_{n}x^{n}$ whose operations are defined coefficientwise. Questions of numerical convergence are unnecessary for finite coefficient calculations but become essential when substituting a numerical value for $x$. See `recurrences-generating-functions`, `advanced-enumeration-partitions`.

**Generating function.** A formal power series encoding a sequence, usually $A(x)=\sum_{n\ge 0}a_{n}x^{n}$. The encoding does not by itself solve a recurrence; initial conditions and algebraic identities determine the coefficients. See `recurrences-generating-functions`.

**Graph.** In the default convention, a finite simple graph $G=(V,E)$ has vertices $V$ and two-element edges $E$. Directed graphs, multigraphs, and infinite graphs appear only when explicitly declared. See `graphs-trees-connectivity`.

**Greedy algorithm.** A procedure that repeatedly makes a locally preferred feasible choice. Greedy success is a theorem only under structural hypotheses, such as the exchange property in the matroid setting; hereditary feasibility alone is insufficient. See `matroid-independence-bridge`.

**Independent set (graph).** A vertex subset containing no edge with both endpoints inside it. This differs from an independent set of a matroid, though graph forests provide a matroidal example when the ground elements are edges. See `probabilistic-extremal-methods`, `matroid-independence-bridge`.

**Independent set (matroid).** A member of a nonempty hereditary set family satisfying the augmentation or exchange axiom. The ground set and independence family are both part of the data. See `matroid-independence-bridge`.

**Indicator random variable.** A variable equal to $1$ when an event occurs and $0$ otherwise. A count can often be expressed as a sum of indicators, making its expectation a sum of event probabilities without any independence assumption. See `probabilistic-extremal-methods`.

**Induction.** A proof principle combining a base case with a step showing that assumed earlier cases imply the next case. Strong induction may assume all earlier cases, but the proof must still show that recursive reductions land among them and eventually reach a base case. See `proof-induction-invariants`.

**Invariant.** A quantity or property unchanged by every legal move or transformation under consideration. An invariant can rule out reachability when endpoints have different values; matching invariant values does not generally prove reachability. See `proof-induction-invariants`, `games-strategy-capstone`.

**Inclusion–exclusion.** A formula correcting overcounting of a union by alternating sums of intersection sizes. Every intersection is indexed by a subset of the event family, and signs depend on the subset size. Truncating the formula yields bounds only with the appropriate parity and stated finite setting. See `counting-bijections-inclusion-exclusion`.

**Incidence.** A declared relation between two kinds of objects, such as points and blocks or vertices and edges. Counting the same incidence set in two ways is safe only when both counts describe exactly the same ordered pairs. See `designs-and-set-systems`.

**Join and meet.** In a poset, the join of two elements is their least upper bound and the meet is their greatest lower bound, when these exist. An upper bound is not necessarily the least upper bound, and not every poset is a lattice. See `sets-functions-relations-orders`, `finite-orders-lattices-mobius`.

**Lattice.** A poset in which every pair of elements has both a meet and a join. Finiteness alone does not force a poset to be a lattice. See `finite-orders-lattices-mobius`.

**Matching.** A set of graph edges no two of which share an endpoint. A maximum matching has greatest cardinality; a maximal matching merely cannot be enlarged by adding a single edge. See `planarity-coloring-matchings`.

**Matroid.** A finite ground set together with an independence family satisfying nonemptiness, heredity, and exchange. Equivalent axiom systems require their own hypotheses and proofs of equivalence. See `matroid-independence-bridge`.

**Maximal versus maximum.** Maximal means inclusion-wise unextendable; maximum means greatest value of a stated size or objective. A graph can have maximal matchings of different sizes and a poset can have several maximal elements but no greatest element. See `sets-functions-relations-orders`, `planarity-coloring-matchings`.

**Möbius function of a finite poset.** The interval function $\mu(x,y)$ defined for $x\le y$ as the convolution inverse of the zeta function. Equivalently, $\mu(x,x)=1$ and $\sum_{x\le z\le y}\mu(x,z)=0$ for $x<y$. It is unrelated to ordinary numerical inversion without an incidence-poset model. See `finite-orders-lattices-mobius`.

**Orientation.** Assignment of one direction to each edge of an undirected graph. An orientation changes indegrees and outdegrees but not the underlying adjacencies; a directed reachability claim needs more than an undirected connectivity claim. See `graph-decompositions-orientations`.

**Partition of a set.** A family of nonempty, pairwise disjoint subsets whose union is the entire set. Integer partitions are different objects: unordered decompositions of an integer into positive parts. See `sets-functions-relations-orders`, `advanced-enumeration-partitions`.

**Path.** A sequence of vertices joined by consecutive edges, with the chapter's stated rule about repeated vertices. A walk may repeat vertices or edges; a simple path does not. See `graphs-trees-connectivity`.

**Partial order.** A reflexive, antisymmetric, and transitive relation. Antisymmetry does not mean that distinct elements are never comparable; it says $x\le y$ and $y\le x$ force $x=y$. See `sets-functions-relations-orders`.

**Planar graph.** A graph admitting a drawing in the plane with edges meeting only at common endpoints. A particular drawing with crossings does not prove nonplanarity. Euler-type face counts refer to a fixed planar embedding and require the stated connectedness adjustment. See `planarity-coloring-matchings`.

**Pigeonhole principle.** If more objects than boxes are assigned to boxes, some box receives at least two objects. Quantitative versions use ceilings; the objects, boxes, and assignment must be explicit. See `counting-bijections-inclusion-exclusion`.

**Poset interval.** For comparable elements $x\le y$, the set $[x,y]=\{z:x\le z\le y\}$. This is an order interval, not a numerical or topological interval unless the poset happens to have that structure. See `finite-orders-lattices-mobius`.

**Proper coloring.** A vertex coloring in which adjacent vertices receive different colors. The definition does not require every available color to be used. See `planarity-coloring-matchings`.

**Quotient.** The set of equivalence classes $A/\sim$. An operation proposed by $[a]*[b]=[a*b]$ is valid only if replacing $a$ or $b$ by equivalent representatives leaves the resulting class unchanged. See `quotients-and-canonical-representatives`.

**Rank (matroid, whole ground set).** The common cardinality of the bases of a matroid. The chapter proves that augmentation makes all bases equally large. Rank on every subset, submodularity, and flats belong to the companion structural volume and are not developed here. See `matroid-independence-bridge`.

**Recurrence.** A rule expressing sequence terms through earlier terms, accompanied by enough initial values to determine a sequence. A characteristic equation applies to suitable linear constant-coefficient recurrences, not to arbitrary recursive definitions. See `recurrences-generating-functions`.

**Relation.** A subset of a Cartesian product. Properties such as reflexivity, symmetry, antisymmetry, and transitivity depend on the declared underlying set. See `sets-functions-relations-orders`.

**Representative independence.** The property that a definition on equivalence classes gives the same output class for every choice of input representatives. Checking one favored representative per class is generally not a proof. See `quotients-and-canonical-representatives`.

**Simple graph.** A graph without loops or parallel edges. Degree sums, planar edge bounds, and cycle conventions in this book assume simplicity unless a section explicitly says otherwise. See `graphs-trees-connectivity`, `planarity-coloring-matchings`.

**Strategy.** A rule prescribing a legal move after every position at which a player may have to act, not merely along one favored play sequence. A winning strategy must address every legal opponent response. See `games-strategy-capstone`.

**Structural certificate.** An explicit subobject, decomposition, ordering, labeling, or orientation that a checker can validate locally while supporting a global claim. Failure to find a certificate is not evidence that none exists unless the search is exhaustive and its scope is proved. See `graph-decompositions-orientations`, `exact-computation-experiments`.

**Tree.** A connected acyclic simple graph. For finite simple graphs with $n\ge 1$ vertices, several characterizations are equivalent, including connectedness with $n-1$ edges and acyclicity with $n-1$ edges; neither edge count alone nor connectedness alone suffices. See `graphs-trees-connectivity`.

**Uniform set family.** A family in which every member has the same cardinality. Uniformity does not imply constant point degrees, pair intersections, or design balance. See `designs-and-set-systems`.

**Well-defined operation.** A proposed function or operation whose output is uniquely determined by its mathematical input rather than by notation or auxiliary choices. Quotient operations are the main example, but recursive rules and algorithms also require unambiguous domains and outputs. See `quotients-and-canonical-representatives`, `proof-induction-invariants`.

**Winning and losing positions.** Under finite normal play, a position is winning if some legal move reaches a losing position, and losing if every legal move reaches a winning position. This recursive classification needs termination; cycles or draws require a different analysis. See `games-strategy-capstone`.

## Theorem and method finder

### Foundations and proof architecture

- **Image/preimage laws.** Use `sets-functions-relations-orders` for union, intersection, complement, image, and preimage identities. Boundary reminder: images preserve unions but need not preserve intersections; preimages preserve all ordinary Boolean operations.
- **Equivalence classes form a partition.** Use `sets-functions-relations-orders`. Required hypotheses: reflexivity, symmetry, and transitivity on the declared set. Conversely, a partition induces an equivalence relation by membership in a common part.
- **Finite posets have maximal elements.** Use `sets-functions-relations-orders`. Required hypotheses: the poset is finite and nonempty. The conclusion is existence of a maximal element, not a greatest element or uniqueness.
- **Induction and strong induction.** Use `proof-induction-invariants`. Record the starting index, prove every necessary base case, and make the step land strictly earlier. For recursively defined objects, also prove the construction terminates and covers the intended class.
- **Invariant obstruction.** Use `proof-induction-invariants` or `games-strategy-capstone`. Verify preservation under every legal move. Different invariant values prove nonreachability; equal values ordinarily give no converse.
- **Minimal-counterexample and extremal-choice proofs.** Use `proof-induction-invariants`. Justify that a minimum or maximum exists and that the transformed object remains in the counterexample class while becoming strictly smaller or better.

### Counting and recurrence tools

- **Sum and product rules.** Use `counting-bijections-inclusion-exclusion`. Sum over disjoint exhaustive cases; multiply only when every first-stage outcome has the counted number of compatible continuations, or sum products when that number varies.
- **Bijection method.** Use `counting-bijections-inclusion-exclusion`. Specify domain and codomain and prove both injectivity and surjectivity, often by giving a two-sided inverse.
- **Binomial coefficients and subset counting.** Use `counting-bijections-inclusion-exclusion`. The standard $\binom{n}{k}$ count assumes $0\le k\le n$, distinct ground objects, unordered selection, and no repetition.
- **Inclusion–exclusion.** Use `counting-bijections-inclusion-exclusion`. The full formula requires a finite indexed family. Make every intersection and alternating sign explicit; pairwise subtraction alone does not correct triple overlap.
- **Pigeonhole bounds.** Use `counting-bijections-inclusion-exclusion`. A conclusion such as some box contains at least $\lceil N/k\rceil$ objects assumes $N$ objects assigned among $k>0$ boxes.
- **Linear recurrence solution by characteristic roots.** Use `recurrences-generating-functions`. Applicable to homogeneous linear recurrences with constant coefficients; repeated roots require polynomial factors, and initial conditions determine constants.
- **Generating-function translation.** Use `recurrences-generating-functions`. Track initial terms when shifting indices. Formal identities establish coefficient statements without an analytic convergence claim.
- **Coefficient products and partition constructions.** Use `advanced-enumeration-partitions`. A product factor records independent multiplicity choices only when the combinatorial encoding is unique. Restricted parts, distinct parts, and bounded multiplicity require different factors.

### Graphs, planarity, coloring, and matching

- **Degree-sum identity.** Use `graphs-trees-connectivity`: in a finite undirected graph, the sum of degrees is twice the number of edges. Under the manuscript's default convention the graph is simple, though the identity can be adapted to multigraphs with loops counted twice.
- **Odd-degree parity.** Use `graphs-trees-connectivity`. A finite undirected graph has an even number of odd-degree vertices, as a consequence of the degree-sum identity.
- **Tree edge characterizations.** Use `graphs-trees-connectivity`. For a finite simple graph on $n\ge 1$ vertices, connected plus acyclic, connected plus $n-1$ edges, and acyclic plus $n-1$ edges are equivalent. Do not delete either structural hypothesis when using only one direction.
- **Forest edge count.** Use `graphs-trees-connectivity`: a finite forest with $n$ vertices and $c$ components has $n-c$ edges. Isolated vertices count as components.
- **Euler relation and planar edge bounds.** Use `planarity-coloring-matchings`. Apply Euler's formula to a planar embedding, account for connected components, and check simplicity, face-length assumptions, and small values of $n$ before using bounds such as $m\le 3n-6$.
- **Greedy coloring bound.** Use `planarity-coloring-matchings`. Given a vertex ordering, greedy coloring uses at most one more than the maximum number of earlier neighbors. A $\Delta+1$ bound is an upper bound, not usually an equality.
- **Bipartite characterization.** Use `planarity-coloring-matchings`. A finite undirected graph is bipartite exactly when it contains no odd cycle. For disconnected graphs, perform the parity-level construction separately in every component.
- **Augmenting paths.** Use `planarity-coloring-matchings`. Symmetric difference along an augmenting path enlarges a matching by one. The absence-of-augmenting-path optimality conclusion needs a finite graph and the precise alternating-path definition.
- **Hall-type matching condition.** Use `planarity-coloring-matchings`. For a finite bipartite graph with designated left part $L$, a matching saturating $L$ exists exactly when every subset $S$ of $L$ has at least $|S|$ neighbors. Checking only singletons is insufficient.
- **Orientation and decomposition certificates.** Use `graph-decompositions-orientations`. Verify whether the claim concerns the underlying graph or directed reachability, whether components are handled separately, and whether the displayed local degree balances are necessary, sufficient, or both.

### Probability and extremal reasoning

- **Linearity of expectation.** Use `probabilistic-extremal-methods`. For a finite family of integrable random variables, expectation distributes over the sum without independence. Dependence matters for products and concentration claims, not for linearity itself.
- **Indicator method.** Use `probabilistic-extremal-methods`. Express the target count exactly as a sum of indicators, compute each event probability under the declared random experiment, then add.
- **Probabilistic existence.** Use `probabilistic-extremal-methods`. If a nonnegative integer-valued defect has expectation below $1$, some outcome has defect $0$; more generally an average guarantees at least one outcome no worse than the average. State whether the conclusion is strict or weak.
- **Extremal double counting.** Use `probabilistic-extremal-methods` and `designs-and-set-systems`. Define one finite incidence set and count it from both coordinates. Bounds derived by convexity or degree estimates inherit equality conditions that must be checked separately.
- **Small Ramsey- and Turán-style arguments.** Use `probabilistic-extremal-methods`. The results are scoped to the stated finite graph class and parameters. A construction supplies a lower bound while an inevitability proof supplies an upper bound; neither alone gives equality.

### Quotients, orders, designs, and matroids

- **Quotient operation test.** Use `quotients-and-canonical-representatives`. To define $[a]*[b]=[a*b]$, prove that $a\sim a'$ and $b\sim b'$ imply $a*b\sim a'*b'$. Merely showing that every class has a representative does not establish well-definedness.
- **Canonical form argument.** Use `quotients-and-canonical-representatives`. Prove existence of a canonical representative in every class and uniqueness within each class. A normalization procedure also needs termination if it is iterative.
- **Möbius inversion on a finite poset.** Use `finite-orders-lattices-mobius`. The order must be finite, sums run over the stated intervals, and the zeta and Möbius functions use compatible convolution orientation. Check whether the given relation is $g(y)=\sum_{x\le y}f(x)$ or its dual before writing the inverse.
- **Lattice tests.** Use `finite-orders-lattices-mobius`. For every pair, establish both a greatest lower bound and a least upper bound. Exhibiting some common lower and upper bounds is not sufficient.
- **Design parameter equations.** Use `designs-and-set-systems`. Double counting incidences gives identities such as $vr=bk$, and counting point-pair incidences yields further constraints in a genuine $2$-design. These arithmetic conditions are necessary, not generally sufficient for existence.
- **Complementary blocks.** Use `designs-and-set-systems`. Complementing blocks preserves uniformity and transforms replication and concurrence parameters by explicit counts. A complemented family is a $2$-design only when the original hypotheses provide constant pair concurrence and the complementary block size is meaningful.
- **Matroid greedy theorem.** Use `matroid-independence-bridge`. The finite independence system must satisfy the matroid exchange axiom, and the objective is additive element weight. Sort by the declared weight direction and distinguish a maximum-weight basis from unconstrained maximum-weight independent sets when weights may be negative.
- **Basis exchange and whole-ground-set rank.** Use `matroid-independence-bridge`. Exchange applies to bases or independent sets under its stated size conditions, and equal basis cardinality defines the rank used there. Subset rank belongs to the companion structural volume.

### Games, exact computation, and synthesis

- **Backward induction for finite games.** Use `games-strategy-capstone`. The game graph must terminate and positions must encode whose turn it is and all information relevant to legal play. Games with cycles, draws, chance, or hidden information need additional states and conclusions.
- **Strategy certificate.** Use `games-strategy-capstone`. Give a move for every reachable opponent response, not one illustrative line. If an invariant supports the strategy, prove both its initial value and its preservation or restoration after each response.
- **Exhaustive finite search.** Use `exact-computation-experiments`. State the finite universe, canonical encoding, generation rule, deduplication method, checker, and independently checkable totals. Exhaustive search proves a claim only for the exact enumerated domain.
- **Counterexample search.** Use `exact-computation-experiments`. Finding one valid counterexample refutes a universal claim. Finding none through size $n$ does not prove the claim beyond that boundary unless a separate reduction theorem brings all cases into the searched range.
- **Proof repair.** Use `cumulative-projects-solutions`. Locate the first unjustified implication, inventory the missing hypothesis, and choose among restricting the theorem, strengthening the argument, or producing a counterexample. Repair should preserve only what the evidence proves.
- **Synthesis workflow.** Use `cumulative-projects-solutions`. Define objects and domains, test small cases, formulate the exact claim, select a proof architecture, verify boundary cases, and record whether computation is discovery evidence or a proof certificate.

## Boundary reminders for common misapplications

1. **Finite is a hypothesis.** Maximal-element arguments, exhaustive search, finite probability averages, and several graph counts use finiteness essentially. Do not silently extend them to infinite objects.
2. **Simple is a graph convention.** Loops and parallel edges affect degrees, cycles, face lengths, coloring, and matching formulations. Recheck every proof if the graph model changes.
3. **Existence is not construction.** An average or counting contradiction may prove an object exists without supplying an efficient algorithm to find it.
4. **Necessary is not sufficient.** Divisibility conditions for designs, degree conditions for decompositions, and invariant agreement may be necessary while falling short of existence.
5. **Maximum is not maximal.** This distinction is load-bearing in orders, matchings, independent sets, chains, and greedy arguments.
6. **Evidence is not universality.** Tables and exact computations are theorem-level only on their declared finite search domain, unless paired with a proved reduction.
7. **A label is not a hypothesis.** “Tree,” “lattice,” “design,” “matroid,” and “quotient” each abbreviate axioms that must actually be verified.
8. **A formula has a model.** Before applying a binomial coefficient, recurrence, generating function, expectation, or incidence identity, identify exactly what each term counts.

This finder covers all sixteen chapter identifiers and emphasizes the book's most reusable results. Stable chapter references keep it usable across web and print layouts; corrections to terminology or cross-references should update both the entry and its destination.
