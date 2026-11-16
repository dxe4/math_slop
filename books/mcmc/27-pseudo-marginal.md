# 27. Pseudo-marginal and delayed-acceptance MCMC

Evaluating a posterior density can be harder than proposing a new parameter. A likelihood may require integrating thousands of latent variables, or a single evaluation may involve a costly numerical model. This chapter develops two responses: replace the likelihood by a suitable random estimate, or use a cheap approximation to screen proposals before paying for an exact evaluation. Both approaches can preserve the intended posterior, provided we construct their acceptance rules carefully.

**Learning goals.** Derive the extended target behind pseudo-marginal MCMC; explain why its current likelihood estimate must survive rejection; construct correlated auxiliary proposals; derive delayed acceptance; and compare computational efficiency without confusing invariance with finite-run accuracy.

**Prerequisites.** Review posterior targets in [Chapter 3](03-bayesian-targets.md), importance sampling in [Chapter 5](05-monte-carlo.md), Metropolis–Hastings in [Chapter 9](09-metropolis-hastings.md), and Monte Carlo error in [Chapter 13](13-mc-error.md). Auxiliary-variable reasoning from [Chapter 11](11-slice.md) will be useful.

## 27.1 A likelihood obtained by simulation

Suppose the posterior is

$$
\pi(\theta)=\frac{p(\theta)L(\theta)}{Z},\qquad
L(\theta)=\int p(y,z\mid\theta)\,dz,
$$

where $z$ is latent and $Z$ is finite and positive. If the integral cannot be evaluated directly, importance sampling suggests drawing independent $z_i\sim g_\theta$ and computing

$$
\widehat L_N(\theta)=\frac1N\sum_{i=1}^N
\frac{p(y,z_i\mid\theta)}{g_\theta(z_i)}.
$$

Assume $g_\theta$ covers the support of the integrand and the likelihood integral is finite. Every summand is nonnegative, and integrating against $g_\theta$ gives $E[\widehat L_N(\theta)]=L(\theta)$. Finite variance is useful for performance but is not needed for this expectation identity. A poor importance distribution can therefore produce an unbiased estimate with disastrous variability.

It is tempting to substitute this estimate into an ordinary MH ratio and assume that unbiasedness solves everything. The substitution can be correct, but only with an accompanying rule for managing randomness. The estimate must become part of the chain's state.

Also distinguish an unbiased likelihood estimate from an unbiased *log* likelihood estimate. If $B\sim N(0,v)$, then

$$
E[\exp\{\log L+B\}]=L\exp(v/2).
$$

Exponentiation introduces bias. A finite positive, parameter-independent multiplicative factor cancels from a posterior even if its value is unknown, but a factor depending on $\theta$ changes it. The Gaussian correction $\exp(B-v/2)$ works under that exact noise model; subtracting an estimated variance from arbitrary noisy log likelihoods is not a general exactness device.

## 27.2 Enlarge the state before deriving the algorithm

Collect all random numbers used by the estimator into $u$. Let their simulation law at parameter $\theta$ be $m_\theta(du)$. Write the resulting estimate as $\widehat L(\theta,u)$. Assume it is measurable, finite and nonnegative almost surely, and

$$
\int \widehat L(\theta,u)m_\theta(du)=L(\theta)
$$

for almost every relevant $\theta$. Define a probability measure on pairs by

$$
\bar\pi(d\theta,du)=\frac1Z
p(\theta)\widehat L(\theta,u)m_\theta(du)\,d\theta.
$$

Its marginal is exactly the desired posterior:

$$
\int \bar\pi(d\theta,du)
=\frac{p(\theta)}Z
\left[\int\widehat L(\theta,u)m_\theta(du)\right]d\theta
=\pi(\theta)d\theta.
$$

Nonnegativity permits the interchange of integrals by Tonelli's theorem, and the assumed $Z$ normalizes the result. Thus it is enough to construct an ordinary invariant MCMC kernel for $\bar\pi$. This is the central framework of [Andrieu and Roberts, *The pseudo-marginal approach*](https://arxiv.org/abs/0903.5480).

A crucial consequence concerns the auxiliary conditional distribution. Where $L(\theta)>0$,

$$
\bar\pi(du\mid\theta)=
\frac{\widehat L(\theta,u)}{L(\theta)}m_\theta(du).
$$

This is generally different from the distribution used to generate a fresh estimator. Auxiliary values yielding large estimates have increased stationary weight. An independent refresh from $m_\theta$ does not sample this conditional.

Zero estimates are allowed: they have zero extended-target mass. Initialize where both the prior density and the estimate are finite and positive, and reject a proposed zero estimate. A signed unbiased estimator cannot be substituted into this construction because the proposed joint measure could become negative. Methods using signed weights require an additional argument and often an additional variance problem.

## 27.3 Independent pseudo-marginal Metropolis–Hastings

From $(\theta,u)$ propose $\theta'\sim q(\cdot\mid\theta)$, then independently generate $u'\sim m_{\theta'}$. The extended proposal has forward factor $q(\theta'\mid\theta)m_{\theta'}(du')$. In the MH ratio its auxiliary factors cancel against those in $\bar\pi$, leaving

$$
\alpha((\theta,u),(\theta',u'))=
\min\left\{1,
\frac{p(\theta')\widehat L(\theta',u')q(\theta\mid\theta')}
{p(\theta)\widehat L(\theta,u)q(\theta'\mid\theta)}
\right\}.
$$

The cancellation holds even when the generator law depends on the parameter. We never need to evaluate the generator density explicitly, provided the proposed auxiliary state is drawn from the specified law. The familiar support conventions of MH still apply; proposals without a possible reverse move cannot be accepted into positive target mass by this ratio.

```text
Initialize theta and ell so the prior density and ell are finite and positive.
Repeat:
    Propose theta_new from q(. | theta).
    Generate ell_new using fresh estimator randomness at theta_new.
    Compute the MH ratio using ell_new / ell.
    With the resulting acceptance probability:
        replace (theta, ell) by (theta_new, ell_new).
    Otherwise retain both theta and ell.
    Record theta, including repetitions.
```

For these independent proposals, keeping the scalar estimate is enough to implement subsequent acceptance decisions. Keeping the random seed or full auxiliary state may still help debugging and checkpointing. Correlated methods below require the actual auxiliary state.

Calculate positive ratios through log differences as in [Chapter 4](04-numerics.md). Handle a zero proposed estimate as rejection before evaluating problematic expressions. A numerical overflow is not a very large valid estimate: it signals a failed numerical implementation.

Detailed balance proves invariance of $\bar\pi$ and therefore the correct parameter marginal. It does not prove that a given initialization reaches that distribution rapidly. Nor does it make an ordinary finite-chain average unbiased. Irreducibility, recurrence, initialization effects and Monte Carlo error remain separate issues.

## 27.4 Worked example: retaining versus refreshing

Let the parameter have two values, $A$ and $B$, with equal prior probabilities and likelihoods $L(A)=1$ and $L(B)=2$. The posterior probability of $B$ is $2/3$. Always propose switching to the other parameter. At $A$, the likelihood estimate is exactly $1$. At $B$, draw either $1/2$ or $7/2$, each with probability $1/2$. Its expectation is $2$, as required.

The retained algorithm has three effective states: $(A,1)$, $(B,1/2)$ and $(B,7/2)$. Their unnormalized extended masses are

$$
\frac12\cdot1=\frac12,\qquad
\frac12\cdot\frac12\cdot\frac12=\frac18,\qquad
\frac12\cdot\frac72\cdot\frac12=\frac78.
$$

The sum is $3/2$. Normalization gives probabilities $1/3$, $1/12$ and $7/12$, so the marginal probability of $B$ is $8/12=2/3$.

We can check the transition mechanism directly. From $A$, the low estimate is proposed with probability $1/2$ and accepted with probability $1/2$, giving transition probability $1/4$. The high estimate is proposed with probability $1/2$ and always accepted. From the low $B$ state, moving to $A$ is always accepted; from the high state, it is accepted with probability $2/7$. Thus the stationary flows between $A$ and high $B$ are

$$
\frac13\cdot\frac12=\frac{7}{12}\cdot\frac27=\frac16.
$$

The high estimate causes longer residence at $B$. That residence is part of the correct weighting.

Now change the algorithm: before every acceptance decision, independently regenerate the likelihood estimate of the *current* parameter too. This is commonly called Monte Carlo within Metropolis. Its parameter transition probabilities are

$$
P(A,B)=\frac12\left(\frac12+1\right)=\frac34,
$$

$$
P(B,A)=\frac12\left(1+\frac27\right)=\frac9{14}.
$$

For a two-state chain, stationary flow requires $\pi_A P(A,B)=\pi_B P(B,A)$. Consequently,

$$
\pi_B^{\mathrm{refresh}}=
\frac{3/4}{3/4+9/14}=\frac7{13}\approx0.53846.
$$

Both likelihood estimators remain unbiased, yet the refreshed algorithm targets the wrong distribution. Averaging longer estimates this wrong probability more precisely. The nonlinear ratio and truncation in the acceptance rule prevent an argument based simply on unbiased inputs.

This does not prohibit every auxiliary update at a fixed parameter. For example, propose $u'\sim m_\theta$ and accept it with probability $\min\{1,\widehat L(\theta,u')/\widehat L(\theta,u)\}$. That is a valid MH update for the weighted conditional distribution. An unconditional refresh lacks this correction.

## 27.5 Why likelihood noise creates sticking

At a fixed parameter with positive likelihood define the relative estimate $W=\widehat L/L$. Under the estimator generator, $E_m[W]=1$. Under the stationary auxiliary conditional, the distribution of $W$ is multiplied by $W$. This weighting favors unusually optimistic likelihood estimates.

Consider a convenient analytical noise family with $s>0$:

$$
B=\log W\sim N(-s^2/2,s^2)
$$

under the generator. The mean shift ensures $E[e^B]=1$. Multiplying the density by $e^b$ and completing the square gives

$$
e^b\exp\left[-\frac{(b+s^2/2)^2}{2s^2}\right]
=\exp\left[-\frac{(b-s^2/2)^2}{2s^2}\right].
$$

The normalizing constants already match. Therefore the stationary conditional law is $B\sim N(s^2/2,s^2)$. At $s=2$, the generator's mean log noise is $-2$, whereas the stationary mean is $+2$. These are means of logarithms, not logarithms of mean weights.

An independent proposal tends to carry a fresh, lower estimate than a current value selected by this stationary weighting. The denominator can then dominate many consecutive ratios. A parameter trace and an auxiliary log-estimate trace together reveal whether long holds coincide with optimistic likelihood estimates. Parameter likelihood variation itself can also produce holds, so estimate noise separately through repeated evaluations at fixed parameters.

Increasing the inner sample size often reduces noise but increases cost. The useful objective is precision for the actual estimand per unit computation. Acceptance rate alone misses both residence-time dependence and the cost of producing each proposal. Quantitative optimal-noise results require specific regimes and cost assumptions; [Sherlock, Thiery, Roberts and Rosenthal](https://arxiv.org/abs/1309.7209) analyze such a regime. Their results should not be treated as universal tuning thresholds.

### 27.5.1 Averaging reduces stationary optimism

The weighting identity gives a useful calculation beyond lognormal noise. At a fixed parameter, let $X_1,\ldots,X_N$ be independent nonnegative estimates with mean $L>0$ and finite variance $v$. Their average is an unbiased likelihood estimate. For $W_N=\widehat L_N/L$,

$$
E_m[W_N]=1,\qquad \operatorname{Var}_m(W_N)=\frac{v}{NL^2},\qquad
E_{\bar\pi}[W_N\mid\theta]=E_m[W_N^2]=1+\frac{v}{NL^2}.
$$

The last equality uses the likelihood-weighted conditional from Section 27.2: multiply the generator law by $W_N$, then integrate $W_N$. Thus the stationary mean relative estimate exceeds one whenever $v>0$, even though the estimator is unbiased under fresh simulation. Averaging reduces this stationary excess. These statements concern two different distributions and are consistent with the [extended-target construction of Andrieu and Roberts](https://arxiv.org/abs/0903.5480).

For the $B$ estimator in Section 27.4, $v=9/4$ and $L=2$. Averaging $N$ draws gives

$$
\ell_k=\frac12+\frac{3k}{N},\qquad
m_k={N\choose k}2^{-N},\qquad k=0,\ldots,N.
$$

The extended stationary masses are still $\bar\pi(A)=1/3$ and $\bar\pi(B,k)=m_k\ell_k/3$. Therefore the posterior probability of $B$ stays $2/3$ for every $N$, while the stationary mean relative estimate at $B$ decreases from $25/16$ for $N=1$ to $1+9/(16N)$. Averaging changes performance, not this marginal target.

### 27.5.2 An exact precision-versus-cost comparison

We can quantify that performance without estimating an autocorrelation curve. Let $V_N$ be the asymptotic variance for the sample mean of $1\{\theta=B\}$: for a long stationary run of $M$ iterations, its variance is approximately $V_N/M$. The finite chain just constructed is irreducible and aperiodic, and direct calculation gives

$$
V_N=\frac{2}{27}\sum_{k=0}^N m_k\ell_k\max(1,\ell_k)-\frac29.
$$

Exercise 7 derives this expression; the companion program checks it against the transition matrix using exact rational arithmetic. Now assign one work unit to each independent $B$ estimate and a fixed overhead $c_0$ to each iteration, including the cheap evaluation at $A$. Since a $B$ proposal is made only from $A$, the stationary mean cost is $C_N=c_0+N/3$. At a large work budget $T$, the variance is approximately $C_NV_N/T$. This is a specified cost model, not measured wall-clock time. The need to include estimator cost follows the efficiency analysis of [Sherlock and colleagues, Section 3](https://arxiv.org/pdf/1309.7209); the finite calculation here does not use their high-dimensional Gaussian assumptions.

| Inner draws $N$ | $V_N$ | $C_NV_N$, $c_0=1$ | $C_NV_N$, $c_0=10$ |
|---:|---:|---:|---:|
| 1 | 0.250000 | 0.333333 | 2.583333 |
| 2 | 0.162037 | 0.270062 | 1.728395 |
| 4 | 0.116898 | 0.272762 | 1.324846 |
| 8 | 0.095233 | 0.349187 | 1.206284 |
| 16 | 0.084510 | 0.535228 | 1.295816 |

Lower values in the last two columns mean better precision at equal cost. Among these choices, $N=2$ is best when overhead is one unit, whereas $N=8$ is best when overhead is ten units. The most accurate estimator in the table wins neither comparison. This makes the tuning question concrete: reducing likelihood noise is useful only in relation to the cost and the estimand. These are long-run variance comparisons, not guarantees about a short run from a chosen starting state.

## 27.6 Correlating the auxiliary randomness

Instead of drawing an independent estimate at each proposal, we can propose correlated randomness. Suppose a parameter-independent reference law $m(du)$ generates the estimator, and let $K$ be reversible with respect to $m$:

$$
m(du)K(u,du')=m(du')K(u',du).
$$

Propose the pair using $q(\theta'\mid\theta)K(u,du')$. In the extended MH ratio, the displayed reversibility identity cancels the auxiliary measure and transition factors. The acceptance probability is again the ratio from Section 27.3. Both components are retained on rejection.

For a standard multivariate normal reference, a useful proposal is

$$
u'=\rho u+\sqrt{1-\rho^2}\,\epsilon,
\qquad \epsilon\sim N(0,I),\quad |\rho|<1.
$$

Here $u'$ denotes the proposed auxiliary vector. If $u\sim N(0,I)$ under the reference law, the joint Gaussian law of $(u,u')$ is unchanged by swapping its two vectors, proving reversibility of $K$. This reference-law argument does not say that the current auxiliary vector in the extended chain is standard normal: its stationary conditional is likelihood weighted. Although an estimator's simulated latent variables may depend on $\theta$, their underlying standard normal random numbers can sometimes supply this common reference representation.

The motivation is the variance identity

$$
\operatorname{Var}(B'-B)=\operatorname{Var}(B')+
\operatorname{Var}(B)-2\operatorname{Cov}(B',B).
$$

Positive covariance can stabilize the log-estimate difference entering acceptance. Correlation of underlying normals does not guarantee equal correlation of estimator outputs, particularly when transformations contain discontinuities. The common-reference construction and its practical consequences are developed in [Deligiannidis, Doucet and Pitt, *The correlated pseudo-marginal method*](https://arxiv.org/abs/1511.04992).

For a scalar reference and constant lognormal noise $B=su-s^2/2$, the stationary current $u$ has law $N(s,1)$. The proposed noise difference is consequently

$$
B'-B=s(\rho-1)u+s\sqrt{1-\rho^2}\,\epsilon
\sim N\bigl(-s^2(1-\rho),\,2s^2(1-\rho)\bigr).
$$

This exact calculation isolates the noise contribution to the acceptance ratio, before any accept/reject decision; the parameter target and proposal ratios still matter. The mean shift would be missed by pretending that the current $u$ is drawn afresh from the reference law.

Setting $\rho=1$ freezes $u$. A chain started at a fixed $u$ then generally explores a conditional parameter target proportional to $p(\theta)\widehat L(\theta,u)$, not the required marginal. Correlation is useful only when the complete state still explores adequately. Arbitrary parameter-dependent couplings require their own proposal-ratio derivation; the cancellation above cannot simply be assumed.

## 27.7 Delayed acceptance through two reciprocal factors

Now suppose the unnormalized target $t(\theta)$ can be evaluated exactly but expensively. Let $s(\theta)$ be a fixed, cheap, finite positive surrogate on the target support. It need not integrate to one. Define

$$
r_1(\theta,\theta')=
\frac{s(\theta')q(\theta\mid\theta')}
{s(\theta)q(\theta'\mid\theta)},\qquad
r_2(\theta,\theta')=
\frac{t(\theta')s(\theta)}{t(\theta)s(\theta')}.
$$

First test acceptance with probability $\min(1,r_1)$. Only on passing this test evaluate the expensive proposed target and test $\min(1,r_2)$ using a fresh independent uniform. Cache the current target value. The total acceptance probability is the product of these two probabilities.

To prove balance, consider mutually reachable states of positive target mass. Each factor reverses to its reciprocal, and

$$
\frac{\min(1,r)}{\min(1,1/r)}=r.
$$

Thus the ratio of forward to reverse total acceptance is $r_1r_2$, which equals the ordinary MH ratio. Multiplying by $t(\theta)q(\theta'\mid\theta)$ gives equality of forward and reverse probability flows. Rejected probability remains on the diagonal. This proves target invariance under the stated support conditions.

The first stage is a cheap filter, and the second corrects its distortion. Omitting the second stage generally targets the surrogate. A surrogate that is zero inside the intended target support can prevent necessary moves, so positivity is substantive. Values outside the target support may be rejected directly. A surrogate changed during sampling requires further adaptive-kernel reasoning rather than this fixed-kernel proof. Factorized screening and its cost tradeoffs are studied by [Banterle, Grazian, Lee and Robert](https://arxiv.org/abs/1503.00996).

## 27.8 Worked example: screening costs acceptance

Take a symmetric parameter proposal and a proposed move with target ratio $4$ but surrogate ratio $10$. Ordinary MH accepts with probability $1$. Delayed acceptance passes stage one with probability $1$ and stage two with probability $4/10=0.4$, so its total acceptance is $0.4$.

In reverse, the surrogate ratio is $0.1$ and the correction ratio is $(1/4)/(1/10)=2.5$. The total reverse acceptance is $0.1$. Forward acceptance divided by reverse acceptance is $0.4/0.1=4$, exactly the target ratio. Correct stationary weighting survives the extra rejection.

If the surrogate ratio had instead equalled $4$, the second factor would be $1$ and the forward acceptance would equal ordinary MH. Generally, for positive $a,b$,

$$
\min(1,a)\min(1,b)\leq\min(1,ab).
$$

The left side is at most both $1$ and $ab$, proving the inequality. Delayed acceptance therefore never improves pointwise acceptance for the same proposal. Its opportunity is reduced cost.

For an illustrative cost calculation, suppose a cheap evaluation costs one unit, an expensive evaluation costs 100 units, and stage one passes 20% of proposals. Expected proposal work is approximately $1+0.2(100)=21$ units instead of 100. A fixed budget allows about $100/21=4.76$ times as many attempts. If the integrated autocorrelation time for a particular estimand increases from 10 to 25 iterations, the approximate effective-sample gain is $4.76(10/25)=1.90$. If it increases to 60, the gain becomes $0.79$, so screening loses. These figures illustrate a calculation, not a measured benchmark.

A surrogate that underestimates an entire mode or has excessively light tails may reject almost every useful proposal toward that region. Positive support guarantees that the balance argument is available; it does not guarantee practical movement. Also distinguish delayed acceptance from delayed rejection: delayed rejection constructs another proposal after a failed move, whereas delayed acceptance runs several tests on one proposal.

## 27.9 Combining the two constructions

A cheap deterministic surrogate can screen an expensive simulated likelihood. Let $s(\theta)$ approximate the unnormalized posterior, and retain a current positive estimate $\ell=\widehat L(\theta,u)$. First propose $\theta'$ and apply the same $r_1$ from Section 27.7. If the proposal passes, generate $u'\sim m_{\theta'}$ and evaluate $\ell'$. The second ratio becomes

$$
r_2=\frac{p(\theta')\ell' s(\theta)}
{p(\theta)\ell s(\theta')}.
$$

This is delayed acceptance on the extended target. To see all the factors, the extended cheap surrogate is the measure $s(\theta)m_\theta(du)\,d\theta$, and the proposal is $q(\theta'\mid\theta)m_{\theta'}(du')$. The auxiliary proposal factors cancel in its first ratio, leaving $r_1$; correcting from this surrogate to $p(\theta)\widehat L(\theta,u)m_\theta(du)\,d\theta$ gives the displayed $r_2$. Their product is the full pseudo-marginal ratio. One could imagine drawing $u'$ before the first test, then discarding it on failure. Since the first-stage decision does not depend on $u'$, postponing that independent draw produces the same accepted-transition law while saving work. A zero proposed estimate fails the second stage, and its randomness is discarded.

After either rejection, retain both the current parameter and its likelihood estimate. Regenerating the denominator after a cheap rejection would change the extended state without an invariant update. Likewise, using an unaccounted random surrogate would alter the factorization. Each additional source of randomness needs a defined role in the state or proposal.

Exactness here concerns the statistical target associated with $L$. If the estimator is unbiased only for a discretized model likelihood $L_h$, the marginal target uses $L_h$. Pseudo-marginal correction does not remove numerical solver bias or modeling assumptions. Finite-chain error remains even when the estimator and invariant distribution are exactly as intended.

## 27.10 Computational investigation and lab

The standalone program [examples/ch27.py](examples/ch27.py) simulates the finite example with a fixed seed. It prints parameter occupancy, transitions, a batch-means standard error and the fraction of high estimates while at $B$. Under retention that last fraction should approach $(7/12)/(2/3)=7/8$, even though newly generated $B$ estimates are high only half the time. This is a direct observation of stationary weighting.

Run it with `python examples/ch27.py`. Increase the retained length, change the seed, and compare the output against $2/3$ and $7/13$. Batch means here is a teaching estimate of uncertainty for one finite-state chain, not a complete convergence diagnostic. Agreement with these exact answers checks this example; it cannot establish correctness of an unrelated likelihood estimator.

The program also reproduces the averaging table, checks the stationary mean relative estimates, and simulates the $N=4$ retained case. Its rational transition checks cover both ordinary pseudo-marginal and the two-stage construction with surrogate ratio $s(B)/s(A)=10$. Those algebraic checks are distinct from the simulation comparisons.

<div class="mcmc-lab" data-lab="metropolis"></div>

Use the ordinary Metropolis lab to vary proposal scale and observe repeated states and residence times. The lab supplies a baseline for rejection behavior; it does not implement noisy likelihoods, correlated auxiliaries or delayed acceptance. Compare its holds with the mechanism derived above, then use the executable finite example to investigate retained randomness directly.

Before using these methods on an unknown posterior, document why the estimator is nonnegative and unbiased, what randomness is retained, and which model its expectation represents. Examine repeated estimator draws at representative fixed parameters. Compare multiple chains and estimand-specific Monte Carlo errors at equal computational budgets. Diagnostics can reveal trouble without proving convergence. [Chapter 28](28-particle-mcmc.md) supplies a major practical source of nonnegative unbiased likelihood estimators: particle filters.

## 27.11 Exercises and worked solutions

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-1">

### Exercise 1: normalization and constant factors

Prove that the extended target has the desired marginal. What changes if $E[\widehat L(\theta,U)]=cL(\theta)$ for one finite positive constant $c$?

<details>
<summary>Solution</summary>

Nonnegativity allows Tonelli's theorem. Integrating $p(\theta)\widehat L(\theta,u)m_\theta(du)d\theta$ first over $u$ gives $p(\theta)L(\theta)d\theta$, whose total mass is $Z$. If the expectation is $cL$, the total mass becomes $cZ$, and the marginal is $cp(\theta)L(\theta)/(cZ)=\pi(\theta)$. A factor $c(\theta)$ would instead reweight the posterior and would not generally cancel.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-2">

### Exercise 2: noisy logarithms

Suppose $\widehat\lambda=\log L+E$, where $E\sim N(0,v(\theta))$. Find $E[e^{\widehat\lambda}]$ and give an unbiased likelihood construction when the variance is known exactly.

<details>
<summary>Solution</summary>

The Gaussian moment generating function gives $E[e^E]=e^{v(\theta)/2}$. Hence exponentiating the log estimate gives expectation $Le^{v(\theta)/2}$. The corrected estimator $e^{\widehat\lambda-v(\theta)/2}$ is positive and has expectation $L$. This relies on the exact Gaussian law and exact variance; replacing that variance by a random estimate does not automatically preserve the identity.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-3">

### Exercise 3: a second refreshed counterexample

Replace the two $B$ estimates in Section 27.4 by $1$ and $3$, equally likely. Calculate the stationary $B$ probabilities for retained and refreshed algorithms.

<details>
<summary>Solution</summary>

The expectation remains $2$, so the retained extended construction gives marginal probability $2/3$. For refreshing, $P(A,B)=1$ because either proposed estimate is at least $1$. The reverse probability is $(1+1/3)/2=2/3$. Therefore stationary occupancy at $B$ is $1/(1+2/3)=3/5$. Lower variability changes the error but does not eliminate it in this example.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-4">

### Exercise 4: lognormal weighting

Complete the square in the stationary density of log noise. Find the stationary conditional expectation of $W$ as well as the mean of $\log W$.

<details>
<summary>Solution</summary>

Multiplying the generator density by $e^b$ changes its exponent to $-(b-s^2/2)^2/(2s^2)$. Thus stationary log noise is $N(s^2/2,s^2)$, with mean $s^2/2$. Its exponential has mean $e^{s^2/2+s^2/2}=e^{s^2}$. Equivalently, stationary $E[W]$ equals generator $E[W^2]$ because generator $E[W]=1$. The increasingly large mean illustrates strong weighting toward optimistic estimates.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-5">

### Exercise 5: delayed-acceptance balance

Prove balance for the two-stage rule on mutually reachable states with positive finite target and surrogate values. Prove its acceptance is no larger than ordinary MH acceptance.

<details>
<summary>Solution</summary>

Under reversal, each factor $r_i$ becomes $1/r_i$. Therefore the forward-to-reverse acceptance ratio is $r_1r_2=t(\theta')q(\theta\mid\theta')/[t(\theta)q(\theta'\mid\theta)]$. Multiplication by the forward target-proposal factor proves equality of flows. For the inequality, $\min(1,r_1)\min(1,r_2)$ is bounded above by both $1$ and $r_1r_2$, hence by their minimum. Rejection supplies diagonal mass and does not disturb balance.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-6">

### Exercise 6: design a noise-correlation experiment

Specify an analytically checkable experiment comparing independent and correlated pseudo-marginal methods at equal likelihood-evaluation cost. Include two estimands and explain why freezing the randomness is misleading.

<details>
<summary>Solution</summary>

Use a standard normal parameter target and estimator $\widehat L(\theta,u)=e^{-\theta^2/2}e^{su-s^2/2}$ with standard normal reference $u$ and constant parameter weight. Its expected estimate equals the unnormalized target. Use a symmetric Gaussian parameter proposal and normal auxiliary proposals at several $\rho<1$, including zero. Retain $(\theta,u)$ on rejection. Keep equal numbers of estimator evaluations, repeat seeds, and compare batch-means errors for $\theta$ and $1\{\theta>2\}$; their exact expectations are zero and the standard normal upper-tail probability. Also inspect auxiliary traces and hold lengths. In this particular separable estimator, fixing $u$ happens to leave the parameter conditional unchanged, so it is an especially poor test of the general safety of freezing. A parameter-dependent noise scale $s(\theta)>0$ preserves unbiasedness while making the frozen-$u$ conditional generally wrong. Include that variant before drawing conclusions.

For an explicit variant take $s(\theta)=\sqrt{1+\theta^2}$. Fresh normal randomness still gives an unbiased likelihood estimate at every $\theta$. But freezing $u=0$ leaves the parameter density proportional to $e^{-\theta^2/2}e^{-(1+\theta^2)/2}$, which is $N(0,1/2)$ after normalization. Its variance is half the intended value. This is a direct check of failure from that initialization, even though $\rho=1$ formally leaves the joint target invariant as one of many invariant distributions.

</details>

</div>

<div class="exercise" id="mcmc-27-pseudo-marginal-ex-7">

### Exercise 7: verify the exact cost table

For the averaged finite estimator in Section 27.5, write its transition matrix and derive $V_N$. You may use the finite-chain identity $V_N=2\sum_x\bar\pi_x f_xh_x-\sum_x\bar\pi_x f_x^2$, where $f=1\{\theta=B\}-2/3$ and $h-Ph=f$. This identity follows by summing the stationary autocovariances; adding a constant to $h$ has no effect. Explain why $V_N/(2/9)$ can be less than one.

<details>
<summary>Solution</summary>

Write $a_k=m_k\min(1,\ell_k)$ and $b_k=\min(1,1/\ell_k)$. The only off-diagonal transitions are $P(A,B_k)=a_k$ and $P(B_k,A)=b_k$. Set $P(A,A)=1-\sum_k a_k$ and $P(B_k,B_k)=1-b_k$. Because $\ell_kb_k=\min(1,\ell_k)$, the masses $1/3$ and $m_k\ell_k/3$ satisfy balance.

Set $h_A=0$ and $h_{B_k}=1/(3b_k)$. At $B_k$, $h-Ph=b_kh_{B_k}=1/3=f_{B_k}$. At $A$, $h-Ph=-\sum_k a_k/(3b_k)=-E_m[\ell]/3=-2/3=f_A$. Consequently,

$$
\sum_x\bar\pi_x f_xh_x=\frac1{27}\sum_k\frac{m_k\ell_k}{b_k},
\qquad \sum_x\bar\pi_x f_x^2=\frac29.
$$

Substituting $1/b_k=\max(1,\ell_k)$ proves the expression. At $N=1$ it gives $V_1=1/4$, and at $N=2$ it gives $V_2=35/216$. Dividing by $2/9$, the marginal indicator variance, gives the integrated autocorrelation time. It can be below one because switching proposals produce negative correlations. That does not invalidate the cost comparison. The finite positive estimates ensure this chain is irreducible, and the positive self-loop at the high-estimate state ensures aperiodicity.

</details>

</div>

## 27.12 Key takeaways and further reading

Pseudo-marginal MCMC is ordinary MH on an enlarged space whose parameter marginal is the intended posterior. Nonnegative unbiased estimates establish that marginal identity; retaining the current estimate makes the algorithm respect it. Large estimator values receive increased stationary weight, which explains why noisy estimators can produce long holds. Correlated auxiliary proposals can help when their reference reversibility and exploration are maintained.

Delayed acceptance preserves the target by multiplying reciprocal acceptance factors. It reduces expensive evaluations at the price of additional rejection, so its value depends on precision per computational cost. Neither construction removes finite-run uncertainty, model approximation or numerical implementation errors.

The four primary readings linked above provide complementary depth: Andrieu and Roberts establish the pseudo-marginal framework; Deligiannidis, Doucet and Pitt develop correlated auxiliary proposals; Banterle and colleagues study delayed acceptance; and Sherlock and colleagues analyze efficiency under explicit asymptotic assumptions. The finite-state calculations and cost illustration in this chapter can be checked independently without invoking those asymptotic results.
