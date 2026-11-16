
# Diagnostics and Influence

Preparation is [projection geometry](geometry-of-projection.md), [normal-theory inference](gauss-markov-and-inference.md), and [multiple regression](multiple-regression-collinearity.md). Distinguish the scalar residual from a coordinate-basis vector whenever both appear.

A diagnostic compares observed structure with implications of a model or a fitting rule. It can reveal an implausible mean pattern, unusual error scale or a sensitive observation, but it does not automatically identify the cause. This chapter derives leverage, deleted-fit effects and studentised residuals so that diagnostic summaries retain their mathematical targets.

Assume a fixed full-rank design $X$ with $p$ columns and $n>p$ rows. Write $H=X(X^\mathsf TX)^{-1}X^\mathsf T$, $M=I-H$, $e=MY$ and $s^2=e^\mathsf Te/(n-p)$. The spherical error model is used only when a distribution or covariance is claimed; the deletion identities themselves are algebraic.

## Leverage describes a design position

**Definition 5.1.** Observation $i$ has leverage $h_i=H_{ii}=x_i^\mathsf T(X^\mathsf TX)^{-1}x_i$, where $x_i^\mathsf T$ is its design row. Because $H$ is an orthogonal projector,
$$
h_i=\|H e_i^{\rm coord}\|^2,\qquad0\le h_i\le1,\qquad\sum_i h_i=p.
$$
Here $e_i^{\rm coord}$ is a coordinate vector, distinct from the scalar residual. If an intercept is present, $h_i\ge1/n$: split the fitted space into the constant direction and an orthogonal complement, whose projection has nonnegative diagonal.

Leverage depends on the selected columns and their realised values, not on the response. A point far from the centre in a weakly represented design direction can have high leverage. A large response alone does not imply high leverage.

Under spherical errors, $\operatorname{Var}(e_i\mid X)=\sigma^2(1-h_i)$. A high-leverage observation can pull its fitted value toward itself, leaving a small raw residual. Thus small residual does not imply small potential influence. Residual covariances are $\sigma^2M_{ij}$; residuals are generally correlated even when original errors are independent.

## Delete one observation exactly

Assume $h_i<1$, so the design remaining after deletion stays full rank. Let $\hat\beta_{(-i)}$ be its least-squares estimate.

**Theorem 5.2 (deleted coefficient and residual).**
$$
\hat\beta_{(-i)}-\hat\beta
=-\frac{(X^\mathsf TX)^{-1}x_i e_i}{1-h_i},
\qquad
y_i-x_i^\mathsf T\hat\beta_{(-i)}
=\frac{e_i}{1-h_i}.
$$

**Proof.** Put $A=X^\mathsf TX$ and $d=-A^{-1}x_ie_i/(1-h_i)$. The deleted normal equation has normal matrix $A-x_ix_i^\mathsf T$. Since $A\hat\beta=X^\mathsf Ty$,
$$
(A-x_ix_i^\mathsf T)\hat\beta
=X^\mathsf Ty-x_i(x_i^\mathsf T\hat\beta).
$$
Also $(A-x_ix_i^\mathsf T)d=-x_ie_i$. Adding gives $X^\mathsf Ty-x_iy_i$, precisely the deleted right side. Full rank ensures the proposed coefficients are the unique solution. Substitution into the held-out prediction gives $e_i+h_ie_i/(1-h_i)=e_i/(1-h_i)$. ∎

The rank condition matters. If $h_i=1$, observation $i$ carries a fitted direction unsupported by all other rows; deleting it makes the coefficient problem singular. Dividing by $1-h_i$ is then not a large finite influence estimate but an undefined formula.

## Influence measures a change in fitted quantities

A coefficient change has units depending on its column. To combine changes, Cook’s distance scales the induced fitted-vector change:
$$
D_i=\frac{(\hat\beta_{(-i)}-\hat\beta)^\mathsf T
X^\mathsf TX(\hat\beta_{(-i)}-\hat\beta)}{p s^2}
=\frac{e_i^2h_i}{p s^2(1-h_i)^2}.
$$
The identity follows by inserting the deleted coefficient formula and using $x_i^\mathsf TA^{-1}x_i=h_i$. It combines response discrepancy with leverage. It is undefined when scale is zero or the deleted design loses rank.

A large value says that this deletion changes the fitted vector substantially in the selected metric. It does not prove recording error or justify exclusion. A legitimate rare design point can be influential precisely because it supplies information unavailable elsewhere. Data-quality investigation, scientific relevance and sensitivity reporting are different responses.

For a particular contrast $a^\mathsf T\beta$, the deletion effect is $-a^\mathsf TA^{-1}x_ie_i/(1-h_i)$. Two observations can therefore rank differently for different scientific contrasts, even when a global influence metric ranks one above the other.

## Internally and externally studentised residuals

The internally standardised residual is $r_i=e_i/\{s\sqrt{1-h_i}\}$. Its numerator and scale estimate use the same observation. It is not an ordinary t variable. Indeed Cauchy–Schwarz in the residual subspace gives $e_i^2\le(1-h_i)\mathrm{RSS}$, so $|r_i|\le\sqrt{n-p}$ whenever the ratio exists. A true t distribution has unbounded support.

If $n>p+1$ and the deleted design has full rank, define its scale $s_{(-i)}^2=\mathrm{RSS}_{(-i)}/(n-p-1)$. Algebraic projection gives
$$
\mathrm{RSS}_{(-i)}=\mathrm{RSS}-\frac{e_i^2}{1-h_i}.
$$
One way to establish it is to compare the deleted residual objective at the full and updated coefficient solutions; the normal-equation expansion leaves exactly the displayed reduction.

Under independent Gaussian spherical errors,
$$
t_i=\frac{e_i}{s_{(-i)}\sqrt{1-h_i}}
$$
has t law with $n-p-1$ degrees of freedom for a fixed predeclared observation. Conditional on the deleted data's design, the deleted fit and its residual scale are Gaussian-independent; its prediction error for the independent left-out response has variance $\sigma^2/(1-h_i)$. This gives the pivot. Choosing the largest absolute value among all observations changes its reference law.

## Residual plots pose model questions

A systematic curved residual pattern against fitted values suggests the conditional mean may be inadequately represented. A widening spread can indicate heteroskedasticity, but it can also arise from a mean error or selection. Serial patterns suggest dependence or a missing time component. These interpretations are hypotheses to investigate, not proofs of a particular replacement model.

Plots of residuals against included predictors also reflect the normal-equation constraints. A fitted linear trend can be forced to zero by construction. Looking only for that trend would be uninformative. Nonlinear patterns, design strata, independent measurements and domain knowledge provide additional questions.

Normal-quantile diagnostics concern distributional shape. Deviations in a small sample can be chance variation, while an apparently straight plot does not establish independent errors or a correct mean. The exact t and F theorem needs all of its hypotheses, not just a plausible marginal histogram.

## Selection, scale and the unit of deletion

Deleting one row is meaningful only relative to the observational unit. With repeated measurements within a person, a one-row deletion retains the other observations from that person and asks a different question from deleting the entire person. A time-series forecast must remove or withhold future blocks consistent with its information target.

Thresholds such as a multiple of average leverage are screening conventions. They are not universal probability laws or automatic deletion instructions. Report the investigated contrast, the sensitivity change and any data-quality finding. If a point is removed because of the observed response, ordinary inference after removal must account for that selection or be described as exploratory.

A robust alternative likewise needs a declared target and procedure. Robust fitting can reduce sensitivity to response contamination without resolving measurement error, covariate shifts or causal confounding. Diagnostics are most useful when they lead to a specific revised assumption whose consequences can be compared.

## Leave-one-out prediction and PRESS

The deleted-residual identity immediately gives the prediction sum of squares
$$
\mathrm{PRESS}=\sum_i\left(\frac{e_i}{1-h_i}\right)^2,
$$
provided every deleted design remains full rank. It is the sum of squared errors obtained by refitting after leaving out each row and predicting that omitted response. One full least-squares fit suffices to calculate it algebraically; this is not an approximation replacing those deleted fits.

PRESS differs from training residual sum because each denominator accounts for the row's contribution to its own fit. High-leverage observations receive especially large corrections. A point can therefore contribute modestly to training error but dominate a leave-one-out prediction score.

The relevant prediction procedure is trained on $n-1$ observations. Under iid sampling, its average loss addresses a fresh observation under that smaller-training-sample procedure. With fixed designs, clustered observations or time order, the target requires more careful specification. A formula for leave-one-out errors does not itself make the held-out unit independent.

If one uses PRESS to choose among many models and reports the minimum as an unbiased final performance estimate, selection has entered again. The score supports tuning, while an independent evaluation or a theorem covering the search supports a final performance claim.

## Delete a block of observations

Let $I$ index a group of rows, $X_I$ its design block and $e_I$ the full-fit residual block. Define $H_{II}=X_I(X^\mathsf TX)^{-1}X_I^\mathsf T$. When $I-H_{II}$ is invertible and the remaining design has full rank, the deleted-block prediction residual is
$$
y_I-X_I\hat\beta_{(-I)}=(I-H_{II})^{-1}e_I.
$$
To see this, put $A=X^\mathsf TX$ and write $d=\hat\beta_{(-I)}-\hat\beta$. The deleted normal equations give
$$
(A-X_I^\mathsf TX_I)d=-X_I^\mathsf Te_I.
$$
Equivalently $Ad=-X_I^\mathsf T(e_I-X_Id)$. Multiply by $X_IA^{-1}$ and define the deleted prediction residual $r=e_I-X_Id$. Then $r=e_I+H_{II}r$, proving the displayed formula. The algebra explicitly identifies the matrix whose invertibility is needed.

Block deletion is not the sum of isolated row deletions: rows within the block can jointly support a fitted direction, and off-diagonal hat entries couple their effects. A group whose individual leverages look moderate can nevertheless become influential when removed together.

**Worked example: two isolated group indicators.** Suppose one design column marks a group and is nonzero only on the rows in $I$. Deleting all those rows removes that column's support, so the remaining design loses rank. The block formula is singular for a substantive reason. The data contain no observations of that group after deletion. A software generalised inverse can choose coefficients, but it cannot supply the deleted group's missing information.

## Sensitivity is not a probability of error

A deletion analysis asks how an estimator changes under a specified perturbation. It does not assign a posterior probability that an observation is wrong. Those questions need an error-detection or contamination model with its own prior or sampling assumptions.

Similarly, comparing a robust and an ordinary fit can reveal how much their chosen loss functions differ on the observed table. Agreement does not prove absence of contamination, and disagreement does not select which fit targets the intended scientific quantity. Report which observations and contrasts drive the difference.

The most useful diagnostic conclusion is specific: a particular curvature remains, a stated group controls a contrast, a variance pattern contradicts a constant-scale model, or a future-target score deteriorates. Such a conclusion can motivate a mathematical model change. A generic label of “bad point” cannot substitute for that reasoning.


## The direction of a deleted-fit change

The deleted coefficient formula is a vector, so a large residual does not shift every coefficient in the same way. Its direction is determined by $(X^\mathsf TX)^{-1}x_i$. A scientific contrast nearly perpendicular to that vector can be insensitive even when other coefficients change considerably.

The corresponding change in fitted response at a row $x_*^\mathsf T$ is
$$
-x_*^\mathsf T(X^\mathsf TX)^{-1}x_i\,e_i/(1-h_i).
$$
This exhibits a cross-leverage between the deleted observation and the prediction target. At observed rows it is a hat-matrix entry; at a future row it depends on that row's support in the design. A single global influence ranking therefore cannot replace target-specific sensitivity.

An informative report can state both the global fitted-vector change and the change in the main contrast or prediction. If those disagree in importance, the disagreement is a mathematical consequence of different directions rather than a contradiction between diagnostics.

## Worked example 5.1: high leverage with a small residual

Suppose an intercept-and-slope fit has $p=2$, $s=1$, and a row has $h_i=0.9$ with residual $e_i=0.2$. Its deleted prediction error is $0.2/0.1=2$, while Cook’s distance is $0.04(0.9)/(2(0.1)^2)=1.8$. The original raw residual looks small because the fit can move toward this isolated design point. Neither number establishes whether the row is erroneous.

## Worked example 5.2: the intercept-only case

With $n$ observations and an intercept only, every leverage is $1/n$. Deleting observation $i$ changes the mean by $-(y_i-\bar y)/(n-1)$, exactly the general coefficient formula. The deleted prediction error is $n(y_i-\bar y)/(n-1)$. This familiar case makes clear that deletion evaluates a refitted procedure, not merely a residual under the unchanged full-data fit.

## Worked example 5.3: different targets, different influence

Let two orthogonal centred predictor directions be measured on very different scales. An observation can have an error-propagation vector $A^{-1}x_ie_i/(1-h_i)$ dominated by the first coefficient. A scientific contrast selecting the second coefficient can then change little despite a large global fitted-vector change. Conversely a modest global change can matter for a precise targeted contrast. Influence should therefore be interpreted with the quantity the learner intends to report.

## A small residual can hide a leverage problem

Under the spherical linear model, the ordinary residual at observation $i$ has variance $\sigma^2(1-h_{ii})$. High leverage therefore reduces the variance of its own training residual. The fitted surface has been allowed to move strongly toward that observation, so a small residual alone is weak evidence against influence.

When deletion preserves rank, the leave-one-out residual divides that ordinary residual by $1-h_{ii}$. Its variance is consequently $\sigma^2/(1-h_{ii})$, which can be large near leverage one. These two formulas describe the same observation under different prediction tasks, not contradictory assessments.

At leverage exactly one, the deletion formula’s denominator vanishes and removing the observation destroys an essential design direction. Reporting an enormous finite diagnostic in place of that structural failure would hide the identifiability issue. The remedy is to inspect the design and intended prediction population, rather than applying a universal numerical cutoff to whichever residual looks most reassuring.

## A leverage sum limits how many extreme sites can occur

The hat matrix is an orthogonal projection of rank p, so each diagonal leverage lies between zero and one and their sum is p. For any positive threshold a, the number of observations whose leverage exceeds a is at most p divided by a: otherwise the sum of those diagonal entries alone would exceed the trace. This is a deterministic counting bound for a fixed design, requiring no response model.

The bound does not make a particular leverage value a probability of an error. It says that high-leverage rows consume a finite geometric budget. If p is close to the number of observations, many leverages must be large on average, and deleting a row can severely alter the available design information. Conversely, one unusual response at a low-leverage site can still have a substantial residual. Diagnosing leverage, residual magnitude and deletion influence answers three different questions, and no one of these summaries determines the others.

## Exercises

### Exercise 5.1
<a id="diagnostics-and-influence-ex-1"></a>

Prove that leverages sum to p.

<details>
<summary>Hint 1</summary>

Use trace of the fitted projector.

</details>
<details>
<summary>Hint 2</summary>

Its rank equals p.

</details>
<details>
<summary>Solution</summary>

The sum of diagonal entries is $\operatorname{tr}(H)$. A symmetric idempotent matrix has one eigenvalue for each fitted direction and zero for each residual direction, so its trace equals its rank $p$. This explains average leverage $p/n$ without assigning a probability distribution to individual design positions.

</details>

### Exercise 5.2
<a id="diagnostics-and-influence-ex-2"></a>

Derive the residual covariance under spherical errors.

<details>
<summary>Hint 1</summary>

Residuals equal M times errors under the correct mean.

</details>
<details>
<summary>Hint 2</summary>

Use symmetry and idempotence.

</details>
<details>
<summary>Solution</summary>

Since $MX\beta=0$, $e=M\varepsilon$. Its covariance is $\sigma^2MM^\mathsf T=\sigma^2M$, yielding variance $\sigma^2(1-h_i)$ at each row and generally nonzero off-diagonal covariances. Independent errors do not make fitted residuals independent.

</details>

### Exercise 5.3
<a id="diagnostics-and-influence-ex-3"></a>

Why can leverage be computed before observing responses?

<details>
<summary>Hint 1</summary>

Inspect the hat-matrix formula.

</details>
<details>
<summary>Hint 2</summary>

It uses only the design.

</details>
<details>
<summary>Solution</summary>

Every $h_i$ is a function of $X$ through $X(X^\mathsf TX)^{-1}X^\mathsf T$. It therefore measures design position, not an observed response discrepancy. Influence combines that position with the actual residual and may change when the response changes.

</details>

### Exercise 5.4
<a id="diagnostics-and-influence-ex-4"></a>

Find the deleted prediction error for e_i=1 and h_i=1/4.

<details>
<summary>Hint 1</summary>

Refitting changes the residual.

</details>
<details>
<summary>Hint 2</summary>

Divide by one minus leverage.

</details>
<details>
<summary>Solution</summary>

The deleted prediction error is $1/(3/4)=4/3$. It is larger than the full-data residual because the observation helped fit its own prediction. The identity requires the deleted design to retain full rank, which holds when the leverage is strictly below one.

</details>

### Exercise 5.5
<a id="diagnostics-and-influence-ex-5"></a>

Why is an internally standardised residual not t distributed?

<details>
<summary>Hint 1</summary>

Its scale includes the same observation.

</details>
<details>
<summary>Hint 2</summary>

Its support is bounded by residual dimension.

</details>
<details>
<summary>Solution</summary>

The ratio satisfies $|r_i|\le\sqrt{n-p}$ because $e_i^2/(1-h_i)\le\mathrm{RSS}$. A t distribution has unbounded support. The internally shared scale therefore cannot have the independent chi-square relationship required by the ordinary t pivot.

</details>

### Exercise 5.6
<a id="diagnostics-and-influence-ex-6"></a>

What are the degrees of freedom for an externally studentised residual with n=20 and p=4?

<details>
<summary>Hint 1</summary>

Delete one row but retain the same coefficient dimension.

</details>
<details>
<summary>Hint 2</summary>

Its scale uses n-p-1 residual directions.

</details>
<details>
<summary>Solution</summary>

The t reference has fifteen degrees of freedom, under the predeclared-row Gaussian assumptions and full rank after deletion. Searching all rows for the largest absolute studentised residual is another procedure and does not retain that single-statistic tail probability.

</details>

### Exercise 5.7
<a id="diagnostics-and-influence-ex-7"></a>

Derive Cook's distance from the deleted coefficient vector.

<details>
<summary>Hint 1</summary>

Insert the exact coefficient difference.

</details>
<details>
<summary>Hint 2</summary>

The remaining quadratic form is leverage.

</details>
<details>
<summary>Solution</summary>

Substituting $d=-A^{-1}x_ie_i/(1-h_i)$ into $d^\mathsf TAd/(p s^2)$ gives $e_i^2x_i^\mathsf TA^{-1}x_i/\{p s^2(1-h_i)^2\}$. The central scalar is $h_i$, proving the formula. It measures the change in fitted values through the full design metric.

</details>

### Exercise 5.8
<a id="diagnostics-and-influence-ex-8"></a>

Does a large Cook's distance justify deleting an observation?

<details>
<summary>Hint 1</summary>

Sensitivity and error are different findings.

</details>
<details>
<summary>Hint 2</summary>

A legitimate point can uniquely support a design direction.

</details>
<details>
<summary>Solution</summary>

No. It identifies a sensitive fit under one deletion and metric. Investigate collection, coding and scientific relevance, then report the effect of retaining or excluding the point. Removing legitimate rare design information can distort the target population and create response-dependent selection.

</details>

### Exercise 5.9
<a id="diagnostics-and-influence-ex-9"></a>

Why might group deletion be more relevant than row deletion?

<details>
<summary>Hint 1</summary>

Several rows can share one source of randomness.

</details>
<details>
<summary>Hint 2</summary>

Match the perturbation to the intended unit.

</details>
<details>
<summary>Solution</summary>

With repeated measurements within a person or site, deleting one row leaves correlated information from the same unit. Deleting the whole group asks how the fit depends on that group as a source of evidence. The appropriate choice depends on the sampling design and prediction target, not only file layout.

</details>

### Exercise 5.10
<a id="diagnostics-and-influence-ex-10"></a>

What does a zero linear residual trend against an included predictor establish?

<details>
<summary>Hint 1</summary>

The normal equations enforce an orthogonality.

</details>
<details>
<summary>Hint 2</summary>

It is not an independent model check.

</details>
<details>
<summary>Solution</summary>

With least squares that cross-product is zero by construction, so its absence supplies no evidence for a correct conditional mean. Curvature, stratified patterns, dependence and independent information can still reveal deficiencies. A built-in identity must not be presented as confirmation of the assumption used for inference.

</details>

## Summary

Leverage describes design position, deletion identities quantify sensitivity, and Cook’s distance combines both response discrepancy and leverage. Internally and externally studentised residuals have different laws. Diagnostic patterns pose questions; exclusion, model replacement and inferential calibration require separate arguments.
