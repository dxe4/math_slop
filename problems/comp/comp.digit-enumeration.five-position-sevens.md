# Count occurrences of a decimal digit

*Medium · [Computational arithmetic problems](index.md)*

Among the integers from $0$ through $99999$, how many occurrences of the digit $7$ appear in their ordinary decimal representations? Count repeated occurrences separately.

```answer
{"answer":{"kind":"integer","expected":"50000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Pad every representation to five digits with leading zeros.

</details>

<details>
<summary>Hint 2</summary>

The padding cannot create or remove any occurrence of the nonzero target digit.

</details>

<details>
<summary>Worked solution</summary>

Fixed-width positional symmetry counts occurrences rather than the number of qualifying integers.

1. Padding with zeros gives all $10^5$ five-digit strings, without changing the number of sevens.
2. At each of five positions, fixing a seven leaves $10^4$ choices for the other digits.
3. The total occurrence count is $5\cdot10000=50000$.

</details>
