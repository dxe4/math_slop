# Compose reciprocal homotheties at different centers

*Medium · [Geometry and trigonometry problems](index.md)*

Apply dilation of factor $2$ centered at $(0,0)$, then dilation of factor $1/2$ centered at $(3,0)$. Their composition is a translation. Enter its displacement vector.

```answer
{"answer":{"kind":"vector","expected":["3/2","0"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

A dilation of factor $s$ and center $C$ is $C+s(P-C)$.

</details>

<details>
<summary>Hint 2</summary>

Apply the second rule to the first image $2P$.

</details>

<details>
<summary>Worked solution</summary>

Expand the affine formulas in the stated order.

1. For a position vector $p$, the first image is $2p$.
2. The second is $(3,0)+(1/2)(2p-(3,0))=p+(3/2,0)$.
3. The net translation vector is $[3/2,0]$, even though the two scale factors multiply to one.

</details>
