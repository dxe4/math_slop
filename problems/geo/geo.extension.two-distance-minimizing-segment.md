# Describe the full minimum-distance-sum locus

*Medium · [Geometry and trigonometry problems](index.md)*

$A=(1,2)$ and $B=(7,2)$. As $P$ varies over the plane, minimize $PA+PB$. Every minimizing point has $y=2$; enter the interval of its possible $x$-coordinates.

```answer
{"answer":{"kind":"interval","expected":"[1,7]","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Triangle inequality bounds the sum below by $AB$.

</details>

<details>
<summary>Hint 2</summary>

Equality holds exactly when $P$ lies on the closed segment between $A,B$.

</details>

<details>
<summary>Worked solution</summary>

Use both the triangle inequality and its equality condition.

1. Triangle inequality gives $PA+PB\ge AB=6$.
2. Equality occurs precisely when the two path segments form the straight segment from $A$ to $B$, including the endpoints.
3. That segment has $y=2$ and $1\le x\le7$. Thus the requested interval is $[1,7]$.

</details>
