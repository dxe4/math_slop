# Fermat's little theorem: reduce exponent after hypotheses

*Medium · [Number theory](index.md)*

$13$ is prime and $13$ does not divide $7$. Find the canonical residue of $7^25$ modulo $13$ using Fermat’s little theorem.

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Fermat gives $7^12$ ≡ $1$ modulo $13$.

</details>

<details>
<summary>Hint 2</summary>

Write $25$ as a multiple of $12$ plus a remainder.

</details>

<details>
<summary>Worked solution</summary>

Reduce exponents only after the relevant power identity has been justified.

1. $25 = 2 \times  12 + 1$.
2. Thus $7^25$ ≡ $(7^12)^{2} \times  7$ ≡ $7$ mod $13$.

</details>
