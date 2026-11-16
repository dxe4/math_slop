# Absolute series permutation

*Hard · [Original Putnam-style training](index.md)*

If $\sum_{n\ge1}|a_n|<\infty$ and $\pi:\mathbb N\to\mathbb N$ is a permutation, prove $\sum_{j\ge1}a_{\pi(j)}=\sum_{n\ge1}a_n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Choose an original finite prefix with an arbitrarily small absolute tail.

</details>

<details>
<summary>Hint 2</summary>

A sufficiently long permuted prefix contains every term of that original prefix.

</details>

<details>
<summary>Model proof</summary>

The difference between that partial sum and $S$ is bounded by at most $2\varepsilon$ via the two tail sums. Letting $\varepsilon\downarrow0$ gives equality.

1. Let $S=\sum a_n$. Given $\varepsilon>0$, choose $N$ with $\sum_{n>N}|a_n|<\varepsilon$.
2. Choose $M$ so $\{1,\ldots,N\}\subseteq\{\pi(1),\ldots,\pi(M)\}$. For every $m\ge M$, the permuted partial sum contains the first $N$ terms; all extra terms come from the absolute tail.
3. The difference between that partial sum and $S$ is bounded by at most $2\varepsilon$ via the two tail sums. Letting $\varepsilon\downarrow0$ gives equality.

**Self-assessment rubric**

- Choose an original prefix with a small absolute tail.
- Take a permuted prefix containing every chosen original term.
- Bound the remaining discrepancy and conclude equality of sums.

</details>
