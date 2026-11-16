# Improper integrals and L’Hôpital’s rule

## Prerequisites and outcomes

You need the Fundamental Theorem of Calculus, one-sided limits, substitution, integration by parts, and logarithmic and exponential derivatives. Before starting, explain why ∫₁ᴿ 1/x dx = ln R for finite R > 1. Allow two study sessions plus exercises.

You will learn to define improper integrals using independent limits; derive both p-tests; justify comparison arguments; distinguish absolute convergence from signed cancellation; and check L’Hôpital’s hypotheses. You will also separate numerical truncation error from quadrature error.

## Extending integration requires a definition

A curve approaching the horizontal axis can still have infinite area underneath it. The question concerns accumulated area, rather than height at a distant point. Begin with ordinary finite integrals and examine their limits.

If f is Riemann integrable on every finite interval [a, R], define

∫ₐ^∞ f(x) dx = lim as R → ∞ of ∫ₐᴿ f(x) dx,

**provided that limit is finite**. Otherwise the integral diverges. An answer of +∞ describes divergence. At a singular endpoint a, assuming integrability on every [a+ε, b], define

∫ₐᵇ f(x) dx = lim as ε → 0+ of ∫ₐ₊εᵇ f(x) dx,

again requiring a finite limit. At a singular right endpoint, use ∫ₐᵇ⁻ε f instead.

Split **every problematic endpoint and interior singularity**. For ∫₀^∞ f, both ∫₀¹ f and ∫₁^∞ f must converge independently. At an interior pole c, the left and right limits at c must each converge. For the whole real line, split at an ordinary finite point. Moving that splitting point adds and subtracts an ordinary finite integral, leaving the result unchanged.

Thus ∫₋₁¹ 1/x dx diverges: its left piece tends to −∞ and its right piece to +∞. Equal cutoffs give zero, a **Cauchy principal value**, which is a different definition. Linking cutoffs must never conceal a divergent side.

### An apparent zero that depends on how the hole is approached

Remove the interval \((-\varepsilon,\delta)\), where \(\varepsilon\) and \(\delta\) are *independent* positive cutoffs. Ordinary integration on the two remaining compact intervals gives

\[
\int_{-1}^{-\varepsilon}\frac{dx}{x}
+\int_{\delta}^{1}\frac{dx}{x}
=\ln\varepsilon-\ln\delta
=\ln\!\left(\frac{\varepsilon}{\delta}\right).
\]

Equal cutoffs produce zero at every stage. Choosing \(\varepsilon=2\delta\) produces \(\ln2\); choosing \(\varepsilon=\delta^2\) produces \(\ln\delta\), which decreases without bound. None is the improper integral because neither one-sided integral has a finite limit. These finite numbers answer different questions about a paired-cutoff procedure. A numerical midpoint sum can look stable while missing a pole or canceling its two sides.

```exercise
{"id":"calc-improper-independent-cutoffs","type":"choice","prompt":"A student uses symmetric cutoffs around zero and obtains zero for the integral of 1/x from −1 to 1. Which conclusion follows?","options":[{"label":"The improper integral is zero.","correct":false,"feedback":"Each side diverges separately. A paired cutoff computes a different limiting procedure."},{"label":"The Cauchy principal value is zero, but the improper integral diverges.","correct":true,"feedback":"Correct. Equal cutoffs cancel, while the required one-sided limits fail."},{"label":"The integral is conditionally convergent.","correct":false,"feedback":"Conditional convergence still requires a finite improper integral. Here neither side has one."}],"hints":["Evaluate the left and right pieces separately before adding them."]}
```

**Investigate before trusting a displayed number.** On paper, compute the two truncated pieces at \(\varepsilon=\delta=0.1\) and at \(\varepsilon=0.1,\delta=0.05\). Then compute at \(\varepsilon=\delta=0.01\). Record which observations change and which do not. A finite quadrature result represents a particular finite calculation; it cannot replace the two defining limits.

## Deriving the two p-tests

For p ≠ 1, integrate before taking limits:

∫₁ᴿ x^(−p) dx = [R^(1−p)−1]/(1−p).

If p > 1, then R^(1−p) → 0, giving 1/(p−1). If p < 1, the expression grows without bound. At p = 1 it is ln R, also unbounded. Therefore **the infinite tail converges exactly when p > 1**.

At zero the same antiderivative gives

∫ε¹ x^(−p) dx = [1−ε^(1−p)]/(1−p).

Now ε^(1−p) → 0 exactly when p < 1, giving 1/(1−p). For p > 1 the integral grows without bound; for p = 1 it equals −ln ε. Therefore **the singular endpoint converges exactly when p < 1**. Stronger decay at infinity means a stronger singularity at zero. No exponent makes ∫₀^∞ x^(−p) dx converge.

### Worked example 1: infinite height, finite area

For ∫₀⁹ 1/√x dx, first use ε > 0:

∫ε⁹ x^(−1/2) dx = [2√x]ε⁹ = 6−2√ε → 6.

The unbounded height is compatible with finite area because intervals near zero become sufficiently narrow. The omitted area is exactly 2√ε, quantifying the truncation error.

### Visual laboratory: a tail beyond the window

```mathviz
scene "Decay and accumulated area";
domain 1 20;
range 0 1.2;
param p = 1.2 from 0.5 to 2.5;
param r = 8 from 2 to 20;
fn f(x) = 1/x^p;
plot f color blue;
riemann f from 1 to r count 160;
```

**Predict:** Which of p = 0.8, 1, 1.2 gives finite total area?

**Explore:** Change p, then increase r. Compare the midpoint sums with the exact finite-integral formulas.

**Explain:** For p > 1, unseen area after r equals r^(1−p)/(p−1). At p = 1.2 and r = 20 it is about 2.75, despite the low curve.

**Transfer:** Set p = 2. Find a cutoff giving omitted area below 0.01. Explain why increasing rectangle count addresses a different error. A finite window cannot establish convergence.

### Visual laboratory: approaching a singular endpoint

```mathviz
scene "Removing a cutoff near zero";
domain 0.01 1;
range 0 12;
param p = 0.5 from 0.25 to 1.5;
param cutoff = 0.1 from 0.01 to 0.5;
fn f(x) = 1/x^p;
plot f color violet;
riemann f from cutoff to 1 count 200;
```

**Predict:** Which has finite integral, p = 0.5 or p = 1.5?

**Explore:** Decrease cutoff for both exponents. Heights exceeding the viewing range are clipped; clipping is not boundedness.

**Explain:** Their exact truncated areas are respectively 2−2√cutoff and 2/√cutoff−2. Explain the different limits.

**Transfer:** For p = 0.5, find the cutoff giving omitted area below 0.02. Edit the source to permit it; explain why the midpoint sum retains a separate approximation error.

## Convergence without an antiderivative

Suppose 0 ≤ f ≤ g eventually, with both functions integrable on finite subintervals. If ∫g converges, ∫f converges. If ∫f diverges, ∫g diverges. The other directions do not follow. Nonnegative accumulated integrals increase; an upper bound forces a finite limit. Equivalent reasoning works near a singular endpoint.

For eventually positive f and g, **limit comparison** says that a finite positive limit f/g → L makes their integrals share convergence behavior. Indeed, sufficiently close to the endpoint, (L/2)g ≤ f ≤ (3L/2)g. A zero or infinite L does not give this two-way conclusion.

### Worked example 2: identify the tail’s scale

Consider f(x) = (4x+1)/(x³+2), x ≥ 1. Compare with g(x) = 1/x²:

f(x)/g(x) = (4x³+x²)/(x³+2) → 4.

Both are positive and continuous on [1,∞). Since ∫₁^∞ g converges, so does ∫₁^∞ f. We establish existence without claiming an exact value.

For signed integrands, **absolute convergence**, convergence of ∫|f|, implies convergence of ∫f: the absolute value of each signed tail integral is bounded by the corresponding integral of |f|. The converse fails. Integration by parts gives

∫₁ᴿ sin(x)/x dx = [−cos(x)/x]₁ᴿ − ∫₁ᴿ cos(x)/x² dx.

The boundary term has a limit and the second integral converges absolutely by comparison with 1/x². However, on each [kπ+π/6, kπ+5π/6], |sin x| ≥ 1/2. For k ≥ 1 the absolute integral on this interval is at least 1/[3(k+1)]. These lower bounds sum to a divergent harmonic series: grouping denominators between successive powers of two gives a fixed positive lower bound per group. Signed convergence need not mean finite unsigned area.

### The comparison direction is part of the proof

For a positive tail, an upper bound by a *divergent* comparison gives no conclusion. For example, \(1/x^2\le1/x\) for \(x\ge1\), yet the first tail converges and the second diverges. Likewise, a lower bound by a convergent comparison is silent. Write the inequality needed for the desired conclusion before choosing a test. The decision concerns accumulation of the tail, not simply pointwise size.

**Worked contrast.** The integral \(\int_2^\infty dx/[x(\ln x)^p]\) looks smaller than \(\int_2^\infty dx/x\) for \(p>0\), but that alone cannot prove convergence. Set \(u=\ln x\) on each finite interval \([2,R]\). The defining tail becomes \(\int_{\ln2}^{\ln R}u^{-p}\,du\). As \(R\to\infty\), the upper bound tends to infinity, so the \(p\)-test gives convergence exactly for \(p>1\). At \(p=1\), the accumulated integral grows as \(\ln(\ln R)\) even though its graph appears nearly flat on ordinary scales.

## L’Hôpital’s rule checks a limit

A sufficient version of the theorem: suppose f and g are differentiable on a punctured one-sided interval, or a tail toward infinity; g and g′ are nonzero there; and either both f and g tend to zero or both their absolute values tend to infinity. If f′/g′ tends to a finite limit or ±∞, then f/g has that same limit. Check both sides for a two-sided limit.

Differentiate numerator and denominator separately, not the quotient. First rewrite products and differences into eligible quotients. There is **no converse**: (x+sin x)/x → 1, but its derivative quotient 1+cos x has no limit. Failure of the derivative limit gives no conclusion.

### Worked example 3: logarithmic growth inside a tail

Integration by parts on [e,R] gives

∫ₑᴿ ln(x)/x² dx = 2/e−[ln R+1]/R.

For ln R/R, both numerator and denominator tend to infinity; their derivatives exist; the denominator derivative is 1; and their derivative quotient is 1/R → 0. Thus the improper integral equals 2/e. Infinity was never substituted into an antiderivative.

### Worked example 4: an indeterminate product

As x → 0+, write x ln x = ln x/(1/x). Both absolute values tend to infinity; the denominator and its derivative are nonzero for x > 0. The derivative quotient is (1/x)/(−1/x²) = −x → 0. Hence x ln x → 0. Applying the rule directly to a product would not be justified.

## Exercises

Supply a defining limit or theorem justification.

1. Evaluate ∫₀⁸ x^(−2/3) dx from its definition.
2. Evaluate ∫₂^∞ 1/[x(x+2)] dx using partial fractions.
3. Decide whether ∫₁^∞ (3+cos x)/x^(4/3) dx converges.
4. Use limit comparison for ∫₂^∞ (x²+1)/(x³+7) dx.
5. Explain why [ln|x−2|]₀⁴ does not evaluate ∫₀⁴ 1/(x−2) dx.
6. Find lim as x → 0 of (exp(x)−1−x)/x², checking every L’Hôpital application.
7. Estimate ∫₁^∞ x^(−3/2) dx by stopping at 100. Find the omitted area and a cutoff making it below 0.01.
8. For which real p does ∫₀^∞ x^(−p)/(1+x) dx converge? Analyze both ends.

<details><summary>First hints: select a method</summary>

1. Put ε at the lower endpoint.
2. Seek two logarithmic derivatives.
3. Bound the numerator.
4. Compare with 1/x.
5. Locate the interior pole.
6. The first derivative quotient remains indeterminate.
7. Integrate from the cutoff to R before taking R → ∞.
8. The denominator behaves differently at each end.

</details>

<details><summary>Second hints: key calculations</summary>

1. The antiderivative is 3x^(1/3).
2. Use (1/2)[1/x−1/(x+2)].
3. Use 0 ≤ 3+cos x ≤ 4.
4. The ratio to 1/x tends to 1.
5. Independent cutoffs give opposite infinities.
6. After a second differentiation, inspect exp(x)/2.
7. The tail after r is 2/√r.
8. Compare with x^(−p) near zero and x^(−p−1) at infinity.

</details>

<details><summary>Complete solutions</summary>

1. The truncated integral is 3·8^(1/3)−3ε^(1/3) = 6−3ε^(1/3) → 6.
2. The finite integral is (1/2)ln(R/(R+2))+(1/2)ln 2. The first term tends to zero, giving (ln 2)/2.
3. The integrand is nonnegative and at most 4x^(−4/3). Comparison proves convergence because 4/3 > 1.
4. The positive ratio is (x³+x)/(x³+7) → 1. Since ∫₂^∞ 1/x dx diverges, the original diverges.
5. The left integral is ln ε−ln 2 → −∞; the right is ln 2−ln ε → +∞. Neither converges. The antiderivative cannot bridge the pole.
6. Initially the form is 0/0, with denominator derivative 2x nonzero on either punctured side. The first derivative quotient is (exp(x)−1)/(2x), again 0/0, now with denominator derivative 2. The next quotient exp(x)/2 → 1/2. All functions are differentiable there; applying the theorem twice gives 1/2 from both sides.
7. The finite approximation is ∫₁¹⁰⁰ x^(−3/2) dx = [−2/√x]₁¹⁰⁰ = 1.8. The full integral is 2, and the omitted area is 2/√100 = 0.2. Requiring 2/√r < 0.01 gives r > 40,000. More rectangles at r = 100 cannot remove that tail.
8. Split at 1. Near zero the ratio to x^(−p) is 1/(1+x) → 1, requiring p < 1. At infinity the ratio to x^(−p−1) is x/(1+x) → 1, requiring p+1 > 1. Both conditions hold exactly for 0 < p < 1. Each excluded endpoint fails logarithmically.

</details>

## Further reading and readiness check

Alternate presentations: [OpenStax, Improper Integrals](https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals) and [L’Hôpital’s Rule](https://openstax.org/books/calculus-volume-1/pages/4-8-lhopitals-rule). MIT 18.01SC supplies lecture clips and worked problems in [Session 91: Improper Integrals](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-a-lhospitals-rule-and-improper-integrals/session-91-improper-integrals/) and [Session 92: Integral Comparison](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-a-lhospitals-rule-and-improper-integrals/session-92-integral-comparison/).

Before continuing, derive both p-tests, identify every required cutoff in an unfamiliar integral, and distinguish visual evidence from proof of convergence.
