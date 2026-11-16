# Find a basis of an intersection

*Medium · [Linear algebra problems](index.md)*

Let $U=\{(x,y,z):x+y+z=0\}$ and $V=\{(x,y,z):x-y=0\}$. Find the generator of the line $U\cap V$ whose first coordinate is $1$.

```answer
{"answer":{"kind":"vector","expected":[1,1,-2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A vector in the intersection must satisfy both defining equations.

</details>

<details>
<summary>Hint 2</summary>

Use the equality forced by the second plane in the equation for the first plane.

</details>

<details>
<summary>Worked solution</summary>

Intersect subspaces by imposing all their defining linear conditions.

1. From $x-y=0$ we obtain $y=x$.
2. Then $x+y+z=0$ becomes $z=-2x$, so the intersection consists of $x(1,1,-2)$.
3. The normalization $x=1$ selects the vector $[1,1,-2]$.

</details>
