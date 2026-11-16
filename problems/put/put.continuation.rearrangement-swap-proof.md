# Rearrangement swap proof

*Hard · [Original Putnam-style training](index.md)*

For sorted real numbers $a_1\le\cdots\le a_n$ and $b_1\le\cdots\le b_n$, prove $\sum_i a_ib_{\pi(i)}\le\sum_i a_ib_i$ for every permutation $\pi$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Find an inversion in the order of assigned $b$ values.

</details>

<details>
<summary>Hint 2</summary>

Swap the inverted pair and compute the change in the sum.

</details>

<details>
<summary>Model proof</summary>

No swap decreased the weighted sum, so the sorted assignment attains at least the original value.

1. If $i<j$ but $b_{\pi(i)}>b_{\pi(j)}$, swapping their assignments changes the sum by $(a_j-a_i)(b_{\pi(i)}-b_{\pi(j)})\ge0$.
2. Each such swap reduces the inversion count of the assigned sequence; after finitely many swaps, its values are sorted as $b_1,\ldots,b_n$.
3. No swap decreased the weighted sum, so the sorted assignment attains at least the original value.

**Self-assessment rubric**

- Compute the change from swapping an inverted pair of assigned b values.
- Explain why repeated swaps terminate in the sorted assignment.
- Conclude that the sorted pairing maximizes the weighted sum.

</details>
