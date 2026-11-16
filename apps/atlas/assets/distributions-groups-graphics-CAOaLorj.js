var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-distributions-groups-graphics
title: "Solutions: Distributions, Groups, and Honest Graphics"
level: undergraduate
license: CC BY-SA 4.0
---

# Solutions: Distributions, Groups, and Honest Graphics

These solutions show the calculation and the statistical reason for it. The same number can be a finite-population description or a sample statistic, so each denominator and target remains explicit.

This document is independently executable. It recreates the original chapter fixture rather than using hidden state. Fixture \`R05-WAIT-V1\`, created by Math Atlas, version 1, contains 21 literal synthetic visits: one row per visit, unique character key \`visit_id\`, declared factor \`route\`, numeric waiting time in minutes, \`NA\` as the missing code with none present, and no exclusions. It is teaching data, not evidence about a real service.

\`\`\`r
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
\`\`\`

Return to the [chapter](#/item/book-statistics-with-r?chapter=distributions-groups-graphics) for the definitions and proofs these answers use.

## R-05-I01

### Reference response and rubric

Before calculating, a defensible prediction is that Desk S and Desk V can share a mean while V has greater spread, that replacing 16 by 40 will pull the mean and SD upward more strongly than the median and quartiles, and that changing minutes to seconds cannot reverse which SD is larger. The controls are ten visits per desk, no exclusions, type-7 quartiles, sample SD with denominator (n-1), and common histogram breaks.

Fixture \`R05-DESKS-V1\`, created by Math Atlas, version 1, has one row per listed synthetic visit, a desk label, waiting time in minutes, 20 rows before the adverse replacement, \`NA\` as the missing code with none present, and no exclusions. The literal vectors below are its canonical provenance.

\`\`\`r
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
\`\`\`

Desk S and original Desk V both average 10 minutes, but S ranges only from 8 to 12 while V ranges from 4 to 16. Their sample SDs are approximately 1.15 and 3.56 minutes. The common-bin table puts all ten S waits in the two cells from 5 through 15, while V also occupies the cells at or below 5 and from 15 through 20. Equal means therefore do not make these empirical distributions interchangeable when predictability matters.

After the single controlled replacement, V's mean is 12.4 minutes and its SD is approximately 10.11 minutes. Its median remains 10, and its type-7 quartiles stay at 8.25 and 11.75: the type-7 interquartile interval is unchanged. The maximum and the final bin make the separated 40-minute tail explicit. Multiplying by 60 multiplies both desk SDs by 60, so V remains more variable; variances multiply by 3600.

A bounded conclusion is: “For these listed invented visits, desks S and V had the same original mean of 10 minutes, but V had substantially more empirical spread. Replacing V's 16-minute maximum with 40 increased its mean and SD while leaving its median and type-7 quartiles unchanged. The fixture supplies no sampling or assignment mechanism, so it cannot establish a population pattern or an effect caused by desk procedures.” Separate axes, concealed bins, or deletion of the 40-minute value would defeat the controlled comparison.

Rubric application, 12/12: the response states a testable prediction and question (2); holds counts, conventions, and bins fixed and checks calculations (3); compares location, spread, and the tail accurately (3); supplies the \`desk_summary\` and \`desk_bins\` numerical alternatives plus a prose reading (2); and limits the conclusion to the synthetic visits and mechanism (2). A learner response need not match this wording. A score below 8 does not pass, and neither concealment of 40 nor a causal claim can pass.

## R-05-E01

At \\(t=2\\), two of the five observations are at or below the threshold, so \\(F_5(2)=2/5=0.4\\). At \\(t=6\\), the values 2, 2, and 5 qualify, giving \\(F_5(6)=3/5=0.6\\). Every value is at or below 9, so \\(F_5(9)=1\\).

\`\`\`r
x_e01 <- c(2, 2, 5, 7, 9)
t_e01 <- c(2, 6, 9)
counts_e01 <- vapply(t_e01, function(t) sum(x_e01 <= t), integer(1))
proportions_e01 <- counts_e01 / length(x_e01)

stopifnot(identical(counts_e01, c(2L, 3L, 5L)))
stopifnot(all(abs(proportions_e01 - c(0.4, 0.6, 1)) <=
              1e-10 + 1e-8 * abs(c(0.4, 0.6, 1))))
\`\`\`

The empirical distribution assigns mass (1/5) to each observation, not each distinct number. The two recorded 2s belong to two units, so omitting one would silently change the row count and denominator.

## R-05-E02

The ordered data already appear in order. With \\(n=6\\), the median is halfway between the third and fourth values: \\((3+8)/2=5.5\\). For \\(p=0.25\\), \\(h=5(0.25)+1=2.25\\). Thus \\(j=2\\), \\(\\gamma=0.25\\), and

\\[
Q_7(0.25)=0.75x_{(2)}+0.25x_{(3)}=0.75(3)+0.25(3)=3.
\\]

For \\(p=0.75\\), \\(h=4.75\\), so \\(Q_7(0.75)=0.25(8)+0.75(12)=11\\).

\`\`\`r
x_e02 <- c(1, 3, 3, 8, 12, 20)
q_e02 <- quantile(x_e02, c(0.25, 0.5, 0.75), type = 7, names = FALSE)
stopifnot(all(abs(q_e02 - c(3, 5.5, 11)) <=
              1e-10 + 1e-8 * abs(c(3, 5.5, 11))))
\`\`\`

Quantiles between order statistics require a convention. Other named rules use different ranks or interpolation weights, so disagreement can be correct under different declared conventions.

## R-05-E03

Write \\(x_i-c=(x_i-\\bar{x})+(\\bar{x}-c)\\), square, and sum:

\\[
\\sum_i(x_i-c)^2=\\sum_i(x_i-\\bar{x})^2
+2(\\bar{x}-c)\\sum_i(x_i-\\bar{x})+n(\\bar{x}-c)^2.
\\]

The middle sum is \\(\\sum_i x_i-n\\bar{x}=0\\), proving the identity. The final term is nonnegative and equals zero exactly when \\(c=\\bar{x}\\). Therefore choosing the mean minimizes the sum of squared distances; if \\(n>0\\), it is the unique minimizer.

For \\(x=(1,4,7)\\), \\(\\bar{x}=4\\). The centered sum is \\(9+0+9=18\\). With \\(c=5\\), the left side is \\(16+1+4=21\\), and the right side is \\(18+3(4-5)^2=21\\).

\`\`\`r
x_e03 <- c(1, 4, 7)
c_e03 <- 5
lhs_e03 <- sum((x_e03 - c_e03)^2)
rhs_e03 <- sum((x_e03 - mean(x_e03))^2) +
  length(x_e03) * (mean(x_e03) - c_e03)^2
stopifnot(lhs_e03 == 21, rhs_e03 == 21, lhs_e03 == rhs_e03)
\`\`\`

## R-05-E04

The mean is 6 and deviations are \\((-3,-1,1,3)\\). Their squares sum to \\(9+1+1+9=20\\). For the complete finite population, \\(N=4\\), so the descriptive variance is \\(20/4=5\\). For the sample, \\(n=4\\), so \\(s^2=20/(4-1)=20/3\\approx6.667\\).

\`\`\`r
x_e04 <- c(3, 5, 7, 9)
ss_e04 <- sum((x_e04 - mean(x_e04))^2)
finite_variance_e04 <- ss_e04 / length(x_e04)
sample_variance_e04 <- var(x_e04)

stopifnot(ss_e04 == 20)
stopifnot(finite_variance_e04 == 5)
stopifnot(abs(sample_variance_e04 - 20 / 3) <= 1e-10 + 1e-8 * abs(20 / 3))
\`\`\`

\`var()\` returns (20/3) because R defines it with denominator (n-1). The finite-population calculation describes all four declared machines. The sample calculation treats the four runs as observations from a wider process. Merely changing the label without a real mechanism would not justify the wider target.

## R-05-E05

With \\(z=100x\\), variance multiplies by \\(100^2=10{,}000\\) and SD by 100. The converted variance is \\(22{,}500\\) square centimetres and the converted SD is 150 centimetres. One physically admissible vector is \\((1.5,3,4.5)\\) metres: its deviations from 3 metres are \\((-1.5,0,1.5)\\), whose squared sum is 4.5 square metres, so its sample variance is \\(4.5/2=2.25\\) square metres.

\`\`\`r
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
\`\`\`

Mathematically adding 30 centimetres shifts every value and its mean equally, leaving every deviation and both spread measures unchanged. The algebra establishes a common shift only. Whether such an addition represents a change of measurement origin or a physical change requires contextual justification that this exercise does not supply.

## R-05-E06

Both groups have mean and median 4. Type-7 quartiles for A are 3 and 5; for B they are 2 and 6. The sample variances are 4 and 16, the SDs are 2 and 4, and the ranges are \\(6-2=4\\) and \\(8-0=8\\).

\`\`\`r
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
\`\`\`

For these two listed three-value groups, equal means and medians hide that every spread measure shown is twice as large on the original scale for B, while B's variance is four times A's. This is an empirical description of the given values; no population mechanism was supplied.

## R-05-E07

First, because bar length encodes each absolute mean from its baseline, truncating the vertical axis at 6.0 makes the 1.5-minute difference occupy most of the visible lengths and misrepresents the magnitudes. Bars encoding absolute means require a zero baseline. Second, omitting the value 18 conceals the second group's upper tail and may even change its displayed mean if the calculation silently excludes it. Third, a mean-only display hides within-group spread and overlap; the unequal counts 12 and 9 are also unavailable to the reader.

A repaired bar chart would start at zero, show both absolute means, and state that its bars encode magnitude by length. A more informative repair would show every observed value in both groups on one clearly labeled common contextual minute range that includes 18, using distinct shapes or line types as well as color. A point or raw-value display may use a nonzero lower limit because position, rather than length from the baseline, carries the value; the chosen range must remain common to the groups and preserve relevant context, overlap, and tails. The display would print \\(n=12\\) and \\(n=9\\), state all exclusions, and accompany the graphic with a table of mean, median, type-7 quartiles, SD, minimum, and maximum. The numerical alternative is that complete table plus ordered values or fixed-threshold counts. The prose alternative should name the 1.5-minute mean difference, describe overlap and spread, and explicitly locate the 18-minute tail.

The repair still supports only the comparison allowed by the group mechanism. It cannot turn self-selection into random assignment or establish a wider population target.

## R-05-E08

The following independently reconstructs the table used in the paragraph.

\`\`\`r
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
\`\`\`

For the complete 21-visit synthetic fixture, North has 9 listed waits and South has 12. North's mean is 7.56 minutes, median 6, type-7 quartiles 5 and 8, and sample SD about 4.22 minutes; South's mean is 6.08, median 5.5, type-7 quartiles 4.75 and 7.25, and sample SD about 2.31 minutes. The interval between interpolated quartiles need not contain exactly half the observed values. Much of the observed distributions overlaps, but North includes an isolated 18-minute wait beyond South's maximum of 11; that value lifts North's mean and SD more strongly than its median and quartiles.

The target in that paragraph is exactly the listed invented visits. No random sample from a wider population and no assignment of visits to routes was supplied. Consequently the paragraph neither generalizes the difference to future visits nor attributes it causally to route.


## R-05-E09

The original total is twenty, so the mean and median are both four minutes. The revised total is seventy four, giving mean 14.8, while the median stays four. A numerical alternative should list all five values, identify which version is displayed, and retain the revised maximum of sixty. The mean and median describe different empirical features. Deleting the long wait would redefine the dataset and hide the tail being investigated rather than repair the display.

## R-05-E10

The relative frequencies are one quarter and three quarters. Heights are $(1/4)/1=1/4$ and $(3/4)/3=1/4$ per declared unit. Equal heights give the wider bar three times the area. Heights five and fifteen would produce areas five and forty five, a one-to-nine ratio rather than the required one-to-three. A table containing boundaries, widths, counts, proportions and heights makes the graphical rule accessible without seeing the bars.

## Sources and authorship

R behavior in these solutions was checked against the installed R 4.6.0 primary help pages for \`var\`/\`cov\`, \`sd\`, \`quantile\`, and \`hist\`, plus R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24). All prose, fixtures, investigation work, exercise solutions, and code are original Math Atlas material under CC BY-SA 4.0. No human review is claimed in this draft.
`;export{e as default};