
# Small-Sample and Boundary Diagnostics

Asymptotic approximations become fragile when effective information is small. This chapter catalogs the warning signs, proposes diagnostics, and discusses exact and conditional methods that can rescue inference when regularity fails.

## Symptoms of fragile asymptotics

The following situations commonly produce unreliable large-sample approximations:

- **Few survey PSUs:** Even with many people per PSU, the asymptotic count is the number of PSUs.
- **Few outcome events:** In binary or survival models with rare outcomes, the normal approximation to the MLE is poor.
- **Few independent regimes:** In time series or spatial data, few clusters or regimes mean the long-run variance is poorly estimated.
- **Near separation:** In logistic regression, near-complete separation produces infinite or near-infinite MLEs.
- **Near-singular covariance:** In multivariate analysis, eigenvalues near zero or tied eigenvalues make estimators unstable.
- **Boundary parameters:** Nuisance parameters on a boundary (variance components at zero) change the asymptotic distribution.
- **Extreme weights:** Inverse probability weights near infinity dominate the estimator.
- **Endpoint bandwidths:** Smoothing bandwidths selected at boundaries produce biased estimates.

## Diagnostics

### Information unit

Identify the effective sample size for the asymptotic approximation. For clustered data, it is the number of clusters. For time series, it is related to the effective sample size $n_{\text{eff}}=n/[1+2\sum_{h}\rho(h)]$.

### Condition number

For a symmetric positive-definite covariance or Gram matrix, the spectral condition number is $\kappa=\lambda_{\max}/\lambda_{\min}$. For a rectangular or general matrix, use the ratio of largest to smallest nonzero singular value (and regard rank deficiency as infinite condition number). A large value signals sensitivity, but a universal cutoff such as $10^6$ is not scale-, precision-, or task-independent; report the value and assess its effect on the calculation.

### Leverage and influence

In regression, the leverage $h_{ii}=x_{i}^{T}(X^{T}X)^{-1}x_{i}$ measures how far $x_{i}$ is from the centroid. Points with $h_{ii}>2p/n$ warrant inspection. Influence statistics like Cook's distance combine leverage with residual magnitude.

### Profile likelihood

For a parameter of interest $\psi$ with nuisance $\lambda$, the profile likelihood is $L_{p}(\psi)=\max_{\lambda}L(\psi,\lambda)$. Plotting $L_{p}(\psi)$ reveals nonquadraticity, boundaries, and multiple modes. A flat profile indicates weak identification.

## Exact and conditional methods

When asymptotics fail, exact methods can help:

- **Exact logistic regression:** Conditions on the sufficient statistics of the nuisance parameters, eliminating them from the inference. Computationally intensive but exact under the model.
- **Permutation tests:** Exact under the sharp null of exchangeability, regardless of sample size.
- **Firth's bias-reduced logistic regression:** Adds a Jeffreys prior penalty to remove the first-order bias and prevent infinite estimates under separation.
- **Parametric bootstrap:** Simulates from a fitted boundary model. Valid only if the fitted model is credible.

## Penalization and changed distributions

Penalization stabilizes an estimator but changes its sampling distribution. A ridge regression estimator has bias toward zero and reduced variance. Confidence intervals must account for the penalty, either through Bayesian posterior credible intervals or through adjusted frequentist methods.

## Honest reporting

When diagnostics indicate fragile asymptotics, honest reporting includes:

- Wide confidence intervals that reflect genuine uncertainty
- Sensitivity analyses showing how conclusions change under alternative assumptions
- Clear statements about which regularity conditions are violated
- Consideration of whether the scientific question can be answered with available data

Sometimes the correct conclusion is that the data are insufficient for the intended inference.

## Worked example: near-separation in logistic regression

Consider $n=20$ observations with a single binary covariate: $10$ controls ($x=0$) with $2$ events, and $10$ treated ($x=1$) with $9$ events.

**MLE:** $\hat{\beta}_{1}=\log(9/1)-\log(2/8)=\log(9)-\log(0.25)\approx 2.197-(-1.386)=3.583$.

**Wald interval:** For this two-group $2\times2$ table, the large-sample variance of the log odds ratio is the sum of the four inverse cell counts:

$$\widehat{\operatorname{Var}}(\hat\beta_1)=\frac19+\frac11+\frac12+\frac18=\frac{125}{72},$$

so the standard error is about $1.318$. The $95\%$ Wald interval is therefore $3.583\pm1.96(1.318)\approx(1.00,6.17)$. The earlier intercept-only information formula cannot be used for this slope contrast.

**Exact interval:** An exact conditional interval conditions on the margins and inverts the noncentral-hypergeometric test. Its endpoints depend on the chosen exact-tail convention and should be computed with a documented implementation; the small cell count makes comparison with the Wald interval essential. We do not quote unverified numerical endpoints here.

## Common errors and misconceptions

- **Ignoring separation warnings.** Statistical software often reports large coefficients and standard errors near separation. These are signs of model failure, not large effects.

- **Using asymptotic p-values with few clusters.** The $t$-distribution with $J-1$ degrees of freedom is a better approximation than the normal when $J<30$.

- **Treating penalized estimates as MLEs.** Ridge, LASSO, and Firth estimates are not MLEs. Their standard errors require specialized methods.

- **Assuming the parametric bootstrap fixes everything.** The parametric bootstrap simulates from a fitted model. If the model is wrong, the bootstrap distribution is wrong.

## Practice exercises

**Exercise 16.1.** In a $2\times 2$ table with counts $(a,b;c,d)$ and positive row and column margins, show that the MLE of the log odds ratio is $\log(ad/bc)$. Explain the single-zero cases when the other three cells are positive, and distinguish tables with degenerate margins.

**Solution.** With all cells positive, the fitted group odds give $\hat\beta_1=\log(a/c)-\log(b/d)=\log(ad/bc)$. With exactly one zero and the other three cells positive, $a=0$ or $d=0$ sends the log odds ratio to $-\infty$, while $b=0$ or $c=0$ sends it to $+\infty$. Multiple zeros can instead create a degenerate margin or nonidentifiability, so “any zero” is not a complete classification. Adding $0.5$ to each cell defines a finite corrected table estimate, though full Firth inference should be obtained from the penalized likelihood. ∎

**Exercise 16.2.** For a cluster-randomized trial with $J=6$ clusters per arm, explain why the normal approximation to the cluster-level mean difference is questionable.

**Solution.** The effective sample size is $12$ clusters total. The normal approximation requires many clusters for the CLT to apply to cluster means. With $6$ per arm, the sampling distribution of the mean difference may be heavy-tailed or skewed. A cluster-level $t$ comparison with $10$ degrees of freedom is an assumption-dependent approximation (exact under independent normal cluster means with common variance). Randomization inference can instead use the actual cluster assignment scheme; a permutation distribution is exact under its sharp null only when the permutations match that scheme. ∎

**Exercise 16.3.** Show that the condition number of $X^{T}X$ for a design with one highly correlated pair of covariates can be arbitrarily large.

**Solution.** Let $X=(x_{1},x_{2})$ with $x_{2}=x_{1}+\varepsilon$ where $\|\varepsilon\|$ is small. Then $X^{T}X\approx\begin{pmatrix}\|x_{1}\|^{2}&\|x_{1}\|^{2}\\\|x_{1}\|^{2}&\|x_{1}\|^{2}\end{pmatrix}$, which has eigenvalues approximately $2\|x_{1}\|^{2}$ and $0$. The condition number approaches infinity as $\varepsilon\to 0$. ∎

## Forward and backward connections

This chapter cataloged the failure modes of asymptotic inference. In *Model Checking and the Double Use of Data*, we examine how to diagnose model assumptions using residuals and replicated statistics. In *Reproducible Numerical Inference*, we discuss how to report numerical results honestly when asymptotic approximations are uncertain.
