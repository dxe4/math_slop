
# The Learning Problem Is a Tuple

Fitting is an optimization statement about observed data. Learning is a probabilistic statement about performance beyond those data. Before we can prove anything about generalization, we must say exactly what problem we are solving. In statistical learning theory, a supervised learning problem is not a vague request to "find a pattern." It is a precisely defined tuple whose components determine what guarantees are possible and what assumptions are load-bearing.

## The six components

A supervised learning problem specifies:

1. **Input space** $X$ and **outcome space** $Y$.
2. A **target distribution** $P$ on $Z = X \times Y$.
3. A **hypothesis class** $H$ of predictors $h: X \to Y$ (or to a decision space derived from $Y$).
4. A **loss function** $\ell(h, z)$ measuring the cost of predicting with $h$ on instance $z$.
5. A **sample-generating mechanism**, typically an independent and identically distributed (IID) sample $S = (Z_{1}, \dots, Z_{n})$ drawn from $P$.
6. An **algorithm** mapping a sample $S$ to a predictor $h_{S} \in H$.

Each component is material. Changing the loss changes the target predictor. Changing the sampling mechanism changes the valid concentration inequalities. Changing the algorithm changes whether stability-based or uniform-convergence-based bounds apply. A theorem about "the best predictor" is incomplete until all six components are named.

## Population and empirical risk

For a fixed predictor $h$, the **population risk** (or expected risk) is

$$R(h) = \mathbb{E}_{P}[\ell(h, Z)].$$

The **empirical risk** on sample $S$ is

$$\hat{R}_{S}(h) = \frac{1}{n} \sum_{i=1}^{n} \ell(h, Z_{i}).$$

If $S$ is IID from $P$, the strong law of large numbers guarantees that $\hat{R}_{S}(h) \to R(h)$ almost surely for any fixed $h$ with integrable loss. But the predictor returned by a learning algorithm is typically *not* fixed independently of $S$. The algorithm searches $H$ using the same data that define $\hat{R}_{S}$, so $h_{S}$ is a random variable that depends on $S$. Standard pointwise concentration does not automatically cover the selected predictor. Uniform or algorithm-dependent reasoning is required.

## What the loss targets

The target predictor changes with the loss. Under square-integrability, the squared loss

$$\ell(h, z) = (y - h(x))^{2}$$

targets the conditional expectation $\mathbb{E}[Y \mid X = x]$. The absolute loss

$$\ell(h, z) = |y - h(x)|$$

targets any conditional median; when the median is not unique, the minimizer is the set of all conditional medians. The logarithmic loss (log-loss or cross-entropy)

$$\ell(h, z) = -\log h(x)_{y}$$

targets the full conditional distribution $P(Y \mid X = x)$ when the model class can represent it.

This means a statement about "the best predictor" is incomplete without naming its loss and its class. A predictor that is optimal under log-loss may be suboptimal under squared loss, and vice versa. The hypothesis class further constrains what can be represented: even if the true conditional mean is simple, a restricted class may only approximate it.

## The learning tuple in context

Why insist on the tuple? Because every generalization theorem has hypotheses that refer to specific components. Hoeffding's inequality needs bounded loss. VC theory needs a fixed binary hypothesis class. Rademacher complexity needs a real-valued function class. Stability needs an algorithm with a well-defined sensitivity to one training point. If we do not name the components, we cannot check the hypotheses, and we risk applying a theorem outside its domain.

A common error is to treat "training error goes down" as evidence of learning. Training error is an empirical quantity on observed data. Learning requires a probabilistic bridge to future performance. That bridge is built from the tuple: the distribution $P$ gives meaning to "future," the loss $\ell$ gives meaning to "performance," and the algorithm gives meaning to "how the predictor was chosen."

## Common errors

- **Omitting the loss.** A paper claims "our method finds the best predictor" without stating the loss. The claim is mathematically incomplete.
- **Omitting the distribution.** A bound is quoted as $\sqrt{d/n}$ without stating that it requires IID sampling from a fixed $P$.
- **Confusing fitting and learning.** Training convergence is an optimization event. Generalization is a probabilistic event. They are related through the tuple, but one does not imply the other.
- **Ignoring the algorithm.** A uniform-convergence bound covers any empirical risk minimizer drawn from $H$, but a specific algorithm such as gradient descent may have stronger or weaker guarantees depending on its stability properties.

## Worked example: specifying a tuple

Consider predicting house prices from square footage. Let $X = [0, \infty)$ and $Y = [0, \infty)$. Suppose $P$ is the joint distribution of square footage and sale price in a specific metropolitan area during 2023. Let $H$ be the class of affine functions $h(x) = ax + b$ with $a, b \in \mathbb{R}$. Let the loss be squared error $\ell(h, z) = (y - h(x))^{2}$. The sample $S$ consists of $n = 500$ IID pairs $(X_{i}, Y_{i})$ drawn from $P$. The algorithm is ordinary least squares: minimize $\hat{R}_{S}(h)$ over $H$.

The tuple is now complete. We can ask: does the least-squares predictor generalize? Finite-dimensional linear-regression risk bounds require a stated collection of design, noise, moment or tail, and conditioning assumptions; a tail assumption on $Y$ alone does not control an unbounded design or a nearly singular covariance. And if the target distribution changes because interest rates rise, an IID sample from the 2023 distribution no longer justifies a bound for 2024 prices. If we switch to absolute loss, the target changes from the conditional mean to a conditional median, and the optimal affine predictor may differ.

## Measurability and the randomness of a learned rule

We assume all observation and decision spaces carry sigma-fields and every stated loss is measurable. For binary outcomes the conditional probability function below is taken in a standard Borel observation setting, so a measurable version as a function of the input exists. For a finite or countable hypothesis class, enumerate its members once and use the first admissible near-minimizer to break ties. The resulting empirical selector is measurable because each comparison concerns countably many measurable empirical losses. In an arbitrary uncountable class, measurability and existence require additional arguments; writing an argmin symbol does not establish them.

For a randomized algorithm, include an auxiliary random seed U independent of the training observations in its definition. The returned predictor is then a function of both the sample and U. Conditional on those inputs, its population risk refers to a fresh observation with the declared law. Averaging that risk over training samples and algorithmic randomness gives the expected performance of the complete procedure. A theorem holding for every predictor in a simultaneous event can cover the random output without assuming the output is independent of training. A theorem holding for one prespecified predictor cannot be transferred in the same way.

The target distribution is part of the mathematical statement, rather than something inferred uniquely from the file. Training observations can be represented by a probability law with paired, clustered or temporal dependence, but then the iid theorems later in the book need replacement. Even the number of independent observations must be supplied by the sampling model. Repeating each row many times changes file size without adding independent information.

## Proving what three losses target

Assume a real outcome has finite second moment and let m of X be its conditional mean, using the conditional-expectation existence theorem from probability. For any square-integrable predictor h, expand the square about m. The cross term has expectation zero by conditioning on X; its integrability follows from Cauchy–Schwarz. Hence
$$E(Y-h(X))^2=E(Y-m(X))^2+E(m(X)-h(X))^2.$$
The first term cannot be improved by changing h. The second is nonnegative and vanishes precisely when h equals m almost surely under the input law. This proves the conditional-mean target and identifies the sense in which it is unique. It says nothing about uniqueness outside the input support, where predictors can differ without affecting risk.

For absolute loss, assume finite first moment. For any real endpoints a before b, the difference in absolute errors has the identity
$$E|Y-b|-E|Y-a|=\int_a^b\{2F(t)-1\}\,dt.$$
Pointwise in Y, this follows by splitting the interval at Y; its possible endpoint discrepancy occurs at one point and has no effect on the integral. Fubini applies because the integrand is bounded on the finite interval. If a is a median, the distribution function is at least one half above a and at most one half below a except on irrelevant endpoints. Moving in either direction cannot reduce expected absolute error. Conversely, if a is not a median, a sufficiently small movement toward a median integrates a strictly favorable sign and decreases risk. Thus the minimizers are exactly the medians. Apply this argument to each conditional law when a measurable conditional median is available. Ties can give a whole interval of optimal decisions; uniqueness is not automatic.

For a finite outcome alphabet, a probabilistic prediction q has conditional log risk equal to conditional entropy plus divergence from the true conditional probability vector to q. This is obtained by adding and subtracting the logarithm of the true probability in the finite sum. Divergence is nonnegative by the logarithm inequality, with equality only when the vectors agree; assigning zero predicted probability to a possible outcome gives infinite risk. Taking an outer expectation proves the proper-scoring target. The probability vector is identified only almost everywhere in X. For a restricted class, all three arguments give the unrestricted optimum but do not assert that the class contains it.

### Worked example: mean and median have different costs

Let the input be constant and let the outcome be zero with probability three quarters and four with probability one quarter. The mean is one and the unique median is zero. Squared risk at one is three, while squared risk at zero is four. Absolute risk at zero is one, while absolute risk at one is one and one half. Each rule wins under its own loss. No optimization defect is needed to explain the disagreement; the decision problem itself changed. A report comparing the two predictions without naming the loss would erase the reason each is optimal.

## The Bayes binary classifier and an exact excess-risk identity

Let the outcome be zero or one and let eta of x be its conditional success probability. For a deterministic binary rule g, conditional misclassification risk is eta when g predicts zero and one minus eta when it predicts one. Choosing one when eta is at least one half and zero otherwise gives a measurable Bayes rule. At a tie both decisions have equal risk. Direct subtraction of the two possible conditional risks gives
$$R(g)-R(g^*)=E\left[|2\eta(X)-1|\,{\bf1}_{\{g(X)\ne g^*(X)\}}\right].$$
This is an exact identity under the declared population law. Errors near the decision boundary can cost less excess risk than errors far from it. Agreement with a Bayes label is not the same target as estimating the whole probability vector.

For unequal costs, let a false positive cost c zero and a false negative cost c one, both positive. The two conditional risks are c one times eta for predicting zero and c zero times one minus eta for predicting one. The optimal threshold is c zero divided by their sum. This proves that changing decision costs can change the optimal action while leaving the conditional event probability unchanged. Costs are supplied by the decision problem; they cannot be read from the training class frequencies alone.

### Worked example: conditional labels improve on a constant rule

Let the input take two groups with equal probability. Their conditional success probabilities are one fifth and four fifths. The Bayes classifier predicts zero in the first and one in the second, with population error one fifth. Either constant classifier has error one half. Reversing both Bayes labels has error four fifths, so its excess is three fifths. The exact identity gives the same result: every input is misclassified relative to the Bayes rule and the absolute margin equals three fifths in each group. This example specifies a population experiment, not an empirical performance claim from a supplied dataset.

## Independent assessment identifies the risk of a fixed trained rule

Let a fresh assessment sample be iid from the target distribution and independent of the training sample and algorithmic seed. Conditional on the fitted rule, its assessment losses have mean equal to its population risk. Their average is therefore conditionally unbiased for that risk. If those losses have finite conditional variance, the assessment-mean variance is that variance divided by the assessment size. Iterated expectation makes the average unconditionally unbiased for the expected risk of the procedure.

This statement requires the predictor to be fixed with respect to the assessment sample. Selecting among predictors using assessment outcomes changes that conditional experiment. The finite-class chapter proves a simultaneous correction when the candidate set is independent of assessment; adaptive reuse needs a different argument. A held-out set also says only what its sampling law supports. A future population can change in ways no observation in the training or assessment record reveals. The tuple must name which law the guarantee concerns.

The mathematical object returned by a training algorithm should therefore include preprocessing, missing-data rules, feature construction and hyperparameter choice when these depend on training. They affect the map from a new observation to an action. Recording only the final coefficient vector omits part of the procedure whose risk is being discussed. This is a definition of the learning algorithm, not a prescription that one particular software package or fitting method is preferred.

## Practice exercises

<a id="the-learning-problem-is-a-tuple-legacy-1"></a>

### Exercise 1

A researcher reports that their neural network achieves 98% training accuracy on image classification. They conclude that the network "has learned the task." Using the tuple framework, identify at least two missing components that would be needed to justify this conclusion as a learning guarantee.

<details><summary>Hint 1</summary>

An observed accuracy names an empirical loss, not a future population.

</details>

<details><summary>Hint 2</summary>

Ask where future images come from and how the entire rule was selected.

</details>

<details><summary>Full solution</summary>

Training accuracy does specify empirical performance under the $0$--$1$ loss; differentiability is irrelevant to that reported quantity. What is missing is a population target and a valid bridge to it: the future-image distribution $P$, the sampling or assessment design, and an uncertainty or generalization argument. The effective procedure must also include architecture and hyperparameter search. Without those components, $98\%$ training accuracy is a fitting statement rather than a learning guarantee.

</details>

<a id="the-learning-problem-is-a-tuple-legacy-2"></a>

### Exercise 2

Let $X = \mathbb{R}^{d}$ and $Y = \mathbb{R}$. Consider the class $H$ of linear predictors $h_{w}(x) = w^{T}x$ with $w \in \mathbb{R}^{d}$. Show that under squared loss and a fixed distribution $P$ with $\mathbb{E}[\|X\|^{2}] < \infty$ and $\mathbb{E}[Y^{2}] < \infty$, the population risk minimizer over $H$ satisfies the normal equations.

<details><summary>Hint 1</summary>

Expand the population squared loss as a quadratic.

</details>

<details><summary>Hint 2</summary>

A vanishing linear term gives the normal equations; singularity affects uniqueness.

</details>

<details><summary>Full solution</summary>

The population risk is $R(w) = \mathbb{E}[(Y - w^{T}X)^{2}]$. Expanding and differentiating under the integrability assumptions,

$$\nabla_{w} R(w) = -2 \mathbb{E}[X(Y - w^{T}X)] = -2(\mathbb{E}[XY] - \mathbb{E}[XX^{T}]w).$$

Setting to zero gives $\mathbb{E}[XX^{T}]w = \mathbb{E}[XY]$. If $\mathbb{E}[XX^{T}]$ is invertible, the unique minimizer is $w^{*} = (\mathbb{E}[XX^{T}])^{-1}\mathbb{E}[XY]$.

</details>

<a id="the-learning-problem-is-a-tuple-legacy-3"></a>

### Exercise 3

Give an example where the minimizer of absolute loss differs from the minimizer of squared loss within the same hypothesis class.

<details><summary>Hint 1</summary>

A skewed three-point distribution separates the mean and median.

</details>

<details><summary>Hint 2</summary>

Keep the class of constants and change only the loss.

</details>

<details><summary>Full solution</summary>

Let $X$ be a singleton (so predictors are constants), and let $Y$ take values $0$, $1$, and $10$ each with probability $1/3$. The squared-loss minimizer is the mean: $(0 + 1 + 10)/3 = 11/3 \approx 3.67$. The absolute-loss minimizer is any median, which is $1$. These differ, so the choice of loss changes the target even when the class and distribution are fixed.

</details>

<a id="the-learning-problem-is-a-tuple-ex-4"></a>

### Exercise 4

Derive the Bayes threshold when a false positive costs four and a false negative costs one.

<details><summary>Hint 1</summary>

Compare the two conditional costs.

</details>

<details><summary>Hint 2</summary>

Predicting one has conditional cost four times one minus eta.

</details>

<details><summary>Full solution</summary>

Predict one when $4(1-\eta)\le\eta$, equivalently $\eta\ge4/5$. Ties can be broken either way. The threshold differs from one half because the loss changed, not because the probability model changed.

</details>

<a id="the-learning-problem-is-a-tuple-ex-5"></a>

### Exercise 5

Prove that a randomized binary action cannot improve on the Bayes deterministic risk at a fixed input.

<details><summary>Hint 1</summary>

Average the two conditional action risks.

</details>

<details><summary>Hint 2</summary>

A convex combination cannot be smaller than its smaller endpoint.

</details>

<details><summary>Full solution</summary>

If the action predicts one with probability a, its conditional risk is $a(1-\eta)+(1-a)\eta$. This is a convex combination of the two deterministic risks. Its minimum over $0\le a\le1$ is their minimum, attained by an endpoint except at a tie. Randomization can preserve optimality at ties but cannot improve the conditional minimum.

</details>

<a id="the-learning-problem-is-a-tuple-ex-6"></a>

### Exercise 6

Why do equal risks not imply identical predictors everywhere? Give an example.

<details><summary>Hint 1</summary>

Risk integrates only over the input distribution.

</details>

<details><summary>Hint 2</summary>

Modify a predictor outside its support.

</details>

<details><summary>Full solution</summary>

Let X equal zero almost surely and consider squared loss. Two predictors agreeing at zero but taking different values at one have the same risk, whatever the outcome law with finite second moment. The difference at one is never observed under this input law. Population-risk identification is therefore almost-sure identification, not pointwise equality on every formal input.

</details>

<a id="the-learning-problem-is-a-tuple-ex-7"></a>

### Exercise 7

Show that an independent assessment mean is unbiased for the expected risk of a randomized learning procedure.

<details><summary>Hint 1</summary>

Condition on training and the independent algorithmic seed.

</details>

<details><summary>Hint 2</summary>

Use the tower property.

</details>

<details><summary>Full solution</summary>

For each fixed trained rule, a fresh loss has conditional expectation its population risk. The independent assessment average has that same conditional expectation by linearity. Taking expectation over the training sample and seed yields expected algorithm risk. No claim of unbiasedness survives arbitrary selection using those same assessment outcomes without another argument.

</details>

<a id="the-learning-problem-is-a-tuple-ex-8"></a>

### Exercise 8

A sample is copied ten times before fitting. Which tuple component prevents treating the result as ten times as much iid information?

<details><summary>Hint 1</summary>

Write the joint law of the duplicated rows.

</details>

<details><summary>Hint 2</summary>

Each repeated copy is determined by its original.

</details>

<details><summary>Full solution</summary>

The sample-generating mechanism changes from an iid product to a dependent record with exact duplicates. The number of independent source observations is unchanged. An iid concentration theorem with ten times the sample size does not describe that joint law, even if the optimizer sees a longer table.

</details>

<a id="the-learning-problem-is-a-tuple-ex-9"></a>

### Exercise 9

For a constant input and binary outcome with success probability p strictly between zero and one, prove that reporting q equal to p uniquely minimizes log risk.

<details><summary>Hint 1</summary>

Subtract the risk at p from the risk at q.

</details>

<details><summary>Hint 2</summary>

The difference is Bernoulli divergence.

</details>

<details><summary>Full solution</summary>

The difference is $p\log(p/q)+(1-p)\log((1-p)/(1-q))$, nonnegative by the logarithm inequality, with equality only at q equal to p. Either endpoint q gives infinite risk because both outcomes are possible. Thus a hard classification label is not an optimal probabilistic forecast for this loss.

</details>

<a id="the-learning-problem-is-a-tuple-ex-10"></a>

### Exercise 10

Does observing a large train-assessment gap identify which tuple component is wrong?

<details><summary>Hint 1</summary>

Several different experiments can produce the same two numbers.

</details>

<details><summary>Hint 2</summary>

Consider selection, distribution shift and sampling variability.

</details>

<details><summary>Full solution</summary>

No. A complex selected procedure can overfit, assessment data may come from another law, repeated use of assessment labels can select optimistic reports, or an independent finite assessment can fluctuate. A numerical gap motivates an investigation but does not identify a unique cause. The distribution, complete algorithm and sampling design must be recorded before choosing a corrective theorem.

</details>

## Looking forward

The realizable PAC chapter next introduces a distribution-free success criterion. The decomposition chapter then decomposes excess risk into three sources: approximation error (how well $H$ can represent the optimal predictor), estimation error (how well the sample reveals the best predictor in $H$), and optimization error (how close the algorithm comes to the empirical optimum). Each source connects to a different component of the tuple.
