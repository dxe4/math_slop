# Divide a triangle side by a bisector

*Medium · [Geometry and trigonometry problems](index.md)*

In triangle $ABC$, $AB=8$, $AC=12$ and $BC=10$. The internal bisector of angle $A$ meets $BC$ at $D$. Find $BD$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The internal angle-bisector theorem gives $BD/DC=AB/AC$.

</details>

<details>
<summary>Hint 2</summary>

Write $BD=2t$ and $DC=3t$, then use their sum.

</details>

<details>
<summary>Worked solution</summary>

Combine a bisector ratio with the complete opposite side.

1. The given lengths satisfy the strict triangle inequalities, so the triangle is nondegenerate.
2. The bisector theorem gives $BD:DC=8:12=2:3$.
3. Writing the parts as $2t,3t$ gives $5t=10$, hence $t=2$.
4. Therefore $BD=4$.

</details>
