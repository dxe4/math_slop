var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: prime-number-theorem-newman
title: "The Prime Number Theorem: Newman's Proof"
level: graduate
license: CC BY-SA 4.0
---

# The Prime Number Theorem: Newman's Proof {#section-1-the-prime-number-theorem-newman-s-proof}

The prime number theorem asserts that the number of primes at most x
is asymptotic to x divided by log x. An Euler product by itself
does not prove this. The missing analytic bridge must control a boundary
and extract an unsmoothed asymptotic from a transform. We supply both
steps: a positivity argument excludes zeros on the boundary line, and
Newman's contour lemma proves convergence of a particular improper integral.
Monotonicity then turns that convergence into the prime asymptotic.

Our proof uses the actual earlier
[Dirichlet-series primary](dirichlet-series-euler-products.md), the
[theta continuation chapter](zeta-continuation-functional-equation.md), and the
retained elementary Chebyshev argument in
[the prime-distribution seed](retained-seeds/prime-distribution-sieves.md).
Only the upper Chebyshev estimate is needed, and we recall its proof
below so that the exact dependence is clear. Complex preparation is
Cauchy's integral theorem and local facts about zeros and logarithmic
derivatives. No general Tauberian theorem, zero-free region of fixed width
or prime number theorem in arithmetic progressions is imported.

<a id="section-20-the-statement-and-the-elementary-size-bound"></a>
## The statement and the elementary size bound {#section-22-the-statement-and-the-elementary-size-bound}

Let pi-x count primes at most x. Let theta-x be the sum
of log p over those primes, and let psi-x sum the von
Mangoldt function over positive integers at most x. The latter additionally
counts log p at each positive prime power. These functions are nonnegative
and nondecreasing. Their jump conventions at a prime will not matter
to an asymptotic, but at most x is the convention throughout this chapter.

**Theorem 6.1 (Prime number theorem).** As real x tends to infinity,

$$\\theta(x)\\sim x,\\qquad \\psi(x)\\sim x,
\\qquad \\pi(x)\\sim\\frac{x}{\\log x}.$$

The assertion is about cumulative counts. It does not claim that every
gap between consecutive primes has size close to the logarithm of its
left endpoint. We will prove the theta assertion first and derive the
other two at the end.

For a positive integer n, every prime between n and twice n
divides the central binomial coefficient: it occurs once in the numerator
factorial and not in either denominator factorial. The binomial coefficient
is at most four to the n, because it is one term in
the sum of all binomial coefficients of order twice n. Taking logarithms
therefore bounds theta at twice n minus theta at n by twice
n log two. For real x, choose a nearby integer cut. The
few endpoint changes cost at most a constant times log x, which
is absorbed into a constant times x for x at least two.
Thus theta-x minus theta at x divided by two is bounded above
by C x for a fixed C. Sum over successive dyadic intervals.
The geometric sum of their lengths is bounded by twice x, while
the final bounded interval contributes a fixed constant. We obtain theta-x
at most C-prime x for all x at least one, after enlarging
the constant. This elementary estimate is the boundedness input for Newman.

<a id="section-55-a-nonnegative-trigonometric-combination-excludes-bounda"></a>
## A nonnegative trigonometric combination excludes boundary zeros {#section-57-a-nonnegative-trigonometric-combination-excludes-bounda}

In the initial half-plane with real part greater than one, logarithmic
differentiation of the absolute Euler product gives

$$F(s):=-\\frac{\\zeta'(s)}{\\zeta(s)}
=\\sum_{n\\ge1}\\frac{\\Lambda(n)}{n^s}.$$

The derivative and logarithm operations are justified by the earlier positive
convergence margin. Since the coefficients are nonnegative, for sigma greater
than one and real t we have

$$3F(\\sigma)+4\\Re F(\\sigma+it)+\\Re F(\\sigma+2it)\\ge0.\\tag{6.1}$$

Indeed the coefficient at n is its positive real weight times
three plus four cosine of t log n plus cosine of twice
t log n. This trigonometric expression is twice the square of
one plus cosine of t log n, so it is nonnegative. Absolute
convergence permits combining the three sums term by term.

Near one, the continued zeta function has a simple pole with residue
one. Writing it as a nonvanishing holomorphic factor divided by s
minus one gives F-s equal to one divided by s minus one
plus a holomorphic remainder. At a zero of multiplicity m instead,
F has principal part minus m divided by the displacement from that
zero. The sign is reversed because F is the negative logarithmic
derivative.

Suppose a zero existed at one plus i t with t nonzero.
Let its multiplicity be m, at least one, and let m-prime
be the multiplicity at one plus twice i t, or zero if
that point is not a zero. Neither point is the pole. Multiply
(6.1) by sigma minus one and let sigma decrease to one.
Local zero expansions make the limit three minus four m minus
m-prime. It is strictly negative, a contradiction. Thus there is
no zero anywhere on the line with real part one. At the
real point one there is a pole, not a zero. This proves
the full boundary assertion needed below, without asserting a uniform leftward
zero-free strip.

Introduce the prime-only series phi-s, the sum of log p times
p to minus s. The difference F minus phi is the contribution
from powers of exponent at least two:

$$H(s)=\\sum_p\\sum_{k\\ge2}(\\log p)p^{-ks}.$$

It is holomorphic when the real part exceeds one half. On a
closed half-plane strictly inside that region, sum the geometric tail and
dominate it by a constant times the sum over integers n at
least two of log n divided by n to twice the real
part. That latter series converges. Uniform convergence on compact sets
gives holomorphy. Consequently phi-s minus one divided by s minus
one extends holomorphically to a neighborhood of every point on the
closed half-plane with real part at least one. Near one the
principal parts cancel; at the other boundary points zero-freeness prevents
a logarithmic-derivative pole. These neighborhoods may have widths depending
on the boundary height. Newman's lemma needs exactly that local information.

<a id="section-113-newman-s-analytic-lemma-with-the-contour-proof"></a>
## Newman's analytic lemma, with the contour proof {#section-115-newman-s-analytic-lemma-with-the-contour-proof}

**Theorem 6.2 (Newman).** Let f on the nonnegative real line be
bounded and locally integrable. Its Laplace transform g-z, initially defined
for positive real part, is assumed to extend holomorphically to a
neighborhood of every point of the closed right half-plane. Then the
improper integral of f from zero to infinity converges and equals g-zero.

This is an improper, possibly conditionally convergent integral. The theorem
does not assert absolute integrability of f. The boundary-extension hypothesis
means a genuine open neighborhood of each boundary point, not merely
existence of pointwise boundary limits.

*Proof.* Bound the absolute value of f by M. For T positive,
let g-T(z) be the integral from zero to T of f(t)
exp(minus z t). It is entire by differentiation on that finite
interval. We must prove g-T(0) tends to g(0).

Fix a positive radius R. Compactness of the imaginary segment between
minus i R and i R, together with the local extension hypothesis,
permits a path L just to its left, joining i R to
minus i R, lying wholly in the holomorphy domain and with strictly
negative real part except at its endpoints. The path can be piecewise
smooth and can avoid zero by staying at a small negative real
part in its middle. Choose it together with the right semicircle
of radius R so that they enclose zero once counterclockwise and
remain inside the domain of g. Such a choice needs only a
small neighborhood of that compact segment, not any fixed-width strip
valid for all R.

Apply Cauchy's formula to g minus g-T with the multiplier exp(Tz)
times one plus z squared divided by R squared. Its value at
zero is unchanged, giving

$$g(0)-g_T(0)=\\frac1{2\\pi i}\\int_{C_+\\cup L}
(g(z)-g_T(z))e^{Tz}\\left(1+\\frac{z^2}{R^2}\\right)\\frac{dz}{z}.$$

On the right semicircle, write x for the positive real part
of z. The difference of transforms is the tail beyond T.
After multiplying by exp(Tz), its modulus is at most M divided
by x. On either semicircle of radius R, a direct calculation gives

$$\\left|\\frac{1+z^2/R^2}{z}\\right|=\\frac{2|x|}{R^2}.$$

Thus the right-semicircle integrand has modulus at most twice M
divided by R squared. Its arc length is pi R, so after
the factor one over two pi its contribution is at most M
divided by R. The apparent division by x at the two endpoints
is canceled by the kernel; the estimate is interpreted by limits there.

On L, split the integrand into its g part and its minus
g-T part. The g part tends to zero after integration as T
tends to infinity: exp(T times real part) tends to zero at
every interior point, and the remaining continuous kernel is bounded on
the fixed finite path. Dominated convergence applies; the two endpoints
do not affect an integral. The factor one over z is harmless
because L avoids zero.

For the g-T part, deform L to the left semicircle of radius
R. The integrand is holomorphic in the intervening left-side region:
g-T is entire and the region avoids zero. On that semicircle,
where x is negative, express the multiplied transform as the integral
of f(t) exp((T minus t)z) from zero to T. Its modulus
is at most M divided by the absolute value of x. The
same kernel cancellation bounds this semicircle's contribution by M divided
by R. This deformation is why we split the two terms: g
need not extend throughout the left semicircle, whereas g-T does.

We have proved that the limit superior of the absolute difference
g(0) minus g-T(0) is at most twice M divided by R.
The radius R was arbitrary. First let T tend to infinity for
that fixed contour, then let R tend to infinity. The bound tends
to zero and proves the theorem. The order of limits is essential,
because the small leftward path and its extension neighborhood can depend
on R. ∎

The kernel's zeros at the two imaginary endpoints are the quantitative
mechanism of the proof. Without them the estimates M divided by
the real part would become singular along the semicircle. A sketch
that merely shifts an integral into the left half-plane misses both
the cancellation and the reason only one of the two terms may
be moved to the full left arc.

<a id="section-196-applying-the-lemma-to-weighted-primes"></a>
## Applying the lemma to weighted primes {#section-198-applying-the-lemma-to-weighted-primes}

Take f(t) equal to exp(minus t) theta(exp t) minus one.
The Chebyshev estimate makes it bounded, and it is locally integrable
because theta is a step function with finitely many jumps on each
bounded interval. Partial summation of the prime series gives, initially
for real part of s greater than one,

$$\\frac{\\phi(s)}s=\\int_1^\\infty\\frac{\\theta(x)}{x^{s+1}}\\,dx.$$

The endpoint term at infinity vanishes by the same linear bound,
and the lower endpoint has theta-one equal to zero. Substitute x
equal to exp t and then put s equal to one plus
z. The Laplace transform of f becomes

$$g(z)=\\frac{\\phi(1+z)}{1+z}-\\frac1z.$$

Our boundary argument makes this holomorphic near the closed right half-plane.
At zero, write phi(1+z) as one divided by z plus
a holomorphic function. Division by one plus z changes the first
term to one divided by z minus one divided by one plus
z. Subtracting one divided by z removes its pole. At every
other boundary point there is no pole. Newman's theorem therefore proves
that the following improper integral converges:

$$\\int_1^\\infty\\frac{\\theta(x)-x}{x^2}\\,dx.\\tag{6.2}$$

Convergence implies that integrals over all sufficiently distant intervals tend
uniformly to zero in absolute value, by the Cauchy criterion for improper
integrals. It does not imply the integrand tends to zero pointwise.
The next step uses monotonicity to prevent a large discrepancy from
being isolated in an arbitrarily narrow interval.

If theta-x were at least A x for arbitrarily large x with
some fixed A greater than one, then for t between x and
A x monotonicity gives theta-t at least A x. Hence the
integral over that interval in (6.2) is at least

$$\\int_x^{Ax}\\frac{Ax-t}{t^2}\\,dt=A-1-\\log A>0.$$

The strictly positive number is independent of x, contradicting the tail
Cauchy property. If theta-x were at most A x for arbitrarily
large x with a fixed A between zero and one, use instead
the interval from A x to x. Monotonicity now gives theta-t
at most A x there, so the integral is at most

$$1-A+\\log A<0.$$

This again contradicts tail convergence. Every fixed relative excess or deficit
is excluded, proving theta-x divided by x tends to one. These
two inequalities complete the unsmoothing step. They use the sign of
the discrepancy over an interval forced by monotonicity; general oscillatory
functions do not satisfy this implication from integral convergence alone.

<a id="section-250-passing-from-theta-to-pi-and-psi"></a>
## Passing from theta to pi and psi {#section-252-passing-from-theta-to-pi-and-psi}

Since every log p is at most log x, theta-x is at
most pi-x log x. This gives lower limit at least one for
pi-x log x divided by x. For a matching upper bound,
fix epsilon between zero and one. Primes between x to one
minus epsilon and x have logarithm at least (one minus epsilon)
log x. Consequently theta-x is at least that logarithmic lower
bound times the difference of the two prime counts. The smaller
count is at most x to one minus epsilon, which is negligible
relative to x divided by log x. Taking upper limits gives at
most the reciprocal of one minus epsilon. Finally let epsilon decrease
to zero. Upper and lower limits coincide at one, proving the
pi form of Theorem 6.1.

For psi minus theta, all extra terms are prime powers of exponent
at least two. Squares have at most square-root-x possible bases. For
larger exponents there are at most log-base-two-x exponent choices, each
with at most cube-root-x bases. That latter product is bounded by
a constant times square-root-x for large x. Each occurrence contributes
at most log x. Thus psi minus theta is of order at
most square-root-x times log x, which is negligible compared with x.
This gives the psi form and finishes the stated theorem.

<a id="section-274-three-worked-uses-and-boundaries"></a>
## Three worked uses and boundaries {#section-276-three-worked-uses-and-boundaries}

**Worked example 1: an elementary Laplace check.** For f(t) equal to
exp(minus a t) with a positive, the transform is one divided
by z plus a. Its pole is strictly to the left of
the boundary, so it satisfies Newman's hypothesis. The conclusion gives integral
one divided by a, agreeing with direct elementary integration. This example
checks the normalization g-zero and shows that the theorem includes ordinary
absolute convergence, although its proof does not require absolute integrability.

**Worked example 2: a boundary pole matters.** Let f(t) be sin t.
It is bounded and locally integrable. Its Laplace transform is one
divided by z squared plus one, which has poles at plus and
minus i on the boundary. The improper integral of sin t has
partial integrals one minus cosine T and therefore does not converge.
The failure occurs at exactly the excluded hypothesis. Merely having a
holomorphic transform in the open right half-plane is insufficient; every
bounded function already has that initial transform domain.

**Worked example 3: the monotonicity certificate at a ten-percent excess.**
Suppose theta-x were at least eleven tenths of x at arbitrarily
large inputs. On each interval from x to eleven tenths of x,
the preceding argument forces integral at least one tenth minus log
of eleven tenths. That number is positive because log u is
strictly less than u minus one for u greater than one.
Its exact size is unnecessary: a fixed positive lower bound contradicts
the tail Cauchy criterion. This shows why the proof establishes a
limit without producing a useful explicit error rate. The contour extension
width and subsequent threshold depend on the chosen radius; no quantitative
uniform zero-free region was proved.

<a id="section-305-exercises-with-two-hints-and-complete-solutions"></a>
## Exercises with two hints and complete solutions {#section-307-exercises-with-two-hints-and-complete-solutions}

### Exercise 6.1: the binomial upper bound {#prime-number-theorem-newman-ex-1}

Explain why the product of primes between n and twice n is at most four to the n.

<details>
<summary>Hint 1</summary>
Inspect prime valuations of the central binomial coefficient.
</details>
<details>
<summary>Hint 2</summary>
That coefficient is one positive summand in the binomial expansion of two to twice n.
</details>
<details>
<summary>Solution</summary>
Each such prime occurs once in the numerator factorial and
not in either n-factorial denominator, so their product divides
the binomial coefficient. The coefficient is at most the
sum of all order-two-n coefficients, which is four to
the n. Taking logarithms bounds the theta increment. Summing
these bounds on dyadic intervals gives the linear upper bound
used to make the Laplace input bounded.
</details>

### Exercise 6.2: positivity coefficients {#prime-number-theorem-newman-ex-2}

Verify the trigonometric identity used in (6.1) and state why nonnegative von Mangoldt coefficients matter.

<details>
<summary>Hint 1</summary>
Replace cosine of twice u by twice cosine squared u minus one.
</details>
<details>
<summary>Hint 2</summary>
Factor the resulting quadratic in cosine u.
</details>
<details>
<summary>Solution</summary>
The expression becomes two plus four cosine u plus twice
cosine squared u, namely twice (one plus cosine u)
squared. Multiplication by each nonnegative Dirichlet coefficient preserves
its sign, and absolute convergence allows summing. Arbitrary signed
or complex coefficients would not supply this inequality, even
if their transforms had similar formal logarithmic derivatives.
</details>

### Exercise 6.3: the logarithmic-derivative sign {#prime-number-theorem-newman-ex-3}

If zeta has a zero of multiplicity m at s-zero, compute the principal part of F there.

<details>
<summary>Hint 1</summary>
Write zeta as (s minus s-zero) to the m times a nonvanishing holomorphic function.
</details>
<details>
<summary>Hint 2</summary>
Differentiate its local logarithm, then remember the minus sign in F.
</details>
<details>
<summary>Solution</summary>
The logarithmic derivative has principal part m divided by
s minus s-zero. Its negative therefore has principal part
minus m divided by that displacement. A pole of zeta
has negative multiplicity in this bookkeeping and gives the
opposite sign. At the simple pole one, F consequently
has residue plus one, which is the term competing with
the hypothetical boundary-zero contributions.
</details>

### Exercise 6.4: excluding one boundary zero {#prime-number-theorem-newman-ex-4}

Assume multiplicity one at one plus i t, with t nonzero. Why does any nonnegative multiplicity at one plus twice i t contradict (6.1)?

<details>
<summary>Hint 1</summary>
Multiply by sigma minus one and take the limit from the right.
</details>
<details>
<summary>Hint 2</summary>
The three coefficients become three, minus four, and minus m-prime.
</details>
<details>
<summary>Solution</summary>
The limit is minus one minus m-prime, which is
negative even when the second point is not a zero.
It cannot be the limit of the nonnegative expressions
in (6.1). Higher multiplicity at the first point makes
the contradiction stronger. Local meromorphic expansions suffice; a
global zero-counting formula is not required.
</details>

### Exercise 6.5: why higher prime powers are harmless here {#prime-number-theorem-newman-ex-5}

Give the convergence threshold for H-s and identify the geometric bound behind it.

<details>
<summary>Hint 1</summary>
For each prime, sum the powers starting at exponent two.
</details>
<details>
<summary>Hint 2</summary>
Compare the result with the integer series having terms log n divided by n to twice sigma.
</details>
<details>
<summary>Solution</summary>
The absolute prime-power sum is log p times p to
minus twice sigma divided by one minus p to minus
sigma. On a closed half-plane with sigma greater than
one half, the denominator has a fixed positive lower
bound and the integer comparison converges. Locally uniform convergence
then proves H holomorphic there. The strictly positive margin
is retained throughout this comparison.
</details>

### Exercise 6.6: the contour kernel {#prime-number-theorem-newman-ex-6}

Show that the modulus of (one plus z squared divided by R squared) divided by z equals twice the absolute real part divided by R squared on the radius-R circle.

<details>
<summary>Hint 1</summary>
Write z as R exp(i theta).
</details>
<details>
<summary>Hint 2</summary>
One plus exp(twice i theta) is twice exp(i theta) cosine theta.
</details>
<details>
<summary>Solution</summary>
Dividing the identity by R exp(i theta) leaves twice
cosine theta divided by R. Its modulus is twice
the absolute cosine divided by R, and the real
part of z is R cosine theta. This proves the
formula. Its zeros at the two imaginary endpoints cancel
the reciprocal-real-part bounds in both semicircle estimates.
</details>

### Exercise 6.7: a permitted deformation {#prime-number-theorem-newman-ex-7}

Why is it legitimate to move the g-T part to a left semicircle but not necessarily the g part?

<details>
<summary>Hint 1</summary>
Compare the analytic domains of the finite and infinite Laplace integrals.
</details>
<details>
<summary>Hint 2</summary>
The intervening deformation region lies to the left of zero and avoids the kernel pole.
</details>
<details>
<summary>Solution</summary>
The finite transform g-T is entire, so its multiplied
kernel is holomorphic throughout that intervening region. The
continued g is only known in a neighborhood of the
closed right half-plane; it may have singularities farther left.
Splitting the terms permits the valid deformation for g-T
and uses decay on the small fixed leftward path for g.
</details>

### Exercise 6.8: the order of limits {#prime-number-theorem-newman-ex-8}

Explain why the lemma first sends T to infinity with R fixed.

<details>
<summary>Hint 1</summary>
The leftward extension neighborhood is obtained from one compact imaginary segment.
</details>
<details>
<summary>Hint 2</summary>
The path and its bounds can depend on R; no uniform strip was assumed.
</details>
<details>
<summary>Solution</summary>
For fixed R, the chosen path is compact and its
g contribution tends to zero by dominated convergence. The
two other contributions leave a bound twice M divided
by R. Only after establishing that bound for the
limit superior can R be made arbitrarily large. Sending
both parameters together would require uniform information about
the changing path which the hypotheses do not provide.
</details>

### Exercise 6.9: removing the apparent pole {#prime-number-theorem-newman-ex-9}

Write phi(1+z) as one divided by z plus a holomorphic a-z. Show g-z is holomorphic at zero.

<details>
<summary>Hint 1</summary>
Use partial fractions on one divided by z times one plus z.
</details>
<details>
<summary>Hint 2</summary>
Subtracting one divided by z leaves minus one divided by one plus z.
</details>
<details>
<summary>Solution</summary>
The expression for g becomes (a-z minus one) divided
by one plus z. The denominator is nonzero near
zero and the numerator is holomorphic. Hence the singularity
is removable and g-zero equals a-zero minus one. Its
particular value is unnecessary for the prime asymptotic; convergence
of the corresponding improper integral is the needed conclusion.
</details>

### Exercise 6.10: a persistent deficit {#prime-number-theorem-newman-ex-10}

Evaluate the upper bound on the discrepancy integral if theta-x is at most A x with zero less than A less than one.

<details>
<summary>Hint 1</summary>
Integrate from A x to x and use monotonicity to bound theta-t by A x.
</details>
<details>
<summary>Hint 2</summary>
The elementary integral is one minus A plus log A.
</details>
<details>
<summary>Solution</summary>
Integrating A x divided by t squared gives one
minus A, while integrating minus reciprocal t gives log
A. Their sum is strictly negative by log A less
than A minus one. If the deficit occurred arbitrarily
far out, those intervals would contradict the Cauchy property
of the convergent improper integral. This is the lower-limit
half of the unsmoothing argument.
</details>

### Exercise 6.11: the smaller prime count {#prime-number-theorem-newman-ex-11}

For fixed positive epsilon, prove that pi at x to one minus epsilon is negligible relative to x divided by log x.

<details>
<summary>Hint 1</summary>
Bound the number of primes by the number of integers in that interval.
</details>
<details>
<summary>Hint 2</summary>
The resulting ratio is at most log x divided by x to epsilon.
</details>
<details>
<summary>Solution</summary>
The count is at most x to one minus epsilon.
Dividing by x over log x gives the bound log
x over x to epsilon, which tends to zero.
Thus the theta-to-pi argument does not require a second
application of the prime number theorem at the smaller
argument; the elementary integer bound already suffices and avoids circularity.
</details>

### Exercise 6.12: what error term has been proved? {#prime-number-theorem-newman-ex-12}

Does this proof establish a particular fixed positive constant c with theta-x equal to x plus an error bounded by x to one minus c?

<details>
<summary>Hint 1</summary>
Review what the boundary nonvanishing and contour extension actually control.
</details>
<details>
<summary>Hint 2</summary>
The extension width depends on the chosen compact segment and no numerical threshold is extracted.
</details>
<details>
<summary>Solution</summary>
No such power-saving estimate follows from the arguments supplied.
The proof gives the limiting ratio and its equivalent
weighted forms. It does not provide a uniform quantitative
zero-free region or bounds that would justify the proposed
error. Stronger prime error terms require additional analysis,
and a plot agreeing with a particular rate cannot replace
that missing theorem.
</details>

<a id="section-577-summary-and-next-connection"></a>
## Summary and next connection {#section-579-summary-and-next-connection}

Euler-product positivity excludes boundary zeros through a three-term trigonometric
combination. Newman's proved contour lemma then turns a holomorphic boundary
extension into convergence of an improper discrepancy integral. Monotonicity
converts that convergence to theta asymptotics, and elementary comparisons give
the pi and psi forms. The proof establishes a limit without a
quantitative error rate. The algebraic half of the book now changes
objects: integer rings and prime ideals will organize arithmetic in extensions,
while keeping similarly precise local-to-global boundaries.

<a id="section-596-sources"></a>
## Sources {#section-598-sources}

The contour method is due to Newman; compare Don Zagier's author-hosted [Newman's Short Proof of the Prime Number Theorem](https://people.mpim-bonn.mpg.de/zagier/files/doi/10.2307/2975232/fulltext.pdf). The argument here proves the stated limit, without a quantitative error theorem.
`;export{e as default};