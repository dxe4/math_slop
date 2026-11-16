# Evaluate a binomial coefficient through base-prime digit choices

*Easy · [Computational arithmetic problems](index.md)*

Use Lucas theorem: binomial(n,k) modulo a prime p is the product of binomial coefficients of matching base-p digits. Given $100=(202)_7$ and 50=(101)\_7, find binomial(100,50) modulo 7 in the canonical range.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Pair the digits in the same positions.

</details>

<details>
<summary>Hint 2</summary>

The middle zero-over-zero digit contributes one, not zero.

</details>

<details>
<summary>Worked solution</summary>

Lucas multiplication handles a binomial coefficient without constructing its large integer value.

1. The three local coefficients are binomial(2,1), binomial(0,0), binomial(2,1).
2. They have values two, one and two.
3. Their product is four, already a canonical residue modulo seven.

</details>
