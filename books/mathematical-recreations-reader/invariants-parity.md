
# Invariants and Parity: What a Move Cannot Change

A puzzle often describes motion: flip cards, swap counters, jump pegs. Trying
moves answers “what happened in this attempt?” An **invariant** answers the more
powerful question “what must happen in every attempt?”

## State, move, target

A **state** is a complete description of the current position. A **legal move**
maps one state to another. A **target** is a desired state. A quantity $I$ is an
invariant if $I(\text{before})=I(\text{after})$ for every legal move. More generally, a
**monovariant** always increases or always decreases; it is useful for proving a
process terminates.

This language prevents a common error. An observation from five trials is not an
invariant until every kind of legal move has been checked.

### Worked example 1: ten cards

Ten cards begin face down. A move turns over exactly four distinct cards. Can
exactly one card finish face up?

Let $u$ be the number of face-up cards. Turning four cards does not necessarily
change $u$ by four: if $k$ selected cards were already up, the move changes it by
$(4-k)-k=4-2k$, an even number. Thus the parity of $u$ is invariant. It starts
even ($0$) and the target is odd ($1$), so the target is impossible.

Notice what the proof did not claim. The exact value of $u$ is not invariant,
and every even configuration is not automatically reachable. An obstruction is
often one-way: different invariant values prove impossibility; equal values only
say “this test does not forbid it.”

## Parity as arithmetic modulo 2

Two integers have the same **parity** when both are even or both are odd. Working
modulo 2 records only the remainder after division by 2. In that arithmetic,
$1+1=0$; changing two binary features has net change zero.

Place a counter on each of nine squares in a $3 \times 3$ grid. One move toggles all
three counters in a selected row. If $b$ is the number showing black, then $b$
changes by an odd number, not a fixed parity. But attach a sign $+1$ to white and
$-1$ to black and multiply all nine signs. Toggling three signs multiplies the
product by $(-1)^3=-1$, so the product alternates rather than stays fixed. If the
number of moves is also recorded, then

$J = (\text{product of cell signs}) \cdot (-1)^{\text{number of moves}}$

is invariant. Sometimes the missing quantity is the history.

## Weighted invariants

Simple counting can miss location. Number the squares of a strip $0,1,2,...$.
Suppose one move replaces counters at positions $a$ and $b$ by counters at
$a+1$ and $b-1$. The number of counters stays fixed, but so does the sum of their
positions because $(a+1)+(b-1)=a+b$. A proposed target with a different position
sum is impossible.

Weights may be negative, fractional, or taken modulo a number. The design rule
is to translate each move into an equation and choose weights that make the net
change zero.

### Worked example 2: the fifteen-puzzle shadow

Consider fifteen labelled tiles and one blank in a $4 \times 4$ frame. A legal move
slides a neighboring tile into the blank. The full reachability theorem needs a
careful permutation argument, but a useful shadow is this: flatten the numbered
tiles row by row and count **inversions**, pairs whose larger label occurs first.
On an odd-width board, a horizontal slide changes no numbered order and a
vertical slide moves one tile past an even number of numbered tiles, preserving
inversion parity. On a $4 \times 4$ board, number the blank's row from the bottom,
starting at $1$. A horizontal slide changes neither parity. A vertical slide
moves one tile past three numbered tiles, toggling inversion parity, and also
changes the blank-row parity. Consequently

\[
  \text{inversion count}+\text{blank row from the bottom}\pmod 2
\]

is invariant. In the conventional solved state its value is odd, so a position
is solvable only if that sum is odd. (Proving sufficiency requires the full
reachability argument.) This warning matters: importing the odd-width invariant
unchanged to a $4 \times 4$ board gives false conclusions.

### Worked example 3: location matters

Two counters begin at positions 1 and 5 on the nonnegative integer strip. A move
advances the first counter one place and moves the second one place left,
provided that it remains on the strip. The successive positions
$(1,5),(2,4),(3,3)$ show that the target $(3,3)$ is reachable. Counters may share
a position in this version of the puzzle; forbidding that would change the rules
and invalidate the final step. Every displayed position has position sum 6.

The target $(4,4)$ has sum 8, so no legal sequence reaches it. This proof does
not require a bound on how long a solver may try. The equation for a general
move excludes every possible length at once. Conversely, a target such as
$(0,6)$ also has sum 6, but it is unreachable under this directed rule because
the first coordinate never decreases. The conserved sum and the increasing
first coordinate provide different information. Even combining several useful
tests need not provide a complete classification unless that is proved.

## Monovariants and termination

Start with a positive integer $n$. If it is even, replace it by $n/2$; if it is
odd and greater than 1, replace it by $n-1$. The value strictly decreases while
remaining a positive integer, so the process must reach 1. “It seems to get
smaller” is insufficient in other processes; a monovariant must be well ordered
or bounded in the direction of travel.

Here “bounded” needs a qualification: bounded integer values cannot strictly
decrease forever, but bounded real values can. For example, repeatedly halving
1 gives positive numbers forever. A termination argument using integers works
because a decreasing sequence of nonnegative integers starting at $M$ can make
at most $M$ strict decreases. No comparable step bound follows merely from a
positive real lower bound.

### Worked example 4: sorting by a decreasing count

Take a list containing each integer from 1 to $n$ exactly once. If an adjacent
pair is out of increasing order, swap that pair. The inversion count is a
nonnegative integer. Swapping an adjacent inverted pair removes precisely their
own inversion. For a third entry, its position is either before both or after
both, so the total number of inversions involving that entry is unchanged.
Consequently the count decreases by exactly one.

If a list is not increasing, some adjacent pair is inverted: otherwise every
adjacent inequality points upward and transitivity makes the entire list
increasing. Thus the procedure cannot stop early. It terminates at the increasing
list after exactly the initial inversion count of swaps. There are only
$n(n-1)/2$ pairs, so this also gives a finite upper bound on the work. The same
count has two roles: modulo 2 it is a parity obstruction, while its full integer
value proves termination for this particular choice of moves.

For a finite board, the number of misplaced pieces can be a monovariant only if
every permitted step improves it. If some legal steps make it worse, it may
still guide a heuristic but does not prove termination.

## A dependable invariant workflow

1. Encode the entire state, including orientation and empty locations.
2. Compute the change caused by one general legal move.
3. Try count, parity, weighted sum, product, permutation sign, or coloring.
4. Check every move type, especially boundary cases.
5. Compare the initial and target values.
6. State the logical strength: obstruction, termination proof, or full
   classification.

## Common errors

- **Checking examples instead of moves.** A thousand random trials cannot prove
  that an untested move preserves a quantity.
- **Losing information too early.** Total count cannot detect where pieces sit;
  introduce position weights or colours.
- **Claiming sufficiency.** Matching parity does not construct a path.
- **Using a decreasing real number carelessly.** $1,1/2,1/3,...$ decreases
  forever. Integer-valued and nonnegative is a safer termination certificate.

## Exercises with hints and complete solutions

### Exercise 1: seventeen coins {#invariants-parity-ex-1}

Seventeen coins show heads. A move flips exactly two coins. Can all coins show tails?

<details><summary>Hint 1</summary> Count heads rather than moves.
</details>
<details><summary>Hint 2</summary> List the changes when the selected coins contain zero, one or two heads.
</details>
<details><summary>Solution</summary> The number of heads changes by $2$, $0$ or $-2$. Its parity stays
odd, whereas zero heads is even. The target is impossible.
</details>
### Exercise 2: a token on a grid {#invariants-parity-ex-2}

A token starts at $(0,0)$. Each move changes exactly one coordinate by $2$.
Can it reach $(5,8)$?

<details><summary>Hint 1</summary> Keep two parity records.
</details>
<details><summary>Hint 2</summary> What can happen to the first coordinate modulo 2?
</details>
<details><summary>Solution</summary> Both coordinates remain even. Changing either by 2 preserves its
parity, and the target has an odd first coordinate. Therefore it is unreachable.
</details>
### Exercise 3: six glasses {#invariants-parity-ex-3}

Six glasses stand in a row, first three full and last three empty. Make full and
empty alternate by moving the contents of only one glass.

<details><summary>Hint 1</summary> Moving contents changes two occupancy states.
</details>
<details><summary>Hint 2</summary> Which full glass occupies a position that should become empty?
</details>
<details><summary>Solution</summary> Pour the second glass into the fifth. The states become full,
empty, full, empty, full, empty. The rule concerns moving one glass's contents;
requiring the solver to touch only one physical glass would be a different rule.
</details>
### Exercise 4: audit a claimed invariant {#invariants-parity-ex-4}

Integers are written on a board. A move selects $a,b$ and replaces them by
$a+b,a-b$. Audit the claim that an initially even total stays even. Give an
extra restriction on every legal move that would make it true.

<details><summary>Hint 1</summary> The selected pair's new contribution is $2a$.
</details>
<details><summary>Hint 2</summary> Try selecting an odd and an even entry while leaving another entry alone.
</details>
<details><summary>Solution</summary> The total changes by $2a-(a+b)=a-b$, which can be odd. Starting
with $[1,0,1]$, replace the first two entries to obtain $[1,1,1]$; an even total
2 becomes the odd total 3. Under the modified rule that every selected pair has
even sum, $a,b$ have the same parity, so $a-b$ is even and total parity really
is invariant. Checking pairs $[1,1]$ or $[1,3]$ alone would miss the defect.
</details>
### Exercise 5: return by adjacent swaps {#invariants-parity-ex-5}

Prove that returning a permutation to its original order using adjacent swaps
requires an even number of swaps.

<details><summary>Hint 1</summary> Count inversions modulo 2.
</details>
<details><summary>Hint 2</summary> Entries outside an adjacent pair do not change their combined contribution.
</details>
<details><summary>Solution</summary> An adjacent swap changes precisely the swapped pair's inversion
status, so it toggles inversion parity. Equal starting and ending permutations
have equal parity. The number of toggles must therefore be even. This holds
even if the original order was not increasing.
</details>
### Exercise 6: changing the move size {#invariants-parity-ex-6}

Four cards $A,B,C,D$ start down. A move flips exactly three. Can exactly $A$ end up?

<details><summary>Hint 1</summary> A move of odd size need not preserve the earlier parity.
</details>
<details><summary>Hint 2</summary> Try the three triples that contain $A$.
</details>
<details><summary>Solution</summary> Flip $ABC$, then $ABD$, then $ACD$. Card $A$ flips three times;
each other card flips twice. Exactly $A$ is up. An invariant must be checked
again whenever the move rule changes.
</details>
### Exercise 7: a weighted certificate {#invariants-parity-ex-7}

For the directed counter rule in worked example 3, decide reachability from
$(1,5)$ to $(3,3)$ and to $(4,4)$.

<details><summary>Hint 1</summary> Compare position sums first.
</details>
<details><summary>Hint 2</summary> Supply actual moves for a reachable target.
</details>
<details><summary>Solution</summary> The legal sequence $(1,5),(2,4),(3,3)$ reaches the first target.
Its coordinates remain nonnegative. The second target has sum 8, while every
reachable state has sum 6, so the second is impossible.
</details>
### Exercise 8: a false termination argument {#invariants-parity-ex-8}

Starting at 1, repeatedly replace a positive rational number $x$ by $x/2$.
Explain why strict decrease and a lower bound do not imply termination.

<details><summary>Hint 1</summary> Write the value after $k$ steps.
</details>
<details><summary>Hint 2</summary> Does any finite power of 2 have reciprocal zero?
</details>
<details><summary>Solution</summary> After $k$ steps the value is $2^{-k}>0$. There is always another
legal step, despite the lower bound zero. The values are rational, so the
nonnegative-integer termination argument does not apply.
</details>
### Exercise 9: sort with a count {#invariants-parity-ex-9}

Sort $[3,1,2]$ by swapping adjacent inverted pairs, and prove the number of swaps
in your procedure is minimal among all adjacent-swap procedures.

<details><summary>Hint 1</summary> Count its initial inversions.
</details>
<details><summary>Hint 2</summary> Every adjacent swap changes the count by just one.
</details>
<details><summary>Solution</summary> The inversions are $(3,1)$ and $(3,2)$. Use
$[3,1,2]\to[1,3,2]\to[1,2,3]$. Any route to inversion count zero must remove
a net two inversions, and one adjacent swap changes the count by at most one.
Thus at least two swaps are necessary, and the displayed route is optimal.
</details>
### Exercise 10: equal parity is not enough {#invariants-parity-ex-10}

Four cards begin down. The only legal move flips cards 1 and 2 together.
Is the target with exactly cards 3 and 4 up reachable?

<details><summary>Hint 1</summary> Both the initial and target up-counts are even.
</details>
<details><summary>Hint 2</summary> Which individual cards can ever change?
</details>
<details><summary>Solution</summary> Cards 3 and 4 remain down under every move. Their individual
states are invariants, so the target is impossible. Total parity agrees but
discards the location information needed to decide this puzzle.
</details>
## Project: invent an invariant

Design a puzzle with six binary cards and two distinct move types. Supply a
reachable target and an unreachable target. Prove the latter with an invariant,
and give an explicit move list for the former. Exchange only the rules and
targets with a partner; if they interpret a rule differently, revise the state
description rather than blaming the solver.

## Summary

Specify states and moves before selecting an invariant. A general move
calculation proves preservation; a mismatch proves impossibility. Matching
values alone does not prove reachability. A strictly decreasing nonnegative
integer proves termination, and the inversion count shows how one quantity can
provide both a parity obstruction and a quantitative algorithmic bound.
