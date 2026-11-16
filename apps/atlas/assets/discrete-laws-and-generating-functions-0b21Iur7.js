var e=`---
parent_id: book-probability-models-proofs
chapter_id: discrete-laws-and-generating-functions
title: "Discrete Laws and Probability Generating Functions"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Discrete Laws and Probability Generating Functions

Named distributions are compressed mechanism statements. “Binomial” means a fixed number of independent Bernoulli trials with one success probability. “Hypergeometric” means sampling a fixed number without replacement from a finite population. The formulas can look similar while their dependence structures differ.

This chapter derives the main nonnegative integer laws, develops probability generating functions, and uses them to prove convolution and thinning results. It depends on independent product models and the pushforward view of a law. Expectation and variance are deferred to Chapter 8; generating-function derivatives are mentioned only as a forward pointer.

## 1. A mass function must declare its support

A discrete law on a countable set $S$ is specified by masses $p(x)\\ge 0$ satisfying

$\\sum_{x\\in S}p(x)=1$.

The support is not a footnote. A formula valid for $k=0,...,n$ defines a different object from the same algebraic expression on every nonnegative integer. Boundary values determine whether recursion, normalization, and transformation arguments are legal.

### Ratios reveal shape without evaluating factorials

For positive neighbouring masses, the ratio $p(k+1)/p(k)$ shows where a sequence rises or falls. This avoids computing large factorials and often identifies a mode exactly. A numerical implementation should also prefer recurrences or log masses over raw factorials, which overflow long before the probability becomes mathematically difficult.

## 2. Bernoulli and binomial laws count independent successes

A Bernoulli variable $X$ with parameter $p\\in [0,1]$ has

$\\mathbb{P}(X=1)=p$, $\\mathbb{P}(X=0)=1-p$.

For independent Bernoulli variables $X_{1},...,X_{n}$ with common parameter $p$, the sum $S_{n}=\\sum_{i}X_{i}$ is binomial:

$\\mathbb{P}(S_{n}=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$, $k=0,...,n$.

The mechanism has four parts: fixed $n$, binary outcomes, common $p$, and independence. If success probabilities vary, the sum has a Poisson-binomial law; if trials share a latent success rate, the count is generally overdispersed relative to a binomial law.

### Neighbouring-mass recurrence

For $0<p<1$,

$\\mathbb{P}(S_{n}=k+1)/\\mathbb{P}(S_{n}=k)=[(n-k)/(k+1)]\\cdot [p/(1-p)]$.

The masses increase while $(n-k)p>(k+1)(1-p)$, equivalently while $k+1<(n+1)p$. A mode is $\\left\\lfloor (n+1)p \\right\\rfloor$ unless $(n+1)p$ is an integer, in which case the adjacent values $(n+1)p-1$ and $(n+1)p$ are both modes.

### Worked exact tail by recurrence

For $n=10$, $p=0.2$, start with $p_{0}=0.8^{10}$. Generate later masses using

$p_{k+1}=p_{k}[(10-k)/(k+1)](0.2/0.8)$.

Then $\\mathbb{P}(S_{10}\\ge 3)=1-p_{0}-p_{1}-p_{2}$. The recurrence computes the same exact expression as the binomial formula while avoiding repeated powers and factorials.

## 3. Geometric and negative-binomial laws count waiting

Let independent Bernoulli trials have success parameter $p$, with $0<p\\le 1$. If $T_{1}$ counts the number of trials through the first success, then

$\\mathbb{P}(T_{1}=n)=(1-p)^{n-1}p$, $n=1,2,...$.

Some sources instead count failures before the first success, giving support $0,1,...$ and masses $(1-p)^{k}p$. Always state the convention; otherwise a correct formula may be shifted by one.

For the trial number $T_{r}$ of the $r$th success,

$\\mathbb{P}(T_{r}=n)=\\binom{n-1}{r-1}p^{r}(1-p)^{n-r}$, $n=r,r+1,...$.

**Derivation.** Trial $n$ must be a success. Among the first $n-1$ positions, exactly $r-1$ must be successes; choose them in $\\binom{n-1}{r-1}$ ways. Every permitted path has $r$ successes and $n-r$ failures, so independence supplies the common mass.

This is a negative-binomial waiting law. A second convention counts failures before the $r$th success. The parameterisation must travel with the name.

## 4. Hypergeometric laws record sampling without replacement

A population contains $N$ distinct objects, of which $K$ are marked successes. Draw an unordered sample of size $n$ uniformly without replacement. If $X$ counts sampled successes, then

$\\mathbb{P}(X=k)=\\binom{K}{k}\\binom{N-K}{n-k}/\\binom{N}{n}$.

The legal support is

$\\max(0,n-(N-K))\\le k\\le \\min(n,K)$.

The numerator chooses $k$ successes and $n-k$ failures; the denominator chooses any sample. The successive draws are dependent, so replacing this law by $\\operatorname{Binomial}(n,K/N)$ is an approximation, not an identity.

### Worked finite-population audit

Ten objects include four marked ones. A sample of size three contains exactly two marked objects with probability

$\\binom{4}{2}\\binom{6}{1}/\\binom{10}{3}=36/120=0.3$.

The binomial model with $p=0.4$ would give $\\binom{3}{2}0.4^{2}\\cdot 0.6=0.288$. The answers are close here but not equal. Without replacement, seeing one success slightly reduces the chance of another.

## 5. The multinomial law counts several categories

Suppose each of $n$ independent trials enters one of $m$ categories with probabilities $p_{1},...,p_{m}$, where $\\sum_{j}p_{j}=1$. Let $N_{j}$ be the count in category $j$. For nonnegative integers $k_{j}$ summing to $n$,

$\\mathbb{P}(N_{1}=k_{1},...,N_{m}=k_{m})$

$=n!/(k_{1}!...k_{m}!) \\prod_{j=1}^{m} p_{j}^{k_{j}}$.

The multinomial coefficient counts category strings with fixed counts. Although trials are independent, the category counts are not: they must sum to $n$. Knowing $N_{1}$ changes the possible values of the others.

The binomial law is the $m=2$ case after one count is eliminated by $N_{2}=n-N_{1}$.

## 6. The Poisson law models an unbounded count

For rate parameter $\\lambda >0$, a Poisson variable has

$\\mathbb{P}(X=k)=e^{-\\lambda }\\lambda^{k}/k!$, $k=0,1,2,...$.

Normalisation follows from the exponential series:

$\\sum_{k\\ge 0}e^{-\\lambda }\\lambda^{k}/k! =e^{-\\lambda }e^\\lambda =1$.

Neighbouring masses satisfy

$p_{k+1}/p_{k}=\\lambda /(k+1)$.

Thus masses rise while $k+1<\\lambda$ and fall after $k+1>\\lambda$. If $\\lambda$ is not an integer, the unique mode is $\\left\\lfloor \\lambda \\right\\rfloor$; if $\\lambda$ is a positive integer, the two modes are $\\lambda -1$ and $\\lambda$.

### Rare-event binomial limit

Let $S_{n}\\sim \\operatorname{Binomial}(n,\\lambda /n)$ and fix $k$. Then

$\\mathbb{P}(S_{n}=k)=\\binom{n}{k}(\\lambda /n)^{k}(1-\\lambda /n)^{n-k}$.

Rewrite the first factors as

$[n(n-1)...(n-k+1)/n^{k}]\\cdot [\\lambda^{k}/k!]$

and split the last as $(1-\\lambda /n)^{n}(1-\\lambda /n)^{-k}$. For fixed $k$, the first bracket tends to one, $(1-\\lambda /n)^{n}\\to e^{-\\lambda }$, and the remaining factor tends to one. Therefore

$\\mathbb{P}(S_{n}=k)\\to e^{-\\lambda }\\lambda^{k}/k!$.

This proves pointwise convergence of fixed masses. A finite-sample approximation guarantee requires an additional error bound; a limit alone does not say how large $n$ must be.

## 7. Probability generating functions encode nonnegative counts

For a nonnegative integer-valued variable $X$, its **probability generating function** is

$G_{X}(s)=\\sum_{k\\ge 0}\\mathbb{P}(X=k)s^{k}$, at least for $\\lvert s\\rvert \\le 1$.

Absolute convergence on $\\lvert s\\rvert \\le 1$ follows because

$\\sum_{k}\\mathbb{P}(X=k)\\lvert s\\rvert^{k}\\le \\sum_{k}\\mathbb{P}(X=k)=1$.

The coefficients uniquely recover the law. When differentiation at zero is legal,

$\\mathbb{P}(X=k)=G_{X}^{(k)}(0)/k!$.

At $s=1$, $G_{X}(1)=1$; this is a quick normalization check. Derivatives near one encode factorial moments, a connection developed after expectation has been constructed.

### Standard PGFs

- Bernoulli: $G(s)=1-p+ps$.
- Binomial: $G(s)=(1-p+ps)^{n}$.
- Geometric trials-through-success: $G(s)=ps/[1-(1-p)s]$.
- Poisson: $G(s)=\\exp(\\lambda (s-1))$.

Each formula follows by substituting the mass function and recognizing a binomial, geometric, or exponential series.

## 8. Independent sums multiply PGFs

If $X$ and $Y$ are independent nonnegative integer-valued variables, then

$G_{X+Y}(s)=G_{X}(s)G_{Y}(s)$ for $\\lvert s\\rvert \\le 1$.

**Proof.** Independence gives

$\\mathbb{P}(X=j,Y=k)=\\mathbb{P}(X=j)\\mathbb{P}(Y=k)$.

Because all terms are nonnegative for $0\\le s\\le 1$, sums may be rearranged safely:

$G_{X+Y}(s)=\\sum_{j}\\sum_{k}\\mathbb{P}(X=j)\\mathbb{P}(Y=k)s^{j+k}$

$=[\\sum_{j}\\mathbb{P}(X=j)s^{j}][\\sum_{k}\\mathbb{P}(Y=k)s^{k}]$.

For negative $s$ with $\\lvert s\\rvert \\le 1$, absolute convergence justifies the same rearrangement. \`□\`

### Poisson addition theorem

If independent $X\\sim \\operatorname{Poisson}(\\lambda )$ and $Y\\sim \\operatorname{Poisson}(\\mu )$, then

$G_{X+Y}(s)=e^{\\lambda (s-1)}e^{\\mu (s-1)}=e^{(\\lambda +\\mu )(s-1)}$.

Uniqueness of PGF coefficients shows

$X+Y\\sim \\operatorname{Poisson}(\\lambda +\\mu )$.

The independence hypothesis is essential. If $Y=X$, the sum takes only even values and cannot have a positive-parameter Poisson law.

## 9. Random sums compose PGFs

Let $N$ be a nonnegative integer count. Let $X_{1},X_{2},...$ be iid nonnegative integer-valued variables independent of $N$, and define

$S=X_{1}+...+X_{N}$, with $S=0$ when $N=0$.

Conditioning on $N=n$ and multiplying the $n$ PGFs gives

$G_{S \\mid N=n}(s)=G_{X}(s)^{n}$.

Averaging over $N$ yields

$G_{S}(s)=\\sum_{n}\\mathbb{P}(N=n)G_{X}(s)^{n}=G_{N}(G_{X}(s))$.

This **compound-sum formula** cleanly separates the number of contributions from their sizes.

### Poisson thinning

Let $N\\sim \\operatorname{Poisson}(\\lambda )$. Independently retain each of its $N$ items with probability $q$. Conditional on $N$, the retained count is binomial, so one item's contribution has PGF $1-q+qs$. Composition gives

$G_{R}(s)=G_{N}(1-q+qs)$

$=\\exp(\\lambda [(1-q+qs)-1])=\\exp(\\lambda q(s-1))$.

Thus $R\\sim \\operatorname{Poisson}(\\lambda q)$. A bivariate generating-function calculation further shows the retained and discarded counts are independent Poisson variables with rates $\\lambda q$ and $\\lambda (1-q)$.

## 10. Choose a law by mechanism, not by support alone

| Mechanism | Count law | Dependence clue |
|---|---|---|
| one binary trial | Bernoulli | no repetition |
| fixed independent binary trials | binomial | independent, common $p$ |
| trials through a fixed success count | geometric/negative binomial | independent repeated opportunities |
| fixed sample without replacement | hypergeometric | negative dependence across draws |
| fixed independent categorical trials | multinomial | trial independence, count-sum constraint |
| rare unbounded arrivals in a fixed exposure | Poisson, after model justification | independent increments in a process model |

The table is diagnostic, not automatic. Real counts may show clustering, inhibition, changing exposure, excess zeros, or latent heterogeneity. A named law should be defended by the data-generating mechanism and checked against consequences it predicts.

## 11. A discrete-law audit

Before accepting a count model or PGF argument, ask:

1. What is the exact support, including endpoint conventions?
2. Is the number of trials fixed, random, or a stopping time?
3. Are draws with or without replacement?
4. Are success probabilities common, varying, or latent?
5. Does independence apply to trials, category counts, summands, or none of these?
6. Does the mass function normalize?
7. Is a Poisson statement exact, limiting, or approximate with a finite error bound?
8. Is PGF multiplication backed by independence?
9. Are factorial computations replaced by stable recurrences where numerical work is promised?

## Further PGF proofs and worked models

**Proposition 5.1 (Coefficient recovery and uniqueness).** The PGF of a nonnegative integer variable determines every mass uniquely.

*Proof.* On each closed interval $|s|\\le r<1$, the probability power series and all its termwise derivatives converge uniformly. For a derivative of fixed order $m$, domination follows because a polynomial factor in $k$ times $r^{k-m}$ is bounded as $k$ ranges over integers. Standard power-series differentiation therefore gives
$G^{(m)}(0)=m!P(X=m)$. Equality of PGFs on a neighbourhood of zero gives equality of these derivatives and hence of all masses. This supplies the uniqueness used in the Poisson addition argument; agreement at the single point one would not suffice. ∎

The derivatives at one need an additional moment check or an extended nonnegative limit. For $0<s<1$, differentiation gives $G'(s)=\\sum_{k\\ge1}kp_ks^{k-1}$. As $s\\uparrow1$, the terms increase to $kp_k$, so monotone convergence gives $G'(1-)=E[X]$, possibly infinite. Repeating the argument gives $G''(1-)=E[X(X-1)]$. A finite endpoint derivative is therefore a moment assertion rather than an automatic property of every PGF.

### Worked Example 5.2: heterogeneous trials are not one binomial law

Let $A,B$ be independent indicators with success probabilities $1/4$ and $3/4$. Their sum $S$ has PGF
$G_S(s)=(3/4+s/4)(1/4+3s/4)=3/16+(10/16)s+(3/16)s^2$.
The coefficients give the complete law and add to one.

Its mean is one, as follows either from symmetry of the masses or by differentiating at one. If it were binomial with two trials, that mean would force success probability one half. But $\\operatorname{Bin}(2,1/2)$ has endpoint masses one quarter, rather than three sixteenths. Thus the common-parameter binomial description is false.

The variance is $3/8$, either from the output masses or from adding the two indicator variances. The binomial comparison has variance one half. These independent but heterogeneous trials give less variance than the equal-probability model with the same mean.

This example illustrates why a fixed binary-trial count and independence still do not determine a binomial law: the common success probability is a separate assumption. For more than two trials, the product $\\prod_i(1-p_i+p_is)$ remains valid and its coefficients define the Poisson-binomial law.

### Worked Example 5.3: complete Poisson splitting

Let $N$ be Poisson with rate $\\lambda>0$. Conditional on $N$, classify each item independently as retained with probability $q\\in(0,1)$, and let $R,D$ be retained and discarded counts. For nonnegative integers $r,d$, the only compatible total is $N=r+d$, so
$P(R=r,D=d)=e^{-\\lambda}\\lambda^{r+d}(r+d)!^{-1}\\binom{r+d}{r}q^r(1-q)^d$.

Cancelling factorials and separating exponential factors gives
$P(R=r,D=d)=[e^{-\\lambda q}(\\lambda q)^r/r!]\\,[e^{-\\lambda(1-q)}(\\lambda(1-q))^d/d!]$.
Both brackets normalize over their own nonnegative integer supports. Consequently the counts are independent Poisson variables of rates $\\lambda q$ and $\\lambda(1-q)$.

Conditional on the total they are negatively linked by the sum constraint, whereas after mixing over a Poisson total they become independent. This is a statement about this particular total-count law. With a fixed total of ten, for example, the two counts cannot be independent unless the classification is degenerate.

At $q=0$ or one, one count is identically zero and the other equals $N$. Those endpoint cases still give independence in the usual constant-variable sense, although the positive-rate mass formulas are replaced by a point mass for the zero-rate coordinate.

### Worked Example 5.4: a compound count with repeated contributions

Let $N$ be Poisson with rate two. Independently of $N$, let iid contributions take value one or two with equal probabilities. Their common PGF is $(s+s^2)/2$. For $S=\\sum_{i=1}^N X_i$, including zero when $N=0$, composition yields
$G_S(s)=\\exp(s+s^2-2)$.

The chance of no contribution is $P(S=0)=e^{-2}$, because every nonempty contribution is positive. To find the chance of total two, split into two disjoint mechanisms. Either there is one item of size two, with probability $P(N=1)/2=e^{-2}$, or there are two items both of size one, with probability $P(N=2)/4=e^{-2}/2$. Hence $P(S=2)=3e^{-2}/2$.

The same result comes from the coefficient of $s^2$ in $e^{-2}e^se^{s^2}$. This agreement identifies what the generating-function algebra is counting. The sum is not Poisson merely because its number of terms is Poisson: individual contributions can exceed one.

Differentiating the displayed entire PGF gives $E[S]=3$ and $E[S(S-1)]=11$, so $E[S^2]=14$ and variance is five. Here endpoint derivatives are legitimate because the PGF is finite in a neighbourhood of one. In general a random-sum formula requires independence of the contribution sequence from the total count; a stopping count determined by those contributions needs another argument.

## 12. Exercises with complete solutions

### 1. Normalise a finite law

**Exercise 5.1**
<a id="discrete-laws-and-generating-functions-ex-1"></a>

Suppose $\\mathbb{P}(X=k)=c(k+1)$ for $k=0,1,2,3$. Find $c$.

<details>
<summary>Hint 1</summary>

Add the four prescribed masses.

</details>
<details>
<summary>Hint 2</summary>

Normalisation fixes the common multiplier of the weights.

</details>
<details>
<summary>Solution</summary>

**Solution.** Normalisation requires

$c(1+2+3+4)=10c=1$,

so $c=1/10$.


</details>

### 2. Binomial recurrence

**Exercise 5.2**
<a id="discrete-laws-and-generating-functions-ex-2"></a>

For $X\\sim \\operatorname{Binomial}(12,1/3)$, express $\\mathbb{P}(X=k+1)$ in terms of $\\mathbb{P}(X=k)$.

<details>
<summary>Hint 1</summary>

Take the ratio of adjacent binomial masses.

</details>
<details>
<summary>Hint 2</summary>

Cancel factorials and insert the displayed success odds.

</details>
<details>
<summary>Solution</summary>

**Solution.** Substitute $n=12$, $p/(1-p)=(1/3)/(2/3)=1/2$ into the neighbouring-mass ratio:

$\\mathbb{P}(X=k+1)=\\mathbb{P}(X=k)(12-k)/[2(k+1)]$ for $k=0,...,11$.


</details>

### 3. Binomial modes

**Exercise 5.3**
<a id="discrete-laws-and-generating-functions-ex-3"></a>

Find the mode or modes of $\\operatorname{Binomial}(9,0.3)$.

<details>
<summary>Hint 1</summary>

Evaluate the product of the trial count plus one with the success probability.

</details>
<details>
<summary>Hint 2</summary>

An integer value produces two adjacent modes.

</details>
<details>
<summary>Solution</summary>

**Solution.** $(n+1)p=10(0.3)=3$ is an integer, so the adjacent values $2$ and $3$ are both modes.


</details>

### 4. Geometric convention

**Exercise 5.4**
<a id="discrete-laws-and-generating-functions-ex-4"></a>

If $F$ counts failures before the first success, write its mass function and support.

<details>
<summary>Hint 1</summary>

Specify exactly which failures precede the first success.

</details>
<details>
<summary>Hint 2</summary>

The support begins at zero for a failures count.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $k=0,1,...$, exactly $k$ failures followed by a success has probability

$\\mathbb{P}(F=k)=(1-p)^{k}p$.

It relates to trials-through-success by $T_{1}=F+1$.


</details>

### 5. Third success on trial seven

**Exercise 5.5**
<a id="discrete-laws-and-generating-functions-ex-5"></a>

Find the probability that the third success occurs on trial seven in iid Bernoulli trials.

<details>
<summary>Hint 1</summary>

The final trial must be the third success.

</details>
<details>
<summary>Hint 2</summary>

Choose the two earlier success positions among the first six.

</details>
<details>
<summary>Solution</summary>

**Solution.** The seventh trial must succeed, and exactly two of the first six must succeed. Hence

$\\mathbb{P}(T_{3}=7)=\\binom{6}{2}p^{3}(1-p)^{4}$.


</details>

### 6. Hypergeometric support

**Exercise 5.6**
<a id="discrete-laws-and-generating-functions-ex-6"></a>

A population has $N=20$, $K=7$, and sample size $n=15$. What values can the success count take?

<details>
<summary>Hint 1</summary>

There are only thirteen population failures.

</details>
<details>
<summary>Hint 2</summary>

Compare forced successes with the maximum of seven available successes.

</details>
<details>
<summary>Solution</summary>

**Solution.** The lower endpoint is $\\max(0,15-(20-7))=2$; at least two successes are forced because only 13 failures exist. The upper endpoint is $\\min(15,7)=7$. Thus the support is $2,3,4,5,6,7$.


</details>

### 7. Binomial versus hypergeometric

**Exercise 5.7**
<a id="discrete-laws-and-generating-functions-ex-7"></a>

From a population of six successes and four failures, sample two without replacement. Find the exact probability of two successes and compare it with the with-replacement binomial value.

<details>
<summary>Hint 1</summary>

Use the without-replacement sample space for the exact answer.

</details>
<details>
<summary>Hint 2</summary>

The replacement comparison uses the square of the original success fraction.

</details>
<details>
<summary>Solution</summary>

**Solution.** Without replacement,

$P=\\binom{6}{2}/\\binom{10}{2}=15/45=1/3$.

With independent replacement and $p=0.6$, the value would be $0.6^{2}=0.36$. The first success reduces the remaining success fraction from $6/10$ to $5/9$.


</details>

### 8. Poisson normalisation

**Exercise 5.8**
<a id="discrete-laws-and-generating-functions-ex-8"></a>

Prove the Poisson masses sum to one.

<details>
<summary>Hint 1</summary>

Factor out the exponential normalizing term.

</details>
<details>
<summary>Hint 2</summary>

Recognise the remaining exponential series.

</details>
<details>
<summary>Solution</summary>

**Solution.** Using the exponential power series,

$\\sum_{k\\ge 0}e^{-\\lambda }\\lambda^{k}/k! =e^{-\\lambda }\\sum_{k\\ge 0}\\lambda^{k}/k! =e^{-\\lambda }e^\\lambda =1$.


</details>

### 9. Poisson recurrence and modes

**Exercise 5.9**
<a id="discrete-laws-and-generating-functions-ex-9"></a>

For $X\\sim \\operatorname{Poisson}(4)$, find the modes.

<details>
<summary>Hint 1</summary>

Use the ratio of successive Poisson masses.

</details>
<details>
<summary>Hint 2</summary>

At an integer rate the ratio equals one at one neighbouring pair.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $\\lambda =4$ is a positive integer, the neighbouring-mass ratio equals one between $k=3$ and $k=4$. The two modes are $3$ and $4$.


</details>

### 10. A fixed-mass Poisson limit

**Exercise 5.10**
<a id="discrete-laws-and-generating-functions-ex-10"></a>

Show $\\mathbb{P}(\\operatorname{Binomial}(n,2/n)=0)\\to e^{-2}$.

<details>
<summary>Hint 1</summary>

Zero successes means all Bernoulli trials fail.

</details>
<details>
<summary>Hint 2</summary>

Apply the standard exponential limit to that probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** The zero-success probability is $(1-2/n)^{n}$, which converges to $e^{-2}$ by the standard exponential limit.


</details>

### 11. Read coefficients from a PGF

**Exercise 5.11**
<a id="discrete-laws-and-generating-functions-ex-11"></a>

If $G_{X}(s)=1/4+(1/2)s+(1/4)s^{2}$, find the law.

<details>
<summary>Hint 1</summary>

A PGF is a power series with probability coefficients.

</details>
<details>
<summary>Hint 2</summary>

Read each coefficient and check the value at one.

</details>
<details>
<summary>Solution</summary>

**Solution.** PGF coefficients are the masses: $\\mathbb{P}(X=0)=1/4$, $\\mathbb{P}(X=1)=1/2$, $\\mathbb{P}(X=2)=1/4$, and all other masses are zero. The coefficients are nonnegative and sum to $G_{X}(1)=1$.


</details>

### 12. Bernoulli PGF

**Exercise 5.12**
<a id="discrete-laws-and-generating-functions-ex-12"></a>

Derive the PGF of a Bernoulli variable.

<details>
<summary>Hint 1</summary>

Insert the two Bernoulli outcomes into the definition.

</details>
<details>
<summary>Hint 2</summary>

The zero outcome contributes the constant term.

</details>
<details>
<summary>Solution</summary>

**Solution.** By definition,

$G(s)=\\mathbb{P}(X=0)s^{0}+\\mathbb{P}(X=1)s^{1}=(1-p)+ps$.


</details>

### 13. Binomial PGF without summing the mass formula

**Exercise 5.13**
<a id="discrete-laws-and-generating-functions-ex-13"></a>

Use independent sums to derive the binomial PGF.

<details>
<summary>Hint 1</summary>

Represent the count as a sum of independent indicators.

</details>
<details>
<summary>Hint 2</summary>

Multiply their identical one-trial PGFs.

</details>
<details>
<summary>Solution</summary>

**Solution.** A binomial variable is the sum of $n$ independent Bernoulli variables. PGFs multiply, so

$G(s)=[1-p+ps]^{n}$.

Expanding by the binomial theorem recovers the binomial masses.


</details>

### 14. Geometric PGF

**Exercise 5.14**
<a id="discrete-laws-and-generating-functions-ex-14"></a>

Derive the PGF for trials through first success.

<details>
<summary>Hint 1</summary>

Separate the first power of s from the waiting-time series.

</details>
<details>
<summary>Hint 2</summary>

The remaining series is geometric with ratio (1-p)s.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $\\lvert s\\rvert \\le 1$,

$G(s)=\\sum_{n\\ge 1}(1-p)^{n-1}ps^{n}$

$=ps\\sum_{j\\ge 0}[(1-p)s]^{j}=ps/[1-(1-p)s]$.

The denominator is nonzero on the required domain when $p>0$.


</details>

### 15. Poisson PGF

**Exercise 5.15**
<a id="discrete-laws-and-generating-functions-ex-15"></a>

Derive $G(s)=\\exp(\\lambda (s-1))$.

<details>
<summary>Hint 1</summary>

Insert the Poisson mass formula into the PGF.

</details>
<details>
<summary>Hint 2</summary>

Collect the exponential power series in lambda times s.

</details>
<details>
<summary>Solution</summary>

**Solution.** Substitute the masses:

$G(s)=\\sum_{k\\ge 0}e^{-\\lambda }\\lambda^{k}s^{k}/k!$

$=e^{-\\lambda }e^{\\lambda s}=e^{\\lambda (s-1)}$.


</details>

### 16. Add independent Poisson variables

**Exercise 5.16**
<a id="discrete-laws-and-generating-functions-ex-16"></a>

If $X\\sim \\operatorname{Poisson}(2)$ and $Y\\sim \\operatorname{Poisson}(5)$ independently, find the law of $X+Y$.

<details>
<summary>Hint 1</summary>

Use PGF multiplication only after noting independence.

</details>
<details>
<summary>Hint 2</summary>

Add the two rate parameters in the exponential exponent.

</details>
<details>
<summary>Solution</summary>

**Solution.** The product PGF is

$e^{2(s-1)}e^{5(s-1)}=e^{7(s-1)}$,

the PGF of $\\operatorname{Poisson}(7)$. Uniqueness of coefficients identifies the law.


</details>

### 17. Why independence matters for Poisson sums

**Exercise 5.17**
<a id="discrete-laws-and-generating-functions-ex-17"></a>

Let $X\\sim \\operatorname{Poisson}(2)$ and set $Y=X$. Why is $X+Y$ not $\\operatorname{Poisson}(4)$?

<details>
<summary>Hint 1</summary>

Inspect the support of twice an integer variable.

</details>
<details>
<summary>Hint 2</summary>

A positive-rate Poisson law gives positive mass to odd values.

</details>
<details>
<summary>Solution</summary>

**Solution.** The sum $2X$ is always even, while a $\\operatorname{Poisson}(4)$ variable has positive probability at every nonnegative integer, including one. The product-PGF proof cannot be used because $X$ and $Y$ are perfectly dependent.


</details>

### 18. A multinomial probability

**Exercise 5.18**
<a id="discrete-laws-and-generating-functions-ex-18"></a>

In six independent trials, category probabilities are $(1/2,1/3,1/6)$. Find the probability of counts $(3,2,1)$.

<details>
<summary>Hint 1</summary>

Count arrangements of the three category totals.

</details>
<details>
<summary>Hint 2</summary>

Multiply the multinomial coefficient by the category probability powers.

</details>
<details>
<summary>Solution</summary>

**Solution.** The counts sum to six, so

$P=6!/(3!2!1!)(1/2)^{3}(1/3)^{2}(1/6)$.

The multinomial coefficient counts strings with those category totals.


</details>

### 19. Compound Bernoulli thinning

**Exercise 5.19**
<a id="discrete-laws-and-generating-functions-ex-19"></a>

If $N$ has PGF $G_{N}$ and each of its items is independently retained with probability $q$, show the retained count has PGF $G_{N}(1-q+qs)$.

<details>
<summary>Hint 1</summary>

First condition on the number of available items.

</details>
<details>
<summary>Hint 2</summary>

The conditional retained count is binomial, then average its PGF.

</details>
<details>
<summary>Solution</summary>

**Solution.** Conditional on $N=n$, the retained count is a sum of $n$ Bernoulli variables, with PGF $(1-q+qs)^{n}$. Average over $N$:

$\\sum_{n}\\mathbb{P}(N=n)(1-q+qs)^{n}=G_{N}(1-q+qs)$.


</details>

### 20. Diagnose the mechanism

**Exercise 5.20**
<a id="discrete-laws-and-generating-functions-ex-20"></a>

A survey samples 100 people without replacement from a town register and counts a characteristic recorded for exactly 30 of 1,000 residents. Is the exact count binomial or hypergeometric under a uniform sample?

<details>
<summary>Hint 1</summary>

Ask whether the sample is with or without replacement.

</details>
<details>
<summary>Hint 2</summary>

The town register fixes both population size and number of marked residents.

</details>
<details>
<summary>Solution</summary>

**Solution.** It is hypergeometric with $N=1000$, $K=30$, and $n=100$ because sampling is without replacement from a fixed finite population. A binomial model with $p=0.03$ would approximate a with-replacement or independent-trial mechanism, not the exact design.


</details>

## 13. Investigation: an exact count-law workbench

Build a dependency-free program that computes binomial, hypergeometric, and Poisson mass tables using neighbouring-mass recurrences or log masses. Require the program to:

1. validate support and parameter constraints;
2. report the total computed mass and any truncation tail;
3. compare a hypergeometric law with its binomial approximation for changing sampling fractions;
4. compare $\\operatorname{Binomial}(n,\\lambda /n)$ with $\\operatorname{Poisson}(\\lambda )$ using total absolute mass difference on a declared finite range;
5. expose a numerical table as the nonvisual alternative to any plot.

The written solution must distinguish a proved limiting statement from the finite discrepancies observed by the program.

## Sources

For probability spaces, laws, integration and independence, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, chapters 1–2, available on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). The earlier undergraduate route is Blitzstein and Hwang, *Introduction to Probability*, linked from [Harvard Stat 110](https://stat110.hsites.harvard.edu/). The additional examples and proofs in this chapter are original developments of these standard topics.

## 14. Summary and forward route

Bernoulli and binomial laws describe fixed independent binary trials; geometric and negative-binomial laws describe waiting; hypergeometric laws encode finite sampling without replacement; multinomial laws count independent categories; Poisson laws encode an unbounded count and arise as a rare-event limit. Probability generating functions uniquely encode nonnegative integer laws, multiply for independent sums, and compose for random sums.

The next chapter, [Continuous Laws and Change of Variables](#/item/book-probability-models-proofs?chapter=continuous-laws-and-change-of-variables), builds densities, survival functions, hazards, and multibranch Jacobian formulas.
`;export{e as default};