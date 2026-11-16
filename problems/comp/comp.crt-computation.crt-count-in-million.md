# Count representatives of a residue class

*Medium · [Computational arithmetic problems](index.md)*

How many integers $x$ in $1\leq x\leq1000000$ satisfy $x\equiv2\pmod3$ and $x\equiv3\pmod5$?

```answer
{"answer":{"kind":"integer","expected":"66667","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

First combine the two congruences into one modulo fifteen.

</details>

<details>
<summary>Hint 2</summary>

Count the resulting arithmetic progression including its first term.

</details>

<details>
<summary>Worked solution</summary>

CRT determines the progression, and the bound determines its length.

1. The simultaneous congruences give $x\equiv8\pmod{15}$.
2. Write $x=8+15k$ with $k\geq0$. The upper bound gives $k\leq66666$.
3. There are $66667$ allowed values of $k$.

</details>
