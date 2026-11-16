# Use polynomial expansion instead of a chain rule

*Medium · [Calculus](index.md)*

Differentiate $p(x)=(x/2-1/3)^2$ by expanding it first. Enter the derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"x/2-1/3","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Expand the square using exact fractions.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the resulting three terms.

</details>

<details>
<summary>Worked solution</summary>

Algebraic expansion converts a composed expression into a direct power-sum calculation.

1. The polynomial expands to x^2/4-x/3+1/9.
2. Termwise differentiation gives x/2-1/3+0.
3. Thus pprime(x)=x/2-1/3 for every real x.

</details>
