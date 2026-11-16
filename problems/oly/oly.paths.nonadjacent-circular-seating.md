# Subtract an adjacent block in a circular arrangement

*Medium · [Original olympiad-style problems](index.md)*

$8$ distinct people, including $A$ and $B$, sit around a round table. Rotations are identified but reflections are different. How many arrangements have A and B not adjacent?

```answer
{"answer":{"kind":"integer","expected":"3600","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Fix rotational symmetry before counting all arrangements.

</details>

<details>
<summary>Hint 2</summary>

Count adjacent A,B as one block with two internal orders.

</details>

<details>
<summary>Worked solution</summary>

A circular block count handles adjacency without choosing a privileged table seat.

1. There are $(8-1)!=5040$ circular arrangements of eight distinct people.
2. If A and B are adjacent, merge them into one block. Seven circular objects can be arranged in $6!$ ways, and the block has two orders, yielding 1440 arrangements.
3. The number with A and B separated is $5040-1440=3600$.

</details>
