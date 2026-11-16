# Two disconnected even-degree pieces

*Medium · [Discrete mathematics](index.md)*

The simple undirected graph consists of disjoint triangles AB,BC,CA and DE,EF,FD with no other edges. Select the mathematically correct statement from the four alternatives.

**Options**

1. One Euler trail exists because all degrees are even.
2. None exists because the edge-containing graph is disconnected.
3. None exists because each vertex has degree three.
4. One trail exists because the two triangle circuits can be concatenated without a connecting edge.

```answer
{"answer":{"kind":"multiple_choice","expected":"none_exists_because","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["one_euler_trail_exis","none_exists_because","three_which_is_corre","one_trail_exists_bec"]}
```

<details>
<summary>Hint 1</summary>

A route must use actual edges to change components.

</details>

<details>
<summary>Hint 2</summary>

Every triangle vertex has degree two.

</details>

<details>
<summary>Worked solution</summary>

Euler trails use each edge once and may revisit vertices. Explicit graph conventions and connectedness of the edge-containing part matter.

1. All degrees are even, but the two edge-containing components are separate.
2. A single trail cannot visit edges in both. B is the obstruction.

</details>
