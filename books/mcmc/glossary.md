# Glossary and notation

This glossary follows the book's conventions. A term can have a narrower technical definition under additional assumptions; those assumptions are stated in the relevant chapter.

## Probability and Bayesian targets

| Term | Definition | See |
|---|---|---|
| Almost sure (a.s.) | An event holds with probability one; exceptions may still form a nonempty probability-zero set. | [02 · Probability](02-probability.md) |
| Conditional expectation | The integrable random variable summarizing expected value given specified information, defined up to almost-sure equality. | [02 · Probability](02-probability.md) |
| Density | A Radon–Nikodym derivative of a probability measure relative to a chosen reference measure; its numerical form depends on that reference. | [02 · Probability](02-probability.md) |
| Estimand | The precise quantity a computation is meant to estimate, such as a posterior mean, tail probability, predictive score, or decision risk. | [01 · Why MCMC](01-probability-computation.md) |
| Evidence (marginal likelihood) | The data density or mass under a model, obtained by integrating the likelihood over a proper prior; it is a normalizing constant and depends on the model and prior. | [26 · Normalizing constants](26-normalizers.md) |
| Identifiability | A property that distinct parameter values imply distinct data distributions, or that a stated function of parameters is determined by that distribution. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Likelihood | The data density or mass, viewed as a function of model parameters with the observed data held fixed. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Normalizing constant | The integral or sum that turns a nonnegative target density into a probability density; it may be unknown even when the target is evaluable up to a constant. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Posterior distribution | The conditional distribution of unknown quantities given observed data, proportional to likelihood times prior when Bayes' formula applies. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Posterior predictive distribution | The distribution of future or unobserved quantities after averaging their sampling distribution over posterior uncertainty. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Prior predictive distribution | The marginal distribution of possible data before observing it, obtained by integrating the sampling model over the prior distribution of parameters. | [17 · Workflow](17-workflow.md) |
| Propriety | A target is proper when its total mass is finite and nonzero, so it can be normalized to a probability distribution. | [03 · Bayesian targets](03-bayesian-targets.md) |
| Reference measure | The measure relative to which a density is defined, for example counting measure for a discrete variable or Lebesgue measure for a continuous one. | [02 · Probability](02-probability.md) |
| Typical set | A region that contains much of a high-dimensional distribution's probability mass, although its pointwise density need not be near the density mode. | [02 · Probability](02-probability.md) |
| Weak identifiability | A setting where parameters are technically distinguishable but the likelihood changes little in some directions, leaving posterior uncertainty broad or correlated. | [16 · Geometry](16-geometry.md) |

## Monte Carlo estimation and error

| Term | Definition | See |
|---|---|---|
| Antithetic variates | A variance-reduction design that pairs dependent draws so their contributions tend to be negatively correlated while preserving the required marginal law. | [06 · Variance reduction](06-variance-reduction.md) |
| Asymptotic variance | The long-run variance in a central limit theorem for a dependent Monte Carlo average; it includes serial covariance, not just one-draw variance. | [13 · MC error](13-mc-error.md) |
| Batch means | An estimator of long-run variance formed by dividing a dependent series into batches and measuring variability among batch averages. | [13 · MC error](13-mc-error.md) |
| Central limit theorem (CLT) | A result giving a suitably scaled estimator's limiting distribution, often normal; unlike a law of large numbers, it requires additional conditions. | [05 · Monte Carlo](05-monte-carlo.md) |
| Control variate | A correlated quantity with known expectation, combined with the quantity of interest using a coefficient (fixed or estimated) to reduce estimator variance under appropriate conditions. | [06 · Variance reduction](06-variance-reduction.md) |
| Effective sample size (ESS) | A variance-based comparison of a correlated estimator with an iid reference; it depends on the estimand and the variance estimator used. | [13 · MC error](13-mc-error.md) |
| Ergodic average | The time average of a function along a Markov chain, commonly used to estimate its expectation under an invariant distribution. | [08 · Convergence](08-convergence.md) |
| Importance sampling | Estimation under a target distribution by drawing from a proposal and weighting each contribution by a target-to-proposal density ratio. | [05 · Monte Carlo](05-monte-carlo.md) |
| Integrated autocorrelation time (IACT) | The sum of lag correlations, with the usual convention including lag zero and both positive and negative lags through twice the one-sided sum; when defined, it relates asymptotic variance to marginal variance. | [13 · MC error](13-mc-error.md) |
| Law of large numbers (LLN) | A theorem under specified conditions that an average converges to an expectation; it does not alone provide a rate or standard error. | [05 · Monte Carlo](05-monte-carlo.md) |
| Long-run covariance matrix | The covariance matrix $\Sigma$ in a vector Markov chain CLT for $\sqrt n(\bar H_n-E_\pi H)$. It includes lagged cross-covariances and generally differs from the one-draw target covariance $\Lambda$. | [13 · MC error](13-mc-error.md) |
| Monte Carlo standard error (MCSE) | The standard deviation of a Monte Carlo estimate due to finite simulation, usually estimated from the simulation output for a specified model, estimand, and sampling procedure. | [13 · MC error](13-mc-error.md) |
| Multivariate effective sample size (mESS) | For a $p$-component estimand with positive definite target covariance $\Lambda$ and long-run covariance $\Sigma$, $n(\det\Lambda/\det\Sigma)^{1/p}$. It matches the determinant of the mean's asymptotic covariance to that of independent sampling, and can conceal a poorly estimated direction. | [13 · MC error](13-mc-error.md) |
| Rao–Blackwellization | Replacing a square-integrable random contribution by its conditional expectation, which cannot increase its variance. Applied separately to dependent draws, this does not by itself guarantee a smaller variance for their average. | [06 · Variance reduction](06-variance-reduction.md) |
| Self-normalized importance sampling | A ratio estimator that normalizes sampled importance weights; it is generally biased at finite sample size but consistent under suitable conditions. | [05 · Monte Carlo](05-monte-carlo.md) |
| Spectral density at zero | The frequency-zero spectrum of a stationary series, proportional to the long-run variance of its sample mean under common conventions. | [13 · MC error](13-mc-error.md) |
| Standard error | An estimator's standard deviation under a stated sampling law; an estimated standard error approximates this quantity. | [05 · Monte Carlo](05-monte-carlo.md) |
| Stratified sampling | Dividing a sampling domain into strata and sampling within each, then combining estimates with appropriate stratum weights. | [06 · Variance reduction](06-variance-reduction.md) |
| Tail ESS | An effective sample size computed for tail indicators or quantile-related quantities, designed to assess precision in distribution tails. | [14 · Diagnostics](14-diagnostics.md) |

## Markov chains and exact kernels

| Term | Definition | See |
|---|---|---|
| Aperiodicity | A chain property excluding a nontrivial cyclic decomposition. For an irreducible finite or countable chain, the possible return times to a state have greatest common divisor one. | [07 · Finite chains](07-finite-chains.md) |
| Detailed balance | Pairwise flow equality, $\pi(dx)P(x,dy)=\pi(dy)P(y,dx)$, which implies invariance but is not required for it. | [07 · Finite chains](07-finite-chains.md) |
| Ergodicity | A family of long-run properties, usually involving convergence or time averages; its precise meaning depends on the theorem and state-space assumptions. | [08 · Convergence](08-convergence.md) |
| Harris recurrence | For a $\psi$-irreducible chain, every measurable set with positive $\psi$ measure is hit with probability one from every starting state. This also gives repeated visits; positive Harris recurrence additionally requires an invariant probability distribution. | [08 · Convergence](08-convergence.md) |
| Invariant distribution | A probability distribution unchanged by one transition of a Markov kernel. Invariance alone does not imply convergence to that distribution. | [07 · Finite chains](07-finite-chains.md) |
| Irreducibility | A condition that the chain can reach all relevant parts of its state space; definitions depend on whether the state space is finite or general. | [07 · Finite chains](07-finite-chains.md) |
| Jump chain | The sequence of states observed only when a Markov chain changes state, with holding times removed. Its stationary law is generally reweighted by move probability. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| Markov chain | A stochastic process whose conditional distribution of the next state depends on the past only through the current state. | [07 · Finite chains](07-finite-chains.md) |
| Markov kernel | A rule assigning a probability distribution over next states to each current state, with the measurability conditions needed for integration. | [07 · Finite chains](07-finite-chains.md) |
| Minorization | A lower bound on a transition kernel by a positive multiple of a fixed probability measure on a specified region; often paired with drift for convergence proofs. | [08 · Convergence](08-convergence.md) |
| Mixing time | A number of transitions required to bring a chain's distribution within a chosen distance of stationarity, typically in a worst-case starting state. | [07 · Finite chains](07-finite-chains.md) |
| Peskun ordering | An ordering of reversible kernels with the same invariant law based on off-diagonal transition probabilities; under its assumptions it compares asymptotic variances. | [12 · Kernel design](12-kernel-design.md) |
| Regeneration | A restart at a random time with a fixed law independent of the preceding path, obtained for example from one-step split minorization. Ordinary visits to a region do not by themselves establish regeneration. | [08 · Convergence](08-convergence.md) |
| Regenerative tour | The states from one regeneration up to, but excluding, the next. Under the chapter's one-step construction, complete tours after the initial delayed segment are iid; the ratio of total reward to total length estimates the stationary mean, while equally weighting tour averages generally does not. | [08 · Convergence](08-convergence.md) |
| Reversibility | A property that the stationary joint law of consecutive states is unchanged when their order is reversed; equivalent to detailed balance in the usual setting. | [07 · Finite chains](07-finite-chains.md) |
| Spectral gap | For a finite irreducible reversible chain, one minus the largest nontrivial eigenvalue; the absolute gap instead uses the largest nontrivial eigenvalue magnitude. General-state definitions use the spectrum of the transition operator. | [12 · Kernel design](12-kernel-design.md) |
| Total variation distance | The maximal difference in probability assigned by two distributions to the same event; it measures discrepancy between probability laws. | [08 · Convergence](08-convergence.md) |

## Samplers, adaptation, and geometry

| Term | Definition | See |
|---|---|---|
| Acceptance probability | The probability of accepting a proposed state in a Metropolis-type transition, chosen to make the desired target invariant. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| Adaptation | Changing a sampler's transition mechanism using information gathered during simulation; validity requires conditions beyond validity of each fixed kernel. | [15 · Adaptation](15-adaptation.md) |
| Auxiliary variable | An added random quantity used to construct a transition or represent a model; the joint target must be designed so the intended marginal is preserved. | [11 · Slice methods](11-slice.md) |
| Blocking | Updating a group of variables jointly rather than one at a time, changing dependence and computational cost of a Gibbs or related sampler. | [10 · Gibbs](10-gibbs.md) |
| Drift condition | A bound showing that a function of the state tends to decrease outside a designated region; used with minorization to establish convergence rates. | [08 · Convergence](08-convergence.md) |
| Hamiltonian Monte Carlo (HMC) | A Metropolis-corrected method that augments position with momentum and uses numerical Hamiltonian dynamics to propose distant states. | [20 · HMC](20-hmc.md) |
| Involution | A transformation $F$ satisfying $F(F(z))=z$. On an augmented space, an acceptance rule using its density ratio and absolute Jacobian determinant can preserve the target; the involution need not preserve volume or ensure exploration. | [30 · Reversible jump](30-reversible-jump.md) |
| Leapfrog integrator | A reversible, volume-preserving numerical method for approximating Hamiltonian trajectories, with discretization error corrected by a Metropolis step. | [20 · HMC](20-hmc.md) |
| Log density | The logarithm of a density or unnormalized target, often computed to avoid underflow; its coordinate and reference measure must remain clear. | [04 · Numerics](04-numerics.md) |
| Metropolis–Hastings (MH) | A proposal-and-acceptance construction that preserves a target by correcting for both target-density and proposal asymmetry. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| No-U-Turn Sampler (NUTS) | A dynamic HMC method that builds a trajectory until a turn criterion is met and selects a state using a valid trajectory-selection rule. | [21 · NUTS](21-nuts.md) |
| Noncentering | A reparameterization expressing a latent quantity as a transformation of an independent standardized variable, often improving hierarchical posterior geometry. | [16 · Geometry](16-geometry.md) |
| Preconditioning | Rescaling or changing coordinates to better match the geometry of a target and improve numerical movement. | [19 · Langevin](19-langevin.md) |
| Random-walk proposal | A proposal formed by perturbing the current state with a random increment, typically symmetric before any boundary handling. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| Reparameterization | A change of variables used to express the same probability model in coordinates with more favorable interpretation or computational geometry. | [16 · Geometry](16-geometry.md) |
| Robbins–Monro update | A stochastic approximation recursion using noisy observations and a step-size sequence to tune a parameter toward a root or target. | [15 · Adaptation](15-adaptation.md) |
| Slice sampling | An auxiliary-variable method that samples under a horizontal slice of an unnormalized density, then marginalizes the auxiliary height. | [11 · Slice methods](11-slice.md) |
| Warmup | An initial phase used to tune or adapt a sampler; draws are typically excluded from stationary inference, and adaptation is usually frozen afterward. | [15 · Adaptation](15-adaptation.md) |
| Whitened coordinates | Coordinates transformed so a reference covariance is approximately identity, reducing linear correlation or scale imbalance. | [16 · Geometry](16-geometry.md) |

## Diagnostics and computational workflow

| Term | Definition | See |
|---|---|---|
| Completion-time selection bias | Distortion caused by selecting outputs according to their runtimes when runtime and output are dependent. Taking the first completed tasks can favor short tasks; observing an ongoing chain at a fixed clock time can instead favor long-held states. | [35 · Parallel computation](35-parallel.md), [32 · Perfect simulation](32-perfect-simulation.md) |
| Divergence | In HMC, an integration event signaling a large Hamiltonian error relative to the sampler's threshold; it often points to unresolved geometry or numerical instability. | [22 · HMC diagnostics](22-hmc-diagnostics.md) |
| Energy Bayesian fraction of missing information (E-BFMI) | A diagnostic comparing variation in energy across transitions with variation in the marginal energy distribution; low values can indicate poor exploration of energy levels. | [22 · HMC diagnostics](22-hmc-diagnostics.md) |
| Posterior score sensitivity | The local derivative of a posterior expectation along a specified model perturbation. For an estimand independent of the perturbation, it equals its posterior covariance with the derivative of the unnormalized log target, under common-support and differentiation assumptions. | [17 · Workflow](17-workflow.md) |
| Power-scaling | Perturbing a selected prior or likelihood factor by raising it to a power near one. Its log factor is the perturbation score; the component, coordinates, propriety, and estimand must be specified before interpreting sensitivity. | [17 · Workflow](17-workflow.md) |
| Rank-normalized split $\hat R$ | A multiple-chain diagnostic based on pooled rank transforms and chain splitting. The reported modern diagnostic takes the maximum of this statistic and its folded version to detect location and scale differences; it cannot certify convergence. | [14 · Diagnostics](14-diagnostics.md) |
| Simulation-based calibration (SBC) | A repeated simulation check: draw parameters from the prior, simulate data, fit the model, and assess whether posterior ranks behave as calibrated under the design assumptions. | [17 · Workflow](17-workflow.md) |
| Trace plot | A plot of sampled values against iteration, useful for seeing time structure, sticking, drift, and chain-to-chain differences but not a proof of convergence. | [14 · Diagnostics](14-diagnostics.md) |
| Warmup window | A scheduled interval within warmup used to estimate quantities such as covariance for later sampler settings. | [15 · Adaptation](15-adaptation.md) |

## Specialized methods and application terms

| Term | Definition | See |
|---|---|---|
| Annealed importance sampling (AIS) | A method that starts from an exact reference draw and accumulates importance weights along a fixed sequence of intermediate targets with invariant transitions. Under its support and integrability conditions, mean weights estimate a normalizer ratio without bias; unweighted endpoints need not be target draws. | [26 · Normalizing constants](26-normalizers.md) |
| Annealed sequential Monte Carlo | A weighted population method on a path such as $\pi_\beta(\theta)\propto p(\theta)L(\theta)^\beta$, combining incremental weights, resampling, and invariant mutation. A finite population remains an approximation even when the evidence estimator is unbiased under the stated construction. | [28 · Particle MCMC](28-particle-mcmc.md) |
| Approximate Bayesian computation (ABC) | Likelihood-free inference that accepts or weights simulated data according to discrepancy from observations, yielding an approximation whose meaning depends on summaries and tolerance. | [46 · Likelihood-free](46-likelihood-free.md) |
| Coupling | A joint construction of two or more random variables or chains with specified marginals, used to study meeting, convergence, or unbiased estimation. | [31 · Coupling](31-coupling.md) |
| Delayed acceptance | A multi-stage MH procedure that screens proposals with a cheaper approximation, then applies a correction so the final transition targets the intended distribution. | [27 · Pseudo-marginal](27-pseudo-marginal.md) |
| Doubly intractable distribution | A target whose density includes an unknown parameter-dependent normalizing constant, making ordinary MH ratios unavailable without further construction. | [45 · Probabilistic ML](45-machine-learning.md) |
| Extended target | A joint distribution over original and auxiliary variables whose marginal or conditional structure enables an algorithm while retaining the desired target. | [27 · Pseudo-marginal](27-pseudo-marginal.md) |
| Firefly auxiliary variable | A binary indicator that selects a likelihood lower bound $B_i$ or its nonnegative residual $L_i-B_i$ in an augmented target. Summing over the indicators recovers the full likelihood; valid state updates and useful bounds are needed for an effective sampler. | [34 · Scalable MCMC](34-scalable.md) |
| Label switching | Symmetry in a mixture model under permutations of component labels, which can make labelled parameter summaries misleading while predictions remain invariant. | [38 · Mixtures](38-mixtures.md) |
| Multilevel telescoping estimator | An estimator of a finest-level expectation formed from a coarse expectation and adjacent-level differences. Couplings must retain the correct posterior marginals; reduced correction variance can save work, but discretization bias at the finest level remains. | [24 · Function space](24-function-space.md) |
| Particle filter | A sequential Monte Carlo method that approximates evolving latent-state distributions using weighted particles and resampling. | [28 · Particle MCMC](28-particle-mcmc.md) |
| Particle marginal Metropolis–Hastings (PMMH) | A pseudo-marginal MH method using a particle-filter likelihood estimate within an extended-state construction. | [28 · Particle MCMC](28-particle-mcmc.md) |
| Pseudo-marginal MCMC | An MH method using a nonnegative unbiased estimate of an intractable likelihood, with the estimator's random state retained as part of the chain state. | [27 · Pseudo-marginal](27-pseudo-marginal.md) |
| Reversible-jump MCMC | An MH framework for moving among parameter spaces of different dimensions using dimension matching and the associated Jacobian correction. | [30 · Reversible jump](30-reversible-jump.md) |
| Sequential Monte Carlo (SMC) | A family of algorithms that propagates weighted particle approximations through a sequence of distributions or time points, often with resampling. | [28 · Particle MCMC](28-particle-mcmc.md) |
| Stochastic-gradient Langevin dynamics (SGLD) | A Langevin-style update using noisy minibatch gradients and injected noise; finite step sizes and schedules determine its approximation behavior. | [34 · Scalable MCMC](34-scalable.md) |
| Thermodynamic integration | An identity expressing a log normalizing-constant ratio as an integral of expectations along a regular path of distributions; its numerical use adds Monte Carlo and quadrature error. | [26 · Normalizing constants](26-normalizers.md) |
| Thermodynamic length | The integral of the square root of Fisher information along a distribution path. For $\pi_\beta\propto e^{-\beta V}$ it is $\int\sqrt{\operatorname{Var}_\beta(V)}\,d\beta$, under regularity conditions; equal length spacing motivates a temperature ladder without guaranteeing optimal mixing. | [25 · Tempering](25-tempering.md) |
| Unbiased MCMC estimator | An estimator whose expectation equals the target quantity, sometimes achieved by coupling and correction even though its computational run is finite and random. | [31 · Coupling](31-coupling.md) |

## Notation and conventions

The book uses $x$ for a generic state and $\theta$ for model parameters. A density is always understood relative to its stated reference measure. Chapter-specific notation takes precedence where a worked example needs different symbols.

| Notation | Convention | Main chapters |
|---|---|---|
| $\pi$ | Normalized target probability distribution; $\tilde\pi$ denotes an unnormalized density or mass. | [03 · Targets](03-bayesian-targets.md), [09 · MH](09-metropolis-hastings.md) |
| $Z=\int \tilde\pi(x)\,\mu(dx)$ | Normalizing constant relative to reference measure $\mu$, when finite and positive. | [03 · Targets](03-bayesian-targets.md), [26 · Normalizers](26-normalizers.md) |
| $\mu$ | Reference measure unless the local context explicitly defines a probability distribution with this symbol. | [02 · Probability](02-probability.md) |
| $P(x, A)$ | Probability that a chain at state $x$ moves into measurable set $A$ in one step. | [07 · Finite chains](07-finite-chains.md), [08 · Convergence](08-convergence.md) |
| $P^t(x,\cdot)$ | Distribution after $t$ transitions from initial state $x$. | [07 · Finite chains](07-finite-chains.md) |
| $X_t$ | State of a Markov chain at iteration $t$; multiple chains receive a chain index when needed. | [07 · Finite chains](07-finite-chains.md) |
| $f$ | Scalar or vector function whose target expectation is the estimand. | [05 · Monte Carlo](05-monte-carlo.md), [13 · MC error](13-mc-error.md) |
| $\pi(f)=\mathbb E_\pi[f(X)]$ | Target expectation of $f$; for a density, the corresponding integral is taken relative to its reference measure. | [05 · Monte Carlo](05-monte-carlo.md) |
| $q(y\mid x)$ | Proposal density or mass for proposing $y$ from current state $x$. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| $\alpha(x,y)$ | MH acceptance probability, between zero and one. | [09 · Metropolis–Hastings](09-metropolis-hastings.md) |
| $\widehat I_N$ | Monte Carlo estimate of quantity $I$ using $N$ draws or transitions; the precise estimator is stated locally. | [05 · Monte Carlo](05-monte-carlo.md) |
| $\widehat{\mathrm{MCSE}}$ | Estimated Monte Carlo standard error, with the method and estimand specified alongside it. | [13 · MC error](13-mc-error.md) |
| $\rho_k$ | Lag-$k$ autocorrelation of a stationary scalar sequence, with $\rho_0=1$. | [13 · MC error](13-mc-error.md) |
| $\tau_{\mathrm{int}}=1+2\sum_{k\ge1}\rho_k$ | Integrated autocorrelation time when the sum exists under the stated dependence conditions. | [13 · MC error](13-mc-error.md) |
| $\mathrm{ESS}\approx N/\tau_{\mathrm{int}}$ | Scalar, estimand-specific approximation; alternative ESS estimators and conventions are identified when used. | [13 · MC error](13-mc-error.md), [14 · Diagnostics](14-diagnostics.md) |
| $\hat R$ | Estimated potential scale reduction diagnostic; this book specifies rank normalization, chain splitting, and folding where relevant. | [14 · Diagnostics](14-diagnostics.md) |
| $\beta$ | Inverse temperature in statistical physics or a tempering exponent in a stated path; meaning is context-specific. | [25 · Tempering](25-tempering.md), [41 · Physics](41-physics.md) |
| $\epsilon$ | A numerical step size or probability tolerance, depending on context; the chapter defines which. | [19 · Langevin](19-langevin.md), [20 · HMC](20-hmc.md) |
| $H(q,p)$ | Hamiltonian energy for position $q$ and auxiliary momentum $p$ in HMC. | [20 · HMC](20-hmc.md) |
| $L$ | Number of leapfrog steps in a fixed-trajectory HMC transition unless locally defined otherwise. | [20 · HMC](20-hmc.md) |
| $K$ | A Markov transition kernel; in HMC chapters it may instead denote kinetic energy, so local definitions control. | [07 · Finite chains](07-finite-chains.md), [20 · HMC](20-hmc.md) |
| $w_i$ | Importance weight for draw $i$, usually proportional to target density divided by proposal density on common support. | [05 · Monte Carlo](05-monte-carlo.md) |
| $\hat Z$ | Estimate of a normalizing constant or ratio, as stated; it does not imply unbiasedness unless specified. | [26 · Normalizers](26-normalizers.md) |
| $\Delta H$ | Proposed minus current Hamiltonian energy in HMC acceptance calculations. | [20 · HMC](20-hmc.md) |
| $\ell(\theta)$ | Log likelihood. Parameter-independent constants may cancel in posterior ratios, but must be retained when computing marginal likelihoods or other absolute normalizers. | [03 · Targets](03-bayesian-targets.md), [04 · Numerics](04-numerics.md) |
