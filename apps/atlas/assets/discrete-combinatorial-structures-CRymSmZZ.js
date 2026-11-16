var e=`---
id: book-discrete-combinatorial-structures
title: "Matroids and Extremal Combinatorics"
level: graduate
estimated_minutes: 5015
license: CC BY-SA 4.0
production_state: complete-draft
---

<a id="combinatorial-structures-graphs-extremal-methods-and-matroids"></a>

# Matroids and Extremal Combinatorics {#section-3-matroids-and-extremal-combinatorics}

The word **independent** appears in several discrete settings. A set of graph vertices may contain no edge. A set of graph edges may contain no cycle. A set of vectors may have no nontrivial linear dependence. These definitions resemble one another, but resemblance is not theorem. Matroid theory isolates an exchange law that holds for forests and linearly independent vectors but fails for ordinary stable vertex sets. That law is exactly strong enough to support a universal greedy theorem.

This graduate (L4) book develops finite extremal methods and matroid structure.
The primary route has nineteen teaching chapters. Begin with
[Combinatorics](/books/textbooks-combinatorics/),
[Graph Theory](/books/library-book-graph-theory/), and elementary linear algebra,
for example [Linear Algebra: Structure and Proofs](/books/library-book-linear-algebra-structure-proofs/).
A prior matroid course is not required.

The route first strengthens probabilistic, extremal, Ramsey, and incidence
arguments, then develops independence axioms, exchange, rank, circuits,
representations, minors, duality, and weighted optimization. Exact enumeration
and six structural investigations bring those methods together. The book is a
Draft; the examples and exercise solutions are available for study.

## Primary reading route {#section-20-primary-reading-route}

| Route | Chapter |
| --- | --- |
| 1 | [Probabilistic and Extremal Methods](discrete-combinatorial-structures/probabilistic-extremal-methods.md) |
| 2 | [Turán Symmetrization, Equality, and Stability](discrete-combinatorial-structures/turan-symmetrization-stability.md) |
| 3 | [Ramsey Forcing, Recursive Bounds, and Constructions](discrete-combinatorial-structures/ramsey-forcing-bounds.md) |
| 4 | [Probabilistic Construction, Alteration, and Dependence](discrete-combinatorial-structures/probabilistic-alteration-dependence.md) |
| 5 | [Extremal Set Systems, Shadows, and Compression](discrete-combinatorial-structures/extremal-set-compression.md) |
| 6 | [Designs, Incidence Structures, and Representability Limits](discrete-combinatorial-structures/designs-incidence-representability.md) |
| 7 | [Independence, Augmentation, and Cryptomorphic Axioms](discrete-combinatorial-structures/independence-augmentation-cryptomorphisms.md) |
| 8 | [Bases, Fundamental Circuits, and Strong Exchange](discrete-combinatorial-structures/bases-strong-exchange.md) |
| 9 | [Rank, Submodularity, Closure, and Flats](discrete-combinatorial-structures/rank-submodularity-flats.md) |
| 10 | [Circuits, Elimination, and Orthogonality Patterns](discrete-combinatorial-structures/circuits-elimination-orthogonality.md) |
| 11 | [Graphic and Cographic Matroids](discrete-combinatorial-structures/graphic-cographic-matroids.md) |
| 12 | [Linear Representability and Field Dependence](discrete-combinatorial-structures/linear-representability-fields.md) |
| 13 | [Uniform, Partition, and Transversal Families](discrete-combinatorial-structures/uniform-partition-transversal.md) |
| 14 | [Deletion, Contraction, and Minor Recurrences](discrete-combinatorial-structures/deletion-contraction-minors.md) |
| 15 | [Duality, Sums, and Matroid Connectivity](discrete-combinatorial-structures/duality-sums-connectivity.md) |
| 16 | [Weighted Greedy Theorems and Objective Contracts](discrete-combinatorial-structures/weighted-greedy-objectives.md) |
| 17 | [Basis Exchange Graphs and Combinatorial Geometry](discrete-combinatorial-structures/basis-exchange-geometry.md) |
| 18 | [Exact Axiom Enumeration and Counterexample Certificates](discrete-combinatorial-structures/exact-axiom-enumeration.md) |
| 19 | [Six Structural Investigations](discrete-combinatorial-structures/structural-investigations.md) |

Every primary chapter has staged hints and full exercise solutions. The original
questions and worked arguments remain, and the added entry examples connect the
earlier first-course treatments to the more detailed proofs here. Use chapter
names and stable links when moving between the extremal and matroid parts;
a reading order does not remove a chapter's mathematical prerequisites.

The designs chapter begins with incidence counting and elementary matrix
arguments. Its comparisons with matroid representation can also be revisited
after the later linear-representability chapter. The
[first-course design reading](/books/library-book-discrete-mathematics-proof-counting-structure/designs-and-set-systems/)
and [matroid bridge](/books/library-book-discrete-mathematics-proof-counting-structure/matroid-independence-bridge/)
remain available as preparation.

## Reference material and solutions {#section-57-reference-material-and-solutions}

[Theorem Dependencies, Counterexample Index, and Solutions](discrete-combinatorial-structures/theorem-index-solutions.md)
is back matter rather than a teaching chapter. It remains at its existing
identity with all its cumulative solutions. The
[reader guide](discrete-combinatorial-structures/front-matter/reader-prerequisite-guide.md),
[diagnostic repair routes](discrete-combinatorial-structures/front-matter/diagnostic-repair-routes.md),
[notation conventions](discrete-combinatorial-structures/front-matter/notation-theorem-conventions.md),
[glossary and theorem finder](discrete-combinatorial-structures/back-matter/glossary-theorem-dependency-finder.md),
[references](discrete-combinatorial-structures/back-matter/references-attribution-guide.md), and
[stable subject index](discrete-combinatorial-structures/back-matter/stable-subject-index.md)
supply additional entry points. The two exercise-program supplements remain
available in [Part I](discrete-combinatorial-structures/supplements/exercise-program-part-i.md)
and [Part II](discrete-combinatorial-structures/supplements/exercise-program-part-ii.md).
They extend the local chapter practice rather than replacing its hints and
solutions.

## Structural orientation retained from the earlier reading {#section-74-structural-orientation-retained-from-the-earlier-readin}

The following mathematical orientation keeps its original examples, proofs,
questions, and solutions. The table above gives the current primary order.

## 1. Independence systems and the exchange question {#section-79-1-independence-systems-and-the-exchange-question}

Let $E$ be a finite ground set. An **independence system** is a nonempty family $I\\subseteq P(E)$ satisfying heredity:

$J\\in I \\text{ and } I'\\subseteq J \\Longrightarrow I'\\in I$.

Members of $I$ are independent; other subsets are dependent. Because the family is nonempty and hereditary, $\\varnothing \\in I$.

A **basis of a subset $A\\subseteq E$** is an inclusion-maximal independent subset of $A$. Maximal means no element of $A$ can be added; it does not yet imply maximum cardinality. In an arbitrary independence system, bases of the same $A$ may have different sizes.

### Smallest stable-set failure {#section-89-smallest-stable-set-failure}

Let $E=\\{a,b,c\\}$ be vertices of path $a-b-c$, and let independent sets be graph-stable sets. Then $\\{b\\}$ and $\\{a,c\\}$ are both maximal independent sets of $E$, with different sizes. If weights are $3,5,3$, descending greedy takes $b$ for total $5$, while $\\{a,c\\}$ has total $6$.

The obstruction is exchange. For $I=\\{b\\}$, $J=\\{a,c\\}$, we have $|I|<|J|$, but neither element of $J\\setminus I$ can augment $I$.

## 2. Matroids: heredity plus augmentation {#section-95-2-matroids-heredity-plus-augmentation}

A **matroid** $M=(E,I)$ is an independence system satisfying:

> If $I,J\\in I$ and $|I|<|J|$, then some $e\\in J\\setminus I$ has $I\\cup \\{e\\}\\in I$.

This is the **augmentation** or **exchange** axiom. It prevents a smaller independent set from becoming stuck while a larger independent set exists.

**Theorem 1.** Every two bases of the same subset $A\\subseteq E$ have equal cardinality.

**Proof.** Let $B_1,B_2$ be bases of $A$. If $|B_1|<|B_2|$, augmentation supplies $e\\in B_2\\setminus B_1$ such that $B_1\\cup \\{e\\}$ is independent, contradicting maximality of $B_1$ inside $A$. The reverse inequality is ruled out symmetrically. ∎

The common cardinality of bases of $A$ is its rank.

### Basis exchange {#section-109-basis-exchange}

Matroids can instead be defined through a nonempty family of bases satisfying:

> For bases $B_1,B_2$ and $e\\in B_1\\setminus B_2$, some $f\\in B_2\\setminus B_1$ makes $(B_1\\setminus \\{e\\})\\cup \\{f\\}$ a basis.

To see why the independence axiom implies this, remove $e$ from $B_1$. The set has size one below $B_2$, so augmentation by an element of $B_2$ is possible. The resulting independent set has full rank and hence is a basis. Recovering all independent sets as subsets of bases gives the converse. These equivalent axiom systems are called **cryptomorphic** descriptions: different primitive data define the same class of objects.

## 3. Fundamental examples and nonexamples {#section-117-3-fundamental-examples-and-nonexamples}

### Uniform matroid {#section-119-uniform-matroid}

For integers $0\\le r\\le n$, $U_{r,n}$ has an $n$-element ground set and declares a subset independent exactly when its size is at most $r$. Every $r$-set is a basis. When $r<n$, its circuits are the $(r+1)$-sets.

### Partition matroid {#section-123-partition-matroid}

Partition $E$ into pairwise disjoint blocks $E_1,\\ldots ,E_k$ whose union is $E$, and choose integer capacities $0\\le c_i\\le |E_i|$. Declare $I$ independent when $|I\\cap E_i|\\le c_i$ for every $i$. If $I$ is smaller than $J$, some block contains fewer elements of $I$ than of $J$; an element from that block augments $I$. Thus exchange holds.

### Graphic matroid {#section-127-graphic-matroid}

For a finite graph $G$, take $E(G)$ as the ground set and declare edge sets independent when they contain no cycle. Heredity is immediate. For exchange, let forests $F_1,F_2$ satisfy $|F_1|<|F_2|$. A forest on the full vertex set with $c$ components has $|V|-c$ edges, so $F_1$ has more components than $F_2$. Some edge of $F_2$ joins two different components of $F_1$; adding it cannot create a cycle. Thus graphic independence is a matroid.

Its bases are spanning forests—one spanning tree per connected component of $G$. Its circuits are graph cycles.

### Linear matroid {#section-133-linear-matroid}

Let columns of a matrix be indexed by $E$, over a specified field. Declare a subset independent when its columns are linearly independent. The linear-algebra exchange lemma gives matroid augmentation. The field is part of the representation: a matrix can encode different dependence behavior over fields of different characteristic.

### Matchings and stable sets {#section-137-matchings-and-stable-sets}

Stable vertex sets fail exchange on $P_3$. Matchings fail on the three-edge path: the middle edge alone is maximal, while the two outer edges form a larger matching. These hereditary families are valuable independence systems, but not matroids. Calling them independent does not import rank submodularity, equal-size bases, or the greedy theorem.

## 4. Rank packages optimization and dependence {#section-141-4-rank-packages-optimization-and-dependence}

For $A\\subseteq E$, define

$r(A)=\\max\\{|I|: I\\subseteq A \\text{ and } I \\text{independent}\\}$.

Matroid rank satisfies:

1. $0\\le r(A)\\le |A|$;
2. if $A\\subseteq B$, then $r(A)\\le r(B)$;
3. **submodularity:** $r(A\\cup B)+r(A\\cap B)\\le r(A)+r(B)$.

The first two follow directly. For submodularity, take a basis $I$ of $A\\cap B$ and extend it to a basis $J$ of $A\\cup B$. The sets $J\\cap A$ and $J\\cap B$ are independent, so their sizes are at most $r(A)$ and $r(B)$. Moreover

$|J\\cap A|+|J\\cap B|=|J|+|J\\cap A\\cap B|$.

Choose the extension so $I\\subseteq J$; maximality in $A\\cap B$ gives $J\\cap A\\cap B=I$. Hence the right side is $r(A\\cup B)+r(A\\cap B)$, proving the inequality.

### Rank increments {#section-159-rank-increments}

For $e\\notin A$, rank changes by either zero or one:

$r(A\\cup \\{e\\})\\in \\{r(A),r(A)+1\\}$.

If it remains unchanged, $e$ is dependent on $A$ in the matroid sense. This motivates closure.

## 5. Closure, flats, and circuits {#section-167-5-closure-flats-and-circuits}

The **closure** of $A$ is

$\\operatorname{cl}(A)=\\{e\\in E:r(A\\cup \\{e\\})=r(A)\\}$.

It contains $A$, is monotone, and is idempotent; these properties follow from rank axioms, especially submodularity. A set $F$ with $\\operatorname{cl}(F)=F$ is a **flat**.

In a linear matroid, closure is the set of indexed vectors lying in the linear span of $A$. In a graphic matroid, an edge $uv$ lies in $\\operatorname{cl}(A)$ exactly when $u$ and $v$ are already connected in the spanning subgraph $(V,A)$; adding it does not increase the rank, whether or not $A$ itself already contains cycles.

A **circuit** is a minimal dependent set. Minimal means every proper subset is independent, not merely every one-element deletion unless heredity has already been established.

**Circuit elimination.** If distinct circuits $C_1,C_2$ share an element $e\\in C_1\\cap C_2$, then there exists a circuit $C_3\\subseteq (C_1\\cup C_2)\\setminus \\{e\\}$. In a graph, two cycles sharing an edge can be combined and the shared edge canceled, leaving a closed trail that contains a cycle. For general matroids, elimination is another cryptomorphic axiom system.

### Fundamental circuit {#section-181-fundamental-circuit}

If $B$ is a basis and $e\\notin B$, then $B\\cup \\{e\\}$ is dependent but deleting $e$ leaves an independent set. It contains a unique circuit $C(e,B)$. If two circuits existed, circuit elimination would create a circuit inside $B$, contradiction. Fundamental circuits control basis exchange and provide compact certificates for rejected greedy elements.

## 6. Greedy characterization with the correct objective {#section-185-6-greedy-characterization-with-the-correct-objective}

Assign real weights $w:E\\to \\mathbb{R}$. To maximize weight over **all independent sets**, process elements in nonincreasing weight order, skip negative-weight elements, and accept a remaining element exactly when independence is preserved. Zero-weight choices may be accepted without changing the objective.

**Theorem 2.** For every finite matroid, this rule returns a maximum-weight independent set.

**Proof.** Restrict the matroid to the eligible ground set $E_+=\\{e:w(e)\\ge 0\\}$. Greedy ends at a maximal independent set of this restriction, hence a basis. Any maximum-weight independent set in $E_+$ can be extended to a basis by adding elements; every added element has weight zero, since a positive-weight feasible extension would contradict optimality. Thus it is enough to compare greedy with maximum-weight bases of the restriction.

Let greedy choose $g_1,\\ldots ,g_k$, and write $G_i=\\{g_1,\\ldots ,g_i\\}$. Inductively choose a maximum-weight basis $B_{i-1}$ containing $G_{i-1}$; one exists for $i=1$. If $g_i\\in B_{i-1}$, keep the basis. Otherwise $B_{i-1}\\cup \\{g_i\\}$ contains a unique fundamental circuit $C$. Because $G_i$ is independent, not every element of $C\\setminus \\{g_i\\}$ lies in $G_{i-1}$. Choose

$o\\in C\\setminus (G_{i-1}\\cup \\{g_i\\})$.

Then $B_i=(B_{i-1}\\setminus \\{o\\})\\cup \\{g_i\\}$ is a basis. The element $o$ could not have been processed before $g_i$: at that earlier time the greedy prefix was a subset of $G_{i-1}\\subseteq B_{i-1}$, so adding $o\\in B_{i-1}$ would have remained independent and greedy would have accepted it, contradicting $o\\notin G_{i-1}$. The scan order is nonincreasing in weight, hence $w(g_i)\\ge w(o)$. Therefore the replacement does not lower basis weight; because $B_{i-1}$ was already maximum-weight, $B_i$ is too. Induction gives a maximum-weight basis containing all of $G_k$. Both are bases of the restriction, so they are equal. Consequently greedy has maximum weight among all independent sets. ∎

For the **maximum-weight basis** problem, do not skip negative elements: continue until a basis is formed. All bases have the same cardinality, and the standard exchange proof works for arbitrary real weights. These two objective contracts must not be conflated.

### Converse characterization {#section-201-converse-characterization}

If descending greedy produces a maximum-weight basis for every weight assignment on an independence system whose maximal sets are treated as bases, then the system must satisfy exchange. If exchange fails for $I,J$ with $|I|<|J|$, assign slightly larger weights to elements of $I$, slightly smaller positive weights to $J\\setminus I$, and zero elsewhere. Greedy becomes stuck at $I$, while $J$ has larger total under a suitable gap choice. Thus universal greedy correctness characterizes matroids rather than generic hereditary families.

## 7. Deletion, contraction, and duality {#section-205-7-deletion-contraction-and-duality}

For $e\\in E$, **deletion** $M\\setminus e$ removes $e$ and keeps independent sets avoiding it. **Contraction** $M/e$ treats $e$ as already used; for a nonloop $e$, a set $I\\subseteq E\\setminus \\{e\\}$ is independent in $M/e$ when $I\\cup \\{e\\}$ is independent in $M$. Rank gives the uniform definition

$r_{M/e}(A)=r_M(A\\cup \\{e\\})-r_M(\\{e\\})$.

A **minor** is obtained by sequences of deletions and contractions. In a graphic matroid these operations correspond to graph edge deletion and contraction, with loop conventions handled at the matroid level.

The **dual matroid** $M^{*}$ has bases $E\\setminus B$ as $B$ ranges over bases of $M$. Its rank is

$r^{*}(A)=|A|-r(E)+r(E\\setminus A)$.

Duality swaps deletion and contraction, loops and coloops, and circuits with cocircuits. For a connected plane graph under a fixed embedding, the graphic matroid of the planar dual graph realizes the dual of the original graphic matroid. This analogy has limits: not every matroid is graphic, and a nonplanar graph has no plane dual graph of this kind even though its matroid dual still exists.

## 8. Graphic examples: cycles, cuts, and spanning trees {#section-219-8-graphic-examples-cycles-cuts-and-spanning-trees}

Take a triangle $ABC$ plus a tail edge $CD$. The graphic matroid has four ground elements. Rank is three: a spanning tree uses three edges. The unique circuit is the triangle. The tail is a **coloop**, appearing in every basis, because removing it disconnects vertex $D$ from every spanning forest of full rank.

If $A=\\{AB,BC\\}$, then $\\operatorname{cl}(A)$ also contains $CA$, because endpoints $C,A$ are already connected through $C-B-A$; adding $CA$ creates the circuit. It does not contain $CD$, which increases rank by attaching a new vertex component.

This example separates graph-stable independence from graphic matroid independence. The ground elements here are edges, and feasibility means acyclicity—not disjointness and not absence of adjacent endpoints.

## 9. Extremal proof architectures beyond one theorem {#section-227-9-extremal-proof-architectures-beyond-one-theorem}

### Averaging and local improvement {#section-229-averaging-and-local-improvement}

A global density bound often forces a high-degree vertex or a dense neighborhood. Remove or condition on that vertex, apply induction to the remainder, and account for what was lost. The load-bearing step is a correct relation between the forbidden configuration in the original object and in the reduced one.

### Symmetrization {#section-233-symmetrization}

In forbidden-clique problems, one may replace nonadjacent vertices by twins with identical neighborhoods when this does not create the forbidden clique and does not lower edge count. Repeating the operation pushes an extremizer toward a complete multipartite graph. A full proof must define a terminating potential and analyze equality; “make vertices more similar” is only a heuristic.

### Compression in set systems {#section-237-compression-in-set-systems}

For a family of $k$-subsets, a shift may replace a larger label by a smaller missing label. Properly defined shifts preserve family size and often preserve an intersection prohibition while moving the family toward a canonical form. Again, preservation is a theorem to prove for the specific property.

### Probabilistic deletion {#section-241-probabilistic-deletion}

Randomly sample elements, count forbidden patterns, and delete one member of each. The expected surviving objective gives a lower bound. Dependencies between bad events matter for sharper tools, but not for linearity of the first-moment calculation.

These architectures are transferable, but none automatically solves an arbitrary extremal problem.

## 10. Ramsey and Turán questions ask opposite-sounding things {#section-247-10-ramsey-and-tur-n-questions-ask-opposite-sounding-thi}

Turán-type problems maximize density while forbidding a fixed configuration. Ramsey-type problems show that sufficiently large structures cannot avoid all configurations in a list. The complement connects them: a red-blue coloring of $K_n$ is a graph and its complement.

For diagonal Ramsey lower bounds, independent random edge colors give expected monochromatic $K_k$ count

$\\binom{n}{k}2^{1-\\binom{k}{2}}$.

When this is below one, an avoiding coloring exists. The calculation establishes a sufficient numerical condition, not the exact value of $R(k,k)$. More advanced local-dependence and alteration methods improve ranges, but require explicit dependency graphs and probability bounds absent from this seed.

## 11. Exact small-instance certificates {#section-257-11-exact-small-instance-certificates}

Bounded exhaustive computation is especially useful for matroids because axioms are finite.

For ground size at most $10$, one can enumerate all subsets and report:

- the full independent-set family;
- heredity violations;
- the first exchange witness $(I,J)$;
- maximal sets and their sizes;
- rank of every subset;
- minimal dependent sets;
- greedy trace and exhaustive weighted optimum;
- complements of bases for dual data.

The calculation should use a canonical code-unit order and exact integer or rational weights. Locale-sensitive sorting, nondeterministic iteration, or silent floating tolerance would weaken reproducibility. For circuit claims in an unaudited system, test every proper subset; checking only immediate deletions assumes heredity.

An exact table proves the result for the displayed finite instance. It does not prove that an oracle-defined family on larger grounds is a matroid or that a representation theorem holds in general.

## 12. Limits of analogy and claim boundaries {#section-276-12-limits-of-analogy-and-claim-boundaries}

- Matroid independence abstracts exchange, not every use of the word “independent.”
- Matroid rank resembles dimension but need not arise from vectors over any field.
- A graphic matroid forgets graph vertices and some graph distinctions; nonisomorphic graphs can have closely related cycle matroids.
- Duality exists for every matroid, but planar graph duality needs an embedding.
- Greedy solves linear weight optimization over a matroid, not arbitrary nonlinear objectives or intersections of several matroids.
- An integrality or optimization analogy does not authorize operations-research scheduling, logistics, or finance claims.
- Extremal equality, stability, enumeration, and efficient construction are separate achievements.

## 13. Worked reference exercises {#section-286-13-worked-reference-exercises}

### Exercise 1: partition exchange {#section-288-exercise-1-partition-exchange}

Prove the capacity definition of a partition matroid satisfies augmentation.

**Solution.** Let independent $I,J$ satisfy $|I|<|J|$. Summing block counts, some block $E_t$ has $|I\\cap E_t|<|J\\cap E_t|$. Choose $e\\in (J\\cap E_t)\\setminus I$. Because $J$ is independent, $|J\\cap E_t|\\le c_t$, hence adding $e$ leaves $I$ with at most $c_t$ elements in that block. Other block counts do not change, so $I\\cup \\{e\\}$ is independent.

### Exercise 2: rank detects a circuit {#section-294-exercise-2-rank-detects-a-circuit}

Let $C$ be a circuit. Prove $r(C)=|C|-1$ and $r(C\\setminus \\{e\\})=r(C)$ for every $e\\in C$.

**Solution.** Every proper subset of $C$ is independent, so $C\\setminus \\{e\\}$ has rank $|C|-1$. The dependent set $C$ cannot have rank $|C|$, while it contains the independent $( |C|-1 )$-set, so its rank is $|C|-1$ as well.

### Exercise 3: dual of a uniform matroid {#section-300-exercise-3-dual-of-a-uniform-matroid}

Show $U_{r,n}^{*}=U_{n-r,n}$.

**Solution.** Bases of $U_{r,n}$ are all $r$-subsets. Their complements are exactly all $(n-r)$-subsets, which are the bases of $U_{n-r,n}$. A matroid is determined by its bases, giving the identity.

### Exercise 4: negative weights and objective scope {#section-306-exercise-4-negative-weights-and-objective-scope}

In $U_{2,3}$, let weights be $-1,-2,-3$. What are the optimum independent set and optimum basis?

**Solution.** The empty set is independent and has weight $0$, exceeding every nonempty independent set, so it is the maximum-weight independent set. Every basis has two elements; the least negative pair is $\\{-1,-2\\}$ with total $-3$, so that is the maximum-weight basis. A greedy independent-set rule must skip negative elements; a greedy basis rule must continue until rank two.

### Exercise 5: a graphic closure {#section-312-exercise-5-a-graphic-closure}

In a square with diagonal $AC$, let $A_0=\\{AB,BC\\}$. Compute closure in the graphic matroid.

**Solution.** Edges whose endpoints are already connected by $A_0$ are $AB$, $BC$, and $AC$; adding $AC$ creates triangle $ABC$ and does not raise rank. Edges $CD$ and $DA$ attach vertex $D$ to the existing component and raise rank. Thus $\\operatorname{cl}(A_0)=\\{AB,BC,AC\\}$.

## Reference summary {#section-318-reference-summary}

Matroids are precisely independence systems with augmentation. Exchange forces equal-size bases, submodular rank, circuit elimination, closure, duality, and universal linear-weight greedy behavior under the correct objective contract. Graphic and linear examples motivate the theory, while stable sets and matchings mark its boundary. Extremal methods—averaging, symmetrization, compression, and probability—supply proof architectures rather than automatic answers. Exact finite engines are strongest when they emit witnesses and certificates and weakest when their tested range is disguised as general proof.

## Continue through the discrete shelf {#section-322-continue-through-the-discrete-shelf}

Build or repair foundations with the self-contained [Proof, Counting, and Structure](#/item/book-discrete-mathematics-proof-counting-structure) first course, test independence, rank, and greedy behavior in the [Independence and Extremal Structures Explorer](#/labs?lab=visual-lab-discrete-independence-extremal), and follow the advanced route through the [extremal and matroid methods deep dive](#/item/deep-dive-discrete-extremal-matroid-methods).

`;export{e as default};