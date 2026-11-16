# Commuting diagonalizable simultaneous

*Hard · [Original Putnam-style training](index.md)*

If two diagonalizable complex matrices $A,B$ commute, prove they admit a common eigenbasis.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Decompose the space into eigenspaces of $A$.

</details>

<details>
<summary>Hint 2</summary>

Commutation makes each $A$-eigenspace invariant under $B$.

</details>

<details>
<summary>Model proof</summary>

Choose a $B$-eigenbasis inside every $E_\lambda(A)$ and combine them. Every chosen vector is an eigenvector of both matrices.

1. Because $A$ is diagonalizable, $V=\bigoplus_{\lambda}E_{\lambda}(A)$. If $v\in E_\lambda(A)$, then $A(Bv)=B(Av)=\lambda Bv$, so $B$ preserves each summand.
2. The restriction of a diagonalizable operator $B$ to any invariant subspace is diagonalizable: its minimal polynomial divides the squarefree minimal polynomial of $B$.
3. Choose a $B$-eigenbasis inside every $E_\lambda(A)$ and combine them. Every chosen vector is an eigenvector of both matrices.

**Self-assessment rubric**

- Show each A-eigenspace is B-invariant by commutation.
- Justify diagonalizability of B on those invariant eigenspaces.
- Combine their B-eigenbases into a common eigenbasis.

</details>
