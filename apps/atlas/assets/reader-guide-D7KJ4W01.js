var e=`---
parent_id: book-computational-bayesian-modeling
matter_id: reader-guide
title: "Reader Guide and Notation"
license: CC BY-SA 4.0
---

# Reader Guide and Notation

## Why this book exists

This is the L4 alternative **Bayesian Modelling and Criticism**. Begin with the primary [Bayesian Inference course](/bayesian/site/course/syllabus.html). For Monte Carlo algorithms, Markov-chain theory and diagnostics use [Monte Carlo and Markov Chain Computation](/books/mcmc:book:monte-carlo-markov-chain-computation/). The present book concentrates on observation laws, exact modelling references, hierarchical uncertainty, predictive experiments, comparisons, decisions and sensitivity.

Preparation is probability with conditional expectation, Gaussian conditioning, likelihood and basic statistical inference. The first chapters name their distributions and conventions explicitly. The sensitivity chapters add covariance differentiation, total variation and observed-data marginalisation with their stated integrability assumptions.

## Four reading routes

### The complete modelling route

Read the twelve chapters in the native order: observation laws and generative stories; prior-predictive audits; posterior and predictive conjugate references; population hierarchies and their uncertainty; predictive discrepancies and calibration; scores and decisions; prior sensitivity; measurement error and missing data.

### The exact-reference route

Read [Conjugate Posterior Benchmarks](../conjugate-posterior-benchmarks.md) and [Conjugate Prediction and Calibration](../conjugate-predictive-calibration.md). Keep the observation space and reference measure with every normalising constant. Algorithms and their numerical error are developed in MCMC Volume 1 rather than as additional chapters here.

### The criticism-and-decision route

Read [Predictive Experiments and Discrepancies](../predictive-experiments-discrepancies.md), [Predictive Calibration and Case Studies](../predictive-calibration-case-studies.md), [Comparison, Scores and Decisions](../comparison-scores-decisions.md), and [Decision Sensitivity and Model Uncertainty](../decision-sensitivity-model-uncertainty.md). The replication and validation unit must match the future quantity being predicted.

### The sensitivity-and-observation route

Read [Prior Specification and Sensitivity](../prior-specification-sensitivity.md) and [Measurement Error and Missing Data](../measurement-error-missing-data.md), returning to the generative chapters for their observation protocols. Distinguish model-based posterior uncertainty from assumptions that the observed law cannot identify.

## Original complete treatments

The five earlier complete modelling chapters remain registered as source companions in the back matter, with their original questions, solutions and computational listings unchanged. The new chapter pairs retain their mathematical development in shorter reading units; the original semantic chapter identities redirect to the corresponding first member. The four earlier algorithm chapters also remain as source files, with reading destinations directed to MCMC Volume 1.

## How to work a chapter

First read the opening question and write down the exact statistical model, the inferential target, and the claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work the original exercises actually supplied in that chapter before reading their solutions; the nine chapters have 32 original identities with three or four exercises each. Across the route, include definition checks, conjugate calculations, sampler-design and diagnostic reasoning, and model criticism or decisions. Separately identified CBM extensions are additional work, not a missing-count quota or replacements for originals. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a derivation, a numerical approximation, an empirical observation, or an open problem;
2. a **hypothesis ledger** recording the distributional assumptions, independence claims, and prior choices built into each model;
3. a **computation ledger** recording which quantities are exact, which are Monte Carlo approximations, and which diagnostics have been checked.

## Claim-status conventions used across chapters

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | Detailed balance implies invariance of the Metropolis--Hastings kernel ("Metropolis--Hastings from an Invariant Kernel"). | Check that the hypotheses match your setting; identify any hidden regularity condition. |
| **Derivation** | An algebraic or analytic calculation that transforms one expression into another under stated assumptions. | The posterior mean in a Normal-Normal conjugate model is a precision-weighted average. | Verify that the stated parameterization matches your software; check for sign errors. |
| **Numerical approximation** | A computed quantity with a stated tolerance or Monte Carlo error assessment and its conditions. | An illustrative posterior-mean report with $20{,}000$ retained draws, bulk ESS $800$, and a separately estimated mean-specific MCSE $0.003$. | Check the estimand, chain assumptions and error estimate; diagnostic thresholds do not give a deterministic error bound. |
| **Open problem** | A precisely stated question with no known proof or disproof in the standard framework. | A precisely specified question whose open status is supported by a dated primary source; no blanket open status is asserted for hierarchical HMC as a class. | Do not treat conjectures as theorems; record the current empirical evidence and the conditions under which partial answers exist. |

A theorem is not uncertain because a reader finds it difficult. A numerical approximation is not worthless because it carries Monte Carlo error. Each statement needs the right warrant. An imported theorem must name its source and hypotheses; a result not proved in this book is not automatically an open research problem.

## Exercise markers

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or conjugate computation;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, prior specification, sampler design, or interpretation, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and continuation

The twelve chapters develop observation laws, exact posterior references, hierarchical population uncertainty, predictive criticism, scores and decisions, prior sensitivity, measurement error and missingness. Their L4 arguments use explicitly stated Gaussian, integrability, identification and approximation hypotheses. The primary Bayesian course supplies the earlier route, while MCMC Volume 1 supplies algorithm theory and numerical error analysis.

The next component is a prerequisite diagnostic. The notation guide supports repeated reference. Original complete modelling sources remain in the back matter so earlier questions and computational examples stay available with their original identities and assumptions.
`;export{e as default};