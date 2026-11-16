# Prove a finite idempotent resolution is algebraically disjoint

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let real $n\times n$ idempotents $P_1,\ldots,P_k$ satisfy $\sum_jP_j=I$. Prove $P_iP_j=0$ for every distinct pair, without assuming symmetry or commutation in advance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict, demonstration or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For each idempotent, trace equals rank; compare their sum with the ambient dimension.

</details>

<details>
<summary>Hint 2</summary>

The sum of the images spans the whole space. Decide what equality of the dimension sum implies.

</details>

<details>
<summary>Model proof</summary>

Turn a trace identity into directness of image subspaces.

1. Each idempotent splits into its kernel and image, so its eigenvalues are zero and one and $\operatorname{tr}P_j=\operatorname{rank}P_j$. Taking traces gives $\sum_j\dim\operatorname{im}P_j=n$.
2. The image sum is all of $\mathbb R^n$ because $v=\sum_jP_jv$. Since the dimensions already add to $n$, this sum is direct.
3. For $v\in\operatorname{im}P_j$, one decomposition is $v$ in the $j$-th image and zero elsewhere. The decomposition $v=\sum_iP_iv$ must coincide with it by directness, forcing $P_iv=0$ for $i\ne j$. Applying this to $P_jx$ proves $P_iP_j=0$.

**Self-assessment rubric**

- Justify trace equals rank for each real idempotent and sum the ranks.
- Prove the images span and their dimension sum makes the sum direct.
- Compare decompositions of a vector in one image.
- Deduce every ordered mixed product vanishes without an assumed commutation relation.

</details>
