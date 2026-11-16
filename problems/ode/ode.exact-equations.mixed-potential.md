# Construct a mixed polynomial potential

*Medium · [Differential equations problems](index.md)*

For $(2xy+3)\,dx+(x^2+4y)\,dy=0$, use the potential normalized by $F(0,0)=0$. Find its level constant on the curve through $(0,1)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate the first coefficient with respect to the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

Use the second coefficient to determine the otherwise free function.

</details>

<details>
<summary>Worked solution</summary>

Exactness determines a potential up to its normalization constant.

1. The first integration gives $F=x^2y+3x+h(y)$.
2. The condition $F_y=x^2+4y$ gives $h(y)=2y^2$, with zero constant by normalization. These partial derivatives match both equation coefficients.
3. At $(0,1)$, $F=2$, so the level constant is $2$.

</details>
