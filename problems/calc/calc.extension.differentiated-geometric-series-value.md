# Use an interior differentiated power series

*Medium · [Calculus](index.md)*

Using the geometric series and its valid termwise derivative for \|x\|&lt;1, evaluate $\sum_{n=1}^\infty n/2^n$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate Σxⁿ=1/(1−x).

</details>

<details>
<summary>Hint 2</summary>

Multiply by x before evaluating at x=1/2.

</details>

<details>
<summary>Worked solution</summary>

Interior power-series differentiation creates a weighted geometric sum.

1. Differentiation gives Σ\_{n≥1}n x^{n−1}=1/(1−x)².
2. Multiplying by x gives Σn xⁿ=x/(1−x)².
3. At x=1/2 the value is (1/2)/(1/2)²=2.

</details>
