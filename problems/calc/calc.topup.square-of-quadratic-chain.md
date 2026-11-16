# Differentiate a quadratic inner function inside a square

*Medium · [Calculus](index.md)*

Differentiate $f(x)=(3x^2-1)^2$. Enter a simplified derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"36*x^3-12*x","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Differentiate the outer square at the unchanged inner expression.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the derivative of that inner expression.

</details>

<details>
<summary>Worked solution</summary>

The chain factor accounts for the rate of change of the inner quadratic.

1. The outer derivative contributes 2(3x^2-1).
2. The inner derivative is 6x, giving 12x(3x^2-1).
3. Expanding yields 36x^3-12x, valid for all real x.

</details>
