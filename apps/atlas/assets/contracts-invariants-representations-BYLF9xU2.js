var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: contracts-invariants-representations
title: "Contracts, Invariants, and Representations"
level: undergraduate
estimated_minutes: 125
license: CC BY-SA 4.0
---

# Contracts, Invariants, and Representations {#section-1-contracts-invariants-and-representations}

An implementation manipulates concrete states. A specification describes which final states count as correct. The proof bridge is usually an invariant: a statement maintained by each transition and strong enough, together with termination, to imply the postcondition.

<a id="section-3-1-partial-and-total-correctness"></a>
## 1. Partial and total correctness {#section-5-1-partial-and-total-correctness}

Write a program contract as a precondition $P(x)$ and a postcondition $Q(x,y)$. **Partial correctness** says: if $P$ holds and the program terminates with output $y$, then $Q$ holds. **Total correctness** adds termination for every allowed input.

The distinction matters. Consider repeatedly replacing positive integers $(a,b)$ by $(b,a \\bmod b)$ until $b=0$. The invariant

\\[\\gcd(a,b) = \\gcd(original a, original b)\\]

proves that a terminating output is the desired greatest common divisor. Termination comes from the separate variant $b$: after a nonterminal step, $0 \\le a \\bmod b < b$. A nonnegative integer cannot decrease strictly forever.

**Boundary.** This argument assumes exact integer remainder with positive divisor. Language-specific behavior for negative remainders must be reconciled with the mathematical contract.

<a id="section-15-2-deriving-an-invariant-rather-than-guessing-one"></a>
## 2. Deriving an invariant rather than guessing one {#section-17-2-deriving-an-invariant-rather-than-guessing-one}

Suppose an array $a[0..n)$ is partitioned around a pivot $p$. A loop keeps three regions:

- $a[0..i)$ contains values less than $p$;
- $a[i..j)$ contains values at least $p$ already examined;
- $a[j..n)$ is unexamined.

At step $j$, either swap $a[j]$ into the first region and increment both indices, or just increment $j$. The invariant is not merely “some values have been partitioned”; it records the exact meaning of each interval. Initialization uses empty first and second regions. Preservation follows by a two-case proof. At $j=n$, the unexamined region is empty, so the first two clauses establish the partition postcondition.

A useful derivation method works backward:

1. Write the desired postcondition with every quantifier visible.
2. Replace a final boundary such as $n$ by a moving boundary such as $j$.
3. Add facts needed to justify the update.
4. Test initialization and preservation on empty and one-element cases.

An invariant can be true yet useless. “The array still has $n$ entries” is preserved but does not imply partitioning.

<a id="section-34-3-representation-invariants-and-abstraction-functions"></a>
## 3. Representation invariants and abstraction functions {#section-36-3-representation-invariants-and-abstraction-functions}

A data structure has a concrete representation $c$ and an abstract value $A(c)$. A representation invariant $RI(c)$ identifies valid concrete states.

For a circular queue stored in an array of capacity $m$, one design uses indices \`front\`, \`length\`, and elements. Its invariant includes

$0 \\le front < m$, $0 \\le length \\le m$,

and the abstract sequence is

$A(c)[k] = array[(front+k) \\bmod m]$ for $0 \\le k < length$.

To prove \`enqueue(x)\`, show it writes to $(front+length) \\bmod m$, increments length only when not full, preserves the bounds, and makes the new abstraction equal to the old sequence followed by $x$. To prove $dequeue$, show the returned element is $A(c)[0]$, advance \`front\`, reduce length, and preserve the remaining order.

The abstraction function prevents a frequent error: proving index bounds while never proving that the representation means the right sequence.

<a id="section-50-4-recursive-correctness"></a>
## 4. Recursive correctness {#section-52-4-recursive-correctness}

For recursion, state a proposition indexed by input size and use well-founded induction. Merge sort’s correctness has two obligations:

1. the result is nondecreasing;
2. it is a permutation of the input multiset.

Assume recursive calls correctly sort shorter halves. During merge, maintain that the output prefix is sorted, is precisely the consumed multiset, and every unconsumed item is at least the last output item. When one half empties, appending the other preserves these clauses. Both sortedness and permutation are necessary: returning an empty list is always sorted but loses every item.

<a id="section-59-5-graph-search-certificates"></a>
## 5. Graph-search certificates {#section-61-5-graph-search-certificates}

Breadth-first search from $s$ assigns a distance and parent to each discovered vertex. The parent pointers form explicit certificates: following parents gives a path of the recorded length. The frontier-order argument proves no shorter path exists.

For depth-first search, discovery and finishing times support a different invariant: active recursion frames form a path; every edge from a finished vertex has already been classified relative to the traversal forest. These facts power cycle detection and topological sorting.

If a directed graph is acyclic, reverse finishing order is topological. Why? For every edge $u\\to v$, either the search reaches $v$ from $u$, so $v$ finishes first, or $v$ was already finished, again placing it earlier in finish order. A back edge to an active ancestor would witness a cycle. Reversing therefore puts $u$ before $v$.

<a id="section-67-6-mutable-structures-and-local-repair"></a>
## 6. Mutable structures and local repair {#section-69-6-mutable-structures-and-local-repair}

A binary min-heap maintains completeness of shape and $key(parent) \\le key(child)$ for every tree edge. Inserting at the last position preserves shape and can violate order only along the new node’s ancestor path. Repeated upward swaps repair precisely those edges. The global theorem follows because no off-path edge changes.

For a union–find forest, every node points toward a representative root. Union by rank preserves the forest and path compression changes parent pointers without changing which root is reached. The famous near-constant amortized bound is much subtler than correctness; do not cite it from the visual shape alone.

<a id="section-73-7-hoare-triples-as-compact-contracts"></a>
## 7. Hoare triples as compact contracts {#section-75-7-hoare-triples-as-compact-contracts}

A Hoare triple $\\{P\\} C \\{Q\\}$ asserts partial correctness: when command $C$ begins in a state satisfying $P$, every terminating execution ends in a state satisfying $Q$. For assignment, the backward rule is

$\\{Q[x := E]\\} x := E \\{Q\\}$.

This is substitution, not execution. To prove $\\{x+1>0\\} x:=x+1 \\{x>0\\}$, substitute $x+1$ for the postcondition’s $x$; the precondition is exactly what results.

For a while loop $\\mathsf{while} B do C$, an invariant $I$ supports:

- precondition implies $I$;
- $\\{I \\land B\\} C \\{I\\}$;
- $I \\land \\neg B$ implies the desired postcondition.

Total correctness again needs a well-founded variant.

<a id="section-89-worked-audit-exponentiation-by-squaring"></a>
## Worked audit: exponentiation by squaring {#section-91-worked-audit-exponentiation-by-squaring}

Compute $base^exponent$ for a nonnegative integer exponent. Keep $r$, $b$, and $e$ with invariant

$r \\cdot b^e = original_{base}^original_{exponent}$.

Initially $r=1$, $b=base$, $e=exponent$. If $e$ is odd, replace $r$ by $r\\cdot b$ and $e$ by $e-1$; the invariant is unchanged. Now $e$ is even; replace $b$ by $b^{2}$ and $e$ by $e/2$, since $(b^{2})^{e/2}=b^e$. The variant $e$ decreases whenever positive. At $e=0$, the invariant gives $r=base^exponent$.

The number of halvings is $\\mathcal{O}(\\log exponent)$. This counts arithmetic operations, not bit cost; multiplying large integers grows more expensive with operand length.

<a id="section-99-common-proof-failures"></a>
## Common proof failures {#section-101-common-proof-failures}

- Proving preservation but omitting initialization.
- Proving partial correctness and saying “therefore it terminates.”
- Switching between closed and half-open intervals mid-proof.
- Treating an assertion observed in tests as universally quantified.
- Using a representation invariant without an abstraction function.
- Assuming mathematical integers when implementation arithmetic can overflow.


<a id="section-109-worked-example-1-a-complete-maximum-proof"></a>
## Worked example 1: a complete maximum proof {#section-111-worked-example-1-a-complete-maximum-proof}

Let $a$ be an immutable array of length $n\\ge1$ with a total order on its entries. Set $i=1$ and $m=a[0]$. While $i<n$, set $m=\\max(m,a[i])$ and increase $i$. The invariant is $1\\le i\\le n$, together with the assertion that $m$ is one of the first $i$ entries and is at least every one of them. Initially the processed prefix is the singleton at zero, so every clause holds. On an iteration, comparing with the next entry gives a value belonging to the enlarged prefix and bounding every entry of it. Increasing the boundary restores the same assertion. The variant $n-i$ is nonnegative and decreases strictly, so termination follows. At exit $i=n$, the invariant gives exactly a maximum of the entire input, including its membership in that input.

This last membership clause prevents an output larger than every entry from passing as a maximum. For $[4,1,4]$, the successive processed prefixes give $m=4,4,4$; ties need no arbitrary tie-breaking because the output contract asks for a value. If it asked for the first maximum index, retaining the earlier index on equality would be an additional obligation. The empty array is excluded by the precondition, since initialization would otherwise read a nonexistent cell.

<a id="section-115-worked-example-2-a-circular-queue-wraps-without-changin"></a>
## Worked example 2: a circular queue wraps without changing order {#section-117-worked-example-2-a-circular-queue-wraps-without-changin}

Take capacity $m=5$, front index $3$ and length $3$. Suppose cells $3,4,0$ contain $A,B,C$. The abstraction is the sequence $[A,B,C]$, because its $k$th entry is at $(3+k)\\bmod5$. Enqueuing $D$ writes cell $(3+3)\\bmod5=1$ and changes length to four. The old three positions are distinct from this new position: equality of two residue indices with offsets in $[0,5)$ would force equal offsets. Thus no old queue element is overwritten, and the abstraction becomes $[A,B,C,D]$.

Dequeuing returns $A$, advances front to four modulo five and changes length back to three. Its abstraction is now $[B,C,D]$: for each new offset $k$, the physical index is $(4+k)\\bmod5=(3+(k+1))\\bmod5$. Bounds remain legal because capacity is positive and the original length was nonzero. Enqueue additionally requires length below capacity. These two preconditions distinguish a full queue from an empty one even when their front indices happen to coincide. The argument is an index identity covering all entries, not merely the pictured four values.

<a id="section-121-worked-example-3-exponentiation-with-zero-and-negative-"></a>
## Worked example 3: exponentiation with zero and negative bases {#section-123-worked-example-3-exponentiation-with-zero-and-negative-}

For base $-2$ and exponent $5$, the invariant in the earlier squaring algorithm starts at $1\\cdot(-2)^5=-32$. The odd step gives $(r,b,e)=(-2,-2,4)$, followed by the square-and-half step $(-2,4,2)$. Another square-and-half step gives $(-2,16,1)$. The odd step then gives $(-32,16,0)$, so the result is $-32$. Each state satisfies $rb^e=-32$; a negative base causes no problem because only integer powers are used.

For exponent zero, the loop is skipped and the result is one. The contract therefore adopts the usual algorithmic empty-product convention, including $0^0=1$ for this operation. If an application chooses a different domain convention for that expression, it should exclude that input rather than silently change the proof. For positive exponent, either an odd decrement or an even halving strictly reduces $e$, so no branch can repeat forever. Exact integer multiplication is assumed; overflow would need a separate representation theorem.

<a id="section-127-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-129-exercises-with-complete-solutions}


<a id="section-130-exercise-1"></a>
### Exercise 1 {#section-132-exercise-1}
<a id="contracts-invariants-representations-ex-1"></a>

Why is “the sum of array entries is unchanged” insufficient for sorting?

<details>
<summary>Hint 1</summary>

Compare arrays with the same sum but different entries.

</details>
<details>
<summary>Hint 2</summary>

A sorting contract needs multiplicities, not just one aggregate.

</details>
<details>
<summary>Solution</summary>

It permits $[1,4]$ to become $[2,3]$; sortedness and multiset preservation need stronger claims.

The maximum example makes the same distinction: merely bounding every entry does not show that the answer is an input entry. A complete sorting relation must require a nondecreasing sequence with exactly the same multiplicity for each value. Equal sums are only a necessary condition for that relation.

</details>

<a id="section-156-exercise-2"></a>
### Exercise 2 {#section-158-exercise-2}
<a id="contracts-invariants-representations-ex-2"></a>

Give a variant for linear search.

<details>
<summary>Hint 1</summary>

Name the unprocessed suffix length.

</details>
<details>
<summary>Hint 2</summary>

Show it decreases when the index advances.

</details>
<details>
<summary>Solution</summary>

If $i$ is the next uninspected index, $n-i$ is a nonnegative integer that decreases each unsuccessful step.

At loop entry, require $0\\le i\\le n$ and that every earlier entry differs from the target. If a match is found, return it. Otherwise incrementing $i$ preserves the inspected-prefix assertion and decreases $n-i$. At exit the whole array has been excluded. This gives a total proof once the finite-array and indexing preconditions are stated.

</details>

<a id="section-182-exercise-3"></a>
### Exercise 3 {#section-184-exercise-3}
<a id="contracts-invariants-representations-ex-3"></a>

What certificate can accompany a shortest-path distance?

<details>
<summary>Hint 1</summary>

A path gives one attainable length.

</details>
<details>
<summary>Hint 2</summary>

Minimality requires excluding every shorter path.

</details>
<details>
<summary>Solution</summary>

A predecessor chain proves an upper bound by exhibiting a path. A separate invariant or dual potential is needed for minimality.

For shortest paths, one may add labels satisfying $d(s)=0$ and $d(v)\\le d(u)+w(u,v)$ on every reachable edge, together with a path of length $d(t)$. Repeated edge inequalities bound $d(t)$ below every candidate path length, while the supplied path attains it. A bare parent chain establishes only the attainment direction.

</details>

<a id="section-208-exercise-4"></a>
### Exercise 4 {#section-210-exercise-4}
<a id="contracts-invariants-representations-ex-4"></a>

Specify total correctness for maximum of a nonempty array.

Use the loop that starts with $m=a[0]$, then replaces $m$ by $\\max(m,a[i])$ while advancing $i$ from $1$ to $n$. State an invariant and a variant.

<details>
<summary>Hint 1</summary>

Describe the processed prefix and require the output to be one of its entries.

</details>
<details>
<summary>Hint 2</summary>

Use $n-i$ for termination and inspect the state $i=n$.

</details>
<details>
<summary>Solution</summary>

The precondition is $n\\ge 1$; the postcondition is that the returned $m$ is an entry of $a$ and every entry is at most $m$. At the head of the loop, use
   $1\\le i\\le n$ and $m=\\max\\{a[j]:0\\le j<i\\}$. It holds initially because the processed prefix has one entry. Updating with $a[i]$ makes $m$ the maximum of the prefix ending at $i$, and incrementing $i$ restores the half-open form. When $i=n$, the prefix is the whole array, so the postcondition follows. The nonnegative variant $n-i$ decreases by one on each iteration, proving termination.

</details>

<a id="section-235-exercise-5"></a>
### Exercise 5 {#section-237-exercise-5}
<a id="contracts-invariants-representations-ex-5"></a>

Repair a false binary-search invariant.

A student proposes “if the target occurs, it lies in $a[lo..hi)$” but permits an update $lo=mid$ when $a[mid]<target$. Explain the termination fault and repair a membership search.

<details>
<summary>Hint 1</summary>

Consider an interval containing exactly one index.

</details>
<details>
<summary>Hint 2</summary>

Exclude the midpoint when the comparison proves it is not a match.

</details>
<details>
<summary>Solution</summary>

With $mid=\\left\\lfloor (lo+hi)/2 \\right\\rfloor$, an interval of length one has $mid=lo$; setting $lo=mid$ makes no progress. Compare explicitly: if $a[mid]=target$, return success; if $a[mid]<target$, set $lo=mid+1$; otherwise set $hi=mid$. The equality branch preserves a witness, while either continuing branch excludes only values proved unable to equal the target. The variant $hi-lo$ strictly decreases on every continuing iteration. Reaching the empty interval then certifies absence. A lower-bound implementation could instead use the same two interval updates without the equality return and, at exit, test $lo<n$ and $a[lo]=target$.

</details>

<a id="section-261-exercise-6"></a>
### Exercise 6 {#section-263-exercise-6}
<a id="contracts-invariants-representations-ex-6"></a>

Design an abstraction function for a set represented by an unsorted array prefix.

The concrete state is $(a,k)$ with capacity $m$; duplicates are forbidden. Give $RI$, the abstraction, and the proof obligations for insertion.

<details>
<summary>Hint 1</summary>

Define the legal size range and exclude repeated entries.

</details>
<details>
<summary>Hint 2</summary>

Map the used prefix to its set of values, then distinguish present and absent insertions.

</details>
<details>
<summary>Solution</summary>

Take $RI(a,k)$ to mean $0\\le k\\le m$ and $a[0..k)$ has pairwise distinct entries. Define $A(a,k)=\\{a[i]:0\\le i<k\\}$; cells from $k$ onward have no abstract meaning. Insertion first searches the prefix. If the value is present, leaving the state unchanged preserves $RI$ and the abstract set. If absent and $k<m$, writing it at $a[k]$ and incrementing $k$ preserves distinctness and changes the abstraction to $A\\cup\\{x\\}$. A full representation must either reject insertion or resize under an explicitly stated contract.

</details>

<a id="section-287-exercise-7"></a>
### Exercise 7 {#section-289-exercise-7}
<a id="contracts-invariants-representations-ex-7"></a>

Show why a sortedness-only merge proof is incomplete.

Give an implementation that always returns a sorted list yet is not a correct merge, then name the missing invariant clause.

<details>
<summary>Hint 1</summary>

Consider a routine that returns the empty list for every pair of inputs.

</details>
<details>
<summary>Hint 2</summary>

Add a multiset equation accounting for output and both unconsumed suffixes.

</details>
<details>
<summary>Solution</summary>

An implementation that returns the empty list is sorted for every pair of inputs; one that returns a sorted sequence of zeros also satisfies sortedness. Correct merge additionally requires multiset preservation: the output multiset equals the disjoint multiset sum of the two input multisets. During the loop, a useful clause is $multiset(output) + multiset(unconsumed left) + multiset(unconsumed right) = multiset(original inputs)$. Together with the ordering clause, this rules out deletion, duplication, and invention.

</details>

<a id="section-313-exercise-8"></a>
### Exercise 8 {#section-315-exercise-8}
<a id="contracts-invariants-representations-ex-8"></a>

Prove a stack transfer operation correct.

A stack is a list whose head is the top. For two distinct, nonaliasing mutable stacks, $move(S,T)$ pops the top of nonempty $S$ and pushes it onto $T$. State the exact postcondition and verify it.

<details>
<summary>Hint 1</summary>

Write the old source stack as $x::s$ and the target as $t$.

</details>
<details>
<summary>Hint 2</summary>

Nonaliasing lets the push change only the target after the pop changes the source.

</details>
<details>
<summary>Solution</summary>

The precondition includes $S\\ne T$ and disjoint backing storage. If initially $S=x::s$ and $T=t$, the postcondition is $S'=s$ and $T'=x::t$. After $x=pop(S)$, the stack contract gives $x$ equal to the old head and $S=s$. The call \`push(T,x)\` then gives $T=x::t$ without changing $S$. Without the nonaliasing premise, taking $S=T$ would make the two postconditions contradictory. This local proof depends on the stack operations' own representation contracts; it does not require knowledge of whether stacks use arrays or linked nodes.

</details>

<a id="section-339-exercise-9"></a>
### Exercise 9 {#section-341-exercise-9}
<a id="contracts-invariants-representations-ex-9"></a>

Find the frame condition.

A record stores fields \`balance\`, \`owner\`, and \`auditTag\`. A deposit adds positive $d$ to \`balance\`. Why are pre- and postconditions about \`balance\` alone insufficient?

<details>
<summary>Hint 1</summary>

Identify fields that the stated balance equation leaves unconstrained.

</details>
<details>
<summary>Hint 2</summary>

Require the owner and audit tag to retain their old values.

</details>
<details>
<summary>Solution</summary>

They allow an implementation to change \`owner\` or erase \`auditTag\` while still establishing the new balance. The contract needs a frame condition: $owner'=owner$ and $auditTag'=auditTag$, along with $balance'=balance+d$, the precondition $d>0$, and any overflow or capacity hypothesis. Frame conditions identify which state is permitted to change and are essential for composing local proofs.

</details>

<a id="section-365-exercise-10"></a>
### Exercise 10 {#section-367-exercise-10}
<a id="contracts-invariants-representations-ex-10"></a>

Derive an invariant for prefix sums.

The loop writes $p[0]=0$ and $p[i+1]=p[i]+a[i]$ for $i=0,\\ldots,n-1$. State and prove an invariant strong enough to justify every output cell.

<details>
<summary>Hint 1</summary>

Quantify over every already completed prefix cell, not only the latest one.

</details>
<details>
<summary>Hint 2</summary>

The new cell adds exactly the next input value; all earlier cells stay unchanged.

</details>
<details>
<summary>Solution</summary>

At the loop head use $0\\le i\\le n$ and, for every $k$ with $0\\le k\\le i$, $p[k]=\\sum_{j=0}^{k-1} a[j]$. Initialization at $i=0$ follows from the empty sum and $p[0]=0$. The assignment for $p[i+1]$ gives the required sum through $a[i]$; older cells are unchanged. Incrementing $i$ preserves the quantified clause. At $i=n$, it establishes the specification for all $p[0..n]$; variant $n-i$ proves termination.

</details>

<a id="section-391-exercise-11"></a>
### Exercise 11 {#section-393-exercise-11}
<a id="contracts-invariants-representations-ex-11"></a>

Audit overflow in exponentiation by squaring.

The mathematical proof uses integers, but an implementation uses unsigned $w$-bit words. Give two honest contracts under which the proof transfers.

<details>
<summary>Hint 1</summary>

Exact mathematical products and wrapping word products have different meanings.

</details>
<details>
<summary>Hint 2</summary>

Either bound every intermediate product below $2^w$, or state the invariant modulo $2^w$.

</details>
<details>
<summary>Solution</summary>

One contract can require that every intermediate and final product is below $2^w$; then machine multiplication agrees with natural-number multiplication, so the original invariant transfers. A second contract can specify arithmetic modulo $2^w$; then reinterpret the invariant as a congruence $r*b^e == base^exponent \\pmod{2^w}$. The same algebra proves modular correctness, but the postcondition is no longer exact integer exponentiation. Silently mixing those contracts is an error.

</details>

<a id="section-417-exercise-12"></a>
### Exercise 12 {#section-419-exercise-12}
<a id="contracts-invariants-representations-ex-12"></a>

Verify deletion from a binary-search tree with two children.

The algorithm replaces a node's key by the least key in its right subtree, then deletes that successor node. Identify the facts needed to preserve ordering.

<details>
<summary>Hint 1</summary>

Use the smallest entry in the right subtree.

</details>
<details>
<summary>Hint 2</summary>

Track both ordering and the multiset after removing its unique occurrence.

</details>
<details>
<summary>Solution</summary>

Let $s$ be the minimum of the right subtree. Every key in the left subtree is below the original node and hence below $s$; every remaining key in the right subtree is at least $s$. If the representation forbids duplicates, each is strictly greater after the unique successor is removed. The recursive deletion preserves ordering within the right subtree and reduces its multiset by exactly one $s$. Thus the whole tree represents the original set without the deleted key. A proof must also maintain pointer acyclicity and parent-link consistency if those belong to $RI$.

</details>

<a id="section-443-exercise-13"></a>
### Exercise 13 {#section-445-exercise-13}
<a id="contracts-invariants-representations-ex-13"></a>

Separate safety from liveness in a bounded buffer.

A producer and consumer share a buffer of capacity $m$. Classify “the count is always between zero and $m$” and “every enqueued item is eventually removed.” What different proof assumptions do they need?

<details>
<summary>Hint 1</summary>

A safety violation has a finite bad prefix.

</details>
<details>
<summary>Hint 2</summary>

Progress needs a scheduling assumption as well as an invariant.

</details>
<details>
<summary>Solution</summary>

The count bound is safety: a finite bad prefix witnesses its violation. It follows from an invariant plus guarded enqueue/dequeue transitions. Eventual removal is liveness: no finite prefix alone refutes it. It requires scheduling or fairness assumptions, continuing consumer steps, and usually an argument that an enabled removal is not postponed forever. The safety invariant by itself cannot establish progress.

</details>

<a id="section-469-exercise-14"></a>
### Exercise 14 {#section-471-exercise-14}
<a id="contracts-invariants-representations-ex-14"></a>

Give a lexicographic variant.

An outer loop decreases $i$ only after an inner counter $j$ runs down to zero; while $j>0$, only $j$ decreases. Construct a well-founded termination measure.

<details>
<summary>Hint 1</summary>

The second counter may reset upward.

</details>
<details>
<summary>Hint 2</summary>

The first coordinate must strictly decrease on every reset.

</details>
<details>
<summary>Solution</summary>

Use the pair $(i,j)$ ordered lexicographically on nonnegative integers, provided resetting $j$ occurs only in a step that strictly decreases $i$. An inner step changes $(i,j)$ to $(i,j-1)$. An outer-reset step changes it to $(i-1,j_{new})$; the first coordinate decreases, so any finite value of $j_{new}$ is allowed. Lexicographic order on $N x N$ is well founded, hence an infinite execution is impossible.

</details>

<a id="section-495-exercise-15"></a>
### Exercise 15 {#section-497-exercise-15}
<a id="contracts-invariants-representations-ex-15"></a>

Prove path compression preserves a union–find partition.

A call on node $x$ recursively finds root $r$ and assigns $parent[x]=r$. Why does this not merge two abstract sets?

<details>
<summary>Hint 1</summary>

Record the root before changing a parent pointer.

</details>
<details>
<summary>Hint 2</summary>

The new pointer goes to that same root, never another component.

</details>
<details>
<summary>Solution</summary>

Before assignment, following parent pointers from $x$ already reaches $r$; the abstraction puts nodes in the same set exactly when their paths have the same root. Replacing the first edge by a direct edge to that same root changes the route but not its endpoint. Other nodes' roots are unchanged, so all equivalence classes remain identical. Termination follows from strictly decreasing depth in the pre-compression forest, assuming the representation invariant excludes cycles.

</details>

<a id="section-521-exercise-16"></a>
### Exercise 16 {#section-523-exercise-16}
<a id="contracts-invariants-representations-ex-16"></a>

Refute testing as a universal proof, then use testing correctly.

A partition routine passes all arrays of length at most six over $\\{0,1,2\\}$. What has been established, and what has not?

<details>
<summary>Hint 1</summary>

State the exact finite input domain.

</details>
<details>
<summary>Hint 2</summary>

Separate checked finite instances from a universally quantified proof.

</details>
<details>
<summary>Solution</summary>

Exhaustive enumeration establishes correctness for exactly that finite input domain under the tested implementation semantics. It may reveal counterexamples and provides strong regression evidence, but it does not prove the universally quantified contract for arbitrary lengths, values, overflow behavior, or memory failures. The finite test can validate proof machinery on small cases; a general proof must still establish initialization, preservation, exit, and termination symbolically.

</details>

[Return to the book overview](#/item/book-algorithms-computation-proof-desk).


<a id="section-550-sources"></a>
## Sources {#section-552-sources}

The existing native chapter, its mathematical examples, implementation and original practice solutions are retained and developed here for the L2 route. The prerequisite is [Introduction to Proof](/books/library-book-introduction-to-proof/). See Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), for proof and discrete computational foundations.

<a id="section-554-summary"></a>
## Summary {#section-556-summary}

A contract names inputs and outputs; an invariant connects legal concrete states to an abstract result. Initialization, preservation and exit establish partial correctness, and a well-founded variant adds termination. Representation invariants must be joined to abstraction functions. The worked maximum, circular queue and power examples show how boundary conditions enter the proof.
`;export{e as default};