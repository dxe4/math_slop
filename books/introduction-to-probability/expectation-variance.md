
# Expectation and Variance

## Average and spread are different questions

Two games can have the same average score while producing very different outcomes. One might always give ten points; another might give zero or twenty with equal probabilities. The expectation is ten in both cases, but the second game is more variable. A useful numerical summary of a distribution therefore needs to distinguish its central average from its spread.

Expectation is a probability-weighted sum, not necessarily the most likely value or even a possible value. Variance measures the average squared deviation from that expectation. Their algebra is especially useful for sums of many variables, because expectation is linear without independence, whereas variance calculations generally involve dependence.

This chapter follows [random variables and distributions](random-variables-distributions.md). We work primarily with finite laws and explain the convergence requirements for countable laws. Later chapters extend the formulas to densities through integration. All expectation statements include the assumptions needed to avoid undefined infinite cancellations.

## Defining the expectation

**Definition 7.1 (Discrete expectation).** If $X$ has a finite law, define
$$
\mathbb E X=\sum_x x\,p_X(x).
$$
For a countable law, a finite expectation is defined when
$$
\mathbb E|X|=\sum_x|x|p_X(x)<\infty,
$$
using the absolutely convergent signed sum. A nonnegative variable may instead have expectation $+\infty$.

Absolute convergence ensures that regrouping the terms cannot change the answer. If the positive and negative contributions both diverge, their difference is not a defined expectation. Symmetry alone does not justify writing infinity minus infinity as zero.

For a finite law whose smallest and largest values are $a,b$, the expectation lies in $[a,b]$. Indeed, multiplying $a\le x\le b$ by each nonnegative mass and summing gives $a\le\mathbb E X\le b$. It need not equal one of the values. A fair die has expectation $7/2$, although no face shows $3.5$.

**Proposition 7.2 (Expectation of a transformation).** If $g(X)$ is integrable, then
$$
\mathbb E[g(X)]=\sum_x g(x)p_X(x).
$$

*Proof.* The mass at a value $y$ of $g(X)$ is the sum of $p_X(x)$ over its preimages. Substitute that transformation rule into $\sum_y yP(g(X)=y)$ and regroup. Each original value contributes $g(x)p_X(x)$ once. For countable signed sums, integrability justifies the regrouping; for nonnegative terms it remains valid with possibly infinite total. ∎

This is often called calculating directly from the original law. Finding a new PMF for every transformation is unnecessary when only its expectation is wanted.

**Example 7.3 (A score with a nonattainable mean).** A hypothetical one-round score $X$ takes values $-2,1,5$ with probabilities $1/2,3/10,1/5$. Its expectation is
$$
\mathbb E X=-2\left(\frac12\right)+1\left(\frac3{10}\right)+5\left(\frac15\right)=\frac3{10}.
$$
The value $0.3$ is not one of the possible scores. It summarises the law's average rather than predicting one round. Also
$$
\mathbb E[X^2]=4\left(\frac12\right)+1\left(\frac3{10}\right)+25\left(\frac15\right)=\frac{73}{10}.
$$
Squaring the expectation would give $0.09$, a different quantity. Averaging a nonlinear function and applying that function to the average are generally different operations.

## Linearity and indicator variables

**Theorem 7.4 (Linearity).** For integrable $X,Y$ and real constants $a,b$,
$$
\mathbb E[aX+bY]=a\mathbb E X+b\mathbb E Y.
$$
No independence assumption is required.

*Proof.* In a finite joint law, write $q(x,y)=P(X=x,Y=y)$. Then
$$
\sum_{x,y}(ax+by)q(x,y)
=a\sum_xx\left(\sum_yq(x,y)\right)
+b\sum_yy\left(\sum_xq(x,y)\right).
$$
The inner sums are the marginal masses, giving the formula. For countable integrable variables, the absolute sum is bounded by $|a|\mathbb E|X|+|b|\mathbb E|Y|$, so the same regrouping is justified. ∎

An event indicator $I_A$ equals one when $A$ occurs and zero otherwise. Its expectation is $P(A)$, since its two-value law gives $1P(A)+0P(A^c)$. If a count can be written as a sum of indicators, linearity converts its expected value into a sum of event probabilities. The indicators themselves may be dependent.

**Example 7.5 (Occupied boxes).** Place four distinguishable balls independently into three labelled boxes, each ball choosing each box with probability $1/3$. Let $N$ count occupied boxes. For box $j$, let $I_j$ indicate that it contains at least one ball. Then $N=I_1+I_2+I_3$.

A particular box is empty when all four balls avoid it, with probability $(2/3)^4=16/81$. Therefore
$$
\mathbb E N=3\left(1-\frac{16}{81}\right)=\frac{65}{27}.
$$
No independence between the occupancy indicators was assumed. In fact, their values are constrained by the four balls. Independence of the ball placements was used inside the empty-box probability, while linearity handled the three boxes without requiring their events to be independent.

The example shows why an expectation can be easier than a complete distribution. Counting every arrangement with one, two or three occupied boxes is possible, but unnecessary for this particular question.

## Variance and its algebra

**Definition 7.6 (Variance and standard deviation).** If $\mathbb E[X^2]<\infty$, define
$$
\operatorname{Var}(X)=\mathbb E[(X-\mathbb E X)^2].
$$
The standard deviation is the nonnegative square root $\sqrt{\operatorname{Var}(X)}$.

The second-moment assumption ensures a finite expectation as well: $|x|\le1+x^2$, so $\mathbb E|X|\le1+\mathbb E[X^2]$. Variance is nonnegative because the squared deviation is nonnegative. It is zero exactly when $X=\mathbb E X$ with probability one. For discrete laws this follows because a sum of nonnegative terms is zero only when every positive-mass value has zero deviation.

**Proposition 7.7 (Variance identities).** With a finite second moment and real constants $a,b$,
$$
\operatorname{Var}(X)=\mathbb E[X^2]-(\mathbb E X)^2,
\qquad
\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X).
$$

*Proof.* Writing $\mu=\mathbb E X$, expand $(X-\mu)^2=X^2-2\mu X+\mu^2$ and apply linearity. Its expectation is $\mathbb E[X^2]-2\mu^2+\mu^2$. For the second identity, $\mathbb E(aX+b)=a\mu+b$, so the centred variable is $a(X-\mu)$ and its squared deviation is $a^2(X-\mu)^2$. ∎

Adding a constant changes location but not spread. Multiplying by a negative scalar reverses signs but still multiplies variance by its square. Standard deviation scales by $|a|$, preserving the original measurement units; variance has squared units.

For the score in Example 7.3, variance is $7.3-0.3^2=7.21$. A negative result from this calculation would be impossible and would indicate an error or numerical rounding problem, not a distribution with negative spread.

**Example 7.8 (Changing scale and location).** Let $X$ take values zero and two with equal probabilities. Its mean is one, second moment two, and variance one. Define $Y=3X-4$. Its values are $-4,2$, with mean $-1$.

The scaling identity gives $\operatorname{Var}(Y)=9$. Direct calculation checks it: $\mathbb E[Y^2]=(16+4)/2=10$, and $10-(-1)^2=9$. The standard deviation changed from one to three. The translation by $-4$ changed the mean, while the factor three changed the scale.

## Sums and dependence

Expanding a centred sum gives
$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)
+2\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)].
$$
The last expectation is covariance, developed systematically in Chapter 10. Finite second moments make the product integrable, since $2|uv|\le u^2+v^2$.

If $X,Y$ are independent, their joint masses factor and absolutely convergent summation gives $\mathbb E[XY]=\mathbb E X\,\mathbb E Y$. Hence the covariance is zero and the variances add. More generally, pairwise independent finite-variance variables have additive variance for their finite sum because every pair covariance vanishes. Mutual independence is sufficient but stronger than needed for this particular identity.

Dependence can change the answer substantially. If $Y=X$, then $\operatorname{Var}(X+Y)=4\operatorname{Var}(X)$, not twice the variance. If $Y=-X$, the sum is constant zero. Linearity of expectation remains valid in both examples.

## From moments to probability bounds

**Theorem 7.9 (Markov and Chebyshev).** If $X\ge0$ and $t>0$, then
$$
P(X\ge t)\le\frac{\mathbb E X}{t}.
$$
If $X$ has mean $\mu$ and finite variance, then for $\varepsilon>0$,
$$
P(|X-\mu|\ge\varepsilon)\le
\frac{\operatorname{Var}(X)}{\varepsilon^2}.
$$

*Proof.* The pointwise inequality $X\ge tI_{\{X\ge t\}}$ gives the first statement after taking expectations. Apply it to the nonnegative squared deviation $(X-\mu)^2$ with threshold $\varepsilon^2$ to obtain the second. ∎

These bounds require little knowledge of the law and can therefore be conservative. A bound above one is valid but uninformative. They are not normal approximations and do not require the variable itself to have a normal distribution.

**Example 7.10 (A finite sampling guarantee).** Let $I_1,\ldots,I_{400}$ be independent indicators, each with success probability $0.3$, and let $\widehat p$ be their average. Each has mean $0.3$ and variance $0.3(0.7)=0.21$. Thus
$$
\mathbb E\widehat p=0.3,\qquad
\operatorname{Var}(\widehat p)=\frac{0.21}{400}=0.000525.
$$
Chebyshev gives
$$
P(|\widehat p-0.3|\ge0.1)\le0.0525.
$$
This is an exact finite bound under the independent equal-probability model. It says the error is smaller than $0.1$ with probability at least $0.9475$. It does not guarantee that every sample meets the tolerance.

Since $p(1-p)\le1/4$, a bound uniform over unknown $p$ is $P(|\widehat p-p|\ge\varepsilon)\le1/(4n\varepsilon^2)$. This prepares the sample-average reasoning in the law of large numbers.

## Infinite moments and interpretation

Consider a nonnegative variable taking $2^k$ with probability $2^{-k}$ for $k\ge1$. Its masses sum to one, but its expectation is $\sum_{k\ge1}1=+\infty$. Every outcome is finite; infinite expectation describes the weighted tail, not an infinite realised value.

For a symmetric signed version assigning probability $2^{-k-1}$ to each of $2^k$ and $-2^k$, both positive and negative expected contributions diverge. The ordinary expectation is undefined. Cancelling opposite terms in a convenient order does not establish integrability.

Moment formulas therefore require their hypotheses. A law may have a finite mean and infinite variance, or no finite mean at all. Such cases will limit the sample-average and normal-approximation claims later. Always separate a theorem about moments under a model from the practical question of whether its model fits the data collection process.

## Exercises

### Exercise 7.1
<a id="expectation-variance-ex-1"></a>

A variable takes $0,2,5$ with probabilities $1/2,1/3,1/6$. Find its mean, second moment and variance.

<details><summary>Hint 1</summary>

Weight values and squared values separately.

</details>
<details><summary>Hint 2</summary>

Subtract the square of the mean from the second moment.

</details>
<details><summary>Solution</summary>

The mean is $2/3+5/6=3/2$. The second moment is $4/3+25/6=11/2$. Thus variance is $11/2-9/4=13/4$. The mean is not a possible value, which is allowed. Both moments are finite because the support is finite.

</details>

### Exercise 7.2
<a id="expectation-variance-ex-2"></a>

If $\mathbb E X=4$ and $\operatorname{Var}(X)=9$, find the mean, variance and standard deviation of $Y=2-3X$.

<details><summary>Hint 1</summary>

Expectation is linear.

</details>
<details><summary>Hint 2</summary>

Variance uses the square of the multiplier, and translation contributes nothing.

</details>
<details><summary>Solution</summary>

The mean is $2-3(4)=-10$. Variance is $(-3)^2(9)=81$, and standard deviation is nine. The negative multiplier reverses the direction of values but does not produce negative variance. The constant changes only location.

</details>

### Exercise 7.3
<a id="expectation-variance-ex-3"></a>

Five independently placed balls each choose one of two boxes uniformly. Find the expected number of empty boxes using indicators.

<details><summary>Hint 1</summary>

A specified box is empty only if every ball chooses the other box.

</details>
<details><summary>Hint 2</summary>

The empty-box indicators need not be independent for their expectations to add.

</details>
<details><summary>Solution</summary>

A specified box is empty with probability $(1/2)^5=1/32$. Summing the expectations of two empty-box indicators gives $2/32=1/16$. Their dependence is irrelevant to linearity. Independence of the ball placements was required to calculate the fifth power within each event.

</details>

### Exercise 7.4
<a id="expectation-variance-ex-4"></a>

Let $I$ indicate an event of probability $p$. Prove $\mathbb E I=p$ and $\operatorname{Var}(I)=p(1-p)$.

<details><summary>Hint 1</summary>

The indicator takes only zero and one.

</details>
<details><summary>Hint 2</summary>

Its square equals itself.

</details>
<details><summary>Solution</summary>

The expectation is $1p+0(1-p)=p$. Since $I^2=I$, the second moment is also $p$. Therefore the variance identity gives $p-p^2=p(1-p)$. The formulas include $p=0$ and $p=1$, where the variable is constant with probability one.

</details>

### Exercise 7.5
<a id="expectation-variance-ex-5"></a>

Independent variables have means two and three and variances four and five. Find the mean and variance of $2X-Y$.

<details><summary>Hint 1</summary>

The mean does not need independence, but eliminating the covariance does.

</details>
<details><summary>Hint 2</summary>

The coefficient of $Y$ is negative, but its variance contribution is still positive.

</details>
<details><summary>Solution</summary>

The mean is $2(2)-3=1$. Independence gives zero covariance, so the variance is $2^2(4)+(-1)^2(5)=21$. Without information about dependence, that variance would require an additional covariance term. The mean calculation remains unchanged.

</details>

### Exercise 7.6
<a id="expectation-variance-ex-6"></a>

A nonnegative waiting time has mean six minutes. Use Markov to bound the probability of a wait of at least twenty minutes.

<details><summary>Hint 1</summary>

The nonnegative-variable condition is part of Markov's hypothesis.

</details>
<details><summary>Hint 2</summary>

Use threshold twenty in the same units as the mean.

</details>
<details><summary>Solution</summary>

Markov gives $P(X\ge20)\le6/20=0.3$. No particular waiting-time distribution is assumed. The bound may be conservative and is not an exact probability. Mixing hours and minutes in the ratio would invalidate the numerical calculation.

</details>

### Exercise 7.7
<a id="expectation-variance-ex-7"></a>

A variable has mean ten and variance four. Bound the probability that it differs from ten by at least six.

<details><summary>Hint 1</summary>

Apply Chebyshev to a two-sided deviation.

</details>
<details><summary>Hint 2</summary>

The denominator is the squared deviation threshold.

</details>
<details><summary>Solution</summary>

The probability is at most $4/6^2=1/9$. The theorem applies to any law with the stated finite moments; normality is not required. It bounds both tails together. It does not assert that the probability equals the bound.

</details>

### Exercise 7.8
<a id="expectation-variance-ex-8"></a>

How many independent equal-probability Bernoulli trials suffice for Chebyshev's worst-case bound to make $P(|\widehat p-p|\ge0.1)\le0.05$?

<details><summary>Hint 1</summary>

Use $p(1-p)\le1/4$.

</details>
<details><summary>Hint 2</summary>

Solve $1/(4n(0.1)^2)\le0.05$.

</details>
<details><summary>Solution</summary>

The inequality becomes $1/(0.04n)\le0.05$, giving $n\ge500$. Thus five hundred trials suffice for this bound uniformly over $p$. The result is sufficient rather than a claim of minimal sample size, because Chebyshev can be conservative.

</details>

### Exercise 7.9
<a id="expectation-variance-ex-9"></a>

Explain why the law $P(X=2^k)=2^{-k}$ for $k\ge1$ has valid total mass but infinite mean.

<details><summary>Hint 1</summary>

The mass sum is a geometric series.

</details>
<details><summary>Hint 2</summary>

Every term in the expectation sum equals one.

</details>
<details><summary>Solution</summary>

The masses sum to $\sum_{k\ge1}2^{-k}=1$, defining a valid nonnegative discrete law. But $\mathbb E X=\sum_{k\ge1}2^k2^{-k}=\sum_{k\ge1}1=+\infty$. Finite outcomes and a normalised probability law do not guarantee a finite expectation.

</details>

### Exercise 7.10
<a id="expectation-variance-ex-10"></a>

Let $Y=X$ and $Z=-X$, where $X$ has variance one. Compare the variances of $X+Y$ and $X+Z$, explaining why simply adding marginal variances fails.

<details><summary>Hint 1</summary>

The two sums simplify deterministically.

</details>
<details><summary>Hint 2</summary>

Covariance is not zero merely because the marginal variances are known.

</details>
<details><summary>Solution</summary>

The first sum is $2X$, with variance four. The second is constant zero, with variance zero. Adding the two marginal variances would give two in either case and would be wrong. Dependence contributes positive covariance when variables agree and negative covariance when they cancel.

</details>

## Sources

The exposition and exercises are original. Complementary primary treatments of expected value, variance and moment bounds appear in Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapter 6 and Chapter 8, official CHANCE Project text, consulted 13 November 2026. The chapter expands the indicator and moment ideas of Euler's retained [Probability: Models Before Formulas](../../course-texts/atlas-probability-models.md).

## Summary

Expectation is a weighted average and is linear without independence when the relevant variables are integrable. Indicator sums turn counts into sums of event probabilities. Variance requires a finite second moment, scales quadratically and includes covariance terms for dependent sums.

Markov and Chebyshev turn moment information into finite probability bounds. Infinite tails can invalidate moment assumptions even when every realised value is finite. [Named discrete distributions](named-discrete-distributions.md) now derives common count and waiting-time laws from explicit mechanisms and calculates their moments.
