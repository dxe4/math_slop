# Welcome

Probabilistic programming joins two disciplines: writing a generative model
that says how data could arise, and running an inference algorithm that reasons
backward from observations to uncertain latent quantities. The program is not
the probability model, and the sampler is not the scientific conclusion. This
book keeps those layers visible from the first Bernoulli example through
Hamiltonian Monte Carlo, particle filters, exact message passing, deterministic
and variational approximations, predictive evaluation, likelihood-free
inference, causal assumptions, and decision analysis.

Begin with L2 probability and statistical inference, using
[Introduction to Probability](#/books/introduction-to-probability)
and [Statistics with R](#/books/statistics-with-r) for preparation.
The code-first chapters also assume basic Python programming. The
[starting toolkit](00i-probabilistic-programming-bridge.md) refreshes
fractions, functions, logs, sums, Python and elementary probability. Later
chapters need calculus, linear algebra and the additional preparation named in
their introductions; local explanations do not replace those foundations.

## Learning outcomes

You will learn to:

- distinguish a generative model, joint density, posterior target, inference
  algorithm, and decision rule;
- derive and compute Bayes updates in discrete and continuous models;
- use stable log-density and transformed-parameter calculations;
- implement direct Monte Carlo, rejection and importance sampling,
  Metropolis–Hastings, Gibbs, Hamiltonian Monte Carlo, particle filtering, and
  variational approximations;
- diagnose dependence, divergences, weight collapse, nonidentifiability, and
  simulation miscalibration;
- build hierarchical, generalized-linear, mixture, Gaussian-process, and
  state-space models;
- exploit exact variable elimination and audit Laplace, EP, and flow
  approximations;
- use rank-normalized diagnostics, MCSE budgets, PSIS-LOO, and predictive
  stacking;
- understand trace addresses, constraint lowering, and inference handlers in a
  probabilistic-programming implementation;
- validate ABC and neural simulation-based inference without confusing
  simulator calibration with real-world adequacy;
- perform prior and posterior predictive checks and sensitivity analysis; and
- separate posterior uncertainty from causal identification, utility, and
  model discrepancy.

## Reading routes

Parts I and II should be read in order by a first-time reader. Part III can then
be sampled by model family. Part IV compares approximation, model criticism,
causal reasoning, and decisions. Part V develops exact inference, modern
diagnostics, predictive evaluation, language implementation, and
simulation-based inference; each chapter begins with its shortest preparation
route.

All Python listings are self-contained and use the standard library or NumPy.
They expose formulas that mature probabilistic-programming systems automate.
Mathematical symbols are translated to descriptive variable names beside the
implementation. Related formulas may share one readable function. Universal
statements, asymptotic theorems, nonconstructive existence results, and
production algorithms such as PSIS tail fitting are not imitated by misleading
toy code; the surrounding text states that boundary explicitly. This choice
keeps the mathematical target inspectable and avoids making one framework
version a hidden prerequisite. The topic guide explains how each algorithm maps
to common PPL concepts.

Every random example fixes its generator. Reproducibility means the same finite
experiment can be rerun; it does not make Monte Carlo output exact or a model
correct. Every chapter states what its computation establishes and what still
requires a theorem, diagnostic, or scientific assumption.
