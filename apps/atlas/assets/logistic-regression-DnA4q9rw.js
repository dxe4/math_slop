var e=`---
parent_id: book-statistics-with-r
chapter_id: logistic-regression
title: "Logistic Regression: Probabilities, Odds, and Decisions"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Logistic Regression: Probabilities, Odds, and Decisions

A straight-line model for a zero-one outcome can predict values below zero or above one. Logistic regression instead uses a straight-line score and converts that score into a probability between zero and one. This does not make the predictions automatically reliable. We still need to define the recorded event, preserve the data's provenance, distinguish fitting from evaluation, and connect model assumptions to any uncertainty claim.

This chapter assumes the book's elementary probability, logarithm-as-a-function interpretation, simple regression and R formula syntax. It uses algebra and numerical calculation. We define the Bernoulli likelihood and explain its computational optimization without asking the reader to differentiate it or to know an advanced asymptotic theory. Approximate standard errors are labeled as approximations, not derived from an unexplained large-sample theorem.

## The real source and the event being predicted

The source is Volker Lohweg's [Banknote Authentication dataset at UCI](https://archive.ics.uci.edu/dataset/267/banknote+authentication), DOI 10.24432/C55P57, licensed CC BY 4.0. The [frozen local CSV](/data/statistics-with-r/banknote-authentication.csv) has the source's 1372 records and four numerical image-derived features, followed by the recorded binary class. We added column headings and removed blank lines; observations and row order are unchanged. The source describes wavelet-derived image features from genuine and forged banknote-like specimens.

The five local columns are <code>variance</code>, <code>skewness</code>, <code>curtosis</code>, <code>entropy</code>, and <code>class</code>. The spelling <code>curtosis</code> follows the source. These are feature names, not estimates we are recomputing from a sample here. The chapter predicts the event “recorded class equals one.” We do not invent a mapping of the numeric labels to genuine or forged when that mapping is not specified by the selected source description.

One row is one image-derived record in this repository. Whether records can be treated as independent draws from a future authentication environment is an additional modeling premise, not established by the file's dimensions. In particular, the class balance in this assembled dataset is not automatically the prevalence of either kind of specimen in circulation. A classifier calibrated for one mix may be unsuitable for another.

## Probability, odds, and log-odds

**Definition R-DEF-logit-odds (odds).** For an event probability $0<p<1$, its odds are $p/(1-p)$. Odds compare the event probability with its complement. A probability of $0.2$ corresponds to odds $0.2/0.8=1/4$, and odds three correspond to probability $3/(1+3)=3/4$. Probabilities and odds are different numbers.

**Definition R-DEF-logit-model (logistic regression).** A binary response $Y_i$ has conditional event probability
$
p_i=P(Y_i=1\\mid\\hbox{included predictors}),\\qquad
\\log\\frac{p_i}{1-p_i}=\\eta_i=b_0+b_1x_i+\\cdots.
$
Equivalently,
$
p_i=\\frac{e^{\\eta_i}}{1+e^{\\eta_i}}=\\frac1{1+e^{-\\eta_i}}.
$
The score $\\eta_i$ is called the linear predictor. It can be any finite real number, while the modeled probability is strictly between zero and one.

The equivalence follows by exponentiating the log-odds equation and solving $p/(1-p)=e^\\eta$ for $p$. Exponentials are positive, so the denominator $1+e^\\eta$ is positive and exceeds the numerator. At score zero the probability is one half. Positive scores give probabilities above one half and negative scores give probabilities below it. At very large magnitudes, direct exponential formulas can overflow numerically; R's <code>plogis</code> evaluates the inverse-logit transformation stably.

**Theorem R-THM-logit-odds-ratio. Status: proved here.** In a logistic model whose score has the form $\\eta=c+b_1x$, increasing predictor $x$ by $\\Delta$ while holding $c$ fixed multiplies the modeled odds by $e^{b_1\\Delta}$. Here $c$ contains all other score terms; if these include functions of $x$, such as $x^2$, they must also be accounted for when $x$ changes.

**Proof.** The two scores differ by $b_1\\Delta$. Their odds are the exponentials of their scores, so dividing the new odds by the old odds cancels the common exponential terms and leaves $e^{b_1\\Delta}$. This proves an odds-ratio statement, not a fixed probability difference or a causal effect. ∎

## Worked example 1: an odds ratio is not a probability multiplier

Suppose a supplied illustrative coefficient is $b_1=\\log2$, so a one-unit increase doubles the modeled odds. If the initial probability is $0.1$, the initial odds are $1/9$; doubled odds are $2/9$, giving probability $(2/9)/(1+2/9)=2/11$, approximately $0.1818$. If the initial probability is $0.5$, initial odds one become odds two, giving probability $2/3$, approximately $0.6667$.

The same odds ratio therefore gives probability increases of about $0.0818$ and $0.1667$ at these two baselines. It does not double both probabilities and does not add a constant number of percentage points. In general, multiplying odds by $r>0$ changes probability $p$ to
$
p_{\\rm new}=\\frac{rp}{1-p+rp}.
$
This formula follows by substituting new odds $rp/(1-p)$ into odds-to-probability conversion.

The quantities held fixed must be named. If a model includes an interaction with $x$, the score change may also depend on another predictor. If the data are observational, an odds ratio at fixed recorded covariates is a conditional association within the model. It does not identify what changing a specimen or an environment would cause.

## What likelihood asks the computer to optimize

**Definition R-DEF-logit-likelihood (Bernoulli likelihood).** Under conditionally independent Bernoulli observations with probabilities $p_i$ supplied by the model, the likelihood of the recorded response vector is
$
L(b)=\\prod_i p_i^{y_i}(1-p_i)^{1-y_i}.
$
The log likelihood is
$
\\ell(b)=\\sum_i\\{y_i\\log p_i+(1-y_i)\\log(1-p_i)\\}.
$
For a recorded one the contribution is its modeled event probability; for a zero it is its modeled complement. Independence is what permits this product.

A maximum-likelihood fit seeks coefficients assigning a large joint probability to the observed responses under this model. It does not maximize the probability that the model is scientifically true. Taking logarithms preserves the ordering of positive likelihoods and converts many multiplied small factors into an easier numerical sum. R's <code>glm</code> with <code>family=binomial(link="logit")</code> performs the numerical fitting. Its iterative algorithm and convergence checks are computational tools; we do not present them as a calculus proof.

The intercept-only model illustrates the target. If $s$ of $n$ responses are one, its likelihood for a common probability is $p^s(1-p)^{n-s}$. For $0<s<n$, the maximizing fitted probability is $s/n$; its log-odds is $\\log[s/(n-s)]$. This familiar estimate does not imply that adding a predictor must improve future performance. Every new fitted coefficient is selected using the training responses.

A finite best coefficient vector need not exist. If a predictor perfectly separates zeros and ones, increasingly extreme scores can make their likelihood approach its supremum without attaining it at any finite coefficients. Large estimates, unstable standard errors or convergence warnings deserve an investigation. Automatically treating an extreme number as strong scientific evidence misses the existence problem.

## Worked example 2: a frozen split and a real fit

Read the frozen file locally, verify its schema, and retain the raw object. We use only <code>variance</code> as the numerical predictor to keep the first model inspectable and to avoid a search over all feature combinations. Other predictors remain in the source, available for separately declared analyses. The modeled response is the numeric zero-one class, so no factor-level ambiguity determines which event is called success.

We reserve every fifth record within each class for evaluation, retaining original source order. This is a deterministic teaching split and requires no random seed. It prevents the evaluation labels from fitting the displayed coefficients, but it does not randomize the scientific collection or ensure transport to a different imaging system. A stronger evaluation design would sample future environments and specimens deliberately.

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

The coefficient table's slope is a change in log-odds per unit of the recorded variance feature. Exponentiating it gives an odds multiplier for one feature-unit increase. This feature's scale is not a currency unit or a physical banknote thickness. The intercept describes score zero in predictor coordinates and must be assessed relative to the observed feature range.

The conventional standard errors and normal-reference p-values in this table are large-sample approximations under regular independent-observation logistic-model conditions. They can fail in sparse, dependent, separated or badly misspecified settings. We do not call them exact binomial tests, and we do not interpret a p-value as the probability that the predictor is irrelevant.

Now compute actual held-out scores and probabilities. The default prediction scale for this fit is the link, meaning log-odds. Requesting <code>type="response"</code> instead gives modeled probabilities. The following equality checks their mathematical relationship and produces a numeric prediction table, so a graph of the curve is not the only readable result.

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

A predicted probability is not a decision by itself. A probability of $0.4$ might lead to one action when a missed class-one specimen is costly and another when a false alarm is costly. The dataset does not encode those costs. Nor does the numeric class coding establish which real-world action is appropriate; the positive event is the declared recorded label.

## Worked example 3: evaluate a fixed threshold without choosing it on the test labels

Set a threshold of one half before examining the evaluation confusion table. Label a record one when its modeled probability is at least that threshold. A confusion table distinguishes four outcomes and allows several error summaries. Defining the factor levels explicitly ensures that a missing cell is displayed as a zero count rather than changing the table's shape.

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

Sensitivity divides correctly labeled ones by all actual ones. Specificity divides correctly labeled zeros by all actual zeros. Accuracy divides all correct labels by all evaluation records. These denominators differ, so a high accuracy can coexist with poor detection of a rare class. Here both classes occur in the evaluation split; if a denominator were zero, the corresponding sensitivity or specificity would be undefined, not zero.

The Brier score averages squared errors of the probabilities themselves. It evaluates more than a single threshold's labels. For example, predicting $0.51$ and $0.99$ gives the same positive class at threshold one half but very different probability errors if the observation is zero. A threshold table measures decisions at one operating point; a probability score asks another question.

As a fully numerical illustration independent of any claimed CSV fit, suppose an evaluation table has 8 true positives, 2 false negatives, 3 false positives and 7 true negatives. Sensitivity is $8/10=0.8$, specificity $7/10=0.7$, and accuracy $15/20=0.75$. A statement reporting only 75% omits the direction of the five errors. The real table printed by the code supplies its own counts rather than borrowing these illustrative ones.

## Adverse example: separation and unstable certainty

**Claim R-CLAIM-logit-separation. Status: proved here for a two-point example.** Suppose the only two records are $(x,y)=(-1,0)$ and $(1,1)$ and the model has intercept zero and slope $b$. Both recorded outcomes have modeled probability $\\operatorname{logistic}(b)$ under their respective success/complement terms. Thus $L(b)=\\operatorname{logistic}(b)^2$. For every finite $b$, this is below one, but it increases toward one as $b\\to\\infty$. No finite slope attains the supremum.

This example explains a computational failure without fitting a model that deliberately emits a warning. A larger fitted coefficient would keep increasing the observed likelihood, so a finite optimizer and ordinary finite-curvature standard error need not describe the problem. Adding enough predictors can produce such a geometry even when no single predictor separates the classes.

Prediction quality can fail more quietly. A fitted curve can assign well-separated probabilities in development and still fail on a different imaging device, a changed specimen population or repeated images of the same underlying item. Calibration asks whether predicted probabilities match observed frequencies among comparable cases. A small sample grouped by score can illustrate that question but cannot establish universal calibration. If one repeatedly adjusts the model or threshold using the evaluation labels, those data have become development data; retain the search history and seek an untouched assessment.

The appropriate conclusion therefore names the modeled label, input features, source version, fitting split, evaluation split, threshold, error summaries and limits of transport. A well-defined probability model helps organize those questions. It does not remove them.

## Exercises

The [companion solutions](#/item/book-statistics-with-r?section=back:solutions-logistic-regression) repeat the local-data setup. The answers below remain directly available with each question.

## R-LOGIT-E01

**Exercise 15.1**

For event probability $p=0.2$, compute odds and log-odds, and recover the probability from the odds.

<details>
<summary>Hint 1</summary>

Odds divide the event probability by its complement.

</details>

<details>
<summary>Hint 2</summary>

Use $0.2/0.8=1/4$ and then $o/(1+o)$.

</details>

<details>
<summary>Solution</summary>

The odds are $1/4$, and the log-odds are $\\log(1/4)=-\\log4$, approximately $-1.3863$. Recovering probability gives $(1/4)/(1+1/4)=1/5=0.2$. The negative log-odds is compatible with a positive probability; it signals a probability below one half.

</details>

## R-LOGIT-E02

**Exercise 15.2**

A supplied logistic score is $\\eta=\\log3$. Compute its probability and explain why the score is not itself a probability.

<details>
<summary>Hint 1</summary>

Exponentiating the score gives the odds.

</details>

<details>
<summary>Hint 2</summary>

Convert odds three to probability using $o/(1+o)$.

</details>

<details>
<summary>Solution</summary>

The odds are three and the probability is $3/4=0.75$. The score $\\log3$ exceeds one and is not constrained to the unit interval; it lives on the log-odds scale. Only its inverse-logit transformation is a modeled event probability.

</details>

## R-LOGIT-E03

**Exercise 15.3**

An odds multiplier is three and the original modeled probability is $0.2$. Find the new probability and compare it with tripling the old probability.

<details>
<summary>Hint 1</summary>

Multiply the original odds, not the probability.

</details>

<details>
<summary>Hint 2</summary>

Use $rp/(1-p+rp)$ with $r=3$.

</details>

<details>
<summary>Solution</summary>

The new probability is $3(0.2)/(0.8+3(0.2))=0.6/1.4=3/7$, approximately $0.4286$. Tripling the probability would give $0.6$, a different operation. An odds ratio does not specify a constant risk ratio or a fixed probability difference across baselines.

</details>

## R-LOGIT-E04

**Exercise 15.4**

A feature coefficient is $-0.4$ per feature unit with no relevant interaction. What happens to modeled odds after a two-unit increase, with other terms fixed?

<details>
<summary>Hint 1</summary>

The score change is coefficient times predictor change.

</details>

<details>
<summary>Hint 2</summary>

Exponentiate the score change $-0.8$.

</details>

<details>
<summary>Solution</summary>

The odds multiply by $e^{-0.8}$, approximately $0.4493$. They decrease by this multiplicative factor, while the probability change depends on its initial value. The statement is a conditional model comparison and supplies no causal intervention claim.

</details>

## R-LOGIT-E05

**Exercise 15.5**

For two conditionally independent observations $y=(1,0)$ with modeled probabilities $(0.8,0.3)$, compute likelihood and log likelihood. Identify the role of independence.

<details>
<summary>Hint 1</summary>

Use the event probability for the one and the complement for the zero.

</details>

<details>
<summary>Hint 2</summary>

The product is $0.8(1-0.3)$.

</details>

<details>
<summary>Solution</summary>

The likelihood is $0.8\\cdot0.7=0.56$ and log likelihood is $\\log0.56=\\log0.8+\\log0.7$. Conditional independence licenses multiplying the two Bernoulli probabilities. With only the two marginal probabilities and unrestricted dependence, that joint response probability is not determined.

</details>

## R-LOGIT-E06

**Exercise 15.6**

Explain the difference between predictions returned by type='link' and type='response' for this binomial-logit model.

<details>
<summary>Hint 1</summary>

One output is a score, the other a probability.

</details>

<details>
<summary>Hint 2</summary>

They are connected by the inverse-logit map.

</details>

<details>
<summary>Solution</summary>

The link output is the fitted log-odds score, while the response output is its inverse-logit modeled probability of recorded class one. A score of zero corresponds to probability one half. A negative score is not a negative probability, and applying a threshold intended for probabilities directly to link scores generally changes the decision rule.

</details>

## R-LOGIT-E07

**Exercise 15.7**

An evaluation table has 12 true positives, 3 false negatives, 5 false positives and 20 true negatives. Compute sensitivity, specificity and accuracy.

<details>
<summary>Hint 1</summary>

Use all actual ones for sensitivity and all actual zeros for specificity.

</details>

<details>
<summary>Hint 2</summary>

The total is forty records; there are fifteen actual ones and twenty-five actual zeros.

</details>

<details>
<summary>Solution</summary>

Sensitivity is $12/15=0.8$, specificity is $20/25=0.8$, and accuracy is $(12+20)/40=0.8$. The equal numerical values here arise from these particular counts, not from an identity. Report denominators and error directions even when the summaries coincide.

</details>

## R-LOGIT-E08

**Exercise 15.8**

For predicted probabilities $(0.1,0.8,0.6)$ and recorded responses $(0,1,0)$, compute the Brier score. Explain what a threshold-only table omits.

<details>
<summary>Hint 1</summary>

Average the squared probability errors.

</details>

<details>
<summary>Hint 2</summary>

The three squared errors are $0.01$, $0.04$ and $0.36$.

</details>

<details>
<summary>Solution</summary>

The score is $(0.01+0.04+0.36)/3=0.41/3$, approximately $0.1367$. At threshold one half the predicted labels are $(0,1,1)$, but those labels do not distinguish probability $0.6$ from $0.99$ on the final incorrect positive. Probability scoring retains information discarded by one threshold decision.

</details>

## R-LOGIT-E09

**Exercise 15.9**

Show that the two separated points in the adverse example have no finite maximum-likelihood slope.

<details>
<summary>Hint 1</summary>

Both recorded-outcome probabilities equal $\\operatorname{logistic}(b)$.

</details>

<details>
<summary>Hint 2</summary>

The likelihood approaches one as $b$ increases but remains below one at every finite value.

</details>

<details>
<summary>Solution</summary>

With intercept zero, scores are $-b$ at the zero and $b$ at the one, so both correct-outcome probabilities are $1/(1+e^{-b})$. Their product is strictly below one for finite $b$ and tends to one as $b\\to\\infty$. No finite coefficient attains the supremum; treating a huge iterative estimate as a well-behaved finite optimum is unjustified.

</details>

## R-LOGIT-E10

**Exercise 15.10**

The deterministic evaluation split has a different class prevalence from a deployment stream. What can its accuracy establish, and what must be checked before deployment?

<details>
<summary>Hint 1</summary>

Accuracy averages two class-conditional correctness probabilities using the dataset's class weights.

</details>

<details>
<summary>Hint 2</summary>

Distinguish the frozen evaluation records from an unspecified future collection mechanism.

</details>

<details>
<summary>Solution</summary>

The table gives finite descriptive accuracy on the reserved records. Under a suitable sampling model it can estimate performance for that collection mechanism, but a different deployment prevalence changes the weighting of class-conditional errors. Changes in imaging or specimens can also change those errors themselves. Preserve class-specific counts, validate label meaning and transport assumptions, and assess calibration and decision costs in a relevant independent evaluation rather than transfer one accuracy number automatically.

</details>



## Sources

Lohweg's [UCI dataset record](https://archive.ics.uci.edu/dataset/267/banknote+authentication), DOI 10.24432/C55P57, is the primary provenance and CC BY 4.0 licence source. Our [frozen CSV](/data/statistics-with-r/banknote-authentication.csv) preserves the source measurements and class coding, adding the declared column headings. Original prose and exercises here are licensed as stated in the front matter.

Official R Core documentation supports [GLM fitting](https://search.r-project.org/R/refmans/stats/html/glm.html), [binomial families](https://search.r-project.org/R/refmans/stats/html/family.html), [GLM prediction scales](https://search.r-project.org/R/refmans/stats/html/predict.glm.html), and [logistic transformations](https://search.r-project.org/R/refmans/stats/html/Logistic.html). The odds-ratio identity and separation example are proved algebraically here. The conventional large-sample inference mentioned above is explicitly an approximation; this chapter does not claim a no-calculus proof of its asymptotic validity.

## Summary

Logistic regression models a zero-one event through a linear log-odds score and an inverse-logit probability. Coefficients describe odds multipliers at fixed included predictors, while likelihood fitting, probability prediction and threshold decisions are separate operations. Preserve source labels and collection limits, check existence and convergence, and evaluate a frozen rule on data that did not select it. A high reported accuracy does not replace calibration, error-cost choices or a defensible evaluation design.
`;export{e as default};