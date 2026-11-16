# Count walks when every step has the same number of choices

*Easy · [Computational arithmetic problems](index.md)*

A simple graph has $10$ vertices, each of degree three. Count all length-five walks with arbitrary starting vertex and unrestricted repetition of vertices and edges.

```answer
{"answer":{"kind":"integer","expected":"2430","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Choose the start before choosing the five successive edges.

</details>

<details>
<summary>Hint 2</summary>

Walks may revisit vertices, so no choices are removed for previous visits.

</details>

<details>
<summary>Worked solution</summary>

Regularity supplies a uniform continuation count at every step.

1. There are ten starting choices.
2. Each of five steps has three choices, giving 3 to the fifth power, or 243, continuations per start.
3. The total number of walks is 2430.

</details>
