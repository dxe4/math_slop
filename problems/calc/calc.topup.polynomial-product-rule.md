# Differentiate a product without dropping either contribution

*Medium · [Calculus](index.md)*

Differentiate $f(x)=(x^2+1)(x^3-2x)$. Enter a simplified derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"5*x^4-3*x^2-2","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

The product rule has one contribution for each differentiated factor.

</details>

<details>
<summary>Hint 2</summary>

Combine like powers only after adding both contributions.

</details>

<details>
<summary>Worked solution</summary>

The two product-rule terms recover the derivative of the expanded product.

1. The product rule gives 2x(x^3-2x)+(x^2+1)(3x^2-2).
2. Expansion yields 2x^4-4x^2+3x^4+x^2-2.
3. Combining gives 5x^4-3x^2-2, defined on the whole real line.

</details>
