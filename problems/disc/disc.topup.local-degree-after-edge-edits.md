# Update a degree through distinct edge edits

*Medium · [Discrete mathematics](index.md)*

In a simple graph vertex v initially has degree $3$. Delete one edge incident to v, then add two distinct new nonloop edges incident to v, neither already present. Find the final degree of v.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Only incidences at v affect its degree.

</details>

<details>
<summary>Hint 2</summary>

The new-edge conditions ensure each addition contributes exactly one new incidence.

</details>

<details>
<summary>Worked solution</summary>

Each permitted local edge edit changes degree by one.

1. Deleting the incident edge reduces the degree from three to two.
2. The first and second new incident edges raise it to three and then four.
3. The final degree is $4$.

</details>
