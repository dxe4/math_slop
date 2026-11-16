
# Partizan Games

In **Impartial Games** we studied positions where both players have exactly the same legal moves. The Sprague–Grundy theory gave us a complete analysis: every impartial game is equivalent to a single Nim heap, and disjoint sums reduce to nim addition. But many of the most interesting games are **partizan**: the two players, traditionally called **Left** and **Right**, have different options. Chess, Go, Domineering, and Hackenbush are all partizan. This chapter introduces the basics of partizan combinatorial game theory and shows why the impartial toolbox is no longer sufficient.

## 3.1 Left and Right

In a partizan game, a position is specified by two sets of options: the positions Left can move to, and the positions Right can move to. We write

$$G = \{ G^{L} \mid G^{R} \},$$

where $G^{L}$ ranges over Left's options and $G^{R}$ ranges over Right's options. Either set may be empty. If both are empty, the game is terminal and the player to move loses.

For example, in Domineering (which we study in Chapter 8), Left places a vertical domino and Right places a horizontal domino. From the same board position, Left and Right face different move sets.

## 3.2 Outcome classes

Unlike impartial games, which have only two outcome classes (P and N), partizan games have four:

- **L** (Left wins no matter who moves first);
- **R** (Right wins no matter who moves first);
- **N** (the **Next** player to move wins);
- **P** (the **Previous** player wins, so the next player loses).

These classes are determined by playing the game twice: once with Left moving first, once with Right moving first. For example, a position is N if Left wins moving first and Right wins moving first.

In an impartial game, only N and P can occur, because the first-player advantage (or lack thereof) does not depend on identity. In a partizan game, all four classes are possible.

## 3.3 Numbers

Some partizan games behave like ordinary numbers. The simplest example is a **blue-red Hackenbush** stalk: a vertical line of edges, each coloured blue (Left may cut) or red (Right may cut). When an edge is cut, everything above it falls away.

Consider a stalk with one blue edge. Left can cut it and win; Right has no move. This game is denoted $1 = \{ 0 \mid \}$ and is an L-position.

Consider a stalk with one red edge. Right can cut it and win; Left has no move. This game is denoted $-1 = \{ \mid 0 \}$ and is an R-position.

Order matters in a mixed stalk. A bottom blue edge with a top red edge has form $\{0\mid 1\}=1/2$: Left may cut the supporting blue edge to leave $0$, while Right may cut the red edge to leave the blue edge, worth $1$. Reversing the colours gives $\{-1\mid0\}=-1/2$. Opposite colours do not simply cancel.

In general, a Hackenbush stalk with $n$ blue edges and no red edges is the integer $n$. A stalk with $n$ red edges and no blue edges is $-n$. Mixed stalks can represent dyadic rationals: fractions whose denominator is a power of $2$.

## 3.4 The simplest form theorem

Every short partizan game (finite, no draws, no repetitions) has a unique **simplest form**, obtained by repeatedly removing **dominated** options and bypassing **reversible** ones. Two games are equal if and only if they have the same simplest form.

An option $G^{L}_1$ is **dominated** by $G^{L}_2$ if $G^{L}_2 \geq G^{L}_1$ in the game value ordering. Dominated options can be discarded without changing the value of $G$.

An option $G^{L}$ is **reversible** if Right has a response $G^{LR}$ with $G^{LR} \leq G$. In that case Left's move to $G^{L}$ can be bypassed by replacing it with the Left options of the reversing response $G^{LR}$. Dually, a reversible Right option is replaced by the Right options of its reversing Left response. Proving the bypass rule requires the game-order comparison; merely inserting the reversing replies would change the option type.

These simplification rules are powerful but technical. For our purposes, the key insight is that partizan games have a rich algebraic structure: they can be added, negated, and compared, and the comparison respects the outcome classes.

## 3.5 Sums of partizan games

The disjoint sum of two partizan games is defined exactly as for impartial games: a player chooses one component and makes a legal move there. The other component is untouched.

In the standard game order, a short game is an L-position exactly when it is greater than $0$. Thus if $G$ and $H$ are L, then $G>0$ and $H>0$; translation invariance of the order gives $G+H>H>0$, so $G+H$ is L. Dually, the sum of two R-positions is R. Beyond closures such as these, component outcome classes alone do not determine the sum; full game values or option structures may be needed. There is no single numerical invariant like the Grundy number that captures all the information.

## 3.6 When symmetry breaks

In impartial games, the symmetry strategy "mirror the opponent's move in the other component" works whenever the two components are equal. In partizan games, this can fail because Left and Right have different moves.

Consider two copies of the game $1 = \{ 0 \mid \}$. Their sum is $2 = \{ 1 \mid \}$, which is still an L-position. If Right moves first in one copy, there is no move for Right to make, so Right loses immediately. The symmetry argument is vacuous here.

The game $G=\{0\mid1\}$ is the number $1/2$, hence an L-position: if Left starts, moving to $0$ wins; if Right starts, moving to $1$ leaves Left the move to $0$, after which Right has no move. Consequently $G+G=1$, not $0$.

A genuine switch has its Left stop larger than its Right stop. For example, $H=\{1\mid-1\}$ is an N-position: Left can move to the positive number $1$, while Right can move to the negative number $-1$. Such a game is hot and is not a number, because a number requires every Left option to be less than every Right option.

## 3.7 Common errors

**Error: applying the Sprague–Grundy theorem to partizan games.** The mex construction and the nim-sum formula depend on both players having the same options. In a partizan game, Left's options and Right's options are different sets, and mex is undefined.

**Error: confusing $-G$ with a second copy of $G$.** Negation swaps Left and Right options recursively, and standard short normal-play game theory gives $G+(-G)=0$ by a copycat response. A second copy is generally different: $1+1=2$.

**Error: confusing numbers with general games.** A positive number is an L-position, a negative number is an R-position, and zero is P. Hot or fuzzy games such as $\{1\mid-1\}$ are not numbers, so a single real-valued score cannot describe their move urgency.

**Error: ignoring the temperature of a game.** Some games have **hot** positions where the player to move gains a large advantage. The numerical value alone does not capture this urgency. Temperature theory, beyond the scope of this chapter, measures how much a player gains by moving first.

## An exact outcome recursion

**Definition 6.1 (Short game form and birthday).** A short game form has finite Left and Right option sets, and every chain of successive options terminates. Its birthday is zero for the empty form and otherwise one plus the largest birthday of an option. A form specifies moves; its value records its behaviour under the standard equivalence of short normal-play games.

The introductory examples Chess and Go identify unequal player roles. Ordinary rules may permit draws, repetitions or passes, so those games are not automatically short normal-play games of the form studied here. The present recursion applies after a terminating no-draw model is specified. It must not silently replace another game's actual rules.

**Theorem 6.2 (Two Boolean questions determine the outcome).** Let $a(G)$ mean that Left wins when Left starts, and $b(G)$ mean that Left wins when Right starts. Then
\[
a(G)=\bigvee_{H\in G^L}b(H),\qquad
b(G)=\bigwedge_{K\in G^R}a(K).
\]
An empty disjunction is false and an empty conjunction true. Pairs $(a,b)$ are $(1,1)$ for L, $(0,0)$ for R, $(1,0)$ for N and $(0,1)$ for P.

*Proof.* On Left's turn, Left can choose a winning follower exactly when some Left option is winning for Left with Right to move. Without a move, Left loses. On Right's turn, Left wins exactly when every Right choice leaves Left a winning position with Left to move. Right chooses against Left's interests. If Right has no move, Right loses and Left wins. Induction on birthday justifies the previously classified followers and all four outcome pairs. ∎

The quantifiers differ because both predicates ask whether Left wins. If both instead asked whether the current player wins, corresponding negations would be needed. Mixing these conventions is a common source of incorrect recursion.

**Worked example (All four outcome pairs).** At zero neither player can move, so $(a,b)=(0,1)$ and the class is P. At $1=\{0\mid\}$, Left moves to zero and Right has no move, giving $(1,1)$ and L. At $-1=\{\mid0\}$, Left has no move and Right moves to zero, giving $(0,0)$ and R. At $\ast=\{0\mid0\}$, either starter leaves zero, giving $(1,0)$ and N.

These calculations establish the four classes directly from legal options. They do not require assuming that all game values are numerical. In particular, star has a first-player advantage rather than an advantage attached to the identity Left or Right.

**Worked example (An L-position need not be a number).** Consider $1+\ast$. If Left starts, move in star and leave $1$ with Right to move; Right has no move. If Right starts, Right's only move is in star, leaving $1$ with Left to move, and Left moves to zero and wins. Thus the sum is L.

Its value is nevertheless not an ordinary number. Subtracting one leaves star, which is fuzzy with zero rather than positive, negative or zero. If the original value were a number, subtracting one would still be a number, a contradiction. Favorable outcome for Left therefore does not assert membership in the numerical subclass. A complete value describes more than the winner when played alone.

**Worked example (A reversible detour).** Let $J=\{\ast\mid\}$. Left starting must move to star, after which Right moves to zero and wins. Right starting has no move and loses. Thus $J$ is P. In the standard short-game order a P-game has value zero. The Left move to star is reversible by Right's response to zero; bypassing it leaves the empty form.

The displayed form has a nonnumeric option, but simplifies to a number. Therefore the condition that all written options are numbers cannot characterize every form equal to a number. It is a sufficient construction hypothesis for the elementary number theorem used for finite stalks. Distinguishing forms and values prevents an incorrect application of simplicity.

## Order, number forms and simplification

The finite comparison rule is
\[
G\le H\Longleftrightarrow
\text{no }G^L\text{ satisfies }H\le G^L
\text{ and no }H^R\text{ satisfies }H^R\le G.
\]
This is recursive: every comparison on the right replaces at least one game by an earlier follower. Equality means both inequalities. Games may also be incomparable. Star and zero provide the smallest example, so ordinary numerical ordering is not a total order on all games.

A **number form** is constructed recursively with numbers as options and every Left option strictly below every Right option. An empty side imposes no bound. Its value is the earliest-born number strictly between those numerical bounds. Finite number construction produces dyadic rationals. The canonical-form theorem in Section 3.4 is a further structural result, requiring comparison theory and repeated domination and reversibility analysis. It is not proved merely by calculating outcomes.

**Scope correction for the stalk simplicity rule.** Strict numerical bounds on arbitrary game options are insufficient without the number-form hypothesis. In $J=\{\ast\mid\}$, one is strictly above its only Left option and zero is not. Yet the reversible-detour calculation gives value zero. Thus the elementary strict-between theorem used in this route requires numerical options. The Hackenbush chapter states and proves that finite-number version explicitly.

Dominated options must also be compared on the correct side. Left prefers a larger option, whereas Right prefers a smaller one. For $\{0,1/2\mid1\}$, zero is a dominated Left choice, leaving $\{1/2\mid1\}$. In $\{0\mid1/2,1\}$, one is a dominated Right choice, leaving $\{0\mid1/2\}$. The resulting values differ, even though the same three numbers appeared in the displays.

Reversibility is not an instruction to append the opponent's replies to the same option set. A Left move followed by a reversing Right move is bypassed using Left options of that response. The option types matter because a form describes alternating legal moves. An incorrect bypass can preserve a suggestive picture while changing the game.

### Why negation, rather than duplication, cancels

Negation swaps Left and Right options recursively. After a move in $G$, the opponent can make the corresponding opposite-player move in $-G$, restoring a sum $H+(-H)$. The response is legal because the player roles were exchanged. Every response shortens the finite position, so the player moving first in a cancellation pair eventually loses.

This proves the second-player outcome of the pair, and standard short-game comparison gives the identity $G+(-G)=0$. In $G+G$ the corresponding response need not belong to the other player's option set. Two blue edges make this failure explicit. Symmetry of a drawing is therefore different from the color-reversing correspondence required by cancellation.

For an impartial game, both players do have the same options, so its negative is equal to itself. That is why identical impartial components cancel under normal play while identical general partizan components need not. The disjoint-sum operation is shared, but its algebra depends on the option structure.

The number and canonical-form continuation is treated in Siegel's *Combinatorial Game Theory*, published by the AMS; the [publisher's book materials](https://www.ams.org/books/gsm/146/gsm146-endmatter.pdf) provide a reference route. Here the exact outcome recursion and finite examples are established directly, without treating a few numerical examples as a proof of canonical uniqueness.

## 3.8 Practice exercises

<a id="partizan-games-ex-1"></a>
### Exercise 3.1

Show that the game $\{ 0 \mid \}$ is an L-position.


<details><summary>Hint 1</summary>

Analyze both possible starting identities.

</details>

<details><summary>Hint 2</summary>

Left can move to zero, whereas Right has no move.

</details>

<details><summary>Solution</summary>

**Solution.** If Left moves first, Left moves to $0$ (terminal), and Right has no move, so Left wins. If Right moves first, Right has no legal move and loses immediately. Therefore Left wins no matter who starts. $\square$

</details>

<a id="partizan-games-ex-2"></a>
### Exercise 3.2

Let $G = \{ 0 \mid 0 \}$. Determine its outcome class.


<details><summary>Hint 1</summary>

Both players have the same single option.

</details>

<details><summary>Hint 2</summary>

Whoever starts hands a terminal game to the opponent.

</details>

<details><summary>Solution</summary>

**Solution.** If Left moves first, Left moves to $0$, and Right has no move, so Left wins. If Right moves first, Right moves to $0$, and Left has no move, so Right wins. Therefore the next player wins: $G$ is N. This game is called $\ast$ (star) and is the simplest nonzero impartial game. $\square$

</details>

<a id="partizan-games-ex-3"></a>
### Exercise 3.3

Show that the outcome classes of two components do not by themselves determine the outcome of their sum. In particular, give an L-position $G$ and R-position $H$ for which $G+H$ is respectively L, P, and R.


<details><summary>Hint 1</summary>

Use positive and negative integer games of different magnitudes.

</details>

<details><summary>Hint 2</summary>

Choose positive, zero and negative sums while preserving the component outcome classes.

</details>

<details><summary>Solution</summary>

**Solution.** Use integer games. The games $1$ and $2$ are L; $-1$ and $-2$ are R. Then $2+(-1)=1$ is L, $1+(-1)=0$ is P, and $1+(-2)=-1$ is R. Thus even the pair of component classes $(\mathrm L,\mathrm R)$ does not determine the sum's class. $\square$

</details>

<a id="partizan-games-ex-4"></a>
### Exercise 3.4

Compute the value of a blue-red Hackenbush stalk with two blue edges and one red edge, from bottom to top: blue, red, blue.


<details><summary>Hint 1</summary>

List the remaining stalk after every legal cut.

</details>

<details><summary>Hint 2</summary>

The Left options are zero and one half, and Right's option is one.

</details>

<details><summary>Solution</summary>

**Solution.** Cutting the bottom blue edge leaves $0$; cutting the top blue edge leaves the bottom blue-red stalk, worth $1/2$. Right can cut the middle red edge, leaving the bottom blue edge, worth $1$. Thus the game is $\{0,1/2\mid1\}=\{1/2\mid1\}=3/4$. $\square$

</details>

<a id="partizan-games-ex-5"></a>
### Exercise 3.5

Explain why Domineering is partizan, not impartial.


<details><summary>Hint 1</summary>

Orientation is part of a legal placement.

</details>

<details><summary>Hint 2</summary>

A vertical two-cell strip gives a move only to Left.

</details>

<details><summary>Solution</summary>

**Solution.** In Domineering, Left places a $2 \times 1$ vertical domino and Right places a $1 \times 2$ horizontal domino. From a given board position, the set of legal vertical placements is generally different from the set of legal horizontal placements. Therefore the legal moves depend on which player moves, violating the definition of impartiality. $\square$

</details>

<a id="partizan-games-ex-6"></a>
### Exercise 3.6

Determine the outcome of $\{-1\mid1\}$ directly for both starters.

<details><summary>Hint 1</summary>

The starter must move to the option on that player's side.

</details>
<details><summary>Hint 2</summary>

A negative integer favors Right and a positive integer favors Left, even when the favored player moves second.

</details>
<details><summary>Solution</summary>

Left starts by moving to minus one, after which Right moves to zero and wins. Right starts by moving to one, after which Left moves to zero and wins. Hence the next player loses and the outcome is P. The simplest number between minus one and one is zero, agreeing with the direct calculation.

</details>

<a id="partizan-games-ex-7"></a>
### Exercise 3.7

Use the Boolean recursion to classify $\{1\mid0\}$ and $\{0\mid-1\}$.

<details><summary>Hint 1</summary>

Use the known Boolean pairs for one, zero and minus one.

</details>
<details><summary>Hint 2</summary>

Compute the first pair as $(b(1),a(0))$.

</details>
<details><summary>Solution</summary>

The first pair is $(b(1),a(0))=(1,0)$, so $\{1\mid0\}$ is N. The second is $(b(0),a(-1))=(1,0)$, also N. Both starters have winning moves in each game. Equal outcomes do not assert equality of full values, because the behaviour in sums may contain additional information.

</details>

<a id="partizan-games-ex-8"></a>
### Exercise 3.8

Explain the empty-conjunction and empty-disjunction values in the outcome recursion.

<details><summary>Hint 1</summary>

Both predicates ask whether Left wins.

</details>
<details><summary>Hint 2</summary>

Apply normal play to the identity of the player unable to move.

</details>
<details><summary>Solution</summary>

If Right has no move, Right loses immediately, so Left wins and the empty conjunction defining $b$ is true. If Left has no move, Left loses, so the empty disjunction defining $a$ is false. Swapping either value would misclassify the terminal game and then positions leading to it.

</details>

<a id="partizan-games-ex-9"></a>
### Exercise 3.9

Show directly that $\ast+\ast$ is P and contrast it with $1+1$.

<details><summary>Hint 1</summary>

A move in star removes that component.

</details>
<details><summary>Hint 2</summary>

The second player removes the remaining star, whereas Right cannot mirror a blue-edge move.

</details>
<details><summary>Solution</summary>

The starter removes one star and the second player removes the other, leaving the starter unable to move. Thus the sum is P. In $1+1$, Right never has a move and Left wins for either starter. Identical-component cancellation follows the impartial option symmetry in the first example and fails for the partizan blue-edge components.

</details>

<a id="partizan-games-ex-10"></a>
### Exercise 3.10

Explain why $J=\{\ast\mid\}$ has a nonnumeric option but a numerical value.

<details><summary>Hint 1</summary>

Analyze play for both starting identities.

</details>
<details><summary>Hint 2</summary>

Right's response from star reverses the Left option to zero.

</details>
<details><summary>Solution</summary>

Left starting moves to star and loses when Right moves to zero. Right starting has no move and loses. Thus $J$ is P and equals zero in the short-game order. Its displayed option is star, which is not a number. Bypassing that reversible option gives the empty zero form, so numerical options are a construction hypothesis rather than a property of every equivalent representation.

</details>

## 3.9 Looking forward

Partizan games open the door to a rich algebra of numbers, infinitesimals, and hot games. The earlier Chapter 4, **Sprague–Grundy Theory**, proves the impartial-game theorem in full generality, including its application to sums of more than two games and to games that decompose into independent components during play. In the next chapter, Chapter 7, **Hackenbush**, we use the partizan perspective and Hackenbush stalks to construct surreal numbers and explore the boundary between numbers and games.


<a id="partizan-games-summary"></a>
## Summary

Partizan outcomes require two starting-player questions. Their existential/universal recursion is exact for terminating normal play, while values retain additional information about sums. Number forms require separated numerical options; arbitrary options need the full comparison rules. Negation swaps roles and cancels a game, whereas identical duplication need not. The Hackenbush chapter applies these distinctions to finite coloured stalks.

