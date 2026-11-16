# Order the unfixed objects after fixing two endpoints

*Medium · [Combinatorics](index.md)*

$7$ distinct books include A and B. In how many linear orders is A first and B last?

```answer
{"answer":{"kind":"integer","expected":"120","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The endpoint books have no choices left.

</details>

<details>
<summary>Hint 2</summary>

Order only the remaining five distinct books.

</details>

<details>
<summary>Worked solution</summary>

Fixing two positions leaves an ordinary permutation of the other objects.

1. Place A first and B last as required.
2. The remaining five books fill the five middle positions in $5!$ ways.
3. The descending product $5\cdot4\cdot3\cdot2\cdot1$ equals one hundred twenty.

</details>
