# An acute angle between two tangents at an intersection

*Medium · [Original olympiad-style problems](index.md)*

Two circles have radius $5$ and centers $(0,0)$ and $(6,0)$. At their upper intersection, consider the two tangent lines. Find the cosine of their smaller angle.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":25},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The upper intersection is $(3,4)$. Tangent directions can be chosen perpendicular to the two radius vectors.

</details>

<details>
<summary>Hint 2</summary>

Use direction vectors $(4,-3)$ and $(4,3)$, taking the absolute dot product for the smaller line angle.

</details>

<details>
<summary>Worked solution</summary>

The tangent-line angle can be computed without inverse trigonometric functions.

1. Subtracting the two circle equations gives $x=3$, and the upper intersection has $y=4$. The two radius vectors are $(3,4)$ and $(-3,4)$.
2. Perpendicular tangent vectors are $(4,-3)$ and $(4,3)$, both of length $5$. Their dot product is $16-9=7$.
3. The cosine of the acute angle between the unoriented lines is $|7|/25=7/25$. The positive value also confirms that this chosen direction angle is the smaller one.

</details>
