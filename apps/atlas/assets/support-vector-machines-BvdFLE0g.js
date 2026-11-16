var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: support-vector-machines
title: "Support Vector Machines"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Support Vector Machines

## Classification with a margin objective

A support vector machine learns a real score whose sign is used for binary classification. It is a kernel optimisation method, not intrinsically a posterior-probability model. The kernel chooses a function geometry; the margin loss and regularisation choose an objective within it. Preparation is RKHS reproduction, the representer theorem and finite convex optimisation. The finite-dimensional Slater duality theorem is explicitly used when establishing equality of primal and dual optima.

**Definition 5.1 (Soft-margin primal).** Let labels be minus one or plus one, let C be positive, and leave the scalar bias b unpenalized. The soft-margin primal is
$$
\\min_{f\\in H,b,\\xi}\\frac12\\|f\\|_H^2+C\\sum_i\\xi_i,
\\qquad y_i(f(x_i)+b)\\ge1-\\xi_i,\\quad\\xi_i\\ge0.
$$
For fixed f and b the smallest feasible slack is the hinge loss $\\max(0,1-y_i(f(x_i)+b))$. Thus the constrained form and regularised hinge-loss form are identical. This does not assert that the scores are calibrated probabilities or that training margins alone establish population accuracy.

Project f onto the data-section span. Observed scores and constraints remain unchanged, while its norm decreases unless the orthogonal remainder is zero. Therefore a primal minimiser can and, by the strict norm comparison, must lie in that finite span. Unpenalized b is a separate scalar variable, not silently absorbed into the penalized kernel norm.

## Existence and the finite dual derivation

A feasible point is f zero, b zero and every slack two, with all inequalities strict. When both labels occur, any bounded-objective sequence has bounded f norm and nonnegative slacks, hence bounded evaluations. A positive-label constraint bounds b below and a negative-label constraint bounds it above. Restricting to the finite section span gives a compact sublevel argument and existence of a minimum. If only one label occurs, f zero and a sufficiently signed b attain objective zero directly.

**Proposition 5.2 (Soft-margin duality).** For the stated finite soft-margin problem with positive C, the displayed dual attains the same value as the primal, using finite-dimensional Slater duality as named above. Introduce nonnegative multipliers alpha for margin constraints and beta for slack nonnegativity. The Lagrangian is
$$
\\frac12\\|f\\|^2+C\\sum_i\\xi_i+
\\sum_i\\alpha_i\\{1-\\xi_i-y_i(f(x_i)+b)\\}-\\sum_i\\beta_i\\xi_i.
$$
Minimization over f gives $f=\\sum_i\\alpha_i y_i k_{x_i}$ by reproduction. Minimization over the unrestricted bias requires $\\sum_i\\alpha_i y_i=0$. The slack linear terms require $C-\\alpha_i-\\beta_i=0$, giving the box constraints between zero and C. Substitution yields the dual
$$
\\max_\\alpha\\sum_i\\alpha_i-\\frac12\\sum_{i,j}\\alpha_i\\alpha_jy_iy_jK_{ij},
\\qquad0\\le\\alpha_i\\le C,\\quad\\sum_i\\alpha_i y_i=0.
$$
Positive semidefiniteness makes this a concave quadratic maximization over a compact feasible polytope, so a dual maximum exists. Strict feasibility of the finite convex primal lets Slater duality identify its value with the primal minimum and gives the optimality conditions below. This is the declared convex-duality input; merely deriving a weak lower-bound dual would not by itself prove equality.

## Complementary slackness and support vectors

At optimum, alpha times the margin-constraint residual is zero and beta times slack is zero. Therefore an alpha strictly between zero and C forces zero slack and score margin exactly one. A zero alpha allows margin at least one; a maximal alpha C forces margin no greater than one and can include either a boundary point or a positive hinge violation.

A support vector is usually a training point with positive dual multiplier. Only those points contribute to the displayed representation of f. A point exactly on the margin can have zero multiplier in a degenerate solution, so the geometric phrase on the margin is not always equivalent to a positive coefficient. Nor need the coefficients be unique when the Gram is singular, although strict convexity in f makes the optimal function unique. Bias and slack representations can retain further nonuniqueness.

When a multiplier lies strictly inside its box, its margin equation gives $b=y_i-f(x_i)$. With no such point, feasible bias values can form an interval, obtainable from the inequalities at the box-boundary points. Averaging an arbitrary set of expressions for b without checking their multiplier cases can produce a score violating the optimality conditions.

## Worked example 1: two points and a nonunique bias

**Example 5.3 (two points and a nonunique bias).** Use the linear kernel on the real line, inputs minus one and plus one, and matching labels. With an unpenalized bias, the hard-margin constraints force slope at least one and the minimum-norm choice is slope one, bias zero. Each dual multiplier is one half. The geometric margin in the feature line is one.

For soft margin, the dual equality forces the two multipliers to be equal. Its scalar objective is twice alpha minus twice alpha squared, with alpha between zero and C. The optimum is the smaller of C and one half, giving slope twice that value. When C is below one half, any bias satisfying $|b|\\le1-2C$ can be optimal.

The function slope remains uniquely two C, but the unpenalized bias can vary because both hinge terms remain in their linear regions and their bias contributions cancel. At C at least one half, the hard-margin slope and zero bias are recovered. This transparent case separates unique penalized function geometry from uniqueness of every parameter in the classifier.

## Functional and geometric margins

The canonical feature map is the section k x itself, with f values as its inner products. For nonzero f, the signed distance of a feature point from the separating affine hyperplane is its signed score divided by the H norm of f. Constraints of functional margin at least one therefore make the smallest geometric margin at least the reciprocal norm.

Hard-margin learning minimizes the norm subject to all those constraints, and is feasible exactly when the finite sample is strictly separable by an RKHS function and bias. Strict separation can be rescaled to achieve margins exceeding one, supplying Slater strict feasibility for its dual as well. Inseparable data require soft margin or another loss; an arbitrarily large C does not create a feasible hard-margin classifier when contradictory records exist.

Changing the kernel scale changes the norm scale. For k prime equal to a positive constant a times k, the same function has squared norm divided by a. Multiplying the corresponding objective by a shows equivalence to the original kernel with C multiplied by a. Thus C cannot be interpreted independently of kernel amplitude or preprocessing. Scaling an input feature can also change relative geometry, not merely multiply every margin uniformly.

## Worked example 2: XOR becomes linearly separable in quadratic features

**Example 5.4 (XOR becomes linearly separable in quadratic features).** At the four inputs $(\\pm1,\\pm1)$, let the label be the product of the two coordinates. No affine linear score separates them: the two positive constraints together require bias at least one, while the two negative constraints together require bias at most minus one. These are incompatible.

The homogeneous quadratic kernel $(x^Tz)^2$ has feature map $(x_1^2,\\sqrt2x_1x_2,x_2^2)$. The score $f(x)=x_1x_2$ is linear in those features with coefficient vector $(0,1/\\sqrt2,0)$ and zero bias. Its product with every label is exactly one, so it gives a feasible hard-margin separator of squared feature norm one half.

In this four-point problem the constant feature contributions can be moved into the unpenalized bias, and their minimum-norm choice is zero. The remaining product-feature coefficient must have magnitude at least one over square root two; the displayed value is therefore the minimum norm. The kernel has changed the admissible geometry rather than solving the original linear problem more accurately. It still does not make its signed scores posterior probabilities.

## Worked example 3: contradictory duplicate inputs

**Example 5.5 (contradictory duplicate inputs).** Suppose two identical inputs have opposite labels. Their function and bias score must be the same real number s. The sum of their hinge losses is at least two, with equality whenever s lies between minus one and one. Choosing f zero and any b in that interval attains objective two C, the smallest possible since the norm is nonnegative.

The dual can take both multipliers equal to C. Their signed section contributions cancel exactly because the inputs coincide, leaving f zero; their dual objective is two C. This verifies primal-dual equality in a singular Gram case and shows why a large C cannot resolve inconsistent labels into a hard-margin separator. A noise or label-error model could represent uncertainty about the labels, but it would be another probabilistic assumption rather than an algebraic repair to these constraints.

## Hinge scores do not identify conditional probabilities

At a fixed input with conditional positive-label probability p, the expected hinge loss for score s is $p(1-s)_++(1-p)(1+s)_+$. For s between minus one and one its slope is one minus twice p. Outside that interval, its slopes are minus p on the left and one minus p on the right. For p strictly between zero and one, the minimiser is therefore plus one when p exceeds one half, minus one when p is below one half, and any point in the interval at equality.

Different probabilities on the same side of one half can thus have the same optimal score. The hinge objective is compatible with a classification decision, but does not recover p from that score. Probability calibration needs an additional model or held-out fitting procedure, whose uncertainty and reuse of data must be accounted for. Applying a logistic transformation to an arbitrary SVM score does not by itself establish calibrated probabilities.

Asymmetric decision costs can be incorporated through a different weighted loss or through a declared probability model and threshold. Per-record penalties C i replace the common box upper bound by C i in the dual. Weighting classes changes the statistical objective and the implied tradeoffs; it is not merely a solver acceleration.

## Optimization accuracy and generalization are separate

The finite dual is concave but can be ill-conditioned or have nonunique optima. Working-set methods optimize subsets of its multipliers and use box and equality constraints. A stopping tolerance can assess approximate optimality of that finite objective; it does not establish future classification accuracy. An objective gap also needs an argument before being translated into a prediction or decision gap.

The [learning-theory course](../statistical-learning-generalization/margins-and-linear-classes.md) develops margin-based risk bounds under explicit iid and bounded-feature assumptions. The deterministic representer and dual proofs here do not assume such a sampling law and therefore cannot supply those risk guarantees alone. A classifier with a large training margin can still perform badly under a different input distribution or a wrong label mechanism.

For a fixed kernel and C, some coefficient stability follows from strict convexity of the function penalty, but bias nonuniqueness and response-dependent tuning need their own treatment. Cross-validating over kernel families introduces a selection procedure distinct from solving one SVM. Neither its final number of support vectors nor a high training accuracy automatically measures that procedure's uncertainty.

## Comparison with ridge and Gaussian-process classification

Kernel ridge uses squared residuals and produces a real-valued regression function. An SVM uses a hinge decision objective and optionally an unpenalized bias. Gaussian-process classification places a prior on latent scores and combines it with a Bernoulli link likelihood, whose posterior is usually non-Gaussian. All can use the same kernel matrix while making different mathematical and inferential claims.

A posterior mode in a specific probabilistic model can coincide with a particular penalized objective, but that correspondence must be derived with its likelihood and scale. A general hinge objective is not the Gaussian-process posterior of the later logistic classification chapter. Choosing a method should retain the desired decision or probability target rather than treating the shared word kernel as equivalence of all outputs.

The next chapters construct Gaussian processes from their finite laws and derive conditioning, classification approximations and hyperparameter objectives. The SVM provides a useful contrast: it demonstrates how far finite kernel geometry can go without adopting a probability law on functions or interpreting every uncertainty statement through one.

## Exercises

<a id="support-vector-machines-ex-1"></a>

### Exercise 1

Why does the representer argument still apply with an unpenalized bias?

<details><summary>Hint 1</summary>

Project only f onto the observed section span.

</details>

<details><summary>Hint 2</summary>

Leave b and slacks fixed.

</details>

<details><summary>Full solution</summary>

The projection preserves every function evaluation, so each score after adding the same bias is unchanged and all constraints remain feasible. Its norm cannot increase and strictly decreases for a nonzero orthogonal component. The separate bias parameter need not belong to the penalized RKHS. Absorbing it into the kernel without adjusting the penalty would change the problem.

</details>

<a id="support-vector-machines-ex-2"></a>

### Exercise 2

Derive the dual equality constraint.

<details><summary>Hint 1</summary>

Minimize the Lagrangian over the unrestricted scalar b.

</details>

<details><summary>Hint 2</summary>

A nonzero linear coefficient makes its infimum minus infinity.

</details>

<details><summary>Full solution</summary>

The bias coefficient is minus the sum of alpha i times label i. Unless that sum is zero, choosing the sign and magnitude of b drives the Lagrangian to minus infinity. A finite dual value therefore requires the equality constraint. This is why an unpenalized bias differs from a penalized constant feature.

</details>

<a id="support-vector-machines-ex-3"></a>

### Exercise 3

Why are dual multipliers bounded above by C?

<details><summary>Hint 1</summary>

Inspect the coefficients of the slack variables.

</details>

<details><summary>Hint 2</summary>

Their nonnegativity multipliers must stay nonnegative.

</details>

<details><summary>Full solution</summary>

Stationarity in each slack gives C minus alpha i minus beta i equal to zero. Since both constraint multipliers are nonnegative, alpha lies between zero and C. Per-record slack penalties would produce corresponding individual upper bounds. The box is a consequence of the primal objective, not an arbitrary solver restriction.

</details>

<a id="support-vector-machines-ex-4"></a>

### Exercise 4

What does a multiplier strictly between zero and C imply?

<details><summary>Hint 1</summary>

Its margin constraint is tight.

</details>

<details><summary>Hint 2</summary>

Its positive slack nonnegativity multiplier forces zero slack.

</details>

<details><summary>Full solution</summary>

Positive alpha makes the margin constraint equality. Alpha below C gives beta positive, so complementary slackness forces its slack to zero. Hence the signed score is exactly one. At box endpoints the same conclusion is weaker, and a point on the margin need not have a strictly interior multiplier in a degenerate optimum.

</details>

<a id="support-vector-machines-ex-5"></a>

### Exercise 5

For the two-point linear example, find the soft-margin slope.

<details><summary>Hint 1</summary>

The two dual multipliers are equal.

</details>

<details><summary>Hint 2</summary>

Optimize twice alpha minus twice alpha squared on its box.

</details>

<details><summary>Full solution</summary>

The unconstrained maximum occurs at alpha one half. The box truncates it to the smaller of C and one half. The represented slope is the sum of the two signed input contributions, twice alpha. Thus it is two C below the threshold and one at or above it, with the stated possible bias interval in the low-C case.

</details>

<a id="support-vector-machines-ex-6"></a>

### Exercise 6

Prove affine inseparability of the XOR labels.

<details><summary>Hint 1</summary>

Add the two positive-point inequalities.

</details>

<details><summary>Hint 2</summary>

Add the two negative-point inequalities.

</details>

<details><summary>Full solution</summary>

The two positive corners require their opposite linear contributions plus bias each at least one, forcing bias at least one. The two negative corners require their opposite contributions plus bias each at most minus one, forcing bias at most minus one. The contradiction proves no affine separator exists. A quadratic feature map changes the function class and removes that obstruction.

</details>

<a id="support-vector-machines-ex-7"></a>

### Exercise 7

Why can opposite labels at one input not be fixed by increasing C?

<details><summary>Hint 1</summary>

Both records share the same score.

</details>

<details><summary>Hint 2</summary>

The sum of their two hinge losses is at least two.

</details>

<details><summary>Full solution</summary>

No single real score has signed margin at least one for both opposite labels. Their hinge sum is minimized at two for any score between minus one and one. Raising C raises the cost of that unavoidable loss but cannot create hard-margin feasibility. A different observation or label model would be needed to reinterpret the contradiction.

</details>

<a id="support-vector-machines-ex-8"></a>

### Exercise 8

How does scaling the kernel by a change the corresponding C?

<details><summary>Hint 1</summary>

The same function norm squared is divided by a.

</details>

<details><summary>Hint 2</summary>

Multiply the full objective by a.

</details>

<details><summary>Full solution</summary>

The scaled-kernel objective becomes one half original norm squared divided by a plus C times total hinge loss. Multiplying by a preserves its minimiser and yields the original kernel with penalty a C. Thus kernel amplitude and regularisation must be considered together when comparing classifiers.

</details>

<a id="support-vector-machines-ex-9"></a>

### Exercise 9

Why is the hinge-optimal score not a conditional-probability estimate?

<details><summary>Hint 1</summary>

Compute its population conditional minimiser.

</details>

<details><summary>Hint 2</summary>

All probabilities above one half select the same positive score.

</details>

<details><summary>Full solution</summary>

For a nondegenerate conditional probability above one half, expected hinge loss is minimized at score plus one, regardless of the exact probability. Below one half it selects minus one. The score therefore preserves the classification side but not the probability magnitude. Calibration requires another justified model or procedure, not a universal transformation inferred from the hinge objective.

</details>

<a id="support-vector-machines-ex-10"></a>

### Exercise 10

Does a solved convex dual establish generalization?

<details><summary>Hint 1</summary>

The dual optimizes the observed finite objective.

</details>

<details><summary>Hint 2</summary>

Future risk involves an observation distribution.

</details>

<details><summary>Full solution</summary>

No. Strong duality and a small optimisation gap address the specified training objective. Generalization requires sampling and function-class assumptions or another statistical argument. Kernel choice, tuning, distribution shift and the label mechanism can all affect future risk even when the finite optimisation is solved exactly.

</details>
`;export{e as default};