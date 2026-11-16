var e=`---
id: book-winning-with-invariants
title: "Winning with Invariants: A Small Book of Combinatorial Games"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Winning with Invariants

Two players take turns changing a shared mathematical position. There is no dice roll, no hidden card, and no simultaneous choice. Can one player force a win before the game begins?

The book begins with **finite impartial games under normal play** and then develops explicit partizan, scoring, and draw-aware models. Here finite means the reachable state graph has finitely many positions and no directed cycle; in particular, every play ends and every position has a maximum remaining play length. Impartial means the legal moves depend only on the position, not on which player moves. Normal play means the player with no legal move loses. Changing any of these hypotheses can change the answer.

The goal is not to memorize tricks. It is to classify positions, discover invariants, prove a strategy by induction, and turn the proof into a program.

## Primary route and preparation

This is an introductory undergraduate (L2) route. Prepare with
[Introduction to Proof](/books/library-book-introduction-to-proof/) and
[Discrete Mathematics: Proof, Counting, and Structure](/books/library-book-discrete-mathematics-proof-counting-structure/).
Sets, functions, induction, finite graphs, and elementary binary arithmetic are
used explicitly. The [reader guide](winning-with-invariants/front-matter/reader-guide.md)
and [diagnostic](winning-with-invariants/front-matter/prerequisite-diagnostic.md)
provide repair routes.

The primary route has eleven teaching chapters:

| Route | Chapter |
| --- | --- |
| 1 | [Positions as a directed graph](winning-with-invariants/positions-as-a-directed-graph.md) |
| 2 | [Impartial Games and Mex](winning-with-invariants/impartial-games-and-mex.md) |
| 3 | [Nim and Nim-Sum](winning-with-invariants/nim-and-nim-sum.md) |
| 4 | [Sprague–Grundy Theory](winning-with-invariants/sprague-grundy-theory.md) |
| 5 | [Kayles, Splitting, and Misère Play](winning-with-invariants/kayles-splitting-misere.md) |
| 6 | [Partizan Games](winning-with-invariants/partizan-games.md) |
| 7 | [Hackenbush](winning-with-invariants/hackenbush.md) |
| 8 | [Domineering](winning-with-invariants/domineering.md) |
| 9 | [Go, Amazons, and Chess: Case Studies](winning-with-invariants/go-amazons-chess-case-studies.md) |
| 10 | [Algorithmic Game Solving](winning-with-invariants/algorithmic-game-solving.md) |
| 11 | [Finite Games and Strategy](winning-with-invariants/finite-games-and-strategy.md) |

Each chapter has three explicitly labelled worked cases and ten exercises with
two staged hints and a full solution beside the statement. The
[solution index](winning-with-invariants/back-matter/solutions.md#primary-route-solutions)
links to the local explanations. Read marks remain study reminders rather than
graded evidence.

The original [Impartial Games](winning-with-invariants/impartial-games.md),
[Amazons](winning-with-invariants/amazons.md),
[Go](winning-with-invariants/go-and-combinatorics.md), and
[Chess Endgames](winning-with-invariants/chess-endgames.md) chapters remain
earlier readings at their existing identities. This retains the alternative
sum-theorem proof and the additional specialist examples. The primary route
presents the general sum proof in its Sprague–Grundy chapter.

The mathematical orientation below keeps its original proofs, code, and
reference exercises. Use the named route above when following the current
teaching sequence.

## 1. Positions as a directed graph

A game position is a state. Draw an arrow $P \\to Q$ when one legal move changes $P$ into $Q$. Terminal positions have no outgoing arrows.

Because the game is finite, classify positions working backward:

- an **N-position** is winning for the player whose turn is **next**;
- a **P-position** is winning for the **previous** player, so the next player loses against perfect play.

The recursive theorem is:

1. A terminal position is P.
2. A position is N if it has at least one move to a P-position.
3. A position is P if every legal move goes to an N-position.

Why? From N, choose the move to P. From P, every move hands the opponent an N-position. The classification is valid because finite play lets us induct on the maximum number of moves remaining.

### Boundary case

If cycles are allowed and infinite play is possible, “work backward from terminal states” may leave positions unclassified; draw rules or repetition rules are then required. Finiteness is not decoration.

## 2. The subtraction game

Begin with $n$ counters. A move removes 1, 2, or 3 counters. Whoever takes the last counter wins.

List small positions:

- $0$ is P: no move exists.
- $1,2,3$ are N: move directly to 0.
- $4$ is P: every move reaches $1,2,3$, all N.
- $5,6,7$ are N: move to 4.
- $8$ is P.

Conjecture: multiples of 4 are exactly the P-positions.

### Proof by induction

The base $0$ is P. Suppose the pattern holds up through $4k$. From $4k+1$, $4k+2$, or $4k+3$, remove 1, 2, or 3 respectively to reach $4k$, so these positions are N. From $4k+4$, every legal removal reaches one of those three N-positions, so $4k+4$ is P. Induction proves the classification.

The winning strategy from a nonmultiple of 4 is to remove the remainder modulo 4. Afterwards, whatever the opponent removes, remove the complementary number making the pair total 4. The invariant at the end of each of your turns is “the remaining count is divisible by 4.”

If legal removals were $\\{1,3,4\\}$, the same rule would fail. Always derive a pattern from the actual move set.

## 3. A solver that mirrors the theorem

For any finite subtraction set, dynamic programming computes the classification:

\`\`\`js
function winningTable(limit, moves) {
  const win = Array(limit + 1).fill(false); // position 0 is losing
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

### Correctness invariant

At the start of loop iteration $n$, every position below $n$ is correctly classified. If the algorithm finds a legal move to a previously classified losing position, the recursive theorem makes $n$ winning. If it finds none, every move reaches a winning position, so $n$ is losing. Induction proves the table and stored replies correct.

With $L$ positions and $m$ allowed move sizes, time is $O(Lm)$ and space $O(L)$. Discovering a modular pattern may lead to a constant-time strategy, but the table is useful evidence and a source of conjectures.

## 4. Several heaps: Nim

In Nim, a position consists of heap sizes $(h_{1},…,h_{k})$. A move chooses exactly one heap and reduces it to any smaller nonnegative size. The last move wins.

Write each heap in binary and take bitwise exclusive-or:

$S = h_{1} XOR h_{2} XOR ⋯ XOR h_{k}$.

The theorem is striking: a Nim position is P exactly when $S=0$.

### Why every move from zero XOR is bad

Suppose $S=0$ and one heap changes from $h$ to smaller $h'$. Let $b$ be the highest binary bit where $h$ and $h'$ differ. Since the number decreased, $h$ has 1 and $h'$ has 0 at bit $b$. No higher bit changes. The total XOR therefore changes at bit $b$ from 0 to 1, so the new XOR is nonzero.

### Why nonzero XOR has a move to zero

Suppose $S\\ne 0$, and let $b$ be its highest 1 bit. At least one heap $h$ has bit $b$ equal to 1. Set $h' = h XOR S$. Higher bits of $h'$ match $h$, while bit $b$ changes from 1 to 0, so $h'<h$; it is a legal reduction. The new total XOR is

$S XOR h XOR h' = S XOR h XOR (h XOR S) = 0$.

Thus zero-XOR positions send every move to nonzero XOR, and nonzero-XOR positions have a move to zero. Combined with terminal $(0,…,0)$, whose XOR is zero, the recursive theorem proves the result.

### Worked example

For heaps $(3,4,5)$, binary forms are $011$, $100$, $101$. Their XOR is $010=2$, so the position is N. Choose heap 3: $3 XOR 2 = 1$, reducing it to 1. New heaps $(1,4,5)$ have XOR $001 XOR 100 XOR 101 = 000$.

## 5. Code a Nim move

\`\`\`js
function nimMove(heaps) {
  const sum = heaps.reduce((s, h) => s ^ h, 0);
  if (sum === 0) return null;
  for (let i = 0; i < heaps.length; i += 1) {
    const target = heaps[i] ^ sum;
    if (target < heaps[i]) return { heap: i, remove: heaps[i] - target };
  }
  throw new Error("proof says a move must exist");
}
\`\`\`

The existence part of the theorem proves the loop will find a legal move whenever the XOR is nonzero. For $k$ heaps of machine-size nonnegative integers, the routine takes $\\Theta (k)$ time and constant extra space.

JavaScript bitwise operators convert numbers to signed 32-bit integers. For heap sizes beyond that range, use $BigInt$ and its XOR operator, or implement binary arithmetic explicitly. A mathematical proof over arbitrary nonnegative integers does not erase a language’s representation limits.

## 6. Misère play: one changed rule, one changed theorem

Under **misère** play, taking the last counter loses. The exact classification is:

- if every nonempty heap has size $1$, the position is P exactly when the number of nonempty heaps is odd;
- if some heap has size greater than $1$, the position is P exactly when the Nim XOR is zero.

For example, a single heap of size 1 has XOR 1, which ordinary Nim calls winning. Under misère play the only move takes the last object and loses, so the position is P. This one-cell counterexample is enough to refute careless reuse of the normal-play theorem.

When exactly one heap has size greater than $1$, reduce it to $0$ or $1$ so that an odd number of unit heaps remains. When at least two heaps exceed $1$, the ordinary Nim move to XOR zero is valid and cannot leave exactly one large heap: one integer at least $2$ cannot have the same XOR as a collection of zeros and ones. These replies reach the P-classes above. Conversely, a move from an odd collection of unit heaps leaves an even collection, while a move from a zero-XOR position with a large heap makes the XOR nonzero. This proves the classification by the P/N recursion. The lesson is methodological: state the terminal convention before invoking an invariant.

## 7. Symmetry strategies, and when they break

Many games invite a mirror strategy: after the opponent changes one side, make the reflected change on the other. To prove it works, check three facts:

1. the starting position has the symmetry;
2. every opponent move has a distinct legal mirror response;
3. responses cannot collide with a fixed point or end the game at the wrong time.

For two equal Nim heaps $(n,n)$, mirroring is valid: if one is reduced to $m$, reduce the other to $m$, restoring XOR zero. On a board with a central fixed square, however, the first player may occupy the fixed point and leave a symmetric position. “The board looks symmetric” is not a proof that the second player wins.

## 8. Experiments and counterexamples

- Change subtraction moves from $\\{1,2,3\\}$ to $\\{1,3,4\\}$. Compute the first 30 P-positions and guess a period. Search farther before claiming it continues.
- Generate all three-heap Nim positions with heaps at most 7. Verify that the recursive graph classification agrees with zero XOR.
- Deliberately use ordinary Nim strategy under misère rules and find the smallest failure.
- Invent a finite game with a tempting numerical invariant that is preserved by some but not all legal moves. One violating move destroys an invariant-based strategy.
- Add a move that splits a heap into two. Nim XOR of heap sizes no longer automatically classifies the game; compute small positions to see why.

## Exercises with solutions

### 1. Subtract 1 or 2

Classify the P-positions when each move removes 1 or 2 counters.

**Solution.** They are multiples of 3. From a multiple of 3, moves reach residues 2 or 1; from either nonzero residue, remove that residue to reach a multiple. Induction formalizes the argument.

### 2. Find the Nim move

Find a winning move from $(7,10,12)$.

**Solution.** In four bits, $0111 XOR 1010 = 1101$, then $1101 XOR 1100 = 0001$. Thus $7 XOR 10 XOR 12=1$. For heap 7, $7 XOR 1=6<7$, so reduce 7 to 6. The new XOR is $0110 XOR 1010 XOR 1100=0000$.

### 3. Two equal heaps

Prove $(n,n)$ is P in normal Nim.

**Solution.** $n XOR n=0$, so the theorem applies. Directly, every move makes heaps unequal; the opponent can reduce the larger to match the smaller, restoring equality. The game is finite and the responding player takes the final move.

### 4. Why greedy fails

In the $\\{1,2,3\\}$ subtraction game, explain why “always remove 3” is not a winning strategy from 5.

**Solution.** Removing 3 leaves 2, from which the opponent takes the last two and wins. The invariant strategy removes 1, leaving the P-position 4.

### 5. State-graph proof

Why can a finite acyclic impartial game have no position that is both P and N?

**Solution.** Classify by induction on maximum remaining path length. Terminal positions are only P. At each later position, either some move reaches P, making it N, or none does, making every move reach N and the position P. The cases are mutually exclusive.

### 6. Program test

What test would expose an implementation that treats $0$ as winning in the subtraction solver?

**Solution.** Assert $win[0] === false$ and test position 1 with move set $\\{1\\}$. If terminal 0 is wrongly winning, the program will incorrectly mark 1 losing. Boundary tests propagate through recursive algorithms.

## Further paths

Combinatorics studies finite configurations; graph theory turns move relations into state graphs; induction justifies backward classification; modular arithmetic explains subtraction-game periods; algorithm analysis measures solvers; strategic game theory later adds different move sets, preferences, probability, information, and equilibria.

Recreational games are serious laboratories because a strategy is a theorem with an executable witness: classify the states, exhibit the move, and prove the invariant returns.

`;export{e as default};