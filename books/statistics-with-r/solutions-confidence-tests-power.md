
# Solutions: Confidence, tests, power, and practical importance

These solutions are independently executable. They recreate both original literal fixtures rather than relying on the chapter's R session. Fixture `MA-R11-Z-01` has 16 synthetic sessions, key `session_id`, outcome `minutes`, unit minutes, no missing values, and no exclusions. Fixture `MA-R11-BIN-01` has 10 synthetic components, key `component_id`, binary outcome `passed`, no missing values, and no exclusions. Both are original Math Atlas version 1 fixtures and are not observations from real systems.

`c(...)` constructs a vector, `seq_along` creates its integer positions, `length` counts entries, `mean` computes an arithmetic mean, and `anyNA` checks for missing values. `x %in% choices` tests each value of `x` for membership, and `all` requires every resulting condition to be true. `stopifnot` stops if a check is false.

```r
# Independent literal fixtures for the solution document.
minutes <- c(43, 45, 47, 48, 49, 50, 51, 52,
             52, 53, 54, 55, 56, 57, 59, 61)
session_id <- seq_along(minutes)
known_sigma_minutes <- 6
passed <- c(1L, 1L, 1L, 1L, 1L, 1L, 1L, 1L, 1L, 0L)
component_id <- seq_along(passed)

stopifnot(identical(session_id, 1:16), identical(component_id, 1:10))
stopifnot(!anyNA(minutes), !anyNA(passed))
stopifnot(length(minutes) == 16L, length(passed) == 10L)
stopifnot(all(passed %in% c(0L, 1L)))
```

## R-11-E01

Before sampling, \(X\) is random, so the interval \(C(X)\) produced by the procedure is random. The population mean \(\mu\) is a fixed, unknown number. After the sample \(x\) is observed, \(C(x)=[14.2,18.7]\) is also fixed.

A correct interpretation is: if the same mechanism generated fresh samples and the same interval rule were applied each time, at least 90% of the resulting intervals would contain the fixed \(\mu\), assuming the advertised guarantee and its model conditions hold. For the interval already observed, \(\mu\) either lies inside or outside. A 90% posterior probability for \(\mu\) would require an additional probability model for \(\mu\), including a prior; the confidence procedure does not supply one.

## R-11-E02

If \(\theta>\alpha\), both possible sets contain \(\theta\): \(C(0)=[0,1]\) contains it and \(C(1)=(\alpha,1]\) contains it. Coverage is then 1.

If \(0\le\theta\le\alpha\), \(C(0)\) contains \(\theta\), while \(C(1)\) does not. The procedure covers exactly when \(X=0\), which has probability \(1-\theta\). Thus

\[
\operatorname{Cov}_\theta(C)=
\begin{cases}
1-\theta,&0\le\theta\le\alpha,\\
1,&\alpha<\theta\le1.
\end{cases}
\]

At the boundary \(\theta=\alpha\), the open endpoint of \(C(1)\) excludes \(\theta\), so coverage is \(1-\alpha\), not 1. For \(\theta\le\alpha\), \(1-\theta\ge1-\alpha\); above \(\alpha\), coverage 1 also exceeds the target.

The following code evaluates the formula on representative points. `ifelse(condition, yes, no)` selects an output for each logical condition.

```r
alpha_e2 <- 0.05
theta_e2 <- c(0, 0.02, 0.05, 0.50, 1)
coverage_e2 <- ifelse(theta_e2 <= alpha_e2, 1 - theta_e2, 1)
expected_e2 <- c(1, 0.98, 0.95, 1, 1)
tol_e2 <- 1e-10 + 1e-8 * abs(expected_e2)
stopifnot(all(abs(coverage_e2 - expected_e2) <= tol_e2))
stopifnot(all(coverage_e2 >= 1 - alpha_e2))
data.frame(theta = theta_e2, coverage = coverage_e2)
```

## R-11-E03

For observed \(x=1\),

\[
p_\theta(1)=1-(1-\theta)^2.
\]

The inverted set keeps candidates satisfying

\[
1-(1-\theta)^2>0.10.
\]

Because \(0\le\theta\le1\), this is equivalent to \((1-\theta)^2<0.90\), then \(1-\theta<\sqrt{0.90}\), and finally

\[
\theta>1-\sqrt{0.90}\approx0.0513167.
\]

Therefore \(C(1)=(1-\sqrt{0.90},1]\). The lower boundary is excluded: its p-value equals 0.10, and the test rejects when \(p\le0.10\).

`sqrt` takes the nonnegative square root. The code checks both the numerical boundary and the strict decision.

```r
alpha_e3 <- 0.10
boundary_e3 <- 1 - sqrt(1 - alpha_e3)
p_at_boundary_e3 <- 1 - (1 - boundary_e3)^2
tol_e3 <- 1e-10 + 1e-8 * abs(alpha_e3)
stopifnot(abs(boundary_e3 - 0.0513167019494862) <= tol_e3)
stopifnot(abs(p_at_boundary_e3 - alpha_e3) <= tol_e3)
stopifnot(!(alpha_e3 > alpha_e3))
c(lower_open_boundary = boundary_e3, p_at_boundary = p_at_boundary_e3)
```

## R-11-E04

The type I error probability under the point null is

\[
\Pr_{0.5}(X\ge8)=\sum_{x=8}^{10}\binom{10}{x}(0.5)^x(0.5)^{10-x}
=\frac{45+10+1}{1024}=0.0546875.
\]

This exceeds 0.05, so the rule is not level 0.05. Discreteness can put one cutoff below 0.05 and the next above it.

In R, `dbinom` returns individual binomial masses and `pbinom(7, lower.tail = FALSE)` returns \(\Pr(X>7)=\Pr(X\ge8)\). `sum` adds the selected masses.

```r
size_e4_sum <- sum(dbinom(8:10, size = 10, prob = 0.5))
size_e4_tail <- pbinom(7, size = 10, prob = 0.5, lower.tail = FALSE)
tol_e4 <- 1e-10 + 1e-8 * abs(size_e4_sum)
stopifnot(abs(size_e4_sum - size_e4_tail) <= tol_e4)
stopifnot(abs(size_e4_sum - 0.0546875) <= tol_e4)
stopifnot(size_e4_sum > 0.05)
size_e4_sum
```

## R-11-E05

With the rejection rule fixed at \(X\ge8\), power at the declared alternative is

\[
\Pr_{0.7}(X\ge8)=0.3827827864.
\]

This probability describes repetitions generated with \(p=0.7\). Replacing 0.7 after the study by the observed \(X/10\) makes the supposed alternative a function of the same count that determined the test result. Such “observed power” adds no independent information; the estimate, interval, and test already report what this sample says.

```r
power_e5_sum <- sum(dbinom(8:10, size = 10, prob = 0.7))
power_e5_tail <- pbinom(7, size = 10, prob = 0.7, lower.tail = FALSE)
tol_e5 <- 1e-10 + 1e-8 * abs(power_e5_sum)
stopifnot(abs(power_e5_sum - power_e5_tail) <= tol_e5)
stopifnot(abs(power_e5_sum - 0.3827827864) <= tol_e5)
power_e5_sum
```

## R-11-E06

The estimate is \(52-48=4\) minutes. Subtracting 48 from both confidence limits gives

\[
[49.060054-48,\ 54.939946-48]
=[1.060054,6.939946]\text{ minutes}.
\]

Every value in this interval is positive, so the interval excludes zero under the known-sigma iid normal model. But the interval includes changes below and above the predeclared 3-minute threshold. The study therefore supports a positive difference while failing to establish that the difference exceeds 3 minutes. Calling the result statistically significant would omit this operational uncertainty.

`qnorm(0.975)` gives the standard-normal critical value; vector addition applies the two signs to produce the endpoints.

```r
mean_e6 <- mean(minutes)
se_e6 <- known_sigma_minutes / sqrt(length(minutes))
interval_mu_e6 <- mean_e6 + c(-1, 1) * qnorm(0.975) * se_e6
interval_difference_e6 <- interval_mu_e6 - 48
expected_difference_e6 <- c(1.0600540231899, 6.9399459768101)
tol_e6 <- 1e-10 + 1e-8 * abs(expected_difference_e6)
stopifnot(abs((mean_e6 - 48) - 4) <= 1e-10)
stopifnot(all(abs(interval_difference_e6 - expected_difference_e6) <= tol_e6))
stopifnot(interval_difference_e6[1L] > 0)
stopifnot(interval_difference_e6[1L] < 3, interval_difference_e6[2L] > 3)
c(estimate_minutes = mean_e6 - 48,
  lower_minutes = interval_difference_e6[1L],
  upper_minutes = interval_difference_e6[2L])
```

## R-11-E07

Before running, set \(B=20{,}000\), target estimated Monte Carlo SE below 0.004, and declare that a discrepancy from the exact oracle larger than four estimated Monte Carlo SEs will trigger inspection of the code and random-number setup. It will not trigger repeated runs until one looks close.

`RNGkind` selects the algorithms and `set.seed` fixes their state. `rbinom` generates one binomial count for each simulated experiment. `is.finite` checks that an output is neither missing nor infinite.

```r
RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(61151)
B_e7 <- 20000L
target_mcse_e7 <- 0.004
counts_e7 <- rbinom(B_e7, size = 10, prob = 0.8)
reject_e7 <- counts_e7 >= 9L
q_hat_e7 <- mean(reject_e7)
mcse_e7 <- sqrt(q_hat_e7 * (1 - q_hat_e7) / B_e7)
exact_e7 <- sum(dbinom(9:10, size = 10, prob = 0.8))
difference_e7 <- abs(q_hat_e7 - exact_e7)

stopifnot(length(counts_e7) == B_e7)
stopifnot(all(counts_e7 >= 0L & counts_e7 <= 10L))
stopifnot(is.finite(q_hat_e7), is.finite(mcse_e7))
stopifnot(mcse_e7 < target_mcse_e7)
stopifnot(difference_e7 <= 4 * mcse_e7)
c(simulated_power = q_hat_e7, estimated_MCSE = mcse_e7,
  exact_power = exact_e7, absolute_difference = difference_e7)
```

This fixed run estimated power as 0.37130 with estimated Monte Carlo SE 0.003416. Its absolute difference from the exact 0.37581 was 0.00451, within the declared four-MCSE audit threshold.

The simulation is a numerical observation with finite Monte Carlo error. The exact sum remains the oracle for this model. Agreement within the audit tolerance can detect some mistakes, but it does not prove either the binomial model or the exact formula. If all rejection indicators were equal, the plug-in MCSE would be zero; that endpoint needs a conservative bound or interval rather than a claim of certainty.

## R-11-E08

A bounded replacement is:

> Under the stated mechanism and assumptions, the procedure used to construct this interval covers the fixed mean in 95% of repeated samples. This realized interval either contains the fixed mean or does not; the confidence level alone is not a posterior probability. The p-value 0.03 means that, under the tested null model, the probability of a result at least as extreme by the predeclared rule is 0.03. It is not the probability that the null is true. The result gives evidence against that null at level 0.05, subject to the model and selection assumptions. Practical importance must be judged by comparing the estimated effect and interval with a predeclared threshold in the outcome's units.

The original report fails three times. It assigns probability to a fixed parameter without a prior model, reverses the conditioning in the p-value, and treats a post-hoc power number as proof of importance. A posterior probability would require an explicit prior and likelihood. A practical conclusion requires a defensible threshold plus an effect estimate and uncertainty, not merely rejection.

[Return to R-11-E01 through R-11-E08](confidence-tests-power.md)

## R-11-E09

Under the simple null the rejection probability is $(1/2)^4=1/16=0.0625$, so the test has size $0.0625$ and is level $0.10$. Its power at $p=0.8$ is $0.8^4=0.4096$. Level is an upper bound on null error; it need not be attained exactly by a discrete test.

## R-11-E10

The event $L(X)\le\mu\le U(X)$ equals $60L(X)\le60\mu\le60U(X)$ because sixty is positive. Their probabilities are identical under the same sampling law, so coverage transfers exactly with the unit conversion. Rounding is another transformation: outward rounding cannot reduce coverage, while inward or ordinary nearest rounding can change it, with no general guarantee that the change is small. Keep full-precision endpoints for the theorem.

## Sources and provenance

The solutions, calculations, and fixtures are original Math Atlas material licensed CC BY-SA 4.0. R interface semantics were checked against the installed R 4.6.0 primary help pages [`Normal`](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Normal.html), [`Binomial`](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Binomial.html), and [`Random`](https://stat.ethz.ch/R-manual/R-release/library/base/html/Random.html). The online pages were accessed 2026-09-06; the bibliography records the original consultation; this edition links to official help without redistributing its text. The [NIST/SEMATECH e-Handbook confidence-interval page](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm) was checked for the known-positive-\(\sigma\) normal formula. The general coverage and test-inversion arguments are established in the chapter; the code here checks concrete arithmetic and simulation behavior.
