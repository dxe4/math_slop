# Welcome

Topology studies which features of a space survive continuous deformation.
Lengths and angles may change, but connected pieces, holes, orientability, and
the ways local neighborhoods fit together can remain. This book begins with
open sets and continuous maps, develops compactness and connectedness, and then
builds algebraic and computational invariants that make global shape calculable.

**Level: L3: Parts 0–II; L4: Parts III–V.** This is a companion gateway,
with a short introduction to several later topics. Entry requires mathematical
proof and metric-space reasoning. Use [Introduction to Proof](#/books/introduction-to-proof)
and the [metric-space chapter](#/books/proof-safe-real-analysis/metric-spaces-open-and-closed)
for that preparation. The [concise starting toolkit](00i-topology-bridge.md)
refreshes notation; it does not replace those courses.

The primary L3 route is [Topology Through Proof and Counterexample](#/books/topology-proof-counterexample).
For the longer L4 development, use [Chains, Spaces, and Invariants](#/books/algebraic-topology-chains-spaces).
Parts III–V assume the corresponding point-set topology and the group, quotient,
and homomorphism language of [Abstract Algebra](#/books/algebra-patterns-structure).
Individual chapters name further linear algebra, calculus or differential-geometry
preparation. They remain gateway readings rather than complete courses in each
specialist subject.

## What you will learn

By the end you should be able to:

- define topologies, bases, continuity, products, and quotients;
- test connectedness, compactness, and separation hypotheses and know why they
  matter;
- distinguish metric sequences from general nets and filters;
- compute fundamental groups in elementary examples using deformation and
  covering ideas;
- build simplicial and CW complexes and calculate homology over a field;
- explain cohomology, exact sequences, duality, manifolds, bundles, knots, and
  sheaves at an honest gateway level;
- use paracompact refinements and partitions of unity, and distinguish cover
  dimension from the dimension of one chosen model;
- calculate relative and product homology with Mayer–Vietoris, universal
  coefficient, and Künneth machinery;
- use degree, intersection, Lefschetz numbers, fibrations, higher homotopy,
  obstructions, and local coefficients with their hypotheses visible;
- implement finite topology, boundary-matrix, and persistence calculations in
  Python; and
- state exactly what a finite sample or mesh cannot prove about an underlying
  continuous space.

## How to read the book

Each numbered chapter starts with an internal preparation route. Read the
definitions with examples and nonexamples side by side: topology is especially
sensitive to changed hypotheses. Then work the formula-to-code section. Code is
used for finite spaces, graphs, complexes, and sampled filtrations; it never
pretends to quantify over every open cover or every continuous map.

Parts I and II form a point-set topology course. Part III develops the first
algebraic invariants. Part IV connects manifolds, differential forms, knots,
categories, sheaves, and persistent homology. Part V supplies a second pass
through the structures most often compressed in a first encounter: controlled
covers, chain-level exact sequences, coefficients, duality applications,
higher homotopy, and twisted orientation. Readers interested mainly in data
may read Chapters 1–8, 13–16, and 22. Readers heading toward geometry should
read Chapters 1–12, 17–19, 23, and 26–28. The categorical language in Chapters
20–21 reorganizes constructions already encountered; it uses the L4
algebraic preparation stated above.

Every interpreted visual is generated locally with Plotnine. A drawing can
suggest a hole or deformation, but a low-resolution plot is not a topological
proof. The text repeatedly separates the represented object, its finite model,
and the invariant being claimed.

## Formula-to-code convention

Code is a second notation, not a substitute for proof. A displayed finite
formula is followed by Python when evaluation clarifies its meaning. Names such
as `map_into_middle`, `monodromy`, and `left_betti` translate the corresponding
symbols before computation. Universal quantifiers, existence theorems,
nonconstructive refinements, and arbitrary continuous maps are not turned into
fake programs; the nearby boundary statement identifies exactly what the
finite calculation establishes.
