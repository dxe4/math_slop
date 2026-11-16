
# Bootstrap Standard Errors and Intervals

A sample mean is a single number, but another random sample would usually give another mean. In Chapter 8, a sampling distribution described that variation under a specified population and sampling mechanism. The difficulty is plain: the population distribution that generates the sampling distribution is usually unknown.

The bootstrap makes a bold substitution. It treats the empirical distribution of the observed data as a stand-in for the population distribution, draws new samples from that stand-in, and watches the statistic vary. The computation is easy. Deciding whether the stand-in preserves the uncertainty that matters is the serious part of the chapter.

Here is the confidence intuition we need before Chapter 11 gives the formal definition. Imagine repeating the entire study many times and applying the same interval rule each time. A useful 95% rule should include the fixed population target in about 95% of those repetitions, under its stated conditions. Once one interval has been computed, the target and endpoints are fixed numbers; “95%” does not mean a 95% frequentist probability that this particular interval contains the target. In this chapter, any claim that a bootstrap interval has near-nominal performance is an approximation claim, never an exact finite-sample promise.

## The observed distribution as a working model

Suppose the observed values are $x_1,\ldots,x_n$. The empirical distribution introduced in Chapter 5 places probability $1/n$ on each observed row. Repeated values retain repeated mass. If the data are $(1,1,4)$, drawing a row from the empirical distribution gives 1 with probability $2/3$ and 4 with probability $1/3$.

**Definition R-DEF-empirical-bootstrap (empirical bootstrap).** Conditional on the observed data $x=(x_1,\ldots,x_n)$, draw $X_1^*,\ldots,X_n^*$ independently from the empirical distribution, using $n$ draws with replacement. The ordered vector $(X_1^*,\ldots,X_n^*)$ is a bootstrap sample. For a statistic $t$, the bootstrap replicate is

$$
T^*=t(X_1^*,\ldots,X_n^*).
$$

The star marks randomness created by resampling. “Conditional on the observed data” means that the $x_i$ are held fixed while the bootstrap draws vary. It does not say that the original observations were fixed before the study, nor that the empirical distribution is the true population.

This chapter uses three original literal synthetic fixtures. `R10-F01` is the abstract vector $(1,2,3)$, with one number per independent row and no physical unit. `R10-F02` contains service times in minutes for ten independently sampled service encounters. `R10-F03` contains five unitless endpoint measurements. All are Math Atlas version 1 fixtures, created for this chapter under CC BY-SA 4.0. Their row order is the key; no IDs repeat, no values are missing, no missing-value code is used, and no rows are excluded. They illustrate calculations and provide no evidence about a real service system or population.

```r
# Original literal synthetic fixtures, Math Atlas, version 1.
toy_x <- c(1, 2, 3)
service_minutes <- c(42, 44, 47, 49, 50, 53, 54, 58, 61, 67)
endpoint_x <- c(0.12, 0.35, 0.51, 0.73, 0.84)

stopifnot(identical(length(toy_x), 3L))
stopifnot(identical(length(service_minutes), 10L))
stopifnot(identical(length(endpoint_x), 5L))
stopifnot(!anyNA(toy_x), !anyNA(service_minutes), !anyNA(endpoint_x))
stopifnot(all(is.finite(c(toy_x, service_minutes, endpoint_x))))
stopifnot(all(service_minutes > 0), all(endpoint_x > 0 & endpoint_x < 1))
```

In R, `sample(x, size = n, replace = TRUE)` draws `n` entries from `x` with replacement. Replacement matters: after a row is selected, it remains eligible, so a bootstrap sample may repeat one row and omit another. Resampling without replacement would merely permute all $n$ values and would leave any order-insensitive statistic, including the mean, unchanged.

## Twenty-seven samples reveal the whole conditional law

**Example 10.1 (Worked calculation).**

From $(1,2,3)$, each of the three positions in an ordered bootstrap sample has three possible values. There are therefore $3^3=27$ equally likely ordered samples. `(1, 2, 1)` and `(2, 1, 1)` are different ordered draws even though their means agree.

The base-R function `expand.grid` constructs every combination of its inputs. Each row below is one ordered triple of indices. `as.matrix` turns the three index columns into a matrix, and `rowMeans` computes one mean per row.

```r
toy_indices <- expand.grid(
  draw_1 = seq_along(toy_x),
  draw_2 = seq_along(toy_x),
  draw_3 = seq_along(toy_x),
  KEEP.OUT.ATTRS = FALSE
)
toy_samples <- matrix(
  toy_x[as.matrix(toy_indices)],
  nrow = nrow(toy_indices),
  ncol = length(toy_x)
)
toy_boot_means <- rowMeans(toy_samples)
toy_mean_counts <- table(toy_boot_means)
toy_exact_center <- mean(toy_boot_means)
toy_exact_variance <- mean((toy_boot_means - toy_exact_center)^2)

stopifnot(identical(nrow(toy_indices), 27L))
stopifnot(identical(as.integer(toy_mean_counts), c(1L, 3L, 6L, 7L, 6L, 3L, 1L)))
stopifnot(abs(toy_exact_center - 2) <= 1e-10 + 1e-8 * abs(2))
stopifnot(abs(toy_exact_variance - 2 / 9) <= 1e-10 + 1e-8 * abs(2 / 9))
data.frame(
  bootstrap_mean = as.numeric(names(toy_mean_counts)),
  count_out_of_27 = as.integer(toy_mean_counts)
)
```

The distribution is symmetric around 2. Its center is exactly the observed mean, 2, and its conditional variance is exactly $2/9$. These are facts about resampling from this observed vector. They are not estimates obtained from 27 random computer trials: the enumeration includes the whole conditional bootstrap law.

## An exact theorem about the bootstrap mean

Recall that R's `var(x)` is the sample variance

$$
s^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar x)^2,
$$

which requires $n\ge2$. The variance of one draw from the empirical distribution instead uses probabilities $1/n$, so its denominator is $n$.

**Theorem R-THM-bootstrap-mean-moments (conditional moments of the bootstrap mean).** Let $x_1,\ldots,x_n$ be fixed finite real numbers with $n\ge2$. Conditional on these data, let $X_1^*,\ldots,X_n^*$ be independent draws from their empirical distribution, and let $\bar X^*=n^{-1}\sum_{j=1}^n X_j^*$. Then

$$
\operatorname E_*(\bar X^*)=\bar x
\quad\text{and}\quad
\operatorname{Var}_*(\bar X^*)=\frac{n-1}{n^2}s^2.
$$

The subscript $*$ emphasizes that expectation and variance are conditional over bootstrap resampling, with the observed data fixed. Status: proved here.

**Proof.** A single empirical draw $X_j^*$ equals each $x_i$ with probability $1/n$. Therefore

$$
\operatorname E_*(X_j^*)=\frac1n\sum_{i=1}^n x_i=\bar x.
$$

Linearity of expectation gives

$$
\operatorname E_*(\bar X^*)
=\frac1n\sum_{j=1}^n\operatorname E_*(X_j^*)
=\bar x.
$$

For one empirical draw,

$$
\operatorname{Var}_*(X_j^*)
=\frac1n\sum_{i=1}^n(x_i-\bar x)^2
=\frac{n-1}{n}s^2.
$$

The bootstrap draws are independent by construction. Hence the variance of their sum is the sum of their variances:

$$
\operatorname{Var}_*(\bar X^*)
=\frac{1}{n^2}\sum_{j=1}^n\operatorname{Var}_*(X_j^*)
=\frac{1}{n^2}\,n\,\frac{n-1}{n}s^2
=\frac{n-1}{n^2}s^2.
$$

Every equality is conditional on the observed vector. ∎

For $(1,2,3)$, $s^2=1$ and $n=3$, so the theorem gives $2/9$, agreeing with enumeration. The exact conditional bootstrap standard deviation of the mean is $s\sqrt{n-1}/n$. It is slightly smaller than the familiar plug-in standard error $s/\sqrt n$ by the factor $\sqrt{(n-1)/n}$. That finite-$n$ identity should not be confused with a coverage guarantee for an interval about a population mean.

**Definition R-DEF-bootstrap-standard-error (bootstrap standard error).** For an observed sample and statistic $T$, the ideal bootstrap standard error is the conditional standard deviation

$$
\operatorname{SE}_*(T)=\sqrt{\operatorname{Var}_*(T^*)}.
$$

When the full bootstrap distribution is too large to enumerate, the sample standard deviation of $B$ independently generated replicates $T_1^*,\ldots,T_B^*$ estimates this conditional quantity. It has Monte Carlo error because a second run with a different random stream gives a slightly different value. That computational error is distinct from the sampling uncertainty the bootstrap is trying to describe.

## Worked example: a standard error and a percentile interval

**Example 10.2 (Worked calculation).**

For the ten service times, complete enumeration would involve $10^{10}$ ordered resamples. We instead use $B=20{,}000$ Monte Carlo replicates. `replicate(B, expression)` evaluates the expression $B$ times and collects its numeric results. Before running, we declare the check: the simulated standard deviation should lie within 0.08 minute of the theorem's exact conditional value. Under the selected stream this is a reproducibility check, not evidence that all seeds must pass or that the population approximation is valid.

Every stochastic block resets R's generator explicitly. `RNGkind` selects the generator, normal generator, and discrete sampler; `set.seed` makes this block reproducible. This is stochastic block 1, so its required seed is 61001.

```r
RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(61001)

B_service <- 20000L
n_service <- length(service_minutes)
service_boot_means <- replicate(
  B_service,
  mean(sample(service_minutes, size = n_service, replace = TRUE))
)
service_boot_se <- sd(service_boot_means)
service_exact_conditional_se <- sqrt(
  (n_service - 1) * var(service_minutes) / n_service^2
)

stopifnot(identical(length(service_boot_means), B_service))
stopifnot(all(is.finite(service_boot_means)))
stopifnot(abs(mean(service_boot_means) - mean(service_minutes)) < 0.08)
stopifnot(abs(service_boot_se - service_exact_conditional_se) < 0.08)
stopifnot(abs(service_boot_se - 2.3361005738344303) <=
  1e-10 + 1e-8 * abs(2.3361005738344303))
stopifnot(abs(service_exact_conditional_se - sqrt(5.465)) <=
  1e-10 + 1e-8 * sqrt(5.465))
c(
  observed_mean_minutes = mean(service_minutes),
  Monte_Carlo_bootstrap_SE_minutes = service_boot_se,
  exact_conditional_SE_minutes = service_exact_conditional_se
)
```

The observed mean is 52.5 minutes. The resampled standard deviation describes how bootstrap means vary around that observed mean, conditional on the ten rows.

**Definition R-DEF-percentile-interval (bootstrap percentile interval).** Given bootstrap replicates of a statistic, an equal-tail $(1-\alpha)$ percentile interval takes their $\alpha/2$ and $1-\alpha/2$ sample quantiles as its endpoints. In this chapter, finite-replicate quantiles always use R's `type = 7` rule explicitly.

For sorted values $z_{(1)}\le\cdots\le z_{(B)}$, type 7 places $p$ at fractional index $h=1+(B-1)p$. If $j=\lfloor h\rfloor$ and $g=h-j$, the returned quantile is $(1-g)z_{(j)}+gz_{(j+1)}$, with the natural endpoint convention. Thus the rule may interpolate between two adjacent replicates. Different quantile rules can yield different endpoints, especially for small $B$ or discrete statistics, so a report must declare the rule.

```r
service_percentile_95 <- quantile(
  service_boot_means,
  probs = c(0.025, 0.975),
  type = 7,
  names = FALSE
)
stopifnot(length(service_percentile_95) == 2L)
stopifnot(service_percentile_95[1L] <= service_percentile_95[2L])
service_percentile_95
```

The first batch supplies the endpoints. A second independent batch now treats those printed values as fixed thresholds and estimates the conditional distribution function at them. Because this next block generates random draws, it starts by declaring stochastic block 2's generator and seed.

```r
RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(61002)
B_cdf_check <- 20000L
service_boot_means_check <- replicate(
  B_cdf_check,
  mean(sample(service_minutes, size = n_service, replace = TRUE))
)
lower_cdf_hat <- mean(service_boot_means_check <= service_percentile_95[1L])
upper_cdf_hat <- mean(service_boot_means_check <= service_percentile_95[2L])
endpoint_cdf_mcse <- sqrt(
  c(lower_cdf_hat, upper_cdf_hat) *
    (1 - c(lower_cdf_hat, upper_cdf_hat)) / B_cdf_check
)

stopifnot(identical(length(service_boot_means_check), B_cdf_check))
stopifnot(lower_cdf_hat < 0.05, upper_cdf_hat > 0.95)
stopifnot(all(endpoint_cdf_mcse >= 0), all(is.finite(endpoint_cdf_mcse)))
stopifnot(all(abs(service_percentile_95 - c(48.1, 57.2)) <=
  1e-10 + 1e-8 * abs(c(48.1, 57.2))))
stopifnot(all(abs(c(lower_cdf_hat, upper_cdf_hat) - c(0.026, 0.976)) <=
  1e-10 + 1e-8 * abs(c(0.026, 0.976))))
data.frame(
  endpoint = c("lower", "upper"),
  minutes = service_percentile_95,
  empirical_cdf_at_endpoint = c(lower_cdf_hat, upper_cdf_hat),
  estimated_cdf_Monte_Carlo_SE = endpoint_cdf_mcse
)
```

The second, independent batch evaluates the first batch's printed endpoints as fixed thresholds. Its last column uses $\sqrt{\hat q(1-\hat q)/B}$, the estimated Monte Carlo standard error of a proportion of $B$ independent indicators. It measures simulation noise in the empirical distribution function at each printed endpoint. It is not an endpoint standard error in minutes; converting vertical distribution-function error to horizontal quantile error would require information about the local shape of the bootstrap distribution. Reporting both batch sizes, both seeds, the quantile type, and this resolution makes the computational approximation visible.

The provisional interpretation is deliberately bounded: if the ten encounters were iid observations from a stable population, if they represent the target encounters, and if the sample mean's bootstrap approximation is adequate here, then this interval is an approximate uncertainty range for the population mean service time. It is not evidence about a real system because the values are synthetic. It also does not account for customer clustering, time trends, selection into the records, or missing durations.

## Centering, bias, and what percentile endpoints say

A sampling distribution is most useful when it describes the error $T-\theta$, where $\theta$ is the population target. The bootstrap can observe neither that error nor its distribution because $\theta$ is unknown. It substitutes $T^*-T$, where $T$ is the statistic computed from the observed sample. This centering is part of the analogy:

$$
T-\theta \quad\longleftrightarrow\quad T^*-T.
$$

For the sample mean, the theorem gives $\operatorname E_*(\bar X^*-\bar x)=0$ exactly. That clean result is special to the mean. For a nonlinear statistic, $\operatorname E_*(T^*)$ need not equal $T$; their conditional difference is often called estimated bootstrap bias. Even a small estimated bias does not certify an interval, because shape, tails, support, and the original sampling mechanism still matter.

The percentile interval uses quantiles of the raw $T^*$ values. It is appealing because it preserves the scale and can reflect asymmetry in the resampled statistic. Its endpoints should be read as positions in the conditional empirical distribution. To interpret them as an interval for $\theta$, one needs the additional approximation that the location and shape of bootstrap deviations stand in appropriately for population sampling deviations. The all-zero and endpoint examples below show two ways that analogy can collapse even when the conditional calculation is flawless.

A bootstrap SE and a percentile interval answer related but different computational questions. The SE compresses conditional spread to one number. The interval uses two tail positions and therefore depends more visibly on skewness, discreteness, and quantile convention. Reporting one does not determine the other unless a further distributional shape is assumed.

## What the computation approximates—and what it does not

**Definition R-DEF-bootstrap-approximation (bootstrap approximation).** A bootstrap approximation uses the conditional distribution of a centered or otherwise transformed bootstrap statistic, computed from the empirical distribution, as an approximation to the sampling distribution of the corresponding statistic under repeated draws from the population mechanism.

There are two substitutions in a typical Monte Carlo bootstrap analysis:

1. The empirical distribution substitutes for the unknown population distribution. This is a statistical approximation whose quality depends on the data-generating mechanism, sample size, and statistic.
2. A finite set of $B$ random resamples substitutes for the complete conditional bootstrap distribution. This is a computational approximation that can be reduced by increasing $B$ without collecting new population data.

Exact conditional facts survive the first substitution only as statements about the empirical world. For example, the theorem proves the center and variance of the bootstrap mean exactly for every fixed finite observed vector. It does not prove that the empirical world's distribution of errors matches the population world's distribution of errors.

**Claim R-CLAIM-bootstrap-regularity (qualified usefulness of the empirical bootstrap).** Status: large-sample approximation, not a theorem proved here. When observations are iid and representative of a stable population, the target is identified by that population law, and the statistic changes regularly rather than being controlled by an unsupported boundary or discontinuity, the conditional bootstrap distribution may approximate the statistic's repeated-sampling distribution as sample size grows. The required conditions and quality depend on the statistic and population. There is no universal bootstrap validity theorem in this chapter, no sample-size threshold that guarantees validity, and no finite-$n$ coverage guarantee for the percentile interval.

For a mean, finite population variance and an iid mechanism are central. Heavy tails, a sample that misses rare but influential outcomes, or dependence can make the empirical law a poor proxy. For medians and other statistics, different technical conditions apply. A successful R run establishes only that the declared algorithm executed.

## Adverse case: a rare success that never appeared

Suppose $X_i$ is Bernoulli with success probability $p$, and an iid sample of 20 contains only zeros. The empirical distribution puts all its mass at zero. Every empirical bootstrap sample is consequently all zero, every bootstrap proportion is zero, the bootstrap SE is zero, and the percentile interval is $[0,0]$.

Yet $p=0.02$ is compatible with this event: under independent sampling, the probability of 20 zeros is $(1-0.02)^{20}$, about 0.668. The empirical bootstrap cannot invent an outcome absent from the data. Its conditional answer is exact and its population message is poor.

```r
all_zero_bernoulli <- rep(0L, 20L)
all_zero_bootstrap_samples <- matrix(
  all_zero_bernoulli[1L],
  nrow = 100L,
  ncol = length(all_zero_bernoulli)
)
all_zero_bootstrap_means <- rowMeans(all_zero_bootstrap_samples)
probability_all_zero_if_p_002 <- (1 - 0.02)^20

stopifnot(identical(unique(all_zero_bernoulli), 0L))
stopifnot(identical(dim(all_zero_bootstrap_samples), c(100L, 20L)))
stopifnot(identical(unique(all_zero_bootstrap_means), 0))
stopifnot(mean(all_zero_bootstrap_means) == 0)
stopifnot(sd(all_zero_bootstrap_means) == 0)
stopifnot(identical(
  as.numeric(quantile(all_zero_bootstrap_means,
    c(0.025, 0.975), type = 7)),
  c(0, 0)
))
stopifnot(abs(probability_all_zero_if_p_002 - 0.6676079717550942) <=
  1e-10 + 1e-8 * abs(0.6676079717550942))
probability_all_zero_if_p_002
```

The zero Monte Carlo variation here is real: every possible resample is identical. It should not be called zero sampling uncertainty about $p$.

## Adverse case: the unseen endpoint

**Example 10.3 (Worked calculation).**

For this example, Uniform$(0,\theta)$ with $\theta>0$ means that probability is spread evenly across the interval from 0 to $\theta$. If $0\le a<b\le\theta$, then

$$
\Pr(a<X<b)=\frac{b-a}{\theta}.
$$

Thus equal-length subintervals have equal probabilities: probability is interval length divided by the total length $\theta$. Equivalently, the probability density is the constant $1/\theta$ inside $(0,\theta)$ and zero outside it. A single endpoint has length zero, so $\Pr(X=0)=\Pr(X=\theta)=0$; this is what it means here to say that the continuous distribution has no atom at either endpoint. No calculus is needed for the argument below.

Let $X_1,\ldots,X_n$ be iid Uniform$(0,\theta)$, where the unknown upper endpoint $\theta>0$ is the target, and let $M=\max_i X_i$. Every empirical bootstrap draw must equal one of the observed values, so every bootstrap maximum satisfies $M^*\le M$. Therefore both endpoints of a direct percentile interval made from bootstrap maxima are at most $M$.

Under the continuous uniform model, $M<\theta$ with probability 1 for every finite $n$: hitting the exact endpoint has probability zero. The direct percentile interval for the endpoint therefore has coverage zero under this model. This is a population-level proof of failure for this particular procedure, not a complaint about too few Monte Carlo replicates.

For `R10-F03`, all $5^5=3125$ possible resamples make the boundary visible. `apply(..., 1L, max)` applies `max` to each row of the resample matrix.

```r
endpoint_indices <- expand.grid(
  draw_1 = seq_along(endpoint_x),
  draw_2 = seq_along(endpoint_x),
  draw_3 = seq_along(endpoint_x),
  draw_4 = seq_along(endpoint_x),
  draw_5 = seq_along(endpoint_x),
  KEEP.OUT.ATTRS = FALSE
)
endpoint_samples <- matrix(
  endpoint_x[as.matrix(endpoint_indices)],
  nrow = nrow(endpoint_indices),
  ncol = length(endpoint_x)
)
endpoint_boot_max <- apply(endpoint_samples, 1L, max)
endpoint_percentile_95 <- quantile(
  endpoint_boot_max,
  c(0.025, 0.975),
  type = 7,
  names = FALSE
)

stopifnot(identical(nrow(endpoint_indices), 3125L))
stopifnot(all(endpoint_boot_max <= max(endpoint_x)))
stopifnot(all(endpoint_percentile_95 <= max(endpoint_x)))
c(observed_maximum = max(endpoint_x), endpoint_percentile_95)
```

Specialized endpoint methods can use the known model structure. That theory lies beyond this chapter. The lesson is already decisive: resampling mechanically from observed rows does not guarantee a defensible interval.

## Choose the resampling unit before writing `sample`

The ordinary row bootstrap encodes iid rows. Its code is a model statement.

- **Independent units.** If four measurements come from each person, the 40 rows are dependent within ten people. Resampling 40 rows pretends to have 40 independent units. A cluster-level procedure might resample people, but its justification and target must be stated separately.
- **Identically distributed observations.** A time trend, intervention change, or mixture of unlike sources can violate a single stable row distribution. Shuffling or resampling does not erase the change.
- **Sampling mechanism.** A simple random sample without replacement from a small finite population has dependence and a finite-population correction. The iid empirical bootstrap is not automatically the matching design.
- **Missing outcomes.** Silently dropping `NA` values changes the analyzed population to observed complete rows. A complete-case bootstrap reproduces that selected distribution; it does not recover unseen outcomes or justify generalization to all eligible units.
- **Representativeness.** Resampling a convenience sample reproduces its composition. It cannot turn volunteers into a probability sample or identify a causal effect from an observational association.

When the mechanism does not support the intended inference, declining to calculate a bootstrap interval is a correct statistical decision.

## R-10-I01

### Guided investigation: a regular mean and a boundary maximum

**Question.** How do exact empirical bootstrap distributions differ for the mean of $(2,3,4,5,6)$ and the maximum of $(0.12,0.35,0.51,0.73,0.84)$?

**Prediction.** Before computing, predict the center of the bootstrap mean, whether its replicates can fall on both sides of the observed mean, and whether a bootstrap maximum can exceed 0.84.

**Controls.** Treat the five positions as independent draws only inside each conditional bootstrap experiment. Enumerate all $5^5$ ordered samples, use the same index matrix for both statistics, declare type 7 for the 95% endpoints, and make no real-population claim from these synthetic values.

**Code and table.** Write a function that accepts a length-five vector and a statistic function, returns all 3125 replicates, and then produce a table with observed statistic, exact conditional bootstrap mean, exact conditional bootstrap SE, and percentile endpoints. In R, a function is reusable code with named inputs; `function(x, statistic)` creates one, and `vapply` can demand one numeric answer from each row or column. Assert the number of samples and the maximum boundary.

**Interpretation.** Explain which results are exact conditional identities or enumerations. Then state what additional iid, target, and representativeness assumptions would be needed even to consider population uncertainty.

**Failure/boundary.** Prove why the direct maximum percentile interval cannot contain a Uniform$(0,\theta)$ endpoint. Explain why increasing $B$ would not repair this structural failure.

The complete reference response appears with R-10-I01 in the [solutions](solutions-bootstrap-intervals.md).

## Exercises

Each exercise asks what the resampling law means, as well as what it computes. Complete solutions are available in the [chapter solutions](solutions-bootstrap-intervals.md).

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

```r
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
```


```r
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
```

</details>

## R-10-E01

**Exercise 10.1**

For observed rows $(4,4,10)$, write the empirical distribution, define three ordered bootstrap draws, and calculate the conditional probabilities that the first draw equals 4 and that all three draws equal 10.

<details>
<summary>Hint 1</summary>

**Hint.** Repeated rows carry repeated empirical mass; independence multiplies probabilities.

</details>
<details>
<summary>Hint 2</summary>

The two recorded copies of four give it empirical probability two thirds.

</details>
<details>
<summary>Solution</summary>

The three rows carry masses $1/3,1/3,1/3$. Because the value 4 occurs in two rows, the empirical distribution may be summarized as

$$
\Pr_*(X^*=4)=\frac23,
\qquad
\Pr_*(X^*=10)=\frac13.
$$

Define $X_1^*,X_2^*,X_3^*$ as conditionally independent draws from this distribution. Then $\Pr_*(X_1^*=4)=2/3$. Independence gives

$$
\Pr_*(X_1^*=X_2^*=X_3^*=10)
=\left(\frac13\right)^3
=\frac1{27}.
$$

A tempting error is to give 4 mass $1/2$ because there are two distinct numeric values. The empirical law places equal mass on rows, so duplicates accumulate mass.

```r
duplicate_x <- c(4, 4, 10)
prob_first_is_4 <- mean(duplicate_x == 4)
prob_all_three_are_10 <- mean(duplicate_x == 10)^3
stopifnot(abs(prob_first_is_4 - 2 / 3) <= 1e-10 + 1e-8 * abs(2 / 3))
stopifnot(abs(prob_all_three_are_10 - 1 / 27) <=
  1e-10 + 1e-8 * abs(1 / 27))
c(first_is_4 = prob_first_is_4, all_three_are_10 = prob_all_three_are_10)
```

</details>

## R-10-E02

**Exercise 10.2**

For $(1,2,3)$, derive the seven possible bootstrap means and their counts among all 27 ordered samples. Explain why the counts sum to 27 and why the distribution is centered at 2.

<details>
<summary>Hint 1</summary>

**Hint.** Group triples by their sum, or verify the coefficients of $(z+z^2+z^3)^3$.

</details>
<details>
<summary>Hint 2</summary>

The counts are coefficients for sums three through nine and are symmetric about sum six.

</details>
<details>
<summary>Solution</summary>

The smallest sum is 3 and the largest is 9. The sums $3,4,5,6,7,8,9$ correspond to means

$$
1,\;4/3,\;5/3,\;2,\;7/3,\;8/3,\;3.
$$

Their counts are $1,3,6,7,6,3,1$. They sum to 27, the number of ordered triples. The counts are symmetric around sum 6 because replacing every draw $x$ by $4-x$ pairs a triple of sum $s$ with one of sum $12-s$. Hence the paired means average to 2. Direct weighted calculation also gives

$$
\frac{1(1)+3(4/3)+6(5/3)+7(2)+6(7/3)+3(8/3)+1(3)}{27}=2.
$$

```r
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
```

</details>

## R-10-E03

**Exercise 10.3**

Prove R-THM-bootstrap-mean-moments. Identify exactly where $n\ge2$ and conditional independence are used. Would the expectation identity still make sense for $n=1$?

<details>
<summary>Hint 1</summary>

**Hint.** First compute the mean and variance of one empirical draw, then average $n$ independent copies.

</details>
<details>
<summary>Hint 2</summary>

The empirical variance has denominator n, and averaging n independent empirical draws divides it by n again.

</details>
<details>
<summary>Solution</summary>

For one empirical draw,

$$
\operatorname E_*(X_j^*)=\frac1n\sum_{i=1}^n x_i=\bar x
$$

and

$$
\operatorname{Var}_*(X_j^*)
=\frac1n\sum_{i=1}^n(x_i-\bar x)^2
=\frac{n-1}{n}s^2.
$$

Linearity of expectation does not require independence, so

$$
\operatorname E_*(\bar X^*)
=n^{-1}\sum_j\operatorname E_*(X_j^*)
=\bar x.
$$

Conditional independence is used when variances are added without covariance terms:

$$
\operatorname{Var}_*(\bar X^*)
=\frac1{n^2}\sum_{j=1}^n\operatorname{Var}_*(X_j^*)
=\frac{n-1}{n^2}s^2.
$$

The condition $n\ge2$ is needed to define $s^2$ with denominator $n-1$. If $n=1$, the expectation identity still holds: the only bootstrap draw equals $x_1$, so every bootstrap mean is $x_1$. Its variance is zero, but writing the stated formula through $s^2$ would be invalid because the sample variance is undefined.

</details>

## R-10-E04

**Exercise 10.4**

For $x=(2,4,8,10)$, calculate $\bar x$, R's sample variance $s^2$, the exact conditional bootstrap SE of the mean, and $s/\sqrt n$. Explain their finite-sample difference.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\operatorname{SE}_*(\bar X^*)=s\sqrt{n-1}/n$.

</details>
<details>
<summary>Hint 2</summary>

For n=4, the conditional bootstrap mean variance is three sixteenths of the sample variance.

</details>
<details>
<summary>Solution</summary>

The mean is $\bar x=6$. The centered values are $(-4,-2,2,4)$, whose squared sum is 40. Therefore

$$
s^2=40/3,
\qquad
\operatorname{SE}_*(\bar X^*)
=\frac{\sqrt{3}}{4}\sqrt{40/3}
=\sqrt{2.5}
\approx1.5811.
$$

The familiar plug-in value is

$$
\frac{s}{\sqrt4}=\sqrt{10/3}\approx1.8257.
$$

Their ratio is $\sqrt{3/4}$. The smaller bootstrap value follows exactly because the empirical distribution's variance uses denominator $n$, whereas `var` uses $n-1$. Neither calculation alone proves a population interval's validity.

```r
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
```

</details>

## R-10-E05

**Exercise 10.5**

Nine sorted bootstrap replicates are $(1,2,3,4,5,6,7,8,9)$. Compute the type-7 80% percentile interval by hand and verify it with R. State why changing the quantile type must be disclosed.

<details>
<summary>Hint 1</summary>

**Hint.** For $p=0.10$ and $0.90$, use $h=1+(9-1)p$ and interpolate.

</details>
<details>
<summary>Hint 2</summary>

The requested interpolation positions are 1.8 and 8.2; interpolate rather than round.

</details>
<details>
<summary>Solution</summary>

For the lower probability $p=0.10$,

$h=1+(9-1)(0.10)=1.8.$

This lies 80% of the way from the first ordered value 1 to the second value 2, giving $1.8$. For $p=0.90$, $h=8.2$, giving $0.8(8)+0.2(9)=8.2$. The type-7 80% percentile interval is $[1.8,8.2]$.

```r
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
```

The bootstrap replicates do not determine a unique finite-list quantile until an interpolation convention is chosen. Another type can select or weight different order statistics, so omitting it can prevent exact reproduction and can change conclusions near a decision boundary.

</details>

## R-10-E06

**Exercise 10.6**

A reported lower endpoint is fixed independently of a fresh batch of $B=400$ independent bootstrap replicates (conditional on the observed data and that endpoint). Of these fresh replicates, 16 are at or below it. Calculate the empirical CDF proportion and its estimated Monte Carlo SE. Explain why this is neither the bootstrap SE of the statistic nor the population standard error.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\hat q=16/400$ and $\sqrt{\hat q(1-\hat q)/B}$.

</details>
<details>
<summary>Hint 2</summary>

The fraction is four hundredths, whose finite-replicate spread is a different object from a statistic's sampling SE.

</details>
<details>
<summary>Solution</summary>

The empirical distribution-function value is

$$
\hat q=16/400=0.04.
$$

For the fixed, independently supplied endpoint in the question, the 400 threshold indicators are independent Bernoulli draws. Thus, the plug-in estimated Monte Carlo standard error is

$$
\sqrt{\frac{0.04(0.96)}{400}}
\approx0.009798.
$$

```r
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
```

This SE describes repeated computer draws at a fixed threshold, conditional on the observed data. It does not apply directly when the threshold is a quantile computed from the same 400 replicates: those threshold indicators are then dependent. The bootstrap SE describes spread of the statistic across the empirical resampling law. The population standard error describes variation across new population samples under a specified mechanism. More bootstrap replicates shrink the first quantity, but they do not add population information or necessarily improve the other two.

</details>

## R-10-E07

**Exercise 10.7**

An iid Bernoulli sample of size 20 is all zero. Separately, $X_1,\ldots,X_n$ are iid Uniform$(0,\theta)$ and the statistic is the maximum. Explain exactly what each empirical bootstrap distribution can and cannot contain. For $p=0.02$, calculate the chance of the all-zero Bernoulli sample. Prove the direct maximum percentile interval's failure.

<details>
<summary>Hint 1</summary>

**Hint.** Bootstrap values must come from observed support; under a continuous uniform law, the observed maximum is strictly below $\theta$ with probability 1.

</details>
<details>
<summary>Hint 2</summary>

Resampling cannot create an unseen success or exceed the observed maximum.

</details>
<details>
<summary>Solution</summary>

For the all-zero Bernoulli sample, the empirical law has mass 1 at zero. Every bootstrap proportion is exactly zero, so the conditional bootstrap SE is zero and every direct percentile endpoint is zero. If the population success probability is $p=0.02$, however,

$$
\Pr(\text{20 zeros})=(1-0.02)^{20}\approx0.667608.
$$

The sample can therefore miss a real rare class quite often.

For the uniform endpoint problem, let $M=\max_iX_i$. Every resampled value belongs to the observed set, so $M^*\le M$ for every possible bootstrap sample. Every quantile of $M^*$ is consequently at most $M$. Under a continuous Uniform$(0,\theta)$ distribution, $\Pr(M<\theta)=1$. Thus a direct percentile interval made from $M^*$ lies below the true endpoint with probability 1 and has coverage zero.

```r
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
```

Both conditional bootstrap distributions are computed correctly. Both fail because observed support omits precisely what matters: a rare success in the first case and values above the sample maximum in the second. Increasing the number of resamples cannot create that information.

</details>

## R-10-E08

**Exercise 10.8**

A study records four daily pain scores for each of ten volunteer patients. Five scores are missing, all on high-pain days noted in diaries. The analyst proposes deleting missing rows and resampling the remaining 35 rows to estimate uncertainty for the mean pain of all clinic patients. Diagnose the resampling unit, dependence, missingness, selection, and target. Propose one narrower descriptive target, and decide whether any population interval is justified from the information given.

<details>
<summary>Hint 1</summary>

**Hint.** Count independent units before rows, and ask whether either volunteering or outcome observation had a known probability mechanism.

</details>
<details>
<summary>Hint 2</summary>

Patient-level resampling addresses within-patient dependence but not selective missingness or voluntary selection.

</details>
<details>
<summary>Solution</summary>

The independent unit is at most the patient, not the patient-day row. Four scores from the same patient share physiology, treatment, reporting habits, and circumstances. Resampling 35 remaining rows acts as though there were 35 independent units and can understate uncertainty.

The missingness is also informative: the diaries say the missing values tend to occur on high-pain days. Deleting them leaves an observed-day average for each affected volunteer, omitting that volunteer's missing days; volunteers with no missing days are unaffected. Given the reported high-pain missingness, the observed-day averages likely understate averages over all recorded and unrecorded study days, although the missing values are unknown. A bootstrap of complete rows repeats this omission mechanism; it does not reconstruct the five pain scores.

Selection creates a separate boundary. The ten people volunteered, and no probability sampling mechanism from all clinic patients is given. Even perfect measurements of these volunteers would not justify design-based generalization to all clinic patients. Resampling volunteers cannot repair that gap.

A defensible narrower descriptive target is: “the mean of the 35 observed daily scores among these ten volunteers on days when a score was recorded.” Its value can be described, with a ledger stating five missing scores and the unequal number of observed days per patient. If the scientific target instead concerns the mean of patient-level four-day averages, even the descriptive quantity is incomplete because five outcomes are unknown; a sensitivity analysis over plausible missing values would be more honest than silently filling them.

No population confidence interval for all clinic patients is justified from the stated information. A future study could probability-sample patients, predefine the patient as the independent unit, improve or audit outcome collection, and use a method that respects within-patient dependence. Choosing a patient-level resampling scheme would address only one of these problems; it would not resolve informative missingness or volunteer selection.

Return to [exercise R-10-E08 in the chapter](bootstrap-intervals.md).

The solutions, code, and literal fixtures are original Math Atlas material under CC BY-SA 4.0.

</details>


## R-10-E09

**Exercise 10.9**

Three original synthetic paired records have before values 1,4,5 and after values 3,5,9 points. The statistic is mean after-minus-before change. Find the differences and their sample variance. Under empirical iid resampling of the three paired records, give the exact conditional bootstrap mean and variance. Explain what independently resampling the columns changes.

<details>
<summary>Hint 1</summary>

Preserve the before-after pair as one resampling unit.

</details>
<details>
<summary>Hint 2</summary>

Apply the exact bootstrap-mean moment formula to the three differences.

</details>
<details>
<summary>Solution</summary>

Differences are two, one and four points, with mean $7/3$. Their centered sum of squares is $14/3$, hence sample variance $7/3$ squared points. The exact conditional bootstrap mean is $7/3$ and its variance is $(3-1)(7/3)/3^2=14/27$. Paired-row resampling preserves the empirical joint relationship between the two measurements. Independently resampling columns breaks pairing and creates a different joint empirical law. These conditional facts do not establish that the original pairs were independently sampled from a target population.

</details>

## R-10-E10

**Exercise 10.10**

Five sorted replicate statistics are 1,2,3,4,5 in declared units. Find their type-7 80% percentile interval, then transform all replicates by z=10-2x and find the transformed interval. Explain the endpoint order when applying that decreasing map to the first interval.

<details>
<summary>Hint 1</summary>

At probabilities one tenth and nine tenths the type-7 positions are 1.4 and 4.6.

</details>
<details>
<summary>Hint 2</summary>

A negative slope carries the original lower endpoint to the new upper endpoint.

</details>
<details>
<summary>Solution</summary>

The original interval is $[1.4,4.6]$. Transformed replicates in sorted order are 0,2,4,6,8, with type-7 endpoints 0.8 and 7.2. Equivalently use $[10-2(4.6),10-2(1.4)]$, reversing the original endpoint order. This is exact arithmetic for the five supplied replicates under that quantile convention. It does not establish the population coverage of a bootstrap interval or show that extra replicates repair an unsuitable resampling model.

</details>

## Sources and scope

For the method's historical origin, see Bradley Efron's primary 1979 paper, [“Bootstrap Methods: Another Look at the Jackknife”](https://doi.org/10.1214/aos/1176344552), *The Annals of Statistics* 7(1), 1–26. The resampling definition, exact mean-moment proof, limitations, and all examples in this chapter are stated self-containedly. R's official [`quantile` release documentation](https://stat.ethz.ch/R-manual/R-release/library/stats/html/quantile.html), accessed 2026-09-06 and checked against installed R 4.6.0 help, specifies the nine algorithms, the type-7 interpolation rule, and type 7 as the default; this chapter names it explicitly for reproducibility. These sources do not supply a universal validity theorem, and none is claimed.

The prose, code, exercises, and fixtures in this chapter are original Math Atlas material under CC BY-SA 4.0.

## Summary

An empirical bootstrap conditions on the observed distribution and the chosen resampling unit. Its mean identities can be exact while its population coverage interpretation remains approximate. Pairing, clustering, missingness and support boundaries all matter. Increasing replicate count reduces computational error but cannot generate an unobserved success, extend an observed maximum, or justify an unsupported population target.
