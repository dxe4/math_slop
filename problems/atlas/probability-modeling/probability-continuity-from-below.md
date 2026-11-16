# Continuity of probability from below

*Difficulty 5 of 5 · [Probability modeling](index.md) · exercise 14 of 15*

Let $A_1\subseteq A_2\subseteq\cdots$ and $A=\bigcup_n A_n$. Derive $P(A_n)\to P(A)$ directly from countable additivity by introducing disjoint increments.

<details>
<summary>Hint 1</summary>

Set $B_1=A_1$ and $B_n=A_n\setminus A_{n-1}$

</details>

<details>
<summary>Hint 2</summary>

$A_n$ is the union of the first $n$ increments

</details>

<details>
<summary>Worked solution</summary>

Define disjoint $B_1=A_1$ and $B_n=A_n\setminus A_{n-1}$ for $n\ge2$. Then $A_n=\bigcup_{k\le n}B_k$ and $A=\bigcup_{k\ge1}B_k$. Countable additivity gives $P(A)=\sum_{k\ge1}P(B_k)$, while finite additivity gives $P(A_n)=\sum_{k\le n}P(B_k)$. The partial sums of this nonnegative series converge to its sum, so $P(A_n)\to P(A)$. This is where countable, rather than only finite, additivity matters.

**Answer.** Disjoint increments turn $P(A_n)$ into partial sums of the countably additive series for $P(A)$.

</details>

*Tags: probability axiom, measure, countable additivity, proof*
