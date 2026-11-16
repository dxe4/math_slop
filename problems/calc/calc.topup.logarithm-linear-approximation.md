# Report the value of a stated first-order approximation

*Medium · [Calculus](index.md)*

Use the linearization of $f(x)=\ln x$ at x=1 to approximate ln(21/20). Return the approximation as an exact fraction; no exact logarithm equality is asserted.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":20},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The center value is zero and the slope there is one.

</details>

<details>
<summary>Hint 2</summary>

Substitute the nearby input into the affine model.

</details>

<details>
<summary>Worked solution</summary>

A model value can be exact arithmetic even when it approximates the original function.

1. The linearization is L(x)=0+1(x-1)=x-1.
2. At 21/20 the model value is one twentieth.
3. Thus the requested approximation is 1/20; the actual logarithm differs by a higher-order error.

</details>
