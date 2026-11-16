# Prove the sharp real isotropic dimension including degeneracy

*Hard · [Linear algebra problems](index.md)*

For a real symmetric bilinear form of inertia $(p,q,r)$, prove the largest dimension of a totally isotropic subspace is $r+\min(p,q)$. Total isotropy means the form vanishes on every pair of its vectors. Include zero positive or negative index.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Pass to the quotient by the radical before using positive and negative coordinates.

</details>

<details>
<summary>Hint 2</summary>

In a nondegenerate diagonal model, projection of an isotropic subspace to either sign block is injective.

</details>

<details>
<summary>Model proof</summary>

Separate invisible radical directions from paired positive and negative directions.

1. Let R be the radical, of dimension r. The quotient has a nondegenerate form of signature $(p,q)$. For any isotropic U, its quotient image is isotropic and $\dim U=\dim(U\cap R)+\dim\pi(U)$.
2. In a diagonal $(p,q)$ model, a vector in an isotropic subspace with zero positive coordinates must have all negative coordinates zero because its square is zero; the same reasoning reverses signs. Thus the isotropic dimension is at most both p and q.
3. It follows that $\dim U\le r+\min(p,q)$. For attainment, include the whole radical and, in normalized positive and negative bases, use vectors $e_j+f_j$ for $j\le\min(p,q)$.
4. These vectors pair to zero with themselves and one another and are independent modulo the radical. If one sign index is zero this construction simply gives the radical, as the formula requires.

**Self-assessment rubric**

- Pass to the nondegenerate quotient and relate dimensions correctly.
- Prove injectivity into both sign coordinate blocks.
- Construct a fully pairwise-isotropic space of the claimed dimension.
- Include a nontrivial radical and zero sign-index cases.

</details>
