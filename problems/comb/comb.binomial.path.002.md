# Three x choices with a constant weight

*Medium · [Combinatorics](index.md)*

Find the coefficient of $x^{3}$ in the finite polynomial $(3+x)^5$.

```answer
{"answer":{"kind":"integer","expected":90,"checker_scope":"Exact finite structured answer for calculate-weighted-binomial-coefficient; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Three factors contribute x; the other two contribute $3$.

</details>

<details>
<summary>Hint 2</summary>

The constant choices carry a factor $3^{2}$.

</details>

<details>
<summary>Worked solution</summary>

Weights from unselected x positions still contribute.

1. The x positions can be chosen in $C(5,3)=10$ ways.
2. Each contributes 3²=9, so the coefficient is $10\times 9=90$.

</details>
