
# Reader Guide and Scope {#section-1-reader-guide-scope-and-production-status}

<a id="section-1-current-elementary-number-theory-route"></a>
## Current Elementary Number Theory route {#section-3-current-elementary-number-theory-route}

The current primary manuscript has eighteen chapters at L2–L3. Entrance preparation is school algebra, fractions and proof basics. [Introduction to Proof](#/books/introduction-to-proof) supplies quantifiers, induction, contradiction and mathematical writing; the first number-theory chapter revisits these methods in integer problems. No abstract-algebra or complex-analysis course is required at the entrance. Finite groups of units, Gaussian arithmetic, formal derivatives and polynomial root arguments are developed where first needed. The approximation chapter names its local real-number and inequality preparation; deeper transcendence theorems remain explicitly imported results rather than elementary proofs claimed here.

Read Chapters 1–4 for the arithmetic spine, then 5–9 for units, lifting, two reciprocity proofs and primitive roots. Chapters 10–14 develop linear equations, Pythagorean triples, two/four squares, continued fractions and descent. Arithmetic functions and Möbius inversion are Chapter 15, approximation is Chapter 16, and the final two chapters develop primality certificates and cryptographic arithmetic. The split gives Gaussian square representations and cryptography their own focused primary sources.

The primary chapters include worked examples and 352 exercises with two staged hints and full solutions. Try each question before opening either hint; compare your argument with the solution only after writing a complete attempt.

The catalogue additionally retains nine earlier readings: all seven advanced chapters and the two complete combined chapters. Their original exercises, projects and listings remain available as additional readings outside the eighteen-chapter primary route. The seven advanced subjects have actual successor chapters in [Algebraic and Analytic Number Theory](#/books/algebraic-analytic-number-theory). The retained guide below describes the earlier twenty-two-chapter edition, so its chapter numbers and additional analytic/algebraic preparation apply only to that older sequence.

<a id="section-11-retained-earlier-guide"></a>
## Retained earlier guide {#section-13-retained-earlier-guide}

<a id="section-13-why-this-proof-reference-exists"></a>
## Why this proof reference exists {#section-15-why-this-proof-reference-exists}

Number theory moves easily between elementary statements and deep structures. A question about remainders may be settled by one gcd calculation, may require a character and an $L$-function, or may lead to an open conjecture about rational points. The danger is not only technical difficulty. It is using a correct theorem outside its domain or treating evidence as proof.

This volume is organized as a proof desk. Each chapter identifies the kind of claim being made—existence, uniqueness, obstruction, count, algorithm, asymptotic, or conditional security statement—and supplies nearby failure cases. The goal is not to memorize isolated named results. It is to know which hypotheses make a proof mechanism legal and what certificate lets another reader check the result.

<a id="section-19-intended-readers"></a>
## Intended readers {#section-21-intended-readers}

The principal reader has met elementary algebra, functions, induction, and modular arithmetic. No abstract algebra or complex analysis is assumed at the entrance. The first four chapters rebuild the common proof machinery: quantifiers, well-ordering, Euclid, Bezout, factorization, valuations, congruences, and CRT.

Later branches serve different readers:

- an undergraduate number-theory course can use Parts I–III and selected arithmetic-function chapters;
- a proof-oriented computer scientist can follow the modular, algorithmic, and certificate route;
- a reader approaching algebraic number theory can continue through quadratic rings, ideals, and number fields;
- a reader approaching analytic number theory can follow arithmetic functions, summation, characters, Euler products, and prime distribution;
- a reader interested in arithmetic geometry can take the Diophantine spine into elliptic curves and descent.

The prerequisite diagnostic separates proof fluency, algebra, and computation. A weak result in one area is a repair instruction, not an admission test.

<a id="section-33-six-part-architecture"></a>
## Six-part architecture {#section-35-six-part-architecture}

**Part I: Integer proof machinery.** Chapters 1–4 establish the logical and computational spine. They should be read in order by anyone unsure about Bezout identities, exact valuation arguments, or generalized CRT compatibility.

**Part II: Finite modular structure.** Chapters 5–8 develop unit groups, orders, exponent reduction, polynomial roots and lifting, quadratic reciprocity, and primitive roots. The thread is structural: multiplication modulo a prime is a finite cyclic group, while composite moduli introduce zero divisors and noncyclic unit groups.

**Part III: Diophantine methods.** Chapters 9–13 treat affine lattices, Pythagorean parametrization, sums of squares, continued fractions, Pell equations, descent, local obstruction, rational approximation, and transcendence boundaries. Passing congruence tests is never promoted to a global existence theorem without a family-specific principle.

**Part IV: Arithmetic functions and primes.** Chapters 14–18 turn divisor sums into convolution, analyze average order, build characters, justify Euler products in convergence regions, state prime-distribution theorems, and explain sieve power and limitations.

**Part V: Algebraic arithmetic and curves.** Chapters 19–21 move from quadratic integers and element-factorization failure to unique ideal factorization, number fields, prime decomposition, finite elliptic groups, rational finite generation, and descent bounds.

**Part VI: Algorithms and claim boundaries.** Chapter 22 assembles proof-carrying arithmetic and distinguishes arithmetic correctness from probable-prime evidence, heuristic runtime, cryptographic reductions, and implementation security.

<a id="section-47-five-reading-routes"></a>
## Five reading routes {#section-49-five-reading-routes}

<a id="section-49-elementary-proof-course"></a>
### Elementary proof course {#section-51-elementary-proof-course}

Read Chapters 1–12, omitting Chapter 8 on a first pass if cyclic-group classification is too abrupt. Add Chapters 14–15 for multiplicative functions. The course endpoint is a toolkit: solve linear congruences, classify Pythagorean triples, compute continued fractions, run local obstructions, and invert divisor sums.

<a id="section-53-analytic-route"></a>
### Analytic route {#section-55-analytic-route}

Read Chapters 1–5, then 11, 13–15, 17, 16, and 18. Chapter 11 supplies the continued-fraction preparation for Chapter 13; Chapter 17 supplies the Euler-product preparation for Chapter 16. Before using characters, complete the finite-group and character prerequisites stated in Chapter 16: Chapter 8 supplies unit-group examples, while general finite-abelian structure and character separation need the local construction or explicit import used there. An abbreviated route does not remove an omitted theorem's hypotheses or prerequisites. Supplement Chapter 16 with complex analysis before attempting every analytic proof detail. Keep three ledgers: the half-plane of absolute convergence, the region obtained by continuation, and the boundary theorem used to recover coefficient information.

<a id="section-57-algebraic-route"></a>
### Algebraic route {#section-59-algebraic-route}

Read Chapters 1–7, 9–12, then 19–21. Chapters 5–6 supply the unit/order and polynomial-root preparation used in Chapter 7. Repair quotient rings, ideals, finite-dimensional linear algebra, and field-norm prerequisites from the diagnostic before using the structural imports in Chapters 19–21. Those chapters introduce notation and examples and identify their imported theorems; they do not replace a full abstract-algebra course. A graduate sequel should add modules, tensor products, localization, completions, and Galois theory.

<a id="section-61-computation-and-cryptography-route"></a>
### Computation and cryptography route {#section-63-computation-and-cryptography-route}

Read Chapters 1–8 and 22, using Chapters 18 and 21 for sieve and elliptic contexts. Every program should output canonical residues and proof objects. Educational RSA or curve arithmetic is not production cryptography.

<a id="section-65-counterexample-and-status-route"></a>
### Counterexample and status route {#section-67-counterexample-and-status-route}

Read the failure clinic in every chapter, then Chapters 12, 13, 17, 18, 21, and 22. Maintain a table with columns: claim, hypotheses, evidence, known counterexample, and research status. This route is especially useful for returning researchers working outside their main field.

<a id="section-69-exercise-protocol"></a>
## Exercise protocol {#section-71-exercise-protocol}

The chapter exercise targets are fully represented in the drafting sources, with solution material exposing the decisive step. Use a four-pass cycle:

1. identify whether the task asks for construction, obstruction, count, proof, or audit;
2. state the theorem contract before calculating;
3. create a compact certificate—factor, gcd identity, residue table, order witness, or exact substitution;
4. compare with the solution and locate the first unsupported inference rather than the first different line.

Projects are cumulative and require a claim ledger. A graph or numerical table is never the only evidence for a universal statement. Every computational result needs a text or exact-data alternative. Where a reference model is supplied, it fixes one stated admissible instance; the original project's full ranges, named cases, implementation duties, and any paper alternative remain in force. The 426 original numbered exercises remain the core work. A separately identified NTP extension supplies additional feedback and does not replace or renumber an original exercise. Public keys and models support comparison and repair; they do not turn study checkmarks into graded evidence.

<a id="section-80-deliberate-boundaries"></a>
## Deliberate boundaries {#section-82-deliberate-boundaries}

The volume introduces but does not replace full courses in complex analysis, commutative algebra, algebraic geometry, local fields, modular forms, class field theory, automorphic forms, or modern cryptography. Sieve theory, elliptic descent, and transcendence theory appear at bridge depth. They establish the vocabulary and proof architecture needed to enter specialist books without pretending to compress those fields into one chapter.

Historical theorem names do not supply a complete attribution history. Use the dated sources in the references when distinguishing an open problem from a proved theorem or comparing computational records and cryptographic standards.

<a id="section-86-production-status"></a>
<a id="section-88-production-status"></a>
