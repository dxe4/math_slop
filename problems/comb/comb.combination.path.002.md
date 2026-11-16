# Pairs from eight

*Medium · [Combinatorics](index.md)*

Eight distinct cards are available. Select an unordered pair of different cards. How many pairs exist?

```answer
{"answer":{"kind":"integer","expected":28,"checker_scope":"Exact finite structured answer for count-fixed-size-subsets; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

There are eight choices for a first card and seven for a second.

</details>

<details>
<summary>Hint 2</summary>

Each unordered pair has two orders.

</details>

<details>
<summary>Worked solution</summary>

An unordered pair is counted once after grouping its two orders.

1. The ordered count is $8\times 7=56$.
2. Divide by the two orders of each pair to obtain $28$.

</details>
