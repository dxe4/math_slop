var e=`---
parent_id: book-stochastic-calculus-financial-mathematics
matter_id: reader-guide
title: "Reader Guide and Model Conventions"
license: CC BY-SA 4.0
---

# Reader Guide and Model Conventions

**L4.** This continuation assumes measure-theoretic conditional expectation, martingale convergence and the Brownian/integration/SDE introduction in Stochastic Processes. The exact prerequisite resources are linked on the book page and in each available chapter. Its purpose is to derive continuous-time stochastic calculus and pricing under stated models, including the limits of those models.

The commissioned route has fourteen chapters in four parts. The first four are available: [Brownian Quadratic Variation](../brownian-motion-quadratic-variation.md), [The Itô Integral](../ito-integral.md), [Itô’s Formula](../ito-formula.md) and [Stochastic Differential Equations](../stochastic-differential-equations.md). They prove the variation, predictable completion, local chain-rule and equation-existence foundations. The other ten titles remain planned, not available reading destinations. The book remains Outline while those continuations are written.

## Mathematical and financial conventions

A filtered probability space and its information flow are part of the model. Brownian independence, predictability and conditional expectations refer to that filtration. A process with the same paths under enlarged information need not remain a Brownian martingale. Equality of processes is stated as indistinguishability when a single null event works for all times; fixed-time almost-sure equality alone is weaker.

A physical probability and a pricing probability answer different questions. Equivalent measures preserve null events on the stated horizon, while drift and conditional expectations can change. An expectation formula is a price only after the market, admissible self-financing strategies, numeraire and no-arbitrage/completeness hypotheses have been established. Those arguments belong to later commissioned chapters and are not inferred from an unexplained risk-neutral label.

All worked numerical parameters are source-owned hypothetical constructions. They describe mathematical models, with no claim of empirical calibration or observed trading results. Distinguish accumulated variance from a variance rate, volatility from variance, and discounted units from currency units. A finite sampling sum and its limiting target are different objects.

## Source lineage and comparison

The original [Brownian](../../stochastic-processes-paths/brownian-motion.md) and [Itô-integral](../../stochastic-processes-paths/stochastic-integration-orientation.md) readings retain their manuscripts, exercises and learner identities. The first two new chapters reuse that preparation by link and develop their own treatment; no source is retired or silently rekeyed.

On 14 November 2026, the [Springer record for Shreve's 2004 Finance II](https://link.springer.com/book/9780387401010) was read for its description of continuous-time calculus, pricing and term-structure scope. The [Karatzas–Shreve second-edition publisher record and contents](https://link.springer.com/book/10.1007/978-1-4612-0949-2) were read for its martingale, Brownian, integration, PDE, SDE and local-time organization. The latter record identifies the 1991 second-edition softcover and a later copyright/ebook record; those dates are not treated as different mathematical editions. These are limited publisher comparisons, not a reading of the full texts or a proof-equivalence assessment. Only the first four chapters are actual here: measure change, representation, pricing, rate, stopping and numerical scopes remain to be authored. General local-time theory and jump-process pricing are outside the current fourteen-title commission.

Hints and complete solutions accompany the available questions. Compare a written attempt against its hypotheses and reasoning; opening a solution or marking a reading complete is not graded evidence.
`;export{e as default};