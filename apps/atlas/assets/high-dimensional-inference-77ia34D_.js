var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: high-dimensional-inference
title: "High-dimensional Inference"
level: graduate
license: CC BY-SA 4.0
---

# High-dimensional Inference

Preparation is lasso optimality, sparse vector norms, Gaussian tails and Fano. The main regression theorem conditions on a fixed normalised design and known noise scale; the normal-means lower-bound experiment is separately declared.

## Prediction, selection and inference are different targets

When the number of candidate coefficients is large, a good prediction rule need not identify the nonzero coefficients or justify ordinary confidence intervals after selection. This chapter proves a deterministic lasso error bound, an explicitly conditional debiasing theorem and a normal-means information lower bound.

Preparation is [regularisation](../regression-and-generalised-linear-models/selection-and-regularisation.md), Gaussian tail bounds, matrix norms and [Fano’s inequality](../information-theory/information-statistics.md). Learning-theory risk bounds and high-dimensional coefficient inference overlap in tools but ask different operational questions.

The main regression experiment has fixed design $X$ and
$$
Y=X\\beta+\\varepsilon,\\qquad\\varepsilon\\sim N(0,\\sigma^2I_n),
$$
with known $\\sigma>0$ and possibly more columns than rows. Assume each column has squared norm at most $n$. Design randomness can be handled conditionally only if the stated conditional noise model holds.

## A noise event with a finite probability guarantee

Use lasso objective
$$
\\frac1{2n}\\|Y-Xb\\|^2+\\lambda\\|b\\|_1.
$$
Every coordinate of $X^T\\varepsilon/n$ is centred Gaussian with variance at most $\\sigma^2/n$. Gaussian tails and a union bound show that
$$
\\lambda=2\\sigma\\sqrt{\\frac{2\\log(2p/\\alpha_0)}n}
$$
makes the event $\\|X^T\\varepsilon/n\\|_\\infty\\le\\lambda/2$ have probability at least $1-\\alpha_0$.

Natural logarithms appear in that tail expression. No independence among the coordinate scores is needed for the union bound. Their dependence is determined by the design.

This event is the probabilistic ingredient. The next bounds hold deterministically whenever it occurs, separating stochastic noise control from geometric design assumptions.

## A compatibility condition and oracle inequalities

Let the true support be $S$ of size $s\\ge1$, and let $\\delta=\\widehat\\beta-\\beta$. Optimality of the lasso against the true coefficient vector gives
$$
\\frac12\\|X\\delta\\|_n^2
\\le\\varepsilon^TX\\delta/n+
\\lambda(\\|\\beta\\|_1-\\|\\beta+\\delta\\|_1),
$$
where $\\|z\\|_n^2=\\|z\\|^2/n$.

On the noise event, the score term is at most $\\lambda\\|\\delta\\|_1/2$. Splitting the penalty over support and complement yields
$$
\\|X\\delta\\|_n^2+\\lambda\\|\\delta_{S^c}\\|_1
\\le3\\lambda\\|\\delta_S\\|_1.
$$
In particular $\\|\\delta_{S^c}\\|_1\\le3\\|\\delta_S\\|_1$.

Assume a positive compatibility constant $\\kappa$ such that every vector in that cone satisfies
$$
\\|Xv\\|_n^2\\ge\\frac{\\kappa^2}{s}\\|v_S\\|_1^2.
$$
Then, writing $Q=\\|X\\delta\\|_n$, the basic inequality gives $Q^2\\le3\\lambda\\sqrt{s}Q/\\kappa$. Hence
$$
\\|X\\delta\\|_n^2\\le\\frac{9s\\lambda^2}{\\kappa^2},
\\qquad
\\|\\delta\\|_1\\le\\frac{12s\\lambda}{\\kappa^2}.
$$
The latter follows from the cone bound and compatibility. If $Q=0$, compatibility and the cone force $\\delta=0$, so no division by zero is needed.

These are prediction and coefficient-error inequalities. They do not establish exact support recovery, signs, unbiased coefficients or a Gaussian distribution for the lasso itself.

## Why restricted geometry is necessary

With more columns than rows, the full normal matrix is singular. The compatibility assumption nevertheless can hold on the particular sparse-error cone; it does not assert an impossible globally positive smallest eigenvalue.

It also cannot be omitted. If two design columns are identical, a coefficient on one and the same coefficient on the other generate exactly the same observation law. No estimator can uniformly distinguish those two labelled supports from the data.

Near-collinearity produces a quantitative version of that problem. A small compatibility constant inflates the error bound because the design changes little along some allowed sparse direction. A large sample size alone does not repair exact nonidentifiability.

The support in the theorem is a property of the true parameter. In an application, treating an optimistic guessed support and compatibility constant as known can make the bound meaningless. A mathematical statement conditional on those quantities is not a claim they have been established from a plotted fit.

## Debiasing one coordinate

For coordinate $j$, choose $w_j\\in\\mathbb R^n$ depending on the design but not on response noise, and define
$$
\\widetilde\\beta_j=\\widehat\\beta_j+
\\frac1n w_j^T(Y-X\\widehat\\beta).
$$
Algebra gives the exact decomposition
$$
\\widetilde\\beta_j-\\beta_j
=\\frac1n w_j^T\\varepsilon+
\\left(e_j^T-\\frac1n w_j^TX\\right)\\delta.
$$
Put $\\eta_j=\\|e_j-X^Tw_j/n\\|_\\infty$. The remainder is bounded by $\\eta_j\\|\\delta\\|_1$.

The leading term is exactly Gaussian conditional on the fixed design, with variance $\\sigma^2\\|w_j\\|^2/n^2$. If the bounded remainder divided by that standard deviation tends to zero in probability, Slutsky gives an asymptotically standard normal studentised error.

This is a conditional theorem with a visible remainder condition. It does not assert that an appropriate approximate inverse vector always exists, or that every sparse estimator automatically supplies one.

A common sufficient regime has $\\eta_j$ of order the square root of log dimension divided by sample size, lasso penalty on the same scale, a compatibility constant bounded away from zero, and $\\|w_j\\|/\\sqrt n$ bounded above and away from zero. The remainder then requires
$$
s\\log p=o(\\sqrt n).
$$
This inference condition can be stricter than what is sufficient merely for prediction consistency.

## Identical columns defeat approximate inversion too

If columns $j$ and $\\ell$ are identical, the corresponding components of $X^Tw_j/n$ are equal for every possible vector $w_j$. They cannot simultaneously approximate one in coordinate $j$ and zero in coordinate $\\ell$ with maximum error below one-half.

Thus the approximate-inverse discrepancy is bounded below by one-half. The desired shrinking remainder is not produced simply by increasing numerical solver accuracy. The model lacks the information needed to distinguish those coordinates.

This example connects the algebraic correction step to identification. Debiasing subtracts an estimable first-order penalty effect; it cannot manufacture a coefficient label that two identical likelihoods do not distinguish.

## A simultaneous interval statement with an explicit error budget

Pointwise normal limits do not automatically give simultaneous coverage as dimension grows. A finite-sample conservative statement can instead retain the deterministic remainder bound.

Suppose valid known bounds on sparsity and compatibility make the lasso norm bound applicable. For every coordinate of interest, let its remainder allowance be the approximate-inverse discrepancy times that norm bound, and let its standard error be the exact Gaussian leading-term value.

Use interval half-width equal to the remainder allowance plus that standard error times the normal quantile for a Bonferroni allocation of a second failure budget. A Gaussian union bound controls all leading terms at once, without requiring their independence. The lasso noise event controls all remainders simultaneously.

Therefore total failure probability is at most the sum of the two allocated budgets. This is a proved statement under the declared design, known noise scale and valid geometric/sparsity bounds. It can be wide and need not be a practical default when those bounds are unavailable.

Dropping the remainder allowance needs uniform, not merely coordinatewise, negligible-remainder control. Estimating noise scale also needs a consistent estimator with its own assumptions. Ordinary residual degrees of freedom are unavailable when the fitted design dimension reaches or exceeds sample size.

## An information lower bound for sparse identification

Now declare a separate normal-means benchmark: observe $p$ independent coordinates with means $\\theta_j$ and variance $\\sigma^2/n$. Consider $p$ alternatives, each placing signal amplitude $a$ in exactly one different coordinate. Give those alternatives a uniform label.

Relative to the all-zero reference law, each alternative has bit divergence
$$
\\frac{na^2}{2\\sigma^2\\ln2}.
$$
This follows by expanding the equal-variance Gaussian log likelihood ratio and taking expectation.

Fano and the common-reference bound therefore give label error at least
$$
1-\\frac{na^2/(2\\sigma^2\\ln2)+1}{\\log_2p}.
$$
If squared amplitude is a sufficiently small constant times $\\sigma^2\\log p/n$, that error stays bounded away from zero for large dimension. Uniform support identification below that scale is impossible in this benchmark.

The alternatives are separated in Euclidean norm. If an estimator were within $a/2$ of the true vector, choosing the nearest alternative would identify the label correctly. Its worst-case squared estimation loss is therefore at least $a^2/4$ times the positive testing-error lower bound.

This proves an order-of-magnitude obstruction through an explicit finite family. The normal-means experiment is not silently identified with every fixed regression design, especially when an orthogonal design of that dimension is impossible. It is a benchmark illustrating the multiple-comparison cost of discovering a sparse signal.

## Selection followed by ordinary regression

Refitting ordinary least squares on selected variables changes the estimator but does not erase the selection event. Using the same responses for both steps can invalidate an unadjusted fixed-model reference distribution.

Independent splitting can separate selection from evaluation. Conditional on the training split, the selected set is fixed for the held-out fit. Exact classical inference there still needs full rank, enough held-out observations and a correctly specified conditional mean/error model.

If the selected set omits relevant variables, the held-out fit can estimate a projection target rather than the original full-model coefficient. Independence removes data reuse; it does not remove omitted-variable bias or establish the desired scientific target.

Selective inference, debiasing and sample splitting therefore address related but distinct questions. Each needs its own conditioning event, approximation remainder or independent experiment. Calling all of them “post-selection correction” does not make their assumptions interchangeable.

## What the high-dimensional guarantee records

A useful report states the loss scaling, penalty, column normalisation, noise assumptions, sparse class, design condition and target coordinate or simultaneous family. It distinguishes a prediction bound, a support claim and a confidence statement.

The proofs here establish those distinctions through exact inequalities and decompositions. They do not claim that a fitted coefficient is scientifically causal, that sparsity is known, or that an asymptotic normal approximation has been demonstrated for a particular dataset.

## Worked example 18.1: Orthogonal design as a reference case

If $X^TX/n=I$ in a dimension where that is possible, take $w_j=X_j$. The approximate-inverse discrepancy is zero, so the debiased estimate equals the ordinary least-squares coordinate and its Gaussian variance is $\\sigma^2/n$ exactly. Lasso shrinkage has been removed algebraically. This reference case cannot exist with more mutually orthogonal nonzero columns than rows.

## Worked example 18.2: Two identical columns

Let $X_1=X_2$ and compare true coefficients $(a,0)$ and $(0,a)$ with all other entries equal. Their mean responses and noise laws coincide. No procedure can uniformly identify which label carried the signal. For any proposed $w_1$, its first two normalised inner products with the design are equal, so their maximum discrepancy from $(1,0)$ is at least one-half. The failure is statistical identification, not insufficient optimisation iterations.

## Worked example 18.3: Prediction can be easier than inference

Suppose compatibility stays bounded and penalty has order $\\sigma\\sqrt{\\log p/n}$. The prediction bound has order $s\\sigma^2\\log p/n$, which can vanish when $s\\log p=o(n)$. The typical debiasing remainder condition instead asks $s\\log p=o(\\sqrt n)$. A sequence between those two growth scales can have a useful vanishing prediction guarantee without satisfying this coordinate-normality theorem. The comparison concerns sufficient conditions, not a proof that inference is impossible in every intermediate regime.

## Approximate sparsity has a separate tail cost

Exact zero coefficients are not necessary for a useful prediction statement. Choose any index set of size $s$, and call the absolute sum of the true coefficients outside it the approximation tail. The same lasso basic inequality, now retaining that tail, gives
$$
Q^2+\\lambda\\|\\delta_{S^c}\\|_1
\\le3\\lambda\\|\\delta_S\\|_1+4\\lambda\\|\\beta_{S^c}\\|_1.
$$
The extra term follows from applying the triangle inequality to the true coefficients outside the chosen set rather than pretending they vanish.

There are two cases. If squared prediction error is no greater than eight times penalty times approximation tail, the tail already supplies the desired bound. Otherwise that tail contribution is less than half the prediction error. Move it to the left in the displayed inequality.

The remaining inequality puts the error in the same compatibility cone. Applying compatibility now bounds the prediction norm by six times penalty times square root of set size divided by the compatibility constant. Consequently a valid combined bound is
$$
Q^2\\le
8\\lambda\\|\\beta_{S^c}\\|_1+
\\frac{36s\\lambda^2}{\\kappa^2}.
$$
This is an explicit approximation-estimation tradeoff: selecting a larger set can reduce the coefficient tail while increasing the stochastic-complexity term.

For example, suppose sorted coefficient magnitudes are bounded by a constant times rank to power minus the reciprocal of some exponent strictly between zero and one. Comparing the tail sum with an integral bounds it by a constant times set size to power one minus that reciprocal.

If compatibility remains uniformly positive for the relevant sets, balancing the two terms chooses set size of order the penalty to minus that exponent. The resulting prediction rate has penalty power two minus the exponent, up to the class constants and integer limits. The conclusion needs those uniform design and coefficient-envelope assumptions; a visually decaying coefficient plot is not their proof.

This prediction result does not extend the earlier debiased confidence theorem automatically. Its coefficient remainder also needs control of the approximation tail on the standard-error scale. Approximate sparsity can be adequate for prediction while leaving too much first-order bias for a selected coefficient interval.

The derivation shows why sparsity must be stated quantitatively. A binary claim that “most variables do not matter” can hide a large accumulated tail. An oracle inequality records that tail explicitly instead of treating small coefficients as exactly zero without cost.

## Orthogonal designs make the correction exact

Suppose the fixed design has orthonormal columns on the sample scale, meaning its cross-product divided by n is the identity. For coordinate j, choose the correction vector to be the jth design column. The approximate-inverse discrepancy is then exactly zero. Substituting in the debiasing formula cancels the entire fitted coefficient contribution and leaves the ordinary least-squares coordinate, regardless of which preliminary coefficient vector was used.

Under the Gaussian noise model this corrected coordinate is exactly normal with mean the true coefficient and variance sigma squared divided by n. The preliminary estimator's shrinkage and selection no longer affect that coordinate's distribution because the correction identity is algebraic. This is a useful calibration case for the general remainder argument, but it is not a high-dimensional design with more columns than rows: mutually orthogonal nonzero columns require dimension at most sample size. When columns are correlated, or when a response-dependent correction vector is chosen, the same exact Gaussian conclusion no longer follows from this calculation. The fixed-design and noise-independence restrictions remain part of the inference statement.

## Exercises

### Exercise 18.1
<a id="high-dimensional-inference-ex-1"></a>

Derive the lasso cone inequality from the basic inequality.

<details>
<summary>Hint 1</summary>

Bound the noise score by its maximum coordinate.

</details>
<details>
<summary>Hint 2</summary>

Separate support and complement in the penalty difference.

</details>
<details>
<summary>Solution</summary>

The score is at most $\\lambda\\|\\delta\\|_1/2$. The penalty difference is at most $\\|\\delta_S\\|_1-\\|\\delta_{S^c}\\|_1$. Multiplying the resulting inequality by two gives prediction norm squared plus $\\lambda\\|\\delta_{S^c}\\|_1$ at most $3\\lambda\\|\\delta_S\\|_1$, hence the cone.

</details>

### Exercise 18.2
<a id="high-dimensional-inference-ex-2"></a>

Prove the prediction upper bound under compatibility.

<details>
<summary>Hint 1</summary>

Replace support norm by prediction norm times $\\sqrt s/\\kappa$.

</details>
<details>
<summary>Hint 2</summary>

Handle the zero prediction norm separately.

</details>
<details>
<summary>Solution</summary>

The basic bound gives $Q^2\\le3\\lambda\\sqrt s\\,Q/\\kappa$. For positive $Q$, divide and square to obtain $Q^2\\le9s\\lambda^2/\\kappa^2$. If $Q=0$, the conclusion is immediate and compatibility plus the cone also forces zero coefficient error.

</details>

### Exercise 18.3
<a id="high-dimensional-inference-ex-3"></a>

Derive the coefficient norm bound.

<details>
<summary>Hint 1</summary>

The cone gives total norm at most four support norms.

</details>
<details>
<summary>Hint 2</summary>

Use compatibility and the prediction bound.

</details>
<details>
<summary>Solution</summary>

$\\|\\delta\\|_1\\le4\\|\\delta_S\\|_1\\le4\\sqrt s\\,Q/\\kappa\\le12s\\lambda/\\kappa^2$. The bound controls magnitude, not exact zero patterns or coefficient signs.

</details>

### Exercise 18.4
<a id="high-dimensional-inference-ex-4"></a>

Why can compatibility hold with a singular full normal matrix?

<details>
<summary>Hint 1</summary>

It is restricted to a particular cone.

</details>
<details>
<summary>Hint 2</summary>

Global null directions need not lie there.

</details>
<details>
<summary>Solution</summary>

The assumption only lower-bounds prediction norm relative to supported coefficient norm for cone-constrained errors. It does not require positive curvature in every ambient direction. A globally singular design can still be sufficiently curved on that restricted set.

</details>

### Exercise 18.5
<a id="high-dimensional-inference-ex-5"></a>

Prove the exact debiasing decomposition.

<details>
<summary>Hint 1</summary>

Substitute the linear model into the correction.

</details>
<details>
<summary>Hint 2</summary>

Collect the coefficient error terms.

</details>
<details>
<summary>Solution</summary>

The residual is $\\varepsilon-X\\delta$. Adding its weighted correction to $\\widehat\\beta_j-\\beta_j=\\delta_j$ gives $w_j^T\\varepsilon/n+(e_j^T-w_j^TX/n)\\delta$. No approximation has been used.

</details>

### Exercise 18.6
<a id="high-dimensional-inference-ex-6"></a>

Why must $w_j$ avoid response-noise dependence in the exact Gaussian leading term?

<details>
<summary>Hint 1</summary>

A random noise-dependent linear functional is not automatically Gaussian conditional on the design.

</details>
<details>
<summary>Hint 2</summary>

Identify what is held fixed.

</details>
<details>
<summary>Solution</summary>

The normal distribution calculation treats the vector as fixed given design. If it is selected using the same noise, its conditional distribution and selection event can change the leading law. An independent fitting scheme or another theorem would be needed.

</details>

### Exercise 18.7
<a id="high-dimensional-inference-ex-7"></a>

Explain why marginal normal limits do not prove growing-family coverage.

<details>
<summary>Hint 1</summary>

Small errors can accumulate across coordinates.

</details>
<details>
<summary>Hint 2</summary>

Uniform remainder and tail control are needed.

</details>
<details>
<summary>Solution</summary>

A separate approximation for each fixed coordinate gives no bound on the maximum across an increasing family. The finite-budget argument controls all Gaussian terms by a union bound and all remainders by one common noise event. Removing its allowances requires a uniform result.

</details>

### Exercise 18.8
<a id="high-dimensional-inference-ex-8"></a>

Compute the reference divergence in the sparse normal-means family.

<details>
<summary>Hint 1</summary>

Only one coordinate mean changes.

</details>
<details>
<summary>Hint 2</summary>

Use equal-variance Gaussian KL.

</details>
<details>
<summary>Solution</summary>

Natural-log divergence is $a^2/(2\\sigma^2/n)=na^2/(2\\sigma^2)$. Dividing by $\\ln2$ gives the bit value used by Fano. Other coordinates have identical laws and add zero.

</details>

### Exercise 18.9
<a id="high-dimensional-inference-ex-9"></a>

Why does sample splitting not cure omitted-variable bias?

<details>
<summary>Hint 1</summary>

It changes independence of selection and evaluation.

</details>
<details>
<summary>Hint 2</summary>

It does not change the conditional mean represented by selected columns.

</details>
<details>
<summary>Solution</summary>

A held-out model can be treated as fixed, but if its columns omit relevant mean structure, its coefficient target can differ from the original full-model parameter. Correct uncertainty for the selected projection does not identify the omitted scientific coefficient.

</details>

### Exercise 18.10
<a id="high-dimensional-inference-ex-10"></a>

Does a prediction bound establish support recovery?

<details>
<summary>Hint 1</summary>

Prediction can be nearly unchanged along correlated directions.

</details>
<details>
<summary>Hint 2</summary>

Support is a labelled discrete property.

</details>
<details>
<summary>Solution</summary>

No. Different coefficient vectors can yield identical or very close fitted means, as identical columns show. Prediction loss can be small even when the selected labels are wrong. Support recovery needs additional identifiability and signal-size assumptions.

</details>

## Summary

A Gaussian noise event and compatibility yield deterministic lasso bounds. Exact debiasing separates a Gaussian term from a controlled remainder, and simultaneous intervals retain an explicit error budget. A separate sparse normal-means Fano construction proves a multiple-comparison lower scale, while selection and target identification remain distinct.
`;export{e as default};