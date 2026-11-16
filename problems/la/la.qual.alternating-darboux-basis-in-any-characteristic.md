# Construct a symplectic basis for an alternating form

*Hard · [Linear algebra problems](index.md)*

For a nondegenerate alternating bilinear form B on a finite-dimensional space over any field, prove the dimension is even and construct a basis of two-dimensional standard symplectic pairs. Alternating means $B(x,x)=0$ for every x, including in characteristic two.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a nonzero u, find v with $B(u,v)=1$ using nondegeneracy.

</details>

<details>
<summary>Hint 2</summary>

The plane they span is nondegenerate; explicitly subtract its paired component to obtain an orthogonal complement and induct.

</details>

<details>
<summary>Model proof</summary>

Nondegenerate paired planes split off without a positive norm.

1. Alternation gives $B(u,v)=-B(v,u)$ by expanding the square of $u+v$, valid also in characteristic two. For nonzero u, choose and scale v so that $B(u,v)=1$.
2. The plane H spanned by u,v has Gram matrix $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and is nondegenerate. For every x its H component is $B(x,v)u-B(x,u)v$, leaving a vector in $H^\perp$. Thus the sum is direct and exhaustive.
3. The restriction to $H^\perp$ is nondegenerate: a vector killing both H and its complement kills the whole space, so must be zero.
4. Repeat on that smaller space. Every step removes exactly two dimensions and gives a standard pair; the process ends at zero, proving even dimension and the required basis.

**Self-assessment rubric**

- Derive the skew relation from alternation in arbitrary characteristic.
- Construct and normalize a nondegenerate two-dimensional pair.
- Verify the projection formula and nondegeneracy of the complement.
- Complete the induction and deduce the parity of the dimension.

</details>
