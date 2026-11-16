# Find and certify a smallest enclosing disk

*Hard · [Geometry and trigonometry problems](index.md)*

Find the center and squared radius of the smallest closed disk containing $A=(0,0)$, $B=(6,0)$ and $C=(2,4)$. Enter $[h,k,R^2]$. Your explanation should certify minimality, rather than only find a circle through the points.

```answer
{"answer":{"kind":"vector","expected":["3","1","10"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

First solve the equal squared-distance equations for a candidate center.

</details>

<details>
<summary>Hint 2</summary>

Express that center as a convex combination of the three vertices, then average squared distances from any competing center.

</details>

<details>
<summary>Worked solution</summary>

Use a weighted squared-distance lower bound for all possible centers.

1. Equal distances to $A,B$ give $h=3$. Equating distances to $A,C$ then gives $k=1$, so $O=(3,1)$ and each squared distance is $10$.
2. The positive weights $1/3,5/12,1/4$ sum to one and give $(1/3)A+(5/12)B+(1/4)C=O$.
3. For any center $X$, expand the weighted sum of $|X-A|^2,|X-B|^2,|X-C|^2$. The cross term vanishes by the weighted-center identity, leaving $|X-O|^2+10$.
4. The maximum of the three squared distances is at least this weighted average, hence at least $10$. The disk at $O$ with squared radius $10$ attains that bound.
5. The required vector is $[3,1,10]$; equality in the lower bound also forces $X=O$.

</details>
