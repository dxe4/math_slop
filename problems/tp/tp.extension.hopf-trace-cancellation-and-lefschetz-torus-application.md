# Prove alternating trace cancellation and apply Lefschetz

*Hard · [Topology problems](index.md)*

Let C\_\* be a finite chain complex of finite-dimensional rational vector spaces and F a chain endomorphism. Prove $\sum_k(-1)^k\operatorname{tr}(F|C_k)=\sum_k(-1)^k\operatorname{tr}(F_*|H_k)$ using invariant subspaces, not a preferred splitting respected by F. Then apply the Lefschetz fixed-point theorem to the torus map induced by $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use trace additivity in the exact sequences relating cycles, boundaries and chains.

</details>

<details>
<summary>Hint 2</summary>

On torus homology the traces are 1, tr A and det A in degrees 0,1,2.

</details>

<details>
<summary>Model proof</summary>

Boundary traces cancel in adjacent degrees, leaving a homotopy-invariant Lefschetz number.

1. Put Z\_k=ker d\_k and B\_k=im d\_{k+1}; a chain map preserves both. Trace is additive for an invariant subspace and its quotient because an adapted basis gives a block triangular matrix. Thus tr(F\|C\_k)=tr(F\|Z\_k)+tr(F\|B\_{k−1}) from 0→Z\_k→C\_k→B\_{k−1}→0.
2. Likewise tr(F\|Z\_k)=tr(F\|B\_k)+tr(F\_\*\|H\_k). Add these equalities with signs (−1)^k. Each boundary trace occurs once with sign (−1)^k and once with sign (−1)^{k+1}, so they cancel. Finiteness makes this summation legitimate and yields the asserted identity without an F-invariant splitting.
3. For the torus map, H₀ has trace 1, H₁ has trace tr A=0 and H₂ has trace det A=1. Hence the rational Lefschetz number is 1−0+1=2.
4. The torus is a compact finite CW complex, so the Lefschetz fixed-point theorem applies: a nonzero Lefschetz number forces a fixed point. Therefore this map, and any map homotopic to it, has a fixed point. The trace identity itself is algebraic and does not alone replace the fixed-point theorem.

**Self-assessment rubric**

- Uses invariant cycle and boundary subspaces with quotient trace additivity.
- Displays the adjacent-degree boundary cancellation without assuming a preserved splitting.
- Computes the three homology traces with correct signs.
- Applies the separately stated Lefschetz theorem to the compact finite CW torus.

</details>
