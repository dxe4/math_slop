
# Comparing Proportions and Means

Two columns of numbers do not tell us how to compare them. The rows might be two independent samples, two measurements on the same people, or Bernoulli outcomes whose only possible values are success and failure. Those structures create different statistics and different sources of uncertainty. Choosing a method begins with the mechanism that produced the rows.

This chapter turns that principle into a working analysis. We will derive the calculations used by R, distinguish an exact one-sample result from approximations, and learn where familiar formulas fail. The recurring question is:

> Which comparison matches the way the observations were obtained?

## The design and estimand ledger

Before calculating, write four lines.

| Ledger entry | Question to answer |
| --- | --- |
| Unit | What entity was independently sampled or followed? |
| Mechanism | Were units sampled independently, paired by design, or observed as Bernoulli trials? |
| Estimand | Is the target one mean, a mean paired difference, a difference of independent means, one success probability, or a difference of probabilities? |
| Conditions | Which distributional, independence, and variance assumptions support the proposed procedure? |

We use earlier ideas explicitly. A **sampling distribution** describes how a statistic varies under a declared repeated-data mechanism. A **standard error** is the standard deviation of that statistic under the mechanism; an estimated standard error replaces unknown quantities with sample estimates. A confidence procedure has a repeated-sampling coverage property under its hypotheses. A small p-value concerns compatibility with a specified null model. Neither answers whether a difference matters in practice.

The examples are original synthetic fixtures created by Math Atlas, version 1, under CC BY-SA 4.0. Their literal values in this document are their canonical source. Each ID is a unique key. Numeric outcomes use minutes, every row is complete, and there are no missing-value codes or exclusions unless a section explicitly says otherwise. The numbers demonstrate reasoning and software behavior; they are not evidence about a real service.

## One mean when the population spread is unknown

Suppose $X_1,\ldots,X_n$ are random observations and $x_1,\ldots,x_n$ are their realized values. Write

\[
\bar X=\frac{1}{n}\sum_{i=1}^n X_i,
\qquad
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar X)^2.
\]

R's `var()` uses the $n-1$ denominator and `sd()` returns the nonnegative square root. The estimated standard error of the sample mean is $s/\sqrt n$. Estimating the spread changes the reference distribution: a normal critical value is no longer exact for a small normal sample.

**Definition R-DEF-t-distribution (Student t distribution).** First take a positive integer $\nu$. If $V_1,\ldots,V_\nu$ are independent standard normal random variables, then

\[
U=V_1^2+\cdots+V_\nu^2
\]

has a **chi-square distribution with $\nu$ degrees of freedom**. Here the degrees of freedom count the independent standard-normal components whose squares are added. If a further standard normal variable $Z$ is independent of $U$, then

\[
\frac{Z}{\sqrt{U/\nu}}
\]

has the Student $t$ distribution with $\nu$ degrees of freedom. Its tails are heavier than those of a standard normal distribution because the denominator is random. The t family has a standard extension from positive integer $\nu$ to every positive real value of $\nu$. We import that extension without deriving it; a construction through gamma functions requires calculus beyond this chapter. Welch's method uses this positive-real extension when its approximate degrees of freedom are noninteger, such as 5.415 in the example below. The exact one-sample normal theorem uses the integer value $n-1$.

**Theorem R-THM-normal-t (exact normal one-sample t pivot; imported theorem).** If $X_1,\ldots,X_n$ are iid $N(\mu,\sigma^2)$, with $n\geq2$ and $\sigma>0$, then

\[
T=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}.
\]

The word *exact* applies only under these hypotheses. It does not mean that every collection of measurements is normal or independent.

Here is the imported probability result behind the theorem. For iid normal observations,

\[
Z=\frac{\sqrt n(\bar X-\mu)}{\sigma}\sim N(0,1),
\qquad
U=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},
\]

and $Z$ is independent of $U$. The last independence is special to normal sampling. We do not pretend to prove it with the elementary tools developed so far. Substitution gives

\[
\frac{Z}{\sqrt{U/(n-1)}}
=\frac{\bar X-\mu}{S/\sqrt n},
\]

which is a $t_{n-1}$ variable by definition. Thus a two-sided $100(1-\alpha)\%$ confidence interval is

\[
\bar x\ \pm\ t_{n-1,1-\alpha/2}\frac{s}{\sqrt n}.
\]

`qt(probability, df)` returns a t quantile. `t.test(x, mu = 0)` computes a one-sample test and interval. In the returned object, `$` selects a named component such as `p.value`; `unname()` removes the display label so that we can compare the numeric value directly. A confidence interval is a property of the procedure over repetitions; after observing data, the interval either contains the fixed target or it does not.

## Worked example 1: pairing turns two columns into one variable

Five service desks are timed under an old and a revised check-in screen. The desk is the sampled unit, and both measurements belong to the same desk. Define the paired difference as old minus revised time.

**Definition R-DEF-paired-difference (paired difference).** For matched measurements $A_i$ and $B_i$ on unit $i$, a paired difference is $D_i=A_i-B_i$, with the subtraction order declared before looking at the result. The mean-difference estimand is $\mu_D=E(D_i)$ under an iid sampling model for units.

Use the following complete fixture.

| Desk ID | Old time (minutes) | Revised time (minutes) | Old − revised (minutes) |
| --- | ---: | ---: | ---: |
| d01 | 11 | 10 | 1 |
| d02 | 14 | 12 | 2 |
| d03 | 18 | 15 | 3 |
| d04 | 20 | 16 | 4 |
| d05 | 25 | 20 | 5 |

The differences are $1,2,3,4,5$. Their mean is 3. The squared deviations from 3 are $4,1,0,1,4$, which sum to 10, so

\[
s_D^2=\frac{10}{5-1}=2.5,
\qquad s_D=\sqrt{2.5},
\qquad \widehat{SE}(\bar D)=\frac{\sqrt{2.5}}{\sqrt5}=\sqrt{0.5}.
\]

The paired t procedure is precisely a one-sample t procedure applied to the differences. In `t.test`, `paired = TRUE` aligns values by their vector positions; R cannot know whether those positions refer to the same unit, so we validate IDs and lengths first. `unique()` retains distinct IDs, `anyNA()` detects missing values, and `stopifnot()` stops if a stated check is false. The small `tol()` function below implements the book's absolute-plus-relative rule for comparing floating-point results.

```r
# Fixture R12-PAIR-v1: one complete row per desk; times are minutes.
desk_id <- c("d01", "d02", "d03", "d04", "d05")
old_minutes <- c(11, 14, 18, 20, 25)
revised_minutes <- c(10, 12, 15, 16, 20)

stopifnot(length(unique(desk_id)) == 5L)
stopifnot(length(old_minutes) == length(revised_minutes))
stopifnot(!anyNA(old_minutes), !anyNA(revised_minutes))

difference_minutes <- old_minutes - revised_minutes
mean_difference <- mean(difference_minutes)
sd_difference <- sd(difference_minutes)
se_difference <- sd_difference / sqrt(length(difference_minutes))

paired_fit <- t.test(old_minutes, revised_minutes, paired = TRUE)
difference_fit <- t.test(difference_minutes, mu = 0)

tol <- function(actual, expected) {
  abs(actual - expected) <= 1e-10 + 1e-8 * abs(expected)
}

stopifnot(all(difference_minutes == 1:5))
stopifnot(tol(mean_difference, 3))
stopifnot(tol(sd_difference, sqrt(2.5)))
stopifnot(tol(se_difference, sqrt(0.5)))
stopifnot(tol(unname(paired_fit$statistic), unname(difference_fit$statistic)))
stopifnot(tol(paired_fit$p.value, difference_fit$p.value))
stopifnot(all(tol(paired_fit$conf.int, difference_fit$conf.int)))
stopifnot(tol(unname(paired_fit$statistic), 4.24264068711929))
stopifnot(tol(paired_fit$p.value, 0.0132355995636827))
stopifnot(all(tol(unname(paired_fit$conf.int), c(1.03675683852244, 4.96324316147756))))
```

Under the exact model, the differences $D_i$, not the ten marginal measurements, must be iid normal with positive variance. Possible dependence *within* a desk is a reason to pair. Independence is required *between* sampled desks. The estimate is a 3-minute reduction, the 95% interval for old minus revised is approximately 1.037 to 4.963 minutes, and the two-sided p-value for $H_0:\mu_D=0$ is approximately 0.01324. These synthetic results say nothing about real desks.

Pairing does not magically remove bias. If every old time was measured during a rush and every revised time during a quiet period, period and screen are confounded. Nor does a t interval prove normality. With five differences, a gross outlier or strong asymmetry deserves close attention.

## Adverse case: breaking the pairs

If we call the ten measurements independent, we throw away the within-desk link and analyze the wrong repeated mechanism. An unpaired Welch call answers a question about two independently sampled groups. Here the desks are the same, so that mechanism is false.

Shuffling `revised_minutes` is worse: it invents different pairs. A paired analysis after such a shuffle can change the standard error while preserving both marginal samples exactly. The row keys, not the software option alone, establish the pairing. A safe workflow sorts or matches on validated unique keys, confirms exact agreement, and only then subtracts.

## Worked example 2: two independently sampled means

Now suppose two service routes independently sample different requests. Route A has six requests and Route B has five. One row is one request; within each route the model treats service times as iid, and the two samples are independent of one another. The estimand is $\mu_A-\mu_B$, measured in minutes.

| Route A request | Minutes | Route B request | Minutes |
| --- | ---: | --- | ---: |
| a01 | 12 | b01 | 13 |
| a02 | 14 | b02 | 17 |
| a03 | 15 | b03 | 18 |
| a04 | 15 | b04 | 22 |
| a05 | 16 | b05 | 24 |
| a06 | 18 |  |  |

The estimates are $\bar x_A=15$, $s_A^2=4$, $\bar x_B=18.8$, and $s_B^2=18.7$. We do not pool the variances. The `intersect()` check below returns any IDs shared by both groups; its length must be zero for this fixture.

**Definition R-DEF-welch-standard-error (Welch estimated standard error).** For two independent samples with positive sample variances, the Welch estimated standard error of $\bar X_1-\bar X_2$ is

\[
\widehat{SE}_W=\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}.
\]

The Welch–Satterthwaite degrees of freedom are

\[
\nu_W=
\frac{(s_1^2/n_1+s_2^2/n_2)^2}
{(s_1^2/n_1)^2/(n_1-1)+(s_2^2/n_2)^2/(n_2-1)}.
\]

**Claim R-CLAIM-welch (Welch comparison; approximation).** For independent groups with positive sample variances and a defensible sampling model, the statistic

\[
\frac{(\bar X_1-\bar X_2)-(\mu_1-\mu_2)}{\widehat{SE}_W}
\]

is compared with a t distribution having $\nu_W$ degrees of freedom as an approximation. Finite moments support large-sample reasoning, and approximately normal groups can make it useful in smaller samples, but unequal unknown variances prevent this from being the exact one-sample t pivot. Independence and representative sampling are design conditions, not outputs of `t.test`.

```r
# Fixture R12-WELCH-v1: independent request samples, minutes, no missing rows.
route_a_id <- c("a01", "a02", "a03", "a04", "a05", "a06")
route_b_id <- c("b01", "b02", "b03", "b04", "b05")
route_a_minutes <- c(12, 14, 15, 15, 16, 18)
route_b_minutes <- c(13, 17, 18, 22, 24)

stopifnot(length(unique(route_a_id)) == 6L)
stopifnot(length(unique(route_b_id)) == 5L)
stopifnot(length(intersect(route_a_id, route_b_id)) == 0L)
stopifnot(!anyNA(route_a_minutes), !anyNA(route_b_minutes))

n_a <- length(route_a_minutes)
n_b <- length(route_b_minutes)
var_a <- var(route_a_minutes)
var_b <- var(route_b_minutes)
estimate_w <- mean(route_a_minutes) - mean(route_b_minutes)
se_w <- sqrt(var_a / n_a + var_b / n_b)
df_w <- (var_a / n_a + var_b / n_b)^2 /
  ((var_a / n_a)^2 / (n_a - 1) + (var_b / n_b)^2 / (n_b - 1))

welch_fit <- t.test(route_a_minutes, route_b_minutes, var.equal = FALSE)

stopifnot(tol(mean(route_a_minutes), 15))
stopifnot(tol(mean(route_b_minutes), 18.8))
stopifnot(tol(var_a, 4), tol(var_b, 18.7))
stopifnot(tol(estimate_w, -3.8))
stopifnot(tol(se_w, 2.09920619853305))
stopifnot(tol(df_w, 5.41546413155636))
stopifnot(tol(unname(welch_fit$estimate[1] - welch_fit$estimate[2]), estimate_w))
stopifnot(tol(unname(welch_fit$stderr), se_w))
stopifnot(tol(unname(welch_fit$parameter), df_w))
stopifnot(tol(welch_fit$p.value, 0.12554129548359))
stopifnot(all(tol(unname(welch_fit$conf.int), c(-9.07400984394631, 1.47400984394631))))
```

The estimated difference A minus B is −3.8 minutes, with estimated SE 2.099 and approximate degrees of freedom 5.415. The approximate 95% interval is −9.074 to 1.474 minutes and the two-sided p-value for equal means is about 0.1255. The interval includes differences that could matter in either direction, so “no difference” is too strong. A bounded statement is that this small synthetic sample is too imprecise to determine the direction relative to a practical threshold.

Setting `var.equal = TRUE` invokes a pooled-variance procedure. That procedure requires a common population variance for its exact normal-theory claim. Similar-looking sample SDs do not establish equality, and choosing pooling because it gives the preferred p-value invalidates the stated procedure. Welch is the default in R and avoids the common-variance assumption, though it remains approximate.

## Proportions are means of Bernoulli variables

A Bernoulli random variable is 1 for success and 0 for failure, with $P(X=1)=p$. Its expectation is $p$ and variance is $p(1-p)$. Therefore the sample proportion

\[
\hat p=\frac{1}{n}\sum_{i=1}^n X_i
\]

is also the sample mean of the zero-one outcomes.

**Definition R-DEF-proportion-comparison (difference of independent proportions).** For independent iid Bernoulli groups with success probabilities $p_1$ and $p_2$, the estimand is $p_1-p_2$, estimated by $\hat p_1-\hat p_2$. The simple unpooled Wald estimated standard error is

\[
\widehat{SE}_{Wald}=\sqrt{\frac{\hat p_1(1-\hat p_1)}{n_1}+
\frac{\hat p_2(1-\hat p_2)}{n_2}}.
\]

**Claim R-CLAIM-proportions (Wald proportion comparison; approximation).** A Wald interval takes the estimate plus or minus a normal critical value times this plug-in SE. It is a large-sample approximation for independent iid Bernoulli groups. It can have poor coverage with small counts or probabilities near 0 or 1. At an endpoint, its estimated uncertainty can collapse to zero even though the true success probability is unknown.

Consider 7 successes among 10 independently sampled Route A requests and 3 among 12 Route B requests. The estimated probabilities are 0.70 and 0.25, a difference of 0.45. The Wald estimated SE is 0.1914 and its approximate 95% interval is 0.0749 to 0.8251. This calculation is descriptive unless the iid Bernoulli sampling model connects these requests to a target process. `qnorm(0.975)` supplies the 97.5th percentile of the standard normal distribution, the two-sided 95% critical value.

```r
# Fixture R12-BERNOULLI-v1: 1=resolved on first contact, 0=not resolved.
success_a <- c(1L, 1L, 0L, 1L, 1L, 0L, 1L, 1L, 0L, 1L)
success_b <- c(1L, 0L, 0L, 1L, 0L, 0L, 1L, 0L, 0L, 0L, 0L, 0L)

stopifnot(all(success_a %in% 0:1), all(success_b %in% 0:1))
stopifnot(!anyNA(success_a), !anyNA(success_b))

p_hat_a <- mean(success_a)
p_hat_b <- mean(success_b)
prop_difference <- p_hat_a - p_hat_b
wald_se <- sqrt(
  p_hat_a * (1 - p_hat_a) / length(success_a) +
    p_hat_b * (1 - p_hat_b) / length(success_b)
)
wald_interval <- prop_difference + c(-1, 1) * qnorm(0.975) * wald_se

stopifnot(sum(success_a) == 7L, sum(success_b) == 3L)
stopifnot(tol(p_hat_a, 0.7), tol(p_hat_b, 0.25))
stopifnot(tol(prop_difference, 0.45))
stopifnot(tol(wald_se, 0.191376592090046))
stopifnot(all(tol(wald_interval, c(0.0749087720194961, 0.825091227980504))))
```

For a *single* Bernoulli probability, `binom.test(x, n)` supplies an exact binomial test and a Clopper–Pearson interval. “Exact” here means its coverage is at least the stated level under the iid Bernoulli model; discreteness usually makes it conservative. It does not make the two-group Wald interval exact, and it does not repair dependent trials.

The endpoint failure is stark. With 0 successes in 8 trials, $\hat p=0$, so the Wald SE is 0 and the nominal interval is $[0,0]$. But 0 observed successes does not prove $p=0$. The two-sided 95% Clopper–Pearson interval from `binom.test` is approximately $[0,0.3694]$. At this boundary, its upper endpoint solves $(1-p)^8=0.025$.

```r
# Adverse Bernoulli endpoint: no observed successes among eight trials.
endpoint_x <- 0L
endpoint_n <- 8L
endpoint_p_hat <- endpoint_x / endpoint_n
endpoint_wald_se <- sqrt(endpoint_p_hat * (1 - endpoint_p_hat) / endpoint_n)
endpoint_exact <- binom.test(endpoint_x, endpoint_n, conf.level = 0.95)
manual_upper <- 1 - 0.025^(1 / endpoint_n)

stopifnot(endpoint_p_hat == 0, endpoint_wald_se == 0)
stopifnot(tol(unname(endpoint_exact$conf.int[1]), 0))
stopifnot(tol(unname(endpoint_exact$conf.int[2]), 0.369416647552819))
stopifnot(tol(unname(endpoint_exact$conf.int[2]), manual_upper))
```

## R-12-I01

### Guided investigation: preserve or erase the pairing

**Question.** Eight operators complete the same task before and after a workflow change. How does the uncertainty statement change when we respect the operator pairing versus falsely treat the columns as independent groups?

**Prediction.** Because the before and after values move together by operator, subtracting within operators should remove stable between-operator differences. The paired estimated SE should be smaller here.

**Controls.** One row is one operator; `operator_id` is unique; before and after are minutes; difference means before minus after; all eight pairs are complete; no row is excluded. The target is the mean paired change for an iid process of operators like those sampled. The exact small-sample t claim additionally requires iid normal differences with positive variance. The unpaired call is deliberately retained as a rejected comparison because its independent-group mechanism is false.

`data.frame()` assembles the numerical comparison table. `rbind()` stacks the before and after vectors into plot rows, and `matplot(..., type = "l")` draws one line per operator; `axis()` labels the two occasions and `points()` adds visible endpoints. The table remains the exact numerical alternative to the graphic. For an inspectable graphics lifecycle, `tempfile()` supplies a unique relative PDF name inside `getwd()`, `grDevices::pdf()` opens that named device, and `grDevices::dev.off()` closes it. The code checks the device state and artifact before deleting the temporary file.

```r
# Fixture R12-I01-v1: complete paired operator times in minutes.
operator_id <- c("op01", "op02", "op03", "op04", "op05", "op06", "op07", "op08")
before_minutes <- c(32, 28, 35, 31, 40, 29, 37, 33)
after_minutes <- c(28, 29, 30, 29, 33, 29, 34, 29)
change_minutes <- before_minutes - after_minutes

stopifnot(length(unique(operator_id)) == 8L)
stopifnot(!anyNA(before_minutes), !anyNA(after_minutes))

paired_i <- t.test(before_minutes, after_minutes, paired = TRUE)
unpaired_i <- t.test(before_minutes, after_minutes, paired = FALSE)
investigation_table <- data.frame(
  method = c("Paired by operator", "Incorrect independent groups"),
  estimate_minutes = c(mean(change_minutes), mean(before_minutes) - mean(after_minutes)),
  estimated_SE_minutes = c(unname(paired_i$stderr), unname(unpaired_i$stderr)),
  interval_low = c(paired_i$conf.int[1], unpaired_i$conf.int[1]),
  interval_high = c(paired_i$conf.int[2], unpaired_i$conf.int[2])
)

stopifnot(tol(mean(change_minutes), 3))
stopifnot(tol(sd(change_minutes), 2.61861468283191))
stopifnot(tol(unname(paired_i$stderr), 0.925820099772551))
stopifnot(tol(paired_i$p.value, 0.014245753043853))
stopifnot(all(tol(unname(paired_i$conf.int), c(0.810783339465774, 5.18921666053423))))
stopifnot(tol(unname(unpaired_i$stderr), 1.62431304160955))
stopifnot(tol(unpaired_i$p.value, 0.0925608743304775))
stopifnot(all(tol(unname(unpaired_i$conf.int), c(-0.587220031961167, 6.58722003196117))))
stopifnot(all(tol(investigation_table$estimate_minutes, c(3, 3))))
stopifnot(all(tol(
  investigation_table$estimated_SE_minutes,
  c(0.925820099772551, 1.62431304160955)
)))
falling_lines <- sum(after_minutes < before_minutes)
rising_lines <- sum(after_minutes > before_minutes)
flat_lines <- sum(after_minutes == before_minutes)
stopifnot(falling_lines == 6L, rising_lines == 1L, flat_lines == 1L)
stopifnot(falling_lines + rising_lines + flat_lines == length(operator_id))

# The table is the numerical alternative to the plot.
print(investigation_table, row.names = FALSE)
plot_directory <- getwd()
plot_path <- basename(tempfile(
  pattern = "r12-i01-",
  tmpdir = plot_directory,
  fileext = ".pdf"
))
device_before_plot <- grDevices::dev.cur()
grDevices::pdf(file = plot_path, width = 7, height = 5)
device_while_plotting <- grDevices::dev.cur()
stopifnot(as.integer(device_while_plotting) != as.integer(device_before_plot))
stopifnot(identical(names(device_while_plotting), "pdf"))
matplot(
  rbind(before_minutes, after_minutes),
  type = "l",
  lty = rep(c(1, 2), length.out = 8),
  col = rep(c("black", "grey50"), length.out = 8),
  xaxt = "n",
  xlab = "Measurement occasion",
  ylab = "Completion time (minutes)"
)
axis(1, at = 1:2, labels = c("Before", "After"))
points(rep(1:2, each = 8), c(before_minutes, after_minutes), pch = 16)
device_after_close <- grDevices::dev.off()
plot_info <- file.info(plot_path)
stopifnot(file.exists(plot_path))
stopifnot(is.finite(plot_info$size), plot_info$size > 0)
stopifnot(identical(
  as.integer(grDevices::dev.cur()),
  as.integer(device_before_plot)
))
stopifnot(identical(
  as.integer(device_after_close),
  as.integer(device_before_plot)
))
stopifnot(identical(
  dirname(normalizePath(plot_path, mustWork = TRUE)),
  normalizePath(plot_directory, mustWork = TRUE)
))
unlink(plot_path)
stopifnot(!file.exists(plot_path))
```

**Interpretation.** Both methods report the same 3-minute point difference because the two column means are unchanged. The paired SE is 0.9258 minutes and the 95% interval is 0.8108 to 5.1892. The false independent-groups SE is 1.6243 and its interval crosses zero. The plot connects each operator's two values; six lines fall, one rises, and one is horizontal. Line type and shade vary redundantly, while the table gives the exact summaries.

**Failure and boundary.** The narrower paired interval is justified by the design, not by preferring its p-value. If IDs were lost, reconstructing pairs by row order would be unsupported. If operators influenced one another, or if change depended strongly on an uncontrolled common time trend, the iid-difference model would also be doubtful. The honest response could be a descriptive paired summary with no t-based generalization.

**Reference response.** Preserve validated operator IDs, calculate before minus after once per operator, and analyze those eight differences. Reject the independent-groups procedure because its repeated mechanism resamples sixteen unrelated units, unlike the actual design. Report the 3-minute estimate, 0.8108-to-5.1892 model-based interval, the normal-difference condition, and the possibility of period confounding.

## R-12-P01

### Project: three comparisons, three mechanisms

Prepare a rerunnable analysis of original literal synthetic data with these components:

1. Two independently sampled service-time groups under a declared iid process. State the unit, target $\mu_1-\mu_2$, sign, units, missingness policy, and practical threshold. Choose and justify Welch or a decision to refrain.
2. A separately identified paired-data alternative. Preserve keys, define the subtraction order, and use a paired interval/test only if the design supports iid differences. Do not resample or permute individual rows as though pairs did not exist.
3. A Bernoulli success scenario. State what success means and estimate $p_1$, $p_2$, and $p_1-p_2$. Diagnose whether a simple Wald interval is credible; use `binom.test` for an exact one-sample boundary check when useful.
4. A sensitivity analysis that changes one service time to a plausible skewed value. Explain what changes and what remains a design fact.

Submit a design/estimand ledger, raw fixtures with provenance and schema, hand checks, executable base-R code with assertions, numerical results, an uncertainty statement, and a conclusion relative to a predeclared practical threshold. Include at least one method you rejected and why. Different conclusions can be correct when their mechanism and limitations are explicit.

The project is worth 20 points: mechanism and estimand 4; method and hypotheses 5; numerical, hand, and code checks 4; uncertainty and practical threshold 4; honest failure interpretation 3. Passing is 14, with at least 3 points in both the mechanism/estimand and method/hypotheses categories. A well-supported decision to refrain from inference can earn full credit.

## Core exercises

## Worked example 3: one paired variable, with units intact

For the exercise's four matched before/after pairs, define improvement as before minus after. The difference vector is $(1,2,-1,4)$ minutes. Its mean is $6/4=1.5$ minutes. Centering gives $(-0.5,0.5,-2.5,2.5)$, so the sum of squared centered differences is thirteen square minutes. The sample variance is $13/3$ square minutes and the estimated standard error of the mean difference is $\sqrt{(13/3)/4}=\sqrt{13/12}$ minutes.

An exact paired-$t$ interval under iid normal differences with positive variance is
$1.5\pm t_{3,0.975}\sqrt{13/12}$.
The independence premise concerns the four matched units. No premise says a unit's before and after readings are independent; their dependence is precisely why the difference is the analysis variable. Four differences are four units of replication, not eight independently sampled people.

If the sign convention changes to after minus before, every difference changes sign. The sample variance and estimated standard error remain unchanged, while the mean becomes $-1.5$ and an interval $[L,U]$ becomes $[-U,-L]$. The substantive improvement described is unchanged when the sign definition is reported. A positive value with the first convention and a negative value with the second are compatible descriptions of the same records. This is an algebraic transformation, separate from whether the normal-difference model is credible for a real collection of four units.

<details>
<summary>Solution setup for the original exercises</summary>

These solutions begin with the mechanism and estimand because a correct calculation cannot rescue a comparison of the wrong units. All fixtures and answers are original Math Atlas material created by Math Atlas, version 1, licensed CC BY-SA 4.0. Literal vectors are the canonical source. IDs are unique keys; time is measured in minutes; Bernoulli variables use 1 for the declared success and 0 otherwise; all rows are complete with no missing codes or exclusions.

The executable blocks run in document order in a fresh R process. This setup defines the comparison helper and the exercise fixtures rather than borrowing state from the chapter.

```r
tol <- function(actual, expected) {
  abs(actual - expected) <= 1e-10 + 1e-8 * abs(expected)
}

# Core-exercise fixtures, complete and synthetic.
exercise_before <- c(9, 12, 11, 15)
exercise_after <- c(8, 10, 12, 11)
exercise_success_1 <- c(1L, 1L, 0L, 1L, 0L, 1L, 1L, 0L)
exercise_success_2 <- c(1L, 0L, 0L, 0L, 1L, 0L)

stopifnot(length(exercise_before) == length(exercise_after))
stopifnot(!anyNA(exercise_before), !anyNA(exercise_after))
stopifnot(all(exercise_success_1 %in% 0:1))
stopifnot(all(exercise_success_2 %in% 0:1))
```

</details>

## R-12-E01

**Exercise 12.1**

For $n=9$, $\bar x=14.2$ and $s=3.6$, write the 95% one-sample t interval for $\mu$, name every condition needed for the exact claim, and calculate the endpoints with `qt`.

<details>
<summary>Hint 1</summary>

Use $t_{8,0.975}$ and estimated SE $3.6/\sqrt9$. Separate the algebra from the sampling assumptions.

</details>

<details>
<summary>Hint 2</summary>

The margin is $t_{8,0.975}\cdot1.2$; exactness needs iid normal observations with positive unknown population variance.

</details>

<details>
<summary>Solution</summary>

The estimated standard error is

\[
\frac{s}{\sqrt n}=\frac{3.6}{\sqrt9}=1.2.
\]

With 8 degrees of freedom, $t_{8,0.975}\approx2.3060$. The margin is $2.3060(1.2)\approx2.7672$, so the interval is approximately 11.4328 to 16.9672 in the outcome's units.

```r
n_e1 <- 9L
mean_e1 <- 14.2
sd_e1 <- 3.6
critical_e1 <- qt(0.975, df = n_e1 - 1L)
se_e1 <- sd_e1 / sqrt(n_e1)
interval_e1 <- mean_e1 + c(-1, 1) * critical_e1 * se_e1

stopifnot(tol(critical_e1, 2.30600413520417))
stopifnot(tol(se_e1, 1.2))
stopifnot(all(tol(interval_e1, c(11.432795037755, 16.967204962245))))
```

For this to be an exact 95% t interval, the nine random observations must be iid normal $N(\mu,\sigma^2)$, $\sigma$ must be positive, and the target must be the mean $\mu$ of that process. The data mechanism must support the iid claim. The sample size is at least two, so $s$ is defined. The arithmetic alone needs none of these sampling assumptions; the exact coverage claim needs all of them. Saying merely “the sample looks normal” omits independence and the target process.

</details>


## R-12-E02

**Exercise 12.2**

Matched readings are `before <- c(9, 12, 11, 15)` and `after <- c(8, 10, 12, 11)`. Define before minus after, compute its mean and estimated SE, and state which observations must be independent for an exact paired t analysis.

<details>
<summary>Hint 1</summary>

Make one difference per matched unit. Independence is a claim between units, not between the two measurements within a unit.

</details>

<details>
<summary>Hint 2</summary>

The differences are $(1,2,-1,4)$; compute their sample variance with denominator three and divide its square root by two.

</details>

<details>
<summary>Solution</summary>

Before minus after gives $d=(1,2,-1,4)$. Its mean is 1.5 minutes. The sample SD is approximately 2.0817 minutes, so the estimated SE is $2.0817/\sqrt4\approx1.0408$ minutes.

```r
d_e2 <- exercise_before - exercise_after
mean_e2 <- mean(d_e2)
sd_e2 <- sd(d_e2)
se_e2 <- sd_e2 / sqrt(length(d_e2))
paired_e2 <- t.test(exercise_before, exercise_after, paired = TRUE)
one_sample_e2 <- t.test(d_e2, mu = 0)

stopifnot(all(d_e2 == c(1, 2, -1, 4)))
stopifnot(tol(mean_e2, 1.5))
stopifnot(tol(sd_e2, 2.08166599946613))
stopifnot(tol(se_e2, 1.04083299973307))
stopifnot(tol(paired_e2$p.value, one_sample_e2$p.value))
```

The four paired differences must be independent across sampled units for the iid model; before and after measurements within a unit need not be independent. Exact small-sample t inference additionally assumes the difference variable is normal with positive variance. Assuming the eight readings are independent without justification would discard the pairing and can give the wrong standard error.

</details>


## R-12-E03

**Exercise 12.3**

Two independent groups have $n_1=5,s_1^2=4,n_2=8,s_2^2=16$. Compute the Welch estimated SE and Welch–Satterthwaite degrees of freedom by hand and in R.

<details>
<summary>Hint 1</summary>

Set $a=s_1^2/n_1$ and $b=s_2^2/n_2$; then use $(a+b)^2/[a^2/(n_1-1)+b^2/(n_2-1)]$.

</details>

<details>
<summary>Hint 2</summary>

Compute $a=0.8$, $b=2$, then use numerator $2.8^2$ and denominator $0.8^2/4+2^2/7$.

</details>

<details>
<summary>Solution</summary>

Let $a=4/5=0.8$ and $b=16/8=2$. Then

\[
\widehat{SE}_W=\sqrt{a+b}=\sqrt{2.8}\approx1.6733.
\]

The effective degrees of freedom are

\[
\nu_W=\frac{2.8^2}{0.8^2/4+2^2/7}
=\frac{7.84}{0.16+4/7}=10.71875.
\]

```r
n1_e3 <- 5L
n2_e3 <- 8L
v1_e3 <- 4
v2_e3 <- 16
a_e3 <- v1_e3 / n1_e3
b_e3 <- v2_e3 / n2_e3
se_e3 <- sqrt(a_e3 + b_e3)
df_e3 <- (a_e3 + b_e3)^2 /
  (a_e3^2 / (n1_e3 - 1L) + b_e3^2 / (n2_e3 - 1L))

stopifnot(tol(se_e3, 1.67332005306815))
stopifnot(tol(df_e3, 10.71875))
```

The degrees of freedom need not be an integer. They parameterize the approximate reference t distribution; rounding them before finding a quantile introduces an unnecessary discrepancy.

</details>


## R-12-E04

**Exercise 12.4**

A report uses `t.test(x, y, var.equal = TRUE)` because the two sample SDs are “fairly close.” Explain the additional population assumption this requests, contrast it with Welch's method, and say whether inspecting sample SDs proves the assumption.

<details>
<summary>Hint 1</summary>

Follow each procedure's denominator and ask which population variances it treats as one quantity.

</details>

<details>
<summary>Hint 2</summary>

The pooled procedure assumes equal population variances, whereas Welch estimates them separately and uses an approximate reference distribution.

</details>

<details>
<summary>Solution</summary>

`var.equal = TRUE` asks R to use a pooled estimate of one population variance shared by both groups. Under independent normal sampling, that common positive variance is needed for the usual pooled statistic to have its exact t reference distribution. The sample sizes and sample variances contribute to one pooled denominator.

Welch's method keeps $s_1^2/n_1$ and $s_2^2/n_2$ separate and uses approximate Welch–Satterthwaite degrees of freedom. It does not require equal population variances, though independence and a defensible sampling model still matter, and the reference distribution is approximate.

Two sample SDs can be close by chance when population variances differ, or far apart by chance when population variances agree. Looking at them does not prove equality. Selecting pooled or Welch after checking which yields a preferred result would also make the advertised inference ignore a selection step.

</details>


## R-12-E05

**Exercise 12.5**

Group 1 records `c(1,1,0,1,0,1,1,0)` and Group 2 records `c(1,0,0,0,1,0)`. Calculate both sample proportions, their difference (Group 1 minus Group 2), and the unpooled Wald estimated SE. State the iid Bernoulli target.

<details>
<summary>Hint 1</summary>

A sample proportion is the mean of a zero-one vector.

</details>

<details>
<summary>Hint 2</summary>

Compute $5/8-2/6$ and use $\sqrt{\hat p_1(1-\hat p_1)/8+\hat p_2(1-\hat p_2)/6}$ under independent iid Bernoulli groups.

</details>

<details>
<summary>Solution</summary>

Group 1 has five successes among eight trials, so $\hat p_1=5/8=0.625$. Group 2 has two successes among six, so $\hat p_2=2/6=1/3\approx0.3333$. The estimated difference is $7/24\approx0.2917$. The unpooled Wald estimated SE is approximately 0.2576.

```r
p1_e5 <- mean(exercise_success_1)
p2_e5 <- mean(exercise_success_2)
difference_e5 <- p1_e5 - p2_e5
se_e5 <- sqrt(
  p1_e5 * (1 - p1_e5) / length(exercise_success_1) +
    p2_e5 * (1 - p2_e5) / length(exercise_success_2)
)

stopifnot(sum(exercise_success_1) == 5L)
stopifnot(sum(exercise_success_2) == 2L)
stopifnot(tol(p1_e5, 0.625))
stopifnot(tol(p2_e5, 1 / 3))
stopifnot(tol(difference_e5, 7 / 24))
stopifnot(tol(se_e5, 0.257553707092399))
```

The target is $p_1-p_2$, where each $p_g$ is the success probability for an iid Bernoulli trial from its declared group process, and the two groups are independent. With only five and two observed successes, a Wald interval should be labeled a fragile approximation rather than reported mechanically.

</details>


## R-12-E06

**Exercise 12.6**

For 10 failures in 10 independent Bernoulli trials, show what the simple Wald interval says about the success probability and compare it with `binom.test(0, 10)`. Explain why one answer exposes the other's failure.

<details>
<summary>Hint 1</summary>

At $\hat p=0$, inspect the plug-in variance. The exact interval's upper endpoint is not zero.

</details>

<details>
<summary>Hint 2</summary>

At the endpoint the Wald standard error collapses to zero; a positive success probability can still generate ten failures.

</details>

<details>
<summary>Solution</summary>

Ten failures mean zero successes, so $\hat p=0$. The plug-in variance $\hat p(1-\hat p)/10$ is zero. A simple 95% Wald interval is therefore $[0,0]$, falsely presenting no uncertainty.

```r
x_e6 <- 0L
n_e6 <- 10L
p_e6 <- x_e6 / n_e6
se_e6 <- sqrt(p_e6 * (1 - p_e6) / n_e6)
wald_e6 <- p_e6 + c(-1, 1) * qnorm(0.975) * se_e6
exact_e6 <- binom.test(x_e6, n_e6, conf.level = 0.95)

stopifnot(all(wald_e6 == c(0, 0)))
stopifnot(tol(unname(exact_e6$conf.int[1]), 0))
stopifnot(tol(unname(exact_e6$conf.int[2]), 0.308497107818761))
```

The two-sided 95% Clopper–Pearson interval is approximately $[0,0.3085]$. Its positive upper endpoint recognizes that ten failures can occur even when the success probability is positive. Its at-least-95% coverage is exact under independent iid Bernoulli trials, although discreteness makes it conservative. The endpoint comparison exposes the Wald failure; it does not claim Clopper–Pearson is always shortest or automatically valid for dependent trials.

</details>


## R-12-E07

**Exercise 12.7**

A Welch 95% interval for a time difference is −0.8 to 2.6 minutes. The organization declared 2 minutes as the smallest practically important absolute change. Write a conclusion that addresses uncertainty and practical importance without claiming equivalence.

<details>
<summary>Hint 1</summary>

Ask which values inside the interval exceed the threshold and which signs remain possible.

</details>

<details>
<summary>Hint 2</summary>

The interval includes zero and values larger than plus two, so neither a sign nor practical equivalence is established.

</details>

<details>
<summary>Solution</summary>

A defensible conclusion is:

> Under the assumptions supporting the Welch approximation, the data are compatible with mean differences from a 0.8-minute decrease to a 2.6-minute increase. The interval contains zero, contains changes smaller than the 2-minute practical threshold, and also contains an increase larger than that threshold. It therefore does not determine the direction and does not rule out a practically important increase.

Calling the result “equivalent” would require an equivalence estimand, margins declared in advance, and a procedure designed to show the entire compatible range lies inside those margins. This interval does the opposite at its upper endpoint. A non-significant difference test is not an equivalence test.

</details>


## R-12-E08

**Exercise 12.8**

A clinic measures the same six patients before and after treatment, loses the patient IDs, and retains the two unordered columns. Choose a justified method or reject the proposed paired and independent t procedures. State what additional information or design would repair the analysis.

<details>
<summary>Hint 1</summary>

Pairing is a fact encoded by keys. Losing it does not turn repeated measurements into independent samples.

</details>

<details>
<summary>Hint 2</summary>

The two columns remain dependent repeated measurements; recover pairing keys or use a new justified design rather than declare them independent.

</details>

<details>
<summary>Solution</summary>

The paired t procedure cannot be carried out honestly because the patient keys needed to construct $D_i=\text{before}_i-\text{after}_i$ are gone. Pairing arbitrary row positions invents matches. The independent-groups t procedure is also unsupported: the columns came from the same six patients, so the two-independent-samples mechanism does not describe the data.

The defensible choice is to refrain from either proposed inferential procedure. Marginal summaries of the six before and six after values can still be reported, explicitly saying that within-patient changes are unrecoverable. Repair requires a secure linkage table or source record that uniquely matches each patient's two measurements. If linkage cannot be recovered, a future study must preserve pseudonymous unique IDs and document matching before analysis. Losing identifiers changes what can be learned; it does not change the original dependence into independence.

</details>


[Complete solutions for R-12-E01 through R-12-E08](solutions-proportions-and-means.md).

## R-12-E09

**Exercise 12.9**

Paired differences $D_i$ are replaced by $D_i+3$ after a change in the reference definition. Determine the changes in their sample mean, sample variance, estimated standard error and exact paired-$t$ interval, assuming its iid normal-difference hypotheses.

<details>
<summary>Hint 1</summary>

Adding the same constant preserves every centered deviation.

</details>

<details>
<summary>Hint 2</summary>

The interval center shifts, while its estimated standard error and reference quantile do not.

</details>

<details>
<summary>Solution</summary>

The new mean is $\bar D+3$. Each new centered deviation is $(D_i+3)-(\bar D+3)=D_i-\bar D$, so sample variance and estimated standard error are unchanged. The same $t_{n-1,0.975}$ margin applies, and both endpoints move up by three. The population target also changes by three; one must not use the shifted interval to make an unchanged-target claim.

</details>

## R-12-E10

**Exercise 12.10**

Both independent groups' times are converted from minutes to seconds. Show that the Welch estimated standard error and interval endpoints multiply by sixty, while the Welch degrees of freedom and the two-sided test of zero mean difference stay unchanged.

<details>
<summary>Hint 1</summary>

Each sample variance multiplies by $60^2$.

</details>

<details>
<summary>Hint 2</summary>

In the degrees-of-freedom ratio the fourth-power scale cancels, and in the test statistic the first-power scale cancels.

</details>

<details>
<summary>Solution</summary>

The difference of sample means multiplies by sixty. Each variance contribution $s_j^2/n_j$ multiplies by $3600$, so their sum's square root multiplies by sixty. In $(a+b)^2/[a^2/(n_1-1)+b^2/(n_2-1)]$, numerator and denominator both multiply by $3600^2$, leaving the degrees of freedom unchanged. Therefore the critical quantile is unchanged, the interval scales by sixty, and the test statistic for zero difference is unchanged. Welch's approximation status is also unchanged.

</details>

## Sources and scope

- Student (William Sealy Gosset), [“The Probable Error of a Mean”](https://doi.org/10.1093/biomet/6.1.1), *Biometrika* 6(1), 1908, pp. 1–25. An accessible reproduction of the primary paper was inspected for the normal-sample construction. The modern theorem statement and the imported independence step above are explicit rather than attributed as a proof reproduced from the paper.
- B. L. Welch, [“The Generalization of ‘Student's’ Problem when Several Different Population Variances Are Involved”](https://doi.org/10.1093/biomet/34.1-2.28), *Biometrika* 34, 1947, pp. 28–35. An accessible scan of the primary paper was inspected for the unequal-variance approximation and effective degrees of freedom.
- C. J. Clopper and E. S. Pearson, [“The Use of Confidence or Fiducial Limits Illustrated in the Case of the Binomial”](https://doi.org/10.1093/biomet/26.4.404), *Biometrika* 26(4), 1934, pp. 404–413. Primary-paper bibliographic metadata were verified; the implemented interval and at-least-nominal coverage statement were checked in the current R help below. The boundary equation in this chapter is also derived and numerically asserted.
- R Core Team, [`t.test`: Student's t-Test](https://stat.ethz.ch/R-manual/R-release/library/stats/html/t.test.html), R 4.6.0 help. Consulted for pairing, `var.equal`, Welch degrees of freedom, returned estimates, intervals, p-values, and standard errors; online release page accessed 2026-09-06.
- R Core Team, [`binom.test`: Exact Binomial Test](https://stat.ethz.ch/R-manual/R-release/library/stats/html/binom.test.html), R 4.6.0 help. Consulted for Clopper–Pearson coverage and returned interval semantics; online release page accessed 2026-09-06.
- R Core Team, [`Normal`: The Normal Distribution](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Normal.html) and [`TDist`: The Student t Distribution](https://stat.ethz.ch/R-manual/R-release/library/stats/html/TDist.html), R 4.6.0 help. Consulted for `qnorm`, `qt`, and parameter conventions; online release pages accessed 2026-09-06.

The imported normal/chi-square independence theorem is stated but not proved here. Welch and Wald results are labeled approximations. All fixtures, prose, code, investigation, project, and exercises are original Math Atlas material created by Math Atlas and licensed CC BY-SA 4.0. Executable blocks were checked on Linux with R 4.6.0; no claim of other-platform execution is made.

## Summary

The analysis unit determines the comparison: paired observations produce one difference per unit, while independent groups require an independent-group model. Exact normal-sample t results, approximate Welch or Wald methods, and exact binomial intervals have different assumptions and boundary behavior. Preserve signs, units, denominators and practical-effect thresholds when reporting a result.
