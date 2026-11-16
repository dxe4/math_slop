
# Glossary and Theorem–Algorithm Finder

This retrieval guide points to stable chapter IDs rather than format-specific page numbers. Always return to the chapter for hypotheses and proof boundaries.

## Glossary

**Abstraction function.** Map from legal concrete representation states to abstract values. It explains which implementation details clients may observe. See `contracts-invariants-representations` and `data-structures-amortization`.

**Advantage.** Difference between an adversary's success and a baseline in a declared security game. See `cryptographic-definitions-adversaries`.

**Amortized cost.** A sequence-level allocation of actual costs; not an average over random inputs and not a per-operation worst-case promise. See `cost-amortization-lower-bounds` and `data-structures-amortization`.

**Certificate.** Finite evidence checked against an input: path, assignment, cover, parse, cut, trace, or proof term. Checker soundness is separate from producer correctness. See Chapters 1, 7, 13, 22–24.

**Complexity class.** A family of encoded decision problems satisfying resource constraints. $P$, $\mathsf{NP}$, and $\mathsf{coNP}$ are not labels for individual instances. See `complexity-verification-pnp`.

**Context-free grammar.** Finite production system whose rules replace one nonterminal; derivations define a language and may be ambiguous. See `grammars-stacks-parsing`.

**Counterexample.** An object satisfying every hypothesis and falsifying the conclusion. A counterexample refutes a universal statement, not merely an informal analogy. See `claims-counterexamples-specifications`.

**Decider.** Machine halting with the correct yes/no answer on every input. A recognizer need only accept members and may run forever otherwise. See `machines-reductions-limits`.

**Entropy.** Expected self-information under a named distribution, measured here in bits. It is not a length attached to one string independently of a model. See `information-compression-coding`.

**Entanglement.** A pure multi-qubit state is entangled when it does not factor as a tensor product across the stated subsystem split. A mixed state is separable when it is a convex mixture of product states; otherwise it is entangled. Correlation does not enable controllable faster-than-light signaling. See `quantum-states-algorithms`.

**Fairness.** Restriction on infinite executions used in some liveness properties. It is an assumption about allowed paths, not a scheduler theorem. See `transition-systems-model-checking`.

**Hamming distance.** Number of coordinates where equal-length words differ. Minimum code distance controls universal detection and correction radii. See `information-compression-coding`.

**Invariant.** Predicate preserved by all relevant transitions after initialization. At loop exit it combines with the exit condition; in data structures it defines legal representation state. See Chapters 3, 5, 8, 21, and 22.

**Kraft inequality.** Necessary and sufficient length condition for a prefix code: $\sum 2^{-\ell_{i}} \le 1$. See `information-compression-coding`.

**Language.** Set of finite encoded words. Automata, complexity, and computability claims depend on alphabet and encoding. See Chapters 10–13.

**Least fixed point.** Smallest set stable under an operator, often describing finite reachability. Greatest fixed points describe indefinitely maintainable behavior under stated path conventions. See `transition-systems-model-checking`.

**Monte Carlo algorithm.** Resource-bounded randomized algorithm allowed a quantified answer error. Las Vegas algorithms instead always return a correct answer but have random cost. See `randomness-approximation`.

**Negligible function.** Eventually below the reciprocal of every positive polynomial in the security parameter. See `cryptographic-definitions-adversaries`.

**NP-complete.** In NP and NP-hard under the declared reduction. It does not prove every instance hard or prove an exponential lower bound. See `complexity-verification-pnp`.

**Orientation predicate.** Sign of a determinant deciding whether three planar points turn counterclockwise, clockwise, or are collinear. See `computational-geometry-graphics`.

**Prefix code.** Code in which no codeword prefixes another, enabling left-to-right unique decoding. See `information-compression-coding`.

**Reduction.** Transformation preserving yes/no membership while respecting a resource bound. To show $B$ hard, reduce known-hard $A$ to $B$. See Chapters 12–13 and 16.

**Representation invariant.** Predicate selecting well-formed concrete states. Operations must establish and preserve it. See Chapters 5 and 8.

**Safety.** Property whose violations have finite bad prefixes. Reachability commonly checks finite-state safety. See Chapters 22–23.

**Simulation relation.** Relation used to transfer steps and properties between concrete and abstract systems. See `semantics-types-specifications` and `verification-evidence-toolchains`.

**Syndrome.** Parity-check result depending on an error coset in a linear code. A zero syndrome proves membership in the code, not absence of corruption. See `information-compression-coding`.

**Type safety.** Typically progress plus preservation for a formal semantics. It excludes specified stuck states, not nontermination or all logic errors. See `type-systems-proof-assistants`.

**Unitary.** Complex linear map $U$ with $U^{\dagger}U=UU^{\dagger}=I$, preserving norms and inner products. See `quantum-states-algorithms`.

**Verifier.** Algorithm checking a proposed certificate. In NP it runs in polynomial time with polynomial certificate length. In tooling it may check proof artifacts. See Chapters 13, 20, 23.

## Theorem and algorithm finder

- Quantifier negation, proof modes, and counterexample sufficiency: Chapter 1.
- Closure of relations, encodings, quotient identity: Chapter 2.
- Structural and well-founded induction, recurrence and loop variants: Chapter 3.
- Product rule, indicators, conditioning, union and concentration bounds: Chapter 4.
- Abstraction-function operation proofs and Hoare interfaces: Chapter 5.
- Asymptotic composition, recurrence trees, decision-tree lower bounds: Chapter 6.
- BFS shortest paths, DFS cycle/topological structure, Dijkstra's settled lemma, interval exchange, MST cut safety: Chapter 7.
- Dynamic-array amortization, BST order, heap construction, union-find representation: Chapter 8.
- Las Vegas/Monte Carlo separation, amplification, sampling, approximation and rounding: Chapter 9.
- DFA/NFA equivalence, product construction, minimization, Myhill–Nerode and pumping boundaries: Chapter 10.
- Grammar derivation, stack recognition, parsing and syntax-tree contracts: Chapter 11.
- Recognition versus decision, diagonalization and mapping reductions: Chapter 12.
- $P \subseteq \mathsf{NP}$, reduction composition, NP-completeness consequences, independent-set/vertex-cover equivalence: Chapter 13.
- Cross-domain claim interfaces for information, security, geometry, and quantum models: Chapter 14.
- Entropy chain rules, Kraft, Huffman exchange, incompressibility counting, Hamming correction radius: Chapter 15.
- Indistinguishability, one-time-pad perfect secrecy and reuse failure, MAC games, hybrids and conditional reductions: Chapter 16.
- Orientation and segment predicates, monotone hull, homogeneous transforms, clipping, raster coverage: Chapter 17.
- Born probabilities, unitary gates, tensor products, Bell states, interference, oracle and amplification scope: Chapter 18.
- Small-step semantics, observational equivalence, typing and specification boundaries: Chapter 19.
- Progress/preservation, Curry–Howard, dependent invariants, induction and trusted kernels: Chapter 20.
- Assignment, sequencing, branch, loop, weakest-precondition and termination rules: Chapter 21.
- Reachability, fixed points, invariant safety, liveness/fairness and state explosion: Chapter 22.
- Abstraction transfer, verification conditions, certificate trust, counterexample replay and continuous evidence: Chapter 23.
- Integrated contract-to-artifact workflow and peer-review dossier: Chapter 24.

## Sources and attribution boundaries

The book proves its stated results at the level advertised in each chapter. The sources below identify primary formulations, status records, and modern routes for the named results; a familiar name does not by itself settle priority or imply that the chapter reproduces a source's proof.

### Graph algorithms and formal computation

- Dijkstra, E. W. (1959). “A Note on Two Problems in Connexion with Graphs.” *Numerische Mathematik, 1*, 269–271. [doi:10.1007/BF01386390](https://doi.org/10.1007/BF01386390). Primary source for the shortest-path method named in Chapter 7.
- Kruskal, J. B., Jr. (1956). “On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem.” *Proceedings of the American Mathematical Society, 7*(1), 48–50. [doi:10.1090/S0002-9939-1956-0078686-7](https://doi.org/10.1090/S0002-9939-1956-0078686-7). One primary source for the spanning-tree method named in Chapter 7.
- Prim, R. C. (1957). “Shortest Connection Networks and Some Generalizations.” *Bell System Technical Journal, 36*(6), 1389–1401. [doi:10.1002/j.1538-7305.1957.tb01515.x](https://doi.org/10.1002/j.1538-7305.1957.tb01515.x). A distinct primary spanning-network source for Chapter 7.
- Myhill, J. (1957). *Finite Automata and the Representation of Events*. WADD Technical Report 57-624; and Nerode, A. (1958). “Linear Automaton Transformations.” *Proceedings of the American Mathematical Society, 9*(4), 541–544. [doi:10.2307/2033204](https://doi.org/10.2307/2033204). Paired attribution for the equivalence relation used in Chapter 10; the two records should not be collapsed into a joint publication.
- Rice, H. G. (1953). “Classes of Recursively Enumerable Sets and Their Decision Problems.” *Transactions of the American Mathematical Society, 74*(2), 358–366. [doi:10.1090/S0002-9947-1953-0053041-6](https://doi.org/10.1090/S0002-9947-1953-0053041-6). Primary source for the semantic undecidability result discussed in Chapter 12.
- Clay Mathematics Institute. [“P vs NP Problem.”](https://www.claymath.org/millennium/p-vs-np/) Current institutional status record for the open problem mentioned in Chapter 13; it is neither a proof nor a priority source.

### Information, coding, and probability

- Kraft, L. G. (1949). *A Device for Quantizing, Grouping, and Coding Amplitude-Modulated Pulses*. Master's thesis, Massachusetts Institute of Technology; and McMillan, B. (1956). “Two Inequalities Implied by Unique Decipherability.” *IRE Transactions on Information Theory, 2*(4), 115–116. [doi:10.1109/TIT.1956.1056816](https://doi.org/10.1109/TIT.1956.1056816). Distinct sources for the length conditions discussed in Chapter 15.
- Huffman, D. A. (1952). “A Method for the Construction of Minimum-Redundancy Codes.” *Proceedings of the IRE, 40*(9), 1098–1101. [doi:10.1109/JRPROC.1952.273898](https://doi.org/10.1109/JRPROC.1952.273898). Primary source for the coding construction named in Chapter 15.
- Shannon, C. E. (1948). “A Mathematical Theory of Communication.” *Bell System Technical Journal, 27*, 379–423 and 623–656. [Part I](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x); [Part II](https://doi.org/10.1002/j.1538-7305.1948.tb00917.x). Primary information-theory source for Chapter 15.
- Hamming, R. W. (1950). “Error Detecting and Error Correcting Codes.” *Bell System Technical Journal, 29*(2), 147–160. [doi:10.1002/j.1538-7305.1950.tb00463.x](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x). Primary coding source for Chapter 15.
- Chernoff, H. (1952). “A Measure of Asymptotic Efficiency for Tests of a Hypothesis Based on the Sum of Observations.” *Annals of Mathematical Statistics, 23*(4), 493–507. [doi:10.1214/aoms/1177729330](https://doi.org/10.1214/aoms/1177729330). Primary source behind the concentration name used in Chapter 4; the chapter supplies its own finite calculation.

### Quantum computation and program logic

- Born, M. (1926). “Zur Quantenmechanik der Stoßvorgänge.” *Zeitschrift für Physik, 37*, 863–867. [doi:10.1007/BF01397477](https://doi.org/10.1007/BF01397477). Historical source for the probability interpretation named in Chapter 18.
- Nielsen, M. A., & Chuang, I. L. (2010). *Quantum Computation and Quantum Information* (10th anniversary ed.). Cambridge University Press. ISBN 978-1-107-00217-3. Modern reference for the normalized state, measurement, circuit, and search conventions used in Chapter 18.
- Bell, J. S. (1964). “On the Einstein Podolsky Rosen Paradox.” *Physics Physique Физика, 1*(3), 195–200. [CERN record](https://cds.cern.ch/record/111654). Primary source for Bell's theorem and its historical context. The normalized Bell-state vector and nomenclature used in Chapter 18 follow the modern Nielsen–Chuang reference above, not this paper.
- Grover, L. K. (1996). “A Fast Quantum Mechanical Algorithm for Database Search.” *Proceedings of STOC '96*, 212–219. [doi:10.1145/237814.237866](https://doi.org/10.1145/237814.237866). Primary algorithm source for the search method in Chapter 18.
- Hoare, C. A. R. (1969). “An Axiomatic Basis for Computer Programming.” *Communications of the ACM, 12*(10), 576–580 and 583. [doi:10.1145/363235.363259](https://doi.org/10.1145/363235.363259). Primary source for the axiomatic framework used in Chapter 21.
- Curry, H. B. (1934). “Functionality in Combinatory Logic.” *Proceedings of the National Academy of Sciences, 20*(11), 584–590. [doi:10.1073/pnas.20.11.584](https://doi.org/10.1073/pnas.20.11.584); and Howard, W. A. (1980). “The Formulae-as-Types Notion of Construction.” In J. P. Seldin & J. R. Hindley (eds.), *To H. B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, 479–490. Academic Press. Separate sources for the correspondence discussed in Chapter 20; “Curry–Howard” is not a joint-paper attribution.
- Reynolds, J. C. (2002). “Separation Logic: A Logic for Shared Mutable Data Structures.” *Proceedings of the 17th Annual IEEE Symposium on Logic in Computer Science*, 55–74. [doi:10.1109/LICS.2002.1029817](https://doi.org/10.1109/LICS.2002.1029817); and O'Hearn, P. W., Reynolds, J. C., & Yang, H. (2001). “Local Reasoning about Programs that Alter Data Structures.” *CSL 2001*. [doi:10.1007/3-540-44802-0_1](https://doi.org/10.1007/3-540-44802-0_1). Complementary early sources for the local heap reasoning referenced from Chapters 20–21.
