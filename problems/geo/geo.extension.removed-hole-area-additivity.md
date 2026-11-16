# Subtract a wholly contained hole

*Easy · [Geometry and trigonometry problems](index.md)*

A plane region has area $80$. A smaller region of area $12$, wholly inside it, is removed. Find the area left. Boundaries have area zero.

```answer
{"answer":{"kind":"integer","expected":"68","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The smaller region is entirely contained, so its whole area is removed.

</details>

<details>
<summary>Hint 2</summary>

Use area additivity for the removed and remaining pieces.

</details>

<details>
<summary>Worked solution</summary>

Subtract the contained area.

1. The original region is the union of the removed piece and the remainder up to boundaries.
2. Their areas therefore satisfy $80=12+A$.
3. Thus the remaining area is $A=68$.

</details>
