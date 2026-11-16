# Classify a pair of complementary square-zero actions

*Hard · [Linear algebra problems](index.md)*

Let real matrices on a positive-dimensional V satisfy $A^2=B^2=0$ and $AB+BA=I$. Prove the dimension is even and the pair is simultaneously similar to $A_0=\begin{pmatrix}0&I_r\\0&0\end{pmatrix}$, $B_0=\begin{pmatrix}0&0\\I_r&0\end{pmatrix}$. Preparation: invariant-kernel bases and block similarity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The anticommutator identity shows every vector in the kernel of A belongs to its image.

</details>

<details>
<summary>Hint 2</summary>

After normalizing A, determine the blocks of B and use a block upper shear that commutes with A.

</details>

<details>
<summary>Model proof</summary>

The algebraic relations determine both dimension and the complete pair type.

1. One always has $\operatorname{im}A\subseteq\ker A$. If Av is zero, then $v=(AB+BA)v=ABv$ lies in the image, so equality holds. Rank-nullity makes the dimension $2r$.
2. Choose a basis $u_j$ of that kernel/image and preimages $w_j$ with $Aw_j=u_j$. In the ordered basis $(u_1,\ldots,u_r,w_1,\ldots,w_r)$, A is $A_0$.
3. Writing B in four blocks, the relation $A_0B+BA_0=I$ forces $B=\begin{pmatrix}X&Y\\I&-X\end{pmatrix}$. The equation $B^2=0$ forces $Y=-X^2$, and these conditions also make its other square blocks vanish.
4. The shear $S=\begin{pmatrix}I&X\\0&I\end{pmatrix}$ commutes with $A_0$ and satisfies $S^{-1}BS=B_0$ by block multiplication. Hence it normalizes B without changing A. Conversely the standard pair satisfies every relation for each positive r.

**Self-assessment rubric**

- Prove equality of kernel and image and derive even dimension.
- Construct the paired basis putting A in the prescribed block form.
- Use both relations to identify every block of B.
- Verify a commuting shear sends B to the standard partner and establish the converse.

</details>
