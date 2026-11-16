# Use a sum and a difference

*Easy · [Linear algebra problems](index.md)*

Solve $x+y=5$ and $x-y=1$. Enter the ordered vector $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":[3,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Adding the equations eliminates one variable.

</details>

<details>
<summary>Hint 2</summary>

Once one variable is known, substitute it into either original equation.

</details>

<details>
<summary>Worked solution</summary>

Combine the equations to isolate a variable.

1. Adding gives $2x=6$, so $x=3$.
2. Substituting in $x+y=5$ gives $y=2$.
3. The vector is $[3,2]$; it satisfies both $3+2=5$ and $3-2=1$.

</details>
