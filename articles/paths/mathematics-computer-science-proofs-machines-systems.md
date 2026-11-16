# Mathematics for computer science from claims to verified systems

**Audience.** Curious beginners through graduate-bound computer scientists who want proof, algorithms, formal languages, information, geometry, security, quantum models, and verification in one accountable route.

**Goal.** Design computations and justify their claims with contracts, invariants, complexity models, probability bounds, certificates, counterexamples, exact finite search, and explicit model-to-system boundaries.

**Estimated time.** About 480 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Claims, invariants, and algorithmic representations

**Milestone.** Specify and implement a finite computation with an abstraction function, inductive invariant, termination argument, and representation-aware cost bound.

- **Algorithms and complexity** — Design procedures, prove correctness, analyze resources, and classify tractable versus intractable problems.
  - [Provable Algorithms: Invariants, Recurrences, and Graph Search](#/courses/atlas-provable-algorithms)
  - [Local Rules, Global Worlds: Cellular Automata from First Principles](#/courses/atlas-cellular-automata-emergence)
  - [Cellular Automata Rule Forge](../../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata)
  - [Computational Algebra: Finite Fields, Groups and Ideals](#/books/finite-algebra-computation)
  - [Recipe: Finite-Field Arithmetic for Error-Correcting Codes](../recipe-finite-field-arithmetic-coding.md)
  - [Finite Algebra Table Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-finite-algebra-tables)
  - [Compute Simplicial Homology Without Hiding the Boundary](../recipe-simplicial-homology-computation.md)
  - [Formalize and Check a Finite Logical Claim](../recipe-formalize-finite-logic.md)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Prime or Composite? Tests, Certificates, and Factorization](../primality-factorization-certificates.md)
  - [Analytic and Computational Geometry: Predicates Before Pictures](#/books/analytic-computational-geometry)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Programme Semantics and Verification](#/books/formal-computation-proof-reference)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Recipe: Build and Audit a Finite-State System](../recipe-build-check-finite-state-system.md)
  - [Automata and Verification Proof Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Automata, Computability and Complexity](#/books/automata-computability-complexity)
  - [Cryptography](#/books/cryptography)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
  - [Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction](#/courses/atlas-paper-reading-reproduction-core)
- **Data structures and invariants** — Represent mutable information while preserving structural facts that support efficient operations.
  - [Provable Algorithms: Invariants, Recurrences, and Graph Search](#/courses/atlas-provable-algorithms)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Recipe: Build and Audit a Finite-State System](../recipe-build-check-finite-state-system.md)
  - [Automata and Verification Proof Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification)
- **Cellular automata** — Study how synchronous local update rules create global computation, pattern, conservation laws, and emergent discrete dynamics.
  - [Local Rules, Global Worlds: Cellular Automata from First Principles](#/courses/atlas-cellular-automata-emergence)
  - [Cellular Automata Rule Forge](../../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata)
  - [Tiny Machines, Infinite Questions](../machines-rules-verification-first.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)

## Stage 2: Languages, machines, and limits

**Milestone.** Construct and compare automata, recover a shortest distinguishing word, and use a correctly directed reduction or memory argument with every quantifier visible.

- **Automata and formal languages** — Classify pattern-recognition and computation models through languages, grammars, machines, and closure properties.
  - [Tiny Machines, Infinite Questions](../machines-rules-verification-first.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Recipe: Build and Audit a Finite-State System](../recipe-build-check-finite-state-system.md)
  - [Automata and Verification Proof Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification)
  - [Turing machines and the Church–Turing thesis](../computability-model-theory-turing-machines-thesis.md)
  - [Automata, Computability and Complexity](#/books/automata-computability-complexity)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
- **Algorithms and complexity** — Design procedures, prove correctness, analyze resources, and classify tractable versus intractable problems.
  - [Provable Algorithms: Invariants, Recurrences, and Graph Search](#/courses/atlas-provable-algorithms)
  - [Local Rules, Global Worlds: Cellular Automata from First Principles](#/courses/atlas-cellular-automata-emergence)
  - [Cellular Automata Rule Forge](../../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata)
  - [Computational Algebra: Finite Fields, Groups and Ideals](#/books/finite-algebra-computation)
  - [Recipe: Finite-Field Arithmetic for Error-Correcting Codes](../recipe-finite-field-arithmetic-coding.md)
  - [Finite Algebra Table Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-finite-algebra-tables)
  - [Compute Simplicial Homology Without Hiding the Boundary](../recipe-simplicial-homology-computation.md)
  - [Formalize and Check a Finite Logical Claim](../recipe-formalize-finite-logic.md)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Prime or Composite? Tests, Certificates, and Factorization](../primality-factorization-certificates.md)
  - [Analytic and Computational Geometry: Predicates Before Pictures](#/books/analytic-computational-geometry)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Programme Semantics and Verification](#/books/formal-computation-proof-reference)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Recipe: Build and Audit a Finite-State System](../recipe-build-check-finite-state-system.md)
  - [Automata and Verification Proof Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Automata, Computability and Complexity](#/books/automata-computability-complexity)
  - [Cryptography](#/books/cryptography)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
  - [Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction](#/courses/atlas-paper-reading-reproduction-core)

## Stage 3: Randomness, information, codes, and adversaries

**Milestone.** Prove an expectation or approximation claim, compute an entropy or distance certificate, and separate cryptographic correctness from a named adversarial security experiment.

- **Randomized algorithms** — Use random choices to simplify algorithms and analyze expected cost, error, and concentration.
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
- **Information theory** — Quantify uncertainty, compression, communication, noise, mutual information, and channel capacity.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [From Counting to Temperature: Entropy and the Partition Function](../entropy-partition-function.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Information Theory](#/books/information-theory)
  - [Error-Correcting Codes](#/books/error-correcting-codes)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
- **Coding theory** — Add structured redundancy to detect or correct errors using finite fields and combinatorial geometry.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [Recipe: Finite-Field Arithmetic for Error-Correcting Codes](../recipe-finite-field-arithmetic-coding.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
- **Cryptography** — Construct and analyze secure communication using hardness assumptions, randomness, algebra, and protocols.
  - [Remainders, Primes, and Secret-Making Patterns](../number-theory-patterns-first.md)
  - [Number theory](#/courses/atlas-number-theory-cryptography-standard)
  - [Elementary Number Theory](#/books/number-theory-proof-reference)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Modular Arithmetic, RSA, and Elliptic Curves Workbench](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography)
  - [Prime or Composite? Tests, Certificates, and Factorization](../primality-factorization-certificates.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [A ciphertext and a posterior](../../apps/atlas/index.html#/labs?lab=visual-lab-perfect-secrecy)
  - [Cryptography](#/books/cryptography)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)

## Stage 4: Geometric and visual computation

**Milestone.** Implement a robust predicate or graphics transformation while auditing degeneracy, floating arithmetic, projection, interpolation, and sampling.

- **Computational geometry** — Design algorithms for geometric objects including hulls, intersections, triangulations, and proximity.
  - [Compute Simplicial Homology Without Hiding the Boundary](../recipe-simplicial-homology-computation.md)
  - [Simplicial Homology Workbench](../../apps/atlas/index.html#/labs?lab=visual-lab-simplicial-homology)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
- **Mathematics of computer graphics** — Render and animate geometry using transformations, projections, interpolation, lighting, curves, and sampling.
  - [Complex Maps as Living Grids](../../apps/atlas/index.html#/labs?lab=visual-lab-complex-maps)
  - [Eigenvectors Under Repeated Motion](../../apps/atlas/index.html#/labs?lab=visual-lab-eigenvectors)
  - [Complex Functions in Colour](../../apps/atlas/index.html#/labs?lab=visual-lab-domain-coloring)
  - [Surface Curvature Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-parametric-surfaces)
  - [Fractals by Iteration: Rules, Scale, and the Edge of Escape](../fractals-by-iteration.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Shape Operator and Minimal-Surface Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-shape-operator-surfaces)

## Stage 5: Verified and quantum computation

**Milestone.** Prove finite-state safety or return an executable counterexample, then distinguish an ideal amplitude calculation from simulation and physical implementation evidence.

- **Formal verification** — Specify and mechanically prove program or system properties using logic, types, models, and invariants.
  - [Tiny Machines, Infinite Questions](../machines-rules-verification-first.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Programme Semantics and Verification](#/books/formal-computation-proof-reference)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Recipe: Build and Audit a Finite-State System](../recipe-build-check-finite-state-system.md)
  - [Automata and Verification Proof Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
- **Quantum computing** — Compute with amplitudes, unitary transformations, measurement, entanglement, and quantum algorithms.
  - [Mathematical Quantum Mechanics: States, Operators, and Dynamics](#/books/two-state-quantum-mechanics)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)

## Capstone

Specify, implement, test, analyze, and verify one finite recognizer or protocol; provide dependency-free code, structural validation, exact traces, a universal finite proof or shortest counterexample, complexity and numerical boundaries, an accessible table-based alternative, and a refinement ledger stating what remains unproved about deployment.
