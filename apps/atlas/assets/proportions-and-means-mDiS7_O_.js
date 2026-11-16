var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-proportions-and-means
title: "Solutions: Comparing Proportions and Means"
level: undergraduate
license: CC BY-SA 4.0
---

# Solutions: Comparing Proportions and Means {#section-1-solutions-comparing-proportions-and-means}

These solutions begin with the mechanism and estimand because a correct calculation cannot rescue a comparison of the wrong units. All fixtures and answers are original Math Atlas material created by Math Atlas, version 1, licensed CC BY-SA 4.0. Literal vectors are the canonical source. IDs are unique keys; time is measured in minutes; Bernoulli variables use 1 for the declared success and 0 otherwise; all rows are complete with no missing codes or exclusions.

The executable blocks run in document order in a fresh R process. This setup defines the comparison helper and the exercise fixtures rather than borrowing state from the chapter.

\`\`\`r
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
\`\`\`

<a id="section-22-r-12-e01"></a>
## R-12-E01 {#section-24-r-12-e01}

The estimated standard error is

\\[
\\frac{s}{\\sqrt n}=\\frac{3.6}{\\sqrt9}=1.2.
\\]

With 8 degrees of freedom, $t_{8,0.975}\\approx2.3060$. The margin is $2.3060(1.2)\\approx2.7672$, so the interval is approximately 11.4328 to 16.9672 in the outcome's units.

\`\`\`r
n_e1 <- 9L
mean_e1 <- 14.2
sd_e1 <- 3.6
critical_e1 <- qt(0.975, df = n_e1 - 1L)
se_e1 <- sd_e1 / sqrt(n_e1)
interval_e1 <- mean_e1 + c(-1, 1) * critical_e1 * se_e1

stopifnot(tol(critical_e1, 2.30600413520417))
stopifnot(tol(se_e1, 1.2))
stopifnot(all(tol(interval_e1, c(11.432795037755, 16.967204962245))))
\`\`\`

For this to be an exact 95% t interval, the nine random observations must be iid normal $N(\\mu,\\sigma^2)$, $\\sigma$ must be positive, and the target must be the mean $\\mu$ of that process. The data mechanism must support the iid claim. The sample size is at least two, so $s$ is defined. The arithmetic alone needs none of these sampling assumptions; the exact coverage claim needs all of them. Saying merely “the sample looks normal” omits independence and the target process.

<a id="section-47-r-12-e02"></a>
## R-12-E02 {#section-49-r-12-e02}

Before minus after gives $d=(1,2,-1,4)$. Its mean is 1.5 minutes. The sample SD is approximately 2.0817 minutes, so the estimated SE is $2.0817/\\sqrt4\\approx1.0408$ minutes.

\`\`\`r
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
\`\`\`

The four paired differences must be independent across sampled units for the iid model; before and after measurements within a unit need not be independent. Exact small-sample t inference additionally assumes the difference variable is normal with positive variance. Assuming the eight readings are independent without justification would discard the pairing and can give the wrong standard error.

<a id="section-68-r-12-e03"></a>
## R-12-E03 {#section-70-r-12-e03}

Let $a=4/5=0.8$ and $b=16/8=2$. Then

\\[
\\widehat{SE}_W=\\sqrt{a+b}=\\sqrt{2.8}\\approx1.6733.
\\]

The effective degrees of freedom are

\\[
\\nu_W=\\frac{2.8^2}{0.8^2/4+2^2/7}
=\\frac{7.84}{0.16+4/7}=10.71875.
\\]

\`\`\`r
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
\`\`\`

The degrees of freedom need not be an integer. They parameterize the approximate reference t distribution; rounding them before finding a quantile introduces an unnecessary discrepancy.

<a id="section-100-r-12-e04"></a>
## R-12-E04 {#section-102-r-12-e04}

\`var.equal = TRUE\` asks R to use a pooled estimate of one population variance shared by both groups. Under independent normal sampling, that common positive variance is needed for the usual pooled statistic to have its exact t reference distribution. The sample sizes and sample variances contribute to one pooled denominator.

Welch's method keeps $s_1^2/n_1$ and $s_2^2/n_2$ separate and uses approximate Welch–Satterthwaite degrees of freedom. It does not require equal population variances, though independence and a defensible sampling model still matter, and the reference distribution is approximate.

Two sample SDs can be close by chance when population variances differ, or far apart by chance when population variances agree. Looking at them does not prove equality. Selecting pooled or Welch after checking which yields a preferred result would also make the advertised inference ignore a selection step.

<a id="section-108-r-12-e05"></a>
## R-12-E05 {#section-110-r-12-e05}

Group 1 has five successes among eight trials, so $\\hat p_1=5/8=0.625$. Group 2 has two successes among six, so $\\hat p_2=2/6=1/3\\approx0.3333$. The estimated difference is $7/24\\approx0.2917$. The unpooled Wald estimated SE is approximately 0.2576.

\`\`\`r
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
\`\`\`

The target is $p_1-p_2$, where each $p_g$ is the success probability for an iid Bernoulli trial from its declared group process, and the two groups are independent. With only five and two observed successes, a Wald interval should be labeled a fragile approximation rather than reported mechanically.

<a id="section-131-r-12-e06"></a>
## R-12-E06 {#section-133-r-12-e06}

Ten failures mean zero successes, so $\\hat p=0$. The plug-in variance $\\hat p(1-\\hat p)/10$ is zero. A simple 95% Wald interval is therefore $[0,0]$, falsely presenting no uncertainty.

\`\`\`r
x_e6 <- 0L
n_e6 <- 10L
p_e6 <- x_e6 / n_e6
se_e6 <- sqrt(p_e6 * (1 - p_e6) / n_e6)
wald_e6 <- p_e6 + c(-1, 1) * qnorm(0.975) * se_e6
exact_e6 <- binom.test(x_e6, n_e6, conf.level = 0.95)

stopifnot(all(wald_e6 == c(0, 0)))
stopifnot(tol(unname(exact_e6$conf.int[1]), 0))
stopifnot(tol(unname(exact_e6$conf.int[2]), 0.308497107818761))
\`\`\`

The two-sided 95% Clopper–Pearson interval is approximately ([0,0.3085]). Its positive upper endpoint recognizes that ten failures can occur even when the success probability is positive. Its at-least-95% coverage is exact under independent iid Bernoulli trials, although discreteness makes it conservative. The endpoint comparison exposes the Wald failure; it does not claim Clopper–Pearson is always shortest or automatically valid for dependent trials.

<a id="section-150-r-12-e07"></a>
## R-12-E07 {#section-152-r-12-e07}

A defensible conclusion is:

> Under the assumptions supporting the Welch approximation, the data are compatible with mean differences from a 0.8-minute decrease to a 2.6-minute increase. The interval contains zero, contains changes smaller than the 2-minute practical threshold, and also contains an increase larger than that threshold. It therefore does not determine the direction and does not rule out a practically important increase.

Calling the result “equivalent” would require an equivalence estimand, margins declared in advance, and a procedure designed to show the entire compatible range lies inside those margins. This interval does the opposite at its upper endpoint. A non-significant difference test is not an equivalence test.

<a id="section-158-r-12-e08"></a>
## R-12-E08 {#section-160-r-12-e08}

The paired t procedure cannot be carried out honestly because the patient keys needed to construct $D_i=\\text{before}_i-\\text{after}_i$ are gone. Pairing arbitrary row positions invents matches. The independent-groups t procedure is also unsupported: the columns came from the same six patients, so the two-independent-samples mechanism does not describe the data.

The defensible choice is to refrain from either proposed inferential procedure. Marginal summaries of the six before and six after values can still be reported, explicitly saying that within-patient changes are unrecoverable. Repair requires a secure linkage table or source record that uniquely matches each patient's two measurements. If linkage cannot be recovered, a future study must preserve pseudonymous unique IDs and document matching before analysis. Losing identifiers changes what can be learned; it does not change the original dependence into independence.

<a id="section-164-r-12-i01"></a>
## R-12-I01 {#section-166-r-12-i01}

The investigation's reference response preserves operator IDs and computes one before-minus-after difference per operator. The mean difference is 3 minutes, the estimated SE is 0.9258, and the exact-normal-model 95% paired t interval is 0.8108 to 5.1892 minutes. The identical marginal mean difference from an unpaired call has SE 1.6243 and an interval crossing zero, but that comparison is rejected because the groups were not independently sampled.

The key reasoning is structural. Pairing uses variation among the eight changes; the false independent procedure mixes stable differences among operators into its uncertainty. The paired analysis still depends on iid sampling across operators and, for exact small-sample inference, normal differences with positive variance. A common period trend could be mistaken for a workflow effect, so the bounded conclusion describes paired change under the model and does not establish causation merely from the before/after order.

\`\`\`r
# Independent copy of fixture R12-I01-v1 for the solutions document.
operator_id <- c("op01", "op02", "op03", "op04", "op05", "op06", "op07", "op08")
before_i <- c(32, 28, 35, 31, 40, 29, 37, 33)
after_i <- c(28, 29, 30, 29, 33, 29, 34, 29)
change_i <- before_i - after_i

stopifnot(length(unique(operator_id)) == 8L)
paired_i <- t.test(before_i, after_i, paired = TRUE)
unpaired_i <- t.test(before_i, after_i, paired = FALSE)
stopifnot(tol(mean(change_i), 3))
stopifnot(tol(unname(paired_i$stderr), 0.925820099772551))
stopifnot(all(tol(unname(paired_i$conf.int), c(0.810783339465774, 5.18921666053423))))
stopifnot(tol(unname(unpaired_i$stderr), 1.62431304160955))
\`\`\`

<a id="section-186-r-12-p01"></a>
## R-12-P01 {#section-188-r-12-p01}

<a id="section-188-reference-analysis"></a>
### Reference analysis {#section-190-reference-analysis}

This reference project asks whether a synthetic express queue is faster than a standard queue, while treating a reduction of at least 4 minutes as practically important. It also analyzes a separate paired interface trial and a separate first-contact-resolution outcome. These are three fixtures with three mechanisms; their rows must never be merged into one inferential sample.

The design and estimand ledger is:

| Component | Unit and mechanism | Estimand | Method and conditions |
| --- | --- | --- | --- |
| Queue time | One independently sampled request; iid within each queue and independent between queues | $\\mu_E-\\mu_S$, minutes | Welch interval/test; approximate, positive sample variances, finite moments and defensible sampling process |
| Interface trial | One operator measured on old and new interfaces | $\\mu_D=E(\\text{old}-\\text{new})$, minutes | One-sample t on iid paired differences; exact only for normal positive-variance differences |
| Resolution | One independently sampled request with 1 = resolved on first contact | $p_E-p_S$ | Estimates plus fragile unpooled Wald interval; iid Bernoulli groups and independence |

The raw schemas are \`request_id\` (unique character key), \`queue\` (declared category), and \`minutes\` (positive numeric); \`operator_id\` (unique character key), \`old_minutes\`, and \`new_minutes\` (positive numeric); and one zero-one integer outcome per request. All rows are complete, missingness code is \`NA\`, and no exclusions are made. Math Atlas created the literal synthetic fixtures with original authoring, version 1, under CC BY-SA 4.0.

\`\`\`r
# R12-P01-TIME-v1: independent service-request samples, minutes.
express_id <- c("e01", "e02", "e03", "e04", "e05", "e06")
standard_id <- c("s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08")
express_minutes <- c(14, 15, 16, 18, 19, 21)
standard_minutes <- c(18, 20, 21, 23, 24, 25, 27, 29)

# R12-P01-PAIR-v1: one complete old/new pair per operator, minutes.
project_operator_id <- c("p01", "p02", "p03", "p04", "p05", "p06")
old_project <- c(24, 20, 27, 22, 25, 26)
new_project <- c(21, 19, 22, 21, 20, 24)

# R12-P01-BERN-v1: 1 means resolved on first contact.
express_resolved <- c(1L, 1L, 1L, 1L, 1L, 1L, 1L, 1L, 1L, 0L, 0L, 0L)
standard_resolved <- c(1L, 1L, 1L, 1L, 1L, 1L, 0L, 0L, 0L, 0L, 0L, 0L)

stopifnot(length(unique(express_id)) == 6L)
stopifnot(length(unique(standard_id)) == 8L)
stopifnot(length(intersect(express_id, standard_id)) == 0L)
stopifnot(length(unique(project_operator_id)) == 6L)
stopifnot(!anyNA(express_minutes), !anyNA(standard_minutes))
stopifnot(!anyNA(old_project), !anyNA(new_project))
stopifnot(all(express_resolved %in% 0:1), all(standard_resolved %in% 0:1))

# Independent-group Welch analysis and matching manual calculation.
time_fit <- t.test(express_minutes, standard_minutes, var.equal = FALSE)
v_e <- var(express_minutes)
v_s <- var(standard_minutes)
n_e <- length(express_minutes)
n_s <- length(standard_minutes)
time_difference <- mean(express_minutes) - mean(standard_minutes)
time_se <- sqrt(v_e / n_e + v_s / n_s)
time_df <- (v_e / n_e + v_s / n_s)^2 /
  ((v_e / n_e)^2 / (n_e - 1) + (v_s / n_s)^2 / (n_s - 1))

stopifnot(tol(mean(express_minutes), 17.1666666666667))
stopifnot(tol(mean(standard_minutes), 23.375))
stopifnot(tol(time_difference, -6.20833333333333))
stopifnot(tol(time_se, 1.68447332921166))
stopifnot(tol(time_df, 11.9972549738131))
stopifnot(tol(unname(time_fit$stderr), time_se))
stopifnot(tol(unname(time_fit$parameter), time_df))
stopifnot(tol(time_fit$p.value, 0.00311776145564186))
stopifnot(all(tol(unname(time_fit$conf.int), c(-9.87857857216531, -2.53808809450135))))

# Paired alternative: preserve pairs and analyze old minus new.
paired_difference <- old_project - new_project
paired_project_fit <- t.test(old_project, new_project, paired = TRUE)
paired_as_difference <- t.test(paired_difference, mu = 0)
stopifnot(all(paired_difference == c(3, 1, 5, 1, 5, 2)))
stopifnot(tol(mean(paired_difference), 2.83333333333333))
stopifnot(tol(paired_project_fit$p.value, paired_as_difference$p.value))
stopifnot(tol(paired_project_fit$p.value, 0.0128575346521827))
stopifnot(all(tol(unname(paired_project_fit$conf.int), c(0.907778596028841, 4.75888807063783))))

# Bernoulli estimates and explicitly approximate Wald interval.
project_p_e <- mean(express_resolved)
project_p_s <- mean(standard_resolved)
project_p_difference <- project_p_e - project_p_s
project_p_se <- sqrt(
  project_p_e * (1 - project_p_e) / length(express_resolved) +
    project_p_s * (1 - project_p_s) / length(standard_resolved)
)
project_p_interval <- project_p_difference +
  c(-1, 1) * qnorm(0.975) * project_p_se

stopifnot(sum(express_resolved) == 9L, sum(standard_resolved) == 6L)
stopifnot(tol(project_p_e, 0.75), tol(project_p_s, 0.5))
stopifnot(tol(project_p_difference, 0.25))
stopifnot(tol(project_p_se, 0.190940653956493))
stopifnot(all(tol(project_p_interval, c(-0.124236804939252, 0.624236804939252))))
\`\`\`

The express-minus-standard time estimate is −6.208 minutes. The approximate Welch 95% interval is −9.879 to −2.538 minutes and the two-sided p-value for equal process means is about 0.00312. The point estimate exceeds the predeclared 4-minute practical threshold in the favorable direction, but the interval includes reductions smaller than 4 minutes. Thus the sample supports a lower express mean under the model, while the magnitude is not pinned entirely beyond the practical threshold.

The paired alternative estimates an old-minus-new reduction of 2.833 minutes with a model-based 95% interval from 0.908 to 4.759 minutes. It is a different study and target. The rejected method is an unpaired analysis of these operator readings: it discards known pairs and assumes independent groups that were never sampled. Pooling the independent queue variances is also rejected because no common population variance was assumed.

The resolution estimates are 0.75 and 0.50, a difference of 0.25. The simple Wald interval, approximately −0.124 to 0.624, crosses zero and is fragile with only 12 trials per group. We report it as a warning-labeled approximation, not proof of equality or a contradiction of the time result. The outcomes measure different aspects of service.

<a id="section-281-skew-sensitivity"></a>
### Skew sensitivity {#section-283-skew-sensitivity}

Replace the last express time, 21, by a plausible delayed request of 35 minutes. This is a prespecified sensitivity scenario, not an exclusion and not a rerun chosen to obtain a preferred answer.

\`\`\`r
express_skewed <- c(14, 15, 16, 18, 19, 35)
skew_fit <- t.test(express_skewed, standard_minutes, var.equal = FALSE)
skew_difference <- mean(express_skewed) - mean(standard_minutes)
skew_se <- unname(skew_fit$stderr)

stopifnot(tol(mean(express_skewed), 19.5))
stopifnot(tol(skew_difference, -3.875))
stopifnot(tol(skew_se, 3.44378753976601))
stopifnot(tol(unname(skew_fit$parameter), 6.65287857790668))
stopifnot(tol(skew_fit$p.value, 0.299447506875216))
stopifnot(all(tol(unname(skew_fit$conf.int), c(-12.1051920426125, 4.3551920426125))))
\`\`\`

One observation changes the estimate from −6.208 to −3.875 minutes, more than doubles the estimated SE from 1.684 to 3.444, and expands the approximate interval to −12.105 to 4.355 minutes. That sensitivity makes the small-sample normal/mean procedure questionable and prevents a stable practical conclusion. It does not alter the independent-group design, create pairing, or prove that 35 is erroneous. A defensible follow-up would improve measurement metadata and collect more independently sampled requests under a predeclared plan.

<a id="section-301-bounded-conclusion-and-rubric-score"></a>
### Bounded conclusion and rubric score {#section-303-bounded-conclusion-and-rubric-score}

For the original literal fixture, the express queue has a lower estimated mean service time under the iid independent-group model, but its 95% interval does not put every compatible reduction beyond the 4-minute practical threshold. A single plausible delay reverses the inferential strength, so the small synthetic result is sensitive to skew. The paired and Bernoulli findings concern separate targets. No causal or real-world service claim follows from invented data.

This reference earns 20/20 under the project rubric:

- **Mechanism and estimand, 4/4.** It identifies units, independence or pairing, subtraction signs, targets, outcome units, keys, missingness, and fixture provenance for all three components.
- **Method and hypotheses, 5/5.** It labels Welch and Wald approximate, states the exact paired-normal conditions, rejects pooling and the unpaired treatment of pairs, and does not use unpaired resampling.
- **Numerical, hand, and code checks, 4/4.** It exposes raw values, calculates estimates, standard errors and Welch degrees of freedom manually, matches \`t.test\`, validates keys and Bernoulli bounds, and asserts every displayed result.
- **Uncertainty and practical threshold, 4/4.** It interprets intervals as procedure-based, compares the time result with the predeclared 4-minute threshold, and separates direction from magnitude.
- **Honest failure interpretation, 3/3.** It reports the skew sensitivity, explains why the large value is not automatically an error, bounds the conclusion, and proposes a relevant follow-up.

A submission below 14 does not pass. It also cannot pass with fewer than 3 points in either the first or second category. An analysis that refrains from unsupported inference can earn full credit when its design diagnosis, descriptive work, and proposed repair are complete.

[Return to Comparing Proportions and Means](#/item/book-statistics-with-r?chapter=proportions-and-means).

<a id="section-317-r-12-e09"></a>
## R-12-E09 {#section-319-r-12-e09}

The new mean is $\\bar D+3$. Each new centered deviation is $(D_i+3)-(\\bar D+3)=D_i-\\bar D$, so sample variance and estimated standard error are unchanged. The same $t_{n-1,0.975}$ margin applies, and both endpoints move up by three. The population target also changes by three; one must not use the shifted interval to make an unchanged-target claim.

<a id="section-321-r-12-e10"></a>
## R-12-E10 {#section-323-r-12-e10}

The difference of sample means multiplies by sixty. Each variance contribution $s_j^2/n_j$ multiplies by $3600$, so their sum's square root multiplies by sixty. In $(a+b)^2/[a^2/(n_1-1)+b^2/(n_2-1)]$, numerator and denominator both multiply by $3600^2$, leaving the degrees of freedom unchanged. Therefore the critical quantile is unchanged, the interval scales by sixty, and the test statistic for zero difference is unchanged. Welch's approximation status is also unchanged.

<a id="section-325-sources-and-execution-scope"></a>
## Sources and execution scope {#section-327-sources-and-execution-scope}

The statistical claims and R semantics in these solutions were checked against an accessible reproduction of Student's 1908 [primary paper](https://doi.org/10.1093/biomet/6.1.1), an accessible scan of Welch's 1947 [primary paper](https://doi.org/10.1093/biomet/34.1-2.28), verified bibliographic metadata for Clopper and Pearson's 1934 [primary paper](https://doi.org/10.1093/biomet/26.4.404), and the R Core Team's R 4.6.0 help for [\`t.test\`](https://stat.ethz.ch/R-manual/R-release/library/stats/html/t.test.html), [\`binom.test\`](https://stat.ethz.ch/R-manual/R-release/library/stats/html/binom.test.html), the [normal distribution](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Normal.html), and the [t distribution](https://stat.ethz.ch/R-manual/R-release/library/stats/html/TDist.html). The online release pages were accessed 2026-09-06; the bibliography records the original consultation; this edition links to official help without redistributing its text. The Clopper–Pearson implementation and coverage claim were taken from that current \`binom.test\` help and the endpoint was independently derived and asserted.
`;export{e as default};