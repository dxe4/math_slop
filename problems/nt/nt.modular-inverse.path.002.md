# Modular inverses: canonical inverse value

*Medium · [Number theory](index.md)*

Find the inverse of $7$ modulo $13$ as an integer r with $0 \leq  r < 13$: require $7r$ ≡ $1$ (mod 13).

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Find a multiple of $7$ differing from $1$ by a multiple of $13$.

</details>

<details>
<summary>Hint 2</summary>

Check $7 \times  2$.

</details>

<details>
<summary>Worked solution</summary>

Verify an inverse by multiplication in the stated modulus.

1. $7 \times  2 = 14 = 13 + 1$.
2. Thus $r=2$ is an inverse; $\gcd (7,13)=1$ ensures a unique residue class.

</details>
