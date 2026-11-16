var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
matter_id: notation-and-proof-conventions
title: "Notation, Status Labels, and Proof Conventions"
license: CC BY-SA 4.0
---

# Notation, Status Labels, and Proof Conventions {#section-1-notation-status-labels-and-proof-conventions}

Discrete mathematics compresses a great deal of structure into a small number of symbols. That compression is useful only when every symbol has a declared type and every claim has a visible boundary. This guide gives the defaults used across the sixteen chapters. A local declaration in a chapter takes precedence, but it must be made before the changed notation is used.

This is also a reading contract. A diagram is never the sole carrier of a definition or proof. A computation is never promoted silently into a theorem. A familiar word such as “path,” “independent,” or “minimal” is interpreted according to its declared structure, not according to an informal picture.

<a id="section-5-sets-numbers-and-indexed-families"></a>
## Sets, numbers, and indexed families {#section-7-sets-numbers-and-indexed-families}

The natural numbers are $N=\\{0,1,2,\\ldots\\}$. Positive integers may be written $N_+=\\{1,2,3,\\ldots\\}$. The integers and real numbers are $Z$ and $R$. Intervals of integers are stated explicitly; $[n]$ means $\\{1,\\ldots,n\\}$ when $n\\ge 1$, and $[0]=\\varnothing$. Mathematical integers are unbounded. A finite program using fixed-width machine integers must state its overflow rule separately.

For sets $A$ and $B$:

- $x\\in A$ means that $x$ is a member of $A$, while $x\\notin A$ is its negation;
- $A\\subseteq B$ allows equality, and $A\\subsetneq B$ means proper inclusion;
- $A\\cup B$, $A\\cap B$, and $A\\setminus B$ denote union, intersection, and set difference;
- $A\\mathbin{\\triangle}B=(A\\setminus B)\\cup (B\\setminus A)$ is symmetric difference;
- $P(A)$ is the power set of $A$, including $\\varnothing$ and $A$;
- $|A|$ is cardinality when $A$ is finite;
- $A\\times B$ is the Cartesian product of ordered pairs $(a,b)$.

A complement is always relative to a named universe. Thus $A^{c}$ is used only after a universe $U$ has been fixed, and then means $U\\setminus A$. Indexed unions and intersections name their index set, as in $\\bigcup_{i\\in I} A_{i}$. An empty union is $\\varnothing$; an empty intersection requires a declared ambient universe and is not guessed from context.

An indexed family may contain repetitions even when the set of its values does not. Therefore $(A_{i})_{i\\in I}$ and $\\{A_{i}:i\\in I\\}$ need not carry the same information. Tuples are ordered; sets are not. Multisets are identified explicitly and are not inferred from repeated braces.

A sum or product over an empty finite index set is $0$ or $1$, respectively. Factorials use $0! = 1$. The binomial coefficient $\\binom{n}{k}$ means the number of $k$-element subsets of an $n$-element set and is $0$ when $k<0$ or $k>n$.

<a id="section-25-functions-relations-quotients-and-orders"></a>
## Functions, relations, quotients, and orders {#section-27-functions-relations-quotients-and-orders}

A function declaration $f:A\\to B$ specifies a domain and codomain and means that every input in $A$ receives exactly one value in $B$. Image and inverse image are

$f(S)=\\{f(s):s\\in S\\}$ and $f^{-1}(T)=\\{a\\in A:f(a)\\in T\\}$.

The notation $f^{-1}(T)$ does not assert that $f$ has an inverse function. Function composition is $(g∘f)(x)=g(f(x))$, so the right-hand function acts first. Restrictions are written $f|_{S}$. An identity map is $id_{A}$.

A binary relation on $A$ is a subset of $A\\times A$. We write $xRy$ for $(x,y)\\in R$. For an equivalence relation $\\sim$, the equivalence class of $x$ is $[x]=\\{y:y\\sim x\\}$, and the quotient set is $A/\\sim =\\{[x]:x\\in A\\}$. A formula on classes is not accepted merely because it looks natural: to define $F([x])$, one must prove that replacing $x$ by any equivalent representative leaves the output class or value unchanged. The chapter \`quotients-and-canonical-representatives\` calls this the representative-independence, or well-definedness, obligation. A canonical representative is a proved choice rule, not the assertion that one representative is intrinsically the class.

A partial order is written $\\le$ or $≼$ and is reflexive, antisymmetric, and transitive. Strict order means $x<y$ when $x\\le y$ and $x\\ne y$. The symbol $x\\prec y$ means that $y$ covers $x$: $x<y$ and no element lies strictly between them. “Minimal” does not mean “least,” and “maximal” does not mean “greatest.” An interval in a poset is $[x,y]=\\{z:x\\le z\\le y\\}$. Meets and joins, when they exist, are $x\\land y$ and $x\\lor y$; their existence is not assumed in an arbitrary poset.

In \`finite-orders-lattices-mobius\`, the zeta function is $\\zeta(x,y)=1$ when $x\\le y$ and $0$ otherwise. The Möbius function $\\mu$ is its convolution inverse in the incidence algebra. Any sum such as $\\sum_{x\\le z\\le y}$ is over the finite poset interval, not a numerical interval unless the poset itself is numerical.

<a id="section-39-logic-and-proof-burden"></a>
## Logic and proof burden {#section-41-logic-and-proof-burden}

Quantifiers bind in their written order. The negation of “for every $x$ there exists $y$ such that $P(x,y)$” is “there exists $x$ such that for every $y$, $P(x,y)$ fails.” Negation reverses each quantifier; it does not merely add “not” to the last phrase.

An implication $P\\Rightarrow Q$ is logically equivalent to its contrapositive $\\neg Q\\Rightarrow \\neg P$, not to its converse $Q\\Rightarrow P$. An “if and only if” claim carries two proof obligations unless a chain of reversible equivalences supplies both at once. To disprove a universal statement, a counterexample must satisfy every hypothesis and violate the conclusion. To prove an existential statement, a witness may be explicit or supplied by a proved existence argument; a suggestive picture is not a witness.

Proofs in this volume use the following conventions:

- **Direct proof** begins with all hypotheses and derives the stated conclusion.
- **Contraposition** proves the logically equivalent contrapositive and announces the switch.
- **Contradiction** states the negation being assumed and identifies the impossible consequence.
- **Induction** names its index, first value, base case, inductive hypothesis, and inductive step. Strong induction states exactly which earlier cases are available.
- **Structural induction** follows every constructor in the recursive definition of an object.
- **Extremal choice** first proves that the candidate collection is finite and nonempty, then selects a minimum or maximum element.
- **Invariant arguments** state initialization, preservation under every legal move, and the terminal consequence.
- **Double counting** defines one finite set of incidences and counts that same set in two justified ways.
- **Bijection proofs** define both maps or give a reversible construction and verify the relevant inverse identities.

The end marker $\\square$ closes a proof. Its absence is not itself evidence of a gap, but prose outside a labeled proof is not automatically part of one. A displayed equation inherits only the assumptions in force at that point.

<a id="section-59-claim-and-evidence-labels"></a>
## Claim and evidence labels {#section-61-claim-and-evidence-labels}

The status word attached to a statement tells the reader what may be reused later.

- **Definition** fixes meaning; it is not true or false, though it can be useful or ill chosen.
- **Lemma**, **Proposition**, and **Theorem** are proved statements under their displayed hypotheses. The labels indicate role or scale, not different standards of proof.
- **Corollary** follows from previously proved results, with the bridge stated.
- **Identity** is an equality proved throughout a declared domain.
- **Algorithm** is a finite procedure with declared inputs and outputs. Correctness and termination are separate claims.
- **Certificate** is finite evidence checked by a stated verification rule. A witness is not accepted without its checker conditions.
- **Example** illustrates a definition or result on particular objects.
- **Counterexample** disproves a stated universal claim after every hypothesis has been checked.
- **Observation** records a consequence whose scope is local and explicit.
- **Heuristic** or **proof idea** guides discovery but is not available as a proved premise.
- **Conjecture** is deliberately unproved in the manuscript.
- **Experiment** reports specified finite tests and only those tests.
- **Project prompt** asks the learner to produce an artifact; its requested conclusions are not manuscript claims until proved in a solution.

Historical names, when retained as conventional mathematical labels, do not assert priority or supply a source. A result’s authority comes from its proof and hypotheses. Attribution and bibliographic status are separate editorial questions.

<a id="section-79-counting-recurrences-and-formal-series"></a>
## Counting, recurrences, and formal series {#section-81-counting-recurrences-and-formal-series}

All elementary sums and products are finite unless a series is declared. In \`counting-bijections-inclusion-exclusion\`, an object counted twice really contributes twice until a justified correction is applied. Events or properties indexed by the same symbol are not assumed independent or disjoint.

A sequence $(a_{n})_{n\\ge 0}$ is a function of its index. A recurrence is incomplete without initial values and a range on which the recurrence applies. In \`recurrences-generating-functions\` and \`advanced-enumeration-partitions\`,

$$A(x)=\\sum_{n\\ge 0} a_{n} x^{n}$$

usually denotes a formal power series. Equality of formal series means equality coefficient by coefficient. Addition and multiplication are algebraic coefficient operations; analytic convergence is irrelevant unless a section explicitly introduces it. The extraction operator $[x^{n}]A(x)$ denotes the coefficient of $x^{n}$. Replacing a formal identity by numerical substitution requires a separate convergence argument.

Probability is taken on a named finite sample space unless stated otherwise. $\\Pr(E)$ is the probability of event $E$, and $E[X]$ is expectation under the declared law. Equal marginal probabilities do not imply independence. Linearity of expectation does not require independence. A positive probability proves existence only after the sampled outcomes have been shown to belong to the target universe.

<a id="section-91-graph-and-incidence-conventions"></a>
## Graph and incidence conventions {#section-93-graph-and-incidence-conventions}

A graph $G=(V,E)$ is finite and simple by default: edges are unordered two-element subsets of $V$, so loops and parallel edges are absent. A directed graph, multigraph, or weighted graph is announced explicitly. The order and size of $G$ are $|V|$ and $|E|$. Vertices $u$ and $v$ are adjacent when $\\{u,v\\}\\in E$; the abbreviation $uv$ denotes that unordered edge only after the graph context is clear.

The open neighborhood is $N_{G}(v)=\\{u:uv\\in E\\}$, and $deg_{G}(v)=|N_{G}(v)|$. A walk may repeat vertices and edges. A trail repeats no edge. A path repeats no vertex, except that a cycle closes at its initial vertex. Path length counts edges, so a one-vertex path has length zero. A graph is connected when every pair of vertices is joined by a path. A tree is a connected acyclic graph; a forest need not be connected.

For $S\\subseteq V$, $G[S]$ is the subgraph induced by $S$. The deletion $G-S$ means $G[V\\setminus S]$. For edges $F\\subseteq E$, $G-F$ retains all vertices and deletes the edges in $F$. Contraction, orientation, and decomposition operations use the local definition in \`graph-decompositions-orientations\`; no drawing-based convention overrides it.

A proper vertex coloring assigns different colors to adjacent vertices. A matching is a set of pairwise vertex-disjoint edges. A planar graph is one admitting a crossing-free embedding; a particular drawing with crossings does not establish nonplanarity. In \`planarity-coloring-matchings\`, face counts refer to a fixed planar embedding and include the unbounded face.

Incidence structures in \`designs-and-set-systems\` distinguish points from blocks even when both are encoded as sets. A block family may be indexed and may therefore repeat blocks only if repetition is explicitly allowed. Parameters such as $v$, $b$, $r$, $k$, and $\\lambda$ are attached to the stated regularity hypotheses; they are not presumed for an arbitrary set system.

<a id="section-103-independence-systems-and-matroids"></a>
## Independence systems and matroids {#section-105-independence-systems-and-matroids}

An independence system is a pair $(E,I)$ with finite ground set $E$, with $\\varnothing\\in I\\subseteq P(E)$, and with the hereditary property that $A\\in I$ and $B\\subseteq A$ imply $B\\in I$. Its members are called independent sets. This word is unrelated to probabilistic independence unless a probability model is separately present. A maximal independent set has no proper independent superset; a maximum independent set has greatest cardinality. These notions coincide in size for matroid bases only after the augmentation axiom has been established.

In \`matroid-independence-bridge\`, a matroid is a finite independence system satisfying the stated augmentation axiom. Bases are maximal independent sets, and the chapter calls their common cardinality the rank of the whole matroid. Circuits, the rank function on every subset, and matroid closure belong to the companion structural volume and are not developed here. Graph vertices and matroid ground elements are not identified automatically. When a graphic matroid is used, the correspondence between graph edges and ground elements is stated.

A greedy run includes an ordering or tie rule. Its success on one weight assignment is an example; a theorem about every admissible weight assignment requires the exchange argument and all its hypotheses.

<a id="section-111-games-algorithms-and-exact-experiments"></a>
## Games, algorithms, and exact experiments {#section-113-games-algorithms-and-exact-experiments}

A finite game declares positions, legal moves, terminal positions, players, information, and winning rule. In \`games-strategy-capstone\`, a strategy selects a legal move for every position at which the player may act, not only along one favorable play. Backward induction depends on finiteness or another proved well-founded measure. A strategy-stealing argument may prove existence without constructing an efficient strategy; the two conclusions are kept separate.

Pseudocode uses $:=$ for assignment and $=$ for mathematical equality. Every loop proof separates an invariant from a termination variant. Complexity claims declare the input-size measure. Deterministic tie rules are part of an algorithm when a reproducible certificate depends on them.

The chapter \`exact-computation-experiments\` uses four evidence roles: discovery, falsification, bounded certification, and proof assistance. An exhaustive check supports a bounded universal claim only when the instance universe, encoding, generator completeness, predicate, arithmetic, and termination are justified. Symmetry reduction needs a proof that every omitted object is represented and that the tested property is invariant under the symmetry. “No counterexample found” after a timeout is an incomplete search, not a theorem.

Exact arithmetic means integers, rationals with controlled normalization, or another explicitly exact representation. Floating-point output is numerical evidence with rounding obligations, even if every displayed digit happens to be correct. A reproducible experiment records input, code or pseudocode version, enumeration bound, tie rules, and complete output needed to check the claim.

<a id="section-121-accessible-mathematical-communication"></a>
## Accessible mathematical communication {#section-123-accessible-mathematical-communication}

Symbolic and visual forms are paired with meaningful alternatives. A graph diagram is accompanied by an adjacency list, edge list, incidence table, or precise prose description. A poset diagram is accompanied by its cover relations. A colored construction names colors or classes in text and does not distinguish cases by hue alone. A table has labeled rows and columns, and a computational trace identifies state changes in reading order.

When reading formulas aloud, membership $x\\in A$ may be read “x is in A,” inclusion $A\\subseteq B$ as “A is a subset of B, possibly equal,” and $\\sum_{i\\in I} a_{i}$ as “the sum of a sub i over i in I.” Authors should introduce dense notation in prose before a long display and identify the conclusion after it. Alternative text must communicate the mathematical relation, not merely say “diagram of a graph.”

Interactive or animated supplements are optional enrichments. Controls need visible labels and keyboard operation; changing state is announced in text or numerically; motion respects reduced-motion preferences. No timed animation, hover state, color distinction, or pointer gesture is required to obtain a definition, theorem, example, exercise, or solution.

<a id="section-129-applying-the-contract-across-the-sixteen-chapters"></a>
## Applying the contract across the sixteen chapters {#section-131-applying-the-contract-across-the-sixteen-chapters}

The stable chapter IDs are part of the volume’s cross-reference interface. Their main notation obligations are:

1. \`sets-functions-relations-orders\`: types every set, map, relation, closure operator, and order before use.
2. \`proof-induction-invariants\`: separates implication directions, induction hypotheses, recursion clauses, invariants, and termination measures.
3. \`counting-bijections-inclusion-exclusion\`: names the finite universe, overlap, bijection, and convention for empty choices.
4. \`recurrences-generating-functions\`: supplies initial data and distinguishes formal coefficient identities from analytic series claims.
5. \`graphs-trees-connectivity\`: uses the finite simple-graph defaults and distinguishes walk, trail, path, connectedness, and acyclicity.
6. \`planarity-coloring-matchings\`: names embeddings, faces, proper colorings, matching coverage, and every hypothesis behind an augmenting argument.
7. \`probabilistic-extremal-methods\`: names the probability law and distinguishes an existence proof, extremal bound, and heuristic threshold.
8. \`games-strategy-capstone\`: declares the complete game and distinguishes a strategy from one play sequence.
9. \`quotients-and-canonical-representatives\`: proves representative independence before an operation descends to equivalence classes.
10. \`finite-orders-lattices-mobius\`: distinguishes minimal from least, declares intervals, and restricts inversion sums to finite posets.
11. \`advanced-enumeration-partitions\`: states partition restrictions and reads generating functions coefficientwise by default.
12. \`graph-decompositions-orientations\`: declares directed incidence, contraction, and certificate data rather than relying on a picture.
13. \`designs-and-set-systems\`: keeps point, block, multiplicity, and regularity parameters distinct.
14. \`matroid-independence-bridge\`: separates graph independence, probabilistic independence, and matroid independence.
15. \`exact-computation-experiments\`: publishes the finite search boundary and gives code output no broader status than its completeness proof permits.
16. \`cumulative-projects-solutions\`: carries definitions and evidence labels unchanged when combining several chapters, and identifies any new local convention.

Cross-references should use these IDs in metadata and the displayed titles in learner-facing prose. Chapter numbers are navigational conveniences and can change during editing; stable IDs are the durable link targets.

<a id="section-152-authorship-and-release-status"></a>
## Using these conventions {#section-154-authorship-and-release-status}

These conventions fix the meanings used in the chapters. When comparing another source, check the objects, notation and hypotheses before transferring a result. Report a suspected gap with the chapter identifier and the precise claim involved.
`;export{e as default};