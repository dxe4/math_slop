# Does a job title make order matter?

*Easy · [Combinatorics](index.md)*

People A, B, C are available. A two-person team has no roles and uses two different people. A role assignment chooses a captain and a reporter, with different people in the two jobs. Count teams and role assignments. Enter teams and assignments.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"teams":3,"assignments":6},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Compare AB and BA under each definition.

</details>

<details>
<summary>Hint 2</summary>

For each possible captain there are two possible reporters.

</details>

<details>
<summary>Worked solution</summary>

A role is part of the outcome; adding distinct roles can distinguish the two orders.

1. The teams are {A,B}, {A,C}, and {B,C}: three.
2. For role assignments, each of three captains has two reporters, giving $3 \times  2 = 6$.

</details>
