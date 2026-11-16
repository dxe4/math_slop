var e=`---
parent_id: book-types-proofs-construction
matter_id: reader-guide
title: "Reader Guide and Notation"
license: CC BY-SA 4.0
---

# Reader Guide and Notation {#section-1-reader-guide-and-notation}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

This volume is a proof-reference treatment of type theory and constructive mathematics. It is for readers who have met propositional and first-order logic, basic set theory, and proof by induction, and who now want a coherent, precise map of the constructive landscape: the Brouwer--Heyting--Kolmogorov reading, natural deduction, the simply typed lambda calculus, normalization, Curry--Howard, dependent types, identity types, universes, and the boundaries between constructive and classical reasoning. It is not a first course in logic, a programming manual, or a handbook of proof-assistant tactics. It is a working text that treats proofs as computational evidence and tracks exactly when that evidence is present, absent, or recoverable.

The manuscript is a survey and proof-reference bridge at the advanced-undergraduate level. It defines the notation needed for its worked examples and solved exercises, while substantial metatheorems such as strong normalization are stated with proof outlines and pointers rather than proved in full. Readers seeking complete metatheory should follow the references. Type theory compresses syntax, computation, and proof into a single term; expanding that term is a learnable skill.

<a id="section-7-four-reading-routes"></a>
## Four reading routes {#section-9-four-reading-routes}

<a id="section-9-the-continuous-route"></a>
### The continuous route {#section-11-the-continuous-route}

Read the chapters in reading order for a sustained survey: the BHK reading, natural deduction as construction rules, simply typed lambda calculus, reduction and normalization, Curry--Howard, dependent function and pair types, identity types and equality, universes and paradox control, a constructive theorem (a larger prime), a classical existence proof without branch information, choice principles, constructive real-number boundaries, and the proof-assistant trust map. This route supplies an orientation for a longer course or independent study whose full proofs and formal developments come from the cited texts.

<a id="section-13-the-constructive-logic-route"></a>
### The constructive-logic route {#section-15-the-constructive-logic-route}

Read "The Brouwer--Heyting--Kolmogorov reading," "Natural deduction as construction rules," "Simply typed lambda calculus," "Reduction, preservation, and normalization," and "Curry--Howard: precise scope." Add "A constructive theorem: a larger prime" and "A classical existence proof without branch information" for the contrast between constructive and classical existence. This route suits a reader whose primary interest is the extraction of computational content from proofs.

<a id="section-17-the-dependent-types-route"></a>
### The dependent-types route {#section-19-the-dependent-types-route}

Read "Curry--Howard: precise scope," "Dependent function and pair types," "Identity types and equality," and "Universes and paradox control." Add "Proof assistant trust map" for the practical context. This route suits a reader preparing to work in a modern proof assistant or to study homotopy type theory.

<a id="section-21-the-classical-boundaries-route"></a>
### The classical-boundaries route {#section-23-the-classical-boundaries-route}

Read "A constructive theorem: a larger prime," "A classical existence proof without branch information," "Choice principles are setting-sensitive," "Constructive real-number boundaries," and "Proof assistant trust map." Return to the BHK reading and Curry--Howard for the foundational motivation. This route suits a reader who wants to understand exactly where classical reasoning exceeds constructive evidence and what repairs are available.

<a id="section-25-how-to-work-a-chapter"></a>
## How to work a chapter {#section-27-how-to-work-a-chapter}

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one term construction or typing derivation, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, an independence result, or an open problem;
2. a **hypothesis ledger** recording the axioms and type-theoretic assumptions built into each construction;
3. a **level ledger** recording when an argument moves between object language, type theory, proof calculus, and metalanguage.

<a id="section-35-claim-status-conventions-used-across-chapters"></a>
## Claim-status conventions used across chapters {#section-37-claim-status-conventions-used-across-chapters}

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | Subject reduction for $\\lambda^{\\to}$ ("Simply typed lambda calculus"). | Check that the hypotheses match your setting; identify any hidden axiom. |
| **Sketch** | A proof outline that suppresses routine induction or standard constructions; the full proof is recoverable with the indicated tools. | Strong normalization via Tait reducibility ("Reduction, preservation, and normalization"). | Verify that the suppressed steps are indeed standard; fill them in if the context is unfamiliar. |
| **Independence result** | A statement shown unprovable and unrefutable from a specified base theory, often via models or forcing. | The independence of AC from ZF ("Choice principles are setting-sensitive"). | Check the base theory; independence from ZF does not mean arbitrary choice is permitted in a single proof. |
| **Open problem** | A precisely stated question with no known proof or disproof in the stated framework. | No claim receives this status merely because its practical or philosophical scope is unsettled. | Check that the question and framework are explicit; record current partial results without promoting them to a theorem. |

A theorem is not uncertain because a reader finds it difficult. An independence result is not a license to use both alternatives in the same argument. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

<a id="section-48-exercise-markers"></a>
## Exercise markers {#section-50-exercise-markers}

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, axiom selection, proof structure, or interpretation, the solution explains why that choice is warranted.

<a id="section-61-how-to-report-a-suspected-error"></a>
## How to report a suspected error {#section-63-how-to-report-a-suspected-error}

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

<a id="section-65-scope-and-deliberate-boundaries"></a>
## Scope and deliberate boundaries {#section-67-scope-and-deliberate-boundaries}

This book reaches a first treatment of the BHK reading, natural deduction, simply typed lambda calculus, reduction and normalization, Curry--Howard, dependent types, identity types, universes, constructive number theory, classical existence proofs, choice principles, constructive real analysis, and proof-assistant trust. It does not attempt advanced homotopy type theory, full categorical semantics, topos theory, automated theorem proving, or philosophical foundations as distinct from mathematical ones. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
`;export{e as default};