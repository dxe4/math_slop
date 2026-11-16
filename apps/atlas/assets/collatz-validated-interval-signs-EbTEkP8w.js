var e=`---
id: deep-dive-collatz-validated-interval-signs
title: "Validated Intervals Certify Signs Rather Than Decimal Impressions"
license: CC BY-SA 4.0
---

# Validated Intervals Certify Signs Rather Than Decimal Impressions
<a id="sec-collatz-interval-arithmetic"></a>

Inclusion-preserving interval operations and explicit rational remainder bounds can prove a numerical sign, while an enclosure crossing zero remains inconclusive.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](/textbooks/collatz_conjecture/_output/) and the relevant finite-model
foundations of the [Collatz Research Toolkit](/textbooks/collatz_research_toolkit/_output/).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](/textbooks/collatz_conjecture/_output/chapters/45-interval-arithmetic.html).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

## Interval inclusion

If $x\\in X$ and $y\\in Y$, an interval operation must produce a set containing
every possible exact result. For
$X=[a,b]$ and $Y=[c,d]$,

$$
X+Y=[a+c,b+d],
$$

$$
X-Y=[a-d,b-c].
$$

For multiplication, evaluate the four endpoint products:

$$
XY=
[\\min(ac,ad,bc,bd),\\max(ac,ad,bc,bd)].
$$

If $0\\notin Y$, division is multiplication by the reciprocal interval. If
$0\\in Y$, the ordinary quotient may be unbounded or disconnected; returning a
single finite interval would be unsound.

When endpoints are machine floats, the lower result must be rounded toward
$-\\infty$ and the upper result toward $+\\infty$. This is **outward rounding**.
Using round-to-nearest for both can move an endpoint inward and exclude the true
value.

Exact rational endpoints avoid primitive rounding for addition and
multiplication. Their numerators and denominators may grow, so practical systems
often combine arbitrary-precision directed rounding with independently
checkable rational certificates for final claims.

### Soundness by structural induction

An interval evaluator can be proved correct once for every expression tree. At
a leaf, the input interval is assumed to contain the true constant or variable.
At an internal node, assume the child intervals contain their exact values.
Apply an inclusion-preserving primitive operation and outward rounding; the
parent interval then contains the exact parent value. Induction reaches the
root.

This proof separates two obligations. The mathematical primitive rule must be
inclusive, and the implementation must round outward. Unit tests with familiar
values help but cannot replace either obligation. A certificate checker may use
exact rational endpoints and theorem-specific remainder bounds, avoiding trust
in the producer's floating-point environment.

## Monotone functions and domains

If $f$ is increasing on $[a,b]$, then

$$
f([a,b])=[f(a),f(b)]
$$

provided the endpoint evaluations are enclosed outward. The logarithm is
increasing on $(0,\\infty)$, so a log interval must first prove its input lower
endpoint is positive. The exponential is increasing everywhere.

For a function that changes direction, critical points must be included. For
example, squaring $[-2,3]$ is $[0,9]$, not $[4,9]$, because zero lies inside the
input interval.

A nonexample is evaluating $1/X$ for $X=[-1,1]$ and returning $[-1,1]$.
Values near zero have arbitrarily large reciprocals and the reciprocal set has
two unbounded pieces.

## Dependency and overestimation

Intervals record ranges, not correlations between repeated occurrences. If
$X=[0,1]$, direct interval subtraction gives

$$
X-X=[-1,1],
$$

although the expression $x-x$ equals zero for every single $x$. Treating the
two appearances as independent choices loses dependency information.

Algebraic reformulation can help. Evaluate $x(1-x)$ on $[0,1]$ naively:

$$
[0,1](1-[0,1])=[0,1].
$$

Completing the square gives

$$
x(1-x)=\\frac14-(x-1/2)^2,
$$

which encloses the exact range $[0,1/4]$. Subdividing $[0,1]$ and taking the
union of smaller enclosures also tightens the bound.

Wide intervals are not incorrect when they contain the truth. If an enclosure
straddles zero, the sign is **inconclusive**, not false. Increase precision,
subdivide a domain, or reformulate the expression; never select the desired
endpoint.

## Exact arithmetic first

Many apparent real comparisons in Collatz reduce to integers. The sign of

$$
A\\log2-r\\log3
$$

equals the sign of

$$
\\log\\left(\\frac{2^A}{3^r}\\right),
$$

which equals the sign of $2^A-3^r$. Exact arbitrary-precision powers decide it
without logarithms. Exact divisibility similarly decides a cycle closure.

Intervals remain valuable when expressions combine several elementary
functions, optimized real parameters, error terms, or graph weights in a way
that does not collapse to one integer comparison. A good workflow always asks
whether integer or rational algebra can remove the numerical layer first.

## Certified logarithms from a rational series

For $x>0$, define

$$
z=\\frac{x-1}{x+1}.
$$

Then $|z|<1$ and

$$
\\log x=2\\operatorname{atanh}(z)
=2\\sum_{j=0}^{\\infty}\\frac{z^{2j+1}}{2j+1}. \\tag{45.1}
$$

For $x>1$, every term is positive. Truncate after $j=m$. Since the omitted
denominators are at least $2m+3$,

$$
\\begin{aligned}
0<R_m
&=2\\sum_{j=m+1}^{\\infty}\\frac{z^{2j+1}}{2j+1}\\\\
&\\le
\\frac{2z^{2m+3}}{2m+3}\\sum_{q=0}^{\\infty}z^{2q}\\\\
&=
\\frac{2z^{2m+3}}{(2m+3)(1-z^2)}.
\\end{aligned}\\tag{45.2}
$$

Equations (45.1) and (45.2) give rational endpoints whenever $x$ is rational.
For $x=2$, $z=1/3$; for $x=3$, $z=1/2$. The calculation therefore needs only
integer powers, fractions, and an exact geometric-tail bound.

## Complete case study: a certified logarithmic sign

Consider

$$
\\Lambda=84\\log2-53\\log3.
$$

Let $L_2,U_2$ and $L_3,U_3$ be the rational lower and upper bounds from the
first thirteen terms, $m=12$. Multiplication by positive constants and
subtraction give

$$
84L_2-53U_3
\\le\\Lambda\\le
84U_2-53L_3.
$$

Exact rational evaluation, displayed with outward-rounded decimal endpoints,
gives

$$
\\Lambda\\in
[-0.002088134,-0.002088094]. \\tag{45.3}
$$

Both endpoints are negative, so $\\Lambda<0$ is certified. Consequently

$$
2^{84}<3^{53}.
$$

An odd-only positive cycle with total valuation $84$ across $53$ odd steps
would require the opposite inequality and is therefore impossible. This
eliminates one aggregate parameter pair, not every valuation word or every
cycle length.

The exact integer cross-check computes

$$
2^{84}-3^{53}<0.
$$

The exact integer comparison supplies the same negative sign without logarithmic rounding. The longer source discusses its implementation; this article reports no new execution. A numerical certificate should retain exact rational endpoints, not only displayed decimals.

## Theorem-scope and failure audit

- Outward interval operations prove inclusion when all inputs and domains are
  valid.
- An interval excluding zero certifies a sign; one containing zero is
  inconclusive.
- Exact integer and rational comparisons supersede floating point when
  available.
- More digits do not compensate for inward rounding or a missing remainder.
- A finite graph inequality needs a total arithmetic projection before it
  controls every represented orbit.
- Validated numerics can certify finite inequalities, not change a bounded
  quantifier into a universal one.
- No interval computation in this chapter proves the Collatz conjecture.


## Why an exact comparison is preferable when available

If a claimed sign reduces to comparing two integer powers, the integer comparison removes the analytic approximation entirely. This does not make intervals unnecessary: sums of logarithms with extra remainder terms, optimised real parameters or graph weights may require a genuine enclosure. The method should match the claim rather than add a numerical layer automatically.

An interval is a statement of containment. If it crosses zero, the evidence is inconclusive about sign, even when its midpoint has the desired sign. A narrower interval may come from more terms in a proven series, a smaller input region, or an algebraic reformulation retaining dependencies. Merely rounding the midpoint to more decimal places supplies no new containment argument.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-validated-interval-signs-ex-1"></a>

Evaluate $x(1-x)$ on $[0,1]$ naively and after completing the square. Prove the exact range and explain why the wide enclosure is still sound.

<details>
<summary>Hint 1</summary>

Naive interval multiplication forgets that both factors use the same input.

</details>

<details>
<summary>Hint 2</summary>

Rewrite using the square of $x-1/2$.

</details>

<details>
<summary>Solution</summary>

Naively, both factors lie in $[0,1]$, so their interval product is $[0,1]$. The identity $x(1-x)=1/4-(x-1/2)^2$ and the square range $[0,1/4]$ give $[0,1/4]$. The product is nonnegative throughout the domain, zero at the endpoints, and one quarter at one half; continuity gives every intermediate value, so this is the exact range. The larger naive interval is not false: it contains the truth but loses dependency information. Soundness and sharpness are different properties.

</details>

### Exercise 2
<a id="deep-dive-collatz-validated-interval-signs-ex-2"></a>

Prove the sign of $5\\log2-3\\log3$ without decimal logarithms, and explain what an interval containing zero would establish instead.

<details>
<summary>Hint 1</summary>

Combine logarithms into one logarithm of a positive ratio.

</details>

<details>
<summary>Hint 2</summary>

The logarithm is strictly increasing and vanishes at one.

</details>

<details>
<summary>Solution</summary>

The expression is $\\log(2^5/3^3)=\\log(32/27)$. Since thirty-two exceeds twenty-seven, the ratio exceeds one and the logarithm is strictly positive. No numerical approximation is needed. An interval containing zero and the true value would be a sound but inconclusive sign certificate; it would not establish zero or negativity. For expressions that do not reduce to integer powers, use outward enclosures and a proved remainder bound, and certify a sign only when the entire final interval lies on the corresponding side of zero.

</details>

## Continue with the full argument

Return to the [research toolkit](/textbooks/collatz_research_toolkit/_output/) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
`;export{e as default};