var e=`---
parent_id: book-principles-statistical-inference
matter_id: references-and-attribution-guide
title: "References, Reading Routes, and Attribution Guide"
license: CC BY-SA 4.0
---

# References, Reading Routes, and Attribution Guide {#section-1-references-reading-routes-and-attribution-guide}

<a id="section-1-status-of-this-guide"></a>
## Status of this guide {#section-3-status-of-this-guide}

This bibliography maps the sources and claim-specific reading routes used in the book. Short, unversioned book bullets identify general reading routes rather than a uniquely recommended edition. The reading list does not establish historical priority or supply an exact theorem locator where none is given. The list records intellectual routes and vocabulary against which theorem statements and exercises can be checked; it does not imply that the present exposition or solutions were copied from any listed source.

<a id="section-5-general-mathematical-statistics"></a>
## General mathematical statistics {#section-7-general-mathematical-statistics}

- Casella and Berger, *Statistical Inference*, for a broad classical sequence through estimation and testing.
- Lehmann and Casella, *Theory of Point Estimation*, for sufficiency, completeness, equivariance, decision theory, and information bounds.
- Lehmann and Romano, *Testing Statistical Hypotheses*, for exact and optimal testing theory, multiple testing, and composite hypotheses.
- van der Vaart, *Asymptotic Statistics*, for modern asymptotic experiments, delta methods, M-estimation, and efficiency.
- Peter J. Bickel and Kjell A. Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics, Volume I* (2nd ed., Prentice Hall, 2001), for a model-conscious bridge between theory and applications.

These routes should be consulted during theorem audit, especially where regularity conditions differ among sources. A familiar theorem name never replaces a checked statement.

<a id="section-15-decision-theory-and-robustness"></a>
## Decision theory and robustness {#section-17-decision-theory-and-robustness}

- Berger, *Statistical Decision Theory and Bayesian Analysis*, for loss, risk, Bayes and minimax rules.
- Ferguson, *Mathematical Statistics: A Decision Theoretic Approach*, for a systematic decision formulation.
- Huber and Ronchetti, *Robust Statistics*, for contamination, influence, M-estimation, and asymptotic variance.
- Hampel, Ronchetti, Rousseeuw, and Stahel, *Robust Statistics: The Approach Based on Influence Functions*, for local robustness and breakdown distinctions.

Historical labels such as Bayes, Fisher, Neyman–Pearson, Rao–Blackwell, Cramér–Rao, Lehmann–Scheffé, Gauss–Markov, Horvitz–Thompson, and James–Stein are conventional shorthand. They do not by themselves constitute a complete history of the underlying ideas, whose development often involved multiple authors, traditions, and earlier special cases.

<a id="section-24-resampling-multiplicity-and-selection"></a>
## Resampling, multiplicity, and selection {#section-26-resampling-multiplicity-and-selection}

- Efron and Tibshirani, *An Introduction to the Bootstrap*, for bootstrap construction and diagnostics.
- Good, *Permutation, Parametric, and Bootstrap Tests of Hypotheses*, for randomisation and permutation viewpoints.
- Westfall and Young, *Resampling-Based Multiple Testing*, for dependence-aware simultaneous procedures.
- Yoav Benjamini and Yosef Hochberg, “Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing,” *Journal of the Royal Statistical Society, Series B* **57**(1) (1995), 289–300, [doi:10.1111/j.2517-6161.1995.tb02031.x](https://doi.org/10.1111/j.2517-6161.1995.tb02031.x), for the original independence result.
- Yoav Benjamini and Daniel Yekutieli, “The Control of the False Discovery Rate in Multiple Testing under Dependency,” *Annals of Statistics* **29**(4) (2001), 1165–1188, [doi:10.1214/aos/1013699998](https://doi.org/10.1214/aos/1013699998), for PRDS and arbitrary-dependence results.
- Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, “Time-uniform, nonparametric, nonasymptotic confidence sequences,” *Annals of Statistics* **49**(2) (2021), 1055–1080, [doi:10.1214/20-AOS1991](https://doi.org/10.1214/20-AOS1991), for confidence sequences and time-uniform coverage.
- Vladimir Vovk and Ruodu Wang, “E-values: Calibration, combination and applications,” *Annals of Statistics* **49**(3) (2021), 1736–1754, [doi:10.1214/20-AOS2020](https://doi.org/10.1214/20-AOS2020), for e-values and their combination.
- Richard Berk, Lawrence Brown, Andreas Buja, Kai Zhang, and Linda Zhao, “Valid post-selection inference,” *Annals of Statistics* **41**(2) (2013), 802–837, [doi:10.1214/12-AOS1077](https://doi.org/10.1214/12-AOS1077), for simultaneous post-selection coverage.

<a id="section-35-regression-experiments-surveys-and-missing-data"></a>
## Regression, experiments, surveys, and missing data {#section-37-regression-experiments-surveys-and-missing-data}

- Freedman, Pisani, and Purves, *Statistics*, for design-first reasoning and the distinction between association and causation.
- Imbens and Rubin, *Causal Inference for Statistics, Social, and Biomedical Sciences*, for potential outcomes, assignment mechanisms, and treatment-effect estimands.
- Cochran, *Sampling Techniques*, and Särndal, Swensson, and Wretman, *Model Assisted Survey Sampling*, for finite-population sampling, weights, variance, and calibration.
- Little and Rubin, *Statistical Analysis with Missing Data*, for missingness mechanisms, likelihood, imputation, and sensitivity boundaries.
- Tsiatis, *Semiparametric Theory and Missing Data*, for estimating equations, influence functions, and augmented procedures.

Design terminology differs across communities. In particular, “random sample,” “random effects,” “random assignment,” and “randomisation distribution” name distinct mechanisms. Editorial review should reject any sentence that moves a guarantee between them without argument.

<a id="section-45-bayesian-bridge"></a>
## Bayesian bridge {#section-47-bayesian-bridge}

- Bernardo and Smith, *Bayesian Theory*, for joint modelling, decision principles, and foundations.
- Gelman and collaborators, *Bayesian Data Analysis*, for generative modelling, prediction, model checking, and workflow.
- Robert, *The Bayesian Choice*, for decision-theoretic Bayesian inference.
- Computational details, MCMC diagnostics, hierarchical models, and variational approximations belong primarily to the companion computational Bayesian volume; that volume should maintain its own current algorithmic references.

The bridge chapter treats posterior claims as conditional on a prior–likelihood joint model. It avoids claiming that a posterior probability and repeated-sampling coverage are interchangeable. Any historical discussion of Bayesian and frequentist schools should be reviewed for oversimplification and for contributions outside the small set of names preserved in conventional labels.

<a id="section-54-primary-source-and-attribution-workflow"></a>
## Primary-source and attribution workflow {#section-56-primary-source-and-attribution-workflow}

Before release, every named theorem and historically specific sentence should receive one of four records:

1. a primary source checked directly, with bibliographic metadata and the exact claim supported;
2. a reliable historical or scholarly secondary source where the primary record is inaccessible or ambiguous;
3. a label explicitly described as conventional terminology rather than a priority claim;
4. removal or rewriting when the attribution cannot be supported.

The audit must distinguish discovery, first proof, generalisation, modern formulation, and popularisation. These are different historical claims. It must also inspect translations, renamings, and contributions obscured by eponymous vocabulary.

<a id="section-65-reading-by-purpose"></a>
## Reading by purpose {#section-67-reading-by-purpose}

For the L3 route, pair main Chapters 1–13 with a general mathematical-statistics text and compare regularity conditions. Decision principles are in Chapter 3; general equivariance, minimaxity, sequential/selective and robustness material continues in the L4 companion. For design and public evidence, pair Chapters 14–17 with regression, randomisation, survey and missing-data sources. Use Chapter 18 as a bridge to the Bayesian Inference course.

Counterexample work should use more than one source. When two texts state superficially different versions of a theorem, the learner should identify whether the difference lies in domination, support, differentiability, conditioning, parameter-space boundaries, or the strength of the conclusion.

<a id="section-71-citation-policy-for-contributed-material"></a>
## Citation policy for contributed material {#section-73-citation-policy-for-contributed-material}

Contributors must cite external datasets, adapted examples, algorithms, historical assertions, and nontrivial results outside the book's proved dependency chain. Paraphrase does not erase attribution. Short standard calculations need not be burdened with a citation on every line, but the surrounding theorem lineage and any adapted exercise structure must be documented.

No source may be treated as mathematically authoritative merely because it is famous. The final standard remains a checked argument with declared hypotheses, plus attribution appropriate to the origin and form of the result.

<a id="section-77-current-route-and-preserved-source-scope"></a>
## Current route and preserved source scope {#section-79-current-route-and-preserved-source-scope}

The L3 route has nineteen main chapters. Three advanced originals retain their IDs through aliases to Advanced Inference destinations; donor files, optional SI questions, proofs, solutions, errata and bibliographic records remain. No reference entry or historical theorem locator is discarded by the route change.

The Bayesian bridge uses explicit TeX for its original joint-law, posterior, predictive and risk formulas. Its sample-proportion decomposition states n at least one, and reciprocal normal-variance calculations state positive variances. These qualifications preserve the existing normalization and improper-prior boundaries. Continue with the [Bayesian inference course](/courses/bayesian-inference/) for L3 computation and modeling.
`;export{e as default};