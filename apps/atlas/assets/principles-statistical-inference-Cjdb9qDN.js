var e=`---
id: book-principles-statistical-inference
title: "Principles of Statistical Inference: Procedures, Guarantees, and Limits"
level: advanced-undergraduate
estimated_minutes: 2900
license: CC BY-SA 4.0
---

# Principles of Statistical Inference: Procedures, Guarantees, and Limits

Statistical inference asks what a finite, protocol-produced observation can reveal about an unknown target and what repeated-sampling guarantee a data-dependent procedure can honestly promise. This volume begins before estimators and tests: it specifies observation laws, defines estimands, proves identification boundaries, and declares losses. It then develops exponential-family geometry, decision principles, exact testing, calibrated uncertainty, asymptotics, resampling, regression, randomized and survey designs, and missing-data sensitivity. General shrinkage/minimax theory, sequential/selective inference and robustness continue in the registered L4 companion chapters.

This is the L3 mathematical-statistics text, with nineteen chapters. Preparation comes from [Probability: Models, Bounds, and Proofs](probability-models-proofs.md), especially [Gaussian vectors](probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). [Linear Algebra: Structure and Proofs](linear-algebra-structure-proofs.md) offers a further proof-oriented repair route.

The intended reader has completed a rigorous first probability course and multivariable calculus, and is comfortable with expectations, conditional distributions, convergence in probability, differentiation under stated hypotheses, and elementary linear algebra. Measure theory is helpful but not required at entry. Conditional expectation and dominated densities are used with explicit hypotheses.

## Shelf boundaries

This book is one part of a deliberately plural statistics shelf.

- *Probability: Models, Bounds, and Proofs* constructs probability spaces, laws, expectation, convergence, limit theorems, concentration, and random processes. Those objects are prerequisites here; this volume asks what can be learned when the governing law is only partially known.
- *Advanced Statistical Inference: Designs, Likelihoods, and Dependence* treats survey randomisation, generalized models, empirical distributions, multivariate and dependent data, survival, spatial structure, robustness, and post-selection scope at greater specialist depth.
- The [Bayesian Inference course](/courses/bayesian-inference/) develops prior and hierarchical models, posterior computation, prediction and sensitivity. This volume introduces Bayes decision structure and the likelihood/prior boundary but does not duplicate that computational programme.
- The statistical-learning books focus on prediction risk, capacity, regularisation, and generalisation rather than the full classical experiment–estimand–procedure architecture.

The distinctions are about mathematical activity, not ideology. Frequentist risk, randomisation inference, likelihood comparison, and Bayes decision rules appear where they answer different declared questions. No framework receives conclusions without its model, loss, and calibration conditions.

## Prerequisite diagnostic and repair

Before beginning, try to answer:

1. Can you distinguish $P(A|B)$ from $P(B|A)$ and state an independence factorisation?
2. Can you derive the mean and variance of a sample mean under independence?
3. Can you explain convergence in probability and why it is not a finite-sample error bound?
4. Can you maximise a differentiable function while checking boundaries and global shape?
5. Can you state when a change of variables, expectation, or derivative under an integral is justified?
6. Can you read a matrix quadratic form and solve a small linear system?

If Questions 1–3 are unstable, use the probability foundations through expectation and convergence. If Question 4 is unstable, repair single- and multivariable calculus. If Question 5 is unstable, take the analysis bridge on limits and integration. Linear-algebra repair is needed before multivariate likelihood and regression chapters, but not for the opening experiment and identification chapters.

## Notation and interpretation policy

- $X$ denotes the random data before observation; $x$ denotes a realised dataset.
- $\\{P_\\theta:\\theta\\in\\Theta\\}$ is a family of observation laws. A parameter indexes laws; it is not automatically random.
- $τ(θ)$ or $τ(P)$ is an estimand. $T(X)$ is an estimator; $T(x)$ is its observed estimate.
- $E_θ$, $Var_θ$, and $P_θ$ name the state under which repetition occurs.
- A likelihood holds data fixed and compares parameter values. It is not a posterior density without a prior and reference measure.
- A confidence level is coverage of a procedure across repeated data, not the conditional probability that one realised set contains a fixed parameter.
- A p-value is a calibrated tail statistic under a null experiment, not the probability that the null is true.
- “Exact” means exact under the stated model and arithmetic, not exact for the scientific world.
- “Asymptotic” names a sequence of experiments and does not imply accurate finite-sample tails.
- Identification, estimation, numerical optimisation, and causal interpretation are reported as separate claims.

## Architecture

### Part I — Questions, experiments, and evidence

1. **Statistical Experiments and Observation Laws** turns sampling, assignment, measurement, censoring, stopping, and preprocessing into a family of repeated-world laws.
2. **Estimands, Identification, and Design** proves that observationally equivalent states cannot support consistent estimation of different targets and develops partial and weak identification.
3. **Decision Rules, Loss, and Risk** defines what “better” can mean through risk, dominance, minimax and Bayes criteria, and randomisation.
4. **Likelihood, Score, and Evidence Inside a Model** develops likelihood ratios, maximum likelihood, regular score identities, information, moving-support failures, nuisance profiles, and KL projection.
5. **Sufficiency, Factorization, and Data Reduction** proves exact model-relative reduction and Rao–Blackwell improvement while preserving diagnostic boundaries.

### Part II — Estimation, information, and optimality

6. **Point Estimation, Completeness, and Information Bounds** proves regular Cramér–Rao and Lehmann–Scheffé results.
7. **Exponential Families and Information Geometry** derives log-partition convexity, moment and information identities, sufficient sums, dual coordinates, and local KL geometry.

### Part III — Tests and confidence

8. **Tests, Error Control, and Power** defines randomised tests, composite-null size, exact binomial calibration, normal power, valid p-values, and stopping boundaries.
9. **Neyman–Pearson Theory and Likelihood-Ratio Tests** proves optimality for simple laws and monotone likelihood ratios, then separates that theorem from composite generalized likelihood ratios.
10. **Composite Hypotheses, Pivots, and Exact Tests** controls nuisance states through boundaries, suprema, conditioning, pivots, and declared two-sided orderings.
11. **Confidence Sets, Coverage, and Test Inversion** proves test–set duality and derives pivotal normal and exact binomial procedures.

### Part IV — Asymptotics and resampling

12. **Consistency, Asymptotic Normality, and Delta Methods** separates localisation, rate, and limiting shape; proves the main transfer arguments; and exhibits nonregular rates.
13. **Bootstrap, Permutation, and Resampling Logic** distinguishes sampling-law imitation from null symmetry, derives conditional identities, and proves an endpoint failure.

### Part V — Regression, designs, missingness, and synthesis

14. **Linear Models and Regression Inference** derives projection, Gauss–Markov, exact normal-theory inference, sandwich covariance, prediction, and misspecification targets.
15. **Randomized Experiments and Causal Contrasts** proves design unbiasedness and assignment variance before blocks, clusters, noncompliance, interference, and transport.
16. **Survey Sampling and Design Weights** develops unequal-probability estimation, joint-inclusion variance, stratification, clusters, calibration, and frame boundaries.
17. **Missing Data, Identification, and Sensitivity** proves observed-data nonidentification, derives MAR adjustment, and constructs bounds and sensitivity models.
18. **Bayesian Decision and Inference Bridge** constructs prior–likelihood joint laws, conjugate updates, posterior Bayes rules, prediction, model comparison, sensitivity, and frequentist evaluation without conflating probability spaces.
19. **Counterexample Atlas and Inference Capstones** compresses recurrent failure modes and ends with an auditable inference dossier spanning protocol, identification, calibration, decision, and sensitivity.

The main dependency spine is

$protocol \\to observation law \\to estimand \\to identification \\to loss \\to likelihood \\to estimator \\to calibrated uncertainty \\to robustness \\to design or missingness audit$.

Tests and intervals are not detached formula chapters; they depend on the experiment, decision scope, and likelihood or pivot structure already built.

## How to study this volume

Each chapter includes a model audit, derivations or proofs, boundary examples, and fully worked exercises. Exercises mix notation retrieval, exact calculation, theorem proof, false-claim repair, protocol diagnosis, and transfer. Investigations and the final dossier capstone join identification, risk, sufficient reduction, finite-sample power, confidence inversion, asymptotic approximation, resampling failure, framework comparison, and controlled assumption failure.

## Inference audit

Before accepting an inferential conclusion, ask:

1. What process produced the observed units and measurements?
2. What exact population, law, or causal contrast is the estimand?
3. Which observationally equivalent states disagree on that target?
4. Which assumption or design feature resolves each ambiguity?
5. What action and loss make the procedure relevant?
6. Is the claimed property finite-sample, asymptotic, pointwise, uniform, or average-risk?
7. Are likelihood, posterior probability, confidence coverage, and testing error kept distinct?
8. Were boundaries, nuisance parameters, stopping, selection, and multiplicity included?
9. What information was discarded, and can the remaining record still diagnose model failure?
10. Which conclusion survives a controlled departure from the central model?

## Advanced continuations and practice identities

The main route has nineteen chapters and is **Draft**. Three original advanced chapters continue through their preserved aliases in Advanced Statistical Inference: [Equivariance, Shrinkage, and Minimaxity](advanced-statistical-inference-reference/equivariance-shrinkage-and-minimaxity.md), [Multiplicity, Sequential Monitoring, and Selective Inference](advanced-statistical-inference-reference/multiplicity-sequential-and-selective-inference.md), and [Robustness, Influence, and Model Diagnostics](advanced-statistical-inference-reference/robustness-influence-and-model-diagnostics.md). Original donor sources, proofs, native IDs and historical records remain intact.

Every numbered exercise and optional SI-XX-E21/E22 task keeps its identity, including its original SI chapter number. The displayed main-route position is navigation, not a replacement exercise ID. Staged hints and full solution disclosures support core and optional work. Later developments and premise corrections remain part of the mathematics.

Probability and linear algebra supply the core preparation; differentiation and Taylor expansion are used where stated. General measure-theoretic existence, empirical-process, LAN, functional-differentiability, high-dimensional and selective-inference results require the additional assumptions named locally. A finite worked calculation is not presented as a proof of those general theorems.
`;export{e as default};