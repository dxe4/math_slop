var e=`---
id: book-computational-bayesian-modeling
title: "Bayesian Modelling and Criticism"
level: graduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Bayesian Modelling and Criticism

Modern Bayesian analysis is not merely Bayes’ rule followed by software. It is a cycle of generative modeling, computation, diagnostics, predictive criticism, and sensitivity analysis. This compact advanced treatment assumes probability distributions, likelihood-based inference, multivariable calculus, numerical integration, and basic programming. It derives a small hierarchical model and the mechanics of Markov chain Monte Carlo while emphasizing what computation cannot certify.

This is an L4 alternative focused on modelling and criticism. Begin with the primary [Bayesian Inference course](/bayesian/site/course/syllabus.html). For algorithms and Monte Carlo error, follow [Monte Carlo and Markov Chain Computation](/books/mcmc:book:monte-carlo-markov-chain-computation/). The present chapters add modelling assumptions, predictive comparisons and decision questions to that preparation.

## Reading sequence

1. [Generative Stories and Observation Laws](computational-bayesian-modeling/generative-stories-observation-laws.md)
2. [Prior-predictive Audits and Observation Mechanisms](computational-bayesian-modeling/generative-prior-predictive-audits.md)
3. [Conjugate Posterior Benchmarks](computational-bayesian-modeling/conjugate-posterior-benchmarks.md)
4. [Conjugate Prediction and Calibration](computational-bayesian-modeling/conjugate-predictive-calibration.md)
5. [Hierarchical Population Models](computational-bayesian-modeling/hierarchical-population-models.md)
6. [Hierarchical Uncertainty and Prediction](computational-bayesian-modeling/hierarchical-uncertainty-prediction.md)
7. [Predictive Experiments and Discrepancies](computational-bayesian-modeling/predictive-experiments-discrepancies.md)
8. [Predictive Calibration and Case Studies](computational-bayesian-modeling/predictive-calibration-case-studies.md)
9. [Comparison, Scores and Decisions](computational-bayesian-modeling/comparison-scores-decisions.md)
10. [Decision Sensitivity and Model Uncertainty](computational-bayesian-modeling/decision-sensitivity-model-uncertainty.md)
11. [Prior Specification and Sensitivity](computational-bayesian-modeling/prior-specification-sensitivity.md)
12. [Measurement Error and Missing Data](computational-bayesian-modeling/measurement-error-missing-data.md)

The following mathematical reference overview collects recurring calculations. Its topic numbers do not replace the twelve-chapter reading sequence above. Sampling, Monte Carlo error and convergence diagnostics continue in [MCMC Volume 1](/books/mcmc:book:monte-carlo-markov-chain-computation/).

## Mathematical reference overview

## 1. Begin with the generative story

Let observed data be $y$, unknown parameters $\\theta$, and fixed modeling choices $M$. Bayes’ theorem gives a posterior density

$\\pi (\\theta \\mid y,M) = p(y \\mid \\theta ,M)\\pi (\\theta \\mid M) / p(y \\mid M)$,

where the marginal likelihood

$p(y \\mid M)=\\int p(y \\mid \\theta ,M)\\pi (\\theta \\mid M)d\\theta$

normalizes the density. For inference within one model, algorithms often need only the unnormalized target

$\\pi (\\theta \\mid y) ∝ p(y \\mid \\theta )\\pi (\\theta )$.

Write the model as a simulator before writing an estimator. Which variables are observed? Which are latent? What conditional independences are claimed? What scale does each parameter inhabit? Which missingness and selection mechanisms led to $y$? A directed graph can help, but an equivalent text specification must list every distribution and conditioning relation.

Work on the log scale:

$\\log \\pi (\\theta \\mid y)=\\log p(y \\mid \\theta )+\\log \\pi (\\theta )+\\text{constant}$.

Products of small densities underflow in floating-point arithmetic; sums of log densities are more stable. Constraints require care. If a density originally specified with respect to $d\\sigma$ is evaluated after the change of variables $\\eta =\\log \\sigma$, its density with respect to $d\\eta$ includes the Jacobian $\\lvert d\\sigma /d\\eta \\rvert =\\exp \\eta$. No extra Jacobian should be added when the prior was specified directly on $\\eta$, and some modeling systems insert the required term automatically.

## 2. Conjugacy as an exact computational benchmark

Suppose $y_{i}\\lvert p$ are independent Bernoulli($p$) and $p\\sim \\operatorname{Beta}(a,b)$. If $s=\\sum y_{i}$, then

$\\pi (p \\mid y) ∝ p^{s}(1-p)^{n-s} p^{a-1}(1-p)^{b-1}$,

so $p\\lvert y\\sim \\operatorname{Beta}(a+s,b+n-s)$.

This exact result is useful beyond convenience: it tests approximate algorithms. A sampler for this model should reproduce known posterior means, variances, and quantiles within Monte Carlo error. If not, debug the code before attacking a model with no closed form.

The posterior mean $(a+s)/(a+b+n)$ is a weighted compromise between prior mean $a/(a+b)$ and sample proportion $s/n$. The weights are $a+b$ and $n$, often interpreted as prior and observed effective counts in this specific conjugate model. Do not transfer that interpretation automatically to arbitrary priors.

## 3. Hierarchical models and partial pooling

Suppose successes $y_{j}$ out of $n_{j}$ trials are observed in groups $j=1,...,J$. Separate estimates $y_{j}/n_{j}$ are noisy for small groups; complete pooling assumes one probability for all groups. A hierarchy allows related but distinct probabilities:

$y_{j} \\lvert p_{j} \\sim \\operatorname{Binomial}(n_{j},p_{j})$

$\\operatorname{logit}(p_{j}) = \\alpha + u_{j}$

$u_{j} \\lvert \\tau \\sim \\mathcal{N}(0,\\tau^{2})$.

Place defensible priors on $\\alpha$ and positive scale $\\tau$. Posterior estimates of small groups are pulled toward the shared population pattern more strongly than estimates of large groups. This **partial pooling** arises from joint inference, not from manually averaging rates.

**Worked Gaussian analogue.** Let group estimate $x_{j}\\lvert \\theta_{j}\\sim \\mathcal{N}(\\theta_{j},s_{j}^{2})$ and $\\theta_{j}\\sim \\mathcal{N}(\\mu ,\\tau^{2})$, with $\\mu ,\\tau$ treated as known for the moment. Completing the square gives

$\\theta_{j}\\lvert x_{j} \\sim \\mathcal{N}(m_{j},v_{j})$,

where

$v_{j}=(1/s_{j}^{2}+1/\\tau^{2})^{-1}$

and

$m_{j}=v_{j}(x_{j}/s_{j}^{2}+\\mu /\\tau^{2})$.

Thus $m_{j}=w_{j}x_{j}+(1-w_{j})\\mu$ with $w_{j}=\\tau^{2}/(\\tau^{2}+s_{j}^{2})$. Large observation uncertainty $s_{j}^{2}$ causes more shrinkage toward $\\mu$; large between-group variation $\\tau^{2}$ causes less. If $\\tau$ is estimated poorly from few groups, its prior can materially affect pooling and must be varied in sensitivity analysis.

Hierarchies do not excuse omitted structure. If group measurements use different instruments, or selection depends on outcomes, exchangeability may be implausible. Add measured structure or narrow the claim.

## 4. Monte Carlo estimates and their error

If $\\theta^{1},...,\\theta^{S}$ are draws from the posterior, approximate an expectation by

$\\mathbb{E}[h(\\theta ) \\mid y] \\approx (1/S)\\sum_{s} h(\\theta^{s})$.

Independent draws would give Monte Carlo standard error approximately $\\operatorname{sd}(h)/\\sqrt S$. For a stationary MCMC chain satisfying an appropriate central limit theorem, autocovariances give an estimand-specific **effective sample size** $S_{\\mathrm{eff}}$ and an approximate error $\\operatorname{sd}(h)/\\sqrt{S_{\\mathrm{eff}}}$. An ESS estimate can itself be unreliable for a nonstationary or poorly mixing chain. Reporting posterior standard deviation without Monte Carlo error confuses uncertainty about the unknown with error from finite computation.

Doubling iterations reduces independent Monte Carlo error only by about $\\sqrt 2$. Better parameterization or algorithms can be more valuable than a longer run.

## 5. Metropolis–Hastings from an invariant kernel

Suppose current state is $\\theta$. Propose $\\theta '\\sim q(\\theta ' \\mid \\theta )$ and accept it with probability

$a(\\theta ,\\theta ')=\\min{1, [\\pi (\\theta ')q(\\theta \\mid \\theta ')] / [\\pi (\\theta )q(\\theta ' \\mid \\theta )]}$.

Otherwise retain $\\theta$. The normalizing constant of $\\pi$ cancels. For a symmetric random-walk proposal, the $q$ terms cancel too.

The Metropolis–Hastings kernel leaves $\\pi$ invariant because accepted moves satisfy detailed balance. For distinct states,

$\\pi (\\theta )q(\\theta ' \\mid \\theta )a(\\theta ,\\theta ')$

equals the minimum of $\\pi (\\theta )q(\\theta ' \\mid \\theta )$ and $\\pi (\\theta ')q(\\theta \\mid \\theta ')$, which is symmetric in $\\theta ,\\theta '$. Therefore probability flow between each pair balances at stationarity. Invariance alone does not imply convergence from an arbitrary initial state. Suitable irreducibility and positive Harris recurrence conditions, plus integrability of the estimand, support ergodic convergence; aperiodicity is additionally relevant for convergence of transition probabilities.

Those conditions are not guaranteed by code that runs. A chain trapped in one mode can look locally stable. A proposal scale that is tiny accepts often but explores slowly; one that is huge rejects often. Acceptance rate alone is not proof of convergence.

## 6. Gradient-based sampling

Hamiltonian Monte Carlo augments $\\theta$ with momentum $r$ drawn from a declared momentum distribution and simulates approximate Hamiltonian dynamics under potential energy $-\\log \\pi (\\theta )$ and the corresponding kinetic energy. Gradients guide long moves through high-density regions. For a reversible, volume-preserving integrator, the Metropolis correction removes discretization bias in exact arithmetic; floating-point error and incorrect gradients can still invalidate an implementation.

The leapfrog step size and trajectory length control a stability–efficiency tradeoff. **Divergent transitions** indicate that numerical trajectories fail to follow difficult posterior geometry, often caused by funnels, boundaries, or strong curvature. Increasing the acceptance target may help but can hide rather than solve a pathological parameterization.

For hierarchical models, a noncentered parameterization writes $u_{j}=\\tau z_{j}$ with $z_{j}\\sim \\mathcal{N}(0,1)$. It often improves geometry when group data are weak; the centered form may be better when groups are strongly informed. This is a diagnostic choice, not a universal rule.

## 7. Diagnostics are necessary, never sufficient

Run multiple chains from dispersed initial values. Inspect:

- rank-based split $R-hat$, seeking values close to one rather than using a magic pass/fail threshold;
- bulk and tail effective sample sizes;
- trace or rank plots, with an equivalent table of chain means, ranges, and autocorrelations;
- divergences, maximum tree depth, energy behavior, or sampler-specific warnings;
- sensitivity to initialization and parameterization.

A table might report:

\`\`\`text
parameter   median   90% interval   bulk ESS   tail ESS   R-hat   warnings
alpha        -0.4    [-0.9, 0.1]       1800       1400     1.00      none
tau           0.3    [ 0.1, 0.8]        420        260     1.01      3 divergences
\`\`\`

The second row is not clean merely because $R-hat$ is near one. Divergences and low tail ESS undermine tail summaries; reparameterize, inspect geometry, and rerun.

No finite diagnostic proves convergence. Diagnostics can reveal failures, not certify correctness of the posterior or model.

## 8. Predictive criticism

Draw replicated data $y_{rep}$ from $p(y_{rep} \\mid \\theta )$ for posterior draws of $\\theta$. Compare features important to the question: zeros, extremes, group spreads, temporal runs, residual correlation, or calibration. If the observed maximum is far beyond almost every replicated maximum, the model misses tail behavior even if central predictions look adequate.

Posterior predictive checks reuse data and are primarily diagnostic; their tail areas are not automatically calibrated frequentist p-values. Prior predictive checks ask whether the model could generate plausible data before seeing observations and often reveal absurd scales sooner.

Evaluate predictions on genuinely held-out or future data when the aim is generalization. Account for the full data pipeline: if preprocessing used all outcomes, the holdout is contaminated.

## 9. Model comparison and decision boundaries

Predictive criteria and cross-validation compare specified models for a specified predictive task. Marginal likelihoods are sensitive to prior mass throughout parameter space, not only near the posterior. A high score does not establish that a model is scientifically true or causally identified.

Decisions minimize posterior expected loss only relative to the modeled outcomes and utilities. Include asymmetric harm, abstention, and costs of new data where relevant. Report how the chosen action changes under alternative priors, likelihoods, and loss values.

## Exercises with worked solutions

### 1. Log-posterior

For Poisson counts $y_{i}\\lvert \\lambda \\sim \\operatorname{Poisson}(\\lambda )$ and prior $\\lambda \\sim \\operatorname{Gamma}(a,b)$ using rate $b$, derive the posterior kernel.

**Solution.** The likelihood kernel is $\\lambda^{\\sum y_{i}} \\exp(-n\\lambda )$. The prior kernel is $\\lambda^{a-1}\\exp(-b\\lambda )$. Their product is the kernel of $\\operatorname{Gamma}(a+\\sum y_{i},b+n)$. Constants depending only on data can be omitted for sampling, but the rate-versus-scale convention must be stated.

### 2. Shrinkage calculation

In the Gaussian hierarchy, let $x_{j}=12$, $s_{j}=4$, $\\mu =8$, and $\\tau =2$. Find the posterior mean with known hyperparameters.

**Solution.** $w=\\tau^{2}/(\\tau^{2}+s^{2})=4/(4+16)=.2$, so $m=.2(12)+.8(8)=8.8$. The uncertain group estimate is strongly pooled toward 8.

### 3. MCMC error

A chain has 20,000 iterations but effective sample size 800 for a quantity with posterior SD 3. Approximate its Monte Carlo standard error.

**Solution.** $3/\\sqrt 800\\approx 0.106$. Using $\\sqrt 20000$ would ignore autocorrelation and overstate computational precision.

### 4. Diagnose a funnel

Four chains have $R-hat=1.00$, but there are 120 divergences concentrated at small $\\tau$. What should be concluded?

**Solution.** Convergence is not established. Divergences concentrated at small $\\tau$ warn of possible numerical integration or exploration problems there. Investigate priors, scales and geometry, consider justified parameterizations, and rerun while checking the affected estimands and Monte Carlo precision. A near-one $\\hat{R}$ does not remove the warning or prove persistent pathological geometry.

### 5. Computational audit project

Implement random-walk Metropolis for the exact Beta–binomial posterior. Compare sample mean and quantiles with analytic values, vary proposal scale and initialization, compute autocorrelations and Monte Carlo error, then deliberately introduce a bug that omits rejections from the stored chain.

**Solution standard.** Repeated states must remain in the chain. Dropping rejected iterations changes the transition record and generally biases the empirical distribution. A successful audit explains observed acceptance, effective sample size, analytic discrepancy in Monte Carlo-error units, and why agreement in one easy target does not validate all models.

## Continuation and unfinished territory

Continue to measure-theoretic conditional probability, stochastic-process theory for Markov chains, automatic differentiation and numerical optimization, graphical models, Gaussian processes, time series, spatial models, and causal inference. Full courses are still needed for sequential Monte Carlo, variational inference, reversible-jump methods, probabilistic programming implementation, Bayesian nonparametrics, simulation-based inference, model misspecification, and scalable distributed computation. Standard references include Gelman and coauthors for workflow, Robert and Casella for Monte Carlo, and specialist texts for the applied domain. Computation can approximate a conditional distribution; it cannot make an unidentified estimand, biased sample, or scientifically implausible model trustworthy.
`;export{e as default};