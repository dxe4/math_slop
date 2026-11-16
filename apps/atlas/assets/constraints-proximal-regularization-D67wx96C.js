var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: constraints-proximal-regularization
title: "Constraints, Proximal Steps, and Regularization"
level: advanced-undergraduate
estimated_minutes: 165
license: CC BY-SA 4.0
---

# Constraints, Proximal Steps, and Regularization

## Purpose and prerequisites

This chapter assumes smooth optimization, convexity, and conditioning. It separates three ideas often collapsed into “regularization”:

1. a penalty changes the objective;
2. a constraint changes the feasible set;
3. an algorithm can prefer some solutions even without an explicit penalty.

We derive ridge, projections, proximal gradient, and soft thresholding. Statistical generalization theory belongs to the statistical-learning volume; here we state which conclusions are numerical, geometric, or empirical.

## Penalized and constrained problems

A penalized problem has form

$\\min_\\theta F(\\theta )+\\lambda \\Omega (\\theta )$, $\\lambda \\ge 0$.

A constrained version is

$\\min_\\theta F(\\theta )$ subject to $\\Omega (\\theta )\\le \\tau$.

Under convexity and suitable constraint qualifications, some choices of $\\lambda$ and $\\tau$ can produce the same solution set through Lagrange duality. There is not generally a universal algebraic conversion between them. If the constraint is inactive, its multiplier is zero. Nonconvex problems can have unsupported constrained optima that no scalar penalty recovers globally.

The two formulations answer different questions: $\\lambda$ prices complexity in objective units; $\\tau$ declares an admissible budget. Both depend on the coordinate meaning of $\\Omega$.

## Ridge as geometry and estimator

For least squares,

$J_\\lambda (w)=(1/(2n))\\lVert Xw-y\\rVert^{2}+(\\lambda /2)\\lVert w\\rVert^{2}$.

Its stationary equation is

$(X^{\\top}X/n+\\lambda I)w=X^{\\top}y/n$.

For $\\lambda >0$, the Hessian is positive definite, so there is one minimizer. If $X=U\\Sigma V^{\\top}$, the solution is

$w_\\lambda =\\sum_{i} [\\sigma _{i}/(\\sigma _{i}^{2}+n\\lambda )](u_{i}^{\\top}y)v_{i}$.

Weak singular directions receive smaller gain than unregularized inversion. With noiseless $y=Xw_{\\mathrm{true}}$, the coefficient along $v_{i}$ is multiplied by

$\\sigma _{i}^{2}/(\\sigma _{i}^{2}+n\\lambda )$.

That is shrinkage bias. Ridge stabilizes weak directions by declining to invert them fully.

### Worked rank-deficient design

Let one training equation be $w_{1}+w_{2}=2$, so $X=[1,1]$, $y=2$. Unregularized squared loss has every point on the line as a minimizer. Ridge selects the smallest Euclidean norm point on the line in the limit $\\lambda \\to 0+$, namely $(1,1)$.

To see it, minimize $w_{1}^{2}+w_{2}^{2}$ subject to $w_{1}+w_{2}=2$. Since

$w_{1}^{2}+w_{2}^{2}=(\\frac{1}{2})(w_{1}+w_{2})^{2}+(\\frac{1}{2})(w_{1}-w_{2})^{2}=2+(\\frac{1}{2})(w_{1}-w_{2})^{2}$,

the minimum occurs at equality. The data identify the sum; the norm chooses the allocation.

## Coordinate dependence of penalties

Suppose the same model is parameterized by $u=D^{\\top}w$. Then an ordinary ridge penalty in $w$ becomes

$\\lVert w\\rVert^{2}=\\lVert D^{-\\top} u\\rVert^{2}=u^{\\top}(D^{-1}D^{-\\top})u$.

Applying $\\lVert u\\rVert^{2}$ after reparameterization is a different preference unless $D$ is orthogonal. Feature standardization followed by isotropic ridge implicitly weights original coefficients by feature scales.

In a two-layer homogeneous network with ReLU, replacing

$W_{1}\\to cW_{1}$, $W_{2}\\to W_{2}/c$, $c>0$,

can preserve the represented function because $\\operatorname{ReLU}(cz)=c \\operatorname{ReLU}(z)$. Individual layer norms change. A layerwise Euclidean penalty therefore distinguishes parameterizations of the same function.

This is not automatically wrong: parameter-space bias can be deliberate and computationally useful. It must not be described as an intrinsic measure of function simplicity without further argument.

## Projections and constrained steps

For a nonempty closed convex set $C$, Euclidean projection is

$\\Pi _{C}(z)=\\operatorname{argmin}_{u\\in C} (\\frac{1}{2})\\lVert u-z\\rVert^{2}$.

The minimizer exists and is unique in finite-dimensional Euclidean space. The first-order characterization is

$(z-p)^{\\top}(u-p)\\le 0$ for every $u\\in C$, where $p=\\Pi _{C}(z)$.

### Proof of the characterization

If $p$ minimizes distance, the segment $p+t(u-p)$ remains in $C$ for $t\\in [0,1]$. Define

$\\phi (t)=(\\frac{1}{2})\\lVert p+t(u-p)-z\\rVert^{2}$.

The right derivative at zero must be nonnegative:

$\\phi '(0)=(p-z)^{\\top}(u-p)\\ge 0$,

equivalent to the claim. Conversely, expand

$\\lVert u-z\\rVert^{2}=\\lVert u-p\\rVert^{2}+\\lVert p-z\\rVert^{2}+2(u-p)^{\\top}(p-z)$.

The assumed inequality makes the last term nonnegative, so $\\lVert u-z\\rVert\\ge \\lVert p-z\\rVert$.

Projected gradient uses

$\\theta _+=\\Pi _{C}(\\theta -\\eta \\nabla F(\\theta ))$.

Projection enforces feasibility for the mathematical set. It does not validate that $C$ captures operational feasibility, discrete choices, or downstream safety.

### Box projection

For $C=\\{\\theta\\colon l_{j}\\le \\theta _{j}\\le u_{j}\\text{ for every }j\\}$, projection clips each coordinate:

$[\\Pi _{C}(z)]_{j}=\\min\\left(u_{j},\\max\\left(l_{j},z_{j}\\right)\\right)$.

At clipping boundaries the projected update is nonsmooth. Differentiating through a fixed active set gives only local trace behavior.

## Proximal operators

For a proper closed convex function $\\Omega$ and step $\\eta >0$, define

$\\operatorname{prox}_{\\eta \\Omega }(z)=\\operatorname{argmin}_{u} {\\Omega (u)+(1/(2\\eta ))\\lVert u-z\\rVert^{2}}$.

The quadratic makes the objective strongly convex, so the minimizer is unique. An indicator function

$I_{C}(u)=0$ if $u\\in C$, $+\\infty$ otherwise

has proximal map $\\operatorname{prox}_{\\eta I_{C}}=\\Pi _{C}$. Projection is therefore one proximal operation.

For composite objective

$J(\\theta )=F(\\theta )+\\Omega (\\theta )$,

with smooth $F$, proximal gradient is

$\\theta _+=\\operatorname{prox}_{\\eta \\Omega }(\\theta -\\eta \\nabla F(\\theta ))$.

It linearizes the smooth part and keeps the nonsmooth penalty exact in a local quadratic model.

## Soft thresholding for the $L^{1}$ penalty

For scalar $z$, solve

$\\min_{u} \\lambda \\lvert u\\rvert+(1/(2\\eta ))(u-z)^{2}$.

If $u>0$, stationarity gives $\\lambda +(u-z)/\\eta =0$, so $u=z-\\eta \\lambda$, valid when $z>\\eta \\lambda$. If $u<0$, stationarity gives $-\\lambda +(u-z)/\\eta =0$, so $u=z+\\eta \\lambda$, valid when $z<-\\eta \\lambda$. If $\\lvert z\\rvert\\le \\eta \\lambda$, the subgradient condition at $u=0$ is

$0\\in \\lambda [-1,1]-z/\\eta$,

which holds exactly in that interval.

Thus

$\\operatorname{prox}_{\\eta \\lambda \\lvert \\cdot \\rvert}(z)=\\operatorname{sign}(z)\\max\\left(\\lvert z\\rvert-\\eta \\lambda ,0\\right)$.

For $\\Omega (w)=\\lambda \\lVert w\\rVert_{1}$, apply this coordinatewise. The exact zeros arise from the kink and proximal solution, not from ordinary smooth gradient descent.

### Worked step

Let $z=(3,-0.4,1.2)$ and $\\eta \\lambda =1$. Soft thresholding gives

$(2,0,0.2)$.

Values inside $[-1,1]$ become zero; values outside shrink toward zero by one. This is a coefficient-space operation whose meaning depends on feature scaling and parameterization.

## Descent for proximal gradient

Assume $F$ has $L$-Lipschitz gradient and take $\\eta \\le 1/L$. By definition, $\\theta _+$ minimizes

$Q(u)=\\Omega (u)+\\nabla F(\\theta )^{\\top}(u-\\theta )+(1/(2\\eta ))\\lVert u-\\theta \\rVert^{2}$.

Compare with $u=\\theta$:

$\\Omega (\\theta _+)+\\nabla F(\\theta )^{\\top}(\\theta _+-\\theta )+(1/(2\\eta ))\\lVert \\theta _+-\\theta \\rVert^{2}\\le \\Omega (\\theta )$.

Smoothness gives

$F(\\theta _+)\\le F(\\theta )+\\nabla F(\\theta )^{\\top}(\\theta _+-\\theta )+(L/2)\\lVert \\theta _+-\\theta \\rVert^{2}$.

Add and cancel the linear term to obtain

$J(\\theta _+)\\le J(\\theta )-(1/(2\\eta )-L/2)\\lVert \\theta _+-\\theta \\rVert^{2}$.

So the composite objective does not increase for $\\eta \\le 1/L$. This guarantees descent of the penalized objective, not sparsity recovery, model truth, or population performance.

## Choosing regularization strength without leakage

$\\lambda$ is a hyperparameter. Selecting it using validation data makes the final rule depend on validation data. That is the intended role of validation, but it means:

- preprocessing and each candidate fit must use training data only;
- the candidate grid or adaptive search belongs to the selection protocol;
- the test set remains untouched until selection freezes;
- uncertainty should account for selection when making inferential claims;
- a deployment shift can invalidate the chosen trade-off.

A larger penalty can improve test performance, worsen it, or leave it unchanged. Numerical conditioning alone does not determine the statistical optimum.

## Implicit regularization and early stopping

An algorithm can select among many minimizers even with no explicit $\\Omega$. For underdetermined linear least squares started at zero, gradient descent updates lie in the row space of $X$. If it converges to an interpolating solution, it reaches the minimum-Euclidean-norm interpolant. This is an algorithmic implicit bias.

### Row-space proof

Gradient is $X^{\\top}(Xw-y)/n$, which lies in $\\operatorname{range}(X^{\\top})$. Starting at $w_{0}=0$ in that space, every iterate remains in it. Any interpolating solution decomposes into a row-space part plus a null-space part. The row-space interpolant is orthogonal to the null space and has smallest norm. The conclusion depends on initialization, exact update geometry, convergence, and unpreconditioned Euclidean gradient descent.

Early stopping can also restrain weak spectral directions because gradient descent learns high-curvature directions faster. It is not universally equivalent to ridge. Stopping time is selected, possibly using validation, and changes with scale, step schedule, optimizer, and parameterization.

## Kernels and function-space regularization

Linear ridge penalizes coordinates of a vector $w$. Kernel methods instead let
us penalize a function norm while evaluating a possibly nonlinear predictor
through pairwise similarities. The word *similarity* is not sufficient: the
pairing must satisfy a positive-semidefinite condition before it defines the
geometry used below.

Let $X$ be an input set. A real-valued **positive-semidefinite kernel** is a
symmetric function $k\\colon X\\times X \\to \\mathbb{R}$ such that, for every finite choice
$x_{1},...,x_{n}$ and every $c\\in \\mathbb{R}^n$,

$\\sum_{i,j} c_{i} c_{j} k(x_{i},x_{j}) \\ge 0$.

Equivalently, every finite Gram matrix

$K_{ij}=k(x_{i},x_{j})$

is symmetric positive semidefinite. The condition must hold for every finite
input list, including repeated points, not only for one observed training
matrix. A matrix being numerically positive semidefinite on one sample is a
useful check but not a proof that a formula is a valid kernel on its domain.

### Feature maps and kernel validity

If a map $\\phi\\colon X \\to \\mathcal{H}$ takes inputs into an inner-product space and

$k(x,z)=\\langle\\phi(x),\\phi(z)\\rangle_{\\mathcal{H}}$,

then $k$ is valid because

$c^{\\top} K c = \\lVert \\sum_{i} c_{i} \\phi(x_{i})\\rVert_{\\mathcal{H}}^{2} \\ge 0$.

This gives the linear kernel $k(x,z)=x^{\\top}z$. It also proves the inhomogeneous
quadratic kernel on real scalars,

$k(x,z)=(1+xz)^{2}$,

by using $\\phi(x)=(1,\\sqrt{\\left(2\\right)}x,x^{2})$. For inputs $0$ and $1$,

$K=\\begin{bmatrix}1 & 1 \\\\ 1 & 4\\end{bmatrix}$.

Its leading principal values are $1$ and determinant $3$, so this particular
Gram matrix is positive definite. The feature-map identity proves validity for
all finite scalar input lists, which the one determinant check alone could not
do.

Nonnegative weighted sums of valid kernels remain valid. Pointwise products
also remain valid: tensor-product feature maps give

$k_{1}(x,z)k_{2}(x,z)=\\langle\\phi_{1}(x) \\otimes \\phi_{2}(x), \\phi_{1}(z) \\otimes \\phi_{2}(z)\\rangle$.

These closure rules justify polynomial kernels with nonnegative offset and
integer degree. They do not justify arbitrary transformations of a similarity
score. For example, $k(x,z)=-xz$ fails even on the one-point list $x_{1}=1$,
whose Gram matrix is $[-1]$. A nonsymmetric score fails the definition before
any eigenvalue calculation.

For finite-dimensional Euclidean inputs and $\\sigma>0$, the Gaussian kernel

$k_{\\sigma}(x,z)=\\exp\\left(-\\lVert x-z\\rVert^{2}/(2 \\sigma^{2})\\right)$

is valid. One route factors it as

$\\exp\\left(-\\lVert x\\rVert^{2}/(2\\sigma^{2})\\right) \\exp\\left(-\\lVert z\\rVert^{2}/(2\\sigma^{2})\\right) \\exp\\left(x^{\\top}z/\\sigma^{2}\\right)$.

The last factor has a power series with nonnegative coefficients in powers of
the linear kernel; multiplying by the two positive input-dependent factors is
equivalent to rescaling a feature map. This is a validity argument, not a claim
that any bandwidth is statistically appropriate.

### RKHS language and the reproducing property

Every positive-semidefinite kernel determines a **reproducing-kernel Hilbert
space** $H_{k}$ of functions on $X$. We use the standard construction theorem
without proving its completion step. Its defining facts are

- the section $k(x,\\cdot)$ belongs to $H_{k}$ for every $x$; and
- evaluation is reproduced by $f(x)=\\langle f,k(x,\\cdot)\\rangle_{H_{k}}$.

Evaluation is therefore continuous:

$\\lvert f(x)\\rvert \\le \\lVert f\\rVert_{H_{k}} \\sqrt{\\left(k(x,x)\\right)}$.

The norm is part of the model. Two kernels can contain overlapping functions
but assign different norms, so saying only “use a flexible kernel” does not
declare the regularization geometry.

### Representer theorem with its hypotheses

Consider an objective whose data term depends on a function only through the
finite evaluation vector,

$\\Psi(f(x_{1}),...,f(x_{n})) + \\rho(\\lVert f\\rVert_{H_{k}})$.

Assume a minimizer exists and $\\rho$ is strictly increasing. Then every
minimizer has the finite representation

$f^{\\star}(\\cdot)=\\sum_{i=1}^{n}\\alpha_{i}k(x_{i},\\cdot)$.

The proof exposes the scope. Decompose any $f \\in H_{k}$ orthogonally as

$f=f_{\\parallel}+f_{\\perp}$,

where $f_{\\parallel}$ lies in $\\operatorname{span}\\{k(x_{i},\\cdot):1\\le i\\le n\\}$. Reproduction gives

$f_{\\perp}(x_{i})=\\langle f_{\\perp},k(x_{i},\\cdot)\\rangle=0$,

so removing $f_{\\perp}$ preserves every training evaluation. Pythagoras gives

$\\lVert f\\rVert^{2}=\\lVert f_{\\parallel}\\rVert^{2}+\\lVert f_{\\perp}\\rVert^{2}$; strict increase of $\\rho$ rules out a
nonzero perpendicular component at a minimizer. If $\\rho$ is only
nondecreasing, the argument guarantees that at least one minimizer can be
chosen in the finite span, not necessarily that every minimizer lies there.

Schölkopf, Herbrich, and Smola, “A Generalized Representer Theorem,” Theorem 1, give a general source for this result and its strictly increasing penalty condition; see the bibliography.

This theorem does not say the learned function is correct outside the observed
inputs. It converts an infinite-dimensional optimization problem into a finite
one because of the evaluation-only loss and radial norm penalty. Other
penalties, derivative observations, constraints, or nonexisting minimizers
require a separately stated version.

### Kernel ridge regression

With squared loss and $\\lambda>0$, kernel ridge regression solves

$\\min_{f\\in H_{k}} (1/(2n)) \\sum_{i} (f(x_{i})-y_{i})^{2} + (\\lambda/2)\\lVert f\\rVert_{H_{k}}^{2}$.

The objective is strongly convex in the Hilbert space, so it has a unique
minimizing function. By the representer theorem write

$f=\\sum_{j}\\alpha_{j}k(x_{j},\\cdot)$.

Then the training prediction vector is $K \\alpha$ and

$\\lVert f\\rVert_{H_{k}}^{2}=\\alpha^{\\top} K \\alpha$.

A canonical coefficient vector solves

$(K+n \\lambda I)\\alpha=y$.

The matrix is positive definite because $K$ is positive semidefinite and
$n \\lambda>0$. If $K$ is singular, different coefficient vectors separated by
$\\ker K$ can encode the same RKHS function; the displayed solve selects one
unique representative. The function itself is unique. Cancelling a factor of
$K$ in the coefficient optimality equation without noticing this null space is
an invalid derivation.

### Worked two-point nonlinear fit

Take scalar inputs $x_{1}=0$, $x_{2}=1$, targets $y=(1,-1)^{\\top}$, and the Gaussian
kernel with off-diagonal value

$r=\\exp\\left(-1/(2\\sigma^{2})\\right)$, where $0<r<1$.

Then

$K=\\begin{bmatrix}1 & r \\\\ r & 1\\end{bmatrix}$.

Symmetry gives the canonical solution $\\alpha=(a,-a)^{\\top}$, where

$a=1/(1-r+2\\lambda)$

because $n=2$. Hence

$f(x)=a[k_{\\sigma}(0,x)-k_{\\sigma}(1,x)]$.

Training predictions are

$K \\alpha=((1-r)a,-(1-r)a)^{\\top}$.

Their magnitude is shrunk from one by factor
$(1-r)/(1-r+2\\lambda)$. As $\\lambda$ grows, the RKHS norm and fitted contrast
shrink. As the two kernel sections become nearly identical ($r$ near one), the
data contrast lies in a weak Gram direction. This is exact finite geometry; it
is not a bandwidth-selection or population guarantee.

### Computational and evidence boundaries

A dense Gram matrix stores $n^{2}$ numbers, a direct factorization usually costs
order $n^{3}$ arithmetic, and prediction from the full expansion costs order $n$
kernel evaluations per new case. Iterative solvers can avoid a factorization
but still need Gram-vector products and conditioning diagnostics. Low-rank
Nyström constructions, random features, sparsification, and inducing subsets
change the computed approximation and need their own error and randomness
records.

Kernel choice, bandwidth, $\\lambda$, preprocessing, and any centering of $K$
must be fitted or selected without final-test access. A PSD Gram matrix does not
establish good generalization, calibrated uncertainty, robustness under shift,
or causal meaning. It certifies that the declared finite similarity geometry is
mathematically compatible with an RKHS.

## Other mechanisms called regularization

- **Data augmentation** changes the empirical distribution and encodes invariances only if transformations preserve labels and deployment meaning.
- **Dropout** introduces randomized computation and a particular training objective; its deterministic inference approximation needs justification.
- **Noise injection** changes optimization and can correspond to a penalty only under limited approximations.
- **Architecture** restricts the representable functions and shares parameters.
- **Weight decay** may or may not equal adding an $L^{2}$ gradient under adaptive or preconditioned optimizers.
- **Normalization** changes parameterization, dynamics, and sometimes represented functions.

Calling all mechanisms “regularization” is acceptable shorthand only after their distinct mathematics is stated.

## Failure boundaries

- A unique penalized minimizer is not a uniquely data-identified parameter.
- Sparsity does not prove that selected coordinates are causal or even stable.
- A constraint can encode an unjustified notion of feasibility.
- Penalty equivalence changes under scaling and reparameterization.
- Better conditioning comes with a changed target unless only coordinates changed consistently.
- Hyperparameter selection can overfit validation data.
- Positive semidefiniteness validates a kernel geometry, not its bandwidth, generalization, or deployment support.
- Regularization cannot repair leakage, missing population support, label error, or a misaligned loss.

## Exercises

1. Derive ridge normal equations for the chapter's scaling convention.
2. In the one-equation example $w_{1}+w_{2}=2$, find the minimum $L^{1}$-norm solutions. Compare uniqueness with $L^{2}$.
3. Prove the projection characterization for a closed convex set using the segment argument.
4. Project $z=(3,-2,0.5)$ onto the box $[0,2]^{3}$.
5. Compute soft thresholding of $z=(-3,0.5,2)$ with threshold $0.75$.
6. Verify the subgradient optimality condition for the zero coordinate in soft thresholding.
7. Reproduce the proximal-gradient descent inequality and state where $\\eta \\le 1/L$ is used.
8. If a feature is rescaled by 100 but $\\lambda \\lVert w\\rVert_{1}$ is left numerically unchanged, how does the function-space preference change?
9. Explain why a ridge-selected coefficient in a rank-deficient design is partly penalty-selected.
10. Prove zero-initialized gradient descent for linear least squares remains in $\\operatorname{range}(X^{\\top})$.
11. For $k(x,z)=(1+xz)^{2}$, construct a feature map, compute the Gram matrix on inputs $0,1$, and prove validity for arbitrary finite scalar input lists.
12. Show that $k(x,z)=-xz$ is not a positive-semidefinite kernel. Then prove that a nonnegative weighted sum of two valid kernels is valid.
13. Show that $w^{\\star}$ minimizes differentiable convex $f$ over a closed convex set $C$ if and only if it is a fixed point of $w=\\Pi_{C}(w-\\eta \\nabla f(w))$ for any $\\eta>0$.
14. Compute one proximal-gradient step for $f(w)=\\frac{1}{2}\\lVert w-z\\rVert^{2}$, $z=(3,-1)$, $\\lambda=\\frac{1}{2}$, starting at $w=0$ with $\\eta=1$. State the resulting objective components.
15. Prove that adding an $L^{2}$ term with positive coefficient makes a convex $L^{1}$-regularized objective strongly convex and therefore gives a unique minimizer.
16. A feature is rescaled as $x'_{j}=sx_{j}$ with $s>0$. Derive the transformed weight for a weighted $L^{1}$ penalty $\\sum_{j} \\alpha_{j}\\lvert w_{j}\\rvert$ that preserves both predictions and penalty value.
17. For the two-point Gaussian example with off-diagonal Gram value $r$, derive the canonical kernel-ridge coefficients and training predictions under the chapter's loss convention.
18. Prove the representer theorem by orthogonal decomposition under the stated hypotheses. Explain separately why a singular Gram matrix can make coefficients nonunique even though the kernel-ridge function is unique for $\\lambda>0$.

## Full solutions

1. Differentiate $J=(1/(2n))\\lVert Xw-y\\rVert^{2}+(\\lambda /2)\\lVert w\\rVert^{2}$: $\\nabla J=X^{\\top}(Xw-y)/n+\\lambda w$. Setting it to zero gives $(X^{\\top}X/n+\\lambda I)w=X^{\\top}y/n$.
2. The constraint line has $\\lVert w\\rVert_{1}=\\lvert w_{1}\\rvert+\\lvert 2-w_{1}\\rvert$. Every $w_{1}\\in [0,2]$ gives norm 2, so the $L^{1}$ minimizer is not unique. The squared $L^{2}$ norm is uniquely minimized at $(1,1)$.
3. For any $u\\in C$, convexity keeps $p+t(u-p)$ feasible. Minimality of $p$ makes the right derivative of squared distance at zero nonnegative, giving $(p-z)^{\\top}(u-p)\\ge 0$. Conversely, expanding squared distances and applying that inequality proves no $u$ is closer.
4. Clip coordinatewise: $(2,0,0.5)$.
5. Apply $\\operatorname{sign}(z)\\max\\left(\\lvert z\\rvert-0.75,0\\right)$ to obtain $(-2.25,0,1.25)$.
6. At $u=0$, optimality is $0\\in \\lambda [-1,1]-(z/\\eta )$. This is equivalent to $\\lvert z\\rvert\\le \\eta \\lambda$, exactly the interval mapped to zero.
7. Proximal optimality gives an upper bound involving $1/(2\\eta )$. Smoothness gives a lower-cost comparison involving $L/2$. Their difference is nonnegative exactly when $1/\\eta \\ge L$; hence the composite decrease coefficient is nonnegative.
8. To preserve predictions, the corresponding coefficient shrinks by 100. Its absolute penalty contribution therefore becomes 100 times smaller relative to other features. The same numeric $\\lambda$ now favors using that rescaled feature more strongly unless penalty weights are transformed consistently.
9. All coefficients along a null-space equivalence class fit identically. Ridge adds curvature and chooses the smallest Euclidean representative. The observed data determine the fitted prediction direction; the penalty determines the otherwise invisible component allocation.
10. Each update adds $-\\eta X^{\\top}(Xw-y)/n$, an element of $\\operatorname{range}(X^{\\top})$. The zero vector lies in that subspace, and a subspace is closed under addition, so induction keeps every iterate there.
11. Take $\\phi(x)=(1,\\sqrt{\\left(2\\right)}x,x^{2})$. Its inner product satisfies $\\phi(x)^{\\top}\\phi(z)=1+2xz+x^{2}z^{2}=(1+xz)^{2}$. On $0,1$, the Gram matrix is $\\begin{bmatrix}1 & 1 \\\\ 1 & 4\\end{bmatrix}$, with positive determinant 3. More generally, for any inputs and coefficients, $c^{\\top}Kc=\\lVert \\sum_{i} c_{i} \\phi(x_{i})\\rVert^{2}\\ge 0$, proving validity for every finite list rather than only this example.
12. At the single input $x_{1}=1$, the Gram matrix for $-xz$ is $[-1]$, and coefficient 1 gives a negative quadratic form, so the formula is invalid. If $k=a k_{1}+b k_{2}$ with $a,b\\ge 0$, then every Gram matrix is $K=aK_{1}+bK_{2}$; hence $c^{\\top}Kc=a c^{\\top}K_{1}c+b c^{\\top}K_{2}c\\ge 0$. Symmetry is inherited as well.
13. Projection characterization says $p=\\Pi_{C}(z)$ exactly when $(z-p)^{\\top}(u-p)\\le 0$ for all $u \\in C$. Set $z=w^{\\star}-\\eta \\nabla f(w^{\\star})$ and $p=w^{\\star}$; after dividing by $\\eta$, this becomes $\\nabla f(w^{\\star})^{\\top}(u-w^{\\star})\\ge 0$, the first-order optimality condition for convex $f$ on $C$. Reversing the steps proves the converse.
14. With $\\eta=1$, the gradient step from zero is $z$, then coordinate soft thresholding at $\\eta \\lambda=\\frac{1}{2}$ gives $w=(2.5,-0.5)$. The smooth term is $\\frac{1}{2}[(2.5-3)^{2}+(-0.5+1)^{2}]=\\frac{1}{4}$; the penalty is $(\\frac{1}{2})(2.5+0.5)=\\frac{3}{2}$; total is $\\frac{7}{4}$.
15. If $f$ is convex, then $f(w)+(\\mu/2)\\lVert w\\rVert^{2}$ is $\\mu$-strongly convex for $\\mu>0$; adding the convex $\\lambda\\lVert w\\rVert_{1}$ preserves strong convexity. Two distinct minimizers would make the objective at their midpoint strictly below their common minimum by the strong-convexity inequality, a contradiction.
16. Prediction preservation requires $w'_{j}=w_{j}/s$. To retain $\\alpha_{j}\\lvert w_{j}\\rvert$, choose $\\alpha'_{j}=s \\alpha_{j}$, since $\\alpha'_{j}\\lvert w'_{j}\\rvert=s \\alpha_{j}\\lvert w_{j}\\rvert/s$. The transformation must be fitted and frozen with the feature-unit contract.
17. Here $K=\\begin{bmatrix}1 & r \\\\ r & 1\\end{bmatrix}$, $n=2$, and $y=(1,-1)^{\\top}$. By symmetry set $\\alpha=(a,-a)^{\\top}$. The first row of $(K+2\\lambda I)\\alpha=y$ gives $(1+2\\lambda)a-ra=1$, so $a=1/(1-r+2\\lambda)$. Therefore $K\\alpha=((1-r)a,-(1-r)a)^{\\top}$, and $f(x)=a[k(0,x)-k(1,x)]$.
18. Write $f=f_{\\parallel}+f_{\\perp}$, with $f_{\\parallel}$ in the span of the training kernel sections and $f_{\\perp}$ orthogonal to it. Reproduction gives $f_{\\perp}(x_{i})=0$, so $f$ and $f_{\\parallel}$ have identical data terms. Pythagoras gives $\\lVert f\\rVert^{2}=\\lVert f_{\\parallel}\\rVert^{2}+\\lVert f_{\\perp}\\rVert^{2}$; strict increase of $\\rho$ makes any nonzero perpendicular part strictly worse. Thus every minimizer lies in the finite span, assuming one exists. For kernel ridge, $\\lambda>0$ makes the Hilbert-space objective strongly convex, so the minimizing function is unique. If $z\\in \\ker K$, then $\\sum_{i} z_{i} k(x_{i},\\cdot)$ has squared RKHS norm $z^{\\top}Kz=0$ and is the zero function; adding $z$ changes coefficients but not the function. The positive-definite system $(K+n \\lambda I)\\alpha=y$ chooses one canonical coefficient representative.

## Project checkpoint

On a small collinear design, compare unregularized gradient descent, ridge, $L^{1}$ proximal gradient, and kernel ridge with a declared kernel. Verify the kernel Gram matrix on the fixture, solve without an explicit inverse, and report predictions, coefficient or function norms, objective components, conditioning, and sensitivity to feature units and kernel bandwidth. Preserve the data split while selecting penalties or kernel parameters. Chapter 18 asks when two different parameter vectors should be regarded as the same learned function.
`;export{e as default};