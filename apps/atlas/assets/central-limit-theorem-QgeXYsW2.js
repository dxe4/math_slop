var e=`---
parent_id: book-introduction-to-probability
chapter_id: central-limit-theorem
title: "The Central Limit Theorem"
level: undergraduate
license: CC BY-SA 4.0
---

# The Central Limit Theorem

The law of large numbers says that an average becomes close to its expectation with high probability. It does not identify the shape of the remaining fluctuations. The central limit theorem does: after centring and scaling in the right way, sums of many independent observations often have an approximately normal distribution.

The scaling matters as much as the normal curve. The sum's centre grows proportionally to the number of observations, while its standard deviation grows only with the square root. For an average the centre stays fixed and the standard deviation shrinks. Confusing the sum with the average, or variance with standard deviation, changes the question completely.

Preparation is [continuous distributions](continuous-distributions.md), [transformations and sums](transformations-sums.md), and [the law of large numbers](law-of-large-numbers.md). We state the classical iid central limit theorem as a cited theorem. Its full proof needs tools beyond this introductory route; the calculations that apply it are proved and explained here. A histogram or an argument about matching means and variances would not constitute that missing proof.

By the end you should be able to standardise sums and averages, use a normal approximation with a continuity correction for integer counts, distinguish an approximation from a guarantee, and identify situations where the stated theorem does not apply.

## Centring and scaling

**Definition 13.1 (Standardised sum).** Let $X_1,X_2,\\ldots$ have common finite mean $\\mu$ and finite positive variance $\\sigma^2$. With $S_n=\\sum_{i=1}^nX_i$, define

$$
Z_n=\\frac{S_n-n\\mu}{\\sigma\\sqrt n}
=\\frac{\\sqrt n(\\overline X_n-\\mu)}{\\sigma}.
$$

If the observations are independent, $Z_n$ has mean zero and variance one for every $n$. This calculation alone says nothing about its distributional shape. A fair sign also has mean zero and variance one, but it is not normal.

The numerator subtracts the correct centre, and the denominator measures the spread of that numerator. The sum has variance $n\\sigma^2$, so its standard deviation is $\\sigma\\sqrt n$. The average has variance $\\sigma^2/n$, so its standard deviation is $\\sigma/\\sqrt n$. Both ways of standardising produce the same $Z_n$.

A standardised variable is dimensionless. If observations are measured in grams, both the numerator and denominator of $Z_n$ are in grams. A calculation that divides by $n\\sigma^2$ leaves reciprocal grams and signals a scaling error.

The positivity condition $\\sigma>0$ is essential here. If the variance is zero, the observations equal their mean with probability one; their sum has no fluctuations to standardise. The weak law still applies in that degenerate case, but the displayed ratio is undefined.

## The theorem and its precise meaning

**Theorem 13.2 (Classical iid central limit theorem; cited).** Let $X_1,X_2,\\ldots$ be independent, identically distributed real random variables with finite mean $\\mu$ and finite variance $0<\\sigma^2<\\infty$. Then for every real $z$,

$$
P(Z_n\\le z)\\longrightarrow\\Phi(z)
\\quad\\text{as }n\\longrightarrow\\infty,
$$

where $\\Phi$ is the standard normal distribution function.

This is the classical iid theorem, taught in Blitzstein and Hwang's *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). Discrete and continuous introductory forms also appear in [Grinstead and Snell, chapter 9](https://math.dartmouth.edu/~prob/prob/prob.pdf). The theorem is used here without a full proof.

The conclusion concerns distribution functions, not a guarantee for an individual sample path. For fixed real $a<b$, subtracting the two limiting distribution function values gives

$$
P(a<Z_n\\le b)\\longrightarrow\\Phi(b)-\\Phi(a).
$$

There is no requirement that each observation be normal or even continuous. Bernoulli variables, die scores and exponential waiting times all satisfy the theorem's hypotheses with their appropriate parameters. Discrete standardised sums can converge in distribution to a continuous law because their possible values become more closely spaced as $n$ increases.

The theorem does not say that the observations themselves become normal. Nor does it say that the unscaled sum approaches a fixed normal law: its centre and spread generally keep changing. The approximation for a particular $n$ is

$$
S_n\\ \\text{approximately}\\ N(n\\mu,n\\sigma^2),
\\qquad
\\overline X_n\\ \\text{approximately}\\ N(\\mu,\\sigma^2/n).
$$

These are approximate distributions, while the means and variances written inside them are exact under the stated assumptions.

## Worked Example 13.3: a total of fair die scores

Roll a fair six-sided die independently one hundred and twenty times, and let $S$ be the total. For one roll,

$$
\\mu=\\frac72,\\qquad
E[X^2]=\\frac{91}{6},\\qquad
\\sigma^2=\\frac{35}{12}.
$$

Thus $E[S]=420$ and $\\operatorname{Var}(S)=350$. The standard deviation is $\\sqrt{350}$, about $18.7$. We want the probability that the total is between four hundred and four hundred and forty, inclusive.

Because the total is integer-valued, we approximate the event by the continuous interval from $399.5$ to $440.5$. The normal approximation is

$$
P(400\\le S\\le440)
\\approx
\\Phi\\!\\left(\\frac{20.5}{\\sqrt{350}}\\right)
-\\Phi\\!\\left(\\frac{-20.5}{\\sqrt{350}}\\right).
$$

The two standardised limits are about plus and minus $1.096$. A normal table gives a probability near $0.727$. This decimal is an approximation, rather than a finite sample guarantee.

Every assumption has a clear role. Fairness supplies the single-roll distribution; independent rolls allow variance addition and the theorem; identical distribution provides common moments. A weighted die would require different moments. Repeatedly reading the score from one roll would produce completely dependent observations and invalidate this calculation.

## Why continuity corrections appear

An integer count has point masses, while a normal law has none. To approximate $P(S=k)$, we associate the mass at $k$ with the unit-width interval $(k-1/2,k+1/2)$ under a smooth curve. Adding neighbouring unit intervals leads to the rules

$$
P(S\\le k)\\approx P(N<k+1/2),
$$

and

$$
P(S\\ge k)\\approx P(N>k-1/2),
$$

where $N$ is the chosen approximating normal variable.

For an inclusive interval $a\\le S\\le b$ with integer endpoints, use $a-1/2<N<b+1/2$. The correction depends on the exact event wording. “More than twenty” for an integer variable means at least twenty one, whose lower continuous boundary is twenty and a half.

This construction is a geometric approximation, not a theorem that every correction improves every answer. It is useful for lattice-valued sums with unit spacing when a normal approximation is otherwise plausible. If the sum takes values two units apart, such as an even-time fair random walk, half the spacing is one rather than one half. Always inspect the actual output support.

For continuous observations there is no unit lattice mass to replace, so the ordinary approximation uses the stated real thresholds without a half-unit correction. Arbitrarily adding one half to a continuous measurement changes its physical meaning.

## Worked Example 13.4: a binomial threshold

Let $B$ count successes in two hundred independent trials, each with success probability $0.4$. Then $B\\sim\\operatorname{Bin}(200,0.4)$, with mean eighty and variance forty eight.

We seek $P(B\\ge90)$. The continuity-corrected lower boundary is $89.5$, not $90.5$. Therefore

$$
P(B\\ge90)\\approx
1-\\Phi\\!\\left(\\frac{89.5-80}{\\sqrt{48}}\\right)
=1-\\Phi\\!\\left(\\frac{9.5}{\\sqrt{48}}\\right).
$$

The standardised boundary is about $1.371$, giving a tail near $0.085$. The exact probability remains the binomial sum

$$
\\sum_{k=90}^{200}\\binom{200}{k}(0.4)^k(0.6)^{200-k}.
$$

The normal expression offers a simpler approximate calculation. It does not replace the exact model with a continuous count.

Here the expected numbers of successes and failures are eighty and one hundred and twenty, respectively, so neither outcome is rare. This supports a central normal approximation. A common rule of thumb asks for both $np$ and $n(1-p)$ to be comfortably large, but no fixed threshold such as five or ten supplies a universal error guarantee.

If the question concerned a very remote tail, an apparently large sample size might still give a poor relative approximation. Central accuracy and accuracy for a tiny tail probability are different demands.

## Worked Example 13.5: an average of waiting times

Suppose independent waiting times $T_i$ are exponential with mean two minutes. The rate is one half per minute, and the variance is four square minutes. Let $\\overline T$ be the average of sixty four such times.

Its exact mean is two and its exact standard deviation is $2/\\sqrt{64}=1/4$ minute. The central limit theorem suggests

$$
P(1.75<\\overline T<2.5)
\\approx
\\Phi\\!\\left(\\frac{2.5-2}{1/4}\\right)
-\\Phi\\!\\left(\\frac{1.75-2}{1/4}\\right)
=\\Phi(2)-\\Phi(-1).
$$

Using familiar table values gives approximately $0.8186$. No continuity correction is used, because the average has a density and the thresholds are actual continuous times.

The individual exponential law is right-skewed, but an average of many independent copies is less skewed. The theorem explains the limiting normal shape without saying that one waiting time is itself approximately normal. If sixty four measurements came from one changing queue with strong dependence or a varying rate, the iid theorem would no longer justify the approximation.

There is also an exact gamma density for the sum of exponential variables with a common rate, obtainable by repeated convolution. We do not need that formula to apply the theorem, but it provides another method when exactness matters.

## Comparing a guarantee with an approximation

For an iid average with mean $\\mu$ and positive finite variance, Chebyshev gives

$$
P(|\\overline X_n-\\mu|\\ge c\\sigma/\\sqrt n)\\le\\frac1{c^2},
\\qquad c>0.
$$

The central limit theorem instead suggests that this probability is near $2(1-\\Phi(c))$ for large $n$. At $c=2$, the bound is one quarter while the normal tail is about $0.0455$. The smaller normal number is attractive, but the two statements have different logical status.

Chebyshev supplies a guaranteed finite sample upper bound from moments alone. The basic central limit theorem supplies convergence as $n$ tends to infinity, without a numerical error rate at the current $n$. Replacing one by the other changes the strength and type of claim.

A separate quantitative theorem can provide an error bound under additional assumptions, for example a finite absolute third centred moment. We do not use such a theorem here. A large sample size written in a problem is not itself a proof that a particular normal approximation error is small.

The distinction matters when planning a sample. A normal calculation can give a practical approximate design, while a Chebyshev calculation gives a more conservative guarantee under fewer distributional details. Report which kind of statement you have obtained.

## Limitations that change the answer

Strong dependence can preserve a nonnormal shape. If every $X_i$ equals the same fair sign $Z$, then the sum is $nZ$, not a sum of independent contributions. Using the independent standard deviation would even give the wrong scale.

Infinite variance lies outside the stated theorem. Some heavy-tailed distributions have finite means but no finite second moments. Their averages can behave differently and need other normalisations. An undefined variance cannot be replaced by an observed finite number and then used to claim that the theorem's hypothesis has been satisfied.

Identical distribution is also a real assumption. There are central limit theorems for independent but nonidentically distributed variables, with conditions preventing a few terms from dominating. Those conditions are additional mathematics, not an automatic extension of the iid statement.

Finally, approximating a distribution function at fixed standardised thresholds does not justify every moving threshold. Questions about extremely rare events can require specialised large deviation methods or exact calculations. The central limit theorem is powerful precisely because it has a clear domain of applicability.

## Exercises

### Exercise 13.1
<a id="central-limit-theorem-ex-1"></a>

Iid variables have mean seven and variance nine. Write the standardised form of their sum for sample size one hundred and the approximate law of their average.

<details>
<summary>Hint 1</summary>

The sum's centre is one hundred times the single-observation mean.
</details>
<details>
<summary>Hint 2</summary>

Its standard deviation is three times the square root of one hundred.
</details>
<details>
<summary>Solution</summary>

The standardised sum is $(S_{100}-700)/30$. The average is approximately $N(7,9/100)$ under the central limit theorem. Its standard deviation is $0.3$, whereas $0.09$ is its variance. The exactness of those moments does not make the approximate normal law exact.
</details>

### Exercise 13.2
<a id="central-limit-theorem-ex-2"></a>

For $B\\sim\\operatorname{Bin}(100,1/2)$, give a continuity-corrected normal approximation to $P(45\\le B\\le55)$.

<details>
<summary>Hint 1</summary>

The mean is fifty and the standard deviation is five.
</details>
<details>
<summary>Hint 2</summary>

Move each inclusive endpoint outwards by one half.
</details>
<details>
<summary>Solution</summary>

Approximate using the interval $(44.5,55.5)$ under $N(50,25)$. Standardisation gives $\\Phi(1.1)-\\Phi(-1.1)$, about $0.729$. The event consists of eleven possible integer values, which the expanded continuous interval represents.
</details>

### Exercise 13.3
<a id="central-limit-theorem-ex-3"></a>

Let $B\\sim\\operatorname{Bin}(80,1/4)$. Write a corrected approximation for $P(B>25)$.

<details>
<summary>Hint 1</summary>

Translate the strict inequality into an integer threshold.
</details>
<details>
<summary>Hint 2</summary>

The mean is twenty and the variance is fifteen.
</details>
<details>
<summary>Solution</summary>

The event is $B\\ge26$, so its lower continuous boundary is $25.5$. The approximation is $1-\\Phi((25.5-20)/\\sqrt{15})$. Using $24.5$ would approximate a different event. This remains an approximation under the independent trial model.
</details>

### Exercise 13.4
<a id="central-limit-theorem-ex-4"></a>

An iid sample has mean ten and standard deviation four. For sample size sixty four, approximate the chance that its average exceeds eleven.

<details>
<summary>Hint 1</summary>

Find the standard deviation of the average.
</details>
<details>
<summary>Hint 2</summary>

Divide the excess of one by that standard deviation.
</details>
<details>
<summary>Solution</summary>

The average's standard deviation is $4/8=1/2$. The threshold is two standard deviations above the mean, giving approximation $1-\\Phi(2)$, about $0.0228$. Without information about the distribution or a quantitative theorem, this is not a certified finite sample error probability.
</details>

### Exercise 13.5
<a id="central-limit-theorem-ex-5"></a>

Iid variables are zero with probability $0.99$ and one hundred with probability $0.01$. Find their mean and variance. Explain why a sample of size thirty is not automatically well approximated by a normal law.

<details>
<summary>Hint 1</summary>

The number of nonzero observations is binomial.
</details>
<details>
<summary>Hint 2</summary>

Calculate its expected count and probability of zero.
</details>
<details>
<summary>Solution</summary>

The mean is one, the second moment is one hundred, and variance is ninety nine. In thirty trials the expected nonzero count is only $0.3$, and the sum is zero with probability $0.99^{30}$, about three quarters. A large atom at the lower edge is poorly represented by a smooth central normal curve. The asymptotic theorem still applies as sample size grows.
</details>

### Exercise 13.6
<a id="central-limit-theorem-ex-6"></a>

Why is matching mean zero and variance one insufficient to prove a central limit theorem?

<details>
<summary>Hint 1</summary>

Find a nonnormal distribution with those two moments.
</details>
<details>
<summary>Hint 2</summary>

A fair sign already provides one.
</details>
<details>
<summary>Solution</summary>

A fair sign takes only minus one and one, has mean zero and variance one, and is not normal. A sequence constantly having that distribution keeps the same moments but does not approach a normal law. A central limit theorem must control distribution functions, not just the first two moments.
</details>

### Exercise 13.7
<a id="central-limit-theorem-ex-7"></a>

For an iid finite positive variance sample, compare the Chebyshev bound and the large-sample normal approximation for deviation of the average by at least three standard errors.

<details>
<summary>Hint 1</summary>

The tolerance is $3\\sigma/\\sqrt n$.
</details>
<details>
<summary>Hint 2</summary>

Keep upper bound and approximate value separate.
</details>
<details>
<summary>Solution</summary>

Chebyshev gives an upper bound $1/9$ for every sample size. The central limit theorem gives a limiting tail $2(1-\\Phi(3))$, about $0.0027$. The former is a finite guarantee, while the latter describes the asymptotic probability and needs further justification for numerical accuracy at a chosen finite size.
</details>

### Exercise 13.8
<a id="central-limit-theorem-ex-8"></a>

A fair random walk takes one hundred independent steps of plus or minus one. Give a normal approximation for the probability of endpoint zero, respecting its lattice spacing.

<details>
<summary>Hint 1</summary>

Only even endpoints are possible.
</details>
<details>
<summary>Hint 2</summary>

Represent the mass at zero by the interval from minus one to one.
</details>
<details>
<summary>Solution</summary>

The endpoint has mean zero and variance one hundred. Adjacent possible endpoints are two apart, so the central lattice cell is $(-1,1)$. The approximation is $\\Phi(0.1)-\\Phi(-0.1)$. A half-unit correction would use the wrong spacing. The exact probability is $\\binom{100}{50}2^{-100}$.
</details>

### Exercise 13.9
<a id="central-limit-theorem-ex-9"></a>

An iid average has standard error $\\sigma/\\sqrt n$. By what factor must the sample size grow to reduce that standard error to one third? Does this ensure the same improvement for systematic bias?

<details>
<summary>Hint 1</summary>

Solve a square root scaling equation.
</details>
<details>
<summary>Hint 2</summary>

A fixed mean offset is unaffected by sample size.
</details>
<details>
<summary>Solution</summary>

The sample size must be multiplied by nine. Then $\\sigma/\\sqrt{9n}$ equals one third of its original value. A fixed bias remains the same, so this calculation improves random precision but does not reduce a calibration offset or establish that the mean is the desired target.
</details>

### Exercise 13.10
<a id="central-limit-theorem-ex-10"></a>

State which central limit theorem hypotheses fail in these models: all observations equal one random sign; iid variables have infinite variance; independent observations have different distributions. May the same theorem be invoked unchanged?

<details>
<summary>Hint 1</summary>

Check independence, identical distribution, and moment conditions separately.
</details>
<details>
<summary>Hint 2</summary>

A failed hypothesis is different from a proof that every possible limit fails.
</details>
<details>
<summary>Solution</summary>

The first model fails independence, the second fails finite variance, and the third fails identical distribution. The theorem as stated cannot be invoked unchanged in any of them. Some nonidentical or dependent sequences do satisfy other central limit theorems, but those require their own conditions and arguments.
</details>

## Sources

The cited theorem is the classical iid central limit theorem; see Blitzstein and Hwang's book through [Harvard Stat 110](https://stat110.hsites.harvard.edu/), and [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf), chapter 9 for elementary discrete and continuous presentations. The applications, explanations of scope and exercises here are original.

## Summary

The central limit theorem concerns centred sums scaled by their square root standard deviation. Under iid finite positive variance assumptions their distribution functions approach the standard normal function. Continuity corrections translate integer events to intervals when a normal approximation is appropriate. A limiting approximation differs from a finite sample guarantee, and heavy tails, strong dependence or remote tails can change the problem. The [next chapter](markov-chains-first-look.md) studies a simple class of dependent sequences by describing their transitions explicitly.
`;export{e as default};