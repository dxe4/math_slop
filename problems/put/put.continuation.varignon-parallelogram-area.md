# Varignon parallelogram area

*Hard · [Original Putnam-style training](index.md)*

For a convex quadrilateral $ABCD$, prove the midpoints of its sides form a parallelogram of area half that of $ABCD$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Express the midpoint side vectors using the original diagonals.

</details>

<details>
<summary>Hint 2</summary>

Compare determinant area formulas for the midpoint parallelogram and the quadrilateral.

</details>

<details>
<summary>Model proof</summary>

The midpoint parallelogram therefore has half the quadrilateral area.

1. Let $E,F,G,H$ be midpoints of $AB,BC,CD,DA$. Then $F-E=(C-A)/2=G-H$ and $G-F=(D-B)/2=H-E$, so $EFGH$ is a parallelogram.
2. Its area is $|\det(C-A,D-B)|/4$. The shoelace formula for convex ordered $ABCD$ gives area $|\det(C-A,D-B)|/2$.
3. The midpoint parallelogram therefore has half the quadrilateral area.

**Self-assessment rubric**

- Show opposite midpoint sides are equal and parallel.
- Compute midpoint and original quadrilateral areas from diagonal determinants.
- Conclude exact factor one half.

</details>
