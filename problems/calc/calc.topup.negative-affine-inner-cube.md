# Retain the negative chain factor in an affine cube

*Medium · [Calculus](index.md)*

Differentiate $f(x)=(2-x)^3$. Enter a simplified derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"-3*x^2+12*x-12","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

The derivative of the inner affine expression is negative one.

</details>

<details>
<summary>Hint 2</summary>

Expand only after applying that signed factor.

</details>

<details>
<summary>Worked solution</summary>

A sign from the inner derivative changes every expanded coefficient.

1. The chain rule gives 3(2-x)^2 times negative one.
2. The square expands to x^2-4x+4.
3. Multiplication gives -3x^2+12x-12.

</details>
