# Prime, composite or neither: small prime definition

*Easy · [Number theory](index.md)*

Return all primes in $\{1,2,13,25,29,35\}$. A prime is greater than $1$ with only positive divisors $1$ and itself.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,13,29],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

One nontrivial factor proves compositeness.

</details>

<details>
<summary>Hint 2</summary>

For each remaining candidate n, test integers $d\geq 2$ with $d\times d\leq n$. Any nontrivial factor pair has a smaller factor in this tested range.

</details>

<details>
<summary>Worked solution</summary>

Prime testing requires ruling out nontrivial factors.

1. $1$ is excluded by definition; $25 = 5 \times  5$ and $35 = 5 \times  7$ are composite.
2. For $13$, neither $2$ nor $3$ divides; for $29$, none of $2,3,4,5$ divides. Along with $2$, these give $\{2,13,29\}$.

</details>
