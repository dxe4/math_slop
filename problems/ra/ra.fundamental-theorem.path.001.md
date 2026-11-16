# Differentiate a continuous accumulation function

*Easy · [Real analysis](index.md)*

Let $F(x)=\int$ from $0$ to x of $3t^{2}$ dt for real x. Give $F^{\prime}(2)$. The polynomial integrand is continuous everywhere.

```answer
{"answer":{"kind":"rational","expected":{"numerator":12,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The accumulation form and continuity allow the first Fundamental Theorem.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the integrand at the requested point.

</details>

<details>
<summary>Worked solution</summary>

A continuous integrand is the derivative of its accumulation function.

1. Continuity gives $F^{\prime}(x)=3x^{2}$ for every real x.
2. At $x=2, F^{\prime}(2)=3\cdot 4=12$.

</details>
