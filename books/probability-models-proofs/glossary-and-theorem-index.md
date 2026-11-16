
# Glossary, Hypothesis Index, and Theorem Finder

This finder is a retrieval tool, not a replacement for a theorem statement or proof. Each entry records the meaning used in this volume and points to a stable chapter ID. The theorem index deliberately repeats hypotheses that are easy to forget. Before applying any result, return to its chapter and check the probability space, integrability assumptions, independence or dependence structure, parameter ranges, and mode of convergence.

## Glossary

### A

**Almost sure convergence.** Random variables $X_{n}$ converge almost surely to $X$ when $\mathbb{P}(\{\omega: X_{n}(\omega) \to X(\omega)\})=1$. This is a pathwise statement outside one null event; it is stronger than convergence in probability but does not by itself imply convergence in mean. See `modes-of-convergence-and-uniform-integrability`.

**Atom.** A measurable event $A$ with $\mathbb{P}(A)>0$ such that every measurable $B\subseteq A$ has $\mathbb{P}(B)=0$ or $\mathbb{P}(B)=\mathbb{P}(A)$. In a discrete law, singleton outcomes with positive mass are atoms; a general probability space need not be discrete or atomless. See `event-models-and-axioms` and `discrete-laws-and-generating-functions`.

### B

**Bayes' rule.** The identity that reverses conditioning by combining a likelihood term with a prior or base-rate term and normalising over all alternatives. It is an algebraic consequence of conditional probability; its output is only as meaningful as the events and model used to define it. See `counting-conditioning-and-bayes`.

**Bernoulli, binomial, and geometric laws.** A Bernoulli variable records one binary trial, a binomial variable counts successes in a fixed number of independent equal-probability trials, and a geometric variable records a waiting time under a stated support convention. See `discrete-laws-and-generating-functions`.

**Borel sigma-algebra.** The smallest sigma-algebra containing the open subsets of a topological space. A real random variable is ordinarily required to be measurable from the event sigma-algebra to the Borel sigma-algebra on the real line. See `event-models-and-axioms` and `random-variables-laws-and-transforms`.

### C


**Chi-square orthogonal decomposition.** For $Z\sim N_d(0,I)$ and an orthogonal projection $P$ of rank $r$, the squared lengths $\|PZ\|^2$ and $\|(I-P)Z\|^2$ are independent chi-square variables with $r$ and $d-r$ degrees of freedom. A zero-rank term is identically zero. This is proved by an orthonormal change of basis in [Gaussian Vectors](gaussian-vectors-and-multivariate-normal.md).

**Characteristic function.** The transform $\varphi_{X}(t)=\mathbb{E}[\exp(itX)]$. It always exists for real random variables, determines the law, converts sums of independent variables into products, and supports convergence arguments through a continuity theorem with precise hypotheses. See `generating-transforms-and-characteristic-functions`.

**Conditional expectation.** For integrable $X$ and a sub-sigma-algebra $G$, $\mathbb{E}[X \mid G]$ is a $G$-measurable integrable random variable whose integral agrees with that of $X$ on every event in $G$. It is defined only up to almost-sure equality. See `conditional-expectation-and-projection`.

**Conditional law.** A probability kernel describing the distribution of one random quantity given another or given a sigma-algebra. Elementary density formulas are versions of this object and require care when the conditioning event has probability zero. See `joint-laws-conditioning-and-dependence`.

**Convergence in distribution.** $X_{n}$ converges in distribution to $X$ when distribution functions converge at every continuity point of the limiting distribution function, equivalently under bounded-continuous test functions in the setting developed here. It speaks about laws, not a shared sample-space path. See `modes-of-convergence-and-uniform-integrability`.

**Convergence in probability.** $X_{n} \to X$ in probability when $\mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon)\to 0$ for every $\varepsilon>0$. Almost sure convergence implies it; it implies convergence in distribution. See `modes-of-convergence-and-uniform-integrability`.

**Coupling.** A joint construction whose marginals are prescribed laws. A useful coupling places two variables on one probability space so that their disagreement, distance, or coalescence time controls a metric between their laws. See `coupling-and-total-variation`.

**Covariance.** For square-integrable variables, $\operatorname{Cov}(X,Y)=\mathbb{E}[(X-\mathbb{E}X)(Y-\mathbb{E}Y)]$. Zero covariance is weaker than independence except under additional structure. See `covariance-regression-and-inequalities`.

**Cumulative distribution function.** $F_{X}(x)=\mathbb{P}(X\le x)$. It is nondecreasing, right-continuous, tends to zero at negative infinity and one at positive infinity, and determines the law. See `random-variables-laws-and-transforms`.

### D

**Density.** A nonnegative measurable function whose integral over a set gives its probability. A density is not a point probability; its values may exceed one, and different versions may differ on null sets. See `continuous-laws-and-change-of-variables`.

**Distribution or law.** The pushforward probability measure induced by a random variable. Distinct random variables, possibly on distinct sample spaces, can have the same law. See `random-variables-laws-and-transforms`.

**Dominated convergence.** A passage-to-the-limit principle: almost-sure convergence together with domination by one integrable random variable permits convergence of expectations of absolute differences, and hence expectations. The single integrable dominator is essential. See `expectation-integration-and-moments` and `modes-of-convergence-and-uniform-integrability`.

### E

**Ergodic finite Markov chain.** Terminology varies; in this volume, convergence to a unique stationary law is derived from explicit irreducibility and aperiodicity assumptions on a finite state space. The word “ergodic” never substitutes for those checked conditions. See `finite-markov-chains`.

**Event.** A measurable subset of the sample space. Probability is assigned to events, not automatically to every subset. See `event-models-and-axioms`.

**Expectation.** The Lebesgue integral of a random variable with respect to probability. For signed variables, finite expectation requires the relevant integrability condition; the expression $\infty-\infty$ is undefined. See `expectation-integration-and-moments`.

**Exponential moment.** An expectation such as $\mathbb{E} \exp(\lambda X)$. Bounds on exponential moments yield tail estimates by Markov's inequality and optimisation over $\lambda$. Existence for every $\lambda$ is not automatic. See `exponential-concentration`.

### F

**Filtration.** An increasing family of sigma-algebras representing information available through time. Adaptedness means that the time-$n$ variable is measurable with respect to the time-$n$ information. See `martingales-stopping-and-concentration`.

**First-step analysis.** A recursive calculation for a Markov chain obtained by conditioning on the first transition. Boundary conditions and finiteness or uniqueness of the resulting solution must be justified. See `finite-markov-chains`.

### G


**Gaussian vector.** A vector expressible as $\mu+AZ$ for independent standard-normal coordinates of $Z$. Its covariance $AA^\mathsf T$ may be singular, so a full-dimensional density need not exist. For jointly Gaussian blocks, zero cross-covariance implies independence; normal marginals alone do not suffice. See [Gaussian Vectors](gaussian-vectors-and-multivariate-normal.md).

**Gaussian conditioning.** For a jointly Gaussian pair $(X,Y)$ with positive-definite $\Sigma_{YY}$, the conditional mean is $\mu_X+\Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_Y)$ and the residual covariance is $\Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$. The residual is independent of $Y$, and the formula specifies a version without dividing by the zero probability of a point event. See [Gaussian Vectors](gaussian-vectors-and-multivariate-normal.md).

**Generating function.** For a nonnegative integer-valued variable, the probability generating function $G_{X}(s)=\mathbb{E}[s^{X}]$ packages its mass function. Within its domain, derivatives recover factorial moments and products encode independent sums. See `discrete-laws-and-generating-functions`.

### I

**Independence.** Events are mutually independent when every finite subcollection has probability equal to the product of its probabilities. Random variables are independent when their generated sigma-algebras are independent. Pairwise independence need not imply mutual independence. See `independence-and-product-models`.

**Indicator.** The variable $\mathbf{1}_{A}$ equal to one on an event and zero elsewhere. Its expectation is $\mathbb{P}(A)$, allowing counts to be written as sums of indicators without requiring independence. See `expectation-integration-and-moments` and `probabilistic-method-and-random-structures`.

### L

**Law of large numbers.** A family of results under which an empirical average approaches a target mean, in probability or almost surely depending on the theorem. A theorem's moment and dependence assumptions are part of its name in any actual application. See `laws-of-large-numbers`.

**Likelihood ratio.** A ratio of densities or masses under two laws, interpreted relative to a common dominating measure. In inference it compares how parameter values explain observed data; in change-of-measure arguments it reweights expectations. See `sampling-laws-and-inference-bridge`.

### M

**Markov chain.** A stochastic process whose conditional law of the next state given the past depends only on the current state, under the chosen time-homogeneous model. The transition matrix alone does not specify the initial law. See `finite-markov-chains`.

**Martingale.** An integrable adapted process $(M_{n})$ satisfying $\mathbb{E}[M_{n+1} \mid F_{n}]=M_{n}$. A submartingale replaces equality by $\ge$, and a supermartingale by $\le$. See `martingales-stopping-and-concentration`.

**Moment.** An expectation such as $\mathbb{E}[X^{k}]$ or $\mathbb{E}[\lvert X\rvert^{p}]$. Moments may be infinite; even all finite moments do not universally determine a distribution without further conditions. See `expectation-integration-and-moments`.

**Moment generating function.** $M_{X}(t)=\mathbb{E}[e^{tX}]$ where finite. It can determine a law if finite on an open interval around zero, but unlike the characteristic function it need not exist away from zero. See `generating-transforms-and-characteristic-functions`.

**Monte Carlo estimator.** A random approximation to an integral, expectation, probability, or optimisation target constructed through simulated samples. Unbiasedness, consistency, error bars, computational cost, and pseudo-random implementation are separate properties. See `monte-carlo-and-randomized-estimation`.

### O

**Optional stopping.** A collection of theorems permitting $\mathbb{E}[M_{\tau}]$ to be related to $\mathbb{E}[M_{0}]$ under specified boundedness, integrability, or uniform-integrability conditions. A stopping time alone is never enough. See `martingales-stopping-and-concentration`.

### P

**Probability kernel.** A map assigning a probability measure to each conditioning state, measurably in that state. Kernels formalise conditional distributions and Markov transitions. See `joint-laws-conditioning-and-dependence` and `finite-markov-chains`.

**Probability measure.** A countably additive measure of total mass one on a sigma-algebra. Finite additivity does not replace countable additivity. See `event-models-and-axioms`.

**Probability space.** A triple $(\Omega,F,P)$ consisting of a sample space, a sigma-algebra of events, and a probability measure. Changing $F$ changes what can be observed even if $\Omega$ is unchanged. See `event-models-and-axioms`.

**Probabilistic method.** An existence proof showing that an object with a desired property exists because a random object has that property with positive probability, or because a random defect count has expectation below one. It may be nonconstructive. See `probabilistic-method-and-random-structures`.

### Q

**Quantile.** A generalised inverse of a distribution function, with a convention needed at jumps. Quantile transforms construct laws from a uniform variable and support one-dimensional couplings. See `random-variables-laws-and-transforms` and `coupling-and-total-variation`.

### R

**Random variable.** A measurable function from a probability space to a measurable state space. Randomness belongs to the input outcome and law; the function itself is a mathematical map. See `random-variables-laws-and-transforms`.

**Regular conditional distribution.** A kernel version of conditioning on a random element. Its existence is guaranteed in the standard settings stated in the chapter, not on every conceivable measurable space. See `joint-laws-conditioning-and-dependence`.

### S

**Sampling distribution.** The law of a statistic under repeated data generation from a specified model. It depends on the population law, sample size, design, and statistic. See `sampling-laws-and-inference-bridge`.

**Sigma-algebra.** A family of subsets containing the sample space and closed under complements and countable unions. It models which questions have measurable answers. See `event-models-and-axioms`.

**Stationary distribution.** A probability row vector $\pi$ satisfying $\pi P=\pi$ for a transition matrix $P$. Existence, uniqueness, and convergence to stationarity are distinct questions. See `finite-markov-chains`.

**Stopping time.** A random time $\tau$ for which $\{\tau\le n\}$ is known at time $n$. Dependence on future information violates the definition. See `martingales-stopping-and-concentration`.

### T

**Tightness.** A family of laws is tight when, for every positive tolerance, one compact set contains all but that tolerance of mass for every law in the family. Tightness controls escape of probability mass and supports subsequential weak convergence. See `modes-of-convergence-and-uniform-integrability`.

**Total variation distance.** The supremum over measurable events of the absolute probability difference, under the normalisation used in the chapter. It equals the smallest possible disagreement probability over couplings in the settings proved there. See `coupling-and-total-variation`.

**Tower property.** If $H$ is contained in $G$, then $\mathbb{E}[\mathbb{E}[X \mid G] \mid H]=\mathbb{E}[X \mid H]$ for integrable $X$. Conditioning in the opposite order does not generally simplify the same way. See `conditional-expectation-and-projection`.

### U

**Uniform integrability.** A family $(X_{i})$ is uniformly integrable when $\sup_{i} \mathbb{E}[\lvert X_{i}\rvert \mathbf{1}_{\lvert X_{i}\rvert >K}] \to 0$ as $K \to \infty$. It prevents expectation mass from hiding in increasingly rare, increasingly large values. See `modes-of-convergence-and-uniform-integrability`.

### V

**Variance.** $\operatorname{Var}(X)=\mathbb{E}[(X-\mathbb{E}X)^{2}]$ when finite. It measures squared dispersion around the mean, is invariant under adding constants, and adds over independent finite-variance summands. See `covariance-regression-and-inequalities`.

**Version.** One representative of an almost-sure equivalence class, such as a conditional expectation or density. Pointwise claims about a version need not hold for every representative without choosing one carefully. See `conditional-expectation-and-projection`.

## Theorem finder by mechanism

### Axioms, counting, and conditioning

**Continuity of probability (`event-models-and-axioms`).** For increasing events $A_{n}$, $\mathbb{P}(\cup A_{n})=\lim \mathbb{P}(A_{n})$. For decreasing events, the analogous intersection identity holds because the probability measure is finite. Monotonicity of the event sequence is essential.

**Inclusion-exclusion and union bounds (`event-models-and-axioms`, `probabilistic-method-and-random-structures`).** Inclusion-exclusion is exact for a finite event family. The union bound needs no independence and gives $\mathbb{P}(\cup A_{i})\le \sum \mathbb{P}(A_{i})$, including countable families.

**Bayes and total probability (`counting-conditioning-and-bayes`).** A measurable partition with positive conditioning probabilities decomposes an event probability; Bayes reverses the condition. Zero-probability conditioning is not handled by the elementary ratio formula.

**Multiplication and occupancy principles (`counting-conditioning-and-bayes`).** Product counts require a sequence of genuinely specified choices. Permutations, combinations, multinomial allocations, and inclusion-exclusion answer different sampling models.

### Independence and laws

**Borel-Cantelli lemmas (`independence-and-product-models`).** If $\sum \mathbb{P}(A_{n})<\infty$, then only finitely many $A_{n}$ occur almost surely, with no independence assumption. The converse direction used here requires independence and divergence of the probability sum.

**Independent products of expectations (`independence-and-product-models`, `expectation-integration-and-moments`).** For independent integrable products under the conditions stated, expectation factorises. Uncorrelatedness alone does not supply this identity for arbitrary functions.

**Change of variables (`continuous-laws-and-change-of-variables`).** For a one-to-one differentiable transformation with suitable inverse regularity, the transformed density includes the absolute Jacobian determinant. Many-to-one maps require summing contributions from inverse branches.

**Tonelli and Fubini (`expectation-integration-and-moments`).** Tonelli permits nonnegative measurable integrands and may yield infinity. Fubini permits integrable signed integrands and gives finite iterated integrals almost everywhere. Do not exchange integrals merely by notation.

**Tail-sum and layer-cake formulas (`expectation-integration-and-moments`).** For a nonnegative random variable, expectation is recovered by integrating tail probabilities; for integer-valued variables it becomes a sum. Nonnegativity or separate integrability controls are required.

### Conditional expectation and covariance geometry

**Existence and uniqueness of conditional expectation (`conditional-expectation-and-projection`).** For integrable $X$ and sub-sigma-algebra $G$, a $G$-measurable integrable version exists and is unique almost surely. Equalities between versions are ordinarily almost-sure equalities.

**Conditional Jensen (`conditional-expectation-and-projection`).** For convex $\varphi$, $\varphi(\mathbb{E}[X \mid G])\le \mathbb{E}[\varphi(X) \mid G]$ under the integrability conditions needed to define both sides. Equality requires separate structural analysis.

**Projection theorem in $L^{2}$ (`conditional-expectation-and-projection`).** For square-integrable $X$, $\mathbb{E}[X \mid G]$ is the orthogonal projection onto the closed subspace of $G$-measurable square-integrable variables. This Hilbert-space interpretation requires second moments.

**Cauchy-Schwarz and covariance bound (`covariance-regression-and-inequalities`).** Square integrability gives $\lvert \operatorname{Cov}(X,Y)\rvert \le \operatorname{sd}(X)\operatorname{sd}(Y)$. Equality corresponds to an almost-sure affine relation after centering, subject to nonzero variances.

**Best linear predictor (`covariance-regression-and-inequalities`).** With finite second moments and nonzero predictor variance, least-squares coefficients are obtained by orthogonality. It is a statement about linear prediction, not automatically about conditional means or causation.

### Transforms and convergence

**Uniqueness of characteristic functions (`generating-transforms-and-characteristic-functions`).** Equal characteristic functions on the real line imply equal probability laws. The theorem concerns laws, not equality of coupled variables.

**Continuity theorem for characteristic functions (`generating-transforms-and-characteristic-functions`).** Pointwise transform convergence to a function continuous at zero and itself a characteristic function yields weak convergence. The converse follows from bounded-continuous convergence.

**Continuous mapping theorem (`modes-of-convergence-and-uniform-integrability`).** If $X_{n}$ converges in the relevant distributional mode and the map is continuous at limiting values almost surely, then mapped variables converge in distribution. Discontinuity sets must be checked.

**Slutsky's theorem (`modes-of-convergence-and-uniform-integrability`).** Combining distributional convergence with convergence in probability to a constant permits sums, products, and ratios when division remains away from zero.

**Vitali-type expectation convergence (`modes-of-convergence-and-uniform-integrability`).** Convergence in probability plus uniform integrability yields convergence in $L^{1}$ in the stated setting. Bounded expectations alone do not imply uniform integrability.

### Limit theorems

**Weak law via variance (`laws-of-large-numbers`).** For iid variables with finite variance, Chebyshev's inequality gives convergence in probability of sample means. More general weak laws require their own truncation or dependence arguments.

**Strong law (`laws-of-large-numbers`).** The iid strong law in the chapter assumes integrability and gives almost-sure convergence to the mean. Almost-sure convergence does not promise a uniform finite sample size across outcomes.

**Lindeberg-Levy central limit theorem (`central-limit-theorems`).** Iid variables with finite, positive variance have centred and scaled sums converging in distribution to a standard normal. The scaling is by standard deviation times the square root of sample size.

**Lindeberg-Feller triangular-array theorem (`central-limit-theorems`).** Independent centred array entries, normalised total variance, and a Lindeberg condition yield a Gaussian limit. No single summand may retain a macroscopic variance contribution.

**Berry-Esseen bound (`central-limit-theorems`).** Under iid centring, positive finite variance, and finite third absolute centred moment, the Kolmogorov distance to normal is bounded at order $n^{-1/2}$ with an absolute constant. This is a uniform distribution-function bound, not a density approximation.

### Concentration

**Markov and Chebyshev inequalities (`expectation-integration-and-moments`, `covariance-regression-and-inequalities`).** Markov requires a nonnegative variable. Chebyshev applies Markov to squared centred deviation and requires finite variance.

**Chernoff method (`exponential-concentration`).** Markov's inequality applied to an exponential transform gives an upper tail bound, then optimisation over an admissible positive parameter sharpens it. The moment generating function must be finite at the chosen parameter.

**Hoeffding inequality (`exponential-concentration`).** Independent bounded summands admit sub-Gaussian deviation bounds. Bounds depend on interval widths; centring and one-sided versus two-sided formulations change constants.

**Bernstein-type inequality (`exponential-concentration`).** Independent centred bounded summands admit a variance-sensitive bound with a quadratic-to-linear tail transition. The almost-sure bound and variance proxy must both be recorded.

**Bounded differences (`exponential-concentration`).** A function of independent inputs whose value changes by at most $c_{i}$ when coordinate $i$ is replaced concentrates around its mean. The coordinatewise sensitivity condition is global, not merely typical.

### Martingales and stopping

**Martingale convergence (`martingales-stopping-and-concentration`).** The chapter's discrete-time convergence results require the specified $L^{1}$, submartingale, or uniform-integrability controls. The martingale property alone does not force convergence.

**Optional stopping (`martingales-stopping-and-concentration`).** Valid sufficient conditions include bounded stopping times and the other explicitly proved integrability regimes. A fair process can be turned into a misleading expectation calculation by an unbounded, poorly controlled stopping rule.

**Azuma-Hoeffding (`martingales-stopping-and-concentration`).** A martingale with bounded increments has sub-Gaussian tail bounds in terms of the sum of squared increment bounds. Conditional variance refinements require a different theorem.

**Doob maximal inequalities (`martingales-stopping-and-concentration`).** Nonnegative submartingales and $L^{p}$ martingales have maximal controls under the chapter's parameter and integrability restrictions. These inequalities concern a running maximum, not just a terminal value.

### Coupling and finite chains

**Coupling inequality (`coupling-and-total-variation`).** For any coupling of laws $\mu$ and $\nu$, total variation is no larger than the probability that the coupled variables differ. An optimal coupling attains equality in the settings constructed in the chapter.

**Data processing for total variation (`coupling-and-total-variation`).** Applying a measurable map or Markov kernel cannot increase total variation. A lossy observation may strictly reduce distinguishability.

**Stationary distribution existence (`finite-markov-chains`).** Every finite transition matrix has at least one stationary distribution. Irreducibility supplies uniqueness and positive coordinates; it is not needed merely for existence.

**Finite irreducible recurrence (`finite-markov-chains`).** In a finite irreducible chain every state is positive recurrent, and the stationary mass is related to mean return time. Finiteness and irreducibility both matter.

**Convergence to stationarity (`finite-markov-chains`).** A finite irreducible aperiodic chain converges from every starting distribution to its unique stationary law. Periodicity can prevent pointwise-time convergence even when a unique stationary law exists.

**Coupling-time mixing bound (`finite-markov-chains`, `coupling-and-total-variation`).** If two chain copies couple and remain together, their total variation distance is bounded by the probability that coalescence has not occurred. The construction must preserve the correct marginal transition laws.

### Monte Carlo, random structures, and inference

**Monte Carlo standard error (`monte-carlo-and-randomized-estimation`).** For iid samples with finite variance, the sample mean has variance $\sigma^{2}/n$, and a central limit theorem supports approximate error bars. Heavy tails or dependence can invalidate naive standard errors.

**Importance sampling identity (`monte-carlo-and-randomized-estimation`).** Reweighting from proposal $q$ to target $p$ requires target absolute continuity with respect to the proposal wherever the integrand contributes. Unbiasedness does not guarantee finite variance.

**First-moment method (`probabilistic-method-and-random-structures`).** If a nonnegative integer-valued defect count has expectation below one, some outcome has zero defects. More generally, positive probability of success proves existence.

**Second-moment method (`probabilistic-method-and-random-structures`).** Variance or $\mathbb{E}[X^{2}]$ can lower-bound $\mathbb{P}(X>0)$ for a nonnegative variable. Useful conclusions require the second moment not to dwarf the squared first moment.

**Sampling distribution pivots (`sampling-laws-and-inference-bridge`).** Exact pivots require a statistic whose distribution is parameter-free under the stated model; asymptotic pivots require a limit theorem and consistent scaling. Coverage belongs to the sampling mechanism, not to an observed interval in isolation.

## Fast hypothesis audit

When a proposed solution invokes a named result, ask in order: Is every object measurable? Are all required expectations finite? Is independence mutual, conditional, or absent? Is the claim about variables on one space or only their laws? Is convergence almost sure, in probability, in $L^{p}$, or in distribution? Does a transform exist on the required domain? Is a stopping time bounded or uniformly integrable? Is a Markov chain finite, irreducible, and aperiodic where each property is used? Is a Monte Carlo error statement iid, asymptotic, or nonasymptotic? If any answer is unstated, the theorem invocation is incomplete.
