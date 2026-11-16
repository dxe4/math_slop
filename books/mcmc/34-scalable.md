# 34. Scalable and stochastic-gradient MCMC

An algorithm can make an update cheaply by looking at a few observations, yet produce a poor estimate of the posterior. This chapter asks what is gained, what is lost, and how to measure the trade. The central example is stochastic-gradient Langevin dynamics (SGLD): replace the full posterior score in a Langevin step with a minibatch estimate and omit the Metropolis correction. That choice reduces the usual cost of one step, while changing the error analysis.

**Learning goals.** By the end you should be able to construct and check a minibatch score, derive the SGLD update with consistent factors of two, separate gradient noise from injected Gaussian noise, calculate a fixed-step bias in a solvable model, use step-weighted estimates with a decreasing schedule, construct an exact auxiliary target for likelihood subsampling, and design a comparison that includes preprocessing and accuracy.

**Prerequisites.** We use posterior factorization from [Chapter 03](03-bayesian-targets.md), variance reduction from [Chapter 06](06-variance-reduction.md), Metropolis correction from [Chapter 09](09-metropolis-hastings.md), Monte Carlo error and diagnostics from [Chapters 13](13-mc-error.md) and [14](14-diagnostics.md), and Langevin discretization from [Chapter 19](19-langevin.md). [Chapter 27](27-pseudo-marginal.md) explains the exact likelihood-estimator route mentioned below.

## 34.1 What a large data set costs

Suppose the observed data $y_1,\ldots,y_N$ are conditionally independent given a parameter $\theta\in\mathbb R^d$. For a prior density $p_0$ and observation likelihoods $p(y_i\mid\theta)$, the fixed-data posterior is

$$
\pi(\theta)\propto p_0(\theta)\prod_{i=1}^N p(y_i\mid\theta),\qquad
G(\theta)=\nabla\log\pi(\theta)
=\nabla\log p_0(\theta)+\sum_{i=1}^N g_i(\theta),
$$

where $g_i(\theta)=\nabla\log p(y_i\mid\theta)$. The normalization constant drops out of $G$. If every $g_i$ must be evaluated afresh, one full score costs $N$ observation contributions; an acceptance test may also need all $N$ log likelihood contributions. In contrast, the parameter dimension $d$ controls vector storage and much linear algebra. A method that helps when $N$ is huge need not help when $d$ is huge, and vice versa.

The $O(N)$ description is conditional, not universal. In a conjugate normal model a few sufficient statistics turn a full score into a constant-cost expression after one pass through the data. Cached matrix products, sparse structure, and hardware vectorization also change elapsed time. Conversely, a slowly mixing cheap method may use more total work than a costly method that reaches the same accuracy quickly. For a fixed target, useful accounting is

$$
\text{total work}=\text{initialization and preprocessing}
+\sum_{k=1}^K\text{work of update }k.
$$

The quantity to compare is the error of the *same estimand* at matched total work. If the data themselves stream in and change over time, the posterior target changes; ordinary fixed-target MCMC guarantees no longer apply without a separate model for that stream. The original SGLD proposal focused on reducing the recurring data pass in Bayesian learning [Welling and Teh, 2011](https://icml.cc/2011/papers/398_icmlpaper.pdf).

For example, if a full score reads $N=10^6$ records and a batch reads $b=10^3$, a thousand minibatch steps use roughly the same number of observation-score evaluations as one full-gradient step. That arithmetic says nothing yet about estimator quality. One full-gradient step cannot usually explore a posterior, while a thousand noisy steps may still be biased by their step size. The comparison becomes meaningful only after choosing an accuracy tolerance and finding the cost of attaining it. Data access counts are a useful platform-neutral proxy, while wall-clock measurements capture batching, memory traffic, and parallelism.

## 34.2 A score from a minibatch

At a fixed current $\theta$, draw indices $I_1,\ldots,I_b$ independently and uniformly from $\{1,\ldots,N\}$, with replacement. Define

$$
\widehat G(\theta)=\nabla\log p_0(\theta)
+\frac{N}{b}\sum_{j=1}^b g_{I_j}(\theta).
$$

The prior is included once, while the likelihood terms receive the factor $N/b$. Since $\mathbb E[g_{I_j}(\theta)\mid\theta]=N^{-1}\sum_i g_i(\theta)$, linearity gives $\mathbb E[\widehat G(\theta)\mid\theta]=G(\theta)$. Here the expectation is over newly drawn indices, conditional on the current state and the fixed data. A uniform *minibatch average* without multiplication by $N$ estimates the average likelihood score, which is a different drift.

Write $\bar g=N^{-1}\sum_i g_i$ and define the finite population covariance with divisor $N$,

$$
\Sigma_g(\theta)=\frac1N\sum_{i=1}^N
\{g_i(\theta)-\bar g(\theta)\}
\{g_i(\theta)-\bar g(\theta)\}^{\mathsf T}.
$$

Independence of the draws makes the cross-covariances zero, so

$$
V(\theta):=\operatorname{Cov}(\widehat G\mid\theta)
=\frac{N^2}{b}\Sigma_g(\theta).
$$

Sampling $b$ distinct observations instead gives $V=N^2(1-b/N)S_g/b$, where $S_g$ uses divisor $N-1$. The finite population correction reaches zero at $b=N$, as it should. Shuffling through an epoch makes successive batches dependent, so the fresh-batch conditional calculation cannot simply be reused at each step. Unequal selection probabilities likewise require inverse-probability weights to retain unbiasedness. These distinctions matter because a one-step score calculation becomes part of a dependent simulation.

## 34.3 From Langevin diffusion to SGLD

Choose the convention

$$
d\Theta_t=\tfrac12G(\Theta_t)\,dt+dW_t,
$$

where $W_t$ is standard $d$-dimensional Brownian motion. Under suitable smoothness, integrability, and recurrence conditions, this diffusion has $\pi$ as its invariant distribution. One can see the intended balance in the formal stationary Fokker–Planck current: $\tfrac12\pi\nabla\log\pi-\tfrac12\nabla\pi=0$. This identity alone does not prove existence, nonexplosion, or convergence. Euler discretization with the full score is unadjusted Langevin (ULA): $\theta_{k+1}=\theta_k+(h_k/2)G(\theta_k)+\sqrt{h_k}Z_k$. Its finite-step invariant law generally differs from $\pi$; [Chapter 19](19-langevin.md) adds a Metropolis test to form MALA.

SGLD substitutes $\widehat G$ and omits that test:

$$
\boxed{\quad\theta_{k+1}=\theta_k+
\frac{h_k}{2}\widehat G(\theta_k)
+\sqrt{h_k}Z_k,\quad Z_k\sim N(0,I_d).\quad}
$$

The $Z_k$ are independent of fresh minibatches and previous simulation randomness. A literal implementation is:

```text
given theta_0, step sizes h_k, batch size b
for k = 0, 1, ...:
    draw b data indices uniformly, with replacement
    score = grad_log_prior(theta_k)
            + (N/b) * sum(grad_log_likelihood_i(theta_k) for sampled i)
    draw an independent standard-normal vector Z
    theta_(k+1) = theta_k + (h_k/2)*score + sqrt(h_k)*Z
```

The update costs $b$ likelihood-score contributions, subject to costs for the prior and linear algebra. Omitting the test is what prevents an ordinary full-data acceptance calculation, but also removes the usual finite-step exact-invariance argument. An unbiased *drift estimate* is not an unbiased simulation of the diffusion, and an unadjusted Euler step is biased even with a full gradient. Rigorous decreasing-step results require more than the displayed algebra [Teh, Thiery and Vollmer, 2016](https://jmlr.csail.mit.edu/papers/volume17/teh16a/teh16a.pdf).

## 34.4 Two noises, different scales

Let $\eta_k=\widehat G(\theta_k)-G(\theta_k)$, so $\mathbb E[\eta_k\mid\theta_k]=0$. Conditional on $\theta_k$, if $Z_k$ and the fresh batch are independent, the innovation is $\sqrt{h_k}Z_k+(h_k/2)\eta_k$ and has covariance

$$
\operatorname{Cov}(\text{innovation}\mid\theta_k)
=h_k I_d+\frac{h_k^2}{4}V(\theta_k).
$$

The deliberate Brownian increment has standard deviation proportional to $\sqrt{h_k}$; the stochastic-gradient error enters multiplied by $h_k$. In a direction where $V$ has eigenvalue $v$, the extra variance relative to the Brownian variance is $h_kv/4$. It tends to zero as $h_k\to0$ when $v$ remains controlled. This local scale argument motivates annealing. It does not say a particular finite run has the correct posterior law, and it says nothing by itself about stability when $V(\theta)$ grows far from the posterior mass.

Minibatch noise is usually neither Gaussian nor constant across $\theta$. It can also correlate across steps under epoch sampling. It therefore cannot be treated as a free replacement for $Z_k$. Removing the Gaussian term gives a stochastic optimization update, whose noise may shrink near a mode or point in wrong directions. A sampler must represent posterior spread, not merely wander around an optimizer's solution. The fixed-step analysis of [Vollmer, Zygalakis and Teh (2016)](https://www.jmlr.org/papers/volume17/15-494/15-494.pdf) studies the extra error introduced by noisy scores in addition to Euler error.

## 34.5 Worked example A: a Gaussian noise microscope

Take $\pi=N(0,1/\lambda)$ with $\lambda>0$, so $G(x)=-\lambda x$. For this example only, model the score error directly by independent $\eta_k$ of mean zero and variance $v<\infty$, independent of all past states and of $Z_k$. It is an illustrative additive-noise model, not a claim that an arbitrary data set creates state-independent score noise. At constant step $h$, the recurrence is

$$
X_{k+1}=aX_k+\tfrac h2\eta_k+\sqrt h Z_k,
\qquad a=1-\tfrac{h\lambda}{2}.
$$

There is a stable stationary solution when $|a|<1$, equivalently $0<h\lambda<4$. Independent, centered innovations give stationary mean zero and the variance equation

$$
Q=a^2Q+h+\frac{h^2v}{4},
\qquad
Q=\frac{1+hv/4}{\lambda(1-h\lambda/4)}.
$$

The target variance is $1/\lambda$. The denominator $1-h\lambda/4$ is Euler discretization inflation; the numerator $1+hv/4$ is the additional score-noise inflation. Only second moments and independence were used. If $\eta_k$ is non-Gaussian, the stationary distribution need not be Gaussian even though this variance formula is exact.

For $\lambda=1$, $h=0.2$, and $v=4$, the target variance is $1$, full-gradient ULA has variance $1/0.95=1.05263$, and the noisy-score recurrence has $1.2/0.95=1.26316$. At $h=0.1$, the last variance falls to $1.1/0.975=1.12821$, but the lag-one coefficient grows from $0.9$ to $0.95$. Smaller steps lower stationary bias while giving less motion per iteration. Even an infinite run at a fixed nonzero $h$ converges, when stable, to this *wrong* second moment. A short run adds initialization error and Monte Carlo variation on top of it; a tiny reported MCSE addresses only the latter, conditional on an appropriate stationary regime.

Run `python examples/ch34.py` from the repository root to compare these exact values with seeded simulations. Agreement is approximate because the sample second moments come from finite, correlated trajectories.

## 34.6 Worked example B: normal data and an exact control variate

Let $y_i\mid\theta\sim N(\theta,1)$ independently and $\theta\sim N(0,1)$. Choose $N=100$ observations, 50 equal to $-0.7$ and 50 equal to $1.3$. Their mean is $0.3$ and population variance is $1$. Completing the square gives

$$
\theta\mid y\sim N\left(\frac{\sum_i y_i}{N+1},\frac1{N+1}\right)
=N\left(\frac{30}{101},\frac1{101}\right).
$$

For one observation, $g_i(\theta)=y_i-\theta$; the prior score is $-\theta$. With replacement and batch size $b=10$, the estimated score is $-\theta+(N/b)\sum_j(y_{I_j}-\theta)$. Its error is $(N/b)\sum_j(y_{I_j}-\bar y)$, independent of $\theta$, and has variance $N^2/b=1000$. Thus Example A's variance calculation applies after centering at the posterior mean, with $\lambda=101$ and $v=1000$. At $h=0.002$, $h\lambda=0.202$ lies safely in the stability interval, and

$$
\frac{Q_{\mathrm{SGLD}}}{1/101}
=\frac{1+0.002(1000)/4}{1-0.002(101)/4}
=\frac{1.5}{0.9495}\approx1.57978.
$$

An *anchor control variate* uses a fixed $\theta_\star$ and precomputes $\sum_i g_i(\theta_\star)$. It estimates the score by

$$
\widehat G_{\mathrm{CV}}(\theta)=\nabla\log p_0(\theta)
+\sum_{i=1}^N g_i(\theta_\star)
+\frac Nb\sum_{j=1}^b
\bigl[g_{I_j}(\theta)-g_{I_j}(\theta_\star)\bigr].
$$

Its conditional expectation is still $G(\theta)$. In this normal model, the residual is $g_i(\theta)-g_i(\theta_\star)=-(\theta-\theta_\star)$ for *every* $i$. The batch term is then exactly $-N(\theta-\theta_\star)$: its sampling variance is zero, whatever the anchor. At the same $h$, the remaining ULA variance inflation is $1/0.9495\approx1.05319$. The anchor removes gradient noise here, not Euler bias. In a nonlinear model the residuals differ across observations and generally grow more variable as $\theta$ moves from the anchor. An anchor near posterior mass can reduce cost at a chosen accuracy, but its optimization, full-data pass, storage, and refreshes belong in the bill [Baker, Fearnhead, Fox and Nemeth, 2019](https://link.springer.com/article/10.1007/s11222-018-9826-2).

This is a deliberately revealing example rather than a scalability benchmark. Two sufficient statistics, $N$ and $\sum_i y_i$, make the full score $30-101\theta$ cheap after one pass; we can also draw directly from the known posterior. The code samples actual minibatches for SGLD and prints the target, theoretical, and empirical variances. Its special control-variate path simplifies the residual algebra and needs no repeated data access. In a generic model, evaluating $b$ residuals per step still costs data work.

## 34.7 Decreasing steps and weighted averages

One way to remove a constant-step bias asymptotically is to decrease the step size. In this section, index steps by their destination: $h_k$ advances $\theta_{k-1}$ to $\theta_k$, for $k\ge1$ (a shift of the indexing in Section 34.3). For example, $h_k=a(k+k_0)^{-\alpha}$ with $a,k_0>0$ gives cumulative simulated diffusion time $T_K=\sum_{k=1}^K h_k$. The Euler state $\theta_{k-1}$ occupies approximately $h_k$ units of this time, so the natural average of a test function is

$$
\widehat\pi_K(f)=\frac{\sum_{k=1}^K h_k f(\theta_{k-1})}{T_K}.
$$

Equal weighting of iterations would overrepresent the densely sampled, very short late time intervals relative to this occupation average; this observation alone does not establish inconsistency of every equally weighted estimator. For $1/2<\alpha\le1$, the familiar conditions $\sum_k h_k=\infty$ and $\sum_k h_k^2<\infty$ hold. These are useful sufficient *schedule* properties: there is unlimited diffusion time, while accumulated squared step lengths are finite. They are neither a standalone SGLD theorem nor necessary for every consistent weighted estimate. In fact, more detailed analyses obtain results for schedules outside this square-summable class under their own assumptions, including the well-known $k^{-1/3}$ bias–variance balance in a particular asymptotic regime [Teh, Thiery and Vollmer, 2016](https://jmlr.csail.mit.edu/papers/volume17/teh16a/teh16a.pdf).

To assert convergence for a particular model, one needs conditions controlling excursions and moments, regularity of the drift and test function, and score-noise behavior; Poisson-equation arguments enter common proofs. These controls rule out treating a formal series test as a universal guarantee. There is also a practical tension: if $h_k$ decays so fast that late moves are microscopic during the available compute budget, a theoretically valid asymptotic schedule may explore poorly now. Weighted averages from one annealed run are not a stationary-chain sample, so a routine stationary-chain ESS computed on all iterates is not automatically meaningful. Examine finite-budget accuracy with replicated runs and a reference when possible.

## 34.8 Momentum and preconditioning

Hamiltonian proposals use momentum to cross a target's geometry; [Chapter 20](20-hmc.md) explains their full-gradient construction. Simply putting independent noisy gradients into ordinary leapfrog does not preserve its intended energy behavior: repeated random kicks can heat the momentum. Stochastic-gradient Hamiltonian Monte Carlo (SGHMC) introduces friction and a matching noise mechanism so that an *idealized continuous-time* model balances this extra variability [Chen, Fox and Guestrin, 2014](https://proceedings.mlr.press/v32/cheni14.html). In implemented discrete time the gradient-noise covariance must be estimated or controlled, and integration error remains. Calling a practical uncorrected SGHMC run exact requires a separate proof.

Geometry can also be changed without momentum. With a constant symmetric positive-definite matrix $M$, the Langevin diffusion can use drift $\tfrac12 M G(\theta)$ and Brownian covariance $M\,dt$. Its SGLD Euler step is

$$
\theta_{k+1}=\theta_k+\tfrac{h_k}{2}M\widehat G(\theta_k)
+\sqrt{h_k}M^{1/2}Z_k.
$$

Pairing drift and diffusion this way preserves the desired formal continuous-time balance. Scaling only the drift or only the injected noise changes the target. A position-dependent $M(\theta)$ requires additional divergence drift terms in the diffusion; see [Chapter 23](23-riemannian.md). Estimating or adapting a preconditioner also costs work and may alter the convergence argument.

## 34.9 When data subsampling can still be exact

One should distinguish SGLD's approximate steps from methods that construct a valid extended target. [Chapter 27](27-pseudo-marginal.md) gives a pseudo-marginal route when a likelihood estimate is nonnegative and unbiased on the likelihood scale, and the algorithm retains the estimator as part of its state. An unbiased estimate of the *log* likelihood does not generally satisfy this condition. If $\widehat\ell=\ell+\epsilon$ with $\epsilon=+a$ or $-a$ equally likely, then

$$
\mathbb E[e^{\widehat\ell}]
=e^\ell\frac{e^a+e^{-a}}2
=e^\ell\cosh(a)>e^\ell\quad(a\ne0).
$$

This is Jensen's inequality in a two-point example. Likewise, substituting a noisy estimate into an MH acceptance probability does not automatically preserve detailed balance. Exact subsampling constructions need their own bounds, auxiliary variables, or extended-target identity. [Bardenet, Doucet and Holmes (2017)](https://www.jmlr.org/papers/volume18/15-205/15-205.pdf) survey both opportunities and constraints for tall-data MH. Exact continuous-time event methods in [Chapter 33](33-nonreversible.md) are another route when event rates can be simulated or bounded correctly. Each claim of exactness belongs to the particular construction and its assumptions, not to subsampling itself.

### 34.9.1 Firefly augmentation: an explicit exact target

Here is a concrete use of likelihood bounds, following the auxiliary construction of [Maclaurin and Adams (2014), Section 2](https://www.cs.princeton.edu/~rpa/pubs/maclaurin2014firefly.pdf). Write $L_i(\theta)=p(y_i\mid\theta)$, assume the posterior normalizing constant $Z=\int p_0(\theta)\prod_iL_i(\theta)\,d\theta$ is finite and positive, and choose fixed functions satisfying $0<B_i(\theta)\le L_i(\theta)$ throughout the prior support. Introduce one binary variable $z_i$ per observation and define a density with respect to Lebesgue measure in $\theta$ and counting measure in $z$:

$$
\widetilde\pi(\theta,z)=\frac{p_0(\theta)}{Z}
\prod_{i:z_i=0}B_i(\theta)
\prod_{i:z_i=1}\{L_i(\theta)-B_i(\theta)\}.
$$

Summing over all $2^N$ binary configurations replaces each factor by $B_i+(L_i-B_i)=L_i$. Therefore $\sum_z\widetilde\pi(\theta,z)=\pi(\theta)$, with the *same* normalizing constant. The binary variables are conditionally independent and

$$
\Pr(z_i=1\mid\theta)=1-\frac{B_i(\theta)}{L_i(\theta)}.
$$

A value $z_i=1$ is called bright. Factoring the joint density differently gives the conditional target for a parameter update:

$$
H_z(\theta)=p_0(\theta)\prod_{i=1}^N B_i(\theta)
\prod_{i:z_i=1}\left\{\frac{L_i(\theta)}{B_i(\theta)}-1\right\}.
$$

Only bright observations require the residual likelihood factor. Bounds need not be normalized densities. Their product must have a cheap representation for this factorization to save work. For fixed bounds, a complete transition is:

```text
state = (theta, z), initialized where the joint density is positive
repeat:
    select r indices uniformly with replacement, independently of the state
    for each selected index i:
        draw z_i ~ Bernoulli(1 - B_i(theta)/L_i(theta))
    propose theta_new ~ q(. | theta), keeping this updated z fixed
    accept with min(1, H_z(theta_new)*q(theta | theta_new)
                       / (H_z(theta)*q(theta_new | theta)))
    on rejection retain theta and the updated z
    record theta, including rejections
```

Each selected-coordinate Gibbs update preserves the joint law; conditional MH also preserves it, so their composition does. Every coordinate must have opportunities to refresh, and the parameter proposal must permit exploration of the joint support for convergence from initialization. Exactness here means the invariant marginal is the posterior. It does not mean a finite run contains independent posterior draws. Freezing all $z_i=0$ indefinitely instead targets $p_0\prod_i B_i$, which is generally wrong.

### 34.9.2 A Gaussian bound that exposes the cost caveat

For the data of Example B, set $m=30/101$, choose $c>0$, and use the deliberately simple global bounds

$$
L_i(\theta)=\frac{e^{-(y_i-\theta)^2/2}}{\sqrt{2\pi}},
\qquad B_i(\theta)=L_i(\theta)e^{-c(\theta-m)^2}.
$$

Their ratio is in $(0,1]$, with equality at $m$. The product is computable from $N,\sum_i y_i,\sum_i y_i^2$ after one data pass:

$$
\log\prod_i B_i(\theta)
=-\frac N2\log(2\pi)
-\frac12\left\{\sum_i y_i^2-2\theta\sum_i y_i+N\theta^2\right\}
-Nc(\theta-m)^2.
$$

Writing $J=\sum_i z_i$, the conditional parameter density simplifies, up to a constant independent of $\theta$, to

$$
H_z(\theta)\propto
\exp\left[-\left(\frac{101}{2}+100c\right)(\theta-m)^2\right]
\left\{e^{c(\theta-m)^2}-1\right\}^{J}.
$$

For $J=0$ the last factor is omitted; for $J>0$ its value is zero at $m$. If all variables were kept dark, the variance would be $1/(101+200c)$, much too small. Refreshing brightness and retaining the residual factors is what restores the marginal variance $1/101$.

Conditional on $\theta$, the expected bright count is $100\{1-e^{-c(\theta-m)^2}\}$. Integrating against $\theta-m\sim N(0,1/101)$ gives

$$
\mathbb E_\pi[J]
=100\left\{1-\left(1+\frac{2c}{101}\right)^{-1/2}\right\}.
$$

At $c=1$, the average is about $0.976$ bright observations. This is a stationary expectation, not a fixed upper bound on the active set. The normal integral follows by combining the quadratic exponents and taking the ratio of their Gaussian normalizers. `examples/ch34.py` checks the marginal identity by enumerating binary states for three observations, verifies this expected count by numerical integration, and runs a short joint sampler using the Gaussian simplification.

This construction teaches correctness but offers no speedup over direct normal sampling: the original likelihood already has sufficient statistics. In a general model, count bound construction and preprocessing, storage for the auxiliary state, brightness-refresh likelihood evaluations, and both current and proposed bright residual evaluations. Refreshing all $N$ variables at every iteration costs a full pass. Refreshing only $r$ saves immediate work but can slow the evolution of the auxiliary state. Poor bounds can make most observations bright, and repeatedly scanning an $N$-entry array just to find bright indices defeats the intended saving. These implementation tradeoffs are discussed in [Maclaurin and Adams (2014), Sections 3–4](https://www.cs.princeton.edu/~rpa/pubs/maclaurin2014firefly.pdf). The useful comparison remains total work for a chosen posterior accuracy. The event-rate route in [Chapter 33](33-nonreversible.md) uses a different invariance construction.

## 34.10 Measuring accuracy per unit work

For a useful comparison, first name a posterior functional: mean, variance, and a tail probability often reveal different failures. Obtain analytic truth in a toy model, or a trusted and independently checked full-data reference in a harder model. Then compare full-data ULA, SGLD at several $h$ and $b$, and an anchor version when relevant. Run several independent seeds; include warmup, initialization, anchor optimization, and refresh passes in total data accesses. Reporting both wall time and observation-score evaluations exposes effects of implementation and hardware. [Chapter 35](35-parallel.md) handles parallel execution, while [Chapter 47](47-benchmark-lab.md) develops fuller benchmark design.

| Method | Recurring score reads | Other cost and principal error |
| --- | ---: | --- |
| Full-data ULA | $N$ | Constant-step Euler bias; no minibatch variance |
| Constant-step SGLD | $b$ | Euler bias plus minibatch distortion |
| Anchor SGLD | Often $b$ paired residuals | Anchor pass or optimization; variance depends on anchor distance |
| Decreasing-step SGLD | $b$ | Finite-time exploration and weighted-estimator error |

At a fixed step, ordinary trace, between-chain, and MCSE checks can reveal nonstationarity or high Monte Carlo variation *for the approximate process*. Agreement of several chains around the same wrong variance is entirely possible. For decreasing steps, the process is time-inhomogeneous, so blindly applying stationary-chain diagnostics to its whole output confuses changing time scales with equilibrium behavior. Neither a reassuring diagnostic nor a small MCSE certifies closeness to $\pi$. Model assumptions, approximation bias, initialization error, and simulation variance need separate checks.

An error budget helps keep those checks distinct. If $\widehat\mu$ estimates $\pi(f)$, its mean squared error across independent runs is $\operatorname{Var}(\widehat\mu)+\{\mathbb E\widehat\mu-\pi(f)\}^2$. With a fixed step and enough burn-in, the first term tends to fall as the run grows, but the second generally approaches the squared difference between the approximate invariant expectation and $\pi(f)$. Extra iterations alone cannot remove that floor. With decreasing steps the picture is different: discretization bias may decrease, yet late steps move less and the weighted estimate has its own finite-time variation. A single-run MCSE is not an estimate of total mean squared error unless the approximation bias and initialization effects have been established negligible by other means.

### 34.10.1 Small transition errors can be amplified by slow mixing {#sec-34101-small-transition-errors-can-be-amplified-by-slow-mixing}

**Predict first.** An approximate sampler changes every transition row by at most $0.0009$ in total variation. Must its stationary probability of an event be within $0.001$ of the intended value? What else would we need to know? A transition error is an input to an error budget; the chain's ability to forget past errors controls how they accumulate.

Use row-stochastic matrices on states $\{0,1\}$, with $0<d<s\le1/2$:

$$
P_s=\begin{pmatrix}1-s&s\\s&1-s\end{pmatrix},\qquad
Q_{s,d}=\begin{pmatrix}1-s-d&s+d\\s-d&1-s+d\end{pmatrix}.
$$

The intended kernel $P_s$ has stationary probabilities $(1/2,1/2)$. The approximate kernel shifts probability $d$ toward state one in **both** rows. With the convention $\|\mu-\nu\|_{\mathrm{TV}}=\tfrac12\sum_x|\mu(x)-\nu(x)|$, its maximum row error is exactly $d$. Stationary flow between the two states gives

$$
\nu(1)=\frac{s+d}{(s+d)+(s-d)}
=\frac12+\frac{d}{2s},\qquad
\|\nu-\pi\|_{\mathrm{TV}}=\frac{d}{2s}.
$$

Both kernels are strictly positive and converge to their own unique stationary laws. Nevertheless, $s=1/1000$ and $d=9/10000$ give row error $0.0009$ and stationary probability $\nu(1)=19/20=0.95$, instead of $0.5$: the bias is $0.45$. Taking more iterations cannot change that stationary answer. Even a sequence $s\downarrow0$, $d=0.9s$ has row errors tending to zero while retaining this bias; its mixing becomes slower at the same time.

The accumulation is visible before stationarity. Put $r=1-2s$. If $p_n$ and $q_n$ are the probabilities of state one after $n$ transitions of $P_s$ and $Q_{s,d}$, then

$$
p_{n+1}=s+rp_n,\qquad q_{n+1}=s+d+rq_n.
$$

Start both chains with the **same arbitrary distribution**. Their difference starts at zero and obeys $q_{n+1}-p_{n+1}=d+r(q_n-p_n)$, so

$$
\|\mu Q_{s,d}^{\,n}-\mu P_s^n\|_{\mathrm{TV}}
=d\sum_{j=0}^{n-1}r^j
=\frac{d(1-r^n)}{2s}.
$$

At $n=0$ use the empty sum, equal to zero; at $s=1/2$ use this convention without needing to interpret a displayed $0^0$. For the numerical example the distances are $0.0009$ after one transition and approximately $0.389221$ after 1,000 transitions, tending to $0.45$. A similar first update has not guaranteed similar long-run laws.

### A finite-state perturbation bound and its assumptions

Let $P$ and $Q$ be stochastic kernels on the same finite state space. Define the uniform row error and the **Dobrushin contraction coefficient of $P$** by

$$
\varepsilon=\max_x\|Q(x,\cdot)-P(x,\cdot)\|_{\mathrm{TV}},\qquad
\rho=\max_{x,y}\|P(x,\cdot)-P(y,\cdot)\|_{\mathrm{TV}}<1.
$$

This $\rho$ controls contraction in total variation; it is not a general spectral gap. To see the contraction, write the positive and negative parts of $\alpha-\beta$ as $t a$ and $t b$, where $t=\|\alpha-\beta\|_{\mathrm{TV}}$ and $a,b$ are probability laws. Mixtures of transition rows differ by at most $\rho$, giving $\|\alpha P-\beta P\|_{\mathrm{TV}}\le\rho\|\alpha-\beta\|_{\mathrm{TV}}$. If $t=0$ the claim is immediate. Likewise convexity gives $\|\alpha Q-\alpha P\|_{\mathrm{TV}}\le\varepsilon$ for any probability law $\alpha$.

For common initial law $\mu$, set $e_n=\|\mu Q^n-\mu P^n\|_{\mathrm{TV}}$. Insert $\mu Q^nP$ between the next laws and use the triangle inequality:

$$
e_{n+1}\le\varepsilon+\rho e_n,\qquad e_0=0,\qquad
e_n\le\min\left\{1,\ \varepsilon\sum_{j=0}^{n-1}\rho^j\right\}.
$$

For a stationary comparison, state the hypotheses explicitly: $\pi P=\pi$ and $\nu Q=\nu$. Finite stochastic matrices have stationary laws, although an arbitrary $Q$ need not have a unique one or converge to it. For any such $\nu$,

$$
\|\nu-\pi\|_{\mathrm{TV}}
=\|\nu Q-\pi P\|_{\mathrm{TV}}
\le\varepsilon+\rho\|\nu-\pi\|_{\mathrm{TV}},\qquad
\boxed{\ \|\nu-\pi\|_{\mathrm{TV}}
\le\min\left\{1,\frac{\varepsilon}{1-\rho}\right\}.\ }
$$

This elementary one-step contraction argument is a special case of [Mitrophanov (2005), Theorems 3.2–3.3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/26A9854BCB8D103B3A63A9B272616EC0/S0021900200001066a.pdf/sensitivity-and-convergence-of-uniformly-ergodic-markov-chains.pdf), taking the skeleton length $m=1$. Its more general results also handle contraction over several steps.

In our two-state example, both kernels have contraction coefficient $\rho=1-2s$, despite their different stationary laws. The displayed finite and stationary bounds are attained exactly, with $\varepsilon=d$. Slow forgetting makes the factor $1/(1-\rho)=1/(2s)$ large. For an event indicator, the stationary probability bias is bounded by TV, and the event $\{1\}$ attains it here. For a desired stationary TV tolerance $\tau$, a sufficient error budget is $\varepsilon\le\tau(1-\rho)$; Exercise 3 changes the target and computes this budget afresh.

This example does not turn a minibatch score bound into a uniform transition-TV bound. Establishing $\varepsilon$ and $\rho$ for a particular SGLD model is a separate task, and the strong one-step contraction assumption need not hold. The finite example explains why a verified local approximation must be interpreted together with stability or mixing information. [The chapter executable](examples/ch34.py) computes both transition laws with rational arithmetic, verifies the stationary hypotheses, and compares the exact discrepancy with the bound; it does not infer approximation bias from an empirical MCSE.

The function $f$ matters. Example B's stationary mean is right because of linearity and a centered score estimate, even though its stationary variance is too large. Reporting only the posterior mean would miss the error. A tail event such as $f(\theta)=\mathbf1\{\theta>c\}$ may be more sensitive still, particularly when a decision depends on a small probability. In a realistic study, report estimates and replicated error for several decision-relevant functions, with the same compute budget and reference for each. That is a more informative claim of scalability than “one iteration is a thousand times cheaper.”

**Lab.** In the diagnostics lab, vary **AR(1) correlation** and **Samples / iterations**, then repeat with different seeds. Compare the empirical autocorrelation curve with its theoretical curve and observe the reported mean, exact finite-run mean ESS, its long-run approximation, and the theoretical standard error of the mean. The lab generates one stationary Gaussian AR(1) trace per run. Ask why reducing its reported standard error says nothing about Example A's $26\%$ variance inflation at $h=0.2$: that distortion concerns the target law itself. The browser lab does **not** implement SGLD or measure its approximation bias. The executable example above supplies that experiment.

<div class="mcmc-lab" data-lab="diagnostics"></div>

### Key takeaways

- An unbiased minibatch score uses the $N/b$ likelihood scaling and includes the prior once.
- SGLD replaces a full score in an unadjusted Langevin step. Its finite-step stationary law is generally approximate.
- Injected Gaussian noise has variance $O(h)$ per step; minibatch-score noise contributes $O(h^2)$ when its variance is controlled.
- Smaller steps trade lower approximation bias for more correlated iterations. Decreasing steps call for time-weighted estimates and model-specific convergence conditions.
- Positive likelihood bounds can define an exact auxiliary target; the brightness variables and their update cost are part of the algorithm.
- An honest scaling result compares error for the same estimand at the same total cost, including preprocessing.

## Exercises

<div class="exercise" id="mcmc-34-scalable-ex-1">

**1. Minibatch moments.** Derive the conditional mean and covariance of $\widehat G$ for independent uniform sampling with replacement. Show every factor of $N$ and $b$.

<details>
<summary>Solution</summary>

At fixed $\theta$, each sampled $g_I$ has mean $\bar g$ and covariance $\Sigma_g$. Thus $\mathbb E\widehat G=\nabla\log p_0+(N/b)b\bar g=G$. Independent centered terms have covariance $b\Sigma_g$, so $\operatorname{Cov}(\widehat G\mid\theta)=(N/b)^2b\Sigma_g=N^2\Sigma_g/b$. The deterministic prior term contributes no covariance.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-2">

**2. Stability and variance.** For Example A, derive the stability interval and stationary variance. Does finite score-error variance imply a Gaussian stationary law?

<details>
<summary>Solution</summary>

The AR coefficient is $a=1-h\lambda/2$, and $|a|<1$ gives $0<h\lambda<4$. With independent centered errors, $Q=a^2Q+h+h^2v/4$, hence $Q=(h+h^2v/4)/(1-a^2)=(1+hv/4)/[\lambda(1-h\lambda/4)]$. Finite variance determines this moment, not the whole stationary law; a non-Gaussian error can make that law non-Gaussian.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-3">

**3. Bias against movement, then change the target.** First, with $\lambda=1$ and $v=4$, compare $h=0.2$ with $h=0.1$ using both stationary variance and lag-one coefficient. Next change Section 34.10.1's intended kernel to $P=\left(\begin{smallmatrix}1-a&a\\b&1-b\end{smallmatrix}\right)$ and its approximation to $Q=\left(\begin{smallmatrix}1-a-d&a+d\\b-d&1-b+d\end{smallmatrix}\right)$, with $a=1/50$, $b=3/50$, $d=1/200$. Find both stationary probabilities of state one, the row-TV error, both contraction coefficients, and the same-start discrepancy after $n$ transitions. Holding $a,b$ fixed, how small must this nonnegative shift $d$ be to guarantee stationary TV error at most $0.01$? Does running the original approximate chain longer satisfy that tolerance?

<details>
<summary>Solution</summary>

At $h=0.2$, $Q=1.2/0.95=1.26316$ and $a=0.9$. At $h=0.1$, $Q=1.1/0.975=1.12821$ and $a=0.95$. The smaller step is closer in variance to the target $Q=1$ but moves more slowly in iteration units. This comparison alone does not establish a net cost advantage.

For the changed binary target, $\pi(1)=a/(a+b)=1/4$ and $\nu(1)=(a+d)/(a+b)=5/16$. Both rows shift mass $d=1/200$ toward state one. Both kernels have contraction coefficient $1-a-b=23/25$, so the stationary discrepancy is

$$
\frac{d}{a+b}=\frac1{16},\qquad
\|\mu Q^n-\mu P^n\|_{\mathrm{TV}}
=\frac1{16}\left[1-\left(\frac{23}{25}\right)^n\right]
$$

for any common initial law (zero at $n=0$). The same recurrence proof applies with the common multiplier $1-a-b$. To achieve stationary error at most $1/100$, require $d\le(a+b)/100=1/1250$. This requirement respects the stochastic-matrix constraints for these $a,b$. The original shift $1/200$ exceeds that budget and has limiting error $1/16>1/100$; more iterations approach its wrong stationary law rather than remove the discrepancy. Here the budget is also necessary within this particular shift family because the perturbation bound is attained.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-4">

**4. Schedule test.** For $h_k=a(k+k_0)^{-\alpha}$, classify $\alpha=0.4,0.75,1.2$ under $\sum h_k=\infty$ and $\sum h_k^2<\infty$. What can you conclude about SGLD consistency?

<details>
<summary>Solution</summary>

The first sum diverges for $\alpha\le1$; the second converges for $2\alpha>1$. Only $0.75$ satisfies both. At $0.4$ the squared steps are not summable; at $1.2$ total simulated time is finite. This is only a schedule classification. Consistency needs conditions on the target, score noise, and test function, and some analyses allow other schedules.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-5">

**5. Anchor algebra.** Verify unbiasedness of the anchor score estimator. Prove its minibatch variance is zero for the normal likelihood, and explain why that need not happen for logistic regression.

<details>
<summary>Solution</summary>

The expected residual sum is $N(\bar g(\theta)-\bar g(\theta_\star))$. Adding $\sum_i g_i(\theta_\star)$ recovers $\sum_i g_i(\theta)$, and the prior score is exact. For $g_i(\theta)=y_i-\theta$, every residual equals $-(\theta-\theta_\star)$, so no sampled-index randomness remains. In logistic regression residual scores depend on each observation's covariates and generally differ across $i$.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-6">

**6. Log noise and an experiment.** If $\widehat\ell=\ell\pm a$ with equal probabilities, is $e^{\widehat\ell}$ unbiased for $e^\ell$? Propose a matched-work experiment that could detect the variance distortion in Example B.

<details>
<summary>Solution</summary>

No: $\mathbb E[e^{\widehat\ell}]=e^\ell\cosh(a)>e^\ell$ for $a\ne0$. Thus an unbiased log likelihood alone cannot justify a pseudo-marginal acceptance rule. For Example B, run independent full-score ULA and $b=10$ SGLD replicates at a specified step and matched total observation-score reads (deliberately implement each full score as a fresh $100$-observation pass and each minibatch as $10$ reads). Estimate each run's variance after a stated warmup, compare it with the analytic $1/101$, and report variability across seeds. Repeat at another $h$; include any preprocessing in the work tally. The exact variance formulas predict the distortion before simulation. Report the sufficient-statistic full-score implementation separately: its preprocessing costs $100$ reads, but its later scores require none, so the fresh-pass experiment alone cannot establish a real speedup.

</details>

</div>

<div class="exercise" id="mcmc-34-scalable-ex-7">

**7. Brightness and exactness.** For the Gaussian bounds in Section 34.9.2 with $c=1$, derive the conditional variance when every variable is dark and compute the stationary expected bright count. Explain why a sampler that leaves all variables dark fails even though evaluating its target is cheap.

<details>
<summary>Solution</summary>

The original prior times likelihood is proportional to $e^{-101(\theta-m)^2/2}$. Multiplying by $e^{-100(\theta-m)^2}$ gives precision $301$, so the all-dark conditional variance is $1/301$, not $1/101$. Under the correct marginal posterior, $\mathbb E[e^{-(\theta-m)^2}]=\sqrt{101/103}$ by a Gaussian integral. Hence $\mathbb E[J]=100(1-\sqrt{101/103})\approx0.97563$. Fixing all $z_i=0$ permanently samples only one conditional density; it omits the positive contributions from other binary configurations needed to recover the posterior. Gibbs brightness refreshes and conditional parameter updates preserve the complete joint target instead.

</details>

</div>

## Sources and further reading

- [Welling and Teh (2011), “Bayesian Learning via Stochastic Gradient Langevin Dynamics”](https://icml.cc/2011/papers/398_icmlpaper.pdf): original SGLD construction and motivation.
- [Teh, Thiery and Vollmer (2016), “Consistency and Fluctuations for Stochastic Gradient Langevin Dynamics”](https://jmlr.csail.mit.edu/papers/volume17/teh16a/teh16a.pdf): decreasing-step theory, weighted averages, and assumptions.
- [Vollmer, Zygalakis and Teh (2016), “Exploration of the (Non-)Asymptotic Bias and Variance of Stochastic Gradient Langevin Dynamics”](https://www.jmlr.org/papers/volume17/15-494/15-494.pdf): fixed-step error and minibatch effects.
- [Baker, Fearnhead, Fox and Nemeth (2019), “Control Variates for Stochastic Gradient MCMC”](https://link.springer.com/article/10.1007/s11222-018-9826-2): anchor score estimators and qualified scaling analysis.
- [Chen, Fox and Guestrin (2014), “Stochastic Gradient Hamiltonian Monte Carlo”](https://proceedings.mlr.press/v32/cheni14.html): friction and momentum under stochastic gradients.
- [Bardenet, Doucet and Holmes (2017), “On Markov Chain Monte Carlo Methods for Tall Data”](https://www.jmlr.org/papers/volume18/15-205/15-205.pdf): exactness constraints and subsampling strategies.
- [Maclaurin and Adams (2014), “Firefly Monte Carlo: Exact MCMC with Subsets of Data”](https://www.cs.princeton.edu/~rpa/pubs/maclaurin2014firefly.pdf): positive likelihood bounds, binary augmentation, and implementation costs.
