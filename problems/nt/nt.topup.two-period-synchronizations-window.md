# List common multiples in a strict time window

*Medium · [Number theory](index.md)*

Two signals recur every $12$ and $18$ minutes, and both occur at time zero. List all times t in minutes with 100&lt;t&lt;200 when they occur together.

```answer
{"answer":{"kind":"set","expected":["108","144","180"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

A simultaneous occurrence is a common multiple of both periods.

</details>

<details>
<summary>Hint 2</summary>

Use the strict endpoints after finding the basic repeat period.

</details>

<details>
<summary>Worked solution</summary>

Synchronization repeats with the least common multiple of the two periods.

1. The least common multiple is thirty-six minutes.
2. The multiples surrounding the window are seventy-two, one hundred eight, one hundred forty-four, one hundred eighty and two hundred sixteen.
3. The strict interval therefore contains exactly $\{108,144,180\}$.

</details>
