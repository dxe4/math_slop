var e=`---
parent_id: book-complex-analysis
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair

The required Real Analysis preparation consists of the following current chapters. These are exact resource links, not an assumption that the entire L3–L4 book, including its retained measure and Fourier readings, has been completed.

1. [Quantifiers, Suprema, and Completeness](../../proof-safe-real-analysis/quantifiers-completeness.md)
2. [Ordered Fields and Number Systems](../../proof-safe-real-analysis/ordered-fields-and-number-systems.md)
3. [Sequences and Cauchy Control](../../proof-safe-real-analysis/sequences-cauchy-and-limsup.md)
4. [Series and Rearrangements](../../proof-safe-real-analysis/series-tests-and-rearrangements.md)
5. [Metric Spaces](../../proof-safe-real-analysis/metric-spaces-open-and-closed.md)
6. [Compactness](../../proof-safe-real-analysis/sequences-compactness.md)
7. [Connectedness](../../proof-safe-real-analysis/connectedness-and-the-real-line.md)
8. [Continuity and Uniform Continuity](../../proof-safe-real-analysis/continuity-and-uniform-continuity.md)
9. [Differentiation](../../proof-safe-real-analysis/continuity-differentiation.md)
10. [Taylor Theory](../../proof-safe-real-analysis/taylor-theory-and-convexity.md)
11. [Riemann Integration](../../proof-safe-real-analysis/riemann-integration.md)
12. [The Fundamental Theorem](../../proof-safe-real-analysis/fundamental-theorem-and-absolute-continuity.md)
13. [Uniform Convergence](../../proof-safe-real-analysis/uniform-convergence.md)
14. [Equicontinuity and Arzelà–Ascoli](../../proof-safe-real-analysis/function-spaces-and-equicontinuity.md)
15. [Power Series and Analytic Functions](../../proof-safe-real-analysis/power-series-and-analytic-functions.md)

## Diagnostic questions

These questions locate preparation gaps. They are not a graded entrance examination. Try them without opening the answers, then use the linked chapter for a focused repair.

**A. What is the difference between an open disk and a compact closed disk?**

<details><summary>Answer and repair</summary>

An open disk excludes its boundary and supplies neighborhoods around its points. A closed bounded disk includes its boundary and is compact in the plane. An open disk is bounded but not compact, because sequences can approach missing boundary points. Review metric spaces and compactness if these distinctions are unclear.

</details>

**B. Why does absolute convergence permit a Cauchy product?**

<details><summary>Answer and repair</summary>

The sum of the absolute values of all double-product terms is bounded by the product of two convergent nonnegative sums. Finite rectangular tails can therefore be made uniformly small before regrouping along diagonals. Without that control, rearrangement may alter or destroy convergence. Review the series chapter.

</details>

**C. What does uniform convergence on a compact set add to pointwise convergence?**

<details><summary>Answer and repair</summary>

One index makes the error small simultaneously at every point in the set. This provides a supremum error bound, which can pass through a finite integral by multiplying by interval length. Pointwise convergence chooses its index separately at each point and does not supply that estimate. Review uniform convergence.

</details>

**D. If a continuous function on a compact set never vanishes, why is its modulus bounded below by a positive number?**

<details><summary>Answer and repair</summary>

The continuous modulus attains its minimum. If that minimum were zero, it would occur at a zero of the function, contradicting the assumption. This fact underlies contour separation and reciprocal estimates. Review the extreme-value theorem and compactness.

</details>

**E. How does connectedness propagate a locally constant function?**

<details><summary>Answer and repair</summary>

The set where the function takes a fixed attained value is open by local constancy, and so is its complement. A connected domain cannot split into those two nonempty open pieces. Hence only one value occurs. Review connectedness.

</details>

**F. What justifies differentiating a power series inside its radius?**

<details><summary>Answer and repair</summary>

On a smaller closed disk, a larger interior radius gives a geometric majorant for both the original and differentiated coefficients. The derivative series converges uniformly there. A finite-integral identity for polynomial partial sums then passes to the limit and identifies the derivative. Review power series and uniform-limit interchange.

</details>

## Additional preparation at the point of use

Chapter 10's finite-region boundary formulation uses [Green's theorem](/calculus/#chapter/26), including orientation of every boundary component and \\(C^1\\) coefficients on a neighborhood of the whole closure. Chapters 12–18 use the full L3 complex core before their L4 arguments.

The gamma–zeta chapter uses unique prime factorization from the [Number Theory reference](../../number-theory-proof-reference.md), but proves its analytic convergence, product and continuation statements. It does not assume analytic number theory or a statement about the Riemann hypothesis.

## Summary

Repair the specific missing tool before treating a later proof as a black box. The course's advanced results depend on these elementary convergence, compactness and domain facts in visible ways.
`;export{e as default};