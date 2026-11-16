# Select a spanning tree

*Medium · [Discrete mathematics](index.md)*

The original graph is complete on $\{1,2,3,4\}$. Which edge set is a spanning tree on all four vertices? Select the mathematically correct statement from the four alternatives.

**Options**

1. $\{1,2\},\{2,3\},\{3,4\}$.
2. $\{1,2\},\{2,3\},\{3,1\}$.
3. $\{1,2\},\{2,3\}$.
4. The edges $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$.

```answer
{"answer":{"kind":"multiple_choice","expected":"spanning_path","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["spanning_path","triangle_misses_four","missing_fourth","cycle_on_four"]}
```

<details>
<summary>Hint 1</summary>

Retain all four vertices while checking.

</details>

<details>
<summary>Hint 2</summary>

A tree needs connectedness and no cycle.

</details>

<details>
<summary>Worked solution</summary>

Trees are connected and acyclic; spanning trees retain every vertex while selecting suitable edges.

1. A is a connected four-vertex path without a cycle.
2. B has a triangle and isolated $4$; C also isolates $4$. Only A works.

</details>
