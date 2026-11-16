var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: impartial-games
title: "Impartial Games: Winning and Losing Positions"
level: secondary
estimated_minutes: 170
license: CC BY-SA 4.0
---

# Impartial Games: Winning and Losing Positions

Two players share the same legal moves, alternate, and have no hidden
information. Such a game is **impartial**. Under the **normal-play rule**, the
player making the last move wins. These hypotheses matter: chess is not
impartial, and changing “last wins” to “last loses” changes the analysis.
For the backward recursion below, the reachable move graph is finite and has no
directed cycle, so every play ends and positions can be classified from the
terminal states upward.

## Work backward

A position is **losing** ($P$, for previous player wins) if every move goes to a
winning position. It is **winning** ($N$, for next player wins) if at least one
move goes to a losing position. A position with no moves is losing under normal
play.

For a heap game where one may remove 1, 2, or 3 counters, heap 0 is losing;
heaps 1, 2, 3 are winning because they can move to 0; heap 4 is losing because
all moves go to winning positions. The pattern repeats: multiples of 4 are
losing. From a nonmultiple, remove its remainder modulo 4. After an opponent
removes $r$, remove $4-r$.

This is a strategy, not merely a prediction. It specifies a legal response to
every possible opponent move.

## Nim and binary xor

In **Nim**, a move removes any positive number of counters from exactly one heap.
Write heap sizes in binary and combine them with bitwise exclusive-or, $\\oplus$.
At each binary place, xor is 1 when an odd number of heaps has a 1 there. The
result is the **nim-sum**.

Bouton's theorem says a Nim position is losing exactly when its nim-sum is zero.

Example: heaps $(3,4,5)$ have binary forms $011,100,101$; their xor is
$011 \\oplus 100 \\oplus 101 = 010$, nonzero. A winning move changes 3 to 1, producing
$001 \\oplus 100 \\oplus 101 = 000$.

### Why the theorem works

First, no move from xor zero can leave xor zero. A move changes one heap; inspect
the highest binary bit changed. No other heap changed at that bit, so the total
parity there becomes odd.

Second, from nonzero xor $s$, let its highest 1-bit be $b$. Some heap $h$ has bit
$b$ set. Set $h' = h \\oplus s$. All bits above $b$ agree, while bit $b$ changes from
1 to 0, so $h'<h$; reducing $h$ to $h'$ is legal. The new total xor is
$s \\oplus h \\oplus h' = s \\oplus h \\oplus (h \\oplus s)=0$.

Together these statements establish the losing/winning recursion.

## Sums of small games and mex

The **Sprague-Grundy number** $g(P)$ of a finite impartial normal-play position
is the smallest nonnegative integer not among the Grundy numbers of its options.
This operation is $\\operatorname{mex}$ (minimum excluded value). A terminal position has
$g=0$. A position is losing exactly when $g=0$, and the Grundy number of a sum of
independent games is the xor of their Grundy numbers. Here a sum allows a move in exactly one component, and all component move graphs satisfy the finite acyclic normal-play hypotheses above. To prove the xor rule, induct on the maximum remaining play length of the sum. Write $x_i=g(P_i)$ and $s=x_1\\oplus\\cdots\\oplus x_k$. By the induction hypothesis, moving in component $i$ to an option of nimber $y$ gives sum nimber $s\\oplus x_i\\oplus y$. The mex definition excludes $y=x_i$, so no option has nimber $s$. Conversely, for any nonnegative integer $t<s$, take the highest bit where $s$ and $t$ differ. At that bit $s$ is 1 and $t$ is 0; some $x_i$ has bit 1. Put $y=x_i\\oplus s\\oplus t$. Higher bits agree with $x_i$, while that bit changes from 1 to 0, so $y<x_i$. The mex property guarantees an option of component $i$ with nimber $y$, making the sum's option nimber $s\\oplus x_i\\oplus y=t$. Thus every nimber below $s$, and not $s$ itself, occurs among options; their mex is $s$. Options with larger nimbers are permitted and do not affect this argument.

For a subtraction heap allowing removals 1 or 3:

$g(0)=0$, $g(1)=\\operatorname{mex}\\{0\\}=1$, $g(2)=\\operatorname{mex}\\{1\\}=0$,
$g(3)=\\operatorname{mex}\\{0,0\\}=1$.

The sequence continues $0,1,0,1,...$; such a heap behaves like a Nim heap of
size 0 or 1 depending on parity.

## Strategy stealing is not a strategy

Some placement games admit an argument: if the second player had a winning
strategy, the first makes a harmless extra move and then “steals” it. This may
prove the first player wins without telling us how. Do not present a
nonconstructive existence proof as an executable strategy.

## Common errors

- Forgetting whether last move wins or loses.
- Changing more than one Nim heap.
- Adding heap sizes instead of taking binary xor.
- Identifying a pattern from a short table without proving its period.
- Saying “mirror the opponent” without checking the mirror move remains legal.

## Exercises

1. **Explorer.** There are 15 counters; each move removes 1, 2, or 3. Who wins
   with perfect play, and what is the first move?
2. **Foundation.** The allowed removals are 1 or 2. Classify heap sizes by their
   remainder modulo 3.
3. **Secondary.** For Nim heaps $(2,6,7)$, compute the nim-sum and give a winning
   move if one exists.
4. **Secondary.** Prove that two equal Nim heaps form a losing position.
5. **Undergraduate.** Compute Grundy numbers $g(0)$ through $g(10)$ when one may
   remove 1, 3, or 4 counters. Identify, but do not overclaim, a pattern.

## Complete solutions

1. The losing sizes are multiples of 4. Since $15 \\bmod 4=3$, the first player
   removes 3, leaving 12, then complements every opponent removal $r$ with
   $4-r$.
2. Size 0 is losing; 1 and 2 win by moving to 0; 3 loses because it can move only
   to 1 or 2. Repeating the argument, multiples of 3 are losing and all others
   are winning. Remove the remainder to reach a multiple of 3.
3. $2 \\oplus 6 \\oplus 7 = 010 \\oplus 110 \\oplus 111 = 011$, nonzero. Changing heap 6 to 5
   gives $2 \\oplus 5 \\oplus 7=0$; remove one counter from the second heap.
4. $h \\oplus h=0$, so Bouton's theorem applies. Directly, after one heap changes
   from $h$ to $k$, copy that change in the other equal heap on the next turn.
   The copy is legal and restores equality until the responding player takes
   the last counter.
5. Applying $\\operatorname{mex}$ to the reachable earlier entries gives
   $0,1,0,1,2,3,2,0,1,0,1$. The entries from $g(7)$ onward begin by matching
   $g(0),g(1),g(2),g(3)$. This suggests period $7$ starting at $g(0)$, but a
   table through $10$ checks only part of a second block and is not a proof of
   an infinite period. The exact listed values are the required result.

## Programming project: verify before proving

The following dependency-free program computes Grundy values for a subtraction
game. It is evidence and a conjecture generator, not a proof of eventual
periodicity.

\`\`\`js
function grundyTable(limit, moves) {
  const g = Array(limit + 1).fill(0);
  for (let n = 1; n <= limit; n += 1) {
    const seen = new Set(
      moves.filter((m) => m <= n).map((m) => g[n - m]),
    );
    let mex = 0;
    while (seen.has(mex)) mex += 1;
    g[n] = mex;
  }
  return g;
}

console.log(grundyTable(30, [1, 3, 4]).join(" "));
\`\`\`

Change the move set, predict a period, and then prove it by showing that one
complete block forces the next through the recurrence.
`;export{e as default};