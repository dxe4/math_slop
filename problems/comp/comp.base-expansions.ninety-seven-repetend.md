# Find an exact decimal period

*Hard · [Computational arithmetic problems](index.md)*

What is the length of the repeating decimal period of $1/97$?

```answer
{"answer":{"kind":"integer","expected":"96","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The period is the multiplicative order of ten modulo the prime denominator.

</details>

<details>
<summary>Hint 2</summary>

To prove the maximal order, exclude divisors obtained by removing each distinct prime factor of $96$.

</details>

<details>
<summary>Worked solution</summary>

Order divisibility and two proper-power exclusions determine the exact period.

1. Fermat theorem gives $10^{96}\equiv1\pmod{97}$, so the order divides $96$.
2. Repeated squaring gives $10^2\equiv3$, $10^4\equiv9$, $10^8\equiv81$, $10^{16}\equiv62$ and $10^{32}\equiv61$. Thus $10^{48}\equiv61\cdot62\equiv-1$, and $10^{32}\not\equiv1$.
3. Every proper divisor of $96=2^5\cdot3$ divides either $48$ or $32$. Neither exponent yields one, so the order and period equal $96$.

</details>
