# Count a rectangular array of unit cells

*Easy · [Geometry and trigonometry problems](index.md)*

A rectangle is tiled without gaps or overlaps by $5$ rows of $7$ unit squares. Find its area in square units.

```answer
{"answer":{"kind":"integer","expected":"35","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Each cell has area one.

</details>

<details>
<summary>Hint 2</summary>

Count cells by rows times cells per row.

</details>

<details>
<summary>Worked solution</summary>

Add the areas of disjoint equal cells.

1. There are $5\cdot7=35$ cells.
2. The interiors do not overlap and their union fills the rectangle.
3. Area additivity therefore gives $35$ square units.

</details>
