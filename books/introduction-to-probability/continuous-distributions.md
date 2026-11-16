
# Continuous Distributions

A clock can record a waiting time to many decimal places. A scale can record a mass between two marked values. Modelling either quantity by a finite list of outcomes would make the calculation depend on an arbitrary rounding rule. A continuous model instead assigns probabilities to intervals. Its basic object is a density, whose area over an interval supplies the probability of falling there.

The distinction between a value and an interval is essential. A density evaluated at one point is not the probability of that point. Indeed, every single value has probability zero in a model with a density, although the random variable must take some value. There is no contradiction: an interval contains uncountably many points, and the finite or countable addition rules do not license adding an uncountable list of zeros.

Read [random variables and distributions](random-variables-distributions.md) and [expectation and variance](expectation-variance.md) first. We use elementary definite integrals, antiderivatives and the fundamental theorem of calculus. The required calculus is ordinary area calculation, not measure theory. By the end you should be able to check a proposed density, calculate probabilities and moments, recognise three basic continuous laws, and decide whether conditioning changes their behaviour.

## Densities and distribution functions

**Definition 9.1 (Probability density).** A nonnegative, integrable function $f$ on the real line is a probability density if its total integral is one. A random variable $X$ has density $f$ when, for every real $a<b$,

$$
P(a<X\le b)=\int_a^b f(x)\,dx.
$$

The density is taken to be zero outside its stated support. For unbounded support, the integral is an improper integral. Every density used in this chapter is piecewise continuous, so elementary integration suffices.

Nonnegativity and total area are different requirements. A curve can have integral one while dipping below the axis, which would assign negative probability to a small interval. A positive curve with integral three also fails, because the entire real line must have probability one. Always check both requirements before interpreting an integral as a probability.

The support tells us where values can occur. If a waiting time has density zero for negative arguments, an integration limit below zero contributes no area. A formula such as $2x$ is incomplete until its domain is given: on $(0,1)$ it defines a density, whereas on the whole real line it does not.

**Definition 9.2 (Cumulative distribution function).** The distribution function of $X$ is $F(x)=P(X\le x)$. For a variable with density,

$$
F(x)=\int_{-\infty}^x f(t)\,dt.
$$

Consequently $F$ is nondecreasing, continuous, approaches zero at the far left and approaches one at the far right. At points where $f$ is continuous, the fundamental theorem of calculus gives $F'(x)=f(x)$. Changing a density at isolated points does not change any interval probability. At a corner the derivative may not exist, but the distribution remains perfectly valid.

**Proposition 9.3 (No point masses).** If $X$ has a density, then $P(X=c)=0$ for every real $c$.

*Proof.* The probability of an interval around $c$ is its density integral. As the interval shrinks to a single point, that integral tends to zero; for the piecewise continuous densities here, this follows directly from the elementary integral. Since the event $X=c$ lies inside every such interval, its probability is at most every one of those quantities and hence is zero. ∎

It follows that open or closed interval endpoints give the same probabilities for these models. The statement does not extend to discrete or mixed distributions. A model with a positive chance of zero waiting time and otherwise a positive continuous waiting time needs both a point mass and a density.

Density has units reciprocal to those of the measurement. If time is measured in minutes, density is measured per minute. Changing to seconds changes its numerical height while leaving probabilities unchanged. This provides a useful reason why a density can exceed one: height alone has neither the units nor the meaning of a probability.

## Worked Example 9.4: calibrating a triangular density

Suppose a nonnegative measurement is modelled by $f(x)=cx$ on $0<x<2$, with zero density elsewhere. Find the constant, an interval probability, and a median.

Normalisation requires

$$
1=\int_0^2 cx\,dx=2c,
$$

so $c=1/2$. This choice is nonnegative throughout the support. For $0\le x\le2$, integration gives $F(x)=x^2/4$; for $x<0$ the distribution function is zero, and for $x>2$ it is one. Specifying these outer branches matters when we later use $F$ as a function on the whole real line.

The probability of a measurement between one and one and a half is

$$
P(1<X<3/2)=F(3/2)-F(1)=9/16-1/4=5/16.
$$

A median $m$ divides the probability into halves. Here it solves $m^2/4=1/2$, so $m=\sqrt2$, the positive root in the support. The negative root of the algebraic equation is not admissible. Notice that the density rises with $x$: equal length intervals farther to the right receive greater probability.

At $x=3/2$ the density is $3/4$, yet $P(X=3/2)=0$. A short interval of width $h$ starting there has probability approximately $(3/4)h$ when $h$ is small. The approximation concerns an interval and becomes accurate because the density changes little over that short distance.

## Uniform and exponential models

**Definition 9.5 (Uniform law).** For real $a<b$, the law $\operatorname{Unif}(a,b)$ has density $1/(b-a)$ on $(a,b)$ and zero elsewhere.

Its interval probabilities are lengths of overlaps divided by the full length $b-a$. “Uniform” refers to this length rule; it is not a consequence of merely saying that a real number is selected at random. A sampling mechanism or a modelling assumption must justify it.

**Definition 9.6 (Exponential law).** For $\lambda>0$, the exponential law with rate $\lambda$ has density

$$
f(t)=\lambda e^{-\lambda t},\qquad t>0,
$$

and zero density for $t<0$. Its survival probability is $P(T>t)=e^{-\lambda t}$ for $t\ge0$.

Integration gives total area one and the stated tail. The parameter is a rate: doubling it halves the characteristic waiting time. An exponential model can describe an idealised waiting time for a mechanism with an unchanged instantaneous rate. Real components that age or events with scheduled opportunities need other models.

**Proposition 9.7 (Exponential lack of memory).** If $T$ is exponential with rate $\lambda>0$, then for $s,t\ge0$,

$$
P(T>s+t\mid T>s)=P(T>t).
$$

*Proof.* The conditioning event has positive probability $e^{-\lambda s}$. The intersection of the two tail events is $T>s+t$, so the conditional probability is $e^{-\lambda(s+t)}/e^{-\lambda s}=e^{-\lambda t}$. ∎

The property concerns the remaining waiting time after survival. It does not say that the events $T>s$ and $T>s+t$ are independent; those events are nested. It also does not say that all waiting times are exponential. The constant rate assumption is part of the model, and observed waiting time data may challenge it.

## Worked Example 9.8: a uniform arrival

Assume an arrival time $U$, measured in minutes after noon, is uniform on $(0,12)$. A service starts at minute eight. Find the probability of arriving before it starts and the conditional chance of arriving after minute six given arrival before minute eight.

The first event occupies eight of the twelve equally weighted minutes, so its probability is $8/12=2/3$. The conditional numerator is the overlap $6<U<8$, whose probability is $2/12$. Since the denominator $P(U<8)=2/3$ is positive,

$$
P(U>6\mid U<8)=\frac{2/12}{8/12}=\frac14.
$$

Equivalently the conditional model is uniform on the shorter interval $(0,8)$. It would be wrong to divide by twelve again after conditioning: we have already restricted the reference population of possible arrivals.

If the arrival has not occurred by minute six, the remaining waiting time is uniform on $(0,6)$. If it has not occurred by minute ten, the remaining wait is uniform on $(0,2)$. The remaining distribution changes with elapsed time. This gives a direct counterexample to assuming the lack of memory property for every continuous waiting time.

## Continuous expectation and spread

**Definition 9.9 (Expectation from a density).** If $\int |g(x)|f(x)\,dx$ is finite, define

$$
E[g(X)]=\int_{-\infty}^{\infty}g(x)f(x)\,dx.
$$

In particular the mean requires an integrable absolute first moment. If $E[X^2]$ is finite, the variance is $E[X^2]-(E[X])^2$.

This is the continuous version of weighting each possible value by its probability. Small intervals have probability approximately density times width, and the integral collects their contributions. The absolute integrability condition prevents an ambiguous cancellation of infinite positive and negative contributions.

For a uniform variable, direct integration gives $E[U]=(a+b)/2$ and $\operatorname{Var}(U)=(b-a)^2/12$. For an exponential variable, integration by parts gives $E[T]=1/\lambda$ and $E[T^2]=2/\lambda^2$, hence variance $1/\lambda^2$. The exponential standard deviation therefore equals its mean, reflecting its substantial right tail.

A positive density need not have a finite mean. For example $f(x)=1/x^2$ on $x\ge1$ integrates to one, but its mean involves $\int_1^\infty dx/x$, which diverges. Before inserting a mean or variance into a theorem, check that the required integral exists.

## Worked Example 9.10: elapsed exponential waiting

An idealised waiting time $T$ has rate $1/4$ per minute. Find the chance that the total wait exceeds ten minutes, and the expected additional wait after six minutes without an arrival.

The tail formula gives $P(T>10)=e^{-10/4}=e^{-5/2}$. The conditioning event $T>6$ has positive probability. For every $t\ge0$,

$$
P(T-6>t\mid T>6)=e^{-t/4}.
$$

Thus the remaining wait has the original exponential law and mean four minutes. The conditional expected total wait is ten minutes, because six minutes have already elapsed and the conditional mean remaining is four.

This conclusion would change if the system were known to close at a fixed time, or if the rate depended on elapsed waiting. In the stated model there is no such change. Lack of memory is an exact property of this distribution, not a claim that a real queue forgets its history.

## The normal density

**Definition 9.11 (Normal law).** For real $\mu$ and $\sigma>0$, $X\sim N(\mu,\sigma^2)$ means that $X$ has density

$$
f(x)=\frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$

The standard normal has $\mu=0$ and $\sigma=1$. Its distribution function is denoted by $\Phi$. Symmetry gives $\Phi(-z)=1-\Phi(z)$.

The normalising integral $\int_{-\infty}^{\infty}e^{-z^2/2}\,dz=\sqrt{2\pi}$ is a classical calculus identity; we take that identity as given here. Symmetry gives mean zero for the standard law, and integration by parts gives second moment one. A change of variable then gives mean $\mu$ and variance $\sigma^2$ for the general law.

Normal probabilities are left in terms of $\Phi$ or evaluated from a table. There is no elementary antiderivative to memorise. Standardisation gives $P(a<X<b)=\Phi((b-\mu)/\sigma)-\Phi((a-\mu)/\sigma)$.

The normal law places positive probability on every nonempty interval of the real line. Consequently it is not an exact law for a necessarily positive quantity. It can still be a useful approximation when the negative tail is negligible for the question. Chapter 13 explains why averages often lead to a normal approximation, while preserving the distinction between a model and an approximation.

## Exercises

### Exercise 9.1
<a id="continuous-distributions-ex-1"></a>

A proposed density is $f(x)=c(1-x)$ on $0<x<1$. Determine $c$ and $P(X<1/2)$.

<details>
<summary>Hint 1</summary>

Find the total area before calculating the event.
</details>
<details>
<summary>Hint 2</summary>

The antiderivative of $1-x$ is $x-x^2/2$.
</details>
<details>
<summary>Solution</summary>

Normalisation gives $c(1-1/2)=1$, so $c=2$, which makes the density nonnegative. Integrating from zero to one half gives $2(1/2-1/8)=3/4$. The distribution puts more weight near zero than a uniform law would.
</details>

### Exercise 9.2
<a id="continuous-distributions-ex-2"></a>

A density equals four on $(0,1/4)$ and zero elsewhere. Explain why it is valid and find $P(X=1/8)$ and $P(X<1/8)$.

<details>
<summary>Hint 1</summary>

Probability is area rather than height.
</details>
<details>
<summary>Hint 2</summary>

The support has length one quarter.
</details>
<details>
<summary>Solution</summary>

The density is nonnegative and its total area is $4(1/4)=1$. A single point has probability zero. The interval from zero to one eighth has probability $4/8=1/2$. A height above one causes no difficulty because its units are reciprocal measurement units.
</details>

### Exercise 9.3
<a id="continuous-distributions-ex-3"></a>

For $X$ with density $2x$ on $(0,1)$, find its mean and variance.

<details>
<summary>Hint 1</summary>

Compute the first two moments separately.
</details>
<details>
<summary>Hint 2</summary>

Subtract the squared mean from the second moment.
</details>
<details>
<summary>Solution</summary>

All moments here are finite because the support is bounded. The mean is $\int_0^1 2x^2\,dx=2/3$ and the second moment is $\int_0^1 2x^3\,dx=1/2$. Therefore the variance is $1/2-4/9=1/18$. The mean lies to the right of one half, consistent with the rising density.
</details>

### Exercise 9.4
<a id="continuous-distributions-ex-4"></a>

Let $U\sim\operatorname{Unif}(-2,4)$. Find $P(|U|<1)$ and $P(U>0\mid U<2)$.

<details>
<summary>Hint 1</summary>

Use lengths of intersections with the support.
</details>
<details>
<summary>Hint 2</summary>

For the conditional probability, the denominator interval is $(-2,2)$.
</details>
<details>
<summary>Solution</summary>

The first interval has length two inside a support of length six, giving $1/3$. The conditional numerator is $(0,2)$, of length two, and the conditioning interval has length four and positive probability. Their ratio is $1/2$. Conditioning has changed the denominator.
</details>

### Exercise 9.5
<a id="continuous-distributions-ex-5"></a>

An exponential variable has mean three hours. Find its rate, its median, and the chance of exceeding six hours.

<details>
<summary>Hint 1</summary>

Rate is reciprocal to mean.
</details>
<details>
<summary>Hint 2</summary>

A median has survival probability one half.
</details>
<details>
<summary>Solution</summary>

The rate is $1/3$ per hour. Solving $e^{-m/3}=1/2$ gives $m=3\log2$ hours. The chance of exceeding six hours is $e^{-2}$. The median is smaller than the mean because the distribution has a long right tail.
</details>

### Exercise 9.6
<a id="continuous-distributions-ex-6"></a>

For $T\sim\operatorname{Exp}(2)$, find $P(T\le3\mid T>1)$, with time in the same units as the rate.

<details>
<summary>Hint 1</summary>

The numerator is the event $1<T\le3$.
</details>
<details>
<summary>Hint 2</summary>

Divide the difference of two tail probabilities by $P(T>1)$.
</details>
<details>
<summary>Solution</summary>

The denominator is $e^{-2}>0$. The numerator is $e^{-2}-e^{-6}$. Their ratio is $1-e^{-4}$, also the chance that an exponential remaining wait of rate two is at most two units. The time threshold after conditioning is a remaining duration, not the original total duration.
</details>

### Exercise 9.7
<a id="continuous-distributions-ex-7"></a>

Suppose $F(x)=0$ for $x<0$, $F(x)=x^3$ for $0\le x\le1$, and $F(x)=1$ for $x>1$. Find a density and the probability $P(1/2<X<3/4)$.

<details>
<summary>Hint 1</summary>

Differentiate on the interior of each branch.
</details>
<details>
<summary>Hint 2</summary>

Use a difference of distribution function values for the event.
</details>
<details>
<summary>Solution</summary>

A density is $3x^2$ on $(0,1)$ and zero elsewhere. It is nonnegative and integrates to one. The probability is $(3/4)^3-(1/2)^3=27/64-8/64=19/64$. Values assigned to the density at the endpoints do not affect any integral.
</details>

### Exercise 9.8
<a id="continuous-distributions-ex-8"></a>

If $X\sim N(10,4)$, express $P(8<X<13)$ and $P(X>10)$ using $\Phi$.

<details>
<summary>Hint 1</summary>

The second parameter is variance, so find its positive square root.
</details>
<details>
<summary>Hint 2</summary>

Subtract ten and divide by two at each threshold.
</details>
<details>
<summary>Solution</summary>

The standard deviation is two. Standardisation gives $\Phi(3/2)-\Phi(-1)$ for the interval. Symmetry about ten gives $P(X>10)=1/2$. Dividing by four would incorrectly use variance in place of standard deviation.
</details>

### Exercise 9.9
<a id="continuous-distributions-ex-9"></a>

A variable has density $f(x)=2/x^3$ on $x\ge1$. Check normalisation and decide whether its mean and variance are finite.

<details>
<summary>Hint 1</summary>

Write each required improper integral explicitly.
</details>
<details>
<summary>Hint 2</summary>

The second moment contains the integral of $1/x$.
</details>
<details>
<summary>Solution</summary>

The total integral is $[-x^{-2}]_1^\infty=1$. The mean is $\int_1^\infty2/x^2\,dx=2$, so the first absolute moment is finite. The second moment is $\int_1^\infty2/x\,dx=\infty$. Thus the variance is infinite; the finite mean does not justify finite variance arguments.
</details>

### Exercise 9.10
<a id="continuous-distributions-ex-10"></a>

A timer reads exactly zero with probability $1/5$, and otherwise records an exponential waiting time of rate one. Find $P(T=0)$ and $P(T>2)$. Can one ordinary density describe the whole law?

<details>
<summary>Hint 1</summary>

Condition on whether the timer records an immediate event.
</details>
<details>
<summary>Hint 2</summary>

A law described entirely by a density gives zero probability to every singleton.
</details>
<details>
<summary>Solution</summary>

The point mass is $P(T=0)=1/5$. The positive waiting branch has probability $4/5$, so $P(T>2)=(4/5)e^{-2}$. No ordinary density represents the whole law, because its mass at zero is positive. The positive part has density $(4/5)e^{-t}$, whose area is four fifths; the remaining fifth must be specified separately.
</details>

## Sources

The organisation and terminology may be compared with Blitzstein and Hwang, *Introduction to Probability*, available through [Harvard's official Stat 110 page](https://stat110.hsites.harvard.edu/), and Grinstead and Snell, *Introduction to Probability*, chapters 2, 5 and 6, available from [Dartmouth](https://math.dartmouth.edu/~prob/prob/prob.pdf). The exposition, numerical examples and exercises here are original.

## Summary

A density assigns probabilities through integrals, while a distribution function accumulates those probabilities from the left. Point probabilities vanish for laws with densities, and density height can exceed one. Uniform, exponential and normal models encode different assumptions about support, shape and waiting behaviour. Moments require their own integrability checks. The [next chapter](joint-distributions-covariance.md) studies several quantities observed together and explains why their separate distributions do not determine their dependence.
