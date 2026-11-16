var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: cost-amortization-lower-bounds
title: "Cost, Amortization, and Lower Bounds"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Cost, Amortization, and Lower Bounds {#section-1-cost-amortization-and-lower-bounds}

Complexity is not a property of source code alone. It relates an encoded input, a computation model, a resource, and a choice of worst, average, expected, or amortized quantifier.

<a id="section-3-1-what-exactly-is-n"></a>
## 1. What exactly is $n$? {#section-5-1-what-exactly-is-n}

If an algorithm receives an integer $N$, its binary input length is about $\\log_{2} N$. Trial division through $\\sqrt{N}$ is polynomial in the *value* $N$ but exponential in its bit length. If an algorithm receives a graph, $n$ might mean vertices while the input also has $m$ edges. A bound $\\mathcal{O}(n^{2})$ can be meaningless until the representation is stated.

Under a unit-cost random-access model, array indexing and word arithmetic cost constant time. Under bit complexity, adding $b$-bit integers costs at least proportional to $b$, and multiplication has its own size-dependent cost. Neither model is universally “the” truth; each supports a different theorem.

<a id="section-9-2-upper-bounds-from-sums-and-recurrences"></a>
## 2. Upper bounds from sums and recurrences {#section-11-2-upper-bounds-from-sums-and-recurrences}

An insertion-sort pass may compare the new item against up to $i$ predecessors. Summing gives

\\[\\sum_{i=1}^{n-1} i = n(n-1)/2 = \\Theta(n^{2})\\]

in the descending worst case. In an already sorted array, each pass stops after one comparison, giving $\\Theta(n)$. Naming only “the runtime” loses the input quantifier.

For divide-and-conquer recurrences, a recursion tree often reveals the proof. If

$T(n)=2T(n/2)+n$,

each level contributes $n$, with $\\log_{2}n$ nonleaf levels, giving $\\Theta(n \\log n)$. If

$T(n)=T(n/2)+1$,

each level contributes a constant, giving $\\Theta(\\log n)$. The substitution method then checks the guessed bound with constants and base cases.

<a id="section-27-3-amortized-analysis-is-deterministic-accounting"></a>
## 3. Amortized analysis is deterministic accounting {#section-29-3-amortized-analysis-is-deterministic-accounting}

Amortized cost averages over an operation sequence without assuming random inputs. A dynamic array doubles when full. Most appends cost one write; a resize at capacity $2^k$ copies $2^k$ entries. Across the first $n$ appends, every copied capacity is a power of two strictly smaller than $n$. If $2^k<n\\le 2^{k+1}$, total copies are

$1+2+4+\\ldots+2^k=2^{k+1}-1<2n$.

Thus total work is linear and amortized append cost is constant, although one append is linear.

The accounting method can charge each append three tokens: one pays its write and two are saved on the element to fund a future copy. The potential method packages saved work in a function $Phi(state)$. Amortized cost is

$actual cost + Phi(after) - Phi(before)$.

If potential is nonnegative and starts at zero, the sum of amortized costs upper-bounds total actual cost. A negative or unbounded-below potential can make the proof fictitiously cheap.

<a id="section-41-4-expected-cost-is-not-amortized-cost"></a>
## 4. Expected cost is not amortized cost {#section-43-4-expected-cost-is-not-amortized-cost}

Randomized quicksort chooses pivots randomly. For distinct keys, compare a pair exactly when one is the first chosen pivot among the keys lying between them. If their rank distance is $d$, that probability is $2/(d+1)$. Summing indicator expectations over pairs gives $\\mathcal{O}(n \\log n)$ expected comparisons.

This expectation is over the algorithm’s random pivot choices for a fixed input order. It does not say every run is fast; a run can still take quadratic time. A tail bound or an introspective fallback is needed for a high-probability or worst-case claim.

<a id="section-47-5-comparison-lower-bounds"></a>
## 5. Comparison lower bounds {#section-49-5-comparison-lower-bounds}

A deterministic comparison sort can be represented by a decision tree. Each internal node asks one comparison; each leaf must identify an input ordering. Sorting $n$ distinct items requires at least $n!$ distinguishable leaves. A binary tree of height $h$ has at most $2^h$ leaves, so

$2^h \\ge n!$, hence $h \\ge \\log_{2}(n!) = \\Omega(n \\log n)$.

The last estimate follows, for example, because at least $n/2$ factors in $n!$ are at least $n/2$. This lower bound applies to comparison sorting. Counting sort avoids it by using integer keys and operations beyond pairwise comparison; that is not a contradiction but a changed model.

<a id="section-55-6-reductions-transfer-hardness"></a>
## 6. Reductions transfer hardness {#section-57-6-reductions-transfer-hardness}

Suppose problem $A$ transforms in polynomial time to problem $B$, written $A \\le_p B$. If $B$ has a polynomial-time algorithm, then compose the transformation with that algorithm to solve $A$ in polynomial time. Contrapositively, if $A$ is known not to have a certain kind of algorithm, the reduction may rule one out for $B$.

Reduction direction is a common failure. To argue $B$ is at least as hard as $A$, reduce **from $A$ to $B$**. Solving the destination would solve the source.

A reduction must preserve yes and no instances:

$x \\in A \\iff f(x) \\in B$.

Mapping only yes-instances correctly is insufficient. The encoding size of $f(x)$ and time to construct it also matter.

<a id="section-67-7-certificates-and-nondeterministic-verification"></a>
## 7. Certificates and nondeterministic verification {#section-69-7-certificates-and-nondeterministic-verification}

A decision problem lies in $\\mathsf{NP}$ when there is a polynomial-time deterministic verifier and a polynomial length bound such that an instance is a yes-instance **if and only if** at least one certificate within the bound is accepted. Thus every no-instance has no accepted bounded certificate. For Hamiltonian cycle, the certificate is a vertex ordering. The verifier checks each vertex appears exactly once and consecutive vertices, including last-to-first, are edges.

This definition does not mean “non-polynomial,” “probably hard,” or “randomized.” $P$ is contained in $\\mathsf{NP}$ because an efficient decider can ignore the certificate. Whether every efficiently verifiable yes-answer is efficiently decidable is a separate question. This book uses neither possible answer as an established lemma.

<a id="section-73-8-space-and-time-are-different-resources"></a>
## 8. Space and time are different resources {#section-75-8-space-and-time-are-different-resources}

Depth-first reachability can revisit computation while storing only a path and local state. Breadth-first search may use a large frontier to minimize edges. A polynomial-time computation uses at most polynomial space because it cannot touch more cells than time steps, but a polynomial-space algorithm may run for exponential time.

Streaming models restrict memory relative to input length and often permit one or a few passes. Communication complexity counts information exchanged between parties holding different parts of an input. Query complexity counts observations. Each model exposes a distinct bottleneck hidden by ordinary runtime.

<a id="section-79-worked-audit-binary-counter"></a>
## Worked audit: binary counter {#section-81-worked-audit-binary-counter}

Increment an initially zero $k$-bit binary counter $n$ times. One increment may flip all $k$ bits, but bit $j$ flips once every $2^j$ increments. Total flips are at most

$n + n/2 + n/4 + \\ldots < 2n$.

Thus the amortized flips per increment are below two. This does not mean every increment flips fewer than two bits, nor does it include arbitrary-precision memory allocation costs.

<a id="section-87-common-errors"></a>
## Common errors {#section-89-common-errors}

- Writing $\\Theta$ when a matching lower bound was not proved; an $O$ claim needs only the upper bound.
- Dropping a second size parameter such as edge count or bit length.
- Averaging operation cost and calling it an average-case input analysis.
- Invoking a Master-theorem pattern when subproblem sizes or nonrecursive costs violate its hypotheses.
- Claiming a lower bound without stating the allowed operations.
- Reversing a hardness reduction.


<a id="section-97-worked-example-1-an-exact-divide-and-conquer-recurrence"></a>
## Worked example 1: an exact divide-and-conquer recurrence {#section-99-worked-example-1-an-exact-divide-and-conquer-recurrence}

Assume $T(1)=b$ with $b\\ge0$, and $T(n)=2T(n/2)+cn$ on powers of two, where $c>0$ is fixed. For $n=2^k$, divide the recurrence by $n$: $T(2^k)/2^k=T(2^{k-1})/2^{k-1}+c$. Repeating exactly $k$ times gives
$$T(2^k)=2^k b+ck2^k=bn+cn\\log_2n.$$
This is an equality under the stated cost recurrence, so it supplies both an upper and a lower asymptotic bound. For example at $n=8$ there are three nonleaf levels, each costing $8c$, and eight leaves, each costing $b$. Counting only the height would miss the work performed by all subproblems at a level.

An actual merge-sort recurrence on arbitrary integers is $T(n)=T(\\lfloor n/2\\rfloor)+T(\\lceil n/2\\rceil)+cn$ for $n\\ge2$, with the same unit base cost. At each level the subproblem sizes sum to $n$. There are at most $\\lceil\\log_2n\\rceil$ nonleaf levels, giving an upper bound $bn+cn\\lceil\\log_2n\\rceil$. For the first $\\lfloor\\log_2n\\rfloor$ levels every subproblem that contributes is still nontrivial, so each costs a total $cn$; this gives the matching lower bound $cn\\lfloor\\log_2n\\rfloor$. Thus rounding changes constants and the exact formula, while preserving $\\Theta(n\\log n)$. The proof explicitly uses linear combine work and balanced splitting; it is not permission to apply that bound to any recursive program.

<a id="section-105-worked-example-2-halving-does-not-determine-total-cost"></a>
## Worked example 2: halving does not determine total cost {#section-107-worked-example-2-halving-does-not-determine-total-cost}

For $B(0)=0$ and $B(n)=B(\\lfloor n/2\\rfloor)+1$ when $n\\ge1$, every step halves the positive integer until zero. The successive positive sizes are $n,\\lfloor n/2\\rfloor,\\ldots,1$. There are $\\lfloor\\log_2n\\rfloor+1$ of them, so that is the exact cost. In particular a size-one input has cost one rather than the zero suggested by writing only $\\log_2 1$.

Now change the nonrecursive work to the current size: $L(1)=b$, $L(n)=L(\\lfloor n/2\\rfloor)+n$ for $n\\ge2$. The depth is still logarithmic, but the work is bounded above by $n+n/2+n/4+\\cdots+b<2n+b$. The first call alone costs $n$, giving $\\Theta(n)$. For powers of two the exact expression is $b+2n-2$. Both recurrences have the same decreasing size measure. Their different per-level work produces different total costs. A recursion tree must count the work at each node and each level, not only the number of levels.

<a id="section-111-worked-example-3-potential-telescopes-over-a-concrete-t"></a>
## Worked example 3: potential telescopes over a concrete trace {#section-113-worked-example-3-potential-telescopes-over-a-concrete-t}

Use a stack whose pushes cost one and whose multipop removes up to the requested number of available entries, charging one for each actual removal. Let potential be stack size. On the trace push $A$, push $B$, multipop three, push $C$, the actual item costs are $1,1,2,1$. Potentials are $0,1,2,0,1$, so amortized costs are $2,2,0,2$. Their sum is six, while actual cost is five: the difference is the final potential one.

In general the identity is
$$\\sum_i c_i=\\sum_i\\widehat c_i+\\Phi_0-\\Phi_m.$$
Nonnegative final potential and zero initial potential make total actual cost no greater than total amortized cost. Constant overhead for each operation can be charged separately, giving $O(m)$ over $m$ operations even if many requested pops find nothing. The argument uses no probability distribution and permits adversarial requests. It does not assert each individual operation costs a constant, since the single multipop above removes two entries and a longer one can remove arbitrarily many. The separate initial-potential term must be kept if the analysis begins with an already populated stack.

<a id="section-119-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-121-exercises-with-complete-solutions}


<a id="section-122-exercise-1"></a>
### Exercise 1 {#section-124-exercise-1}
<a id="cost-amortization-lower-bounds-ex-1"></a>

Why can hash-table lookup be expected constant time yet worst-case linear?

<details>
<summary>Hint 1</summary>

Name the probability space behind the expectation.

</details>
<details>
<summary>Hint 2</summary>

One hash function can still place every key in the same bucket.

</details>
<details>
<summary>Solution</summary>

The expectation depends on a hash-family or input model; many keys can still collide in one bucket in a particular state.

The conditional statement may hold for every fixed query and stored set with expectation over a randomly chosen hash function, while failing as a deterministic worst-case statement. A collision family that sends all keys to one chain shows the possible linear run. If later keys depend on observed hash behavior, a separate adaptive-adversary theorem is required.

</details>

<a id="section-148-exercise-2"></a>
### Exercise 2 {#section-150-exercise-2}
<a id="cost-amortization-lower-bounds-ex-2"></a>

A procedure runs in $\\mathcal{O}(N)$ on numeric input $N$. Is it polynomial time?

<details>
<summary>Hint 1</summary>

Compare numeric value with binary encoding length.

</details>
<details>
<summary>Hint 2</summary>

A number near $2^b$ needs only about $b$ input bits.

</details>
<details>
<summary>Solution</summary>

Not necessarily: binary encoding length is $\\Theta(\\log N)$, so $\\mathcal{O}(N)$ may be exponential in input length.

Writing $b=\\lceil\\log_2(N+1)\\rceil$, inputs of length about $b$ may have value near $2^b$. A bound linear in $N$ can therefore be exponential in $b$. The runtime statement remains mathematically correct under its original numeric parameter, but the classification as polynomial time must use encoded input length.

</details>

<a id="section-174-exercise-3"></a>
### Exercise 3 {#section-176-exercise-3}
<a id="cost-amortization-lower-bounds-ex-3"></a>

Why does a certificate verify only yes-instances in the basic $\\mathsf{NP}$ definition?

<details>
<summary>Hint 1</summary>

Write both directions of the verifier equivalence.

</details>
<details>
<summary>Hint 2</summary>

No-instance certificates must all be rejected.

</details>
<details>
<summary>Solution</summary>

The verifier needs an accepting witness exactly when the answer is yes; no-instances must have no accepting certificate.

For valid input $x$, membership in NP requires $x\\in L$ exactly when some certificate of polynomially bounded length is accepted by a polynomial-time verifier. Thus every no-instance rejects all such certificates. The verifier may be deterministic; nondeterminism is represented by existential witness choice, not by a chance that an incorrect no-instance is accepted.

</details>

<a id="section-200-exercise-4"></a>
### Exercise 4 {#section-202-exercise-4}
<a id="cost-amortization-lower-bounds-ex-4"></a>

Count the exact inner-loop executions.

A loop runs $for i=1,\\ldots,n$ and inside runs $for j=1,\\ldots,i^{2}$. Give a tight asymptotic bound with justification.

<details>
<summary>Hint 1</summary>

Sum the inner iteration count over every outer index.

</details>
<details>
<summary>Hint 2</summary>

Upper-bound every term and lower-bound the last half.

</details>
<details>
<summary>Solution</summary>

The exact count is $\\sum_{i=1}^n i^{2}=n(n+1)(2n+1)/6$, which is $\\Theta(n^{3})$. For a bound not using the formula, the sum is at most $n*n^{2}=n^{3}$; its last $n/2$ terms are each at least $(n/2)^{2}$, giving at least $n^{3}/8$ for $n\\ge 2$. Matching bounds establish $\\Theta$, not merely $O$.

</details>

<a id="section-226-exercise-5"></a>
### Exercise 5 {#section-228-exercise-5}
<a id="cost-amortization-lower-bounds-ex-5"></a>

Analyze halving with linear work.

Solve $T(n)=T(\\left\\lfloor n/2 \\right\\rfloor)+n$ up to a tight asymptotic bound.

<details>
<summary>Hint 1</summary>

Expand the shrinking nonrecursive work.

</details>
<details>
<summary>Hint 2</summary>

The first call also gives a matching lower bound.

</details>
<details>
<summary>Solution</summary>

Expanding produces work at most $n+n/2+n/4+\\ldots<2n$, so $T(n)=\\mathcal{O}(n)$ when the base cost is constant. The first call alone performs $n$ work, so $T(n)=\\Omega(n)$. Therefore $T(n)=\\Theta(n)$. The logarithmic recursion depth does not make the total $\\Theta(n \\log n)$ because work shrinks geometrically across levels.

</details>

<a id="section-252-exercise-6"></a>
### Exercise 6 {#section-254-exercise-6}
<a id="cost-amortization-lower-bounds-ex-6"></a>

Distinguish worst-case and expected claims for hashing.

Suppose a universal hash family gives expected chain length at most $1+\\alpha$ for every fixed key set, with expectation over the chosen hash function. State exactly what follows.

<details>
<summary>Hint 1</summary>

Keep the stored set fixed before the random function is chosen.

</details>
<details>
<summary>Hint 2</summary>

An adaptive key choice changes that quantifier order.

</details>
<details>
<summary>Solution</summary>

For a fixed stored set and query, choosing the function randomly from the stated family gives expected lookup work $\\mathcal{O}(1+\\alpha)$ under the chaining implementation. It does not bound every selected function, every execution, or adversaries that choose keys after observing the function unless the theorem models that adaptation. A worst-case chain can still contain all keys. The probability space and quantifier order are part of the result.

</details>

<a id="section-278-exercise-7"></a>
### Exercise 7 {#section-280-exercise-7}
<a id="cost-amortization-lower-bounds-ex-7"></a>

Use aggregate analysis on a stack with \`multipop(k)\`.

Each \`push\` costs one; \`multipop(k)\` pops up to $k$ available items. Bound the cost of any sequence of $m$ operations starting empty.

<details>
<summary>Hint 1</summary>

Count each item once when pushed and once when removed.

</details>
<details>
<summary>Hint 2</summary>

Requested removals beyond the available size do not create more successful pops.

</details>
<details>
<summary>Solution</summary>

Every item is pushed at most once and popped at most once. There are at most $m$ pushes, hence at most $m$ successful pops across all multipops, regardless of their requested values. Adding constant overhead per operation gives total $\\mathcal{O}(m)$ and amortized $\\mathcal{O}(1)$. A single multipop may cost $\\Theta(m)$, so this is not a worst-case per-operation bound.

</details>

<a id="section-304-exercise-8"></a>
### Exercise 8 {#section-306-exercise-8}
<a id="cost-amortization-lower-bounds-ex-8"></a>

Construct a valid potential for the same stack.

Let actual push cost one and a successful pop cost one. Choose $Phi$ and compute amortized costs.

<details>
<summary>Hint 1</summary>

Let the potential count stored items.

</details>
<details>
<summary>Hint 2</summary>

A removal consumes exactly the potential credit it needs.

</details>
<details>
<summary>Solution</summary>

Let $Phi$ be the current stack size. A push has amortized cost $1+(Phi_{after}-Phi_{before})=2$. A multipop removing $t$ items has actual cost $t$ plus constant loop overhead; ignoring or separately charging that constant, its potential change is $-t$, so the item-removal amortized cost is zero. Since $Phi\\ge 0$ and initially zero, summed actual cost is bounded by summed amortized cost.

</details>

<a id="section-330-exercise-9"></a>
### Exercise 9 {#section-332-exercise-9}
<a id="cost-amortization-lower-bounds-ex-9"></a>

Expose a bad potential.

Why does choosing $Phi=-$(stack size) not prove pushes are free over an arbitrary sequence?

<details>
<summary>Hint 1</summary>

Write the telescoping identity including final potential.

</details>
<details>
<summary>Hint 2</summary>

A negative final potential can hide positive actual cost.

</details>
<details>
<summary>Solution</summary>

It assigns amortized push cost $1-1=0$, but the potential is negative and can fall to $-m$. The telescoping identity says $actual total = amortized total - Phi_{final} + Phi_{initial}$; the omitted term can be $m$. A potential lower-bounded by its initial value, commonly nonnegative with zero start, is needed before amortized charges alone upper-bound actual work.

</details>

<a id="section-356-exercise-10"></a>
### Exercise 10 {#section-358-exercise-10}
<a id="cost-amortization-lower-bounds-ex-10"></a>

Prove a comparison lower bound for finding the maximum.

Why are at least $n-1$ comparisons necessary on $n$ distinct inputs?

<details>
<summary>Hint 1</summary>

Each comparison eliminates at most one maximum candidate.

</details>
<details>
<summary>Hint 2</summary>

Every other candidate must lose at least once.

</details>
<details>
<summary>Solution</summary>

Initially every item might be maximum. An item loses that possibility only by losing a comparison. A correct algorithm must eliminate $n-1$ candidates, and one comparison can eliminate at most one because only the smaller compared item is certified nonmaximum. Thus at least $n-1$ comparisons are required. A tournament achieves exactly $n-1$, so the bound is tight in the comparison model.

</details>

<a id="section-382-exercise-11"></a>
### Exercise 11 {#section-384-exercise-11}
<a id="cost-amortization-lower-bounds-ex-11"></a>

Audit a claimed sorting contradiction.

An algorithm sorts integers from $0$ through $n^{3}$ in $\\mathcal{O}(n)$ time on a word RAM. Does it refute the $\\Omega(n \\log n)$ sorting lower bound?

<details>
<summary>Hint 1</summary>

State which operations the decision-tree theorem permits.

</details>
<details>
<summary>Hint 2</summary>

Indexing by integer digits reveals information beyond a comparison.

</details>
<details>
<summary>Solution</summary>

No. The decision-tree bound restricts algorithms to pairwise comparisons. Bounded integer keys permit indexing, arithmetic, or radix operations that reveal more than one comparison bit per step. With word size sufficient for values through $n^{3}$, a constant number of radix passes can be linear. The result changes the operation and key models rather than contradicting the theorem.

</details>

<a id="section-408-exercise-12"></a>
### Exercise 12 {#section-410-exercise-12}
<a id="cost-amortization-lower-bounds-ex-12"></a>

Get reduction direction right.

You know $\\mathsf{SAT}$ is NP-hard and construct a polynomial map from $\\mathsf{SAT}$ instances to scheduling instances preserving yes/no answers. What does this establish, and what is still needed for NP-completeness?

<details>
<summary>Hint 1</summary>

The harder known problem must be the source.

</details>
<details>
<summary>Hint 2</summary>

Membership in NP still needs a bounded witness and verifier.

</details>
<details>
<summary>Solution</summary>

The map $\\mathsf{SAT} \\le_{p} Scheduling$ establishes that Scheduling is NP-hard: an efficient scheduling decider would decide SAT. To call Scheduling NP-complete, one must also show Scheduling is in NP, typically by specifying a polynomial-size schedule certificate and a polynomial-time verifier checking every constraint. Reducing Scheduling to SAT would show an upper relation, not this hardness direction.

</details>

<a id="section-434-exercise-13"></a>
### Exercise 13 {#section-436-exercise-13}
<a id="cost-amortization-lower-bounds-ex-13"></a>

Relate sparse and dense graph bounds.

Compare adjacency-list BFS $\\Theta(n+m)$ with adjacency-matrix BFS $\\Theta(n^{2})$ for a graph with $n$ vertices.

<details>
<summary>Hint 1</summary>

Expose the edge parameter.

</details>
<details>
<summary>Hint 2</summary>

List scanning and matrix row scanning charge different representations.

</details>
<details>
<summary>Solution</summary>

For a sparse graph with $m=\\Theta(n)$, lists give $\\Theta(n)$ while scanning every matrix row costs $\\Theta(n^{2})$. For a dense graph with $m=\\Theta(n^{2})$, both are $\\Theta(n^{2})$ asymptotically, though constants and memory access differ. Reporting only $\\Theta(n)$ for BFS silently assumes sparsity or suppresses the edge parameter.

</details>

<a id="section-460-exercise-14"></a>
### Exercise 14 {#section-462-exercise-14}
<a id="cost-amortization-lower-bounds-ex-14"></a>

Analyze output-sensitive enumeration.

An algorithm lists every edge of a complete graph. Can it run in $o(n^{2})$ time when writing one edge costs constant time?

<details>
<summary>Hint 1</summary>

Count output records before designing an algorithm.

</details>
<details>
<summary>Hint 2</summary>

A compressed description has a different output contract.

</details>
<details>
<summary>Solution</summary>

No. The output contains $n(n-1)/2=\\Theta(n^{2})$ distinct edge records, so output alone costs $\\Omega(n^{2})$ in the stated model. This is an output-size lower bound, independent of how cleverly edges are generated. A compressed description such as “all pairs” would change the output contract and evade the bound only by solving a different task.

</details>

<a id="section-486-exercise-15"></a>
### Exercise 15 {#section-488-exercise-15}
<a id="cost-amortization-lower-bounds-ex-15"></a>

Separate pseudopolynomial from polynomial.

Dynamic programming solves subset sum in $\\mathcal{O}(nS)$, where $S$ is the target encoded in binary. Explain the classification.

<details>
<summary>Hint 1</summary>

The target value and its number of bits differ exponentially.

</details>
<details>
<summary>Hint 2</summary>

Unary encoding changes the classification.

</details>
<details>
<summary>Solution</summary>

The input uses about $\\log S$ bits for the target, so a factor $S$ is exponential in that portion of the encoded length. The algorithm is pseudopolynomial: polynomial in the numeric value $S$ and item count, but not necessarily in total bit length. If $S$ is bounded by a polynomial in $n$ or encoded unary, the same bound becomes polynomial under that restricted representation.

</details>

<a id="section-512-exercise-16"></a>
### Exercise 16 {#section-514-exercise-16}
<a id="cost-amortization-lower-bounds-ex-16"></a>

Prove a space bound from time.

A deterministic single-tape machine halts within $T(n)$ steps. Bound the number of tape cells it can visit.

<details>
<summary>Hint 1</summary>

A head move reaches at most one new cell.

</details>
<details>
<summary>Hint 2</summary>

Count the starting cell as well as the subsequent steps.

</details>
<details>
<summary>Solution</summary>

The head begins on one cell and moves at most one cell per step, so at most $T(n)+1$ distinct cells can be visited. Thus the computation uses $\\mathcal{O}(T(n))$ space. This gives $P$ contained in polynomial space when time is polynomial, but not the reverse: a machine can revisit polynomially many cells for exponentially many steps.

</details>

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=contracts-invariants-representations) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-541-sources"></a>
## Sources {#section-543-sources}

The existing native chapter, its mathematical examples, implementation and original practice solutions are retained and developed here for the L2 route. The prerequisite is [Introduction to Proof](/books/library-book-introduction-to-proof/). See Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), for proof and discrete computational foundations.

<a id="section-545-summary"></a>
## Summary {#section-547-summary}

Costs depend on representation, allowed operations and quantifier order. Exact recurrence hypotheses and base cases justify asymptotic bounds, while amortized potentials telescope over whole sequences. Expectations name a probability space, reductions preserve both yes and no instances, and lower bounds apply only to their stated operation model.
`;export{e as default};