# Linear integer equations: integer equation solvability

*Easy · [Number theory](index.md)*

For which k in $\{3,4,7,14\}$ does $6x + 10y = k$ have an integer solution? Return all such k. You may use the theorem that ax + by = k is solvable over integers exactly when gcd(a,b) divides k.

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,14],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Compute $\gcd (6,10)$.

</details>

<details>
<summary>Hint 2</summary>

Apply the divisibility condition to each supplied k.

</details>

<details>
<summary>Worked solution</summary>

Solvability is controlled by the gcd, with integer coefficients required.

1. gcd(6,10)=2, so exactly the even candidate right sides qualify.
2. These are $4$ and $14$, hence the set $\{4,14\}$.

</details>
