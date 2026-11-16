var e=`---
parent_id: book-introduction-to-probability
chapter_id: transformations-sums
title: "Transformations and Sums"
level: undergraduate
license: CC BY-SA 4.0
---

# Transformations and Sums

A probability model often describes a quantity before we transform it into the quantity we actually need. A device records a voltage but a calculation uses its square. Two delivery stages have separate durations but a customer experiences their sum. Two components have independent lifetimes but the system stops when the first fails. The task is to carry the original probability law through a function.

The reliable starting point is an event. Translate a statement about the output into a statement about the input, then calculate its probability under the original model. A change of variable formula is useful only after we know which inputs produce a particular output and where those inputs can lie. Support restrictions, signs and multiple inverse branches carry real probability information.

Read [continuous distributions](continuous-distributions.md) and [joint distributions and covariance](joint-distributions-covariance.md) first. We use derivatives and elementary integrals. Every convolution formula below explicitly assumes independence. Without independence, two marginal laws do not determine the distribution of their sum, minimum or maximum.

By the end you should be able to transform a distribution function, use a monotone density transformation, handle a square with two inverse branches, and derive a sum distribution by discrete or continuous convolution. These methods will supply the averages studied in the next two chapters.

## Begin with the preimage of an event

**Definition 11.1 (Transformed variable).** If $X$ is a random variable taking values in a stated domain and $g$ is a function on that domain, then $Y=g(X)$ is the random quantity whose value is obtained by applying $g$ to the observed value of $X$.

For a finite discrete model,

$$
P(Y=y)=\\sum_{\\{x:g(x)=y\\}}P(X=x).
$$

Distinct input values that produce the same output must have their masses added. This is especially relevant for absolute values, squares and rounded measurements. Applying the function only to the labels while retaining separate duplicate output rows fails to produce a probability mass function.

For a continuous model we usually begin instead with

$$
F_Y(y)=P(g(X)\\le y).
$$

The inequality identifies the input region. Its probability is calculated with $X$'s distribution function or density. Only after finding the whole piecewise distribution function do we differentiate to obtain a density.

The method also handles transformations whose output has point masses. If $Y=\\max(0,X)$, every negative input maps to zero. Even when $X$ has a density, $Y$ can have a positive point mass at zero. A density transformation formula for a smooth one-to-one function cannot describe that collapsed mass.

## Affine and monotone transformations

**Proposition 11.2 (Affine density rule).** Suppose $X$ has density $f_X$, $a\\ne0$, and $Y=aX+b$. Then

$$
f_Y(y)=\\frac{1}{|a|}f_X\\!\\left(\\frac{y-b}{a}\\right).
$$

The support is the image of the support of $X$ under the affine map.

*Proof.* When $a>0$, $F_Y(y)=F_X((y-b)/a)$, and differentiation gives the formula with denominator $a$. When $a<0$, the transformed inequality reverses, so $F_Y(y)=1-F_X((y-b)/a)$ for a variable with a density. Differentiating gives $-f_X((y-b)/a)/a$, equal to the displayed expression. ∎

The absolute value accounts for interval length. Multiplying every input by three stretches a probability interval to three times its width, so its density must fall to one third of its former height. A negative multiplier reverses orientation but cannot make density negative.

If $a=0$, the output is the constant $b$ and has a point mass one. That excluded case is not a technical nuisance: it changes the type of law.

**Proposition 11.3 (Monotone density rule).** Let $g$ be continuously differentiable and strictly monotone on an interval supporting $X$, with nonzero derivative on its interior. If $h$ is its inverse, then on the transformed interval

$$
f_Y(y)=f_X(h(y))|h'(y)|.
$$

*Proof.* For an increasing transformation, $g(X)\\le y$ is equivalent to $X\\le h(y)$; differentiation of the distribution function gives $f_X(h(y))h'(y)$. For a decreasing transformation, the inequality reverses and differentiation introduces a minus sign. Both cases are expressed by the absolute derivative. Outside the transformed interval the probability density is zero. ∎

This theorem deliberately states a manageable case. If the derivative vanishes at an isolated endpoint, a density may become unbounded near the corresponding output and still be integrable. If the function changes direction, partition the input support into monotone branches or return to the distribution function.

## Worked Example 11.4: squaring a signed input

Let $X$ be uniform on $(-2,2)$ and $Y=X^2$. The output lies between zero and four. For $0\\le y\\le4$,

$$
F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)
=\\frac{2\\sqrt y}{4}=\\frac{\\sqrt y}{2}.
$$

For $y<0$ the distribution function is zero; for $y>4$ it is one. Differentiation gives $f_Y(y)=1/(4\\sqrt y)$ on $(0,4)$. Its improper integral is one, so the infinite height as $y$ approaches zero is harmless.

A one-branch substitution using only $X=\\sqrt y$ would give half this density. The negative branch also contributes probability. This is why the monotone rule cannot be applied to squaring on an interval that crosses zero without further work.

The chance that $Y<1$ is $F_Y(1)=1/2$. We can also calculate its mean without using the new density: $E[Y]=E[X^2]=4/3$. Using the transformed density gives the same result,

$$
\\int_0^4 y\\,\\frac{1}{4\\sqrt y}\\,dy=\\frac43.
$$

The two calculations answer different questions. Finding a transformed law gives probabilities of every output interval; finding an expectation alone usually needs less work.

## Discrete sums and convolution

**Theorem 11.5 (Discrete convolution).** If integer-valued variables $X,Y$ are independent, then for every integer $s$,

$$
P(X+Y=s)=\\sum_x P(X=x)P(Y=s-x).
$$

For finite supports the sum is finite; for countable supports it is a nonnegative series.

*Proof.* Partition the event $X+Y=s$ according to the value $x$ of $X$. Its disjoint pieces are $\\{X=x,Y=s-x\\}$. Add their probabilities and use independence on each piece to obtain the product. ∎

The general formula without independence is $\\sum_x P(X=x,Y=s-x)$. The separate distributions do not supply those joint terms. For example, if $X$ is a fair zero-one indicator, both $Y=X$ and $Y=1-X$ have the same marginal law as $X$. In the first case their sum is zero or two, each with probability one half; in the second it is always one.

The finite sum of independent binomial counts with a common success probability is binomial, with trial numbers added. One proof combines their independent Bernoulli trials into one longer sequence. If their success probabilities differ, the resulting sum generally is not binomial. Naming a familiar distribution is justified by its assumptions, not merely by its appearance.

## Worked Example 11.6: two unequal discrete stages

Let $X$ take zero or two with probabilities $3/4,1/4$, and independently let $Y$ take zero or one with probabilities $1/3,2/3$. Find the law and variance of $S=X+Y$.

Each output here has exactly one input pair. Independence gives

$$
P(S=0)=\\frac14,\\quad P(S=1)=\\frac12,\\quad
P(S=2)=\\frac1{12},\\quad P(S=3)=\\frac16.
$$

These probabilities sum to one. The mean of $X$ is $1/2$ and its variance is $1-1/4=3/4$. The mean of $Y$ is $2/3$ and its variance is $2/9$. Therefore $E[S]=7/6$ and, by independence, $\\operatorname{Var}(S)=3/4+2/9=35/36$.

As a check from the output law, $E[S^2]=1/2+4/12+9/6=7/3$. Subtracting $(7/6)^2$ again gives $35/36$. Agreement helps locate arithmetic errors, but the reason the product probabilities and variance addition are valid remains the explicit independence assumption.

If a stage with duration two could occur only when the other stage takes duration one, the same marginals could produce another sum law. A physical interpretation involving consecutive stages does not by itself make their durations independent.

## Continuous convolution

**Theorem 11.7 (Continuous convolution).** If $X,Y$ are independent and have densities $f_X,f_Y$, then $S=X+Y$ has density

$$
f_S(s)=\\int_{-\\infty}^{\\infty} f_X(x)f_Y(s-x)\\,dx.
$$

*Proof.* Independence gives joint density $f_X(x)f_Y(y)$. Integrating the region $x+y\\le s$ yields

$$
F_S(s)=\\int_{-\\infty}^{\\infty} f_X(x)F_Y(s-x)\\,dx.
$$

For the piecewise smooth, bounded-support densities used in the worked example below, differentiation on each smooth piece gives the asserted formula directly. More generally the same result follows by a change of variables in the nonnegative double integral; no moment assumption is required for the density formula. ∎

The integrand is nonzero only where both $x$ and $s-x$ lie in their respective supports. Solving those simultaneous inequalities is the main part of many convolution problems. Integrating over the full support of $X$ without checking the support of $Y$ often produces negative “densities” or a formula that fails to integrate to one.

Finite means or variances are not needed just to define a convolution distribution. They are needed for corresponding moment statements. If the means exist absolutely, $E[X+Y]=E[X]+E[Y]$ regardless of dependence. If second moments are finite and the variables are independent, their variances add.

## Worked Example 11.8: the sum of two uniforms

Let $U,V$ be independent uniform variables on $(0,1)$, and let $S=U+V$. Both densities equal one on their support. The convolution integrand is one when $0<x<1$ and $0<s-x<1$.

These inequalities require $\\max(0,s-1)<x<\\min(1,s)$. The length of this interval is $s$ when $0<s<1$, and $2-s$ when $1\\le s<2$. Outside $(0,2)$ there is no permitted input pair. Hence

$$
f_S(s)=
\\begin{cases}
s,&0<s<1,\\\\
2-s,&1\\le s<2,\\\\
0,&\\text{otherwise}.
\\end{cases}
$$

The triangular shape has an elementary explanation: many pairs produce a sum near one, while few produce a sum near zero or two. Uniform inputs do not produce a uniform sum.

For example $P(S<1/2)=\\int_0^{1/2}s\\,ds=1/8$. By symmetry $P(S>3/2)=1/8$. The mean is one and the variance is $1/6$, obtained by adding the two uniform variances. The average $(U+V)/2$ therefore has mean one half and variance $1/24$. Averaging preserves the centre while reducing spread, an observation that leads directly to the law of large numbers.

## Minima, maxima and checks

For independent variables with distribution functions $F_X,F_Y$,

$$
P(\\max(X,Y)\\le t)=F_X(t)F_Y(t).
$$

The event requires both variables to be at most $t$. For the minimum, it is easier to calculate the complement:

$$
P(\\min(X,Y)>t)=(1-F_X(t))(1-F_Y(t)).
$$

Both products require independence. For identical variables that move together, the minimum and maximum equal that common variable, and these squared formulas are wrong.

Before accepting a transformed law, check its support, nonnegativity, total mass, and any obvious symmetry. A sum of nonnegative variables cannot have mass below zero. A square cannot be negative. If the inputs have finite moments, a moment calculated from the output law should agree with linearity or the variance formula. Such checks are mathematical habits, not substitutes for deriving the correct event.

Rounding introduces a final useful contrast. If a continuous length $X$ is rounded down to an integer $R$, then $P(R=k)=P(k\\le X<k+1)$. The output is discrete even though the input is continuous. The same event method covers it without any density derivative.

## Exercises

### Exercise 11.1
<a id="transformations-sums-ex-1"></a>

A variable takes $-2,-1,1,2$ with probabilities $1/10,2/10,3/10,4/10$. Find the law of its square.

<details>
<summary>Hint 1</summary>

Several inputs can have the same square.
</details>
<details>
<summary>Hint 2</summary>

Group the two inputs of absolute value one and the two of absolute value two.
</details>
<details>
<summary>Solution</summary>

The square is one with probability $2/10+3/10=1/2$, and four with probability $1/10+4/10=1/2$. These exhaust the output support. Keeping four separate output entries would duplicate labels rather than state a mass function.
</details>

### Exercise 11.2
<a id="transformations-sums-ex-2"></a>

Let $X\\sim\\operatorname{Unif}(1,3)$ and $Y=5-2X$. Find the density, mean and variance of $Y$.

<details>
<summary>Hint 1</summary>

The decreasing map reverses the order of the support endpoints.
</details>
<details>
<summary>Hint 2</summary>

The support length doubles and the variance is multiplied by four.
</details>
<details>
<summary>Solution</summary>

The transformed support is $(-1,3)$. The density is $(1/2)/2=1/4$ there, so $Y$ is uniform on that interval. Its mean is $5-2(2)=1$ and variance is $4(2^2/12)=4/3$. The negative slope changes orientation, not the sign of the density.
</details>

### Exercise 11.3
<a id="transformations-sums-ex-3"></a>

For $U\\sim\\operatorname{Unif}(0,1)$ let $Y=\\sqrt U$. Find its distribution function and density.

<details>
<summary>Hint 1</summary>

For output values in the support, square the inequality.
</details>
<details>
<summary>Hint 2</summary>

The transformed support remains $(0,1)$.
</details>
<details>
<summary>Solution</summary>

For $0\\le y\\le1$, $P(\\sqrt U\\le y)=P(U\\le y^2)=y^2$. The distribution function is zero below zero and one above one. The density is $2y$ on $(0,1)$ and zero elsewhere. Its increasing shape reflects the stretching of small input values.
</details>

### Exercise 11.4
<a id="transformations-sums-ex-4"></a>

Let $X$ be uniform on $(-1,1)$ and put $Y=\\max(0,X)$. Describe the whole law.

<details>
<summary>Hint 1</summary>

All nonpositive input values produce the same output.
</details>
<details>
<summary>Hint 2</summary>

The positive outputs retain the original density height.
</details>
<details>
<summary>Solution</summary>

There is mass one half at zero. For $0<y<1$, the continuous part has density one half, with total area one half. Equivalently $F_Y(y)=0$ for $y<0$, and $(1+y)/2$ for $0\\le y<1$, followed by one. No single ordinary density represents the jump at zero.
</details>

### Exercise 11.5
<a id="transformations-sums-ex-5"></a>

Let $X,Y$ be independent indicators with success probabilities $p,q$. Find the law of $X+Y$ for $0\\le p,q\\le1$.

<details>
<summary>Hint 1</summary>

The possible sums are zero, one and two.
</details>
<details>
<summary>Hint 2</summary>

There are two disjoint ways to obtain sum one.
</details>
<details>
<summary>Solution</summary>

The probabilities are $(1-p)(1-q)$ at zero, $p(1-q)+(1-p)q$ at one, and $pq$ at two. They add to one. If $p=q$, this is binomial with two trials. Otherwise it generally is not a binomial law with a common trial success probability.
</details>

### Exercise 11.6
<a id="transformations-sums-ex-6"></a>

Give two joint models with both marginals uniform on $(0,1)$ but different sum laws.

<details>
<summary>Hint 1</summary>

Use one uniform variable to construct the other.
</details>
<details>
<summary>Hint 2</summary>

Compare $Y=X$ and $Y=1-X$.
</details>
<details>
<summary>Solution</summary>

In the first model take $Y=X=U$, giving sum $2U$, uniform on $(0,2)$. In the second take $X=U,Y=1-U$, giving constant sum one. Both variables individually are uniform in both models. Neither pair is independent, so the independent triangular convolution law does not apply.
</details>

### Exercise 11.7
<a id="transformations-sums-ex-7"></a>

For independent uniforms $U,V$ on $(0,1)$, find $P(1/2<U+V<3/2)$.

<details>
<summary>Hint 1</summary>

Use the two equal tails of the triangular density.
</details>
<details>
<summary>Hint 2</summary>

Each tail outside the interval has area one eighth.
</details>
<details>
<summary>Solution</summary>

The lower tail is $\\int_0^{1/2}s\\,ds=1/8$. Symmetry gives the same upper tail above three halves. Subtracting both from one gives $3/4$. Endpoint choices do not matter because the sum has a density.
</details>

### Exercise 11.8
<a id="transformations-sums-ex-8"></a>

Independent exponential variables $X,Y$ have the same rate $\\lambda>0$. Derive the density of their sum.

<details>
<summary>Hint 1</summary>

For a positive sum $s$, the allowed first coordinate runs from zero to $s$.
</details>
<details>
<summary>Hint 2</summary>

The product of the exponential factors does not depend on the integration variable.
</details>
<details>
<summary>Solution</summary>

For $s>0$, convolution gives $\\int_0^s\\lambda^2e^{-\\lambda x}e^{-\\lambda(s-x)}\\,dx=\\lambda^2s e^{-\\lambda s}$. The density is zero for $s<0$. Integration by parts confirms total area one. Its mean is $2/\\lambda$, consistent with adding the two finite means.
</details>

### Exercise 11.9
<a id="transformations-sums-ex-9"></a>

For independent uniforms on $(0,1)$ find the mean of their maximum.

<details>
<summary>Hint 1</summary>

First find the maximum's distribution function.
</details>
<details>
<summary>Hint 2</summary>

Differentiate $t^2$ on the unit interval.
</details>
<details>
<summary>Solution</summary>

For $0<t<1$, the maximum is at most $t$ exactly when both variables are, with probability $t^2$ by independence. Its density is $2t$, so the mean is $\\int_0^1 2t^2\\,dt=2/3$. This exceeds the mean of either input, as expected for a maximum.
</details>

### Exercise 11.10
<a id="transformations-sums-ex-10"></a>

Let $X_1,\\ldots,X_n$ be independent with common finite mean $\\mu$ and finite variance $\\sigma^2$. Find the mean and variance of their average. Which step needs independence?

<details>
<summary>Hint 1</summary>

Treat the average as a scaled sum.
</details>
<details>
<summary>Hint 2</summary>

Scaling by $1/n$ multiplies variance by $1/n^2$.
</details>
<details>
<summary>Solution</summary>

Linearity gives mean $n\\mu/n=\\mu$, without independence. Independence makes all cross covariances zero, so the sum has variance $n\\sigma^2$ and the average has variance $\\sigma^2/n$. Without independence, extra covariance terms appear, and the spread need not decrease at this rate.
</details>

## Sources

Transformations and sums are standard introductory topics; compare Blitzstein and Hwang through [Harvard Stat 110](https://stat110.hsites.harvard.edu/) and [Grinstead and Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf), chapter 7. The derivations, applications and exercise choices here are original.

## Summary

A transformed law is found by identifying which inputs produce an output event. Monotone transformations rescale density by an absolute inverse derivative, while several inverse branches contribute separate probability. Independent sums use convolution with limits fixed by both supports. Dependence changes sum, minimum and maximum laws even when every marginal stays the same. The [law of large numbers](law-of-large-numbers.md) now turns the variance calculation for an average into a precise probability bound.
`;export{e as default};