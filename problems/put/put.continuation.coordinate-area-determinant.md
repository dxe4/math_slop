# Coordinate area determinant

*Medium · [Original Putnam-style training](index.md)*

Find the area of the triangle with vertices $(1,1)$, $(5,2)$, $(2,6)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":19,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Translate the first vertex to the origin.

</details>

<details>
<summary>Hint 2</summary>

Take half the absolute determinant of the two edge vectors.

</details>

<details>
<summary>Worked solution</summary>

The triangle area is half its absolute value, $19/2$.

1. The edge vectors from $(1,1)$ are $(4,1)$ and $(1,5)$.
2. Their determinant is $4\cdot5-1\cdot1=19$.
3. The triangle area is half its absolute value, $19/2$.

</details>
