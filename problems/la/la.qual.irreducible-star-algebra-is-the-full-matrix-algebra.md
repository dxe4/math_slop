# Prove finite-dimensional irreducible star-algebra rigidity

*Hard · [Linear algebra problems](index.md)*

Let $\mathcal A\subset M_n(\mathbb C)$ be a complex unital subalgebra closed under adjoints and having no common invariant complex subspace other than zero and $\mathbb C^n$. Prove $\mathcal A=M_n(\mathbb C)$. Preparation: spectral projections as polynomial functions and finite-dimensional invariant-subspace methods.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a nonzero orthogonal projection in the algebra of least possible rank, starting from the identity.

</details>

<details>
<summary>Hint 2</summary>

Its corner algebra must be scalar on its range. Use irreducibility to force that projection to have rank one and then manufacture arbitrary rank-one maps.

</details>

<details>
<summary>Model proof</summary>

A smallest algebraic projection and adjoint closure generate all matrix units.

1. Choose a nonzero projection P in the algebra of minimal rank. Every self-adjoint element of $P\mathcal AP$ must be scalar on its range: otherwise its spectral decomposition gives a nonzero proper projection of smaller rank, belonging to the corner by polynomial calculus with identity P.
2. Every element of this corner is a complex combination of two self-adjoint ones, so $P\mathcal AP=\mathbb CP$. If its range had orthogonal nonzero u,v, then for every X in the algebra $\langle Xu,v\rangle=\langle PXPu,v\rangle=0$. But $\mathcal Au$ is a nonzero invariant subspace and hence the whole space, contradicting v nonzero. Thus P has rank one.
3. Write $P=ee^*$ for a unit vector e. For any target x,y, irreducibility gives algebra elements X,Y with $Xe=x$ and $Ye=y$, since $\mathcal Ae$ is the whole space. Adjoint closure makes $XPY^*=xy^*$ belong to the algebra.
4. All coordinate matrix units are of this form, and their complex span is $M_n(\mathbb C)$. Therefore the algebra is the full matrix algebra.

**Self-assessment rubric**

- Choose a minimal-rank algebra projection and justify its corner spectral projections.
- Prove the entire corner is scalar using adjoint closure.
- Use two orthogonal range vectors and an invariant orbit to force rank one.
- Construct all rank-one operators and conclude equality of algebras.

</details>
