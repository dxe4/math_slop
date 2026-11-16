# Appendix 3 · Linear algebra and multivariate Normals

## How to use this bridge

Several uncertain coefficients belong to one joint distribution. Linear algebra keeps their relationships visible while expressing regression and prediction compactly. This appendix builds the notation from dimensions, then derives the covariance calculations used in the course. You need scalar Normal distributions and elementary algebra; no previous matrix calculus is assumed.

**Required bridge.** Read the sections on dimensions, covariance, and correlated predictions for [Chapter 7, Joint draws preserve relationships](./07_regression.md#joint-draws-preserve-relationships). The regression derivation expands [Chapter 7, A useful analytic connection](./07_regression.md#a-useful-analytic-connection). Conditional multivariate Normals and geometry provide optional depth for hierarchy, HMC, and later Gaussian-process work. Keeping them here lets the main route use their consequences without requiring every matrix derivation at first encounter.

## Vectors, matrices, dimensions, and units

A vector collects ordered numbers. A matrix is a rectangular array representing a transformation or a collection of such vectors. Matrix multiplication combines rows with columns; it is not elementwise multiplication. Before interpreting a result, check both its array dimensions and its physical units.

| Mathematical object | Dimensions | Meaning and NumPy counterpart |
|---|---|---|
| $y$ | $n\times1$ | Outcomes; commonly stored as shape `(n,)` |
| $\beta$ | $p\times1$ | Coefficients, including an intercept if present; shape `(p,)` |
| $X$ | $n\times p$ | Design matrix; one observation per row, one predictor per column |
| $X\beta$ | $n\times1$ | Conditional mean vector; `X @ beta` |
| $V$ | $p\times p$ | Coefficient covariance; `V[i, j]` relates coefficients $i$ and $j$ |
| $r_*$ | $p\times1$ | New predictor vector; scalar prediction is $r_*^T\beta$ |
| $I_p$ | $p\times p$ | Identity matrix; `np.eye(p)` |

Here $X$ is a fixed design matrix, whereas capital letters in [Appendix 1](./appendix-01_probability.md#random-quantities-and-their-realised-values) denote random variables. Context determines which convention applies. For a line, the coefficient vector is $(\alpha,\beta_1)^T$; the chapter sometimes writes its slope simply as $\beta$. The subscript and vector notation prevent that scalar slope from being mistaken for the entire coefficient vector.

For waiting time in minutes and workload in jobs, the intercept has units of minutes and the slope has units of minutes per job. Multiplying a workload by the slope gives minutes, so the terms can be added. Covariance entries then have different units: intercept variance is squared minutes, slope variance is squared minutes per squared job, and their covariance is squared minutes per job. A covariance matrix is therefore more than an unlabelled square of numbers.

In NumPy, transposing a one-dimensional array does not make it a column: `beta.T` still has shape `(p,)`. Use `beta[:, None]` when a two-dimensional column is needed. Broadcasting can silently create a whole matrix from a column minus a one-dimensional vector. Printing shapes at a new calculation's boundaries is often more informative than inspecting a final scalar.

## Covariance, quadratic forms, and positive definiteness

For a random vector $B$ with mean $m$, define

$$V=E[(B-m)(B-m)^T].$$

Its diagonal contains variances and its off-diagonal entries contain covariances. Symmetry follows because exchanging the two factors in a scalar product changes nothing. For a linear combination $c^TB$,

$$E[c^TB]=c^Tm,\qquad
\operatorname{Var}(c^TB)=c^TVc.$$

The second expression is a quadratic form: expand it to see squared coefficients multiplying variances and paired coefficients multiplying covariances. Every variance is nonnegative, so a covariance matrix must be positive semidefinite. It is positive definite when every nonzero linear combination has strictly positive variance. Positive definiteness permits an inverse and an ordinary full-dimensional Normal density.

For two standardized variables with unit variances and correlation $\rho$, variance of their difference is $2-2\rho$. If someone proposes correlation 1.2, that variance becomes negative. This exposes an impossible covariance matrix without requiring an eigensolver. At correlation one, the difference has zero variance; the joint distribution lives on a line and is singular.

## Multivariate Normal density and precision

A $p$-dimensional Normal with mean $m$ and positive-definite covariance $V$ has density

$$p(b)=(2\pi)^{-p/2}|V|^{-1/2}
\exp\left\{-\frac12(b-m)^TV^{-1}(b-m)\right\}.$$

The determinant $|V|$ measures the scale of the covariance ellipsoid, while the quadratic form measures squared distance after accounting for scale and correlation. Ordinary Euclidean distance would count a one-unit deviation equally along a precisely known direction and a very uncertain direction. The covariance-adjusted distance does not.

The inverse covariance $Q=V^{-1}$ is called precision. In multiple dimensions, its diagonal generally is not the reciprocal of the corresponding marginal variance. Conditional relationships involve the off-diagonal entries too. The quadratic form is dimensionless: deviations, inverse covariance units, and deviations cancel. The density has reciprocal product units of the coordinates, as a joint density must.

A Cholesky factorisation writes $V=LL^T$ with a lower triangular $L$ and positive diagonal. If $z$ contains independent standard Normal draws, then $b=m+Lz$ has covariance $LL^T=V$. Conversely, solving $Lu=b-m$ gives a standardized vector with squared length equal to the density's quadratic form. The log determinant is $2\sum_j\log L_{jj}$, avoiding a potentially huge or tiny determinant before taking its logarithm.

## Worked example: conditioning a joint Normal

**Extended route.** Partition a jointly Normal vector into $A$ and $B$, with dimensions $r$ and $s$:

$$\begin{pmatrix}A\\B\end{pmatrix}
\sim\operatorname{Normal}\left[
\begin{pmatrix}m_A\\m_B\end{pmatrix},
\begin{pmatrix}V_{AA}&V_{AB}\\V_{BA}&V_{BB}\end{pmatrix}\right].$$

Assume the joint covariance is positive definite. Set $C=V_{AB}V_{BB}^{-1}$ and form the residual $E=A-m_A-C(B-m_B)$. Direct covariance multiplication gives

$$\operatorname{Cov}(E,B)=V_{AB}-CV_{BB}=0,$$

$$\operatorname{Var}(E)=V_{AA}-V_{AB}V_{BB}^{-1}V_{BA}.$$

Linear transformations preserve joint Normality, and uncorrelated jointly Normal vectors are independent. Thus observing $B=b$ changes the fitted component but leaves this residual distribution unchanged:

$$A\mid B=b\sim\operatorname{Normal}\left(
m_A+V_{AB}V_{BB}^{-1}(b-m_B),
V_{AA}-V_{AB}V_{BB}^{-1}V_{BA}\right).$$

The covariance expression is a Schur complement. Its dimensions are $r\times r$, and conditioning subtracts a positive-semidefinite matrix. The independence step is specifically Gaussian: zero covariance does not imply independence for arbitrary distributions.

For a numerical example, model two instruments' offsets in millimetres with means ten and twenty and covariance matrix

$$V=\begin{pmatrix}4&3\\3&9\end{pmatrix}.$$

Its determinant is 27, so it is positive definite. If the second offset is observed exactly as 23 millimetres, the first conditional mean is $10+(3/9)(23-20)=11$ millimetres and its conditional variance is $4-3^2/9=3$ squared millimetres. Correlation predicts the direction of the shift, while remaining variation prevents exact determination.

Observing the second offset with measurement error is a different conditioning problem. Independent measurement variance four adds to the bottom-right covariance entry, giving conditional mean $10+9/13$ and variance $4-9/13$ after the same reading. Less reliable information causes less updating. This is a small prototype of noisy Gaussian regression and Gaussian-process prediction.

**Check your understanding.** What happens when the cross-covariance is zero? Why is the numerical observation value absent from the conditional covariance in this fixed-covariance Gaussian model?

## Gaussian regression by square completion

Suppose $y\mid\beta\sim\operatorname{Normal}(X\beta,R)$, where the observation covariance $R$ is known and positive definite. Give the coefficients a proper prior $\beta\sim\operatorname{Normal}(m_0,V_0)$ with positive-definite covariance. Expanding the likelihood and prior quadratic forms and collecting coefficient terms gives

$$\log p(\beta\mid y)=-\frac12\beta^TQ_n\beta+h_n^T\beta+
\text{constant},$$

$$Q_n=V_0^{-1}+X^TR^{-1}X,\qquad
h_n=V_0^{-1}m_0+X^TR^{-1}y.$$

Completing the matrix square gives posterior covariance $V_n=Q_n^{-1}$ and mean $m_n=Q_n^{-1}h_n$. Each precision contribution has dimensions $p\times p$; the information vector has length $p$. For independent equal-variance observations, $R=\sigma^2I_n$, which yields the chapter's formula. For correlated readings, use their full covariance instead of counting them as independent sources of information.

These are conditional formulas when the observation variance is unknown. Averaging over its posterior uncertainty generally produces a mixture of Normals. Substituting one fitted variance does not perform that averaging and can misrepresent coefficient and predictive uncertainty.

## Worked example: correlated coefficients change prediction

Use dimensionless workloads zero, one, and two; outcomes two, three, and five minutes; known residual standard deviation one minute; and independent zero-mean coefficient priors with variance four in their appropriate squared units. The design matrix includes an intercept column. Then

$$Q_n=\begin{pmatrix}3.25&3\\3&5.25\end{pmatrix},\qquad
m_n=\frac1{129}\begin{pmatrix}216\\196\end{pmatrix},\qquad
V_n=\frac1{129}\begin{pmatrix}84&-48\\-48&52\end{pmatrix}.$$

Posterior intercept and slope means are approximately 1.674419 and 1.519380. Their negative covariance represents compensating changes: a higher intercept can partly offset a lower slope across the observed workloads.

At workload one, the fitted mean has posterior mean $412/129\approx3.193798$ minutes and variance

$$\operatorname{Var}(\alpha+\beta_1\mid y)
=\frac{84+52-96}{129}=\frac{40}{129}\approx0.310078.$$

Dropping covariance would instead give $136/129\approx1.054264$, more than three times as large. At workload three, beyond the observed range, mean uncertainty is $264/129\approx2.046512$. Extrapolation amplifies slope uncertainty. A new individual outcome adds residual variance one to either value; uncertainty about the fitted mean and variation around it answer different questions.

The following solves linear systems using Cholesky factors. The small covariance is computed for teaching and prediction; a large problem can calculate a requested quadratic form through a solve without materialising the full inverse. SciPy documents the factor-and-solve interface in [`cho_solve`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.cho_solve.html).

```python
import numpy as np
from scipy.linalg import cho_factor, cho_solve

x = np.array([0., 1., 2.])
X = np.column_stack([np.ones(x.size), x])
y = np.array([2., 3., 5.])
prior_precision = np.eye(2) / 4
Q = prior_precision + X.T @ X    # observation variance is one
factor = cho_factor(Q, lower=True)
mean = cho_solve(factor, X.T @ y)
covariance = cho_solve(factor, np.eye(2))
r = np.array([1., 1.])
mean_variance = r @ cho_solve(factor, r)
assert np.isclose(mean_variance, 40/129)
```

For several new rows collected in $X_*$, covariance of their fitted means is $X_*V_nX_*^T$. Add their conditional residual covariance to predict outcomes. Off-diagonal entries remain because future observations share the same uncertain coefficients. Simulate one joint coefficient draw per future batch, preserving its components together, then add the appropriate observation noise.

## Optional depth: singularity, scaling, and geometry

**Extended route.** Duplicated predictor columns make the likelihood unable to distinguish some coefficient combinations. A proper positive-definite Normal prior still makes the posterior precision positive definite, but mathematical invertibility does not mean the data identify each coefficient. Report which directions depend heavily on prior information. A singular covariance describes uncertainty confined to a subspace; it has no ordinary full-dimensional density of the displayed form.

Near-singularity makes small numerical or data perturbations potentially consequential. Inspect predictor scales, column dependence, and eigenvalues or condition numbers. A condition number depends on units, so use it as a computational diagnostic in a stated parameterisation. Blindly adding a diagonal constant changes the model and may hide the reason for instability. If a documented numerical adjustment is necessary, assess the results' sensitivity to its magnitude.

Centering a predictor can reduce intercept-slope dependence. If $x'=x-c$, the same line has intercept $\alpha'=\alpha+c\beta_1$ and unchanged slope. Its prior must also be transformed if the intent is to preserve beliefs; independently reassigning the old marginal priors defines another model. More generally, a nonsingular coordinate change $b=m+Lz$ scales volume by $|\det L|$. This is the multivariate Jacobian counterpart of [Appendix 2](./appendix-02_calculus.md#transformations-preserve-probability-not-density-height).

Standardized coordinates can help numerical exploration, connecting to [Chapter 6, Warmup, geometry, and NUTS](./06_hmc.md#warmup-geometry-and-nuts) and [Chapter 9, Reparameterisation changes geometry](./09_hierarchical.md#reparameterisation-changes-geometry). Better coordinates aid computation; they do not create scientific information absent from the observations.

**Check your understanding.** Explain why independently shuffling posterior slope draws destroys predictions even though the slope histogram stays unchanged. Then derive the variance of an average of ten future outcomes at one fixed workload, separating shared coefficient uncertainty from independent residual noise.
