# A finite convolution coefficient

*Medium · [Combinatorics](index.md)*

Treat x as a formal symbol. Find the coefficient of $x^{3}$ in $(1+x+x^{2})^2$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact finite structured answer for compute-polynomial-product-coefficient; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Find degree pairs whose sum is three.

</details>

<details>
<summary>Hint 2</summary>

Each factor has powers only $0,1,2$.

</details>

<details>
<summary>Worked solution</summary>

A product coefficient is a finite convolution.

1. The feasible degree pairs are $(1,2)$ and $(2,1)$.
2. Each contributes 1, so the coefficient is $2$.

</details>
