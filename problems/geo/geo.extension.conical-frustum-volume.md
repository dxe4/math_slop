# Combine all frustum volume terms

*Medium · [Geometry and trigonometry problems](index.md)*

A right circular conical frustum has perpendicular height $6$, lower radius $4$ and upper radius $2$. Write its volume as $q\pi$ and find $q$.

```answer
{"answer":{"kind":"integer","expected":"56","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Extend the sloping sides to restore a complete cone and compare the removed cone to it by similarity.

</details>

<details>
<summary>Hint 2</summary>

The upper-to-lower radius ratio is $1/2$, so the removed cone height is half the full height; their difference is $6$.

</details>

<details>
<summary>Worked solution</summary>

Recover and subtract two similar cones.

1. Let the removed small cone have height $h$. Its radius is $2$, half the complete cone radius $4$, so the complete height is $2h$.
2. The frustum height is $2h-h=6$, so the two cone heights are $6$ and $12$.
3. The complete cone volume is $\pi\cdot4^2\cdot12/3=64\pi$. The removed cone volume is $\pi\cdot2^2\cdot6/3=8\pi$.
4. The retained volume is $56\pi$, giving $q=56$.

</details>
