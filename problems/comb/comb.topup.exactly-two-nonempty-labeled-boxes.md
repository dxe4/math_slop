# Choose active boxes before distributing identical objects

*Medium · [Combinatorics](index.md)*

Put $8$ identical markers into four labeled boxes, requiring exactly two boxes to be nonempty. How many allocations exist?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Choose which two boxes are active.

</details>

<details>
<summary>Hint 2</summary>

In the active pair, both occupancies must be positive and sum to eight.

</details>

<details>
<summary>Worked solution</summary>

The nonempty-box choice and the positive allocation are separate bijective stages.

1. The two active boxes can be selected in six ways.
2. For a fixed active pair, their positive occupancies are (1,7),(2,6),...,(7,1), giving seven allocations.
3. The product is forty-two; the two inactive boxes are forced empty.

</details>
