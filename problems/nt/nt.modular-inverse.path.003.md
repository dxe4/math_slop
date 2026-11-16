# Modular inverses: extract inverse from identity

*Easy · [Number theory](index.md)*

The identity $1 = 3 \times  9 - 2 \times  13$ is supplied. What canonical inverse of $9$ modulo $13$ does it provide? Give the integer from $0$ through $12$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Reduce the supplied equality modulo $13$.

</details>

<details>
<summary>Hint 2</summary>

The term containing $13$ vanishes in that residue system.

</details>

<details>
<summary>Worked solution</summary>

Bezout coefficients exhibit inverses when the gcd is $1$.

1. Reducing gives $3 \times  9$ ≡ $1$ mod $13$.
2. The coefficient $3$ lies in the canonical range, so it is the required inverse.

</details>
