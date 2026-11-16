
# The Representer Theorem and Kernel Ridge Regression

## Finite data reduce an infinite-dimensional optimization

A reproducing-kernel Hilbert space can be infinite-dimensional, but an objective depending on finitely many evaluations and a norm penalty often has a minimiser in the finite span of data sections. This is the representer principle. It is a deterministic optimisation theorem, requiring neither a Gaussian probability model nor the compactness hypotheses of Mercer theory.

This expands [Kernel Ridge and GP Means](../structured-probabilistic-learning/kernel-ridge-and-gp-means.md), preserving its original example and solutions in that earlier source. Here we prove the representer statement, derive kernel ridge even for singular Gram matrices, and establish the exact leave-one-out identity with its penalty convention. The later GP chapter will separately derive the probability law whose mean matches this optimisation.

Let H be the RKHS of k and let S be the span of sections at the training inputs. It is finite-dimensional and therefore closed. Every function decomposes orthogonally as $f=f_S+f_\perp$. Reproduction gives $f_\perp(x_i)=0$ for every observed input, while Pythagoras gives $\|f\|_H^2=\|f_S\|_H^2+\|f_\perp\|_H^2$. These two identities are the entire geometric basis of the theorem.

## A full representer statement and existence conditions

**Theorem 4.1 (Representer principle).** Consider an objective $L(f(x_1),\ldots,f(x_n))+\Omega(\|f\|_H)$ with nondecreasing Omega. Replacing a candidate by its projection onto S leaves L unchanged and cannot increase the penalty. Therefore, if a minimiser exists, at least one lies in S; the infimum over H equals the infimum over S. If Omega is strictly increasing, every minimiser lies there, since a nonzero orthogonal part would strictly worsen it.

Existence is a separate issue. For squared loss plus a positive multiple of squared norm, restriction to S gives a continuous coercive objective in a finite-dimensional Hilbert space, so its bounded sublevel sets are compact and it attains a minimum. Strict convexity of the squared norm makes the full objective strictly convex, so the minimizing function is unique. More generally a lower-semicontinuous bounded-below loss with that penalty has existence by the same finite-dimensional compactness, but uniqueness needs convexity conditions.

A merely nondecreasing penalty can leave extra orthogonal minimisers if it is flat over a relevant norm interval. The theorem's conclusion is then existence of a representer among minimisers, not a statement that all minimisers have that form. Nor does the theorem ensure existence for an arbitrary discontinuous loss or a penalty that fails to prevent escape. The hypotheses must accompany the version being used.

## Kernel ridge without canceling a singular matrix

**Definition 4.2 (Kernel ridge objective).** Use the sum-loss convention
$$
\min_{f\in H}\sum_i(y_i-f(x_i))^2+\lambda\|f\|_H^2,\qquad\lambda>0.
$$
**Theorem 4.3 (Kernel ridge solution).** For the stated squared-loss objective with positive penalty, there is a unique minimising function and the canonical shifted-system representation below, even if its Gram matrix is singular. The first-order condition in every Hilbert direction h is
$$
\lambda\langle f,h\rangle_H=\sum_i(y_i-f(x_i))h(x_i).
$$
Reproduction identifies the unique function as a section combination with canonical coefficients alpha equal to its residual vector divided by lambda. Evaluating at data gives $\lambda\alpha=y-K\alpha$, hence
$$
(K+\lambda I)\alpha=y,\qquad \widehat f(x)=k_x^T\alpha.
$$
The shifted matrix is positive definite even when K is singular. Conversely its solution satisfies the Hilbert first-order condition and is therefore the unique minimiser by strict convexity. This completes the derivation without incorrectly canceling K from a finite-coordinate gradient.

Other coefficient vectors differing by a null vector of K represent the same function, since their RKHS norm difference is zero. The canonical shifted solve selects one coefficient vector but does not make every representation unique. The fitted values are $Hy$ with $H=K(K+\lambda I)^{-1}$. Its eigenvalues are the nonnegative Gram eigenvalues divided by themselves plus lambda, so they lie in the interval from zero inclusive to one exclusive.

If the objective instead averages the squared losses and keeps penalty lambda, multiply by n to see that the shifted matrix is $K+n\lambda I$. The numerical parameter called lambda therefore depends on the loss normalisation. Matching a GP noise variance or comparing software outputs requires that scaling convention, not just matching a parameter name.

## Worked example 1: a rank-one constant kernel

**Example 4.4 (a rank-one constant kernel).** For k identically one, H consists of constant functions c with squared norm c squared. The objective is the sum of $(y_i-c)^2$ plus lambda times c squared. Differentiation gives $c=\sum_i y_i/(n+\lambda)$. The singular all-ones Gram matrix therefore causes no difficulty for positive regularisation.

The canonical coefficients are $(y_i-c)/\lambda$, and their sum is c, verifying the represented constant function. Individual coefficients can vary when another null vector is added, while every prediction and the function norm stay unchanged. A zero-mean unit-variance constant Gaussian prior with independent noise variance lambda has that same posterior mean but additionally has latent variance lambda divided by n plus lambda. The optimisation alone does not provide that probability statement.

## Regularization, interpolation and limiting fits

At a fixed positive lambda, the finite objective trades data residuals against H norm. As lambda tends to infinity, comparison with the zero function bounds the solution norm by the data norm divided by square root lambda, so it tends to zero in H and hence at each input. This is a deterministic shrinking statement, not a claim that large regularisation describes high observation noise unless a noise model is adopted.

At lambda equal to zero, exact interpolation is feasible precisely when y belongs to the range of K. If feasible, the minimum-norm interpolant has coefficients $K^+y$ and norm squared $y^TK^+y$, where the pseudoinverse is taken in the spectral range. To prove it, every feasible function can be projected onto S without changing its values, and among section coefficients the spectral equation K alpha equal to y determines exactly the nonnull components. Null components represent zero function.

If y has a component outside that range, no H function interpolates it. As positive lambda decreases to zero, the fitted-value vector converges to the orthogonal Euclidean projection of y onto the Gram range. Some canonical coefficient components can diverge in null directions, but they multiply a zero RKHS function. Thus coefficient size alone can be misleading in a redundant representation; function values and a declared norm are the appropriate invariant quantities.

## Worked example 2: affine features and ridge geometry

**Example 4.5 (affine features and ridge geometry).** Use features $(1,x)$, inputs minus one, zero and one, and responses zero, one and zero. The feature cross-product is diagonal with entries three and two, while its response cross-product is $(1,0)^T$. Under the unit Euclidean coefficient norm induced by this kernel, the ridge coefficients are intercept $1/(3+\lambda)$ and slope zero.

At lambda one the fit is the constant one quarter. Its failure to reproduce the middle bump is partly a feature-family restriction: an affine function cannot interpolate those three responses. Letting lambda decrease to zero gives the least-squares constant one third rather than exact interpolation. A richer kernel changes the admissible functions, while reducing lambda only changes the penalty within the same function space.

Penalizing the intercept differently or leaving it unpenalized changes this objective. It is often useful, but must be derived as a modified model with an explicit unpenalized finite-dimensional component. The bare shifted-kernel formula here assumes every component belongs to the declared penalized H norm.

## A full leave-one-out identity

Hold the sum-loss penalty lambda fixed when deleting one observation. Let $C=(K+\lambda I)^{-1}$ and alpha equal C y. Partition the shifted matrix into the selected diagonal entry, its cross row b, and the remaining block A. The coefficient equation or block Gaussian elimination gives
$$
\alpha_i=\frac{y_i-b^TA^{-1}y_{-i}}{K_{ii}+\lambda-b^TA^{-1}b},\qquad
C_{ii}=\frac1{K_{ii}+\lambda-b^TA^{-1}b}.
$$
The numerator is the residual at that point using the fit trained on every other point. Therefore its leave-one-out residual is alpha i divided by C i i. Since $I-H=\lambda C$, it is also
$$
y_i-\widehat f_{-i}(x_i)=\frac{y_i-\widehat f(x_i)}{1-H_{ii}}.
$$
The denominator is positive because C is positive definite and lambda positive. This proves the shortcut even when the latent Gram is singular. If deletion changes a mean-loss scaling, retunes lambda, changes preprocessing or refits the kernel, those deleted fits are another procedure and this fixed-matrix identity need not apply.

## Worked example 3: a kernel with no unseen-location transfer

**Example 4.6 (a kernel with no unseen-location transfer).** On a set of distinct training inputs use the delta kernel, one on identical inputs and zero otherwise. Then K is the identity and each fitted training value is $y_i/(1+\lambda)$. At an input never appearing in training, its cross-kernel vector is zero, so the predicted function value is zero regardless of the recorded responses.

A GP with that latent covariance and independent noise variance lambda has the same mean, but its unseen latent variance remains one, the prior variance. The regularised zero prediction does not by itself mean the function is known to vanish there. It represents the minimum-norm extrapolation within this RKHS, while the probabilistic model explicitly retains independent uncertainty at the new location.

This example also shows that a valid kernel and an efficient solve do not guarantee a useful inductive assumption. Whether unrelated locations should share information is a modelling question. A kernel that treats them as independent cannot learn smooth transfer merely by lowering its regularisation parameter.

## General quadratic weighting and matched Gaussian means

For a positive-definite record covariance R, consider the objective $(y-f_X)^TR^{-1}(y-f_X)+\|f\|_H^2$. The same Hilbert derivative gives canonical coefficients equal to $R^{-1}(y-K\alpha)$, so $(K+R)\alpha=y$. A GP with kernel K and independent-from-function Gaussian record noise covariance R has this posterior mean. Correlation among record noises is therefore representable, but it changes the loss weighting and observation covariance.

When K is positive definite, the finite latent vector has a Gaussian density with quadratic penalty $f_X^TK^{-1}f_X$. Its posterior mode under Gaussian noise matches the kernel ridge fitted vector, and the representer theorem selects the minimum-H-norm extension. This is a finite-vector density argument. A general infinite-dimensional GP has no flat reference measure with an ordinary density over all functions, so it does not automatically yield a global MAP function by the same calculation.

A fixed function penalty also does not prescribe a marginal likelihood. Bare kernel ridge has no data-generating probability model to integrate. Cross-validation estimates a declared predictive risk under a resampling design; marginal likelihood integrates a declared likelihood and prior. Their agreement in a mean formula does not make those selection objectives identical.

## Effective degrees of freedom and their limited meaning

For this fixed linear smoother, the trace of H sums its spectral shrinkage factors and is often called an effective degrees of freedom. It lies between zero and the Gram rank. This is a measure of sensitivity of fitted values to responses for the fixed kernel and lambda, not simply the number of nonzero coefficients or a universal description of model complexity after tuning.

If lambda or the kernel is selected using the same data, the overall estimator need not be linear in y and the trace of its final fixed H omits selection sensitivity. Conditional Gaussian uncertainty, frequentist risk and post-selection uncertainty are distinct analyses. The learning-theory book treats generalization under separate sampling and capacity assumptions; the representer theorem alone proves no out-of-sample guarantee.

The next chapter applies the same finite-span geometry to margin classification. Its hinge loss changes the optimisation and decision target, while reproducing sections still provide the finite representation. The GP chapters then use the same covariance algebra for probability distributions, retaining the distinction between a fitted mean and a full conditional law.

## Monotonic shrinkage is a fixed-design statement

For a fixed kernel matrix, increasing the positive penalty decreases every nonnull spectral fitted-value factor from s divided by s plus lambda. Thus the squared Euclidean length of fitted values decreases with the penalty for each fixed response vector, while the squared residual length increases. This follows by resolving the response into orthonormal Gram eigenvectors and comparing each scalar factor. It is a deterministic fit tradeoff, not a statement that future prediction risk is monotone. Bias, noise and the distribution of new inputs determine that separate risk. Changing the kernel while tuning the penalty also invalidates a comparison that assumed fixed eigenvectors.

## Exercises

<a id="representer-theorem-kernel-ridge-ex-1"></a>

### Exercise 1

Prove the representer projection step.

<details><summary>Hint 1</summary>

Project onto the span of training sections.

</details>

<details><summary>Hint 2</summary>

The orthogonal remainder vanishes at every data input.

</details>

<details><summary>Full solution</summary>

Reproduction makes each remainder evaluation its inner product with a training section, hence zero. Projection preserves all observed values and therefore the loss. Pythagoras shows its norm cannot increase, so a nondecreasing norm penalty cannot worsen. Strictly increasing penalty excludes a nonzero remainder in any minimiser. Existence still needs its separate assumptions.

</details>

<a id="representer-theorem-kernel-ridge-ex-2"></a>

### Exercise 2

Why is canceling K from the finite-coordinate gradient invalid for a singular Gram matrix?

<details><summary>Hint 1</summary>

K can have a nontrivial null space.

</details>

<details><summary>Hint 2</summary>

Use the Hilbert first-order equation instead.

</details>

<details><summary>Full solution</summary>

The equation K times another vector equal to zero only places that vector in the null space, not necessarily at zero. The Hilbert derivative instead identifies the function as a residual-weighted section combination and defines canonical coefficients. Those coefficients satisfy the shifted system directly, which is invertible for positive lambda even when K itself is singular.

</details>

<a id="representer-theorem-kernel-ridge-ex-3"></a>

### Exercise 3

Convert a mean squared-loss objective to the shifted matrix convention.

<details><summary>Hint 1</summary>

Multiply the whole objective by sample size.

</details>

<details><summary>Hint 2</summary>

Track the penalty coefficient.

</details>

<details><summary>Full solution</summary>

An average squared loss plus lambda times squared norm is equivalent to a sum loss plus n lambda times squared norm. Its canonical coefficient solve therefore uses K plus n lambda identity. Matching a sum-loss formula with the same named lambda would impose a different regularisation strength.

</details>

<a id="representer-theorem-kernel-ridge-ex-4"></a>

### Exercise 4

Compute the constant-kernel ridge fit.

<details><summary>Hint 1</summary>

Optimize over its only function value c.

</details>

<details><summary>Hint 2</summary>

Differentiate the scalar quadratic.

</details>

<details><summary>Full solution</summary>

The derivative is twice n c minus twice the response sum plus twice lambda c. Setting it to zero gives the response sum divided by n plus lambda. The second derivative is strictly positive, so this is the unique function minimiser. Singularity of the all-ones Gram matrix does not prevent the positive shifted solve.

</details>

<a id="representer-theorem-kernel-ridge-ex-5"></a>

### Exercise 5

When is exact interpolation feasible?

<details><summary>Hint 1</summary>

Every finite-span evaluation vector lies in the Gram range.

</details>

<details><summary>Hint 2</summary>

Projection of any feasible function preserves evaluations.

</details>

<details><summary>Full solution</summary>

It is feasible exactly when y is in the range of K. Necessity follows by projecting a putative interpolating function into the section span; sufficiency follows by choosing coefficients solving K alpha equal to y. The minimum-norm choice uses the spectral pseudoinverse on that range. Outside it, no function in the RKHS can interpolate all recorded values.

</details>

<a id="representer-theorem-kernel-ridge-ex-6"></a>

### Exercise 6

Why can canonical coefficients diverge while represented functions have a finite zero-penalty limit?

<details><summary>Hint 1</summary>

Inspect a null eigenvector of K.

</details>

<details><summary>Hint 2</summary>

Its section combination is the zero function.

</details>

<details><summary>Full solution</summary>

A response component in a Gram-null direction is divided by lambda in the canonical shifted solve and can diverge as lambda vanishes. That coefficient direction nevertheless represents zero RKHS function and affects no prediction. The nonnull components converge to the least-squares projection solution. Coefficient magnitude therefore needs interpretation relative to representation redundancy.

</details>

<a id="representer-theorem-kernel-ridge-ex-7"></a>

### Exercise 7

What is the leave-one-out residual in terms of alpha and the inverse diagonal?

<details><summary>Hint 1</summary>

Use the block Schur complement.

</details>

<details><summary>Hint 2</summary>

Its reciprocal is the corresponding inverse diagonal.

</details>

<details><summary>Full solution</summary>

The selected alpha entry equals the leave-one-out residual divided by the same Schur complement whose reciprocal is C i i. Therefore the residual is alpha i divided by C i i. Substituting the full residual and one minus the smoother diagonal through I minus H equal lambda C gives the familiar ratio. The deleted fits must retain the stated fixed sum-loss penalty.

</details>

<a id="representer-theorem-kernel-ridge-ex-8"></a>

### Exercise 8

Why can the delta-kernel zero prediction at an unseen input coexist with unit GP latent variance?

<details><summary>Hint 1</summary>

The cross-kernel vector vanishes.

</details>

<details><summary>Hint 2</summary>

The new latent coordinate is independent of training coordinates under that GP.

</details>

<details><summary>Full solution</summary>

Both ridge and GP mean formulas return zero because no recorded value shares a nonzero covariance with the new input. In the GP model that new coordinate still has prior variance one and receives no information, so its posterior variance remains one. The ridge point prediction alone cannot express this retained uncertainty without adopting the probability model.

</details>

<a id="representer-theorem-kernel-ridge-ex-9"></a>

### Exercise 9

Does the representer theorem itself prove generalization?

<details><summary>Hint 1</summary>

It is a deterministic statement about a finite-data objective.

</details>

<details><summary>Hint 2</summary>

Out-of-sample risk needs a sampling model and further bounds.

</details>

<details><summary>Full solution</summary>

No. The theorem reduces the optimisation to a finite section span and can establish its minimiser. It does not say how the recorded inputs and outcomes were sampled or control risk at new inputs. Generalization needs distributional, capacity, stability or other statistical assumptions. A valid kernel and a unique optimum do not supply them automatically.

</details>

<a id="representer-theorem-kernel-ridge-ex-10"></a>

### Exercise 10

Why is the final trace of H incomplete after response-dependent tuning?

<details><summary>Hint 1</summary>

The fixed-parameter smoother is linear.

</details>

<details><summary>Hint 2</summary>

The selected parameter can change with the response vector.

</details>

<details><summary>Full solution</summary>

Trace H measures response sensitivity while its kernel and penalty are held fixed. If the fitting procedure selects them using y, its overall response map includes those changes and may be nonlinear or discontinuous. Treating the final trace as the whole procedure degrees of freedom omits that selection contribution and requires a separate justification.

</details>
