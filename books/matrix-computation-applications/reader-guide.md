
# Reader Guide and Notation

## Why this book exists

This volume is a computational and applied treatment of matrix computation. It is for readers who have met linear algebra at the first-course level---vectors, matrices, linear systems, eigenvalues, and basic orthogonality---and who now want a coherent, precise map of the algorithms that make these ideas work at scale. It is not a first course in linear algebra, a software manual, or a treatise on abstract operator theory. It is a working text that treats conditioning, factorization, iterative methods, eigenvalue algorithms, preconditioning, structured matrices, randomization, and verification as connected parts of one landscape.

The manuscript is written at the advanced-undergraduate level and defines its central numerical-linear-algebra terms, while assuming the linear-algebra and programming preparation listed in the diagnostic. Every chapter contains worked examples and solved exercises. If a chapter feels dense, use the notation guide and diagnostic before concluding that the material is inaccessible. Numerical linear algebra compresses problem structure, algorithm design, and error analysis into a single argument; expanding that argument is a learnable skill.

## Four reading routes

### The continuous route

Read the chapters in chapter order for a sustained argument: problem representation and algorithm design, conditioning and stability, floating-point and factorization, QR and SVD, eigenvalue computations, sparse and iterative methods, Krylov subspace methods, preconditioning, eigenvalue iterations, pseudospectra, tensor decompositions, randomized numerical linear algebra, matrix functions, structured matrices, the scale-to-large-data project, advanced factorizations and block algorithms, mixed-precision and verified computing, and synthesis. This route suits a year-long course or independent study over two terms.

### The direct-methods route

Read "Problem, Representation, Algorithm", "Conditioning and Stability", "Floating-Point and Factorization", "QR, Least Squares, and SVD", and "Advanced Factorizations and Block Algorithms". Add "Mixed-Precision and Verified Computing" for accuracy trade-offs. This route suits a reader whose primary interest is reliable dense and sparse direct solvers.

### The iterative-and-large-scale route

Read "Problem, Representation, Algorithm", "Sparse and Iterative Methods", "Krylov Subspace Methods", "Preconditioning", "Eigenvalue Iterations", and "Randomized Numerical Linear Algebra". Add "Structured Matrices" for fast algorithms. This route suits a reader focused on problems too large for dense factorization.

### The eigenproblem-and-dynamics route

Read "Eigenvalue Computations", "Eigenvalue Iterations", "Pseudospectra", and "Matrix Functions". Add "Krylov Subspace Methods" and "Preconditioning" for large-scale eigenproblems. This route suits a reader preparing for spectral analysis, stability theory, or differential equations.

## How to work a chapter

First read the opening question and write down the exact mathematical problem, the representation, and the algorithm at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, an empirical observation, or an open problem;
2. a **hypothesis ledger** recording the structural assumptions built into each algorithm (symmetry, definiteness, nonsingularity, full rank);
3. a **cost ledger** recording the dominant operation count, memory requirement, and convergence factor for each method.

## Claim-status conventions used across chapters

Use the following four-part classification as a reading and auditing lens. Chapter prose does not label every sentence; the reader should record the status of material claims in the claim-status ledger.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated hypotheses; every material condition is listed. | The Eckart--Young theorem for best rank-$k$ approximation ("QR, Least Squares, and SVD"). | Check that the hypotheses match your setting; identify any hidden condition. |
| **Sketch** | A proof outline that suppresses routine induction or standard constructions; the full proof is recoverable with the indicated tools. | The cubic convergence of Rayleigh quotient iteration ("Eigenvalue Computations"). | Verify that the suppressed steps are indeed standard; fill them in if the context is unfamiliar. |
| **Empirical observation** | A pattern observed in numerical experiments or widely reported in the literature, without a universal theorem. | The practical growth factor of LU with partial pivoting is usually $O(n)$ ("Floating-Point and Factorization"). | Check the problem class and scale; the observation may fail for adversarial examples. |
| **Research-status question** | A question whose resolved, partial, or open status must be tied to a dated literature scope. | Communication lower bounds and their attainability for explicitly declared sparse graph families ("Synthesis and Open Directions"). | Record the problem class, computational model, dated evidence, and partial results before making an open-status claim. |

A theorem is not uncertain because a reader finds it difficult. An empirical observation is not a license to ignore counterexamples. A research-status question is not a universal open problem until its scope and current evidence support that conclusion. Each statement needs the right warrant.

## Exercise markers

Exercises are numbered within each chapter. The following markers are a recommended annotation scheme for instructors and readers; the current chapter headings do not yet encode them:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, algorithm selection, proof structure, or interpretation, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and deliberate boundaries

This book reaches a first treatment of dense and sparse factorizations, iterative and Krylov methods, eigenvalue algorithms, preconditioning, pseudospectra, tensor decompositions, randomized numerical linear algebra, matrix functions, structured matrices, block algorithms, and mixed-precision and verified computing. It does not attempt advanced multigrid theory, full parallel scalability analysis, software engineering for high-performance libraries, or the complete theory of finite-element discretizations. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.

The manuscript quality target is seventeen substantive chapters. The separately retained mixed-precision navigation companion remains in the eighteenth-entry native reading order and print placement, without being counted as an additional full chapter.
