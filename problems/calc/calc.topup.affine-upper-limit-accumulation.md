# Differentiate an integral with a moving upper limit

*Medium · [Calculus](index.md)*

For $F(x)=\int_0^{3x+1}t^2\,dt$, find the derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"27*x^2+18*x+3","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Evaluate the integrand at the moving limit.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the derivative of that limit.

</details>

<details>
<summary>Worked solution</summary>

The fundamental theorem and chain rule combine before polynomial expansion.

1. The integrand is continuous, so Fprime(x)=(3x+1)^2 times three.
2. Expanding the square gives 9x^2+6x+1.
3. Multiplication yields 27x^2+18x+3, on the full real domain.

</details>
