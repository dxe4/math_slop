
# Solutions: Categorical Data, Chi-Square, and ANOVA

These solutions retain the chapter's fixed bin boundaries, uncorrected Pearson sum, finite ANOVA algebra and distinction between descriptive arithmetic and a model reference. A complete answer identifies the unit and null as well as reporting a numerical result.

The real-data setup is repeated so the solutions do not rely on an object created in the chapter. The source is Fisher's *Iris*, UCI Machine Learning Repository, DOI 10.24432/C56C76, CC BY 4.0, selected from the original `iris.data` file. The CSV adds headings and retains the numerical rows without applying UCI's historical correction suggestions. The source-order IDs below are introduced analysis labels.

[Download the frozen Iris CSV](../../downloads/statistics-with-r/iris-uci.csv) and retain its CC BY 4.0 dataset attribution. Save it as `data/iris-uci.csv` in the book directory, or run from the repository root to use the second relative candidate. No package installation or network access occurs in the code.

```r
iris_paths <- c(
  file.path("data", "iris-uci.csv"),
  file.path("modules", "atlas", "content", "books",
            "statistics-with-r", "data", "iris-uci.csv")
)
iris_found <- iris_paths[file.exists(iris_paths)]
if (length(iris_found) == 0L) {
  stop("Cannot find data/iris-uci.csv: run from the book directory or repository root.",
       call. = FALSE)
}
iris_path <- iris_found[1L]
iris_data <- read.csv(
  iris_path, colClasses = c(rep("numeric", 4L), "character"),
  stringsAsFactors = FALSE, check.names = FALSE,
  na.strings = c("NA", "")
)
iris_columns <- c("sepal_length_cm", "sepal_width_cm",
                  "petal_length_cm", "petal_width_cm", "species")
species_levels <- c("Iris-setosa", "Iris-versicolor", "Iris-virginica")
stopifnot(identical(names(iris_data), iris_columns))
stopifnot(nrow(iris_data) == 150L, !anyNA(iris_data))
stopifnot(all(is.finite(as.matrix(iris_data[iris_columns[1:4]]))))
stopifnot(all(as.matrix(iris_data[iris_columns[1:4]]) > 0))
stopifnot(all(iris_data$species %in% species_levels))
iris_data$analysis_row_id <- sprintf("uci-iris-%03d", seq_len(nrow(iris_data)))
iris_data$species <- factor(iris_data$species, levels = species_levels)
stopifnot(anyDuplicated(iris_data$analysis_row_id) == 0L)
stopifnot(identical(as.integer(table(iris_data$species)), rep(50L, 3L)))
```

## R-CAT-E01

**Exercise 16.1**

A row records one plant, sepal length is measured in centimetres, and species is a categorical group label. The introduced source-order ID identifies that row in the selected frozen version. It is not a source-supplied plant key, evidence of biological independence or an identifier guaranteed to match another file version. Width 0.6 belongs in the first bin and 1.7 in the middle bin. Explicit boundaries make classification repeatable.

## R-CAT-E02

**Exercise 16.2**

The first row is $(8,12,20)$ and the second $(12,18,30)$. These arise from multiplying forty or sixty by $(0.2,0.3,0.5)$. Their margins reproduce the given totals. They are fitted expectations under the null rather than a list of inevitable future outcomes. The null column probabilities were estimated using the pooled counts. Observed discrepancies can reflect sampling variation or an inadequate null model.

## R-CAT-E03

**Exercise 16.3**

The reference has $(3-1)(4-1)=6$ degrees of freedom. Entries in the leading two-by-three block determine the last column through row margins and the last row through column margins. The final corner is then compatible because grand totals agree. A structural zero, an empty margin or an additional model constraint can change the dimension. An observed zero is distinct from a combination forbidden by the design.

## R-CAT-E04

**Exercise 16.4**

Both expected rows are $(9,11)$. Hence $X^2=9/9+9/11+9/9+9/11=40/11$, about 3.636, with one reference degree of freedom. R's default continuity correction modifies a two-by-two statistic; specify correct=FALSE to compare with the displayed uncorrected sum. The chi-square p-value is an asymptotic reference-tail calculation under an appropriate independent-count null, not the probability that the null is true.

## R-CAT-E05

**Exercise 16.5**

Sparse counts can make the ordinary chi-square approximation unreliable. Repeated visits additionally violate a model treating rows as independent people. The simulated contingency reference conditions on margins under its own null assumptions; it cannot remove patient dependence or manufacture a random treatment allocation. An alternative must state the independent or randomised unit, the null, the permitted reallocations or joint probability law, and how repeated visits enter that law. More simulations refine computational precision alone.

## R-CAT-E06

**Exercise 16.6**

The grand mean is five. The between-group sum is $2(3-5)^2+2(5-5)^2+2(7-5)^2=16$ and the within-group sum is six. Total sum is twenty two. Degrees of freedom are two and three, giving mean squares eight and two, so $F=4$. These arithmetic identities require no stochastic model. An exact F reference additionally requires independent normal within-group errors, common positive variance and the equal-means null.

## R-CAT-E07

**Exercise 16.7**

Both squared sums multiply by ten thousand. Degrees of freedom stay fixed, so F is unchanged. Differences of means multiply by one hundred, with the common shift cancelled. A dimensionless test statistic can therefore be unchanged while effects require different numerical values and units. Positive within-group sum ensures its denominator is defined.

## R-CAT-E08

**Exercise 16.8**

The null is $\mu_1=\mu_2=\mu_3$. The classical reference requires independent observations with normal within-group errors and common positive variance under a specified layout. A large F gives evidence against that equal-means model if the assumptions and analysis plan are credible. It does not identify which pair differs; follow-ups need their own declared family. Self-selection may associate treatment choice with other outcome-related features, so the comparison alone does not establish causation. Report group counts, means, spread and the design limitation.

## R-CAT-E09

**Exercise 16.9**

The products are 0.03, 0.06 and 0.20, already increasing, so these are the adjusted values. Only the first is at most 0.05. The guarantee concerns a declared family with valid marginal p-values. Searching many alternatives and retaining a favourable subset changes the effective family and can invalidate the reported marginal values. A correction limited to the disclosed three does not represent the undisclosed search.

## R-CAT-E10

**Exercise 16.10**

Identify the selected UCI iris.data version, frozen with headings added and no numerical correction, and attribute CC BY 4.0. Each row records one plant; introduced source-order IDs are analysis labels. Report species-by-bin counts, margins, row proportions, expected counts and Pearson discrepancy, qualifying any reference p-value by its count-model assumptions. For sepal length give group n, mean, SD, squared sums and the classical normal independent common-variance conditions. Welch can be a prespecified approximate sensitivity analysis for unequal variances. State every planned follow-up and family adjustment. These observational records neither randomise species nor establish causes or habitat-wide species prevalence.


## Numerical reference for the hand calculations

For R-CAT-E02, fitted expected counts retain both supplied margins. The operation `outer` calculates all row-total times column-total products before division by the grand total.

```r
expected_e02 <- outer(c(40, 60), c(20, 30, 50)) / 100
stopifnot(all(expected_e02 == rbind(c(8, 12, 20), c(12, 18, 30))))
stopifnot(all(rowSums(expected_e02) == c(40, 60)))
stopifnot(all(colSums(expected_e02) == c(20, 30, 50)))
expected_e02
```

For R-CAT-E04, explicitly turn off the default two-by-two continuity correction when comparing with the uncorrected formula:

```r
counts_e04 <- rbind(c(12L, 8L), c(6L, 14L))
expected_e04 <- outer(rowSums(counts_e04), colSums(counts_e04)) / sum(counts_e04)
pearson_e04 <- sum((counts_e04 - expected_e04)^2 / expected_e04)
stopifnot(all(expected_e04 == rbind(c(9, 11), c(9, 11))))
stopifnot(abs(pearson_e04 - 40 / 11) <= 1e-10 + 1e-8 * abs(40 / 11))
test_e04 <- chisq.test(counts_e04, correct = FALSE)
stopifnot(abs(unname(test_e04$statistic) - pearson_e04) <=
            1e-10 + 1e-8 * abs(pearson_e04))
counts_e04
expected_e04
test_e04
```

For R-CAT-E06, calculate the components directly before reading the ANOVA table. This separates the finite identity from the normal-model reference probability.

```r
response_e06 <- c(2, 4, 4, 6, 6, 8)
group_e06 <- factor(rep(c("A", "B", "C"), each = 2L))
means_e06 <- tapply(response_e06, group_e06, mean)
counts_e06 <- table(group_e06)
grand_e06 <- mean(response_e06)
between_e06 <- sum(as.numeric(counts_e06) *
                     (as.numeric(means_e06) - grand_e06)^2)
within_e06 <- sum((response_e06 - means_e06[as.character(group_e06)])^2)
total_e06 <- sum((response_e06 - grand_e06)^2)
stopifnot(grand_e06 == 5, between_e06 == 16, within_e06 == 6, total_e06 == 22)
fit_e06 <- aov(response_e06 ~ group_e06, na.action = na.fail)
table_e06 <- summary(fit_e06)[[1L]]
stopifnot(abs(table_e06[["F value"]][1L] - 4) <= 1e-10 + 1e-8 * 4)
table_e06
```

These are original Math Atlas version-1 synthetic fixtures with the row meanings and units given in the exercises. No values are missing and no rows are excluded. They demonstrate arithmetic rather than empirical findings about an actual population.

For R-CAT-E09, `cummax` records the largest product encountered up to each position, enforcing the monotone sorted adjustment:

```r
raw_e09 <- c(0.01, 0.03, 0.20)
manual_holm_e09 <- pmin(1, cummax(c(3, 2, 1) * raw_e09))
adjusted_e09 <- p.adjust(raw_e09, method = "holm")
stopifnot(all(abs(manual_holm_e09 - c(0.03, 0.06, 0.20)) <= 1e-10))
stopifnot(all(abs(adjusted_e09 - manual_holm_e09) <= 1e-10))
data.frame(raw_p = raw_e09, Holm_adjusted_p = adjusted_e09)
```

## Real-data reference for R-CAT-E10

The outputs below supply the numerical counts and summaries needed for a report. The boundaries are fixed before calculating model p-values. If expected counts are too small for the classroom screening convention, the code retains the descriptive table and asks for a reference-model review.

```r
iris_data$petal_width_band <- cut(
  iris_data$petal_width_cm,
  breaks = c(-Inf, 0.6, 1.7, Inf),
  labels = c("at most 0.6", "over 0.6 through 1.7", "over 1.7"),
  right = TRUE
)
counts_e10 <- table(iris_data$species, iris_data$petal_width_band)
expected_e10 <- outer(rowSums(counts_e10), colSums(counts_e10)) / sum(counts_e10)
stopifnot(sum(counts_e10) == 150L, all(rowSums(counts_e10) == 50L))
stopifnot(all(expected_e10 > 0))
counts_e10
prop.table(counts_e10, margin = 1)
expected_e10
if (all(expected_e10 >= 5)) {
  print(chisq.test(counts_e10, correct = FALSE))
} else {
  message("Small fitted counts: review the reference model before inference.")
}

sepal_groups_e10 <- split(iris_data$sepal_length_cm, iris_data$species)
sepal_summary_e10 <- data.frame(
  species = names(sepal_groups_e10),
  n = vapply(sepal_groups_e10, length, integer(1L)),
  mean_cm = vapply(sepal_groups_e10, mean, numeric(1L)),
  sd_cm = vapply(sepal_groups_e10, sd, numeric(1L))
)
stopifnot(all(sepal_summary_e10$n >= 2L), all(sepal_summary_e10$sd_cm > 0))
sepal_summary_e10
summary(aov(sepal_length_cm ~ species, data = iris_data, na.action = na.fail))
oneway.test(sepal_length_cm ~ species, data = iris_data,
            var.equal = FALSE, na.action = na.fail)
```

The classical p-value inherits the independent normal common-variance model. Welch relaxes the common-variance assumption through an approximate reference, while retaining the need for a defensible observation mechanism. Neither method establishes that the historical species groups were randomly assigned.

A primary analysis must be chosen from the design and assumptions, rather than by selecting the smaller displayed p-value. The other can be a labelled, prespecified sensitivity comparison. The descriptive group means and SDs remain reportable with their finite-record scope.

For the declared family of all three pairwise Welch comparisons:

```r
pairs_e10 <- combn(species_levels, 2L, simplify = FALSE)
p_values_e10 <- vapply(pairs_e10, function(pair) {
  t.test(
    iris_data$sepal_length_cm[iris_data$species == pair[1L]],
    iris_data$sepal_length_cm[iris_data$species == pair[2L]],
    var.equal = FALSE
  )$p.value
}, numeric(1L))
data.frame(
  comparison = vapply(pairs_e10, paste, character(1L), collapse = " versus "),
  raw_p_value = p_values_e10,
  Holm_adjusted_p_value = p.adjust(p_values_e10, method = "holm")
)
```

The exact adjustment rule does not remove the Welch approximation in its marginal p-values. Retain all three comparisons and their effect units, and describe the fixed family. A report that searched other outcomes or cutoffs must disclose that search; adjusting only the displayed subset would leave it unaccounted for.

The code supplies outputs when run; no numerical output from an unperformed execution is asserted here. A completed report should name its selected source and licence, present numerical summaries, state reference assumptions and limits, and avoid turning record reproducibility into a causal or habitat-wide claim.

## Sources

Fisher, R. (1936), [*Iris*](https://archive.ics.uci.edu/dataset/53/iris), UCI Machine Learning Repository, DOI 10.24432/C56C76, CC BY 4.0. The selected file is [iris.data](https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data); [download the frozen CSV](../../downloads/statistics-with-r/iris-uci.csv) with the chapter's declared headings and row-order convention.

For software semantics see the official R documentation for [chisq.test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/chisq.test.html), [aov](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/aov.html), [oneway.test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/oneway.test.html), and [p.adjust](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/p.adjust.html). New solutions and synthetic examples are original Math Atlas material under CC BY-SA 4.0.

## Summary

Expected counts preserve fitted margins, while Pearson discrepancies need a suitable count-model reference. The ANOVA decomposition is exact arithmetic, and an F or Welch p-value adds assumptions about sampling and within-group errors. Fixed families, effect units and source provenance are part of the explanation rather than consequences of a significance threshold.
