var e=`---
parent_id: book-game-theory
chapter_id: reader-guide
title: "Reader Guide"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Reader Guide

Game theory studies what a choice means when its consequences depend on other choices. A payoff matrix is one representation of that dependence. A complete model also specifies who knows what, when a choice becomes observable, what counts as an available deviation, and how outcomes are compared. Much of the mathematical work in this book consists of making those specifications exact before applying a theorem.

This is an advanced undergraduate first course. The main route has fifteen chapters and ten supported exercises per chapter. Every exercise has two separately revealed hints and a complete solution. Read a worked example with its calculations covered, try to supply the next step, and then compare the reason for that step. For a proof exercise, write the hypotheses you used before opening the solution. A correct numerical answer with an inadmissible deviation or an incorrectly conditioned belief does not establish the requested strategic claim.

## Preparation and repairs

[Introduction to Proof](/books/library-book-introduction-to-proof/) supplies quantifiers, implication, contradiction, induction and careful construction of mathematical objects. The [discrete probability chapter](/books/library-book-discrete-mathematics-proof-counting-structure/discrete-probability/) supplies finite expectation, independence and conditional probabilities. These are preparation for the opening strategic chapters, not topics whose first encounter should occur inside an existence proof.

The minimax, duality and fixed-point chapters also use finite-dimensional real vectors, matrix multiplication, linear independence, inner products, convergent subsequences and compactness. [Finite-Dimensional Linear Algebra: Structure and Proof](/books/library-book-linear-algebra-structure-proofs/) is the linear-algebra preparation. Compactness and continuity enter explicitly in Chapter 5; the geometric fixed-point construction in Chapter 7 explains its own combinatorial machinery. The [Calculus book](/books/calculus-course/) provides elementary differentiation and integration for the auction calculations. [Introduction to Probability](/books/library-book-introduction-to-probability/) is a useful continuation before the continuous private-value auction example. Chapter 15 states its differential-equation solution assumptions and cites the general existence input; the scalar convergence arguments themselves are proved.

Use the [prerequisite diagnostic](prerequisite-diagnostic.md) to identify a specific repair. Its questions are self-study prompts. A completion checkmark records study activity and is not a graded assessment or evidence of mastery.

## One route, several useful pauses

Read Chapters 1–4 together: modelling, deletion arguments, Nash equilibrium and independent mixing. After Chapter 4, solve a game by listing supports and checking every unused action. This combines definitions that are too easily learned as unrelated recipes.

Chapters 5–7 develop existence and optimisation. Chapter 5 proves finite minimax directly. Chapter 6 proves the linear-programming alternative and duality used to certify matrix-game solutions. Chapter 7 builds Sperner and Brouwer before proving finite Nash existence. These proofs answer different questions: existence does not identify a unique equilibrium, and a candidate equilibrium still requires its own best-response check.

Chapters 8–11 add time and private information. Draw a history tree before writing a contingent strategy. In repeated games, name the monitoring convention and the punishment continuation before manipulating a discount inequality. In Bayesian games, derive the conditional distribution for the type whose incentives you are checking.

Chapters 12–15 examine allocation, institutions and populations. Coalitional stability, individual incentive compatibility, consistent social rankings and resistance to invasion are different conclusions. Keep the object returned by each model visible: a payoff allocation, an outcome-and-transfer rule, a social order, or a population state.

A reader interested first in institutions may read Chapter 14 after the proof preparation and Chapter 1. A reader studying repeated incentives needs Chapters 8–9 before Chapter 10. The Shapley-value part of Chapter 12 needs finite combinatorics; its balancedness proof depends on the duality proved in Chapter 6. Chapter 13 uses Chapter 11 for its Bayesian revelation discussion.

## Proof scope and manuscript status

The finite minimax, linear-programming duality, Sperner, Brouwer, finite Nash, finite Bayesian equilibrium, Shapley characterisation, balancedness and strict-order finite Arrow results are proved here. Kakutani is identified as an alternative imported theorem, not substituted for the finite Nash proof. Stronger folk theorems are cited as further results beyond the public-lottery and Nash-reversion statements actually proved. General differential-equation existence is also a cited input.

This is an authored Draft, not a reviewed or released edition. The edition metadata records source completion separately from independent mathematical, pedagogical and production review. No print artifact or page measurement is asserted. The older applied-modelling and social-choice sources remain available with their original identities; this book adds a coherent course without replacing those records.

## Sources

The chapter-level source notes identify primary articles, author-hosted books and the earlier local treatments. The [references and provenance guide](../back-matter/references-and-provenance.md) explains the relationship between this original manuscript and those sources.

## Summary

Start with a complete model, test the definition on an example, and then read the theorem with its hypotheses intact. Use the local hint and solution reveals to repair an argument. Keep equilibrium, optimality, credibility, coalition stability, truthfulness, aggregation and population dynamics distinct as the course moves between them.
`;export{e as default};