
# Sprague–Grundy Theory

In [Impartial Games and Mex](impartial-games-and-mex.md), every position of a finite acyclic impartial normal-play game received a nonnegative Grundy number, and zero values were proved to be precisely the P-positions. [Nim and Nim-Sum](nim-and-nim-sum.md) then developed binary addition and a direct strategy for Nim. This chapter proves the general sum theorem, extends it to arbitrarily many finite components, and applies it to games that decompose during play.

For the current preparation route, read [Impartial Games and Mex](impartial-games-and-mex.md) and [Nim and Nim-Sum](nim-and-nim-sum.md). The retained [Impartial Games](impartial-games.md) reading supplies the earlier alternative sum proof. The primary route uses the full proof below.

## 4.1 The mex function revisited

Recall that for a finite set $S$ of nonnegative integers,

$$\operatorname{mex}(S) = \min \{ k \in \mathbb{Z}_{\geq 0} : k \notin S \}.$$

The mex function has two properties we use repeatedly:

1. $\operatorname{mex}(S) = 0$ if and only if $0 \notin S$.
2. For any $m < \operatorname{mex}(S)$, we have $m \in S$.

These follow directly from the definition.

## 4.2 The Sprague–Grundy theorem

Let $\mathcal{G}$ be the class of finite acyclic impartial games under normal play. For $G \in \mathcal{G}$, let $\operatorname{Opt}(G)$ denote the set of positions reachable by one legal move from $G$.

**Definition 4.1.** The **Grundy number** $g(G)$ is defined recursively by

$$g(G) = \operatorname{mex}\bigl( \{ g(H) : H \in \operatorname{Opt}(G) \} \bigr).$$

**Theorem 4.2 (Sprague–Grundy).** For any $G \in \mathcal{G}$:

1. $g(G) = 0$ if and only if $G$ is a P-position.
2. For any $H \in \mathcal{G}$, $g(G + H) = g(G) \oplus g(H)$.

Part 1 was proved in [Impartial Games and Mex](impartial-games-and-mex.md). Here we prove part 2 and extend it to any finite sum. The earlier alternative reading retains its own historical proof; the primary route has one sum-theorem proof.

**Proof of the sum formula.** We prove $g(G + H) = g(G) \oplus g(H)$ by induction on the sum of the maximum remaining path lengths. Let $x = g(G)$, $y = g(H)$, and $z = x \oplus y$.

Let $S$ be the set of Grundy numbers of all options of $G + H$. An option of $G + H$ is either an option of $G$ paired with $H$, or $G$ paired with an option of $H$. Thus

$$S = \{ g(G') \oplus y : G' \in \operatorname{Opt}(G) \} \cup \{ x \oplus g(H') : H' \in \operatorname{Opt}(H) \}.$$

We must show $z \notin S$ and every $w < z$ is in $S$.

*No option has Grundy number $z$.* Suppose $g(G') \oplus y = z = x \oplus y$. Then $g(G') = x$, contradicting $g(G) = \operatorname{mex}(\{g(G')\})$. The same argument holds for options of $H$.

*Every $w < z$ is achieved by some option.* Let $w < z$. Let $b$ be the highest bit where $w$ and $z$ differ. Then $z$ has a $1$ at bit $b$ and $w$ has a $0$. Since $z = x \oplus y$, exactly one of $x$ or $y$ has a $1$ at bit $b$. Suppose it is $x$. Define $x' = x \oplus z \oplus w$. Then $x' < x$ because bit $b$ changes from $1$ to $0$ and higher bits are unchanged. By property 2 of mex, there exists $G' \in \operatorname{Opt}(G)$ with $g(G') = x'$. Then $g(G' + H) = x' \oplus y = x \oplus z \oplus w \oplus y = w$.

Therefore $g(G + H) = \operatorname{mex}(S) = z$. $\square$

## 4.3 Sums of many games

By induction on the number of components, the sum formula extends to any finite disjoint sum:

$$g(G_1 + G_2 + \cdots + G_k) = g(G_1) \oplus g(G_2) \oplus \cdots \oplus g(G_k).$$

This is the form most often used in practice. A Nim position with $k$ heaps is the sum of $k$ one-heap games, each with Grundy number equal to its heap size. The combined Grundy number is the XOR of all heap sizes, as established directly in [Nim and Nim-Sum](nim-and-nim-sum.md).

## 4.4 Decomposing games during play

Some games naturally split into independent components as play proceeds. The classic example is **Kayles**: a row of bowling pins. A move knocks down either a single pin or two adjacent pins. When a pin is removed, the row splits into two independent subgames: the pins to the left and the pins to the right.

For Kayles, removing one pin at zero-based position $j$ leaves rows of lengths $j$ and $n-1-j$; removing adjacent pins $j,j+1$ leaves lengths $j$ and $n-2-j$. Therefore the exact recurrence is

$$g(n)=\operatorname{mex}\!\left(
\{g(j)\oplus g(n-1-j):0\le j<n\}
\cup
\{g(j)\oplus g(n-2-j):0\le j<n-1\}
\right).$$

Every argument on the right is shorter than $n$, so this is a valid dynamic program starting from $g(0)=0$.

The sequence of Grundy numbers for Kayles begins:

$$0, 1, 2, 3, 1, 4, 3, 2, 1, 4, 2, 6, \dots$$

Unlike subtraction games, Kayles does not have a simple closed form, but the Sprague–Grundy theorem still gives a complete analysis.

## 4.5 The misère exception

Under **misère** play, the player who makes the last move loses. Backward induction still classifies any explicitly given finite acyclic move graph after the terminal convention changes. A concise structural description of a family, especially of sums, can be much harder. The Sprague–Grundy theorem **fails** for misère sums in general.

The important exception developed in this book is Nim. Bouton solved misère Nim in 1901:

- If every heap has size $1$, the position is P exactly when the number of heaps is odd.
- If some heap has size greater than $1$, the position is P exactly when the normal-play XOR is $0$.

The proof appears in [Kayles, Splitting, and Misère Play](kayles-splitting-misere.md). Other misère games can require specialized quotients or case-specific structure; the normal-play Grundy sum formula alone does not solve them.

## 4.6 Common errors

**Error: applying the sum formula to misère play.** The Sprague–Grundy theorem is proved by induction on path length, and the base case (terminal position) is P in normal play. In misère play, the terminal position is N, so the entire induction structure collapses. The sum formula does not hold.

**Error: assuming periodicity without proof.** A finite Grundy prefix does not prove an eventual period. Normal-play row Kayles with the single-pin/adjacent-two-pin split rules of Section 4.4 has established eventual period $12$: $g(n+12)=g(n)$ for $n\ge71$. Aichholzer et al., [*Games on Triangulations*, Table 2](https://erikdemaine.org/papers/TriangulationGames_TCS/paper.pdf), give the period table and fourteen exceptional indices, the last at $70$. The general periodicity result is imported here; the recurrence and finite examples in this chapter do not constitute its proof. This statement is not about misere Kayles, Node Kayles, or Arc Kayles. 

**Error: forgetting that a component can split.** In games like Kayles, a move may create two independent subgames. The Grundy number of the resulting position is the XOR of the subgames' Grundy numbers, not the Grundy number of a single remaining row.

**Error: using the wrong move set for mex.** The mex is taken over the Grundy numbers of the **options**, not over the position labels or heap sizes. Always compute the options' Grundy numbers first, then take mex.

## Using the theorem as a statement about contexts

The move graph of a sum is a product of the reachable component positions. A legal edge changes exactly one coordinate along one component edge. The sum of component heights decreases on every such move, so the induction used in the proof is well founded. The theorem does not permit simultaneous moves in two components, a forced move in a specified component, or shared resources that change another component's options.

**Proposition 4.9 (Indistinguishability in impartial contexts).** Two finite acyclic impartial normal-play positions $A,B$ have the same Grundy value if and only if, for every finite acyclic impartial normal-play position $H$, the sums $A+H$ and $B+H$ have the same P/N outcome.

**Proof.** If $g(A)=g(B)$, the sum formula gives equal values after adding any $H$, hence equal zero/nonzero status and equal outcomes. Conversely, suppose $x=g(A)\ne g(B)=y$. Choose $H$ to be a Nim heap of size $x$. Then $g(A+H)=x\oplus x=0$, while $g(B+H)=y\oplus x\ne0$. This context distinguishes the outcomes. All games used are finite from their stated starting positions. ∎

This is the precise sense in which a position behaves like a Nim heap. It is not a claim that their move graphs are isomorphic or that every move has a matching move with the same physical description. A game can have options of value greater than its own mex, and its number of moves or terminal paths need not resemble a heap.

**Worked example 4.10 (Different graphs with identical context behaviour).** Let $T$ be terminal, $U\to T$, and $V\to U$. Then $g(T)=0,g(U)=1,g(V)=0$. The position $V$ has a legal move and $T$ has none, so their graphs differ. Nevertheless $V+H$ and $T+H$ have value $g(H)$ for every allowed $H$, since both zero components cancel from the XOR. For a concrete context, add a heap of size two: both sums are N with value two. If a player moves in $V$, the other component has not changed, and the new option values must still be assessed in the actual sum.

**Worked example 4.11 (A winning move can increase a component value).** Let $P$ have options the terminal game $T$ and a heap of size two. Its option values are zero and two, so $g(P)=1$. In $P+*2$, the total value is $1\oplus2=3$. Moving in $P$ to its heap-two option gives $*2+*2$, of value zero. This winning move increases the changed component's value from one to two. There is also a winning move in the other component, reducing that heap from two to one. The existence proof always finds a suitable smaller target value in some component; it does not assert that every winning move decreases every component value.

**Worked example 4.12 (Subtraction components retain their own legal moves).** Take three remove-one-two-or-three heaps of sizes $5,6,7$. Their values are $1,2,3$, so their sum is zero. If the opponent removes one from the third heap, the component sizes become $5,6,6$, with values $1,2,2$ and total value one. Remove one from the first heap to reach $4,6,6$, with values $0,2,2$, restoring zero. These are legal subtraction moves. Treating physical sizes as ordinary Nim values would be wrong: a heap of size five in this game has value one, not five, and not every reduction is allowed.

### Two scope clarifications

Backward induction still works for finite acyclic misère games after the terminal convention is changed. The normal-play Grundy recursion and XOR theorem do not survive that change unchanged; this is the precise limitation behind the earlier warning about the normal-play induction.

The finite theory developed here does not construct all surreal numbers or transfinite Hackenbush values. Finite blue-red stalks supply dyadic rational examples; infinite constructions require further definitions. Likewise, misère Kayles is a solved deeper continuation rather than an open problem: Plambeck's [primary account, §11.4](https://math.colgate.edu/~integers/fg5/fg5.pdf) presents the Sibert–Conway solution. That imported solution is not proved by the small normal-play table here.

## 4.7 Practice exercises

### Exercise 4.1

<a id="sprague-grundy-theory-ex-1"></a>

Prove the sum formula for three games: $g(G + H + K) = g(G) \oplus g(H) \oplus g(K)$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the two-component theorem twice.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Group the first two components, then use associativity of XOR.

</details>

<details>
<summary>Solution</summary>

**Solution.** By the two-game formula, $g(G + H + K) = g((G + H) + K) = g(G + H) \oplus g(K) = (g(G) \oplus g(H)) \oplus g(K)$. Nim sum is associative, so this equals $g(G) \oplus g(H) \oplus g(K)$. $\square$

</details>

### Exercise 4.2

<a id="sprague-grundy-theory-ex-2"></a>

In Kayles, a row of length $n$ has options obtained by knocking down either a single pin or two adjacent pins. Knocking down an end pin leaves a row of length $n - 1$; knocking down two end pins leaves a row of length $n - 2$; knocking down a middle pin at position $j$ splits the row into two rows of lengths $j$ and $n - 1 - j$; knocking down two adjacent middle pins at positions $j$ and $j + 1$ splits the row into two rows of lengths $j$ and $n - 2 - j$. Compute $g(0)$ through $g(5)$.

<details>
<summary>Hint 1</summary>

**Hint.** Enumerate single-pin and adjacent-pair removals separately, allowing zero-length end rows.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For each resulting pair of row lengths use the XOR of its two already-known values; then take the mex of the union.

</details>

<details>
<summary>Solution</summary>

**Correction notice.** The earlier option listing immediately below is retained as context. Its invalid split terms are superseded by the exact legal option sets in the correction following it.

**Solution.** $g(0) = 0$; $g(1) = \operatorname{mex}(\{g(0)\}) = 1$; $g(2) = \operatorname{mex}(\{g(1), g(0)\}) = 2$; $g(3) = \operatorname{mex}(\{g(2), g(1), g(0)\oplus g(0), g(1)\oplus g(0)\}) = \operatorname{mex}(\{2, 1, 0, 1\}) = 3$; $g(4) = \operatorname{mex}(\{g(3), g(2), g(0)\oplus g(2), g(1)\oplus g(1), g(2)\oplus g(0), g(0)\oplus g(1), g(1)\oplus g(0)\}) = \operatorname{mex}(\{3, 2, 2, 0, 2, 1, 1\}) = 1$; $g(5) = \operatorname{mex}(\{g(4), g(3), g(0)\oplus g(3), g(1)\oplus g(2), g(2)\oplus g(1), g(3)\oplus g(0), g(0)\oplus g(2), g(1)\oplus g(1), g(2)\oplus g(0)\}) = \operatorname{mex}(\{1, 3, 3, 3, 3, 3, 2, 0, 2\}) = 4$. $\square$

**Correction to the earlier option listing.** The old displayed sets contain terms that do not represent legal remaining row lengths; in particular its set for length four would not have mex one. The correct option-value sets for lengths one through five are, respectively, $\{0\}$, $\{0,1\}$, $\{0,1,2\}$, $\{0,2,3\}$, and $\{0,1,2,3\}$. Thus the resulting values are still $1,2,3,1,4$, but they follow from these corrected sets. For length three the central single-pin removal leaves rows $(1,1)$, giving value zero. For length four, single-pin removals give value three and adjacent-pair removals give values two or zero. For length five, single-pin removals give values one, two, or zero, and adjacent-pair removals give value three.

</details>

### Exercise 4.3

<a id="sprague-grundy-theory-ex-3"></a>

Show that if $G$ and $H$ are impartial games with $g(G) = g(H)$, then $G + H$ is a P-position.

<details>
<summary>Hint 1</summary>

**Hint.** Equal values cancel under XOR.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the sum formula and then the zero-value outcome criterion.

</details>

<details>
<summary>Solution</summary>

**Solution.** $g(G + H) = g(G) \oplus g(H) = g(G) \oplus g(G) = 0$. By the Sprague–Grundy theorem, $G + H$ is P. $\square$

</details>

### Exercise 4.4

<a id="sprague-grundy-theory-ex-4"></a>

Find the smallest Nim position (in terms of total heap size) that is N under normal play but P under misère play.

<details>
<summary>Hint 1</summary>

**Hint.** Start with the smallest positive total number of counters.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The single counter can be removed in one move; compare the two last-move conventions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Under normal play, a single heap of size $1$ has Grundy number $1$, so it is N. Under misère play, the only move takes the last object and loses, so it is P. The position is $(1)$, with total heap size $1$. $\square$

</details>

### Exercise 4.5

<a id="sprague-grundy-theory-ex-5"></a>

In the subtraction game with move set $\{1, 2, 3\}$, compute the Grundy number of the sum of positions $5$ and $6$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the values of subtraction positions, not their physical heap sizes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two component values are one and two; seek a legal move making them equal.

</details>

<details>
<summary>Solution</summary>

**Solution.** From Chapter 2, $g(5)=1$ and $g(6)=2$, so $g(5+6)=1\oplus2=3$. Move in the second component from $6$ to $5$. The result $5+5$ has Grundy number $1\oplus1=0$, so it is P and the move is winning. $\square$

</details>

## 4.8 Looking forward

The Sprague–Grundy theorem is the crown jewel of impartial combinatorial game theory. It tells us that every finite impartial game is secretly a Nim heap, and that disjoint sums behave like XOR. Continue with [Kayles, Splitting, and Misère Play](kayles-splitting-misere.md) to separate normal-play decomposition from the misère convention. Later, [Partizan Games](partizan-games.md) and [Hackenbush](hackenbush.md) introduce finite games with different move permissions and finite blue-red stalks with dyadic rational values. The full surreal number construction requires infinite and transfinite stages beyond this book.


## Further supported exercises

### Exercise 4.6
<a id="sprague-grundy-theory-ex-6"></a>

Construct two nonisomorphic finite move graphs with the same Grundy value and prove they have equal outcomes in every finite impartial normal-play context.

<details>
<summary>Hint 1</summary>

**Hint.** Use a terminal position and a two-edge directed path.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both initial values can be zero, even though only one initial position is terminal.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take terminal $T$ and $V\to U\to T$. Their initial values are $g(T)=0$ and $g(V)=0$, while their reachable graphs have one and three vertices. For every allowed context $H$, the sum formula gives $g(T+H)=g(V+H)=g(H)$. The sums therefore have identical P/N outcomes. Equality in contexts is weaker than equality of move graphs.

</details>

### Exercise 4.7
<a id="sprague-grundy-theory-ex-7"></a>

Prove that unequal Grundy values can always be distinguished by a finite impartial context.

<details>
<summary>Hint 1</summary>

**Hint.** Use a Nim heap whose size equals one of the two values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** One resulting XOR is zero, while the other is nonzero.

</details>

<details>
<summary>Solution</summary>

**Solution.** If the values are $x\ne y$, choose a context consisting of one heap of size $x$. The sums have values $x\oplus x=0$ and $y\oplus x\ne0$, respectively. Thus one is P and the other N. The heap is finite, including when $x=0$, so it is an allowed context. No infinitely complicated auxiliary game is needed.

</details>

### Exercise 4.8
<a id="sprague-grundy-theory-ex-8"></a>

Let $P$ have options of values zero and two. In $P+*2$, exhibit a winning move increasing a component value and one decreasing a component value.

<details>
<summary>Hint 1</summary>

**Hint.** First compute $g(P)$ from its option-value set.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A sum becomes P when the two component values become equal.

</details>

<details>
<summary>Solution</summary>

**Solution.** We have $g(P)=\operatorname{mex}\{0,2\}=1$. Moving $P$ to its value-two option increases that component from one to two and makes total value $2\oplus2=0$. Alternatively reduce the separate Nim heap from two to one, giving total value $1\oplus1=0$. Both moves are legal. Grundy values consequently cannot be treated as quantities that must decrease on every legal or winning move.

</details>

### Exercise 4.9
<a id="sprague-grundy-theory-ex-9"></a>

Explain why disjoint components must have independent move rules. Give a modification invalidating the standard sum formula's hypotheses.

<details>
<summary>Hint 1</summary>

**Hint.** A legal sum move changes one coordinate and leaves the other coordinates' available moves determined by their unchanged states.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Consider a rule requiring moves in both components at once.

</details>

<details>
<summary>Solution</summary>

**Solution.** If a move must remove one counter from each of two nonempty unit heaps simultaneously, the position $(1,1)$ has a move to $(0,0)$ and is N. Under an ordinary disjoint sum it is P because $1\oplus1=0$. The modified operation is not the disjoint sum: one move changes two components. Therefore it is outside the theorem, rather than a counterexample to its correctly stated conclusion.

</details>

### Exercise 4.10
<a id="sprague-grundy-theory-ex-10"></a>

A computation lists normal-play Kayles values through a large finite length. State what is proved by correct recurrence evaluation and what additional argument is required for a claimed eventual period.

<details>
<summary>Hint 1</summary>

**Hint.** Keep the finite range separate from all later lengths.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A recurrence-state or specialised periodicity theorem must justify propagation beyond the table.

</details>

<details>
<summary>Solution</summary>

**Solution.** Correct evaluation proves the values for the explicitly calculated lengths, subject to complete legal-option enumeration and exact mex calculations. It does not prove that an apparent period persists forever, nor a result for misère Kayles, Node Kayles, or another move set. A universal periodicity statement needs a proved propagation theorem or an explicitly cited external result with its hypotheses. The retained chapter cites such a continuation separately from its finite calculations.

</details>

## Sources

The original chapter, alternative [Impartial Games](impartial-games.md) reading, and Kayles reference are retained. Expanded examples and solutions are original exposition. Primary further reading is Siegel, [*Combinatorial Game Theory*](https://doi.org/10.1090/gsm/146), and Plambeck's [misère-game account](https://math.colgate.edu/~integers/fg5/fg5.pdf), §11.4, for the explicitly imported solved continuation.

## Summary

The mex certificate and height induction prove that disjoint finite impartial normal-play components combine by XOR. Equal values give the same outcome in every such context, and unequal values have a distinguishing Nim context. This is not an isomorphism of move graphs, nor a monotonic numerical score. Actual legal options remain essential when extracting a strategy. Kayles splitting and misère boundaries are developed next.



