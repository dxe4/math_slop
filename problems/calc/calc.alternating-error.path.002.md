# Alternating-series error: solve next term tolerance

*Medium · [Calculus](index.md)*

For Σ from $n=1$ to $\infty$ of $(-1)^{n+1}/n^{2}$, magnitudes decrease to zero. Find the least positive number N of initial terms such that the theorem’s next-term bound is at most $1/100$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

Use the term indexed $N+1$.

</details>

<details>
<summary>Hint 2</summary>

The tolerance says at most, so equality is allowed.

</details>

<details>
<summary>Worked solution</summary>

Requiring $1/(N+1)^{2}\leq 1/100$ gives $N+1\geq 10$, hence the least positive integer N is $9$.

1. The next-term bound is $1/(N+1)^{2}$.
2. Requiring $1/(N+1)^{2}\leq 1/100$ gives $N+1\geq 10$, hence the least positive integer N is $9$.

</details>
