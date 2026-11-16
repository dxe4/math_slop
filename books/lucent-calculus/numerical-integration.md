# 14. Numerical integration: an answer with an error budget

## Outcomes and preparation

After this chapter you should be able to construct midpoint, trapezoidal, and Simpson approximations; explain their different convergence rates; choose a subdivision count for a stated tolerance; and distinguish a mathematical error bound from agreement between two computations. You need definite integrals, the Fundamental Theorem of Calculus, second and fourth derivatives, and the local Taylor error bound introduced in [modelling and approximation](modelling.md). A full power-series treatment is not needed here; [Taylor series](taylor-series.md) develops the general theorem later. Allow two study sessions, with the experiments between them.

An integral can represent a quantity we need even when its antiderivative is unavailable. A sensor may give only sampled velocities, or a probability density may involve exp(−x²). Numerical integration turns samples into an estimate of accumulated change. The important question becomes: what assumptions justify the digits in that estimate?

## Three local models

Let f be continuous on [a,b], with a < b. Set h = (b−a)/n, xᵢ = a+ih, and mᵢ = (xᵢ₋₁+xᵢ)/2. Subdivide the interval into n equal cells. The midpoint rule replaces f on each cell by its height at the center:

Mₙ = h Σᵢ₌₁ⁿ f(mᵢ).

The trapezoidal rule joins the two endpoint values of each cell by a straight line. Its integral is width times average height, so

Tₙ = h[f(a)/2 + f(x₁) + ⋯ + f(xₙ₋₁) + f(b)/2].

Shared endpoints occur twice before the factor 1/2 is collected. These are signed integrals: rectangles or trapezoids below the axis contribute negatively. Neither formula requires f to be nonnegative.

If f is convex, its graph lies below each chord, so Tₙ ≥ ∫f. The average height over a symmetric cell is at least its midpoint height, so Mₙ ≤ ∫f. Concavity reverses these inequalities. When convexity changes across the interval, individual cell errors can cancel; a single global overestimate claim is then unjustified.

For Simpson's rule, n must be a positive even integer. Fit a quadratic through each consecutive group of three samples, covering two cells. Integrating that quadratic gives

Sₙ = (h/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ⋯ + 4f(xₙ₋₁) + f(xₙ)].

The alternating weights arise from integrating the interpolation polynomial; they are not decorative averaging choices. Equivalently, S₂ₙ = (Tₙ + 2Mₙ)/3. Notice the different subdivision indices. Simpson combines midpoint samples and endpoint samples on the same coarse partition, producing a grid with twice as many cells.

## Visual argument: from signed rectangles to a defensible error claim

```visual-story
{
  "id": "midpoint-error-and-smoothness",
  "title": "What refinement reveals—and what only a theorem certifies",
  "prompt": "For the midpoint rule on x² over [0,1], predict the sign and refinement rate of the error before increasing the number of rectangles.",
  "stages": [
    {
      "title": "Begin with two local constants",
      "body": "Use two equal cells on [0,1]. Calculate from the midpoint samples before revealing the rectangles; the diagram can illustrate a sign that the convexity argument must justify.",
      "question": "Compute M₂ exactly and compare it with 1/3. How does convexity explain the sign without using the exact integral first?",
      "checkpoint": {
        "hint": "The midpoints are 1/4 and 3/4, and each cell has width 1/2. For the sign, compare the midpoint height with the average height over a symmetric cell of a convex function.",
        "explanation": "The two midpoint samples are 1/16 and 9/16, so M₂=(1/2)(1/16+9/16)=5/16. Since ∫₀¹x² dx=1/3, the exact deficit is 1/3−5/16=1/48. Independently of already knowing 1/3, convexity says that on each symmetric cell the average function value is at least the value at the midpoint. Thus the midpoint rule underestimates. The sampled rectangles illustrate this theorem-based sign; they do not prove it by their appearance.",
        "criteria": [
          "I used the two midpoint samples and included the cell width.",
          "I obtained M₂=5/16 and the exact deficit 1/48.",
          "I justified the sign from convexity rather than pixels."
        ]
      },
      "transition": "none",
      "focus": ["curve-source_curve", "rectangle-area"],
      "scene": [
        "scene \"Two midpoint cells for a convex function\";",
        "domain 0 1;",
        "range -0.2 1.2;",
        "param n = 2 from 1 to 64;",
        "fn f(x) = x^2;",
        "measure exact_minus_midpoint = 1/(12*floor(n)^2);",
        "plot f color blue as source_curve;",
        "riemann f from 0 to 1 count floor(n) as area;"
      ]
    },
    {
      "title": "Double the resolution once",
      "body": "Now double the cell count while keeping the same interval and integrand. Compare exact rational errors before inferring a refinement pattern.",
      "question": "Compare the errors for n = 2 and n = 4. By what factor did the error change, and which calculation establishes that factor?",
      "checkpoint": {
        "hint": "With width 1/4, square the four midpoints 1/8, 3/8, 5/8, and 7/8. Put both deficits over a common denominator.",
        "explanation": "M₄=(1/4)(1+9+25+49)/64=21/64. Hence 1/3−M₄=1/192, whereas the two-cell deficit was 1/48=4/192. Doubling n has divided the error by four in this comparison. Exact arithmetic establishes that factor for these two grids; the diagram alone neither identifies the exponent nor proves the same law for every n.",
        "criteria": [
          "I obtained M₄=21/64 from all four midpoint samples.",
          "I compared 1/192 with 1/48 and found a factor of four.",
          "I did not treat one visual refinement as a proof of an n⁻² law."
        ]
      },
      "transition": "transform",
      "focus": ["curve-source_curve", "rectangle-area"],
      "scene": [
        "scene \"Four midpoint cells\";",
        "domain 0 1;",
        "range -0.2 1.2;",
        "param n = 4 from 1 to 64;",
        "fn f(x) = x^2;",
        "measure exact_minus_midpoint = 1/(12*floor(n)^2);",
        "plot f color blue as source_curve;",
        "riemann f from 0 to 1 count floor(n) as area;"
      ]
    },
    {
      "title": "Extract the refinement law",
      "body": "Replace the finite comparison by a calculation for an arbitrary positive integer n. The eight-cell rendering is only a test case for the formula you derive.",
      "question": "Derive a formula for Mₙ and its exact error from the sum of odd squares, then predict the exact error for n = 16 without rendering it.",
      "checkpoint": {
        "hint": "The ith midpoint is (2i−1)/(2n), so include one factor 1/n for the cell width. Use Σᵢ₌₁ⁿ(2i−1)²=n(4n²−1)/3.",
        "explanation": "The midpoint formula is Mₙ=(1/n)Σ[(2i−1)/(2n)]²=(1/(4n³))Σ(2i−1)². Since the odd-square sum is n(4n²−1)/3, Mₙ=(4n²−1)/(12n²)=1/3−1/(12n²). Therefore the exact deficit is 1/(12n²), and for n=16 it is 1/(12·256)=1/3072. This identity proves both the n⁻² rate and the factor-four change under doubling; small rendered gaps are not the proof.",
        "criteria": [
          "I included the width 1/n as well as the squared midpoint.",
          "I used the odd-square identity to obtain Mₙ=1/3−1/(12n²).",
          "I predicted the n=16 deficit as 1/3072 without reading pixels."
        ]
      },
      "transition": "transform",
      "focus": ["curve-source_curve", "rectangle-area"],
      "scene": [
        "scene \"The same construction at eight cells\";",
        "domain 0 1;",
        "range -0.2 1.2;",
        "param n = 8 from 1 to 64;",
        "fn f(x) = x^2;",
        "measure exact_minus_midpoint = 1/(12*floor(n)^2);",
        "plot f color blue as source_curve;",
        "riemann f from 0 to 1 count floor(n) as area;"
      ]
    },
    {
      "title": "Keep the error while changing the signed total",
      "body": "Change the integrand to x²−1 on the same interval. Track the exact integral and the midpoint approximation separately so a negative total is not mistaken for a negative error.",
      "question": "Compute the signed integral and M₈ for x²−1. Why is the approximation error unchanged rather than shifted by one?",
      "checkpoint": {
        "hint": "Both integration and the midpoint rule are linear. Start from the x² values at n=8, then subtract the integral and midpoint sum of the constant function 1.",
        "explanation": "The signed integral is ∫₀¹(x²−1)dx=1/3−1=−2/3. From the general formula, M₈(x²)=1/3−1/768=85/256, so M₈(x²−1)=85/256−1=−171/256. Thus M₈−∫f=−171/256+2/3=−1/768, exactly the same approximation-minus-integral error as for x². Subtracting 1 changes both linear functionals by 1; it does not change their difference.",
        "criteria": [
          "I distinguished the signed total −2/3 from the approximation error.",
          "I obtained M₈=−171/256 and M₈−∫f=−1/768.",
          "I used linearity to explain why the constant shift cancels from the error."
        ]
      },
      "transition": "camera",
      "focus": ["curve-source_curve", "rectangle-area"],
      "scene": [
        "scene \"Signed midpoint contributions\";",
        "domain 0 1;",
        "range -1.2 0.2;",
        "param n = 8 from 1 to 64;",
        "fn f(x) = x^2-1;",
        "measure exact_minus_midpoint = 1/(12*floor(n)^2);",
        "plot f color blue as source_curve;",
        "riemann f from 0 to 1 count floor(n) as area;"
      ]
    },
    {
      "title": "Change the hypothesis, not only the formula",
      "body": "Finally use sqrt(x) on [0,1]. Decide which conclusions need only continuity or concavity and which require the stronger smoothness hypothesis of the error theorem.",
      "question": "Explain separately why the sums converge, why Mₙ−∫f is positive, and why the K₂/(24n²) theorem is unavailable.",
      "checkpoint": {
        "hint": "Use three different facts: continuity on a compact interval, concavity of sqrt(x), and the behavior of f″(x)=−1/(4x^(3/2)) near zero.",
        "explanation": "Because sqrt(x) is continuous on [0,1], its midpoint sums are Riemann sums and converge to the integral. The function is strictly concave: on every nondegenerate symmetric cell its midpoint height is strictly greater than the average height. Summing those strict cell inequalities gives Mₙ−∫₀¹sqrt(x)dx>0. Ordinary non-strict concavity would justify only ≥0. But f″(x)=−1/(4x^(3/2)) for x>0 is unbounded as x→0⁺, and sqrt(x) is not C² on the closed interval. Therefore the stated bounded-second-derivative certificate cannot be used. Failure of that certificate does not imply failure of convergence or of the strict-concavity sign argument.",
        "criteria": [
          "I used continuity, not second derivatives, to justify convergence.",
          "I used strict concavity to justify a strictly positive overestimate.",
          "I identified the unbounded second derivative as the failed C² hypothesis.",
          "I did not infer divergence from the theorem being unavailable."
        ]
      },
      "transition": "transform",
      "focus": ["curve-source_curve", "rectangle-area"],
      "scene": [
        "scene \"A convergent rule outside the smooth error theorem\";",
        "domain 0 1;",
        "range -0.2 1.2;",
        "param n = 8 from 1 to 64;",
        "fn f(x) = sqrt(x);",
        "measure first_midpoint = 1/(2*floor(n));",
        "plot f color blue as source_curve;",
        "riemann f from 0 to 1 count floor(n) as area;"
      ]
    }
  ]
}
```

## Why smoothness buys accuracy

On a cell centered at m, write x = m+u. Taylor's formula begins with f(m)+f′(m)u. The odd linear term integrates to zero over symmetric limits. If |f″| ≤ K₂, the remaining pointwise error is at most K₂u²/2. Integrating from −h/2 to h/2 gives a midpoint cell error at most K₂h³/24. Adding n cells yields the first bound below.

For f ∈ C²([a,b]) and |f″(x)| ≤ K₂ everywhere,

|∫ₐᵇ f − Mₙ| ≤ K₂(b−a)³/(24n²),

|∫ₐᵇ f − Tₙ| ≤ K₂(b−a)³/(12n²).

For the trapezoidal bound, linear interpolation has error bounded by K₂(x−xᵢ₋₁)(xᵢ−x)/2 on a cell; its integral is K₂h³/12. This also explains why midpoint has the smaller worst-case constant for the same cell count.

For f ∈ C⁴([a,b]), |f⁽⁴⁾(x)| ≤ K₄ everywhere, and even n,

|∫ₐᵇ f − Sₙ| ≤ K₄(b−a)⁵/(180n⁴).

The fourth derivative controls Simpson's error because the rule is exact for every cubic polynomial. A symmetric cubic's odd part integrates to zero and its even part has degree at most two. A fourth-order remainder argument produces the displayed constant. The rigorous Simpson remainder theorem, rather than merely fitting a visually close parabola, supplies the guarantee.

These are sufficient bounds, usually larger than the actual error. The symbols C² and C⁴ mean that the indicated derivatives exist and are continuous on the closed interval, with endpoint derivatives interpreted one-sided. A discontinuity or singularity requires a different argument or a split interval.

## Worked example 1: a complete comparison

Approximate I = ∫₀¹ x² dx = 1/3 using four cells, h = 1/4. Midpoints are 1/8, 3/8, 5/8, and 7/8, giving

M₄ = (1/4)(1+9+25+49)/64 = 21/64.

For trapezoids, the interior values are 1/16, 1/4, and 9/16:

T₄ = (1/4)(1/16+1/4+9/16+1/2) = 11/32.

Thus I−M₄ = 1/192 and T₄−I = 1/96. With K₂ = 2, both theoretical bounds are attained. Simpson gives

S₄ = (1/12)[0+4/16+2/4+36/16+1] = 1/3.

Its exactness follows independently from f⁽⁴⁾ = 0. A zero error bound here is a proof in exact arithmetic, not a claim that every computer implementation returns the exact rational number.

## Experiment 2: chords and fitted parabolas

```mathviz
scene "Local models for a quartic";
domain 0 2;
range -1 8;
param c = 1 from 0.5 to 1.5;
param h = 0.4 from 0.05 to 0.45;
fn f(x) = x^4;
fn chord(x) = f(c-h)+(x-c+h)*(f(c+h)-f(c-h))/(2*h);
fn quad(x) = f(c)+(f(c+h)-f(c-h))*(x-c)/(2*h)+(f(c-h)-2*f(c)+f(c+h))*(x-c)^2/(2*h^2);
plot f color blue;
plot chord color amber;
plot quad color teal;
```

**Predict.** Which approximation is exact at the center c? Which one stays above the convex graph throughout [c−h,c+h]?

**Explore.** Decrease h with c fixed. Compare only the indicated cell [c−h,c+h]; the displayed extensions outside it are not additional interpolation cells. Edit x^4 to x^3, then x^2.

**Explain.** The quadratic fit need not coincide with a cubic graph, yet its integral over this symmetric cell is exact for cubics. Separate pointwise agreement from agreement of integrals.

**Transfer.** Use f(x) = exp(x), and explain why moving c right increases the necessary derivative bounds. An equally narrow cell need not have equally small error in different regions.

## Worked example 2: design for a tolerance

Require absolute quadrature error at most 10⁻⁴ for ∫₀¹ eˣ dx. Both |f″| and |f⁽⁴⁾| are bounded by e. The three sufficient inequalities are

n ≥ √(e/(24·10⁻⁴)) ≈ 33.66 for midpoint,

n ≥ √(e/(12·10⁻⁴)) ≈ 47.60 for trapezoids,

n ≥ [e/(180·10⁻⁴)]¹ᐟ⁴ ≈ 3.51 for Simpson.

Choose n = 34, 48, and 4 respectively. Always round up, and then enforce Simpson's evenness. For example, a Simpson threshold of 4.2 would require 6, not 5. Here S₄ ≈ 1.718318842; its actual error from e−1 is about 0.0000370, below the bound e/46080 ≈ 0.0000590. The bound allows choosing n before knowing the integral.

## Error budgets in a computer

The absolute error is |estimate−I|; relative error is that quantity divided by |I| when I ≠ 0. Near a zero integral, a small absolute error can have an enormous relative error. State which tolerance matters before choosing a method.

Quadrature bounds assume exact samples and arithmetic. Floating-point rounding, inaccurate measurements, and subtracting nearly equal contributions introduce additional errors. If every sampled height has error at most η, these three rules, whose positive weights total b−a, acquire at most (b−a)η from sample uncertainty. Budget this separately. More cells cannot remove measurement bias.

Doubling n and comparing answers is a useful diagnostic. When the leading error really behaves as Cn⁻ᵖ, the finer-grid error is approximately |Q₂ₙ−Qₙ|/(2ᵖ−1), with p = 2 or 4. This is an estimate, not a certificate: missed narrow peaks can make two wrong answers agree. Adaptive quadrature refines difficult regions, but still needs mathematical care near singularities and oscillations.

The error theorems begin with a **proper integral of a sufficiently smooth function on the whole closed interval**. A finite sum of \(1/x\) on \([-1,1]\) can look small when symmetric samples cancel, but the ordinary improper integral fails to exist. No \(K_2\) or \(K_4\) from this chapter applies across zero. Check the domain and split singular endpoints into separate limits before quoting a tolerance. The [cumulative examination](calculus-i-ii-exam.md) asks you to certify a midpoint computation for a smooth non-elementary integrand, so the assumptions matter as much as the selected cell count.

## Exercises

1. Prove that midpoint and trapezoidal rules integrate every affine function exactly, for every n.
2. Compute M₄, T₄, and S₄ for ∫₀² x² dx. Give the signed errors.
3. Find a sufficient even n for Simpson error at most 10⁻⁶ for ∫₀¹ eˣ dx.
4. Calculate S₂ for ∫₀¹ x⁴ dx. Compare its actual error with the fourth-derivative bound.
5. A student applies K₂ = 1 to sqrt(x) on [0,1]. Identify the precise failed hypothesis. Does the failure imply divergent midpoint sums?
6. Suppose M₁₀ = 2.140 and M₂₀ = 2.155. Assuming a leading n⁻² error, estimate the finer error and a corrected integral. Explain why neither is certified.
7. Measurements of a rate on [0,12] have absolute error at most 0.02. Bound their contribution to a trapezoidal integral error. Can arbitrarily many subdivisions ensure total error below 0.1?
8. Construct a continuous nonnegative function on [0,1] that vanishes at 0, 1/2, and 1 but has positive integral. What does Simpson's rule with two cells report?

<details><summary>Hints</summary>

1. Integrate αx+β over one cell. 2. Substitute x = 2u and scale the first worked example. 3. Solve e/(180n⁴) ≤ 10⁻⁶. 4. Use f⁽⁴⁾ = 24. 5. Differentiate twice. 6. The difference is three times the finer leading error. 7. Sum the positive quadrature weights. 8. A product of squared factors has the required zeros.

</details>

<details><summary>Full solutions</summary>

1. On [u,v], the integral is (v−u)[α(u+v)/2+β]. The midpoint height and average endpoint height both equal the expression in square brackets. Each cell is exact, hence their sum is exact.
2. Every approximation scales by 2³ = 8: M₄ = 21/8, T₄ = 11/4, and S₄ = 8/3. Approximation minus integral is −1/24, 1/12, and 0 respectively.
3. The threshold is [e/(180·10⁻⁶)]¹ᐟ⁴ ≈ 11.09. The smallest even integer meeting this sufficient bound is 12. This is not a proof that smaller n actually fails the tolerance.
4. S₂ = (1/6)[0+4(1/16)+1] = 5/24. The integral is 1/5; error is 1/120. The bound 24/(180·2⁴) = 1/120 agrees exactly.
5. f″(x) = −1/(4x³ᐟ²) for x > 0; it is unbounded near zero. There is no finite K₂ on [0,1], and f is not C² there. Continuity still guarantees convergence of its midpoint Riemann sums.
6. The difference is 0.015. The finer leading error magnitude is 0.015/3 = 0.005. Since the estimates increase toward the predicted limit, Richardson correction gives 2.155+0.005 = 2.160. Higher-order terms or unresolved structure may invalidate the assumed model.
7. The uncertainty contribution is at most 12·0.02 = 0.24. A systematic +0.02 bias attains this value regardless of cell count. Therefore no subdivision count alone guarantees a total error below 0.1 under the stated information.
8. Take f(x) = x²(x−1/2)²(x−1)². It is continuous, nonnegative, and positive away from its three zeros, so its integral is positive. S₂ samples only those zeros and returns zero. Scaling f by any positive constant makes the missed integral arbitrarily large; the three samples alone cannot certify accuracy.

</details>

## Further study

For a parallel university treatment and exercises, see [MIT 18.01SC, definite integrals and numerical integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-3-the-definite-integral-and-its-applications/). The standard rule statements and error bounds can also be compared with [OpenStax Calculus Volume 2, §3.6](https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration). This chapter's experiments and exercise sequence are original.
