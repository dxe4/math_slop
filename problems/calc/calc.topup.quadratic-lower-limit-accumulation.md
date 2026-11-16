# Retain orientation when the moving limit is lower

*Medium · [Calculus](index.md)*

For $G(x)=\int_{x^2}^{4}(t+1)\,dt$, find the derivative polynomial.

```answer
{"answer":{"kind":"expression","expected":"-2*x^3-2*x","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

A moving lower limit contributes a minus sign.

</details>

<details>
<summary>Hint 2</summary>

The lower limit x squared also has its own chain derivative.

</details>

<details>
<summary>Worked solution</summary>

Integral orientation and the chain rule produce separate factors.

1. Changing only the lower limit gives Gprime(x)=-(x^2+1)2x.
2. Expanding produces -2x^3-2x.
3. The formula remains valid for every real x, including values where the lower limit exceeds the upper limit.

</details>
