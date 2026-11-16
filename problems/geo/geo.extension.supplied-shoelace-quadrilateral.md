# Use an ordered polygon area sum

*Easy · [Geometry and trigonometry problems](index.md)*

A polygon has boundary-order vertices $(0,0),(4,0),(4,3),(0,1)$. Use the shoelace formula $A=|\sum x_i y_{i+1}-\sum y_i x_{i+1}|/2$, with cyclic indices, to find its area.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the vertices in the given boundary order and return to the first vertex.

</details>

<details>
<summary>Hint 2</summary>

The forward products total $16$ and the backward products are all zero.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied ordered-coordinate formula.

1. The forward sum is $0\cdot0+4\cdot3+4\cdot1+0\cdot0=16$.
2. The reverse sum is $0\cdot4+0\cdot4+3\cdot0+1\cdot0=0$.
3. The area is $|16-0|/2=8$.

</details>
