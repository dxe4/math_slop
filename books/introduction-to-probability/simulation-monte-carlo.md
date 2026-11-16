
# Simulation and Monte Carlo

A simulation turns a probability model into a procedure that generates possible outcomes. Monte Carlo uses many generated outcomes to estimate a probability, expectation or integral. Its central calculation is an average, so its reliability depends on the same independence and moment assumptions that appeared in the laws of large numbers and the central limit theorem.

There are three questions to separate. Does the chosen probability model describe the situation of interest? Does the mathematical sampling procedure generate that model? How uncertain is an estimate based on a finite number of independent runs? Increasing the number of runs addresses the third question. It cannot repair a wrong model or an incorrect sampling procedure.

Read [continuous distributions](continuous-distributions.md), [the law of large numbers](law-of-large-numbers.md), [the central limit theorem](central-limit-theorem.md), and [Markov chains](markov-chains-first-look.md). We use mathematical pseudocode rather than a particular programming language or random-number API. No numerical experiment is needed to establish the examples: their exact values give benchmarks for a future implementation.

By the end you should be able to specify a simulation trial, construct simple samplers from uniform variables, derive unbiasedness and variance of an iid Monte Carlo average, and distinguish finite guarantees from estimated or asymptotic uncertainty.

## Begin with one complete trial

**Definition 15.1 (Monte Carlo target and estimator).** Suppose one model trial produces a random variable $W$ with finite expectation $\theta=E[W]$. For independent copies $W_1,\ldots,W_M$ with the same distribution, the ordinary Monte Carlo estimator is

$$
\widehat\theta_M=\frac1M\sum_{j=1}^M W_j.
$$

The procedure must define what one copy means. If the target is an absorption probability for a walk, one copy is a complete walk from the specified initial state to a wall, followed by its zero-one success indicator. One step along that walk is not a separate trial of the absorption experiment.

A useful mathematical specification is:

```text
choose a positive integer M
set total to zero
repeat M times independently:
    generate one complete outcome under the stated model
    calculate its contribution W
    add W to total
return total / M
```

The word independently belongs in the specification. Separate executions of a deterministic pseudo-random mechanism are not literally independent mathematical experiments. In computation we use a generator intended to approximate the assumed uniform stream and record how its state was chosen. The probability calculations describe the ideal model that the implementation is intended to approximate.

Record the model parameters, number of complete trials, generator and seed convention when results must be reproducible. Reusing a seed intentionally reproduces an experiment; resetting to the same seed before every supposedly independent trial can instead repeat the same outcome and destroy the intended sample.

## Sampling from uniforms

Assume an ideal independent sequence of variables uniform on $(0,1)$ is available. A Bernoulli variable with success probability $p\in[0,1]$ is obtained by returning one when $U<p$ and zero otherwise.

For a finite distribution with probabilities $p_1,\ldots,p_k$, form cumulative sums $c_r=\sum_{j=1}^rp_j$. Return label $r$ when $c_{r-1}<U\le c_r$, with $c_0=0$. The interval for label $r$ has length $p_r$, so its probability is exactly correct. Zero probability labels simply have empty intervals.

**Proposition 15.2 (Inverse distribution construction).** If $F$ is continuous and strictly increasing on its support interval, with inverse $F^{-1}$ on $(0,1)$, and $U$ is uniform on $(0,1)$, then $X=F^{-1}(U)$ has distribution function $F$.

*Proof.* For any interior support point $x$, monotonicity makes $F^{-1}(U)\le x$ equivalent to $U\le F(x)$. Uniformity gives this event probability $F(x)$. Outside the support the probabilities are zero or one as required. ∎

For an exponential waiting time of rate $\lambda>0$, this gives $T=-\log(1-U)/\lambda$. Since $1-U$ is also uniform, $-\log U/\lambda$ is equivalent in law. The open interval excludes a logarithm of zero. A concrete finite-precision implementation must specify how its endpoints are handled rather than silently assuming that every numerical generator has this ideal support.

For a Markov chain, apply the finite cumulative rule to the row associated with the current state, using a new independent uniform at each transition. The next state depends on the current state, even though the uniforms driving the transitions are independent.

## Unbiasedness, variance and finite guarantees

**Theorem 15.3 (iid Monte Carlo moments).** If $W_1,\ldots,W_M$ are iid with $E[W_j]=\theta$ and finite variance $v$, then

$$
E[\widehat\theta_M]=\theta,\qquad
\operatorname{Var}(\widehat\theta_M)=\frac vM.
$$

*Proof.* Linearity of expectation gives the first equality. Independence makes every cross covariance zero, so the sum has variance $Mv$. Dividing by $M^2$ gives the second equality. ∎

Unbiasedness means the average estimate across possible samples equals the target. It does not mean an individual estimate is exact or even close. A single unbiased contribution can be very variable, and many repetitions may be needed to reduce its uncertainty.

The estimator's true standard deviation, often called its standard error, is $\sqrt{v/M}$. If $v$ is known, this is an exact finite sample statement. If only an upper bound $v\le V$ is known, then $\sqrt{V/M}$ bounds the standard error.

**Corollary 15.4 (Chebyshev guarantee).** For every $\varepsilon>0$,

$$
P(|\widehat\theta_M-\theta|\ge\varepsilon)
\le\frac{v}{M\varepsilon^2}.
$$

*Proof.* Apply Chebyshev's inequality to the estimator using its exact mean and variance. ∎

To make this upper bound at most $\delta>0$, choose $M\ge v/(\delta\varepsilon^2)$ or replace $v$ by a known upper bound. The resulting requirement is sufficient, not necessarily optimal. For an event indicator, $v=p(1-p)\le1/4$, yielding a bound that does not require knowing the target probability.

## Worked Example 15.5: an integral with a known benchmark

Let $U$ be uniform on $(0,1)$ and take $W=U^2$. Then

$$
\theta=E[U^2]=\int_0^1u^2\,du=\frac13,
\qquad
v=E[U^4]-\theta^2=\frac15-\frac19=\frac4{45}.
$$

Thus averaging $M$ independent squared uniforms estimates the integral unbiasedly and has variance $4/(45M)$. Its true standard error is $2/\sqrt{45M}$.

To ensure error less than $0.01$ with failure probability at most $0.05$ using Chebyshev, it suffices to take

$$
M\ge\frac{4/45}{(0.05)(0.01)^2}.
$$

The right side is $17777.7\ldots$, so the integer choice $M=17778$ suffices. This is conservative but finite and explicit.

For a general finite interval $(a,b)$, if $X$ is uniform there, then $(b-a)g(X)$ has expectation $\int_a^b g(x)\,dx$, provided the absolute integral is finite. Finite variance additionally requires $\int_a^b g(x)^2\,dx<\infty$. A finite integral alone is not enough for the variance formula.

This deliberately simple example has an exact answer. Such examples are valuable because they let a future implementation distinguish a model or sampling mistake from ordinary random fluctuation.

## Worked Example 15.6: probability versus relative precision

Suppose an event has model probability $p=0.01$, and estimate it from ten thousand independent indicators. The estimator has standard deviation

$$
\sqrt{\frac{0.01(0.99)}{10000}}\approx0.000995.
$$

This is about one tenth of the probability itself. An absolute error that looks small on the interval from zero to one can still be substantial relative to a rare target.

For relative tolerance $r>0$, an error of at least $rp$ has Chebyshev bound

$$
P(|\widehat p-p|\ge rp)\le\frac{1-p}{Mr^2p}.
$$

If $r=0.2$ and the desired failure bound is $0.05$, the sufficient sample size is $M\ge49500$. The factor $1/p$ explains why estimating increasingly rare events to a fixed relative accuracy becomes expensive.

A run with no observed successes does not prove $p=0$. It may simply be too short to see an uncommon event. A plug-in variance estimate would then be zero, which can misleadingly suggest certainty. Finite indicator bounds or a more specialised analysis are needed to support a reliable statement in that situation.

## Estimated standard errors are different objects

When $v$ is unknown, a common estimate uses

$$
s^2=\frac{1}{M-1}\sum_{j=1}^M(W_j-\widehat\theta_M)^2,
\qquad M\ge2.
$$

**Proposition 15.7 (Unbiased sample variance).** Under the iid finite variance assumptions, $E[s^2]=v$.

*Proof.* Expanding about the true mean gives the identity

$$
\sum_j(W_j-\widehat\theta_M)^2
=\sum_j(W_j-\theta)^2-M(\widehat\theta_M-\theta)^2.
$$

The expectation of the first term is $Mv$, and that of the second is $M(v/M)=v$. The expected numerator is therefore $(M-1)v$. Division proves the claim. ∎

The estimated standard error is $s/\sqrt M$. It is random, unlike the true $\sqrt{v/M}$. Unbiasedness of $s^2$ does not make every realised $s$ accurate, and the square root itself need not be unbiased.

For iid contributions with finite positive variance, the central limit theorem suggests a large-sample interval $\widehat\theta_M\pm1.96s/\sqrt M$ with coverage approximately ninety five per cent when replacing the unknown variance is justified. This is an asymptotic method, not a distribution-free finite guarantee. Under the stronger assumption of a finite fourth moment, applying the weak law to first and second sample moments directly shows $s^2\to v$ in probability, supporting that replacement. More general consistency results exist, but are not proved here.

A numerical standard error is therefore incomplete without its assumptions. “Exact true standard error”, “upper bound on standard error”, and “estimated standard error” describe three different claims.

## Worked Example 15.8: independent wall experiments

For a fair walk between absorbing walls zero and twelve, start each independent run at state five. The exact upper-wall probability is $p=5/12$, derived by the first-step recurrence in the previous chapter.

Let a contribution equal one if the upper wall is reached first and zero otherwise. The Monte Carlo average of $M$ such contributions has mean $5/12$ and variance

$$
\frac{(5/12)(7/12)}{M}=\frac{35}{144M}.
$$

This exact variance provides a benchmark for an implementation. It also shows why counting every visited position as an independent observation would be invalid: a complete trajectory contributes one correlated sequence but only one absorption outcome.

The fair-wall absorption time is finite with finite moments in this finite model, as the geometric block bound shows. If an implementation stops every path after a fixed number of steps and declares an unfinished path a failure, it estimates the chance of upper absorption by that deadline. That target is no greater than the eventual upper-wall probability and is generally smaller.

The deadline might be a sensible computational choice, but it must appear in the mathematical target. Silently treating truncation as if nothing changed produces bias that more runs cannot remove.

## Reducing variance without changing the target

An unbiased contribution can sometimes be improved by using a known expectation. In the integral example, $E[U]=1/2$, so

$$
W'=U^2-U+\frac12
$$

still has mean one third. Since $\operatorname{Cov}(U^2,U)=1/4-(1/3)(1/2)=1/12$,

$$
\operatorname{Var}(W')=\frac4{45}+\frac1{12}-\frac2{12}
=\frac1{180}.
$$

That variance is sixteen times smaller than $4/45$. Independent averages of the new contributions therefore achieve the same variance with one sixteenth as many trials. The extra algebra uses information about the model; it does not contradict the reciprocal square root rate for a fixed contribution distribution.

This is a simple control variate calculation. If the correction's expectation were unknown and replaced carelessly, bias could be introduced. Every variance reduction method must preserve the target and account for all randomness used to estimate any added parameters.

## Exercises

### Exercise 15.1
<a id="simulation-monte-carlo-ex-1"></a>

Use one uniform variable to generate labels with probabilities $1/2,1/3,1/6$. State the intervals explicitly.

<details>
<summary>Hint 1</summary>

Use cumulative probabilities.
</details>
<details>
<summary>Hint 2</summary>

The second cumulative threshold is five sixths.
</details>
<details>
<summary>Solution</summary>

Return the first label for $0<U\le1/2$, the second for $1/2<U\le5/6$, and the third for $5/6<U<1$. The interval lengths are the required probabilities. Endpoints have probability zero under the ideal continuous model.
</details>

### Exercise 15.2
<a id="simulation-monte-carlo-ex-2"></a>

Show directly that $T=-\log U/3$ is exponential with rate three when $U$ is uniform on $(0,1)$.

<details>
<summary>Hint 1</summary>

Calculate the survival probability for nonnegative $t$.
</details>
<details>
<summary>Hint 2</summary>

Exponentiating reverses the negative logarithm inequality appropriately.
</details>
<details>
<summary>Solution</summary>

For $t\ge0$, $T>t$ is equivalent to $U<e^{-3t}$, whose probability is $e^{-3t}$. Also $T$ is positive. These are exactly the exponential support and survival law of rate three.
</details>

### Exercise 15.3
<a id="simulation-monte-carlo-ex-3"></a>

An iid Monte Carlo contribution has mean four and variance twenty five. Find the estimator's mean and true standard error for $M=400$.

<details>
<summary>Hint 1</summary>

Averaging preserves the mean.
</details>
<details>
<summary>Hint 2</summary>

Take the square root after dividing variance by the number of trials.
</details>
<details>
<summary>Solution</summary>

The estimator has mean four, variance $25/400=1/16$, and true standard error $1/4$. Calling $1/16$ the standard error would confuse variance with standard deviation. These quantities are exact under the stated iid assumptions.
</details>

### Exercise 15.4
<a id="simulation-monte-carlo-ex-4"></a>

A contribution is always between zero and two. Find a sample size giving Chebyshev error tolerance $0.02$ and failure bound $0.05$, without knowing its distribution.

<details>
<summary>Hint 1</summary>

A bounded interval of length two gives variance at most one.
</details>
<details>
<summary>Hint 2</summary>

Use the variance bound in $V/(M\varepsilon^2)$.
</details>
<details>
<summary>Solution</summary>

For independent copies the variance is at most one, so $M\ge1/[(0.05)(0.02)^2]=50000$ suffices. The interval assumption alone would not justify this calculation for correlated copies, because covariance terms could remain.
</details>

### Exercise 15.5
<a id="simulation-monte-carlo-ex-5"></a>

Construct an unbiased uniform-sampling estimator for $\int_2^5 x\,dx$ and calculate the variance of one contribution.

<details>
<summary>Hint 1</summary>

Multiply the integrand by the interval length.
</details>
<details>
<summary>Hint 2</summary>

A uniform variable on $(2,5)$ has variance nine twelfths.
</details>
<details>
<summary>Solution</summary>

Take $X\sim\operatorname{Unif}(2,5)$ and contribution $W=3X$. Then $E[W]=3(7/2)=21/2$, the integral's value. Its variance is $9\operatorname{Var}(X)=9(9/12)=27/4$. An average of $M$ independent contributions has variance $27/(4M)$.
</details>

### Exercise 15.6
<a id="simulation-monte-carlo-ex-6"></a>

A generator is reset to the same state before each of one thousand trials, producing the same contribution each time. Does the iid Monte Carlo variance formula apply?

<details>
<summary>Hint 1</summary>

Compare this with repeatedly observing one random variable.
</details>
<details>
<summary>Hint 2</summary>

The repeated contribution does not acquire new independent randomness.
</details>
<details>
<summary>Solution</summary>

No. Even if the first contribution had the intended marginal law, every later contribution is its copy. Their average equals that one contribution and has its original variance, not variance divided by one thousand. Reproducibility must not be confused with independent replication.
</details>

### Exercise 15.7
<a id="simulation-monte-carlo-ex-7"></a>

For an event of probability $p>0$, derive the relative standard error of its estimated frequency from $M$ independent indicators.

<details>
<summary>Hint 1</summary>

Start with the true standard error of a Bernoulli average.
</details>
<details>
<summary>Hint 2</summary>

Divide by the target probability.
</details>
<details>
<summary>Solution</summary>

The true standard error is $\sqrt{p(1-p)/M}$. Dividing by $p$ gives $\sqrt{(1-p)/(Mp)}$. Thus for small $p$, fixed relative precision requires sample size on the order of $1/p$. At $p=0$ relative error is undefined, which is why the question assumes positivity.
</details>

### Exercise 15.8
<a id="simulation-monte-carlo-ex-8"></a>

For iid uniforms, compare the variances of $U^2$ and $U^2-U+1/2$. How many ordinary trials match the variance of one corrected trial?

<details>
<summary>Hint 1</summary>

Use the moments calculated in the chapter.
</details>
<details>
<summary>Hint 2</summary>

Their variance ratio is sixteen.
</details>
<details>
<summary>Solution</summary>

The variances are $4/45=16/180$ and $1/180$. An average of sixteen independent ordinary contributions has variance $(4/45)/16=1/180$, matching one corrected contribution. Both target the same mean one third; the improvement uses a known expectation, not a change in target.
</details>

### Exercise 15.9
<a id="simulation-monte-carlo-ex-9"></a>

A reported interval is estimate plus or minus $1.96$ estimated standard errors. Explain why the number alone is not a finite ninety five per cent guarantee.

<details>
<summary>Hint 1</summary>

Identify where the normal shape enters.
</details>
<details>
<summary>Hint 2</summary>

The estimated standard error is itself random.
</details>
<details>
<summary>Solution</summary>

The factor $1.96$ comes from standard normal tails. Its use generally requires a justified normal approximation and a reliable variance estimate. The basic central limit theorem is asymptotic and gives no universal finite sample accuracy. Rare events, heavy tails or dependence can make the reported interval misleading.
</details>

### Exercise 15.10
<a id="simulation-monte-carlo-ex-10"></a>

A walk simulation declares success only if the upper wall is reached by time fifty. What probability does its average estimate, and how does this compare with eventual upper absorption?

<details>
<summary>Hint 1</summary>

Write the success event including its time restriction.
</details>
<details>
<summary>Hint 2</summary>

The restricted event is a subset of eventual upper absorption.
</details>
<details>
<summary>Solution</summary>

It estimates $P(X_\tau=N,\tau\le50)$ under the stated initial law. This is at most $P(X_\tau=N)$, with equality only if no later upper absorption has positive probability. More repetitions estimate the restricted target more precisely but do not remove the difference between the two targets.
</details>

## Sources

For Monte Carlo as averaging, compare the introductory books linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/) and [Dartmouth's Grinstead and Snell text](https://math.dartmouth.edu/~prob/prob/prob.pdf). The walk application continues Euler's [Random Walks from Coins](../../articles/random-walks-from-coins.md). Pseudocode, variance calculations and exercises here are original.

## Summary

Monte Carlo averages independent complete trial contributions whose expectation is the target. Finite variance gives exact estimator variance and a Chebyshev guarantee; a normal interval with an estimated standard error is an asymptotic method requiring further justification. Model error, sampling mistakes, dependence and truncation can survive any increase in trial count. Known expectations can reduce variance without changing the target. The [final chapter](summary-problems-projects.md) combines these ideas in cumulative models and projects.
