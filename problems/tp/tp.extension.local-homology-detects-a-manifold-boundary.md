# Distinguish interior and boundary points by local homology

*Hard · [Topology problems](index.md)*

For n≥1 compute all $H_k(\mathbb R^n,\mathbb R^n\setminus\{0\};\mathbb Z)$ and $H_k(H,H\setminus\{0\};\mathbb Z)$ where H={x\_n≥0} and 0 is on its boundary. Use excision to explain why these are the local groups of an n-manifold at interior and boundary points respectively.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use contractibility of each ambient model and deformation retract each punctured model onto its unit directions.

</details>

<details>
<summary>Hint 2</summary>

The full-space directions form S^{n−1}; the half-space directions form a closed hemisphere.

</details>

<details>
<summary>Model proof</summary>

At a boundary point the punctured local model remains contractible, so the local orientation group disappears.

1. For any contractible nonempty ambient model A, the long exact sequence gives H\_k(A,A∖{0})≅H̃\_{k−1}(A∖{0}) for k≥1, and H₀ of the pair is zero because the punctured model is nonempty and maps onto the component of A.
2. Radial deformation retracts Rⁿ∖{0} onto S^{n−1}. Its reduced homology is Z in degree n−1 and zero otherwise, including S⁰ when n=1. Thus the full-space relative groups are Z at k=n and zero in every other degree.
3. Radial deformation retracts H∖{0} onto the closed upper hemisphere in S^{n−1}, which is contractible, also for n=1 when it is one point. All reduced groups vanish, so every local relative group at the boundary model is zero.
4. For a manifold point choose a coordinate neighborhood and a smaller coordinate ball or half-ball. Excision removes the complement of the smaller neighborhood from the pair (M,M∖{x}), since its closure avoids x and lies in the interior of the second member. Homeomorphism and radial contraction reduce to the displayed models. Consequently an interior point cannot be homeomorphically identified with a boundary point.

**Self-assessment rubric**

- Uses the pair exact sequence including low-degree behavior.
- Computes full-sphere and hemisphere reduced homology with the n=1 case covered.
- States a valid neighborhood/excision reduction to local coordinate models.
- Explains the resulting topological distinction without assuming an orientation globally.

</details>
