var e=`---
parent_id: book-advanced-statistical-inference-reference
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This glossary defines key terms used throughout the book and points to the chapters where they are introduced or used most extensively. Terms are listed alphabetically.

## A

**Asymptotic normality.** The property that a standardized estimator converges in distribution to a normal law as the sample size grows. Central to the sandwich variance and functional delta method (Chapters 3, 8).

**At-risk process.** In survival analysis, $Y_{i}(t)=\\mathbf{1}_{\\{\\widetilde{T}_{i}\\ge t\\}}$, indicating whether subject $i$ is still under observation and event-free just before time $t$ (Chapter 11).

## B

**Bandwidth.** A smoothing parameter in kernel density estimation controlling the trade-off between bias and variance. For a twice-smooth one-dimensional density with nonzero integrated curvature and the stated AMISE assumptions, a second-order kernel has $h^{*}\\asymp n^{-1/5}$ (Chapter 6).

**Bonferroni correction.** A familywise error-rate control method that tests each of $m$ hypotheses at level $\\alpha/m$. Conservative but valid without independence assumptions (Chapter 16).

**Bootstrap.** A resampling method for approximating a sampling distribution. For iid smooth-function problems, validity also requires conditional empirical-process convergence in the relevant space and compatibility of the derivative; it can fail at boundaries, under dependence, or for nonsmooth statistics (Chapter 8).

**Breakdown point.** The smallest fraction of contamination that can drive an estimator arbitrarily far. Under replacement contamination in a sample of size $n$, the mean has finite-sample breakdown $1/n$ and the usual sample median has $\\lfloor(n+1)/2\\rfloor/n$; their asymptotic limits are $0$ and $1/2$ (Chapter 7).

## C

**Calibration estimator.** A design-based estimator that adjusts sample weights so that weighted sample totals match known population totals for auxiliary variables (Chapter 2).

**Complete separation.** In logistic regression, a configuration where a linear combination of covariates perfectly predicts the outcome, causing the MLE to diverge to infinity (Chapters 4, 17).

**Condition number.** For a symmetric positive-definite matrix, the spectral ratio $\\lambda_{\\max}/\\lambda_{\\min}$; for a general matrix, the corresponding ratio of singular values. A large condition number indicates sensitivity, with its practical effect depending on precision, scaling, and the calculation (Chapter 19).

**Counting process.** A right-continuous stochastic process $N_{i}(t)$ that counts events for subject $i$ up to time $t$. Under the multiplicative intensity model, $N_{i}(t)-\\Lambda_{i}(t)$ is a martingale (Chapter 11).

**Cox partial likelihood.** A likelihood factor that eliminates the baseline hazard in proportional-hazards regression. It describes conditional failure identity rather than the full joint likelihood of event and censoring times; martingale-based asymptotic inference requires its regularity conditions (Chapter 11).

## D

**Design consistency.** An asymptotic property of an estimator under a sequence of finite populations and sampling designs. The probability limit is taken over repeated samples, not over a superpopulation model (Chapters 2, 15).

**Double robustness.** The property of an estimator that remains consistent if either the outcome model or the propensity model is correctly specified, with positivity and suitable convergence conditions (Chapter 5 and the primary Principles missing-data chapter).

**Dvoretzky–Kiefer–Wolfowitz (DKW) inequality.** A nonparametric bound on the supremum distance between the empirical and true CDF: $\\mathbb{P}(\\sup_{x}|F_{n}(x)-F(x)|>\\varepsilon)\\le 2e^{-2n\\varepsilon^{2}}$ (Chapter 6).

## E

**Effective sample size.** The information scale relevant for an asymptotic approximation. In standard many-cluster theory with controlled cluster sizes and no dominant cluster, the independent sum is indexed by the number of clusters $J$; growing clusters with weaker internal dependence can produce a different rate (Chapters 3, 19).

**Epanechnikov kernel.** The kernel $K(u)=\\frac{3}{4}(1-u^{2})$ on $[-1,1]$, which minimizes the asymptotic mean integrated squared efficiency criterion among nonnegative second-order kernels (Chapter 6).

**Exponential dispersion family.** A family of distributions with density $\\exp\\{(y\\theta-b(\\theta))/a(\\varphi)+c(y,\\varphi)\\}$. Includes normal, Poisson, Bernoulli, and gamma distributions (Chapter 4).

## F

**False discovery rate (FDR).** The expected proportion of false rejections among all rejections. Weaker than the familywise error rate and controlled by Benjamini–Hochberg under independent valid null p-values and its stated extension conditions (Chapter 16).

**Familywise error rate (FWER).** The probability of making at least one false rejection when testing multiple hypotheses. Controlled by Bonferroni and Holm procedures (Chapter 16).

**Fisher information.** The expected negative Hessian of the log-likelihood. Under correct specification and regular nonsingular likelihood asymptotics, inverse sample information approximates the MLE covariance (Chapters 3, 4).

**Functional delta method.** An extension of the ordinary delta method to statistical functionals, expressing the asymptotic distribution of $T(\\mathbb{P}_{n})$ in terms of the influence function (Chapter 8).

## H

**Hadamard differentiability.** A notion of directional differentiability for functionals that is strong enough to support the functional delta method but applicable to quantiles at positive continuous density when the tangent space and topology meet the theorem (Chapter 8).

**Holm's procedure.** A step-down multiple-testing procedure that is uniformly more powerful than Bonferroni while still controlling the familywise error rate strongly (Chapter 16).

**Horvitz–Thompson estimator.** An unbiased estimator of a population total based on inverse inclusion probabilities: $\\hat{Y}_{HT}=\\sum_{i\\in s}y_{i}/\\pi_{i}$ (Chapter 2).

**Hotelling's $T^{2}$.** A multivariate generalization of the $t$-statistic for testing $H_{0}:\\mu=\\mu_{0}$. Under normal sampling, $(n-p)T^{2}/[p(n-1)]\\sim F_{p,n-p}$ (Chapter 1).

**Huber estimator.** An M-estimator of location with score function $\\psi(u)=u\\mathbf{1}_{\\{|u|\\le k\\}}+k\\operatorname{sign}(u)\\mathbf{1}_{\\{|u|>k\\}}$. With $k=1.345$, it achieves approximately $95\\%$ efficiency at the normal model (Chapter 7).

## I

**Influence function.** The directional derivative of a statistical functional at a distribution $F$ in the direction of a point mass: $\\operatorname{IF}(x;T,F)=\\lim_{\\varepsilon\\downarrow 0}[T((1-\\varepsilon)F+\\varepsilon\\delta_{x})-T(F)]/\\varepsilon$ (Chapters 7, 8).

**Inverse-probability weighting (IPW).** A method for adjusting for missing data or selection by weighting observed units by the inverse of their selection probability. Identification also requires the stated conditional ignorability or design assumptions, positivity and a valid propensity law (Chapter 5).

## K

**Kaplan–Meier estimator.** A product-limit estimator of the survival function from censored data: $\\hat{S}(t)=\\prod_{t_{j}\\le t}(1-d_{j}/n_{j})$. Requires independent censoring (Chapter 11).

**Kriging.** Best linear unbiased prediction for spatial random fields. Simple kriging assumes a known mean; ordinary kriging enforces unbiasedness for an unknown constant mean, giving prediction variance at least as large as simple kriging, with equality possible when the simple weights already satisfy the constraint (Chapter 12).

## L

**Long-run variance.** The asymptotic variance of the sample mean under dependence: $\\Omega=\\gamma(0)+2\\sum_{h=1}^{\\infty}\\gamma(h)$. May be estimated by justified HAC methods or calculated under a specified dependence model (Chapter 10).

**Ljung–Box test.** A portmanteau test for autocorrelation in time-series residuals. May have low power against long-memory alternatives if too few lags are used (Chapter 17).

## M

**M-estimator.** An estimator defined as the solution to $\\sum_{i}\\psi(Z_{i},\\theta)=0$. Includes MLE, least squares, and robust regression as special cases (Chapters 3, 7).

**Missing at random (MAR).** A missingness mechanism where the probability of missingness depends only on observed covariates, not on unobserved outcomes. For the outcome-missingness model, identification also needs positivity and the declared observed-data model; see the primary Principles missing-data chapter.

**Monte Carlo standard error.** The standard deviation of a simulation-based estimate due to finite replication. For a bootstrap quantile estimated from $B$ replicates, a positive continuous density at the quantile gives MC SE of order $B^{-1/2}$ (Chapter 19).

## N

**Nelson–Aalen estimator.** An estimator of the cumulative hazard function: $\\hat{\\Lambda}(t)=\\sum_{t_{j}\\le t}d_{j}/n_{j}$. Related to Kaplan–Meier by $-\\log\\hat{S}(t)\\approx\\hat{\\Lambda}(t)$ (Chapter 11).

**Newey–West estimator.** A heteroskedasticity-and-autocorrelation-consistent variance estimator using Bartlett kernel weights. Bandwidth restrictions need dependence and moment assumptions too; the Gaussian short-memory proof here uses $m\\to\\infty$ and $m=o(\\sqrt n)$ (Chapter 10).

## P

**Permutation test.** A reference-group procedure exact when the stated exchangeability or randomized sharp-null experiment makes that group law valid, with inclusive tails handling discreteness (Chapter 6).

**Positive semidefinite.** A symmetric matrix $A$ is positive semidefinite if $v^{T}Av\\ge 0$ for all vectors $v$. Required for valid covariance functions in spatial modeling (Chapter 12).

**Posterior predictive p-value.** A Bayesian model-checking statistic comparing observed data to replicated data drawn from the posterior predictive distribution. Generally not uniformly distributed because observed data also inform the fitted posterior; special pivotal cases can be uniform (Chapter 17).

**Proportional hazards.** A survival model in which covariates act multiplicatively on an unspecified baseline hazard: $\\lambda_{i}(t)=\\lambda_{0}(t)\\exp(x_{i}^{T}\\beta)$. Assumed by the Cox model (Chapter 11).

## R

**Ratio estimator.** A design-based estimator that uses a known population total of an auxiliary variable to improve efficiency: $\\hat{Y}_{R}=X_{N}\\hat{Y}_{HT}/\\hat{X}_{HT}$. Generally biased in finite samples; design consistency needs the stated denominator and sampling conditions (Chapter 2).

**Robust standard error.** A sandwich variance estimator $A^{-1}BA^{-T}$ that remains valid when the working variance model is misspecified, provided the target, score CLT, nonsingular derivative and covariance consistency conditions hold (Chapter 3).

## S

**Sandwich variance.** The asymptotic variance matrix $A^{-1}BA^{-T}$ for M-estimators, where $A=\\mathbb{E}[\\dot{\\psi}]$ and $B=\\operatorname{Var}[\\psi]$. Reduces to the inverse information under correct model specification (Chapter 3).

**Selective inference.** Inference conditional on a data-dependent selection event, such as variable selection by LASSO. Conditional methods account for the selection law, often through truncated distributions; independent data splitting supports a different inference experiment (Chapter 16).

**Simple random sampling without replacement (SRSWOR).** A design in which every subset of size $n$ from a population of size $N$ has equal probability $1/\\binom{N}{n}$. The finite-population correction $(1-f)$ with $f=n/N$ reduces variance relative to sampling with replacement (Chapter 2).

**Spatial covariance.** A function $C(s,t)$ describing the covariance between values of a random field at locations $s$ and $t$. Must be positive semidefinite. Common models include exponential and Mat\\'{e}rn (Chapter 12).

## T

**Trimmed mean.** An estimator that averages observations between the $\\alpha$ and $1-\\alpha$ quantiles. Under the stated regular central-quantile conditions it has bounded influence and a positive asymptotic replacement breakdown point for fixed $\\alpha>0$ (Chapter 7).

## V

**Variogram.** A function $\\gamma(h)=\\frac{1}{2}\\operatorname{Var}[Z(s)-Z(s+h)]$ describing spatial dependence. Must be conditionally negative definite. Related to the covariance by $\\gamma(h)=C(0)-C(h)$ under stationarity (Chapter 12).

## W

**Wishart distribution.** The distribution of the sample covariance matrix of multivariate normal data: $(n-1)S\\sim\\text{Wishart}_{p}(n-1,\\Sigma)$. Special to normal sampling; fails for non-normal data (Chapter 1).
`;export{e as default};