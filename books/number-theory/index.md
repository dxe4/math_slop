# Welcome

Number theory studies the integers, a familiar collection with an inexhaustible internal life. A child can understand the question “Which numbers divide 60?”, yet the same language leads to secure communication, the distribution of primes, and conjectures that have resisted generations of mathematicians. This book develops that language by alternating three activities: proving structural results, carrying out algorithms, and testing examples without mistaking tests for proofs.

## Who this book is for {#who-this-book-is-for}

This alternative number-theory text has several reading levels. Its **L2 core**
is the [starting toolkit](00i-number-theory-bridge.md), Chapters 1–15,
and Chapters 43–44. Begin with school algebra and the proof methods in
[Introduction to Proof](#/books/introduction-to-proof). The toolkit refreshes
notation; it does not replace a course in proof or analysis.

Chapters **16–30 are L3–L4**. They require groups, rings, polynomial arithmetic
and fields from [Groups, Rings, and Fields](#/books/algebra-patterns-structure),
linear algebra from [Lucent](#/books/lucent-linear-algebra), and, for analytic topics,
convergence and integration from [Real Analysis](#/books/proof-safe-real-analysis).
Specific preparation is stated at each chapter's opening. Chapters **31–42 are
L5**: their local algebra, geometry, analytic number theory and representation
theory require graduate preparation named beside the material. Chapter 45 is an
L3–L4 continuation in generating functions and asymptotics.

The primary Euler route is the Atlas number-theory shelf, beginning with
[Elementary Number Theory](#/books/number-theory-proof-reference).
This Quarto volume offers a different exposition and a wider selection of
specialist introductions. Reading an advanced overview does not supply all the
proofs or prerequisites of a graduate course.

By the end, you should be able to:

- use quantifiers, induction, contradiction, and minimality with care;
- compute greatest common divisors and Bézout coefficients;
- prove and apply unique prime factorisation;
- solve linear congruences, Chinese-remainder systems, and linear Diophantine equations;
- compute standard arithmetic functions and use Möbius inversion;
- decide quadratic residuosity with reciprocity;
- build continued fractions and solve Pell equations;
- explain the mathematical correctness—and the practical limitations—of elementary public-key protocols;
- construct finite fields and compute polynomial gcds, traces, and norms;
- use ideals, class groups, units, and splitting laws to organize algebraic
  number fields;
- explain how characters, L-functions, modular forms, heights, and probability
  extend classical number theory;
- use field extensions and Galois groups to organise polynomial symmetry;
- explain modern sieve bounds, additive energy, adeles, Jacobians, and
  certificate-producing algebraic computation from their internal prerequisites;
- prove foundational cancellation estimates and explain equidistribution,
  finite local extensions, curve zeta functions, and Artin reciprocity;
- use canonical dynamical heights and the local-to-global automorphic
  dictionary while respecting the boundary between proved correspondences and
  conjectural Langlands principles;
- compute primitive roots and cyclotomic polynomials, distinguish primality
  evidence from proof certificates, and use partition generating functions and
  exact recurrences;
- distinguish proved results, conditional results, heuristics, and open conjectures.

## How the journey is organised

The concise primer supplies the immediate notation. Part I begins the formal subject with proof and
division; Parts II–V develop the classical core through congruences,
Diophantine equations, reciprocity, approximation, cryptography, prime
distribution, and synthesis. Part VI continues into additive number theory,
quadratic forms, lattices, $p$-adic methods, elliptic curves, analytic methods,
and modern computation. Advanced chapters state clearly when a proof is given,
sketched, or deferred. Part VII forms a third-course route through finite fields,
ideal arithmetic, class groups and units, reciprocity, Dirichlet L-functions,
modular forms, heights and transcendence, and probabilistic number theory.
Part VIII is a fourth-course or advanced independent-study route through Galois
symmetry, sieve methods, additive combinatorics, adeles and ideles, rational
points on curves, and explicit algebraic-number certificates. Each chapter names its local preparation. These reminders support earlier study;
they do not remove the graduate prerequisites of Chapters 31–42.

Part IX completes six routes that the earlier chapters deliberately left open.
It develops exponential-sum cancellation, finite extensions of local fields,
zeta functions of curves over finite fields, local and global class field
theory, arithmetic dynamics, and the automorphic interpretation of modular and
Galois data. Its six chapters can be read in order, but three shorter routes are
also built into the cross-references: the analytic route 21–27–32–33–37;
the local–global route 19–26–31–34–38–40; and the geometric–automorphic
route 20–28–35–39–42. Chapter 41 forms a dynamics route from Chapters 14,
19, 22, and 29.

Part X closes three computational and enumerative gaps left by those routes.
Chapter 43 develops primitive roots, cyclotomic polynomials, Frobenius factor
degrees, and discrete logarithms. Chapter 44 separates primality tests,
certificates, and factorisation algorithms. Chapter 45 develops integer
partitions from Ferrers diagrams through $q$-series and asymptotics. The current
edition contains 45 numbered chapters, one concise primer, and six appendices
across 53 configured pages.

Each main chapter contains learning goals, definitions, theorems with proofs or proof ideas, worked examples, a pitfall, a summary, and exercises of increasing ambition. Hints and selected solutions are in [sec-hints](b-hints.md#sec-hints). The notation glossary [sec-notation](a-notation.md#sec-notation) is meant to be consulted early and often; the topic guide [sec-topic-guide](d-topic-guide.md#sec-topic-guide) supplies index-style navigation.

The [guided problem studios](e-problem-studios.md) then turn the whole
book into an active course. They include complete proof pathways, finite-field
and class-group computations, analytic and probabilistic claim audits,
cryptographic certificates, elliptic-curve projects, and advanced synthesis
briefs. Advanced studios add cancellation audits, local extension
comparisons, curve point-count certificates, Artin maps, functional graphs,
and local-factor reconstruction. A reader can use them for self-study,
seminars, or a capstone portfolio.

## How to read a proof

A proof is not merely a calculation whose final line looks plausible. It is a chain in which every step follows from a definition, an earlier result, or an explicitly stated assumption. When reading, ask four questions:

1. What is being assumed, and what must be shown?
2. Where is each hypothesis used?
3. Does the argument cover boundary cases such as zero or negative integers?
4. Would the reasoning still work if a tempting but unstated assumption were removed?

When writing, name the strategy before the details if that helps the reader: “We prove the contrapositive” or “Choose the least counterexample.” A short argument can still be rigorous; a long string of symbols can still hide a gap.

## Computation and visuals

Computation is used as reconnaissance. It can expose a pattern, locate an exception, or check an algorithm. It cannot prove an assertion about infinitely many integers by checking only finitely many cases. The plotted figures in this book are generated deterministically by `figures.py` with plotnine. Every visual is followed by a prose interpretation, so the mathematical message remains available even when the image is not.

The [Python laboratories for exact arithmetic](f-python-laboratory.md)
provide twenty runnable, self-contained examples. They cover Euclid, sieving,
factorization, modular powers, CRT, totients, continued fractions, quadratic
residues, a deliberately insecure RSA toy, the Möbius function, multiplicative
orders, prime gaps, Pell recurrences, integer partitions, divisor sums and their
convolution identity, finite Euler products, prime-counting approximations,
Gaussian norms, and finite sumsets. Thirteen paired Plotnine figures expose the
finite structure. Each program returns a finite certificate and is automatically
executed during publication validation. Every numbered chapter also includes at
least one described visual checkpoint. Formula-to-code examples now appear in
the numbered chapters themselves whenever a finite standalone translation is
clear; the appendix remains a concentrated practice route rather than the only
place where code appears.

## Conventions

Unless stated otherwise, $a,b,m,n$ denote integers, $p$ and $q$ denote primes, and a modulus is positive. We write $a\mid b$ when $a$ divides $b$, and $a\equiv b\pmod n$ when $n\mid(a-b)$. The set of positive integers is $\mathbb{N}=\{1,2,3,\ldots\}$. Greatest common divisors are nonnegative. Empty products equal $1$.

Some advanced results are stated without full proof in the vista chapters. Such statements are labelled clearly. Open questions are never promoted to theorems, and numerical evidence is described with its finite scope.

## A suggested study rhythm

Read with pencil and paper. Before reading a proof, try a few cases and predict the mechanism. After reading it, close the book and reconstruct its spine in two or three sentences. Attempt the fluency and proof exercises before consulting hints. For a first course, read the concise primer and Chapters 1–8, 11, and 15. Chapters 9–10 or 12–14 can be selected by interest; Part VI supports a second course or guided independent study. Part VII is designed for a third course or a long independent-study sequence; its prerequisite checkpoints point back to the exact chapters needed, so it does not assume an external abstract-algebra, complex-analysis, or probability course merely to begin. Part VIII may then be read in order, or as paired routes: Chapters 31 and 34–36 for global algebraic arithmetic, and Chapters 32–33 for combinatorial and analytic counting.

Part IX is best attempted after one of the internal routes displayed above.
Chapter 37 may follow the analytic pair 21 and 27; Chapters 38 and 40 form a
local-reciprocity sequence; Chapters 39 and 42 form a Frobenius-to-automorphic
sequence; and Chapter 41 may be studied independently after heights and
$p$-adic methods.

Part X is deliberately modular. Chapter 43 can follow Chapters 4, 7, and 23;
Chapter 44 can follow Chapters 3, 11, and 22; Chapter 45 can follow Chapters 7,
16, and the concise power-series repair in Chapter 28. Each chapter restates
the small amount of extra language it needs.

The integers reward patience. Their rules are spare, but the consequences are not.
