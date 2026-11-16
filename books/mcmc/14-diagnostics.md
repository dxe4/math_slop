# 14. Convergence diagnostics

Four chains produce nearly identical histograms. Their averages agree to two decimal places. Their traces look busy. Have they explored the target distribution? Perhaps. They might also be exploring the same small part of it. Convergence diagnostics compare the information that simulations reveal; they cannot inspect regions that no simulation visits.

This chapter develops a practical vocabulary for that uncertainty. We derive modern rank normalized split $\widehat R$, distinguish bulk and tail effective sample sizes, and connect diagnostic evidence to errors in quantities we actually report. The purpose is to decide what to investigate and whether numerical precision is adequate, while keeping unresolved exploration problems visible.

## 14.1 Learning goals and prerequisites

After working through this chapter, you should be able to calculate a variance ratio, explain why splitting, ranking, and folding address different failures, and assemble a diagnostic report that includes precision in scientific units. You should also be able to construct simulations that look reassuring while giving a seriously wrong answer.

The prerequisites are expectations and transformations from [Chapter 2](02-probability.md), the distinction between invariance and convergence in [Chapters 7](07-finite-chains.md) and [8](08-convergence.md), Metropolis–Hastings in [Chapter 9](09-metropolis-hastings.md), and function-specific ESS and Monte Carlo standard errors in [Chapter 13](13-mc-error.md).

Keep four questions separate. Does the transition rule preserve the intended target? Has initialization ceased to dominate the retained simulation? Does the simulation explore all scientifically relevant regions? Is its remaining Monte Carlo error sufficiently small? A mathematical invariance argument addresses the first question. Finite output provides partial evidence about the others. Even an exact-invariant kernel can mix too slowly for a useful finite run. Conversely, a biased discretization can generate smooth, mutually consistent chains from the wrong invariant distribution. Diagnostics also cannot establish that the statistical model adequately represents the data.

## 14.2 Preserve the structure of the simulation

Let there be $M$ original chains, with separate random streams and feasible, dispersed initial states. Four chains are a useful practical starting point. Dispersion means exploring plausible alternatives allowed by the model; sending initial states to numerically impossible extremes contributes little. Distinct seeds do not compensate for identical initial states in an undiscovered mode.

Remove the draws declared to belong to adaptation or warmup. Preserve the original chain labels and iteration order. Shuffling draws can erase trends and autocorrelation while leaving a histogram unchanged. Concatenating chains into a single sequence introduces artificial transitions between endpoints. Neither operation is appropriate preparation for the diagnostics below.

For the derivations, suppose every retained original chain has length $2n$. Split each into its first and second halves, yielding $m=2M$ sequences of length $n$. Splitting makes early versus late disagreement visible to a comparison of chain means. The halves share a boundary and are not newly independent experiments; splitting is a diagnostic construction, not an increase in simulation effort.

For an odd retained length, our executable drops the middle observation and keeps two equally long halves. Its folding center is calculated before dropping that observation, matching the stated implementation convention. Recording such details matters when reproducing the last decimal of a diagnostic. More importantly, splitting cannot reveal every trend: a trajectory can leave a region and return in ways that make its two half means similar.

## 14.3 Derive the variance ratio

Write $x_{ji}$ for observation $i$ in split sequence $j$. Define

$$
\bar x_j=\frac1n\sum_{i=1}^n x_{ji},\qquad
\bar x=\frac1m\sum_{j=1}^m\bar x_j,\qquad
s_j^2=\frac1{n-1}\sum_{i=1}^n(x_{ji}-\bar x_j)^2.
$$

The within-sequence variance and scaled between-sequence variance are

$$
W=\frac1m\sum_{j=1}^m s_j^2,
\qquad
B=\frac n{m-1}\sum_{j=1}^m(\bar x_j-\bar x)^2.
$$

The basic statistic uses

$$
\widehat V^+=\frac{n-1}{n}W+\frac Bn,
\qquad
\widehat R_{\mathrm{basic}}=\sqrt{\frac{\widehat V^+}{W}}.
$$

To understand the scaling, imagine independent draws from a common distribution with finite variance $\sigma^2$. Each sequence mean has variance $\sigma^2/n$, so multiplying the sample variance of those means by $n$ puts $B$ on the same scale as $W$. Both estimate $\sigma^2$ in that idealized experiment. With persistent chain offsets, the means disagree more than their within-sequence variability suggests, inflating $B$ and the ratio. The [Stan posterior analysis manual](https://mc-stan.org/docs/reference-manual/analysis.html) gives this construction and its multichain interpretation.

This argument motivates the statistic; it does not establish a finite-run bound on distance to stationarity. Nor must every calculated value exceed one. Direct rearrangement gives

$$
\widehat R_{\mathrm{basic}}^2
=1+\frac1n\left(\frac BW-1\right),
$$

so $B<W$ produces a value below one. A value such as $0.9998$ is possible through sampling variation and should not be interpreted as unusually strong convergence.

If $W=0$, no finite variance ratio is available: $B>0$ signals complete separation, while $B=0$ gives $0/0$. A constant chain might reflect a deterministic parameter, a genuinely degenerate target, rounding, or a stuck sampler. Resolve which situation applies rather than translating an undefined result into a pass. Our teaching implementation deliberately returns undefined when either transformed calculation contains *any* constant split sequence; nonfinite draws produce an explicit input error. This is a conservative policy beyond the formula's requirement $W>0$. Software conventions can differ: the [`posterior` documentation](https://mc-stan.org/posterior/reference/rhat.html) describes per-chain constant checks, but its [development source](https://raw.githubusercontent.com/stan-dev/posterior/master/R/convergence.R) inspected for this chapter disables those checks and tests whether the entire input is constant. Record the package version when reproducing edge cases.

### Worked example A: a visible disagreement

Consider two already split sequences, $(0,1,2,3)$ and $(4,5,6,7)$. This tiny deterministic example explains arithmetic; it is not a recommended simulation length. Their means are $1.5$ and $5.5$, and the overall mean is $3.5$. Each sample variance is

$$
\frac{2.25+0.25+0.25+2.25}{3}=\frac53.
$$

Thus $W=5/3$, while

$$
B=\frac4{2-1}\{(1.5-3.5)^2+(5.5-3.5)^2\}=32.
$$

Consequently $\widehat V^+=(3/4)(5/3)+32/4=9.25$, giving

$$
\widehat R_{\mathrm{basic}}=\sqrt{9.25/(5/3)}
=\sqrt{5.55}\approx2.355844.
$$

The large ratio reflects the separation between sequence locations. Increasing the number of observations within each of these separated regions would not make their distributions agree.

## 14.4 Rank normalization changes what is compared

Raw variance ratios can behave poorly when extreme observations dominate the estimated variance. Ranking provides a comparison whose scale is determined by order rather than the magnitude of extremes.

Pool all $S=mn$ observations in the split sequences. Assign ranks $r_{ji}$ from 1 to $S$, using the average of the occupied ranks for ties. Transform them to normal scores:

$$
z_{ji}=\Phi^{-1}\left(\frac{r_{ji}-3/8}{S+1/4}\right),
$$

where $\Phi$ is the standard normal distribution function. Apply the preceding variance ratio to the $z_{ji}$, retaining sequence membership. Call the result $\widehat R_{\mathrm{rank}}$.

The denominator convention deserves attention. The symmetric Blom formula is $(r-c)/(S-2c+1)$ with $c=3/8$, yielding $S+1/4$. This is the convention in the inspected [`posterior` source implementation](https://raw.githubusercontent.com/stan-dev/posterior/master/R/convergence.R). Some printed accounts show $S-1/4$; that expression differs from the implementation followed here. With the symmetric convention, complementary ranks map to opposite normal scores.

For example, the pooled vector $(1,1,3,5)$ has average ranks $(1.5,1.5,3,4)$. With $S=4$, the transformed probabilities are approximately $(0.2647,0.2647,0.6176,0.8529)$ and the scores are $(-0.6289,-0.6289,0.2993,1.0491)$. The tie remains a tie. The scores are finite because the probability arguments lie strictly between zero and one.

These scores are neither independent nor exactly normally distributed. They share estimated ranks, and the original simulation dependence remains. Ranking also does not repair a nonexistent estimand. A Cauchy target has a median but no finite expectation. Reassuring rank diagnostics may support an investigation of its median; they cannot justify reporting a Cauchy posterior mean with a normal standard error.

A strictly increasing transformation of all observations preserves ranks and hence $\widehat R_{\mathrm{rank}}$. This makes the location comparison insensitive to choices such as expressing a positive quantity on its original or logarithmic scale. It also explains a limitation: ranks deliberately discard information about numerical distances.

## 14.5 Folding adds a scale comparison

Different sequences can have the same center but very different spreads. Ranking alone does not guarantee detection of this problem: symmetric narrow and wide sequences may still have similar average scores.

Let $\widetilde x$ be the median of all retained original observations. Form the folded values

$$
d_{ji}=|x_{ji}-\widetilde x|.
$$

Split these values consistently, pool and rank normalize them, and calculate a second variance ratio, $\widehat R_{\mathrm{fold}}$. The modern reported statistic is

$$
\widehat R=\max\{\widehat R_{\mathrm{rank}},\widehat R_{\mathrm{fold}}\}.
$$

Folding turns distance from a common center into a location variable. A narrow sequence now tends to occupy the low ranks, and a wide sequence tends to occupy higher ranks. The combined construction addresses distinct failures identified by [Vehtari and colleagues](https://sites.stat.columbia.edu/gelman/research/published/rhat.pdf).

The executable generates four independent normal sequences of length 2,000, with standard deviations $0.15,1,1,1$. All centers are zero, but their laws differ. Its printed results are

```text
Scale mismatch: location=0.9999, folded=1.2556, max=1.2556
```

The location statistic looks reassuring because the centers agree; folding exposes the scale restriction. These artificially altered sequences illustrate a diagnostic mechanism, rather than an invariant sampler for a common target.

Folding takes place in the original measurement scale before rank normalization. A nonlinear increasing transformation can change the ordering of distances from the median, so the folded statistic need not be invariant under that transformation. In applications, examine scientifically meaningful transformations as well as the default parameter representation. A diagnostic is a question about a particular function of the state.

## 14.6 Bulk ESS and tail ESS measure different behavior

For a stationary scalar process $Y_t$ with variance $v>0$, an appropriate central limit theorem and summable autocorrelations motivate

$$
\tau_Y=1+2\sum_{k=1}^{\infty}\rho_Y(k),
\qquad
\operatorname{ESS}_Y=\frac{S}{\tau_Y}.
$$

This is a variance equivalence: an average based on $S$ dependent observations has approximately the same variance as an independent average with $\operatorname{ESS}_Y$ draws. Estimating that number requires estimating the long-run variance, as discussed in [Chapter 13](13-mc-error.md). It does not literally remove redundant observations.

**Bulk ESS** is the multichain ESS estimate computed on pooled rank normalized split draws $z_{ji}$. It summarizes efficiency for that transformed variable. This is the precise definition in the [`posterior` bulk ESS documentation](https://mc-stan.org/posterior/reference/ess_bulk.html). Bulk ESS is not generally the ESS for the original-scale mean, a squared parameter, or a predicted outcome.

For **quantile ESS**, choose $p$, estimate the pooled quantile $\widehat q_p$, and create indicator sequences

$$
y_{ji}^{(p)}=\mathbf1\{x_{ji}\leq\widehat q_p\}.
$$

Compute their multichain ESS with splitting. **Tail ESS** is the minimum of the quantile ESS values for $p=0.05$ and $p=0.95$, as specified by the [`posterior` tail ESS documentation](https://mc-stan.org/posterior/reference/ess_tail.html). It counts neither observations beyond a threshold nor effective draws in a subset obtained by deleting the center. All draws contribute through their indicators, preserving waiting times between visits.

At a population quantile, $F(q_p)=p$ for a continuous distribution. Therefore estimating a quantile locally depends on how well the simulation estimates the indicator probability near $p$. In software, the threshold is itself estimated from the pooled draws; quantile interpolation and tie handling should be documented. A discrete variable with a large atom can make an indicator constant, in which case a useful ESS may be unavailable. The [`posterior` quantile ESS documentation](https://mc-stan.org/posterior/reference/ess_quantile.html) provides the interface for probabilities beyond the defaults.

### How the multichain estimate reacts to disagreement

One common multichain autocorrelation construction, for transformed observations $y$, is

$$
\widehat\rho_k
=1-\frac{W-m^{-1}\sum_{j=1}^m s_j^2\widehat\rho_{jk}}
{\widehat V^+},\qquad \widehat\rho_0=1.
$$

Here $\widehat\rho_{jk}$ is the within-sequence autocorrelation estimate at lag $k$, using the chosen autocovariance normalization. If sequence locations disagree, $\widehat V^+$ can remain much larger than $W$. Even when within-sequence autocorrelations decline, the combined estimate then remains elevated. Estimated ESS becomes small, reflecting information lost through disagreement as well as local persistence.

Summing noisy autocorrelations over every available lag is unstable. Initial positive and initial monotone estimators pair adjacent lags, $P_k=\widehat\rho_{2k}+\widehat\rho_{2k+1}$, retain an initial positive sequence, and enforce nonincreasing pair sums. For retained pairs through $K$, the resulting integrated-time estimate has the form $\widehat\tau=-1+2\sum_{k=0}^K\widetilde P_k$. Production implementations include finite-sample safeguards and special handling of antithetic behavior; our executable does not implement ESS. The spectral arguments motivating these paired sequences require reversibility and suitable moment conditions, and should not be asserted for arbitrary nonreversible output.

Default tail ESS concerns two particular quantiles. An adequate value provides no automatic assurance about the $0.999$ quantile or a rare decision event. Compute a localized diagnostic for the actual question.

## 14.7 Precision belongs to an estimand {#sec-147-precision-belongs-to-an-estimand}

Suppose the reported quantity is $\mu_f=E_\pi[f(X)]$. Under a valid finite-variance Markov chain CLT and a usable long-run variance estimate,

$$
\operatorname{MCSE}(\widehat\mu_f)
\approx\frac{\operatorname{sd}_\pi(f)}{\sqrt{\operatorname{ESS}_f}}.
$$

Both factors refer to $f$. If $\operatorname{sd}_\pi(f)=3$ and $\operatorname{ESS}_f=900$, the estimated standard error is $0.1$ in the units of $f$. Using a bulk rank ESS of 900 in that calculation would require additional justification; it measures another transformed process.

For an event with probability $p$, the function is an indicator, with variance $p(1-p)$. At $p=0.05$ and indicator ESS 400, the approximate probability MCSE is $\sqrt{0.05(0.95)/400}=0.0109$. The estimate may have modest absolute error but substantial relative error. Whether that is acceptable depends on the decision.

For a continuous quantile $q_p$, assume a positive finite target density $g(q_p)$ and conditions supporting a quantile CLT. Linearize $F$ near $q_p$:

$$
0\approx\widehat F(q_p)-p+g(q_p)(\widehat q_p-q_p).
$$

The empirical CDF error is an indicator-average error. Dividing by the local density gives

$$
\operatorname{MCSE}(\widehat q_p)
\approx\frac{\sqrt{p(1-p)/\operatorname{ESS}_{\mathbf1\{X\leq q_p\}}}}
{g(q_p)}.
$$

Small density makes a quantile sensitive to a small probability error. Estimating that density adds uncertainty; this local derivation is not a prescription to use an arbitrary noisy density estimate. The quantile CLT in [Doss, Flegal, Jones, and Neath](https://arxiv.org/pdf/1207.6432), Section 3.2, formalizes this indicator long-run variance divided by squared density. Their assumptions include a continuous positive density at the quantile and sufficiently fast mixing; an indicator CLT at one fixed threshold alone is not the entire quantile argument. Discrete quantiles and density zeros require different analysis. In every case, MCSE describes sampling variation under the assumed exploration regime, rather than a bound on undiscovered bias.

### Worked precision budget: median versus upper endpoint

Suppose the target is standard normal with density $\phi$, so we can calculate the local density exactly. To isolate the effect of density, assume each quantile's own indicator ESS equals 10,000. For a desired quantile MCSE $\epsilon$, rearranging the preceding formula gives the approximate requirement

$$
\operatorname{ESS}_{p}\geq
\frac{p(1-p)}{\epsilon^2\phi(\Phi^{-1}(p))^2}.
$$

The executable evaluates these quantities without simulating or fitting an ESS:

| $p$ | $q_p$ | Density at $q_p$ | MCSE at indicator ESS 10,000 | Indicator ESS for MCSE $0.01$ |
|---|---:|---:|---:|---:|
| $0.50$ | $0.0000$ | $0.39894$ | $0.01253$ | $15{,}708$ |
| $0.95$ | $1.6449$ | $0.10314$ | $0.02113$ | $44{,}656$ |
| $0.99$ | $2.3263$ | $0.02665$ | $0.03733$ | $139{,}371$ |

The 99th percentile requires about $8.87$ times the median's indicator ESS for the same MCSE in parameter units. In real output the indicator ESS values can also differ, making the discrepancy larger or smaller. These are asymptotic planning calculations, not finite-sample coverage guarantees. Near extreme probabilities, a normal approximation can be poor even when a default ESS threshold is met.

For a reported interval $[q_{0.025},q_{0.975}]$, check those two quantiles specifically; default tail ESS checks $0.05$ and $0.95$. Report each endpoint's MCSE in its original units. An interval describing uncertainty under the target and an error bar describing uncertainty in its computed endpoint answer different questions.

### Worked nonregular benchmark: a flat CDF at the median {#worked-nonregular-benchmark-a-flat-cdf-at-the-median}

**Predict first.** Suppose independent simulation estimates the probability $P(X\le0)=1/2$ with the usual $N^{-1/2}$ error. Must the sample median also have standard deviation of order $N^{-1/2}$? The positive-density assumption in the regular quantile calculation matters even without MCMC dependence.

For $k\ge1$, consider the continuous distribution on $[-1,1]$ with CDF

$$
F_k(x)=\frac{1+\operatorname{sgn}(x)|x|^k}{2},\qquad -1\le x\le1,
$$

extended by zero below $-1$ and one above $1$, with $\operatorname{sgn}(0)=0$. It has a unique median zero. For $0<|x|<1$ its density is $f_k(x)=k|x|^{k-1}/2$; define $f_1(0)=1/2$ and $f_k(0)=0$ for $k>1$. This density is continuous at zero. The issue is the local CDF relation $F_k(x)-1/2=\operatorname{sgn}(x)|x|^k/2$, not an arbitrary choice of a density's value at one point. Changing a density at a single point changes no probabilities.

Take **iid** draws $X_1,\ldots,X_N$ from this law, with positive odd $N=2a-1$, and let $M=X_{(a)}$ be the middle order statistic. At least $a$ observations must fall at or below $x$ for the median to do so. Consequently its exact finite-sample CDF is

$$
P(M\le x)
=P\{\operatorname{Binomial}(N,F_k(x))\ge a\}
=\sum_{j=a}^N\binom Nj F_k(x)^j\{1-F_k(x)\}^{N-j}.
$$

The probability transform sends each observation to an independent uniform, and preserves their order. Thus $U=F_k(M)$ is the $a$th order statistic of $2a-1$ uniforms. Differentiating the displayed binomial tail in $u$ gives density

$$
\frac{(2a-1)!}{\{(a-1)!\}^2}u^{a-1}(1-u)^{a-1},\qquad 0<u<1,
$$

so $U\sim\operatorname{Beta}(a,a)$. This identifies the full median law, rather than merely a linear approximation at zero.

**Compute its variance exactly.** Symmetry gives $E[M]=0$, while $M=\operatorname{sgn}(2U-1)|2U-1|^{1/k}$. A change of variables shows $V=(2U-1)^2\sim\operatorname{Beta}(1/2,a)$: the density of $2U-1$ is proportional to $(1-v^2)^{a-1}$ on $(-1,1)$, and squaring supplies the factor $V^{-1/2}$. Therefore

$$
\operatorname{Var}(M)=E[V^{1/k}]
=\frac{B(1/2+1/k,a)}{B(1/2,a)}
=\prod_{j=0}^{a-1}\frac{k(2j+1)}{k(2j+1)+2},
$$

where $B(r,s)=\int_0^1v^{r-1}(1-v)^{s-1}\,dv$. The product follows from the Beta–Gamma identity, or repeated integration by parts. For $k=1$ it telescopes to $1/(N+2)$. For $k=2$ it is $\binom{2a}{a}/4^a$. At $N=3$, these variances are $1/5$ and $3/8$, respectively; the flatter CDF creates a noisier median from the same number of independent draws.

**Derive the nonregular limit.** For fixed real $t$, set $x_N=tN^{-1/(2k)}$. Eventually $x_N$ is inside the support, and

$$
F_k(x_N)=\frac12+\frac{\operatorname{sgn}(t)|t|^k}{2\sqrt N}.
$$

In the exact binomial tail, the standardized threshold $(a-NF_k(x_N))/\sqrt{NF_k(x_N)\{1-F_k(x_N)\}}$ tends to $-\operatorname{sgn}(t)|t|^k$. The binomial CLT, with success probabilities tending to $1/2$, therefore gives

$$
N^{1/(2k)}M\ \Rightarrow\
\operatorname{sgn}(Z)|Z|^{1/k},\qquad Z\sim N(0,1),
$$

whose CDF at $t$ is $\Phi(\operatorname{sgn}(t)|t|^k)$. For $k=1$ this is the usual normal limit; for $k=2$ the median scale is $N^{-1/4}$ and the limit is nonnormal. The regular theorem cited above remains valid under its positive-density assumptions. This example derives a different law outside those assumptions; it is not a consequence claimed by that theorem.

Weak convergence alone does not establish convergence of variances. For fixed $c,d$, Stirling's formula gives $\Gamma(a+c)/\Gamma(a+d)\sim a^{c-d}$. Apply that ratio directly to the exact Beta expression:

$$
\operatorname{Var}(M)
=\frac{\Gamma(1/2+1/k)}{\sqrt\pi}
\frac{\Gamma(a+1/2)}{\Gamma(a+1/2+1/k)}
\sim C_kN^{-1/k},\qquad
C_k=\frac{2^{1/k}\Gamma(1/2+1/k)}{\sqrt\pi}.
$$

Thus the median's standard deviation is asymptotically proportional to $N^{-1/(2k)}$. Halving it requires an asymptotic draw multiplier $2^{2k}$: **4 for $k=1$, 16 for $k=2$, and 256 for $k=4$**. These are asymptotic comparisons within a fixed family, with odd sample sizes chosen accordingly; they are not exact finite-$N$ guarantees.

Meanwhile the fixed-threshold indicator $\mathbf1\{X\le0\}$ is Bernoulli with probability $1/2$ for every $k$. Its per-draw variance is $1/4$, and the iid sample CDF at zero has exact standard deviation $1/(2\sqrt N)$. The same probability-scale precision can therefore coexist with very different median errors in parameter units. Here $N$ is the actual number of independent draws. Substituting an estimated ESS into these iid order-statistic identities or nonregular rates is not justified by a fixed-threshold indicator CLT.

The chapter executable supplies exact rational CDF and variance checks for $k\in\{1,2,4\}$ and odd $1\le N\le1001$, plus a deterministic comparison table. This is a bounded reference calculation, not an MCMC ESS estimator. Exercise 7 changes the flatness to $k=4$ and asks for an exact finite-sample coverage calculation before using the asymptotic budget.

## 14.8 Read plots alongside numerical summaries

A trace preserves time. Look for sustained drift, long plateaus, changes in amplitude, and actual movement between important regions. Thin plotting for display if necessary, while calculating diagnostics on the complete retained output. Plotting only a short terminal window can hide behavior earlier in the retained run.

A chain-specific rank histogram instead asks which parts of the pooled ordering each chain occupies. If chains explore similarly, their rank histograms should have similar shapes. Approximate flatness additionally requires ranks without substantial ties and enough effectively independent observations. Average ranks of a discrete target can leave entire bins empty even under perfect sampling: independent Bernoulli draws occupy only two average-rank locations. For such targets compare each chain's category frequencies or rank pattern with the pooled pattern. Serial dependence changes variability, so naive independent-draw confidence bands can be misleading.

| Mechanism | Possible trace signature | Possible rank signature |
|---|---|---|
| Different locations | Persistent vertical offsets | Chains occupy different rank ranges |
| Restricted scale | Similar centers, unequal amplitudes | Narrow chain concentrated near middle ranks |
| Time drift | Early and late windows differ | Split halves favor different rank ranges |
| Sticking | Long repeated values or plateaus | Ties or limited occupied rank ranges |

These signatures suggest explanations; they are not uniquely identifying tests. A correct but highly dependent chain can make uneven rank histograms, and all chains can share the same unobserved failure. Plot important functions, such as a predicted risk or a parameter product, rather than only individual coordinates. ESS plotted against cumulative run length can reveal unstable estimation, although monotone improvement is not guaranteed in finite samples.

### A reference calculation for rank-plot variability

Consider $M$ independent groups of $L$ iid draws from the same continuous distribution, giving $T=ML$ distinct pooled ranks. One group's $L$ ranks form a uniformly selected subset of those $T$ ranks. If a fixed rank bin contains $K$ pooled ranks, its count $C$ in that group therefore satisfies

$$
P(C=c)=\frac{\binom Kc\binom{T-K}{L-c}}{\binom TL},
\qquad
E[C]=L\frac KT,\qquad
\operatorname{Var}(C)=L\frac KT\left(1-\frac KT\right)\frac{T-L}{T-1}.
$$

The factor $(T-L)/(T-1)$ accounts for sampling ranks without replacement. With four groups of 1,000 draws and ten equal rank bins, the expected count is 100 and its standard deviation is $8.2169$. Direct summation gives the pointwise central interval $[84,116]$, with probability $0.95558$ under this iid reference law; discreteness prevents exactly $0.95$ coverage here. Thus visibly unequal bars can occur with entirely correct sampling.

Pointwise intervals for individual bins do not give 95% simultaneous coverage for an entire plot. [Säilynoja, Bürkner, and Vehtari](https://arxiv.org/html/2103.10522), Sections 3 and 4.2.3, develop simultaneous rank ECDF bands and investigate their sensitivity to serial correlation. Our calculation assumes independent draws; applying its bands unchanged to MCMC output, or replacing $L$ by bulk ESS, has no general calibration guarantee. Keep the original draws for ESS and trace analysis, and state any additional dependence assumptions used for a graphical test.

### Interactive diagnostic lab

<div class="mcmc-lab" data-lab="diagnostics"></div>

Vary the AR(1) correlation $\rho$ between negative and positive values and select the mean or second moment. For $X$, compare the empirical autocorrelation with $\rho^k$; for $X^2$, compare it with $\rho^{2k}$. The lab begins with a stationary Gaussian process of unit marginal variance. For a selected observable whose lag-$k$ correlation is $c^k$, it displays the exact finite-run ESS

$$
\operatorname{ESS}_{\mathrm{finite}}=
\frac{n}{1+2\sum_{k=1}^{n-1}(1-k/n)c^k},
$$

where $c=\rho$ for $X$ and $c=\rho^2$ for $X^2$. Its theoretical standard error is $\sqrt{v/\operatorname{ESS}_{\mathrm{finite}}}$, with marginal variance $v=1$ or $2$, respectively. The long-run ESS approximation is $n(1-c)/(1+c)$. At negative $\rho$, the mean can have ESS above the draw count while the second moment remains positively correlated. Switching observables preserves the underlying seeded draws, making their different precision visible without changing the sampler.

Try a short, strongly persistent run and compare the finite-run reference with the long-run approximation. Repeat seeds to examine empirical variation. These are process-specific theoretical quantities, not fitted bulk or tail ESS values. The lab does not calculate rank or folded $\widehat R$ and cannot demonstrate detection of missing modes. [Chapter 13's predict–run–explain activity](13-mc-error.md#sec-1310-laboratory-and-reproducible-calculation) develops the negative-correlation comparison in detail.

## 14.9 Worked example B: agreement around the wrong answer

Consider the symmetric mixture

$$
\pi(x)=\tfrac12\phi(x+6)+\tfrac12\phi(x-6),
$$

where $\phi$ is the standard normal density. Its exact mean is zero, and symmetry gives $P_\pi(X>0)=1/2$.

First generate four independent sequences from $N(-6,1)$. These are deliberately a surrogate for chains trapped in the negative component; they are not a correct sampler for the mixture. With 2,000 observations per sequence, the executable prints

```text
location=1.0000, folded=0.9999, max=1.0000, mean=-5.9957
Surrogate iid MCSE=0.0111
```

The standard error is legitimate for estimating the negative component's mean from these independent draws. It says nothing about their approximately six-unit error relative to the mixture mean. Increasing the number of such surrogate observations shrinks the reported standard error while preserving that error. Mutual agreement establishes only that these sequences resemble one another.

Next run an actual random-walk Metropolis kernel with a standard normal proposal increment and acceptance probability

$$
\alpha(x,y)=\min\{1,\pi(y)/\pi(x)\}.
$$

The symmetric proposal gives the usual exact-invariance argument. Start two chains at $-6$ and two at $6$, discard 500 initial iterations, and retain 2,000 per chain. In the seeded example there are zero retained crossings of zero. The reported $\widehat R$ is $1.7395$, and each chain's positive fraction is either zero or one. Dispersed starts reveal an exploration failure that common starts could conceal.

The pooled mean is nevertheless $0.0054$, close to its exact value! Equal numbers of chains initialized on either side manufacture approximately balanced occupancy. This does not demonstrate the kernel's ability to discover relative mode weights. For a target with different mixture weights, the same initialization could impose the wrong balance. Diagnose exploration using within-chain movement and mode occupancy as well as a favorable pooled answer.

Run the complete reproducible example with `python examples/ch14.py`. It uses separate seeded standard-library generators and prints the arithmetic, scale, surrogate, Metropolis, quantile-budget, and iid rank-bin calculations. Its rank/folded formulas implement the stated finite-array construction, but it is a teaching script without a production library's full validation and numerical coverage.

A second blind spot involves dependence. Two bivariate distributions can have standard normal coordinate marginals but correlations $+0.9$ and $-0.9$. Coordinate comparisons alone can look alike while $E[XY]$ differs by $1.8$. Monitoring the product and a joint scatter plot exposes information omitted by marginal checks. No finite list of functions proves agreement for every possible scientific question.

## 14.10 A report that leads to a decision

A practical report names the target, sampler, initialization strategy, warmup policy, number of original chains, and retained length. It states that $\widehat R$ uses rank normalization, splitting, and folding, and gives bulk/tail ESS together with MCSE for the main reported estimands. It includes relevant plots and sampler-specific warnings, plus limitations that remain unresolved.

Modern screening guidance commonly asks for $\widehat R<1.01$ and roughly 100 bulk effective draws per original chain, or about 400 total with four original chains. The [rank-diagnostics paper](https://sites.stat.columbia.edu/gelman/research/published/rhat.pdf) also uses 400 as a screening threshold for bulk and tail ESS in its four-chain examples. These are starting checks, not precision guarantees or convergence theorems. The [Stan diagnostics guide](https://mc-stan.org/learn-stan/diagnostics-warnings.html) places numerical thresholds within a broader investigation. A rare-event probability may require orders of magnitude more effective draws.

Respond to the mechanism. Drift suggests reviewing warmup and adaptation in [Chapter 15](15-adaptation.md). Strong dependence or scale restriction motivates geometry and reparameterization in [Chapter 16](16-geometry.md). HMC warnings require the additional checks in [Chapter 22](22-hmc-diagnostics.md). Separated modes lead to [Chapter 25](25-tempering.md). Label switching requires scientifically invariant estimands, as discussed in [Chapter 38](38-mixtures.md); arbitrary relabeling solely to improve a diagnostic can conceal the actual question.

Do not silently delete a disagreeing chain or select only favorable parameters. Extending the run is useful when additional computation addresses ordinary autocorrelation. It may accomplish little when transitions between relevant regions are effectively inaccessible. Repeating the same computation with different starts or a different parameterization can provide stronger evidence than merely accumulating more observations in the same region.

## 14.11 Exercises with worked solutions

<div class="exercise" id="mcmc-14-diagnostics-ex-1">

### Exercise 1: identify the scaling error

Recalculate Example A. A colleague sets $B=8$, the unscaled sample variance of the two sequence means. What value do they obtain, and why is it wrong?

<details>
<summary>Solution</summary>

The correct values are $W=5/3$, $B=32$, and $\widehat R=\sqrt{5.55}=2.355844$. Using $B=8$ instead gives $\widehat V^+=1.25+2=3.25$ and $\widehat R=\sqrt{1.95}=1.396424$. The factor $n=4$ converts variability of means to the observation-variance scale. Omitting it changes the definition and understates between-sequence disagreement.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-2">

### Exercise 2: expose opposing drifts

Take the sequences $(0,1,2,3,4,5,6,7)$ and its reversal. Explain how an unsplit comparison misses their drift and calculate the basic split statistic.

<details>
<summary>Solution</summary>

Both full means equal $3.5$, so unsplit $B=0$ and $\widehat R=\sqrt{7/8}<1$. Splitting gives means $1.5,5.5,5.5,1.5$, within variance $W=5/3$, and $B=(4/3)(16)=64/3$. Hence $\widehat V^+=1.25+16/3=79/12$ and $\widehat R=\sqrt{79/20}\approx1.9875$. These deterministic sequences are an illustration of information revealed by splitting, not samples validating a Markov chain CLT.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-3">

### Exercise 3: distinguish rank and folded invariance

Explain why a strictly increasing transformation preserves the location-rank statistic but need not preserve the folded statistic. Give concrete distances whose order reverses.

<details>
<summary>Solution</summary>

Strictly increasing transformations preserve ordering and ties, hence average ranks and normal scores. For pooled values $(-2,0,1)$, the median is zero and the outer distances are 2 and 1. Under exponentiation, the median is 1; the outer distances become $1-e^{-2}\approx0.865$ and $e-1\approx1.718$. Their order reverses. Thus folded ranks can change even though ordinary ranks do not.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-4">

### Exercise 4: interpret a Cauchy result

A Cauchy simulation has $\widehat R=1.002$ and a large bulk ESS. Can you report its mean with a small standard error? What could you report instead?

<details>
<summary>Solution</summary>

The Cauchy distribution has no finite expectation, so an ordinary mean MCSE has no appropriate finite-variance CLT justification. Rank scores having bounded finite-sample values does not change the target's moments. A median, a specified quantile, or a bounded event probability is a meaningful estimand. Each still requires exploration checks and its own precision assessment.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-5">

### Exercise 5: plan rare-event precision

Assuming an appropriate indicator CLT, estimate the ESS needed to report an event probability near $0.01$ with MCSE $0.001$. Does bulk ESS 400 meet the requirement?

<details>
<summary>Solution</summary>

Solve $\sqrt{p(1-p)/\operatorname{ESS}}=0.001$. At $p=0.01$, the result is $\operatorname{ESS}=0.0099/10^{-6}=9{,}900$. This concerns the event indicator, so bulk ESS 400 does not establish sufficient precision. If the event has never been visited, a plug-in estimate of zero variance is particularly uninformative about undiscovered event probability.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-6">

### Exercise 6: detect incorrect dependence

Suppose different chains explore centered bivariate normal distributions with unit marginal variances, but some have correlation $+0.9$ and others $-0.9$. Propose a diagnostic function and compute its expectations.

<details>
<summary>Solution</summary>

Use $f(X,Y)=XY$. Since both means vanish, $E[XY]=\operatorname{Cov}(X,Y)=\rho$, giving expectations $+0.9$ and $-0.9$. A chain comparison for $XY$ can expose the discrepancy, as can joint scatter plots. Individual-coordinate marginals are identical in this construction. Agreement on coordinates therefore does not imply agreement on joint behavior, and agreement on the product would still not prove global convergence.

</details>

</div>

<div class="exercise" id="mcmc-14-diagnostics-ex-7">

### Exercise 7: budget an interval endpoint

A normal target has unknown mean and known standard deviation $3$. Suppose an adequate quantile CLT applies. Use the worked precision budget to estimate the indicator ESS needed to compute its 99th percentile with MCSE $0.03$. Would default tail ESS above 400 establish this precision?

**Changed task.** Now use iid draws from $F_4$ in the nonregular benchmark, with $N=3$. Derive the exact variance of the sample median and $P(|M|\le1/2)$. Compare them with $F_2$ at the same sample size. Derive the $F_4$ median's convergence rate and asymptotic draw multiplier for halving its standard deviation. Does the unchanged CDF-indicator standard deviation at zero establish the same median precision?

<details>
<summary>Optional hint for the changed task</summary>

Here $a=2$. Use the two factors in the exact variance product. The middle order statistic of three uniforms has CDF $3u^2-2u^3$; evaluate it at $u=F_k(1/2)$ and $u=F_k(-1/2)$. Derive the draw multiplier from the variance asymptotic, rather than from weak convergence alone.

</details>

<details>
<summary>Solution</summary>

The quantile is $\mu+3\Phi^{-1}(0.99)$ and its density is $\phi(\Phi^{-1}(0.99))/3$. Dividing by this density multiplies the quantile MCSE by three. A tolerance of $0.03$ is therefore equivalent to $0.01$ in the standard normal calculation: approximately $139{,}371$ effective indicator draws. Default tail ESS checks different thresholds, and 400 does not establish either the required localized ESS or the specified precision. The result is an asymptotic budget, conditional on adequate exploration and variance estimation.

For $F_4$ and $N=3$, the variance product gives $(4/6)(12/14)=4/7$. Put $v=(1/2)^k$. Since $F_k(1/2)=(1+v)/2$ and $F_k(-1/2)=(1-v)/2$, the three-draw median CDF gives central coverage $(3v-v^3)/2$. For $k=4$, $v=1/16$, yielding $767/8192$. For $k=2$ the variance is $(2/4)(6/8)=3/8$, and $v=1/4$ gives coverage $47/128$. The flatter CDF has a larger median variance and lower coverage of this fixed interval.

The $F_4$ median scale is $N^{-1/8}$, with nonnormal limit $\operatorname{sgn}(Z)|Z|^{1/4}$. Separately, its exact variance has asymptotic form $C_4N^{-1/4}$, so its standard deviation is proportional to $N^{-1/8}$. Halving that standard deviation requires an asymptotic factor $2^8=256$ in iid draws. The sample CDF at zero still has standard deviation $1/(2\sqrt N)$ under both families; this probability-scale statement does not establish equal precision for their inverse-CDF medians. None of these exact iid calculations permits an unproved substitution of estimated ESS for $N$.

</details>

</div>

## 14.12 Key takeaways

Modern $\widehat R$ combines splitting, pooled ranks, and folded distances to investigate different forms of disagreement. Bulk and tail ESS describe particular transformed processes; scientific precision requires the ESS and MCSE of the estimand being reported. Preserve time and chain structure, inspect plots, and treat undefined diagnostics as questions to resolve.

Above all, mutually consistent simulations can share a serious error. A defensible analysis connects diagnostics to target structure, initialization, sampler behavior, and numerical precision, while explicitly retaining the possibility of unvisited regions.
