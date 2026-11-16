var e=`---
parent_id: book-differential-geometry-curves-surfaces
matter_id: reader-guide
title: "Reader Guide and Conventions"
license: CC BY-SA 4.0
---

# Reader Guide and Conventions {#section-1-reader-guide-and-conventions}

This is a Draft L3 course in classical differential geometry. It uses calculus and finite-dimensional linear algebra to prove statements about curves and surfaces in Euclidean space. Study one definition, its proof mechanism, and a counterexample to a missing hypothesis together. A formula is usable only after its regularity, domain and orientation conditions have been checked.

<a id="section-3-exact-preparation"></a>
## Exact preparation {#section-5-exact-preparation}

Required proof language is supplied by [Introduction to Proof](../../introduction-to-proof.md). The calculus preparation is [vectors in space](/textbooks/calculus/_output/chapters/12-vectors-space.html), [partial derivatives and the chain rule](/textbooks/calculus/_output/chapters/13-partial-derivatives.html), [multiple integration and change of variables](/textbooks/calculus/_output/chapters/14-multiple-integrals.html), and [vector calculus and Green's theorem](/textbooks/calculus/_output/chapters/15-vector-calculus.html). Their registered resource IDs are the \`textbooks:calculus:chapter:chapters/12-vectors-space\` through \`15-vector-calculus\` entries listed in the book's prerequisite metadata.

Use the L3 linear chapters [Inner Products and Orthogonal Decomposition](../../linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md) and [Finite-Dimensional Spectral Theorems](../../linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md) for positive forms and self-adjoint operators. The exact L3 [Inverse and Implicit Function Theorems](../../proof-safe-real-analysis/inverse-implicit-function-theorems.md) supplies the local calculus input used for charts. The whole L3–L4 linear-algebra or analysis book is not required. A reader should know the statements of the named calculus tools, while the linked chapters supply their proof routes when repair is needed.

The reconstruction chapter proves the continuous-coefficient linear matrix equation needed for moving frames. The geodesic chapter proves local nonlinear existence by a Picard contraction argument. There is no hidden requirement for a completed ODE, abstract manifold, functional-analysis or tensor-calculus course. Where connection coefficients and curvature operators appear, their definitions and identities are developed in the surface chapters.

<a id="section-11-route-and-dependencies"></a>
## Route and dependencies {#section-13-route-and-dependencies}

Read chapters 1–6 for curves, chapters 7–12 for surfaces and their extrinsic curvature, and chapters 13–17 for intrinsic and global geometry. The first fundamental form precedes the shape operator, which precedes Egregium. The plane turning theorem precedes the local Gauss–Bonnet proof. The [complete chapter route](../../differential-geometry-curves-surfaces.md) uses semantic filenames rather than position-based learner keys.

Every chapter has three labelled worked examples and exercises with two staged hints and complete solutions behind disclosures. Try the problem before opening either hint. If a solution uses a theorem, state its domain, nonvanishing conditions and orientation convention before applying it. Returning to a chapter or changing its presentation does not reassign its explicit exercise anchor.

<a id="section-17-conventions-that-affect-answers"></a>
## Conventions that affect answers {#section-19-conventions-that-affect-answers}

Plane signed curvature uses the left normal JT, with J the counterclockwise quarter-turn. Unsigned curvature is its absolute value. Space Frenet curvature is positive wherever the principal-normal frame is used, and torsion is defined by B'=-τN. Proper rigid motions preserve torsion; reflections reverse its sign. Parameter reversal does not reverse spatial torsion.

For oriented surfaces the shape operator is S=-dn and the second form is II(v,w)=I(Sv,w). With the outward normal on a radius-R sphere, principal curvatures are -1/R, Gaussian curvature is 1/R² and mean curvature is -1/R. Reversing the normal changes the signs of principal and mean curvature but preserves Gaussian curvature. Positive boundary orientation keeps the surface region on the left relative to the chosen normal. Nonconvex exterior corner angles may be negative.

A $C^1$ regular map has a nonzero curve velocity or rank-two surface derivative. Curvature point values generally require $C^2$, Frenet torsion requires $C^3$ plus positive curvature, and differentiated surface-curvature identities use the stated $C^3$ or stronger hypotheses. A coordinate seam, a stationary clock and a genuine geometric singularity are separate phenomena. A smooth minimal surface is stationary under the prescribed area variations; it is not automatically a global area minimizer.

<a id="section-25-named-proof-boundaries"></a>
## Named proof boundaries {#section-27-named-proof-boundaries}

The multivariable inverse/implicit and change-of-variables theorems and Green's theorem are named calculus inputs with linked Euler preparation. Jordan separation supplies the inside of a simple plane loop; its deep topological proof is not repeated. Global Gauss–Bonnet uses the explicitly stated existence of a finite chart-subordinate piecewise-smooth triangulation respecting boundary corners. The curvature identity and combinatorial summation are proved; triangulation existence is imported.

A model with a computed constant Gaussian curvature does not classify every surface of that curvature. Local isometry, global injectivity, metric completeness and simple connectedness have different roles. The model-space chapter states the scope of its proved results and does not conceal a general classification theorem. Discrete angle-defect identities are exact finite theorems, while convergence of a particular mesh estimator needs its own sampling and regularity hypotheses.

<a id="section-31-preserved-companions"></a>
## Preserved companions {#section-33-preserved-companions}

The ten short Unhurried articles remain useful first encounters: [parameterization](/articles/ga-dg-parameterization/), [arc length](/articles/ga-dg-arc-length/), [plane curvature](/articles/ga-dg-curvature-plane/), [the plane frame](/articles/ga-dg-frenet/), [surface patches](/articles/ga-dg-surface-patches/), [first fundamental form](/articles/ga-dg-first-fundamental-form/), [Gaussian curvature](/articles/ga-dg-gaussian-curvature/), [geodesics](/articles/ga-dg-geodesics/), [parallel transport](/articles/ga-dg-parallel-transport/), and [Gauss–Bonnet](/articles/ga-dg-gauss-bonnet/). Their original proofs and limits are retained; this book provides the longer development.

The [Surface Curvature Studio](../../../visual-labs/parametric-surfaces-live.md) accompanies patches, while the [Shape Operator and Minimal-Surface Laboratory](../../../visual-labs/shape-operator-minimal-surfaces-live.md) accompanies curvature and special surfaces. Numerical samples guide questions and do not replace the formulas' proofs. The preserved [curved-metric clinic](../../analytic-computational-geometry/curved-metric-computation.md), [polygon-turning clinic](../../analytic-computational-geometry/curvature-turning-and-certified-orientation.md), and [hyperbolic-geometry chapter](../../geometry-proof-reference/hyperbolic-geometry.md) offer adjacent viewpoints without being overwritten.

<a id="section-37-status-and-rights"></a>
## Status and rights {#section-39-status-and-rights}

All new authorship is Draft, not independently Reviewed. No reviewer identity, successful mathematical audit or newly generated print artifact is claimed. Older seed editions and PDFs remain at their own identities, with no promise that they contain this new book. New text is CC BY-SA 4.0; source references retain their separate licenses and are cited for mathematics rather than copied at length.
`;export{e as default};