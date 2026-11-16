# Find the small triangle between trapezoid diagonals

*Medium · [Geometry and trigonometry problems](index.md)*

Convex trapezoid $ABCD$ has $AB\parallel CD$, $AB=6$, $CD=12$ and perpendicular height $9$. Its diagonals meet at $O$. Find the area of triangle $AOB$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Triangles $AOB,COD$ are similar with base ratio $1:2$.

</details>

<details>
<summary>Hint 2</summary>

Their altitudes to the parallel bases add to $9$ and have ratio $1:2$.

</details>

<details>
<summary>Worked solution</summary>

Split the trapezoid height using diagonal similarity.

1. Vertical angles at $O$ and the parallel bases give similarity of $AOB,COD$.
2. Their altitude ratio is $6:12=1:2$. Let the smaller altitude be $h$; then $h+2h=9$, so $h=3$.
3. Therefore $[AOB]=(1/2)\cdot6\cdot3=9$.

</details>
