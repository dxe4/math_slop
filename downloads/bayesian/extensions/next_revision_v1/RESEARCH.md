# Research and coverage evidence

Research date: **2026-10-10**. Provenance: direct `research_coverage` planner handoff,
with methodological/API reconciliation from `design_science`. These are the research
planner's fresh selected-section web inspections, persisted by preparation; the
preparation worker did not repeat the browsing or claim full-book inspection.
No external prose, examples, code or figures are licensed for transplantation by
this research record. All three local applications must remain original.

## Comparison of established author sources

| Work/family and inspected URL | Sections and actual access | Paraphrase and local consequence | Limits |
|---|---|---|---|
| Stan User's Guide: [poststratification](https://mc-stan.org/docs/stan-users-guide/poststratification.html), [finite mixtures](https://mc-stan.org/docs/stan-users-guide/finite-mixtures.html), [problematic posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html) | Substantive HTML: Bayesian poststratification, regression/MRP, small-partition identification; mixture marginalization/log-sum-exp/vectorization; label switching | Combine joint cell predictions with population counts; integrate learned pooling. An observation-level allocation differs from one component for the entire dataset. Label-invariant predictions remain useful despite symmetry. E01 distinguishes parameter/noisy targets; E02 retains exchangeable labels and shows the wrong whole-dataset construction. | Method guidance is not evidence of local efficacy or survey adequacy; no Stan dependency required. |
| Bayesian Modeling and Computation in Python: [chapter 3](https://bayesiancomputationbook.com/markdown/chp_03.html), [chapter 9](https://bayesiancomputationbook.com/markdown/chp_09.html) | Substantive HTML: Gaussian models, diagnostics and prior implications; §§9.1, 9.5–9.10 and applied workflow | A question, model, computation, criticism and communication form a workflow. Better comparative performance can coexist with misfit. Require target-led narratives, measured checks, changed givens and qualified conclusions. | Selected sections, not full book; do not copy older PyMC3 APIs. Diagnostic success is not model adequacy. |
| Think Bayes 2: [chapter 19](https://allendowney.github.io/ThinkBayes2/chap19.html) | Substantive HTML: grid discussion, World Cup/Poisson example, prior prediction, summary/exercises | Small inspectable models clarify updates; MCMC broadens reach and adds diagnostic obligations. Use exact enumeration and conjugate anchors before general machinery; distinguish exact algebra, quadrature and simulation error. | No reuse of source example/code or claim that all high-dimensional models permit exact enumeration. |
| Bayes Rules!: [chapter 16](https://www.bayesrulesbook.com/chapter-16.html) | Substantive HTML: §§16.1–16.3, shrinkage, summary and §16.9 exercises | Comparing complete/no/hierarchical pooling within one application supports conceptual anticipation and changed-context practice. E01 asks readers to predict shrinkage and weight effects before computing. | The successful chapter inspection supersedes weak landing-page access only for this chapter; pooling does not always reduce realized error. |
| Statistical Rethinking 2024: [author course repository](https://github.com/rmcelreath/stat_rethinking_2024) | Substantive README: Purpose, Format, Calendar, Coding, Homework | Scientific questions/causal models organize a course with recurring scripting/problem sets. Open modules with a question and observation mechanism, and an attempt-before-reference investigation. | Supports course structure, not inspected homework bodies, watched lectures or measured learning effects. |
| State Space Models: A Modern Approach: [HMM filtering](https://probml.github.io/ssm-book/chapters/hmm/hmm_filter.html), [state estimation](https://probml.github.io/ssm-book/chapters/ssm/inference.html) | Substantive author HTML: predict/update equations, information sets and casino demonstration | Filtering conditions on a prefix, smoothing on full data, prediction on available history. Joint MAP decoding is not marginal uncertainty. E03 labels information sets and tests suffix nonleakage. | Smoothing algorithm must be derived/checkable locally; the separate smoother page was a stub. |
| Probabilistic Machine Learning: Advanced Topics: [author landing page](https://probml.github.io/pml-book/book2.html) | Metadata and links only | Optional broad advanced reference. | No inspected full mixture/HMM chapters; not counted as substantive content access. Treat PML/SSM conservatively as one family. |

The first six rows provide six substantively inspected book/course/manual works,
even with Murphy's resources treated as one family. PML metadata is not needed to
reach five. Their different emphases support a finite curriculum: inspectable exact
updates, target-led workflow, generative assumptions, uncertainty propagation,
criticism and independent practice. They do not justify universal completeness.

## Primary methodological and visual references

| Source | Inspected content / access | Consequence |
|---|---|---|
| Kennedy and Gelman, [MRP manuscript](https://arxiv.org/pdf/1906.11323) | 21-page PDF text accessible; selected early introduction, “What is MRP?”, population adjustment and “What should we adjust for?” | Generalization depends on modeling and conditional equivalence of sampled/unsampled units. Declare within-cell selection assumptions and changed target counts; an empty cell is model-based extrapolation. The small fictional example cannot establish operational survey adequacy. |
| [Stan HMM functions](https://mc-stan.org/docs/functions-reference/hidden_markov_models.html) and [time-series guide](https://mc-stan.org/docs/stan-users-guide/time-series.html) | Substantive model definition, marginal/latent interfaces, HMM section | Marginalize discrete paths while retaining parameter uncertainty; transition rows are distributions. Freeze row orientation, first-observation timing and emissions, then check independently. |
| [Stan latent discrete parameters](https://mc-stan.org/docs/stan-users-guide/latent-discrete.html) | Change-point marginalization and dynamic-programming discussion | Explain the sum over discrete alternatives before optimized implementation; use E02 enumeration and E03 forward recursion with separate exact references. |
| [W3C complex images](https://www.w3.org/WAI/tutorials/images/complex/) | Overview and long-description guidance | Each original figure needs short alt text and an adjacent detailed numerical/text equivalent, including print/no-JS. This guidance does not certify human accessibility. |

The design-science planner separately opened Stan poststratification, finite
mixtures and HMM functions, inspected installed APIs, and proposed the numerical
contracts now in `SCIENCE.md` and `specifications/`. Those proposals are not fits.

## Access limitations and provenance boundaries

- McElreath's [book page](https://xcelab.net/rm/statistical-rethinking/) returned zero
  extracted lines. The successful author-course README is the actual fallback.
- Bayes Rules chapter 16 was substantively accessible; do not generalize the
  supervisor's weak landing-page result to that chapter.
- PML's long-contents GitHub wrapper opened, but its raw contents PDF returned an
  internal error. No full PML chapter inspection is claimed.
- The SSM [smoothing page](https://probml.github.io/ssm-book/chapters/hmm/hmm_smoother.html)
  contained headings without substantive algorithm exposition. Cite substantive
  filtering/state-estimation pages and independent local derivation instead.
- The supervisor reported failed Betancourt-mixture and obsolete Stan-label-switching
  URLs. The planner did not retry those URLs; the current problematic-posteriors
  page succeeded. Supervisor accesses are not relabelled as planner accesses.
- No external code was executed, lecture videos watched, or external figures
  visually evaluated. No source establishes the local book's teaching efficacy.

## Current local evidence

The research planner read the request, historical backlog/research/roadmap,
continuation plan/research, current syllabus/registries, relevant chapter passages,
practice/evaluation materials and detached verdict. Preparation re-read the request,
inspected inventory/runtime boundaries, parsed current registries, and checked
representative L08, A03, A09, A13, C03 and L12 coverage. It independently ran original
verification and inventory authentication. `roadmap.json` binds each overlay's local
source by SHA256 and retains all historical records rather than rewriting them.

The original receipt and manifest identify bounded technical acceptance: 941 retained
passing tests, 14 gates, 1,910 bindings, 540 PDF pages, 145 assessments and 32 labs.
Historical final-doc wording remains unchanged. Human statistical/teaching and
accessibility review, actual learner pilots and live tutor evaluation are unperformed.
Private transfer forms/provider trials are future evaluation work, not absent general
textbook explanations. A protocol's existence does not constitute its execution.

Priority is therefore E01's explicit population target, E02's learned per-observation
allocation, and E03's prefix-correct parameter/state inference. Further breadth is
deferred according to learning questions, prerequisites and acceptance requirements
in `PLAN.md` and the 43-row overlay. All workload/production estimates are planning
judgments, not measured learner or author performance.
