var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: np-completeness-and-reduction-design
title: "NP-Completeness and the Design of Reductions"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# NP-Completeness and the Design of Reductions

NP-completeness is a theory of efficiently checkable evidence and efficiently translated difficulty. It does not prove that no fast algorithm exists, and it does not mean “not polynomial.” This chapter establishes the verifier model, Cook–Levin architecture, canonical reductions, and a proof protocol that makes direction and encoding size impossible to hide.

## 1. Verifiers and certificates

A language $L$ lies in NP when a polynomial-time verifier $V$ and polynomial $p$ satisfy

$x \\in L \\iff \\exists y\\; (|y|\\le p(|x|) \\land V(x,y)=1)$.

For CLIQUE, certificate $y$ lists $k$ vertices and the verifier checks distinctness and every pairwise edge. For COMPOSITE, certificate is a nontrivial factor. The verifier definition says nothing about how to find a certificate.

$P \\subseteq NP$ because a polynomial decider can ignore an empty certificate. Whether containment is strict remains open.

## 2. Hardness and completeness

Language $B$ is NP-hard if every $A \\in NP$ has polynomial-time many-one reduction $A \\le_{p}  B$. It is NP-complete if it is both NP-hard and in NP.

To prove a new problem $B$ NP-complete:

1. prove $B \\in NP$ with an encoded certificate and runtime bound;
2. choose known NP-complete source $A$;
3. construct $f$ from instances of $A$ to instances of $B$;
4. prove $x \\in A \\iff f(x) \\in B$;
5. bound construction time and output length polynomially.

Reducing $B$ to known hard $A$ proves only that $B$ is no harder than $A$.

## 3. Cook–Levin architecture

The Boolean satisfiability problem SAT is NP-complete. Membership uses a truth assignment as certificate. For hardness, take an NP verifier computation on $(x,y)$ and construct a Boolean formula encoding an accepting tableau.

Variables describe, at each bounded time and tape location, the symbol, head position, and state. Clauses enforce exactly one local label, valid initialization with $x,y$, legal adjacent-time transitions, and an accepting state. Every constraint has polynomially many local instances because time and certificate length are polynomial. An accepting computation supplies a satisfying assignment; a satisfying assignment decodes to a legal accepting computation.

Cook–Levin is a compilation theorem from bounded computation to local constraints. It relies on a polynomial clock and tableau size, not unrestricted machine histories.

## 4. SAT to 3SAT

The SAT input above is an arbitrary Boolean formula, so first apply a linear-size Tseitin encoding. Introduce a fresh variable for each gate, add a constant number of CNF clauses enforcing equivalence between that variable and its gate, and assert the output variable. The CNF is equisatisfiable with the original formula and has linear size.

Then convert each long CNF clause $(l_1 \\lor ... \\lor l_k)$ to a chain of three-literal clauses using fresh variables. For example, for $k=4$ use

$(l_1 \\lor l_2 \\lor z) \\land (\\neg z \\lor l_3 \\lor l_4)$.

If an original literal is true, choose chain variables to satisfy the chain; conversely, if all original literals are false, the chain forces contradictory values along its links. One- and two-literal clauses can be padded by repeated literals. Map an empty clause to a fixed unsatisfiable 3CNF such as $(z\\lor z\\lor z)\\land(\\neg z\\lor\\neg z\\lor\\neg z)$; an empty conjunction is already satisfiable and can map to a fixed satisfiable 3CNF. The transformation grows linearly in total gate and literal occurrences.

Equisatisfiability is enough: the new formula need not have the same satisfying assignments over fresh variables.

## 5. 3SAT to CLIQUE

For formula with $m$ clauses, make one vertex for each literal occurrence. Connect vertices from different clauses exactly when their literals are not contradictory. Ask for clique size $m$.

A satisfying assignment selects one true occurrence per clause; selected vertices are mutually compatible. Conversely, an $m$-clique contains exactly one vertex from each clause and no complementary pair, so its selected literals extend to a consistent assignment satisfying every clause. The graph has at most $3m$ vertices and polynomially many edges.

## 6. CLIQUE, independent set, and vertex cover

For graph $G=(V,E)$, a set is a clique in $G$ iff it is independent in complement graph $\\overline{G}$. A set $S$ is independent iff $V\\setminus S$ is a vertex cover. Thus

$(G,k) \\in CLIQUE \\iff (\\overline{G},k) \\in INDEPENDENT-SET$

and $(G,k)$ is in independent set iff $(G,|V|-k)$ is in vertex cover. Each is a many-one equivalence with explicit parameter transformation.

## 7. Weak and strong numeric hardness

Reductions involving numbers must track binary length. A dynamic program polynomial in target value may be pseudopolynomial. Weak NP-hardness can coexist with such algorithms; strong NP-hardness persists when numeric magnitudes are polynomially bounded. Encoding qualifications are part of the theorem.

## 8. Project: reduction and certificate laboratory

**Brief.** Implement validated 3CNF input, the reduction to CLIQUE, a truth-assignment verifier, and a clique-certificate verifier using only the language runtime. Exhaust all assignments for small formulas and all $m$-vertex subsets of the generated graph. Confirm satisfiability iff the graph has an $m$-clique, then deliberately add edges between complementary occurrences and recover a smallest false-positive clique.

**Reference design.** Represent a literal as a signed nonzero integer and a clause as exactly three literals. Tag graph vertices by $(clauseIndex,literalIndex,literal)$. Add an edge only across clauses when the two signed literals are not negatives of one another. Reject duplicate or out-of-range certificate indices. Enumerate formulas by clause count and a bounded variable set; enumerate witnesses lexicographically so discrepancies are reproducible.

**Acceptance criteria.** Report input grammar, validation failures, graph size, tested instance bound, certificate checks, and shortest discrepancy from the mutant. Supply the two-direction proof in Section 5 independently of tests. Exhaustion proves only the finite generated suite; the construction proof covers every valid input.

## 9. Claim boundaries

- NP is nondeterministic polynomial time or polynomial verification, not “non-polynomial.”
- NP-hard problems need not themselves be decision problems or lie in NP.
- Completeness is relative to a reduction type.
- An optimization problem and its decision threshold version require an explicit relationship.
- $P \\ne  NP$ is not currently proved.
- Practical success on structured instances does not contradict worst-case hardness.

## Exercises with complete solutions

### 1. P inside NP

Prove $P \\subseteq NP$.

**Solution.** Given polynomial decider $D$, define verifier $V(x,y)=D(x)$ and require empty $y$. It runs in polynomial time and has a certificate exactly when $D$ accepts.

### 2. CLIQUE verification

What must its verifier check?

**Solution.** Parse $k$ distinct valid vertex identifiers and check an edge for every one of the $k choose 2$ pairs. This is polynomial in graph encoding length.

### 3. Hardness direction

Which reduction proves $B$ NP-hard from 3SAT?

**Solution.** $3SAT \\le_{p}  B$. A polynomial solver for $B$ would then solve 3SAT through composition.

### 4. Membership is separate

Why does $3SAT \\le_{p}  B$ not alone prove NP-completeness?

**Solution.** It proves NP-hardness. Completeness also requires $B \\in NP$, usually by a polynomial certificate verifier.

### 5. Fresh variables

Why may 3SAT conversion introduce them?

**Solution.** A reduction needs preserve existence of a satisfying assignment, not assignment identity. Fresh variables coordinate clause fragments while preserving equisatisfiability.

### 6. Clique clause count

Why can an $m$-clique contain at most one occurrence per clause?

**Solution.** The construction adds edges only between vertices from different clauses. Two vertices from one clause are nonadjacent and cannot coexist in a clique.

### 7. Clique consistency

Why do selected literals extend to an assignment?

**Solution.** Edges exclude complementary pairs, so no variable is selected both positively and negatively. Assign selected polarities accordingly and arbitrary values to unselected variables.

### 8. Complement graph

Prove clique/independent-set duality.

**Solution.** Every pair in $S$ is an edge of $G$ exactly when no pair is an edge of $\\overline{G}$, which is precisely independence there.

### 9. Independent set/cover duality

Prove $S$ independent iff $V\\setminus S$ covers every edge.

**Solution.** An uncovered edge has both endpoints in $S$, violating independence. Conversely, an edge inside $S$ has neither endpoint in the complement, violating cover.

### 10. Pseudopolynomial warning

Why is $\\mathcal{O}(nT)$ not polynomial for binary target $T$?

**Solution.** $T$ may be exponential in its bit length. The bound is polynomial in numeric value, not necessarily in encoded input length.

### 11. Decision versus optimization

How can a clique optimizer solve the decision problem?

**Solution.** Compute maximum clique size and compare it with $k$. The optimizer must be exact and its representation/runtime assumptions explicit.

### 12. Mutant edge

Why can connecting complementary literal occurrences break soundness?

**Solution.** A clique may then choose both $x$ and $\\neg x$ from different clauses. Such choices cannot extend to one truth assignment, so graph acceptance can become a false positive.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};