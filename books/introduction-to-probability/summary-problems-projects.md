
# Summary, Problems, and Projects

A probability calculation is strongest when its model, event and justification can be read separately. The model states what can happen and how outcomes are weighted. The event translates the question into that model. The justification explains why a counting rule, a conditional denominator, an independence product, an integral or a limiting theorem is appropriate.

This chapter brings those habits together. Its examples combine topics rather than introduce another named distribution. The exercises are cumulative capstones with full solutions, followed by suggestions for extending selected capstones into mathematical projects. Every calculation can be completed by hand from the stated assumptions; simulation is an optional future comparison, not evidence required for the arguments.

Preparation is the preceding chapters, especially [conditioning](conditional-probability-bayes.md), [expectation and variance](expectation-variance.md), [joint laws](joint-distributions-covariance.md), [limit theorems](central-limit-theorem.md) and [Monte Carlo](simulation-monte-carlo.md). The next probability book begins at a more formal level. We will describe that transition after consolidating what the elementary approach already achieves.

## A model-to-answer checklist

**Definition 16.1 (Model specification for a calculation).** In this chapter a complete model specification identifies the outcomes or random quantities, their support and probability law, the dependence assumptions, and the parameter domains needed by the calculation.

This is a practical definition, not a new probability axiom. For instance “two exponential lifetimes” is incomplete if we want the minimum's distribution: the rates and dependence must be supplied. “An average of one hundred observations” is incomplete if we want a standard error: the common variance and covariance structure matter.

A useful order of work is to identify the event before searching for a formula. For a sum threshold, write $X+Y\le t$. For a revised belief, identify both the observation and the target event. For a simulation estimate, state the contribution whose expectation is the target. The same model often permits several methods, but different methods should answer the same event.

Check whether an answer is exact, bounded or approximate. A binomial sum is exact inside its model. A Chebyshev expression is an upper bound. A central limit expression is an approximation at finite sample size unless a separate error theorem is supplied. The symbols equality, inequality and approximation carry different mathematical claims.

## Worked Example 16.2: a screening model and its denominator

An idealised population has a condition with probability $1/20$. A test is positive with probability $9/10$ given the condition and with probability $1/20$ given its absence. What is the chance of the condition after a positive result?

Let $D$ denote the condition and $+$ the positive result. The model supplies conditional test behaviour, not the desired posterior directly. Total probability gives

$$
P(+)=\frac9{10}\frac1{20}+\frac1{20}\frac{19}{20}
=\frac{37}{400}>0.
$$

The joint chance of condition and positive result is $18/400$. Therefore

$$
P(D\mid +)=\frac{18/400}{37/400}=\frac{18}{37}.
$$

The test's high sensitivity does not equal the posterior probability. The posterior compares true positives with all positives, including those from the larger group without the condition.

This is a mathematical illustration rather than a clinical estimate. A real application would require appropriate population and test data. Within the model, no normal approximation or simulation is needed. The main difficulty is choosing the correct denominator and retaining the base rate.

If a second test were added, its joint behaviour with the first would need to be specified conditional on the condition and its absence. Repeating the first test's sensitivity twice does not by itself justify multiplying probabilities.

## Worked Example 16.3: a small system and two methods

Two independent components have lifetimes $X,Y$, each exponential with rate one per hour. A system fails at $T=\min(X,Y)$. Find its survival probability, expected lifetime and a Monte Carlo contribution for the chance of surviving two hours.

For $t\ge0$, survival requires both components to survive:

$$
P(T>t)=P(X>t,Y>t)=e^{-t}e^{-t}=e^{-2t}.
$$

Thus $T$ is exponential with rate two and mean one half hour. The target survival probability at two hours is $e^{-4}$.

One simulation trial can generate two independent uniform variables, transform them into the two lifetimes, and return the indicator of both exceeding two. Its expectation is exactly $e^{-4}$, and averaging independent trials has variance $e^{-4}(1-e^{-4})/M$.

Alternatively a trial can generate the system lifetime directly as $-\log U/2$ and apply the same threshold. The contribution has the same Bernoulli law. Agreement of these two mathematical constructions supplies a useful benchmark, although a future implementation must still generate the intended independent inputs.

If the component lifetimes were equal because of a shared failure mechanism, the system lifetime would instead have rate one. Independence is the assumption that makes the product and the shorter lifetime valid.

## Worked Example 16.4: one path is not an independent sample

Consider the two-state chain

$$
P=\begin{pmatrix}3/4&1/4\\1/2&1/2\end{pmatrix},
\qquad \pi=(2/3,1/3),
$$

started in its stationary law. Let $I_n$ indicate state one. Every $I_n$ has mean $2/3$ and variance $2/9$.

However,

$$
E[I_nI_{n+1}]=P(X_n=1,X_{n+1}=1)
=\frac23\frac34=\frac12.
$$

The adjacent covariance is $1/2-4/9=1/18$, which is positive. Thus the variance of $(I_n+I_{n+1})/2$ is

$$
\frac14\left(\frac29+\frac29+2\frac1{18}\right)
=\frac5{36}.
$$

Treating the two indicators as independent would give $1/9$, which is smaller and wrong. Stationarity ensures constant marginal distributions, while the transition law retains dependence.

Long-run averages of suitable Markov chains do have their own laws, but their uncertainty requires a dependence-aware argument. The iid weak law and iid Monte Carlo variance formula cannot be invoked merely because a time series appears stable.

## Ten cumulative capstones

### Exercise 16.1
<a id="summary-problems-projects-ex-1"></a>

An urn contains three red and two blue distinguishable balls. Draw two without replacement, treating every ordered pair of distinct balls equally. Let $X,Y$ indicate red on the first and second draws. Find both means, $P(Y=1\mid X=0)$ and $\operatorname{Cov}(X,Y)$.

<details>
<summary>Hint 1</summary>

There are twenty equally likely ordered pairs. Use symmetry for each marginal.
</details>
<details>
<summary>Hint 2</summary>

For the product expectation, count ordered red-red pairs.
</details>
<details>
<summary>Solution</summary>

Each draw is marginally red with probability $3/5$, so both means are $3/5$. Given a first blue, the remaining four balls contain three red, giving conditional probability $3/4$; the denominator event has probability $2/5>0$. There are $3\cdot2=6$ red-red pairs among twenty, so $E[XY]=3/10$. Covariance is $3/10-9/25=-3/50$. Sampling without replacement creates negative association between these indicators. Their marginal distributions agree, but they are not independent.
</details>

### Exercise 16.2
<a id="summary-problems-projects-ex-2"></a>

A condition has probability $0.02$. Each of two tests is positive with probability $0.9$ given the condition and $0.1$ given its absence. Assume the tests are independent conditional on either condition status. Find the posterior after one positive and after two positives. Explain why unconditional independence was not assumed.

<details>
<summary>Hint 1</summary>

Partition the positive-result event according to condition status.
</details>
<details>
<summary>Hint 2</summary>

Conditional independence permits squaring each conditional positive probability, not the overall positive probability.
</details>
<details>
<summary>Solution</summary>

One positive has probability $(0.02)(0.9)+(0.98)(0.1)=0.116>0$. Its posterior is $0.018/0.116=9/58$. Two positives have probability $(0.02)(0.9)^2+(0.98)(0.1)^2=0.026>0$, giving posterior $0.0162/0.026=81/130$. Unconditional independence would require joint positive probability $0.116^2$, which differs from $0.026$. The shared unknown status links the two outcomes even when their test mechanisms are conditionally independent.
</details>

### Exercise 16.3
<a id="summary-problems-projects-ex-3"></a>

Choose a coin with head probability $1/4$ or $3/4$, each with probability one half. Keeping that chosen coin, toss twice independently conditional on its type. Find the marginal head probability, the chance of two heads, and covariance of the head indicators. Compare with independently choosing a fresh coin before each toss.

<details>
<summary>Hint 1</summary>

Average over the hidden coin type before making unconditional claims.
</details>
<details>
<summary>Hint 2</summary>

The average of squared probabilities differs from the square of their average.
</details>
<details>
<summary>Solution</summary>

Each toss has marginal head probability $(1/2)(1/4)+(1/2)(3/4)=1/2$. Two heads have probability $(1/2)(1/16)+(1/2)(9/16)=5/16$. Indicator covariance is $5/16-1/4=1/16$. If a fresh coin is selected independently each time and all toss randomness is independent, the two head indicators become independent with common probability one half, so two heads have probability one quarter and covariance zero. Specifying whether a hidden parameter is shared changes the joint model.
</details>

### Exercise 16.4
<a id="summary-problems-projects-ex-4"></a>

Let $X$ have density $2x$ on $(0,1)$, independently of a uniform variable $U$ on $(0,1)$. Find $P(U<X)$ and the conditional density and mean of $X$ given $U<X$.

<details>
<summary>Hint 1</summary>

Given $X=x$, the event has probability $x$.
</details>
<details>
<summary>Hint 2</summary>

Weight the original density by this event probability, then divide by the positive overall probability.
</details>
<details>
<summary>Solution</summary>

The event probability is $\int_0^1 x(2x)\,dx=2/3$. For a small $x$ interval, event and coordinate together contribute density $2x^2$. Dividing by $2/3$ gives conditional density $3x^2$ on $(0,1)$, whose integral is one. Its mean is $\int_0^1 3x^3\,dx=3/4$. The conditioning favours large $X$, because a larger coordinate leaves more room for the independent uniform value below it. This conditions on a positive probability event, rather than on a singleton.
</details>

### Exercise 16.5
<a id="summary-problems-projects-ex-5"></a>

For independent uniforms $U,V$ on $(0,1)$, find $P(U+V<1,\max(U,V)>3/4)$ and the corresponding conditional probability given $U+V<1$.

<details>
<summary>Hint 1</summary>

The unit square has constant joint density one.
</details>
<details>
<summary>Hint 2</summary>

The two regions with one coordinate above three quarters are disjoint below the diagonal $u+v=1$.
</details>
<details>
<summary>Solution</summary>

The first region contributes $\int_{3/4}^1(1-u)\,du=1/32$. By symmetry the second contributes the same amount. They cannot overlap because two coordinates above three quarters would have sum above one. The joint probability is therefore $1/16$. The conditioning triangle has area $1/2>0$, so the conditional probability is $(1/16)/(1/2)=1/8$. Using marginal maximum probabilities alone would ignore the restriction imposed by the sum.
</details>

### Exercise 16.6
<a id="summary-problems-projects-ex-6"></a>

Independent lifetimes $X,Y$ are exponential with rates one and two per hour. Find the law of their minimum and the probability that the first component fails before the second.

<details>
<summary>Hint 1</summary>

For the minimum's tail, both lifetimes must exceed the threshold.
</details>
<details>
<summary>Hint 2</summary>

For $P(X<Y)$, integrate the density of $X$ times the chance that $Y$ exceeds that value.
</details>
<details>
<summary>Solution</summary>

The minimum has survival $e^{-t}e^{-2t}=e^{-3t}$ for $t\ge0$, so it is exponential with rate three and mean one third hour. Also $P(X<Y)=\int_0^\infty e^{-x}e^{-2x}\,dx=1/3$. The complementary failure order has probability two thirds; a tie has probability zero. The faster rate component is more likely to fail first. Both product calculations use independence.
</details>

### Exercise 16.7
<a id="summary-problems-projects-ex-7"></a>

Iid costs take values zero, one and four with probabilities $1/2,1/4,1/4$. Find a Chebyshev sample size making average error at least $1/4$ have probability at most $0.1$. Then write a normal approximation for the probability that an average of one hundred costs lies strictly between one and one and a half, using the correct lattice spacing if you include a correction.

<details>
<summary>Hint 1</summary>

Calculate the first two cost moments.
</details>
<details>
<summary>Hint 2</summary>

For the normal approximation work with the integer sum; the strict interval corresponds to sums from one hundred and one to one hundred and forty nine.
</details>
<details>
<summary>Solution</summary>

The mean is $5/4$, the second moment is $17/4$, and variance is $17/4-25/16=43/16$. The Chebyshev bound at tolerance one quarter is $43/n$, so $n\ge430$ suffices. For one hundred observations the sum has mean $125$ and standard deviation $5\sqrt{43}/2$. Its possible sums have unit lattice spacing. The corrected interval is $(100.5,149.5)$, giving approximation $\Phi(49/(5\sqrt{43}))-\Phi(-49/(5\sqrt{43}))$. The sample-size statement is a finite bound; this normal expression is an approximation.
</details>

### Exercise 16.8
<a id="summary-problems-projects-ex-8"></a>

A fair walk between absorbing walls zero and six starts at two. Let $A$ be upper absorption. Find $P(A)$ and expected duration. A Monte Carlo project uses independent complete paths to estimate $P(A)$: how many paths suffice for Chebyshev error tolerance $0.02$ and failure bound $0.05$, using the exact indicator variance?

<details>
<summary>Hint 1</summary>

Use the wall formulas before designing the simulation.
</details>
<details>
<summary>Hint 2</summary>

The success indicator variance is $p(1-p)$, not the duration's variance.
</details>
<details>
<summary>Solution</summary>

The hitting probability is $2/6=1/3$ and expected duration is $2(6-2)=8$ steps. One success indicator has variance $2/9$. Therefore $M\ge(2/9)/[(0.05)(0.02)^2]=11111.1\ldots$, so $11112$ independent complete paths suffice. The expected number of simulated steps at this fixed path count is $8M$, by linearity. A fixed total step budget would generate a random number of completed paths and would require another analysis.
</details>

### Exercise 16.9
<a id="summary-problems-projects-ex-9"></a>

Estimate $I=\int_0^1x^2\,dx$ using iid uniform samples. Compare contributions $W=U^2$ and $W_c=U^2-c(U-1/2)$. Find the coefficient minimising variance among all real $c$, and the resulting variance ratio.

<details>
<summary>Hint 1</summary>

The subtracted term has mean zero for every coefficient.
</details>
<details>
<summary>Hint 2</summary>

Expand variance as a quadratic in $c$ using $\operatorname{Cov}(U^2,U)=1/12$.
</details>
<details>
<summary>Solution</summary>

Every contribution has mean $I=1/3$. Its variance is $4/45+c^2/12-c/6$, obtained from $\operatorname{Var}(U)=1/12$. Completing the square gives $(c-1)^2/12+1/180$, minimised at $c=1$. The minimum is $1/180$, compared with $4/45=16/180$ for the ordinary contribution. Independent averages retain this sixteenfold variance improvement. The coefficient is derived from exact model moments, so no extra randomness from estimating it has been omitted.
</details>

### Exercise 16.10
<a id="summary-problems-projects-ex-10"></a>

A two-state chain has transition matrix $\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix}$ with $0<a,b<1$. Find its stationary distribution. For the probability $r_n$ of state one, derive a formula showing convergence and identify how the parameter combination controls alternating or nonalternating approach.

<details>
<summary>Hint 1</summary>

Use $r_{n+1}=(1-a)r_n+b(1-r_n)$.
</details>
<details>
<summary>Hint 2</summary>

Subtract the fixed point $b/(a+b)$.
</details>
<details>
<summary>Solution</summary>

Stationarity gives $\pi=(b/(a+b),a/(a+b))$, a probability row because $a+b>0$. The recurrence becomes $r_{n+1}=b+(1-a-b)r_n$, so $r_n-b/(a+b)=(1-a-b)^n(r_0-b/(a+b))$. Since $0<a+b<2$, the multiplier has absolute value less than one, proving convergence. If $a+b<1$, its sign is positive and deviations keep their sign; if $a+b>1$, they alternate; if $a+b=1$, the stationary distribution is reached after one step. This explicit proof also displays why endpoint parameters need separate treatment.
</details>

## Extending a capstone into a project

A mathematical project should begin with a question that can receive a definite answer. Capstone 16.3 can be extended to many tosses from a shared hidden coin. Derive the distribution of the total by conditioning on the chosen type, compare its variance with a binomial model having the same marginal head probability, and explain why more tosses reveal the shared type. State clearly whether type is selected once per sequence or once per toss.

Capstone 16.8 can become a study of absorbing boundaries. Change the starting point, interval length or right-step probability. Derive the appropriate first-step equations before proposing a simulation. Compare exact hitting probabilities with estimates from independent complete paths, and report an uncertainty bound. If paths are truncated, define the new event and analyse the truncation difference.

Capstone 16.9 can become a variance reduction project. Replace the square by another integrable function, propose a correction with a known expectation, and minimise the resulting variance quadratic when moments exist. A successful project explains the target, proves that it is preserved, and compares uncertainty at a stated computational budget. A visually smoother output is not itself a variance proof.

These projects can be written entirely as mathematics. If implemented later, report reproducibility information and distinguish model assumptions, exact results, approximations and observed numerical output. Do not present a collection of favourable runs as a proof.

## Moving to probability with proofs

This book has treated finite and countable models, elementary densities, conditional tables, moments and selected limiting results. The next route is [Probability: Models, Bounds, and Proofs](../probability-models-proofs/event-models-and-axioms.md). Its opening chapter introduces event families and sigma-algebras; later work requires stronger command of proofs, infinite series, limits and analysis.

Sigma-algebras and measure-based integration are later preparation, not prerequisites secretly needed for the elementary arguments here. They let probability handle general event spaces and random variables beyond ordinary density formulas. They also support precise treatments of modes of convergence, conditional expectation and broader limit theorems.

Before moving on, check that you can justify a positive conditional denominator, recognise when independence is being used, compute an expectation from a joint model, and distinguish a bound from an approximation. These habits survive the change in formal language. The purpose of the next book is to extend their scope and prove more general results, while keeping the model assumptions visible.

## Sources

The breadth of the introductory route follows the benchmarks Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/), and [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf). The cumulative models, numerical choices, capstones and project prompts in this chapter are original.

## Summary

Probability connects an explicit model to an event through a justified calculation. Counting, conditioning, joint distributions, density integrals and dependence assumptions determine exact results; moment inequalities give bounds; limit theorems motivate approximations under stated hypotheses. Independent Monte Carlo estimates inherit these same requirements. The capstones show how familiar tools combine, and the next book develops a more general language for the same careful reasoning.
