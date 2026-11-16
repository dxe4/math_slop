# An unordered card hand

*Medium · [Probability problems](index.md)*

Two cards are drawn uniformly without replacement from a standard $52$-card deck containing four aces. Find the probability that both cards are aces.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":221},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Either count two-card hands or use a sequential product, consistently.

</details>

<details>
<summary>Hint 2</summary>

The second draw is made from a smaller deck after an ace has already been drawn.

</details>

<details>
<summary>Worked solution</summary>

Account for sampling without replacement in both factors.

1. The first card is an ace with probability $4/52$.
2. Given that success, the second is an ace with probability $3/51$.
3. The product is $12/(52\cdot51)=1/221$.

</details>
