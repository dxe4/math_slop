var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: theorem-index-solutions
title: "Theorem Dependencies, Counterexample Index, and Solutions"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Theorem Dependencies, Counterexample Index, and Solutions {#section-1-theorem-dependencies-counterexample-index-and-solutions}

This back-matter chapter is a navigation and proof-repair instrument for the whole volume. It records which results depend on which hypotheses, where the standard analogies fail, and how to assemble ideas from several chapters into one argument. It is deliberately not a substitute for reading the proofs in their home chapters. A dependency arrow means “uses substantially,” not merely “mentions.”

The volume is still a manuscript. The keys below are readable, stable metadata candidates, but they are **not** a finished production index. Page locators require a reproducible print build; historical notes require a separately audited bibliography; and alternate terminology still needs editorial reconciliation. No page number, final cross-reference, or completed reference apparatus is claimed here.

<a id="section-5-prerequisites-and-scope"></a>
## Prerequisites and scope {#section-7-prerequisites-and-scope}

The direct prerequisite is \`structural-investigations\`; because this is cumulative back matter, it also assumes the definitions and principal theorem contracts of the preceding nineteen chapters. A reader who has not completed that route can still use the dependency table as a repair map, beginning with \`structural-reference-seed\` and then following only incoming dependencies. Elementary prerequisites are finite sets, proof by induction and contradiction, graph paths and cycles, elementary linear algebra over a named field, binomial coefficients, and expectation for finite probability spaces.

This chapter proves every displayed synthesis solution, but it usually indexes rather than reproves the volume’s main theorems. The theorem key identifies a statement and its scope.

<a id="section-11-how-to-use-this-chapter"></a>
## How to use this chapter {#section-13-how-to-use-this-chapter}

There are three useful entry routes.

1. **Repair a proof.** Find the claimed theorem in the dependency map. Check that every incoming hypothesis is available, then consult the counterexample index for the failure produced by dropping one.
2. **Choose a method.** Start from the proof-strategy guide. Reduce the problem to an exchange, rank, circuit, extremal, probabilistic, compression, or exact-certificate question before calculating.
3. **Test mastery.** Attempt a synthesis problem without its solution. A complete solution should identify the theorem contract, verify its hypotheses, perform the argument, and state what the conclusion does not say.

Throughout, $M=(E,I)$ is a finite matroid, $r$ is its rank function, $cl$ is closure, $M^{*}$ is the dual, and $M|A$, $M\\setminus e$, and $M/e$ denote restriction, deletion, and contraction. A graph may have loops and parallel edges unless “simple” is stated. All fields are named when representability depends on the field.

<a id="a-the-twenty-chapter-dependency-map"></a>

<a id="section-23-a-the-chapter-dependency-map"></a>
## A. The chapter dependency map {#section-25-a-the-chapter-dependency-map}

The following table retains the earlier structural-reference and chapter locators and adds the current probabilistic entry chapter. “Core output” names the result package exported to later chapters. “Depends on” lists only load-bearing predecessors in this volume; ordinary finite-set reasoning and elementary linear algebra remain standing prerequisites.

| Chapter ID | Core output | Depends on | Used substantially by |
|---|---|---|---|
| \`probabilistic-extremal-methods\` | finite averaging; quantitative triangle excess; conditional expectation; alteration; random-order stable sets | first-course discrete mathematics and finite probability | Turán, Ramsey, alteration, set-system chapters |
| \`structural-reference-seed\` | independence systems; first exchange, rank, circuit, greedy, minor, dual, and extremal contracts | none | every thematic part as a common vocabulary repair |
| \`independence-augmentation-cryptomorphisms\` | augmentation; equal-size bases; independence–basis–rank cryptomorphisms | \`structural-reference-seed\` | exchange, rank, circuits, examples, greedy, enumeration |
| \`bases-strong-exchange\` | basis exchange; fundamental circuits; strong single-element exchange; exchange matching | independence cryptomorphisms | duality, greedy, basis graphs, circuit arguments |
| \`rank-submodularity-flats\` | rank axioms; submodularity; closure; flats; closure exchange | bases and augmentation | minors, connectivity, greedy, compression analogies, exact certificates |
| \`circuits-elimination-orthogonality\` | circuit axioms; ordinary and strong elimination; circuit–cocircuit non-singleton intersection | bases, rank, closure | graphic/cographic theory, minors, duality, exact axiom checking |
| \`graphic-cographic-matroids\` | cycle matroids; bonds as cocircuits; fundamental cycles/cuts; plane-dual scope | circuits and duality vocabulary | minors, connectivity, representability examples, investigations |
| \`linear-representability-fields\` | column matroids; field-sensitive dependence; dual matrices; representability boundaries | rank, circuits | minors, designs, exact certificates, investigations |
| \`uniform-partition-transversal\` | three model families; capacity rank; matching presentation; Hall-type boundary | augmentation and matching theory | greedy examples, minor examples, enumeration, investigations |
| \`deletion-contraction-minors\` | deletion/contraction ranks; minor commutation; circuit behavior; recurrence pattern | graphic/cographic and linear examples | sums/connectivity, exact enumeration, structural investigations |
| \`duality-sums-connectivity\` | dual rank; circuit–cocircuit exchange; direct sums; separations and connectivity | minors, circuits, bases | basis geometry, structural investigations, final synthesis |
| \`weighted-greedy-objectives\` | maximum-weight basis theorem; independent-set sign contract; greedy converse | bases and rank | basis geometry, exact certificates, investigations |
| \`basis-exchange-geometry\` | connected basis-exchange graph; weighted orientations; local-to-global exchange certificates | greedy, basis exchange, duality/connectivity | investigations and synthesis solutions |
| \`turan-symmetrization-stability\` | clique-free edge bound; extremal equality architecture; stability viewpoint | structural seed and graph counting | Ramsey comparison, probabilistic constructions, set compression |
| \`ramsey-forcing-bounds\` | recursive upper bounds; coloring/graph complement translation; constructive lower-bound logic | Turán-style extremal reasoning | probabilistic alteration and investigations |
| \`probabilistic-alteration-dependence\` | first moment; deletion/alteration; dependency-aware scope | Ramsey forcing and counting | extremal constructions, investigations, synthesis |
| \`extremal-set-compression\` | shifts; size preservation; property-preservation obligation; shadows and canonical families | extremal reasoning and rank-like submodularity intuition | designs, investigations, synthesis |
| \`designs-incidence-representability\` | parameter equations; incidence matrices; divisibility and representation limits | linear representation and extremal set systems | structural investigations and synthesis |
| \`exact-axiom-enumeration\` | finite axiom verifier; minimal witnesses; canonical certificates; exhaustive objective comparison | circuits and greedy | structural investigations and reproducible checks |
| \`structural-investigations\` | six cumulative projects joining theorem proof with bounded experiment | designs and exact enumeration, with all thematic strands | this solution and navigation chapter |
| \`theorem-index-solutions\` | dependency graph; claim-boundary index; glossary; complete synthesis solutions | the investigations and all results indexed above | future revision, teaching, and production indexing |

<a id="section-51-dependency-chains-worth-memorizing"></a>
### Dependency chains worth memorizing {#section-53-dependency-chains-worth-memorizing}

The **matroid axiom chain** is

$augmentation \\to equal\\text{-}size\\ bases \\to rank \\to submodularity \\to closure$,

with basis exchange and circuit elimination providing alternative routes through the same structure. Do not reverse an arrow merely because the result feels geometrically plausible. A rank-like function on a hereditary family need not be submodular, and a collection called “circuits” need not satisfy elimination.

The **optimization chain** is

$augmentation \\to exchangeable\\ bases \\to greedy\\ optimality \\text{ for every weight vector}$.

The converse is important: universal descending-greedy correctness is strong enough to recover matroid exchange. Greedy success on a few examples is evidence about those instances, not a structural theorem.

The **extremal chain** is less linear:

$counting + a\\ preserved\\ forbidden\\ property + a\\ monotone\\ potential \\to canonical\\ extremizer$,

while probabilistic construction follows

$random\\ object \\to expected\\ objective \\text{ and defects} \\to alteration \\to deterministic\\ existence$.

Neither chain permits a heuristic step to masquerade as a theorem. A symmetrization must preserve the forbidden condition; a shift must preserve the relevant intersection condition; an alteration must bound how much objective is destroyed.

<a id="section-75-b-theorem-keys-and-index-ready-records"></a>
## B. Theorem keys and index-ready records {#section-77-b-theorem-keys-and-index-ready-records}

Each record has a proposed key, a search heading, a precise contract, and the most common illegal strengthening. These records are suitable raw material for a future concept/theorem index, but they do not constitute that production index.

**THM-MAT-AUG — Matroid augmentation.** For finite independent sets $I,J$ with $|I|<|J|$, some element of $J\\setminus I$ augments $I$. It does not say every such element works.

**THM-MAT-BASESIZE — Equal-size bases of a restriction.** Every inclusion-maximal independent subset of a fixed $A\\subseteq E$ has size $r(A)$. This conclusion fails in general hereditary systems.

**THM-MAT-BASEX — Basis exchange.** For bases $B_1,B_2$ and $e\\in B_1\\setminus B_2$, at least one $f\\in B_2\\setminus B_1$ makes $B_1-e+f$ a basis. A compatible choice for each individual $e$ does not by itself prove that all swaps can be made simultaneously.

**THM-MAT-RANKSUB — Rank submodularity.** For all $A,B\\subseteq E$, $r(A\\cup B)+r(A\\cap B)\\le r(A)+r(B)$. The theorem concerns matroid rank, not arbitrary maximum-feasible-size functions.

**THM-MAT-CLOSUREX — Closure exchange.** If $y\\in \\operatorname{cl}(X+x)\\setminus \\operatorname{cl}(X)$, then $x\\in \\operatorname{cl}(X+y)$. Finiteness is built into this volume’s development; infinite-matroid closure requires its own foundations.

**THM-MAT-CIRELIM — Circuit elimination.** Distinct circuits sharing $e$ have some circuit inside their union with $e$ removed. The whole residual union need not be a circuit, and the output need not be unique.

**THM-MAT-ORTH — Circuit–cocircuit orthogonality.** A circuit and cocircuit cannot intersect in exactly one element. They may be disjoint or meet in two or more elements.

**THM-MAT-DUALRANK — Dual rank.** $r^{*}(A)=|A|-r(E)+r(E\\setminus A)$. The complement is taken in the fixed ground set $E$.

**THM-MAT-GREEDY — Weighted basis greedy theorem.** Descending greedy, continued until a basis is reached, maximizes total weight over bases for arbitrary real weights. For optimization over all independent sets, negative elements must be skipped; the two objectives are different.

**THM-MAT-GREEDY-CONV — Greedy converse.** A finite hereditary system on which the standard descending scan maximizes weight over independent sets for every nonnegative weight assignment and every compatible tie order satisfies matroid augmentation. Universal quantification over weights and tie orders is essential.

**THM-MAT-BASEDIST — Basis-graph distance.** If basis-graph edges are valid one-element exchanges, then $d(B,C)=|B\\setminus C|$. In particular, the basis graph is connected. Its diameter can be strictly smaller than the matroid rank when some elements are forced into every basis.

**THM-MAT-CONNDUAL — Self-duality of connectivity.** For $\\lambda_M(X)=r_M(X)+r_M(E\\setminus X)-r_M(E)$, one has $\\lambda_{M^{*}}(X)=\\lambda_M(X)$. Any terminology for $k$-separations must still declare its shore-size convention.

**THM-GRAPH-RANK — Graphic rank.** For a graph on fixed vertex set $V$, $r(A)=|V|-c(A)$, counting isolated vertices in $c(A)$. Deleting isolated vertices changes the displayed formula’s convention.

**THM-GRAPH-PLANE-DUAL — Plane cycle–bond correspondence.** For a connected plane multigraph under a fixed embedding, primal cycles correspond to dual bonds and complements of primal spanning trees correspond to dual spanning trees. An abstract nonplanar graph has no such plane dual, although its matroid always has an abstract dual.

**THM-LIN-REP — Matrix representation.** Column independence over a named field defines a matroid. Row operations and nonzero column scalings preserve it; arbitrary column additions need not.

**THM-TRANS-HALL — Transversal independence.** A partial transversal is a set matchable to distinct presentation blocks. Hall’s inequalities characterize matchability for the specified bipartite presentation; they do not turn arbitrary graph matchings into matroid elements without fixing which side is the ground set.

**THM-MINOR-DUAL — Duality of minors.** $(M\\setminus e)^{*}=M^{*}/e$ and $(M/e)^{*}=M^{*}\\setminus e$, with loop and coloop cases interpreted through rank rather than informal contraction pictures.

**THM-TURAN-K3 — Triangle-free edge bound.** A simple triangle-free graph on $n$ vertices has at most $\\lfloor n^2/4\\rfloor$ edges, with complete bipartite extremizers. Multigraphs are outside this statement.

**THM-RAMSEY-REC — Ramsey recursion.** $R(s,t)\\le R(s-1,t)+R(s,t-1)$ for integers $s,t\\ge 2$, with the standard two-color complete-graph definition. This is an upper bound, not generally an equality.

**THM-PROB-FIRST — First-moment existence.** A nonnegative integer-valued random variable $X$ with $E[X]<1$ is zero for some outcome. An expectation merely equal to one gives no such conclusion.

**THM-COMP-SHIFT — Shift preservation contract.** A specified compression preserves cardinality and must separately be proved to preserve the property under study. There is no theorem saying every compression preserves every intersection or avoidance property.

**THM-SET-INTERSECT — Uniform intersecting-family bound.** If $n\\ge 2k$ and $F$ is an intersecting subfamily of the $k$-subsets of an $n$-set, then $|F|\\le \\binom{n-1}{k-1}$. The range condition is load-bearing; for $n<2k$, the entire level is intersecting.

**THM-DESIGN-PARAM — Block-design parameter equations.** In a $2-(v,k,\\lambda)$ design with replication number $r$ and $b$ blocks, $vr=bk$ and $r(k-1)=\\lambda(v-1)$. These necessary integrality conditions are not sufficient for existence.

**THM-DESIGN-INCIDENCE — Design incidence rank bound.** A $2-(v,k,\\lambda)$ design with $\\lambda>0$ and $1<k<v$ has at least $v$ blocks. The standard proof computes the real Gram matrix of the incidence matrix; reducing that proof modulo a prime needs a new rank audit.

**THM-ENUM-CANON — Canonical relabeling certificate.** Taking the lexicographically least encoding over all ground-set permutations gives equal canonical forms exactly for isomorphic finite set families, provided every permutation is actually searched. A hash alone is not the canonical object.

<a id="section-129-proposed-concept-locator-records"></a>
### Proposed concept locator records {#section-131-proposed-concept-locator-records}

These alphabetized records attach a preferred search term to a home chapter and nearby terms. They are index-ready source data, not page-numbered entries.

| Preferred concept | Home chapter ID | See also |
|---|---|---|
| alteration | \`probabilistic-alteration-dependence\` | first moment; defect deletion; random construction |
| augmentation | \`independence-augmentation-cryptomorphisms\` | heredity; basis; exchange witness |
| basis exchange graph | \`basis-exchange-geometry\` | distance; interval; weighted orientation |
| block design | \`designs-incidence-representability\` | incidence matrix; replication; divisibility |
| bond | \`graphic-cographic-matroids\` | cocircuit; cut; plane duality |
| circuit elimination | \`circuits-elimination-orthogonality\` | minimal dependence; fundamental circuit; cocircuit |
| closure | \`rank-submodularity-flats\` | flat; span; rank-neutral extension |
| compression | \`extremal-set-compression\` | shift; shadow; intersecting family |
| contraction | \`deletion-contraction-minors\` | deletion; minor; rank formula |
| cryptomorphism | \`independence-augmentation-cryptomorphisms\` | independence axioms; basis axioms; rank axioms |
| dual matroid | \`duality-sums-connectivity\` | complementary basis; cocircuit; dual rank |
| exact certificate | \`exact-axiom-enumeration\` | canonical encoding; minimal witness; bounded proof |
| field dependence | \`linear-representability-fields\` | characteristic; determinant; representation |
| greedy objective | \`weighted-greedy-objectives\` | basis objective; optional selection; exchange certificate |
| matroid connectivity | \`duality-sums-connectivity\` | direct sum; separation; connectivity function |
| probabilistic construction | \`probabilistic-alteration-dependence\` | expectation; dependency; alteration |
| Ramsey forcing | \`ramsey-forcing-bounds\` | recursive bound; avoiding coloring; complement |
| rank submodularity | \`rank-submodularity-flats\` | diminishing returns; closure; modular pair |
| transversal matroid | \`uniform-partition-transversal\` | Hall condition; partial transversal; deficiency |
| Turán symmetrization | \`turan-symmetrization-stability\` | clique-free graph; equality; stability |

<a id="section-156-c-counterexample-and-claim-boundary-index"></a>
## C. Counterexample and claim-boundary index {#section-158-c-counterexample-and-claim-boundary-index}

| Tempting claim | Small witness or boundary | Correct lesson |
|---|---|---|
| Every hereditary family is a matroid. | Stable vertex sets of the path $a-b-c$: $\\{b\\}$ is maximal of size one, $\\{a,c\\}$ is maximal of size two. | Heredity does not imply augmentation. |
| Every element of $J\\setminus I$ augments the smaller independent set. | In a graph on vertices $1,\\ldots ,5$, let $I=\\{12,23\\}$ and let the forest $J=\\{13,34,45\\}$. Then $|I|<|J|$; edge $13$ closes a triangle with $I$, while $34$ augments $I$. | Augmentation is existential. |
| Two individually valid exchanges can be performed together. | Over the reals, let $B=\\{a,b\\}$ with $a=(1,0), b=(0,1)$, and let $c=(1,1), d=(2,2)$. Both $B-a+c$ and $B-b+d$ are bases, but $\\{c,d\\}$ is dependent. | Simultaneous exchange needs a separate theorem and proof. |
| The maximum feasible-size function of any independence system is submodular. | Stable sets on $P_3$: take $A=\\{a,b\\}$, $B=\\{b,c\\}$; ranks are $1,1$, intersection rank $1$, union rank $2$, so $2+1>1+1$. | Rank submodularity is matroid structure. |
| The residual union in circuit elimination is itself a circuit. | Let $P,Q,R$ be three internally disjoint paths from $u$ to $v$, with $P$ of length at least two. The circuits $P\\cup Q$ and $P\\cup R$ share $e\\in P$; after deleting $e$, the residual union contains the cycle $Q\\cup R$ together with the extra path pieces $P-e$, so it is not a circuit. | Elimination promises a contained circuit. |
| A circuit and cocircuit never meet. | In a triangle’s cycle matroid, the three-edge circuit meets a two-edge bond in two edges. | Only singleton intersection is forbidden. |
| All graph independence notions are matroidal. | Matchings on a three-edge path have maximal sizes one and two. | Graphic matroid independence means acyclicity of edge sets. |
| A matrix represents the same matroid over every field. | Columns $(1,0),(0,1),(1,1),(1,-1)$ have the last pair dependent in characteristic two but independent otherwise. | The field is part of the data. |
| Every abstract matroid is linearly representable. | The theory contains nonrepresentable matroids; representability must be proved, not inferred from rank notation. | Linear language is a model, not a universal coordinate system. |
| Greedy over all independent sets should accept negative weights. | One nonloop element of weight $-1$: the empty set has weight zero. | Skip negative weights for the independent-set objective. |
| Greedy for bases should stop before negative weights. | In $U(2,2)$ with weights $1,-1$, the only basis uses both elements. | A basis objective requires full rank. |
| A graph’s matroid determines the graph up to isomorphism. | Different graphs related through two-vertex-separation flips can share a cycle matroid. | Graphic representation forgets embedding and some incidence data. |
| Graph contraction is always literal endpoint identification without cleanup conventions. | Contracting one edge of a parallel pair creates a graph loop; matroid contraction retains the corresponding loop behavior. | State loop/parallel conventions or use rank. |
| Ramsey recursion gives exact Ramsey numbers. | The recursion repeatedly yields valid but often nonsharp upper bounds. | Direction and sharpness are part of a theorem’s contract. |
| Expected number of defects below one means every outcome is defect-free. | A random variable can be positive on some outcomes while having expectation below one. | First moment proves existence of at least one good outcome. |
| Necessary design divisibility conditions ensure a design exists. | Parameter equations only count incidences; they do not construct compatible blocks. | Arithmetic feasibility is not combinatorial existence. |
| Exhaustive verification on ground size eight proves an axiom for all sizes. | The output covers exactly the enumerated finite domain. | A computation is a bounded certificate unless joined to a general proof. |

<a id="section-178-d-notation-and-glossary-support"></a>
## D. Notation and glossary support {#section-180-d-notation-and-glossary-support}

**Basis versus base.** This volume uses **basis** for a maximal independent set; plural **bases**. A basis of $A$ means a basis in the restriction $M|A$, not necessarily a basis of $E$.

**Circuit and cocircuit.** A circuit is a minimal dependent set of $M$; a cocircuit is a circuit of $M^{*}$. In a graphic matroid, circuits are cycles and cocircuits are bonds.

**Closure and flat.** $\\operatorname{cl}(A)=\\{e:r(A+e)=r(A)\\}$. A flat satisfies $\\operatorname{cl}(F)=F$. The symbols $A+e$ and $A-e$ abbreviate $A\\cup \\{e\\}$ and $A\\setminus \\{e\\}$ only when no ambiguity results.

**Loop, coloop, and parallel elements.** A loop has rank zero as a singleton. A coloop belongs to every basis. Distinct nonloops are parallel when they form a two-element circuit.

**Restriction, deletion, contraction.** $M|A$ keeps ground set $A$. For one element, deletion is $M\\setminus e$; contraction is $M/e$. These are not set subtraction and numerical division.

**Representation.** $M_F(A)$ is the column matroid of matrix $A$ over field $F$. A column label is a ground element, so repeated vectors are still distinct elements.

**Graph conventions.** $c_G(A)$ counts components of $(V(G),A)$, including isolated vertices. $\\delta(X)$ is the cut consisting of edges with exactly one endpoint in $X$; a bond is an inclusion-minimal nonempty cut.

**Extremal notation.** $K_t$ is the complete graph on $t$ vertices; $R(s,t)$ is the least $n$ forcing a red $K_s$ or blue $K_t$ in every red-blue coloring of $K_n$. $\\binom{X}{k}$ denotes the family of $k$-subsets of $X$, while $\\binom{n}{k}$ is its cardinality when $|X|=n$.

**Design notation.** A $2-(v,k,\\lambda)$ design has $v$ points, blocks of size $k$, and exactly $\\lambda$ blocks through each pair of distinct points. The replication number $r$ and block count $b$ are derived parameters unless supplied consistently.

**Certificate.** A certificate is finite data whose stated property can be checked directly: an exchange witness, a circuit, a matching, a coloring, a branch of an enumeration, or an incidence table. A certificate for one instance is not a proof of a universal theorem.

<a id="section-200-e-choosing-a-proof-strategy"></a>
## E. Choosing a proof strategy {#section-202-e-choosing-a-proof-strategy}

Ask first what the primitive data make cheap.

- With an **independence oracle**, try augmentation, extension to bases, and a minimal counterexample.
- With **bases**, add an outside element to create a fundamental circuit and exchange along it.
- With **rank values**, use submodularity, marginal gains, and the dual-rank formula.
- With **circuits**, choose a minimal dependent subset and eliminate a carefully selected common element.
- With a **matrix**, translate closure to span and circuits to minimal-support kernel vectors, but name the field.
- With a **graph**, translate rank to components, circuits to cycles, and cocircuits to bonds.
- With a **forbidden configuration**, decide whether averaging, induction, symmetrization, complement, or compression preserves the prohibition.
- With a **random construction**, define both reward and defects, compute expectations separately, and bound the loss caused by repair.
- With a **small exact instance**, define a canonical encoding and emit a minimal witness rather than a bare Boolean result.

A robust proof normally has four visible stages: identify the theorem contract, verify the hypotheses, apply the structural step, and interpret the conclusion at its true strength.

<a id="section-216-f-synthesis-problems-with-complete-solutions"></a>
## F. Synthesis problems with complete solutions {#section-218-f-synthesis-problems-with-complete-solutions}

<a id="section-218-problem-1-diagnose-augmentation-and-greedy-failure"></a>
### Problem 1 — Diagnose augmentation and greedy failure {#section-220-problem-1-diagnose-augmentation-and-greedy-failure}

Let feasible subsets be stable vertex sets of the path $a-b-c$. With weights $w(a)=w(c)=3$ and $w(b)=5$, find an augmentation witness and compare descending greedy with the optimum.

**Solution.** The feasible sets include $I=\\{b\\}$ and $J=\\{a,c\\}$. They satisfy $|I|=1<2=|J|$, but $I+a$ and $I+c$ each contain an edge, so neither is feasible. Thus $(I,J)$ is an explicit augmentation failure.

Descending greedy considers $b$ first because weight five is largest and accepts it. Both remaining vertices conflict with $b$, so greedy stops with weight $5$. Exhaustive comparison gives weights $0,3,5,3,6$ for $\\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{a,c\\}$; the optimum is $\\{a,c\\}$ of weight $6$. The calculation illustrates the greedy converse but does not by itself prove that every nonmatroid weight assignment fails—only that this one does.

<a id="section-226-problem-2-reconstruct-a-matroid-from-a-rank-table"></a>
### Problem 2 — Reconstruct a matroid from a rank table {#section-228-problem-2-reconstruct-a-matroid-from-a-rank-table}

On $E=\\{1,2,3\\}$, define $r(A)=\\min(2,|A|)$. Recover the independent sets, bases, circuits, closure of $\\{1\\}$, and flats.

**Solution.** A set is independent when $r(A)=|A|$. Hence every set of size zero, one, or two is independent, while $E$ is dependent. The bases are the three two-element sets. The only circuit is $E$, since it is dependent and all proper subsets are independent.

For $A=\\{1\\}$, adding $2$ or $3$ raises rank from one to two, so $\\operatorname{cl}(\\{1\\})=\\{1\\}$. Every set of size below two is closed: the empty set has closure empty, and a singleton has itself as closure. Any two-element set has rank two, and the remaining element does not raise rank, so its closure is $E$. Therefore the flats are $\\varnothing$, the three singletons, and $E$; two-element sets are not flats. This is the uniform matroid $U(2,3)$.

<a id="section-234-problem-3-use-submodularity-to-disprove-a-matroid-claim"></a>
### Problem 3 — Use submodularity to disprove a matroid claim {#section-236-problem-3-use-submodularity-to-disprove-a-matroid-claim}

The stable sets of $P_3$ form a hereditary family. Let $\\rho(A)$ be the largest size of a stable subset of $A$. Show directly that $\\rho$ is not submodular.

**Solution.** Take $A=\\{a,b\\}$ and $B=\\{b,c\\}$. Each induced edge has stability number one, so $\\rho(A)=\\rho(B)=1$. Their intersection is $\\{b\\}$, with $\\rho(A\\cap B)=1$. Their union is the whole path, whose stable set $\\{a,c\\}$ has size two, so $\\rho(A\\cup B)=2$. Submodularity would require

$\\rho(A\\cup B)+\\rho(A\\cap B)\\le \\rho(A)+\\rho(B)$,

or $2+1\\le 1+1$, which is false. Thus the maximum-feasible-size function of this hereditary system cannot be matroid rank.

<a id="section-244-problem-4-fundamental-circuits-locate-valid-exchanges"></a>
### Problem 4 — Fundamental circuits locate valid exchanges {#section-246-problem-4-fundamental-circuits-locate-valid-exchanges}

In the cycle matroid of the square with diagonal $13$, let $T=\\{12,23,34\\}$ and add edge $41$. Find the fundamental circuit and all basis exchanges that remove an edge from it.

**Solution.** The set $T$ is a spanning tree. In $T+41$, the unique cycle is

$C(41,T)=\\{12,23,34,41\\}$.

Deleting any edge of $C(41,T)-\\{41\\}$ breaks that cycle while leaving three edges connecting all four vertices. Thus

$T-12+41$, $T-23+41$, and $T-34+41$

are bases. No assertion is made about deleting an edge outside the fundamental circuit: in this example $T$ has no such edge, but in a larger tree deleting an off-cycle edge would disconnect the graph while the cycle remained.

<a id="section-258-problem-5-circuit-elimination-is-an-existence-statement"></a>
### Problem 5 — Circuit elimination is an existence statement {#section-260-problem-5-circuit-elimination-is-an-existence-statement}

In a graph with triangles on edges $\\{12,23,13\\}$ and $\\{13,34,14\\}$, eliminate the common edge $13$.

**Solution.** Removing $13$ from the union leaves $\\{12,23,34,14\\}$, the four-cycle $1-2-3-4-1$. It is a circuit, so it is a valid elimination output. The proof uses the fact that both original edge sets are circuits and share $13$. In a graph with extra shared paths or chords, the residual union might contain several circuits and need not itself be minimal; the theorem would then select a contained cycle.

<a id="section-264-problem-6-compute-a-graphic-rank-closure-and-cocircuit"></a>
### Problem 6 — Compute a graphic rank, closure, and cocircuit {#section-266-problem-6-compute-a-graphic-rank-closure-and-cocircuit}

Let $G$ be a triangle $123$ with a tail edge $34$. Put $A=\\{12,23\\}$. Compute $r(E)$, $r(A)$, $\\operatorname{cl}(A)$, and identify a cocircuit of size one.

**Solution.** The graph is connected on four vertices, so $r(E)=4-1=3$. In $(V,A)$, vertices $1,2,3$ form one component and $4$ is isolated; hence $r(A)=4-2=2$. Edge $13$ has endpoints already connected by $1-2-3$, so it does not raise rank. Edge $34$ joins the isolated vertex to the other component and does raise rank. Therefore $\\operatorname{cl}(A)=\\{12,23,13\\}$.

The tail $34$ is a bridge. Its singleton is an inclusion-minimal nonempty cut, hence a bond and therefore a cocircuit of the graphic matroid. Equivalently, $34$ is a coloop and its singleton is a circuit of the dual.

<a id="section-272-problem-7-detect-dependence-on-the-field"></a>
### Problem 7 — Detect dependence on the field {#section-274-problem-7-detect-dependence-on-the-field}

Consider columns $a=(1,0)$, $b=(0,1)$, $c=(1,1)$, and $d=(1,-1)$. Compare the pairs $\\{c,d\\}$ over the real field and over $F_2$.

**Solution.** Over the reals, the determinant of the matrix with columns $c,d$ is

$det[[1,1],[1,-1]]=-2$,

which is nonzero, so $\\{c,d\\}$ is independent. Over $F_2$, $-1=1$, so $d=(1,1)=c$. The two labeled columns are parallel and $\\{c,d\\}$ is a circuit. Consequently the entire labeled matrix defines different matroids over the two fields. The labels remain distinct even when the vectors coincide.

<a id="section-282-problem-8-verify-a-transversal-by-hall-s-condition"></a>
### Problem 8 — Verify a transversal by Hall’s condition {#section-284-problem-8-verify-a-transversal-by-hall-s-condition}

Let ground elements $x,y,z$ be adjacent to presentation blocks as follows: $N(x)=\\{1,2\\}$, $N(y)=\\{2\\}$, $N(z)=\\{2,3\\}$. Is $\\{x,y,z\\}$ a partial transversal? Give a matching certificate.

**Solution.** Hall’s condition must be checked for every subset. Singletons have nonempty neighborhoods. For pairs, $N(\\{x,y\\})=\\{1,2\\}$, $N(\\{y,z\\})=\\{2,3\\}$, and $N(\\{x,z\\})=\\{1,2,3\\}$, all of size at least two. The whole set has neighborhood $\\{1,2,3\\}$ of size three. Therefore a matching saturating the ground elements exists. One certificate is

$x \\to 1,\\ y \\to 2,\\ z \\to 3$.

This proves independence in the transversal matroid presented by this bipartite graph. It does not claim that all matchings of an arbitrary graph form a matroid on graph edges.

<a id="section-292-problem-9-apply-deletion-contraction-and-dual-rank"></a>
### Problem 9 — Apply deletion, contraction, and dual rank {#section-294-problem-9-apply-deletion-contraction-and-dual-rank}

For $M=U(2,4)$ on $E=\\{1,2,3,4\\}$, compute $M\\setminus 4$, $M/4$, and $r^{*}(\\{1,2,3\\})$.

**Solution.** Deletion simply removes $4$; subsets of the remaining three elements are independent up to size two, so $M\\setminus 4=U(2,3)$. Element $4$ is a nonloop. Contraction uses

$r_{M/4}(A)=r_M(A+4)-r_M(\\{4\\})=\\min(2,|A|+1)-1$.

This equals $\\min(1,|A|)$, so $M/4=U(1,3)$.

For $A=\\{1,2,3\\}$, the dual-rank formula gives

$r^{*}(A)=|A|-r(E)+r(E\\setminus A)=3-2+r(\\{4\\})=2$.

Indeed $U(2,4)$ is self-dual, so a three-element subset has dual rank two.

<a id="section-308-problem-10-separate-the-two-greedy-objectives"></a>
### Problem 10 — Separate the two greedy objectives {#section-310-problem-10-separate-the-two-greedy-objectives}

In $U(2,3)$, let weights be $w(a)=4$, $w(b)=-1$, and $w(c)=-3$. Find an optimum basis and an optimum independent set.

**Solution.** Every two-element set is a basis. Their weights are $3$ for $\\{a,b\\}$, $1$ for $\\{a,c\\}$, and $-4$ for $\\{b,c\\}$, so the maximum-weight basis is $\\{a,b\\}$. Basis greedy scans $a,b,c$, accepts $a$ and then $b$, and stops at rank two.

For optimization over all independent sets, negative elements should be skipped. The set $\\{a\\}$ has weight four, exceeding every basis and every other independent set. Thus $\\{a\\}$ is the maximum-weight independent set. Saying merely “greedy accepts in descending order” is incomplete until the feasible objective—basis or arbitrary independent set—is named.

<a id="section-316-problem-11-prove-connectivity-of-a-basis-exchange-graph"></a>
### Problem 11 — Prove connectivity of a basis-exchange graph {#section-318-problem-11-prove-connectivity-of-a-basis-exchange-graph}

Vertices of the basis-exchange graph are bases of a finite matroid; two are adjacent when their symmetric difference has size two. Prove that the graph is connected.

**Solution.** Take bases $B$ and $C$. If they are equal there is nothing to prove. Otherwise choose $e\\in B\\setminus C$. Basis exchange gives $f\\in C\\setminus B$ such that $B'=B-e+f$ is a basis. The bases $B$ and $B'$ are adjacent. Moreover

$|B'\\setminus C|=|B\\setminus C|-1$,

because the removed element was outside $C$ and the inserted element lies in $C$. Repeating decreases the nonnegative integer $|B\\setminus C|$ at every step, so after finitely many adjacent exchanges the current basis is $C$. This proves connectedness and gives a path of length at most $|B\\setminus C|$.

<a id="section-326-problem-12-derive-the-triangle-free-edge-bound"></a>
### Problem 12 — Derive the triangle-free edge bound {#section-328-problem-12-derive-the-triangle-free-edge-bound}

Let $G$ be a simple triangle-free graph with $n$ vertices and $m$ edges. Prove $m\\le n^2/4$ using degrees and an edgewise inequality.

**Solution.** For every edge $uv$, the neighborhoods of $u$ and $v$ are disjoint: a common neighbor would form a triangle. Both neighborhoods lie in the $n$-vertex set, so

$d(u)+d(v)\\le n$.

Sum this over all edges. The left side is $\\sum_v d(v)^2$, because vertex $v$ contributes $d(v)$ once for each of its $d(v)$ incident edges. Hence

$\\sum_v d(v)^2\\le mn$.

By Cauchy–Schwarz and the handshake lemma,

$(2m)^2=(\\sum_v d(v))^2\\le n \\sum_v d(v)^2\\le n^2m$.

If $m=0$ the result is immediate; otherwise divide by $m$ to get $4m\\le n^2$. Since $m$ is an integer, $m\\le \\lfloor n^2/4\\rfloor$. Complete bipartite graphs with parts as equal as possible attain the bound. Simplicity and triangle-freeness are essential hypotheses.

<a id="section-344-problem-13-prove-the-ramsey-recursion"></a>
### Problem 13 — Prove the Ramsey recursion {#section-346-problem-13-prove-the-ramsey-recursion}

For $s,t\\ge 3$, prove $R(s,t)\\le R(s-1,t)+R(s,t-1)$.

**Solution.** Put $N=R(s-1,t)+R(s,t-1)$ and color the edges of $K_N$ red or blue. Choose a vertex $v$. Among its $N-1$ incident edges, let $R_v$ and $B_v$ be the red and blue neighbor sets. If both

$|R_v|<R(s-1,t)$ and $|B_v|<R(s,t-1)$,

then their sum is at most $N-2$, contradicting $|R_v|+|B_v|=N-1$. Thus one inequality fails.

If $|R_v|\\ge R(s-1,t)$, the induced coloring on $R_v$ contains a red $K_{s-1}$, which together with $v$ gives a red $K_s$, or it contains a blue $K_t$. If $|B_v|\\ge R(s,t-1)$, the symmetric argument gives a red $K_s$ or a blue $K_t$ with $v$. Every coloring therefore contains a required clique, proving the upper bound. The argument does not prove equality.

<a id="section-356-problem-14-first-moment-plus-alteration"></a>
### Problem 14 — First moment plus alteration {#section-358-problem-14-first-moment-plus-alteration}

Choose each vertex of a graph $G$ independently with probability $p$, forming $S$. Let $X=|S|$ and let $Y$ be the number of edges with both endpoints in $S$. Show that $G$ has an independent set of size at least $pn-p^2m$, where $n=|V|$ and $m=|E|$.

**Solution.** Linearity of expectation gives $E[X]=pn$. Each edge has both endpoints chosen with probability $p^2$, so $E[Y]=p^2m$; independence between different edge events is not needed. Therefore

$E[X-Y]=pn-p^2m$.

Some outcome satisfies $X-Y\\ge pn-p^2m$. Starting from its selected set, process every edge whose endpoints both remain selected and delete one endpoint. Each deletion can eliminate at least one currently offending edge, so at most the original $Y$ deletions are made. The remaining set is independent and has size at least $X-Y$, proving the claim. Because its size is an integer, the strongest integer form of the displayed lower bound is $\\lceil pn-p^2m\\rceil$.

<a id="section-366-problem-15-derive-design-divisibility-conditions"></a>
### Problem 15 — Derive design divisibility conditions {#section-368-problem-15-derive-design-divisibility-conditions}

In a $2-(v,k,\\lambda)$ design, prove $r(k-1)=\\lambda(v-1)$ and $bk=vr$. Then test the hypothetical parameters $2-(6,3,1)$.

**Solution.** Fix a point $x$ and count ordered pairs $(y,B)$ where $y\\ne x$ and block $B$ contains both $x$ and $y$. Each of the $r$ blocks through $x$ contributes $k-1$ choices of $y$, giving $r(k-1)$. Each of the $v-1$ other points occurs with $x$ in exactly $\\lambda$ blocks, giving $\\lambda(v-1)$. Thus $r(k-1)=\\lambda(v-1)$.

Count incidences $(x,B)$ globally. Each of the $v$ points occurs in $r$ blocks and each of the $b$ blocks contains $k$ points, so $vr=bk$.

For $2-(6,3,1)$, the first equation gives $2r=5$, impossible for integer $r$. Hence no such design exists. Passing these divisibility tests would only remove this obstruction; it would not prove existence.

<a id="section-376-problem-16-specify-an-exact-matroid-certificate"></a>
### Problem 16 — Specify an exact matroid certificate {#section-378-problem-16-specify-an-exact-matroid-certificate}

Suppose a program claims that a hereditary family $I$ on a four-element ordered ground set is not a matroid. What is the smallest useful certificate format, and how is it checked without trusting the program?

**Solution.** Because heredity is assumed but should still be auditable, a robust failure certificate has one of two forms.

- A heredity certificate is a pair $(J,I')$ with $J\\in I$, $I'\\subset J$, and $I'\\notin I$.
- An augmentation certificate is a pair $(I,J)$ with $I,J\\in I$, $|I|<|J|$, and $I+e\\notin I$ for every $e\\in J\\setminus I$.

The verifier reads the explicitly listed family, checks membership of the displayed sets, checks containment or cardinality, and tests the finitely many required augmentations in canonical ground-set order. No floating arithmetic is involved. If the family passes both checks, that does not validate later rank or circuit code automatically; those outputs require their own cross-checks. Conversely, a valid displayed witness proves failure for this exact instance without trusting the search procedure that found it.

<a id="section-387-g-final-audit-checklist-for-a-theorem-claim"></a>
## G. Final audit checklist for a theorem claim {#section-389-g-final-audit-checklist-for-a-theorem-claim}

Before treating a statement from this volume as established, answer all six questions.

1. What are the ground set, primitive data, and finiteness assumptions?
2. Is the object proved to be a matroid, graph of the stated kind, represented configuration over the named field, design, or set family?
3. Are “some,” “every,” “maximal,” and “maximum” used with their literal quantifiers?
4. Does the proof preserve the forbidden or independent property at every transformation?
5. Is a computation serving as an example, a bounded certificate, or a universal proof component?
6. Does the conclusion match the theorem key’s contract without adding uniqueness, sharpness, simultaneous choice, or field independence?

This checklist and the proposed keys make the manuscript easier to audit and teach. They do not finish the volume’s references, historical attribution review, alphabetized concept index, theorem-number reconciliation, page locators, print pagination, or independent production review. Those remain explicit release tasks.

`;export{e as default};