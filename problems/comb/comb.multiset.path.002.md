# Every box must be nonempty

*Medium · [Combinatorics](index.md)*

Place seven identical counters into three labeled boxes A,B,C, with at least one counter in each box and no upper bounds. How many allocations exist?

```answer
{"answer":{"kind":"integer","expected":15,"checker_scope":"Exact finite structured answer for remove-positive-lower-bounds; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Reserve the required one counter per box.

</details>

<details>
<summary>Hint 2</summary>

Distribute the remaining counters with empty additional occupancies allowed.

</details>

<details>
<summary>Worked solution</summary>

Shift required occupancy out before applying the nonnegative count.

1. After reserving three counters, four remain for three boxes.
2. Stars and bars gives $C(4+3-1,3-1)=C(6,2)=15$.

</details>
