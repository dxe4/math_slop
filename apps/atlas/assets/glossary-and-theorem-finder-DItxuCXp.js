var e=`---
parent_id: book-game-theory
chapter_id: glossary-and-theorem-finder
title: "Glossary and Theorem Finder"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder

This index points to the chapter in which an object is defined or a result is proved. A named concept alone does not carry all of its hypotheses; return to the linked statement before applying it to a new model.

## Strategic choices

| Term or result | Meaning and destination |
| --- | --- |
| Strategic-form game | Players, nonempty action sets and payoff functions; [Chapter 1](../strategic-form-games.md). |
| Unilateral deviation | A change by one player while the other coordinates remain fixed; [Chapter 1](../strategic-form-games.md). |
| Strict dominance | A strategy yields a strictly larger payoff against every permitted opposing profile; deletion arguments and weak-dominance limitations are in [Chapter 2](../dominance-and-rationalisability.md). |
| Rationalisability | Iterated best-response reasoning with explicitly specified beliefs and surviving actions; [Chapter 2](../dominance-and-rationalisability.md). |
| Nash equilibrium | Mutual best responses, without a joint-deviation or welfare conclusion; [Chapter 3](../nash-equilibrium.md). |
| Mixed strategy and support | A probability vector and the actions with positive probability; independent expectations and complete support inequalities are in [Chapter 4](../mixed-strategies.md). |
| Zero-sum value | Coinciding optimal guarantee and optimal upper bound; the finite minimax theorem is proved in [Chapter 5](../zero-sum-minimax.md). |

## Geometry and existence

| Term or result | Meaning and destination |
| --- | --- |
| Convex separation certificate | A nonnegative separating direction for a compact convex payoff set and an upper orthant; constructed in [Chapter 5](../zero-sum-minimax.md). |
| Farkas alternative | Exactly one of a nonnegative equality representation and the stated separating certificate exists; proved in [Chapter 6](../linear-programming-matrix-games.md). |
| Strong linear-programming duality | A feasible finite optimum has an attained matching dual optimum in the stated finite formulation; proved in [Chapter 6](../linear-programming-matrix-games.md). |
| Complementary slackness | Vanishing nonnegative terms in the primal–dual gap characterise optimal feasible pairs; proved in [Chapter 6](../linear-programming-matrix-games.md). |
| Sperner's lemma | Boundary-respecting labels force a fully labelled simplex; the subdivision and parity proof are in [Chapter 7](../fixed-points-equilibrium-existence.md). |
| Brouwer fixed point | A continuous self-map of the stated nonempty compact convex set has a fixed point; proved from Sperner and projection in [Chapter 7](../fixed-points-equilibrium-existence.md). |
| Finite Nash existence | The positive-gain fixed-point construction yields a mixed equilibrium; proved in [Chapter 7](../fixed-points-equilibrium-existence.md). |
| Kakutani fixed point | A cited alternative for correspondences with the stated domain, value and closed-graph hypotheses; not proved here, [Chapter 7](../fixed-points-equilibrium-existence.md). |

## Time, types and collective outcomes

| Term or result | Meaning and destination |
| --- | --- |
| Backward induction | Optimise continuations from terminal histories in the stated finite perfect-information model; [Chapter 8](../extensive-form-backward-induction.md). |
| Subgame perfection | A strategy profile restricts to equilibrium in every proper subgame as well as the whole game; [Chapter 9](../subgame-perfect-equilibrium.md). |
| One-stage deviation principle | With bounded discounted payoffs and the stated monitoring, local continuation comparisons rule out every deviation; proved in [Chapter 10](../repeated-games-folk-theorems.md). |
| Nash reversion | A public deviation triggers a credible pure stage-equilibrium continuation; the threshold and public-lottery construction are proved in [Chapter 10](../repeated-games-folk-theorems.md). Stronger folk theorems are cited separately. |
| Bayesian Nash equilibrium | Every positive-probability type best responds under its conditional beliefs; finite existence is proved in [Chapter 11](../bayesian-games.md). |
| Core | Efficient allocations satisfying every coalition-worth inequality; [Chapter 12](../cooperative-games-shapley-value.md). |
| Shapley value | Average marginal contribution over player orders; its formula, four axioms and uniqueness are proved in [Chapter 12](../cooperative-games-shapley-value.md). |
| Balancedness theorem | Balanced coalition weights characterise a nonempty finite transferable-utility core; proved using duality in [Chapter 12](../cooperative-games-shapley-value.md). |

## Institutions and populations

| Term or result | Meaning and destination |
| --- | --- |
| DSIC and BIC | Pointwise and conditional expected truthful-report incentives respectively; [Chapter 13](../auctions-mechanism-design.md). |
| Groves mechanism | Efficient reported-value maximisation with transfers that align each agent's objective; truthfulness is proved in [Chapter 13](../auctions-mechanism-design.md). |
| Revelation principle | A truthful direct mechanism reproduces the stated equilibrium implementation, preserving its incentive strength; proved in the specified models in [Chapter 13](../auctions-mechanism-design.md). |
| IIA | A social pairwise comparison depends only on individuals' comparisons of that pair; [Chapter 14](../social-choice-arrow.md). |
| Arrow's theorem | Under the finite strict-order unrestricted-domain, Pareto and IIA hypotheses, a social ranking rule has a dictator; fully proved in [Chapter 14](../social-choice-arrow.md). |
| ESS | Every fixed mutant is resisted at sufficiently small positive mutant fractions; the two-case comparison criterion is proved in [Chapter 15](../evolutionary-games.md). |
| Replicator dynamics | A specified payoff-driven differential equation; simplex preservation and the stated local or scalar convergence results are proved in [Chapter 15](../evolutionary-games.md). General ODE existence is a cited input. |

## Dependencies that matter in a proof

The minimax proof uses finite-dimensional compactness and convexity directly. The balancedness proof uses the attained duality theorem, so weak duality alone is insufficient for its reverse implication. Finite Bayesian existence uses finite Nash existence after converting types to contingent plans. Discounted one-stage deviation uses a uniformly vanishing payoff tail; it is not an undiscounted statement with the discount factor silently set to one.

Arrow's transfer argument uses a third alternative and strict social completeness. ESS requires quantification over mixed mutants even when the resident is pure. The auction truthfulness proofs keep the other reports fixed, whereas a Bayesian equilibrium calculation conditions on a type. These dependencies identify where a tempting extension would require a new proof.

## Sources

Primary provenance is collected in [References and Provenance](references-and-provenance.md). The linked chapters contain the exact statements, original proofs and local source notes.

## Summary

Find the object, recover the full statement, and check its hypotheses before using the result. The proof's dependencies explain both its force and its boundaries.
`;export{e as default};