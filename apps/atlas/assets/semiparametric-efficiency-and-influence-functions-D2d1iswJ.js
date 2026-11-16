var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: semiparametric-efficiency-and-influence-functions
title: "Semiparametric Efficiency and Influence Functions"
level: graduate
license: CC BY-SA 4.0
---

# Semiparametric Efficiency and Influence Functions

Preparation is $L_2$ projection, likelihood scores, iid central limits and the preceding estimating-equation chapter. The Riesz/projection tools are standard Hilbert-space inputs; the statistical derivative and estimator claims below state their own regularity assumptions.

## From an estimator formula to a derivative of a target

A statistical target is a functional $\\psi(P)$ of the data law. Semiparametric inference asks how that target changes along small model perturbations and which first-order estimator has the least variance compatible with those changes.

This is a different question from the elementary robustness derivative under a point-mass contamination. Here directions are square-integrable scores of regular probability paths, and nuisance parameters can form an infinite-dimensional function space. The [L3 inference book](../principles-statistical-inference.md) supplies expectation, likelihood and asymptotic-normality preparation; this chapter develops the Hilbert-space argument and a full cross-fitted example.

All expectations below are under a fixed true law $P$ unless another law is specified. Write $L_2^0(P)$ for square-integrable real functions with mean zero, with inner product $E(fg)$. Closed-subspace projection and its orthogonal decomposition are the standard $L_2$ Hilbert-space tools used here.

## Scores and the tangent space

A dominated path $P_t$ through $P=P_0$ is differentiable in quadratic mean with score $s\\in L_2^0(P)$ if, for a common dominating measure,
$$
\\int\\left(\\sqrt{p_t}-\\sqrt p-\\frac t2s\\sqrt p\\right)^2=o(t^2).
$$
The factor one-half comes from differentiating a square root. Not every informal density perturbation has such a score; the stated limit is a regularity condition.

For a bounded mean-zero function $h$, the density tilt $p_t=p(1+th)$ is a valid probability law for sufficiently small positive and negative $t$. Taylor expansion of the square root, uniform on that bounded range, gives score $h$. Its total mass is one because $Eh=0$.

The tangent space $\\mathcal H$ is the closed linear span in $L_2^0(P)$ of the model’s path scores. A full nonparametric dominated model has $\\mathcal H=L_2^0(P)$: bounded mean-zero functions are dense, obtained by truncating any square-integrable function and subtracting its mean. A restricted model can have a smaller space.

Assume the derivative $\\dot\\psi(s)$ along paths is a continuous linear functional on $\\mathcal H$. A gradient is a mean-zero square-integrable function $\\phi$ satisfying
$$
\\dot\\psi(s)=E(\\phi s)\\qquad(s\\in\\mathcal H).
$$
Existence of such a representation is a differentiability property of the target, not automatic for every statistical functional.

## The canonical gradient and a variance bound

If $\\phi$ is any gradient, let $\\phi_{\\rm eff}$ be its orthogonal projection onto $\\mathcal H$. The residual is orthogonal to every score, so the projection represents exactly the same derivative. The projection is the unique representing gradient lying in $\\mathcal H$.

Every other gradient has form $\\phi_{\\rm eff}+r$ with $r\\perp\\mathcal H$. Hence
$$
E\\phi^2=E\\phi_{\\rm eff}^2+Er^2\\ge E\\phi_{\\rm eff}^2.
$$
This proves the canonical gradient’s minimum variance among all representing gradients.

An asymptotically linear estimator has expansion
$$
\\sqrt n(\\widehat\\psi-\\psi(P))
=\\frac1{\\sqrt n}\\sum_{i=1}^n\\phi(O_i)+o_p(1).
$$
When its influence represents the model’s path derivative, the preceding calculation lower-bounds its first-order variance. This is the regular asymptotically linear efficiency comparison used here.

The chapter does not prove a universal lower bound for every imaginable estimator. Local regularity and the derivative representation matter; superefficiency at one law or a biased pointwise construction does not contradict a bound for this declared class. General convolution theorems require additional local-asymptotic arguments.

For a mean target in the full model, $\\psi(P)=EY$, the tilt derivative is $E(Ys)=E[(Y-\\mu)s]$. Thus $\\phi_{\\rm eff}=Y-\\mu$ and the empirical mean has the required expansion exactly.

## Parametric nuisance directions

Let a regular finite-dimensional model have scalar target $\\theta$ and nuisance vector $\\eta$, with mean-zero scores $S_\\theta,S_\\eta$. Assume the nuisance information matrix $I_{\\eta\\eta}=E(S_\\eta S_\\eta^T)$ is invertible.

Project the target score off the nuisance span:
$$
S_{\\rm eff}=S_\\theta-I_{\\theta\\eta}I_{\\eta\\eta}^{-1}S_\\eta,
\\qquad
I_{\\rm eff}=ES_{\\rm eff}^2.
$$
Direct multiplication gives $E(S_{\\rm eff}S_\\eta^T)=0$. If $I_{\\rm eff}>0$, the influence
$$
\\phi_{\\rm eff}=S_{\\rm eff}/I_{\\rm eff}
$$
satisfies $E(\\phi_{\\rm eff}S_\\eta)=0$ and $E(\\phi_{\\rm eff}S_\\theta)=1$.

For any other influence obeying these derivative equations, orthogonality removes the nuisance projection from $E(\\phi S_\\theta)$, leaving $E(\\phi S_{\\rm eff})=1$. Cauchy–Schwarz yields $E\\phi^2\\ge1/I_{\\rm eff}$, attained by the displayed influence.

The Schur-complement formula is
$$
I_{\\rm eff}=I_{\\theta\\theta}
-I_{\\theta\\eta}I_{\\eta\\eta}^{-1}I_{\\eta\\theta}.
$$
If it vanishes, dividing by it is invalid. The model has no first-order score direction separating the target from nuisance in the required way; an identification or higher-order analysis is needed.

## A missing-at-random mean as a semiparametric model

Observe $O=(X,R,RY)$, where $X$ is always observed and $R$ indicates whether $Y$ is recorded. Assume iid observations, $R$ independent of $Y$ conditional on $X$, and
$$
\\varepsilon\\le\\pi(X)=P(R=1\\mid X)\\le1-\\varepsilon
$$
for a fixed $\\varepsilon>0$. Put $m(X)=E(Y\\mid X)$ and target $\\mu=EY$. For the efficiency calculation assume $EY^2<\\infty$.

A regular observed-data score decomposes as
$$
s(O)=s_X(X)+s_R(R,X)+R\\,s_Y(Y,X),
$$
with $Es_X=0$, $E(s_R\\mid X)=0$ and $E(s_Y\\mid X)=0$. This follows by differentiating the marginal, response and observed-outcome factors. The outcome score appears only when the outcome is observed.

The candidate canonical gradient is
$$
\\phi(O)=m(X)-\\mu+\\frac R{\\pi(X)}[Y-m(X)].
$$
Products involving unobserved $Y$ are interpreted as zero when $R=0$. Bounded positivity and the second moment make this function square-integrable, and iterated expectation makes its mean zero.

## Verifying the path derivative in every score direction

Against $s_X$, the residual part has conditional expectation zero, so
$$
E(\\phi s_X)=E[(m(X)-\\mu)s_X(X)],
$$
the derivative caused by changing the covariate distribution.

Against $s_R$, $E(\\phi\\mid X,R)=m(X)-\\mu$ does not depend on response status. Conditional centring of the response score therefore gives $E(\\phi s_R)=0$, as expected because the full-data mean does not depend on the response mechanism.

Against the observed outcome score,
$$
E[\\phi R s_Y]=E[(Y-m(X))s_Y(Y,X)],
$$
using MAR and $E(R\\mid X,Y)=\\pi(X)$. This is exactly the outcome-law derivative of the target. Combining the three directions proves the representing property.

In the unrestricted MAR observed-data model, these components span its tangent space, and $\\phi$ itself has the same decomposition. It is therefore the canonical gradient. Its variance is
$$
\\operatorname{Var}(m(X))
+E\\left[\\frac{\\operatorname{Var}(Y\\mid X)}{\\pi(X)}\\right],
$$
because the covariate and residual terms are orthogonal. Missingness increases the residual contribution relative to full observation, without increasing the covariate component.

## A cross-fitted estimator with explicit sufficient assumptions

For a transparent theorem, strengthen to $|Y|\\le M$ almost surely. Split the iid sample into a fixed number of folds with sizes proportional to $n$. For each fold, train estimates $\\widehat m,\\widehat\\pi$ using only observations outside it, then evaluate
$$
g_{\\widehat\\eta}(O)
=\\widehat m(X)+\\frac R{\\widehat\\pi(X)}[Y-\\widehat m(X)]
$$
inside that fold. Average these values over the full sample.

Assume for every fold that $|\\widehat m|\\le M$, $\\widehat\\pi\\ge\\varepsilon$, both nuisance estimates are $L_2(P_X)$ consistent, and
$$
\\|\\widehat m-m\\|_2\\|\\widehat\\pi-\\pi\\|_2=o_p(n^{-1/2}).
$$
These are sufficient, not necessary, conditions. Fitting a model and calling it flexible does not establish their rates.

**Theorem 5.1.** Under those assumptions,
$$
\\sqrt n(\\widehat\\mu-\\mu)
=\\frac1{\\sqrt n}\\sum_{i=1}^n\\phi(O_i)+o_p(1).
$$
If the displayed efficiency variance is positive, the estimator is asymptotically normal with that variance.

## Proof of the cross-fitted expansion

Condition on the training observations for one fold. Its nuisance functions are then fixed and its held-out observations remain iid from $P$. Iterated expectation gives the exact bias identity
$$
Pg_{\\widehat\\eta}-\\mu
=E\\left[
\\frac{\\widehat\\pi-\\pi}{\\widehat\\pi}
(\\widehat m-m)\\right].
$$
Cauchy–Schwarz bounds its magnitude by $\\varepsilon^{-1}$ times the product of the two nuisance norms, so it is $o_p(n^{-1/2})$.

Let $g_\\eta=m+R(Y-m)/\\pi$, so $g_\\eta-\\mu=\\phi$. Algebra and the bounded assumptions give
$$
\\|g_{\\widehat\\eta}-g_\\eta\\|_{L_2(P)}
\\le C_{\\varepsilon,M}
(\\|\\widehat m-m\\|_2+\\|\\widehat\\pi-\\pi\\|_2)=o_p(1).
$$
The centred held-out average of this difference has conditional variance at most that squared norm divided by the fold size. Conditional Chebyshev therefore makes it $o_p(n^{-1/2})$.

There are only finitely many folds, so their weighted remainders retain that order even though training sets overlap. Their true-score averages combine into the full empirical average of $\\phi$. The iid central limit theorem completes the proof.

The theorem includes the stochastic evaluation term and the population bias term separately. A product-rate condition alone would not control reuse of the same observations without an empirical-process or splitting argument.

## Limits of the guarantee

A plug-in influence variance can be estimated by the empirical variance of the foldwise estimated influence values. Under the bounded conditions their squared differences from true influences vanish in probability by the same conditional argument, and the ordinary law of large numbers handles the true squares.

This supports an asymptotic interval when variance is positive. It does not give exact small-sample coverage or repair positivity failure. If response probabilities approach zero, weights and variance can explode. If MAR fails, the observed-data mean formula itself may target the wrong full-data quantity.

The [missing-data identification chapter](../principles-statistical-inference/missing-data-identification-and-sensitivity.md) develops the L3 identification issue. Here the additional content is pathwise differentiability, canonical gradients and a complete rate-controlled first-order expansion.

## Orthogonality protects a remainder, not identification

The exact bias identity has no term linear in just one nuisance error when the other nuisance is correct. Along small deterministic perturbations $m_t=m+th$ and $\\pi_t=\\pi+ta$, bounded positivity gives
$$
Pg_{\\eta_t}-\\mu
=t^2E\\left[\\frac{a(X)h(X)}{\\pi(X)+ta(X)}\\right].
$$
Its first derivative at zero is therefore zero. This is the nuisance-orthogonality property behind the product remainder.

It does not mean the data contain no information about the nuisances, nor that nuisance estimation can be skipped. The empirical score can still vary at first order with a badly fitted nuisance, and its variance control used both consistency conditions. Orthogonality also cannot identify outcomes in a stratum with zero response probability: the denominator and the original observed-data representation fail there.

Likewise, the canonical gradient’s minimum variance is local to the declared statistical model. If a restriction such as constant response probability is genuinely known, the tangent space can shrink and the efficient gradient can change. If that restriction is merely convenient but false, the smaller-model bound does not become an advantage under the larger true model.

These distinctions separate three claims that often appear together: identification of the target, insensitivity of an estimating equation’s expectation to small nuisance perturbations, and efficiency of a regular estimator. Each requires its own stated argument.

## Worked example 5.1: A finite-dimensional nuisance cost

Let a bivariate normal observation have unknown mean $(\\theta,\\eta)$, unit marginal variances and known correlation $\\rho$, with $|\\rho|<1$. Its information matrix is $(1-\\rho^2)^{-1}\\begin{pmatrix}1&-\\rho\\\\-\\rho&1\\end{pmatrix}$. Projecting off the nuisance score gives efficient information one for $\\theta$ and influence $Y_1-\\theta$. If $\\eta$ were known instead, information would be $1/(1-\\rho^2)$ and variance bound $1-\\rho^2$. The second coordinate helps only to the extent its mean is constrained; treating an unknown nuisance as known overstates information.

## Worked example 5.2: Missingness changes the variance and the selected population

Let $X$ be fair binary, $m(0)=0$, $m(1)=2$, and $Y=m(X)+U$ with independent fair $U\\in\\{-1,1\\}$. Set response probabilities $1/2$ and $1/4$ in the two strata. The target mean is one, $\\operatorname{Var}m=1$, and conditional outcome variance is one. Efficient variance is $1+(1/2)2+(1/2)4=4$, compared with full-data variance two. Among responders, the probability of $X=1$ is one-third, so the complete-case mean targets $2/3$, showing that a variance calculation cannot repair the wrong population target.

## Worked example 5.3: The rate boundary requires little-o

If both nuisance errors are $O_p(n^{-1/3})$, their product is $O_p(n^{-2/3})=o_p(n^{-1/2})$, satisfying the theorem. Merely $O_p(n^{-1/4})$ for both gives only $O_p(n^{-1/2})$, which may leave a nonzero root-$n$ bias. For deterministic perturbations $\\widehat m=m+cn^{-1/4}h$ and $\\widehat\\pi=\\pi+dn^{-1/4}h$, the exact bias identity has leading term $cd\\,n^{-1/2}E(h^2/\\pi)$ when the bounded functions permit it. A limiting shift can remain rather than centred normality.

## A treatment contrast separates statistical and causal targets

The same tangent calculation applies to an observed-data contrast with two treatment groups. Let the observed record contain covariates, a binary treatment indicator and an outcome. Define the propensity as the treatment probability given covariates, and define the two conditional outcome means in those groups. Assume bounded positivity and finite outcome second moments.

First treat the target as the covariate-population average of the difference between those two observed conditional means. This is a statistical functional of the observed law. Giving it a causal interpretation additionally requires the potential-outcome consistency, no-interference and conditional-exchangeability assumptions developed in the earlier inference book. A gradient calculation cannot supply those scientific identification assumptions.

The candidate influence is the difference of conditional means minus its population average, plus a propensity-weighted residual in treatment and minus a complementary-propensity-weighted residual in control:
$$
\\phi=m_1(X)-m_0(X)-\\psi
+\\frac A{e(X)}[Y-m_1(X)]
-\\frac{1-A}{1-e(X)}[Y-m_0(X)].
$$
Its mean is zero by conditioning on covariates and treatment.

To verify the gradient, decompose a regular score into covariate, treatment-assignment and conditional-outcome components. Pairing with the covariate score differentiates the population distribution used to average the conditional contrast. Pairing with the assignment score gives zero, because conditional residual means vanish and the remaining mean-contrast term does not vary with treatment. Pairing with the outcome score gives the derivative of the treated mean minus that of the control mean, as each inverse probability cancels its group’s observation probability.

Thus the function represents every path derivative in the unrestricted observed-law model. Its variance is the variance of the conditional mean contrast plus the expected treated residual variance divided by propensity and the control residual variance divided by complementary propensity. Cross terms vanish because each residual has conditional mean zero, and the two group residual terms never occur together.

This formula has a concrete design consequence when treatment probabilities are under experimental control. Where both conditional residual variances are positive, holding them fixed makes their local variance contribution minimised by allocating treatment probability in proportion to treated standard deviation relative to the sum of both standard deviations. Differentiating the two reciprocal-probability terms proves that minimiser; positivity constraints restrict it to their allowed interval. If only one variance is zero, the unconstrained minimum is at the corresponding boundary; if both vanish, this residual component does not prefer an allocation.

This allocation statement presumes the variances are known for the design calculation and counts no unequal treatment cost. Estimating them adaptively or imposing an overall resource budget is a different design problem. It also minimises the residual component of a particular first-order variance, rather than proving that every scientific or ethical objective is captured by that criterion.

The example shows what efficiency theory can contribute after a target and model are established: a derivative representation, a variance decomposition and a precise design comparison. It does not turn an adjusted association into a causal effect merely by attaching an influence-function formula.

## Exercises

### Exercise 5.1
<a id="semiparametric-efficiency-and-influence-functions-ex-1"></a>

Why is a bounded mean-zero density tilt valid locally?

<details>
<summary>Hint 1</summary>

Its total mass is one.

</details>
<details>
<summary>Hint 2</summary>

Choose the path size smaller than the reciprocal bound.

</details>
<details>
<summary>Solution</summary>

If $|h|\\le B$ and $Eh=0$, then $1+th>0$ for $|t|<1/B$ and $\\int p(1+th)=1$. A uniform square-root Taylor expansion gives the quadratic-mean score $h$. Without centring, the proposed density would not retain total mass one.

</details>

### Exercise 5.2
<a id="semiparametric-efficiency-and-influence-functions-ex-2"></a>

Prove the minimum-norm gradient identity.

<details>
<summary>Hint 1</summary>

Decompose a gradient into its tangent projection and orthogonal residual.

</details>
<details>
<summary>Hint 2</summary>

Expand the squared norm.

</details>
<details>
<summary>Solution</summary>

The projection preserves inner products with all scores, while the residual is orthogonal to it. Thus $E\\phi^2=E\\phi_{\\rm eff}^2+E(\\phi-\\phi_{\\rm eff})^2$. Any nonzero residual adds variance without changing the target derivative.

</details>

### Exercise 5.3
<a id="semiparametric-efficiency-and-influence-functions-ex-3"></a>

Why does a zero efficient information invalidate the reciprocal formula?

<details>
<summary>Hint 1</summary>

The efficient score then vanishes in $L_2$.

</details>
<details>
<summary>Hint 2</summary>

Its inner product cannot represent unit target derivative.

</details>
<details>
<summary>Solution</summary>

If $ES_{\\rm eff}^2=0$, it is zero almost surely. No finite-variance influence can satisfy $E(\\phi S_{\\rm eff})=1$. Dividing by zero is not an estimator construction; identification or a different local analysis is required.

</details>

### Exercise 5.4
<a id="semiparametric-efficiency-and-influence-functions-ex-4"></a>

Verify that the MAR gradient has mean zero.

<details>
<summary>Hint 1</summary>

Condition on the covariates.

</details>
<details>
<summary>Hint 2</summary>

The response-weighted residual has conditional mean zero.

</details>
<details>
<summary>Solution</summary>

MAR gives $E[R(Y-m)/\\pi\\mid X]=E[Y-m\\mid X]=0$. The remaining term has mean $Em-\\mu=0$. Bounded positivity and a second moment ensure integrability.

</details>

### Exercise 5.5
<a id="semiparametric-efficiency-and-influence-functions-ex-5"></a>

Derive its variance decomposition.

<details>
<summary>Hint 1</summary>

The two components are orthogonal.

</details>
<details>
<summary>Hint 2</summary>

Square the residual term and use $R^2=R$.

</details>
<details>
<summary>Solution</summary>

The cross term vanishes by its conditional zero mean. The weighted residual second moment is $E[R(Y-m)^2/\\pi^2]=E[\\operatorname{Var}(Y\\mid X)/\\pi]$. Adding $\\operatorname{Var}m$ yields the stated bound.

</details>

### Exercise 5.6
<a id="semiparametric-efficiency-and-influence-functions-ex-6"></a>

Prove the exact fitted-score bias identity.

<details>
<summary>Hint 1</summary>

Average over response and outcome given $X$.

</details>
<details>
<summary>Hint 2</summary>

Subtract the true mean.

</details>
<details>
<summary>Solution</summary>

$Pg_{\\widehat\\eta}=E[\\widehat m+\\pi(m-\\widehat m)/\\widehat\\pi]$. Subtracting $Em$ gives $E[(1-\\pi/\\widehat\\pi)(\\widehat m-m)]$, equal to the displayed product. No asymptotic approximation enters this identity.

</details>

### Exercise 5.7
<a id="semiparametric-efficiency-and-influence-functions-ex-7"></a>

Why is off-fold training useful in the empirical remainder?

<details>
<summary>Hint 1</summary>

Condition on the fitted functions.

</details>
<details>
<summary>Hint 2</summary>

Held-out observations remain independent of them.

</details>
<details>
<summary>Solution</summary>

The fold average then has the ordinary conditional variance bound for fixed functions. Its centred difference from the true-score average is controlled by an $L_2$ norm divided by fold size. Reusing those observations for fitting would require another empirical-process argument.

</details>

### Exercise 5.8
<a id="semiparametric-efficiency-and-influence-functions-ex-8"></a>

Does the product rate alone imply the theorem without nuisance consistency?

<details>
<summary>Hint 1</summary>

The stochastic difference term needs its own norm to vanish.

</details>
<details>
<summary>Hint 2</summary>

One nuisance error can remain large while the other is tiny.

</details>
<details>
<summary>Solution</summary>

No. The product controls population bias, while separate consistency controls the held-out empirical score difference. Both were used in the proof. A small product with one badly inconsistent nuisance does not automatically give the canonical-gradient expansion.

</details>

### Exercise 5.9
<a id="semiparametric-efficiency-and-influence-functions-ex-9"></a>

Why does marginal complete-case averaging target another population in the worked example?

<details>
<summary>Hint 1</summary>

Response changes the distribution of $X$.

</details>
<details>
<summary>Hint 2</summary>

Compute the responder stratum probability.

</details>
<details>
<summary>Solution</summary>

Responder mass is proportional to $P(X=x)\\pi(x)$. Thus $P(X=1\\mid R=1)=(1/2)(1/4)/[(1/2)(1/2)+(1/2)(1/4)]=1/3$. Its mean is $2/3$ rather than the target one.

</details>

### Exercise 5.10
<a id="semiparametric-efficiency-and-influence-functions-ex-10"></a>

Does an efficiency bound guarantee exact finite-sample interval coverage?

<details>
<summary>Hint 1</summary>

The comparison concerns a first-order limit.

</details>
<details>
<summary>Hint 2</summary>

Approximation and nuisance conditions still matter.

</details>
<details>
<summary>Solution</summary>

No. It identifies the least variance among the declared regular first-order representations. The normal interval is asymptotic and needs positive variance, nuisance rates and the model assumptions. It is not an exact coverage theorem for a particular small sample.

</details>

## Summary

Score paths place target derivatives in a Hilbert tangent space. Projection gives the canonical gradient and its variance bound within the declared regular asymptotically linear class. The MAR mean example verifies every score direction and proves a cross-fitted expansion under explicit boundedness, consistency and product-rate conditions.
`;export{e as default};