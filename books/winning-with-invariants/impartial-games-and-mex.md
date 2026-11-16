
# Impartial Games and Mex

Knowing whether one position is winning does not yet explain how it interacts with another position. A losing subtraction heap can have legal moves, and two winning components need not form a winning sum. This chapter builds the local numerical information needed for the later sum theorem. It defines the minimum excluded value, proves that the recursive values exist, and explains exactly what their zeroes tell us.

The preparation is [Positions as a directed graph](positions-as-a-directed-graph.md): a finite acyclic move graph, induction on remaining play length, and the P/N classification. The earlier [Impartial Games](impartial-games.md) reading remains available with its original alternative exposition and solutions. The primary route separates the present local recursion from the full sum proof in [Sprague–Grundy Theory](sprague-grundy-theory.md).

## 1. The hypotheses specify the mathematical game

**Definition 2.1 (Finite impartial normal-play game).** A position is a vertex of a finite directed acyclic graph, and an arrow is a legal move. The same outgoing moves are available to either player. Players alternate, and a player with no legal move loses. A terminal position has no outgoing arrow.

The position must contain every piece of information that affects legal moves. A board picture is insufficient if a move depends on the previous move or on repetition history. One may enlarge a state to include that information, but must then check acyclicity for the enlarged graph. A finite number of board pictures does not by itself exclude indefinitely repeated play.

Write $h(P)$ for the maximum number of moves remaining from $P$. This exists because the graph is finite and acyclic. Every option $Q$ of $P$ has $h(Q)<h(P)$. Consequently a definition at $P$ that uses only values at its options can be made by induction on $h$. The graph need not be a tree: different moves may lead to the same later position, and that position receives one value wherever it is reached.

Impartiality concerns legal options, not a player's preferences or skill. In a partizan game, Left and Right have different move sets, and one nonnegative integer computed from a common option set cannot encode both choices. Normal play is equally essential: the zero-value outcome rule proved below uses the fact that terminal positions are losing for the player to move.

## 2. The smallest missing nonnegative integer

**Definition 2.2 (Minimum excluded value).** For a finite set $S$ of nonnegative integers,
$$
\operatorname{mex}(S)=\min\{j\in\mathbb Z_{\ge0}:j\notin S\}.
$$
Repeated appearances of a number do not create new members of $S$.

**Lemma 2.3 (Mex certificate).** For a finite $S$, an integer $m\ge0$ equals $\operatorname{mex}(S)$ exactly when every integer $0\le j<m$ belongs to $S$ and $m$ does not belong to $S$. Moreover $\operatorname{mex}(S)\le |S|$.

**Proof.** The least missing integer has exactly the stated two properties. Conversely those properties make $m$ missing while every smaller candidate is present. For the bound, if all integers $0,\ldots,|S|$ belonged to $S$, the set would contain at least $|S|+1$ distinct members, a contradiction. Thus a missing integer occurs in that range. ∎

The finite-set hypothesis guarantees existence without any search extending indefinitely. The infinite set of all nonnegative integers has no missing nonnegative integer. Negative numbers are outside the definition; adding them to an input does not make them candidates for the minimum.

**Worked example 2.4 (A complete mex calculation).** Suppose four legal moves lead to option values $3,0,3,1$. The set is $\{0,1,3\}$. Zero and one are present; two is absent, so the mex is two. The second occurrence of three makes no difference. The mex is neither the largest value plus one nor the number of legal moves. In particular $\operatorname{mex}\{1,4,9\}=0$ even though all three displayed numbers are positive.

## 3. Recursive values and their outcome meaning

**Definition 2.5 (Grundy value).** In a finite impartial normal-play game, define
$$
g(P)=\operatorname{mex}\{g(Q):P\to Q\}.
$$
The braces mean the set of values of legal options, not a list of position labels.

**Theorem 2.6 (Existence and uniqueness).** Every position has exactly one Grundy value. A terminal position has value zero, and $g(P)$ is at most the number of distinct options of $P$.

**Proof.** Proceed by height. At height zero the option set is empty, whose mex is zero. At a positive height every option has smaller height and therefore already has a uniquely defined value. Its finite value set has a unique mex by Lemma 2.3. This both defines the value and forces the same value in any other assignment obeying the recursion. The mex bound gives $g(P)\le|\{g(Q):P\to Q\}|\le|\{Q:P\to Q\}|$. ∎

**Theorem 2.7 (Zero-value classification).** A position is P if and only if its Grundy value is zero.

**Proof.** Induct on height. A terminal position is P and has value zero. Suppose the assertion holds for all options of $P$. If $g(P)=0$, none of the option values is zero. All options are therefore N by induction, making $P$ a P-position. If $g(P)>0$, the mex certificate says zero occurs among its option values. There is an option that is P by induction, so $P$ is N. These alternatives cover all nonnegative values. ∎

A positive value guarantees that some winning move exists, but the number alone does not name that move. To extract a strategy, examine the actual options and select one with value zero. A zero value does not assert that there are no options: it asserts that none of their values is zero. The distinction separates terminal losses from losses in which a player still has several legal choices.

**Worked example 2.8 (A shared-follower graph).** Let $T$ be terminal, $A\to T$, $B\to A$, $C\to T,A$, and $D\to B,C$. Then $g(T)=0$, $g(A)=1$, and $g(B)=\operatorname{mex}\{1\}=0$. Next $g(C)=\operatorname{mex}\{0,1\}=2$, and $g(D)=\operatorname{mex}\{0,2\}=1$. Thus $B$ is a nonterminal P-position. From $D$, the move to $B$ is winning, while the move to $C$ gives the opponent an N-position. The shared follower $A$ has the same value in both calculations; the graph does not need to be unfolded into separate copies.

## 4. Subtraction games expose the recurrence

Fix a finite set $S$ of positive integers. A position is a heap size $n\ge0$, and a legal move replaces $n$ by $n-s$ for an $s\in S$ with $s\le n$. The heap decreases strictly, so its reachable graph is finite and acyclic. Therefore
$$
g(n)=\operatorname{mex}\{g(n-s):s\in S,\ s\le n\}.
$$
Zero must not be an allowed subtraction: it would create a self-loop rather than a smaller follower.

**Theorem 2.9 (Consecutive subtractions).** If $S=\{1,\ldots,k\}$ with $k\ge1$, then $g(n)$ is the remainder of $n$ on division by $k+1$.

**Proof.** For $0\le n<k$, the options are all smaller heap sizes. Inductively their values are $0,\ldots,n-1$, so the mex is $n$. For $n\ge k$, the $k$ predecessors $n-1,\ldots,n-k$ have, by induction, all residues modulo $k+1$ except the residue $r$ of $n$. Their value set is therefore $\{0,\ldots,k\}\setminus\{r\}$, whose mex is $r$. The argument also includes $n=k$, and induction proves the formula for every $n$. ∎

**Worked example 2.10 (A nonconsecutive move set).** For $S=\{2,3\}$, the first values are
$$
g(0),\ldots,g(7)=0,0,1,1,2,0,0,1.
$$
Heap one is terminal despite being nonempty, because neither subtraction is legal. Heap four has options two and one, with values one and zero, giving mex two. Heap five has options three and two, both of value one, so its mex is zero. It is a nonterminal loss. Heap seven has options five and four, with values zero and two, so its mex is one. Each step uses the actual move set; the remainder formula for consecutive subtractions cannot simply be transferred.

For finite $S$, there are at most $|S|$ option values, so all Grundy values lie in $\{0,\ldots,|S|\}$. This bound is important even though there are infinitely many possible starting heap sizes: each individual heap has a finite game, and the recurrence has a bounded numerical alphabet.

## 5. What a finite prefix proves

A table can suggest periodicity without proving it. Finite subtraction sets permit a stronger argument because only a bounded window of earlier values matters.

**Theorem 2.11 (Eventual periodicity for a fixed subtraction set).** If $S$ is a finite nonempty set of positive integers, its Grundy sequence is eventually periodic.

**Proof.** Put $m=\max S$ and $k=|S|$. For $n\ge m-1$, consider the window
$$
W_n=(g(n-m+1),\ldots,g(n)).
$$
There are at most $(k+1)^m$ possible windows because each entry belongs to $\{0,\ldots,k\}$. Once $n+1\ge m$, every allowed subtraction is available, and the recurrence determines $g(n+1)$ solely from $W_n$. Shifting and adjoining that value therefore determines $W_{n+1}$. Among an infinite sequence of windows two are equal, say $W_i=W_j$ with $i<j$. Determinism gives $W_{i+t}=W_{j+t}$ for every $t\ge0$ by induction. Their entries then show that the Grundy sequence repeats with period $j-i$ from some finite point onward. ∎

The theorem does not identify the shortest period or the first point from which it holds. A repeated single value is insufficient; the relevant full recurrence state must repeat. Nor does the proof apply unchanged to Kayles, where a move can split a row and the recurrence depends on many smaller component pairs rather than a fixed-width subtraction window.

Grundy values are not scores, remaining-move counts, or ordinary advantages. A value of seven is not automatically better than a value of two in an isolated position: both are N. Their distinction becomes useful when positions are combined. The next chapter builds the binary operation used in that combination, and the subsequent sum theorem proves why it is the correct operation.

## Exercises

### Exercise 2.1
<a id="impartial-games-and-mex-ex-1"></a>

Compute the mex of $\varnothing,\{1,2\},\{0,2,4\},\{0,1,2,7\}$, explaining the first missing integer each time.

<details>
<summary>Hint 1</summary>

**Hint.** Start at zero rather than at the smallest displayed member.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check candidates consecutively until one is absent; repetitions would not affect the sets.

</details>

<details>
<summary>Solution</summary>

**Solution.** The answers are $0,0,1,3$. The empty set omits zero; the second set also omits zero. In the third, zero is present but one is absent. In the fourth, zero, one, and two are present but three is absent. The presence of a larger value such as seven has no effect on which smaller integer is first missing.

</details>

### Exercise 2.2
<a id="impartial-games-and-mex-ex-2"></a>

Prove that if a position has at most $d$ legal options, its Grundy value is at most $d$.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the number of options from the number of distinct option values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the mex bound on the set of option values.

</details>

<details>
<summary>Solution</summary>

**Solution.** The option-value set has at most $d$ members, even if different moves lead to different positions with equal values. A set with at most $d$ members cannot contain all $d+1$ integers $0,\ldots,d$. Its mex is consequently at most $d$. This argument needs no independence or uniformity assumption about the options.

</details>

### Exercise 2.3
<a id="impartial-games-and-mex-ex-3"></a>

Give a nonterminal position of Grundy value zero using a move graph with as few vertices as possible, and justify minimality.

<details>
<summary>Hint 1</summary>

**Hint.** A position with only terminal followers has an option value zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** First make a follower of value one, then a vertex whose only follower is that vertex.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take a path $B\to A\to T$, with $T$ terminal. Then $g(T)=0,g(A)=1,g(B)=0$, and $B$ is nonterminal. Fewer than three vertices cannot work in an acyclic graph: a nonterminal position in a two-vertex graph can only move to the terminal other vertex, so its option-value set is $\{0\}$ and its value is one. Thus three vertices are necessary.

</details>

### Exercise 2.4
<a id="impartial-games-and-mex-ex-4"></a>

For subtraction set $\{1,2,3,4\}$, prove $g(n)=n\bmod5$, then identify the winning move from $n=13$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the consecutive-subtraction theorem or reproduce its residue induction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The residue of thirteen is three; a move to a zero value is winning.

</details>

<details>
<summary>Solution</summary>

**Solution.** The theorem with $k=4$ gives $g(n)=n\bmod5$. Explicitly, the available predecessor values contain every smaller residue needed for the mex and omit the current residue, with the small boundary heaps handled separately. Since $13\bmod5=3$, subtract three to reach ten, whose value is zero. Subtracting three is legal, so it supplies a winning move rather than only a positive-value diagnosis.

</details>

### Exercise 2.5
<a id="impartial-games-and-mex-ex-5"></a>

In the graph $A\to B,C$, $B\to T$, $C\to T$, with $T$ terminal, compute every value. Why does having two options not force $g(A)=2$?

<details>
<summary>Hint 1</summary>

**Hint.** Begin with the terminal vertex and move backward.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two options of $A$ have equal values.

</details>

<details>
<summary>Solution</summary>

**Solution.** We obtain $g(T)=0$, $g(B)=g(C)=1$, and $g(A)=\operatorname{mex}\{1\}=0$. The two outgoing moves contribute the same value, so their value set has one member and does not contain zero. Mex depends on the values present, not the number of arrows. This is another nonterminal P-position.

</details>

### Exercise 2.6
<a id="impartial-games-and-mex-ex-6"></a>

For subtraction set $\{2,3\}$, compute $g(8),g(9),g(10)$ from the worked prefix and identify which of these heaps are P.

<details>
<summary>Hint 1</summary>

**Hint.** Only predecessors two and three steps earlier are relevant.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $g(5)=0,g(6)=0,g(7)=1$ before calculating subsequent entries.

</details>

<details>
<summary>Solution</summary>

**Solution.** The values are $g(8)=\operatorname{mex}\{g(6),g(5)\}=\operatorname{mex}\{0\}=1$, $g(9)=\operatorname{mex}\{g(7),g(6)\}=\operatorname{mex}\{1,0\}=2$, and $g(10)=\operatorname{mex}\{g(8),g(7)\}=\operatorname{mex}\{1\}=0$. Thus ten is P, while eight and nine are N. The calculation again distinguishes nonempty losing heaps from terminal heaps.

</details>

### Exercise 2.7
<a id="impartial-games-and-mex-ex-7"></a>

Explain precisely why allowing subtraction zero invalidates the height-induction definition.

<details>
<summary>Hint 1</summary>

**Hint.** Describe the move from a heap to itself.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A self-loop would demand that a value be the mex of a set containing that same value.

</details>

<details>
<summary>Solution</summary>

**Solution.** With zero allowed, every heap can move to itself. The graph is not acyclic, and no strictly decreasing height supports the recursion. More strongly, if a supposed assignment satisfied the Grundy recursion, its option-value set at $n$ would contain $g(n)$, whereas the mex of a set is absent from that set. This contradiction shows that the usual recursion cannot assign a Grundy value under those rules.

</details>

### Exercise 2.8
<a id="impartial-games-and-mex-ex-8"></a>

A subtraction sequence has equal values at two indices. Explain why that alone does not certify a period, and state sufficient finite information from Theorem 2.11.

<details>
<summary>Hint 1</summary>

**Hint.** The next value can depend on several earlier positions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare full windows of length $\max S$ after all subtractions are available.

</details>

<details>
<summary>Solution</summary>

**Solution.** One repeated value does not determine the other predecessor values used by the recurrence, so the next values may differ. A sufficient certificate is equality of two complete windows of length $m=\max S$, with both windows ending at indices at least $m-1$. The deterministic update then propagates equality of every subsequent window. This proves an eventual period, although it need not be the least possible period.

</details>

### Exercise 2.9
<a id="impartial-games-and-mex-ex-9"></a>

Show that for any integer $r\ge0$, some finite impartial position has Grundy value $r$.

<details>
<summary>Hint 1</summary>

**Hint.** Construct positions in increasing order of their desired values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Give the new position one move to each previously constructed value $0,\ldots,r-1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $P_0$ be terminal. Once $P_0,\ldots,P_{r-1}$ are constructed, give $P_r$ exactly those positions as options. All arrows go to smaller indices, so the resulting finite graph is acyclic. Induction gives $g(P_r)=\operatorname{mex}\{0,\ldots,r-1\}=r$. The construction also shows why there is no universal value bound independent of the number of options.

</details>

### Exercise 2.10
<a id="impartial-games-and-mex-ex-10"></a>

Explain how a table of all option values produces a winning strategy from every N-position, rather than only one sample play.

<details>
<summary>Hint 1</summary>

**Hint.** Use the zero-value classification at every position where your strategy must act.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choose a fixed ordering of options to make the rule unambiguous.

</details>

<details>
<summary>Solution</summary>

**Solution.** At each N-position choose the first legal option of value zero in a fixed ordering; such an option exists because a positive mex requires zero among the option values. Every opponent move from that P-position reaches an N-position, so the same rule applies again. Height decreases at every move, guaranteeing termination. The opponent cannot be the player making the final successful move from your sequence of restored P-positions, so the rule wins against every reply.

</details>

## Sources

Original exposition developed from the retained [Impartial Games](impartial-games.md) reading. A modern primary book reference is Aaron N. Siegel, [*Combinatorial Game Theory*](https://doi.org/10.1090/gsm/146), AMS, 2013. The finite recursion and fixed-window periodicity arguments needed here are proved above.

## Summary

Mex records the first missing option value. Height induction makes Grundy values well defined on a finite acyclic impartial normal-play graph, and zero values are exactly the P-positions. Actual option data turn that classification into a strategy. Finite subtraction sets have bounded values and eventually repeating recurrence windows; a numerical prefix alone does not certify its period. The next chapter develops nim addition before the general sum theorem.

