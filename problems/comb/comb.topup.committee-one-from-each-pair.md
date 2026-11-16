# Separate independent designated pair choices from an ordinary subset

*Medium · [Combinatorics](index.md)*

$8$ people include four distinct designated people A,B,C,D. A four-person committee must contain exactly one of A,B and exactly one of C,D. How many committees are possible?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Both designated pair conditions choose two of the four committee members.

</details>

<details>
<summary>Hint 2</summary>

The other two members must come from the four undesignated people.

</details>

<details>
<summary>Worked solution</summary>

Disjoint designation requirements leave a smaller ordinary subset choice.

1. There are two choices from the first pair and two from the second, giving four designated selections.
2. Choose the two remaining members from the four undesignated people in six ways.
3. The total is $4\cdot6=24$, with no ordering of committee members.

</details>
