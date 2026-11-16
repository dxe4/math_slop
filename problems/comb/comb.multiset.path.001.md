# Five identical counters in three boxes

*Medium · [Combinatorics](index.md)*

Place five identical counters into three labeled boxes A,B,C. Empty boxes are allowed and there are no upper bounds. How many occupancy triples exist?

```answer
{"answer":{"kind":"integer","expected":21,"checker_scope":"Exact finite structured answer for count-nonnegative-labeled-occupancies; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Represent the allocation by five stars and two separating bars.

</details>

<details>
<summary>Hint 2</summary>

Choose the positions of the two bars among seven positions.

</details>

<details>
<summary>Worked solution</summary>

Separators encode nonnegative occupancies.

1. Each allocation corresponds to a seven-position stars-and-bars record.
2. Choose the two bar positions: $C(7,2)=21$.

</details>
