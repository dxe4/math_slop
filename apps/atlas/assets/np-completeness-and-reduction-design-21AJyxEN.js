var e=`---
parent_id: book-automata-computability-complexity
chapter_id: np-completeness-and-reduction-design
title: "NP-Completeness and the Design of Reductions"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# NP-Completeness and the Design of Reductions {#section-1-np-completeness-and-the-design-of-reductions}

NP-completeness is a theory of efficiently checkable evidence and efficiently translated difficulty. It does not prove that no fast algorithm exists, and it does not mean “not polynomial.” This chapter establishes the verifier model, Cook–Levin architecture, canonical reductions, and a proof protocol that makes direction and encoding size impossible to hide.

<a id="section-3-1-verifiers-and-certificates"></a>
## 1. Verifiers and certificates {#section-5-1-verifiers-and-certificates}

A language $L$ lies in NP when a polynomial-time verifier $V$ and polynomial $p$ satisfy

$x \\in L \\iff \\exists y\\; (|y|\\le p(|x|) \\land V(x,y)=1)$.

For CLIQUE, certificate $y$ lists $k$ vertices and the verifier checks distinctness and every pairwise edge. For COMPOSITE, certificate is a nontrivial factor. The verifier definition says nothing about how to find a certificate.

$P \\subseteq NP$ because a polynomial decider can ignore an empty certificate. Whether containment is strict remains open.

<a id="section-13-2-hardness-and-completeness"></a>
## 2. Hardness and completeness {#section-15-2-hardness-and-completeness}

Language $B$ is NP-hard if every $A \\in NP$ has polynomial-time many-one reduction $A \\le_{p}  B$. It is NP-complete if it is both NP-hard and in NP.

To prove a new problem $B$ NP-complete:

1. prove $B \\in NP$ with an encoded certificate and runtime bound;
2. choose known NP-complete source $A$;
3. construct $f$ from instances of $A$ to instances of $B$;
4. prove $x \\in A \\iff f(x) \\in B$;
5. bound construction time and output length polynomially.

Reducing $B$ to known hard $A$ proves only that $B$ is no harder than $A$.

<a id="section-27-3-cook-levin-architecture"></a>
## 3. Cook–Levin architecture {#section-29-3-cook-levin-architecture}

The Boolean satisfiability problem SAT is NP-complete. Membership uses a truth assignment as certificate. For hardness, take an NP verifier computation on $(x,y)$ and construct a Boolean formula encoding an accepting tableau.

Variables describe, at each bounded time and tape location, the symbol, head position, and state. Clauses enforce exactly one local label, valid initialization with $x,y$, legal adjacent-time transitions, and an accepting state. Every constraint has polynomially many local instances because time and certificate length are polynomial. An accepting computation supplies a satisfying assignment; a satisfying assignment decodes to a legal accepting computation.

Cook–Levin is a compilation theorem from bounded computation to local constraints. It relies on a polynomial clock and tableau size, not unrestricted machine histories.

<a id="section-35-4-sat-to-3sat"></a>
## 4. SAT to 3SAT {#section-37-4-sat-to-3sat}

The SAT input above is an arbitrary Boolean formula, so first apply a linear-size Tseitin encoding. Introduce a fresh variable for each gate, add a constant number of CNF clauses enforcing equivalence between that variable and its gate, and assert the output variable. The CNF is equisatisfiable with the original formula and has linear size.

Then convert each long CNF clause $(l_1 \\lor ... \\lor l_k)$ to a chain of three-literal clauses using fresh variables. For example, for $k=4$ use

$(l_1 \\lor l_2 \\lor z) \\land (\\neg z \\lor l_3 \\lor l_4)$.

If an original literal is true, choose chain variables to satisfy the chain; conversely, if all original literals are false, the chain forces contradictory values along its links. One- and two-literal clauses can be padded by repeated literals. Map an empty clause to a fixed unsatisfiable 3CNF such as $(z\\lor z\\lor z)\\land(\\neg z\\lor\\neg z\\lor\\neg z)$; an empty conjunction is already satisfiable and can map to a fixed satisfiable 3CNF. The transformation grows linearly in total gate and literal occurrences.

Equisatisfiability is enough: the new formula need not have the same satisfying assignments over fresh variables.

<a id="section-47-5-3sat-to-clique"></a>
## 5. 3SAT to CLIQUE {#section-49-5-3sat-to-clique}

For formula with $m$ clauses, make one vertex for each literal occurrence. Connect vertices from different clauses exactly when their literals are not contradictory. Ask for clique size $m$.

A satisfying assignment selects one true occurrence per clause; selected vertices are mutually compatible. Conversely, an $m$-clique contains exactly one vertex from each clause and no complementary pair, so its selected literals extend to a consistent assignment satisfying every clause. The graph has at most $3m$ vertices and polynomially many edges.

<a id="section-53-6-clique-independent-set-and-vertex-cover"></a>
## 6. CLIQUE, independent set, and vertex cover {#section-55-6-clique-independent-set-and-vertex-cover}

For graph $G=(V,E)$, a set is a clique in $G$ iff it is independent in complement graph $\\overline{G}$. A set $S$ is independent iff $V\\setminus S$ is a vertex cover. Thus

$(G,k) \\in CLIQUE \\iff (\\overline{G},k) \\in INDEPENDENT-SET$

and $(G,k)$ is in independent set iff $(G,|V|-k)$ is in vertex cover. Each is a many-one equivalence with explicit parameter transformation.

<a id="section-61-7-weak-and-strong-numeric-hardness"></a>
## 7. Weak and strong numeric hardness {#section-63-7-weak-and-strong-numeric-hardness}

Reductions involving numbers must track binary length. A dynamic program polynomial in target value may be pseudopolynomial. Weak NP-hardness can coexist with such algorithms; strong NP-hardness persists when numeric magnitudes are polynomially bounded. Encoding qualifications are part of the theorem.

<a id="section-65-8-project-reduction-and-certificate-laboratory"></a>
## 8. Project: reduction and certificate laboratory {#section-67-8-project-reduction-and-certificate-laboratory}

**Brief.** Implement validated 3CNF input, the reduction to CLIQUE, a truth-assignment verifier, and a clique-certificate verifier using only the language runtime. Exhaust all assignments for small formulas and all $m$-vertex subsets of the generated graph. Confirm satisfiability iff the graph has an $m$-clique, then deliberately add edges between complementary occurrences and recover a smallest false-positive clique.

**Reference design.** Represent a literal as a signed nonzero integer and a clause as exactly three literals. Tag graph vertices by $(clauseIndex,literalIndex,literal)$. Add an edge only across clauses when the two signed literals are not negatives of one another. Reject duplicate or out-of-range certificate indices. Enumerate formulas by clause count and a bounded variable set; enumerate witnesses lexicographically so discrepancies are reproducible.

**Acceptance criteria.** Report input grammar, validation failures, graph size, tested instance bound, certificate checks, and shortest discrepancy from the mutant. Supply the two-direction proof in Section 5 independently of tests. Exhaustion proves only the finite generated suite; the construction proof covers every valid input.

<a id="section-73-9-claim-boundaries"></a>
## 9. Claim boundaries {#section-75-9-claim-boundaries}

- NP is nondeterministic polynomial time or polynomial verification, not “non-polynomial.”
- NP-hard problems need not themselves be decision problems or lie in NP.
- Completeness is relative to a reduction type.
- An optimization problem and its decision threshold version require an explicit relationship.
- $P \\ne  NP$ is not currently proved.
- Practical success on structured instances does not contradict worst-case hardness.


<a id="section-83-complete-cook-levin-compilation"></a>
## Complete Cook–Levin compilation {#section-85-complete-cook-levin-compilation}

The tableau paragraph above names the intended constraints. We now supply an explicit deterministic-verifier construction and its two directions. The input to SAT is a finite Boolean formula; SAT is in NP because an assignment to its finitely many occurring variables can be checked by evaluating the parse tree in time polynomial in the formula encoding.

**Theorem 13.1 (Cook–Levin).** SAT is NP-complete under polynomial-time many-one reductions.

*Proof.* Fix $L\\in\\mathrm{NP}$, a deterministic verifier $V$ and polynomial witness bound $p(n)\\ge1$. Replace variable-length certificates by one fixed-length bit block containing a length field $r\\le p(n)$ followed by $p(n)$ data bits. The new verifier interprets the first $r$ data bits as the old certificate and ignores the rest; invalid lengths reject. Every old certificate has such an encoding, and every accepting new encoding contains a valid old certificate. Its total length $\\ell(n)=p(n)+\\lceil\\log_2(p(n)+1)\\rceil$ is polynomial.

Choose a computable polynomial clock $T(n)$ bounding this verifier, also at least $n+\\ell(n)+1$. Convert it to the single-tape convention if necessary, increasing the polynomial clock. Pad an already halted computation by leaving its configuration unchanged through the remaining layers. Thus acceptance by the clock is the same as an accepting state in layer $T$.

For a fixed input $x$ of length $n$, build a circuit whose input wires are the $\\ell(n)$ certificate bits. A configuration is represented by a finite tape interval containing the initial input and certificate plus $T+1$ extra blank cells on either side. No head moving one cell per step can leave that interval before the clock expires. Give each cell a label from the fixed finite alphabet consisting of plain tape symbols and pairs of a tape symbol with the unique head state. A legal configuration has exactly one head-labelled cell.

The next label at cell $j$ is determined by the three old labels at $j-1,j,j+1$: a head at $j$ may write and leave; a head at a neighbour may enter; otherwise the symbol stays. A deterministic transition fixes which case occurs. Encode labels by a constant number of Boolean bits. Each next-label bit is a Boolean function of a constant number of old bits and therefore has a constant-size circuit, obtained for example from its finite truth table. Define arbitrary outputs on illegal local patterns; they are never reached from a legal initial configuration. The padding rule is another fixed local case.

The initial layer contains constants for $x$, delimiters and blanks, and wires for certificate bits, with the start head at the specified position. Connect the local update circuits for all cells and $T$ time layers. Induction on the layer proves that their values encode exactly the genuine padded verifier run on that certificate: initialization is legal, and the local rule preserves the unique-head computation. Add a polynomial-size OR of all accepting head-state indicators at the final layer. The circuit $C_x$ outputs one exactly when $V$ accepts some certificate. Its size is $O(T(n)(n+\\ell(n)+T(n)))$ times a fixed machine constant, hence polynomial; nested loops over times, cells and fixed local rules construct it in polynomial time.

Convert $C_x$ to a formula in conjunctive normal form. Introduce one fresh variable for each internal gate. For $g=u\\land v$, use
$$(\\neg g\\lor u)\\land(\\neg g\\lor v)\\land(g\\lor\\neg u\\lor\\neg v).$$
For $g=\\neg u$, use $(g\\lor u)\\land(\\neg g\\lor\\neg u)$. OR gates can be expressed with the analogous three clauses or by the AND/NOT basis. Constants receive unit clauses. Finally assert the output variable with a unit clause. Every gate contributes only a constant number of clauses of length at most three, so size and construction time remain polynomial.

If $x\\in L$, choose an accepted certificate and assign every gate variable its actual circuit value. All equivalence clauses and the output assertion hold. Conversely a satisfying assignment forces each gate variable to equal the operation on its predecessor values; induction in circuit topological order therefore identifies every value with the actual circuit evaluation on the supplied certificate bits. The asserted output makes that verifier run accept, so $x\\in L$. This proves the required equivalence for every input $x$. As $L$ was arbitrary in NP and SAT itself is in NP, SAT is NP-complete. ∎

The local-rule construction is where the clock, bounded tape interval, fixed machine alphabet and deterministic verifier matter. It does not encode arbitrary unbounded histories in a small formula. Nondeterminism has been represented by free certificate bits; no inconsistent independent transition choices can appear in different local windows of one purported row.

All generated clauses already have at most three literals. Repeating a literal pads a shorter nonempty clause without changing its truth value, giving 3SAT completeness directly. The earlier general long-clause transformation remains useful for arbitrary CNF inputs, including its explicit empty-clause and empty-conjunction conventions. Malformed formula encodings can map to one fixed unsatisfiable 3CNF, making the reduction total on strings.

<a id="section-109-worked-example-1-a-gate-equivalence-is-stronger-than-on"></a>
## Worked example 1: a gate equivalence is stronger than one implication {#section-111-worked-example-1-a-gate-equivalence-is-stronger-than-on}

Let $F=(a\\lor b)\\land\\neg a$. Introduce variables $u$ for $a\\lor b$, $v$ for $\\neg a$ and $g$ for $u\\land v$, assert their complete gate equivalences and require $g$. Input assignment $a=0,b=1$ extends uniquely to $u=v=g=1$, satisfying the encoding. If one kept only the implication $g\\to u\\land v$ but omitted the equivalences defining $u,v$, a fabricated assignment might no longer correspond to the claimed computation. Every gate must be tied to its predecessors in both directions.

For $F=a\\land\\neg a$, the NOT clauses force the negated value and the AND clauses force output zero under either possible $a$. The output assertion then contradicts them. The encoding is equisatisfiable over additional variables, not literally equivalent for every arbitrary choice of those variables. This is why the reduction proof quantifies existentially over their consistent gate values.

<a id="section-115-worked-example-2-literal-occurrences-not-just-variable-"></a>
## Worked example 2: literal occurrences, not just variable names {#section-117-worked-example-2-literal-occurrences-not-just-variable-}

For $(x\\lor y\\lor z)\\land(\\neg x\\lor y\\lor\\neg z)$ there are six occurrence vertices, each tagged by clause and position. Selecting the two $y$ occurrences gives an edge because they are in different clauses and not complementary. Assignment $y=1$ satisfies both, with other values arbitrary. Selecting $x$ from the first clause and $\\neg x$ from the second gives no edge, preventing a false certificate.

For $(x\\lor x\\lor x)\\land(\\neg x\\lor\\neg x\\lor\\neg x)$, every cross-clause pair is complementary, so there is no clique of size two. The formula is indeed unsatisfiable. This handles repeated-literal padding without merging occurrence vertices or losing the one-per-clause argument. Empty formulas and bounds outside the valid graph range can be handled separately by fixed yes or no instances; the standard parameter identities assume the declared valid threshold range $0\\le k\\le|V|$.

<a id="section-121-worked-example-3-a-correct-algorithm-can-still-be-pseud"></a>
## Worked example 3: a correct algorithm can still be pseudopolynomial {#section-123-worked-example-3-a-correct-algorithm-can-still-be-pseud}

For nonnegative subset-sum items $a_1,\\ldots,a_n$ and target $S$, let $R_i$ be the attainable sums at most $S$ using the first $i$ items. Start with $R_0=\\{0\\}$ and set $R_i=R_{i-1}\\cup\\{r+a_i:r\\in R_{i-1},r+a_i\\le S\\}$. Induction proves correctness: a subset either omits item $i$ or uses it once, leaving a subset of earlier items. Nonnegativity makes truncating sums above $S$ safe.

For items $2,3,7$ and target five, the sets are $\\{0\\}$, $\\{0,2\\}$, $\\{0,2,3,5\\}$, and the same last set. Thus the target is attainable by the first two items. A Boolean array over $0,\\ldots,S$ gives $O(nS)$ table work, while storing each new row separately avoids accidentally reusing an item. Because $S$ may be exponential in its binary bit length, this does not supply a polynomial-time algorithm in encoded input length. It establishes a correct pseudopolynomial algorithm without resolving any NP-completeness assumption.

<a id="section-127-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-129-exercises-with-complete-solutions}

<a id="section-129-exercise-1-p-inside-np"></a>
### Exercise 1: P inside NP {#section-131-exercise-1-p-inside-np}
<a id="np-completeness-and-reduction-design-ex-1"></a>

Prove $P \\subseteq NP$.

<details>
<summary>Hint 1</summary>

Use no certificate information.

</details>
<details>
<summary>Hint 2</summary>

A deterministic polynomial decider already gives the verifier.

</details>
<details>
<summary>Solution</summary>

Given polynomial decider $D$, define verifier $V(x,y)=D(x)$ and require empty $y$. It runs in polynomial time and has a certificate exactly when $D$ accepts.

</details>

<a id="section-153-exercise-2-clique-verification"></a>
### Exercise 2: CLIQUE verification {#section-155-exercise-2-clique-verification}
<a id="np-completeness-and-reduction-design-ex-2"></a>

What must its verifier check?

<details>
<summary>Hint 1</summary>

A proposed clique needs distinct valid IDs.

</details>
<details>
<summary>Hint 2</summary>

Inspect every unordered pair in the supplied list.

</details>
<details>
<summary>Solution</summary>

Parse $k$ distinct valid vertex identifiers and check an edge for every one of the $k choose 2$ pairs. This is polynomial in graph encoding length.

</details>

<a id="section-177-exercise-3-hardness-direction"></a>
### Exercise 3: Hardness direction {#section-179-exercise-3-hardness-direction}
<a id="np-completeness-and-reduction-design-ex-3"></a>

Which reduction proves $B$ NP-hard from 3SAT?

<details>
<summary>Hint 1</summary>

The complete source must be transformed into the new target.

</details>
<details>
<summary>Hint 2</summary>

A solver of the target must solve 3SAT.

</details>
<details>
<summary>Solution</summary>

$3SAT \\le_{p}  B$. A polynomial solver for $B$ would then solve 3SAT through composition.

</details>

<a id="section-201-exercise-4-membership-is-separate"></a>
### Exercise 4: Membership is separate {#section-203-exercise-4-membership-is-separate}
<a id="np-completeness-and-reduction-design-ex-4"></a>

Why does $3SAT \\le_{p}  B$ not alone prove NP-completeness?

<details>
<summary>Hint 1</summary>

Hardness supplies no certificate checker.

</details>
<details>
<summary>Hint 2</summary>

Prove the target language belongs to NP separately.

</details>
<details>
<summary>Solution</summary>

It proves NP-hardness. Completeness also requires $B \\in NP$, usually by a polynomial certificate verifier.

</details>

<a id="section-225-exercise-5-fresh-variables"></a>
### Exercise 5: Fresh variables {#section-227-exercise-5-fresh-variables}
<a id="np-completeness-and-reduction-design-ex-5"></a>

Why may 3SAT conversion introduce them?

<details>
<summary>Hint 1</summary>

The original assignment need only have some extension.

</details>
<details>
<summary>Hint 2</summary>

Gate variables record consistent intermediate truth values.

</details>
<details>
<summary>Solution</summary>

A reduction needs preserve existence of a satisfying assignment, not assignment identity. Fresh variables coordinate clause fragments while preserving equisatisfiability.

</details>

<a id="section-249-exercise-6-clique-clause-count"></a>
### Exercise 6: Clique clause count {#section-251-exercise-6-clique-clause-count}
<a id="np-completeness-and-reduction-design-ex-6"></a>

Why can an $m$-clique contain at most one occurrence per clause?

<details>
<summary>Hint 1</summary>

Edges within one clause are forbidden.

</details>
<details>
<summary>Hint 2</summary>

A clique cannot contain a nonadjacent same-clause pair.

</details>
<details>
<summary>Solution</summary>

The construction adds edges only between vertices from different clauses. Two vertices from one clause are nonadjacent and cannot coexist in a clique.

</details>

<a id="section-273-exercise-7-clique-consistency"></a>
### Exercise 7: Clique consistency {#section-275-exercise-7-clique-consistency}
<a id="np-completeness-and-reduction-design-ex-7"></a>

Why do selected literals extend to an assignment?

<details>
<summary>Hint 1</summary>

No selected pair is complementary.

</details>
<details>
<summary>Hint 2</summary>

Assign selected polarities and fill unused variables arbitrarily.

</details>
<details>
<summary>Solution</summary>

Edges exclude complementary pairs, so no variable is selected both positively and negatively. Assign selected polarities accordingly and arbitrary values to unselected variables.

</details>

<a id="section-297-exercise-8-complement-graph"></a>
### Exercise 8: Complement graph {#section-299-exercise-8-complement-graph}
<a id="np-completeness-and-reduction-design-ex-8"></a>

Prove clique/independent-set duality.

<details>
<summary>Hint 1</summary>

Complement only changes edges between distinct vertices.

</details>
<details>
<summary>Hint 2</summary>

Compare every pair inside the same proposed subset.

</details>
<details>
<summary>Solution</summary>

Every pair in $S$ is an edge of $G$ exactly when no pair is an edge of $\\overline{G}$, which is precisely independence there.

</details>

<a id="section-321-exercise-9-independent-set-cover-duality"></a>
### Exercise 9: Independent set/cover duality {#section-323-exercise-9-independent-set-cover-duality}
<a id="np-completeness-and-reduction-design-ex-9"></a>

Prove $S$ independent iff $V\\setminus S$ covers every edge.

<details>
<summary>Hint 1</summary>

An uncovered edge lies entirely in the independent candidate.

</details>
<details>
<summary>Hint 2</summary>

Negate that statement in both directions.

</details>
<details>
<summary>Solution</summary>

An uncovered edge has both endpoints in $S$, violating independence. Conversely, an edge inside $S$ has neither endpoint in the complement, violating cover.

</details>

<a id="section-345-exercise-10-pseudopolynomial-warning"></a>
### Exercise 10: Pseudopolynomial warning {#section-347-exercise-10-pseudopolynomial-warning}
<a id="np-completeness-and-reduction-design-ex-10"></a>

Why is $\\mathcal{O}(nT)$ not polynomial for binary target $T$?

<details>
<summary>Hint 1</summary>

Compare target value with its binary length.

</details>
<details>
<summary>Hint 2</summary>

A factor $T$ can be exponential in the input bits.

</details>
<details>
<summary>Solution</summary>

$T$ may be exponential in its bit length. The bound is polynomial in numeric value, not necessarily in encoded input length.

</details>

<a id="section-369-exercise-11-decision-versus-optimization"></a>
### Exercise 11: Decision versus optimization {#section-371-exercise-11-decision-versus-optimization}
<a id="np-completeness-and-reduction-design-ex-11"></a>

How can a clique optimizer solve the decision problem?

<details>
<summary>Hint 1</summary>

An exact optimum gives a threshold answer.

</details>
<details>
<summary>Hint 2</summary>

An approximate answer does not necessarily decide the exact question.

</details>
<details>
<summary>Solution</summary>

Compute maximum clique size and compare it with $k$. The optimizer must be exact and its representation/runtime assumptions explicit.

</details>

<a id="section-393-exercise-12-mutant-edge"></a>
### Exercise 12: Mutant edge {#section-395-exercise-12-mutant-edge}
<a id="np-completeness-and-reduction-design-ex-12"></a>

Why can connecting complementary literal occurrences break soundness?

<details>
<summary>Hint 1</summary>

Use contradictory unit clauses after repeated-literal padding.

</details>
<details>
<summary>Hint 2</summary>

A false cross edge can create a clique with both polarities.

</details>
<details>
<summary>Solution</summary>

A clique may then choose both $x$ and $\\neg x$ from different clauses. Such choices cannot extend to one truth assignment, so graph acceptance can become a false positive.

</details>

[Book overview](#/item/book-formal-computation-proof-reference)


<a id="section-420-preserved-first-course-comparison"></a>
## Preserved first-course comparison {#section-422-preserved-first-course-comparison}

The following complete desk source is retained as a credited complementary development, including its verifier code and sixteen original tasks, now exercises 13–28. Its original chapter and resource remain unchanged. The earlier section numbers belong to that source.


<a id="section-425-retained-computing-desk-treatment-complexity-verificati"></a>
## Retained computing-desk treatment: Complexity, Verification, and the P-versus-NP Boundary {#section-427-retained-computing-desk-treatment-complexity-verificati}

Complexity theory classifies infinite families of finite problems by resources. It does not label one input “complex,” and it does not turn failure to find an algorithm into a lower bound. This chapter builds the language needed to state efficient computation, efficient verification, reductions, completeness, and the P-versus-NP question without exaggeration.

<a id="section-429-1-languages-and-encodings"></a>
## 1. Languages and encodings {#section-431-1-languages-and-encodings}

A decision problem is represented as a language $L \\subseteq \\{0,1\\}*$; yes-instances are the strings in $L$. Graphs, formulas, and integers require encodings. A reasonable encoding can be translated to another in polynomial time with polynomially related length. Unary and binary integers are not polynomially related in value: an algorithm polynomial in numeric value may be exponential in binary input length.

Optimization and search problems can often be paired with decision versions. “Is there a tour of weight at most $B$?” is a decision question. Equivalence between solving decision and recovering an optimum needs its own reduction, usually repeated threshold queries and witness reconstruction.

<a id="section-435-2-deterministic-polynomial-time"></a>
## 2. Deterministic polynomial time {#section-437-2-deterministic-polynomial-time}

$P$ contains languages decided by a deterministic machine in time $n^k$ for some constant $k$. This definition is robust across standard deterministic machine models because their simulations impose polynomial overhead. It does not say all polynomial algorithms are practical or all exponential algorithms useless at small scale.

Closure is a sanity check. If $A,B \\in P$, then union and intersection are in $P$ by running both deciders, and complement is in $P$ by flipping the answer of a total decider.

<a id="section-441-3-certificates-and-np"></a>
## 3. Certificates and NP {#section-443-3-certificates-and-np}

A language is in $\\mathsf{NP}$ if there is a polynomial $p$ and polynomial-time verifier $V$ such that

$x \\in L \\iff \\exists y, \\lvert y\\rvert \\le p(\\lvert x\\rvert), V(x,y)=1$.

The witness $y$ is a certificate. For Hamiltonian cycle, it lists vertices in cyclic order; the verifier checks length, uniqueness, and edges. For satisfiability, it is a truth assignment. The definition quantifies existentially over certificates for yes-instances. It says nothing comparable about short certificates for no-instances.

Every language in $P$ is in $\\mathsf{NP}$: use an empty certificate and run the decider. Whether $P=\\mathsf{NP}$ remains open. The manuscript does not claim a resolution.

<a id="section-451-4-polynomial-time-many-one-reductions"></a>
## 4. Polynomial-time many-one reductions {#section-453-4-polynomial-time-many-one-reductions}

$A \\le_{p} B$ means a polynomial-time computable function $f$ satisfies

$x \\in A \\iff f(x) \\in B$.

Thus a decider for $B$ yields a decider for $A$ by transformation and one call. The direction is crucial: to show $B$ hard, reduce a known hard $A$ **to** $B$. Reductions compose, since a composition of polynomial-time functions is polynomial time and preserves the iff condition.

A reduction proof has four obligations: define $f$ on every encoded input, bound output size, show polynomial construction time, and prove both directions of membership equivalence.

<a id="section-461-5-hardness-and-completeness"></a>
## 5. Hardness and completeness {#section-463-5-hardness-and-completeness}

$B$ is NP-hard if every language in NP reduces to it. It is NP-complete if it is NP-hard and also belongs to NP. Membership usually needs an explicit certificate and verifier; hardness usually starts from a known NP-complete problem.

If any NP-complete language is in $P$, then $P=\\mathsf{NP}$: every NP language reduces to it and polynomial algorithms compose. Conversely, if $P=\\mathsf{NP}$, every NP-complete language lies in $P$. NP-hard optimization problems need not themselves be decision languages or members of NP.

<a id="section-467-6-a-reduction-pattern-independent-set-and-vertex-cover"></a>
## 6. A reduction pattern: independent set and vertex cover {#section-469-6-a-reduction-pattern-independent-set-and-vertex-cover}

For an undirected graph $G=(V,E)$, $S$ is independent exactly when $V\\setminus S$ is a vertex cover. If no edge has both endpoints in $S$, every edge has an endpoint outside $S$; the converse is the same statement negated. Therefore

$(G,k)$ has an independent set of size at least $k$

iff

$(G, \\lvert V\\rvert-k)$ has a vertex cover of size at most $\\lvert V\\rvert-k$.

The transformation copies the graph and changes the bound, so its time and output length are polynomial. Notice the exact iff proof, including sizes.

<a id="section-479-7-conp-and-asymmetry"></a>
## 7. coNP and asymmetry {#section-481-7-conp-and-asymmetry}

$\\mathsf{coNP}$ consists of complements of NP languages. Tautology is in coNP because a non-tautology has a falsifying assignment as a short certificate for its complement. It is unknown whether $\\mathsf{NP}=\\mathsf{coNP}$. The fact that primality has efficient certificates—or indeed deterministic polynomial algorithms—does not imply every no-instance in every NP problem has a short certificate.

<a id="section-483-8-parameterization-approximation-and-promises"></a>
## 8. Parameterization, approximation, and promises {#section-485-8-parameterization-approximation-and-promises}

Worst-case NP-hardness does not end algorithm design. Useful structure can be captured by a parameter $k$, with fixed-parameter time $f(k)n^c$; approximation algorithms trade exactness for a proved ratio; heuristics trade universal guarantees for empirical performance; exponential algorithms may improve the base; restricted cases may enter P.

A promise problem restricts legal inputs. The algorithm is obligated only on promised instances, but the promise must be explicit and the system must decide how it is established. Average-case and smoothed claims likewise need a distribution or perturbation model.

<a id="section-489-9-verification-is-not-discovery"></a>
## 9. Verification is not discovery {#section-491-9-verification-is-not-discovery}

A fast checker for a proposed solution does not automatically give a fast method to find one. That gap is precisely what the P-versus-NP question formalizes for decision problems. Yet verification still matters operationally: independently checking a route, matching, proof trace, or assignment reduces the trusted implementation surface.

Proof-producing solvers add evidence. Their result is only as strong as the certificate format, checker soundness, encoding translation, and resource envelope. A solver timeout means “not solved within this run,” not “no solution.”

<a id="section-495-10-dependency-free-verifier"></a>
## 10. Dependency-free verifier {#section-497-10-dependency-free-verifier}

\`\`\`python
def verifies_vertex_cover(vertex_count, edges, bound, certificate):
    if (isinstance(vertex_count, bool) or not isinstance(vertex_count, int)
            or vertex_count < 0):
        return False
    if (isinstance(bound, bool) or not isinstance(bound, int) or bound < 0):
        return False
    if not isinstance(edges, (list, tuple)) or not isinstance(certificate, (list, tuple)):
        return False
    valid_vertex = lambda v: (not isinstance(v, bool) and isinstance(v, int)
                              and 0 <= v < vertex_count)
    if any(not isinstance(edge, (list, tuple)) or len(edge) != 2
           or not all(valid_vertex(v) for v in edge) for edge in edges):
        return False
    if any(not valid_vertex(v) for v in certificate):
        return False
    chosen = set(certificate)
    if len(chosen) != len(certificate):
        return False
    if len(chosen) > bound:
        return False
    return all(u in chosen or v in chosen for u, v in edges)

if __name__ == "__main__":
    edges = [(0, 1), (1, 2), (2, 0)]
    assert verifies_vertex_cover(3, edges, 2, [0, 1])
    assert not verifies_vertex_cover(3, edges, 1, [0])
    assert not verifies_vertex_cover(3, edges, 2, [0, 0])
    assert not verifies_vertex_cover(1, [(0, 99)], 1, [0])
    assert not verifies_vertex_cover(2, [(0, 1)], 1, [0.0])
\`\`\`

The syntax checks make the accepted universe explicit: counts and labels are nonnegative integers (Booleans are excluded despite Python's subclassing), edges have two in-range endpoints, and the certificate is a finite list or tuple of in-range labels. The duplicate check matters because certificate length and set cardinality are different. Soundness follows directly: acceptance checks the bound and witnesses an endpoint in the chosen set for every validated edge.

<a id="section-531-11-claims-one-may-and-may-not-make"></a>
## 11. Claims one may and may not make {#section-533-11-claims-one-may-and-may-not-make}

From “problem $B$ is NP-complete,” one may conclude that a polynomial-time algorithm for all instances of $B$ would imply $P=\\mathsf{NP}$. Under the standard unproved assumption $P\\ne \\mathsf{NP}$, one may conditionally say no such algorithm exists. One may not say NP-completeness proves all instances are hard, proves exponential time, or makes verification difficult.

Conditional language is mathematical precision, not timidity.

<a id="section-537-practice-with-fully-explained-solutions"></a>
## Practice with fully explained solutions {#section-539-practice-with-fully-explained-solutions}

<a id="section-539-exercise-13"></a>
### Exercise 13 {#section-541-exercise-13}
<a id="np-completeness-and-reduction-design-ex-13"></a>

Why is input encoding part of a runtime theorem?

<details>
<summary>Hint 1</summary>

The runtime parameter is the code length.

</details>
<details>
<summary>Hint 2</summary>

Unary output size can grow exponentially relative to a binary input.

</details>
<details>
<summary>Solution</summary>

Runtime is measured against string length. Binary and unary encodings of the same integer have exponentially different lengths, changing whether value-polynomial work is input-polynomial.

</details>

<a id="section-563-exercise-14"></a>
### Exercise 14 {#section-565-exercise-14}
<a id="np-completeness-and-reduction-design-ex-14"></a>

Show $P$ is closed under complement.

<details>
<summary>Hint 1</summary>

Totality makes answer reversal safe.

</details>
<details>
<summary>Hint 2</summary>

Keep the same polynomial time bound.

</details>
<details>
<summary>Solution</summary>

A polynomial-time total decider for $L$ halts on every input; flip accept and reject to decide the complement in the same asymptotic time.

</details>

<a id="section-587-exercise-15"></a>
### Exercise 15 {#section-589-exercise-15}
<a id="np-completeness-and-reduction-design-ex-15"></a>

Why is $P \\subseteq \\mathsf{NP}$?

<details>
<summary>Hint 1</summary>

The certificate can be empty.

</details>
<details>
<summary>Hint 2</summary>

Run the P decider inside a verifier.

</details>
<details>
<summary>Solution</summary>

A verifier can ignore an empty certificate and run the polynomial-time decider; the existential certificate condition is then satisfied exactly for yes-instances.

</details>

<a id="section-611-exercise-16"></a>
### Exercise 16 {#section-613-exercise-16}
<a id="np-completeness-and-reduction-design-ex-16"></a>

Give a SAT certificate.

<details>
<summary>Hint 1</summary>

Give one Boolean bit per occurring variable.

</details>
<details>
<summary>Hint 2</summary>

Evaluate each connective from its children.

</details>
<details>
<summary>Solution</summary>

A bit for every variable. The verifier substitutes the bits and evaluates every connective in time linear in the formula representation.

</details>

<a id="section-635-exercise-17"></a>
### Exercise 17 {#section-637-exercise-17}
<a id="np-completeness-and-reduction-design-ex-17"></a>

Why must NP certificates be polynomially bounded?

<details>
<summary>Hint 1</summary>

Evidence length must be controlled by instance length.

</details>
<details>
<summary>Hint 2</summary>

A verifier polynomial in its combined inputs might otherwise read an enormous witness.

</details>
<details>
<summary>Solution</summary>

Without the bound, merely reading the witness could require superpolynomial time and “efficient verification in total input size” would not constrain evidence relative to the instance.

</details>

<a id="section-659-exercise-18"></a>
### Exercise 18 {#section-661-exercise-18}
<a id="np-completeness-and-reduction-design-ex-18"></a>

Which way proves $B$ NP-hard?

<details>
<summary>Hint 1</summary>

The known hard problem is the source.

</details>
<details>
<summary>Hint 2</summary>

The destination solver is the hypothetical tool used for contradiction.

</details>
<details>
<summary>Solution</summary>

Reduce a problem $A$ already known hard to $B$. Then an efficient solver for $B$ would solve $A$; reversing the arrow proves hardness of the wrong target.

</details>

<a id="section-683-exercise-19"></a>
### Exercise 19 {#section-685-exercise-19}
<a id="np-completeness-and-reduction-design-ex-19"></a>

Why are both reduction directions needed?

<details>
<summary>Hint 1</summary>

A no-instance must not become a yes-instance.

</details>
<details>
<summary>Hint 2</summary>

A map preserving only positives may throw away the source answer.

</details>
<details>
<summary>Solution</summary>

If only yes-instances map to yes-instances, a no-instance could also map to yes, so the target decider would not determine the source answer.

</details>

<a id="section-707-exercise-20"></a>
### Exercise 20 {#section-709-exercise-20}
<a id="np-completeness-and-reduction-design-ex-20"></a>

Why bound output length separately?

<details>
<summary>Hint 1</summary>

The target solver receives the entire produced string.

</details>
<details>
<summary>Hint 2</summary>

Its runtime polynomial must be evaluated at that string length.

</details>
<details>
<summary>Solution</summary>

A transformation cannot physically write exponentially many bits in polynomial time under the standard model; stating the bound exposes hidden succinctness assumptions.

</details>

<a id="section-731-exercise-21"></a>
### Exercise 21 {#section-733-exercise-21}
<a id="np-completeness-and-reduction-design-ex-21"></a>

Prove reductions compose.

<details>
<summary>Hint 1</summary>

Substitute the first transformation into the second.

</details>
<details>
<summary>Hint 2</summary>

Polynomial output length controls the composed runtime.

</details>
<details>
<summary>Solution</summary>

If $x \\in A \\iff f(x) \\in B$ and $z \\in B \\iff g(z) \\in C$, substitute $z=f(x)$. The composition is polynomial because polynomial output sizes and running times compose.

</details>

<a id="section-755-exercise-22"></a>
### Exercise 22 {#section-757-exercise-22}
<a id="np-completeness-and-reduction-design-ex-22"></a>

What two facts make a problem NP-complete?

<details>
<summary>Hint 1</summary>

Name membership and hardness separately.

</details>
<details>
<summary>Hint 2</summary>

Neither follows from calling the problem difficult.

</details>
<details>
<summary>Solution</summary>

It must be in NP via a polynomial verifier and be NP-hard via reductions from every NP problem, usually inherited from one known complete problem.

</details>

<a id="section-779-exercise-23"></a>
### Exercise 23 {#section-781-exercise-23}
<a id="np-completeness-and-reduction-design-ex-23"></a>

Why does one complete problem in P collapse P and NP?

<details>
<summary>Hint 1</summary>

Every NP language has a reduction to the complete one.

</details>
<details>
<summary>Hint 2</summary>

Compose its reduction with the assumed polynomial decider.

</details>
<details>
<summary>Solution</summary>

Every NP language reduces to it; compute the reduction and run its P decider, yielding a P decider for every NP language.

</details>

<a id="section-803-exercise-24"></a>
### Exercise 24 {#section-805-exercise-24}
<a id="np-completeness-and-reduction-design-ex-24"></a>

Is every NP-hard problem in NP?

<details>
<summary>Hint 1</summary>

Hardness alone need not give a total decider.

</details>
<details>
<summary>Hint 2</summary>

State the decision-language and verifier obligations.

</details>
<details>
<summary>Solution</summary>

No. Hardness alone does not supply a decision-language form or polynomial certificate verifier; even undecidable problems can be NP-hard under suitable reductions.

</details>

<a id="section-827-exercise-25"></a>
### Exercise 25 {#section-829-exercise-25}
<a id="np-completeness-and-reduction-design-ex-25"></a>

Relate independent set and vertex cover.

<details>
<summary>Hint 1</summary>

Take a complement of the chosen vertex set.

</details>
<details>
<summary>Hint 2</summary>

Its size is the original order minus the independent-set size.

</details>
<details>
<summary>Solution</summary>

$S$ is independent iff $V\\setminus S$ covers every edge, and sizes add to $\\lvert V\\rvert$; this gives the bound transformation $k \\to \\lvert V\\rvert-k$.

</details>

<a id="section-851-exercise-26"></a>
### Exercise 26 {#section-853-exercise-26}
<a id="np-completeness-and-reduction-design-ex-26"></a>

What does a solver timeout prove?

<details>
<summary>Hint 1</summary>

A finite run has a finite observation limit.

</details>
<details>
<summary>Hint 2</summary>

No eventual behavior follows just from not seeing it yet.

</details>
<details>
<summary>Solution</summary>

Only that this implementation and configuration produced no answer within the resource limit. It proves neither unsatisfiability nor asymptotic hardness.

</details>

<a id="section-875-exercise-27"></a>
### Exercise 27 {#section-877-exercise-27}
<a id="np-completeness-and-reduction-design-ex-27"></a>

Does NP-complete mean every instance is difficult?

<details>
<summary>Hint 1</summary>

Completeness quantifies over the whole language family.

</details>
<details>
<summary>Hint 2</summary>

Some individual instances can be settled immediately.

</details>
<details>
<summary>Solution</summary>

No. Many instances are trivial; completeness is a worst-case language-family statement under polynomial reductions.

</details>

<a id="section-899-exercise-28"></a>
### Exercise 28 {#section-901-exercise-28}
<a id="np-completeness-and-reduction-design-ex-28"></a>

State the P-versus-NP status correctly.

<details>
<summary>Hint 1</summary>

Distinguish proved containments from an open equality.

</details>
<details>
<summary>Hint 2</summary>

Neither an upper bound nor a timeout settles P versus NP.

</details>
<details>
<summary>Solution</summary>

It is an open mathematical question whether every polynomially verifiable decision problem is polynomially decidable; this chapter assumes neither equality nor inequality as a theorem.

</details>

<a id="section-923-reduction-audit-sheet"></a>
## Reduction audit sheet {#section-925-reduction-audit-sheet}

For every proposed reduction, record source and target languages, encodings, construction pseudocode, output-size bound, running-time bound, forward implication, reverse implication, and boundary cases. Then write the exact conditional consequence. This prevents diagrams of “similarity” from being mistaken for reductions.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=machines-reductions-limits) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=information-security-geometry-quantum) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-930-sources"></a>
## Sources {#section-932-sources}

This chapter preserves [NP-Completeness and Reduction Design](../formal-computation-proof-reference/np-completeness-and-reduction-design.md) and [Complexity, Verification and P versus NP](../algorithms-computation-proof-desk/complexity-verification-pnp.md), with all original proofs, code and 28 solutions. The local-circuit Cook–Levin proof and three worked examples expand those seeds. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), and Michael Sipser, *Introduction to the Theory of Computation*, are the benchmarks. Existing illustrative code is retained inert; no execution or scientific reproduction is claimed here.

<a id="section-934-summary"></a>
## Summary {#section-936-summary}

NP is polynomial verification with polynomially bounded witnesses. Cook–Levin compiles every clocked verifier into a polynomial circuit and then bounded-width clauses, with both directions proved by configuration and gate induction. Literal-occurrence graphs transfer 3SAT to CLIQUE, and complement arguments connect independent set and cover. Reductions require totality, direction and output-size bounds. Numeric algorithms and certificate checks keep their exact representation and cost assumptions; no statement resolves P versus NP.
`;export{e as default};