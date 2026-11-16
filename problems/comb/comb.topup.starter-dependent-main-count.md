# Add branches with different numbers of continuations

*Medium · [Combinatorics](index.md)*

A meal has one starter and one main. There are $2$ starters S1,S2, three vegan mains and five nonvegan mains. After S1 only a vegan main is allowed; after S2 any main is allowed. How many permitted meals are there?

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Separate meals by their starter.

</details>

<details>
<summary>Hint 2</summary>

The two starter branches have different continuation counts.

</details>

<details>
<summary>Worked solution</summary>

The sum rule handles a branching rule that prevents naive uniform multiplication.

1. Starter S1 permits three continuations.
2. Starter S2 permits eight continuations, counting all mains.
3. The branches are disjoint, so the total is $3+8=11$.

</details>
