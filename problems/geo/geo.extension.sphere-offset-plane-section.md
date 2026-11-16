# Find an off-center sphere section area

*Medium · [Geometry and trigonometry problems](index.md)*

A sphere has radius $5$. A plane is at perpendicular distance $3$ from its center. The section disk has area $q\pi$. Find $q$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An axial view of a radius-5 sphere shows a plane section as chord AB. Its center M is 3 units from sphere center O, measured perpendicularly." style="max-width:100%;height:auto"><circle cx="240" cy="200" r="140" fill="none" stroke="currentColor" stroke-width="2"/><line x1="128" y1="284" x2="352" y2="284" stroke="currentColor" stroke-width="2"/><line x1="240" y1="200" x2="240" y2="284" stroke="currentColor" stroke-width="2"/><line x1="240" y1="200" x2="128" y2="284" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="200" r="3" fill="currentColor"/><text x="247" y="192" fill="currentColor" font-size="16">O</text><circle cx="240" cy="284" r="3" fill="currentColor"/><text x="247" y="276" fill="currentColor" font-size="16">M</text><circle cx="128" cy="284" r="3" fill="currentColor"/><text x="135" y="276" fill="currentColor" font-size="16">A</text><circle cx="352" cy="284" r="3" fill="currentColor"/><text x="359" y="276" fill="currentColor" font-size="16">B</text><text x="145" y="225" fill="currentColor" font-size="15">OA = 5</text><text x="250" y="245" fill="currentColor" font-size="15">OM = 3</text><text x="145" y="315" fill="currentColor" font-size="15">Plane section in axial view</text></svg><figcaption>Axial schematic, not drawn to scale. Use the stated radius 5 and perpendicular offset 3; do not measure the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The section center is the perpendicular foot of the sphere center.

</details>

<details>
<summary>Hint 2</summary>

The sphere radius, offset and section radius form a right triangle.

</details>

<details>
<summary>Worked solution</summary>

Use Pythagoras in a radius cross section.

1. Let the section radius be $r$. The perpendicular offset is orthogonal to every section radius.
2. Thus $r^2+3^2=5^2$, giving $r^2=16$.
3. The disk area is $16\pi$, so $q=16$.

</details>
