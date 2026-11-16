
# Reader Guide

This is an L4 text on joint distributions, graphical independence, inference and learning. Required preparation is [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs) and the [Bayesian course](#/books/bayesian). The Gaussian chapters additionally use the probability book's [Gaussian vectors](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md) and [Linear Algebra](#/books/linear-algebra-structure-proofs). Most general independence and learning proofs use finite state spaces. Continuous examples state density, integrability and matrix-rank assumptions where needed.

Read all fifteen chapters in order for the complete course. The first five build joint laws and graph representations. Chapters 6–11 develop exact elimination, finite-state sequence inference, variational and sampling approximations, EM and linear Gaussian state-space inference. Chapters 12–15 handle parameter learning, observational structure, interventions and integrated capstones.

For an inference route read Chapters 1–8, then 9–11. For a structure-and-causality route read Chapters 1–5 and 12–15, using Chapter 6 whenever marginalization is needed. For a sequence-model route read Chapters 1–3, 5–7, 10 and 11; compare finite-state summation with Gaussian conditional linear algebra before attempting the temporal capstone.

Each chapter has at least three worked examples and ten exercises, each with two separately revealed hints and a full solution. The final chapter adds three analytical projects with the same support. Attempt an exercise before opening help. In your solution state the joint law, the observation or intervention, the target and any support restriction before choosing an algorithm.

A d-separation gives a law-wide independence guarantee for a graph factorization. D-connection does not force dependence without faithfulness. An invariant target is not a mixing bound. An improved lower bound is not exact posterior recovery. A likelihood-increasing EM step is not a global maximum certificate. An observed arrow is not an intervention effect without causal semantics. These are mathematical distinctions with explicit examples throughout the text.

This book expands the graph half of [Structured Probabilistic Learning](#/books/structured-probabilistic-learning). All original chapter and exercise identities remain addressable. Its original kernel, Gaussian-process and numerical chapters are separate readings pending the completed kernel book; they are not treated as graphical-model chapters merely to fill this sequence.
