var e=`---
id: book-introduction-to-probability
title: "Introduction to Probability"
level: undergraduate
license: CC BY-SA 4.0
---

# Introduction to Probability

Probability begins with a model: which outcomes are recorded, how they are weighted, what information is available, and which repetitions are independent. This first university course develops those questions before using distribution names or approximation formulas.

The book is pitched at L2, Year 1, and uses elementary calculus for continuous densities and transformations. The first eight chapters need only algebra and finite counting. Later chapters use ordinary integrals, derivatives and numerical limits; measure theory is not an entry requirement.

## Preparation

Read [Algebra and Functions](algebra-and-functions.md), particularly [functions and domains](algebra-and-functions/functions-domain-graphs.md), [exponential functions](algebra-and-functions/exponential-functions.md), and [logarithms](algebra-and-functions/logarithms.md). Before Chapter 9, review definite integrals and elementary differentiation through [Calculus as Change and Accumulation](/atlas/#/item/course-calculus-change).

The [preface and reader guide](introduction-to-probability/front-matter/preface-and-reader-guide.md) includes a short diagnostic and explains the role of proved results, cited theorems, finite bounds and approximations.

## Part I: Models, events, and information

1. [Chance, Models, and Simulation](introduction-to-probability/chance-models-simulation.md)
2. [Sample Spaces and Events](introduction-to-probability/sample-spaces-events.md)
3. [Counting](introduction-to-probability/counting.md)
4. [Conditional Probability and Bayes](introduction-to-probability/conditional-probability-bayes.md)

Start by describing the experiment and its outcome record. Event operations and compatible counts support probability calculations; conditioning changes the reference group and requires a positive denominator.

## Part II: Independence, variables, and moments

5. [Independence](introduction-to-probability/independence.md)
6. [Random Variables and Distributions](introduction-to-probability/random-variables-distributions.md)
7. [Expectation and Variance](introduction-to-probability/expectation-variance.md)
8. [Named Discrete Distributions](introduction-to-probability/named-discrete-distributions.md)

Independence, identical distributions and conditional independence are different assumptions. Random variables turn records into numbers, moments summarise their laws, and named distributions are derived from their mechanisms.

## Part III: Continuous and joint laws, transformations, and averages

9. [Continuous Distributions](introduction-to-probability/continuous-distributions.md)
10. [Joint Distributions and Covariance](introduction-to-probability/joint-distributions-covariance.md)
11. [Transformations and Sums](introduction-to-probability/transformations-sums.md)
12. [The Law of Large Numbers](introduction-to-probability/law-of-large-numbers.md)

Density areas replace point masses, joint laws determine dependence, and transformations require their full support and inverse branches. A finite-variance proof of the weak law connects independent averages with their expectation.

## Part IV: Limits, chains, simulation, and synthesis

13. [The Central Limit Theorem](introduction-to-probability/central-limit-theorem.md)
14. [Markov Chains: A First Look](introduction-to-probability/markov-chains-first-look.md)
15. [Simulation and Monte Carlo](introduction-to-probability/simulation-monte-carlo.md)
16. [Summary, Problems, and Projects](introduction-to-probability/summary-problems-projects.md)

The classical iid central limit theorem is explicitly cited, while its standardisation and applications are developed in detail. Finite chains model dependence through a state, and independent Monte Carlo calculations distinguish exact uncertainty bounds from normal approximations.

## How to study

Work each example with the event and assumptions written beside the calculation. Attempt an exercise before revealing its first hint, use its second hint for a more specific direction, and read the full solution to compare arguments. Ask what changes if replacement, independence, the conditioning event or the support changes.

A study checkmark records your reading choice, not assessed mathematical mastery. Simulated outcomes and numerical agreement illustrate a model but do not prove its assumptions or replace the chapter's arguments.

## Sources and continuation

The text and exercises are newly written. Chapters 1, 4 and 14 develop ideas from Euler's retained [Probability You Can Touch](../deep-dives/probability-you-can-touch.md), [Probability: Models Before Formulas](../courses/probability-models.md), and [Random Walks from Coins](../deep-dives/random-walks-from-coins.md). Those original sources remain available with their own identities and mathematical content.

The principal benchmarks are Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/), and the official CHANCE Project edition of [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf). See [references and notation](introduction-to-probability/back-matter/references-and-notation.md) for their roles and the chapter conventions.

After this introduction, [Probability: Models, Bounds, and Proofs](probability-models-proofs/event-models-and-axioms.md) develops the measure-based language and more general results. Its additional analysis and proof preparation belongs to that continuation.
`;export{e as default};