
# Reader Guide and Notation {#section-1-reader-guide-and-notation}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

This volume is a proof-reference treatment of advanced statistical inference. It is for readers who have met likelihood-based estimation, linear regression, basic probability theory, and matrix algebra, and who now want a coherent, precise map of the subject's major theorems, their boundaries, and the conventions that keep arguments clean. It is not a first course in statistics, a software manual, or a handbook of machine-learning recipes. It is a working text that treats survey design, likelihood theory, robustness, dependent data, survival analysis, spatial statistics, missing data, and reproducible computation as connected parts of one landscape.

The L4 route supplies supported exercises.  The later probability arguments use prior coursework in stochastic processes and asymptotic statistics: empirical-process weak convergence, mixing, filtrations, compensators, and Wishart theory are sometimes imported with their role stated rather than developed from first principles. If a chapter feels dense, use the notation guide, diagnostic, and cited references to identify the prerequisite that needs review.

<a id="section-7-four-reading-routes"></a>
## Four reading routes {#section-9-four-reading-routes}

<a id="section-9-the-continuous-route"></a>
### The continuous route {#section-11-the-continuous-route}

Follow the nineteen main chapters in the native order below. The boundary map is now [front matter](boundary-map.md). Original merged readings remain addressable as companions; their notes and original exercises stay with those identities.

1. [Multivariate Normal Geometry](multivariate-normal-geometry.md).
2. [Design-based Estimation](design-randomization-as-a-probability-space.md).
3. [Estimating Equations and Sandwich Limits](estimating-equations-and-sandwich-limits.md).
4. [Generalised Linear Likelihood](generalized-linear-likelihood.md).
5. [Semiparametric Efficiency and Influence Functions](semiparametric-efficiency-and-influence-functions.md).
6. [Empirical Distributions and Ranks](empirical-distributions-and-ranks.md).
7. [Robust Functionals and Influence](robustness-influence-and-model-diagnostics.md).
8. [Functional Delta Method and Bootstrap Boundaries](functional-delta-method-and-bootstrap-boundaries.md).
9. [Smoothing and Nonparametric Regression](smoothing-and-nonparametric-regression.md).
10. [Dependent Central Limits](dependent-central-limits.md).
11. [Counting-process Survival Theory](counting-process-survival-theory.md).
12. [Spatial Covariance and Kriging](spatial-covariance-and-kriging.md).
13. [Spectral and Dependent-data Inference](spectral-and-dependent-data-inference.md).
14. [Equivariance, Shrinkage and Minimaxity](equivariance-shrinkage-and-minimaxity.md).
15. [Survey-weighted Models and Targets](survey-weighted-models-and-targets.md).
16. [Multiplicity, Sequential and Post-selection Inference](multiplicity-sequential-and-selective-inference.md).
17. [Scores, Model Checking and the Double Use of Data](model-checking-and-the-double-use-of-data.md).
18. [High-dimensional Inference](high-dimensional-inference.md).
19. [Reproducible Numerical Inference](reproducible-numerical-inference.md).

<a id="section-33-focused-routes"></a>
### Focused routes {#section-35-focused-routes}

Design-based inference uses Chapters 2, 3, 15 and 19, with the [primary missing-data chapter](../principles-statistical-inference/missing-data-identification-and-sensitivity.md) for identification. Functional inference uses Chapters 3 and 5–9. Dependent-data inference uses Chapters 10–13 and 19. Decisions and selection use Chapters 14 and 16–18.

The four new chapters explicitly separate their statistical experiments: cross-fitted semiparametric means, local smoothing and Gaussian-sequence risk, stationary Gaussian spectral inference, and fixed-design high-dimensional coefficient inference. The remaining chapters now give full scoped arguments, worked examples and at least ten supported exercises each.

<a id="section-39-how-to-work-a-chapter"></a>
## How to work a chapter {#section-41-how-to-work-a-chapter}

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, a counterexample or limitation, or an open problem;
2. a **hypothesis ledger** recording the regularity conditions, design assumptions, and model assumptions built into each construction;
3. a **scope ledger** recording when an argument moves between finite-population, superpopulation, and asymptotic frameworks.

<a id="section-49-claim-status-conventions-used-across-chapters"></a>
## Claim-status conventions used across chapters {#section-51-claim-status-conventions-used-across-chapters}

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms and regularity conditions; every material hypothesis is listed. | Asymptotic normality of regular M-estimators ("Estimating Equations and Sandwich Limits"). | Check that the hypotheses match your setting; identify any hidden regularity condition. |
| **Sketch** | A proof outline that suppresses routine analysis or standard constructions; the full proof is recoverable with the indicated tools. | The initial roadmap of the general strong-mixing CLT, whose technical blocking lemma is explicitly imported in "Dependent Central Limits". | Verify that the suppressed steps are indeed standard; fill them in if the context is unfamiliar. |
| **Counterexample or limitation** | A proved failure of a proposed general claim, or a boundary beyond which the stated theorem gives no guarantee. | Inconsistency of the ordinary bootstrap for the sample maximum ("Functional Delta Method and Bootstrap Boundaries"). | Check that the counterexample matches the procedure and assumptions; absence of a theorem alone is not a proof of failure. |
| **Open problem** | A precisely stated question with no known proof or disproof in the standard framework. | A research question would need a precise model class, loss and reference; this book does not label an unspecified universal bandwidth question as an established open problem. | Do not treat conjectures as theorems; record the current evidence and the conditions under which partial answers exist. |

A theorem is not uncertain because a reader finds it difficult. A counterexample refutes the claim it targets but does not settle unrelated procedures. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

<a id="section-62-exercise-markers"></a>
## Exercise markers {#section-64-exercise-markers}

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, design assumption, proof structure, or interpretation, the solution explains why that choice is warranted.

<a id="section-75-how-to-report-a-suspected-error"></a>
## How to report a suspected error {#section-77-how-to-report-a-suspected-error}

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

<a id="section-79-scope-and-deliberate-boundaries"></a>
## Scope and deliberate boundaries {#section-81-scope-and-deliberate-boundaries}

This book reaches a first treatment of design-based inference, likelihood theory, robust estimation, multivariate normal sampling, dependent central limits, survival analysis, spatial prediction, multiplicity adjustment, bootstrap theory, missing data, decision theory, small-sample diagnostics, model checking, survey-weighted regression, and reproducible computation. It does not attempt full causal inference theory, Bayesian nonparametrics, or advanced stochastic process theory. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
