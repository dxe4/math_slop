var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: sparse-scalable-gaussian-processes
title: "Sparse and Scalable Gaussian Processes"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Sparse and Scalable Gaussian Processes

## Approximate a model or approximate its posterior

An inducing-variable method uses function values at a smaller collection of inputs to reduce computation. There are two fundamentally different uses: replacing the prior covariance by a low-rank one changes the probability model, while restricting a variational posterior can retain the original GP target. Their formulas can look similar, so the approximation object must be stated explicitly.

**Definition 11.1 (Inducing variables).** Let X be n training inputs and U be m inducing inputs, with m potentially much smaller. Assume the inducing Gram matrix is positive definite and observation noise variance v is positive. Zero mean simplifies notation. The joint prior of training values f and inducing values u gives
$$
B=K_{fU}K_{UU}^{-1},\\qquad Q_{ff}=K_{fU}K_{UU}^{-1}K_{Uf},\\qquad
f\\mid u\\sim N(Bu,K_{ff}-Q_{ff}).
$$
The residual covariance is positive semidefinite by Gaussian conditioning. This remains true if the full joint prior is singular, since the observed inducing block alone was required invertible. Choosing repeated inducing inputs can violate that assumption and needs a reduced representation instead of an ordinary inverse.

## Low-rank prior replacement

The function $q(x,z)=k_{xU}K_{UU}^{-1}k_{Uz}$ is a valid kernel: after a matrix square root it is a finite feature inner product. Replacing the original kernel by q produces a rank-at-most-m GP, often called a subset-of-regressors construction. Gaussian conditioning under that covariance is exact for the replacement model. It is not exact conditioning for the original kernel unless the residual vanishes on the relevant inputs and queries.

The deterministic covariance error $k-q$ is itself a positive kernel, as seen from every finite conditional residual block. Its diagonal measures prior variance not represented by the inducing projection. A point with zero covariance to all inducing inputs has q diagonal zero and is deterministic under the replacement model even if its original prior variance was positive. This can create excessive certainty rather than merely a small perturbation of an otherwise correct posterior.

Some finite-matrix methods add a diagonal residual correction to the training covariance. That is a positive-semidefinite approximation to an observation matrix, but its function-space interpretation needs care at repeated inputs. Independent record-specific residuals are not automatically the same latent function value when inputs coincide. A declared observation approximation is legitimate; silently identifying it with a coherent input-indexed kernel is another claim.

## Variational inducing inference keeps the target prior

Instead retain the original GP and choose the approximate joint family
$$
q(f,u)=p(f\\mid u)q(u).
$$
The conditional is the original prior conditional, while the inducing marginal is free. Its evidence lower bound is
$$
\\mathcal L(q)=E_q\\log p(y\\mid f)-D(q(u)\\|p(u)).
$$
To prove this, apply the general joint ELBO identity and cancel the shared conditional $p(f\\mid u)$ in the prior-to-approximation likelihood ratio. The remaining divergence from the approximate joint law to the true posterior is nonnegative. Gaussian residual degeneracy is allowed when interpreted through these conditional probability kernels; no full-dimensional density for a singular f block is required.

For independent Gaussian observation noise, conditional expectation of squared residuals gives
$$
E_{f\\mid u}\\|y-f\\|^2=\\|y-Bu\\|^2+\\operatorname{tr}(K_{ff}-Q_{ff}).
$$
Thus the bound is the ordinary ELBO of a low-rank linear observation model for u, minus a fixed trace penalty divided by twice v. This separation permits a closed-form optimal inducing marginal.

## Deriving the optimal Gaussian bound

**Theorem 11.2 (Optimal Gaussian inducing bound).** For the stated positive-noise regression model and fixed invertible inducing block, the optimal variational marginal and evidence lower bound are the expressions below. The maximizing q u is the exact Gaussian posterior in the auxiliary model with prior covariance K U U and likelihood $y\\mid u\\sim N(Bu,vI)$. Completing its quadratic exponent gives
$$
S^{-1}=K_{UU}^{-1}+v^{-1}B^TB,\\qquad m=v^{-1}SB^Ty.
$$
The unrestricted optimum over all inducing probabilities is already Gaussian, by the exact posterior ELBO identity. Substituting its optimal evidence yields
$$
\\mathcal L^*=\\log N(y;0,Q_{ff}+vI)
-\\frac{1}{2v}\\operatorname{tr}(K_{ff}-Q_{ff}).
$$
This is a genuine lower bound on the original model's log evidence under the stated Gaussian model. The low-rank prior likelihood is only the first term; omitting the trace penalty changes the objective and its interpretation. The penalty records discarded conditional function variation rather than an arbitrary regularizer appended for appearance.

The original GP posterior need not belong to the restricted family, since data can update residual directions that the fixed conditional leaves unchanged. Even the exact optimum can therefore have nonzero approximation error. Improving an inducing-point optimizer addresses its objective, not automatically the exact evidence or every predictive functional.

## Predictions retain the conditional residual

For a test value the variational law integrates its original prior conditional given u against $N(m,S)$. Total expectation and covariance give
$$
\\mu_*=k_{*U}K_{UU}^{-1}m,
$$
$$
v_*=k_{**}-k_{*U}K_{UU}^{-1}k_{U*}
+k_{*U}K_{UU}^{-1}SK_{UU}^{-1}k_{U*}.
$$
The first two terms are the prior residual variance outside the inducing span; the last propagates inducing uncertainty. A low-rank-prior prediction omits that residual because its prior removed those directions altogether. These are different probability distributions even when their means happen to match.

For Gaussian regression S is no larger than the inducing prior covariance in matrix order, so this variational covariance is no larger than the original prior covariance. It can nevertheless be larger or smaller than the exact posterior covariance in a particular direction; no universal ordering relative to the exact posterior follows merely from the word variational. Evaluate the target and approximation directly.

## Worked example 1: a finite-rank prior represented exactly

**Example 11.3 (a finite-rank prior represented exactly).** For a constant kernel one, choose one inducing input. Every latent value equals its inducing value, so the conditional residual is zero at all training and test inputs. The variational family then contains the exact posterior, the trace penalty vanishes, and the inducing posterior is the familiar scalar constant-function update.

This is exact despite the full training Gram having rank one. Requiring an invertible full latent covariance would incorrectly exclude it; positive observation noise makes the evidence covariance invertible. The inducing covariance is the scalar one and causes no inverse difficulty. Sparse computation can be exact when it captures the entire prior feature span, rather than approximate solely because its matrix is smaller.

## Worked example 2: a Brownian endpoint misses interior variation

**Example 11.4 (a Brownian endpoint misses interior variation).** On the unit interval with Brownian kernel, use only the endpoint one as an inducing input. The low-rank kernel is x times z, while the conditional residual is minimum of x and z minus their product, the bridge covariance. Its diagonal is $x(1-x)$, largest at the midpoint.

For one noisy observation at the midpoint, the exact prior variance is one half, the projected variance one quarter and the residual trace one quarter. The optimal bound is
$$
\\log N(y;0,1/4+v)-\\frac1{8v},
$$
whereas the exact log evidence is $\\log N(y;0,1/2+v)$. As v tends to zero at fixed y, the trace penalty tends to minus infinity even though the exact evidence remains finite. The restricted posterior is particularly poor for almost noiseless data in the omitted bridge direction.

Adding the midpoint to the inducing set captures that observed latent value exactly. On this one-observation problem the training residual becomes zero and the exact likelihood and posterior can be recovered through the inducing representation. Selection of inducing locations should therefore consider the information and queries being represented, not just geometric spacing alone.

## Worked example 3: an independent direction cannot be learned through unrelated inducing values

**Example 11.5 (an independent direction cannot be learned through unrelated inducing values).** Use a delta kernel at two distinct training locations and place the only inducing variable at the first. The second latent value is independent of the inducing variable. In the restricted family its approximate posterior remains the original unit normal, regardless of the second response. The true posterior there has mean $y_2/(1+v)$ and variance $v/(1+v)$.

This discrepancy is a family limitation, not a failed optimisation of q u. The auxiliary observation model cannot transmit information about the second latent direction through an independent inducing value. A low-rank prior would be still different, declaring that second latent value zero. Adding the second inducing location removes this limitation in the finite example.

The example explains why a small inducing posterior covariance alone does not establish overall uncertainty control. Directions outside its span can remain unchanged or be removed, depending on which approximation was chosen. The prediction formula must retain the declared residual interpretation.

## Nested inducing sets and exactness at the data

When one inducing set contains another, its variational family can reproduce the smaller-set approximate process. Choose the larger inducing marginal by keeping the original conditional law of its extra variables given the smaller ones and using the smaller variational marginal. The resulting process marginal is unchanged, and the chain rule for divergence cancels that retained conditional. Therefore the optimal bound cannot decrease under such a nested enlargement.

This compares optimal values. An imperfect numerical fit with more inducing variables can achieve a worse reported bound, and nonnested location sets need not be ordered. If all distinct training inputs with invertible training Gram are included, their conditional residual vanishes at the data. Choosing their exact posterior then recovers exact posterior predictions through the original conditional GP. The case of singular training Grams needs a basis of their actual span rather than duplicate inverses.

Monotone improvement of an optimal lower bound does not alone quantify prediction error. It can control an appropriate posterior divergence through the exact evidence gap if that gap is known, but the lower bound itself does not supply the unknown exact evidence. Comparisons across hyperparameters also have unequal variational gaps.

## Reduced linear algebra and its cost

Whiten inducing values using a Cholesky factor of K U U, and let W be the resulting n-by-m feature matrix satisfying Q equal W W transpose. The matrix determinant lemma gives
$$
\\log\\det(vI+WW^T)=n\\log v+\\log\\det(I_m+v^{-1}W^TW).
$$
Block elimination or direct multiplication gives the inverse action through a diagonal solve and one m-dimensional system. Forming W transpose W costs order n m squared and factoring the small system costs order m cubed. Storing W costs order n m, with streaming alternatives for some quantities; full test covariances can add their own output cost.

These formulas are exact for the low-rank matrix appearing in the bound. They do not erase its approximation gap to the original model. Ill-conditioned inducing Grams still need stable solves, and changing them with jitter changes the covariance used in the construction. A fast factorization and a small matrix are computational facts, not independent accuracy certificates.

## What scalability claims should retain

An analysis should state whether the prior or the posterior family was changed, how inducing variables were selected, which residual terms are retained, and which target is approximated. Storage and arithmetic claims need the number of inducing variables, input-evaluation costs and the requested predictions. A method scalable for marginal means may still be expensive for a dense joint covariance over many queries.

Non-Gaussian likelihoods can use the same inducing conditional family, but their expected log likelihood may require quadrature or another approximation, and the closed Gaussian optimum above no longer follows. The classification chapter supplies the relevant likelihood distinction. The following random-feature chapter offers another finite representation, with a probability bound for its kernel error and an explicit connection to downstream solve sensitivity.

## Residual trace is a geometric training-design quantity

The inducing projection of a kernel section has coefficients $K_{UU}^{-1}k_{Ux}$, by the finite projection normal equations. Its squared residual norm is exactly $k(x,x)-q(x,x)$. Consequently the trace penalty sums those squared projection residuals over the training locations. It depends on their design and kernel geometry, not on the observed response values when parameters are fixed.

If each diagonal residual is at most delta, the trace penalty is at most n delta divided by twice the noise variance. This bounds that one term, not the whole exact evidence gap: the low-rank log density also differs from the full covariance density. As sample size grows, a small average omitted variance can still accumulate in the total objective. Prediction at a new location additionally needs its own cross-covariance and residual control. A training trace alone is not a universal query-error certificate.

## Exercises

<a id="sparse-scalable-gaussian-processes-ex-1"></a>

### Exercise 1

Why is the inducing residual covariance positive semidefinite?

<details><summary>Hint 1</summary>

Condition the joint prior on u.

</details>

<details><summary>Hint 2</summary>

Only its inducing block needs an ordinary inverse.

</details>

<details><summary>Full solution</summary>

The residual is the covariance of f minus its Gaussian linear prediction from u, so every quadratic form is a variance. It is therefore positive semidefinite. The proof allows singularity in the full latent vector but assumes the inducing covariance block is positive definite. Repeated inducing variables need a reduced representation rather than an invalid inverse.

</details>

<a id="sparse-scalable-gaussian-processes-ex-2"></a>

### Exercise 2

Prove that the low-rank kernel q is valid.

<details><summary>Hint 1</summary>

Factor the inducing covariance inverse.

</details>

<details><summary>Hint 2</summary>

Use transformed cross-kernel vectors as features.

</details>

<details><summary>Full solution</summary>

A symmetric square root of the positive-definite inducing inverse maps each cross vector to an m-dimensional feature. Their inner product is exactly q. Every finite Gram form is consequently a feature norm square. This proves validity of the replacement prior, but not its accuracy relative to the original kernel or posterior.

</details>

<a id="sparse-scalable-gaussian-processes-ex-3"></a>

### Exercise 3

Where does the trace penalty in the Gaussian variational bound come from?

<details><summary>Hint 1</summary>

Average squared observation residuals over the conditional f given u.

</details>

<details><summary>Hint 2</summary>

Use conditional variance plus squared conditional mean error.

</details>

<details><summary>Full solution</summary>

The expected squared residual equals the squared difference from B u plus the trace of conditional covariance K minus Q. Gaussian log likelihood multiplies this by minus one over twice noise variance. The trace term is independent of q u and remains after optimising it. Dropping it yields the low-rank prior evidence instead of the original-model lower bound.

</details>

<a id="sparse-scalable-gaussian-processes-ex-4"></a>

### Exercise 4

Why is the optimal inducing marginal Gaussian?

<details><summary>Hint 1</summary>

The remaining objective is an exact linear-Gaussian ELBO.

</details>

<details><summary>Hint 2</summary>

Its unrestricted maximiser is its posterior.

</details>

<details><summary>Full solution</summary>

After removing the fixed residual trace penalty, the objective is the ELBO for a Gaussian prior on u and Gaussian observation likelihood with mean B u. Its exact posterior maximizes that ELBO over all inducing probabilities. Completing the square gives the displayed Gaussian mean and covariance, so restricting q u to Gaussians loses nothing for this particular optimisation.

</details>

<a id="sparse-scalable-gaussian-processes-ex-5"></a>

### Exercise 5

Which term distinguishes variational test variance from low-rank-prior variance?

<details><summary>Hint 1</summary>

The original prior conditional has a residual covariance.

</details>

<details><summary>Hint 2</summary>

Check the first two terms in the prediction formula.

</details>

<details><summary>Full solution</summary>

The variational law retains prior conditional variance k diagonal minus the inducing projection quadratic. The low-rank replacement prior removed that direction, so it has no such residual. Both propagate uncertainty from u, but their latent variance targets differ. Matching means cannot identify their full predictive laws.

</details>

<a id="sparse-scalable-gaussian-processes-ex-6"></a>

### Exercise 6

Compute the Brownian midpoint residual with endpoint inducing value.

<details><summary>Hint 1</summary>

The prior variance is one half.

</details>

<details><summary>Hint 2</summary>

The endpoint projection has variance one quarter.

</details>

<details><summary>Full solution</summary>

The residual is one quarter. Its contribution to the variational objective is minus one over eight times the noise variance. The projected evidence uses variance one quarter plus noise, while the original evidence uses one half plus noise. The omitted bridge variation can make the bound very loose as noise decreases.

</details>

<a id="sparse-scalable-gaussian-processes-ex-7"></a>

### Exercise 7

Why can the restricted posterior not learn the second delta-kernel latent value?

<details><summary>Hint 1</summary>

It is independent of every chosen inducing value.

</details>

<details><summary>Hint 2</summary>

The family preserves its original conditional law given u.

</details>

<details><summary>Full solution</summary>

That conditional law is simply its unit-normal prior and does not depend on u. Integrating any variational q u therefore leaves it unchanged. The exact data posterior does change it after observing its response, so the discrepancy cannot be fixed by optimising q u more accurately. Another inducing variable or a richer family is required.

</details>

<a id="sparse-scalable-gaussian-processes-ex-8"></a>

### Exercise 8

Why do nested inducing sets have nondecreasing optimal variational bounds?

<details><summary>Hint 1</summary>

Embed the smaller marginal using the original conditional of added inducing variables.

</details>

<details><summary>Hint 2</summary>

The extra conditional cancels in the divergence chain rule.

</details>

<details><summary>Full solution</summary>

The larger family can reproduce the same approximate process by retaining the prior conditional for its added variables given the old inducing set. Its divergence and expected likelihood then agree with the smaller solution. Maximizing over the larger family cannot be worse. This compares global optima, not every computed local solution or arbitrary nonnested location sets.

</details>

<a id="sparse-scalable-gaussian-processes-ex-9"></a>

### Exercise 9

When does including every training latent value make the variational scheme exact?

<details><summary>Hint 1</summary>

The training residual vanishes.

</details>

<details><summary>Hint 2</summary>

Choose their exact posterior as q u.

</details>

<details><summary>Full solution</summary>

With an invertible distinct training Gram, setting u to the training latent vector makes f given u deterministic at the observations. The exact posterior lies in the family and the evidence lower bound reaches equality. Predictions through the original conditional GP are exact. Singular data covariances require a basis representation, not a claim that all duplicate inducing blocks can be inverted.

</details>

<a id="sparse-scalable-gaussian-processes-ex-10"></a>

### Exercise 10

Does optimising the sparse lower bound certify the best exact hyperparameter evidence?

<details><summary>Hint 1</summary>

The approximation gap can vary with hyperparameters.

</details>

<details><summary>Hint 2</summary>

Only the lower objective was optimised.

</details>

<details><summary>Full solution</summary>

No. Each hyperparameter setting has exact evidence equal to its bound plus a possibly different nonnegative gap. Maximizing the bound need not maximize that sum. A precise sparse optimizer addresses its own objective; exact model-evidence ordering or prediction accuracy needs additional gap information or comparison. The target and approximation should be reported separately.

</details>
`;export{e as default};