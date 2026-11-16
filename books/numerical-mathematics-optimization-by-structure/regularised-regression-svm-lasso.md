
# Regularised Regression, SVM and LASSO

Regularization chooses a mathematical trade-off before an optimization algorithm is selected. A squared coefficient penalty makes an objective strongly convex and stabilizes an otherwise nonunique coefficient vector. An absolute-value penalty can set coefficients exactly to zero. A margin penalty compares classification scores with a chosen target separation. These objectives have different geometry and cannot be interchanged merely because one is easier to minimize.

Assume finite real matrices, convexity, subgradients, Fenchel duality and proximal gradient. Rows of A represent recorded examples, columns represent features, and b is the response vector. All formulas refer to this fixed data set. A certificate of empirical optimality does not establish predictive accuracy, causal meaning or the suitability of a fitted decision rule. The [machine-learning mathematics book](#/books/optimization-backprop-from-scratch) develops the broader learning route; this chapter supplies the convex models and their exact certificates.

## Ridge regression: existence, uniqueness and a changed problem

For λ>0, ridge minimizes
$$F_\lambda(x)=\frac12\|Ax-b\|_2^2+\frac\lambda2\|x\|_2^2.$$
The objective is continuous and bounded below by λ‖x‖²/2, so its sublevels are bounded. A closed nonempty sublevel is compact in finite dimensions, giving attainment. Its Hessian is AᵀA+λI, whose quadratic form on a nonzero v is ‖Av‖²+λ‖v‖²>0. Strong convexity gives a unique optimizer even when A has a kernel.

Differentiation yields the normal equation
$$(A^TA+\lambda I)x=A^Tb.$$
The inverse notation is a formula for the mathematical solution, not an instruction to form a dense inverse. A factorization or a structured iterative linear solve can exploit the model. Matrix numerical methods and their conditioning belong to the [matrix-computation book](#/books/matrix-computation-applications).

If A has singular values σᵢ, its singular-vector coordinates show that the fitted coefficient weights are multiplied by σᵢ/(σᵢ²+λ). Small singular directions are suppressed instead of being divided by an arbitrarily small σᵢ. This is an explicit bias introduced by the objective. It is not a claim that the original least-squares solution had those suppressed components or that every true signal lies in the retained directions.

### Worked example 1: duplicate features

Take one response equal to one and A=(1,1). Ordinary least squares has every coefficient pair with x₁+x₂=1 as a minimizer. Ridge symmetry and its normal equations give x₁=x₂=1/(2+λ). The fitted response is 2/(2+λ), below one for positive λ. Both coefficient selection and fitted response have changed.

As λ decreases to zero, the solution approaches (1/2,1/2), the minimum-norm least-squares choice. For every positive λ the Hessian eigenvalues are λ and 2+λ. Uniqueness therefore holds while the condition ratio still grows as λ tends to zero. A regularization parameter should not be chosen solely to make a linear system easy: it controls a modeling trade-off as well as numerical geometry.

## LASSO: sparse optimality with potentially nonunique coefficients

With λ>0, LASSO minimizes
$$P(x)=\frac12\|Ax-b\|_2^2+\lambda\|x\|_1.$$
The penalty is coercive in finite dimension, so the continuous objective attains its minimum without requiring full column rank. Strict convexity in the fitted vector Ax does not imply strict convexity in x. The exact optimality condition is
$$A^T(b-Ax)\in\lambda\partial\|x\|_1.$$
Coordinatewise, a nonzero coefficient requires correlation λ times its sign. A zero coefficient requires correlation in the closed interval from minus λ to λ. Strict interior correlation therefore certifies a zero coefficient, while equality at an interval endpoint does not prove that the coefficient is nonzero.

Two LASSO minimizers have the same fitted response. To prove it, suppose their fitted vectors differ. The squared residual at their midpoint is strictly below the mean of the two squared residuals, while convexity keeps the penalty no larger than its mean. The total objective would be strictly below the optimum, a contradiction. Once the fitted vector is fixed, the residual and the penalty value are fixed too. Individual coefficients can still vary along directions invisible to A while preserving their total absolute value.

### Worked example 2: the sparse answer need not be unique

Again take A=(1,1), now with response b=3 and λ=1. For a fixed sum s=x₁+x₂, the smallest absolute-value penalty is |s|, by the triangle inequality; for positive s it is attained by every nonnegative split. The reduced scalar objective is (s−3)²/2+|s|, minimized at s=2 by soft thresholding. Every pair (t,2−t) with zero≤t≤two is therefore optimal, with value 5/2.

The endpoints have one zero coefficient, while interior pairs have none. All have exactly the same fitted response, residual and objective. A solver selecting one endpoint has not proved that its selected feature is uniquely identified by the data or penalty. Duplicate and correlated features make coefficient interpretation depend on geometry beyond a small optimization gap.

## A dual residual certificate

Introduce residual r=b−Ax. The equality Lagrangian is
$$\frac12\|r\|^2+\lambda\|x\|_1+y^T(b-Ax-r).$$
Minimizing over r gives r=y and contribution minus ‖y‖²/2. Minimizing over x is finite precisely when ‖Aᵀy‖∞≤λ, because the conjugate of λ‖x‖₁ is that dual-ball indicator. The dual is therefore
$$\max_{\|A^Ty\|_\infty\le\lambda}
D(y)=b^Ty-\frac12\|y\|^2.$$
Any x is primal feasible and any y in the displayed ball is dual feasible. Weak duality gives D(y)≤P*, with P(x) an upper bound. When y=b−Ax and the correlation inclusion holds, Fenchel–Young equality makes the gap zero and certifies optimality.

For an arbitrary current x, its residual need not be dual feasible. If the infinity norm of Aᵀr is positive, scale r by the smaller of one and λ/‖Aᵀr‖∞. If that norm is zero, use y=r directly. This gives a valid exact-arithmetic dual candidate and a nonnegative gap. It does not assert that the scaled residual is dual optimal, nor that floating comparisons preserve a rigorous inequality without allowances.

The all-zero coefficient vector is optimal exactly when ‖Aᵀb‖∞≤λ. This follows by inserting zero into the subgradient condition. It explains one endpoint of the regularization path and provides an exact model diagnostic. It does not mean that a small fitted coefficient just below a reporting threshold satisfies the exact zero condition.

## Elastic nets and proximal computation

Adding a positive squared coefficient penalty to LASSO makes the objective strongly convex. The minimizer is then unique and a certified objective gap bounds coefficient distance through the strong-convexity inequality. This resolves mathematical nonuniqueness by changing the objective, rather than proving that the original LASSO had a unique answer.

For LASSO, the smooth gradient is Aᵀ(Ax−b) with Lipschitz constant ‖A‖². A proximal-gradient step soft-thresholds x minus a scaled smooth gradient. The earlier convergence theorem applies with a valid positive smoothness bound, exact proximal maps and the stated convex objective. If A=0, the smooth gradient is constant zero and a positive algorithmic bound may be chosen; dividing by a zero spectral norm is unnecessary. Accelerated variants retain their exact schedule and potential assumptions.

A constrained penalty form, such as minimizing residual square subject to a coefficient-norm budget, can share solutions with a penalized form through an optimal multiplier. That relation depends on the active budget and qualifications. It is not a universal one-to-one conversion between a norm budget and λ: inactive budgets and nonunique coefficients can produce intervals or repeated fitted solutions.

## Support-vector margins and a derived dual

Let labelled feature vectors aᵢ have labels yᵢ∈{−1,1}. Hard-margin linear classification minimizes ‖w‖²/2 over scores wᵀaᵢ+β satisfying yᵢ(wᵀaᵢ+β)≥1. The intercept β is unpenalized. The unit margin fixes the otherwise arbitrary scale of a separating score; the sign of that score supplies the label prediction.

Assign nonnegative multipliers αᵢ to one minus each signed score. Minimization of the Lagrangian over w gives w=Σαᵢyᵢaᵢ. Minimization over β is finite only when Σαᵢyᵢ=0. The dual is
$$\max_{\alpha\ge0,\ \sum_i\alpha_i y_i=0}
\sum_i\alpha_i-\frac12\left\|\sum_i\alpha_i y_i a_i\right\|^2.$$
Feasibility, this reconstruction of w, the intercept equation and complementary products provide the certificate. Strict separability permits scaling to a strict margin and hence the finite-dimensional Slater condition. Nonseparable data make the hard-margin primal infeasible, rather than merely difficult for a chosen algorithm.

A positive α identifies an active margin through complementarity. An active margin can have zero α, and duplicate examples can make the multiplier vector nonunique. Strong convexity in w gives its uniqueness when an optimum exists; it does not automatically give a unique intercept or unique support-vector representation.

### Worked example 3: two symmetric training points

Take one-dimensional feature −1 labeled negative and feature one labeled positive. The two inequalities are w−β≥1 and w+β≥1, requiring w≥1+|β|. The unique smallest norm occurs at w=1, β=0, with primal value one half. The dual equality sets the two multipliers equal. Taking each equal to one half gives reconstructed w=1 and dual value one minus one half, matching the primal value. Both examples lie exactly on the margin.

The geometric distances to the decision boundary equal one in these units because the norm of w is one. Rescaling the feature coordinate changes that numerical norm and margin unless the regularization metric is transformed consistently. A plotted large margin has meaning only relative to the declared feature scale.

## Soft margins: finite penalties and hinge losses

Introduce nonnegative slack ξᵢ and require signed scores at least 1−ξᵢ. Minimize ‖w‖²/2+CΣξᵢ with C>0. Eliminating each slack gives the hinge objective ‖w‖²/2+CΣ[1−yᵢ(wᵀaᵢ+β)]₊. The penalty allows margin violations and even wrong signs; the finite objective is not the hard-margin problem with a numerical feasibility tolerance.

In the dual, minimization over slacks constrains each αᵢ to the interval from zero to C; the intercept equality and quadratic term remain. This follows because the slack coefficient is C−αᵢ and minimizing over a nonnegative slack is finite exactly when that coefficient is nonnegative. A returned α outside this interval is not dual feasible for this C.

### Worked example 4: incompatible labels at the same feature

Give the same zero feature both labels. The optimal w is zero, and the loss in β is C([1−β]₊+[1+β]₊). Its minimum is 2C for every intercept between minus one and one. No score classifies both contradictory observations correctly. The dual takes both α equal to C, giving value 2C. This proves optimality and shows intercept nonuniqueness despite a unique weight vector.

When both labels occur, the soft-margin objective has an attained minimum. A bounded sublevel controls w through its squared penalty. With w bounded, sending β to positive infinity makes a negative-label hinge diverge; sending it to negative infinity makes a positive-label hinge diverge. The sublevel therefore controls β too, and compactness gives attainment. If a class is absent, the intercept can instead have an unbounded optimal region, so that part of this compactness argument changes.

## Scaling, data splits and the meaning of a certificate

Feature standardization changes coefficient units. A common absolute-value penalty in transformed coordinates becomes a weighted penalty in the original coordinates; it is not neutral unless that weighting is intended. An intercept should be identified explicitly when it is left unpenalized. The ridge uniqueness proof for a full positive penalty does not automatically transfer to a block with zero penalty: uniqueness requires that the data term control every unpenalized null direction.

Choose preprocessing and parameter selection using the declared training protocol. Reusing held-out information to choose scaling, features or λ changes what the later evaluation measures. These statistical boundaries do not affect the algebraic dual certificate for the final recorded matrix, but they affect the claim that its solution predicts new observations.

A useful report states the exact loss normalization, regularization convention, feature and intercept treatment, primal and dual feasibility and objective gap. Dividing a loss by the sample count while keeping λ numerically fixed changes the trade-off. Comparing coefficients across those conventions without converting λ can therefore compare different models. Empirical optimization, coefficient identification, generalization and decision performance should each retain its own evidence.

## Exercises with staged hints and full solutions

### Exercise 1: ridge with a kernel

Prove uniqueness of ridge when A has a nontrivial nullspace and λ>0.

<details>
<summary>Hint 1</summary>

Pair its Hessian with a nonzero vector.
</details>
<details>
<summary>Hint 2</summary>

The penalty contributes λ times the squared vector norm even in the data kernel.
</details>
<details>
<summary>Full solution</summary>

The Hessian quadratic form is ‖Av‖²+λ‖v‖², strictly positive for every nonzero v. Coercivity gives attainment and strict convexity gives uniqueness. Without the positive penalty, vectors in ker A can generate a whole affine family of coefficient solutions. Ridge chooses a new unique objective minimizer rather than changing that fact about ordinary least squares.
</details>

### Exercise 2: a zero LASSO solution

For A=I and b=(2,−1), determine all positive λ for which x=0 is optimal.

<details>
<summary>Hint 1</summary>

Evaluate Aᵀb and use the zero-coordinate subgradient interval.
</details>
<details>
<summary>Hint 2</summary>

Its infinity norm is two.
</details>
<details>
<summary>Full solution</summary>

The condition is λ≥2. At equality a correlation lies at the interval endpoint, yet its coefficient remains zero. Since A is injective here, the squared residual is strictly convex and the optimizer is unique. An equality in the correlation condition is therefore not sufficient evidence for a nonzero coefficient.
</details>

### Exercise 3: scalar soft thresholding

Solve min (x−4)²/2+2|x| and give its dual residual.

<details>
<summary>Hint 1</summary>

Check positive, negative and zero branches.
</details>
<details>
<summary>Hint 2</summary>

The positive stationarity equation gives x=2 and residual two.
</details>
<details>
<summary>Full solution</summary>

The optimizer is x=2, with value six. Its residual y=4−2=2 satisfies |y|≤2. The dual value is 4(2)−2²/2=6, and the active positive coefficient has correlation equal to its penalty. Matching feasible values proves optimality. The alternative branches do not satisfy their own sign requirements or the zero subgradient condition.
</details>

### Exercise 4: scale a dual candidate

For a LASSO residual r with ‖Aᵀr‖∞=5 and λ=2, construct a dual-feasible candidate. Is its objective necessarily the optimum?

<details>
<summary>Hint 1</summary>

Multiply r by a positive scalar small enough to enter the dual ball.
</details>
<details>
<summary>Hint 2</summary>

The factor two fifths makes the correlation norm equal to two.
</details>
<details>
<summary>Full solution</summary>

Choose y=2r/5. It is dual feasible because its correlation norm is exactly λ. Its dual value is a lower bound, not necessarily the best bound. The primal-dual gap with any current x remains useful, but equality requires the residual and subgradient relations, not only feasibility on the dual boundary.
</details>

### Exercise 5: fitted-response uniqueness

Explain why two distinct LASSO coefficient minimizers must have the same fitted response, without assuming A is injective.

<details>
<summary>Hint 1</summary>

Compare the midpoint objective with the mean of the two optimal values.
</details>
<details>
<summary>Hint 2</summary>

The squared residual is strictly convex in Ax, while the norm penalty is convex in x.
</details>
<details>
<summary>Full solution</summary>

Different fitted vectors would make the midpoint squared residual strictly smaller than their average. The penalty cannot increase above its average by convexity. Their sum would be below the optimal value, impossible. Equal fitted vectors do not force equal coefficients if A has a kernel. The duplicate-feature worked example realizes that remaining nonuniqueness.
</details>

### Exercise 6: normalize the loss

A model changes from half the residual sum of squares plus λ‖x‖₁ to the residual sum divided by twice n plus a penalty. Which penalty coefficient preserves the optimizer?

<details>
<summary>Hint 1</summary>

Multiply the whole new objective by n to compare formulations.
</details>
<details>
<summary>Hint 2</summary>

Every term must be scaled by the same positive constant.
</details>
<details>
<summary>Full solution</summary>

Use λ/n in the normalized objective. Multiplying that entire objective by n recovers the original one. Keeping λ unchanged instead multiplies the relative regularization strength by n. Positive overall scaling preserves minimizers, but rescaling only one term changes the modeling trade-off.
</details>

### Exercise 7: a hard-margin certificate

For the symmetric two-point example, verify the primal and dual values at w=1, β=0 and both multipliers one half.

<details>
<summary>Hint 1</summary>

Both signed margins equal one and the label-weighted multiplier sum is zero.
</details>
<details>
<summary>Hint 2</summary>

The reconstructed weight is the sum of the two positive contributions.
</details>
<details>
<summary>Full solution</summary>

Primal feasibility and complementarity hold. The reconstruction gives w=1/2+1/2=1, and the intercept equation cancels the opposite labels. The primal value is 1/2; the dual value is 1−1/2=1/2. These matching feasible values certify optimality. The computation also confirms the objective and margin normalization used in this chapter.
</details>

### Exercise 8: why soft-margin multipliers are capped

Derive the condition αᵢ≤C by minimizing the Lagrangian over a nonnegative slack.

<details>
<summary>Hint 1</summary>

Collect its coefficient before taking the infimum.
</details>
<details>
<summary>Hint 2</summary>

A negative coefficient permits sending that slack to positive infinity.
</details>
<details>
<summary>Full solution</summary>

The slack term is (C−αᵢ)ξᵢ. Its infimum over ξᵢ≥0 is zero when C−αᵢ≥0 and minus infinity otherwise. Together with αᵢ≥0 from the inequality convention this gives zero≤αᵢ≤C. The cap is a dual-domain requirement induced by the finite violation penalty, not an arbitrary numerical clipping rule.
</details>

### Exercise 9: an unpenalized null direction

For a generalized ridge penalty ‖Lx‖²/2 and positive coefficient λ, state and prove the condition for a positive-definite objective Hessian.

<details>
<summary>Hint 1</summary>

Its quadratic form is ‖Av‖²+λ‖Lv‖².
</details>
<details>
<summary>Hint 2</summary>

It vanishes exactly on the intersection of the two kernels.
</details>
<details>
<summary>Full solution</summary>

Positive definiteness holds exactly when ker A∩ker L={0}. A nonzero vector in the intersection gives zero quadratic form and rules it out. If the intersection is trivial, every nonzero vector has at least one positive squared-norm contribution, proving the claim. This is the condition needed when an intercept or another block is unpenalized; a positive scalar parameter alone does not resolve every null direction.
</details>

### Exercise 10: interpret a small empirical gap

An exact primal-dual LASSO gap is 0.001. What does it establish about the current objective, coefficients and predictions on unseen data?

<details>
<summary>Hint 1</summary>

Weak duality gives an objective allowance for this recorded problem.
</details>
<details>
<summary>Hint 2</summary>

Coefficient distance needs an error bound or curvature; unseen-data claims need statistical evidence.
</details>
<details>
<summary>Full solution</summary>

The current objective is at most 0.001 above the optimum of the stated fixed-data problem. Without further conditions this does not give coefficient distance to one named optimizer, especially under nonuniqueness. It also supplies no generalization guarantee or causal interpretation. With an additional positive strong-convexity term, the appropriate curvature bound would convert the gap to distance for that changed objective, while predictive validation would remain a separate task.
</details>

## Summary and continuation

Ridge, LASSO and margin models expose different convex structures. Their exact optimality relations distinguish coefficient uniqueness, fitted-response uniqueness, sparsity, dual feasibility and finite violation penalties. Scaling and statistical protocol define which objective was actually solved. The final chapter turns those mathematical contracts into solver-facing representations and reports.

Further reading: Boyd and Vandenberghe, *Convex Optimization* (2004), for regularized least squares and duality; the earlier proximal and conic chapters supply the local derivations used here. All examples are symbolic calculations rather than reports of executed fitting experiments.
