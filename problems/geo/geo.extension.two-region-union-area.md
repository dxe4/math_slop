# Use overlap exactly once

*Medium · [Geometry and trigonometry problems](index.md)*

A rectangle has area $120$, a disk has area $25\pi$, and their intersection has area $10$. Their union has area $a+b\pi$. Enter $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["110","25"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Adding both region areas counts the intersection twice.

</details>

<details>
<summary>Hint 2</summary>

Subtract one copy of the intersection to retain it once.

</details>

<details>
<summary>Worked solution</summary>

Apply inclusion-exclusion for area.

1. The area sum before correcting overlap is $120+25\pi$.
2. Subtracting the intersection gives $120+25\pi-10=110+25\pi$.
3. Thus the requested vector is $[110,25]$.

</details>
