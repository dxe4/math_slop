# Mathematics education tools and textbook design

Source access date: 2026-10-20.

The local collection already has substantial books, visual investigations, exercises, prerequisite routes and offline readers. Its next useful step is to make a few learning sequences more coherent and testable: connect an explicit question to a manipulable example, a mathematical explanation, an independent task and a later transfer task. Wolfram, GeoGebra, Desmos, SageMath, JupyterLite, PreTeXt, OpenStax and Lean provide different parts of that design. None supplies the complete educational experience by itself.

Preserve the existing local implementations. Add narrowly scoped features where they improve a specific lesson, and keep computation optional when the mathematical objective does not require it. A whole-stack migration would introduce substantial work without establishing that learners understand more.

The comparisons below describe documented capabilities. The proposed local priorities are design judgments, not findings that any particular product or feature improves learning outcomes. Repository observations come from the current top-level READMEs and package manifests; they do not certify that every advertised feature works or that the content has passed independent mathematical review.

## What each approach contributes

| Approach | Documented contribution | Suggested learning role | Constraint relevant to this collection |
| --- | --- | --- | --- |
| Wolfram Language and Mathematica | Symbolic and numerical work can live with text and graphics in notebooks. `Manipulate` binds named controls to expressions. | Let a learner vary a mathematically meaningful assumption and compare representations. | Student access has eligibility and use conditions. Desktop use can be offline, but a Wolfram runtime should remain optional here. [Student edition](https://www.wolfram.com/mathematica-student-edition/), [Manipulate](https://reference.wolfram.com/language/ref/Manipulate.html). |
| Wolfram Demonstrations | A public catalog of interactive mathematical examples. | Study how a small set of parameters exposes a phenomenon; use individual examples as references. | Inspect each demonstration and its reuse terms before embedding or adapting its code. [Project](https://demonstrations.wolfram.com/). |
| MathWorld | A free mathematical reference with linked topic areas and contributor references. | Supply a concise definition, alternate terminology or a route to further reading after a lesson. | Educational access does not authorize bulk mirroring. [About](https://mathworld.wolfram.com/about/), [terms](https://www.wolfram.com/legal/terms/mathworld.html). |
| GeoGebra Calculator Suite | Algebra, graphics and other views update together; the suite includes geometry, 3D, CAS and probability tools. | Connect a construction, an equation and a table through the same object. | The complete product has component-specific licensing and non-commercial conditions. [Suite](https://help.geogebra.org/hc/en-us/articles/8379325433629-Calculator-Suite), [license](https://www.geogebra.org/license). |
| Desmos | Sliders, graph settings, tables and substantial keyboard and assistive features. | Offer immediate comparison between an expression, its parameters and a graph. | Rendered detail can be reduced for complex expressions. Treat graphs as numerical displays. [FAQ](https://help.desmos.com/hc/en-us/articles/4406360401677-FAQs). |
| SageMath | Exact algebra, calculus, linear algebra, number theory, groups and other mathematics in an inspectable programming environment. | Provide reproducible computational companions for advanced books. | Sage introduces its own mathematical types and installation requirements; it is not interchangeable with ordinary Python. [Tour](https://doc.sagemath.org/html/en/tutorial/tour.html), [source](https://github.com/sagemath/sage). |
| JupyterLite | Editable notebooks and Python kernels run in the browser and can be served as static files. | Let readers alter a short experiment before downloading their work. | WebAssembly package, system-library, filesystem and concurrency limits require checking actual notebooks. [Overview](https://jupyterlite.readthedocs.io/en/stable/), [limitations](https://jupyterlite.readthedocs.io/en/stable/troubleshooting.html). |
| PreTeXt | Structured STEM authoring with multiple publication outputs and supported interactive elements. | Use a common semantic source for definitions, theorems, examples, exercises and figure descriptions. | Accessible output still requires author-supplied descriptions and appropriate task design. [Project](https://pretextbook.org/), [accessibility](https://pretextbook.org/doc/guide/html/topic-accessibility.html). |
| OpenStax Calculus | A sequenced textbook with examples, nearby checkpoints, projects, chapter practice and errata. | Benchmark curriculum continuity and the connection between examples and independent practice. | The current volume lists CC BY-NC-SA 4.0 and additional AI-use restrictions; do not assume older licensing descriptions still apply. [Preface](https://openstax.org/books/calculus-volume-1/pages/preface). |
| Lean and Mathematics in Lean | Formal statements and proofs receive incremental feedback, with the current proof state visible during editing. | Offer an optional route from a written argument to an explicitly formal argument. | The formalization language adds a learning objective of its own. Pin the toolchain for reproducible exercises. [Introduction](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html), [repository](https://github.com/leanprover-community/mathematics_in_lean). |

## Computation should answer a mathematical question

Wolfram's most transferable authoring idea is the compact relationship between a mathematical expression and its controls. `Manipulate` supports continuous ranges, discrete choices, labels and multiple parameters. Locally, an investigation can express the same relationship with ordinary HTML inputs and one transparent state object: a parameter change updates the formula, diagram, numerical table and explanatory status together. [Manipulate documentation](https://reference.wolfram.com/language/ref/Manipulate.html).

Choose controls that expose a mathematical distinction. For a limit, vary epsilon and delta independently. For a Markov chain, change a transition probability while displaying the stationary distribution and observed frequencies separately. For homotopy, vary the deformation time while retaining the source parameter and the ambient space. A slider that only decorates an already explained fact has a weaker purpose than a control that lets a learner test a specific conjecture.

GeoGebra explicitly links its algebra, table and graphics views. The useful local pattern is a shared mathematical object rather than separate charts that happen to show related data. Selecting a point in a table should identify the same parameter value in the figure and formula; keyboard actions should offer the same selection. [Calculator Suite](https://help.geogebra.org/hc/en-us/articles/8379325433629-Calculator-Suite).

Keep three different kinds of conclusion distinct:

1. **An observed display:** a finite sample or animation suggests a pattern.
2. **A checked computation:** a specified algorithm produced a result under stated arithmetic and domain assumptions.
3. **A proof:** an argument establishes the claim for every permitted input.

For example, a homotopy animation does not establish joint continuity of a map on a product space. A lecture should present the map, verify its boundary conditions and explain continuity using the stated domain and codomain. Likewise, close numerical agreement between two traces does not prove a differential equation solver is accurate between sample points. These distinctions belong beside the computation, where they affect interpretation.

Sage is particularly relevant to the number theory, p-adic and algebraic material because its tutorial includes rings, coercions, polynomials and groups. A companion should name the mathematical domain before invoking an operation: integers, rational numbers, a finite field or approximate real arithmetic can give different meanings to similar notation. Provide expected exact outputs and a short explanation of what the output does not establish. [Sage tour](https://doc.sagemath.org/html/en/tutorial/tour.html).

## Accessibility should preserve the mathematical task

Desmos documents keyboard navigation, mathematical speech, enlargement, contrast and braille support. Its audio trace also supports navigation between curves and points of interest, with descriptions of points, curves and axes. This is a useful benchmark for treating a graph as something a learner can inspect, rather than merely an image with a label. [FAQ](https://help.desmos.com/hc/en-us/articles/4406360401677-FAQs), [audio trace](https://help.desmos.com/hc/en-us/articles/37064105800333-Audio-Trace).

For the local projects, first provide labelled controls, a predictable focus order, a current parameter summary, accessible mathematical notation, and a numerical or structural representation of every essential visual relationship. Sonification can be a later experiment for lessons where hearing variation supplies useful information. A table alone may still miss a feature such as an excluded point, a crossing or the direction of a path; describe those relationships explicitly.

PreTeXt separates short image descriptions from longer descriptions that can contain paragraphs, mathematics and tables. Its guidance also explains that the purpose of an image determines what information the description should convey. An exercise about identifying a feature should provide equivalent observations without giving one group of readers the conclusion that another group must infer. [Author accessibility guidance](https://pretextbook.org/doc/guide/html/topic-accessibility.html).

OpenStax reports MathML rendering, explanatory text for complex graphics, and an ongoing process combining expert audits, remediation and retesting. This supports a local publication habit: record observed barriers with the relevant browser and assistive technology, repair them, then repeat the same task. Automated HTML checks and the presence of MathML are useful evidence about structure; they do not establish that an entire lesson is usable. [Accessibility statement](https://openstax.org/accessibility-statement).

## Books need coherent practice as well as coverage

OpenStax's calculus design places a worked example near a checkpoint and offers larger chapter practice and projects. A local lesson can follow a similar original structure: introduce a question, develop the idea, work one representative example, then ask the reader to solve a related problem before opening support. A later problem should change the representation or assumptions so that success requires more than reproducing the example. [Calculus preface](https://openstax.org/books/calculus-volume-1/pages/preface).

PreTeXt provides a useful publishing precedent for interactive content: online output can include the live investigation, while formats that cannot execute it receive a static version and a route to the standalone interaction. Apply that principle within the existing Quarto and custom HTML pipelines. Printed readers should receive the mathematical question, chosen parameter values, a readable snapshot or table, and sufficient reasoning to continue without scanning a code. [Interactive output guidance](https://pretextbook.org/doc/guide/html/overview-interactive.html).

The existing collection already describes many of these features. Prioritize coherence across a small complete sequence rather than increasing the number of chapters or widgets. One well-developed path from a definition to an unaided proof, a counterexample and a transfer problem is a reviewable educational contribution. Its success should be judged by the learner's mathematical work, with implementation checks serving the narrower purpose of verifying that the intended task is available.

## Optional notebooks and formal proof

JupyterLite can supply editable notebooks without an application server. Its documentation describes browser storage, downloads and static HTTP hosting, but also warns that ordinary Python packages do not automatically work in its WebAssembly kernels. For a pilot, select one small notebook with bundled data and known supported dependencies. Confirm a fresh launch, execution in order, reset, stop, download and reopen before extending the approach. Package imports alone do not verify the mathematical workflow. [Overview](https://jupyterlite.readthedocs.io/en/stable/), [troubleshooting](https://jupyterlite.readthedocs.io/en/stable/troubleshooting.html).

Keep the existing downloadable notebooks in the Bayesian material. A browser runner should add an easy way to try one experiment; it should not replace the ordinary local environment needed for larger statistical tools. State whether output is newly computed or a saved example. Provide plain-text or notebook export because browser-local persistence is not a durable archive.

Mathematics in Lean pairs exposition with editable formal exercises, showing established facts and remaining goals as a proof progresses. Its authors also explicitly describe the learning curve as steep. A suitable local pilot would pair one elementary written proof with a formal version and explain how each formal step corresponds to the mathematical argument. A checked theorem should identify its exact statement and assumptions; it should not label unrelated surrounding prose as verified. [Introduction](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html).

Use the repository's pinned Lean version and dependency files for such an extension. A written proof remains a complete route through the lesson, while a downloadable formal exercise serves readers who want that additional skill. [Mathematics in Lean repository](https://github.com/leanprover-community/mathematics_in_lean).

## Access and reuse decisions

Mathematica's student page describes institutional access, a trial, paid student subscriptions, offline desktop use and limits to personal nonprofessional academic use. It also says that notebooks remain readable with Wolfram Player after the subscription expires. Avoid fixing a price in local documentation because the accessible page does not expose a stable regional amount. Include Wolfram examples as optional companions when they serve an existing learning objective. [Student access and offline use](https://www.wolfram.com/mathematica-student-edition/).

GeoGebra's current official license, updated in November 2025, distinguishes EUPL 1.2 source code from installers, services and language or interface assets with other conditions. The complete product has non-commercial restrictions unless a relevant agreement provides otherwise. This is a reason to check the component and intended distribution before embedding it, rather than describe all of GeoGebra with a single remembered license. [Current license](https://www.geogebra.org/license).

The current OpenStax calculus volume identifies its license as CC BY-NC-SA 4.0. Its reuse notice also states that ingestion into large language models or generative AI offerings requires prior written permission. Use the book's pedagogical organization as a point of comparison and author original local explanations and problems; consult the particular edition before reusing content. [Current preface and reuse notice](https://openstax.org/books/calculus-volume-1/pages/preface).

MathWorld permits limited academic research and teaching use with citation, while restricting bulk reproduction, mirroring and archival robots. Link to relevant entries instead of creating a local mirror. Sage's main repository identifies its software license as GPLv2+; a software license should not be assumed to cover every third-party text or data asset distributed alongside a computational lesson. [MathWorld terms](https://www.wolfram.com/legal/terms/mathworld.html), [Sage source](https://github.com/sagemath/sage).

These are descriptions of the retrieved notices, not a full legal analysis. The immediate local pattern is straightforward: retain original prose, record the provenance and license of reused assets, and keep external runtimes optional.

## Suggested priorities in the existing repositories

The following priorities are proposals derived from the README and manifest inspection. Verify the relevant current implementation before adding a feature that may already exist.

| Repository | Existing direction described locally | Suggested next contribution | Concrete evidence to review |
| --- | --- | --- | --- |
| calculus | A broad interactive textbook with prediction tasks, exact counterexamples, written practice, spaced review, portable progress and static editions. | Develop one bridge from path independence and punctured domains to homotopy. Reuse the existing prediction and written-work conventions. | The learner distinguishes a continuous deformation in the allowed space from one crossing an excluded point, and explains the obstruction without relying on the animation. |
| grraphics_maths | Lucent combines written analysis with a Rust and WebAssembly notebook language and exact rational comparisons. | Give each chosen computation an explicit domain, exact or approximate status, and a matched written question. | A learner can change an assumption, interpret both representations, and state which observed claims still need proof. |
| leet_math | Exercises, books, skill prerequisites, graduated help and shared progress. | Connect a small topology sequence to precise prerequisite repairs and one delayed transfer problem. | A route reaches the same skill through an example, a counterexample and an unaided problem; displayed completion does not become a claim of mastery. |
| math_test | A broad library with prerequisite graphs and an existing commissioning and verification workflow. | Use the documented ownership and catalog workflow to develop an original homotopy lecture as a complete unit. | The unit has prerequisite links, definitions, checked examples, independent exercises, solutions and release notes describing the review actually performed. |
| math_free_from | Explorations and guided paths for curious adults. | Offer a short entry through deforming loops, then a clear path into the formal lecture. | A reader can describe what is being held fixed and why the ambient space matters before seeing formal notation. |
| math_books | Eight Quarto books with formula-to-code examples, described figures, native MathML and bundled editions. | Connect the topology book's homotopy exposition to a standalone lab, with a complete static counterpart in HTML and PDF. | The definition and proof remain available offline; the figure description carries the same relevant relationships as the visual. |
| mcmc_book | A substantial offline book with bundled experiments. | Select one Markov-chain experiment that contrasts exact stationary calculations with finite-run observations. | A short report identifies the target, transitions, observed output and the limit of the finite simulation. |
| bay_inference_boook | A Bayesian course with notebooks, experiments, assessments and explicitly bounded release claims. | Pilot one optional browser notebook alongside the established downloadable version. | A fresh environment reproduces the specified workflow, while the learner explains the statistical assumption being varied and what conclusion follows. |

## A practical standard for the next teaching unit

Each new unit should have a precise learning objective, a short prerequisite repair route, one central question and a complete reading path. The interactive part should expose a mathematical dependency that the reader can also describe in words or formulas. Support should unfold from a useful planning cue to a worked explanation, while an independent attempt remains possible.

Review the unit through three separate questions. Is the mathematics correct, including its domains and exceptions? Can a reader operate every essential task with the available input and output modes? Can a learner solve a new problem after using it? The first two can receive substantial local review now. The third requires actual learner work; page counts, passing scripts and successful animations do not answer it.

For the homotopy lecture, a useful first transfer task is to compare a disk and a punctured disk. Ask the learner to propose a contraction, check whether its values remain in the space, and explain any failure. A second task should change the example so that the reader must inspect the formula and domain again, rather than memorize that every loop drawn around a hole behaves the same way.

<a id="verified-primary-sources"></a>
## Primary sources

All sources below were accessed on 2026-10-20. Notes identify the particular use made of each source; vendor descriptions of educational benefit are not treated as independent evidence of efficacy.

1. [Wolfram Language Manipulate](https://reference.wolfram.com/language/ref/Manipulate.html) — Official control syntax, parameter ranges, discrete alternatives and labels.
2. [Mathematica Student Edition](https://www.wolfram.com/mathematica-student-edition/) — Access, eligibility, offline use and notebook readability after expiry; no regional price asserted.
3. [Wolfram Demonstrations Project](https://demonstrations.wolfram.com/) — Official catalog destination. The directly retrieved page requires JavaScript; no catalog count or blanket reuse license is asserted here.
4. [About MathWorld](https://mathworld.wolfram.com/about/) — Publisher description, topic coverage and free reference access.
5. [MathWorld terms](https://www.wolfram.com/legal/terms/mathworld.html) — Limited academic use and restrictions on bulk reproduction and mirroring.
6. [GeoGebra Calculator Suite](https://help.geogebra.org/hc/en-us/articles/8379325433629-Calculator-Suite) — Official list of calculators, linked views and platform options; no blanket offline guarantee inferred.
7. [GeoGebra license](https://www.geogebra.org/license) — Current component-specific terms and November 2025 update.
8. [Desmos FAQ](https://help.desmos.com/hc/en-us/articles/4406360401677-FAQs) — Sliders, accessibility features and reduced-resolution plotting for complex expressions.
9. [Desmos Audio Trace](https://help.desmos.com/hc/en-us/articles/37064105800333-Audio-Trace) — Keyboard inspection, points of interest and spoken graph information; article updated June 2026.
10. [Sage guided tour](https://doc.sagemath.org/html/en/tutorial/tour.html) — Official scope, including exact mathematics, rings and coercions.
11. [Sage main repository](https://github.com/sagemath/sage) — Primary software repository and GPLv2+ statement.
12. [JupyterLite documentation](https://jupyterlite.readthedocs.io/en/stable/) — Browser kernels, static hosting, editable notebooks and browser storage.
13. [JupyterLite troubleshooting](https://jupyterlite.readthedocs.io/en/stable/troubleshooting.html) — WebAssembly compatibility and browser environment limitations.
14. [PreTeXt project](https://pretextbook.org/) — Structured STEM authoring, publication outputs and accessibility focus.
15. [PreTeXt interactives](https://pretextbook.org/doc/guide/html/overview-interactive.html) — Hosted, source-based and custom interactions, plus static alternatives.
16. [PreTeXt accessibility guidance](https://pretextbook.org/doc/guide/html/topic-accessibility.html) — Semantic output, mathematical exploration and contextual image descriptions.
17. [OpenStax Calculus Volume 1 preface](https://openstax.org/books/calculus-volume-1/pages/preface) — Curriculum and practice structure, current license and explicit reuse notices.
18. [OpenStax accessibility statement](https://openstax.org/accessibility-statement) — MathML, descriptions, audit and remediation process, and remaining accessibility work.
19. [Mathematics in Lean introduction](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html) — Formal exercises, incremental proof states and the distinction between reading and interactive practice.
20. [Mathematics in Lean repository](https://github.com/leanprover-community/mathematics_in_lean) — Local and cloud setup, exercise files, dependency configuration and the repository's Apache 2.0 license.
