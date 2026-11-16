# Combine two Taylor expansions by convolution

*Medium · [Calculus](index.md)*

Find the x³ coefficient in $e^x\sin x$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Only factor degrees adding to three can contribute.

</details>

<details>
<summary>Hint 2</summary>

Use sin x=x−x³/6+O(x⁵) and the exponential expansion through degree two.

</details>

<details>
<summary>Worked solution</summary>

A product coefficient is a finite convolution even when both series are infinite.

1. The relevant contributions are (x²/2)·x and 1·(−x³/6). There is no quadratic sine term.
2. Their coefficients add as 1/2−1/6.
3. The x³ coefficient is 1/3.

</details>
