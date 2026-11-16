# A crowded box is unavoidable

*Medium · [Combinatorics](index.md)*

Twenty objects are assigned to six labeled boxes, with empty boxes allowed. What is the largest integer r such that every assignment guarantees some box contains at least r objects?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite structured answer for calculate-sharp-max-occupancy-lower-bound; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

If every box contained at most three, how many objects could fit?

</details>

<details>
<summary>Hint 2</summary>

To see that five is not guaranteed, look for a distribution with maximum four.

</details>

<details>
<summary>Worked solution</summary>

A guaranteed bound can be shown sharp by an explicit allocation.

1. At most three per box would fit only $18$ objects, so at least four are guaranteed.
2. The distribution $(4,4,3,3,3,3)$ totals $20$ and has no five, so $r=4$ is sharp.

</details>
