# Prove nuclear norm duality and its rank-one convex geometry

*Hard · [Linear algebra problems](index.md)*

For real or complex rectangular matrices define $\|A\|_*\!:=\sum_j\sigma_j(A)$. Prove it is the norm dual to the induced Euclidean operator norm under the trace pairing, in both directions. Prove its closed unit ball is the convex hull of unit-length rank-one matrices $uv^*$ with $\|u\|=\|v\|=1$. Preparation: finite SVD and elementary convex combinations.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Expand A in its singular vectors and bound each scalar pairing with an operator-norm contraction.

</details>

<details>
<summary>Hint 2</summary>

The polar partial isometry attains that bound. Use the same SVD coefficients as convex weights, representing any unused weight by zero.

</details>

<details>
<summary>Model proof</summary>

Singular vectors give both dual maximizers and an exact atomic decomposition.

1. Write $A=\sum_j\sigma_j u_jv_j^*$. For $\|B\|_2\le1$, the trace pairing has absolute value at most $\sum_j\sigma_j|u_j^*Bv_j|\le\sum_j\sigma_j$. Taking $B=\sum_j u_jv_j^*$ on the nonzero singular directions attains this sum and has operator norm one; for A zero choose B zero.
2. Therefore $\|A\|_*=\sup_{\|B\|_2\le1}|\operatorname{tr}(B^*A)|$. This also proves the triangle inequality and homogeneity, while positivity follows from the singular values. Reversing the dual roles gives an upper bound $|\operatorname{tr}(B^*A)|\le\|B\|_2\|A\|_*$, attained for nuclear-unit $A=uv^*$ using a top singular pair of B, so the opposite dual norm is exactly $\|B\|_2$.
3. Every atom $uv^*$ with unit vectors has nuclear norm one. Convexity just proved therefore places their convex hull in the nuclear unit ball.
4. Conversely if $\sum\sigma_j\le1$, the SVD expresses A as a nonnegative weighted sum of these atoms with total weight at most one. Add the remaining weight on zero; zero itself is the average of an atom and its negative. This is a finite convex combination of atoms. The same argument includes the zero matrix and works over either stated field.

**Self-assessment rubric**

- Derive the singular-vector bound with correct conjugation and rectangular dimensions.
- Construct the attaining partial isometry and the reverse top-singular-pair maximizer.
- Explain how the dual formula establishes the required norm properties.
- Prove both convex-hull containments, including unused weight and zero.

</details>
