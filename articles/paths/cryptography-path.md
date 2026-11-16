# Mathematical cryptography

**Audience.** Computer scientists and mathematicians interested in secure protocols and hard problems.

**Goal.** Connect modular arithmetic, algebra, probability, complexity, curves, and precise security definitions.

**Estimated time.** About 330 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Arithmetic tools

**Milestone.** Implement finite arithmetic and justify every inverse and group operation.

- **Modular arithmetic** — Calculate with remainders and use congruence to expose periodic arithmetic structure.
  - [Congruences, Inverses, and the Chinese Remainder Theorem](../congruences-crt.md)
  - [Winning with Invariants: A Small Book of Combinatorial Games](#/books/winning-with-invariants)
  - [Modular Rhythm Machines: Even Pulses on a Circular Clock](../recipe-modular-rhythm-machines.md)
  - [Remainders, Primes, and Secret-Making Patterns](../number-theory-patterns-first.md)
  - [Number theory](#/courses/atlas-number-theory-cryptography-standard)
  - [Elementary Number Theory](#/books/number-theory-proof-reference)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Diophantine Equations: From Congruence Obstructions to Curves](../diophantine-curves-local-global.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Modular Arithmetic, RSA, and Elliptic Curves Workbench](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Cryptography](#/books/cryptography)
- **Elementary number theory** — Connect congruences, quadratic residues, continued fractions, primes, and classical arithmetic proofs.
  - [Congruences, Inverses, and the Chinese Remainder Theorem](../congruences-crt.md)
  - [Number theory](#/courses/atlas-number-theory-cryptography-standard)
  - [Elementary Number Theory](#/books/number-theory-proof-reference)
  - [Primes Through Ideals and L-Functions](../primes-ideals-l-functions.md)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Diophantine Equations: From Congruence Obstructions to Curves](../diophantine-curves-local-global.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Modular Arithmetic, RSA, and Elliptic Curves Workbench](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography)
  - [Prime or Composite? Tests, Certificates, and Factorization](../primality-factorization-certificates.md)
  - [Arithmetic functions and convolution](../analytic-number-theory-arithmetic-functions-convolution.md)
  - [Chebyshev bounds](../analytic-number-theory-chebyshev-bounds.md)
- **Groups** — Axiomatize reversible composition to study symmetry, permutations, subgroups, quotients, and homomorphisms.
  - [Group Actions: Turning Symmetry into Counting](../group-actions-counting.md)
  - [Abstract Algebra: Structures, Symmetry, and Quotients](#/books/algebra-patterns-structure)
  - [Abstract Algebra Without the Fog: Rules, Symmetry, and Structure](../algebra-patterns-machines.md)
  - [Abstract algebra I](#/courses/atlas-abstract-algebra-proof)
  - [Computational Algebra: Finite Fields, Groups and Ideals](#/books/finite-algebra-computation)
  - [Finite Algebra Table Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-finite-algebra-tables)
  - [Lie Groups and Lie Algebras](#/books/lie-groups-lie-algebras)
  - [The exponential map](../lie-exponential-map.md)
  - [Matrix groups: SO(3) and SU(2)](../lie-matrix-groups-so3-su2.md)
  - [SU(2) double covers SO(3)](../lie-su2-double-covers-so3.md)
- **Fields and extensions** — Study arithmetic where nonzero elements divide and construct larger fields containing roots.
  - [Galois Theory: Symmetries of Polynomial Roots](../galois-symmetry.md)
  - [Abstract Algebra: Structures, Symmetry, and Quotients](#/books/algebra-patterns-structure)
  - [Abstract algebra I](#/courses/atlas-abstract-algebra-proof)
  - [Abstract Algebra Core Practice](../../problems/atlas/absalg-core-practice/index.md)
  - [Galois Theory](#/books/galois-theory)
  - [Fields and the tower law](../galois-fields-tower-law.md)
  - [Automorphism groups](../galois-automorphism-groups.md)
  - [The fundamental theorem](../galois-fundamental-theorem.md)
  - [Number fields and their integers](../algebraic-number-theory-number-fields-integers.md)

## Stage 2: Algorithms and security

**Milestone.** Write a game-based security argument with a named assumption.

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
- **Probability distributions** — Use discrete and continuous distribution families to encode different random mechanisms.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [From Counting to Temperature: Entropy and the Partition Function](../entropy-partition-function.md)
  - [Measure and Lebesgue Integration: Size, Exceptions, and Safe Limits — Overview](#/courses/atlas-measure-lebesgue-integration)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
- **Randomized algorithms** — Use random choices to simplify algorithms and analyze expected cost, error, and concentration.
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
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

## Stage 3: Modern structures

**Milestone.** Compare security and performance assumptions of two modern primitive families.

- **Elliptic curves** — Study cubic curves carrying an abelian group law over rational and finite fields.
  - [Elliptic Curves: From Rational Points to a Research Frontier](../elliptic-curves-frontier.md)
  - [Remainders, Primes, and Secret-Making Patterns](../number-theory-patterns-first.md)
  - [Number theory](#/courses/atlas-number-theory-cryptography-standard)
  - [Elementary Number Theory](#/books/number-theory-proof-reference)
  - [Primes Through Ideals and L-Functions](../primes-ideals-l-functions.md)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Diophantine Equations: From Congruence Obstructions to Curves](../diophantine-curves-local-global.md)
  - [Program and Audit Number-Theory Primitives](../recipe-program-number-theory-crypto-primitives.md)
  - [Modular Arithmetic, RSA, and Elliptic Curves Workbench](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography)
  - [Algebraic and Analytic Number Theory](#/books/algebraic-analytic-number-theory)
  - [Number Theory: Ideals, Analytic Methods, and Finite Arithmetic](#/courses/atlas-number-theory-advanced)
  - [Local Arithmetic, Geometric Fibers, and Analytic Certificates](#/courses/atlas-number-theory-specialist)
- **Coding theory** — Add structured redundancy to detect or correct errors using finite fields and combinatorial geometry.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [Recipe: Finite-Field Arithmetic for Error-Correcting Codes](../recipe-finite-field-arithmetic-coding.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)
  - [Semantics, Cryptographic Information, and Verified Systems](#/courses/atlas-mathematics-computer-science-specialist)
- **Integer optimization** — Optimize discrete decisions using relaxations, branch-and-bound, cutting planes, and combinatorial structure.
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Integer Optimality Certificates: Relax, Branch, Bound, Verify](../numerical-mathematics-integer-certificates.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Linear Programming and Optimisation: A First Course](#/books/linear-programming-optimisation)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
- **Quantum computing** — Compute with amplitudes, unitary transformations, measurement, entanglement, and quantum algorithms.
  - [Mathematical Quantum Mechanics: States, Operators, and Dynamics](#/books/two-state-quantum-mechanics)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)

## Capstone

Implement a toy cryptosystem, break intentionally weak variants, and document its actual security boundary.
