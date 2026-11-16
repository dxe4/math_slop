# A triangle with a tail

*Medium · [Discrete mathematics](index.md)*

A simple undirected graph has edges $\{1,2\},\{2,3\},\{3,1\},\{3,4\}$. Select the mathematically correct statement from the four alternatives.

**Options**

1. No proper two-coloring exists because $1,2,3$ form an odd cycle.
2. A two-coloring exists because there are four vertices.
3. A two-coloring exists because there is a leaf.
4. No: every graph with a leaf fails to have a proper two-coloring.

```answer
{"answer":{"kind":"multiple_choice","expected":"no_proper_two_colori","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["no_proper_two_colori","a_two_coloring_exist","leaf_which_is_correc","no_every_graph_with"]}
```

<details>
<summary>Hint 1</summary>

Alternate colors around the triangle.

</details>

<details>
<summary>Hint 2</summary>

The extra leaf cannot remove an existing conflict.

</details>

<details>
<summary>Worked solution</summary>

Construct opposite colors along edges or identify an odd-cycle obstruction. Color names can be swapped unless a vertex color is fixed.

1. If $1$ is red, $2$ is blue and $3$ red, but edge $\{3,1\}$ joins two reds.
2. Swapping color names keeps the conflict. A identifies the odd-cycle obstruction.

</details>
