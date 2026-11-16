# Retain the negative sign for an original pole

*Easy · [Complex analysis problems](index.md)*

Near b, let $f(z)=(z-b)^{-4}h(z)$ with h holomorphic and h(b) nonzero. Find the residue of fprime/f at b.

```answer
{"answer":{"kind":"integer","expected":"-4","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the original negative power before dividing by the original function.

</details>

<details>
<summary>Hint 2</summary>

The nonvanishing holomorphic factor contributes no pole to its logarithmic derivative.

</details>

<details>
<summary>Worked solution</summary>

An original pole contributes its order with a negative sign.

1. The logarithmic derivative is -4/(z-b)+hprime/h.
2. The second term is holomorphic near b.
3. The residue is therefore negative four, rather than the positive original pole order.

</details>
