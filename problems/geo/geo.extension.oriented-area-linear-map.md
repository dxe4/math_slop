# Track orientation and area under a map

*Medium · [Geometry and trigonometry problems](index.md)*

A counterclockwise triangle has signed area $8$. Apply the linear map with matrix $\begin{pmatrix}1&2\\3&4\end{pmatrix}$. Find the image signed area, with counterclockwise areas positive.

```answer
{"answer":{"kind":"integer","expected":"-16","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Signed area is multiplied by the determinant.

</details>

<details>
<summary>Hint 2</summary>

Keep the determinant sign rather than using its absolute value.

</details>

<details>
<summary>Worked solution</summary>

Use the determinant as an oriented area multiplier.

1. The determinant is $1\cdot4-2\cdot3=-2$.
2. The image signed area is $(-2)\cdot8=-16$.
3. The negative sign records reversed orientation; the ordinary image area is $16$.

</details>
