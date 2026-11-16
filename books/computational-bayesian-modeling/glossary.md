
# Glossary and Index {#section-1-glossary-and-index}

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow reading order.

<a id="section-3-glossary"></a>
## Glossary {#section-5-glossary}

**Bayes factor.** The marginal-likelihood ratio $\mathrm{BF}_{10}=p(y\mid M_1)/p(y\mid M_0)$ where it is defined. Use the same observed data and observation measure and specify the within-model priors and normalizing constants; posterior model odds also use prior model odds. "Model Comparison and Decision Boundaries".

**Bulk ESS.** Effective sample size computed from rank-normalized draws, useful for detecting bulk mixing problems; it is not generally the ESS to substitute into a raw posterior mean's MCSE. "Monte Carlo Estimates and Their Error"; "Diagnostics Are Necessary, Never Sufficient".

**Conjugate prior.** A prior whose posterior belongs to the same parametric family as the prior for a given likelihood. "Conjugacy as an Exact Computational Benchmark".

**Control variate.** A function with known expectation used to reduce Monte Carlo variance. "Monte Carlo Estimates and Their Error".

**Divergence.** A numerical instability in HMC where the leapfrog integrator fails to follow the true Hamiltonian dynamics, often in regions of strong curvature. "Gradient-Based Sampling"; "Diagnostics Are Necessary, Never Sufficient".

**E-BFMI.** Energy Bayesian fraction of missing information; measures whether momentum resampling is adequate in HMC. "Diagnostics Are Necessary, Never Sufficient".

**Effective sample size ($S_{\mathrm{eff}}$).** An estimand-specific variance-efficiency summary under stated moment and chain conditions; it is not a literal count of independent draws and need not transfer to another function or quantile. "Monte Carlo Estimates and Their Error".

**Exchangeability.** Invariance of the joint distribution of group parameters to permutation of indices. "Hierarchical Models and Partial Pooling".

**Generative story.** An ordered description of how data are produced, specifying distributions, conditional independences, and parameter scales. "Begin with the Generative Story".

**Gradient-based sampling.** MCMC methods that use gradient information to make directed proposals, notably Hamiltonian Monte Carlo. "Gradient-Based Sampling".

**Half-Cauchy prior.** A heavy-tailed prior on a positive scale parameter, often used for population standard deviations in hierarchical models. "Hierarchical Models and Partial Pooling".

**Hamiltonian Monte Carlo (HMC).** A gradient-driven MCMC method that augments parameters with momentum variables and simulates Hamiltonian dynamics. "Gradient-Based Sampling".

**Hierarchical model.** A model that links group-level parameters through a population distribution, producing partial pooling. "Hierarchical Models and Partial Pooling".

**Jacobian.** The determinant of the derivative matrix for a change of variables; required when reparameterizing densities. "Begin with the Generative Story".

**Leave-one-out cross-validation (LOO-CV).** A method for estimating out-of-sample predictive performance by leaving out one observation at a time. "Predictive Criticism"; "Model Comparison and Decision Boundaries".

**Likelihood principle.** The principle that all information about parameters contained in data is in the likelihood function. "Begin with the Generative Story".

**Marginal likelihood.** For a specified normalized within-model prior, $p(y\mid M)=\int p(y\mid\theta,M)\pi(\theta\mid M)\,d\theta$. A finite positive value normalizes the posterior; an arbitrary multiplicative constant in an improper prior does not define ordinary model evidence. "Begin with the Generative Story"; "Model Comparison and Decision Boundaries".

**Markov chain Monte Carlo (MCMC).** A class of algorithms for approximate sampling from probability distributions by constructing a Markov chain with the target as its stationary distribution. "Monte Carlo Estimates and Their Error"; "Metropolis--Hastings from an Invariant Kernel".

**Metropolis--Hastings algorithm.** A general MCMC method that proposes new states and accepts or rejects them with a probability that ensures detailed balance. "Metropolis--Hastings from an Invariant Kernel".

**Monte Carlo standard error (MCSE).** The standard deviation of a Monte Carlo estimator; under appropriate chain-CLT conditions its asymptotic estimate uses the long-run variance for the reported estimand, or the equivalent estimand-specific $\mathrm{sd}_{\pi}(h)/\sqrt{S_{\mathrm{eff},h}}$. Bulk ESS is not an automatic substitute. "Monte Carlo Estimates and Their Error".

**Noncentered parameterization.** A representation such as $u_j=\tau z_j$ with standardized effects independent of the scale in the prior. It can improve weak-data hierarchical geometry; the likelihood can still couple these variables and strongly informed groups can favor centering. "Hierarchical Models and Partial Pooling"; "Gradient-Based Sampling".

**No-U-Turn Sampler (NUTS).** An adaptive HMC algorithm that automatically determines trajectory length by stopping when the path begins to double back. "Gradient-Based Sampling".

**Partial pooling.** Automatic shrinkage of group estimates toward a population mean, with the degree of shrinkage determined by data precision and between-group variation. "Hierarchical Models and Partial Pooling".

**Posterior predictive check.** A diagnostic that compares observed data to data simulated from the fitted model. "Predictive Criticism".

**Posterior predictive p-value.** The posterior probability $\Pr(T(y_{\mathrm{rep}})\ge T(y)\mid y)$ under this book's upper-tail convention, including ties; it is diagnostic, not automatically a calibrated significance-test p-value. "Predictive Criticism".

**Prior elicitation.** The process of translating background knowledge into a probability distribution over parameters. "Begin with the Generative Story".

**Prior predictive check.** A diagnostic that simulates data from the prior predictive distribution before seeing observations. "Predictive Criticism".

**Rao-Blackwellization.** For square-integrable $X$, replacing it by $\mathbb{E}[X\mid\mathcal{G}]$ gives no greater one-draw variance; sufficiency is not needed for that inequality. Averaging iid copies inherits the reduction, while an MCMC-mean comparison also depends on transition-specific long-run covariances. "Monte Carlo Estimates and Their Error".

**$\hat{R}$ (potential scale reduction factor).** A diagnostic that compares between-chain variance to within-chain variance; values near $1$ suggest convergence. "Diagnostics Are Necessary, Never Sufficient".

**Random-walk Metropolis.** In the usual unconstrained symmetric-increment case, a Metropolis--Hastings update proposes a random perturbation of the current state and cancels the proposal ratio. The raw-scale truncated-normal extension used here is state-dependent and needs its normalizing-constant correction. "Metropolis--Hastings from an Invariant Kernel".

**Reparameterization.** A change of variables in a statistical model; may require a Jacobian and can improve sampling efficiency. "Begin with the Generative Story"; "Gradient-Based Sampling".

**Sensitivity analysis.** Assessment of how posterior inferences change under alternative priors, likelihoods, or loss functions. "Begin with the Generative Story"; "Model Comparison and Decision Boundaries".

**Shadow Hamiltonian.** A formal or truncated modified Hamiltonian used in backward-error analysis under stated smoothness, step-size, bounded-trajectory and time assumptions to explain near-conservation. It is not a universal globally exactly preserved invariant of every finite leapfrog map. "Gradient-Based Sampling".

**Split-$\hat{R}$.** A variant of $\hat{R}$ that splits each chain in half to detect non-stationarity. "Diagnostics Are Necessary, Never Sufficient".

**Tail ESS.** Effective sample size for estimating tail quantities such as extreme quantiles. "Diagnostics Are Necessary, Never Sufficient".

**Widely applicable information criterion (WAIC).** An asymptotic approximation to LOO-CV for Bayesian model comparison. "Model Comparison and Decision Boundaries".

<a id="section-77-claim-finder-with-status-guards"></a>
## Claim finder with status guards {#section-79-claim-finder-with-status-guards}

<a id="section-79-theorems"></a>
### Theorems {#section-81-theorems}

**Detailed balance implies invariance ("Metropolis--Hastings from an Invariant Kernel").** If a Markov kernel satisfies detailed balance with respect to $\pi$, then $\pi$ is a stationary distribution of the chain.

**Monte Carlo central limit theorem ("Monte Carlo Estimates and Their Error").** Under a named Markov-chain CLT's hypotheses, $\sqrt S(\hat h_S-\mathbb{E}_\pi h)\Rightarrow\mathcal N(0,\sigma_h^2)$. When $0<\sigma_h^2<\infty$ and $0<\operatorname{Var}_\pi(h)<\infty$, theoretical $S_{\mathrm{eff},h}=S\operatorname{Var}_\pi(h)/\sigma_h^2$ gives the equivalent ESS rescaling. Estimated ESS needs a reliable long-run variance estimate; bulk ESS is not automatically this quantity.

**Leapfrog volume preservation ("Gradient-Based Sampling").** Each leapfrog step is a shear transformation with Jacobian determinant one, so volume is preserved exactly.

<a id="section-87-derivations"></a>
### Derivations {#section-89-derivations}

**Beta-Binomial conjugacy ("Conjugacy as an Exact Computational Benchmark").** With $p \sim \operatorname{Beta}(a, b)$ and $s$ successes in $n$ trials, $p \mid y \sim \operatorname{Beta}(a+s, b+n-s)$.

**Normal-Normal conjugacy ("Conjugacy as an Exact Computational Benchmark").** With known variance $\sigma^{2}$ and $\mu \sim \mathcal{N}(\mu_{0}, \tau_{0}^{2})$, the posterior precision is $1/\tau_{0}^{2} + n/\sigma^{2}$ and the posterior mean is precision-weighted.

**Gaussian shrinkage ("Hierarchical Models and Partial Pooling").** With $x_{j} \mid \theta_{j} \sim \mathcal{N}(\theta_{j}, s_{j}^{2})$ and $\theta_{j} \sim \mathcal{N}(\mu, \tau^{2})$, the posterior mean is $w_{j} x_{j} + (1-w_{j})\mu$ with $w_{j} = \tau^{2}/(\tau^{2} + s_{j}^{2})$.

<a id="section-95-numerical-approximations"></a>
### Numerical approximations {#section-97-numerical-approximations}

**Beta-Binomial MCMC validation ("Conjugacy as an Exact Computational Benchmark").** A proper $\operatorname{Beta}(9,18)$ target supplies exact benchmark moments. Finite validation must declare the implementation, retained record and reliable estimand-specific MCSE; agreement in one run is evidence for that target and procedure, not a guaranteed fixed error band or a completed new reproducible case. Historical internal receipts do not establish a current public execution.

**HMC on standard normal ("Gradient-Based Sampling").** One leapfrog step with $M=1$ and step size $\epsilon$ produces an energy error of $O(\epsilon^{3})$.
