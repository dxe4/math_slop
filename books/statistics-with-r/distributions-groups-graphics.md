
# Distributions, Groups, and Honest Graphics

A mean can be exactly right and still leave the important story untold. Five listed waits of 4 minutes and five listed waits of 12 minutes have the same mean as ten listed waits of 8 minutes. The first empirical list is variable; the values in the second list are identical. A useful description therefore asks where observations lie, how much they vary, whether a tail or unusual value matters, and whether groups were measured on a comparable basis. Claims about future service predictability would require a specified predictive mechanism.

This chapter develops that description before any probability model. We will use an empirical distribution: the distribution made by the observed values themselves. We will also distinguish two variances that answer different questions. One describes every member of a declared finite population and divides by its population size (N). The other is R's sample variance and divides by (n-1). That distinction becomes essential when Chapter 8 uses variance in probability models and introduces standard errors.

The earlier analysis ledger remains in force. A **unit** is the entity described by one observation, a **variable** records a feature of a unit, an **estimand** is the target quantity, a **statistic** is computed from observed data, and a **mechanism** says how rows came to be observed or assigned. A graph cannot repair incompatible units, hidden exclusions, or self-selected groups.

## An original waiting-time fixture

Our main fixture records waiting time for one synthetic service visit. `visit_id` is the key: it should identify each row once. `route` is a categorical group label with declared levels `North` and `South`. `minutes` is elapsed waiting time in minutes. The analysis population is exactly the 21 listed visits, not all future visits or any real transit system.

Fixture ID: `R05-WAIT-V1`. Creator: Math Atlas. Version: 1. Schema: one row per synthetic visit; character key `visit_id`; two-level factor `route`; numeric outcome `minutes`. Row count: 21. Missing code: R's `NA`, with no missing values in this version. Exclusions: none. Provenance: the literal values below are the complete canonical source. They were invented for teaching and are not scientific evidence.

The `data.frame()` call makes a rectangular table. `sprintf()` formats the integers 1 through 21 as keys; `%02d` means a decimal integer padded to two digits. `rep()` repeats each route label the declared number of times. `factor()` stores those group labels and `levels` fixes their order. `anyDuplicated()` returns zero when no key is repeated. `table()` counts values by group. We check the schema before calculating summaries.

```r
visit_id <- sprintf("v%02d", 1:21)
route <- factor(
  c(rep("North", 9), rep("South", 12)),
  levels = c("North", "South")
)
minutes <- c(
  4, 5, 5, 6, 6, 7, 8, 9, 18,
  3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9, 11
)
waiting <- data.frame(visit_id = visit_id, route = route, minutes = minutes)

stopifnot(nrow(waiting) == 21L)
stopifnot(anyDuplicated(waiting$visit_id) == 0L)
stopifnot(identical(levels(waiting$route), c("North", "South")))
stopifnot(is.numeric(waiting$minutes), all(is.finite(waiting$minutes)))
stopifnot(all(waiting$minutes >= 0), !anyNA(waiting))
stopifnot(identical(as.integer(table(waiting$route)), c(9L, 12L)))
```

The dollar sign in `waiting$minutes` selects a named column. The logical expression `waiting$route == "North"` produces one `TRUE` or `FALSE` per row, and square brackets retain the entries where it is `TRUE`.

## The distribution in the observed values

Sorting the observations is more revealing than starting with one summary. The South waits cluster from 3 through 11 minutes. The North waits mostly overlap that range but include one wait of 18 minutes. Counts, not visual area or rhetoric, establish that fact.

**Definition R-DEF-empirical-distribution (empirical distribution).** For observed numerical values \(x_1,\ldots,x_n\), the empirical distribution puts proportion \(1/n\) on each observation, counting repeated values separately. Its cumulative proportion at a threshold \(t\) is

\[
F_n(t)=\frac{1}{n}\sum_{i=1}^n I(x_i\le t),
\]

where \(I(x_i\le t)\) equals 1 when the statement is true and 0 otherwise. Thus \(F_n(t)\) is simply the observed proportion at or below \(t\). It describes the observed values; by itself it makes no claim about a wider population.

In R, a comparison such as `north <= 6` creates logical values. `sum()` counts the `TRUE` values, because R treats `TRUE` as 1 in this arithmetic, and `mean()` gives their proportion. The function `ecdf()` constructs the same step function. Here we calculate the proportions directly so the denominator stays visible. `vapply()` applies a stated calculation to every threshold and requires each result to be one integer; the anonymous expression `function(t)` says what to do with one threshold named `t`.

```r
north <- waiting$minutes[waiting$route == "North"]
south <- waiting$minutes[waiting$route == "South"]
thresholds <- c(5, 6, 8, 10, 18)

north_count_le <- vapply(thresholds, function(t) sum(north <= t), integer(1))
south_count_le <- vapply(thresholds, function(t) sum(south <= t), integer(1))
empirical_table <- data.frame(
  threshold_minutes = thresholds,
  north_count_le = north_count_le,
  north_proportion_le = north_count_le / length(north),
  south_count_le = south_count_le,
  south_proportion_le = south_count_le / length(south)
)

stopifnot(sum(table(north)) == length(north))
stopifnot(sum(table(south)) == length(south))
stopifnot(identical(north_count_le, c(3L, 5L, 7L, 8L, 9L)))
stopifnot(identical(south_count_le, c(6L, 8L, 10L, 11L, 12L)))
stopifnot(abs(empirical_table$north_proportion_le[2] - 5 / 9) <= 1e-10 + 1e-8 * abs(5 / 9))
stopifnot(abs(empirical_table$south_proportion_le[2] - 8 / 12) <= 1e-10 + 1e-8 * abs(8 / 12))
```

| Threshold (minutes) | North count / 9 | North proportion | South count / 12 | South proportion |
| ---: | ---: | ---: | ---: | ---: |
| 5 | 3 | 0.333 | 6 | 0.500 |
| 6 | 5 | 0.556 | 8 | 0.667 |
| 8 | 7 | 0.778 | 10 | 0.833 |
| 10 | 8 | 0.889 | 11 | 0.917 |
| 18 | 9 | 1.000 | 12 | 1.000 |

At 6 minutes, \(5/9\approx0.556\) of North waits and \(8/12\approx0.667\) of South waits are at or below the threshold. The denominators differ, so comparing the raw counts 5 and 8 alone would be misleading. At 10 minutes, 8 of 9 North waits are at or below the threshold, while the remaining North wait is 18 minutes. A report that mentions only the typical wait could conceal this tail.

## Quantiles: locations with a declared rule

A median splits ordered data around the middle, but software must make a precise choice when the requested location falls between observations. Quartiles are even more sensitive to that convention in small samples. Always declare the rule when exact agreement matters.

**Definition R-DEF-quantile (type-7 sample quantile).** Sort \(n\ge2\) observed values as \(x_{(1)}\le\cdots\le x_{(n)}\). For \(0\le p\le1\), set

\[
h=(n-1)p+1,\qquad j=\lfloor h\rfloor,\qquad \gamma=h-j.
\]

When \(j<n\), the type-7 quantile is

\[
Q_7(p)=(1-\gamma)x_{(j)}+\gamma x_{(j+1)}.
\]

At \(p=1\), it is \(x_{(n)}\). The floor symbol \(\lfloor h\rfloor\) means the greatest integer no larger than \(h\). This interpolation rule is a convention, not a theorem about nature. It is the default used by R's `quantile()`, and we state `type = 7` explicitly.

For the nine North waits and \(p=0.25\), \(h=3\), so the lower quartile is the third ordered value, 5. For the twelve South waits, \(h=3.75\), so the lower quartile lies three quarters of the way from the third ordered value 4 to the fourth value 5: \(4.75\).

```r
north_quartiles <- quantile(north, probs = c(0.25, 0.5, 0.75), type = 7, names = FALSE)
south_quartiles <- quantile(south, probs = c(0.25, 0.5, 0.75), type = 7, names = FALSE)

stopifnot(all(abs(north_quartiles - c(5, 6, 8)) <= 1e-10 + 1e-8 * abs(c(5, 6, 8))))
stopifnot(all(abs(south_quartiles - c(4.75, 5.5, 7.25)) <= 1e-10 + 1e-8 * abs(c(4.75, 5.5, 7.25))))
stopifnot(abs(median(north) - 6) <= 1e-10 + 1e-8 * 6)
stopifnot(abs(median(south) - 5.5) <= 1e-10 + 1e-8 * 5.5)
```

Quantiles describe position, not counts in fixed-width bins. They are resistant to the magnitude of an extreme value: changing the North maximum from 18 to 180 would leave these three quartiles unchanged. That stability is useful, but it also means quartiles should be accompanied by the range, raw-value display, or explicit tail counts when extremes matter.

## Worked example 1: equal means, unequal spread

**Example 5.1 (Worked calculation).**

Consider two observed groups:

\[
A=(2,4,6),\qquad B=(0,4,8).
\]

Both means are 4. Their deviations from 4 are \((-2,0,2)\) and \((-4,0,4)\). Squaring removes signs and makes larger deviations count more: the centered sums of squares are 8 and 32. Dividing each by \(n-1=2\) gives sample variances 4 and 16.

**Definition R-DEF-sample-variance (sample variance).** For \(n\ge2\) observed values with mean \(\bar{x}\), the sample variance is

\[
s^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar{x})^2.
\]

R's `var(x)` uses this \(n-1\) denominator and returns `NA` for a single observation. Missing values propagate unless removal is explicitly requested. A variance carries squared measurement units: if \(x_i\) is measured in minutes, \(s^2\) is measured in square minutes.

**Definition R-DEF-standard-deviation (sample standard deviation).** The sample standard deviation is

\[
s=\sqrt{s^2}.
\]

It is nonnegative and has the same measurement unit as the observations. R's `sd(x)` calculates it. SD describes spread among observations. It is not a standard error, which describes variation of a statistic under a specified repeated mechanism and is introduced later.

```r
group_a <- c(2, 4, 6)
group_b <- c(0, 4, 8)

means_ab <- c(A = mean(group_a), B = mean(group_b))
centered_sums_ab <- c(
  A = sum((group_a - mean(group_a))^2),
  B = sum((group_b - mean(group_b))^2)
)
variances_ab <- c(A = var(group_a), B = var(group_b))
sds_ab <- c(A = sd(group_a), B = sd(group_b))

stopifnot(identical(unname(means_ab), c(4, 4)))
stopifnot(identical(unname(centered_sums_ab), c(8, 32)))
stopifnot(identical(unname(variances_ab), c(4, 16)))
stopifnot(identical(unname(sds_ab), c(2, 4)))
```

The means alone declare a tie. The full description does not: group B places observations twice as far from the common mean, so its SD is twice as large and its variance four times as large.

## Why centering can be checked two ways

**Theorem R-THM-centered-squares (centered-sum identity; proved here).** For real observed values \(x_1,\ldots,x_n\), with \(n\ge1\) and \(\bar{x}=n^{-1}\sum_i x_i\),

\[
\sum_{i=1}^n(x_i-\bar{x})^2=\sum_{i=1}^n x_i^2-n\bar{x}^2.
\]

**Proof.** Expand every square and collect terms:

\[
\begin{aligned}
\sum_{i=1}^n(x_i-\bar{x})^2
&=\sum_{i=1}^n(x_i^2-2x_i\bar{x}+\bar{x}^2)\\
&=\sum_{i=1}^n x_i^2-2\bar{x}\sum_{i=1}^n x_i+n\bar{x}^2.
\end{aligned}
\]

Because \(\sum_i x_i=n\bar{x}\), the middle term is \(-2n\bar{x}^2\). Combining it with \(+n\bar{x}^2\) gives the claimed right side. This is an exact algebraic identity, not an approximation. \(\square\)

For group A, the right side is \(2^2+4^2+6^2-3(4^2)=56-48=8\), matching the direct centered calculation. The identity is an excellent hand check. In software, the direct expression `sum((x - mean(x))^2)` better communicates the definition and generally avoids needless subtraction of two large, nearly equal quantities.

## Which denominator: \(N\) or \(n-1\)?

Two similar formulas have different jobs.

**Book convention (finite-population descriptive variance).** The book's statistical conventions specify that if \(y_1,\ldots,y_N\) are all values in a declared finite population and \(\mu=N^{-1}\sum_i y_i\), its descriptive variance is

\[
\sigma_N^2=\frac{1}{N}\sum_{i=1}^N(y_i-\mu)^2.
\]

This chapter uses denominator \(N\) when the listed values are the entire target population. The convention is restated here because the denominator cannot be inferred from the numbers alone.

If `group_a` is the complete population of exactly three objects, its finite-population variance is \(8/3\). If those same three numbers are observed as a sample used to estimate spread in a wider process, the sample variance is \(8/(3-1)=4\). The arithmetic values are identical; the role of the data changes the target and therefore the denominator.

**Denominator boundary.** The \(N\)-denominator quantity above describes the declared finite list. The \(n-1\)-denominator quantity is the sample-variance convention used by R's `var()` for \(n\ge2\). Under independent, identically distributed sampling with finite variance, the latter has a repeated-sampling property explained after probability is defined in Chapter 8. No such mechanism is implied merely by calling a vector a sample.

```r
population_variance_a <- sum((group_a - mean(group_a))^2) / length(group_a)
sample_variance_a <- var(group_a)

stopifnot(abs(population_variance_a - 8 / 3) <= 1e-10 + 1e-8 * abs(8 / 3))
stopifnot(abs(sample_variance_a - 4) <= 1e-10 + 1e-8 * 4)
stopifnot(is.na(var(4)))
```

The phrase “divide by the number of values” is therefore incomplete. First ask whether the values exhaust the finite target or are observations used under a wider sampling model. Also keep \(N\), the population size, distinct from \(n\), the observed sample size.

## How location and scale changes affect spread

Adding 60 minutes to every wait makes each recorded duration an hour longer while leaving the differences between waits unchanged. Changing a clock’s origin alone would not change elapsed waiting durations. Multiplying minutes by 60 to obtain seconds does change those distances by a factor of 60.

**Theorem R-THM-scale-spread (shift and scale of sample spread; proved here).** Let \(x_1,\ldots,x_n\) be real values with \(n\ge2\), and let \(z_i=a+b x_i\) for real constants \(a,b\). Then

\[
\operatorname{var}_s(z)=b^2\operatorname{var}_s(x),\qquad
\operatorname{sd}_s(z)=|b|\operatorname{sd}_s(x).
\]

**Proof.** The transformed mean is \(\bar{z}=a+b\bar{x}\). Hence \(z_i-\bar{z}=b(x_i-\bar{x})\). Squaring, summing, and dividing by the same \(n-1\) gives \(b^2s_x^2\). Taking the nonnegative square root gives \(\sqrt{b^2s_x^2}=|b|s_x\). The result is exact. The same algebra gives the corresponding \(N\)-denominator finite-population result. \(\square\)

```r
north_seconds <- 60 * north
north_shifted <- 100 + north

stopifnot(abs(var(north_seconds) - 60^2 * var(north)) <=
            1e-10 + 1e-8 * abs(60^2 * var(north)))
stopifnot(abs(sd(north_seconds) - 60 * sd(north)) <=
            1e-10 + 1e-8 * abs(60 * sd(north)))
stopifnot(abs(var(north_shifted) - var(north)) <=
            1e-10 + 1e-8 * abs(var(north)))
stopifnot(abs(sd(-north) - sd(north)) <=
            1e-10 + 1e-8 * abs(sd(north)))
```

Variance in square seconds is \(60^2=3600\) times variance in square minutes. SD in seconds is 60 times SD in minutes. Reporting “variance = 12” without square units loses essential meaning.

## Worked example 2: groups need more than two means

**Example 5.2 (Worked calculation).**

We now assemble an audit table for `R05-WAIT-V1`. Each row reports the observed count, mean, median, declared type-7 quartiles, SD, minimum, and maximum. The table keeps unequal group sizes and the North tail visible. `rbind()` stacks the two named summary vectors as rows of one matrix.

```r
north_summary <- c(
  n = length(north), mean = mean(north), median = median(north),
  q1_type7 = quantile(north, 0.25, type = 7, names = FALSE),
  q3_type7 = quantile(north, 0.75, type = 7, names = FALSE),
  sd = sd(north), min = min(north), max = max(north)
)
south_summary <- c(
  n = length(south), mean = mean(south), median = median(south),
  q1_type7 = quantile(south, 0.25, type = 7, names = FALSE),
  q3_type7 = quantile(south, 0.75, type = 7, names = FALSE),
  sd = sd(south), min = min(south), max = max(south)
)
plot_summary <- rbind(North = north_summary, South = south_summary)

expected_plot_summary <- rbind(
  North = c(n = 9, mean = 68 / 9, median = 6, q1_type7 = 5,
            q3_type7 = 8, sd = sqrt(142.222222222222 / 8), min = 4, max = 18),
  South = c(n = 12, mean = 73 / 12, median = 5.5, q1_type7 = 4.75,
            q3_type7 = 7.25, sd = sqrt(58.9166666666667 / 11), min = 3, max = 11)
)
stopifnot(all(abs(plot_summary - expected_plot_summary) <=
              1e-10 + 1e-8 * abs(expected_plot_summary)))
stopifnot(sum(plot_summary[, "n"]) == nrow(waiting))
```

| Route | \(n\) | Mean (min) | Median (min) | Type-7 Q1 | Type-7 Q3 | SD (min) | Min | Max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| North | 9 | 7.56 | 6.00 | 5.00 | 8.00 | 4.22 | 4 | 18 |
| South | 12 | 6.08 | 5.50 | 4.75 | 7.25 | 2.31 | 3 | 11 |

The North mean is about 7.56 minutes and its median is 6; the South mean is about 6.08 and its median is 5.5. The larger mean-median gap and maximum of 18 signal the North right tail. North's sample SD is about 4.22 minutes; South's is about 2.31. These are descriptive differences for the listed visits. The fixture has no sampling or assignment mechanism that could justify a population or causal conclusion.

A step plot of both empirical distributions reveals thresholds across the whole observed range. We use a solid dark line for North and a dashed blue line for South, so color is not the only distinction. The plot's numerical alternative is `empirical_table` above plus the sorted-value object below. The ordered North waits are 4, 5, 5, 6, 6, 7, 8, 9, 18; the ordered South waits are 3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9, 11. Someone who cannot see the graph can recover its central message: South reaches a cumulative proportion of \(11/12\approx0.917\) by 10 minutes, while North reaches \(8/9\approx0.889\) and then has its final jump at 18.

`tempfile()` supplies a disposable relative output path. `pdf()` opens a graphics device, `plot()` draws North's empirical step function, `lines()` adds South, and `legend()` identifies both encodings. `dev.off()` closes the explicit device, and `unlink()` removes the temporary file after its existence has been checked.

```r
sorted_values_table <- data.frame(
  North = c(sort(north), rep(NA_real_, length(south) - length(north))),
  South = sort(south)
)
stopifnot(identical(as.numeric(stats::na.omit(sorted_values_table$North)), sort(north)))
stopifnot(identical(sorted_values_table$South, sort(south)))

plot_file <- tempfile(fileext = ".pdf")
grDevices::pdf(plot_file, width = 7, height = 5)
plot(stats::ecdf(north), verticals = TRUE, do.points = TRUE,
     col = "black", lty = 1, pch = 16,
     xlim = range(waiting$minutes),
     xlab = "Waiting time (minutes)", ylab = "Observed proportion at or below time",
     main = "Empirical distributions of listed synthetic waits")
lines(stats::ecdf(south), verticals = TRUE, do.points = TRUE,
      col = "#0072B2", lty = 2, pch = 1)
legend("bottomright", legend = c("North", "South"),
       col = c("black", "#0072B2"), lty = c(1, 2), pch = c(16, 1), bty = "n")
graphics_device <- grDevices::dev.off()
stopifnot(file.exists(plot_file), graphics_device == 1L)
unlink(plot_file)
```

## Adverse case: bins and axes can manufacture a story

**Example 5.3 (Worked calculation).**

A histogram groups values into intervals. Its appearance depends on those intervals. R's default cells are right-closed when `right = TRUE`: a cell \((a,b]\) contains its right endpoint, except that `include.lowest = TRUE` also includes the lowest boundary. We declare breakpoints instead of treating them as neutral decoration.

For the North waits, two defensible bin widths give different visual emphasis. The following calls use `plot = FALSE` to obtain the exact counts without drawing. The count tables are the numerical alternatives to the possible histograms.

```r
north_hist_5 <- hist(north, breaks = c(0, 5, 10, 15, 20),
                     right = TRUE, include.lowest = TRUE, plot = FALSE)
north_hist_10 <- hist(north, breaks = c(0, 10, 20),
                      right = TRUE, include.lowest = TRUE, plot = FALSE)
histogram_count_table <- data.frame(
  interval_5_minutes = c("[0,5]", "(5,10]", "(10,15]", "(15,20]"),
  count = north_hist_5$counts
)
coarse_count_table <- data.frame(
  interval_10_minutes = c("[0,10]", "(10,20]"),
  count = north_hist_10$counts
)

stopifnot(identical(north_hist_5$counts, c(3L, 5L, 0L, 1L)))
stopifnot(identical(north_hist_10$counts, c(8L, 1L)))
stopifnot(sum(north_hist_5$counts) == length(north))
stopifnot(sum(north_hist_10$counts) == length(north))
```

With 5-minute bins the empty interval from 10 to 15 separates the 18-minute wait from the main cluster. With 10-minute bins the display says only that one wait exceeds 10. Neither count table is false, but the coarse version hides the size of the gap. A binning choice becomes misleading when it is selected to suppress a feature or shown without enough information to audit it.

| 5-minute interval | [0,5] | (5,10] | (10,15] | (15,20] |
| --- | ---: | ---: | ---: | ---: |
| North count | 3 | 5 | 0 | 1 |

| 10-minute interval | [0,10] | (10,20] |
| --- | ---: | ---: |
| North count | 8 | 1 |

Axes can cause a second distortion when the geometry is left unstated. Suppose bars encode the absolute group means by their lengths from a baseline, but the vertical axis runs only from 5.9 to 7.7. The 1.47-minute difference then occupies almost the full plotting height because most of each bar has been removed. A bar-length encoding of absolute means requires a zero baseline so its lengths represent the stated magnitudes. A point display of means or a raw-value dotplot need not start at zero: it may use a clearly labeled common contextual range when the range is defensible and group counts, overlap, and tails remain visible. For these data, a repaired raw-value display includes the 18-minute wait on one common minute scale, prints group counts, and accompanies the graphic with `plot_summary`. An `xlim` that drops 18 would change what can be seen, not which data exist.

**Minimum descriptive audit.** A group graphic supports an honest descriptive comparison only when the outcome unit and direction are labeled, groups share a comparable scale, observed group counts and exclusions are available, tails are not silently clipped, and a numerical alternative exposes the plotted values or summaries. This principle does not make observational groups causally comparable.

## R-05-I01

### Guided investigation: scale, bins, and one long wait

Question: Two synthetic service desks have the same mean in the original ten visits. Does that make their empirical distributions practically interchangeable, and what changes when Desk V records one 40-minute wait instead of 16?

Fixture ID: `R05-DESKS-V1`. Creator: Math Atlas. Version: 1. Schema: one row per listed synthetic visit; desk label `S` or `V`; waiting time in minutes. Row count: 20 before the adverse replacement. Missing code: `NA`, none present. Exclusions: none. Provenance: literal invented values below.

Before running the code, predict which summaries stay equal, which show the difference in spread, and whether converting minutes to seconds can change which desk is more variable. Controls: retain the same ten visits per desk, use type-7 quartiles, use the \(n-1\) sample SD, compare common declared bin edges, and change only the final Desk V value in the adverse version. `replace(desk_v, 10L, 40)` makes a copy with entry 10 replaced by 40; the suffix `L` marks 10 as an integer index.

```r
desk_s <- c(8, 9, 9, 10, 10, 10, 11, 11, 12, 10)
desk_v <- c(4, 6, 8, 9, 10, 10, 11, 12, 14, 16)
desk_v_adverse <- replace(desk_v, 10L, 40)

investigation_table <- rbind(
  S = c(n = length(desk_s), mean = mean(desk_s), median = median(desk_s),
        q1 = quantile(desk_s, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_s, 0.75, type = 7, names = FALSE),
        sd = sd(desk_s), max = max(desk_s)),
  V = c(n = length(desk_v), mean = mean(desk_v), median = median(desk_v),
        q1 = quantile(desk_v, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_v, 0.75, type = 7, names = FALSE),
        sd = sd(desk_v), max = max(desk_v)),
  V_with_40 = c(n = length(desk_v_adverse), mean = mean(desk_v_adverse),
        median = median(desk_v_adverse),
        q1 = quantile(desk_v_adverse, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_v_adverse, 0.75, type = 7, names = FALSE),
        sd = sd(desk_v_adverse), max = max(desk_v_adverse))
)
common_breaks <- c(0, 5, 10, 15, 20, 30, 40)
bin_table <- rbind(
  S = hist(desk_s, breaks = common_breaks, right = TRUE,
           include.lowest = TRUE, plot = FALSE)$counts,
  V = hist(desk_v, breaks = common_breaks, right = TRUE,
           include.lowest = TRUE, plot = FALSE)$counts,
  V_with_40 = hist(desk_v_adverse, breaks = common_breaks, right = TRUE,
                   include.lowest = TRUE, plot = FALSE)$counts
)
colnames(bin_table) <- c("[0,5]", "(5,10]", "(10,15]", "(15,20]", "(20,30]", "(30,40]")

expected_investigation_table <- rbind(
  S = c(n = 10, mean = 10, median = 10, q1 = 9.25, q3 = 10.75,
        sd = sqrt(12 / 9), max = 12),
  V = c(n = 10, mean = 10, median = 10, q1 = 8.25, q3 = 11.75,
        sd = sqrt(114 / 9), max = 16),
  V_with_40 = c(n = 10, mean = 12.4, median = 10, q1 = 8.25, q3 = 11.75,
        sd = sqrt(920.4 / 9), max = 40)
)
expected_bin_table <- rbind(
  S = c(0L, 7L, 3L, 0L, 0L, 0L),
  V = c(1L, 5L, 3L, 1L, 0L, 0L),
  V_with_40 = c(1L, 5L, 3L, 0L, 0L, 1L)
)
colnames(expected_bin_table) <- colnames(bin_table)

stopifnot(abs(mean(desk_s) - 10) <= 1e-10 + 1e-8 * 10)
stopifnot(abs(mean(desk_v) - 10) <= 1e-10 + 1e-8 * 10)
stopifnot(sd(desk_v) > 3 * sd(desk_s))
stopifnot(abs(mean(desk_v_adverse) - 12.4) <= 1e-10 + 1e-8 * 12.4)
stopifnot(all(abs(investigation_table - expected_investigation_table) <=
              1e-10 + 1e-8 * abs(expected_investigation_table)))
stopifnot(identical(bin_table, expected_bin_table))
stopifnot(identical(rowSums(bin_table), c(S = 10, V = 10, V_with_40 = 10)))
stopifnot(abs(sd(60 * desk_v) - 60 * sd(desk_v)) <=
            1e-10 + 1e-8 * abs(60 * sd(desk_v)))
```

| Series | \(n\) | Mean | Median | Type-7 Q1 | Type-7 Q3 | SD | Max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| S | 10 | 10.00 | 10.00 | 9.25 | 10.75 | 1.15 | 12 |
| V | 10 | 10.00 | 10.00 | 8.25 | 11.75 | 3.56 | 16 |
| V with 40 | 10 | 12.40 | 10.00 | 8.25 | 11.75 | 10.11 | 40 |

| Series | [0,5] | (5,10] | (10,15] | (15,20] | (20,30] | (30,40] |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| S | 0 | 7 | 3 | 0 | 0 | 0 |
| V | 1 | 5 | 3 | 1 | 0 | 0 |
| V with 40 | 1 | 5 | 3 | 0 | 0 | 1 |

Interpret the tables before drawing: Desk S and Desk V both have mean 10 minutes, yet Desk V's sample SD is more than three times Desk S's. Replacing 16 by 40 increases V's mean to 12.4 and creates a separated upper tail. The median and quartiles remain unchanged while the mean and SD move sharply. Conversion to seconds multiplies every SD by 60 and every variance by 3600, so it cannot reverse the ordering of spreads.

For the graphic, use the common scale 0–40 minutes for all three rows and distinguish them by plotting shape as well as color. The full numerical alternative is `bin_table` together with `investigation_table`; the prose alternative is that all ten S waits occupy 8–12, original V spans 4–16, and adverse V has nine waits at or below 14 plus one wait at 40. `stripchart(..., method = "stack")` draws one point per visit and stacks tied values instead of hiding them.

```r
investigation_plot <- tempfile(fileext = ".pdf")
grDevices::pdf(investigation_plot, width = 8, height = 5)
stripchart(list(S = desk_s, V = desk_v, V_with_40 = desk_v_adverse),
           method = "stack", pch = c(16, 1, 17),
           col = c("black", "#0072B2", "#D55E00"),
           xlim = c(0, 40), xlab = "Waiting time (minutes)",
           main = "Every listed synthetic wait on a common scale")
investigation_device <- grDevices::dev.off()
stopifnot(file.exists(investigation_plot), investigation_device == 1L)
unlink(investigation_plot)
```

Failure and boundary: choosing separate automatic axes for the rows could make all three spreads look similar, and bins wider than the observed gap could mute the isolated wait. Conversely, one invented adverse value does not prove that real desks have heavy-tailed service times. The analysis is descriptive for the listed synthetic visits. A causal claim about desk procedures would require a defensible assignment or comparison mechanism, and a population claim would require a sampling account.

A complete response should include the prediction, exact same-mean check, SD or variance comparison, type-7 location summaries, common-bin count audit, unit-conversion reasoning, plot alternative, and a bounded conclusion. Scoring rubric, 12 points: question and prediction 2; controlled calculations with declared conventions 3; accurate comparison of location, spread, and tail 3; accessible numeric/prose graphic alternative 2; mechanism and scope boundary 2. A response needs at least 8 points and cannot pass if it hides the 40-minute value or claims a causal effect.

## Choosing a responsible summary

No fixed shopping list replaces judgment, but a strong descriptive comparison usually proceeds in this order:

1. Reconfirm the unit, outcome unit, group mechanism, key, missingness, and exclusions.
2. Print group counts and enough of the ordered values or empirical proportions to expose tails and ties.
3. Report location with a declared convention: often mean and median together.
4. Report spread with its denominator and units: sample SD for a sample-oriented summary, or \(N\)-denominator variance for a complete finite target.
5. Use a common-scale graphic whose binning, axes, and clipped values can be audited.
6. End with a conclusion restricted to the observed or declared target population and the actual comparison mechanism.

A large group difference can coexist with extensive overlap. A small mean difference can coexist with a practically important tail. Unequal group counts do not invalidate a descriptive comparison, but counts must be visible and can affect how stable a summary is. None of these observations licenses an inferential conclusion before a probability or assignment mechanism has been specified.

## Exercises

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

```r
visit_id <- sprintf("v%02d", 1:21)
route <- factor(c(rep("North", 9), rep("South", 12)),
                levels = c("North", "South"))
minutes <- c(
  4, 5, 5, 6, 6, 7, 8, 9, 18,
  3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9, 11
)
waiting <- data.frame(visit_id = visit_id, route = route, minutes = minutes)
north <- waiting$minutes[waiting$route == "North"]
south <- waiting$minutes[waiting$route == "South"]

stopifnot(nrow(waiting) == 21L, anyDuplicated(waiting$visit_id) == 0L)
stopifnot(!anyNA(waiting), all(is.finite(waiting$minutes)))
stopifnot(identical(c(length(north), length(south)), c(9L, 12L)))
```


```r
desk_s <- c(8, 9, 9, 10, 10, 10, 11, 11, 12, 10)
desk_v <- c(4, 6, 8, 9, 10, 10, 11, 12, 14, 16)
desk_v_adverse <- replace(desk_v, 10L, 40)

desk_summary <- rbind(
  S = c(n = length(desk_s), mean = mean(desk_s), median = median(desk_s),
        q1 = quantile(desk_s, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_s, 0.75, type = 7, names = FALSE),
        sd = sd(desk_s), max = max(desk_s)),
  V = c(n = length(desk_v), mean = mean(desk_v), median = median(desk_v),
        q1 = quantile(desk_v, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_v, 0.75, type = 7, names = FALSE),
        sd = sd(desk_v), max = max(desk_v)),
  V_with_40 = c(n = length(desk_v_adverse), mean = mean(desk_v_adverse),
        median = median(desk_v_adverse),
        q1 = quantile(desk_v_adverse, 0.25, type = 7, names = FALSE),
        q3 = quantile(desk_v_adverse, 0.75, type = 7, names = FALSE),
        sd = sd(desk_v_adverse), max = max(desk_v_adverse))
)
common_breaks <- c(0, 5, 10, 15, 20, 30, 40)
desk_bins <- rbind(
  S = hist(desk_s, breaks = common_breaks, right = TRUE,
           include.lowest = TRUE, plot = FALSE)$counts,
  V = hist(desk_v, breaks = common_breaks, right = TRUE,
           include.lowest = TRUE, plot = FALSE)$counts,
  V_with_40 = hist(desk_v_adverse, breaks = common_breaks, right = TRUE,
                   include.lowest = TRUE, plot = FALSE)$counts
)
colnames(desk_bins) <- c("[0,5]", "(5,10]", "(10,15]", "(15,20]", "(20,30]", "(30,40]")

expected_desk_summary <- rbind(
  S = c(n = 10, mean = 10, median = 10, q1 = 9.25, q3 = 10.75,
        sd = sqrt(12 / 9), max = 12),
  V = c(n = 10, mean = 10, median = 10, q1 = 8.25, q3 = 11.75,
        sd = sqrt(114 / 9), max = 16),
  V_with_40 = c(n = 10, mean = 12.4, median = 10, q1 = 8.25, q3 = 11.75,
        sd = sqrt(920.4 / 9), max = 40)
)
expected_desk_bins <- rbind(
  S = c(0L, 7L, 3L, 0L, 0L, 0L),
  V = c(1L, 5L, 3L, 1L, 0L, 0L),
  V_with_40 = c(1L, 5L, 3L, 0L, 0L, 1L)
)
colnames(expected_desk_bins) <- colnames(desk_bins)

stopifnot(abs(desk_summary["S", "mean"] - 10) <= 1e-10 + 1e-8 * 10)
stopifnot(abs(desk_summary["V", "mean"] - 10) <= 1e-10 + 1e-8 * 10)
stopifnot(desk_summary["V", "sd"] > 3 * desk_summary["S", "sd"])
stopifnot(abs(desk_summary["V_with_40", "mean"] - 12.4) <= 1e-10 + 1e-8 * 12.4)
stopifnot(all(abs(desk_summary - expected_desk_summary) <=
              1e-10 + 1e-8 * abs(expected_desk_summary)))
stopifnot(identical(desk_bins, expected_desk_bins))
stopifnot(identical(rowSums(desk_bins), c(S = 10, V = 10, V_with_40 = 10)))
stopifnot(abs(sd(60 * desk_v) - 60 * sd(desk_v)) <=
            1e-10 + 1e-8 * abs(60 * sd(desk_v)))
```

</details>

## R-05-E01

**Exercise 5.1**

For waits \(x=(2,2,5,7,9)\) minutes, calculate \(F_5(2)\), \(F_5(6)\), and \(F_5(9)\). Write R code that verifies both the counts and proportions. Explain why a repeated value must be counted twice.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate `x <= t` for each threshold and keep the denominator equal to five.

</details>
<details>
<summary>Hint 2</summary>

Count every observed row satisfying the threshold, including both occurrences of a repeated value.

</details>
<details>
<summary>Solution</summary>

At \(t=2\), two of the five observations are at or below the threshold, so \(F_5(2)=2/5=0.4\). At \(t=6\), the values 2, 2, and 5 qualify, giving \(F_5(6)=3/5=0.6\). Every value is at or below 9, so \(F_5(9)=1\).

```r
x_e01 <- c(2, 2, 5, 7, 9)
t_e01 <- c(2, 6, 9)
counts_e01 <- vapply(t_e01, function(t) sum(x_e01 <= t), integer(1))
proportions_e01 <- counts_e01 / length(x_e01)

stopifnot(identical(counts_e01, c(2L, 3L, 5L)))
stopifnot(all(abs(proportions_e01 - c(0.4, 0.6, 1)) <=
              1e-10 + 1e-8 * abs(c(0.4, 0.6, 1))))
```

The empirical distribution assigns mass (1/5) to each observation, not each distinct number. The two recorded 2s belong to two units, so omitting one would silently change the row count and denominator.

</details>

## R-05-E02

**Exercise 5.2**

For \(x=(1,3,3,8,12,20)\), find the median and the type-7 quartiles. Show the interpolation for \(p=0.25\), then verify with `quantile(..., type = 7)`. State why another named quantile rule could disagree.

<details>
<summary>Hint 1</summary>

**Hint.** With \(n=6\), compute \(h=5p+1\).

</details>
<details>
<summary>Hint 2</summary>

The lower-quartile type-7 position lies between the second and third order statistics; use its fractional part.

</details>
<details>
<summary>Solution</summary>

The ordered data already appear in order. With \(n=6\), the median is halfway between the third and fourth values: \((3+8)/2=5.5\). For \(p=0.25\), \(h=5(0.25)+1=2.25\). Thus \(j=2\), \(\gamma=0.25\), and

\[
Q_7(0.25)=0.75x_{(2)}+0.25x_{(3)}=0.75(3)+0.25(3)=3.
\]

For \(p=0.75\), \(h=4.75\), so \(Q_7(0.75)=0.25(8)+0.75(12)=11\).

```r
x_e02 <- c(1, 3, 3, 8, 12, 20)
q_e02 <- quantile(x_e02, c(0.25, 0.5, 0.75), type = 7, names = FALSE)
stopifnot(all(abs(q_e02 - c(3, 5.5, 11)) <=
              1e-10 + 1e-8 * abs(c(3, 5.5, 11))))
```

Quantiles between order statistics require a convention. Other named rules use different ranks or interpolation weights, so disagreement can be correct under different declared conventions.

</details>

## R-05-E03

**Exercise 5.3**

Starting from \(\sum_i(x_i-c)^2\), prove that

\[
\sum_i(x_i-c)^2=\sum_i(x_i-\bar{x})^2+n(\bar{x}-c)^2.
\]

Use the result to explain why the mean minimizes the sum of squared distances. Verify the identity for \(x=(1,4,7)\) and \(c=5\).

<details>
<summary>Hint 1</summary>

**Hint.** Write \(x_i-c=(x_i-\bar{x})+(\bar{x}-c)\); the cross-term contains \(\sum_i(x_i-\bar{x})\).

</details>
<details>
<summary>Hint 2</summary>

The centred deviations sum to zero, which removes the mixed term in the square expansion.

</details>
<details>
<summary>Solution</summary>

Write \(x_i-c=(x_i-\bar{x})+(\bar{x}-c)\), square, and sum:

\[
\sum_i(x_i-c)^2=\sum_i(x_i-\bar{x})^2
+2(\bar{x}-c)\sum_i(x_i-\bar{x})+n(\bar{x}-c)^2.
\]

The middle sum is \(\sum_i x_i-n\bar{x}=0\), proving the identity. The final term is nonnegative and equals zero exactly when \(c=\bar{x}\). Therefore choosing the mean minimizes the sum of squared distances; if \(n>0\), it is the unique minimizer.

For \(x=(1,4,7)\), \(\bar{x}=4\). The centered sum is \(9+0+9=18\). With \(c=5\), the left side is \(16+1+4=21\), and the right side is \(18+3(4-5)^2=21\).

```r
x_e03 <- c(1, 4, 7)
c_e03 <- 5
lhs_e03 <- sum((x_e03 - c_e03)^2)
rhs_e03 <- sum((x_e03 - mean(x_e03))^2) +
  length(x_e03) * (mean(x_e03) - c_e03)^2
stopifnot(lhs_e03 == 21, rhs_e03 == 21, lhs_e03 == rhs_e03)
```

</details>

## R-05-E04

**Exercise 5.4**

The values (3,5,7,9) are first described as every member of a four-machine finite population and then as a sample of four runs from a continuing process. Calculate the centered sum of squares, the (N)-denominator finite-population variance, and the (n-1)-denominator sample variance. Which value does `var()` return, and why do the two formulas answer different questions?

<details>
<summary>Hint 1</summary>

**Hint.** Their mean is 6. Keep the same numerator and change only the declared role and denominator.

</details>
<details>
<summary>Hint 2</summary>

The squared-deviation numerator is twenty; the two denominators are four and three.

</details>
<details>
<summary>Solution</summary>

The mean is 6 and deviations are \((-3,-1,1,3)\). Their squares sum to \(9+1+1+9=20\). For the complete finite population, \(N=4\), so the descriptive variance is \(20/4=5\). For the sample, \(n=4\), so \(s^2=20/(4-1)=20/3\approx6.667\).

```r
x_e04 <- c(3, 5, 7, 9)
ss_e04 <- sum((x_e04 - mean(x_e04))^2)
finite_variance_e04 <- ss_e04 / length(x_e04)
sample_variance_e04 <- var(x_e04)

stopifnot(ss_e04 == 20)
stopifnot(finite_variance_e04 == 5)
stopifnot(abs(sample_variance_e04 - 20 / 3) <= 1e-10 + 1e-8 * abs(20 / 3))
```

`var()` returns (20/3) because R defines it with denominator (n-1). The finite-population calculation describes all four declared machines. The sample calculation treats the four runs as observations from a wider process. Merely changing the label without a real mechanism would not justify the wider target.

</details>

## R-05-E05

**Exercise 5.5**

A sample of lengths has variance \(2.25\) square metres and SD \(1.5\) metres. Convert the measurements to centimetres using \(z=100x\). Find the new variance and SD without recomputing deviations, verify the result in R with the positive physical-length vector \((1.5,3,4.5)\) metres, and explain mathematically why adding 30 centimetres to every value changes neither spread. Do not assign that common shift a physical or measurement-origin interpretation without further context.

<details>
<summary>Hint 1</summary>

**Hint.** Apply R-THM-scale-spread with \(b=100\), then with \(b=1\).

</details>
<details>
<summary>Hint 2</summary>

Scaling multiplies SD once and variance twice; a common shift cancels after centring.

</details>
<details>
<summary>Solution</summary>

With \(z=100x\), variance multiplies by \(100^2=10{,}000\) and SD by 100. The converted variance is \(22{,}500\) square centimetres and the converted SD is 150 centimetres. One physically admissible vector is \((1.5,3,4.5)\) metres: its deviations from 3 metres are \((-1.5,0,1.5)\), whose squared sum is 4.5 square metres, so its sample variance is \(4.5/2=2.25\) square metres.

```r
x_e05 <- c(1.5, 3, 4.5)
conversion_factor_e05 <- 100
z_e05 <- conversion_factor_e05 * x_e05
shifted_e05 <- z_e05 + 30
centered_sum_e05 <- sum((x_e05 - 3)^2)
expected_variance_m2_e05 <- 4.5 / 2
expected_sd_m_e05 <- 1.5
expected_variance_cm2_e05 <- conversion_factor_e05^2 * expected_variance_m2_e05
expected_sd_cm_e05 <- conversion_factor_e05 * expected_sd_m_e05

stopifnot(identical(x_e05, c(1.5, 3, 4.5)))
stopifnot(identical(z_e05, c(150, 300, 450)))
stopifnot(identical(shifted_e05, c(180, 330, 480)))
stopifnot(abs(centered_sum_e05 - 4.5) <= 1e-10 + 1e-8 * 4.5)
stopifnot(abs(var(x_e05) - expected_variance_m2_e05) <=
            1e-10 + 1e-8 * expected_variance_m2_e05)
stopifnot(abs(sd(x_e05) - expected_sd_m_e05) <=
            1e-10 + 1e-8 * expected_sd_m_e05)
stopifnot(abs(var(z_e05) - expected_variance_cm2_e05) <=
            1e-10 + 1e-8 * expected_variance_cm2_e05)
stopifnot(abs(sd(z_e05) - expected_sd_cm_e05) <=
            1e-10 + 1e-8 * expected_sd_cm_e05)
stopifnot(var(shifted_e05) == var(z_e05), sd(shifted_e05) == sd(z_e05))
```

Mathematically adding 30 centimetres shifts every value and its mean equally, leaving every deviation and both spread measures unchanged. The algebra establishes a common shift only. Whether such an addition represents a change of measurement origin or a physical change requires contextual justification that this exercise does not supply.

</details>

## R-05-E06

**Exercise 5.6**

Compare \(A=(2,4,6)\) and \(B=(0,4,8)\). Report mean, median, type-7 quartiles, sample variance, SD, and range. Write a two-sentence conclusion that says what the equal means hide without claiming a population difference.

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact centered sums 8 and 32 as an independent check on `var()`.

</details>
<details>
<summary>Hint 2</summary>

Both means equal four, but the second centered sum is four times the first.

</details>
<details>
<summary>Solution</summary>

Both groups have mean and median 4. Type-7 quartiles for A are 3 and 5; for B they are 2 and 6. The sample variances are 4 and 16, the SDs are 2 and 4, and the ranges are \(6-2=4\) and \(8-0=8\).

```r
a_e06 <- c(2, 4, 6)
b_e06 <- c(0, 4, 8)
summary_e06 <- rbind(
  A = c(mean = mean(a_e06), median = median(a_e06),
        q1 = quantile(a_e06, 0.25, type = 7, names = FALSE),
        q3 = quantile(a_e06, 0.75, type = 7, names = FALSE),
        variance = var(a_e06), sd = sd(a_e06), range = diff(range(a_e06))),
  B = c(mean = mean(b_e06), median = median(b_e06),
        q1 = quantile(b_e06, 0.25, type = 7, names = FALSE),
        q3 = quantile(b_e06, 0.75, type = 7, names = FALSE),
        variance = var(b_e06), sd = sd(b_e06), range = diff(range(b_e06)))
)
stopifnot(identical(unname(summary_e06[, "mean"]), c(4, 4)))
stopifnot(identical(unname(summary_e06[, "variance"]), c(4, 16)))
stopifnot(sum((a_e06 - mean(a_e06))^2) == 8)
stopifnot(sum((b_e06 - mean(b_e06))^2) == 32)
```

For these two listed three-value groups, equal means and medians hide that every spread measure shown is twice as large on the original scale for B, while B's variance is four times A's. This is an empirical description of the given values; no population mechanism was supplied.

</details>

## R-05-E07

**Exercise 5.7**

A report compares group means 6.1 and 7.6 minutes using bars that encode the absolute means by length, but whose vertical axis runs from 6.0 to 7.7. The groups have 12 and 9 observations, and the second group contains a value of 18 that the plot omits. Diagnose three problems and specify a repaired display, including its numerical and prose alternatives. Explain when a point or raw-value display may legitimately use a nonzero lower limit.

<details>
<summary>Hint 1</summary>

**Hint.** Bar length needs a zero baseline for absolute means. A point position may use a clearly labeled common contextual scale, but the missing tail, counts, and within-group spread still need an audit.

</details>
<details>
<summary>Hint 2</summary>

Restore the omitted tail and group counts; distinguish an absolute bar length from a point position.

</details>
<details>
<summary>Solution</summary>

First, because bar length encodes each absolute mean from its baseline, truncating the vertical axis at 6.0 makes the 1.5-minute difference occupy most of the visible lengths and misrepresents the magnitudes. Bars encoding absolute means require a zero baseline. Second, omitting the value 18 conceals the second group's upper tail and may even change its displayed mean if the calculation silently excludes it. Third, a mean-only display hides within-group spread and overlap; the unequal counts 12 and 9 are also unavailable to the reader.

A repaired bar chart would start at zero, show both absolute means, and state that its bars encode magnitude by length. A more informative repair would show every observed value in both groups on one clearly labeled common contextual minute range that includes 18, using distinct shapes or line types as well as color. A point or raw-value display may use a nonzero lower limit because position, rather than length from the baseline, carries the value; the chosen range must remain common to the groups and preserve relevant context, overlap, and tails. The display would print \(n=12\) and \(n=9\), state all exclusions, and accompany the graphic with a table of mean, median, type-7 quartiles, SD, minimum, and maximum. The numerical alternative is that complete table plus ordered values or fixed-threshold counts. The prose alternative should name the 1.5-minute mean difference, describe overlap and spread, and explicitly locate the 18-minute tail.

The repair still supports only the comparison allowed by the group mechanism. It cannot turn self-selection into random assignment or establish a wider population target.

</details>

## R-05-E08

**Exercise 5.8**

For the original `R05-WAIT-V1` fixture, write a distribution-aware paragraph comparing North and South. Include counts, means, medians, type-7 quartiles, SDs, and the 18-minute tail. State the target and explain why the paragraph cannot establish either a wider population pattern or a causal route effect.

<details>
<summary>Hint 1</summary>

**Hint.** Use `plot_summary`, then connect each numerical feature to the complete empirical distributions and their invented mechanism.

</details>
<details>
<summary>Hint 2</summary>

Declare the complete finite-fixture scope before comparing center, the type-7 interquartile interval and the long upper tail.

</details>
<details>
<summary>Solution</summary>

The following independently reconstructs the table used in the paragraph.

```r
summary_e08 <- rbind(
  North = c(n = length(north), mean = mean(north), median = median(north),
            q1 = quantile(north, 0.25, type = 7, names = FALSE),
            q3 = quantile(north, 0.75, type = 7, names = FALSE),
            sd = sd(north), min = min(north), max = max(north)),
  South = c(n = length(south), mean = mean(south), median = median(south),
            q1 = quantile(south, 0.25, type = 7, names = FALSE),
            q3 = quantile(south, 0.75, type = 7, names = FALSE),
            sd = sd(south), min = min(south), max = max(south))
)
stopifnot(sum(summary_e08[, "n"]) == 21)
stopifnot(abs(summary_e08["North", "mean"] - 68 / 9) <= 1e-10 + 1e-8 * abs(68 / 9))
stopifnot(abs(summary_e08["South", "mean"] - 73 / 12) <= 1e-10 + 1e-8 * abs(73 / 12))
stopifnot(identical(unname(summary_e08[, "max"]), c(18, 11)))
```

For the complete 21-visit synthetic fixture, North has 9 listed waits and South has 12. North's mean is 7.56 minutes, median 6, type-7 quartiles 5 and 8, and sample SD about 4.22 minutes; South's mean is 6.08, median 5.5, type-7 quartiles 4.75 and 7.25, and sample SD about 2.31 minutes. The interval between interpolated quartiles need not contain exactly half the observed values. Much of the observed distributions overlaps, but North includes an isolated 18-minute wait beyond South's maximum of 11; that value lifts North's mean and SD more strongly than its median and quartiles.

The target in that paragraph is exactly the listed invented visits. No random sample from a wider population and no assignment of visits to routes was supplied. Consequently the paragraph neither generalizes the difference to future visits nor attributes it causally to route.

</details>

Complete explained solutions are available at [Solutions: Distributions, Groups, and Honest Graphics](solutions-distributions-groups-graphics.md). Each solution document reruns independently.


## R-05-E09

**Exercise 5.9**

For original synthetic version-1 waits `c(2, 3, 4, 5, 6)` minutes, replace only the final value by sixty. Calculate both means and medians. Explain what a numerical graphic alternative must retain and why the large value should not be dropped merely to obtain a compact display.

<details>
<summary>Hint 1</summary>

The replacement increases the total by fifty four minutes.

</details>
<details>
<summary>Hint 2</summary>

The middle ordered value remains four while the upper tail moves away.

</details>
<details>
<summary>Solution</summary>

The original total is twenty, so the mean and median are both four minutes. The revised total is seventy four, giving mean 14.8, while the median stays four. A numerical alternative should list all five values, identify which version is displayed, and retain the revised maximum of sixty. The mean and median describe different empirical features. Deleting the long wait would redefine the dataset and hide the tail being investigated rather than repair the display.

</details>

## R-05-E10

**Exercise 5.10**

A histogram partitions twenty complete synthetic observations into intervals of widths one and three declared units, containing five and fifteen observations. If area represents relative frequency, calculate both heights. Explain why heights five and fifteen would represent another convention.

<details>
<summary>Hint 1</summary>

Divide each count by twenty to obtain relative frequency.

</details>
<details>
<summary>Hint 2</summary>

Density height is relative frequency divided by bin width.

</details>
<details>
<summary>Solution</summary>

The relative frequencies are one quarter and three quarters. Heights are $(1/4)/1=1/4$ and $(3/4)/3=1/4$ per declared unit. Equal heights give the wider bar three times the area. Heights five and fifteen would produce areas five and forty five, a one-to-nine ratio rather than the required one-to-three. A table containing boundaries, widths, counts, proportions and heights makes the graphical rule accessible without seeing the bars.

</details>

## Sources and authorship

R semantics were checked in the installed R 4.6.0 primary help pages for `var`/`cov`, `sd`, `quantile`, `ecdf`, `hist`, `stripchart`, `plot.stepfun`, and `grDevices::pdf`, and against R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24), especially the sections on indexed selections, factors, arrays, and graphics. The claims about R's (n-1) denominator, type-7 default, empirical cumulative proportions, histogram cell boundaries, and missing-value behavior are limited to those documented interfaces. Mathematical identities are proved in the chapter.

The fixture, exposition, proofs, investigation, graphics code, and exercises are original Math Atlas material. They do not adapt a third-party dataset or exercise. This chapter is licensed CC BY-SA 4.0. No human review is claimed in this draft.

## Summary

A distribution contains more information than its mean. Counts, quantile conventions, spread, tails and units guide both summaries and graphics. Variance and SD use different units, and their denominator depends on the target. Honest numerical and prose alternatives retain omitted tails and group sizes rather than allowing axes or bins to choose the story.
