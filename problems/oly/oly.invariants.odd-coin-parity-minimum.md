# Combine a parity obstruction with a construction

*Medium · [Original olympiad-style problems](index.md)*

Initially $101$ coins show heads. A move flips exactly two distinct coins. What is the minimum possible number of heads after any finite sequence of moves?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The number of heads changes by an even integer on every move.

</details>

<details>
<summary>Hint 2</summary>

Flip disjoint pairs to approach the parity bound.

</details>

<details>
<summary>Worked solution</summary>

Parity supplies an obstruction and disjoint pairs establish attainability.

1. A two-coin flip changes the head count by -2,0 or 2, so the count stays odd.
2. Therefore it cannot become zero, and its minimum is at least one.
3. Flip fifty disjoint pairs once, turning one hundred heads to tails and leaving one head. The minimum is $1$.

</details>
