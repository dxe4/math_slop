var e=`---
id: book-complex-analysis
title: "Complex Analysis"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Complex Analysis {#section-1-complex-analysis}

Complex differentiability is a two-dimensional condition with unusually strong consequences. It creates local power series, forces uniqueness from small sets of values, and connects boundary integrals with interior behavior. This book develops that theory and then uses it to construct conformal maps, analytic continuations, entire functions with prescribed zeros, and the gamma and zeta functions.

The complete route has eighteen chapters. Chapters 1–11 are L3; chapters 12–18 are L4.   Every chapter contains worked examples, staged exercise help, complete solutions, and a final summary.

<a id="section-5-preparation"></a>
## Preparation {#section-7-preparation}

The required analytical preparation is the first fifteen chapters of [Real Analysis](proof-safe-real-analysis.md): proof and completeness, sequences and series, metric topology, compactness and connectedness, continuity, differentiation and Riemann integration, uniform convergence, equicontinuity, and power series. The [diagnostic and repair guide](complex-analysis/front-matter/prerequisite-diagnostic-and-repair.md) links the exact resources.

The finite-region residue formulation in Chapter 10 additionally uses the classical Green theorem from [Multivariable Calculus, Chapter 26](/calculus/#chapter/26). Its required smoothness and complete-boundary orientation are stated locally. The triangle, homotopy, disk Cauchy, and annular Laurent arguments before that point are developed directly.

The later chapters use earlier proved results rather than silently importing specialist conclusions. Montel uses the Real Analysis Arzelà–Ascoli theorem; the Riemann mapping argument includes its bounded-injection and extremal steps. Plane Weierstrass and Mittag-Leffler constructions are proved for their stated scope. Gamma and zeta continuation use uniformly controlled improper integrals, not a claim that divergent original formulas have become convergent.

<a id="section-13-reading-route"></a>
## Reading route {#section-15-reading-route}

1. [The Complex Plane and Its Topology](complex-analysis/complex-plane-topology.md)
2. [Holomorphic Functions and the Cauchy–Riemann Equations](complex-analysis/holomorphic-cauchy-riemann.md)
3. [Power Series and Analytic Functions](complex-analysis/power-series-analytic-functions.md)
4. [Exponential, Logarithm, Powers, and Trigonometric Functions](complex-analysis/exponential-logarithm-powers.md)
5. [Paths and Contour Integrals](complex-analysis/paths-contour-integrals.md)
6. [The Cauchy–Goursat Theorem](complex-analysis/cauchy-goursat.md)
7. [Cauchy's Integral Formula, Liouville, and Algebraic Roots](complex-analysis/cauchy-integral-formula.md)
8. [Zeros, Identity, and Maximum Modulus](complex-analysis/zeros-identity-maximum-modulus.md)
9. [Laurent Series and Singularities](complex-analysis/laurent-series-singularities.md)
10. [The Residue Theorem](complex-analysis/residue-theorem.md)
11. [Real Integrals by Residues](complex-analysis/real-integrals-residues.md)
12. [Argument Principle and Rouché](complex-analysis/argument-principle-rouche.md)
13. [Harmonic Functions and the Poisson Kernel](complex-analysis/harmonic-functions-poisson.md)
14. [Conformal Maps and Möbius Transformations](complex-analysis/conformal-mobius.md)
15. [Normal Families and the Riemann Mapping Theorem](complex-analysis/normal-families-riemann-mapping.md)
16. [Analytic Continuation](complex-analysis/analytic-continuation.md)
17. [Entire and Meromorphic Functions](complex-analysis/entire-meromorphic-functions.md)
18. [The Gamma and Zeta Functions](complex-analysis/gamma-zeta-functions.md)

<a id="section-34-the-progression"></a>
## The progression {#section-36-the-progression}

Chapters 1–4 establish domains, derivatives, series, and branch conventions. Chapter 3 proves power series are holomorphic; the converse waits for Cauchy's formula. This avoids assuming the analytic representation used later to establish higher regularity.

Chapters 5–9 develop contour integration, primitives, Goursat's triangle theorem, homotopy invariance, Cauchy's formula, maximum principles, and Laurent theory. Winding and complete boundaries carry the topological information. Connectedness, simple connectedness, and an annular domain are different hypotheses, with explicit examples showing what each controls.

Chapters 10–14 apply residue methods, count zeros, solve the continuous-boundary disk Dirichlet problem, and organize conformal maps. The estimates on closing arcs and indentations are part of a real-integral answer. A contour drawing alone does not supply those limiting arguments.

Chapters 15–18 give the global existence constructions. Local boundedness creates compactness through derivative estimates. Analytic continuation uses germs and a proved monodromy theorem with continuation along every path assumed explicitly. Product and sum corrections enforce convergence while preserving prescribed local data. The final chapter links the analytic and arithmetic viewpoints through gamma and zeta.

<a id="section-44-how-to-study"></a>
## How to study {#section-46-how-to-study}

Begin a theorem by listing its domain, regularity, connectedness, boundary, and branch hypotheses. In a worked example, identify the exact theorem before computing. After writing an answer, check whether it proves existence, uniqueness, a value, a count, or an estimate; these conclusions are not interchangeable.

Each chapter has twelve exercises. Use the first hint for direction, the second for a concrete step, and the solution to compare the whole argument. Then reconstruct the proof without looking. Exercise identities are stable anchors; their display numbers are not learner-record keys.

For notation and conventions, use [Notation, Domains, and Branches](complex-analysis/front-matter/notation-domains-and-branches.md). For a theorem finder and continuation routes, use the [back matter](complex-analysis/back-matter/glossary-and-theorem-index.md).

<a id="section-52-sources-and-retained-readings"></a>
## Sources and retained readings {#section-54-sources-and-retained-readings}

The syllabus benchmarks are Stein–Shakarchi's Complex Analysis and Ahlfors's Complex Analysis. Verified primary references and local source lineage are recorded in [References and Attribution](complex-analysis/back-matter/references-and-attribution.md). The shorter Functions and Equations chapters, Quarto complex-variables chapter, registered laboratories, and earlier PDF editions remain unchanged with their original identities.

<a id="section-56-summary"></a>
## Summary {#section-58-summary}

The course moves from the local derivative to global rigidity and construction. Its methods work because every domain, branch, compact bound, and orientation is kept visible. The first chapter begins with the geometry and topology on which the rest depends.
`;export{e as default};