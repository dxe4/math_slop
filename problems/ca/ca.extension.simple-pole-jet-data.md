# Use local derivative data rather than an explicit quotient expansion

*Easy · [Complex analysis problems](index.md)*

Holomorphic functions g,h near a satisfy $h(a)=0$, hprime(a)=5 and g(a)=2. Use the simple-pole residue formula to find Res at a of g/h.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The nonzero derivative makes the denominator zero simple.

</details>

<details>
<summary>Hint 2</summary>

Only the supplied numerator value and first denominator derivative are needed.

</details>

<details>
<summary>Worked solution</summary>

A simple quotient pole is determined by its local first-order data.

1. Since hprime(a) is nonzero, h has a simple zero at a.
2. The residue formula is g(a)/hprime(a).
3. The requested residue is two fifths.

</details>
