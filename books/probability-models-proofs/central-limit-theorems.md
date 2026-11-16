
# Central Limit Theorems

A law of large numbers identifies where an average settles. A central limit theorem describes its first-order random fluctuation. Under the classical iid assumptions, sums centered by $n\mu$ and scaled by $\sigma \sqrt{n}$ approach the standard normal law. The square-root scale, Gaussian shape, and centering are conclusions paid for by explicit moment and dependence hypotheses.

This chapter proves the iid theorem using characteristic functions, derives the de Moivre–Laplace approximation, and states a triangular-array theorem for unequal summands. Berry–Esseen bounds quantify one finite-sample error, continuity correction addresses lattice geometry, and the delta method transports an established limit through smooth functions. Counterexamples mark the boundaries created by heavy tails, dominant terms, and dependence.

## 1. Center first, then scale

Let $X_{1},X_{2},...$ be iid with finite mean $\mu$ and variance $0<\sigma^{2}<\infty$. Put

$S_{n}=\sum_{k=1}^{n}X_{k}$, $\bar{X}_{n}=S_{n}/n$.

Then

$\mathbb{E}[S_{n}]=n\mu$, $\operatorname{Var}(S_{n})=n\sigma^{2}$.

The standardized sum is

$Z_{n}=(S_{n}-n\mu )/(\sigma \sqrt{n})=\sqrt{n}(\bar{X}_{n}-\mu )/\sigma$.

It has mean zero and variance one for every $n$. Standardization does not prove normality, but it prevents the sequence from collapsing to zero or spreading without scale.

**Theorem 15.1 (Lindeberg–Lévy iid central limit).** Under the assumptions above,

$Z_{n}\Rightarrow Z$, where $Z\sim \mathcal{N}(0,1)$.

Equivalently, at every real $x$,

$\mathbb{P}(S_{n}\le n\mu +\sigma \sqrt{n}x)\to \Phi (x)$.

The standard normal CDF $\Phi$ is continuous everywhere, so no exceptional CDF points are needed.

## 2. The characteristic-function expansion

Standardize one summand:

$Y=(X_{1}-\mu )/\sigma$.

Then $\mathbb{E}[Y]=0$, $\mathbb{E}[Y^{2}]=1$. Let $\varphi (t)=\mathbb{E}[e^{itY}]$. Finite second moment implies the local expansion

$\varphi (t)=1-t^{2}/2+o(t^{2})$ as $t\to 0$.

One justification starts from

$e^{iu}=1+iu-u^{2}/2+r(u)$,

where $r(u)/u^{2}\to 0$ as $u\to 0$ and $\lvert r(u)\rvert \le C u^{2}$ for a universal finite $C$. Substitute $u=tY$, take expectations, use $\mathbb{E}[Y]=0$ and $\mathbb{E}[Y^{2}]=1$, and apply dominated convergence to $r(tY)/t^{2}$, dominated by $CY^{2}$. The remainder is $o(t^{2})$.

The absolute second moment is exactly the license for this second-order expansion under expectation. A formal Taylor series without a dominating argument is not a proof.

## 3. Proof of the iid CLT

Because the standardized summands are independent,

$\varphi_{Z_{n}}(t)=[\varphi (t/\sqrt{n})]^{n}$.

The local expansion gives

$\varphi (t/\sqrt{n})=1-t^{2}/(2n)+o(1/n)$.

For a sequence $u_{n}\to u$, the elementary exponential limit

$(1+u_{n}/n)^{n}\to e^{u}$

therefore yields

$\varphi_{Z_{n}}(t)\to e^{-t^{2}/2}$.

More carefully, the complex factors approach one and are nonzero eventually, so a local logarithm satisfies

$n \log \varphi (t/\sqrt{n})\to -t^{2}/2$.

The limit $e^{-t^{2}/2}$ is the characteristic function of a standard normal variable and is continuous at zero. Lévy's continuity theorem proves $Z_{n}\Rightarrow Z$. The imported continuity theorem is Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 3.3.17, pp. 132--133.

This proof reveals the mechanism. Centering removes the linear term, variance sets the quadratic term, independence turns sums into products, and all higher local terms vanish under square-root normalization.

## 4. Normal approximation is not exactness

The CLT is a convergence statement as $n\to \infty$. At a fixed $n$, the distribution may remain discrete, skewed, or heavy in its tails. The theorem alone supplies no universal sample-size threshold.

If the summands are already normal, the conclusion is exact for every $n$: independent normal sums are normal. Otherwise an approximation needs an error analysis or diagnostic suited to the distribution and probability region. Central probabilities often stabilize sooner than extreme tails.

The normalized and unnormalized forms must not be confused. The law of large numbers says $\bar{X}_{n}\to_{P}\mu$; the CLT says

$\sqrt{n}(\bar{X}_{n}-\mu )\Rightarrow \mathcal{N}(0,\sigma^{2})$.

Without the factor $\sqrt{n}$, the difference collapses to zero. Without centering, $S_{n}/(\sigma \sqrt{n})$ generally drifts like $\mu \sqrt{n}/\sigma$.

## 5. de Moivre–Laplace for binomial counts

Let $B_{n}\sim \operatorname{Binomial}(n,p)$ with $0<p<1$. Write it as a sum of iid Bernoulli variables, whose mean is $p$ and variance is $p(1-p)$. The iid CLT gives

$[B_{n}-np]/\sqrt{np(1-p)}\Rightarrow \mathcal{N}(0,1)$.

Thus for integers $a\le b$, a normal approximation is

$\mathbb{P}(a\le B_{n}\le b)\approx \Phi ((b+1/2-np)/\sqrt{np(1-p)})$

$-\Phi ((a-1/2-np)/\sqrt{np(1-p)})$.

The half-unit shifts form the **continuity correction**. The integer $k$ represents a cell extending approximately from $k-1/2$ to $k+1/2$ on the continuous scale. This geometric adjustment often improves a central binomial approximation, but it is not part of the limiting theorem and does not repair severe skewness or rare-event tails.

Rules such as requiring both $np$ and $n(1-p)$ to exceed a chosen threshold are heuristics, not theorem hypotheses. When either is small, a Poisson, saddlepoint, or exact binomial calculation may be preferable.

## 6. Berry–Esseen gives a finite-sample bound

Assume the iid CLT hypotheses and additionally let

$\rho =\mathbb{E}[\lvert X_{1}-\mu \rvert^{3}]<\infty$.

A Berry–Esseen theorem gives a universal constant $C$ such that

$\sup_{x\in \mathbb{R}}\lvert \mathbb{P}(Z_{n}\le x)-\Phi (x)\rvert \le C \rho /(\sigma^{3}\sqrt{n})$.

Throughout this chapter we use the safe, deliberately nonoptimal convention $C=1$. Shevtsova, “On the absolute constants in the Berry–Esseen type inequalities for identically distributed summands,” arXiv:1111.6554 (2011), proves the stronger estimate $C<0.4748$ in this iid setting, so it supports the conservative value used here. Durrett's Theorem 3.4.17 has constant $3$ and is not the source for this normalization. With the $C=1$ convention,

$\sup_{x}\lvert F_{Z_{n}}(x)-\Phi (x)\rvert \le \rho /(\sigma^{3}\sqrt{n})$.

The quantity $\rho /\sigma^{3}$ is standardized absolute skew magnitude, though it is not the signed skewness. The bound is uniform over thresholds and distribution-free within its assumptions. It may be conservative and becomes unavailable when the third absolute moment is infinite even though the finite-variance CLT still holds.

Berry–Esseen controls CDF error, not relative error in a very small tail probability. An absolute error of $0.01$ is minor near probability $1/2$ and disastrous for a target probability $10^{-5}$.

## 7. Independent triangular arrays

Some sums have terms whose laws change with $n$. Let

$X_{n,1},...,X_{n,k_{n}}$

be independent within each row, centered, and have finite variances. Define

$s_{n}^{2}=\sum_{k=1}^{k_{n}}\operatorname{Var}(X_{n,k})$,

and assume $s_{n}^{2}>0$. The array satisfies the **Lindeberg condition** when, for every $\varepsilon >0$,

$(1/s_{n}^{2})\sum_{k=1}^{k_{n}}\mathbb{E}[X_{n,k}^{2} \mathbf{1}_{\lvert X_{n,k}\rvert >\varepsilon s_{n}}]\to 0$.

**Theorem 15.2 (Lindeberg central limit).** Under these assumptions and the Lindeberg condition,

$(1/s_{n})\sum_{k=1}^{k_{n}}X_{n,k}\Rightarrow \mathcal{N}(0,1)$.

This is the row-normalized form of Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 3.4.10, pp. 148–149: dividing a row by $s_n$ turns its total variance into one. The result quoted here is the sufficient direction; the converse requires the additional infinitesimality condition described below.

The condition says that no nonnegligible portion of total variance comes from summands large on the scale of the whole row. It implies the Feller negligibility condition

$\max_{k} \operatorname{Var}(X_{n,k})/s_{n}^{2}\to 0$.

For a converse equivalence, one normally adds such an infinitesimality condition; the sufficient theorem above is the safe form used here.

### Lyapunov's stronger criterion

If for some $\delta >0$,

$[1/s_{n}^{2+\delta }]\sum_{k}\mathbb{E}\lvert X_{n,k}\rvert^{2+\delta }\to 0$,

then Lindeberg holds. On $\lvert X_{n,k}\rvert >\varepsilon s_{n}$,

$X_{n,k}^{2}\le \lvert X_{n,k}\rvert^{2+\delta }/(\varepsilon s_{n})^\delta$.

Summing proves the implication. Lyapunov is often easier to check but demands a higher moment.

### The iid theorem as a Lindeberg case

For centered iid variables of variance $\sigma^{2}$, take $k_{n}=n$ and $s_{n}=\sigma \sqrt{n}$. The Lindeberg expression becomes

$(1/\sigma^{2})\mathbb{E}[(X_{1}-\mu )^{2} \mathbf{1}_{\lvert X_{1}-\mu \rvert >\varepsilon \sigma \sqrt{n}}]$,

which tends to zero by dominated convergence. Finite variance is enough; no third moment is required.

## 8. A dominant-term counterexample

Let each row contain a single symmetric sign $X_{n,1}$ taking values $\pm 1$, and put $s_{n}=1$. The standardized row sum is always a symmetric sign, not approximately normal. The Lindeberg expression equals one whenever $\varepsilon <1$, so the condition fails.

The same issue can be hidden inside longer rows if one variable carries a fixed fraction of total variance. Having many written summands is irrelevant when only one or two dominate the fluctuation scale.

Lindeberg also does not cover dependence. Martingale, mixing, dependency-graph, and other specialized CLTs replace within-row independence by different structures and conditions.

## 9. The delta method

Suppose

$\sqrt{n}(T_{n}-\theta )\Rightarrow \mathcal{N}(0,\tau^{2})$

and $g$ is differentiable at $\theta$. A first-order Taylor expansion gives

$g(T_{n})-g(\theta )=g'(\theta )(T_{n}-\theta )+r_{n}$,

where $r_{n}/(T_{n}-\theta )\to_{P}0$. Slutsky's theorem yields

$\sqrt{n}[g(T_{n})-g(\theta )]\Rightarrow \mathcal{N}(0,[g'(\theta )]^{2}\tau^{2})$.

This is the **delta method**. It transports an established asymptotic law; it does not create one from consistency alone.

### Boundaries

If $g'(\theta )=0$, the first-order limit is degenerate. A second-order expansion may require scaling by $n$ and can produce a nonnormal limit. For example, if $\sqrt{n}T_{n}\Rightarrow Z$ and $\theta =0$, then

$nT_{n}^{2}\Rightarrow Z^{2}$,

while $\sqrt{n}T_{n}^{2}\to_{P}0$.

If $g$ is discontinuous at $\theta$, even consistency may not pass through it. If $g$ has an infinite derivative or a boundary parameter, a different normalization may be needed. A multivariate delta method uses the gradient and covariance matrix, with output covariance $Dg(\theta )\Sigma Dg(\theta )^{T}$.

## 10. Heavy tails and dependence

Finite variance is close to the classical iid boundary. For iid standard Cauchy variables,

$S_{n}/n \sim X_{1}$

for every $n$; square-root normalization is inappropriate, and no Gaussian limit appears. More generally, power-law tails with index $\alpha <2$ can lead to $\alpha$-stable limits under $n^{1/\alpha }$-type scaling rather than $\sqrt{n}$ scaling.

Infinite variance does not logically rule out every normal domain of attraction: some borderline laws admit a normal limit with a nonstandard slowly varying normalization. What fails is the automatic finite-variance iid theorem and its $\sigma \sqrt{n}$ scaling.

Dependence can also defeat the classical result. If $X_{k}=Y$ for all $k$, then

$(S_{n}-n\mathbb{E}[Y])/\sqrt{n}=\sqrt{n}(Y-\mathbb{E}[Y])$,

which does not approach a fixed normal law when $Y$ is nonconstant. Weak dependence can support other CLTs, but covariance decay alone may not be sufficient without additional regularity.

## 11. Using a CLT responsibly

A normal approximation should be reported with:

- the centered statistic and normalization;
- the theorem and its checked hypotheses;
- whether parameters such as $\sigma$ are known or estimated;
- a finite-sample error bound when one is available;
- attention to lattice correction, skewness, and tail region;
- a fallback such as exact computation or simulation when approximation risk matters.

If an estimated standard error converges in probability to the true positive standard error, Slutsky can justify a studentized limit. That consistency proof is separate from the CLT. Replacing $\sigma$ by an unstable or zero estimate is not harmless.

## 12. A central-limit audit

Before claiming asymptotic normality, ask:

1. What are the centering and fluctuation scale?
2. Are summands iid, independent in an array, or dependent?
3. Is variance finite and positive?
4. For an array, does Lindeberg or a stronger Lyapunov condition hold?
5. Can one term carry a nonvanishing fraction of total variance?
6. Is a Berry–Esseen claim supported by a finite third absolute moment?
7. Is CDF error being confused with relative tail error?
8. Would a continuity correction meaningfully represent the lattice cells?
9. Does the delta map have a nonzero finite derivative at the target?
10. Are heavy tails, dependence, or estimated scaling changing the theorem?

## Worked examples: approximation, rates, and changing scales

### Worked example 1. A binomial interval and a certified approximation error

Let $B_n\sim\operatorname{Binomial}(n,1/2)$ and $Z_n=(B_n-n/2)/(\sqrt n/2)$. The iid CLT gives $Z_n\Rightarrow N(0,1)$. For fair Bernoulli summands, the third absolute centered moment divided by the cubed standard deviation is one, so the chapter's conservative Berry–Esseen constant gives $\sup_x|P(Z_n\le x)-\Phi(x)|\le n^{-1/2}$.

At $n=100$, consider $45\le B_n\le55$. Exactly,
$P(45\le B_n\le55)=P(Z_n\le1)-P(Z_n\le-1.2)$,
because the lower excluded integer is forty-four. Applying the CDF bound at both endpoints gives an error at most $0.2$ for the approximation $\Phi(1)-\Phi(-1.2)$. This certified bound is deliberately conservative.

A continuity-corrected approximation uses $\Phi(1.1)-\Phi(-1.1)$ instead. It is often numerically better, but the preceding $0.2$ bound was proved for the uncorrected endpoint expression. To transfer a rigorous error guarantee, add the deterministic difference between the two normal expressions, or use an additional theorem that controls continuity correction. A plausible decimal approximation and a theorem-certified error are separate statements.

### Worked example 2. A bounded independent triangular array

For each $n$, let $X_{n,1},\ldots,X_{n,n}$ be independent centered variables, each bounded in absolute value by one, with total variance $s_n^2\ge n/4$. Fix $\varepsilon>0$. For sufficiently large $n$, $\varepsilon s_n\ge\varepsilon\sqrt n/2>1$. Every event $|X_{n,k}|>\varepsilon s_n$ is then empty. The Lindeberg expression is exactly zero for all sufficiently large $n$, proving the condition without estimating any tail integral.

The Lindeberg theorem yields $\sum_kX_{n,k}/s_n\Rightarrow N(0,1)$. Neither identical distributions within rows nor independence across different rows is required. Row independence and the displayed total-variance growth are doing the work. In contrast, bounding all summands by one while leaving total variance bounded would not make their sizes negligible relative to $s_n$.

For example, centered Bernoulli variables with success probabilities anywhere in $[1/4,3/4]$ have variances at least $3/16$, so the same argument works with $s_n^2\ge3n/16$. This is a normal approximation for a Poisson-binomial sum under nonidentical probabilities, with its actual summed variance.

### Worked example 3. A squared estimate at and away from zero

Suppose $\sqrt n(T_n-\theta)\Rightarrow Z\sim N(0,\tau^2)$ with $\tau>0$. If $\theta\ne0$, the derivative of $g(x)=x^2$ is $2\theta$, and the delta method gives
$\sqrt n(T_n^2-\theta^2)\Rightarrow N(0,4\theta^2\tau^2)$.
The same conclusion follows by factoring $(T_n-\theta)(T_n+\theta)$ and using $T_n\to_P\theta$.

At $\theta=0$ the derivative vanishes. The square-root-scaled statistic satisfies $\sqrt nT_n^2=(\sqrt nT_n)^2/\sqrt n\to_P0$, whereas the scale $n$ gives $nT_n^2\Rightarrow Z^2=\tau^2\chi_1^2$. This limiting law is nonnegative and not a centered normal law. The Gaussian chapter identifies the square of a standard normal as chi-square with one degree of freedom.

Using the nonzero-parameter variance formula at zero would report a zero asymptotic variance without revealing the slower scale and different shape. A change in derivative changes which Taylor term carries the uncertainty; it does not make finite-sample uncertainty disappear.

## 13. Exercises with complete solutions

### 1. Standardize an iid sum

**Exercise 15.1**

<a id="central-limit-theorems-ex-1"></a>

Let iid $X_{k}$ have mean $4$ and variance $9$. Write the standardized sum to which the iid CLT applies.

<details>
<summary>Hint 1</summary>

Center the sum by its mean and divide by its standard deviation.

</details>

<details>
<summary>Hint 2</summary>

The sum mean is $4n$ and its standard deviation is $3\sqrt n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum has mean $4n$ and standard deviation $3\sqrt{n}$. Therefore

$Z_{n}=(S_{n}-4n)/(3\sqrt{n})\Rightarrow \mathcal{N}(0,1)$.

Equivalently, $\sqrt{n}(\bar{X}_{n}-4)/3\Rightarrow \mathcal{N}(0,1)$.

</details>

### 2. Verify the characteristic expansion

**Exercise 15.2**

<a id="central-limit-theorems-ex-2"></a>

If $\mathbb{E}[Y]=0$ and $\mathbb{E}[Y^{2}]=1$, what are the constant, linear, and quadratic terms of $\mathbb{E}[e^{itY}]$ near zero?

<details>
<summary>Hint 1</summary>

Use the second-order expansion of the complex exponential.

</details>

<details>
<summary>Hint 2</summary>

The first moment kills the linear coefficient, and the unit second moment gives the quadratic coefficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** Taylor expansion with dominated remainder gives

$\mathbb{E}[e^{itY}]=\mathbb{E}[1+itY-(t^{2}Y^{2})/2]+o(t^{2})$

$=1+it\mathbb{E}[Y]-(t^{2}/2)\mathbb{E}[Y^{2}]+o(t^{2})$

$=1-t^{2}/2+o(t^{2})$.

</details>

### 3. Sum of normal variables

**Exercise 15.3**

<a id="central-limit-theorems-ex-3"></a>

If $X_{k}$ are iid $\mathcal{N}(\mu ,\sigma^{2})$, show the standardized sum is exactly standard normal for every $n$.

<details>
<summary>Hint 1</summary>

Independent normal sums are exactly normal.

</details>

<details>
<summary>Hint 2</summary>

Apply the affine transformation to their exact mean $n\mu$ and variance $n\sigma^2$, assuming $\sigma>0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independent normal sums satisfy $S_{n}\sim \mathcal{N}(n\mu ,n\sigma^{2})$. Subtracting $n\mu$ and dividing by $\sigma \sqrt{n}$ produces $\mathcal{N}(0,1)$ exactly. No limiting approximation is needed.

</details>

### 4. de Moivre–Laplace standardization

**Exercise 15.4**

<a id="central-limit-theorems-ex-4"></a>

For $B_{n}\sim \operatorname{Binomial}(n,0.3)$, write the standardized count and its limiting law.

<details>
<summary>Hint 1</summary>

A binomial count has mean $np$ and variance $np(1-p)$.

</details>

<details>
<summary>Hint 2</summary>

Insert $p=0.3$ before taking the positive square root.

</details>

<details>
<summary>Solution</summary>

**Solution.** The mean is $0.3n$ and variance is $0.21n$. Hence

$(B_{n}-0.3n)/\sqrt{0.21n}\Rightarrow \mathcal{N}(0,1)$.

</details>

### 5. Apply a continuity correction

**Exercise 15.5**

<a id="central-limit-theorems-ex-5"></a>

Write the continuity-corrected normal approximation to $\mathbb{P}(40\le B\le 55)$ for $B\sim \operatorname{Binomial}(100,1/2)$.

<details>
<summary>Hint 1</summary>

The integer interval corresponds to cells from $39.5$ to $55.5$.

</details>

<details>
<summary>Hint 2</summary>

Standardize those endpoints using normal mean fifty and standard deviation five.

</details>

<details>
<summary>Solution</summary>

**Solution.** The normal mean is $50$ and standard deviation is $5$. The corrected interval is $[39.5,55.5]$, so

$\mathbb{P}(40\le B\le 55)\approx \Phi ((55.5-50)/5)-\Phi ((39.5-50)/5)$

$=\Phi (1.1)-\Phi (-2.1)$.

</details>

### 6. Why correction uses half units

**Exercise 15.6**

<a id="central-limit-theorems-ex-6"></a>

Explain why the event $B\le b$ is paired with a normal cutoff $b+1/2$.

<details>
<summary>Hint 1</summary>

Represent each integer's probability mass by a cell centered at that integer.

</details>

<details>
<summary>Hint 2</summary>

The cell for $b$ ends at $b+1/2$, so including it suggests that continuous cutoff.

</details>

<details>
<summary>Solution</summary>

**Solution.** A continuous proxy represents integer mass at $b$ by a unit-width cell centered at $b$, extending from $b-1/2$ to $b+1/2$. Including the full mass at $b$ therefore corresponds geometrically to integrating the proxy through the upper cell boundary $b+1/2$.

</details>

### 7. A Poisson large-mean limit

**Exercise 15.7**

<a id="central-limit-theorems-ex-7"></a>

Let $N_{n}\sim \operatorname{Poisson}(n\lambda )$ for fixed $\lambda >0$. Show $[N_{n}-n\lambda ]/\sqrt{n\lambda }\Rightarrow \mathcal{N}(0,1)$ using infinite divisibility.

<details>
<summary>Hint 1</summary>

Express a Poisson variable of rate $n\lambda$ as an independent sum of $n$ equal-rate variables.

</details>

<details>
<summary>Hint 2</summary>

Each summand has finite mean and variance $\lambda$, so the iid CLT supplies the normalization.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $N_{n}$ in distribution as a sum of $n$ independent $\operatorname{Poisson}(\lambda )$ variables. Each summand has mean and variance $\lambda$. The iid CLT then gives the stated centered and scaled convergence.

</details>

### 8. Verify iid Lindeberg

**Exercise 15.8**

<a id="central-limit-theorems-ex-8"></a>

Let centered iid $Y_{k}$ have variance $\sigma^{2}<\infty$. Show the associated triangular array satisfies Lindeberg.

<details>
<summary>Hint 1</summary>

Compute the total row variance for the iid row.

</details>

<details>
<summary>Hint 2</summary>

The Lindeberg expression reduces to a second-moment tail of one variable at a threshold growing like $\sqrt n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $s_{n}=\sigma \sqrt{n}$, and the Lindeberg expression is

$(1/\sigma^{2})\mathbb{E}[Y_{1}^{2} \mathbf{1}_{\lvert Y_{1}\rvert >\varepsilon \sigma \sqrt{n}}]$.

The indicator tends to zero, while the integrand is dominated by the integrable variable $Y_{1}^{2}$. Dominated convergence makes the expression tend to zero.

</details>

### 9. Detect a dominant summand

**Exercise 15.9**

<a id="central-limit-theorems-ex-9"></a>

Each row consists of one Rademacher variable taking $\pm 1$. Check Lindeberg for $\varepsilon =1/2$.

<details>
<summary>Hint 1</summary>

The sole summand carries the whole row variance.

</details>

<details>
<summary>Hint 2</summary>

At tolerance one half, its magnitude always exceeds the Lindeberg cutoff.

</details>

<details>
<summary>Solution</summary>

**Solution.** Total variance is $s_{n}^{2}=1$. Since $\lvert X_{n,1}\rvert =1>\varepsilon s_{n}=1/2$, the Lindeberg numerator is $\mathbb{E}[X_{n,1}^{2}]=1$. Dividing by $s_{n}^{2}$ gives one for every $n$, not zero. The row sums remain Rademacher and are not asymptotically normal.

</details>

### 10. Lyapunov implies Lindeberg

**Exercise 15.10**

<a id="central-limit-theorems-ex-10"></a>

Prove the key inequality when the Lyapunov condition holds with exponent $2+\delta$.

<details>
<summary>Hint 1</summary>

On the tail event, $|X|^\delta>(\varepsilon s_n)^\delta$.

</details>

<details>
<summary>Hint 2</summary>

Bound each truncated square by $|X|^{2+\delta}/(\varepsilon s_n)^\delta$ and sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $\{\lvert X_{n,k}\rvert >\varepsilon s_{n}\}$,

$\lvert X_{n,k}\rvert^\delta >(\varepsilon s_{n})^\delta$,

so

$X_{n,k}^{2}\le \lvert X_{n,k}\rvert^{2+\delta }/(\varepsilon s_{n})^\delta$.

After expectation, summation, and division by $s_{n}^{2}$, the Lindeberg expression is at most $\varepsilon^{-\delta }$ times the Lyapunov ratio, which tends to zero.

</details>

### 11. Berry–Esseen for fair Bernoulli trials

**Exercise 15.11**

<a id="central-limit-theorems-ex-11"></a>

For $X\sim \operatorname{Bernoulli}(1/2)$, calculate $\rho /\sigma^{3}$ and state the chapter's Berry–Esseen bound.

<details>
<summary>Hint 1</summary>

For a fair Bernoulli variable the absolute centered value is always one half.

</details>

<details>
<summary>Hint 2</summary>

Compute both the third absolute central moment and the cube of the standard deviation before taking their ratio.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $\sigma =1/2$. The centered variable has absolute value $1/2$ always, so $\rho =\mathbb{E}\lvert X-1/2\rvert^{3}=1/8$. Also $\sigma^{3}=1/8$, hence the ratio is one. With the convention $C=1$,

$\sup_{x}\lvert \mathbb{P}(Z_{n}\le x)-\Phi (x)\rvert \le 1/\sqrt{n}$.

</details>

### 12. A conservative Berry–Esseen sample size

**Exercise 15.12**

<a id="central-limit-theorems-ex-12"></a>

Under the preceding fair-Bernoulli bound, how large must $n$ be to make the guaranteed CDF error at most $0.02$?

<details>
<summary>Hint 1</summary>

Use the preceding bound $1/\sqrt n$.

</details>

<details>
<summary>Hint 2</summary>

Solve $1/\sqrt n\le0.02$ and square the resulting lower bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require $1/\sqrt{n}\le 0.02$, so $\sqrt{n}\ge 50$ and $n\ge 2500$. The bound is conservative; it is a guarantee under the chosen constant, not an exact error prediction.

</details>

### 13. Third moment is sufficient, not necessary

**Exercise 15.13**

<a id="central-limit-theorems-ex-13"></a>

Suppose iid variables have finite positive variance but infinite third absolute central moment. Which results in this chapter remain available?

<details>
<summary>Hint 1</summary>

Separate the hypotheses of the qualitative CLT from those of Berry–Esseen.

</details>

<details>
<summary>Hint 2</summary>

Finite variance supports the former; the displayed quantitative bound needs a finite third absolute central moment.

</details>

<details>
<summary>Solution</summary>

**Solution.** The iid CLT still applies because it requires only finite variance. The displayed Berry–Esseen bound does not apply because $\rho =\infty$. Failure of that quantitative theorem does not imply failure of asymptotic normality.

</details>

### 14. Delta method for an exponential map

**Exercise 15.14**

<a id="central-limit-theorems-ex-14"></a>

If $\sqrt{n}(T_{n}-\theta )\Rightarrow \mathcal{N}(0,\tau^{2})$, find the first-order limit of $\sqrt{n}(e^{T_{n}}-e^\theta )$.

<details>
<summary>Hint 1</summary>

Differentiate the exponential map at $\theta$.

</details>

<details>
<summary>Hint 2</summary>

The delta method multiplies the limiting variable by $e^\theta$, hence its variance by $e^{2\theta}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $g(x)=e^{x}$, $g'(\theta )=e^\theta$. The delta method gives

$\sqrt{n}(e^{T_{n}}-e^\theta )\Rightarrow \mathcal{N}(0,e^{2\theta }\tau^{2})$.

</details>

### 15. Delta method for a logarithm

**Exercise 15.15**

<a id="central-limit-theorems-ex-15"></a>

Assume $\theta >0$ and $\sqrt{n}(T_{n}-\theta )\Rightarrow \mathcal{N}(0,\tau^{2})$, with $T_{n}>0$ with probability tending to one. Define $G_n=\log T_n$ when $T_n>0$ and $G_n=0$ otherwise. Find the log-scale limit.

<details>
<summary>Hint 1</summary>

Differentiate the logarithm at the strictly positive limiting value.

</details>

<details>
<summary>Hint 2</summary>

Use derivative $1/\theta$; the arbitrary extension is used only on an event whose probability tends to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The derivative of $\log x$ at $\theta$ is $1/\theta$. Therefore

$\sqrt{n}(G_{n}-\log \theta )\Rightarrow \mathcal{N}(0,\tau^{2}/\theta^{2})$.

On the event $T_n>0$, this is the ordinary delta-method statistic. Its arbitrary extension differs only on an event whose probability tends to zero, so the same distributional limit holds.

</details>

### 16. A zero-derivative boundary

**Exercise 15.16**

<a id="central-limit-theorems-ex-16"></a>

Suppose $\sqrt{n}T_{n}\Rightarrow Z\sim \mathcal{N}(0,1)$. Find the limits of $\sqrt{n}T_{n}^{2}$ and $nT_{n}^{2}$.

<details>
<summary>Hint 1</summary>

Write both expressions in terms of $\sqrt nT_n$.

</details>

<details>
<summary>Hint 2</summary>

Its square has a nondegenerate distributional limit, but multiplying that square by $n^{-1/2}$ makes it vanish in probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $T_{n}=O_{P}(n^{-1/2})$, $\sqrt{n}T_{n}^{2}=O_{P}(n^{-1/2})\to_{P}0$. On the second scale,

$nT_{n}^{2}=(\sqrt{n}T_{n})^{2}\Rightarrow Z^{2}$

by the continuous mapping theorem. The first derivative of $x^{2}$ at zero is zero, so first-order delta scaling degenerates.

</details>

### 17. A discontinuous transformation

**Exercise 15.17**

<a id="central-limit-theorems-ex-17"></a>

Let $T_{n}=Z/\sqrt{n}$ for one standard normal $Z$, and define $g(x)=\mathbf{1}_{x>0}$ with $g(0)=0$. Does $g(T_{n})\to_{P} g(0)$?

<details>
<summary>Hint 1</summary>

The sign of $T_n$ equals the sign of $Z$ for every $n$.

</details>

<details>
<summary>Hint 2</summary>

The transformed variable therefore stays Bernoulli with probability one half of being one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Although $T_{n}\to 0$ almost surely, $g(T_{n})=\mathbf{1}_{Z>0}$ for every $n$. Thus $\mathbb{P}(\lvert g(T_{n})-0\rvert >1/2)=1/2$, not zero. The map is discontinuous at the limiting point.

</details>

### 18. Cauchy failure

**Exercise 15.18**

<a id="central-limit-theorems-ex-18"></a>

For iid standard Cauchy $X_{k}$, show $S_{n}/\sqrt{n}$ cannot converge to a fixed standard normal law.

<details>
<summary>Hint 1</summary>

Cauchy stability gives $S_n$ the law of $nX_1$.

</details>

<details>
<summary>Hint 2</summary>

After square-root normalization, the mass in every fixed bounded interval tends to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Cauchy stability gives $S_{n} \sim nX_{1}$, so

$S_{n}/\sqrt{n} \sim \sqrt{n}X_{1}$.

For any fixed $M>0$, $\mathbb{P}(\lvert \sqrt{n}X_{1}\rvert \le M)=\mathbb{P}(\lvert X_{1}\rvert \le M/\sqrt{n})\to 0$. The sequence is not even tight, so it cannot converge weakly to a standard normal variable.

</details>

### 19. Perfect-dependence failure

**Exercise 15.19**

<a id="central-limit-theorems-ex-19"></a>

Let $X_{k}=Y$ for all $k$, where $Y$ has mean zero and variance one. What is $S_{n}/\sqrt{n}$?

<details>
<summary>Hint 1</summary>

Compute the sum under the declared common-variable coupling.

</details>

<details>
<summary>Hint 2</summary>

It is $nY$, so the proposed normalized statistic is $\sqrt nY$ rather than an independent-sum normalization.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $S_{n}=nY$, the normalized sum is $\sqrt{n}Y$. Its variance is $n$, not one, and it generally spreads rather than converges to a fixed normal law. The iid marginal distribution alone is insufficient; independence has failed.

</details>

### 20. Studentization by Slutsky

**Exercise 15.20**

<a id="central-limit-theorems-ex-20"></a>

Suppose $\sqrt{n}(\bar{X}_{n}-\mu )/\sigma \Rightarrow \mathcal{N}(0,1)$ and estimators $\hat{\sigma}_{n}\to_{P}\sigma >0$. Define the studentized statistic to be zero when $\hat\sigma_n=0$. Prove it has the same limit.

<details>
<summary>Hint 1</summary>

Factor the studentized statistic into the known-scale statistic and a scale ratio.

</details>

<details>
<summary>Hint 2</summary>

The scale ratio converges in probability to one; zero-denominator events have vanishing probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Rewrite

$\sqrt{n}(\bar{X}_{n}-\mu )/\hat{\sigma}_{n}$

$=[\sqrt{n}(\bar{X}_{n}-\mu )/\sigma ][\sigma /\hat{\sigma}_{n}]$

on $\{\hat\sigma_n\ne0\}$. The first factor converges in distribution to standard normal, and the second converges in probability to one by continuity of reciprocal at positive $\sigma$. Moreover $\mathbb{P}(\hat\sigma_n=0)\to0$. The zero extension therefore has the same limit, and Slutsky's theorem gives a standard normal product limit.

</details>


## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](references-and-attribution-guide.md) records the wider source map.


## 14. Summary and forward route

The iid finite-variance CLT follows from a second-order characteristic-function expansion and Lévy's continuity theorem. Binomial normal approximation is its Bernoulli specialization, with continuity correction addressing lattice cells. Berry–Esseen adds an explicit $n^{-1/2}$ CDF-error bound under a third absolute moment. Lindeberg's condition extends Gaussian limits to independent triangular arrays by ruling out variance-dominating terms, while the delta method transports a known limit through a differentiable map.

Heavy tails, dependence, zero derivatives, and extreme-tail questions require different scales or theorems. The next chapter, [Exponential Moments and Concentration Inequalities](exponential-concentration.md), develops nonasymptotic deviation bounds that complement central approximations.
