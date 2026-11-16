# Sum a full residue fibre of a noninvertible multiplier

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of all integers $x\in\{0,1,\ldots,83\}$ satisfying $18x\equiv30\pmod{84}$.

```answer
{"answer":{"kind":"integer","expected":"276","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

First divide the congruence and modulus by $\gcd(18,84)$, whose divisibility condition must hold.

</details>

<details>
<summary>Hint 2</summary>

A single reduced residue lifts to several equally spaced residues in the original range.

</details>

<details>
<summary>Worked solution</summary>

A nonunit multiplier creates a residue fibre rather than one modular inverse.

1. The common divisor is $6$, and it divides $30$, so the equation reduces to $3x\equiv5\pmod{14}$.
2. Since $3^{-1}\equiv5\pmod{14}$, the reduced class is $x\equiv11\pmod{14}$.
3. The original range contains $11,25,39,53,67,81$, exactly six lifts.
4. Their arithmetic-progression sum is $6(11+81)/2=276$.

</details>
