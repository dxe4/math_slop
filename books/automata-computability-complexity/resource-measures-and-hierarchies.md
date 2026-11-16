
# Time, Space, Savitch and PSPACE {#section-1-time-space-savitch-and-pspace}

Computability asks whether an algorithm exists; complexity asks how resource use grows with encoded input length. That extra quantitative layer requires a stable machine model, explicit worst-case quantifiers, and constructible bounds. This chapter defines time and space classes, explains robust simulation, separates uniform algorithms from circuit families, and proves why more asymptotic resources can decide strictly more languages.

<a id="section-3-1-input-length-and-worst-case-cost"></a>
## 1. Input length and worst-case cost {#section-5-1-input-length-and-worst-case-cost}

For machine $M$, let $\mathrm{time}_M(x)$ count transitions before halting and $\mathrm{space}_M(x)$ count distinct work-tape cells used, under a fixed model. Worst-case functions are

$T_M(n)=\max_{|x|=n} \mathrm{time}_M(x)$ and $S_M(n)=\max_{|x|=n} \mathrm{space}_M(x)$.

This definition assumes total halting when used for decision classes. Big-O hides constants and finitely many small inputs, not an unbounded dependence on input values omitted from length.

$TIME(t(n))$ contains languages decided in $\mathcal{O}(t(n))$ deterministic time; $SPACE(s(n))$ is analogous. Define

$\mathsf{P}=\bigcup_{k\ge 1}\mathsf{TIME}(n^k)$,
$\mathsf{PSPACE}=\bigcup_{k\ge 1}\mathsf{SPACE}(n^k)$,

and exponential analogues. Multi-tape and reasonable random-access models preserve broad polynomial classes through polynomial-overhead simulations, though exact time classes can be model-sensitive.

<a id="section-18-2-time-bounds-space"></a>
## 2. Time bounds space {#section-20-2-time-bounds-space}

A machine cannot visit more work cells than it has steps, so $TIME(t) \subseteq SPACE(t)$ under ordinary models. A space-bounded machine may run much longer: with finite control, input position, and $s(n)$ work cells there are at most exponentially many configurations in $s(n)+\log n$. A halting deterministic computation cannot repeat a configuration, hence uses at most exponential time.

This yields the broad containments $P \subseteq PSPACE \subseteq EXPTIME$ with model-appropriate polynomial or exponential bounds. Containment is not equality; proving strictness needs hierarchy theorems or unresolved separations.

<a id="section-24-3-nondeterministic-resources"></a>
## 3. Nondeterministic resources {#section-26-3-nondeterministic-resources}

$NTIME(t)$ and $NSPACE(s)$ accept when some bounded computation branch accepts. All branches must respect the resource bound. $NP$ is polynomial-time nondeterministic decision, equivalently polynomial-size certificates verified in polynomial deterministic time.

Savitch's theorem states

$NSPACE(s(n)) \subseteq SPACE(s(n)^2)$ for $s(n)\ge \log n$.

The proof recursively decides reachability between configurations within at most $2^k$ steps: guess conceptually an intermediate configuration, but a deterministic algorithm iterates over all intermediates and reuses space for the two recursive calls. Recursion depth is $\mathcal{O}(s)$ and each level stores $\mathcal{O}(s)$ bits. Time can be enormous; the theorem is a space result. It implies $PSPACE=NPSPACE$.

<a id="section-34-4-constructible-bounds"></a>
## 4. Constructible bounds {#section-36-4-constructible-bounds}

Diagonal hierarchy arguments need machines to know and respect their resource budget. Function $t(n)$ is time-constructible when a machine on length-$n$ input can arrange to run for $\Theta(t(n))$ steps; space-constructibility is similar for marking cells. Standard bounds such as $n \log n$, $n^k$, and $2^n$ satisfy suitable conditions.

Arbitrary pathological functions need not support clean clocking. Therefore hierarchy theorems state regularity assumptions rather than asserting separation for every numerical function.

<a id="section-40-5-deterministic-time-hierarchy"></a>
## 5. Deterministic time hierarchy {#section-42-5-deterministic-time-hierarchy}

**External theorem; the following paragraph is a proof architecture.** Use the standard clockable multitape form with time bounds at least linear, a constructible upper clock, and universal-simulation overhead. The outline is not a substitute for the full clocking and padding proof in the cited complexity reference.

A standard form says: if $t_2$ is time-constructible and $t_1(n) \log t_1(n)=o(t_2(n))$, then

$\mathsf{TIME}(t_1) \subsetneq \mathsf{TIME}(t_2)$.

The logarithmic gap accounts for universal simulation overhead in a standard multi-tape formulation.

**Proof architecture.** Enumerate clocked machines. Define language $D$ whose machine, on suitably encoded machine/index input of length $n$, simulates that machine for a $t_1(n)$-scale budget and flips its decision, while using at most $\mathcal{O}(t_2(n))$ time. If any $t_1$-time machine decided $D$, choose its own diagonal input at a padded length where the budget dominates simulation overhead; the answers conflict. Clocking guarantees the diagonal decider itself halts.

Consequently $P$ is a strict subset of $EXPTIME$. For example, take constructible bounds $t_1(n)=2^{\lceil\sqrt n\rceil}$ and $t_2(n)=2^n$. Every fixed polynomial is eventually bounded by $t_1$, while $t_1\log t_1=o(t_2)$. The hierarchy theorem gives one language in $\mathsf{TIME}(t_2)$ outside $\mathsf{TIME}(t_1)$, hence outside every polynomial-time class. This does **not** resolve $P$ versus $NP$.

<a id="section-54-6-space-hierarchy"></a>
## 6. Space hierarchy {#section-56-6-space-hierarchy}

**External theorem; diagonal outline only.** The space bounds satisfy the stated logarithmic minimum and constructibility assumptions. The separation theorem is cited; the following explanation names its mechanism without claiming a full universal diagonal construction.

If constructible $s_1=o(s_2)$ with at least logarithmic space, then

$\mathsf{SPACE}(s_1) \subsetneq \mathsf{SPACE}(s_2)$.

Universal space simulation can reuse tape and does not incur the same multiplicative time bookkeeping, so the gap condition is cleaner. A diagonal machine simulates and flips lower-space machines within an $s_2$ cell boundary. It detects excessive space or repeated configurations to ensure totality.

The theorem implies strict separations such as
$\mathsf{PSPACE}\subsetneq\mathsf{EXPSPACE}$. It does not automatically place
$\mathsf{NP}$ strictly inside $\mathsf{PSPACE}$.

<a id="section-68-7-circuits-and-nonuniformity"></a>
## 7. Circuits and nonuniformity {#section-70-7-circuits-and-nonuniformity}

A Boolean circuit is a finite acyclic graph of logic gates. A family $(C_n)$ decides a language when $C_n$ handles all inputs of length $n$. Size counts gates; depth counts the longest input-output path. Polynomial-size families define $P/poly$.

Unlike one Turing machine, an arbitrary circuit family may contain unrelated advice at each length. It is **nonuniform**. Every language in $P$ has polynomial-size circuits by unrolling a bounded computation, so $P \subseteq P/poly$. In fact $P\subsetneq P/poly$: choose an undecidable set $U\subseteq\mathbb N$ and let membership depend only on whether the input length lies in $U$. One nonuniform advice bit, or a constant-output circuit, decides each length slice, while no uniform decider exists.

A uniformity condition requires a machine to construct or describe $C_n$ efficiently. Circuit lower bounds must specify gate basis, fan-in, depth, uniformity, and size measure.

<a id="section-76-8-configuration-graphs"></a>
## 8. Configuration graphs {#section-78-8-configuration-graphs}

A space-bounded computation induces a directed configuration graph. Deterministic computation follows one path; nondeterministic acceptance is reachability of an accepting vertex. The graph may have exponentially many vertices but each configuration is short and local successors can be generated using small space.

This implicit-graph view drives Savitch recursion, PSPACE algorithms for games and formulas, and later model checking. Materializing the full graph changes the resource claim.

<a id="section-82-9-reductions-and-completeness"></a>
## 9. Reductions and completeness {#section-84-9-reductions-and-completeness}

Complexity reductions need resource bounds. A polynomial-time many-one reduction $f$ satisfies membership equivalence and computes an output whose encoded length is polynomial in input length. If $A \le_{p}  B$ and $B \in P$, then $A \in P$ by composition.

Completeness combines membership in a class with hardness for every language in it. Undecidability reductions and polynomial reductions share logical direction but differ in quantitative obligations.

<a id="section-88-10-claim-boundaries"></a>
## 10. Claim boundaries {#section-90-10-claim-boundaries}

- A polynomial exponent is part of the algorithm analysis, not allowed to depend on input.
- Worst-case, average-case, amortized, parameterized, and expected bounds are distinct.
- $P \subseteq NP \subseteq PSPACE \subseteq EXPTIME$; only some surrounding separations are known.
- Time hierarchy proves $P \ne  EXPTIME$, not $P \ne  NP$.
- Savitch trades potentially huge time for squared space.
- Polynomial circuits without uniformity are not automatically algorithms.
- Empirical runtime curves do not prove asymptotic lower bounds.


<a id="section-99-savitch-s-reachability-procedure-in-detail"></a>
## Savitch's reachability procedure in detail {#section-101-savitch-s-reachability-procedure-in-detail}

Use a read-only input tape and a fixed finite number of work tapes. The input head position is part of a configuration, so logarithmic input-length information must be counted even though input cells are not charged as work space. For a proposed work bound $B$, a configuration has $O(B+\log(n+2))$ bits. The state and alphabet are fixed; work contents, work-head positions and input-head position all fit in that bound. There are at most $2^{c(B+\log(n+2))}$ encoded configurations for a fixed constant $c$ depending only on the machine.

Given valid configurations $u,v$, define $R(u,v,k)$ to mean that a path of at most $2^k$ transitions exists from $u$ to $v$ in the bounded configuration graph. At $k=0$, test whether $u=v$ or one transition takes $u$ to $v$. At $k>0$, enumerate every valid configuration $w$ and accept if both $R(u,w,k-1)$ and $R(w,v,k-1)$ accept for some $w$.

**Lemma 12.1 (Midpoint correctness).** This deterministic recursive procedure decides the stated bounded-length reachability predicate.

*Proof.* The base case exactly covers paths of lengths zero and one. For a path of length $\ell\le2^k$, choose the point after $\min(\ell,2^{k-1})$ edges. Both resulting subpaths have length at most $2^{k-1}$, so induction accepts both calls at that midpoint. Conversely if both calls accept, induction gives their two paths; concatenate them to obtain length at most $2^k$. The enumeration includes the required midpoint. It is finite and each recursive call reduces $k$, so the procedure always terminates, whether or not a path exists. ∎

If the graph has at most $N$ vertices, any reachable target has a path of at most $N-1$ edges: remove a segment between repeated vertices until none repeats. Taking $k=\lceil\log_2N\rceil$ therefore decides unrestricted reachability in that finite graph. The graph is implicit; only one current configuration code is enumerated at a time. Storing all $N$ vertices would ruin the desired bound.

One recursion frame holds endpoints, a midpoint enumeration counter, $k$ and a small control flag, using $O(B+\log(n+2))$ bits. The first recursive call returns before the second is started, and its workspace is reused. Depth is $k=O(B+\log(n+2))$, so total space is $O((B+\log(n+2))^2)$. The enormous number of recursive calls increases time, not simultaneous stored frames. Counting the whole recursion tree as memory would confuse these two resources.

**Theorem 12.2 (Savitch).** If a nondeterministic machine uses $O(s(n))$ work space on every branch, with $s(n)\ge\log(n+2)$ up to harmless finite-input conventions, its language is decidable in deterministic $O(s(n)^2)$ work space.

*Proof for a supplied computable bound.* Choose $B$ large enough for the promised workspace. Enumerate the valid accepting configurations and use the reachability procedure from the initial configuration to each. An accepting nondeterministic branch exists exactly when one such target is reachable. The configuration count and preceding frame argument give $O(s(n)^2)$ space, with deterministic termination from the finite recursion and enumeration. No probability or random midpoint choice is involved.

*Removing a requirement to compute $s$.* Start instead with $B\ge\lceil\log_2(n+2)\rceil$. Add one special escape vertex to the bounded configuration graph, reached by any transition attempting to use work outside the represented window. First run bounded-graph reachability to this vertex. If escape is reachable, double $B$ and repeat. If escape is not reachable, no actual computation branch can leave the window: its first escaping transition would supply the missing path. In that case decide acceptance in this bounded graph as above and return the answer.

The actual uniform space bound ensures that once $B$ exceeds a fixed constant times $s(n)$, escape is impossible, so the outer process terminates. The first sufficient doubled value is at most twice that threshold, apart from the initial logarithmic bound. Workspace from smaller attempts is reused, and the maximum frame bound remains $O(s(n)^2)$. Thus no algorithm evaluating an arbitrary numerical function $s$ is needed for the general statement. Constructibility is still required where the separately cited hierarchy theorems invoke a specified clock or space boundary. ∎

Taking the union over polynomial space bounds gives NPSPACE contained in PSPACE; the reverse inclusion follows by viewing a deterministic machine as a nondeterministic one with one successor. Hence the classes are equal. This does not make nondeterministic polynomial *time* equal to deterministic polynomial time, because the reachability simulation can take far more time than any polynomial.

<a id="section-123-worked-example-1-a-midpoint-that-is-the-target"></a>
## Worked example 1: a midpoint that is the target {#section-125-worked-example-1-a-midpoint-that-is-the-target}

Consider graph edges $a\to b$, $b\to c$, with no outgoing edge at $c$. To test $R(a,c,2)$, a path of length two is shorter than the allowed four. The midpoint can be $c$: the two subproblems are $R(a,c,1)$ and $R(c,c,1)$. The first is accepted by midpoint $b$ and two one-edge tests. The second is accepted by its length-zero path. Thus permitting paths of *at most* the bound, including equality of endpoints, makes the recurrence work for short paths without padding the graph with artificial edges.

For the reverse query $R(c,a,2)$, every candidate midpoint eventually fails because there is no first outgoing edge from $c$ leading toward $a$. The recursion nevertheless terminates. This example separates the correctness of its finite search from its efficiency; enumerating a huge configuration graph would use the same logical recurrence with far more calls.

<a id="section-129-worked-example-2-space-can-hide-exponentially-many-stat"></a>
## Worked example 2: space can hide exponentially many states {#section-131-worked-example-2-space-can-hide-exponentially-many-stat}

A program has $m$ Boolean work cells, a fixed control state and a head index among those cells. The tape contents alone admit $2^m$ possibilities. Including the head adds a factor $m$ and finite control a constant factor; with a read-only input head add a factor $n+2$. The logarithm of this product is $m+\log_2m+\log_2(n+2)+O(1)$, which is $O(m)$ when $m\ge\log(n+2)$ and $m\ge2$.

An explicit visited table may therefore use exponential space. Savitch instead stores a bounded number of codes along each of $O(m)$ recursion levels, using $O(m^2)$ bits. It may revisit the same conceptual configuration many times. That repeated work is allowed in a space theorem; calling the graph finite is not a polynomial-time argument. The local transition predicate must also be computable within the stated work bound, which ordinary finite-table machine transitions satisfy.

<a id="section-135-worked-example-3-one-language-outside-every-polynomial-"></a>
## Worked example 3: one language outside every polynomial time bound {#section-137-worked-example-3-one-language-outside-every-polynomial-}

The cited deterministic time hierarchy must be applied to a single subexponential bound, not separately to each polynomial and then assumed to produce one shared witness. Choose $t_1(n)=2^{\lceil\sqrt n\rceil}$ and $t_2(n)=2^n$ in a standard constructible formulation. Every fixed polynomial is eventually bounded by $t_1$, while $t_1\log t_1=o(t_2)$. The theorem yields one language in TIME$(t_2)$ outside TIME$(t_1)$, hence outside every polynomial-time class. Therefore P is properly contained in EXPTIME.

The parallel space-hierarchy corollary uses one subexponential space bound dominating all polynomials and a larger exponential bound, establishing PSPACE properly contained in EXPSPACE. Neither corollary places a separating language inside NP. The known containments do not locate the witness that finely, so neither proof resolves P versus NP or NP versus PSPACE. The distinction is a quantifier issue as well as a resource-model issue.

The original circuit section remains as a bridge; [Circuit Complexity and Lower Bounds](circuit-complexity-and-lower-bounds.md) develops its model, counting argument and uniformity distinctions in full. [Polynomial Hierarchy and Oracles](polynomial-hierarchy-and-oracles.md) supplies the full QBF PSPACE-completeness proof. Those links identify where further theorems are proved rather than pretending the preceding configuration sketch already contains them.

<a id="section-143-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-145-exercises-with-complete-solutions}

<a id="section-145-exercise-1-unary-pseudopolynomial-cost"></a>
### Exercise 1: Unary pseudopolynomial cost {#section-147-exercise-1-unary-pseudopolynomial-cost}
<a id="resource-measures-and-hierarchies-ex-1"></a>

An algorithm takes $\mathcal{O}(N^2)$ steps for integer $N$. What is its cost in binary input length $n$?

<details>
<summary>Hint 1</summary>

An $n$-bit integer can have value near $2^n$.

</details>
<details>
<summary>Hint 2</summary>

Square that value, not the bit count.

</details>
<details>
<summary>Solution</summary>

Since $N$ can be about $2^n$, the bound can be $\mathcal{O}(4^n)$, exponential in encoded length. Calling it polynomial without naming encoding is misleading.

</details>

<a id="section-169-exercise-2-time-implies-space"></a>
### Exercise 2: Time implies space {#section-171-exercise-2-time-implies-space}
<a id="resource-measures-and-hierarchies-ex-2"></a>

Prove $TIME(t) \subseteq SPACE(t)$.

<details>
<summary>Hint 1</summary>

Each step can reach at most one new work cell per tape.

</details>
<details>
<summary>Hint 2</summary>

A fixed tape count changes only a constant.

</details>
<details>
<summary>Solution</summary>

In one transition a machine can first enter at most one previously unvisited work cell. A computation of at most $ct(n)$ steps therefore visits at most that many cells.

</details>

<a id="section-193-exercise-3-repeated-configurations"></a>
### Exercise 3: Repeated configurations {#section-195-exercise-3-repeated-configurations}
<a id="resource-measures-and-hierarchies-ex-3"></a>

Why can a halting deterministic run not repeat a configuration?

<details>
<summary>Hint 1</summary>

Identical configurations have identical future runs.

</details>
<details>
<summary>Hint 2</summary>

A repeated segment would recur indefinitely.

</details>
<details>
<summary>Solution</summary>

Determinism gives the same successor from identical configurations. Repetition would reproduce the intervening cycle forever, preventing later halting.

</details>

<a id="section-217-exercise-4-certificate-view-of-np"></a>
### Exercise 4: Certificate view of NP {#section-219-exercise-4-certificate-view-of-np}
<a id="resource-measures-and-hierarchies-ex-4"></a>

State the quantifiers.

<details>
<summary>Hint 1</summary>

Name both polynomial witness length and deterministic verification.

</details>
<details>
<summary>Hint 2</summary>

Use an if and only if for every input.

</details>
<details>
<summary>Solution</summary>

$L \in NP$ when some polynomial $p$ and polynomial-time verifier $V$ satisfy: for every $x$, $x \in L$ iff there exists certificate $y$ with $|y|\le p(|x|)$ and $V(x,y)=1$.

</details>

<a id="section-241-exercise-5-savitch-midpoint"></a>
### Exercise 5: Savitch midpoint {#section-243-exercise-5-savitch-midpoint}
<a id="resource-measures-and-hierarchies-ex-5"></a>

Why is recursive path length halved?

<details>
<summary>Hint 1</summary>

Split an existing path after at most half the allowed length.

</details>
<details>
<summary>Hint 2</summary>

A short path may have its target itself as midpoint.

</details>
<details>
<summary>Solution</summary>

A path of at most $2^k$ edges has a midpoint after at most $2^{k-1}$ edges. Guessing or iterating over its configuration reduces reachability to two subproblems with half the length bound.

</details>

<a id="section-265-exercise-6-savitch-space-reuse"></a>
### Exercise 6: Savitch space reuse {#section-267-exercise-6-savitch-space-reuse}
<a id="resource-measures-and-hierarchies-ex-6"></a>

Why are the two recursive calls not stored simultaneously?

<details>
<summary>Hint 1</summary>

The first Boolean answer can be remembered in one flag.

</details>
<details>
<summary>Hint 2</summary>

Reuse its work area for the second call.

</details>
<details>
<summary>Solution</summary>

The algorithm evaluates them sequentially, reusing workspace after the first returns while retaining only endpoints and midpoint. Thus space follows recursion depth times one configuration, not the search tree's total size.

</details>

<a id="section-289-exercise-7-clocking"></a>
### Exercise 7: Clocking {#section-291-exercise-7-clocking}
<a id="resource-measures-and-hierarchies-ex-7"></a>

What failure does a time clock prevent in diagonalization?

<details>
<summary>Hint 1</summary>

A simulated program might never halt.

</details>
<details>
<summary>Hint 2</summary>

A clock bounds even that run.

</details>
<details>
<summary>Solution</summary>

The simulated indexed machine may not halt. Stopping after the allocated budget ensures the diagonal machine is itself a total decider within its claimed time.

</details>

<a id="section-313-exercise-8-known-separation"></a>
### Exercise 8: Known separation {#section-315-exercise-8-known-separation}
<a id="resource-measures-and-hierarchies-ex-8"></a>

Does time hierarchy show $P \ne  EXPTIME$?

<details>
<summary>Hint 1</summary>

Choose one lower bound dominating every fixed polynomial.

</details>
<details>
<summary>Hint 2</summary>

Keep the same separating witness for the whole union.

</details>
<details>
<summary>Solution</summary>

Yes. Set $t_1(n)=2^{\lceil\sqrt n\rceil}$ and $t_2(n)=2^n$. Every fixed polynomial is eventually bounded by $t_1$, and $t_1\log t_1=o(t_2)$. Time hierarchy therefore produces one language in $\mathsf{TIME}(t_2)$ but outside $\mathsf{TIME}(t_1)$, so that single language lies in $EXPTIME\setminus P$.

</details>

<a id="section-337-exercise-9-unknown-separation"></a>
### Exercise 9: Unknown separation {#section-339-exercise-9-unknown-separation}
<a id="resource-measures-and-hierarchies-ex-9"></a>

Why does the previous result not prove $P \ne  NP$?

<details>
<summary>Hint 1</summary>

The witness lies only in the larger deterministic class supplied by hierarchy.

</details>
<details>
<summary>Hint 2</summary>

Nothing places it in NP.

</details>
<details>
<summary>Solution</summary>

It separates deterministic classes with widely different time bounds. NP lies between P and larger known classes, and the diagonal proof does not establish that nondeterministic polynomial time contains a language outside P.

</details>

<a id="section-361-exercise-10-undecidable-language-in-p-poly"></a>
### Exercise 10: Undecidable language in $P/poly$ {#section-363-exercise-10-undecidable-language-in-p-poly}
<a id="resource-measures-and-hierarchies-ex-10"></a>

Explain how this is possible.

<details>
<summary>Hint 1</summary>

Advice can depend on length without being computable.

</details>
<details>
<summary>Hint 2</summary>

Use one constant output bit for each length.

</details>
<details>
<summary>Solution</summary>

Choose an undecidable set $U$ of natural numbers and define $L=\{x:|x| \in U\}$. For each length $n$, let $C_n$ be the constant-output circuit whose bit says whether $n \in U$. The family has constant-size circuits, but no uniform algorithm can generate those bits; otherwise it would decide $U$.

</details>

<a id="section-385-exercise-11-circuit-unrolling"></a>
### Exercise 11: Circuit unrolling {#section-387-exercise-11-circuit-unrolling}
<a id="resource-measures-and-hierarchies-ex-11"></a>

Why does a polynomial-time computation yield polynomial-size circuits?

<details>
<summary>Hint 1</summary>

Bound the finite configuration at each time layer.

</details>
<details>
<summary>Hint 2</summary>

Local transition functions can be compiled into gates.

</details>
<details>
<summary>Solution</summary>

For fixed input length, represent each bounded transition layer by a finite circuit and connect polynomially many layers. Local transition logic has polynomial total size, and constants encode the fixed length.

</details>

<a id="section-409-exercise-12-reduction-output-length"></a>
### Exercise 12: Reduction output length {#section-411-exercise-12-reduction-output-length}
<a id="resource-measures-and-hierarchies-ex-12"></a>

Why must polynomial-time reductions control output length explicitly?

<details>
<summary>Hint 1</summary>

Writing symbols takes time in the reduction model.

</details>
<details>
<summary>Hint 2</summary>

Compose the destination algorithm with a polynomial-sized output.

</details>
<details>
<summary>Solution</summary>

A machine cannot physically write more symbols than its running time, so a genuinely polynomial-time transformer has polynomial output length. Stating it makes composition and downstream runtime bounds auditable.

</details>

[Book overview](#/books/formal-computation-proof-reference)


<a id="section-436-sources"></a>
## Sources {#section-438-sources}

This chapter retains and expands Time, Space, Circuits and Hierarchy Arguments, including its twelve original solved exercises. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), is the benchmark and cited source for the hierarchy theorems, whose outlines are explicitly distinguished from complete proofs. Michael Sipser's [official MIT lecture index](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html) includes Savitch and PSPACE. The reachability and bounded-window proofs are supplied here.

<a id="section-440-summary"></a>
## Summary {#section-442-summary}

Resources are measured against encoded input length under one declared machine model. Configuration graphs can be exponentially large while their vertices remain short. Savitch's midpoint recursion enumerates those vertices implicitly and reuses space between its two calls, giving squared deterministic space; an escape test can locate a sufficient workspace bound. Hierarchy separations require the cited clocking hypotheses and do not resolve P versus NP. Circuit and QBF claims are developed in their linked later chapters.
