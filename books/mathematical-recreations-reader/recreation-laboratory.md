
# A Recreation Laboratory: Search, Conjecture, Prove

Computation expands the experiment table, but it does not change the burden of
proof. A responsible recreation laboratory makes states, transitions, coverage,
and certificates inspectable. This chapter supplies dependency-free patterns and
four extended projects.

<a id="section-8-breadth-first-search"></a>
<a id="section-6-breadth-first-search"></a>

## Breadth-first search

For a finite puzzle graph with unweighted moves, breadth-first search (BFS)
explores all states at distance 0, then 1, then 2, and so on. The first discovered
path to a target is shortest. Correctness depends on three properties:

1. the state key uniquely represents all rule-relevant information;
2. the neighbor function returns every and only legal next state;
3. visited states are marked so cycles do not cause repeated work.

```js
function shortestPath(start, isGoal, neighbors, key = JSON.stringify) {
  const queue = [start];
  let head = 0;
  const startKey = key(start);
  const parent = new Map([[startKey, null]]);
  const stateByKey = new Map([[startKey, start]]);

  while (head < queue.length) {
    const state = queue[head];
    head += 1;
    if (isGoal(state)) {
      const path = [];
      for (let k = key(state); ; k = parent.get(k)) {
        if (!parent.has(k) || !stateByKey.has(k)) {
          throw new Error("broken BFS parent chain");
        }
        path.push(stateByKey.get(k));
        // SameValueZero equality, as used by Map (including NaN and ±0).
        if (k === startKey || Object.is(k, startKey)) break;
      }
      return path.reverse();
    }
    for (const next of neighbors(state)) {
      const nextKey = key(next);
      if (parent.has(nextKey)) continue;
      parent.set(nextKey, key(state));
      stateByKey.set(nextKey, next);
      queue.push(next);
    }
  }
  return null;
}
```

The key function must be stable as well as unique for rule-relevant states. Reconstruction stops at the start key, not a reserved sentinel, so `null`, `undefined`, and `NaN` remain valid keys. A missing parent entry is an internal consistency error. For huge or infinite spaces, termination and memory require a separate analysis.

<a id="section-50-worked-example-1-layers-can-be-checked-by-hand"></a>
<a id="section-48-worked-example-1-layers-can-be-checked-by-hand"></a>

### Worked example 1: layers can be checked by hand

Consider an undirected graph with edges $SA,SB,AC,CD,DG,BG$. Starting at
$S$, breadth-first layers are $\{S\}$, then $\{A,B\}$, then $\{C,G\}$,
then $\{D\}$. The goal $G$ has distance two via $S,B,G$. A depth-first
procedure choosing the $A$ branch first could instead discover
$S,A,C,D,G$, of length four. Both are legal routes, but first discovery proves
shortestness only when the ordering rule guarantees that earlier layers have
already been processed. A parent map stores one witness route; it need not
store every route to establish the distance.

<a id="section-61-exhaustive-enumeration"></a>
<a id="section-59-exhaustive-enumeration"></a>

## Exhaustive enumeration

The following generator lists bit strings without numerical overflow and is a
useful foundation for card-flip or coding experiments.

```js
function* bitStrings(length, prefix = "") {
  if (prefix.length === length) {
    yield prefix;
    return;
  }
  yield* bitStrings(length, `${prefix}0`);
  yield* bitStrings(length, `${prefix}1`);
}

console.log([...bitStrings(3)]);
```

Completeness follows by induction: every length-$n$ string starts with exactly 0
or 1, and its suffix appears in the corresponding recursive call. No duplication
occurs because the two prefix classes are disjoint.

The generator's intended input is a nonnegative integer length, with its default
empty prefix. A negative or noninteger length falls outside that mathematical
specification: the equality stopping condition need never occur. A reusable
interactive program should enforce its input domain at the boundary. The proof
above concerns the stated domain and does not turn arbitrary inputs into valid
finite enumeration tasks. Even on valid inputs the output count is $2^n$,
so overflow-free string generation does not make large enumerations small.

<a id="section-91-worked-example-2-a-tiny-parity-search-with-an-exact-cer"></a>
<a id="section-89-worked-example-2-a-tiny-parity-search-with-an-exact-cer"></a>

### Worked example 2: a tiny parity search with an exact certificate

Use three lamps in a line. Pressing a lamp toggles it and its immediate
neighbours within the line. The three press masks are $110,111,011$.
Starting at $101$, press the first and third lamps. Adding their masks modulo
2 gives $110+011=101$, so those presses take the start to $000$.
No single press has mask $101$, and zero presses do not solve a nonzero start.
The two-press solution is therefore shortest, independently of any program.

Pressing the same lamp twice cancels, and pressing different lamps commutes,
because coordinatewise addition modulo 2 has those properties. Any sequence
reduces to the subset of lamps pressed an odd number of times. There are only
eight subsets here, so an enumeration of those eight press patterns really is
complete, despite there being infinitely many longer move sequences. A finite
coverage proof can compress an infinite collection of redundant histories.

<a id="section-107-exact-arithmetic-where-possible"></a>
<a id="section-105-exact-arithmetic-where-possible"></a>

## Exact arithmetic where possible

Floating-point estimates are appropriate for simulations, not for exact parity,
counts, or rational identities. Use integers for counts. Compare fractions by
cross multiplication when products stay within the safe integer range. Report a
Monte Carlo estimate with its trial count and seedable generator if
reproducibility matters.

<a id="section-115-project-a-lights-out-over-parity"></a>
<a id="section-113-project-a-lights-out-over-parity"></a>

## Project A: Lights Out over parity

Use a $3 \times 3$ board of bits. Pressing a cell toggles it and its edge-neighbors.
Represent a state by nine bits in row-major order. Enumerate all $2^9$ press
patterns, apply each to a chosen start, and collect solutions reaching all zero.

Deliverables:

- a coordinate and text statement of the toggle rule;
- code tests for corner, edge, and centre presses;
- the shortest solution for three chosen starts;
- an explanation of why pressing a cell twice cancels and press order is
  irrelevant;
- a statement distinguishing “no solution found by this complete enumeration”
  from an incomplete search.

<a id="section-131-project-b-polyomino-tiling-verifier"></a>
<a id="section-129-project-b-polyomino-tiling-verifier"></a>

## Project B: Polyomino tiling verifier

Choose a small board and a set of polyomino placements. Write a verifier that
checks every placement is in bounds, no two overlap, and every required cell is
covered exactly once. Then either write a backtracking solver or hand-author a
certificate.

Use coordinate arrays such as $[[1,1],[1,2],[2,1]]$; do not make correctness
depend on coloured canvas pixels. To prune safely, choose the first uncovered cell
and try every legal placement containing it. A prune is valid only if it cannot
discard a completion.

<a id="section-143-project-c-game-table-to-theorem"></a>
<a id="section-141-project-c-game-table-to-theorem"></a>

## Project C: Game table to theorem

For a subtraction game of your choice:

1. compute winning/losing states or Grundy numbers through at least 200;
2. detect a candidate period without assuming it;
3. state an induction window sufficient to force the next block;
4. prove the period from the recurrence;
5. translate losing positions into an explicit player strategy.

Compare normal and misère play. Changing the terminal classification should
force visible test failures until expected values are revised.

<a id="section-156-project-d-probability-protocol-audit"></a>
<a id="section-154-project-d-probability-protocol-audit"></a>

## Project D: Probability protocol audit

Design two procedures that share the same informal description but yield
different conditional probabilities—for example, two ways to report “at least
one die is six.” Define random variables and events, derive both exact answers,
then simulate. Include a table of absolute counts so a reader can reconstruct the
estimated conditional ratio.

<a id="section-164-worked-example-a-shorter-certificate-than-a-search-tabl"></a>
<a id="section-162-worked-example-a-shorter-certificate-than-a-search-tabl"></a>

## Worked example: a shorter certificate than a search table

Imagine a puzzle whose move changes an integer score by either plus two
or minus two. Starting from score zero, every reachable score is even:
the starting value is even and each permitted change preserves evenness.
A target score seven is therefore impossible. This induction is a complete
certificate for that target, although it does not list every reachable
state or even decide which even scores are reachable.

A search stopping at depth ten could report that it did not encounter
seven, but that finite report alone would leave deeper paths unresolved.
The invariant removes that uncertainty for all path lengths. Conversely,
reaching an even target would still require a legal path or another
existence argument. The laboratory method is strongest when it asks what
kind of statement each artifact supports: a displayed path proves reachability,
completed breadth-first layers prove a shortest length within a fully specified
graph, and a preserved invariant can exclude an entire class of targets.
These certificates are useful for different reasons and should retain their
exact claims when presented together.

<a id="section-184-exercises"></a>
<a id="section-182-exercises"></a>

## Exercises


### Exercise 1 {#recreation-laboratory-ex-1}

**Explorer.** How many length-5 bit strings should the generator yield? Why?

<details>
<summary>Hint 1</summary>

Each position has two choices.

</details>

<details>
<summary>Hint 2</summary>

Multiply the
   choices, or use the generator's two disjoint recursive branches.

</details>

<details>
<summary>Solution</summary>

$2^5=32$: each of five independent positions has two choices. The recursive
   generator makes the same two-way branch at each level.

</details>

### Exercise 2 {#recreation-laboratory-ex-2}

**Foundation.** Why must BFS use a queue rather than a last-in-first-out stack
   to guarantee a shortest unweighted path?

<details>
<summary>Hint 1</summary>

Compare the order of distances waiting for processing.

</details>

<details>
<summary>Hint 2</summary>

A stack can enter a long branch while a short route waits elsewhere.

</details>

<details>
<summary>Solution</summary>

A queue processes all vertices at distance $d$ before any newly discovered
   vertex at distance $d+1$. A stack may pursue a long branch before a short goal
   edge elsewhere, so first discovery need not be shortest.

</details>

### Exercise 3 {#recreation-laboratory-ex-3}

**Secondary.** A puzzle has at most 1000 states and every generated neighbor
   is legal. Name two further facts needed before “search returned null” proves
   the target unreachable.

<details>
<summary>Hint 1</summary>

Legality is soundness, not completeness.

</details>

<details>
<summary>Hint 2</summary>

A state
   key can also accidentally merge positions with different legal futures.

</details>

<details>
<summary>Solution</summary>

The state representation must distinguish all rule-relevant states, and the
   neighbor generator must include **every** legal move, not only return legal
   ones. The start and target predicates must also encode the intended problem.

</details>

### Exercise 4 {#recreation-laboratory-ex-4}

**Secondary.** Explain why random testing cannot prove two programs agree on
   all integer inputs.

<details>
<summary>Hint 1</summary>

A finite sample includes only finitely many integers.

</details>

<details>
<summary>Hint 2</summary>

Imagine programs differing only at one input outside that sample.

</details>

<details>
<summary>Solution</summary>

Any finite random sample leaves infinitely many untested integers. Programs
   could agree on the sample and differ at one untested value. Testing can find a
   counterexample, while universal agreement needs proof or exhaustive coverage
   of a finite domain.

</details>

### Exercise 5 {#recreation-laboratory-ex-5}

**Undergraduate.** Prove that in a finite graph BFS assigns each discovered
   vertex its shortest-path distance from the start.

<details>
<summary>Hint 1</summary>

Induct on distance layers.

</details>

<details>
<summary>Hint 2</summary>

A shorter undiscovered
   route would have a predecessor processed in an earlier layer.

</details>

<details>
<summary>Solution</summary>

Induct on queue layers. The start has distance 0. When a distance-$d$ vertex
   is processed, every newly discovered neighbor receives a path of length
   $d+1$. If it had a shorter path, its predecessor on that path would lie in an
   earlier layer and would already have discovered it. Thus its assigned distance
   is shortest. Finiteness ensures every reachable layer is eventually processed.

</details>

<a id="section-212-worked-example-3-turn-a-small-table-into-induction"></a>
<a id="section-210-worked-example-3-turn-a-small-table-into-induction"></a>
### Worked example 3: turn a small table into induction

For a normal-play subtraction game allowing removal of 1,3 or 4 counters,
the losing pile sizes are precisely those congruent to 0 or 2 modulo 7.
Here is a proof that reaches beyond any computed table. For either losing
residue, subtracting an allowed amount never leads to residue 0 or 2. For
every other residue, there is a move to one of them:
$1\to0$ by removing 1, $3\to2$ by 1, $4\to0$ by 4,
$5\to2$ by 3 and $6\to2$ by 4. These removals are legal even at the
smallest nonnegative representative of each winning residue.

Strong induction now proves the classification. The empty pile is losing.
At a claimed losing pile, all legal options are smaller winning piles. At a
claimed winning pile, the displayed legal option is a smaller losing pile.
Thus the normal-play recurrence holds at every size. A long table might have
suggested the period seven, but the residue argument proves it. In misère play
the empty position has a different outcome convention and the argument must
be rebuilt rather than copied. Further supported game methods appear in
[Winning with Invariants](#/books/winning-with-invariants).

<a id="section-197-complete-solutions"></a>
<a id="section-195-complete-solutions"></a>
## Complete solutions

[Exercise 1](#recreation-laboratory-ex-1) · [Exercise 2](#recreation-laboratory-ex-2) · [Exercise 3](#recreation-laboratory-ex-3) · [Exercise 4](#recreation-laboratory-ex-4) · [Exercise 5](#recreation-laboratory-ex-5)

<a id="section-237-hints-for-exercises-1-5"></a>
<a id="section-235-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#recreation-laboratory-ex-1) · [Exercise 2](#recreation-laboratory-ex-2) · [Exercise 3](#recreation-laboratory-ex-3) · [Exercise 4](#recreation-laboratory-ex-4) · [Exercise 5](#recreation-laboratory-ex-5)

<a id="section-250-exercise-6-identify-the-illegal-compression-recreation-"></a>
<a id="section-248-exercise-6-identify-the-illegal-compression-recreation-"></a>
### Exercise 6: identify the illegal compression {#recreation-laboratory-ex-6}

A coin puzzle allows flipping only the leftmost two of four coins. Is total
head-count a sufficient state key? Give two states showing why or why not.

<details><summary>Hint 1</summary> Compare positions as well as counts.
</details>
<details><summary>Hint 2</summary> Try states $HHTT$ and $TTHH$.
</details>
<details><summary>Solution</summary> Both have two heads, but the only move takes $HHTT$ to $TTTT$
and $TTHH$ to $HHHH$. They have different futures relative to the all-tails
goal. A key recording only head-count merges distinct states and can make a
search answer incorrect. The full four-bit word is a suitable key here.
</details>
<a id="section-264-exercise-7-shortestness-without-running-a-search-recrea"></a>
<a id="section-262-exercise-7-shortestness-without-running-a-search-recrea"></a>
### Exercise 7: shortestness without running a search {#recreation-laboratory-ex-7}

For the three-lamp rule in worked example 2, give a shortest route from $101$
to $000$ and a lower-bound certificate.

<details><summary>Hint 1</summary> Add the endpoint press masks modulo 2.
</details>
<details><summary>Hint 2</summary> List every possible one-move mask.
</details>
<details><summary>Solution</summary> Press first and third, using mask sum $110+011=101$; adding
this to the start gives zero. No listed single mask is $101$, so one press
cannot work, and zero presses leave the nonzero start unchanged. The route
has length two and meets the lower bound of two.
</details>
<a id="section-278-exercise-8-a-safe-tiling-branch-recreation-laboratory-e"></a>
<a id="section-276-exercise-8-a-safe-tiling-branch-recreation-laboratory-e"></a>
### Exercise 8: a safe tiling branch {#recreation-laboratory-ex-8}

Why is it complete to branch on every legal placement covering the first
uncovered board cell, instead of trying all remaining placements in arbitrary order?

<details><summary>Hint 1</summary> Consider any hypothetical complete tiling.
</details>
<details><summary>Hint 2</summary> That cell must be covered by one of its pieces.
</details>
<details><summary>Solution</summary> In every completion the chosen cell belongs to exactly one
placement. If the branch list includes every legal placement covering it, the
completion's placement appears in one branch. Repeating this reasoning after
each choice preserves every possible completion along some branch. Rejecting
out-of-bounds or overlapping placements is safe because neither can occur in
a valid tiling. Additional pruning needs its own similar implication proof.
</details>
<a id="section-294-exercise-9-losing-piles-beyond-a-table-recreation-labor"></a>
<a id="section-292-exercise-9-losing-piles-beyond-a-table-recreation-labor"></a>
### Exercise 9: losing piles beyond a table {#recreation-laboratory-ex-9}

In the normal-play game with removals 1,3,4, classify pile 100 and give a
winning move if one exists.

<details><summary>Hint 1</summary> Reduce 100 modulo 7.
</details>
<details><summary>Hint 2</summary> Apply the proved classification, not a guess from nearby sizes.
</details>
<details><summary>Solution</summary> Since $100=14\cdot7+2$, it is losing. Every legal removal
gives a winning residue: 99 has residue 1, 97 residue 6 and 96 residue 5.
There is no winning move against perfect play. The residue proof applies
regardless of how far any previously computed table extended.
</details>
<a id="section-308-exercise-10-audit-a-report-protocol-recreation-laborato"></a>
<a id="section-306-exercise-10-audit-a-report-protocol-recreation-laborato"></a>
### Exercise 10: audit a report protocol {#recreation-laboratory-ex-10}

Roll two fair independent dice. Compare the chance that both are six under
these reports: (A) a reporter says whether at least one is six, and says yes;
(B) a uniformly randomly chosen die is inspected and is six.

<details><summary>Hint 1</summary> Protocol A conditions on eleven ordered outcomes.
</details>
<details><summary>Hint 2</summary> In B, include which die was inspected in the sample space.
</details>
<details><summary>Solution</summary> In A, eleven of the 36 ordered pairs contain a six and only
$(6,6)$ has two, giving $1/11$. In B there are 72 equally likely triples
of the two results and chosen index. Twelve report a six on the inspected die;
two of those have both dice six, giving $2/12=1/6$. The different report
mechanisms condition on different events, so the answers need not agree.
</details>
<a id="section-324-final-challenge-curate-a-mini-exhibition"></a>
<a id="section-322-final-challenge-curate-a-mini-exhibition"></a>
## Final challenge: curate a mini-exhibition

Select one constructive puzzle, one impossibility proof, one probabilistic
surprise, and one algorithmic search. For each provide a one-minute invitation,
a precise rule card, a nonvisual representation, graduated hints, a complete
solution, and a “what can go wrong?” panel. Connect the four through one reusable
idea—parity, complement, graph representation, or backward reasoning. Invite a
tester unfamiliar with the puzzles and revise every ambiguity they uncover.

<a id="section-333-summary"></a>
<a id="section-331-summary"></a>
## Summary

A search proof must specify the state key, every legal transition and why its
coverage is complete. BFS uses distance layers to certify shortest unweighted
routes. Algebra can reduce redundant move histories to finite press patterns,
while induction can turn a conjectured game table into a theorem. Separate
exact certificates, finite observations and probability estimates in every
exhibition or computational report.
