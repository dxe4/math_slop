# Compute the variance of a deterministic Brownian step integral

*Easy · [Probability problems](index.md)*

Let $0=t_0<\cdots<t_m=T$ and let $f=\sum_{k=1}^m a_k1_{(t_{k-1},t_k]}$ be a real deterministic step function. For standard Brownian motion, define $I(f)=\sum_ka_k(B_{t_k}-B_{t_{k-1}})$. Prove $E[I(f)]=0$ and $E[I(f)^2]=\int_0^T f(t)^2\,dt$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Disjoint Brownian increments have zero means and are independent.

</details>

<details>
<summary>Hint 2</summary>

Keep only the diagonal terms when expanding the square.

</details>

<details>
<summary>Model proof</summary>

Independent increments make the finite stochastic sum an exact weighted variance sum.

1. Each increment has mean zero, so linearity gives $E[I(f)]=0$.
2. Distinct increments are independent with zero means; their mixed products therefore have zero expectation. The $k$th diagonal term is $a_k^2(t_k-t_{k-1})$.
3. Summing those terms gives $E[I(f)^2]=\sum_ka_k^2(t_k-t_{k-1})$, exactly the step-function integral of $f^2$.

**Self-assessment rubric**

- Use the zero means of all increments.
- Justify eliminating the mixed terms by increment independence.
- Match the remaining finite variance sum with the deterministic integral.

</details>
