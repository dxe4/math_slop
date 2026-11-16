# Cauchy condensation complete

*Hard · [Original Putnam-style training](index.md)*

For a positive nonincreasing sequence $(a_n)$, prove $\sum_{n\ge1}a_n$ converges iff $\sum_{k\ge0}2^k a_{2^k}$ converges.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Group the original terms in dyadic blocks $2^k\le n<2^{k+1}$.

</details>

<details>
<summary>Hint 2</summary>

Use monotonicity to obtain both an upper and a shifted lower block bound.

</details>

<details>
<summary>Model proof</summary>

Conversely, if the original series converges, summing lower bounds shows $\sum_{k\ge0}2^k a_{2^{k+1}}<\infty$. The latter is one-half of the condensed series with its first term removed, so the condensed series converges.

1. Block $k$ has $2^k$ terms. Monotonicity gives $2^k a_{2^{k+1}}\le\sum_{n=2^k}^{2^{k+1}-1}a_n\le2^k a_{2^k}$.
2. If the condensed series converges, the upper bounds make the sum of all original blocks finite.
3. Conversely, if the original series converges, summing lower bounds shows $\sum_{k\ge0}2^k a_{2^{k+1}}<\infty$. The latter is one-half of the condensed series with its first term removed, so the condensed series converges.

**Self-assessment rubric**

- Bound each dyadic block above and below using monotonicity.
- Use upper bounds to transfer condensed convergence to the original series.
- Use shifted lower bounds to transfer original convergence back to the condensed series.

</details>
