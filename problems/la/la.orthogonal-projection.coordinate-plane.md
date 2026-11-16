# Project onto a coordinate plane

*Easy · [Linear algebra problems](index.md)*

Find the Euclidean orthogonal projection of $(2,-3,5)$ onto the plane $z=0$.

```answer
{"answer":{"kind":"vector","expected":[2,-3,0],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The plane contains the first two coordinate directions.

</details>

<details>
<summary>Hint 2</summary>

Remove the component along the coordinate direction perpendicular to that plane.

</details>

<details>
<summary>Worked solution</summary>

The coordinate decomposition is already orthogonal.

1. Write $(2,-3,5)=(2,-3,0)+(0,0,5)$.
2. The first summand lies in $z=0$ and the second is perpendicular to every vector in that plane.
3. Hence the orthogonal projection is $[2,-3,0]$.

</details>
