var e=`---
parent_id: book-regression-and-generalised-linear-models
chapter_id: geometry-of-projection
title: "Geometry of Projection"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Geometry of Projection

Preparation is [the linear model](linear-model-least-squares.md), inner products, orthonormal bases, eigenvalues of symmetric matrices and the finite-dimensional null-space decomposition from linear algebra.

The least-squares formula becomes easier to understand when a design is treated as a subspace rather than a list of coefficients. Projection identifies which parts of a response can be fitted, which contrasts are estimable and how a nuisance block can be removed. These are finite-dimensional algebraic facts. Their validity does not depend on a normal error law.

## Orthogonal projection and its characterisation

Let $\\mathcal S$ be the column space of a real design matrix. Choose an orthonormal basis and place its vectors in a matrix $Q$, so $Q^\\mathsf TQ=I$. Define $H=QQ^\\mathsf T$ and $M=I-H$. Then $H^\\mathsf T=H$, $H^2=H$, $M^\\mathsf T=M$ and $M^2=M$. Their images are orthogonal complementary subspaces.

**Theorem 2.1 (projection characterisation).** For every $y$, $Hy$ is the unique closest vector in $\\mathcal S$, and $My$ is orthogonal to $\\mathcal S$.

**Proof.** Since $Hy$ is a linear combination of columns of $Q$, it belongs to $\\mathcal S$. Also $Q^\\mathsf TMy=Q^\\mathsf Ty-Q^\\mathsf TQQ^\\mathsf Ty=0$. For any $v\\in\\mathcal S$, the vectors $My$ and $Hy-v$ are orthogonal, so
$$
\\|y-v\\|^2=\\|My\\|^2+\\|Hy-v\\|^2.
$$
The second term is nonnegative and vanishes exactly at $v=Hy$. ∎

A real square matrix is an orthogonal projector precisely when it is symmetric and idempotent. For the converse, idempotence makes $H$ the identity on its image. If $z$ belongs to its null space and $v=Hu$, symmetry gives $z^\\mathsf Tv=z^\\mathsf THu=(Hz)^\\mathsf Tu=0$. Thus image and null space are perpendicular, giving the same decomposition.

An idempotent matrix without symmetry can instead project along an oblique direction. Its fitted residual need not be perpendicular in the ordinary Euclidean inner product. Weighted least squares later changes the relevant inner product explicitly rather than pretending every projection is orthogonal in the original coordinates.

## Rank, trace and decomposed squared length

An orthogonal projector has eigenvalues zero or one: $Hv=\\lambda v$ implies $\\lambda^2=\\lambda$. Symmetry supplies an orthonormal eigenbasis. Therefore $\\operatorname{tr}(H)=\\operatorname{rank}(H)$, the dimension of the fitted subspace.

For a rank-$p$ design, residual projection $M$ has rank and trace $n-p$. The identity
$$
\\|y\\|^2=\\|Hy\\|^2+\\|My\\|^2
$$
holds for every response vector. If an intercept belongs to the fitted subspace, centre around $\\bar y\\mathbf1$ to obtain
$$
\\sum_i(y_i-\\bar y)^2
=\\|Hy-\\bar y\\mathbf1\\|^2+\\|My\\|^2.
$$
The usual coefficient of determination is one minus the residual sum divided by the centred total sum, when that total is positive. It lies between zero and one for this intercept-containing least-squares fit. Without an intercept, a centred coefficient of determination can be negative; the decomposition being used has changed.

None of these identities establishes that the fitted scientific mean is correct. They describe a geometry relative to selected columns. Adding columns weakly reduces residual squared error by enlarging the admissible space, even if those columns describe meaningless noise.

## Parameter changes and estimable contrasts

Replacing $X$ by $XA$ with invertible $A$ preserves its column space. The new coefficient vector is $A^{-1}\\beta$, and fitted values do not change. Different coding of a factor or centring a predictor can therefore alter coefficient labels and intercept values without altering the model's set of means.

For a rank-deficient design, a linear contrast $a^\\mathsf T\\beta$ is estimable if it has the same value whenever two coefficients give the same mean.

**Theorem 2.2 (estimability).** The contrast is estimable exactly when $a$ belongs to the row space of $X$.

**Proof.** Coefficient differences giving the same mean form $\\ker X$. Invariance of the contrast says $a^\\mathsf Tv=0$ for every $v\\in\\ker X$. Finite-dimensional orthogonal decomposition gives $(\\ker X)^\\perp=\\operatorname{row}(X)$. If $a=X^\\mathsf Tc$, then $a^\\mathsf T\\beta=c^\\mathsf TX\\beta$, so it indeed depends only on the mean. Conversely a component of $a$ along the null space would change the contrast without changing that mean. ∎

Estimability is a statement about design information. Selecting a pseudoinverse produces a coefficient representative but cannot turn a nonestimable contrast into an identified scientific parameter.

## Remove a nuisance block: the partial-regression theorem

Partition a full-rank design as $X=[Z\\ W]$, with $Z$ itself full rank. Let $H_Z=Z(Z^\\mathsf TZ)^{-1}Z^\\mathsf T$ and $M_Z=I-H_Z$.

**Theorem 2.3 (Frisch–Waugh–Lovell).** The least-squares coefficient of $W$ in the full model equals
$$
\\hat\\beta_W=(W^\\mathsf TM_ZW)^{-1}W^\\mathsf TM_Zy.
$$

**Proof.** For a fixed proposed coefficient $b$ of $W$, the best nuisance fit is the projection of $y-Wb$ onto the column space of $Z$. The remaining objective is therefore $\\|M_Zy-M_ZWb\\|^2$. Full rank of $[Z\\ W]$ implies full rank of $M_ZW$: if $M_ZWv=0$, then $Wv$ lies in the column space of $Z$, contradicting independence of the combined columns unless $v=0$. The ordinary least-squares formula applied to the residualised design gives the result, since $M_Z^\\mathsf TM_Z=M_Z$. ∎

When $Z$ is just the intercept, residualisation subtracts each column's sample mean. The familiar centred covariance-over-variance formula is thus a special case of partial regression. With a larger block, the operation removes its fitted linear contribution from both the response and the predictor of interest.

Residualising only the response is generally insufficient: the denominator must use the residualised predictor. Nor does a coefficient “holding other predictors fixed” automatically correspond to a feasible intervention. If the covariates are constrained or jointly generated, the scientific comparison needs additional interpretation.

## Nested models and orthogonal increments of fit

Suppose $\\mathcal S_0\\subseteq\\mathcal S_1$ with orthogonal projectors $H_0,H_1$. Then $H_1H_0=H_0H_1=H_0$, and $H_1-H_0$ is itself an orthogonal projector. Its image contains the additional fitted directions perpendicular to the smaller model.

Consequently
$$
\\|M_0y\\|^2-\\|M_1y\\|^2
=y^\\mathsf T(H_1-H_0)y\\ge0.
$$
This exact reduction in residual sum of squares underlies the later F test. A probability model and a declaration that the restrictions were chosen before inspecting the response are still needed before that reduction receives an inferential reference law.

## Geometry and numerical methods

An orthonormal basis makes the fitted vector $QQ^\\mathsf Ty$, avoiding explicit inversion. In a QR factorisation $X=QR$ with nonsingular triangular $R$, one solves $R\\hat\\beta=Q^\\mathsf Ty$. Singular-value decomposition additionally exposes directions corresponding to small or zero singular values.

Changing an orthonormal basis inside the same subspace leaves $QQ^\\mathsf T$ invariant. This is why fitted values are a geometric object while individual basis coefficients depend on coordinates. Near-collinearity makes a coefficient coordinate system fragile without necessarily making every fitted value unstable.

The distinction guides reporting. A prediction at a well-supported design point can be stable while an extrapolated contrast is poorly determined. A coefficient table alone does not show which combinations are reliable. Examine the relevant contrast and its projection onto the weak design directions rather than treating a single condition number as a complete scientific diagnosis.

## Adding one direction gives a rank-one update

Let $H$ project onto the existing design space, and let a proposed new column be $w$. Residualise it to $u=(I-H)w$. If $u=0$, the column is redundant and adds no fitted direction. If $u\\ne0$, it is orthogonal to the old space, and the enlarged space is its orthogonal direct sum with the line spanned by $u$.

The new projector is therefore
$$
H_{\\rm new}=H+\\frac{uu^\\mathsf T}{u^\\mathsf Tu}.
$$
Both summands are symmetric projectors onto perpendicular spaces, so their mixed products vanish and their sum is idempotent. Its image is exactly the old space plus the new direction. This proves the update without assuming a normal equation inverse remains numerically well behaved.

The residual reduction is
$$
\\mathrm{RSS}_{\\rm old}-\\mathrm{RSS}_{\\rm new}
=\\frac{(u^\\mathsf Ty)^2}{u^\\mathsf Tu}.
$$
Since $u$ is orthogonal to the old fitted part, its inner product with $y$ equals its inner product with the old residual. If that residual is nonzero, define the angle $\\theta$ between it and $u$. The reduction is then $\\|My\\|^2\\cos^2\\theta$. Selecting a column because it has a large residual correlation is selecting a direction closely aligned with the observed error.

This identity also explains an extreme overfitting construction. If arbitrary response-dependent columns are permitted, choose $w=My$. The added direction then removes the entire old residual, giving a perfect fit whenever it was nonzero. The algebra is valid, but a fixed-model inferential reference for that chosen direction would ignore its dependence on the response.

**Worked example: one added group direction.** Start with an intercept on four rows and $y=(1,3,4,8)$. The mean is four, residual is $(-3,-1,0,4)$ and residual sum is twenty-six. Add $w=(-1,-1,1,1)$, already perpendicular to the constant column. Its squared norm is four and inner product with $y$ is eight. The residual reduction is sixteen. The slope is two, fitted values are $(2,2,6,6)$, and residual sum is ten. The difference twenty-six minus ten exactly matches the rank-one calculation.

## Fitted-vector stability and coefficient stability

Orthogonal projection cannot increase Euclidean perturbations:
$$
\\|H(y+\\delta)-Hy\\|^2=\\|H\\delta\\|^2\\le\\|\\delta\\|^2.
$$
The inequality follows from the orthogonal split of $\\delta$ into $H\\delta$ and $(I-H)\\delta$. Thus the fitted vector is a contraction as a function of the observed response under a fixed fitted space.

This does not make every coefficient stable. In singular-value coordinates, an unregularised coefficient component divides a response component by its singular value. A small positive singular value can amplify that coefficient change even while the corresponding fitted-vector perturbation remains bounded. A prediction at a new design row may amplify it again if that row points strongly in the weak direction.

Nor does this contraction compare two different design spaces. Perturbing the columns themselves can change the projector, particularly near a rank change. The source of instability should therefore be named: response perturbation at fixed design, covariate measurement perturbation, recoding, model-space change or extrapolation. These have different mathematical controls.

For reporting, a contrast's uncertainty and an in-sample fitted-vector norm answer different questions. If the scientific quantity is a slope difference, demonstrate that its direction is estimable and sufficiently supported. If the target is prediction, specify the new row distribution. A general statement that “the fit is stable” is incomplete without that target.


## A projection proof of least-squares contrasts

If a contrast is estimable, choose $c$ with $X^\\mathsf Tc=a$. Under the linear mean, $c^\\mathsf TY$ is unbiased for that contrast. Different choices of $c$ can have the same action on the mean while different actions on residual noise. Orthogonally projecting $c$ into the column space of $X$ preserves $X^\\mathsf Tc$ and removes its perpendicular component.

Under spherical covariance, that removal reduces variance by the squared length of the discarded component times the error variance. Thus the least-squares contrast can be understood as the shortest coefficient vector representing the same mean functional. This is a geometric version of the Gauss–Markov comparison developed in the next chapter.

It also shows why an estimable contrast can remain meaningful in a redundant parameterisation. The relevant object is its linear functional on the mean space, not the particular coefficient representative produced by an inverse convention. Rewriting a model with different factor contrasts should preserve that functional even if its printed coordinates look different.

## Worked example 2.1: orthogonal fitted and residual lengths

Take columns $\\mathbf1$ and $x=(-1,0,1)^\\mathsf T$, with $y=(1,0,3)^\\mathsf T$. They are orthogonal, so the intercept is $4/3$ and slope is $(x^\\mathsf Ty)/(x^\\mathsf Tx)=1$. Fitted values are $(1/3,4/3,7/3)$ and residuals $(2/3,-4/3,2/3)$. Their squared norms are $22/3$ and $8/3$, summing to $\\|y\\|^2=10$. This verifies the Pythagorean split directly, without an error model.

## Worked example 2.2: partial regression through centring

For rows $x=(0,1,2)$ and $y=(2,2,5)$, remove the intercept: centred predictors are $(-1,0,1)$ and centred responses $(-1,-1,2)$. Their cross-product is three and predictor squared length is two, so the full-model slope is $3/2$. Recovering the intercept gives $3-(3/2)1=3/2$. Fitting the uncentred response on the centred predictor gives the same cross-product because the centred predictor sums to zero, but fitting on the uncentred predictor would give another denominator and answer.

## Worked example 2.3: a nonestimable difference

For columns $1,x,x$ with variable $x$, the slope sum is identified but the slope difference is not. The null direction $(0,1,-1)$ leaves fitted values unchanged. Its inner product with contrast $(0,1,-1)$ is two, so that contrast is not orthogonal to the null space. Contrast $(0,1,1)$ has zero inner product and is estimable. Setting the two slopes equal selects one representation; it does not make the observed table identify their difference.

## The improvement from one added direction

Suppose a full-rank reduced design is enlarged by one column, and residualise that column against the reduced design. If its residual is zero, the enlarged fitted space is unchanged and no new coefficient is identifiable separately. Otherwise normalise that residual to a unit vector.

The enlarged fitted space is an orthogonal direct sum of the earlier space and this one direction. Therefore the reduction in residual sum of squares is exactly the squared inner product of the response with that unit direction. It is nonnegative for every observed response and zero exactly when the reduced residual is orthogonal to the added direction.

This identity explains both monotone training fit and partial sums of squares without invoking a sampling distribution. An F reference distribution additionally requires the chapter’s Gaussian spherical-error model and a fixed chosen comparison. Selecting the direction because it maximises this observed reduction changes the procedure; the geometric equality remains true while the unadjusted fixed-comparison reference can fail.

## Equivalent coordinates preserve the fitted subspace

Let a full-column-rank design X be replaced by X times an invertible square matrix A. Every new coefficient vector corresponds to exactly one original vector, because multiplication by A is a bijection. Thus the two designs have the same column space and the same orthogonal projection matrix. The fitted values, residual vector, residual sum of squares and leverage diagonals are identical for every observed response.

The coefficient coordinates change by inverse A. A contrast of the original coefficient must therefore be transformed consistently when expressed in the new coordinates. This explains both the usefulness and the limit of centring or rescaling predictors: it can improve coordinate conditioning without changing the set of possible fitted vectors, but numerical coefficient magnitudes themselves are not invariant. A singular A instead removes some fitted directions; it is a restriction of the model, not merely a change of coordinates. This subspace proof establishes the exact algebra before any distributional assumptions enter.

## Exercises

### Exercise 2.1
<a id="geometry-of-projection-ex-1"></a>

Prove that I-H is an orthogonal projector when H is symmetric and idempotent.

<details>
<summary>Hint 1</summary>

Expand its square.

</details>
<details>
<summary>Hint 2</summary>

Use H squared equals H.

</details>
<details>
<summary>Solution</summary>

Symmetry is preserved by subtraction from the identity, and $(I-H)^2=I-2H+H^2=I-H$. Its image is perpendicular to that of $H$ because $H(I-H)=0$. Thus fitted and residual vectors form orthogonal components.

</details>

### Exercise 2.2
<a id="geometry-of-projection-ex-2"></a>

An orthogonal projector has rank four in nine dimensions. Find both traces.

<details>
<summary>Hint 1</summary>

Its eigenvalues are zero or one.

</details>
<details>
<summary>Hint 2</summary>

The residual image has complementary dimension.

</details>
<details>
<summary>Solution</summary>

The fitted projector has trace four, and its complement has trace five. These are algebraic dimensions. A residual variance estimator later divides by five under a spherical error model, but geometry alone does not assert unbiasedness of such an estimate.

</details>

### Exercise 2.3
<a id="geometry-of-projection-ex-3"></a>

Show that adding one independent design column cannot increase residual sum of squares.

<details>
<summary>Hint 1</summary>

The admissible fitted subspace grows.

</details>
<details>
<summary>Hint 2</summary>

The smaller minimiser remains available.

</details>
<details>
<summary>Solution</summary>

The minimum over the larger subspace is no greater because every smaller fitted vector remains admissible. The precise difference is the squared projection onto the added perpendicular direction. This monotonicity holds even when the added column has no scientific relevance.

</details>

### Exercise 2.4
<a id="geometry-of-projection-ex-4"></a>

Characterise estimability for columns x and 3x.

<details>
<summary>Hint 1</summary>

Find the null direction.

</details>
<details>
<summary>Hint 2</summary>

A contrast must annihilate that direction.

</details>
<details>
<summary>Solution</summary>

The fitted slope is $\\beta_1+3\\beta_2$. The null direction is $(-3,1)$, so $a_1\\beta_1+a_2\\beta_2$ is estimable exactly when $-3a_1+a_2=0$. These are precisely multiples of the combined slope.

</details>

### Exercise 2.5
<a id="geometry-of-projection-ex-5"></a>

Why must both response and predictor be residualised in partial regression?

<details>
<summary>Hint 1</summary>

Inspect the reduced objective.

</details>
<details>
<summary>Hint 2</summary>

Its design is M_Z W.

</details>
<details>
<summary>Solution</summary>

After optimising the nuisance coefficient, the objective is $\\|M_Zy-M_ZWb\\|^2$. Its normal matrix is $W^\\mathsf TM_ZW$, not $W^\\mathsf TW$. Removing nuisance variation only from the response would generally use the wrong denominator and fail to reproduce the full-model coefficient.

</details>

### Exercise 2.6
<a id="geometry-of-projection-ex-6"></a>

Prove that H_1-H_0 is idempotent for nested fitted spaces.

<details>
<summary>Hint 1</summary>

Multiply using the containment identities.

</details>
<details>
<summary>Hint 2</summary>

Both mixed products equal H_0.

</details>
<details>
<summary>Solution</summary>

Expand the square to $H_1^2-H_1H_0-H_0H_1+H_0^2=H_1-H_0-H_0+H_0=H_1-H_0$. It is symmetric as well, so it is an orthogonal projector onto the additional fitted directions.

</details>

### Exercise 2.7
<a id="geometry-of-projection-ex-7"></a>

When is the centred coefficient of determination undefined?

<details>
<summary>Hint 1</summary>

Its denominator is total centred squared length.

</details>
<details>
<summary>Hint 2</summary>

Consider a constant response.

</details>
<details>
<summary>Solution</summary>

If all responses are equal, their centred total sum of squares is zero. The usual ratio divides by zero and is undefined, even if an intercept produces a perfect fit. Assigning a conventional display value must not be mistaken for the mathematical ratio.

</details>

### Exercise 2.8
<a id="geometry-of-projection-ex-8"></a>

Explain why a pseudoinverse cannot identify a nonestimable contrast.

<details>
<summary>Hint 1</summary>

It chooses one representative in coefficient space.

</details>
<details>
<summary>Hint 2</summary>

The design has unchanged null directions.

</details>
<details>
<summary>Solution</summary>

Different coefficients can give exactly the same mean. A pseudoinverse selects one by a convention such as minimum norm, but the observations still cannot distinguish movement in the null space. A contrast changing under that movement remains nonestimable unless an additional substantive restriction is imposed.

</details>

### Exercise 2.9
<a id="geometry-of-projection-ex-9"></a>

Show that an invertible column recoding preserves fitted values.

<details>
<summary>Hint 1</summary>

Compare column spaces.

</details>
<details>
<summary>Hint 2</summary>

The inverse recoding recovers every original column.

</details>
<details>
<summary>Solution</summary>

The images of $X$ and $XA$ coincide because every new column is in the old space and $X=(XA)A^{-1}$ gives the reverse inclusion. Their orthogonal projectors are therefore the same. Coefficients transform, but the unique fitted vector does not.

</details>

### Exercise 2.10
<a id="geometry-of-projection-ex-10"></a>

Does orthogonality of residuals to predictors prove independence?

<details>
<summary>Hint 1</summary>

Orthogonality is a finite algebraic identity.

</details>
<details>
<summary>Hint 2</summary>

Independence is a probability property.

</details>
<details>
<summary>Solution</summary>

No. Least squares enforces those cross-products for the realised response. Even population zero covariance does not generally imply independence, and the observed residuals are functions of the fitted sample. A probability model is needed to discuss their joint distribution; normality can yield special independence results under further conditions.

</details>

## Summary

Projection separates fitted and residual directions, identifies estimable contrasts and explains nested sums of squares. Partial regression removes nuisance blocks from both response and design. Coordinate recoding preserves a subspace while changing coefficient labels. These are algebraic facts; distributional inference comes next.
`;export{e as default};