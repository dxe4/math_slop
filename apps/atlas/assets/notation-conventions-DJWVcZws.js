var e=`---
parent_id: book-probabilistic-graphical-models
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

Uppercase letters denote random variables and lowercase letters their values. Vertex sets can also name their variable collections when the context makes that unambiguous. Parent and ancestor sets refer to the original directed graph; moralization is an auxiliary construction for separation or inference, not a causal reorientation.

Finite-state conditional probabilities are imposed only on positive-probability conditioning configurations. Strict positivity of the entire joint table is explicitly assumed for the finite Hammersley-Clifford converse and the simple global Gibbs minorization argument. It is not needed for forward separation from an already valid factorization.

Unnormalized factors are written as weights or potentials. Z denotes a normalizer, which can be an evidence probability or density depending on the observation model. Evidence with zero weight yields no ordinary conditional ratio. Natural logarithms are used in likelihoods, entropy, divergence, ELBOs and graph scores.

Sigma denotes covariance and Q precision for a positive-definite Gaussian law. A principal Q block is conditional precision; a marginal precision is a Schur complement. Matrix inverses in displayed identities describe mathematical formulas; actual calculations can use linear solves. Singular cases are not silently handled by pseudoinverse substitution.

HMM alpha and beta values are unnormalized forward and backward likelihood weights. Gamma and xi denote normalised singleton and adjacent-state posteriors. Their scaled versions require consistent stored likelihood constants. Viterbi targets a whole-path mode, whereas marginal modes minimize separate state-error loss.

An ELBO is the expected log joint plus entropy under a declared approximation. Reverse divergence is from the approximation to the target. EM Q is the expected complete-data log likelihood under the old exact posterior. These two meanings of Q occur in different chapters and are explicitly introduced there.

The do notation denotes replacement of a structural mechanism. Ordinary conditioning retains the original mechanism. Potential outcomes use a shared exogenous-noise construction; marginal identification does not imply identification of their joint cross-world coupling.
`;export{e as default};