# Evaluate a nondecimal numeral

*Medium · [Computational arithmetic problems](index.md)*

Convert the base-seven numeral $(123456)_7$ to a decimal integer.

```answer
{"answer":{"kind":"integer","expected":"22875","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Each position uses a power of seven.

</details>

<details>
<summary>Hint 2</summary>

Keep the rightmost digit at exponent zero.

</details>

<details>
<summary>Worked solution</summary>

Place value expresses the numeral as a finite polynomial in its base.

1. The value is $7^5+2\cdot7^4+3\cdot7^3+4\cdot7^2+5\cdot7+6$.
2. The terms are $16807,4802,1029,196,35,6$.
3. Their sum is $22875$.

</details>
