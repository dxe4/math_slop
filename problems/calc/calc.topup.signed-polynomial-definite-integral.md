# Evaluate an antiderivative with both signed endpoint values

*Medium · [Calculus](index.md)*

Find $\int_{-1}^{2}(3x^2-2x)\,dx$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

An antiderivative is x cubed minus x squared.

</details>

<details>
<summary>Hint 2</summary>

Subtract the lower endpoint value with its full sign.

</details>

<details>
<summary>Worked solution</summary>

The evaluation theorem preserves negative lower-endpoint contributions.

1. An antiderivative is x^3-x^2.
2. Its upper value is four and its lower value is negative two.
3. The integral is 4-(-2)=6.

</details>
