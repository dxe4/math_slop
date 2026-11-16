# Count polynomial units using nilpotent coefficients

*Medium · [Abstract algebra problems](index.md)*

How many polynomials of degree at most two in $(Z/4)[x]$ are units of the full polynomial ring? Include constant polynomials and the zero higher coefficients.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Reduction modulo two sends any unit to a constant unit of F2\[x\].

</details>

<details>
<summary>Hint 2</summary>

For the converse, the nonconstant part with even coefficients has square zero.

</details>

<details>
<summary>Worked solution</summary>

Nilpotent higher coefficients permit nonconstant polynomial units over a nonreduced ring.

1. A unit must have odd constant coefficient. Reducing it modulo two gives a unit in F2\[x\], hence the constant polynomial one; both higher coefficients must therefore be even.
2. Conversely write such a polynomial as a+2g(x), with a odd. The element a is a unit and(2g)^2=0, so a+2g has inverse a inverse\*(1-2\*a inverse\*g).
3. There are two choices for a and two choices each for the coefficients of x and x^2, giving2\*2\*2=8 units.

</details>
