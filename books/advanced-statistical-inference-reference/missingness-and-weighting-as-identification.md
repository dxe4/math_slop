
# Missingness and Weighting as Identification

This chapter studies identification and estimation when some outcomes are missing. The key insight is that missingness is a problem of *identification*: without assumptions, the distribution of missing values is not recoverable from observed data. Rubin's taxonomy and inverse-probability weighting provide a framework for honest inference under declared assumptions.

## Rubin's taxonomy

Let $R$ indicate whether outcome $Y$ is observed ($R=1$) or missing ($R=0$). Let $X$ be fully observed covariates.

- **Missing completely at random (MCAR):** $R$ is independent of $(Y,X)$. This is usually too strong.
- **Missing at random (MAR):** $R$ is independent of $Y$ given $X$. Formally, $\mathbb{P}(R=1\mid Y,X)=\mathbb{P}(R=1\mid X)$.
- **Missing not at random (MNAR):** $R$ depends on $Y$ even after conditioning on $X$.

MAR is an *identification* condition. Under MAR and positivity ($\mathbb{P}(R=1\mid X)>0$ on the target support), the joint distribution of $(Y,X)$ is identified from the observed data.

## Inverse-probability weighting

If the response probability $\pi(X)=\mathbb{P}(R=1\mid X)$ is known,

$$\mathbb{E}\Bigl[\frac{RY}{\pi(X)}\Bigr]=\mathbb{E}\Bigl[\mathbb{E}\Bigl(\frac{RY}{\pi(X)}\Bigm|X,Y\Bigr)\Bigr]=\mathbb{E}\Bigl[\frac{Y\pi(X)}{\pi(X)}\Bigr]=\mathbb{E}[Y],$$

where the first equality uses the law of iterated expectations and the second uses MAR ($\mathbb{P}(R=1\mid X,Y)=\mathbb{P}(R=1\mid X)=\pi(X)$).

### Estimated weights

In practice, $\pi(X)$ is estimated by a model $\hat{\pi}(X)$. The inverse-probability-weighted (IPW) estimator is

$$\hat{\mu}_{IPW}=\frac{1}{n}\sum_{i=1}^{n}\frac{R_{i}Y_{i}}{\hat{\pi}(X_{i})}.$$

Estimated weights can be unstable when $\hat{\pi}(X)$ is near zero. Weight truncation changes bias and variance. The response model cannot be validated against missing $Y$; sensitivity parameters are necessary for departures from MAR.

## Doubly robust estimation

An *augmented* estimator combines outcome regression with weighting:

$$\hat{\mu}_{DR}=\frac{1}{n}\sum_{i=1}^{n}\Bigl[\hat{m}(X_{i})+\frac{R_{i}(Y_{i}-\hat{m}(X_{i}))}{\hat{\pi}(X_{i})}\Bigr],$$

where $\hat{m}(X)$ is an estimator of $\mathbb{E}[Y\mid X]$.

### Theorem 14.1 — Double robustness

Assume iid sampling, MAR, $\mathbb E[Y^2]<\infty$, and positivity bounded away from zero. Use sample splitting or cross-fitting so each observation is evaluated with nuisance fits trained off its fold. Suppose the fitted response probabilities are uniformly bounded away from zero, the nuisance fits converge in $L_2(P)$ to limits $(m_*,\pi_*)$, and their empirical terms obey a law of large numbers. If either $m_*(X)=\mathbb E[Y\mid X]$ or $\pi_*(X)=\mathbb P(R=1\mid X)$ almost surely, then $\hat\mu_{DR}\to_p\mathbb E[Y]$. For root-$n$ asymptotic linearity when both nuisances are estimated, a standard sufficient remainder condition is

$$\|\hat m-m\|_{2}\,\|\hat\pi-\pi\|_{2}=o_p(n^{-1/2}),$$

together with the corresponding empirical-process or cross-fitting conditions.

**Proof sketch.** For fixed limits $(m_*,\pi_*)$, iterated expectation shows that the population augmented functional equals $\mathbb E[Y]$ when either limit is correct. The cross-fitted law of large numbers replaces the fitted empirical average by that functional. Expanding around the true nuisances leaves a second-order bias proportional to the product of their errors; the displayed product-rate condition makes this remainder $o_p(n^{-1/2})$ for asymptotic linearity. ∎

Double robustness does *not* protect against:
- Both models being wrong
- Severe positivity failure ($\pi(X)$ near zero)
- Measurement error in $X$
- A target population absent from the data

## Survey nonresponse

Survey nonresponse adds a missingness layer after design selection. The full weight combines inverse inclusion and response probabilities:

$$w_{i}=\frac{1}{\pi_{i}\cdot\pi_{i}^{(r)}},$$

where $\pi_{i}$ is the design inclusion probability and $\pi_{i}^{(r)}$ is the response probability. The variance reflects both sampling stages and the estimation of response probabilities.

## Worked example: IPW and doubly robust estimation

Consider a population with binary $X\in\{0,1\}$, where $\mathbb{P}(X=1)=0.5$, $\mathbb{E}[Y\mid X=0]=2$, $\mathbb{E}[Y\mid X=1]=5$, and $\pi(0)=0.8$, $\pi(1)=0.6$. The true mean is $\mathbb{E}[Y]=0.5\cdot 2+0.5\cdot 5=3.5$.

**IPW with known weights:**

$$\mathbb{E}\Bigl[\frac{RY}{\pi(X)}\Bigr]=0.5\cdot\frac{0.8\cdot 2}{0.8}+0.5\cdot\frac{0.6\cdot 5}{0.6}=0.5\cdot 2+0.5\cdot 5=3.5.$$

**Population augmented functional:** If $m(X)$ is correct ($m(0)=2$, $m(1)=5$) but the response-probability limit is misspecified as $0.7$ for both groups, its expectation is

$$\mu_{DR}(m,\pi_*)=0.5\cdot 2+0.5\cdot 5+0.5\cdot\frac{0.8(2-2)}{0.7}+0.5\cdot\frac{0.6(5-5)}{0.7}=3.5.$$

The augmentation term vanishes because $m$ is correct. If $m$ is misspecified as $m(X)=3$ for both groups but $\pi$ is correct,

$$\mu_{DR}(m_*,\pi)=3+0.5\cdot\frac{0.8(2-3)}{0.8}+0.5\cdot\frac{0.6(5-3)}{0.6}=3-0.5+1=3.5.$$

The weighting corrects the misspecified regression.

## Common errors and misconceptions

- **Assuming MAR holds without justification.** MAR is an untestable assumption. Sensitivity analysis should always accompany MAR-based inference.

- **Using IPW without checking positivity.** If some units have near-zero response probabilities, their weights dominate the estimator. Weight distributions should be inspected.

- **Confusing double robustness with double correctness.** Double robustness means consistency if *either* model is correct, not that both can be wrong. If both are wrong, the estimator is generally inconsistent.

- **Ignoring weight estimation in the variance calculation.** Treating fitted
  weights as fixed can misstate variance in either direction; the sign depends
  on the estimator, response model, and covariance between estimating stages.
  A joint sandwich calculation or a bootstrap that refits the response model
  must incorporate the estimation stage.

## Practice exercises

**Exercise 14.1.** For iid pairs $(R_i,Y_i)$ with $E|Y|<\infty$ and $P(R=1)>0$, show that under MCAR the complete-case mean $\sum_{i}R_{i}Y_{i}/\sum_{i}R_{i}$ is consistent for $\mathbb{E}[Y]$.

**Solution.** Under MCAR, $R$ is independent of $Y$, so $\mathbb{E}[RY]=\mathbb{E}[R]\mathbb{E}[Y]$ and $\mathbb{E}[R]=\pi$. By the law of large numbers, $\sum R_{i}Y_{i}/n\to_{p}\pi\mathbb{E}[Y]$ and $\sum R_{i}/n\to_{p}\pi$. Their ratio converges to $\mathbb{E}[Y]$ by the continuous mapping theorem. ∎

**Exercise 14.2.** For a binary $X$ with $\pi(0)=0.9$ and $\pi(1)=0.3$, explain why IPW can be unstable even with a moderate sample size.

**Solution.** Units with $X=1$ have inverse weight $1/0.3\approx 3.33$, while units with $X=0$ have weight $1/0.9\approx 1.11$. The $X=1$ units receive three times the weight, so a rare $X=1$ stratum can make the estimate depend heavily on a few observations. This contrast is a warning, not proof that a correction is required: assess support, effective sample size, and the resulting variance. Stabilization or truncation may be declared as variance-control choices, but truncation changes the target or introduces bias and needs its own sensitivity analysis. ∎

**Exercise 14.3.** Show that the doubly robust estimator can be written as the solution to an estimating equation.

**Solution.** Define $\psi(Z,\mu,m,\pi)=m(X)+R(Y-m(X))/\pi(X)-\mu$. Then $\mathbb{E}[\psi(Z,\mu_{0},m_{0},\pi_{0})]=0$ if either $m_{0}=\mathbb{E}[Y\mid X]$ or $\pi_{0}=\mathbb{P}(R=1\mid X)$. The estimator $\hat{\mu}_{DR}$ solves $n^{-1}\sum_{i}\psi(Z_{i},\mu,\hat{m},\hat{\pi})=0$. ∎

## Forward and backward connections

This chapter applied the estimating-equations and functional-delta-method theory from *Estimating Equations and Sandwich Limits* and *Functional Delta Method and Bootstrap Boundaries* to the specific problem of missing data. In *Decision Targets and Proper Scores*, we examine how to evaluate predictions and decisions when data may be censored or missing. In *Small-Sample and Boundary Diagnostics*, we study what happens when the regularity conditions assumed here fail.
