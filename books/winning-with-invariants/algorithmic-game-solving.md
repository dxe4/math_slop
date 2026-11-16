
# Algorithmic Game Solving

This final chapter brings together the mathematical tools developed throughout the book and turns them into algorithms. We study how to solve finite impartial and partizan games computationally, how to verify mathematical claims by exhaustive search, and how to measure the complexity of game-solving problems. The chapter includes runnable code and emphasizes the connection between proof and program.

## 10.1 Solving impartial games by dynamic programming

For any finite acyclic impartial game, the Sprague–Grundy function can be computed by dynamic programming. The algorithm is a direct translation of the recursive definition:

1. Order the positions so every option appears before the position that has it. For edges $p\to q$, this is reverse topological order relative to the usual source-before-target convention.
2. For each position in order, compute the set of Grundy numbers of its options.
3. Apply mex to obtain the Grundy number of the position.

For subtraction games, this reduces to the linear-time algorithm of Chapter 1. For more complex games, the state space may be large, but the principle is the same.

```python
def grundy_table(positions, moves_from):
    """Compute Grundy numbers for all positions.
    positions: list ordered with every option before its predecessors.
    moves_from: dict mapping position to list of options.
    """
    g = {}
    for p in positions:
        option_values = {g[q] for q in moves_from[p]}
        g[p] = mex(option_values)
    return g

def mex(s):
    """Minimum excluded value of a set of nonnegative integers."""
    m = 0
    while m in s:
        m += 1
    return m
```

**Correctness.** By induction on the topological order, every option of $p$ is processed before $p$, so its Grundy number is available. The mex computation matches the definition.

## 10.2 Solving Nim

Nim is already solved: the Grundy number of a position $(h_1, h_2, \dots, h_k)$ is $h_1 \oplus h_2 \oplus \cdots \oplus h_k$. The winning move, when one exists, can be found in $O(k)$ time.

```python
def nim_move(heaps):
    total = 0
    for h in heaps:
        total ^= h
    if total == 0:
        return None  # P-position
    for i, h in enumerate(heaps):
        target = h ^ total
        if target < h:
            return (i, h - target)
    raise RuntimeError("theorem guarantees a move exists")
```

**Verification.** The loop finds a heap $h$ where $h \oplus \text{total} < h$. Such a heap must exist because total has a highest set bit, and at least one heap has that bit set. The new XOR is zero by construction.

## 10.3 Solving partizan games

Partizan games do not have a single numerical invariant like the Grundy number. Instead, we compute the **canonical form** by recursively analyzing options and simplifying.

The algorithm for canonical form:

1. Recursively compute the canonical forms of all Left options and all Right options.
2. Remove **dominated** options: if $G^{L}_1 \leq G^{L}_2$, discard $G^{L}_1$.
3. Bypass **reversible** options: if a Left option $G^{L}$ has a Right response $G^{LR}\leq G$, replace $G^{L}$ by the Left options of that reversing response $G^{LR}$. Apply the dual rule to reversible Right options.
4. The resulting game is the canonical form.

This algorithm is exponential in the depth of the game tree in the worst case. For small games like Hackenbush stalks, it is efficient. For large games like Domineering or Amazons, exact canonical forms are infeasible, and we resort to heuristic evaluation or Monte Carlo search.

## 10.4 Complexity of game solving

The computational complexity of solving combinatorial games varies dramatically:

- **Nim** is in P: solved in linear time.
- **Subtraction games** are in P: solved by dynamic programming.
- **Kayles on one row** is solvable by the split recurrence in Chapter 5. For graph variants, **Node Kayles** is PSPACE-complete, while the complexity of **Arc Kayles** remains open.
- **Domineering:** the asymptotic complexity of determining the outcome or value of arbitrary generalized positions remains open; it must not be labelled PSPACE-complete on the evidence cited here.
- **Generalized Go:** from arbitrary $n\times n$ configurations it is PSPACE-hard under the surveyed setting, while the Japanese-rules version with ko is EXPTIME-complete. The rules and allowed starting configurations are part of the theorem.
- **Generalized Chess** on $n\times n$ boards from arbitrary configurations is EXPTIME-complete.

An asymptotic hardness result concerns an unbounded family of encoded positions; it does not say that every instance is difficult or that a fixed board size has a complexity class. These results explain why one should not expect a single exact method to scale uniformly, while small or structured positions may still admit exact analysis.

## 10.5 Verification by exhaustive search

For small games, we can verify mathematical claims by exhaustive enumeration. The key technique is **retrograde analysis**: starting from terminal positions and working backward, classify every reachable position.

**Example.** Verify that the P-positions of the $\{1, 2, 3\}$ subtraction game are exactly the multiples of $4$, for all $n \leq 1000$.

```python
def verify_subtraction(limit=1000, moves=(1, 2, 3)):
    win = [False] * (limit + 1)
    for n in range(1, limit + 1):
        win[n] = any(not win[n - m] for m in moves if m <= n)
    for n in range(limit + 1):
        expected_win = (n % 4 != 0)
        if win[n] != expected_win:
            raise ValueError(f"failure at n={n}")
    print(f"verified up to {limit}")
```

This program confirms the theorem for all $n \leq 1000$. While not a proof for all $n$, it provides strong evidence and catches errors in the algorithm or the theorem statement.

## 10.6 Common errors

**Error: assuming dynamic programming works for cyclic games.** The algorithms of this chapter require the game graph to be acyclic. If cycles exist, the topological sort fails, and the backward induction is invalid. Games with cycles require specialized algorithms or additional rules (such as draw by repetition).

**Error: using floating-point arithmetic for game values.** Partizan game values are exact symbolic objects (numbers, infinitesimals, etc.). Approximating them with floating-point numbers loses precision and can lead to incorrect comparisons.

**Error: forgetting to simplify canonical forms.** A game with dominated or reversible options is equal to its simplified form but may be exponentially larger. Simplification is essential for efficiency.

**Error: confusing asymptotic complexity with fixed-instance evidence.** Complexity classes describe an unbounded input family under specified rules and encodings. A particular $4\times4$, $8\times8$, or $20\times20$ position is one finite instance; whether it has been solved, or is feasible for a chosen program, requires an explicit computation and receipt rather than extrapolation from a complexity label.

## Exact algorithms need exact specifications

The preserved code consists of mathematical kernels with input contracts. A Grundy table requires a finite list of distinct hashable positions, a complete option list for each, and an order placing every option before its predecessor. Every referenced successor must belong to that universe. The function does not itself construct the order or prove acyclicity.

The subtraction routines require a nonnegative integer limit, strictly positive integer removals and enough storage for the table. The Python Nim function requires a finite sequence of nonnegative integers that can be iterated more than once. A generator consumed by its first loop is not such a sequence. Negative heaps do not describe Nim, and floating-point heaps do not provide the exact bitwise arithmetic used by its theorem.

The finite verification function's expected result is specifically the multiple-of-four theorem for removals one, two and three. Changing its move argument does not automatically change the conjecture being compared. A general game classifier and a comparison against one proposed pattern are different tools, even if both use Boolean tables.

**Worked example (A complete mex calculation).** Let $z$ be terminal; let $a$ have option $z$; let $b$ have options $z,a$; let $c$ have options $a,b$; and let $d$ have options $z,a,b$. Processing $z,a,b,c,d$ is valid because every option appears earlier.

The values are $g(z)=0$, $g(a)=\operatorname{mex}\{0\}=1$, $g(b)=\operatorname{mex}\{0,1\}=2$, $g(c)=\operatorname{mex}\{1,2\}=0$ and $g(d)=\operatorname{mex}\{0,1,2\}=3$. Thus $c$ is losing without being terminal: every move reaches a nonzero value. Vertex $d$ is winning and can record the move to $z$. Choosing either of its other followers would not be a winning isolated-game move.

**Worked example (Returning an actual Nim move).** For heaps $(3,4,5)$ the XOR is two. Reduce the first heap to $3\oplus2=1$, removing two counters. The result $(1,4,5)$ has XOR zero, since $1\oplus4=5$.

The routine returns a heap index and the amount removed, not the target size. A separate witness check would verify the index, the strictly positive removal, the heap bound and the resulting zero XOR. These conditions are concrete consequences of the theorem. They do not assume that a returned pair is correct merely because some winning pair must exist.

**Worked example (Shared followers and memoization).** Let $r$ have options $a,b$, and let both $a,b$ have the same sole option $c$, which is terminal. Then $g(c)=0$, $g(a)=g(b)=1$ and $g(r)=0$. A tree expansion writes $c$ under each branch, while a cache computes its value once.

Reuse is valid because both branches reach the same complete state. If one occurrence retained a special move permission absent from the other, their identical displayed pile would not justify merging them. Memoization saves repeated-subproblem work only when the cache key retains every fact determining future legal play.

## Complexity requires an encoding model

**Proposition 10.1 (Mex is bounded by option count).** A set of $d$ distinct nonnegative integers has mex at most $d$.

*Proof.* Among the $d+1$ integers zero through $d$, one is absent from a set of size $d$. The least missing nonnegative integer is therefore at most $d$. ∎

A mex scan consequently need not run to the largest option value. With constant-time set membership it uses at most $d+1$ candidate checks after forming the set. For an explicitly supplied acyclic graph with $V$ positions and $E$ edges, processing options and mex sets gives $O(V+E)$ expected dictionary/set operations. The expectation concerns the data structures, while state hashing and integer bit costs need additional accounting.

**Encoding qualification for Section 10.4.** A subtraction table through limit $L$ is polynomial in its output/table size and in a unary encoding of that bound. If $L$ is binary-encoded, its description has only order $\log L$ bits. Time proportional to $L$ can then be exponential in the input length. The table algorithm does not by itself prove that every binary-encoded subtraction-game decision problem is polynomial-time solvable.

Likewise the linear Nim statement counts a linear number of XOR and comparison operations in the number $k$ of heaps. If each heap occupies $b$ bits, straightforward exact operations take order $b$ bit work, giving an $O(kb)$ bound at input scale. Python integers avoid fixed-width overflow, but do not make arbitrarily large arithmetic literally constant-time.

The idealized estimate in Exercise 10.4 needs the same distinction. Ten million operations divided by one billion per second gives one hundredth of a second only for that specific count and sustained unit-cost throughput. Big O supplies neither the hidden constant nor the cost of constructing positions, allocating sets and loading inputs. Its original “well under a second” conclusion is therefore qualified explicitly inside the preserved solution.

### What the JavaScript integer distinction means

JavaScript Number values can exactly store some integers much larger than a signed 32-bit word, but Number bitwise XOR converts operands to signed 32-bit integers. Exact storage and exact operator semantics are separate requirements. A large representable heap can therefore be stored correctly and then truncated by the chosen operator.

The [official ECMAScript Number bitwise-operation specification](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numberbitwiseop) makes that conversion explicit. Consistently used BigInt operands have separate integer semantics. A correct implementation must choose a representation and operations covering the declared heap range; copying a formula across programming languages without that contract is insufficient.

## Outcomes and canonical values are different tasks

For finite partizan outcomes, the two-Boolean recursion from the partizan chapter gives a direct terminating method. It requires the side to move and complete Left and Right option generators. Computing those outcomes does not require constructing every canonical short-game value.

Canonical simplification is stronger. Comparing games is recursive, reversible options must be bypassed with the correct option type, and new opportunities for simplification can require repeated passes. A single informal deletion pass is not a complete implementation of canonical-form theory. The original outline identifies mathematical operations, rather than establishing a complexity bound for a particular program.

Decomposition also requires proof. The proposed components must not interact under any future move. Their partizan values must be combined when outcome classes are insufficient. Grundy XOR applies only to impartial normal-play components. An efficient computation of an incorrectly decomposed game still answers the wrong question.

### Finite strategy certificates

For an impartial acyclic graph, a certificate can give a decreasing rank on every edge and a P/N label per position. Every N label supplies a legal move to P; every P label requires all outgoing moves to reach N; terminal positions are P. Induction on the decreasing rank proves all labels.

Completeness of the option generator matters especially for a P claim. Omitting a losing successor can turn a genuinely winning state into an apparent losing state. A legal winning move is a positive witness, while a losing claim quantifies over every move. Failure of a heuristic search to find a witness proves neither completeness nor absence.

The same discipline distinguishes a small exhaustive result from a universal theorem. A table through a bound certifies that finite domain under its rules and generator. A residue induction can establish an unbounded family. An asymptotic hardness theorem concerns specified encodings and generalized rules, not the measured runtime of a fixed board.

No code is executed in these worked examples. Their values are hand calculations, and their complexity statements use explicit operation and representation assumptions. The generalized-game results in the inherited list retain their named rules and allowed configurations; they are not runtime promises for individual instances.

## 10.7 Practice exercises

<a id="algorithmic-game-solving-ex-1"></a>
### Exercise 10.1

Write a Python function that computes the Grundy numbers for Kayles on a row of length $n$.


<details><summary>Hint 1</summary>

Removing one pin or two adjacent pins splits the remaining row.

</details>

<details><summary>Hint 2</summary>

Combine each pair of smaller-row values by XOR, collect options, then take mex.

</details>

<details><summary>Solution</summary>

**Solution.**

```python
def kayles_grundy(n):
    g = [0] * (n + 1)
    for i in range(1, n + 1):
        options = set()
        # Knock down one pin at position j
        for j in range(i):
            options.add(g[j] ^ g[i - 1 - j])
        # Knock down two adjacent pins at positions j, j+1
        for j in range(i - 1):
            options.add(g[j] ^ g[i - 2 - j])
        g[i] = mex(options)
    return g

def mex(s):
    m = 0
    while m in s:
        m += 1
    return m
```

This computes $g(0)$ through $g(n)$ in $O(n^2)$ time. $\square$

</details>

<a id="algorithmic-game-solving-ex-2"></a>
### Exercise 10.2

Prove that the subtraction-game solver runs in $O(Lm)$ time and $O(L)$ space.


<details><summary>Hint 1</summary>

Count the outer iterations and maximum inner work separately.

</details>

<details><summary>Hint 2</summary>

State the unit-cost arithmetic/array model before interpreting the bounds.

</details>

<details><summary>Solution</summary>

**Solution.** The outer loop iterates $L$ times. The inner loop iterates over at most $m$ moves. Each iteration does $O(1)$ work. The arrays `win` and `reply` have size $L + 1$. Therefore time is $O(Lm)$ and space is $O(L)$. $\square$

</details>

<a id="algorithmic-game-solving-ex-3"></a>
### Exercise 10.3

Explain why retrograde analysis is a form of proof by induction.


<details><summary>Hint 1</summary>

Find a strictly decreasing measure along every edge.

</details>

<details><summary>Hint 2</summary>

Terminal cases start the induction and all successor values supply the hypothesis.

</details>

<details><summary>Solution</summary>

**Solution.** Retrograde analysis starts with terminal positions (base case) and iteratively classifies positions whose options are already classified (inductive step). The classification of each position depends only on previously classified positions, exactly matching the structure of a proof by strong induction on the maximum remaining path length. $\square$

</details>

<a id="algorithmic-game-solving-ex-4"></a>
### Exercise 10.4

A game has $10^6$ positions and each position has at most $10$ options. Estimate the time to compute all Grundy numbers on a computer that processes $10^9$ operations per second.


<details><summary>Hint 1</summary>

Distinguish operation count from elapsed time.

</details>

<details><summary>Hint 2</summary>

Throughput gives an idealized division only after fixing hidden constants and excluding other costs.

</details>

<details><summary>Solution</summary>

**Solution.** The algorithm performs $O(10^6 \cdot 10) = O(10^7)$ operations. At $10^9$ operations per second, this takes approximately $0.01$ seconds. For $d$ distinct option values, mex scans candidates $0,\ldots,d$; with constant-time set membership this costs $O(d+1)$ after constructing the set. Even with a factor of $10$ overhead, the computation is well under a second. $\square$

**Qualification of the estimate.** The 0.01-second division assumes exactly ten million unit-cost operations at the stated sustained rate. Big O supplies neither that exact count nor a bound on allocation, hashing, interpreter, input or memory costs. The retained phrase “well under a second” is not a justified runtime guarantee. It is an idealized illustration; actual timing requires a specified implementation and measurement.

</details>

<a id="algorithmic-game-solving-ex-5"></a>
### Exercise 10.5

Design a test that would catch an error in a Nim solver where the XOR is computed incorrectly for heap sizes larger than $2^{31}$.


<details><summary>Hint 1</summary>

Use heaps with distinct high bits.

</details>

<details><summary>Hint 2</summary>

Compare exact arbitrary-precision XOR with a fixed-width interpretation.

</details>

<details><summary>Solution</summary>

**Solution.** Use Python's arbitrary-precision integers to compute the XOR of heap sizes $2^{31}$, $2^{32}$, and $2^{33}$. The correct XOR is $2^{31} \oplus 2^{32} \oplus 2^{33} = 2^{31} + 2^{32} + 2^{33}$ (since all bits are distinct). A solver using 32-bit signed integers would overflow and give a wrong result. Compare the solver's output to Python's `^` operator. $\square$

</details>

<a id="algorithmic-game-solving-ex-6"></a>
### Exercise 10.6

Prove that a Grundy value is at most the number of legal options. Why does a large option value not force a long mex scan?

<details><summary>Hint 1</summary>

Apply pigeonhole to zero through the number of options.

</details>
<details><summary>Hint 2</summary>

Mex depends on the first missing value, not the largest present one.

</details>
<details><summary>Solution</summary>

With $d$ options there are at most $d$ distinct option values. Some integer among zero through $d$ is missing, so mex is at most $d$. For example, the singleton set containing $10^{100}$ has mex zero. A membership-set scan stops at zero; the large integer affects storage cost, not the number of candidate values inspected.

</details>

<a id="algorithmic-game-solving-ex-7"></a>
### Exercise 10.7

Explain why $O(L)$ time need not be polynomial in the length of binary-encoded $L$.

<details><summary>Hint 1</summary>

Take $L$ to be a power of two.

</details>
<details><summary>Hint 2</summary>

A short binary description can specify an exponentially large table.

</details>
<details><summary>Solution</summary>

If $L=2^b$, its encoding has $b+1$ bits but a table of length $L$ has $2^b$ entries. Linear work in the table length is exponential in $b$. The numerical running-time bound is therefore not a polynomial input-length bound for binary encoding. Unary encoding instead has length proportional to $L$.

</details>

<a id="algorithmic-game-solving-ex-8"></a>
### Exercise 10.8

A cache ignores whether a once-only special move remains. How can this invalidate a correct recurrence?

<details><summary>Hint 1</summary>

Equal displayed pile sizes can have different successors.

</details>
<details><summary>Hint 2</summary>

The key must retain all data determining legal moves.

</details>
<details><summary>Solution</summary>

The special move can supply an option available in one state but absent in the other. Their mex sets or winning-successor sets can differ. Returning one state's answer for the other therefore stops evaluating the recurrence on the intended graph. Include the permission flag and every other rule-relevant fact in the cache key.

</details>

<a id="algorithmic-game-solving-ex-9"></a>
### Exercise 10.9

For heaps $(7,10,12)$, find a move to XOR zero and state both the removed amount and target size.

<details><summary>Hint 1</summary>

Compute the total XOR first.

</details>
<details><summary>Hint 2</summary>

XOR the selected heap with that total and require a smaller result.

</details>
<details><summary>Solution</summary>

The total is $7\oplus10\oplus12=1$. The first heap has target $7\oplus1=6$, so remove one counter. Then $6\oplus10\oplus12=0$. The removed amount is one and the target is six. Confusing these return conventions would turn a correct calculation into the wrong move.

</details>

<a id="algorithmic-game-solving-ex-10"></a>
### Exercise 10.10

Why is unqualified JavaScript Number XOR unsuitable for arbitrary large Nim heaps? Compare heap $2^{40}$ with its signed-32-bit coercion.

<details><summary>Hint 1</summary>

Number bitwise operators convert their operands before operating.

</details>
<details><summary>Hint 2</summary>

The bit in position forty disappears from a 32-bit word.

</details>
<details><summary>Solution</summary>

A single heap of size $2^{40}$ has exact XOR $2^{40}$ and is winning. Signed-32-bit coercion makes the operand zero, incorrectly suggesting a losing state. Use exact integer operations covering the declared range, such as consistent BigInt operands, or enforce an appropriate fixed-width bound. Exact arithmetic storage alone does not guarantee exact bitwise semantics.

</details>

## 10.8 Conclusion

This book began with a simple question: who wins a game where players take turns moving a token? From that seed grew a theory of position graphs, P- and N-positions, the Sprague–Grundy theorem, nim arithmetic, partizan games, and algorithmic solvers. The unifying theme is the **invariant**, whose stage of play must be stated. A move invariant holds after every legal move; a strategy target can instead be restored at the end of the strategy player's turns. In the normal-play $\{1,2,3\}$ subtraction game, $4$ (P) can move to $3$ (N). From an N-position, first leave a multiple of $4$; thereafter answer an opponent's removal $m$ with $4-m$. Each pair of moves removes $4$, so the strategy player takes the last counter. This online strategy clarification leaves the retained draft PDF unchanged.

The tools are not limited to games. Backward induction, dynamic programming, and the mex construction appear throughout discrete mathematics and computer science. The habit of classifying states, looking for invariants, and proving by induction is transferable to any domain where a system evolves by discrete steps.

We close with a reminder: a strategy is a theorem with an executable witness. Classify the states, exhibit the move, and prove the invariant returns. That is winning with invariants.


<a id="algorithmic-game-solving-summary"></a>
## Summary

Exact solving begins with complete states, legal options and terminating rules. Dynamic programming evaluates proved recurrences; mex is bounded by option count and Nim returns a checkable move to zero XOR. Operation counts, bit costs and binary input length must be distinguished. Partizan outcomes need not require canonical forms, while losing claims and strategy certificates need complete successor coverage rather than unsuccessful search.

