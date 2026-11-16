# Prove the finite planar Helly theorem

*Hard · [Geometry and trigonometry problems](index.md)*

Let $C_1,\ldots,C_n$ be convex subsets of the plane. Suppose every subfamily of at most three has nonempty intersection. Prove $\bigcap_i C_i\ne\varnothing$. No compactness or openness assumption is allowed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Assume a counterexample of minimal size and choose $P_i$ in all its sets except $C_i$.

</details>

<details>
<summary>Hint 2</summary>

Partition four chosen points into two groups with intersecting convex hulls, using an affine dependence of four augmented vectors.

</details>

<details>
<summary>Model proof</summary>

Use a four-point convex-hull intersection to contradict minimality.

1. Choose an inclusion-minimal subfamily with empty intersection. Its size $m$ is at least four by the hypothesis. For each index $i$, minimality gives a point $P_i$ in all the other $m-1$ sets.
2. For $P_1,P_2,P_3,P_4$, the augmented vectors $(P_i,1)$ are linearly dependent. Split a nonzero dependence into positive and negative parts and normalize; this gives nonempty disjoint index groups $I,J$ with a point $Q$ in both convex hulls. Zero coefficients can be assigned to either group.
3. For $k\in\{1,2,3,4\}$, one of the groups omits $k$. Every point of that group belongs to $C_k$, so convexity puts $Q$ in $C_k$.
4. For $k>4$, all four chosen points belong to $C_k$, so again $Q\in C_k$.
5. Thus $Q$ belongs to the whole minimal subfamily, contradicting its empty intersection. The argument used only finite minimality and convexity, so it covers unbounded and nonclosed sets.

**Self-assessment rubric**

- Choose a genuinely minimal empty subfamily and its omission points.
- Construct the intersecting convex hulls from an affine dependence.
- Explain membership for omitted indices and all remaining indices.
- Avoid adding compactness or openness assumptions.

</details>
