var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: conditioning-scaling-preconditioning
title: "Conditioning, Scaling, and Preconditioned Learning"
level: advanced-undergraduate
estimated_minutes: 160
license: CC BY-SA 4.0
---

# Conditioning, Scaling, and Preconditioned Learning

## Purpose and prerequisites

This chapter connects the geometry of an objective to data scaling, solver behavior, and floating arithmetic. It assumes linear maps, least squares, smooth optimization, and gradients. The central distinction is:

- **conditioning** asks how the exact mathematical answer changes when inputs change;
- **stability** asks whether an algorithm computes the answer to a nearby problem;
- **convergence rate** asks how iterations approach an answer;
- **generalization** asks how a fitted rule behaves beyond the fitting data.

They interact, but none is a synonym for another.

## Local condition numbers

For a differentiable map $f\\colon \\mathbb{R}^p\\to \\mathbb{R}^m$, the absolute local condition number at $x$ in chosen norms is

$cond_{\\mathrm{abs}}(f,x)=\\lVert Df(x)\\rVert$.

When $x$ and $f(x)$ are nonzero, a common relative version is

$cond_{\\mathrm{rel}}(f,x)=\\lVert Df(x)\\rVert \\lVert x\\rVert/\\lVert f(x)\\rVert$.

The norms, units, and admissible perturbations are part of the definition. Relative changes in a temperature stored in Celsius are coordinate-dependent near zero. Perturbing two probabilities independently is invalid if they must sum to one; allowed perturbations lie in the simplex tangent space.

### Parameterization example

Let positive parameter $\\alpha =\\exp \\eta$. Then

$\\partial F/\\partial \\eta =\\alpha \\partial F/\\partial \\alpha$.

An ordinary step in log-coordinate $\\eta$ corresponds approximately to a multiplicative change in $\\alpha$. Sensitivity rankings and step lengths can change under reparameterization while the represented model family remains the same.

## Linear systems and residuals

For invertible $A$, solving $Ax=b$ defines $x=A^{-1}b$. A perturbation only in $b$ produces

$\\Delta x=A^{-1}\\Delta b$.

Thus

$\\lVert \\Delta x\\rVert/\\lVert x\\rVert\\le \\kappa (A)\\lVert \\Delta b\\rVert/\\lVert b\\rVert$,

where $\\kappa (A)=\\lVert A\\rVert\\lVert A^{-1}\\rVert$, using $\\lVert b\\rVert\\le \\lVert A\\rVert\\lVert x\\rVert$. In the Euclidean norm,

$\\kappa _{2}(A)=\\sigma_{\\max}(A)/\\sigma_{\\min}(A)$.

For a computed $\\widehat{x}$, residual $r=b-A\\widehat{x}$ satisfies

$\\widehat{x}-x=-A^{-1}r$.

A small residual permits a large forward error when $\\lVert A^{-1}\\rVert$ is large. A training system that reports only normal-equation residuals can therefore hide unstable coefficients.

### Worked nearly dependent features

Let

$A=\\begin{bmatrix}1 & 1 \\\\ 1 & 1.001\\end{bmatrix}$, $b=(2,2.001)^{\\top}$.

The solution is $(1,1)^{\\top}$. Replacing the second component of $b$ by $2.002$ changes the solution to $(0,2)^{\\top}$. A $0.001$ observation perturbation creates an order-one coefficient change because the equations nearly repeat the same information.

Yet the sum of coefficients stays 2. A prediction depending only on that sum can be stable while individual parameter interpretation is not. Condition the target actually used by the decision, not automatically the whole parameter vector.

## Least squares and squared conditioning

For full-column-rank $X$, least squares solves

$\\min_{w} \\lVert Xw-y\\rVert^{2}$.

The normal equations are

$X^{\\top}Xw=X^{\\top}y$.

Singular values of $X^{\\top}X$ are $\\sigma _{i}(X)^{2}$, so

$\\kappa _{2}(X^{\\top}X)=\\kappa _{2}(X)^{2}$.

Forming normal equations squares the spectral condition number and can lose accuracy. QR factorization solves the least-squares problem without that squaring; SVD also exposes weak directions and rank. This volume does not implement production factorizations, but an auditable training system should know which solver it invokes.

Gradient descent on squared loss has Hessian $H=X^{\\top}X/n$. Its convergence condition number is also the squared singular-value ratio when $X$ has full column rank. The same geometry affects both coefficient sensitivity and iterative speed, though the precise questions differ.

### Ridge changes the spectrum

Ridge Hessian is

$H_\\lambda =X^{\\top}X/n+\\lambda I$.

If eigenvalues of $X^{\\top}X/n$ are $s_{i}\\ge 0$, then

$\\kappa (H_\\lambda )=(s_{\\max}+\\lambda )/(s_{\\min}+\\lambda )$.

For $\\lambda >0$, the denominator is positive even when $s_{\\min}=0$. Increasing $\\lambda$ improves coefficient-objective conditioning, but also changes the minimizer. It is not a free numerical fix; it encodes a preference for smaller coordinates and introduces bias.

## Feature scaling as a coordinate change

Let original features satisfy $x=D z$, where $D$ is invertible diagonal. A linear prediction

$w^{\\top}x=(D^{\\top}w)^{\\top}z$.

Define $u=D^{\\top}w$. Optimizing in $u$ represents the same unpenalized linear functions as optimizing in $w$, but the objective Hessian becomes

$H_{z}=D^{-1} H_{x} D^{-\\top}$

under the corresponding coordinate map. Suitable scales can make contours less elongated and gradient descent faster.

The equivalence can break when penalties or constraints are kept numerically unchanged. $\\lVert w\\rVert^{2}$ is not equal to $\\lVert u\\rVert^{2}$ under general scaling. Standardizing features and applying one common ridge coefficient therefore imposes a particular penalty in original units. This may be sensible, but it must be declared.

### Worked two-coordinate scaling

Consider

$F(w)=(\\frac{1}{2})(w_{1}^{2}+10,000w_{2}^{2})$.

Set $u_{1}=w_{1}$, $u_{2}=100w_{2}$. Then

$F=(\\frac{1}{2})(u_{1}^{2}+u_{2}^{2})$.

In $w$ coordinates, condition number is 10,000; in $u$, it is 1. A Euclidean step in $u$ maps to different-sized coordinate steps in $w$. The function value is unchanged by the bijection, but the algorithmic geometry is not.

## Preconditioned gradient descent

Let $P$ be symmetric positive definite. A preconditioned step is

$\\theta _+=\\theta -\\eta P^{-1}\\nabla F(\\theta )$.

This is steepest descent in the inner product $\\langle u,v\\rangle _{P}=u^{\\top}Pv$. It can also be seen as ordinary gradient descent after a linear coordinate change.

For quadratic $F=(\\frac{1}{2})e^{\\top}He$, the error update is

$e_+=(I-\\eta P^{-1}H)e$.

If $P=H$, one step with $\\eta =1$ reaches the minimizer in exact arithmetic. But applying $H^{-1}$ exactly is as hard as solving the quadratic. Practical preconditioners approximate useful curvature while remaining cheap and stable.

Diagonal scaling uses only coordinate curvature estimates. It cannot remove rotated correlations. Full whitening can remove them in an ideal linear problem but may be expensive, noisy, or leaky if fitted using evaluation data.

### Whitening boundary

If training covariance is $\\Sigma$ positive definite, the transform $z=\\Sigma^{-1/2}(x-m)$ has identity training covariance. This statement is conditional on the fitted sample and arithmetic. Small covariance eigenvalues amplify noise; a pseudoinverse or regularized transform chooses a weak-direction policy. Deployment covariance may differ. “Whitened” does not mean independent unless stronger distribution assumptions hold.

## Numerical stability in common losses

### Log-sum-exp

Compute

$\\log \\sum_{j} \\exp\\left(a_{j}\\right)=c+\\log \\sum_{j} \\exp\\left(a_{j}-c\\right)$, $c=\\max_{j} a_{j}$.

This prevents overflow and ensures at least one exponential equals 1. It does not prevent a bad model from producing extreme logits or guarantee calibrated probabilities.

### Binary logistic loss

For label $y\\in {0,1}$ and logit $a$, the expression

$-y \\log \\sigma (a)-(1-y)\\log\\left(1-\\sigma (a)\\right)$

can encounter rounded 0 or 1. A stable equivalent is

$\\max\\left(a,0\\right)-ya+\\log\\left(1+\\exp\\left(-\\lvert a\\rvert\\right)\\right)$.

For large positive $a$, $\\exp\\left(-\\lvert a\\rvert\\right)$ is safe; for large negative $a$, $\\max\\left(a,0\\right)=0$ and the linear $-ya$ term carries the scale.

### Summation

Adding many floating values is order-dependent. Naive summation can lose small terms beside a large accumulated total. Pairwise or compensated summation reduces error for diagnostic reductions. Deterministic reduction order aids reproducibility, though parallel hardware can use different association.

The mathematical mean of finite losses is permutation invariant; its floating implementation is only approximately so.

## Gradient checking under conditioning

Centered differences balance truncation $O(h^{2})$ against rounding roughly $O(\\varepsilon /h)$. If the objective is poorly scaled, one global $h$ is inappropriate across parameters. A common coordinate scale is

$h_{j}\\approx \\varepsilon ^{\\frac{1}{3}} \\max\\left(1,\\lvert \\theta _{j}\\rvert\\right)$

for centered differences, followed by a refinement sweep rather than blind trust in the heuristic.

A directional derivative can be accurate while individual gradient coordinates are poorly determined, and vice versa. Report absolute and scaled errors. If solver tolerances or stochastic noise change the objective by more than the finite-difference signal, tighten or freeze them before judging the derivative.

## Conditioning of deep products

For a composition with Jacobians $J_{1},…,J_{L}$,

$J=J_{L}…J_{1}$,

and

$\\lVert J\\rVert\\le \\prod_{l} \\lVert J_{l}\\rVert$.

If many factors have norm below one, gradients can vanish; above one, they can explode. The bound is only an upper bound and ignores directional alignment, but it identifies why initialization and architecture affect signal propagation.

Condition number of a product can be much worse than each visible scalar activation suggests. Residual connections add identity paths, which can preserve directions under some regimes, but they do not guarantee good conditioning after training.

## Audit checklist

1. Declare units, coordinate transforms, and inverse transforms.
2. Inspect feature scales, singular values, or curvature estimates on training data only.
3. Separate residual, backward error, forward error, and optimization gap.
4. Use stable loss formulas and fail at the first nonfinite value.
5. Compare normal-equation, QR, or SVD implications where least squares is a benchmark.
6. State how regularization changes both spectrum and target solution.
7. Repeat gradients or solutions across tolerances and scales.
8. Evaluate prediction targets as well as parameter coordinates.
9. Do not equate numerical conditioning with generalization or causal validity.

## A complete preconditioned quadratic calculation

**Definition 12.1 (fixed inverse-preconditioner action).** To retain the earlier metric convention, write $M=P^{-1}$ for a symmetric positive-definite inverse-preconditioner action. The update is $x_+=x-\\eta M\\nabla F(x)$. It is ordinary steepest descent in the inner product $\\langle u,v\\rangle_{M^{-1}}=u^TM^{-1}v$: the gradient in that metric is $M\\nabla F$. Positive definiteness matters because an indefinite matrix can turn a descent direction into an ascent direction.

**Worked example.** Let $F(x,y)=(x^2+100y^2)/2$ and start at $(1,1)$. An unpreconditioned step with $\\eta=0.01$ gives $(0.99,0)$, leaving a slowly contracting first component. Take $M=\\operatorname{diag}(1,1/100)$ instead. Then $M\\nabla F=(x,y)$, so $\\eta=1$ reaches $(0,0)$ in one exact update. This example identifies an ideal geometry; computing its analogue for a general large objective may cost as much as solving the original problem.

More generally, for $F(x)=\\tfrac12x^THx-b^Tx$ with symmetric positive-definite $H$, the error satisfies $e_+=(I-\\eta MH)e$. Although $MH$ need not be symmetric, it is similar to the symmetric positive-definite matrix $M^{1/2}HM^{1/2}$:
$$
MH=M^{1/2}(M^{1/2}HM^{1/2})M^{-1/2}.
$$
Writing $z=M^{-1/2}e$ therefore gives $z_+=(I-\\eta M^{1/2}HM^{1/2})z$. Orthogonal diagonalisation proves contraction in this transformed Euclidean norm whenever $0<\\eta<2/\\lambda_{\\max}(M^{1/2}HM^{1/2})$. Its condition number controls the best fixed-step rate. The derivation explains precisely which spectrum is improved by a preconditioner; it is not enough to observe that the entries of $MH$ look more balanced.

A data-standardisation map can alter the geometry while preserving unregularised predictions after coefficients are transformed back. An isotropic penalty written after the map generally represents a different penalty in the original coordinates. Keep that modeling change separate from the numerical benefit.

## Equal diagonal entries can conceal severe correlation

Diagonal preconditioning corrects coordinate scales but cannot generally remove a rotated narrow valley. Let a two-dimensional positive-definite Hessian have eigenvalues one and $\\kappa>1$, with its eigenvectors rotated by forty-five degrees from the coordinate axes. Its two diagonal entries are both $(\\kappa+1)/2$, while the off-diagonal entries have magnitude $(\\kappa-1)/2$. The diagonal inverse action is therefore just a scalar multiple of the identity. It changes the overall step scale but leaves the ratio of the two eigenvalues equal to the original condition number.

This is an exact example in which each coordinate has the same apparent curvature and the joint problem is still poorly conditioned. Full whitening uses the correlation directions as well as marginal scales. A block preconditioner can capture some of this structure when a full matrix is too costly. Choosing a diagonal approximation is an algorithmic trade-off; equalised diagonal entries alone are not evidence that the transformed spectrum is clustered.

## The norm in a contraction theorem matters

The similarity argument above proves contraction in a weighted norm, not necessarily in the original Euclidean distance on every step. For a concrete example, take

$$
H=\\begin{pmatrix}1&0.9\\\\0.9&1\\end{pmatrix},
\\qquad M=\\operatorname{diag}(100,1),\\qquad \\eta=0.01.
$$

The symmetric transformed Hessian has positive eigenvalues and trace 101. Its largest eigenvalue is therefore below 101, so the chosen step lies strictly within the transformed stability interval. Yet an error initially equal to the second coordinate vector becomes $(-0.9,0.99)^T$. Its Euclidean norm is larger than one. There is no contradiction: the preconditioned update is not symmetric in the original coordinates, and the guaranteed contraction uses the inverse-action metric.

All fixed norms are equivalent in finite dimension, so a geometric contraction in the weighted norm still implies convergence in Euclidean norm. The constants relating those norms depend on the conditioning of the metric. A poor choice can allow a transient enlargement of some coordinate errors even though the asymptotic iteration is convergent. The objective of a positive-definite quadratic supplies yet another meaningful error measure, with its own curvature weights.

## Damping changes the weak-direction policy

Replacing a singular covariance inverse by the inverse of covariance plus a positive multiple of the identity makes the action well-defined. In an eigenbasis, each reciprocal eigenvalue becomes the reciprocal of that eigenvalue plus the damping parameter. Large eigenvalue directions change little when damping is small; nearly null directions are prevented from receiving arbitrarily large amplification. This controls numerical range and sensitivity, but it is a choice about which directions the algorithm can pursue rapidly.

If damping is used only in the step metric, the intended objective can stay unchanged. If the same term is added to the loss as a ridge penalty, the objective itself changes. Both operations can produce similar-looking linear algebra while having different limiting targets. Report whether the parameter appears in the model, the algorithm, or both. A well-conditioned solve establishes that the chosen linear system is stable at the declared precision; it does not by itself show that the modified objective or metric captures the desired learning problem.

## Centring features also transforms the intercept

Consider an affine predictor, with an intercept and a coefficient vector, and transform features by subtracting a training mean and dividing by positive scales. The same function in transformed coordinates requires both a coefficient rescaling and an intercept adjustment. Transforming only the coefficients leaves the prediction shifted by the mean contribution. This is a model-identity error, not a small rounding effect.

Write the original feature as $x=m+Dz$. Then

$$
b+w^Tx=(b+w^Tm)+(D^Tw)^Tz.
$$

Thus the transformed intercept is the original intercept plus the coefficient-weighted training mean. The inverse transformation must restore the original convention when predictions or coefficients are reported. The mean and scales are fitted quantities and belong to the saved model state. Recomputing them independently on every deployment batch changes the represented function and can make one person's prediction depend on which other people were processed beside them.

There is a useful penalty distinction here as well. Penalising only slopes after centring differs from penalising the full affine coefficient vector including the intercept. An unpenalised intercept allows a common shift of the response to be absorbed without changing the slope penalty. A penalised intercept expresses a preference for predictions near a particular zero level. That zero may depend on the measurement convention, so it should not be inherited accidentally from an array layout.

**Worked example.** A predictor is twice a feature plus three, and the training feature mean is ten with scale five. In the transformed variable it is ten times that variable plus twenty-three. Using the slope ten but retaining intercept three would subtract twenty from every prediction. The transformed arithmetic can be perfectly stable and still compute the wrong function. This simple identity is worth keeping alongside the spectral analysis because numerical conditioning and faithful coordinate conversion solve separate problems.

The training mean and scale may also be uncertain or shift across populations. Their numerical stability does not make them universal constants. Retaining the fitted transformation gives a reproducible function; deciding whether that function remains appropriate under a new population is a statistical question beyond the coordinate identity.

## Exercises

1. Compute $\\kappa _{2}(\\operatorname{diag}(1,10^{-3}))$ and the condition number of its normal-equation matrix.
2. For $A=\\operatorname{diag}(1,10^{-4})$, $b=(1,10^{-4})^{\\top}$, and $\\widehat{x}=(1,0)^{\\top}$, compare residual and forward error.
3. Prove $\\kappa _{2}(X^{\\top}X)=\\kappa _{2}(X)^{2}$ for full-column-rank $X$.
4. If eigenvalues of $X^{\\top}X/n$ are 0 and 100, compute ridge Hessian condition numbers for $\\lambda =1$ and $\\lambda =10$.
5. Transform $F(w)=(w_{1}^{2}+10,000w_{2}^{2})/2$ using $u_{2}=100w_{2}$ and derive the gradient relation between coordinates.
6. Show the preconditioned direction $-P^{-1}g$ is a descent direction when $g\\ne 0$ and $P$ is positive definite.
7. Explain why standardizing on train plus test is leakage even though the transform has no labels.
8. Derive the stable binary logistic-loss expression separately for $a\\ge 0$ and $a<0$.
9. Give two reasons that whitening does not imply independent features.
10. A finite-difference check changes an iterative inner solver's stopping iteration between $\\theta +h$ and $\\theta -h$. What is being differentiated, and how can the audit improve?
11. For a depth-20 scalar chain whose local derivatives all equal $0.8$, compute the total derivative magnitude. Repeat for $1.2$.
12. Ridge makes a coefficient vector stable across repeated samples. Name three conclusions that still do not follow.
13. For the scalar equation $ax=b$, derive the relative condition number of the solution with respect to perturbations in $b$, and contrast it with absolute amplification when $a=10^{-8}$.
14. Let centered data have positive-definite covariance $C=Q \\Lambda Q^{\\top}$. Show that $Z=XQ \\Lambda^{-\\frac{1}{2}}$ has identity empirical covariance under the same denominator convention.
15. For quadratic $F(w)=\\frac{1}{2} w^{\\top}Aw-b^{\\top}w$ with diagonal positive $A$, show that preconditioner $P=A$ makes the update $w_+=w-\\eta P^{-1}\\nabla F(w)$ converge in one step when $\\eta=1$.
16. Derive the stable log-sum-exp formula $c+\\log \\sum_{j} \\exp\\left(a_{j}-c\\right)$ and prove that choosing $c=\\max_{j} a_{j}$ makes every exponential argument nonpositive without changing the result.
17. An approximate linear solve returns $\\widehat{x}$ with residual $r=b-A\\widehat{x}$. Prove $\\lVert \\widehat{x}-x^{\\star}\\rVert\\le \\lVert A^{-1}\\rVert \\lVert r\\rVert$ and explain which quantity makes a small residual inconclusive.
18. A feature column is multiplied by $s>0$ and its coefficient divided by $s$ to preserve predictions. Derive how an unweighted ridge penalty changes and give a penalty weight transformation that preserves it.

## Full solutions

1. Singular values are 1 and $10^{-3}$, so $\\kappa =10^{3}$. The normal-equation matrix is $\\operatorname{diag}(1,10^{-6})$, with condition number $10^{6}$.
2. The exact solution is $(1,1)^{\\top}$. Residual is $b-A\\widehat{x}=(0,10^{-4})^{\\top}$, norm $10^{-4}$; forward error is $(0,-1)^{\\top}$, norm 1. Small residual does not certify coefficient accuracy in the weak direction.
3. Singular values of $X^{\\top}X$ are the eigenvalues $\\sigma _{i}(X)^{2}$. Thus the ratio of largest to smallest is $\\sigma_{\\max}^{2}/\\sigma_{\\min}^{2}=[\\kappa _{2}(X)]^{2}$.
4. Ridge eigenvalues are $(\\lambda ,100+\\lambda )$. At $\\lambda =1$, condition number is 101. At $\\lambda =10$, it is 11. The better conditioning comes with a larger change to the objective.
5. With $u_{1}=w_{1}$, $u_{2}=100w_{2}$, $F=(u_{1}^{2}+u_{2}^{2})/2$. Gradients are $\\nabla _{u}F=(u_{1},u_{2})$ and $\\nabla _{w}F=(w_{1},10,000w_{2})$. Since $u=Dw$, $\\nabla _{w}F=D^{\\top}\\nabla _{u}F$, consistent with the chain rule.
6. Directional derivative is $g^{\\top}(-P^{-1}g)=-g^{\\top}P^{-1}g<0$ because $P^{-1}$ is positive definite and $g\\ne 0$. Therefore a sufficiently small step decreases a differentiable objective.
7. Test feature values influence centers and scales, which change transformed training rows and the fitted model. Labels are unnecessary for leakage; any held-out information entering selection or fitting violates the frozen evaluation protocol.
8. If $a\\ge 0$, $\\log\\left(1+\\exp a\\right)=a+\\log\\left(1+\\exp\\left(-a\\right)\\right)$, so cross-entropy $\\log\\left(1+\\exp a\\right)-ya=(1-y)a+\\log\\left(1+\\exp\\left(-a\\right)\\right)$, matching the formula. If $a<0$, use $\\log\\left(1+\\exp a\\right)-ya=-ya+\\log\\left(1+\\exp\\left(a\\right)\\right)$; since $-\\lvert a\\rvert=a$, the same expression results.
9. Whitening removes only second-order linear covariance under the fitted distribution; nonlinear dependence can remain. Also the sample covariance is an estimate and deployment may have another law. Under non-Gaussian distributions, zero covariance does not imply independence.
10. It is differentiating a piecewise program whose execution trace includes the stopping rule, not a fixed exact solution map. Tighten tolerances, record iteration changes, compare fixed-iteration and converged formulations, or use implicit differentiation when its hypotheses and residual controls hold.
11. Magnitudes are $0.8^{20}\\approx 0.01153$ and $1.2^{20}\\approx 38.34$. Repeated moderate contraction or expansion becomes severe with depth.
12. Stability does not establish low population risk, appropriate penalty geometry, calibration, robustness under shift, causal meaning, fairness, or decision value. It also does not show individual coefficients are data-identified rather than penalty-selected.
13. Since $x=b/a$, a perturbation $\\delta b$ gives $\\delta x=\\delta b/a$. Relative changes satisfy $\\lvert \\delta x\\rvert/\\lvert x\\rvert=\\lvert \\delta b\\rvert/\\lvert b\\rvert$, so the relative condition number with respect to nonzero $b$ is 1. For $a=10^{-8}$, however, absolute errors are amplified by $10^{8}$; relative and absolute conditioning answer different scaled questions.
14. Under covariance convention $C=X^{\\top}X/n$, compute $Z^{\\top}Z/n=\\Lambda^{-\\frac{1}{2}}Q^{\\top}(X^{\\top}X/n)Q \\Lambda^{-\\frac{1}{2}}=\\Lambda^{-\\frac{1}{2}}\\Lambda \\Lambda^{-\\frac{1}{2}}=I$. The result is in-sample and depends on using the fitted eigenvectors, eigenvalues, centering, and denominator consistently.
15. Here $\\nabla F=Aw-b=A(w-w^{\\star})$. With $P=A$ and $\\eta=1$, $w_+=w-A^{-1}(Aw-b)=A^{-1}b=w^{\\star}$. Calling the preconditioner ideal does not make it cheap: applying it exactly solves the original diagonal system, and for a general dense Hessian can be the main computation.
16. Factor $\\exp\\left(c\\right)$ from the sum: $\\log \\sum_{j} \\exp\\left(a_{j}\\right)=\\log[\\exp\\left(c\\right)\\sum_{j} \\exp(a_{j}-c)]=c+\\log \\sum_{j} \\exp(a_{j}-c)$. With $c=\\max a_{j}$, every $a_{j}-c\\le 0$ and at least one is zero, so exponentials lie in $(0,1]$ and their sum is at least one.
17. Since $Ax^{\\star}=b$, $A(\\widehat{x}-x^{\\star})=-r$, hence $\\widehat{x}-x^{\\star}=-A^{-1}r$. Taking induced norms gives the bound. A large $\\lVert A^{-1}\\rVert$, or equivalently a weak singular direction at the chosen scale, permits a small residual alongside a large forward error.
18. The changed contribution is $(w_{j}/s)^{2}$, only $1/s^{2}$ of its old value, so the same numeric ridge objective favors the rescaled feature differently. For a weighted penalty $\\sum_{j} \\alpha_{j} w_{j}^{2}$, set the new weight to $\\alpha'_{j}=s^{2}\\alpha_{j}$; then $\\alpha'_{j}(w_{j}/s)^{2}=\\alpha_{j}w_{j}^{2}$.

## Project checkpoint

Return to the ill-conditioned quadratic from Chapter 10. Compare raw, diagonally scaled, and ideally preconditioned iterations, with exact eigenvalues and mapped-back coordinates. Add a ridge variant and separate faster convergence from the changed minimizer. Chapter 14 makes that trade-off systematic through penalties, constraints, and proximal maps.
`;export{e as default};