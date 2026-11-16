var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: diagnostics-necessary-never-sufficient
title: "Diagnostics Are Necessary, Never Sufficient"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Diagnostics Are Necessary, Never Sufficient {#section-1-diagnostics-are-necessary-never-sufficient}

A sampler that runs without crashing is not necessarily a sampler that works. This chapter covers the essential diagnostics for MCMC output: split $\\hat{R}$, effective sample size, divergences, and sensitivity checks. No finite set of diagnostics can prove convergence, but careful diagnostics can reveal failures that would otherwise go unnoticed.

<a id="section-3-split-hat-r-and-chain-agreement"></a>
## Split $\\hat{R}$ and chain agreement {#section-5-split-hat-r-and-chain-agreement}

The potential scale reduction factor $\\hat{R}$ compares the between-chain variance to the within-chain variance. In its modern rank-based split formulation, each chain is split in half and all halves are compared. Values close to one indicate that the chains have similar means and variances. Values substantially above $1.01$ suggest that at least one chain has not reached the stationary distribution.

The threshold $1.01$ is a heuristic, not a guarantee. A chain trapped in one mode of a multimodal posterior can agree with itself and with other chains started in the same mode, yielding $\\hat{R} \\approx 1.00$ while missing other modes entirely. Conversely, a well-mixing chain can occasionally produce $\\hat{R} = 1.02$ due to sampling variation alone.

<a id="section-9-effective-sample-size"></a>
## Effective sample size {#section-11-effective-sample-size}

Bulk ESS measures how many independent samples the combined post-warmup draws are equivalent to for estimating central tendencies. Tail ESS does the same for extreme quantiles. Both should be reported. For rank-normalized diagnostics, $400$ total across chains is a common minimum warning threshold, not a per-chain guarantee of accuracy. The required bulk or tail ESS must ultimately be set by the Monte Carlo precision needed for the particular estimand and application.

ESS is estimand-specific. A chain may have excellent ESS for the posterior mean but poor ESS for a tail probability or a nonlinear transformation of the parameters. Always report ESS for the specific quantities of scientific interest, not just for the raw parameters.

<a id="section-15-divergences-tree-depth-and-energy"></a>
## Divergences, tree depth, and energy {#section-17-divergences-tree-depth-and-energy}

For HMC specifically:

- **Divergences** indicate numerical instability. Even one divergence is a warning; persistent divergences can bias estimates and require investigation.
- **Maximum tree depth** hits occur when the No-U-Turn criterion fails to stop the trajectory within the allotted number of steps. This can indicate regions where the posterior geometry is difficult.
- **Energy Bayesian fraction of missing information (E-BFMI)** measures whether the momentum resampling is adequate. Low E-BFMI suggests that the sampler is struggling to explore the energy distribution.

<a id="section-23-a-diagnostic-table"></a>
## A diagnostic table {#section-25-a-diagnostic-table}

A well-documented analysis reports diagnostics in a table:

| parameter | median | 90% interval | bulk ESS | tail ESS | $\\hat{R}$ | warnings |
|-----------|--------|--------------|----------|----------|-----------|----------|
| $\\alpha$  | $-0.4$ | $[-0.9, 0.1]$ | $1800$   | $1400$   | $1.00$    | none     |
| $\\tau$    | $0.3$  | $[0.1, 0.8]$  | $420$    | $260$    | $1.01$    | $3$ divergences |

The second row is not clean merely because $\\hat{R}$ is near one. The divergences and low tail ESS undermine tail summaries. The appropriate response is to reparameterize, inspect geometry, and rerun.

<a id="section-34-sensitivity-to-initialization-and-parameterization"></a>
## Sensitivity to initialization and parameterization {#section-36-sensitivity-to-initialization-and-parameterization}

Run multiple chains from dispersed initial values. If the posterior is unimodal and well-behaved, all chains should converge to the same region regardless of starting point. If some chains converge to different regions, the posterior is likely multimodal or the sampler is failing to explore.

Vary the parameterization. For hierarchical models, compare centered and noncentered forms. If diagnostics differ materially, the parameterization matters and the better one should be reported.


<a id="section-41-visual-diagnostics"></a>
## Visual diagnostics {#section-43-visual-diagnostics}

Numerical summaries are necessary but not sufficient. Visual inspection of chains reveals patterns that statistics alone can miss:

- **Trace plots:** Plot parameter values against iteration. A well-mixing chain should look like "white noise" with no trends or cycles. A chain trapped in one mode shows flat periods; a chain with poor mixing shows slow oscillations.
- **Rank plots:** Rank the retained draws jointly across all chains, then plot each chain's histogram of these pooled ranks. For continuous draws exploring the same target, those histograms should be approximately uniform; systematic differences can reveal chain disagreement.
- **Autocorrelation plots:** Plot the sample autocorrelation function. Rapid decay indicates good mixing; slow decay indicates high autocorrelation and low ESS.
- **Pairs plots:** Plot scatterplots of parameter pairs. Strong correlations, funnels, or multimodality are visible as structured patterns.

<a id="section-50-the-geweke-diagnostic"></a>
## The Geweke diagnostic {#section-52-the-geweke-diagnostic}

The Geweke diagnostic compares means from an early window and a late window, using spectral-density estimates to account for autocorrelation in their difference. Software often defaults to the first $10\\%$ and last $50\\%$, but those fractions are choices rather than part of an invariant theorem. A large absolute Z-score suggests that the sampled windows are inconsistent with stationarity. The result is sensitive to the windows and spectral estimate, so use it as a supplementary check rather than a primary criterion.

<a id="section-54-a-practical-diagnostic-workflow"></a>
## A practical diagnostic workflow {#section-56-a-practical-diagnostic-workflow}

1. Run at least $4$ chains with $2{,}000$+ iterations each.
2. Discard warmup iterations.
3. Compute split $\\hat{R}$ for all parameters. Flag any value above $1.01$.
4. Compute bulk and tail ESS over the combined post-warmup draws. Treat total ESS below $400$ as a warning, and assess the relevant mean, quantile, or tail-probability MCSE against an application-specific precision target rather than imposing a context-free per-chain tail cutoff.
5. Inspect trace plots and rank plots for all flagged parameters.
6. For HMC, check for divergences, tree depth saturation, and low E-BFMI.
7. Run sensitivity checks: vary initialization, parameterization, and prior.
8. Document all diagnostics, including failures, in the analysis report.

No single diagnostic is decisive. The workflow combines multiple checks to build confidence or reveal problems.


<a id="section-68-hmc-specific-diagnostics"></a>
## HMC-specific diagnostics {#section-70-hmc-specific-diagnostics}

Beyond generic MCMC diagnostics, HMC requires checks specific to the Hamiltonian dynamics:

- **Energy error:** The difference $H(\\theta^{*}, r^{*}) - H(\\theta, r)$ at the end of a trajectory should be small. Large energy errors indicate that the step size is too large or the geometry is pathological.
- **Divergences:** Zero is the target. Any divergence is a warning: locate it in parameter space, seek a model- or parameterization-based remedy, rerun, and assess which summaries it may affect. A small percentage is not automatically acceptable.
- **E-BFMI:** Values below $0.3$ are a nominal software warning that the momentum resampling may be exploring the energy distribution poorly; interpret the diagnostic together with the model, sampler version, and other warnings.
- **Maximum tree depth:** The fraction of iterations hitting the maximum tree depth should be near zero. Frequent hits indicate that the posterior geometry requires longer trajectories than allowed.

<a id="section-77-practical-thresholds-and-their-limitations"></a>
## Practical thresholds and their limitations {#section-79-practical-thresholds-and-their-limitations}

Common diagnostics include $\\hat{R}<1.01$ and a rank-normalized bulk or tail ESS above a warning threshold such as $400$ total across chains. They are heuristics, not universal precision targets or theoretical guarantees. A chain set can satisfy them and still be unreliable if:

- The model is misspecified.
- The posterior is multimodal and only one mode was explored.
- The sampler has subtle bugs that do not affect the tested quantities.

Conversely, a chain can slightly exceed one threshold due to sampling variation and still be reliable. Use thresholds as guidelines, not as rigid pass/fail criteria.

<a id="section-87-extended-exercise-discussion"></a>
## Burn-in and stationarity {#section-98-burn-in-and-stationarity}

Warmup is the initial phase used to move away from initialization and, for adaptive algorithms, to tune the kernel. Exclude adaptive warmup draws from posterior summaries. The needed warmup schedule depends on the algorithm, initialization, and target geometry; a fixed fraction such as one half has no general justification. Diagnose the retained draws and increase or redesign warmup when the application and diagnostics require it.

Split $\\hat{R}$ compares early and late halves and can reveal some nonstationarity without choosing an arbitrary discard fraction. A value near one only says that this diagnostic did not detect a scale or rank discrepancy among those halves; it does not establish that the chains were stationary throughout or that they explored every relevant region.

<a id="section-102-thinning"></a>
## Thinning {#section-104-thinning}

Thinning retains only every $k$-th sample from the chain. Thinning reduces storage requirements and can make the retained samples approximately independent if $k$ is large enough. However, thinning discards information and is generally not recommended unless storage is severely limited.

There is no universal ESS-based thinning cutoff: its effect depends on the estimand, autocorrelation, computational cost and storage constraint, including the possibility of negative correlation. Modern practice favors storing all post-warmup samples and computing ESS from the full chain.

<a id="section-108-storage-and-reproducibility"></a>
## Storage and reproducibility {#section-110-storage-and-reproducibility}

MCMC output should be stored with sufficient metadata for reproducibility:
- Random seed and initialization.
- Sampler parameters (step size, mass matrix, adaptation schedule).
- Model specification (likelihood, prior, data).
- Diagnostic summaries ($\\hat{R}$, ESS, divergences).

Without this metadata, it is impossible to verify or reproduce the analysis. Store the output in a format that preserves numerical precision (e.g., binary floating-point) and includes all relevant metadata.


<a id="section-119-software-specific-diagnostic-outputs"></a>
## Software-specific diagnostic outputs {#section-121-software-specific-diagnostic-outputs}

Different MCMC software packages report different diagnostics. Stan reports split $\\hat{R}$, bulk ESS, tail ESS, divergences, tree depth, and E-BFMI. PyMC reports similar quantities plus sampler-specific statistics such as the number of leapfrog steps per iteration. JAGS reports a different set of convergence diagnostics based on the Brooks-Gelman-Rubin approach.

Regardless of software, the analyst should:
1. Understand what each diagnostic measures.
2. Know the software's default thresholds and their limitations.
3. Report all diagnostics, not just those that pass.
4. Document any custom settings or non-default choices.

<a id="section-129-reporting-mcmc-results"></a>
## Reporting MCMC results {#section-131-reporting-mcmc-results}

A complete MCMC report includes:
- Model specification (likelihood, prior, data).
- Sampler details (algorithm, parameters, adaptation).
- Convergence diagnostics ($\\hat{R}$, ESS, divergences).
- Posterior summaries (mean, SD, quantiles, MCSE).
- Sensitivity analysis (prior variations, initialization checks).
- Computational details (software version, hardware, runtime).

Omitting any of these makes the analysis difficult to verify or reproduce. In particular, reporting only posterior means without MCSE is insufficient because it conceals the uncertainty due to finite computation.

<a id="section-141-common-errors"></a>
## Common errors {#section-143-common-errors}

- **Treating $\\hat{R} < 1.01$ as a certificate of correctness.** It is a necessary check, not a sufficient one. Multimodal posteriors and initialization bias can evade detection.
- **Reporting only bulk ESS.** Tail quantities are often the scientifically relevant ones. A tail ESS of $50$ is a warning to compute and report quantile-specific Monte Carlo error; whether an interval endpoint is precise enough depends on the application's tolerance.
- **Ignoring sampler-specific warnings.** Divergences, tree depth saturation, and low E-BFMI are not cosmetic issues. They require investigation: divergences raise validity concerns, while tree-depth saturation primarily limits efficiency; passing other diagnostics does not establish convergence.
- **Running only one chain.** One chain can miss multimodality and cannot compare sensitivity across different starts. Use at least four chains from overdispersed starts.

<a id="section-148-practice-exercises"></a>
## A diagnostic begins with a target and a retained array {#section-173-a-diagnostic-begins-with-a-target-and-a-retained-array}

There are three objects to keep apart: the mathematical posterior, the transition rule intended to preserve it, and the finite array produced by an implementation. Diagnostics inspect the third object. Invariance proofs concern the second object and its relation to the first. A good-looking array cannot repair a missing Jacobian in the target or an incorrectly coded acceptance ratio.

For one scalar estimand g(theta), organize retained values as M rows of N chronological draws. Keep chain identities, iteration order and repeated rejection states. Concatenating all rows before measuring autocorrelation would insert artificial transitions at chain boundaries. Sorting a chain destroys its time dependence completely, even though its histogram is unchanged.

A reproducible array contract identifies the target density and its reference measure, the data, the exact transformation g, the number of independent chain runs, their starts and random streams, the warmup exclusion rule and the retained lengths. It also records any missing, infinite or constant values. Replacing an undefined diagnostic by one is an especially dangerous way to make a table look reassuring.

Scientific transformations matter. For a scale parameter, the mean of tau, the mean of log tau and the probability that tau exceeds a decision threshold are different estimands. Ranks are useful for detecting broad distributional disagreement, but a rank transformation does not convert all three estimation errors into the same number.

The working examples below use arrays to make diagnostic reasoning explicit. The public Gaussian companion consumes an actual fixed-length HMC record from Chapter 6; the disconnected-support example is constructed deliberately. Neither supplies a production NUTS fit of the hierarchy. That distinction is part of the input contract, rather than a footnote attached after a favorable result.

<a id="section-183-derive-the-within-and-between-comparison"></a>
## Derive the within and between comparison {#section-185-derive-the-within-and-between-comparison}

Let x_mn denote one scalar quantity from chain m at retained iteration n, with M≥2 and N≥2. Write the chain means as xbar_m and their average as xbar. The within-chain sample variances use N−1 in the denominator. Define
\\[
W=\\frac1M\\sum_{m=1}^M s_m^2,\\qquad
B=\\frac{N}{M-1}\\sum_{m=1}^M(\\bar x_m-\\bar x)^2,
\\]
and
\\[
\\widehat V^+=\\frac{N-1}{N}W+\\frac BN,\\qquad
\\widehat R=\\sqrt{\\widehat V^+/W}.
\\]
The factor N in B places variation of chain means on the same variance scale as variation of individual draws.

Why combine these pieces? If chains occupy different locations, each can have a small within-chain variance while their means disagree. W alone misses that disagreement. The B contribution inflates the combined estimate. If the means agree, B may be small, but that is only agreement among the recorded chains, not a comparison with an externally known posterior.

A complete finite calculation makes the units visible. Take two chains (0,1) and (2,3). Their means are one half and five halves; both sample variances are one half. Thus W=1/2, B=4 and Vhat-plus=9/4, giving Rhat=3/sqrt(2). Substituting the variance of all four values without the stated denominators would produce a different statistic.

Finite Rhat can be below one. For two identical chains (−1,1), W=2 and B=0, so the formula gives sqrt(1/2). This is not evidence of convergence “better than perfect.” Sampling variation and the estimator's finite weighting make a literal universal lower bound of one inappropriate. Software may use additional conventions, which should be recorded.

Splitting adds a comparison through time. Divide each retained chain into its first and last floor(N/2) values, dropping the single middle value when N is odd. Treat these 2M halves as rows for the calculation. The procedure compares early and late segments, so a common drift that leaves the full-chain means similar can become visible.

The halves are not newly independent experiments. They are pieces of the original trajectories, and the comparison is a diagnostic construction rather than an exact finite-sample significance test. Keep enough values in each half to estimate variation; the public companion requires at least four original retained draws and reports the split length.

If W is zero, dividing by it is not justified. All chains may be constant at one value, or different chains may be constant at different values. Both situations need explicit reporting. A program that silently returns Rhat=1 for a zero denominator has erased evidence about its own inability to assess variation.

<a id="section-209-pool-ranks-before-applying-a-normal-score"></a>
## Pool ranks before applying a normal score {#section-211-pool-ranks-before-applying-a-normal-score}

Ordinary variance comparisons are fragile for heavy-tailed quantities. A posterior may have a well-defined median but no finite variance. Even when the variance exists, a few extreme draws can dominate a short sample. Ranking replaces distances by order information before the same within/between calculation is used.

Pool all S retained split-array entries, assign ranks from one through S, and give every tied value its average rank. The normal-score transformation used here is
\\[
z=\\Phi^{-1}\\left(\\frac{r-3/8}{S+1/4}\\right),
\\]
with Phi the standard Normal CDF. The offsets keep the smallest and largest scores finite. This is the explicit Blom convention in the cited rank-diagnostic paper; changing the offset changes a finite implementation.

Ties deserve an exact example. For pooled values (0,0,1,2), the average ranks are (3/2,3/2,3,4). The probability arguments are therefore (9/34,9/34,21/34,29/34). Both zeroes receive the same score. Arbitrarily breaking their tie with random jitter would create artificial distinctions and add another randomization protocol.

Now compute split Rhat on the z array. The construction is invariant to strictly increasing transformations of the original scalar, because those preserve every ordering and tie. A strictly decreasing transformation reverses the ranks and changes the signs of these symmetric normal scores, leaving their variance comparison unchanged. A nonmonotone transformation is a different estimand and need not preserve the diagnostic.

Pooled rank histograms ask whether each chain contributes comparably across the common ordered sample. Ranking separately inside each chain cannot answer that question: absent ties, every chain contains each of its own ranks exactly once, irrespective of its location relative to the others. A uniform within-chain rank histogram can therefore be manufactured from chains occupying entirely different regions.

For example, one chain could range between zero and one while another ranges between ten and eleven. Their separate ranks are indistinguishable permutations. Pooled ranks put the first chain at the bottom and the second at the top, making the discrepancy visible. Plotting pooled ranks separately by chain preserves the comparison that the old within-chain construction lost.

With discrete quantities, average ranks need not fill a histogram as a smooth continuous distribution would. Ties can be genuine posterior structure. Report their frequency and the statistic's domain instead of interpreting every uneven bar as nonconvergence. The rank procedure is robust to extreme magnitudes, not a proof that a discrete or degenerate target has become continuous.

Ranking also discards information intentionally. Two arrays related by the same monotone transformation have the same rank diagnostic even if their raw means have very different numerical errors. Use the rank comparison to look for disagreement; compute mean or probability MCSE on the actual scientific transformation.

<a id="section-231-folding-checks-scale-disagreement-that-location-can-hid"></a>
## Folding checks scale disagreement that location can hide {#section-233-folding-checks-scale-disagreement-that-location-can-hid}

Two symmetric chains can have similar means while one explores a much narrower range. A between-means comparison may then stay small. To check another aspect of the distribution, take the pooled raw median c and form the absolute deviations |x−c|. Rank-normalize those folded values, then repeat the split comparison.

The median is pooled and fixed for the recorded array. Centering each chain at its own median would remove some of the very differences being investigated. Likewise, the folded values must be ranked jointly, using the same average-tie and Normal-score convention as before.

Consider a construction with draws symmetric about zero in every chain. In one chain the magnitudes are near one tenth, while in the others they range near one. The raw chain means can all be zero by pairing each value with its negative. After folding, the narrow chain has systematically small values, so its folded chain mean differs. This explains the extra sensitivity without assuming that a finite threshold will always detect the construction.

The reported modern scalar diagnostic is the maximum of the rank-normalized split comparison and the rank-normalized folded-split comparison, when both are defined. Reporting only the smaller one would choose the reassuring view after seeing the data. An undefined folded comparison, for example when all absolute deviations are identical, should stay undefined with an explanation.

Folding is not an exhaustive scan of distributional shape. Chains might agree in location and scale while differing in a rare event, a nonlinear relation between parameters or a distant mode not visited by any chain. A multivariate posterior can also have correct marginal histograms and the wrong dependence structure.

A simple dependence counterexample illustrates that last point. The pairs (Z,Z) and (Z,−Z), with Z standard Normal, have identical one-dimensional marginals, but their sums have entirely different distributions: 2Z in the first case and zero in the second. Marginal diagnostics cannot distinguish those joint laws. Diagnose sums, contrasts and other functions that matter to the application, and inspect the joint structure when it affects inference.

<a id="section-245-derive-long-run-error-before-naming-an-ess"></a>
## Derive long-run error before naming an ESS {#section-247-derive-long-run-error-before-naming-an-ess}

For a stationary scalar sequence X_t with mean mu, positive finite variance gamma_0 and autocovariance gamma_k, direct expansion of a finite average gives
\\[
\\operatorname{Var}(\\bar X_N)
=\\frac{\\gamma_0}{N}
\\left[1+2\\sum_{k=1}^{N-1}
\\left(1-\\frac{k}{N}\\right)\\rho_k\\right],
\\qquad \\rho_k=\\gamma_k/\\gamma_0.
\\]
There are N−k pairs at lag k, which explains the triangular weights. This identity does not require a central limit theorem; it does require the stated stationary second moments.

If the autocovariances are absolutely summable, the variance multiplier tends to tau=1+2 sum(rho_k). Under a suitable Markov-chain or time-series CLT, sqrt(N)(Xbar−mu) has limiting variance gamma_0 tau. The corresponding asymptotic MCSE is sqrt(gamma_0 tau/N), and ESS is N/tau when tau is positive. The CLT is an additional theorem with conditions, not a consequence of calculating an autocorrelation plot.

Apply the calculation to g(theta), not just theta. A finite second moment of theta does not imply that every nonlinear transformation has one. Nor does a rank-based ESS establish a raw-mean CLT for a Cauchy posterior, whose mean is not defined. In that setting medians or declared probabilities may be meaningful while the posterior mean is not.

An exactly analyzable stationary Gaussian AR(1) process gives a useful contrast. Let X_t=rho X_(t−1)+sqrt(1−rho²) epsilon_t, with independent standard Normal innovations, |rho|<1, and a stationary standard Normal initial value. Then Corr(X_0,X_k)=rho^k and
\\[
\\tau_{\\text{mean}}=\\frac{1+\\rho}{1-\\rho}.
\\]
For rho=−1/2 this is one third, so the mean's asymptotic ESS is 3N. Effective sample size can exceed the number of recorded values when negative correlation reduces averaging error.

The same process does not give the same gain for variance estimation. For jointly standard Normal X and Y of correlation r, writing Y=rX+sqrt(1−r²)epsilon and expanding shows Cov(X²,Y²)=2r². Thus the centered-square transformation has lag correlation rho^(2k), giving
\\[
\\tau_{\\text{square}}=\\frac{1+\\rho^2}{1-\\rho^2}.
\\]
At rho=−1/2 this is five thirds, and its ESS is only 3N/5. An attractive mean ESS has not certified precision for the second moment.

This also disproves a universal thinning cutoff expressed only through N/ESS. In the negative-correlation example, N/ESS for the mean is one third, so even retaining every draw, k=1, exceeds that proposed cutoff. Yet k=1 discards nothing. Thinning changes the lag sequence and the computational/storage comparison; no single ESS-derived inequality describes every estimand.

The finite variance identity reveals another limit: a highly correlated sample may have a tiny numerical MCSE only because the estimator missed long lags. Estimating tau from a finite array requires a truncation or spectral procedure. That is an estimator choice, with bias and variation, rather than an exact transformation of the recorded sample into independent observations.

<a id="section-277-declare-the-finite-autocovariance-estimator"></a>
## Declare the finite autocovariance estimator {#section-279-declare-the-finite-autocovariance-estimator}

The public companion makes a finite algorithm explicit. For each split row of length N, subtract that row's own mean and compute the lag-t autocovariance with divisor N:
\\[
\\widehat\\gamma_m(t)=\\frac1N\\sum_{n=1}^{N-t}
(x_{mn}-\\bar x_m)(x_{m,n+t}-\\bar x_m).
\\]
This biased-divisor convention is deliberate. Using N−t instead changes the estimator, especially at long lags. An FFT implementation can compute the same finite sums efficiently only if it zero-pads sufficiently to avoid wrapping the end of a chain onto its beginning.

Normalize each row by its lag-zero autocovariance to obtain rhohat_m(t), while retaining the N−1 sample variance s_m² for W. The multichain combination is
\\[
\\widehat\\rho(t)=1-
\\frac{W-M^{-1}\\sum_m s_m^2\\widehat\\rho_m(t)}
{\\widehat V^+}.
\\]
At t=0 the numerator is zero, so the estimated correlation is one. If between-chain disagreement makes Vhat-plus larger than W, the positive baseline can keep later correlations elevated. This is how the combined estimator incorporates more than within-chain mixing.

A row with zero variance cannot supply a normalized autocorrelation. The companion returns an explicit undefined status instead of deleting the row. Deleting an inconvenient constant chain would change the denominator and conceal a potentially serious failure.

There is an exact reason not to sum every centered sample autocovariance. With the divisor-N convention,
\\[
\\widehat\\gamma(0)+2\\sum_{t=1}^{N-1}\\widehat\\gamma(t)
=\\frac1N\\left(\\sum_{n=1}^N(x_n-\\bar x)\\right)^2=0.
\\]
Thus a literal full-lag sum from one centered finite row is identically zero, even for a useful random sample. It is not an exact zero-variance theorem for future averages.

For the finite row (−1,0,1,0), the autocovariances are (1/2,0,−1/4,0), and the corresponding correlations are (1,0,−1/2,0). The unrestricted sum gives zero, whereas the declared initial-positive pairing retains only the first pair and gives tauhat=1. Neither finite arithmetic calculation determines the unknown process's infinite-lag covariance; the example exposes why an estimator must specify its truncation.

An unrestricted sum over all noisy lag estimates is unstable. Form pairs P_k=rhohat(2k)+rhohat(2k+1), beginning with k=0. Keep the initial sequence of strictly positive pairs, stopping at the first nonpositive pair, then replace each retained pair by the minimum of itself and the preceding retained value. The estimate used here is tauhat=−1+2 sum(P_k), and ESS=S/tauhat if it is finite and positive.

These are the declared initial-positive and initial-monotone choices. Pair positivity and monotonicity have a theoretical basis for suitable stationary reversible Markov chains and their square-integrable scalar functions; the scalar summary itself need not be Markov. A short nonstationary array does not satisfy the underlying theorem's hypotheses merely because code applied the recipe. Treat the finite result as a diagnostic estimate.

Software can make further antithetic corrections or cap large estimates. This companion reports its own exact convention, without a software-equivalence claim. A nonpositive tau estimate is reported as undefined, not as an infinite amount of information. An ESS greater than S is allowed when the finite estimate is positive; the earlier AR example explains why automatically clipping every ESS to S would erase a real possibility.

Because each split row comes from an original trajectory, splitting may omit correlations crossing the middle. The between/within construction is designed to expose some time disagreement, not to reproduce every finite-sample covariance of the pooled mean exactly. Check estimates on longer retained runs and alternative sensible windows when the required precision is consequential.

<a id="section-313-bulk-tail-and-scientific-mcse-answer-different-question"></a>
## Bulk, tail and scientific MCSE answer different questions {#section-315-bulk-tail-and-scientific-mcse-answer-different-question}

Bulk ESS applies the multichain estimator to the pooled rank-normalized split values. It is useful even when raw moments are unstable, but it is not the number to insert automatically into rawSD/sqrt(ESS) for a raw mean. Compute that mean's variance estimate on the actual values of g(theta).

For tail ESS, choose the pooled raw empirical five and ninety-five percent quantiles, using a declared interpolation rule. Form the two indicator arrays I(x≤qhat_.05) and I(x≤qhat_.95), estimate an ESS for each, and report their minimum. This focuses on movement across tail boundaries rather than on raw magnitudes. The companion fixes NumPy's linear quantile interpolation and reports the actual thresholds.

The choice of empirical boundary is finite and data-dependent. With many ties, the event probability need not be exactly five or ninety-five percent. A constant indicator has no estimated variation, so its ESS is undefined. That is not evidence that an unobserved rare event has probability zero.

For a fixed threshold c, the scientific tail probability is p=E[I(theta>c)]. Under a relevant CLT its MCSE is approximately sqrt(p(1−p)/ESS_indicator). Relative Monte Carlo error becomes demanding for small p: a target relative standard error r requires approximately ESS_indicator≥(1−p)/(p r²). For p=1/1000 and r=1/10, this is 99,900 effective draws. A generic warning threshold of four hundred cannot establish that precision.

Quantile error needs another ingredient. If the true CDF has a positive continuous density f at its p-quantile q_p, a local expansion gives F(q_p+h)≈p+f(q_p)h. Thus qhat_p−q_p is approximately minus the empirical-CDF error divided by f(q_p), and
\\[
\\operatorname{Var}(\\widehat q_p)\\approx
\\frac{\\operatorname{Var}(\\widehat F(q_p))}{f(q_p)^2}.
\\]
The square of the density belongs in the denominator. A tail ESS alone is therefore not a quantile error bar in the original units.

For a standard Normal target, an exact density is available for a benchmark. At a specified Normal quantile, use phi(q_p) in that formula and compare with the reference quantile. In an unknown posterior, estimating a very small tail density can itself be unstable. Quantile MCSE methods based on transformed probability intervals avoid an explicit density estimate, but still need enough effective tail information.

Discrete quantiles require a different treatment. At a CDF jump, the smooth inverse expansion may fail, and an interval of parameter values can map to one probability level. Report uncertainty in cumulative probabilities or a method designed for that discrete target rather than attaching the continuous formula to a mass point.

Posterior uncertainty and Monte Carlo uncertainty should appear separately. A wide credible interval can be estimated very precisely, and a narrow interval can have poorly determined endpoints. The posterior describes uncertainty under the model; MCSE describes numerical variation from approximating a particular posterior summary.

<a id="section-336-warmup-changes-the-experiment-being-diagnosed"></a>
## Warmup changes the experiment being diagnosed {#section-338-warmup-changes-the-experiment-being-diagnosed}

Adaptive warmup can change the step size, metric or proposal scale from one iteration to the next. Those values are not a single stationary Markov chain from the eventual transition kernel. Their exclusion is therefore about the algorithm and estimator definition, not an arbitrary dislike of early observations.

Excluding warmup does not establish that the retained initial state is stationary. Even a fixed valid kernel can retain substantial initialization effects. A useful record fixes the adaptation schedule in advance, states the final frozen kernel settings and retains the exact boundary between adaptation and reported sampling.

A diminishing-adaptation theorem, when applicable, has hypotheses about the actual sequence of kernels and containment. It is not justified by observing a decreasing tuning increment. Likewise, continuously tuning until a diagnostic looks favorable changes the procedure being evaluated. Report that intervention and regenerate a clearly defined retained run.

Dispersed starts increase opportunities to reveal disagreement. They do not prove coverage of every posterior region. The prior can be extremely broad, can put mass at numerically awkward boundaries or can fail to suggest a small but important mode. Model-specific initialization checks and transformations are often more informative than an unqualified instruction to start “far apart.”

Independent chains also need genuinely distinct random streams and actual independent runs. Copying one trajectory into four columns preserves its trace appearance and can make between-chain means artificially identical. Four labels are not four experiments.

The acceptance rate is another incomplete summary. Very small steps can give a high acceptance rate while moving slowly. Larger steps can lower acceptance because proposals are rejected, and repeated states must remain in the record. Selecting only accepted proposals changes the empirical distribution and the meaning of every subsequent autocorrelation calculation.

For the exact rejection hierarchy sampler used elsewhere in this book, there is no adaptive Markov warmup. Accepted posterior draws are independent under the ideal random-generation contract, followed by independent conditional group-effect draws. Calling its four batches “four HMC chains” would be incorrect. Its numerical Monte Carlo error can use an independent-draw calculation, while its rejection-envelope and quadrature checks address different correctness questions.

A production NUTS workflow is a separately specified algorithm. It needs an actual model, transform/Jacobian, adaptation schedule, tree-building implementation and per-transition output. The fixed-length Gaussian leapfrog laboratory does not generate tree-depth or production divergence records. Entries for those fields must say not applicable or remain a sourced workflow template.

<a id="section-354-compare-time-windows-without-pretending-they-are-indepe"></a>
## Compare time windows without pretending they are independent {#section-356-compare-time-windows-without-pretending-they-are-indepe}

The Geweke idea asks whether early and late retained windows give compatible estimates of one expectation. Let windows A and B have lengths n_A and n_B, means gbar_A and gbar_B, and estimated long-run variances v_A and v_B. A commonly reported standardized difference is
\\[
Z=\\frac{\\bar g_A-\\bar g_B}
{\\sqrt{\\widehat v_A/n_A+\\widehat v_B/n_B}}.
\\]
The denominator accounts for serial dependence inside each window. Substituting the ordinary sample variance while ignoring autocorrelation can exaggerate the apparent discrepancy.

There is still an approximation between windows. The exact variance of their difference includes minus twice Cov(gbar_A,gbar_B). A long separating gap and suitable short-memory assumptions can make that covariance negligible asymptotically; finite separation does not make it exactly zero. A single large Z can also occur by sampling variation, and checking many parameters creates many opportunities for large values.

The companion fixes the first ten percent and last fifty percent of each retained chain, with their lengths recorded. For each window it uses a Bartlett lag-window estimate
\\[
\\widehat v=\\widehat\\gamma(0)+
2\\sum_{t=1}^{L}\\left(1-\\frac{t}{L+1}\\right)\\widehat\\gamma(t),
\\qquad L=\\lfloor n^{1/3}\\rfloor.
\\]
The biased-divisor autocovariances have the same definition as above. The chosen bandwidth grows while its ratio to the window length decreases, which is a sensible consistency schedule under appropriate spectral-estimation conditions. Those conditions are not verified by the schedule itself.

An undefined or nonpositive numerical denominator stays undefined. No window Z-score substitutes for multiple-chain rank comparisons, posterior-target validation or the scientific MCSE. Record its sensitivity to window and bandwidth choices if it materially affects a conclusion.

This check is especially easy to misuse after tuning the discard fraction. Repeatedly moving the window until Z looks small selects the reassuring statistic. If a window comparison suggests a transient, investigate initialization and adaptation, then define and rerun an appropriate sampling protocol rather than silently rewriting the old record.

<a id="section-377-energy-diagnostics-depend-on-which-energy-was-saved"></a>
## Energy diagnostics depend on which energy was saved {#section-379-energy-diagnostics-depend-on-which-energy-was-saved}

For a position q and freshly sampled momentum p, H(q,p)=U(q)+K(p). A fixed-length HMC proposal produces an endpoint and a Hamiltonian difference, followed by a Metropolis decision. The record should distinguish the energy before the trajectory, the proposed endpoint energy and the retained position after acceptance or rejection.

A terminal energy difference is an integrator diagnostic. Under an ideal target-preserving proposal with a Metropolis correction, some inaccurate trajectories are rejected rather than accepted into the retained positions. A large energy difference warns about efficiency and possibly numerical pathology, but it is not itself a measurement of which posterior regions have been missed.

A software divergence flag usually compares an implementation-specific energy error or related criterion with a threshold. The exact definition and version matter. A manually chosen “absolute energy error greater than ten” field must not be relabeled as Stan's NUTS divergent-transition field.

For an energy sequence E_1,...,E_N saved at the same point of every retained transition, the companion uses
\\[
\\widehat{\\mathrm{BFMI}}=
\\frac{\\sum_{n=2}^N(E_n-E_{n-1})^2}
{\\sum_{n=1}^N(E_n-\\bar E)^2}.
\\]
Both underlying averages use divisor N−1, which cancels. This explicit convention avoids ambiguity about population versus sample variance. A zero denominator is undefined.

For a stationary energy series of finite variance, E[(E_t−E_(t−1))²]=2 Var(E)(1−rho_E(1)). This follows by expanding the square and using stationarity. It explains why a small quotient suggests little adjacent energy movement relative to the overall energy spread. The quotient is a diagnostic estimate and need not lie between zero and one.

The saved sequence matters. Using endpoint energy only on accepted transitions, omitting rejections, or interleaving different chains creates a different time series. The Gaussian companion therefore uses each chain's energy_start: H at its current position and newly refreshed independent momentum immediately before the retained proposal. It never pools chains before taking energy differences.

Nominal E-BFMI warning thresholds summarize software experience; they are not a theorem that momentum refreshment is adequate above a fixed number. Interpret the energy distribution, dimension, metric and target geometry together. A low value asks for investigation, and a high value does not validate a target log density.

Tree-depth saturation answers another question: a dynamic trajectory reached its allowed work limit. It primarily limits efficiency and does not by itself prove biased estimates. Its absence in a fixed-length integrator record is not “zero tree-depth warnings”; that algorithm has no NUTS tree whose depth could have been measured.

<a id="section-401-construct-failures-that-agreement-cannot-detect"></a>
## Construct failures that agreement cannot detect {#section-403-construct-failures-that-agreement-cannot-detect}

The first construction targets a proper distribution with two disjoint components: density one half on each of [−2,−1] and [1,2], and zero elsewhere. Its mean is zero and its probability of a positive value is one half.

Define a transition that redraws uniformly inside the current component and never changes components. The target is invariant: its mixture weights remain one half, and each component's conditional uniform law is preserved. But the transition is not irreducible across the full support.

Start four runs in the negative component. Every retained value is then an independent Uniform(−2,−1) draw. Their means and ranks can agree very well, and their within-component ESS can be large. Nevertheless the estimated positive probability is always zero and the recorded mean approaches minus three halves. Increasing the run length makes that biased mean more numerically precise.

This is a constructed invariant-but-nonexploring kernel, not an observed outcome of the Gaussian HMC program. Its failure also violates the full-target ergodicity assumptions needed for a CLT about the target mean. A small within-component MCSE is not an error bound for the missing between-component bias.

A second construction checks target identity directly. Add a common constant two to every value in a correctly generated Normal(0,1) array, then pretend the target is still Normal(0,1). All rank orderings, folded deviations and centered autocovariances remain unchanged under the shift. Parameter rank Rhat, bulk ESS and centered raw-mean MCSE therefore give the same information as before, although the mean has shifted by two.

The diagnostic has not malfunctioned: it was designed to compare the recorded chains and their serial dependence, not to evaluate the intended target formula. An analytic Normal reference immediately exposes the mismatch. Target unit tests, support/Jacobian checks, exact conjugate benchmarks and independently derived moments complement convergence diagnostics.

For a fitted hierarchy there are further possibilities: a code error can affect every chain in the same way, all chains can avoid a narrow neck, or a relevant contrast can mix differently from each marginal effect. Inspect transformed scales, contrasts and predictive functionals with the actual scientific precision targets. Neither a complete rank table nor a larger nominal chain count removes those obligations.

The practical conclusion is a sequence of distinct checks: establish the intended target, establish the transition's mathematical scope, preserve the actual retained record, and estimate error for the quantities to be reported. Diagnostic agreement is evidence within that chain of reasoning. It cannot replace the earlier links.

<a id="section-419-solutions-gaussian-diagnostic-record-and-constructed-co"></a>
## Production diagnostic scope and reporting contract {#section-711-production-diagnostic-scope-and-reporting-contract}

The original CBM-CLAIM-031 locator is diagnostics-necessary-never-sufficient.md:61. Its production-HMC workflow is retained as an explicit sourced template, not labeled executed by the Gaussian laboratory.

| Workflow component | Concrete source support | Remaining scope |
| --- | --- | --- |
| Pooled split/folded ranks and bulk/tail estimates | Complete definitions and public fixed-Gaussian consumer | Actual run/output evidence is separate |
| Estimand-specific mean/probability/quantile precision | Derived variance contracts and analytic Normal references | A production target needs its own estimands and precision tolerances |
| Geweke-style windows | Declared Bartlett/window variant | Approximation depends on stationarity and weak cross-window dependence |
| Energy movement | Per-chain energy_start definition and quotient | It does not create a NUTS divergence definition |
| Production NUTS trees/divergences/adaptation | Versioned Stan diagnostic definitions and a reporting template | No NUTS implementation or fitted production transition record is supplied here |
| Shared hierarchy | Exact data/prior/posterior sampler in Chapter 3 and explicit predictive consumer in Chapter 8 | Independent rejection draws are not a production-HMC diagnostic run |

To instantiate the production template, bind a complete posterior such as the declared eight-schools model; choose an actual NUTS implementation/version and transform; record warmup/adaptation and independent starts; save its real energy, tree and divergence fields; then report target-specific MCSEs and reruns. This is a named input requirement, not evidence that the workflow has already run. Other original ten-group duties keep their own chapter dispositions.

<a id="section-724-exercises-diagnostic-precision-extensions"></a>

## Summary

<a id="section-170-looking-backward-and-forward"></a>
This chapter emphasized that diagnostics reveal failures but cannot certify correctness. The next chapter, *Predictive Criticism*, shifts attention from the sampler to the model itself, asking whether the fitted model can generate data that resemble the observations.
<a id="section-171-a-diagnostic-begins-with-a-target-and-a-retained-array"></a>

## Exercises {#section-150-practice-exercises}

<a id="section-150-exercise-1"></a>
### Exercise 1 {#section-152-exercise-1}

Four chains have $\\hat{R} = 1.00$, bulk ESS $= 3000$, but $12$ divergences concentrated at small values of a scale parameter. What should be concluded?

**Solution.** Convergence is not established. The divergences warn of possible numerical integration or exploration problems in the small-scale region. Investigate geometry, priors and scales; consider a noncentered parameterization when appropriate, then rerun and assess the affected estimands, exploration and Monte Carlo precision before using the summaries. A near-one $\\hat{R}$ and high bulk ESS do not resolve these warnings.

<a id="section-156-exercise-2"></a>
### Exercise 2 {#section-158-exercise-2}

A researcher reports $\\hat{R} = 1.00$ for all parameters based on two chains started from the prior mean. Why might this be misleading?

**Solution.** Two chains started from the same region may fail to reveal multimodality or initialization bias. If the posterior has multiple modes and both chains fall into the same one, $\\hat{R}$ can be near one while a large part of the posterior mass remains unexplored. Use at least four chains from overdispersed starts, such as the prior or widely separated points.

<a id="section-162-exercise-3"></a>
### Exercise 3 {#section-164-exercise-3}

Explain why no finite diagnostic can prove that an MCMC chain has converged to the target distribution.

**Solution.** Convergence is a statement about infinite-time behavior. Any finite sample could, in principle, come from a chain that is still transient or from a chain that has converged but by chance has not yet visited a remote mode. Diagnostics can detect failures that are visible in the observed sample---poor mixing, divergences, disagreement between chains---but they cannot rule out failures that have not yet manifested.

<a id="section-168-looking-backward-and-forward"></a>

<a id="section-89-extended-exercise-discussion"></a>
<a id="section-89-exercise-4-discussion"></a>
### Exercise 4 (Discussion) {#section-91-exercise-4-discussion}

A researcher runs HMC for $1{,}000$ iterations with $500$ warmup iterations and reports $\\hat{R} = 1.00$ and no divergences. However, the effective sample size for the worst-mixing parameter is $120$. Is this sufficient?

**Solution.** The information is not enough to decide. First state whether $120$ is the combined, estimand-specific ESS and identify the target: a posterior mean, an interval endpoint, and a tail probability can have different ESS and Monte Carlo error. For a mean with posterior standard deviation $\\sigma$, ESS $120$ corresponds approximately to MCSE $\\sigma/\\sqrt{120}$ under the relevant central limit theorem; a quantile needs a quantile-specific MCSE. The total-ESS value $400$ is a common warning threshold, not a guarantee that a $95\\%$ interval is precise. Run longer chains or improve the parameterization if the resulting MCSE is too large for the application, and report chain count, the ESS method, and the relevant MCSEs alongside $\\hat{R}$ and divergences.


<a id="section-96-burn-in-and-stationarity"></a>

<a id="section-726-exercises-diagnostic-precision-extensions"></a>
### Exercise 5 — CBM-07-E5. An invariant kernel can still miss half the target {#section-730-cbm-07-e5-an-invariant-kernel-can-still-miss-half-the-t}

For the two-interval target and within-component redraw transition above, prove invariance, identify the irreducibility failure, and give the limiting recorded mean and positive probability when every start is negative. Explain why increasing the retained length need not make the intended-target error disappear.

<a id="section-732-cbm-07-e6-convert-tail-probability-error-into-quantile-"></a>
### Exercise 6 — CBM-07-E6. Convert tail-probability error into quantile units {#section-734-cbm-07-e6-convert-tail-probability-error-into-quantile-}

Suppose a continuous posterior has density 1/20 at its 95-percent quantile. The relevant indicator ESS is 1,000, while rank bulk ESS is 10,000. Under the stated CLT and smooth-positive-density assumptions, estimate the quantile MCSE. How large would the indicator ESS need to be for MCSE at most 1/20? Explain why the bulk value alone does not answer either question.

<a id="section-736-solutions-diagnostic-precision-extensions"></a>

## Solutions: Gaussian diagnostic record and constructed controls {#section-421-solutions-gaussian-diagnostic-record-and-constructed-co}

The public companion is a consumer of the exact Gaussian HMC record in Chapter 6. Its local case ID is COMM06-CASE-02-DIAGNOSTICS; it does not redeclare the producer's COMM06-CASE-02 identity. The input is a bounded JSON document from that producer, whose actual output hash and upstream execution receipt must be recorded when reproduced.

The target is standard Normal with unit mass, fresh independent Normal momentum, step size one quarter and seven leapfrog steps per proposal. The four starts are −8,−2,2,8. Each chain excludes 1,000 warmup proposals and retains 4,000 chronological draws, including rejected states. The declared base seed is 20,260,906 and chain seeds are 20,260,956 through20,260,959, using NumPy Generator(PCG64). The exact producer schema, dependencies and all settings are checked before calculations.

The consumer reports both rank/folded comparisons, rank bulk ESS, empirical five/ninety-five-percent tail ESS, raw-mean MCSE, second-moment and fixed-threshold probability precision, Normal-reference quantile precision, per-chain window checks and per-chain energy quotients. It checks the energy difference identity in the producer record, but does not claim to reconstruct every transition from an output array that lacks its proposal randomizers.

The Normal target supplies analytic references: mean zero, second moment one, variance one, and tail/quantile values from the standard Normal CDF. The hand-derived ANOVA, tied-rank and four-value autocovariance fixtures above test exact finite transformations with floating tolerances stated by the listing. They are mathematical expected values, not an observed run.

The shifted-array control is labeled constructed and never presented as a sampled Gaussian-HMC outcome. The disconnected-support control redraws only in the negative interval using its own seed 2,026,110,470; its intended two-component target has mean zero and positive probability one half, while its sampled component has mean minus three halves and positive probability zero. Such controls show an identifiable failure mechanism even if finite diagnostic numbers happen to cross a warning threshold.

<a id="section-431-descriptive-comparison-rubric"></a>
### Descriptive comparison rubric {#section-433-descriptive-comparison-rubric}

Preserve the producer's target, starts, full chain lengths, rejection states and energy sampling point. Report undefined diagnostics, the exact rank/tie/quantile conventions, paired-lag counts and the estimand behind each MCSE. A smaller MCSE under the wrong-target control does not earn a correctness conclusion.

Compare observed Normal errors with the declared reference tolerances after execution, inspect disagreements and record any failure. Keep deterministic arithmetic checks separate from stochastic warning thresholds. The raw-mean MCSE remains conditional on a suitable stationary CLT; finite rank agreement does not verify those hypotheses.

For a real production analysis, also record the actual model, transformed coordinates and Jacobians, independent starts/streams, final adapted settings, relevant scientific contrasts, actual NUTS warnings where applicable, and the intervention/rerun history. The fixed Gaussian companion has no measured NUTS tree depth or production divergence field. Do not fill those cells with invented zeroes.

<a id="section-439-solutions-diagnostic-companion-listing"></a>

## Solutions: Diagnostic companion listing {#section-441-solutions-diagnostic-companion-listing}

This bounded consumer reads the producer's canonical JSON on stdin, capped at 8 MiB, and writes one canonical JSON summary to stdout. It uses only the declared existing Python/NumPy/SciPy environment. It neither imports another manuscript's code nor reads model files; the root reproduction record binds the actual upstream source, passport and output artifact.

\`\`\`python
import json
import math
import sys
import platform
import numpy as np
import scipy
from scipy.special import ndtr, ndtri
from scipy.stats import rankdata

DEPENDENCIES = {"python": "3.14.7", "numpy": "2.5.2", "scipy": "1.18.1"}
INPUT_LIMIT = 8 * 1024 * 1024
FAILURE_SEED = 2026110470


def require(ok: bool, message: str) -> None:
    if not ok:
        raise ValueError(message)


def dependencies() -> dict[str, str]:
    return {"python": platform.python_version(),
            "numpy": np.__version__, "scipy": scipy.__version__}


def split_rows(x: np.ndarray) -> np.ndarray:
    require(x.ndim == 2 and x.shape[0] >= 2 and x.shape[1] >= 4,
            "need multiple chronological chains with at least four draws")
    half = x.shape[1] // 2
    return np.concatenate((x[:, :half], x[:, -half:]), axis=0)


def rank_scores(x: np.ndarray) -> np.ndarray:
    ranks = rankdata(x.ravel(), method="average")
    return ndtri((ranks - 0.375) / (x.size + 0.25)).reshape(x.shape)


def anova(x: np.ndarray) -> dict[str, object]:
    m, n = x.shape
    require(m >= 2 and n >= 2 and np.isfinite(x).all(), "invalid ANOVA array")
    variances = np.var(x, axis=1, ddof=1)
    within = float(np.mean(variances))
    between = float(n * np.var(np.mean(x, axis=1), ddof=1))
    vplus = (n - 1) * within / n + between / n
    if within <= 0 or not math.isfinite(vplus):
        return {"Rhat": None, "W": within, "B": between, "Vplus": vplus,
                "status": "undefined within-chain variance"}
    return {"Rhat": math.sqrt(vplus / within), "W": within, "B": between,
            "Vplus": vplus, "status": "finite diagnostic estimate"}


def autocov(x: np.ndarray) -> np.ndarray:
    n = x.size
    centered = x - np.mean(x)
    size = 1 << (2 * n - 1).bit_length()
    transformed = np.fft.rfft(centered, size)
    return np.fft.irfft(transformed * transformed.conjugate(), size)[:n] / n


def effective_size(x: np.ndarray) -> dict[str, object]:
    m, n = x.shape
    base = anova(x)
    variances = np.var(x, axis=1, ddof=1)
    if np.any(variances <= 0) or base["Vplus"] <= 0:
        return {"ESS": None, "tau": None, "Vplus": base["Vplus"],
                "MCSE_mean": None, "pairs": 0,
                "status": "undefined: a row has no empirical variation"}
    correlations = np.stack([autocov(row) for row in x])
    correlations /= correlations[:, :1]
    rho = 1 - (base["W"] - np.mean(variances[:, None] * correlations, axis=0)) / base["Vplus"]
    pairs: list[float] = []
    for lag in range(0, n - 1, 2):
        pair = float(rho[lag] + rho[lag + 1])
        if not math.isfinite(pair) or pair <= 0:
            break
        if pairs:
            pair = min(pair, pairs[-1])
        pairs.append(pair)
    tau = -1 + 2 * math.fsum(pairs)
    if not math.isfinite(tau) or tau <= 0:
        return {"ESS": None, "tau": tau, "Vplus": base["Vplus"],
                "MCSE_mean": None, "pairs": len(pairs),
                "status": "undefined: finite paired estimate is nonpositive"}
    ess = m * n / tau
    return {"ESS": float(ess), "tau": float(tau), "Vplus": base["Vplus"],
            "MCSE_mean": math.sqrt(base["Vplus"] / ess), "pairs": len(pairs),
            "status": "declared positive/monotone paired estimator; no universal guarantee"}


def scalar_summary(draws: np.ndarray) -> dict[str, object]:
    x = split_rows(draws)
    normal = rank_scores(x)
    folded = rank_scores(np.abs(x - np.median(x)))
    rank_rhat = anova(normal)["Rhat"]
    folded_rhat = anova(folded)["Rhat"]
    combined = None if rank_rhat is None or folded_rhat is None else max(rank_rhat, folded_rhat)
    thresholds = np.quantile(x, (0.05, 0.95), method="linear")
    tail = [effective_size((x <= q).astype(float)) for q in thresholds]
    tail_ess = None if any(t["ESS"] is None for t in tail) else min(t["ESS"] for t in tail)
    return {
        "mean": float(np.mean(draws)), "sd": float(np.std(draws, ddof=1)),
        "rank_split_Rhat": rank_rhat, "folded_rank_split_Rhat": folded_rhat,
        "Rhat_max": combined, "bulk": effective_size(normal),
        "raw_mean": effective_size(x), "tail_ESS_min": tail_ess,
        "tail_empirical_thresholds": [float(q) for q in thresholds],
        "tail_indicator_details": tail,
    }


def geweke(row: np.ndarray) -> dict[str, object]:
    early = row[: row.size // 10]
    late = row[-(row.size // 2):]

    def spectral(window: np.ndarray) -> tuple[float, int]:
        lag = int(window.size ** (1 / 3))
        gamma = autocov(window)
        value = float(gamma[0] + 2 * math.fsum(
            (1 - k / (lag + 1)) * float(gamma[k]) for k in range(1, lag + 1)
        ))
        return value, lag

    va, la = spectral(early)
    vb, lb = spectral(late)
    denominator = va / early.size + vb / late.size
    z = None if denominator <= 0 or not math.isfinite(denominator) else float(
        (np.mean(early) - np.mean(late)) / math.sqrt(denominator)
    )
    return {"Z": z, "early_n": int(early.size), "late_n": int(late.size),
            "early_lag": la, "late_lag": lb,
            "early_spectral_variance": va, "late_spectral_variance": vb,
            "scope": "supplementary window/short-memory approximation; cross-window covariance omitted"}


def bfmi(energy: np.ndarray) -> dict[str, object]:
    denominator = float(np.sum((energy - np.mean(energy)) ** 2))
    value = None if denominator <= 0 else float(np.sum(np.diff(energy) ** 2) / denominator)
    return {"value": value, "energy_point": "energy_start before each retained proposal",
            "convention": "sum squared adjacent differences / sum squared centered energies"}


def self_checks() -> None:
    ranks = rankdata(np.array([0., 0., 1., 2.]), method="average")
    require(np.allclose((ranks - .375) / 4.25, [9/34, 9/34, 21/34, 29/34], atol=1e-15, rtol=0),
            "manual pooled-tie probability fixture")
    raw = anova(np.array([[0., 1.], [2., 3.]]))
    require(math.isclose(raw["W"], .5, abs_tol=1e-14, rel_tol=0)
            and math.isclose(raw["B"], 4., abs_tol=1e-14, rel_tol=0)
            and math.isclose(raw["Rhat"], 3 / math.sqrt(2), abs_tol=1e-14, rel_tol=0),
            "manual ANOVA fixture")
    require(np.allclose(autocov(np.array([-1., 0., 1., 0.])),
                        [.5, 0., -.25, 0.], atol=1e-14, rtol=0), "manual autocovariance fixture")
    require(effective_size(np.zeros((2, 4)))["ESS"] is None,
            "constant arrays must not acquire a passing ESS")


def build_report(record: dict[str, object]) -> dict[str, object]:
    require(dependencies() == DEPENDENCIES, "dependency/version mismatch")
    require(record["schema_version"] == "1.0.0"
            and record["program_id"] == "COMM06-PROGRAM-02-GAUSSIAN-HMC"
            and record["case_id"] == "COMM06-CASE-02", "wrong upstream record identity")
    require(record["dependencies"] == DEPENDENCIES, "wrong upstream dependencies")
    require(record["target"] == {"mean": 0, "variance": 1, "mass": 1}, "wrong Gaussian target")
    settings = record["settings"]
    require(settings["epsilon"] == .25 and settings["L"] == 7
            and settings["warmup"] == 1000 and settings["retained"] == 4000
            and settings["starts"] == [-8, -2, 2, 8]
            and settings["base_seed"] == 20260906
            and settings["chain_seeds"] == [20260956, 20260957, 20260958, 20260959]
            and settings["rng"] == "NumPy Generator(PCG64)", "wrong upstream settings")
    chains = record["chains"]
    require(isinstance(chains, list) and len(chains) == 4, "need four actual chain records")
    draws, energies = [], []
    transition_rows = []
    for index, chain in enumerate(chains):
        require(chain["seed"] == settings["chain_seeds"][index]
                and chain["start"] == settings["starts"][index], "chain metadata mismatch")
        arrays = {name: np.asarray(chain[name], dtype=float) for name in
                  ("draws", "energy_start", "energy_proposal", "delta_energy")}
        require(all(a.shape == (4000,) and np.isfinite(a).all() for a in arrays.values()),
                "wrong array shape or nonfinite transition field")
        accepted = chain["accepted"]
        require(isinstance(accepted, list) and len(accepted) == 4000
                and all(type(x) is bool for x in accepted), "invalid acceptance record")
        require(np.all(arrays["energy_start"] >= 0) and np.all(arrays["energy_proposal"] >= 0),
                "negative standard-Normal Hamiltonian")
        require(np.allclose(arrays["energy_proposal"] - arrays["energy_start"],
                            arrays["delta_energy"], rtol=1e-12, atol=1e-10), "energy difference mismatch")
        draws.append(arrays["draws"])
        energies.append(arrays["energy_start"])
        transition_rows.append({
            "accepted_fraction": sum(accepted) / 4000,
            "max_absolute_energy_error": float(np.max(np.abs(arrays["delta_energy"]))),
            "BFMI": bfmi(arrays["energy_start"]), "Geweke": geweke(arrays["draws"]),
        })
    x = np.stack(draws)
    self_checks()
    summary = scalar_summary(x)
    scientific = {}
    for name, transformed, reference in (
        ("second_moment", x * x, 1.0),
        ("probability_above_2", (x > 2).astype(float), float(1 - ndtr(2.0))),
    ):
        scientific[name] = {"estimate": float(np.mean(transformed)), "reference": reference,
                            "precision": effective_size(split_rows(transformed))}
    quantiles = []
    for p in (.025, .5, .975):
        q = float(ndtri(p))
        density = math.exp(-q*q / 2) / math.sqrt(2 * math.pi)
        indicator = effective_size(split_rows((x <= q).astype(float)))
        probability_mcse = indicator["MCSE_mean"]
        quantiles.append({
            "p": p, "estimate": float(np.quantile(x, p, method="linear")), "reference": q,
            "MCSE_using_known_Normal_density": None if probability_mcse is None else probability_mcse / density,
            "indicator_precision": indicator,
        })
    shifted = scalar_summary(x + 2)
    def matching_optional(a: object, b: object) -> bool:
        if a is None or b is None:
            return a is None and b is None
        return math.isclose(a, b, rel_tol=1e-12, abs_tol=1e-12)

    require(matching_optional(summary["rank_split_Rhat"], shifted["rank_split_Rhat"])
            and matching_optional(summary["bulk"]["ESS"], shifted["bulk"]["ESS"]),
            "common-shift rank diagnostic invariance")
    rng = np.random.Generator(np.random.PCG64(FAILURE_SEED))
    trapped = rng.uniform(-2, -1, size=(4, 4000))
    trapped_summary = scalar_summary(trapped)
    return {
        "schema_version": "1.0.0", "case_id": "COMM06-CASE-02-DIAGNOSTICS",
        "program_id": "COMM06-PROGRAM-02-DIAGNOSTICS",
        "dependencies": dependencies(), "input_case": record["case_id"],
        "input_program": record["program_id"], "settings": settings,
        "retained_shape": [4, 4000], "split_shape": [8, 2000],
        "diagnostics": summary, "scientific_estimands": scientific,
        "Normal_quantile_precision": quantiles, "chain_transition_summaries": transition_rows,
        "constructed_common_shift": {
            "not_a_primary_HMC_outcome": True, "shift": 2,
            "mean_change": float(np.mean(x + 2) - np.mean(x)),
            "rank_Rhat": shifted["rank_split_Rhat"], "bulk_ESS": shifted["bulk"]["ESS"],
            "target_mean_still_claimed": 0,
        },
        "constructed_disconnected_support": {
            "not_a_primary_HMC_outcome": True, "seed": FAILURE_SEED,
            "target": "equal Uniform[-2,-1] / Uniform[1,2] mixture; within-component redraw kernel",
            "retained_component": "negative only", "diagnostics": trapped_summary,
            "positive_probability_estimate": 0, "positive_probability_reference": .5,
            "mean_reference": 0, "conditional_component_mean": -1.5,
        },
        "sampler_specific_fields": {"NUTS_tree_depth": "not applicable",
                                    "production_divergences": "not generated by fixed-length laboratory"},
        "deterministic_fixtures_checked": True,
        "limits": "Finite diagnostics/CLT error estimates; no convergence or target-correctness certificate.",
    }


if __name__ == "__main__":
    payload = sys.stdin.buffer.read(INPUT_LIMIT + 1)
    require(len(payload) <= INPUT_LIMIT, "upstream JSON exceeds 8 MiB")
    incoming = json.loads(payload)
    rendered = json.dumps(build_report(incoming), ensure_ascii=False, sort_keys=True,
                          separators=(",", ":"), allow_nan=False) + "\\n"
    require(len(rendered.encode("utf-8")) <= 1024 * 1024, "summary exceeds 1 MiB")
    sys.stdout.write(rendered)
\`\`\`


<a id="section-709-production-diagnostic-scope-and-reporting-contract"></a>

## Solutions: Diagnostic precision extensions {#section-738-solutions-diagnostic-precision-extensions}

<a id="section-738-cbm-07-e5-an-invariant-kernel-can-still-miss-half-the-t"></a>
### CBM-07-E5. An invariant kernel can still miss half the target — solution {#section-740-cbm-07-e5-an-invariant-kernel-can-still-miss-half-the-t}

Each component's uniform conditional law is reproduced exactly, and the transition never changes its component. Starting with the target's equal mixture therefore preserves its two weights and each conditional law, proving invariance. A negative state cannot reach the positive interval, so the full-support chain is not irreducible. From negative starts the recorded law is Uniform(−2,−1), with mean −3/2 and positive probability zero, versus target values zero and 1/2. Longer runs reduce variation around the wrong conditional summaries; they do not repair missing between-component exploration.

<a id="section-742-cbm-07-e6-convert-tail-probability-error-into-quantile-"></a>
### CBM-07-E6. Convert tail-probability error into quantile units — solution {#section-744-cbm-07-e6-convert-tail-probability-error-into-quantile-}

The indicator variance is (19/20)(1/20)=19/400. The quantile MCSE is approximately sqrt((19/400)/1000)/(1/20)=sqrt(19/1000), about 0.138 in parameter units. Requiring its square to be at most 1/400 gives indicator ESS at least 7,600. Rank bulk ESS describes a different transformed sequence; it does not supply this tail-indicator precision or the density conversion.

<a id="section-746-references-diagnostic-definitions-and-assumptions"></a>

## Sources: Diagnostic definitions and assumptions {#section-748-references-diagnostic-definitions-and-assumptions}

The finite ANOVA, rank/tie, covariance, AR, quantile and constructed-kernel arguments are developed above. The modern diagnostic definitions follow [Vehtari et al., version5, Sections3–4 and equation14](https://arxiv.org/pdf/1903.08008); this chapter declares its finite estimator rather than claiming bit-for-bit compatibility with software. The reversible-chain pair properties are an explicit theorem input from [Geyer, Practical Markov Chain Monte Carlo, Section3](https://doi.org/10.1214/ss/1177011137), also documented by the author's [initial-sequence implementation](https://www.stat.umn.edu/geyer/mcmc/library/mcmc/html/initseq.html). The window-comparison idea is identified in [Geweke's original institutional report record](https://doi.org/10.21034/sr.148); the Bartlett/window choices here are stated locally. Energy interpretation and nominal software warnings use [Betancourt's energy-diagnostic analysis](https://arxiv.org/abs/1604.00695) and [CmdStan2.39 diagnose documentation](https://mc-stan.org/docs/2_39/cmdstan-guide/diagnose_utility.html). CLT and spectral consistency conditions remain explicit imports; finite diagnostics do not prove them.
`;export{e as default};