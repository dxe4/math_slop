# E04 research and coverage record

Research date: **2026-10-11**. This document reconciles the direct `research` and
`science` handoffs. Web accesses below were actually reported by those read-only
workers on that date; preparation did not repeat them or inspect full papers by
proxy. Selected-section inspection is not full-paper/proof/code review. No external
code, prose, examples, figures or figure layouts are to be transplanted. None of
these sources demonstrates the local module's teaching effectiveness.

## Primary methodological sources actually accessed

| Source and accessed URL | Actual access and sections | Consequence for E04 | Limits |
|---|---|---|---|
| Talts et al., *Validating Bayesian Inference Algorithms with Simulation-Based Calibration*, https://arxiv.org/pdf/1804.06788 | Research worker: accessible 19-page PDF text; §4, §4.1/Algorithm 1, §§4.2–4.3, §5.1. | Conditional exchangeability gives a discrete rank reference; finite histograms fluctuate; correlated draws affect ranks. Draw iid conjugate samples and explicitly diagram the generative experiment. | Selected text, not all proofs/supplements. Displayed marginal bands must not be relabelled simultaneous. SBC does not establish model adequacy. |
| Modrák et al., *Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity*, https://arxiv.org/html/2211.02383 | Research: substantive HTML §§1.2, 3.4/Theorem 7, 3.5–3.6, 4.1–4.3, 5.3, 6.1–6.2. Science separately inspected definitions of data-dependent quantities and randomized ties. | Parameter-only checks can miss ignored data; compare parameter and joint-likelihood ranks, randomizing across all tied positions. | No finite collection of statistics detects every wrong posterior. Multiple checks need an explicit multiplicity scope. |
| Kleijn and van der Vaart, *The Bernstein–von Mises theorem under misspecification*, https://pure.uva.nl/ws/files/1850322/114737_376240.pdf | Research: accessible 29-page repository PDF text; introduction; §2.1 condition (2.1), prior assumptions, Theorem 2.1; selected §2.2, Lemma 2.2, Example 2.1. | Concentration around a best-fitting parameter can coexist with incorrect uncertainty because curvature and repeated-sampling covariance differ. Derive this scalar example directly. | LAN, interior point, suitable prior mass and concentration conditions matter. Extraction mangles some equations. No full-proof inspection or blanket theorem application. |
| Säilynoja, Schmitt, Bürkner and Vehtari, *Posterior SBC: simulation-based calibration checking conditional on data*, https://link.springer.com/article/10.1007/s11222-026-10825-9 | Research: substantive publisher HTML, displayed publication 31 January 2026; §§2–3 including equation (3), surrounding method/limitations and conclusion. | Original posterior generates extra data; compare an augmented posterior conditioned on original and extra data. Brief further-reading distinction only. | Different checking target; small problematic regions/cancelling errors remain possible. No implementation or case-study reproduction inspected. Defer implementation. |

These are four substantive research papers, independently of the official references
below. Access is not represented as abstract-only or as full-paper review.

## Official methodological references

| Accessed URL | Actual inspected material | Use and boundary |
|---|---|---|
| https://mc-stan.org/docs/stan-users-guide/simulation-based-calibration.html | Research: substantive HTML generative explanation, implementation discussion, pseudocode, thinning, uniformity tests and indexing; science inspected rank construction. | Separate generation/inference and dataset/draw counts. Equal-cardinality bins. One inspected endpoint illustration is inconsistent: derive and test endpoint arithmetic locally; do not copy it. No Stan execution. |
| https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm | Research: complete short HTML section with Wilson formulas and exact binomial-tail inversion; science inspected binomial uncertainty guidance. | 95% Wilson intervals describe uncertainty about estimated coverage, not posterior uncertainty in rate. Exact tail inversion is discrete/conservative. Not a fresh inspection of the original Wilson paper. |
| https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.nbinom.html | Science: official NB parameterization documentation. | Failures before successes; mean/variance and total law checked independently. No extra package needed. |

## Author teaching material

| Accessed URL | Actual access | Original adaptation |
|---|---|---|
| https://bayesiancomputationbook.com/markdown/chp_09.html | Research: substantive HTML §§9.5–9.7, inference diagnostics, posterior summaries, predictive checking and applied discussion. | Begin with a scientific question; distinguish computation evidence from observable-model criticism. Chain-rank diagnostics here are not SBC ranks. Chapter 8 is ABC and was not used as the workflow source. |
| https://bayesiancomputationbook.com/markdown/chp_02.html | Research: selected prior-predictive discussion and initial worked model. | Translate prior assumptions into observable consequences in a new synthetic count context. Not full-book inspection. |
| https://avehtari.github.io/BDA_course_Aalto/BDA3_notes.html | Research: chapter 4 outline on approximation, information, frequency properties and transformations; chapter 6 outline on replicated/future observations and checks. | Compact readiness vocabulary, distinctions between repeated experiments, optional technical depth. Linked chapters, videos and executable demonstrations were not inspected. |

Use predict → inspect → explain → transfer as an authoring choice, with no claim of
experimentally demonstrated learning benefit. No lecture videos, external source
code or external figures were executed/visually inspected by these workers.

## Existing local coverage and new contribution

Preparation read REQUEST in full, EXTENSION01 PLAN/RESEARCH, parsed its entire
roadmap and the original backlog, and inspected its detached verdict, inventory,
recorder and interface patterns. Targeted local reads confirmed the handoffs:

| Local paths | Existing contribution | What E04 adds |
|---|---|---|
| `course/chapters/11_robustness.md`, `labs/11_robustness.py` | Prior-predictive SBC, conditional exchangeability, ties, dependence, biased Beta update, prior-only parameter-rank blind spot, data-dependent checks and computation/model distinctions. Beta(2,2)–Binomial(20), 500 replications, 200 draws, +8 biased successes; 201 possible ranks do not divide equally into ten bins. | Execute exact/biased/prior-only controls on the same Poisson data and compare two quantities with equal-cardinality bins, declared pointwise/simultaneous references, retained ranks and uncertainty. |
| `course/advanced/01_approximation.md`, `labs/13_approximation.py` | Gamma(3,2) rate and log-rate Laplace, negative support, Jacobian, tails and coordinate dependence. | Compare interval procedures over paired repeated datasets. Repeating the derivation alone is insufficient. |
| `course/advanced/15_variational_fit.md`, `labs/30_variational_fit.py` | Actual nonlinear VI optimization, multiple starts, independent references, optimization/family distinction. | Analytically tractable approximations isolate repeated-sampling consequences. No extra VI optimizer. |
| `course/advanced/13_gp_hyperparameters.md`, `labs/28_gp_hyperparameters.py` | Fixed, empirical-Bayes and integrated hyperparameters; paired Monte Carlo comparisons. | EB01 remains deferred. A13/Lab28 are occupied, despite historical CAL01 reservations. |
| L04, L05, APP02, APP04 (research-worker prerequisite inspection) | Gamma–Poisson updating, precision, integration, transformations, stable densities and reproducibility. | Reuse explicitly; distinguish n observations, M posterior draws and R datasets. |

The new question is: **How can computation be correct and a posterior become more
concentrated while its uncertainty remains misleading?** Use synthetic particle
counts in independent equal-duration inspection windows; no physical process has
been validated. Route after L04/L05/L11/A01 with APP02/APP04 support. A15 is optional.

## Reconciliation and epistemic limits

The exact numerical freeze adopts the science handoff, including 4,000 replications,
99 draws, +6 pseudo-count bias, full five-count SBC vectors, 90% primary level, 60-bin
simultaneous reference family and deterministic illustrations. `study_design.json`
is the canonical filename, superseding proposed `study_v1.json` and `E04_v1.json`.
Derivations are in SCIENCE.md; they are prospective mathematical arguments, not
observed numerical results. Recompute all numeric anchors downstream. In particular
0.742191 is a historical 95% asymptote, neither the 90% limit nor measured coverage.

Roadmap classification is preparation-only: 23 bounded implemented, one selected
(CAL01→E04), three deepen later, twelve specialist/deferred, four unperformed
external validation. Every historical object/order stays exact. E01–E03 acceptance
is supported by their pinned detached verdict; old candidate wording stays untouched.

All science, keys/overlap audit, figures, browser/PDF inspection and learner testing
remain downstream. Human learning/workload/accessibility studies and live tutor
trials remain unperformed. No source supplies evidence of those activities.

## Actual inspection problems retained

Both dependency workers first searched nonexistent source directories before finding
`course/`; oversized reads required targeted follow-ups. Each reported a zsh heredoc
temporary-file rejection in its read-only environment, followed by successful
`python -c`; no rejected Python command executed. No escalation was attempted.
Preparation's initial `git status --short` returned exit 128 because this workspace
is not a Git repository. Large preparation read output was also truncated and followed
by targeted reads. These are inspection limitations, not fabricated failed fits.
The command recorder starts after bootstrap preservation; earlier tool commands are
not retrospectively represented as recorder executions.
