# Undo an affine substitution before applying an initial value

*Medium · [Calculus](index.md)*

Find the polynomial F with $F^{\prime}(x)=3(2x-1)^2$ and F(0)=0.

```answer
{"answer":{"kind":"expression","expected":"4*x^3-6*x^2+3*x","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Substitute u=2x-1, including the factor in dx.

</details>

<details>
<summary>Hint 2</summary>

Return to x before using the initial condition.

</details>

<details>
<summary>Worked solution</summary>

Substitution determines a family, while the original-variable initial value fixes its constant.

1. With u=2x-1, integration gives (1/2)u^3+C, so F(x)=(1/2)(2x-1)^3+C.
2. At zero, the condition gives -1/2+C=0, hence C=1/2.
3. Expansion yields F(x)=4x^3-6x^2+3x, whose derivative and initial value meet the requirements.

</details>
