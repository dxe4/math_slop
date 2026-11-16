# A factorial coefficient radius

*Medium · [Complex analysis problems](index.md)*

Find the radius of convergence of $\sum_{n=0}^{\infty}n!z^n$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a fixed nonzero argument, compare the moduli of consecutive terms.

</details>

<details>
<summary>Hint 2</summary>

Determine whether the terms can tend to zero at such an argument.

</details>

<details>
<summary>Worked solution</summary>

Factorial growth defeats every fixed nonzero power-series argument.

1. For $z\ne0$, the consecutive term-modulus ratio is $(n+1)|z|$.
2. This eventually exceeds any fixed bound greater than one, so the terms do not tend to zero.
3. The series converges only at its center, giving radius $0$.

</details>
