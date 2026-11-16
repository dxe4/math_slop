
# Continuous Laws and Change of Variables

A graph drawn without jumps is not automatically a density, and a random variable with no atoms need not have a density. These distinctions become decisive when transforming continuous laws. The safe principle is always the pushforward identity

$\mathbb{P}(g(X)\in B)=\mathbb{P}(X\in g^{-1}(B))$.

Derivative and Jacobian formulas are efficient consequences of that identity, but only after their hypotheses have been checked. This chapter develops those formulas, the most useful named continuous families, and simulation transformations. The local prerequisites are CDFs, laws, independence, and elementary one-variable calculus. Expectations are used only in optional interpretations; the distribution calculations themselves do not require expectation theory.

## 1. Three meanings of continuous

Let $X$ have CDF $F(x)=\mathbb{P}(X\le x)$. Its law is **atomless**, or sometimes simply called continuous, when

$\mathbb{P}(X=x)=0$ for every real $x$.

Because $\mathbb{P}(X=x)=F(x)-F(x-)$, this is equivalent to continuity of $F$. A stronger property is **absolute continuity**: there is a nonnegative integrable function $f$ such that

$\mathbb{P}(X\in B)=\int_{B} f(x)dx$

for every Borel set $B$. Then

$F(x)=\int_{-\infty }^{x} f(t)dt$.

The function $f$ is a **probability density function**. It is determined only up to changes on sets of Lebesgue measure zero. Thus two densities that differ at one point describe exactly the same law.

Absolute continuity implies an atomless law, because a singleton has length zero. The converse is false. The standard counterexample is the Cantor distribution. Its CDF is continuous and increases from zero to one, but its probability is concentrated on the middle-thirds Cantor set, a set of Lebesgue measure zero. If it had a density $f$, then

$1=\mathbb{P}(X\in C)=\int_{C} f(x)dx=0$,

an impossibility. The Cantor law is **singular continuous**: it has neither atoms nor an ordinary density.

There is therefore a strict hierarchy:

- a density implies a continuous CDF;
- a continuous CDF need not imply a density;
- a differentiable CDF need not be recovered everywhere by integrating its pointwise derivative unless absolute continuity is known.

The last warning matters because the Cantor CDF has derivative zero almost everywhere while still rising from zero to one.

### Density versus CDF

A CDF is a probability: $F(x)$ lies between zero and one and is nondecreasing. A density is a rate relative to length: it may exceed one and need not be monotone. For example, the uniform law on $[0,1/4]$ has density $4$ on that interval. Its total integral, not its height, is one.

When $F$ is absolutely continuous, the fundamental theorem of calculus gives $F'(x)=f(x)$ at almost every $x$. Conversely, a nonnegative integrable $f$ with integral one defines an absolutely continuous law. Checking only $f\ge 0$ is insufficient; normalization and support are part of the model.

## 2. Interval probabilities and support

For every CDF, regardless of whether a density exists,

$\mathbb{P}(a<X\le b)=F(b)-F(a)$.

If $F$ is continuous, endpoint choices do not matter, so $\mathbb{P}(a\le X\le b)=F(b)-F(a)$. If a density exists, this becomes

$\mathbb{P}(a\le X\le b)=\int_{a}^{b} f(x)dx$.

The **support** records where probability can occur locally. If $f$ is positive throughout an open interval, every point of that interval belongs to the support. A density formula may be altered on a null set without changing the support of the law, so support should not be defined as the literal set where one chosen version of $f$ is nonzero. A safer definition is the smallest closed set having probability one, when such language is available, or the set of points whose every open neighbourhood has positive probability.

### Worked normalization

Suppose $f(x)=c x(1-x)$ for $0<x<1$ and zero elsewhere. Then

$1=c\int_{0}^{1}(x-x^{2})dx=c(1/2-1/3)=c/6$,

so $c=6$. For $0\le x\le 1$,

$F(x)=\int_{0}^{x} 6t(1-t)dt=3x^{2}-2x^{3}$.

Outside the support, $F(x)=0$ for $x<0$ and $F(x)=1$ for $x>1$. A CDF formula without these support cases is incomplete.

## 3. Monotone change of variables

Let $X$ have density $f_{X}$, and let $Y=g(X)$. Suppose first that $g$ is continuously differentiable and strictly increasing on an interval containing the support of $X$, with $g'(x)>0$ there. For $y$ in the image of the support,

$F_{Y}(y)=\mathbb{P}(g(X)\le y)=F_{X}(g^{-1}(y))$.

Differentiation and the inverse function theorem give

$f_{Y}(y)=f_{X}(g^{-1}(y)) / g'(g^{-1}(y))$.

Equivalently, writing $x=g^{-1}(y)$,

$f_{Y}(y)=f_{X}(x)\lvert dx/dy\rvert$.

If $g$ is strictly decreasing and $g'(x)<0$, the CDF uses a survival probability, but differentiation leads to the same absolute-value formula

$f_{Y}(y)=f_{X}(g^{-1}(y)) \lvert (g^{-1})'(y)\rvert$.

The density is zero outside the transformed support.

### Proof by small intervals

The formula can also be seen without differentiating a CDF. For a small output interval of length $dy$ around $y$, its inverse image has approximate length $\lvert dx/dy\rvert dy$. Probability is approximately input density times input length:

$f_{X}(x)\lvert dx/dy\rvert dy$.

Dividing by $dy$ gives the output density. This argument explains the absolute value: orientation changes, probability does not.

### Worked affine transformation

If $Y=aX+b$ with $a\ne 0$, then $x=(y-b)/a$ and $\lvert dx/dy\rvert =1/\lvert a\rvert$. Therefore

$f_{Y}(y)=(1/\lvert a\rvert )f_{X}((y-b)/a)$.

The factor $1/\lvert a\rvert$ is essential. Stretching the horizontal axis by $\lvert a\rvert$ must shrink density height by the same factor to preserve total area.

### Hypotheses that cannot be erased

The displayed formula assumes a differentiable inverse at the relevant value. If $g'$ vanishes, the output density may blow up. That is not necessarily an error, but the ordinary inverse-function proof no longer applies at the critical value. If $g$ has flat intervals of positive input probability, $Y$ acquires atoms and no single ordinary density describes the entire law. If the input law is singular continuous, multiplying by an inverse derivative does not magically create an input density.

## 4. Nonmonotone maps and inverse branches

Now suppose the support can be split into finitely many intervals on each of which $g$ is one-to-one and differentiable. At a regular value $y$, let the inverse images be $x_{1},...,x_{k}$, with $g'(x_{j})\ne 0$. Then

$f_{Y}(y)=\sum_{j=1}^{k} f_{X}(x_{j})/\lvert g'(x_{j})\rvert$.

Every inverse branch contributes probability. The formula follows by applying the monotone rule on each branch and adding the mutually exclusive contributions.

### Worked square transformation

Let $X$ have a continuous density on the whole real line and set $Y=X^{2}$. For $y>0$, the inverse points are $\sqrt{y}$ and $-\sqrt{y}$, and $\lvert g'(x)\rvert =2\lvert x\rvert$. Hence

$f_{Y}(y)=[f_{X}(\sqrt{y})+f_{X}(-\sqrt{y})]/[2\sqrt{y}]$, $y>0$.

If $X$ is symmetric, this reduces to $f_{X}(\sqrt{y})/\sqrt{y}$. The output density may diverge as $y\downarrow 0$; integrability, not boundedness, is the relevant condition.

### Critical points and CDF repair

At $y=0$, the derivative formula for squaring is singular. The law is still obtained safely from

$F_{Y}(y)=\mathbb{P}(-\sqrt{y}\le X\le \sqrt{y})$.

The CDF method is also preferable for a map with infinitely many branches or awkward support intersections. A memorized branch sum is not a substitute for identifying the full inverse image.

### A counterexample with an atom

Let $X$ be uniform on $[-1,1]$ and define $g(x)=0$ for $x\le 0$, while $g(x)=x$ for $x>0$. Then $Y=g(X)$ has probability $1/2$ at zero and density $1/2$ on $(0,1)$. A derivative calculation on the strictly increasing branch sees only the continuous half. The constant branch collapses an interval of positive probability to one point, creating an atom.

## 5. Uniform and exponential laws

The law $\operatorname{Uniform}(a,b)$, with $a<b$, has density

$f(x)=1/(b-a)$ for $a<x<b$, and zero otherwise.

Its CDF rises linearly from zero to one. Uniformity means equal-length subintervals receive equal probability, not that every point has positive equal probability.

The exponential law with rate $\lambda >0$ has density

$f(x)=\lambda e^{-\lambda x}$ for $x\ge 0$, and zero otherwise,

with CDF $F(x)=1-e^{-\lambda x}$ on $x\ge 0$. Its survival function is

$\mathbb{P}(X>x)=e^{-\lambda x}$.

It is memoryless:

$\mathbb{P}(X>s+t \mid X>s)=e^{-\lambda (s+t)}/e^{-\lambda s}=e^{-\lambda t}=\mathbb{P}(X>t)$.

This identity characterizes the exponential family among nondegenerate continuous laws on the nonnegative line under mild regularity. The rate parameter has inverse units: if time is measured in hours, $\lambda$ has units per hour.

### Minimum of exponentials

For independent $X_{i}\sim \operatorname{Exponential}(\lambda_{i})$,

$\mathbb{P}(\min_{i} X_{i}>t)=\prod_{i} e^{-\lambda_{i} t}=e^{-(\sum_{i} \lambda_{i})t}$.

Thus the minimum is exponential with rate $\sum_{i} \lambda_{i}$. This is a survival-function calculation; it requires independence.

## 6. Normal laws and standardization

The standard normal density is

$\varphi (z)=(2\pi )^{-1/2}e^{-z^{2}/2}$, $z\in \mathbb{R}$.

Its integral is one. A classic proof squares the integral $I=\int e^{-x^{2}/2}dx$, interprets $I^{2}$ as an integral over the plane, and changes to polar coordinates:

$I^{2}=\int_{0}^{2\pi }\int_{0}^\infty e^{-r^{2}/2}r dr d\theta =2\pi$.

Hence $I=\sqrt{2\pi }$. This two-dimensional calculation is a preview of multivariable Jacobians.

If $Z$ is standard normal and $X=\mu +\sigma Z$ with $\sigma >0$, then the affine rule gives

$f_{X}(x)=[1/(\sigma \sqrt{2\pi })]\exp(-(x-\mu )^{2}/(2\sigma^{2}))$.

We write $X\sim \mathcal{N}(\mu ,\sigma^{2})$. Conversely,

$Z=(X-\mu )/\sigma$

is standard normal. The second parameter is the variance $\sigma^{2}$, not the standard deviation $\sigma$; confusing these parameterizations changes the law.

The normal CDF has no elementary closed form. That is not a defect. Probabilities can be represented by an integral, evaluated numerically, or transformed through a reliable standard-normal routine.

## 7. Gamma and beta families

For shape $\alpha >0$ and rate $\lambda >0$, the gamma density is

$f(x)=[\lambda^\alpha /\Gamma (\alpha )]x^{\alpha -1}e^{-\lambda x}$, $x>0$,

where

$\Gamma (\alpha )=\int_{0}^\infty t^{\alpha -1}e^{-t}dt$.

The substitution $t=\lambda x$ verifies normalization. When $\alpha =1$, the gamma law is exponential with rate $\lambda$. For positive integers $\alpha =n$, it describes the sum of $n$ independent exponential waiting times with the same rate; a later convolution chapter proves this claim.

Some sources use a scale parameter $\theta =1/\lambda$, writing $e^{-x/\theta }/(\Gamma (\alpha )\theta^\alpha )$. Rate and scale must never be substituted without inversion.

For $\alpha ,\beta >0$, the beta density is

$f(x)=x^{\alpha -1}(1-x)^{\beta -1}/B(\alpha ,\beta )$, $0<x<1$,

where

$B(\alpha ,\beta )=\int_{0}^{1} t^{\alpha -1}(1-t)^{\beta -1}dt$.

The normalizing constants satisfy

$B(\alpha ,\beta )=\Gamma (\alpha )\Gamma (\beta )/\Gamma (\alpha +\beta )$.

This identity can be proved by transforming two independent gamma variables to their sum and proportion. It is also an important preview of multivariate change of variables. The beta family includes the uniform law when $\alpha =\beta =1$; it can be U-shaped, one-sided, bell-shaped, or flat depending on the shapes.

## 8. Quantiles and inverse-transform simulation

Let $F$ be a CDF and define its generalized inverse

$Q(u)=\inf\{x:F(x)\ge u\}$, $0<u<1$.

If $U\sim \operatorname{Uniform}(0,1)$, then $Q(U)$ has CDF $F$. For a strictly increasing continuous CDF, this is ordinary inversion.

### Exponential simulation

Set $u=F(x)=1-e^{-\lambda x}$. Solving gives

$x=-(1/\lambda )\log(1-u)$.

Thus $X=-(1/\lambda )\log(1-U)$ is exponential with rate $\lambda$. Since $1-U$ is also uniform on $(0,1)$, one often writes $X=-(1/\lambda )\log U$. In software, the first form implemented with an accurate $\operatorname{log1p}(-u)$ can be numerically better when $u$ is close to zero. Endpoint conventions matter: $\log 0$ is not finite.

### A beta example by a simpler transform

If $U$ is uniform and $X=U^{1/\alpha }$, then for $0\le x\le 1$,

$\mathbb{P}(X\le x)=\mathbb{P}(U\le x^\alpha )=x^\alpha$.

The density is $\alpha x^{\alpha -1}$, which is $\operatorname{Beta}(\alpha ,1)$. Not every beta quantile has an elementary formula; numerical inversion or a specialized sampler may be required.

### Simulation is a mathematical map plus an implementation

The inverse-transform theorem assumes an ideal continuous uniform variable. A pseudorandom generator emits one of finitely many machine values. Numerical quantiles may round, overflow, or return infinities at endpoints. A simulation audit therefore records:

- the exact target transformation;
- the uniform endpoint convention;
- numerical approximations and parameterization;
- evidence that generated support and tail behavior are plausible;
- a seed or reproducible randomness protocol when results must be replicated.

These checks do not prove a generator is random, but they prevent elementary distributional and numerical errors.

## 9. Box–Muller as a two-dimensional transformation

Let $U_{1},U_{2}$ be independent uniform variables on $(0,1)$ and define

$R=\sqrt{-2\log U_{1}}$, $\Theta =2\pi U_{2}$,

$Z_{1}=R \cos \Theta$, $Z_{2}=R \sin \Theta$.

Then $Z_{1},Z_{2}$ are independent standard normal variables. Here is the density argument. The transform from $U_{1}$ to $R$ gives

$\mathbb{P}(R\le r)=\mathbb{P}(U_{1}\ge e^{-r^{2}/2})=1-e^{-r^{2}/2}$

for $r\ge 0$, so $f_{R}(r)=re^{-r^{2}/2}$. The angle $\Theta$ is uniform on $(0,2\pi )$ and independent of $R$; hence

$f_{R,\Theta }(r,\theta )=(1/(2\pi ))re^{-r^{2}/2}$.

Changing from polar to Cartesian cancels the factor $r$, yielding

$f_{Z_{1},Z_{2}}(z_{1},z_{2})=(1/(2\pi ))e^{-(z_{1}^{2}+z_{2}^{2})/2}$

$=\varphi (z_{1})\varphi (z_{2})$.

Factorization of the joint density proves both standard normal marginals and independence. This calculation depends on a multivariable Jacobian, developed systematically in a later chapter.

## 10. Assumptions, counterexamples, and an audit

Continuous-distribution calculations commonly fail in predictable ways.

### Failure 1: differentiating every continuous CDF

A continuous CDF can be singular. Before calling $F'$ a density, establish absolute continuity or directly verify that integrating the proposed derivative recovers $F$.

### Failure 2: treating density height as point mass

For an absolutely continuous law, $\mathbb{P}(X=x)=0$ even when $f(x)>0$. Probability is area over a set, not the height at one point.

### Failure 3: omitting the Jacobian factor

Substituting $x=g^{-1}(y)$ into $f_{X}$ is incomplete. The factor $\lvert (g^{-1})'(y)\rvert$ compensates for local stretching.

### Failure 4: keeping only one inverse branch

For $Y=X^{2}$, both signs contribute. More generally, sum over every regular inverse point lying in the actual input support.

### Failure 5: ignoring collapsed intervals

A map constant on a set of positive probability creates an atom. The output may be mixed even when the input has a density.

### Failure 6: forgetting support and units

A formally positive expression outside the attainable image is not an output density. Rates, scales, shifts, and variances also carry units or squared units; dimensional inconsistency often exposes a parameter error.

### Continuous-law audit

Before accepting a result, ask:

1. Is the law merely atomless, or is absolute continuity actually established?
2. Does the proposed density stay nonnegative and integrate to one?
3. Are all support cases and endpoints stated?
4. Is the transformation one-to-one? If not, are all inverse branches included?
5. Does the derivative vanish, fail to exist, or become infinite at a critical point?
6. Can any positive-probability set be collapsed into an atom?
7. Is the absolute Jacobian or inverse-derivative factor present?
8. Are gamma rate and scale, or normal variance and standard deviation, distinguished?
9. Does a simulation handle uniform endpoints and numerical tails safely?
10. Can the result be checked by integrating to one or by reconstructing its CDF?

## Further worked transformations

Density identities in this chapter specify versions up to Lebesgue-null changes. At continuity points of an input density, ordinary differentiation of its integrated CDF gives that density value; for a merely integrable density, derivative equalities are almost-everywhere statements. Assigning a different value at one isolated point leaves the distribution unchanged. A change-of-variables formula should likewise be understood as a density version on regular branches, not as a claim that every arbitrary pointwise version differentiates correctly everywhere.

### Worked Example 6.1: reciprocal exponential and moment boundaries

Let $X$ be exponential with rate one and put $Y=1/X$. The map is decreasing on the positive half-line, with inverse $x=1/y$ and absolute inverse derivative $1/y^2$. Thus
$f_Y(y)=e^{-1/y}/y^2$ for $y>0$, and the density is zero otherwise.

A direct CDF calculation confirms the orientation: $P(Y\le y)=P(X\ge1/y)=e^{-1/y}$ for $y>0$. This tends to zero at the left support endpoint and to one at infinity. The reciprocal map sends small positive inputs to very large outputs, producing a heavy right tail.

In particular $P(Y>y)=1-e^{-1/y}$ behaves like $1/y$ as $y$ tends to infinity. Its mean is infinite by the tail integral, even though $X$ has finite moments of all positive integer orders. Smoothness of a transformation does not preserve moments without bounds on its growth near the input support's endpoints. The distribution calculation itself requires no finite output mean.

### Worked Example 6.2: a gamma scale change checked twice

Let $X$ have gamma shape three and rate two, with density $4x^2e^{-2x}$ on $x>0$. Set $Y=4X$. The inverse map is $x=y/4$, with inverse derivative one quarter. Therefore
$f_Y(y)=4(y/4)^2e^{-y/2}(1/4)=y^2e^{-y/2}/16$ on $y>0$.

This is gamma shape three and rate one half, since $(1/2)^3/\Gamma(3)=1/16$. The shape is unchanged while the rate is divided by the scale multiplier. Substituting the old rate without changing it would contradict the units and the direct density calculation.

The result can also be checked by the CDF relation $F_Y(y)=F_X(y/4)$. Differentiating this integrated relation where the smooth density exists gives the same factor. Both methods show that a larger positive scale stretches lifetimes while reducing their rate parameter.

### Worked Example 6.3: two branches in a trigonometric map

Let $\Theta$ be uniform on $(0,\pi)$ and set $Y=\sin\Theta$. The support is $(0,1)$, and each regular output has inverse angles $\arcsin y$ and $\pi-\arcsin y$. Their derivative magnitudes are both $1/\sqrt{1-y^2}$, so
$f_Y(y)=2/(\pi\sqrt{1-y^2})$ for $0<y<1$.

Its integral is one because the antiderivative is $2\arcsin y/\pi$. The density diverges as the output approaches one: many nearby angles are compressed by the nearly horizontal top of the sine curve. There is no atom at one, since the only exact input angle producing it is $\pi/2$, a null event.

For $0\le y\le1$, the CDF is $2\arcsin y/\pi$. For example $P(Y\le1/2)=1/3$. This gives an explicit way to check both inverse branches without relying on a sketch of the density. Critical output values can have unbounded densities without positive point mass.

## 11. Exercises with complete solutions

### 1. Normalize a triangular density

**Exercise 6.1**
<a id="continuous-laws-and-change-of-variables-ex-1"></a>

Let $f(x)=cx$ for $0<x<2$ and zero otherwise. Find $c$ and the CDF.

<details>
<summary>Hint 1</summary>

Normalise over the full positive support.

</details>
<details>
<summary>Hint 2</summary>

Integrate the resulting density up to each interior threshold and include outer CDF branches.

</details>
<details>
<summary>Solution</summary>

**Solution.** Normalization requires

$1=\int_{0}^{2} cx dx=2c$,

so $c=1/2$. Therefore

$F(x)=0$ for $x\le 0$,

$F(x)=\int_{0}^{x} t/2 dt=x^{2}/4$ for $0<x<2$,

and $F(x)=1$ for $x\ge 2$. The endpoint values agree, so the CDF is continuous.


</details>

### 2. Density values are not probabilities

**Exercise 6.2**
<a id="continuous-laws-and-change-of-variables-ex-2"></a>

Let $X\sim \operatorname{Uniform}(0,1/4)$. Find $f_{X}(1/8)$ and $\mathbb{P}(X=1/8)$, and explain why they differ.

<details>
<summary>Hint 1</summary>

Separate density height from the integral over a singleton.

</details>
<details>
<summary>Hint 2</summary>

The support length fixes the uniform height, while a point has zero length.

</details>
<details>
<summary>Solution</summary>

**Solution.** The interval length is $1/4$, so the density height is $4$; hence $f_{X}(1/8)=4$. But an absolutely continuous law assigns probability zero to every singleton, so $\mathbb{P}(X=1/8)=0$. Density is probability per unit length, whereas a point has zero length.


</details>

### 3. A continuous law without a density

**Exercise 6.3**
<a id="continuous-laws-and-change-of-variables-ex-3"></a>

Suppose an atomless probability law assigns probability one to a Borel set $C$ of Lebesgue measure zero. Prove that it cannot possess a Lebesgue density.

<details>
<summary>Hint 1</summary>

Assume a density exists and integrate it over the concentration set.

</details>
<details>
<summary>Hint 2</summary>

An integrable function has zero integral over a Lebesgue-null set.

</details>
<details>
<summary>Solution</summary>

**Solution.** If a density $f$ existed, absolute continuity would give

$\mathbb{P}(C)=\int_{C} f(x)dx$.

The integral of an integrable function over a measure-zero set is zero, so $\mathbb{P}(C)=0$. This contradicts $\mathbb{P}(C)=1$. Atomlessness alone therefore does not imply a density.


</details>

### 4. Recover a density from a CDF

**Exercise 6.4**
<a id="continuous-laws-and-change-of-variables-ex-4"></a>

Let $F(x)=0$ for $x\le 0$, $F(x)=1-e^{-3x}$ for $x>0$. Identify the density and law.

<details>
<summary>Hint 1</summary>

Differentiate on the open positive half-line.

</details>
<details>
<summary>Hint 2</summary>

Check that the derivative integrates back to the stated CDF, including its value at zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The CDF is continuous at zero and differentiable away from zero. Its derivative is $3e^{-3x}$ for $x>0$ and zero for $x<0$. This nonnegative function integrates to one and reconstructs $F$, so it is the density. The law is exponential with rate $3$.


</details>

### 5. Increasing affine transformation

**Exercise 6.5**
<a id="continuous-laws-and-change-of-variables-ex-5"></a>

Let $X$ have density $f_{X}$, and set $Y=3X-2$. Find $f_{Y}$ and its support if $X$ is supported on $[0,1]$.

<details>
<summary>Hint 1</summary>

Solve the affine equation for the original variable.

</details>
<details>
<summary>Hint 2</summary>

Include the absolute inverse derivative and map both support endpoints.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inverse is $x=(y+2)/3$, with inverse derivative $1/3$. Hence

$f_{Y}(y)=(1/3)f_{X}((y+2)/3)$

for transformed support $-2\le y\le 1$, and zero outside it. The factor $1/3$ ensures normalization.


</details>

### 6. Decreasing affine transformation

**Exercise 6.6**
<a id="continuous-laws-and-change-of-variables-ex-6"></a>

If $X\sim \operatorname{Exponential}(\lambda )$ and $Y=-X$, find the density and support of $Y$.

<details>
<summary>Hint 1</summary>

Reflect the original nonnegative support.

</details>
<details>
<summary>Hint 2</summary>

The inverse derivative has absolute value one despite its negative sign.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inverse is $x=-y$, whose absolute derivative is one. Since $X\ge 0$, the transformed support is $y\le 0$. Thus

$f_{Y}(y)=\lambda e^{\lambda y}$ for $y\le 0$,

and zero for $y>0$. Its integral over $(-\infty ,0]$ is one.


</details>

### 7. Square a uniform variable

**Exercise 6.7**
<a id="continuous-laws-and-change-of-variables-ex-7"></a>

Let $X\sim \operatorname{Uniform}(-2,2)$ and $Y=X^{2}$. Find the CDF and density of $Y$.

<details>
<summary>Hint 1</summary>

The square threshold gives a two-sided interval for X.

</details>
<details>
<summary>Hint 2</summary>

Include both signs before differentiating the CDF.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $0\le y\le 4$,

$F_{Y}(y)=\mathbb{P}(-\sqrt{y}\le X\le \sqrt{y})=[2\sqrt{y}]/4=\sqrt{y}/2$.

The CDF is zero below zero and one at and above four. Differentiating on $(0,4)$ gives

$f_{Y}(y)=1/[4\sqrt{y}]$.

Both inverse branches have been included, and $\int_{0}^{4} 1/[4\sqrt{y}]dy=1$.


</details>

### 8. Absolute value of a normal variable

**Exercise 6.8**
<a id="continuous-laws-and-change-of-variables-ex-8"></a>

Let $Z$ be standard normal and $Y=\lvert Z\rvert$. Find the density of $Y$.

<details>
<summary>Hint 1</summary>

Absolute value has two inverse points at every positive output.

</details>
<details>
<summary>Hint 2</summary>

Use normal symmetry to combine their densities.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $y>0$, the inverse points are $y$ and $-y$, each with derivative magnitude one. Symmetry gives

$f_{Y}(y)=\varphi (y)+\varphi (-y)=2\varphi (y)$.

The density is zero for $y<0$. Its integral on $(0,\infty )$ is one because the standard normal assigns half its mass to each side of zero.


</details>

### 9. Cubing and a critical derivative

**Exercise 6.9**
<a id="continuous-laws-and-change-of-variables-ex-9"></a>

Let $X\sim \operatorname{Uniform}(-1,1)$ and $Y=X^{3}$. Find $f_{Y}$ and explain the singularity at zero.

<details>
<summary>Hint 1</summary>

Invert the strictly increasing cube map away from zero.

</details>
<details>
<summary>Hint 2</summary>

Check the resulting unbounded density by an improper integral.

</details>
<details>
<summary>Solution</summary>

**Solution.** The map is strictly increasing with inverse $x=y^{1/3}$. For $-1<y<1$ and $y\ne 0$,

$\lvert (dx/dy)\rvert =(1/3)\lvert y\rvert^{-2/3}$.

Since $f_{X}=1/2$,

$f_{Y}(y)=(1/6)\lvert y\rvert^{-2/3}$.

It is zero outside $[-1,1]$. The density diverges at zero because the map has derivative zero at $x=0$ and compresses input lengths strongly there. The singularity is integrable: its integral over $[-1,1]$ is one.


</details>

### 10. A collapsed interval

**Exercise 6.10**
<a id="continuous-laws-and-change-of-variables-ex-10"></a>

Let $X\sim \operatorname{Uniform}(-1,1)$ and $Y=\max(X,0)$. Describe the complete law of $Y$.

<details>
<summary>Hint 1</summary>

Determine which whole input interval maps to zero.

</details>
<details>
<summary>Hint 2</summary>

Describe the surviving positive-density part separately from the atom.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every $X\le 0$ maps to zero, so

$\mathbb{P}(Y=0)=\mathbb{P}(X\le 0)=1/2$.

For $0<y<1$, the map is the identity and the input density is $1/2$, so the continuous component has density $1/2$. Thus the law is mixed: an atom of mass $1/2$ at zero plus density $1/2$ on $(0,1)$. The density component alone integrates only to $1/2$, exactly the mass not in the atom.


</details>

### 11. Exponential memorylessness

**Exercise 6.11**
<a id="continuous-laws-and-change-of-variables-ex-11"></a>

If $X\sim \operatorname{Exponential}(\lambda )$, prove for $s,t\ge 0$ that $\mathbb{P}(X>s+t \mid X>s)=\mathbb{P}(X>t)$.

<details>
<summary>Hint 1</summary>

The longer survival event is contained in the shorter one.

</details>
<details>
<summary>Hint 2</summary>

Divide exponential tails with a strictly positive survival denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $\{X>s+t\}\subseteq \{X>s\}$,

$\mathbb{P}(X>s+t \mid X>s)=\mathbb{P}(X>s+t)/\mathbb{P}(X>s)$

$=e^{-\lambda (s+t)}/e^{-\lambda s}=e^{-\lambda t}$.

The last expression equals $\mathbb{P}(X>t)$ by the exponential survival function.


</details>

### 12. Competing exponential clocks

**Exercise 6.12**
<a id="continuous-laws-and-change-of-variables-ex-12"></a>

Let $X\sim \operatorname{Exponential}(2)$ and $Y\sim \operatorname{Exponential}(5)$ be independent. Find the law of $M=\min(X,Y)$.

<details>
<summary>Hint 1</summary>

The minimum exceeds t only when both clocks do.

</details>
<details>
<summary>Hint 2</summary>

Independence multiplies their survival probabilities.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $t\ge 0$, independence gives

$\mathbb{P}(M>t)=\mathbb{P}(X>t,Y>t)=e^{-2t}e^{-5t}=e^{-7t}$.

Therefore $M$ is exponential with rate $7$, with density $7e^{-7t}$ on $t\ge 0$.


</details>

### 13. Standardize a normal variable

**Exercise 6.13**
<a id="continuous-laws-and-change-of-variables-ex-13"></a>

If $X\sim \mathcal{N}(10,9)$, express $\mathbb{P}(7\le X\le 13)$ using the standard normal CDF $\Phi$.

<details>
<summary>Hint 1</summary>

The second normal parameter is variance.

</details>
<details>
<summary>Hint 2</summary>

Subtract the mean and divide by the positive standard deviation at each endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** The standard deviation is $3$, so $Z=(X-10)/3$ is standard normal. The endpoints transform to $-1$ and $1$. Hence

$\mathbb{P}(7\le X\le 13)=\mathbb{P}(-1\le Z\le 1)=\Phi (1)-\Phi (-1)$.

By symmetry this also equals $2\Phi (1)-1$.


</details>

### 14. Normal scaling with a negative coefficient

**Exercise 6.14**
<a id="continuous-laws-and-change-of-variables-ex-14"></a>

Let $Z$ be standard normal and $Y=-2Z+4$. Identify the normal parameters and derive the density from change of variables.

<details>
<summary>Hint 1</summary>

Invert the negative affine map.

</details>
<details>
<summary>Hint 2</summary>

Use the absolute derivative and square the scale in the resulting normal variance.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inverse is $z=(4-y)/2$, with absolute derivative $1/2$. Thus

$f_{Y}(y)=(1/2)\varphi ((4-y)/2)$

$=[1/(2\sqrt{2\pi })]\exp(-(y-4)^{2}/8)$.

This is $\mathcal{N}(4,4)$: the mean shift is $4$ and the variance is the squared scale, $(-2)^{2}=4$.


</details>

### 15. Verify gamma normalization

**Exercise 6.15**
<a id="continuous-laws-and-change-of-variables-ex-15"></a>

Show that $f(x)=[\lambda^\alpha /\Gamma (\alpha )]x^{\alpha -1}e^{-\lambda x}$ integrates to one for $\alpha ,\lambda >0$.

<details>
<summary>Hint 1</summary>

Substitute rate times x into the integral.

</details>
<details>
<summary>Hint 2</summary>

All powers of the rate cancel, leaving the gamma defining integral.

</details>
<details>
<summary>Solution</summary>

**Solution.** Substitute $t=\lambda x$, so $x=t/\lambda$ and $dx=dt/\lambda$. Then

$\int_{0}^\infty f(x)dx$

$=[\lambda^\alpha /\Gamma (\alpha )]\int_{0}^\infty (t/\lambda )^{\alpha -1}e^{-t}(dt/\lambda )$

$=[1/\Gamma (\alpha )]\int_{0}^\infty t^{\alpha -1}e^{-t}dt=1$

by the definition of $\Gamma (\alpha )$.


</details>

### 16. Rate versus scale

**Exercise 6.16**
<a id="continuous-laws-and-change-of-variables-ex-16"></a>

A gamma law is specified with shape $3$ and scale $2$. Rewrite its density using the rate convention.

<details>
<summary>Hint 1</summary>

Rate is reciprocal to scale.

</details>
<details>
<summary>Hint 2</summary>

Use the gamma value at the positive integer shape to simplify the constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Scale $\theta =2$ corresponds to rate $\lambda =1/\theta =1/2$. Therefore

$f(x)=[(1/2)^{3}/\Gamma (3)]x^{2}e^{-x/2}$ for $x>0$.

Since $\Gamma (3)=2$, this can be written $f(x)=x^{2}e^{-x/2}/16$. Replacing the rate by $2$ would describe a different, much more concentrated law.


</details>

### 17. A beta special case

**Exercise 6.17**
<a id="continuous-laws-and-change-of-variables-ex-17"></a>

For $X\sim \operatorname{Beta}(2,1)$, find the density, CDF, and an inverse-transform simulation formula.

<details>
<summary>Hint 1</summary>

Evaluate the beta normalizing integral at these shapes.

</details>
<details>
<summary>Hint 2</summary>

Integrate the density, then invert its increasing CDF.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $B(2,1)=\int_{0}^{1} t dt=1/2$, so the density is $f(x)=2x$ on $(0,1)$. Integration gives $F(x)=x^{2}$ for $0\le x\le 1$. Solving $u=x^{2}$ gives $x=\sqrt{u}$. Hence if $U$ is uniform on $(0,1)$, then $\sqrt{U}$ has the $\operatorname{Beta}(2,1)$ law.


</details>

### 18. Inverse-transform exponential

**Exercise 6.18**
<a id="continuous-laws-and-change-of-variables-ex-18"></a>

Let $U\sim \operatorname{Uniform}(0,1)$ and $X=-(1/4)\log U$. Prove directly from the CDF that $X\sim \operatorname{Exponential}(4)$.

<details>
<summary>Hint 1</summary>

Solve the transformed threshold inequality carefully.

</details>
<details>
<summary>Hint 2</summary>

The negative multiplier reverses the logarithm inequality.

</details>
<details>
<summary>Solution</summary>

**Solution.** The output is nonnegative. For $x\ge 0$, because the logarithm is increasing,

$\mathbb{P}(X\le x)=\mathbb{P}(-(1/4)\log U\le x)$

$=\mathbb{P}(\log U\ge -4x)=\mathbb{P}(U\ge e^{-4x})$

$=1-e^{-4x}$.

This is the exponential CDF with rate $4$; below zero the CDF is zero.


</details>

### 19. Diagnose a missing Jacobian

**Exercise 6.19**
<a id="continuous-laws-and-change-of-variables-ex-19"></a>

A student claims that if $X\sim \operatorname{Uniform}(0,1)$ and $Y=2X$, then $f_{Y}(y)=1$ on $(0,2)$. Refute and repair the claim.

<details>
<summary>Hint 1</summary>

Check the proposed density's total area.

</details>
<details>
<summary>Hint 2</summary>

The inverse derivative compensates for the doubled support length.

</details>
<details>
<summary>Solution</summary>

**Solution.** The proposed function integrates to $2$, so it cannot be a probability density. The inverse transformation is $x=y/2$, with derivative $dx/dy=1/2$. Therefore

$f_{Y}(y)=f_{X}(y/2)(1/2)=1/2$

on $(0,2)$ and zero elsewhere. It now integrates to one.


</details>

### 20. Audit a two-branch transformation

**Exercise 6.20**
<a id="continuous-laws-and-change-of-variables-ex-20"></a>

Let $X$ have density $f_{X}(x)=2x$ on $(0,1)$ and set $Y=X(1-X)$. Find a branch-sum formula for $f_{Y}(y)$ on its support.

<details>
<summary>Hint 1</summary>

Solve the quadratic equation for both inverse branches.

</details>
<details>
<summary>Hint 2</summary>

Their derivative magnitudes agree, and their input values sum to one.

</details>
<details>
<summary>Solution</summary>

**Solution.** The map has maximum $1/4$ at $x=1/2$, so the output support is $[0,1/4]$. Solving $x(1-x)=y$ gives two inverse branches

$x_-(y)=[1-\sqrt{1-4y}]/2$,

$x_+(y)=[1+\sqrt{1-4y}]/2$.

Since $g'(x)=1-2x$, both derivative magnitudes equal $\sqrt{1-4y}$. Thus, for $0<y<1/4$,

$f_{Y}(y)=[2x_-(y)+2x_+(y)]/\sqrt{1-4y}$

$=2/\sqrt{1-4y}$,

because $x_-+x_+=1$. The density is zero outside the support. Finally,

$\int_{0}^{1/4} 2/\sqrt{1-4y}dy=1$,

which checks both branches and normalization.


</details>

## Sources

For probability spaces, laws, integration and independence, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, chapters 1–2, available on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). The earlier undergraduate route is Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The additional examples and proofs in this chapter are original developments of these standard topics.

## 12. Summary and forward route

A continuous CDF may describe an absolutely continuous or a singular continuous law; only the former has an ordinary density. Density transformations come from pushforward probability. On a monotone branch, multiply the input density by the absolute derivative of the inverse. For a many-to-one map, add every branch; for a collapsed positive-probability region, also record the resulting atom. Uniform, exponential, normal, gamma, and beta laws supply recurring models whose support and parameter conventions must remain explicit.

Inverse transforms turn uniform variables into target laws, while Box–Muller previews how multivariable Jacobians generate normal pairs. The next chapter develops [Joint Laws, Conditional Laws, and Dependence](joint-laws-conditioning-and-dependence.md), where multivariable densities, support geometry, conditional laws, and dependence are treated systematically.
