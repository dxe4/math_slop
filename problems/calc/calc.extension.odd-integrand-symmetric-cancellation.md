# Use odd symmetry in a definite integral

*Easy · [Calculus](index.md)*

Use odd symmetry to evaluate $\int_{-1}^{1}x^3e^{-x^2}\,dx$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The exponential factor is even.

</details>

<details>
<summary>Hint 2</summary>

Multiplying it by x³ gives an odd continuous function.

</details>

<details>
<summary>Worked solution</summary>

Opposite symmetric inputs contribute opposite signed areas.

1. The integrand changes sign under x↦−x.
2. It is continuous and hence integrable on the symmetric interval.
3. An odd integrand has zero symmetric integral, so the value is 0.

</details>
