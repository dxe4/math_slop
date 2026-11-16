# Recover a Mobius map from three marked images

*Medium · [Complex analysis problems](index.md)*

A Mobius map T on the Riemann sphere sends $0\mapsto0$, 1 to 1, and infinity to 3. Find T(2).

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact requested invariant or sharp bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The zero image removes the constant numerator term.

</details>

<details>
<summary>Hint 2</summary>

Use the finite value at infinity before imposing T(1)=1.

</details>

<details>
<summary>Worked solution</summary>

Three distinct marked images fix a fractional linear map.

1. Write T(z)=a\*z/(c\*z+d). The finite value three at infinity gives a=3c with c nonzero.
2. Rescale c=1. Then T(1)=1 gives 3/(1+d)=1, so d=2.
3. Hence T(z)=3z/(z+2) and T(2)=3/2.

</details>
