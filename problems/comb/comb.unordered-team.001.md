# Count teams without counting order twice

*Easy · [Combinatorics](index.md)*

Five distinct people are available. How many unordered two-person teams can be chosen? Each person may appear at most once in a team.

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact team count; order and repetition assumptions are explicit."}}
```

<details>
<summary>Hint 1</summary>

Choosing a first and second person counts each team more than once.

</details>

<details>
<summary>Hint 2</summary>

There are $5\cdot 4$ ordered selections; each unordered team has two orders.

</details>

<details>
<summary>Worked solution</summary>

Division is justified by the same multiplicity for every counted team.

1. There are $20$ ordered selections of distinct people.
2. Each team appears twice, so the unordered count is $20/2=10$.

A table pairs $AB$ with $BA$ for each team and lists the ten distinct teams.

</details>
