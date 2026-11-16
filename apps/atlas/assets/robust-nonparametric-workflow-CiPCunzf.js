var e=`---
id: recipe-robust-nonparametric-workflow
title: "A Robust, Nonparametric Analysis Workflow"
license: CC BY-SA 4.0
---

# A Robust, Nonparametric Analysis Workflow

**Before reading.** Read [From a Question to a Row](/resources/library:book-statistics-with-r:question-row-estimand/), [Sample Spaces and Events](/resources/library:book-introduction-to-probability:sample-spaces-events/).

Use this recipe when a single Gaussian linear analysis is too fragile, but do not translate “nonparametric” as “assumption free.” The workflow makes exchangeability, smoothness, contamination, weights, dependence, and model selection visible. It works with basic arrays and arithmetic; no new software dependency is needed.

For theoretical context, consult the [advanced reference](#/item/book-advanced-statistical-inference-reference). For ordered or spatial validation, use the [dependence deep dive](#/item/deep-dive-dependence-time-space-multivariate).

## Step 1 — Freeze the question

Write the target before seeing a favorable method:

- population and sampling frame;
- observational unit and clusters;
- outcome scale and units;
- estimand: median, quantile difference, distributional distance, smooth mean, density, prediction loss, or finite-population total;
- treatment of ties, censoring, missingness, and survey weights;
- strongest permitted claim.

A rank-sum test, median difference, and probability $P(X<Y)$ are related under some models but are not identical estimands. A smoother estimates a conditional curve; it does not automatically estimate a causal dose response.

## Step 2 — Preserve the sampling structure

Create an analysis record for each observation with stratum, cluster, time, location, inclusion weight, and paired-set identifier where relevant. Decide which units may be resampled or permuted together.

- iid observations: individual rows may be exchangeable under an appropriate null;
- randomized blocks: permute treatment within blocks;
- paired data: swap labels within pairs or analyze paired differences;
- clusters: resample or permute whole clusters when cluster assignment is randomized;
- time series: use blocks, innovations, or a fitted null rather than arbitrary row shuffles;
- spatial data: use spatial blocks or model-based simulation;
- unequal-probability surveys: reproduce strata, PSUs, and replicate weights.

If no defensible repeated-world mechanism exists, report descriptive sensitivity rather than a pseudo-exact p-value.

## Step 3 — Produce a resistant data audit

For each numerical variable report count, missing count, minimum, quartiles, median, maximum, and units. Add mean and standard deviation but do not let them replace the distribution. For weighted data, show both unweighted counts and weighted population shares.

For a sample $x_{1}\\le \\ldots \\le x_{n}$, define a quantile convention explicitly. A simple empirical inverse uses

$Q_hat(p)=inf\\{x\\colon F_n(x)\\ge p\\}$.

Software interpolations differ in small samples. The median absolute deviation is

$MAD=median_i |x_i-median(x)|$.

Multiplying by about 1.4826 estimates Gaussian standard deviation under one convention, but unscaled MAD is itself a robust spread in the outcome’s units.

Flag impossible support values and duplicates in identifiers. Do not delete an extreme point merely because it is extreme. Determine whether it is a valid rare value, measurement error, unit error, or different population.

## Step 4 — Pair a classical and resistant estimator

Choose a baseline aligned with the estimand and a resistant companion:

| target | baseline | resistant or flexible companion |
|---|---|---|
| location | mean | median, trimmed mean, Huber location |
| spread | standard deviation | IQR, MAD |
| two-group location | mean difference | median difference, Hodges–Lehmann shift |
| regression | least squares | Huber or quantile regression |
| distribution | named parametric CDF | empirical CDF or kernel estimate |
| conditional mean | polynomial/linear model | local or spline smoother |

Agreement increases confidence only against the differences between those methods. Two biased estimators can agree under the same selection failure.

### Dependency-free Huber location

Given scale $s>0$, tuning $c>0$, and starting location θ:

\`\`\`text
repeat until the change is small:
    u_i = (x_i - θ) / s
    ψ_i = max(-c, min(c, u_i))
    θ_new = θ + s * sum(ψ_i) / count(|u_i| < c)
\`\`\`

This Newton step uses derivative 1 inside the clipping region. Guard against a zero denominator and update robust scale separately if desired. Convergence to a root does not establish uniqueness. Huber’s monotone score gives a convex location objective, whose minimizers form an interval, but the interval need not be a single point. For data $0,1$, scale $s=1$ and tuning $c=0.1$, every $\\theta\\in[0.1,0.9]$ has clipped scores $-0.1,+0.1$ and zero total score. A redescending score can additionally produce separated stationary points.

## Step 5 — Measure influence rather than hiding points

For each observation, recompute the estimator after deletion. The leave-one-out change

$\\Delta _i=T(data)-T(data without i)$

is a finite-sample influence diagnostic. For survey data, delete or replicate at the PSU level according to design. For time or space, deleting an isolated row may understate collective influence of a regime or region.

Plot or tabulate the largest changes alongside measurement provenance. Report the primary result with all valid observations and a sensitivity excluding values only when a predeclared data-quality rule justifies exclusion. A robust estimator is often preferable to secret deletion.

## Step 6 — Build exact rank logic

To rank values with ties:

\`\`\`text
sort (value, original_index)
for each equal-value block occupying positions a through b:
    assign every member midrank (a+b)/2
restore original order
\`\`\`

For two independent groups under a sharp exchangeable null, a permutation statistic can be a rank-sum or difference in means. Enumerate every allowed label assignment when feasible. The exact p-value is the fraction with statistic at least as extreme under the predeclared two-sided ordering.

With Monte Carlo permutations, if $B$ random permutations produce $b$ statistics at least as extreme, use $(b+1)/(B+1)$ rather than $b/B$; this avoids a zero p-value and yields valid randomization calibration under standard sampling of permutations. Report Monte Carlo uncertainty.

Do not claim that rank-sum tests medians without equal-shape or shift conditions. A significant result can reflect spread or shape differences.

## Step 7 — Smooth with an honest bandwidth

For Nadaraya–Watson regression,

$m_hat_h(x)=\\sum _i K((x-x_i)/h)y_i / \\sum _i K((x-x_i)/h)$.

Choose candidate bandwidths before inspecting outcome-favorable curves. Cross-validation minimizes held-out prediction loss, but folds must preserve clusters, time, and spatial gaps. Re-select bandwidth inside any outer validation used to report performance.

Audit at least three bandwidths: selected $h$, $h/2$, and $2h$. A feature that disappears across modest changes is not stable. At boundaries, show effective neighbor counts and consider local-linear smoothing, which reduces first-order boundary bias under smoothness.

In $d$ dimensions, local neighborhoods empty quickly. Distance scaling and bandwidth become decisive. Avoid a high-dimensional smoother without support diagnostics.

## Step 8 — Quantify uncertainty by the correct mechanism

Choose one:

- analytic iid asymptotic variance, when influence and moments justify it;
- design-based Taylor or replicate variance for surveys;
- cluster sandwich with enough independent clusters;
- block bootstrap for suitably weak dependent sequences, with block-length sensitivity;
- spatial block or model simulation for random fields;
- permutation under an explicit invariant null;
- bootstrap that repeats bandwidth, variable, and model selection.

An ordinary percentile bootstrap can fail for extremes, boundary parameters, nonsmooth estimators, dependent data, or a sample maximum. The sample median usually bootstraps under a positive density at the unique population median, but discrete ties can cause nonregular behavior.

## Step 9 — Stress-test contamination

Use three transparent perturbations:

1. **replacement:** move one or a small fraction of points to plausible extremes;
2. **weight:** cap or alter extreme survey or censoring weights under documented rules;
3. **mechanism:** vary the assumed distribution of unseen nonrespondent or censored outcomes.

Record how the estimand estimate, interval, and substantive decision change. Do not report only the perturbation that preserves the preferred conclusion.

For a contamination fraction ε, a crude bounded-outcome mean sensitivity is at most $\\varepsilon (b-a)$ if outcomes lie in $[a,b]$ and only ε of the distribution is replaced. Without bounded support, mean bias under arbitrary contamination is unbounded.

## Step 10 — Control multiplicity

List every outcome, subgroup, bandwidth, lag, and spatial scale inspected. Select familywise control when any false positive is costly, false-discovery control when reporting a discovery set, or simultaneous bands when interpreting an entire curve.

Pointwise intervals along a smoother do not form a simultaneous confidence band. Selecting the most impressive x-location and quoting its pointwise interval is post-selection inference. Use a simultaneous procedure or a separate confirmation sample.

## Step 11 — Validate the whole pipeline

Every learned operation belongs inside the training portion: imputation, standardization, PCA, outlier rules, bandwidth, knots, covariate selection, and tuning. For time series, training precedes test. For spatial extrapolation, test blocks have realistic separation. For survey population prediction, validation respects weights and domains.

Report loss by relevant subgroup and support region. Average performance can hide failure where data are sparse. A robust estimator can protect parameter fit yet still make unstable tail predictions.

## Step 12 — Publish an audit packet

Include:

- immutable question and estimand;
- support, units, frame, and data exclusions;
- classical and resistant estimates side by side;
- exact resampling unit or asymptotic regime;
- influence table;
- bandwidth or tuning sensitivity;
- dependence-preserving validation;
- multiplicity family and procedure;
- missingness, censoring, and contamination sensitivity;
- numerical table usable without graphics;
- claim ladder and remaining uncertainty.

## Worked mini-analysis

### Worked example: preserve the randomization unit

Five randomized pairs compare treatments A and B. Paired differences are
$[-1,2,2,3,20]$.

The mean difference is $26/5=5.2$; median is 2. The 20 dominates the mean. Under the sharp null of no treatment effect, each paired difference may have its sign independently flipped, giving $2^5=32$ assignments if treatment order was randomized within every pair. Permuting ten individual rows would break pairs and be invalid.

A robust report gives mean and median, checks whether 20 is a valid measurement, enumerates paired sign permutations for a predeclared statistic, and states that five pairs provide limited resolution. The smallest attainable nonzero one-sided exact probability is $1/32$; no asymptotic decimal can create more randomization information.

## Exercises with hints and complete solutions

### Exercise 1
<a id="robust-nonparametric-workflow-ex-1"></a>

**Monte Carlo p-value.** In 999 random permutations, 7 are at least as extreme as observed. What adjusted estimate should be reported?

<details><summary>Hint 1</summary>

Include the observed arrangement in the Monte Carlo calibration.

</details>
<details><summary>Hint 2</summary>

Use the plus-one numerator and denominator for the specified random-permutation scheme.

</details>
<details><summary>Solution</summary>

$(7+1)/(999+1)=0.008$. It reflects Monte Carlo sampling of the randomization distribution and should not be interpreted as the probability the null is true.

</details>

### Exercise 2
<a id="robust-nonparametric-workflow-ex-2"></a>

**Contaminated mean.** Values are $0,1,1,2,46$. Compare mean, median, and 20% trimmed mean.

<details><summary>Hint 1</summary>

Sort the five values and distinguish the three summaries.

</details>
<details><summary>Hint 2</summary>

A 20 per cent trim removes one observation at each end.

</details>
<details><summary>Solution</summary>

Mean is 10. Median is 1. Removing one value at each end leaves $1,1,2$, whose mean is $4/3$. The differences reveal sensitivity; they do not prove 46 is erroneous.

</details>

### Exercise 3
<a id="robust-nonparametric-workflow-ex-3"></a>

**Invalid permutation.** Outcomes have strong weekly seasonality and treatments were assigned by week. Why is row-wise label shuffling invalid?

<details><summary>Hint 1</summary>

Identify whether individuals or whole weeks were assigned.

</details>
<details><summary>Hint 2</summary>

A permitted permutation must preserve the actual allocation mechanism and its blocks.

</details>
<details><summary>Solution</summary>

If whole weeks received treatment labels, weeks are the assignment
units. Row-wise shuffling breaks that design. Reassign whole-week labels only
according to the actual randomized allocation, preserving any declared strata
and every row within each week. If assignment was not randomized, an exact
permutation argument needs a separately justified invariance assumption.
Randomization of individuals within each week would instead be a different
design allowing its own within-week permutations.

</details>
`;export{e as default};