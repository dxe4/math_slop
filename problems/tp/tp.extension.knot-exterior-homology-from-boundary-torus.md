# Prove every tame knot exterior has circle homology

*Hard · [Topology problems](index.md)*

Let K be a tame knot in oriented S³, let N be a closed tubular solid-torus neighborhood and $E=\overline{S^3\setminus N}$. Prove H₀(E;Z)=Z, H₁(E;Z)=Z and H\_k(E;Z)=0 for k≥2. Show a meridian generates H₁(E). You may use oriented manifold fundamental classes, the fact a compact connected three-manifold with nonempty boundary has zero absolute H₃, and Mayer–Vietoris with collars.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The fundamental class of S³ maps to the oriented boundary-torus class in the Mayer–Vietoris sequence.

</details>

<details>
<summary>Hint 2</summary>

The resulting map H₁(T²)→H₁(N)⊕H₁(E) is an isomorphism; inspect the meridian in its first component.

</details>

<details>
<summary>Model proof</summary>

The knot can change the nonabelian fundamental group without changing the exterior’s integral homology.

1. The exterior is connected: a path in S³ can be perturbed off the tame one-dimensional knot, and the complement retracts away from a tubular collar onto E. Use collar-thickened versions of E,N for Mayer–Vietoris, with overlap retracting to T². Both N and E have zero absolute H₃, the latter by the supplied manifold fact.
2. The connecting map H₃(S³)=Z→H₂(T²)=Z sends an oriented fundamental cycle to the oriented gluing boundary, so it is an isomorphism, with sign set by orientation. Since H₂(N)=0 and H₂(S³)=0, exactness then forces H₂(E)=0.
3. The next portion reads 0→H₁(T²)=Z²→H₁(N)⊕H₁(E)→H₁(S³)=0. Thus this map is an isomorphism. Since H₁(N)=Z, the finitely generated group H₁(E) is torsion free of rank one and is Z.
4. Choose the meridian μ and a longitude λ basis on the boundary torus. Inclusion into N sends μ to 0 and λ to a generator. For any h∈H₁(E), surjectivity of the preceding isomorphism realizes (0,h) by aμ+bλ. Its N-component forces b=0, so h is a multiple of the image of μ. Injectivity shows this meridian has infinite order. Connectedness gives H₀=Z, and the exterior has a three-dimensional finite CW model, so no higher groups remain.

**Self-assessment rubric**

- Sets up the connected pieces and torus overlap with integral Mayer–Vietoris.
- Uses the fundamental class to identify the H₃-to-H₂ boundary isomorphism and deduces H₂(E)=0.
- Derives the direct-sum isomorphism and concludes H₁(E)=Z without overlooking torsion.
- Uses meridian/longitude images to prove the meridian is an infinite cyclic generator.

</details>
