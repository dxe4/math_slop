# Evaluate a quadratic character with the minus-one supplement

*Easy · [Computational arithmetic problems](index.md)*

Use $(-1/p)=(-1)^{(p-1)/2}$ for odd prime p. Find the Legendre symbol (-1/43).

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Compute the parity of the exponent in the supplied law.

</details>

<details>
<summary>Hint 2</summary>

Use the parity to choose the supplementary-law branch.

</details>

<details>
<summary>Worked solution</summary>

The supplementary law detects whether negative one is a square modulo the prime.

1. The exponent is (43-1)/2=21.
2. It is odd, so the supplied power of negative one is negative one.
3. Thus the Legendre symbol is -1, meaning negative one is not a square modulo forty-three.

</details>
