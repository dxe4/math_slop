# Weighted cauchy sharp

*Hard · [Original Putnam-style training](index.md)*

For $w_i>0$ and real $x_i$, prove $(\sum_i x_i)^2\le(\sum_i w_i)(\sum_i x_i^2/w_i)$, and characterize equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Rewrite each $x_i$ as a product of a square-root weight and a quotient.

</details>

<details>
<summary>Hint 2</summary>

Use the equality condition in Cauchy–Schwarz.

</details>

<details>
<summary>Model proof</summary>

Equality holds exactly when $(x_i/\sqrt{w_i})$ is proportional to $(\sqrt{w_i})$, equivalently $x_i=cw_i$ for one real constant $c$.

1. Write $x_i=\sqrt{w_i}(x_i/\sqrt{w_i})$. The two vectors are square-summable because the index set is finite and weights are positive.
2. Cauchy–Schwarz gives the stated inequality after squaring the dot product.
3. Equality holds exactly when $(x_i/\sqrt{w_i})$ is proportional to $(\sqrt{w_i})$, equivalently $x_i=cw_i$ for one real constant $c$.

**Self-assessment rubric**

- Factor each x\_i into square-root weight and weighted quotient.
- Apply finite Cauchy–Schwarz to obtain the exact inequality.
- Translate equality into x\_i=cw\_i for all i.

</details>
