# Apply a prime-cube binomial congruence with its prime restriction

*Easy · [Computational arithmetic problems](index.md)*

Use the stated Wolstenholme congruence $\binom{2p}{p}\equiv2\pmod {p^3}$ for primes p&gt;=5. Find the canonical residue of binomial(14,7) modulo 343.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Match fourteen and seven to twice the prime and the prime itself.

</details>

<details>
<summary>Hint 2</summary>

Check the modulus is the required prime cube.

</details>

<details>
<summary>Worked solution</summary>

A stronger-than-mod-prime theorem supplies an exact residue at a larger modulus.

1. Here p=7 is prime and meets p&gt;=5. The modulus is 7 cubed, or 343.
2. The given theorem therefore applies to binomial(14,7).
3. Its canonical residue is two, without claiming a corresponding congruence for every composite or smaller-prime parameter.

</details>
