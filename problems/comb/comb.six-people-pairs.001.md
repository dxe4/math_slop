# Count every unordered pair once

*Easy · [Combinatorics](index.md)*

Six distinct people A, B, C, D, E, F are available. Choose an unordered two-person team with no repeated person. How many teams are possible?

```answer
{"answer":{"kind":"integer","expected":15,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

First count ordered choices of two different people.

</details>

<details>
<summary>Hint 2</summary>

Every team has exactly two orders.

</details>

<details>
<summary>Worked solution</summary>

Divide a uniform overcount by its common multiplicity.

1. There are $6 \times  5 = 30$ ordered selections.
2. Each unordered team is represented twice, so the count is $30/2 = 15$.

</details>
