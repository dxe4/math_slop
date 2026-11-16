var e=`---
parent_id: book-regression-and-generalised-linear-models
chapter_id: multiple-regression-collinearity
title: "Multiple Regression and Collinearity"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Multiple Regression and Collinearity

Preparation is [partial regression](geometry-of-projection.md), [conditional regression inference](gauss-markov-and-inference.md), and basic R formula syntax from Statistics with R. This L3 chapter adds variance-inflation and omitted-variable derivations to the licensed applied dataset.

A simple line describes how a fitted response changes with one predictor. A multiple regression describes how that fitted response changes with one predictor while the other terms in the declared formula remain fixed. This distinction matters when groups differ in several ways. A pooled mass-on-flipper line can mix differences within a penguin species with differences between species. Adding predictors makes the comparison more explicit, but it does not manufacture random assignment or repair an unmeasured cause.

This chapter uses arithmetic, elementary algebra, tables, the simple least-squares chapter, and base R. No calculus or matrix course is assumed. We prove the algebraic minimization property through sums of squares, then distinguish that property from the probability model supporting conventional intervals and tests. A program can fit a descriptive surface without proving that its uncertainty calculation matches how the observations were collected.

## The source, row, units, and analysis target

The real dataset is the [frozen Palmer penguin CSV](/data/statistics-with-r/penguins.csv), also used in the simple-line investigation. Horst, Hill and Gorman's [author dataset site](https://allisonhorst.github.io/palmerpenguins/) attributes the measurements to Kristen Gorman and Palmer Station LTER and declares CC0 for the data. The 344 source records include three species measured on islands in the Palmer Archipelago during 2007–2009. The CSV keeps the source's eight columns, row order and <code>NA</code> missing code.

Our response is body mass in grams. Predictors are flipper length and bill length in millimetres and species as a category. A complete-case mask uses exactly those variables. Sex is recorded but is not used in this particular formula, so a missing sex value is not a reason to omit a row. This choice is part of the analysis, not a general recommendation that sex is irrelevant. A different scientific question might require another formula and another inclusion rule.

The immediate descriptive target is the least-squares relationship among the retained records. A process-mean interpretation adds a conditional-mean model; a new-penguin prediction adds a claim about a comparable future observation. There was no randomized intervention assigning body dimensions or species. Consequently none of the fitted coefficients will be called a causal effect.

**Definition R-DEF-multi-predictor (multiple linear predictor).** A multiple linear predictor is an expression
$
m_i=b_0+b_1x_{i1}+\\cdots+b_kx_{ik}.
$
The response and fitted value have the same units. Each numerical predictor coefficient has response units divided by that predictor's units. Category indicators are dimensionless, so their coefficients have response units. “Linear” concerns the coefficients: a formula may include a squared measurement or an interaction while still being linear in its coefficients.

An intercept supplies a constant term. To encode three species with an intercept, choose a reference species and use two indicators. Here Adelie is the reference. A Chinstrap indicator is one for a Chinstrap record and zero otherwise, and a Gentoo indicator is defined similarly. Including all three species indicators together with an intercept would duplicate information, since the three indicators sum to one.

## What is minimized, and when coefficients are identifiable

**Definition R-DEF-multi-least-squares (multiple least squares).** For the fixed observed response vector and chosen predictor columns, ordinary least squares minimizes
$
Q(b)=\\sum_i(y_i-m_i)^2.
$
The coefficient vector is identifiable from these columns if no nonzero change in coefficients leaves every fitted value unchanged. This is called full column rank. It is an algebraic property of the actual analysis table.

For example, if a second predictor is exactly twice the first, the terms $b_1x_i+b_2(2x_i)$ only identify $b_1+2b_2$. Replacing $b_1$ by $b_1+2t$ and $b_2$ by $b_2-t$ changes no fitted value. A software coefficient reported as unavailable in such a fit is revealing a mathematical redundancy, not simply an inconvenience to suppress.

**Theorem R-THM-multi-residual-identity. Status: proved here.** Include the intercept as predictor column $x_{i0}=1$. Suppose coefficients $\\hat b$ have residuals $r_i=y_i-\\sum_j\\hat b_jx_{ij}$ satisfying $\\sum_i x_{ij}r_i=0$ for every included column. Then $\\hat b$ minimizes the residual sum of squares. If the columns have full rank, the minimizer is unique.

**Proof.** For a proposed coefficient change $h$, expand the new squared error:
$
Q(\\hat b+h)=Q(\\hat b)-2\\sum_jh_j\\sum_ix_{ij}r_i+
\\sum_i\\left(\\sum_jh_jx_{ij}\\right)^2.
$
Every middle sum is zero by the premise. The last term is nonnegative, proving minimization. Equality requires every changed fitted value $\\sum_jh_jx_{ij}$ to be zero. Full rank says this can happen only for $h=0$, proving uniqueness. Conversely, at any minimizer a nonzero residual cross-sum for one column would permit a change in that coefficient reducing its one-variable quadratic; hence the residual cross-sums must vanish. This argument uses completion of squares, not differentiation. ∎

These residual identities are not tests of a scientific model. In particular, an intercept makes residuals sum to zero by construction. That does not establish that the unobserved model errors have mean zero conditionally on the predictors, nor that they are independent or normally distributed.

## Worked example 1: fitting and auditing the real table

Download the frozen CSV into <code>data</code> beside the chapter, or work from the repository root. The following local-only locator supports either location. The source-row index is introduced for traceability; it is not a collector-supplied animal identifier. Centering the two lengths at 200 and 45 millimetres changes the intercept's interpretation without changing the set of possible fitted values.

\`\`\`r
multi_data_file <- function(filename) {
  candidates <- c(
    file.path("data", filename),
    file.path("..", "statistics-with-r", "data", filename),
    file.path("modules", "atlas", "content", "books",
              "statistics-with-r", "data", filename)
  )
  available <- candidates[file.exists(candidates)]
  if (length(available) == 0L) stop("Place the frozen CSV in data/; run from the book directory or repository root.")
  available[[1L]]
}
penguins_multi <- read.csv(
  multi_data_file("penguins.csv"), na.strings = "NA",
  stringsAsFactors = FALSE
)
stopifnot(nrow(penguins_multi) == 344L)
penguins_multi$source_row <- seq_len(nrow(penguins_multi))
multi_required <- c("body_mass_g", "flipper_length_mm", "bill_length_mm", "species")
multi_keep <- complete.cases(penguins_multi[multi_required])
multi_rows <- penguins_multi[multi_keep, , drop = FALSE]
multi_excluded <- penguins_multi[!multi_keep, , drop = FALSE]
multi_rows$species <- factor(
  multi_rows$species, levels = c("Adelie", "Chinstrap", "Gentoo")
)
multi_rows$flipper_c <- multi_rows$flipper_length_mm - 200
multi_rows$bill_c <- multi_rows$bill_length_mm - 45
stopifnot(nrow(multi_rows) >= 100L, !anyNA(multi_rows[multi_required]))
stopifnot(all(is.finite(multi_rows$body_mass_g)),
          all(is.finite(multi_rows$flipper_c)),
          all(is.finite(multi_rows$bill_c)))
print(multi_excluded[c("source_row", multi_required)])
multi_fit <- lm(
  body_mass_g ~ flipper_c + bill_c + species,
  data = multi_rows, na.action = na.fail,
  contrasts = list(species = "contr.treatment")
)
print(coef(summary(multi_fit)))
\`\`\`

The formula has five coefficients: an intercept, two numerical slopes and two reference-species differences. The coefficient table reports estimates and conventional model-based standard errors. Its p-values do not validate the row selection or independence premises. The number of retained rows and the excluded rows must remain with the table so the model's data are identifiable.

<code>model.matrix</code> displays the numerical columns R actually used. The operator <code>%*%</code> takes each row's products with the coefficient vector and adds them; it is the same fitted-value formula written as a table operation. <code>crossprod(X,r)</code> computes each column's sum of products with the residuals. These operations expose the algebra behind the formula.

\`\`\`r
multi_X <- model.matrix(multi_fit)
multi_b <- coef(multi_fit)
multi_r <- residuals(multi_fit)
stopifnot(multi_fit$rank == ncol(multi_X))
stopifnot(ncol(multi_X) == 5L)
manual_fitted_multi <- drop(multi_X %*% multi_b)
stopifnot(all(abs(manual_fitted_multi - fitted(multi_fit)) <=
              1e-10 + 1e-8 * abs(fitted(multi_fit))))
residual_cross_sums <- drop(crossprod(multi_X, multi_r))
print(data.frame(column = colnames(multi_X), residual_cross_sum = residual_cross_sums))
print(data.frame(source_row = multi_rows$source_row[1:5],
                 multi_X[1:5, , drop = FALSE], check.names = FALSE))
\`\`\`

Floating-point residual cross-sums can be extremely close to zero without being exactly the integer zero. Their numerical scale must be interpreted with the data scale and computational precision; a tiny nonzero printout does not refute the algebraic theorem. Conversely, numerical agreement with the identity does not certify model validity.

A useful report identifies what the slopes compare: records whose other included predictor values and species are held fixed in the additive prediction formula. It also identifies whether the dataset contains meaningful overlap for those comparisons. A coefficient can describe a formal contrast between combinations rarely or never observed together. Marginal ranges of each predictor alone do not establish that every combination in their rectangle is supported by data.

## Worked example 2: a coefficient, a category, and an actual prediction

Suppose, solely to interpret units, an additive gram-scale equation has an intercept of 4000 at the centred lengths, a flipper coefficient of 30 grams per millimetre, a bill coefficient of ten grams per millimetre, and a Chinstrap indicator coefficient of 200 grams. These are supplied illustrative coefficients, not claimed estimates from the penguins. At a 205-millimetre flipper and 47-millimetre bill, the fitted reference-species mass would be $4000+30(5)+10(2)=4170$ grams. For the same lengths with the Chinstrap indicator one, the fitted value would be $4370$ grams.

The 200-gram difference is between fitted categories at fixed included measurements. It is not the difference between the two observed species means, since those means average over their different length distributions. Nor is it an intervention effect of changing species. Similarly the 30-gram slope does not mean each observed pair separated by one millimetre differs by thirty grams.

For actual estimates, take three observed predictor combinations from the retained table. <code>predict</code> evaluates the fitted formula and, when requested, gives intervals under the specified linear-model assumptions. The printed table preserves mass units and distinguishes mean-response uncertainty from future individual variation.

\`\`\`r
multi_new <- multi_rows[c(1L, 150L, 250L),
                       c("source_row", "flipper_c", "bill_c", "species")]
multi_mean_ci <- predict(multi_fit, newdata = multi_new,
                         interval = "confidence", level = 0.95)
multi_new_pi <- predict(multi_fit, newdata = multi_new,
                        interval = "prediction", level = 0.95)
multi_predictions <- data.frame(
  multi_new, fitted_g = multi_mean_ci[, "fit"],
  mean_lower_g = multi_mean_ci[, "lwr"], mean_upper_g = multi_mean_ci[, "upr"],
  new_lower_g = multi_new_pi[, "lwr"], new_upper_g = multi_new_pi[, "upr"]
)
print(multi_predictions, row.names = FALSE)
stopifnot(all(multi_new_pi[, "upr"] - multi_new_pi[, "lwr"] >=
              multi_mean_ci[, "upr"] - multi_mean_ci[, "lwr"]))
\`\`\`

These rows use measured combinations, which avoids inventing unsupported category-length combinations for the illustration. Treating their predicted intervals as future-observation intervals still imagines new comparable observations under the model; it is not a probability interval for an already known response. The wider interval includes a new error component, while the conditional-mean interval concerns the model's mean surface.

## Probability assumptions and interactions

**Claim R-CLAIM-multi-inference. Status: imported normal-linear-model theorem.** Conditional on a fixed full-rank predictor table with $p$ columns and $n>p$, independent normal errors with mean zero and common positive variance give the conventional $t$ coefficient intervals and nested-model $F$ reference distributions. The estimated error variance uses residual sum of squares divided by $n-p$. Exactness is a property of that model, not of every table accepted by <code>lm</code>.

This theorem extends the normal simple-line result. Its proof via orthogonal Gaussian projections belongs to the more advanced probability route; it is stated here with its assumptions rather than disguised as a no-calculus derivation. In applications with random predictors the conditional version requires the corresponding error conditions given the predictor table. Heterogeneous variance, clustering, dependence, selection, or a wrong conditional mean can invalidate the conventional reference calculation.

**Definition R-DEF-multi-interaction (interaction).** An interaction makes one fitted contrast depend on another predictor. In a model with flipper-by-species interactions, the reference-species flipper slope is one coefficient and each other species adds its own slope difference. It is therefore incorrect to interpret the main flipper coefficient as every species' slope.

The formula <code>flipper_c * species</code> means both main terms and their interaction. With bill length also included, it adds two species-specific flipper slope differences to the additive model. Its intercept still refers to the reference species at both centred lengths. Centering often improves this interpretation, but it cannot create overlap or solve redundancy.

## Worked example 3: a better training fit need not predict better

Fit an additive model and a larger interaction model on exactly the same retained rows. Every additive fitted surface is available to the interaction model by setting its new coefficients to zero. Therefore minimizing over the larger set cannot increase the residual sum of squares. This proves the training-fit comparison without assuming a probability law.

\`\`\`r
multi_interaction <- lm(
  body_mass_g ~ flipper_c * species + bill_c,
  data = multi_rows, na.action = na.fail,
  contrasts = list(species = "contr.treatment")
)
sse_additive <- sum(residuals(multi_fit)^2)
sse_interaction <- sum(residuals(multi_interaction)^2)
stopifnot(nobs(multi_fit) == nobs(multi_interaction))
stopifnot(sse_interaction <= sse_additive + 1e-8 * max(1, sse_additive))
comparison_multi <- data.frame(
  model = c("additive", "flipper-by-species"),
  rows = c(nobs(multi_fit), nobs(multi_interaction)),
  coefficients = c(multi_fit$rank, multi_interaction$rank),
  residual_df = c(df.residual(multi_fit), df.residual(multi_interaction)),
  residual_sum_squares = c(sse_additive, sse_interaction)
)
print(comparison_multi, row.names = FALSE)
print(anova(multi_fit, multi_interaction))
\`\`\`

For these full-rank formulas, the coefficient counts are five and seven. The nested-model statistic is
$
F=\\frac{(SSE_{\\rm small}-SSE_{\\rm large})/(7-5)}
        {SSE_{\\rm large}/(n-7)}.
$
It has its exact $F$ reference law under the null that the two extra coefficients vanish and the normal common-variance independent-error premises above. A small p-value does not establish that the larger model is scientifically correct. A non-small p-value does not prove identical species slopes.

The training sum of squares necessarily improves or ties, but future error can increase because extra coefficients fit sample-specific variation. A held-out prediction comparison must freeze the fitting and selection procedure before using evaluation responses. Repeatedly selecting terms until a desirable p-value appears changes the procedure; its last ordinary table does not describe that selection process. The later diagnostics chapter develops this problem explicitly.

Collinearity is another warning. Two predictors can be nearly redundant without being exactly equal. Coefficients can then change considerably under small data changes even when fitted values change little. Report the intended prediction target and inspect sensitivity rather than treating a large standard error as a reason to hide a predictor. Scientific adjustment, descriptive explanation and pure prediction can justify different formulas; no one automatic selection rule resolves those aims for the reader.


## Coefficient variance after partialling out other columns

For a full-rank design, focus on a numerical predictor $x_j$ and let $Z$ contain every other column, including the intercept. Partial regression gives
$$
\\hat\\beta_j=\\frac{x_j^\\mathsf TM_ZY}{x_j^\\mathsf TM_Zx_j}.
$$
Under spherical errors its conditional variance is $\\sigma^2/(x_j^\\mathsf TM_Zx_j)$. This follows by linear covariance: $M_Z$ is symmetric idempotent, so the squared length of the numerator's coefficient vector is $x_j^\\mathsf TM_Zx_j$.

Let $S_{jj}=\\sum_i(x_{ij}-\\bar x_j)^2>0$, and let $R_j^2$ be the coefficient of determination when regressing $x_j$ on the other columns with the intercept. Then
$$
x_j^\\mathsf TM_Zx_j=S_{jj}(1-R_j^2).
$$
The variance inflation factor is $1/(1-R_j^2)$. It compares the coefficient variance with a design having the same centred predictor length but orthogonality to the adjustment columns. This comparison holds the error variance fixed. It is not a universal measure of the scientific merit of adjusting for those columns.

At exact $R_j^2=1$, the residualised predictor is zero and the coefficient is not identified. Near one, the coefficient may have a large variance while fitted values within the observed predictor cloud remain stable. Prediction outside that cloud can instead be highly unstable, so stability of training fits is not a general extrapolation guarantee.

## Omitted-variable bias is a residualised association

Suppose the true conditional mean is $Z\\alpha+x\\beta+W\\gamma$, but a fitted model omits $W$. Residualise against $Z$. The coefficient from regressing $M_ZY$ on $M_Zx$ has conditional mean
$$
\\beta+\\frac{x^\\mathsf TM_ZW\\gamma}{x^\\mathsf TM_Zx}.
$$
This is obtained by substituting the true mean into the one-predictor formula and using $M_ZZ=0$. The error term has conditional mean zero under the stated full mean model.

Its sign depends on the association between the residualised predictor and the omitted component, together with that component's coefficient. Raw correlation alone may have a different sign after adjustment. If the omitted variable is a mediator or collider in a causal problem, adding it can itself change the target or induce bias. The algebra describes a projection comparison; a causal adjustment decision needs the relevant scientific graph or design.

**Worked example: nearly duplicate predictors.** Take centred predictors $x$ and $w=x+\\delta z$, where $z$ is centred and orthogonal to $x$. The model contribution is $(\\beta_x+\\beta_w)x+\\delta\\beta_wz$. As $\\delta$ becomes small, separating the two original slopes requires distinguishing a very small direction. Their sum can be much better determined. At $\\delta=0$ that small direction disappears and only the sum is identified. More decimal places do not reconstruct information absent from the design.

## Applied comparison with a licensed table

The following applied route retains Euler's original multiple-regression dataset, R code and complete solutions. The L3 derivations above explain its collinearity and adjustment claims; its numerical passages remain supplied source code, with no asserted execution in this manuscript.

## Exercises

Each question has a stable semantic ID independent of its chapter position. The [companion solutions](../statistics-with-r/solutions/multiple-regression.md) repeat the setup needed for a fresh local-data session.

### Exercise 4.1
<a id="multiple-regression-collinearity-ex-1"></a>



For the formula with an intercept, flipper length, bill length and three species, count the coefficients and state the reference-species interpretation.

<details>
<summary>Hint 1</summary>

Three species do not require three indicators when an intercept is present.

</details>

<details>
<summary>Hint 2</summary>

Count one intercept, two numerical slopes and two indicators.

</details>

<details>
<summary>Solution</summary>

There are five coefficients. The intercept and numerical main slopes refer to the chosen reference species under the additive formula, while each of the two indicator coefficients shifts its fitted level relative to Adelie at fixed included lengths. The additive numerical slopes are shared across species because this formula has no interactions.

</details>

### Exercise 4.2
<a id="multiple-regression-collinearity-ex-2"></a>



In the illustrative equation, predict mass for a Chinstrap penguin with flipper length 205 mm and bill length 47 mm. State whether the result is an estimate actually fitted from the CSV.

<details>
<summary>Hint 1</summary>

Use centered lengths five and two.

</details>

<details>
<summary>Hint 2</summary>

Add the 200-gram category shift to the reference prediction.

</details>

<details>
<summary>Solution</summary>

The supplied illustrative equation gives $4000+30(5)+10(2)+200=4370$ grams. These coefficients were declared for interpretation and are not reported CSV estimates. A real fitted prediction must use the coefficients printed by the actual fit and retain the model and data scope.

</details>

### Exercise 4.3
<a id="multiple-regression-collinearity-ex-3"></a>



A colleague includes an intercept and all three species indicators. Show the exact redundancy.

<details>
<summary>Hint 1</summary>

The indicators sum to one for every recorded species.

</details>

<details>
<summary>Hint 2</summary>

Increase the intercept by $t$ and decrease all three category coefficients by $t$.

</details>

<details>
<summary>Solution</summary>

For every row the fitted-value change is $t-t(I_A+I_C+I_G)=t-t=0$. Thus infinitely many coefficient vectors yield the same fitted values. Dropping one indicator or changing to a no-intercept parameterization removes this particular redundancy; the scientific comparisons must then be interpreted under that convention.

</details>

### Exercise 4.4
<a id="multiple-regression-collinearity-ex-4"></a>



Prove that adding an interaction cannot increase the minimum training residual sum of squares when the rows stay fixed.

<details>
<summary>Hint 1</summary>

Compare the sets of available fitted functions.

</details>

<details>
<summary>Hint 2</summary>

Set the interaction coefficients to zero to recover every smaller-model fit.

</details>

<details>
<summary>Solution</summary>

The larger model includes every smaller-model predictor by assigning zero to its additional coefficients. Its minimization is therefore over a superset of the smaller model's choices, so its minimum cannot be larger. This deterministic result requires the same responses, rows and loss, and says nothing by itself about independent future prediction error.

</details>

### Exercise 4.5
<a id="multiple-regression-collinearity-ex-5"></a>



If the additive model has five full-rank columns and $n=342$, give residual degrees of freedom and the estimated error variance formula.

<details>
<summary>Hint 1</summary>

Residual degrees of freedom subtract the number of fitted independent coefficients.

</details>

<details>
<summary>Hint 2</summary>

Use $n-p$, with the intercept included in $p$.

</details>

<details>
<summary>Solution</summary>

The residual degrees of freedom are $342-5=337$, and $s^2=SSE/337$ in square grams. Its interpretation as an error-variance estimate requires the relevant conditional mean and common-variance model. The arithmetic alone does not establish those assumptions.

</details>

### Exercise 4.6
<a id="multiple-regression-collinearity-ex-6"></a>



In a species-interaction model, the reference flipper slope is 25 and the Gentoo interaction coefficient is minus four grams per millimetre. Find the Gentoo slope.

<details>
<summary>Hint 1</summary>

The interaction changes the main slope for that category.

</details>

<details>
<summary>Hint 2</summary>

Add the category's slope difference to the reference slope.

</details>

<details>
<summary>Solution</summary>

The Gentoo slope is $25-4=21$ grams per millimetre at fixed other included terms. The minus-four coefficient is a slope difference rather than the whole Gentoo slope or an intercept shift. These are conditional associations in the declared formula, not intervention effects.

</details>

### Exercise 4.7
<a id="multiple-regression-collinearity-ex-7"></a>



Why must a nested-model comparison use a common complete-case set?

<details>
<summary>Hint 1</summary>

A changed row set changes the loss being minimized.

</details>

<details>
<summary>Hint 2</summary>

A training error on one set need not be comparable with an error on a different set.

</details>

<details>
<summary>Solution</summary>

The nesting argument compares two feasible predictor families for the same observed responses. Dropping extra rows in only one model changes those responses and their count, so a smaller residual sum could reflect different data. Prepare the common required-variable mask before fitting both models, retain its exclusions, and compare with the corresponding same-row degrees of freedom.

</details>

### Exercise 4.8
<a id="multiple-regression-collinearity-ex-8"></a>



Use the residual identity to explain why zero residual sum does not prove a correct conditional-mean model.

<details>
<summary>Hint 1</summary>

The intercept is an included constant column.

</details>

<details>
<summary>Hint 2</summary>

The cross-sum condition for that column is the residual sum.

</details>

<details>
<summary>Solution</summary>

At a least-squares fit with an intercept, optimisation forces $\\sum r_i=0$ for the observed rows. This holds even if the true conditional mean is curved, errors are dependent, or the sample was selected. A fact imposed by the fitting rule cannot independently verify the probability assumptions used for inference.

</details>

### Exercise 4.9
<a id="multiple-regression-collinearity-ex-9"></a>



List the conditions for the displayed nested-model F test to have its exact reference distribution, and distinguish them from the algebraic nesting fact.

<details>
<summary>Hint 1</summary>

The reference law adds assumptions about errors.

</details>

<details>
<summary>Hint 2</summary>

Include common rows, full rank, positive common variance, normal independent centred errors and the null restriction.

</details>

<details>
<summary>Solution</summary>

The models must be nested on the same fixed predictor table, have full ranks $p_0<p_1<n$, and satisfy the larger model's conditional normal independent mean-zero errors with common positive variance. Under the null the extra coefficients vanish. These assumptions support the imported F theorem. The fact $SSE_1\\le SSE_0$ needs only nested fitting families on identical rows and squared-error minimization.

</details>

### Exercise 4.10
<a id="multiple-regression-collinearity-ex-10"></a>



A model has a smaller training error after an outcome-driven term search. What can be claimed now, and how would you assess a frozen predictive rule?

<details>
<summary>Hint 1</summary>

The guaranteed claim concerns the training table.

</details>

<details>
<summary>Hint 2</summary>

An evaluation sample must not have guided the search or threshold choices.

</details>

<details>
<summary>Solution</summary>

Report the reduced training error and the complete search history without calling the final ordinary p-value a calibrated summary of the whole selection. Freeze the data-processing, fitting and prediction rule, then evaluate it on genuinely held-out comparable observations under a declared collection mechanism. If every label was used for selection, collect new evaluation data or use a justified nested validation design rather than relabel the same selected performance.

</details>



## Sources

The mathematical exposition, algebraic proof and exercises are original. The penguin observations retain the source's CC0 declaration and attribution to Horst, Hill, Gorman and Palmer Station LTER; see the [author dataset page](https://allisonhorst.github.io/palmerpenguins/) and the [frozen CSV](/data/statistics-with-r/penguins.csv). This local copy preserves the source rows and columns.

Official R Core documentation supports the software interface: [linear models](https://search.r-project.org/R/refmans/stats/html/lm.html), [model matrices](https://search.r-project.org/R/refmans/stats/html/model.matrix.html), and [prediction from linear fits](https://search.r-project.org/R/refmans/stats/html/predict.lm.html). The normal-model interval theorem is explicitly imported above; the prerequisite [simple-line chapter](../statistics-with-r/simple-linear-models.md) states its one-predictor version. The prerequisite Gaussian proof route is the Gaussian orthogonal-decomposition chapter in [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), used by the preceding inference chapter.

## Summary

Multiple regression makes the held-fixed comparison explicit. Least squares minimizes a declared sum of squared residuals, category coding needs a reference convention, and full rank determines whether coefficients are identifiable. Conventional intervals and nested-model tests add probability assumptions. More predictors guarantee no worse training fit on the same rows; they do not guarantee better future predictions or causal interpretation.
`;export{e as default};