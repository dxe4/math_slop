# 05. Monte Carlo integration

**Learning goals.** By the end of this chapter you should be able to express an integral or probability as an expectation; derive the uncertainty of an average of independent draws; decide when a central-limit interval is credible; construct ordinary and self-normalized importance estimates; and explain why zero observed rare events say little about a very small probability.

**Prerequisites.** Use expectation, variance, and density calculations from [Chapter 02](02-probability.md), the distinction between a normalized and an unnormalized target from [Chapter 03](03-bayesian-targets.md), and independent random generation from [Chapter 04](04-numerics.md). Calculus through elementary integration is enough. Throughout, $\pi$ denotes the target density, $q$ a proposal density, $f$ the function of interest, and $N$ the number of draws.

## 05.1 An integral can be an expectation

Consider the deliberately easy integral

$$
I=\int_0^1 e^x\,dx=e-1.
$$

If $U$ is uniform on $[0,1]$, its density is one there, so $I=\mathbb E[e^U]$. We already know the answer by calculus. That makes this a useful test case: a simulation should approach $e-1$, and any discrepancy can be compared with its predicted random error. For a smooth one-dimensional integral like this, deterministic quadrature is usually the practical choice. Monte Carlo becomes attractive when an expectation is hard to integrate directly but draws are available, as in a complex simulator or a high-dimensional posterior. This simulation-to-expectation viewpoint is also developed in [Shalizi's simulation lecture](https://stat.cmu.edu/~cshalizi/dst/20/lectures/15/lecture-15.html) and [Owen's Monte Carlo tutorial](https://artowen.su.domains/pubtalks/MCQMC2012-Owen-Tutorial.pdf).

More generally, if $\pi$ is a *normalized* density and $f$ is integrable,

$$
\mu=\mathbb E_\pi[f(X)]=\int f(x)\pi(x)\,dx.
$$

The function $f$ specifies the question. With $f(x)=\mathbf 1\{x\in A\}$, $\mu$ is the probability of an event $A$. With $f$ a prediction from parameters $x$, $\mu$ is a posterior predictive average. With $f(x)=x_j$, it is a coordinate mean. The same target can make one of these easy to estimate and another difficult. If only an unnormalized density $\tilde\pi$ is known, its integral $Z=\int\tilde\pi(x)\,dx$ is needed before $\pi=\tilde\pi/Z$ can be evaluated; Section 05.8 shows one way to work with ratios instead.

The expectation formulation also makes the computational target precise. Asking for “samples from a posterior” is only an intermediate request. If the scientific decision depends on $\Pr(X\in A)$, accuracy for a posterior mean outside $A$ may be irrelevant. Before choosing a sample size, specify an absolute or relative error tolerance for the actual $f$. When several functions matter, report their errors separately; a single sample size does not imply equal precision for all of them.

## 05.2 The independent sample average

Suppose $X_1,\ldots,X_N$ are independent draws from $\pi$ and set $Y_i=f(X_i)$. The basic estimator is

$$
\hat\mu_N=\frac1N\sum_{i=1}^N Y_i.
$$

If $\mathbb E|Y_1|<\infty$, linearity of expectation gives $\mathbb E[\hat\mu_N]=N\mu/N=\mu$: the estimator is unbiased. If also $\sigma^2=\operatorname{Var}(Y_1)<\infty$, expand the variance of the sum. Independence makes every cross-covariance $\operatorname{Cov}(Y_i,Y_j)$ for $i\ne j$ equal zero, leaving

$$
\operatorname{Var}(\hat\mu_N)
=\frac{1}{N^2}\left(\sum_{i=1}^N\operatorname{Var}(Y_i)
+2\sum_{i<j}\operatorname{Cov}(Y_i,Y_j)\right)
=\frac{\sigma^2}{N}.
$$

Because the bias is zero, its root-mean-square error is $\sigma/\sqrt N$. At constant cost per draw, halving this error needs four times as many draws. The exponent $-1/2$ does not explicitly contain the dimension of $X$. That observation says nothing about whether independent draws are affordable or whether $\sigma^2$ becomes enormous with dimension. Owen's [tutorial](https://artowen.su.domains/pubtalks/MCQMC2012-Owen-Tutorial.pdf) uses the same variance baseline to compare integration methods.

Independence is doing real work in the variance calculation. For dependent observations the covariance terms remain. Later Markov chain averages therefore need the error methods of [Chapter 13](13-mc-error.md); applying this chapter's $s/\sqrt N$ formula to positively correlated output can understate uncertainty, while negative correlations can make it overstate uncertainty.

There are two ways to read this variance formula. As a planning formula, if $\sigma$ is already known or has a trustworthy pilot estimate and the desired MCSE is $\delta$, choose roughly $N=(\sigma/\delta)^2$ *before* the final run. As a retrospective error estimate, replace $\sigma$ by $s_N$. The latter describes what the observed sample suggests, conditional on its having encountered the important regions. It should not be read as a certificate that the pilot or final run found all relevant behavior. The procedure also presumes draws from exactly the distribution stated; numerical errors in generating $X_i$ are outside this variance calculation.

## 05.3 Two different convergence statements

The iid **strong law of large numbers** says that if $\mathbb E|Y_1|<\infty$, then $\hat\mu_N\to\mu$ almost surely as $N\to\infty$. It promises eventual convergence along an indefinitely extended independent sequence. It does not give a useful error size for a particular finite $N$.

For a quantitative large-sample approximation, the classical iid **central limit theorem** needs $0<\sigma^2<\infty$:

$$
\frac{\sqrt N(\hat\mu_N-\mu)}{\sigma}
\mathrel{\xrightarrow{d}}\mathcal N(0,1).
$$

The limit is a statement about the distribution across independent repetitions of the whole experiment. If $\sigma^2=0$, then $Y_i=\mu$ almost surely and the estimator is exact; dividing by $\sigma$ is unnecessary. Neither theorem gives finite-$N$ normality for an arbitrary integrand.

Moment conditions matter. A Pareto random variable with tail $\Pr(Y>y)=y^{-3/2}$ for $y\ge1$ has a finite mean but infinite variance. Its averages obey the strong law, yet the finite-variance CLT above does not apply. A standard Cauchy variable has no finite expectation, so even a target mean for the strong law is absent. A visually stable trace of running averages cannot prove that either required moment exists. Rare, huge contributions may simply not have appeared yet.

Even with finite variance, convergence in distribution does not say how large $N$ must be for a useful normal approximation. The Bernoulli example later has bounded contributions and a valid CLT, but $10{,}000$ draws still leave zero events most of the time. At that sample size the distribution of the estimator has a large atom at zero and looks nothing like a smooth normal curve. Thus checking a theorem's hypotheses and checking whether its approximation is useful at the available budget are distinct steps.

## 05.4 Standard errors, intervals, and their meaning

For $N\ge2$, estimate the variance of a single contribution with

$$
s_N^2=\frac{1}{N-1}\sum_{i=1}^N(Y_i-\hat\mu_N)^2,
\qquad
\widehat{\operatorname{MCSE}}=\frac{s_N}{\sqrt N}.
$$

The Monte Carlo standard error (MCSE) describes fluctuations caused by drawing a new independent sample of size $N$. It is not the standard deviation of $\pi$, which describes variation of $X$ under the model. A posterior mean can have tiny MCSE while the posterior itself remains broad; neither number addresses whether the model represents reality.

With iid observations and finite positive variance, the CLT and consistency of $s_N$ motivate an approximate 95% interval $\hat\mu_N\pm1.96\widehat{\operatorname{MCSE}}$. Imagine repeating the *entire* fixed-$N$ computation many times and drawing one such interval for each result. Approximately 95% should cross the vertical line at the fixed value $\mu$ when the normal approximation is adequate. This is a repeated-run coverage statement, not a 95% posterior probability that the fixed integral lies in the particular interval you observed. A Student $t$ interval has exact finite-sample coverage for normally distributed $Y_i$ with unknown variance; merely using a $t$ quantile does not make an arbitrary integrand normal.

There is also a finite-sample, if often loose, statement. Under *known* finite $\sigma^2$, Chebyshev's inequality gives

$$
\Pr\{|\hat\mu_N-\mu|\ge\varepsilon\}
\le\frac{\sigma^2}{N\varepsilon^2}.
$$

Substituting a hopeful empirical variance after observing a few rare outcomes does not automatically turn this into a valid guarantee. The stated interval formulas also assume a fixed or independently planned $N$. Repeatedly peeking at a confidence interval and stopping as soon as it looks narrow can change its coverage; principled stopping rules appear in [Chapter 13](13-mc-error.md).

It helps to retain all three scales in a report: the point estimate, the estimated MCSE, and the scale of the quantity being estimated. For example, reporting $0.0100\pm0.0010$ MCSE is more informative for a probability than reporting only the absolute MCSE $0.0010$. A reported interval also needs the sample size and a description of how the observations were drawn. Otherwise its numerical width cannot be audited. Repeating a seeded run reproduces one realization; changing the seed produces another realization and is useful for catching surprising variability, though a handful of repetitions cannot verify nominal coverage.

## 05.5 Worked example: an exponential integral

Let $Y=e^U$ for $U\sim\operatorname{Uniform}(0,1)$. Direct integration yields $\mu=e-1$ and

$$
\mathbb E[Y^2]=\int_0^1e^{2u}\,du=\frac{e^2-1}{2},
\qquad
\sigma^2=\frac{e^2-1}{2}-(e-1)^2\approx0.242036.
$$

Thus the *theoretical* standard deviation of the sample mean at $N=10{,}000$ is $\sqrt{0.242036/10{,}000}\approx0.004920$. Here is the result of the fixed-seed, standard-library script [examples/ch05.py](examples/ch05.py). Each row uses a separately seeded run. “Observed error” is the realized estimate minus $e-1$, while theoretical MCSE predicts the spread across repetitions, not each run's error.

| $N$ | Estimate | Estimated MCSE | Theoretical MCSE | Observed error |
|---:|---:|---:|---:|---:|
| 100 | 1.674564 | 0.050720 | 0.049197 | −0.043718 |
| 1,000 | 1.718020 | 0.015658 | 0.015557 | −0.000262 |
| 10,000 | 1.717311 | 0.004930 | 0.004920 | −0.000971 |

These particular errors happen to shrink with $N$, but no theorem says a single sequence must improve monotonically. If the rows had used prefixes of one random stream, their errors would also be strongly related. Independent repetitions are a better way to inspect coverage. Notice how closely the estimated MCSE and theoretical MCSE agree here: $e^U$ is bounded, so extreme unseen contributions are not a concern for this example.

The same $U_i$ can estimate $\Pr(U>0.99)=0.01$ using $f(U)=\mathbf1\{U>0.99\}$. Its per-draw variance is $0.01(0.99)=0.0099$. At $N=10{,}000$ the MCSE is about $0.000995$, smaller in absolute terms than for $e^U$, but roughly 10% of the probability. This illustrates why accuracy should be judged against the estimand's scale and intended decision.

Try the **monte-carlo** lab below, which estimates $\int_0^1\sin(k\pi x)\,dx$ using iid uniform draws. Keep the **Integrand frequency** $k$ fixed, increase **Samples / iterations** from 500 to 2000, then repeat with different seeds and compare the observed spread of estimates and the estimated SE. The exact answer is $(1-\cos(k\pi))/(k\pi)$. The lab visualizes independent averaging; it does not certify a confidence interval or diagnose heavy-tailed integrands.

<div class="mcmc-lab" data-lab="monte-carlo"></div>

## 05.6 Importance sampling changes where draws land

Sometimes draws from $\pi$ rarely enter the region that contributes most to $\mu$. Suppose instead that $X_i$ are iid from a density $q$. Wherever $|f(x)|\pi(x)>0$, require $q(x)>0$ apart from sets of integration measure zero. Then

$$
\mu=\int f(x)\pi(x)\,dx
=\int \frac{f(x)\pi(x)}{q(x)}q(x)\,dx
=\mathbb E_q[Y],
\quad Y=\frac{f(X)\pi(X)}{q(X)}.
$$

This **ordinary importance sampling** estimator is $N^{-1}\sum_iY_i$. The cancellation proves its unbiasedness when $\mathbb E_\pi|f|<\infty$. Its variance is $\operatorname{Var}_q(Y)/N$, finite only if

$$
\int_{q>0}\frac{f(x)^2\pi(x)^2}{q(x)}\,dx<\infty.
$$

The sample variance for its MCSE must be computed from the *weighted contributions* $Y_i$, not from the unweighted $f(X_i)$. This support requirement is specific to $f$: $q$ may vanish where $\pi>0$ if $f=0$ there. If a single proposal will serve several functions, it must cover every contributing region. [Owen, Section 9.1](https://artowen.su.domains/mc/Ch-var-is.pdf) gives the change-of-measure identity and a detailed account of the support and variance conditions.

A simple proposal comparison shows why covering the target is insufficient. Let $\pi$ be standard normal, $f(x)=x$, and $q$ be normal with mean zero and variance $\tau^2$. Both densities have full real-line support for every $\tau>0$. Yet, ignoring positive constants, the second-moment integrand is

$$
\frac{x^2\pi(x)^2}{q(x)}
\propto x^2\exp\left[-x^2\left(1-\frac{1}{2\tau^2}\right)\right].
$$

Its integral is finite exactly when $\tau^2>1/2$. At equality the exponential no longer decays; below equality it grows. Thus a proposal narrowed too much around the target's mode gives *infinite variance* even though it can, in principle, sample every real number. The issue is the weight assigned to rare tail draws.

The target here has mean zero, so ordinary importance sampling can return values near zero under many proposals. That alone does not make all proposals equally good. Under a narrow $q$, the sample may consist of modest $x$ values and apparently tame weights for a long time. A very rare, large $|x|$ draw then receives a contribution that dominates earlier work. Plotting realized weights can reveal an observed problem, but the integral criterion above detects a theoretical problem that a finite plot can miss. This is why a proposal should be evaluated for the chosen $f$, not just by how its histogram overlaps the middle of $\pi$.

## 05.7 What would an ideal proposal look like?

With $0<\mathbb E_\pi|f|<\infty$, the second moment of an ordinary importance contribution is $\int (f\pi)^2/q$. Cauchy–Schwarz applied to $|f|\pi/\sqrt q$ and $\sqrt q$ gives

$$
\left(\int |f|\pi\right)^2
\le\left(\int\frac{f^2\pi^2}{q}\right)\left(\int q\right)
=\int\frac{f^2\pi^2}{q}.
$$

Equality holds, on the contributing region, for $q_*(x)=|f(x)|\pi(x)/\mathbb E_\pi|f|$. For nonnegative $f$, every draw from $q_*$ contributes the same $f\pi/q_*=\mu$: the variance is zero. But its normalizing constant is precisely the unknown answer, making this mainly a design principle. For signed $f$, contributions under $q_*$ have values $+\mathbb E_\pi|f|$ or $-\mathbb E_\pi|f|$; variance generally remains. A practical proposal aims to visit regions of large $|f|\pi$, with enough tail mass to keep weights controlled. Fitting only the mode of $\pi$ can miss those regions.

This proposal problem can become costly in high dimensions. The target/proposal mismatch and computational cost are analyzed more deeply by [Agapiou and colleagues](https://arxiv.org/abs/1511.06196). Techniques that reduce variance without changing the sampling density are developed in [Chapter 06](06-variance-reduction.md).

## 05.8 Self-normalization when the target constant is unknown

Suppose $\tilde\pi(x)=Z\pi(x)$ can be evaluated but $0<Z<\infty$ is unknown. For iid $X_i\sim q$, define $W_i=\tilde\pi(X_i)/q(X_i)$ and

$$
\hat\mu_{\mathrm{SN}}=
\frac{\sum_{i=1}^N W_i f(X_i)}{\sum_{i=1}^N W_i}.
$$

This time $q$ must cover the support of $\pi$, including places where $f=0$, because the denominator estimates $Z=\int\tilde\pi$. Assume $\mathbb E_\pi|f|<\infty$. Then $\mathbb E_qW=Z$ and $\mathbb E_q(Wf)=Z\mu$. The iid strong law applied separately to numerator and denominator gives convergence of their ratio to $\mu$, provided the finite-sample denominator is nonzero. When its expectation exists, a ratio of random averages is generally biased at finite $N$; consistency alone guarantees neither finite-sample integrability nor unbiasedness.

For an asymptotic error formula, assume in addition that $\mathbb E_q[W^2]$ and $\mathbb E_q[(Wf)^2]$ are finite. A joint CLT followed by the delta method, or linearizing the ratio around $(Z\mu,Z)$, gives

$$
\sqrt N(\hat\mu_{\mathrm{SN}}-\mu)
\mathrel{\xrightarrow{d}}
\mathcal N\left(0,\frac{\mathbb E_q[W^2(f-\mu)^2]}{Z^2}\right),
$$

with the degenerate zero-variance case interpreted separately. Writing $\bar w_i=W_i/\sum_jW_j$, a plug-in estimate of the variance of $\hat\mu_{\mathrm{SN}}$ is $\sum_i\bar w_i^2(f(X_i)-\hat\mu_{\mathrm{SN}})^2$. This is a large-sample approximation, not an exact finite-sample formula. It can be badly optimistic when a critical region has not been sampled. [Owen, Section 9.2](https://artowen.su.domains/mc/Ch-var-is.pdf) develops self-normalization and its error analysis.

The centered expression can be derived without knowing the delta method. Write $\bar W_N=N^{-1}\sum_iW_i$ and rearrange the ratio exactly:

$$
\sqrt N(\hat\mu_{\mathrm{SN}}-\mu)
=\frac{N^{-1/2}\sum_{i=1}^N W_i(f(X_i)-\mu)}{\bar W_N}.
$$

The numerator is a scaled sum of iid, mean-zero variables, and the denominator converges almost surely to $Z>0$. Applying the CLT to the numerator and replacing the convergent denominator by $Z$ gives the displayed limiting variance. The stated second-moment assumptions are sufficient, though stronger than necessary for this CLT: finite $\mathbb E_q[W^2(f-\mu)^2]$ together with the earlier first-moment assumptions suffices for this argument. For the plug-in variance formula, retain the stronger assumptions. Expanding its centered square reduces consistency to strong laws for $W^2f^2$, $W^2f$, and $W^2$; the middle term is integrable by Cauchy–Schwarz. More precisely, $N$ times the plug-in variance converges to the limiting variance above. This does not assert convergence of the estimator's actual second moments under these assumptions alone.

Multiplying every $W_i$ by the same positive constant changes neither the estimate nor the normalized weights. Computationally, if log weights $\ell_i=\log W_i$ are large or small, subtract $m=\max_i\ell_i$ and form $\bar w_i=e^{\ell_i-m}/\sum_j e^{\ell_j-m}$. Zero weights have log weight $-\infty$; if all weights are zero, the ratio is undefined and this computation must stop rather than subtract $-\infty$ from itself. This is the log-sum-exp idea from [Chapter 04](04-numerics.md). It prevents avoidable overflow; it cannot restore support or cure a proposal with infinite variance.

For intuition about the ratio bias, imagine only one draw and assume $W>0$ $q$-almost surely and $\mathbb E_q|f|<\infty$. Then $\hat\mu_{\mathrm{SN}}=f(X_1)$: the weight cancels completely, so its expectation is $\mathbb E_qf$, generally different from $\mathbb E_\pi f$. Without these extra assumptions the one-draw ratio can be undefined or lack an expectation; target integrability alone does not exclude either problem. As $N$ grows, the strong laws above give a positive denominator eventually almost surely and the ratio converges to $\mu$. The example also explains why an MCSE derived for *ordinary* weighted averages must not simply be attached to the self-normalized ratio. The latter responds to fluctuations of both numerator and denominator; the centered factor $f-\mu$ in its asymptotic variance accounts for their covariance.

## 05.9 Worked example: a rare normal exceedance

Let $X\sim\mathcal N(0,1)$ and $p=\Pr(X>4)=\bar\Phi(4)\approx3.167124\times10^{-5}$. A direct estimator averages $\mathbf1\{X_i>4\}$. At $N=10{,}000$, the expected event count is only $Np\approx0.3167$, and the probability of *zero* events is $(1-p)^N\approx0.7285$. If zero occur, the estimated sample variance and MCSE both equal zero. That numerical zero is evidence of too few events, not evidence that $p=0$.

Move the proposal to $q=\mathcal N(a,1)$ while keeping the target $\pi=\mathcal N(0,1)$. Cancelling their normal densities gives

$$
\frac{\pi(x)}{q(x)}=\exp(-ax+a^2/2),\qquad
Y=\mathbf1\{X>4\}\exp(-aX+a^2/2),\quad X\sim q.
$$

Choose $a=4$ so that roughly half of proposal draws exceed four. The weight corrects for how much more often $q$ visits that region. Completing the square in $q(x)[\pi(x)/q(x)]^2$ shows, for threshold $b$,

$$
\mathbb E_q[Y^2]
=e^{a^2}\bar\Phi(b+a).
$$

Indeed the product is $e^{a^2}$ times the density of a $\mathcal N(-a,1)$ random variable, integrated above $b$. Here $a=b=4$, so $\mathbb E_q[Y^2]\approx5.5280\times10^{-9}$ and $\operatorname{Var}_q(Y)=\mathbb E_q[Y^2]-p^2\approx4.5249\times10^{-9}$. Direct Bernoulli variance is $p(1-p)\approx3.1670\times10^{-5}$, about **6,999 times larger** per draw. This calculation proves finite variance for this particular tilt; the observed weights alone would not.

Running [examples/ch05.py](examples/ch05.py) with its fixed seeds and $N=10{,}000$ gave two direct hits, direct estimate $0.0002$ and estimated MCSE $0.0001414$. The tilted run gave 4,925 exceedances, estimate $3.0521\times10^{-5}$, and estimated MCSE $6.5967\times10^{-7}$. The direct run is unusually lucky to see even two hits; repeating it commonly yields zero. The tilted estimate is close to the known answer, but its own MCSE still quantifies random error rather than certifying exactness.

For a Bernoulli event of probability $p$, the *theoretical relative* standard error of direct sampling is

$$
\frac{\sqrt{p(1-p)/N}}{p}=\sqrt{\frac{1-p}{Np}}.
$$

An absolute error goal can therefore conceal poor relative precision when $p$ is tiny. If zero events are seen in $N$ iid direct trials, solving $(1-p)^N=\alpha$ gives the zero-count case of the exact one-sided binomial upper confidence bound, $p_U=1-\alpha^{1/N}$. “Exact” means the full confidence procedure has coverage at least $1-\alpha$ for every $p$, without a normal approximation; binomial discreteness can make it conservative. It is not a coverage statement conditional on having observed zero. For $N=1{,}000$ and $\alpha=0.05$, the bound is about $0.002991$, despite a point estimate of zero. Compute it stably as $-\operatorname{expm1}(\log(\alpha)/N)$. Rare-event normal intervals are unreliable when the expected number of events is small, even though Bernoulli variables have all moments.

## 05.10 Weight concentration and a report worth trusting

For normalized nonnegative importance weights $\bar w_i$, the descriptive quantity

$$
\operatorname{ESS}_{w}=\frac{1}{\sum_i\bar w_i^2}
$$

lies between $1$ and $N$: Cauchy–Schwarz gives the upper bound, and $\sum_i\bar w_i^2\le(\sum_i\bar w_i)^2=1$ gives the lower. Equal weights give $N$; one dominant weight approaches one. This is a *weight-concentration summary*, not a universal number of independent target draws. It ignores $f$, and it cannot reveal a high-contribution region missed by every draw. More elaborate methods for diagnosing and stabilizing importance ratios, such as the versioned work on [Pareto smoothed importance sampling](https://arxiv.org/abs/1507.02646), belong in a more advanced analysis; the formula above is not a substitute for them.

### 05.10.1 A perfect weight ESS can accompany a wrong answer

The diagnostic limitation in [Owen, Section 9.3](https://artowen.su.domains/mc/Ch-var-is.pdf) can be checked exactly in a two-state example. Replace density integrals by sums over $\{0,1\}$. Take $\pi(0)=\pi(1)=1/2$, $f(x)=x$, and proposal probabilities $q(1)=\varepsilon$, $q(0)=1-\varepsilon$, with $0<\varepsilon<1$. The desired mean is $1/2$. Both states have positive proposal probability; every moment is finite. The weights are

$$
W(0)=\frac{1}{2(1-\varepsilon)},\qquad
W(1)=\frac{1}{2\varepsilon}.
$$

If $K$ of $N$ proposal draws equal one, then $K\sim\operatorname{Binomial}(N,\varepsilon)$ and

$$
\hat\mu_{\mathrm{SN}}(K)
=\frac{K(1-\varepsilon)}{K(1-\varepsilon)+(N-K)\varepsilon}.
$$

Choose $\varepsilon=0.001$ and $N=100$. With probability $0.999^{100}\approx0.904792$, $K=0$. Every observed function value is then zero and every observed weight is equal. Consequently the estimate and its plug-in MCSE are both zero, while $\operatorname{ESS}_w=N=100$. The true error is $-1/2$. This happens in roughly nine of ten independent runs despite full support and finite moments.

The example also separates a CLT from a usable approximation. From Section 05.8, its limiting variance is

$$
v_{\mathrm{SN}}=\mathbb E_q[W^2(f-1/2)^2]
=\frac1{16}\left(\frac1\varepsilon+\frac1{1-\varepsilon}\right)
=\frac1{16\varepsilon(1-\varepsilon)}.
$$

At $N=100$, $v_{\mathrm{SN}}/N\approx0.625626$ cannot approximate the actual variance well: the estimate lies in $[0,1]$, so its variance is at most $1/4$. The asymptotic statement concerns $N\to\infty$ at fixed $\varepsilon$, not this particular budget. A successful moment check has not established that enough of the rare proposal state has been sampled. Related failures with finite variance are discussed in [Vehtari and colleagues, version 7, Section 3.2](https://arxiv.org/html/1507.02646v7).

For a finite-sample reference, [examples/ch05.py](examples/ch05.py) enumerates all $101$ possible counts and weights each estimate by $\binom{100}{k}\varepsilon^k(1-\varepsilon)^{100-k}$. This gives mean $0.086827$ and variance $0.071654$, directly from the binomial law without a normal approximation or another simulation. The mean's distance from $1/2$ quantifies the ratio's bias at this budget. Exercise 7 uses the same model to quantify the cost of encountering the missing state.

The existing **importance** lab provides a continuous example. It estimates $\mathbb E_\pi[X^2]=1$ for $\pi=\mathcal N(0,1)$ using a normal proposal and self-normalized weights. Compare **Proposal standard deviation** values $1$, $0.7$, and $0.3$, keeping **Samples / iterations** fixed and changing **Seed**. Inspect the estimate, weight ESS, largest normalized weight, and weight plot together. At proposal standard deviation $1$, the weights are equal for a valid reason: $q=\pi$. At narrower settings, a reassuring realized ESS alone cannot rule out missed tails. The lab does not compute an MCSE or a Pareto diagnostic.

<div class="mcmc-lab" data-lab="importance"></div>

### 05.10.2 Reporting the calculation

Before reporting a number, write down the target $\pi$, the specific $f$, how iid draws were generated (or the proposal $q$), $N$ and computation cost, the estimate and the MCSE method, the support and moment conditions being relied on, and any independent check. A known-answer test, alternative proposal, or separate seed can expose errors in weights and code. Passing such checks does not prove a finite-run answer correct. Numerical integration error, if an integrand itself uses an approximate solver, and modeling error are separate from the Monte Carlo variation treated here. Chapters [07](07-finite-chains.md) through [13](13-mc-error.md) replace independent draws with dependent transitions and revisit every error calculation in that setting.

## Key takeaways

- Independent averaging is unbiased for integrable contributions; finite variance gives variance $\sigma^2/N$.
- A law of large numbers, a central limit theorem, and a finite-sample guarantee make different claims and need different assumptions.
- Importance sampling is correct only with suitable support, and precise only when weighted contributions have manageable variance.
- Self-normalization removes an unknown common scale but can introduce finite-sample ratio bias.
- A zero count, a tiny empirical MCSE, or a large weight-based ESS cannot establish that an unseen region is irrelevant.

## Exercises

**1. Plan a sample budget.** Suppose the standard deviation $\sigma$ of one iid contribution is known to be $2$. How many draws make the theoretical MCSE at most $0.01$? Does this guarantee absolute error at most $0.01$?

<details>
<summary>Solution</summary>

Solve $2/\sqrt N\le0.01$, giving $N\ge(2/0.01)^2=40{,}000$. This controls the standard deviation across repetitions. It does not guarantee a bound on the realized absolute error; even with a normal approximation, an error larger than one standard error is common.

</details>



**2. Compare two event probabilities.** For Bernoulli probabilities $p=0.5$ and $p=0.001$, find the minimum integer $N$ that makes theoretical relative standard error at most $0.1$.

<details>
<summary>Solution</summary>

From $\sqrt{(1-p)/(Np)}\le0.1$, require $N\ge(1-p)/(0.01p)$. For $p=0.5$ this is $N\ge100$; for $p=0.001$ it is $N\ge99{,}900$. Round upward if the result is not an integer. The second event needs nearly a thousand times as many trials for the same relative precision.

</details>

**3. Audit a convergence claim.** A researcher samples iid Pareto variables with tail $\Pr(Y>y)=y^{-3/2}$ for $y\ge1$ and uses $\hat\mu_N\pm1.96s_N/\sqrt N$ as if a finite-variance CLT applied. Which step is unjustified?

<details>
<summary>Solution</summary>

The first moment is finite, so the strong law justifies eventual convergence of the mean. The second moment is infinite: the tail-index $3/2$ is below two. Therefore the classical finite-variance CLT and its normal interval justification do not apply. Computing a finite $s_N$ from any finite sample does not create a finite population variance.

</details>

**4. Locate missing importance support.** Let $\pi$ be uniform on $[0,1]$, $f(x)=x$, and $q$ be uniform on $[0,1/2]$. What does the ordinary importance estimate approach, and what is the desired answer?

<details>
<summary>Solution</summary>

On $[0,1/2]$, $q(x)=2$ and $\pi(x)=1$, so $f\pi/q=x/2$. Its $q$ expectation is $\int_0^{1/2}(x/2)2\,dx=\int_0^{1/2}x\,dx=1/8$. The target expectation is $\int_0^1x\,dx=1/2$. The proposal omits $x\in(1/2,1]$, where $|f|\pi>0$, so change of measure fails.

</details>

**5. Compute a self-normalized estimate.** Three draws have weights $(1,2,3)$ and function values $(0,1,2)$. Find the self-normalized estimate and $\operatorname{ESS}_w$. What changes if all weights are multiplied by $17$?

<details>
<summary>Solution</summary>

The normalized weights are $(1/6,1/3,1/2)$. Thus $\hat\mu_{\mathrm{SN}}=0/6+1/3+2/2=4/3$. Their squared sum is $(1+4+9)/36=14/36$, so $\operatorname{ESS}_w=36/14\approx2.57$. Common scaling cancels from both quantities. The ESS is only a weight-concentration description, not a proven equivalent number of target draws for this $f$.

</details>

**6. Interpret zero successes.** After $1{,}000$ iid Bernoulli trials, no successes were seen. Calculate the one-sided 95% upper confidence bound for $p$ and contrast it with the empirical MCSE.

<details>
<summary>Solution</summary>

Set $\alpha=0.05$ and invert $\Pr_p(0\text{ successes})=(1-p)^{1000}$: $p_U=1-0.05^{1/1000}\approx0.002991$. The sample proportion and plug-in MCSE are both zero because every observed value is zero. The upper bound uses the probability of seeing such data under candidate positive values of $p$; zero observations do not establish $p=0$.

</details>

**7. Budget for seeing a state.** In Section 05.10.1, take $\varepsilon=0.001$. Find the smallest integer $N$ for which the probability of seeing no ones is at most $0.05$. Does meeting this budget ensure an accurate self-normalized estimate?

<details>
<summary>Solution</summary>

Require $(1-\varepsilon)^N\le0.05$. Since $\log(1-\varepsilon)<0$, this gives $N\ge\log(0.05)/\log(0.999)$, hence $N=2{,}995$ after rounding upward. This only gives at least a 95% chance of seeing a one. It does not control estimation error or guarantee enough visits to estimate the relative state probabilities well. For example, if exactly one one is seen at $N=2{,}995$, the ratio is $0.999/(0.999+2.994)\approx0.250188$, far from $1/2$. More generally, reducing a missed-region probability and achieving a desired MCSE are different sample-budget questions.

</details>
