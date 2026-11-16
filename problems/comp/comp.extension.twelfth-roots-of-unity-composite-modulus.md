# Combine cyclic root counts through CRT

*Medium · [Computational arithmetic problems](index.md)*

How many canonical residues x modulo $65$ satisfy x^12 congruent to 1 modulo 65? Use cyclicity of the multiplicative groups modulo the two prime factors.

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Every solution is a unit modulo each prime factor.

</details>

<details>
<summary>Hint 2</summary>

In a cyclic group of order m, x^k=1 has gcd(k,m) solutions.

</details>

<details>
<summary>Worked solution</summary>

Cyclic kernel counts combine independently at coprime prime factors.

1. Factor 65 as five times thirteen. A solution must be nonzero modulo both primes.
2. The cyclic group orders are four and twelve, so the twelfth-power equation has four and twelve solutions respectively.
3. CRT pairs every such local pair with one residue modulo sixty-five, giving forty-eight solutions.

</details>
