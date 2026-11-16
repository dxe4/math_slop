
# Sampling Variation: What Could Happen Next Time?

An honest sampling rule can produce different data tomorrow. That is not a defect in the rule; it is the variation that makes statistical uncertainty necessary. If a clinic randomly selects 20 eligible visits today and another 20 tomorrow, the two average waiting times will usually differ even when the clinic has not changed.

This chapter builds the language needed to reason about that difference. We begin with finite lists of possibilities, where every probability can be checked by counting. We then turn outcomes into numbers, average those numbers, and distinguish the spread of individual observations from the spread of a statistic. Only after that foundation will we use the normal curve and simulation.

The data used below are literal synthetic fixtures created for Math Atlas. Fixture `R08-POP-v1` is the four-value finite population `c(2, 4, 6, 8)`, measured in score points; its key is position 1 through 4. Fixture `R08-RARE-v1` is a declared two-outcome model, not an observed dataset. Version 1 has no missing values or exclusions. The literal values and model probabilities in this document are their canonical provenance.

## Possibilities before percentages

**Definition R-DEF-experiment (random experiment).** A random experiment is a repeatable procedure whose possible results are specified but whose next result is not known. An **outcome** is one complete possible result. The **sample space**, written $\Omega$, is the set of all outcomes. An **event** is a subset of $\Omega$.

Consider two independent fair tosses of a coin. Recording order gives

$$
\Omega=\{HH,HT,TH,TT\}.
$$

“Exactly one head” is the event $\{HT,TH\}$. “At least one head” is $\{HH,HT,TH\}$. An event is therefore a collection of outcomes, not a number.

**Definition R-DEF-probability (probability).** A probability assigns each event $A$ a number $\Pr(A)$ satisfying three rules: $0\leq\Pr(A)\leq1$; $\Pr(\Omega)=1$; and probabilities add for disjoint events, which cannot happen together. For a finite space of equally likely outcomes,

$$
\Pr(A)=\frac{\text{number of outcomes in }A}{\text{number of outcomes in }\Omega}.
$$

Fairness and independence justify the equal probabilities $1/4$ here; merely listing four outcomes does not. Exactly one head has probability $2/4=1/2$. The complement rule follows because $A$ and “not $A$” split the whole space: $\Pr(A^c)=1-\Pr(A)$.

Two pieces of event language prevent common counting errors. The **union** $A\cup B$ means that $A$ or $B$ or both occurs. The **intersection** $A\cap B$ means both occur. If events overlap, adding their probabilities counts the overlap twice, so

$$
\Pr(A\cup B)=\Pr(A)+\Pr(B)-\Pr(A\cap B).
$$

For the two tosses, let $A$ be “the first toss is heads” and $B$ be “the second toss is heads.” Each has probability $1/2$, their intersection $\{HH\}$ has probability $1/4$, and their union has probability $3/4$.

Do not confuse disjoint events with independent events. Disjoint events cannot occur together. Independent events can occur together, and their intersection probability is the product of their probabilities. The events $A$ and $B$ above are independent because $1/4=(1/2)(1/2)$. By contrast, “zero heads” and “two heads” are disjoint but not independent: their intersection probability is zero, while the product of their positive probabilities is $1/16$.

A probability belongs to a mechanism. If a coin bends or a person chooses which sector of a spinner to point at, equal counting is no longer justified. The arithmetic may still be correct for an assumed model, but the model-to-world connection needs evidence from the design or process.

## Worked example 1: from coin sequences to a count

**Example 8.1 (Worked calculation).**

Let $X$ be the number of heads. The four sequences map to the numbers $2,1,1,0$. Thus $X$ has the probability table

| $x$ | 0 | 1 | 2 |
|---:|---:|---:|---:|
| $\Pr(X=x)$ | $1/4$ | $1/2$ | $1/4$ |

**Definition R-DEF-random-variable (random variable).** A random variable is a function that assigns a number to every outcome of a random experiment. Before the experiment, $X$ is random; afterward, its realized value $x$ is observed.

**Definition R-DEF-expectation (expectation).** For a random variable with finitely many values, its expectation is the probability-weighted average

$$
E(X)=\sum_x x\Pr(X=x).
$$

Expectation describes the long-run center of the stated model. It need not itself be a possible outcome. Here

$$
E(X)=0(1/4)+1(1/2)+2(1/4)=1.
$$

**Definition R-DEF-variance (variance).** If $\mu=E(X)$, the variance and standard deviation of a random variable are

$$
\operatorname{Var}(X)=E\{(X-\mu)^2\}
=\sum_x(x-\mu)^2\Pr(X=x),
\qquad
\operatorname{SD}(X)=\sqrt{\operatorname{Var}(X)}.
$$

The square root is the nonnegative one. Variance has squared units; SD returns to the units of $X$. For the head count, the variance is $1/2$ and the SD is $\sqrt{1/2}\approx0.707$ heads.

Expectation is not a forecast that must occur on the next repetition. A fair die has expectation 3.5 even though no face is labeled 3.5. Nor does expectation ignore rare values: each value contributes the product of its size and probability. A very large value with a small probability may materially move the expectation.

Centering explains how a change of units affects spread. If every value is increased by a constant $a$, both $X$ and its mean move by $a$, so their difference does not change. If every value is multiplied by $b$, every centered distance is multiplied by $b$, every squared distance by $b^2$, and SD by $|b|$. These are exact identities. They apply to the probability variance here and, with the appropriate denominator, to the observed-data variance introduced in Chapter 5.

The following code represents the table directly. `0:2` creates the integers from 0 through 2, `sum` adds its input, `stopifnot` checks stated invariants, and `dbinom` computes binomial probabilities. `data.frame` combines equal-length vectors as columns in a displayed table. R's `var` is deliberately absent: `var(c(0, 1, 2))` would treat three observed values as a sample with denominator $3-1$, rather than use the probabilities in this model.

```r
head_count <- 0:2
head_probability <- c(1 / 4, 1 / 2, 1 / 4)
head_mean <- sum(head_count * head_probability)
head_variance <- sum((head_count - head_mean)^2 * head_probability)

tol_head <- 1e-10 + 1e-8 * abs(c(1, 1 / 2))
stopifnot(abs(sum(head_probability) - 1) <= 1e-10)
stopifnot(abs(head_mean - 1) <= tol_head[1L])
stopifnot(abs(head_variance - 1 / 2) <= tol_head[2L])
stopifnot(all(abs(head_probability - dbinom(0:2, size = 2, prob = 1 / 2)) <= 1e-10))

data.frame(
  heads = head_count,
  probability = head_probability,
  contribution_to_mean = head_count * head_probability
)
```

This table also separates a mathematical distribution from an empirical distribution imported from Chapter 5. An empirical distribution puts mass on values actually recorded in data. The probability table above comes from the coin model before any tosses are observed.

## Bernoulli trials, independence, and binomial counts

**Definition R-DEF-bernoulli (Bernoulli random variable).** A Bernoulli random variable $I$ equals 1 for success and 0 for failure, with $\Pr(I=1)=p$ and $\Pr(I=0)=1-p$, where $0\leq p\leq1$. Direct substitution gives

$$
E(I)=p,
\qquad
\operatorname{Var}(I)=(0-p)^2(1-p)+(1-p)^2p=p(1-p).
$$

The labels “success” and “failure” have no moral meaning. A defective part can be coded as 1 if that is the event being counted.

**Definition R-DEF-independence (independence).** Random variables $X$ and $Y$ are independent when learning the value of one does not change the probability law of the other. Equivalently, for all events determined by them, $\Pr(X\in A,Y\in B)=\Pr(X\in A)\Pr(Y\in B)$. Mutual independence of a collection requires this product rule for every finite subcollection, a stronger condition than merely checking pairs.

**Definition R-DEF-iid (independent and identically distributed).** Random variables are iid when they are mutually independent and all have the same probability distribution. “Independent” and “identically distributed” are separate claims. Repeated measurements on one person may share a distribution yet be dependent; observations from two different machines may be independent yet have different failure probabilities.

**Definition R-DEF-binomial (binomial random variable).** If $I_1,\ldots,I_n$ are iid Bernoulli variables with the same success probability $p$, then $X=I_1+\cdots+I_n$, the number of successes, has the binomial distribution with parameters $n$ and $p$. Its probability at $k=0,\ldots,n$ is

$$
\Pr(X=k)={n\choose k}p^k(1-p)^{n-k}.
$$

Because expectation adds, $E(X)=np$. To find the variance, center each indicator: $Z_i=I_i-p$. On expanding $(Z_1+\cdots+Z_n)^2$, independence makes every cross expectation $E(Z_iZ_j)=E(Z_i)E(Z_j)=0$ for $i\ne j$. The $n$ squared terms each have expectation $p(1-p)$, so $\operatorname{Var}(X)=np(1-p)$. This is a proof from the indicator construction, not a pattern guessed from software output.

## Averages vary less when observations are iid

Suppose $X_1,\ldots,X_n$ are random observations and

$$
\bar X=\frac{1}{n}\sum_{i=1}^nX_i.
$$

**Definition R-DEF-sampling-distribution (sampling distribution).** The sampling distribution of a statistic is its probability distribution under repeated use of a specified sampling mechanism. It describes possible values of the statistic, such as $\bar X$, rather than the distribution of individual observations.

**Definition R-DEF-standard-error (standard error).** The standard error of a statistic is the SD of its sampling distribution under a specified repetition mechanism. An estimated SE substitutes estimates for unknown model quantities.

The capital and lowercase notation keeps two stages apart. Before sampling, $X_i$ and $\bar X$ denote random quantities with distributions. After one sample arrives, $x_i$ and $\bar x$ are fixed observed numbers. We can calculate another statistic from the observed values, but the already observed $\bar x$ does not keep fluctuating on the page. The sampling distribution asks what $\bar X$ would have been under fresh repetitions of the mechanism.

Unbiasedness and precision are also different. The equality $E(\bar X)=\mu$ says the distribution of $\bar X$ is centered at the target. It does not say every sample mean equals $\mu$, and it does not say the distribution is narrow. Variance and SE quantify its spread. A procedure can be centered but noisy, or tightly concentrated around the wrong target if the sampling rule systematically excludes relevant units.

**Theorem R-THM-iid-mean (moments of an iid mean; proved here).** If $X_1,\ldots,X_n$ are iid, $n\geq1$, $E(X_i)=\mu$, and $\operatorname{Var}(X_i)=\sigma^2<\infty$, then

$$
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},
\qquad
\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}.
$$

**Proof.** Averaging the $n$ expectations gives $E(\bar X)=n\mu/n=\mu$. Let $Z_i=X_i-\mu$. Then $E(Z_i)=0$. Expand

$$
E\{(\bar X-\mu)^2\}
=\frac{1}{n^2}E\left\{\left(\sum_iZ_i\right)^2\right\}.
$$

The squared terms contribute $n\sigma^2$. For $i\ne j$, independence gives $E(Z_iZ_j)=E(Z_i)E(Z_j)=0$, so all cross terms vanish. The variance is therefore $n\sigma^2/n^2=\sigma^2/n$. Taking the nonnegative square root proves the SE formula. ∎

The finite second-moment assumption makes every displayed quantity finite. Independence removes the cross terms; identical distributions supply one common $\mu$ and $\sigma^2$. The theorem does not follow from a large sample size alone.

Recall the Chapter 5 distinction. For observed data $x_1,\ldots,x_n$, R computes `var(x)` using

$$s^2=\frac{1}{n-1}\sum_i(x_i-\bar x)^2,$$

and `sd(x)` returns $s$. Those describe spread among observed values. If iid sampling is defensible, $s/\sqrt n$ is an estimated SE for $\bar X$. Changing measurement units by $a+bx$ multiplies variance by $b^2$ and SD or SE by $|b|$.

```r
observed_seconds <- c(40, 50, 60, 70)
observed_minutes <- observed_seconds / 60
sample_sd_seconds <- sd(observed_seconds)
sample_sd_minutes <- sd(observed_minutes)
estimated_se_seconds <- sample_sd_seconds / sqrt(length(observed_seconds))

stopifnot(abs(var(observed_seconds) - 500 / 3) <= (1e-10 + 1e-8 * abs(500 / 3)))
stopifnot(abs(sample_sd_minutes - sample_sd_seconds / 60) <= 1e-10)
stopifnot(abs(estimated_se_seconds - sample_sd_seconds / 2) <= 1e-10)
c(sd_seconds = sample_sd_seconds, estimated_se_seconds = estimated_se_seconds)
```

Doubling $n$ does not halve an iid mean's SE; it multiplies it by $1/\sqrt2$. To halve the SE while keeping $\sigma$ fixed requires four times as many observations.

The four spread quantities used in this book answer distinct questions:

| Quantity | What varies? | Typical expression |
|---|---|---|
| SD of observations | Individual observations under a model, or observed values descriptively | $\sigma$ or $s$ |
| Exact SE | A statistic under a specified repetition mechanism | $\operatorname{SD}(T)$ |
| Estimated SE | The same statistic, with unknown inputs estimated from data | for an iid mean, $s/\sqrt n$ |
| Monte Carlo SE | A numerical answer across repeated simulation runs | for an indicator mean, $\sqrt{\hat q(1-\hat q)/B}$ |

The table is a vocabulary guide, not a license to use a formula without checking its assumptions. In particular, $s/\sqrt n$ imports the iid model; R does not infer that design from a numeric vector.

## Worked example 2: sampling four fixed values

**Example 8.2 (Worked calculation).**

Now the target is the finite population $2,4,6,8$ points. Its size is $N=4$, its mean is $\mu=5$, and its descriptive variance uses denominator $N$:

$$
\sigma_N^2=\frac1N\sum_{i=1}^N(y_i-\mu)^2=5.
$$

A simple random sample of size $n=2$ without replacement chooses each unordered pair equally. Its six possible means are $3,4,5,5,6,7$. Their mean is 5 and their probability-weighted variance is

$$
\frac{(3-5)^2+(4-5)^2+0^2+0^2+(6-5)^2+(7-5)^2}{6}=\frac53.
$$

With replacement, there are 16 equally likely ordered pairs. Repeats such as $(2,2)$ are possible. The two draws are iid with variance 5, so the iid theorem gives mean variance $5/2=2.5$. Sampling without replacement is dependent: after drawing 2, that value cannot appear again. Here that dependence reduces the mean variance.

Why six in one case and sixteen in the other? Without replacement, order does not affect the mean, so the six two-element subsets can be assigned equal mass. If we instead listed twelve ordered sequences without replacement, each unordered pair would occur in two orders and would still receive total probability $2/12=1/6$. With replacement, four choices are available on each of two draws, giving $4\times4=16$ ordered sequences. Collapsing those sequences carelessly would make unequal events look equal: the mean 2 comes only from $(2,2)$, while the mean 3 comes from both $(2,4)$ and $(4,2)$.

Notice also what “population” means here. The four values are the entire declared finite target, so the theorem below describes design variation from selecting among these fixed units. In the with-replacement version, the same four values define a probability distribution for independent draws. The arithmetic looks similar, but the repeated mechanisms and their targets differ.

In the code, `combn(..., 2L)` places every two-index subset in a matrix column. `apply(matrix, 2L, function)` runs the supplied function down those columns; the `2L` means the column margin. `expand.grid` constructs all combinations of its input columns, so here it records all 16 ordered pairs. These constructions make the possible samples inspectable before any probabilities are summarized.

```r
population_points <- c(2, 4, 6, 8)
N_population <- length(population_points)
population_mean <- mean(population_points)
population_variance <- mean((population_points - population_mean)^2)

without_pairs <- combn(seq_along(population_points), 2L)
without_means <- apply(
  without_pairs,
  2L,
  function(index) mean(population_points[index])
)
with_pairs <- expand.grid(first = seq_along(population_points), second = seq_along(population_points))
with_means <- (population_points[with_pairs$first] + population_points[with_pairs$second]) / 2

without_variance <- mean((without_means - population_mean)^2)
with_variance <- mean((with_means - population_mean)^2)

stopifnot(identical(without_means, c(3, 4, 5, 5, 6, 7)))
stopifnot(abs(mean(without_means) - 5) <= 1e-10)
stopifnot(abs(without_variance - 5 / 3) <= (1e-10 + 1e-8 * abs(5 / 3)))
stopifnot(abs(with_variance - 2.5) <= (1e-10 + 1e-8 * abs(2.5)))

data.frame(
  scheme = c("without replacement", "with replacement"),
  possible_ordered_or_unordered_samples = c(6L, 16L),
  mean_of_sample_mean = c(mean(without_means), mean(with_means)),
  variance_of_sample_mean = c(without_variance, with_variance)
)
```

**Theorem R-THM-finite-mean (finite-population correction; proved here).** Let a fixed finite population $y_1,\ldots,y_N$ have $N>1$, mean $\mu=N^{-1}\sum_i y_i$, and variance $\sigma_N^2=N^{-1}\sum_i(y_i-\mu)^2$. A uniform simple random sample without replacement of size $1\leq n\leq N$ has

$$
E(\bar Y)=\mu,
\qquad
\operatorname{Var}(\bar Y)=\frac{N-n}{N-1}\frac{\sigma_N^2}{n}.
$$

**Proof.** Let $I_i$ equal 1 when population unit $i$ is selected and 0 otherwise. Uniform sampling gives $E(I_i)=n/N$. For distinct $i,j$, both are included with probability $n(n-1)/\{N(N-1)\}$. Consequently

$$
E\{(I_i-n/N)^2\}=\frac{n(N-n)}{N^2},
$$

and direct subtraction of the product of inclusion probabilities gives

$$
E\{(I_i-n/N)(I_j-n/N)\}=-\frac{n(N-n)}{N^2(N-1)}.
$$

Write $a_i=y_i-\mu$. Then $\sum_i a_i=0$, so $\sum_{i<j}a_i a_j=-\tfrac12\sum_i a_i^2=-N\sigma_N^2/2$. Also $\bar Y-\mu=n^{-1}\sum_i I_i a_i$. Expanding its squared expectation, substituting the two expressions above, and combining the squared and cross terms yields

$$
\operatorname{Var}(\bar Y)
=\frac1{n^2}\left[
\frac{n(N-n)}{N^2}N\sigma_N^2
+2\left\{-\frac{n(N-n)}{N^2(N-1)}\right\}
\left\{-\frac{N\sigma_N^2}{2}\right\}
\right]
=\frac{N-n}{N-1}\frac{\sigma_N^2}{n}.
$$

The same inclusion probabilities show $E(\bar Y)=\mu$. ∎

The factor $(N-n)/(N-1)$ is the finite-population correction for variance under this denominator-$N$ convention. When $n=N$, the sample is a census, the mean is always $\mu$, and the variance is zero. The iid formula does not apply to these dependent draws.

Some texts define a finite-population variance using denominator $N-1$. Under that convention the correction is often written in a different-looking form. Mixing a variance from one convention with a correction from the other causes a factor error. This book consistently uses $\sigma_N^2=N^{-1}\sum_i(y_i-\mu)^2$, which is why the theorem has $(N-n)/(N-1)$ multiplying $\sigma_N^2/n$.

## The normal model is an area model

**Definition R-DEF-normal (normal distribution).** A normal random variable with mean $\mu$ and SD $\sigma>0$ has the specific probability-density curve

$$
f(x)=\frac{1}{\sigma\sqrt{2\pi}}
\exp\left\{-\frac{(x-\mu)^2}{2\sigma^2}\right\},
\qquad -\infty<x<\infty.
$$

Here $\pi\approx3.14159$ is the familiar circle constant, and $\exp(u)$ means $e^u$, where $e\approx2.71828$. The squared distance $(x-\mu)^2$ is never negative. Its minus sign makes the curve highest at $x=\mu$ and makes the height fall equally on either side as $x$ moves away from $\mu$. The factor $1/(\sigma\sqrt{2\pi})$ sets the height so that the total area under this curve is 1. The positive number $\sigma$ controls the horizontal scale; for this distribution it is the SD. We write $X\sim N(\mu,\sigma^2)$.

Probability is area under this particular curve: $\Pr(a\leq X\leq b)$ is its area between $a$ and $b$. A curve merely described as symmetric and bell-shaped, even with the same mean and SD, need not follow this formula and can assign different probabilities to the tails or the center. Those qualitative features therefore do not define a normal distribution. The displayed density does.

The curve's height is not itself a probability. A continuous random variable assigns probability zero to any single exact point even though intervals have positive probability. No calculus is required to use the normal functions in R. `dnorm(x, mean, sd)` returns the density curve's height at `x`, not an area. `pnorm(q, mean, sd)` returns the area to the left of `q`; `qnorm(p, mean, sd)` reverses that question and returns the location with area `p` to its left.

Standardization expresses distance in SD units. If $X\sim N(\mu,\sigma^2)$, then $Z=(X-\mu)/\sigma$ has the standard normal distribution $N(0,1)$. For $X\sim N(100,15^2)$, the endpoints 85 and 115 standardize to $-1$ and $1$. The area between them is therefore the standard-normal area between $-1$ and $1$. This change of units moves and rescales the horizontal axis; it does not change the probability area.

Tail direction matters in code. The default `pnorm(115, 100, 15)` is $\Pr(X\leq115)$. The upper-tail probability $\Pr(X>115)$ can be requested as `pnorm(115, 100, 15, lower.tail = FALSE)`. Subtracting a left-tail value from 1 is mathematically equivalent, but the explicit upper-tail argument states the intended event and is numerically preferable far into a tail. A quantile question runs in the opposite direction: it supplies an area and asks for a boundary.

For $X\sim N(100,15^2)$, the probability between 85 and 115 is the difference of two left-tail areas. The 90th percentile is the point with 0.90 area to its left.

```r
normal_middle_probability <- pnorm(115, mean = 100, sd = 15) -
  pnorm(85, mean = 100, sd = 15)
normal_ninetieth_percentile <- qnorm(0.90, mean = 100, sd = 15)
normal_height_at_mean <- dnorm(100, mean = 100, sd = 15)

stopifnot(abs(pnorm(0) - 0.5) <= 1e-10)
stopifnot(abs(normal_middle_probability - 0.682689492137086) <= 1e-10)
stopifnot(abs(pnorm(normal_ninetieth_percentile, 100, 15) - 0.90) <= 1e-10)
stopifnot(abs(normal_height_at_mean - 1 / (15 * sqrt(2 * pi))) <= 1e-10)
c(
  probability_between_85_and_115 = normal_middle_probability,
  ninetieth_percentile = normal_ninetieth_percentile,
  density_height_at_mean = normal_height_at_mean
)
```

If a sampling distribution is exactly normal, these are exact model probabilities. If normality comes only from a large-sample argument, the calculated areas are approximations.

For an iid mean with known $\mu$ and $\sigma$, the CLT suggests the labeled approximation

$$
\Pr(\bar X\leq c)\approx
\Pr\left\{Z\leq\frac{\sqrt n(c-\mu)}{\sigma}\right\}.
$$

The right side is a normal area. The approximation does not turn the original observations into normal variables; it concerns the standardized mean. When the observations themselves are exactly normal and independent, the mean is exactly normal for every $n$. That stronger fact comes from the normal model, not from taking $n$ to be “large enough.”

## What the central limit theorem does and does not say

**Theorem R-THM-clt (iid central limit theorem; imported).** Let $X_1,X_2,\ldots$ be mutually independent and identically distributed with $E(X_i)=\mu$, finite positive variance $0<\sigma^2<\infty$, and $\bar X_n=n^{-1}\sum_{i=1}^nX_i$. Then, as $n\to\infty$,

$$
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}
$$

converges in distribution to $N(0,1)$. Equivalently, probabilities for fixed intervals whose endpoints are continuity points of the normal distribution converge to the corresponding normal areas.

This is an imported theorem; it is not proved here. It is an asymptotic statement, not a finite-$n$ coverage guarantee. It gives no universal threshold such as “$n\geq30$.” How quickly the approximation improves depends on the population distribution and the question, especially its tail.

The theorem also requires one distribution to remain fixed as $n$ grows. It does not license combining increasingly different populations, or letting dependence strengthen with sample size, and then citing only the row count. Positive finite variance excludes a constant random variable from the displayed standardization because division by $\sigma=0$ is undefined; a constant mean has a degenerate, already-known sampling distribution instead.

## Adverse case: thirty rows can still mislead

**Example 8.3 (Worked calculation).**

Duplicate a random measurement $Z$ into two rows: $X_1=Z$ and $X_2=Z$. Both rows have the same distribution, but they are perfectly dependent. Their mean is $Z$, so its variance is $\sigma^2$, not $\sigma^2/2$. More duplicated rows do not manufacture independent information.

Now consider `R08-RARE-v1`: $X=100$ points with probability 0.01 and $X=0$ otherwise. The mean is 1 point. In an iid sample of 30, however, the probability of seeing no 100 at all is $0.99^{30}\approx0.740$. Thus the sample mean is exactly zero almost three quarters of the time. A smooth normal curve cannot reproduce that large point mass at zero. Thirty is not a universal repair.

```r
rare_no_event_probability <- 0.99^30
duplicate_variance_ratio <- 1

stopifnot(abs(rare_no_event_probability - 0.73970037338828) <= 1e-10)
stopifnot(identical(duplicate_variance_ratio, 1))
c(
  probability_sample_mean_is_zero = rare_no_event_probability,
  duplicate_mean_variance_divided_by_original_variance = duplicate_variance_ratio
)
```

The CLT still applies to the rare-event model as $n$ tends to infinity because its variance is finite and positive. That fact does not certify the approximation at $n=30$. Dependence is more serious: it violates the iid theorem's hypotheses, so increasing the duplicate-row count does not invoke this CLT at all.

## R-08-I01

### Guided investigation: same population, different sampling rules

**Question.** For `R08-POP-v1`, how do replacement and sample size change the sampling distribution of the mean, and how much noise comes from simulating a tail probability?

**Prediction.** Without replacement, increasing $n$ should reduce variance to zero at the census. At $n=2$, replacement should allow repeated extremes and therefore have larger variance. Simulation should fluctuate around, rather than equal, the exact tail probability.

**Controls.** The population, target mean, threshold of 6 points, and uniform selection are fixed. The scheme changes. Exact enumeration is the oracle. Before running simulation, choose $B=20{,}000$ independent repetitions and the failure rule $|\hat q-q|\leq4\widehat{\mathrm{MCSE}}+1/B$. Also require the worst-case Bernoulli MCSE $1/(2\sqrt B)$ to be below 0.004.

The simulation uses `sample.int(N_population, size, replace)` to draw integer positions uniformly, with replacement controlled explicitly. `replicate(B, expression)` evaluates the sampling expression $B$ times and collects the results. Each result below is `TRUE` or `FALSE`; `mean` treats these as 1 or 0, so their average is the simulated event fraction.

**Definition R-DEF-monte-carlo-error (Monte Carlo standard error).** Monte Carlo SE is the SD of a numerical estimate across repetitions of the simulation algorithm while the statistical target is held fixed. For $B$ independent event indicators with exact probability $q$, $\hat q$ has SE $\sqrt{q(1-q)/B}$. Replacing $q$ by $\hat q$ gives the reported estimated MCSE $\sqrt{\hat q(1-\hat q)/B}$. At an estimate of 0 or 1 this plug-in value is zero even though finite simulation does not prove the true probability is at an endpoint; the worst-case bound remains $1/(2\sqrt B)$.

```r
# Exact oracles and a predeclared simulation precision rule.
sample_sizes <- c(1L, 2L, 4L)
without_exact_variance <- population_variance / sample_sizes *
  (N_population - sample_sizes) / (N_population - 1L)
exact_variance_table <- data.frame(
  scheme = c("without replacement", "without replacement", "without replacement", "with replacement"),
  sample_size = c(sample_sizes, 2L),
  exact_variance_points_squared = c(without_exact_variance, population_variance / 2)
)

exact_q_without <- mean(without_means >= 6)
exact_q_with <- mean(with_means >= 6)
B <- 20000L
required_worst_case_mcse <- 0.004

RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(60801)
sim_without <- replicate(
  B,
  mean(population_points[sample.int(N_population, size = 2L, replace = FALSE)]) >= 6
)
sim_with <- replicate(
  B,
  mean(population_points[sample.int(N_population, size = 2L, replace = TRUE)]) >= 6
)
q_hat <- c(without_replacement = mean(sim_without), with_replacement = mean(sim_with))
q_exact <- c(without_replacement = exact_q_without, with_replacement = exact_q_with)
estimated_mcse <- sqrt(q_hat * (1 - q_hat) / B)

stopifnot(all(abs(without_exact_variance - c(5, 5 / 3, 0)) <= 1e-10))
stopifnot(abs(exact_q_without - 1 / 3) <= 1e-10)
stopifnot(abs(exact_q_with - 3 / 8) <= 1e-10)
stopifnot(1 / (2 * sqrt(B)) < required_worst_case_mcse)
stopifnot(all(abs(q_hat - q_exact) <= 4 * estimated_mcse + 1 / B))

exact_variance_table
data.frame(
  scheme = names(q_hat),
  exact_probability_mean_at_least_6 = unname(q_exact),
  simulated_probability = unname(q_hat),
  estimated_Monte_Carlo_SE = unname(estimated_mcse)
)
```

**Interpretation.** The exact variance table reads 5, $5/3$, and 0 square points for sample sizes 1, 2, and 4 without replacement. The size-two with-replacement variance is 2.5 square points. The exact event probabilities are $1/3$ and $3/8$. The simulation table is a reproducible numerical observation under the displayed R 4.6 RNG convention; its MCSE describes computation, not the sampling SE of the mean.

**Failure and boundary.** Changing `replace` changes the sampling mechanism, not a cosmetic software option. The exact finite-population result concerns uniform sampling without replacement from these four fixed units. The with-replacement iid result concerns draws from a four-point distribution. Neither mechanism alone justifies a claim about an unlisted population. If the precision check failed, the correct response would be to report the predeclared failure and investigate, not rerun until a favorable seed appeared.

**Reference response.** The prediction is supported by the exact calculations: the finite-population correction shrinks variance to zero as the sample approaches a census, and replacement makes repeated extreme values possible. The two SEs answer different questions. For example, $\sqrt{5/3}$ points is the exact sampling SE of the size-two without-replacement mean, whereas the reported estimated MCSE measures uncertainty in the simulated fraction estimating $\Pr(\bar Y\geq6)$.

## Keep the mechanisms attached to the numbers

Use this checklist whenever an SE appears:

1. What is random: observations, finite-population selections, assignments, or simulation draws?
2. What statistic varies across repetitions?
3. Which assumptions remove dependence terms or determine inclusion probabilities?
4. Is the displayed quantity an exact SE, an estimated SE, or a Monte Carlo SE?
5. If a normal curve is used, is it an exact model or a labeled approximation?

A small SE is meaningful only relative to its mechanism. It cannot repair a biased selection rule, dependent duplicates, a wrong target, or a poor finite-sample approximation.

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

```r
population_points <- c(2, 4, 6, 8)
exercise_population <- c(1, 3, 7)
det_tol <- function(expected) 1e-10 + 1e-8 * abs(expected)

stopifnot(identical(length(population_points), 4L))
stopifnot(identical(length(exercise_population), 3L))
stopifnot(!anyNA(population_points), !anyNA(exercise_population))
```

</details>

## R-08-E01

**Exercise 8.1**

A spinner has four equal sectors labeled $A,A,B,C$. Treat the physical sector landed on as the outcome. List the sample space, then find the probabilities of the events “label $A$,” “not $A$,” and “label $B$ or $C$.” Explain why the label set $\{A,B,C\}$ alone is not an equally likely sample space.

<details>
<summary>Hint 1</summary>

**Hint.** Give the two $A$ sectors distinct temporary names before counting.

</details>
<details>
<summary>Hint 2</summary>

Each physical A sector has probability one quarter, even though their printed labels agree.

</details>
<details>
<summary>Solution</summary>

Name the physical sectors $A_1,A_2,B,C$. Then

$$
\Omega=\{A_1,A_2,B,C\},
$$

and fairness assigns probability $1/4$ to each. The event “label $A$” is $\{A_1,A_2\}$, so its probability is $2/4=1/2$. Its complement has probability $1-1/2=1/2$. The event “label $B$ or $C$” is $\{B,C\}$ and also has probability $1/2$.

The display $\{A,B,C\}$ loses the fact that two different physical outcomes share label $A$. Giving those three labels probability $1/3$ each would contradict the spinner's four equal sectors. Equally likely refers to the physical outcomes supplied by the mechanism, not merely to distinct printed labels.

</details>

## R-08-E02

**Exercise 8.2**

A random variable $X$ takes values $-1,2,5$ with probabilities $0.2,0.5,0.3$. Verify that this is a probability distribution. Compute $E(X)$, $\operatorname{Var}(X)$, and $\operatorname{SD}(X)$ with explicit weighted sums. State the units if $X$ is measured in centimeters.

<details>
<summary>Hint 1</summary>

**Hint.** Find $\mu$ first, then weight each squared distance $(x-\mu)^2$.

</details>
<details>
<summary>Hint 2</summary>

The weighted mean is 2.3; variance has squared-centimetre units and SD is its nonnegative square root.

</details>
<details>
<summary>Solution</summary>

The probabilities are nonnegative and sum to $0.2+0.5+0.3=1$, so they define a distribution. The mean is

$$
\mu=(-1)(0.2)+2(0.5)+5(0.3)=2.3\text{ cm}.
$$

The weighted squared distances give

$$
\operatorname{Var}(X)
=(-1-2.3)^2(0.2)+(2-2.3)^2(0.5)+(5-2.3)^2(0.3)
=4.41\text{ cm}^2.
$$

Therefore $\operatorname{SD}(X)=\sqrt{4.41}=2.1$ cm. Variance has squared units; the mean and SD have the original unit.

```r
x_values <- c(-1, 2, 5)
x_probability <- c(0.2, 0.5, 0.3)
x_mean <- sum(x_values * x_probability)
x_variance <- sum((x_values - x_mean)^2 * x_probability)
x_sd <- sqrt(x_variance)

stopifnot(abs(sum(x_probability) - 1) <= det_tol(1))
stopifnot(abs(x_mean - 2.3) <= det_tol(2.3))
stopifnot(abs(x_variance - 4.41) <= det_tol(4.41))
stopifnot(abs(x_sd - 2.1) <= det_tol(2.1))
c(mean_cm = x_mean, variance_cm_squared = x_variance, sd_cm = x_sd)
```

Using the unweighted `mean(x_values)` or `var(x_values)` would answer a different question by treating the three listed values as equally weighted observations.

</details>

## R-08-E03

**Exercise 8.3**

Let $I_1,I_2,I_3$ be iid Bernoulli variables with success probability $p=0.2$, and let $X=I_1+I_2+I_3$. Derive $E(X)$ and $\operatorname{Var}(X)$ from the indicators. Then calculate $\Pr(X=1)$ by counting which trial succeeds and verify the four binomial probabilities with `dbinom`.

<details>
<summary>Hint 1</summary>

**Hint.** There are three sequences with exactly one success; independence makes each sequence's probability $p(1-p)^2$.

</details>
<details>
<summary>Hint 2</summary>

Add Bernoulli means and independent variances, then check that the four binomial masses sum to one.

</details>
<details>
<summary>Solution</summary>

Each indicator has $E(I_i)=p=0.2$ and variance $p(1-p)=0.16$. Expectations add, so

$E(X)=E(I_1)+E(I_2)+E(I_3)=3(0.2)=0.6.$

The indicators are independent, so centered cross terms have expectation zero. Therefore

$\operatorname{Var}(X)=3(0.16)=0.48.$

Exactly one success can occur in positions 1, 2, or 3. Each corresponding sequence has probability $0.2(0.8)^2$, hence

$\Pr(X=1)=3(0.2)(0.8)^2=0.384.$

The multiplier 3 counts mutually exclusive sequences. It would be invalid without the identical $p$ values, and the product inside each sequence uses independence.

```r
success_count <- 0:3
success_probability <- dbinom(success_count, size = 3, prob = 0.2)
expected_probability <- c(0.512, 0.384, 0.096, 0.008)

stopifnot(all(abs(success_probability - expected_probability) <= det_tol(expected_probability)))
stopifnot(abs(sum(success_probability) - 1) <= det_tol(1))
stopifnot(abs(sum(success_count * success_probability) - 0.6) <= det_tol(0.6))
stopifnot(abs(sum((success_count - 0.6)^2 * success_probability) - 0.48) <= det_tol(0.48))
data.frame(success_count, probability = success_probability)
```

</details>

## R-08-E04

**Exercise 8.4**

For each scenario, decide whether the two variables are independent, identically distributed, both, or neither. Justify each answer: (a) two independent fair coin tosses; (b) one fair toss recorded twice; (c) independent Bernoulli trials with success probabilities 0.2 and 0.7; (d) tomorrow's temperature and today's temperature at the same station, modeled with the same marginal distribution and positive correlation.

<details>
<summary>Hint 1</summary>

**Hint.** Ask two separate questions: does learning one value change the other law, and are the two marginal laws equal?

</details>
<details>
<summary>Hint 2</summary>

Equal marginals and joint independence are separate properties; a repeated record is not a second toss.

</details>
<details>
<summary>Solution</summary>

(a) The two independent fair tosses are identically distributed as well: each is Bernoulli with $p=1/2$, and learning one result does not alter the other law.

(b) The two records are identically distributed but not independent. Once the first record is known, the duplicate is known exactly. Treating duplication as a new toss would invent variation that the mechanism did not create.

(c) The trials are independent but not identically distributed. Their success probabilities, 0.2 and 0.7, specify different Bernoulli laws.

(d) The two temperatures are identically distributed under the stated model but not independent. Positive correlation says their joint behavior does not factor into the product of their marginal laws. The phrase “same marginal distribution” alone would establish identical distributions but say nothing conclusive about independence; the supplied positive correlation resolves that question.

The common error is to treat “iid” as one vague condition. Each letter represents a distinct property that must be justified.

</details>

## R-08-E05

**Exercise 8.5**

Daily fill weights are modeled as iid with mean 500 grams and SD 12 grams. Derive the mean, variance, and SE of the average of 36 fills. How many iid fills would be required to reduce that SE to 1 gram? Name one real feature that would invalidate the calculation.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the variance result before taking its square root; solve $12/\sqrt n=1$.

</details>
<details>
<summary>Hint 2</summary>

Mean variance divides by sample size and SE by its square root; shared batch variation breaks the iid argument.

</details>
<details>
<summary>Solution</summary>

Write $\bar X$ for the average of 36 fills. Under the stated iid model,

$$
E(\bar X)=500\text{ g},\qquad
\operatorname{Var}(\bar X)=\frac{12^2}{36}=4\text{ g}^2,
$$

so the exact model SE is $12/\sqrt{36}=2$ g. Requiring $12/\sqrt n=1$ gives $\sqrt n=12$ and $n=144$ fills.

This is a fourfold increase from 36, illustrating the square-root law. Serial drift in the filling machine would make neighboring observations dependent and could invalidate the calculation. Other failures include changing process variance or sampling only a selected production period.

```r
fill_n <- 36L
fill_sigma_g <- 12
fill_variance_mean <- fill_sigma_g^2 / fill_n
fill_se_g <- fill_sigma_g / sqrt(fill_n)
needed_n <- (fill_sigma_g / 1)^2

stopifnot(abs(fill_variance_mean - 4) <= det_tol(4))
stopifnot(abs(fill_se_g - 2) <= det_tol(2))
stopifnot(identical(needed_n, 144))
c(variance_g_squared = fill_variance_mean, SE_g = fill_se_g, needed_n = needed_n)
```

</details>

## R-08-E06

**Exercise 8.6**

For the finite population $1,3,7$ points, enumerate all simple random samples of size two without replacement and their means. Compute the exact mean and variance of the sample mean using equal probabilities. Verify the finite-population correction using the denominator-$N$ population variance, and explain the census case.

<details>
<summary>Hint 1</summary>

**Hint.** The three pairs are determined by which one of the three units is omitted.

</details>
<details>
<summary>Hint 2</summary>

The three equally likely sample means are two, four and five; use denominator three for their exact law.

</details>
<details>
<summary>Solution</summary>

The possible pairs and means are

| Selected values | Sample mean (points) |
|---|---:|
| 1, 3 | 2 |
| 1, 7 | 4 |
| 3, 7 | 5 |

Each pair has probability $1/3$. The mean of the sampling distribution is $(2+4+5)/3=11/3$, equal to the finite-population mean. Its variance is

$$
\frac13\left\{(2-11/3)^2+(4-11/3)^2+(5-11/3)^2\right\}=\frac{14}{9}.
$$

The population variance with denominator $N=3$ is

$$
\sigma_N^2=\frac13\left\{(1-11/3)^2+(3-11/3)^2+(7-11/3)^2\right\}=\frac{56}{9}.
$$

The theorem gives

$$
\frac{N-n}{N-1}\frac{\sigma_N^2}{n}
=\frac{1}{2}\frac{56/9}{2}=\frac{14}{9}.
$$

```r
exercise_pairs <- combn(seq_along(exercise_population), 2L)
exercise_means <- apply(
  exercise_pairs,
  2L,
  function(index) mean(exercise_population[index])
)
finite_mean <- mean(exercise_population)
finite_variance_N <- mean((exercise_population - finite_mean)^2)
sampling_variance <- mean((exercise_means - finite_mean)^2)
fpc_variance <- (3 - 2) / (3 - 1) * finite_variance_N / 2

stopifnot(identical(exercise_means, c(2, 4, 5)))
stopifnot(abs(finite_mean - 11 / 3) <= det_tol(11 / 3))
stopifnot(abs(finite_variance_N - 56 / 9) <= det_tol(56 / 9))
stopifnot(abs(sampling_variance - 14 / 9) <= det_tol(14 / 9))
stopifnot(abs(fpc_variance - sampling_variance) <= det_tol(sampling_variance))
data.frame(
  pair = apply(exercise_pairs, 2L, paste, collapse = ","),
  sample_mean_points = exercise_means
)
```

For a census, $n=N=3$, so the correction factor $(N-n)/(N-1)$ is zero. Every sample contains all three values and its mean is always $11/3$; there is no sampling variation.

</details>

## R-08-E07

**Exercise 8.7**

Suppose $X\sim N(40,6^2)$. Express $\Pr(34\leq X\leq46)$ as areas and calculate it with `pnorm`. Find the 0.95 quantile with `qnorm`. Then explain why the iid CLT does not promise that a sample mean from an arbitrary population is normally distributed at $n=30$.

<details>
<summary>Hint 1</summary>

**Hint.** Subtract two left-tail areas. For the conceptual part, distinguish a limit as $n\to\infty$ from a finite-sample equality.

</details>
<details>
<summary>Hint 2</summary>

The area thresholds are minus one and one; the CLT is a limit with explicit hypotheses, not an n=30 equality.

</details>
<details>
<summary>Solution</summary>

The requested probability is the area to the left of 46 minus the area to the left of 34:

$$
\Pr(34\leq X\leq46)=F(46)-F(34)\approx0.6826895.
$$

The 0.95 quantile is approximately 49.86912: 95% of the model's area lies to its left. Because the normal model is continuous, including or excluding either endpoint does not change the area.

```r
normal_interval_probability <- pnorm(46, mean = 40, sd = 6) -
  pnorm(34, mean = 40, sd = 6)
normal_q95 <- qnorm(0.95, mean = 40, sd = 6)

stopifnot(abs(normal_interval_probability - 0.682689492137086) <= det_tol(0.682689492137086))
stopifnot(abs(normal_q95 - 49.8691217617092) <= det_tol(49.8691217617092))
stopifnot(abs(pnorm(normal_q95, 40, 6) - 0.95) <= det_tol(0.95))
c(interval_probability = normal_interval_probability, quantile_0.95 = normal_q95)
```

The iid CLT describes convergence as $n$ tends to infinity under mutual independence, a common distribution, and finite positive variance. It neither says the finite-$n$ mean is exactly normal nor specifies a universal rate. Skewness, rare events, tails, and the probability being approximated can all affect accuracy. Thus $n=30$ alone establishes no finite-sample guarantee.

</details>

## R-08-E08

**Exercise 8.8**

The exact probability that a size-two without-replacement sample from `R08-POP-v1` has mean at least 6 is $1/3$. A simulation with $B=10{,}000$ independent repetitions reports $\hat q=0.329$. Compute its estimated Monte Carlo SE. Separately compute the exact sampling SE of the sample mean. Explain why increasing $B$ changes one quantity but not the other.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\sqrt{\hat q(1-\hat q)/B}$ for simulation error and $\sqrt{5/3}$ points for the statistic's sampling spread.

</details>
<details>
<summary>Hint 2</summary>

More simulations refine an approximation to the fixed sampling law rather than changing its sampling spread.

</details>
<details>
<summary>Solution</summary>

The estimated Monte Carlo SE is

$$
\sqrt{0.329(1-0.329)/10000}\approx0.0046985.
$$

This is probability-scale variation in the simulated fraction across fresh simulation runs. The exact sampling SE of the size-two mean is

$$
\sqrt{\operatorname{Var}(\bar Y)}=\sqrt{5/3}\approx1.291\text{ points}.
$$

It is the spread of the statistic across fresh size-two samples from the finite population. Increasing $B$ runs the numerical approximation longer and reduces Monte Carlo SE at rate $1/\sqrt B$. It does not change the sample size $n=2$, the sampling design, or the exact sampling distribution, so it does not change the sampling SE.

```r
B_exercise <- 10000L
q_hat_exercise <- 0.329
estimated_mcse_exercise <- sqrt(q_hat_exercise * (1 - q_hat_exercise) / B_exercise)
sampling_se_exercise <- sqrt(5 / 3)

stopifnot(abs(estimated_mcse_exercise - 0.00469849976056188) <= det_tol(0.00469849976056188))
stopifnot(abs(sampling_se_exercise - 1.29099444873581) <= det_tol(1.29099444873581))
c(
  estimated_Monte_Carlo_SE = estimated_mcse_exercise,
  exact_sampling_SE_points = sampling_se_exercise
)
```

Substituting $B=10{,}000$ into $\sqrt{5/3}$, or substituting $n=2$ into the Monte Carlo formula, would mix two different repetition mechanisms.

[Return to the chapter and exercises.](sampling-variation.md)

</details>

[Read the complete solutions for exercises R-08-E01 through R-08-E08.](solutions-sampling-variation.md)


## R-08-E09

**Exercise 8.9**

A fair sign Z equals minus one or one with equal probabilities. Compare the variance of an average of four independent copies with an average made by recording the same Z four times. The readings use the same declared unit without missingness. Derive both answers rather than inferring iid from equal marginals.

<details>
<summary>Hint 1</summary>

Each reading has mean zero and variance one.

</details>
<details>
<summary>Hint 2</summary>

With repeated storage the average is exactly the one underlying sign.

</details>
<details>
<summary>Solution</summary>

For independent copies, the average has variance $4/16=1/4$ squared units and SE one half unit. With four copies of one underlying Z, the average equals Z for every outcome, so its variance remains one and its SE one unit. Every row has the same marginal law in both models. The difference is their joint mechanism: duplicating a record adds no independent information. A row count alone does not select the reciprocal-square-root SE formula.

</details>

## R-08-E10

**Exercise 8.10**

An iid mean has population SD six points and sample size n=36. A separate simulation approximates one sampling-law tail probability with B=2500 independent indicators and reports fraction one half. Find the sampling SE and estimated Monte Carlo SE, then say what changes when only B is multiplied by twenty five.

<details>
<summary>Hint 1</summary>

Use n for the statistic's sampling distribution and B for the simulated indicator mean.

</details>
<details>
<summary>Hint 2</summary>

Changing a computational repetition count does not alter the original study size.

</details>
<details>
<summary>Solution</summary>

Sampling SE is $6/\sqrt{36}=1$ point. Estimated Monte Carlo SE is $\sqrt{0.5(1-0.5)/2500}=0.01$ on a probability scale. Multiplying B by twenty five reduces its standard-error scale by five, to 0.002 for an assessed fraction near one half. Sampling SE stays one point because n and the population law did not change. The Monte Carlo value is a plug-in estimate, not a finite guarantee. Reducing sampling SE by five instead requires twenty five times as many independent sampled observations.

</details>

## References and rights

R Core's installed R 4.6.0 help pages for `sample`, `Normal`, `Binomial`, `var`, `sd`, and `RNGkind` were consulted for the exact interfaces and defaults used here. The corresponding official release documentation is available in the [R base `sample` documentation](https://stat.ethz.ch/R-manual/R-release/library/base/html/sample.html), [R normal-distribution documentation](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Normal.html), [R binomial-distribution documentation](https://stat.ethz.ch/R-manual/R-release/library/stats/html/Binomial.html), and [R random-number documentation](https://stat.ethz.ch/R-manual/R-release/library/base/html/Random.html), all accessed 2026-09-06; the bibliography records the original consultation; this edition links to official help without redistributing its text. The imported iid CLT statement and the warning that weaker pairwise independence is insufficient were checked against Avanzi et al., [“A counterexample to the central limit theorem for pairwise independent random variables having a common arbitrary margin”](https://arxiv.org/abs/2003.01350) (2020); that paper is cited for theorem scope, not adapted prose.

The fixture, exposition, proofs, investigation, and exercises are original Math Atlas material. They do not adapt third-party textbook prose or exercises. Text and code are licensed CC BY-SA 4.0 as declared in the front matter.

## Summary

Sampling uncertainty belongs to a specified random mechanism. Independence and finite moments justify the familiar mean-variance calculation; a finite-population sample has a different correction. A normal approximation is a limiting tool with hypotheses, and simulation adds its own finite-repetition error. More simulations refine a calculation without increasing the underlying study's independent sample size.
