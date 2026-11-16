# Identify a forced transitive link

*Medium · [Set theory](index.md)*

A relation on $\{1,2,3\}$ contains all three loops and the pairs (1,2),(2,3), with no other pairs. Which single additional pair is needed to make it transitive? Enter its ordered coordinates.

```answer
{"answer":{"kind":"vector","expected":["1","3"],"checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The nontrivial two-step chain starts at one and ends at three.

</details>

<details>
<summary>Hint 2</summary>

Loops do not require new pairs beyond their neighboring relation arrows.

</details>

<details>
<summary>Worked solution</summary>

The only missing consequence of a two-step chain is one ordered pair.

1. The pairs (1,2) and (2,3) force (1,3) by transitivity.
2. Adding (1,3) closes that chain. Every other chain either uses a loop or has the same already-present direct consequence.
3. The required pair is $(1,3)$.

</details>
