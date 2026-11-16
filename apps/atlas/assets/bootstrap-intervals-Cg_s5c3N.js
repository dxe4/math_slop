var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-bootstrap-intervals
title: "Solutions: Bootstrap Standard Errors and Intervals"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Solutions: Bootstrap Standard Errors and Intervals

These solutions distinguish exact statements about the conditional empirical resampling law from approximate statements about a population sampling law. All code blocks form one document and run in order in a fresh R process.

The literal fixtures below are copied from the investigation and exercises. \`R10-SF01\` is the unitless mean vector $(2,3,4,5,6)$; \`R10-SF02\` is the unitless endpoint vector; \`R10-SF03\` is $(1,2,3)$; and \`R10-SF04\` is $(2,4,8,10)$. They are original Math Atlas version 1 synthetic fixtures under CC BY-SA 4.0. Row position is the key, no values are missing, no missing code is used, and no rows are excluded. The assumed independent row unit applies only to the conditional resampling exercises; the fixtures are not evidence about a real population.

\`\`\`r
# Original literal synthetic fixtures, Math Atlas, version 1.
investigation_mean_x <- c(2, 3, 4, 5, 6)
investigation_endpoint_x <- c(0.12, 0.35, 0.51, 0.73, 0.84)
toy_x <- c(1, 2, 3)
se_x <- c(2, 4, 8, 10)

stopifnot(identical(length(investigation_mean_x), 5L))
stopifnot(identical(length(investigation_endpoint_x), 5L))
stopifnot(identical(length(toy_x), 3L), identical(length(se_x), 4L))
stopifnot(!anyNA(c(
  investigation_mean_x,
  investigation_endpoint_x,
  toy_x,
  se_x
)))
stopifnot(all(is.finite(c(
  investigation_mean_x,
  investigation_endpoint_x,
  toy_x,
  se_x
))))
\`\`\`

## R-10-I01

### Reference investigation: a regular mean and a boundary maximum

**Question and prediction.** We compare exact conditional empirical bootstrap distributions. For $(2,3,4,5,6)$, the bootstrap mean should be centered at the observed mean 4 and should range on both sides of it. For the endpoint vector, no resampled value can exceed the observed maximum 0.84, so neither can a resampled maximum.

**Controls.** The function below accepts a vector and a statistic function. \`do.call\` supplies a constructed list of arguments to \`expand.grid\`; the result contains all $n^n$ ordered index samples. \`vapply\` evaluates the statistic once per row and requires one numeric result each time. This is exhaustive enumeration, so it has no random seed or Monte Carlo error. Type 7 is declared for both intervals.

\`\`\`r
exact_bootstrap_statistic <- function(x, statistic) {
  n <- length(x)
  named_draws <- setNames(
    rep(list(seq_len(n)), n),
    paste0("draw_", seq_len(n))
  )
  index_grid <- do.call(
    expand.grid,
    c(named_draws, list(KEEP.OUT.ATTRS = FALSE))
  )
  vapply(
    seq_len(nrow(index_grid)),
    function(row_id) {
      idx <- as.integer(index_grid[row_id, ])
      statistic(x[idx])
    },
    numeric(1L)
  )
}

investigation_mean_boot <- exact_bootstrap_statistic(
  investigation_mean_x,
  mean
)
investigation_max_boot <- exact_bootstrap_statistic(
  investigation_endpoint_x,
  max
)

investigation_summary <- data.frame(
  statistic = c("mean", "maximum"),
  observed = c(
    mean(investigation_mean_x),
    max(investigation_endpoint_x)
  ),
  conditional_bootstrap_mean = c(
    mean(investigation_mean_boot),
    mean(investigation_max_boot)
  ),
  conditional_bootstrap_SE = c(
    sqrt(mean((investigation_mean_boot - mean(investigation_mean_boot))^2)),
    sqrt(mean((investigation_max_boot - mean(investigation_max_boot))^2))
  ),
  percentile_2.5 = c(
    quantile(investigation_mean_boot, 0.025, type = 7, names = FALSE),
    quantile(investigation_max_boot, 0.025, type = 7, names = FALSE)
  ),
  percentile_97.5 = c(
    quantile(investigation_mean_boot, 0.975, type = 7, names = FALSE),
    quantile(investigation_max_boot, 0.975, type = 7, names = FALSE)
  )
)

stopifnot(identical(length(investigation_mean_boot), 3125L))
stopifnot(identical(length(investigation_max_boot), 3125L))
stopifnot(abs(mean(investigation_mean_boot) - 4) <= 1e-10 + 1e-8 * 4)
stopifnot(min(investigation_mean_boot) < 4, max(investigation_mean_boot) > 4)
stopifnot(all(investigation_max_boot <= 0.84))
stopifnot(all(investigation_summary$percentile_97.5 <=
  c(max(investigation_mean_x), 0.84)))
investigation_summary
\`\`\`

**Interpretation.** The 3125-counts, conditional centers, conditional SEs, and type-7 endpoints in the table are exact calculations for the two fixed empirical distributions. For the mean, the exact center 4 also follows from R-THM-bootstrap-mean-moments. The maximum's conditional center is below 0.84 because many resamples omit the observed largest value.

Using the mean distribution for population uncertainty would additionally require the five rows to be iid observations from a stable population, the population mean to be the declared target, the rows to represent that population, and the mean's bootstrap approximation to be adequate at this sample size. Enumeration cannot establish those premises.

For the endpoint model, Uniform$(0,\\theta)$ with $\\theta>0$ spreads probability evenly over $(0,\\theta)$. Every subinterval $(a,b)$ inside that range has probability $(b-a)/\\theta$, so equal-length subintervals have equal chances. Equivalently, the density is $1/\\theta$ inside $(0,\\theta)$ and zero outside. A point has length zero, which gives $\\Pr(X=0)=\\Pr(X=\\theta)=0$; the continuous law has no endpoint atom.

**Failure/boundary.** If the endpoint data were iid Uniform$(0,\\theta)$, then the observed maximum $M$ is less than $\\theta$ with probability 1. Every bootstrap maximum uses observed values and is at most $M$. Therefore both endpoints of the direct percentile interval are below $\\theta$ with probability 1, giving zero coverage. Larger $B$ only estimates the same defective conditional distribution more precisely. Exact enumeration exposes the failure rather than repairing it.

Return to the [chapter](#/item/book-statistics-with-r?chapter=bootstrap-intervals).

## R-10-E01

The three rows carry masses $1/3,1/3,1/3$. Because the value 4 occurs in two rows, the empirical distribution may be summarized as

$$
\\Pr_*(X^*=4)=\\frac23,
\\qquad
\\Pr_*(X^*=10)=\\frac13.
$$

Define $X_1^*,X_2^*,X_3^*$ as conditionally independent draws from this distribution. Then $\\Pr_*(X_1^*=4)=2/3$. Independence gives

$$
\\Pr_*(X_1^*=X_2^*=X_3^*=10)
=\\left(\\frac13\\right)^3
=\\frac1{27}.
$$

A tempting error is to give 4 mass $1/2$ because there are two distinct numeric values. The empirical law places equal mass on rows, so duplicates accumulate mass.

\`\`\`r
duplicate_x <- c(4, 4, 10)
prob_first_is_4 <- mean(duplicate_x == 4)
prob_all_three_are_10 <- mean(duplicate_x == 10)^3
stopifnot(abs(prob_first_is_4 - 2 / 3) <= 1e-10 + 1e-8 * abs(2 / 3))
stopifnot(abs(prob_all_three_are_10 - 1 / 27) <=
  1e-10 + 1e-8 * abs(1 / 27))
c(first_is_4 = prob_first_is_4, all_three_are_10 = prob_all_three_are_10)
\`\`\`

## R-10-E02

The smallest sum is 3 and the largest is 9. The sums $3,4,5,6,7,8,9$ correspond to means

$$
1,\\;4/3,\\;5/3,\\;2,\\;7/3,\\;8/3,\\;3.
$$

Their counts are $1,3,6,7,6,3,1$. They sum to 27, the number of ordered triples. The counts are symmetric around sum 6 because replacing every draw $x$ by $4-x$ pairs a triple of sum $s$ with one of sum $12-s$. Hence the paired means average to 2. Direct weighted calculation also gives

$$
\\frac{1(1)+3(4/3)+6(5/3)+7(2)+6(7/3)+3(8/3)+1(3)}{27}=2.
$$

\`\`\`r
toy_grid_solution <- expand.grid(
  draw_1 = seq_along(toy_x),
  draw_2 = seq_along(toy_x),
  draw_3 = seq_along(toy_x),
  KEEP.OUT.ATTRS = FALSE
)
toy_means_solution <- rowMeans(matrix(
  toy_x[as.matrix(toy_grid_solution)],
  nrow = 27L,
  ncol = 3L
))
toy_counts_solution <- table(toy_means_solution)

stopifnot(identical(as.integer(toy_counts_solution), c(1L, 3L, 6L, 7L, 6L, 3L, 1L)))
stopifnot(identical(sum(toy_counts_solution), 27L))
stopifnot(abs(mean(toy_means_solution) - 2) <= 1e-10 + 1e-8 * 2)
data.frame(
  mean = as.numeric(names(toy_counts_solution)),
  count = as.integer(toy_counts_solution)
)
\`\`\`

## R-10-E03

For one empirical draw,

$$
\\operatorname E_*(X_j^*)=\\frac1n\\sum_{i=1}^n x_i=\\bar x
$$

and

$$
\\operatorname{Var}_*(X_j^*)
=\\frac1n\\sum_{i=1}^n(x_i-\\bar x)^2
=\\frac{n-1}{n}s^2.
$$

Linearity of expectation does not require independence, so

$$
\\operatorname E_*(\\bar X^*)
=n^{-1}\\sum_j\\operatorname E_*(X_j^*)
=\\bar x.
$$

Conditional independence is used when variances are added without covariance terms:

$$
\\operatorname{Var}_*(\\bar X^*)
=\\frac1{n^2}\\sum_{j=1}^n\\operatorname{Var}_*(X_j^*)
=\\frac{n-1}{n^2}s^2.
$$

The condition $n\\ge2$ is needed to define $s^2$ with denominator $n-1$. If $n=1$, the expectation identity still holds: the only bootstrap draw equals $x_1$, so every bootstrap mean is $x_1$. Its variance is zero, but writing the stated formula through $s^2$ would be invalid because the sample variance is undefined.

## R-10-E04

The mean is $\\bar x=6$. The centered values are $(-4,-2,2,4)$, whose squared sum is 40. Therefore

$$
s^2=40/3,
\\qquad
\\operatorname{SE}_*(\\bar X^*)
=\\frac{\\sqrt{3}}{4}\\sqrt{40/3}
=\\sqrt{2.5}
\\approx1.5811.
$$

The familiar plug-in value is

$$
\\frac{s}{\\sqrt4}=\\sqrt{10/3}\\approx1.8257.
$$

Their ratio is $\\sqrt{3/4}$. The smaller bootstrap value follows exactly because the empirical distribution's variance uses denominator $n$, whereas \`var\` uses $n-1$. Neither calculation alone proves a population interval's validity.

\`\`\`r
n_se <- length(se_x)
mean_se <- mean(se_x)
sample_variance_se <- var(se_x)
exact_bootstrap_se <- sqrt((n_se - 1) * sample_variance_se / n_se^2)
plugin_se <- sqrt(sample_variance_se / n_se)

stopifnot(mean_se == 6)
stopifnot(abs(sample_variance_se - 40 / 3) <= 1e-10 + 1e-8 * abs(40 / 3))
stopifnot(abs(exact_bootstrap_se - sqrt(2.5)) <=
  1e-10 + 1e-8 * sqrt(2.5))
stopifnot(abs(plugin_se - sqrt(10 / 3)) <=
  1e-10 + 1e-8 * sqrt(10 / 3))
stopifnot(abs(exact_bootstrap_se / plugin_se - sqrt(3 / 4)) <=
  1e-10 + 1e-8 * sqrt(3 / 4))
c(mean = mean_se, sample_variance = sample_variance_se,
  exact_bootstrap_SE = exact_bootstrap_se, plugin_SE = plugin_se)
\`\`\`

## R-10-E05

For the lower probability $p=0.10$,

$$h=1+(9-1)(0.10)=1.8.$$

This lies 80% of the way from the first ordered value 1 to the second value 2, giving $1.8$. For $p=0.90$, $h=8.2$, giving $0.8(8)+0.2(9)=8.2$. The type-7 80% percentile interval is $[1.8,8.2]$.

\`\`\`r
ordered_replicates <- 1:9
interval_80 <- quantile(
  ordered_replicates,
  probs = c(0.10, 0.90),
  type = 7,
  names = FALSE
)
stopifnot(all(abs(interval_80 - c(1.8, 8.2)) <=
  1e-10 + 1e-8 * abs(c(1.8, 8.2))))
interval_80
\`\`\`

The bootstrap replicates do not determine a unique finite-list quantile until an interpolation convention is chosen. Another type can select or weight different order statistics, so omitting it can prevent exact reproduction and can change conclusions near a decision boundary.

## R-10-E06

The empirical distribution-function value is

$$
\\hat q=16/400=0.04.
$$

For the fixed, independently supplied endpoint in the question, the 400 threshold indicators are independent Bernoulli draws. Thus, the plug-in estimated Monte Carlo standard error is

$$
\\sqrt{\\frac{0.04(0.96)}{400}}
\\approx0.009798.
$$

\`\`\`r
B_endpoint <- 400L
endpoint_count <- 16L
q_hat_endpoint <- endpoint_count / B_endpoint
mcse_endpoint_cdf <- sqrt(
  q_hat_endpoint * (1 - q_hat_endpoint) / B_endpoint
)
stopifnot(abs(q_hat_endpoint - 0.04) <= 1e-10 + 1e-8 * 0.04)
stopifnot(abs(mcse_endpoint_cdf - 0.00979795897113271) <=
  1e-10 + 1e-8 * 0.00979795897113271)
c(empirical_CDF = q_hat_endpoint, estimated_MCSE = mcse_endpoint_cdf)
\`\`\`

This SE describes repeated computer draws at a fixed threshold, conditional on the observed data. It does not apply directly when the threshold is a quantile computed from the same 400 replicates: those threshold indicators are then dependent. The bootstrap SE describes spread of the statistic across the empirical resampling law. The population standard error describes variation across new population samples under a specified mechanism. More bootstrap replicates shrink the first quantity, but they do not add population information or necessarily improve the other two.

## R-10-E07

For the all-zero Bernoulli sample, the empirical law has mass 1 at zero. Every bootstrap proportion is exactly zero, so the conditional bootstrap SE is zero and every direct percentile endpoint is zero. If the population success probability is $p=0.02$, however,

$$
\\Pr(\\text{20 zeros})=(1-0.02)^{20}\\approx0.667608.
$$

The sample can therefore miss a real rare class quite often.

For the uniform endpoint problem, let $M=\\max_iX_i$. Every resampled value belongs to the observed set, so $M^*\\le M$ for every possible bootstrap sample. Every quantile of $M^*$ is consequently at most $M$. Under a continuous Uniform$(0,\\theta)$ distribution, $\\Pr(M<\\theta)=1$. Thus a direct percentile interval made from $M^*$ lies below the true endpoint with probability 1 and has coverage zero.

\`\`\`r
probability_20_zeros <- (1 - 0.02)^20
all_zero_replicates <- rep(0, 100L)
endpoint_demo <- investigation_endpoint_x
endpoint_replicates <- investigation_max_boot

stopifnot(abs(probability_20_zeros - 0.6676079717550942) <=
  1e-10 + 1e-8 * abs(0.6676079717550942))
stopifnot(sd(all_zero_replicates) == 0)
stopifnot(all(endpoint_replicates <= max(endpoint_demo)))
c(probability_20_zeros = probability_20_zeros,
  largest_observed_endpoint = max(endpoint_demo))
\`\`\`

Both conditional bootstrap distributions are computed correctly. Both fail because observed support omits precisely what matters: a rare success in the first case and values above the sample maximum in the second. Increasing the number of resamples cannot create that information.

## R-10-E08

The independent unit is at most the patient, not the patient-day row. Four scores from the same patient share physiology, treatment, reporting habits, and circumstances. Resampling 35 remaining rows acts as though there were 35 independent units and can understate uncertainty.

The missingness is also informative: the diaries say the missing values tend to occur on high-pain days. Deleting them leaves an observed-day average for each affected volunteer, omitting that volunteer's missing days; volunteers with no missing days are unaffected. Given the reported high-pain missingness, the observed-day averages likely understate averages over all recorded and unrecorded study days, although the missing values are unknown. A bootstrap of complete rows repeats this omission mechanism; it does not reconstruct the five pain scores.

Selection creates a separate boundary. The ten people volunteered, and no probability sampling mechanism from all clinic patients is given. Even perfect measurements of these volunteers would not justify design-based generalization to all clinic patients. Resampling volunteers cannot repair that gap.

A defensible narrower descriptive target is: “the mean of the 35 observed daily scores among these ten volunteers on days when a score was recorded.” Its value can be described, with a ledger stating five missing scores and the unequal number of observed days per patient. If the scientific target instead concerns the mean of patient-level four-day averages, even the descriptive quantity is incomplete because five outcomes are unknown; a sensitivity analysis over plausible missing values would be more honest than silently filling them.

No population confidence interval for all clinic patients is justified from the stated information. A future study could probability-sample patients, predefine the patient as the independent unit, improve or audit outcome collection, and use a method that respects within-patient dependence. Choosing a patient-level resampling scheme would address only one of these problems; it would not resolve informative missingness or volunteer selection.

Return to [exercise R-10-E08 in the chapter](#/item/book-statistics-with-r?chapter=bootstrap-intervals).

The solutions, code, and literal fixtures are original Math Atlas material under CC BY-SA 4.0.

## R-10-E09

Differences are two, one and four points, with mean $7/3$. Their centred sum of squares is $14/3$, hence sample variance $7/3$ squared points. The exact conditional bootstrap mean is $7/3$ and its variance is $(3-1)(7/3)/3^2=14/27$. Paired-row resampling preserves the empirical joint relationship between the two measurements. Independently resampling columns breaks pairing and creates a different joint empirical law. These conditional facts do not establish that the original pairs were independently sampled from a target population.

## R-10-E10

The original interval is $[1.4,4.6]$. Transformed replicates in sorted order are 0,2,4,6,8, with type-7 endpoints 0.8 and 7.2. Equivalently use $[10-2(4.6),10-2(1.4)]$, reversing the original endpoint order. This is exact arithmetic for the five supplied replicates under that quantile convention. It does not establish the population coverage of a bootstrap interval or show that extra replicates repair an unsuitable resampling model.

`;export{e as default};