# 06. Variance reduction

**Learning goals.** By the end of this chapter, you should be able to derive the uncertainty of a conditioned, controlled, paired, or stratified estimator; choose the correct independent unit for its standard error; and compare methods at equal computational cost. You should also be able to explain why an estimator that helps with independent draws need not help with a dependent Markov chain.

**Prerequisites.** Conditional expectation and variance from [Chapter 02](02-probability.md), seeded simulation from [Chapter 04](04-numerics.md), and independent Monte Carlo standard errors from [Chapter 05](05-monte-carlo.md). Sections 7–9 preview controls for more advanced Monte Carlo methods; kernels and long-run variance are developed in [Chapters 07](07-finite-chains.md) and [13](13-mc-error.md).

## 1. What is the scarce resource?

Suppose we want $\mu=\mathbb E[f(X)]$. With independent draws and finite $\sigma_f^2=\operatorname{Var}(f(X))$, the ordinary sample mean is unbiased and has variance $\sigma_f^2/n$. Its root mean squared error is therefore $\sigma_f/\sqrt n$. Doubling precision by this route needs roughly four times as many draws. Variance reduction asks whether the same expectation can be estimated with a less noisy random quantity or a more deliberate sampling design.

We will use the integral

$$
\mu=\int_0^1 e^u\,du=e-1\approx1.718281828
$$

as a running example. Its known answer lets us check the mathematics and code; in a real problem the integral would be unknown. More generally, write the mean squared error of an estimator $T$ as

$$
\mathbb E[(T-\mu)^2]=\operatorname{Var}(T)+\{\mathbb E[T]-\mu\}^2.
$$

A small sample variance is no victory if the procedure has silently changed the target or introduced serious bias. Also count the right resource. If one method needs two evaluations of $f$ per independent replicate, comparing equal numbers of replicates gives it twice the evaluation budget. If a control takes a costly pilot run, include the pilot. For an unbiased method with per-replicate variance $v$ and cost $c$, a large budget $B$ yields approximately $n=B/c$ replicates and estimator variance $vc/B$. Thus $vc$, rather than $v$ alone, is a useful first comparison. Setup cost and evaluation cost may scale differently, so time actual code when they matter. This cost-aware perspective follows the treatment in [Owen's variance-reduction chapter](https://artowen.su.domains/mc/Ch-var-basic.pdf).

The chapter's opening figure compares $e^U$ with a flatter controlled integrand having the same expectation. Section 3 derives that correction. Pairing and stratification will then change where evaluations occur on the unit interval.

## 2. Average out a simulation stage

Let $H=H(X,Z)$ be square integrable, and suppose we can calculate $g(X)=\mathbb E[H\mid X]$. If we draw independent copies of $X$, averaging $g(X)$ estimates the same target as averaging independently generated copies of $(X,Z)$: the tower property gives $\mathbb E[g(X)]=\mathbb E[H]$. The total variance identity gives the exact improvement,

$$
\operatorname{Var}(H)
=\operatorname{Var}(g(X))
+\mathbb E[\operatorname{Var}(H\mid X)].
$$

The second term cannot be negative. Conditioning has analytically averaged out the random variation in $Z$ that remained after seeing $X$. Equality holds precisely when that conditional variance is zero almost surely. This is often called **Rao–Blackwellization**, although this Monte Carlo argument does not require a sufficient statistic. See [Owen's discussion of conditioning](https://artowen.su.domains/mc/Ch-var-basic.pdf).

**Worked example 1: a predictive event.** Draw $P\sim\operatorname{Uniform}(0,1)$, then $B\mid P\sim\operatorname{Bernoulli}(P)$. We want $\mu=\Pr(B=1)=\mathbb E[P]=1/2$. A direct indicator $B$ is Bernoulli$(1/2)$ marginally, so $\operatorname{Var}(B)=1/4$. The conditional event probability is $g(P)=P$, whose variance is $1/12$. At $n=1200$ independent outer draws, their exact standard errors are

$$
\operatorname{SE}(\bar B)=\sqrt{\frac{1}{4(1200)}}\approx0.01443,
\qquad
\operatorname{SE}(\bar P)=\sqrt{\frac{1}{12(1200)}}\approx0.00833.
$$

The variance is three times smaller at equal outer sample count. Generating $B$ also costs another random draw, so the cost comparison favors conditioning here. In posterior prediction from [Chapter 03](03-bayesian-targets.md), the analogous choice is to average $\Pr(Y_{\mathrm{new}}>y_0\mid\theta)$ over parameter draws instead of simulating one new $Y$ and recording its exceedance indicator. This improves the estimate of **that event probability**; it does not manufacture complete predictive draws.

For independent outer draws, the usual sample variance of the $g(X_i)$ values divided by $n$ estimates the variance of their mean. For a Markov chain, conditioning each recorded value still preserves its stationary expectation, but the change in *long-run* variance requires separate analysis. Collapsing a Gibbs sampler changes its transition mechanism as well as its measurements; [Chapter 10](10-gibbs.md) treats that distinction.

## 3. Use a known expectation as an error correction

Suppose $C$ is correlated with $H=f(X)$ and its mean $c=\mathbb E[C]$ is known. For a **fixed** coefficient $\beta$, define

$$
Y_\beta=H-\beta(C-c).
$$

The correction has expectation zero, so $\mathbb E[Y_\beta]=\mu$ for every $\beta$. If $H$ tends to be high whenever $C$ is high, a positive $\beta$ subtracts some of that predictable high value. Expanding the square after centering gives

$$
\operatorname{Var}(Y_\beta)=\operatorname{Var}(H)
-2\beta\operatorname{Cov}(H,C)+\beta^2\operatorname{Var}(C).
$$

When $0<\operatorname{Var}(C)<\infty$ and $H$ has finite variance, differentiating this quadratic gives

$$
\beta_* =\frac{\operatorname{Cov}(H,C)}{\operatorname{Var}(C)},
\qquad
\operatorname{Var}(Y_{\beta_*})
=\operatorname{Var}(H)(1-\rho_{HC}^2).
$$

The correlation expression assumes $\operatorname{Var}(H)>0$; if $H$ is constant, $\beta_*=0$ gives zero variance directly. The reduction is governed by squared correlation, not by how similar the physical units of $H$ and $C$ look. A constant $C$ has no random error to correct; its variance is zero and the division is undefined. With several controls, let $\mathbf C$ have known mean $\mathbf c$ and a nonsingular covariance matrix $\Sigma_{CC}$. The optimal fixed vector is $\boldsymbol\beta_*=\Sigma_{CC}^{-1}\operatorname{Cov}(\mathbf C,H)$. In software, solve the linear system instead of explicitly forming an inverse. Nearly redundant controls make that solve unstable and can yield disappointing performance on fresh draws.

For the running integral, take $H=e^U$ and $C=U$, whose mean is $1/2$. Direct integration gives

$$
\operatorname{Var}(H)=\frac{e^2-1}{2}-(e-1)^2\approx0.24204,
\quad
\operatorname{Cov}(H,U)=\int_0^1ue^u\,du-\frac{e-1}{2}
=\frac{3-e}{2}.
$$

Because $\operatorname{Var}(U)=1/12$, the optimal coefficient is $\beta_*=6(3-e)\approx1.69031$. The controlled observation $e^U-\beta_*(U-1/2)$ is much flatter than $e^U$ across the interval, yet its average remains $e-1$. A control with an *estimated* mean $c$ is a different estimator; uncertainty in that estimate must be accounted for.

### Fitting a coefficient safely

In a realistic integral, $\beta_*$ is unknown. If we fit $\widehat\beta$ using the very observations whose corrected mean we report, then $\widehat\beta$ is random and generally correlated with $\bar C-c$. The resulting mean $\bar H-\widehat\beta(\bar C-c)$ need not be exactly unbiased at finite $n$. A small residual variance on training data can also reflect overfitting.

An independent pilot sample gives a clean construction. Fit $\widehat\beta$ on the pilot; then collect a new production sample of size $n$. Assume $H,C$ have finite second moments and $\mathbb E|\widehat\beta|<\infty$; the latter ensures that the production estimator is integrable. Conditional on the pilot, $\widehat\beta$ is fixed, so

$$
\mathbb E[\bar H-\widehat\beta(\bar C-c)\mid\widehat\beta]=\mu,
\qquad
\operatorname{Var}(\bar H-\widehat\beta(\bar C-c)\mid\widehat\beta)
=\frac{\operatorname{Var}(H-\widehat\beta(C-c))}{n}.
$$

The pilot costs evaluations and leaves uncertainty in the achieved variance reduction, but under these assumptions it protects the unbiasedness argument. A finite unconditional variance also follows if $\mathbb E[\widehat\beta^2]<\infty$. An almost-zero pilot control variance can produce enormous fitted coefficients; bounding the fitted coefficient at a predetermined finite limit ensures both moments while preserving independence from production draws. Independent-data cross-fitting can reuse observations by fitting each observation's coefficient without that observation; its overlapping fitted models make a naive residual standard error questionable. Randomly splitting one Markov trajectory does **not** create independent training and evaluation samples.

## 4. Pair high and low outcomes

If $U$ is uniform on $(0,1)$, then so is $1-U$. For each independent $U_i$, define an **antithetic pair average**

$$
A_i=\frac{f(U_i)+f(1-U_i)}{2}.
$$

The $A_i$ are independent across $i$ and each has expectation $\mu$. Let $\sigma^2=\operatorname{Var}(f(U))$ and $\gamma=\operatorname{Cov}(f(U),f(1-U))$. Since the two margins have the same variance,

$$
\operatorname{Var}(A_i)=\frac{\sigma^2+\gamma}{2},
\qquad
\operatorname{Var}\left(\frac1m\sum_{i=1}^m A_i\right)
=\frac{\sigma^2+\gamma}{2m}.
$$

This uses $2m$ function evaluations. Ordinary independent sampling with $2m$ evaluations has variance $\sigma^2/(2m)$, so the pair design helps exactly when $\gamma<0$ under that budget. In one dimension, if $f$ is increasing, $f(U)$ rises as $f(1-U)$ falls. An independent-copy covariance identity, $2\operatorname{Cov}(V,W)=\mathbb E[(V-V')(W-W')]$, confirms $\gamma\le0$ for square-integrable monotone $f$. It may be zero; monotonicity is a sufficient sign argument, not a promise of a large gain. [Owen](https://artowen.su.domains/mc/Ch-var-basic.pdf) develops the general antithetic design.

The **replication unit** is $A_i$. A standard error computed by pretending the $2m$ component values are independent will usually be wrong. Use the sample variance of the $m$ pair averages, divided by $m$. The method can also lose: for $f(u)=(u-1/2)^2$, reflection returns exactly the same value. Then $m$ pairs contain only $m$ distinct results, and their variance is twice the variance of $2m$ independent evaluations.

For $f(u)=e^u$, the product inside every pair is $e^u e^{1-u}=e$. Hence $\gamma=e-(e-1)^2\approx-0.23421$. The pair values are close to the desired integral because the upward fluctuation on one side is countered by a downward fluctuation on the other. This is why their variance is much smaller than that of individual $e^U$ values.

## 5. Require coverage with strata

Partition the support into disjoint sets $S_1,\ldots,S_K$ with known probabilities $p_h>0$ summing to one. In stratum $h$, draw $n_h\ge1$ independent observations from the conditional distribution $X\mid X\in S_h$. Suppose samples from different strata are independent. With $\mu_h=\mathbb E[f(X)\mid X\in S_h]$ and conditional variance $\sigma_h^2$, the estimator and its variance are

$$
\widehat\mu_{\mathrm{str}}=\sum_{h=1}^K p_h\bar f_h,
\qquad
\operatorname{Var}(\widehat\mu_{\mathrm{str}})
=\sum_{h=1}^K\frac{p_h^2\sigma_h^2}{n_h}.
$$

The weights $p_h$ are essential: equal weighting works only when the strata have equal probability. If $n_h=np_h$ are feasible integers, then the variance becomes $n^{-1}\sum_h p_h\sigma_h^2$. By total variance, plain iid sampling has per-draw variance $\sum_h p_h\sigma_h^2+\operatorname{Var}(\mu_H)$, where $H$ is the random stratum index. Proportional stratification has removed the between-stratum component, provided the conditional draws can be made at comparable cost. This is the coverage argument behind stratification; see [Owen's derivation](https://artowen.su.domains/mc/Ch-var-basic.pdf).

If the $\sigma_h$ are known and draw costs equal, minimize $\sum_h p_h^2\sigma_h^2/n_h$ subject to $\sum_h n_h=n$. Ignoring integer and lower-bound constraints, a Lagrange multiplier gives $n_h\propto p_h\sigma_h$, called Neyman allocation. With per-draw cost $c_h$ and a cost constraint $\sum_h c_h n_h=B$, it becomes $n_h\propto p_h\sigma_h/\sqrt{c_h}$. In practice, enforce the budget and at least one draw in every positive-probability stratum; a zero-variance stratum still needs its mean supplied or measured. At least two draws per stratum are needed to estimate its variance from those draws. Estimated $\sigma_h$ values require a pilot and can be especially unreliable in rare strata. Splitting every coordinate in a high-dimensional problem creates too many cells; Latin hypercube designs cover one-dimensional margins but do not guarantee improvement for every interaction.

For $U\sim\operatorname{Uniform}(0,1)$, let $S_h=[h/K,(h+1)/K)$ for $h=0,\ldots,K-1$. Each has probability $1/K$. If $a=h/K$ and $b=(h+1)/K$, then the conditional moments of $e^U$ are

$$
\mu_h=K(e^b-e^a),\qquad
\mathbb E[e^{2U}\mid S_h]=\frac K2(e^{2b}-e^{2a}).
$$

Thus $\sigma_h^2=K(e^{2b}-e^{2a})/2-\mu_h^2$. At $K=12$ and $n_h=100$, the exact estimator variance is $1.5395\times10^{-6}$. Requiring 100 points in each of the 12 intervals fixes their representation, whereas unrestricted sampling gives random interval counts. Evaluating the conditional draws still takes 1200 exponentials.

## 6. Worked comparison at one budget

We can now compare four unbiased estimators for $\int_0^1e^u\,du$ with exactly 1200 evaluations of $e^u$ per run. The ordinary method uses 1200 independent uniforms. The paired method uses 600 independent pair averages. The control method uses the fixed analytic $\beta_*$ above with 1200 uniforms. Stratification uses 100 independent conditional uniforms in each of 12 equal-width intervals. These counts equate the expensive integrand evaluations; bookkeeping, random-number generation, and pilot work would also enter a real wall-clock comparison.

The standard-library program [examples/ch06.py](examples/ch06.py) repeats each whole computation 500 times with a fixed seed. Each repetition starts from new pseudorandom draws. The table shows the across-run sample variance beside the variance calculated from the formulas; the first-run standard error uses independent observations, **pair averages**, or stratum sample variances as appropriate.

| Method | Mean error across runs | Across-run variance | Exact variance | First-run SE |
|:--|--:|--:|--:|--:|
| Plain iid | $+0.000269$ | $0.000204209$ | $0.000201696$ | $0.014267$ |
| Antithetic | $+0.000035$ | $0.000006692$ | $0.000006521$ | $0.002529$ |
| Fixed control | $+0.000069$ | $0.000003496$ | $0.000003284$ | $0.001806$ |
| Stratified | $+0.000040$ | $0.000001560$ | $0.000001540$ | $0.001229$ |

The exact variance is the meaningful ranking for this artificial example. A different integrand could reverse it. The across-run numbers fluctuate because 500 is finite, and the mean errors fluctuate around zero; neither is an estimate of structural bias from a single run. Combining controls and strata can help, but the control's known mean and the variance calculation must respect the stratified design. Common random numbers are related but solve a different problem: if estimating $\mu_1-\mu_2$, a shared input reduces the difference's variance when it induces positive covariance between the two estimates. Sharing randomness does not by itself lower either marginal variance.

Try the **Monte Carlo lab** below: its integrand is $\sin(k\pi x)$ for a uniform input, with $k$ set by **Integrand frequency**. Hold $k$ fixed, change **Samples / iterations** from 500 to 2000, and predict how the standard error should scale before repeating with different seeds. The widget illustrates ordinary Monte Carlo variability; it does not implement the four variance-reduction methods above. Use the executable example to study those methods at equal function-evaluation counts.

<div class="mcmc-lab" data-lab="monte-carlo"></div>

## 7. Why a Markov chain needs a different variance calculation

Now let $Y_t=f(X_t)$ come from a stationary Markov chain with $\mathbb E[Y_t]=\mu$ and finite second moment. Write $\gamma(k)=\operatorname{Cov}(Y_0,Y_k)$. Counting all pairs in the variance of the sample mean gives the exact finite-$n$ identity

$$
\operatorname{Var}(\bar Y_n)=\frac1n\left[\gamma(0)
+2\sum_{k=1}^{n-1}\left(1-\frac{k}{n}\right)\gamma(k)\right].
$$

If $\sum_{k\ge1}|\gamma(k)|<\infty$, then $n\operatorname{Var}(\bar Y_n)$ tends to $v_\infty=\gamma(0)+2\sum_{k\ge1}\gamma(k)$. A Markov-chain central limit theorem requires its own regularity hypotheses; absolute covariance summability here is used for this variance limit, not claimed as a universal CLT guarantee. [Chapter 13](13-mc-error.md) develops long-run variance estimation and effective sample size.

This formula changes the criterion for variance reduction. A conditioned observation may have smaller $\gamma(0)$ but larger positive lag covariances. An iid-optimal control coefficient need not minimize $v_\infty$. Stationarity also matters: if the chain begins away from its target, a zero-mean control under the target does not erase finite-run initial-state bias. And any postprocessing of a trajectory leaves a missed mode missed. For particular data-augmentation Gibbs schemes, [Liu, Wong, and Kong](https://www2.stat.duke.edu/homeweb/scs/Courses/Stat376/Papers/ConvergeRates/GibbsSampling/LiuWongKongBiometrika1994.pdf) establish covariance comparisons under their stated setup; their result should not be promoted to a blanket theorem for arbitrary MCMC conditioning. Kernel design and mixing are separate topics in [Chapter 12](12-kernel-design.md).

### A control that halves marginal variance but worsens the mean

Consider an explicit stationary chain $X_t=(A_t,B_t)$ on four states, with $A_t,B_t\in\{-1,1\}$. At each step, refresh $A_t$ as an independent fair sign. Independently, keep $B_t$ unchanged with probability $0.95$ and flip it with probability $0.05$. Initialize $B_0$ as a fair sign, independent of the entire $A$ sequence. The invariant distribution is uniform on the four states: each coordinate remains a fair sign and the two processes are independent. All transition probabilities are positive, so there is no inaccessible state or periodicity issue.

Estimate $\mathbb E[A_t]=0$ using $H_t=A_t$ and the known-zero-mean control $C_t=A_t+B_t$. This is a diagnostic example with a known answer. Under the stationary distribution, $\operatorname{Var}(H_t)=1$, $\operatorname{Var}(C_t)=2$, and $\operatorname{Cov}(H_t,C_t)=1$. The iid-optimal coefficient is consequently $\beta_*=1/2$. Its corrected observation is $(A_t-B_t)/2$, with marginal variance $1/2$.

But $\mathbb E[B_{t+1}\mid B_t]=0.9 B_t$, so repeated conditioning gives $\operatorname{Cov}(B_0,B_k)=0.9^k$. For any fixed $\beta$, the corrected process is $Y_t=(1-\beta)A_t-\beta B_t$. Independence of the two processes gives

$$
\gamma_Y(0)=(1-\beta)^2+\beta^2,
\qquad
\gamma_Y(k)=\beta^2(0.9)^k\quad(k\ge1).
$$

Summing the geometric series therefore yields

$$
v_\infty(\beta)=(1-\beta)^2+19\beta^2.
$$

At $\beta=0$ this is $1$; at $\beta=1/2$ it is $5$. The correction has imported persistent noise into an originally independent measurement. Differentiating the new quadratic gives the coefficient that minimizes long-run variance: $\beta_\infty=1/20=0.05$, with $v_\infty=0.95$. The distinction between marginal regression and long-run optimization is developed generally by [Dellaportas and Kontoyiannis, Section 2, equations (16)–(18)](https://arxiv.org/pdf/1008.1355); the four-state calculation here makes that distinction explicit without needing their operator machinery.

The limiting coefficient is not an exact finite-run variance. At length $n$, replace $19$ by

$$
\tau_n=1+2\sum_{k=1}^{n-1}(1-k/n)(0.9)^k,
\qquad
\operatorname{Var}(\bar Y_n)=\frac{(1-\beta)^2+\beta^2\tau_n}{n}.
$$

At $n=1200$, $\tau_n\approx18.85$. The three choices give:

| Control coefficient | Marginal variance | Long-run variance coefficient | Exact variance of the 1200-step mean |
|:--|--:|--:|--:|
| $0$ | $1$ | $1$ | $0.000833333$ |
| $0.5$ | $0.5$ | $5$ | $0.004135417$ |
| $0.05$ | $0.905$ | $0.95$ | $0.000791354$ |

The finite-$n$ minimizing coefficient is $1/(1+\tau_n)$, slightly different from $0.05$. The executable example checks these finite-run variances directly using the four-by-four transition matrix and simulates 500 independent stationary trajectories. Within each trajectory it compares coefficients using the same states; uncertainty across complete trajectories remains the relevant replication level. This comparison concerns postprocessing at a fixed trajectory length; extra control-evaluation cost would also enter a timing comparison.

## 8. Controls supplied by a transition kernel

Let $P$ be a Markov transition kernel that leaves a probability distribution $\pi$ invariant, and define $(PG)(x)=\mathbb E[G(X_{t+1})\mid X_t=x]$. If $G$ and $PG$ are integrable under $\pi$, invariance gives $\pi(PG)=\pi(G)$. Therefore

$$
U_G(x)=G(x)-(PG)(x),\qquad \pi(U_G)=0.
$$

This gives a control even when $\pi(G)$ itself is unknown. We can estimate $\pi(f)$ from values of $f(X_t)-\beta U_G(X_t)$, provided we can evaluate $PG$ accurately. That proviso is often the hard part: a transition rule may be easy to simulate from but difficult to integrate against. The identity is exact for an invariant kernel; a numerical approximation to $PG$ can introduce bias unless separately corrected.

The ideal **Poisson equation** is $G-PG=f-\pi(f)$. If it were solved exactly, then $f-U_G$ would be the constant $\pi(f)$ and its sampling variance would be zero. But the right side contains the unknown answer, and solving the equation is usually as demanding as the integration problem. Practical methods approximate $G$ in a tractable function family and test gains on independent runs. For a dependent trajectory, $\beta$ should target the long-run variance of the corrected process, rather than the ordinary one-step regression variance from Section 3. Specialized reversible-kernel estimators are described by [Dellaportas and Kontoyiannis](https://arxiv.org/abs/1008.1355); their efficiency results rely on the paper's kernel and moment conditions. No iid coefficient formula is being asserted as generally optimal for MCMC.

## 9. Density-based controls and learned functionals

There is a second way to obtain a known zero mean when a target density is differentiable. Suppose $\pi$ is positive and continuously differentiable on an open domain $D$, and $\phi:D\to\mathbb R^d$ is continuously differentiable. Assume that $D$ can be exhausted by bounded subdomains with piecewise smooth boundaries, so the divergence theorem applies on each. Define the Langevin Stein operator

$$
(T_\pi\phi)(x)=\nabla\cdot\phi(x)
+\phi(x)\cdot\nabla\log\pi(x)
=\frac{\nabla\cdot(\pi(x)\phi(x))}{\pi(x)}.
$$

If the terms are integrable and the boundary flux of $\pi\phi$ tends to zero along that exhaustion (accounting for both domain boundaries and infinity), integration by parts gives $\pi(T_\pi\phi)=0$. An unknown normalizing constant cancels from $\nabla\log\pi$. The boundary condition is substantive: for a uniform density on $(0,1)$ and $\phi(x)=x$, the score is zero, $T_\pi\phi=1$, and its mean is one. The endpoint flux does not vanish. Choosing $\phi(x)=x(1-x)$ makes both endpoint values zero and yields $T_\pi\phi=1-2x$, whose mean is zero.

For a standard normal density, the score is $-x$. Taking $\phi(x)=x$ gives $T_\pi\phi=1-x^2$. Thus, for the pedagogical task $\pi(x^2)=1$, subtracting $-T_\pi\phi=x^2-1$ leaves a constant. This is an exact known-moment demonstration, not a claim that we have found an unknown integral for free. Finite bases of such functions produce ordinary controls; larger learned spaces lead to **control functionals**. [Oates, Girolami, and Chopin](https://arxiv.org/abs/1410.2392) study this construction and its boundary and sampling assumptions.

A related surrogate formulation makes the training issue transparent. If a fitted function $s$ is $\pi$-integrable and has a computable exact integral $\pi(s)$, evaluate $\pi(s)+n^{-1}\sum_{i=1}^n(f(X_i)-s(X_i))$ on independent iid evaluation draws. For each fixed training set, its expectation over evaluation draws is exactly $\pi(f)$. To conclude unconditional unbiasedness, also require integrability over training randomness; for example, $\mathbb E_{\mathrm{train}}[|\pi(s)|+\pi(|f-s|)]<\infty$ suffices. Smoothness, approximation quality, integration of $s$, and sampling assumptions govern any rate faster than $n^{-1/2}$; there is no automatic acceleration. Reusing a single dependent MCMC trajectory for both fitting and evaluation loses this simple conditional-unbiasedness proof. Check the particular method's assumptions before applying it.

## 10. Choosing a method and reporting the result

Start with the estimand and identify what is already known exactly: a conditional expectation, a control mean, stratum probabilities, a transition expectation $PG$, or a density score with valid boundary behavior. Then derive the estimator's expectation under the actual sampling design. Only after that ask whether its variance falls at equal cost. For independent designs, report uncertainty from the independent unit: draws, pair averages, or stratum-specific means. For Markov output, estimate long-run variance and examine exploration separately; a smaller spread of recorded values does not certify convergence. [Chapter 14](14-diagnostics.md) explains why even apparently healthy diagnostics are evidence, not proof.

An honest comparison states the evaluation count, any pilot cost, the precise estimator, the error quantity, and what is assumed exact. Importance sampling from [Chapter 05](05-monte-carlo.md) also changes the simulation problem, but corrects a changed sampling distribution with weights; its proposal choice and weight instability deserve their own analysis. In very rare-event work, reducing routine variance is sometimes less urgent than ensuring the important region is visited at all; [Chapter 44](44-decisions.md) returns to that problem.

### Exercises

<div class="exercise" id="mcmc-06-variance-reduction-ex-1">

**1. Conditioning and equality.** Let $H$ be square integrable and $g(X)=\mathbb E[H\mid X]$. Prove that replacing $H$ by $g(X)$ cannot increase the variance. State exactly when the variances agree.

<details>
<summary>Solution</summary>

By the tower property, both have mean $\mathbb E[H]$. Expanding $H-\mathbb E[H]=(H-g)+(g-\mathbb E[H])$ gives a zero cross term because $\mathbb E[H-g\mid X]=0$. Hence $\operatorname{Var}(H)=\operatorname{Var}(g)+\mathbb E[\operatorname{Var}(H\mid X)]$. Equality holds if and only if $\operatorname{Var}(H\mid X)=0$ almost surely, equivalently $H=g(X)$ almost surely.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-2">

**2. Best scalar control.** Starting from $Y_\beta=H-\beta(C-c)$, derive the variance-minimizing $\beta$ and the residual variance in terms of correlation. What changes if $C$ is constant?

<details>
<summary>Solution</summary>

Expand $\operatorname{Var}(Y_\beta)=\sigma_H^2-2\beta\sigma_{HC}+\beta^2\sigma_C^2$. If $\sigma_C^2>0$, its derivative vanishes at $\beta_*=\sigma_{HC}/\sigma_C^2$ and its positive second derivative confirms a minimum. Substitution yields $\sigma_H^2-\sigma_{HC}^2/\sigma_C^2=\sigma_H^2(1-\rho_{HC}^2)$. If $H$ is constant, its covariance with $C$ is zero and $\beta_*=0$ is optimal; use the variance expression before introducing the undefined correlation. If $C$ is constant, then $C-c=0$ almost surely: every $\beta$ gives the original estimator, and no division by $\sigma_C^2$ is allowed.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-3">

**3. Antithetic failure.** For $f(u)=(u-1/2)^2$, compare $m$ antithetic pairs with $2m$ independent function evaluations at the same evaluation cost.

<details>
<summary>Solution</summary>

Reflection leaves $f$ unchanged: $f(1-u)=f(u)$. Each pair average is just $f(U_i)$, so the paired estimator has variance $\sigma_f^2/m$. The ordinary $2m$-draw mean has variance $\sigma_f^2/(2m)$. Antithetics double the variance here, despite both estimators being unbiased.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-4">

**4. Allocate two strata.** Let $(p_1,p_2)=(0.9,0.1)$, $(\sigma_1,\sigma_2)=(1,6)$, and $n=300$ at equal per-draw cost. Find Neyman allocation and its variance. Compare with proportional allocation.

<details>
<summary>Solution</summary>

The allocation weights are $p_h\sigma_h=(0.9,0.6)$, so $n_1=180$ and $n_2=120$. Its variance is $0.9^2/180+0.1^2(6^2)/120=0.0045+0.003=0.0075$. Proportional allocation gives $(270,30)$ and variance $0.81/270+0.36/30=0.003+0.012=0.015$. Here the small stratum has much larger conditional variation, so it receives more draws than its probability alone suggests.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-5">

**5. A pilot-fitted control.** The independent-pilot comparison in [examples/ch06.py](examples/ch06.py) estimates $\beta$ by sample covariance divided by sample variance using 60 pilot draws, then uses 1140 fresh production draws. Reproduce it and vary the pilot size while keeping the total at 1200 evaluations. Over repeated complete runs, compare production error with pilot residual variance. Explain why fitting and evaluating on one sample may alter finite-sample bias.

<details>
<summary>Solution</summary>

Generate a pilot $(H_i,C_i)$, calculate $\widehat\beta=\sum(H_i-\bar H)(C_i-\bar C)/\sum(C_i-\bar C)^2$ when the denominator is positive, using zero otherwise. Clip it to a predetermined finite interval, such as $[-10,10]$, to guarantee finite moments, then discard the pilot for evaluation. Draw new $(H_j,C_j)$ and average $H_j-\widehat\beta(C_j-c)$. Conditional on the pilot, $\widehat\beta$ is fixed and the production mean is unbiased. Across independent complete runs, its empirical mean error should fluctuate around zero; the pilot residual variance may be optimistically small because the coefficient was selected on those data. If the evaluation data also fit $\widehat\beta$, the random coefficient can correlate with $\bar C-c$, so zero expectation of $C-c$ alone no longer proves exact unbiasedness. Include pilot evaluations in a fixed-budget comparison. Completing the variance quadratic also gives an exact account of fitting error:

$$
\operatorname{Var}(T)=\frac{\operatorname{Var}(Y_{\beta_*})+
\operatorname{Var}(C)\mathbb E[(\widehat\beta-\beta_*)^2]}{n},
$$

where $n$ is the production count, the pilot is independent, and the coefficient has finite second moment. This follows by taking the expectation of the conditional variance; the conditional mean is constant, so there is no additional between-pilot mean term. The program compares the across-run variance against the average exact conditional variance, and prints training and production residual variances separately.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-6">

**6. A boundary trap.** For the uniform density on $(0,1)$, examine $\phi(x)=x$ and $\phi(x)=x(1-x)$ in the one-dimensional Stein operator. Which yields a valid zero-mean control, and why?

<details>
<summary>Solution</summary>

The score is zero, so $T_\pi\phi=\phi'$. For $\phi(x)=x$, the derivative is one and its integral is one; the boundary term $\phi(1)-\phi(0)=1$ does not vanish. For $\phi(x)=x(1-x)$, the derivative is $1-2x$, whose integral is zero, and $\phi(0)=\phi(1)=0$. Only the second satisfies the required zero-flux condition.

</details>

</div>

<div class="exercise" id="mcmc-06-variance-reduction-ex-7">

**7. Tune a control for a dependent mean.** In the four-state example, let the persistent sign have lag-one correlation $\rho\in[0,1)$, so its flip probability is $(1-\rho)/2$. Derive the best coefficient for long-run variance and determine when the iid-optimal coefficient $1/2$ makes the average worse than using no control.

<details>
<summary>Solution</summary>

The persistent component has covariance sum $\tau=(1+\rho)/(1-\rho)$. Hence $v_\infty(\beta)=(1-\beta)^2+\tau\beta^2$, minimized at $\beta_\infty=1/(1+\tau)=(1-\rho)/2$, with minimum $\tau/(1+\tau)=(1+\rho)/2$. At $\beta=1/2$, $v_\infty=(1+\tau)/4=1/[2(1-\rho)]$, which exceeds the uncontrolled value $1$ exactly when $\rho>1/2$. At $\rho=0$ the iid coefficient is optimal. All these comparisons concern the stationary long-run variance; the finite-run expression uses $\tau_n$ instead.

</details>

</div>

### Key takeaways

- Conditioning removes conditional simulation noise exactly; controls subtract a correlated quantity with known mean.
- Antithetic pairs need negative within-pair covariance, and their independent units are the pair averages.
- Stratification guarantees coverage and uses probability weights; allocation and costs determine its actual gain.
- Fitting, dependence, initialization, and numerical approximations can change bias or uncertainty. For MCMC, compare long-run variance and exploration, not just the spread of observations.
