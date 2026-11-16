var e=`---
parent_id: book-probability-models-proofs
chapter_id: generating-transforms-and-characteristic-functions
title: "Generating Transforms and Characteristic Functions"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Generating Transforms and Characteristic Functions

A probability transform replaces a law by a function whose algebra is often easier to manipulate. Independent sums become products, derivatives can reveal moments, and limits of transforms can encode limits of distributions. None of these conveniences is automatic. Moment generating functions may be infinite, derivatives require integrability, and pointwise limits of characteristic functions need not represent probability laws unless mass remains tight.

This chapter develops probability generating functions, moment and Laplace transforms, and characteristic functions as different tools rather than interchangeable notation. The standing prerequisites are laws, expectation, independence, and elementary power series and complex numbers. Every uniqueness or inversion claim is stated with the scope needed to make it true.

## 1. Probability generating functions

Let $N$ take values in the nonnegative integers. Its **probability generating function**, or PGF, is

$G_{N}(z)=\\mathbb{E}[z^{N}]=\\sum_{n=0}^\\infty \\mathbb{P}(N=n)z^{n}$.

For complex $z$ with $\\lvert z\\rvert \\le 1$, the series converges absolutely because

$\\sum_{n} \\mathbb{P}(N=n)\\lvert z\\rvert^{n}\\le \\sum_{n}\\mathbb{P}(N=n)=1$.

The series may converge on a larger disk, but the unit disk is guaranteed. At $z=1$, $G_{N}(1)=1$; at $z=0$, the convention $0^{0}=1$ inside the generating series gives $G_{N}(0)=\\mathbb{P}(N=0)$.

Inside the open disk, power-series uniqueness recovers every probability:

$\\mathbb{P}(N=n)=G_{N}^{(n)}(0)/n!$.

Thus a PGF determines the law of a nonnegative integer-valued variable. This conclusion uses the support assumption. An arbitrary real-valued law is not encoded by the expression $\\mathbb{E}[z^{X}]$ as an ordinary power series.

### Factorial moments

For $0\\le z<1$, termwise differentiation gives

$G_{N}^{(k)}(z)=\\mathbb{E}[(N)_{k} z^{N-k}]$,

where $(N)_{k}=N(N-1)\\cdot \\cdot \\cdot (N-k+1)$. Letting $z\\uparrow 1$ and using monotone convergence yields

$G_{N}^{(k)}(1-)=\\mathbb{E}[(N)_{k}]$,

allowing $+\\infty$. A finite derivative at an interior point causes no difficulty; evaluation at the boundary $z=1$ requires a one-sided limit and may diverge.

Ordinary moments can be reconstructed from factorial moments. In particular,

$\\mathbb{E}[N]=G_{N}'(1-)$,

$\\mathbb{E}[N^{2}]=G_{N}''(1-)+G_{N}'(1-)$.

### Named examples

For $B\\sim \\operatorname{Bernoulli}(p)$,

$G_{B}(z)=1-p+pz$.

For $N\\sim \\operatorname{Binomial}(m,p)$, writing $N$ as a sum of independent Bernoulli variables gives

$G_{N}(z)=(1-p+pz)^{m}$.

For $N\\sim \\operatorname{Poisson}(\\lambda )$,

$G_{N}(z)=\\sum_{n=0}^\\infty e^{-\\lambda }\\lambda^{n}z^{n}/n! =\\exp(\\lambda (z-1))$.

The coefficients, not the visual shape of the function, identify the probabilities.

## 2. Independent sums turn into products

If $X$ and $Y$ are independent nonnegative integer-valued variables, then

$G_{X+Y}(z)=\\mathbb{E}[z^{X+Y}]=\\mathbb{E}[z^{X}z^{Y}]=G_{X}(z)G_{Y}(z)$.

The factorization step is where independence enters. Equal marginal laws alone do not justify it.

### Worked Poisson addition

If $X\\sim \\operatorname{Poisson}(\\lambda )$ and $Y\\sim \\operatorname{Poisson}(\\mu )$ independently, then

$G_{X+Y}(z)=e^{\\lambda (z-1)}e^{\\mu (z-1)}=e^{(\\lambda +\\mu )(z-1)}$.

PGF uniqueness shows $X+Y\\sim \\operatorname{Poisson}(\\lambda +\\mu )$. This is a complete distributional argument: calculate the transform, recognize it, and invoke the appropriate uniqueness theorem.

### Random sums

Let $N$ be nonnegative integer-valued and independent of iid variables $X_{1},X_{2},...$, also nonnegative integer-valued. Put $S_{N}=\\sum_{j=1}^{N} X_{j}$, with $S_{0}=0$. Conditioning on $N$ gives

$G_{S_{N}}(z)=\\mathbb{E}[(G_{X}(z))^{N}]=G_{N}(G_{X}(z))$.

The composition has a mechanism: the outer PGF counts how many independent inner contributions occur. Without independence between $N$ and the sequence, or without conditional iid structure, the composition need not hold.

## 3. Moment generating functions and their domains

For a real-valued variable $X$, the **moment generating function**, or MGF, is

$M_{X}(t)=\\mathbb{E}[e^{tX}]$

at those real $t$ for which the expectation is finite. Since $M_{X}(0)=1$, zero always belongs to the domain

$D_{X}=\\{t\\in \\mathbb{R}:M_{X}(t)<\\infty \\}$.

Hölder's inequality shows that $D_{X}$ is an interval: if $s,t\\in D_{X}$ and $0<\\theta <1$, then

$M_{X}(\\theta s+(1-\\theta )t)\\le M_{X}(s)^\\theta M_{X}(t)^{1-\\theta }$.

The domain may be all of $\\mathbb{R}$, a bounded interval, a one-sided interval, or only $\\{0\\}$. Writing down $M_{X}(t)$ without its finiteness domain conceals essential information.

### Examples of domains

If $X\\sim \\operatorname{Exponential}(\\lambda )$, direct integration gives

$M_{X}(t)=\\lambda /(\\lambda -t)$ for $t<\\lambda$,

and infinity for $t\\ge \\lambda$. Negative $t$ pose no problem because the support is nonnegative.

If $X\\sim \\mathcal{N}(\\mu ,\\sigma^{2})$, completing the square gives

$M_{X}(t)=\\exp(\\mu t+\\sigma^{2}t^{2}/2)$ for every real $t$.

The standard Cauchy distribution has no finite MGF except at zero: for $t>0$, the positive tail makes $\\mathbb{E}[e^{tX}]$ infinite, while for $t<0$, the negative tail does so. A lognormal variable has all positive integer moments but $M_{X}(t)=\\infty$ for every $t>0$.

### MGF uniqueness, stated safely

If two probability laws have finite MGFs on some open interval containing zero and the MGFs agree there, then the laws agree. Finiteness only for $t\\le 0$, or equality at isolated points, is not the hypothesis of this theorem. The open neighborhood permits analytic continuation to a characteristic function in a strip, or an equivalent Laplace-transform uniqueness argument.

## 4. Differentiating transforms requires control

If $M_{X}(t)$ is finite on an open interval containing a point $t_{0}$, then it is differentiable there and

$M_{X}^{(k)}(t_{0})=\\mathbb{E}[X^{k} e^{t_{0}X}]$.

Local exponential integrability supplies a dominating function. In particular, if the MGF is finite on an open neighborhood of zero, then all absolute moments are finite and

$M_{X}^{(k)}(0)=\\mathbb{E}[X^{k}]$.

The reverse implication fails dramatically. Possessing every integer moment need not create an MGF near zero.

### A moment-indeterminate warning

Let $Y\\sim \\mathcal{N}(0,1)$ and $X=e^{Y}$, so $X$ is lognormal. Its moments are

$\\mathbb{E}[X^{n}]=\\mathbb{E}[e^{nY}]=e^{n^{2}/2}$.

For $\\lvert a\\rvert \\le 1$, modify its density by the factor

$1+a \\sin(2\\pi \\log x)$.

The resulting nonnegative densities are distinct, yet their nonnegative integer moments agree. Indeed, the sine contribution to moment $n$ is the imaginary part of

$\\mathbb{E}[e^{(n+i2\\pi )Y}]=\\exp((n+i2\\pi )^{2}/2)$,

whose imaginary factor is $\\sin(2\\pi n)=0$. Thus even the entire sequence of moments may fail to determine a law. A transform uniqueness theorem cannot be replaced by the slogan “all moments match.”

## 5. Laplace transforms

For a nonnegative random variable $X$, its **Laplace transform** is

$L_{X}(s)=\\mathbb{E}[e^{-sX}]$, $s\\ge 0$.

It always exists and lies in $[0,1]$. It is the MGF evaluated at $-s$ when MGF notation is used, but the Laplace viewpoint is stronger operationally because its guaranteed domain covers an entire half-line.

The Laplace transform determines a probability law on $[0,\\infty )$: if two such transforms agree for every $s\\ge 0$, the laws agree. There are sharper variants in which equality on a suitable interval suffices, but the half-line statement is a safe default.

For $X\\sim \\operatorname{Gamma}(\\alpha ,\\lambda )$ in the rate parameterization,

$L_{X}(s)=(\\lambda /(\\lambda +s))^\\alpha$, $s\\ge 0$.

For a nonnegative integer-valued $N$, PGF and Laplace transform are related by

$L_{N}(s)=G_{N}(e^{-s})$.

As with PGFs and MGFs, independent sums multiply Laplace transforms.

### Derivatives at the boundary

For $s>0$, differentiating under the expectation is safe to all orders because $x^{k}e^{-sx}$ is bounded on $[0,\\infty )$ up to a constant depending on $s,k$. Thus

$(-1)^{k}L_{X}^{(k)}(s)=\\mathbb{E}[X^{k}e^{-sX}]$.

At $s=0$, the one-sided derivative may be infinite. If $\\mathbb{E}[X^{k}]<\\infty$, dominated or monotone arguments recover $(-1)^{k}L_{X}^{(k)}(0+)=\\mathbb{E}[X^{k}]$; without that moment condition, a finite formula must not be asserted.

## 6. Characteristic functions always exist

The **characteristic function** of a real-valued variable $X$ is

$\\varphi_{X}(t)=\\mathbb{E}[e^{itX}]$, $t\\in \\mathbb{R}$,

where $i^{2}=-1$. Because $\\lvert e^{itX}\\rvert =1$, this expectation exists for every real $t$, regardless of tails or moments. It satisfies

$\\varphi_{X}(0)=1$, $\\lvert \\varphi_{X}(t)\\rvert \\le 1$,

$\\varphi_{X}(-t)=\\overline{\\varphi_{X}(t)}$.

Dominated convergence proves that every characteristic function is continuous. In fact it is uniformly continuous: using an independent copy is unnecessary; one can split the expectation into $\\lvert X\\rvert \\le R$ and its small-probability complement, then control $e^{ihX}-1$ uniformly on the bounded part.

A characteristic function is also positive definite. For complex numbers $c_{1},...,c_{m}$ and real $t_{1},...,t_{m}$,

$\\sum_{j,k}c_{j}\\overline{c_{k}}\\,\\varphi_{X}(t_{j}-t_{k})$

$=\\mathbb{E}[\\lvert \\sum_{j} c_{j} e^{it_{j}X}\\rvert^{2}]\\ge 0$.

Continuity, value one at zero, and positive definiteness characterize characteristic functions, though proving the converse is beyond this chapter.

### Named characteristic functions

For $X\\sim \\mathcal{N}(\\mu ,\\sigma^{2})$,

$\\varphi_{X}(t)=\\exp(i\\mu t-\\sigma^{2}t^{2}/2)$.

For a standard Cauchy variable,

$\\varphi_{X}(t)=e^{-\\lvert t\\rvert }$.

The Cauchy example shows why characteristic functions are indispensable: the law has neither a mean nor a nontrivial MGF, yet its characteristic function is simple and defined everywhere.

For a discrete variable with masses $p_{j}$ at points $x_{j}$,

$\\varphi_{X}(t)=\\sum_{j} p_{j} e^{itx_{j}}$.

For an absolutely continuous variable with density $f$, the characteristic function is the Fourier transform

$\\varphi_{X}(t)=\\int_{\\mathbb{R}} e^{itx}f(x)dx$.

## 7. Products, affine maps, and convolution

If $X,Y$ are independent, then

$\\varphi_{X+Y}(t)=\\mathbb{E}[e^{itX}e^{itY}]=\\varphi_{X}(t)\\varphi_{Y}(t)$.

For constants $a,b$,

$\\varphi_{aX+b}(t)=e^{itb}\\varphi_{X}(at)$.

These two identities often prove closure of a family under independent sums.

### Worked normal addition

If $X\\sim \\mathcal{N}(\\mu_{1},\\sigma_{1}^{2})$ and $Y\\sim \\mathcal{N}(\\mu_{2},\\sigma_{2}^{2})$ independently, then

$\\varphi_{X+Y}(t)=\\exp(i(\\mu_{1}+\\mu_{2})t-(\\sigma_{1}^{2}+\\sigma_{2}^{2})t^{2}/2)$.

Characteristic-function uniqueness identifies a normal law with mean $\\mu_{1}+\\mu_{2}$ and variance $\\sigma_{1}^{2}+\\sigma_{2}^{2}$.

When densities exist, the same sum has convolution density

$f_{X+Y}(z)=\\int_{\\mathbb{R}} f_{X}(x)f_{Y}(z-x)dx$.

Fourier transformation converts this convolution into the product of characteristic functions. Independence is again structural: if $Y=-X$, then $X+Y=0$ even though each marginal might be standard normal.

## 8. Uniqueness and inversion

**Theorem 12.1 (Uniqueness).** If $\\varphi_{X}(t)=\\varphi_{Y}(t)$ for every real $t$, then $X$ and $Y$ have the same law.

This theorem applies to all real probability laws and requires no density or moments. Equality only near zero can also be sufficient under additional analytic conditions, but arbitrary characteristic functions are not generally analytic, so global equality is the clean general statement.

The uniqueness theorem and the endpoint-continuity inversion formula below are imported from Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 3.3.11, pp. 128--130.

An inversion theorem explains why uniqueness is plausible. If $a<b$ are continuity points of the CDF of $X$, then

$\\mathbb{P}(a<X\\le b)=\\lim_{T\\to \\infty } (1/(2\\pi ))\\int_{-T}^{T} [(e^{-ita}-e^{-itb})/(it)]\\varphi_{X}(t)dt$,

with the integrand at $t=0$ interpreted by continuity. Endpoint continuity prevents half-atom corrections.

A useful stronger-density case is easier to remember. If $X$ has a continuous density $f$ and $\\varphi_{X}$ is integrable, then

$f(x)=(1/(2\\pi ))\\int_{\\mathbb{R}} e^{-itx}\\varphi_{X}(t)dt$.

Without integrability of $\\varphi$, this ordinary integral formula may fail even when a density exists. For a uniform density, the characteristic function decays like $1/\\lvert t\\rvert$ and is not absolutely integrable. More delicate Fourier inversion can still recover the density at suitable points, but the displayed sufficient condition must not be silently discarded.

## 9. Moments from characteristic functions

If $\\mathbb{E}[\\lvert X\\rvert^{k}]<\\infty$, dominated convergence permits $k$ differentiations:

$\\varphi_{X}^{(k)}(t)=\\mathbb{E}[(iX)^{k} e^{itX}]$.

At zero,

$\\varphi_{X}^{(k)}(0)=i^{k}\\mathbb{E}[X^{k}]$.

For example, if the first two absolute moments are finite,

$\\varphi_{X}'(0)=i\\mathbb{E}[X]$, $\\varphi_{X}''(0)=-\\mathbb{E}[X^{2}]$.

The condition is sufficient and deliberately explicit. A characteristic function can exist without being differentiable at zero, as $e^{-\\lvert t\\rvert }$ does for the Cauchy law. Conversely, isolated differentiability properties can have subtle partial converses; they should not be used as a shortcut to moment existence without a theorem tailored to the required order.

When an MGF exists around zero, the cumulant generating function

$K_{X}(t)=\\log M_{X}(t)$

is well defined for real $t$ near zero because $M_{X}(t)>0$. Its first two derivatives at zero are the mean and variance. For independent sums, MGFs multiply and cumulant generating functions add. Complex logarithms of characteristic functions require branch choices and possible zeros, so $\\log \\varphi_{X}(t)$ is not globally harmless notation.

## 10. Continuity theorems and escaping mass

Weak convergence, written $X_{n}\\Rightarrow X$, means that $\\mathbb{E}[h(X_{n})]\\to \\mathbb{E}[h(X)]$ for every bounded continuous function $h$; equivalently, CDFs converge at continuity points of the limit CDF.

If $X_{n}\\Rightarrow X$, then

$\\varphi_{X_{n}}(t)\\to \\varphi_{X}(t)$ for every real $t$,

because $x↦e^{itx}$ is bounded and continuous.

The converse is Lévy's continuity theorem: if $\\varphi_{X_{n}}(t)$ converges pointwise to a function $\\varphi (t)$ that is continuous at zero, then $\\varphi$ is a characteristic function and $X_{n}$ converges weakly to the law having characteristic function $\\varphi$. This imported result is Durrett, 5th ed., Theorem 3.3.17, pp. 132--133.

Continuity at zero is not decoration. Let $X_{n}\\sim \\operatorname{Uniform}(-n,n)$. Then

$\\varphi_{X_{n}}(t)=\\sin(nt)/(nt)$

for $t\\ne 0$, with value one at zero. For each fixed nonzero $t$, this tends to zero, while the value at zero remains one. The pointwise limit is discontinuous at zero and cannot be a characteristic function. Probabilistically, the sequence spreads its mass farther and farther away; no probability law on the real line receives the missing mass.

Pointwise transform convergence also says nothing by itself about convergence of moments. Weak convergence controls bounded continuous tests, whereas $x$ and $x^{2}$ are unbounded. Uniform integrability or another tail condition is needed to pass such expectations to the limit.

## 11. A transform audit

Before accepting a transform argument, ask:

1. Does the variable have the support required by the chosen transform?
2. On what exact real or complex domain is the expectation finite?
3. Is differentiation occurring at an interior point or at a boundary?
4. Which absolute moment or exponential bound justifies exchanging derivative and expectation?
5. Is a product transform using genuine independence?
6. Which uniqueness theorem applies: PGF, Laplace, MGF near zero, or characteristic function?
7. Does an inversion formula require continuity points, a density, or integrability of the transform?
8. If transforms converge pointwise, is the limit continuous at zero?
9. Are moments being inferred from transform derivatives under sufficient hypotheses?
10. Has numerical evaluation preserved cancellation, tail accuracy, and the value at zero?

## Worked examples: choosing and using a transform

### Worked example 1. A random number of two-unit claims

Let $N$ be Poisson with rate three, and independently let iid severities $J_j$ equal one with probability $3/4$ and two with probability $1/4$. For the total $S=\\sum_{j=1}^NJ_j$, with an empty sum defined as zero, the severity PGF is $g(z)=3z/4+z^2/4$. Conditioning on $N$ gives $G_S(z)=\\exp(3[g(z)-1])$. This is not a Poisson PGF, since its exponent contains a quadratic term.

Differentiating at one is safe here because all severities are bounded and the displayed entire expression supplies finite derivatives. We obtain $\\mathbb ES=3g'(1)=15/4$. The second factorial moment is $G_S''(1)=3g''(1)+9[g'(1)]^2=3/2+225/16=249/16$. Adding the mean and subtracting its square yields $\\operatorname{Var}(S)=249/16+60/16-225/16=21/4$. Equivalently, the random-sum variance formula gives $3\\mathbb EJ_1^2=3(7/4)=21/4$.

Finally $P(S=0)=G_S(0)=e^{-3}$, since every severity is positive. That equality would change if zero severities were allowed. The example shows how a PGF handles a random count, while ordinary Poisson addition handles only unit contributions.

### Worked example 2. The MGF domain survives a transformation

Let $X$ have exponential rate two, and set $Y=3X-1$. For a real argument $t$, substitution into the defining expectation gives
$M_Y(t)=e^{-t}M_X(3t)=e^{-t}\\,2/(2-3t)$
exactly when $t<2/3$. At or above $2/3$ the defining nonnegative integral diverges; the rational expression must not be continued there as if it were still an expectation.

The characteristic function has no such real-argument restriction:
$\\varphi_Y(t)=e^{-it}\\,2/(2-3it)$ for all real $t$. Direct integration verifies it, since the real part of the density's decay coefficient remains two. At zero both transforms equal one. The characteristic function's modulus is $2/\\sqrt{4+9t^2}\\le1$, another useful consistency check.

From the local MGF, $\\mathbb EY=3(1/2)-1=1/2$ and $\\operatorname{Var}(Y)=9(1/4)=9/4$. These moments do not license evaluating $M_Y(1)$: the expectation of $e^Y$ is infinite. A transform's domain is part of the answer, even when its formal algebra looks harmless.

### Worked example 3. A triangular binomial limit

For each integer $n\\ge2$, let $X_n$ be binomial with $n$ trials and success probability $2/n$. Its characteristic function is
$\\varphi_n(t)=[1+(2/n)(e^{it}-1)]^n$.
For each fixed real $t$, the elementary exponential limit makes this tend to $\\exp(2(e^{it}-1))$. This limit is the characteristic function of a Poisson variable of rate two and is continuous at zero. Lévy's theorem therefore proves $X_n\\Rightarrow\\operatorname{Poisson}(2)$.

This is a sequence of changing laws; no common coupling of all $X_n$ is needed for the conclusion. It does not by itself assert convergence in probability, almost-sure convergence, or a total-variation error bound. Direct formulas do show $\\mathbb EX_n=2$ and $\\operatorname{Var}(X_n)=2(1-2/n)\\to2$, but those moment conclusions come from separate calculations. As the rare-spike counterexample demonstrates, convergence of characteristic functions alone does not permit differentiating the limiting relation at zero.

## 12. Exercises with complete solutions

### 1. Recover probabilities from a PGF

**Exercise 12.1**

<a id="generating-transforms-and-characteristic-functions-ex-1"></a>

Suppose $G_{N}(z)=1/4+(1/2)z+(1/4)z^{2}$. Find the law of $N$.

<details>
<summary>Hint 1</summary>

A PGF is a power series whose coefficients are point probabilities.

</details>

<details>
<summary>Hint 2</summary>

Match the coefficients of $1,z,z^2$, and check that they sum to one.

</details>

<details>
<summary>Solution</summary>

**Solution.** PGF coefficients are probabilities. Thus $\\mathbb{P}(N=0)=1/4$, $\\mathbb{P}(N=1)=1/2$, and $\\mathbb{P}(N=2)=1/4$; all other probabilities are zero. The coefficients are nonnegative and sum to $G_{N}(1)=1$, so this is a valid law.

</details>

### 2. Factorial moments from a PGF

**Exercise 12.2**

<a id="generating-transforms-and-characteristic-functions-ex-2"></a>

Let $G_{N}(z)=(1-p+pz)^{m}$. Find $\\mathbb{E}[N]$ and $\\operatorname{Var}(N)$ using derivatives.

<details>
<summary>Hint 1</summary>

The first two derivatives at one give the first and second factorial moments.

</details>

<details>
<summary>Hint 2</summary>

Use $N^2=N(N-1)+N$ before subtracting the squared mean.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differentiation gives

$G_{N}'(1)=mp$, $G_{N}''(1)=m(m-1)p^{2}$.

Therefore $\\mathbb{E}[N]=mp$ and

$\\mathbb{E}[N^{2}]=G_{N}''(1)+G_{N}'(1)=m(m-1)p^{2}+mp$.

Subtracting $(mp)^{2}$ yields $\\operatorname{Var}(N)=mp(1-p)$.

</details>

### 3. Add independent Poisson variables

**Exercise 12.3**

<a id="generating-transforms-and-characteristic-functions-ex-3"></a>

If $X\\sim \\operatorname{Poisson}(2)$ and $Y\\sim \\operatorname{Poisson}(5)$ independently, identify the law of $X+Y$ by PGFs.

<details>
<summary>Hint 1</summary>

The PGF of a Poisson variable is $e^{\\lambda(z-1)}$.

</details>

<details>
<summary>Hint 2</summary>

Independence permits multiplication; add the two rates in the exponent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Their PGFs are $e^{2(z-1)}$ and $e^{5(z-1)}$. Independence gives

$G_{X+Y}(z)=e^{7(z-1)}$,

the PGF of $\\operatorname{Poisson}(7)$. PGF uniqueness completes the identification.

</details>

### 4. Show why independence matters

**Exercise 12.4**

<a id="generating-transforms-and-characteristic-functions-ex-4"></a>

Let $X\\sim \\operatorname{Bernoulli}(1/2)$ and set $Y=X$. Compare $G_{X+Y}$ with $G_{X}G_{Y}$.

<details>
<summary>Hint 1</summary>

First compute the sum itself under the declared coupling.

</details>

<details>
<summary>Hint 2</summary>

Here $X+Y=2X$, whereas multiplying marginal PGFs would describe an independent copy of $X$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $X+Y=2X$, its PGF is $(1/2)+(1/2)z^{2}$. Each marginal PGF is $(1+z)/2$, whose product is $(1+2z+z^{2})/4$. These differ. The product formula fails because $X$ and $Y$ are perfectly dependent.

</details>

### 5. A compound PGF

**Exercise 12.5**

<a id="generating-transforms-and-characteristic-functions-ex-5"></a>

Let $N\\sim \\operatorname{Poisson}(\\lambda )$, independent of iid Bernoulli $(p)$ variables $B_{j}$, and put $S=\\sum_{j=1}^{N} B_{j}$. Find the PGF and law of $S$.

<details>
<summary>Hint 1</summary>

Condition on the Poisson number of summands.

</details>

<details>
<summary>Hint 2</summary>

Substitute the Bernoulli PGF $1-p+pz$ into the Poisson PGF.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Bernoulli PGF is $G_{B}(z)=1-p+pz$. The random-sum formula gives

$G_{S}(z)=G_{N}(G_{B}(z))$

$=\\exp(\\lambda [(1-p+pz)-1])=\\exp(\\lambda p(z-1))$.

This is the PGF of $\\operatorname{Poisson}(\\lambda p)$. Randomly retaining each Poisson item with probability $p$ thins the rate by $p$.

</details>

### 6. Exponential MGF and domain

**Exercise 12.6**

<a id="generating-transforms-and-characteristic-functions-ex-6"></a>

For $X\\sim \\operatorname{Exponential}(\\lambda )$, calculate the MGF and prove its stated domain.

<details>
<summary>Hint 1</summary>

Combine the exponential in the MGF with the exponential density.

</details>

<details>
<summary>Hint 2</summary>

The resulting improper integral converges exactly when its decay coefficient $\\lambda-t$ is positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** For real $t$,

$M_{X}(t)=\\int_{0}^\\infty e^{tx}\\lambda e^{-\\lambda x}dx=\\lambda \\int_{0}^\\infty e^{-(\\lambda -t)x}dx$.

This integral equals $\\lambda /(\\lambda -t)$ when $\\lambda -t>0$, hence when $t<\\lambda$. If $t\\ge \\lambda$, the integrand fails to decay and the integral diverges. Thus the finite domain is $(-\\infty ,\\lambda )$.

</details>

### 7. Convexity of the MGF domain

**Exercise 12.7**

<a id="generating-transforms-and-characteristic-functions-ex-7"></a>

Suppose $M_{X}(s)$ and $M_{X}(t)$ are finite. Show $M_{X}(\\theta s+(1-\\theta )t)$ is finite for $0<\\theta <1$.

<details>
<summary>Hint 1</summary>

Express the interpolated exponential as a product of powers.

</details>

<details>
<summary>Hint 2</summary>

Use Hölder with conjugate exponents $1/\\theta$ and $1/(1-\\theta)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write

$e^{(\\theta s+(1-\\theta )t)X}=(e^{sX})^\\theta (e^{tX})^{1-\\theta }$.

Hölder's inequality with conjugate exponents $1/\\theta$ and $1/(1-\\theta )$ gives

$M_{X}(\\theta s+(1-\\theta )t)\\le M_{X}(s)^\\theta M_{X}(t)^{1-\\theta }<\\infty$.

Hence the finiteness domain is convex and therefore an interval.

</details>

### 8. Normal MGF under an affine map

**Exercise 12.8**

<a id="generating-transforms-and-characteristic-functions-ex-8"></a>

If $X\\sim \\mathcal{N}(\\mu ,\\sigma^{2})$ and $Y=aX+b$, derive $M_{Y}$ and identify its law.

<details>
<summary>Hint 1</summary>

Pull the deterministic translation outside the exponential expectation.

</details>

<details>
<summary>Hint 2</summary>

Replace the normal MGF argument by $at$ and identify the new linear and quadratic coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.** Using the affine map,

$M_{Y}(t)=\\mathbb{E}[e^{t(aX+b)}]=e^{bt}M_{X}(at)$

$=\\exp((a\\mu +b)t+a^{2}\\sigma^{2}t^{2}/2)$.

This is the MGF of $\\mathcal{N}(a\\mu +b,a^{2}\\sigma^{2})$. Both MGFs are finite around zero, so MGF uniqueness applies.

</details>

### 9. Moments do not guarantee a positive MGF

**Exercise 12.9**

<a id="generating-transforms-and-characteristic-functions-ex-9"></a>

Let $X=e^{Y}$ with $Y\\sim \\mathcal{N}(0,1)$. Show all positive integer moments are finite, but explain why this alone does not establish a finite MGF for positive $t$.

<details>
<summary>Hint 1</summary>

Use the normal MGF to compute each fixed power moment.

</details>

<details>
<summary>Hint 2</summary>

For positive $t$, apply monotone convergence to the nonnegative exponential series; its terms fail to tend to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** For integer $n\\ge 1$,

$\\mathbb{E}[X^{n}]=\\mathbb{E}[e^{nY}]=e^{n^{2}/2}<\\infty$.

However, $M_{X}(t)=\\mathbb{E}[e^{tX}]$ involves an exponential of the lognormal variable, not a fixed power. Expanding formally would produce terms $t^{n}e^{n^{2}/2}/n!$, which do not tend to zero for $t>0$; their ratios eventually grow without bound. Since all terms are nonnegative, monotone convergence shows the MGF is infinite. Finite moments of every order do not imply local exponential integrability.

</details>

### 10. Gamma Laplace transform

**Exercise 12.10**

<a id="generating-transforms-and-characteristic-functions-ex-10"></a>

If $X\\sim \\operatorname{Gamma}(\\alpha ,\\lambda )$ with rate $\\lambda$, derive $L_{X}(s)$ for $s\\ge 0$.

<details>
<summary>Hint 1</summary>

Insert the gamma density into $\\mathbb E e^{-sX}$.

</details>

<details>
<summary>Hint 2</summary>

Rescale the integration variable by $\\lambda+s$ and recognize the gamma normalizing integral.

</details>

<details>
<summary>Solution</summary>

**Solution.** Integrating against the gamma density gives

$L_{X}(s)=[\\lambda^\\alpha /\\Gamma (\\alpha )]\\int_{0}^\\infty x^{\\alpha -1}e^{-(\\lambda +s)x}dx$.

Substitute $u=(\\lambda +s)x$. The integral becomes $\\Gamma (\\alpha )/(\\lambda +s)^\\alpha$, so

$L_{X}(s)=(\\lambda /(\\lambda +s))^\\alpha$.

</details>

### 11. Relate a PGF and a Laplace transform

**Exercise 12.11**

<a id="generating-transforms-and-characteristic-functions-ex-11"></a>

If $N$ is nonnegative integer-valued, prove $L_{N}(s)=G_{N}(e^{-s})$.

<details>
<summary>Hint 1</summary>

Compare the two transform definitions directly.

</details>

<details>
<summary>Hint 2</summary>

For $s\\ge0$, the number $e^{-s}$ lies in the PGF's guaranteed interval $(0,1]$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Directly from the definitions,

$L_{N}(s)=\\mathbb{E}[e^{-sN}]=\\mathbb{E}[(e^{-s})^{N}]=G_{N}(e^{-s})$.

For $s\\ge 0$, $e^{-s}\\in (0,1]$, within the guaranteed PGF domain.

</details>

### 12. Basic characteristic-function identities

**Exercise 12.12**

<a id="generating-transforms-and-characteristic-functions-ex-12"></a>

Prove $\\varphi_{X}(0)=1$, $\\lvert \\varphi_{X}(t)\\rvert \\le 1$, and $\\varphi_{X}(-t)=\\overline{\\varphi_{X}(t)}$.

<details>
<summary>Hint 1</summary>

Use that $e^{itX}$ always has modulus one.

</details>

<details>
<summary>Hint 2</summary>

For conjugacy, take the complex conjugate inside the expectation of a bounded variable.

</details>

<details>
<summary>Solution</summary>

**Solution.** At zero, $e^{i0X}=1$, so the expectation is one. The triangle inequality gives

$\\lvert \\varphi_{X}(t)\\rvert =\\lvert \\mathbb{E}[e^{itX}]\\rvert \\le \\mathbb{E}[\\lvert e^{itX}\\rvert ]=1$.

Finally, complex conjugation commutes with expectation for bounded variables, and $\\overline{e^{itX}}=e^{-itX}$, giving the conjugacy identity.

</details>

### 13. Bernoulli characteristic function

**Exercise 12.13**

<a id="generating-transforms-and-characteristic-functions-ex-13"></a>

Find the characteristic function of $B\\sim \\operatorname{Bernoulli}(p)$ and of a $\\operatorname{Binomial}(m,p)$ variable.

<details>
<summary>Hint 1</summary>

A Bernoulli variable has only two possible values.

</details>

<details>
<summary>Hint 2</summary>

Then use the independent-sum representation for a binomial variable.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $B$ is zero or one,

$\\varphi_{B}(t)=1-p+pe^{it}$.

A binomial variable is a sum of $m$ independent Bernoulli variables, so its characteristic function is

$[1-p+pe^{it}]^{m}$.

</details>

### 14. Uniform characteristic function

**Exercise 12.14**

<a id="generating-transforms-and-characteristic-functions-ex-14"></a>

Find the characteristic function of $X\\sim \\operatorname{Uniform}(-a,a)$, where $a>0$.

<details>
<summary>Hint 1</summary>

Integrate $e^{itx}$ against the constant density on $[-a,a]$.

</details>

<details>
<summary>Hint 2</summary>

Treat $t=0$ directly, and use the sine limit to check continuity there.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $t\\ne 0$,

$\\varphi_{X}(t)=(1/(2a))\\int_{-a}^{a} e^{itx}dx$

$=(e^{iat}-e^{-iat})/(2ait)=\\sin(at)/(at)$.

At $t=0$, the value is one, matching the continuous limit.

</details>

### 15. Sum of independent normal variables

**Exercise 12.15**

<a id="generating-transforms-and-characteristic-functions-ex-15"></a>

Use characteristic functions to identify the sum of independent $X\\sim \\mathcal{N}(1,4)$ and $Y\\sim \\mathcal{N}(-3,5)$.

<details>
<summary>Hint 1</summary>

Multiply the two characteristic functions using independence.

</details>

<details>
<summary>Hint 2</summary>

Collect the coefficient of $it$ and the coefficient of $-t^2/2$ to identify mean and variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiplication gives

$\\varphi_{X+Y}(t)=e^{it-2t^{2}}e^{-3it-(5/2)t^{2}}$

$=e^{-2it-(9/2)t^{2}}$.

This is the characteristic function of $\\mathcal{N}(-2,9)$. Characteristic-function uniqueness identifies the law.

</details>

### 16. A dependent normal counterexample

**Exercise 12.16**

<a id="generating-transforms-and-characteristic-functions-ex-16"></a>

Let $X$ be standard normal and $Y=-X$. Find the characteristic function of $X+Y$ and compare it with $\\varphi_{X}\\varphi_{Y}$.

<details>
<summary>Hint 1</summary>

Compute the actual sum before invoking a transform product.

</details>

<details>
<summary>Hint 2</summary>

The sum is identically zero; compare its transform with the product of two standard-normal transforms.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $X+Y=0$ almost surely, its characteristic function is identically one. Both marginals are standard normal, so

$\\varphi_{X}(t)\\varphi_{Y}(t)=e^{-t^{2}/2}e^{-t^{2}/2}=e^{-t^{2}}$.

The functions differ for nonzero $t$; marginal characteristic functions multiply only under independence.

</details>

### 17. Moments from characteristic derivatives

**Exercise 12.17**

<a id="generating-transforms-and-characteristic-functions-ex-17"></a>

Suppose $\\mathbb{E}[X^{2}]<\\infty$. Express the first two raw moments using derivatives of $\\varphi_{X}$ at zero.

<details>
<summary>Hint 1</summary>

Differentiate the characteristic function under a moment domination.

</details>

<details>
<summary>Hint 2</summary>

The derivatives at zero are $i\\mathbb EX$ and $-\\mathbb EX^2$; check the factors of $i$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Finite second moment implies finite first absolute moment by Cauchy–Schwarz. Dominated differentiation gives

$\\varphi_{X}'(0)=\\mathbb{E}[iX]=iE[X]$,

$\\varphi_{X}''(0)=\\mathbb{E}[(iX)^{2}]=-\\mathbb{E}[X^{2}]$.

Therefore $\\mathbb{E}[X]=\\varphi_{X}'(0)/i=-i\\varphi_{X}'(0)$ and $\\mathbb{E}[X^{2}]=-\\varphi_{X}''(0)$.

</details>

### 18. Invert an integrable characteristic function

**Exercise 12.18**

<a id="generating-transforms-and-characteristic-functions-ex-18"></a>

Suppose $\\varphi (t)=e^{-\\lvert t\\rvert }$. Use the integrable inversion formula to recover its density.

<details>
<summary>Hint 1</summary>

The transform is integrable, so the stated density inversion applies.

</details>

<details>
<summary>Hint 2</summary>

Cancel the odd imaginary part and evaluate the remaining exponential-cosine integral through a complex reciprocal.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $\\varphi$ is integrable,

$f(x)=(1/(2\\pi ))\\int_{\\mathbb{R}} e^{-itx}e^{-\\lvert t\\rvert }dt$.

The odd imaginary part cancels, so

$f(x)=(1/\\pi )\\int_{0}^\\infty e^{-t}\\cos(tx)dt$.

Taking the real part of $\\int_{0}^\\infty e^{-(1-ix)t}dt=1/(1-ix)$ gives $1/(1+x^{2})$. Hence

$f(x)=1/[\\pi (1+x^{2})]$,

the standard Cauchy density.

</details>

### 19. Detect escaping mass

**Exercise 12.19**

<a id="generating-transforms-and-characteristic-functions-ex-19"></a>

For $X_{n}\\sim \\operatorname{Uniform}(-n,n)$, compute the pointwise limit of $\\varphi_{X_{n}}$ and explain why Lévy's converse cannot be applied.

<details>
<summary>Hint 1</summary>

At each fixed nonzero $t$, bound the sinc transform by $1/(n|t|)$.

</details>

<details>
<summary>Hint 2</summary>

Compare that pointwise limit with the value at zero; Lévy's converse requires continuity at zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The characteristic function is $\\sin(nt)/(nt)$ for $t\\ne 0$ and one at zero. For each fixed nonzero $t$, its absolute value is at most $1/(n\\lvert t\\rvert)$, so it tends to zero. The pointwise limit is therefore one at zero and zero elsewhere. It is discontinuous at zero, so it is not a characteristic function and fails the continuity hypothesis in Lévy's theorem. The sequence has no weak probability limit on $\\mathbb{R}$.

</details>

### 20. Transform convergence without moment convergence

**Exercise 12.20**

<a id="generating-transforms-and-characteristic-functions-ex-20"></a>

Let $X_{n}=n$ with probability $1/n$ and $0$ otherwise. Show $X_{n}\\Rightarrow 0$ but $\\mathbb{E}[X_{n}]=1$ for every $n$.

<details>
<summary>Hint 1</summary>

Compute the characteristic function from the two-point law.

</details>

<details>
<summary>Hint 2</summary>

Its distance from one is at most $2/n$, but its mean still receives a contribution $n\\cdot(1/n)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its characteristic function is

$\\varphi_{X_{n}}(t)=1-1/n+(1/n)e^{itn}$.

For each fixed $t$, the last two terms differ from one by at most $2/n$, so $\\varphi_{X_{n}}(t)\\to 1$, the characteristic function of the constant zero. Lévy's theorem gives $X_{n}\\Rightarrow 0$. However,

$\\mathbb{E}[X_{n}]=n(1/n)=1$.

Weak convergence does not control this unbounded test function; the rare large values prevent uniform integrability.

</details>


## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](back-matter/references-and-attribution-guide.md) records the wider source map.


## 13. Summary and forward route

PGFs encode nonnegative integer laws through power-series coefficients. MGFs are powerful only on their actual finiteness domains, while Laplace transforms are guaranteed for nonnegative variables. Characteristic functions exist for every real law, determine that law, multiply under independent addition, and support both Fourier inversion and weak-convergence arguments. Differentiating any transform requires a moment or exponential-integrability license, and pointwise characteristic-function limits require continuity at zero to prevent mass from escaping.

The next chapter compares [Modes of Convergence and Uniform Integrability](#/item/book-probability-models-proofs?chapter=modes-of-convergence-and-uniform-integrability), clarifying exactly when distributional, probabilistic, almost-sure, and $L^{p}$ limits permit expectations or moments to converge.
`;export{e as default};