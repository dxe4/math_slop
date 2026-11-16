var e=`---
id: deep-dive-research-frontier-mirror-symmetry
title: Mirror Symmetry: A Dictionary Between Two Geometries
license: CC-BY-4.0
---

# Mirror symmetry: a dictionary between two geometries

**Before reading.** Read [Symplectic Geometry](../books/action-symmetry-mechanics/symplectic-geometry.md), [Algebraic Geometry Without False Shortcuts](../deep-dives/algebraic-geometry-orientation.md) and [Symmetry, gauge, and field-theory boundary](../books/quantum-statistical-structures/symmetry-gauge-and-field-theory-boundary.md). These are preparation for the ideas used below.

> **Claim boundary, checked 2026-08-31.** Mirror symmetry is not one yes/no problem with a single “solved” status. It is a network of constructions, correspondences, conjectures, and theorems for specified classes of spaces. A proof in one formulation or family must not be advertised as every form of mirror symmetry.

## Readiness and a route through the atlas

This guide assumes that you can distinguish symplectic from complex or algebraic data, read Hodge-number notation, and treat a category equivalence as more than a bijection of objects. Repair the geometric background with [Topology and Manifolds](#/item/course-topology-manifolds-standard), especially its symplectic- and algebraic-geometry stages. If the A-model/B-model language is unfamiliar, use [Quantum Field Theory: An Honest Mathematical Orientation](#/item/deep-dive-qft-honest-orientation) to learn which physics statements are heuristics, constructions, or mathematically defined claims. Quantum field theory motivates the program but is not a substitute for the geometric definitions used in a theorem.

After the worked dictionary below, use [Research Frontiers Through Seven Lenses](#/item/reader-research-frontiers-seven-lenses) to compare this many-formulation program with exact open problems and conditional applied guarantees.

## The recurring shape of the phenomenon

A mirror pair \\((X,Y)\\) presents two geometric descriptions that exchange difficult questions for more tractable ones. On one side, the **A-model** emphasizes symplectic geometry: areas, Lagrangian submanifolds, pseudoholomorphic curves, and enumerative invariants. On the other, the **B-model** emphasizes complex and algebraic geometry: complex structures, periods, coherent sheaves, and deformations.

The surprise is not that \\(X\\) and \\(Y\\) are identical. They usually are not. The proposal is that appropriately defined structures or theories attached to them correspond.

Calabi–Yau manifolds supplied the foundational setting. For a Calabi–Yau threefold, two deformation counts are encoded by Hodge numbers:

- \\(h^{1,1}\\), related to Kähler or symplectic-side deformations;
- \\(h^{2,1}\\), related to complex-structure deformations.

For a mirror pair, the basic numerical pattern exchanges them:

\\[
h^{1,1}(X)=h^{2,1}(Y),\\qquad
h^{2,1}(X)=h^{1,1}(Y).
\\]

This Hodge-number swap is a shadow of a richer correspondence, not a definition sufficient to certify a mirror pair.

## A worked numerical shadow

**Worked example.**

The quintic Calabi–Yau threefold has

\\[
h^{1,1}=1,\\qquad h^{2,1}=101,
\\]

while its classical mirror construction reverses these values. For a Calabi–Yau threefold,

\\[
\\chi=2(h^{1,1}-h^{2,1}),
\\]

so the Euler characteristic changes from \\(-200\\) to \\(+200\\). The arithmetic is easy:

\\[
2(1-101)=-200,
\\qquad
2(101-1)=200.
\\]

This check is necessary for the proposed numerical mirror pattern in this example, but it is far from sufficient. Many geometric objects can share numerical invariants without their curve counts, periods, or categories matching.

## Three dictionaries, three claim types

### Enumerative mirror symmetry

Curve-counting information on the A-side can be encoded by generating functions. Period integrals and variation of complex structure on the B-side can be computed through differential equations. A **mirror map** aligns coordinates so that B-side calculations predict A-side enumerative invariants.

A computed power series is evidence only after its coefficients are connected to rigorously defined invariants and the mirror map and convergence/formal status are stated. “The coefficients are integers” is an important consistency check, not a universal proof.

### Homological mirror symmetry

Kontsevich proposed a categorical formulation. In a schematic form, it relates a derived Fukaya category on the symplectic side to a derived category of coherent sheaves on the algebraic side:

\\[
D\\operatorname{Fuk}(X)\\simeq D^b\\operatorname{Coh}(Y),
\\]

with a corresponding relation after exchanging the sides.

Every symbol hides hypotheses and construction work. One must specify coefficients, gradings, brane data, compactness or wrapping, obstruction theory, enhancements, and what kind of equivalence is proved. An equivalence for a particular torus, hypersurface, or subcategory is not automatically an equivalence for all Calabi–Yau manifolds.

### Geometric or SYZ-type mirror symmetry

The Strominger–Yau–Zaslow viewpoint seeks dual special-Lagrangian torus-fibration structures, with singular fibers and corrections playing central roles. It gives a geometric mechanism for why complex and symplectic data might exchange.

The phrase “dualize the torus fibers” is a roadmap, not a completed construction in every setting. Existence of the required fibration, behavior near singular fibers, instanton corrections, and reconstruction of the mirror are serious mathematical steps.

## A miniature category dictionary

An object on the A-side might be a Lagrangian submanifold equipped with extra data. Morphisms are built from intersection information, and higher compositions count pseudoholomorphic polygons. On the B-side, an object might be a complex of coherent sheaves, with morphisms represented by derived $\\operatorname{Ext}$ groups and composition.

A proposed equivalence must map objects and morphisms while respecting the higher composition structure. Matching the number of objects or dimensions of a few morphism spaces is a test, not the equivalence. Essential surjectivity and full faithfulness, in the correct enhanced sense, are part of the target.

## What is theorem, conjecture, prediction, or analogy?

Use four labels deliberately.

- **Theorem:** all objects, hypotheses, and equivalences or invariant identities are defined and proved for a stated family.
- **Conjecture:** a precise correspondence is proposed but not proved in that generality.
- **Prediction:** one side computes a value expected on the other, later requiring an independent definition or proof.
- **Analogy:** structures look alike and suggest a program, without a formal implication yet.

The field contains all four at once. A survey sentence such as “mirror symmetry relates symplectic and complex geometry” is orientation; it cannot replace the theorem statement of a particular paper.

## Known results and the remaining program

The foundational sources below provide a rigorous quintic calculation, a precise categorical conjecture with examples, and partial constructions connecting categorical and torus-fibration viewpoints. They do not supply a theorem for every Calabi–Yau manifold or prove that the enumerative, homological, and SYZ formulations are equivalent in unrestricted generality. In a current paper, therefore, “mirror symmetry is proved” is incomplete: the family of spaces, formulation, category or invariant, coefficient data, and direction of the proved correspondence must all appear in the sentence.

## Common overclaims

**A Hodge diamond matches, so the spaces are mirror.** Numerical agreement is only one necessary shadow in common settings.

**Physics predicted it, so it is not mathematics.** Physical dualities generated precise mathematical conjectures and calculations; each becomes a theorem when its mathematical objects and proof are supplied.

**One homological equivalence proves all mirror symmetry.** Enumerative, categorical, and geometric formulations have relations, but their equivalence requires additional theorems and hypotheses.

**“Proved for toric examples” means proved universally.** Families, compactness, dimension, singularity, and coefficient assumptions must travel with the result.

## Checkpoints with solutions

<a id="deep-dive-research-frontier-mirror-symmetry-ex-1"></a>

**Exercise 1.**

**1. A pair has swapped \\(h^{1,1}\\) and \\(h^{2,1}\\). What is established?**
<details>
<summary>Hint 1</summary>

Swapped Hodge numbers are a numerical compatibility pattern in the specified Calabi–Yau setting.
</details>
<details>
<summary>Hint 2</summary>

Separate that necessary-looking shadow from an equivalence of categories or a proof of curve-count identities.
</details>
<details>
<summary>Solution</summary>

  
The pair passes a basic numerical mirror consistency check in the Calabi–Yau-threefold setting. No categorical equivalence, curve-count identity, or fibration construction follows from those two numbers alone.

</details>

<a id="deep-dive-research-frontier-mirror-symmetry-ex-2"></a>

**Exercise 2.**

**2. A functor matches a generating collection of objects and morphism cohomology. What remains?**
<details>
<summary>Hint 1</summary>

Matching a proposed generator set is a step toward an equivalence, not the entire theorem.
</details>
<details>
<summary>Hint 2</summary>

Check generation, enhanced morphism composition and full faithfulness before claiming essential surjectivity.
</details>
<details>
<summary>Solution</summary>

  
One must show that the collection generates in the stated category, that the functor respects the relevant higher or enhanced structures, and that it is fully faithful and essentially surjective under the precise definitions. The partial computation may be the core of a proof, but those logical bridges must be explicit.

</details>

### Further practice

**3. Why can a B-side differential equation inform an A-side curve count?**  
Mirror symmetry proposes a coordinate dictionary between periods/deformations on one side and generating functions on the other. The inference is conditional until the mirror map and equality of the relevant invariants are established for the stated family.

## Sources and status scope

- [Candelas, de la Ossa, Green, and Parkes, DOI 10.1016/0550-3213(91)90292-6](https://doi.org/10.1016/0550-3213(91)90292-6) — primary quintic mirror-pair calculation and moduli-space/prepotential setting; accessed 2026-08-31.
- [Kontsevich, *Homological Algebra of Mirror Symmetry*](https://arxiv.org/abs/alg-geom/9411018) — primary 1994 categorical conjecture and examples; accessed 2026-08-31.
- [Kontsevich and Soibelman, *Homological mirror symmetry and torus fibrations*](https://arxiv.org/abs/math/0011041) — primary discussion connecting homological mirror symmetry and the torus-fibration program; accessed 2026-08-31.

These sources support particular formulations and foundational examples. The guide deliberately makes no single global “mirror symmetry is proved/unproved” claim.
`;export{e as default};