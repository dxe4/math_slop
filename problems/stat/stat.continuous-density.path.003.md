# Distinguish density height from point probability

*Medium · [Statistics and probability](index.md)*

A density is $f(x)=2$ on $[0,1/2]$ and zero elsewhere. Return its total area in area, the point probability $P(X=1/4)$ in point\_probability, and the density height $f(1/4)$ in height.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"area":"1","point_probability":"0","height":"2"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

A density gives interval probabilities by area.

</details>

<details>
<summary>Hint 2</summary>

A single point has zero width, even when the density is positive there.

</details>

<details>
<summary>Worked solution</summary>

Separate density height from probability mass.

1. The total area is height times width, $2(1/2)=1$, so the density is normalized.
2. A singleton has zero integral, giving $P(X=1/4)=0$.
3. The density height there is nevertheless $2$. Heights may exceed one; probabilities may not.

</details>
