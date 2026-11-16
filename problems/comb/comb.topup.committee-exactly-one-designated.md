# Choose a committee with an exclusive designated-member condition

*Medium · [Combinatorics](index.md)*

A group of $9$ people includes A and B. How many four-person committees contain exactly one of A and B?

```answer
{"answer":{"kind":"integer","expected":"70","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Choose which designated person is included.

</details>

<details>
<summary>Hint 2</summary>

Select the remaining three members from the seven undesignated people.

</details>

<details>
<summary>Worked solution</summary>

An exclusive condition removes one designated person and forces the other.

1. There are two choices for the designated member.
2. For either choice, the remaining three members form a subset of seven people, giving thirty-five possibilities.
3. The choices are disjoint, so the total is seventy.

</details>
