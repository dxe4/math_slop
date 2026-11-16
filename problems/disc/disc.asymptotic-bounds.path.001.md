# Bound a linear count

*Medium · [Discrete mathematics](index.md)*

For every integer $n\geq 2, T(n)=3n+2$. Find the smallest positive integer C such that T(n)≤Cn for every $n\geq 2$. $N=2$ is fixed.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks only this authored find-smallest-integer-factor task. Does not certify unrestricted proof validity, general construction ability or full mastery of asymptotic bounds."}}
```

<details>
<summary>Hint 1</summary>

Use $2\leq n$ on this domain.

</details>

<details>
<summary>Hint 2</summary>

Test smaller constants at $n=2$.

</details>

<details>
<summary>Worked solution</summary>

An eventual bound uses fixed constants before the later arbitrary input. These tasks apply explicit inequalities, without calculus or claims of general asymptotic-proof mastery.

1. For all n≥2, 3n+2≤4n, so $4$ works.
2. At $n=2, T=8$, whereas $C\leq 3$ gives Cn≤6. Thus $4$ is smallest.

</details>
