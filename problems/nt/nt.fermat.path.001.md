# Fermat's little theorem: nonzero prime modulus power

*Easy · [Number theory](index.md)*

$19$ is prime and $19$ does not divide $2$. Using Fermat’s little theorem, find the canonical residue of $2^18$ modulo $19$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

For prime p with p not dividing $a, a^{p-1}$ ≡ $1$ modulo p.

</details>

<details>
<summary>Hint 2</summary>

Here the exponent equals $p-1$.

</details>

<details>
<summary>Worked solution</summary>

The exponent $p-1$ identity needs a nonzero residue modulo a prime.

1. The stated hypotheses are $p=19$ prime and $\gcd (2,19)=1$.
2. Therefore $2^18$ ≡ $1$ mod $19$, giving residue $1$.

</details>
