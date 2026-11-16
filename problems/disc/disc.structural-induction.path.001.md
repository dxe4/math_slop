# Use a leaf-count identity

*Easy · [Discrete mathematics](index.md)*

A finite full binary tree has five internal vertices. Given the identity $L=I+1$, how many leaves does it have?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Checks only this authored apply-full-binary-leaf-identity task. Does not certify unrestricted proof validity, general construction ability or full mastery of structural induction."}}
```

<details>
<summary>Hint 1</summary>

Substitute $I=5$.

</details>

<details>
<summary>Hint 2</summary>

The leaf count differs from the total vertex count.

</details>

<details>
<summary>Worked solution</summary>

Finite full binary trees are built from a leaf or a new root over two child trees. Count constructors and recognize how smaller-tree hypotheses combine.

1. $L=I+1=5+1=6$.
2. The total vertex count would be $5+6=11$ instead.

</details>
