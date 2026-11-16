# Combine Euler reduction with a verified unit-square property

*Hard · [Number theory](index.md)*

An integer a satisfies $\gcd(a,12)=1$. Find the canonical residue modulo 12 of a^2026+5a^2024.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Euler reduces exponents modulo four for units modulo twelve.

</details>

<details>
<summary>Hint 2</summary>

Check squares of the complete unit residue set to finish the residual expression.

</details>

<details>
<summary>Worked solution</summary>

A unit hypothesis justifies exponent reduction and a finite residue identity.

1. The unit residues modulo twelve are one, five, seven and eleven, and each squares to one modulo twelve.
2. Euler with totient four gives $a^{2024}\equiv1$ and $a^{2026}\equiv a^2\equiv1$.
3. The full expression has residue $1+5=6$, independent of the chosen unit.

</details>
