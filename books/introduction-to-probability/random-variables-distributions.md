
# Random Variables and Distributions

## A numerical question about an outcome

An experiment may record a long sequence of coin results, while our question concerns only the number of heads. A delivery experiment may record several departure and arrival times, while we want the delay in minutes. A random variable expresses this passage from a complete outcome record to a numerical quantity.

The word variable does not mean the number changes after it has been observed. Before the experiment it is a function of an uncertain outcome. After an outcome is selected, the function has one determined value. Different outcomes can give the same value, so the probability of a value must collect all the outcomes mapped to it.

This chapter uses [sample spaces and events](sample-spaces-events.md), [counting](counting.md) and [independence](independence.md). We define distributions and cumulative distribution functions, calculate transformed discrete laws and explain why marginal distributions do not determine a joint model. The main calculations are finite or countable; continuous density laws are developed in Chapter 9.

## From outcome records to values

**Definition 6.1 (Random variable).** In the finite or countable models of the opening chapters, a real random variable is a function $X:\Omega\to\mathbb R$. For a set $B$ of numerical values, the event $\{X\in B\}$ is the set of outcomes $\omega$ satisfying $X(\omega)\in B$.

This event is a preimage under the function. For instance, $\{X\le3\}$ may contain many elementary outcomes. Its probability is found by summing their original masses, not by assigning fresh arbitrary weights to the numerical labels.

A constant function is also a random variable. If $X(\omega)=7$ for every outcome, its value is certainly seven. Random variables need not have many possible values, and their values need not be nonnegative. A net gain can be negative; a distance cannot. The domain and units should match the quantity being represented.

**Definition 6.2 (Discrete probability mass function).** A discrete random variable has a finite or countable set of values carrying all its probability. Its probability mass function, or PMF, is
$$
p_X(x)=P(X=x).
$$
It satisfies $p_X(x)\ge0$ and $\sum_xp_X(x)=1$, where the sum is over its possible values.

*Justification.* The events $\{X=x\}$ are disjoint for distinct values and together cover the outcome space, apart from any explicitly zero-probability remainder. Additivity and normalisation give the result. In a finite model, grouping elementary masses by their images proves it directly. ∎

For a discrete law, we will call the values with positive mass its positive-mass support. The word support has a more topological meaning in advanced treatments, so a continuous interval of support should not be interpreted as a list of positive point masses.

**Example 6.3 (The number of heads).** Toss three independent fair coins and let $X$ count heads. There are eight equally likely histories, but only four possible values of $X$. Their law is:

| $x$ | $0$ | $1$ | $2$ | $3$ |
| --- | ---: | ---: | ---: | ---: |
| $p_X(x)$ | $1/8$ | $3/8$ | $3/8$ | $1/8$ |

For example, $X=1$ collects $HTT,THT,TTH$. Thus $P(X\ge2)=3/8+1/8=1/2$. A uniform distribution on the four numerical counts would give $1/4$ each and would not describe this experiment.

Two different variables can be defined on the same histories. The first-toss indicator uses only the first coordinate, whereas $X$ uses all three. Their distributions and dependence must be calculated from their respective preimages.

## The law and the cumulative distribution function

A distribution, or law, records all probabilities of numerical events associated with a variable. For a discrete variable, the PMF determines it:
$$
P(X\in B)=\sum_{x\in B}p_X(x).
$$
This expression works whether $B$ lists values explicitly or is specified by an inequality.

**Definition 6.4 (Cumulative distribution function).** The cumulative distribution function, or CDF, of a real random variable is
$$
F_X(t)=P(X\le t),\qquad t\in\mathbb R.
$$

A CDF takes values in $[0,1]$ and is nondecreasing, because $\{X\le s\}\subseteq\{X\le t\}$ when $s\le t$. For a finite discrete law, it is a right-continuous step function: it includes the mass at each jump point and remains constant until the next value. Far below the smallest value it is zero, and at or above the largest it is one.

CDFs are useful because they describe discrete and continuous laws using the same kind of event. General CDFs are right-continuous, tend to zero at negative infinity and to one at positive infinity. Those properties follow from the probability continuity of nested events; in the finite setting they are visible directly from the step formula.

For real $a<b$, the disjoint decomposition $\{X\le b\}=\{X\le a\}\cup\{a<X\le b\}$ gives
$$
P(a<X\le b)=F_X(b)-F_X(a).
$$
The lower endpoint is excluded. For a discrete law, including it requires adding $p_X(a)$. Endpoints therefore cannot be changed carelessly when atoms are present.

**Example 6.5 (Reading a step CDF).** A random waiting cost $X$ takes values $0,2,5$ with probabilities $1/4,1/2,1/4$. Its CDF is
$$
F_X(t)=
\begin{cases}
0,&t<0,\\
1/4,&0\le t<2,\\
3/4,&2\le t<5,\\
1,&t\ge5.
\end{cases}
$$
Thus $P(0<X\le2)=F_X(2)-F_X(0)=1/2$, while $P(0\le X\le2)=3/4$. The difference is the mass $1/4$ at zero. The jump at two equals $1/2$, exactly $P(X=2)$.

A CDF value itself is not usually a point probability: $F_X(2)=3/4$ includes both zero and two. For finite discrete laws, subtracting the CDF's value just before a point from its value at that point recovers the mass there.

## Transforming a discrete variable

**Theorem 6.6 (Discrete transformation rule).** If $Y=g(X)$ for a function defined on the values of a discrete $X$, then
$$
p_Y(y)=\sum_{x:g(x)=y}p_X(x).
$$

*Proof.* The event $\{g(X)=y\}$ is the disjoint union of the events $\{X=x\}$ over every value mapped to $y$. Add their probabilities. Distinct preimages must all be included, and values outside the original law contribute nothing. ∎

The rule does not require $g$ to be one-to-one or monotone. Squaring, absolute values, rounding and thresholding often combine several original values. A threshold indicator, for example, is $Y=1$ when $X>c$ and zero otherwise; its law has masses $P(X>c)$ and $P(X\le c)$.

**Example 6.7 (Several inputs give one output).** Use the three-toss count from Example 6.3 and set $Y=|X-1|$. The mappings are $0\mapsto1$, $1\mapsto0$, $2\mapsto1$ and $3\mapsto2$. Therefore
$$
P(Y=0)=\frac38,\qquad
P(Y=1)=\frac18+\frac38=\frac12,\qquad
P(Y=2)=\frac18.
$$
The probabilities sum to one. Using only one inverse value for $Y=1$ would lose either the $X=0$ or $X=2$ contribution.

The law of $Y$ can now answer questions without returning to the full coin histories. For instance, $P(Y\le1)=7/8$. This simplification is one benefit of distributions: once a numerical quantity is identified, we can work with its law while remembering which transformations were used.

## Same distribution does not mean the same variable

Let $\Omega=\{-1,1\}$ with equal weights, and let $X(\omega)=\omega$. Define $Y=X$ and $Z=-X$. All three variables assign probability $1/2$ to each of $-1,1$, so they have the same distribution.

Nevertheless, $X=Y$ always, while $X=Z$ never. Their joint relationships differ even though the individual laws agree. Writing $X\overset d=Z$ means equality in distribution; writing $X=Z$ means equality as functions, or sometimes equality with probability one if that qualification is stated.

An independently generated second fair sign $W$ has that same marginal law again, but $P(X=W)=1/2$. A distribution table for one variable cannot tell us which of these couplings is intended. We need a joint model.

**Definition 6.8 (Independence of discrete variables).** Discrete variables $X,Y$ are independent when, for every pair of their values,
$$
P(X=x,Y=y)=p_X(x)p_Y(y).
$$
For finitely many variables, mutual independence requires the corresponding factorisation for their joint masses.

For discrete variables, the pointwise equality also gives independence of arbitrary events about their separate values. Indeed, summing over $x\in A$ and $y\in B$ gives
$$
P(X\in A,Y\in B)
=\sum_{x\in A}\sum_{y\in B}p_X(x)p_Y(y)
=P(X\in A)P(Y\in B).
$$
Nonnegative sums justify the regrouping in the countable case. This explains why independent numerical variables permit calculations with more complicated ranges as well as single values.

## Distribution summaries and their limits

A median is a value $m$ satisfying $P(X\le m)\ge1/2$ and $P(X\ge m)\ge1/2$. It need not be unique. For a finite law, one convenient convention is the lower median: the smallest support value where the CDF reaches at least one-half.

More generally, for $0<\alpha\le1$ a lower quantile of a finite law can be chosen as the smallest support value with $F_X(x)\ge\alpha$. The definition specifies a convention; several numerical procedures use different interpolation conventions for observed datasets.

A mode is a value with largest PMF in a finite law. A median, a mode and the expectation introduced next need not coincide. They answer different questions: a middle location, a most likely value and a probability-weighted average. None by itself describes all variability or dependence.

When transforming units, keep the transformed quantity explicit. If a wait measured in hours is $X$, the wait in minutes is $60X$, not a new independent measurement. Its numerical law changes under the transformation even though the underlying outcome is the same.

## Exercises

### Exercise 6.1
<a id="random-variables-distributions-ex-1"></a>

Roll a fair die and let $X$ be one for an even face and zero otherwise. Give its PMF and explain the preimages.

<details><summary>Hint 1</summary>

Group the six face outcomes by the value of the function.

</details>
<details><summary>Hint 2</summary>

Three faces map to each of zero and one.

</details>
<details><summary>Solution</summary>

The preimage of one is $\{2,4,6\}$, and that of zero is $\{1,3,5\}$. Each has probability $1/2$, so $p_X(0)=p_X(1)=1/2$. The variable is a function of the die outcome; its two values are equally likely because their preimages have equal total mass.

</details>

### Exercise 6.2
<a id="random-variables-distributions-ex-2"></a>

A PMF on $\{0,1,3\}$ is proportional to $1,2,1$. Find the masses and calculate $P(X>0)$.

<details><summary>Hint 1</summary>

The proportional weights must be normalised to total one.

</details>
<details><summary>Hint 2</summary>

The sum of the given weights is four.

</details>
<details><summary>Solution</summary>

The probabilities are $1/4,1/2,1/4$ respectively. Hence $P(X>0)=1/2+1/4=3/4$. Proportional weights are not probabilities until divided by their positive total; using raw weights would violate normalisation.

</details>

### Exercise 6.3
<a id="random-variables-distributions-ex-3"></a>

Write the CDF for the law in Exercise 6.2 and compute $P(0<X\le1)$ and $P(0\le X\le1)$.

<details><summary>Hint 1</summary>

The CDF jumps at zero, one and three.

</details>
<details><summary>Hint 2</summary>

Including zero adds its point mass to the first interval probability.

</details>
<details><summary>Solution</summary>

The CDF is zero below zero, $1/4$ on $[0,1)$, $3/4$ on $[1,3)$ and one on $[3,\infty)$. Therefore $P(0<X\le1)=3/4-1/4=1/2$, while including zero gives $3/4$. The endpoint distinction matters because zero has positive mass.

</details>

### Exercise 6.4
<a id="random-variables-distributions-ex-4"></a>

A variable has values $-2,-1,1,2$ with probabilities $1/8,3/8,3/8,1/8$. Find the law of $X^2$.

<details><summary>Hint 1</summary>

Both signs of the same magnitude produce the same square.

</details>
<details><summary>Hint 2</summary>

Add masses over all inverse values for each output.

</details>
<details><summary>Solution</summary>

The squared variable takes values one and four. Their probabilities are $3/8+3/8=3/4$ and $1/8+1/8=1/4$. Squaring is not one-to-one on the original support, so each output needs both sign contributions. These two masses sum to one.

</details>

### Exercise 6.5
<a id="random-variables-distributions-ex-5"></a>

For a finite discrete law, explain why a jump in its CDF at $a$ equals $P(X=a)$.

<details><summary>Hint 1</summary>

Compare the events $X<a$ and $X\le a$.

</details>
<details><summary>Hint 2</summary>

Their difference is exactly the point event $X=a$.

</details>
<details><summary>Solution</summary>

The CDF immediately before $a$ sums masses at values below $a$, while its value at $a$ includes those same masses and the mass at $a$. The difference is therefore $P(X=a)$. This also explains right-continuity of the finite step CDF: the mass is already included at the jump point itself.

</details>

### Exercise 6.6
<a id="random-variables-distributions-ex-6"></a>

Let $X$ be a fair sign, and compare $Y=X$, $Z=-X$ and an independent fair sign $W$. Find $P(X=Y)$, $P(X=Z)$ and $P(X=W)$.

<details><summary>Hint 1</summary>

The first two relationships are deterministic functions of the same outcome.

</details>
<details><summary>Hint 2</summary>

For the independent pair, two of the four equally likely sign pairs match.

</details>
<details><summary>Solution</summary>

The probabilities are one, zero and one-half respectively. All four individual variables have the same marginal law on $\{-1,1\}$, but their joint relationships differ. Equality in distribution does not determine whether variables agree, oppose one another or are independent.

</details>

### Exercise 6.7
<a id="random-variables-distributions-ex-7"></a>

A variable has masses $0.2,0.5,0.3$ at $0,1,4$. Find its unique mode and its lower median.

<details><summary>Hint 1</summary>

The mode maximises a point mass, not a CDF value.

</details>
<details><summary>Hint 2</summary>

The lower median is the first support value where cumulative probability reaches one-half.

</details>
<details><summary>Solution</summary>

The unique largest mass is $0.5$ at one, so the mode is one. The CDF is $0.2$ at zero and $0.7$ at one, so the lower median is also one. Their agreement in this law does not make the definitions equivalent; they are based on different properties of the distribution.

</details>

### Exercise 6.8
<a id="random-variables-distributions-ex-8"></a>

If $X$ takes values $1,2,3$ with probabilities $1/2,1/3,1/6$, give the law of the indicator $I=\mathbf1_{\{X\ge2\}}$.

<details><summary>Hint 1</summary>

The indicator has only the two possible numerical values zero and one.

</details>
<details><summary>Hint 2</summary>

The event producing one combines the values two and three.

</details>
<details><summary>Solution</summary>

We have $P(I=1)=1/3+1/6=1/2$ and $P(I=0)=1/2$. The original law has three values, but the indicator records only whether the threshold was crossed. It discards which of two and three occurred while preserving their combined event probability.

</details>

### Exercise 6.9
<a id="random-variables-distributions-ex-9"></a>

Can the function $F(t)=0$ for $t<0$, $F(t)=0.8$ for $0\le t<1$ and $F(t)=0.6$ for $t\ge1$ be a CDF? Explain two failures.

<details><summary>Hint 1</summary>

Every CDF is nondecreasing.

</details>
<details><summary>Hint 2</summary>

Its far-right limit must be one.

</details>
<details><summary>Solution</summary>

The proposed function drops from $0.8$ to $0.6$ at one, violating monotonicity of nested events. Its limit at positive infinity is $0.6$, not one, leaving missing total probability. Each failure independently prevents it from being a CDF. Values lying individually between zero and one are insufficient.

</details>

### Exercise 6.10
<a id="random-variables-distributions-ex-10"></a>

A waiting time in hours has values $1/2,1,2$ with probabilities $1/4,1/2,1/4$. Find the distribution in minutes and decide whether the two numerical variables are independent.

<details><summary>Hint 1</summary>

Changing units multiplies every value by sixty and leaves its probability attached.

</details>
<details><summary>Hint 2</summary>

The event that the hour value is one determines the minute value.

</details>
<details><summary>Solution</summary>

The minute variable takes values $30,60,120$ with the same masses. It is not independent of the hour variable: $P(X=1,Y=60)=1/2$, while $P(X=1)P(Y=60)=1/4$. The variables represent the same underlying wait in different units, so one is a deterministic nonconstant function of the other.

</details>

## Sources

This chapter's exposition, examples and exercises are original. A complementary primary source is Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapters 1 and 5, official CHANCE Project text, consulted 13 November 2026. The distinction between complete outcome records and numerical laws develops Euler's retained [Probability: Models Before Formulas](../../course-texts/atlas-probability-models.md).

## Summary

A random variable maps outcome records to numerical values. Its discrete law collects masses over preimages, and its CDF records cumulative probabilities with explicit endpoint conventions. Transformations combine every input mapping to the same output.

Equal distributions do not imply equal variables or determine dependence. Numerical summaries also answer different questions. [Expectation and variance](expectation-variance.md) next defines the probability-weighted average and a measure of spread, with their required moment assumptions.
