# Chebyshev sorted sums

*Hard · [Original Putnam-style training](index.md)*

If $a_1\le\cdots\le a_n$ and $b_1\le\cdots\le b_n$, prove $n\sum_i a_ib_i\ge(\sum_i a_i)(\sum_i b_i)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Express the difference as a sum over pairs of indices.

</details>

<details>
<summary>Hint 2</summary>

Each pair has factors with the same sign because both sequences are ordered.

</details>

<details>
<summary>Model proof</summary>

The difference is therefore nonnegative, proving the inequality.

1. Expanding gives $n\sum_i a_ib_i-(\sum_i a_i)(\sum_j b_j)=\sum_{i<j}(a_j-a_i)(b_j-b_i)$.
2. Every summand on the right is nonnegative by the common ordering.
3. The difference is therefore nonnegative, proving the inequality.

**Self-assessment rubric**

- Derive the exact pairwise-difference identity for the sum discrepancy.
- Use common ordering to show every pair contribution is nonnegative.
- Conclude the claimed inequality from that nonnegative decomposition.

</details>
