var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-logistic-regression
title: "Solutions: Logistic Regression: Probabilities, Odds, and Decisions"
level: undergraduate
license: CC BY-SA 4.0
---

# Solutions: Logistic Regression: Probabilities, Odds, and Decisions

These complete answers retain the same semantic exercise IDs as the chapter. Run the following base-R setup in document order from the book directory or repository root with the frozen dataset in its declared local location. It repeats all required local loading and model calculations, so the companion does not borrow an R workspace from the main chapter. No packages are installed and no network request occurs during execution.

## Local data and model setup

\`\`\`r
logit_data_file <- function(filename) {
  candidates <- c(
    file.path("data", filename),
    file.path("modules", "atlas", "content", "books",
              "statistics-with-r", "data", filename)
  )
  available <- candidates[file.exists(candidates)]
  if (length(available) == 0L) stop("Place the frozen CSV in data/; run from the book directory or repository root.")
  available[[1L]]
}
banknotes <- read.csv(logit_data_file("banknote-authentication.csv"),
                      stringsAsFactors = FALSE)
stopifnot(identical(names(banknotes),
                    c("variance", "skewness", "curtosis", "entropy", "class")))
stopifnot(nrow(banknotes) == 1372L, !anyNA(banknotes))
stopifnot(all(banknotes$class %in% c(0L, 1L)))
stopifnot(all(is.finite(banknotes$variance)))
banknotes$source_row <- seq_len(nrow(banknotes))
within_class_position <- ave(
  banknotes$source_row, banknotes$class,
  FUN = function(z) seq_along(z)
)
evaluation_flag <- within_class_position %% 5L == 0L
training_banknotes <- banknotes[!evaluation_flag, , drop = FALSE]
evaluation_banknotes <- banknotes[evaluation_flag, , drop = FALSE]
stopifnot(length(intersect(training_banknotes$source_row,
                           evaluation_banknotes$source_row)) == 0L)
stopifnot(nrow(training_banknotes) + nrow(evaluation_banknotes) == 1372L)
print(table(part = ifelse(evaluation_flag, "evaluation", "training"),
            recorded_class = banknotes$class))
banknote_fit <- glm(
  class ~ variance, family = binomial(link = "logit"),
  data = training_banknotes, na.action = na.fail
)
stopifnot(isTRUE(banknote_fit$converged), all(is.finite(coef(banknote_fit))))
print(coef(summary(banknote_fit)))
\`\`\`

\`\`\`r
evaluation_eta <- predict(banknote_fit, newdata = evaluation_banknotes,
                          type = "link")
evaluation_probability <- predict(
  banknote_fit, newdata = evaluation_banknotes, type = "response"
)
stopifnot(all(is.finite(evaluation_probability)),
          all(evaluation_probability >= 0 & evaluation_probability <= 1))
stopifnot(all(abs(evaluation_probability - plogis(evaluation_eta)) <=
                1e-10 + 1e-8 * abs(evaluation_probability)))
prediction_table_logit <- data.frame(
  source_row = evaluation_banknotes$source_row[1:8],
  feature_variance = evaluation_banknotes$variance[1:8],
  recorded_class = evaluation_banknotes$class[1:8],
  log_odds = evaluation_eta[1:8],
  probability_class_one = evaluation_probability[1:8]
)
print(prediction_table_logit, row.names = FALSE)
print(data.frame(term = names(coef(banknote_fit)),
                 estimate = coef(banknote_fit),
                 odds_multiplier = exp(coef(banknote_fit))))
\`\`\`

\`\`\`r
threshold_logit <- 0.5
predicted_class_logit <- as.integer(evaluation_probability >= threshold_logit)
confusion_logit <- table(
  actual = factor(evaluation_banknotes$class, levels = c(0, 1)),
  predicted = factor(predicted_class_logit, levels = c(0, 1))
)
true_negative <- unname(confusion_logit["0", "0"])
false_positive <- unname(confusion_logit["0", "1"])
false_negative <- unname(confusion_logit["1", "0"])
true_positive <- unname(confusion_logit["1", "1"])
stopifnot(sum(confusion_logit) == nrow(evaluation_banknotes))
sensitivity_logit <- true_positive / (true_positive + false_negative)
specificity_logit <- true_negative / (true_negative + false_positive)
accuracy_logit <- (true_positive + true_negative) / sum(confusion_logit)
brier_logit <- mean((evaluation_probability - evaluation_banknotes$class)^2)
print(confusion_logit)
print(data.frame(
  measure = c("accuracy", "sensitivity", "specificity", "Brier score"),
  value = c(accuracy_logit, sensitivity_logit, specificity_logit, brier_logit)
), row.names = FALSE)
\`\`\`

## R-LOGIT-E01

The odds are $1/4$, and the log-odds are $\\log(1/4)=-\\log4$, approximately $-1.3863$. Recovering probability gives $(1/4)/(1+1/4)=1/5=0.2$. The negative log-odds is compatible with a positive probability; it signals a probability below one half.

## R-LOGIT-E02

The odds are three and the probability is $3/4=0.75$. The score $\\log3$ exceeds one and is not constrained to the unit interval; it lives on the log-odds scale. Only its inverse-logit transformation is a modeled event probability.

## R-LOGIT-E03

The new probability is $3(0.2)/(0.8+3(0.2))=0.6/1.4=3/7$, approximately $0.4286$. Tripling the probability would give $0.6$, a different operation. An odds ratio does not specify a constant risk ratio or a fixed probability difference across baselines.

## R-LOGIT-E04

The odds multiply by $e^{-0.8}$, approximately $0.4493$. They decrease by this multiplicative factor, while the probability change depends on its initial value. The statement is a conditional model comparison and supplies no causal intervention claim.

## R-LOGIT-E05

The likelihood is $0.8\\cdot0.7=0.56$ and log likelihood is $\\log0.56=\\log0.8+\\log0.7$. Conditional independence licenses multiplying the two Bernoulli probabilities. With only the two marginal probabilities and unrestricted dependence, that joint response probability is not determined.

## R-LOGIT-E06

The link output is the fitted log-odds score, while the response output is its inverse-logit modeled probability of recorded class one. A score of zero corresponds to probability one half. A negative score is not a negative probability, and applying a threshold intended for probabilities directly to link scores generally changes the decision rule.

## R-LOGIT-E07

Sensitivity is $12/15=0.8$, specificity is $20/25=0.8$, and accuracy is $(12+20)/40=0.8$. The equal numerical values here arise from these particular counts, not from an identity. Report denominators and error directions even when the summaries coincide.

## R-LOGIT-E08

The score is $(0.01+0.04+0.36)/3=0.41/3$, approximately $0.1367$. At threshold one half the predicted labels are $(0,1,1)$, but those labels do not distinguish probability $0.6$ from $0.99$ on the final incorrect positive. Probability scoring retains information discarded by one threshold decision.

## R-LOGIT-E09

With intercept zero, scores are $-b$ at the zero and $b$ at the one, so both correct-outcome probabilities are $1/(1+e^{-b})$. Their product is strictly below one for finite $b$ and tends to one as $b\\to\\infty$. No finite coefficient attains the supremum; treating a huge iterative estimate as a well-behaved finite optimum is unjustified.

## R-LOGIT-E10

The table gives finite descriptive accuracy on the reserved records. Under a suitable sampling model it can estimate performance for that collection mechanism, but a different deployment prevalence changes the weighting of class-conditional errors. Changes in imaging or specimens can also change those errors themselves. Preserve class-specific counts, validate label meaning and transport assumptions, and assess calibration and decision costs in a relevant independent evaluation rather than transfer one accuracy number automatically.

## Sources

The dataset identity, licence and scientific scope are recorded in the main chapter's Sources section. The frozen dataset is available through the book download link. All explanatory answers are original. Numerical examples distinguish supplied illustrative coefficients from coefficients fitted by the code.

## Summary

Each answer separates a declared calculation from the model and design assumptions needed to interpret it. Retain those assumptions when reusing the code or comparing a new dataset.
`;export{e as default};