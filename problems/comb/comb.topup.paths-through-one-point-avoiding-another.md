# Subtract paths passing through a second specified point

*Hard · [Combinatorics](index.md)*

Count lattice paths from $(0,0)$ to (4,3), using only unit right and up steps, that pass through (2,1) and avoid (3,2).

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Count paths through the required point by splitting there.

</details>

<details>
<summary>Hint 2</summary>

Every path through both specified points visits them in the given order.

</details>

<details>
<summary>Worked solution</summary>

Step-word counting and a complementary subtraction enforce both waypoint conditions.

1. There are three paths to (2,1), and six from that point to (4,3), giving eighteen through the required point.
2. Paths through both points number $3\cdot2\cdot2=12$: two ways from (2,1) to (3,2), then two ways to the endpoint.
3. Subtracting yields six paths through the first point while avoiding the second.

</details>
