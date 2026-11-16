
# Ratio and Calibration Estimators

When auxiliary information is available, design-based estimators can be modified to exploit it. The ratio estimator uses a known population total of an auxiliary variable. Calibration estimators generalize this idea by finding sample weights that reproduce known population totals while staying close to design weights.

## The ratio estimator

Suppose $X_{N}=\sum_{i=1}^{N}x_{i}\ne0$ is known, where $x_{i}$ is an auxiliary variable correlated with $y_{i}$, and restrict attention to samples for which $\hat X_{HT}\ne0$. The *ratio estimator* of $Y_{N}$ is

$$\hat{Y}_{R}=X_{N}\cdot\frac{\hat{Y}_{HT}}{\hat{X}_{HT}},$$

where $\hat{X}_{HT}=\sum_{i\in s}x_{i}/\pi_{i}$ is the Horvitz–Thompson estimator of $X_{N}$. The ratio estimator is nonlinear and generally biased under the design. Its appeal lies in variance reduction when $y_{i}$ is approximately proportional to $x_{i}$.

### Linearization and approximate variance

Let $R_{N}=Y_{N}/X_{N}$ be the population ratio. A first-order Taylor expansion of $\hat{Y}_{R}$ around $(Y_{N},X_{N})$ gives

$$\hat{Y}_{R}-Y_{N}\approx (\hat{Y}_{HT}-Y_{N})-R_{N}(\hat{X}_{HT}-X_{N}).$$

The right-hand side is the HT estimator of the population total of the *residuals*

$$e_{i}=y_{i}-R_{N}x_{i}.$$

Hence the approximate design variance is

$$\operatorname{Var}_{d}(\hat{Y}_{R})\approx\operatorname{Var}_{d}\Bigl(\sum_{i\in s}\frac{e_{i}}{\pi_{i}}\Bigr)=\sum_{i}\sum_{j}\Delta_{ij}\frac{e_{i}e_{j}}{\pi_{i}\pi_{j}}.$$

This is the variance of an HT estimator for a transformed variable. When $y_{i}\approx R_{N}x_{i}$, the residuals are small and the ratio estimator has much smaller variance than the direct HT estimator of $Y_{N}$.

### SRSWOR specialization

Under SRSWOR with $\pi_{i}=n/N$, the ratio estimator of the mean is $\bar{y}_{R}=\bar{Y}_{X}\cdot\bar{y}_{s}/\bar{x}_{s}$, where $\bar{Y}_{X}=X_{N}/N$. Its approximate variance is

$$\operatorname{Var}_{d}(\bar{y}_{R})\approx\frac{1-f}{n}\cdot\frac{1}{N-1}\sum_{i=1}^{N}(e_{i}-\bar{e}_{N})^{2}.$$

If $y_{i}=R_{N}x_{i}$ exactly for all $i$, the residuals vanish and the variance is zero. In practice, the variance is small when the points $(x_{i},y_{i})$ lie close to a line through the origin.

## Calibration estimation

Calibration weights solve a constrained optimisation: find weights $\{w_{i}\}_{i\in s}$ that minimize a distance to the base design weights $d_{i}=1/\pi_{i}$, subject to calibration constraints.

### General formulation

Minimize $\sum_{i\in s}G_{i}(w_{i},d_{i})$ subject to

$$\sum_{i\in s}w_{i}x_{i}=X_{N},$$

where $x_{i}$ is a vector of auxiliary variables with known population total $X_{N}$. The function $G_{i}$ is a distance measure. Common choices include:

- **Generalized regression (GREG), chi-squared distance:**
  $G_i(w,d)=(w-d)^2/(2d)$ (or $(w-d)^2/(2dq_i)$ with declared positive
  scale $q_i$). Its first-order condition gives the linear adjustment
  $w_i=d_i(1+q_i x_i^T\lambda)$, whose domain must be restricted if positive
  weights are required.
- **Raking, entropy distance:** $G_i(w,d)=w\log(w/d)-w+d$ for $w>0$.
  Its first-order condition gives the multiplicative adjustment
  $w_i=d_i\exp(x_i^T\lambda)$. Marginal raking is an iterative way to solve
  these entropy calibration equations.
- **Bounded adjustments:** penalties or box constraints that prevent extreme weights.

### Existence and uniqueness

Feasibility is necessary but by itself does not guarantee that an infimum is attained. A sufficient setup is a nonempty closed feasible set together with a continuous coercive objective (or a compact feasible set); entropy distances also require feasibility within their positive domain. Strict convexity of the summed objective on the feasible set makes the weight vector unique. Full rank of the calibration columns instead identifies the Lagrange multipliers and makes the usual closed-form systems nonsingular; redundant constraints can leave multipliers nonunique even when the weights are unique.

Extreme calibration weights are a diagnostic, not merely a numerical inconvenience. A weight of $100$ means one sampled unit represents $100$ population units; if that unit is unusual, the estimator becomes unstable. Truncation or bounding changes the target from the original calibration constraints to a constrained optimisation, introducing bias that must be acknowledged.

## Worked example: ratio estimation in a business survey

A business survey samples $n=100$ establishments from $N=1000$. Total employment $X_{N}=50000$ is known from a register. We want to estimate total wages $Y_{N}$.

**Step 1: Sample data.** The sample has $\sum_{i\in s}x_{i}=5200$ and $\sum_{i\in s}y_{i}=312000$. Under SRSWOR, $\pi_{i}=n/N=0.1$.

**Step 2: HT estimates.**

$$\hat{X}_{HT}=\frac{5200}{0.1}=52000,\qquad \hat{Y}_{HT}=\frac{312000}{0.1}=3120000.$$

**Step 3: Ratio estimate.**

$$\hat{Y}_{R}=50000\cdot\frac{3120000}{52000}=50000\cdot 60=3000000.$$

**Step 4: Approximate variance.** Suppose the sample residuals $e_{i}=y_{i}-\hat{R}x_{i}$ with $\hat{R}=60$ have sample variance $s_{e}^{2}=40000$. Then

$$\widehat{\operatorname{Var}}_{d}(\hat{Y}_{R})=N^{2}\cdot\frac{1-f}{n}\cdot s_{e}^{2}=10^{6}\cdot\frac{0.9}{100}\cdot 40000=3.6\times 10^{8}.$$

The standard error is $\sqrt{3.6\times 10^{8}}=18974$. If the direct HT estimator had $s_{y}^{2}=250000$, its standard error would be $\sqrt{10^{6}\cdot 0.9\cdot 250000/100}=47434$. The ratio estimator reduces the standard error by a factor of about $2.5$.

## Design consistency

Design consistency is an asymptotic property of a *sequence* of finite populations and designs. Consider a sequence indexed by $\nu\to\infty$ with population sizes $N_{\nu}\to\infty$, sample sizes $n_{\nu}\to\infty$, and designs $p_{N_{\nu}}$. An estimator $\hat{\theta}_{\nu}$ is *design consistent* for $\theta_{\nu}$ if

$$\lim_{\nu\to\infty}\mathbb{P}_{d}\bigl(|\hat{\theta}_{\nu}-\theta_{\nu}|>\varepsilon\bigr)=0\quad\text{for all }\varepsilon>0.$$

A useful consistency theorem must bound inclusion probabilities, moments, and dependence as $N_{\nu},n_{\nu}\to\infty$. The statement "the sample is large" without a sequence is not a proof. Key regularity conditions include:

1. $\pi_{i}^{(\nu)}\ge\delta>0$ for all $i$ and $\nu$.
2. $\max_{i}\sum_{j}|\Delta_{ij}^{(\nu)}|/\pi_{i}\pi_{j}=O(N_{\nu}/n_{\nu})$.
3. The population moments $\sum_{i}y_{i}^{4}/N_{\nu}$ are bounded.

## Common errors and misconceptions

- **Using the ratio estimator when the intercept matters.** The ratio estimator assumes the relationship passes through the origin. If $y_{i}\approx \beta_{0}+\beta_{1}x_{i}$ with $\beta_{0}\neq 0$, a regression estimator (difference estimator) is more appropriate.

- **Ignoring the bias of the ratio estimator.** The ratio estimator is biased in finite samples. The bias is $O(1/n)$ under standard conditions, so it is often negligible compared to the standard error, but this must be verified rather than assumed.

- **Treating calibration as a free lunch.** Calibration reduces variance only to the extent that the auxiliary variables explain variation in the target. Adding irrelevant calibrators increases variance by increasing the spread of weights without reducing residual variance.

- **Confusing design consistency with model consistency.** Design consistency averages over repeated samples from a fixed population sequence. Model consistency averages over repeated realizations from a superpopulation model. The conditions and interpretations differ.

## Practice exercises

**Exercise 2.1.** In a population of $N=4$ units with $(x_{i},y_{i})=(1,2),(2,5),(3,8),(4,11)$, take an SRSWOR of size $n=2$. Compute the exact design bias of the ratio estimator $\hat{Y}_{R}=X_{N}\bar{y}_{s}/\bar{x}_{s}$.

**Solution.** $X_{N}=10$, $Y_{N}=26$, $R_{N}=2.6$. The six samples and their ratio estimates are:
- $\{1,2\}$: $\bar{x}_{s}=1.5$, $\bar{y}_{s}=3.5$, $\hat{Y}_{R}=10\cdot 3.5/1.5=70/3\approx 23.33$
- $\{1,3\}$: $\hat{Y}_{R}=10\cdot 5/2=25$
- $\{1,4\}$: $\hat{Y}_{R}=10\cdot 6.5/2.5=26$
- $\{2,3\}$: $\hat{Y}_{R}=10\cdot 6.5/2.5=26$
- $\{2,4\}$: $\hat{Y}_{R}=10\cdot 8/3=80/3\approx 26.67$
- $\{3,4\}$: $\hat{Y}_{R}=10\cdot 9.5/3.5=190/7\approx 27.14$

The exact average is

$$\frac{70/3+25+26+26+80/3+190/7}{6}=\frac{1079}{42}\approx25.6905.$$

The exact bias is $1079/42-26=-13/42\approx-0.3095$. (The ratio is defined here because every possible sample has positive $\bar x_s$.) The estimator is slightly biased downward in this small population. ∎

**Exercise 2.2.** Show that the ratio estimator is exactly unbiased when $y_{i}=Rx_{i}$ for all $i$ and some constant $R$, provided every sample with positive design probability has $\bar x_s\ne0$.

**Solution.** If $y_{i}=Rx_{i}$, then $\bar{y}_{s}=R\bar{x}_{s}$ for every sample, so $\hat{Y}_{R}=X_{N}\cdot R\bar{x}_{s}/\bar{x}_{s}=RX_{N}=Y_{N}$. Every sample gives the exact population total, so the estimator is unbiased with zero variance. ∎

**Exercise 2.3.** For calibration with a single auxiliary variable and chi-squared distance $G(w,d)=(w-d)^{2}/(2d)$, derive the calibrated weight $w_{i}$ in closed form.

**Solution.** The Lagrangian is

$$L=\sum_{i\in s}\frac{(w_{i}-d_{i})^{2}}{2d_{i}}-\lambda\Bigl(\sum_{i\in s}w_{i}x_{i}-X_{N}\Bigr).$$

Differentiating with respect to $w_{i}$:

$$\frac{w_{i}-d_{i}}{d_{i}}-\lambda x_{i}=0\quad\Rightarrow\quad w_{i}=d_{i}(1+\lambda x_{i}).$$

Substituting into the constraint:

$$\sum_{i\in s}d_{i}(1+\lambda x_{i})x_{i}=X_{N}\quad\Rightarrow\quad \lambda=\frac{X_{N}-\sum_{i\in s}d_{i}x_{i}}{\sum_{i\in s}d_{i}x_{i}^{2}}.$$

Thus $w_{i}=d_{i}+d_{i}x_{i}\lambda$. The adjustment is proportional to the design weight and the auxiliary variable. ∎

## Forward and backward connections

This chapter built on the Horvitz–Thompson framework from *Design Randomization as a Probability Space*, adding auxiliary information through ratio and calibration estimators. In *Estimating Equations and Sandwich Limits*, we shift from design-based finite-population inference to model-based inference, where the estimating equations framework generalizes the ideas of weighted estimation and variance approximation to broad parametric and semiparametric models.
