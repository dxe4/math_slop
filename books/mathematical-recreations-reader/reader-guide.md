
# Audience and Route {#section-1-audience-and-route}

Mathematical play is serious experimentation with small worlds. A row of coins, a tiled board, or a heap of counters can be inspected completely; yet the reason a puzzle works may be parity, an invariant, a graph, a strategy-stealing argument, or an error-correcting code. This reader develops those ideas from explorer-friendly trials through undergraduate proofs.

The aim is not a bag of tricks. Each chapter asks you to move through the same cycle: state the rules so that two readers are solving the same problem; experiment on the smallest cases and record failures as well as successes; invent a quantity or representation that exposes structure; prove why it controls every legal move; construct a strategy, tiling, dissection, or algorithm when one exists.

<a id="section-5-what-is-assumed"></a>
## What is assumed {#section-7-what-is-assumed}

Elementary arithmetic, including simple fractions and ratios, school algebra, basic geometry including the Pythagorean theorem, and comfort drawing grids are assumed. Sections marked **Further** use induction, congruences, elementary probability, or graphs, but define the needed language locally. Younger readers can start with Invariants and Parity, Colorings and Tilings, Matchsticks, Coins, and Crossings, and Magic Squares. A proof-focused route is Invariants and Parity, Impartial Games, Dissections and Rearrangements, Constructive Challenges, and Knot Theory for Fun. A computational route is Encoding Tricks, Routes and Networks, Card Shuffling, Fractals, and the Recreation Laboratory. Every program uses only basic language features and can be pasted into a browser console or run with a JavaScript or Python runtime.

<a id="section-9-materials"></a>
## Materials {#section-11-materials}

Keep squared paper, pencil, ruler, scissors, two colors of pencil, about twenty coins or counters, and a standard six-sided die nearby. Never cut a physical object, light a match, or toss coins near hazards; drawings or craft sticks work for every activity.

<a id="section-13-the-cycle-of-investigation"></a>
## The cycle of investigation {#section-15-the-cycle-of-investigation}

A recreational problem is not a riddle with a hidden answer. It is a small mathematical world with precise rules. The productive cycle is:

1. **State** the rules so that two readers are solving the same problem.
2. **Experiment** on the smallest cases and record failures as well as successes.
3. **Invent** a quantity or representation that exposes structure.
4. **Prove** why it controls every legal move.
5. **Construct** a strategy, tiling, dissection, or algorithm when one exists.

Skipping steps is tempting but costly. A thousand random trials may suggest a pattern, but only a proof that checks every move type establishes an invariant. Conversely, an elegant proof of impossibility does not help when a construction is required.

<a id="section-25-warm-up-the-fifteen-coins"></a>
## Warm-up: the fifteen coins {#section-27-warm-up-the-fifteen-coins}

Fifteen coins lie in a row, all showing heads. A move flips exactly two adjacent coins. Can all coins show tails?

Experiment first. With two coins, flip both: tails, done. With three coins, flipping positions 1 and 2 gives TTH; flipping 2 and 3 gives HTT; no sequence reaches TTT. What blocks it?

Label positions $1,2,\dots,15$. Consider the parity of the number of heads on odd positions. An adjacent pair always consists of one odd and one even position, so flipping it changes the odd-position head count by $+1$ or $-1$, flipping parity. That quantity is not invariant, so it cannot block the target.

Try a different quantity. Assign weight $(-1)^i$ to position $i$. The total weighted sum $S = \sum_{i=1}^{15} (-1)^i h_i$, where $h_i = 1$ for heads and $0$ for tails, changes by $\pm 2$ or $0$ when two adjacent coins are flipped. Thus $S \bmod 2$ is invariant. Initially all heads give $S = \sum_{i=1}^{15} (-1)^i = -1$, odd. All tails gives $S = 0$, even. The target is unreachable.

This proof is stronger than a failed search. It says no sequence of any length can succeed.

<a id="section-37-visual-accessibility"></a>
## Visual accessibility {#section-39-visual-accessibility}

Every diagram is described in words or coordinates. Grid cells use $(\text{row}, \text{column})$, with row $1$ at the top and column $1$ at the left. Colors are always paired with labels such as $B/W$ or numerical values, so no argument depends on color perception. Cutting and motion puzzles also include an inventory of pieces and positions that can be checked without seeing an animation.

<a id="section-41-how-solutions-are-used"></a>
## How solutions are used {#section-43-how-solutions-are-used}

Each chapter ends with graduated exercises and complete solutions. Pause before reading a solution: write a conjecture, a small-case table, and one reason the conjecture might fail. A solution is a model of verification, not an instruction to hide the discovery process. Alternative constructions are welcome if their rules and proof are explicit.

<a id="section-45-attribution-and-reuse"></a>
## Attribution and reuse {#section-47-attribution-and-reuse}

The themes are classical and have circulated across many cultures and centuries. The exposition, exercises, and solutions here are released under CC BY-SA 4.0. When presenting a historical puzzle, prefer "a classical puzzle" unless a primary source establishes a more specific attribution.

<a id="section-49-chapter-map"></a>
## Chapter map {#section-51-chapter-map}

The volume is organised in three parts.

**Part I — Invariants, Puzzles, and Construction.** Chapters 1–6: Invariants
and Parity; Colorings and Tilings; Dissections and Rearrangements; Matchsticks,
Coins, and Crossings; Routes and Networks; Constructive Challenges.

**Part II — Patterns, Information, and Probability.** Chapters 7–11: Magic
Squares; Latin Squares; Encoding Tricks; Card Shuffling; Probability Surprises.

**Part III — Geometric Play and Investigation.** Chapters 12–15: Knot Theory
for Fun; Origami Mathematics; Fractals; the Recreation Laboratory.

Earlier Impartial Games, Graph Puzzles, Tiling Problems and Probability
Paradoxes readings retain their original source addresses and exercises outside
this primary sequence. For a systematic games course, continue to
[Winning with Invariants](#/books/winning-with-invariants).


<a id="section-71-exercises"></a>
## Exercises {#section-73-exercises}

1. **Explorer.** Four coins in a row show HHHH. A move flips exactly two adjacent coins. List all reachable configurations.
2. **Foundation.** With six coins showing HHHHHH and the same move, prove that HTHHHH is unreachable or give a move sequence.
3. **Secondary.** Generalise the fifteen-coin argument to $n$ coins. For which $n$ is all-tails reachable?
4. **Secondary.** A token starts at $(0,0)$. Each move changes exactly one coordinate by $1$. After exactly $10$ moves, which points can the token occupy? Prove your answer.
5. **Undergraduate.** Let $S$ be a finite multiset of integers written on a board. A move erases two elements $a,b$ and writes $|a-b|$ in their place. Prove that the parity of the sum of all elements on the board is invariant.

<a id="section-79-complete-solutions"></a>
## Complete solutions {#section-81-complete-solutions}

1. From HHHH, flipping positions $(1,2)$ gives TTHH; $(2,3)$ gives HTTH; $(3,4)$ gives HHTT. Continuing gives the eight configurations with an even number of heads:
   HHHH, TTHH, HTTH, HHTT, THHT, THTH, HTHT, and TTTT. Conversely,
   every move changes the head count by $-2$, $0$, or $2$, so no odd-head
   configuration is reachable. This proves that the list is complete.

2. HTHHHH has five heads: only the coin at position $2$ is tails. Consider the total number of heads modulo $2$: flipping two adjacent coins changes it by $-2$, $0$, or $2$, so the parity is invariant. Initially $6$ is even, whereas the target count $5$ is odd. The target is therefore impossible. (The number of heads on odd positions is no help here: an adjacent pair always holds one odd and one even position, so that count changes by $\pm 1$ every move.)

3. For $n$ coins, the parity of the total number of heads is invariant because each move changes it by $-2$, $0$, or $2$. All-tails has $0$ heads (even). All-heads has $n$ heads. Thus all-tails is reachable from all-heads only if $n$ is even. When $n$ is even, a constructive proof exists: pair the coins and flip each pair once.

4. Each move changes $|x|+|y|$ by exactly $1$, so after $10$ moves $|x|+|y| \leq 10$, and the parity of $|x|+|y|$ matches the parity of $10$, which is even. Conversely, any integer point with $|x|+|y| \leq 10$ and $|x|+|y|$ even is reachable: walk directly to the point in $|x|+|y|$ moves, then spend the remaining even number of moves pacing back and forth along one edge. So the reachable points are exactly the integer points $(x,y)$ with $|x|+|y| \leq 10$ and $|x|+|y|$ even.

5. Replacing $a,b$ by $|a-b|$ changes the total sum from $a+b$ to $|a-b|$ for that pair. Since $a+b \equiv a-b \equiv |a-b| \pmod{2}$, the sum changes by an even number, so its parity is invariant. (Consequently, if the numbers initially sum to an odd value, the final remaining number is odd; in particular the board can never reduce to a single $0$.)

<a id="section-94-project-invent-an-invariant"></a>
## Project: invent an invariant {#section-96-project-invent-an-invariant}

Design a puzzle with six binary cards and two distinct move types. Supply a reachable target and an unreachable target. Prove the latter with an invariant, and give an explicit move list for the former. Exchange only the rules and targets with a partner; if they interpret a rule differently, revise the state description rather than blaming the solver.
