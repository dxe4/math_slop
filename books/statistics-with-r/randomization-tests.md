
# Randomization Tests: Let the Design Generate the Reference Distribution

Suppose four experimental units receive two treatment slots. The treated units have much larger observed outcomes than the controls. Is that separation surprising, or could the assignment lottery readily have produced it even if treatment changed nothing?

A randomization test answers this question by replaying the lottery on paper. We keep the units and their outcomes fixed, enumerate the assignments the design could have made, and recalculate one chosen statistic for each assignment. The resulting reference distribution comes from the experiment's assignment mechanism. It does not require a bell-shaped population, a large-sample approximation, or imagined new observations.

That strength brings a corresponding obligation: the replay must match the real design. If treatment was assigned to whole households, shuffling individual household members invents impossible assignments. If groups arose through self-selection, a uniform lottery is not suddenly available merely because software can permute labels. This chapter develops the calculation and the boundary together.

## Prerequisite repair: the ideas and R needed here

Chapters 2–8 develop the R and probability ideas used here more gradually. Revisit them for prerequisite repair, or use the definitions and R reminders below as a self-contained route into this chapter.

**Definition R-DEF-statistic (statistic).** A statistic is a numerical function of observed data. Here the statistic is the treated mean minus the control mean. Its value depends on which units are labeled treated.

**Definition R-DEF-mechanism (mechanism).** A mechanism is a stated process that makes outcomes, assignments, or samples variable. A randomization test in an experiment uses the known assignment mechanism: which assignments were possible and their probabilities.

**Definition R-DEF-function (function).** A function maps allowed inputs to outputs. In mathematics we write $T(w,y)$ for the contrast computed from assignment $w$ and outcomes $y$. In R, `function(treated_idx) { ... }` creates a function whose input is a vector of treated indices.

**Definition R-DEF-sampling-distribution (sampling distribution).** A sampling distribution is the distribution of a statistic under repeated samples from a sampling model. It is not the distribution used in our exact experiment. Our **randomization distribution** varies assignments according to the design while holding the experimental units' sharp-null outcomes fixed.

We will also use a small amount of probability language. An **event** is a collection of possible assignments or simulation results, and $\Pr(E)$ denotes the probability that event $E$ occurs under the stated mechanism. A **significance threshold** $\alpha\in[0,1]$ is fixed before the test; the rule rejects when $p\le\alpha$. A **false rejection**, also called a **type I error**, occurs when that rule rejects even though the null hypothesis is true. Saying a test has level at most $\alpha$ means its probability of false rejection is no greater than $\alpha$. Finally, $\lfloor x\rfloor$ is the greatest integer no larger than $x$; for example, $\lfloor2.7\rfloor=2$.

For the optional simulation later, a **Bernoulli trial** records either success, 1, or failure, 0. Trials are **independent** when learning one result does not change the probability law of the others. If each of $B$ independent trials has success probability $q$, their success count $b$ has the **binomial distribution**, with mean $Bq$ and variance $Bq(1-q)$.

For any random quantity under a named repetition mechanism, its **variance** is the expected—that is, probability-weighted average—squared distance from its mean. Its **standard deviation** is the positive square root of its variance. Adding a constant does not change a standard deviation, because it shifts both the quantity and its mean equally. Dividing by a positive number $B+1$ divides every distance from the mean, and therefore the standard deviation, by $B+1$. Consequently,

$$
\operatorname{SD}\!\left(\frac{b+1}{B+1}\,\middle|\,W_{\mathrm{obs}},y\right)
=\frac{\sqrt{Bq(1-q)}}{B+1}.
$$

This **conditional Monte Carlo standard error** describes how the simulated p-value varies across repeated runs while the observed assignment $W_{\mathrm{obs}}$ and outcomes $y$ are held fixed. Because $q$ is usually unknown, we may estimate the standard error from the observed count. It measures computational precision, whereas assignment variability across the original experiment's possible assignments supplies the randomization test itself.

R stores several values in a **vector**. The expression `c(1, 2, 4, 8)` combines four numbers. Positions begin at 1, so `y[c(3, 4)]` selects the third and fourth outcomes. `mean` adds selected values and divides by their count. `combn(4, 2)` makes every two-element subset of the indices 1 through 4; each column is one subset. `apply(X, 2, FUN)` applies `FUN` to every column of the matrix `X` and collects the answers. The `2` means columns; `1` would mean rows. These behaviors are specified in the R Core documentation cited at the end of the chapter.

```r
# Literal synthetic fixture: one numeric outcome per experimental unit.
# Outcome units are generic score points; no values are missing.
y <- c(1, 2, 4, 8)
treated_observed <- c(3L, 4L)

mean(y[treated_observed])
mean(y[c(1L, 2L)])
mean(y[treated_observed]) - mean(y[c(1L, 2L)])

assignments_preview <- combn(seq_along(y), 2L)
column_means <- apply(assignments_preview, 2L, function(idx) mean(y[idx]))

tol <- 1e-10 + 1e-8 * abs(4.5)
stopifnot(length(y) == 4L)
stopifnot(!anyNA(y))
stopifnot(identical(dim(assignments_preview), c(2L, 6L)))
stopifnot(abs((mean(y[treated_observed]) - mean(y[c(1L, 2L)])) - 4.5) <= tol)
stopifnot(length(column_means) == 6L)
```

The `L` marks an integer literal. It is not statistically important here, but it makes clear that indices and counts are whole numbers. Brackets select values; parentheses pass inputs to a function. The assignment arrow `<-` gives a value a name. Comments begin with `#` and are not executed.

## From a physical lottery to a mathematical assignment space

Label the four fixed units $1,2,3,4$. Write $W_i=1$ if unit $i$ is treated and $W_i=0$ otherwise. The design chooses exactly two treated units, so an assignment is a vector such as $(0,0,1,1)$. There are

$$\binom{4}{2}=6$$

possible treated pairs. In this experiment, assume the design selects each pair with probability $1/6$.

**Definition R-DEF-assignment-space (assignment space).** For integers $n\ge2$ and $1\le m\le n-1$, with $n$ labeled units and exactly $m$ treatment slots, the fixed-size assignment space is

$$
\Omega=\left\{w\in\{0,1\}^{n}:\sum_{i=1}^{n}w_i=m\right\}.
$$

A uniform fixed-size design gives every $w\in\Omega$ probability $1/|\Omega|$, where $|\Omega|=\binom{n}{m}$. This probability statement is about the design. It is not inferred from the numerical outcomes.

To state a causal null precisely, imagine that unit $i$ has potential outcome $Y_i(1)$ under treatment and $Y_i(0)$ under control. We make three assumptions for the exact test in this chapter:

1. **No interference:** unit $i$'s outcome depends on its own treatment status, not on other units' assignments.
2. **A sharp no-effect null:** treatment changes no unit's outcome.
3. **The stated assignment mechanism:** exactly $m$ units are selected uniformly from the $n$ units.

**Definition R-DEF-sharp-null (sharp null).** The sharp null hypothesis is

$$H_0^{\mathrm{sharp}}:Y_i(1)=Y_i(0)\quad\text{for every }i=1,\ldots,n.$$

It is called sharp because it lets us fill in every missing potential outcome. Under the null, the observed value $y_i$ would have been the same under every allowed assignment. We can therefore hold $y=(y_1,\ldots,y_n)$ fixed while replaying the assignment.

The word *fixed* does real work. Outcomes in this calculation do not represent fresh random samples. Their arrangement into treatment and control groups is the random object.

## Worked investigation 1: all six lotteries

**Example 9.1 (Worked calculation).**

For an assignment with treated set $A$, use the difference in means

$$
T(A,y)=\frac{1}{|A|}\sum_{i\in A}y_i-
\frac{1}{n-|A|}\sum_{i\notin A}y_i.
$$

Positive values favor larger treated outcomes. The observed treated pair is $(3,4)$, so

$$T_{\mathrm{obs}}=(4+8)/2-(1+2)/2=6-1.5=4.5.$$

The following code constructs rather than types the six assignments. `setdiff` finds the indices outside a treated pair. The function returns one number, so applying it to six columns produces a vector of length six.

```r
# Exact enumeration for the four fixed units.
outcomes <- c(1, 2, 4, 8)
unit_idx <- seq_along(outcomes)
assignments <- combn(unit_idx, 2L)

mean_contrast <- function(treated_idx) {
  control_idx <- setdiff(unit_idx, treated_idx)
  mean(outcomes[treated_idx]) - mean(outcomes[control_idx])
}

randomization_stats <- apply(assignments, 2L, mean_contrast)
expected_assignments <- matrix(
  c(1L, 2L, 1L, 3L, 1L, 4L, 2L, 3L, 2L, 4L, 3L, 4L),
  nrow = 2L
)
expected_stats <- c(-4.5, -2.5, 1.5, -1.5, 2.5, 4.5)
det_tol <- 1e-10 + 1e-8 * abs(expected_stats)

stopifnot(identical(assignments, expected_assignments))
stopifnot(all(abs(randomization_stats - expected_stats) <= det_tol))

assignment_table <- data.frame(
  treated_pair = apply(assignments, 2L, paste, collapse = ","),
  treated_mean = apply(assignments, 2L, function(idx) mean(outcomes[idx])),
  control_mean = apply(
    assignments,
    2L,
    function(idx) mean(outcomes[setdiff(unit_idx, idx)])
  ),
  contrast_points = randomization_stats,
  stringsAsFactors = FALSE
)
assignment_table
```

| Treated pair | Treated mean | Control mean | Treated − control (points) |
|---|---:|---:|---:|
| 1,2 | 1.5 | 6.0 | −4.5 |
| 1,3 | 2.5 | 5.0 | −2.5 |
| 1,4 | 4.5 | 3.0 | 1.5 |
| 2,3 | 3.0 | 4.5 | −1.5 |
| 2,4 | 5.0 | 2.5 | 2.5 |
| 3,4 | 6.0 | 1.5 | 4.5 |

The table is the complete randomization distribution, including repeated values if they had occurred. In `combn(4, 2)` order, the contrasts are $-4.5,-2.5,1.5,-1.5,2.5,4.5$. The order is irrelevant to the probabilities; all six columns receive equal mass.

Here is a compact plot of the same six values. Its horizontal positions are assignment numbers, not a numerical treatment scale. Filled circles and vertical stems distinguish the marks without relying on color. The table above is the numeric alternative; in prose, assignments 1 and 2 are negative, assignments 3 and 4 are $1.5$ and $-1.5$, and assignments 5 and 6 are $2.5$ and $4.5$.

```r
plot(
  seq_along(randomization_stats),
  randomization_stats,
  type = "h",
  lwd = 2,
  xlab = "Assignment number in combn(4, 2) order",
  ylab = "Treated mean minus control mean (points)",
  xaxt = "n"
)
axis(1L, at = seq_along(randomization_stats), labels = seq_along(randomization_stats))
points(seq_along(randomization_stats), randomization_stats, pch = 19)
abline(h = 0, lty = 2)
```

## Choose the tail before seeing the answer

A claim that treatment can only increase the outcome suggests an upper-tail test. A claim that treatment may change the outcome in either direction suggests a two-sided measure of extremeness. The choice must precede the calculation; choosing whichever tail gives the smaller answer invalidates the stated test.

**Definition R-DEF-randomization-p (exact randomization p-value).** Let $S(T)$ be the predeclared extremeness score. For observed assignment $w_{\mathrm{obs}}$ and a uniform finite assignment space $\Omega$, define

$$
p(w_{\mathrm{obs}})=\frac{\#\{w\in\Omega:S(T(w,y))\ge S(T(w_{\mathrm{obs}},y))\}}{|\Omega|}.
$$

The inequality is inclusive: assignments tied with the observed statistic count as at least as extreme. For an upper tail, $S(t)=t$. For the common absolute-statistic two-sided convention, $S(t)=|t|$. Other defensible two-sided conventions exist, especially for asymmetric reference distributions, so “two-sided” must name its rule.

For the observed statistic $4.5$, only $4.5$ is in the inclusive upper tail, hence

$$p_{\mathrm{upper}}=1/6.$$

The absolute values are $4.5,2.5,1.5,1.5,2.5,4.5$. Both $-4.5$ and $4.5$ reach the observed absolute value, hence

$$p_{\mathrm{absolute}}=2/6=1/3.$$

```r
observed_stat <- mean_contrast(c(3L, 4L))
p_upper <- mean(randomization_stats >= observed_stat)
p_absolute <- mean(abs(randomization_stats) >= abs(observed_stat))

stopifnot(abs(observed_stat - 4.5) <= (1e-10 + 1e-8 * abs(4.5)))
stopifnot(identical(sum(randomization_stats >= observed_stat), 1L))
stopifnot(identical(sum(abs(randomization_stats) >= abs(observed_stat)), 2L))
stopifnot(abs(p_upper - 1 / 6) <= (1e-10 + 1e-8 * abs(1 / 6)))
stopifnot(abs(p_absolute - 2 / 6) <= (1e-10 + 1e-8 * abs(2 / 6)))
c(upper_tail = p_upper, absolute_two_sided = p_absolute)
```

There is no plus-one adjustment here. We enumerated every assignment, and the observed assignment is already one of the six. Adding another numerator and denominator would change the exact design probability.

## Why the exact test controls its level

**Theorem R-THM-randomization-level (finite randomization level).** Let $\Omega$ be a finite nonempty assignment space of size $N$. Suppose:

- the realized assignment $W$ is uniform on $\Omega$;
- there is no interference;
- the sharp no-effect null holds, so one fixed outcome vector $y$ is valid for every assignment; and
- the statistic $T$ and extremeness score $S$ are fixed before observing $W$.

Define the inclusive-tail p-value above. Then, for every $\alpha\in[0,1]$,

$$\Pr\{p(W)\le\alpha\}\le\alpha.$$

Thus the rule “reject when $p\le\alpha$” has finite-sample type I error at most $\alpha$ under the listed hypotheses.

**Proof.** List the $N$ assignments in decreasing order of $S(T(w,y))$. Within a tie, use any order. For the assignment in position $j$, its inclusive tail contains every assignment before it and every assignment tied with it after it. Its tail count is therefore at least $j$, so its p-value is at least $j/N$.

If $p\le\alpha$ at position $j$, then $j/N\le\alpha$, or $j\le\alpha N$. Consequently no more than $\lfloor\alpha N\rfloor$ of the $N$ equally likely assignments can satisfy $p\le\alpha$. Their probability is at most

$$\frac{\lfloor\alpha N\rfloor}{N}\le\alpha.$$

The argument allows ties because they enlarge inclusive tails. They may make the inequality strict. If every assignment has the same extremeness score, every p-value equals 1: there is no rejection for any $\alpha<1$ (and all assignments satisfy $p\le1$ at the boundary $\alpha=1$). ∎

The theorem is exact in sample size but conditional in scope. Its probability comes from the assignment lottery and its null is sharp. It says nothing by itself about whether the chosen statistic has good power, whether the effect matters scientifically, or whether the experimental units represent a broader population.

## Three nulls that must not be merged

The sharp null says every individual treatment effect is zero. The **weak finite-population mean null** says only

$$\frac{1}{n}\sum_{i=1}^{n}\{Y_i(1)-Y_i(0)\}=0.$$

Positive and negative unit effects can cancel under the weak null. Then unobserved potential outcomes cannot be filled in by copying observed outcomes, so the fixed-outcome replay used in the theorem is generally unavailable. Large-sample studentized procedures can address some weak-null questions, but that is a different result with different hypotheses; the theorem above must not be cited as its proof.

In an observational comparison, a null of **exchangeability** says that the joint outcome distribution is unchanged by the allowed label permutations. Equal group means alone does not imply exchangeability. For example, populations centered at zero can have very different spreads. Nor does exchangeability turn a label association into a treatment effect: causal interpretation needs an actual randomized assignment or separate identification assumptions.

Finally, even a flawless randomized experiment identifies a contrast for the units and interventions represented by its design. Generalizing from these four units to another school, species, year, or treatment version requires sampling and scientific assumptions beyond the randomization test. A small p-value is not the probability that the null is true, the size of the treatment effect, a confidence statement about the realized effect, or permission to extrapolate.

## Worked investigation 2: the assignment unit is a household

**Example 9.2 (Worked calculation).**

Suppose four rows are two households: rows 1–2 belong to household A and rows 3–4 to household B. Outcomes are $(2,3,9,10)$ points. The design flips a fair coin to treat exactly one whole household. If household B was treated, the observed contrast is

$$ (9+10)/2-(2+3)/2=7.$$

Only two assignments were physically possible: treat rows 1–2 or treat rows 3–4. Their contrasts are $-7$ and $7$, so the upper-tail p-value is $1/2$. Treating arbitrary pairs of rows as possible creates six assignments and reports $1/6$. That smaller number answers a fictional design question.

```r
# Literal synthetic fixture: one score per person, two people per household.
cluster_outcomes <- c(2, 3, 9, 10)
cluster_assignments <- matrix(c(1L, 2L, 3L, 4L), nrow = 2L)
row_assignments <- combn(seq_along(cluster_outcomes), 2L)

cluster_contrast <- function(treated_idx) {
  control_idx <- setdiff(seq_along(cluster_outcomes), treated_idx)
  mean(cluster_outcomes[treated_idx]) - mean(cluster_outcomes[control_idx])
}

valid_stats <- apply(cluster_assignments, 2L, cluster_contrast)
invalid_row_stats <- apply(row_assignments, 2L, cluster_contrast)
cluster_observed <- cluster_contrast(c(3L, 4L))
valid_p <- mean(valid_stats >= cluster_observed)
invalid_p <- mean(invalid_row_stats >= cluster_observed)

stopifnot(identical(valid_stats, c(-7, 7)))
stopifnot(abs(cluster_observed - 7) <= (1e-10 + 1e-8 * abs(7)))
stopifnot(abs(valid_p - 1 / 2) <= (1e-10 + 1e-8 * abs(1 / 2)))
stopifnot(abs(invalid_p - 1 / 6) <= (1e-10 + 1e-8 * abs(1 / 6)))
c(valid_cluster_p = valid_p, fictional_row_p = invalid_p)
```

Dependence is not repaired by permuting more rows. The remedy is to identify the unit randomized by the design and enumerate assignments of those units. Blocking, paired assignment, unequal assignment probabilities, and rerandomization likewise require their actual mechanisms rather than the uniform space used in this chapter.

## When enumeration is too large: an optional Monte Carlo approximation

**Example 9.3 (Worked calculation).**

With four units, simulation would discard information. With thousands of possible assignments, it may be useful to draw $B$ assignments independently and uniformly **with replacement** from the exact assignment space. Conditional on the observed data, let $q$ be the exact inclusive-tail proportion and let $b$ be the number of the $B$ simulated statistics at least as extreme as observed. Then

$$b\mid W_{\mathrm{obs}}\sim\operatorname{Binomial}(B,q).$$

Report the valid conservative Monte Carlo value

$$p_{\mathrm{MC}}=\frac{b+1}{B+1},$$

not $b/B$. The plus one prevents a simulated zero from masquerading as an impossible exact zero and accounts for using a finite random reference set. Under sampling with replacement from a finite permutation space, Phipson and Smyth show this value is a conservative upper bound to a more elaborate exact Monte Carlo p-value. It is not the exact enumerated randomization p-value $q$.

```r
# Optional demonstration only: exact enumeration above remains the oracle.
RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(60901)

B <- 999L
drawn_columns <- sample.int(
  n = ncol(assignments),
  size = B,
  replace = TRUE
)
simulated_stats <- randomization_stats[drawn_columns]
b <- sum(simulated_stats >= observed_stat)
p_mc <- (b + 1) / (B + 1)

# Conditional Monte Carlo standard error for p_mc, with q estimated by b/B.
q_hat <- b / B
mc_se_estimate <- sqrt(B * q_hat * (1 - q_hat)) / (B + 1)
mc_se_worst_case <- sqrt(B) / (2 * (B + 1))
target_worst_case_se <- 0.016

stopifnot(length(simulated_stats) == B)
stopifnot(b >= 0L, b <= B)
stopifnot(p_mc >= 1 / (B + 1), p_mc <= 1)
stopifnot(mc_se_worst_case <= target_worst_case_se)
c(
  simulations = B,
  exceedances = b,
  plus_one_p = p_mc,
  estimated_mc_se = mc_se_estimate,
  worst_case_mc_se = mc_se_worst_case
)
```

With the declared R 4.6.0 generator configuration and seed, this block gives $b=161$, $p_{\mathrm{MC}}=0.162$, an estimated conditional Monte Carlo standard error about $0.01162$, and a worst-case standard error about $0.01580$. The design target was a worst-case standard error no larger than $0.016$; the code checks that target. If a decision would change across a plausible Monte Carlo error band, increase $B$ or enumerate. Do not keep a convenient seed or stop the simulation when the answer first crosses a desired threshold.

There are now two sources of variation to name. **Assignment variability** is the reference variation across the experiment's possible assignments; it defines the inferential question and remains even under exact enumeration. **Monte Carlo error** is extra computational variation from examining only random assignments. A larger $B$ reduces Monte Carlo error. It does not enlarge the study, reduce the effect's scientific uncertainty, repair a wrong assignment space, or create observational exchangeability.

## A defensible workflow

Before calculating, write a short design and analysis ledger:

1. State the question, experimental units, outcome and its units, treatment versions, and target contrast.
2. Describe who or what was randomized, the number assigned to each condition, restrictions, probabilities, and any clusters or blocks.
3. State no-interference and other causal assumptions, then write the sharp null in words and symbols.
4. Choose the statistic and tail convention before inspecting its randomization rank.
5. Enumerate the assignment space when feasible. If simulating, declare the sampling construction, seed, $B$, plus-one rule, and Monte Carlo precision target.
6. Report the observed statistic in outcome units, the tail count and denominator, the p-value convention, and the assignment-space evidence.
7. Conclude within the design: describe compatibility with the sharp null, practical magnitude separately, and limits on causal or population extrapolation.

This ledger makes mistakes visible. A reader can see whether rows, people, classrooms, or sites were assigned; whether the tail was selected in advance; and whether `0.01` means one of 100 exact assignments or a plus-one result from 99 random draws.

## Exercises

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

```r
# Literal fixtures copied from the exercise statements.
y <- c(1, 2, 4, 8)
household_y <- c(2, 3, 9, 10)
stopifnot(!anyNA(y), !anyNA(household_y))
```

</details>

### R-09-E01 — Enumerate the design

**Exercise 9.1**

Five labeled units have exactly two treatment slots, assigned uniformly. List the assignment space as treated pairs, give its size, and write R code using `combn` that verifies the dimensions and includes the pair $(4,5)$.

<details>
<summary>Hint 1</summary>

**Hint.** The number of columns should equal $\binom{5}{2}$; inspect columns rather than rows.

</details>
<details>
<summary>Hint 2</summary>

Each column is one treated pair, and ten distinct pairs exhaust the stated design.

</details>
<details>
<summary>Solution</summary>

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

</details>

### R-09-E02 — Check every contrast by hand

**Exercise 9.2**

For $y=(1,2,4,8)$ and exactly two treated units, calculate treated mean minus control mean for each `combn(4, 2)` pair. Explain why the six values sum to zero, and verify the ordered vector in R without typing the six answers as the computed result.

<details>
<summary>Hint 1</summary>

**Hint.** Each pair and its complementary pair have opposite contrasts.

</details>
<details>
<summary>Hint 2</summary>

A pair and its complement have opposite contrasts, explaining cancellation algebraically.

</details>
<details>
<summary>Solution</summary>

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

</details>

### R-09-E03 — Prove the tied tail bound

**Exercise 9.3**

Prove R-THM-randomization-level for a uniform finite assignment space using inclusive tails. Your proof must cover ties, arbitrary $\alpha\in[0,1]$, and the boundary case in which every extremeness score is equal.

<details>
<summary>Hint 1</summary>

**Hint.** Order assignments by decreasing extremeness. Compare the inclusive tail count of position $j$ with $j$.

</details>
<details>
<summary>Hint 2</summary>

Inclusive tails retain all ties, so a tail rank cannot be smaller than its ordered position.

</details>
<details>
<summary>Solution</summary>

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

</details>

### R-09-E04 — One-sided and two-sided questions

**Exercise 9.4**

For the observed treated pair $(3,4)$ in the central fixture, calculate the inclusive upper-tail p-value and the absolute-statistic two-sided p-value. State the scientific alternative attached to each. Explain why “always double the one-sided p-value” is not a definition that works for every discrete or asymmetric randomization distribution.

<details>
<summary>Hint 1</summary>

**Hint.** Count assignments meeting $T\ge4.5$ and $|T|\ge4.5$ separately.

</details>
<details>
<summary>Hint 2</summary>

Count the raw upper tail and the absolute-statistic tail separately, retaining equal endpoints.

</details>
<details>
<summary>Solution</summary>

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

</details>

### R-09-E05 — Audit observational exchangeability

**Exercise 9.5**

Students choose whether to attend an optional revision workshop. Attendees later have higher examination scores. A researcher permutes the attendee labels uniformly across students and calls the result an exact causal randomization test. Identify the missing design fact, give one plausible source of exchangeability failure, and state a question a permutation procedure could address only under added assumptions.

<details>
<summary>Hint 1</summary>

**Hint.** Ask whether the labels came from a known lottery and whether motivation can affect both label and outcome.

</details>
<details>
<summary>Hint 2</summary>

Without a real lottery, a permutation procedure needs a separate exchangeability model.

</details>
<details>
<summary>Solution</summary>

The missing fact is a known random assignment mechanism. Students chose attendance, so the researcher has no design-based reason to assign equal probability to every attendee-label arrangement. For instance, motivation may increase both the chance of attending and later exam performance. Prior preparation, free time, or access to transport could play similar roles. Under such confounding, the labels are not exchangeable under the causal sharp null.

With added assumptions, a permutation procedure could address a noncausal association null such as: conditional on a prespecified set of covariates and within the permitted strata, the joint score distribution is invariant to attendee-label permutations. That claim requires a sampling model, a precise restricted permutation scheme, and justification of conditional exchangeability. Even if the test is valid for that association null, it does not identify the causal effect of forcing attendance.

Equal population means would also be insufficient by itself. Two group distributions can share a mean while differing in spread or shape, so arbitrary labels need not be exchangeable.

</details>

### R-09-E06 — Find the cluster-unit error

**Exercise 9.6**

Revisit the household fixture $(2,3,9,10)$, with rows 1–2 in household A and rows 3–4 in household B. Exactly one household was randomized to treatment. Compute the valid upper-tail p-value when B is observed treated. Then compute the result from incorrectly treating any two rows as assignable and explain precisely why its denominator is wrong.

<details>
<summary>Hint 1</summary>

**Hint.** The real assignment space has two elements; the row-level space has six.

</details>
<details>
<summary>Hint 2</summary>

Entire households were assigned, so only two household allocations belong to the real denominator.

</details>
<details>
<summary>Solution</summary>

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

</details>

### R-09-E07 — Audit a simulated zero

**Exercise 9.7**

An analyst draws $B=99$ assignments independently and uniformly with replacement. None of their statistics is at least as large as observed, so they report $b/B=0$ as “the exact p-value.” Repair the calculation, give its smallest possible reported value under the plus-one rule, and explain both the inferential and computational mistakes. Give the worst-case conditional Monte Carlo standard error for $(b+1)/(B+1)$.

<details>
<summary>Hint 1</summary>

**Hint.** Use $(b+1)/(B+1)$ and $\sqrt{B}/\{2(B+1)\}$.

</details>
<details>
<summary>Hint 2</summary>

The plus-one value is one hundredth; computational correction does not create a missing design.

</details>
<details>
<summary>Solution</summary>

Here $B=99$ and $b=0$. The declared plus-one rule gives

$p_{\mathrm{MC}}=\frac{0+1}{99+1}=0.01.$

This is also the smallest value the rule can report with 99 draws. Inferentially, $b/B=0$ is not a valid p-value boundary: observing no exceedances in a finite random sample does not show that the exact tail is empty, and an exact enumeration always includes the observed assignment. Computationally, the analyst mislabeled a random approximation as exact and hid its Monte Carlo resolution.

For $p_{\mathrm{MC}}=(b+1)/(B+1)$, conditional on the observed data, $b$ has binomial variance $Bq(1-q)$, where $q$ is the exact tail proportion. Taking the positive square root gives $\operatorname{SD}(b)=\sqrt{Bq(1-q)}$; adding 1 leaves that standard deviation unchanged, and dividing by $B+1$ divides it by $B+1$. Thus the conditional Monte Carlo standard error is

$\frac{\sqrt{Bq(1-q)}}{B+1}.$

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

</details>

### R-09-E08 — Write an analysis/design ledger

**Exercise 9.8**

Eight greenhouse benches are fixed experimental units. A lottery assigns exactly four benches to a fertilizer and four to control, uniformly among all such assignments. One growth measurement in centimeters will be recorded per bench after four weeks. Draft a ledger for an upper-tail exact randomization test of the sharp no-effect null. Include the estimand, mechanism, assumptions, assignment-space size, statistic, tail, missing-data policy, output to report, and limits of the conclusion. No outcomes have yet been observed.

<details>
<summary>Hint 1</summary>

**Hint.** Separate choices that can be frozen now from numerical results that must wait for the data.

</details>
<details>
<summary>Hint 2</summary>

Fix statistic and tail before outcomes arrive and retain the documented four-versus-four lottery.

</details>
<details>
<summary>Solution</summary>

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

</details>


## R-09-E09

**Exercise 9.9**

A hypothetical design has allocations a,b,c with probabilities one half, one third and one sixth. Under a fixed sharp null, their prespecified extremeness scores are zero, one and two. Find each inclusive upper-tail probability using the actual weights. At level one quarter, find the null rejection probability and explain why an equal-allocation count would change the design.

<details>
<summary>Hint 1</summary>

For each observed score add the weights of all allocations at least that extreme.

</details>
<details>
<summary>Hint 2</summary>

The top-score allocation carries one sixth of the design mass, not one third.

</details>
<details>
<summary>Solution</summary>

The p-values are one at a, one half at b, and one sixth at c. Only c is rejected at level one quarter, so its actual null rejection probability is one sixth, below the chosen level. Counting allocations and dividing by three would instead give one, two thirds and one third and describe a different uniform lottery. The chapter's uniform tail-rank theorem is not applied unchanged: direct enumeration verifies this particular weighted design and exposes the role of its probability law.

</details>

## R-09-E10

**Exercise 9.10**

Four fixed units have sharp-null outcomes 1,2,4,8 points. A lottery independently chooses one treated unit from block {1,2} and one from block {3,4}, uniformly within each block. List the allowed treated pairs, compute treated minus control mean for each, and find the inclusive upper-tail p-value for observed pair {2,4}.

<details>
<summary>Hint 1</summary>

Exactly one member of each block must be treated.

</details>
<details>
<summary>Hint 2</summary>

Total outcomes sum to fifteen, so each contrast is treated sum minus seven and a half.

</details>
<details>
<summary>Solution</summary>

The four equally likely treated pairs are {1,3},{1,4},{2,3},{2,4}. Their sums are five, nine, six and ten, giving contrasts -2.5,1.5,-1.5,2.5 points. Only the final allocation reaches the observed 2.5, so the inclusive upper-tail value is one quarter. The unrestricted six-pair space would add {1,2} and {3,4}, which this lottery could never choose. Exactness belongs to the stated allocation mechanism together with the sharp-null and no-interference conditions, rather than to a generic permutation command.

</details>

## Recap and what follows

A randomization test starts with a real assignment mechanism. Under no interference and a sharp no-effect null, outcomes are fixed across assignments. Enumerating the allowed assignments and counting an inclusive predeclared tail produces a finite-sample valid p-value; ties can only make the level conservative. The four-unit oracle yields contrast $4.5$, upper-tail $1/6$, and absolute-statistic two-sided $2/6$.

The proof does not transfer automatically to a weak average-effect null, arbitrary observational labels, dependent rows, or population extrapolation. When enumeration is infeasible, independent uniform draws with replacement and a declared plus-one rule introduce measurable Monte Carlo error; that error is separate from the design's assignment variation.

The next chapter may build interval estimates or effect-size analyses from this foundation. It must state its own target and assumptions: this chapter supplies an exact sharp-null test, not a confidence interval for an average effect.

## References and rights

- R Core Team, [`combn`: Generate All Combinations of n Elements, Taken m at a Time](https://stat.ethz.ch/R-manual/R-release/library/utils/html/combn.html), base-distribution R 4.6.0 documentation. Consulted for the returned combination matrix and its dimensions; online release page accessed 2026-09-06.
- R Core Team, [`apply`: Apply Functions Over Array Margins](https://stat.ethz.ch/R-manual/R-release/library/base/html/apply.html), base R 4.6.0 documentation. Consulted for column-wise application semantics; online release page accessed 2026-09-06.
- R Core Team, [`sample` and `sample.int`: Random Samples and Permutations](https://stat.ethz.ch/R-manual/R-release/library/base/html/sample.html), base R 4.6.0 documentation. Consulted for uniform draws with replacement; online release page accessed 2026-09-06.
- Belinda Phipson and Gordon K. Smyth (2010), [“Permutation P-values Should Never Be Zero: Calculating Exact P-values When Permutations Are Randomly Drawn”](https://doi.org/10.2202/1544-6115.1585), *Statistical Applications in Genetics and Molecular Biology* 9, Article 39. Consulted for finite Monte Carlo p-value boundaries and the conservative plus-one value under random permutation sampling with replacement.

The fixture, exposition, proof presentation, investigations, and exercises are original Math Atlas material. They do not adapt third-party textbook prose or exercises. Text is licensed CC BY-SA 4.0 as declared in the front matter.

## Summary

An exact randomization test uses the allocations that the actual lottery could produce and the probabilities assigned to them. Under its sharp-null and no-interference assumptions, inclusive tails retain ties and yield a valid finite reference. Blocking, clustering and unequal assignment weights affect the denominator. Monte Carlo precision is separate from assignment uncertainty and does not create observational exchangeability.
