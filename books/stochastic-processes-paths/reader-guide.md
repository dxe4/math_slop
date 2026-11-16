
# Reader Guide and Notation

## Why this book exists

This volume begins at L3 and continues into L4 stochastic processes. It is for readers who have met proof-based probability and elementary linear algebra and want a coherent map of the major process families, their structural properties, and the tools that connect them. The book is not a research monograph, a handbook of simulation recipes, or a financial-engineering manual. It is a working text that treats Markov chains, coupling, Poisson and renewal processes, martingales, Brownian motion, and stochastic integration as connected parts of one landscape.

The manuscript is self-contained in the sense that every technical term is defined before use and chapters develop their ideas through worked examples and solved exercises. If a chapter feels dense, use the notation guide and diagnostic before concluding that the material is inaccessible. Stochastic process theory compresses measure theory, linear algebra, and probabilistic intuition into a single argument; expanding that argument is a learnable skill.

## Audience and prerequisites

The preparation differs by part.

- **Discrete time:** [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), together with elementary linear algebra, supplies the L3 preparation for path laws, finite chains, coupling and random walks; the extension theorem in the opening chapter is optional L4 orientation.
- **Arrivals and queues:** use the same probability preparation, plus elementary exponential integrals and differential equations when continuous-time transition laws are derived.
- **Martingales:** begin with the probability book’s conditional-expectation chapter; the convergence continuation uses L4 integrability and limiting arguments when explicitly stated.
- **Continuous paths:** use L4 convergence and integration preparation for Brownian path constructions and the Ito integral; measure-theoretic probability is a continuation alongside this part rather than an entry requirement for discrete time.

The commissioned *Probability Theory: Measure, Limits and Martingales* will provide the measure-theoretic continuation. The present finite-state arguments have their own proofs and do not require that future text to exist. The diagnostic identifies algebra, conditioning and convergence repairs separately.

## Four reading routes

### The continuous route

Begin with the five discrete-time chapters: [specifying a process](specifying-a-process.md), [discrete-time chains](finite-markov-chains.md), [classes and hitting times](classes-hitting-times-stationarity.md), [coupling](coupling-and-convergence.md), and [random walks](random-walks-gamblers-ruin.md). Then study Poisson arrivals, continuous-time chains, birth-death queues and renewal cycles; continue through martingale stopping, branching, L2 convergence and the four continuous-path chapters.

### The discrete-process route

Read the five chapters above, then [Poisson processes](poisson-processes.md), [continuous-time chains](continuous-time-markov-chains.md), [birth-death queues](birth-death-processes-queues.md), and [renewal processes](renewal-processes.md). The finite-chain class and absorption arguments support queueing questions, while the random-walk chapter explains how infinite states change integrability.

### The martingale and path route

After the opening path-law and chain chapters, read [Martingales and Stopping](martingales-and-stopping.md), [Branching Processes](branching-processes.md), and [Martingale Convergence](martingale-convergence-applications.md). Continue to [Brownian Motion](brownian-motion.md), [Reflection](path-properties-reflection-principle.md), [The Ito Integral](stochastic-integration-orientation.md), and [SDEs and Generators](sdes-diffusions-generators.md). Use the coupling chapter for total-variation bounds and the random-walk chapter for explicit stopping examples. Distinguish cited construction theorems from calculations proved within the chapter.

### The review and reference route

Read the front matter, then dip into individual chapters as needed. Each chapter is designed to be readable independently after the first two chapters, provided the reader accepts cited theorems without proof. This route suits a researcher who needs to recall a specific construction or bound.

## How to work a chapter

First read the opening question and write down the exact mathematical object, relation, and claim at stake. On a second pass, cover each worked example and predict the next step before reading it. Work at least four exercises before reading their solutions: one definition check, one calculation or construction, one proof or reasoning exercise, and one counterexample or repair. Compare your solution by structure rather than by wording. If your reasoning differs, ask whether it establishes the same conditions and uses no hidden hypothesis.

Maintain three ledgers:

1. a **claim-status ledger** recording whether each major statement is a theorem, a sketch, a numerical observation, or an open problem;
2. a **hypothesis ledger** recording the probability-space assumptions, integrability conditions, and state-space restrictions built into each construction;
3. a **model ledger** recording when an argument moves between discrete time, continuous time, countable state spaces, and general measurable spaces.

## Claim-status conventions used across chapters

Every chapter uses the same four-part classification. The convention is not decorative; it determines what kind of warrant a statement needs and what kind of doubt is appropriate.

| Status | Definition | Example | Appropriate response to doubt |
| --- | --- | --- | --- |
| **Theorem** | True by proof within stated axioms; every material hypothesis is listed. | The convergence theorem for finite irreducible aperiodic Markov chains ("Finite Markov Chains"). | Check that the hypotheses match your setting; identify any hidden integrability or state-space restriction. |
| **Sketch** | A proof outline that suppresses routine measure-theoretic verification or standard constructions; the full proof is recoverable with the indicated tools. | The existence of Brownian motion via Kolmogorov--Chentsov ("Brownian Motion"). | Verify that the suppressed steps are indeed standard; fill them in if the context is unfamiliar. |
| **Numerical observation** | A computation, simulation, or approximate identity whose validity depends on specific parameter choices. | The decimal approximation to a Poisson probability in "Poisson Processes." | Check the parameter values and the approximation regime; replicate the calculation independently. |
| **Open problem** | A precisely stated question with no known proof or disproof in the stated framework. | No open problem is used as a premise in this introductory manuscript. | Do not treat conjectures as theorems; record the precise statement and known partial results. |

A theorem is not uncertain because a reader finds it difficult. A numerical observation is not a license to ignore error bounds. An open problem is not worthless because it has resisted solution. Each statement needs the right warrant.

## Exercise markers

Exercises are numbered within each chapter. Markers indicate the expected reasoning demand:

- **R** --- retrieval or notation check;
- **F** --- routine fluency or construction;
- **P** --- proof, justification, or reasoning;
- **C** --- counterexample, repair, or misconception diagnosis;
- **T** --- transfer to a new surface form or context;
- **I** --- investigation requiring extended reasoning across sections.

A single exercise may carry multiple markers. Solutions show the decisive reasoning, not only the final answer. When an exercise tests model choice, hypothesis selection, proof structure, or interpretation, the solution explains why that choice is warranted.

## How to report a suspected error

Report a suspected error with the chapter identifier, the smallest questionable claim, and, when possible, a counterexample or proposed repair. For an exercise, include the exact step at which the supplied answer and your calculation diverge. This makes mathematical and notation issues reproducible.

## Scope and deliberate boundaries

This book reaches a first treatment of Markov chains, coupling, Poisson processes, renewal processes, martingales, Brownian motion, and the Itô integral. It does not attempt continuous-time Markov chains on general state spaces, stochastic partial differential equations, Malliavin calculus, or numerical methods for stochastic differential equations. Those are separate volumes because each needs its own prerequisites, examples, and proof standards.

The next component is a prerequisite diagnostic. The notation and convention guide after it is designed for repeated reference rather than one-time reading.
