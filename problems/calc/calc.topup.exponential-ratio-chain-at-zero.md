# Simplify an exponential quotient before differentiating

*Medium · [Calculus](index.md)*

For $f(x)=e^{2x}/e^{-x}$, find fprime(0).

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use the exponent rule for a quotient.

</details>

<details>
<summary>Hint 2</summary>

The resulting exponential still needs its chain multiplier.

</details>

<details>
<summary>Worked solution</summary>

An exponential quotient has a simpler globally defined form.

1. The denominator never vanishes, and the quotient equals e^(3x).
2. Its derivative is 3e^(3x).
3. At zero the exponential is one, giving derivative three.

</details>
