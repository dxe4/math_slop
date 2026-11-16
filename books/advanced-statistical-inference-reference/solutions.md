
# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. The earlier exercise labels are retained here. Every current main chapter contains its complete staged solutions inline; this appendix preserves the earlier compact collection and is not a second index of all new exercises.

---

## Design Randomization as a Probability Space

**Exercise 1.1.** Under SRSWOR of one unit from a population of two units with values $y_{1}$ and $y_{2}$, show that $\operatorname{Cov}_{d}(I_{1},I_{2})=-1/4$.

**Solution.** Each $\pi_{i}=1/2$. Both units cannot appear together in a sample of size $1$, so $\pi_{12}=0$. Hence $\Delta_{12}=0-(1/2)(1/2)=-1/4$. This negative covariance is the source of the finite-population correction. ∎

**Exercise 1.2.** Consider a population $U_{4}=\{1,2,3,4\}$ with $y=(4,8,12,16)$. For SRSWOR with $n=2$, compute exactly (a) $\mathbb{E}_{d}(\hat{Y}_{HT})$, (b) $\operatorname{Var}_{d}(\hat{Y}_{HT})$, and (c) verify (b) by enumerating all samples.

**Solution.** (a) $\pi_{i}=2/4=1/2$ for all $i$, so $\hat{Y}_{HT}=2\sum_{i\in s}y_{i}$. Since $\bar{y}_{s}$ is unbiased for $\bar{Y}_{4}=10$, we have $\mathbb{E}_{d}(\hat{Y}_{HT})=2\cdot 2\cdot 10=40=Y_{4}$.

(b) $S_{4}^{2}=\frac{1}{3}[(4-10)^{2}+\dots+(16-10)^{2}]=\frac{1}{3}(36+4+4+36)=80/3$. Then

$$\operatorname{Var}_{d}(\hat{Y}_{HT})=N^{2}\cdot\frac{1-f}{n}\cdot S_{N}^{2}=16\cdot\frac{1/2}{2}\cdot\frac{80}{3}=16\cdot\frac{1}{4}\cdot\frac{80}{3}=\frac{320}{3}\approx 106.67.$$

(c) The six samples and their $\hat{Y}_{HT}$ values are: $\{1,2\}\to 24$, $\{1,3\}\to 32$, $\{1,4\}\to 40$, $\{2,3\}\to 40$, $\{2,4\}\to 48$, $\{3,4\}\to 56$. Their mean is $40$. Their variance is

$$\frac{1}{6}\bigl[(24-40)^{2}+(32-40)^{2}+0+0+(48-40)^{2}+(56-40)^{2}\bigr]=\frac{1}{6}(256+64+64+256)=\frac{640}{6}=\frac{320}{3}.$$

The enumeration confirms the formula. ∎

**Exercise 1.3.** For a fixed-size design with $\pi_{i}=n/N$ for all $i$, prove that $\sum_{j}\Delta_{ij}=0$ for every $i$.

**Solution.** From $\sum_{j}I_{j}=n$ a.s., take expectations: $\sum_{j}\pi_{j}=n$. Multiply by $\pi_{i}=n/N$: $\pi_{i}\sum_{j}\pi_{j}=n\pi_{i}$. Now take the expectation of $I_{i}\sum_{j}I_{j}=nI_{i}$: $\sum_{j}\pi_{ij}=n\pi_{i}$. Subtracting gives $\sum_{j}(\pi_{ij}-\pi_{i}\pi_{j})=\sum_{j}\Delta_{ij}=0$. ∎

---

## Ratio and Calibration Estimators

**Exercise 2.1.** In a population of $N=4$ units with $(x_{i},y_{i})=(1,2),(2,5),(3,8),(4,11)$, take an SRSWOR of size $n=2$. Compute the exact design bias of the ratio estimator $\hat{Y}_{R}=X_{N}\bar{y}_{s}/\bar{x}_{s}$.

**Solution.** $X_{N}=10$, $Y_{N}=26$, $R_{N}=2.6$. The six samples and their ratio estimates are:
- $\{1,2\}$: $\bar{x}_{s}=1.5$, $\bar{y}_{s}=3.5$, $\hat{Y}_{R}=10\cdot 3.5/1.5=70/3\approx 23.33$
- $\{1,3\}$: $\hat{Y}_{R}=10\cdot 5/2=25$
- $\{1,4\}$: $\hat{Y}_{R}=10\cdot 6.5/2.5=26$
- $\{2,3\}$: $\hat{Y}_{R}=10\cdot 6.5/2.5=26$
- $\{2,4\}$: $\hat{Y}_{R}=10\cdot 8/3=80/3\approx 26.67$
- $\{3,4\}$: $\hat{Y}_{R}=10\cdot 9.5/3.5=190/7\approx 27.14$

The exact average is
$$(70/3+25+26+26+80/3+190/7)/6=1079/42\approx25.6905.$$
The exact bias is $1079/42-26=-13/42\approx-0.3095$. Every possible sample here has positive $\bar x_s$, so the ratio is defined. ∎

**Exercise 2.2.** Show that the ratio estimator is exactly unbiased when $y_{i}=Rx_{i}$ for all $i$ and some constant $R$, provided every sample with positive design probability has $\bar x_s\ne0$.

**Solution.** If $y_i=Rx_i$, then $\bar y_s=R\bar x_s$ for every sample. The nonzero-denominator assumption permits cancellation, giving $\hat Y_R=X_N R\bar x_s/\bar x_s=RX_N=Y_N$. Thus every possible sample gives the exact total. ∎

**Exercise 2.3.** For calibration with a single auxiliary variable and chi-squared distance $G(w,d)=(w-d)^{2}/(2d)$, derive the calibrated weight $w_{i}$ in closed form.

**Solution.** The Lagrangian is

$$L=\sum_{i\in s}\frac{(w_{i}-d_{i})^{2}}{2d_{i}}-\lambda\Bigl(\sum_{i\in s}w_{i}x_{i}-X_{N}\Bigr).$$

Differentiating with respect to $w_{i}$:

$$\frac{w_{i}-d_{i}}{d_{i}}-\lambda x_{i}=0\quad\Rightarrow\quad w_{i}=d_{i}(1+\lambda x_{i}).$$

Substituting into the constraint:

$$\sum_{i\in s}d_{i}(1+\lambda x_{i})x_{i}=X_{N}\quad\Rightarrow\quad \lambda=\frac{X_{N}-\sum_{i\in s}d_{i}x_{i}}{\sum_{i\in s}d_{i}x_{i}^{2}}.$$

Thus $w_{i}=d_{i}+d_{i}x_{i}\lambda$. The adjustment is proportional to the design weight and the auxiliary variable. ∎

---

## Estimating Equations and Sandwich Limits

**Exercise 3.1.** For Poisson regression with log link, $\psi_{i}(\beta)=X_{i}(Y_{i}-e^{X_{i}^{T}\beta})$. Show that under correct specification, $B=-A$.

**Solution.** Under the Poisson model, $\mathbb{E}[Y_{i}\mid X_{i}]=\operatorname{Var}(Y_{i}\mid X_{i})=\mu_{i}=e^{X_{i}^{T}\beta}$. The derivative is $\dot{\psi}_{i}=-\mu_{i}X_{i}X_{i}^{T}$, so $A=-\mathbb{E}[\mu XX^{T}]$. The variance is

$$B=\operatorname{Var}[\psi]=\mathbb{E}[\operatorname{Var}(Y\mid X)XX^{T}]=\mathbb{E}[\mu XX^{T}]$$

since $\mathbb{E}[Y-\mu\mid X]=0$. Thus $B=-A$. ∎

**Exercise 3.2.** In the linear regression example with $\sigma^{2}(X)=X^{2}$ and $X\sim\text{Uniform}(0,1)$, verify numerically that the sandwich $(2,2)$ entry equals $4.8/n$.

**Solution.** With $M=\mathbb{E}[XX^{T}]=\begin{pmatrix}1&1/2\\1/2&1/3\end{pmatrix}$ and $B=\mathbb{E}[X^{2}XX^{T}]=\begin{pmatrix}1/3&1/4\\1/4&1/5\end{pmatrix}$, we compute $M^{-1}BM^{-1}$. Since $\det(M)=1/12$, $M^{-1}=12\begin{pmatrix}1/3&-1/2\\-1/2&1\end{pmatrix}=\begin{pmatrix}4&-6\\-6&12\end{pmatrix}$. Multiplying out gives $M^{-1}BM^{-1}=\begin{pmatrix}8/15&-7/5\\-7/5&24/5\end{pmatrix}$. The $(2,2)$ entry is $24/5=4.8$, so the sandwich variance for $\hat{\beta}_{1}$ is $4.8/n$. ∎

**Exercise 3.3.** State conditions under which cluster-robust asymptotics are indexed by $J$, and explain why the conclusion need not hold when cluster sizes grow.

**Solution.** The independent summands are cluster totals $S_j$. If cluster sizes are bounded, or normalized cluster variances stabilize with a no-dominant-cluster Lindeberg condition, a triangular-array CLT is indexed by $J$. Cluster labels alone do not impose a $J^{-1/2}$ rate: growing clusters of independent observations can supply information of order $n=\sum_jn_j$, while strong within-cluster dependence can yield slower growth. State the cluster-size and dependence regime. ∎

---

## Generalized Linear Likelihood

**Exercise 4.1.** For Poisson regression with log link, derive the score and information in matrix form.

**Solution.** With $\mu_{i}=e^{x_{i}^{T}\beta}$, $U(\beta)=\sum_{i}(y_{i}-\mu_{i})x_{i}=X^{T}(y-\mu)$. The Hessian is $H=-\sum_{i}\mu_{i}x_{i}x_{i}^{T}=-X^{T}WX$ where $W=\operatorname{diag}(\mu_{i})$. The expected information is $I(\beta)=X^{T}WX$. ∎

**Exercise 4.2.** In the intercept-only logistic model with $n=10$ and $k=0$, show that no finite MLE exists and the observed information at any finite $\beta_{0}$ is at most $2.5$.

**Solution.** With $k=0$, the log-likelihood is $\ell(\beta_{0})=-n\log(1+e^{\beta_{0}})$, which increases monotonically as $\beta_{0}\to -\infty$. There is no finite maximizer. The observed information is $J(\beta_{0})=np(1-p)=10p(1-p)\le 10\cdot 0.25=2.5$, with equality at $p=0.5$. As $\beta_{0}\to -\infty$, $p\to 0$ and $J\to 0$. ∎

**Exercise 4.3.** For a probit model, show that the log-likelihood is also strictly concave when $X$ has full column rank.

**Solution.** Put $s_i=2y_i-1\in\{-1,1\}$. The observed log-likelihood is
$\ell(\beta)=\sum_i h(s_ix_i^T\beta)$ with $h(t)=\log\Phi(t)$. If
$\lambda(t)=\phi(t)/\Phi(t)$, then
$h''(t)=-\lambda(t)[t+\lambda(t)]<0$: indeed
$\phi(t)+t\Phi(t)=\int_{-\infty}^t\Phi(u)\,du>0$. Hence
$v^T\nabla^2\ell(\beta)v=\sum_i h''(s_ix_i^T\beta)(x_i^Tv)^2<0$ for every
$v\ne0$ when $X$ has full column rank. This proves observed, rather than only
expected, strict concavity. It does not guarantee a finite maximizer under
separation. ∎

---

## Empirical Distributions and Ranks

**Exercise 5.1.** For the standard normal kernel $K(u)=(2\pi)^{-1/2}e^{-u^{2}/2}$, compute $\mu_{2}(K)$ and $R(K)$.

**Solution.** By definition, $\mu_{2}(K)=\int u^{2}(2\pi)^{-1/2}e^{-u^{2}/2}\,du=1$, the variance of a standard normal. For $R(K)$,

$$R(K)=\int_{-\infty}^{\infty}\frac{1}{2\pi}e^{-u^{2}}\,du=\frac{1}{2\pi}\cdot\sqrt{\pi}=\frac{1}{2\sqrt{\pi}}\approx 0.282.$$

∎

**Exercise 5.2.** Show that for the Epanechnikov kernel $K(u)=\frac{3}{4}(1-u^{2})$ on $[-1,1]$, the optimal AMISE is lower than for the normal kernel, with kernel-dependent factor $[\mu_{2}(K)^{2}R(K)^{4}]^{1/5}$ smaller by a factor of about $1.04$.

**Solution.** For Epanechnikov: $\mu_{2}(K)=\int_{-1}^{1}\frac{3}{4}u^{2}(1-u^{2})\,du=\frac{3}{4}[\frac{2}{3}-\frac{2}{5}]=\frac{3}{4}\cdot\frac{4}{15}=\frac{1}{5}$. And $R(K)=\int_{-1}^{1}\frac{9}{16}(1-u^{2})^{2}\,du=\frac{9}{16}[2-\frac{4}{3}+\frac{2}{5}]=\frac{9}{16}\cdot\frac{16}{15}=\frac{3}{5}$. Minimizing $\mathrm{AMISE}(h)=R(K)/(nh)+\tfrac{1}{4}h^{4}\mu_{2}(K)^{2}R(f'')$ over $h$ gives kernel-dependent factor $[\mu_{2}(K)^{2}R(K)^{4}]^{1/5}$. Epanechnikov: $[(1/25)(81/625)]^{1/5}=(81/15625)^{1/5}\approx 0.349$. Normal: $(16\pi^{2})^{-1/5}\approx 0.363$. The ratio $0.363/0.349\approx 1.04$ means the normal kernel's optimal AMISE is about $4\%$ higher; equivalently its efficiency relative to Epanechnikov is $\approx 0.96$. ∎

**Exercise 5.3.** In a two-sample problem with $m=n=5$, what is the total number of label assignments? If all pooled values are distinct and the observed group contains exactly the five largest values, what is the exact p-value for a one-sided difference-in-means test?

**Solution.** There are $\binom{10}{5}=252$ assignments. Distinctness makes the five-largest assignment the unique maximizer, so the inclusive one-sided p-value is $1/252\approx0.004$. The complement is the unique minimizer. Ties can produce several maximizing assignments, all of which must be counted. ∎

---

## Robust Functionals

**Exercise 6.1.** For the trimmed mean that averages observations between the $\alpha$ and $1-\alpha$ quantiles, derive the influence function.

**Solution.** Let $q_{\alpha}=F^{-1}(\alpha)$ and $q_{1-\alpha}=F^{-1}(1-\alpha)$, with positive continuous densities at the quantiles. The trimmed mean functional is

$$T(F)=\frac{1}{1-2\alpha}\int_{q_{\alpha}}^{q_{1-\alpha}}x\,dF(x).$$

Let $W(x)=\min\{q_{1-\alpha},\max(q_\alpha,x)\}$ and
$\mu_W=\mathbb E_F[W(X)]$. Differentiating the contaminated distribution and
both moving boundaries gives

$$\operatorname{IF}(x;T,F)=\frac{W(x)-\mu_W}{1-2\alpha}.$$

Thus the numerator is $q_\alpha-\mu_W$, $x-\mu_W$, or
$q_{1-\alpha}-\mu_W$ in the three regions. The centering is necessary because
the influence function has mean zero. It is bounded. ∎

**Exercise 6.2.** Under replacement contamination and the usual middle-order-statistic definition (averaging the middle pair for even $n$), show that the breakdown point of the sample median is $\lfloor(n+1)/2\rfloor/n$.

**Solution.** Let $[a,b]$ be the finite range of the original sample. For
$n=2m+1$, fewer than $m+1$ replacements leave the $(m+1)$st order statistic
inside $[a,b]$. For $n=2m$, fewer than $m$ replacements leave **both** the
$m$th and $(m+1)$st order statistics inside $[a,b]$, hence their average is
bounded. Replacing the largest $m+1$ originals in the odd case, or the largest
$m$ in the even case, by a common value tending to $+\infty$ makes the odd
median or the even middle-pair average diverge. The minimum replacement
fraction is therefore $\lfloor(n+1)/2\rfloor/n$, approaching $1/2$. ∎

**Exercise 6.3.** For the Huber estimator with $k=1.345$, compute the asymptotic efficiency at the standard normal model.

**Solution.** The asymptotic variance is $\sigma^{2}_{\text{Huber}}=\mathbb{E}[\psi^{2}(Z)]/\mathbb{E}[\psi'(Z)]^{2}$ where $Z\sim\mathcal{N}(0,1)$. We have $\mathbb{E}[\psi'(Z)]=2\Phi(k)-1\approx0.821$ and

$$\mathbb{E}[\psi^2(Z)]
=2[\Phi(k)-\tfrac12-k\phi(k)]+2k^2[1-\Phi(k)]\approx0.710.$$

Thus the variance is $0.710/0.821^2\approx1.053$, and efficiency relative to
the sample mean is its reciprocal, approximately $0.95$. ∎

---

## Multivariate Normal Geometry

**Exercise 7.1.** For $X\sim\mathcal{N}_{p}(0,I_{p})$, show that $\|X\|^{2}\sim\chi^{2}_{p}$ and compute $\mathbb{E}[\|X\|^{2}]$ and $\operatorname{Var}(\|X\|^{2})$.

**Solution.** $\|X\|^{2}=\sum_{j=1}^{p}X_{j}^{2}$, and each $X_{j}^{2}\sim\chi^{2}_{1}$, independent. The sum is $\chi^{2}_{p}$. Then $\mathbb{E}[\|X\|^{2}]=p$ and $\operatorname{Var}(\|X\|^{2})=2p$. ∎

**Exercise 7.2.** Let $S$ be the sample covariance of $n$ iid $\mathcal{N}_{p}(\mu,\Sigma)$ observations. Show that $\mathbb{E}[S]=\Sigma$.

**Solution.** $\mathbb{E}[S]=(n-1)^{-1}\sum_{i}\mathbb{E}[(X_{i}-\bar{X})(X_{i}-\bar{X})^{T}]$. Using $\mathbb{E}[(X_{i}-\mu)(X_{i}-\mu)^{T}]=\Sigma$ and $\operatorname{Var}(\bar{X})=\Sigma/n$, we have $\mathbb{E}[(X_{i}-\bar{X})(X_{i}-\bar{X})^{T}]=\Sigma-\Sigma/n=(1-1/n)\Sigma$. Summing over $n$ observations and dividing by $n-1$ gives $\Sigma$. ∎

**Exercise 7.3.** For $p=3$ with eigenvalues $\lambda=(10,9,1)$, compare the perturbation stability of the leading eigenvector with that of the leading two-dimensional subspace.

**Solution.** Perturbation-angle bounds divide the perturbation norm by the relevant eigengap. The top vector has gap $1$ and the leading two-dimensional subspace has gap $8$, so the latter receives a bound about eight times smaller for a fixed error. The spectrum alone does not prove actual instability: errors much smaller than $1$ cannot rotate the top vector arbitrarily, whereas errors comparable with $1$ can move it materially while the top-two subspace remains better identified. ∎

---

## Dependent Central Limits

**Exercise 8.1.** For an MA(1) process $X_{t}=\varepsilon_{t}+\theta\varepsilon_{t-1}$ with $|\theta|<1$, compute the long-run variance.

**Solution.** $\gamma(0)=(1+\theta^{2})\sigma^{2}_{\varepsilon}$, $\gamma(1)=\theta\sigma^{2}_{\varepsilon}$, $\gamma(h)=0$ for $|h|>1$. Thus

$$\Omega=(1+\theta^{2})\sigma^{2}_{\varepsilon}+2\theta\sigma^{2}_{\varepsilon}=(1+\theta)^{2}\sigma^{2}_{\varepsilon}.$$

For $\theta=0.5$, $\Omega=2.25\sigma^{2}_{\varepsilon}$, compared to $\gamma(0)=1.25\sigma^{2}_{\varepsilon}$. ∎

**Exercise 8.2.** Show that for an AR(1) with $\phi=-0.8$, the long-run variance is smaller than $\gamma(0)$.

**Solution.** $\Omega=\sigma^{2}_{\varepsilon}/(1+0.8)^{2}=\sigma^{2}_{\varepsilon}/3.24\approx 0.309\sigma^{2}_{\varepsilon}$, while $\gamma(0)=\sigma^{2}_{\varepsilon}/(1-0.64)\approx 2.778\sigma^{2}_{\varepsilon}$. Negative autocorrelation makes the sample mean *more* precise than the iid formula suggests. ∎

**Exercise 8.3.** Under what conditions does the Newey-West estimator converge in probability to $\Omega$?

**Solution.** One concrete sufficient set of conditions is that the centered series is strictly stationary, has finite fourth moment, $\sum_h|\gamma(h)|<\infty$, and

$$\sum_{r,s,t\in\mathbb Z}|\operatorname{cum}(X_0,X_r,X_s,X_t)|<\infty,$$

with $m\to\infty$ and $m/n\to0$. Absolute covariance summability makes the Bartlett truncation bias vanish (and implies $m^{-1}\sum_{h\le m}h|\gamma(h)|\to0$). Absolute fourth-cumulant summability bounds the variance of the growing weighted autocovariance sum by $O(m/n)$; replacing the true mean by $\bar X$ is negligible under these conditions. Hence $\widehat\Omega\to_p\Omega$. Pointwise consistency at each fixed lag alone would not control a sum whose number of lags grows with $n$. ∎

---

## Counting-Process Survival Theory

**Exercise 9.1.** Show that for uncensored data, the Kaplan–Meier estimator reduces to the empirical survival function $n^{-1}\sum_{i}\mathbf{1}_{\{T_{i}>t\}}$.

**Solution.** With no censoring, $n_{j}$ is the number of subjects with $T_{i}\ge t_{j}$ and $d_{j}$ is the number with $T_{i}=t_{j}$. Then $1-d_{j}/n_{j}=(n_{j}-d_{j})/n_{j}$, the fraction surviving past $t_{j}$. The product telescopes to $n^{-1}$ times the number with $T_{i}>t$. ∎

**Exercise 9.2.** For the data in the worked example, compute the Nelson–Aalen estimate at $t=5$ and compare to $-\log\hat{S}(5)$.

**Solution.** $\hat{\Lambda}(5)=1/5+0/4+2/3=0.2+0+0.667=0.867$. And $-\log\hat{S}(5)=-\log(0.267)\approx 1.322$. The inequality follows from $-\log(1-x)\ge x$ for every event fraction $0\le x<1$. It already holds with a single event and is not solely a consequence of tied events. ∎

**Exercise 9.3.** Explain why the Cox partial likelihood is not a likelihood in the ordinary sense.

**Solution.** With one failure at each event time, a factor of $L_p$ is the
conditional probability of **which** member of the current risk set fails,
given that one failure occurs then. Their product therefore uses failure order
and risk-set membership but omits the baseline-hazard contribution carried by
the event times themselves; it is not the joint likelihood of all observed
times and censoring indicators.

Writing $S^{(0)}_\beta(t)=\sum_iY_i(t)e^{x_i^T\beta}$ and $V_\beta(t)$ for the
corresponding weighted risk-set covariance, the negative partial-log-likelihood
Hessian is the observed event sum $\sum_{t:\,dN(t)=1}V_\beta(t)$. At the true
parameter, the score is a martingale whose predictable bracket is instead

$$\int V_{\beta_0}(t)S^{(0)}_{\beta_0}(t)\,d\Lambda_0(t).$$

The event sum and this compensator are asymptotically related under the usual
law-of-large-numbers and regularity conditions; they are not literally the
same finite-sample matrix. Efficient semiparametric inference for $\beta$ in
the Cox model with an unspecified baseline is an imported regularity result.
It should not be restated as generic equivalence to a full-likelihood MLE under
an arbitrarily chosen parametric baseline. ∎

---

## Spatial Covariance and Kriging

**Exercise 10.1.** Show that the exponential covariance $C(h)=\sigma^{2}\exp(-\|h\|/\rho)$ is positive semidefinite in $\mathbb{R}^{d}$ for any $d$.

**Solution.** The Gaussian scale-mixture identity proved below represents the exponential as a positive mixture of Gaussian covariances in every finite dimension. Each Gaussian kernel is positive semidefinite by its feature expansion. Integrating their finite nonnegative quadratic forms against a positive mixing measure preserves nonnegativity. Scaling by a nonnegative variance preserves it as well. ∎

**Exercise 10.2.** For a single observation at $s_{1}$ with $C(0)=4$ and $C(s_{1},s_{0})=3$, find the simple kriging predictor and its variance.

**Solution.** $K=[4]$, $k_{0}=[3]$. The weight is $a=3/4$. The predictor is $\hat{Z}(s_{0})=0.75Z(s_{1})$. The variance is $4-3^{2}/4=4-2.25=1.75$. This assumes the covariance is known and ignores measurement error. ∎

**Exercise 10.3.** Explain why ordinary kriging has prediction variance at least as large as simple kriging for the same covariance model, and state when equality can occur.

**Solution.** The constraint $\sum a_i=1$ restricts the class of linear predictors, so its minimum MSE cannot be smaller than the unrestricted simple-kriging minimum. It is strictly larger only when the simple-kriging optimizer violates the constraint. If the simple weights already sum to one, the same optimizer is feasible for both problems and the variances are equal. ∎

---

## Multiplicity and Post-Selection Scope

**Exercise 11.1.** Show that Holm's procedure is uniformly more powerful than Bonferroni.

**Solution.** If Bonferroni rejects ordered rank $j$, then
$p_{(j)}\le\alpha/m$. For every $i\le j$,
$p_{(i)}\le p_{(j)}\le\alpha/m\le\alpha/(m-i+1)$. Every Holm comparison
through $j$ therefore passes, so Holm rejects that hypothesis. This argument
includes the required step-down stopping rule. Later Holm thresholds can also
admit hypotheses Bonferroni does not reject. ∎

**Exercise 11.2.** For $m=100$ independent tests, all null hypotheses true and all p-values exactly uniform, at what threshold does Bonferroni reject? What is the expected number of rejections?

**Solution.** Bonferroni rejects if $p\le 0.05/100=0.0005$. Under the null,
$p\sim\text{Uniform}(0,1)$, so the expected number of rejections is exactly
$100(0.0005)=0.05$. Under independence the FWER is
$1-(1-0.0005)^{100}\approx0.0488$. For merely valid superuniform p-values,
these are upper bounds rather than necessarily equalities. ∎

**Exercise 11.3.** Explain why the ordinary bootstrap can fail for post-selection inference at nonregular boundaries.

**Solution.** Near an active-set boundary, the selected estimator is nonsmooth and its limiting law can change along $n^{-1/2}$-local parameter sequences. A bootstrap centered at the empirical estimate need not reproduce that law uniformly, so coverage can fail. Finite-sample selection probabilities can still be continuous; the issue is local asymptotic regularity. A particular procedure needs its own validity theorem. ∎

---

## Functional Delta Method and Bootstrap Boundaries

**Exercise 13.1.** Derive the influence function for the variance functional $T(P)=\operatorname{Var}_{P}(X)$.

**Solution.** Write $T(P)=\int x^{2}\,dP(x)-[\int x\,dP(x)]^{2}$. The influence function is

$$\operatorname{IF}(x)=(x^{2}-\mathbb{E}[X^{2}])-2\mu(x-\mu)=(x-\mu)^{2}-\sigma^{2}.$$

This is bounded for bounded $x$ but unbounded for distributions with unbounded support. ∎

**Exercise 13.2.** Let $s^2=(n-1)^{-1}\sum_i(X_i-\bar X)^2$. Show that the conditional bootstrap variance of the sample mean is $(n-1)s^2/n^2$.

**Solution.** The empirical-distribution variance of one bootstrap draw is $n^{-1}\sum_i(X_i-\bar X)^2=(n-1)s^2/n$. Hence $\operatorname{Var}^*(\bar X^*)=(n-1)s^2/n^2$, asymptotically equivalent to $s^2/n$. ∎

**Exercise 13.3.** Explain why the bootstrap fails for the sample maximum from a uniform distribution on $[0,\theta]$.

**Solution.** The bootstrap maximum always satisfies
$X_{(n)}^*\le X_{(n)}$. Equality occurs exactly when the observed maximum is
selected at least once, so
$\mathbb P^*(X_{(n)}^*=X_{(n)})=1-(1-1/n)^n\to1-e^{-1}$. This persistent
atom at zero in the conditional law of $n(X_{(n)}-X_{(n)}^*)$ cannot match the
continuous limiting law of $n(\theta-X_{(n)})$. ∎

---

## Missingness and Weighting as Identification

**Exercise 14.1.** Show that under MCAR, the complete-case mean $\sum_{i}R_{i}Y_{i}/\sum_{i}R_{i}$ is consistent for $\mathbb{E}[Y]$.

**Solution.** Under MCAR, $R$ is independent of $Y$, so $\mathbb{E}[RY]=\mathbb{E}[R]\mathbb{E}[Y]$ and $\mathbb{E}[R]=\pi$. By the law of large numbers, $\sum R_{i}Y_{i}/n\to_{p}\pi\mathbb{E}[Y]$ and $\sum R_{i}/n\to_{p}\pi$. Their ratio converges to $\mathbb{E}[Y]$ by the continuous mapping theorem. ∎

**Exercise 14.2.** For a binary $X$ with $\pi(0)=0.9$ and $\pi(1)=0.3$, explain why IPW can be unstable even with a moderate sample size.

**Solution.** Units with $X=1$ have inverse weight $1/0.3\approx 3.33$, while units with $X=0$ have weight $1/0.9\approx 1.11$. The rare stratum can therefore receive three times the weight per observation. Assess its support, effective sample size, and variance before choosing a remedy. Stabilization or truncation is optional and must be declared; truncation trades variance against bias or a changed target. ∎

**Exercise 14.3.** Show that the doubly robust estimator can be written as the solution to an estimating equation.

**Solution.** Define $\psi(Z,\mu,m,\pi)=m(X)+R(Y-m(X))/\pi(X)-\mu$. Then $\mathbb{E}[\psi(Z,\mu_{0},m_{0},\pi_{0})]=0$ if either $m_{0}=\mathbb{E}[Y\mid X]$ or $\pi_{0}=\mathbb{P}(R=1\mid X)$. The estimator $\hat{\mu}_{DR}$ solves $n^{-1}\sum_{i}\psi(Z_{i},\mu,\hat{m},\hat{\pi})=0$. ∎

---

## Decision Targets and Proper Scores

**Exercise 15.1.** Show that the Brier score is strictly proper for binary outcomes.

**Solution.** For forecast $p$ and true probability $\pi$, the expected score is $\pi(1-p)^{2}+(1-\pi)p^{2}=\pi-2\pi p+p^{2}$. Differentiating with respect to $p$: $-2\pi+2p=0$, so $p=\pi$ is the unique minimizer. The second derivative is $2>0$, confirming a minimum. ∎

**Exercise 15.2.** For a continuous outcome with $\mathbb E|Y|<\infty$, show that the quantile loss $L_{\tau}(d,y)=(y-d)(\tau-\mathbf{1}_{\{y\le d\}})$ is minimized at the $\tau$th quantile.

**Solution.** The subgradient with respect to $d$ is $-\tau\mathbb{P}(Y>d)+(1-\tau)\mathbb{P}(Y\le d)=F(d)-\tau$, where $F$ is the continuous CDF. At a $\tau$th quantile it contains zero. For $d<q_{\tau}$ the subgradient is nonpositive, and for $d>q_{\tau}$ it is nonnegative; a plateau with $F(d)=\tau$ can therefore give an interval of minimizers. If $F$ is strictly increasing, the two signs are strict away from $q_{\tau}$ and the minimizer is unique. ∎

**Exercise 15.3.** A forecaster reports $p=0.99$ for an event that occurs with true probability $0.5$. Compute the expected log score and explain why it is heavily penalized.

**Solution.** $\mathbb{E}[S]=-0.5\log(0.99)-0.5\log(0.01)\approx -0.5(-0.01)-0.5(-4.605)=0.005+2.303=2.308$. The term $-\log(0.01)=4.605$ dominates because the forecaster assigned only $1\%$ probability to the event that occurs half the time. The log score heavily penalizes overconfidence. ∎

---

## Small-Sample and Boundary Diagnostics

**Exercise 16.1.** In a $2\times 2$ table with counts $(a,b;c,d)$ and positive row and column margins, show that the MLE of the log odds ratio is $\log(ad/bc)$. Explain the single-zero cases when the other cells are positive, and distinguish degenerate margins.

**Solution.** With positive cells, $\hat\beta_1=\log(a/c)-\log(b/d)=\log(ad/bc)$. If exactly one cell is zero and the other three are positive, $a=0$ or $d=0$ gives $-\infty$, while $b=0$ or $c=0$ gives $+\infty$. Multiple zeros can create degenerate margins or nonidentifiability and require separate analysis. Adding $0.5$ gives a finite corrected table estimate; full Firth inference comes from the penalized likelihood. ∎

**Exercise 16.2.** For a cluster-randomized trial with $J=6$ clusters per arm, explain why the normal approximation to the cluster-level mean difference is questionable.

**Solution.** The effective sample size is $12$ clusters total. The normal approximation requires many clusters for the CLT to apply to cluster means. With $6$ per arm, the sampling distribution of the mean difference may be heavy-tailed or skewed. A $t$-test with $10$ degrees of freedom or a permutation test is more appropriate. ∎

**Exercise 16.3.** Show that the condition number of $X^{T}X$ for a design with one highly correlated pair of covariates can be arbitrarily large.

**Solution.** Let $X=(x_{1},x_{2})$ with $x_{2}=x_{1}+\varepsilon$ where $\|\varepsilon\|$ is small. Then $X^{T}X\approx\begin{pmatrix}\|x_{1}\|^{2}&\|x_{1}\|^{2}\\\|x_{1}\|^{2}&\|x_{1}\|^{2}\end{pmatrix}$, which has eigenvalues approximately $2\|x_{1}\|^{2}$ and $0$. The condition number approaches infinity as $\varepsilon\to 0$. ∎

---

## Model Checking and the Double Use of Data

**Exercise 17.1.** Show that for OLS regression **with an intercept**, the raw residuals satisfy $\sum_{i}r_{i}=0$ and $\sum_{i}x_{ij}r_{i}=0$ for each predictor $j$.

**Solution.** The normal equations are $X^{T}(y-X\hat{\beta})=0$, which is exactly $\sum_{i}x_{ij}(y_{i}-\hat{y}_{i})=0$. For the intercept, $x_{i1}=1$, so $\sum_{i}r_{i}=0$. These orthogonality constraints mean residuals are not independent. ∎

**Exercise 17.2.** Explain why posterior predictive p-values are not generally uniformly distributed under the null, and give a simple exact illustration.

**Solution.** Given $y$, the replicate is drawn from the posterior predictive law, but the already observed $y$ is not a fresh draw from that conditional law. For $Y_i\mid\theta\sim\mathcal N(\theta,\sigma^2)$ with known variance and a flat prior, $\theta\mid y\sim\mathcal N(\bar y,\sigma^2/n)$, so $\bar Y^{\mathrm{rep}}\mid y\sim\mathcal N(\bar y,2\sigma^2/n)$. Hence $\mathbb P(\bar Y^{\mathrm{rep}}\ge\bar y\mid y)=1/2$ for every dataset, not Uniform$(0,1)$ across datasets. Known-parameter or pivotal cases can be uniform, so the boundary is “not generally,” not “never.” ∎

**Exercise 17.3.** For a time series model, explain why the Ljung-Box test with $k=20$ lags may have low power against long-memory alternatives.

**Solution.** Long-memory processes have slowly decaying autocorrelations. The Ljung-Box test with $k=20$ captures only the first $20$ lags. If autocorrelations are significant at lags $21$-$100$, the test misses them. A test with larger $k$ or a specific long-memory diagnostic (e.g., Hurst exponent) is needed. ∎

---

## Survey-Weighted Models and Targets

**Exercise 18.1.** Show that the pseudo-MLE is design consistent for the finite-population log-likelihood target under regularity conditions.

**Solution.** The pseudo-score is $U_{w}(\beta)=\sum_{i\in s}w_{i}\dot{\ell}_{i}(\beta)$. For design weights $w_{i}=1/\pi_{i}$, $\mathbb{E}_{d}[U_{w}(\beta)]=\sum_{i=1}^{N}\dot{\ell}_{i}(\beta)$, the population score. Normalize these as $\hat u_N$ and $u_N$ on a declared compact parameter set $B$. A sufficient consistency contract is

$$\sup_{\beta\in B}\|\hat u_N(\beta)-u_N(\beta)\|\to_{p,d}0$$

and, for every $\varepsilon>0$, eventual global separation

$$\inf_{\beta\in B:\,\|\beta-\beta_N\|\ge\varepsilon}\|u_N(\beta)\|>c_\varepsilon>0,$$

where $\beta_N$ is the unique interior population root. If an interior sample root $\hat\beta_N\in B$ is selected, uniform convergence and separation force $\hat\beta_N\to_{p,d}\beta_N$. Controlled weights/moments and smooth nonsingular derivatives are standard ways to establish the convergence and local root conditions, but an isolated local root alone cannot rule out selecting a remote sample root. This argument does not identify the target with a squared-error optimizer unless the two objectives are proved to share one. ∎

**Exercise 18.2.** A population has two strata, each of size $100$, with finite-population means $10$ and $20$ and finite-population variances $S_1^2=S_2^2=25$. Independent SRSWOR samples take $n_1=50$ and $n_2=10$, so the inclusion probabilities are $0.5$ and $0.1$. Compute the design expectations and variances of (i) the population-weighted stratified mean $\hat\mu_w=(\bar y_1+\bar y_2)/2$ and (ii) the unweighted sample mean $\hat\mu_u=(50\bar y_1+10\bar y_2)/60$. Compare variance and mean squared error for the true population mean $15$.

**Solution.** Since each stratum sample mean is design-unbiased,
$\mathbb E_d(\hat\mu_w)=(10+20)/2=15$. The SRSWOR variances are
$\operatorname{Var}_d(\bar y_1)=(1-0.5)25/50=0.25$ and
$\operatorname{Var}_d(\bar y_2)=(1-0.1)25/10=2.25$. Independence across
strata gives

$$\operatorname{Var}_d(\hat\mu_w)=\tfrac14(0.25+2.25)=0.625.$$

The unweighted estimator instead has
$\mathbb E_d(\hat\mu_u)=(5/6)10+(1/6)20=35/3\approx11.67$, so its bias is
$-10/3$. Its variance is

$$\operatorname{Var}_d(\hat\mu_u)=\frac{25}{36}(0.25)+\frac{1}{36}(2.25)
=\frac{17}{72}\approx0.236.$$

Thus the weighted-to-unweighted variance ratio is $45/17\approx2.65$, but
variance alone hides the unweighted estimator's bias. The MSEs are $0.625$
and $17/72+100/9\approx11.35$, respectively. ∎

**Exercise 18.3.** Explain why weighted cross-validation does not restore independence within clusters.

**Solution.** Cross-validation splits data into folds. If observations within clusters are dependent, putting some cluster members in training and others in test creates leakage: the test observations are not independent of the training data. Weighting adjusts for selection probabilities but does not break within-cluster dependence. Cluster-level cross-validation is required. ∎

---

## Reproducible Numerical Inference

**Exercise 19.1.** Compute $\log(e^{-1000}+e^{-1001})$ stably.

**Solution.** Let $a=-1000$, $b=-1001$. Then $a\ge b$, so

$$\log(e^{-1000}+e^{-1001})=-1000+\log(1+e^{-1})\approx -1000+0.313=-999.687.$$

In ordinary IEEE-754 binary64 arithmetic, both $e^{-1000}$ and $e^{-1001}$ underflow to zero, so the fully naive computation returns $\log 0=-\infty$. Even in a format where only the smaller term underflowed, dropping it would give $-1000$, off by $0.313$. The shifted calculation avoids both failures. ∎

**Exercise 19.2.** Compare the leading operation counts and numerical properties of solving one symmetric positive-definite system $Ax=b$ by Cholesky factorization with explicitly computing $A^{-1}$ and multiplying by $b$.

**Solution.** Under the usual floating-point flop convention, Cholesky factorization costs about $n^3/3$ flops and the two triangular solves cost about $2n^2$ more. Explicit inversion also requires a factorization followed by solves against all $n$ coordinate vectors, so it performs additional order-$n^3$ work before the final matrix-vector product. The exact constant ratio depends on the inversion algorithm and counting convention, so there is no universal “half” or “six times” factor. Direct solves use less work and storage and avoid magnifying error by forming entries of an inverse that the problem does not request. ∎

**Exercise 19.3.** A bootstrap with $B=1000$ replicates estimates a $95\%$ confidence interval for a median. The bootstrap standard deviation is $0.5$. What is the Monte Carlo standard error of the upper bootstrap quantile?

**Solution.** The bootstrap standard deviation alone does not determine the density at its upper quantile, so the requested Monte Carlo standard error is not identified by the stated information. If the conditional bootstrap law has a continuous positive density f at its 0.975 quantile, the large-B quantile variance is approximately $0.975(1-0.975)/(B f(q)^2)$. As an explicitly additional normal approximation with standard deviation one half, the density there is about $0.0584/0.5$, giving a Monte Carlo standard error about $0.042$. Other distributions with the same standard deviation can have very different tail densities and quantile errors. The finite-binomial rank interval below avoids substituting a normal density without justification. ∎