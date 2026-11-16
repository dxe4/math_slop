# Determine an exact-equation constant

*Medium · [Differential equations problems](index.md)*

For $(2x+y)\,dx+(x+2y)\,dy=0$, find the constant $C$ for the integral curve through $(1,0)$, using a potential $F$ normalized by $F(0,0)=0$ and writing $F=C$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate the first coefficient with respect to its coordinate.

</details>

<details>
<summary>Hint 2</summary>

Determine the remaining function by matching the other partial derivative.

</details>

<details>
<summary>Worked solution</summary>

A potential turns the exact differential equation into a level-set condition.

1. Integration gives $F=x^2+xy+h(y)$. Matching $F_y=x+2y$ gives $h(y)=y^2$ after normalization.
2. The potential has the required partial derivatives, so $F=x^2+xy+y^2$ is constant along integral curves.
3. At $(1,0)$ its value is $1$, hence $C=1$.

</details>
