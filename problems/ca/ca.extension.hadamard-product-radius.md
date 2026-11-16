# Distinguish coefficientwise and ordinary series multiplication

*Medium · [Complex analysis problems](index.md)*

Let f(z)=1/(1-2z)=sum a\_n z^n and g(z)=1/(1-3z)=sum b\_n z^n near zero. The coefficientwise product is $H(z)=\sum_{n\ge0}a_nb_nz^n$. Find the square of its radius of convergence.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":36},"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Do not convolve the coefficient sequences.

</details>

<details>
<summary>Hint 2</summary>

The coefficientwise product is itself geometric.

</details>

<details>
<summary>Worked solution</summary>

The chosen product multiplies matching coefficients rather than matching total degrees.

1. The coefficients are a\_n=2^n and b\_n=3^n.
2. Hence H(z)=sum 6^n z^n=1/(1-6z) near zero.
3. Its radius is 1/6, whose square is 1/36.

</details>
