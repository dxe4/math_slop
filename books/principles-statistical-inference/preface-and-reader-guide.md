
# Preface and Reader Guide {#section-1-preface-and-reader-guide}

<a id="section-1-why-inference-needs-a-ledger"></a>
## Why inference needs a ledger {#section-3-why-inference-needs-a-ledger}

Statistical inference begins with an uncomfortable fact: the same finite dataset can be compatible with many explanations. A numerical answer becomes meaningful only after the analyst has specified how observations arose, what feature of the underlying world is being targeted, which assumptions identify that feature, and what guarantee the procedure actually supplies. This book therefore treats an inferential result as a chain rather than a formula:

$protocol \to observation law \to estimand \to identification \to procedure \to calibration \to decision$.

Every arrow can fail. A convenient likelihood may not describe the sampling protocol. A parameter may be present in a model but not identified by the observed law. A nominal interval may have only asymptotic, not exact, coverage. A small p-value may say little about practical loss. A precise posterior may express conditional certainty inside a poorly checked joint model. The purpose of the volume is not to make inference impossible; it is to make the support for each conclusion inspectable.

The book is a rigorous first course for readers who already know probability and calculus. It unifies classical testing, likelihood, decision theory, asymptotics, resampling, robustness, design-based inference, missing-data sensitivity, and a Bayesian bridge. These traditions ask different probability questions. Rather than collapsing them into one slogan, the text keeps their probability spaces and guarantees distinct and shows how procedures can be compared under a common scientific target or loss.

<a id="section-11-intended-readers"></a>
## Intended readers {#section-13-intended-readers}

This is the L3 mathematical-statistics text. Begin with [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), including [Gaussian vectors](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](#/books/lucent-linear-algebra). [Linear Algebra: Structure and Proofs](#/books/linear-algebra-structure-proofs) supplies additional proof-oriented repair. The principal reader has completed a course covering random variables, expectation, variance, conditional probability, common distributions, laws of large numbers, and a central limit theorem. Multivariable differentiation, constrained optimisation at a basic level, and elementary matrix algebra are assumed where used. Proof fluency is helpful, but the chapters repeatedly expose the proof skeleton behind a statistical result.

The volume also supports:

- an independent learner who wants complete solutions and explicit repair routes;
- an instructor building a two-semester mathematical statistics sequence;
- an applied researcher who wants to audit the scope of a familiar method;
- a reader moving toward causal inference, survey statistics, robust statistics, Bayesian modelling, or statistical learning.

The prerequisite diagnostic separates probability, calculus, linear algebra, and interpretation skills. A weak result in one section is a routing signal, not a judgment about whether the reader belongs in statistics.

<a id="section-24-four-routes-through-the-volume"></a>
## Four routes through the volume {#section-26-four-routes-through-the-volume}

**Route A: mathematical statistics.** Read Chapters 1–13, then the [counterexample atlas and capstones](counterexample-atlas-and-inference-capstones.md). This develops experiments, loss, likelihood, estimation, testing, confidence and resampling before synthesis.

**Route B: design and public evidence.** Read Chapters 1–3 and 8–11, then Chapters 14–17 and 19. The route keeps assignment, sampling and missingness mechanisms distinct from a working regression likelihood.

**Route C: model-based inference.** Read Chapters 1–7 and 12–14, then Chapters 17 and 19. The L4 continuation treats [robustness and influence](../advanced-statistical-inference-reference/robustness-influence-and-model-diagnostics.md), [equivariance and shrinkage](../advanced-statistical-inference-reference/equivariance-shrinkage-and-minimaxity.md), and [sequential and selective inference](../advanced-statistical-inference-reference/multiplicity-sequential-and-selective-inference.md).

**Route D: Bayesian bridge.** Read Chapters 1–7, 12–14 and 18–19. The [Bayesian bridge](bayesian-decision-and-inference-bridge.md) develops exact updating and decisions; continue with the [Bayesian Inference course](#/courses/bayesian-inference) for computation and hierarchical modelling.

The manifest prerequisite graph is authoritative. Routes are efficient narratives, not licenses to use an undefined result.

<a id="section-36-how-claims-are-labelled"></a>
## How claims are labelled {#section-38-how-claims-are-labelled}

A **model identity** follows from the declared probability law. A **design identity** follows from the randomisation or sampling mechanism. A **theorem** includes the conditions needed for its conclusion. An **asymptotic approximation** refers to a stated sequence of experiments. A **diagnostic** compares observed behavior with a reference but does not automatically locate the cause of a mismatch. A **sensitivity result** reports how conclusions move over a declared set of unverified assumptions. A **simulation result** is finite computational evidence, with Monte Carlo uncertainty separate from sampling uncertainty. A **scientific interpretation** needs a bridge from the mathematical target to the substantive question.

The words “exact,” “unbiased,” “efficient,” “robust,” and “significant” never stand alone. Exact under which law? Unbiased for which estimand? Efficient among which procedures and at which states? Robust to which neighbourhood and loss? Significant under which error event and selection protocol?

<a id="section-42-a-reading-protocol"></a>
## A reading protocol {#section-44-a-reading-protocol}

Keep four short ledgers beside each problem.

The **experiment ledger** names units, variables, assignment or sampling, measurement, missingness, censoring, stopping, and preprocessing. The **target ledger** gives a mathematical estimand and the population or probability law on which it is defined. The **guarantee ledger** states whether a claim is finite-sample or asymptotic, pointwise or uniform, model-based or design-based, conditional or marginal. The **decision ledger** names the action, loss, and cost of errors.

When reading a proof, reconstruct its spine: the random object being averaged, the probability space supplying expectation, the limiting or convexity theorem invoked, and the point where a nuisance condition enters. When reading an output, translate every number into a complete sentence containing its target and reference law.

<a id="section-50-exercises-investigations-and-capstones"></a>
## Exercises, investigations, and capstones {#section-52-exercises-investigations-and-capstones}

Each main chapter retains its twenty original numbered exercises and both optional SI-XX-E21/E22 tasks with their original IDs and complete answers. Each question has two staged hints and a full local solution disclosure. They include exact calculation, theorem proof, false-claim repair, counterexample construction, design diagnosis, and framework comparison. Complete solutions are learning tools, not review certificates. A useful cycle is to classify the requested product, attempt the problem, compare proof skeletons, locate the first unjustified transition, and then rewrite the argument without looking.

Investigations require a written claim ledger, not only code or plots. Numerical work should report seeds or exhaustive finite enumerations, Monte Carlo error, units, and a text or table alternative to every visual. The final dossier capstone requires a protocol, estimand, identification argument, competing procedures, calibration, sensitivity analysis, accessible evidence, and a statement of what remains unknown.

<a id="section-56-scope-and-boundaries"></a>
## Scope and boundaries {#section-58-scope-and-boundaries}

This volume develops inference principles deeply enough to support later specialist study, but it does not try to contain all of statistics. Generalised linear models, nonparametric smoothing, high-dimensional theory, time series, survival, spatial dependence, causal identification beyond randomised experiments, modern survey operations, and Bayesian computation receive dedicated shelf treatments. Their proofs reuse the ledgers established here.

Software names and package-specific recipes are deliberately absent from theorem statements. Algorithms may change; probability questions do not. Dependency-free calculations and finite examples are used where computation clarifies logic.

<a id="section-62-production-status"></a>
## Reporting an error {#section-64-production-status}

Readers should report errors using the stable chapter identifier, the disputed sentence, and either a derivation or the smallest counterexample they can find. That is not merely editorial housekeeping. It is the central statistical habit: make the claim, reference class, and evidence open to checking.


<a id="section-69-reading-the-development-sections-and-their-reference-mo"></a>



## Reading the development sections and their reference models {#section-71-reading-the-development-sections-and-their-reference-mo}

The development sections following each chapter's original summary extend the same chapter, with the same target and probability conventions. Their location preserves the original heading and exercise references. For a first reading, read the original teaching sections, then the development sections relevant to them, and only then attempt the numbered exercises. Return to a worked example when you cannot name the distribution or conditional expectation used in a solution. Reading every formula without reconstructing its reference law is a weaker achievement than rebuilding one small example from the protocol.

The original twenty exercises per chapter remain the core program. An explicitly identified SI-XX-E21 or SI-XX-E22 is an optional extension, not a replacement or a renumbering of an original exercise. Its answer remains at its original solutions heading and is also available beside the question in a solution disclosure. These written answers provide mathematical feedback. They do not record personal attempts, establish assessed mastery, or turn an existing study checkmark into graded evidence. An additional explanation of an original exercise, where supplied, keeps that exercise's original identity.

A reference instantiation of an investigation is one complete admissible response to its open assignment. It fixes a small model so that every probability, comparison and sensitivity statement can be audited. It is not an extra requirement silently added to the original prompt, and matching its numbers is not the only successful investigation. Read its changed case as a test of transfer: which line of the original argument depended on the changed assumption? Distinguish a table of probabilities derived from a synthetic law from a dataset actually collected or a simulation actually run. The finite reference models support exact mathematical checks; they do not supply empirical evidence about a population or measured learning outcomes.

<a id="section-77-repair-prerequisites-before-an-abbreviated-route"></a>
## Repair prerequisites before an abbreviated route {#section-79-repair-prerequisites-before-an-abbreviated-route}

The four routes above organise a survey of ideas. A route that omits a chapter does not remove that chapter's prerequisites from later results. Before using a missing result, either complete its source chapter or demonstrate that you can state its hypotheses and reconstruct the part of its proof used next. The prerequisite diagnostic and the matrix-dimension repair are starting points, not certificates of all later theory.

For a fully developed final dossier, reading Chapters 1–19 in order is a complete prerequisite-closed route. This is a convenient sufficient route, not a claim that every chapter is a minimal prerequisite of every dossier. A narrower dossier may justify a narrower mathematical dependency ledger, but it must state its scope; it cannot inherit unproved guarantees from omitted chapters.

Some important repairs recur. Before exact conditional tests, recover exponential-family conditioning and simple-hypothesis testing. Before regression, recover the asymptotic and resampling distinctions; specialist robustness and sandwich theory continue in the L4 book. Before missing-data sensitivity, recover assignment and sampling probability spaces from the design chapters. Before the Bayesian bridge, recover the distinction between risk at a fixed state and loss averaged under a prior. For the final dossier, name each imported result at the point where it is used.

<a id="section-85-workload-and-evidence-after-expansion"></a>
## Workload and evidence after expansion {#section-87-workload-and-evidence-after-expansion}

The original time estimates describe an earlier compact source. They have not been validated for the expanded development, and no fixed completion time is promised here. Use a concrete stopping test instead: can you derive the worked result after changing a hypothesis, explain the first failed step in a counterexample, and state which uncertainty the displayed interval or risk measures? Keep unresolved questions in the claim ledger.


<a id="section-91-optional-advanced-needs"></a>
## Optional advanced needs {#section-93-optional-advanced-needs}

The L3 route states its probability, Gaussian and linear-algebra preparation. Calculus supplies differentiation and Taylor expansion where used. Regular conditional existence is a measure-theoretic import; empirical-process limits, general LAN/Wilks theory, functional differentiability and arbitrary selective inference need additional theory. Each outlook keeps its own hypotheses and source boundary rather than becoming a silent premise of a finite core calculation.

Retain the distinction between original SI labels and current chapter positions. SI-21-E21 remains the Bayesian predictive exercise although the bridge is now main Chapter 18. Original heading and optional-answer anchors are preserved.
