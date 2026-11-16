# Sources for independently detected counts

The numerical cases and teaching sequence here are original constructions. Three primary or author-maintained references support the underlying methods; they do not report learning outcomes for this module.

1. [James Martin, Lecture Notes for Part A Probability, Oxford](https://www.stats.ox.ac.uk/~laws/msc/Probability.pdf), section 7.3, Theorem 7.2, printed page 65. This states and proves Poisson–binomial thinning and the independence of marked and unmarked Poisson processes. Our model uses independent marking with a common fixed probability. The result does not by itself cover detector saturation, false positives, dependence or an unknown time-varying rate.
2. [Charles Geyer, Stat 5421 notes on the Poisson distribution](https://www.stat.umn.edu/geyer/5421/notes/poisson.html), sections 9.1–9.2. These establish the Gamma shape–rate convention, moments and conjugacy. The $qT$ exposure update and numerical cases in this lesson follow by substituting the observation likelihood derived here.
3. [Stan User's Guide, Problematic Posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html#adding-priors), discussions of collinearity and adding priors. These illustrate equal-likelihood ridges and the distinction between prior regularisation and likelihood identification in other models. The $q\lambda$ invariance, two-point prior mixture and all predictive calculations here are derived explicitly, rather than attributed to that source.

The existing book already teaches [Gamma–Poisson prediction and transformations](../../books/bayesian/04_continuous.md), [observation-process likelihoods and identification](../../books/bayesian/adv-03_observation_process.md), and [Laplace/Jacobian approximation](../../books/bayesian/adv-01_approximation.md). This extension supplies a concrete count-detection bridge between those developed topics. It does not present predictive variance or Jacobians as omissions in the earlier book.

Sources inspected 2026-10-20. External links are references; the reading edition loads no external resources.
