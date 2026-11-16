# Lift a specified square-root branch through one prime-power step

*Medium · [Computational arithmetic problems](index.md)*

Find the integer $x\in\{0,\ldots,168\}$ with $x\equiv6\pmod{13}$ and $x^2\equiv10\pmod{169}$.

```answer
{"answer":{"kind":"integer","expected":"32","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Write the specified branch as $x=6+13t$ with $0\le t<13$.

</details>

<details>
<summary>Hint 2</summary>

Expand the square modulo $13^2$; its quadratic term in $t$ disappears.

</details>

<details>
<summary>Worked solution</summary>

A first-order modular correction lifts a simple root without searching the whole square modulus.

1. The branch condition gives $x=6+13t$, with one representative for each $t\in\{0,\ldots,12\}$.
2. The square congruence becomes $36+156t\equiv10\pmod{169}$, or $2+12t\equiv0\pmod{13}$.
3. Since $12\equiv-1\pmod{13}$, this gives $t\equiv2\pmod{13}$ uniquely.
4. Therefore $x=32$; indeed $32^2=1024=6\cdot169+10$.

</details>
