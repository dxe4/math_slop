
# ANOVA and Designed Experiments

Preparation is [projection](geometry-of-projection.md), [exact Gaussian inference](gauss-markov-and-inference.md), and the difference between observational sampling and random assignment from Principles. The licensed Iris/R investigation is retained from Statistics with R without an execution claim.

## ANOVA as orthogonal subspaces

Let $g$ groups have sizes $n_j>0$ and total $n>g$. The full group-mean design has one indicator per group and rank $g$. Its projection replaces every response by its group mean. The smaller intercept-only projector replaces every response by the overall mean. Because the constant direction lies in the group-mean space, their difference is an orthogonal projector of rank $g-1$.

Writing $H_G$ for the group projector and $J$ for the constant projector gives
$$
\mathrm{SS}_{\rm between}=Y^\mathsf T(H_G-J)Y
=\sum_jn_j(\bar Y_j-\bar Y)^2,
\qquad
\mathrm{SS}_{\rm within}=Y^\mathsf T(I-H_G)Y.
$$
The between and within projectors are orthogonal and sum to $I-J$. Thus their sums equal the total centred squared length for every table, with no probability assumption.

Under independent Gaussian errors of common variance and the null of equal group means, the scaled between sum is chi-square with $g-1$ degrees, the scaled within sum is chi-square with $n-g$ degrees, and they are independent. This follows by orthonormal coordinates in the two perpendicular subspaces. Their ratio of mean squares is therefore $F_{g-1,n-g}$. Equality of variances and the declared grouping are substantive model assumptions.

**Worked example: two equal-sized groups.** Take hand values $(1,3)$ and $(5,7)$. Group means are two and six, overall mean four. Between sum is sixteen, within sum is four and total is twenty. The F ratio is $(16/1)/(4/2)=8$. These exact algebraic quantities do not alone supply a scientific randomisation or a sampling law; the Gaussian or design-based interpretation must be stated separately.

## Balanced factorial designs

For factors with $a$ and $b$ levels and $r$ observations in every cell, cell-mean space decomposes into a constant direction, an A-main-effect space of dimension $a-1$, a B-main-effect space of dimension $b-1$ and an interaction space of dimension $(a-1)(b-1)$. Under balanced replication, these spaces are orthogonal in observation space. Within-cell residual space has dimension $ab(r-1)$.

The dimension total is
$$
1+(a-1)+(b-1)+(a-1)(b-1)+ab(r-1)=abr.
$$
Orthogonality follows from the zero-sum constraints on effects: cross-products sum a contrast over the other factor and vanish. Interaction means have zero row and column sums, making them orthogonal to both main effects. Under the Gaussian model, the corresponding orthogonal noise components are independent.

When $r=1$, within-cell pure-error degrees are zero. An additive fit can use interaction space as its residual, but then interpreting it as error imposes the no-interaction model. It does not create independent replication. In unbalanced designs the main-effect spaces are not generally orthogonal, and sequential sums can depend on term order. Specify the compared nested spaces rather than reporting an unnamed “factor effect”.

## Randomisation and blocking

A causal treatment contrast can be supported by random assignment, distinct from a normal error model. With fixed potential outcomes and a completely randomised assignment of exactly $n_1$ units to treatment, every unit has treatment probability $n_1/n$. The treatment sample mean is unbiased for the finite-population mean potential treated outcome, by indicator expectation. The analogous control mean targets the control potential mean, so their difference is unbiased for the average treatment effect.

This proof requires consistency and a specified no-interference potential-outcome structure. It does not establish the Gaussian F distribution. A randomisation reference instead varies assignments according to the design, often under a sharp null that supplies every missing potential outcome.

Blocking randomises comparisons within similar units or strata. Analysis must retain that assignment restriction. Permuting labels freely across blocks would use a different experiment. Cluster randomisation likewise randomises clusters; treating all individual rows as independent assigned units exaggerates the amount of randomised information.

The applied source below includes categorical comparisons alongside numerical ANOVA, because response type determines the relevant discrepancy. Its Iris groups are observational species, not randomised treatment arms. The source's caution about causal interpretation remains essential.





A comparison among groups begins by identifying the response. A categorical response asks how counts are divided among labels. A numerical response asks how measurements and their centres differ. The same grouping variable can appear in both analyses, but a table of counts and an analysis of variance answer different questions.

This chapter develops both methods without calculus. We find expected counts under a categorical null, calculate Pearson's discrepancy, and state its approximate reference law. We then derive the one-way ANOVA decomposition by expanding squares and distinguish that exact identity from the assumptions needed for an F-model p-value. Welch's unequal-variance comparison and a declared family of follow-ups complete the route.

Preparation is [distributions and graphics](#/books/statistics-with-r/distributions-groups-graphics), [sampling variation](#/books/statistics-with-r/sampling-variation), [randomization tests](#/books/statistics-with-r/randomization-tests), and [proportions and means](#/books/statistics-with-r/proportions-and-means). All code uses base-distribution R. The displayed hand calculations are derivations; the real-data code is supplied for a local run, without asserting that it has been executed.

## Source, licence and observational units

The real example uses R. A. Fisher's *Iris* dataset from the [UCI repository](https://archive.ics.uci.edu/dataset/53/iris), licensed CC BY 4.0. Its 150 plant records contain four measurements in centimetres and three species groups of fifty. We select the original `iris.data` file, rather than `bezdekIris.data`. The frozen CSV retains the nonblank source records in their original order and adds the five stated headings.

[Download the frozen Iris CSV](../../downloads/statistics-with-r/iris-uci.csv). Save it as `data/iris-uci.csv` in the book directory to use the first local path below. Its dataset licence remains CC BY 4.0.

UCI documents historical discrepancies in samples 35 and 38. We retain the selected source version without silently applying the suggested corrections. A corrected copy is another version and must be identified as such.

The columns are `sepal_length_cm`, `sepal_width_cm`, `petal_length_cm`, `petal_width_cm`, and `species`. One row records one plant. We introduce source-order labels such as `uci-iris-001` for this analysis; they are not source-supplied biological keys. Distinct stored rows do not by themselves establish independent random sampling.

The locator accepts either the book directory or repository root. It selects the first existing relative path and stops with an explanatory message if neither is available. The remaining checks express the selected file's schema, not independent confirmation of measurement truth.

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

The measurement columns are not numerically changed. A factor makes species levels and their order explicit without assigning distances to the labels. The deliberately balanced species records also do not estimate how common each species is in a wider habitat.

## Contingency tables and fitted expectations

**Definition R-DEF-cat-contingency-table (contingency table).** A contingency table gives a nonnegative integer count $O_{ij}$ for each combination of row category $i$ and column category $j$. Each counted unit enters exactly one cell under the declared classification.

Write $n_{i+}$ for row totals, $n_{+j}$ for column totals, and $n$ for the grand total. Counting repeated visits gives a visit table, not automatically a table of independent people. The observational unit remains part of the model.

**Definition R-DEF-cat-expected-count (fitted expected count).** Under an independence model for two categorical variables, or a common column-probability model across independently sampled groups, the fitted null count is
$$
E_{ij}=\frac{n_{i+}n_{+j}}{n}.
$$
Here $n>0$ and every displayed row and column margin is positive.

The formula multiplies the size of a row group by the fitted overall column fraction. Expected counts need not be integers. They reproduce both observed margins: summing over columns recovers each row total, and summing over rows recovers each column total. These are fitted expectations under a null, rather than obligatory counts in every repetition.

**Definition R-DEF-cat-pearson (Pearson statistic).** With positive expected counts, define
$$
X^2=\sum_i\sum_j\frac{(O_{ij}-E_{ij})^2}{E_{ij}}.
$$
It adds scaled squared departures from the null table. Larger discrepancies lead to larger values, but deciding which values are surprising requires a probability reference.

**Definition R-DEF-cat-chi-square-law (chi-square reference).** For positive integer $k$, a chi-square variable with $k$ degrees of freedom has the distribution of the sum of squares of $k$ independent standard normal variables. Its right-tail probabilities are supplied in R by `pchisq`.

**Claim R-CLAIM-cat-chi-reference (imported asymptotic theorem).** Under an appropriate independent multinomial or independent-group count model, the Pearson null law approaches chi-square with $(r-1)(c-1)$ degrees of freedom as the relevant sample sizes grow, with positive underlying cell probabilities and no additional structural constraints. At finite sample size this is an approximation.

The degrees-of-freedom count has a useful finite explanation. When margins are fixed, the leading $(r-1)$ by $(c-1)$ block determines the remaining entries. The last column must complete each row, and the last row must complete each column. This leaves $(r-1)(c-1)$ freely varying contrasts. The explanation describes dimension; the imported probability theorem is still needed for the reference law.

## Worked Example R-CAT-W01: every table contribution

**Example 16.1 (Worked calculation).**

An original synthetic teaching table records eighty independent hypothetical service visits, forty in each of two groups, with three response categories. Its two rows are $(24,12,4)$ and $(8,20,12)$. There are no missing values or exclusions.

The column totals are thirty two, thirty two and sixteen. A common response distribution gives expected row $(16,16,8)$ in both groups. The first row contributes $64/16+16/16+16/8=7$ to Pearson's sum. The second contributes another seven. Thus $X^2=14$, with two reference degrees of freedom.

```r
service_counts <- rbind(A = c(24L, 12L, 4L), B = c(8L, 20L, 12L))
service_expected <- outer(rowSums(service_counts), colSums(service_counts)) /
  sum(service_counts)
service_x2 <- sum((service_counts - service_expected)^2 / service_expected)
stopifnot(all(service_expected >= 5))
stopifnot(abs(service_x2 - 14) <= 1e-10 + 1e-8 * 14)
service_test <- chisq.test(service_counts, correct = FALSE)
stopifnot(abs(unname(service_test$statistic) - service_x2) <=
            1e-10 + 1e-8 * abs(service_x2))
service_counts
service_expected
c(Pearson_statistic = service_x2, df = 2,
  approximate_p_value = pchisq(service_x2, df = 2, lower.tail = FALSE))
```

The approximate p-value is about 0.000912. It is a reference-tail probability under the specified common-probability null. It is not the probability that the null is true. The counts and discrepancy are exact features of these supplied values; the p-value adds an asymptotic comparison.

For a two-by-two table, R's default continuity correction changes the reported statistic. We use `correct = FALSE` whenever comparing R with the uncorrected Pearson sum defined here. Larger tables receive no such correction from that argument.

## Sparse counts, structural zeros and exchangeability

An observed zero does not necessarily invalidate the approximation; its expected count can still be substantial. Small expected counts are the warning because the smooth asymptotic reference may describe the finite count law poorly. Requiring every expected count to be at least five is a conservative classroom screening convention, not a universal theorem guaranteeing an error tolerance.

An empty margin means no observed information about that category and creates zero fitted counts. A structural zero is different: a combination is impossible under the design. That restriction can alter the relevant model dimension. Combining or deleting categories should follow their meaning and a declared plan, rather than a search for favourable significance.

For some small tables a conditional exact calculation under a justified fixed-margin null is suitable. R's `fisher.test` supplies that class of procedure. Exact describes its reference calculation within its assumptions; it does not make the observations representative or independent.

Similarly, `chisq.test(..., simulate.p.value = TRUE)` simulates a null law conditional on margins. It does not turn observational species labels into a real randomized treatment. Permuting labels requires exchangeability under a specified null and design. A cluster of measurements from the same unit may need a different allowed reallocation. More simulation draws address numerical precision, not those design requirements.

## Worked Example R-CAT-W02: fixed petal-width bins

**Example 16.2 (Worked calculation).**

Use cutoffs declared here at 0.6 and 1.7 cm. The three categories are at most 0.6, greater than 0.6 through 1.7, and greater than 1.7. They define this descriptive comparison; they are not claimed botanical boundaries estimated from the outcomes.

```r
iris_data$petal_width_band <- cut(
  iris_data$petal_width_cm,
  breaks = c(-Inf, 0.6, 1.7, Inf),
  labels = c("at most 0.6", "over 0.6 through 1.7", "over 1.7"),
  right = TRUE
)
iris_counts <- table(iris_data$species, iris_data$petal_width_band)
iris_expected <- outer(rowSums(iris_counts), colSums(iris_counts)) /
  sum(iris_counts)
iris_proportions <- prop.table(iris_counts, margin = 1)
stopifnot(sum(iris_counts) == 150L)
stopifnot(all(rowSums(iris_counts) == 50L))
stopifnot(all(colSums(iris_counts) > 0), all(iris_expected > 0))
iris_counts
iris_proportions
iris_expected
iris_pearson <- sum((iris_counts - iris_expected)^2 / iris_expected)
if (all(iris_expected >= 5)) {
  iris_chi <- chisq.test(iris_counts, correct = FALSE)
  print(c(Pearson_statistic = iris_pearson,
          df = unname(iris_chi$parameter),
          approximate_p_value = iris_chi$p.value))
} else {
  message("Small fitted counts: report the table and review the reference model.")
}
```

The count, row-proportion and expected-count tables are numerical alternatives to a graphic. Compare proportions within species rows, retaining their denominators. For example, a width exactly at a cutoff enters the bin ending at that cutoff because `right = TRUE`. A row proportion conditions on species and should not be read as a species prevalence.

The ordinary three-by-three reference has four degrees of freedom if the count model applies. The historical records can illustrate this calculation, but they do not constitute random assignment of species. A small p-value would indicate disagreement with a specified common bin-probability model, while causal and habitat-wide generalisations would still require separate scientific and sampling assumptions.

## Numerical responses and the one-way decomposition

**Definition R-DEF-cat-oneway (one-way layout).** Numerical responses $x_{ij}$ are grouped by one categorical factor, with $i=1,\ldots,g$ and $j=1,\ldots,n_i$. Let each $n_i>0$, let $N=\sum_i n_i$, and write $\bar x_i$ and $\bar x$ for group and grand means.

The squared sums are
$$
SS_W=\sum_i\sum_j(x_{ij}-\bar x_i)^2,\qquad
SS_B=\sum_i n_i(\bar x_i-\bar x)^2,
$$
and
$$
SS_T=\sum_i\sum_j(x_{ij}-\bar x)^2.
$$

**Theorem R-THM-cat-squares (proved algebraic identity).** Every finite real dataset in this layout satisfies $SS_T=SS_W+SS_B$.

*Proof.* Write $x_{ij}-\bar x=(x_{ij}-\bar x_i)+(\bar x_i-\bar x)$. Square and sum. The first squared term gives $SS_W$ and the second $SS_B$. In each group the cross term contains $\sum_j(x_{ij}-\bar x_i)=0$, so its contribution vanishes. This argument requires no probability model. ∎

The within-group degrees of freedom are $N-g$, because every group's residuals obey one zero-sum condition. The group deviations have one weighted-zero condition, leaving $g-1$ between-group degrees of freedom. For $g\ge2$, $N>g$ and $SS_W>0$, define $MS_B=SS_B/(g-1)$, $MS_W=SS_W/(N-g)$ and $F=MS_B/MS_W$.

**Definition R-DEF-cat-F-law (F reference).** The F family has two positive degrees-of-freedom parameters. For integer values $d_1,d_2$, it can be constructed as $(A/d_1)/(B/d_2)$ for independent chi-square variables $A,B$ with those respective degrees of freedom. The family extends to positive noninteger parameters, used by approximate methods such as Welch.

**Claim R-CLAIM-cat-F-reference (imported normal-model theorem).** Suppose observations are independent and normally distributed about their group means, with a common positive error variance. Under $\mu_1=\cdots=\mu_g$, the displayed F ratio has the F law with degrees of freedom $g-1,N-g$.

The squared-sum identity does not prove this distribution theorem. Normality concerns within-group errors, not a pooled histogram that mixes groups with different means. The null is an omnibus equal-means claim; rejection does not itself identify a particular differing pair.

## Worked Example R-CAT-W03: six responses and an F ratio

**Example 16.3 (Worked calculation).**

Take original complete synthetic groups $(2,4)$, $(4,6)$ and $(6,8)$ in arbitrary declared units. Their means are three, five and seven; the grand mean is five. Within each group the two deviations are minus one and one, contributing two to the squared sum, so $SS_W=6$.

The between-group calculation gives $SS_B=2(3-5)^2+2(5-5)^2+2(7-5)^2=16$. Therefore $SS_T=22$, the two mean squares are eight and two, and $F=4$.

```r
toy_layout <- data.frame(
  response = c(2, 4, 4, 6, 6, 8),
  group = factor(rep(c("A", "B", "C"), each = 2L))
)
toy_fit <- aov(response ~ group, data = toy_layout, na.action = na.fail)
toy_anova <- summary(toy_fit)[[1L]]
stopifnot(all(abs(toy_anova[["Sum Sq"]] - c(16, 6)) <=
                1e-10 + 1e-8 * c(16, 6)))
stopifnot(abs(toy_anova[["F value"]][1L] - 4) <= 1e-10 + 1e-8 * 4)
toy_anova
```

The F-model tail at four is about 0.142 under the imported assumptions. Numerically different observed means need not produce a small p-value with small groups and appreciable within-group variation. The arithmetic belongs to these six values; the inferential reading belongs to a hypothetical sampling model. The example contains no evidence that its synthetic groups describe a real population.

## Sepal length by species

The formula `sepal_length_cm ~ species` fits a numerical response to species groups. R's `aov` presents the squared-sum decomposition as an ANOVA table. Specifying `na.action = na.fail` prevents a silently reduced analysis set through automatic omission.

```r
iris_group_n <- table(iris_data$species)
iris_group_mean <- tapply(iris_data$sepal_length_cm, iris_data$species, mean)
iris_group_sd <- tapply(iris_data$sepal_length_cm, iris_data$species, sd)
iris_group_summary <- data.frame(
  species = names(iris_group_n),
  n = as.integer(iris_group_n),
  mean_sepal_length_cm = as.numeric(iris_group_mean),
  sd_sepal_length_cm = as.numeric(iris_group_sd)
)
iris_grand_mean <- mean(iris_data$sepal_length_cm)
iris_ss_between <- sum(as.numeric(iris_group_n) *
                         (as.numeric(iris_group_mean) - iris_grand_mean)^2)
iris_residual <- iris_data$sepal_length_cm -
  iris_group_mean[as.character(iris_data$species)]
iris_ss_within <- sum(iris_residual^2)
iris_ss_total <- sum((iris_data$sepal_length_cm - iris_grand_mean)^2)
stopifnot(abs(iris_ss_total - iris_ss_between - iris_ss_within) <=
            1e-10 + 1e-8 * abs(iris_ss_total))
iris_fit <- aov(sepal_length_cm ~ species, data = iris_data,
                na.action = na.fail)
iris_anova <- summary(iris_fit)[[1L]]
stopifnot(all(abs(iris_anova[["Sum Sq"]] -
                c(iris_ss_between, iris_ss_within)) <=
              1e-10 + 1e-8 * abs(c(iris_ss_between, iris_ss_within))))
iris_group_summary
iris_anova
```

Report the group means and SDs in centimetres alongside the dimensionless F ratio. Three groups and 150 complete records give two between-group and 147 within-group degrees of freedom. The decomposition remains a valid description if the classical reference assumptions are doubtful.

Residual graphics can expose unusual observations and unequal spread, but cannot certify independence or reconstruct a sampling mechanism. Any such display should retain a numerical alternative with counts, means, SDs and the plotted values. A visually acceptable shape does not make an observational species comparison causal.

## Welch and a fixed follow-up family

When unequal group variances are scientifically plausible, the Welch one-way comparison is an alternative. It still needs suitable independent-group observations and within-group behaviour. Its reference distribution and denominator degrees of freedom are approximate.

```r
stopifnot(all(iris_group_n >= 2L), all(is.finite(iris_group_sd)),
          all(iris_group_sd > 0))
iris_welch <- oneway.test(
  sepal_length_cm ~ species, data = iris_data,
  var.equal = FALSE, na.action = na.fail
)
iris_welch
```

Select the primary analysis from the design and assumptions before comparing p-values. A prespecified alternative can be reported as sensitivity analysis. Choosing whichever method crosses a preferred threshold introduces an additional selection rule, which its ordinary printed p-value does not describe.

An omnibus result does not answer every pairwise question. If all three species pairs are a declared follow-up family, retain all three and their adjustment:

```r
iris_pairs <- combn(species_levels, 2L, simplify = FALSE)
iris_pair_p <- vapply(iris_pairs, function(pair) {
  t.test(
    iris_data$sepal_length_cm[iris_data$species == pair[1L]],
    iris_data$sepal_length_cm[iris_data$species == pair[2L]],
    var.equal = FALSE
  )$p.value
}, numeric(1L))
iris_pair_report <- data.frame(
  comparison = vapply(iris_pairs, paste, character(1L), collapse = " versus "),
  raw_p_value = iris_pair_p,
  Holm_adjusted_p_value = p.adjust(iris_pair_p, method = "holm")
)
iris_pair_report
```

**Claim R-CLAIM-cat-Holm (imported multiplicity guarantee).** For a fixed family with valid marginal null p-values, Holm's procedure controls the familywise probability of at least one false rejection at the chosen level. It does not validate incorrect model p-values or account for an undisclosed search across variables and cutoffs. Applying an exact adjustment rule to approximate Welch p-values leaves their reference approximation in place.

## Worked Example R-CAT-W04: three adjusted comparisons

**Example 16.4 (Worked calculation).**

Suppose the prespecified family produces p-values 0.01, 0.03 and 0.20. The sorted Holm products are $3(0.01)$, $2(0.03)$ and $1(0.20)$. Taking cumulative maxima and capping at one gives adjusted values 0.03, 0.06 and 0.20. Only the first is at most 0.05.

An unadjusted threshold would reject two, addressing a different error-control question. Effect magnitudes and units still belong beside the adjusted values. A small adjusted p-value neither measures an effect's size nor gives the probability of a scientific explanation.

The fixed family is crucial. Trying many binning rules and selecting the most significant table is outcome-driven analysis selection. Adjusting only the three displayed follow-ups does not represent that undisclosed search. Retain the question, chosen comparisons and interpretation even when the results are less striking than expected.

## Exercises

### Exercise 7.1
<a id="anova-designed-experiments-ex-1"></a>



Identify the observational unit, measurement unit of sepal length and role of species in the frozen Iris file. Explain what the source-order analysis ID establishes. Classify petal widths exactly 0.6 cm and exactly 1.7 cm under this chapter's right-closed bins.

<details>
<summary>Hint 1</summary>

Separate a label for a source record from a biological identifier.

</details>
<details>
<summary>Hint 2</summary>

Each cutoff belongs to the interval ending at that cutoff.

</details>
<details>
<summary>Solution</summary>

A row records one plant, sepal length is measured in centimetres, and species is a categorical group label. The introduced source-order ID identifies that row in the selected frozen version. It is not a source-supplied plant key, evidence of biological independence or an identifier guaranteed to match another file version. Width 0.6 belongs in the first bin and 1.7 in the middle bin. Explicit boundaries make classification repeatable.

</details>

### Exercise 7.2
<a id="anova-designed-experiments-ex-2"></a>



A two-by-three count table has row totals forty and sixty, column totals twenty, thirty and fifty, and grand total one hundred. Find the fitted expected counts under a common column distribution across rows. Explain why those counts need not occur in every repetition.

<details>
<summary>Hint 1</summary>

Multiply each row total by the overall fraction in each column.

</details>
<details>
<summary>Hint 2</summary>

The expected table must reproduce both sets of margins.

</details>
<details>
<summary>Solution</summary>

The first row is $(8,12,20)$ and the second $(12,18,30)$. These arise from multiplying forty or sixty by $(0.2,0.3,0.5)$. Their margins reproduce the given totals. They are fitted expectations under the null rather than a list of inevitable future outcomes. The null column probabilities were estimated using the pooled counts. Observed discrepancies can reflect sampling variation or an inadequate null model.

</details>

### Exercise 7.3
<a id="anova-designed-experiments-ex-3"></a>



For a three-by-four contingency table with positive margins, give the ordinary independence-reference degrees of freedom. Explain the dimension using the leading block, and identify one feature that would require reconsidering this formula.

<details>
<summary>Hint 1</summary>

Once margins are fixed, the last entry in each row or column is constrained.

</details>
<details>
<summary>Hint 2</summary>

The leading block has two freely chosen rows and three freely chosen columns.

</details>
<details>
<summary>Solution</summary>

The reference has $(3-1)(4-1)=6$ degrees of freedom. Entries in the leading two-by-three block determine the last column through row margins and the last row through column margins. The final corner is then compatible because grand totals agree. A structural zero, an empty margin or an additional model constraint can change the dimension. An observed zero is distinct from a combination forbidden by the design.

</details>

### Exercise 7.4
<a id="anova-designed-experiments-ex-4"></a>



An original synthetic two-by-two table has rows $(12,8)$ and $(6,14)$. Find the fitted expected table and uncorrected Pearson statistic. State its ordinary reference degrees of freedom and explain what the default R continuity correction changes.

<details>
<summary>Hint 1</summary>

Both row totals are twenty; column totals are eighteen and twenty two.

</details>
<details>
<summary>Hint 2</summary>

Every absolute cell discrepancy is three, but expected denominators differ.

</details>
<details>
<summary>Solution</summary>

Both expected rows are $(9,11)$. Hence $X^2=9/9+9/11+9/9+9/11=40/11$, about 3.636, with one reference degree of freedom. R's default continuity correction modifies a two-by-two statistic; specify correct=FALSE to compare with the displayed uncorrected sum. The chi-square p-value is an asymptotic reference-tail calculation under an appropriate independent-count null, not the probability that the null is true.

</details>

### Exercise 7.5
<a id="anova-designed-experiments-ex-5"></a>



Several expected counts are below one, and table rows are repeated visits by four patients. An analyst proposes chisq.test(..., simulate.p.value=TRUE) to make inference exact. Diagnose the two problems and identify what a defensible alternative needs.

<details>
<summary>Hint 1</summary>

Sparse expected counts and dependence between observational rows are separate issues.

</details>
<details>
<summary>Hint 2</summary>

A simulated reference law still must represent the intended design or a justified exchangeability model.

</details>
<details>
<summary>Solution</summary>

Sparse counts can make the ordinary chi-square approximation unreliable. Repeated visits additionally violate a model treating rows as independent people. The simulated contingency reference conditions on margins under its own null assumptions; it cannot remove patient dependence or manufacture a random treatment allocation. An alternative must state the independent or randomised unit, the null, the permitted reallocations or joint probability law, and how repeated visits enter that law. More simulations refine computational precision alone.

</details>

### Exercise 7.6
<a id="anova-designed-experiments-ex-6"></a>



For three original synthetic groups $(2,4)$, $(4,6)$ and $(6,8)$ in declared measurement units, calculate the grand mean, between-group and within-group squared sums, degrees of freedom and F ratio. Which calculations need no normality assumption?

<details>
<summary>Hint 1</summary>

The group means are three, five and seven.

</details>
<details>
<summary>Hint 2</summary>

Within each group, deviations from its mean are minus one and one.

</details>
<details>
<summary>Solution</summary>

The grand mean is five. The between-group sum is $2(3-5)^2+2(5-5)^2+2(7-5)^2=16$ and the within-group sum is six. Total sum is twenty two. Degrees of freedom are two and three, giving mean squares eight and two, so $F=4$. These arithmetic identities require no stochastic model. An exact F reference additionally requires independent normal within-group errors, common positive variance and the equal-means null.

</details>

### Exercise 7.7
<a id="anova-designed-experiments-ex-7"></a>



Transform every numerical response by $z=10+100x$. How do the two ANOVA squared sums, F ratio and differences of group means change? Assume positive original within-group squared sum.

<details>
<summary>Hint 1</summary>

The common shift disappears when values are centred.

</details>
<details>
<summary>Hint 2</summary>

The scale multiplies deviations by one hundred and their squares by ten thousand.

</details>
<details>
<summary>Solution</summary>

Both squared sums multiply by ten thousand. Degrees of freedom stay fixed, so F is unchanged. Differences of means multiply by one hundred, with the common shift cancelled. A dimensionless test statistic can therefore be unchanged while effects require different numerical values and units. Positive within-group sum ensures its denominator is defined.

</details>

### Exercise 7.8
<a id="anova-designed-experiments-ex-8"></a>



A large ANOVA F statistic is reported for three self-selected treatment groups. State the omnibus null, classical F-model assumptions and a bounded interpretation. Explain why the result identifies neither a particular differing pair nor a causal effect.

<details>
<summary>Hint 1</summary>

The null concerns all three population means together.

</details>
<details>
<summary>Hint 2</summary>

Normal-error assumptions and a sampling or assignment mechanism are different requirements.

</details>
<details>
<summary>Solution</summary>

The null is $\mu_1=\mu_2=\mu_3$. The classical reference requires independent observations with normal within-group errors and common positive variance under a specified layout. A large F gives evidence against that equal-means model if the assumptions and analysis plan are credible. It does not identify which pair differs; follow-ups need their own declared family. Self-selection may associate treatment choice with other outcome-related features, so the comparison alone does not establish causation. Report group counts, means, spread and the design limitation.

</details>

### Exercise 7.9
<a id="anova-designed-experiments-ex-9"></a>



Three prespecified pairwise comparisons have valid marginal p-values 0.01, 0.03 and 0.20. Find the Holm-adjusted values and compare them with 0.05. Explain why adjusting only these three does not account for a hidden search across many cutoffs.

<details>
<summary>Hint 1</summary>

Sort the values and multiply by three, two and one respectively.

</details>
<details>
<summary>Hint 2</summary>

Take cumulative maxima in sorted order and cap at one.

</details>
<details>
<summary>Solution</summary>

The products are 0.03, 0.06 and 0.20, already increasing, so these are the adjusted values. Only the first is at most 0.05. The guarantee concerns a declared family with valid marginal p-values. Searching many alternatives and retaining a favourable subset changes the effective family and can invalidate the reported marginal values. A correction limited to the disclosed three does not represent the undisclosed search.

</details>

### Exercise 7.10
<a id="anova-designed-experiments-ex-10"></a>



Plan a report for the frozen Iris records using fixed petal-width bins and sepal length by species. Specify source version, licence, units, numerical outputs, nulls, assumptions and limits. Explain how a Welch sensitivity comparison and any follow-up family would be declared before choosing a favourable p-value.

<details>
<summary>Hint 1</summary>

Separate provenance, descriptive arithmetic and model-dependent inference.

</details>
<details>
<summary>Hint 2</summary>

Prespecify the primary analysis and follow-up family, and label an alternative as a sensitivity comparison.

</details>
<details>
<summary>Solution</summary>

Identify the selected UCI iris.data version, frozen with headings added and no numerical correction, and attribute CC BY 4.0. Each row records one plant; introduced source-order IDs are analysis labels. Report species-by-bin counts, margins, row proportions, expected counts and Pearson discrepancy, qualifying any reference p-value by its count-model assumptions. For sepal length give group n, mean, SD, squared sums and the classical normal independent common-variance conditions. Welch can be a prespecified approximate sensitivity analysis for unequal variances. State every planned follow-up and family adjustment. These observational records neither randomise species nor establish causes or habitat-wide species prevalence.

</details>


## Sources

Fisher, R. (1936), [*Iris*](https://archive.ics.uci.edu/dataset/53/iris), UCI Machine Learning Repository, DOI 10.24432/C56C76, CC BY 4.0. The selected primary file is [iris.data](https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data). [Download the frozen Iris CSV](../../downloads/statistics-with-r/iris-uci.csv), whose local headings and source-order convention are stated above.

For introductory categorical and ANOVA reasoning see Diez, Çetinkaya-Rundel and Barr, [*OpenIntro Statistics*](https://www.openintro.org/book/os/). The reference distribution results are imported statistical theorems; the finite squared-sum identity and hand arithmetic are proved here.

For base-distribution software semantics see official R documentation for [chisq.test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/chisq.test.html), [fisher.test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/fisher.test.html), [aov](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/aov.html), [oneway.test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/oneway.test.html), and [p.adjust](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/p.adjust.html). New prose, code and synthetic exercises are original Math Atlas material under CC BY-SA 4.0. The third-party dataset retains its CC BY 4.0 attribution.

## Summary

Categorical tables compare observed cells with fitted null expectations; a chi-square p-value adds an approximate count-model reference. ANOVA splits numerical variation into within-group and between-group sums by exact algebra, while its classical F interpretation additionally needs independent normal errors with common variance. Welch gives an approximate unequal-variance alternative. Effects, units, provenance, assumptions and the declared follow-up family remain part of any defensible conclusion.

Balanced designs admit orthogonal main and interaction spaces. Randomisation supports a different causal and reference argument; blocking, clustering and lack of replication must remain in that argument.
