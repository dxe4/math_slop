var e=`---
parent_id: book-probabilistic-graphical-models
matter_id: references-and-source-map
title: "References and Source Map"
license: CC BY-SA 4.0
---

# References and Source Map

The commissioning comparison texts are Daphne Koller and Nir Friedman, Probabilistic Graphical Models: Principles and Techniques, and Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics. They provide the broader subject context. The present chapters, examples and exercises are authored Euler treatments, not an imported review or a claim that every advanced theorem in those books is established here.

The original Euler [Structured Probabilistic Learning](../../structured-probabilistic-learning.md) remains addressable. Its [model-versus-predictor chapter](../../structured-probabilistic-learning/a-probability-model-is-more-than-a-fitted-curve.md) motivates the rewritten joint-law opening. Its [directed graphs](../../structured-probabilistic-learning/directed-graphical-models.md) and [undirected factors](../../structured-probabilistic-learning/undirected-models-and-factors.md) supply earlier motifs, examples and conditional-independence statements expanded in Chapters 2–5.

The retained [inference chapter](../../structured-probabilistic-learning/exact-and-approximate-inference.md) supplies the earlier chain table, HMM first update and mean-field sign example, expanded and separated in Chapters 6–8. Its original exercises and solution collection remain under their original IDs. The [learning chapter](../../structured-probabilistic-learning/learning-graph-structure-and-parameters.md) supplies the row-count formula, PC example and BIC comparison expanded in Chapters 12–13. Nothing in this split deletes the old source or silently moves its learner records.

The newly authored Gaussian, sampling, EM, Kalman, causal and capstone chapters connect these earlier topics through explicit joint models. Gaussian-vector identities are prepared in the probability book. The [GLM text](../../regression-and-generalised-linear-models.md) supplies logistic conditional families. The [measure-theoretic probability text](../../probability-theory-measure-martingales.md) supplies broader conditional-expectation, kernel and martingale tools for continuous-state extensions.

The proved scope includes finite positive Hammersley-Clifford, exact factor elimination and junction-tree messages, finite-state HMM recursions and posterior paths, finite product mean-field coordinate arguments, finite Gibbs minorization and a strong law, exact EM monotonicity, linear Gaussian filtering and smoothing, finite conditional-table learning, oracle PC skeleton/collider recovery, compatible-prior covered-reversal scoring and structural adjustment formulas.

General Harris recurrence, full finite-sample PC recovery rates, completeness of an abbreviated orientation-rule list, arbitrary singular-model BIC asymptotics, unrestricted causal identification, nonlinear exact filtering and generic variational global optimisation are not proved by those scoped statements. In Chapter 13 the all-equivalence-class covered-reversal graph theorem is explicitly named separately; an exhaustive finite completion avoids using it as an unexplained proof step.
`;export{e as default};