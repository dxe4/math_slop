# Construct an internal bisector direction

*Medium · [Geometry and trigonometry problems](index.md)*

Two rays from the origin have direction vectors $(3,4)$ and $(5,0)$. Find the primitive integer direction $[p,q]$ of their internal angle bisector with both entries positive.

```answer
{"answer":{"kind":"vector","expected":["2","1"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Add unit direction vectors, not the original vectors of different lengths.

</details>

<details>
<summary>Hint 2</summary>

After addition, multiply by a positive scalar to obtain coprime integer entries.

</details>

<details>
<summary>Worked solution</summary>

Use the sum of the two unit directions.

1. The unit directions are $(3/5,4/5)$ and $(1,0)$.
2. Their sum is $(8/5,4/5)$, parallel to $(2,1)$. Its equal dot products with the two unit rays show equal angles.
3. The vector $(2,1)$ has positive coprime entries and lies between the rays, so it is the requested internal direction.

</details>
