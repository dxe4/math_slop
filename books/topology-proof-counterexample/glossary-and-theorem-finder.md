
# Glossary and Theorem Finder

This drafting index is a retrieval aid, not a substitute for definitions and hypotheses. References use stable chapter identifiers rather than page numbers. Before applying a result, return to the cited chapter and check separation, compactness, countability, local compactness, uniform, and basepoint assumptions.

## Historical stable chapter key

The numbers below preserve the original chapter and exercise references. Current main-route positions are listed in the reader guide; none of these identities is retired.

1. `topological-spaces-and-open-set-language` — topology axioms, closed sets, interior, closure, boundary, density, and comparison.
2. `bases-subbases-and-generated-topologies` — bases, subbases, generated topologies, order examples, and initial constructions.
3. `continuity-open-closed-and-neighborhood-tests` — equivalent continuity tests, pasting, products, quotients, embeddings, and compact-to-Hausdorff maps.
4. `subspaces-embeddings-and-relative-topology` — relative topology, closure and boundary in subspaces, embeddings, and inheritance.
5. `products-boxes-and-coordinate-maps` — product and box topologies, coordinate maps, convergence, diagonals, and graphs.
6. `quotients-identifications-and-gluing` — saturated sets, quotient universal property, identification spaces, and separation failures.
7. `nets-filters-and-topological-convergence` — nets, subnets, filters, ultrafilters, closure, continuity, and unique limits.
8. `compactness-covers-and-finite-control` — open covers, finite-intersection property, metric compactness, tubes, and convergence characterizations.
9. `connectedness-paths-and-components` — connectedness, paths, components, quasicomponents, local connectedness, and sine-curve boundaries.
10. `separation-axioms-and-closed-set-control` — $T_{0}$ through $T_{4}$, shrinking, diagonal tests, Urysohn functions, and quotient boundaries.
11. `countability-separability-and-lindelof-properties` — first and second countability, separability, Lindelofness, metric equivalences, and products.
12. `metrization-theorems-and-compatible-metrics` — compatible metrics, Urysohn metrization, embeddings in cubes, and complete-metrizability boundaries.
13. `uniform-spaces-completion-and-total-boundedness` — entourages, uniform continuity, Cauchy objects, completion, and total boundedness.
14. `function-spaces-and-compact-open-topology` — pointwise, uniform, and compact-open topologies, evaluation, exponential laws, and Arzela-Ascoli.
15. `local-compactness-and-compactifications` — local compactness conventions, one-point compactification, proper maps, and remainders.
16. `paracompactness-partitions-and-refinements` — refinements, local finiteness, shrinking, partitions of unity, and gluing.
17. `topological-manifolds-and-local-euclidean-structure` — charts, atlases, boundary, global axioms, dimension, and embeddings.
18. `homotopy-loops-and-deformation` — homotopy, fundamental groups, functoriality, deformation retracts, and winding number.
19. `covering-spaces-and-lifting` — covering maps, path and homotopy lifting, monodromy, and classification orientation.
20. `compactly-generated-spaces-and-category-boundaries` — $k$-spaces, Kelleyfication, weak Hausdorffness, mapping spaces, and categorical products.
21. `canonical-counterexample-spaces` — finite, cofinite, Sorgenfrey, ordinal, long-line, fan, gluing, and infinite-dimensional examples.
22. `topology-proof-atlas-and-capstones` — dependency, proof-mechanism, counterexample, map, and construction audits.

## Glossary

**Accumulation point.** A point every neighborhood of which meets $A$ away from the point itself. This differs from merely belonging to $\operatorname{cl}(A)$ when the point is isolated in $A$. See `topological-spaces-and-open-set-language`.

**Alexandrov space.** A space in which arbitrary intersections of open sets are open; finite spaces are canonical examples and can be encoded by specialization preorders. See `canonical-counterexample-spaces`.

**Arzela-Ascoli theorem.** A compactness criterion for families of maps: on a compact Hausdorff domain with metric target, equicontinuity and pointwise relative compactness characterize relative compactness in compact-open/uniform topology. See `function-spaces-and-compact-open-topology`.

**Atlas.** A family of compatible charts covering a manifold. Compatibility is a condition on transition maps and depends on whether the structure is merely topological, smooth, or otherwise enriched. See `topological-manifolds-and-local-euclidean-structure`.

**Basis.** A family of open sets that covers the space and refines intersections at each point; every open set is a union of basis elements. See `bases-subbases-and-generated-topologies`.

**Boundary.** $\partial_{X}(A)=\operatorname{cl}_{X}(A)\setminus\operatorname{int}_{X}(A)$. It depends on the ambient space and should not be transferred to a subspace without recomputation. See `topological-spaces-and-open-set-language`, `subspaces-embeddings-and-relative-topology`.

**Box topology.** The topology on a product generated by all boxes $\prod_{i} U_{i}$, with no finite-support restriction. It generally differs from product topology for infinitely many factors. See `products-boxes-and-coordinate-maps`.

**Cauchy filter/net.** A filter or net whose tail is eventually small with respect to every entourage. Cauchy is a uniform notion, not a purely topological one. See `uniform-spaces-completion-and-total-boundedness`.

**Chart.** A homeomorphism from an open subset of a manifold to an open subset of Euclidean or half-Euclidean space. A coordinate formula alone is not a chart until its domain, image, and inverse continuity are verified. See `topological-manifolds-and-local-euclidean-structure`.

**Closed map.** A map sending closed sets to closed sets. Continuity concerns inverse images instead; neither property implies the other without additional hypotheses. See `continuity-open-closed-and-neighborhood-tests`, `quotients-identifications-and-gluing`.

**Closure.** The intersection of all closed sets containing a subset, equivalently the points whose every neighborhood meets it. Nets detect closure in every space; sequences need not. See `topological-spaces-and-open-set-language`, `nets-filters-and-topological-convergence`.

**Compact-open topology.** The function-space topology with subbasis $[K,U]=\{f:f(K) \subseteq U\}$ for compact $K$ and open $U$. Joint evaluation requires local compactness hypotheses on the domain. See `function-spaces-and-compact-open-topology`.

**Compact space.** A space in which every open cover has a finite subcover. Compact subsets need not be closed unless the ambient space is Hausdorff. See `compactness-covers-and-finite-control`.

**Compactification.** A compact space containing a homeomorphic dense copy of the original space. Separation requirements and the remainder must be declared. See `local-compactness-and-compactifications`.

**Complete metric/uniform space.** A space in which every Cauchy net or filter converges, with sequence formulations available in metric spaces. Completeness depends on the uniformity, not only the topology. See `uniform-spaces-completion-and-total-boundedness`.

**Completely regular.** A space in which a point and a disjoint closed set can be separated by a continuous $[0,1]$-valued function. Adding $T_{1}$ gives a Tychonoff space. See `separation-axioms-and-closed-set-control`, `metrization-theorems-and-compatible-metrics`.

**Component.** A maximal connected subspace. Components are closed but need not be open; they can be smaller than quasicomponents in general spaces. See `connectedness-paths-and-components`.

**Connected space.** A space with no separation into two nonempty disjoint open subsets, equivalently no nontrivial clopen subset. See `connectedness-paths-and-components`.

**Contractible space.** A space whose identity map is homotopic to a constant map. Contractible spaces are path connected and have trivial fundamental group, but need not be homeomorphic to a point. See `homotopy-loops-and-deformation`.

**Covering map.** A continuous surjection locally modeled on a disjoint union of copies of each evenly covered neighborhood. Local homeomorphism alone does not guarantee the covering property. See `covering-spaces-and-lifting`.

**Dense subset.** $A \subseteq X$ with $\operatorname{cl}_{X}(A)=X$, equivalently every nonempty open set meets $A$. Dense does not mean large in cardinality or measure. See `topological-spaces-and-open-set-language`.

**Deformation retract.** A retract $A \subseteq X$ for which $\operatorname{id}_{X}$ deforms to the retraction followed by inclusion while every point of $A$ stays fixed. It is a homotopy-equivalence certificate. See `homotopy-loops-and-deformation`.

**Directed set.** A nonempty preorder in which every finite pair has a common upper bound. It indexes nets and makes simultaneous eventual conditions meaningful. See `nets-filters-and-topological-convergence`.

**Embedding.** A map that is a homeomorphism onto its image with the subspace topology. An injective continuous map need not be an embedding. See `subspaces-embeddings-and-relative-topology`.

**Entourage.** A member of a uniformity on $X$, viewed as a controlled neighborhood of the diagonal in $X \times X$. Entourages compare two points at one scale. See `uniform-spaces-completion-and-total-boundedness`.

**Equicontinuity.** A family-level continuity condition in which the same neighborhood at a point works for every map in the family at a prescribed target scale. See `function-spaces-and-compact-open-topology`.

**Evenly covered neighborhood.** An open set $U$ whose inverse image under a covering map is a disjoint union of open sheets, each mapped homeomorphically onto $U$. See `covering-spaces-and-lifting`.

**Filter.** A nonempty family of subsets closed upward and under finite intersections that does not contain the empty set. Convergence means containing every neighborhood of the proposed limit. See `nets-filters-and-topological-convergence`.

**First-countable.** Having a countable local base at every point. It makes sequences sufficient for closure and continuity tests, but is not implied by separability in arbitrary spaces. See `countability-separability-and-lindelof-properties`.

**Fundamental group.** Endpoint-relative homotopy classes of loops based at $x_{0}$, with concatenation as multiplication. Basepoint change inside one path component is an isomorphism defined up to inner automorphism. See `homotopy-loops-and-deformation`.

**Hausdorff.** A space in which distinct points have disjoint open neighborhoods. Equivalently the diagonal is closed, or every convergent net has a unique limit. See `separation-axioms-and-closed-set-control`.

**Homeomorphism.** A continuous bijection with continuous inverse. It is an isomorphism of topological spaces, not merely a set-theoretic or continuous bijection. See `continuity-open-closed-and-neighborhood-tests`.

**Homotopy.** A continuous map $H:X \times I\to Y$ interpolating between two maps. Relative and based homotopies impose fixed-value conditions throughout the interpolation. See `homotopy-loops-and-deformation`.

**Initial topology.** The coarsest topology on a source making a declared family of maps continuous. Product topology is the central example. See `bases-subbases-and-generated-topologies`, `products-boxes-and-coordinate-maps`.

**Interior.** The union of all open subsets contained in $A$; it is the largest open subset of $A$. Relative interior can differ sharply from ambient interior. See `topological-spaces-and-open-set-language`, `subspaces-embeddings-and-relative-topology`.

**Kelleyfication.** The topology obtained by declaring closedness through all continuous probes from compact Hausdorff spaces, producing a compactly generated space with the same compact-Hausdorff-source maps. Testing only compact subspaces needs extra separation hypotheses. See `compactly-generated-spaces-and-category-boundaries`.

**Lindelof space.** A space in which every open cover has a countable subcover. It is a cover property, not the assertion that every open cover is itself countable. See `countability-separability-and-lindelof-properties`.

**Local compactness.** A convention-sensitive local compactness property. In the main Hausdorff setting, every point has a neighborhood with compact closure. See `local-compactness-and-compactifications`.

**Locally finite family.** A family such that every point has a neighborhood meeting only finitely many members. Local finiteness permits closure and sum operations that arbitrary infinite families can obstruct. See `paracompactness-partitions-and-refinements`.

**Manifold.** In this volume, a Hausdorff, second-countable space locally homeomorphic to a fixed-dimensional Euclidean space, with boundary variants declared separately. Local Euclidean structure alone omits global axioms that do real work. See `topological-manifolds-and-local-euclidean-structure`.

**Metrizable space.** A space whose topology is induced by some metric. A compatible metric is not unique, and completeness need not survive replacement by another compatible metric. See `metrization-theorems-and-compatible-metrics`.

**Monodromy.** The action obtained by lifting loops and recording how they permute a covering fiber. It depends on a basepoint and encodes the subgroup associated with a covering. See `covering-spaces-and-lifting`.

**Net.** A function from a directed set into a space. Nets capture arbitrary neighborhood systems and characterize closure, continuity, compactness, and Hausdorff uniqueness without countability assumptions. See `nets-filters-and-topological-convergence`.

**Normal space.** A space in which disjoint closed sets have disjoint open neighborhoods; $T_{1}$ is not built into the word in this volume. See `separation-axioms-and-closed-set-control`.

**One-point compactification.** For noncompact locally compact Hausdorff $X$, the space $X \cup \{\infty\}$ whose **open** neighborhoods of infinity are exactly the complements of compact subsets of $X$; arbitrary neighborhoods contain one of these. See `local-compactness-and-compactifications`.

**Paracompact space.** A space in which every open cover has a locally finite open refinement. Hausdorff paracompact spaces support shrinking and partitions of unity under the chapter's hypotheses. See `paracompactness-partitions-and-refinements`.

**Partition of unity.** A locally finite family of continuous $[0,1]$-valued functions whose pointwise sum is $1$, subordinate when each support lies in a specified cover member. See `paracompactness-partitions-and-refinements`.

**Path component.** An equivalence class under the relation “joined by a path.” Path components refine connected components and coincide with them under local path-connectedness. See `connectedness-paths-and-components`.

**Product topology.** The coarsest topology making all coordinate projections continuous; its basic sets restrict finitely many coordinates. See `products-boxes-and-coordinate-maps`.

**Proper map.** In the locally compact Hausdorff setting, a continuous map whose inverse images of compact sets are compact; equivalent formulations require their stated hypotheses. See `local-compactness-and-compactifications`.

**Quasicomponent.** The intersection of all clopen neighborhoods of a point. It contains the component and may be strictly larger. See `connectedness-paths-and-components`.

**Quotient map.** A surjection $q:X\to Y$ for which $U \subseteq Y$ is open exactly when $q^{-1}(U)$ is open. It supports the universal property for maps constant on fibers. See `quotients-identifications-and-gluing`.

**Regular space.** A space in which a point and a disjoint closed set have disjoint open neighborhoods; $T_{1}$ is not built into the word here. See `separation-axioms-and-closed-set-control`.

**Retraction.** A continuous map $r:X\to A$ restricting to the identity on $A$. It gives a one-sided inverse to inclusion but need not give a deformation retraction. See `homotopy-loops-and-deformation`.

**Saturated set.** A union of fibers of a quotient map, equivalently $A=q^{-1}(q(A))$. Openness of nonsaturated sets need not pass to quotient images. See `quotients-identifications-and-gluing`.

**Second-countable.** Having a countable basis for the entire topology. It implies first-countability, separability, and Lindelofness. See `countability-separability-and-lindelof-properties`.

**Separable space.** A space with a countable dense subset. Outside metric or second-countable settings, separability need not imply the cover and basis properties familiar from Euclidean spaces. See `countability-separability-and-lindelof-properties`.

**Sequentially compact.** A space in which every sequence has a convergent subsequence. It is equivalent to compactness in metric spaces but not in arbitrary spaces. See `compactness-covers-and-finite-control`, `canonical-counterexample-spaces`.

**Subbasis.** A family whose finite intersections form a basis for the topology it generates. Continuity can be tested on inverse images of subbasic sets. See `bases-subbases-and-generated-topologies`.

**Subnet.** A net obtained through the chapter's cofinal eventual reindexing convention. It need not arise from an injective subsequence-like selection. See `nets-filters-and-topological-convergence`.

**Subspace topology.** The topology on $A \subseteq X$ whose opens are traces $A \cap U$ of ambient opens. Relative closure and boundary must be computed in this topology. See `subspaces-embeddings-and-relative-topology`.

**$T_{0}$, $T_{1}$, $T_{2}$, $T_{3}$, $T_{4}$.** Successive separation conditions: distinguishability, closed points, Hausdorffness, regular plus $T_{1}$, and normal plus $T_{1}$. See `separation-axioms-and-closed-set-control`.

**Topological sum.** The disjoint union with each summand open and carrying its original topology. It is a coproduct and often the source of a gluing quotient. See `quotients-identifications-and-gluing`.

**Topology.** A family containing $\varnothing,X$, closed under arbitrary unions and finite intersections. It specifies open sets; metric, order, or algebraic structure is additional. See `topological-spaces-and-open-set-language`.

**Total boundedness.** The property that finitely many entourage balls cover at every scale. In metric spaces it is stronger than boundedness and, together with completeness, characterizes compactness. See `uniform-spaces-completion-and-total-boundedness`.

**Tube lemma.** If compact $K$ and open $N \subseteq X \times K$ contain $\{x\} \times K$, then some neighborhood $U$ of $x$ satisfies $U \times K \subseteq N$. See `compactness-covers-and-finite-control`.

**Tychonoff space.** A completely regular $T_{1}$ space. Do not confuse this separation term with Tychonoff's product theorem. See `separation-axioms-and-closed-set-control`.

**Ultrafilter.** A maximal proper filter, equivalently a filter deciding every subset by containing it or its complement. Extension to ultrafilters uses an appropriate choice principle. See `nets-filters-and-topological-convergence`.

**Uniform continuity.** Entourage control in which one source scale works simultaneously at every point. It depends on uniform structures and is stronger than ordinary continuity in general. See `uniform-spaces-completion-and-total-boundedness`.

**Uniformity.** A family of entourages satisfying diagonal, inverse, upward-closure, finite-intersection, and composition-root axioms. It induces a topology but carries additional Cauchy and uniform-continuity data. See `uniform-spaces-completion-and-total-boundedness`.

**Urysohn function.** A continuous $f:X\to[0,1]$ taking prescribed values $0$ and $1$ on two disjoint closed sets, constructed from normality. See `separation-axioms-and-closed-set-control`.

**Weak Hausdorff space.** A space in which images of compact Hausdorff spaces are closed; this categorical separation condition is suited to compactly generated topology. See `compactly-generated-spaces-and-category-boundaries`.

**Winding number.** The integer endpoint of the lift of a based circle loop through $\mathbb{R}\to S^{1}$. It gives the isomorphism $\pi_{1}(S^{1}) \cong \mathbb{Z}$ after an orientation is chosen. See `homotopy-loops-and-deformation`.

## Theorem finder: foundations and maps

- **Kuratowski closure laws:** every topological space; closure is extensive, monotone, idempotent, preserves finite unions, and sends $\varnothing$ to itself. See `topological-spaces-and-open-set-language`.
- **Basis recognition and comparison:** the candidate family must cover points and refine pairwise intersections; equality of generated topologies follows from mutual local refinement. See `bases-subbases-and-generated-topologies`.
- **Subbasis continuity test:** inverse images of every declared subbasic open are open; no separation hypothesis. See `bases-subbases-and-generated-topologies`, `continuity-open-closed-and-neighborhood-tests`.
- **Continuity equivalences:** open inverse images, closed inverse images, neighborhood tests, and closure preservation are equivalent for arbitrary spaces and maps. Sequence preservation alone needs a sequential or first-countable hypothesis for a converse. See `continuity-open-closed-and-neighborhood-tests`.
- **Pasting lemma:** continuous maps on a finite closed cover paste when they agree on overlaps; an arbitrary open cover version is also valid. Infinite closed covers require local finiteness or another condition. See `continuity-open-closed-and-neighborhood-tests`.
- **Subspace closure formula:** $\operatorname{cl}_{Y}(A)=Y \cap \operatorname{cl}_{X}(A)$ for $A \subseteq Y \subseteq X$; no separation hypothesis. See `subspaces-embeddings-and-relative-topology`.
- **Product universal property:** $f:Z\to \prod_{i} X_{i}$ is continuous exactly when every coordinate $\pi_{i} \circ f$ is continuous; product topology, not box topology. See `products-boxes-and-coordinate-maps`.
- **Product convergence:** a net converges in a product exactly when all coordinate nets converge; arbitrary products with product topology. See `products-boxes-and-coordinate-maps`, `nets-filters-and-topological-convergence`.
- **Closed diagonal theorem:** $X$ is Hausdorff exactly when $\Delta_{X}$ is closed in $X \times X$. See `separation-axioms-and-closed-set-control`.
- **Closed graph criterion:** a continuous $f:X\to Y$ has closed graph when $Y$ is Hausdorff; no separation assumption on $X$. See `products-boxes-and-coordinate-maps`, `separation-axioms-and-closed-set-control`.
- **Quotient universal property:** for quotient $q:X\to Y$, a fiber-constant continuous $f:X\to Z$ factors uniquely through a continuous $Y\to Z$. See `quotients-identifications-and-gluing`.
- **Open/closed quotient criterion:** a continuous surjection that is open or closed is quotient. See `quotients-identifications-and-gluing`.
- **Compact-to-Hausdorff theorem:** a continuous bijection from compact $X$ to Hausdorff $Y$ is a homeomorphism. See `continuity-open-closed-and-neighborhood-tests`, `compactness-covers-and-finite-control`.

## Theorem finder: convergence and compactness

- **Net closure theorem:** $x \in \operatorname{cl}(A)$ exactly when some net in $A$ converges to $x$; arbitrary spaces. See `nets-filters-and-topological-convergence`.
- **Net continuity theorem:** $f$ is continuous exactly when it preserves convergence of every net; arbitrary spaces. See `nets-filters-and-topological-convergence`.
- **Unique-limit theorem:** $X$ is Hausdorff exactly when every convergent net has a unique limit. Sequences do not suffice in arbitrary spaces. See `nets-filters-and-topological-convergence`, `separation-axioms-and-closed-set-control`.
- **Ultrafilter compactness theorem:** $X$ is compact exactly when every ultrafilter converges; ultrafilter existence or extension uses choice. See `nets-filters-and-topological-convergence`, `compactness-covers-and-finite-control`.
- **Finite-intersection characterization:** $X$ is compact exactly when every closed-set family with the finite intersection property has nonempty total intersection. See `compactness-covers-and-finite-control`.
- **Continuous image of compactness:** continuous images of compact spaces are compact; no Hausdorff assumption. See `compactness-covers-and-finite-control`.
- **Compact subsets are closed:** compact subsets of Hausdorff spaces are closed. Both compactness of the subset and Hausdorffness of the ambient space matter. See `compactness-covers-and-finite-control`.
- **Metric compactness equivalences:** for metric spaces, compactness, sequential compactness, and completeness plus total boundedness are equivalent. See `compactness-covers-and-finite-control`, `uniform-spaces-completion-and-total-boundedness`.
- **Lebesgue number lemma:** every open cover of a compact metric space admits a positive Lebesgue number. See `compactness-covers-and-finite-control`.
- **Uniform continuity on compacta:** a continuous map from compact metric $X$ to metric $Y$ is uniformly continuous. See `compactness-covers-and-finite-control`.
- **Tube lemma and finite products:** compactness of the fiber yields tubes; finite products of compact spaces are compact. See `compactness-covers-and-finite-control`.
- **Tychonoff theorem:** an arbitrary product of compact spaces is compact in product topology; the full theorem has a choice-principle boundary. See `products-boxes-and-coordinate-maps`, `compactness-covers-and-finite-control`.

## Theorem finder: connectedness and separation

- **Continuous image of connectedness:** a continuous image of a connected space is connected. See `connectedness-paths-and-components`.
- **Connected subsets of $\mathbb{R}$:** exactly intervals, using order completeness of $\mathbb{R}$. See `connectedness-paths-and-components`.
- **Closure of connected sets:** if connected $A \subseteq B \subseteq \operatorname{cl}(A)$, then $B$ is connected. The analogous claim for path connectedness is false. See `connectedness-paths-and-components`.
- **Component/quasicomponent comparison:** every component lies in its quasicomponent; equality needs additional hypotheses such as compact Hausdorff settings stated in the chapter. See `connectedness-paths-and-components`.
- **Local path-connectedness rule:** in a locally path-connected space, path components are open and agree with connected components. See `connectedness-paths-and-components`.
- **Regular shrinking criterion:** regularity is equivalent to shrinking $x \in U$ to $x \in V \subseteq \operatorname{cl}(V) \subseteq U$; regular does not include $T_{1}$ here. See `separation-axioms-and-closed-set-control`.
- **Normal shrinking criterion:** normality is equivalent to shrinking closed $A \subseteq U$ to $A \subseteq V \subseteq \operatorname{cl}(V) \subseteq U$. See `separation-axioms-and-closed-set-control`.
- **Compact Hausdorff normality:** every compact Hausdorff space is normal and therefore $T_{4}$. See `separation-axioms-and-closed-set-control`.
- **Urysohn lemma:** disjoint closed subsets of a normal space admit a continuous $[0,1]$-valued separator. Under this volume's convention, $T_{1}$ is not needed for the construction. See `separation-axioms-and-closed-set-control`.
- **Closed-relation quotient theorem:** a closed equivalence relation on compact Hausdorff $X$ has compact Hausdorff quotient. Closed classes alone give only $T_{1}$. See `separation-axioms-and-closed-set-control`.

## Theorem finder: countability, metrics, and uniformity

- **First-countable sequence tests:** in first-countable spaces, closure and continuity can be tested with sequences. See `countability-separability-and-lindelof-properties`.
- **Second-countability implications:** second-countable spaces are first-countable, separable, and Lindelof. See `countability-separability-and-lindelof-properties`.
- **Metric separability equivalence:** for metric spaces, separability, second-countability, and the Lindelof property are equivalent. See `countability-separability-and-lindelof-properties`.
- **Countable product second-countability:** a countable product of second-countable spaces is second-countable; product topology. See `products-boxes-and-coordinate-maps`, `countability-separability-and-lindelof-properties`.
- **Urysohn metrization theorem:** every regular second-countable $T_{1}$ space is metrizable, using countably many Urysohn-type coordinate functions. See `metrization-theorems-and-compatible-metrics`.
- **Compatible-metric warning:** topologically equivalent metrics can have different Cauchy sequences, completeness, boundedness, and uniform convergence. See `metrization-theorems-and-compatible-metrics`, `uniform-spaces-completion-and-total-boundedness`.
- **Metric completion:** every metric space embeds isometrically and densely in a complete metric space, unique up to the isometry fixing the original dense copy. See `uniform-spaces-completion-and-total-boundedness`.
- **General completion universal property:** separated uniform spaces admit completion under the chapter's construction hypotheses; uniformly continuous maps into complete separated targets extend uniquely. See `uniform-spaces-completion-and-total-boundedness`.
- **Complete plus total bounded:** a separated complete uniform space is compact exactly when it is totally bounded, with the metric form as a special case. See `uniform-spaces-completion-and-total-boundedness`.

## Theorem finder: function spaces and local constructions

- **Compact-open versus uniform:** if $X$ is compact Hausdorff and $Y$ metric, compact-open and uniform topologies on $C(X,Y)$ agree. See `function-spaces-and-compact-open-topology`.
- **Joint evaluation:** $ev:C_{k}(X,Y) \times X\to Y$ is continuous when $X$ is locally compact Hausdorff; it can fail without local compactness. See `function-spaces-and-compact-open-topology`.
- **Joint composition:** $C_{k}(Y,Z) \times C_{k}(X,Y)\to C_{k}(X,Z)$ is continuous when the middle space $Y$ is locally compact Hausdorff. See `function-spaces-and-compact-open-topology`.
- **Compact-open exponential law:** for locally compact Hausdorff $X$, a map $Z \times X\to Y$ is continuous exactly when its curry $Z\to C_{k}(X,Y)$ is continuous. Stronger homeomorphism statements require their own topology hypotheses. See `function-spaces-and-compact-open-topology`.
- **Arzela-Ascoli:** for compact Hausdorff $X$ and metric $Y$, equicontinuity plus pointwise relative compactness characterizes relative compactness in $C_{k}(X,Y)$. See `function-spaces-and-compact-open-topology`.
- **One-point compactification:** a noncompact locally compact Hausdorff $X$ has a compact Hausdorff one-point compactification; conversely deleting a point from compact Hausdorff produces a locally compact Hausdorff subspace. See `local-compactness-and-compactifications`.
- **Proper extension to infinity:** for noncompact locally compact Hausdorff spaces, a continuous map is compact-proper exactly when its extension between one-point compactifications that sends infinity to infinity is continuous. The adjoining-point convention also handles compact edge cases as stated in the chapter. See `local-compactness-and-compactifications`.
- **Metric paracompactness:** every metric space is paracompact. See `paracompactness-partitions-and-refinements`.
- **Partitions of unity:** a paracompact Hausdorff space admits a partition of unity subordinate to each open cover, using the shrinking and local-finiteness machinery stated in the chapter. See `paracompactness-partitions-and-refinements`.
- **Locally finite gluing:** locally finite families permit pointwise finite sums and well-controlled closure operations; check support and cover hypotheses. See `paracompactness-partitions-and-refinements`.

## Theorem finder: manifolds, homotopy, and coverings

- **Manifold local consequences:** a topological $n$-manifold is locally compact, locally path connected, and locally metrizable; global Hausdorffness and second-countability are separate defining assumptions here. See `topological-manifolds-and-local-euclidean-structure`.
- **Invariance of domain:** a continuous injective map between open subsets of $\mathbb{R}^n$ is open and an embedding; the domain and codomain dimensions must agree. See `topological-manifolds-and-local-euclidean-structure`.
- **Invariance of dimension:** nonempty open subsets of $\mathbb{R}^m$ and $\mathbb{R}^n$ are homeomorphic only when $m=n$. See `topological-manifolds-and-local-euclidean-structure`.
- **Fundamental-group functoriality:** a based map induces a homomorphism, identities and composites are preserved, and based-homotopic maps induce equal homomorphisms. See `homotopy-loops-and-deformation`.
- **Basepoint change:** a path between basepoints gives a fundamental-group isomorphism; different paths change it by inner automorphism. See `homotopy-loops-and-deformation`.
- **Deformation-retract invariance:** inclusion of a deformation retract induces an isomorphism on fundamental groups. A retraction alone gives only split injection/surjection statements. See `homotopy-loops-and-deformation`.
- **Circle computation:** lifting through $\mathbb{R}\to S^{1}$ gives winding number and $\pi_{1}(S^{1}) \cong \mathbb{Z}$; an orientation chooses the sign of the generator. See `homotopy-loops-and-deformation`.
- **Path lifting:** a path in the base of a covering map has a unique lift once its initial lift point is chosen. See `covering-spaces-and-lifting`.
- **Homotopy lifting:** a homotopy into the base of a covering lifts uniquely after compatible initial-edge lift data are fixed. See `covering-spaces-and-lifting`.
- **Fundamental group under a covering:** for path-connected covering spaces with chosen basepoints, the induced map on $\pi_{1}$ is injective; its image records which loops lift closed. See `covering-spaces-and-lifting`.
- **Covering classification orientation:** classification by subgroups of $\pi_{1}$ requires connectedness, local path-connectedness, and semilocal simple connectivity in the stated form; conjugacy corresponds to forgetting the point in the fiber. See `covering-spaces-and-lifting`.

## Theorem finder: categorical boundaries and counterexamples

- **Kelleyfication universal property:** maps from compact Hausdorff sources detect the $k$-ification, and maps from a $k$-space into $X$ are continuous exactly when they are continuous into $kX$ under the chapter's convention. See `compactly-generated-spaces-and-category-boundaries`.
- **Convenient product/exponential law:** compactly generated weak Hausdorff spaces use a Kelleyfied product and mapping space to restore the desired exponential behavior. Ordinary product and compact-open topology should not be substituted without checking. See `compactly-generated-spaces-and-category-boundaries`.
- **Sorgenfrey product boundary:** the Sorgenfrey line is well separated and normal, while its square is not normal. See `separation-axioms-and-closed-set-control`, `canonical-counterexample-spaces`.
- **Ordinal sequence boundary:** in the ordinal interval $[0,\omega_1]$, the endpoint $\omega_1$ lies in the closure of $[0,\omega_1)$ but is not the limit of a sequence from that subspace. See `canonical-counterexample-spaces`.
- **Line with two origins:** gluing two real lines away from their origins yields a locally Euclidean $T_{1}$ space that is not Hausdorff. See `quotients-identifications-and-gluing`, `canonical-counterexample-spaces`.
- **Topologist's sine curve:** a connected compact planar space can fail path connectedness and local connectedness. See `connectedness-paths-and-components`, `canonical-counterexample-spaces`.
- **Infinite-dimensional ball boundary:** closed and bounded subsets of infinite-dimensional normed spaces need not be compact; total boundedness is the missing metric condition. See `compactness-covers-and-finite-control`, `canonical-counterexample-spaces`.

## Hypothesis-removal quick audit

- Remove Hausdorffness from “compact subsets are closed”: an indiscrete space supplies compact nonclosed subsets.
- Replace nets by sequences in an arbitrary space: cocountable and ordinal examples defeat closure and uniqueness converses.
- Replace product by box topology: coordinatewise continuity and convergence can fail to characterize the mapping behavior.
- Assume closed quotient fibers imply Hausdorff quotient: the line with two origins has closed points but inseparable origins.
- Assume normality is hereditary or product-stable: arbitrary subspaces and the Sorgenfrey square provide failures.
- Assume closed and bounded implies compact in every metric or normed space: infinite-dimensional unit balls refute it.
- Assume compact-open equals uniform on a noncompact domain: bumps moving to infinity converge compact-open but not uniformly.
- Omit local compactness from joint evaluation or uncurrying: $C_{k}(\mathbb{Q},\mathbb{R}) \times \mathbb{Q}\to \mathbb{R}$ gives a failure.
- Treat a retraction as a deformation retraction: a point retracts from $S^{1}$, but $S^{1}$ is not contractible.
- Treat a local homeomorphism as a covering map: uniform evenly covered neighborhoods can fail.
- Treat local Euclidean structure as the entire manifold definition: the line with two origins and long-line examples expose missing global axioms.
- Treat a theorem name as a hypothesis list: return to the stable chapter before applying it.

## Added theorem finders

**Tietze extension.** A continuous real-valued function on a closed subset of a normal space extends continuously to the whole space. A closed bounded interval can be preserved. The general real-valued case uses compression followed by removal of forbidden endpoint values. See [Urysohn–Tietze extension](urysohn-tietze-extension.md).

**Baire space.** Every countable intersection of dense open subsets is dense. Complete metric spaces are Baire by the nested-ball proof; the metric and completeness assumptions are distinct. See [Complete metric spaces and Baire category](complete-metric-spaces-baire-category.md).

**Real Stone–Weierstrass theorem.** A real subalgebra of continuous real functions on a compact Hausdorff space is uniformly dense if it contains constants and separates points. The proof uses absolute-value approximation and lattice max–min operations. See [Ascoli and Stone–Weierstrass](arzela-ascoli-stone-weierstrass.md).

**Choice and Zorn.** The arbitrary compact-space product proof explicitly assumes the axiom of choice and uses Zorn to extend proper filters. All factor topologies are the product topology; Hausdorffness is not assumed. See [Compactness](compactness-covers-and-finite-control.md).
