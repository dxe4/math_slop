# Recover a face altitude in a square pyramid

*Medium · [Geometry and trigonometry problems](index.md)*

A regular square pyramid has base edge $6$ and perpendicular height $4$, with apex directly above the base center. Find its total surface area, including the base.

```answer
{"answer":{"kind":"integer","expected":"96","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The perpendicular from the apex to a base-edge midpoint lies in a face.

</details>

<details>
<summary>Hint 2</summary>

Its horizontal leg is half a base side, not half a base diagonal.

</details>

<details>
<summary>Worked solution</summary>

Find a triangular face altitude before summing faces.

1. The face altitude is $\sqrt{4^2+3^2}=5$.
2. Each lateral triangle has area $6\cdot5/2=15$, so four faces contribute $60$.
3. The square base has area $36$, giving total $60+36=96$.

</details>
