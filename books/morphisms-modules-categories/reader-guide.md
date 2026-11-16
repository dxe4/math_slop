
# Reader Guide and Notation

## Current Homological Algebra route

The primary route is a complete fourteen-chapter Homological Algebra source manuscript at Draft status. Each chapter has at least three developed examples and ten exercises with two hints and a full solution; Chapters 2, 3, 4, 6 and 7 have twelve exercises each. Draft records authorship, while independent review and a current print assembly remain outstanding. Read [Introduction to Category Theory](#/books/introduction-to-category-theory) first, plus the algebra book’s rings, ideals and PID chapters and Linear Algebra Structure and Proof Chapters 1–8. Modules and resolutions receive their own primary chapters before Tor and Ext are used. Later geometric duality statements retain additional local prerequisites and explicitly named imports.

The primary order is modules; projective/injective/flat modules; tensor/Hom; complexes; abelian categories; Tor/Ext; extensions; group cohomology; homological dimension; derived categories; triangulated categories; spectral sequences; duality/local cohomology; exactness and adjoint functors. Eleven older numbered and advanced-category readings remain registered as retained additional readings. Their mathematical sources, exercises and learner identities are preserved as live catalogue companions outside the fourteen-chapter native print order. Former numeric source URLs have physical aliases to those same retained identities. The earlier guide below describes that broader retained sequence and its additional prerequisites.

## Earlier companion sequence: purpose

This volume is a first-course treatment of modules, exactness, and categories from a morphism-first perspective. It is for readers who have met groups, rings, and vector spaces, who are comfortable with proof by induction and contradiction, and who now want to see how the same structural ideas unify linear algebra over a ring, homological algebra, and category theory. It is not a comprehensive encyclopedia of homological methods, a research monograph in algebraic geometry, or a philosophical introduction to category theory. It is a working text that treats modules, abelian categories, derived functors, triangulated and model categories, higher categories, topos theory, categorical logic, monoidal and enriched categories, and the homological tools of adjunctions, spectral sequences, dimension, and duality as connected parts of one landscape.

The opening chapters develop their core definitions directly. Later chapters are a graduate orientation to subjects whose full foundations require additional algebra, topology, sheaf theory, and homological algebra. They identify imported theorems and state the hypotheses needed to use them; the bibliography supplies routes to complete proofs. Every chapter contains worked examples and solved exercises, but those examples do not replace the named prerequisites. Category theory compresses universal properties, natural transformations, and coherence into diagrams; expanding a diagram back into equations is a learnable skill.

## Earlier companion sequence: four reading routes

### The continuous route

Read the chapters in chapter order for a sustained argument: modules over a ring, abelian categories, derived categories, triangulated categories, model categories, higher categories, topos theory, categorical logic, monoidal categories, enriched categories, the categorical proof project, adjunctions and exactness, spectral sequences and filtrations, homological dimension, and duality with local cohomology. This route suits a year-long course or independent study over two terms.

### The homological-algebra route

Read "Modules: linear algebra over a ring", "Abelian Categories", "Derived Categories", "Triangulated Categories", "Model Categories", "Adjunctions and Exactness", "Spectral Sequences and Filtrations", and "Homological Dimension". Add "Duality and Local Cohomology" for geometric applications. This route suits a reader whose primary interest is the computation of derived functors and the structure of resolutions.

### The categorical-structures route

Read "Abelian Categories", "Higher Categories", "Topos Theory", "Categorical Logic", "Monoidal Categories", and "Enriched Categories". Add "Project: Categorical Proof" for the Grothendieck spectral sequence as a test case. This route suits a reader focused on the architecture of categories and their internal logics.

### The geometry-and-duality route

Read "Derived Categories", "Topos Theory", "Project: Categorical Proof", "Spectral Sequences and Filtrations", "Homological Dimension", and "Duality and Local Cohomology". Return to "Modules" and "Abelian Categories" for the foundational definitions. This route suits a reader preparing for algebraic geometry or representation theory.

## How to work a chapter

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, an independence result, or an open problem;
2. a **hypothesis ledger** recording the ring-theoretic and categorical assumptions built into each construction;
3. a **functor ledger** recording when an argument moves between objects, morphisms, functors, and natural transformations.

## Claim-status conventions used across chapters

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | The Hilbert basis theorem ("Modules: linear algebra over a ring"). | Check that the hypotheses match your setting; identify any hidden Noetherian hypothesis. |
| **Imported theorem** | A theorem used with an explicit statement and source, while its complete proof lies outside this volume. | The Freyd--Mitchell embedding theorem ("Abelian Categories"). | Check the stated hypotheses and consult the cited proof when the dependency matters. |
| **Sketch** | A proof outline that suppresses specified routine steps. | A finite diagram chase after embedding a small diagram in a module category. | Verify the suppressed steps and do not treat a sketch as a complete proof. |
| **Open problem or independence result** | A precisely formulated research statement with its framework and status recorded. | None is required for the core development of this book. | Check the exact formulation and source before using the claim. |

A theorem is not uncertain because a reader finds it difficult. An independence result is not a license to use both alternatives in the same argument. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

## Exercise markers

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests functor choice, hypothesis selection, proof structure, or interpretation, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and deliberate boundaries

This book reaches a first treatment of modules over rings, abelian categories, derived categories, triangulated categories, model categories, higher categories, topos theory, categorical logic, monoidal categories, enriched categories, the Grothendieck spectral sequence, adjunctions and exactness, spectral sequences, homological dimension, and duality theorems. It does not attempt advanced algebraic geometry, stable homotopy theory as a research subject, the full theory of infinity-categories beyond quasicategories, or the internal logic of higher topoi in complete detail. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
