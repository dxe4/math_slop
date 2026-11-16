var e=`---
parent_id: book-kernels-and-gaussian-processes
matter_id: references-and-source-map
title: "References and Source Map"
license: CC BY-SA 4.0
---

# References and Source Map

The commissioning comparison texts are Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, and Bernhard Scholkopf and Alexander J. Smola, Learning with Kernels. They provide the broader kernel and probabilistic-function context. The present arguments and exercises are authored Euler treatments; those references do not constitute independent review of this manuscript.

The six retained Euler sources are [Function models](../../structured-probabilistic-learning/a-probability-model-is-more-than-a-fitted-curve.md), [Positive kernels](../../structured-probabilistic-learning/positive-semidefinite-kernels.md), [Gaussian finite distributions](../../structured-probabilistic-learning/gaussian-processes-through-finite-distributions.md), [GP conditioning](../../structured-probabilistic-learning/conditioning-a-gaussian-process.md), [Ridge and GP means](../../structured-probabilistic-learning/kernel-ridge-and-gp-means.md), and [Numerical conditioning](../../structured-probabilistic-learning/numerical-conditioning-is-part-of-inference.md). Their original mathematical text, figures, examples and exercise solutions remain in their original family. The split adds revised destinations without deleting those identities or merging notes.

Chapters 1–2 expand the finite-feature and covariance constructions. Chapter 3 proves RKHS completion and the uniform Mercer expansion from explicitly named compact spectral and Arzela-Ascoli inputs. Chapter 4 expands the original ridge comparison with a singular-Gram representer proof and exact deletion identity. Chapter 5 is the new SVM treatment using finite convex Slater duality as its stated optimisation input.

Chapters 6–7 expand the Gaussian-process definition and conditioning source, preserving its observed-block invertibility and singular on-support examples. The [measure-theoretic probability book](../../probability-theory-measure-martingales.md) supplies extension, characteristic-function uniqueness and Brownian continuity. The compact spectral and equicontinuity tools are prepared in [Functional Analysis](../../functional-analysis.md) and [Real Analysis](../../proof-safe-real-analysis.md).

Chapters 8–14 develop new classification, hyperparameter, perturbation, inducing, random-feature, embedding and case-study material. A standard Cholesky rounding theorem and Bochner's converse theorem are explicitly named external inputs, not conclusions inferred from numerical output. Constructive Gaussian spectral examples and all stated elementary finite-design bounds receive their own arguments.

No generic nonlinear-filtering theorem, uncontrolled Laplace error guarantee, arbitrary-kernel characteristicness theorem, general sparse-posterior exactness or universal finite-feature generalisation result is claimed. Where the proof establishes a fixed design, compact domain, finite conditional block or declared posterior family, that scope remains part of the conclusion.
`;export{e as default};