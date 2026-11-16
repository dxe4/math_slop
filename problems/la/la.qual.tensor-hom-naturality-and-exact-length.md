# Prove the canonical tensor-Hom identification with naturality

*Hard · [Linear algebra problems](index.md)*

For finite-dimensional spaces V,W over a field F, prove $V\otimes W^*\cong\operatorname{Hom}(W,V)$ by $v\otimes f\mapsto(w\mapsto f(w)v)$. Prove compatibility with pre- and postcomposition and prove the shortest simple-tensor length equals the rank of the corresponding map.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Use basis vectors of V and the dual of a basis of W to see all matrix units.

</details>

<details>
<summary>Hint 2</summary>

A sum of r simple terms has image contained in the span of r output vectors; for the converse choose a basis of the image.

</details>

<details>
<summary>Model proof</summary>

The identification is intrinsic even though bases give a short bijectivity proof.

1. The displayed assignment is bilinear in v,f, so it induces a linear map on the tensor product. On bases $v_i$ and $w_j$ with dual $w_j^*$, it sends $v_i\otimes w_j^*$ to the matrix unit sending $w_j$ to $v_i$. These are bases on both sides, so the map is an isomorphism.
2. For maps $S:V\to V_1$ and $R:W_1\to W$, the tensor $(Sv)\otimes(f\circ R)$ corresponds to the composite $SXR$ when $v\otimes f$ corresponds to X. Equality on simple tensors and linearity prove the naturality statement.
3. An expression of X by r simple terms has image inside the span of their r output factors, so $\operatorname{rank}X\le r$. Conversely choose a basis $u_1,\ldots,u_s$ of the image and write $Xw=\sum_i f_i(w)u_i$. The coordinate functions $f_i$ are linear and give s simple terms.
4. The exact minimum is therefore the map rank s, including zero, whose tensor has length zero. No inner product or conjugate-dual identification was chosen.

**Self-assessment rubric**

- Induce the linear map and identify both coordinate bases correctly.
- Check the two-sided composition rule with the correct dual pullback.
- Bound the image dimension of any simple-tensor expression.
- Construct a matching expression from an image basis and include zero.

</details>
