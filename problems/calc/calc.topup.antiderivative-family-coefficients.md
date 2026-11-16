# Determine the fixed coefficients while preserving a free constant

*Medium · [Calculus](index.md)*

All polynomial antiderivatives of $x^3-2x$ have form F(x)=a x^4+b x^2+C. Return a and b; C remains arbitrary.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":"1/4","b":"-1"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the proposed family and match coefficients.

</details>

<details>
<summary>Hint 2</summary>

The derivative does not constrain the additive constant.

</details>

<details>
<summary>Worked solution</summary>

Coefficient matching recovers the antiderivative family without inventing a constant condition.

1. The derivative of the proposed form is 4a x^3+2b x.
2. Matching the cubic and linear coefficients gives 4a=1 and 2b=-2.
3. Thus a=1/4 and b=-1, while every real C gives the same derivative.

</details>
