var e=`---
parent_id: book-analytic-computational-geometry
matter_id: references
title: "References and Further Reading"
license: CC BY-SA 4.0
---

# References and Further Reading

This bibliography identifies standard comparison texts, historical sources, and current research directions. The book is written under CC BY-SA 4.0; standard definitions and geometric conventions belong to shared practice. References are included for further reading, historical context, alternative treatments, and broader coverage.

A named result or study is a retrieval convention, not a complete history. Geometric ideas are often the product of long development across languages, institutions, and communities; a modern statement may differ sharply from an early source.

## Classical geometry and analytic foundations

- Coxeter, H. S. M. (1969). *Introduction to Geometry* (2nd ed.). Wiley. A broad survey of geometric methods from Euclidean foundations through projective and non-Euclidean geometry.
- Stillwell, J. (2005). *The Four Pillars of Geometry*. Springer. An accessible treatment of Euclidean, affine, projective, and transformational geometry that emphasizes the connections between them.
- Pedoe, D. (1988). *Geometry: A Comprehensive Course*. Dover. A concise reference for analytic methods in plane geometry, including conics and transformations.

These texts use different notational conventions for homogeneous coordinates and conic classification. Comparison is most useful when those conventions are recorded rather than blended.

## Computational geometry

- de Berg, M., Cheong, O., van Kreveld, M., & Overmars, M. (2008). *Computational Geometry: Algorithms and Applications* (3rd ed.). Springer. The standard first-course text; covers convex hulls, Voronoi diagrams, Delaunay triangulations, and spatial data structures.
- Preparata, F. P., & Shamos, M. I. (1985). *Computational Geometry: An Introduction*. Springer. A classic reference for the algorithmic foundations of geometric computing, including lower bounds and early optimal algorithms.
- O'Rourke, J. (1998). *Computational Geometry in C* (2nd ed.). Cambridge University Press. A hands-on treatment with explicit C implementations of hulls, intersections, and polygon algorithms.
- Boissonnat, J.-D., & Yvinec, M. (1998). *Algorithmic Geometry*. Translated by Hervé Brönnimann. Cambridge University Press. https://doi.org/10.1017/CBO9781139172998. A rigorous treatment of geometric algorithms with emphasis on randomized methods and algebraic predicates.

The computational geometry literature varies in its treatment of degeneracies and exact arithmetic. This book states boundary policies and arithmetic contracts explicitly. Its faster sweep and unique Delaunay theorems use named general-position hypotheses; its exhaustive segment-arrangement construction handles degeneracies at a larger cost. A scale-aware diagnostic is not silently substituted for exact zero.

## Robust geometric computation

- Yap, C. K. (1997). "Towards exact geometric computation." *Computational Geometry*, 7(1--2), 3--23. https://doi.org/10.1016/0925-7721(95)00040-2. A survey of exact and adaptive arithmetic methods for geometric predicates.
- Shewchuk, J. R. (1997). "Adaptive precision floating-point arithmetic and fast robust geometric predicates." *Discrete & Computational Geometry*, 18(3), 305--363. The definitive treatment of adaptive exact predicates for orientation and incircle tests.

## Linear algebra and transformations

- Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press. A first-course treatment of vectors, matrices, eigenvalues, and orthogonal diagonalization.
- Axler, S. (2015). *Linear Algebra Done Right* (3rd ed.). Springer. A proof-focused development that avoids determinants until late; useful for understanding the structure of linear maps.

## Non-Euclidean geometry

- Ryan, P. J. (1986). *Euclidean and Non-Euclidean Geometry: An Analytic Approach*. Cambridge University Press. https://doi.org/10.1017/CBO9780511806209. A careful development of spherical and hyperbolic geometry from first principles.
- Anderson, J. W. (2005). *Hyperbolic Geometry* (2nd ed.). Springer. A concise introduction to the Poincar\\'{e} models and hyperbolic isometries.

## Historical attribution checklist

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. independent review of culturally broad claims and disputed priority.

## Reading-route recommendations

For a deeper treatment of planar computational geometry, proceed to de Berg et al. or O'Rourke. For conics and projective geometry, continue into Pedoe or Coxeter. For robust implementation, Shewchuk's adaptive predicates and Yap's exact computation survey are the natural next steps. For non-Euclidean geometry, Ryan provides spherical and hyperbolic foundations, while Anderson treats hyperbolic geometry in depth.

## Citation policy for contributors

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};