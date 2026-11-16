# Shoelace from triangulation

*Hard · [Original Putnam-style training](index.md)*

For a simple polygon with counterclockwise vertices $(x_i,y_i)$, $i=1,\ldots,n$, and cyclic index $n+1=1$, prove its area is $\frac12\sum_i(x_i y_{i+1}-x_{i+1}y_i)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Triangulate the polygon using oriented triangles.

</details>

<details>
<summary>Hint 2</summary>

Interior edges cancel because adjacent triangles traverse them in opposite directions.

</details>

<details>
<summary>Model proof</summary>

Only the counterclockwise polygon boundary edges remain, yielding the stated cyclic determinant sum divided by two.

1. The oriented area of triangle with vectors $u,v$ from the origin is $\det(u,v)/2$; translating a triangle does not change this determinant area.
2. Triangulate the simple polygon. Summing oriented triangle boundary determinants cancels every interior edge, which occurs with opposite orientations in adjacent triangles.
3. Only the counterclockwise polygon boundary edges remain, yielding the stated cyclic determinant sum divided by two.

**Self-assessment rubric**

- State the determinant formula for an oriented triangle.
- Triangulate and cancel opposing interior edges.
- Identify the remaining cyclic boundary determinant sum.

</details>
