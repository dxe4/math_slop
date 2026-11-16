# Differentiate a polynomial with exact fractional coefficients

*Medium · [Calculus](index.md)*

Differentiate $p(x)=(3/5)x^5-(2/3)x^3+7x-9$. Enter the derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"3*x^4-2*x^2+7","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Apply the power rule term by term.

</details>

<details>
<summary>Hint 2</summary>

The integer exponent multiplies each rational coefficient.

</details>

<details>
<summary>Worked solution</summary>

Exact coefficient arithmetic keeps the derivative polynomial simple.

1. The fifth-power term differentiates to 3x^4 and the cubic term to -2x^2.
2. The linear term contributes seven, and the constant contributes zero.
3. Thus the derivative is 3x^4-2x^2+7, with no excluded real inputs.

</details>
