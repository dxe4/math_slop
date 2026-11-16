# Prove the finite-dimensional star-bicommutant theorem

*Hard · [Linear algebra problems](index.md)*

Let $\mathcal A\subseteq M_n(\mathbb C)$ be a complex unital subalgebra closed under adjoints. Prove $\mathcal A=\mathcal A^{\prime\prime}$, with primes denoting commutants. Use finite amplification and an invariant-subspace projection rather than assuming a structure classification of star algebras.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

In n copies of the coordinate space, consider the tuples $(Ae_1,\ldots,Ae_n)$ as A ranges over the algebra.

</details>

<details>
<summary>Hint 2</summary>

The orthogonal projection onto that subspace has blocks in the commutant. An element of the bicommutant therefore acts diagonally while preserving that subspace.

</details>

<details>
<summary>Model proof</summary>

One amplified orbit simultaneously records an operator on every basis vector.

1. Let H be $\mathbb C^n$ and let M in $H^n$ be the linear subspace of tuples $(Xe_1,\ldots,Xe_n)$ for $X\in\mathcal A$. It is invariant under the diagonal action of every algebra element and its adjoint. Its orthogonal complement is therefore invariant as well.
2. The orthogonal projection P onto M commutes with every diagonal algebra action. In block coordinates, each n-by-n block $P_{ij}$ consequently belongs to $\mathcal A^{\prime}$.
3. For $T\in\mathcal A^{\prime\prime}$, the diagonal action of T commutes with P. The tuple $\xi=(e_1,\ldots,e_n)$ belongs to M because the algebra contains the identity. Hence $(Te_1,\ldots,Te_n)$ is again in M.
4. Thus one $X\in\mathcal A$ agrees with T on all basis vectors and equals T, proving the nontrivial containment. The reverse containment follows from the definition of commutant. Adjoint closure was essential to the reducing-subspace projection step.

**Self-assessment rubric**

- Construct the finite-dimensional orbit subspace and prove it is reducing.
- Show every block of its orthogonal projection lies in the commutant.
- Use the diagonal T action and the identity tuple to obtain simultaneous basis agreement.
- Conclude both containments and identify the role of adjoint closure.

</details>
