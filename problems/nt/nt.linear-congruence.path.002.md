# All solutions of a linear congruence: gcd obstruction

*Medium · [Number theory](index.md)*

Find every x in $\{0,1,...,7\}$ satisfying $4x$ ≡ $3$ (mod 8). Return an empty set if there are none.

```answer
{"answer":{"kind":"finite_integer_set","expected":[],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

The gcd of the coefficient and modulus must divide the right side.

</details>

<details>
<summary>Hint 2</summary>

Alternatively, list the possible residues of $4x$ modulo $8$.

</details>

<details>
<summary>Worked solution</summary>

A gcd obstruction can rule out all integer solutions.

1. $\gcd (4,8)=4$ does not divide $3$. Equivalently, $4x$ has only residues $0$ and $4$ modulo $8$.
2. There are no solutions, so the set is {}.

</details>
