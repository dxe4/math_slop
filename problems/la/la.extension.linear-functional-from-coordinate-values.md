# Evaluate a functional specified on coordinate directions

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. A linear functional $f:\mathbb R^3\to\mathbb R$ has values $f(e_1)=2$, $f(e_2)=-1$, $f(e_3)=3$. Find $f(1,2,-1)$.

```answer
{"answer":{"kind":"integer","expected":-3,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the input as a linear combination of the standard basis.

</details>

<details>
<summary>Hint 2</summary>

Apply linearity to the three supplied values with their input coefficients.

</details>

<details>
<summary>Worked solution</summary>

A functional is determined by its basis values.

1. The vector is $e_1+2e_2-e_3$.
2. Linearity gives $f(1,2,-1)=f(e_1)+2f(e_2)-f(e_3)$.
3. The result is $2-2-3=-3$.

</details>
