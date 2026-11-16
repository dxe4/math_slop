# Welcome

Combinatorics asks what finite structures exist, how many there are, and how
they can be found. Its characteristic move is to describe the same object in
two useful ways: a bijection proves two counts equal, a generating function
turns a recurrence into algebra, and an independence system makes a selection
problem precise. The sixteen-chapter primary route develops those moves through
counting, generating functions, asymptotic enumeration, partitions, extremal and
probabilistic methods, designs, matroids, and algebraic enumeration. Separate
earlier readings introduce graph theory and specialist continuations.

## Preparation and the primary route

This is an advanced undergraduate (L3) enumeration book. Its entry
requirements are [Introduction to Proof](#/books/introduction-to-proof)
and [Discrete Mathematics: Proof, Counting, and Structure](#/books/discrete-mathematics-proof-counting-structure).
You should be comfortable proving implications, using induction, working with
finite sets and functions, and interpreting basic finite probability. The
[concise starting toolkit](00i-combinatorics-bridge.md) is a reference
for those ideas, not a replacement for the prerequisite books. In particular,
review [partitions and elementary enumeration](#/books/discrete-mathematics-proof-counting-structure/advanced-enumeration-partitions)
and [finite orders and Möbius inversion](#/books/discrete-mathematics-proof-counting-structure/finite-orders-lattices-mobius)
before their more developed treatments here.

The asymptotic chapter also identifies local calculus preparation for its
integral proofs: definite integration, integration by parts, and elementary
limits. Its exact formal coefficient arguments are treated separately from
those analytic estimates.

The primary route consists of the following sixteen chapters. Each chapter
develops proofs, worked examples, and ten exercises with two hints and a full
solution available beside the question. Try the problem before opening the
reveals; the first hint suggests a model or invariant, while the second
identifies the decisive step. The [solution index](app-c-solutions.md#sec-comb-primary-solutions)
links directly to every supported exercise. Reading a solution is useful
feedback, but is not evidence that you can reconstruct its argument.

| Route | Chapter |
| --- | --- |
| 1 | [Counting, binomials, and multinomials](01-counting-structure.md) |
| 2 | [Pigeonhole and double counting](03-pigeonhole-double-counting.md) |
| 3 | [Inclusion–exclusion and Möbius inversion](04-inclusion-exclusion-mobius.md) |
| 4 | [Recurrences](05-recurrences.md) |
| 5 | [Ordinary generating functions](06-ordinary-generating-functions.md) |
| 6 | [Exponential generating functions](07-exponential-generating-functions.md) |
| 7 | [Asymptotic enumeration](08-asymptotic-enumeration.md) |
| 8 | [Partitions and tableaux](09-partitions-tableaux.md) |
| 9 | [Posets and lattices](10-posets-lattices.md) |
| 10 | [Extremal combinatorics](16-extremal-combinatorics.md) |
| 11 | [Ramsey theory](17-ramsey-theory.md) |
| 12 | [The probabilistic method](18-probabilistic-method.md) |
| 13 | [Designs and codes](19-designs-codes.md) |
| 14 | [Matroids](20-matroids.md) |
| 15 | [Algebraic enumeration](21-algebraic-enumerative.md) |
| 16 | [Algorithms and random structures](22-algorithms-random-structures.md) |

The first six chapters build a common language: specify the finite objects,
prove a counting identity, then translate a recurrence or decomposition into
a generating function. The asymptotic chapter separates estimates from exact
identities. Partitions, orders, and lattices connect that language to more
structured objects. The last seven chapters use extremal, Ramsey,
probabilistic, coding, independence, symmetry, and algorithmic ideas to ask
what structures must exist and how they can be represented or generated.
Their finite models are stated explicitly; a uniform distribution on
encodings need not induce a uniform distribution on the objects being counted.

The primary route includes worked arguments and supported practice.

## Retained readings and later study

The earlier chapter source files remain in this collection, outside the primary
book contents. Their source links below record the earlier readings and are
kept for continuity. The separate
[binomial and multinomial reading](02-binomial-multinomial.md)
keeps its original explanation and problems; the primary counting chapter now
also develops those tools. The graph sequence remains as earlier readings on
[walks and degrees](11-graphs-walks-degrees.md),
[trees](12-trees.md),
[connectivity and spanning routes](13-connectivity-euler-hamilton.md),
[matchings and flows](14-matching-flows.md), and
[colouring and planarity](15-coloring-planarity.md).
For a complete primary graph course, continue in
[Graph Theory](#/books/graph-theory).

The specialist readings on
[analytic combinatorics](23-analytic-combinatorics.md),
[spectral graph theory](24-spectral-graph-theory.md),
[hypergraphs and set systems](25-hypergraphs-set-systems.md),
[additive combinatorics](26-additive-combinatorics.md),
[geometric and polyhedral methods](27-geometric-polyhedral.md), and
[pseudorandom graphs](28-pseudorandom-graphs.md)
also remain intact. They reach beyond the L3 primary route. Use their local
preparation statements to choose the necessary linear algebra, probability,
analysis, or graph theory; the availability of a reading does not make those
prerequisites disappear. Their original investigations, finite calculations,
and solutions remain part of the book's earlier material.

The [readiness appendix](app-a-readiness.md),
[glossary](app-b-glossary.md),
[additional selected solutions](app-c-solutions.md),
[Python lab](app-d-python-lab.md),
[bibliography](bibliography.md), and
[topic guide](topic-guide.md) remain accessible references. The
historical source-number itinerary below is retained to explain relationships
among the earlier readings. Its chapter numbers refer to the numeric prefixes
of the source filenames, such as 11 for the walks-and-degrees reading and 23
for analytic combinatorics; use the named links in the table above for the
current sixteen-chapter primary order.

## What you will learn

By the end you should be able to:

- model selections, arrangements, distributions, and decompositions without
  silently overcounting;
- prove identities by bijection, double counting, inclusion–exclusion, and
  generating functions;
- solve recurrences and extract exact or asymptotic coefficients;
- work with partitions, partially ordered sets, graphs, trees, matchings,
  flows, colorings, and planar embeddings;
- use extremal, Ramsey, and probabilistic reasoning while tracking every
  hypothesis;
- recognize designs, error-correcting codes, matroids, and symmetric-function
  methods as extensions of earlier counting ideas;
- transfer generating-function singularities into coefficient asymptotics;
- use spectra, hypergraph incidence, sumsets, and polytope lattices as modern
  structural languages;
- distinguish quasirandomness, regularity, and graph-limit claims from finite
  visual resemblance;
- implement exact finite calculations and randomized experiments in Python;
  and
- distinguish computational evidence from a proof about all finite sizes.

## Earlier source-number reading routes

Chapters 1–5 form the common core. Chapters 6–10 develop enumerative tools;
Chapters 11–15 form a first graph-theory course; Chapters 16–22 show how
local counting interacts with global structure, randomness, algebra, and
algorithms. A reader interested in algorithms can follow 1–5, 11–15, 18,
20, and 22. A reader interested in enumeration can follow 1–10 and 21.
Chapters 23–28 form an advanced second course. They restate their entry
requirements and may be read selectively after the relevant core route:
23 after 6–8, 24 after 11–14, 25 after 14 and 16, 26 after 3 and 16–18,
27 after 2 and 10, and 28 after 16, 18, and 24.

Every numbered chapter contains a formula-first Python reading. The program
computes a finite instance of the displayed formula and includes checks where
they add information. It does not replace a bijection, an induction, or an
existence proof. Likewise, Plotnine visuals expose patterns and failure modes,
but their interpretation always says what the finite picture can and cannot
establish.

### Reading symbols through code

Mathematical symbols compress a relationship; the neighboring Python expands
that relationship into named quantities. For example, $r_{A+A}(s)$ becomes
`representations[sum_value]`, $\mu_2$ becomes the second entry of
`laplacian_eigenvalues`, and $L_{\Delta_d}(t)$ becomes
`standard_simplex_lattice_count(dimension, dilation)`. Related identities may
share one implementation. Nonconstructive existence theorems and limits over
unbounded sizes are not given fake “proof code”; their finite diagnostics are
labeled as such.
