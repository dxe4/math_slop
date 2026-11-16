# Count ordered office assignments under two restrictions

*Hard · [Combinatorics](index.md)*

$7$ distinct people fill president, secretary and treasurer, with no person in two offices. Person A cannot be president and B cannot be secretary, where A and B are distinct. How many assignments are permitted?

```answer
{"answer":{"kind":"integer","expected":"155","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Start with every ordered assignment of three distinct people.

</details>

<details>
<summary>Hint 2</summary>

Subtract each prohibited event, restoring assignments forbidden by both.

</details>

<details>
<summary>Worked solution</summary>

Role-specific exclusions require a corrected subtraction count.

1. Unrestricted assignments number $7\cdot6\cdot5=210$.
2. Assignments with A president number thirty, and those with B secretary also number thirty. The intersection fixes both roles and has five treasurer choices.
3. Inclusion-exclusion gives $210-30-30+5=155$.

</details>
