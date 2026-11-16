# Update a lexicographic topological frontier after each deletion

*Medium · [Computational arithmetic problems](index.md)*

A DAG on vertices $1,\ldots,6$ has edges $3\to1$, $3\to5$, $2\to5$, $1\to4$, $5\to4$, $4\to6$. Repeatedly delete the smallest currently zero-indegree vertex. Return the deletion order.

```answer
{"answer":{"kind":"vector","expected":["2","3","1","5","4","6"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Compute the initial zero-indegree set rather than choosing the smallest vertex globally.

</details>

<details>
<summary>Hint 2</summary>

After deleting a vertex, update only its outgoing neighbors before choosing the next minimum.

</details>

<details>
<summary>Worked solution</summary>

Kahn deletion changes its available frontier after each predecessor is removed.

1. The initial zero-indegree vertices are $2$ and $3$, so delete $2$ first; vertex $5$ still has predecessor $3$.
2. Delete $3$ next, making $1$ and $5$ available. Their smallest member is $1$.
3. Deleting $1$ does not yet free $4$, since $5$ remains. Delete $5$, then $4$ becomes available, and deleting $4$ frees $6$.
4. The exact order is $[2,3,1,5,4,6]$, respecting every directed edge.

</details>
