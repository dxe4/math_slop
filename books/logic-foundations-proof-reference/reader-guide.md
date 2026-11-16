
# Reader Guide and Notation {#section-1-reader-guide-and-notation}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

Mathematical Logic is a graduate course in the relation between formal languages, structures, algorithms and proofs. The prerequisite is the L3 Introduction to Logic and Set Theory book or equivalent preparation. The main route develops twelve substantial chapters; retained specialist readings preserve the earlier broader reference collection without becoming prerequisites to this route.

The text supplies complete local proofs where it claims them. Deep coding, ordinal, realizability and abstract-model-theoretic inputs are named with their exact role. A proof architecture is distinguished from a full proof, and a conditional incompleteness result keeps its consistency and derivability hypotheses.

<a id="section-7-the-twelve-chapter-mathematical-logic-route"></a>
## The twelve-chapter Mathematical Logic route {#section-9-the-twelve-chapter-mathematical-logic-route}

This is the L4 graduate route. Begin with [Introduction to Logic and Set Theory](#/books/introduction-to-logic-and-set-theory) or equivalent preparation in first-order syntax, semantics, effective computation, elementary set theory and proof by induction. Work in order through the following chapters; earlier chapter filenames and semantic IDs remain stable even when their route positions differ from their old printed numbers.

1. [First-Order Syntax, Semantics and Soundness](#/books/logic-foundations-proof-reference/reference-desk-a-levels-of-language)
2. [Model Theory](#/books/logic-foundations-proof-reference/model-theory)
3. [Quantifier Elimination and Types](#/books/logic-foundations-proof-reference/quantifier-elimination-and-types)
4. [Recursive Functions and Representability](#/books/logic-foundations-proof-reference/recursive-functions-and-representability)
5. [Incompleteness and Arithmetization](#/books/logic-foundations-proof-reference/chapter-13)
6. [Sequent Calculus and Proof Theory](#/books/logic-foundations-proof-reference/chapter-14)
7. [Ordinal Analysis and Gentzen's Consistency Argument](#/books/logic-foundations-proof-reference/ordinal-analysis-and-gentzen-consistency)
8. [Intuitionistic and Constructive Logic](#/books/logic-foundations-proof-reference/chapter-15)
9. [Modal Logic](#/books/logic-foundations-proof-reference/modal-logic)
10. [Reverse Mathematics](#/books/logic-foundations-proof-reference/reverse-mathematics)
11. [Decidable and Undecidable Theories](#/books/logic-foundations-proof-reference/decidable-and-undecidable-theories)
12. [Second-Order Logic and Lindström’s Theorem](#/books/logic-foundations-proof-reference/second-order-logic-and-lindstrom)

Each main chapter has three worked examples and ten exercises with two hints and complete solutions beside their prompts. Cover the reveals when attempting a problem. The source remains a Draft: independent mathematical, exercise and editorial review is pending. The existing PDF is an earlier edition and has not been regenerated to match this route.

Local proofs include soundness, elementary submodels and chains, dense-order elimination, capture-safe diagonalisation, Rosser’s argument, the conditional second theorem, an exact equality-free cut theorem, modal canonical completeness, selected reverse-mathematical calibrations, decision procedures, and second-order model constructions. Primitive-recursive arithmetic coding, the exact derivability conditions, HA realizability soundness, Gentzen’s ordinal reduction theorem and Lindström’s abstract characterization remain named inputs with their hypotheses stated where used. A cited input is not described as a locally supplied full proof.

The earlier set-theoretic topology, forcing, large-cardinal, descriptive-set-theory, temporal-logic and continuum readings remain accessible outside the main selector, with their original mathematics and IDs. Existing aliases preserve the earlier computability, linear-logic and homotopy-type-theory record keys at their current destinations. These retained readings and the historical reference tables below are not additional chapters of the twelve-chapter route.

<a id="section-30-earlier-optional-reading-routes"></a>
## Earlier optional reading routes {#section-32-earlier-optional-reading-routes}

The following routes record the original broader collection and its old printed numbering. Use the current twelve-chapter route above for the continuous course. Retained sources and existing destination aliases keep these earlier readings accessible.

<a id="section-34-four-routes-through-the-retained-reference-collection"></a>
### Four routes through the retained reference collection {#section-36-four-routes-through-the-retained-reference-collection}

<a id="section-36-the-continuous-route"></a>
### The continuous route {#section-38-the-continuous-route}

The earlier survey order was: levels of language, model theory, set-theoretic topology, forcing, large cardinals, descriptive set theory, reverse mathematics, modal logic, temporal logic, linear logic, homotopy type theory, computability, incompleteness, proof theory, constructive logic, and the continuum problem. This route suits a guided survey or independent study followed by specialist texts for any topic pursued in depth.

<a id="section-40-the-model-theoretic-route"></a>
### The model-theoretic route {#section-42-the-model-theoretic-route}

Read "Reference desk A --- levels of language", "Model Theory", "Set-Theoretic Topology", and "Forcing". Add "Large Cardinals" and "Descriptive Set Theory" for set-theoretic depth. This route suits a reader whose primary interest is the interaction between syntax and semantics.

<a id="section-44-the-computability-and-proof-route"></a>
### The computability and proof route {#section-46-the-computability-and-proof-route}

Read "Reference desk A --- levels of language", Chapter 12 (Computability and Turing Machines), Chapter 13 (Incompleteness and Arithmetization), Chapter 14 (Sequent Calculus and Proof Theory), and Chapter 15 (Intuitionistic and Constructive Logic). Add "Modal Logic" and "Temporal Logic" for applications to program verification. This route suits a reader focused on the limits of formal reasoning and the extraction of computational content.

<a id="section-48-the-independence-and-foundations-route"></a>
### The independence and foundations route {#section-50-the-independence-and-foundations-route}

Read "Forcing", "Large Cardinals", "Descriptive Set Theory", Chapter 16 (The Continuum Problem and Independence), and "Homotopy Type Theory". Return to "Model Theory" for compactness and completeness, and to Chapter 13 for the incompleteness theorems. This route suits a reader preparing for research in set theory or foundations.

<a id="section-52-how-to-work-a-chapter"></a>
## How to work a chapter {#section-54-how-to-work-a-chapter}

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, an independence result, or an open problem;
2. a **hypothesis ledger** recording the axioms and set-theoretic assumptions built into each construction;
3. a **level ledger** recording when an argument moves between object language, structure, proof calculus, and metalanguage.

<a id="section-62-claim-status-conventions-used-across-chapters"></a>
## Claim-status conventions used across chapters {#section-64-claim-status-conventions-used-across-chapters}

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | The completeness theorem for first-order logic ("Model Theory"). | Check that the hypotheses match your setting; identify any hidden axiom. |
| **Sketch** | A proof outline that records the main dependencies while suppressing steps identified in the text. | The forcing-theorem architecture in "Forcing". | Check the stated boundary and consult the cited full proof before relying on a suppressed step. |
| **Independence result** | A statement shown unprovable and unrefutable from a specified base theory, often via models or forcing. | The independence of CH from ZFC ("Forcing"; Chapter 16). | Check the base theory; independence from ZFC does not mean arbitrary choice is permitted in a single proof. |
| **Open problem** | A precisely stated question with no known proof or disproof in the standard framework. | The consistency of a Reinhardt cardinal with ZF (Chapter 16). | Do not treat conjectures as theorems; record the current evidence and the conditions under which partial answers exist. |

A theorem is not uncertain because a reader finds it difficult. An independence result is not a license to use both alternatives in the same argument. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

<a id="section-75-exercise-markers"></a>
## Exercise markers {#section-77-exercise-markers}

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, axiom selection, proof structure, or interpretation, the solution explains why that choice is warranted.

<a id="section-88-how-to-report-a-suspected-error"></a>
## How to report a suspected error {#section-90-how-to-report-a-suspected-error}

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

<a id="section-92-scope-and-deliberate-boundaries"></a>
## Scope and deliberate boundaries {#section-94-scope-and-deliberate-boundaries}

This book gives a compact first map of model theory, forcing, large cardinals, descriptive set theory, reverse mathematics, modal and temporal logic, linear logic, homotopy type theory, computability, incompleteness, proof theory, and constructive mathematics. It does not attempt advanced inner model theory, full topos-theoretic semantics, automated theorem proving, or philosophical foundations as distinct from mathematical ones. Those subjects need their own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
