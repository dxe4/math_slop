# Include the factorial in a quadratic Maclaurin coefficient

*Medium · [Calculus](index.md)*

Find the degree-two Maclaurin polynomial of $f(x)=\ln(1+x)$. Enter a polynomial in x.

```answer
{"answer":{"kind":"expression","expected":"x-x^2/2","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Compute the value and first two derivatives at zero.

</details>

<details>
<summary>Hint 2</summary>

The second-derivative coefficient is divided by two factorial.

</details>

<details>
<summary>Worked solution</summary>

Taylor coefficients use derivative values with their factorial weights.

1. The values are f(0)=0, fprime(0)=1 and fsecond(0)=-1.
2. The quadratic formula is f(0)+fprime(0)x+fsecond(0)x^2/2.
3. Thus the polynomial is x-x^2/2. It is an approximation near zero, not an equality with the logarithm on its entire domain.

</details>
