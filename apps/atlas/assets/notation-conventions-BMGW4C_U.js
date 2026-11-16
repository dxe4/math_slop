var e=`---
parent_id: book-computational-bayesian-modeling
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. Notation is introduced before first use in each chapter, but the consolidated table below resolves ambiguities that arise when chapters are read out of order or consulted as a reference.

## General conventions

- Scalars are lowercase italic: $y$, $\\theta$, $\\sigma$.
- Vectors are bold lowercase: $\\boldsymbol{\\theta}$, $\\mathbf{y}$, $\\mathbf{p}$.
- Matrices are bold uppercase: $\\boldsymbol{\\Sigma}$, $\\mathbf{X}$, $\\mathbf{M}$.
- Random variables and their realized values use the same symbol; the distinction is clear from context or explicit statements.
- The transpose of a matrix $\\mathbf{A}$ is $\\mathbf{A}^{\\top}$.
- The determinant of a matrix $\\mathbf{A}$ is $\\det(\\mathbf{A})$.
- The indicator function is $\\mathbf{1}(\\cdot)$, equal to $1$ when the argument is true and $0$ otherwise.

## Probability and distributions

- $\\Pr(A)$ denotes the probability of event $A$.
- $\\mathbb{E}[X]$ denotes the expectation of random variable $X$.
- $\\operatorname{Var}(X)$ denotes the variance of $X$.
- $\\operatorname{Cov}(X, Y)$ denotes the covariance of $X$ and $Y$.
- $\\mathcal{N}(\\mu, \\sigma^{2})$ is the normal distribution with mean $\\mu$ and variance $\\sigma^{2}$.
- $\\operatorname{Gamma}(a, b)$ is the gamma distribution with shape $a$ and rate $b$. The density is proportional to $\\theta^{a-1} \\exp(-b\\theta)$. Scale parameterization is never used without explicit warning.
- $\\operatorname{Beta}(a, b)$ is the beta distribution with shape parameters $a$ and $b$.
- $\\operatorname{Inv\\text{-}Gamma}(\\alpha, \\beta)$ is the inverse-gamma distribution with shape $\\alpha$ and scale $\\beta$.
- $\\operatorname{Dirichlet}(\\boldsymbol{\\alpha})$ is the Dirichlet distribution with concentration vector $\\boldsymbol{\\alpha}$.
- $\\operatorname{Half\\text{-}Cauchy}(0, \\gamma)$ is the half-Cauchy distribution with scale $\\gamma$, supported on $(0, \\infty)$.
- $\\operatorname{Binomial}(n, p)$ is the binomial distribution with $n$ trials and success probability $p$.
- $\\operatorname{Poisson}(\\lambda)$ is the Poisson distribution with rate $\\lambda$.
- $\\operatorname{Bernoulli}(p)$ is the Bernoulli distribution with success probability $p$.
- $\\operatorname{NegBin}(r,p)$ has positive real shape $r>0$, success probability $0<p<1$, and count support $k=0,1,\\ldots$, with mass $\\Gamma(r+k)p^r(1-p)^k/[\\Gamma(r)k!]$. For integer $r$ it counts failures before the $r$th success; the shape need not be a literal success count.

## Bayesian modeling

- $\\pi(\\theta)$ denotes the prior density of parameter $\\theta$.
- $p(y \\mid \\theta)$ denotes the likelihood of data $y$ given parameter $\\theta$.
- $\\pi(\\theta \\mid y)$ denotes the posterior density of $\\theta$ given data $y$.
- $p(y \\mid M)$ denotes the marginal likelihood of data $y$ under model $M$.
- $\\propto$ means "is proportional to" as a function of the parameters; constants not depending on the parameters are dropped.
- The log posterior is $\\log \\pi(\\theta \\mid y) = \\log p(y \\mid \\theta) + \\log \\pi(\\theta) + \\text{constant}$.
- A generative story is an ordered list of sampling statements that defines the joint distribution of all variables.

## MCMC and sampling

- $\\theta^{(s)}$ denotes the $s$-th draw from a Markov chain.
- $S$ denotes the total number of post-warmup iterations.
- $S_{\\mathrm{eff}}$ denotes effective sample size for a named estimand or transformed function under the stated covariance/CLT conditions; rank-normalized bulk ESS is not generally the raw-mean ESS.
- $\\mathrm{MCSE}$ denotes the Monte Carlo standard error.
- $q(\\theta' \\mid \\theta)$ denotes a proposal density.
- $a(\\theta, \\theta')$ denotes the Metropolis--Hastings acceptance probability.
- $\\hat{R}$ denotes the potential scale reduction factor (split, rank-based).
- Bulk ESS and tail ESS are reported separately.
- Divergences, tree depth hits, and E-BFMI are HMC-specific diagnostics.

## Decision theory and model comparison

- $\\mathrm{elpd}_{\\mathrm{loo}}$ denotes the expected log predictive density from leave-one-out cross-validation.
- $\\mathrm{BF}_{10}$ denotes the Bayes factor for model $M_{1}$ against model $M_{0}$.
- $L(\\theta, \\delta)$ denotes the loss incurred by decision $\\delta$ when the parameter is $\\theta$.
- $\\delta^{*}$ denotes the Bayes optimal decision.
- $\\mathrm{WAIC}$ denotes the widely applicable information criterion.

## Parameterization and transformations

- $\\operatorname{logit}(p) = \\log(p/(1-p))$ for $p \\in (0, 1)$.
- $\\operatorname{logit}^{-1}(x) = 1/(1 + \\exp(-x))$.
- $\\eta = \\log \\sigma$ is the log standard deviation.
- Reparameterization changes the variable of integration; the Jacobian must be included when the prior is specified on a different scale.

## Indexing and summation

- Observations are indexed by $i = 1, \\dots, n$.
- Groups are indexed by $j = 1, \\dots, J$.
- Categories are indexed by $k = 1, \\dots, K$.
- Sums without explicit limits are over the full relevant index set: $\\sum_{i=1}^{n}$ or $\\sum_{j=1}^{J}$.

## Software and numerics

- Log densities are always used in computation to avoid underflow.
- The log-sum-exp trick is used for stable computation of $\\log(\\sum_{i} \\exp(x_{i}))$.
- Gradients are verified against finite differences when analytic forms are implemented.
- Warmup iterations are discarded; only post-warmup samples are used for inference.

## Ambiguity policy

- When a symbol has multiple standard meanings, the local definition prevails. For example, $\\alpha$ may be a hyperparameter, a regression intercept, or a shape parameter; its meaning is stated at first use in each chapter.
- Rate versus scale: the gamma distribution always uses rate $b$ unless explicitly stated otherwise. Scale is the reciprocal of rate.
- Variance versus precision: precision is $1/\\sigma^{2}$. When precision is used, it is stated explicitly.
`;export{e as default};