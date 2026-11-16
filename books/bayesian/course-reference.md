# Reference, notation and further study

## Notation

| Symbol | Meaning |
|---|---|
| $y$ | Observed data; context determines scalar, vector or counts |
| $\tilde y$ | Future or replicated data, with its target stated |
| $\theta$ | Unknown parameter or vector of parameters |
| $p(\theta)$ | Prior density or mass |
| $p(y\mid\theta)$ | Sampling model as a function of data; likelihood as a function of parameter |
| $p(\theta\mid y)$ | Posterior conditional on data and modelling assumptions |
| $p(y)$ | Marginal likelihood/evidence under a specified model |
| $E[\cdot]$, $\operatorname{Var}(\cdot)$ | Expectation and variance |
| $\propto$ | Proportional to, with the omitted constant independent of the variable of inference |
| $\mathbb{1}(A)$ | Indicator, equal to one if event A occurs and zero otherwise |
| $\Delta$ | A named contrast, such as equal-centre B–A completion difference |

## Distribution conventions

| Distribution | Mathematical parameters | Mean and variance | Python convention |
|---|---|---|---|
| Bernoulli | probability $p$ | $p$; $p(1-p)$ | `rng.binomial(1,p)` |
| Binomial | trials $n$, probability $p$ | $np$; $np(1-p)$ | `stats.binom(n,p)` |
| Beta | positive shapes $a,b$ | $a/(a+b)$; $ab/[(a+b)^2(a+b+1)]$ | `stats.beta(a,b)` |
| Gamma | shape $a$, **rate** $b$ | $a/b$; $a/b^2$ | `stats.gamma(a,scale=1/b)` |
| Normal | mean $\mu$, **variance** $\sigma^2$ | $\mu$; $\sigma^2$ | `stats.norm(loc=mu,scale=sigma)`; PyMC uses `sigma` |
| Poisson | expected count $\lambda$ | $\lambda$; $\lambda$ | `stats.poisson(mu=lam)` |
| Student-t | degrees of freedom $\nu$, location $\mu$, scale $s$ | mean $\mu$ if $\nu>1$; variance $s^2\nu/(\nu-2)$ if $\nu>2$ | `stats.t(df=nu,loc=mu,scale=s)` |
| Half-normal | positive support, scale $s$ | $s\sqrt{2/\pi}$; $s^2(1-2/\pi)$ | `pm.HalfNormal(...,sigma=s)` |

In PyMC, `Gamma(alpha=a, beta=b)` uses a rate parameter `beta`; in NumPy/SciPy, gamma random generation uses a scale. Check a function's signature rather than inferring its parameterisation from the distribution's name. A Student-t scale is not its SD.

## Formula sheet

Bayesian updating: $p(\theta\mid y)\propto p(y\mid\theta)p(\theta)$, with normalisation required for a probability distribution. Posterior prediction: $p(\tilde y\mid y)=\int p(\tilde y\mid\theta)p(\theta\mid y)d\theta$.

Beta-binomial update: $(a,b)\rightarrow(a+y,b+n-y)$. Gamma-Poisson update with exposure: $(a,b)\rightarrow(a+\sum y_i,b+\sum t_i)$ in shape-rate form. Normal-known-variance update: $s_n^{-2}=s_0^{-2}+n\sigma^{-2}$ and $m_n=s_n^2(m_0s_0^{-2}+\sigma^{-2}\sum y_i)$.

Independent Monte Carlo mean error: approximately $s_g/\sqrt S$. For MCMC, use an appropriate effective sample size or direct MCSE estimate for the quantity of interest. Posterior expected-loss action: $a^*=\arg\min_aE[L(a,\theta)\mid y]$. LOO score: $\sum_i\log p(y_i\mid y_{-i})$.

## Diagnostic reference

| Evidence | What it can reveal | What it cannot establish |
|---|---|---|
| Prior predictive simulation | Implausible joint model implications before outcomes | That a prior is uniquely correct |
| R-hat, rank and trace plots | Differences or instability among explored chains | Exhaustive exploration of every mode |
| Bulk/tail ESS and MCSE | Numerical precision and efficiency for summaries | Scientific uncertainty disappearing with more draws |
| Divergences/BFMI/tree depth | Difficult HMC geometry or inefficient trajectories | Adequacy of the observation model |
| Posterior predictive checks | Failure to reproduce selected features | Universal fit or untouched predictive performance |
| PSIS Pareto k | Reliability concerns for importance approximation | Truth or falsehood of the model by itself |
| Held-out score | Predictive performance for the split's target | Causality or transfer to a different population |
| SBC | Computational self-consistency under simulated models | That those models describe actual data |

Our teaching screens use four chains, R-hat below 1.01, bulk/tail ESS above 400, no divergences, and investigation of BFMI/tree depth. These are starting criteria for scrutiny; required MCSE depends on the decision. Follow [Stan's diagnostic guidance](https://mc-stan.org/learn-stan/diagnostics-warnings.html) and the [modern R-hat paper](https://arxiv.org/abs/1903.08008) for detail.

## Glossary

**Conjugacy:** a prior-likelihood pairing whose posterior stays in the prior family. **Credible interval:** a region with stated posterior probability. **Density:** probability per unit, integrated over a region to obtain probability. **Estimand:** the precise quantity an analysis seeks to learn. **Exchangeability:** joint beliefs unchanged by relabelling units under stated conditioning information. **Generative model:** a probabilistic account capable of simulating observations. **Hyperparameter:** a parameter governing a distribution of other parameters.

**Identifiability:** whether different parameter values imply distinguishable observation distributions. **Likelihood:** data compatibility as a function of parameters, holding observed data fixed. **Marginalisation:** summing or integrating out uncertain quantities. **Partial pooling:** estimating groups through a shared population model. **Posterior predictive distribution:** distribution of future or replicated outcomes averaged over posterior uncertainty. **Regularisation:** constraining unstable estimates, here through a prior or hierarchical structure.

**Sensitivity analysis:** examining changes under alternative defensible assumptions. **Sufficient statistic:** a data summary retaining likelihood information about a parameter within a specified model. **Utility:** numerical representation of consequences for a decision. **Validation leakage:** using information intended to be withheld when fitting, selecting, or preprocessing a model. **Warmup:** early sampler iterations used for adaptation and initial exploration, excluded from retained posterior draws.

## Appendix and advanced notation crosswalk

Mathematical Normal second arguments are variances, including multivariate covariance matrices. Library `scale`/`sigma` arguments generally use standard deviations; Student-t scale is a separate quantity. A rate needs an exposure unit. A vector’s dimension and the conditioning set are part of its definition.

| Notation | Meaning and caution | Local worked reference |
|---|---|---|
| $X$, $x$; $p(x)$, $f(x)$ | Random variable versus realised value; mass versus density | [Probability](./appendix-01_probability.md) |
| $J$, $H$, $\nabla$ | Jacobian, Hessian, gradient; specify transformed measure and evaluation point | [Calculus](./appendix-02_calculus.md), [approximation](./adv-01_approximation.md) |
| $X\in\mathbb R^{n\times p}$, $\Sigma$, $\Lambda$ | Design matrix, covariance, precision; precision is inverse covariance when nonsingular | [Linear algebra](./appendix-03_linear_algebra.md) |
| $q(\theta)$, $\operatorname{KL}(q\Vert p)$ | Approximate density and directed divergence; direction changes the approximation | [A01](./adv-01_approximation.md) |
| $M_k$, $p(y\mid M_k)$ | Model label and model-specific evidence; proper priors and constants matter | [A02](./adv-02_model_evidence.md) |
| $R$, $x^*$ | Recording indicator and latent true measurement; conventions are stated locally | [A03](./adv-03_observation_process.md) |
| $Y(a)$, $\operatorname{do}(A=a)$ | Potential outcome and intervention; neither follows from association alone | [A04](./adv-04_causal.md) |
| $x_t$, $\phi$, $\epsilon_t$ | Latent state, dependence parameter, innovation; innovation variance differs from stationary variance | [A05](./adv-05_time_series.md) |
| $k(x,x')$, $K$, $f_*$ | Covariance kernel, Gram matrix and latent function at test inputs | [A06](./adv-06_gaussian_processes.md) |
| $S$, ESS, MCSE | Draw count, summary-specific effective count and numerical error | [Numerics](./appendix-04_numerics.md) |

## Extended glossary and practice map

| Term | Working definition | Practice or case |
|---|---|---|
| Laplace approximation | Gaussian local curvature approximation near a posterior mode | [adv.approximation.1](./exercises-questions.md#adv.approximation.1), [adv.approximation.2](./exercises-questions.md#adv.approximation.2) |
| Variational family / ELBO | Restricted approximating distributions / an optimisation lower bound on log evidence; convergence need not establish accuracy | [adv.approximation.1](./exercises-questions.md#adv.approximation.1), [adv.approximation.2](./exercises-questions.md#adv.approximation.2), [adv.approximation.3](./exercises-questions.md#adv.approximation.3) |
| Bayes factor | Evidence ratio for two specified models; prior-sensitive and undefined with arbitrary improper-prior constants | [adv.model_evidence.1](./exercises-questions.md#adv.model_evidence.1), [adv.model_evidence.2](./exercises-questions.md#adv.model_evidence.2) |
| Bayesian model averaging | Prediction averaging using posterior model probabilities under the stated model list | [adv.model_evidence.2](./exercises-questions.md#adv.model_evidence.2), [adv.model_evidence.3](./exercises-questions.md#adv.model_evidence.3) |
| Stacking | Predictive mixture weights chosen for an evaluation objective, not posterior model truth probabilities | [adv.model_evidence.3](./exercises-questions.md#adv.model_evidence.3) |
| Ignorability | Conditions under which the recording mechanism can be omitted for a specified inference; not a synonym for random missingness | [adv.observation_process.2](./exercises-questions.md#adv.observation_process.2), [adv.observation_process.3](./exercises-questions.md#adv.observation_process.3) |
| Censoring / truncation | An observed interval/event versus exclusion outside a selection region; likelihoods differ | [adv.observation_process.3](./exercises-questions.md#adv.observation_process.3) |
| Positivity / overlap | Each relevant treatment is possible within target covariate strata; a prior does not create missing identification | [adv.causal.2](./exercises-questions.md#adv.causal.2), [adv.causal.3](./exercises-questions.md#adv.causal.3) |
| G-formula | Standardising identified conditional outcome means over a stated target covariate distribution | [adv.causal.1](./exercises-questions.md#adv.causal.1); Lab 16 |
| State-space model | A latent evolving process linked to noisy observations | [sensor case](./case-02_sensor_forecasting.md) |
| Rolling-origin evaluation | Repeated chronological training/forecast splits with fixed horizons | [adv.time_series.3](./exercises-questions.md#adv.time_series.3); sensor case |
| Kernel / length scale | Covariance rule / characteristic input-distance scale controlling function similarity | [adv.gaussian_processes.1](./exercises-questions.md#adv.gaussian_processes.1), [adv.gaussian_processes.2](./exercises-questions.md#adv.gaussian_processes.2), [adv.gaussian_processes.3](./exercises-questions.md#adv.gaussian_processes.3) |
| Jitter | Small numerical diagonal perturbation used for stable computation; distinct from scientific observation noise | [adv.gaussian_processes.2](./exercises-questions.md#adv.gaussian_processes.2) |
| Transport | Applying inference to a different population or measurement context, requiring additional justification | [penguin case](./case-01_penguins.md) |

Find all `extra.*` and `adv.*` prompts in the [question bank](./exercises-questions.md); use the [worked bank](./exercises-solutions.md) only after an attempt. Original questions remain at the end of each core chapter, with [separate solutions](./course-solutions.md). The [syllabus](./course-syllabus.md) gives prerequisites and both study routes.

## Continue after the capstone

Choose depth based on the next question, not just a list of sophisticated methods.

| Direction | Preparation and motivating question | Starting resource |
|---|---|---|
| Mathematical Bayesian statistics | Probability/calculus; when do posteriors concentrate or remain prior-sensitive? | [Bayesian Data Analysis](https://sites.stat.columbia.edu/gelman/book/) |
| Scientific and causal modelling | Regression and causal graphs; what intervention is identified? | [Statistical Rethinking](https://github.com/rmcelreath/stat_rethinking_2026) |
| Advanced computational workflow | MCMC and prediction; how should a difficult applied model be developed? | [Bayesian Modeling and Computation](https://bayesiancomputationbook.com/welcome.html) |
| Flexible regression and Gaussian processes | Linear algebra and regression; how can nonlinear functions be modelled? | [PyMC examples](https://www.pymc.io/projects/examples/en/latest/) |
| Time series and state-space models | Conditional dependence and regression; how does a latent process evolve? | [Stan User's Guide](https://mc-stan.org/docs/stan-users-guide/index.html) |
| Predictive evaluation | Model checking; what split and score match deployment? | [Cross-validation FAQ](https://users.aalto.fi/~ave/modelselection/CV-FAQ.html) |
| Approximate inference | Optimisation and probability; which posterior features does an approximation lose? | [Aalto chapter notes](https://avehtari.github.io/BDA_course_Aalto/BDA3_notes.html) |

The research dossier explains which sources shaped this course and what was actually inspected. External sites may change; the included chapters, code and results remain the self-contained core.


## Seven further methods: choose by target

The [syllabus menu](./course-syllabus.md#further-advanced-menu-seven-bounded-modules) gives prerequisites and 40–54 additional planning hours. The new material is optional and leaves both original routes unchanged. Each lesson includes a fitted worked lab, two scientific figures, a changed-givens investigation and three [optional questions](./exercises-continuation_questions.md). Work an attempt before consulting the separate [answer bank](./exercises-continuation_solutions.md).

| Target or distinction | Local reading | Scope boundary |
|---|---|---|
| Unordered versus ordered response categories | [Nominal and ordinal regression](./adv-10_outcome_regression.md) | Category order does not establish proportional odds; inspect response probabilities |
| Assurance versus fixed-truth error and expected cost | [Study design](./adv-11_study_design.md) | Separate design and analysis priors; freeze looks, cap and decisions |
| Survival, hazard and event density with censoring | [Event-time regression](./adv-12_survival.md) | Administrative independent censoring; weeks are part of the model |
| Fixed settings, empirical Bayes and posterior integration | [GP hyperparameters](./adv-13_gp_hyperparameters.md) | Mixture quantiles and shared whole-curve draws; finite integration checks |
| Evidence weights versus learned predictive weights | [Predictive combinations](./adv-14_predictive_combination.md) | Fold-contained transforms and untouched outer evaluation; average densities before logs |
| Optimization error versus family error | [Fitted variational inference](./adv-15_variational_fit.md) | Optimize both families; retain termination warnings and tail discrepancies |
| Nonlinear functions linear in coefficients | [Splines and additive regression](./adv-16_splines.md) | Proper nullspace priors, smoothing uncertainty, training centering, bounded prediction domain |

### Continuation glossary

**Assurance** averages a prospective success decision over a declared design prior; it differs from the success probability at one fixed truth. **Proportional odds** uses the same regression slope across cumulative category splits. **Censoring** records an inequality about a time instead of treating the observed limit as an event. **Empirical Bayes** plugs an estimated hyperparameter into a conditional posterior; posterior integration instead averages over its uncertainty. **Stacking** chooses predictive mixture weights using held-out predictive densities; a weight is not a probability that a model is true. **Variational family error** persists when an optimized approximation cannot express the posterior dependence or tails. A spline **nullspace** contains directions unpenalized by a chosen roughness penalty; those directions still need proper priors in this course.

The [covariance experiment](../../apps/bayesian/explorer.html#continuation-covariance) connects dependence to sum/difference uncertainty. The [two-look design experiment](../../apps/bayesian/explorer.html#continuation-study-design) enumerates a small uniform-prior policy, with a numerical table and static alternatives. Its toy priors and thresholds differ from the fitted study-design lab.
