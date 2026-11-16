var e=`---
id: book-algorithms-computation-proof-desk
title: "Mathematics for Computer Science: A Proof-First Course"
level: undergraduate
estimated_minutes: 3435
license: CC BY-SA 4.0
---

# Mathematics for Computer Science: A Proof-First Course {#section-1-mathematics-for-computer-science-a-proof-first-course}

This Year 1 book connects precise claims to finite representations, algorithm correctness and resource bounds. Follow the twelve-chapter route below, then choose a specialist continuation.

<a id="section-3-the-twelve-chapter-main-route"></a>
## The twelve-chapter main route {#section-5-the-twelve-chapter-main-route}

Bring school algebra and the proof methods of [Introduction to Proof](/books/library-book-introduction-to-proof/). [Algebra and Functions](/books/library-book-algebra-and-functions/) supplies an algebra repair route. The main sequence is a first undergraduate course. Its new number-theory and graph chapters state their definitions locally; later algorithm proofs use them directly.

1. [Claims, Examples, Counterexamples, and Specifications](algorithms-computation-proof-desk/claims-counterexamples-specifications.md)
2. [Finite Objects, Functions, Relations, and Encodings](algorithms-computation-proof-desk/finite-objects-functions-encodings.md)
3. [Induction, Recursion, and Loop Reasoning](algorithms-computation-proof-desk/induction-recursion-loop-reasoning.md)
4. [Counting, Probability, and Adversarial Examples](algorithms-computation-proof-desk/counting-probability-adversaries.md)
5. [Modular Arithmetic and Number Theory for Computing](algorithms-computation-proof-desk/modular-arithmetic-number-theory-computing.md)
6. [Graphs, Trees and Partial Orders](algorithms-computation-proof-desk/graphs-trees-partial-orders.md)
7. [Contracts, Invariants, and Representations](algorithms-computation-proof-desk/contracts-invariants-representations.md)
8. [Cost, Amortization, and Lower Bounds](algorithms-computation-proof-desk/cost-amortization-lower-bounds.md), including recurrences and divide-and-conquer
9. [Graph Search, Greedy Exchange, and Certificates](algorithms-computation-proof-desk/graph-search-greedy-certificates.md)
10. [Data Structures, Amortization, and Representation Tradeoffs](algorithms-computation-proof-desk/data-structures-amortization.md)
11. [Randomness and Approximation](algorithms-computation-proof-desk/randomness-approximation.md)
12. [Capstone: Specify, Implement, Test, and Verify One System](algorithms-computation-proof-desk/specify-implement-test-verify-capstone.md)

The kept chapters retain their mathematical prose, examples, original practice solutions and existing reference implementations. Each chapter's sixteen original practice tasks now have stable exercise anchors, two hints and full solution reveals. Each of the two new chapters has ten such exercises. Added worked examples develop the arguments rather than replacing the existing ones. Try the exercise before revealing the hints or solution.

The cost chapter proves recurrences with base cases and rounding conditions. The data-structure chapter supplies a nonnegative initial potential and full heap-height and union-by-size bounds. The approximation chapter proves an independent-run amplification bound and the set-cover harmonic guarantee. The capstone remains a learner project: its instructions to construct evidence do not claim that any software or review has already been performed for this manuscript.

<a id="section-24-continue-into-specialist-mathematics"></a>
## Continue into specialist mathematics {#section-26-continue-into-specialist-mathematics}

[Automata, Computability and Complexity](/books/library-book-automata-computability-complexity/) continues the language, computability and complexity route. The separate semantics and verification book takes up programme meaning and proofs of programme properties. The [earlier specialist reading](algorithms-computation-proof-desk/back-matter/earlier-specialist-reading.md) preserves the old mathematical examples and links.

Two earlier chapters have specific destinations. Their source files remain available here until those destination chapters incorporate all their hypotheses, worked solutions and exercises:

| Earlier chapter | Destination | What must be preserved |
| --- | --- | --- |
| [Computational Geometry and the Graphics Pipeline](algorithms-computation-proof-desk/computational-geometry-graphics.md) | *Analytic and Computational Geometry*, chapter \`transformations-and-homogeneous-coordinates\` | Orientation and intersection conditions, convex-hull reasoning, graphics transformations and sampling distinctions. |
| [Quantum States, Gates, Measurement, and Algorithmic Claims](algorithms-computation-proof-desk/quantum-states-algorithms.md) | *Mathematical Quantum Mechanics*, chapter \`quantum-information-bell\` | Normalisation, unitary evolution, tensor states, measurement conditions and all algorithmic resource qualifications. |

The geometry and quantum chapters are supplementary readings rather than part of the twelve-chapter Year 1 route. Their destination tasks own the eventual incorporation; moving their source files in advance would separate examples from their explanations.
`;export{e as default};