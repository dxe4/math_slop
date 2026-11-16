# Compare differential error propagation with an exact bound

*Medium · [Calculus](index.md)*

Positive rectangle sides x,y are each perturbed by relative errors ε₁,ε₂ with $|\varepsilon_i|\le1/100$. For A=xy, return \[maximum absolute relative error from the linear differential, exact maximum absolute relative area error\]. Use fractions of one, not percentage numbers.

```answer
{"answer":{"kind":"vector","expected":["1/50","201/10000"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The differential’s relative expression is ε₁+ε₂.

</details>

<details>
<summary>Hint 2</summary>

The exact factor is (1+ε₁)(1+ε₂); compare both extreme products, including the quadratic term.

</details>

<details>
<summary>Worked solution</summary>

A linear error estimate can differ from the sharp finite perturbation bound.

1. The differential gives δA/A≈ε₁+ε₂, whose largest possible absolute value is 2/100=1/50.
2. Exactly, the relative error is ε₁+ε₂+ε₁ε₂. The area factor is increasing in each error on this small range, so its extremes are (101/100)² and (99/100)².
3. The positive and negative error magnitudes are 201/10000 and 199/10000. Thus the exact maximum absolute error is 201/10000, and the vector is \[1/50,201/10000\].

</details>
