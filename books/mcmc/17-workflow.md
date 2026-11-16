# 17. Bayesian workflow and calibration

## Learning goals and prerequisites

This chapter connects a probability model, an inference program, and the observations that motivated both. By the end, you should be able to simulate whole datasets from a prior, derive the ideal simulation-based calibration (SBC) rank distribution, design a finite SBC experiment without hiding failed fits, choose posterior predictive discrepancies, and quantify local sensitivity separately from Monte Carlo error. You will also know what each check cannot establish.

The prerequisites are conditional probability and expectation from [Chapter 02](02-probability.md), posterior prediction from [Chapter 03](03-bayesian-targets.md), independent random streams from [Chapter 04](04-numerics.md), and Monte Carlo uncertainty from [Chapters 05](05-monte-carlo.md) and [13](13-mc-error.md). [Chapter 14](14-diagnostics.md) supplies chain diagnostics; [Chapters 15](15-adaptation.md) and [16](16-geometry.md) discuss two common routes to improving a difficult computation.

## 17.1 Four questions behind an inference

Suppose a program accurately samples the posterior of a Poisson model for counts that are almost all zero or ten. The computation can be excellent while the model badly misses the pattern. Conversely, a flexible model may describe the pattern but its sampler may stay in one mode. A useful workflow asks four questions in order, then revisits them when evidence changes the answer:

1. **Meaning:** What quantity will answer the scientific or decision question, and which assumptions connect it to the observations?
2. **Implementation:** Does the program encode the intended joint distribution, including units, transformations, and selection rules?
3. **Computation:** Does the finite run explore the posterior accurately enough for that quantity?
4. **Model criticism:** Can the fitted model generate features of the observed data that matter for its intended use?

These are different claims. An invariant Markov kernel is a mathematical property of an ideal transition rule; it does not guarantee that a short run explored the target. A small Monte Carlo standard error addresses variability of a reported estimate under its sampling assumptions; it does not remove discretization error or a mistaken likelihood. A flat SBC histogram checks a prior-averaged property of an inference procedure; it does not establish that the model describes the world. The iterative workflow in [Gelman et al., *Bayesian Workflow*](https://arxiv.org/abs/2011.01808) motivates treating model development, computation, and criticism as connected investigations rather than one pass through a checklist.

Keep a short analysis ledger: the question and estimand, observational units and collection process, likelihood and prior with reasons, code version and random seeds, numerical stopping or accuracy targets, checks actually run, failures, and each revision prompted by the data. A seed lets someone repeat a computation. It cannot validate the sampling frame, the model, or a causal assumption.

## 17.2 Write the generative story first

Before fitting, state what is random. For observations $y=(y_1,\ldots,y_n)$ and parameter $\theta$, a simple joint model is $p(\theta,y)=p(\theta)p(y\mid\theta)$. The likelihood must describe the recorded data, not an idealized quantity measured before censoring, rounding, or selection unless those steps are included. A predictor may be treated as fixed by design, while a future predictor may itself need a model. In a hierarchical model, distinguish a new observation in an existing group from a new group with a newly generated group effect.

A generative program samples a parameter and then an entire dataset conditional on that *same* parameter. For reproducible synthetic experiments, use separate random streams for parameters, observations, and fitting. This helps locate errors and makes replay easier. Write the simulator as independently as practical from the fitted log density: if both call the same incorrect precision conversion, their agreement is weak evidence. Small hand-calculable cases and independent implementations provide different checks. [Chapter 18](18-sampler-engineering.md) develops software-level tests further.

For a proper prior and normalized sampling distribution, integrating out $\theta$ gives

$$
p(y)=\int p(y\mid\theta)p(\theta)\,d\theta.
$$

Simulating $\theta\sim p(\theta)$ followed by $y\sim p(y\mid\theta)$ samples from this *prior predictive* distribution without evaluating the integral. An improper prior cannot be sampled as a probability distribution, so this experiment is undefined until a proper generative prior is supplied. The existence of a proper posterior for an observed dataset does not fix that problem.

## 17.3 Inspect prior predictions in observed units

Inspect whole simulated datasets, not just isolated observations. Plot or tabulate totals, ranges, maximum values, fractions of zeros, within-group variation, and between-group variation at the actual planned sample size. Ask a domain expert whether the outcomes are plausible *before* learning the fitted posterior. This is an opportunity to catch a scale error: a prior standard deviation of 10 for a logistic-regression intercept may put most binary probabilities extremely close to zero or one even though the coefficient density looks innocuous.

Shared parameters create dependence in a prior predictive dataset. For $\theta\sim N(0,\tau^2)$ and $y_i\mid\theta\overset{\mathrm{iid}}{\sim}N(\theta,1)$, the law of total covariance yields

$$
\operatorname{Var}(y_i)=1+\tau^2,\qquad
\operatorname{Cov}(y_i,y_j)=\tau^2\quad(i\ne j).
$$

With $\tau^2=1$, each marginal observation has variance 2, but any pair has covariance 1. Drawing a fresh $\theta$ for each $y_i$ preserves each marginal variance while destroying the dataset-level structure. That wrong simulator can make checks of a sample mean or group variation misleading.

It is legitimate to revise a prior after a prior predictive check exposes an implausible implication. If the actual data have already been viewed, record that fact and the reason for revision. The revised analysis is an iterative model analysis, not an untouched pre-data prediction. Prior predictive checks ask whether assumptions can generate conceivable data; they cannot establish that the posterior computation is correct or that the data arose from the model. The [Stan guide to prior and posterior predictive checks](https://mc-stan.org/docs/stan-users-guide/posterior-predictive-checks.html) gives the corresponding simulation recipes.

## 17.4 Worked example A: a normal known answer

Let $\theta\sim N(0,\tau^2)$ and $y_i\mid\theta\overset{\mathrm{iid}}{\sim}N(\theta,1)$, with $n=4$ and observed $\bar y=0.75$. Completing the square in the log posterior gives a quadratic coefficient $1/\tau^2+n$ and a linear coefficient $\sum_i y_i$. Therefore

$$
v=\left(\tau^{-2}+n\right)^{-1},\qquad
m=v\sum_{i=1}^n y_i,\qquad
\theta\mid y\sim N(m,v).
$$

For $\tau^2=1$, $v=1/5=0.2$ and $m=0.2(4)(0.75)=0.6$. A *new* observation uses a new residual, so $y_{\mathrm{new}}\mid y\sim N(0.6,1.2)$, with the variance $1$ from observation noise plus $0.2$ from parameter uncertainty. Reporting $N(0.6,0.2)$ as the predictive distribution would quietly omit observation noise.

These numbers give a known-answer test for a fitter. Compare posterior mean, variance, and a predictive variance. A consistent discrepancy across repeated numerical runs is a reason to inspect the code; a small difference on the scale of a justified MCSE may be finite Monte Carlo fluctuation. For example, accidentally using an observation *precision* of 4 gives posterior variance $1/(1+16)=1/17$ and mean $12/17\approx0.706$, an apparently reasonable but wrong answer. A single successful test at $\bar y=0.75$ probes only one region of data and parameter space.

With $\tau^2=4$, the correct posterior has $v=1/4.25\approx0.235294$ and $m=3/4.25\approx0.705882$. This is a modeling sensitivity calculation, not Monte Carlo uncertainty: changing the prior changes the exact posterior even with unlimited computation. In this example the posterior mean moves by about 0.106, which should be compared with the scientific scale of the estimand and with the MCSE of any simulated estimate.

## 17.5 Why ideal SBC ranks are uniform

The known-answer test can be extended across the prior distribution. For experiment $b=1,\ldots,B$, independently generate $\theta_b\sim p(\theta)$ and $y_b\sim p(y\mid\theta_b)$, fit the model to $y_b$, and obtain $L$ **independent exact** draws $\theta_{b1},\ldots,\theta_{bL}\sim p(\theta\mid y_b)$. For a scalar test quantity $f(\theta,y_b)$ whose conditional distribution is continuous, define

$$
R_b=\sum_{\ell=1}^{L}
\mathbf{1}\{f(\theta_{b\ell},y_b)<f(\theta_b,y_b)\}.
$$

The key step is conditional. Bayes' rule applied to the joint simulation says that **given $y_b$**, its generating $\theta_b$ has distribution $p(\theta\mid y_b)$. The $L$ fitted draws are independently generated from that same conditional distribution and independently of $\theta_b$ given $y_b$. Hence the $L+1$ values of $f$ are conditionally iid. With no ties, permutation symmetry gives every value the same chance to occupy each ordered position. The generating value therefore has rank $0,1,\ldots,L$ with conditional probability $1/(L+1)$ each. Integrating over $y_b$ retains that discrete uniform distribution. This is the mathematical basis of SBC [Talts et al., *Validating Bayesian Inference Algorithms with Simulation-Based Calibration*](https://arxiv.org/abs/1804.06788).

For a discrete quantity or a finite-precision statistic with ties, strict-less comparisons do not have uniform ranks: all equal values can pile up at the same rank. One remedy is to attach independent continuous random tie breakers to all $L+1$ values and rank the pairs lexicographically. Equivalently, if $a$ fitted values are strictly smaller and $t$ equal the generating value, draw an integer $J$ uniformly from $0,\ldots,t$ and report $a+J$. The extra randomness restores exchangeability of the ordered pairs; it does not change the fitted posterior. The continuous normal examples below need no tie rule in exact arithmetic.

This calibration experiment averages over parameters drawn from the prior and datasets drawn from the sampling model. It does **not** assert frequentist coverage at every fixed $\theta$, nor accuracy conditional on the one observed dataset. Those are different probability statements.

## 17.6 A finite SBC experiment and its limits

The accompanying [executable example](examples/ch17.py) runs $B=1000$ normal-model experiments with $L=99$ iid analytic posterior draws per fit. There are 100 possible ranks. Ten bins each collect ten consecutive ranks, so their expected count is $1000/10=100$. Bin counts fluctuate even for a perfect algorithm; a visually uneven bar is not automatically a failure. Several independently defined test quantities and repeated experiments make a pattern more persuasive than one histogram. If you draw reference bands from binomial calculations, say whether they cover one bin at a time or all bins simultaneously; pointwise bands are not simultaneous guarantees.

The script compares three procedures. The exact analytic posterior gives approximately flat parameter ranks. A deliberately overconfident procedure samples $N(m,v/4)$: its draws are too close to $m$, so generating parameters more often land below all draws or above all draws, producing excess edge ranks. A deliberately wrong procedure ignores $y$ and returns iid prior draws. Surprisingly, its **parameter** ranks are also flat when averaged over prior-generated experiments. It compares $L+1$ independent prior values, so unconditional exchangeability holds even though its draws are generally not posterior draws. This counterexample is a central reason that flat marginal SBC plots cannot certify an algorithm [Modrák et al., *The Choice of Test Quantities Shapes Sensitivity*](https://doi.org/10.1214/23-BA1404).

The same script ranks $f(\theta,y)=\log p(y\mid\theta)$ for the prior-only procedure. Here $y$ is fixed within a fit, and the generating $\theta$ is posterior distributed conditional on that $y$, while prior-only draws usually fit the data less well. The resulting ranks tend to be high. Data-dependent statistics and scientifically relevant joint functions can expose errors missed by coordinate ranks. No small, fixed list of quantities detects every wrong algorithm; rank shapes suggest bugs but do not identify them uniquely.

For real MCMC, $B$ is the number of generated datasets, $L$ the number of retained draws *per fit*, and the iterations per fit include initialization and warmup. Ordinary adjacent MCMC states are correlated, so the iid proof above no longer applies verbatim. Thinning until dependence is small can be a pragmatic approximation, but no finite thinning interval proves independence; replacing $L$ by an estimated effective sample size inside the rank formula does not repair its exact distribution. Check chains within fits, use a sufficient run budget, and consider the practical guidance in the [Stan SBC chapter](https://mc-stan.org/docs/stan-users-guide/simulation-based-calibration.html). Record nonconvergence, numerical errors, and excluded fits with their generating parameter regions. Silently deleting them conditions the experiment on successful fitting and can hide precisely the problematic regions.

### 17.6.1 Worked stationary reference: correct marginals, nonuniform ranks

The conditional iid proof in Section 17.5 and the dependence warning above concern the joint sampling experiment, not only the distribution of each retained draw. We can calculate that distinction exactly, even when initialization is already stationary.

**One generated dataset, one truth, and two fitted draws.** Fix a generated dataset $y$ from the correct prior-predictive experiment. Let $X=f(\theta,y)$ be a scalar test quantity with continuous conditional posterior CDF $F_y$. Bayes' rule makes the generating value $X_0$ posterior distributed given $y$, so
$$
U_0=F_y(X_0)\mid y\sim\operatorname{Uniform}(0,1).
$$
Use fitting randomness independent of the generating parameter given $y$. We describe the fitted draws in the same CDF coordinates; this transformation preserves their ranks almost surely.

Start $U_1\sim\operatorname{Uniform}(0,1)$, independently of $U_0$. At each transition, independently copy the current fitted value with probability $r$, or replace it by a fresh independent uniform value with probability $1-r$, where $0\le r<1$. In kernel notation,
$$
K_r(u,dv)=r\,\delta_u(dv)+(1-r)\Pi(u,dv),
\qquad \Pi(u,dv)=dv\quad(0\le v\le1).
$$
The refresh draws and copy/refresh decisions are independent of truth. The generating value $U_0$ is not a state of the fitted chain and is never used to refresh it.

Uniform measure is invariant: both copying a uniform state and independently refreshing it leave its marginal law uniform. Also
$$
K_r(u,A)\ge(1-r)\operatorname{Uniform}(A).
$$
The positive refresh probability makes this chain ergodic, with a geometric convergence bound. Every retained fitted value already has the exact conditional posterior marginal after transforming back by the posterior quantile function.

This is a **diagnostic reference construction**: it assumes access to the conditional posterior CDF and exact independent refreshes. It does not give a practical sampler for an unknown posterior. Its purpose is to isolate dependence while removing initialization error and marginal posterior error.

**Predict before calculating.** For
$$
R=\mathbf1\{U_1<U_0\}+\mathbf1\{U_2<U_0\},
$$
does stationarity force the ranks $0,1,2$ to be equally likely? Could the average rank look correct even if the histogram does not?

Condition on the single fitted-chain transition. If it refreshes, all three values are independent uniforms, giving rank probabilities $(1/3,1/3,1/3)$. If it copies, the fitted values agree and
$$
R=2\mathbf1\{U_1<U_0\};
$$
its rank probabilities are $(1/2,0,1/2)$. Combining these two cases gives
$$
\Pr(R=0,1,2)
=\left(\frac{2+r}{6},\frac{1-r}{3},\frac{2+r}{6}\right).
$$
Each fitted draw has the right marginal distribution, but their dependence changes the rank law. At $r=1/2$, it is
$$
\Pr(R=0,1,2)=\left(\frac5{12},\frac16,\frac5{12}\right).
$$

The mean and variance make two different features visible:
$$
E[R]=\frac{1-r}{3}+2\frac{2+r}{6}=1,
$$
$$
E[R^2]=\frac{5+r}{3},
\qquad
\operatorname{Var}(R)=\frac{2+r}{3}.
$$
The ideal three-point uniform law also has mean one. Checking only average rank misses the change. The differences from its three probabilities are $r/6,-r/3,r/6$, so the total variation distance is
$$
\left\|\mathcal L(R)-\operatorname{Unif}\{0,1,2\}\right\|_{\rm TV}
=\frac12\left(\frac r6+\frac r3+\frac r6\right)=\frac r3.
$$
For $r=1/2$, the variance is $5/6$ and this distance is $1/6$.

The excess edge ranks here occur with exact posterior marginals. In Section 17.6, iid draws from a posterior that is too narrow also produced excess edges. That histogram shape alone therefore does not identify posterior underdispersion. The exact rank reference must account for how the fitted draws were generated.

Fitted copies are not ties with truth: although $U_1=U_2$ with probability $r$, each has probability zero of equalling the independent continuous $U_0$. Strict comparisons therefore need no truth-tie randomization in this reference experiment. Discrete quantities or numerical rounding can create truth ties and require the separate treatment in Section 17.5.

**Thinning changes this reference without making it exactly iid.** In $k$ transitions, no refresh occurs with probability $r^k$. After at least one refresh, the final state is uniform and independent of the initial state. Hence
$$
K_r^k=r^kI+(1-r^k)\Pi,\qquad k\ge1.
$$
This also supplies an exact contraction family. For any two initial probability laws $\mu,\nu$,
$$
\|\mu K_r^k-\nu K_r^k\|_{\rm TV}
=r^k\|\mu-\nu\|_{\rm TV}.
$$
In the rank experiment, initialization is uniform already; this contraction does not remove the dependence between retained states.

If the two fitted draws are $k$ transitions apart, replace $r$ by $r^k$ in the rank formulas:
$$
\Pr(R_k=0,1,2)
=\left(\frac{2+r^k}{6},\frac{1-r^k}{3},\frac{2+r^k}{6}\right),
$$
$$
E[R_k]=1,\qquad
\operatorname{Var}(R_k)=\frac{2+r^k}{3},\qquad
d_{\rm TV}=\frac{r^k}{3}.
$$
For example, $r=1/2$ and spacing two give $(3/8,1/4,3/8)$, with total variation distance $1/12$ from the uniform rank reference. For $0<r<1$, every finite spacing leaves a positive discrepancy, though it tends to zero as spacing increases. When $r=0$, the draws are iid immediately. The excluded boundary $r=1$ never refreshes and is nonergodic.

This verifies the existing finite-thinning warning for this particular kernel; it is not a universal prescription for choosing a thinning interval. Independent exact draws are sufficient for the iid rank proof, not necessary for every possible uniform rank law. We have not asserted that every dependent collection has nonuniform ranks, or that replacing a draw count by an ESS determines the exact joint rank distribution. With a fixed $r$, the conditional law above is the same for every generated $y$, so averaging over generated datasets retains it. It is not a coverage assertion conditional on a fixed generating parameter.

[Talts et al., Sections 4.2 and 5.1 and Appendix B](https://arxiv.org/pdf/1804.06788v2) discuss dependence artifacts, practical thinning, and the independent-draw rank argument. Their guidance supplies context; the finite PMFs and contraction calculations here are direct derivations. The following posterior-predictive section asks a separate question about new data under a fitted model.

## 17.7 Posterior prediction asks a different question

After fitting the observed $y$, generate a posterior draw $\theta^{(s)}$ and then a *new* dataset $y_{\mathrm{rep}}^{(s)}\sim p(y_{\mathrm{rep}}\mid\theta^{(s)})$. Integrating out $\theta$ describes the distribution:

$$
p(y_{\mathrm{rep}}\mid y)=\int p(y_{\mathrm{rep}}\mid\theta)p(\theta\mid y)\,d\theta.
$$

Specify the replication target. Repeating observations in existing groups holds their fitted group effects in the posterior draw. Predicting new groups requires generating new effects from the group-level model. Changing this choice changes the predictive question. When the sampling process includes missingness, censoring, or selection, replicate the process relevant to the check rather than comparing a simulated latent measurement with a recorded one.

Choose a discrepancy $T(y)$ because it matters for the analysis: zero count, maximum, a slope in residuals, a lag correlation, or between-group dispersion. Compare $T(y)$ with the distribution of $T(y_{\mathrm{rep}}^{(s)})$. A model can reproduce the mean because the posterior adapts to it while systematically missing dispersion or dependence. The posterior predictive tail area $\Pr\{T(y_{\mathrm{rep}})\ge T(y)\mid y\}$ is a useful descriptive summary, but reusing $y$ both for fitting and comparison means it is generally not uniformly distributed under a true model. It should not be read as a classical calibrated $p$-value. Held-out prediction changes the question again: it evaluates forecasts on observations not used for fitting, with the holdout mechanism and intended prediction task made explicit. The [Stan predictive-check guide](https://mc-stan.org/docs/stan-users-guide/posterior-predictive-checks.html) distinguishes these uses.

## 17.8 Worked example B: good computation, poor count model

Consider ten observed counts $[0,0,0,0,0,10,10,10,10,10]$. Suppose $y_i\mid\lambda\overset{\mathrm{iid}}{\sim}\operatorname{Poisson}(\lambda)$ and $\lambda\sim\operatorname{Gamma}(2,1)$ in **shape–rate** notation. The likelihood contributes $\lambda^{\sum y_i}e^{-n\lambda}$, so conjugacy gives

$$
\lambda\mid y\sim\operatorname{Gamma}(2+50,1+10)
=\operatorname{Gamma}(52,11),\qquad
E(\lambda\mid y)=52/11\approx4.72727.
$$

The observed zero fraction is $0.5$. At a fixed $\lambda$, the probability of a zero is $e^{-\lambda}$. Integrating over the exact posterior,

$$
E\left[\frac{1}{10}\sum_i\mathbf{1}(y_{\mathrm{rep},i}=0)\mid y\right]
=E(e^{-\lambda}\mid y)
=\left(\frac{11}{12}\right)^{52}\approx0.01084.
$$

The last equality follows from the Gamma density integral: multiplying its $e^{-11\lambda}$ factor by $e^{-\lambda}$ changes the rate from 11 to 12. The observed unbiased sample variance is $250/9\approx27.78$, far above the fitted Poisson conditional variance near its mean. That comparison is suggestive but not a probability statement, because replicated datasets have sampling variation and $\lambda$ uncertainty. The code draws $\lambda$ from its exact posterior and ten new counts, recording the zero count and sample variance in 10,000 replicas. This estimates how often datasets as extreme as the observed one occur under *this fitted model*. Its printed count depends on the seed and simulation budget; an event absent from 10,000 simulations is evidence of severe mismatch at that resolution, not a proof of probability zero.

We can resolve the rare zero-count event without waiting for it to appear in simulations. Write $Z=\sum_i\mathbf{1}(y_{\mathrm{rep},i}=0)$. Conditional on $\lambda$, $Z\sim\operatorname{Binomial}(10,e^{-\lambda})$; after averaging over $\lambda$, the indicators are dependent. Expanding the binomial factor gives

$$
\Pr(Z=k\mid y)=\binom{10}{k}\sum_{j=0}^{10-k}
(-1)^j\binom{10-k}{j}\left(\frac{11}{11+k+j}\right)^{52}.
$$

Summing $k=5,\ldots,10$ yields $7.28054\times10^{-7}$. Thus 10,000 independent replicas have probability $(1-7.28054\times10^{-7})^{10000}\approx0.992746$ of showing no such event. Zero simulated exceedances are exactly what we should usually expect here. The example evaluates the alternating sum with decimal arithmetic to limit cancellation. Treating $Z$ instead as binomial with probability $E(e^{-\lambda}\mid y)$ would discard the dependence induced by the shared rate.

The model has only one rate for all ten observations. Heterogeneous units, temporal regimes, excess-zero mechanisms, a measurement artifact, or selection could explain the pattern, but the counts alone do not choose among them. A mixture or overdispersed likelihood deserves consideration only with a coherent story for units and collection. More posterior iterations will sharpen the estimate for the Poisson model; they cannot make its predictive distribution generate the observed two-cluster pattern. This illustrates why model criticism follows a computation check even when the posterior is analytic.

## 17.9 Sensitivity is a separate uncertainty source

An analysis is sensitive when defensible changes in assumptions materially move the intended estimand or prediction. Refit a small, reasoned set of alternatives: prior scales grounded in domain ranges, a likelihood with heavier tails where outliers are plausible, a measurement-error model where instruments are noisy, or a changed prediction horizon. Keep the estimand and data definition stable while comparing versions, unless the change itself is the question. Compare changes with a substantive tolerance and with the MCSE of each simulated estimate. If the change is much larger than MCSE, more iterations do not resolve the modeling uncertainty.

The normal example is a transparent table of exact sensitivity:

| Prior variance $\tau^2$ | Posterior mean $m$ | Posterior variance $v$ | New-observation variance $1+v$ |
| ---: | ---: | ---: | ---: |
| 1 | 0.600000 | 0.200000 | 1.200000 |
| 4 | 0.705882 | 0.235294 | 1.235294 |

These exact values have no MCSE. A simulated implementation would report MCSE for its estimated means or probabilities separately. For the count model, changing the prior within a reasonable range may barely alter the central fitted rate because 50 events dominate, yet changing the one-rate likelihood can greatly alter the predicted zero count. Sensitivity to model structure and sensitivity to a numerical algorithm are different matters. Avoid revising models solely until a chosen plot looks acceptable; each revision should correspond to a stated substantive hypothesis. Formal model evidence has its own prior sensitivity and is treated in [Chapter 26](26-normalizers.md).

### 17.9.1 A derivative that can be estimated from one fit

A sensitivity table explores selected alternatives. To see which direction matters near a baseline, let $\eta$ be a scalar modeling choice and write

$$
\pi_\eta(\theta\mid y)=\frac{q_\eta(\theta)}{Z_\eta},\qquad
s_\eta(\theta)=\frac{\partial}{\partial\eta}\log q_\eta(\theta).
$$

Here $q_\eta$ is the unnormalized posterior and $s_\eta$ is its *score with respect to the modeling choice*, not a derivative with respect to the sampled parameter. Assume common support, positive finite $Z_\eta$ near the baseline, differentiability, and integrable bounds allowing differentiation of both $\int q_\eta$ and $\int gq_\eta$. Require the resulting covariance to exist. For an estimand $g(\theta)$ that does not itself depend on $\eta$, the quotient rule gives

$$
\begin{aligned}
\frac{\partial}{\partial\eta}E_\eta[g]
&=\frac{\int gq_\eta s_\eta\,d\theta}{Z_\eta}
-\frac{\int gq_\eta\,d\theta}{Z_\eta}
 \frac{\int q_\eta s_\eta\,d\theta}{Z_\eta}\\
&=E_\eta[gs_\eta]-E_\eta[g]E_\eta[s_\eta]
=\operatorname{Cov}_\eta(g,s_\eta).
\end{aligned}
$$

The normalization derivative supplies the centering term. If $g=g_\eta$, add $E_\eta[\partial g_\eta/\partial\eta]$. Moving support requires separate boundary analysis. This exact-posterior identity is discussed in [Giordano, Broderick, and Jordan, Section 2](https://jmlr.org/papers/volume19/17-670/17-670.pdf).

For our normal example choose $\eta=\log\tau^2$. The likelihood stays fixed, and differentiating the normal log prior gives

$$
s_\eta(\theta)=-\frac12+\frac{\theta^2}{2e^\eta}.
$$

Under $N(m,v)$, $E(\theta^3)=m^3+3mv$ and $E(\theta^2)=m^2+v$, so $\operatorname{Cov}(\theta,\theta^2)=2mv$. Consequently

$$
\frac{\partial m}{\partial\eta}=\frac{mv}{\tau^2}.
$$

At the baseline $m=0.6$, $v=0.2$, $\tau^2=1$, this derivative is $0.12$. Increasing the log prior variance by $0.1$ predicts $m\approx0.612$; direct calculation at $\tau^2=e^{0.1}$ gives $0.611641$. But extrapolating to $\tau^2=4$ predicts $0.766355$, whereas the exact value is $0.705882$. A local slope is not a bound for a large change. Its numerical value also depends on the perturbation scale: changing log variance by one is a different intervention from adding one to variance.

The executable estimates $\operatorname{Cov}(\theta,s_\eta)$ from independent exact posterior draws and reports an approximate MCSE obtained from independent batch estimates. It also compares with an analytic derivative and a centered finite difference. For MCMC, the covariance uses several estimated moments whose errors are correlated; quantify uncertainty using adequate batches or a joint long-run covariance calculation, rather than treating draws as independent. A larger run reduces error in the derivative estimate but cannot make a local linear approximation valid far from its baseline.

Sensitivity also depends on the estimand. If the observed mean were zero, then $m=0$ for every prior variance and the mean derivative would vanish. Nevertheless, $v=(4+e^{-\eta})^{-1}$ has derivative $v^2e^{-\eta}$, equal to $0.04$ at $\eta=0$. The predictive variance changes by the same amount. A stable posterior mean can therefore coexist with sensitive uncertainty or tail probabilities. Exercise 7 checks this distinction.

### 17.9.2 Choosing perturbations with a scientific meaning

One general diagnostic path powers the prior or likelihood: $q_\alpha(\theta)=p(\theta)^\alpha p(y\mid\theta)$ or $q_\alpha(\theta)=p(\theta)p(y\mid\theta)^\alpha$, around $\alpha=1$. Their scores are respectively $\log p(\theta)$ and $\log p(y\mid\theta)$. Powering one observation's likelihood contribution instead measures influence along that observation-weight path. These are the local covariance calculations behind [Kallioinen et al., Section 2.4.3](https://doi.org/10.1007/s11222-023-10366-5); that paper uses $\log_2\alpha$ as its perturbation scale, introducing a factor $\ln 2$ at $\alpha=1$.

Specify the component and parameterization being perturbed and check posterior propriety nearby. A powered likelihood generally serves as a diagnostic perturbation, rather than a normalized new sampling model. Such a path cannot reveal every meaningful change, including a new zero-generation mechanism. For large or structurally different alternatives, return to explicit model variants and refitting. Reweighting existing draws is another option only when their support and practical overlap cover the alternative; the methods and failure modes are developed in [Chapter 05](05-monte-carlo.md). Small sensitivity along one path is evidence about that path and estimand only.

## 17.10 From symptoms to a report

The table suggests next investigations, not exclusive diagnoses. Several problems can coexist.

| Observation | First useful investigation |
| --- | --- |
| A known-answer posterior differs beyond numerical error | Check parameterization, likelihood contributions, Jacobians, and posterior simulation code. |
| SBC ranks show a repeated pattern | Check generator–fitter consistency, fit failures, within-fit diagnostics, and data-dependent quantities. |
| Chain summaries appear stable but predictive replications miss a feature | Inspect assumptions about observation noise, grouping, recording, and the chosen discrepancy. |
| Conclusions move under defensible priors or likelihoods | Report the range of estimands, identify weak information, and seek relevant external knowledge. |
| A few fits fail in one generated parameter region | Preserve failure counts and inspect geometry or computation there; do not discard that region. |

The diagnostics lab below lets you change the correlation of one stationary Gaussian AR(1) chain. As correlation increases, observe the trace and empirical autocorrelation, then compare the exact finite-run mean ESS with its long-run approximation and inspect the theoretical standard error. Then consider how dependent posterior draws would affect predictive estimates and MCMC-based SBC ranks. Its scope is this known process; it does not implement multi-chain convergence diagnostics, SBC, or posterior predictive checks. The [Python example](examples/ch17.py) supplies those last two experiments with exact posterior draws, so it isolates their logic from MCMC diagnostics.

<div class="mcmc-lab" data-lab="diagnostics"></div>

A defensible final report states the estimands, model and data process, prior rationale, computational method and run lengths, numerical diagnostics and MCSEs, prior and posterior predictive results, sensitivity comparisons, and unresolved warnings. It states what the evidence supports at the intended prediction horizon and population. Passing a diagnostic is evidence about a particular failure mode, never a proof that the model, algorithm, or conclusion is universally correct.

## Exercises

<div class="exercise" id="mcmc-17-workflow-ex-1">

**1. Shared variation.** In the normal model, derive the full prior predictive covariance matrix for $n$ observations and explain why independently redrawing $\theta$ for each observation is wrong.

<details>
<summary>Solution</summary>

Since $y_i=\theta+\epsilon_i$ with independent $\epsilon_i\sim N(0,1)$, $\operatorname{Cov}(y_i,y_j)=\operatorname{Var}(\theta)+\mathbf{1}\{i=j\}$. Thus the matrix is $\tau^2\mathbf{1}\mathbf{1}^{\mathsf T}+I_n$. Redrawing $\theta$ makes the off-diagonal covariance zero and changes the distribution of dataset summaries such as the sample mean.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-2">

**2. Ranks.** Prove that the SBC rank is uniform on $\{0,\ldots,L\}$ under the continuous ideal experiment. State the independence needed.

<details>
<summary>Solution</summary>

Given a generated dataset $y$, Bayes' rule makes its generating $\theta$ posterior distributed. Independently sampled exact posterior draws are conditionally iid with it. Applying the same scalar $f(\cdot,y)$ preserves conditional exchangeability; continuity removes ties. Each of the $L+1$ positions in the ordered list is equally likely for the generating value, so each rank has probability $1/(L+1)$ conditional on $y$ and hence marginally. Marginally correct but correlated draws do not satisfy this argument.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-3">

**3. A false reassurance.** Construct a procedure that ignores simulated data yet has uniform parameter SBC ranks. Propose a check that can expose it in the normal model.

<details>
<summary>Solution</summary>

For every generated dataset, return iid draws from $p(\theta)$ instead of $p(\theta\mid y)$. Unconditionally the generating $\theta$ and returned values are iid prior draws, so their parameter ranks are uniform. The procedure is wrong whenever $y$ informs $\theta$. Rank $\log p(y\mid\theta)$, with the same $y$ used for all values within a fit, or compare the fitted mean with the exact $m=v\sum_i y_i$ across selected datasets. These checks target a data-dependent distinction, though no one check is exhaustive.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-4">

**4. Missing fits and dependence.** A researcher ranks a generating parameter among every adjacent MCMC state and deletes 8% of experiments that diverged. Identify two problems and repair the design.

<details>
<summary>Solution</summary>

Adjacent states are correlated, violating the conditional iid premise of the exact rank theorem; a marginally invariant chain is insufficient for that proof. Investigate mixing within fits and use long enough runs with approximately decorrelated retained draws, while treating the reference uniformity as approximate. Deleting divergent fits selects datasets and parameter regions, so the surviving experiments no longer follow the intended prior-generative design. Record and investigate all failures, including their generating parameters, and rerun after a justified computational remedy.

</details>

**Changed task: three retained draws within one fit.** Keep the stationary reference in Section 17.6.1, with one generated dataset $y$, one independent generating value $U_0$, and copy probability $r=1/2$. Now retain three successive fitted-chain values $U_1,U_2,U_3$, and define
$$
S=\sum_{j=1}^3\mathbf1\{U_j<U_0\}.
$$
Derive all four rank probabilities by conditioning on the two copy/refresh decisions. Then retain three draws with two chain transitions between each retained draw instead. Compute both rank laws and their means. Do correct posterior marginals and the ideal mean rank establish uniformity? Explain why substituting an ESS into the two-draw formula does not answer this changed question.

<details class="optional-hint">
<summary>Optional hint for the three-draw rank task</summary>

Write C for copy and R for refresh in a two-transition history. For CC, there is only one distinct fitted value. For CR or RC, one fitted value appears twice and another appears once; order those two independent uniform values together with truth. For RR, all three fitted values are independent. For spacing two, first find the kernel connecting successive retained draws.

</details>

<details>
<summary>Solution for the changed three-draw rank task</summary>

First work with a general $0\le r<1$. Each C/R decision is independent. The conditional rank laws are

| History | Probability | Law on $S=0,1,2,3$ |
| --- | --- | --- |
| CC | $r^2$ | $(1/2,0,0,1/2)$ |
| CR | $r(1-r)$ | $(1/3,1/6,1/6,1/3)$ |
| RC | $r(1-r)$ | $(1/3,1/6,1/6,1/3)$ |
| RR | $(1-r)^2$ | $(1/4,1/4,1/4,1/4)$ |

For CC, $S=3\mathbf1\{U_1<U_0\}$, so only ranks zero and three occur. For RR, the four values including truth are iid.

For CR, write the fitted values as $A,A,B$; for RC they are $A,B,B$, where $A,B,U_0$ are independent uniforms. There are six equally likely strict orderings of these three distinct values. Two put truth below both fitted values, and two put it above both. Each of the remaining two orderings has unconditional probability $1/6$, giving rank one or two according to whether the lower fitted value is the singleton or the duplicated value. Conditional on truth lying between the two fitted values, these possibilities have probability $1/2$ each. This gives the same conditional rank law for CR and RC.

Mixing the rows gives each edge probability as
$$
\begin{aligned}
\Pr(S=0)=\Pr(S=3)
&=\frac{r^2}{2}+\frac{2r(1-r)}3+\frac{(1-r)^2}{4},\\
&=\frac{3+2r+r^2}{12},
\end{aligned}
$$
and each middle probability as
$$
\begin{aligned}
\Pr(S=1)=\Pr(S=2)
&=\frac{2r(1-r)}6+\frac{(1-r)^2}{4},\\
&=\frac{3-2r-r^2}{12}.
\end{aligned}
$$
Thus at $r=1/2$,
$$
\Pr(S=0,1,2,3)
=\left(\frac{17}{48},\frac7{48},\frac7{48},\frac{17}{48}\right).
$$

For spacing two, the retained chain has kernel
$$
K_r^2=r^2I+(1-r^2)\Pi.
$$
Its effective copy probability is $1/4$. Applying the same four-history argument to the retained transitions gives
$$
\Pr(S_{\rm spaced}=0,1,2,3)
=\left(\frac{19}{64},\frac{13}{64},\frac{13}{64},\frac{19}{64}\right).
$$
The rank laws are both symmetric around $3/2$, so
$$
E[S]=E[S_{\rm spaced}]=\frac32.
$$
Every fitted draw has the exact posterior marginal in both designs, yet neither law is the uniform law $(1/4,1/4,1/4,1/4)$. The joint copy/refresh histories determine these probabilities. Neither the correct mean nor an ESS substituted for the number of draws supplies that joint law. There are still no fitted-truth ties in this continuous experiment, although fitted values can be copied.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-5">

**5. Zeros under a Gamma posterior.** Derive the exact expected zero fraction for the count example, and explain why this number alone is not a posterior predictive tail probability.

<details>
<summary>Solution</summary>

For $\lambda\sim\operatorname{Gamma}(52,11)$ in shape–rate form, $\Pr(y_{\mathrm{rep},i}=0\mid\lambda)=e^{-\lambda}$. Integrating gives $\int e^{-\lambda}11^{52}\lambda^{51}e^{-11\lambda}/\Gamma(52)\,d\lambda=(11/12)^{52}$. Linearity gives the same expectation for the zero fraction. The probability of five or more zeros concerns the entire replicated zero-count distribution, including shared uncertainty in $\lambda$ and conditional sampling variation; it requires its distribution or simulation.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-6">

**6. Next action.** An analysis has apparently well-mixed chains, an observed zero count far outside posterior replications, and a decision-relevant estimate that moves substantially under a defensible prior change. Draft a three-sentence report and next action.

<details>
<summary>Solution</summary>

One possible report: “For the stated model, chain checks and MCSEs suggest that numerical error in the reported estimate is small, although they do not certify convergence. The model rarely reproduces the observed zero count, and the decision-relevant estimate changes materially across defensible priors. We will investigate the count-generation and measurement processes, report the estimate under both prior assumptions, and seek information that distinguishes them before making the decision.” Extra iterations alone address neither predictive failure nor prior sensitivity.

</details>

</div>

<div class="exercise" id="mcmc-17-workflow-ex-7">

**7. A stable mean can hide sensitivity.** Set $\bar y=0$ in the normal example and vary $\eta=\log\tau^2$ near zero. Use the covariance identity to find derivatives of $E(\theta\mid y)$ and $E(\theta^2\mid y)$. What happens to the new-observation variance?

<details>
<summary>Solution</summary>

The baseline posterior is $N(0,0.2)$ and the score is $s_0=(\theta^2-1)/2$. Symmetry gives $\operatorname{Cov}(\theta,s_0)=0$. Since $E(\theta^4)=3v^2$, $\operatorname{Var}(\theta^2)=2v^2$, so $\operatorname{Cov}(\theta^2,s_0)=v^2=0.04$. The posterior mean remains zero, while its variance has derivative $0.04$. The predictive variance $1+v$ has the same derivative because observation noise is fixed. Comparing posterior means alone misses this sensitivity.

</details>

</div>

## Key takeaways

- Simulate whole datasets from proper priors to inspect implications before fitting.
- An ideal SBC rank is uniform by conditional exchangeability, with explicit independence and tie assumptions; flat ranks are necessary evidence for selected quantities, not a certificate.
- Predictive replications ask whether a fitted model can generate relevant observed features. Their target population and discrepancy must be stated.
- Local sensitivity is a posterior score covariance under differentiation and integrability assumptions. Check the perturbation scale and estimand, and refit meaningful large alternatives.
- Numerical error, finite-run behavior, model inadequacy, and assumption sensitivity should be reported separately.

## Sources

- [Gelman et al., *Bayesian Workflow*](https://arxiv.org/abs/2011.01808): iterative model development and criticism.
- [Talts et al., *Validating Bayesian Inference Algorithms with Simulation-Based Calibration*](https://arxiv.org/abs/1804.06788): SBC procedure and rank motivation.
- [Modrák et al., *Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity*](https://doi.org/10.1214/23-BA1404): sensitivity limits of test quantities.
- [Stan Development Team, *Simulation-Based Calibration Checking*](https://mc-stan.org/docs/stan-users-guide/simulation-based-calibration.html): practical SBC design and dependence.
- [Stan Development Team, *Posterior and Prior Predictive Checks*](https://mc-stan.org/docs/stan-users-guide/posterior-predictive-checks.html): predictive simulation and interpretation.
- [Giordano, Broderick, and Jordan, *Covariances, Robustness, and Variational Bayes*](https://jmlr.org/papers/volume19/17-670/17-670.pdf): Section 2 connects exact posterior sensitivity to covariance.
- [Kallioinen et al., *Detecting and diagnosing prior and likelihood sensitivity with power-scaling*](https://doi.org/10.1007/s11222-023-10366-5): diagnostic perturbations and their limitations.
