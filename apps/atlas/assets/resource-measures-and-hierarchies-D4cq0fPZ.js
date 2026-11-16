var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: resource-measures-and-hierarchies
title: "Time, Space, Circuits, and Hierarchy Arguments"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Time, Space, Circuits, and Hierarchy Arguments

Computability asks whether an algorithm exists; complexity asks how resource use grows with encoded input length. That extra quantitative layer requires a stable machine model, explicit worst-case quantifiers, and constructible bounds. This chapter defines time and space classes, explains robust simulation, separates uniform algorithms from circuit families, and proves why more asymptotic resources can decide strictly more languages.

## 1. Input length and worst-case cost

For machine $M$, let $time_M(x)$ count transitions before halting and $space_M(x)$ count distinct work-tape cells used, under a fixed model. Worst-case functions are

$T_M(n)=max_{|x|=n} time_M(x)$ and $S_M(n)=max_{|x|=n} space_M(x)$.

This definition assumes total halting when used for decision classes. Big-O hides constants and finitely many small inputs, not an unbounded dependence on input values omitted from length.

$TIME(t(n))$ contains languages decided in $\\mathcal{O}(t(n))$ deterministic time; $SPACE(s(n))$ is analogous. Define

$\\mathsf{P}=\\bigcup_{k\\ge 1}\\mathsf{TIME}(n^k)$,
$\\mathsf{PSPACE}=\\bigcup_{k\\ge 1}\\mathsf{SPACE}(n^k)$,

and exponential analogues. Multi-tape and reasonable random-access models preserve broad polynomial classes through polynomial-overhead simulations, though exact time classes can be model-sensitive.

## 2. Time bounds space

A machine cannot visit more work cells than it has steps, so $TIME(t) \\subseteq SPACE(t)$ under ordinary models. A space-bounded machine may run much longer: with finite control, input position, and $s(n)$ work cells there are at most exponentially many configurations in $s(n)+\\log n$. A halting deterministic computation cannot repeat a configuration, hence uses at most exponential time.

This yields the broad containments $P \\subseteq PSPACE \\subseteq EXPTIME$ with model-appropriate polynomial or exponential bounds. Containment is not equality; proving strictness needs hierarchy theorems or unresolved separations.

## 3. Nondeterministic resources

$NTIME(t)$ and $NSPACE(s)$ accept when some bounded computation branch accepts. All branches must respect the resource bound. $NP$ is polynomial-time nondeterministic decision, equivalently polynomial-size certificates verified in polynomial deterministic time.

Savitch's theorem states

$NSPACE(s(n)) \\subseteq SPACE(s(n)^2)$ for $s(n)\\ge \\log n$.

The proof recursively decides reachability between configurations within at most $2^k$ steps: guess conceptually an intermediate configuration, but a deterministic algorithm iterates over all intermediates and reuses space for the two recursive calls. Recursion depth is $\\mathcal{O}(s)$ and each level stores $\\mathcal{O}(s)$ bits. Time can be enormous; the theorem is a space result. It implies $PSPACE=NPSPACE$.

## 4. Constructible bounds

Diagonal hierarchy arguments need machines to know and respect their resource budget. Function $t(n)$ is time-constructible when a machine on length-$n$ input can arrange to run for $\\Theta(t(n))$ steps; space-constructibility is similar for marking cells. Standard bounds such as $n \\log n$, $n^k$, and $2^n$ satisfy suitable conditions.

Arbitrary pathological functions need not support clean clocking. Therefore hierarchy theorems state regularity assumptions rather than asserting separation for every numerical function.

## 5. Deterministic time hierarchy

A standard form says: if $t_2$ is time-constructible and $t_1(n) \\log t_1(n)=o(t_2(n))$, then

$\\mathsf{TIME}(t_1) \\subsetneq \\mathsf{TIME}(t_2)$.

The logarithmic gap accounts for universal simulation overhead in a standard multi-tape formulation.

**Proof architecture.** Enumerate clocked machines. Define language $D$ whose machine, on suitably encoded machine/index input of length $n$, simulates that machine for a $t_1(n)$-scale budget and flips its decision, while using at most $\\mathcal{O}(t_2(n))$ time. If any $t_1$-time machine decided $D$, choose its own diagonal input at a padded length where the budget dominates simulation overhead; the answers conflict. Clocking guarantees the diagonal decider itself halts.

Consequently $P$ is a strict subset of $EXPTIME$. For example, take constructible bounds $t_1(n)=2^{\\lceil\\sqrt n\\rceil}$ and $t_2(n)=2^n$. Every fixed polynomial is eventually bounded by $t_1$, while $t_1\\log t_1=o(t_2)$. The hierarchy theorem gives one language in $\\mathsf{TIME}(t_2)$ outside $\\mathsf{TIME}(t_1)$, hence outside every polynomial-time class. This does **not** resolve $P$ versus $NP$.

## 6. Space hierarchy

If constructible $s_1=o(s_2)$ with at least logarithmic space, then

$\\mathsf{SPACE}(s_1) \\subsetneq \\mathsf{SPACE}(s_2)$.

Universal space simulation can reuse tape and does not incur the same multiplicative time bookkeeping, so the gap condition is cleaner. A diagonal machine simulates and flips lower-space machines within an $s_2$ cell boundary. It detects excessive space or repeated configurations to ensure totality.

The theorem implies strict separations such as
$\\mathsf{PSPACE}\\subsetneq\\mathsf{EXPSPACE}$. It does not automatically place
$\\mathsf{NP}$ strictly inside $\\mathsf{PSPACE}$.

## 7. Circuits and nonuniformity

A Boolean circuit is a finite acyclic graph of logic gates. A family $(C_n)$ decides a language when $C_n$ handles all inputs of length $n$. Size counts gates; depth counts the longest input-output path. Polynomial-size families define $P/poly$.

Unlike one Turing machine, an arbitrary circuit family may contain unrelated advice at each length. It is **nonuniform**. Every language in $P$ has polynomial-size circuits by unrolling a bounded computation, so $P \\subseteq P/poly$. In fact $P\\subsetneq P/poly$: choose an undecidable set $U\\subseteq\\mathbb N$ and let membership depend only on whether the input length lies in $U$. One nonuniform advice bit, or a constant-output circuit, decides each length slice, while no uniform decider exists.

A uniformity condition requires a machine to construct or describe $C_n$ efficiently. Circuit lower bounds must specify gate basis, fan-in, depth, uniformity, and size measure.

## 8. Configuration graphs

A space-bounded computation induces a directed configuration graph. Deterministic computation follows one path; nondeterministic acceptance is reachability of an accepting vertex. The graph may have exponentially many vertices but each configuration is short and local successors can be generated using small space.

This implicit-graph view drives Savitch recursion, PSPACE algorithms for games and formulas, and later model checking. Materializing the full graph changes the resource claim.

## 9. Reductions and completeness

Complexity reductions need resource bounds. A polynomial-time many-one reduction $f$ satisfies membership equivalence and computes an output whose encoded length is polynomial in input length. If $A \\le_{p}  B$ and $B \\in P$, then $A \\in P$ by composition.

Completeness combines membership in a class with hardness for every language in it. Undecidability reductions and polynomial reductions share logical direction but differ in quantitative obligations.

## 10. Claim boundaries

- A polynomial exponent is part of the algorithm analysis, not allowed to depend on input.
- Worst-case, average-case, amortized, parameterized, and expected bounds are distinct.
- $P \\subseteq NP \\subseteq PSPACE \\subseteq EXPTIME$; only some surrounding separations are known.
- Time hierarchy proves $P \\ne  EXPTIME$, not $P \\ne  NP$.
- Savitch trades potentially huge time for squared space.
- Polynomial circuits without uniformity are not automatically algorithms.
- Empirical runtime curves do not prove asymptotic lower bounds.

## Exercises with complete solutions

### 1. Unary pseudopolynomial cost

An algorithm takes $\\mathcal{O}(N^2)$ steps for integer $N$. What is its cost in binary input length $n$?

**Solution.** Since $N$ can be about $2^n$, the bound can be $\\mathcal{O}(4^n)$, exponential in encoded length. Calling it polynomial without naming encoding is misleading.

### 2. Time implies space

Prove $TIME(t) \\subseteq SPACE(t)$.

**Solution.** In one transition a machine can first enter at most one previously unvisited work cell. A computation of at most $ct(n)$ steps therefore visits at most that many cells.

### 3. Repeated configurations

Why can a halting deterministic run not repeat a configuration?

**Solution.** Determinism gives the same successor from identical configurations. Repetition would reproduce the intervening cycle forever, preventing later halting.

### 4. Certificate view of NP

State the quantifiers.

**Solution.** $L \\in NP$ when some polynomial $p$ and polynomial-time verifier $V$ satisfy: for every $x$, $x \\in L$ iff there exists certificate $y$ with $|y|\\le p(|x|)$ and $V(x,y)=1$.

### 5. Savitch midpoint

Why is recursive path length halved?

**Solution.** A path of at most $2^k$ edges has a midpoint after at most $2^{k-1}$ edges. Guessing or iterating over its configuration reduces reachability to two subproblems with half the length bound.

### 6. Savitch space reuse

Why are the two recursive calls not stored simultaneously?

**Solution.** The algorithm evaluates them sequentially, reusing workspace after the first returns while retaining only endpoints and midpoint. Thus space follows recursion depth times one configuration, not the search tree's total size.

### 7. Clocking

What failure does a time clock prevent in diagonalization?

**Solution.** The simulated indexed machine may not halt. Stopping after the allocated budget ensures the diagonal machine is itself a total decider within its claimed time.

### 8. Known separation

Does time hierarchy show $P \\ne  EXPTIME$?

**Solution.** Yes. Set $t_1(n)=2^{\\lceil\\sqrt n\\rceil}$ and $t_2(n)=2^n$. Every fixed polynomial is eventually bounded by $t_1$, and $t_1\\log t_1=o(t_2)$. Time hierarchy therefore produces one language in $\\mathsf{TIME}(t_2)$ but outside $\\mathsf{TIME}(t_1)$, so that single language lies in $EXPTIME\\setminus P$.

### 9. Unknown separation

Why does the previous result not prove $P \\ne  NP$?

**Solution.** It separates deterministic classes with widely different time bounds. NP lies between P and larger known classes, and the diagonal proof does not establish that nondeterministic polynomial time contains a language outside P.

### 10. Undecidable language in $P/poly$

Explain how this is possible.

**Solution.** Choose an undecidable set $U$ of natural numbers and define $L=\\{x:|x| \\in U\\}$. For each length $n$, let $C_n$ be the constant-output circuit whose bit says whether $n \\in U$. The family has constant-size circuits, but no uniform algorithm can generate those bits; otherwise it would decide $U$.

### 11. Circuit unrolling

Why does a polynomial-time computation yield polynomial-size circuits?

**Solution.** For fixed input length, represent each bounded transition layer by a finite circuit and connect polynomially many layers. Local transition logic has polynomial total size, and constants encode the fixed length.

### 12. Reduction output length

Why must polynomial-time reductions control output length explicitly?

**Solution.** A machine cannot physically write more symbols than its running time, so a genuinely polynomial-time transformer has polynomial output length. Stating it makes composition and downstream runtime bounds auditable.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};