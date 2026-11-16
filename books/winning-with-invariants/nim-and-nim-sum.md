
# Nim and Nim-Sum

A pile total is easy to calculate, but it loses the information needed to play Nim. Two counters in one heap behave differently from two counters in separate heaps: a player can remove the former in one move, while the latter require two moves. Binary addition without carrying keeps precisely the information that ordinary addition discards.

This chapter proves the normal-play Nim theorem directly. It requires the P/N recursion from [Positions as a directed graph](positions-as-a-directed-graph.md), elementary binary notation, and the distinction between a move and a strategy. The later [Sprague–Grundy chapter](sprague-grundy-theory.md) explains how this operation also combines arbitrary finite impartial components. A direct proof for Nim is useful before that generalisation because every claimed winning move can be described by an explicit heap reduction.

## 1. Rules and binary arithmetic

**Definition 3.1 (Normal-play Nim).** A position is a finite tuple $(h_1,\ldots,h_k)$ of nonnegative integer heap sizes. A move chooses exactly one positive heap and replaces it by a strictly smaller nonnegative integer. The player with no legal move loses.

Empty heaps may remain in the tuple. They have no legal move and do not affect the outcome. The tuple with no heaps is also allowed and is terminal. Every play terminates because the nonnegative integer $h_1+\cdots+h_k$ decreases at each move. From a fixed starting tuple only finitely many tuples are reachable, so the usual finite acyclic P/N theorem applies.

**Definition 3.2 (Nim sum).** Write nonnegative integers in binary, extending shorter expansions by leading zeroes. Their nim sum, denoted $\oplus$, has a one in a binary column exactly when an odd number of the summands have a one in that column. For two integers this is bitwise exclusive-or, or XOR.

For example $5\oplus3=101_2\oplus011_2=110_2=6$. Ordinary addition would produce eight because it carries between columns; nim addition does not. Both are defined on nonnegative integers, but they are different operations.

**Lemma 3.3 (Nim-sum laws).** Nim sum is associative and commutative, has identity zero, and satisfies $a\oplus a=0$. Hence $a\oplus b=a\oplus c$ implies $b=c$.

**Proof.** In each binary column, nim sum is addition of zeroes and ones modulo two. This addition is associative and commutative, zero contributes nothing, and two copies of a bit cancel. Applying these facts independently in every column proves the laws for the finite binary expansions. For cancellation, nim-add $a$ to both sides and use associativity and $a\oplus a=0$. ∎

It is often useful to view a nim sum as a collection of independent parity checks, one for each bit position. The least significant column checks ordinary parity of the heap total, but higher columns contain additional conditions. Zero nim sum requires even parity in every column, which is much stronger than an even total.

**Worked example 3.4 (The same total, different outcomes).** The position $(1,1)$ has nim sum $1\oplus1=0$. The position $(2)$ has nim sum two. Both contain two counters. In the first, the next player removes one unit heap and the opponent removes the other, winning. In the second, the next player removes the entire heap and wins immediately. Thus total size alone does not classify Nim. Nor does the parity of the number of heaps: the one-heap position $(0)$ is terminal while the one-heap position $(2)$ is winning.

## 2. The highest differing bit controls legal reductions

Binary XOR is not ordered in the same way as ordinary addition. In particular $h\oplus S$ may be smaller or larger than $h$. A strategy must prove that its suggested replacement is a legal decrease.

**Lemma 3.5 (Highest-bit comparison).** If nonnegative integers $u,v$ first differ, reading from the most significant end, at bit $b$, then $u>v$ exactly when $u$ has a one and $v$ a zero at that bit.

**Proof.** The equal higher bits cancel when the difference is taken. The contribution $2^b$ at the first differing bit exceeds the sum $1+2+\cdots+2^{b-1}=2^b-1$ of every lower possible contribution. Lower bits therefore cannot reverse the comparison. ∎

**Theorem 3.6 (Normal-play Nim).** A Nim position is P exactly when
$$
S=h_1\oplus\cdots\oplus h_k=0.
$$

**Proof.** First suppose $S=0$. A legal move replaces $h_i$ by $h_i'\ne h_i$, so the new nim sum is
$$
S'=S\oplus h_i\oplus h_i'=h_i\oplus h_i'\ne0,
$$
where the last inequality follows from cancellation. Every move therefore leaves the proposed P-class.

Now suppose $S\ne0$, and let $b$ be the highest bit at which $S$ is one. An odd number of heaps have a one at bit $b$, so at least one such heap $h_i$ exists. Set $h_i'=h_i\oplus S$. Bits above $b$ do not change, and bit $b$ changes from one to zero. Lemma 3.5 gives $h_i'<h_i$, making this a legal move. Its new nim sum is
$$
S\oplus h_i\oplus(h_i\oplus S)=0.
$$
The terminal position has all heaps zero and hence zero nim sum. The game terminates, every move from zero goes to nonzero, and every nonzero position has a move to zero. Induction on total counters, or the P/N recursion, proves exactly the claimed classification. ∎

The proof has two logically different parts. Constructing one move to zero from a nonzero position establishes a winning response. Showing that every move from zero leaves zero establishes the losing class. A list of good moves without the second argument would not classify all positions.

## 3. Extracting and checking a strategy

**Worked example 3.7 (A specified winning reduction).** For $(7,10,12)$, align four binary columns:
$$
0111\oplus1010\oplus1100=0001.
$$
Thus $S=1$, whose highest one is in the units column. Heap seven has that bit set, while ten and twelve do not. Replace seven by $7\oplus1=6$. This reduces the heap by one. The new tuple $(6,10,12)$ has nim sum $0110\oplus1010\oplus1100=0000$. If an opponent subsequently changes any one heap, the nim sum becomes nonzero again, so the same rule supplies another legal reply.

The rule is a strategy, not only an opening move. On every reachable N-position it examines the current heaps and chooses a heap with the highest set bit of $S$. The opponent may use any legal reduction. The proof shows that the position again satisfies the rule's assumptions after every opponent move. Termination then guarantees that the opponent eventually faces the all-zero tuple.

**Proposition 3.8 (All winning moves).** If $S\ne0$, a move in heap $i$ reaches a P-position exactly when it replaces that heap by $h_i\oplus S$ and this number is smaller than $h_i$. Equivalently, the eligible heaps are exactly those with a one at the highest set bit of $S$.

**Proof.** To reach zero, the replacement $y$ must satisfy $S\oplus h_i\oplus y=0$. Cancellation forces $y=h_i\oplus S$, proving uniqueness for a specified heap. The highest-bit comparison shows that this replacement is smaller exactly when heap $i$ has a one at the highest nonzero bit of $S$. Such a replacement is legal and reaches zero by the theorem's calculation. ∎

If heaps retain distinct labels, the number of winning moves is therefore the number of eligible heaps. Equal heaps may give equivalent resulting positions after permuting heap labels, but they are still distinct choices of which physical heap to reduce. One must specify which objects are being counted.

**Worked example 3.9 (Several correct answers).** In $(7,7,7)$, the nim sum is seven because two copies cancel. Its highest set bit is the fours column, and all three heaps have a one there. Each winning move replaces one chosen seven by $7\oplus7=0$. These are three labelled winning moves. Reducing a seven to any other size fails to reach zero, since the unchanged pair of sevens cancels and leaves exactly the nonzero replacement as the total nim sum. The theorem identifies all winning moves without enumerating every legal removal.

An immediate consequence is that an N-position has an odd number of labelled winning moves: the parity of eligible heaps in the selected column is odd by the definition of $S$. This does not mean that every legal move is winning, or that equivalent outcomes should always be counted separately.

## 4. Symmetry is a special case with proof obligations

For two equal heaps, copying the opponent is a complete strategy for the second player. If one heap is reduced from $n$ to $m<n$, reduce the other from $n$ to $m$. The reply is legal, restores equality, and eventually makes the final move. Algebraically, equal heaps cancel under XOR.

This argument uses separate components. On a geometric board, a reflected move can overlap the move just played, or be fixed by the reflection. The appearance of symmetry alone does not ensure a legal reply. Nim's heap labels make noninterference transparent: the reply acts on a different heap whose original size is still available.

Adding two equal heaps to any Nim position preserves its nim sum and hence its outcome. Removing two equal heaps does the same. This is an outcome statement under these rules; it does not say that every possible future play has the same length, or that a player may ignore the added heaps without adjusting the strategy when an opponent plays in them.

## 5. Rules that invalidate the calculation

Suppose a new rule permits a heap of size three to split into heaps of sizes one and two. From $(3,3)$, whose XOR is zero, splitting one heap gives $(1,2,3)$, also of XOR zero because $1\oplus2=3$. This is now a legal move from the proposed P-class to itself. The first half of the Nim proof fails. The modified game may still be a finite impartial game, but its component values must be calculated from its actual options.

Under misère play, the player taking the last counter loses. The one-heap position $(1)$ is then P, although its nim sum is one. This is enough to refute unchanged use of the normal-play theorem. The later [Kayles, splitting, and misère chapter](kayles-splitting-misere.md) proves the separate misère Nim classification and distinguishes it from general misère sums.

The arithmetic also has a computational model. If all heap sizes fit in a machine word and XOR is a constant-time operation, a scan of $k$ heaps takes linear word operations. With arbitrary $B$-bit heap sizes, a direct bit implementation uses a bound such as $O(kB)$ bit work. JavaScript Number bitwise operators do not represent arbitrary nonnegative integers; the algorithmic chapter states their integer-range assumptions and the alternative use of exact larger integers. A mathematical invariant remains valid beyond a particular representation's range, but code must respect that range.

## 6. The next generalisation

A single Nim heap of size $h$ has Grundy value $h$, since its options have all values $0,\ldots,h-1$. This follows by induction on the heap size. It suggests that a more complicated impartial position of value $h$ should behave like that heap when combined with other games.

That suggestion needs a theorem about sums, not merely the zero-value outcome classification. The next chapter proves that the value of a disjoint sum is the XOR of its component values. It will not assert that the underlying move graphs are identical: two positions can have different options and the same value. The equivalence concerns their normal-play outcomes in every finite impartial context.

## Exercises

### Exercise 3.1
<a id="nim-and-nim-sum-ex-1"></a>

Compute $6\oplus9\oplus12$, showing the binary columns.

<details>
<summary>Hint 1</summary>

**Hint.** Align all three numbers in four bits.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check each column's parity independently.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expansions are $0110,1001,1100$. First $0110\oplus1001=1111$, and then $1111\oplus1100=0011$, so the nim sum is three. There are no carries. This differs from the ordinary total twenty-seven, and only the XOR is relevant to the normal-play Nim theorem.

</details>

### Exercise 3.2
<a id="nim-and-nim-sum-ex-2"></a>

Find every winning move from the labelled position $(3,4,5)$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the nim sum and its highest set bit.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For each heap test the unique zero-target replacement $h_i\oplus S$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The XOR is $3\oplus4\oplus5=2$. Only heap three has a one in the twos column. Its replacement is $3\oplus2=1$, which is smaller. The other targets are $4\oplus2=6$ and $5\oplus2=7$, both increases and hence illegal. Therefore the sole winning move reduces the first heap from three to one.

</details>

### Exercise 3.3
<a id="nim-and-nim-sum-ex-3"></a>

Prove that $(n,n)$ is P for every nonnegative integer $n$, both by XOR and by a response strategy.

<details>
<summary>Hint 1</summary>

**Hint.** Equal values cancel in nim addition.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A reply should act in the untouched heap and restore equality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The XOR is $n\oplus n=0$, so the theorem classifies the position as P. Directly, after the next player reduces one heap to $m<n$, the other player reduces the untouched heap to $m$. This is legal, restores the original form, and can be repeated after every opponent move. Total size decreases until the responding player removes the last counters. For $n=0$ the position is already terminal and P.

</details>

### Exercise 3.4
<a id="nim-and-nim-sum-ex-4"></a>

Give two Nim positions with the same total size four but opposite outcomes.

<details>
<summary>Hint 1</summary>

**Hint.** A pair of equal heaps is useful for the losing example.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Contrast one heap of four with two heaps of two.

</details>

<details>
<summary>Solution</summary>

**Solution.** The tuple $(2,2)$ has total four and XOR zero, so it is P. The tuple $(4)$ also has total four but XOR four, so it is N; its player removes the whole heap. Thus neither total size nor its even parity determines the outcome. The distribution of counters among heaps matters.

</details>

### Exercise 3.5
<a id="nim-and-nim-sum-ex-5"></a>

In $(7,7,7)$, how many labelled winning moves exist, and how many resulting positions remain up to permutation of heap labels?

<details>
<summary>Hint 1</summary>

**Hint.** Use the highest set bit of the XOR.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each eligible replacement is forced to zero; then compare the resulting tuples after reordering.

</details>

<details>
<summary>Solution</summary>

**Solution.** The nim sum is seven and all three heaps have its highest set bit. Each can be reduced to zero, giving three labelled choices. All resulting tuples are permutations of $(0,7,7)$, so there is only one resulting position up to permutation. This distinction concerns the equality convention for moves and positions, not a disagreement about the winning strategy.

</details>

### Exercise 3.6
<a id="nim-and-nim-sum-ex-6"></a>

Show that adding two equal heaps to any position preserves its normal-play outcome.

<details>
<summary>Hint 1</summary>

**Hint.** Calculate the XOR before and after adding the pair.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $a\oplus a=0$ and associativity.

</details>

<details>
<summary>Solution</summary>

**Solution.** If the original XOR is $S$, the enlarged position has XOR $S\oplus a\oplus a=S$. The zero/nonzero classification is therefore unchanged. The statement does not identify move graphs or prescribe that the extra heaps are never used. If the opponent changes one of them, the usual XOR strategy still responds from the actual resulting tuple.

</details>

### Exercise 3.7
<a id="nim-and-nim-sum-ex-7"></a>

Prove that every N-position has an odd number of labelled moves to P-positions.

<details>
<summary>Hint 1</summary>

**Hint.** Count heaps with a one in the highest nonzero column of the total XOR.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each such heap supplies exactly one legal zero-target replacement.

</details>

<details>
<summary>Solution</summary>

**Solution.** The selected column of the XOR is one, so an odd number of heaps have a one in that column. Proposition 3.8 says these and only these heaps admit a winning replacement, and that each specified heap has exactly one such replacement. The number of labelled winning moves is consequently odd. Other legal reductions need not win.

</details>

### Exercise 3.8
<a id="nim-and-nim-sum-ex-8"></a>

A player claims $h\oplus S<h$ for every positive heap whenever $S\ne0$. Refute the claim and give the correct condition.

<details>
<summary>Hint 1</summary>

**Hint.** Choose a heap with zero in the highest set column of $S$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use a small example such as $h=1,S=2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $1\oplus2=3>1$, so the proposed reduction is illegal. In general the bits above the highest set bit of $S$ remain unchanged, and that bit is flipped. The replacement decreases exactly when the heap has a one in that bit. A nonzero XOR guarantees at least one eligible heap, not eligibility of every positive heap.

</details>

### Exercise 3.9
<a id="nim-and-nim-sum-ex-9"></a>

If splitting $3$ into $1+2$ is allowed, explain why the normal Nim proof no longer classifies the modified game.

<details>
<summary>Hint 1</summary>

**Hint.** Start from a zero-XOR position with two heaps of three.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compute the XOR after the new split move.

</details>

<details>
<summary>Solution</summary>

**Solution.** The tuple $(3,3)$ has XOR zero, but the permitted split gives $(1,2,3)$, whose XOR is also zero. The assertion that every move from a zero position leaves zero is false under the changed rule. Consequently the proof's P/N certificate fails. One must compute values from the enlarged move set; simply reusing heap sizes as component values is unjustified.

</details>

### Exercise 3.10
<a id="nim-and-nim-sum-ex-10"></a>

For a one-heap position of size $h$, prove its Grundy value is $h$, and explain why this does not itself prove the sum formula for several heaps.

<details>
<summary>Hint 1</summary>

**Hint.** Use induction and the fact that every smaller heap size is an option.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The mex of all integers from zero through $h-1$ is $h$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The terminal heap has value zero. If all smaller heaps have their size as value, the options of heap $h$ have values exactly $0,\ldots,h-1$, whose mex is $h$. This proves the one-component claim. Combining several components introduces options in different coordinates, so an additional argument is required to prove that their combined mex is the XOR. The next chapter supplies that argument.

</details>

## Sources

Original exposition using the retained book's Nim examples as a local seed. A primary historical source is Charles L. Bouton, [*Nim, a Game with a Complete Mathematical Theory*](https://doi.org/10.2307/1967631), *Annals of Mathematics* 3 (1901–1902), 35–39. The binary and strategy proofs above are developed independently in the notation of this route.

## Summary

Nim sum adds binary columns without carries. Every legal reduction leaves the zero-XOR class, and the highest nonzero bit supplies a legal move back to zero from every other position. This proves the classification and describes all winning moves. The argument depends on changing exactly one heap under normal play. The next chapter proves how XOR combines Grundy values of general finite impartial components.

