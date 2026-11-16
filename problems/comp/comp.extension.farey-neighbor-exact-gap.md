# Evaluate a reciprocal denominator-product gap

*Easy · [Computational arithmetic problems](index.md)*

For fractions a/b&lt;c/d with $bc-ad=1$, their difference is 1/(bd). Find the exact gap between 2/5 and 3/7.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":35},"checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Check the determinant in the order matching the positive difference.

</details>

<details>
<summary>Hint 2</summary>

Multiply the denominators only after checking that determinant is one.

</details>

<details>
<summary>Worked solution</summary>

A unit determinant turns the numerator of a fraction difference into one.

1. The determinant is 3 times 5 minus 2 times 7, or one.
2. The denominator product is thirty-five.
3. The positive gap is therefore one thirty-fifth, consistent with direct subtraction.

</details>
