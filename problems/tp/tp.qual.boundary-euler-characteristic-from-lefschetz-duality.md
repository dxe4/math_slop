# Derive the boundary Euler formula using Poincaré–Lefschetz duality

*Hard · [Topology problems](index.md)*

Let M be a compact connected oriented smooth n-manifold, n≥1, possibly with boundary. Prove $\chi(\partial M)=(1-(-1)^n)\chi(M)$ using rational Poincaré–Lefschetz duality and the pair exact sequence. Deduce χ(M)=1−g when n=3 and the boundary is a connected genus-g oriented surface. State where finiteness enters.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The pair exact sequence gives χ(M,∂M)=χ(M)−χ(∂M).

</details>

<details>
<summary>Hint 2</summary>

Duality reverses homological degree and therefore multiplies the Euler sum by (−1)ⁿ.

</details>

<details>
<summary>Model proof</summary>

Relative duality translates the boundary contribution into an alternating-sign comparison of two finite Euler sums.

1. Compact smooth manifolds have finite CW homotopy type, and their boundary pair has finite-dimensional rational homology with finitely many nonzero degrees. Alternating dimensions in the pair long exact sequence therefore gives χ(M,∂M)=χ(M)−χ(∂M).
2. Poincaré–Lefschetz duality for the oriented compact n-manifold gives H\_k(M,∂M;Q)≅H^{n−k}(M;Q). Over Q the cohomology and homology Betti numbers agree, hence χ(M,∂M)=∑\_k(−1)^k b\_{n−k}(M)=(−1)^nχ(M).
3. Equate the two formulas and rearrange to obtain χ(∂M)=(1−(−1)^n)χ(M). This also covers empty boundary: for a closed odd-dimensional manifold the equation forces χ(M)=0.
4. For n=3 the factor is 2. A connected oriented genus-g boundary has Euler characteristic 2−2g, so 2χ(M)=2−2g and χ(M)=1−g. No assertion about the individual Betti numbers follows from this Euler equality alone.

**Self-assessment rubric**

- Justifies finite Euler sums and their additivity for the pair.
- Applies rational Poincaré–Lefschetz duality with compactness, orientation and degree reversal.
- Derives the sign formula and the three-dimensional genus consequence, including the empty-boundary interpretation.

</details>
