# Compute all integral homology of a product with torsion

*Hard · [Topology problems](index.md)*

Compute every integral homology group of $\mathbb{RP}^2\times\mathbb{RP}^2$ using the integral Künneth theorem. State its tensor and Tor contributions by degree, and explain whether any extension ambiguity remains in this example.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Each factor has H₀=Z, H₁=Z/2 and no other nonzero integral homology.

</details>

<details>
<summary>Hint 2</summary>

The tensor H₁⊗H₁ appears in total degree 2, while Tor(H₁,H₁) appears one degree higher.

</details>

<details>
<summary>Model proof</summary>

Torsion produces a higher product homology group invisible to a tensor-only calculation.

1. For each factor H₀=Z and H₁=Z/2; the top integral H₂ is zero. The Künneth short exact sequence in degree n has left term ⊕\_{i+j=n}H\_i⊗H\_j and right term ⊕\_{i+j=n−1}Tor₁^Z(H\_i,H\_j). It applies because singular or cellular chains are free over Z.
2. The tensor terms are Z in degree 0, (Z/2)² in degree 1, Z/2 from H₁⊗H₁ in degree 2, and zero elsewhere. Tensoring with H₀ introduces no torsion term. Since Tor(Z/2,Z/2)=Z/2, the only nonzero Tor contribution is in degree 3.
3. Thus H₀=Z, H₁=(Z/2)², H₂=Z/2, H₃=Z/2 and H\_n=0 for n≥4. In each degree at most one side of the short exact sequence is nonzero, so these identifications require no choice of a splitting and there is no extension ambiguity.
4. The degree-three torsion is compatible with the product being a four-dimensional nonorientable manifold: its top integral H₄ vanishes. Rationally all positive groups vanish, so a rational calculation would miss every displayed positive-degree group.

**Self-assessment rubric**

- States the tensor and Tor degree conventions accurately and checks free-chain hypotheses.
- Computes all tensor summands with their multiplicities.
- Places Tor(Z/2,Z/2) in degree 3 rather than degree 2.
- Lists every group and explains why no unresolved extension affects this example.

</details>
