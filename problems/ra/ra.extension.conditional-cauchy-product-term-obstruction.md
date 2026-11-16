# Show a product can fail before any sum interchange is considered

*Medium · [Real analysis](index.md)*

The series with terms a\_n=(-1)^n/sqrt(n+1), n&gt;=0, converges by the alternating criterion. Prove its Cauchy product with itself diverges by showing the product coefficients $c_n=\sum_{k=0}^n a_k a_{n-k}$ do not tend to zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

All summands in c\_n have the same sign.

</details>

<details>
<summary>Hint 2</summary>

Use the arithmetic-geometric mean bound on (k+1)\*(n-k+1).

</details>

<details>
<summary>Model proof</summary>

A conditional Cauchy product need not satisfy even the necessary term condition.

1. Every summand has sign (-1)^n, so \|c\_n\|=sum\_(k=0)^n 1/sqrt((k+1)\*(n-k+1)).
2. The two positive factors sum to n+2, hence their product is at most ((n+2)/2)^2. Each reciprocal square root is therefore at least 2/(n+2).
3. There are n+1 summands, so \|c\_n\|&gt;=2\*(n+1)/(n+2), tending to two. In particular c\_n does not tend to zero, and the Cauchy-product series diverges.

**Self-assessment rubric**

- Prevent cancellation by identifying the sign of every summand.
- Apply the arithmetic-geometric mean estimate to each denominator.
- Convert the nonvanishing coefficient bound into series divergence.

</details>
