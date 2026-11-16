
# Mixed Models: A First Look

Preparation is [GLS](weighted-generalised-least-squares.md), Gaussian conditional distributions, positive-definite matrices and likelihood normalisation. The exact formulas first assume known positive-definite variance components and a full-rank fixed-effect design.

Repeated measurements often share a person, school, laboratory or site. A fixed-effect coefficient describes a common mean structure, while a random effect models variation between those units and creates dependence within them. The grouping is part of the probability model, not simply a convenient label in a file.

This introduction develops Gaussian linear mixed models with known variance components first. Estimating those components and generalising to non-Gaussian mixed models are distinct steps. Partial pooling, prediction for an existing group and prediction for a new group have different uncertainty.

## The joint and marginal models

Let
$$
Y=X\beta+Zb+\varepsilon,
\qquad
b\sim N(0,G),\quad\varepsilon\sim N(0,R),
$$
with independent random effects and errors. The matrices $G,R$ are known positive definite for the first results, and $X$ has full column rank. Then $Y\sim N(X\beta,V)$ with $V=ZGZ^\mathsf T+R$.

Independence and zero means give the marginal covariance directly. Two rows can be correlated through their shared columns of $Z$, even when their errors in $\varepsilon$ are independent. Conditional on $b$, the mean is $X\beta+Zb$; marginally it is $X\beta$. These are different conditional targets.

A fixed group indicator treats a group's mean offset as an unknown parameter with no population law. A random effect instead specifies a distribution for offsets across groups. Neither choice is automatically correct from group count alone. The intended population, exchangeability assumptions and prediction target determine the interpretation.

## Fixed effects use the marginal covariance

With $G,R$ known, the marginal Gaussian likelihood for $\beta$ has quadratic part $(Y-X\beta)^\mathsf TV^{-1}(Y-X\beta)$. Its maximiser is the GLS estimate
$$
\hat\beta=(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TV^{-1}Y.
$$
The covariance is $(X^\mathsf TV^{-1}X)^{-1}$. Here scale is already included in $V$; adding another scale multiplier would require a separate convention.

This estimates the population mean coefficients under the random-effect model. It does not infer that every realised group effect is zero. A group-specific prediction uses the observed group's data and the conditional distribution of its random effect.

## Predict a random effect when the mean is known

The joint Gaussian vector $(b,Y)$ has covariance blocks $G$, $V$ and $GZ^\mathsf T$. Conditional on a known $\beta$,
$$
E[b\mid Y]=GZ^\mathsf TV^{-1}(Y-X\beta),
$$
with conditional covariance
$$
G-GZ^\mathsf TV^{-1}ZG.
$$
These formulas follow from the Gaussian conditional-law theorem. They also have a moment-based linear prediction interpretation.

**Theorem 13.1 (best linear prediction).** With $\beta$ known, the displayed predictor minimises the prediction-error covariance among linear predictors of $b$ based on $Y-X\beta$.

**Proof.** Put $U=Y-X\beta$ and $A_0=GZ^\mathsf TV^{-1}$. The error $b-A_0U$ has zero covariance with $U$, because $GZ^\mathsf T-A_0V=0$. For another matrix $A$, write its error as $(b-A_0U)-(A-A_0)U$. Cross-covariances vanish, leaving
$$
\operatorname{Cov}(b-AU)
=\operatorname{Cov}(b-A_0U)+(A-A_0)V(A-A_0)^\mathsf T.
$$
The added matrix is positive semidefinite. Normality identifies the predictor with a conditional mean; the covariance optimality uses only these moments. ∎

When $\beta$ is unknown, substituting its GLS estimate gives the best linear unbiased predictor under the known-component model. Its uncertainty includes fixed-effect estimation, so the known-$\beta$ conditional covariance alone is not its full prediction-error covariance.

## Penalised least squares and the mixed equations

Another representation minimises
$$
(Y-X\beta-Zb)^\mathsf TR^{-1}(Y-X\beta-Zb)+b^\mathsf TG^{-1}b.
$$
Differentiating gives the block system
$$
\begin{pmatrix}
X^\mathsf TR^{-1}X&X^\mathsf TR^{-1}Z\\
Z^\mathsf TR^{-1}X&Z^\mathsf TR^{-1}Z+G^{-1}
\end{pmatrix}
\begin{pmatrix}\beta\\b\end{pmatrix}
=
\begin{pmatrix}X^\mathsf TR^{-1}Y\\Z^\mathsf TR^{-1}Y\end{pmatrix}.
$$
Its quadratic form in a perturbation $(h,k)$ is $\|Xh+Zk\|_{R^{-1}}^2+\|k\|_{G^{-1}}^2$. It is positive unless both perturbations vanish, since $G^{-1}$ is positive definite and $X$ full rank. Thus the solution is unique.

For fixed $\beta$, completing the square in $b$ gives the Gaussian conditional mean above. Eliminating $b$ leaves the marginal GLS quadratic in $\beta$; this is the standard Woodbury matrix identity applied to $V=R+ZGZ^\mathsf T$. The penalty therefore expresses the known random-effect covariance, not an arbitrary claim that small group effects are scientifically preferable.

## A random-intercept model

Suppose group $j$ has observations $Y_{ij}=\beta+b_j+\varepsilon_{ij}$, with independent $b_j\sim N(0,\tau^2)$ and independent $\varepsilon_{ij}\sim N(0,\sigma^2)$. Within a group, covariance of distinct responses is $\tau^2$, and marginal variance is $\tau^2+\sigma^2$. Their intraclass correlation is $\tau^2/(\tau^2+\sigma^2)$.

With $\beta$ known, group mean $\bar Y_j$ has error variance $\sigma^2/n_j$ around $\beta+b_j$. Gaussian conditioning yields
$$
\hat b_j=\lambda_j(\bar Y_j-\beta),
\qquad
\lambda_j=\frac{\tau^2}{\tau^2+\sigma^2/n_j}.
$$
The conditional variance is $\tau^2(\sigma^2/n_j)/(\tau^2+\sigma^2/n_j)$. More measurements give greater weight to that group's deviation, while noisier group means shrink more toward the population mean.

The shrinkage is not a universal correction for bias in group sampling. It follows from the declared exchangeable Gaussian prior-like population law. Informative group selection, covariate-dependent group effects or measurement error may require another model.

## Existing-group and new-group prediction

A new observation in an existing group shares $b_j$ with its previous data. With known $\beta$ and components, its conditional mean is $\beta+\hat b_j$ and variance is $\sigma^2+\operatorname{Var}(b_j\mid Y)$. A new independent group has mean $\beta$ and variance $\sigma^2+\tau^2$ for one observation.

The difference concerns shared information, not merely whether the fixed-effect row looks the same. Uncertainty in estimated $\beta,\tau^2,\sigma^2$ adds another layer to practical predictions. A plug-in interval that omits that layer should not be labelled exact.

Random slopes extend the covariance structure. If a group has random intercept and slope with covariance matrix $G$, two observations at predictor values $x,x'$ have shared covariance $(1,x)G(1,x')^\mathsf T$. Correlation can then vary with their predictor positions. A single constant intraclass correlation no longer summarises the whole dependence.

## Estimating variance components

For unknown component vector $\theta$, marginal maximum likelihood uses
$$
-\tfrac12\{\log|V(\theta)|+
(Y-X\beta)^\mathsf TV(\theta)^{-1}(Y-X\beta)\}
$$
plus constants. The determinant penalises the covariance volume; minimising only the quadratic residual term would favour making variances arbitrarily large.

Restricted likelihood can be constructed from linear contrasts $K^\mathsf TY$ satisfying $K^\mathsf TX=0$ with rank $n-p$. Their mean does not involve $\beta$, and their covariance is $K^\mathsf TV(\theta)K$. This motivates REML's adjustment for fixed-effect estimation. Comparing REML values across different fixed-effect spaces is not automatically a comparison of the same contrast likelihood.

Variance estimates can lie on boundaries, such as zero random-intercept variance. Standard interior likelihood-ratio chi-square references may then fail. An inverse formula using $G^{-1}$ also excludes a singular zero component; handle it through the appropriate reduced model or a justified limiting representation.

## Generalised mixed models are another integration problem

For binary or count outcomes, one can specify a conditional GLM given $b$ and integrate over a random-effect distribution. The marginal mean is generally not obtained by applying the inverse link to $X\beta$ alone. Logistic-normal averaging, for example, is not equal to the logistic function at the average linear predictor.

Thus conditional and population-averaged coefficients have different meanings. Numerical integration, Laplace approximation or simulation supplies further approximation questions. The Gaussian formulas here are not exact algorithms for every non-Gaussian mixed model. A first analysis should state which distribution is conditional, which quantities are integrated out and which prediction target is being reported.

## Unknown fixed means and the full BLUP covariance

The known-component best linear unbiased prediction result can be made explicit. Let
$$
P=V^{-1}-V^{-1}X(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TV^{-1}.
$$
Then $PX=0$, $P^\mathsf T=P$ and $PVP=P$. The predictor obtained by substituting GLS fixed effects is $\tilde b=GZ^\mathsf TPY$.

A linear predictor $CY$ has mean zero for every possible fixed $\beta$, as does the random effect, precisely when $CX=0$. Set $C_*=GZ^\mathsf TP$. For any other such predictor, write $C=C_*+D$ with $DX=0$. The cross-covariance between $b-C_*Y$ and $DY$ is
$$
(GZ^\mathsf T-C_*V)D^\mathsf T
=GZ^\mathsf TV^{-1}X(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TD^\mathsf T=0.
$$
Thus its error covariance increases by $DVD^\mathsf T$, proving the claimed optimality in the linear-unbiased predictor class.

Expanding the optimal error and using $PVP=P$ gives
$$
\operatorname{Cov}(b-\tilde b)=G-GZ^\mathsf TPZG.
$$
This is the known-component prediction-error covariance when fixed effects are estimated. It differs from $G-GZ^\mathsf TV^{-1}ZG$, which conditioned on a known fixed mean. The distinction is a concrete additional uncertainty term, not merely a warning in prose.

These formulas continue to assume the variance components are known. Plugging estimated components into both predictor and covariance does not preserve an exact finite-sample statement. Approximate or resampling adjustments need their own assumptions and must respect the independent grouping unit.

## Replication identifies different components

With one observation in each independent random-intercept group, the marginal variance is $\tau^2+\sigma^2$ and no within-group covariance is observed. If those are the only unknown variance components and the design supplies no additional information, the likelihood depends on their sum rather than their separate values. Many such single observations can estimate that sum precisely while leaving its decomposition unidentified.

Two or more observations in a group expose an off-diagonal covariance $\tau^2$ under the model. Across sufficiently many independent groups, within- and between-group moments can then separate the components under suitable conditions. More rows inside one group still do not create more independent draws from the group-effect population.

**Worked example: identical marginal models.** Suppose every group contributes just one observation and total marginal variance is thirteen. Component pairs $(\tau^2,\sigma^2)=(4,9)$ and $(1,12)$ give the same marginal Gaussian response law in this design. They nevertheless predict different correlations for future repeated measurements and different pooling for an expanded design. Those differences cannot be identified from the original one-observation-per-group data alone.

This shows why a software component estimate can be unstable or boundary-valued for structural reasons. Numerical convergence is not proof that the observation design distinguishes every parameter. State the source of replication and which covariance features it can reveal before interpreting estimated population heterogeneity.


## Exchangeability is a modelled comparison

Independent identically distributed random intercepts treat groups symmetrically before their covariates and outcomes are observed. This is an exchangeability assumption conditional on the fixed-effect structure. If groups have known systematic differences, include relevant predictors or model different effect distributions rather than assuming their offsets come from one unexplained common population.

Shrinking an unusually large observed mean toward the population is then a conditional prediction under that model. It should not be described as discovering that the group truly resembles the population more closely. Different prior-like covariance assumptions can give different pooling, especially when group information is weak.

For a finite collection of specifically named groups, fixed effects can instead be the intended description. For predicting a new comparable group, a population distribution may be useful. These are substantive targets that should be chosen before interpreting which fitted model returned smaller standard errors.

## Worked example 13.1: different group sizes produce different pooling

Take known population mean ten, $\tau^2=4$ and $\sigma^2=9$. A group of one has shrinkage weight $4/13$, while a group of nine has weight $4/5$. If both observed means are twelve, predicted deviations are $8/13$ and $8/5$. The more precise group stays closer to its observed deviation. These are model-based conditional predictions, not causal estimates of group quality.

## Worked example 13.2: one more observation versus one new group

With $\tau^2=4$, $\sigma^2=9$ and a group of nine observations, posterior random-intercept variance is $4\cdot1/(4+1)=4/5$. A further observation in that group has conditional variance $9+4/5=49/5$ when the mean is known. A first observation from a new group has variance thirteen. Their fixed intercept is identical, but their available group information differs.

## Worked example 13.3: correlated random intercept and slope

Let $G=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$. Two rows in the same group at predictor values zero and two have shared covariance $(1,0)G(1,2)^\mathsf T=2$. At zero and minus two the shared covariance is zero. Random-effect covariance therefore depends on design positions, even with the same group membership. Add independent measurement variance on the diagonal before computing correlations.

## What restricted likelihood removes

For a Gaussian model with fixed full-rank mean design, choose a matrix whose columns span the orthogonal complement of that design. Multiplying the response by its transpose produces error contrasts whose mean is zero for every fixed-effect coefficient.

Their covariance is the corresponding projected covariance matrix. The Gaussian log density of those contrasts is therefore a likelihood for covariance parameters that contains no fixed-effect mean parameter. This is the basis of restricted maximum likelihood: it works with information remaining after the declared mean space has been removed.

Choosing another basis for the same contrast space applies an invertible linear transformation. Its density Jacobian contributes a constant independent of covariance parameters, so the covariance maximiser is unchanged. The basis choice is a coordinate convention, while the removed mean space is substantive.

If the fixed-effect design changes, the contrast space changes too. Restricted likelihood values from different fixed-effect spaces are therefore not automatically comparable as ordinary likelihoods for selecting those mean models. Restricted likelihood also does not guarantee unbiased variance components in every finite sample, nor does it remove boundary estimates or covariance-model misspecification. Those remain separate statistical issues.

## A random intercept changes variance without changing a mean contrast

Take two observations from the same group with a shared random intercept and independent measurement errors of equal variance. Their difference removes the random intercept exactly. Its variance is twice the measurement-error variance, regardless of the random-intercept variance. Their average instead retains the full random intercept and has variance equal to the random-intercept variance plus half the measurement-error variance. Expanding the two linear combinations proves both statements directly.

For observations from different independent groups, the difference has two random-intercept contributions and therefore a larger variance when that component is positive. A contrast's uncertainty thus depends on which observations share the latent effect, not just their marginal variances. Repeating observations inside one group improves estimation of its conditional mean but does not average away that group's shared deviation. The same calculation explains why an interval for an existing group's latent intercept and a prediction interval for a new independent group's outcome must include different variance components.

## Exercises

### Exercise 13.1
<a id="mixed-models-first-look-ex-1"></a>

Derive the marginal covariance of Y.

<details>
<summary>Hint 1</summary>

Expand Zb plus epsilon.

</details>
<details>
<summary>Hint 2</summary>

Random effects and errors are independent.

</details>
<details>
<summary>Solution</summary>

The covariance is $ZGZ^\mathsf T+R$, because the cross-covariance terms vanish. The fixed mean adds no covariance. Rows sharing random effects can therefore be correlated even when their conditional measurement errors are independent.

</details>

### Exercise 13.2
<a id="mixed-models-first-look-ex-2"></a>

Why does the known-component fixed-effect estimate have a GLS form?

<details>
<summary>Hint 1</summary>

Write the marginal Gaussian quadratic.

</details>
<details>
<summary>Hint 2</summary>

The determinant does not involve beta.

</details>
<details>
<summary>Solution</summary>

At known $V$, maximising the marginal likelihood over $\beta$ minimises $(Y-X\beta)^\mathsf TV^{-1}(Y-X\beta)$. The weighted normal equations give the GLS formula. Variance-component estimation is a separate optimisation involving the determinant as well.

</details>

### Exercise 13.3
<a id="mixed-models-first-look-ex-3"></a>

Prove the best-linear-prediction covariance decomposition.

<details>
<summary>Hint 1</summary>

Subtract the candidate conditional linear mean.

</details>
<details>
<summary>Hint 2</summary>

Its error is uncorrelated with the data residual vector.

</details>
<details>
<summary>Solution</summary>

With $A_0=GZ^\mathsf TV^{-1}$, $\operatorname{Cov}(b-A_0U,U)=0$. Expanding the error for $A=A_0+D$ leaves the optimal error covariance plus $DVD^\mathsf T$. The latter is positive semidefinite, proving the moment-based comparison.

</details>

### Exercise 13.4
<a id="mixed-models-first-look-ex-4"></a>

For tau squared one, sigma squared four and n_j=4 find the shrinkage factor.

<details>
<summary>Hint 1</summary>

The group mean error variance is sigma squared divided by n_j.

</details>
<details>
<summary>Hint 2</summary>

Compare it with the group variance.

</details>
<details>
<summary>Solution</summary>

The group-mean measurement variance is one, so the weight is $1/(1+1)=1/2$. Half the observed deviation from the known population mean is retained. The posterior random-intercept variance is also one-half, under the stated Gaussian model.

</details>

### Exercise 13.5
<a id="mixed-models-first-look-ex-5"></a>

What happens to the pooling factor as group size grows?

<details>
<summary>Hint 1</summary>

The mean measurement variance decreases.

</details>
<details>
<summary>Hint 2</summary>

Hold the positive variance components fixed.

</details>
<details>
<summary>Solution</summary>

With $\tau^2>0$, $\sigma^2/n_j$ tends to zero, so $\lambda_j$ tends to one. The group's own mean becomes highly informative about its realised offset. This does not remove uncertainty in the population mean or in estimated variance components.

</details>

### Exercise 13.6
<a id="mixed-models-first-look-ex-6"></a>

Why are new-group and existing-group intervals different?

<details>
<summary>Hint 1</summary>

Only one group has previously observed data.

</details>
<details>
<summary>Hint 2</summary>

The new random effect has its full population variance.

</details>
<details>
<summary>Solution</summary>

Existing-group data reduce conditional uncertainty about their shared effect. A new independent group retains variance $\tau^2$ before any observation. Its predictive variance is therefore larger than the known-component existing-group variance, apart from additional fixed-effect estimation uncertainty.

</details>

### Exercise 13.7
<a id="mixed-models-first-look-ex-7"></a>

Why cannot one estimate variance components by the quadratic term alone?

<details>
<summary>Hint 1</summary>

Larger variances reduce a weighted residual penalty.

</details>
<details>
<summary>Hint 2</summary>

The determinant term controls covariance volume.

</details>
<details>
<summary>Solution</summary>

Without $\log|V|$, inflating covariance can drive the quadratic residual term down without a meaningful likelihood trade-off. The Gaussian normalisation contributes the determinant and is essential. A least-squares-looking expression alone is not the full component likelihood.

</details>

### Exercise 13.8
<a id="mixed-models-first-look-ex-8"></a>

What is the purpose of K transpose X=0 in restricted likelihood?

<details>
<summary>Hint 1</summary>

Apply the contrast to the fixed mean.

</details>
<details>
<summary>Hint 2</summary>

It removes beta from the transformed mean.

</details>
<details>
<summary>Solution</summary>

The contrast response $K^\mathsf TY$ has mean zero independent of $\beta$ and covariance $K^\mathsf TVK$. Its likelihood can estimate covariance components while accounting for the eliminated fixed-effect directions. Different fixed-effect spaces can lead to different contrasts, so their restricted likelihoods are not automatically comparable.

</details>

### Exercise 13.9
<a id="mixed-models-first-look-ex-9"></a>

Why is a zero variance component an inferential boundary?

<details>
<summary>Hint 1</summary>

Variances cannot become negative in the model.

</details>
<details>
<summary>Hint 2</summary>

Interior likelihood theory assumes an open local parameter neighbourhood.

</details>
<details>
<summary>Solution</summary>

A zero component lies at the edge of the admissible covariance family. Standard interior chi-square likelihood-ratio arguments need not apply there, and formulas involving its inverse become singular. Use an appropriate boundary theorem or reduced model rather than ignoring the constraint.

</details>

### Exercise 13.10
<a id="mixed-models-first-look-ex-10"></a>

Does a logistic mixed model have marginal success probability equal to the logistic function of X beta?

<details>
<summary>Hint 1</summary>

Average the inverse link over the random effect.

</details>
<details>
<summary>Hint 2</summary>

A nonlinear function does not commute with expectation.

</details>
<details>
<summary>Solution</summary>

Generally no. Its marginal probability is the integral of the logistic function at $X\beta+Zb$ against the random-effect distribution. This differs from applying the logistic function to its mean argument. Conditional coefficients and population-averaged effects therefore require distinct interpretation.

</details>

## Summary

Gaussian mixed models separate conditional group structure from marginal covariance. Known components give GLS fixed effects and best linear random-effect prediction, with pooling tied to group precision. Existing and new groups have different predictive information. Component estimation, boundaries and non-Gaussian integration require additional theory.
