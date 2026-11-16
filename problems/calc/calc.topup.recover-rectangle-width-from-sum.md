# Recover a missing width from a signed accumulation

*Medium · [Calculus](index.md)*

A partition has endpoints $0,1,1+h$, where h&gt;0. Its two rectangle heights are 2 and -3, and its signed sum is -4. Return h and right\_endpoint.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"h":"2","right_endpoint":"3"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The widths are one and h.

</details>

<details>
<summary>Hint 2</summary>

Solve the signed area equation before reconstructing the endpoint.

</details>

<details>
<summary>Worked solution</summary>

An inverse rectangle problem must keep width and endpoint distinct.

1. The signed sum equation is 2-3h=-4.
2. It gives h=2, satisfying the required positivity.
3. The right endpoint is 1+h=3.

</details>
