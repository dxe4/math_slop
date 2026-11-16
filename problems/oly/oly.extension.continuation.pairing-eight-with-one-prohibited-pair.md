# Exclude one matching edge without changing pair labels

*Medium · [Original olympiad-style problems](index.md)*

Eight distinct people are divided into $4$ unordered pairs. Two specified people may not be paired together. How many divisions are possible?

```answer
{"answer":{"kind":"integer","expected":"90","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Count all pairings by selecting a partner for the least remaining person recursively.

</details>

<details>
<summary>Hint 2</summary>

If the specified pair is present, pair the other six freely.

</details>

<details>
<summary>Worked solution</summary>

Use a complete matching count and one exact forbidden-event subtraction.

1. All pairings number $7\cdot5\cdot3\cdot1=105$.
2. Those containing the forbidden pair number $5\cdot3\cdot1=15$, since its two members are then removed.
3. The allowed count is ninety. No ordering of the four pairs or of their members is introduced in either count.

</details>
