# Unit square geometric kernel

*Hard · [Original Putnam-style training](index.md)*

Prove $\int_0^1\int_0^1(1-xy)^{-1}\,dx\,dy=\sum_{n=1}^\infty n^{-2}$, interpreting the corner singularity as an improper integral.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the nonnegative geometric expansion for $xy<1$.

</details>

<details>
<summary>Hint 2</summary>

Apply Tonelli before evaluating any series.

</details>

<details>
<summary>Model proof</summary>

Each factor is $1/(k+1)$, so the sum is $\sum_{k=0}^\infty1/(k+1)^2=\sum_{n=1}^\infty n^{-2}$, finite by comparison.

1. Except at the single corner $(1,1)$, $(1-xy)^{-1}=\sum_{k=0}^\infty (xy)^k$ with nonnegative terms. The corner has measure zero.
2. Tonelli gives the double integral as $\sum_{k=0}^\infty(\int_0^1x^k dx)(\int_0^1y^k dy)$.
3. Each factor is $1/(k+1)$, so the sum is $\sum_{k=0}^\infty1/(k+1)^2=\sum_{n=1}^\infty n^{-2}$, finite by comparison.

**Self-assessment rubric**

- State the geometric expansion away from the single singular corner.
- Use nonnegative terms to exchange the double integral and infinite sum.
- Evaluate both monomial integrals and identify the convergent square-reciprocal series.

</details>
