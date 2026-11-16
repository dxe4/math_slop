# Construct an affine model at a positive square-root input

*Medium · [Calculus](index.md)*

For $f(x)=\sqrt{4+x}$, find the linearization polynomial L(x) about x=0. Enter a polynomial in x.

```answer
{"answer":{"kind":"expression","expected":"2+x/4","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

An affine local model uses the function value and derivative at the center.

</details>

<details>
<summary>Hint 2</summary>

Keep the center fixed at zero rather than at the square-root argument four.

</details>

<details>
<summary>Worked solution</summary>

A tangent model matches both value and slope at the chosen input.

1. The central value is f(0)=2. The derivative is 1/(2sqrt(4+x)), giving slope one quarter at zero.
2. The linearization is f(0)+fprime(0)(x-0).
3. Thus L(x)=2+x/4. This polynomial is a local model, not an identity with the square-root function.

</details>
