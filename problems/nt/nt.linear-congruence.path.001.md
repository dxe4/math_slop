# All solutions of a linear congruence: all linear congruence solutions

*Medium · [Number theory](index.md)*

Find every x in $\{0,1,...,14\}$ satisfying $6x$ ≡ $9$ (mod 15).

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,9,14],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Divide coefficients and modulus by $\gcd (6,15)=3$.

</details>

<details>
<summary>Hint 2</summary>

Solve $2x$ ≡ $3$ mod $5$, then retain every representative modulo $15$.

</details>

<details>
<summary>Worked solution</summary>

Dividing the modulus with the coefficients preserves the complete solution set.

1. The equivalent reduced congruence is $2x$ ≡ $3$ mod $5$, giving x ≡ $4$ mod $5$.
2. The representatives in the required range are $\{4,9,14\}$.

</details>
