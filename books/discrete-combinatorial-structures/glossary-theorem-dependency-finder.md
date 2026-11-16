
# Glossary and Theorem Dependency Finder

This finder answers two questions: “What does this term mean here?” and “What must I repair before using this result?” Definitions are compact pointers, not replacements for proofs. Chapter IDs are stable manuscript locators; page numbers and final theorem numbers do not yet exist. Detailed theorem contracts and counterexamples also appear in `theorem-index-solutions`.

## Glossary

**Alteration.** A probabilistic construction that samples a generous object and then removes or changes bounded defects. Home: `probabilistic-alteration-dependence`.

**Antichain.** A set family with no distinct members ordered by inclusion. Maximal independent sets form an antichain, but an arbitrary antichain defines a matroid only if the induced family passes exchange. Homes: `exact-axiom-enumeration`, `extremal-set-compression`.

**Augmentation.** If independent $I,J$ satisfy $|I|<|J|$, some $e\in J\setminus I$ makes $I+e$ independent. It is existential. Home: `independence-augmentation-cryptomorphisms`.

**Basis.** An inclusion-maximal independent set of the specified restriction; unqualified, of the whole ground set. Matroid bases have equal size. Homes: `independence-augmentation-cryptomorphisms`, `bases-strong-exchange`.

**Basis-exchange graph.** The graph whose vertices are bases and whose edges are valid one-element exchanges. Its distance is governed by symmetric difference, but local squares require additional compatibility. Home: `basis-exchange-geometry`.

**Block design.** A point set with a family of equal-sized blocks satisfying a fixed pair-incidence count in the $2$-design case. Parameter equations are necessary, not sufficient for existence. Home: `designs-incidence-representability`.

**Bond.** An inclusion-minimal nonempty graph cut; a cocircuit of a graphic matroid. Home: `graphic-cographic-matroids`.

**Canonical encoding.** A deterministic representative of an isomorphism class, obtained here only after a complete relabeling search or a proved equivalent procedure. A hash is not itself a proof of canonicity. Home: `exact-axiom-enumeration`.

**Certificate.** Finite inspectable data that verifies one claim: for example an augmenting element, circuit, cut, kernel vector, coloring, or complete bounded trace. A certificate for one instance is not a universal proof.

**Circuit.** An inclusion-minimal dependent set. Circuit elimination promises a contained circuit, not that the entire residual union is minimal. Home: `circuits-elimination-orthogonality`.

**Closure.** $\operatorname{cl}(A)=\{e:r(A+e)=r(A)\}$. It becomes linear span for a represented matroid and component-connectivity closure for a graphic matroid. Home: `rank-submodularity-flats`.

**Cocircuit.** A circuit of the dual matroid. In a graphic matroid, cocircuits are bonds. Homes: `circuits-elimination-orthogonality`, `graphic-cographic-matroids`.

**Coloop.** An element in every basis, equivalently a one-element cocircuit. Deleting a coloop lowers full rank; contracting it has a different rank ledger from contracting a loop.

**Compression (shift).** A precisely defined replacement that moves a set toward a canonical label order. Size preservation can be built into the operator; preservation of the studied property needs a separate proof. Home: `extremal-set-compression`.

**Contraction.** The minor operation with rank $r_{M/e}(A)=r_M(A+e)-r_M(\{e\})$. It formalizes treating rank contributed by $e$ as already absorbed. Home: `deletion-contraction-minors`.

**Cryptomorphism.** An equivalence between axiom systems—such as independence, bases, rank, closure, or circuits—proved by explicit translations in both directions. It is not mere similarity of vocabulary. Home: `independence-augmentation-cryptomorphisms`.

**Deletion.** Restriction to the ground set after removing an element. Duality exchanges deletion with contraction. Home: `deletion-contraction-minors`.

**Dependency graph.** A graph encoding an explicit joint-independence condition among events; ordinary pairwise dependence intuition is insufficient. Home: `probabilistic-alteration-dependence`.

**Direct sum.** A matroid assembled from disjoint ground-set components, with independent sets and rank decomposing componentwise. Home: `duality-sums-connectivity`.

**Dual matroid.** The matroid whose bases are complements of primal bases in the fixed ground set. It exists abstractly without a planar graph drawing. Home: `duality-sums-connectivity`.

**Exchange matching.** A matching between differences of two bases that certifies compatible individual exchanges under a stated theorem. It does not automatically permit all matched swaps simultaneously. Homes: `bases-strong-exchange`, `basis-exchange-geometry`.

**Field dependence.** Change in a matrix's column-dependence structure when arithmetic is performed over a different field, often detected by minors that vanish in selected characteristics. Home: `linear-representability-fields`.

**First moment.** Use of expectation, usually with indicator sums, to prove existence. If a nonnegative integer variable has expectation strictly below one, it is zero somewhere. Home: `probabilistic-alteration-dependence`.

**Flat.** A closed set $F=\operatorname{cl}(F)$. Flats organize rank-neutral information and form a lattice under inclusion with closure applied to joins. Home: `rank-submodularity-flats`.

**Fundamental circuit.** The unique circuit in $B+e$ for a basis $B$ and outside element $e$. It lists precisely which basis elements can be exchanged for $e$. Home: `bases-strong-exchange`.

**Graphic matroid.** The edge matroid whose independent sets are forests. Stable vertex sets and graph matchings are not this independence family. Home: `graphic-cographic-matroids`.

**Greedy objective contract.** The declared feasible family, optimization direction, stopping rule, sign rule, and tie convention. Basis and optional independent-set objectives have different negative-weight behavior. Home: `weighted-greedy-objectives`.

**Heredity.** Closure of a feasible family under taking subsets. It defines an independence system but does not imply augmentation. Home: `independence-augmentation-cryptomorphisms`.

**Incidence matrix.** A labeled point-by-block or vertex-by-edge matrix recording membership. Having such a matrix does not alone prove a desired matroid representation. Home: `designs-incidence-representability`.

**Independence oracle.** An interface deciding whether a supplied set is independent. It does not by itself certify the matroid axioms. Home: `weighted-greedy-objectives`.

**Loop.** An element whose singleton has rank zero, equivalently a one-element circuit. A zero column represents a loop.

**Matroid.** A finite hereditary independence system satisfying augmentation. Equivalent axiom systems are available only after their cryptomorphisms are proved.

**Minor.** A matroid obtained through deletion and contraction. “Minor-minimal” requires every proper minor to pass a property, not merely a successful local reduction path. Homes: `deletion-contraction-minors`, `structural-investigations`.

**Parallel elements.** Distinct nonloops forming a two-element circuit. Equal nonzero represented columns are parallel when labels remain distinct.

**Plane dual.** The graph dual determined by a fixed plane embedding. It realizes graphic/cographic duality for the stated plane setting, unlike an arbitrary abstract graph dual. Home: `graphic-cographic-matroids`.

**Rank.** Maximum size of an independent subset of a set. Matroid rank is normalized, monotone, and submodular. Home: `rank-submodularity-flats`.

**Ramsey forcing.** The conclusion that every sufficiently large complete-graph coloring contains a prescribed monochromatic configuration. Recursive upper bounds and probabilistic lower bounds point in opposite directions. Home: `ramsey-forcing-bounds`.

**Representability.** Existence of a labeled matrix over a named field whose column-independent sets equal the matroid's independent sets. It is additional structure, not a matroid axiom. Home: `linear-representability-fields`.

**Restriction.** The matroid on $A\subseteq E$ retaining exactly the independent subsets contained in $A$, written $M|A$.

**Shadow.** The family of subsets obtained by deleting one element from members of a uniform family, with duplicates removed. Home: `extremal-set-compression`.

**Stability.** A theorem saying near-optimal objects are structurally close, under a stated distance and error function, to extremal models. It is neither exact equality nor visual similarity. Home: `turan-symmetrization-stability`.

**Strong exchange.** A strengthened basis-exchange assertion whose quantifiers must be read exactly; it still does not license arbitrary simultaneous replacements. Home: `bases-strong-exchange`.

**Submodularity.** $r(A\cup B)+r(A\cap B)\le r(A)+r(B)$, equivalently a diminishing-return inequality for matroid rank. It can fail for maximum feasible-size functions of hereditary nonmatroids. Home: `rank-submodularity-flats`.

**Symmetrization.** A transformation toward a canonical extremal form that must preserve the forbidden configuration and have a terminating or monotone potential. Home: `turan-symmetrization-stability`.

**Transversal matroid.** A matroid on one side of a bipartite presentation whose independent sets can be matched injectively into presentation blocks. This is not the family of all graph matchings. Home: `uniform-partition-transversal`.

**Two-sum.** A gluing operation along one designated virtual element, followed by a stated deletion convention. It is not an unqualified union of ground sets. Home: `duality-sums-connectivity`.

## Theorem dependency finder

Use the row whose desired conclusion matches your goal. “Must establish” records the inputs a citation cannot hide.

| Desired conclusion | Key/home | Must establish first | Common illegal strengthening |
|---|---|---|---|
| augment a smaller independent set | `THM-MAT-AUG`; independence chapter | finite matroid; both sets independent; strict size inequality | a prescribed element works |
| equal sizes of maximal independent subsets of $A$ | `THM-MAT-BASESIZE`; independence chapter | augmentation in the restriction to $A$ | all maximal feasible sets in any hereditary family agree |
| exchange from one basis to another | `THM-MAT-BASEX`; bases chapter | both are bases; selected element lies in first difference | every partner works or all swaps combine |
| submodular rank inequality | `THM-MAT-RANKSUB`; rank chapter | the function is matroid rank or satisfies the full rank axioms | any hereditary rank is submodular |
| closure exchange | `THM-MAT-CLOSUREX`; rank chapter | finite matroid rank; exact membership/nonmembership hypotheses | arbitrary set closure has this law |
| eliminate a shared circuit element | `THM-MAT-CIRELIM`; circuits chapter | distinct circuits and a named common element | residual union is itself a circuit |
| rule out singleton circuit–cocircuit intersection | `THM-MAT-ORTH`; circuits chapter | one circuit and one cocircuit of the same matroid | they are disjoint or meet evenly in every matroid |
| compute dual rank | `THM-MAT-DUALRANK`; duality chapter | complement in fixed $E$; primal ranks | complement may be taken in an unstated universe |
| optimize a weighted basis greedily | `THM-MAT-GREEDY`; greedy chapter | matroid; descending scan; continue to basis; deterministic ties | optional selection has same sign rule |
| infer matroid structure from greedy | `THM-MAT-GREEDY-CONV`; greedy chapter | universal quantification over allowed weights and tie orders | success on tests proves augmentation |
| compute basis-graph distance | `THM-MAT-BASEDIST`; basis geometry | vertices are bases; edges are valid one-element exchanges | arbitrary feasible-set reconfiguration has same distance |
| use self-dual connectivity | `THM-MAT-CONNDUAL`; connectivity chapter | exact $\lambda$ definition and fixed shore | separation terminology needs no convention |
| compute graphic rank | `THM-GRAPH-RANK`; graphic chapter | fixed vertex set; component count includes isolates | removing isolates preserves the displayed formula unchanged |
| translate to a plane dual | `THM-GRAPH-PLANE-DUAL`; graphic chapter | connected plane multigraph and fixed embedding | every abstract graph has this dual graph |
| derive a matroid from a matrix | `THM-LIN-REP`; representation chapter | labeled columns and named field | same integer matrix behaves identically over every field |
| characterize partial transversals | `THM-TRANS-HALL`; family chapter | fixed bipartite presentation and selected ground side | all graph matchings become matroid elements |
| dualize deletion or contraction | `THM-MINOR-DUAL`; minors chapter | same ground set and rank-correct loop/coloop handling | informal graph contraction covers every case |
| bound edges in a triangle-free graph | `THM-TURAN-K3`; symmetrization chapter | finite simple graph; triangle-free | multigraph statement or stability conclusion |
| recurse a Ramsey upper bound | `THM-RAMSEY-REC`; Ramsey chapter | standard two-color definition; boundary values | recurrence is equality or gives a lower bound |
| obtain a defect-free outcome from expectation | `THM-PROB-FIRST`; probability chapter | nonnegative integer variable; expectation strictly below one | expectation equal to one suffices |
| preserve a property under shifting | `THM-COMP-SHIFT`; compression chapter | exact shift; separate proof for the selected property | every shift preserves every prohibition |
| bound a uniform intersecting family | `THM-SET-INTERSECT`; compression chapter | $k$-uniform; pairwise intersecting; $n\ge 2k$ | same formula outside the range |
| use design parameter equations | `THM-DESIGN-PARAM`; designs chapter | a genuine $2-(v,k,\lambda)$ design with consistent conventions | arithmetic conditions construct a design |
| use the incidence rank bound | `THM-DESIGN-INCIDENCE`; designs chapter | stated nontriviality and real-field Gram calculation | same rank after arbitrary modular reduction |
| certify isomorphism canonically | `THM-ENUM-CANON`; enumeration chapter | complete permutation search or proved equivalent | equality of hashes alone proves canonicity |

## Dependency routes by output

**To prove a matroid identity:** `structural-reference-seed` → `independence-augmentation-cryptomorphisms` → choose bases, rank, or circuits → use minors/duality only after those operations are defined.

**To prove a representation claim:** matroid identity route → `linear-representability-fields` → name the field → for incidence data, add `designs-incidence-representability`.

**To prove greedy optimality:** augmentation → equal-size bases → exchange certificate → `weighted-greedy-objectives`; add `basis-exchange-geometry` for orientation or distance claims.

**To prove an extremal claim:** declare the forbidden configuration → choose counting, symmetrization, complement, probability, or compression → prove preservation and equality separately. Home chain: Turán → Ramsey → probability → set compression → designs.

**To prove a bounded computational claim:** exact object encoding → complete generator → exact predicate → canonicalization if quotienting by labels → certificate bundle. Home chain: `exact-axiom-enumeration` → `structural-investigations` → final audit in `theorem-index-solutions`.

## Accessibility and status

The tables duplicate all dependency arrows in text and do not rely on color. A future graphical dependency map must expose node labels, edge lists, keyboard traversal, and a text description. This finder is an authored draft component, not evidence that final cross-references, source attributions, or rendered accessibility have passed release review.
