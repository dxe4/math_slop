# Count digits in a concatenated range

*Medium · [Computational arithmetic problems](index.md)*

Write the decimal representations of $1,2,\ldots,10000$ consecutively with no separators. How many digits are written?

```answer
{"answer":{"kind":"integer","expected":"38894","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Separate the numbers by representation length.

</details>

<details>
<summary>Hint 2</summary>

The final five-digit number must be treated separately from the four-digit block.

</details>

<details>
<summary>Worked solution</summary>

Each digit-length block has a constant contribution per number.

1. There are $9$ one-digit, $90$ two-digit, $900$ three-digit and $9000$ four-digit numbers.
2. The endpoint $10000$ contributes five more digits.
3. The total is $9+180+2700+36000+5=38894$.

</details>
