# Until the first success

*Difficulty 3 of 5 · [Probability modeling](index.md) · exercise 5 of 15*

A fair coin is tossed until the first head. Let $X$ be the number of tosses. Find $P(X>k)$ and $E[X]$. Explain the role of the memoryless structure.

<details>
<summary>Hint 1</summary>

$X>k$ means the first $k$ tosses are tails

</details>

<details>
<summary>Hint 2</summary>

Use the tail-sum formula $E[X]=\sum_{k=0}^{\infty}P(X>k)$

</details>

<details>
<summary>Worked solution</summary>

The event $X>k$ occurs exactly when the first $k$ tosses are all tails, so $P(X>k)=(1/2)^k$. Therefore $E[X]=\sum_{k=0}^{\infty}P(X>k)=\sum_{k=0}^{\infty}(1/2)^k=2$. After any number of tails, independence makes the remaining waiting time have the same distribution as at the start; no accumulated run makes a head 'due'.

**Answer.** $P(X>k)=2^{-k}$ and $E[X]=2$.

</details>

*Tags: geometric distribution, expectation, memoryless*
