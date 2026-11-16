# Apply prime divisibility to an interior binomial coefficient

*Easy · [Computational arithmetic problems](index.md)*

The integer $101$ is prime. Find the canonical residue of binomial(101,50) modulo 101, using the factorial formula.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The numerator factorial has one factor of the prime.

</details>

<details>
<summary>Hint 2</summary>

Neither denominator factorial reaches that prime.

</details>

<details>
<summary>Worked solution</summary>

An interior entry of a prime-index binomial row is divisible by that prime.

1. The coefficient is 101! divided by 50!51!.
2. The numerator contains a factor 101 while the denominator is coprime to 101, so the integer quotient is divisible by 101.
3. Its canonical residue is zero.

</details>
