var e=`---
parent_id: book-winning-with-invariants
chapter_id: positions-as-a-directed-graph
title: "Positions as a directed graph"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Positions as a directed graph

Consider a simple game: a row of seven squares is drawn on paper, and a token starts on the leftmost square. On each turn a player moves the token one, two, or three squares to the right. The player who lands on the last square wins. Who should win with perfect play?

This question is not about luck or psychology. It is about the **structure** of the game. Every position the token can occupy, together with every legal move from that position, forms a mathematical object: a directed graph. Learning to see games as graphs is the first step toward discovering invariants and proving who wins.

## 1.1 Games as graphs

A **position** is a complete description of the game state at a moment when a player is about to move. A **move** is a legal transition from one position to another. Draw a directed edge $P \\to Q$ whenever a single legal move transforms position $P$ into position $Q$.

A position with no outgoing edges is **terminal**. Under normal play, the player who cannot move loses. Therefore the player who faces a terminal position loses immediately.

Because we study **finite** games in this chapter, the directed graph of positions contains finitely many vertices and no directed cycles. In particular, every play ends after a bounded number of moves. Finiteness is not a decorative assumption: it guarantees that we can reason backward from terminal positions, and it guarantees that no play can continue forever.

![A finite directed game graph whose terminal nodes are P, their predecessors are N, and the initial node is P because all of its moves go to N nodes](figures/backward-induction-dag.svg)

In this exact graph the legal edges are $A\\to B$, $A\\to C$, $B\\to D$, $C\\to D$, and $C\\to E$; $D$ and $E$ are terminal. Backward induction labels $D,E$ as P, then $B,C$ as N because each can move to a P-position, and finally $A$ as P because every move from $A$ reaches N. The arrows and labels, rather than their spatial placement, carry the argument.

## 1.2 P-positions and N-positions

Working backward from terminal positions, every position falls into exactly one of two classes:

- An **N-position** is winning for the **Next** player, the player whose turn it is to move.
- A **P-position** is winning for the **Previous** player, the player who just moved. Equivalently, the Next player loses against perfect play.

The classification is defined recursively by three rules:

1. Every terminal position is a P-position.
2. A position is an N-position if it has **at least one** move to a P-position.
3. A position is a P-position if **every** legal move goes to an N-position.

These rules are mutually exclusive and, because the graph is finite and acyclic, they classify every position uniquely. The proof is by induction on the length of the longest directed path starting from the position.

**Base case.** If the longest path has length $0$, the position is terminal and rule 1 applies.

**Inductive step.** Suppose every position whose longest path has length at most $d$ is classified. Consider a position $P$ whose longest path has length $d + 1$. Every position reachable from $P$ has longest path at most $d$, so by the induction hypothesis each is already classified. If at least one successor is a P-position, rule 2 makes $P$ an N-position. If every successor is an N-position, rule 3 makes $P$ a P-position. The two cases cannot both hold, so the classification is unique.

## 1.3 The subtraction game

Begin with $n$ counters in a single pile. A move removes $1$, $2$, or $3$ counters. The player who takes the last counter wins. This is the simplest heap game and a perfect laboratory for the recursive classification.

Let us classify small positions by hand:

- $0$ is P: no move exists.
- $1$, $2$, $3$ are N: move directly to $0$.
- $4$ is P: every move reaches $1$, $2$, or $3$, all of which are N.
- $5$, $6$, $7$ are N: move to $4$.
- $8$ is P: every move reaches $5$, $6$, or $7$, all N.

The pattern is unmistakable: multiples of $4$ are P-positions, and all other nonnegative integers are N-positions.

**Theorem 1.1.** In the subtraction game with move set $\\{1, 2, 3\\}$, a position $n$ is a P-position if and only if $4 \\mid n$.

**Proof.** We prove by strong induction on $n$.

*Base case.* $n = 0$ is terminal, hence P, and $4 \\mid 0$.

*Inductive step.* Assume the theorem holds for all $m < n$.

- If $n = 4k + 1$, $4k + 2$, or $4k + 3$, then removing $1$, $2$, or $3$ respectively reaches $4k$, which is P by the induction hypothesis. Therefore $n$ is N.
- If $n = 4k + 4$, then every legal removal reaches $4k + 3$, $4k + 2$, or $4k + 1$. Each of these is N by the induction hypothesis. Therefore $n$ is P.

This completes the induction. $\\square$

The proof is more than a classification: it is a **strategy**. From any nonmultiple of $4$, remove the remainder modulo $4$. After your move the pile is a multiple of $4$. Whatever your opponent removes, remove the complementary number so that the pair totals $4$. The invariant at the end of each of your turns is:

$$\\text{the remaining count is divisible by } 4.$$

Because $0$ is divisible by $4$, you take the last counter and win.

## 1.4 When the move set changes

Suppose the legal moves are $\\{1, 3, 4\\}$ instead of $\\{1, 2, 3\\}$. The same modular guess fails. Computing small cases:

- $0$ is P.
- $1$ is N (move to $0$).
- $2$ is P (only move is to $1$, which is N).
- $3$ is N (move to $0$ or $2$; moving to $2$ reaches P).
- $4$ is N (move to $0$ or $3$; moving to $0$ reaches P).
- $5$ is N (move to $1$, $2$, or $4$; moving to $2$ reaches P).
- $6$ is N (move to $2$, $3$, or $5$; moving to $2$ reaches P).
- $7$ is P (moves reach $3$, $4$, $6$, all N).

The pattern is no longer a simple modulus. This is a crucial methodological point: **always derive the pattern from the actual move set**, never assume the same invariant works for a different game.

## 1.5 A dynamic-programming solver

For any finite subtraction set $S$ and bound $L$, the recursive theorem translates directly into an algorithm.

\`\`\`js
function winningTable(limit, moves) {
  const win = Array(limit + 1).fill(false);
  const reply = Array(limit + 1).fill(null);
  for (let n = 1; n <= limit; n += 1) {
    for (const move of moves) {
      if (move <= n && !win[n - move]) {
        win[n] = true;
        reply[n] = move;
        break;
      }
    }
  }
  return { win, reply };
}
\`\`\`

**Correctness invariant.** At the start of loop iteration $n$, every position below $n$ is correctly classified. If the algorithm finds a legal move to a previously classified losing position, the recursive theorem makes $n$ winning. If it finds none, every move reaches a winning position, so $n$ is losing. Induction on $n$ proves the table and stored replies are correct.

With $L$ positions and $m$ allowed move sizes, time is $O(Lm)$ and space is $O(L)$. Discovering a modular pattern may lead to a constant-time strategy, but the table is useful evidence and a source of conjectures.

## 1.6 Common errors and boundary cases

**Error: assuming a simple period without proof.** Many subtraction games do eventually become periodic, but the period and preperiod must be established. A game with move set $\\{1, 3, 4\\}$ has P-positions $0, 2, 7, 9, 14, \\dots$; the pattern is periodic with period $7$ after a short preperiod, but this is a theorem, not an observation.

**Error: forgetting that $0$ is P.** An implementation that treats $0$ as winning will misclassify every position that can reach $0$ in one move. Always test \`win[0] === false\`.

**Error: allowing cycles.** If the position graph contains a directed cycle, the backward induction breaks. Positions on the cycle have no well-defined maximum remaining path length, and the P/N classification may be undefined without additional rules such as draw-by-repetition. Finiteness is not decoration.

**Error: confusing the existence of a winning move with a greedy choice.** In the $\\{1, 2, 3\\}$ subtraction game, the strategy "always remove $3$" fails from $n = 5$: removing $3$ leaves $2$, from which the opponent takes $2$ and wins. The invariant strategy removes $1$, leaving the P-position $4$.

## Finite positions, strategies and input contracts

**Definition 1.2 (Short normal-play impartial game).** For the present theory a game has perfect information, no random moves, the same legal options for both players, alternating turns, and the rule that the player unable to move loses. Its reachable position graph is finite and acyclic. A strategy assigns a legal move to every nonterminal position at which its player is to move and which can arise while following it.

A finite set of positions alone does not imply termination. Two positions with moves in both directions form a finite graph but allow endless play. The acyclicity assumption in Section 1.1 is part of the game model, rather than a consequence of merely counting vertices. A decreasing nonnegative integer quantity is one way to prove it: along a directed cycle that quantity would have to return to its initial value after strictly decreasing.

**Worked example (The seven-square question).** Number the squares zero through six. If the token is on square $i$, there are $6-i$ steps left. A legal move decreases that remaining distance by one, two or three without making it negative. Thus the initial position is the subtraction position six. It is winning: move two squares right, leaving distance four.

After the opponent moves one, two or three squares, reply by moving three, two or one respectively. The two moves together cover four squares. The reply is legal because the distance before it is at least the complementary amount. The token reaches square six on the strategy player's turn. This answers the opening question and translates a picture into the integer state used by the theorem.

**Worked example (A winning move need not be the largest move).** Start with nine counters and removal set $\\{1,2,3\\}$. Removing one leaves eight, a losing position for the opponent. Removing two leaves seven, from which the opponent removes three to leave four; removing three leaves six, from which the opponent removes two to leave four. Thus the only winning first removal is one.

Once eight has been left, the opponent cannot remove the whole pile in one move, and the complementary reply restores a multiple of four. The example distinguishes two quantifiers. A winning position needs at least one winning option, whereas a losing position requires every legal option to be winning for the opponent. A strategy table records one witness for the first quantifier. It need not list every winning move or recommend the largest immediate removal.

**Worked example (No legal move with counters still present).** Use the sole removal size three. Piles zero, one and two are terminal and losing. Piles three, four and five can move to those terminal positions and are winning. Piles six, seven and eight can move only to winning positions and are losing again. A terminal state need not mean an empty pile: it means that the rules offer no move.

Write $n=3q+r$ with $0\\le r<3$. Every move reduces $q$ by one and leaves $r$ unchanged. The game lasts exactly $q$ moves, so the initial player wins precisely when $q$ is odd. This differs from the multiple-of-four pattern because the move rules differ. Checking the stopping rule before guessing a modulus avoids an incorrect extension of the original strategy.

### The exact period for removals one, three and four

**Clarification of Sections 1.4 and 1.6.** The period-seven description has no nonempty preperiod. Losing states are exactly residues zero and two modulo seven, starting at zero. The exception wording in the retained solution to Exercise 1.4 is unnecessary; its final residue statement is the precise result.

**Proposition 1.3.** For removals $\\{1,3,4\\}$, a nonnegative pile is losing exactly when its residue modulo seven is zero or two.

*Proof.* Use strong induction. Zero is terminal and two has only the move to one, which is winning. From residue zero, legal moves reach residues six, four and three; from residue two they reach residues one, six and five. None is zero or two. Conversely residues one, three, four, five and six reach a proposed losing residue by removing respectively one, one, four, three and four. Each prescribed move is legal even at the smallest representative. The recursive classification and induction prove the claim for every pile. ∎

### What the JavaScript solver assumes

The original function is a mathematical kernel with a precondition, not a validator for arbitrary input. Its limit must be a nonnegative integer and every move size a strictly positive integer. The array must fit available storage. For JavaScript Number arithmetic, the limit and supplied move sizes must be safe integers; array lengths also have their own smaller implementation bounds. An input that cannot be stored is outside this table algorithm's practical domain even if its integer arithmetic is exact.

A zero move would consult the current unfinished entry and violate acyclicity of the intended game. A negative move can consult a future entry, while a fractional move produces a noninteger property lookup rather than a valid array position. The correctness proof applies only after excluding those cases. Duplicate positive moves do not change the mathematics but can increase work; a move larger than the current pile is correctly ignored.

A full game state must contain every rule-relevant fact. If a special removal is available only once, pile size alone is insufficient: the state must also record whether that permission remains. Merging these states can make a correct recurrence solve the wrong game.

### From a classification to a complete strategy

A table entry labelled winning is useful only when its stored reply is legal and reaches a losing entry. For a losing entry, the obligation is universal: every legal move must reach a winning one. These two statements supply a strategy for either starting player. If the initial state is winning, its player chooses the stored reply. If it is losing, the other player applies the stored reply after each move.

Termination closes the argument. The strategy does not merely avoid defeat for the next two turns; every play following it ends, and the opponent is the first player unable to move. This is why a decreasing measure, complete move rule and reply witness belong in the same proof.

A finite table can establish all its entries by induction once the input graph is correct. It does not establish a modular formula for uncomputed piles. Conversely the residue proof above classifies infinitely many pile sizes without constructing an infinite table. The two methods support each other, but they answer different scopes of question.

## 1.7 Practice exercises

<a id="positions-as-a-directed-graph-ex-1"></a>
### Exercise 1.1

Classify the P-positions when each move removes $1$ or $2$ counters.


<details><summary>Hint 1</summary>

Find a modulus one larger than the largest removal.

</details>

<details><summary>Hint 2</summary>

Show that every proposed losing state moves out of the class and every other state can move into it.

</details>

<details><summary>Solution</summary>

**Solution.** They are multiples of $3$. From a multiple of $3$, moves reach residues $2$ or $1$; from either nonzero residue, remove that residue to reach a multiple. Formally, prove by induction: $0$ is P; $1$ and $2$ are N because they move to $0$; $3$ is P because moves reach $1$ and $2$, both N; and the pattern repeats. $\\square$

</details>

<a id="positions-as-a-directed-graph-ex-2"></a>
### Exercise 1.2

In the $\\{1, 2, 3\\}$ subtraction game, what is the winning reply from $n = 11$?


<details><summary>Hint 1</summary>

Reduce eleven modulo four.

</details>

<details><summary>Hint 2</summary>

Choose a legal removal leaving a multiple of four, then describe the complementary reply.

</details>

<details><summary>Solution</summary>

**Solution.** $11 = 4 \\cdot 2 + 3$, so $11$ is N. Remove $3$ to reach $8$, which is P. The opponent's move from $8$ reaches $5$, $6$, or $7$; in each case remove the complement to $4$ on your next turn. $\\square$

</details>

<a id="positions-as-a-directed-graph-ex-3"></a>
### Exercise 1.3

Prove that a finite acyclic impartial game can have no position that is both P and N.


<details><summary>Hint 1</summary>

Induct on the longest path remaining.

</details>

<details><summary>Hint 2</summary>

Existence of a losing successor and absence of every losing successor are complementary alternatives.

</details>

<details><summary>Solution</summary>

**Solution.** Classify by induction on the maximum remaining path length. Terminal positions are only P. At each later position, either some move reaches P, making it N, or none does, making every move reach N and the position P. The cases are mutually exclusive. $\\square$

</details>

<a id="positions-as-a-directed-graph-ex-4"></a>
### Exercise 1.4

Consider the subtraction game with move set $\\{1, 3, 4\\}$. Compute the P-positions up to $n = 20$ using the recursive rules.


<details><summary>Hint 1</summary>

Subtract the actual allowed sizes one, three and four.

</details>

<details><summary>Hint 2</summary>

Check residues zero and two modulo seven and list their representatives through twenty.

</details>

<details><summary>Solution</summary>

**Solution.** The P-positions are $0, 2, 7, 9, 14, 16$. The pattern has period $7$ after $n = 0$: P-positions are exactly those $n$ such that $n \\equiv 0 \\pmod{7}$ or $n \\equiv 2 \\pmod{7}$, with the exception that $n = 0$ is P while $n = 7$ is also P. More precisely, for $n \\geq 0$, the P-positions are $n$ with $n \\bmod 7 \\in \\{0, 2\\}$. This can be proved by induction once the pattern is conjectured. $\\square$

</details>

<a id="positions-as-a-directed-graph-ex-5"></a>
### Exercise 1.5

What test would expose an implementation that treats $0$ as winning in the subtraction solver?


<details><summary>Hint 1</summary>

Start with the terminal boundary and smallest nonterminal example.

</details>

<details><summary>Hint 2</summary>

For the sole removal size one, classifying one depends directly on the stored classification of zero.

</details>

<details><summary>Solution</summary>

**Solution.** Assert \`win[0] === false\` and test position $1$ with move set $\\{1\\}$. If terminal $0$ is wrongly winning, the program will incorrectly mark $1$ losing. Boundary tests propagate through recursive algorithms. $\\square$

</details>

<a id="positions-as-a-directed-graph-ex-6"></a>
### Exercise 1.6

Generalize the multiple-of-four theorem to removal set $\\{1,2,\\ldots,k\\}$ for an integer $k\\ge1$.

<details><summary>Hint 1</summary>

Use residues modulo $k+1$.

</details>
<details><summary>Hint 2</summary>

Every nonzero residue is an allowed removal, and no allowed removal preserves residue zero.

</details>
<details><summary>Solution</summary>

Losing states are the multiples of $k+1$. From a nonmultiple remove its residue, between one and $k$, to reach a multiple. Every move from a multiple leaves a nonzero residue. Strong induction from terminal zero proves the classification. After leaving a multiple, answer a removal $m$ with $k+1-m$, restoring the target residue.

</details>

<a id="positions-as-a-directed-graph-ex-7"></a>
### Exercise 1.7

A graph has edges $p\\to q$, $p\\to r$, $q\\to s$, $r\\to t$, and $t\\to s$, with $s$ terminal. Classify its vertices and give a winning move from $p$.

<details><summary>Hint 1</summary>

Begin at $s$ and process each vertex after its successors.

</details>
<details><summary>Hint 2</summary>

The vertex $t$ is winning, so inspect its predecessor $r$.

</details>
<details><summary>Solution</summary>

The terminal $s$ is P. Both $q$ and $t$ are N because they move to $s$. The vertex $r$ is P because its sole successor $t$ is N. Finally $p$ is N because it can move to $r$. Choosing $q$ instead hands the opponent a winning state, so the winning first move is $p\\to r$.

</details>

<a id="positions-as-a-directed-graph-ex-8"></a>
### Exercise 1.8

Explain why equal pile sizes need separate vertices when one state permits a once-only removal of five and the other does not.

<details><summary>Hint 1</summary>

A state describes future possibilities, not merely its numerical display.

</details>
<details><summary>Hint 2</summary>

Compare legal options from a pile of five before and after the permission is consumed.

</details>
<details><summary>Solution</summary>

The unused permission can provide a direct move to zero absent from the other state. Since the option sets differ, pile size does not determine the position. A valid encoding includes a Boolean permission flag and updates it when the special move is used. The recurrence then applies to the enlarged state graph.

</details>

<a id="positions-as-a-directed-graph-ex-9"></a>
### Exercise 1.9

Give a finite position graph for which acyclic P/N backward induction is unavailable.

<details><summary>Hint 1</summary>

Use a directed cycle with no exit.

</details>
<details><summary>Hint 2</summary>

There is no terminal base case or finite maximum path length.

</details>
<details><summary>Solution</summary>

Use vertices $a,b$ with edges $a\\to b$ and $b\\to a$. Play never terminates. There is no terminal base case and no decreasing remaining-path-length parameter. Alternating labels would not prove a winner under the terminating normal-play assumptions, because nobody becomes unable to move. Repetition or draw conventions define a different model requiring additional analysis.

</details>

<a id="positions-as-a-directed-graph-ex-10"></a>
### Exercise 1.10

For removal set $\\{2\\}$, classify every pile and explain why pile one is terminal.

<details><summary>Hint 1</summary>

Count how many moves are possible.

</details>
<details><summary>Hint 2</summary>

Every play has exactly $\\lfloor n/2\\rfloor$ moves.

</details>
<details><summary>Solution</summary>

The initial player wins exactly when $\\lfloor n/2\\rfloor$ is odd. Thus residues two and three modulo four are N, and residues zero and one are P. Pile one is terminal because the only allowed removal exceeds its size. Terminal conditions therefore come from the move rules and cannot always be replaced by “pile equals zero”.

</details>

## 1.8 Looking forward

The P/N classification gives a complete answer for any finite acyclic impartial game, but it requires examining every position. In the next chapter, **Impartial Games**, we introduce the Sprague–Grundy function, which assigns a single nonnegative integer to each position. This number encodes not just whether the position is P or N, but how it behaves when combined with other games. The leap from a boolean classification to a numerical invariant is one of the most powerful ideas in combinatorial game theory.


<a id="positions-as-a-directed-graph-summary"></a>
## Summary

Finite acyclic normal-play games have a unique backward classification. Winning states require a legal move to a losing state, while losing states require every move to lead to a winning state. Decreasing quantities prove termination, residue arguments compress whole tables, and complete states retain all rule-relevant permissions. The mex chapter next refines outcomes into an invariant controlling impartial sums.

`;export{e as default};