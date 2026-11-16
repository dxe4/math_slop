var e=`---
parent_id: book-functional-analysis
matter_id: glossary-and-theorem-finder
title: "Glossary and Theorem Finder"
level: graduate
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder

**Banach space:** a complete normed vector space. The opening chapter proves completeness of C(K), c0, and the basic sequence spaces.

**Equivalent norms:** two norms bounded above and below by fixed positive multiples. In finite dimensions all norms are equivalent; increasing dimension can destroy uniform constants.

**Quotient norm:** the infimum of representative norms modulo a closed subspace. A quotient of a Banach space by a closed subspace is Banach.

**Riesz separation lemma:** a unit vector can be chosen a fixed distance below one away from a proper closed subspace. Iterating it proves noncompactness of infinite-dimensional unit balls.

**Continuous dual:** the Banach space of bounded scalar-valued linear functionals, complete even when its domain is incomplete. The operator chapter identifies the duals of l1 and c0.

**Hahn–Banach:** a bounded scalar functional extends from any linear subspace without increasing its norm. Its corollaries provide norming functionals and separation from closed subspaces.

**Neumann inverse:** an operator geometric series constructs a two-sided inverse when the perturbation norm is below one.

**Uniform boundedness:** a pointwise bounded family of bounded linear maps on a Banach domain has a common operator norm bound. The codomain need not be complete.

**Strong operator convergence:** convergence of outputs at every fixed input. Coordinate projections show it need not imply norm convergence.

**Dense-set convergence criterion:** a uniform operator bound plus convergence on a dense set extends convergence to every input when the target is Banach.

**Open mapping and closed graph:** bounded surjections between Banach spaces are open; an everywhere-defined linear map between Banach spaces is bounded exactly when its graph is closed.

**Continuous spectral calculus:** a normal bounded operator has an isometric calculus for continuous functions on its spectrum. Arbitrary discontinuous indicators require additional Borel representation.

**Fredholm index:** kernel dimension minus closed-range quotient dimension; compact perturbations preserve it.

**Krein–Milman:** a compact convex set in a Hausdorff locally convex space is the closed convex hull of its extreme points, with closure in the specified topology.

**Generator:** the densely defined closed derivative of a strongly continuous semigroup. The final chapter proves contraction Hille–Yosida and a Hilbert dissipativity criterion, with actual domain and resolvent conditions.

Additional applications now proved in their chapters include the universal completion (1), dense-domain extension (2), quotient duals (3), bilinear uniform boundedness (4), complemented-kernel right inverses (5), nested projections (7), adjoint range geometry (8), compact embeddings/Volterra inverses (9), Hilbert–Schmidt sums (10), rank-one Fredholm alternatives (11), gap projections (12), periodic self-adjoint differentiation (13), Moreau decomposition (14), nonexposed extreme points (15) and bounded generator perturbations (16).
`;export{e as default};