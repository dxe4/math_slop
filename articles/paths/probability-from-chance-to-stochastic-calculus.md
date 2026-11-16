# Probability from chance to stochastic calculus

**Audience.** Learners who want a dedicated probability spine from finite experiments through rigorous limits, random processes, simulation, and continuous-time theory.

**Goal.** Model uncertainty precisely, prove finite and asymptotic results, analyze random evolution, and distinguish mathematical guarantees from simulation and empirical assumptions.

**Estimated time.** About 560 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Finite chance and information

**Milestone.** Build a finite probability space, justify symmetry or weights, and reverse a conditional probability without losing the information protocol.

- **Probability by counting** — Model equally likely finite outcomes using systematic counting and combinatorial structure.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Probability You Can Touch: Coins, Bags, and New Information](../probability-you-can-touch.md)
  - [Foundations Workshop: Eight Problems, Hints, and Fully Explained Answers](../../problems/atlas/foundations-workshop/index.md)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Checkpoints for Uncertainty, Design and Prediction](../recipe-model-audit-foundations-checkpoints.md)
  - [Build a First Model: Units, Balance and Uncertainty](#/courses/atlas-applied-modeling-entry)
- **Probability spaces and axioms** — Define events and probability measures through sigma-algebras, normalization, countable additivity, and continuity of probability.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [From Finite Chance to Measure-Theoretic Probability](../measure-probability-bridge.md)
  - [Introduction to Probability](#/books/introduction-to-probability)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Conditional probability** — Update probabilities after information, distinguish independence, and apply Bayes' rule.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Core Solved Exercise Bank](../../problems/atlas/proof-foundations/index.md)
  - [Probability You Can Touch: Coins, Bags, and New Information](../probability-you-can-touch.md)
  - [Bayesian Inference from Scratch: Learning by Reweighting Possibilities](../bayes-from-scratch.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
  - [A ciphertext and a posterior](../../apps/atlas/index.html#/labs?lab=visual-lab-perfect-secrecy)
  - [Cryptography](#/books/cryptography)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Independence and product models** — Construct repeated and multicomponent experiments, distinguishing pairwise, mutual, conditional, and modeled independence.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)

## Stage 2: Random quantities and dependence

**Milestone.** Derive a law from its mechanism, transform it, and prove a tail bound under named hypotheses.

- **Random variables** — Map random outcomes to numerical quantities and study their cumulative and mass behavior.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Discrete distributions and generating tools** — Derive Bernoulli, binomial, geometric, Poisson, and related count laws from their mechanisms and recurrences.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Continuous distributions and transformations** — Work with densities, survival functions, change of variables, hazards, and normal, exponential, gamma, and beta families.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Joint distributions and dependence** — Describe several random variables together using joint, marginal, conditional laws, covariance, copulas, and transformations.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [From Finite Chance to Measure-Theoretic Probability](../measure-probability-bridge.md)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Expectation and variance** — Summarize center, spread, covariance, and long-run average using linear operators.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Concentration inequalities** — Control deviations using Markov, Chebyshev, Chernoff, Hoeffding, bounded-difference, and martingale methods under explicit tail assumptions.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Martingales, Stopping, and Concentration](../martingales-stopping-concentration.md)

## Stage 3: Limits and foundations

**Milestone.** Choose the correct convergence mode and justify one limit through expectation or distribution.

- **Convergence of random variables** — Compare almost-sure, in-probability, distributional, and Lp convergence plus the conditions that permit limit interchange.
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [From Finite Chance to Measure-Theoretic Probability](../measure-probability-bridge.md)
- **Probability limit theorems** — Explain stabilization of averages and emergence of Gaussian behavior through weak and strong laws and central limit theorems.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Measure-theoretic probability** — Build probability from measures, measurable maps, integration, product spaces, conditional expectation, and convergence theorems.
  - [From Finite Chance to Measure-Theoretic Probability](../measure-probability-bridge.md)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)

## Stage 4: Discrete-time evolution

**Milestone.** Analyze a chain by transition, hitting, stationary, and coupling arguments, then audit an optional-stopping claim.

- **Stochastic processes** — Specify random evolution indexed by time or space through finite-dimensional laws, dependence structure, and path properties.
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
  - [Time Series](#/books/time-series)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Markov chains** — Analyze transition matrices, communicating classes, stationary laws, recurrence, hitting times, periodicity, and mixing.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
- **Coupling methods** — Place random objects on one probability space to compare laws, bound total variation, prove mixing, and reduce variance.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
- **Stopping times and first passage** — Formalize decisions made from current information and analyze hitting, absorption, stopped processes, and first-passage laws.
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Martingales, Stopping, and Concentration](../martingales-stopping-concentration.md)
- **Martingales** — Study information-respecting fair processes, transforms, optional stopping, convergence, concentration, and conditional forecasts.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [From Finite Chance to Measure-Theoretic Probability](../measure-probability-bridge.md)
  - [Martingales, Stopping, and Concentration](../martingales-stopping-concentration.md)
  - [Probability Theory: Measure, Limits and Martingales](#/books/probability-theory-measure-martingales)
  - [Stochastic Calculus and Financial Mathematics](#/books/stochastic-calculus-financial-mathematics)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)

## Stage 5: Arrivals and continuous paths

**Milestone.** Connect arrival counts to waits, random walks to diffusion, and quadratic variation to the Itô correction.

- **Poisson and point processes** — Model random arrivals through independent increments, exponential waiting, thinning, superposition, and point configurations.
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
- **Renewal processes and queues** — Study repeated arrivals with general waiting laws, renewal rewards, residual life, inspection bias, and elementary queues.
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
- **Brownian motion and diffusion** — Study continuous Gaussian paths, scaling, reflection, hitting, quadratic variation, and random-walk diffusion limits.
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Martingales, Stopping, and Concentration](../martingales-stopping-concentration.md)
  - [Stochastic Calculus and Financial Mathematics](#/books/stochastic-calculus-financial-mathematics)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
- **Stochastic calculus and differential equations** — Integrate predictable processes against noisy paths and use Itô formulas, stochastic differential equations, generators, and change of measure.
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Stochastic Calculus and Financial Mathematics](#/books/stochastic-calculus-financial-mathematics)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)

## Stage 6: Reliable random computation

**Milestone.** Implement a seeded simulator, validate it against an exact case, and report computational uncertainty separately from model error.

- **Monte Carlo methods** — Approximate expectations and probabilities by random simulation while quantifying computational error, dependence, and variance reduction.
  - [Bayesian Modelling and Criticism](#/books/computational-bayesian-modeling)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
- **Randomized algorithms** — Use random choices to simplify algorithms and analyze expected cost, error, and concentration.
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Cryptography: Definitions Before Devices](../cryptography-definitions-protocols.md)
  - [Mathematics for Computer Science: Proofs, Machines, and Verified Systems](#/courses/atlas-mathematics-computer-science-standard)
  - [Mathematics for Computer Science: A Proof-First Course](#/books/algorithms-computation-proof-desk)
  - [Certificates, Counterexamples, and the Boundaries of Computational Claims](../certificates-counterexamples-computational-claims.md)
  - [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced)

## Capstone

Specify, prove, simulate, and criticize one evolving random system, including a state and information model, an exact theorem, a seeded implementation, boundary counterexamples, an accessible numerical alternative, and a claim ladder.
