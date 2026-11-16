var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: claims-counterexamples-specifications
title: "Claims, Examples, Counterexamples, and Specifications"
level: undergraduate
estimated_minutes: 110
license: CC BY-SA 4.0
---

# Claims, Examples, Counterexamples, and Specifications

Computer science begins with artifacts—strings, graphs, programs, data—but mathematics begins when we state what must hold for an entire class of them. This chapter develops the smallest proof language needed to turn an intuition into a checkable computational claim.

**Learning purpose.** By the end, you should be able to rewrite an informal
computational promise as a quantified contract, choose a proof shape that
matches its quantifiers, design boundary counterexamples, and distinguish a
mathematical proof from testing or empirical support. The only local
prerequisite is comfort substituting values into formulas.

## 1. A sentence is not yet a specification

“The search finds the target quickly” hides four questions:

1. Which inputs are allowed?
2. What counts as finding the target?
3. Which resource does “quickly” measure?
4. Does the statement quantify over every input, an input distribution, or random choices inside the algorithm?

For binary search, a useful contract is:

> For every finite nondecreasing array $a$ and target $x$, the procedure halts and returns an index $i$ with $a[i]=x$ if one exists; otherwise it returns \`not-found\`. It performs at most $\\left\\lceil \\log_{2}(n+1) \\right\\rceil$ interval-reduction steps on an array of length $n$ under constant-time indexing and comparison.

Sortedness is a precondition. Returning any matching index is the postcondition. Halting and comparison count are separate claims.

## 2. Quantifiers determine the job of a proof

The order of “for every” and “there exists” matters. Compare:

- $\\forall input x, \\exists trace t$ showing that the algorithm succeeds on $x$;
- $\\exists one trace t, \\forall input x$ showing that the same trace succeeds on all inputs.

The first allows behavior to depend on input. The second is usually absurd.

For randomized algorithms, a typical statement is

$\\forall x \\in X, P_{R}(correct(x,R)) \\ge 1-\\delta$,

where the input is fixed first and probability is over internal random seed $R$. This differs from averaging over a friendly input distribution:

$P_{X,R}(correct(X,R)) \\ge 1-\\delta$.

An adversarial rare input can be hidden by the second average.

## 3. Examples discover; counterexamples decide universal claims

Examples help form a conjecture but cannot prove an unrestricted universal statement. Testing that a sorting program succeeds on one million arrays does not prove it succeeds on the next array.

One counterexample refutes a universal claim. If someone claims “breadth-first search finds a minimum-weight path,” use vertices $s,u,t$ with edges $s\\to t$ of weight 10, $s\\to u$ of weight 1, and $u\\to t$ of weight 1. Breadth-first search minimizes edge count, selecting the one-edge route, not weight.

Good counterexample design targets a missing hypothesis:

- remove sortedness from binary search;
- allow a negative edge in Dijkstra’s setting;
- introduce a tie or empty input;
- force integer overflow;
- place geometric points nearly collinear;
- reuse randomness assumed independent.

Boundary cases are not tricks. They reveal the shape of the theorem.

## 4. Implication and its contrapositive

A claim “if $P$, then $Q$” is false only when $P$ is true and $Q$ false. Its contrapositive “if not $Q$, then not $P$” is logically equivalent.

Suppose a directed graph has a topological ordering. If it had a directed cycle, following the cycle would require each vertex to occur before the next and eventually before itself, impossible. This proves the contrapositive: a directed cycle implies no topological ordering, so a topological ordering implies acyclicity.

The converse “if $Q$, then $P$” is a different theorem. Correct output does not imply every invariant proposed in a proof was maintained.

## 5. Necessary and sufficient conditions

A condition $P$ is sufficient for $Q$ when $P\\implies Q$; it is necessary when $Q\\implies P$. A connected undirected graph has a spanning tree. Connectivity is necessary and sufficient for existence of a spanning tree.

In verification, a type check may be sufficient to rule out a class of runtime errors but not necessary for safe execution: some rejected programs would happen to run safely. Soundness asks that accepted artifacts meet the claim. Completeness asks whether every artifact meeting the claim is accepted. These words always need a named relation and universe.

## 6. Direct proof, cases, and contradiction

**Direct proof.** To show the composition of injective functions is injective, assume $(g\\circ f)(x)=(g\\circ f)(y)$. Injectivity of $g$ gives $f(x)=f(y)$; injectivity of $f$ gives $x=y$.

**Cases.** To prove an integer’s square has the same parity as the integer, handle even $n=2k$ and odd $n=2k+1$ separately.

**Contradiction.** To prove no finite automaton recognizes equal counts $0^n1^n$, one can assume a finite machine exists and derive that two distinguishable prefixes share a state. Contradiction is not permission to assume the desired conclusion; it assumes the negation and derives an impossible statement.

## 7. Existence and construction

An existence proof may provide an algorithm or merely show that an object must exist. If the average cut size under random vertex assignment is $\\lvert E\\rvert/2$, at least one cut has size at least $\\lvert E\\rvert/2$. The average need not itself be an attainable integer cut size. This proof becomes constructive when conditional expectation chooses sides one vertex at a time without reducing the remaining expected value.

In finite search spaces, exhaustive enumeration is an algorithm, but its cost can be exponential. “Computable” and “efficiently computable” are different conclusions.

## 8. Definitions are interfaces

A definition should support use and exclusion. A simple path is a sequence of distinct vertices with edges between consecutive entries. The “distinct” clause excludes walks that revisit vertices. If a theorem actually permits repetition, it concerns walks, not simple paths.

When defining an algorithmic object, state:

- representation and equality;
- valid and invalid states;
- operations and their preconditions;
- observation or output relation;
- size measure.

For a finite automaton, the alphabet, states, total transition function, initial state, and accepting set are not decorative fields. Omitting totality changes what a missing transition means.

## 9. Proof as an audit trail

A proof should allow a skeptical reader to locate every dependency. For a loop:

1. identify the program point where the invariant holds;
2. prove initialization;
3. prove preservation for each branch;
4. combine invariant with exit condition;
5. give a decreasing well-founded quantity for termination.

For a probability bound:

1. specify random variables and fixed data;
2. name independence or conditional assumptions;
3. derive expectation or tail inequality;
4. interpret the event in the algorithm’s contract.

For a reduction:

1. construct the mapped instance;
2. prove both directions of yes-instance equivalence;
3. bound construction time and output length.

## 10. From user story to four separate theorems

Consider the request “remove duplicates quickly while keeping the original
order.” A defensible specification separates four claims.

**Functional result.** For input sequence $a$, output $b$ contains each value
that occurs in $a$ exactly once, and values in $b$ occur in the same relative
order as their first occurrences in $a$.

**Termination.** The procedure halts for every finite input sequence whose
equality operation terminates.

**Resource claim.** With a set implementation having expected constant-time
membership and insertion under a stated hashing model, expected running time
is $\\mathcal{O}(n)$ and auxiliary storage is $\\mathcal{O}(k)$, where $k$ is the number of distinct
values. With a balanced comparison tree, deterministic time is $\\mathcal{O}(n \\log(k+1))$ for nonempty input, where $1\\le k\\le n$; the $+1$ includes the linear scan cost when $k=1$. This online bound clarification leaves the retained draft PDF unchanged.

**Effect claim.** The input is not mutated; equality and hashing have no
observable side effects.

These are not four phrasings of one theorem. Correct order preservation does
not prove termination. Termination does not prove the result. An expected cost
bound does not prove a worst-case bound. If equality can mutate state, the
usual mathematical model is incomplete.

### Deriving the functional postcondition

Let $first_{a}(x)$ be the least index where value $x$ occurs. A precise
postcondition can state:

1. $x$ occurs in $b$ iff $x$ occurs in $a$;
2. every value occurs at most once in $b$;
3. for distinct output values $x,y$, $x$ precedes $y$ in $b$ iff
   $first_{a}(x)<first_{a}(y)$.

Clause 1 gives coverage, clause 2 uniqueness, and clause 3 stability. Omitting
any clause admits a wrong output: the empty sequence violates coverage;
$[x,x]$ violates uniqueness; sorting the distinct values may violate stability.

## 11. Proof obligations for a small API

Suppose a priority queue exports \`insert\`, \`minimum\`, and \`removeMinimum\`.
There are three levels of contract.

**Operation contracts** say what each call returns or changes. \`minimum\`
requires nonempty state and returns a member no greater than any other member.

**Representation invariant** says which concrete arrays are valid heaps.

**History or refinement contract** says every observable call sequence behaves
like an abstract multiset priority queue.

Proving each operation restores the heap order is necessary but not sufficient:
an implementation might silently lose a nonminimum element. A refinement proof
also tracks the abstract multiset. Conversely, an implementation could return
correct values while temporarily violating heap order inside one atomic call;
the representation invariant need only hold at the specified abstraction
boundary.

This distinction becomes crucial with concurrency. “After every source line”
and “at every public method boundary” are different temporal claims.

## 12. Proof, exhaustive checking, testing, and measurement

Four evidence modes recur throughout this volume.

| Evidence | Quantified scope | Typical failure |
| --- | --- | --- |
| Deductive proof | Every object satisfying hypotheses | Wrong theorem, omitted case, invalid inference |
| Exhaustive finite check | Every encoded object in a finite declared space | Incomplete generator or wrong checker |
| Testing | Selected executions | Untested counterexample |
| Measurement | Sampled behavior of a physical or software system | Sampling, noise, drift, or model mismatch |

Exhaustive checking can be a proof when completeness is itself established. A
truth table over all $2^n$ valuations proves a propositional formula valid for
that fixed $n$-variable language. Randomly testing many valuations does not.
Exhaustively checking 8-bit integers proves a finite machine-arithmetic claim,
not the analogous theorem over all mathematical integers.

## 13. Minimal counterexamples and proof repair

When a universal theorem is false, a **minimal counterexample** often reveals
the missing structure. Minimality needs an order: shortest word, fewest graph
vertices, smallest integer, or least program steps.

Suppose someone claims every connected graph with $n$ vertices has at least
$n$ edges. The one-vertex graph has zero edges if no self-loop is required; a
two-vertex single-edge graph is another counterexample. The correct lower bound
for a finite connected undirected graph is $n-1$. A clean proof first builds a
spanning tree: begin at one vertex and repeatedly add an edge reaching a new
vertex. Each of the remaining $n-1$ vertices needs one such edge, and the
resulting tree lies inside the graph.

Counterexamples do more than reject. They indicate whether to strengthen a
precondition, weaken a conclusion, change a quantifier, distinguish a
degenerate case, or choose a different representation or cost model.

## 14. A theorem-template workshop

The following templates prevent common quantifier drift.

**Algorithm correctness.** For every input $x$ satisfying precondition $P$,
execution terminates with output $y$ satisfying relation $Q(x,y)$.

**Randomized correctness.** For every fixed allowed input $x$, probability over
fresh internal coins that $Q(x,A(x;R))$ fails is at most $\\delta$.

**Approximation.** For every allowed instance, the algorithm returns a feasible
solution whose objective satisfies the declared ratio or additive bound
relative to optimum, under named objective-sign conventions.

**Finite-state safety.** Every path beginning in a declared initial state and
following the transition relation avoids every declared bad state.

**Empirical performance.** Under the stated sampling, hardware, workload, and
measurement procedure, the observed statistic estimates a named quantity with
stated uncertainty.

Mixing templates creates overclaims. A randomized theorem over every fixed
input is not established by an empirical average over a benchmark collection.

## 15. Relational specifications and permitted choice

Not every correct interface determines one output. If an array contains a
target at indices 3 and 8, the postcondition “return an index containing the
target” permits either answer. Mathematically, correctness is a relation
$Q(input,output)$, not necessarily a function from inputs to outputs.

This distinction matters in three ways.

First, a deterministic implementation may **refine** a relational contract by
making a consistent choice. A lower-bound search that always returns the first
matching position meets the weaker any-match contract, while also satisfying a
stronger first-match theorem. The stronger behavior should not be assumed by a
client unless it is promised.

Second, nondeterministic or concurrent systems can have several allowed traces.
A safety contract usually quantifies universally over them: every allowed
trace avoids error. A possibility contract quantifies existentially: at least
one allowed trace reaches a goal. Confusing the two replaces “the scheduler
cannot cause failure” with “some friendly schedule succeeds.”

Third, randomized algorithms produce a distribution of allowed outputs. A
probability guarantee is additional structure on the correctness relation. It
does not follow merely because each observed output was permitted.

As a small example, let \`select(S)\` return an element of nonempty finite set
$S$. The postcondition $result \\in S$ is relational. An implementation that
always selects the least element under a hidden order is correct, but that does
not make uniform selection part of the contract. Any downstream fairness
claim needs a separately stated distribution.

## 16. Effects, frames, and observational equality

An output equation rarely describes an entire computation. Suppose procedure
\`increment(c)\` returns $c.value+1$. It could return the right integer while
also clearing a log, advancing a random generator, or mutating $c$. A complete
contract names the state that may change.

A **frame condition** says what remains unchanged. In state notation, if
$\\sigma$ and $\\sigma'$ are pre- and post-states, a contract might require

\\[\\sigma'.counter = \\sigma.counter + 1\\]

and, for every location $l$ outside the counter object,

$\\sigma'(l)=\\sigma(l)$.

Real languages complicate this with aliases: two references may name the same
cell. “Does not mutate argument $b$” is false if $a$ and $b$ alias and the
procedure mutates $a$. One repair is a precondition that their reachable
regions are disjoint. Another is a postcondition stated over locations rather
than variable names.

The right equality also depends on observation. Two priority-queue heaps with
different array layouts can be equal as abstract multisets. Two programs can
return the same value but differ observably in I/O, termination, timing, or
exceptions. A proof must say which observations clients are allowed to make.
Representation independence later uses this idea: different concrete states
are interchangeable when every permitted operation gives the same abstract
observations.

## 17. A theorem ledger prevents circular support

Large algorithm arguments are rarely one proof. Keep a ledger whose rows are
claims and whose arrows are permitted dependencies. For a parser and evaluator,
a useful ledger might be:

| Claim | Hypotheses | Depends on | Does not establish |
| --- | --- | --- | --- |
| tokenization soundness | character encoding valid | scanner invariant | grammar membership |
| parser soundness | token stream well formed | grammar induction | parser completeness |
| evaluator preservation | tree well typed | structural induction | termination of arbitrary programs |
| whole-pipeline result | all three interfaces align | preceding claims | asymptotic cost |

This table catches a common circular proof: assuming “the parser produces a
valid tree” to justify a parser step whose purpose is to prove exactly that
fact. Replace the assumption with a local invariant about the partially built
stack and remaining tokens.

The ledger also localizes conditional conclusions. If scanner soundness assumes
UTF-8 validation, the pipeline theorem either inherits that precondition or
proves a validation stage. A hypothesis cannot disappear merely because it was
introduced several lemmas earlier.

A practical proof review reads the ledger backward from the user-visible
promise. Each leaf must be a declared assumption, a definition, or a proved
fact. Any leaf labeled “obvious,” “library behavior,” or “usual model” is a
request for a precise contract.

## Worked audit: duplicate detection

Claim: “Insert array values into a set; report duplicate when an insertion finds an existing value.”

Precondition: a finite sequence whose values have exact decidable equality. Invariant after processing prefix $a[0..i)$:

- the set contains exactly the distinct values in that prefix;
- no duplicate has occurred in that prefix unless already reported.

If $a[i]$ is present, an earlier equal value exists, so reporting is sound. If absent, adding it restores the set equality. If the loop ends without reporting, every value was new when encountered, so all entries are pairwise distinct.

Expected linear time requires a hash-table model and hashing assumptions. Using a balanced comparison tree instead gives deterministic $\\mathcal{O}(n \\log n)$ time. Correctness does not depend on either cost model.


## Worked example 1: specifying the first maximum

For input $a=[5,5,2]$, the contract “return an index of a maximum” permits both zero and one. The stronger contract “return the first maximum” permits only zero. A precise stronger postcondition for nonempty length-$n$ input is $0\\le i<n$, $a[j]\\le a[i]$ for every valid $j$, and $a[j]<a[i]$ for every $j<i$. The last clause excludes an earlier tied maximum.

Scan from left to right, keeping the first index of the largest value seen. Initially the processed prefix contains only index zero. On seeing a strictly larger entry, replace the stored index; that entry is now the unique earliest occurrence of the new maximum. On seeing an equal or smaller entry, retain the stored index; its value remains maximal and no earlier equal maximum has appeared. Induction over the prefix proves the invariant, and at the full prefix it gives the stronger contract. The finite number of unread entries decreases each step. On the supplied array the stored index remains zero at both comparisons. Updating on equality instead would return one: correct for the weaker contract, incorrect for the stronger one.

## Worked example 2: checking an alias-sensitive effect promise

Suppose references $a$ and $b$ name the same cell, whose initial value is three. An operation writes four through $a$, returns four, and promises that the cell named by $b$ remains unchanged. The numeric result meets its output equation, but the frame promise requires the final value of that same cell to remain three. Since one cell cannot simultaneously contain three and four, the combined promise is violated.

Two repairs lead to different interfaces. A disjointness precondition can prohibit this input by requiring the writable region of $a$ to be disjoint from the region protected through $b$. Alternatively the frame can protect every location outside the writable region of $a$, permitting aliases inside that region to observe the change. The latter contract accepts the supplied input and reports the changed value through both references. Neither repair follows from the returned integer alone; the specification must choose one before a proof can be judged.

## Worked example 3: exposing the order of random and adversarial choices

Let the input and random seed both range over $\\{0,1\\}$, with a fair seed $R$. Suppose a procedure fails exactly when $x=R$. For fixed input zero, failure occurs only at seed zero, so its probability is one half. For fixed input one the calculation is identical. Thus every fixed input has failure probability one half over the algorithm's seed.

Now permit an adversary to inspect the seed and then choose $x=R$. For every seed its chosen input fails, so the failure probability is one. This does not contradict the earlier calculation: its quantifier fixed $x$ before sampling $R$. A theorem against this stronger adversary needs an appropriate conditional guarantee or hidden randomness. Listing the four input-seed pairs makes both statements explicit: exactly two pairs fail, but the adaptive choice selects only those failing pairs.

## Practice with solutions

### Exercise 1
<a id="claims-counterexamples-specifications-ex-1"></a>

Refute the universal claim that every largest-first greedy coin algorithm uses a minimum number of coins, using denominations $1,3,4$ and target $6$.

<details>
<summary>Hint 1</summary>

Compare the greedy choice with a combination using a smaller denomination.

</details>
<details>
<summary>Hint 2</summary>

After choosing four, count the coins needed for the remaining two.

</details>
<details>
<summary>Solution</summary>

1. **Refute “every greedy algorithm is optimal.”** Coin denominations 1, 3, 4 and target 6 make largest-first choose $4+1+1$, while $3+3$ uses fewer coins.

Largest-first uses three coins. One coin cannot make six because six is not a denomination, while two coins of value three do make six. Thus the optimum is exactly two and the greedy output is strictly worse. One permitted instance is enough to refute the universal assertion.

</details>

### Exercise 2
<a id="claims-counterexamples-specifications-ex-2"></a>

Negate the statement that every allowed program input has exactly one possible output.

<details>
<summary>Hint 1</summary>

An assertion of unique existence includes both existence and uniqueness.

</details>
<details>
<summary>Hint 2</summary>

Failure can mean an empty output set or two distinct members of that set.

</details>
<details>
<summary>Solution</summary>

2. **Negate “every program input has exactly one output.”** There exists an input for which either no output occurs or at least two distinct outputs are possible.

If $Q(x,y)$ means that output $y$ is possible for input $x$, the negation is $\\exists x[(\\forall y\\,\\neg Q(x,y))\\lor\\exists y\\exists z(Q(x,y)\\land Q(x,z)\\land y\\ne z)]$. Two traces returning the same value do not alone violate uniqueness of the output value; the chosen observation must be specified.

</details>

### Exercise 3
<a id="claims-counterexamples-specifications-ex-3"></a>

What information is missing from the assertion “this parser is complete”?

<details>
<summary>Hint 1</summary>

Ask which objects must be accepted or produced.

</details>
<details>
<summary>Hint 2</summary>

Acceptance of a string and production of every parse tree are different relations.

</details>
<details>
<summary>Solution</summary>

3. **What is missing from “this parser is complete”?** The language and acceptance relation. Completeness could mean accepting every valid string, producing every parse tree, or something else.

Fix a language $L$ and an acceptance predicate $Accept$. Acceptance completeness is $w\\in L\\implies Accept(w)$. For a tree-producing parser, completeness could instead require every valid parse tree of each input to appear among its outputs. An ambiguous word can have several valid trees, so a parser returning one can meet the first contract while failing the second. Without the universe and relation there is no single claim to prove.

</details>

### Exercise 4
<a id="claims-counterexamples-specifications-ex-4"></a>

Why does passing an empty collection of examples give no discriminating support for a universal correctness claim?

<details>
<summary>Hint 1</summary>

Write what “passes every supplied example” quantifies over.

</details>
<details>
<summary>Hint 2</summary>

A universal statement over the empty set has no failing member.

</details>
<details>
<summary>Solution</summary>

4. **Why is an empty test set dangerous for a universal claim?** Every implementation passes vacuously; it supplies no discriminating case.

For any implementation, correct or incorrect, there is no supplied input on which a failure could be observed. The assertion about all supplied cases is therefore vacuously true. It cannot distinguish a correct implementation from one returning a wrong constant. This is a statement about evidence scope, not a claim that an empty input to the program itself must be invalid.

</details>

### Exercise 5
<a id="claims-counterexamples-specifications-ex-5"></a>

Negate “every execution from an allowed initial state avoids error”, retaining the transition and initial-state conditions.

<details>
<summary>Hint 1</summary>

Negate the outer universal quantifier first.

</details>
<details>
<summary>Hint 2</summary>

An error state alone does not certify that the system can reach it.

</details>
<details>
<summary>Solution</summary>

5. **Negate a safety claim.** Negate “every execution from an initial state
   avoids error.” **Solution:** there exists an execution beginning in an
   allowed initial state that follows allowed transitions and reaches error.
   A counterexample therefore needs the path, not only the error state.

The witness must be an allowed initial state together with a sequence of allowed transitions ending at an error. A finite prefix suffices when error means entry into a designated bad state, even if the execution could continue. A state outside the reachable region is not a counterexample to the original safety assertion.

</details>

### Exercise 6
<a id="claims-counterexamples-specifications-ex-6"></a>

A proposed sorting postcondition requires only nondecreasing output. Identify the missing requirement and give a wrong output admitted without it.

<details>
<summary>Hint 1</summary>

The input values must not disappear or change multiplicity.

</details>
<details>
<summary>Hint 2</summary>

Compare sortedness with equality of the input and output multisets.

</details>
<details>
<summary>Solution</summary>

6. **Find the missing clause.** A sorting postcondition says only “output is
   nondecreasing.” **Solution:** output must also be a permutation of input.
   Otherwise an empty sequence or repeated minimum is sorted but wrong.

For input $[2,1]$, the empty list is nondecreasing but loses both values. Requiring output to be a permutation of input preserves length and the multiplicity of each value. Combined with nondecreasing order, it expresses the usual functional sorting contract. When stability is also promised, equal-key records need an additional relative-order clause.

</details>

### Exercise 7
<a id="claims-counterexamples-specifications-ex-7"></a>

Compare a linear expected-time bound for every fixed input with a bound averaged over an input distribution.

<details>
<summary>Hint 1</summary>

Identify what is fixed before the expectation is taken.

</details>
<details>
<summary>Hint 2</summary>

An input law can give a troublesome input very little probability.

</details>
<details>
<summary>Solution</summary>

7. **Quantifier audit.** Compare “for every input, expected runtime is at most
   $cn$” with “expected over inputs, runtime is at most $cn$.” **Solution:** the
   first fixes any input and averages algorithmic randomness; the second can
   hide a slow input inside the input distribution.

The first statement has form $\\forall x,\\ E_R[T(x,R)]\\le c|x|$. The second averages $T$ over a chosen distribution of $X$ and possibly over $R$. For example, two equally sized inputs with costs $n$ and $n^2$ can have a linear average if the second receives probability $1/n$; the second input itself still costs quadratically. The distributions and the order of choices belong to the theorem.

</details>

### Exercise 8
<a id="claims-counterexamples-specifications-ex-8"></a>

Does the fact that a tree on $n$ vertices has $n-1$ edges imply that every graph with $n-1$ edges is a tree? Give a counterexample and a sufficient added hypothesis.

<details>
<summary>Hint 1</summary>

A cycle can coexist with an isolated component.

</details>
<details>
<summary>Hint 2</summary>

Check the vertex and edge counts of a triangle plus one isolated vertex.

</details>
<details>
<summary>Solution</summary>

8. **Converse trap.** From “if a graph is a tree, it has $n-1$ edges,” may we
   conclude every $n$-vertex graph with $n-1$ edges is a tree? **Solution:** no.
   A triangle plus an isolated vertex has four vertices and three edges but is
   disconnected. Adding connectedness makes the converse true.

That graph has four vertices and three edges. It has a cycle and is disconnected, so it is not a tree. For a finite simple undirected graph, connectedness together with $n-1$ edges does imply a tree: deleting an edge of any cycle preserves connectedness and would leave fewer than the connectedness lower bound of $n-1$ edges. The new graphs chapter proves this characterization fully.

</details>

### Exercise 9
<a id="claims-counterexamples-specifications-ex-9"></a>

Repair a maximum-index specification on an empty array, explaining how each possible repair changes the interface.

<details>
<summary>Hint 1</summary>

A valid array index must be smaller than the length.

</details>
<details>
<summary>Hint 2</summary>

You may restrict inputs or enlarge the output type.

</details>
<details>
<summary>Solution</summary>

9. **Specification repair.** “Return an index of the maximum array entry” on
   an empty array. **Solution:** require nonempty input, return an optional
   result, or define an error. Each choice gives a different client contract.

At length zero no integer satisfies $0\\le i<0$, so the original postcondition is impossible. A nonempty-input precondition excludes this case. An optional-result interface returns an explicit absent value exactly when the array is empty. An error contract instead specifies a named failure on empty input. These are distinct total or partial interfaces and must not be silently interchanged.

</details>

### Exercise 10
<a id="claims-counterexamples-specifications-ex-10"></a>

Classify a procedure that explores every reachable product state of two validated total finite automata and finds no acceptance disagreement. State what must be proved for its conclusion.

<details>
<summary>Hint 1</summary>

The words are infinite in number but the product-state space is finite.

</details>
<details>
<summary>Hint 2</summary>

Every word must map to its corresponding reached pair of machine states.

</details>
<details>
<summary>Solution</summary>

10. **Evidence classification.** A checker explores every product state of two
    validated finite automata and finds no acceptance disagreement.
    **Solution:** this is exhaustive finite proof of language equivalence,
    assuming correct product generation, not merely word testing.

Induction on word length establishes the product invariant. Exhaustive exploration must visit every reachable pair, and each checked pair must agree on acceptance. Hence every word leads to an agreement pair, proving language equivalence. If totality, product construction or exhaustive coverage is missing, the same reported outcome does not establish that theorem.

</details>

### Exercise 11
<a id="claims-counterexamples-specifications-ex-11"></a>

A valid seven-step error trace is returned although a five-step error trace exists. Which claims does the returned trace establish or refute?

<details>
<summary>Hint 1</summary>

Separate existence of an error execution from minimal length.

</details>
<details>
<summary>Hint 2</summary>

A valid witness need not be the shortest witness.

</details>
<details>
<summary>Solution</summary>

11. **Minimal bug trace.** A bad state is reachable in five steps, but a tool
    returns a valid seven-step trace. **Solution:** it refutes safety but does
    not support the claimed shortest-trace property.

The seven-step trace establishes reachability of error and refutes universal safety, provided its initial state and transitions are allowed. Since a shorter valid error trace exists, it does not meet a shortest-trace specification. The longer witness remains a correct safety counterexample; only the additional optimality claim fails.

</details>

### Exercise 12
<a id="claims-counterexamples-specifications-ex-12"></a>

A routine returns $x+y$ but erases a global log. Does the numeric equation establish its full correctness under a promise to preserve unrelated state?

<details>
<summary>Hint 1</summary>

Check the frame condition independently of the returned value.

</details>
<details>
<summary>Hint 2</summary>

Choose an initial state with a nonempty log.

</details>
<details>
<summary>Solution</summary>

12. **Frame-condition counterexample.** A routine returns $x+y$ but erases a
    global log. **Solution:** it meets the numeric result yet violates a frame
    promise that unrelated state remains unchanged.

With such an initial state, the required equality of the log before and after the call is false, although the numeric output equation holds. The numeric and frame clauses form a conjunction; failure of either makes the full contract fail. An effects-permitting interface could allow the erasure, but that would be a different contract.

</details>

### Exercise 13
<a id="claims-counterexamples-specifications-ex-13"></a>

A graph-search contract permits any shortest path. Two runs return different paths of the same minimum length. Does that refute the contract?

<details>
<summary>Hint 1</summary>

Check membership in the allowed-output relation, rather than literal equality of runs.

</details>
<details>
<summary>Hint 2</summary>

Tie-breaking is an extra condition if it is promised at all.

</details>
<details>
<summary>Solution</summary>

13. **Relational output.** A graph search may return any shortest path. Two
    executions return different paths of the same minimum length. **Solution:**
    neither difference refutes the relational contract. A deterministic-path
    claim would additionally need a tie-breaking rule and representation order.

Both outputs must first be valid source-to-target paths. If both lengths equal the minimum, each lies in the permitted relation, so their difference supplies no counterexample. A reproducibility promise would additionally constrain the selected path, for example by a fixed order on neighbors and a tie rule. That stronger condition does not follow from shortestness.

</details>

### Exercise 14
<a id="claims-counterexamples-specifications-ex-14"></a>

A server recovers under scheduler A and deadlocks under allowed scheduler B. Distinguish the existential recovery and universal deadlock-freedom conclusions.

<details>
<summary>Hint 1</summary>

List which schedules witness each statement.

</details>
<details>
<summary>Hint 2</summary>

A universal safety claim must survive every allowed schedule.

</details>
<details>
<summary>Solution</summary>

14. **Universal or existential trace?** A server can recover when scheduler A
    runs it, but deadlocks under scheduler B. **Solution:** this proves an
    existential recovery claim and refutes universal deadlock freedom over both
    allowed schedules.

Scheduler A supplies one successful execution, establishing possibility of recovery. Scheduler B supplies a failing execution, refuting the assertion that every allowed schedule avoids deadlock. Neither statement implies how often the schedules occur; a probability conclusion requires a distribution or scheduler model. Excluding B would require an explicit restriction such as an applicable fairness condition.

</details>

### Exercise 15
<a id="claims-counterexamples-specifications-ex-15"></a>

A routine may change locations reachable from $a$ but promises not to change locations reachable from $b$. Explain the aliasing issue and two consistent repairs.

<details>
<summary>Hint 1</summary>

The two reachable regions may overlap.

</details>
<details>
<summary>Hint 2</summary>

A frame can be stated over locations instead of names.

</details>
<details>
<summary>Solution</summary>

15. **Alias-sensitive frame.** Procedure \`setFirst(a)\` may change locations
    reachable from $a$ but promises not to change those reachable from $b$.
    **Solution:** require the reachable regions to be disjoint, or weaken the
    frame to locations reachable only from $b$; otherwise aliasing can make the
    two clauses inconsistent.

If the operation must change an overlapping cell, the two promises conflict on that cell. Requiring disjoint regions rules out the conflict before execution. Alternatively protect only locations reachable from $b$ that lie outside the declared writable region. If the routine happens not to touch shared cells, a stronger frame might still hold, but that needs a proof about the operation, not merely different variable names.

</details>

### Exercise 16
<a id="claims-counterexamples-specifications-ex-16"></a>

A sorting proof invokes a distinct-key lemma while the public contract allows duplicates. State the logical gap and possible repairs.

<details>
<summary>Hint 1</summary>

A lemma transfers its hypotheses to every theorem using it.

</details>
<details>
<summary>Hint 2</summary>

Testing a tied input cannot remove a hypothesis from a proof.

</details>
<details>
<summary>Solution</summary>

16. **Dependency audit.** A sort proof uses a lemma that assumes all keys are
    distinct, while the public contract permits duplicates. **Solution:** the
    final theorem must inherit distinctness, or the lemma must be reproved with
    a non-strict order and a multiplicity-preserving invariant. Testing ties
    does not repair the logical gap.

Either restrict the public input class to distinct keys and state the narrower result, or prove an appropriate lemma for duplicate keys. The latter must preserve multiplicities and use comparisons compatible with ties; a stability promise needs further relative-order reasoning. Until one repair is made, the proof does not cover all inputs permitted by the public contract.

</details>

## Part I investigation: contract archaeology

Choose a dependency-free function already present in a program. Without
changing it, reconstruct its input and output types, inferred preconditions,
postcondition, mutation and effects, termination measure, and resource claim.
Design three boundary counterexamples to an overbroad contract. Give one test
that checks an example and one proof outline covering all allowed inputs.

Compare the reconstruction with documentation. A mismatch is not automatically
an implementation bug: it can reveal undocumented behavior, an underspecified
interface, or a mistaken reconstruction. State which explanation the evidence
supports and what further check would distinguish them.

[Book overview](#/item/book-algorithms-computation-proof-desk)

## Sources

For a primary companion text, see Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [Mathematics for Computer Science, MIT OpenCourseWare](https://www.ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/). The original chapter text, proofs, investigations and numbered practice items are retained here; the additional examples, staged hints and developed solution explanations are new Euler exposition under the chapter licence.

## Summary

Computational correctness is a quantified relation with stated domains, effects and observations. Counterexamples must satisfy the hypotheses and violate the promised conclusion; proof shape follows quantifier order. Examples, finite exhaustive arguments and sampled measurements have different scopes. The worked cases show why tie-breaking, aliasing and adversary timing are mathematical parts of a contract. The next chapter supplies precise finite objects and encodings on which those contracts operate.
`;export{e as default};