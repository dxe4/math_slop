
# Model Selection and Regularisation

Preparation is [multiple regression](multiple-regression-collinearity.md), singular values, squared-error risk and the probability book’s Hoeffding inequality. Exact selection guarantees below use independent bounded-loss evaluation data with a fixed candidate family.

Selecting a model changes the procedure that generated its reported coefficient or prediction. A model chosen because it looked best on the observed responses is not a fixed model for the purpose of an ordinary reference distribution. Regularisation likewise changes the estimator and its target trade-offs; its tuning parameter must be included in the full prediction procedure.

## Training loss and future risk

Let training data produce a prediction rule $\hat f$. For an independent future pair $(X,Y)$ from the declared target population, squared-error risk is $E[(Y-\hat f(X))^2\mid\text{training}]$. The empirical training error averages the same loss on observations used to choose the rule. It is a different random quantity and is generally optimistic.

For a fixed predictor, a fresh independent evaluation average is unbiased for its risk when the loss is integrable. If that evaluation set is used repeatedly to select features, thresholds or models, the final rule depends on its outcomes. Its final evaluation loss is no longer an independent average for the selected rule. A genuinely held-out assessment or a theorem covering the entire selection procedure is needed.

For clustered or temporal data, independence is not created by assigning row labels to folds. The split must reflect the intended new unit or future-information target. Preprocessing parameters, variable filtering and response-dependent transformations belong inside each training fold.

## Ridge regression

**Definition 6.1.** For $\lambda>0$, ridge regression minimises
$$
\|y-Xb\|^2+\lambda\|b\|^2.
$$
Here all displayed coordinates are penalised. In practice an intercept is often excluded after centring; that convention must be stated rather than silently changing the formula.

**Theorem 6.2.** The unique ridge estimate is $(X^\mathsf TX+\lambda I)^{-1}X^\mathsf Ty$, including rank-deficient designs.

**Proof.** The normal matrix has quadratic form $\|Xv\|^2+\lambda\|v\|^2>0$ for every nonzero $v$. It is positive definite. Solving the normal equation gives the displayed estimate, and expanding the penalised objective about it leaves $\|Xh\|^2+\lambda\|h\|^2$, positive for nonzero perturbations. ∎

Under a true fixed-design mean $X\beta$ and spherical errors, write $A_\lambda=(X^\mathsf TX+\lambda I)^{-1}$. The mean is $A_\lambda X^\mathsf TX\beta$ and covariance is $\sigma^2A_\lambda X^\mathsf TXA_\lambda$. The bias is $-\lambda A_\lambda\beta$. Ridge gives up unbiasedness in exchange for reduced variability; Gauss–Markov therefore does not forbid it from improving mean-squared error at some parameter values.

For a singular-value decomposition $X=UDV^\mathsf T$, fitted components shrink by $d_j^2/(d_j^2+\lambda)$. The coefficient component uses $d_j/(d_j^2+\lambda)$ rather than the unregularised reciprocal $1/d_j$. Small design directions are damped most. A penalty also depends on units: changing a predictor's scale changes what equal coefficient penalties mean unless scaling conventions are adjusted.

## Effective fit dimension and optimism

The ridge fitted vector is $S_\lambda y$, with $S_\lambda=X(X^\mathsf TX+\lambda I)^{-1}X^\mathsf T$. Its trace is $\sum_jd_j^2/(d_j^2+\lambda)$, a useful effective fit dimension. Unlike a least-squares projector, $S_\lambda$ is generally not idempotent. Thus residual degrees and exact chi-square arguments for an orthogonal projector cannot be transferred merely by replacing rank with this trace.

For a fixed linear smoother and spherical noise, covariance between fitted values and responses sums to $\sigma^2\operatorname{tr}(S_\lambda)$. Comparing squared training error with independent replicate response error at the same design gives expected optimism $2\sigma^2\operatorname{tr}(S_\lambda)/n$. The calculation expands both squared losses and cancels their common mean and noise terms. It assumes the smoother, including $\lambda$, is fixed independently of those responses; tuning adds a selection component not covered by the fixed-matrix expression.

## Lasso and a one-coordinate proof

Lasso minimises $\tfrac12\|y-Xb\|^2+\lambda\sum_j|b_j|$. A subgradient at zero lies in $[-1,1]$, so the optimality equations are $X^\mathsf T(y-Xb)=\lambda z$, with $z_j=\operatorname{sign}(b_j)$ when nonzero and $z_j\in[-1,1]$ otherwise. This explains exact zero coefficients.

For an orthonormal design $X^\mathsf TX=I$, put $c=X^\mathsf Ty$. The objective separates into coordinates $\tfrac12(b_j-c_j)^2+\lambda|b_j|$, apart from a constant. Solving separately on positive and negative half-lines and checking zero gives
$$
\hat b_j=\operatorname{sign}(c_j)(|c_j|-\lambda)_+.
$$
This soft-threshold rule depends on the chosen half-scaled squared-loss convention. Another software convention rescales $\lambda$.

With correlated or redundant columns, lasso coefficients need not be unique, though the fitted vector is unique by strict convexity in prediction space. Selection consistency requires additional signal and design assumptions; an observed zero is not proof that the corresponding scientific effect is absent.

## A finite-candidate selection guarantee

Suppose $K$ candidate predictors are fixed conditional on training and take values in $[0,1]$, as does the response. Evaluate them on $m$ iid observations independent of training. Squared loss then lies in $[0,1]$. Hoeffding’s inequality and a union bound give
$$
P\left(\max_{k\le K}|\hat R_k-R_k|>\epsilon
\mid\text{training}\right)\le2K e^{-2m\epsilon^2}.
$$
If $\hat k$ minimises the evaluation risks and $k_*$ minimises the true candidate risks, then on this uniform event,
$$
R_{\hat k}\le\hat R_{\hat k}+\epsilon
\le\hat R_{k_*}+\epsilon\le R_{k_*}+2\epsilon.
$$
This is a guarantee for selecting among a declared finite set. It does not assert that the selected empirical risk is unbiased. If new candidates are created after inspecting evaluation outcomes, the original fixed-$K$ argument no longer covers them.

## Information criteria and cross-validation

A Gaussian information criterion balances likelihood fit against model complexity under a stated asymptotic target. Its penalty is not a universal finite-sample probability guarantee. AIC targets predictive discrepancy under regular conditions, while BIC arises from a different approximation and target. Neither mechanically selects the scientifically correct model in every setting.

Cross-validation estimates the performance of the full procedure trained on its fold-sized training sample. It does not directly make a selected coefficient's ordinary t interval valid. Nested splitting separates tuning from final evaluation, and the split's unit must match the scientific generalisation question. In small samples uncertainty in those estimates can be substantial; reporting only the winning score hides that variability.

Regularisation is most useful when its loss, penalty, scaling and tuning target are recorded together. Compare predictions at relevant design points and show sensitivity to reasonable choices. A stable selected feature list and a stable prediction rule are related but distinct objectives.

## An exact risk calculation for a fixed smoother

Let $Y=\mu+\varepsilon$ with mean-zero spherical noise of known variance $\sigma^2$, and let $S$ be a fixed real smoothing matrix. The mean-squared estimation risk for the fitted mean is
$$
E\|SY-\mu\|^2=\|(S-I)\mu\|^2+\sigma^2\operatorname{tr}(S^\mathsf TS).
$$
The equality follows by expanding the squared bias-plus-noise decomposition; the cross term has mean zero and the noise quadratic expectation is a trace.

On the other hand,
$$
E\|Y-SY\|^2
=\|(I-S)\mu\|^2+
\sigma^2\{n-2\operatorname{tr}(S)+\operatorname{tr}(S^\mathsf TS)\}.
$$
Subtracting gives the unbiased risk estimate
$$
\|Y-SY\|^2+2\sigma^2\operatorname{tr}(S)-n\sigma^2
$$
for estimating the mean-vector risk. For predicting an independent replicate response at the same design, the target contains another $n\sigma^2$, so the corresponding estimate omits the final subtraction.

This linear identity uses second moments, not a Gaussian density. Its fixed-$S$ condition is nevertheless essential. If $S$ is chosen after viewing $Y$, the algebraic expansion of its expectation no longer permits treating it as a constant matrix independent of noise. Minimising many such estimates can add selection optimism.

## A singular-direction bias-variance calculation

In one singular direction with value $d>0$, write the true coefficient coordinate as $\theta$ and observed response coordinate as $d\theta+\xi$, where $E\xi=0$ and variance is $\sigma^2$. Ridge estimates
$$
\hat\theta_\lambda=\frac d{d^2+\lambda}(d\theta+\xi).
$$
Its mean-squared error is
$$
E(\hat\theta_\lambda-\theta)^2
=\frac{\lambda^2\theta^2+\sigma^2d^2}{(d^2+\lambda)^2}.
$$
The first term is squared bias, the second variance. At $\theta=0$, shrinkage strictly reduces the error relative to the unregularised variance $\sigma^2/d^2$. For sufficiently large $|\theta|$, a fixed nonzero penalty's squared bias can instead dominate. A benefit at one signal strength is not a uniform guarantee over every parameter.

Prediction at the observed design multiplies coefficient error by $d$, producing a different loss. Prediction at an extrapolation point can use a different multiplier again. This is why tuning for coefficient recovery and tuning for future prediction can select different penalties.

**Worked example: a weak design direction.** Set $d=1/10$, $\sigma^2=1$ and $\lambda=1/100$. Ridge halves the mean coefficient coordinate and reduces its variance from one hundred to twenty-five. At $\theta=0$, mean-squared error drops accordingly. At $\theta=100$, the squared bias is two thousand five hundred, so the same rule is much worse for that coordinate. The numerical contrast identifies the target-dependent trade-off rather than supplying a universal preferred penalty.

## Tuning includes all preprocessing

Standardisation, imputation and basis selection estimated from a dataset are part of its training algorithm. If their parameters are computed using all observations before cross-validation, the held-out fold has already influenced the fitted procedure. The correct fold calculation learns those quantities on the training fold and applies them to its held-out rows.

A time-ordered forecasting target further requires past-only information. Random folds may train on responses later than the held-out event, estimating a different prediction problem. A group-generalisation target likewise needs group separation when repeated rows share latent information.

The bounded finite-candidate theorem earlier explicitly clips the prediction and response domain to $[0,1]$. Ordinary unbounded squared-error regression does not satisfy that bounded-loss hypothesis. One can use another concentration theorem with tail assumptions or evaluate a bounded loss, but must state which quantity changed. A convenient exponential bound is not transferable merely because a loss has a finite empirical average.


## Constraint form and the meaning of a penalty

A penalised least-squares solution also solves a constrained problem with a coefficient-norm budget equal to the norm of that solution. Indeed, if another coefficient vector had no larger norm and strictly smaller squared error, its penalised objective would be strictly smaller as well, contradicting optimality. This gives one direction of the penalty-constraint connection without asserting a unique tuning correspondence in every degenerate design.

For lasso, the constraint is an absolute-sum ball with corners aligned to coordinate axes. Those corners help produce zero coordinates. Rotating predictors changes that geometry, so sparsity is relative to the chosen representation. A sparse polynomial basis and a sparse collection of rotated polynomial combinations can describe different preferences even when their full unpenalised spaces coincide.

The scientific role of a selected feature should therefore be expressed in its original variables and units. A zero in an arbitrary basis is an optimisation outcome, not a basis-invariant proof that a physical mechanism is absent.

## Worked example 6.1: two singular directions

Let singular values be ten and one, with ridge parameter $\lambda=1$. The fitted-direction multipliers are $100/101$ and $1/2$. Thus the strong design direction is almost unchanged while the weak one is halved. The effective fitted dimension is $100/101+1/2$, below two but not an integer. It is not the rank of an orthogonal projector.

## Worked example 6.2: soft thresholding with its scale convention

For an orthonormal design let $c=(3,-1,0.2)$ and use $\lambda=0.5$ in the half-squared-loss lasso objective. The solution is $(2.5,-0.5,0)$. The smallest component is removed exactly; the others shrink toward zero. Doubling the squared-loss part without changing the displayed penalty would alter this threshold, so the objective convention must accompany a reported tuning value.

## Worked example 6.3: choosing among ten bounded predictors

For ten fixed candidates and one hundred independent evaluation observations, the uniform deviation bound is $20e^{-200\epsilon^2}$. Solving this upper bound to be at most a chosen $\delta$ gives $\epsilon=\sqrt{\log(20/\delta)/200}$. The selected candidate's excess risk over the best candidate is at most twice that tolerance on the uniform event. This is a conservative finite bound, not an executed estimate of a particular dataset's risk.

## Two monotonicities that do follow from the objective

For a fixed dataset and a fixed penalty function, compare exact minimisers at two penalty weights, the second larger than the first. Optimality at each weight gives two inequalities comparing the same pair of fits. Add them: the larger penalty weight cannot select a fit with a larger penalty value. Substituting that conclusion back into the first inequality shows that its unpenalised training residual sum of squares cannot be smaller.

This proof requires no Gaussian model and applies even when a minimiser is not unique, provided exact minimisers are compared. For squared ridge penalty it proves that the coefficient norm cannot increase while training residual sum of squares cannot decrease as regularisation grows. A separately unpenalised intercept simply stays outside the compared penalty.

Neither conclusion orders future prediction risk. A fit can accept larger training residuals in exchange for lower sensitivity, yet introduce enough bias to worsen a particular target prediction. The deterministic optimisation comparison therefore supports a precise statement about the fitted objective, rather than a universal generalisation claim.

## Orthogonal ridge has a coordinatewise risk tradeoff

Consider an orthonormal design, a fixed ridge penalty and independent mean-zero errors of common variance. In each coefficient direction ridge multiplies the ordinary least-squares coefficient by a common shrinkage factor s between zero and one. The squared-error risk in that direction is the squared bias, equal to the square of one minus s, times the true coefficient squared, plus variance equal to s squared times the error variance. This formula follows by expanding the error into its deterministic shrinkage bias and centred random part; their cross term has expectation zero.

For a coefficient exactly zero, stronger shrinkage reduces that direction's risk. For a sufficiently large nonzero coefficient, the bias can outweigh the variance reduction. Thus even in this particularly simple geometry there is no universal statement that one fixed penalty improves every coefficient risk. Choosing the penalty from the same response makes s random and correlated with the ordinary coefficient; the fixed-factor risk expansion then needs additional terms or a separate analysis.

## Exercises

### Exercise 6.1
<a id="selection-and-regularisation-ex-1"></a>

Prove ridge uniqueness even when the design is rank deficient.

<details>
<summary>Hint 1</summary>

Inspect the penalised quadratic form.

</details>
<details>
<summary>Hint 2</summary>

Lambda is strictly positive.

</details>
<details>
<summary>Solution</summary>

The quadratic form is $\|Xv\|^2+\lambda\|v\|^2$, strictly positive for nonzero $v$. Hence the normal matrix is invertible and the objective strictly convex. The solution is unique although the unpenalised coefficient problem may not be identified. The penalty supplies a preference, not new observational information.

</details>

### Exercise 6.2
<a id="selection-and-regularisation-ex-2"></a>

Derive the ridge bias under the correct linear mean.

<details>
<summary>Hint 1</summary>

Take expectation of its linear estimator.

</details>
<details>
<summary>Hint 2</summary>

Use A_lambda times the normal matrix identity.

</details>
<details>
<summary>Solution</summary>

The mean is $A_\lambda X^\mathsf TX\beta=(I-\lambda A_\lambda)\beta$. Subtracting $\beta$ gives bias $-\lambda A_\lambda\beta$. This intentional bias explains why the estimator lies outside the linear-unbiased class compared by Gauss–Markov.

</details>

### Exercise 6.3
<a id="selection-and-regularisation-ex-3"></a>

What happens to ridge fitted multipliers as lambda tends to zero or infinity?

<details>
<summary>Hint 1</summary>

Use d squared divided by d squared plus lambda.

</details>
<details>
<summary>Hint 2</summary>

Treat zero singular values separately.

</details>
<details>
<summary>Solution</summary>

For a positive singular value the multiplier tends to one as $\lambda\downarrow0$ and to zero as $\lambda\to\infty$. A zero singular direction always contributes zero. Thus the small-penalty fitted vector approaches the ordinary projection even when a minimum-norm coefficient convention is needed.

</details>

### Exercise 6.4
<a id="selection-and-regularisation-ex-4"></a>

Solve the one-coordinate lasso problem with c=0.4 and lambda=0.5.

<details>
<summary>Hint 1</summary>

Check the subgradient at zero.

</details>
<details>
<summary>Hint 2</summary>

The correlation lies inside the threshold interval.

</details>
<details>
<summary>Solution</summary>

The solution is zero. At zero, the optimality condition requires $c/\lambda\in[-1,1]$, which holds. On either nonzero half-line the proposed stationary point would have the wrong sign, so zero is the minimiser.

</details>

### Exercise 6.5
<a id="selection-and-regularisation-ex-5"></a>

Why is predictor scaling relevant to a coefficient penalty?

<details>
<summary>Hint 1</summary>

The same fitted product uses inverse coefficient scaling.

</details>
<details>
<summary>Hint 2</summary>

The Euclidean coefficient norm changes.

</details>
<details>
<summary>Solution</summary>

If a column is multiplied by a constant, its coefficient is divided by that constant to preserve predictions. Its squared or absolute penalty then changes relative to other columns. Scaling is therefore part of the regularised procedure, unlike an invertible recoding of unpenalised fitted-space geometry.

</details>

### Exercise 6.6
<a id="selection-and-regularisation-ex-6"></a>

Derive the finite-candidate uniform-risk bound.

<details>
<summary>Hint 1</summary>

Apply Hoeffding to each bounded loss mean.

</details>
<details>
<summary>Hint 2</summary>

Sum the K failure probabilities.

</details>
<details>
<summary>Solution</summary>

Each candidate has two-sided error probability at most $2e^{-2m\epsilon^2}$. The probability that at least one fails is at most their sum, $2Ke^{-2m\epsilon^2}$. Independence between candidates is unnecessary; independence of evaluation observations and their separation from training are material.

</details>

### Exercise 6.7
<a id="selection-and-regularisation-ex-7"></a>

Prove the selected candidate's excess risk bound on that uniform event.

<details>
<summary>Hint 1</summary>

Compare selected empirical risk with the best candidate's empirical risk.

</details>
<details>
<summary>Hint 2</summary>

Use one deviation bound on each side.

</details>
<details>
<summary>Solution</summary>

Use $R_{\hat k}\le\hat R_{\hat k}+\epsilon$, empirical minimality $\hat R_{\hat k}\le\hat R_{k_*}$, and $\hat R_{k_*}\le R_{k_*}+\epsilon$. Combining yields excess at most $2\epsilon$. The best candidate need not be the best predictor among all possible functions.

</details>

### Exercise 6.8
<a id="selection-and-regularisation-ex-8"></a>

Does cross-validation automatically validate a selected coefficient's ordinary t interval?

<details>
<summary>Hint 1</summary>

Prediction scoring and coefficient coverage are different targets.

</details>
<details>
<summary>Hint 2</summary>

The model choice depends on responses.

</details>
<details>
<summary>Solution</summary>

No. Cross-validation addresses the predictive procedure under its splitting assumptions. The selected coefficient and model are response-dependent, so the fixed-model exact t theorem does not automatically cover them. A separate selective or otherwise justified inference procedure is needed.

</details>

### Exercise 6.9
<a id="selection-and-regularisation-ex-9"></a>

Why is ridge effective dimension not an exact residual chi-square degree count?

<details>
<summary>Hint 1</summary>

The smoother is not idempotent.

</details>
<details>
<summary>Hint 2</summary>

Its eigenvalues lie between zero and one.

</details>
<details>
<summary>Solution</summary>

An orthogonal projection has zero-one eigenvalues, which give a chi-square sum with integer rank under spherical Gaussian noise. Ridge has intermediate eigenvalues and a generally biased residual mean, so the same argument fails. Its trace is useful for sensitivity and risk calculations without being that exact degree count.

</details>

### Exercise 6.10
<a id="selection-and-regularisation-ex-10"></a>

What changes if evaluation data are used to invent more candidate models?

<details>
<summary>Hint 1</summary>

The candidate list is no longer fixed independently of evaluation.

</details>
<details>
<summary>Hint 2</summary>

The original union bound covered only its declared family.

</details>
<details>
<summary>Solution</summary>

The fixed-$K$ bound does not cover an adaptively enlarged family selected from those same outcomes. One needs a uniform class theorem, an adaptive-data analysis argument or fresh independent evaluation. Counting only the final surviving candidates would conceal the actual search.

</details>

## Summary

Selection belongs to the procedure. Ridge and lasso alter bias, variance and coordinate sensitivity under declared objectives. Finite-candidate uniform bounds can justify a particular selection rule, while information criteria and cross-validation serve different targets. Evaluation, tuning and coefficient inference must retain their actual information flow.
