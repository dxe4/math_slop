var e=`---
id: book-automata-computability-complexity
title: "Automata, Computability and Complexity"
level: advanced-undergraduate
estimated_minutes: 2400
license: "CC BY-SA 4.0"
---

# Automata, Computability and Complexity {#section-1-automata-computability-and-complexity}

Finite machines, unbounded computation and resource limits ask different mathematical questions. This advanced undergraduate route starts with finite-state behaviour and its algebra, develops stacks and structured languages, then proves simulation, undecidability and complexity results under explicit encodings and resource models.

<a id="section-3-preparation"></a>
## Preparation {#section-5-preparation}

Complete [Mathematics for Computer Science](/books/library-book-algorithms-computation-proof-desk/) or bring its proof, finite-structure, induction, counting, graph and cost foundations. [Introduction to Proof](/books/library-book-introduction-to-proof/) supplies the elementary proof preparation. Formal logic is introduced locally when describing languages; the [Logic and Set Theory book](/books/library-book-introduction-to-logic-and-set-theory/) offers a broader treatment of syntax and models. See the [reader guide](automata-computability-complexity/front-matter/reader-guide.md) for conventions.

<a id="section-7-finite-memory"></a>
## Finite memory {#section-9-finite-memory}

1. [Finite Automata and Regular Languages](automata-computability-complexity/finite-automata-regular-languages.md)
2. [Nondeterminism, Regular Expressions and Closure](automata-computability-complexity/regular-expressions-and-transformations.md)
3. [Equivalence, Myhill–Nerode and Minimisation](automata-computability-complexity/automata-equivalence-and-minimization.md)
4. [Words, Monoids and Congruences](automata-computability-complexity/words-monoids-and-congruences.md)
5. [Logical Descriptions of Regular Languages](automata-computability-complexity/logic-of-regular-languages.md)

The pumping and Myhill–Nerode proofs state their quantifier order and local right-congruence definitions. Logic translations distinguish valid annotations and the empty-word semantics from generic nonempty-domain first-order model theory.

<a id="section-17-stacks-and-structured-languages"></a>
## Stacks and structured languages {#section-19-stacks-and-structured-languages}

6. [Context-Free Languages and Pushdown Automata](automata-computability-complexity/context-free-languages-and-pushdown-machines.md)
7. [Ambiguity, Parsing and Normal Forms](automata-computability-complexity/ambiguity-parsing-and-normal-forms.md)
8. [Tree Languages and Transducers](automata-computability-complexity/tree-languages-and-transducers.md)

Grammar transformations retain their epsilon and start-symbol conditions. Finite ranked-tree automata are distinguished from recursive transformations on data-bearing syntax records, and copying is not assumed to preserve regular images.

<a id="section-25-computability"></a>
## Computability {#section-27-computability}

9. [Turing Machines and Their Variants](automata-computability-complexity/turing-machines-and-variants.md)
10. [Effective Functions, Universal Machines and the Recursion Theorem](automata-computability-complexity/effective-functions-and-universal-machines.md)
11. [Undecidability and Reducibility](automata-computability-complexity/undecidability-and-reducibility.md)

Machine variants receive configuration simulations; universal wrappers are finite code constructions. The recursion theorem and Rice theorem are proved with their extensional domains explicit. PCP undecidability is a cited deep input, with its history sketch labelled as an outline.

<a id="section-33-complexity"></a>
## Complexity {#section-35-complexity}

12. [Time, Space, Savitch and PSPACE](automata-computability-complexity/resource-measures-and-hierarchies.md)
13. [NP-Completeness and Cook–Levin](automata-computability-complexity/np-completeness-and-reduction-design.md)
14. [The Polynomial Hierarchy and Oracles](automata-computability-complexity/polynomial-hierarchy-and-oracles.md)
15. [Randomized Computation and Approximation](automata-computability-complexity/randomized-and-approximation-classes.md)
16. [Circuit Complexity and Lower Bounds](automata-computability-complexity/circuit-complexity-and-lower-bounds.md)

Savitch's recursion, Cook–Levin's finite compilation and the polynomial-size QBF reduction are developed in full. The hierarchy and oracle inputs that are cited rather than proved are named explicitly. No claim resolves P versus NP, equates nonuniform circuits with algorithms, or derives a SAT lower bound from counting arbitrary functions.

<a id="section-43-worked-practice-and-retained-sources"></a>
## Worked practice and retained sources {#section-45-worked-practice-and-retained-sources}

Each main chapter includes developed worked examples, stable exercises, two staged hints and complete solution reveals, ending with a summary. The [Promise Problems and MAX-3SAT Workshop](automata-computability-complexity/back-matter/promise-problems-and-max3sat-workshop.md) preserves all original formulas, tables, task IDs, changed-case solution, feedback and reference listing from the longer randomized source. It is back matter, not another main chapter.

The book develops the formal-language and complexity readings from the earlier Formal Computation and computing-desk collections. Their original examples, solutions, references and code listings remain available. The original formal collection retains its specialist semantics and verification route; earlier language and complexity resource identifiers resolve to their expanded chapters through semantic aliases. The [references and provenance](automata-computability-complexity/back-matter/references.md) identify every seed.

Use the code listings to understand their mathematical invariants. A computation on a few inputs illustrates behaviour; it does not prove the general algorithm or a complexity-class separation.
`;export{e as default};