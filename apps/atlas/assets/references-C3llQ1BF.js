var e=`---
parent_id: book-automata-computability-complexity
matter_id: references
title: "References and Source Provenance"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# References and Source Provenance {#section-1-references-and-source-provenance}

<a id="section-1-benchmarks"></a>
## Benchmarks {#section-3-benchmarks}

Michael Sipser, *Introduction to the Theory of Computation*, third edition, is the benchmark for automata, grammars, computability and introductory complexity. His [official MIT lecture index](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html) identifies the course sequence. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), Cambridge University Press, 2009, is the complexity benchmark; the linked author site distinguishes its draft from the published book. These are references for independently written exposition, not reproduced textbook text.

<a id="section-5-primary-and-author-written-references"></a>
## Primary and author-written references {#section-7-primary-and-author-written-references}

The existing formal source bibliography retains Nerode's finite-state equivalence paper (1958), Elgot's logic/automata paper (1961), Arden's regular-expression work (1961), Schützenberger's aperiodicity result (1965) and *Tree Automata Techniques and Applications* by Comon and collaborators. Chapter Sources identify which deep characterisations are cited inputs and which constructions are proved here. Diekert and Gastin's *First-order Definable Languages* is additional author-written reading; no full PDF inspection is claimed where access was unavailable.

Computability references include A. M. Turing, [“On Computable Numbers”](https://theory.stanford.edu/~trevisan/cs172-07/turing36.pdf), 1936–1937; H. G. Rice, [“Classes of Recursively Enumerable Sets and Their Decision Problems”](https://doi.org/10.1090/S0002-9947-1953-0053041-6), 1953; and Emil L. Post, [“A Variant of a Recursively Unsolvable Problem”](https://www.ams.org/journals/bull/1946-52-04/S0002-9904-1946-08555-9/S0002-9904-1946-08555-9.pdf), 1946. PCP's complete history-to-tiles proof is cited rather than supplied by its retained outline.

For oracle relativisation, see Theodore Baker, John Gill and Robert Solovay, [“Relativizations of the P =? NP Question”](https://doi.org/10.1137/0204037), *SIAM Journal on Computing* 4 (1975), 431–442. The oracle constructions and standard general oracle characterisation are cited inputs. The book gives its own complete Savitch, Cook–Levin, QBF, fixed-level formula and elementary circuit arguments with the hypotheses stated in place.

<a id="section-13-native-chapter-provenance"></a>
## Native chapter provenance {#section-15-native-chapter-provenance}

New chapters 2–8 copy and expand formal sources \`regular-expressions-and-transformations\`, \`automata-equivalence-and-minimization\`, \`words-monoids-and-congruences\`, \`logic-of-regular-languages\`, \`context-free-languages-and-pushdown-machines\`, \`ambiguity-parsing-and-normal-forms\` and \`tree-languages-and-transducers\`, respectively, under \`content/books/formal-computation-proof-reference/\`. New chapters 10–13 and 15 expand that directory's \`effective-functions-and-universal-machines\`, \`undecidability-and-reducibility\`, \`resource-measures-and-hierarchies\`, \`np-completeness-and-reduction-design\` and \`randomized-and-approximation-classes\`.

The computing-desk sources under \`content/books/algorithms-computation-proof-desk/\` are folded into the new chapter registrations: \`finite-automata-regular-languages\` into chapter 1; \`grammars-stacks-parsing\` into chapter 6; \`machines-reductions-limits\` into chapter 9; and \`complexity-verification-pnp\` into chapter 13. All original practice solutions and code remain in their credited new copies as well as their original files. New chapter 9 adds complete machine variants, chapter 14 is new quantified/oracle exposition, and chapter 16 expands the original circuit seed.

The full MAX3SAT worked cases, changed formula, exact tables, key, feedback, original task IDs and JavaScript listing are preserved in [Promise Problems and MAX-3SAT Workshop](promise-problems-and-max3sat-workshop.md). It is back matter rather than a seventeenth main chapter. The existing product-equivalence figure is referenced in its original formal-source asset location, not copied.

Original source files, formal specialist bodies, references, PDFs and release histories are preserved. The original chapter IDs from the formal book remain the destination chapter IDs. Source-owned semantic aliases send the old formal and computing-desk resource IDs to their expanded chapters, including the desk grammar, machine and complexity chapters folded into chapters 6, 9 and 13. New files use CC BY-SA 4.0 consistently with their native seeds.
`;export{e as default};