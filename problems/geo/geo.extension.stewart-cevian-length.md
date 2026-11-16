# Use Stewart for an unequal split

*Medium · [Geometry and trigonometry problems](index.md)*

In triangle $ABC$, $AB=13$, $AC=15$, $BC=14$. Point $D$ lies on $BC$ with $BD=5$ and $DC=9$. Find the cevian length $AD$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

A known side split suggests Stewart’s cevian identity: $AC^2BD+AB^2DC=BC(AD^2+BD\cdot DC)$.

</details>

<details>
<summary>Hint 2</summary>

After dividing by $14$, subtract $5\cdot9$ to isolate $AD^2$.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied cevian identity.

1. Stewart’s theorem applies to the interior cevian and gives $15^2\cdot5+13^2\cdot9=14(AD^2+45)$.
2. The left side is $225\cdot5+169\cdot9=2646$.
3. Dividing by $14$ gives $AD^2+45=189$.
4. Hence $AD^2=144$, and positivity gives $AD=12$.

</details>
