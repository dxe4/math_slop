# Transfer induction to recursive structure

*Difficulty 3 of 5 · [Transferable proof strategies](index.md) · exercise 2 of 4*

A finite full binary tree is either one leaf or a root with exactly two full binary subtrees. Prove that its number L of leaves is one more than its number I of internal vertices.

<details>
<summary>Hint 1</summary>

Induct on the recursive construction, not on a drawing

</details>

<details>
<summary>Hint 2</summary>

For a joined tree, count the new root as internal

</details>

<details>
<summary>Worked solution</summary>

For the base tree consisting of one leaf, $L=1$ and $I=0$, so $L=I+1$. Now join two full binary trees with counts $(L_1,I_1)$ and $(L_2,I_2)$ beneath a new root. By induction $L_1=I_1+1$ and $L_2=I_2+1$. The joined tree has $L=L_1+L_2$ leaves and $I=I_1+I_2+1$ internal vertices. Hence $L=(I_1+1)+(I_2+1)=I_1+I_2+2=I+1$. Structural induction proves the claim for every finite full binary tree.

**Answer.** Every finite full binary tree satisfies $L=I+1$.

</details>

*Tags: structural induction, tree, recursive definition*
