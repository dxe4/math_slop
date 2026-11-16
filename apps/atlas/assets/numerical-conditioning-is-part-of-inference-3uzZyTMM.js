var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: numerical-conditioning-is-part-of-inference
title: "Numerical Conditioning Is Part of Inference"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Numerical Conditioning Is Part of Inference

## Exact formulas still require stable evaluation

Gaussian-process regression and kernel ridge rely on solving a positive-definite observation system. Algebraic exactness of its formulas does not mean every floating-point evaluation returns accurate means, variances or evidence. This chapter separates sensitivity of the mathematical problem, backward error of an algorithm, and changes to the probability model.

It expands the retained [Numerical Conditioning Is Part of Inference](../structured-probabilistic-learning/numerical-conditioning-is-part-of-inference.md), whose historical numerical examples and original exercises remain there. No new numerical execution is claimed here. The proofs use exact norm inequalities and matrix identities; a standard floating-point Cholesky backward-error theorem is identified as an external numerical-analysis input rather than inferred from those exact identities.

**Definition 10.1 (Observation system).** Let $A=K+R$ be symmetric positive definite, with a known smallest eigenvalue lower bound when one is used. For independent noise variance sigma squared, that lower bound is at least sigma squared. A latent semidefinite K is permitted. A factorization failure in finite precision does not by itself establish that the mathematical A was indefinite; rounding, scaling, asymmetry and severe conditioning can also matter.

## Cholesky algebra and the quantities to compute

A positive-definite matrix has a Cholesky factor $A=LL^T$ with positive diagonal. Solve $Lz=y-m$ and then $L^T\\alpha=z$. The conditional mean at a test point is its prior mean plus k star transpose alpha. For a latent variance, solve $Lv=k_*$ and subtract its squared norm from the prior diagonal. The observation quadratic form is the squared norm of z, and
$$
\\log\\det A=2\\sum_i\\log L_{ii}.
$$
These are exact consequences of triangular factorization and determinant multiplication. They avoid constructing a full inverse merely to apply it to one vector. An inverse identity is useful for a proof, but its literal evaluation can add work, storage and rounding compared with the needed solves.

The standard Cholesky rounding theorem says, under successful finite-precision factorization without exceptional overflow or underflow, that the computed factor is exact for a nearby matrix, with a dimension-dependent backward-error bound proportional to machine precision and input scale. Its precise constants depend on the arithmetic model. This is an imported algorithmic theorem. The sensitivity bounds below explain how such a small input perturbation can nevertheless produce substantial output error.

## A full normwise solve-perturbation bound

**Theorem 10.2 (Solve perturbation bound).** Under the norm smallness condition and nonzero relative-error denominators specified below, the displayed forward-error bound holds. Suppose a perturbed exact solve uses A plus E and right-hand side y plus d y. Assume $\\rho=\\|A^{-1}\\|\\|E\\|<1$ in a consistent operator norm. The inverse exists because the Neumann series for $I+A^{-1}E$ converges, and its inverse norm is at most one divided by one minus rho.

Let alpha solve A alpha equal y and alpha tilde solve the perturbed problem. Subtract the equations to get
$$
\\widetilde\\alpha-\\alpha=A^{-1}(dy-E\\widetilde\\alpha).
$$
Move the error contribution involving alpha tilde to the left through the triangle inequality. With relative matrix perturbation epsilon and relative right-hand perturbation eta, this yields
$$
\\frac{\\|\\widetilde\\alpha-\\alpha\\|}{\\|\\alpha\\|}
\\le\\frac{\\kappa(A)(\\epsilon+\\eta)}{1-\\kappa(A)\\epsilon},
$$
when y and alpha are nonzero and the displayed denominator is positive. Here epsilon is norm E over norm A, eta norm d y over norm y, and kappa is norm A times norm A inverse. The inequality follows using norm y at most norm A times norm alpha. Zero right-hand sides require absolute rather than these undefined relative ratios.

Thus small backward error does not guarantee small forward error when kappa is large. Conversely the bound is a worst-case certificate: a particular right-hand side and query may be much less sensitive than the largest condition number suggests. Conditioning belongs to a mathematical mapping and its chosen norm, not simply to a solver status.

## Worked example 1: nearly repeated inputs

**Example 10.3 (nearly repeated inputs).** For two unit-variance Gaussian-kernel inputs separated by d, let their correlation be r. With independent noise variance v the observation eigenvalues are $1+r+v$ and $1-r+v$, so their spectral condition number is their ratio. At zero noise and small d over length scale h, expansion of the exponential gives $1-r\\sim d^2/(2h^2)$ and hence condition number asymptotic to $4h^2/d^2$.

Every positive separation still gives an invertible latent matrix. The inverse can nevertheless be arbitrarily sensitive as the two points approach. A positive noise variance bounds the denominator away from zero, but that noise is a model assumption, not just a numerical fact.

For n exact repeated locations with latent variance tau squared, eigenvalues are $n\\tau^2+v$ in the common direction and v in all contrast directions. Their ratio is one plus n tau squared over v. Repeated independent measurements can be statistically meaningful while creating a large separation between common and contrast covariance scales. Replacing them by duplicate copies of one noisy record would be another likelihood.

## Residuals give an absolute prediction certificate

For a computed coefficient vector alpha hat, form the exact residual r equal to y minus A alpha hat. The coefficient error is $A^{-1}r$, so the error of a fixed test mean satisfies
$$
|\\widehat\\mu-\\mu|\\le\\|k_*\\|\\|A^{-1}\\|\\|r\\|.
$$
If independent noise gives a lower eigenvalue bound v positive, the spectral-norm bound is at most norm k star times norm r divided by v. This is an absolute certificate for that target, not a universal relative error guarantee when the true mean is near zero.

A sharper energy identity uses Cauchy-Schwarz in the inverse-A inner product: the squared query error is at most $(k_*^TA^{-1}k_*)(r^TA^{-1}r)$. This can reflect a query insensitive to problematic directions. Evaluating or bounding that certificate is another mathematical task; a small residual by itself is not an accuracy proof without the relevant inverse scale.

For a variance correction computed through an approximate solve of A v equal k star, the same residual reasoning bounds the error in k star transpose v. Variance subtracts this from a prior diagonal, so even a small absolute correction error can become a large relative error for a nearly zero posterior variance. A small negative result from rounding is not a valid negative mathematical variance, and clipping it to zero does not establish an error bound.

## Worked example 2: a small residual in a sensitive direction

**Example 10.4 (a small residual in a sensitive direction).** Let A be diagonal with entries one and delta, where delta is positive and small, and let the true right-hand side be $(1,0)^T$. The exact solution is $(1,0)^T$. Perturb the right-hand side by $(0,\\epsilon)^T$. Its relative norm is epsilon, but the solution changes by $(0,\\epsilon/\\delta)^T$.

The condition number is one over delta, and this perturbation attains its amplification scale. A query using only the first coordinate is unaffected, whereas a query with a nonzero second component can be highly sensitive. This example explains why both the system geometry and the actual prediction target matter. A backward-stable factorization cannot remove sensitivity that already exists in the mathematical solve.

## Covariance perturbations and posterior variance

The resolvent identity is
$$
(A+E)^{-1}-A^{-1}=-A^{-1}E(A+E)^{-1}.
$$
With rho below one, its norm is at most $\\|A^{-1}\\|^2\\|E\\|/(1-\\rho)$. For fixed cross vector and prior diagonal, the latent variance change is therefore at most its cross-vector squared norm times that bound. This proves a finite absolute sensitivity result when only the observed covariance is perturbed.

Changing the kernel can also change cross covariances and test diagonals, requiring extra terms. A low-rank approximation that matches the training matrix closely but changes an unseen-input cross vector can still alter that prediction. The approximation object and norm must match the claimed error bound.

For symmetric E it is often better to measure relative perturbation through $B=A^{-1/2}EA^{-1/2}$. If its spectral norm delta is below one, eigenvalues of I plus B lie between one minus delta and one plus delta. This preserves positive definiteness and controls determinant and inverse quadratic errors directly.

## Log evidence can be sensitive in another way

The determinant difference is the sum of log one plus the eigenvalues of B, giving absolute error at most $-n\\log(1-\\delta)$. Transform the centred data by A inverse square root. The inverse perturbation in these coordinates has norm at most delta divided by one minus delta, so the observation quadratic-form error is at most that factor times the original quadratic form q.

Combining the two terms in the Gaussian log density gives
$$
|\\widetilde\\ell-\\ell|\\le\\frac12\\left\\{\\frac{\\delta}{1-\\delta}q-n\\log(1-\\delta)\\right\\}
$$
for fixed mean and a perturbation only of the observation covariance. This is a proved sufficient bound, not a statement that every perturbation reaches it. It also shows why one tolerance on matrix entries need not control model-evidence comparisons uniformly over large dimensions or unusual response vectors.

## Worked example 3: jitter changes the conditional model

**Example 10.5 (jitter changes the conditional model).** Add a nonnegative diagonal jitter j to an invertible observation covariance while retaining the latent prior and cross vector. The posterior latent variance becomes $k_{**}-k_*^T(A+jI)^{-1}k_*$. Differentiating gives $k_*^T(A+jI)^{-2}k_*$, nonnegative. Jitter therefore increases that variance, strictly when the cross vector is nonzero.

With one latent unit-variance observation and noise variance v, the posterior variance at its own input is $(v+j)/(1+v+j)$. Its derivative is the reciprocal square of one plus v plus j, exactly the retained source calculation. The perturbation can improve conditioning while changing the answer in a predictable direction.

The evidence need not change monotonically. Its derivative in j is one half of alpha squared norm minus the trace of the inverse covariance, which can have either sign depending on data. A stabilizing change should therefore be reported as a covariance modification, with its scale and effect considered, rather than silently increased until an objective or interval looks convenient.

## Dense cost and structured alternatives

Dense Cholesky uses order n cubed arithmetic and order n squared storage. After factorization, a new mean uses the cross vector and coefficient dot product, while a generic latent variance requires an order n squared triangular solve. Many test points can share batched algebra, but their output covariance can itself require quadratic storage in the number of queries.

A full explicit inverse adds many right-hand solves and storage even when only one prediction is needed. Structured matrices, sparse precision representations, iterative methods or inducing variables can change these costs. Their exactness and approximation assumptions differ: an exact structure exploited algebraically is not the same as dropping covariance directions or terminating an iterative solve early.

The original source includes a mesh-linked Gaussian-kernel conditioning exercise. Keeping a fixed length scale while refining a grid and shrinking the length scale along with the mesh are different matrix sequences. One should not infer an asymptotic growth rate merely from a few historical numerical values or from a statement that points are dense. The relation between separation and length scale is essential, as the exact two-point calculation already shows.

## A numerical claim must name its perturbation and target

Useful evidence about a computation specifies the matrix model, observation covariance scale, solution residual or factorization error, and the quantity whose accuracy is being claimed. A condition number alone does not report the actual error, and a smooth plot alone does not bound it. A model adjustment, backward perturbation and posterior approximation are separate operations that can all affect the same displayed prediction.

The remaining chapters study low-rank and feature approximations. Their algebra is best read against these sensitivity identities: preserving positive semidefiniteness is necessary, but it is not by itself an accuracy guarantee for an ill-conditioned solve. Error claims must survive the map from kernel approximation to the final prediction or evidence target.

## Rescaling a solve preserves a target when the transformation is tracked

A positive diagonal scaling D can replace a system by $D^{-1/2}AD^{-1/2}$ with right-hand side $D^{-1/2}y$, followed by mapping the solution back. This is an exact change of coordinates rather than added noise. The observation log determinant acquires the corresponding log determinant of D, and query cross vectors must transform consistently. Forgetting either changes the reported likelihood or mean. Such rescaling can improve numerical balance without the model perturbation introduced by jitter, although it does not guarantee a small condition number for every matrix.

## Exercises

<a id="numerical-conditioning-is-part-of-inference-ex-1"></a>

### Exercise 1

Derive the Cholesky expression for a posterior covariance correction.

<details><summary>Hint 1</summary>

Write A inverse as inverse transpose factor times inverse factor.

</details>

<details><summary>Hint 2</summary>

Apply it to the cross vector.

</details>

<details><summary>Full solution</summary>

The quadratic form k star transpose A inverse k star equals the squared Euclidean norm of L inverse k star. Thus one lower-triangular solve suffices to obtain that correction. It remains necessary to subtract it from the prior test variance and to assess cancellation when the true difference is small.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-2"></a>

### Exercise 2

Why does the Neumann-series perturbation argument require rho below one?

<details><summary>Hint 1</summary>

Expand the inverse of I plus A inverse E.

</details>

<details><summary>Hint 2</summary>

The geometric norm series must converge.

</details>

<details><summary>Full solution</summary>

The norm of each successive power is bounded by rho to that power. If rho is below one, the series converges and gives an inverse norm bound one over one minus rho. At or above one this proof gives neither convergence nor a useful denominator. The perturbed matrix may still be invertible, but it needs another argument.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-3"></a>

### Exercise 3

Compute the two-point observation condition number.

<details><summary>Hint 1</summary>

Use the sum and difference eigenvectors.

</details>

<details><summary>Hint 2</summary>

Add the noise variance to both latent eigenvalues.

</details>

<details><summary>Full solution</summary>

The eigenvalues are one plus r plus v and one minus r plus v. For nonnegative r their ratio is the spectral condition number. At zero noise, near-coincident Gaussian inputs make one minus r quadratic in separation, producing the stated inverse-square sensitivity. Positive noise puts a fixed lower bound on the contrast direction.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-4"></a>

### Exercise 4

Why can a tiny solve residual still permit a large coefficient error?

<details><summary>Hint 1</summary>

The error is A inverse times residual.

</details>

<details><summary>Hint 2</summary>

Inspect the small-eigenvalue direction.

</details>

<details><summary>Full solution</summary>

A residual aligned with an eigenvector of eigenvalue delta is multiplied by one over delta. In the diagonal example its epsilon-sized perturbation therefore causes coefficient error epsilon over delta. Residual size needs an inverse-scale or target-sensitive bound before it becomes an accuracy certificate. Backward stability does not change that intrinsic amplification.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-5"></a>

### Exercise 5

Give an absolute mean-error bound when noise variance is at least v positive.

<details><summary>Hint 1</summary>

The minimum observation eigenvalue is at least v.

</details>

<details><summary>Hint 2</summary>

Use the solve residual identity.

</details>

<details><summary>Full solution</summary>

The coefficient error equals A inverse times the residual. The inverse spectral norm is at most one over v. Cauchy-Schwarz therefore bounds query mean error by cross-vector norm times residual norm divided by v. This is absolute error; relative error can be arbitrarily large when the true mean is near zero.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-6"></a>

### Exercise 6

Why is subtracting two accurate positive numbers potentially problematic for a small posterior variance?

<details><summary>Hint 1</summary>

Their difference can be much smaller than either term.

</details>

<details><summary>Hint 2</summary>

Absolute and relative error then differ greatly.

</details>

<details><summary>Full solution</summary>

Prior diagonal and covariance correction can each be computed with small relative error while their subtraction has an error comparable to a very small true variance. The resulting relative error can be large or even yield a negative rounded value. A proved absolute sensitivity or arithmetic error bound is needed; clipping negative output alone does not certify correctness.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-7"></a>

### Exercise 7

Derive the log-determinant perturbation bound.

<details><summary>Hint 1</summary>

Transform to I plus B.

</details>

<details><summary>Hint 2</summary>

Bound each log eigenvalue term.

</details>

<details><summary>Full solution</summary>

The determinant ratio is the determinant of I plus B. With B norm at most delta below one, every eigenvalue lies between minus delta and delta. Each absolute log one plus eigenvalue is at most minus log one minus delta. Summing n terms yields the bound. This uses a symmetric relative perturbation, not an arbitrary nonsymmetric entrywise change.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-8"></a>

### Exercise 8

Why does nonnegative diagonal jitter increase latent posterior variance under a fixed prior?

<details><summary>Hint 1</summary>

Differentiate the inverse observation covariance.

</details>

<details><summary>Hint 2</summary>

The resulting quadratic form is nonnegative.

</details>

<details><summary>Full solution</summary>

The derivative of inverse A plus j identity is minus its inverse square. Because the latent variance subtracts that inverse quadratic, its derivative is the positive inverse-square quadratic in the cross vector. It is nonnegative and strictly positive for a nonzero cross vector. The result holds while the latent prior and cross covariances remain fixed.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-9"></a>

### Exercise 9

Does better conditioning from jitter prove unchanged statistical interpretation?

<details><summary>Hint 1</summary>

Jitter changes the covariance used for conditioning.

</details>

<details><summary>Hint 2</summary>

Its effects appear in means, variance and evidence.

</details>

<details><summary>Full solution</summary>

No. It can improve eigenvalue separation and numerical sensitivity while changing the model conditional quantities. The scalar variance example gives that change explicitly. Its size and intended interpretation should be declared; treating it as independent extra observation variance is an assumption, not a consequence of numerical success.

</details>

<a id="numerical-conditioning-is-part-of-inference-ex-10"></a>

### Exercise 10

What must be added when a kernel approximation changes test cross covariances as well as the training matrix?

<details><summary>Hint 1</summary>

The resolvent bound assumed a fixed cross vector.

</details>

<details><summary>Hint 2</summary>

Expand the changed quadratic and mean terms.

</details>

<details><summary>Full solution</summary>

Error analysis needs terms for the cross-vector perturbation and any test-diagonal perturbation in addition to the training inverse change. A small training-matrix norm error alone need not control an unseen-query prediction. The approximate object, perturbation norm and final target must be stated together before claiming an accuracy guarantee.

</details>
`;export{e as default};