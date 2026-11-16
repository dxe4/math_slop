# Apply the squarefactor branch of the Mobius definition

*Easy · [Computational arithmetic problems](index.md)*

The Mobius function is zero whenever its input has a squared prime factor. Find $\mu(2^3\cdot3\cdot5)$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Inspect prime exponents before counting distinct factors.

</details>

<details>
<summary>Hint 2</summary>

Check whether the exponent of two meets the square-divisor criterion.

</details>

<details>
<summary>Worked solution</summary>

Squarefreeness is checked before the signed distinct-prime branch.

1. The input is divisible by two squared, since its exponent of two is three.
2. It is therefore not squarefree.
3. By the supplied definition its Mobius value is zero.

</details>
