# Read zero multiplicity from a logarithmic derivative

*Easy · [Complex analysis problems](index.md)*

Near a, let $f(z)=(z-a)^7g(z)$ with g holomorphic and g(a) nonzero. Use fprime/f=7/(z-a)+gprime/g to find its residue at a.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The quotient gprime/g is holomorphic near the nonzero value g(a).

</details>

<details>
<summary>Hint 2</summary>

Only the explicitly displayed simple-pole term contributes a residue.

</details>

<details>
<summary>Worked solution</summary>

Logarithmic derivatives turn a zero order into a simple-pole coefficient.

1. Nonvanishing of g near a makes gprime/g holomorphic there.
2. Thus its Laurent series has no negative powers.
3. The residue of the full logarithmic derivative is seven.

</details>
