# Characterize and identify an invariant kernel complement

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For a real endomorphism T of finite-dimensional V, find a criterion using $\ker T$ and $\ker T^2$ for the kernel to have a T-invariant complementary subspace. Prove the complement is then unique and identify it. Include a counterexample when the criterion fails.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

On any invariant complement the restriction of T has zero kernel and is therefore onto that complement.

</details>

<details>
<summary>Hint 2</summary>

Compare the image and kernel, and use rank-nullity to turn trivial intersection into a direct decomposition.

</details>

<details>
<summary>Model proof</summary>

An invariant splitting is stricter than an arbitrary vector-space complement.

1. If $V=\ker T\oplus W$ with $TW\subseteq W$, the restriction $T|_W$ is injective and hence surjective. Thus $\operatorname{im}T=W$ and $\operatorname{im}T\cap\ker T=0$. This also forces uniqueness of a possible complement.
2. The latter intersection is zero exactly when $\ker T^2=\ker T$: if $T^2v=0$, then $Tv$ lies in that intersection; conversely a vector $Tv$ in the intersection forces $v\in\ker T^2$ and hence $Tv=0$.
3. Under this criterion, rank-nullity gives the direct sum $V=\ker T\oplus\operatorname{im}T$, and the image is invariant, proving sufficiency and the claimed identity of the complement.
4. For $T=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, the square kernel is the whole plane and the kernel itself is a line, so no invariant complement exists even though ordinary linear complements do.

**Self-assessment rubric**

- Use finite-dimensional injectivity on a proposed invariant complement to identify it with the image.
- Prove the equivalence with equality of the two kernel powers.
- Construct the invariant direct sum and explain uniqueness.
- Give an explicit nilpotent map and verify its kernel obstruction.

</details>
