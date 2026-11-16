# Reciprocal gap telescope

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\sum_{n=1}^{\infty}1/[n(n+2)]$ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use partial fractions with a gap of two indices.

</details>

<details>
<summary>Hint 2</summary>

Write the first and last uncancelled terms of a finite sum.

</details>

<details>
<summary>Worked solution</summary>

Both tail terms vanish, so the value is $3/4$.

1. $1/[n(n+2)]=\frac12(1/n-1/(n+2))$.
2. The partial sum through $N$ is $\frac12(1+1/2-1/(N+1)-1/(N+2))$.
3. Both tail terms vanish, so the value is $3/4$.

</details>
