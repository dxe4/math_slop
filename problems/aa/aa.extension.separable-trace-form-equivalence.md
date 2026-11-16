# Characterize separability by a bilinear field invariant

*Hard · [Abstract algebra problems](index.md)*

For a finite field extension L/K prove the trace pairing $(x,y)\mapsto\operatorname{Tr}_{L/K}(xy)$ is nondegenerate exactly when the extension is separable. You may use the primitive-element theorem and the standard number of embeddings of a finite separable extension. Explain the inseparable direction rather than arguing only from Tr(1).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

In the separable case the Gram matrix on a power basis factors as a Vandermonde transpose times itself.

</details>

<details>
<summary>Hint 2</summary>

For an inseparable extension, pass through its maximal separable subfield and show every trace in the purely inseparable part is zero.

</details>

<details>
<summary>Model proof</summary>

Distinct embeddings make the trace form invertible; an inseparable degree kills all traces.

1. If L/K is separable, choose a primitive element theta of degree n, with distinct conjugates theta\_1,...,theta\_n. On1,theta,...,theta^(n-1), the trace Gram matrix is V^T\*V, where V\_(j,i)=theta\_j^i. The Vandermonde determinant is nonzero, so the Gram determinant is its nonzero square and the pairing is nondegenerate.
2. If L/K is inseparable, its maximal separable subfield E has L/E purely inseparable of degree a positive power of the characteristic p, greater than one. For a in L not in E, its minimal polynomial over E is X^(p^s)-c and has zero next-to-leading coefficient, so its trace from E(a) to E is zero. Trace from L through E(a) therefore also vanishes. For a in E the trace from L to E is\[L:E\]\*a=0.
3. Thus Tr\_(L/E) is the zero map, and trace transitivity makes Tr\_(L/K) zero on every element. The pairing is then identically zero on a nonzero vector space and degenerate. This also explains why one isolated zero value Tr(1) would not by itself prove inseparability.

**Self-assessment rubric**

- Construct the separable power-basis Gram factorization.
- Prove the trace map vanishes on both the base subfield and its purely inseparable elements.
- Use trace transitivity and distinguish a zero trace map from one zero value.

</details>
