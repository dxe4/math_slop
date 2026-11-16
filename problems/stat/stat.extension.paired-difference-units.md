# Paired difference units

*Easy · [Statistics and probability](index.md)*

Each of $12$ people has one before value and one after value. How many person-level differences $D_i=Y_{i,\mathrm{after}}-Y_{i,\mathrm{before}}$ can be formed?

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Pair observations by the same person rather than making every possible cross-person pairing.

</details>

<details>
<summary>Hint 2</summary>

Each complete within-person pair produces one difference.

</details>

<details>
<summary>Worked solution</summary>

A paired difference is one derived observation per complete person-level pair.

1. Each of the $12$ people supplies a complete before–after pair.
2. Computing $D_i$ uses both entries of that one pair.
3. There are $12$ differences. This count by itself does not establish independence between different people.

</details>
