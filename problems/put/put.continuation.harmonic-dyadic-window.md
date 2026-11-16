# Harmonic dyadic window

*Medium · [Original Putnam-style training](index.md)*

Prove $\lim_{n\to\infty}\sum_{k=n+1}^{2n}1/k=\log2$ without assuming an asymptotic formula for harmonic numbers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Compare the sum with upper and lower Riemann sums for $1/x$.

</details>

<details>
<summary>Hint 2</summary>

The relevant integral runs from $1$ to $2$ after scaling by $n$.

</details>

<details>
<summary>Model proof</summary>

The limit is $\int_1^2 dx/x=\log2$.

1. Rewrite the sum as $n^{-1}\sum_{j=1}^n[1/(1+j/n)]$.
2. This is a right-endpoint Riemann sum for the continuous function $x\mapsto1/x$ on $[1,2]$; equivalently monotonicity gives matching integral bounds.
3. The limit is $\int_1^2 dx/x=\log2$.

**Self-assessment rubric**

- Rewrite the harmonic window as a scaled Riemann sum.
- Use continuity or monotone integral bounds to justify convergence.
- Evaluate the limiting integral over \[1,2\] as log 2.

</details>
