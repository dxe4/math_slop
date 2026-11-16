# Count a partial selection with one required and one forbidden person

*Medium · [Combinatorics](index.md)*

From $7$ distinct people including A,B, select an ordered list of four that contains A and excludes B. How many lists are there?

```answer
{"answer":{"kind":"integer","expected":"240","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Choose A position in the list.

</details>

<details>
<summary>Hint 2</summary>

Fill the remaining positions using the five people other than A and B.

</details>

<details>
<summary>Worked solution</summary>

A required selected person can be located before selecting the remaining ordered entries.

1. A has four possible positions.
2. The other three positions receive distinct people from a five-person pool, with $5\cdot4\cdot3=60$ choices.
3. Thus there are $4\cdot60=240$ lists.

</details>
