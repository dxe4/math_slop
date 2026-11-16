var e=`---
parent_id: book-statistical-learning-generalization
chapter_id: regularization-and-model-selection
title: "Regularization and Model Selection"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Regularization and Model Selection

The preceding chapters developed bounds on estimation error. This chapter turns to the practical question of controlling that error. Regularization adds inductive bias to reduce complexity. Model selection chooses among competing procedures. Both require careful validation, and both are vulnerable to subtle errors of design and interpretation.

## Penalized empirical risk

Penalized empirical risk minimization solves

$$\\min_{h \\in H} \\hat{R}_{S}(h) + \\lambda \\Omega(h),$$

where $\\Omega(h)$ is a regularizer and $\\lambda \\ge 0$ is a hyperparameter. Common choices include $\\ell_{2}$ regularization ($\\Omega(h) = \\|w\\|_{2}^{2}$ for linear models), $\\ell_{1}$ regularization ($\\Omega(h) = \\|w\\|_{1}$), and structured penalties such as group lasso or nuclear norms.

Constrained fitting solves

$$\\min_{h \\in H} \\hat{R}_{S}(h) \\quad \\text{subject to} \\quad \\Omega(h) \\le t.$$

Suppose the loss and penalty are proper convex functions, the relevant optima are attained, and a constraint qualification supplies a Lagrange multiplier. Then a constrained optimum at a feasible radius $t$ also minimizes a penalized objective for some multiplier $\\lambda\\ge0$. Conversely, a penalized minimizer $h_\\lambda$ minimizes empirical risk among predictors with $\\Omega(h)\\le\\Omega(h_\\lambda)$. This relates selected solutions; it need not identify the full optimizer sets or give a one-to-one map between $t$ and $\\lambda$. Infeasible radii, failure of attainment or qualification, and nonconvex problems require separate analysis.

## The bias–variance tradeoff in regularization

Larger penalty coefficients favor smaller penalty values under exact minimization, as proved below. Their effect on population risk is not universally monotone; a variance or approximation interpretation requires a stated statistical model. This is the same tradeoff seen in "Approximation, Estimation, and Optimization," now parameterized by $\\lambda$. The optimal $\\lambda$ depends on the unknown distribution $P$, so it must be estimated from data.

## Cross-validation

Cross-validation estimates the performance of a **procedure**: preprocessing, fitting, hyperparameter grid, and selection rule. The basic $k$-fold cross-validation algorithm is:

1. Split the data into $k$ folds of approximately equal size.
2. For each fold $i$, train the procedure on all folds except $i$ and evaluate on fold $i$.
3. Average the $k$ evaluation scores.

Every fitted transform belongs inside each training fold. If feature selection or scaling is performed, it must be re-fit within each training fold, not pre-computed on the full dataset. Using full-data fitted transforms changes the assessment procedure and can produce optimistic estimates. The exact effect depends on the transform and deployment experiment; it is not a universal signed-bias theorem.

## Nested cross-validation

Nested cross-validation is needed when the outer performance estimate must include inner hyperparameter selection. The outer loop estimates generalization; the inner loop selects hyperparameters. Using the same folds for both tasks produces selection bias: the hyperparameter chosen to maximize validation performance on a given fold is optimistically biased for that fold.

## Domain-specific validation splits

For time-ordered deployment, use forward or rolling splits: train on past data, validate on future data. Random folds assume exchangeability, which time series violate. For clustered data (e.g., multiple patients per hospital), split clusters: train on some hospitals, validate on others. Row splitting shares cluster-specific conditions across folds and estimates interpolation to more units in known clusters, not transfer to unseen clusters. For geographic transfer, hold out regions.

"Five-fold cross-validation" is not a design until the exchangeability unit is declared.

## Multiple comparisons and selection bias

Trying thousands of feature sets, seeds, and architectures and reporting the best validation result induces selection bias. The effective search and its adaptivity matter. Preserve an untouched assessment set, or use a method whose guarantee explicitly covers adaptive reuse. Bonferroni or false-discovery-rate correction can control a prespecified family of tests under their own assumptions; applying either after an undocumented adaptive search does not restore a valid performance estimate.

## Common errors

- **Data leakage.** Preprocessing on the full dataset before cross-validation leaks validation information into training.
- **Ignoring the procedure.** Cross-validation must include every step that uses data: imputation, feature selection, transformation, and model fitting.
- **Using random splits for time series or clusters.** Exchangeability assumptions must match the deployment setting.
- **Reporting the best of many trials without correction.** This is a multiple-comparisons problem.

## Worked example: nested cross-validation for ridge regression

Consider ridge regression with $\\lambda \\in \\{0.001, 0.01, 0.1, 1, 10\\}$. Outer $5$-fold cross-validation estimates generalization. Within each outer training set, inner $5$-fold cross-validation selects $\\lambda$. The selected $\\lambda$ varies across outer folds; the outer estimate averages performance across folds, each using its own selected $\\lambda$. The outer held-out predictions assess the entire inner-selection procedure trained on an outer training set. That estimate targets the smaller training size and chosen split design; it is not automatically an unbiased estimate of the risk of the final model refit on all observations.

Selecting lambda once using all observations before the outer loop lets outer outcomes influence the selected procedure. The outer predictions then lack the independent held-out interpretation just described. A universal bias magnitude or direction does not follow without specifying the complete experiment.

## Penalized fits have two deterministic monotonicities

Let two positive penalty coefficients satisfy lambda one less than lambda two, and choose exact minimizers h one and h two of the corresponding empirical objectives. Assume both objective values are finite. Write the minimizing inequality once for each fit against the other and add them. The empirical risks cancel, leaving
$$(\\lambda_2-\\lambda_1)\\{\\Omega(h_2)-\\Omega(h_1)\\}\\le0.$$
Thus the selected penalty value cannot increase. Return to either minimizing inequality to see that the selected empirical risk cannot decrease. These statements hold for any chosen minimizers, even when coefficient minimizers are not unique.

No population risk occurs in this proof. It therefore establishes neither universal improvement nor universal deterioration in future performance. With approximate minimizers, the two gap allowances enter the summed inequality; exact monotonicity can fail. The common empirical sample and penalty definition must also be the same. Changing missing-data exclusions or preprocessing between penalty settings is another comparison.

The converse from penalized to constrained fitting requires even less. A penalized minimizer cannot have higher empirical risk than a competitor with no larger penalty, since that would also worsen its penalized objective. The constrained-to-penalized direction needs the multiplier existence conditions stated earlier; this elementary converse does not prove strong duality for every nonconvex problem.

### Worked example: the population best penalty need not be an endpoint

Suppose one observed binary response equals one and fit a constant real prediction with squared loss plus lambda times squared prediction. Completing the square gives fitted value one divided by one plus lambda. Its penalty decreases and training squared error increases with lambda, exactly as the deterministic theorem says.

Now take the population label-one probability to be one quarter, a law under which the observed response is possible. Population squared risk equals three sixteenths plus the squared distance from prediction to one quarter. It is minimized along this fitted path at lambda three. It decreases before that value and increases afterward. This explicit same-law example shows that the two monotonic training quantities do not determine a monotone population-risk ordering.

## Structural risk minimization with a complete union argument

Let a countable sequence of finite nonempty classes be fixed before the sample, with class sizes M j. Assign positive weights pi j whose sum is at most one. For unit-range loss and iid observations, use the finite-class theorem in class j with failure budget delta times pi j. A countable union bound gives, simultaneously over classes and their members,
$$|R(h)-\\widehat R(h)|\\le
r_j=\\sqrt{\\frac{\\log(2M_j/(\\delta\\pi_j))}{2n}},
\\qquad h\\in H_j.$$
Overlap between classes causes no problem; it can make the union bound conservative.

Choose a pair consisting of a class index and predictor whose empirical risk plus r j is within eta of the infimum over all such pairs. On the simultaneous event, its population risk is at most its penalized empirical criterion. Approximate minimization compares that criterion with every candidate. Replacing each candidate empirical risk by population risk plus its radius proves
$$R(\\widehat h)\\le\\inf_j\\inf_{h\\in H_j}\\{R(h)+2r_j\\}+\\eta.$$
Existence and measurability of the selected pair must be supplied; countability with a fixed near-minimizer enumeration is one route. The displayed complexity penalty is a probability allocation, not an arbitrary claim that any regularizer has this guarantee.

The theorem lets data select a class because one fixed event covered the entire prespecified collection. If feature engineering adds classes after examining the same labels without including that search, the event need not cover them. Large nominal class sizes can also yield vacuous radii. A mathematically valid oracle comparison is not automatically a sharp practical certificate.

## What fixed-fold cross-validation estimates in expectation

Fix a deterministic algorithm A, including every preprocessing and tuning step, and divide iid observations into equal folds independently of their values. For a row in a held-out fold, the corresponding training sample excludes that entire fold, so it is independent of the row and has the ordinary iid training law at the smaller size. Conditional on that training sample, expected held-out loss equals population risk of its fitted rule. Averaging over rows and training proves
$$E\\,{\\rm CV}=E\\,R(A(S_m)),\\qquad m=n-n/k.$$
This is an exact expectation identity when the losses are integrable. It does not assert that CV estimates the conditional risk of the particular full-data fit, and it does not make the fold errors independent.

If A contains an inner selection step using only its training input, the same identity applies to that complete procedure. If the selected hyperparameter was computed using outer outcomes in advance, the independence used by the argument is absent. For unequal folds, the identity becomes a weighted average of risks at their respective training sizes. A single label such as five-fold does not erase these distinctions.

### Worked example: a training-size difference can be computed

Consider iid real outcomes of mean mu and finite variance sigma squared. Predict by the training mean and assess squared error. A fresh outcome is independent of the training mean, so its expected squared loss is sigma squared plus sigma squared divided by training size. Equal-fold CV therefore has expectation sigma squared times one plus one over m, whereas the analogous full-size procedure has expected risk sigma squared times one plus one over n.

Here the CV expectation is larger because m is smaller. This is a model-specific calculation, not a general theorem that CV always has positive bias. It also uses only integrability for an expectation identity; unbounded squared loss is outside the bounded-loss concentration result in the next section.

## Concentrating CV when the algorithm is stable

Retain fixed equal folds, assume loss lies between zero and M and assume A at training size m has uniform replacement stability beta m. Replace one original observation. In its own held-out fold the fitted predictor does not use it, so only its one evaluation term can change, by at most M divided by n. In every other fold it is a training point; all those held-out losses can change by at most beta m each. They account for m of the n rows.

Thus CV as a function of the independent original observations has coordinate sensitivity at most
$$c=M/n+(m/n)\\beta_m.$$
The bounded-differences theorem then bounds its two-sided fluctuation around its expectation by c times the square root of n log two over delta divided by two. If beta m is at most C divided by m, this is at most M plus C times the usual inverse-square-root-n confidence radius. Dependence among the fitted fold predictors is already handled through the function sensitivity; the proof never treats the folds as independent replicates.

This theorem needs stability of the entire algorithm at the stated training size. It does not justify an independent-fold standard error or a generic confidence interval for every cross-validation search. A selected procedure with discontinuous tuning can fail the stability premise even if each fixed tuning value has a separate guarantee.

## Assessment, tuning and final refitting

An independent assessment of a fixed trained candidate list has the conditional finite-class selection guarantee proved earlier. Nested folds offer another way to represent a complete selection procedure at smaller training size. Final refitting can use all available training observations, but its risk is another random quantity. Neither an outer average nor the best inner score becomes its exact conditional risk merely because the same hyperparameter name appears.

The reported object should therefore name the training-size target, independent sampling unit, candidate search and transformations. For temporal or cluster deployment the iid identity must be replaced by a statement matching those observations. Such changes are statistical assumptions, not adjustments accomplished by switching a software fold-count option.

## Practice exercises

<a id="regularization-and-model-selection-legacy-1"></a>

### Exercise 1

A researcher standardizes features to zero mean and unit variance using the full dataset, then runs $10$-fold cross-validation on the standardized data. Explain the leakage and how to fix it.

<details><summary>Hint 1</summary>

Identify which observations contributed to the fitted transformation.

</details>

<details><summary>Hint 2</summary>

Fit every learned transformation inside its training fold.

</details>

<details><summary>Full solution</summary>

The standardization statistics (mean and variance) are computed using the validation folds, so information from the validation set leaks into the training procedure. The fix is to compute mean and variance within each training fold only, then apply those statistics to the corresponding validation fold.

</details>

<a id="regularization-and-model-selection-legacy-2"></a>

### Exercise 2

Explain why nested cross-validation is needed when reporting a final performance estimate for a model whose hyperparameters were chosen by cross-validation.

<details><summary>Hint 1</summary>

The outer assessment must include the inner selection procedure.

</details>

<details><summary>Hint 2</summary>

The training size of that assessed procedure is still the outer training size.

</details>

<details><summary>Full solution</summary>

Reusing one cross-validation score both to select a hyperparameter and to report its performance makes the reported score optimistic. Nested cross-validation separates inner selection from outer held-out evaluation, so the outer predictions assess the complete selection procedure. They target a procedure trained at the outer-loop training size; they do not by themselves give an unbiased risk estimate for the model later refit on the full dataset.

</details>

<a id="regularization-and-model-selection-legacy-3"></a>

### Exercise 3

A study has $100$ patients from $10$ hospitals, with $10$ patients per hospital. The goal is to predict outcomes for patients at new hospitals. Should the researcher use random $5$-fold cross-validation? If not, what should they use?

<details><summary>Hint 1</summary>

The deployment unit is a new hospital.

</details>

<details><summary>Hint 2</summary>

Hold out entire hospitals rather than members of every hospital.

</details>

<details><summary>Full solution</summary>

Random folds would place patients from the same hospital in both training and validation sets, estimating interpolation within known hospitals rather than transfer to new hospitals. The researcher should use cluster-based cross-validation: split by hospital, training on $8$ hospitals and validating on $2$ hospitals in each fold.

</details>

<a id="regularization-and-model-selection-ex-4"></a>

### Exercise 4

Prove the two deterministic penalty-path monotonicities.

<details><summary>Hint 1</summary>

Write each optimality inequality against the other minimizer.

</details>

<details><summary>Hint 2</summary>

Add to remove empirical risk, then substitute the penalty ordering.

</details>

<details><summary>Full solution</summary>

The sum gives $(\\lambda_2-\\lambda_1)(\\Omega_2-\\Omega_1)\\le0$, so $\\Omega_2\\le\\Omega_1$. The first minimizing inequality then gives $\\widehat R_1-\\widehat R_2\\le\\lambda_1(\\Omega_2-\\Omega_1)\\le0$. Thus empirical risk cannot decrease. Population risk was not part of the calculation.

</details>

<a id="regularization-and-model-selection-ex-5"></a>

### Exercise 5

Derive the structural-risk oracle bound.

<details><summary>Hint 1</summary>

Use one simultaneous event for all class-member pairs.

</details>

<details><summary>Hint 2</summary>

The output radius and comparator radius enter separately.

</details>

<details><summary>Full solution</summary>

On the event, $R(\\widehat h)\\le\\widehat R(\\widehat h)+r_{\\widehat j}\\le\\widehat R(h)+r_j+\\eta\\le R(h)+2r_j+\\eta$ for every candidate pair. Taking infima gives the displayed comparison, without assuming a population minimum is attained.

</details>

<a id="regularization-and-model-selection-ex-6"></a>

### Exercise 6

Why is the fixed-fold CV expectation not generally the risk of the full-data fit?

<details><summary>Hint 1</summary>

Each fold trains on fewer observations.

</details>

<details><summary>Hint 2</summary>

Its target is an expected procedure risk, not the realized conditional risk.

</details>

<details><summary>Full solution</summary>

The independence calculation identifies expected risk at training size m. The full-data algorithm is trained at n and can have a different distribution. Even at the same size, unconditional expected risk differs from the conditional risk of one realized fitted predictor. An additional comparison theorem is needed.

</details>

<a id="regularization-and-model-selection-ex-7"></a>

### Exercise 7

Compute the CV expectation difference in the training-mean model.

<details><summary>Hint 1</summary>

Use independence of a fresh outcome and training mean.

</details>

<details><summary>Hint 2</summary>

Subtract the two inverse-training-size terms.

</details>

<details><summary>Full solution</summary>

The risks are $\\sigma^2(1+1/m)$ and $\\sigma^2(1+1/n)$. Their difference is $\\sigma^2(1/m-1/n)>0$ when m is smaller than n and variance is positive. This is specific to the stated mean-prediction experiment.

</details>

<a id="regularization-and-model-selection-ex-8"></a>

### Exercise 8

Derive the CV coordinate sensitivity under replacement stability.

<details><summary>Hint 1</summary>

Separate the changed row’s own held-out fold from the other folds.

</details>

<details><summary>Hint 2</summary>

Only one direct evaluation changes, while m other evaluations have changed fitted rules.

</details>

<details><summary>Full solution</summary>

The direct term is at most M divided by n. In the other folds the replaced row is in training, so m held-out terms change by at most beta m, each weighted one over n. Adding gives $M/n+(m/n)\\beta_m$. The proof includes dependence across folds rather than assuming it away.

</details>

<a id="regularization-and-model-selection-ex-9"></a>

### Exercise 9

Does a fixed-penalty stability theorem automatically apply after selecting the penalty using the same sample?

<details><summary>Hint 1</summary>

Neighboring samples can select different penalties.

</details>

<details><summary>Hint 2</summary>

The full map from sample to output must be analyzed.

</details>

<details><summary>Full solution</summary>

No. The fixed-penalty theorem compares neighboring fits with the same objective and penalty. A tuning rule can change the penalty and cause an additional output jump. Stability or a simultaneous selection argument for the complete procedure is required.

</details>

<a id="regularization-and-model-selection-ex-10"></a>

### Exercise 10

State one condition needed for the constrained-to-penalized implication that the elementary reverse implication does not supply.

<details><summary>Hint 1</summary>

A supporting Lagrange multiplier must exist.

</details>

<details><summary>Hint 2</summary>

Convexity alone without feasibility and attainment is not the whole statement.

</details>

<details><summary>Full solution</summary>

A constraint qualification such as an appropriate strictly feasible point, together with proper convex functions and attained optima, can ensure a nonnegative multiplier. The fact that a penalized minimizer is optimal within its own penalty sublevel set does not prove this multiplier existence for an arbitrary constrained problem.

</details>

## Looking backward and forward

This chapter applied the theoretical tools of "Stability" and "Rademacher Complexity" to practical model selection. The next chapter, "Convex Learning and Stochastic Gradient Descent," makes the optimization term explicit and distinguishes empirical optimization from fresh-observation population learning.
`;export{e as default};