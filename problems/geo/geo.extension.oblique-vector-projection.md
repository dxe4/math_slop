# Project onto an oblique vector line

*Medium · [Geometry and trigonometry problems](index.md)*

Find the orthogonal projection of $v=(1,2)$ onto the line spanned by $u=(3,4)$. Enter the projection vector.

```answer
{"answer":{"kind":"vector","expected":["33/25","44/25"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The projection vector is $(v\cdot u)/(u\cdot u)$ times $u$.

</details>

<details>
<summary>Hint 2</summary>

The denominator is a squared norm, not the norm.

</details>

<details>
<summary>Worked solution</summary>

Normalize the direction through its squared length.

1. The dot products are $v\cdot u=11$ and $u\cdot u=25$.
2. The projection is $(11/25)(3,4)$.
3. Thus the vector is $[33/25,44/25]$; the residual has dot product zero with $u$.

</details>
