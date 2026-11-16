
# Notation, Probability Spaces, and Inference Conventions

## Data, states, and laws

$X$ denotes random data before observation and $x$ a realised value. A capital letter can represent a scalar, vector, matrix, or structured record; its sample space is stated when ambiguity matters. Independent replication is written $X_1,\dots,X_n$, while dependent sequences are not silently treated as independent.

An experiment is $\{P_\theta:\theta \in \Theta\}$ on a declared sample space. $\theta$ indexes observation laws; it is not automatically random. Under Bayesian modelling, $\Theta$ may also be a random variable with prior $\Pi$; the text then distinguishes sampling statements conditional on $\theta$ from probability statements under the joint model.

$P_\theta$, $E_\theta$, and $Var_\theta$ name the state governing repetition. $P_n$ may denote an empirical measure, so context always distinguishes it from a model law. A density $p_\theta(x)$ is relative to a reference measure and does not itself assign probability to a point in a continuous space.

## Targets and procedures

An estimand is $\tau(\theta)$ or $\tau(P)$. An estimator $T=T(X)$ is a random function of data; $T(x)$ is its realised estimate. An estimating equation may be $\sum_{i} \psi(X_i,\theta)=0$. If misspecification changes the target to a projection or root of a population equation, that target is named rather than called the truth by default.

A decision rule $\delta(X)$ takes values in an action space $A$. Loss is $L(\theta,a)$ and frequentist risk is $R(\theta,\delta)=E_\theta L(\theta,\delta(X))$. Bayes risk averages this risk under a prior. A minimax rule controls the supremum risk. Dominance always names the parameter set and loss.

## Likelihood and information

The likelihood $L(\theta;x)$ holds observed data fixed and compares states. Equality up to a positive data-only factor is written $\propto$ when maximisation or ratios are intended. Log likelihood is $\ell(\theta;x)$. The score is a derivative with respect to the parameter, and Fisher information is used only under the regularity conditions stated in the relevant chapter.

Hat notation, such as $\hat{\theta}$, denotes an estimate. It does not by itself mean maximum likelihood, unbiasedness, consistency, or uniqueness. A tilde may denote an alternative or robust estimate and is defined locally.

## Tests and confidence sets

A test function $\phi(X)$ lies in $[0,1]$; in nonrandomised cases it is an indicator. Its power is $E_\theta \phi(X)$. Size is the supremum rejection probability over the null parameter set, not necessarily the probability at one convenient boundary point unless a theorem proves that reduction.

A p-value $p(X)$ is valid for a null family when $\sup_{\theta \in \Theta_0} P_\theta(p(X)\leq \alpha)\leq \alpha$ for every $\alpha$ in $[0,1]$. It is not $P(H_0|X)$. A confidence procedure $C(X)$ has coverage at state $\theta$ equal to $P_\theta(\theta \in C(X))$; the realised set is not assigned that coverage probability after observation under the frequentist model.

Familywise error, false discovery rate, and marginal type-I error refer to different events or expectations. The selected criterion is always named. Sequential guarantees state the filtration and whether validity holds at fixed times, stopping times, or uniformly over time.

## Asymptotic notation

$T_n \to _P T$, $T_n \to _d T$, and almost-sure convergence are distinct. $\sqrt{n}(T_n-\theta) \to _d N(0,V)$ is a distributional approximation under a sequence of experiments, not a statement that finite samples are normal. $o_P(1)$ converges to zero in probability; $O_P(1)$ is bounded in probability. Deterministic $o$ and $O$ are not interchangeable with stochastic versions.

Pointwise asymptotics fix a state before taking $n$ to infinity. Uniform claims take a supremum over a declared class. Local alternatives may vary with $n$. The order of these quantifiers is part of the theorem.

## Vectors, derivatives, and covariance

Vectors are columns unless stated otherwise. Transpose is $T$ in plain notation, such as $X^{\mathsf T} X$. Norms and inner products name their space when not Euclidean. Covariance matrices are positive semidefinite. In regression, $X$ may denote a fixed design matrix while $Y$ is random; random-design claims are labelled separately.

Gradients are columns. Hessians and information matrices require compatible parameter coordinates. An inverse is written only after nonsingularity or a generalized-inverse convention is established. Sandwich covariance has the schematic form $A^{-1} B A^{-T}$; equality of $A$ and $B$ is a model condition, not an algebraic identity.

## Design and causal notation

In finite-population experiments, $Y_i(1)$ and $Y_i(0)$ are potential outcomes, $Z_i$ is assignment, and the observed outcome is $Y_i=Z_iY_i(1)+(1-Z_i)Y_i(0)$ under consistency. Randomness may come solely from $Z$. Population averages and superpopulation expectations are kept distinct.

In survey sampling, inclusion indicators and probabilities are $I_i$, $\pi_i$, and joint probabilities $\pi_{ij}$. Design expectation conditions on the finite population values. A sampling weight is not automatically a response, calibration, or causal weight; its construction is recorded.

Missingness indicators are $R$, with $R=1$ meaning observed unless locally stated otherwise. MCAR, MAR, and MNAR are conditional-independence descriptions tied to a full-data model. MAR is not verifiable from observed data alone.

## Bayesian notation

$\Pi$ is a prior measure, $\pi(\theta)$ a prior density when one exists, and $\Pi(.|x)$ the posterior. The prior predictive is $m(x)=\int p_\theta(x)\,d\Pi(\theta)$. Posterior predictive distributions integrate a future observation law over the posterior. A Bayes factor compares marginal likelihoods and therefore depends on complete prior specifications, including constants.

A credible set has posterior probability under the joint model. Its frequentist coverage is a separate function of fixed $\theta$. An improper prior is a sigma-finite device rather than a probability distribution; posterior propriety must be proved, and ordinary marginal-likelihood comparisons are not automatically defined.

## Status and evidence words

“Exact” means exact under the stated law and ideal arithmetic. “Consistent” names a limiting property. “Unbiased” is an expectation identity for a declared target and law. “Efficient” names a comparison class and criterion. “Robust” names a perturbation, scale, and loss. “Causal” requires an estimand and identification argument beyond association. “Representative” refers to a population and selection process, not a visual resemblance.

Approximation signs require an error statement or declared asymptotic regime. Simulation summaries include Monte Carlo uncertainty. Plots require a meaningful text or numerical alternative, and colour is never the sole carrier of a distinction.

## Proof and reporting conventions

Expectations state which law supplies randomness whenever multiple mechanisms coexist. Conditioning events of probability zero are handled through regular conditional distributions or densities rather than informal ratios. Interchanging derivative, integral, expectation, limit, or supremum requires a theorem with checked hypotheses.

Every final interpretation should be expandable into: “Under [protocol and model], procedure [name] has [guarantee] for [estimand/reference class], and under [loss or scientific threshold] this supports [limited action].” If a bracket cannot be filled, the claim is not ready.
