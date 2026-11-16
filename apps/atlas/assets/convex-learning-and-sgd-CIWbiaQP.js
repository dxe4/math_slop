var e=`---
parent_id: book-statistical-learning-generalization
chapter_id: convex-learning-and-sgd
title: "Convex Learning and Stochastic Gradient Descent"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Convex Learning and Stochastic Gradient Descent

Convex optimization can turn a statistical objective into a procedure with a proved objective gap. That gap must name its target: a fixed empirical average and an expected population loss are different functions. This chapter proves deterministic gradient and fresh-observation stochastic-gradient bounds, then explains how a reused finite dataset fits into the distinction.

Preparation is convexity, Euclidean projection, elementary conditional expectation and the risk decomposition. The later online chapter supplies a closely related deterministic telescoping argument; all probability assumptions needed here are stated directly. There is no claim that a nonconvex fit inherits these convex guarantees.

## Convexity supplies a global comparison

A subgradient g of a convex function F at w satisfies
$$F(v)\\ge F(w)+g^\\top(v-w)$$
for every feasible v. This inequality compares w with every competitor, rather than only a nearby perturbation. If zero is a subgradient, w is a global minimizer. For a differentiable convex function this is the familiar zero-gradient sufficient condition.

Without convexity a stationary point need not be a minimum. The real function w to the fourth minus w squared has derivative zero at zero, but nearby nonzero points have smaller values. A numerical first-order stopping criterion therefore does not imply a global empirical objective gap in arbitrary neural-network training. The theorems below use convexity precisely at the comparator inequality, and strong convexity where squared distance is subtracted.

## Smoothness gives the descent lemma

Assume F is differentiable on Euclidean space and its gradient is L-Lipschitz, with positive L. Along the segment from w to v, integrate the gradient inner product. Subtract the linear term using the gradient at w. Cauchy–Schwarz and the gradient-Lipschitz condition bound the remaining integrand at segment fraction t by L t times squared displacement. Integrating t from zero to one proves
$$F(v)\\le F(w)+\\nabla F(w)^\\top(v-w)+\\frac L2\\|v-w\\|^2.$$
Thus a step w next equal to w minus gradient divided by L decreases F by at least squared gradient norm divided by twice L.

This bound concerns the particular objective whose gradient was used. If F is a training average, it is a statement about training optimization. If F is a population expectation with an available exact gradient, it is a population optimization statement. Naming a method gradient descent does not identify which of those quantities is accessible.

## A full deterministic convex gradient rate

Assume F is convex and L-smooth on the whole space and attains a minimum at u. Expand the squared distance after the step above. Convexity bounds gradient inner product with w minus u below by the objective gap. The descent lemma bounds squared gradient norm above by twice L times the achieved objective decrease. Combining these two inequalities gives
$$F(w_{t+1})-F(u)
\\le\\frac L2\\{\\|w_t-u\\|^2-\\|w_{t+1}-u\\|^2\\}.$$
Sum from the initial point through T steps. The right side telescopes. Since objective values decrease, the last objective gap is no larger than their average. Hence
$$F(w_T)-F(u)\\le\\frac{L\\|w_0-u\\|^2}{2T}.$$
This proves an empirical optimization allowance when F is the empirical objective; it does not by itself bound the population-minus-empirical discrepancy.

If F is also lambda-strongly convex on the whole space, minimize its quadratic lower support at w to obtain objective gap at most squared gradient norm divided by twice lambda. Insert this in the descent decrease to get
$$F(w_{t+1})-F(u)\\le(1-\\lambda/L)\\{F(w_t)-F(u)\\}.$$
Iteration proves geometric objective convergence under these compatible smoothness and curvature assumptions. The unconstrained setting matters: an optimum on the boundary of a constrained set can have a nonzero gradient, and a projected theorem needs its own optimality comparison.

## Fresh-observation stochastic gradients

Let K be a nonempty closed convex set of diameter at most D. Suppose each observation loss is convex in the parameter and a measurable selected subgradient has norm at most G throughout K. Use a fresh iid observation at each step, independent of the current parameter conditional on the past. Its gradient expectation is a population subgradient: take expectation of the sample subgradient inequality, using integrability to exchange the fixed comparator terms.

With a fixed step eta, update by projection of w minus eta times that random subgradient. For any fixed comparator u in K, the projection squared-distance inequality gives
$$g_t^\\top(w_t-u)\\le
\\frac{\\|w_t-u\\|^2-\\|w_{t+1}-u\\|^2}{2\\eta}
+\\frac\\eta2G^2.$$
Conditioning on the past turns its left side into a valid upper comparator bound for population risk difference. Sum and take expectation. For the arithmetic average of the pre-update parameters, convexity and Jensen yield
$$E\\{F(\\bar w_T)-F(u)\\}
\\le\\frac{D^2}{2\\eta T}+\\frac{\\eta G^2}{2}.$$
For positive D and G, choosing eta equal to D divided by G square root T gives D G divided by square root T. If either constant is zero, the corresponding degenerate problem is treated directly rather than dividing by zero.

The output is the average, not an arbitrary last iterate. The number T counts fresh observations in this experiment. A horizon-dependent fixed step is a mathematical choice for this theorem; an anytime or adaptive step rule needs its corresponding analysis.

## A high-probability population comparator bound

For the same fixed u, subtract each realized subgradient inner product from its conditional expectation. The differences form martingale increments with conditional mean zero and range width at most twice G D. The conditional bounded-variable exponential lemma therefore bounds their cumulative upper fluctuation by G D times the square root of twice T log one over delta.

Combine this with the pathwise projection telescope and Jensen. With probability at least one minus delta,
$$F(\\bar w_T)-F(u)\\le
\\frac{D^2}{2\\eta T}+\\frac{\\eta G^2}{2}
+GD\\sqrt{\\frac{2\\log(1/\\delta)}T}.$$
This is a fresh-observation population statement, with an explicit fixed comparator and bounded oracle. It is not obtained by treating stochastic-gradient indices from one finite dataset as new population draws.

If population risk is lambda-strongly convex, step one divided by lambda t and the strengthened comparator inequality cancel the distance terms just as in online strongly convex regret. Averaging the expected gaps gives the bound $G^2(1+\\log T)/(2\\lambda T)$. This result still requires the stated bounded gradients and feasible-set assumptions; curvature alone does not bound the stochastic oracle.

### Worked example: bounded linear squared loss

Suppose input norm is at most C, outcomes have absolute value at most Y and coefficients are projected into a ball of radius B. Squared loss is convex and its gradient norm is at most $2C(Y+BC)$ by factoring the prediction residual. The feasible diameter is twice B. The expected averaged-SGD excess relative to any coefficient in that ball is therefore at most $4BC(Y+BC)/\\sqrt T$ under fresh iid observations.

Adding half lambda times coefficient norm squared adds lambda times the coefficient to the stochastic gradient and makes population risk lambda-strongly convex. The oracle bound changes too, by at most lambda B. A regularization improvement cannot keep the old gradient constant automatically while changing the objective.

## Reusing data changes the target of conditional unbiasedness

Given a fixed training set, sampling one index uniformly at random makes that selected observation gradient unbiased for the empirical average gradient at the current parameter, conditional on the dataset and past indices. It is not generally unbiased for the population gradient conditional on the dataset. The dataset was used to choose the current parameter and may have an empirical distribution different from the population.

The same optimization telescope can analyze the empirical objective, with expectations over index draws. To conclude learning, combine its objective allowance with a valid generalization result, such as the finite-class, Rademacher or stability theorem under its own conditions. Running many epochs can reduce optimization error without adding independent source observations. Epoch count is not an iid sample-size multiplier.

Without-replacement index shuffling has another conditional structure: after some indices are used, the next one is uniform among remaining indices rather than all of them. The elementary with-replacement unbiasedness calculation cannot simply be reused at every step. A shuffled-gradient theorem would need an additional argument.

## Mini-batches average noise, not the population gradient

At one fixed current parameter, suppose independent oracle gradients have the same conditional mean and conditional noise second moment at most sigma squared. Average b of them. Their centered cross terms have expectation zero by conditional independence, so the average noise second moment is at most sigma squared divided by b.

The average gradient second moment still includes squared norm of its mean. Thus the full G squared term in a crude bound need not divide by b merely because the noise variance does. Each update also consumed b fresh observations. A computational comparison should name both update count and observation budget.

### Worked example: averaging independent sign noise

Suppose the gradient at a parameter is a fixed vector plus independent scalar fair-sign noise of magnitude sigma in one fixed unit direction. A batch average retains that fixed vector and has noise variance sigma squared divided by b. Repeating the same noisy gradient b times would not reduce its variance, since the cross terms would no longer vanish. Independence, rather than a longer vector of stored copies, explains the variance reduction.

## Constant steps can leave a nonzero noise floor

A separate exact one-dimensional calculation illustrates a limitation. Let the objective be half a times squared distance to theta, with positive a, and use an oracle equal to its gradient plus independent mean-zero noise of variance sigma squared. A constant step eta makes the parameter error follow
$$e_{t+1}=(1-\\eta a)e_t-\\eta\\xi_t.$$
For eta strictly between zero and two over a, the squared-error recurrence is a contraction plus eta squared sigma squared. Its limiting second moment is
$$\\frac{\\eta\\sigma^2}{a(2-\\eta a)}.$$
This follows by taking conditional squares, removing the zero cross term and summing a geometric series. It is an exact recursion calculation, not an invocation of the bounded-oracle theorem if the noise or parameter range is unbounded.

### Worked example: optimization with and without oracle noise

With zero noise and step one over a, the same quadratic reaches its minimum in one update. With positive noise variance, the constant-step limiting squared error above is positive. More iterations under an unchanged noisy constant step do not make the last iterate exact. Averaging or an appropriately decreasing step can support a different guarantee, but its conditions and output must be stated.

The chapter therefore separates deterministic optimization, fresh-data stochastic learning and finite-data stochastic optimization. Each has a proved comparator statement here, and none is interchangeable with an unexamined convergence message.

## A biased oracle leaves an additional comparator term

The fresh-observation proof can quantify a controlled departure from unbiasedness. Suppose the conditional mean of the reported oracle differs from some population subgradient at the current point by a vector of norm at most b t. Keep the same almost-sure oracle norm bound and feasible diameter. The missing inner product with the comparator has absolute value at most D times b t by Cauchy–Schwarz. Insert that term before summing the projection inequality.

The expected average-output bound therefore gains D times the average of the b t values. If this average does not vanish, the proof permits a persistent population objective error even when the optimization term tends to zero. This is one reason an approximate gradient, an estimated importance ratio or a truncated numerical integral needs its own bias statement. A small variance alone does not establish that the oracle is centered on the intended population objective.

The same calculation applies to a deterministic gradient approximation with a uniform directional error bound. It concerns the supplied norm and comparator region; a bias bound in some unrelated coordinate scale cannot be inserted without converting its norm. If the current parameter depends on previous approximations, the condition must hold given that actual past, not only at one fixed prespecified parameter.

## A regularization comparison can be proved directly

Let F be the unpenalized population risk and minimize F plus half lambda times squared norm. For any feasible comparator u, the regularized minimizer has objective no larger than the regularized objective at u. Dropping its nonnegative penalty gives
$$F(w_\\lambda)-F(u)\\le\\frac\\lambda2\\|u\\|^2.$$
For an approximate output whose regularized population objective gap is at most a, the right side increases by a. This proves a comparator bias allowance rather than assuming every penalty improves prediction.

Combining an optimization theorem for the penalized objective with this inequality yields a population comparison consisting of its optimization or stochastic error plus this penalty allowance. Letting lambda decrease can reduce that allowance while worsening curvature-dependent optimization and stability constants. The tuning tradeoff follows from explicitly combining bounds with their lambda dependence; it cannot be resolved by treating the penalty as if it changed only one term. Deterministic descent, fresh-observation SGD and finite-data optimization thus control different comparator objectives, while regularization adds its own bias allowance. The next chapter, Boosting, derives progress from a reweighted training potential and then separately relates it to population risk.

## Exercises

<a id="convex-learning-and-sgd-ex-1"></a>

### Exercise 1

Prove the descent lemma from a Lipschitz gradient.

<details><summary>Hint 1</summary>

Integrate the gradient along the displacement segment.

</details>

<details><summary>Hint 2</summary>

Bound the difference from its starting value by L times segment distance.

</details>

<details><summary>Full solution</summary>

The remainder is $\\int_0^1[\\nabla F(w+t(v-w))-\\nabla F(w)]^\\top(v-w)\\,dt$, at most $\\int_0^1Lt\\|v-w\\|^2dt=L\\|v-w\\|^2/2$. This gives the stated quadratic upper support.

</details>

<a id="convex-learning-and-sgd-ex-2"></a>

### Exercise 2

Why does convex zero-gradient stationarity imply global optimality?

<details><summary>Hint 1</summary>

Use the subgradient inequality against every comparator.

</details>

<details><summary>Hint 2</summary>

At zero gradient its linear term vanishes.

</details>

<details><summary>Full solution</summary>

For every feasible v, convexity gives F of v at least F of w plus zero. Hence no comparator improves the value. Without convexity, the inequality need not hold, as the quartic-minus-quadratic example shows.

</details>

<a id="convex-learning-and-sgd-ex-3"></a>

### Exercise 3

Derive the deterministic gradient rate after T steps.

<details><summary>Hint 1</summary>

Use the distance-gap inequality and telescope.

</details>

<details><summary>Hint 2</summary>

Monotonicity bounds the last gap by the average.

</details>

<details><summary>Full solution</summary>

Summing gives $\\sum_{t=1}^T(F(w_t)-F(u))\\le L\\|w_0-u\\|^2/2$. Since these nonnegative gaps decrease, the final one is at most their mean, yielding the displayed inverse-T bound.

</details>

<a id="convex-learning-and-sgd-ex-4"></a>

### Exercise 4

What is the distinction between a fresh-observation oracle and uniform index sampling from a stored dataset?

<details><summary>Hint 1</summary>

Condition on the parameter and the available information.

</details>

<details><summary>Hint 2</summary>

Identify the mean objective gradient under that conditioning.

</details>

<details><summary>Full solution</summary>

A fresh iid observation gives a conditional population subgradient. Uniform index sampling conditional on a fixed dataset gives the empirical average gradient instead. The latter needs a separate generalization argument to become a population guarantee.

</details>

<a id="convex-learning-and-sgd-ex-5"></a>

### Exercise 5

Prove the expected projected-SGD comparison for an average output.

<details><summary>Hint 1</summary>

Take conditional expectation of the projection telescope.

</details>

<details><summary>Hint 2</summary>

Use convexity to move from average risk to risk of the average.

</details>

<details><summary>Full solution</summary>

The expected gradient inner product bounds the population comparator gap. Sum the distance inequality, bound its initial distance by D squared and gradient second moments by G squared, divide by T and apply Jensen. The result is $D^2/(2\\eta T)+\\eta G^2/2$.

</details>

<a id="convex-learning-and-sgd-ex-6"></a>

### Exercise 6

Why is a last-iterate guarantee not implied by the average-output theorem?

<details><summary>Hint 1</summary>

Jensen controls one specific convex average.

</details>

<details><summary>Hint 2</summary>

A small sum permits occasional bad iterates.

</details>

<details><summary>Full solution</summary>

The proof bounds average objective gaps and then risk of their arithmetic average. It does not bound every individual term. A sequence with sparse large gaps can have a small average and a nonconverging last-iterate subsequence, as the online chapter demonstrates.

</details>

<a id="convex-learning-and-sgd-ex-7"></a>

### Exercise 7

Show the mini-batch noise variance reduction and its independence requirement.

<details><summary>Hint 1</summary>

Expand the squared norm of the mean centered gradient.

</details>

<details><summary>Hint 2</summary>

Cross terms vanish only under the stated conditional independence.

</details>

<details><summary>Full solution</summary>

There are b diagonal noise second moments, each at most sigma squared, divided by b squared. Every centered cross term has expectation zero, giving at most sigma squared divided by b. Copies of the same noise retain nonzero cross terms and do not receive this reduction.

</details>

<a id="convex-learning-and-sgd-ex-8"></a>

### Exercise 8

Compute the constant-step quadratic noise floor.

<details><summary>Hint 1</summary>

Square the error recursion and condition on the past.

</details>

<details><summary>Hint 2</summary>

Sum its geometric recurrence.

</details>

<details><summary>Full solution</summary>

The second moment obeys $v_{t+1}=(1-\\eta a)^2v_t+\\eta^2\\sigma^2$. Its limit is $\\eta^2\\sigma^2/[1-(1-\\eta a)^2]=\\eta\\sigma^2/[a(2-\\eta a)]$ when the contraction factor is below one.

</details>

<a id="convex-learning-and-sgd-ex-9"></a>

### Exercise 9

Explain why strong convexity alone does not establish the logarithmic-over-T stochastic bound.

<details><summary>Hint 1</summary>

The telescope still contains oracle second moments.

</details>

<details><summary>Hint 2</summary>

Those need a finite uniform bound or a different variance analysis.

</details>

<details><summary>Full solution</summary>

Strong convexity supplies the negative distance term and a useful step schedule, but unbounded uncontrolled stochastic gradients can make the remaining second-moment sum infinite. The stated theorem explicitly assumes bounded selected gradients; another tail or moment theorem would be needed otherwise.

</details>

<a id="convex-learning-and-sgd-ex-10"></a>

### Exercise 10

A solver makes many passes over one sample and reports near-zero empirical objective gap. Which part of the excess-risk argument is still missing?

<details><summary>Hint 1</summary>

The objective gap concerns empirical optimization.

</details>

<details><summary>Hint 2</summary>

Population approximation and generalization are separate terms.

</details>

<details><summary>Full solution</summary>

More index draws can reduce the empirical optimization allowance without changing the original sample law or class approximation. A valid population-minus-empirical bound and a comparator approximation statement remain necessary. Reusing rows is not equivalent to obtaining more independent population observations.

</details>
`;export{e as default};