# Calculate a left-endpoint sum on a scaled interval

*Medium · [Calculus](index.md)*

For $f(x)=x^2$ on \[0,2\], use four equal subintervals and left endpoints. Find the Riemann sum.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":4},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The interval width is two, so each subinterval has width one half.

</details>

<details>
<summary>Hint 2</summary>

List only the four left endpoints, excluding the final right endpoint.

</details>

<details>
<summary>Worked solution</summary>

A Riemann sum combines sampling convention and mesh width.

1. The left endpoints are 0,1/2,1,3/2, with squared values 0,1/4,1,9/4.
2. Their sum is seven halves.
3. Multiplying by the width one half gives the Riemann sum seven quarters.

</details>
