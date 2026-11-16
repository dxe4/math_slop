# Linear integer equations: recognize complete integer family

*Medium · [Number theory](index.md)*

Which numbered formula gives every integer solution of $6x + 9y = 3$ exactly as t ranges over all integers? $1$: $x=-1+3t, y=1-2t$. $2$: $x=-1+2t, y=1-3t$. $3$: $x=-1+3t, y=1+2t$. Return all correct formula numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

A valid family must satisfy the equality for every integer t.

</details>

<details>
<summary>Hint 2</summary>

After dividing by $3$, the equation is $2x + 3y = 1$; compare its solutions to $(-1,1)$.

</details>

<details>
<summary>Worked solution</summary>

A full parametrization needs both validity and completeness; selecting it is a structured recognition task.

1. Formula $1$ gives $6$($-1+3t$)+$9$($1-2t$)=$3$. For any solution, $2$($x+1$)=$-3$($y-1$), so $x+1=3t$ and $y-1=-2t$ for an integer t.
2. The other formulas leave a nonzero coefficient of t, so only formula $1$ is complete and valid.

</details>
