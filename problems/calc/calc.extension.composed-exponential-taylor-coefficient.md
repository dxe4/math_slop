# Extract a coefficient after a nonlinear substitution

*Medium · [Calculus](index.md)*

Find the x⁴ coefficient in the Maclaurin expansion of $e^{x^2}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Start from the exponential series in a temporary variable u.

</details>

<details>
<summary>Hint 2</summary>

Substitute u=x² and identify which original order produces x⁴.

</details>

<details>
<summary>Worked solution</summary>

Composition changes degrees as well as coefficients.

1. The exponential begins 1+u+u²/2+u³/6+⋯.
2. Substituting u=x² gives 1+x²+x⁴/2+x⁶/6+⋯.
3. The x⁴ coefficient is 1/2.

</details>
