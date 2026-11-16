# Count admissible integral third sides

*Medium · [Geometry and trigonometry problems](index.md)*

Two side lengths of a nondegenerate triangle are $7$ and $10$. The third side is a positive integer $x$. How many possible values of $x$ are there?

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Triangle inequalities give a strict lower and a strict upper bound.

</details>

<details>
<summary>Hint 2</summary>

Use $|10-7|<x<10+7$ and count integers, excluding endpoints.

</details>

<details>
<summary>Worked solution</summary>

Apply both directions of the triangle inequality.

1. The sum condition gives $x<17$. The difference condition gives $x>3$.
2. Thus the allowed integers are $4,5,\ldots,16$.
3. There are $16-4+1=13$ of them; $3$ and $17$ would give collinear degenerate triangles.

</details>
