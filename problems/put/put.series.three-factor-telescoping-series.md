# Telescope a cubic-denominator series

*Hard · [Original Putnam-style training](index.md)*

Find $\sum_{n=1}^{\infty}1/[n(n+1)(n+2)]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Express each term as a difference of two adjacent reciprocal products.

</details>

<details>
<summary>Hint 2</summary>

Write a finite partial sum before passing to a limit.

</details>

<details>
<summary>Worked solution</summary>

A partial-fraction difference exposes all boundary terms.

1. The summand equals $\frac12[1/(n(n+1))-1/((n+1)(n+2))]$.
2. The partial sum through N is $1/4-1/[2(N+1)(N+2)]$.
3. The final boundary term tends to zero, so the sum is $1/4$.

</details>
