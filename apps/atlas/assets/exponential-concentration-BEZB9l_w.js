var e=`---
parent_id: book-probability-models-proofs
chapter_id: exponential-concentration
title: "Exponential Moments and Concentration Inequalities"
level: advanced-undergraduate
estimated_minutes: 290
license: CC BY-SA 4.0
---

# Exponential Moments and Concentration Inequalities

A central limit theorem describes a typical fluctuation after normalization. A concentration inequality gives a finite-sample upper bound on the probability of a deviation. The strongest elementary bounds come from exponential moments: exponentiation converts a sum into a product under independence, and Markov's inequality turns that product into a tail estimate.

This chapter develops the Chernoff method, sub-Gaussian variables, Hoeffding, Bennett, Bernstein, and bounded-difference inequalities. It then explains how union bounds and finite nets turn one-event estimates into simultaneous control, and why dependence invalidates product arguments. The goal is not a list of formulas but a method for matching tail assumptions to a justified bound.

## 1. The exponential Markov step

For a random variable $X$, threshold $a$, and $\\lambda >0$, monotonicity of the exponential gives

$\\{X\\ge a\\}=\\{e^{\\lambda X}\\ge e^{\\lambda a}\\}$.

Markov's inequality therefore yields

$\\mathbb{P}(X\\ge a)\\le e^{-\\lambda a}\\mathbb{E}[e^{\\lambda X}]$.

Optimizing over every positive $\\lambda$ for which the MGF is finite gives the **Chernoff bound**

$\\mathbb{P}(X\\ge a)\\le \\inf_{\\lambda >0} \\exp(-\\lambda a+\\log \\mathbb{E}[e^{\\lambda X}])$.

For a lower tail, apply the same argument to $-X$, or use $\\lambda <0$ while tracking the reversed event correctly.

The logarithmic MGF

$K_{X}(\\lambda )=\\log \\mathbb{E}[e^{\\lambda X}]$

is convex on its finiteness domain. Chernoff optimization computes its convex conjugate

$K_{X}^*(a)=\\sup_\\lambda \\{\\lambda a-K_{X}(\\lambda )\\}$,

leading formally to $\\mathbb{P}(X\\ge a)\\le e^{-K_{X}^*(a)}$ when the optimizing sign and domain match the event.

### Centering matters

For deviation above the mean, apply the method to $X-\\mathbb{E}[X]$:

$\\mathbb{P}(X-\\mathbb{E}[X]\\ge t)\\le \\inf_{\\lambda >0}e^{-\\lambda t}\\mathbb{E}[e^{\\lambda (X-\\mathbb{E}[X])}]$.

An uncentered MGF mixes deterministic location with random fluctuation and often obscures the useful scale.

## 2. Sub-Gaussian variables

An integrable random variable $X$ is **sub-Gaussian with variance proxy $v\\ge 0$** when

$\\mathbb{E}[e^{\\lambda (X-\\mathbb{E}[X])}]\\le e^{v\\lambda^{2}/2}$

for every real $\\lambda$. The proxy need not equal $\\operatorname{Var}(X)$. The MGF bound supplies finite second moments, and comparison of the second-order behavior at zero gives $\\operatorname{Var}(X)\\le v$ for every valid proxy.

Suppose first that $v>0$ and $t>0$. Combining the definition with Chernoff gives

$\\mathbb{P}(X-\\mathbb{E}[X]\\ge t)\\le \\inf_{\\lambda >0}e^{-\\lambda t+v\\lambda^{2}/2}$.

The quadratic is minimized at $\\lambda =t/v$, so

$\\mathbb{P}(X-\\mathbb{E}[X]\\ge t)\\le e^{-t^{2}/(2v)}$.

Applying the same calculation to $-X$ and taking a union bound yields

$\\mathbb{P}(\\lvert X-\\mathbb{E}[X]\\rvert \\ge t)\\le 2e^{-t^{2}/(2v)}$.

This is a Gaussian-shaped tail bound, not a claim that $X$ has a normal distribution. If $v=0$, then $\\operatorname{Var}(X)=0$, so $X=\\mathbb{E}[X]$ almost surely and every positive-deviation probability is zero; no division by $v$ is needed.

### Independent sums

If independent centered $X_{i}$ are sub-Gaussian with proxies $v_{i}$, then

$\\mathbb{E}[e^{\\lambda \\sum_{i}X_{i}}]=\\prod_{i}\\mathbb{E}[e^{\\lambda X_{i}}]\\le \\exp((\\lambda^{2}/2)\\sum_{i}v_{i})$.

Thus the sum has proxy $\\sum_{i}v_{i}$. Independence is used exactly at the factorization. For the average, proxies divide by $n^{2}$ after scaling.

## 3. Hoeffding's lemma and inequality

**Lemma 16.1 (Hoeffding's).** If $a\\le X\\le b$ almost surely, then

$\\mathbb{E}[e^{\\lambda (X-\\mathbb{E}[X])}]\\le \\exp(\\lambda^{2}(b-a)^{2}/8)$

for every real $\\lambda$.

So a bounded variable is sub-Gaussian with proxy $(b-a)^{2}/4$. A proof uses convexity to bound $e^{\\lambda x}$ by the chord joining its endpoint values, then maximizes the remaining two-point expression over the unknown mean location. The factor $1/8$ in the MGF exponent is the sharp distribution-free constant for a fixed range.

Let independent $X_{i}$ satisfy $a_{i}\\le X_{i}\\le b_{i}$. For $t>0$ and $\\sum_i(b_i-a_i)^2>0$, applying the lemma to every centered term and multiplying gives **Hoeffding's inequality**:

$\\mathbb{P}(\\sum_{i}(X_{i}-\\mathbb{E}[X_{i}])\\ge t)\\le \\exp(-2t^{2}/\\sum_{i}(b_{i}-a_{i})^{2})$.

The two-sided form is

$\\mathbb{P}(\\lvert \\sum_{i}(X_{i}-\\mathbb{E}[X_{i}])\\rvert \\ge t)\\le 2\\exp(-2t^{2}/\\sum_{i}(b_{i}-a_{i})^{2})$.

For independent variables in $[0,1]$,

$\\mathbb{P}(\\lvert \\bar{X}_{n}-\\mathbb{E}[\\bar{X}_{n}]\\rvert \\ge \\varepsilon )\\le 2e^{-2n\\varepsilon^{2}}$.

Unlike Chebyshev's $1/n$ probability decay at fixed $\\varepsilon>0$, this bound is exponential in $n$. If the total squared range is zero, every summand is constant and every positive centered-deviation probability is zero; the quotient form is then unnecessary.

## 4. Exact Bernoulli Chernoff bounds

Let $S_{n}\\sim \\operatorname{Binomial}(n,p)$ and take $0<p<q<1$. Since

$\\mathbb{E}[e^{\\lambda S_{n}}]=(1-p+pe^\\lambda )^{n}$,

Chernoff gives

$\\mathbb{P}(S_{n}\\ge nq)\\le \\inf_{\\lambda >0} \\exp(n[-\\lambda q+\\log(1-p+pe^\\lambda )])$.

The optimizer satisfies

$e^\\lambda =q(1-p)/[p(1-q)]$.

Substitution gives

$\\mathbb{P}(S_{n}\\ge nq)\\le e^{-nD(q\\mid\\mid p)}$,

where the Bernoulli relative entropy is

$D(q\\mathbin\\|p)=q\\log(q/p)+(1-q)\\log((1-q)/(1-p))$.

This retains the asymmetry and parameter dependence that Hoeffding discards. Pinsker-type inequalities can lower-bound $D(q\\mid\\mid p)$ by a quadratic to recover simpler but weaker bounds.

For $0<q<p<1$, the analogous lower-tail formula holds with the same divergence and a negative optimizing $\\lambda$. Endpoint cases follow separately or by limits; the displayed interior optimizer divides by both $p$ and $1-q$.

## 5. Poisson Chernoff bounds

If $N\\sim \\operatorname{Poisson}(\\mu )$, then

$\\mathbb{E}[e^{\\lambda N}]=\\exp(\\mu (e^\\lambda -1))$.

For $\\delta >0$, set the threshold to $(1+\\delta )\\mu$. Optimization gives $e^\\lambda =1+\\delta$, hence

$\\mathbb{P}(N\\ge (1+\\delta )\\mu )\\le [e^\\delta /(1+\\delta )^{1+\\delta }]^\\mu$.

Equivalently, the exponent is

$-\\mu [(1+\\delta )\\log(1+\\delta )-\\delta ]$.

The same convex function that appears here also governs Bennett's inequality. For small $\\delta$, it behaves quadratically; for large $\\delta$, it records stronger-than-Gaussian curvature appropriate to a count tail.

## 6. Bennett and Bernstein use variance

Hoeffding uses only ranges. When variance is much smaller than the maximum squared range, a variance-sensitive inequality can improve the result.

Let independent centered variables satisfy $X_{i}\\le M$ almost surely for a common $M>0$, and set

$v=\\sum_{i}\\mathbb{E}[X_{i}^{2}]$. The displayed Bennett formula below assumes $v>0$ and $t>0$.

**Bennett's inequality** states

$\\mathbb{P}(\\sum_{i}X_{i}\\ge t)\\le \\exp[-(v/M^{2})h(Mt/v)]$,

where

$h(u)=(1+u)\\log(1+u)-u$, $u\\ge 0$.

This is an imported input. Boucheron, Lugosi, and Massart, *Concentration Inequalities*, Chapter 2, Section 2.7, p. 35, proves this independent, centered, upper-bounded form. The calculation below derives Bernstein from that input rather than constituting a proof of Bennett.

Using

$h(u)\\ge u^{2}/[2(1+u/3)]$

gives **Bernstein's inequality**

$\\mathbb{P}(\\sum_{i}X_{i}\\ge t)\\le \\exp[-t^{2}/(2(v+Mt/3))]$.

If $\\lvert X_{i}\\rvert \\le M$, apply the same result to both signs:

$\\mathbb{P}(\\lvert \\sum_{i}X_{i}\\rvert \\ge t)\\le 2\\exp[-t^{2}/(2(v+Mt/3))]$.

For $t≪v/M$, the exponent is approximately $-t^{2}/(2v)$, a Gaussian regime. For $t≫v/M$, it is approximately $-3t/(2M)$, an exponential regime. Bernstein therefore interpolates between aggregate variance and single-step magnitude.

The constants depend on the exact boundedness and MGF hypotheses. A formula proved for $X_{i}\\le M$ should not be applied to an unbounded variable merely because its variance exists. If $v=0$, every centered summand is zero almost surely and the positive-deviation probability is zero.

## 7. Bounded differences and McDiarmid

Many statistics are not sums but change only slightly when one independent input is replaced. Let $Z_{1},...,Z_{n}$ be independent and let $f(Z_{1},...,Z_{n})$ be real-valued. Suppose replacing coordinate $i$ while holding the others fixed changes $f$ by at most $c_{i}$:

$\\lvert f(z_{1},...,z_{i},...,z_{n})-f(z_{1},...,z_{i}',...,z_{n})\\rvert \\le c_{i}$.

For $t>0$ and $\\sum_i c_i^2>0$, **McDiarmid's bounded-difference inequality** gives

$\\mathbb{P}(f-\\mathbb{E}[f]\\ge t)\\le \\exp(-2t^{2}/\\sum_{i}c_{i}^{2})$

and

$\\mathbb{P}(\\lvert f-\\mathbb{E}[f]\\rvert \\ge t)\\le 2\\exp(-2t^{2}/\\sum_{i}c_{i}^{2})$.

The exact source route for this bounded-difference form and its constants is McDiarmid, “On the method of bounded differences,” in *Surveys in Combinatorics, 1989*, pp. 148–188, DOI 10.1017/CBO9781107359949.008.

The proof exposes inputs one at a time and forms the Doob martingale

$M_{i}=\\mathbb{E}[f \\mid Z_{1},...,Z_{i}]$.

Each martingale difference has a conditionally bounded range of length at most $c_{i}$. Conditional Hoeffding lemmas multiply through the tower property, producing the stated MGF and tail bound. If every $c_i=0$, the statistic is constant under coordinate replacements and its positive centered-deviation probability is zero.

For a sample mean of observations in $[0,1]$, changing one coordinate changes the mean by at most $1/n$, so $\\sum c_{i}^{2}=1/n$; McDiarmid recovers Hoeffding's $2e^{-2nt^{2}}$ two-sided bound.

## 8. Simultaneous control by union bounds

For any events $A_{1},...,A_{m}$, regardless of dependence,

$\\mathbb{P}(\\cup_{j=1}^{m} A_{j})\\le \\sum_{j=1}^{m}\\mathbb{P}(A_{j})$.

If every centered $X_{j}$ obeys

$\\mathbb{P}(X_{j}\\ge t)\\le e^{-t^{2}/(2v)}$,

then

$\\mathbb{P}(\\max_{j}X_{j}\\ge t)\\le m e^{-t^{2}/(2v)}$.

To make this probability at most $\\delta$, it suffices that

$t\\ge \\sqrt{2v \\log(m/\\delta )}$.

The price of controlling $m$ candidates is $\\sqrt{\\log m}$ on a sub-Gaussian scale. No independence among the events is needed, but the bound may be loose when they overlap strongly.

For $m>1$ and $v>0$, an MGF argument also gives

$\\mathbb{E}[\\max_{1\\le j\\le m}X_{j}]\\le \\sqrt{2v \\log m}$

when every $X_{j}$ is centered sub-Gaussian with common proxy $v$. Since

$e^{\\lambda \\max_{j}X_{j}}\\le \\sum_{j}e^{\\lambda X_{j}}$,

Jensen yields $\\mathbb{E}[\\max_{j}X_{j}]\\le \\log(m)/\\lambda +v\\lambda /2$, optimized at $\\lambda =\\sqrt{2\\log(m)/v}$. When $m=1$, the expected maximum is $\\mathbb{E}[X_1]=0$; when $v=0$, every centered $X_j$ is zero almost surely.

## 9. Nets turn infinite families into finite ones

Suppose a quantity is a supremum over an infinite metric set. An $\\varepsilon$-net is a finite subset such that every point lies within distance $\\varepsilon$ of a net point. A typical proof has two separate obligations:

1. control the quantity on every net point by a union bound;
2. prove a deterministic approximation inequality from the net to the full set.

For the Euclidean unit sphere in $\\mathbb{R}^{d}$, there are $\\varepsilon$-nets with cardinality at most

$(1+2/\\varepsilon )^{d}$.

The union-bound log penalty is therefore order $d \\log(1+2/\\varepsilon )$. Choosing a very fine net improves approximation but increases entropy. The optimal $\\varepsilon$ balances these effects.

A net argument fails if the process lacks continuity or a Lipschitz increment bound. Checking many grid points does not control violent behavior between them. For uncountable classes, measurability of the supremum may also require attention.

## 10. Dependence and conditional replacements

For identical centered variables $X_{i}=Y$,

$\\sum_{i}X_{i}=nY$.

Even if $Y$ is sub-Gaussian with proxy $v$, the sum has proxy $n^{2}v$, not $nv$. Multiplying marginal MGFs would incorrectly claim the independent scale and an exponentially overconfident tail.

Some dependent sequences still concentrate. Martingale differences can use conditional bounds such as

$\\mathbb{E}[e^{\\lambda D_{i}} \\mid F_{i-1}]\\le e^{v_{i}\\lambda^{2}/2}$ almost surely.

Iterating conditional expectations then replaces ordinary independence. Azuma–Hoeffding and Freedman inequalities are examples. The conditional MGF property must be proved from the dependence structure; it cannot be inferred from marginal tails alone.

Adaptive data analysis creates another boundary. If a query is selected after inspecting the same data, a fixed-query concentration bound does not automatically remain valid. One needs a union bound over a prespecified finite class, a complexity bound, data splitting, or a theorem for adaptive selection.

## 11. A concentration audit

Before reporting an exponential tail, ask:

1. Which exponential moment exists, and on what domain?
2. Is the variable centered at the correct expectation?
3. What exact independence or conditional-MGF step permits factorization?
4. Is the assumption bounded range, sub-Gaussian MGF, bounded increments, or bounded differences?
5. Would variance-sensitive Bernstein improve a range-only Hoeffding bound?
6. Is the event one-sided or two-sided, and is the factor two present when needed?
7. Has the Chernoff parameter been optimized within its valid domain?
8. How many events are unioned, and is the resulting complexity penalty acceptable?
9. Does a net have a proved approximation step between its points?
10. Is a fixed-analysis bound being reused after data-dependent selection?

## Worked examples: declare the event before solving the bound

### Worked example 1. A finite budget for a bounded mean

Let independent $X_i\\in[0,1]$, not necessarily identically distributed, and write $\\mu_n=n^{-1}\\sum_i\\mathbb EX_i$. We want $P(|\\bar X_n-\\mu_n|\\ge0.05)\\le0.01$. Hoeffding gives $2e^{-2n(0.05)^2}$, so it suffices that $n\\ge\\log(200)/0.005$. Since $\\log(200)$ is approximately $5.29832$, the sufficient integer budget is $1060$.

The guarantee is centered at the average of the means. If the means vary with $i$, calling that center an unknown common $\\mu$ would add an unsupported assumption. The confidence level is also tied to one fixed declared sample size. Looking repeatedly until the deviation seems small introduces a random time and requires either an explicit union bound over looks or a time-uniform construction.

If the range were instead $[0,10]$, the squared range length would be one hundred and this budget would increase by that factor for the same absolute tolerance. Rescaling observations to $[0,1]$ rescales the target tolerance too; it cannot remove the physical size of an absolute error request.

### Worked example 2. Rare Bernoulli deviations and the entropy exponent

Let $S$ count successes in $100$ iid Bernoulli trials with $p=0.1$. For the upper event $S\\ge20$, choose $q=0.2$. The optimized Chernoff exponent is
$100D(0.2\\Vert0.1)$, with
$D(0.2\\Vert0.1)=0.2\\log2+0.8\\log(8/9)$.
Numerically this is approximately $0.044403$, giving an upper bound $e^{-4.4403}$, approximately $0.0118$.

The optimizing exponential parameter satisfies $e^\\lambda=q(1-p)/(p(1-q))=9/4$, so $\\lambda=\\log(9/4)>0$, as an upper-tail application requires. Hoeffding at the same deviation of the average gives $e^{-2(100)(0.1)^2}=e^{-2}$, approximately $0.1353$. Both are valid; the entropy calculation uses the Bernoulli law rather than only its range.

These are upper bounds, not exact probabilities. At $q=p$ the optimizer is zero and the entropy exponent is zero, giving only one. At $q=1$ the finite optimizer formula is undefined, but the exact all-success event has probability $p^{100}$ and is recovered by taking the appropriate entropy limit.

### Worked example 3. Simultaneous errors with no cross-statistic independence

Suppose fifty fixed centered statistics $T_j$ each have sub-Gaussian proxy $v=1/100$. Their values may depend on the same dataset. We require $P(\\max_j|T_j|\\ge t)\\le0.05$. A two-sided tail for each and a union bound give
$P(\\max_j|T_j|\\ge t)\\le100e^{-t^2/(2v)}$.
Thus $t=\\sqrt{(2/100)\\log(2000)}$, approximately $0.390$, suffices.

The factor is $100$, not fifty, because both signs are controlled. No independence among the fifty statistics was used in taking their union. The hypothesis that every statistic has the stated proxy must still be justified, often using independent observations within each statistic.

If a researcher reports the largest statistic after looking at the data, the event above already covers that choice within this fixed library. If the researcher creates new statistics by further searching the same data, the library of fifty no longer covers all possible reported events. The displayed arithmetic cannot certify an event that was never included in its union.

## 12. Exercises with complete solutions

### 1. Derive a sub-Gaussian upper tail

**Exercise 16.1**

<a id="exponential-concentration-ex-1"></a>

Assume $v>0$, $t>0$, and $\\mathbb{E}[e^{\\lambda (X-\\mathbb{E}[X])}]\\le e^{v\\lambda^{2}/2}$ for all real $\\lambda$. Derive the upper-tail bound. What happens when $v=0$?

<details>
<summary>Hint 1</summary>

Apply exponential Markov for any positive parameter $\\lambda$.

</details>

<details>
<summary>Hint 2</summary>

Minimize $-\\lambda t+v\\lambda^2/2$; treat $v=0$ without dividing by it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Chernoff gives

$\\mathbb{P}(X-\\mathbb{E}[X]\\ge t)\\le \\exp(-\\lambda t+v\\lambda^{2}/2)$

for every $\\lambda >0$. Differentiating the exponent gives optimizer $\\lambda =t/v$. Substitution yields $\\exp(-t^{2}/(2v))$. If $v=0$, variance is zero and the centered variable vanishes almost surely, so the positive-deviation probability is zero.

</details>

### 2. Obtain the two-sided tail

**Exercise 16.2**

<a id="exponential-concentration-ex-2"></a>

Under the same assumption, bound $\\mathbb{P}(\\lvert X-\\mathbb{E}[X]\\rvert \\ge t)$.

<details>
<summary>Hint 1</summary>

Apply the one-sided bound to both the variable and its negative.

</details>

<details>
<summary>Hint 2</summary>

The absolute-deviation event is their union; add the two upper bounds.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the upper-tail calculation to $X$ and to $-X$. Each tail is at most $e^{-t^{2}/(2v)}$. The union of the upper and lower events therefore has probability at most $2e^{-t^{2}/(2v)}$.

</details>

### 3. Sum independent sub-Gaussians

**Exercise 16.3**

<a id="exponential-concentration-ex-3"></a>

If independent centered $X_{i}$ have proxies $v_{i}$, prove their sum has proxy $\\sum_{i}v_{i}$.

<details>
<summary>Hint 1</summary>

The exponential of a sum is a product of exponentials.

</details>

<details>
<summary>Hint 2</summary>

Independence factors their expectation, so the proxy exponents add.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independence factors the exponential moment:

$\\mathbb{E}[e^{\\lambda \\sum_{i}X_{i}}]=\\prod_{i}\\mathbb{E}[e^{\\lambda X_{i}}]$

$\\le \\prod_{i} e^{v_{i}\\lambda^{2}/2}=e^{(\\sum_{i}v_{i})\\lambda^{2}/2}$.

This is the sub-Gaussian definition with the summed proxy.

</details>

### 4. Hoeffding for a bounded average

**Exercise 16.4**

<a id="exponential-concentration-ex-4"></a>

Let independent $X_{i}\\in [0,1]$. Bound $\\mathbb{P}(\\bar{X}_{n}-\\mathbb{E}[\\bar{X}_{n}]\\ge \\varepsilon )$.

<details>
<summary>Hint 1</summary>

A deviation $\\varepsilon$ of the mean is a deviation $n\\varepsilon$ of the sum.

</details>

<details>
<summary>Hint 2</summary>

Each coordinate has range length one, so the squared-range sum is $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every range length is one, and a deviation $\\varepsilon$ of the average is a deviation $n\\varepsilon$ of the sum. Hoeffding gives

$\\mathbb{P}(\\bar{X}_{n}-\\mathbb{E}[\\bar{X}_{n}]\\ge \\varepsilon )\\le \\exp[-2(n\\varepsilon )^{2}/n]=e^{-2n\\varepsilon^{2}}$.

</details>

### 5. A Hoeffding sample size

**Exercise 16.5**

<a id="exponential-concentration-ex-5"></a>

How large must $n$ be so that the two-sided $[0,1]$ average bound is at most $\\delta$ at tolerance $\\varepsilon$?

<details>
<summary>Hint 1</summary>

Start with the two-sided Hoeffding failure probability.

</details>

<details>
<summary>Hint 2</summary>

Take logarithms and round up the lower bound on $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require

$2e^{-2n\\varepsilon^{2}}\\le \\delta$.

Taking logarithms gives $n\\ge \\log(2/\\delta )/(2\\varepsilon^{2})$. Rounding up produces an integer sample size.

</details>

### 6. Rademacher is sub-Gaussian

**Exercise 16.6**

<a id="exponential-concentration-ex-6"></a>

Let $R$ take $\\pm 1$ equally likely. Show $\\mathbb{E}[e^{\\lambda R}]\\le e^{\\lambda^{2}/2}$.

<details>
<summary>Hint 1</summary>

Write the MGF as $\\cosh\\lambda$ and compare its even-power series with an exponential series.

</details>

<details>
<summary>Hint 2</summary>

The inequality $(2k)!\\ge2^kk!$ compares the coefficients term by term.

</details>

<details>
<summary>Solution</summary>

**Solution.** The MGF is $\\cosh \\lambda$. Its power series satisfies

$\\cosh \\lambda =\\sum_{k\\ge 0}\\lambda^{2k}/(2k)!\\le \\sum_{k\\ge 0}(\\lambda^{2}/2)^{k}/k! =e^{\\lambda^{2}/2}$,

because $(2k)!\\ge 2^{k} k!$. Thus $R$ is centered sub-Gaussian with proxy one.

</details>

### 7. Bernoulli relative-entropy optimizer

**Exercise 16.7**

<a id="exponential-concentration-ex-7"></a>

For $0<p<q<1$, solve the first-order condition in the binomial Chernoff exponent. Explain how endpoint cases are interpreted.

<details>
<summary>Hint 1</summary>

Differentiate the logarithm of the Bernoulli MGF minus $\\lambda q$.

</details>

<details>
<summary>Hint 2</summary>

Solve for $e^\\lambda$ and use $q>p$ to verify the optimizer is positive; endpoint quotients need limits or direct treatment.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differentiate $-\\lambda q+\\log(1-p+pe^\\lambda )$ to obtain

$-q+pe^\\lambda /(1-p+pe^\\lambda )$.

Setting this to zero gives $q(1-p+pe^\\lambda )=pe^\\lambda$, hence

$e^\\lambda =q(1-p)/[p(1-q)]$.

Since $q>p$, this value exceeds one and the optimizer has the required positive sign. At an endpoint, this quotient need not be defined; the corresponding degenerate bound is handled directly or obtained as an appropriate limit.

</details>

### 8. A Poisson upper tail

**Exercise 16.8**

<a id="exponential-concentration-ex-8"></a>

For $N\\sim \\operatorname{Poisson}(\\mu )$, bound $\\mathbb{P}(N\\ge 2\\mu )$ by the Poisson Chernoff formula.

<details>
<summary>Hint 1</summary>

A threshold twice the Poisson mean corresponds to multiplicative deviation one.

</details>

<details>
<summary>Hint 2</summary>

Insert $\\delta=1$ into $[e^\\delta/(1+\\delta)^{1+\\delta}]^\\mu$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $\\delta =1$. Then

$\\mathbb{P}(N\\ge 2\\mu )\\le [e/2^{2}]^\\mu =(e/4)^\\mu$.

Equivalently the exponent is $-\\mu (2\\log 2-1)$.

</details>

### 9. Bernstein's small-deviation regime

**Exercise 16.9**

<a id="exponential-concentration-ex-9"></a>

For Bernstein's exponent $t^{2}/[2(v+Mt/3)]$, simplify the denominator when $Mt\\le v$.

<details>
<summary>Hint 1</summary>

Use $Mt\\le v$ to bound the denominator from above.

</details>

<details>
<summary>Hint 2</summary>

Then $v+Mt/3\\le4v/3$, producing a quadratic lower bound on the exponent.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $Mt\\le v$, then $v+Mt/3\\le (4/3)v$. Hence

$\\mathbb{P}(S\\ge t)\\le \\exp[-3t^{2}/(8v)]$.

This displays a quadratic, variance-controlled exponent in the small-deviation regime.

</details>

### 10. Bernstein's large-deviation regime

**Exercise 16.10**

<a id="exponential-concentration-ex-10"></a>

Give a simple exponential-regime bound when $Mt\\ge v$.

<details>
<summary>Hint 1</summary>

Use $v\\le Mt$ in the same denominator.

</details>

<details>
<summary>Hint 2</summary>

The denominator is at most $(8/3)Mt$, producing a linear lower bound on the exponent.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $v\\le Mt$, then $v+Mt/3\\le (4/3)Mt$. Therefore

$t^{2}/[2(v+Mt/3)]\\ge 3t/(8M)$,

so $\\mathbb{P}(S\\ge t)\\le e^{-3t/(8M)}$. Constants can be sharpened, but the linear exponent is the key regime change.

</details>

### 11. McDiarmid for a sample mean

**Exercise 16.11**

<a id="exponential-concentration-ex-11"></a>

Let $f(z_{1},...,z_{n})=n^{-1}\\sum_{i}z_{i}$ with each $z_{i}\\in [0,1]$. Determine the bounded-difference constants and tail.

<details>
<summary>Hint 1</summary>

Change one coordinate while holding all others fixed.

</details>

<details>
<summary>Hint 2</summary>

The mean changes by at most $1/n$; sum the squares of these sensitivity constants.

</details>

<details>
<summary>Solution</summary>

**Solution.** Replacing one coordinate changes the mean by at most $1/n$, so $c_{i}=1/n$ and $\\sum c_{i}^{2}=1/n$. McDiarmid gives

$\\mathbb{P}(\\lvert f-Ef\\rvert \\ge t)\\le 2e^{-2nt^{2}}$.

</details>

### 12. Bounded differences for edge counts

**Exercise 16.12**

<a id="exponential-concentration-ex-12"></a>

In an independent-edge random graph, let $f$ count triangles. If coordinate $i$ is one edge, how much can changing it alter $f$ on $m$ vertices?

<details>
<summary>Hint 1</summary>

Only triangles containing the changed edge can be affected.

</details>

<details>
<summary>Hint 2</summary>

Choose their third vertex in $m-2$ ways, then multiply the squared sensitivity by the number of edge coordinates.

</details>

<details>
<summary>Solution</summary>

**Solution.** A triangle containing the changed edge is determined by choosing its third vertex. There are $m-2$ choices, so $c_{i}=m-2$. With $m(m-1)/2$ edge coordinates, McDiarmid uses

$\\sum_{i}c_{i}^{2}=[m(m-1)/2](m-2)^{2}$.

Substitution gives the corresponding two-sided exponential tail, though this range-only bound may be loose because most edges participate in fewer realized triangles.

</details>

### 13. Union-bound a maximum

**Exercise 16.13**

<a id="exponential-concentration-ex-13"></a>

Suppose $\\mathbb{P}(X_{j}\\ge t)\\le e^{-t^{2}/(2v)}$ for $j=1,...,m$. Bound $\\mathbb{P}(\\max_{j}X_{j}\\ge t)$.

<details>
<summary>Hint 1</summary>

Rewrite a maximum event as a union of $m$ events.

</details>

<details>
<summary>Hint 2</summary>

The union bound needs no independence between these events.

</details>

<details>
<summary>Solution</summary>

**Solution.** The maximum exceeds $t$ exactly when at least one event $\\{X_{j}\\ge t\\}$ occurs. The union bound gives

$\\mathbb{P}(\\max_{j}X_{j}\\ge t)\\le \\sum_{j}\\mathbb{P}(X_{j}\\ge t)\\le m e^{-t^{2}/(2v)}$.

No independence among the $X_{j}$ is required.

</details>

### 14. Convert a maximum bound to confidence form

**Exercise 16.14**

<a id="exponential-concentration-ex-14"></a>

Choose $t$ so the preceding maximum probability is at most $\\delta$.

<details>
<summary>Hint 1</summary>

Set the maximum-event upper bound at most $\\delta$.

</details>

<details>
<summary>Hint 2</summary>

Solve the exponential inequality for the positive threshold $t$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Solve $m e^{-t^{2}/(2v)}\\le \\delta$. Taking logarithms gives

$t^{2}\\ge 2v\\log(m/\\delta )$.

Thus $t=\\sqrt{2v\\log(m/\\delta )}$ suffices.

</details>

### 15. Expected maximum

**Exercise 16.15**

<a id="exponential-concentration-ex-15"></a>

If $m>1$, $v>0$, and centered $X_{j}$ are sub-Gaussian with common proxy $v$, prove $\\mathbb{E}[\\max_{j}X_{j}]\\le \\sqrt{2v\\log m}$. Treat $m=1$ and $v=0$ separately.

<details>
<summary>Hint 1</summary>

Bound the exponential of a maximum by the sum of exponentials.

</details>

<details>
<summary>Hint 2</summary>

Use Jensen, then minimize $\\log m/\\lambda+v\\lambda/2$; handle $m=1$ and $v=0$ directly.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $\\lambda >0$, Jensen and $e^{\\lambda \\max_{j}X_{j}}\\le \\sum_{j}e^{\\lambda X_{j}}$ give

$\\mathbb{E}[\\max_{j}X_{j}]\\le \\lambda^{-1}\\log \\mathbb{E}[e^{\\lambda \\max_{j}X_{j}}]$

$\\le \\log(m)/\\lambda +v\\lambda /2$.

Minimizing at $\\lambda =\\sqrt{2\\log(m)/v}$ yields $\\sqrt{2v\\log m}$. For $m=1$, the left side is $\\mathbb{E}[X_1]=0$; for $v=0$, all centered variables vanish almost surely.

</details>

### 16. Dependence breaks the sum proxy

**Exercise 16.16**

<a id="exponential-concentration-ex-16"></a>

Let $X_{i}=R$ for all $i$, where $R$ is Rademacher. Compare the true sum tail with an incorrectly assumed independent proxy.

<details>
<summary>Hint 1</summary>

Compute the actual sum under perfect dependence.

</details>

<details>
<summary>Hint 2</summary>

At threshold $n$ its absolute tail is one; compare that with the false independent proxy $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum is $nR$, so $\\mathbb{P}(\\lvert \\sum_{i}X_{i}\\rvert \\ge n)=1$. Treating the variables as independent would assign proxy $n$ and claim

$\\mathbb{P}(\\lvert \\sum_{i}X_{i}\\rvert \\ge n)\\le 2e^{-n/2}$,

which is below one for large $n$ and false. The true sub-Gaussian proxy from scaling $nR$ is $n^{2}$.

</details>

### 17. Union bounds do not require independence

**Exercise 16.17**

<a id="exponential-concentration-ex-17"></a>

If all events $A_{j}$ are identical with probability $p$, compare the exact union probability and union bound.

<details>
<summary>Hint 1</summary>

A union of identical events is the same event.

</details>

<details>
<summary>Hint 2</summary>

The sum bound can overcount it $m$ times but is still an upper bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** The union is just the common event, so its exact probability is $p$. The union bound gives $mp$, capped trivially at one. It remains valid without independence but can overcount the same event $m$ times.

</details>

### 18. Net cardinality penalty

**Exercise 16.18**

<a id="exponential-concentration-ex-18"></a>

An $\\varepsilon$-net of the unit sphere in $\\mathbb{R}^{d}$ has at most $(1+2/\\varepsilon )^{d}$ points. What logarithmic penalty enters a union bound?

<details>
<summary>Hint 1</summary>

Take the logarithm of the net-size upper bound.

</details>

<details>
<summary>Hint 2</summary>

That logarithm enters the tail inversion alongside the confidence logarithm.

</details>

<details>
<summary>Solution</summary>

**Solution.** Taking the logarithm of the cardinality gives

$d \\log(1+2/\\varepsilon )$.

For a sub-Gaussian event, this appears inside a square root after solving the exponential tail inequality. A smaller $\\varepsilon$ improves geometric approximation but increases this penalty.

</details>

### 19. Conditional MGFs replace independence

**Exercise 16.19**

<a id="exponential-concentration-ex-19"></a>

Suppose martingale differences satisfy $\\mathbb{E}[e^{\\lambda D_{i}} \\mid F_{i-1}]\\le e^{v_{i}\\lambda^{2}/2}$ almost surely. Show the sum has the corresponding MGF bound.

<details>
<summary>Hint 1</summary>

Condition first on the sigma-algebra just before the last increment.

</details>

<details>
<summary>Hint 2</summary>

The previous partial-sum exponential is measurable there; iterate the conditional MGF bound for deterministic proxies $v_i$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Iterated expectation gives

$\\mathbb{E}[e^{\\lambda \\sum_{i=1}^{n}D_{i}}]$

$=\\mathbb{E}[e^{\\lambda \\sum_{i=1}^{n-1}D_{i}} \\mathbb{E}[e^{\\lambda D_{n}} \\mid F_{n-1}]]$

$\\le e^{v_{n}\\lambda^{2}/2}\\mathbb{E}[e^{\\lambda \\sum_{i=1}^{n-1}D_{i}}]$.

Iterating yields $\\exp((\\lambda^{2}/2)\\sum_{i}v_{i})$, the same algebraic form as an independent sub-Gaussian sum.

</details>

### 20. Diagnose an adaptive-selection error

**Exercise 16.20**

<a id="exponential-concentration-ex-20"></a>

A researcher tests $m$ fixed bounded statistics but reports only the largest deviation, using a one-statistic failure probability $\\delta$. What correction is justified by a union bound?

<details>
<summary>Hint 1</summary>

The selected deviation can be large if any one of the fixed candidates has a large deviation.

</details>

<details>
<summary>Hint 2</summary>

Control each fixed event at level $\\delta/m$; an adaptively enlarged family requires its own event bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** To make the probability that any of the $m$ fixed statistics fails at most $\\delta$, each individual tail should be controlled at level $\\delta /m$. For a sub-Gaussian threshold this replaces $\\log(1/\\delta )$ by $\\log(m/\\delta )$. If the candidate set itself was adaptively generated from the data and not covered by the original $m$ events, this correction alone is not justified.

</details>


## 13. Investigation: uniform generalization over a finite model library

Let $H$ be a prespecified finite class of $m$ prediction rules. On iid observations $Z_{1},...,Z_{n}$, each rule has a loss $ℓ(h,Z_{i})\\in [0,1]$. Define true and empirical risks

$R(h)=\\mathbb{E}[ℓ(h,Z)]$,

$\\hat{R}_{n}(h)=(1/n)\\sum_{i=1}^{n}ℓ(h,Z_{i})$.

Let $\\hat{h}$ minimize empirical risk over $H$, and let $h_{star}$ minimize true risk over $H$.

1. Derive a bound holding simultaneously for every $h\\in H$ with probability at least $1-\\delta$.
2. Bound the excess risk $R(\\hat{h})-R(h_{star})$ on that event.
3. Solve for a sample size sufficient to make the excess at most $\\eta$ with confidence $1-\\delta$.
4. Evaluate the bound for $m=1000$, $\\delta =0.05$, and target $\\eta =0.10$.

**Complete worked solution.** Fix one $h$. Its losses are independent and lie in $[0,1]$, so two-sided Hoeffding gives

$\\mathbb{P}(\\lvert \\hat{R}_{n}(h)-R(h)\\rvert >\\varepsilon )\\le 2e^{-2n\\varepsilon^{2}}$.

Union over the $m$ prespecified rules:

$\\mathbb{P}(\\sup_{h\\in H}\\lvert \\hat{R}_{n}(h)-R(h)\\rvert >\\varepsilon )\\le 2m e^{-2n\\varepsilon^{2}}$.

Set the right side to $\\delta$. With probability at least $1-\\delta$,

$\\sup_{h\\in H}\\lvert \\hat{R}_{n}(h)-R(h)\\rvert \\le \\sqrt{\\log(2m/\\delta )/(2n)}=:\\varepsilon_{n}$.

On this event, compare the selected and oracle rules in three steps:

$R(\\hat{h})\\le \\hat{R}_{n}(\\hat{h})+\\varepsilon_{n}$

$\\le \\hat{R}_{n}(h_{star})+\\varepsilon_{n}$

$\\le R(h_{star})+2\\varepsilon_{n}$.

The middle inequality uses empirical optimality. Hence

$R(\\hat{h})-R(h_{star})\\le 2\\varepsilon_{n}=\\sqrt{2\\log(2m/\\delta )/n}$.

To make this at most $\\eta$, it suffices that

$n\\ge 2\\log(2m/\\delta )/\\eta^{2}$.

For $m=1000$, $\\delta =0.05$, and $\\eta =0.10$,

$2m/\\delta =40000$, $\\log(40000)\\approx 10.597$.

Thus

$n\\ge 2(10.597)/(0.10)^{2}\\approx 2119.4$,

so $n=2120$ suffices under this bound.

This is a uniform finite-class guarantee, not a claim that 2120 samples are necessary. It depends on iid data, bounded loss, a class fixed independently of the sample, and exact or no-worse empirical minimization. For an infinite or adaptive class, $\\log m$ must be replaced by an appropriate complexity analysis rather than silently omitted.

## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](back-matter/references-and-attribution-guide.md) records the wider source map.


## 14. Summary and forward route

The Chernoff method combines exponential Markov inequality with an optimized MGF bound. Sub-Gaussian proxies add under independence, Hoeffding converts bounded ranges into Gaussian-shaped tails, and Bennett–Bernstein incorporate variance and maximum increments. McDiarmid extends the same idea to bounded-sensitivity functions of independent inputs. Union bounds and nets purchase simultaneous control at a complexity cost, provided the finite approximation is justified.

Dependence requires conditional or structural replacements for MGF factorization, and adaptive selection changes which events need control. The main route continues to [Monte Carlo and Randomized Estimation](monte-carlo-and-randomized-estimation.md), applying finite and asymptotic error guarantees to estimators. The retained continuation [Martingales, Stopping, and Dependent Concentration](../stochastic-processes-paths/martingales-and-stopping.md) replaces independent MGF factorisation by conditional increment control; its following coupling chapter develops bounds by constructing variables together.
`;export{e as default};