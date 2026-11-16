# Count a nested tree

*Medium · [Discrete mathematics](index.md)*

leaf is a one-vertex leaf tree. join(A,B) adds one internal root over child trees A,B. For join(leaf,join(leaf,leaf)), give fields leaves and internal.

```answer
{"answer":{"kind":"integer_pair","expected":{"leaves":3,"internal":2},"checker_scope":"Checks only this authored count-recursive-tree-pieces task. Does not certify unrestricted proof validity, general construction ability or full mastery of structural induction."}}
```

<details>
<summary>Hint 1</summary>

Count occurrences of leaf.

</details>

<details>
<summary>Hint 2</summary>

Each join adds one internal vertex.

</details>

<details>
<summary>Worked solution</summary>

Finite full binary trees are built from a leaf or a new root over two child trees. Count constructors and recognize how smaller-tree hypotheses combine.

1. Three leaf occurrences give three leaves.
2. Two join constructors give two internal vertices.

</details>
