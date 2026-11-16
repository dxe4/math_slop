# Measure a skew parallelepiped

*Medium · [Geometry and trigonometry problems](index.md)*

A parallelepiped has edge vectors $(1,2,0)$, $(0,1,1)$ and $(1,0,1)$ from one vertex. Find its ordinary volume.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Volume is the absolute scalar triple product.

</details>

<details>
<summary>Hint 2</summary>

Cross the second and third vectors, then dot with the first.

</details>

<details>
<summary>Worked solution</summary>

Use oriented volume before taking its magnitude.

1. The cross product of the second and third vectors is $(1,1,-1)$.
2. Dotting with $(1,2,0)$ gives $1+2=3$.
3. The ordinary volume is $|3|=3$ cubic units.

</details>
