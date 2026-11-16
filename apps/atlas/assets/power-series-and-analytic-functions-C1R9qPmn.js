var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: power-series-and-analytic-functions
title: "Power Series and Analytic Functions"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Power Series and Analytic Functions

A power series is simultaneously an infinite series, a function, and a local encoding of coefficients. Inside its radius of convergence it behaves unusually well: convergence is uniform on smaller closed intervals, derivatives and integrals can be taken term by term, and the coefficients are uniquely determined by the resulting function. At the boundary, that discipline stops and each endpoint becomes a separate series problem.

This chapter turns those statements into a proof workflow. It uses numerical-series tests and uniform convergence, then connects the theory to Taylor approximation, differential equations, coefficient identities, and certified computation.

## 1. The radius is the first invariant

A real power series centered at \\(a\\) has the form

\\(\\sum_{n=0}^\\infty c_n(x-a)^n\\).

There is a number \\(R\\in [0,\\infty]\\), the **radius of convergence**, such that the series converges absolutely when \\(|x-a|<R\\) and diverges when \\(|x-a|>R\\). Nothing universal is promised when \\(|x-a|=R\\).

The Cauchy–Hadamard formula is

\\(1/R=\\limsup_{n\\to \\infty}|c_n|^{1/n}\\),

with the conventions \\(1/0=\\infty\\) and \\(1/\\infty=0\\).

Indeed, the root test applied to \\(c_n(x-a)^n\\) produces limiting upper root

\\(|x-a| \\limsup |c_n|^{1/n}=|x-a|/R\\).

It is below one inside the radius and above one outside.

When the coefficient ratio has a limit, the ratio test gives the quicker formula

\\(R=\\lim_{n\\to \\infty}|c_n/c_{n+1}|\\),

provided the usual zero and infinity cases are interpreted carefully.

### Worked examples

**Worked example 1 (infinite radius).**

For \\(\\sum x^n/n!\\), the coefficient ratio is \\((1/n!)/(1/(n+1)!)=n+1\\to \\infty\\), so \\(R=\\infty\\).

**Worked example 2 (zero radius).**

For \\(\\sum n!x^n\\), the ratio is \\(1/(n+1)\\to 0\\), so \\(R=0\\).

**Worked example 3 (unequal endpoint behavior).**

For \\(\\sum x^n/n\\), the ratio tends to 1, so \\(R=1\\). At \\(x=1\\) the harmonic series diverges; at \\(x=-1\\) the alternating harmonic series converges. Equal distance from the center does not force equal endpoint behavior.

## 2. Convergence at one point controls every closer point

Suppose \\(\\sum c_n(x_0-a)^n\\) converges for some \\(x_0\\ne a\\). Its terms are bounded: there is \\(M\\) with

\\(|c_n(x_0-a)^n|\\le M\\).

If \\(|x-a|<|x_0-a|\\), set \\(q=|x-a|/|x_0-a|<1\\). Then

\\(|c_n(x-a)^n|\\le Mq^n\\).

The geometric comparison proves absolute convergence at \\(x\\).

Conversely, if the series diverges at \\(x_1\\), it must diverge at every point farther from the center. Otherwise convergence at a farther point would force convergence at \\(x_1\\) by the argument above.

This radial monotonicity creates the interval of convergence before any formula for \\(R\\) is known.

## 3. Uniform convergence on compact interior intervals

Fix \\(r<R\\). Choose \\(\\rho\\) with \\(r<\\rho<R\\). Since the series converges absolutely at \\(a+\\rho\\), the numerical series

\\[\\sum|c_n|\\rho^n\\]

converges. For every \\(x\\) with \\(|x-a|\\le r\\),

\\(|c_n(x-a)^n|\\le |c_n|r^n\\le |c_n|\\rho^n\\).

The Weierstrass M-test therefore gives uniform and absolute convergence on \\([a-r,a+r]\\).

The phrase **compactly inside the radius** is the safe operating region. On every such interval, the sum is continuous because it is a uniform limit of polynomials. Uniform convergence on the entire open interval \\((a-R,a+R)\\) need not hold.

For the geometric series \\(\\sum x^n\\) on \\((-1,1)\\), the supremum of the individual term \\(|x^N|\\) is 1 for every \\(N\\), already ruling out uniform convergence. The infinite tail \\(x^{N+1}/(1-x)\\) is actually unbounded above as \\(x\\uparrow1\\), so its supremum on the whole interval is \\(+\\infty\\), not 1. On \\([-r,r]\\) with \\(r<1\\), the absolute tail is bounded by \\(r^{N+1}/(1-r)\\) and tends uniformly to zero.

## 4. Termwise integration

Let

\\[f(x)=\\sum_{n=0}^\\infty c_n(x-a)^n\\]

have radius \\(R\\). On any closed interval inside the radius, uniform convergence allows integration term by term:

\\(\\int _a^x f(t)dt=\\sum_{n=0}^\\infty c_n(x-a)^{n+1}/(n+1)\\).

The integrated series has the same radius \\(R\\). Its new coefficients differ from the old ones by factors comparable to \\(1/n\\), whose \\(n\\)th roots tend to one, so Cauchy–Hadamard leaves the radius unchanged.

Starting from

\\(1/(1-x)=\\sum_{n=0}^\\infty x^n\\), \\(|x|<1\\),

integrate from zero to \\(x\\):

\\(-\\log(1-x)=\\sum_{n=1}^\\infty x^n/n\\).

Replacing \\(x\\) by \\(-x\\) gives

\\(\\log(1+x)=\\sum_{n=1}^\\infty(-1)^{n+1}x^n/n\\), \\(|x|<1\\).

Endpoint values require additional justification. The alternating-series theorem handles \\(x=1\\) in the second expansion, but the power-series theorem alone only controls the open interval.

## 5. Termwise differentiation

The formally differentiated series is

\\(\\sum_{n=1}^\\infty n c_n(x-a)^{n-1}\\).

It has the same radius as the original because \\(n^{1/n}\\to 1\\). On every smaller closed interval it converges uniformly. A theorem on differentiating uniform limits—using convergence at the center and uniform convergence of derivatives—then yields

\\[f'(x)=\\sum_{n=1}^\\infty n c_n(x-a)^{n-1}\\]

for \\(|x-a|<R\\).

Repeating proves that a power-series sum is infinitely differentiable inside its radius. Moreover,

\\(f^{k}(a)=k!c_k\\),

so

\\(c_k=f^{k}(a)/k!\\).

The coefficients are not optional coordinates: the function uniquely determines them.

## 6. Analyticity and uniqueness

A function is **analytic near \\(a\\)** if it equals a power series centered at \\(a\\) on some neighborhood. Every power-series sum is analytic throughout its open interval of convergence; the real re-centering proof below establishes the point without importing complex theory.

If two power series agree on an interval around their common center, all coefficients agree. Subtract the series. The resulting function is identically zero, so each derivative at the center is zero; hence each coefficient is zero.

A stronger identity principle holds: if an analytic function on a connected open interval has zeros accumulating at an interior point, it is identically zero. To see the local mechanism, let \\(m\\) be the first nonzero coefficient at an accumulation point. Then

\\[f(x)=(x-a)^m g(x)\\]

with \\(g(a)\\ne 0\\), so continuity keeps \\(g\\) nonzero nearby. The only nearby zero would be \\(a\\), contradicting accumulation. Therefore no first nonzero coefficient exists.

This first proves that \\(f\\) vanishes on a neighborhood of the accumulation point. To propagate the conclusion, let \\(U\\) be the set of points in the connected interval having a neighborhood on which \\(f=0\\). The set \\(U\\) is nonempty and open. It is also closed in the interval: if \\(x_j\\in U\\) and \\(x_j\\to x\\), every derivative vanishes at every \\(x_j\\); continuity of each derivative gives \\(f^{(k)}(x)=0\\) for all \\(k\\), and the analytic expansion at \\(x\\) is therefore zero on a neighborhood. Thus \\(x\\in U\\). Connectedness forces \\(U\\) to be the whole interval.

Smooth functions do not share this rigidity. The function \\(e^{-1/x^2}\\) extended by zero has every derivative zero at the origin but is nonzero nearby.

### Re-centering inside the convergence interval

Let \\(f(x)=\\sum_{n\\ge0}a_n(x-a)^n\\) have radius \\(R>0\\), and choose \\(b\\) with \\(|b-a|<R\\). For \\(|h|<R-|b-a|\\), the binomial formula suggests
\\[
 f(b+h)=\\sum_{k\\ge0}b_kh^k,
 \\qquad b_k=\\sum_{n\\ge k}\\binom nk a_n(b-a)^{n-k}.
\\]
The suggestion needs an absolute-convergence audit. Choose a positive \\(\\rho\\) with \\(|h|\\le\\rho<R-|b-a|\\). Summing the absolute values of the binomial terms gives the finite bound
\\[
 \\sum_{n\\ge0}|a_n|\\sum_{k=0}^n\\binom nk|b-a|^{n-k}\\rho^k
 =\\sum_{n\\ge0}|a_n|(|b-a|+\\rho)^n<\\infty.
\\]
The binomial identity is finite at each index, and the last series is inside the original radius. Absolute convergence of the double family now permits regrouping by powers of \\(h\\). It also proves convergence of each coefficient series, since its absolute value times the positive number \\(\\rho^k\\) is bounded by the displayed total. The bound is uniform for the closed smaller \\(h\\)-interval, so the new sum is a genuine power series there rather than a merely formal substitution.

Its coefficients are the Taylor coefficients at \\(b\\): termwise differentiation of the original series, already justified on compact interior intervals, gives \\(b_k=f^{(k)}(b)/k!\\). Thus analyticity propagates to every interior point using only real series arguments. The guaranteed new radius is at least the original radius minus the distance moved. It is a lower bound, and may be conservative if the function has a continuation beyond the original interval.

For example the geometric function \\(1/(1-x)\\), originally expanded at zero, has at \\(b=1/2\\) the expansion \\(2\\sum_{k\\ge0}(2h)^k\\), with radius one half. At \\(b=-1/2\\), the same rational function has expansion \\((2/3)\\sum_{k\\ge0}(2h/3)^k\\), with radius three halves, although the general lower bound from the original radius guarantees only one half. The exact radius belongs to the new coefficient sequence; a convenient lower bound is not necessarily its sharp value.

The proof does not justify expansion at an original boundary point. There the absolute binomial majorant may be outside the radius for every positive choice of \\(\\rho\\). Endpoint convergence of the original series alone therefore cannot replace the strict interior hypothesis in this argument.

## 7. Algebra of power series

Inside a common radius, power series may be added and multiplied. If

\\(f(x)=\\sum a_n(x-a)^n\\) and \\(g(x)=\\sum b_n(x-a)^n\\),

then

\\(f(x)g(x)=\\sum_{n=0}^\\infty c_n(x-a)^n\\),

where

\\(c_n=\\sum_{k=0}^n a_k b_{n-k}\\).

Absolute convergence inside the radius justifies this **Cauchy product**.

For the geometric series,

\\(1/(1-x)^2=(\\sum x^n)^2=\\sum_{n=0}^\\infty(n+1)x^n\\).

The coefficient \\(n+1\\) counts pairs \\((k,n-k)\\) of nonnegative integers. Differentiating \\(1/(1-x)\\) gives the same identity after an index shift.

Reciprocals and compositions need a convergence argument in addition to formal coefficient algebra. If \\(f(a)\\ne0\\), write \\(f=f(a)(1+u)\\), where the power series of \\(u\\) has constant term zero. Choose a small positive radius \\(\\rho\\) at which the sum of its absolute weighted coefficients is less than some \\(q<1\\). Such a radius exists: the absolute coefficient series converges at a fixed interior radius, and shrinking the radius makes every positive-degree term tend to zero under that summable majorant. The geometric expression
\\[
 \\frac1{f(x)}=\\frac1{f(a)}\\sum_{m\\ge0}(-u(x))^m
\\]
has an absolute coefficient majorant bounded by \\(\\sum_mq^m\\). Cauchy products and absolute regrouping therefore turn it into a convergent power series on that smaller interval. This proves analyticity of the reciprocal, not merely a recursive formula for hypothetical coefficients.

For composition, suppose the outer power series is centered at \\(b\\) with positive radius, and the inner analytic function equals \\(b\\) at \\(a\\). On a sufficiently small radius around \\(a\\), the absolute weighted coefficient sum of the inner difference from \\(b\\) is strictly inside the outer radius. Substitute that sum into the absolute outer coefficient series. Its finite value bounds all the proposed product expansions together, so absolute regrouping gives a convergent power series for the composition. If the inner value does not equal the outer center but is strictly inside its convergence interval, first re-center the outer series using the preceding theorem. These arguments explain exactly why a local analytic reciprocal or composition exists; formal substitution without these strict convergence margins would not establish it.

## 8. Standard analytic functions from initial-value problems

Suppose a power series \\(y=\\sum c_nx^n\\) satisfies \\(y'=y\\) and \\(y(0)=1\\). Comparing coefficients gives

\\((n+1)c_{n+1}=c_n\\), with \\(c_0=1\\).

Hence \\(c_n=1/n!\\), producing

\\(e^x=\\sum x^n/n!\\).

For \\(y''=-y\\), coefficient comparison gives

\\((n+2)(n+1)c_{n+2}=-c_n\\).

Initial conditions \\(y(0)=0,y'(0)=1\\) select the sine series; \\(y(0)=1,y'(0)=0\\) select cosine. The infinite radius follows from the ratio test.

This method has two audits:

1. algebraically derive a coefficient recurrence;
2. prove the resulting series converges and actually satisfies the equation.

A formal recurrence alone creates a candidate, not a solution theorem.

## 9. Binomial series and a parameter

For real \\(\\alpha\\), define generalized coefficients

\\(\\binom{\\alpha}{n}=\\alpha(\\alpha-1)\\ldots(\\alpha-n+1)/n!\\).

The binomial series is

\\((1+x)^\\alpha=\\sum_{n=0}^\\infty\\binom{\\alpha}{n}x^n\\), \\(|x|<1\\).

When \\(\\alpha\\) is a nonnegative integer, the coefficients eventually vanish and the identity is polynomial. Otherwise the radius is 1. One derivation solves the differential equation

\\((1+x)y'=\\alpha y\\), \\(y(0)=1\\)

by coefficient comparison and then invokes uniqueness of the initial-value problem.

For \\(\\alpha=-1\\), this is the geometric series. For \\(\\alpha=1/2\\), it gives a local series for \\(\\sqrt{1+x}\\). Near the boundary, convergence and numerical stability must be examined separately.

## 10. Boundary behavior and Abel's theorem

The radius says nothing automatic at \\(x=a\\pm R\\). Four patterns can occur:

- convergence at both endpoints;
- divergence at both;
- convergence only at the left;
- convergence only at the right.

The series \\(\\sum x^n/n^2\\) converges at both endpoints. The geometric series diverges at both. The series \\(\\sum x^n/n\\) converges only at \\(x=-1\\); replacing \\(x\\) by \\(-x\\) reverses the endpoints.

**Theorem 15.1 (Abel's limit).** supplies an important bridge. For a power series centered at zero with radius \\(0<R<\\infty\\), if \\(\\sum c_nR^n\\) converges, then

\\(\\lim_{x\\uparrow R}\\sum c_nx^n=\\sum c_nR^n\\).

In fact, when \\(0<R<\\infty\\), convergence of the endpoint series gives uniform convergence of \\(\\sum c_nx^n\\) on \\([0,R]\\). Abel summation proves this stronger one-sided statement by using Cauchy control of endpoint tails; it is additional boundary information, not a consequence of the radius alone. The limit formula follows immediately and justifies, for example, letting \\(x\\uparrow 1\\) in the logarithm series once convergence at the endpoint is known.

## 11. Remainders and certified evaluation

On \\(|x-a|\\le r<R\\), choose \\(\\rho\\) with \\(r<\\rho<R\\). If

\\(M_\\rho=\\sum|c_n|\\rho^n\\),

then for \\(|x-a|\\le r\\),

\\(|\\sum_{n=N+1}^\\infty c_n(x-a)^n|\\le \\sum_{n=N+1}^\\infty|c_n|\\rho^n(r/\\rho)^n\\).

Any bound on the coefficient-weighted tail at \\(\\rho\\) yields a uniform error certificate at \\(r\\). When coefficients obey \\(|c_n|\\le M/R^n\\), a geometric bound gives

\\(|tail|\\le M(r/R)^{N+1}/(1-r/R)\\).

Alternating-series bounds may be sharper for a single signed input. Taylor's Lagrange remainder may be sharper when derivative bounds are simple. A computation should compare available certificates rather than assuming the first omitted term controls the error.

### Range reduction

Even an entire series may converge slowly for a large argument. Identities such as

\\[e^x=(e^{x/m})^m\\]

or angle reduction for sine and cosine move evaluation to a smaller input before reconstructing the answer. This trades truncation length against rounding and reconstruction error; the total error requires both analyses.

## 12. Misconceptions and failure boundaries

- **The radius decides endpoint convergence.** Each endpoint is a separate numerical series.
- **Pointwise convergence inside the radius is enough for termwise operations.** Uniform convergence on smaller closed intervals does the work.
- **Every Taylor series represents its smooth function.** Analyticity is a stronger property.
- **A formal coefficient recurrence proves an ODE solution.** Convergence and substitution must be justified.
- **The first omitted term always bounds the tail.** That requires an alternating or remainder theorem.
- **A power series is uniformly convergent on its entire open interval.** The geometric series disproves this.
- **Two analytic functions can agree at infinitely many scattered points and still differ.** They can if the agreement points have no interior accumulation; an interior accumulation forces equality on the connected interval.

## Exercises with complete solutions

### ANA-CH15-E001 — Exercise 1: A factorial radius

Find the radius of \\(\\sum x^n/n!\\).

<details><summary>Hint 1</summary>

Compare consecutive absolute terms for fixed x.

</details>

<details><summary>Hint 2</summary>

The ratio is |x|/(n+1), which tends to zero regardless of the fixed input.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E001 — Solution

The ratio of successive absolute terms is \\(|x|/(n+1)\\to 0\\) for every fixed real \\(x\\). The series converges absolutely everywhere, so \\(R=\\infty\\).

</details>

### ANA-CH15-E002 — Exercise 2: A zero radius

Find the radius of \\(\\sum n!x^n\\).

<details><summary>Hint 1</summary>

For a nonzero x, examine the consecutive-term ratio.

</details>

<details><summary>Hint 2</summary>

The factor (n+1)|x| eventually exceeds one, so terms cannot tend to zero.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E002 — Solution

For \\(x\\ne 0\\), the ratio of successive absolute terms is \\((n+1)|x|\\to \\infty\\), so the terms eventually grow and do not tend to zero. Only \\(x=0\\) converges; hence \\(R=0\\).

</details>

### ANA-CH15-E003 — Exercise 3: Root-test radius

Find the radius of \\(\\sum3^n x^{2n}\\) as a power series in \\(x\\).

<details><summary>Hint 1</summary>

Recognize a geometric series in 3x squared.

</details>

<details><summary>Hint 2</summary>

Translate |3x squared|<1 into the radius in the original variable x.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E003 — Solution

This is geometric with ratio \\(3x^2\\). It converges when \\(3x^2<1\\), or \\(|x|<1/\\sqrt{3}\\), and diverges outside. Thus its radius is \\(1/\\sqrt{3}\\).

</details>

### ANA-CH15-E004 — Exercise 4: Endpoint audit

Find the full interval of convergence of \\(\\sum(x-2)^n/n\\).

<details><summary>Hint 1</summary>

Find the radius about the center 2 first.

</details>

<details><summary>Hint 2</summary>

At the two endpoints substitute x=1 and x=3 to obtain alternating harmonic and harmonic series.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E004 — Solution

The radius is 1. At \\(x=3\\), the series is harmonic and diverges. At \\(x=1\\), it is the alternating harmonic series and converges. The interval is \\([1,3)\\).

</details>

### ANA-CH15-E005 — Exercise 5: Compact uniformity

Prove \\(\\sum x^n\\) converges uniformly on \\([-r,r]\\) for every \\(r<1\\).

<details><summary>Hint 1</summary>

Bound every power on the prescribed smaller interval.

</details>

<details><summary>Hint 2</summary>

The summable numerical majorant is r^n.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E005 — Solution

On that interval \\(|x^n|\\le r^n\\), and \\(\\sum r^n\\) converges. The Weierstrass M-test gives uniform convergence.

</details>

### ANA-CH15-E006 — Exercise 6: Failure on the open radius

Show \\(\\sum x^n\\) does not converge uniformly on \\((-1,1)\\).

<details><summary>Hint 1</summary>

Use the necessary uniform term test for a uniformly convergent series.

</details>

<details><summary>Hint 2</summary>

The supremum of |x|^n on the open interval remains one, although it is not attained.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E006 — Solution

Uniform convergence would force the terms \\(x^n\\) to converge uniformly to zero. But \\(\\sup_{|x|<1}|x^n|=1\\) for every \\(n\\), since values approach 1 as \\(x\\uparrow 1\\). Thus the necessary uniform term condition fails.

</details>

### ANA-CH15-E007 — Exercise 7: Integrate the geometric series

Derive a power series for \\(-\\log(1-x)\\).

<details><summary>Hint 1</summary>

Integrate the geometric series on a compact interval strictly inside the radius.

</details>

<details><summary>Hint 2</summary>

Integrate from zero to x and reindex the resulting powers.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E007 — Solution

On every \\([-r,r]\\) with \\(r<1\\), integrate \\(\\sum x^n=1/(1-x)\\) term by term from zero to \\(x\\). This gives \\(\\sum_{n=0}^\\infty x^{n+1}/(n+1)=\\sum_{n=1}^\\infty x^n/n\\), valid for \\(|x|<1\\).

</details>

### ANA-CH15-E008 — Exercise 8: Differentiate the geometric series

Find a series for \\(1/(1-x)^2\\).

<details><summary>Hint 1</summary>

Differentiate the geometric series only inside its radius.

</details>

<details><summary>Hint 2</summary>

Reindex n x^(n-1) by replacing n-1 with a new index.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E008 — Solution

Differentiate \\(\\sum_{n=0}^\\infty x^n\\) term by term inside \\(|x|<1\\): \\(\\sum_{n=1}^\\infty n x^{n-1}\\). Reindex with \\(m=n-1\\) to get \\(\\sum_{m=0}^\\infty(m+1)x^m\\).

</details>

### ANA-CH15-E009 — Exercise 9: Recover coefficients

If \\(f(x)=\\sum c_n(x-a)^n\\) near \\(a\\), prove \\(c_3=f'''(a)/6\\).

<details><summary>Hint 1</summary>

Differentiate the series three times.

</details>

<details><summary>Hint 2</summary>

At the center only the cubic term contributes a nonzero constant.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E009 — Solution

Differentiate term by term three times. At \\(x=a\\), every term with power above zero vanishes, and the \\(n=3\\) term contributes \\(3\\cdot 2\\cdot 1c_3=6c_3\\). Hence \\(f'''(a)=6c_3\\).

</details>

### ANA-CH15-E010 — Exercise 10: Coefficient uniqueness

Suppose \\(\\sum a_nx^n=\\sum b_nx^n\\) on a neighborhood of zero. Prove \\(a_n=b_n\\) for all \\(n\\).

<details><summary>Hint 1</summary>

Subtract the two expansions.

</details>

<details><summary>Hint 2</summary>

Use derivative recovery at the center to show each coefficient of the zero function is zero.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E010 — Solution

Subtract the series to get an identically zero analytic function with coefficients \\(c_n=a_n-b_n\\). Its \\(n\\)th derivative at zero is \\(n!c_n\\), which must be zero. Therefore every \\(c_n=0\\).

</details>

### ANA-CH15-E011 — Exercise 11: Cauchy product count

Use a product of geometric series to prove \\(1/(1-x)^2=\\sum(n+1)x^n\\).

<details><summary>Hint 1</summary>

Use absolute convergence to justify multiplying the two series.

</details>

<details><summary>Hint 2</summary>

Count the nonnegative integer pairs whose indices sum to n.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E011 — Solution

Inside \\(|x|<1\\), absolute convergence permits multiplication. The coefficient of \\(x^n\\) in \\((\\sum x^k)(\\sum x^j)\\) is the number of pairs \\(k+j=n\\), namely \\(n+1\\). The product of the sums is \\(1/(1-x)^2\\).

</details>

### ANA-CH15-E012 — Exercise 12: Exponential recurrence

Find the coefficients of a power-series solution to \\(y'=2y\\), \\(y(0)=3\\).

<details><summary>Hint 1</summary>

Insert an unknown series into the differential equation.

</details>

<details><summary>Hint 2</summary>

Coefficient matching gives (n+1)c_(n+1)=2c_n, anchored by c_0=3.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E012 — Solution

With \\(y=\\sum c_nx^n\\), coefficient comparison gives \\((n+1)c_{n+1}=2c_n\\) and \\(c_0=3\\). Thus \\(c_n=3\\cdot 2^n/n!\\), so \\(y=3\\sum(2x)^n/n!=3e^{2x}\\).

</details>

### ANA-CH15-E013 — Exercise 13: A simple ODE series

Find the recurrence for a solution of \\(y''+xy=0\\) with \\(y(0)=1,y'(0)=0\\).

<details><summary>Hint 1</summary>

Write y'' with powers indexed from zero and xy with powers indexed from one.

</details>

<details><summary>Hint 2</summary>

Treat the constant coefficient separately, then compare coefficients for n at least one.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E013 — Solution

Write \\(y=\\sum c_nx^n\\). Then \\(y''=\\sum_{n=0}^\\infty(n+2)(n+1)c_{n+2}x^n\\), while \\(xy=\\sum_{n=1}^\\infty c_{n-1}x^n\\). Thus \\(2c_2=0\\), and for \\(n\\ge 1\\),
\\((n+2)(n+1)c_{n+2}+c_{n-1}=0\\).
Together with \\(c_0=1,c_1=0\\), this determines the candidate series.

</details>

### ANA-CH15-E014 — Exercise 14: Binomial coefficients

Write the first four nonzero terms of \\(\\sqrt{1+x}\\).

<details><summary>Hint 1</summary>

Use the generalized binomial coefficients with alpha one half.

</details>

<details><summary>Hint 2</summary>

Multiply successive descending half-integers and divide by the corresponding factorial.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E014 — Solution

With \\(\\alpha=1/2\\), the coefficients are \\(1\\), \\(1/2\\), \\((1/2)(-1/2)/2=-1/8\\), and \\((1/2)(-1/2)(-3/2)/6=1/16\\). Thus
\\(\\sqrt{1+x}=1+x/2-x^2/8+x^3/16+\\ldots\\) for \\(|x|<1\\).

</details>

### ANA-CH15-E015 — Exercise 15: Interior zero accumulation

Why can a nonzero analytic function not have zeros \\(1/n\\) on an interval containing zero?

<details><summary>Hint 1</summary>

Locate the accumulation point of the zeros.

</details>

<details><summary>Hint 2</summary>

It is an interior point, so the identity principle applies on the connected interval.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E015 — Solution

The zeros accumulate at the interior point zero. The identity principle forces an analytic function with such an accumulation of zeros to be identically zero on the connected interval, contradicting nonzero status.

</details>

### ANA-CH15-E016 — Exercise 16: Infinite agreement without interior accumulation

Give two distinct analytic functions that agree at infinitely many real points.

<details><summary>Hint 1</summary>

Choose a nonzero analytic function with regularly spaced zeros.

</details>

<details><summary>Hint 2</summary>

Sine agrees with the zero function at multiples of pi without any finite accumulation point.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E016 — Solution

Take \\(f(x)=\\sin x\\) and \\(g(x)=0\\) on \\(R\\). They agree at every integer multiple of \\(\\pi\\), but those points have no finite accumulation point in \\(R\\). The functions are distinct, so the interior-accumulation hypothesis is essential.

</details>

### ANA-CH15-E017 — Exercise 17: A uniform tail

Bound the tail of \\(\\sum x^n\\) after degree \\(N\\) on \\([-1/2,1/2]\\).

<details><summary>Hint 1</summary>

Bound each omitted power by its absolute value at one half.

</details>

<details><summary>Hint 2</summary>

Sum the geometric tail starting with degree N+1.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E017 — Solution

The absolute tail is at most \\(\\sum_{n=N+1}^\\infty(1/2)^n=(1/2)^{N+1}/(1-1/2)=2^{-N}\\).

</details>

### ANA-CH15-E018 — Exercise 18: Approximate a logarithm

Use three nonzero terms of the alternating series for \\(\\log(1+x)\\) to approximate \\(\\log(1.2)\\) and bound the error.

<details><summary>Hint 1</summary>

Substitute x=0.2 into the first three logarithm-series terms.

</details>

<details><summary>Hint 2</summary>

The next alternating term bounds the remainder because magnitudes decrease.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E018 — Solution

With \\(x=0.2\\), the approximation is \\(0.2-0.2^2/2+0.2^3/3=0.182666\\ldots\\). The alternating terms decrease, so the error is at most the next term \\(0.2^4/4=0.0004\\).

</details>

### ANA-CH15-E019 — Exercise 19: Radius after differentiation

Why does multiplying coefficients by \\(n\\) not change a finite positive radius?

<details><summary>Hint 1</summary>

Look at nth roots of the modified coefficient magnitudes.

</details>

<details><summary>Hint 2</summary>

The extra factor n^(1/n) tends to one and does not change the limsup governing the radius.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E019 — Solution

Cauchy–Hadamard uses nth roots. Since \\(n^{1/n}\\to 1\\),
\\(\\limsup|nc_n|^{1/n}=\\limsup n^{1/n}|c_n|^{1/n}=\\limsup|c_n|^{1/n}\\).
Therefore the reciprocal radius is unchanged.

</details>

### ANA-CH15-E020 — Exercise 20: Four endpoint patterns

Give radius-one series exhibiting each possible convergence pattern at \\(\\pm 1\\).

<details><summary>Hint 1</summary>

Start with the geometric, harmonic-weighted and square-weighted coefficient patterns.

</details>

<details><summary>Hint 2</summary>

Alternating the coefficient signs swaps which endpoint gives the alternating harmonic series.

</details>

<details><summary>Solution</summary>

#### ANA-CH15-E020 — Solution

Both endpoints: \\(\\sum x^n/n^2\\). Neither: \\(\\sum x^n\\). Left only: \\(\\sum x^n/n\\). Right only: \\(\\sum(-1)^n x^n/n\\). Each has radius 1 by the root or ratio test, and the endpoint claims follow from p-series, term, harmonic, and alternating-series tests.

</details>

## ANA-CH15-I001 — Investigation: a power-series reliability notebook

Choose one analytic function and one expansion center. Derive its coefficients rather than looking them up, prove the radius of convergence, audit both endpoints when finite, and compare three error certificates on a compact interior interval: a geometric coefficient bound, a Taylor derivative remainder, and an empirical grid maximum. Evaluate with direct powers and Horner's rule, recording arithmetic precision. Finish with one input near the boundary and explain which part of the earlier reliability argument degrades.

## Chapter synthesis

Inside the radius, power series provide a controlled algebra of functions because uniform convergence is available on every compact interior interval. That is what permits continuity, differentiation, integration, and multiplication. At the radius, the general machinery deliberately stops. Analyticity adds rigidity—coefficients and accumulated zeros determine the function—but it is stronger than smoothness.

The safe workflow is radius first, endpoints second, compact uniformity third, and only then termwise operations. For computation, attach a tail theorem and a rounding audit to every truncated polynomial.

## Summary

A power series has absolute convergence inside its radius and requires separate endpoint decisions. On every compact interval strictly inside that radius, geometric majorants give uniform convergence and justify termwise calculus. Derivatives recover the coefficients, making analytic expansions unique, while interior accumulation of zeros forces analytic rigidity. Coefficient recurrences first produce candidate solutions and need convergence arguments before becoming function identities. Reliable evaluation combines a stated interior domain with a certified tail bound.
`;export{e as default};