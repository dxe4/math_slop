# Compatible noncoprime congruences: gcd compatibility classes

*Easy · [Number theory](index.md)*

For which r in $\{0,1,...,5\}$ does the simultaneous system x ≡ $3$ (mod 9), x ≡ r (mod 6) have an integer solution? Return all such r. You may use the compatibility condition $\gcd (9,6)$ divides $3-r$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

The common gcd is $3$.

</details>

<details>
<summary>Hint 2</summary>

Keep residues congruent to $3$ modulo that gcd.

</details>

<details>
<summary>Worked solution</summary>

Residues must agree modulo the gcd, even though their original moduli differ.

1. The condition is $3$ divides 3−r, so r must be $0$ or $3$ in the specified range.
2. For $r=0, x=12$ works; for $r=3, x=3$ works. Thus the set is $\{0,3\}$.

</details>
