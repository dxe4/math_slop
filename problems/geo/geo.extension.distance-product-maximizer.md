# Maximize a product of distances to triangle sides

*Hard · [Geometry and trigonometry problems](index.md)*

Triangle $ABC$ has $BC=6$, $CA=5$, $AB=5$, and area $12$. For an interior point $P$, let $x,y,z$ be its perpendicular distances to $BC,CA,AB$, respectively. Find the maximum of $xyz$ as a rational number and explain where it occurs.

```answer
{"answer":{"kind":"rational","expected":{"numerator":256,"denominator":75},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The three triangles with vertex $P$ partition $ABC$, so $6x+5y+5z=24$.

</details>

<details>
<summary>Hint 2</summary>

Apply arithmetic-geometric mean to the three positive numbers $6x,5y,5z$, and interpret its equality condition as equal subtriangle areas.

</details>

<details>
<summary>Worked solution</summary>

Use an area-weighted product inequality.

1. Area additivity gives $(6x+5y+5z)/2=12$.
2. AM-GM therefore gives $(6x)(5y)(5z)\le(24/3)^3=512$.
3. Thus $xyz\le512/150=256/75$. Equality requires $6x=5y=5z=8$.
4. These equalities say the three subtriangles have equal areas. The centroid has precisely those three equal subtriangle areas and is interior, so it attains the bound.
5. Conversely equal subtriangle areas give equal barycentric coordinates, hence uniquely the centroid. The maximum is attained, rather than merely approached at a boundary.

</details>
