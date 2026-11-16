
# Average Orders and Summation Methods

Arithmetic functions fluctuate too much for pointwise formulas to tell the whole story. Summatory functions reveal stable main terms. The essential techniques are divisor switching, the hyperbola method, partial summation, and explicit control of floors and tails.

This chapter assumes convolution, Möbius inversion, and elementary limits and integrals. Afterward you should be able to derive exact summation identities, separate main terms from errors, prove first average-order results for $\tau$ and $\varphi$, and audit the dependence hidden in $O$ notation.

## 1. Summatory functions and average order

For an arithmetic function $f$, define

$F(x)=\sum_{n\le x} f(n)$.

An **average order** $g$ informally means $\sum_{n\le x}f(n)$ is asymptotic to $\sum_{n\le x}g(n)$. A precise statement names the limit and error. For example, saying $\tau(n)$ has average order $\log n$ is represented more accurately by

$\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+\mathcal{O}(\sqrt{x})$.

This does not assert $\tau(n)\sim \log n$ pointwise.

## 2. Switching divisor sums

For a finite region, changing summation order is exact:

$\sum_{n\le x} \sum_{d\mid n} f(d)=\sum_{d\le x} f(d) \left\lfloor x/d \right\rfloor$.

Both sides count pairs $(d,m)$ with $dm\le x$, weighted by $f(d)$. The floor is the exact number of multiples of $d$.

### Worked identity

Since $\tau=1*1$,

$\sum_{n\le x}\tau(n)=\sum_{d\le x}\left\lfloor x/d \right\rfloor$.

This counts lattice points with positive coordinates under the hyperbola $dm=x$.

## 3. Dirichlet's hyperbola method

Let $y=\left\lfloor \sqrt{x} \right\rfloor$. Split the lattice-point region at $d=y$ and use symmetry:

$\sum_{n\le x}\tau(n)=2\sum_{d\le y}\left\lfloor x/d \right\rfloor-y^{2}$.

Replace $\left\lfloor x/d \right\rfloor=x/d+\mathcal{O}(1)$:

$=2x \sum_{d\le y}1/d-y^{2}+\mathcal{O}(y)$.

The harmonic estimate

\[H_{y}=\log y+\gamma+1/(2y)+\mathcal{O}(1/y^{2})\]

then yields

$\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+\mathcal{O}(\sqrt{x})$.

The sharper harmonic expansion supplies the linear coefficient; using only $H_{y}=\log y+\mathcal{O}(1)$ proves merely $x \log x+\mathcal{O}(x)$.

## 4. Partial summation

If $A(x)=\sum_{n\le x}a_{n}$ and $b$ is continuously differentiable, then

$\sum_{n\le x}a_{n}b(n)=A(x)b(x)-\int_{1}^{x}A(t)b'(t)\,dt$,

with the standard endpoint interpretation for noninteger $x$.

This is the discrete analogue of integration by parts. Taking $a_{n}=1$, $b(t)=1/t$ compares harmonic sums with logarithms. Taking $a_{n}=\Lambda(n)$ later converts information about weighted primes into information about prime counts.

## 5. Mean value of the totient

From Möbius inversion,

$\varphi(n)=n \sum_{d\mid n} \mu(d)/d$.

Summing with $n=dm$ gives

$\sum_{n\le x}\varphi(n)=\sum_{d\le x}\mu(d) \sum_{m\le x/d}m$.

Since $\sum_{m\le y}m=\lfloor y\rfloor(\lfloor y\rfloor+1)/2$, expansion gives

$\sum_{n\le x}\varphi(n)=(x^{2}/2)\sum_{d\le x}\mu(d)/d^{2}+\mathcal{O}(x \sum_{d\le x}1/d)$.

The absolutely convergent Euler product gives

$\sum_{d\ge 1}\mu(d)/d^{2}=1/\zeta(2)=6/\pi^{2}$.

The omitted tail is $\mathcal{O}(1/x)$, so

$\sum_{n\le x}\varphi(n)=3x^{2}/\pi^{2}+\mathcal{O}(x \log x)$.

Thus the mean size of $\varphi(n)$ up to $x$ is of order $x$, even though $\varphi(n)/n$ has strong multiplicative fluctuations.

## 6. Summing multiplicative convolutions

If $h=f*g$, then

$\sum_{n\le x}h(n)=\sum_{ab\le x}f(a)g(b)$.

Choose a splitting parameter $y,z$ with $yz$ near $x$, sum one variable in each region, and subtract the overlap. This generalized hyperbola method is useful only when partial sums of $f,g$ are controlled. Choosing $\sqrt{x}$ is symmetric, not universally optimal.

## 7. Big-O contracts

$F(x)=\mathcal{O}(G(x))$ means constants $C,x_{0}$ exist such that $\lvert F(x)\rvert\le C\lvert G(x)\rvert$ for all $x\ge x_{0}$. In a family, state which parameters the constant may depend on. $o(G)$ is stronger: the ratio tends to zero. An asymptotic $F\sim G$ requires $F/G\to 1$, not bounded difference.

Combining error terms requires a common range. Replacing a floor by its argument costs at most one per summand; across $x$ terms that may be $\mathcal{O}(x)$, not $\mathcal{O}(1)$.

## 8. Computational checks

Exact prefix sums can test identities and expose missing floors. They cannot determine an asymptotic constant from a short range. A reproducible experiment reports integer arithmetic, the normalization plotted, and the theorem-predicted remainder scale.

## 9. Counting squarefree integers

The indicator of squarefree integers is $\mu(n)^{2}$. It also has the exact representation

$\mu(n)^{2}=\sum_{d^{2}\mid n}\mu(d)$.

Check at prime powers: for exponent zero or one, only $d=1$ contributes; for exponent at least two, the contributions from $d=1,p$ cancel, and higher squarefree choices multiply the same cancellation.

Let $Q(x)=\sum_{n\le x}\mu(n)^{2}$. Switch sums:

$Q(x)=\sum_{d\le \sqrt{x}}\mu(d)\left\lfloor x/d^{2} \right\rfloor$.

Replace the floor by $x/d^{2}+\mathcal{O}(1)$:

$Q(x)=x \sum_{d\le \sqrt{x}}\mu(d)/d^{2}+\mathcal{O}(\sqrt{x})$.

The tail beyond $\sqrt{x}$ is $\mathcal{O}(1/\sqrt{x})$, so after multiplying by $x$ it contributes $\mathcal{O}(\sqrt{x})$. Hence

$Q(x)=x/\zeta(2)+\mathcal{O}(\sqrt{x})=6x/\pi^{2}+\mathcal{O}(\sqrt{x})$.

This is a complete elementary density proof. The main constant comes from an absolutely convergent series, and both truncation errors are visible.

### Worked finite check

Up to ten, the squarefree integers are $1,2,3,5,6,7,10$, so $Q(10)=7$. The main term $60/\pi^{2}$ is about $6.08$; a discrepancy of order $\sqrt{10}$ is consistent. Agreement at one input neither proves nor refutes the asymptotic.

## 10. Average gcd and a second divisor switch

Consider

$G(x)=\sum_{1\le a,b\le x} \gcd(a,b)$.

Use the identity $n=\sum_{d\mid n}\varphi(d)$ with $n=\gcd(a,b)$:

\[G(x)=\sum_{a,b\le x}\sum_{d\mid a,d\mid b}\varphi(d)\]

$=\sum_{d\le x}\varphi(d)\left\lfloor x/d \right\rfloor^{2}$.

The formula is exact and converts a two-dimensional gcd statistic into one divisor sum. A related count of coprime pairs inserts the Möbius indicator:

$C(x)=\sum_{d\le x}\mu(d)\left\lfloor x/d \right\rfloor^{2}$.

Expanding floors gives

$C(x)=x^{2}/\zeta(2)+\mathcal{O}(x \log x)$.

Depending on whether axes and ordering are included, constants and endpoint terms change. The convention belongs beside the formula.

## 11. A general hyperbola identity

Let $h=f*g$, and define partial sums $F(y)=\sum_{n\le y}f(n)$, $G(y)=\sum_{n\le y}g(n)$. For positive parameters $u,v$ with $uv=x$, splitting the region $ab\le x$ yields

\[\sum_{n\le x}h(n)\]

$=\sum_{a\le u}f(a)G(x/a)+\sum_{b\le v}g(b)F(x/b)-F(u)G(v)$,

with floors or adjusted boundary choices when $u,v$ are not integral.

The subtraction removes the rectangle counted twice. For $f=g=1$ and $u=v=\sqrt{x}$, this becomes the divisor hyperbola formula.

### Choosing the split

Suppose evaluating $F(t)$ is cheap but $G(t)$ is expensive, or known errors have different exponents. Then an asymmetric split can minimize total cost or error. The equation $uv\approx x$ is structural; $u=v$ is only the symmetric special case.

## 12. Partial summation as an asymptotic transfer

Assume $A(x)=cx+\mathcal{O}(x^\theta)$ with $\theta<1$. Apply partial summation with $b(t)=1/t$:

$\sum_{n\le x}a_{n}/n=A(x)/x+\int_{1}^{x}A(t)/t^{2}\,dt$.

Substitution gives

\[c \log x+C+\mathcal{O}(x^{\theta-1})\]

for some constant $C$, provided the integrated error converges after its main tail is separated. Thus a linear summatory main term becomes logarithmic under reciprocal weighting.

This mechanism explains why positive-density sets often have divergent reciprocal sums. The converse is false: reciprocal divergence is much weaker than positive density, as primes demonstrate.

## 13. Error-budget ledger

An asymptotic derivation should list every approximation separately:

- floor replacement;
- truncation of an infinite series or Euler product;
- replacement of a partial sum by its main term;
- integral approximation;
- choice of splitting parameter;
- parameter dependence in hidden constants.

Only after expressing all errors in one variable should they be combined. A term $\mathcal{O}(x/y)$ may be small or large depending on a later choice of $y$; absorbing it before choosing $y$ can conceal a failed optimization.

### Diagnostic example

In the squarefree count, extending the sum from $d\le \sqrt{x}$ to infinity costs

$x \sum_{d>\sqrt{x}}1/d^{2}=\mathcal{O}(\sqrt{x})$.

Calling the tail merely $\mathcal{O}(1/\sqrt{x})$ forgets the outer factor $x$ and would claim an impossibly sharp error. Dimensional scale is a useful sanity check.

## 14. Mean order of the divisor-sum function

The sum-of-divisors function has a quadratic summatory main term. Begin with the exact rearrangement

$\sum_{n\le x}\sigma(n)=\sum_{dm\le x}d$.

Sum over $m$ first. With $y=\left\lfloor x/m \right\rfloor$, the inner sum of $d$ is $y(y+1)/2$. Since $y=x/m+\mathcal{O}(1)$,

$y(y+1)/2=x^{2}/(2m^{2})+\mathcal{O}(x/m)+O(1)$.

Summing over $m\le x$ gives

$\sum_{n\le x}\sigma(n)=(x^{2}/2)\sum_{m\le x}1/m^{2}+\mathcal{O}(x \log x)$.

Extending the convergent square-reciprocal sum to infinity costs $\mathcal{O}(x)$, so

$\sum_{n\le x}\sigma(n)=\pi^{2} x^{2}/12+\mathcal{O}(x \log x)$.

Thus $\sigma(n)$ has mean size proportional to $n$, with average leading coefficient $\pi^{2}/6$ after comparison with $\sum_{n\le x}n\sim x^{2}/2$.

### Orientation diagnostic

Starting instead from $\sum_{d} d \left\lfloor x/d \right\rfloor$ and replacing the floor by $x/d$ termwise produces $x$ for each of about $x$ divisors, revealing only an $x^{2}+\mathcal{O}(x^{2})$ scale and losing the constant. Summing the triangular inner block exposes the convergent $1/m^{2}$ series. Exact identities can be equivalent while only one orientation is analytically useful.

## 15. Farey fractions and visible lattice points

The Farey sequence of order $N$ consists of reduced fractions in $[0,1]$ with denominator at most $N$, in increasing order. For each denominator $n\ge 2$, exactly $\varphi(n)$ numerators lie between one and $n$ and are coprime to it. Including $0/1$ and $1/1$, its length is

$1+\sum_{n\le N}\varphi(n)$.

The totient summatory theorem therefore gives

$\lvert \mathbb{F}_{N}\rvert=3N^{2}/\pi^{2}+\mathcal{O}(N \log N)$.

Geometrically, the same count enumerates visible integer points in the triangle $0\le a\le b\le N$: a point is visible from the origin exactly when $\gcd(a,b)=1$. Reflecting across the diagonal and handling axes converts this to the density $6/\pi^{2}$ among ordered lattice pairs in a large square.

### Worked order-five sequence

The reduced fractions are

$0/1,1/5,1/4,1/3,2/5,1/2,3/5,2/3,3/4,4/5,1/1$.

There are eleven. The formula gives $1+[\varphi(1)+\ldots+\varphi(5)]=1+(1+1+2+2+4)=11$ under the convention that the initial one accounts for $0/1$.

This application turns an average arithmetic theorem into a geometric density. Boundary conventions affect only lower-order terms, but they must be fixed for exact finite counts.

## 16. Normal order is not average order

For this relative-error convention, assume the comparison function $g(n)$ is positive for all sufficiently large $n$; omit any finitely many earlier values. An arithmetic function $f(n)$ has **normal order** $g(n)$ when, for every positive $\varepsilon$, the proportion of integers $n\le x$ with

\[\lvert f(n)-g(n)\rvert>\varepsilon \lvert g(n)\rvert\]

tends to zero. This is a density statement about typical individual values. Average order concerns a summatory mean and can be dominated by an exceptional thin set of large values.

The number $\omega(n)$ of distinct prime factors has normal order $\log\log n$: this is the Hardy-Ramanujan theorem. Its mean also has leading term $\log\log x$, but agreement of the two scales is a theorem, not a definition.

### First-moment calculation

Use $\omega(n)=\sum_{p\mid n}1$. Switching sums gives

\[\sum_{n\le x}\omega(n)=\sum_{p\le x}\left\lfloor x/p \right\rfloor.\]

$=x \sum_{p\le x}1/p+\mathcal{O}(\pi(x))$.

Mertens' theorem for primes gives $\sum_{p\le x}1/p=\log\log x+B+o(1)$, so the average is $\log\log x+\mathcal{O}(1)$. Proving normal order additionally controls variance: expand $(\omega(n)-\log\log x)^{2}$, switch the two prime divisibility sums, and apply a concentration inequality. The second-moment step prevents a mean from disguising widespread fluctuation.

## 17. Exceptional values and robust interpretation

$\tau(n)$ has average order about $\log n$, yet primes always have value two and highly composite integers have much larger values. Neither family alone describes a density-one typical value without another theorem.

When reporting experiments, include median or quantiles alongside means, and separate sampling uniformly from sampling primes or smooth numbers. A theorem about all integers up to $x$ cannot be tested by a dataset prefiltered for unusual factorization.

The distinction also matters in cryptography: choosing a random integer, a random prime, and a random integer conditioned on smoothness creates three different distributions. Average-case runtime needs the exact input distribution, not merely an average order of one arithmetic statistic.

## Exercises with complete solutions

### 1. Divisor switch

Evaluate $\sum_{n\le 6}\tau(n)$ two ways.

**Solution.** Values $1,2,2,3,2,4$ sum to $14$. Floors give $6+3+2+1+1+1=14$.

### 2. Hyperbola identity

Verify the hyperbola formula for $x=10$.

**Solution.** $y=3$. It gives $2(\lfloor10\rfloor+\lfloor5\rfloor+\lfloor10/3\rfloor)-9=2(10+5+3)-9=27$, equal to the direct floor sum.

### 3. Floor error

Prove $\sum_{d\le y}\left\lfloor x/d \right\rfloor=xH_{y}+\mathcal{O}(y)$.

**Solution.** Each floor differs from $x/d$ by a number of absolute value below one. Summing $y$ such errors gives absolute error below $y$.

### 4. Crude divisor asymptotic

Using $H_{y}=\log y+\mathcal{O}(1)$, prove $\sum_{n\le x}\tau(n)=x \log x+\mathcal{O}(x)$.

**Solution.** Substitute into the hyperbola identity with $y\approx \sqrt{x}$: $2x \log y=x \log x+\mathcal{O}(\sqrt{x})$; the constant harmonic error contributes $\mathcal{O}(x)$, which dominates the remaining $\mathcal{O}(\sqrt{x})$ terms.

### 5. Pointwise warning

Why does the average order not imply $\tau(p)\approx \log p$ for primes?

**Solution.** Every prime has $\tau(p)=2$, while $\log p$ grows. A summatory asymptotic averages over all integers and makes no pointwise assertion.

### 6. Partial summation of ones

Use partial summation to express $H_{n}$.

**Solution.** With $A(t)=\left\lfloor t \right\rfloor$ and $b(t)=1/t$, $H_{n}=1+\int_{1}^{n}\left\lfloor t\right\rfloor/t^{2}\,dt$; comparing $\left\lfloor t \right\rfloor$ with $t$ yields $\log n+\mathcal{O}(1)$.

### 7. Weighted integer sum

Compute $\sum_{k\le n}k$ by partial summation.

**Solution.** Take $a_{k}=1$, $A(t)=\lfloor t\rfloor$, and $b(t)=t$; on integer endpoints the discrete formula reduces to $n^{2}-\sum_{k=1}^{n-1}k$, which solves to $n(n+1)/2$. Direct induction is simpler, illustrating that the tool should fit the problem.

### 8. Totient prefix

Compute $\sum_{n\le 6}\varphi(n)$.

**Solution.** Values are $1,1,2,2,4,2$, summing to $12$.

### 9. Möbius expression

Verify $\varphi(12)=12 \sum_{d\mid 12}\mu(d)/d$.

**Solution.** Nonzero terms use $d=1,2,3,6$: $12(1-1/2-1/3+1/6)=12/3=4$.

### 10. Tail bound

Prove $\sum_{d>x}1/d^{2}=\mathcal{O}(1/x)$.

**Solution.** The decreasing-series integral bound gives $\sum_{d>x}d^{-2}\le \int_{x}^{\infty}t^{-2}\,dt=1/x$, up to an endpoint adjustment.

### 11. Zeta reciprocal

Why may $\sum \mu(d)/d^{2}$ be multiplied as an Euler product?

**Solution.** Absolute convergence holds because $\lvert \mu(d)\rvert\le 1$ and $\sum d^{-2}$ converges. Thus rearrangement is justified, giving $\prod_{p}(1-p^{-2})=1/\zeta(2)$.

### 12. Mean totient scale

What is the average of $\varphi(n)$ for $n\le x$ to leading order?

**Solution.** Divide the summatory formula by $x$: the average is $3x/\pi^{2}+\mathcal{O}(\log x)$.

### 13. Error accumulation

If $\left\lfloor x/d \right\rfloor$ is replaced by $x/d$ for every $d\le x$, what safe total error follows?

**Solution.** There are $\lfloor x\rfloor$ terms and each error is below one, so the safe bound is $\mathcal{O}(x)$.

### 14. Big-O addition

If $A=\mathcal{O}(x \log x)$ and $B=\mathcal{O}(x)$, prove $A+B=\mathcal{O}(x \log x)$ for $x\ge 2$.

**Solution.** Since $x\le x \log x/\log 2$, both terms are bounded by constants times $x \log x$; add the constants.

### 15. Asymptotic distinction

Give functions with $F=\mathcal{O}(G)$ but not $F\sim G$.

**Solution.** Take $F(x)=2x$, $G(x)=x$. The ratio is bounded, so $F=\mathcal{O}(G)$, but tends to $2$, not $1$.

### 16. Convolution region

Show $\sum_{n\le x}(f*g)(n)=\sum_{ab\le x}f(a)g(b)$.

**Solution.** Expand the left over divisors $a\mid n$, put $b=n/a$, and observe the bijection between $(n,a)$ and positive pairs $(a,b)$ with product at most $x$.

### 17. Split parameter

Why need the hyperbola split not always be $\sqrt{x}$?

**Solution.** If partial sums or evaluation costs for $f$ and $g$ differ, asymmetric $y,z$ can balance the two error terms or workloads better. Symmetry is optimal only under symmetric estimates.

### 18. Empirical audit

What should be plotted to inspect the divisor error theorem?

**Solution.** Plot the normalized remainder $[\sum_{n\le x}\tau(n)-x\log x-(2\gamma-1)x]/\sqrt{x}$ using exact prefix sums and a documented approximation for $\gamma$. A bounded-looking finite plot is diagnostic, not proof of the $\mathcal{O}(\sqrt{x})$ statement.

## Project: summatory-function laboratory

Implement exact prefix sums for $\tau$, $\sigma$, $\varphi$, and $\mu$ up to at least $10^{6}$ without new dependencies. Verify divisor-switch and Möbius identities at every input, compare direct and hyperbola algorithms, and graph text-accessible tables of normalized remainders against proved scales. Record integer overflow limits, algorithmic complexity, and why the finite data cannot establish an asymptotic or the best possible error exponent.

## Chapter summary

Summatory functions convert irregular arithmetic data into geometric lattice counts. Divisor switching is exact, the hyperbola method controls convolution regions, and partial summation transfers estimates between weights. Average orders for $\tau$ and $\varphi$ emerge only after floors, Euler products, tails, and error constants are handled explicitly.
## 18. Integer rectangles make the hyperbola split exact

The geometry behind a split must be settled before an approximation is made. Let $x\ge1$ be real and choose positive integers $U,V$ such that
\[
UV\le x<(U+1)(V+1).
\]
Every positive integer pair $(a,b)$ satisfying $ab\le x$ lies in at least one of the strips $a\le U$ and $b\le V$. Otherwise $a\ge U+1$ and $b\ge V+1$ would force $ab>x$. The intersection of the strips is the whole rectangle $1\le a\le U$, $1\le b\le V$: its largest product is $UV\le x$. These are two separate uses of the hypotheses. Covering the region does not by itself justify subtracting an entire rectangle.

For arbitrary complex arithmetic functions $f,g$, put $F(t)=\sum_{a\le t}f(a)$ and $G(t)=\sum_{b\le t}g(b)$. There are only finitely many pairs in question, so weights of either sign cause no convergence issue. Sum the first strip by fixing $a$, the second by fixing $b$, and subtract the intersection:
\[
\sum_{n\le x}(f*g)(n)
=\sum_{a\le U}f(a)G(x/a)+\sum_{b\le V}g(b)F(x/b)-F(U)G(V).
\]
The last term factors because every pair in the rectangle is present. This proves the integer-cut version without asking $UV=x$.

The real-cut version in Section 11 is also valid: if $uv=x$, a pair outside both real strips has product greater than $x$, and the common integer rectangle lies inside. Choosing $u=v=\sqrt{x}$ makes its integer side lengths $y=\lfloor\sqrt{x}\rfloor$. Equivalently choose $U=V=y$ in the integer version: $y^2\le x<(y+1)^2$. The equality $y^2=x$ is unnecessary. This is exactly where confusing a real boundary with its integer cutoff can lose lattice points.

At $x=10$, the asymmetric cut $U=2,V=3$ is valid because $6\le10<12$. For $f=g=1$, the first strip has $10+5=15$ points, the second has $10+5+3=18$, and the overlap has six. The answer is $27$. In contrast $U=V=2$ misses $(3,3)$: the purported answer $15+15-4=26$ is wrong. A drawing can suggest the missing square; the two inequalities identify it exactly.

A useful alternative groups equal quotients. For integers $n\ge1$ and $l\le n$, let $q=\lfloor n/l\rfloor$ and $r=\lfloor n/q\rfloor$. Then $\lfloor n/d\rfloor=q$ throughout $l\le d\le r$. Any larger $d$ has smaller quotient. Thus an unweighted floor sum contributes $q(r-l+1)$ from the block, while a weighted one contributes $q\sum_{d=l}^r f(d)$. Advance to $r+1$. There are at most $2\lfloor\sqrt n\rfloor$ distinct quotient values: small indices give at most $\sqrt n$ blocks, and large indices give quotients at most $\sqrt n$. This is another exact acceleration, requiring no smoothness assumption on $f$.

## 19. Where the divisor error actually comes from

Write $D(x)=\sum_{n\le x}\tau(n)$ and $y=\lfloor\sqrt{x}\rfloor$. Define
\[
E(x,y)=\sum_{d=1}^y\bigl(\lfloor x/d\rfloor-x/d\bigr).
\]
Every summand lies in $(-1,0]$, so $-y<E(x,y)\le0$. The exact identity is
\[
D(x)=2xH_y-y^2+2E(x,y).
\]
This representation keeps a signed floor error separate from the harmonic approximation. An estimate for one does not improve the other automatically.

Here is enough justification for the harmonic constant and remainder. The sequence $H_m-\log m$ decreases to a finite limit $\gamma$, by comparing $1/t$ with its upper and lower step sums. Its consecutive difference is
\[
\log(1+1/m)-1/(m+1)=1/(2m^2)+O(m^{-3}).
\]
The expansion follows from Taylor's formula on $0\le1/m\le1$, with a bounded third-order remainder. Summing these differences from $m=y$ to infinity, and comparing the sums of $m^{-2}$ and $m^{-3}$ with integrals, gives
\[
H_y-\log y-\gamma=1/(2y)+O(y^{-2}).
\]
The definition of $\gamma$ and the tail estimate are distinct steps. Replacing the entire expression by an unnamed bounded constant would erase the desired linear coefficient.

To see the effect of rounding explicitly, set $r=\sqrt{x}-y$, so $0\le r<1$. For $x\ge4$, Taylor's formula for $\log(1-r/\sqrt{x})$ gives
\[
2x\log y=x\log x-2r\sqrt{x}+O(1),
\qquad
-y^2=-x+2r\sqrt{x}-r^2.
\]
The potentially large rounding terms cancel. The remaining harmonic correction $x/y$ is $O(\sqrt{x})$, its next error $x/y^2$ is $O(1)$, and $2E$ is $O(\sqrt{x})$. Hence the total error is $O(\sqrt{x})$. The finitely many smaller $x$ can be included by enlarging the constant.

This proof gives a budget rather than a prediction of random error. The bound $|E|<y$ allows coherent signs; it does not assume fractional parts cancel. A finite experiment might show much smaller fluctuations, but improving the theorem requires new control of those fluctuations. Even knowing the harmonic expansion to ten more terms leaves the same uncontrolled floor sum.

The natural normalized diagnostic is
\[
R_D(x)=\frac{D(x)-x\log x-(2\gamma-1)x}{\sqrt{x}}.
\]
The theorem bounds this for sufficiently large $x$, with one fixed constant. It does not say the ratio converges or that its maximum on a finite grid is the best constant. Changing the approximation to $\gamma$ by $\delta$ shifts this ratio by $-2\delta\sqrt{x}$, so the numerical constant and its precision belong in a reproducible account.

## 20. Weighted switches and a visible tail ledger

Let $T(m)=m(m+1)/2$ for an integer $m\ge0$, and write $\Sigma(n)=\sum_{k\le n}\sigma(k)$, $\Phi(n)=\sum_{k\le n}\varphi(k)$ and $M(n)=\sum_{k\le n}\mu(k)$. The same rectangle proof, with $y=\lfloor\sqrt n\rfloor$, gives three useful exact formulas:
\[
\Sigma(n)=\sum_{d\le y}\bigl[d\lfloor n/d\rfloor+T(\lfloor n/d\rfloor)\bigr]-yT(y),
\]
\[
\Phi(n)=\sum_{d\le y}\mu(d)T(\lfloor n/d\rfloor)
+\sum_{m\le y}mM(\lfloor n/m\rfloor)-M(y)T(y),
\]
\[
1=\sum_{d\le y}\mu(d)\lfloor n/d\rfloor
+\sum_{m\le y}M(\lfloor n/m\rfloor)-yM(y).
\]
Use respectively $\sigma=\mathrm{id}*1$, $\varphi=\mu*\mathrm{id}$ and $\mu*1=\varepsilon$. In the last formula the summatory function of $\varepsilon$ is one for every $n\ge1$. The overlap weights explain all three subtraction terms; they cannot be borrowed indiscriminately from the unweighted case.

For the totient estimate, put $z=\lfloor x/d\rfloor$. Since $|z-x/d|<1$,
\[
T(z)=x^2/(2d^2)+O(x/d)+O(1)
\]
with absolute constants for $1\le d\le x$. Multiplication by $|\mu(d)|\le1$ and summation cost $O(xH_{\lfloor x\rfloor})+O(x)$. Extending $\sum_{d\le x}\mu(d)/d^2$ to infinity costs at most $x^2/2$ times $\sum_{d>x}d^{-2}$, which is $O(x)$. All errors are now expressed in $x$ before combination.

One may leave the constant as $1/(2\zeta(2))$ until the evaluation $\zeta(2)=\pi^2/6$ is available. The coefficient identity $\sum\mu(d)d^{-2}=1/\zeta(2)$ uses absolute convergence at exponent two, not a statement about cancellation of $\mu$. The same absolute-convergence input supplies the squarefree constant. These arguments require neither the prime number theorem nor a bound $M(x)=O(\sqrt x)$.

For $\Sigma$, sum the triangular block first, obtaining $\zeta(2)x^2/2+O(x\log x)$. The apparently similar direct replacement in $\sum d\lfloor x/d\rfloor$ has error bounded by $\sum_{d\le x}d=O(x^2)$ and loses the leading constant. The difference is the size of the coefficient multiplying each discarded fractional part.

The proven scales therefore suggest $R_\Sigma(n)=[\Sigma(n)-\pi^2n^2/12]/(n\log n)$ and $R_\Phi(n)=[\Phi(n)-3n^2/\pi^2]/(n\log n)$ for $n\ge2$. There is no counterpart proved here giving a square-root remainder for $M$. The elementary bound $|M(n)|\le n$ does justify plotting $M(n)/n$, explicitly as a coarse bounded diagnostic. A graph should distinguish this bound from stronger conjectural cancellation.

## 21. Partial summation with its endpoints and constant

The exact partial-summation identity can be proved without differentiating a step function. For $x\ge1$ and continuously differentiable $b$ on $[1,x]$, write
\[
b(k)=b(x)-\int_k^x b'(t)\,dt.
\]
Multiply by $a_k$, sum over $1\le k\le x$, and interchange the finite sum and integral. At a noninteger $t$, exactly the terms $k\le t$ appear, giving $A(t)=\sum_{k\le t}a_k$. Values at integer endpoints do not affect the integral. Consequently
\[
\sum_{k\le x}a_kb(k)=A(x)b(x)-\int_1^x A(t)b'(t)\,dt.
\]
The formula includes $a_1b(1)$: at $x=1$ the integral is zero. Replacing $A(x)$ by $A(x-1)$ would lose the last jump at an integer $x$.

Suppose now $A(t)=ct+R(t)$ for $t\ge1$, where $R(t)=O(t^\theta)$ as $t\to\infty$ and $\theta<1$. With $b(t)=1/t$,
\[
\sum_{k\le x}a_k/k
=c\log x+c+R(x)/x+\int_1^x R(t)t^{-2}\,dt.
\]
The error integral converges absolutely at infinity, since $t^{\theta-2}$ is integrable. Define
\[
C=c+\int_1^\infty R(t)t^{-2}\,dt.
\]
Then the remaining error is exactly $R(x)/x-\int_x^\infty R(t)t^{-2}\,dt$, which is $O(x^{\theta-1})$. This identifies the formerly unspecified constant and explains why it depends on the whole initial segment, not only on $c$.

At $\theta=1$ the integral bound becomes logarithmic; this particular constant argument fails. A statement $R(t)=o(t)$ alone can give $o(\log x)$ after integration, but does not necessarily give a convergent constant. For example $R(t)$ of size $t/\log t$ produces a $\log\log x$ contribution beyond a fixed starting point. Error transfer must retain the integrability condition.

For an elementary check take $a_k=1$, so $R(t)=\lfloor t\rfloor-t$ is bounded. The conclusion is $H_n=\log n+C+O(1/n)$, and the definition of $\gamma$ identifies $C=\gamma$. In this example the rougher partial-summation argument supplies the first harmonic error scale; the more precise calculation in Section 19 supplies its next coefficient. The methods cooperate rather than replace one another.

## 22. Positive comparison functions and exceptional mass

Relative asymptotics require a denominator that is nonzero on the stated tail. For normal order in Section 16, eventual positivity gives a definite relative tolerance $\varepsilon g(n)$. Functions such as $\log\log n$ need an explicit starting range: it is positive for integers $n\ge3$, while no limit statement depends on the first two inputs. The fact that a comparison is eventually positive does not permit dividing by it at every small input.

A sparse set can carry a summatory main term while almost every individual value is far from that main scale. Define $f(n)=n$ at perfect squares and $f(n)=0$ elsewhere. If $m=\lfloor\sqrt{x}\rfloor$, then
\[
\sum_{n\le x}f(n)=\sum_{k\le m}k^2=m(m+1)(2m+1)/6\sim x^{3/2}/3.
\]
On the other hand, integral comparison gives $\sum_{n\le x}\tfrac12\sqrt n\sim x^{3/2}/3$. Thus $\tfrac12\sqrt n$ is an average order under the summatory definition. For any $0<\varepsilon<1$, every nonsquare violates relative approximation to it, and nonsquares have density one. It is not a normal order.

This example explains why a mean graph and a histogram answer different questions. A large exceptional contribution can dominate the first, whereas density-one behavior concerns how many inputs violate a relative bound. Neither the prime subsequence nor selected smooth numbers constitute uniform sampling of all positive integers. The measure or counting convention must be stated before translating data into a typical-value claim.

## 23. Why divisor events verify every prefix

A floor sum can be checked at every input without recomputing a million long sums. For a fixed positive $d$, the function $\lfloor n/d\rfloor$ increases by one exactly at the multiples of $d$. Therefore the difference between its values at $n$ and $n-1$ is the indicator of $d\mid n$. If $W_f(n)=\sum_{d\le n}f(d)\lfloor n/d\rfloor$, this gives
\[
W_f(n)-W_f(n-1)=\sum_{d\mid n}f(d).
\]
Both sides start at zero when $n=0$. Checking the event coefficient at every positive input, then accumulating, verifies the whole switched identity, not merely selected endpoints.

The triangular version has a different event weight. Since $T(m)-T(m-1)=m$, the difference of $\sum_d\mu(d)T(\lfloor n/d\rfloor)$ at $n$ is $\sum_{d\mid n}\mu(d)(n/d)$. This is $\varphi(n)$ by inversion. The difference of $\sum_d\varphi(d)\lfloor n/d\rfloor$ is $n$, and that of $\sum_d\mu(d)\lfloor n/d\rfloor$ is $\varepsilon(n)$. These three independently computed divisor convolutions provide a practical full-range audit.

Independence matters. Storing a prefix and comparing it with a second sum of the same stored entries checks accumulation, but cannot expose a wrong arithmetic function. A separate prime-factor sieve for $\varphi,\mu$ can be checked against the convolution events. For $\tau,\sigma$, enumerating unordered factor pairs supplies another construction: an off-diagonal pair $(a,b)$ with $a<b$ contributes two divisors and divisor-weight $a+b$ at $ab$; a diagonal contributes one divisor and weight $a$. Comparing these shells with an ordinary divisor sieve checks every coefficient before any asymptotic normalization is used.

## 24. Balancing asymmetric errors without changing the identity

Suppose the two strips give an error ledger bounded by $AU^r+BV^s$, where $A,B,r,s$ are fixed positive constants. Such a ledger must first be derived from estimates for the actual weighted partial sums; it does not follow just from the shape of the hyperbola. Once established, the split can be chosen to balance those two errors.

For any integer $1\le U\le\lfloor x\rfloor$, set $V=\lfloor x/U\rfloor$. Then $UV\le x$ and $U(V+1)>x$, hence $(U+1)(V+1)>x$. Thus the exact rectangle identity is available. Moreover $V\le x/U$, so the stated error is at most
\[
AU^r+Bx^sU^{-s}.
\]
Balancing the sizes gives $U$ of order $x^{s/(r+s)}$, with the constant factor $(B/A)^{1/(r+s)}$. Choose a neighboring positive integer; for sufficiently large $x$ this lies in the permitted range. Rounding changes the bound only by a fixed factor, and the resulting error has order $x^{rs/(r+s)}$. This is an order-of-magnitude optimization; differentiating the two-term bound would adjust its optimal constant factor.

For example an established bound $O(U)+O(V^2)$ suggests $U$ of size $x^{2/3}$ and $V$ of size $x^{1/3}$, giving $O(x^{2/3})$. The symmetric cut would give only $O(x)$ from its second term. One must not apply this choice to the divisor estimate without deriving such an asymmetric ledger for that problem. The familiar symmetric floor proof has different errors.

Error and workload are also different objectives. If evaluating each strip term costs the same, the number of terms is about $U+V$, smallest near a symmetric split. At $x=10^6$, the integer cuts $U=10^4,V=100$ are geometrically valid, but use $10100$ strip terms instead of the symmetric $2000$. Paying that extra work might be worthwhile for a better proven error; it is not automatically a faster algorithm. If one partial sum is expensive and the other cheap, a different weighted cost balance applies.

Finally the constants may depend on external parameters. If $A=A(q)$ or the original estimates hold only after $x_0(q)$, balancing exponents does not create a uniform theorem in $q$. Carry the parameter dependence through the optimization, and check that both strip estimates are valid on the chosen ranges. An optimized algebraic expression cannot repair a missing domain hypothesis.

## 25. Reciprocal divisor weights transfer the whole error

The divisor theorem also determines a weighted sum whose leading term is quadratic in $\log x$. Put $c=2\gamma-1$ and $E(t)=D(t)-t\log t-ct$, so the established estimate is $E(t)=O(\sqrt t)$. Exact partial summation gives
\[
\sum_{n\le x}\frac{\tau(n)}n
=\frac{D(x)}x+\int_1^x\frac{D(t)}{t^2}\,dt.
\]
Substituting the main terms, with $\log1=0$, yields
\[
\frac12(\log x)^2+(c+1)\log x+c
+\frac{E(x)}x+\int_1^x\frac{E(t)}{t^2}\,dt.
\]
The integral of $E(t)t^{-2}$ converges absolutely, because it is bounded by a constant times $t^{-3/2}$ on the tail. Therefore
\[
\sum_{n\le x}\frac{\tau(n)}n
=\frac12(\log x)^2+2\gamma\log x+C_D+O(x^{-1/2}),
\qquad
C_D=c+\int_1^\infty E(t)t^{-2}\,dt.
\]
The error consists of $E(x)/x$ and the omitted integral tail, each $O(x^{-1/2})$. No differentiation of an $O$ term has been used. A bound on a function does not generally give a bound on its derivative, so that shortcut would be unjustified.

The coefficient $2\gamma$ contains two contributions: the linear coefficient $c$ in $D(t)$ and the boundary term $\log x$ from $D(x)/x$. Dropping the boundary term would leave the wrong logarithmic coefficient. The finite constant also retains information about small inputs through the integral. The leading summatory term alone cannot determine it.

There is an independent exact identity behind this transfer. Since $\tau=1*1$,
\[
\sum_{n\le x}\frac{\tau(n)}n
=\sum_{ab\le x}\frac1{ab}
=\sum_{a\le x}\frac1a H_{\lfloor x/a\rfloor}.
\]
At six the direct value is $1+1+2/3+3/4+2/5+4/6=269/60$. The switched expression is $H_6+\tfrac12H_3+\tfrac13H_2+\tfrac14+\tfrac15+\tfrac16$, the same rational number. These exact expressions clarify which summation region is being weighted before an asymptotic is inserted.

The transfer illustrates the division of labor between methods. Convolution supplies the exact region, the hyperbola argument controls its unweighted error, and partial summation transports that control to a new weight. A weighted numerical plot should subtract both logarithmic terms; otherwise its apparent drift may simply be the omitted boundary contribution rather than a failure of the remainder estimate.

## Exercises: exact cuts and different meanings of average

### NTP-15-E19. A rectangle that misses one point

At $n=10$, apply the general hyperbola formula with integer cuts $(U,V)=(2,3)$. Then explain exactly why $(2,2)$ gives a wrong answer even though $UV\le n$.

### NTP-15-E20. A mean carried by squares

For $f(n)=n$ on squares and zero elsewhere, prove that $g(n)=\tfrac12\sqrt n$ is an average order in the summatory sense and is not a normal order under the relative convention.

## Solutions: exact cuts and different meanings of average

### NTP-15-E19. A rectangle that misses one point — solution

The valid cut gives $(10+5)+(10+5+3)-2\cdot3=27$, since $6\le10<12$. With $(2,2)$, the strips give $(10+5)+(10+5)-4=26$. The pair $(3,3)$ has product nine and lies outside both strips; all other positive pairs under ten meet a strip. The missing strict upper condition is $10<(2+1)(2+1)$, which fails.

### NTP-15-E20. A mean carried by squares — solution

Put $m=\lfloor\sqrt x\rfloor$. The exact square-sum formula gives $\sum_{n\le x}f(n)=m(m+1)(2m+1)/6\sim x^{3/2}/3$. Bounds by integrals for increasing $\sqrt t$ give $\sum_{n\le x}\sqrt n\sim 2x^{3/2}/3$, so the summatory ratio to $\sum g$ tends to one. For nonsquares, $|f(n)-g(n)|=g(n)$. Taking $\varepsilon=1/2$, the violating set includes every nonsquare. Its proportion tends to one because there are only $\lfloor\sqrt x\rfloor$ squares. Normal order would require proportion zero.

## Solutions: summatory-function laboratory reference

This reference retains the original lower range $N=10^6$ and all four functions. The listing below supplies an implementation; it has not been executed during authoring. A documented run of the exact supplied listing and its actual output is required before treating the implementation requirement as reproduced. No million-input totals, observed plots or runtimes are asserted here.

The first construction visits every divisor $d$ and its multiples to form $\tau$ and $\sigma$. A separate prime sieve starts $\varphi(n)=n$ and $\mu(n)=1$; for each detected prime $p$, it multiplies the totient contribution by $1-1/p$, changes the Möbius sign on multiples of $p$, and zeroes multiples of $p^2$. The test $\varphi(p)=p$ detects a prime because an earlier prime divisor would already have decreased a composite entry. Values at zero are unused; $\varphi(1)=\mu(1)=1$.

The verifier builds unordered factor-pair shells independently of the divisor sieve. It checks both coefficient and accumulated switched sums at every $1\le n\le N$. Three other arrays accumulate $\mu*1$, $\varphi*1$ and $\mu*\mathrm{id}$ by a separate divisor-event sweep and verify respectively $\varepsilon$, $\mathrm{id}$ and $\varphi$ at every input, together with their prefixes. The event proof in Section 23 identifies these prefixes with the floor and triangular-floor sums. Thus the program does not replace the every-input obligation by sparse checkpoint assertions.

After those arrays are discarded, four exact prefix arrays are constructed. At twelve declared checkpoints from one through one million, the listing also recomputes the switched expressions directly in $n$ divisions and with the symmetric hyperbola identities in $\lfloor\sqrt n\rfloor$ divisions. The expected four-tuple is $(D(n),\Sigma(n),\Phi(n),1)$; $M$ supplies the signed partial sums needed by the latter formulas. The operation counts are loop/quotient counts, not fabricated wall-clock measurements.

A small exact table can be checked without executing anything:

| $n$ | $D(n)$ | $\Sigma(n)$ | $\Phi(n)$ | $M(n)$ |
|---|---:|---:|---:|---:|
| 1 | 1 | 1 | 1 | 1 |
| 2 | 3 | 4 | 2 | 0 |
| 6 | 14 | 33 | 12 | $-1$ |
| 10 | 27 | 87 | 32 | $-1$ |
| 12 | 35 | 127 | 46 | $-2$ |

For example, $\sigma(11)=12$, $\sigma(12)=28$, $\varphi(11)=10$, $\varphi(12)=4$, $\mu(11)=-1$, $\mu(12)=0$ extend the row at ten to the row at twelve. These goldens supplement the full required run.

The output contains exact checkpoint integers and sampled normalized data, together with an SVG string drawing the same samples in four labelled panels. The table records each sampled $n$, its exact four prefixes and all four approximate ratios, so every plotted point has a text alternative. The grid contains $2,\ldots,12$ and every multiple of $1000$ through $N$; connecting these points does not show unsampled oscillations. Floating calculations use the displayed $\gamma$ approximation and the standard-library value of $\pi$. They are visual diagnostics, never equality tests. The $M/n$ panel uses only the proved trivial bound.

On a platform with four-byte unsigned I, eight-byte Q/q and one-byte b arrays, the retained arithmetic arrays use $17(N+1)$ bytes. The shell phase adds $12(N+1)$, the convolution phase adds $24(N+1)$ after shells are deleted, and the prefix phase adds $32(N+1)$ after the convolution arrays are deleted. The largest retained compact numeric payload is therefore $49(N+1)$ bytes, plus constant-size construction temporaries, allocation slack, Python objects, transient scalar integers and a bounded report/graph. This is a representation budget, not measured resident memory. The listing rejects different element widths rather than silently changing the contract.

The loops use $O(N\log N)$ arithmetic operations: $\sum_{d\le N}\lfloor N/d\rfloor\le N(1+\log N)$ bounds a divisor sweep, and unordered pairs take about half that count. The prime sieve is no more expensive under this coarse bound. Every temporary product or total is a Python integer. Stored $\tau,\varphi$ are at most $N$; stored $\sigma(n)\le n(n+1)/2$; the coarse bound $\sum_{n\le N}\sigma(n)\le N(N+1)(N+2)/6$ is below $2^{64}$ at the fixed cap. Signed convolution arrays are bounded in magnitude by $\sigma(n)$ or $\tau(n)$; $|M(n)|\le N$. A 32-bit accumulator for $\Sigma(N)$ cannot suffice: even $\sum_{n\le N}n=N(N+1)/2$ already exceeds $2^{32}-1$.

### Changed-case comparison

The reference also records the invalid cut $(2,2)$ at ten: it gives $26$ rather than $27$. This additional teaching case tests the upper cover inequality; it is not a replacement for the original project. Deliberately omitting diagonal correction in the factor-pair verifier would double-count squares and be detected already at one and four. Changing a Möbius sign would break $\mu*1=\varepsilon$ at a multiple of the changed index, even if selected final totals happened to agree.

### Descriptive rubric for the original laboratory

A complete submission implements all four functions and exact prefixes through at least one million; it verifies every-input switched and Möbius identities by explained invariants and independent constructions. It supplies direct/hyperbola comparisons with explicit workloads, exact accessible table values for its actual plotted samples, and a normalization justified by theorems in the chapter. It identifies integer capacities, memory and arithmetic-operation scope, distinguishes expected goldens from observed results, and explains why no finite graph proves an asymptotic or optimal exponent. A smaller range, one unchecked function, a plot without values, a self-comparison of the same array, or an unproved square-root bound for $M$ leaves a named duty incomplete. The supplied implementation remains unexecuted in this reference; an actual full-range run must be recorded separately.

## Solutions: summatory laboratory reference program

Python 3.9 or later; standard library only. The fixed-cap listing reads no input, performs no file, network or process I/O, and writes one compact sorted-key JSON report to stdout when invoked as a script. It is unexecuted here. Run the literal listing as a script to reproduce the report; it includes its bounded graph as data rather than writing another file.

```python
from array import array
from math import isqrt, log, pi, sqrt
import json

N = 1_000_000
GAMMA = 0.5772156649015329
CHECKPOINTS = (1, 2, 3, 4, 6, 10, 12, 100, 1000, 10000, 100000, N)

def need(ok, label):
    if not ok:
        raise RuntimeError(label)

def tri(n):
    return n * (n + 1) // 2

def values():
    need(array("I").itemsize == 4 and array("Q").itemsize == 8
         and array("q").itemsize == 8 and array("b").itemsize == 1,
         "unsupported array element widths")
    tau = array("I", [0]) * (N + 1)
    sigma = array("Q", [0]) * (N + 1)
    phi = array("I", range(N + 1))
    mu = array("b", [1]) * (N + 1)
    mu[0] = 0
    divisor_updates = 0
    for d in range(1, N + 1):
        for n in range(d, N + 1, d):
            tau[n] += 1
            sigma[n] += d
            divisor_updates += 1
    prime_updates = 0
    square_updates = 0
    for p in range(2, N + 1):
        if phi[p] == p:
            for n in range(p, N + 1, p):
                phi[n] -= phi[n] // p
                mu[n] = -mu[n]
                prime_updates += 1
            for n in range(p * p, N + 1, p * p):
                mu[n] = 0
                square_updates += 1
    return tau, sigma, phi, mu, {
        "divisor_updates": divisor_updates,
        "prime_updates": prime_updates, "square_updates": square_updates}

def verify_shells(tau, sigma):
    t = array("I", [0]) * (N + 1)
    s = array("Q", [0]) * (N + 1)
    pairs = 0
    for a in range(1, isqrt(N) + 1):
        for b in range(a, N // a + 1):
            n = a * b
            t[n] += 1 if a == b else 2
            s[n] += a if a == b else a + b
            pairs += 1
    direct_t = direct_s = shell_t = shell_s = 0
    for n in range(1, N + 1):
        need(t[n] == tau[n] and s[n] == sigma[n],
             "factor-pair coefficient mismatch at " + str(n))
        direct_t += tau[n]
        direct_s += sigma[n]
        shell_t += t[n]
        shell_s += s[n]
        need((direct_t, direct_s) == (shell_t, shell_s),
             "divisor-switch prefix mismatch at " + str(n))
    return {"unordered_pairs": pairs, "inputs_checked": N}

def verify_convolutions(phi, mu):
    unit = array("q", [0]) * (N + 1)
    totient = array("Q", [0]) * (N + 1)
    inversion = array("q", [0]) * (N + 1)
    events = 0
    for d in range(1, N + 1):
        for n in range(d, N + 1, d):
            unit[n] += mu[d]
            totient[n] += phi[d]
            inversion[n] += mu[d] * (n // d)
            events += 1
    u = t = v = direct_phi = 0
    for n in range(1, N + 1):
        need(unit[n] == int(n == 1), "mu*1 mismatch at " + str(n))
        need(totient[n] == n, "phi*1 mismatch at " + str(n))
        need(inversion[n] == phi[n], "mu*id mismatch at " + str(n))
        u += unit[n]
        t += totient[n]
        v += inversion[n]
        direct_phi += phi[n]
        need(u == 1 and t == tri(n) and v == direct_phi,
             "switched Mobius prefix mismatch at " + str(n))
    return {"divisor_events": events, "inputs_checked": N}

def prefixes(tau, sigma, phi, mu):
    pt = array("Q", [0]) * (N + 1)
    ps = array("Q", [0]) * (N + 1)
    pp = array("Q", [0]) * (N + 1)
    pm = array("q", [0]) * (N + 1)
    for n in range(1, N + 1):
        pt[n] = pt[n - 1] + tau[n]
        ps[n] = ps[n - 1] + sigma[n]
        pp[n] = pp[n - 1] + phi[n]
        pm[n] = pm[n - 1] + mu[n]
    return pt, ps, pp, pm

def direct_switch(n, mu):
    dsum = ssum = phisum = musum = 0
    for d in range(1, n + 1):
        q = n // d
        dsum += q
        ssum += d * q
        phisum += mu[d] * tri(q)
        musum += mu[d] * q
    return dsum, ssum, phisum, musum

def hyperbola_switch(n, mu, pm):
    y = isqrt(n)
    dsum = ssum = phisum = musum = 0
    for d in range(1, y + 1):
        q = n // d
        dsum += 2 * q
        ssum += d * q + tri(q)
        phisum += mu[d] * tri(q) + d * pm[q]
        musum += mu[d] * q + pm[q]
    return (dsum - y * y, ssum - y * tri(y),
            phisum - pm[y] * tri(y), musum - y * pm[y])

def normalized(n, pt, ps, pp, pm):
    return {
        "D": (pt[n] - n * log(n) - (2 * GAMMA - 1) * n) / sqrt(n),
        "Sigma": (ps[n] - pi * pi * n * n / 12) / (n * log(n)),
        "Phi": (pp[n] - 3 * n * n / (pi * pi)) / (n * log(n)),
        "M": pm[n] / n}

def svg(rows):
    parts = ['<svg xmlns="http://www.w3.org/2000/svg" width="900" height="540" '
             'viewBox="0 0 900 540" role="img">',
             '<title>Sampled summatory remainders</title>',
             '<desc>Four independently scaled panels. Exact sample prefixes and '
             'approximate ratios are in plot_data. Lines join sampled inputs only.</desc>']
    for j, key in enumerate(("D", "Sigma", "Phi", "M")):
        top = 25 + 130 * j
        scale = max(1e-12, max(abs(row["normalized"][key]) for row in rows))
        points = " ".join(
            f'{50 + 800 * (row["n"] - 2) / (N - 2):.3f},'
            f'{top + 55 - 45 * row["normalized"][key] / scale:.3f}'
            for row in rows)
        parts.append(f'<text x="50" y="{top}">{key}: symmetric scale '
                     f'{scale:.8g}; n=2 to {N}</text>')
        parts.append(f'<line x1="50" y1="{top + 55}" x2="850" '
                     f'y2="{top + 55}" stroke="gray"/>')
        parts.append(f'<polyline points="{points}" fill="none" stroke="black"/>')
    parts.append("</svg>")
    return "".join(parts)

def run():
    tau, sigma, phi, mu, counts = values()
    counts["shells"] = verify_shells(tau, sigma)
    counts["convolutions"] = verify_convolutions(phi, mu)
    pt, ps, pp, pm = prefixes(tau, sigma, phi, mu)
    goldens = {1: (1, 1, 1, 1), 2: (3, 4, 2, 0),
               6: (14, 33, 12, -1), 10: (27, 87, 32, -1),
               12: (35, 127, 46, -2)}
    for n, expected in goldens.items():
        need((pt[n], ps[n], pp[n], pm[n]) == expected,
             "hand-derived golden mismatch at " + str(n))
    comparisons = []
    for n in CHECKPOINTS:
        expected = (pt[n], ps[n], pp[n], 1)
        direct = direct_switch(n, mu)
        fast = hyperbola_switch(n, mu, pm)
        need(direct == expected and fast == expected,
             "direct/hyperbola mismatch at " + str(n))
        comparisons.append({"n": n, "exact_switches": list(expected),
                            "direct_quotient_count": n,
                            "hyperbola_quotient_count": isqrt(n),
                            "prefixes": [pt[n], ps[n], pp[n], pm[n]]})
    wrong_cut = 2 * sum(10 // d for d in range(1, 3)) - 4
    need(wrong_cut == 26 and pt[10] == 27, "invalid-cut fixture mismatch")
    grid = sorted(set(range(2, 13)) | set(range(1000, N + 1, 1000)))
    plot_data = [{"n": n, "prefixes": [pt[n], ps[n], pp[n], pm[n]],
                  "normalized": normalized(n, pt, ps, pp, pm)} for n in grid]
    return {
        "N": N, "verified_interval": [1, N],
        "checks": counts, "comparisons": comparisons,
        "hand_derived_goldens": {str(n): list(v) for n, v in goldens.items()},
        "invalid_cut_10": {"cuts": [2, 2], "wrong": wrong_cut, "correct": pt[10]},
        "plot_constants": {"gamma_decimal": "0.5772156649015329",
                           "pi_source": "Python math.pi"},
        "normalizations": {
            "D": "(D-n*log(n)-(2*gamma-1)*n)/sqrt(n)",
            "Sigma": "(Sigma-pi^2*n^2/12)/(n*log(n))",
            "Phi": "(Phi-3*n^2/pi^2)/(n*log(n))",
            "M": "M/n; only the trivial bound is invoked"},
        "plot_data": plot_data, "svg": svg(plot_data),
        "limits": "Exact integer identities; approximate sampled visualization. "
                  "No finite output proves an asymptotic or optimal exponent."}

if __name__ == "__main__":
    print(json.dumps(run(), sort_keys=True, separators=(",", ":"),
                     ensure_ascii=True, allow_nan=False))
```

## References: the evaluated square-reciprocal constant

The Basel evaluation used to rewrite the coefficients as multiples of $\pi^2$ is an explicit import: Leonhard Euler, [On the sums of series of reciprocals](https://arxiv.org/abs/math/0506415), translation of the 1735 paper E41. The chapter proves the error estimates with constants in $\zeta(2)$ independently of this evaluation; Chapter 17 supplies the absolute-convergence Euler-product foundation.
