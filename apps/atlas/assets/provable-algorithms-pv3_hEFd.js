var e=`---
id: course-provable-algorithms
title: "Provable Algorithms: Invariants, Recurrences, and Graph Search"
level: undergraduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Provable Algorithms: Invariants, Recurrences, and Graph Search

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-provable-algorithms/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

An algorithm is more than code that passes examples. It is a finite mathematical argument executed one step at a time. This compact course develops three tools for making that argument explicit: invariants for correctness, recurrences for cost, and graph structure for search.

## Entry diagnostic and completion standard

Before starting, try four questions.

1. Negate “for every input, the program terminates with a valid answer.”
2. Prove $1+\\cdots+n=n(n+1)/2$ by induction.
3. Solve $2^{k}\\ge1024$ for the least nonnegative integer $k$.
4. Distinguish a path from a shortest path in a graph.

The answers are: “there exists an input on which the program either does not
terminate or terminates with an invalid answer”; the usual base and inductive
step; $k=10$; and a shortest path minimizes a declared cost among all paths
with the same endpoints. Review proof foundations if the quantifier negation
or induction step is unfamiliar.

By the end, you should be able to write a contract, prove partial correctness,
prove termination separately, derive a cost bound from the executed
operations, and exhibit a counterexample when an algorithm’s hypotheses are
removed. A trace is useful evidence while developing a proof, but even many
successful traces do not establish a universal contract.

The 420-minute route includes four sustained readings from
[Mathematics for Computer Science: A Proof-First Course](#/item/book-algorithms-computation-proof-desk):

| Stage | Work here | Extended reading | Required evidence |
| --- | --- | --- | --- |
| 1. Claims and state | Sections 1–2 | [Claims and specifications](#/item/book-algorithms-computation-proof-desk?chapter=claims-counterexamples-specifications), [induction and loop reasoning](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning), and [contracts and invariants](#/item/book-algorithms-computation-proof-desk?chapter=contracts-invariants-representations) | A complete binary-search proof with initialization, preservation, termination, and postcondition |
| 2. Cost | Section 3 | [Cost, amortization, and lower bounds](#/item/book-algorithms-computation-proof-desk?chapter=cost-amortization-lower-bounds) | Two recurrence trees and one amortized bound |
| 3. Graph search | Section 4 | [Graph search and greedy certificates](#/item/book-algorithms-computation-proof-desk?chapter=graph-search-greedy-certificates) | A BFS proof and a smallest counterexample to a false weighted claim |
| 4. Representation | Sections 5–6 | [Data structures and amortization](#/item/book-algorithms-computation-proof-desk?chapter=data-structures-amortization) | One data-structure invariant tied to its operations |
| 5. Synthesis | Sections 7–9 | The selected algorithm’s relevant reference chapter | The proof portfolio |

## 1. Specify the contract

A proof begins before the program. State:

- the allowed inputs;
- the required output relation;
- whether mutation, randomness, or approximation is permitted;
- the resource being measured.

For binary search, the input is a nondecreasing array \`a[0..n-1]\` and a target $x$. The output is either an index $i$ with $a[i]=x$, or \`not-found\` when no such index exists. Sortedness is a precondition, not something the algorithm discovers.

This distinction prevents a common mistake: proving “if the program returns an index, it is correct” while never proving that an existing target will be found.

## 2. Loop invariants are induction in program form

A loop invariant is a statement true at a chosen point of every iteration. Its proof has the same shape as induction:

1. **Initialization:** it holds before the first iteration.
2. **Preservation:** one iteration carries it from the current state to the next.
3. **Use at termination:** invariant plus exit condition implies the contract.

### Worked derivation: half-open binary search

This version computes the first index whose value is at least $x$. Maintain
\`[lo, hi)\` and the invariant

$$
0\\le lo\\le hi\\le n,
$$

$$
i<lo\\Longrightarrow a[i]<x,
\\qquad
i\\ge hi\\Longrightarrow a[i]\\ge x.
$$

Initially $lo=0$ and $hi=n$, so the two implication claims concern empty
index ranges and are true. At each step choose
$mid=lo+\\lfloor(hi-lo)/2\\rfloor$.

\`\`\`text
lo <- 0
hi <- n
while lo < hi:
    mid <- lo + floor((hi - lo)/2)
    if a[mid] < x:
        lo <- mid + 1
    else:
        hi <- mid
if lo < n and a[lo] = x: return lo
return not-found
\`\`\`

If \`a[mid] < x\`, sortedness gives $a[i]<x$ for every $i\\le mid$, so assigning
\`lo = mid + 1\` preserves the left implication. Otherwise sortedness gives
$a[i]\\ge x$ for every $i\\ge mid$, so assigning \`hi = mid\` preserves the right
implication.

When $lo=hi$, the invariant says every earlier element is below $x$ and every
element from $lo$ onward is at least $x$. Thus $lo$ is the insertion position.
The final bounds and equality test return the first occurrence when $x$ is
present and \`not-found\` otherwise.

Termination needs its own argument. While $lo<hi$, the chosen midpoint
satisfies $lo\\le mid<hi$. In either branch the nonnegative integer
$hi-lo$ strictly decreases. Correctness without termination is only partial
correctness.

## 3. Derive cost instead of guessing it

Binary search changes an interval of length $m$ to one of length at most
$\\lfloor m/2\\rfloor$. After $k$ iterations its length is at most $n/2^k$.
It reaches at most one when $2^k\\ge n$, hence
$k\\ge\\log_2 n$. The running time is $\\Theta(\\log n)$ under constant-time
array access.

Asymptotic notation hides constants and the machine model. Searching a linked list is not logarithmic merely because the same comparison plan is used: reaching its middle may cost linear time.

### Recurrences: merge sort

Merge sort divides $n$ items into two halves, recursively sorts them, and merges in $cn$ work. For powers of two,

$T(n)=2T(n/2)+cn$, with $T(1)=d$.

At recursion level $j$, there are $2^j$ problems of size $n/2^j$; their merge work totals $2^j c(n/2^j)=cn$. There are $\\log_2 n$ nontrivial levels, so

$$T(n)=cn\\log_2 n+dn=\\Theta(n\\log n).$$

The derivation exposes why balanced division matters. If the recurrence were
$T(n)=T(n-1)+cn$, summing costs gives $\\Theta(n^2)$.

### Do not invoke a recurrence without its model

The recurrence must count the actual subproblems and nonrecursive work.
Quicksort with a pivot that splits sizes $k$ and $n-k-1$ obeys

$$T(n)=T(k)+T(n-k-1)+cn.$$

Balanced splits produce $n\\log n$ scale; repeatedly choosing $k=0$ produces a
quadratic sum. An expected-time claim requires a probability model for pivots
or inputs. The phrase “divide and conquer” alone proves no bound.

### Amortized cost: a dynamic array

Worst-case time for one operation can be large while every long sequence is
cheap on average. Suppose an array begins with capacity 1 and doubles whenever
an insertion finds it full. An ordinary insertion writes one item. A resize
from capacity $2^j$ also copies $2^j$ existing items.

During the first $n$ insertions, the copied blocks have sizes
$1,2,4,\\ldots,2^k$, with the last size smaller than $n$. Therefore

$$
1+2+\\cdots+2^k=2^{k+1}-1<2n.
$$

Together with the $n$ writes of newly inserted items, fewer than $3n$
item writes occur. Thus the average, or amortized, number of writes per
insertion is below 3, even though an individual resizing insertion costs
$\\Theta(n)$. This is a bound for every operation sequence; it is not a
probabilistic average over favorable inputs.

## 4. Graph search and the frontier invariant

Let a graph have vertices $V$ and edges $E$. Breadth-first search (BFS) from source $s$ maintains a queue and assigns integer distances.

\`\`\`text
distance[s] <- 0; enqueue(s)
while queue is not empty:
    u <- dequeue()
    for each neighbor v of u:
        if v is undiscovered:
            distance[v] <- distance[u] + 1
            parent[v] <- u
            enqueue(v)
\`\`\`

The key invariant is: when a vertex leaves the queue, its recorded distance is the length of a shortest path from $s$. Vertices enter in nondecreasing distance order. If a shorter path to $v$ existed when $v$ was removed, its penultimate vertex would have had smaller distance and would already have discovered $v$, a contradiction.

With source-local discovery in unsorted adjacency lists, BFS processes reached vertices $R$ and their outgoing adjacency entries $E_R$, so its traversal cost is $\\Theta(|R|+|E_R|)$.
Each reached vertex is enqueued once; an undirected reached edge is inspected at most twice. Assume constant amortized cost for queue operations, discovery tests, and adjacency-entry access.
Initializing records for all vertices adds $\\Theta(|V|)$; $O(|V|+|E|)$ remains a full-graph upper bound.

BFS does **not** solve shortest paths with arbitrary edge weights. A path with more edges may have lower total weight. Nonnegative weighted edges call for Dijkstra's algorithm; negative edges require another method and explicit cycle handling.

### Why Dijkstra needs nonnegative weights

For a finite graph with nonnegative edge weights, initialize $d(s)=0$ and all other tentative distances to infinity; repeatedly select an unsettled vertex $u$ of minimum $d(u)$ and relax its outgoing edges. Assume previously settled labels are exact.
For reachable $u$, take a shortest simple path from $s$ to $u$ and let $y$ be its first unsettled vertex. Unless $y=s$, its predecessor $x$ is settled and the edge $x\\to y$ has already been relaxed.
That relaxation gives $d(y)\\le\\delta(s,y)$, where $\\delta(s,v)$ is the true shortest-path distance; every finite tentative label is a discovered path cost, so $d(y)\\ge\\delta(s,y)$. If $y=s$, both values are zero.
Selection and the nonnegative suffix give $d(u)\\le d(y)=\\delta(s,y)\\le\\delta(s,u)$, while the discovered-path upper-bound property gives $d(u)\\ge\\delta(s,u)$, proving equality.
If the minimum label is infinite, any path to a reachable unsettled vertex would have a first unsettled vertex with a finite label by the same argument; hence all remaining vertices are unreachable.

A negative edge destroys this argument. With edges
$s\\to u$ of weight $2$, $s\\to v$ of weight $5$, and $v\\to u$ of weight
$-10$, the direct tentative value $2$ for $u$ is selected before the route
$s\\to v\\to u$ of cost $-5$ is discovered. The counterexample identifies the
exact proof step that used nonnegativity.

## 5. Data-structure invariants

The algorithm and its representation share a proof. A min-heap maintains:

- a complete binary-tree shape;
- $key[parent]\\le key[child]$ on every edge.

Removing the root temporarily breaks order: move the last leaf to the root,
then repeatedly swap it with its smaller child. Only edges on that downward
path can be invalid, so local repairs restore the global invariant. The tree
height is $\\lfloor\\log_2 n\\rfloor$, which proves the time bound.

## 6. A complete proof: insertion sort

At the start of iteration $j$, insertion sort maintains:

> The prefix \`a[0..j)\` is sorted and is a permutation of the original first
> $j$ elements.

The length-one prefix establishes initialization. To preserve the invariant,
store \`a[j]\`, shift larger prefix elements one place right, and insert the
stored value in the resulting gap. Shifting preserves the multiset; the stop
condition places the stored value between elements no larger and no smaller
than it. At $j=n$, the prefix is the whole array, so it is sorted and is a
permutation of the input. Both clauses matter: “sorted” alone would permit
returning an empty or constant array.

For cost, iteration $j$ performs at most $j$ comparisons or shifts, so

$$\\sum_{j=1}^{n-1}j=\\frac{n(n-1)}{2}=\\Theta(n^2).$$

On an already sorted array, the inner loop stops immediately and the running
time is $\\Theta(n)$. State whether a bound is worst-case, best-case, expected,
or output-sensitive.

## 7. Assumptions and failure modes

- An invariant that is true but too weak may not imply the postcondition.
- Off-by-one errors often mix closed $[lo,hi]$ and half-open \`[lo,hi)\` intervals.
- A decreasing quantity proves termination only if it is bounded below.
- Worst-case, expected, and amortized bounds answer different questions.
- Arithmetic overflow can invalidate a proof written over mathematical integers; $lo+(hi-lo)/2$ avoids one classic overflow route.
- Randomized algorithms need a probability space and a claim such as expected cost or failure probability.

## 8. Cumulative exercises

1. Trace half-open binary search on $[2,2,5,9]$ with $x=2$. What index is returned?
2. Give an invariant for computing $x^n$ by multiplying an accumulator $n$ times.
3. Solve $T(n)=3T(n/3)+n$ for powers of three using a level-by-level argument.
4. Why does marking a BFS vertex only when it leaves the queue cause needless work?
5. Construct a three-vertex weighted graph where BFS selects a one-edge path
   even though a two-edge path has lower total weight.
6. Give a counterexample showing why Dijkstra’s settled-distance proof fails
   with a negative edge.
7. Strengthen the claim “insertion sort’s prefix is sorted” so that it implies
   the returned array contains exactly the input elements.
8. For $T(n)=4T(n/2)+n$ on powers of two, derive the asymptotic cost by summing
   work over recursion levels.
9. A dynamic array triples rather than doubles its capacity. Bound the total
   number of copied items during its first $n$ insertions.

## Answers

1. It returns $0$: the algorithm finds the first index with value at least $2$.
2. With $k$ multiplications completed and accumulator $p$, use
   $p\\,x^{n-k}=x^n$; initialization has $p=1,k=0$, and each step preserves the
   product.
3. Each level costs $n$; there are $\\log_3 n$ levels, so
   $T(n)=\\Theta(n\\log n)$.
4. The same vertex can be enqueued once from each already-reached neighbor. Marking on enqueue ensures at most one queue entry.
5. Use edges \`s--v\` of weight $10$, \`s--u\` of weight $1$, and \`u--v\` of weight $1$. BFS prefers the direct one-edge route, but its cost is $10$ rather than $2$.
6. The graph in the Dijkstra section works: $u$ can be settled with value $2$
   before the path of cost $-5$ through $v$ is examined.
7. Add that the prefix is a permutation of the original prefix. Sortedness
   controls order; the permutation clause prevents loss, duplication, or
   invention of values.
8. Level $j$ has $4^j$ subproblems of size $n/2^j$, so its nonrecursive work
   is $4^j(n/2^j)=n2^j$. Summing through
   $\\log_2 n-1$ gives $\\Theta(n^2)$, matching the $\\Theta(n^2)$ leaf count.
9. The copy sizes are $1,3,9,\\ldots,3^k$, with $3^k<n$. Their sum is
   $(3^{k+1}-1)/2<3n/2$. Adding the $n$ ordinary writes still gives linear
   total work and constant amortized work per insertion.

### Feedback map

If Questions 1–2 fail, write the invariant at the exact loop boundary and
check initialization before tracing. If Questions 3, 8, or 9 fail, draw one
row per recursion level or resize and sum the work actually performed. If
Questions 4–6 fail, label discovery, queue removal, edge weights, and settled
vertices separately. If Question 7 fails, remember that correctness must
control both order and preservation of the input multiset.

## 9. Capstone: a proof portfolio

Choose one algorithm that is absent from the worked examples: topological
sorting, union–find, exponentiation by squaring, stable partition, depth-first
search, or another algorithm with a precise contract. Submit:

1. preconditions and a mathematical postcondition;
2. pseudocode with all boundary conventions stated;
3. an invariant or recursive induction hypothesis;
4. initialization, preservation, and postcondition arguments;
5. a termination variant or well-founded recursion argument;
6. a cost derivation under a named representation and machine model;
7. one smallest counterexample after removing a necessary hypothesis;
8. three tests, including an empty or degenerate case, connected explicitly
   to proof obligations.

A strong portfolio lets another reader locate each claim in the code. An
excellent portfolio also distinguishes mathematical integers from bounded
machine arithmetic and explains whether overflow, mutation, nondeterminism, or
randomness changes the contract.

Score the portfolio out of 24: 4 points for the contract, 6 for correctness, 3
for termination, 4 for the cost derivation, 3 for the counterexample, 2 for
tests tied to proof obligations, and 2 for machine-model boundaries. A passing
trace cannot replace any proof component. Before submission, ask another
reader to identify the exact sentence establishing initialization,
preservation, termination, and the final contract.

## Where to go next

Connect this course to [Proof Foundations](#/item/course-proof-foundations) for
formal implication, the
[Algorithms, Computation, and Proof](#/item/book-algorithms-computation-proof-desk)
reference for sustained algorithm families, and
[Mathematics for Computer Science](#/item/course-mathematics-computer-science-standard)
for automata, information, and randomized reasoning.


## Required work, changed work and later returns

The five stages in the entry table remain required, including the full proof
portfolio. The assignments below bind them to particular questions and their
public worked feedback. A numbered question means the question under this
course's “Cumulative exercises”, or under the named chapter's solved-exercise
heading. Complete each of this course's Questions 1–9 once in its assigned
group. Do not count an exposed answer or a repeated proof component as a
fresh independent assessment. Attempt A, compare and correct it, attempt B,
then return to R after an intervening stage; return to Stage 5 after another
reading.

| Stage | Primary assignment | Changed assignment | Later return |
| --- | --- | --- | --- |
| 1. Claims and state | **ALG-1-A:** Question 1's duplicate-target trace and the complete Section 2 proof, with both exclusion clauses | **ALG-1-B:** [Contracts and invariants](#/item/book-algorithms-computation-proof-desk?chapter=contracts-invariants-representations), Question 5, repair the nonprogressing midpoint update | **ALG-1-R:** Question 2's repeated-multiplication invariant; compare its linear variant with binary search's decreasing interval |
| 2. Cost | **ALG-2-A:** Question 3, draw every recurrence level and include the leaf work | **ALG-2-B:** Question 8, derive the four-way tree's internal and leaf costs | **ALG-2-R:** Question 9, derive the tripling-array copy sum and separate amortized from worst-case cost |
| 3. Search | **ALG-3-A:** Question 4 and Section 4's complete BFS distance proof, including discovery and queue order | **ALG-3-B:** Questions 5 and 6, the positive-weight BFS failure and negative-edge Dijkstra failure | **ALG-3-R:** [Graph search](#/item/book-algorithms-computation-proof-desk?chapter=graph-search-greedy-certificates), Question 4, prove the closed-set certificate of unreachability |
| 4. Representation | **ALG-4-A:** Question 7 and Section 5's heap-removal invariant; explain separately multiset preservation, shape and order | **ALG-4-B:** [Contracts and invariants](#/item/book-algorithms-computation-proof-desk?chapter=contracts-invariants-representations), Question 6, the unsorted-array set representation and insertion obligations | **ALG-4-R:** [Data structures](#/item/book-algorithms-computation-proof-desk?chapter=data-structures-amortization), Question 14, prove path compression preserves the represented partition |
| 5. Synthesis | **ALG-FP-A:** the complete exponentiation-by-squaring portfolio below | **ALG-FP-B:** change to bounded modular arithmetic and distinguish the output contract | **ALG-FP-R:** change to string concatenation, reprove preservation and derive the changed cost |

The course's Answers and Feedback map supply Questions 1–9. The named book
questions supply their own complete solutions. For ALG-1-A, compare with
[Induction and loop reasoning, Section 16](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning)
as well as this course's worked proof. For ALG-2-A, when $T(1)=d$ the
three-way tree gives $n\\log_3 n+dn$ on powers of three. For ALG-2-B, when
$T(1)=d$ the internal sum is $n(1+2+\\cdots+n/2)=n(n-1)$ and the leaf cost
is $dn^2$, giving $(d+1)n^2-n$. These are two distinct recurrence trees,
not two names for the same derivation. ALG-2-R supplies the additional
amortized argument.

For ALG-3-B, the three-vertex positive-weight example is smallest by vertex
count among simple undirected graphs with positive weights: with fewer than
three vertices there is no distinct two-edge simple alternative to a direct
edge. State this graph class; parallel edges or different conventions change
the minimality question. The negative-edge example is a different failure
of the settled-distance argument, not a failure of BFS's edge-count theorem.
For search cost, use the precise [graph-search Question 13](#/item/book-algorithms-computation-proof-desk?chapter=graph-search-greedy-certificates):
a source-local unsorted-list traversal has tight cost
$\\Theta(|R|+|E_R|)$ for reached vertices and their outgoing entries under its
stated constant-cost operations. $O(|V|+|E|)$ is always an upper bound;
full initialization, scanning unreachable components or sorting neighbors
must be counted separately.

## ALG-FP-A — complete public proof portfolio

This is the concrete selected algorithm for Section 9. Exponentiation by
squaring is absent from this course's worked algorithms; the companion's
[worked audit](#/item/book-algorithms-computation-proof-desk?chapter=contracts-invariants-representations)
and [invariant derivation](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning)
provide its starting idea. The following portfolio joins the eight required
obligations, a changed task and a later transfer with complete feedback.
Write your version before comparing; the public reference does not provide
individual marking.

**1. Contract.** Input is an integer x and nonnegative integer n, represented
by JavaScript BigInt values. Return the exact integer $x^n$, with $x^0=1$
including $0^0=1$ as the empty-product convention for this algorithm.
Do not mutate input or external state. Arithmetic uses mathematical integers;
the resource count below counts multiplications, not their bit cost.
Validation rejects values outside the declared domain.

#### ALG-FP-A — Complete public model

**2. Algorithm.** The update order is explicit. Skip an unused final square.

\`\`\`javascript
function fastPower(base, exponent) {
  if (typeof base !== "bigint" || typeof exponent !== "bigint") {
    throw new TypeError("BigInt base and exponent required");
  }
  if (exponent < 0n) throw new RangeError("nonnegative exponent required");
  let result = 1n;
  let power = base;
  let remaining = exponent;
  while (remaining > 0n) {
    if (remaining % 2n === 1n) result *= power;
    remaining /= 2n;
    if (remaining > 0n) power *= power;
  }
  return result;
}

function fastPowerMod(base, exponent, modulus) {
  if (typeof base !== "bigint" || typeof exponent !== "bigint" ||
      typeof modulus !== "bigint") {
    throw new TypeError("BigInt arguments required");
  }
  if (exponent < 0n || modulus <= 0n) {
    throw new RangeError("nonnegative exponent and positive modulus required");
  }
  let result = 1n % modulus;
  let power = ((base % modulus) + modulus) % modulus;
  let remaining = exponent;
  while (remaining > 0n) {
    if (remaining % 2n === 1n) result = (result * power) % modulus;
    remaining /= 2n;
    if (remaining > 0n) power = (power * power) % modulus;
  }
  return result;
}
\`\`\`

#### ALG-FP-A — Correctness and resource model

**3–4. Invariant, initialization, preservation and exit.**
At the loop head use $e\\ge0$ and $r b^e=x^n$, where r,b,e are result,
power,remaining and x,n denote the unchanged original inputs.
Initialization gives $1x^n=x^n$.

Write the old exponent as $2k+d$ with $d\\in\\{0,1\\}$.
The conditional multiplication makes $r'=rb^d$. If $k>0$, the other
updates make $b'=b^2,e'=k$, so
$r'(b')^{e'}=(rb^d)(b^2)^k=rb^{2k+d}=x^n$.
If $k=0$, a positive old exponent must be 1; the new exponent is zero
and $r'=rb=x^n$. The skipped square cannot affect $r'(b')^0$.
Thus preservation includes the last iteration as well as the two parity
cases. At exit $e=0$, the invariant gives $r=x^n$.

**5. Termination.** The guard has $e>0$. The new exponent is
$\\lfloor e/2\\rfloor$, a strictly smaller nonnegative integer.
Every body operation terminates in the ideal finite-integer arithmetic
model, so this variant proves total correctness. Actual memory exhaustion
is outside that ideal arithmetic contract.

**6. Resource derivation.** If $n=0$, there are no iterations or
multiplications. If $n>0$, let $L=\\lfloor\\log_2 n\\rfloor+1$.
There are L iterations, one for each binary digit; the exponent divisions
remove those digits. There are L-1 squares, because the final one is
skipped, and popcount(n) result multiplications. The exact multiplication
count is therefore $L-1+\\operatorname{popcount}(n)\\le2L-1$.
This gives $\\Theta(\\log(n+1)+1)$ loop/control work including input n=0,
and $O(\\log n)$ multiplications for n>0.
It is not a logarithmic bit-time theorem. For $|x|\\ge2$, the exact output
alone has bit length $\\lfloor n\\log_2|x|\\rfloor+1$.
BigInt multiplication and storage grow with operand length.

**7. Counterexample and its size convention.** Remove exponent validation
and extend the claimed output to negative powers over the rationals.
For x=2,n=-1, the unvalidated loop executes zero times and returns 1,
whereas $2^{-1}=1/2$. Under the explicit size order (absolute exponent,
positive integer base) among negative exponents, -1 has smallest absolute
value and base 1 still works, so base 2 is the first failure.
This shows why the nonnegative domain is necessary for this algorithm;
the validated reference rejects the input instead.

**8. Tests connected to obligations.** Exact oracle expectations are:
fastPower(0n,0n) is 1n (empty-product initialization);
fastPower(-2n,3n) is -8n (odd branch and sign);
fastPower(3n,13n) is 1594323n (both branch types).
A negative exponent throws RangeError and a Number argument throws TypeError
before computation. These are test expectations, not a report of executed
learner code. For the last valid example, the complete loop-head trace is

| r | b | e |
| --- | --- | --- |
| 1 | 3 | 13 |
| 3 | 9 | 6 |
| 3 | 81 | 3 |
| 243 | 6561 | 1 |
| 1594323 | 6561 | 0 |

Every row satisfies $rb^e=3^{13}$. Four iterations perform three result
multiplications and three squares. A mutant omitting the odd-case result
multiplication returns 1 even on x=2,n=1. A mutant replacing the exponent
division by an unchanged exponent does not establish the decreasing-variant
obligation. A finite passing trace cannot replace the quantified algebra.

### ALG-FP-B — changed arithmetic contract and complete key

Compute $3^6$ using unsigned eight-bit modular arithmetic. State whether
the exact-integer theorem survives, trace every loop head, and explain the
honest machine contract before comparing the key.

#### ALG-FP-B — Complete modular-arithmetic model

**Key.** Exact $3^6=729$, while the residue modulo 256 is 217.
Use fastPowerMod(3n,6n,256n). Its loop-head states are
$(1,3,6)\\to(1,9,3)\\to(9,81,1)\\to(217,81,0)$.
The invariant becomes $rb^e\\equiv3^6\\pmod{256}$, with r and b represented
by residues. Initialization, preservation and the exponent variant work in
this ring just as above; the postcondition is a residue, not the exact integer
729. Explicit reduction after multiplication implements the model.
For a true eight-bit implementation, multiplication must supply the correct
low eight bits; JavaScript Number bitwise coercion is not a proof of arbitrary
word arithmetic. The reference uses exact BigInt products followed by modulo.

If exact integer output remains the contract, either use sufficient
precision or require that every intermediate and result multiplication is
representable. The 729 multiplication violates an eight-bit exact contract.
A final comparison returning 217 is therefore correct only for the modular
specification. For modulus 1 the correct result is always 0, including
exponent zero; the reference's initialization handles that boundary.
For a negative base it normalizes to a nonnegative residue before the loop.

### ALG-FP-R — later return with a different multiplication cost

After a different reading, replace multiplication by string concatenation.
For nonempty string x and nonnegative integer n, return n copies of x.
Use empty string for r, x for b and n for e, with the same odd-bit,
halving and skipped-final-square control. Give the trace for x="ab",n=5,
the preservation proof and a cost bound for ordinary copying strings.
Do not run the numeric BigInt implementation on strings: the operation and
its representation have changed.

#### ALG-FP-R — Complete string-cost model

**Key.** The loop-head states are
$("","ab",5)$,
$("ab","abab",2)$,
$("ab","abababab",1)$,
$("ababababab","abababab",0)$.
The invariant is that concatenating r with e copies of b yields n copies
of x. Associativity and the identity empty string justify both the odd
update and doubling b; no commutation of arbitrary strings is assumed.
The exponent variant proves termination, and at exit r is the required
string.

There are still logarithmically many concatenation operations, but they do
not have constant cost. Squares copy geometrically growing blocks of
length $2^j|x|$. Result updates copy a growing prefix; before the update at
bit position j, its length is at most $(2^j-1)|x|$, so its new length is
less than $2^{j+1}|x|$. Summing these geometric bounds gives $O(n|x|)$
copied characters. Writing the explicit result costs $\\Omega(n|x|)$ for
n>=1 and nonempty x, so time is $\\Theta(n|x|)$ under the stated copying
model, with $O(n|x|)$ live string storage. For n=0 the result is empty
and control work is constant. Ropes, sharing or a compressed result change
the representation and need a different cost statement.

### ALG-FP — Self-review and repair

For self-review, use the original 24-point rubric as a checklist, not an
awarded grade. A contract error calls for repairing domain, effects or
arithmetic before a proof; a correctness error calls for the exact
$2k+d$ equality; a termination error calls for a well-founded decrease;
a cost error calls for the named primitive and operand sizes; a
counterexample error calls for the removed hypothesis and size convention;
a test error calls for its proof obligation. Revise the missed argument and
compare the changed task again. This complete public reference and a
self-reported later return do not supply fresh assessment, observed
workload or qualified individual feedback.
`;export{e as default};