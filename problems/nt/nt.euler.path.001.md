# Euler's theorem: coprime totient power

*Easy · [Number theory](index.md)*

Given $\varphi (20)=8$ and $\gcd (3,20)=1$, use Euler’s theorem to find the canonical residue of $3^8$ modulo $20$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Euler’s theorem states $a^\varphi$(m) ≡ $1$ mod m when $\gcd (a,m)=1$.

</details>

<details>
<summary>Hint 2</summary>

The supplied exponent is exactly the supplied totient.

</details>

<details>
<summary>Worked solution</summary>

Euler’s theorem applies to coprime inputs and the stated modulus.

1. The modulus is positive and $3$ is coprime to $20$.
2. Euler’s theorem therefore gives $3^8$ ≡ $1$ mod $20$.

</details>
