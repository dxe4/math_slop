var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-multiple-regression
title: "Solutions: Multiple Regression: Comparisons with Other Predictors Held Fixed"
level: undergraduate
license: CC BY-SA 4.0
---

# Solutions: Multiple Regression: Comparisons with Other Predictors Held Fixed

These complete answers retain the same semantic exercise IDs as the chapter. Run the following base-R setup in document order from the book directory or repository root with the frozen dataset in its declared local location. It repeats all required local loading and model calculations, so the companion does not borrow an R workspace from the main chapter. No packages are installed and no network request occurs during execution.

## Local data and model setup

\`\`\`r
multi_data_file <- function(filename) {
  candidates <- c(
    file.path("data", filename),
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

## R-MULTI-E01

There are five coefficients. The intercept and numerical main slopes refer to the chosen reference species under the additive formula, while each of the two indicator coefficients shifts its fitted level relative to Adelie at fixed included lengths. The additive numerical slopes are shared across species because this formula has no interactions.

## R-MULTI-E02

The supplied illustrative equation gives $4000+30(5)+10(2)+200=4370$ grams. These coefficients were declared for interpretation and are not reported CSV estimates. A real fitted prediction must use the coefficients printed by the actual fit and retain the model and data scope.

## R-MULTI-E03

For every row the fitted-value change is $t-t(I_A+I_C+I_G)=t-t=0$. Thus infinitely many coefficient vectors yield the same fitted values. Dropping one indicator or changing to a no-intercept parameterization removes this particular redundancy; the scientific comparisons must then be interpreted under that convention.

## R-MULTI-E04

The larger model includes every smaller-model predictor by assigning zero to its additional coefficients. Its minimization is therefore over a superset of the smaller model's choices, so its minimum cannot be larger. This deterministic result requires the same responses, rows and loss, and says nothing by itself about independent future prediction error.

## R-MULTI-E05

The residual degrees of freedom are $342-5=337$, and $s^2=SSE/337$ in square grams. Its interpretation as an error-variance estimate requires the relevant conditional mean and common-variance model. The arithmetic alone does not establish those assumptions.

## R-MULTI-E06

The Gentoo slope is $25-4=21$ grams per millimetre at fixed other included terms. The minus-four coefficient is a slope difference rather than the whole Gentoo slope or an intercept shift. These are conditional associations in the declared formula, not intervention effects.

## R-MULTI-E07

The nesting argument compares two feasible predictor families for the same observed responses. Dropping extra rows in only one model changes those responses and their count, so a smaller residual sum could reflect different data. Prepare the common required-variable mask before fitting both models, retain its exclusions, and compare with the corresponding same-row degrees of freedom.

## R-MULTI-E08

At a least-squares fit with an intercept, optimization forces $\\sum r_i=0$ for the observed rows. This holds even if the true conditional mean is curved, errors are dependent, or the sample was selected. A fact imposed by the fitting rule cannot independently verify the probability assumptions used for inference.

## R-MULTI-E09

The models must be nested on the same fixed predictor table, have full ranks $p_0<p_1<n$, and satisfy the larger model's conditional normal independent mean-zero errors with common positive variance. Under the null the extra coefficients vanish. These assumptions support the imported F theorem. The fact $SSE_1\\le SSE_0$ needs only nested fitting families on identical rows and squared-error minimization.

## R-MULTI-E10

Report the reduced training error and the complete search history without calling the final ordinary p-value a calibrated summary of the whole selection. Freeze the data-processing, fitting and prediction rule, then evaluate it on genuinely held-out comparable observations under a declared collection mechanism. If every label was used for selection, collect new evaluation data or use a justified nested validation design rather than relabel the same selected performance.

## Sources

The dataset identity, licence and scientific scope are recorded in the main chapter's Sources section. The frozen dataset is available through the book download link. All explanatory answers are original. Numerical examples distinguish supplied illustrative coefficients from coefficients fitted by the code.

## Summary

Each answer separates a declared calculation from the model and design assumptions needed to interpret it. Retain those assumptions when reusing the code or comparing a new dataset.
`;export{e as default};