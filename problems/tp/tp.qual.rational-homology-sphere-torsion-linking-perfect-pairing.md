# Construct a perfect torsion linking pairing by Bockstein and duality

*Hard · [Topology problems](index.md)*

Let M be a closed connected oriented smooth three-manifold with $H_*(M;\mathbb Q)\cong H_*(S^3;\mathbb Q)$, and put T=H₁(M;Z). Use $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ to define and prove nonsingularity of the torsion linking pairing $\lambda:T\times T\to\mathbb Q/\mathbb Z$. You need not prove symmetry. Explain the effect of reversing orientation and the possible generator value when T is cyclic of order p.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The Bockstein H¹(M;Q/Z)→H²(M;Z) is an isomorphism because the adjacent rational groups vanish.

</details>

<details>
<summary>Hint 2</summary>

Use integral Poincaré duality T≅H²(M;Z) and the universal coefficient identification H¹(M;Q/Z)=Hom(T,Q/Z).

</details>

<details>
<summary>Model proof</summary>

The linking form refines a finite homology group by identifying each torsion class with a character through orientation and a connecting map.

1. The finite CW structure makes T finitely generated, and H₁(M;Q)=0 makes it finite. Integral Poincaré duality identifies H²(M;Z) with T by α↦α cap \[M\]. The coefficient long exact sequence has zero H¹(M;Q) and H²(M;Q), so its Bockstein β:H¹(M;Q/Z)→H²(M;Z) is an isomorphism.
2. For a∈T let PD(a) be the unique cohomology class with PD(a) cap \[M\]=a. Define λ(a,b)=⟨β⁻¹(PD(a)),b⟩. All constituent maps are homomorphisms, so λ is bilinear.
3. The degree-one universal coefficient sequence has Ext(H₀(M),Q/Z)=0 because H₀=Z, hence H¹(M;Q/Z)=Hom(T,Q/Z). Therefore a↦λ(a,−) is an isomorphism T→Hom(T,Q/Z). It is injective in the first variable, and characters of a finite abelian group separate points in the second, so the pairing is nonsingular in both variables.
4. Reversing \[M\] replaces PD by its negative and therefore λ by −λ. If T is cyclic with generator a and order p, then λ(a,a)=u/p modulo Z for an integer u coprime to p: nonsingularity requires the associated character to have full order p. The group order alone does not specify the unit u or its orientation sign.

**Self-assessment rubric**

- Proves finiteness and the coefficient connecting isomorphism with the rational vanishing hypotheses.
- Defines the pairing using inverse Bockstein and the stated integral duality convention.
- Uses universal coefficients to establish the character isomorphism and both-variable nonsingularity.
- Derives the orientation sign and the full-order cyclic generator condition.

</details>
