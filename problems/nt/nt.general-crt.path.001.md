# Compatible noncoprime congruences: compatible noncoprime solution

*Medium · [Number theory](index.md)*

Find the least nonnegative integer x satisfying x ≡ $4$ (mod 6) and x ≡ $6$ (mod 8). The moduli are positive but not coprime.

```answer
{"answer":{"kind":"integer","expected":22,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Compatibility requires the residue difference to be divisible by $\gcd (6,8)=2$.

</details>

<details>
<summary>Hint 2</summary>

Test $4,10,16,22$ among the representatives modulo $6$.

</details>

<details>
<summary>Worked solution</summary>

Noncoprime compatible conditions produce one class modulo the lcm.

1. The residue difference $6-4=2$ is divisible by the gcd 2, so the conditions are compatible.
2. The first listed candidate having remainder $6$ modulo $8$ is $22$. All solutions are $22$ modulo $\lcm (6,8)=24$.

</details>
