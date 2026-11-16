var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: models-as-functions-with-uncertainty
title: "Models as Functions with Uncertainty"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Models as Functions with Uncertainty

## A function estimate and a probability law on function values

A fitted function assigns a value to each input. A probabilistic function model specifies joint distributions of several such values, an observation mechanism, and an updating rule given data. The distinction matters when making predictions away from recorded inputs, comparing experiments, or describing which uncertainty a reported interval includes. A mean curve alone cannot recover a joint probability law.

This opening rewrites the function-model material in [the retained Structured source](../structured-probabilistic-learning/a-probability-model-is-more-than-a-fitted-curve.md). The separately authored PGM opening uses joint distributions of named variables and graphical factorization; here the central object is a random function indexed by inputs and its finite feature representation. Preparation is Gaussian vectors, covariance, positive-definite matrices and elementary Bayesian conditioning. The next chapters introduce positive kernels and the Hilbert-space optimisation viewpoint.

**Definition 1.1 (Finite-feature function model).** Treat the design inputs as fixed unless another sampling model is declared. Let a feature map phi send each input into a finite-dimensional real vector space, and define $f(x)=\\phi(x)^TW$. A Gaussian weight prior with mean m zero and positive-definite covariance V zero induces a joint Gaussian law for every finite list of function values. Their mean is the feature inner product with the weight mean, and their covariance is
$$
k(x,z)=\\phi(x)^TV_0\\phi(z).
$$
The output functions need not be Gaussian-shaped. A random affine function is Gaussian as a process because its finite value vectors are linear transformations of one Gaussian weight vector. Its sample paths are straight lines because of the feature choice, not because the normal density itself has that shape.

## The observation model is another random object

For training inputs $x_1,\\ldots,x_n$, put the feature row vectors into a matrix Phi. Observe $Y=\\Phi W+\\varepsilon$ with independent noise $\\varepsilon\\sim N(0,\\sigma^2I)$, where sigma squared is positive and the noise is independent of W. The latent function vector and observed vector are different: the latter includes record-specific randomness.

Two readings at the same input share the same latent function value. Their measurement noises remain independent under this likelihood. Adding an input-indexed white-noise kernel instead gives identical latent noise values at identical inputs, which is another model. Whether a perturbation is indexed by input location or by observation record must be stated before writing an identity matrix in a covariance formula.

The marginal observation law has mean Phi times m zero and covariance $\\Phi V_0\\Phi^T+\\sigma^2I$, which is positive definite even when the design is rank deficient. Thus the finite observation density exists and every reported real response vector has a conditional Gaussian version. The likelihood is this conditional noise model for fixed weights; integrating those weights gives the marginal data law. Optimizing a penalty without adopting this probability model is a distinct procedure developed in Chapter 4.

## A full Gaussian posterior derivation

**Theorem 1.2 (Gaussian finite-feature posterior).** Under the stated positive-definite Gaussian weight prior and positive noise variance, the weight posterior has the mean and covariance displayed below without requiring full design rank. Multiply the weight-prior density and the observation likelihood. Ignoring terms independent of weights, the log product is minus one half of
$$
(w-m_0)^TV_0^{-1}(w-m_0)+\\sigma^{-2}(y-\\Phi w)^T(y-\\Phi w).
$$
Collect the quadratic coefficient and linear term. The posterior precision is $V_0^{-1}+\\sigma^{-2}\\Phi^T\\Phi$, positive definite because the prior precision is. Completing the square gives
$$
V_D=(V_0^{-1}+\\sigma^{-2}\\Phi^T\\Phi)^{-1},\\qquad
m_D=V_D(V_0^{-1}m_0+\\sigma^{-2}\\Phi^Ty).
$$
No full-column-rank assumption on Phi was needed. The prior makes the posterior proper and its covariance nonsingular in weight space. This does not mean the data identify every weight direction: directions not seen by the design can retain substantial prior uncertainty.

For a list of test inputs with feature matrix Phi star, the latent posterior is Gaussian with mean Phi star times m D and covariance $\\Phi_*V_D\\Phi_*^T$. Independent new measurement noise adds its covariance to obtain an outcome prediction. The conditional mean minimizes squared-error posterior risk by the conditional variance decomposition; a different decision loss can choose another action.

An equivalent covariance update is
$$
V_D=V_0-V_0\\Phi^T(\\Phi V_0\\Phi^T+\\sigma^2I)^{-1}\\Phi V_0.
$$
To verify it, multiply the proposed right side by the posterior precision and cancel using the observation covariance identity. This proves the equality without requiring the latent Gram matrix to be invertible. The correction is positive semidefinite, so posterior covariance is no larger than prior covariance in the matrix order, within this fixed likelihood and prior.

## Worked example 1: an uncertain straight line

**Example 1.3 (an uncertain straight line).** Take features $(1,x)$, independent unit-variance standard-normal intercept and slope, and unit observation variance. One response equal to one at input zero updates only the intercept. The weight posterior mean is $(1/2,0)$ and its covariance is diagonal with entries one half and one. At test input one, the latent prediction has mean one half and variance three halves. A new noisy outcome there has variance five halves.

A second independent reading equal to one at input zero gives intercept mean two thirds and variance one third, while the slope remains at prior mean zero and variance one. Repeating measurements at one design location can sharpen the function value there without learning the variation in an unobserved feature direction. At input one the latent variance is now four thirds, still dominated by slope uncertainty.

If the two readings were exact duplicates of one recorded noisy number rather than independent measurements, the likelihood would contain one random noise draw, not two. The second entry would not provide the same update. The model for replication determines information, not the number of rows in a stored table.

## Worked example 2: a proper posterior with a nonidentified weight contrast

**Example 1.4 (a proper posterior with a nonidentified weight contrast).** Let $\\phi(x)=(x,x)$ and use independent unit-normal weights. At input one observe response two with unit noise variance. The design has identical columns, so the likelihood sees only the sum of weights. The posterior covariance and mean are
$$
V_D=\\frac13\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix},\\qquad
m_D=\\begin{pmatrix}2/3\\\\2/3\\end{pmatrix}.
$$
Their sum has posterior mean four thirds and variance two thirds. Their difference remains mean zero with variance two, exactly its prior variance. The prior posterior exists uniquely while the data still supply no information about that contrast.

As a function, only the sum matters because the two features agree at every input. The weight representation is redundant globally, not merely at this one design. Different coefficient vectors can represent the same function. The RKHS chapter will construct function norms by identifying such redundant representations rather than assigning a different function every time the weights change.

## Posterior width conditions on a chosen model

At fixed inputs, feature map, noise and prior covariance, the posterior covariance does not depend on the observed response values. The responses change the mean but the matrix update depends only on the design and hyperparameters. A conspicuous response pattern therefore does not automatically inflate uncertainty. Refitting hyperparameters may change the covariance, but that is another update rule and can introduce plug-in uncertainty.

The total-variance identity separates new observation noise from uncertainty in the latent prediction. It does not add a term for every possible misspecified feature map or shifted observation regime. A prior can model uncertainty among its functions; it cannot assign posterior mass to possibilities excluded from its model. A narrow interval is consequently a conditional statement, whose interpretation must retain those choices.

There is no contradiction between coherent Bayesian conditioning and a model being wrong. Conditioning is a mathematical operation within a probability law. Assessing whether that law describes a data-generating process requires another argument or evidence. Sensitivity analysis compares explicit changes to the likelihood, prior or function family, rather than claiming an existing posterior already contains every unspecified alternative.

## Worked example 3: shrinking intervals around a wrong extrapolation

**Example 1.5 (shrinking intervals around a wrong extrapolation).** Fit a constant-function model with unit-normal intercept prior and unit independent Gaussian observation noise. Suppose every training input equals zero. Under an actual mechanism $f(x)=x$, the observed responses at that input are independent unit-normal noise. The fitted posterior intercept mean is the sum of responses divided by n plus one, and its variance is one divided by n plus one.

The strong law makes that mean converge to zero almost surely. Its latent-function credible interval with any fixed normal quantile shrinks to zero at every test input because the fitted model permits only constants. At input one, however, the true latent function equals one. Almost surely the reported shrinking interval eventually excludes it. Its frequentist coverage at that location tends to zero by bounded convergence of the coverage indicator.

This conclusion concerns the latent function interval, not a future noisy outcome interval, whose noise variance remains positive. It also does not refute the conditional posterior formula: the constant family was misspecified for extrapolation. Additional data only at zero cannot repair that missing function direction. Changing the design or the function family addresses a different part of the problem from adjusting the Gaussian posterior arithmetic.

## From finite features to kernels

The finite weight construction uses a covariance of the form $\\phi(x)^TV_0\\phi(z)$. For any finite coefficients its Gram quadratic form is the squared norm of a weighted feature sum after a covariance square root, so it is nonnegative. The next chapter takes this finite-configuration property as the definition of a positive-semidefinite kernel, without requiring an explicit finite feature vector.

This abstraction allows a single covariance rule to describe arbitrarily many evaluated inputs. It does not imply the kernel matrix is always strictly positive definite: repeated inputs or a finite-rank feature family can make it singular. A noise variance can make the observation covariance invertible even then. The distinction between latent covariance and noisy observation covariance remains essential in every later posterior formula.

An infinite-rank kernel introduces another distinction. The Hilbert space associated with a kernel is a deterministic space of functions used for norm-penalized learning. A Gaussian process is a probability law on coordinate values with that covariance. Typical paths need not have finite norm in the associated Hilbert space. Matching a posterior mean to a norm-regularised solution therefore does not identify the whole probability law with that optimisation space.

## Credible probabilities, predictive decisions and comparison targets

A Gaussian latent interval at a fixed input has its stated posterior mass under the fixed model and hyperparameters. Simultaneous coverage of a whole curve is another event, involving joint correlations and possibly path regularity. Joining many pointwise intervals does not automatically give a simultaneous credible band. A dense plotting grid also does not by itself specify what happens between its points without a regularity argument.

For a new noisy response, add the declared future noise variance. For an average of several function values, include cross-covariances rather than average only their marginal variances. For a decision with asymmetric costs, optimize the expected loss rather than choose the mean simply because it is easy to plot. The probability model can answer all these questions, but each is a separate target.

Marginal likelihood compares models after integrating latent weights under their priors. Cross-validation compares predictive performance under a resampling design and loss. Neither criterion is assumption-free, and they need not choose the same feature or kernel parameters. The hyperparameter chapter will derive those distinctions rather than use the word fit for both.

The course now moves from this transparent finite construction to positive kernels, reproducing spaces and support-vector objectives, then to Gaussian-process inference and scalable approximations. The finite examples remain useful checks on every abstraction: ask which directions the design sees, which noise belongs to records, what is conditioned on, and whether a computational approximation changes the target distribution or only the method used to evaluate it.

## Exercises

<a id="models-as-functions-with-uncertainty-ex-1"></a>

### Exercise 1

Why is the weight posterior precision positive definite even when the feature design is rank deficient?

<details><summary>Hint 1</summary>

The prior covariance is positive definite.

</details>

<details><summary>Hint 2</summary>

The likelihood adds a positive-semidefinite matrix.

</details>

<details><summary>Full solution</summary>

For any nonzero vector, the prior precision contributes a strictly positive quadratic form while the design cross-product contributes a nonnegative one. Their sum is therefore positive definite and invertible. This gives a proper posterior, but does not make every weight direction identified by the data, as the redundant-feature example shows.

</details>

<a id="models-as-functions-with-uncertainty-ex-2"></a>

### Exercise 2

Compute the latent and noisy predictive variances at input one after the first straight-line observation.

<details><summary>Hint 1</summary>

Add intercept and slope posterior variances.

</details>

<details><summary>Hint 2</summary>

Then add independent measurement noise only for the outcome.

</details>

<details><summary>Full solution</summary>

The latent value is intercept plus slope, with posterior variances one half and one and zero covariance, giving three halves. A fresh unit-variance observation adds one, yielding five halves. Reusing the noisy-outcome variance as the latent-function variance would conflate two random quantities and overstate the latent uncertainty.

</details>

<a id="models-as-functions-with-uncertainty-ex-3"></a>

### Exercise 3

Why does repeating input zero fail to learn the slope in that example?

<details><summary>Hint 1</summary>

The slope feature vanishes in every likelihood row.

</details>

<details><summary>Hint 2</summary>

The prior intercept and slope are independent.

</details>

<details><summary>Full solution</summary>

Every response depends on the intercept and noise only, so the likelihood is constant in the slope. With an independent prior its posterior remains unchanged regardless of the number of such observations. The function value away from zero still depends on slope, leaving extrapolation uncertainty. Another design location or a prior dependence assumption would change this conclusion.

</details>

<a id="models-as-functions-with-uncertainty-ex-4"></a>

### Exercise 4

What is the posterior variance of the weight difference in the redundant-feature example?

<details><summary>Hint 1</summary>

Apply the covariance quadratic form to $(1,-1)$.

</details>

<details><summary>Hint 2</summary>

The likelihood sees only their sum.

</details>

<details><summary>Full solution</summary>

The diagonal posterior contributions sum to four thirds and subtracting twice the negative off-diagonal adds two thirds, totaling two. This equals the prior difference variance. The likelihood has no component in that contrast direction, so a proper posterior does not imply the data learned it.

</details>

<a id="models-as-functions-with-uncertainty-ex-5"></a>

### Exercise 5

Prove positive semidefiniteness of the finite-feature covariance kernel.

<details><summary>Hint 1</summary>

Insert a square root of the prior covariance.

</details>

<details><summary>Hint 2</summary>

Collect the double sum into a norm square.

</details>

<details><summary>Full solution</summary>

The Gram quadratic form is the squared Euclidean norm of the sum of coefficient-weighted transformed features. Every squared norm is nonnegative, so every finite Gram matrix is positive semidefinite. The argument holds for repeated inputs and linearly dependent features, which can yield zero rather than strictly positive quadratic values.

</details>

<a id="models-as-functions-with-uncertainty-ex-6"></a>

### Exercise 6

Why are independent measurement errors not represented by input-indexed white noise at repeated inputs?

<details><summary>Hint 1</summary>

Two records can share one input value.

</details>

<details><summary>Hint 2</summary>

Input indexing gives the same latent random variable at that value.

</details>

<details><summary>Full solution</summary>

An input-indexed process assigns one random value to each input, so repeated evaluations at the same input share that value. Independent measurement errors are instead indexed by records and remain separate random draws even at identical inputs. Their covariance contributes a record identity matrix, whereas the input-indexed delta kernel gives an all-ones block for repeated locations.

</details>

<a id="models-as-functions-with-uncertainty-ex-7"></a>

### Exercise 7

Why does the posterior covariance not depend on observed responses when hyperparameters are fixed?

<details><summary>Hint 1</summary>

Inspect the completed-square quadratic coefficient.

</details>

<details><summary>Hint 2</summary>

Responses enter only its linear term.

</details>

<details><summary>Full solution</summary>

The quadratic coefficient is prior precision plus the design cross-product divided by noise variance. It depends on inputs and fixed model parameters, not on response values. The response vector appears in the linear coefficient that determines the posterior mean. Refitting hyperparameters from responses would change that premise and requires a separate description.

</details>

<a id="models-as-functions-with-uncertainty-ex-8"></a>

### Exercise 8

Explain the vanishing latent-interval coverage in the constant-model extrapolation example.

<details><summary>Hint 1</summary>

The fitted mean converges to zero and the radius shrinks.

</details>

<details><summary>Hint 2</summary>

The true value at input one is fixed at one.

</details>

<details><summary>Full solution</summary>

The strong law makes the posterior constant estimate tend to zero almost surely, while its fixed-quantile credible radius tends to zero. The interval therefore eventually excludes one on almost every repeated-data realization. Its coverage probability tends to zero by bounded convergence. This concerns a misspecified latent-function model at extrapolation, not a failure of its internal Gaussian conditioning identity.

</details>

<a id="models-as-functions-with-uncertainty-ex-9"></a>

### Exercise 9

Does a collection of pointwise credible intervals automatically form a simultaneous credible band?

<details><summary>Hint 1</summary>

The whole-curve event is an intersection.

</details>

<details><summary>Hint 2</summary>

Its probability depends on joint dependence and possibly uncountably many inputs.

</details>

<details><summary>Full solution</summary>

No. Each individual interval has a marginal posterior probability, whereas simultaneous inclusion concerns their intersection. Even finitely many such events can have a smaller joint probability. A whole function adds path-space and regularity issues. A simultaneous band must be constructed and justified for that joint event rather than inferred from pointwise nominal levels.

</details>

<a id="models-as-functions-with-uncertainty-ex-10"></a>

### Exercise 10

What additional assumption turns a kernel ridge point estimate into a Gaussian-process posterior mean?

<details><summary>Hint 1</summary>

Choose the same kernel and scaling.

</details>

<details><summary>Hint 2</summary>

Add a Gaussian prior and an independent Gaussian likelihood.

</details>

<details><summary>Full solution</summary>

The optimisation estimate matches a posterior mean under the corresponding zero-mean Gaussian-process covariance and Gaussian observation-noise model, with regularisation matched to its noise scaling. Bare kernel ridge has no probability distribution or posterior covariance by itself. The algebraic match of means does not transfer every probabilistic interpretation without adopting those model assumptions.

</details>
`;export{e as default};