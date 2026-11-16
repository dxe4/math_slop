
# Six Structural Investigations

A structural investigation is neither a worksheet nor an invitation to press buttons until a pattern looks convincing. It is a small research contract. The question is precise, the instance domain is finite, every transformation preserves stated data, and the output contains enough evidence for an independent reader to verify the conclusion.

This chapter specifies six investigations joining the book’s main themes: axiom systems, graphic and cographic structure, representability, compression, minors and duality, and greedy optimization. Each can become a computational notebook, command-line program, or interactive laboratory, but the mathematical deliverable is independent of an interface. Every visualization must be accompanied by a text or exact numerical alternative.

## Prerequisites and common protocol

We assume the preceding chapters on matroid cryptomorphisms, circuits and duality, graphic and cographic matroids, field representations, extremal set systems and incidence structures, greedy objectives, and exact enumeration. All ground sets are finite and labeled $E=\{0,\ldots ,n-1\}$. Subsets use integer bit masks. Rational numbers are stored as reduced numerator–denominator pairs; finite-field calculations name the prime field and reduce exactly.

Every investigation submission must contain five artifacts:

1. **Specification record:** bounds, input grammar, ordering conventions, and claim being tested.
2. **Exact result:** deterministic machine-readable data, plus a human-readable table.
3. **Certificate bundle:** witnesses for rejection and exhaustive traces or independently checkable identities for acceptance.
4. **Proof note:** a mathematical argument for coverage and predicate correctness, separate from program comments.
5. **Reflection:** one proposed generalization, clearly labeled theorem, conjecture, question, or failed conjecture.

Use sorted labels and lexicographic tie-breaking throughout. An empty output is meaningful only when accompanied by a coverage count. Randomized discovery may precede the final run, but submitted conclusions must be reproduced by a deterministic exact procedure.

## Investigation 1: A canonical atlas of small matroids

### Research question

How do labeled counts, isomorphism types, automorphism groups, loops, parallel classes, and duality distribute among matroids on a small ground set?

### Exact inputs

- an integer $n$ with $0\le n\le 7$;
- optional rank set $R\subseteq \{0,\ldots ,n\}$, defaulting to all ranks;
- enumeration mode `bases` or `independent_sets`;
- a declared serialization order for subsets and families.

The required core run is $n\le 5$; $n=6$ or $7$ is an extension only if resources permit. The bases mode scans each rank and enumerates candidate subfamilies of $\binom{E}{r}$ with mathematically justified pruning. The independent-sets mode is a reference run for $n\le 4$.

### Required outputs

For every canonical representative, print:

- canonical basis-family string and one labeled representative;
- rank, numbers of loops and coloops, parallel and coparallel class sizes;
- number of bases, circuits, flats, and hyperplanes;
- automorphism-group size and orbit size $n!/|Aut(M)|$;
- the canonical identifier of its dual;
- canonical identifiers of every one-element deletion and contraction.

The summary table gives labeled and unlabeled totals by rank. A checksum sums orbit sizes and compares the result with the direct labeled total.

### Proof obligations

Prove that the generator covers every candidate basis family in each rank, that the basis predicate is exactly exchange plus nonempty equicardinality, and that the canonicalizer scans every permutation. Prove that each reported invariant is invariant under relabeling. Verify duality in three ways: complementary bases, the dual-rank formula, and involution of canonical identifiers.

### Text alternative

The canonical string, invariant row, dual/minor adjacency lists, and aggregate count tables are the primary output. A graph of isomorphism types may supplement them, but position, shape, and color encode no fact unavailable in the tables.

### Worked mini-audit: $n=2$

**Worked example (The two-element matroid classification).**

There are five labeled matroids. They are: rank zero; rank one with only $0$ a nonloop; rank one with only $1$ a nonloop; rank one with both elements nonloops; and rank two. The middle two are isomorphic, so there are four isomorphism types. Rank zero and rank two are dual. The rank-one matroid with two parallel nonloops is self-dual, as is the type with one loop and one coloop; the latter has two labelings. Orbit sizes $1,1,2,1$ sum to five. Checking complementary bases verifies each dual statement without relying on an informal name.

## Investigation 2: Graphic and cographic witness laboratory

### Research question

For bounded graphs, how do cycles, bonds, spanning forests, deletion, contraction, and planar duality reproduce matroid circuits and cocircuits?

### Exact inputs

- a finite undirected multigraph with vertex labels $0,\ldots ,v-1$, edge labels $0,\ldots ,m-1$, $v\le 7$, $m\le 10$;
- loops and parallel edges explicitly allowed;
- an optional rotation system giving the cyclic order of edge ends around each vertex;
- a candidate edge set or a requested operation sequence of deletions and contractions.

An input parser must retain edge labels. For planar-duality claims, a rotation system and a certified cellular embedding are required; a drawing alone is not an input certificate.

### Required outputs

List connected components, rank $v-c$, every spanning forest, every cycle circuit, and every bond cocircuit. For each operation, output the resulting labeled graph and compare its graphic matroid with matroid deletion or contraction. When a cellular plane embedding is supplied, construct the face-dual multigraph and print the edge-label correspondence demonstrating $M(G^{*})=M(G)^{*}$.

For a candidate set $X$, report whether it is independent, spanning, a circuit, a cocircuit, or none, with a forest/path or cut-partition certificate. Parallel edges must produce two-edge cycles; graph loops produce one-element matroid circuits; bridges produce one-element cocircuits.

### Proof obligations

Prove that the cycle lister returns exactly minimal dependent edge sets and the bond lister exactly minimal nonempty cuts. Justify the rank formula componentwise. For contraction, specify how graph loops created by contraction are retained, and treat contraction of an edge that was already a graph loop as deletion, in agreement with matroid contraction of a loop. A planar-duality conclusion must prove that every primal cycle corresponds to a dual bond under the common edge labels, not merely show matching counts.

### Text alternative

Provide an edge table $(label,endpoints)$, component partitions, sorted circuit and cocircuit lists, operation log, and—when present—a face-boundary table. Highlighting a drawing is optional; the cut partitions and edge labels are complete nonvisual witnesses.

### Worked mini-audit: a triangle with a pendant edge

**Worked example (Triangle and pendant-edge operations).**

Let edges $0=01$, $1=12$, $2=20$, and $3=23$. The graph is connected on four vertices, so rank is three. Its sole cycle circuit is $\{0,1,2\}$. Edge $3$ is a bridge, hence $\{3\}$ is a cocircuit and belongs to every spanning tree. The spanning trees are $\{0,1,3\}$, $\{0,2,3\}$, and $\{1,2,3\}$. Deleting $3$ leaves a triangle plus isolated vertex; matroid rank falls from three to two. Contracting $3$ identifies vertices $2,3$ and retains the same triangle matroid on labels $0,1,2$. These lists can be verified without a picture.

## Investigation 3: Field-sensitive incidence and representation audit

### Research question

Which dependencies of a bounded integer matrix survive reduction over selected fields, and how do incidence configurations expose representability limits?

### Exact inputs

- an integer $d\times n$ matrix with $d\le 6$, $n\le 10$, and labeled columns;
- the fields $Q$ and prime fields $F_p$ for a supplied list of primes $p\le 31$;
- optional proposed circuit, basis, dual-representation, or incidence-block data;
- a bound on determinant and rational numerator sizes for output protection, without replacing exact arithmetic.

The program rejects composite moduli mislabeled as fields. Repeated and zero columns remain separately labeled.

### Required outputs

For each field, print rank, bases, circuits with one normalized full-support kernel vector, loops, parallel classes, closure table, and canonical matroid identifier. Group fields that produce the same labeled matroid. Print every nonzero integer square minor, grouped by its row and column labels, together with its prime divisors; then explain each change through minors that vanish modulo $p$. For a large bounded table, a digest may accompany the artifact, but it may not replace the exact machine-readable minor list.

If a proposed dual matrix is supplied, verify row-space orthogonality and complementary bases. If incidence blocks are supplied, print point replication counts, block sizes, pair co-occurrence counts, and the rank of the incidence matrix in each field.

### Proof obligations

Prove that exact elimination computes the named field rank and that minimal dependent supports are exhaustively extracted. Relate each field change to at least one determinant or exact dependence certificate. Do not infer nonrepresentability of an abstract matroid merely because one attempted matrix fails. A genuine nonrepresentability claim needs a theorem or exhaustive representation domain whose coverage is proved.

### Text alternative

Use a field-by-field table, sorted basis/circuit lists, normalized kernel coefficients, and a determinant-divisibility table. A colored “field map” may summarize equivalence classes only if the table also names every class.

### Worked mini-audit: four directions

**Worked example (Four directions over named fields).**

For columns $(1,0),(0,1),(1,1),(1,-1)$, all $2\times 2$ determinants are $\pm 1$ except the last pair, whose determinant is $-2$. Over $Q$, $F_3$, and $F_5$, every pair is a basis and the matroid is $U(2,4)$. Over $F_2$, the last two columns coincide, producing circuit $\{2,3\}$; triples containing that pair are not circuits because they contain a smaller dependence. The determinant table predicts the only exceptional prime. It does not assert that $F_2$ is the only field over which $U(2,4)$ lacks some representation; the direction-count argument supplies that stronger conclusion.

## Investigation 4: Compression, shadows, and equality cases

### Research question

How do elementary shifts alter a uniform set family while preserving its size, and what exact data explain changes in its lower shadow and intersection structure?

### Exact inputs

- integers $n\le 12$ and $0\le k\le n$;
- a family $A\subseteq \binom{[n]}{k}$ of distinct bit masks;
- an ordered list of shifts $S_ij$ with $0\le i<j<n$;
- an optional intersection threshold $t$ or forbidden configuration expressed as a finite family predicate.

For $A\in A$, define $S_ij(A)$ by replacing $j$ with $i$ when $j\in A$, $i\notin A$, and the replacement is not already in the family; otherwise retain $A$. Apply the shift simultaneously according to this membership rule so two sets never collapse.

### Required outputs

After every shift, print the family size, sorted members, lower shadow $\partial A$, upper shadow if requested, degree sequence, and distribution of pairwise intersection sizes. Record moved pairs $(old,new)$. At termination, certify that every requested shift fixes the family.

For a stated property such as pairwise $t$-intersection, report before-and-after truth and a witness pair if it fails. For a proposed shadow inequality, give exact left and right integers and classify equality examples only within the declared finite domain.

### Proof obligations

Prove the simultaneous shift preserves cardinality: a replaced set moves only when its image was absent, while an image already present causes the original to remain. Prove preservation of the selected property or explicitly report that no preservation theorem is being claimed. Termination follows from strict decrease of $\sum _{A\in A} \sum _{a\in A} a$ whenever any set moves. For exhaustive equality classification, prove coverage of every $k$-uniform family of the specified size up to the stated equivalence.

### Text alternative

Print each family as sorted tuples, the complete move log, all shadow members, and intersection histograms. A Boolean-lattice diagram is supplementary and must not be the sole evidence of containment.

### Worked mini-audit

On $[4]=\{0,1,2,3\}$, let $A=\{\{1,2\},\{1,3\}\}$ and apply $S_01$. The image of $\{1,2\}$ is $\{0,2\}$, absent from $A$, so it moves. The image of $\{1,3\}$ is $\{0,3\}$, also absent, so it moves. The output is $\{\{0,2\},\{0,3\}\}$, still of size two. The lower shadow changes from $\{\{1\},\{2\},\{3\}\}$ to $\{\{0\},\{2\},\{3\}\}$, retaining size three. The two members intersect in one point before and after. The weight sum decreases from $7$ to $5$, certifying progress toward a shifted family.

## Investigation 5: Minor-minimal counterexample forge

### Research question

Given a precisely testable property of matroids, can a bounded atlas find and certify smallest or minor-minimal failures, while correctly distinguishing those conclusions?

### Exact inputs

- canonical representatives from Investigation 1 on $n\le 7$;
- a total, isomorphism-invariant Boolean predicate $P(M)$ expressed using exact ranks, bases, circuits, closures, field representations from a bounded list, or a supplied finite forbidden pattern; a label-sensitive predicate instead requires enumeration of every labeled object and may not be tested only on canonical representatives;
- a declaration whether $P$ is known or merely being tested to be minor-closed and dual-closed;
- deterministic ordering of elements and of delete/contract reductions.

Example predicates include “every circuit has at most $k$ elements,” “the matroid is binary according to an exhaustive matrix-representation domain,” or “the basis graph is bipartite.” The last is a deliberately risky conjecture, not an assumed theorem.

### Required outputs

List every failing canonical type at every fully completed ground-set size up to the maximum bound, then classify failures by minimum ground-set size. For each selected failure, repeatedly delete or contract an element when the result still fails, printing the entire reduction path. An endpoint for which every single deletion and contraction passes is only **one-step-minimal** in general. To call it minor-minimal, either check every proper minor reachable by every operation sequence, or prove that the passing class is minor-closed; under that extra theorem, the $2n$ one-step checks imply that all further minors pass. Print whichever evidence applies.

Separately test whether any passing object has a failing minor and whether duality changes truth. Such a witness refutes minor-closure or dual-closure. Output “no bounded witness” rather than “proved minor-closed” when only the atlas was searched.

### Proof obligations

Prove predicate termination and canonical-atlas coverage. Recheck every minor after canonicalization rather than relying on inherited identifiers. Distinguish:

- minimum order within the searched domain;
- locally one-step-minimal failure;
- genuinely minor-minimal failure;
- globally excluded minor for a known minor-closed class.

The first and local one-step claims follow directly from the corresponding bounded checks. Genuine minor-minimality requires all proper-minor checks or the minor-closure argument above. Calling an object a globally excluded minor additionally requires a proved minor-closed class and the exact class boundary. If a representation predicate scans matrices, prove that its finite matrix domain covers all relevant representations or weaken the claim accordingly.

### Text alternative

The reduction tree is printed as rows $(parent, operation, child, P(child), certificate-id)$. Endpoint tables list all deletion and contraction outcomes. A node-link diagram is optional.

### Worked mini-audit: circuit-size property

Fix $k\ge 1$, and let $P_k(M)$ mean every circuit has size at most $k$. For $M=U(k,k+1)$, the full ground set is its only circuit and has size $k+1$, so $P_k$ fails. Deleting an element gives $U(k,k)$, which has no circuits. Contracting any element gives $U(k-1,k)$, whose unique circuit has size $k$, so it passes. Moreover, $P_k$ is minor-closed: deletion retains circuits avoiding the deleted element, while each contraction circuit is minimal among sets obtained by removing the contracted element from a circuit. Thus the one-step checks imply every proper minor passes, and $U(k,k+1)$ is minor-minimal for failure of $P_k$. This does not imply that these are all excluded minors for the property.

## Investigation 6: Synthesize and break greedy rules

### Research question

How exactly does exchange govern greedy optimization, and can bounded counterexample synthesis distinguish matroids from nearby hereditary systems?

### Exact inputs

- an independence family on $n\le 10$, supplied as maximal feasible sets or all feasible masks;
- an integer or rational weight vector with a declared total tie order;
- optional mode `search`, which enumerates hereditary nonmatroids on $n\le 6$ and constructs weights from the first augmentation witness;
- optional cardinality target or truncation rank.

Greedy scans elements in nonincreasing weight order, accepting an element exactly when the enlarged set belongs to the family. Negative weights require a declared policy: for maximum-weight independent sets of unrestricted size, stop before negative weights; for bases, continue until maximal. The two objectives must not be conflated.

### Required outputs

Print the recognition result, any augmentation certificate, ordered element trace, accepted/rejected decision with membership reason, greedy value, an exhaustively optimal feasible set with value, and their rational gap. In search mode, also print the canonical hereditary system and prove that every smaller canonical system in the searched ordering lacks the requested type of failure if “first” or “smallest” is claimed.

For matroid inputs, run all integer weights in a declared box such as $\{-2,-1,0,1,2\}^n$ and compare greedy with exhaustive optimum under the selected objective. This proves only the bounded weight assertion; the greedy theorem supplies the universal conclusion.

### Proof obligations

Prove that exhaustive optimization scans every feasible set. For synthesized weights, verify the rational inequality from the augmentation witness. Explain tie handling and show that the reported bad order respects nonincreasing weights. If every bounded weight passes on a nonmatroid, do not infer universal greedy correctness; invoke the augmentation construction or enlarge the logically relevant search.

### Text alternative

The principal artifact is a trace table with columns `step, element, weight, candidate set, feasible?, action, running value`, followed by the exhaustive optimum table and exact gap. An animated greedy path is optional and must respect reduced-motion preferences.

### Worked mini-audit

Let maximal feasible sets be $\{0,1\}$ and $\{2,3\}$. The augmentation witness $I=\{0\}$, $J=\{2,3\}$ yields weights $w_0=3/2$, $w_2=w_3=1$, and $w_1=0$, in order $0,2,3,1$. Greedy accepts $0$; it rejects $2$ and $3$ because neither $\{0,2\}$ nor $\{0,3\}$ is feasible; it may accept $1$ at zero weight. Its value is $3/2$. Exhaustive search returns $\{2,3\}$ with value $2$, gap $1/2$. Every decision is checkable from the two maximal sets.

## 7. The capstone project: a reproducible structural atlas

Complete one investigation deeply or connect at least three around one mathematical question. Suitable capstones include tracking a small matroid through canonicalization, graphic realization, field representations, all proper minors, and greedy trials; or studying a shifted incidence family and the matroids represented by its incidence matrices over several fields.

### Milestones

**Milestone 1 — claim design.** State one bounded theorem to establish and one conjecture to explore. Examples: “Every rank-two matroid on at most six elements in our atlas is classified by loop and parallel-class data” is a bounded theorem; “a particular invariant predicts binary representability” is initially a conjecture.

**Milestone 2 — reference kernel.** Implement masks, exact family validation, deterministic serialization, and certificate verification. Write unit examples before optimizing enumeration.

**Milestone 3 — dual implementations.** Compute one central object in two ways: ranks from independent sets and from bases, circuits from minimal dependence and from rank drops, or duals from complementary bases and the dual-rank formula.

**Milestone 4 — full run.** Freeze bounds and record candidate counts at every filter. Save canonical outputs and certificate bundles. A run that exceeds resources must report the last fully completed bound; partial absence is not a result.

**Milestone 5 — mathematical report.** Prove coverage and predicate equivalence, explain two representative certificates, state the exact boundary of every conclusion, and include the full text alternative.

### Evaluation rubric

- **30% mathematical correctness:** axiom contracts, proofs, and claim boundaries.
- **20% exactness and reproducibility:** deterministic inputs, arithmetic, ordering, and counts.
- **20% certificate quality:** independently checkable positive and negative evidence.
- **15% structural synthesis:** meaningful use of at least three book themes.
- **10% accessibility:** readable tables and explanations independent of color, motion, or graphics.
- **5% reflection:** a well-classified theorem, conjecture, failed conjecture, or open question.

A large run does not compensate for a missing proof of coverage. A polished visualization does not compensate for an absent certificate.

## 8. Preparation exercises with solutions

### Exercise 1: write an exact input grammar
<a id="structural-investigations-ex-1"></a>

Specify a minimal machine-readable input for the triangle-with-pendant graph in Investigation 2, retaining labels and allowing parallel edges.

<details>
<summary>Hint 1</summary>

**Hint.** Specify vertices separately from an ordered list of labeled edge records.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each edge record needs its own label and two endpoints; repeated endpoint pairs must remain legal.

</details>

<details>
<summary>Solution</summary>

**Solution.** One sufficient record is

```text
vertices: [0,1,2,3]
edges: [(0,0,1),(1,1,2),(2,2,0),(3,2,3)]
```

Each edge triple is $(label,endpoint,endpoint)$. A list rather than an endpoint-keyed set permits repeated endpoint pairs, so parallel edges survive. Equal endpoints encode loops. The declared order fixes deterministic serialization.

</details>

### Exercise 2: audit an orbit checksum
<a id="structural-investigations-ex-2"></a>

An $n=3$ atlas reports canonical representatives with automorphism-group sizes $6,2,2,6$ and claims these four types cover twelve labeled objects. Check the claim.

<details>
<summary>Hint 1</summary>

**Hint.** Compute each orbit size as $3!$ divided by the supplied automorphism-group size.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add the resulting orbit sizes and compare with twelve, without assuming which reported component is wrong.

</details>

<details>
<summary>Solution</summary>

**Solution.** Orbit sizes are $6/6=1$, $6/2=3$, $6/2=3$, and $6/6=1$, summing to eight, not twelve. Either representatives are missing, group sizes are wrong, or the labeled total is wrong. The checksum detects inconsistency without identifying which component failed.

</details>

### Exercise 3: certify a bond
<a id="structural-investigations-ex-3"></a>

In the triangle-with-pendant graph, prove $\{3\}$ is a bond using a cut partition and minimality.

<details>
<summary>Hint 1</summary>

**Hint.** Use the cut separating the pendant vertex from the triangle.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its only crossing edge is the pendant edge, and a singleton nonempty cut has no smaller nonempty edge subset.

</details>

<details>
<summary>Solution</summary>

**Solution.** Partition vertices as $\{3\}$ and $\{0,1,2\}$. Exactly edge $3=23$ crosses, so $\{3\}$ is a nonempty cut. Removing its only edge from the set gives the empty set, not a nonempty cut; hence the cut is inclusion-minimal and therefore a bond. Equivalently, deleting edge $3$ increases the number of graph components.

</details>

### Exercise 4: normalize a finite-field circuit vector
<a id="structural-investigations-ex-4"></a>

Over $F_3$, columns $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ are dependent. Find a normalized full-support kernel vector whose first nonzero entry is one.

<details>
<summary>Hint 1</summary>

**Hint.** Write two coordinate equations for the three kernel coefficients.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Set the first coefficient to one, solve in $F_3$, and verify that every pair of columns stays independent.

</details>

<details>
<summary>Solution</summary>

**Solution.** We need $\alpha a+\beta b+\gamma c=0$, so $\alpha +\gamma =0$ and $\beta +\gamma =0$. Set $\alpha =1$; then $\gamma =-1=2$ and $\beta =1$. Thus $(1,1,2)$ is normalized and all entries are nonzero. Every pair of columns is independent, so the support $\{a,b,c\}$ is a circuit.

</details>

### Exercise 5: prove shift termination
<a id="structural-investigations-ex-5"></a>

Why does repeatedly applying a shift that moves at least one set terminate?

<details>
<summary>Hint 1</summary>

**Hint.** Use an integer potential that measures how far to the right all labels lie.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A genuine $j$-to-$i$ move with $i<j$ strictly decreases the total sum of labels.

</details>

<details>
<summary>Solution</summary>

**Solution.** Define the nonnegative integer potential $Φ(A)=\sum _{A\in A}\sum _{a\in A}a$. A shift $S_ij$ with $i<j$ replaces $j$ by $i$ in each moved set, decreasing its contribution by $j-i>0$; unchanged sets preserve their contribution. Thus any nontrivial shift strictly decreases $\Phi$. A strictly decreasing sequence of nonnegative integers is finite, so repeated shifts terminate.

</details>

### Exercise 6: separate three minimality claims
<a id="structural-investigations-ex-6"></a>

A seven-element failure contracts to a five-element failure whose every one-element deletion and contraction passes. What may be claimed?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish immediate minors from all proper minors and from every smaller-order object.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Passing every one-element operation proves only the stated local minimality unless closure or further coverage is supplied.

</details>

<details>
<summary>Solution</summary>

**Solution.** From the stated evidence alone, the endpoint is one-step-minimal: every deletion and contraction by one element passes. A more distant proper minor could fail after an intermediate passing minor, so genuine minor-minimality requires checking all proper minors or proving that the passing property is minor-closed. It is not necessarily the unique or smallest-order failure unless all smaller atlas entries were tested. It is not an excluded minor for a class unless that class boundary and minor-closure are proved as well.

</details>

### Exercise 7: handle negative weights
<a id="structural-investigations-ex-7"></a>

Let $U(2,3)$ have element weights $(3,-1,-5)$. Explain why greedy objectives need a policy.

<details>
<summary>Hint 1</summary>

**Hint.** Specify whether rank completion is required before deciding what to do with a negative weight.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The optional optimum may stop at the positive singleton, while a basis still needs a second element.

</details>

<details>
<summary>Solution</summary>

**Solution.** For maximum-weight independent set of unrestricted size, after accepting the element of weight $3$, greedy should stop before negative weights; the singleton is feasible, and adding either remaining element decreases value. For a maximum-weight basis of $U(2,3)$, it must add a second element, preferring $-1$ to $-5$, and obtains value $2$. Both are valid optimization problems but have different feasible requirements. A trace that silently continues cannot claim to solve the unrestricted problem.

</details>

### Exercise 8: formulate a text alternative
<a id="structural-investigations-ex-8"></a>

A display colors circuits red and cocircuits blue. Give a sufficient nonvisual output for a four-element example.

<details>
<summary>Hint 1</summary>

**Hint.** Provide labelled sets and explicit membership data rather than relying on blended colors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The self-dual example $U(2,4)$ has the same four triples as circuits and cocircuits; retain both classifications.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $U(2,4)$ and print two labeled lists. Its circuits are all four three-element subsets of $\{0,1,2,3\}$, and its cocircuits are also all four three-element subsets because the dual is again $U(2,4)$. Follow them with a table having one row per subset and Boolean columns $is circuit$ and $is cocircuit$. The labels and headers encode the distinction without color. Each three-element subset belongs to both lists, so both entries remain true rather than relying on a blended color.

</details>

### Exercise 9: reject an overclaim about representations
<a id="structural-investigations-ex-9"></a>

A search checks every $3\times 7$ binary matrix and finds no representation of matroid $M$. What must be shown before concluding $M$ is not binary representable?

<details>
<summary>Hint 1</summary>

**Hint.** A search over three-row matrices is complete only after bounding the needed row dimension.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Also account for zero columns, repeated columns, all label assignments, and any quotient used to reduce the search.

</details>

<details>
<summary>Solution</summary>

**Solution.** First show $r(M)\le 3$ or reduce every binary representation to three rows without changing column dependencies; if $r(M)=3$, row reduction permits a full-row-rank $3\times 7$ representation. The search must include all labeled columns, including zero and repeated columns, or prove they are impossible from $M$. It must exhaust all $2^21$ matrices or a quotient whose coverage is proved, and its representation predicate must compare exactly the independent families. Without these obligations, only the attempted matrices are ruled out.

</details>

### Exercise 10: design a dual cross-check
<a id="structural-investigations-ex-10"></a>

Give two independent procedures for checking the dual of an input matroid represented by bases.

<details>
<summary>Hint 1</summary>

**Hint.** Start one procedure from complementary bases and the other from the dual-rank formula.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The second procedure should reconstruct independent sets and then maximal members, so it compares the same labeled basis family.

</details>

<details>
<summary>Solution</summary>

**Solution.** Procedure one complements every basis in $E$, producing $B*=\{E-B:B\in B\}$. Procedure two computes rank $r$ from the bases, forms $r^{*}(X)=|X|-r(E)+r(E-X)$ for every subset, and declares $X$ independent in the dual when $r^{*}(X)=|X|$; its maximal independent sets are the second dual basis family. Equality of the two labeled families cross-checks complementary bases against the rank formula.

</details>

## 9. Submission checklist and synthesis

Before declaring an investigation complete, verify:

- the finite domain and every bound appear in the title or specification record;
- labeled equality and isomorphism are never interchanged;
- all arithmetic used in theorem claims is exact;
- each rejection has a local witness and each exhaustive acceptance has coverage counts;
- canonicalization, pruning, and minimization each have a proved contract;
- figures have complete tables or prose alternatives;
- empirical patterns beyond the bound are labeled conjectures;
- another reader can reproduce at least one mini-audit by hand.

Together, the six investigations form a structural atlas rather than six disconnected demonstrations. Enumeration supplies objects; graphic and matrix audits give realizations; compression transforms set systems; minors search for obstructions; greedy synthesis turns exchange failure into optimization failure. Their common language is a certificate: finite, exact, labeled evidence that connects computation back to proof.


## Sources for the expanded teaching

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

## Summary

The six investigations connect exact matroid recognition, graphic witnesses, field-sensitive representations, compression, minors, and greedy obstructions. Each task fixes input, output, proof obligations, and limits of its conclusions. The preparation exercises make those obligations concrete. The retained theorem-and-solution index is the next reference for dependencies, counterexamples, and cumulative solutions.


