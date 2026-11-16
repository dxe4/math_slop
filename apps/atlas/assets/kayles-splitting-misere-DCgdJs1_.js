var e=`---
parent_id: book-winning-with-invariants
chapter_id: kayles-splitting-misere
title: "Kayles, Splitting, and Misère Play"
level: undergraduate
license: CC BY-SA 4.0
---

# Kayles, Splitting, and Misère Play

A move can change the number of components without changing the fundamental rule that only one component is played in each turn. Kayles makes this visible: removing a pin in the middle of a row produces two separated rows. Their lengths must be combined by the Sprague–Grundy theorem, rather than added as though the missing gap had disappeared.

This chapter uses [Mex](impartial-games-and-mex.md), [Nim](nim-and-nim-sum.md), and the [sum theorem](sprague-grundy-theory.md). It also examines misère play, where the player making the last move loses. The normal-play theorem must not be transferred unchanged. Misère Nim admits a separate elementary classification; general misère Kayles needs a deeper solved theory.

## 1. The exact row game

**Definition 5.1 (Row Kayles).** A position consists of finitely many separated rows of standing pins. A move removes either one standing pin or two adjacent pins within one row. Pins on opposite sides of a gap are not adjacent. Under normal play, the player with no legal move loses.

Every move reduces the total number of standing pins by one or two, so the reachable game is finite and acyclic. A row of length zero contributes no legal move. Distinct separated rows are independent components: changing one does not alter the legal moves within another.

Write $K(n)$ for the normal-play Grundy value of one row of length $n$, with $K(0)=0$. Removing a single pin at zero-based position $j$ leaves rows of lengths $j$ and $n-1-j$. Removing the adjacent pair at positions $j,j+1$ leaves lengths $j$ and $n-2-j$. Therefore
$$
K(n)=\\operatorname{mex}\\left(
\\{K(j)\\oplus K(n-1-j):0\\le j<n\\}
\\cup
\\{K(j)\\oplus K(n-2-j):0\\le j<n-1\\}
\\right).
$$

**Proposition 5.2 (Why the recurrence is exact).** The displayed sets contain all and only the option values of a length-$n$ row.

**Proof.** Every legal move has exactly one of the two forms in the definition. Its remaining rows have the stated lengths, and the sum theorem makes their value the XOR of the two row values. Conversely every permitted index specifies an actual single-pin or adjacent-pair removal. All remaining lengths are smaller than $n$, so their values are already available in induction. Duplicate values may be discarded before taking mex. ∎

The second set is empty for $n=1$. There is no negative-length row to evaluate. An end removal is included through a zero-length component, which gives the same XOR as the other remaining row alone.

## 2. Calculate options before taking mex

**Worked example 5.3 (Four and five pins).** The initial values are $K(0)=0,K(1)=1,K(2)=2,K(3)=3$. For four pins, removing one pin gives splits $(0,3),(1,2),(2,1),(3,0)$, all of value three. Removing two adjacent pins gives $(0,2),(1,1),(2,0)$, of values two, zero, two. The option-value set is therefore $\\{0,2,3\\}$, whose mex is one: $K(4)=1$.

For five pins, single removals give value list $1,2,0,2,1$, and adjacent-pair removals give $3,3,3,3$. Their union is $\\{0,1,2,3\\}$, so $K(5)=4$. In particular the value one that is absent from the four-pin option set must not be inserted merely because an invalid removal calculation happens to produce it.

**Worked example 5.4 (Six pins with the two move types separated).** Using the preceding values, the six single removals produce values $4,0,1,1,0,4$. The five adjacent-pair removals produce $1,2,0,2,1$. Thus the complete option-value set is $\\{0,1,2,4\\}$, giving $K(6)=3$. The physical remaining-pin totals are five or four, but the option values vary because the splits differ. Keeping only the total number of remaining pins would erase the information required by the sum theorem.

This exact listing also explains the correction to the earlier exercise key retained in the [Sprague–Grundy reading](sprague-grundy-theory.md). Some terms in that earlier key did not correspond to legal remaining row lengths. Its corrected option sets, rather than the erroneous displayed listings, justify the small values used here.

**Worked example 5.5 (Two rows with unequal lengths).** A position consisting of rows of lengths four and one has value $K(4)\\oplus K(1)=1\\oplus1=0$, so it is P. A single row of length five instead has value four and is N. Both positions contain five pins. The gap changes the legal adjacency relation, and therefore changes the game. It is not a decorative mark that can be removed when encoding a position.

## 3. A symmetry strategy for one row

**Theorem 5.6 (A nonempty single row is winning).** Every single row of positive length is N in normal-play row Kayles.

**Proof.** If the length is odd, remove the central pin. If the length is even, remove the two central adjacent pins. The remaining rows have equal length. Their Grundy values therefore cancel, making a P-position by the sum theorem. Alternatively, after every opponent move in one row, make the identical removal in the other. The rows are separated, so the reply is legal and cannot overlap the preceding move. Total pins decrease, and the responding player eventually makes the final move. ∎

For seven pins the opening removes the fourth pin, leaving lengths three and three. For eight pins it removes the fourth and fifth, again leaving three and three. This proves a winning strategy without identifying either larger row's exact Grundy value. It does not solve a general sum of unequal rows: the two components in Worked example 5.5 are losing together although each row separately is winning.

The theorem and the recurrence answer different questions. Symmetry proves that $K(n)\\ne0$ for every positive $n$. Mex determines which nonzero value occurs, which matters when that row is combined with another game. A numerical value is useful composition data rather than a measurement of how strongly a row is winning.

## 4. Changing who wins at the end

**Definition 5.7 (Misère convention).** In a finite game under misère play, making the last move loses. Equivalently, a player with no legal move wins. Thus a terminal position is N, rather than P.

For nonterminal positions the same choice logic remains: a move to a P-position is winning, and a position whose every move reaches N is losing. Backward induction still applies because termination has not changed. What changes is its base data, so normal-play Grundy zeroes and the XOR classification need not describe the result.

A lone standing pin is N in normal Kayles and P in misère Kayles: its only move makes the last move. Two separate single pins are P in normal play but N in misère play. These smallest examples already forbid the unchanged zero-XOR rule.

## 5. A separate complete theorem for misère Nim

Ignore empty heaps and let $t$ be the number of unit heaps. A large heap means one of size at least two.

**Theorem 5.8 (Misère Nim).** If no large heap remains, the position is P exactly when $t$ is odd. If at least one large heap remains, the position is P exactly when its ordinary Nim XOR is zero. The empty position is N under the stated terminal convention.

**Proof.** Consider the proposed P-classes. From an odd number of unit heaps, every move removes one and leaves an even number, outside that class. A zero-XOR position with a large heap must have at least two large heaps: one integer at least two XORed with unit heaps cannot become zero, because the unit heaps affect only its units bit. A move changes one heap and makes XOR nonzero. At least one large heap remains, so the result is outside the proposed P-classes.

Now consider a nonterminal position outside the classes. An even positive number of unit heaps can remove one to leave an odd number. With exactly one large heap, reduce it to zero if $t$ is odd and to one if $t$ is even. Both are legal reductions and leave an odd number of unit heaps. With at least two large heaps and nonzero XOR, use the normal Nim move to zero XOR. The result cannot have exactly one large heap, by the earlier bit observation, and cannot have no large heap because only one of at least two was changed. It therefore belongs to the zero-XOR P-class with large heaps. The empty position is the separately specified N terminal. These verified transitions establish the classification by induction on total counters. ∎

**Worked example 5.9 (Choose zero or one deliberately).** In $(4,1,1)$ there is one large heap and two unit heaps. Reduce the large heap to one, leaving three unit heaps, a misère P-position. Removing the large heap entirely would leave two unit heaps and give the opponent a win. In $(4,1,1,1)$, instead remove the large heap entirely to leave three units. The choice depends on the parity of the other unit heaps, not on an instruction always to leave one.

With at least two large heaps, normal XOR strategy applies until the position approaches this boundary. For example $(2,2)$ has zero XOR and is misère P. If the opponent removes one heap completely, the remaining heap two is answered by reducing it to one. The opponent must then take the last counter and lose. The proof accounts for the transition; an unqualified instruction to copy normal play would not explain it.

## 6. What deeper misère theory changes

Misère Nim is special. Normal-play values alone do not universally classify misère sums. There is a more general way to state which positions can be substituted for one another.

Fix a collection of positions closed under disjoint sum, such as all finite sums of Kayles rows. Declare $G\\sim H$ when, for every allowed context $X$, the misère outcomes of $G+X$ and $H+X$ agree. Equality of these observations is reflexive, symmetric, and transitive. It is also compatible with adding another allowed position $Y$: the test context $Y+X$ is still allowed, so $G+Y\\sim H+Y$. Consequently the equivalence classes can be added consistently.

That observation motivates a misère quotient. It does not establish that the classes are ordinary integers, that every class has an inverse, or that XOR is the addition rule. Producing a complete quotient for a specific ruleset is a further mathematical achievement.

Misère row Kayles has a known solution. Plambeck's primary account, cited below, presents the Sibert–Conway analysis and its quotient description. This chapter imports that solved status without reproducing the quotient's full calculation. It therefore treats the problem as a deeper continuation, not an open question.

## 7. Periods require a theorem

A finite prefix of $K(n)$ is useful for checking option bookkeeping and testing proposed patterns. It is not a proof of a period. The fixed-window argument for finite subtraction sets does not transfer directly to the splitting recurrence, whose options involve many pairs of smaller lengths. The retained Sprague–Grundy reading gives a specific cited normal-play periodicity continuation with its range. That claim concerns precisely the single-pin/adjacent-pair row rules, and says nothing automatically about a differently named Kayles variant or misère play.

When checking a proposed recurrence, first verify the legal removals and the resulting component lengths. Then calculate XORs, discard duplicate values, and find the smallest missing nonnegative integer. A mistake in any one of those steps can produce an apparently plausible sequence. Mathematical rules and exact examples come before a guessed large-scale pattern.

## Exercises

### Exercise 5.1
<a id="kayles-splitting-misere-ex-1"></a>

Derive the option rows after removing one pin or two adjacent pins from a length-$n$ row.

<details>
<summary>Hint 1</summary>

**Hint.** Name the first removed index $j$ starting at zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count pins strictly to its left and strictly beyond the removed block.

</details>

<details>
<summary>Solution</summary>

**Solution.** One removal leaves $j$ pins before the removed pin and $n-1-j$ after it, for $0\\le j<n$. An adjacent-pair removal starts at $j$ and leaves $j,n-2-j$, for $0\\le j<n-1$. The zero-length cases describe end removals. Each legal move is represented and every allowed index is legal, which justifies the two sets in the recurrence.

</details>

### Exercise 5.2
<a id="kayles-splitting-misere-ex-2"></a>

Compute $K(3)$, listing the single-pin and adjacent-pair option values separately.

<details>
<summary>Hint 1</summary>

**Hint.** Use $K(0)=0,K(1)=1,K(2)=2$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The central single removal leaves two unit rows.

</details>

<details>
<summary>Solution</summary>

**Solution.** Single removals leave row pairs $(0,2),(1,1),(2,0)$, giving values $2,0,2$. Adjacent-pair removals leave $(0,1),(1,0)$, both of value one. The union is $\\{0,1,2\\}$, so $K(3)=3$. In particular the zero option comes from $1\\oplus1$, not from removing all three pins in one move.

</details>

### Exercise 5.3
<a id="kayles-splitting-misere-ex-3"></a>

Explain why a length-four row has value one rather than four.

<details>
<summary>Hint 1</summary>

**Hint.** Use the complete option sets in Worked example5.3.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** No legal option has value one, while an option of value zero exists.

</details>

<details>
<summary>Solution</summary>

**Solution.** Single removals give value three and adjacent-pair removals give two or zero. Thus the option-value set is exactly $\\{0,2,3\\}$. Its least missing nonnegative integer is one. Adding an invalid option of value one would change the mex to four, which is why correct component lengths are essential.

</details>

### Exercise 5.4
<a id="kayles-splitting-misere-ex-4"></a>

Compare normal-play rows $(4,1)$ with one row $(5)$.

<details>
<summary>Hint 1</summary>

**Hint.** The separated rows combine by XOR.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A gap changes adjacency even if the total pin count is unchanged.

</details>

<details>
<summary>Solution</summary>

**Solution.** The separated position has value $K(4)\\oplus K(1)=1\\oplus1=0$, so it is P. The single row has value $K(5)=4$, so it is N. The difference is legal structure: a move cannot remove adjacent pins across a gap, and moves in separated rows affect only one component. Recording only total pins identifies positions with different outcomes.

</details>

### Exercise 5.5
<a id="kayles-splitting-misere-ex-5"></a>

Give a winning opening from one row of thirteen pins, then explain the reply strategy.

<details>
<summary>Hint 1</summary>

**Hint.** Use the centre to create two equal rows.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The remaining rows are separated and have six pins each.

</details>

<details>
<summary>Solution</summary>

**Solution.** Remove the seventh pin, leaving two length-six rows. After each opponent removal in one row, make its reflected removal in the other. The move remains legal because the rows have the same state before the opponent's move and are disjoint. Each response restores equality. Pins decrease until the responding player makes the final move, so the opening wins under normal play.

</details>

### Exercise 5.6
<a id="kayles-splitting-misere-ex-6"></a>

Find winning misère Nim moves from $(6,1)$ and $(6,1,1)$.

<details>
<summary>Hint 1</summary>

**Hint.** There is exactly one large heap in each case.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Leave an odd number of unit heaps after reducing the large heap.

</details>

<details>
<summary>Solution</summary>

**Solution.** From $(6,1)$, remove the large heap entirely, leaving one unit heap. From $(6,1,1)$, reduce six to one, leaving three units. In each case the opponent faces an odd-unit P-position. Always reducing the large heap to the same boundary size would fail in one of these cases.

</details>

### Exercise 5.7
<a id="kayles-splitting-misere-ex-7"></a>

Prove that a zero-XOR Nim position with a large heap has at least two large heaps.

<details>
<summary>Hint 1</summary>

**Hint.** Unit heaps affect only the least significant bit.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A single heap of size at least two has a higher nonzero bit that units cannot cancel.

</details>

<details>
<summary>Solution</summary>

**Solution.** If exactly one large heap $h\\ge2$ existed, the other heap sizes would be zero or one. Their XOR is therefore zero or one, so XORing them with $h$ cannot remove all its bits above the units column. The total could not be zero. This observation is the key boundary fact in the misère Nim proof.

</details>

### Exercise 5.8
<a id="kayles-splitting-misere-ex-8"></a>

Use two separate single-pin rows to refute the unchanged normal-play XOR rule in misère Kayles.

<details>
<summary>Hint 1</summary>

**Hint.** Compute their normal values, then play under the changed last-move convention.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Two forced single-pin moves occur.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each row has normal value one, so their normal XOR is zero. Under misère play, the first player removes one pin and leaves the second player to take the last pin and lose. The two-row position is therefore N, not P. Normal values do not automatically encode the changed terminal rule.

</details>

### Exercise 5.9
<a id="kayles-splitting-misere-ex-9"></a>

Prove that the contextual relation $\\sim$ described in Section6 is compatible with adding an allowed position.

<details>
<summary>Hint 1</summary>

**Hint.** Test the two enlarged games against an arbitrary context $X$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use closure under sums to regard $Y+X$ as one allowed context.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assume $G\\sim H$. For any allowed $X,Y$, the sum $Y+X$ is an allowed context. By the definition, $G+(Y+X)$ and $H+(Y+X)$ have the same outcome. Associativity of the disjoint-sum rules identifies these with $(G+Y)+X$ and $(H+Y)+X$. Since this holds for every $X$, we obtain $G+Y\\sim H+Y$.

</details>

### Exercise 5.10
<a id="kayles-splitting-misere-ex-10"></a>

A row table repeats twelve entries twice. Why is this not a proof of an eventual period, and why is the finite-subtraction window argument insufficient on its own?

<details>
<summary>Hint 1</summary>

**Hint.** Identify which earlier values the splitting recurrence can use.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The range of split indices increases with the row length.

</details>

<details>
<summary>Solution</summary>

**Solution.** Two matching blocks of entries do not by themselves force every later option-value set to match. Kayles options can involve pairs $K(j),K(n-1-j)$ and $K(j),K(n-2-j)$ over growing index ranges, rather than a fixed-length predecessor window. A separate propagation theorem or a precisely stated cited periodicity result is required. The observation is finite evidence, and it must also be kept separate from the misère ruleset.

</details>

## Sources

Original exposition extending the retained [Sprague–Grundy Theory](sprague-grundy-theory.md) examples. For the solved misère Kayles continuation, see Thane E. Plambeck, [*Taming the Wild in Impartial Combinatorial Games*](https://math.colgate.edu/~integers/fg5/fg5.pdf), *Integers*5 (2005), G05, §11.4. Misère Nim has the primary historical reference Bouton, [*Nim, a Game with a Complete Mathematical Theory*](https://doi.org/10.2307/1967631). The finite proofs and exercise explanations here are original.

## Summary

Kayles options must retain the lengths of separated remaining rows; the normal sum theorem combines their values by XOR. Exact option lists and a central symmetry strategy answer different questions. Misère play changes terminal outcomes, and Nim's modified classification needs its own proof. Misère Kayles is a solved deeper continuation with a different algebraic structure. Neither finite tables nor a familiar game name license a rule change or an unproved period.

`;export{e as default};