var e=`---
id: book-kernels-and-gaussian-processes
title: "Kernels and Gaussian Processes"
level: graduate
license: CC BY-SA 4.0
---

# Kernels and Gaussian Processes

This L4 course connects positive kernels and deterministic function-space learning to Gaussian-process probability models and explicit approximations. Preparation is [Gaussian vectors](probability-models-proofs/gaussian-vectors-and-multivariate-normal.md) and [Linear Algebra](linear-algebra-structure-proofs.md). The Mercer section names its additional analysis inputs at the point of use. Begin with the [reader guide](kernels-and-gaussian-processes/front-matter/reader-guide.md), [preparation diagnostic](kernels-and-gaussian-processes/front-matter/prerequisite-diagnostic.md) and [notation](kernels-and-gaussian-processes/front-matter/notation-conventions.md).

Each chapter has three worked examples and ten exercises with two hints and full solutions. The last chapter adds three supported projects. The original kernel chapters and solutions in [Structured Probabilistic Learning](structured-probabilistic-learning.md) remain available; its revised graph half is [Probabilistic Graphical Models](probabilistic-graphical-models.md).

## Contents

1. [Models as Functions with Uncertainty](kernels-and-gaussian-processes/models-as-functions-with-uncertainty.md)
2. [Positive-Semidefinite Kernels](kernels-and-gaussian-processes/positive-semidefinite-kernels.md)
3. [Mercer Expansions and Reproducing-Kernel Hilbert Spaces](kernels-and-gaussian-processes/mercer-rkhs.md)
4. [The Representer Theorem and Kernel Ridge Regression](kernels-and-gaussian-processes/representer-theorem-kernel-ridge.md)
5. [Support Vector Machines](kernels-and-gaussian-processes/support-vector-machines.md)
6. [Gaussian Processes through Finite Distributions](kernels-and-gaussian-processes/gaussian-processes-through-finite-distributions.md)
7. [Conditioning a Gaussian Process](kernels-and-gaussian-processes/conditioning-a-gaussian-process.md)
8. [GP Classification and the Laplace Approximation](kernels-and-gaussian-processes/gp-classification-laplace.md)
9. [Hyperparameters and Marginal Likelihood](kernels-and-gaussian-processes/hyperparameters-marginal-likelihood.md)
10. [Numerical Conditioning Is Part of Inference](kernels-and-gaussian-processes/numerical-conditioning-is-part-of-inference.md)
11. [Sparse and Scalable Gaussian Processes](kernels-and-gaussian-processes/sparse-scalable-gaussian-processes.md)
12. [Random Features](kernels-and-gaussian-processes/random-features.md)
13. [Kernel Mean Embeddings](kernels-and-gaussian-processes/kernel-mean-embeddings.md)
14. [Case Studies: Geometry, Probability and Approximation](kernels-and-gaussian-processes/kernel-gp-case-studies.md)

## Reading routes

For the complete course follow the contents. A deterministic-learning route reads Chapters 1–5, 10, 12 and 13. A probabilistic route reads Chapters 1–3 and 6–11, using Chapter 4 for the ridge comparison and Chapter 14 for integrated applications. A distribution-comparison route reads Chapters 2–3 and 12–14. The [source map](kernels-and-gaussian-processes/back-matter/references-and-source-map.md), [glossary](kernels-and-gaussian-processes/back-matter/glossary.md) and [solution guide](kernels-and-gaussian-processes/back-matter/solutions.md) support these routes.

This is a Draft manuscript; independent review and a current printed edition are not recorded.
`;export{e as default};