# Total five with cap three

*Medium · [Combinatorics](index.md)*

Allocate five identical counters to three labeled boxes A,B,C. Each occupancy is between zero and three inclusive. How many allocations exist?

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact finite structured answer for subtract-uniform-cap-violations; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Begin with the unrestricted nonnegative allocation count.

</details>

<details>
<summary>Hint 2</summary>

A violation has at least four in a named box; two simultaneous violations cannot fit into total five.

</details>

<details>
<summary>Worked solution</summary>

Use inclusion–exclusion with infeasible intersections equal to zero.

1. The unrestricted count is $C(7,2)=21$. For each box, reserving four leaves one counter, giving $C(3,2)=3$ violations.
2. The three violation families are disjoint here, so $21-3\times 3=12$.

</details>
