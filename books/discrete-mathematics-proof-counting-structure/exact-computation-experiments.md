
# Exact Small Computation, Experiments, and Claim Boundaries {#section-1-exact-small-computation-experiments-and-claim-boundarie}

A small exhaustive computation can do something a hand calculation cannot: inspect every object in a declared finite universe without getting tired or favoring attractive examples. It can find a smallest counterexample, certify a bounded optimum, and expose a missing hypothesis. It still does not turn finitely many cases into an infinite theorem. The mathematical work is therefore not merely to run a program, but to specify the universe, justify the representation, prove the search complete, and state exactly what its output establishes.

This chapter assumes subsets and functions, recurrences, finite graphs, elementary probability, and the definitions of independence systems and matroids. All algorithms are deterministic and bounded. Pseudocode uses exact integers, finite sets, and rational pairs; no floating-point comparison is needed.

<a id="section-5-1-four-roles-for-computation"></a>
## 1. Four roles for computation {#section-7-1-four-roles-for-computation}

An exact experiment can play four distinct roles.

1. **Discovery:** generate data from which a conjecture may emerge.
2. **Falsification:** return a concrete object violating a proposed universal claim.
3. **Bounded certification:** prove a claim for every object in an explicitly finite search space.
4. **Proof assistance:** check algebra or enumerate boundary cases that a written proof has reduced to a finite list.

Only the second role immediately settles an unrestricted universal statement: one valid counterexample disproves it. Discovery never proves the conjecture by itself. Bounded certification proves only the declared range. Proof assistance becomes part of a proof only after the reduction, program specification, completeness, and arithmetic have all been justified.

For example, checking every simple graph on at most seven labeled vertices can disprove “every graph has property $P$” by finding a six-vertex failure. If no failure appears, the justified conclusion is only that all graphs in that bounded labeled collection have $P$. A theorem for graphs of every size needs an additional argument.

<a id="section-18-2-specification-comes-before-enumeration"></a>
## 2. Specification comes before enumeration {#section-20-2-specification-comes-before-enumeration}

Every finite experiment needs an **instance contract**:

- the ground set and its ordering;
- which encodings are valid;
- whether objects are labeled or considered up to isomorphism;
- the property or objective, stated mathematically;
- the exact bound on size;
- the tie rule when several witnesses are equally good;
- the output that will serve as a certificate.

Suppose the ground set is $E=\{e_{0},\ldots,e_{m-1}\}$. Encode a subset $S$ by the integer

$$\operatorname{mask}(S)=\sum_{e_{i}\in S} 2^{i}$$

The integers $0,\ldots,2^{m}-1$ correspond bijectively to subsets of $E$: bit $i$ is one precisely when $e_{i}\in S$. Thus iterating through that integer interval visits every subset exactly once. This sentence is the completeness proof for the enumeration, not an implementation detail.

<a id="section-36-worked-example-the-subsets-of-a-three-element-set"></a>
### Worked example: the subsets of a three-element set {#section-38-worked-example-the-subsets-of-a-three-element-set}

Let $E=\{a,b,c\}$ in that order. The masks $0,\ldots,7$ give

$$000,001,010,011,100,101,110,111$$

corresponding to

$$\varnothing,\{a\},\{b\},\{a,b\},\{c\},\{a,c\},\{b,c\},\{a,b,c\}$$

If a program skips mask $0$, it silently excludes the empty set. That may invalidate a heredity or recurrence check. If it loops through $0,\ldots,8$, mask $8$ refers to an undeclared fourth bit and is invalid.

<a id="section-48-3-a-complete-bounded-subset-search"></a>
## 3. A complete bounded-subset search {#section-50-3-a-complete-bounded-subset-search}

The following generic search maximizes an integer weight over feasible subsets.

```text
best_set := none
best_weight := none
for mask from 0 through 2^m - 1:
    S := subset represented by mask
    if feasible(S):
        w := sum of weight(e) over e in S
        if best_set is none or w > best_weight
           or (w = best_weight and mask < mask(best_set)):
            best_set := S
            best_weight := w
return (best_set, best_weight)
```

The smaller-mask clause makes ties deterministic.

**Termination.** The loop has exactly $2^{m}$ iterations, and feasibility and weight are assumed to terminate on every subset.

**Correctness.** Let $O$ be any feasible subset. Its unique mask is visited. When visited, the algorithm either installs $O$ or retains a feasible subset of at least its weight. Therefore the final weight is at least the weight of every feasible subset. The returned set is itself feasible, so its weight is the optimum. The tie rule selects the feasible optimum with smallest mask.

If feasibility takes at most $T(m)$ operations, the search takes $O(2^{m}(T(m)+m))$ operations and $O(m)$ working storage beyond the input. This is an exact small-instance method, not a scalable claim.

<a id="section-74-worked-example-maximum-weight-stable-set"></a>
### Worked example: maximum-weight stable set {#section-76-worked-example-maximum-weight-stable-set}

Take the path $a-b-c-d$ with weights $3,4,4,3$. A subset is feasible when it contains no adjacent pair. The feasible sets include $\{a,c\}$ of weight $7$, $\{a,d\}$ of weight $6$, and $\{b,d\}$ of weight $7$. No three-vertex set is feasible, and every singleton has weight at most $4$. Exhaustive search therefore returns weight $7$; with bit order $a,b,c,d$, masks are $0101$ for $\{a,c\}$ and $1010$ for $\{b,d\}$, so $\{a,c\}$ wins the stated smaller-mask tie rule.

The output certifies the optimum for this four-vertex instance. It does not prove that a particular greedy rule finds maximum-weight stable sets on all paths.

<a id="section-80-safe-pruning-preserves-exactness"></a>
### Safe pruning preserves exactness {#section-82-safe-pruning-preserves-exactness}

Branch-and-bound can skip groups of subsets without changing the answer, but only when its bound is proved. Suppose all remaining optional element weights are nonnegative. At a partial choice $S$, an elementary upper bound is

$$\operatorname{UB}(S)=w(S)+\sum_{e still undecided} w(e)$$

It deliberately ignores future feasibility conflicts, so every feasible completion $T$ of $S$ satisfies $w(T)\le \operatorname{UB}(S)$. If a previously found feasible solution has weight $L$ and $\operatorname{UB}(S)<L$, no completion under this branch can improve the incumbent; pruning is safe. With the deterministic smallest-mask tie rule, equality $\operatorname{UB}(S)=L$ cannot automatically be pruned, because an equally weighted completion might have a smaller mask.

Correctness follows by a containment argument: every pruned branch has a proved upper bound below the best retained value, and every unpruned leaf is checked directly. The algorithm remains exact even though it does not visit every leaf. By contrast, “this branch looks unpromising” is a heuristic, not a certificate.

Negative weights require care. Adding all undecided weights might lower the displayed quantity and cease to bound completions that simply omit negative elements. A safe elementary bound instead adds only positive remaining weights. Stronger problem-specific bounds are welcome, but each needs its own proof.

<a id="section-92-4-exact-arithmetic-prevents-a-second-experiment"></a>
## 4. Exact arithmetic prevents a second experiment {#section-94-4-exact-arithmetic-prevents-a-second-experiment}

If the mathematics is discrete, store discrete quantities exactly.

- Counts and bit masks use integers.
- A rational number is stored as a pair $(p,q)$ with integers $p$ and positive $q$, reduced by $\gcd(|p|,q)$.
- Polynomials of bounded degree use integer or rational coefficient arrays.
- A probability on a finite uniform sample space can be stored as $favorable/total$ before reduction.

To compare $p/q$ and $r/s$ for positive $q,s$, compare the integers $ps$ and $rq$. This avoids an approximate decimal tie.

<a id="section-103-worked-example-a-first-moment-threshold"></a>
### Worked example: a first-moment threshold {#section-105-worked-example-a-first-moment-threshold}

For a random red-blue coloring of $K_{n}$, the expected number of monochromatic $K_{4}$ subgraphs is

$$\binom{n}{4}/32$$

The condition for the basic first-moment argument is strictly $\binom{n}{4}<32$. Exact integer evaluation gives $\binom{6}{4}=15$, so the condition holds at $n=6$; it gives $\binom{7}{4}=35$, so the condition fails at $n=7$. A rounded display such as $1.09$ is useful for a reader, but the integer comparison $35<32$ is the actual decision.

Failure of this sufficient condition at seven does not prove that every coloring of $K_{7}$ contains a monochromatic $K_{4}$. It says only that this particular expectation bound no longer certifies a successful coloring.

<a id="section-113-worked-example-rounding-hides-an-exact-inequality"></a>
### Worked example: rounding hides an exact inequality {#section-115-worked-example-rounding-hides-an-exact-inequality}

Compare $r=1000001/1000000$ with $s=1$. At five digits after the decimal point, rounding to the nearest displayed value gives $1.00000$ for both. That display does not certify equality. Their exact difference is

$$
r-s=\frac{1000001-1000000}{1000000}=\frac1{1000000}>0.
$$

An exact comparison instead multiplies the numerator of $s=1/1$ by the positive denominator of $r$: the relevant integers are $1000001$ and $1000000$. The first is larger. The positivity of the denominators is part of the argument; an unreduced rational pair is acceptable if its sign convention and nonzero denominator are respected.

Suppose a feasibility condition requires a computed quantity to be at most one. The exact value $r$ fails that condition even though the rounded display appears to meet it. A tolerance may be a legitimate part of a different numerical problem, but adding one here would change the mathematical feasible set. Keep the decision in exact arithmetic and use the rounded number only as a labeled display. If the implementation stores fixed-width integers, the cross products must also fit or use a proved overflow-safe comparison: exact formulas do not make overflowing machine arithmetic exact.

<a id="section-125-5-enumerating-labeled-graphs"></a>
## 5. Enumerating labeled graphs {#section-127-5-enumerating-labeled-graphs}

A simple labeled graph on vertex set $\{0,\ldots,n-1\}$ is determined by its possible edges $\{i,j\}$ with $i<j$. There are $M=\binom{n}{2}$ possible edges, so there are exactly $2^{M}$ graphs. Fix a lexicographic edge list and use an $M$-bit mask.

This enumerates labeled graphs. Isomorphic graphs can occur many times. That redundancy does not harm completeness, but it must be acknowledged in counts. Claiming to have enumerated nonisomorphic graphs requires a proved canonical-form or isomorphism-rejection procedure, which we do not supply here.

To test whether a vertex subset $S$ is stable, inspect every encoded edge and reject if both endpoints lie in $S$. Combining the graph loop with the subset loop yields an exact maximum-stable-set computation for every labeled graph through a chosen $n$.

<a id="section-133-complexity-boundary"></a>
### Complexity boundary {#section-135-complexity-boundary}

For one $n$-vertex graph, the direct subset test examines $2^{n}$ subsets and at most $\binom{n}{2}$ pairs per subset. For all labeled graphs, the crude upper bound is

$$O(2^{\binom{n}{2}} 2^{n} n^{2})$$

This grows too rapidly for large $n$. Stating the bound is part of the experiment: “small” must be a number, not a mood.

<a id="section-141-6-certificates-and-independently-checkable-output"></a>
## 6. Certificates and independently checkable output {#section-143-6-certificates-and-independently-checkable-output}

An optimizer should return more than a number.

- For a lower bound, return the feasible witness attaining it.
- For a counterexample, return the full object and the failed assertion.
- For a P/N game table, return one move from each N-position to a P-position.
- For a greedy failure, return the order, greedy set, better feasible set, and both weights.
- For a matroid-axiom failure, return the offending independent sets $I,J$ and show that no valid augmenting element exists.

A witness can often be checked much more cheaply than the search that found it. The maximum stable set $\{a,c\}$ above is easy to verify as stable and weight seven. Proving that no heavier set exists still relies on exhaustive search or a separate upper-bound argument.

This distinction is useful: a witness certifies feasibility and a lower bound; completeness of the search certifies optimality.

<a id="section-155-7-dynamic-programming-on-a-finite-state-graph"></a>
## 7. Dynamic programming on a finite state graph {#section-157-7-dynamic-programming-on-a-finite-state-graph}

Exhaustive enumeration need not mean trying full plays repeatedly. In a finite impartial normal-play game, compute positions in an order in which every follower has already been classified.

```text
for position P in increasing rank:
    if P has no legal followers:
        outcome[P] := P-position
    else if some follower Q has outcome[Q] = P-position:
        outcome[P] := N-position
        witness_move[P] := Q
    else:
        outcome[P] := P-position
```

Here $\operatorname{rank}$ is a nonnegative integer that strictly increases opposite the direction of legal moves—for a token-removal game, heap size works.

**Correctness.** Induct on rank. Terminal entries are correct by normal-play convention. At a nonterminal position, the stored classification exactly applies the recursive theorem: a move to P makes the position N; if every move goes to N, it is P.

**Boundary.** The table proves classifications only for positions included in the finite state set, unless the recurrence and a separate induction extend a pattern to all ranks.

<a id="section-176-worked-example-remove-one-three-or-four"></a>
### Worked example: remove one, three, or four {#section-178-worked-example-remove-one-three-or-four}

For a heap of size $n$, legal moves subtract $1$, $3$, or $4$ when possible. Starting at zero, the outcomes are

```text
n       0 1 2 3 4 5 6 7 8 9 10
outcome P N P N N N N P N P  N
```

For instance, $7$ moves to $6,4,3$, all N, so it is P. Position $8$ moves to P-position $7$, so it is N. The table suggests structure but, without a propagation proof, it certifies only these listed heaps.

<a id="section-187-8-testing-an-independence-system-and-the-exchange-axiom"></a>
## 8. Testing an independence system and the exchange axiom {#section-189-8-testing-an-independence-system-and-the-exchange-axiom}

Let $E$ be finite and let $F\subseteq P(E)$ be supplied explicitly as a set of masks. It is an **independence system** when $\varnothing\in F$ and

$$A\in F \land B\subseteq A \Longrightarrow B\in F$$

It is a matroid when it also satisfies augmentation:

$$I,J\in F \land |I|<|J| \Longrightarrow \text{there exists } e\in J\setminus I \text{ with } I\cup \{e\}\in F$$

A direct checker is bounded:

```text
reject unless the empty mask belongs to F
for every A in F:
    for every submask B of A:
        reject with (A,B) unless B belongs to F
for every ordered pair (I,J) in F × F with |I| < |J|:
    augmentable := false
    for every e in J minus I:
        if I union {e} belongs to F: augmentable := true
    reject with (I,J) unless augmentable
accept
```

If it accepts, it has evaluated exactly the quantified clauses in the definitions, so $F$ is a matroid independence family on this declared $E$. If it rejects, the returned sets are a direct countercertificate. This does not infer a formula for a family on larger ground sets.

<a id="section-214-worked-example-path-stable-sets-fail-exchange"></a>
### Worked example: path stable sets fail exchange {#section-216-worked-example-path-stable-sets-fail-exchange}

For path $a-b-c$, the stable sets are

$$\varnothing,\{a\},\{b\},\{c\},\{a,c\}$$

Heredity holds. Choose $I=\{b\}$ and $J=\{a,c\}$. We have $|I|<|J|$, but neither $I\cup \{a\}$ nor $I\cup \{c\}$ is stable. The checker rejects with $(I,J)$. The family is an independence system but not a matroid.

By contrast, the subsets of $\{a,b,c\}$ of size at most two satisfy augmentation: when $|I|<|J|\le 2$, some element of $J\setminus I$ can be added without exceeding size two. The checker accepts this bounded family.

<a id="section-224-9-greedy-experiments-require-a-declared-algorithm"></a>
## 9. Greedy experiments require a declared algorithm {#section-226-9-greedy-experiments-require-a-declared-algorithm}

“Greedy” is not a single algorithm. For a weighted independence family, declare:

1. sort elements by nonincreasing weight;
2. break equal weights by the fixed ground-set order;
3. begin with $G=\varnothing$;
4. scan once, adding an element exactly when the new set belongs to $F$.

The result is deterministic. Compare its weight with the exhaustive optimum. If they differ, return both sets. On a matroid, the greedy theorem applies under its precise weight hypotheses; on a general hereditary family it may fail.

Negative weights expose another boundary. If the algorithm blindly scans and adds every feasible element, it can reduce total weight. The standard maximum-weight basis theorem and the maximum-weight independent-set problem have different formulations. For the latter, with optional elements, skip negative-weight elements or assume nonnegative weights explicitly.

<a id="section-237-dm-ch15-p001-investigation-exchange-versus-greedy-on-fo"></a>
## DM-CH15-P001 — Investigation: exchange versus greedy on four elements {#section-239-dm-ch15-p001-investigation-exchange-versus-greedy-on-fo}

This investigation is designed to be reproducible with pencil tables or a short dependency-free program.

<a id="section-241-question"></a>
### Question {#section-243-question}

On the ordered ground set $E=\{0,1,2,3\}$, which explicitly listed hereditary families satisfy augmentation, and when does descending-weight greedy fail?

<a id="section-245-bounded-protocol"></a>
### Bounded protocol {#section-247-bounded-protocol}

1. Enumerate all $2^{2^{4}}=65,536$ families $F\subseteq P(E)$ as 16-bit family masks.
2. Retain those containing $\varnothing$ and passing the heredity checker.
3. Apply the augmentation checker and record either acceptance or the lexicographically first witness $(I,J)$.
4. For each retained family, test every weight vector in $\{0,1,2,3\}^{4}$; there are $4^{4}=256$.
5. Run the deterministic greedy rule and the complete subset optimizer.
6. Record the first weight vector for which greedy is suboptimal, if one exists.

The total search is finite: at most $65,536\cdot 256$ family-weight pairs, with only sixteen subsets in each feasibility table. It uses exact integer arithmetic.

<a id="section-256-predictions-to-test"></a>
### Predictions to test {#section-258-predictions-to-test}

- Every family accepted by the augmentation checker should show no greedy failure for these tested nonnegative weights.
- Every non-matroid hereditary family should have a separating nonnegative weight vector, although restricting weights to $\{0,1,2,3\}$ may be too narrow to expose every failure.
- The stable sets of $a-b-c$ embedded on four elements should fail at $I=\{b\}$, $J=\{a,c\}$ and admit a greedy counterexample.

The first prediction is implied by the matroid greedy theorem, so the computation is a regression check, not a proof of that theorem. If it fails, suspect the program, tie convention, or encoded family. The second is only an experiment under the stated weight range. Absence of a failure there does not prove the family has the universal greedy property.

<a id="section-264-required-report"></a>
### Required report {#section-266-required-report}

Record the ground-set order, family encoding, exact number of retained hereditary families, exact number passing augmentation, any witness, tested weight domain, tie rule, and a checksum such as the sorted list of accepted family masks. Include at least two hand-checked cases. Never report merely “all tests passed.”

<a id="section-268-11-reproducibility-and-defect-diagnosis"></a>
## 11. Reproducibility and defect diagnosis {#section-270-11-reproducibility-and-defect-diagnosis}

An exact experiment should be rerunnable from a compact record:

- mathematical specification and bounds;
- canonical input encoding;
- pseudocode or source version;
- deterministic traversal and tie rules;
- exact arithmetic policy;
- expected checks on tiny instances;
- full witness output for failures;
- totals that make skipped cases visible.

When output contradicts a proved theorem, do not announce a discovery immediately. Audit, in order: definition mismatch, indexing, invalid inputs, missing boundary cases, tie behavior, arithmetic overflow, property predicate, and theorem hypotheses. A program can be deterministic and still deterministically wrong.

<a id="section-283-two-implementations-are-not-two-proofs"></a>
### Two implementations are not two proofs {#section-285-two-implementations-are-not-two-proofs}

Independent implementations can reveal coding defects when their outputs disagree. Agreement is useful evidence, especially when one program enumerates subsets and another uses a recurrence, but shared misconceptions can make both wrong. The mathematical specification remains the reference. Hand-check empty and smallest nonempty instances, verify global totals such as $2^{m}$, and validate each returned witness with a simpler checker. These checks create several failure barriers without overstating them as a theorem beyond the bounded universe.

One further check is **metamorphic**: transform an input in a way whose effect is known. Relabeling a graph must preserve its stable-set optimum; multiplying all integer weights by a positive integer must multiply the optimum by that integer; adding an isolated zero-weight element must not change the optimum value. A violation exposes a defect even when the correct answer is unknown. Passing such tests is still evidence about implementation consistency, not a substitute for the enumeration and correctness arguments.

<a id="section-289-12-common-errors"></a>
## 12. Common errors {#section-291-12-common-errors}

- Saying “all graphs” when only labeled graphs through a bound were checked.
- Omitting the empty set or a terminal state.
- Using decimal equality for rational or integer decisions.
- Returning an optimum value without a feasible witness.
- Confusing a feasible witness with a certificate of optimality.
- Deduplicating by an unproved graph signature and calling it isomorphism.
- Inferring an infinite recurrence pattern from a finite prefix.
- Testing a different greedy rule from the theorem being discussed.
- Treating program agreement with a theorem as an independent proof.
- Hiding a failed theorem hypothesis inside an input predicate.

<a id="section-302-13-exercises-with-fully-worked-solutions"></a>
## 13. Exercises with fully worked solutions {#section-304-13-exercises-with-fully-worked-solutions}

<a id="section-304-dm-ch15-e001-prove-subset-enumeration-complete"></a>
### DM-CH15-E001 — prove subset enumeration complete {#section-306-dm-ch15-e001-prove-subset-enumeration-complete}

Why does the loop $0\le \operatorname{mask}<2^{m}$ enumerate every subset of an ordered $m$-element set exactly once?

<details>
<summary>Hint 1</summary>

Relate the membership of each ground-set element to one binary digit.

</details>

<details>
<summary>Hint 2</summary>

Construct maps in both directions and check that applying one after the other recovers every bit.

</details>

<a id="section-322-dm-ch15-e001-solution"></a>
#### DM-CH15-E001 — Solution {#section-324-dm-ch15-e001-solution}

<details>
<summary>Solution</summary>

Every mask in the interval has a unique binary representation using at most $m$ bits, padding on the left with zeros. Select element $e_{i}$ exactly when bit $i$ is one. Conversely, each subset makes one binary membership choice for each element and hence produces one mask in the interval. The two constructions undo each other, so this is a bijection. Therefore no subset is missed or repeated.

</details>

<a id="section-331-dm-ch15-e002-exact-rational-comparison"></a>
### DM-CH15-E002 — exact rational comparison {#section-333-dm-ch15-e002-exact-rational-comparison}

Without decimals, decide whether $17/29$ is less than $23/40$.

<details>
<summary>Hint 1</summary>

The denominators are positive, so you may compare cross products without reversing the inequality.

</details>

<details>
<summary>Hint 2</summary>

Compare the integers obtained from 17 times 40 and 23 times 29.

</details>

<a id="section-349-dm-ch15-e002-solution"></a>
#### DM-CH15-E002 — Solution {#section-351-dm-ch15-e002-solution}

<details>
<summary>Solution</summary>

Both denominators are positive, so cross multiplication preserves order. Compute $17\cdot 40=680$ and $23\cdot 29=667$. Since $680>667$, we have $17/29>23/40$. A decimal approximation is unnecessary.

</details>

<a id="section-358-dm-ch15-e003-a-bounded-graph-count"></a>
### DM-CH15-E003 — a bounded graph count {#section-360-dm-ch15-e003-a-bounded-graph-count}

How many simple labeled graphs are there on five vertices, and why?

<details>
<summary>Hint 1</summary>

Choose an edge or a nonedge independently for each unordered pair of distinct vertices.

</details>

<details>
<summary>Hint 2</summary>

First count the possible pairs, then count the binary decisions on that fixed labeled vertex set.

</details>

<a id="section-376-dm-ch15-e003-solution"></a>
#### DM-CH15-E003 — Solution {#section-378-dm-ch15-e003-solution}

<details>
<summary>Solution</summary>

There are $\binom{5}{2}=10$ possible unordered vertex pairs. Each pair is independently declared an edge or nonedge, and a simple graph is determined by those ten choices. Thus there are $2^{10}=1024$ graphs. This counts labeled graphs on the fixed vertex set; it does not count isomorphism classes.

</details>

<a id="section-385-dm-ch15-e004-interpret-an-optimizer-output"></a>
### DM-CH15-E004 — interpret an optimizer output {#section-387-dm-ch15-e004-interpret-an-optimizer-output}

An exhaustive search returns a stable set of weight $12$ in a graph and reports no feasible set with larger weight. Separate the lower- and upper-bound evidence.

<details>
<summary>Hint 1</summary>

A feasible witness and the absence of better witnesses establish different inequalities.

</details>

<details>
<summary>Hint 2</summary>

Check the returned set for the lower bound; use enumeration completeness and the objective predicate for the upper bound.

</details>

<a id="section-403-dm-ch15-e004-solution"></a>
#### DM-CH15-E004 — Solution {#section-405-dm-ch15-e004-solution}

<details>
<summary>Solution</summary>

The returned stable set, once its nonadjacency and weight are checked, proves the optimum is at least $12$. The complete traversal and correct feasibility/weight predicates show that every stable set was considered and none had weight above $12$, proving the optimum is at most $12$. Together they prove equality. The witness alone supplies only the lower bound.

</details>

<a id="section-412-dm-ch15-e005-exchange-countercertificate"></a>
### DM-CH15-E005 — exchange countercertificate {#section-414-dm-ch15-e005-exchange-countercertificate}

Let $F=\{\varnothing,\{1\},\{2\},\{3\},\{1,2\}\}$. Is $F$ hereditary? Is it a matroid independence family?

<details>
<summary>Hint 1</summary>

Check every subset of the only two-element feasible set before testing augmentation.

</details>

<details>
<summary>Hint 2</summary>

Try a one-element feasible set whose element cannot accompany either member of the two-element feasible set.

</details>

<a id="section-430-dm-ch15-e005-solution"></a>
#### DM-CH15-E005 — Solution {#section-432-dm-ch15-e005-solution}

<details>
<summary>Solution</summary>

Every subset of $\{1,2\}$ is listed, and the only subsets of a singleton are itself and $\varnothing$, so heredity holds. For augmentation choose $I=\{3\}$ and $J=\{1,2\}$. Although $|I|<|J|$, neither $\{1,3\}$ nor $\{2,3\}$ belongs to $F$. Thus augmentation fails and $F$ is not a matroid independence family.

</details>

<a id="section-439-dm-ch15-e006-repair-a-claim-boundary"></a>
### DM-CH15-E006 — repair a claim boundary {#section-441-dm-ch15-e006-repair-a-claim-boundary}

A search checks the recurrence $a_{n}=a_{n-1}+a_{n-2}$ and formula $a_{n}=F_{n+1}$ for $0\le n\le 100$. Write a valid conclusion and name what would prove the unrestricted formula.

<details>
<summary>Hint 1</summary>

Keep the finite index range and the declared arithmetic policy in your conclusion.

</details>

<details>
<summary>Hint 2</summary>

For an unrestricted statement, identify how many base cases the recurrence requires and then propagate equality by induction.

</details>

<a id="section-457-dm-ch15-e006-solution"></a>
#### DM-CH15-E006 — Solution {#section-459-dm-ch15-e006-solution}

<details>
<summary>Solution</summary>

A valid conclusion is: “Using the declared initial values and exact integer arithmetic, the recurrence values and proposed formula agree for every integer $n$ from zero through one hundred.” To prove agreement for all $n\ge 0$, verify the base values and use induction: assuming equality at the two previous indices, both sequences obey the same recurrence, so equality propagates.

</details>

<a id="section-466-dm-ch15-e007-game-table-induction"></a>
### DM-CH15-E007 — game-table induction {#section-468-dm-ch15-e007-game-table-induction}

In the remove-$1,3,4$ game, use the displayed table to classify heap $11$.

<details>
<summary>Hint 1</summary>

List only legal followers of heap eleven, then use already classified smaller heaps.

</details>

<details>
<summary>Hint 2</summary>

One follower is a P-position; one move to it is enough to certify that eleven is N.

</details>

<a id="section-484-dm-ch15-e007-solution"></a>
#### DM-CH15-E007 — Solution {#section-486-dm-ch15-e007-solution}

<details>
<summary>Solution</summary>

From $11$, the followers are $10$, $8$, and $7$. The table classifies $10$ and $8$ as N and $7$ as P. Because there is a move from $11$ to the P-position $7$—remove four—position $11$ is N. This conclusion uses only already classified smaller heaps.

</details>

<a id="section-493-dm-ch15-e008-a-greedy-failure"></a>
### DM-CH15-E008 — a greedy failure {#section-495-dm-ch15-e008-a-greedy-failure}

For $F=\{\varnothing,\{a\},\{b\},\{c\},\{a,c\}\}$, let weights be $w(a)=2$, $w(b)=3$, $w(c)=2$ and order ties as $a<b<c$. Run descending-weight greedy and compare it with the optimum.

<details>
<summary>Hint 1</summary>

Sort by descending weight, apply the stated tie rule and test feasibility after each proposed addition.

</details>

<details>
<summary>Hint 2</summary>

Compare the selected middle vertex with the feasible pair of endpoints in the three-vertex path.

</details>

<a id="section-511-dm-ch15-e008-solution"></a>
#### DM-CH15-E008 — Solution {#section-513-dm-ch15-e008-solution}

<details>
<summary>Solution</summary>

Greedy examines $b$ first and adds it. Neither $a$ nor $c$ can then be added because $\{a,b\}$ and $\{b,c\}$ are infeasible, so greedy returns $\{b\}$ of weight $3$. Exhaustive comparison finds $\{a,c\}$ feasible with weight $4$; all other listed feasible sets have weights $0,2,3,2$. Hence greedy is suboptimal by one. This failure agrees with the augmentation countercertificate $I=\{b\}$, $J=\{a,c\}$.

</details>

<a id="section-520-dm-ch15-e009-repair-a-signed-upper-bound"></a>
### DM-CH15-E009 — repair a signed upper bound {#section-522-dm-ch15-e009-repair-a-signed-upper-bound}

All subsets of the ordered set $E=\{u,v\}$ are feasible. The weights are $w(u)=-4$ and $w(v)=3$. A branch-and-bound search has the empty-set incumbent of value zero and, at a node with no elements fixed, uses the sum of all undecided weights as an upper bound. Explain why pruning this node is wrong. Give a correct elementary upper bound for any partial chosen set $S$ when undecided elements are optional, and prove it.

<details>
<summary>Hint 1</summary>

A completion may omit a negative-weight element. Compare the proposed bound with the completion containing only $v$.

</details>

<details>
<summary>Hint 2</summary>

For each undecided element, the contribution is either zero or its weight. Bound that contribution by the larger of those two numbers.

</details>

<details>
<summary>Solution</summary>

<a id="section-538-dm-ch15-e009-solution"></a>
#### DM-CH15-E009 — Solution {#section-540-dm-ch15-e009-solution}

The proposed quantity is $-4+3=-1$. Pruning because $-1<0$ would discard the feasible set $\{v\}$, whose value is three. The number $-1$ is therefore not an upper bound on this branch. A correct bound is

$$
w(S)+\sum_{e\text{ undecided}}\max\{0,w(e)\}.
$$

Every completion has the form $S\cup T$, where $T$ is some subset of the undecided elements and no previously excluded element is restored. The contribution of an undecided element is $w(e)$ if it lies in $T$, and zero otherwise. Either contribution is at most $\max\{0,w(e)\}$. Summing these inequalities and adding the already fixed weight $w(S)$ proves the bound for every completion. Restricting to feasible completions cannot invalidate an upper bound proved for the larger collection of all completions. At the specified node the corrected bound is three, attained by $\{v\}$.

</details>

<a id="section-550-dm-ch15-e010-equal-values-need-a-tie-certificate"></a>
### DM-CH15-E010 — equal values need a tie certificate {#section-552-dm-ch15-e010-equal-values-need-a-tie-certificate}

Let $E=\{a,b\}$, in that bit order, and let the feasible sets have size at most one. Both element weights are two. The incumbent is $\{b\}$, of weight two and mask two. A branch excludes $b$ and leaves $a$ undecided, so its weight upper bound is also two. May this branch be pruned when the specification asks for the smallest-mask optimum? Explain the distinction between certifying the optimum value and certifying the requested output.

<details>
<summary>Hint 1</summary>

The remaining branch contains a feasible set with the same value as the incumbent.

</details>

<details>
<summary>Hint 2</summary>

The masks of $\{a\}$ and $\{b\}$ are one and two. The objective's numerical value does not record that ordering.

</details>

<details>
<summary>Solution</summary>

<a id="section-568-dm-ch15-e010-solution"></a>
#### DM-CH15-E010 — Solution {#section-570-dm-ch15-e010-solution}

The branch cannot be pruned merely because its upper bound equals the incumbent value. It contains $\{a\}$, which is feasible, has weight two and has mask one. Thus the specified answer is $\{a\}$ rather than $\{b\}$. The empty set has weight zero, and no two-element set is feasible, so two is indeed the optimum value; these observations do not settle the secondary tie rule.

For a value-only problem, a branch whose upper bound is at most an already attained value may be discarded. For the present output contract, equality needs an additional certificate that no completion in the discarded branch has a smaller mask than the incumbent. A strict weight inequality is sufficient without such a certificate. Keeping this distinction explicit allows two optimizers to agree on the value while correctly detecting that one returns the wrong specified witness.

</details>

<a id="section-576-source-and-verification-note"></a>
## Sources {#section-578-source-and-verification-note}

No third-party computation is asserted here. A future nauty/Traces or other external run must record software/version, command, configuration, immutable input digest, domain coverage, output digest, and certificate/replay evidence; McKay–Piperno’s algorithm article does not certify a run.

<a id="section-580-chapter-summary-and-connections"></a>
## Chapter summary and connections {#section-582-chapter-summary-and-connections}

Exact small computation begins with a finite mathematical contract. Bit masks give complete subset and labeled-graph enumerations; exact integer and rational arithmetic preserve discrete decisions; dynamic programming handles finite state graphs; and witnesses separate feasibility from optimality. The independence-system investigation connects exchange to greedy behavior while keeping its tested weight range explicit. These methods feed backward into proof by finding counterexamples and boundary cases, and forward into the closing chapter, where computation becomes one controlled instrument inside a larger proof-and-modeling portfolio.
