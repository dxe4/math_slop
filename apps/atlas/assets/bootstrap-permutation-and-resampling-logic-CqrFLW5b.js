var e=`---
parent_id: book-principles-statistical-inference
chapter_id: bootstrap-permutation-and-resampling-logic
title: "Bootstrap, Permutation, and Resampling Logic"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Bootstrap, Permutation, and Resampling Logic {#section-1-bootstrap-permutation-and-resampling-logic}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). The L3 core uses empirical finite laws, conditional expectation and the probability limit results linked below. The conditional triangular-array theorem is an explicit imported result with its source and assumptions retained locally. Functional delta methods, empirical-process theory and general dependent-bootstrap validity are optional advanced continuations; no universal validity claim is made for them here.


Resampling replaces an analytically difficult reference distribution with a distribution generated from the observed data and a declared invariance or fitted model. Its apparent simplicity hides the central inferential question: what law is being imitated, and why should that imitation approximate the sampling distribution or null distribution of interest?

This chapter constructs the empirical bootstrap, proves its exact conditional mean and variance identities, states a consistency target, distinguishes percentile, basic, and studentised intervals, and derives exact permutation calibration from exchangeability. The sample maximum supplies a concrete bootstrap failure. Resampling is a theorem-backed approximation or randomisation argument, not a generic cure for small samples or questionable models.

<a id="section-10-1-the-empirical-distribution-is-a-fitted-probability-la"></a>
## 1. The empirical distribution is a fitted probability law {#section-12-1-the-empirical-distribution-is-a-fitted-probability-la}

For iid observations $X_1,\\dots,X_n$ from distribution $P$, define the empirical measure

$P_n=n^{-1}\\sum _{i=1}^n \\delta _{X_i}$.

It assigns mass $1/n$ to each observed value, counting repeats with multiplicity. A nonparametric bootstrap sample

\\[X_1^*,\\dots,X_n^*\\]

is drawn conditionally iid from $P_n$. Equivalently, sample $n$ indices independently and uniformly with replacement from \${1,\\dots,n}$.

The star does not denote a second real dataset. Conditional on the observed data, bootstrap draws are artificial random variables and probabilities such as $P^*$ refer only to the resampling mechanism.

If a statistic has plug-in form $T_n=t(P_n)$, its bootstrap analogue is

$T_n^*=t(P_n^*)$,

where $P_n^*$ is the empirical measure of the bootstrap sample. The bootstrap hopes that variation of $T_n^*-T_n$ under $P_n$ resembles variation of $T_n-t(P)$ under $P$.

<a id="section-30-2-the-consistency-target-is-a-distributional-approximat"></a>
## 2. The consistency target is a distributional approximation {#section-32-2-the-consistency-target-is-a-distributional-approximat}

For a root-sample-size statistic, a typical bootstrap validity statement is

\\[\\sup_z |P^*(\\sqrt{n}(T_n^*-T_n)\\le z)-P(\\sqrt{n}(T_n-t(P))\\le z)|\\to 0\\]

in $P$-probability.

The left distribution is conditional on the random observed sample; the right is the repeated-sampling distribution under the population law. Convergence in probability means most original samples eventually yield a good conditional approximation.

This statement must be proved for the statistic and model class. Consistency of $T_n$ alone is insufficient. Nonsmooth functionals, extreme values, weak identification, infinite variance, dependence, and data-adaptive model selection can invalidate the ordinary bootstrap.

<a id="section-42-3-bootstrap-sample-means-have-exact-conditional-moments"></a>
## 3. Bootstrap sample means have exact conditional moments {#section-44-3-bootstrap-sample-means-have-exact-conditional-moments}

Let $\\bar{X}^*=n^{-1}\\sum _jX_j^*$ and define the empirical variance with denominator $n$:

$v_n=n^{-1}\\sum _i(X_i-\\bar{X})^{2}$.

Conditional on the data, one bootstrap draw has mean $\\bar{X}$ and variance $v_n$. Conditional independence therefore gives

\\[E^*[\\bar{X}^*]=\\bar{X}\\]

and

$Var^*(\\bar{X}^*)=v_n/n$.

These are exact identities for every dataset. If the original observations are iid with finite variance $\\sigma ^{2}$, then $v_n\\to \\sigma ^{2}$ in probability, so the conditional bootstrap variance estimates the sampling variance $\\sigma ^{2}/n$.

<a id="section-58-bootstrap-clt-for-the-mean"></a>
### Bootstrap CLT for the mean {#section-60-bootstrap-clt-for-the-mean}

Under iid sampling with positive finite variance and a mild tail condition—for example $E|X|^{2+\\delta }<\\infty $ for some $\\delta >0$—the conditional law of

\\[\\sqrt{n}(\\bar{X}^*-\\bar{X})\\]

converges in probability to $Normal(0,\\sigma ^{2})$, the same limit as $\\sqrt{n}(\\bar{X}-\\mu )$.

A proof applies a conditional triangular-array CLT to draws from $P_n$: empirical variance converges to $\\sigma ^{2}$, and the moment condition controls the largest observed contribution relative to $\\sqrt{n}$. The conclusion is first-order. It does not say the two finite-sample distributions are identical.

<a id="section-68-4-one-bootstrap-dataset-is-not-an-uncertainty-analysis"></a>
## 4. One bootstrap dataset is not an uncertainty analysis {#section-70-4-one-bootstrap-dataset-is-not-an-uncertainty-analysis}

In computation, repeat the resampling step $B$ times to obtain $T_{1}^*,\\dots,T_{B}^*$. The empirical standard deviation

\\[se_boot=[(B-1)^{-1}\\sum _b(T_b^*-overline{T^*})^{2}]^{1/2}\\]

estimates the conditional bootstrap standard deviation.

There are now two sources of approximation:

1. **statistical approximation:** the bootstrap law may differ from the target sampling law;
2. **Monte Carlo approximation:** $B$ finite draws approximate the bootstrap law.

If a bootstrap event has conditional probability $q$, its estimated frequency from independent resamples has conditional standard error

$\\sqrt{q(1-q)/B}$.

This formula audits a tail probability, not quantile error directly. Extreme quantiles usually need many more resamples than a standard error. Seeds, random-number generator, $B$, failed fits, and tie rules belong in a reproducibility record.

<a id="section-87-5-percentile-basic-and-studentised-intervals-are-differ"></a>
## 5. Percentile, basic, and studentised intervals are different {#section-89-5-percentile-basic-and-studentised-intervals-are-differ}

Let $q_a^*$ be the conditional $a$ quantile of bootstrap replicates $T_n^*$.

<a id="section-91-percentile-interval"></a>
### Percentile interval {#section-93-percentile-interval}

The percentile interval is

$[q_{\\alpha /2}^*,q_{1-\\alpha /2}^*]$.

It reads uncertainty directly from the estimator-scale bootstrap distribution. It is equivariant under strictly increasing transformations: transforming all replicates and taking quantiles transforms the endpoints. It can inherit estimator bias and skewness in ways that harm coverage.

<a id="section-99-basic-interval"></a>
### Basic interval {#section-101-basic-interval}

Approximate the error distribution of $T_n-t(P)$ by that of $T_n^*-T_n$. If conditional error quantiles are $q_a^*-T_n$, inversion gives

$[2T_n-q_{1-\\alpha /2}^*, 2T_n-q_{\\alpha /2}^*]$.

This “reverse percentile” interval recentres the bootstrap errors at the observed statistic. It is not generally transformation-equivariant.

<a id="section-107-bootstrap-t-interval"></a>
### Bootstrap-t interval {#section-109-bootstrap-t-interval}

If each resample has a reliable standard-error estimate $se_b^*$, form

$R_b^*=(T_b^*-T_n)/se_b^*$.

Let $r_a^*$ be its conditional quantiles and let $se_n$ estimate the original statistic's scale. The studentised interval is

$[T_n-r_{1-\\alpha /2}^{*}se_n, T_n-r_{\\alpha /2}^{*}se_n]$.

Studentisation can improve first-order scale adaptation, but unstable or zero resample standard errors can make it unusable. None of these intervals has automatic finite-sample coverage merely because $B$ is large.

<a id="section-119-6-parametric-bootstrap-moves-assumptions-into-a-fitted-"></a>
## 6. Parametric bootstrap moves assumptions into a fitted family {#section-121-6-parametric-bootstrap-moves-assumptions-into-a-fitted-}

If a parametric model \${P_\\theta }$ is declared, estimate $\\theta $ by $\\hat{\\theta }$, draw bootstrap data from $P_{\\hat{\\theta }}$, refit the estimator, and calculate the desired statistic. This **parametric bootstrap** can reproduce structural features absent from the empirical distribution, such as censored event-time generation or a known count law.

Its validity depends on the fitted family, consistency and regularity of $\\hat{\\theta }$, and faithful repetition of the whole fitting pipeline. Drawing only model residual noise while treating selected covariates, tuned penalties, or estimated nuisance quantities as fixed can omit material variation.

The nonparametric bootstrap is not assumption-free: it assumes the empirical distribution is an adequate local stand-in for an iid population law. The parametric version makes a different and usually stronger model commitment.

<a id="section-127-7-permutation-tests-imitate-a-null-symmetry-not-a-popul"></a>
## 7. Permutation tests imitate a null symmetry, not a population {#section-129-7-permutation-tests-imitate-a-null-symmetry-not-a-popul}

Bootstrap resampling with replacement estimates a sampling law. A permutation or randomisation test instead generates transformations that are equally likely under a null hypothesis.

Let a finite group $G$ act on the data. Suppose that under every null state, conditional on the orbit

$O(x)={gx:g\\in G}$,

the observed data are uniform over the orbit, accounting for duplicate transformations. For a statistic $T$ where large values are more extreme, define

$p_perm(x)=|G|^{-1}\\sum _{g\\in G}1_{T(gx)\\ge T(x)}$.

Then the test rejecting for sufficiently small permutation p-values has finite-sample level at most $\\alpha $.

<a id="section-141-why-the-permutation-p-value-is-valid"></a>
### Why the permutation p-value is valid {#section-143-why-the-permutation-p-value-is-valid}

Conditional on an orbit, the observed transformed position is uniform among the reference positions. At most an $\\alpha $ fraction of positions can have an upper-rank p-value at most $\\alpha $, with ties making the fraction smaller unless randomised. Therefore conditional rejection probability is at most $\\alpha $. Averaging over orbits preserves the bound.

This proof is a symmetry argument. It does not depend on a normal approximation, and increasing the number of enumerated permutations does not repair a false exchangeability assumption.

<a id="section-147-8-two-sample-permutations-need-the-right-null"></a>
## 8. Two-sample permutations need the right null {#section-149-8-two-sample-permutations-need-the-right-null}

Suppose observations in two labelled groups are iid from the same distribution under the null. Conditional on the pooled values and fixed group sizes, labels are exchangeable, so permuting labels gives an exact test of equality of the full distributions.

The weaker null of equal means alone does not generally make observations exchangeable when variances or shapes differ. A raw-label permutation test for a mean difference may then lack exact finite-sample size. Studentisation can improve asymptotic robustness, but exactness still requires its own theorem.

In a randomised experiment, treatment assignments are generated by a known design. Under a **sharp null** specifying every unit's treatment effect as zero, all missing potential outcomes are known from observed outcomes, and reassigning labels according to the original design gives an exact randomisation distribution. Testing an average-effect null is different: it does not fill in every missing potential outcome and usually needs additional reasoning.

<a id="section-155-9-monte-carlo-permutation-p-values-include-the-observed"></a>
## 9. Monte Carlo permutation p-values include the observed arrangement {#section-157-9-monte-carlo-permutation-p-values-include-the-observed}

When $|G|$ is too large, sample $B$ null transformations. A conservative and commonly valid construction under exchangeability is

$p_MC=[1+\\sum _{b=1}^B1_{T_b\\ge T_obs}]/(B+1)$.

The added one treats the observed arrangement as one of $B+1$ exchangeable positions and prevents a zero p-value. Reporting $0/B=0$ falsely claims evidence resolution beyond the simulation. The smallest attainable plus-one p-value is $1/(B+1)$.

Random seeds and the transformation sampler must be recorded. Sampling transformations without replacement or using importance weights changes the Monte Carlo calculation and requires matching formulas.

<a id="section-165-10-the-ordinary-bootstrap-fails-for-a-sample-maximum"></a>
## 10. The ordinary bootstrap fails for a sample maximum {#section-167-10-the-ordinary-bootstrap-fails-for-a-sample-maximum}

Let $X_i$ be iid $Uniform(0,\\theta )$ and $M_n=\\max_iX_i$. The asymptotic chapter proved

$n(\\theta -M_n)/\\theta \\Rightarrow Exponential(1)$.

For continuous original data the observed maximum is unique almost surely. Every empirical bootstrap observation is at most $M_n$, and

$P^*(M_n^*=M_n)=1-(1-1/n)^n\\to 1-e^{-1}$.

Thus the conditional distribution of $n(M_n-M_n^*)$ has an atom at zero whose mass tends to about $0.632$. The target exponential limit is continuous and has no atom at zero. The ordinary $n$-out-of-$n$ empirical bootstrap therefore cannot consistently imitate the endpoint estimator's limit.

The failure is structural: the empirical distribution ends at the observed maximum and cannot generate observations between $M_n$ and the unknown $\\theta $. More resamples estimate the wrong conditional law more precisely. Remedies such as parametric endpoint models, subsampling, or $m$-out-of-$n$ methods require new assumptions and theory.

<a id="section-179-11-other-resampling-failure-modes"></a>
## 11. Other resampling failure modes {#section-181-11-other-resampling-failure-modes}

- **Heavy tails:** a sample may not reveal rare extremes that dominate the true sampling law; infinite-variance means lack the ordinary root-$n$ target.
- **Dependence:** resampling individual observations destroys time-series, spatial, cluster, or network dependence. Block or cluster methods must reproduce the relevant dependence unit and have their own rate conditions.
- **Nonsmooth functionals:** maxima, thresholded estimators, some quantiles at atoms, and model-selection maps can change abruptly under small distribution perturbations.
- **Rare classes and separation:** resamples can omit a class or make a fitted likelihood unbounded; failed fits are inferential outcomes, not rows to discard silently.
- **Data-adaptive pipelines:** feature selection, tuning, stopping, imputation, and preprocessing must be repeated inside each resample when their randomness is part of the target procedure.
- **Nonidentification:** resampling an observation law cannot recover distinctions the observation law never identified.

<a id="section-188-12-a-resampling-audit"></a>
## 12. A resampling audit {#section-190-12-a-resampling-audit}

Before trusting a resampling result, state:

1. target sampling or null distribution;
2. resampling unit and conditional law;
3. theorem or invariance linking resample and target laws;
4. statistic, centering, scaling, and studentisation;
5. treatment of dependence, nuisance fitting, tuning, and selection;
6. number of replicates and Monte Carlo error;
7. tie, boundary, failure, and missing-class rules;
8. known nonsmooth, heavy-tail, weak-identification, or endpoint risks;
9. deterministic reproduction details and numerical alternatives to plots.

<a id="section-202-13-exercises-with-complete-solutions"></a>
## 14. Investigation: compare three reference laws {#section-763-14-investigation-compare-three-reference-laws}

Choose one statistic for which an exact or high-precision sampling reference is available. Compare its analytic asymptotic approximation, empirical bootstrap distribution, and—where a genuine null symmetry exists—permutation or randomisation distribution. Predeclare centering, scale, tail, and $B$; record seeds and failed replicates. Across several population shapes and sample sizes, tabulate quantiles, interval coverage, p-value rejection rates, and Monte Carlo uncertainty. Include one deliberate violation such as dependence, unequal shapes, or an endpoint statistic and explain which logical link fails.

<a id="section-765-15-summary-and-forward-route"></a>
## 16. A conditional limit needs a theorem for changing rows {#section-772-16-a-conditional-limit-needs-a-theorem-for-changing-row}

The ordinary iid CLT fixes one population law while sample size grows. A bootstrap calculation has a different population at every size: conditional on the first $n$ observations, its draws come from $P_n$. Calling those draws iid is correct within one row, but does not justify applying a theorem that assumes one fixed law across rows. The missing step is a triangular-array theorem.

We import the following precise deterministic-row Lindeberg–Feller CLT. In row $n$, let $Z_{n1},\\ldots,Z_{nn}$ be independent, centred random variables. If their variance sum tends to $\\sigma^2>0$ and, for each $a>0$,
\\[
 \\sum_{j=1}^n E[Z_{nj}^2\\,1_{\\{|Z_{nj}|>a\\}}]\\longrightarrow0,
\\]
then their sum converges in distribution to $Normal(0,\\sigma^2)$. Independence is required within each row; independence between rows is unnecessary. The tail condition says no collection of large individual contributions keeps a nonvanishing share of the total variation. The source and exact import are recorded separately below.

We now verify its hypotheses for the chapter's bootstrap mean. Suppose the original observations are iid, $\\operatorname{Var}(X)=\\sigma^2>0$, and $E|X|^{2+\\delta}<\\infty$ for some $\\delta>0$. Given the original observations set
\\[
 Z_{nj}=(X_j^*-\\bar X_n)/\\sqrt n.
\\]
Conditional row means are zero, and their variance sum is $v_n$, which tends almost surely to $\\sigma^2$ by the strong law for the first two empirical moments. There is no need to centre at an unknown population mean inside a bootstrap row.

Let $q=2+\\delta$. Since $u^2 1_{\\{|u|>a\\sqrt n\\}}\\le |u|^q/(a\\sqrt n)^\\delta$, the conditional Lindeberg sum is at most
\\[
 \\frac{n^{-1}\\sum_{i=1}^n|X_i-\\bar X_n|^q}
      {a^\\delta n^{\\delta/2}}.
\\]
The numerator is eventually bounded along almost every original sample sequence. Indeed $|x-y|^q\\le2^{q-1}(|x|^q+|y|^q)$, the empirical $q$th absolute moment converges by the strong law, and $\\bar X_n$ converges. The denominator diverges. The conditional tail sum therefore tends to zero on a probability-one set of original sequences.

Fix a sequence in that set. Its empirical measures are now deterministic row laws, so the imported CLT applies and gives conditional weak convergence of $\\sqrt n(\\bar X_n^*-\\bar X_n)$ to $Normal(0,\\sigma^2)$. Thus the result holds along almost every original sequence, and in particular in original-sample probability. This supplies the missing conditional-array link without pretending that the empirical observations were drawn from a nonrandom fixed population.

The ordinary sampling mean has the same continuous normal limit. Weak convergence to a continuous distribution function is uniform over real thresholds: partition a large bounded interval into a finite grid on which the limit changes by little, use convergence at its grid points, then control the two tails. Applying that argument to both laws and using the triangle inequality proves the supremum-distance target stated earlier. The proof remains pointwise in the population law. Uniform validity over a class of populations, or a rate of approximation, needs additional conditions.

Positive variance is essential to this normal-reference statement. A constant population has a degenerate mean law, not the displayed positive-variance limit. The finite $2+\\delta$ moment is a convenient sufficient condition for the proof just given, not a claim of necessity. None of this reasoning transfers unchanged to a maximum, a selected model or a dependent resampling unit.

<a id="section-799-17-enumerating-a-bootstrap-law-reveals-its-centering"></a>
## 17. Enumerating a bootstrap law reveals its centering {#section-801-17-enumerating-a-bootstrap-law-reveals-its-centering}

<a id="section-801-worked-example-1-enumerate-the-conditional-mean-law"></a>
### Worked example 1: enumerate the conditional mean law {#section-803-worked-example-1-enumerate-the-conditional-mean-law}

For a size-two dataset $(0,2)$, a bootstrap draws two indices independently from $\\{1,2\\}$. There are four equally likely ordered index pairs. The resulting sample means are $0,1,1,2$, so their conditional probabilities are $1/4,1/2,1/4$. This is the complete bootstrap law: no random seed or approximate histogram is involved.

The observed mean is one. Its bootstrap **error** therefore takes values $-1,0,1$ with those same probabilities. Its root-$n$ error takes values $-\\sqrt2,0,\\sqrt2$. The three distributions describe the estimator, the centred error and the scaled error. They cannot be compared to one another just because each came from the same four resamples. A bootstrap error centred at zero can approximate a sampling error centred at the population target; an uncentred bootstrap estimator law is instead located near the observed estimate.

The empirical variance of $(0,2)$, using denominator two, is one. Hence the exact conditional variance of the bootstrap mean is $1/2$, which the enumeration confirms: $(-1)^2/4+0^2/2+1^2/4=1/2$. Using the unbiased sample variance, with denominator one, would give two. Substituting that number into the exact identity $v_n/n$ would double the answer. An asymptotically negligible denominator difference is still a genuine finite-sample arithmetic difference.

Repeated observed values need equal care. For $(0,0,2)$ there are three equally likely **indices**, not two equally likely distinct values. One draw equals two with probability $1/3$. In three bootstrap draws the count of twos is binomial with parameters $(3,1/3)$, giving probabilities $8,12,6,1$ divided by $27$. Resampling the two distinct numerical values with probabilities one half would fit a different empirical law. Multiplicity is information about the observation law.

This enumeration also separates a fitted law from an estimated target. The original sample may contain little of a rare population tail. Conditional simulation can explore all consequences of the fitted empirical masses while still missing that population feature. Exact enumeration eliminates Monte Carlo error but cannot validate the fitted law. The chapter's endpoint counterexample is a particularly sharp instance: its atom is a property of the conditional law, not noise in a finite simulation.

For a fitted model involving nuisance parameters, the same bookkeeping must specify which quantities are re-estimated in each resample. A statistic whose formula includes a sample standard error is not reproduced by resampling only its numerator. A selected model is not reproduced by freezing a selection that would have varied under repetition. Before implementing a resampling loop, write one complete resample as a probability experiment and name every quantity returned by its pipeline.

<a id="section-815-18-exact-null-ranks-include-ties-and-multiplicities"></a>
## 18. Exact null ranks include ties and multiplicities {#section-817-18-exact-null-ranks-include-ties-and-multiplicities}

<a id="section-817-worked-example-2-rank-all-six-allocations"></a>
### Worked example 2: rank all six allocations {#section-819-worked-example-2-rank-all-six-allocations}

A permutation distribution is a conditional null reference, so its centre is determined by the null construction rather than by the observed estimator. Consider two labelled groups of size two with pooled values $0,1,2,3$. There are six choices of which two values receive the first label. For the difference of group means, their values are
\\[
 -2,\\ -1,\\ 0,\\ 0,\\ 1,\\ 2.
\\]
For example, giving the first group values with sum $s$ yields difference $s-3$. This formula enumerates the reference without listing all $4!$ permutations of ordered slots. If one does use all slot permutations, each allocation occurs the same number of times and the probabilities agree.

With extremeness measured by absolute difference, an observed difference of magnitude two has p-value $2/6$. Magnitude one has p-value $4/6$, since both zero positions are less extreme; magnitude zero has p-value one. The two zero positions are distinct equally likely allocations even though their statistic values coincide. Collapsing the five distinct numerical differences to equal weights would change the null law.

For a general finite orbit, order the distinct extremeness values from largest downward and group equal values together. At a tied level, the inclusive-tail p-value is the cumulative probability of all levels at least that extreme. If this cumulative probability is at most $\\alpha$, every position in those included levels may reject; their total mass is at most $\\alpha$. Adding a tied block that crosses the cutoff would exceed it, so the inclusive-tail rule stops before that block. This proves superuniformity of the p-value, including discrete levels where exact size $\\alpha$ is impossible.

A randomised tie rule can fill the unused probability. Let $p_>$ be the mass strictly more extreme and $p_=$ the tied mass, and use $p_>+U p_=$ for an independent uniform $U$. Conditional on a tied block this spreads its mass uniformly across the corresponding probability interval. Combining all blocks gives a uniform p-value under the orbit law. Such extra randomisation must be declared; replacing a conservative inclusive p-value by a smaller number after inspecting the result is not that procedure.

The orbit hypothesis remains the hard scientific condition. The pooled four-value example is exact under equal-distribution sampling with exchangeable labels, or under an appropriate sharp-null assignment design. Equal means with unequal distributions do not justify the six equal weights. Nor can ties be broken by modifying outcomes until a preferred tail probability appears. Ties are part of the probability experiment, and their treatment is an input to the test.

<a id="section-833-19-interval-inversion-is-a-statement-about-errors"></a>
## 19. Interval inversion is a statement about errors {#section-835-19-interval-inversion-is-a-statement-about-errors}

The basic interval can be reconstructed without remembering its formula. Suppose $e_L^*,e_U^*$ are lower and upper conditional quantiles of the centred bootstrap error $T_n^*-T_n$. The intended approximation is
\\[
 P(e_L^*\\le T_n-\\tau\\le e_U^*)\\approx1-\\alpha.
\\]
Solving both inequalities for $\\tau$ reverses their order:
\\[
 T_n-e_U^*\\le\\tau\\le T_n-e_L^*.
\\]
Since $e_a^*=q_a^*-T_n$, this becomes the basic interval from Section 5. The reversal is algebra, while the probability approximation is a statistical theorem. Correct algebra does not establish coverage.

For discrete bootstrap laws, declare the quantile convention. Here a lower quantile is $\\inf\\{x:F^*(x)\\ge a\\}$ for $0<a<1$. Endpoints may stay fixed over a range of nominal levels, and a nominal central probability need not equal the actual mass between those endpoints. In a finite enumeration the quantile is an attained support value. This is also the setting where increasing transformations preserve the order-based percentile endpoints directly.

Studentisation changes which error distribution is imitated. Dividing by a resample standard error can remove a nuisance scale in a regular setting, but the denominator is now random and may be zero. For the size-two empirical law with distinct observations, the two constant resamples have zero empirical standard error. They account for half of the bootstrap index pairs. Silently deleting them conditions on successful resamples and defines a different reference distribution. A bootstrap-t method must specify a treatment and justify it; in this example reporting that this denominator-based recipe is unusable is more honest than inventing finite values.

This connects to the two kinds of error. Increasing $B$ reduces the error in estimating a conditional event probability, at rate measured by $\\sqrt{q(1-q)/B}$ under independent resampling. It cannot change which quantile convention was used, supply a missing denominator, or repair a failed coverage theorem. A noisy estimate of a valid conditional reference and a precise estimate of an invalid one need different repairs.

Interval coverage itself averages over original samples. To evaluate a proposed method in a finite model, construct its endpoints for every possible original dataset and sum the probabilities of those datasets whose intervals contain the true target. Looking only at one plausible interval does not calculate coverage. The reference investigation below does this sum exactly, making the distinction between a conditional bootstrap distribution and a repeated-sampling property visible at very small sample sizes.

<a id="section-853-20-compare-reference-laws-only-after-matching-their-que"></a>
## 20. Compare reference laws only after matching their questions {#section-855-20-compare-reference-laws-only-after-matching-their-que}

A sampling reference asks what would happen if the original experiment were repeated at a stated population law. A bootstrap reference asks what happens under a fitted empirical or parametric law conditional on this dataset. A randomisation reference asks what happens when a declared null transformation is applied while the appropriate conditioning information stays fixed. An analytic normal approximation may approximate the first, or sometimes a conditional version of it. These are related questions with different probability spaces.

There is no reason their finite-sample variances must agree for a particular observed dataset. A label-permutation law conditions on the pooled values and fixes group sizes. An empirical bootstrap draws with replacement and lets empirical value counts vary. A sampling law averages over which pooled values were observed in the first place. Exact conditional calibration of the permutation test follows from the null symmetry; accuracy of a bootstrap sampling approximation follows from a different limiting argument. One theorem cannot serve as a certificate for the other.

A simple dependence violation illustrates the distinction. Under independent fair binary observations, changing any subset of zeros to ones and ones to zeros preserves the joint null law. But suppose all $n$ measurements equal one common fair binary variable. Each marginal is still fair. Independent coordinate flips no longer preserve their joint law, because transformed samples can have mixed values that the actual experiment never generates. A reference based only on the correct one-observation marginal can therefore be wrong about the repeated sample.

Scaling matters here too. For iid binary observations, the sampling mean variance is $p(1-p)/n$. Under perfectly shared binary variation it is $p(1-p)$, because averaging identical copies provides no new independent information. Resampling individual coordinates treats the copies as independent units and misses that difference. A cluster design would regard the shared variable as one independent unit; calling its $n$ copies a large sample would not change the available information.

A useful report consequently pairs each table with a sentence naming its law, conditioning, target and extremeness. Exact finite probabilities can diagnose logic at a few small sizes; they do not establish a theorem over all populations or a practical large-sample accuracy guarantee. Conversely, an asymptotic theorem with all its hypotheses checked does not promise useful accuracy at size two. The purpose of placing exact and limiting references side by side is to show where their agreements come from and where their finite discrepancies remain.

<a id="section-865-21-a-monte-carlo-error-bound-is-not-a-calibrated-test-p"></a>
## 21. A Monte Carlo error bound is not a calibrated test p-value {#section-867-21-a-monte-carlo-error-bound-is-not-a-calibrated-test-p}

Suppose one fixed-data bootstrap event has conditional probability $q$, and $C_B$ counts its occurrence among $B$ independently generated resamples. Conditional on the original data, $C_B$ has exactly a binomial law with parameters $(B,q)$. Its frequency has mean $q$ and variance $q(1-q)/B$. This calculation concerns how precisely the chosen conditional law has been evaluated. It assumes neither that the bootstrap approximates a population law well nor that the event tests a scientific null.

If no event occurs, the plug-in standard error based on frequency zero is zero. That does not prove the true conditional probability is zero: the probability of this outcome is $(1-q)^B$. Inverting this binomial lower-tail observation gives an exact one-sided upper confidence endpoint
\\[
 q_U=1-\\gamma^{1/B}
\\]
for the zero-count branch of a $(1-\\gamma)$ confidence procedure. A candidate $q>q_U$ would give zero events with probability below $\\gamma$. The endpoint describes uncertainty about a resampling probability; it is not a p-value for a population hypothesis.

The plus-one permutation construction answers a different question. Under its null-exchangeability assumptions, the observed arrangement and the randomly transformed arrangements occupy exchangeable rank positions, conditional on the orbit. Counting the observed position with the $B$ transformed positions gives an inclusive rank tail and a finite-sample valid Monte Carlo test. Conditional on one fixed observation its numerical randomness can still be substantial. The rank argument, rather than a binomial error bar for $q$, supplies the test calibration.

It is possible to require both kinds of control: a valid scientific test and a sufficiently precise numerical evaluation. The report must say which guarantee is claimed and under which probability law. A small computed p-value does not by itself show that its Monte Carlo error is negligible; a tiny numerical standard error does not show that the null transformations were justified.

Finally, the binomial calculation above fixes $B$ in advance. Repeatedly checking a simulated frequency and stopping when it crosses a desired threshold changes the sampling plan. A fixed-$B$ confidence statement cannot simply be reused at that selected stopping time. One can predeclare a budget or use a separately justified sequential procedure. Recording a seed makes a chosen calculation reproducible, but does not establish any of these inferential guarantees. These distinctions are particularly useful when a rare tail event requires many more resamples than a visually stable centre of the histogram.


<a id="section-882-22-si-15-p01-an-enumerated-three-law-reference-and-chan"></a>
## 22. SI-15-P01: an enumerated three-law reference and changed case {#section-884-22-si-15-p01-an-enumerated-three-law-reference-and-chan}

<a id="section-884-worked-example-3-compare-three-fully-specified-referenc"></a>
### Worked example 3: compare three fully specified reference laws {#section-886-worked-example-3-compare-three-fully-specified-referenc}

This is one complete finite instantiation of the original open investigation. It supplies a small exact comparison, not a report of unperformed simulations. Take iid $X_i\\sim Bernoulli(p)$ and statistic $T_n=\\bar X_n$, with target $p$. Use centred error $T_n-p$, root scaling $\\sqrt n$ when taking a CLT, and absolute centred error for two-sided tails. For bootstrap errors centre at the observed $T_n$. At the genuine null $p=1/2$, coordinate flips $X_i\\mapsto1-X_i$ generate the finite group of $2^n$ equally likely binary patterns; use $|T_n-1/2|$ for its null test.

The analytic sampling benchmark is $Normal(0,p(1-p)/n)$ for the unscaled error, a CLT approximation. The exact sampling reference has $nT_n\\sim Binomial(n,p)$. For any observed success count $k$, the empirical bootstrap has $nT_n^*\\sim Binomial(n,k/n)$, so its error is $T_n^*-k/n$. These are fully specified laws, including their different centres. A flip distribution at $p=1/2$ is exactly $Binomial(n,1/2)$ on the count scale; it is a null reference, not an estimate of $p$ under arbitrary alternatives.

For the primary case use $n=2$ and observed data $(0,1)$. Enumerate all four bootstrap index pairs and all four flip patterns. Both centred reference laws take values $-1/2,0,1/2$ with probabilities $1/4,1/2,1/4$. Their lower quantiles at levels $.05,.50,.95$ are respectively $-1/2,0,1/2$. The normal error benchmark at the fair null has those quantiles $-z/(2\\sqrt2),0,z/(2\\sqrt2)$, where $z=\\Phi^{-1}(.95)$. Its agreement in centre and variance with the exact law does not make its continuous tails equal to the three-point tails.

For a changed case use $n=3$ and observed data $(0,0,1)$. All $3^3=27$ ordered bootstrap index vectors are equally likely; counting draws of the single successful index gives the first table. The eight flip patterns give the second.

| bootstrap count | centred bootstrap error | exact probability |
| --- | --- | --- |
| $0$ | $-1/3$ | $8/27$ |
| $1$ | $0$ | $12/27$ |
| $2$ | $1/3$ | $6/27$ |
| $3$ | $2/3$ | $1/27$ |

| fair-null count | centred sampling/flip error | exact probability |
| --- | --- | --- |
| $0$ | $-1/2$ | $1/8$ |
| $1$ | $-1/6$ | $3/8$ |
| $2$ | $1/6$ | $3/8$ |
| $3$ | $1/2$ | $1/8$ |

Using the declared lower-quantile convention, the bootstrap error quantiles at $.05,.50,.95$ are $-1/3,0,1/3$; the fair-null sampling/flip error quantiles are $-1/2,-1/6,1/2$. The normal fair-null benchmark gives $-z/(2\\sqrt3),0,z/(2\\sqrt3)$. The different medians in the two discrete tables reflect the convention and their different fitted laws, not a data-entry failure.


For completeness, the exact sampling-error quantiles across both shapes and sizes are:

| true $p$ | size | $.05$ lower quantile | $.50$ lower quantile | $.95$ lower quantile |
| --- | --- | --- | --- | --- |
| $1/2$ | $2$ | $-1/2$ | $0$ | $1/2$ |
| $1/4$ | $2$ | $-1/4$ | $-1/4$ | $3/4$ |
| $1/2$ | $3$ | $-1/2$ | $-1/6$ | $1/2$ |
| $1/4$ | $3$ | $-1/4$ | $1/12$ | $5/12$ |

At $p=1/4$, the size-two count weights are $(9,6,1)/16$ and the size-three weights are $(27,27,9,1)/64$; subtract $p$ from each possible count divided by size to check every entry. The analytic normal-error quantiles are always $-z\\sqrt{p(1-p)/n},0,z\\sqrt{p(1-p)/n}$. Conditional bootstrap quantiles for the fixed supplied datasets remain those already listed regardless of which positive-probability population law generated the dataset. The flip distribution is a justified null reference only at $p=1/2$.

Now calculate repeated-sampling coverage rather than merely showing one interval. Use nominal $90\\%$ percentile intervals with lower bootstrap quantiles at $.05,.95$. At $n=2$, possible observed counts $0,1,2$ produce intervals $[0,0],[0,1],[1,1]$. At $n=3$, counts $0,1,2,3$ produce $[0,0],[0,2/3],[1/3,1],[1,1]$. For the nondegenerate counts the basic intervals coincide with these intervals. Sum binomial original-sample probabilities for the counts that cover the true interior $p$:

| true law | size | percentile/basic exact coverage |
| --- | --- | --- |
| $Bernoulli(1/2)$ | $2$ | $1/2$ |
| $Bernoulli(1/4)$ | $2$ | $3/8$ |
| $Bernoulli(1/2)$ | $3$ | $3/4$ |
| $Bernoulli(1/4)$ | $3$ | $27/64$ |

For example, at $n=3,p=1/4$ only count one covers the target, giving $\\binom31(1/4)(3/4)^2=27/64$. At the fair null counts one and two both cover, giving $6/8$. These are exact coverage probabilities, not Monte Carlo frequencies. The two laws have different skewness, and the two sizes are deliberately small; this table establishes no uniform large-sample accuracy claim.

For an analytic interval comparison use the ordinary plug-in Wald interval
\\[
 [\\hat p-z\\sqrt{\\hat p(1-\\hat p)/n},
  \\hat p+z\\sqrt{\\hat p(1-\\hat p)/n}],
 \\qquad z=\\Phi^{-1}(.95)\\approx1.645.
\\]
At sizes two and three its constant-sample intervals are degenerate. At size two only count one covers either listed interior target. At size three both nondegenerate counts cover both listed targets: for $p=1/4$, the lower endpoint at count two is below $1/4$ because $z>5\\sqrt6/8$. Thus its exact coverages in table order are $1/2,3/8,3/4,9/16$. This comparison assesses this specified Wald recipe; it is not a theorem promising nominal coverage to any of the three interval constructions.

The exact two-sided flip p-value has smallest attainable value $1/2$ at size two and $1/4$ at size three. Consequently at level $.10$ it never rejects, with fair-null rejection rate zero. At level $1/4$, size three rejects exactly the two constant patterns, whose fair-null probability is $1/4$. At $p=1/4$ this same test has power $(1/4)^3+(3/4)^3=7/16$; at size two the level-$1/4$ rule never rejects under either listed law. These alternative-law rejection rates are power calculations, not additional null-size claims. Inclusive ties are essential to those statements.

For the deliberate violation, keep size three and fair marginals but set $X_1=X_2=X_3=Z$ for one fair binary $Z$. The actual experiment always gives a constant pattern. Applying the invalid independent-coordinate-flip reference still gives p-value $1/4$, so at that level it rejects with probability one rather than $1/4$. Dependence has broken the joint null symmetry. Increasing the number of flips cannot repair it.

The reproducibility record is deterministic: enumerate all $n^n$ ordered bootstrap index vectors and all $2^n$ flip patterns; for the coverage table enumerate all $2^n$ original binary vectors with their binomial weights. Primary/changed enumeration counts are $4/27$ bootstrap vectors and $4/8$ flip vectors. No seed is needed, no fit fails, and Monte Carlo uncertainty is zero because no random approximation is used. A later simulated version would have to name its actual generator, seed and replicate count, report failed fits, and attach binomial Monte Carlo uncertainty; none is fabricated here.

Self-review checks six components separately: the target and centres; multiplicity-correct finite weights; quantile convention; original-sample coverage sums; null-symmetry and tie argument; and the explicit dependence failure. An interval-only answer needs the coverage-sum repair. A permutation law called a bootstrap needs the conditioning repair. A nominal level reported as observed coverage needs the exact-enumeration repair. This public model and changed case support comparison; they neither grade unseen work nor validate full-book effort.

<a id="section-949-23-optional-practice-extensions"></a>
## 25. Exact source scope for the conditional mean theorem {#section-1017-25-exact-source-scope-for-the-conditional-mean-theorem}

The imported deterministic triangular-array theorem is Rick Durrett, Probability: Theory and Examples, fifth-edition author manuscript, Section 3.4.2, Theorem 3.4.10, page 148: [author-hosted text](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf). Its independent centred rows, positive limiting variance and Lindeberg tail assumptions were checked against the author text. The conditional application and $2+\\delta$ verification are supplied in this chapter.

A primary research reference is P. J. Bickel and D. A. Freedman, “Some Asymptotic Theory for the Bootstrap,” Annals of Statistics 9 (1981), 1196–1217, [DOI record](https://doi.org/10.1214/aos/1176345637); the [original article scan](https://www.math.ntu.edu.tw/~hchen/teaching/LargeSample/references/BickelFreedman81.pdf), Theorem 2.1 on page 1197 and proof on page 1198, was checked for its mean and bootstrap-scale conclusions. That result uses finite positive variance and gives almost-sure conditional convergence as original and resample sizes tend to infinity. This chapter retains its stronger displayed moment assumption for the transparent Lindeberg verification; no necessity or blanket validity for other functionals is claimed.

<a id="section-1021-sources"></a>

<a id="section-423-summary"></a>
## Summary {#section-425-summary}

<a id="section-767-15-summary-and-forward-route"></a>
The empirical bootstrap samples from $P_n$ to imitate a sampling distribution; permutation methods transform data according to a null symmetry. Conditional moments validate simple bootstrap calculations, while consistency requires a statistic-specific theorem. Percentile, basic, and studentised intervals invert different approximations. Exchangeability can give exact permutation calibration, but equal means alone need not. Endpoint statistics demonstrate that unlimited resamples can estimate the wrong law perfectly. Later robustness and design chapters adapt these ideas to contamination, clusters, missingness, and randomised causal contrasts.


<a id="section-770-16-a-conditional-limit-needs-a-theorem-for-changing-row"></a>

<a id="section-1027-summary"></a>
An empirical bootstrap, a fitted parametric bootstrap and a null permutation law are different probability constructions. Preserve multiplicities, centering, scale and the complete estimation pipeline. Exact conditional identities or enumeration can remove computational error without establishing statistical approximation validity. Finite resampling error, endpoint failure, serial dependence and broken null symmetry require separate explanations.

The main route continues to [Linear Models and Regression Inference](linear-models-and-regression-inference.md).

## Exercises {#section-204-13-exercises-with-complete-solutions}

<a id="section-204-1-empirical-expectation"></a>
### 1. Empirical expectation {#section-206-1-empirical-expectation}

**Exercise 13.1**

Show the mean of one draw from $P_n$ is $\\bar{X}$.

<details>
<summary>Hint 1</summary>

A bootstrap draw selects an original observation index uniformly.

</details>

<details>
<summary>Hint 2</summary>

Average its possible values with mass $1/n$ each, retaining duplicates.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each observed value has mass $1/n$, so

$E^*[X_1^*]=n^{-1}\\sum _iX_i=\\bar{X}$.

</details>

<a id="section-233-2-empirical-variance"></a>
### 2. Empirical variance {#section-235-2-empirical-variance}

**Exercise 13.2**

Show the variance of one bootstrap draw is $v_n$.

<details>
<summary>Hint 1</summary>

Center one conditional draw at the observed mean.

</details>

<details>
<summary>Hint 2</summary>

The conditional variance uses the empirical denominator $n$, not $n-1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Centering at its conditional mean,

$Var^*(X_1^*)=E^*[(X_1^*-\\bar{X})^{2}]=n^{-1}\\sum _i(X_i-\\bar{X})^{2}=v_n$.

</details>

<a id="section-262-3-bootstrap-mean-variance"></a>
### 3. Bootstrap-mean variance {#section-264-3-bootstrap-mean-variance}

**Exercise 13.3**

Derive $Var^*(\\bar{X}^*)=v_n/n$.

<details>
<summary>Hint 1</summary>

The resampled draws are independent conditional on the original data.

</details>

<details>
<summary>Hint 2</summary>

Divide their single-draw empirical variance by the resample size.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional bootstrap draws are independent with variance $v_n$. The average of $n$ such draws has variance $n v_n/n^{2}=v_n/n$.

</details>

<a id="section-289-4-expected-bootstrap-count"></a>
### 4. Expected bootstrap count {#section-291-4-expected-bootstrap-count}

**Exercise 13.4**

How many times is a fixed original observation expected to appear in a size-$n$ bootstrap sample?

<details>
<summary>Hint 1</summary>

Use one selection indicator per resampled index.

</details>

<details>
<summary>Hint 2</summary>

The fixed observation's count has binomial parameters $n$ and $1/n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its count is $Binomial(n,1/n)$, so its conditional expectation is $n(1/n)=1$.

</details>

<a id="section-316-5-probability-an-observation-is-absent"></a>
### 5. Probability an observation is absent {#section-318-5-probability-an-observation-is-absent}

**Exercise 13.5**

Find the probability a fixed observation is not selected at all.

<details>
<summary>Hint 1</summary>

Each independent draw misses the fixed index with probability $1-1/n$.

</details>

<details>
<summary>Hint 2</summary>

Multiply that probability across all $n$ draws.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each of $n$ draws misses it with probability $1-1/n$; independence gives $(1-1/n)^n$, tending to $e^{-1}$.

</details>

<a id="section-343-6-monte-carlo-tail-error"></a>
### 6. Monte Carlo tail error {#section-345-6-monte-carlo-tail-error}

**Exercise 13.6**

With conditional tail probability $q=0.05$ and $B=2000$, find the standard error of its empirical frequency.

<details>
<summary>Hint 1</summary>

The tail count is an average of independent indicators conditional on the data.

</details>

<details>
<summary>Hint 2</summary>

Its standard error is $\\sqrt{q(1-q)/B}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is

$\\sqrt{0.05(0.95)/2000}\\approx 0.00487$.

</details>

<a id="section-372-7-required-replicate-count"></a>
### 7. Required replicate count {#section-374-7-required-replicate-count}

**Exercise 13.7**

How large must $B$ be to make the standard error in Exercise 6 at most $0.005$, assuming $q=0.05$?

<details>
<summary>Hint 1</summary>

Square the desired standard-error inequality.

</details>

<details>
<summary>Hint 2</summary>

Solve $0.05(0.95)/B\\le0.005^2$ and use an integer number of replicates.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require $0.05(0.95)/B\\le 0.005^{2}$, so $B\\ge 0.0475/0.000025=1900$.

</details>

<a id="section-399-8-percentile-endpoints"></a>
### 8. Percentile endpoints {#section-401-8-percentile-endpoints}

**Exercise 13.8**

If the 2.5% and 97.5% bootstrap quantiles are $8$ and $13$, give the percentile interval.

<details>
<summary>Hint 1</summary>

The percentile construction uses the stated quantiles directly.

</details>

<details>
<summary>Hint 2</summary>

Retain their existing order without reflecting them about the estimate.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $[8,13]$.

</details>

<a id="section-426-9-basic-endpoints"></a>
### 9. Basic endpoints {#section-428-9-basic-endpoints}

**Exercise 13.9**

With $T_n=10$ and the quantiles in Exercise 8, give the basic interval.

<details>
<summary>Hint 1</summary>

The basic construction reflects the bootstrap-error quantiles about the estimate.

</details>

<details>
<summary>Hint 2</summary>

Use endpoints $2T_n-q_{.975}^*$ and $2T_n-q_{.025}^*$.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $[2(10)-13,2(10)-8]=[7,12]$.

</details>

<a id="section-453-10-bootstrap-t-inversion"></a>
### 10. Bootstrap-t inversion {#section-455-10-bootstrap-t-inversion}

**Exercise 13.10**

If studentised quantiles are $r_.025=-2.3$, $r_.975=1.8$, estimate $T=5$, and $se=0.4$, find the interval.

<details>
<summary>Hint 1</summary>

Invert the studentized inequality before substituting the quantiles.

</details>

<details>
<summary>Hint 2</summary>

The upper error quantile determines the lower parameter endpoint.

</details>

<details>
<summary>Solution</summary>

**Solution.** The endpoints are

\\[5-1.8(0.4)=4.28\\]

and

$5-(-2.3)(0.4)=5.92$,

so $[4.28,5.92]$.

</details>

<a id="section-488-11-transformation-equivariance"></a>
### 11. Transformation equivariance {#section-490-11-transformation-equivariance}

**Exercise 13.11**

Why does applying a strictly increasing $g$ to every replicate transform a percentile interval endpointwise?

<details>
<summary>Hint 1</summary>

A strictly increasing map preserves order.

</details>

<details>
<summary>Hint 2</summary>

State the compatible quantile convention; interpolation conventions can matter for finite empirical quantiles.

</details>

<details>
<summary>Solution</summary>

**Solution.** Strictly increasing maps preserve order, so the $a$ quantile of $g(T^*)$ is $g(q_a^*)$ under compatible quantile conventions. Therefore both percentile endpoints transform directly.

</details>

<a id="section-515-12-parametric-versus-empirical-resampling"></a>
### 12. Parametric versus empirical resampling {#section-517-12-parametric-versus-empirical-resampling}

**Exercise 13.12**

What law generates one resample in each method?

<details>
<summary>Hint 1</summary>

Identify the fitted probability law used as the resampling source.

</details>

<details>
<summary>Hint 2</summary>

The empirical and parametric methods replace the unknown law in different ways.

</details>

<details>
<summary>Solution</summary>

**Solution.** Nonparametric bootstrap draws iid from empirical law $P_n$. Parametric bootstrap draws from a fitted model law $P_{\\hat{\\theta }}$. They encode different assumptions.

</details>

<a id="section-542-13-orbit-calibration"></a>
### 13. Orbit calibration {#section-544-13-orbit-calibration}

**Exercise 13.13**

Why does uniformity over a permutation orbit imply a valid rank p-value?

<details>
<summary>Hint 1</summary>

Condition on the orbit where positions are equally likely.

</details>

<details>
<summary>Hint 2</summary>

Only the prescribed tail fraction can have sufficiently small inclusive rank p-values; ties are conservative.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional on the orbit, every transformed position is equally likely. No more than an $\\alpha $ fraction can occupy the most-extreme fraction labelled by p-values at most $\\alpha $; ties make the rule conservative. Averaging conditional probabilities gives unconditional level control.

</details>

<a id="section-569-14-equal-means-are-not-exchangeability"></a>
### 14. Equal means are not exchangeability {#section-571-14-equal-means-are-not-exchangeability}

**Exercise 13.14**

Give a reason two groups with equal means may not permit an exact raw-label permutation test.

<details>
<summary>Hint 1</summary>

Equal means need not give equal entire distributions.

</details>

<details>
<summary>Hint 2</summary>

Unequal variances or shapes can break the joint invariance required by raw-label permutation.

</details>

<details>
<summary>Solution</summary>

**Solution.** They can have different variances or distribution shapes. Then joint probability changes when observations exchange labels, so the pooled labels are not uniform under permutation even though the means match.

</details>

<a id="section-596-15-sharp-null-requirement"></a>
### 15. Sharp-null requirement {#section-598-15-sharp-null-requirement}

**Exercise 13.15**

Why does a sharp zero-effect null support exact treatment reassignment?

<details>
<summary>Hint 1</summary>

The sharp null supplies every missing potential outcome under reassignment.

</details>

<details>
<summary>Hint 2</summary>

Then the actual known assignment mechanism defines the complete null reference law.

</details>

<details>
<summary>Solution</summary>

**Solution.** It specifies $Y_i(1)=Y_i(0)$ for every unit, so every unit's outcome under every allowed assignment is known from the observed outcome. The original randomisation design can therefore generate the exact statistic distribution.

</details>

<a id="section-623-16-plus-one-resolution"></a>
### 16. Plus-one resolution {#section-625-16-plus-one-resolution}

**Exercise 13.16**

With $B=999$ sampled permutations and no simulated statistic as extreme as observed, what p-value does the plus-one rule report?

<details>
<summary>Hint 1</summary>

The observed arrangement supplies the plus one in numerator and denominator.

</details>

<details>
<summary>Hint 2</summary>

Insert zero exceedances and 999 simulated arrangements.

</details>

<details>
<summary>Solution</summary>

**Solution.** $(1+0)/(999+1)=0.001$, not zero.

</details>

<a id="section-650-17-bootstrap-maximum-atom"></a>
### 17. Bootstrap maximum atom {#section-652-17-bootstrap-maximum-atom}

**Exercise 13.17**

Compute the limiting probability that the empirical bootstrap maximum equals the observed unique maximum.

<details>
<summary>Hint 1</summary>

The observed unique maximum is recovered if its index is drawn at least once.

</details>

<details>
<summary>Hint 2</summary>

Take one minus the probability that all $n$ draws miss that index.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is

$1-(1-1/n)^n\\to 1-e^{-1}\\approx 0.632$.

</details>

<a id="section-679-18-why-more-replicates-do-not-fix-endpoint-failure"></a>
### 18. Why more replicates do not fix endpoint failure {#section-681-18-why-more-replicates-do-not-fix-endpoint-failure}

**Exercise 13.18**

What happens as $B\\to \\infty $ for a fixed endpoint dataset?

<details>
<summary>Hint 1</summary>

Increasing $B$ only reduces error in approximating the conditional resampling law.

</details>

<details>
<summary>Hint 2</summary>

A law unable to generate values above the observed maximum retains that structural limitation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Monte Carlo error vanishes and the computed distribution converges to the conditional empirical-bootstrap law. That law still has the structural atom and cannot sample above the observed maximum, so statistical approximation error remains.

</details>

<a id="section-706-19-dependent-observations"></a>
### 19. Dependent observations {#section-708-19-dependent-observations}

**Exercise 13.19**

Why is resampling individual days questionable for an autocorrelated time series?

<details>
<summary>Hint 1</summary>

The sampling distribution includes serial covariance.

</details>

<details>
<summary>Hint 2</summary>

Independent resampling destroys that covariance instead of reproducing it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independent resampling breaks serial dependence that contributes to the sampling variance and distribution. A dependence-preserving method such as a justified block scheme is needed.

</details>

<a id="section-733-20-repeat-the-whole-pipeline"></a>
### 20. Repeat the whole pipeline {#section-735-20-repeat-the-whole-pipeline}

**Exercise 13.20**

A feature is selected before estimating its coefficient. Why can bootstrapping only the final coefficient formula understate uncertainty?

<details>
<summary>Hint 1</summary>

The selection step is part of the estimator's data-dependent definition.

</details>

<details>
<summary>Hint 2</summary>

Repeat the complete procedure if that is the target, while still assessing its statistical validity.

</details>

<details>
<summary>Solution</summary>

**Solution.** It treats the selected feature as fixed and omits variation from the selection step. If the inferential target concerns the full adaptive procedure, selection and tuning must be repeated in each resample, with remaining nonregularity assessed.

</details>


<a id="section-761-14-investigation-compare-three-reference-laws"></a>

<a id="section-951-23-optional-practice-extensions"></a>
### 21. SI-15-E21: count values through their indices {#section-953-si-15-e21-count-values-through-their-indices}

**Exercise 13.21**

For observed data $(0,0,2)$, enumerate the conditional law of the size-three bootstrap mean and of its error centred at the observed mean. Find the $.05$ and $.95$ lower quantiles of that error. Explain why resampling the two distinct values with equal probabilities gives a different law.


<details>
<summary>Hint 1</summary>

Resample the three observation indices rather than two unique values.

</details>

<details>
<summary>Hint 2</summary>

The number of twos is binomial with success probability one third; then centre its transformed count.

</details>


<a id="section-974-si-15-e22-a-symmetry-that-dependence-destroys"></a>
### 22. SI-15-E22: a symmetry that dependence destroys {#section-976-si-15-e22-a-symmetry-that-dependence-destroys}

**Exercise 13.22**

For three independent fair binary observations use the two-sided coordinate-flip p-value based on $|\\bar X-1/2|$. Find its rejection probability at level $1/4$. Repeat the calculation when all three observations equal one common fair binary variable, while still applying the same flip formula. Identify the exact hypothesis that fails.


<details>
<summary>Hint 1</summary>

List the eight binary patterns and their inclusive extremeness ranks.

</details>

<details>
<summary>Hint 2</summary>

Independent fair sampling is uniform on all eight, whereas shared variation is supported only on the two constant patterns.

</details>


<a id="section-997-24-solutions-to-optional-practice-extensions"></a>

<a id="section-1067-solutions"></a>
## Solutions {#section-1069-solutions}

<a id="section-999-24-solutions-to-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-1002-si-15-e21-count-values-through-their-indices-solution"></a>
### SI-15-E21: count values through their indices — solution {#section-1004-si-15-e21-count-values-through-their-indices-solution}

A draw equals two with probability $1/3$, so its count $K^*$ in three draws has probabilities $(8,12,6,1)/27$ at $0,1,2,3$. The bootstrap mean is $2K^*/3$, and the observed mean is $2/3$. The centred error therefore takes values $-2/3,0,2/3,4/3$ with those probabilities. Its lower $.05$ quantile is $-2/3$, and its lower $.95$ quantile is $2/3$, because the cumulative mass through count two is $26/27>.95$. Treating the distinct values as equiprobable replaces $1/3$ by $1/2$, losing the duplicate zero's empirical mass.

</details>
<details>
<summary>Solution</summary>

<a id="section-1010-si-15-e22-a-symmetry-that-dependence-destroys-solution"></a>
### SI-15-E22: a symmetry that dependence destroys — solution {#section-1012-si-15-e22-a-symmetry-that-dependence-destroys-solution}

At size three, constant patterns have extremeness $1/2$ and all other patterns have extremeness $1/6$. Their inclusive-tail p-values are respectively $2/8=1/4$ and one. Under independent fair sampling each of the eight patterns has probability $1/8$, so rejection occurs with probability $1/4$. Under shared variation every observation vector is constant, giving rejection probability one. Coordinatewise flips preserve the independent fair joint law but do not preserve the dependent joint law supported only on two constant vectors. Correct marginals are insufficient for the joint invariance assumption.

</details>
<a id="section-1015-25-exact-source-scope-for-the-conditional-mean-theorem"></a>

## Sources {#section-1023-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-1025-summary"></a>
`;export{e as default};