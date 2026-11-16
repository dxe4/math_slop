# Combine the two tree hypotheses

*Medium · [Discrete mathematics](index.md)*

Child trees satisfy L1=I1+$1$, L2=I2+$1$. A join has I=I1+I2+$1$ and L=L1+L2. Which derives $L=I+1$? Select the mathematically correct statement from the four alternatives.

**Options**

1. L=I1+I2=I.
2. $L=(I1+1)+(I2+1)$=I1+I2+$2=I+1$.
3. L=L1+L2+$1$ because the root is a new leaf.
4. L=I1+I2+$2=I+2$.

```answer
{"answer":{"kind":"multiple_choice","expected":"l_i1_1_i2","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["l_i1_i2_i","l_i1_1_i2","l_l1_l2_1","l_i1_i2_2"]}
```

<details>
<summary>Hint 1</summary>

Substitute both child hypotheses.

</details>

<details>
<summary>Hint 2</summary>

The root increases I rather than L.

</details>

<details>
<summary>Worked solution</summary>

Finite full binary trees are built from a leaf or a new root over two child trees. Count constructors and recognize how smaller-tree hypotheses combine.

1. Substitution gives L=I1+I2+$2$.
2. The new internal count is I1+I2+1, so $L=I+1$. B closes this constructor case; a base case is still needed.

</details>
