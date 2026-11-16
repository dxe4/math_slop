var e=`---
parent_id: book-differential-geometry-curves-surfaces
matter_id: solutions-and-reference-guide
title: "Solutions and Reference Guide"
license: CC BY-SA 4.0
---

# Solutions and Reference Guide {#section-1-solutions-and-reference-guide}

Full solutions accompany their own chapter exercises behind native disclosures. Each problem has two staged hints: the first suggests a direction, and the second identifies a more concrete step. Explicit semantic exercise anchors bind the problem to its mathematical identity. An alternative correct proof need not reproduce the solution's wording; it must establish the same conclusion under the stated hypotheses.

<a id="section-3-how-to-compare-an-attempted-proof"></a>
## How to compare an attempted proof {#section-5-how-to-compare-an-attempted-proof}

For a curve calculation, check the parameter interval, speed and any nonzero-curvature condition before differentiating a normalized vector. For a surface calculation, check rank and whether the displayed coordinates are one-to-one on the intended region. State the normal and the shape-operator sign before interpreting mean curvature. At a global theorem, record where simplicity, boundary orientation, compactness, completeness or the triangulation input is used. A numerically small residual is not an exact vanishing theorem.

The closing Summary in each chapter recaps the supplied mathematics and connects it to the next stage. It does not introduce additional hidden assessment tasks. The optional numerical discussions distinguish a finite calculation, a conditional error bound and a convergence theorem; only the stated mathematical claim is justified.

<a id="section-9-primary-references-and-comparison-books"></a>
## Primary references and comparison books {#section-11-primary-references-and-comparison-books}

Sucharit Sarkar, [Math 120A: Differential Geometry lecture notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), UCLA, is a primary-author source for classical curves, patches, fundamental forms, geodesics and intrinsic curvature. Its accompanying [course outline](https://www.math.ucla.edu/~sucharit/120A.html) identifies the progression. This book develops its own prose, examples, exercises and proof details; no course-text reproduction is claimed.

Peter Petersen, [Classical Differential Geometry](https://www.math.ucla.edu/~petersen/DiffGeo.pdf), UCLA author manuscript, provides a further proof-oriented reference, including its Gauss/Codazzi and Gauss–Bonnet sections. The surface-triangulation existence theorem is an explicit imported topology input here; it is not misrepresented as proved by this reference's curvature summation argument.

Andrew Pressley, [Elementary Differential Geometry, second edition](https://link.springer.com/book/10.1007/978-1-84882-891-9), Springer, 2010, and Manfredo P. do Carmo, [Differential Geometry of Curves and Surfaces](https://store.doverpublications.com/products/9780486806990), Dover publisher record, are the standard book-scale comparison targets named by the roadmap. No exact page-level verification from an unconsulted edition is asserted. The coverage route follows classical curves, first and second forms, geodesics and global curvature while stating explicitly which foundational inputs are imported.

<a id="section-17-provenance-and-preserved-mathematics"></a>
## Provenance and preserved mathematics {#section-19-provenance-and-preserved-mathematics}

The new seventeen-chapter text is original Euler authorship under CC BY-SA 4.0. Local seeds consulted by reference are \`modules/textbooks/calculus/chapters/28-differential-geometry.qmd\`, the ten \`modules/unhurried/content/articles/ga-dg-*.html\` readings, the two surface laboratories, and Atlas \`analytic-computational-geometry/curved-metric-computation.md\` and \`curvature-turning-and-certified-orientation.md\`. None of these seed files, mathematical qualifications, solutions, learner IDs or PDF editions has been replaced or retired. Their separate references and rights remain intact.

The linear ODE, plane and space reconstruction, plane turning, periodic-inequality, metric-invariance, curvature, Egregium and Gauss–Bonnet proofs are supplied at their relevant points. The inverse-function theorem, Green/change-of-variables calculus tools, Jordan separation and the global triangulation theorem are named inputs. General constant-curvature classification and unrestricted mesh-estimator convergence are not supplied as if they followed merely from a local calculation.

<a id="section-23-review-and-print-status"></a>
## Review and print status {#section-25-review-and-print-status}

  The reference links were consulted during authorship; they do not turn the manuscript into an independently reviewed edition. Older source and print histories remain unchanged.
`;export{e as default};