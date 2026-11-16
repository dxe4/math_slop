# Read a coefficient after a monomial shift

*Medium · [Combinatorics](index.md)*

Working with formal power series, find the coefficient of $x^6$ in (1-x^3)/(1-x)^2. You may use that the coefficient of x^n in (1-x)^(-2) is n+1 for n&gt;=0.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The shifted term uses the coefficient three places earlier.

</details>

<details>
<summary>Hint 2</summary>

Use zero-based exponents, not one-based positions in a list.

</details>

<details>
<summary>Worked solution</summary>

Multiplication by a monomial shifts every coefficient index.

1. The unshifted coefficient at exponent six is seven.
2. The term multiplied by x cubed contributes the old coefficient at exponent three, which is four.
3. Subtracting gives coefficient three; the calculation is formal and needs no analytic convergence assumption.

</details>
