
# Prerequisite Diagnostic and Repair Routes

The chapter numbers in this retained diagnostic refer to the earlier twenty-one-chapter arrangement; use the [current twelve-chapter route](#/books/formal-computation-proof-reference) for present destinations. Use this as routing, not selection. Work for forty-five minutes without software. Mark `secure`, `partial`, or `repair` and compare the answer only after attempting the required evidence type.

## A. Sets, functions, and quotients

### A1. Equivalence classes

Let integers satisfy $x~y$ when $x-y$ is divisible by three. Why is $[1]=[4]$?

**Answer.** Their difference is $-3$, divisible by three. Both classes contain precisely integers congruent to one modulo three.

### A2. Well-defined quotient operation

Why must $[x]+[y]=[x+y]$ be checked?

**Answer.** Classes have many representatives. If $x~x'$ and $y~y'$, one must prove $x+y~x'+y'$; otherwise the proposed output depends on hidden choices.

### A3. Function versus relation

Is “map an integer to one of its prime factors” a function?

**Answer.** Not without a selection rule: composite integers can have several factors. “Map to the least prime factor” is single-valued on integers at least two.

**Repair route.** Review catalog topics `sets-relations`, `functions`, and `logic-proofs`, then read Chapter 1 slowly.

## B. Quantifiers and proof direction

### B1. Negation

Negate “for every input $x$, there exists certificate $y$ such that $V(x,y)$.”

**Answer.** “There exists input $x$ such that for every $y$, $V(x,y)$ is false.” Both quantifiers reverse and the predicate negates.

### B2. Converse

From $P\Rightarrow Q$, which statement is automatically equivalent?

**Answer.** Its contrapositive $\neg Q\Rightarrow \neg P$, not the converse $Q\Rightarrow P$.

### B3. Reduction direction

To prove new problem $B$ difficult using known difficult $A$, which direction is useful?

**Answer.** Transform $A$ to $B$: a solver for $B$ would then solve $A$.

**Repair route.** Use `mathematical-language`, `logic-proofs`, and Chapter 9's reduction audit.

## C. Induction and recursion

### C1. Word induction

What are the cases for proving $P(w)$ for every finite word?

**Answer.** Prove $P(\varepsilon)$ and $P(w)\Rightarrow P(wa)$ for every word $w$ and letter $a$ (or a consistent left-handed version).

### C2. Structural induction

For binary trees $leaf | node(left,right)$, state the step.

**Answer.** Assume the property for both child trees and prove it for their parent node; also prove it for every leaf.

### C3. Recursive termination

Why is a recursive definition not automatically an algorithm?

**Answer.** Recursive calls need a well-founded decrease or other termination proof. An equation such as $f(x)=f(x)$ defines no effective result.

**Repair route.** Review `induction-recursion`, then Chapters 3, 7, and 14.

## D. Graphs and finite search

### D1. Reachability witness

What finite evidence proves state $t$ reachable from $s$?

**Answer.** A path beginning at $s$, ending at $t$, with each adjacent pair a valid transition.

### D2. Absence proof

What proves no bad state reachable in a finite graph?

**Answer.** A set containing initials, closed under every outgoing transition, and disjoint from bad states; exhaustive BFS constructs such a set.

### D3. BFS shortestness

What does BFS minimize?

**Answer.** Edge count in the explored graph, not physical time, weighted cost, or explanation complexity.

**Repair route.** Review `graph-theory`, the finite-state recipe, and Chapters 2 and 19.

## E. Encodings and cost

### E1. Binary length

Approximately how many bits encode positive integer $N$?

**Answer.** $\left\lfloor log_2 N\right\rfloor+1$. A runtime polynomial in $N$ can therefore be exponential in bit length.

### E2. Finite descriptions

Why can machines be enumerated?

**Answer.** Each has a finite word description over a finite alphabet; length-lexicographic order enumerates all descriptions.

### E3. Timeout

Does failure to halt within a minute prove divergence?

**Answer.** No. It proves only absence of a halting observation within that implementation, platform, and bound.

**Repair route.** Read Chapters 8 and 10 and practice translating numeric values to encoded lengths.

## F. Programs and state

### F1. Partial correctness

Does $\{P\}c{Q}$ ordinarily assert termination?

**Answer.** No. It states that if execution begins in $P$ and terminates, the result satisfies $Q$.

### F2. Invariant versus variant

Which proves preservation and which proves termination?

**Answer.** An invariant is preserved; a well-founded decreasing variant proves termination.

### F3. Aliasing

Why can updating through pointer $p$ affect a fact written using $q$?

**Answer.** $p$ and $q$ may denote the same address. Heap reasoning must track aliasing or disjoint ownership.

**Repair route.** Read Chapters 13, 16, and 17 in order.

## G. Logic and infinite behavior

### G1. Safety witness

Why can safety be refuted finitely?

**Answer.** Once a finite prefix reaches a forbidden observation, no continuation repairs that occurrence.

### G2. Liveness delay

Why does a finite delay not refute “eventually grant”?

**Answer.** A grant may occur later. A refuting behavior is an infinite path with no grant.

### G3. Solver result

What evidence distinguishes SAT from UNSAT?

**Answer.** A satisfying assignment is directly checkable for SAT. UNSAT needs a refutation proof, trusted exhaustive procedure, or equivalent certificate.

**Repair route.** Read Chapters 18–20 and keep path quantifiers, finite bounds, and evidence formats explicit.

## Routing summary

- Difficulty mainly in A–C: take a discrete mathematics proof route before the continuous book sequence.
- Difficulty mainly in D–E: begin Chapters 1–3, then 8–10 with small executable traces.
- Difficulty mainly in F: complete Chapter 13 before program logics.
- Difficulty mainly in G: study transition systems and propositional logic before temporal/model-checking chapters.
- Secure throughout: use the reference route, but still write malformed-input, encoding, and model-boundary clauses for every theorem.
