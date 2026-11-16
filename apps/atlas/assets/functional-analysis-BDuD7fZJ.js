var e=`---
id: book-functional-analysis
title: "Functional Analysis"
level: graduate
license: CC BY-SA 4.0
---

# Functional Analysis {#section-1-functional-analysis}

Functional analysis studies linear problems in spaces of functions, sequences and operators. This sixteen-chapter L4 route develops Banach and Hilbert geometry, duality, the Banach-space pillars, compact and continuous spectral theory, Fredholm structure, convexity and time evolution.

Preparation is [Real Analysis](proof-safe-real-analysis.md), especially completeness, uniform convergence, approximation and Baire category, and [Measure and Integration](measure-and-integration.md) through Lp spaces. The measure primary is a complete sixteen-chapter draft; its moved source readings and stable identities remain identified there. Chapter 12 additionally uses [Complex Analysis: Cauchy's formula](complex-analysis/cauchy-integral-formula.md) and the Real Analysis Stone–Weierstrass proof. Each chapter states its precise local preparation.

The syllabus benchmarks are Conway and Brezis. This is original exposition with worked examples and twelve exercises per chapter, each with staged hints and a full solution. The [source guide](functional-analysis/back-matter/references-and-source-lineage.md) identifies retained local lineage and the scope of the spectral and evolution theorems.

<a id="section-7-reading-route"></a>
## Reading route {#section-9-reading-route}

1. [Normed and Banach Spaces](functional-analysis/normed-banach-spaces.md)
2. [Bounded Operators and Dual Spaces](functional-analysis/bounded-operators-duals.md)
3. [The Hahn–Banach Theorem](functional-analysis/hahn-banach.md)
4. [Uniform Boundedness and Pointwise Limits of Operators](functional-analysis/uniform-boundedness.md)
5. [Open Mapping and Closed Graph Theorems](functional-analysis/open-mapping-closed-graph.md)
6. [Weak Topologies, Banach–Alaoglu, and Reflexivity](functional-analysis/weak-topologies-alaoglu-reflexivity.md)
7. [Hilbert Spaces](functional-analysis/hilbert-spaces.md)
8. [Orthonormal Bases and Riesz Representation](functional-analysis/orthonormal-bases-riesz.md)
9. [Compact Operators](functional-analysis/compact-operators.md)
10. [The Compact Self-Adjoint Spectral Theorem](functional-analysis/compact-self-adjoint-spectral.md)
11. [Fredholm Theory](functional-analysis/fredholm-theory.md)
12. [Bounded Normal Operators](functional-analysis/bounded-normal-operators.md)
13. [Unbounded Operators](functional-analysis/unbounded-operators.md)
14. [Convexity and Duality](functional-analysis/convexity-duality.md)
15. [Extreme Points and Krein–Milman](functional-analysis/extreme-points-krein-milman.md)
16. [Semigroups](functional-analysis/semigroups.md)

<a id="section-26-how-to-use-the-route"></a>
## How to use the route {#section-28-how-to-use-the-route}

The first six chapters establish Banach spaces, dual measurements, extension, continuity and weak compactness. Chapters 7–13 develop Hilbert projection and bases before compact spectral, Fredholm, normal and unbounded operator theory. The final three chapters connect convex support and extreme points to generators of evolution.

Use the [diagnostic](functional-analysis/front-matter/prerequisite-diagnostic-and-repair.md) to repair preparation and the [convergence conventions](functional-analysis/front-matter/notation-and-convergence.md) to distinguish pointwise, norm and weak claims. Work an exercise before opening its staged hints, then compare the proof with the full solution. A personal reading mark is a reminder and does not establish a mathematical assessment.

The normal and unbounded spectral chapters prove continuous functional calculus. They explicitly distinguish it from the additional Borel projection-valued representation. The evolution chapter proves contraction Hille–Yosida and Hilbert maximal dissipativity, with their actual domain and resolvent assumptions; it does not claim every formal differential expression generates a semigroup.
`;export{e as default};