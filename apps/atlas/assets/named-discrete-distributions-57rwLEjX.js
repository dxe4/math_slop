var e=`---
parent_id: book-introduction-to-probability
chapter_id: named-discrete-distributions
title: "Named Discrete Distributions"
level: undergraduate
license: CC BY-SA 4.0
---

# Named Discrete Distributions

## A name summarises a mechanism

A distribution name is useful when it identifies a model whose assumptions and formulas have already been worked out. It is not a replacement for specifying how the quantity was generated. Counts of successes, waiting times and samples without replacement have different laws, even when each involves the same words success and probability.

This chapter derives Bernoulli, binomial, geometric, hypergeometric and Poisson laws, explaining their support and moments. Preparation is [counting](counting.md), [independence](independence.md) and [expectation and variance](expectation-variance.md). We distinguish fixed trial counts from waiting experiments and independent sampling from sampling without replacement.

The parameters belong with the distribution. Saying a count is binomial without giving its trial count and success probability leaves the law unspecified. Saying a Poisson count has mean two does not prove that the Poisson model fits: many other distributions also have mean two.

## Bernoulli trials and binomial counts

**Definition 8.1 (Bernoulli law).** A Bernoulli variable with parameter $p\\in[0,1]$ equals one with probability $p$ and zero with probability $1-p$.

It is an event indicator. Its mean is $p$ and its variance is $p(1-p)$, as proved in Chapter 7. The labels success and failure are bookkeeping terms; they need not describe desirable and undesirable outcomes.

**Theorem 8.2 (Binomial law).** If $I_1,\\ldots,I_n$ are mutually independent Bernoulli variables with the same parameter $p$, their sum $X$ has, for $0<p<1$,
$$
P(X=k)=\\binom nkp^k(1-p)^{n-k},\\qquad k=0,\\ldots,n.
$$
Its mean and variance are
$$
\\mathbb E X=np,\\qquad \\operatorname{Var}(X)=np(1-p).
$$
At $p=0$ it is constantly zero, and at $p=1$ it is constantly $n$.

*Proof.* A specified length-$n$ pattern with $k$ successes has probability $p^k(1-p)^{n-k}$ by mutual independence. There are $\\binom nk$ such patterns, which are disjoint, proving the mass formula. Their total is $(p+(1-p))^n=1$ by the binomial theorem. Linearity gives the mean, and independence makes the indicator variances add, giving the variance. The endpoint parameters describe deterministic trials directly. ∎

We write $X\\sim\\operatorname{Bin}(n,p)$. A binomial model needs a fixed number of trials, independent outcomes, a binary classification and one common success probability. Sampling without replacement generally violates independence. Independent trials with varying success probabilities also need a different law, even though expectation still adds.

**Example 8.3 (A fixed number of attempts).** Suppose six independent attempts each succeed with probability $1/3$. The success count has law $\\operatorname{Bin}(6,1/3)$. Exactly two successes has probability
$$
\\binom62\\left(\\frac13\\right)^2\\left(\\frac23\\right)^4
=\\frac{240}{729}=\\frac{80}{243}.
$$
At least one success has probability $1-(2/3)^6=665/729$. The mean is two and the variance is $6(1/3)(2/3)=4/3$.

The mean being two does not make exactly two successes certain, or even assign it probability near one. The full PMF describes the variability around that mean. If all six attempts instead shared one common success/failure outcome, the count would take only zero and six, despite the same marginal probability on every attempt.

## Waiting for the first success

**Definition 8.4 (Geometric law).** For $0<p<1$, a geometric variable $G$ counts the trial of the first success in mutually independent repeated Bernoulli trials of common parameter $p$. Its positive-integer law is
$$
P(G=k)=(1-p)^{k-1}p,\\qquad k=1,2,\\ldots.
$$

The event requires $k-1$ failures followed by a success. The masses sum to $p\\sum_{j\\ge0}(1-p)^j=1$. The case $p=1$ gives $G=1$ certainly; $p=0$ never produces a success and is not a finite positive-integer geometric law.

Some texts instead count failures before the first success, obtaining support $0,1,\\ldots$ and mean $(1-p)/p$. We use the trial-count convention throughout. Always state the convention before comparing formulas.

**Proposition 8.5 (Geometric tails, memorylessness and moments).** For the stated geometric law, with $q=1-p$,
$$
P(G>m)=q^m,\\qquad m=0,1,\\ldots,
$$
$$
P(G>m+n\\mid G>m)=q^n,
$$
and
$$
\\mathbb E G=\\frac1p,\\qquad
\\operatorname{Var}(G)=\\frac{1-p}{p^2}.
$$

*Proof.* Having $G>m$ means the first $m$ trials fail, giving the tail formula. Its denominator $q^m$ is positive, so dividing $q^{m+n}$ by it proves memorylessness.

For a positive integer $g$, $g=\\sum_{m\\ge0}\\mathbf1_{\\{g>m\\}}$. Summing nonnegative terms therefore gives
$$
\\mathbb E G=\\sum_{m\\ge0}q^m=\\frac1{1-q}=\\frac1p.
$$
Likewise $g(g-1)=2\\sum_{m=1}^{g-1}m$, yielding
$$
\\mathbb E[G(G-1)]=2\\sum_{m\\ge1}mq^m.
$$
To evaluate the series, write $m=\\sum_{j=1}^m1$ and regroup nonnegative terms:
$$
\\sum_{m\\ge1}mq^m
=\\sum_{j\\ge1}\\sum_{m\\ge j}q^m
=\\frac1{1-q}\\sum_{j\\ge1}q^j
=\\frac{q}{(1-q)^2}.
$$
Thus $\\mathbb E G^2=2q/p^2+1/p$. Subtracting $(1/p)^2$ gives $q/p^2$, as claimed. ∎

Memorylessness is a property of this law. A machine that wears out or a draw from a changing population need not have the same remaining waiting distribution after many failures.

**Example 8.6 (Waiting and a conditional tail).** If independent attempts succeed with probability $1/4$, the chance that the first success occurs on attempt three is $(3/4)^2(1/4)=9/64$. The mean trial count is four and the variance is twelve.

Given that the first two attempts failed, the probability that the first five all fail is
$$
P(G>5\\mid G>2)=\\left(\\frac34\\right)^3=\\frac{27}{64}.
$$
There are three additional failures to consider, not five fresh failures. The conditional calculation concerns a changed reference group, and memorylessness explains why its remaining-tail formula looks like a fresh experiment.

## Sampling without replacement

**Theorem 8.7 (Hypergeometric law).** A population has $N$ distinguishable objects, of which $K$ are labelled successes. Select an unordered $n$-element subset uniformly, where $0\\le K\\le N$ and $0\\le n\\le N$. Its success count $X$ has mass
$$
P(X=k)=\\frac{\\binom Kk\\binom{N-K}{n-k}}{\\binom Nn}.
$$
The possible integers satisfy
$$
\\max(0,n-(N-K))\\le k\\le\\min(n,K).
$$
For $N\\ge1$, $\\mathbb E X=nK/N$. For $N\\ge2$, putting $p=K/N$,
$$
\\operatorname{Var}(X)=np(1-p)\\frac{N-n}{N-1}.
$$

*Proof.* There are $\\binom Nn$ equally likely selected subsets. To obtain $k$ successes, choose $k$ of the $K$ success objects and $n-k$ of the others. The support conditions require both choices to be possible. Summing these composition classes counts every subset once, so the masses sum to one.

For the moments, view the sample in uniformly random order and let $I_j$ indicate success at draw $j$. Each position has marginal success probability $p$, giving the mean by linearity. For two different positions, the joint success probability is $K(K-1)/(N(N-1))$. Their covariance is therefore
$$
\\frac{K(K-1)}{N(N-1)}-\\left(\\frac KN\\right)^2
=-\\frac{p(1-p)}{N-1}.
$$
Expand the variance of the sum of the $n$ indicators. There are $n$ individual variance terms and $n(n-1)$ ordered covariance terms, giving
$$
np(1-p)-\\frac{n(n-1)p(1-p)}{N-1}
=np(1-p)\\frac{N-n}{N-1}.
$$
For $n=0$ the count is zero; the formulas also give zero. ∎

The factor $(N-n)/(N-1)$ is a finite-population correction. When the entire population is sampled, the count is fixed and its variance is zero. Replacing this law by a binomial without considering the sampling fraction can miss that dependence.

**Example 8.8 (A finite sample).** From twenty objects containing eight successes, select five uniformly without replacement. Then
$$
P(X=2)=\\frac{\\binom82\\binom{12}{3}}{\\binom{20}{5}}
=\\frac{6160}{15504}=\\frac{385}{969}.
$$
The mean is $5(8/20)=2$, while variance is
$$
5\\left(\\frac25\\right)\\left(\\frac35\\right)\\frac{15}{19}
=\\frac{18}{19}.
$$
A binomial with the same five draws and marginal parameter $2/5$ would instead have variance $6/5$. The smaller hypergeometric variance follows from the negative dependence introduced by removing selected objects.

## The Poisson law

**Definition 8.9 (Poisson distribution).** For $\\lambda>0$, the law $\\operatorname{Poi}(\\lambda)$ has masses
$$
P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!},
\\qquad k=0,1,2,\\ldots.
$$
At $\\lambda=0$, define the law to be constantly zero.

The calculus identity $e^\\lambda=\\sum_{k\\ge0}\\lambda^k/k!$ shows that the positive-parameter masses sum to one. We use this standard exponential-series identity here without proving its calculus construction. It is the only analytic normalisation fact needed for this discrete law.

**Proposition 8.10 (Poisson moments).** If $X\\sim\\operatorname{Poi}(\\lambda)$, then $\\mathbb E X=\\operatorname{Var}(X)=\\lambda$.

*Proof.* For positive $\\lambda$, nonnegative series shifting gives
$$
\\mathbb E X
=e^{-\\lambda}\\sum_{k\\ge1}\\frac{k\\lambda^k}{k!}
=\\lambda e^{-\\lambda}\\sum_{j\\ge0}\\frac{\\lambda^j}{j!}
=\\lambda.
$$
Similarly, $\\mathbb E[X(X-1)]=\\lambda^2$. Hence $\\mathbb E X^2=\\lambda^2+\\lambda$ and variance is $\\lambda$. The zero-parameter constant case is immediate. ∎

The law appears as a rare-success binomial limit. If $X_n\\sim\\operatorname{Bin}(n,\\lambda/n)$ for sufficiently large $n$, then for each fixed nonnegative integer $k$,
$$
P(X_n=k)\\longrightarrow e^{-\\lambda}\\frac{\\lambda^k}{k!}.
$$
To verify the formula, write the binomial probability as
$$
\\frac{\\lambda^k}{k!}
\\prod_{j=0}^{k-1}\\left(1-\\frac jn\\right)
\\left(1-\\frac{\\lambda}{n}\\right)^n
\\left(1-\\frac{\\lambda}{n}\\right)^{-k}.
$$
The finite product and last factor tend to one, while the central factor tends to $e^{-\\lambda}$ by the elementary exponential limit. This proves a fixed-$k$ limit, not a numerical error bound for every finite approximation.

**Example 8.11 (A model for one observation window).** Suppose a count in one specified window is assumed to have law $\\operatorname{Poi}(2)$. Then $P(X=0)=e^{-2}$, $P(X=1)=2e^{-2}$ and $P(X\\le1)=3e^{-2}$. Its mean and variance both equal two.

These values follow from the assumed count law. A mean of two alone would not justify them. Nor does specifying one window's Poisson distribution establish independent counts in disjoint windows or a complete arrival-time process. Such process assumptions must be added separately when needed.

## Choosing and checking a law

Start with the experiment: fixed independent trials suggest a binomial count; first-success waiting suggests the geometric law; uniform sampling without replacement suggests hypergeometric counts. A Poisson law can be motivated by many rare opportunities or explicitly assumed as a count model, but it is not automatic for every occasional event.

Check support before substituting into a formula. A binomial cannot exceed its trial count. A hypergeometric sample cannot contain more successes than exist in the population. A first-success geometric variable is at least one under our convention. An impossible value has mass zero, not an expression with a negative factorial.

Finally inspect the parameters' units. A Poisson parameter is the expected count in the specified window, not a rate without a window. A geometric parameter is a per-trial probability. A binomial parameter pair includes both the number of trials and the per-trial probability. The formulas are reliable only when those meanings match the model.

## Exercises

### Exercise 8.1
<a id="named-discrete-distributions-ex-1"></a>

An indicator has success probability $0.6$. Find its mean, variance and probability of zero.

<details><summary>Hint 1</summary>

Use the two-point Bernoulli law.

</details>
<details><summary>Hint 2</summary>

Variance is $p(1-p)$.

</details>
<details><summary>Solution</summary>

The mean is $0.6$, variance is $0.6(0.4)=0.24$, and zero probability is $0.4$. The law describes one binary trial. Its mean need not be an observed indicator value; it is the success probability.

</details>

### Exercise 8.2
<a id="named-discrete-distributions-ex-2"></a>

Five mutually independent trials each succeed with probability $1/2$. Find the probabilities of exactly two successes and at least one success.

<details><summary>Hint 1</summary>

Exactly two counts the placements of two successful positions.

</details>
<details><summary>Hint 2</summary>

At least one is the complement of all failures.

</details>
<details><summary>Solution</summary>

Exactly two has probability $\\binom52/2^5=10/32=5/16$. At least one has probability $1-(1/2)^5=31/32$. The binomial coefficient is needed for a count of successes but not for the single all-failure history. Independence and a common probability justify the equal pattern weights.

</details>

### Exercise 8.3
<a id="named-discrete-distributions-ex-3"></a>

A success count has binomial parameters $n=12,p=1/4$. Find its mean and variance. Explain why twelve identical marginal success probabilities alone would not justify the variance formula.

<details><summary>Hint 1</summary>

Use the moment formulas derived from the indicator sum.

</details>
<details><summary>Hint 2</summary>

The variance proof eliminated pair covariance terms using independence.

</details>
<details><summary>Solution</summary>

The mean is three and variance is $12(1/4)(3/4)=9/4$. Equal marginal probabilities alone give the same mean by linearity, but dependent trials may have nonzero covariance terms and a different variance. They may not have a binomial distribution at all.

</details>

### Exercise 8.4
<a id="named-discrete-distributions-ex-4"></a>

Independent attempts succeed with probability $1/3$. For the trial-count geometric variable, find $P(G=4)$, its mean and its variance.

<details><summary>Hint 1</summary>

The first three attempts must fail and the fourth succeed.

</details>
<details><summary>Hint 2</summary>

Our convention includes the successful trial in the count.

</details>
<details><summary>Solution</summary>

The probability is $(2/3)^3(1/3)=8/81$. The mean is three and variance is $(2/3)/(1/9)=6$. If failures alone were counted, the mean would be two instead, but the variance would remain six because subtracting a constant does not change variance.

</details>

### Exercise 8.5
<a id="named-discrete-distributions-ex-5"></a>

For the geometric law with $p=1/5$, calculate $P(G>7\\mid G>3)$ and explain the denominator requirement.

<details><summary>Hint 1</summary>

There are four additional failures after the first three.

</details>
<details><summary>Hint 2</summary>

The conditional denominator is $(4/5)^3$, which is positive.

</details>
<details><summary>Solution</summary>

The conditional probability is $(4/5)^7/(4/5)^3=(4/5)^4=256/625$. Positivity of the denominator justifies the ratio. Memorylessness gives the same expression as surviving four fresh trials, under the unchanged independent equal-probability mechanism.

</details>

### Exercise 8.6
<a id="named-discrete-distributions-ex-6"></a>

A population has nine objects, three of them successes. A uniform four-object sample is taken without replacement. Give the support and the probability of exactly two successes.

<details><summary>Hint 1</summary>

No sample can contain more than the three available successes.

</details>
<details><summary>Hint 2</summary>

Use a favourable-subset count over all four-subsets.

</details>
<details><summary>Solution</summary>

The possible counts are zero through three. Exactly two has probability $\\binom32\\binom62/\\binom94=45/126=5/14$. The support lower endpoint is zero because four failures can be selected from the six available. The count formula reflects uniform subsets, not independent success trials.

</details>

### Exercise 8.7
<a id="named-discrete-distributions-ex-7"></a>

Find the mean and variance of the sample count in Exercise 8.6 and compare with a binomial using the same sample size and marginal probability.

<details><summary>Hint 1</summary>

Here $p=3/9=1/3$.

</details>
<details><summary>Hint 2</summary>

The finite-population correction is $(9-4)/(9-1)=5/8$.

</details>
<details><summary>Solution</summary>

The mean is $4/3$. The hypergeometric variance is $4(1/3)(2/3)(5/8)=5/9$. The corresponding binomial variance is $8/9$. Sampling without replacement introduces negative covariance, reducing the spread while leaving the marginal mean calculation unchanged.

</details>

### Exercise 8.8
<a id="named-discrete-distributions-ex-8"></a>

If $X\\sim\\operatorname{Poi}(3)$, find $P(X=0)$, $P(X=2)$, $\\mathbb E X$ and $\\operatorname{Var}(X)$.

<details><summary>Hint 1</summary>

Use the PMF at zero and two, including the factorial.

</details>
<details><summary>Hint 2</summary>

Both moments asked for equal the Poisson parameter.

</details>
<details><summary>Solution</summary>

The probabilities are $e^{-3}$ and $(9/2)e^{-3}$. The mean and variance both equal three. The factorial $2!$ prevents treating the second probability as $9e^{-3}$. Equality of mean and variance is a consequence of this law, not sufficient evidence by itself that an observed count is Poisson.

</details>

### Exercise 8.9
<a id="named-discrete-distributions-ex-9"></a>

A sample includes every object in a population of size $N\\ge2$, with $K$ successes. Determine its success count and variance, and check the hypergeometric formula.

<details><summary>Hint 1</summary>

There is only one possible full-population subset.

</details>
<details><summary>Hint 2</summary>

Set $n=N$ in the finite-population correction.

</details>
<details><summary>Solution</summary>

The success count is certainly $K$, so its variance is zero. The mean formula gives $nK/N=K$, and the variance correction has numerator $N-n=0$, also giving zero. A binomial approximation would generally miss the deterministic nature of sampling the entire population.

</details>

### Exercise 8.10
<a id="named-discrete-distributions-ex-10"></a>

A count has mean two. Give two different discrete laws with that mean, one Poisson and one not Poisson, and explain why the mean does not identify the law.

<details><summary>Hint 1</summary>

A constant variable is a valid discrete law.

</details>
<details><summary>Hint 2</summary>

Compare its variance with that of a Poisson variable of the same mean.

</details>
<details><summary>Solution</summary>

The law $\\operatorname{Poi}(2)$ has mean two and variance two. The constant variable equal to two has mean two and variance zero, so it is not Poisson with that parameter. A mean is only one summary of a distribution and cannot determine every point probability or the underlying sampling mechanism.

</details>

## Sources

The exposition and exercises are original. A complementary primary treatment of these discrete families is Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), §5.1, with expectation techniques in Chapter 6, official CHANCE Project text, consulted 13 November 2026. The exponential-series normalisation used for the Poisson law is a stated calculus identity rather than an unproved consequence of finite counting.

## Summary

Bernoulli variables describe one binary outcome; binomial variables count fixed independent equal-probability trials; geometric variables count the first-success trial. Hypergeometric counts describe uniform sampling without replacement and include a finite-population variance correction.

Poisson laws model nonnegative counts and have equal mean and variance, but need assumptions beyond a supplied mean. Support, conventions and parameter meanings must accompany every formula. [Continuous distributions](continuous-distributions.md) now replaces point masses by density areas while keeping the distinction between a law and its generating mechanism.
`;export{e as default};