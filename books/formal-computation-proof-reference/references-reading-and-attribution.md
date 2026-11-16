
# References, Reading Routes, and Attribution Notes

## Current benchmarks and provenance

Glynn Winskel, *The Formal Semantics of Programming Languages*, and Christel Baier and Joost-Pieter Katoen, *Principles of Model Checking*, are the commissioned benchmarks. The current route has twelve chapters; numerical chapter references in the inherited apparatus below describe the earlier combined volume. Use current semantic titles and chapter IDs for navigation.

The operational/domain/Hoare/heap/temporal/model-checking/solver/refinement sources are expanded. Four complete computing-desk specialist sources and the logic temporal source are folded into the stated destination chapters with original solutions and source-owned aliases. The four new chapters treat imperative safety, rely–guarantee composition, abstract interpretation and proof-assistant verification. Lean and code examples are textual, with no claimed execution.

## Status of this apparatus

This bibliography combines concrete sources with a map of remaining theorem-version and historical checks. The entries below support specific proof traditions used in the manuscript; a conventional theorem name and one bibliographic record do not by themselves establish complete priority.

The manuscript is self-contained at its stated level: references are routes for depth, alternate proofs, and provenance rather than unstated prerequisites.

## Inherited starting sources

- C. A. R. Hoare, “An Axiomatic Basis for Computer Programming,” *Communications of the ACM* 12(10), 576–580 and 583 (1969), [doi:10.1145/363235.363259](https://doi.org/10.1145/363235.363259). Primary source for the axiomatic program-logic framework discussed in Chapter 16.
- John C. Reynolds, “Separation Logic: A Logic for Shared Mutable Data Structures,” *Proceedings of the 17th Annual IEEE Symposium on Logic in Computer Science*, 55–74 (2002), [doi:10.1109/LICS.2002.1029817](https://doi.org/10.1109/LICS.2002.1029817), [author-hosted paper](https://www.cs.cmu.edu/~jcr/seplogic.pdf). Primary source for the separation-logic account used in Chapter 17.
- John C. Reynolds, “An Introduction to Separation Logic,” lecture notes dated 23 October 2008 for the First PhD Fall School on Logics and Semantics of State, Copenhagen, [author-hosted notes](https://www.cs.cmu.edu/~jcr/copenhagen08.pdf). Section 3.9 gives the lookup-rule freshness issue made explicit in Chapter 17.
- Hubert Comon, Max Dauchet, Rémi Gilleron, Christof Löding, Florent Jacquemard, Denis Lugiez, Sophie Tison, & Marc Tommasi, *Tree Automata Techniques and Applications*, online monograph, version of 12 October 2007, [authors' INRIA-hosted edition](https://jacquema.gitlabpages.inria.fr/files/tata.pdf). Theorem 1.6.1 and Proposition 1.6.2 support the tree-automata constructions used in Chapter 7.

These concrete source records are retained from the earlier manuscript; the present expansion does not claim a new independent citation review. The named-result records below normalize the broader routes. Claim-level theorem locators, translation history, and disputed priority remain separate review work.

## Inherited named-result sources

### Languages and automata

- John Myhill, *Finite Automata and the Representation of Events*, WADD Technical Report 57-624 (1957); and Anil Nerode, “Linear Automaton Transformations,” *Proceedings of the American Mathematical Society* 9(4), 541–544 (1958), [doi:10.2307/2033204](https://doi.org/10.2307/2033204). These are separate records behind the paired Myhill–Nerode attribution.
- Stephen C. Kleene, “Representation of Events in Nerve Nets and Finite Automata,” in *Automata Studies*, Annals of Mathematics Studies 34, Princeton University Press, 3–41 (1956). Primary source for the regular-event representation route.
- Dean N. Arden, “Delayed-Logic and Finite-State Machines,” *Journal of the ACM* 8(2), 222–231 (1961), [doi:10.1145/321075.321078](https://doi.org/10.1145/321075.321078). Primary source for the equation-solving result named in Chapter 3.
- Noam Chomsky, “On Certain Formal Properties of Grammars,” *Information and Control* 2(2), 137–167 (1959), [doi:10.1016/S0019-9958(59)90362-6](https://doi.org/10.1016/S0019-9958(59)90362-6). A primary grammar source; a chronology of normal forms must also distinguish earlier formulations.
- Calvin C. Elgot, “Decision Problems of Finite Automata Design and Related Arithmetics,” *Transactions of the American Mathematical Society* 98, 21–51 (1961), [doi:10.1090/S0002-9947-1961-0139530-5](https://doi.org/10.1090/S0002-9947-1961-0139530-5). One primary source in the multi-origin Büchi–Elgot–Trakhtenbrot correspondence; Büchi's and Trakhtenbrot's contributions require separate records before making a priority claim.
- Robert McNaughton & Seymour Papert, *Counter-Free Automata*, MIT Press (1971); and M. P. Schützenberger, “On Finite Monoids Having Only Trivial Subgroups,” *Information and Control* 8(2), 190–194 (1965), [doi:10.1016/S0019-9958(65)90286-5](https://doi.org/10.1016/S0019-9958(65)90286-5). Sources for the star-free and aperiodic route in Chapter 4.
- Noam Chomsky & Marcel-Paul Schützenberger, “The Algebraic Theory of Context-Free Languages,” in *Computer Programming and Formal Systems*, 118–161 (1963). Original chapter for the representation theorem named in the route; a modern proof locator remains to be selected.

### Computability and complexity

- Alonzo Church, “An Unsolvable Problem of Elementary Number Theory,” *American Journal of Mathematics* 58(2), 345–363 (1936), [doi:10.2307/2371045](https://doi.org/10.2307/2371045); and Alan M. Turing, “On Computable Numbers, with an Application to the Entscheidungsproblem,” *Proceedings of the London Mathematical Society* 42, 230–265 (1936–37), [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230). Separate primary records relevant to the Church–Turing thesis, which the manuscript treats as a thesis rather than a formal theorem.
- Stephen A. Cook, “The Complexity of Theorem-Proving Procedures,” *Proceedings of STOC 1971*, 151–158, [doi:10.1145/800157.805047](https://doi.org/10.1145/800157.805047); and L. A. Levin, “Universal Sequential Search Problems,” *Problems of Information Transmission* 9(3), 265–266 in the English translation (1973), [MathNet archive](https://www.mathnet.ru/php/archive.phtml?jrnid=ppi&option_lang=eng&paperid=914&wshow=paper). Separate records for independent contributions to the Cook–Levin attribution.
- Juris Hartmanis & Richard E. Stearns, “On the Computational Complexity of Algorithms,” *Transactions of the American Mathematical Society* 117, 285–306 (1965), [doi:10.1090/S0002-9947-1965-0170805-7](https://doi.org/10.1090/S0002-9947-1965-0170805-7). Primary hierarchy source; exact theorem variants depend on machine and constructibility assumptions.
- Walter J. Savitch, “Relationships Between Nondeterministic and Deterministic Tape Complexities,” *Journal of Computer and System Sciences* 4(2), 177–192 (1970), [doi:10.1016/S0022-0000(70)80006-X](https://doi.org/10.1016/S0022-0000(70)80006-X). Primary source for the space-simulation theorem; retain its lower space-bound hypothesis.

### Semantics, type systems, and program logic

- Alonzo Church & J. Barkley Rosser, “Some Properties of Conversion,” *Transactions of the American Mathematical Society* 39(3), 472–482 (1936), [doi:10.1090/S0002-9947-1936-1501858-0](https://doi.org/10.1090/S0002-9947-1936-1501858-0). Primary confluence source.
- Dana Scott, *Outline of a Mathematical Theory of Computation*, Oxford Programming Research Group Technical Monograph PRG-2 (1970). Institutional primary report for the domain and fixed-point route; modern theorem variants require a modern domain-theory source.
- Haskell B. Curry, “Functionality in Combinatory Logic,” *Proceedings of the National Academy of Sciences* 20(11), 584–590 (1934), [doi:10.1073/pnas.20.11.584](https://doi.org/10.1073/pnas.20.11.584); and William A. Howard, “The Formulae-as-Types Notion of Construction,” in J. P. Seldin & J. R. Hindley (eds.), *To H. B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, 479–490, Academic Press (1980; manuscript circulated in 1969). Separate sources for the correspondence later given the paired Curry–Howard name.
- Stephen A. Cook, “Soundness and Completeness of an Axiom System for Program Verification,” *SIAM Journal on Computing* 7(1), 70–90 (1978), [doi:10.1137/0207019](https://doi.org/10.1137/0207019); and Edsger W. Dijkstra, “Guarded Commands, Nondeterminacy and Formal Derivation of Programs,” *Communications of the ACM* 18(8), 453–457 (1975), [doi:10.1145/360933.360975](https://doi.org/10.1145/360933.360975). Primary sources for relative completeness and predicate-transformer routes, alongside Hoare's record above.
- Peter W. O'Hearn, John C. Reynolds, & Hongseok Yang, “Local Reasoning about Programs that Alter Data Structures,” *CSL 2001*, [doi:10.1007/3-540-44802-0_1](https://doi.org/10.1007/3-540-44802-0_1). An early local-reasoning source alongside the Reynolds records above; later concurrent variants require separate citations.
- Maurice P. Herlihy & Jeannette M. Wing, “Linearizability: A Correctness Condition for Concurrent Objects,” *ACM Transactions on Programming Languages and Systems* 12(3), 463–492 (1990), [doi:10.1145/78969.78972](https://doi.org/10.1145/78969.78972). Primary source for the concurrency condition named in the reading route.

### Symbolic and automated verification

- Randal E. Bryant, “Graph-Based Algorithms for Boolean Function Manipulation,” *IEEE Transactions on Computers* C-35(8), 677–691 (1986), [doi:10.1109/TC.1986.1676819](https://doi.org/10.1109/TC.1986.1676819). Primary BDD algorithm source; a later model-checking architecture needs an additional source.
- João P. Marques-Silva & Karem A. Sakallah, “GRASP: A Search Algorithm for Propositional Satisfiability,” *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems* 18(4), 506–521 (1999), [doi:10.1109/43.769433](https://doi.org/10.1109/43.769433); and Robert Nieuwenhuis, Albert Oliveras, & Cesare Tinelli, “Solving SAT and SAT Modulo Theories: From an Abstract Davis–Putnam–Logemann–Loveland Procedure to DPLL(T),” *Journal of the ACM* 53(6), 937–977 (2006), [doi:10.1145/1217856.1217859](https://doi.org/10.1145/1217856.1217859). Architecture sources for the CDCL and SMT routes; current solver proof-format coverage remains product and version specific.
- Edmund M. Clarke, Orna Grumberg, Somesh Jha, Yuan Lu, & Helmut Veith, “Counterexample-Guided Abstraction Refinement,” *CAV 2000*, LNCS 1855, 154–169, [doi:10.1007/10722167_15](https://doi.org/10.1007/10722167_15). Primary CEGAR proceedings source.

## Languages and automata route

The manuscript's route covers:

- free monoids, syntactic congruences, transformation monoids, and algebraic automata theory;
- deterministic/nondeterministic automata, minimization, pumping, and decision procedures;
- context-free grammars, pushdown automata, normal forms, parsing, and ambiguity;
- finite tree automata, recognizable tree languages, tree homomorphisms, and transducers;
- logic on finite words, MSO/automata correspondence, star-free languages, and aperiodic monoids.

Named-result audit: Myhill–Nerode; Kleene; Arden; Chomsky normal form; Büchi–Elgot–Trakhtenbrot; McNaughton–Papert and Schützenberger characterizations; Chomsky–Schützenberger representation. Release notes must separate independent formulations and later algebraic equivalences.

## Computability and complexity route

The manuscript's route covers:

- partial computable functions, universal machines, enumerability, and model simulations;
- diagonalization, acceptance/halting, mapping reductions, Rice's theorem, and PCP;
- deterministic/nondeterministic time and space, constructibility, configuration graphs, and hierarchy theorems;
- Savitch's theorem, circuit families, nonuniformity, and reductions;
- NP verification, Cook–Levin tableaux, canonical completeness reductions;
- randomized classes, amplification, probabilistic method, conditional expectation, approximation algorithms, and promise problems.

Named-result audit: Church–Turing thesis must remain a thesis rather than a formal theorem; Cook and Levin contributions require careful independent attribution; hierarchy theorem variants depend on machine conventions and simulation gaps; the exact statement of Savitch requires a lower space bound.

## Semantics and type systems route

The manuscript's route covers:

- inductive and coinductive operational semantics;
- evaluation contexts, traces, bisimulation, and observational equivalence;
- domain theory, Scott continuity, least fixed points, adequacy, and full abstraction;
- lambda calculus, alpha-equivalence, substitution, confluence, evaluation strategies;
- simply typed lambda calculus, progress/preservation, normalization, inference, and Curry–Howard;
- Hoare logic, weakest preconditions, relative completeness, and verification-condition generation;
- separation logic, frame reasoning, inductive predicates, concurrency, and linearizability.

Named-result audit: Church–Rosser, Kleene fixed point, Scott domain terminology, Curry–Howard, Hoare logic, Cook relative completeness, Dijkstra predicate transformers, separation logic and concurrent variants, and linearizability all need source-verified historical notes distinct from mathematical statements.

## Verification and automated reasoning route

The manuscript's route spans:

- LTL, CTL, modal mu-calculus, fairness, omega-automata, and fixed-point model checking;
- explicit state exploration, SCC algorithms, BDD symbolic checking, bounded model checking, induction, abstraction, and CEGAR;
- SAT algorithms from DPLL through CDCL, resolution proof systems, proof formats, and proof checking;
- SMT architectures, congruence closure, arithmetic, arrays, bit-vectors, theory combination, and quantified reasoning;
- data/trace refinement, simulation methods, compositional verification, proof-carrying evidence, and trusted computing bases.

Algorithm attribution notes must distinguish a mathematical method from a later engineering architecture. “BDD,” “CDCL,” “SMT,” and “CEGAR” each name families with important variant histories rather than one timeless algorithm.

## Cross-field reading routes

### Algebra and logic

Read syntactic monoids beside quotient algebra, universal properties, and finite semigroup theory. Read formula/automaton translations beside finite model theory and descriptive complexity.

### Probability and learning

Randomized algorithms depend on conditional probability, concentration, coupling of trials, and conditional expectation. Generalization or empirical benchmark claims require statistical study design beyond worst-case algorithm analysis.

### Optimization

Approximation ratios, relaxations, dual certificates, and separation oracles connect complexity with discrete and convex optimization. Numeric encoding and conditioning remain separate issues.

### Systems

Concurrency logic, weak memory, distributed fairness, protocol refinement, cryptographic adversaries, real-time scheduling, and fault models require dedicated system semantics before theorems transfer.

## Attribution workflow for release

For each named result:

1. locate an original or authoritative primary source and a modern proof source;
2. verify spelling, mathematical statement, hypotheses, and chronology;
3. distinguish discovery, publication, independent rediscovery, generalization, and popular naming;
4. record exact edition or stable identifier;
5. paraphrase rather than copy protected exposition;
6. connect the citation to the precise chapter claim;
7. have citation metadata and historical wording independently reviewed.

For code and proof formats:

1. record language/runtime and version;
2. document file format and semantics rather than relying on tool folklore;
3. separate standard specification from implementation behavior;
4. keep dependency-free examples tied to platform primitives;
5. preserve input, output, seed, model hash, and checker result in receipts.

## Open reference gaps

- Exact original-source mapping for several automata/logical correspondences.
- Comparative statements for parser complexity beyond the direct algorithms developed here.
- Fine-grained and parameterized complexity, which are intentionally outside the current chapter slate.
- Weak-memory separation and concurrency logics.
- Current solver proof-format coverage by SMT theory.
- Mechanized metatheory references for each semantics and type-system fragment.
- Accessibility standards and stable alternatives for future figures and interactive traces.

These are limits on theorem-level locator, translation, historical-priority, or version-sensitive tooling review. They do not hide prerequisite facts used in current proofs, and they remain explicit release work rather than claims of complete human publication certification.
