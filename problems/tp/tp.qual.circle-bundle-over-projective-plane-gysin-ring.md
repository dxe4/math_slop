# Compute the integral cohomology ring of a nontrivial circle bundle

*Hard · [Topology problems](index.md)*

Let $S^1\to E\xrightarrow{\pi}\mathbb{CP}^2$ be an oriented principal circle bundle with Euler class p h, p≥2, where h generates H²(CP²;Z) in the complex orientation. Use the integral Gysin sequence to compute all Hᵏ(E;Z) and all products of positive-degree generators. State which generator comes from pullback and which from the fiber-integration map.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In even base degrees 0→2 and 2→4, cup product with the Euler class is multiplication by p.

</details>

<details>
<summary>Hint 2</summary>

The pullback x=π\*h has x²=π\*(h²); top cohomology instead maps isomorphically to H⁴(CP²) by integration along the fiber.

</details>

<details>
<summary>Model proof</summary>

Gysin exactness determines additive torsion, and pullback naturality retains its nonzero square.

1. The Gysin sequence has successive maps H^{k−2}(CP²)→Hᵏ(CP²) given by cup with p h, followed by π\* and then fiber integration Hᵏ(E)→H^{k−1}(CP²). Base odd cohomology vanishes, and its even groups in degrees 0,2,4 are Z.
2. The maps Z→Z in degrees 0→2 and 2→4 are injective multiplication by p. Exactness gives H⁰(E)=Z, H¹=0, H²=Z/p, H³=0 and H⁴=Z/p. In degree 5 integration is an isomorphism H⁵(E)→H⁴(CP²)=Z, so H⁵=Z; all groups above 5 vanish.
3. Let x=π\*h in degree 2. It generates H² and has order p. Its square π\*(h²) generates H⁴, also of order p, so it is nonzero. Choose the degree-five generator y with fiber integration π\_!(y)=h²; the total-space orientation fixes its sign.
4. All other products of positive-degree generators vanish by dimension: x³,xy and y² lie above degree 5. Thus the unital graded ring can be written Z\[x,y\]/(p x,x³,xy,y²) with \|x\|=2 and \|y\|=5. In particular the degree-four torsion generator is not an independent generator with an unspecified product.

**Self-assessment rubric**

- States the Gysin degree convention and identifies both multiplication-by-p maps.
- Computes every cohomology group including top integration and vanishing degrees.
- Identifies x and its nonzero generating square by pullback naturality.
- Chooses the top generator through fiber integration and gives all product relations.

</details>
