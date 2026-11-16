# Euler's totient: distinct prime factor totient

*Easy · [Number theory](index.md)*

For $n>1, \varphi (n)=n$ times the product of $(1-1/p)$ over distinct prime factors p. Use $45=3^{2}\times 5$ to find $\varphi (45)$.

```answer
{"answer":{"kind":"integer","expected":24,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Use each distinct prime only once in the product.

</details>

<details>
<summary>Hint 2</summary>

The repeated factor in the prime factorisation changes the initial number, but contributes no extra factor to the product.

</details>

<details>
<summary>Worked solution</summary>

The product uses distinct primes, not one factor per repeated occurrence.

1. The distinct primes are $3$ and $5$.
2. $\varphi (45)=45 \times  (1-1/3) \times  (1-1/5)=45 \times  2/3 \times  4/5=24$.

</details>
