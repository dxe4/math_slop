# Bootstrap ordered samples

*Easy · [Statistics and probability](index.md)*

A dataset has $3$ labelled observations. An ordinary bootstrap resample makes $3$ independent draws with replacement from their indices. How many ordered index sequences are possible?

```answer
{"answer":{"kind":"integer","expected":"27","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Replacement leaves the same choices available at every draw position.

</details>

<details>
<summary>Hint 2</summary>

The multiplication rule counts ordered sequences; repeated values do not merge distinct indices here.

</details>

<details>
<summary>Worked solution</summary>

Count choices independently at the three ordered draw positions.

1. Each of the $3$ positions has $3$ available source indices.
2. The replacement rule permits all ordered combinations.
3. There are $3^3=27$ index sequences. If observations share values, some sequences can produce the same numerical sample, but the requested labelled-sequence count is unchanged.

</details>
