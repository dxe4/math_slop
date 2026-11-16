# Normalize the annihilator of a plane

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. A functional $f(x,y,z)=ax+by+cz$ vanishes on $\operatorname{span}(e_1,e_3)$. With the normalization $b=1$, find $[a,b,c]$.

```answer
{"answer":{"kind":"vector","expected":["0","1","0"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Vanishing on a span is equivalent to vanishing on its generators.

</details>

<details>
<summary>Hint 2</summary>

Evaluate on the first and third coordinate vectors.

</details>

<details>
<summary>Worked solution</summary>

Translate annihilation of a subspace into dual coordinate constraints.

1. Vanishing on $e_1$ gives $a=0$.
2. Vanishing on $e_3$ gives $c=0$, while the second coefficient remains free.
3. The specified normalization selects $(a,b,c)=(0,1,0)$.

</details>
