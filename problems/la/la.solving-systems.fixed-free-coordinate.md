# Specify one free coordinate

*Easy · [Linear algebra problems](index.md)*

Find the solution of $x+2y-z=4$, $y+z=1$ with the additional requirement $z=2$. Enter $[x,y,z]$.

```answer
{"answer":{"kind":"vector","expected":[8,-1,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The prescribed value of the free coordinate makes the second equation directly solvable.

</details>

<details>
<summary>Hint 2</summary>

Substitute into the first equation only after finding the middle coordinate.

</details>

<details>
<summary>Worked solution</summary>

Back substitution finds the requested member of an affine solution family.

1. With $z=2$, the equation $y+z=1$ gives $y=-1$.
2. Then $x+2(-1)-2=4$, so $x=8$.
3. Thus $[x,y,z]=[8,-1,2]$; substitution gives $8-2-2=4$ and $-1+2=1$.

</details>
