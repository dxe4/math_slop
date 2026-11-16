
# Reader Guide and Notation {#section-1-reader-guide-and-notation}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

This is a proof-reference book, not a first course. Its purpose is to make the theorem architecture of geometry visible: every definition, every hypothesis, every axiom on which a proof rests, and every place where a standard argument fails when an assumption is changed. The reader should finish the volume able to audit any geometric claim by asking three questions: What is assumed? What is proved? What would change if an assumption were dropped?

**Level: L2–L3.** Chapters 1–8 use first-year proof and coordinate geometry; chapters 9–16 require the stronger model and incidence reasoning of L3. Preparation is [Euclidean Geometry and Trigonometry](#/books/euclidean-geometry-trigonometry), [Introduction to Proof](#/books/introduction-to-proof), and the vector, inner-product and determinant chapters of [Linear Algebra](#/books/linear-algebra-structure-proofs). Calculus is needed only where a later chapter explicitly differentiates or integrates.

<a id="section-7-reading-routes"></a>
## Reading routes {#section-9-reading-routes}

Read the first eight chapters for axioms, incidence and order, neutral geometry, Euclidean congruence and similarity, circles and inversion, and plane transformation groups. This order places each foundation before the model constructions that use it.

The L3 continuation compares hyperbolic, elliptic, projective and finite geometries before studying convexity, length and area, discrete groups and tessellations. The final chapter collects the comparison and introduces further directions. The measure chapter supplies geometric examples and points to the analysis shelf for the full measure-theoretic development.

For non-Euclidean models, use neutral geometry and plane transformations before the hyperbolic and elliptic chapters. For incidence and finite models, use the incidence chapter before projective planes and finite geometries. Coordinates of conics, Dandelin constructions and quadric classification belong to the companion [Conics, Quadrics and Projection](#/books/conics-solids-projections).

The sixteen main chapters are **Draft** authorship.  Supplied proofs and explicitly imported theorem clauses must be distinguished; neither source extent nor assembly establishes review.

<a id="section-17-how-to-work-a-chapter"></a>
## How to work a chapter {#section-19-how-to-work-a-chapter}

First read the learning purpose and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one computation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain two ledgers:

1. a **hypothesis ledger** recording the axioms and definitions used in each theorem;
2. a **model ledger** recording which models satisfy the hypotheses and which do not.

<a id="section-26-claim-status-conventions-used-across-chapters"></a>
## Claim-status conventions used across chapters {#section-28-claim-status-conventions-used-across-chapters}

Every chapter uses the same three-part classification. The convention determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Full proof** | A complete deductive argument from stated axioms and definitions, with every step justified. | The direct SAS proof of the isosceles-triangle theorem. | Identify a hidden hypothesis or an invalid inference. |
| **Proof sketch** | A compressed argument indicating the main constructions and inferences; details are left to the reader or to cited sources. | The synthetic proof of the Gauss–Bonnet formula for hyperbolic triangles. | Expand the sketch into a full proof, checking each construction for validity in the stated axioms. |
| **Open problem** | A statement unresolved in its stated generality. | The inscribed square problem for arbitrary continuous Jordan curves. | Check the current literature for partial results; do not assume the statement is true or false. |

A theorem is not uncertain because a learner finds it difficult. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

<a id="section-38-exercise-reasoning-categories"></a>
## Exercise reasoning categories {#section-40-exercise-reasoning-categories}

Exercises are numbered within each chapter. The current manuscript does not print letter markers beside them; readers and instructors may use the following categories when planning a balanced selection:

- **R** — retrieval or notation check;
- **F** — routine fluency or computation;
- **P** — proof, justification, or reasoning;
- **C** — counterexample, repair, or misconception diagnosis;
- **T** — transfer to a new surface form or context;
- **I** — inquiry or investigation requiring extended reasoning across sections.

An exercise may belong to several categories. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, hypothesis, proof structure, or interpretation, the solution explains why that choice is warranted.

<a id="section-51-how-to-report-a-suspected-error"></a>
## How to report a suspected error {#section-53-how-to-report-a-suspected-error}

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a countermodel or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

<a id="section-55-scope-and-deliberate-boundaries"></a>
## Scope and deliberate boundaries {#section-57-scope-and-deliberate-boundaries}

This book reaches a first treatment of axiomatic systems, neutral, hyperbolic, elliptic, and projective geometry, finite geometries, incidence and ordered geometry, convexity, geometric measure theory, transformation geometries, and tessellations. It does not attempt differential geometry, Riemannian geometry, algebraic geometry, or geometric topology. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.

<a id="section-61-current-prerequisite-identities"></a>
## Current prerequisite identities {#section-63-current-prerequisite-identities}

The book's resolved prerequisite panel links the completed school geometry and proof books and the exact first-year Lucent chapters `lucent:linear-algebra:vectors-combinations`, `lucent:linear-algebra:matrices-composition`, and `lucent:linear-algebra:determinants`. These replace a whole-book requirement for the L3–L4 linear-algebra reference. Its [inner-product chapter](../linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md) remains optional point-of-use repair for the later model chapters. Model-specific field or calculus vocabulary is stated where used rather than hidden in an unrestricted entry requirement.

<a id="section-65-exact-proof-boundaries"></a>
## Exact proof boundaries {#section-67-exact-proof-boundaries}

Ordered geometry explicitly assumes the compatible linear-order formulation on each line and Pasch; it proves no-three-crossings, two-class plane separation, crossbar and the middle-ray theorem. Equivalence of that formulation to a minimal primitive Hilbert list remains a named foundations input. Neutral geometry states a complete ruler-and-angle working package, treats SAS as an axiom, and proves ASA, exterior-angle strictness and Saccheri–Legendre. Standard neutral SSS and the full rectangle/zero-defect/noncongruent-similarity equivalence remain imported where no complete derivation is given. The earlier sketches are preserved as earlier explanations, not relabelled full proofs.

The real Euclidean, affine and projective model arguments are supplied for those actual models. A general synthetic-to-real-coordinate representation theorem is background rather than a consequence of one coordinate calculation. The finite incidence inequality has a complete positive-matrix proof, while its equality classification is imported. Later chapters retain their precise boundaries for advanced finite-plane obstructions, group classification and measure theory.

<a id="section-71-preservation-under-the-canonical-aliases"></a>
## Preservation under the canonical aliases {#section-73-preservation-under-the-canonical-aliases}

The older identities `chapter-12`, `chapter-13`, `chapter-14` and `geometric-measure-theory` resolve to canonical semantic chapters. Each destination integrates its earlier mathematical material and the original four exercise headings and complete solutions, with staged hints added. Those old exercises remain distinct from the ten newly authored semantic exercises in each destination. The old raw filenames are not advertised as separately registered resources. The historical solution appendix remains intact; its numbers describe the old edition. The current semantic chapter list, rather than array positions or old numbers, supplies navigation.

The separately owned topology surface-classification chapter is not part of this book's edits. Existing conics models are source companions; their later trimming is the separate roadmap 13.D19 task, not a deletion performed or claimed here.
