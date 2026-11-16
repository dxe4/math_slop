var e=`---
parent_id: book-probability-models-proofs
chapter_id: expectation-integration-and-moments
title: "Expectation, Integration, and Moments"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Expectation, Integration, and Moments

Expectation is an integral with respect to a law, not necessarily a long-run slogan and not automatically a finite number. This chapter builds the operator from nonnegative simple variables, records exactly when subtraction and interchange are legal, and develops moments, tail formulas, and the basic inequalities used throughout probability. It uses joint laws from the preceding chapter; measure-theoretic facts are stated at the level needed here.

## 1. From simple payoffs to the Lebesgue integral

A nonnegative simple random variable has a representation $S=\\sum_{j=1}^{m} a_{j}\\mathbf{1}_{A_{j}}$, where the $A_{j}$ are disjoint measurable events and $a_{j}\\ge 0$. Define

$\\mathbb{E}[S]=\\sum_{j} a_{j}\\mathbb{P}(A_{j})$.

Refining two representations by their intersections proves that this value does not depend on the chosen representation. For a general nonnegative measurable $X$, define

$\\mathbb{E}[X]=\\sup\\{\\mathbb{E}[S]: 0\\le S\\le X, S simple\\}$.

The value may be $+\\infty$. If $X$ is real-valued, put $X^{+}=\\max(X,0)$ and $X^{-}=\\max(-X,0)$. We call $X$ **integrable** when $\\mathbb{E}\\lvert X\\rvert =\\mathbb{E}[X^{+}]+\\mathbb{E}[X^{-}]<\\infty$, and then define $\\mathbb{E}[X]=\\mathbb{E}[X^{+}]-\\mathbb{E}[X^{-}]$. The expression $\\infty -\\infty$ is deliberately undefined.

If $\\mathbb{P}_{X}$ is the law of $X$, the law-of-the-unconscious-statistician identity is

$\\mathbb{E}[g(X)]=\\int g(x) \\mathbb{P}_{X}(dx)$

whenever $g\\ge 0$ or $g(X)$ is integrable. Thus a discrete law gives $\\sum_{x} g(x)p(x)$, and a density gives $\\int g(x)f(x)dx$. Neither formula applies merely because a familiar symbol appears.

## 2. Convergence theorems are licences for interchange

**Monotone convergence.** If $0\\le X_{n}\\uparrow X$ pointwise, then $\\mathbb{E}[X_{n}]\\uparrow \\mathbb{E}[X]$, allowing infinity.

**Lemma 8.5 (Fatou's).** For nonnegative $X_{n}$,

$\\mathbb{E}[\\liminf X_{n}]\\le \\liminf \\mathbb{E}[X_{n}]$.

**Dominated convergence.** If $X_{n}\\to X$ almost surely and $\\lvert X_{n}\\rvert \\le Y$ for an integrable $Y$, then $X$ is integrable and $\\mathbb{E}[X_{n}]\\to \\mathbb{E}[X]$.

These hypotheses are control mechanisms. Pointwise convergence alone is insufficient: on $(0,1)$ with uniform law, $X_{n}=n\\mathbf{1}_{(0,1/n)}$ tends to zero almost surely but $\\mathbb{E}[X_{n}]=1$ for every $n$.

**Tonelli.** For nonnegative measurable $h(x,y)$, iterated integrals may be interchanged and may equal infinity. **Fubini.** If $\\int \\int \\lvert h\\rvert <\\infty$, both iterated signed integrals exist and agree. Conditional cancellation is not a substitute for absolute integrability.

## 3. Linearity does not require independence

For integrable $X,Y$ and constants $a,b$,

$\\mathbb{E}[aX+bY]=a\\mathbb{E}[X]+b\\mathbb{E}[Y]$.

Independence is irrelevant. For indicators this yields the counting principle

$\\mathbb{E}[\\sum_{i}\\mathbf{1}_{A_{i}}]=\\sum_{i}\\mathbb{P}(A_{i})$

even when the events overlap strongly. If the sum is nonnegative and countably infinite, monotone convergence permits the same identity with values in $[0,\\infty ]$.

### Worked example: occupied boxes

Throw $n$ balls independently into $m$ boxes uniformly. Let $I_{j}$ indicate that box $j$ is occupied and $N=\\sum_{j}I_{j}$. Since $\\mathbb{P}(I_{j}=0)=(1-1/m)^{n}$,

$\\mathbb{E}[N]=m[1-(1-1/m)^{n}]$.

The occupancy indicators are dependent; linearity still applies.

## 4. Moments and variance

When finite, the $r$th raw moment is $\\mathbb{E}[X^{r}]$; an absolute moment is $\\mathbb{E}\\lvert X\\rvert^{r}$. The variance is

$\\operatorname{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}[X])^{2}]=\\mathbb{E}[X^{2}]-(\\mathbb{E}[X])^{2}$,

provided $\\mathbb{E}[X^{2}]<\\infty$. It is nonnegative and equals zero exactly when $X=\\mathbb{E}[X]$ almost surely. Scaling gives $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.

For Bernoulli $X$, $\\mathbb{E}[X]=p$, $\\mathbb{E}[X^{2}]=p$, hence $\\operatorname{Var}(X)=p(1-p)$. For $X\\sim \\operatorname{Exponential}(\\lambda )$, integration by parts gives $\\mathbb{E}[X]=1/\\lambda$ and $\\mathbb{E}[X^{2}]=2/\\lambda^{2}$, hence variance $1/\\lambda^{2}$.

The moment generating function $M_{X}(t)=\\mathbb{E}[e^{tX}]$ may fail to be finite for every nonzero $t$. A lognormal variable has all positive integer moments but no finite MGF for $t>0$; moment existence must be checked, not inferred from notation.

## 5. Tail integration

For nonnegative $X$, the pointwise identity

$X(\\omega )=\\int_{0}^\\infty \\mathbf{1}_{X(\\omega )>t}dt$

and Tonelli give the layer-cake formula

$\\mathbb{E}[X]=\\int_{0}^\\infty \\mathbb{P}(X>t)dt$.

More generally, for $r>0$,

$\\mathbb{E}[X^{r}]=r\\int_{0}^\\infty t^{r-1}\\mathbb{P}(X>t)dt$.

This converts tail bounds into moment bounds and exposes heavy tails. If $\\mathbb{P}(X>t)=1/(1+t)$ for $t\\ge 0$, then $\\mathbb{E}[X]=\\infty$ because the tail integral diverges logarithmically.

## 6. Fundamental inequalities

**Markov.** For $X\\ge 0$ and $a>0$, $\\mathbb{P}(X\\ge a)\\le \\mathbb{E}[X]/a$, because $a\\mathbf{1}_{X\\ge a}\\le X$.

**Chebyshev.** If $\\operatorname{Var}(X)<\\infty$, then

$\\mathbb{P}(\\lvert X-\\mathbb{E}[X]\\rvert \\ge t)\\le \\operatorname{Var}(X)/t^{2}$.

**Jensen.** If $\\varphi$ is convex and $X,\\varphi (X)$ are integrable under appropriate extended-value conventions, then $\\varphi (\\mathbb{E}[X])\\le \\mathbb{E}[\\varphi (X)]$. For differentiable convex $\\varphi$, the tangent inequality $\\varphi (x)\\ge \\varphi (m)+\\varphi '(m)(x-m)$ with $m=\\mathbb{E}[X]$ proves it. Equality for strictly convex $\\varphi$ forces $X$ constant almost surely.

**Cauchy–Schwarz.** For square-integrable $X,Y$,

$\\lvert \\mathbb{E}[XY]\\rvert \\le \\sqrt{\\mathbb{E}[X^{2}]\\mathbb{E}[Y^{2}]}$.

Apply nonnegativity to $\\mathbb{E}[(X-tY)^{2}]$ and inspect its quadratic discriminant. Equality holds exactly when the variables are linearly dependent in $L^{2}$ (with zero-norm cases included).

## 7. Common failures and hypothesis audit

1. $\\mathbb{E}[X]$ need not be an outcome, a typical value, or finite.
2. $\\mathbb{E}[X/Y]=\\mathbb{E}[X]/\\mathbb{E}[Y]$ is generally false; division is nonlinear and $Y$ may approach zero.
3. Independence is unnecessary for sums but usually essential for products: if independent and integrable with an integrable product, $\\mathbb{E}[XY]=\\mathbb{E}[X]\\mathbb{E}[Y]$.
4. Almost-sure convergence alone does not permit exchanging limit and expectation.
5. A finite mean does not imply finite variance; a Pareto tail can separate moment orders.
6. Jensen's direction follows convexity; it reverses for concave functions.
7. A density value is not a probability, so expectations require integration over support.

## Detailed inequality proofs and further examples

The preceding inequalities are useful only when each expression has a defined meaning. In the results below, all random variables are measurable on the same probability space. Square-integrable means that the second absolute moment is finite; this already implies integrability because $|x|\\le1+x^2$. A proof of a product inequality must also justify that the product expectation exists.

**Theorem 8.1 (Cauchy–Schwarz with the full equality case).** If $X,Y\\in L^2$, then $XY$ is integrable and
$|E[XY]|^2\\le E[X^2]E[Y^2]$.
Equality holds exactly when there are real constants $a,b$, not both zero, with $aX+bY=0$ almost surely.

*Proof.* The pointwise inequality $2|XY|\\le X^2+Y^2$ proves integrability of the product. If $E[Y^2]=0$, nonnegativity gives $Y=0$ almost surely. Both sides of the claimed inequality vanish, and the asserted linear dependence holds by choosing $a=0,b=1$. This includes the case in which both variables vanish.

Otherwise put $c=E[XY]/E[Y^2]$. Expanding a nonnegative square gives
$0\\le E[(X-cY)^2]=E[X^2]-E[XY]^2/E[Y^2]$.
Multiplication by the positive denominator proves the bound. Equality is equivalent to the squared residual having expectation zero, hence to $X=cY$ almost surely.

Conversely, suppose a nontrivial relation holds. If $a\\ne0$, write $X=-(b/a)Y$ and substitute, obtaining equality directly. If $a=0$, then $b\\ne0$ and $Y=0$ almost surely, already covered. Thus no division by a zero norm is hidden in the equality statement. ∎

The equivalent relation form is safer than saying that one named variable is a multiple of the other without specifying which has nonzero norm. If $Y$ vanishes but $X$ does not, equality still holds, although $X$ is not a multiple of $Y$.

**Theorem 8.2 (Chebyshev with its hypotheses).** If $X\\in L^2$ and $t>0$, then
$P(|X-E[X]|\\ge t)\\le E[(X-E[X])^2]/t^2$.

*Proof.* The centred square is a nonnegative integrable variable. Its event of exceeding $t^2$ is precisely the event in the statement. Pointwise,
$t^2\\,1_{\\{|X-E[X]|\\ge t\\}}\\le (X-E[X])^2$.
Take expectations and divide by the positive number $t^2$. If variance is zero the right side vanishes; if the displayed bound exceeds one it may be replaced by one. ∎

Independence is not used. It enters applications only when computing the variance of a sum or average. A theorem about a single variable's tail does not silently supply a dependence model for a collection of variables.

**Theorem 8.3 (Jensen on an interval).** Let $I$ be an open interval, let $\\varphi:I\\to\\mathbb R$ be finite and convex, and suppose $X\\in I$ almost surely with $E|X|<\\infty$ and $E|\\varphi(X)|<\\infty$. Then
$\\varphi(E[X])\\le E[\\varphi(X)]$.
If $\\varphi$ is strictly convex, equality holds exactly when $X$ is almost surely constant.

*Proof.* Write $m=E[X]$. This lies in $I$: if an endpoint is finite, the strictly positive distance of $X$ from that endpoint has strictly positive expectation, so the mean cannot equal or pass that endpoint. A finite convex function on an open interval has a supporting line at each interior point. To see the slope choice, left secant slopes at $m$ are no larger than right secant slopes; any number $c$ between their one-sided limits satisfies
$\\varphi(x)\\ge\\varphi(m)+c(x-m)$ for all $x\\in I$.

Every term on this line is integrable under the stated hypotheses. Taking expectations gives the inequality, since $E[X-m]=0$. For strict convexity, the supporting-line gap is zero only at $x=m$: a second contact point would force linearity on the segment joining them. Equality of expectations therefore means this nonnegative gap vanishes almost surely, giving $X=m$ almost surely. A constant clearly gives equality. ∎

This interval formulation avoids unspecified extended-value arithmetic. Extensions allowing an infinite convex expectation are possible, but should be stated separately. For a closed endpoint reached by the mean, a one-sided support restriction can instead force constancy directly. A tangent proof assumes differentiability; a supporting-line proof covers a finite convex function with a corner.

**Proposition 8.4 (Independent integrable factors have an integrable product).** If $X,Y$ are independent and individually integrable, then
$E|XY|=E|X|E|Y|<\\infty$ and $E[XY]=E[X]E[Y]$.

*Proof.* Their joint law is a product law. Tonelli factors the nonnegative product $|x||y|$ into its two finite integrals. Fubini is then legitimate for the signed product and gives the second identity. ∎

The order matters: absolute integrability is established before signed integral interchange. For dependent variables, two finite first absolute moments alone do not necessarily control their product.

### Worked Example 8.5: a hierarchy of Pareto moments

Let $X$ have density $\\alpha x^{-\\alpha-1}$ on $x\\ge1$, with parameter $\\alpha>0$. Its integral is one. For any $r>0$, its absolute moment is the nonnegative improper integral
$E[X^r]=\\alpha\\int_1^\\infty x^{r-\\alpha-1}\\,dx$.

If $r<\\alpha$, the upper endpoint term vanishes and the value is $\\alpha/(\\alpha-r)$. If $r=\\alpha$, the integral is logarithmic and diverges; if $r>\\alpha$, a nonnegative power at infinity makes it diverge. There is no cancellation question because the variable is positive.

Take $\\alpha=3/2$. The mean is three, but the second moment is infinite. A Chebyshev calculation for this variable is unavailable, despite its well-defined mean. For $\\alpha=3$, the mean is $3/2$ and second moment three, so variance is $3-9/4=3/4$.

The moment boundary is strict. Writing the finite formula at $r=\\alpha$ would divide by zero, and extending it to larger $r$ would produce a negative “moment”. The integration hypotheses prevent that purely algebraic error.

### Worked Example 8.6: moments of a uniform maximum through tails

Let $U_1,\\ldots,U_n$ be independent uniforms on $(0,1)$ and let $M$ be their maximum, with integer $n\\ge1$. The event that every coordinate is below $t$ has probability $t^n$ for $0\\le t\\le1$. Hence $P(M>t)=1-t^n$ on that interval and is zero beyond one.

The tail formula gives
$E[M]=\\int_0^1(1-t^n)\\,dt=n/(n+1)$.
For the second moment, the higher-power tail identity gives
$E[M^2]=2\\int_0^1t(1-t^n)\\,dt=n/(n+2)$.
Subtracting the squared mean yields variance
$n/[(n+2)(n+1)^2]$.

These integrals need no exchange of signed infinite quantities: all integrands are nonnegative and bounded. The result also agrees with integrating against the density $nt^{n-1}$. Two methods describe the same law, but the tail method often remains convenient when the survival probability is simpler than the density.

As the number of observations increases, the mean tends to one and the variance tends to zero. This is concentration of an extreme near the support endpoint, which is a different mechanism from averaging in the law of large numbers.

### Worked Example 8.7: strict Jensen and an exact reciprocal mean

Let $U$ be uniform on $(1,2)$. Both $U$ and its reciprocal are bounded, so all expectations below exist. The mean is $3/2$, while direct integration gives
$E[1/U]=\\int_1^2 dx/x=\\log2$.

The reciprocal function is strictly convex on the positive half-line. Jensen therefore gives $\\log2>2/3$, with strictness because the uniform variable is not almost surely constant. The inequality follows without evaluating the logarithm numerically, and its domain matters: the same convexity argument cannot be applied across zero.

A related square-root calculation uses concavity. Direct integration gives
$E[\\sqrt U]=(2/3)(2^{3/2}-1)$,
and concavity gives the strict relation
$E[\\sqrt U]<\\sqrt{E[U]}=\\sqrt{3/2}$.
Thus applying a nonlinear function after averaging answers a different question from averaging its values.

This distinction appears in transformed measurements, risk scores and reciprocal waiting rates. A ratio of expectations cannot replace an expected ratio without a separate argument.

## Using convergence licences in actual calculations

The nonnegative expectation definition makes truncation particularly transparent. If $X\\ge0$, then $X\\wedge n$ increases pointwise to $X$, so monotone convergence recovers $E[X]$ from bounded approximations, allowing an infinite answer. This is the correct tool for the heavy-tailed example.

For a signed integrable variable, clipping it to $[-n,n]$ gives almost-sure convergence and absolute domination by $|X|$. Dominated convergence then recovers the finite signed expectation. The two approximations look similar but use different hypotheses and conclusions.

A useful workflow is to identify which part of a calculation is nonnegative before splitting it into signed pieces. Tonelli may license an integral even when its value is infinite; Fubini requires an absolute integrability check. A finite-looking cancellation in an iterated integral cannot create an expectation that the original positive and negative parts leave undefined.

## 8. Exercises with complete solutions

### 1. A simple variable

**Exercise 8.1**
<a id="expectation-integration-and-moments-ex-1"></a>

If $X=3$ on $A$, $X=1$ on $B$, and $X=0$ otherwise, where $A,B$ are disjoint with probabilities $1/4,1/2$, find $\\mathbb{E}[X]$.

<details>
<summary>Hint 1</summary>

Use the disjoint simple-variable representation.

</details>
<details>
<summary>Hint 2</summary>

Multiply each nonzero value by its cell probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** By the simple-variable definition, $\\mathbb{E}[X]=3(1/4)+1(1/2)=5/4$.


</details>

### 2. Positive and negative parts

**Exercise 8.2**
<a id="expectation-integration-and-moments-ex-2"></a>

For values $-2,1$ with probabilities $1/3,2/3$, compute $\\mathbb{E}[X^{+}]$, $\\mathbb{E}[X^{-}]$, and $\\mathbb{E}[X]$.

<details>
<summary>Hint 1</summary>

Compute the positive and negative parts on each support point.

</details>
<details>
<summary>Hint 2</summary>

Subtract their finite means only after computing both.

</details>
<details>
<summary>Solution</summary>

**Solution.** $X^{+}$ is one only at the second value, so its mean is $2/3$. $X^{-}$ is two only at the first, so its mean is $2/3$. Thus $\\mathbb{E}[X]=0$.


</details>

### 3. An undefined expectation

**Exercise 8.3**
<a id="expectation-integration-and-moments-ex-3"></a>

Give a countable law for which $\\mathbb{E}[X^{+}]=\\mathbb{E}[X^{-}]=\\infty$.

<details>
<summary>Hint 1</summary>

Use symmetric masses with a summable square denominator.

</details>
<details>
<summary>Hint 2</summary>

The first signed moment then contains a divergent harmonic series on each side.

</details>
<details>
<summary>Solution</summary>

**Solution.** Put $\\mathbb{P}(X=n)=\\mathbb{P}(X=-n)=c/n^{2}$ for $n\\ge 1$, where $2c\\sum n^{-2}=1$. Each signed part has expectation $c\\sum n^{-1}=\\infty$; hence $\\mathbb{E}[X]$ is not zero but undefined.


</details>

### 4. LOTUS for a die

**Exercise 8.4**
<a id="expectation-integration-and-moments-ex-4"></a>

For a fair die, find $\\mathbb{E}[X^{2}]$.

<details>
<summary>Hint 1</summary>

Average the squares of the six equally likely values.

</details>
<details>
<summary>Hint 2</summary>

The square must be applied before averaging.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\\mathbb{E}[X^{2}]=(1^{2}+...+6^{2})/6=91/6$.


</details>

### 5. Linearity under dependence

**Exercise 8.5**
<a id="expectation-integration-and-moments-ex-5"></a>

If $Y=X$, $\\mathbb{E}[X]=4$, find $\\mathbb{E}[2X-3Y+7]$.

<details>
<summary>Hint 1</summary>

Use the exact dependence relation first.

</details>
<details>
<summary>Hint 2</summary>

Linearity applies to integrable variables without independence.

</details>
<details>
<summary>Solution</summary>

**Solution.** Integrability and linearity give $(2-3)4+7=3$; independence is not required.


</details>

### 6. Expected fixed points

**Exercise 8.6**
<a id="expectation-integration-and-moments-ex-6"></a>

A uniformly random permutation of $n$ objects has $N$ fixed points. Find $\\mathbb{E}[N]$.

<details>
<summary>Hint 1</summary>

Represent the number of fixed points as a sum of indicators.

</details>
<details>
<summary>Hint 2</summary>

For a fixed label, compare permutations fixing it with all permutations.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $I_{i}$ indicate that $i$ is fixed. Exactly $(n-1)!$ of $n!$ permutations fix it, so $\\mathbb{P}(I_{i}=1)=1/n$. Therefore $\\mathbb{E}[N]=\\sum_{i}1/n=1$.


</details>

### 7. Bernoulli variance

**Exercise 8.7**
<a id="expectation-integration-and-moments-ex-7"></a>

Derive $\\operatorname{Var}(X)=p(1-p)$ for Bernoulli $X$.

<details>
<summary>Hint 1</summary>

An indicator equals its own square.

</details>
<details>
<summary>Hint 2</summary>

Subtract the squared mean from the second moment.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $X^{2}=X$, $\\mathbb{E}[X^{2}]=p$ and $\\mathbb{E}[X]=p$. Thus $\\operatorname{Var}(X)=p-p^{2}$.


</details>

### 8. Variance under affine change

**Exercise 8.8**
<a id="expectation-integration-and-moments-ex-8"></a>

Prove $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.

<details>
<summary>Hint 1</summary>

Subtract the transformed mean before squaring.

</details>
<details>
<summary>Hint 2</summary>

The shift cancels and the scale remains squared.

</details>
<details>
<summary>Solution</summary>

**Solution.** The centered variable is $aX+b-(aE[X]+b)=a(X-\\mathbb{E}[X])$. Square and take expectation.


</details>

### 9. Zero variance

**Exercise 8.9**
<a id="expectation-integration-and-moments-ex-9"></a>

Prove variance zero implies almost-sure constancy.

<details>
<summary>Hint 1</summary>

The squared deviation is nonnegative with expectation zero.

</details>
<details>
<summary>Hint 2</summary>

Bound the probability that it exceeds each positive reciprocal integer and take a countable union.

</details>
<details>
<summary>Solution</summary>

**Solution.** The nonnegative variable $(X-\\mathbb{E}[X])^{2}$ has expectation zero. For every $n$, Markov gives probability zero that it is at least $1/n$; the union of those events is where it is positive. Hence $X=\\mathbb{E}[X]$ almost surely.


</details>

### 10. Tail mean of an exponential

**Exercise 8.10**
<a id="expectation-integration-and-moments-ex-10"></a>

Use the tail formula for $\\mathbb{P}(X>t)=e^{-\\lambda t}$.

<details>
<summary>Hint 1</summary>

Integrate the nonnegative survival probability.

</details>
<details>
<summary>Hint 2</summary>

The exponential rate must be strictly positive.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\\mathbb{E}[X]=\\int_{0}^\\infty e^{-\\lambda t}dt=1/\\lambda$ for $\\lambda >0$.


</details>

### 11. Infinite mean

**Exercise 8.11**
<a id="expectation-integration-and-moments-ex-11"></a>

If $\\mathbb{P}(X>t)=(1+t)^{-1}$, show $\\mathbb{E}[X]=\\infty$.

<details>
<summary>Hint 1</summary>

Use the nonnegative tail integral with an upper cutoff.

</details>
<details>
<summary>Hint 2</summary>

Its antiderivative grows logarithmically without bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** The tail formula gives $\\int_{0}^\\infty (1+t)^{-1}dt$, whose truncated value is $\\log(1+R)\\to \\infty$.


</details>

### 12. Markov sharpness

**Exercise 8.12**
<a id="expectation-integration-and-moments-ex-12"></a>

For fixed $a,m>0$ with $m\\le a$, construct $X\\ge 0$ having mean $m$ and $\\mathbb{P}(X\\ge a)=m/a$.

<details>
<summary>Hint 1</summary>

Place all positive mass exactly at the threshold.

</details>
<details>
<summary>Hint 2</summary>

Choose that mass to make the expectation equal to m.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $X=a$ with probability $m/a$ and zero otherwise. Then $\\mathbb{E}[X]=m$ and equality holds in Markov.


</details>

### 13. Chebyshev calculation

**Exercise 8.13**
<a id="expectation-integration-and-moments-ex-13"></a>

If $\\mathbb{E}[X]=10$, $\\operatorname{Var}(X)=9$, bound $\\mathbb{P}(\\lvert X-10\\rvert \\ge 6)$.

<details>
<summary>Hint 1</summary>

Apply the two-sided variance bound.

</details>
<details>
<summary>Hint 2</summary>

Square the deviation threshold in the denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** Chebyshev gives at most $9/36=1/4$.


</details>

### 14. Jensen for reciprocals

**Exercise 8.14**
<a id="expectation-integration-and-moments-ex-14"></a>

If $X>0$, $\\mathbb{E}[X]<\\infty$, and $\\mathbb{E}[1/X]<\\infty$, prove $\\mathbb{E}[1/X]\\ge 1/\\mathbb{E}[X]$.

<details>
<summary>Hint 1</summary>

Check the reciprocal function's convexity on the positive half-line.

</details>
<details>
<summary>Hint 2</summary>

Jensen is applied only after the two stated integrability assumptions.

</details>
<details>
<summary>Solution</summary>

**Solution.** The map $\\varphi (x)=1/x$ is convex on $(0,\\infty )$. Jensen gives the result.


</details>

### 15. Strict Jensen equality

**Exercise 8.15**
<a id="expectation-integration-and-moments-ex-15"></a>

If $\\mathbb{E}[e^{X}]=e^{\\mathbb{E}[X]}$ and both sides are finite, what follows?

<details>
<summary>Hint 1</summary>

Exponential is strictly convex on the real line.

</details>
<details>
<summary>Hint 2</summary>

Equality in strict Jensen leaves no nonconstant integrable variable.

</details>
<details>
<summary>Solution</summary>

**Solution.** Exponential is strictly convex, so equality in Jensen implies $X$ is constant almost surely.


</details>

### 16. Cauchy–Schwarz application

**Exercise 8.16**
<a id="expectation-integration-and-moments-ex-16"></a>

Show $\\mathbb{E}\\lvert X\\rvert \\le \\sqrt{\\mathbb{E}[X^{2}]}$ for square-integrable $X$.

<details>
<summary>Hint 1</summary>

Pair the absolute variable with the constant one.

</details>
<details>
<summary>Hint 2</summary>

Both factors are square-integrable on a probability space.

</details>
<details>
<summary>Solution</summary>

**Solution.** Apply Cauchy–Schwarz to $\\lvert X\\rvert$ and the constant one: $\\mathbb{E}\\lvert X\\rvert \\le \\sqrt{\\mathbb{E}[X^{2}]\\mathbb{E}[1]}$.


</details>

### 17. Pointwise convergence failure

**Exercise 8.17**
<a id="expectation-integration-and-moments-ex-17"></a>

For $X_{n}=n\\mathbf{1}_{(0,1/n)}$ under uniform law, compute the pointwise limit and expectations.

<details>
<summary>Hint 1</summary>

Fix a positive sample-space point before sending n to infinity.

</details>
<details>
<summary>Hint 2</summary>

The shrinking support and increasing height cancel in each expectation.

</details>
<details>
<summary>Solution</summary>

**Solution.** For each $\\omega >0$, eventually $\\omega \\ge 1/n$, so $X_{n}(\\omega )\\to 0$; the endpoint zero is null. But $\\mathbb{E}[X_{n}]=n(1/n)=1$, so expectations do not converge to zero.


</details>

### 18. Monotone indicators

**Exercise 8.18**
<a id="expectation-integration-and-moments-ex-18"></a>

If $A_{n}\\uparrow A$, recover continuity from below from monotone convergence.

<details>
<summary>Hint 1</summary>

Translate increasing events into increasing indicators.

</details>
<details>
<summary>Hint 2</summary>

Their expectations are exactly their event probabilities.

</details>
<details>
<summary>Solution</summary>

**Solution.** Indicators satisfy $\\mathbf{1}_{A_{n}}\\uparrow \\mathbf{1}_{A}$. MCT gives $\\mathbb{P}(A_{n})=\\mathbb{E}[\\mathbf{1}_{A_{n}}]\\uparrow \\mathbb{E}[\\mathbf{1}_{A}]=\\mathbb{P}(A)$.


</details>

### 19. Product without independence

**Exercise 8.19**
<a id="expectation-integration-and-moments-ex-19"></a>

Let $X$ be symmetric $\\pm 1$ and $Y=X$. Compare $\\mathbb{E}[XY]$ and $\\mathbb{E}[X]\\mathbb{E}[Y]$.

<details>
<summary>Hint 1</summary>

Under the given coupling the product is a square.

</details>
<details>
<summary>Hint 2</summary>

Compare that expectation with the two zero marginal means.

</details>
<details>
<summary>Solution</summary>

**Solution.** $XY=X^{2}=1$, so $\\mathbb{E}[XY]=1$, whereas both means vanish and their product is zero. Factorisation fails under dependence.


</details>

### 20. Moment order

**Exercise 8.20**
<a id="expectation-integration-and-moments-ex-20"></a>

Show a finite second moment implies a finite first absolute moment.

<details>
<summary>Hint 1</summary>

Use Cauchy–Schwarz with the constant one.

</details>
<details>
<summary>Hint 2</summary>

Its second moment is one under the probability normalization.

</details>
<details>
<summary>Solution</summary>

**Solution.** Cauchy–Schwarz with the constant one gives $\\mathbb{E}\\lvert X\\rvert \\le \\sqrt{\\mathbb{E}[X^{2}]}<\\infty$.


</details>

## Sources

For integration and moment inequalities, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, sections 1.4–1.7, on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). Conditional expectation and its projection interpretation are treated in section 4.1. The additional proofs and worked examples here are original.

## 9. Summary and forward route

Expectation is built first for nonnegative variables and only then for integrable signed variables. MCT, Fatou, DCT, Tonelli, and Fubini identify legal limit and integral interchanges. Linearity does not require independence. Variance, tail integrals, Markov, Chebyshev, Jensen, and Cauchy–Schwarz turn integrability into quantitative control.

The next chapter, [Conditional Expectation and Information Projection](#/item/book-probability-models-proofs?chapter=conditional-expectation-and-projection), asks how the expectation operator changes when only part of the information is visible.
`;export{e as default};