# Linear integer equations: enumerate integer feasible inputs

*Medium · [Number theory](index.md)*

Find every integer x from $0$ through $5$ for which some integer y satisfies $4x + 6y = 14$. Return the set of x values.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,5],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Solve $y = (14 - 4x)/6$.

</details>

<details>
<summary>Hint 2</summary>

Keep only x values giving an integer quotient.

</details>

<details>
<summary>Worked solution</summary>

Integer feasibility differs from real-valued solvability.

1. For $x=0,1,2,3,4,5$, calculate $y=(14-4x)/6$. The resulting values are $7/3,5/3,1,1/3,-1/3,-1$.
2. Exactly $x=2$ and $x=5$ give integer y values, respectively $1$ and $-1$. Since every allowed x was tested, the complete set is $\{2,5\}$.

</details>
