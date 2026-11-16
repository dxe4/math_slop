
# Reader Guide and Notation

## Why this book exists

This volume is a first-course treatment of analytic and computational geometry. It is for readers who have met coordinate geometry, vectors, matrices, and basic calculus, and who now want a coherent, computationally aware map of the subject: how to represent geometric objects, how to evaluate the predicates that algorithms depend on, and how to keep numerical computation from producing plausible but wrong pictures. It is not a comprehensive treatise on differential geometry, a handbook of computer graphics, or a research monograph on geometric algorithms. It is a working text that treats planar predicates, transformations, conics, three-dimensional tools, convex hulls, curved metrics, and property-based testing as connected parts of one landscape.

The manuscript is written for advanced undergraduates and supplies worked examples and solved exercises in every chapter. The diagnostic and glossary support the route, but readers should expect standard coordinate geometry, linear algebra, elementary calculus, and basic algorithm language listed below rather than a defined-before-use encyclopedia. If a chapter feels dense, use the notation guide and diagnostic before concluding that the material is inaccessible. Computational geometry compresses algebra, geometry, and numerical analysis into a single formula; expanding that formula is a learnable skill.

## Level and current scope

**L3.** Prepare with [Linear Algebra](#/books/linear-algebra-structure-proofs) and [Discrete Mathematics](#/books/discrete-mathematics-proof-counting-structure). Coordinates, elementary calculus and algorithmic running-time language support later computations.

The fifteen-chapter route develops representations, exact orientation and intersection, projection, homogeneous transformations and conic predicates before spatial intersections and hulls. It then proves polygon triangulation and the no-hole art-gallery upper bound, a general-position intersection sweep with a complete slower degenerate arrangement construction, Voronoi/Delaunay duality, and balanced k-d range reporting. The closing readings derive spherical and disk distances, distinguish smooth curvature from specified polygon estimators, and collect robust-arithmetic proof contracts. Full geometric conic classification and focal proofs live in [Conics in Coordinates](../conics-solids-projections/conics-in-coordinates.md).

The algorithm chapters state their own input and cost models. The fast sweep uses explicit general position; the exact arrangement alternative handles endpoint, vertical, concurrent and overlap cases at greater cost. Voronoi cells are general, while the unique Delaunay triangulation theorem excludes collinear triples and cocircular quadruples. The k-d reporting bound uses coordinate-distinct balanced splits and exact cell ownership; nearest search has a linear worst case. None of these scope distinctions is removed by a numerical tolerance.

The earlier two conic readings and Worked Exercises and Synthesis retain their original resource identities and mathematics as companions. All ten capstone questions now also occur with staged hints and full solutions in their relevant current chapters: representations, orientation, segments, projection, transformations, conic predicates, three-dimensional predicates, convex hulls and curved metrics. The original capstone remains available with links to those exact homes.

## Comparison with established computational-geometry texts

The source comparison here is limited to accessible author and publisher contents and descriptions, read on 14 November 2026. It identifies mathematical coverage; it does not represent a reading of every reference proof or an assessment of an implementation.

The [third-edition author contents for de Berg, Cheong, van Kreveld and Overmars](https://ics-websites.science.uu.nl/geobook/toc.html), together with the [authors’ account of the 2008 edition](https://ics-websites.science.uu.nl/geobook/), put degeneracy and robustness beside convex hulls, segment intersections, triangulation, range searching, point location, Voronoi diagrams, arrangements and Delaunay triangulation. Our first six chapters give the representation, sign, interval, projection, transformation and conic foundations for that route. The later actual triangulation chapter proves the diagonal lemma, quadratic construction and no-hole art-gallery upper bound; the actual sweep chapter now proves general-position reporting and a slower complete degenerate subdivision. The actual Voronoi/Delaunay chapter derives half-plane cells, the lifted triangulation and duality with conservative construction bounds; the actual range-search chapter proves balanced k-d construction, exact-cell reporting and nearest-search correctness with a linear worst-case example. The reference also goes further into subdivisions and overlay, randomized incremental analysis, point-location structures, fractional cascading, motion planning and visibility. Those topics are not implied by our predicate proofs. The authors expect elementary algorithm and data-structure preparation, which is also needed for our later algorithm chapters.

[O’Rourke’s second-edition author page](https://www.science.smith.edu/~jorourke/books/compgeom.html) and the [1998 Cambridge contents](https://www.cambridge.org/core/books/abs/computational-geometry-in-c/contents/2CEB07C440EDC2F82E39EC7534E8AF79) likewise organize the subject around polygon triangulation and partition, planar and spatial hulls, Voronoi diagrams, arrangements, search/intersection and motion planning. Our coordinate and conic emphasis is useful preparation, but it does not substitute for those algorithmic correctness arguments. The second edition’s author description stresses degenerate cases and revised implementations; here exact arithmetic and interval uncertainty are mathematical contracts. No C or Java implementation, numerical performance or software reliability has been compared. Three-dimensional hull algorithms, general nonconvex mesh topology and motion planning remain outside the present course.

## Four reading routes

### The continuous route

The intended order is representations, orientation, segment intersection, projection/distance, transformations, conic predicates, three-dimensional predicates, convex hulls, then triangulation, sweep-line arrangements, Voronoi/Delaunay and range searching, curved metrics, the curvature clinic and robust-arithmetic/property contracts. The main route omits the retained earlier conic and capstone companions.

### The planar-predicates route

Read "Represent Geometric Objects with Invariants", "Orientation Is the Central Planar Predicate", "Segment Intersection Needs Boundary Cases", and "Projection, Distance, and Closest Points". Add "Transformations and Homogeneous Coordinates" for the matrix formalism. This route suits a reader whose primary interest is robust planar computation.

### The conics and transformations route

Read Transformations and Homogeneous Coordinates, then [Conic Predicates](conic-predicates.md), adding the actual Conics book for geometric classification and focal proofs. Three-Dimensional Predicates supplies the spatial continuation. The earlier two conic chapters remain optional companions.

### The algorithms and metrics route

Read Convex Hulls, Triangulation, Sweep Lines, Voronoi/Delaunay and Range Searching in order. Add Curved Metrics and the robustness contracts for geometric and numerical boundaries. Return to "Orientation Is the Central Planar Predicate" for the predicate properties and to "Projection, Distance, and Closest Points" for distance machinery. This route suits a reader preparing to implement geometric software.

## How to work a chapter

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a computation, an approximation, or an open problem;
2. a **hypothesis ledger** recording the coordinate system, dimension, and numerical assumptions built into each construction;
3. a **boundary ledger** recording when an argument moves between exact arithmetic, floating-point evaluation, and symbolic manipulation.

## Claim-status conventions used across chapters

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | The orientation predicate is translation invariant ("Orientation Is the Central Planar Predicate"). | Check that the hypotheses match your setting; identify any hidden coordinate assumption. |
| **Computation** | A formula or algorithm whose correctness follows from algebraic manipulation and whose output is verifiable by substitution. | The convex hull of a given point set ("Convex Hull as an Orientation Algorithm"). | Verify the intermediate steps; test with degenerate inputs. |
| **Approximation** | A numerical estimate with explicit error bounds or a heuristic whose limitations are stated. | Floating-point evaluation of the orientation predicate near collinearity. | Check the error bound against the application tolerance; test at the stated precision. |
| **Open problem** | A question unresolved in its stated model and scope. | A research question explicitly identified and sourced in its chapter. | Do not treat conjectures as theorems; verify the scope and current status in primary literature. |

A theorem is not uncertain because a reader finds it difficult. A computation is not approximate because it involves real numbers. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

## Exercise types

The chapter exercises are numbered without letter markers. They mix retrieval, calculation, proof, counterexample, transfer, and diagnosis. Solutions show the decisive reasoning, not only the final answer. When an exercise tests representation choice, formula selection, boundary-case handling, or interpretation, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and deliberate boundaries

This book reaches a first treatment of planar geometric predicates, affine and projective transformations, conic classification, three-dimensional predicates, convex hulls, triangulation and vertex guards, arrangement sweeps, Voronoi/Delaunay, k-d range queries, spherical and hyperbolic metrics, and robust-arithmetic contracts. It does not attempt differential geometry of curves and surfaces, full mesh generation, surface reconstruction, computational topology, or advanced randomized geometric algorithms. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
