var e=`---
parent_id: book-introduction-to-probability
chapter_id: law-of-large-numbers
title: "The Law of Large Numbers"
level: undergraduate
license: CC BY-SA 4.0
---

# The Law of Large Numbers

A long sequence of independent repetitions often produces a stable average. The word “often” needs a mathematical meaning, and the conditions on the repetitions need to be stated. A sequence that repeats the same random observation forever does not become more informative merely because the list grows longer.

The law of large numbers connects an average across repetitions with the expectation in the underlying model. We will prove a useful version using only variance and one elementary probability inequality. The result applies to independent identically distributed observations with finite variance. It supplies an explicit finite sample bound as well as a limiting statement, so it can answer questions about a particular sample size.

Read [expectation and variance](expectation-variance.md), [independence](independence.md), and [transformations and sums](transformations-sums.md) first. All absolute first moments and second moments mentioned in the main theorem are finite. We need limits of numerical sequences but no measure theory. The more general and stronger forms of the law belong to later probability study.

Our aims are to prove the weak law, interpret its quantifiers, apply it to event frequencies and averages, and recognise failures caused by dependence or missing moments. The next chapter asks a different question: what shape describes the small remaining fluctuations?

## An average is itself a random variable

**Definition 12.1 (Sample average).** For random variables $X_1,\\ldots,X_n$, define

$$
\\overline X_n=\\frac{1}{n}\\sum_{i=1}^n X_i.
$$

If they have common finite mean $\\mu$, linearity gives $E[\\overline X_n]=\\mu$. If they are independent and have common finite variance $\\sigma^2$, then

$$
\\operatorname{Var}(\\overline X_n)=\\frac{\\sigma^2}{n}.
$$

These are statements about the distribution over possible samples. An observed average is one number produced by one sample. Its expectation being $\\mu$ does not make every observed average equal to $\\mu$, any more than a fair die's mean makes every roll equal to three and a half.

The standard deviation of the average is $\\sigma/\\sqrt n$. Multiplying the sample size by four halves that scale. The reciprocal square root is a recurring cost of independent averaging. It is not a universal law of information: biased measurements, correlated observations and distributions with infinite variance require separate analysis.

An average has the same physical units as its inputs, while its variance has squared units. A probability bound involving a tolerance $\\varepsilon$ must therefore use a ratio such as $\\sigma^2/\\varepsilon^2$. Checking units helps prevent dividing by variance where a standard deviation belongs.

## From nonnegative size to a probability bound

**Theorem 12.2 (Markov's inequality).** If $Z\\ge0$ and $E[Z]<\\infty$, then for every $a>0$,

$$
P(Z\\ge a)\\le\\frac{E[Z]}{a}.
$$

*Proof.* Pointwise, $Z\\ge a\\,1_{\\{Z\\ge a\\}}$. Taking expectations preserves the inequality, giving $E[Z]\\ge aP(Z\\ge a)$. Divide by the positive number $a$. ∎

The inequality does not require a density or a particular distribution. It uses only nonnegativity and an expectation. A threshold $a=0$ would not be allowed because the division would be meaningless.

**Theorem 12.3 (Chebyshev's inequality).** If $X$ has finite mean $\\mu$ and finite variance $\\sigma^2$, then for every $\\varepsilon>0$,

$$
P(|X-\\mu|\\ge\\varepsilon)\\le
\\frac{\\sigma^2}{\\varepsilon^2}.
$$

*Proof.* Apply Markov's inequality to the nonnegative variable $Z=(X-\\mu)^2$ and positive threshold $\\varepsilon^2$. The event $Z\\ge\\varepsilon^2$ is exactly $|X-\\mu|\\ge\\varepsilon$, and $E[Z]=\\sigma^2$. ∎

A probability is also at most one. If the displayed expression exceeds one, the effective bound is one and gives no useful numerical information. This does not make the theorem false; it means the supplied information is too weak for the requested tolerance.

Chebyshev bounds absolute deviations in both directions at once. It is usually conservative because many different distributions share the same variance. A bound is not an approximation: writing a small upper bound does not assert that the actual tail probability is close to that number.

## The finite variance weak law

**Definition 12.4 (Convergence in probability).** A sequence $A_n$ converges in probability to a constant $a$ if, for every fixed $\\varepsilon>0$,

$$
P(|A_n-a|\\ge\\varepsilon)\\longrightarrow0
\\quad\\text{as }n\\longrightarrow\\infty.
$$

“Every fixed tolerance” means we choose a positive tolerance first and then let the sample size grow. The definition alone makes no promise for a tolerance that shrinks with $n$, such as $1/n$.

**Theorem 12.5 (Weak law for finite variance iid observations).** Let $X_1,X_2,\\ldots$ be independent and identically distributed real variables with finite mean $\\mu$ and finite variance $\\sigma^2$. Then for every integer $n\\ge1$ and every $\\varepsilon>0$,

$$
P(|\\overline X_n-\\mu|\\ge\\varepsilon)
\\le \\min\\!\\left(1,\\frac{\\sigma^2}{n\\varepsilon^2}\\right).
$$

In particular $\\overline X_n$ converges in probability to $\\mu$.

*Proof.* Linearity gives $E[\\overline X_n]=\\mu$. Independence and the finite second moments give variance $\\sigma^2/n$ by the sum variance formula. Applying Chebyshev's inequality to $\\overline X_n$ proves the displayed bound. For each fixed positive $\\varepsilon$, its second argument tends to zero as $n$ grows. The required deviation probability therefore tends to zero. ∎

The proof identifies the role of every assumption. Identical distribution supplies a common mean and variance. Independence removes the covariance terms. Finite variance makes Chebyshev applicable. The theorem remains true for some broader classes, but this proof does not establish all of them.

If $\\sigma^2=0$, each observation equals $\\mu$ with probability one, and the deviation probability is zero for every sample size. There is no need to divide by $\\sigma$ anywhere in the law. This distinguishes it from the usual standardised central limit theorem, which requires positive variance.

## Worked Example 12.6: estimating an event frequency

Suppose each of $n$ independent repetitions of an experiment produces an event $A$ with the same probability $p$. Let $I_i$ be its indicator and let $\\widehat p_n$ be the observed fraction of successes.

The indicators are iid Bernoulli variables, so their mean is $p$ and variance is $p(1-p)$. The weak law gives

$$
P(|\\widehat p_n-p|\\ge\\varepsilon)
\\le\\frac{p(1-p)}{n\\varepsilon^2}
\\le\\frac{1}{4n\\varepsilon^2}.
$$

The last inequality follows from $p(1-p)=1/4-(p-1/2)^2\\le1/4$. It removes the unknown parameter from the bound.

To make the chance of an error of at least $0.02$ at most $0.05$, it is sufficient to choose

$$
n\\ge\\frac{1}{4(0.05)(0.02)^2}=12500.
$$

This is a guaranteed upper bound under the iid model, not a claim that twelve thousand five hundred observations are always necessary. A sharper method can require fewer, but it must justify its stronger information.

Nor does the calculation prove that a real sampling scheme is independent or representative. Repeatedly asking the same person a question would produce dependent answers. Increasing that number of repetitions does not turn the sample into independent observations from a population.

## Worked Example 12.7: averaging bounded measurements

An instrument records iid measurements between two and eight units. Suppose its mean is $\\mu$, and no more detailed distribution is known. Obtain a finite sample guarantee for the average.

For any variable in an interval $[a,b]$, the variance is at most $(b-a)^2/4$. To see this, let $c=(a+b)/2$. Then $(X-c)^2\\le(b-a)^2/4$. Also

$$
E[(X-c)^2]=\\operatorname{Var}(X)+(E[X]-c)^2.
$$

Dropping the nonnegative second term proves the variance bound. Here it gives $\\sigma^2\\le9$.

For tolerance $0.3$ and failure probability at most $0.1$, Chebyshev supplies the sufficient condition $9/(n(0.3)^2)\\le0.1$, or $n\\ge1000$. The result does not depend on symmetry, a density, or the instrument's exact distribution within the interval.

However, a fixed calibration error is not averaged away. If every reading equals the true quantity plus $0.4$ plus an independent zero-mean error, the average converges to the true quantity plus $0.4$. The law targets the mean of the readings, not a different desired parameter. Precision and accuracy are separate questions even in this elementary model.

## What the theorem does and does not say

A success frequency approaching $p$ does not force the count difference from $np$ to approach zero. Since $\\widehat p_n-p=(S_n-np)/n$, an absolute discrepancy in the count can grow while its ratio to the number of trials shrinks. For a fair coin, count fluctuations typically have square root scale; the proportion fluctuations have reciprocal square root scale.

The law also does not require frequencies to move steadily towards their target. A new observation can move an average farther away. The theorem controls the distribution at large fixed sample sizes, rather than asserting monotone improvement along every realised path.

Most importantly, past imbalance does not alter the next success probability in an independent model. If a fair coin has produced many heads, the next toss is still fair. The long-run proportion becomes stable because the growing denominator makes earlier deviations less influential, not because future tosses compensate for the past.

The definition of convergence in probability says that the chance of a fixed-size error at time $n$ tends to zero. A stronger statement says that with probability one a realised path eventually stays within each tolerance. This is almost sure convergence. The strong law for iid integrable variables is a classical theorem, but we do not prove it here or infer it from Chebyshev alone. The distinction concerns the order in which a path, a tolerance and an eventual time are selected.

## Worked Example 12.8: dependence can stop averaging

Choose a single fair sign $Z$, taking $-1$ and $1$ with equal probabilities, and set $X_i=Z$ for every positive integer $i$. Each observation has mean zero and variance one, and all share the same distribution.

Nevertheless $\\overline X_n=Z$ for every $n$. Therefore $P(|\\overline X_n|>1/2)=1$, which never decreases. The weak law's conclusion fails because the observations are completely dependent.

The variance calculation reveals the cause. Every pair has covariance one, so

$$
\\operatorname{Var}(\\overline X_n)
=\\frac{n+n(n-1)}{n^2}=1.
$$

The diagonal variance terms alone would contribute $1/n$, but the covariance terms fill the gap. Applying the iid formula would erase precisely the information that matters.

This example also separates identical distribution from independence. Recording the same random result repeatedly gives identical marginal laws but no additional random information. A large table is not necessarily a large independent sample.

## Broader uses and limits

The same argument applies to averages of functions of iid observations. If $g(X_i)$ has finite variance, then its average converges in probability to $E[g(X_1)]$. Choosing $g$ as an event indicator estimates a probability. Choosing $g(x)=x^2$ estimates a second moment only if the necessary variance of $X^2$, hence a finite fourth moment, is available for this particular proof.

We can also read the Chebyshev calculation with a shrinking tolerance $\\varepsilon_n$. The bound tends to zero provided $n\\varepsilon_n^2$ tends to infinity. For example $\\varepsilon_n=n^{-1/4}$ works under finite variance; $\\varepsilon_n=n^{-1}$ does not yield a vanishing bound. Failure of a bound to vanish is not proof that the true probability fails to vanish, but it marks the limit of this argument.

There are finite-mean distributions with infinite variance for which a weak law still holds. Our finite variance theorem does not decide those cases. When the mean itself does not exist, even the proposed limiting target may be undefined. It is better to state a theorem that applies than to attach the phrase “law of averages” to every long calculation.

In [simulation and Monte Carlo](simulation-monte-carlo.md), averaging becomes a numerical method. The theorem gives a reason for consistency and a finite error bound, while the next chapter describes a commonly useful approximation for the distribution of the error.

## Exercises

### Exercise 12.1
<a id="law-of-large-numbers-ex-1"></a>

A nonnegative random variable has mean six. Bound the probability that it is at least thirty. Is the bound an approximation?

<details>
<summary>Hint 1</summary>

Use Markov's inequality with a positive threshold.
</details>
<details>
<summary>Hint 2</summary>

The expectation is divided by thirty.
</details>
<details>
<summary>Solution</summary>

The probability is at most $6/30=1/5$. This is an upper bound, not an estimate of the probability's actual size. For example a variable constantly equal to six has that mean but zero chance of reaching thirty.
</details>

### Exercise 12.2
<a id="law-of-large-numbers-ex-2"></a>

A variable has mean ten and variance four. Bound $P(|X-10|\\ge5)$.

<details>
<summary>Hint 1</summary>

Apply Chebyshev to the centred variable.
</details>
<details>
<summary>Hint 2</summary>

Square the deviation threshold.
</details>
<details>
<summary>Solution</summary>

Chebyshev gives $4/25$. The denominator is twenty five, not five, because the proof applies Markov's inequality to the squared deviation. No normality or independence assumptions are needed for this bound on a single variable.
</details>

### Exercise 12.3
<a id="law-of-large-numbers-ex-3"></a>

Iid observations have mean three and variance nine. How large a sample suffices to make $P(|\\overline X_n-3|\\ge1/2)\\le1/20$?

<details>
<summary>Hint 1</summary>

The variance of the average is nine divided by sample size.
</details>
<details>
<summary>Hint 2</summary>

Solve $9/(n/4)\\le1/20$.
</details>
<details>
<summary>Solution</summary>

The Chebyshev bound is $36/n$, so $n\\ge720$ suffices. This is a distribution-free guarantee within the stated moment and independence assumptions. It need not be the smallest sample size for the actual underlying law.
</details>

### Exercise 12.4
<a id="law-of-large-numbers-ex-4"></a>

For independent Bernoulli trials, choose a sample size ensuring absolute frequency error below $0.05$ with failure probability at most $0.1$, uniformly over the unknown success probability.

<details>
<summary>Hint 1</summary>

Use the maximum Bernoulli variance.
</details>
<details>
<summary>Hint 2</summary>

Require $1/(4n(0.05)^2)\\le0.1$.
</details>
<details>
<summary>Solution</summary>

Since $p(1-p)\\le1/4$, it is sufficient that $n\\ge1000$. The guarantee is $P(|\\widehat p-p|\\ge0.05)\\le0.1$, so the complementary strict error event has probability at least $0.9$. The denominator counts independent trials, not correlated repeated records.
</details>

### Exercise 12.5
<a id="law-of-large-numbers-ex-5"></a>

Prove that an iid sample of uniform variables on $(0,1)$ has average converging in probability to one half.

<details>
<summary>Hint 1</summary>

State the common finite mean and variance.
</details>
<details>
<summary>Hint 2</summary>

Insert them into the finite sample inequality.
</details>
<details>
<summary>Solution</summary>

Each variable has mean $1/2$ and variance $1/12$. Thus for every fixed $\\varepsilon>0$, $P(|\\overline U_n-1/2|\\ge\\varepsilon)\\le1/(12n\\varepsilon^2)\\to0$. This is exactly the definition of convergence in probability.
</details>

### Exercise 12.6
<a id="law-of-large-numbers-ex-6"></a>

Why does a sample average converging in probability to zero not imply that its unscaled sum converges in probability to zero?

<details>
<summary>Hint 1</summary>

Multiplication by a growing number changes the question.
</details>
<details>
<summary>Hint 2</summary>

Consider independent fair signs and the variance of their sum.
</details>
<details>
<summary>Solution</summary>

The average is the sum divided by $n$, so a small average allows an increasing unscaled discrepancy. A direct example is the deterministic sequence of observations $X_i=\\sqrt i-\\sqrt{i-1}$. Its sum is $\\sqrt n$, which diverges, while its average is $1/\\sqrt n$, which tends to zero. Convergence of a ratio alone does not control its numerator.
</details>

### Exercise 12.7
<a id="law-of-large-numbers-ex-7"></a>

Suppose iid variables have mean $\\mu$ and variance $\\sigma^2<\\infty$. Show that $P(|\\overline X_n-\\mu|\\ge n^{-1/3})\\to0$.

<details>
<summary>Hint 1</summary>

Chebyshev can be applied separately at each positive tolerance.
</details>
<details>
<summary>Hint 2</summary>

Simplify $n(n^{-1/3})^2$.
</details>
<details>
<summary>Solution</summary>

The bound is $\\sigma^2/[n n^{-2/3}]=\\sigma^2n^{-1/3}$, which tends to zero. This conclusion uses the explicit finite sample inequality; it does not follow merely by substituting a changing tolerance into the definition with fixed tolerances.
</details>

### Exercise 12.8
<a id="law-of-large-numbers-ex-8"></a>

Let $Z$ be a fair sign and $X_i=(-1)^iZ$. Determine the averages and whether they converge to zero in probability, despite dependence.

<details>
<summary>Hint 1</summary>

Pair consecutive terms.
</details>
<details>
<summary>Hint 2</summary>

An odd number of terms leaves one sign divided by $n$.
</details>
<details>
<summary>Solution</summary>

For even $n$ the sum is zero. For odd $n$ it is $-Z$, so the absolute average is $1/n$. Hence the averages converge to zero for every outcome, and therefore in probability. Independence is sufficient for the theorem, but this example shows it is not necessary for every possible sequence.
</details>

### Exercise 12.9
<a id="law-of-large-numbers-ex-9"></a>

A sensor has iid error $0.2+W_i$, where $E[W_i]=0$ and $\\operatorname{Var}(W_i)=1$. To what does its average error converge in probability?

<details>
<summary>Hint 1</summary>

The theorem targets the error distribution's mean.
</details>
<details>
<summary>Hint 2</summary>

Adding a constant does not change variance.
</details>
<details>
<summary>Solution</summary>

The average error has mean $0.2$ and variance $1/n$. Chebyshev shows convergence in probability to $0.2$, not zero. Independent noise is reduced by averaging, but the shared systematic offset remains.
</details>

### Exercise 12.10
<a id="law-of-large-numbers-ex-10"></a>

Iid variables have a finite fourth moment. Explain how this chapter proves that the average of their squares converges in probability to $E[X_1^2]$.

<details>
<summary>Hint 1</summary>

Apply the theorem to a new sequence of transformed variables.
</details>
<details>
<summary>Hint 2</summary>

The variance of a squared observation uses its fourth moment.
</details>
<details>
<summary>Solution</summary>

Set $Y_i=X_i^2$. These variables remain iid. Their mean is finite, and $\\operatorname{Var}(Y_i)=E[X_i^4]-(E[X_i^2])^2<\\infty$. The finite variance weak law therefore applies to their average. A finite second moment alone would not justify this particular variance proof for the squares.
</details>

## Sources

The weak law proved here is the elementary Chebyshev version. See [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf), chapter 8, and the probability course and book linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The stronger iid strong law is mentioned as a theorem for later study, without claiming a proof here. Examples and exercises are original.

## Summary

Independent finite variance observations have average variance $\\sigma^2/n$. Chebyshev turns that calculation into a finite sample guarantee and proves convergence in probability to the common mean. The law does not enforce compensation, monotone improvement, removal of systematic error or disappearance of an unscaled count discrepancy. Its hypotheses determine when the proof applies. The [central limit theorem](central-limit-theorem.md) describes the distribution of fluctuations after a different, square root, rescaling.
`;export{e as default};