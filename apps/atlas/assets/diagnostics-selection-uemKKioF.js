var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-diagnostics-selection
title: "Solutions: Diagnostics, Multiplicity, and the Analyses We Chose"
level: undergraduate
estimated_minutes: 70
license: CC BY-SA 4.0
---

# Solutions: Diagnostics, Multiplicity, and the Analyses We Chose

These solutions are independently executable. The literal fixtures below are original synthetic Math Atlas data, version 1. Waiting times are minutes, load is active-call count, ticket IDs are unique keys, \`NA\` is the sole missing code, q14 alone is missing, and no source row is silently excluded.

\`\`\`r
service <- data.frame(
  ticket_id = sprintf("q%02d", 1:14),
  queue = rep(c("A", "B"), each = 7L),
  load_calls = rep(1:7, 2L),
  wait_min = c(8, 10, 11, 13, 15, 16, 31, 10, 12, 13, 15, 17, 19, NA),
  duration_status = c(rep("verified_min", 6L), "needs_source_check",
                      rep("verified_min", 7L)),
  stringsAsFactors = FALSE
)
stopifnot(nrow(service) == 14L)
stopifnot(anyDuplicated(service$ticket_id) == 0L)
stopifnot(identical(which(is.na(service$wait_min)), 14L))
\`\`\`

## R-14-E01

The table supports saying that r3 has the largest displayed residual and the largest displayed Cook's distance. It also supports calling r3 influential relative to this fitted line and these rows. It does not establish that r3 was recorded incorrectly, and it cannot prove independent errors, a linear conditional mean, constant error variance, or normal errors.

A defensible next action is to inspect r3's source record, units, timestamps, and collection process. Then retain the original analysis and add a labeled sensitivity fit without r3 if dependence on the row matters. Deleting r3 merely because its Cook's distance is 1.30 reverses the evidential order: the model would be used to erase data that disagree with it.

## R-14-E02

Let $I_0$ index the true nulls. For each $j\\in I_0$, define $A_j=\\{P_j\\le0.01\\}$ because $0.06/6=0.01$. Validity gives $\\Pr(A_j)\\le0.01$. The union bound yields

$$
\\Pr\\left(\\bigcup_{j\\in I_0}A_j\\right)
\\le\\sum_{j\\in I_0}\\Pr(A_j)
\\le |I_0|(0.01).
$$

If all six nulls are true, this is at most $6(0.01)=0.06$. If only four are true, it is at most $4(0.01)=0.04$, which is still no greater than 0.06. Independence never appears: the union bound holds for arbitrarily dependent events. The fixed family and valid marginal p-values are the conditions doing the work.

## R-14-E03

Multiplying by five gives $(0.020,0.090,0.255,2.000,4.500)$. Capping at 1 gives

$$
(0.020,0.090,0.255,1.000,1.000).
$$

Only the first adjusted p-value is at most 0.05, so only the first hypothesis is rejected. A common error is to leave 2 and 4.5 as adjusted p-values even though p-values live in $[0,1]$.

For any level $\\alpha<1$, $p\\le\\alpha/5$ exactly when $\\min(1,5p)\\le\\alpha$. For the first three p-values, $5p\\le1$, so the adjusted value $5p$ is an attainable smallest threshold for the raw rule. For 0.40 and 0.90, however, $5p>1$: even $\\alpha=1$ cannot satisfy the raw inequalities $p\\le\\alpha/5$. Their adjusted values of 1 record the cap and no rejection below 1; 1 is not an attainable smallest raw threshold for those tests.

\`\`\`r
exercise_p <- c(0.004, 0.018, 0.051, 0.40, 0.90)
exercise_adjusted <- p.adjust(exercise_p, method = "bonferroni")
manual_adjusted <- pmin(1, 5 * exercise_p)
expected_adjusted <- c(0.020, 0.090, 0.255, 1.000, 1.000)
tol <- 1e-10 + 1e-8 * abs(expected_adjusted)

stopifnot(all(abs(exercise_adjusted - manual_adjusted) <= tol))
stopifnot(all(abs(exercise_adjusted - expected_adjusted) <= tol))
stopifnot(identical(exercise_adjusted <= 0.05,
                    c(TRUE, FALSE, FALSE, FALSE, FALSE)))

levels_below_one <- c(0, 0.05, 0.50, 0.999)
raw_rule <- outer(exercise_p, levels_below_one,
                  function(p, level) p <= level / 5)
capped_rule <- outer(exercise_adjusted, levels_below_one,
                     function(adjusted, level) adjusted <= level)
stopifnot(identical(raw_rule, capped_rule))
saturated <- 5 * exercise_p > 1
stopifnot(identical(saturated, c(FALSE, FALSE, FALSE, TRUE, TRUE)))
stopifnot(all(exercise_adjusted[saturated] == 1))
stopifnot(!any(exercise_p[saturated] <= 1 / 5))
exercise_adjusted
\`\`\`

## R-14-E04

The three primary-outcome tests are the original confirmatory family because the protocol fixed them before their outcomes were viewed. The two subgroup tests were selected after the outcome with the smallest p-value was known. They should be reported as exploratory, together with the path that selected the outcome and subgroups.

Adding the subgroup tests to a recalculated family of five does not retroactively make the data-dependent rule predeclared. That five-member list omits the selection step: the analyst could have inspected subgroups for whichever primary outcome looked best. A new independent study with prespecified subgroup claims, or a method designed for the full selection rule, is needed for an ordinary confirmatory guarantee.

## R-14-E05

For independent Uniform(0,1) p-values, the probability that one p-value exceeds 0.05 is 0.95. Independence makes the probability all eight exceed 0.05 equal to $0.95^8$. Therefore

$$
\\Pr(\\min_j P_j\\le0.05)=1-0.95^8\\approx0.33658.
$$

So the outcome-selected report crosses 0.05 about 33.7% of the time under this all-null mechanism. Bonferroni would compare each of the eight fixed tests with $0.05/8=0.00625$. The exact 33.7% calculation uses independence; the Bonferroni union-bound guarantee does not.

\`\`\`r
selected_error <- 1 - (1 - 0.05)^8
bonferroni_cutoff <- 0.05 / 8
stopifnot(abs(selected_error - 0.3365795687109378) <= 1e-12)
stopifnot(abs(bonferroni_cutoff - 0.00625) <= 1e-12)
c(selected_error = selected_error, bonferroni_cutoff = bonferroni_cutoff)
\`\`\`

## R-14-E06

Queue A's mean is $104/7\\approx14.857$ minutes. If q14 is 9, queue B's mean is $(86+9)/7=95/7\\approx13.571$, so A minus B is $9/7\\approx1.286$ minutes. If q14 is 25, B's mean is $(86+25)/7=111/7\\approx15.857$, so A minus B is $-1$ minute.

The sign change establishes that the descriptive queue comparison is sensitive to the stipulated missing value. It does not establish that q14 is 9 or 25, supply a missingness mechanism, identify a population mean difference, or support a causal effect.

\`\`\`r
mean_A <- 104 / 7
diff_low <- mean_A - (86 + 9) / 7
diff_high <- mean_A - (86 + 25) / 7
stopifnot(abs(diff_low - 9 / 7) <= 1e-12)
stopifnot(abs(diff_high - (-1)) <= 1e-12)
c(q14_low_A_minus_B = diff_low, q14_high_A_minus_B = diff_high)
\`\`\`

## R-14-E07

While q07's source is unresolved, the two slopes show that the fitted association depends materially on that row: the estimate changes by about $2.523-1.700=0.823$ minutes per call. The omission is a sensitivity scenario, not a corrected analysis. Both fits and q07's unresolved status should remain visible.

If an audit verifies a unit error and supplies the correct value, create a new data version containing that correction, record the old value, new value, evidence, and time of correction, then refit the predeclared formula. Report the corrected fit as the primary data-quality repair and keep the earlier fits in the history. Verification of a unit correction improves data accuracy; it still does not create random sampling, causal identification, or prove linear-model assumptions.

\`\`\`r
slope_recorded <- 2.52325581395349
slope_omitting_q07 <- 1.7
slope_change <- slope_recorded - slope_omitting_q07
stopifnot(abs(slope_change - 0.82325581395349) <= 1e-12)
slope_change
\`\`\`

## R-14-E08

One adequate ledger is:

| Order | Analysis | Were outcomes visible? | Decision | Reporting status |
|---:|---|:---:|---|---|
| 1 | Predeclared queue comparison on recorded scale | no | retain as primary | report estimate, p = 0.11, and assumptions |
| 2 | Log-transformed outcome | yes | exploratory | report result, not only if favorable |
| 3 | Under-30 subgroup | yes | exploratory subgroup search | report selection path and subgroup result |
| 4 | Delete longest wait | yes | reject as primary without source evidence | report p = 0.03 as sensitivity output |

A bounded conclusion is: “The predeclared comparison did not produce strong evidence against its null under the stated method ($p=0.11$). A deletion chosen after viewing outcomes produced $p=0.03$, but that selected sensitivity result lacks the advertised ordinary 0.05 type I error guarantee and does not justify deleting the row.”

The tempting conclusion “after removing an outlier, queues differ significantly” conceals both the outcome-driven deletion and the absence of source evidence that the row is wrong. Reproducibly obtaining 0.03 would verify the arithmetic only.

\`\`\`r
analysis_ledger <- data.frame(
  order = 1:4,
  analysis = c("predeclared recorded scale", "log outcome",
               "under-30 subgroup", "delete longest wait"),
  outcome_visible = c(FALSE, TRUE, TRUE, TRUE),
  status = c("primary", "exploratory", "exploratory", "sensitivity"),
  reported = rep(TRUE, 4L),
  stringsAsFactors = FALSE
)
stopifnot(identical(analysis_ledger$order, 1:4))
stopifnot(nrow(analysis_ledger) == 4L)
stopifnot(all(analysis_ledger$reported))
stopifnot(identical(analysis_ledger$status,
                    c("primary", "exploratory", "exploratory", "sensitivity")))
analysis_ledger
\`\`\`

Return to [the chapter discussion surrounding Exercises R-14-E01–R-14-E10](#/item/book-statistics-with-r?chapter=diagnostics-selection).

The solution text, computations, and fixtures are original Math Atlas material and are licensed CC BY-SA 4.0.
## R-14-E09

For each of the seven true nulls, validity bounds rejection probability by $0.05/20=0.0025$. The union bound gives at most $7(0.0025)=0.0175$, which is below the familywise target $0.05$. The twenty-test rule works without knowing which seven are true; using that unknown truth to redefine the testing family after seeing data would be a different procedure.

## R-14-E10

The planned unit check needs a source-linked exclusion or conversion ledger, retained raw values, a justified target and a report of the rule. It can be defensible when it implements the declared schema, but it still does not prove the sampling model. The p-value-minimizing exclusion is outcome-driven selection and must be recorded with all attempted analyses; its ordinary final p-value lacks the original fixed-analysis calibration. Source-verified corrections can be reported transparently, while exploratory sensitivity cannot be relabeled as an independent confirmation.

`;export{e as default};