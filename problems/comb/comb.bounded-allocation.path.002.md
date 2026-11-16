# Total six with cap three

*Medium · [Combinatorics](index.md)*

Allocate six identical counters to three labeled boxes A,B,C, each with occupancy at most three and empty boxes allowed. How many allocations exist?

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact finite structured answer for subtract-uniform-cap-violations; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The unrestricted total is $C(8,2)$.

</details>

<details>
<summary>Hint 2</summary>

For a named violating box, reserve four counters and distribute the remaining two.

</details>

<details>
<summary>Worked solution</summary>

Subtract each feasible violation family and check every intersection possibility.

1. There are $C(8,2)=28$ unrestricted allocations. Each named violation has $C(4,2)=6$ allocations.
2. Two violations would require at least eight counters, so the allowed count is $28-3\times 6=10$.

</details>
