# Apply the two-square obstruction at a prime congruent to three

*Easy · [Computational arithmetic problems](index.md)*

A positive integer representable as a^2+b^2 has every prime congruent to three modulo four occurring to even exponent. How many ordered signed integer representations does $3^3 5^2$ have?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The stated necessary condition must hold at every prime of the indicated residue type.

</details>

<details>
<summary>Hint 2</summary>

The exponent of three is visible without multiplying out the integer.

</details>

<details>
<summary>Worked solution</summary>

One forbidden prime exponent rules out every signed and ordered representation.

1. Three is congruent to three modulo four.
2. Its exponent in the displayed factorization is three, which is odd.
3. The necessary condition fails, so there are zero representations of any ordering or sign.

</details>
