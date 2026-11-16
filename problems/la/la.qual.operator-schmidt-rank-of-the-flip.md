# Prove the exact operator tensor rank of a swap

*Hard · [Linear algebra problems](index.md)*

On $\mathbb C^n\otimes\mathbb C^n$, define F by $F(u\otimes v)=v\otimes u$. Prove the smallest r for which $F=\sum_{a=1}^r A_a\otimes B_a$ with $A_a,B_a\in M_n(\mathbb C)$ is $n^2$. Distinguish this operator Schmidt rank from ordinary matrix rank.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Write the swap using all matrix units.

</details>

<details>
<summary>Hint 2</summary>

Flatten the tensor as a map from the algebraic dual of the first matrix space to the second; a simple operator tensor gives a map of rank at most one.

</details>

<details>
<summary>Model proof</summary>

A full-rank coefficient contraction gives a decomposition-independent lower bound.

1. The formula $F=\sum_{i,j}E_{ij}\otimes E_{ji}$ follows by acting on each $e_k\otimes e_l$, whose output is $e_l\otimes e_k$. This gives an upper bound $n^2$.
2. For an operator tensor X, define the contraction map $\Psi_X:f\mapsto(f\otimes\operatorname{id})(X)$ from $(M_n)^*$ to $M_n$. A simple tensor $A\otimes B$ has image contained in the line spanned by B, so r such terms give rank at most r.
3. For F the coordinate dual functional selecting $E_{ij}$ is sent to $E_{ji}$. Thus $\Psi_F$ is a bijection between two $n^2$-dimensional spaces and has rank $n^2$, proving the matching lower bound.
4. Ordinary rank acts on the original vector tensor space and measures a different object. For example $I_n\otimes I_n$ has full ordinary rank $n^2$ but operator Schmidt rank one.

**Self-assessment rubric**

- Verify the matrix-unit tensor decomposition by its basis action.
- Define the flattening and bound its rank for any proposed decomposition.
- Prove the swap flattening is invertible and derive the exact minimum.
- Explain the difference from ordinary operator rank with a valid contrast.

</details>
