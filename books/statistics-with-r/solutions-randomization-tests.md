
# Solutions: Randomization Tests

These solutions use the chapter's inclusive-tail convention. All code blocks form one document and run in order in a fresh R process. The opening block creates the literal fixtures used later.

```r
# Literal fixtures copied from the exercise statements.
y <- c(1, 2, 4, 8)
household_y <- c(2, 3, 9, 10)
stopifnot(!anyNA(y), !anyNA(household_y))
```

## R-09-E01

The treated pairs are

$$
(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5).
$$

There are $\binom{5}{2}=10$ because choosing the two treated units determines the three controls. In the matrix returned by `combn`, each column is one treated pair. Thus two rows encode the two selected indices, while ten columns encode the assignments.

```r
assignments_5 <- combn(5L, 2L)
expected_5 <- matrix(
  c(
    1L, 2L, 1L, 3L, 1L, 4L, 1L, 5L, 2L, 3L,
    2L, 4L, 2L, 5L, 3L, 4L, 3L, 5L, 4L, 5L
  ),
  nrow = 2L
)
contains_45 <- any(apply(
  assignments_5,
  2L,
  function(idx) identical(idx, c(4L, 5L))
))

stopifnot(identical(dim(assignments_5), c(2L, 10L)))
stopifnot(identical(assignments_5, expected_5))
stopifnot(contains_45)
assignments_5
```

## R-09-E02

For each pair, subtract the mean of its complement:

| Treated pair | Calculation | Contrast |
|---|---|---:|
| 1,2 | $(1+2)/2-(4+8)/2$ | $-4.5$ |
| 1,3 | $(1+4)/2-(2+8)/2$ | $-2.5$ |
| 1,4 | $(1+8)/2-(2+4)/2$ | $1.5$ |
| 2,3 | $(2+4)/2-(1+8)/2$ | $-1.5$ |
| 2,4 | $(2+8)/2-(1+4)/2$ | $2.5$ |
| 3,4 | $(4+8)/2-(1+2)/2$ | $4.5$ |

Complementary pairs reverse treatment and control. Therefore their contrasts are opposites: $(1,2)$ pairs with $(3,4)$, $(1,3)$ with $(2,4)$, and $(1,4)$ with $(2,3)$. Each complementary pair sums to zero, so all six values sum to zero.

```r
assignments_4 <- combn(seq_along(y), 2L)
contrast_4 <- function(treated_idx) {
  control_idx <- setdiff(seq_along(y), treated_idx)
  mean(y[treated_idx]) - mean(y[control_idx])
}
stats_4 <- apply(assignments_4, 2L, contrast_4)
expected_stats_4 <- c(-4.5, -2.5, 1.5, -1.5, 2.5, 4.5)
tol_4 <- 1e-10 + 1e-8 * abs(expected_stats_4)

stopifnot(all(abs(stats_4 - expected_stats_4) <= tol_4))
stopifnot(abs(sum(stats_4)) <= (1e-10 + 1e-8 * abs(0)))
stats_4
```

## R-09-E03

Let $N=|\Omega|$. Under the sharp null and no interference, one fixed outcome vector is valid for every assignment. Because the realized assignment is uniform, each of the $N$ assignments has probability $1/N$.

Order assignments so their extremeness scores $S(T)$ decrease. Break ties in any order. Consider the assignment at position $j$. Its inclusive tail contains all $j-1$ earlier assignments, itself, and any later assignments tied with it. Its tail count is at least $j$, so its p-value is at least $j/N$.

If the assignment at position $j$ satisfies $p\le\alpha$, then $j/N\le\alpha$. Hence $j\le\alpha N$. At most $\lfloor\alpha N\rfloor$ positions can satisfy this condition. Uniformity now gives

$$
\Pr\{p(W)\le\alpha\}
\le \frac{\lfloor\alpha N\rfloor}{N}
\le\alpha
$$

for every $\alpha\in[0,1]$. Ties do not threaten the proof: inclusive counting only enlarges a tied assignment's tail beyond its position. If every score is tied, every inclusive tail contains all $N$ assignments, so every p-value is 1. The test never rejects when $\alpha<1$; at $\alpha=1$, rejection has probability 1, equal to the allowed bound.

The hypotheses are indispensable to this proof. Uniformity supplies equal masses; the sharp null and no interference make the fixed outcome schedule valid; predeclaring $T$ and $S$ prevents selection based on the realized assignment.

The next code checks a tied finite example. It illustrates the theorem but does not replace the general proof.

```r
tied_scores <- c(3, 3, 1, 1, 1, 0)
tied_p <- vapply(
  tied_scores,
  function(observed) mean(tied_scores >= observed),
  numeric(1L)
)
all_tied_scores <- rep(2, 6L)
all_tied_p <- vapply(
  all_tied_scores,
  function(observed) mean(all_tied_scores >= observed),
  numeric(1L)
)

alpha_grid <- seq(0, 1, by = 0.01)
bound_holds <- vapply(
  alpha_grid,
  function(alpha) mean(tied_p <= alpha) <= alpha + 1e-12,
  logical(1L)
)
stopifnot(all(bound_holds))
stopifnot(identical(all_tied_p, rep(1, 6L)))
stopifnot(!any(all_tied_p <= 0.999), all(all_tied_p <= 1))
cbind(score = tied_scores, inclusive_p = tied_p)
```

## R-09-E04

For an upper-tail alternative—fertilizer raises the outcome, for example—larger positive treated-minus-control contrasts are more extreme. Only $4.5$ reaches the observed $4.5$, so $p_{\mathrm{upper}}=1/6$.

For a two-sided alternative—treatment changes the outcome in either direction—the declared score is $|T|$. Both $-4.5$ and $4.5$ reach $|4.5|$, so $p_{\mathrm{absolute}}=2/6=1/3$.

Doubling happens to give the same answer here because the distribution is symmetric and the observation is at a symmetric endpoint. In a discrete asymmetric distribution, twice one tail can count probability that has no equally extreme counterpart, omit mass selected by another two-sided ordering, or exceed 1. A two-sided randomization test therefore needs an explicit extremeness rule; $|T|$ is the rule used here.

```r
observed_4 <- contrast_4(c(3L, 4L))
upper_4 <- mean(stats_4 >= observed_4)
absolute_4 <- mean(abs(stats_4) >= abs(observed_4))

stopifnot(abs(upper_4 - 1 / 6) <= (1e-10 + 1e-8 * abs(1 / 6)))
stopifnot(abs(absolute_4 - 2 / 6) <= (1e-10 + 1e-8 * abs(2 / 6)))
c(upper = upper_4, absolute_two_sided = absolute_4)
```

## R-09-E05

The missing fact is a known random assignment mechanism. Students chose attendance, so the researcher has no design-based reason to assign equal probability to every attendee-label arrangement. For instance, motivation may increase both the chance of attending and later exam performance. Prior preparation, free time, or access to transport could play similar roles. Under such confounding, the labels are not exchangeable under the causal sharp null.

With added assumptions, a permutation procedure could address a noncausal association null such as: conditional on a prespecified set of covariates and within the permitted strata, the joint score distribution is invariant to attendee-label permutations. That claim requires a sampling model, a precise restricted permutation scheme, and justification of conditional exchangeability. Even if the test is valid for that association null, it does not identify the causal effect of forcing attendance.

Equal population means would also be insufficient by itself. Two group distributions can share a mean while differing in spread or shape, so arbitrary labels need not be exchangeable.

## R-09-E06

The real design can treat household A, giving contrast $-7$, or household B, giving contrast $7$. When B is observed treated, exactly one of the two possible assignments is at least as large as 7. The valid upper-tail p-value is therefore $1/2$.

If any pair of rows is treated, `combn(4, 2)` invents six assignments. Only the pair $(3,4)$ reaches 7, producing $1/6$. Four of those six assignments split a household across conditions, which the coin flip could never do. The denominator 6 counts row-level assignments, while the design randomized one of two household-level assignments.

```r
household_contrast <- function(treated_idx) {
  control_idx <- setdiff(seq_along(household_y), treated_idx)
  mean(household_y[treated_idx]) - mean(household_y[control_idx])
}

valid_household_assignments <- matrix(c(1L, 2L, 3L, 4L), nrow = 2L)
fictional_row_assignments <- combn(seq_along(household_y), 2L)
valid_household_stats <- apply(
  valid_household_assignments,
  2L,
  household_contrast
)
fictional_row_stats <- apply(
  fictional_row_assignments,
  2L,
  household_contrast
)
observed_household <- household_contrast(c(3L, 4L))
p_household <- mean(valid_household_stats >= observed_household)
p_rows <- mean(fictional_row_stats >= observed_household)

stopifnot(identical(valid_household_stats, c(-7, 7)))
stopifnot(abs(p_household - 1 / 2) <= (1e-10 + 1e-8 * abs(1 / 2)))
stopifnot(abs(p_rows - 1 / 6) <= (1e-10 + 1e-8 * abs(1 / 6)))
c(valid_household_p = p_household, invalid_row_p = p_rows)
```

## R-09-E07

Here $B=99$ and $b=0$. The declared plus-one rule gives

$$p_{\mathrm{MC}}=\frac{0+1}{99+1}=0.01.$$

This is also the smallest value the rule can report with 99 draws. Inferentially, $b/B=0$ is not a valid p-value boundary: observing no exceedances in a finite random sample does not show that the exact tail is empty, and an exact enumeration always includes the observed assignment. Computationally, the analyst mislabeled a random approximation as exact and hid its Monte Carlo resolution.

For $p_{\mathrm{MC}}=(b+1)/(B+1)$, conditional on the observed data, $b$ has binomial variance $Bq(1-q)$, where $q$ is the exact tail proportion. Taking the positive square root gives $\operatorname{SD}(b)=\sqrt{Bq(1-q)}$; adding 1 leaves that standard deviation unchanged, and dividing by $B+1$ divides it by $B+1$. Thus the conditional Monte Carlo standard error is

$$\frac{\sqrt{Bq(1-q)}}{B+1}.$$

Since $q(1-q)\le1/4$, the worst case is $\sqrt{B}/\{2(B+1)\}$. At $B=99$, this is about $0.04975$. Notice that substituting $b/B=0$ into a plug-in standard-error formula would misleadingly return zero; the worst-case bound exposes the poor resolution.

```r
B_zero <- 99L
b_zero <- 0L
p_plus_one <- (b_zero + 1) / (B_zero + 1)
worst_case_se <- sqrt(B_zero) / (2 * (B_zero + 1))

stopifnot(abs(p_plus_one - 0.01) <= (1e-10 + 1e-8 * abs(0.01)))
stopifnot(abs(worst_case_se - 0.049749371855331) <=
  (1e-10 + 1e-8 * abs(0.049749371855331)))
c(plus_one_p = p_plus_one, worst_case_mc_se = worst_case_se)
```

## R-09-E08

A complete pre-data ledger could read as follows.

**Question and units.** For these eight fixed greenhouse benches, does assignment to the specified fertilizer increase mean four-week growth relative to the specified control? A bench is the randomized and analysis unit. The outcome is one prespecified growth measurement per bench in centimeters after four weeks.

**Target.** The finite causal mean estimand for these eight benches is

$$
\tau_8=\frac{1}{8}\sum_{i=1}^{8}\{Y_i(1)-Y_i(0)\}
$$

in centimeters. It averages the eight benches' treatment effects and is distinct from the observed statistic $T_{\mathrm{obs}}$, the mean growth among fertilizer-assigned benches minus the mean growth among control-assigned benches. The sharp null tested says every individual effect is zero, so it implies $\tau_8=0$. The converse fails: individual effects $(1,-1,0,0,0,0,0,0)$ centimeters have mean zero even though the first two effects are nonzero. Thus this exact test addresses the stronger sharp null. It does not by itself provide an estimate or confidence interval for $\tau_8$. A positive observed contrast is the prespecified direction of interest.

**Mechanism and assignment space.** A documented lottery selects exactly four of the eight labeled benches, uniformly among $\binom{8}{4}=70$ treated sets. The remaining four receive control. The ledger should also record any physical restrictions; as stated, there are no blocks or clusters.

**Assumptions.** Treatment versions and timing are fixed; one bench's fertilizer does not affect another bench's growth; the lottery is implemented as described; and the sharp null makes the observed outcome vector fixed across the 70 assignments. If nearby fertilizer can contaminate controls, no interference fails and this test is not justified without a different exposure model.

**Analysis.** Before outcomes are inspected, freeze $T=$ treated mean minus control mean and the inclusive upper tail $T\ge T_{\mathrm{obs}}$. Enumerate all 70 assignments, recompute $T$, and report the observed contrast, the integer upper-tail count, denominator 70, and their ratio. No plus-one adjustment is used for complete enumeration.

**Missing data.** Record all eight outcomes, including any missing value and its reason. Do not silently omit a bench, because omission changes the fixed assignment space and may break the four-versus-four design. A missing-outcome handling rule must be justified and frozen before revealing treatment comparisons; if no defensible rule was prespecified, report that the planned exact analysis cannot be completed as written.

**Conclusion boundary.** Interpret the p-value as compatibility of the observed assignment statistic with the sharp no-effect null under the stated lottery. Report effect magnitude separately in centimeters. Do not call the p-value the probability that the null is true, claim it estimates a confidence interval, or generalize beyond these benches, four weeks, and treatment versions without additional sampling and scientific assumptions.

The assignment count can be checked before data arrive:

```r
greenhouse_assignments <- combn(8L, 4L)
counterexample_effects_cm <- c(1, -1, 0, 0, 0, 0, 0, 0)
stopifnot(identical(dim(greenhouse_assignments), c(4L, 70L)))
stopifnot(choose(8L, 4L) == 70)
stopifnot(length(counterexample_effects_cm) == 8L)
stopifnot(mean(counterexample_effects_cm) == 0)
stopifnot(any(counterexample_effects_cm != 0))
dim(greenhouse_assignments)
```

The solutions, prose, and code are original Math Atlas material under CC BY-SA 4.0.

## R-09-E09

The p-values are one at a, one half at b, and one sixth at c. Only c is rejected at level one quarter, so its actual null rejection probability is one sixth, below the chosen level. Counting allocations and dividing by three would instead give one, two thirds and one third and describe a different uniform lottery. The chapter's uniform tail-rank theorem is not applied unchanged: direct enumeration verifies this particular weighted design and exposes the role of its probability law.

## R-09-E10

The four equally likely treated pairs are {1,3},{1,4},{2,3},{2,4}. Their sums are five, nine, six and ten, giving contrasts -2.5,1.5,-1.5,2.5 points. Only the final allocation reaches the observed 2.5, so the inclusive upper-tail value is one quarter. The unrestricted six-pair space would add {1,2} and {3,4}, which this lottery could never choose. Exactness belongs to the stated allocation mechanism together with the sharp-null and no-interference conditions, rather than to a generic permutation command.

