
# Reader Guide and Notation {#section-1-reader-guide-and-notation}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

This volume is a first-course treatment of the geometry that lies between the plane and three-dimensional space. It is for readers who have met Euclidean geometry, basic algebra, and some trigonometry, and who now want a coherent map of conic sections, quadric surfaces, non-Euclidean geometries, and the projections that connect them. It is not a comprehensive treatise on differential geometry, a handbook of computer graphics, or a historical monograph. It is a working text that treats conics, solids, spherical and hyperbolic geometry, projective geometry, descriptive geometry, and cartographic projection as connected parts of one landscape.

The manuscript is written for undergraduates and provides worked examples and solved exercises in every chapter. It assumes the Euclidean, algebraic, trigonometric, vector, matrix, and elementary calculus background listed in the diagnostic; the glossary supports retrieval but does not make every specialized term prior knowledge-free. If a chapter feels dense, use the notation guide and diagnostic before concluding that the material is inaccessible. Geometry compresses spatial reasoning into a single diagram; expanding that diagram is a learnable skill.

<a id="section-7-level-and-reading-routes"></a>
## Level and reading routes {#section-9-level-and-reading-routes}

**Level: L2.** Preparation is [Euclidean Geometry and Trigonometry](#/books/euclidean-geometry-trigonometry), and vectors, matrices and orthogonal diagonalisation from [Lucent Linear Algebra](#/books/lucent-linear-algebra). A reader should already manipulate quadratic equations and distinguish a geometric object from one coordinate representation. Area/volume and distortion proofs also use elementary differentiation, integration and [multiple integrals](#/books/calculus/14-multiple-integrals); these inputs are stated at their point of use.

The twelve main chapters proceed from cone slices to coordinate conics, surfaces of revolution, coordinate quadrics, transformations of conics and projective views. Stereographic, descriptive, axonometric and map projections lead to applications and a model-building project. General plane transformation groups have their home in [Geometry](../geometry-proof-reference/isometries-and-plane-transformation-groups.md); this book studies their action on conics.

The earlier spherical, hyperbolic and geometric-art readings retain their original identities as companions. For a primary study of non-Euclidean models, use [Hyperbolic Geometry](../geometry-proof-reference/hyperbolic-geometry.md) and [Elliptic and Spherical Geometry](../geometry-proof-reference/elliptic-geometry.md). The [geometric-art reading](geometric-art.md) supplies optional construction projects alongside applications.

The L2 route has twelve chapters, each with worked examples and at least ten exercises with staged hints and full solutions.

The opening six chapters develop conics and their transformations. [A Double Cone and Its Planes](a-double-cone-and-its-planes.md) constructs the Dandelin spheres and proves their focal relations; [Conics in Coordinates](conics-in-coordinates.md) proves the full real rank/sign classification and focus-directrix equivalence. [Cylinders and Surfaces of Revolution](cylinders-and-surfaces-of-revolution.md) proves shear/right-section formulas and both Pappus theorems, with separate centroid measures and nonoverlap assumptions. [Quadrics in Coordinates](quadrics-in-coordinates.md) proves spectral reduction, inertia and the exhaustive rank/null-linear cases, distinguishing equation degeneracy from real-surface regularity. [Transformation Geometry](transformations-of-conics.md) proves the conic-matrix image law, frame uniqueness and real projective equivalence while comparing metric and affine invariants. [Projective Geometry](projective-geometry.md) proves homogeneous incidence, determinant cross-ratio invariance, conic parametrization and tangent polarity. Its absolute-conic overview links the actual metric-model chapters rather than claiming their proofs here. These chapters include worked examples and ten exercises with two hint stages and full solutions; Conics in Coordinates currently has two worked examples. The earlier exercise statements and full solutions are preserved. [Stereographic Projection](stereographic-projection.md) includes worked examples and supported exercises. It proves the full circle/line correspondence and differentiated conformal metric, computes area scaling and distinguishes spherical one-point completion from a projective infinity line. [Descriptive Geometry](descriptive-geometry.md) is also a complete draft, proving matched-view reconstruction, closest points and area/length factors through three worked examples and ten supported exercises. [Axonometric Projection](axonometric-projection.md) includes worked examples and supported exercises, deriving scale/angle compatibility, the exact isometric map and the circle-to-ellipse axes. [Map Projections](map-projections.md) includes worked examples and supported exercises, deriving metric, cylindrical/azimuthal scale and angular-distortion formulas with explicit domains and radius conventions. [Applications and Synthesis](applications-and-synthesis.md) derives the ideal orbital, TDOA and ray-reflection models; [Project: Build a Model](project-build-a-model.md) proves development, approximation and uncertainty calculations. Both include worked examples and supported exercises.

<a id="section-19-how-to-work-a-chapter"></a>
## How to work a chapter {#section-21-how-to-work-a-chapter}

First read the opening question and write down the exact geometric object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a derivation, a computational observation, or an open problem;
2. a **hypothesis ledger** recording the assumptions built into each construction (for example, that a plane misses the cone vertex, or that a projection direction is not parallel to the picture plane);
3. a **representation ledger** recording when an argument moves between synthetic, coordinate, vector, and projective descriptions.

<a id="section-29-claim-status-conventions-used-across-chapters"></a>
## Claim-status conventions used across chapters {#section-31-claim-status-conventions-used-across-chapters}

Use the following four-part classification when reading claims across the chapters. The labels describe the warrant a claim needs even when a chapter presents the status in prose rather than as a tag.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | Girard's theorem: the area of a spherical triangle is $R^{2}(A+B+C-\pi)$ ("Spherical Geometry"). | Check that the hypotheses match your setting; identify any hidden assumption such as $R>0$ or sides less than $\pi$. |
| **Derivation** | A systematic calculation from definitions to a formula; every step is recoverable. | The eccentricity of a conic section of a cone is $e=\cos\beta/\cos\alpha$ ("A double cone and its planes"). | Verify that the geometric parameters ($\alpha$, $\beta$) are measured as defined. |
| **Computational observation** | A numerical or symbolic result obtained by algorithm; exact when possible, approximate when necessary. | With the coordinates stated in “Spherical Geometry,” the great-circle distance between New York and London is approximately $5573$ km. | Check rounding, unit consistency, and the precision of input data. |
| **Open problem** | A question unresolved in a precisely stated mathematical model and scope. | No chapter labels a design preference as an open theorem. | Check a current primary source before assigning this status. |

A theorem is not uncertain because a reader finds it difficult. A computational observation is not a license to treat approximations as exact. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

<a id="section-42-exercise-types"></a>
## Exercise types {#section-44-exercise-types}

Exercises are numbered without letter markers. They mix retrieval, construction, calculation, proof, counterexample, transfer, and extended investigation. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, geometric construction, proof structure, or interpretation, the solution explains why that choice is warranted.

<a id="section-46-how-to-report-a-suspected-error"></a>
## How to report a suspected error {#section-48-how-to-report-a-suspected-error}

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

<a id="section-50-scope-and-deliberate-boundaries"></a>
## Scope and deliberate boundaries {#section-52-scope-and-deliberate-boundaries}

The main route treats conic sections, quadric surfaces, projective views of conics, descriptive geometry, axonometric and stereographic projection, and map projections. Earlier spherical, hyperbolic and geometric-art readings remain optional companions. It does not attempt Riemannian geometry, algebraic geometry, advanced computer graphics, or the full theory of cartographic datums. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.

<a id="section-56-limited-reference-comparison"></a>
## Limited reference comparison {#section-58-limited-reference-comparison}

The source comparisons below identify reference editions and differences in theorem scope.

[Coxeter's second-edition Wiley Classics contents, 1989 reprint](https://www.wiley-vch.de/en/areas-interest/mathematics-statistics/mathematics-16ma/geometry-topology-16ma6/introduction-to-geometry-978-0-471-50458-0) place coordinates before affine, projective, absolute and hyperbolic geometry, with differential geometry and surface topology later. Our Chapters 2 and 4 supply coordinate rank/sign reductions, while 5–6 concentrate on the action on conics, cross-ratio and polarity. General plane-group classification is linked to Geometry. We do not develop Coxeter's broader ordered/absolute geometry, crystallography or surface-topology route in these six chapters.

For Hilbert and Cohn-Vossen, the accessible primary witness was the [1932 German original's publisher front matter](https://link.springer.com/content/pdf/bfm:978-3-662-36685-1/1), not an inspected English translation. Its first chapter explicitly groups cylinders, cones, conic sections, revolution surfaces, quadrics and confocal/thread constructions; later contents include perspective and duality. This supports our connection from Dandelin geometry to coordinates and solids. Our Pappus proofs and exhaustive real algebraic degeneracies are explicit additions to this commissioned route; we do not claim to reproduce every construction in that reference. Confocal ellipsoid thread constructions and its broader configuration program remain outside these six chapters. The original preface presents a selective visual survey rather than a systematic completeness claim; our scope should likewise be judged by actual statements and proofs, not by the reference's breadth.

The existing English *Geometry and the Imagination* citation remains a recommended continuation. The edition distinction above records exactly what was accessible for this limited comparison.
