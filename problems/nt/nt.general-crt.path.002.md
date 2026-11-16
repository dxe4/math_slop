# Compatible noncoprime congruences: incompatible residue conditions

*Medium · [Number theory](index.md)*

Find all x in $\{0,1,...,11\}$ satisfying x ≡ $1$ (mod 4) and x ≡ $2$ (mod 6). Return {} if no values exist.

```answer
{"answer":{"kind":"finite_integer_set","expected":[],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Both congruences impose a parity condition.

</details>

<details>
<summary>Hint 2</summary>

The residue difference must be divisible by $\gcd (4,6)=2$.

</details>

<details>
<summary>Worked solution</summary>

Compatibility is necessary when moduli share factors.

1. The first condition makes x odd, while the second makes x even. Equivalently, $2$ does not divide the residue difference $1$.
2. The conditions are incompatible, and the solution set is {}.

</details>
