var e=`---
parent_id: book-probability-models-proofs
chapter_id: monte-carlo-and-randomized-estimation
title: "Monte Carlo and Randomized Estimation"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Monte Carlo and Randomized Estimation

Monte Carlo replaces an integral or sum by a random estimator. Its value is not that randomness guarantees accuracy, but that probability theory makes error auditable. This chapter develops unbiased estimation, confidence bounds, variance reduction, self-normalization, Markov-chain sampling boundaries, and reproducible stopping rules.

## 1. The sample mean contract

For iid $Y_{1},...,Y_{n}$ with mean $\\mu$ and variance $\\sigma^{2}<\\infty$,

$\\hat{\\mu}_{n}=(1/n)\\sum_{i}Y_{i}$, $\\mathbb{E}[\\hat{\\mu}_{n}]=\\mu$, $\\operatorname{Var}(\\hat{\\mu}_{n})=\\sigma^{2}/n$.

Chebyshev gives $\\mathbb{P}(\\lvert \\hat{\\mu}_{n}-\\mu \\rvert \\ge \\varepsilon )\\le \\sigma^{2}/(n\\varepsilon^{2})$. If $Y\\in [a,b]$, Hoeffding gives

$\\mathbb{P}(\\lvert \\hat{\\mu}_{n}-\\mu \\rvert \\ge \\varepsilon )\\le 2\\exp[-2n\\varepsilon^{2}/(b-a)^{2}]$.

The CLT supplies approximate intervals $\\hat{\\mu}_{n}\\pm z_{1-\\alpha /2}s/\\sqrt{n}$, not finite-sample guarantees. Reporting which type of guarantee is used is part of the result.

## 2. Estimating integrals and probabilities

If $U\\sim q$ and $g$ is integrable, $\\mathbb{E}_{q}[g(U)]$ is estimated by the average. For $I=\\int_{D} f(x)dx$ and uniform $U$ on finite-volume $D$, use $Y=\\lvert D\\rvert f(U)$. Indicator averages estimate probabilities and have variance $p(1-p)/n$.

Randomized algorithms also need computational cost. Root-mean-square error typically decays as $n^{-1/2}$ regardless of dimension, but the variance of the chosen integrand may itself explode with dimension.

## 3. Importance sampling

To estimate $I=\\int f(x)p(x)dx$ using proposal density $q$, require $q(x)>0$ wherever $f(x)p(x)\\ne 0$, and set

$Y=f(X)p(X)/q(X)$, $X\\sim q$.

Then $\\mathbb{E}_{q}[Y]=I$. Finite variance additionally requires $\\int f^{2}p^{2}/q<\\infty$. A proposal with thin tails can make an unbiased estimator have infinite variance. When $f\\ge0$ and $0<I<\\infty$, the zero-variance ideal is $q^*(x)=f(x)p(x)/I$, circular because it uses the unknown $I$ but informative for design.

Self-normalized importance sampling uses $\\sum w_{i}f(X_{i})/\\sum w_{i}$ when the target is known only up to a constant. It is generally biased at finite $n$; consistency requires denominator control.

## 4. Variance reduction

For square-integrable $Y$ and $C$, with known mean $m=\\mathbb{E}[C]$ and $\\operatorname{Var}(C)>0$, use

$Y_{b}=Y-b(C-m)$.

Its variance is $\\operatorname{Var}(Y)-2b\\operatorname{Cov}(Y,C)+b^{2}\\operatorname{Var}(C)$, minimized at $b^*=\\operatorname{Cov}(Y,C)/\\operatorname{Var}(C)$. If $C$ is constant, the adjustment is identically zero and this quotient is undefined. Antithetic sampling couples inputs negatively; stratification conditions on declared regions. Neither method automatically helps: the covariance structure must be checked.

Rao–Blackwellization replaces $Y$ by $\\mathbb{E}[Y \\mid G]$, preserving the mean and weakly reducing variance by total variance.

## 5. Dependent samples and effective error

For a stationary Markov chain and centered $g(X_{t})$ with finite positive variance $\\sigma_g^2$, let $\\rho_k=\\operatorname{Corr}(g(X_0),g(X_k))$. Then

$\\operatorname{Var}(\\hat{\\mu}_{n})=\\sigma_{g}^{2}/n [1+2\\sum_{k=1}^{n-1}(1-k/n)\\rho_{k}]$.

When autocorrelations are summable, the bracket approaches integrated autocorrelation time $\\tau_{int}$. If $\\tau_{int}>0$, the quantity $n/\\tau_{int}$ is a useful effective-sample-size diagnostic, not an exact iid replacement. At $\\tau_{int}=0$ the quotient is undefined (sometimes described formally as infinite), and this cancellation does not justify treating the draws as iid. Burn-in cannot repair a wrong stationary distribution, nonergodicity, or unrecorded adaptation.

## 6. Sequential stopping and reproducibility

Stopping when an ordinary fixed-$n$ interval first excludes a value invalidates its nominal coverage. Valid sequential procedures need confidence sequences or an explicit error-spending design. A reproducible Monte Carlo report records the target, estimator, random generator and seed policy, sample count, batching, numerical precision, diagnostics, stopping rule, and uncertainty method.

## Developed arguments and worked estimators

### Proposition 1. What the iid variance calculation actually uses

Suppose $Y_1,\\ldots,Y_n$ are independent, have a common finite mean $\\mu$, and have the same finite variance $\\sigma^2$. Expanding the square of $\\sum_i(Y_i-\\mu)$ gives a sum of diagonal terms and cross terms. For $i\\ne j$, independence and integrability give $\\mathbb E[(Y_i-\\mu)(Y_j-\\mu)]=0$. Thus the squared error of the mean has expectation $\\sigma^2/n$. Independence can be weakened to pairwise uncorrelatedness for this calculation, but it cannot simply be omitted. Identical marginal distributions alone say nothing about cross terms.

Chebyshev follows by applying Markov's inequality to the nonnegative random variable $(\\hat\\mu_n-\\mu)^2$. Consequently the guarantee is valid for every declared positive integer $n$, provided the displayed variance is genuinely known or bounded. Substituting an estimated variance into the same formula does not preserve this finite-sample conclusion automatically. The usual estimated-standard-error interval has a different justification, typically a studentized limit theorem.

An error budget must also specify whether its error is absolute or relative. For an event of probability $p>0$, an indicator average has relative mean-square error $(1-p)/(np)$. Increasing $n$ while leaving $np$ tiny does not create a useful relative estimate. If $p=0$, relative error is undefined, although absolute error is perfectly meaningful. An experiment reporting no observed rare events must not interpret that observation as proof that the event is impossible.

### Worked example 1. An integral, an importance proposal, and a control

Consider $I=\\int_0^1x^2\\,dx=1/3$. The direct estimator averages $Y=U^2$ for independent uniform inputs. Since $\\mathbb E U^4=1/5$, its single-draw variance is $1/5-1/9=4/45$. For $n$ independent draws the variance is $4/(45n)$.

Now sample $X$ with density $q(x)=2x$ on $(0,1)$. Its importance contribution for Lebesgue integration is $Y_q=X^2/q(X)=X/2$. The missing endpoint $x=0$ has Lebesgue measure zero and contributes nothing to the integral, so the support requirement holds almost everywhere. Direct integration gives $\\mathbb E_qY_q=\\int_0^1x^2\\,dx=1/3$ and $\\mathbb E_qY_q^2=\\int_0^1(x^2/4)(2x)\\,dx=1/8$. Hence $\\operatorname{Var}_q(Y_q)=1/8-1/9=1/72$. The variance reduction factor relative to uniform sampling is $(4/45)/(1/72)=32/5$ at equal sample count. Equal running time would require a separate cost comparison.

Alternatively keep uniform sampling and take the control $C=U$, whose known mean is $1/2$. Its variance is $1/12$, while $\\operatorname{Cov}(U^2,U)=1/4-(1/3)(1/2)=1/12$. Therefore $b^*=1$ and the adjusted contribution is $U^2-U+1/2$. Its variance equals $4/45-1/12=1/180$, sixteen times smaller than the original. Its expectation is still $1/3$. This comparison computes all three variances under their actual sampling laws; resemblance between formulas would not establish a gain.

### Proposition 2. Importance sampling is a change of measure

Let $p,q$ be densities with respect to the same measure $\\nu$. Assume $\\int |f|p\\,d\\nu<\\infty$ and that $fp=0$ almost everywhere on $\\{q=0\\}$. Define the weighted contribution as $fp/q$ on $\\{q>0\\}$ and zero elsewhere. Then integration against $q\\,d\\nu$ cancels the denominator and gives $\\int fp\\,d\\nu$. The almost-everywhere support condition is exactly what makes the omitted region harmless. If the condition fails, cancellation computes only the accessible part of the target.

The second moment is $\\int_{\\{q>0\\}}f^2p^2/q\\,d\\nu$. This integral may diverge even when the first absolute moment is finite. For example, to integrate $f(x)=1$ on $(0,1)$ using $q(x)=2x$, the contribution is $1/(2X)$. Its expectation is one, but its second moment is $\\int_0^1(1/(4x^2))2x\\,dx=\\infty$. The sample mean remains unbiased and an integrable iid law of large numbers applies, but the finite-variance error calculation and ordinary finite-variance CLT do not follow. Large weights are mathematical evidence of a proposal problem, not a numerical detail to hide by silently clipping the observations.

For self-normalization, let $(W_i,F_i)$ be iid, $W_i\\ge0$, $0<\\mathbb EW_i<\\infty$, and $\\mathbb E|W_iF_i|<\\infty$. The integrable iid strong law gives
$\\frac1n\\sum W_i\\to a=\\mathbb EW_1>0$ and
$\\frac1n\\sum W_iF_i\\to b=\\mathbb E(W_1F_1)$ almost surely.
On their common probability-one event, the denominator average eventually exceeds $a/2$ and elementary division yields $\\sum W_iF_i/\\sum W_i\\to b/a$. One may define the ratio arbitrarily when all weights vanish; almost surely this problem eventually disappears. The proof establishes consistency, not unbiasedness at a fixed sample size. Identifying $b/a$ with the intended target still requires the correct weight model.

### Proposition 3. Conditional averaging and antithetic averaging

For $Y\\in L^2$ and a sigma-algebra $\\mathcal G$, write $M=\\mathbb E(Y\\mid\\mathcal G)$ and $R=Y-M$. Conditional expectation gives $\\mathbb E(R\\mid\\mathcal G)=0$, so $\\mathbb E(MR)=0$ by the pull-out property, justified by Cauchy–Schwarz. Expanding $\\mathbb E(Y-\\mathbb EY)^2$ therefore proves
$\\operatorname{Var}(Y)=\\operatorname{Var}(M)+\\mathbb E R^2$.
Equality occurs precisely when $Y=M$ almost surely. Computing the conditional expectation exactly can remove randomness without changing the mean. Approximating it by a noisy inner simulation requires a new variance analysis.

Here is a precise antithetic statement. Let $U$ be uniform on $(0,1)$ and let increasing $f$ satisfy $\\int_0^1f(u)^2\\,du<\\infty$. Put $g(u)=f(1-u)$, a decreasing function, and let $V$ be an independent uniform variable. The product
$(f(U)-f(V))(g(U)-g(V))$ is nonpositive for every pair of inputs where values are defined. Its expectation is $2\\operatorname{Cov}(f(U),g(U))$, so that covariance is nonpositive. Hence the average of the pair has variance at most half the variance of one evaluation. The relevant equal-cost comparison is an average of two independent evaluations, which also has variance half that variance. Antithetic averaging therefore weakly improves that equal-cost estimator in this monotone setting; arbitrary nonmonotone integrands have no such guarantee.

### Worked example 2. Conditioning a two-stage experiment

Draw $U$ uniform on $(0,1)$ and, conditionally on $U=u$, draw $B$ Bernoulli with success probability $u^2$. Then $B$ is a Bernoulli variable of unconditional mean $\\int_0^1u^2\\,du=1/3$. Direct averaging of independent copies of $B$ has single-replication variance $(1/3)(2/3)=2/9$.

Conditional averaging replaces $B$ by $\\mathbb E(B\\mid U)=U^2$, whose variance was computed as $4/45$. The reduction is $2/9-4/45=2/15$, exactly $\\mathbb E[\\operatorname{Var}(B\\mid U)]=\\mathbb E(U^2-U^4)=1/3-1/5$. This also explains the gain: the extra Bernoulli draw contributes conditional noise but no information about the mean once $U$ is known. The calculation assumes fresh independent replications of the whole experiment. Reusing one $U$ for every replication would change the estimator's dependence structure and invalidate division of the variance by $n$.

### Proposition 4. The stationary covariance formula

For a stationary square-integrable sequence $Y_t$ with covariance $\\gamma_k=\\operatorname{Cov}(Y_0,Y_k)$, expand the variance of $\\sum_{t=1}^nY_t$. There are $n$ diagonal terms, and exactly $n-k$ pairs at separation $k$ in each direction. Thus
$\\operatorname{Var}(\\bar Y_n)=n^{-2}[n\\gamma_0+2\\sum_{k=1}^{n-1}(n-k)\\gamma_k]$.
Dividing by $\\gamma_0>0$ gives the earlier autocorrelation formula. This identity uses stationarity and second moments, not the Markov property or a CLT.

If $\\sum_{k\\ge1}|\\rho_k|<\\infty$, dominated convergence for the counting-measure series gives the limit of the bracket as $1+2\\sum_{k\\ge1}\\rho_k$. Nonnegativity of every finite-sample variance implies this limit is nonnegative, but it can be zero. Summability alone does not establish a Gaussian limit theorem. A stationary process may require additional mixing or Markov-chain conditions before normal intervals become justified. An empirical autocorrelation plot estimates part of this structure; it does not prove those assumptions.

### Worked example 3. Persistent binary observations

Let a stationary two-state chain take values $-1,1$, have equal stationary probabilities, and remain at its current state with probability $0.9$. Its conditional mean is $\\mathbb E(Y_{t+1}\\mid Y_t)=0.8Y_t$. Iterating conditional expectations gives $\\mathbb E(Y_{t+k}\\mid Y_t)=0.8^kY_t$ and therefore $\\rho_k=0.8^k$. Its variance is one and its mean is zero.

For exactly $n=2$ observations, the variance of their mean is $(1+0.8)/2=0.9$, whereas two independent signs would have mean variance $1/2$. For large $n$, the scaled variance tends to $1+2(0.8)/(1-0.8)=9$. Thus the asymptotic effective-size diagnostic is $n/9$. At $n=10000$ this is approximately $1111$, not an assertion that any particular collection of 1111 independent draws has been produced. Starting the chain deterministically would break stationarity and add a transient mean term, so the displayed finite-sample covariance identity could not simply be quoted unchanged.

The distinction between replication and time series must survive into the final report. A seed makes a pseudorandom calculation reproducible, but it does not make dependent outputs independent. Saving the declared stopping rule matters for the same reason: the probability law being analysed includes how the sample count is chosen. A fixed-budget bound remains valid when its budget was fixed before examining the simulation; an adaptive budget needs its own argument.

## An independently random simulation budget

A computation budget can itself be random without introducing optional-stopping bias, provided it is independent of the simulated values. Let $N\\ge1$ be integer-valued and independent of an entire iid sequence with mean $\\mu$ and finite variance $\\sigma^2$. Conditional on $N=n$, the sample average is the ordinary fixed-size average. Iterated expectation therefore gives unconditional mean $\\mu$, while total variance gives $\\sigma^2E(1/N)$.

The independence hypothesis is the decisive one. A budget determined by an unrelated machine-allocation lottery fits it; stopping when the running estimate first looks favourable does not. Merely calling a stopping rule a budget does not change its dependence on observations.

If the expected budget is a fixed finite number, convexity of the reciprocal shows that randomising the budget cannot improve this variance relative to the reciprocal of that expected budget. A constant integer budget attains equality when that mean is an integer; nonconstant budgets pay an additional variance penalty. This is an equal-expected-sample-count comparison, not an equal-wall-clock guarantee, because the cost of one contribution can itself depend on the sampled value.

The argument supplies a useful estimator contract: state what randomises the count, what remains independent, and which resource is being held fixed before comparing reported accuracy.

## Coupling makes a simulation comparison more precise

Suppose two algorithms estimate expectations under two probability laws, and the scientific target is their difference. Draw paired outputs U and V with the correct marginal laws, independently between pairs, but allow dependence within each pair. The average of U minus V remains unbiased for the difference by linearity of expectation. Its variance per pair is the variance of U plus the variance of V minus twice their covariance. Thus a positive covariance can reduce the simulation variance without changing either marginal target.

For a concrete construction, let both outputs be increasing functions of the same uniform variable. For an independent copy of that uniform variable, the product of the two function differences is nonnegative. Expanding its expectation gives twice the covariance, which is therefore nonnegative when second moments exist. This proves the usual common-random-numbers benefit for these monotone scalar outputs. It also identifies the boundary: arbitrary shared randomness does not guarantee a positive covariance, and correlation between successive pairs would invalidate the independent-average variance formula.

## 7. Exercises with complete solutions

### 1. Mean and variance

**Exercise 17.1**

<a id="monte-carlo-and-randomized-estimation-ex-1"></a>

For iid variance $9$, find the sample-mean variance at $n=100$.

<details>
<summary>Hint 1</summary>

Write the mean as a sum with coefficient $1/100$.

</details>

<details>
<summary>Hint 2</summary>

Independent cross-covariances vanish, leaving $100$ diagonal variances divided by $100^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $9/100=0.09$.

</details>

### 2. Chebyshev budget

**Exercise 17.2**

<a id="monte-carlo-and-randomized-estimation-ex-2"></a>

How large must $n$ be for Chebyshev error at most $0.05$ when $\\sigma^{2}=4$, $\\varepsilon =0.2$?

<details>
<summary>Hint 1</summary>

Apply Chebyshev to the sample mean rather than to one observation.

</details>

<details>
<summary>Hint 2</summary>

Solve $4/(n\\cdot0.04)\\le0.05$ and round up if necessary.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require $4/[n(0.2)^{2}]\\le 0.05$, so $n\\ge 2000$.

</details>

### 3. Hoeffding budget

**Exercise 17.3**

<a id="monte-carlo-and-randomized-estimation-ex-3"></a>

For Bernoulli averages, give $n$ ensuring error $\\varepsilon$ with failure at most $\\delta$.

<details>
<summary>Hint 1</summary>

A Bernoulli variable has range length one.

</details>

<details>
<summary>Hint 2</summary>

Take logarithms of $2e^{-2n\\varepsilon^2}\\le\\delta$, remembering that $\\log(2/\\delta)>0$ for $0<\\delta<1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Solve $2e^{-2n\\varepsilon^{2}}\\le \\delta$: $n\\ge \\log(2/\\delta )/(2\\varepsilon^{2})$.

</details>

### 4. Area estimator

**Exercise 17.4**

<a id="monte-carlo-and-randomized-estimation-ex-4"></a>

For $I=\\int_{0}^{1}x^{2}dx$, give an unbiased estimator.

<details>
<summary>Hint 1</summary>

The expectation of a function of a uniform variable is its integral on $[0,1]$.

</details>

<details>
<summary>Hint 2</summary>

Choose the contribution $Y=U^2$, then average independent copies to preserve its mean.

</details>

<details>
<summary>Solution</summary>

**Solution.** Draw uniform $U_{i}$ and average $U_{i}^{2}$; its expectation is the integral $1/3$.

</details>

### 5. Indicator variance

**Exercise 17.5**

<a id="monte-carlo-and-randomized-estimation-ex-5"></a>

Find variance of an estimated event probability.

<details>
<summary>Hint 1</summary>

Represent the event by an indicator $I$ with $I^2=I$.

</details>

<details>
<summary>Hint 2</summary>

Compute $\\operatorname{Var}(I)=p-p^2$ and divide by $n$ for independent replication.

</details>

<details>
<summary>Solution</summary>

**Solution.** Bernoulli variance is $p(1-p)$, so the average variance is $p(1-p)/n$.

</details>

### 6. Importance unbiasedness

**Exercise 17.6**

<a id="monte-carlo-and-randomized-estimation-ex-6"></a>

Prove the importance estimator is unbiased.

<details>
<summary>Hint 1</summary>

Integrate the weighted contribution under the proposal law.

</details>

<details>
<summary>Hint 2</summary>

The factor $q$ cancels on $\\{q>0\\}$; use the almost-everywhere support condition to recover the omitted region.

</details>

<details>
<summary>Solution</summary>

**Solution.** Integrate under $q$: $\\mathbb{E}_{q}[fp/q]=\\int (fp/q)q=\\int fp=I$, using the support condition.

</details>

### 7. Support failure

**Exercise 17.7**

<a id="monte-carlo-and-randomized-estimation-ex-7"></a>

What fails if $q=0$ where $fp\\ne 0$?

<details>
<summary>Hint 1</summary>

Split the target integral over $\\{q>0\\}$ and $\\{q=0\\}$.

</details>

<details>
<summary>Hint 2</summary>

The proposal can only estimate the first part; determine whether the second part is genuinely zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Those target contributions can never be sampled and the weight is undefined; the expectation misses part of the integral.

</details>

### 8. Optimal control coefficient

**Exercise 17.8**

<a id="monte-carlo-and-randomized-estimation-ex-8"></a>

Assume $Y,C\\in L^2$ and $\\operatorname{Var}(C)>0$. Derive $b*$.

<details>
<summary>Hint 1</summary>

Expand $\\operatorname{Var}(Y-b(C-m))$ as a quadratic in $b$.

</details>

<details>
<summary>Hint 2</summary>

Its positive quadratic coefficient is $\\operatorname{Var}(C)$; set its derivative to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differentiate the quadratic variance in $b$ and set $-2\\operatorname{Cov}(Y,C)+2b\\operatorname{Var}(C)=0$.

</details>

### 9. Control-variate gain

**Exercise 17.9**

<a id="monte-carlo-and-randomized-estimation-ex-9"></a>

Assume $Y,C\\in L^2$ and both variances are positive. At $b*$, express the variance using correlation $\\rho$.

<details>
<summary>Hint 1</summary>

Substitute the minimizing coefficient into the variance quadratic.

</details>

<details>
<summary>Hint 2</summary>

Use $\\rho=\\operatorname{Cov}(Y,C)/\\sqrt{\\operatorname{Var}(Y)\\operatorname{Var}(C)}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitution gives $\\operatorname{Var}(Y)-\\operatorname{Cov}(Y,C)^{2}/\\operatorname{Var}(C)=\\operatorname{Var}(Y)(1-\\rho^{2})$.

</details>

### 10. Rao–Blackwell

**Exercise 17.10**

<a id="monte-carlo-and-randomized-estimation-ex-10"></a>

Why can conditioning reduce variance?

<details>
<summary>Hint 1</summary>

Decompose $Y$ into its conditional mean and a conditionally centered residual.

</details>

<details>
<summary>Hint 2</summary>

Total variance expresses the original variance as the sum of the conditional-mean variance and a nonnegative remainder.

</details>

<details>
<summary>Solution</summary>

**Solution.** Total variance gives $\\operatorname{Var}(Y)=\\mathbb{E}[\\operatorname{Var}(Y \\mid G)]+\\operatorname{Var}(\\mathbb{E}[Y \\mid G])$, so the second term is no larger.

</details>

### 11. Antithetic caveat

**Exercise 17.11**

<a id="monte-carlo-and-randomized-estimation-ex-11"></a>

For uniform $U$, why can averaging $f(U),f(1-U)$ help when $f$ is increasing?

<details>
<summary>Hint 1</summary>

The map $u\\mapsto f(1-u)$ is decreasing when $f$ is increasing.

</details>

<details>
<summary>Hint 2</summary>

Use an independent uniform $V$ and expand the expectation of $(f(U)-f(V))(f(1-U)-f(1-V))\\le0$, assuming square integrability.

</details>

<details>
<summary>Solution</summary>

**Solution.** The two terms tend to move oppositely, producing nonpositive covariance in common monotone settings; the average variance includes this covariance. A proof or calculation is still required for the chosen $f$.

</details>

### 12. Autocorrelation inflation

**Exercise 17.12**

<a id="monte-carlo-and-randomized-estimation-ex-12"></a>

If $\\rho_{k}=r^{k}$, $0<r<1$, find asymptotic $\\tau_{int}$.

<details>
<summary>Hint 1</summary>

The autocorrelations form a convergent geometric series.

</details>

<details>
<summary>Hint 2</summary>

Evaluate $1+2r/(1-r)$ before simplifying.

</details>

<details>
<summary>Solution</summary>

**Solution.** $1+2\\sum_{k\\ge 1}r^{k}=1+2r/(1-r)=(1+r)/(1-r)$.

</details>

### 13. Effective sample size

**Exercise 17.13**

<a id="monte-carlo-and-randomized-estimation-ex-13"></a>

For $n=10000$, $r=0.8$, compute the asymptotic diagnostic.

<details>
<summary>Hint 1</summary>

First evaluate the autocorrelation-time formula at $r=0.8$.

</details>

<details>
<summary>Hint 2</summary>

Divide $10000$ by the resulting inflation factor; this is an asymptotic diagnostic.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\tau_{int}=1.8/0.2=9$, so effective size is about $1111$, not $10000$.

</details>

### 14. Self-normalization bias

**Exercise 17.14**

<a id="monte-carlo-and-randomized-estimation-ex-14"></a>

Why does $\\mathbb{E}[\\sum w_{i}f_{i}/\\sum w_{i}]$ not equal a ratio of expectations?

<details>
<summary>Hint 1</summary>

A random reciprocal is not a constant that can leave an expectation.

</details>

<details>
<summary>Hint 2</summary>

Compare the expectation of $A/B$ with $(\\mathbb EA)/(\\mathbb EB)$; no identity connects them without additional structure.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expectation does not commute with a random nonlinear ratio; numerator and denominator are dependent. The estimator can still be consistent.

</details>

### 15. Optional stopping audit

**Exercise 17.15**

<a id="monte-carlo-and-randomized-estimation-ex-15"></a>

Why is repeatedly checking a fixed-sample interval unsafe?

<details>
<summary>Hint 1</summary>

Fixed-time coverage controls one specified event.

</details>

<details>
<summary>Hint 2</summary>

At a random stopping time the relevant failure event can collect failures from many inspected times.

</details>

<details>
<summary>Solution</summary>

**Solution.** The event of ever crossing aggregates many looks and changes the sampling law at the random stop. Fixed-time coverage controls one declared time, not the union over stopping times.

</details>


## Sources

The exposition and worked calculations are original. The probability results used here can be followed in Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), particularly its development of expectation, conditional expectation, and laws of large numbers. The dependent-sampling discussion uses only the stationary covariance identity proved in this chapter; it does not import an unstated Markov-chain central limit theorem.


## 8. Summary and forward route

Monte Carlo accuracy follows from an estimator contract plus an appropriate finite or asymptotic error theorem. Importance sampling requires support and moment checks; controls, conditioning, antithetics, and stratification alter variance through dependence. Markov-chain output needs autocorrelation-aware uncertainty, while sequential stopping needs time-uniform guarantees.

The next chapter, **The Probabilistic Method and Random Structures**, uses random sampling to prove that deterministic objects exist rather than to estimate an integral.
`;export{e as default};