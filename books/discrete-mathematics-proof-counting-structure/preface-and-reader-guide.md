
# Preface and Reader Guide {#section-1-preface-and-reader-guide}

<a id="section-1-what-this-book-is-for"></a>
## What this book is for {#section-3-what-this-book-is-for}

Discrete mathematics begins when the objects in a question can be separated, compared, counted, joined, or searched. A timetable is a family of sets. A ranking is a relation. A network is a graph. A recursive program is a finite rule unfolding through states. These translations matter because they expose structure: once the right objects and constraints have names, proof can replace guesswork.

This volume is a bridge from first encounters with proof to substantial undergraduate work in enumeration, graphs, finite orders, designs, matroids, and exact computation. It is meant for a reader who wants more than a catalogue of techniques. Each method is developed together with its hypotheses, its proof architecture, its failure modes, and its connections to other methods. Inclusion--exclusion is therefore not merely a formula; it is a way to repair overlapping counts. A graph orientation is not merely a picture with arrows; it is a certificate whose local imbalances can encode a global structure. An exact search is not merely output; it is a finite argument whose state space, pruning rules, and completeness must be auditable.

The main route assumes arithmetic, elementary algebra, and the definitions and proof methods developed in Introduction to Proof. It does not assume calculus or programming. Later chapters are denser than the opening route, but they continue to state local prerequisites and provide backward links. A reader may follow the book linearly, use one of the routes below, or enter through the diagnostic and repair guide.

<a id="section-9-the-reader-s-working-contract"></a>
## The reader's working contract {#section-11-the-reader-s-working-contract}

For every problem, keep five entries visible.

1. **Objects.** State the types of the things under discussion: sets, functions, relations, strings, partitions, graphs, posets, set families, or independence systems.
2. **Constraints.** Translate every verbal restriction. Decide whether repetitions, order, loops, parallel edges, empty blocks, or labelled components are allowed.
3. **Claim.** Write the exact quantifiers and conclusion. Separate existence, uniqueness, enumeration, construction, optimization, and impossibility.
4. **Witness or obstruction.** Identify what would certify success and what would certify failure. A path, matching, coloring, invariant, recurrence, representative, exchange sequence, or exhaustive ledger can serve as a witness.
5. **Boundary.** Record which hypothesis carries the proof and give a small counterexample when it is removed.

This contract prevents common category errors. A construction proves existence but not necessarily uniqueness. A recurrence plus initial values may determine a sequence, while the recurrence alone may not. A computation over all objects of size at most ten proves a bounded finite statement, not a claim for every size. A maximal element need not be greatest. Independence in a graph and independence in a matroid are related words with different definitions.

<a id="section-21-earlier-sixteen-retained-chapter-sources"></a>
## Earlier sixteen retained chapter sources {#section-23-earlier-sixteen-retained-chapter-sources}

The following sixteen sources belong to the earlier reading order and remain available under their original identities. The main route is the fourteen-chapter sequence in the book overview. The stable chapter identifier is the durable locator used in this guide, the glossary, and the subject index. Page numbers are deliberately omitted because pagination differs between rendered formats.

1. [Sets, Functions, Relations, and Orders](sets-functions-relations-orders.md) (`sets-functions-relations-orders`) establishes membership, Cartesian products, maps, equivalence relations, partial orders, lattices, and closure. It supplies the language used everywhere else.
2. [Proof, Induction, Recursion, and Invariants](proof-induction-invariants.md) (`proof-induction-invariants`) develops direct and contrapositive proof, contradiction, induction, recursive definitions, invariants, and extremal choice.
3. [Counting by Bijections and Inclusion--Exclusion](counting-bijections-inclusion-exclusion.md) (`counting-bijections-inclusion-exclusion`) organizes finite counting through disjoint decomposition, products, bijections, binomial coefficients, pigeonhole reasoning, and corrected overlap.
4. [Recurrences and Generating Functions](recurrences-generating-functions.md) (`recurrences-generating-functions`) connects recursive descriptions with closed forms, coefficient extraction, and product constructions.
5. [Graphs, Trees, and Connectivity](graphs-trees-connectivity.md) (`graphs-trees-connectivity`) builds degree counting, paths, components, trees, cuts, and traversal arguments.
6. [Planarity, Coloring, and Matchings](planarity-coloring-matchings.md) (`planarity-coloring-matchings`) studies planar constraints, proper colorings, bipartite structure, matchings, augmenting paths, and neighborhood conditions.
7. [Probabilistic and Extremal Methods](probabilistic-extremal-methods.md) (`probabilistic-extremal-methods`) uses expectation to prove existence and introduces carefully scoped extremal and Ramsey-style reasoning.
8. [Games, Strategy, and Capstone](games-strategy-capstone.md) (`games-strategy-capstone`) treats finite impartial games, backward induction, winning and losing states, strategy arguments, and an initial synthesis project.
9. [Quotients and Canonical Representatives](quotients-and-canonical-representatives.md) (`quotients-and-canonical-representatives`) tests when operations are well defined on equivalence classes and when representatives provide usable normal forms.
10. [Finite Orders, Lattices, and Möbius Inversion](finite-orders-lattices-mobius.md) (`finite-orders-lattices-mobius`) develops finite-poset structure, interval sums, incidence functions, and inversion.
11. [Advanced Enumeration and Partitions](advanced-enumeration-partitions.md) (`advanced-enumeration-partitions`) extends recurrence and generating-function methods to integer partitions and constrained objects.
12. [Graph Decompositions and Orientations](graph-decompositions-orientations.md) (`graph-decompositions-orientations`) turns local degree conditions, directed edges, and decompositions into structural certificates.
13. [Designs and Set Systems](designs-and-set-systems.md) (`designs-and-set-systems`) derives incidence identities, parameter restrictions, intersection counts, and feasibility tests for regular set families.
14. [Matroid Independence Bridge](matroid-independence-bridge.md) (`matroid-independence-bridge`) starts with the empty-set and heredity conditions, then adds augmentation to support equal-sized bases and weighted greedy choice.
15. [Exact Computation and Experiments](exact-computation-experiments.md) (`exact-computation-experiments`) specifies exhaustive generation, canonicalization, invariants, certificates, and the boundary between evidence and theorem.
16. [Cumulative Projects and Solutions](cumulative-projects-solutions.md) (`cumulative-projects-solutions`) combines proof repair, modeling choices, exact certificates, and full solution strategies.

<a id="section-42-four-coherent-reading-routes"></a>
## Four coherent reading routes {#section-44-four-coherent-reading-routes}

<a id="section-44-the-proof-and-structure-spine"></a>
### The proof-and-structure spine {#section-46-the-proof-and-structure-spine}

Read Chapters 1, 2, 9, 10, and 14, then use Chapter 16 for synthesis. This route emphasizes definitions and maps between representations. Chapter 1 distinguishes equivalence from order. Chapter 2 supplies the proof mechanisms. Chapter 9 asks whether a definition survives a change of representative. Chapter 10 turns order intervals into algebraic calculations. Chapter 14 abstracts the exchange behavior already visible in spanning trees and matchings. Use this route if the central question is, “What is the structure, and why is the proposed operation legitimate?”

<a id="section-48-the-enumeration-spine"></a>
### The enumeration spine {#section-50-the-enumeration-spine}

Read Chapters 1, 2, 3, 4, and 11; add Chapters 7 and 15 before the projects. The route moves from finite decompositions to recurrences and coefficient methods, then to probabilistic existence and exact experiments. At each stage retain the sample-space or object-class specification: whether parts are ordered, blocks are labelled, repetitions are allowed, and zero-size objects are admitted can change an answer completely.

<a id="section-52-the-graph-and-independence-spine"></a>
### The graph-and-independence spine {#section-54-the-graph-and-independence-spine}

Read Chapters 1, 2, 5, 6, 12, and 14. Add Chapter 7 for extremal questions and Chapter 13 for incidence structures. This route begins with paths, trees, cuts, colorings, and matchings, then develops orientations and decompositions before abstracting independence. The route repeatedly uses certificates: a spanning tree witnesses connectivity, an augmenting path witnesses that a matching is not maximum, and an exchange element witnesses matroid augmentation.

<a id="section-56-the-investigation-spine"></a>
### The investigation spine {#section-58-the-investigation-spine}

Read Chapters 1, 2, and 15, then choose one domain chapter among 7, 10, 11, 12, 13, or 14 before attempting Chapters 8 and 16. This is the route for a reader interested in conjecture and exact search. It insists on a separation between discovery and proof: enumerate a declared finite universe, test invariants, retain reproducible witnesses, formulate a claim, and then either prove it or label it as bounded evidence.

These routes are not partitions. Cross-reading is a feature of the subject. Möbius inversion connects order and enumeration; spanning trees connect graphs and matroids; incidence matrices connect designs, graphs, and exact computation; canonical representatives can make enumeration feasible.

<a id="section-62-how-to-read-definitions-and-proofs"></a>
## How to read definitions and proofs {#section-64-how-to-read-definitions-and-proofs}

A definition introduces a contract, not a vague prototype. After reading one, produce one example, one near miss, and one smallest boundary case. For a partial order, test reflexivity, antisymmetry, and transitivity separately. For a tree, distinguish connectedness from acyclicity. For a matroid, verify that the empty set is independent, check heredity, and then test augmentation. For a quotient operation, change representatives and check that the resulting class does not change.

Before reading a proof, hide it and write a skeleton:

- the target form of the conclusion;
- the usable hypotheses;
- a likely witness or minimal counterexample;
- the measure that changes in an induction or termination argument.

Then audit the written proof line by line. A statement such as “choose a largest object” needs finiteness or another existence argument. Cancellation in a quotient needs well-defined operations. Division needs a nonzero hypothesis. An extremal argument needs the modified object to remain inside the admitted class. A greedy proof needs an exchange argument, not merely a successful example.

When two proofs are available, compare what each reveals. A bijection may explain equality of two counts; an algebraic coefficient calculation may compute the same number more efficiently. Induction may verify a recurrence; a generating function may expose the structure producing it. Exact enumeration may locate a smallest obstruction; a structural proof explains every size.

<a id="section-77-exercises-solutions-and-projects"></a>
## Exercises, solutions, and projects {#section-79-exercises-solutions-and-projects}

Do not treat a displayed solution as a substitute for an attempt. For a routine exercise, first record the objects, constraints, and intended output. For a proof exercise, write the four-line theorem ledger: quantifiers, hypotheses, conclusion, and load-bearing step. For an algorithmic exercise, add the state representation, invariant, termination measure, and certificate format.

Every exercise has a stable identifier. Chapter exercises use `DM-CH01-E001` through the corresponding chapter number; the two supplementary programs use `DM-SP1-E001` and `DM-SP2-E001` forms. A worked solution repeats its exercise identifier in its own heading. Cite that identifier when reporting a correction or comparing another solution, since displayed numbering can change between editions.

The ten project-scale contracts use `DM-CH08-P001` through the corresponding chapter and project number. This `P` identifier applies to capstones and bounded investigations that require a sustained artifact, even when the local heading uses a more specific teaching label.

Use solutions in three passes. First compare only the statement you solved: many errors come from counting a different object class or proving a weaker claim. Second compare proof architecture and identify the earliest genuine divergence. Third inspect the local algebra. A correct numerical answer reached from an invalid division or an incomplete case split is not a correct solution.

A project artifact should contain enough information for another reader to reproduce and challenge it:

1. a precise object universe and encoding;
2. a conjecture or question with quantifiers;
3. a structural reduction or invariant;
4. an exact procedure with termination and completeness arguments;
5. machine-readable witnesses or obstruction records where computation is used;
6. a proof, bounded conclusion, or explicit unresolved boundary;
7. a text alternative for every visual output.

<a id="section-97-accessibility-and-representation"></a>
## Accessibility and representation {#section-99-accessibility-and-representation}

No mathematical conclusion in this volume should depend solely on color, spatial position, animation, or a diagram. A graph drawing is one representation of a vertex and edge set; the accompanying text or adjacency data is authoritative. A Hasse diagram should be paired with its cover relations. A highlighted recurrence table should also state the decisive entries and inequalities. Search or simulation output should include a numerical or symbolic certificate.

Readers using assistive technology can use the stable identifiers in this guide instead of format-specific page numbers. Symbols are introduced locally and collected in the notation guide. When a diagram is hard to parse, reconstruct the object from its labelled vertices, edge list, incidence list, or order relations. Interactive controls, if later added in a rendered edition, must have keyboard operation, explicit labels, exposed numerical state, and a reduced-motion presentation.

<a id="section-103-claims-names-and-sources"></a>
## Claims, names, and sources {#section-105-claims-names-and-sources}

The labels **definition**, **proposition**, **theorem**, **corollary**, **example**, **heuristic**, **experiment**, and **conjecture** have different authority. A theorem is conditional on its stated hypotheses. An example establishes possibility, or refutes a universal claim, but does not establish a general pattern. An exact experiment establishes only what its declared finite search exhausts. A conventional theorem name is a locator, not by itself a historical claim about priority.

The references and attribution guide gives source families and a protocol for historical claims. Readers should not infer that an attribution has been independently settled merely because a conventional name appears in a chapter. Any later release needs a dedicated citation and priority audit, especially for results with multiple discoverers, evolving formulations, or different finite and infinite versions.

<a id="section-109-development-status"></a>
## Using chapter locators {#section-111-development-status}

Use the chapter identifier and heading to locate a result. When reporting a suspected error, name the exact statement and give the smallest counterexample or repair that exposes the issue.
