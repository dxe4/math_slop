# Locate the shortest odd-cycle obstruction

*Hard · [Discrete mathematics](index.md)*

An undirected graph on $\{1,2,3,4,5,6\}$ has edges 12,23,34,45,51,56. Find the length of its shortest odd cycle.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

A vertex of degree one cannot belong to a cycle.

</details>

<details>
<summary>Hint 2</summary>

After excluding that vertex, inspect which cycle edges remain.

</details>

<details>
<summary>Worked solution</summary>

The pendant vertex does not add another cycle or shorten the existing one.

1. Vertex six has degree one, so it belongs to no cycle.
2. The remaining graph is exactly the cycle 1-2-3-4-5-1 and has no chords.
3. That cycle has odd length five and is the only cycle, so the answer is $5$.

</details>
