# Power and Taylor series: formulas with a radius of trust

## Preparation and learning goals

Review [series and remainder bounds](sequences-series.md), [differentiation rules](derivative-rules.md), and [local approximation](modelling.md). You should know the geometric-series formula and how to differentiate several times. Plan two or three sessions: convergence intervals, approximation with error, then applications and practice.

This chapter separates three questions that are often confused: Does a particular series converge? If it converges, which function does it represent? How accurately does a finite polynomial approximate that function? You will calculate radii and endpoints, construct Taylor polynomials, justify equality by controlling remainders, and use series to approximate an integral.

## A polynomial extended into an infinite process

A **power series centered at a** is ∑ₙ₌₀∞ cₙ(x − a)ⁿ. For each fixed x it becomes a numerical series, so all the previous chapter's convergence questions still apply. The constant term is c₀, including at x = a, where every positive-power term vanishes.

There is a radius R, possibly zero or infinity, such that the series converges absolutely when |x − a| < R and diverges when |x − a| > R. If 0 < R < ∞, neither endpoint is decided by this theorem. The interval of convergence consists of the interior together with whichever endpoints pass separate tests.

Why does an interval appear? If the series converges at a noncentral point b, its terms cₙ(b − a)ⁿ are bounded. At any closer point x, the magnitudes are bounded by a constant times [|x − a|/|b − a|]ⁿ. A geometric comparison gives absolute convergence. Moving inward preserves convergence; the boundary itself needs further work.

## Worked example 1: radius first, endpoints separately

For ∑ₙ₌₁∞ (x − 2)ⁿ/(n·3ⁿ), the ratio of successive absolute terms is

[|x − 2|/3]·n/(n + 1) → |x − 2|/3.

Thus R = 3, with guaranteed convergence for −1 < x < 5. At x = −1, the series becomes ∑(−1)ⁿ/n, which converges conditionally. At x = 5 it becomes ∑1/n, which diverges. The full interval is [−1, 5).

At the center x = 2, the series is zero directly; no ratio of zero terms is needed. Always return to the original series at exceptional values. The ratio test's boundary limit one is a request for another test, not a convergence verdict.

### Visual laboratory: the function can exist beyond its series

```mathviz
scene "A geometric expansion and its moving radius";
domain -1.6 1.6;
range -4 9;
param b = 1 from 0.5 to 1.5;
fn rational(x) = 1/(1-b*x);
fn cubic(x) = 1+b*x+(b*x)^2+(b*x)^3;
fn seventh(x) = 1+b*x+(b*x)^2+(b*x)^3+(b*x)^4+(b*x)^5+(b*x)^6+(b*x)^7;
plot rational color blue;
plot cubic color amber;
plot seventh color teal;
```

**Predict.** The expansion is centered at zero. For b = 1, should adding terms improve the approximation at x = 0.4? At x = −1.3?

**Explore.** Compare the cubic and seventh-degree polynomials, then increase b. The radius 1/b shrinks. Near the pole x = 1/b, finite sampling and clipping cannot display an actual infinite value.

**Explain.** The exact finite remainder is (b x)^(N+1)/(1 − b x). Its numerator tends to zero only when |b x| < 1. Although the rational function is perfectly well defined at x = −1.3 when b = 1, its series centered at zero diverges there.

**Transfer.** Set b = 0.5 and determine which points in the displayed window lie inside the radius. At x = −2, decide convergence from the terms, even though the rational function has a finite value there.

## Differentiation, integration, and endpoint discipline

Within the open radius, a power series may be differentiated and integrated term by term. The differentiated and integrated series have the same radius; their endpoints can differ. These operations are justified on every closed subinterval strictly inside the radius, where convergence has stronger uniform control. A later [analysis chapter](../lucent-analysis/uniform-convergence.md) makes that control precise.

Starting with 1/(1 − x) = ∑ₙ₌₀∞ xⁿ for |x| < 1, integration from zero to x gives

−ln(1 − x) = ∑ₙ₌₁∞ xⁿ/n, for |x| < 1.

Replacing x by −x gives ln(1 + x) = x − x²/2 + x³/3 − ⋯ on (−1, 1). The integrated series converges at x = 1 by the alternating test, but substituting an endpoint into an identity proved only in an open interval is not yet a justification for its value there.

One direct endpoint proof starts from the finite identity

1/(1 + t) = ∑ₖ₌₀ᴺ (−t)ᵏ + (−t)^(N+1)/(1 + t).

Integrate on [0, 1]. The remainder's magnitude is at most ∫₀¹ t^(N+1) dt = 1/(N + 2), which tends to zero. Therefore ln 2 = 1 − 1/2 + 1/3 − ⋯. Finite algebra plus a remainder bound has justified the endpoint without assuming it.

## Taylor coefficients come from matching derivatives

Suppose a polynomial should agree with f and its first n derivatives at a. Differentiating its powers at the center forces the coefficients to be f^(k)(a)/k!. The resulting **Taylor polynomial** is

Tₙ(x) = ∑ₖ₌₀ⁿ f^(k)(a)(x − a)ᵏ/k!.

When a = 0, it is also called a Maclaurin polynomial. Matching derivatives supplies a candidate approximation; it does not yet give an error bound or show that an infinite series equals f.

**Taylor's theorem, with Lagrange remainder.** If f has n + 1 continuous derivatives on an open interval containing the segment between a and x, then for some ξ between those points,

f(x) − Tₙ(x) = f^(n+1)(ξ)(x − a)^(n+1)/(n + 1)!.

Consequently, if |f^(n+1)(t)| ≤ M throughout that segment, then

|f(x) − Tₙ(x)| ≤ M|x − a|^(n+1)/(n + 1)!.

The derivative bound must hold between a and x, not merely at the center. The unknown ξ is not a number the theorem asks us to compute.

## Worked example 2: a certified exponential approximation

All derivatives of eˣ equal eˣ. At zero,

T₃(x) = 1 + x + x²/2 + x³/6.

At x = 1/2, T₃(1/2) = 79/48 ≈ 1.645833. On [0, 1/2], the fourth derivative is at most e^(1/2) < 2, so the error is less than

2(1/2)⁴/4! = 1/192 ≈ 0.005209.

The fourth derivative is positive, so the approximation underestimates e^(1/2). This combines direction and magnitude into a certified interval. The bound is deliberately convenient; using e^(1/2) instead of two tightens it, but a bound should not require already knowing the quantity being approximated accurately.

### Visual argument: contact is local, while the remainder controls distance

```visual-story
{
  "id": "taylor-contact-and-remainder",
  "title": "From derivative matching to a certified approximation",
  "prompt": "A polynomial can look close for two different reasons: high-order contact at its center and a controlled remainder away from that center. Separate those claims.",
  "stages": [
    {
      "title": "Reconstruct first-order contact",
      "body": "The worked example has already displayed the cubic coefficients. Reconstruct rather than discover the first two: choose a line that shares the exponential's value and first derivative at zero, and derive its coefficients before revealing the curves.",
      "question": "Compute the value and first derivative of both functions at zero. Which two equalities force this line?",
      "checkpoint": {
        "hint": "Write the candidate as A+Bx. Evaluate it and its derivative at zero before solving for A and B.",
        "explanation": "For exp, the value and first derivative at zero both equal 1. For A+Bx, those quantities are A and B. Thus the two matching conditions force A=B=1, giving T₁(x)=1+x. The match is exact at the center; it does not claim equality at other inputs. The plot illustrates these local constraints.",
        "criteria": ["Uses both value and derivative matching.", "Finds the coefficients algebraically and limits the contact claim to the center."]
      },
      "transition": "none",
      "focus": ["curve-exact_curve", "curve-approximation_curve"],
      "scene": [
        "scene \"First-order contact at the center\";",
        "domain -1 1.5;",
        "range -0.5 5.5;",
        "fn exact(x) = exp(x);",
        "fn approximation(x) = 1+x;",
        "plot exact color blue as exact_curve;",
        "plot approximation color amber as approximation_curve;"
      ]
    },
    {
      "title": "Reconstruct the curvature coefficient",
      "body": "Continue the explicitly labelled reconstruction of coefficients shown in the worked example. Keep the value and slope already matched, add Cx², and derive C from second-derivative agreement before revealing the curves.",
      "question": "Differentiate twice. Why is the coefficient 1/2 forced rather than chosen by eye?",
      "checkpoint": {
        "hint": "The second derivative of Cx² is 2C. The earlier constant and linear terms contribute zero.",
        "explanation": "The second derivative of exp at zero is 1; the second derivative of 1+x+Cx² is 2C. Consequently C=1/2. The added term vanishes along with its first derivative at zero, so the earlier matches survive. Matching one more derivative improves the local approximation, but this calculation alone supplies no error bound over a whole interval.",
        "criteria": ["Derives 2C=1 and checks that the earlier matches survive.", "Separates local derivative matching from a global error guarantee."]
      },
      "transition": "transform",
      "focus": ["curve-approximation_curve"],
      "scene": [
        "scene \"Second-order contact\";",
        "domain -1 1.5;",
        "range -0.5 5.5;",
        "fn exact(x) = exp(x);",
        "fn approximation(x) = 1+x+x^2/2;",
        "plot exact color blue as exact_curve;",
        "plot approximation color amber as approximation_curve;"
      ]
    },
    {
      "title": "Measure a finite error",
      "body": "Use the cubic T₃(x)=1+x+x²/2+x³/6. Predict its error at b=0.8. After opening the diagram, move b to test how well your single calculation describes other inputs.",
      "question": "At b = 0.8, write the exact error exp(b)−T₃(b). Why does one measured segment fail to certify the whole interval?",
      "checkpoint": {
        "hint": "Express 0.8 as 4/5 if you want an exact rational value for the polynomial. A claim for every x has a different quantifier from a value at this b.",
        "explanation": "T₃(4/5)=827/375, so the exact error is exp(4/5)−827/375, approximately 0.0202076. The rose segment and readout measure this particular input. Even a very small error here cannot bound an untested point. An interval-wide certificate requires an inequality valid for every input, which is the next stage's task.",
        "criteria": ["Writes the exact difference, distinguishing it from a decimal approximation.", "Explains why one measured value cannot certify all inputs."]
      },
      "transition": "compare",
      "focus": ["curve-exact_curve", "curve-approximation_curve", "line-error"],
      "scene": [
        "scene \"A cubic and one witnessed error\";",
        "domain -1 1.5;",
        "range -0.5 5.5;",
        "param b = 0.8 from -1 to 1.5;",
        "fn exact(x) = exp(x);",
        "fn approximation(x) = 1+x+x^2/2+x^3/6;",
        "measure actual_error = exact(b)-approximation(b);",
        "plot exact color blue as exact_curve;",
        "plot approximation color amber as approximation_curve;",
        "point witness = (b,exact(b)) color rose;",
        "segment error from (b,approximation(b)) to (b,exact(b)) color rose;"
      ]
    },
    {
      "title": "Turn the remainder theorem into an envelope",
      "body": "Build an error envelope on [−1,1.5] using Taylor's remainder theorem. Decide which derivative to bound and why the sign remains the same on both sides of zero. Reveal the teal envelope after deriving your candidate.",
      "question": "Derive 0 ≤ exp(x)−T₃(x) ≤ exp(1.5)|x|⁴/24 on this interval, including the sign of the remainder.",
      "checkpoint": {
        "hint": "The Lagrange remainder has fourth derivative at a point between zero and x, multiplied by x⁴/4!. Check the sign of each factor.",
        "explanation": "For x ≠ 0, Taylor's theorem gives exp(x)−T₃(x)=exp(ξ)x⁴/24 for some ξ between 0 and x. Both factors are nonnegative, and ξ≤1.5 on this interval, so 0≤exp(x)−T₃(x)≤exp(1.5)|x|⁴/24. At x=0 the remainder is zero. Adding this bound to the cubic gives the teal certificate. The inequality proves the enclosure; finite sampling only draws it. A successful numerical check is not the theorem's hypothesis.",
        "criteria": ["Uses the fourth derivative and the correct factorial.", "Locates the intermediate point and bounds its derivative across the interval.", "Justifies the sign for negative as well as positive x."]
      },
      "transition": "reveal",
      "focus": ["curve-exact_curve", "curve-certificate"],
      "scene": [
        "scene \"A theorem-backed error envelope\";",
        "domain -1 1.5;",
        "range -0.5 5.5;",
        "param b = 0.8 from -1 to 1.5;",
        "fn exact(x) = exp(x);",
        "fn approximation(x) = 1+x+x^2/2+x^3/6;",
        "fn certificate(x) = approximation(x)+exp(1.5)*abs(x)^4/24;",
        "measure actual_error = exact(b)-approximation(b);",
        "measure certified_bound = exp(1.5)*abs(b)^4/24;",
        "plot exact color blue as exact_curve;",
        "plot approximation color amber as approximation_curve;",
        "plot certificate color teal;",
        "point witness = (b,exact(b)) color rose;",
        "segment error from (b,approximation(b)) to (b,exact(b)) color rose;"
      ]
    },
    {
      "title": "Move the center and rebuild the proof",
      "body": "Keep degree three but move the center to a=1. Rebuild the polynomial and its error estimate at the target 1.8. The diagram's controls let you change both center and target after making this comparison.",
      "question": "For a target x = 1.8, compare the distance factors when a = 0 and a = 1. Which derivative bound is valid on the new segment, and what certified error follows?",
      "checkpoint": {
        "hint": "For a=1 the relevant segment is [1,1.8]. Compare 0.8⁴ with 1.8⁴, keeping a valid fourth-derivative bound for each segment.",
        "explanation": "At a=1, T₃,a(x)=exp(1)[1+(x−1)+(x−1)²/2+(x−1)³/6]. On [1,1.8], the fourth derivative is at most exp(1.8), giving error at most exp(1.8)·0.8⁴/24, approximately 0.103247. Centering at zero permits the same derivative bound on [0,1.8] but uses 1.8⁴, giving approximately 2.64612. The certified bound is smaller by the factor (4/9)⁴. The actual error is different from either bound. For every permitted control pair a≤b, exp(b)|b−a|⁴/24 remains a valid certificate.",
        "criteria": ["Rebuilds the coefficients and uses distance from the new center.", "Chooses a derivative bound on the segment joining center to target.", "Distinguishes actual error from the certified upper bound."]
      },
      "transition": "camera",
      "focus": ["curve-exact_curve", "curve-approximation_curve", "line-error"],
      "scene": [
        "scene \"The same degree at a new center\";",
        "domain -0.5 2.5;",
        "range -2 14;",
        "param a = 1 from 0.5 to 1.5;",
        "param b = 1.8 from 1.5 to 2.2;",
        "let distance = b-a;",
        "let derivative_bound = exp(b);",
        "fn exact(x) = exp(x);",
        "fn approximation(x) = exp(a)*(1+(x-a)+(x-a)^2/2+(x-a)^3/6);",
        "measure actual_error = exact(b)-approximation(b);",
        "measure distance_factor = abs(distance)^4;",
        "measure certified_bound = derivative_bound*abs(distance)^4/24;",
        "plot exact color blue as exact_curve;",
        "plot approximation color amber as approximation_curve;",
        "point witness = (b,exact(b)) color rose;",
        "segment error from (b,approximation(b)) to (b,exact(b)) color rose;"
      ]
    }
  ]
}
```

## From approximation to equality

For any fixed real x, the exponential remainder at zero satisfies

|Rₙ(x)| ≤ e^|x| |x|^(n+1)/(n + 1)! → 0.

The convergence follows because the ratio of successive powers-over-factorials tends to zero. Therefore eˣ equals its Taylor series for every real x. For sine and cosine, all derivatives have magnitude at most one, giving the same conclusion with M = 1.

Useful representations are eˣ = ∑xⁿ/n!, sin x = ∑(−1)ⁿx^(2n+1)/(2n + 1)!, and cos x = ∑(−1)ⁿx^(2n)/(2n)!, all valid for every real x. These are mathematical identities because remainders vanish, not because the first few curves overlap.

### Visual laboratory: plot the error and its certificate

```mathviz
scene "An exponential error inside its Taylor envelope";
domain -1 1;
range -0.12 0.12;
param h = 0.8 from 0.1 to 1;
fn error(x) = exp(h*x)-(1+h*x+(h*x)^2/2+(h*x)^3/6);
fn bound(x) = exp(h)*(h*x)^4/24;
fn negativebound(x) = -bound(x);
plot error color blue;
plot bound color teal;
plot negativebound color rose;
```

**Predict.** Halving h should reduce the fourth-power factor by what amount?

**Explore.** Move h from one toward one-half. The horizontal variable represents u, and the approximation is evaluated at x = h u. The envelope uses eʰ to bound every fourth derivative on [−h, h].

**Explain.** The plot compares an observed error with a bound established separately. For the cubic exponential polynomial the actual error is nonnegative, even on the left of zero, because the fourth power and fourth derivative are positive.

**Transfer.** Find a sufficient h ensuring error below 0.001 throughout [−h, h]. Using eʰ < 3 for h ≤ 1, it suffices that h⁴/8 ≤ 0.001; h = 0.29 works.

## Worked example 3: integrate a function without an elementary antiderivative

To approximate I = ∫₀^(1/2) e^(−x²) dx, substitute −x² into the exponential series and integrate:

I = 1/2 − (1/2)³/3 + (1/2)⁵/10 − (1/2)⁷/42 + ⋯.

Termwise integration is justified on this closed interval because the exponential power series converges uniformly there. Keeping the first three terms gives 443/960 ≈ 0.4614583. The integrated magnitudes decrease, so the alternating remainder is at most (1/2)⁷/42 = 1/5376 ≈ 0.0001861. The next term is negative, so this approximation is an overestimate. A series turns an integration problem into arithmetic with a stated tolerance.

## A boundary of the method: smooth is not analytic

A function is **analytic at \(a\)** when it equals its Taylor series in some neighborhood of \(a\). Infinitely many derivatives do not guarantee this. Define \(f(0)=0\) and \(f(x)=e^{-1/x^2}\) for \(x\ne0\). Every derivative at zero is zero, yet \(f(x)>0\) off zero. Its Taylor series is identically zero and cannot represent it nearby.

The derivative claim needs a bound. Put \(t=1/|x|\). For any fixed integer \(k\), choose an integer \(M>k/2\). The positive exponential series gives \(e^{t^2}\ge t^{2M}/M!\), hence
\[
0\le t^k e^{-t^2}\le M!t^{k-2M}\longrightarrow0.
\]
Differentiating \(P(1/x)e^{-1/x^2}\) for \(x\ne0\) again gives a polynomial in \(1/x\) times the same exponential. Induction and the bound show that each derivative has limit zero at the origin; applying the difference quotient to the preceding derivative shows that its derivative *at* zero is zero. Thus every Taylor coefficient vanishes. The zero Taylor series converges everywhere, but it fails to equal \(f\) at every nonzero \(x\). Convergence of the series and equality to the function are separate claims: constructing coefficients does not establish \(R_n(x)\to0\).

## A finite coefficient method for a differential equation

Power series can also suggest an unknown solution. Suppose \(y'=y^2\) and \(y(0)=1\). If \(y=\sum_{n=0}^{\infty}a_nx^n\) converges near zero, equating coefficients in the product gives

\[
(n+1)a_{n+1}=\sum_{k=0}^{n}a_ka_{n-k},\qquad a_0=1.
\]

The first coefficients are \(a_1=1\), \(a_2=(1+1)/2=1\), and \(a_3=(1+1+1)/3=1\). Induction shows \(a_n=1\) for every \(n\): if the earlier coefficients are one, the right side has \(n+1\) terms, each one. The candidate is therefore \(\sum x^n=1/(1-x)\) for \(|x|<1\). Differentiate that *actual function* to verify \(y'=1/(1-x)^2=y^2\) and \(y(0)=1\). The coefficient calculation found a candidate; convergence and substitution verified it. The solution extends to \(x<-1\) even though its Taylor series centered at zero does not. It cannot pass through \(x=1\) as a finite classical solution.

**Try a changed initial condition.** For \(y(0)=c\), predict \(a_n=c^{n+1}\), use the recurrence to prove it, and identify when the resulting geometric series converges. The equilibrium \(c=0\) deserves a separate check. This connects a local representation to the maximal interval of an ODE solution.

```exercise
{"id":"calc-taylor-analyticity-counterexample","type":"written","prompt":"A learner computes all derivatives of a smooth function at zero and obtains zero. They conclude that the function must vanish near zero. Repair the reasoning using the function exp(−1/x²) for x≠0, with value zero at zero. State what extra limit is required for Taylor equality.","hints":["Bound t^k e^(−t²) with t=1/|x| using one positive term of the exponential series.","Distinguish the Taylor coefficients from the Taylor remainder at a fixed nonzero x."],"rubric":["Justifies that every derivative at zero is zero rather than only asserting flatness","Identifies the resulting Taylor series as zero","Notes that the function is positive at nonzero x","States that the Taylor remainder must tend to zero for equality"],"solution":"For each k, choose M>k/2. Since e^(t²)≥t^(2M)/M!, t^k e^(−t²)≤M!t^(k−2M)→0. Repeated derivatives away from zero are polynomial factors in 1/x times e^(−1/x²), so induction through difference quotients shows every derivative at zero vanishes. The Taylor series is therefore zero, but the function is positive at every nonzero x. Taylor equality would additionally require f(x)−T_n(x)→0 as n→∞ for each x in a neighborhood, which fails here."}
```

## Exercises

1. Find the radius and full interval of ∑ₙ₌₁∞ (x + 1)ⁿ/(n²·2ⁿ).
2. Find the radius and interval of ∑ₙ₌₀∞ n! xⁿ.
3. Construct T₃ for sin x at zero and approximate sin(0.2), with a certified error below 0.000003.
4. Find a power-series representation of x²/(1 + 2x), including its interval of convergence.
5. Differentiate ∑ₙ₌₁∞ xⁿ/n inside its radius. Compare the endpoint behavior before and after differentiation.
6. Use the geometric series to express ∫₀^(1/2) 1/(1 + x²) dx as an alternating series. Give a three-term approximation and an error bound.
7. A student argues that all derivatives existing implies a function equals its Taylor series. Identify the missing condition and a counterexample.
8. How large must n be for the exponential Taylor bound e/(n + 1)! < 0.0001 at x = 1? Use e < 3 to give a sufficient degree.
9. Explain why a Taylor polynomial can be evaluated outside a series' radius while the infinite representation fails there.

<details><summary>First hints: choose a method</summary>

1. Use a ratio, then p-series tests at both endpoints. 2. Look at consecutive terms for nonzero x. 3. The fourth-degree Taylor polynomial equals the third-degree one. 4. Substitute −2x into a geometric series. 5. Do not inherit the original endpoints automatically. 6. Integrate each even power. 7. Revisit the flat function. 8. Compare successive factorials with 30000. 9. Finite sums do not require convergence.

</details>

<details><summary>Second hints: set up the computation</summary>

1. The interior condition is |x + 1| < 2. 3. Use the fifth-derivative bound one. 6. The terms are (−1)ⁿ(1/2)^(2n+1)/(2n + 1). 8. 7! = 5040 and 8! = 40320.

</details>

<details><summary>Full solutions</summary>

1. The ratio limit is |x + 1|/2, so R = 2. At x = −3 and x = 1 the absolute-value series is ∑1/n², hence both endpoints converge absolutely. The interval is [−3, 1].
2. For x ≠ 0 the ratio is (n + 1)|x| → ∞, giving divergence. At zero only the constant term remains. Thus R = 0 and the convergence set is {0}.
3. T₃(x) = x − x³/6, giving 0.198666666…. Since the x⁴ coefficient is zero, this is also T₄. Taylor's theorem with fifth derivative cos x bounded by one gives error at most 0.2⁵/120 = 1/375000 < 0.000003.
4. x²/(1 + 2x) = ∑ₙ₌₀∞ (−2)ⁿx^(n+2), for |x| < 1/2. At each endpoint the terms have constant nonzero magnitude 1/4, so both diverge. The interval is (−1/2, 1/2).
5. Differentiation gives ∑ₙ₌₁∞ x^(n−1) = 1/(1 − x) on (−1, 1). The original series converges at −1 and diverges at 1. The derivative series diverges at both: its terms do not tend to zero there.
6. The integral is 1/2 − 1/24 + 1/160 − ⋯. Three terms give 223/480 ≈ 0.4645833. Alternating magnitudes decrease; the next term has magnitude (1/2)⁷/7 = 1/896. The remainder is negative, so the three-term value is an overestimate with error at most 1/896.
7. One must justify that the Taylor remainders tend to zero. The smooth function equal to exp(−1/x²) off zero and zero at zero has all Taylor coefficients zero while being positive away from the center.
8. It suffices to have 3/(n + 1)! < 0.0001, or (n + 1)! > 30000. Since 8! = 40320, n = 7 suffices; n = 6 does not satisfy this bound.
9. A polynomial involves finitely many defined arithmetic operations for every real x. An infinite series additionally requires convergence of its partial sums. The existence of each polynomial value does not imply those values approach a finite limit as degree grows.

</details>

## Recap and further study

A radius settles the interior and exterior; endpoints need their own arguments. Derivative matching constructs a polynomial; a remainder bound certifies its error. Equality with an infinite Taylor series requires those remainders to vanish. Carry these distinctions into [parametric and polar curves](parametric-polar.md), where choosing a useful representation again changes which computations become easy.

For additional lectures and exercises, see [MIT 18.01SC: Taylor Series](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-b-taylor-series/) and [OpenStax Calculus Volume 2, Chapter 6](https://openstax.org/books/calculus-volume-2/pages/6-introduction). The explanations and exercises here are independently written.
