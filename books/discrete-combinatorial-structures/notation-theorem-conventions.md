
# Notation, Theorem, and Proof Conventions

This sheet fixes default meanings for the volume. Local chapter declarations override it and must be read before applying a theorem. The book is a draft, so theorem keys and chapter IDs are stable editorial finders, while final numbering and page locators are not claimed.

## Logical conventions

All ground sets are finite unless explicitly stated. A theorem includes its quantifiers and hypotheses; nearby motivation does not enlarge them. “Some” is existential, not prescribed and not simultaneous. “Maximal” means inclusion-maximal; “maximum” refers to an objective value. A converse, equality characterization, stability result, algorithm, or efficient construction is not implicit in a one-directional existence theorem.

Definitions use “if and only if” when both directions are intended. A proof ending with a computational result must also justify the generator's coverage, the predicate's correctness, and the arithmetic model. Decimal evidence does not replace exact comparison where equality or sign is load-bearing.

## Sets and families

$E$ is a fixed finite ground set and $P(E)$ its power set. $A\subseteq B$ allows equality; $A\subsetneq B$ is proper inclusion. $A\setminus B$ is set difference, and complements are taken in the declared ambient set, usually $E$. The abbreviations $A+e$ and $A-e$ mean $A\cup \{e\}$ and $A\setminus \{e\}$ when $e$ is an element and the meaning is unambiguous.

$|A|$ is cardinality. $\binom{E}{k}$ is the family of all $k$-subsets of $E$; $\binom{n}{k}$ is a number. A family of sets is usually script $F$ or $A$; membership $A\in F$ must not be confused with element membership $e\in A$. A lower shadow consists of all one-element deletions of members, deduplicated as a family.

## Matroids and independence systems

An independence system is $(E,I)$ with nonempty hereditary $I\subseteq P(E)$. A matroid is $M=(E,I)$ when augmentation also holds. Independent and dependent always refer to $I$, not to probability or graph stable sets, unless explicitly qualified.

$r_M(A)$, often shortened to $r(A)$, is matroid rank. $r(M)=r_M(E)$. $\operatorname{cl}_M(A)=\{e\in E:r(A+e)=r(A)\}$ is closure. A flat is a closed set. A basis of $A$ is a maximal independent subset of $A$; an unqualified basis is a basis of $E$. $B(M)$ may denote the family of bases when a chapter declares it.

A circuit is an inclusion-minimal dependent set. A cocircuit is a circuit of $M^{*}$. A loop is a one-element circuit; a coloop belongs to every basis, equivalently is a one-element cocircuit. Distinct nonloops are parallel if they form a two-element circuit. “Orthogonality” for an arbitrary matroid means a circuit and cocircuit do not meet in exactly one element. An even-intersection law needs an additional binary hypothesis.

For a basis $B$ and $e\notin B$, $C(e,B)$ is the unique fundamental circuit in $B+e$. Fundamental cocircuit notation is declared locally because conventions vary about whether the indexed element is displayed first.

## Restriction, deletion, contraction, and duality

$M|A$ is restriction to $A$. $M\setminus e$ deletes $e$; $M/e$ contracts $e$. The slash is operation notation, not arithmetic division. For disjoint sets, $M\setminus D/C$ means delete $D$ and contract $C$, with the chapter stating any order convention. A minor is obtained by a finite sequence of deletion and contraction.

$M^{*}$ is the dual on the same ground set. Complements of bases of $M$ are bases of $M^{*}$, and

$r_{M^{*}}(A)=|A|-r_M(E)+r_M(E\setminus A)$.

Duality interchanges deletion and contraction, circuits and cocircuits, loops and coloops. An abstract dual matroid exists without a graph embedding. A plane-dual graph requires a fixed plane embedding.

## Sums and connectivity

$M_1\oplus M_2$ is a direct sum on disjoint ground sets. The connectivity function is

$\lambda_M(X)=r_M(X)+r_M(E\setminus X)-r_M(E)$.

Terms such as $k$-separation are not portable without a convention. Any use must state the inequality on $\lambda$, minimum sizes of both shores, and whether exact or at-most connectivity is intended. Two-sum constructions must identify the common virtual element and the deletion convention.

## Graphs

$G=(V,E)$ is a finite undirected graph. A theorem states “simple” when loops and parallel edges are excluded. Minor operations can create loops or parallel edges; they remain labeled unless a stated simplification is proved harmless.

$K_t$ is a complete simple graph. $G[X]$ is the subgraph induced by vertices $X$. $\delta(X)$ is the set of edges with exactly one endpoint in $X$; a bond is a minimal nonempty cut. In a graphic matroid, the ground set is $E(G)$ and independence means acyclicity. Stable vertex sets and matchings are different hereditary families.

For $A\subseteq E(G)$, $c_G(A)$ counts components of $(V(G),A)$, including isolated vertices, and graphic rank is $|V(G)|-c_G(A)$. A “cycle” used as a circuit is an edge set with the local multigraph conventions stated in the chapter.

## Linear representation and fields

$M_F(A)$ denotes the column matroid of a labeled matrix $A$ over the named field $F$. Columns, not vector values, are ground elements, so equal or zero columns retain distinct labels. $F_p$ means the prime field with $p$ elements. Integer entries do not imply the field is the rationals.

Invertible row operations, column permutation with labels carried along, and nonzero column scaling preserve the represented matroid. Arbitrary column addition need not. Rank, determinant, span, kernel, and orthogonality are always computed over the named field. A real Gram-matrix argument cannot be reduced modulo a prime without a separate audit.

## Optimization

Weights are real unless a chapter narrows the domain. “Descending greedy” means a deterministic nonincreasing-weight scan with a declared tie order, accepting an element exactly when feasibility remains. The maximum-weight basis problem continues until full rank and may accept negative weights. The maximum-weight independent-set problem permits stopping and skips negative elements. Zero-weight conventions can change the witness without changing the optimum value.

An independence oracle answers a specified membership query; it does not certify augmentation. Oracle complexity counts calls separately from arithmetic and data-structure cost. A certificate for a greedy rejection may be a fundamental circuit, while universal correctness for all weights requires a theorem.

## Extremal graphs, Ramsey theory, and probability

$R(s,t)$ is the least $n$ such that every red-blue coloring of $K_n$ contains a red $K_s$ or blue $K_t$, under the standard convention in the Ramsey chapter. A recursive inequality is an upper bound unless equality is separately proved. A random construction proving positive probability of avoidance is an existence proof, not automatically an efficient algorithm.

$E[X]$, $\operatorname{Var}(X)$, and $P(A)$ denote expectation, variance, and event probability. Linearity of expectation does not require independence. Product probabilities, many tail inequalities, and dependency lemmas do require explicit independence or dependency hypotheses. Pairwise independence is not interchangeable with joint independence.

## Set systems and designs

A family is $t$-intersecting if any two distinct members meet in at least $t$ points. A compression or shift is the exact operator defined in its home chapter; there is no universal preservation theorem for all properties.

A $2-(v,k,\lambda)$ design has $v$ points, block size $k$, and exactly $\lambda$ blocks containing each pair of distinct points. $r$ is replication number and $b$ the number of blocks when these are constant. The identities $vr=bk$ and $r(k-1)=\lambda(v-1)$ are necessary parameter equations, not existence criteria. Repeated blocks are allowed only when the chapter explicitly treats a multidesign.

## Theorem labels and claim strength

The stable proposed theorem keys in `theorem-index-solutions` use thematic prefixes such as `THM-MAT`, `THM-GRAPH`, `THM-LIN`, `THM-TURAN`, `THM-RAMSEY`, `THM-PROB`, `THM-COMP`, `THM-SET`, `THM-DESIGN`, and `THM-ENUM`. A key identifies a contract; it does not certify historical priority or final publication numbering.

Use these labels for claim strength:

- **Definition:** fixes meaning.
- **Lemma/Theorem:** proved under displayed hypotheses.
- **Corollary:** follows from named prior results.
- **Example:** verifies one instance.
- **Counterexample:** refutes a stated universal claim.
- **Computation:** records output under a declared procedure and domain.
- **Conjecture/Question:** intentionally unproved.
- **Heuristic:** suggests a route without claiming validity.

A result quoted from another chapter should name the theorem key or home chapter and repeat every load-bearing hypothesis. A historical name is a locator, not evidence and not a priority claim.

## Proof and certificate conventions

A complete proof identifies its primitive data, verifies hypotheses, performs the structural step, and interprets only the licensed conclusion. “By symmetry” must name the symmetry and what it preserves. “Without loss of generality” must describe the relabeling or duality that transports solutions back.

Exact certificates include an augmenting element, a circuit, a basis exchange, a cut partition, a kernel vector over a named field, a coloring, an incidence table, or a complete canonical enumeration trace. Visuals can assist discovery but must have a text or exact numerical alternative. Color is never the only carrier of status; diagrams need labeled vertices/edges or adjacency data; controls need labels and keyboard access; optional motion must respect reduced-motion preferences.

## Draft-status boundary

These conventions reconcile terminology across current sources but remain editorial draft matter. Final theorem numbering, cross-reference resolution, bibliography linkage, pronunciation guidance, and rendered accessibility verification require whole-volume production. Conflicts should be reported rather than silently resolved by importing an outside convention.
