# Compute the entire difference-quotient polynomial

*Medium · [Calculus](index.md)*

Let $f(t)=t^3-2t$. For nonzero increment x, simplify \[f(-1+x)-f(-1)\]/x as a polynomial in x.

```answer
{"answer":{"kind":"expression","expected":"x^2-3*x+1","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":["0"]}}}
```

<details>
<summary>Hint 1</summary>

Expand around the fixed base input negative one.

</details>

<details>
<summary>Hint 2</summary>

Subtract the original function value before canceling the increment.

</details>

<details>
<summary>Worked solution</summary>

A difference quotient is a polynomial in the increment only after its removable factor is canceled.

1. The central value is f(-1)=1, and expansion gives f(-1+x)=1+x-3x^2+x^3.
2. The numerator is x-3x^2+x^3, divisible by x on the punctured increment domain.
3. The quotient polynomial is 1-3x+x^2; the increment zero is excluded from the original quotient.

</details>
