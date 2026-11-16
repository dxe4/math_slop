# Evaluate a geometric fixed-point error bound

*Easy · [Real analysis](index.md)*

For a contraction with q=2/5 and iterates x\_n, the fixed-point estimate is $d(x_n,x_*)\le q^n d(x_1,x_0)/(1-q)$. If d(x\_1,x\_0)=3/2, find this bound at n=2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Exact requested metric observation or finite covering count only; no completeness proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The exponent uses the requested index two.

</details>

<details>
<summary>Hint 2</summary>

Divide by 1-q after multiplying the initial-step size.

</details>

<details>
<summary>Worked solution</summary>

The first-step displacement supplies a whole-tail geometric estimate.

1. At n=2, q^n=4/25 and 1-q=3/5.
2. The bound is (4/25)\*(3/2)/(3/5).
3. This simplifies to 2/5.

</details>
