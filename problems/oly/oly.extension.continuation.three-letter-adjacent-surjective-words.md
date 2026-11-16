# Combine a local restriction with an alphabet requirement

*Medium · [Original olympiad-style problems](index.md)*

How many length-$5$ words on the distinct letters $A,B,C$ use every letter at least once and have no equal consecutive letters?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Count all words satisfying the adjacency rule first.

</details>

<details>
<summary>Hint 2</summary>

A word using only two letters must alternate; a one-letter word cannot meet the rule at length five.

</details>

<details>
<summary>Worked solution</summary>

Subtract exactly the missing-letter cases without overlap.

1. The first letter has three choices and each later letter two, giving forty-eight adjacency-valid words.
2. For each of the three two-letter alphabets, there are exactly two alternating words. These six words use exactly two letters, so none is counted for another two-letter alphabet.
3. Subtracting gives forty-two words using all three letters. No one-letter case needs an overlap correction.

</details>
