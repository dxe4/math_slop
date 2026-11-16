
# Diagnostic and Prerequisite-Repair Routes

This guide turns common mistakes into short repair sequences. It diagnoses mathematical preparation, not a reader's ability. Each route begins with an observable symptom, gives a minimal check, and points to stable chapter IDs. The book remains a draft, so these routes use chapter and heading names rather than page locators.

## Diagnostic protocol

When an argument fails, do not begin by adding algebra. Record:

1. the class of objects and its primitive data;
2. every hypothesis, including finiteness, simplicity, field, and objective;
3. the exact theorem conclusion;
4. the first unsupported transition;
5. either a certificate for that transition or a smallest counterexample.

A reader is ready to advance when they can state the repaired contract and solve the exit check without importing a stronger theorem.

## Repair 1: maximal is being confused with maximum

**Symptom.** The proof says that a feasible set is optimal because no element can be added.

**Minimal check.** On the three-vertex path, compare the maximal stable sets $\{\text{middle}\}$ and $\{\text{two endpoints}\}$. They have different sizes.

**Route.** Revisit “Independence systems and the exchange question” in `structural-reference-seed`, then Sections 1–3 of `independence-augmentation-cryptomorphisms`. Continue to equal-size bases in `bases-strong-exchange`.

**Exit check.** Given a subset $A$ of a matroid ground set, prove all inclusion-maximal independent subsets of $A$ have equal cardinality, and identify exactly where augmentation is used.

## Repair 2: augmentation is treated as universal

**Symptom.** From $|I|<|J|$, the proof adds a particular desired element of $J\setminus I$ without showing it works.

**Minimal check.** In a graphic matroid, choose forests for which one edge of $J\setminus I$ closes a cycle in $I$ while another joins components.

**Route.** Read augmentation in `independence-augmentation-cryptomorphisms`, fundamental circuits in `bases-strong-exchange`, and the “existential, not prescribed” warnings in `theorem-index-solutions`.

**Exit check.** State augmentation with “some,” then use a fundamental circuit to identify which exchanges are valid.

## Repair 3: an arbitrary hereditary rank is assumed submodular

**Symptom.** A maximum-feasible-size function is inserted into a rank proof merely because the family is closed under subsets.

**Minimal check.** Compute stable-set ranks for $A=\{a,b\}$ and $B=\{b,c\}$ in the path $a-b-c$.

**Route.** Review rank reconstruction and submodularity in `rank-submodularity-flats`, after repairing augmentation in `independence-augmentation-cryptomorphisms`.

**Exit check.** Prove diminishing rank gain from submodularity and explain why the path example blocks the same inference for a generic independence system.

## Repair 4: closure is being treated as ordinary set span

**Symptom.** The argument assumes $\operatorname{cl}(A)$ is linear span without a representation, or assumes an edge is in graphic closure only when it belongs to $A$.

**Route.** Read closure and flats in `rank-submodularity-flats`; compare the graphic interpretation in `graphic-cographic-matroids` with the linear interpretation in `linear-representability-fields`.

**Exit check.** State closure by zero rank gain, then derive its graphic and linear meanings from the relevant rank functions.

## Repair 5: circuit elimination returns the whole residual union

**Symptom.** The proof declares $(C_1\cup C_2)\setminus \{e\}$ to be a circuit.

**Minimal check.** Use three internally disjoint paths between the same two vertices. The residual union can contain a circuit plus extra edges.

**Route.** Read ordinary and strong elimination in `circuits-elimination-orthogonality`; revisit fundamental-circuit uniqueness in `bases-strong-exchange`.

**Exit check.** State that elimination produces some circuit contained in the residual union and say when a stronger protected-element conclusion is available.

## Repair 6: circuit–cocircuit “orthogonality” is read as disjointness

**Symptom.** A circuit and cocircuit meeting twice are declared impossible.

**Route.** Read the general non-singleton intersection theorem in `circuits-elimination-orthogonality`, then the cycle/bond realization in `graphic-cographic-matroids`. Only use a parity conclusion after verifying the binary hypothesis in `linear-representability-fields`.

**Exit check.** Give a triangle cycle and a two-edge bond, and distinguish “not exactly one” from “even.”

## Repair 7: graphic, cographic, and graph-theoretic independence are conflated

**Symptom.** Stable vertex sets or matchings are treated as independent sets of the graphic matroid.

**Route.** Revisit examples and nonexamples in `structural-reference-seed`; then read `graphic-cographic-matroids`. Use `uniform-partition-transversal` to see why a matching presentation can define a matroid only after one side is fixed as the selectable ground set.

**Exit check.** For one graph, separately list a stable vertex set, a matching, and an acyclic edge set, and state which family is the graphic matroid.

## Repair 8: a matrix is used without naming the field

**Symptom.** A determinant or dependence calculation is asserted to be field-independent.

**Minimal check.** Compare columns $(1,0),(0,1),(1,1),(1,-1)$ in characteristic two and in characteristic not two.

**Route.** Read `linear-representability-fields`, then the incidence-rank boundary in `designs-incidence-representability`. Use the field-sensitive audit in `structural-investigations` for exact practice.

**Exit check.** Name the field in every rank statement and explain which nonzero integer minors can vanish after reduction.

## Repair 9: representation is inferred from incidence

**Symptom.** Points and blocks form an incidence matrix, so the argument declares the associated abstract structure representable, or transfers a real-rank inequality modulo a prime.

**Route.** Read the last boundary section of `linear-representability-fields` and Sections 3–8 of `designs-incidence-representability`.

**Exit check.** Separate three assertions: an incidence matrix exists, its row rank has a stated value over a named field, and its columns represent a specified matroid. Prove each separately or withdraw it.

## Repair 10: deletion and contraction are manipulated as symbols

**Symptom.** Contraction is treated as deleting an element, graph loops are discarded silently, or duality identities are used without loop/coloop cases.

**Route.** Derive contraction from rank in `deletion-contraction-minors`; then read dual minor identities in `duality-sums-connectivity` and graphical operations in `graphic-cographic-matroids`.

**Exit check.** Compute $r_{M/e}(A)=r_M(A\cup \{e\})-r_M(\{e\})$ for a loop and nonloop, and reconcile both cases with the independent-set definition.

## Repair 11: connectivity terminology is missing its convention

**Symptom.** A set is called a $k$-separation without specifying the connectivity function, inequality, and minimum shore sizes.

**Route.** Read `duality-sums-connectivity`, especially its convention warning, then consult the theorem-key record for self-duality in `theorem-index-solutions`.

**Exit check.** Write the full definition in use and verify that complementing the shore changes no connectivity value.

## Repair 12: the wrong greedy objective is proved

**Symptom.** Negative elements are skipped in a basis problem, or accepted in an optional independent-set problem.

**Route.** Read the overview's objective distinction, then all of `weighted-greedy-objectives`. Use `basis-exchange-geometry` only after the objective and tie convention are fixed.

**Exit check.** Solve $U(2,2)$ with weights $1,-1$ under both objectives. The basis optimum uses both elements; the independent-set optimum uses only the positive one.

## Repair 13: local exchange is mistaken for simultaneous exchange

**Symptom.** Several individually valid swaps are performed at once without checking independence.

**Route.** Read strong and multiple exchange in `bases-strong-exchange`, then exchange matchings and rectangles in `basis-exchange-geometry`.

**Exit check.** State the exact quantifier order of the theorem being used. Provide a linear example where two individual swaps work but their simultaneous replacement is dependent.

## Repair 14: a symmetrization or compression is assumed safe

**Symptom.** “Make the object more regular” is offered as proof that a forbidden configuration remains absent.

**Route.** Read the cloning contract in `turan-symmetrization-stability` and the shift-preservation proof in `extremal-set-compression`. Compare the non-linear dependency architecture in `probabilistic-alteration-dependence`.

**Exit check.** Name a terminating potential and prove preservation of the precise forbidden property for one transformation.

## Repair 15: an extremal theorem has escaped its domain

**Symptom.** A simple-graph bound is applied to multigraphs, a uniform-intersection theorem is used when $n<2k$, or stability is reported as exact equality.

**Route.** Audit hypotheses in `turan-symmetrization-stability` and `extremal-set-compression`; use `ramsey-forcing-bounds` to practice distinguishing an upper bound from an equality.

**Exit check.** Construct a boundary example excluded by each missing hypothesis and restate the theorem with its full domain.

## Repair 16: probabilistic existence is reported too strongly

**Symptom.** $E[X]\le 1$ is used to prove an outcome with $X=0$, pairwise independence is substituted for a dependency-graph condition, or an existence proof is called an efficient construction.

**Route.** Read first moment and alteration in `probabilistic-alteration-dependence`, then the random-coloring bounds in `ramsey-forcing-bounds`.

**Exit check.** Explain why an integer-valued nonnegative $X$ with $E[X]<1$ must vanish somewhere, why equality is insufficient, and what additional data an algorithmic claim would require.

## Repair 17: design arithmetic is treated as existence

**Symptom.** Integrality of $r$ and $b$ is said to construct a $2-(v,k,\lambda)$ design.

**Route.** Read parameter equations, divisibility filters, and bounded enumeration in `designs-incidence-representability`.

**Exit check.** Label the equations $vr=bk$ and $r(k-1)=\lambda(v-1)$ as necessary conditions, then identify what a constructive or nonexistence proof must add.

## Repair 18: a computation is called exhaustive without a coverage proof

**Symptom.** A program returns no counterexample, but the candidate generator, canonicalizer, arithmetic, or bounds are unstated.

**Route.** Read `exact-axiom-enumeration`; apply its protocol in `structural-investigations`; use the final audit in `theorem-index-solutions`.

**Exit check.** Produce a specification record, coverage count, exact predicate justification, and independently checkable acceptance or rejection certificate.

## Route-selection table

| Need | Start | Continue | Synthesis |
|---|---|---|---|
| Axiom repair | `structural-reference-seed` | `independence-augmentation-cryptomorphisms` | `theorem-index-solutions` |
| Exchange proof | `bases-strong-exchange` | `basis-exchange-geometry` | `weighted-greedy-objectives` |
| Rank/closure proof | `rank-submodularity-flats` | `deletion-contraction-minors` | `duality-sums-connectivity` |
| Circuit/cut proof | `circuits-elimination-orthogonality` | `graphic-cographic-matroids` | `structural-investigations` |
| Representation proof | `linear-representability-fields` | `designs-incidence-representability` | field-sensitive investigation |
| Model-family example | `uniform-partition-transversal` | `weighted-greedy-objectives` | exact enumeration |
| Extremal graph proof | `turan-symmetrization-stability` | `ramsey-forcing-bounds` | probabilistic chapter |
| Set-family proof | `extremal-set-compression` | `designs-incidence-representability` | compression investigation |
| Computer-assisted proof | `exact-axiom-enumeration` | `structural-investigations` | `theorem-index-solutions` |

## Accessible use

The symptoms, checks, and exits are complete in text. A future flowchart may visualize them, but arrows must be duplicated as an ordered adjacency list or table. A diagnostic interface must expose keyboard-operable controls, announce the selected route, preserve focus, and provide error messages in text rather than color alone. This guide does not claim that the present draft has undergone assistive-technology testing in a rendered book.
