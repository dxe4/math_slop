# Double integrals: describe the region before integrating

## Learning goals

Construct a double integral from small contributions; evaluate iterated integrals on rectangles and simple regions; change integration order by describing the same region twice; explain the area factor in polar coordinates.

**Prerequisites:** definite integrals, the Fundamental Theorem of Calculus, inequalities, and elementary vector geometry. Allow two study sessions, a recitation, and independent practice. This begins the multiple-integration part of Calculus III; later lessons develop triple integrals, paths, surfaces, and boundary theorems.

## From local measurements to a total

Imagine a thin plate occupying a region \(D\) in the plane. Its density \(\rho(x,y)\) is mass per unit area. Multiplying density by a small area's size approximates the mass in that piece. Adding those contributions gives an approximate total. Unlike a single integral, the pieces now spread in two independent directions.

First let \(D=[a,b]\times[c,d]\). Partition both intervals. The cells have areas \(\Delta A_{ij}=\Delta x_i\Delta y_j\). Choose a sample point \((\xi_{ij},\eta_{ij})\) inside each cell and form

$$\sum_i\sum_j f(\xi_{ij},\eta_{ij})\,\Delta x_i\Delta y_j.$$

If these sums approach the same finite value for every choice of sample points as the largest cell diameter tends to zero, that value is the **double Riemann integral**, written \(\iint_Df(x,y)\,dA\). Refining only one direction is insufficient: long, thin cells might still miss variation along their long side.

For continuous \(f\) on a closed rectangle, this limit exists. The reason mirrors the one-dimensional argument: uniform continuity makes the variation within every sufficiently small cell uniformly small, so upper and lower sums differ by at most that variation times the rectangle's area.

If \(f\geq0\) represents height, the integral gives volume. If \(f\) is signed, positive and negative contributions cancel. If \(f=1\), the integral gives area. When \(D\) has positive area, the average value is

$$f_{\mathrm{average}}=\frac{1}{\operatorname{area}(D)}\iint_D f\,dA.$$

Units are a useful check. A density measured in kilograms per square metre, multiplied by dA in square metres, yields kilograms.

## Slicing and Fubini's theorem

For continuous \(f\) on \([a,b]\times[c,d]\), **Fubini's theorem** gives

$$\iint_D f\,dA=\int_a^b\left[\int_c^d f(x,y)\,dy\right]dx=\int_c^d\left[\int_a^b f(x,y)\,dx\right]dy.$$

The inner integral holds the other variable fixed. Its result is a function of that remaining variable, which the outer integral then accumulates. This theorem connects a genuinely two-dimensional limit to familiar one-dimensional calculations. Continuity is a convenient sufficient hypothesis, not a necessary one. More general versions exist, but changing order for singular or improper integrals requires additional justification.

For a bounded region enclosed by finitely many smooth arcs, extend a continuous integrand by zero outside the region. The boundary has area zero, and the resulting bounded function is Riemann integrable on a surrounding rectangle. Slice descriptions then give the iterated formulas used below. This argument does **not** cover every imaginable region or an unbounded integrand. A finite picture of a pole never justifies swapping improper integrals. A change of order is a theorem application with a domain and integrability check, not a typographic rearrangement.

### Worked example 1: a plate with changing density

On \(D=[0,2]\times[0,1]\), take \(\rho(x,y)=x+2y\). Integrating across x first gives the mass per unit y:

$$S(y)=\int_0^2(x+2y)\,dx=\left[\frac{x^2}{2}+2yx\right]_0^2=2+4y.$$

The total mass is \(\int_0^1(2+4y)\,dy=4\). Reversing order gives \(\int_0^2[xy+y^2]_0^1\,dx=\int_0^2(x+1)\,dx=4\). Since the area is 2, average density is 2. Notice that \(\int 2y\,dx=2yx+C\): \(y\) acts as a constant during that particular integration.

```mathviz
scene "A density slice at y = s";
domain 0 2.2;
range 0 4.5;
param s = 0.5 from 0 to 1;
param n = 8 from 2 to 32;
fn density(x) = x + 2*s;
plot density color teal;
riemann density from 0 to 2 count n;
```

**Predict:** As s moves from 0 to 1, how much will the area under this slice increase?

**Explore:** Move s and increase the integer rectangle count n. This is a graph of density against x at the selected y-value; it is not a picture of the plate's boundary.

**Explain:** The slice rises by 2 across a width of 2, so its integral increases by 4. Midpoint sums happen to integrate this affine slice exactly, even with few rectangles. That accuracy does not generalize to curved slices.

**Transfer:** Edit the density to `x^2 + 2*s`. Derive the new slice integral and total mass before comparing rectangle counts. Your answer should distinguish numerical evidence from exact calculation.

## Curved boundaries: describe the region first

A vertically simple region has the description

$$D=\{(x,y):a\leq x\leq b,\;g(x)\leq y\leq h(x)\}.$$

For continuous \(g,h\) with \(g\leq h\) and continuous \(f\) on this closed bounded region,

$$\iint_D f\,dA=\int_a^b\left[\int_{g(x)}^{h(x)}f(x,y)\,dy\right]dx.$$

At each fixed x, the inner integral traverses one vertical segment. A horizontally simple region instead uses \(c\leq y\leq d\) and \(p(y)\leq x\leq q(y)\). Some regions require splitting into several simple pieces; choosing the other direction may avoid that split.

### Worked example 2: reverse the order

Let \(D\) satisfy \(0\leq x\leq1\) and \(x^2\leq y\leq x\). We want \(\iint_Dx\,dA\). Directly,

$$\int_0^1\left[\int_{x^2}^{x}x\,dy\right]dx=\int_0^1(x^2-x^3)\,dx=\frac13-\frac14=\frac1{12}.$$

To reverse order, solve the inequalities for x. Because \(x\) is nonnegative, \(x^2\leq y\) means \(x\leq\sqrt y\). Meanwhile \(y\leq x\) means \(x\geq y\). The total \(y\)-range is \([0,1]\). Therefore

$$\int_0^1\left[\int_y^{\sqrt y}x\,dx\right]dy=\frac12\int_0^1(y-y^2)\,dy=\frac1{12}.$$

The region has not changed. Its description and the order of accumulation have changed. Replacing `dy dx` with `dx dy` while keeping the original bounds would describe a different calculation.

```mathviz
scene "Vertical and horizontal slices of the same region";
domain -0.1 1.1;
range -0.1 1.1;
coordinates equal;
param a = 0.45 from 0 to 1;
param b = 0.45 from 0 to 1;
fn lower(x) = x^2;
fn upper(x) = x;
plot lower color blue;
plot upper color teal;
segment vertical from (a,a^2) to (a,a) color amber;
segment horizontal from (b,b) to (sqrt(b),b) color rose;
```

**Predict:** Which slice is longest halfway through its own sweep? Do vertical and horizontal lengths reach their maxima at the same parameter value?

**Explore:** Move a and b independently. Follow each segment's endpoints back to the boundary equations.

**Explain:** Vertical length is a − a², maximal at a = 1/2. Horizontal length is √b − b, maximal at b = 1/4. Both maxima equal 1/4, but they occur at different coordinates.

**Transfer:** Integrate each slice-length formula to find the area. Then explain why the density x from the worked example requires more than multiplying each horizontal length by its left endpoint.

## Polar coordinates change area as well as position

For circular regions, substitute \(x=r\cos\theta\), \(y=r\sin\theta\), with \(r\geq0\). A small polar cell has radial thickness \(\Delta r\) and angular width \(\Delta\theta\). Its exact annular-sector area is

$$\frac12[(r+\Delta r)^2-r^2]\Delta\theta=\left(r\Delta r+\frac12(\Delta r)^2\right)\Delta\theta.$$

The leading contribution is \(r\Delta r\Delta\theta\): tangential width is approximately \(r\Delta\theta\), not \(\Delta\theta\). This gives **\(dA=r\,dr\,d\theta\)**. The same factor follows from the determinant of the coordinate derivative matrix:

$$\det\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix}=r.$$

Area scaling uses the absolute determinant; here r is nonnegative. The coordinate map becomes singular at r = 0, but the origin has zero area and does not invalidate ordinary disk integrals. Choose angular bounds that cover the region once, apart from boundary overlaps of zero area.

### Investigate a patch, then transform an ellipse

Before moving the controls, predict the exact area of a finite polar cell with radius in \(r\leq s\leq r+\Delta r\) and angle in \(\theta\leq t\leq\theta+\Delta\theta\). Predict how its first-order area changes when the cell moves from \(r=1\) to \(r=3\). Record the prediction, then compare exact sector area with the determinant readout. The arrows represent radial and angular edge directions of the **local derivative**; a finite sector has curved edges, so the two areas differ at finite \(\Delta r\).

```investigation
polar-patch
```

The coordinate columns are \(\partial_r T=(\cos\theta,\sin\theta)\) and \(\partial_\theta T=(-r\sin\theta,r\cos\theta)\). Their determinant is \(r\). Exact sector area is \((r\Delta r+\Delta r^2/2)\Delta\theta\), so the correction to linearized area is \(\Delta r^2\Delta\theta/2\). At \(r=0\), the derivative loses rank; the finite sector still has area \(\Delta r^2\Delta\theta/2\). The origin is a boundary set of area zero, which is why ordinary disk integration remains possible.

For an ellipse, use \(T(r,\theta)=(a r\cos\theta,b r\sin\theta)\), \(a,b>0\). Its columns are \((a\cos\theta,b\sin\theta)\) and \((-ar\sin\theta,br\cos\theta)\), with determinant \(ab r\). The ellipse \(x^2/a^2+y^2/b^2\leq1\) is the image of \(0\leq r\leq1\), \(0\leq\theta<2\pi\). Thus its area is \(\int_0^{2\pi}\int_0^1 ab r\,dr\,d\theta=\pi ab\). The change-of-variables theorem sums local area factors over a region where the map is one-to-one except for harmless boundary overlaps. A determinant alone never supplies the transformed **bounds**.

```exercise
{"id":"calc3-polar-patch","type":"written","prompt":"For an elliptical patch with a=2 and b=1, derive both derivative columns and its local area factor. Why does exact finite sector area differ from the derivative prediction? Then find the average of x²/4+y² over the ellipse.","hints":["Differentiate the coordinate map with respect to r and theta separately; use the absolute determinant.","The requested average becomes the average of r² over the unit disk, with area weight r."],"rubric":["Gives columns (2 cos θ,sin θ) and (−2r sin θ,r cos θ)","Computes absolute determinant 2r, including its vanishing at r=0","Identifies finite-sector correction Δr²Δθ/2 before elliptical scaling","Computes transformed integral and divides by ellipse area to obtain 1/2"],"solution":"The determinant of the displayed columns is 2r. A finite annular sector has area (rΔr+Δr²/2)Δθ; the ellipse scaling multiplies all planar areas by 2, so the extra term is Δr²Δθ. The numerator is ∫₀²π∫₀¹ r²(2r)drdθ=π; the ellipse area is 2π. The average is 1/2. The local derivative gives the leading term as Δr tends to zero, not exact area for a finite curved cell."}
```

```mathviz
scene "Why a polar cell needs the factor r";
domain -0.15 2.6;
range -0.15 2.6;
coordinates equal;
param r = 1 from 0.3 to 2;
param h = 0.25 from 0.04 to 0.5;
param t = 0.6 from 0.12 to 1.2;
parametric inner(x) = (r*cos(x),r*sin(x)) from 0 to t color teal;
parametric outer(x) = ((r+h)*cos(x),(r+h)*sin(x)) from 0 to t color blue;
segment start from (r,0) to (r+h,0) color amber;
segment finish from (r*cos(t),r*sin(t)) to ((r+h)*cos(t),(r+h)*sin(t)) color amber;
```

**Predict:** Keeping h and t fixed, will doubling r double the exact cell area?

**Explore:** Compare two radii, then reduce h. Observe how the curved cell approaches a thin strip.

**Explain:** Exact area is (rh + h²/2)t. Doubling r doubles the leading term but not the correction. The approximation rht has relative error h/(2r + h), which tends to zero as h tends to zero for fixed positive r.

**Transfer:** Hold r and h fixed and double t within its allowed range. Explain why exact area now doubles, even though the cell is not rectangular.

### Worked example 3: density on a disk

On the disk \(x^2+y^2\leq R^2\), let density be \(1+x^2+y^2\). The transformed density is \(1+r^2\), while the area factor contributes another \(r\). Thus

$$M=\int_0^{2\pi}\left[\int_0^R(1+r^2)r\,dr\right]d\theta=2\pi\left(\frac{R^2}{2}+\frac{R^4}{4}\right)=\pi R^2+\frac{\pi R^4}{2}.$$

Dividing by \(\pi R^2\) gives average density \(1+R^2/2\) for \(R>0\). This lies between the minimum 1 and maximum 1 + R², a useful check. Omitting the factor r fails both the area interpretation and the scaling check.

## Common mistakes

- Integrating the wrong variable. Read the inner differential first and hold every other variable fixed.
- Treating a boundary curve as the integration region. A double integral accumulates over the filled region between boundaries.
- Swapping bounds mechanically. Redraw or redescribe horizontal and vertical slices.
- Substituting polar expressions into f but forgetting the area factor or the new bounds.
- Assuming a visual match establishes Fubini's hypotheses. State continuity or the appropriate stronger theory explicitly.

## Exercises

1. Explain why refining x alone does not define a double Riemann integral. Give a continuous integrand that exposes the problem on the unit square.
2. Evaluate ∬ᴅ (3x + y) dA for D = [0, 2] × [0, 1] in both orders.
3. Complete the first scene's transfer task: find the total for density x² + 2y on that rectangle.
4. For the curved region in example 2, calculate its area and its average y-coordinate.
5. Reverse ∫₀¹ [∫ from x to 1 of exp(y²) dy] dx and evaluate it exactly.
6. Find the area of 1 ≤ r ≤ 3, 0 ≤ θ ≤ π/3 by a double integral.
7. Find the average of x² + y² on a disk of radius R > 0. Explain its scaling when R doubles.
8. A student writes the unit disk's area as ∫ from 0 to 2π [∫₀¹ 1 dr] dθ = 2π. Diagnose and repair the argument.
9. Build a scene showing slices for 0 ≤ x ≤ 1, x³ ≤ y ≤ x. Derive the reversed bounds and check the area in both orders.

<details><summary>Hints</summary>

1. Try f(x, y) = y with one unsplit y-interval and different sample heights.
2. Inner antiderivatives treat the other variable as constant.
3. Integrate x² over [0, 2] first.
4. Average y means ∬ᴅ y dA divided by area(D).
5. The triangle is 0 ≤ x ≤ y ≤ 1. Integrating in x first removes the difficult inner antiderivative.
6. Use r dr dθ, even though the integrand is 1.
7. The polar integrand including area scaling is r³.
8. Compare angular width with tangential length.
9. Solve x³ ≤ y for nonnegative x.

</details>

<details><summary>Full solutions</summary>

1. With one y-cell, samples all at y = 0 give sum 0 for f = y; samples all at y = 1 give sum 1, however finely x is divided. Cell diameters never tend to zero. Refinement in both directions forces the correct value 1/2.
2. Integrating in y gives ∫₀² (3x + 1/2) dx = 6 + 1 = 7. Integrating in x gives ∫₀¹ (6 + 2y) dy = 7.
3. The slice integral is 8/3 + 4y. Its integral over [0, 1] is 8/3 + 2 = 14/3.
4. Area is ∫₀¹ (x − x²) dx = 1/6. The y-moment is ∫₀¹ (x² − x⁴)/2 dx = (1/2)(1/3 − 1/5) = 1/15. Average y is (1/15)/(1/6) = 2/5.
5. The reversed integral is ∫₀¹ ∫₀ʸ exp(y²) dx dy = ∫₀¹ y exp(y²) dy = (e − 1)/2, using u = y². The integrand is continuous on the closed triangle, so changing order is justified.
6. Area is ∫₀^(π/3) [r²/2]₁³ dθ = ∫₀^(π/3) 4 dθ = 4π/3.
7. The integral is 2π∫₀ᴿ r³ dr = πR⁴/2. Divide by πR² to get R²/2. Doubling R multiplies this average by four because the measured quantity is squared distance.
8. The omitted Jacobian factor is r. Correctly, ∫ from 0 to 2π [∫₀¹ r dr] dθ = 2π·1/2 = π. Angular increments are not Cartesian lengths.
9. Change the first boundary function to `x^3` and the vertical lower endpoint to `(a,a^3)`. Change the horizontal right endpoint to `(b^(1/3),b)`. The reversed region is 0 ≤ y ≤ 1, y ≤ x ≤ y^(1/3). Vertical integration gives 1/2 − 1/4 = 1/4; horizontal integration gives 3/4 − 1/2 = 1/4. Both compute the same area.

</details>

## Further study

The scope follows the university-level sequence of rectangular regions, general regions, and polar integration in [OpenStax Calculus Volume 3, sections 5.1–5.3](https://openstax.org/books/calculus-volume-3/pages/5-1-double-integrals-over-rectangular-regions). Consult its [general-region treatment](https://openstax.org/books/calculus-volume-3/pages/5-2-double-integrals-over-general-regions) and [polar-coordinate treatment](https://openstax.org/books/calculus-volume-3/pages/5-3-double-integrals-in-polar-coordinates) for additional practice. The explanations, examples, and exercises here are original.

## Optional clinic: a singular corner and the order of limits

This is an optional untimed session. Its duration and written-response assessment are uncalibrated; it sits outside the published route budget and leaves all preceding practice unchanged. Use the polar Jacobian and the earlier two-variable limit criterion to decide which limiting integral a calculation actually defines.

The main kernel and the comparison of its two iterated integrals are adapted from Jiří Lebl's author-hosted [*Basic Analysis II*, Exercise 10.2.6](https://www.jirka.org/ra/html/sec_iteratedints.html). Lebl makes the work available under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) as one of its [author-declared licence options](https://www.jirka.org/ra/#license). This adapted optional clinic, from this heading to the end of the chapter, is offered under CC BY-SA 4.0, as an exception to Lucent's MIT content licence. The proper-cutoff derivations, finite error decisions, ray analysis and changed tasks below are additions developed here; the notebook code retains its MIT licence. The example extends the earlier warning: continuity on every clipped rectangle does not itself authorize passing to an unbounded singular-domain integral.

A **proper cutoff integral** below means an ordinary integral on a bounded piecewise smooth region whose compact closure stays a positive distance from the origin; the integrand is continuous on that closure. Including or removing the finitely many boundary arcs does not change the integral, since they have area zero. We compute those integrals before taking limits. A **joint rectangular limit** would require the same value whenever both positive lower cutoffs tend to zero independently. Choosing equal cutoffs describes just one path. Taking one cutoff limit while holding the other fixed, and only then removing the second, describes a successive limit.

### Saved investigation: proper integration before limiting

Predict and write an explanation before revealing each diagram and checkpoint. The sliders show a finite positive-cutoff window; the written proofs establish the behavior arbitrarily near zero.

```visual-story
{
  "id": "singular-corner-cutoffs",
  "title": "Which limiting integral are we computing?",
  "prompt": "Work first on proper clipped rectangles. Then distinguish the two iterated limits, a symmetric cutoff, and a joint limit before invoking an integration-order theorem.",
  "stages": [
    {
      "title": "Keep the cutoff integral proper",
      "body": "Let \\(S=[0,1]^2\\) and\n\\[\nf(x,y)=\\frac{x^2-y^2}{(x^2+y^2)^2}\n\\]\naway from the origin. For positive \\(a,b\\le1\\), use the proper rectangle \\(R_{a,b}=[a,1]\\times[b,1]\\). The teal and rose triangles mark the sign of the formula; the amber rectangle is retained. The origin marks the singular corner, not a sampled function value.",
      "question": "On this fixed positive-cutoff rectangle, may you change integration order? Derive its integral in both orders using ordinary antiderivatives. Which step would become an additional limiting question if the cutoffs approached zero?",
      "checkpoint": {
        "hint": "Differentiate \\(y/(x^2+y^2)\\) with respect to \\(y\\), and \\(-x/(x^2+y^2)\\) with respect to \\(x\\). The integrand is continuous on this compact rectangle.",
        "explanation": "Every fixed \\(R_{a,b}\\) avoids the origin, so the integrand is continuous and bounded there. The ordinary Fubini theorem applies. The inner antiderivatives give\n\\[\n\\begin{gathered}\n\\int_b^1 f(x,y)\\,dy\\\\\n=\\frac1{1+x^2}-\\frac b{x^2+b^2},\\\\\n\\int_a^1 f(x,y)\\,dx\\\\\n=-\\frac1{1+y^2}+\\frac a{a^2+y^2}.\n\\end{gathered}\n\\]\nIntegrating the first slice over \\(a\\le x\\le1\\) yields\n\\[\n\\begin{gathered}\nI(a,b)=\\pi/4-\\arctan a\\\\\n-\\arctan(1/b)\\\\\n+\\arctan(a/b).\n\\end{gathered}\n\\]\nThe other order gives the same proper value. Since \\(b>0\\), the reciprocal-angle identity also gives\n\\[\n\\begin{gathered}\nI(a,b)=\\arctan(a/b)-\\pi/4\\\\\n-\\arctan a+\\arctan b.\n\\end{gathered}\n\\]\nNo limit has been interchanged. Removing the cutoffs is a new question, and must name how both cutoffs approach zero.",
        "criteria": [
          "Justifies ordinary Fubini on each fixed clipped rectangle.",
          "Derives both slice antiderivatives and the same proper integral.",
          "Keeps both cutoffs positive during those calculations.",
          "Separates a proper integral from its later limiting procedure."
        ]
      },
      "scene": "scene \"A proper rectangle before any cutoff limit\";\ndomain -0.05 1.05; range -0.05 1.05;\nparam a=0.2 from 0.01 to 0.5; param b=0.1 from 0.01 to 0.5;\nlet first=pi/4-atan(a)-atan(1/b)+atan(a/b);\nlet second=-pi/4+atan(b)+atan(1/a)-atan(b/a);\npolygon positive_half=(0,0),(1,0),(1,1) color teal;\npolygon negative_half=(0,0),(0,1),(1,1) color rose;\npolygon retained=(a,b),(1,b),(1,1),(a,1) color amber;\nsegment diagonal from (0,0) to (1,1) color blue;\npoint corner=(0,0) color rose; point cutoff=(a,b) color amber;\nmeasure integrate_y_then_x=first; measure integrate_x_then_y=second;\nmeasure order_residual=first-second; measure cutoff_ratio=a/b;\nmeasure retained_area=(1-a)*(1-b); measure corner_distance=sqrt(a^2+b^2);",
      "focus": [
        "polygon-retained",
        "point-cutoff",
        "line-diagonal"
      ]
    },
    {
      "title": "Name the order of the two limits",
      "body": "Fix the outer cutoff \\(t>0\\). First let the inner \\(y\\)-cutoff tend to zero, or first let the inner \\(x\\)-cutoff tend to zero. The blue and rose curves are the resulting one-variable slices, plotted against the remaining outer variable. Their proper outer integrals still start at \\(t\\). Their plotted values at outer coordinate zero are continuous extensions of these slice formulas; the actual inner integrals at that coordinate diverge. Only positive outer coordinates enter the proper outer integrals.",
      "question": "Compute both inner limits and then the two outer limits. Also compute the symmetric rectangle value I(t,t). Do these three procedures define one joint limit? Explain why Fubini on each positive-cutoff rectangle remains valid.",
      "checkpoint": {
        "hint": "Use the proper formula from the first stage with one cutoff held fixed. Alternatively, evaluate the slice antiderivative at zero while its other coordinate is positive.",
        "explanation": "For each fixed \\(x>0\\), the inner \\(y\\)-integral is\n\\[\n\\begin{gathered}\n\\int_0^1f(x,y)\\,dy\\\\\n=\\frac1{1+x^2}.\n\\end{gathered}\n\\]\nHence its outer truncated value is\n\\[\n\\begin{gathered}\n\\int_t^1\\frac{dx}{1+x^2}\\\\\n=\\pi/4-\\arctan t,\n\\end{gathered}\n\\]\nand the iterated improper value is \\(\\pi/4\\).\n\nFor fixed \\(y>0\\), the inner \\(x\\)-integral is\n\\[\n\\begin{gathered}\n\\int_0^1f(x,y)\\,dx\\\\\n=-\\frac1{1+y^2}.\n\\end{gathered}\n\\]\nThe outer truncated value tends instead to \\(-\\pi/4\\). Equivalently, the two successive cutoff limits are\n\\[\n\\begin{gathered}\n\\lim_{a\\downarrow0}\\lim_{b\\downarrow0}I(a,b)\\\\\n=\\pi/4,\\\\\n\\lim_{b\\downarrow0}\\lim_{a\\downarrow0}I(a,b)\\\\\n=-\\pi/4.\n\\end{gathered}\n\\]\nThe inner limit is taken first.\n\nMeanwhile \\(I(t,t)=0\\) for every positive \\(t\\), by the exact formula or by antisymmetry under exchanging \\(x\\) and \\(y\\). Thus the symmetric rectangular cutoff gives zero. It is one specified limiting procedure. It does not establish a joint limit, which must be the same along every positive pair of cutoffs approaching zero.\n\nThe proper Fubini theorem has not failed: both orders agree on every fixed clipped rectangle. The two incompatible limits show why the singular-domain passage needs additional justification.",
        "criteria": [
          "Computes the two finite iterated values with the correct inner/outer order.",
          "Distinguishes those limits from the symmetric rectangular cutoff.",
          "States what a joint two-cutoff limit would require.",
          "Preserves the ordinary Fubini conclusion on every proper rectangle."
        ]
      },
      "scene": "scene \"Two outer integrals after different inner limits\";\ndomain 0 1; range -1.1 1.1;\nparam t=0.1 from 0.001 to 0.5;\nfn y_first(x)=1/(1+x^2); fn x_first(x)=-1/(1+x^2);\nplot y_first color blue; plot x_first color rose;\npoint positive_slice=(t,y_first(t)) color blue; point negative_slice=(t,x_first(t)) color rose;\nsegment outer_start from (t,-1.1) to (t,1.1) color amber;\nmeasure y_first_outer_integral=pi/4-atan(t);\nmeasure x_first_outer_integral=atan(t)-pi/4;\nmeasure symmetric_rectangle_integral=0;\nmeasure iterated_gap=pi/2-2*atan(t); measure remaining_outer_tail=atan(t);",
      "focus": [
        "curve-y_first",
        "curve-x_first",
        "line-outer_start"
      ]
    },
    {
      "title": "Test a joint limit and absolute mass",
      "body": "Choose a positive ratio \\(k\\) and let\n\\[\n\\begin{gathered}\na=kt/(1+k),\\\\\nb=t/(1+k),\\qquad 0<t\\le1.\n\\end{gathered}\n\\]\nHere \\(a+b=t\\) and \\(a/b=k\\). The curve plots the proper rectangle values along this ray; its intercept at \\(t=0\\) is an analytically derived extension, not an evaluation of the singular integral with zero cutoffs. The blue horizontal line is the symmetric-ray value.",
      "question": "Derive the limit along each fixed k and a finite error bound to that ray limit. Compare k=1 with k=sqrt(3). Does making both cutoffs small force a common value? Then use polar coordinates on a proper quarter-annulus to test absolute convergence.",
      "checkpoint": {
        "hint": "In the proper formula, the ratio stays k while both individual arctangents tend to zero. The mean value theorem gives |atan(a)-atan(b)|<=|a-b|. In polar coordinates the kernel is cos(2theta)/r².",
        "explanation": "Substitution into the proper formula gives\n\\[\n\\begin{gathered}\nI_k(t)=\\arctan k-\\pi/4\\\\\n-\\arctan\\!\\frac{kt}{1+k}\\\\\n+\\arctan\\!\\frac t{1+k}.\n\\end{gathered}\n\\]\nTherefore\n\\[\nL(k)=\\arctan k-\\pi/4.\n\\]\nThe mean value theorem, with \\(|(\\arctan)'|\\le1\\), gives the finite certificate\n\\[\n\\begin{gathered}\n|I_k(t)-L(k)|\\\\\n\\le\\frac{|k-1|}{1+k}\\,t.\n\\end{gathered}\n\\]\nAt \\(k=1\\) the error and ray value are exactly zero for every allowed positive \\(t\\). For \\(k\\ne1\\), a requested ray-error tolerance \\(\\varepsilon>0\\) is met by choosing\n\\[\nt<\\frac{(1+k)\\varepsilon}{|k-1|}\n\\]\nwith \\(0<t\\le1\\). The authored control has a positive lower bound; smaller scales require a positive lower-bound edit. This certifies approach to that selected ray's limit.\n\nThe ray \\(k=1\\) has limit zero; \\(k=\\sqrt3\\) has limit \\(\\pi/12\\). Both cutoffs tend to zero on both rays. Their unequal limits rule out a joint rectangular limit. More explicitly, the symmetric ray would force any joint value to be zero. Given any proposed cutoff threshold \\(\\delta>0\\), choose \\(k=\\sqrt3\\) and\n\\[\n0<t<\\min\\{1,\\delta,\\pi/24\\}.\n\\]\nThen both cutoffs are below \\(\\delta\\), but the ray-error bound is less than \\(t\\), so\n\\[\n\\begin{gathered}\nI_k(t)>\\pi/12-\\pi/24\\\\\n=\\pi/24.\n\\end{gathered}\n\\]\nThus no such threshold guarantees closeness to zero for all independent cutoffs. The proof allows arbitrarily small positive cutoffs; the controls explore only a finite window.\n\nFor the absolute integral, take the proper quarter-annulus \\(A_{\\varepsilon,1}\\), where \\(\\varepsilon<r<1\\) and \\(0<\\theta<\\pi/2\\). Polar substitution gives\n\\[\nf=\\frac{\\cos(2\\theta)}{r^2},\n\\]\nand\n\\[\n\\begin{gathered}\n\\iint_{A_{\\varepsilon,1}}|f|\\,dA\\\\\n=\\int_\\varepsilon^1\\frac{dr}{r}\\\\\n=\\log(1/\\varepsilon).\n\\end{gathered}\n\\]\nHere \\(\\int_0^{\\pi/2}|\\cos(2\\theta)|\\,d\\theta=1\\). These proper absolute integrals grow without bound as \\(\\varepsilon\\downarrow0\\). The example lacks the absolute-convergence safeguard; its signed symmetric cancellations conceal that growing absolute mass.",
        "criteria": [
          "Derives the whole family of ray limits from proper values.",
          "Chooses a cutoff after the requested error and selected ratio are fixed.",
          "Uses two different rays to disprove the joint limit.",
          "Proves absolute divergence on proper annuli and separates it from signed cancellation."
        ]
      },
      "scene": "scene \"A selected cutoff ray and its derived limiting value\";\ndomain 0 1; range -0.65 0.65;\nparam k=2 from 0.25 to 4; param t=0.1 from 0.001 to 1;\nfn ray(x)=atan(k)-pi/4-atan(k*x/(1+k))+atan(x/(1+k));\nfn balanced(x)=0; fn selected_limit(x)=atan(k)-pi/4;\nplot ray color teal; plot balanced color blue; plot selected_limit color rose;\npoint selected=(t,ray(t)) color teal; point ray_limit=(0,atan(k)-pi/4) color rose;\nmeasure x_cutoff=k*t/(1+k); measure y_cutoff=t/(1+k); measure cutoff_ratio=k;\nmeasure proper_integral=ray(t); measure selected_ray_limit=atan(k)-pi/4;\nmeasure absolute_ray_error=abs(ray(t)-(atan(k)-pi/4));\nmeasure ray_error_bound=abs(k-1)*t/(1+k);\nmeasure radial_absolute_mass=ln(1/t);",
      "focus": [
        "curve-ray",
        "curve-balanced",
        "point-selected",
        "point-ray_limit"
      ]
    }
  ]
}
```

### Unary notebook: change the way the corner is approached

This notebook evaluates only proper rectangular values: both cutoffs are positive for every permitted setting. The outputs are, in order, the two cutoffs, the proper integral, the predicted ray limit, the absolute ray error, its proved upper bound, the bound minus the observed error, and the proper value at half the scale. A nonnegative seventh output checks the certificate at that setting; the mean value theorem in the saved investigation supplies the proof for the whole declared range.

Predict the signs at the default ratio and at the balanced ratio, then run. The notebook's quotient is deliberately evaluated at a positive input. Setting its input to zero would create an undefined zero-over-zero expression, even though a limit has been derived separately.

```notebook
param k=2 from 0.25 to 4;
param t=0.1 from 0.001 to 1;
fn lower_x(x)=k*x/(1+k);
fn lower_y(x)=x/(1+k);
fn clipped(x)=atan(lower_x(x)/lower_y(x))-pi/4-atan(lower_x(x))+atan(lower_y(x));
let predicted=atan(k)-pi/4;
let bound=abs(k-1)*t/(1+k);
show lower_x(t);
show lower_y(t);
show clipped(t);
show predicted;
show abs(clipped(t)-predicted);
show bound;
show bound-abs(clipped(t)-predicted);
show clipped(t/2);
```

Now change the *geometry of approach*, keeping the same singular function. Replace these three lines together:

```text
fn lower_x(x)=k*x^2/(1+k);
let predicted=-pi/4;
let bound=(k+1)*t;
```

Leave the lower-y function, quotient and output lines unchanged. Before running, derive the new ratio, limit and finite error certificate. Does setting the ratio parameter to one still make the two cutoffs equal at every scale? Explain why the positive-input restriction remains necessary.

<details><summary>Notebook hint</summary>

The new cutoffs have ratio \(kt\), rather than the constant \(k\). Their sum is at most \(t\) for \(0<t\le1\). Use the proper formula from the first stage and the elementary bounds \(0\le\arctan z\le z\) for \(z\ge0\).

</details>

<details><summary>Notebook model reasoning</summary>

The edited cutoffs are
\[
\begin{gathered}
a=kt^2/(1+k),\\
b=t/(1+k).
\end{gathered}
\]
Both are positive and below one in the declared range. Their ratio is \(kt\), so the proper value satisfies
\[
\begin{gathered}
I(a,b)+\pi/4=\arctan(kt)\\
-\arctan\!\frac{kt^2}{1+k}
+\arctan\!\frac t{1+k}.
\end{gathered}
\]
Since \(kt^2/(1+k)\le kt\), the difference of the first two arctangents is nonnegative. The entire expression is bounded above by
\[
kt+t/(1+k)\le(k+1)t.
\]
Therefore the edited path tends to \(-\pi/4\), with the finite certificate
\[
0\le I(a,b)+\pi/4\le(k+1)t.
\]
Mathematically choose \(0<t\le1\) with \(t<\varepsilon/(k+1)\) to guarantee strict error below a requested \(\varepsilon>0\). The authored control has a positive lower bound: a smaller scale requires editing that bound while keeping it positive. Unlike the original balanced ray, setting \(k=1\) does not make the edited cutoffs equal at every scale: their ratio is now \(t\). A limit value is not a license to evaluate the quotient at zero.

</details>

### Independent written repair: an unbounded function with controlled tails

The changed kernel below is outside the default scenes and notebook. It asks for an absolute-tail proof, a precise class of cutoff shapes and a genuinely changed nonsquare geometry. Unboundedness by itself does not decide whether an improper integral exists.

```exercise
{
  "id": "calc3-singular-fubini-integrable-repair",
  "type": "written",
  "prompt": "Independent changed singularity. On \\(S=[0,1]^2\\), away from the origin, replace the main kernel by\n\\[\nH(x,y)=\\frac{x^2-y^2}{(x^2+y^2)^{3/2}}.\n\\]\nThe function remains unbounded. Work with proper cutoff integrals before taking a limit.\n\n(a) For \\(0<\\delta<r\\le1\\), calculate the absolute integral on the proper quarter-annulus \\(A_{\\delta,r}\\). Use the result to prove that the radial-cutoff integrals have limit zero. Explain why the sign cancellation alone would not supply the absolute-tail estimate.\n\n(b) Let \\(U\\) be relatively open in \\(S\\), with boundary consisting of finitely many piecewise \\(C^1\\) arcs. Assume that for some \\(0<s\\le r\\le1\\),\n\\[\n\\begin{gathered}\nS\\cap B_s(0)\\subset U,\\\\\nU\\subset S\\cap B_r(0).\n\\end{gathered}\n\\]\nHere \\(B_r(0)\\) is the open disk. Prove that \\(S\\setminus U\\) has a proper integral and that\n\\[\n\\left|\\iint_{S\\setminus U}H\\,dA\\right|\\le r.\n\\]\nState exactly which cutoff families this proves converge to zero, without assuming nested deletions.\n\n(c) Rectangular cutoff deletions also remove thin strips away from the corner, so they need a separate estimate. For positive \\(a,b\\le1\\), set\n\\[\nJ(a,b)=\\int_a^1\\int_b^1H(x,y)\\,dy\\,dx,\n\\]\nand prove for any \\(0<r\\le1\\) that\n\\[\n|J(a,b)|\\le r+(a+b)/r.\n\\]\nDeduce a joint rectangular limit and a finite cutoff choice for any requested error \\(\\varepsilon>0\\).\n\n(d) Evaluate both iterated improper integrals directly. Derive the inner slice and its outer primitive rather than invoking the continuous compact-domain theorem on an unbounded integrand.",
  "hints": [
    "Polar substitution gives \\(H=\\cos(2\\theta)/r\\). First integrate on \\(\\delta<r<r_0\\), with \\(\\delta>0\\). The angular absolute integral is one.",
    "The proper radial region \\(S\\setminus B_\\delta(0)\\) is invariant under swapping \\(x\\) and \\(y\\), while \\(H\\) changes sign. For the general deletion, compare with this proper region using \\(0<\\delta<s\\).",
    "For rectangles compare with \\(S\\setminus B_r(0)\\). The part inside the radius-r corner has absolute integral at most r. Outside it, the missing strips have area at most a+b and |H|≤1/r. Use a smaller positive annular cutoff if needed to keep every comparison proper.",
    "For fixed \\(x>0\\), try the inner primitive \\(2y/\\sqrt{x^2+y^2}-\\operatorname{arsinh}(y/x)\\). Define \\(\\operatorname{arsinh}z=\\log(z+\\sqrt{1+z^2})\\)."
  ],
  "rubric": [
    "Derives the absolute proper-annulus integral and a vanishing corner-tail bound.",
    "Constructs the radial improper value from proper symmetric integrals.",
    "States and proves the precise class of local corner deletions controlled by the tail bound.",
    "Proves a separate rectangular estimate and a cutoff choice independent of the cutoff ratio.",
    "Derives both iterated values and justifies the logarithmic endpoint limit.",
    "Does not infer divergence merely from unboundedness or claim an unsupported universal exhaustion theorem."
  ],
  "solution": "In polar coordinates,\n\\[\nH=\\cos(2\\theta)/r.\n\\]\nFor every proper quarter-annulus with \\(0<\\delta<r\\le1\\),\n\\[\n\\begin{gathered}\n\\iint_{A_{\\delta,r}}|H|\\,dA\\\\\n=\\int_\\delta^rdu\\\\\n=r-\\delta.\n\\end{gathered}\n\\]\nHere the angular absolute integral is one. Thus the absolute corner tail, defined by the limit of these proper annuli, is \\(r\\), tending to zero with the radius. The whole absolute integral is finite as well: every polar radius in the unit square is at most \\(\\sqrt2\\), so it is bounded by \\(\\sqrt2\\) times the same angular integral.\n\nFor \\(0<\\delta\\le1\\), let \\(D_\\delta=S\\setminus B_\\delta(0)\\). This is a compact piecewise smooth region avoiding the origin. Its ordinary integral is zero by the exchange symmetry of the domain and antisymmetry of \\(H\\). This uses only a proper integral; it does not exchange two improper limits. Therefore the radial improper value is zero. The absolute-tail estimate proves control of the discarded contribution, which signed cancellation alone did not establish for the main kernel.\n\nFor the specified \\(U\\), \\(S\\setminus U\\) is compact and stays outside \\(B_s(0)\\). Its boundary regularity and continuity of \\(H\\) there give a proper integral. Choose \\(0<\\delta<s\\). The difference from the zero proper integral over \\(D_\\delta\\) is supported in \\(U\\setminus B_\\delta\\), a subset of the proper corner annulus up to radius \\(r\\). Its absolute integral is at most \\(r-\\delta\\le r\\). Hence\n\\[\n\\left|\\iint_{S\\setminus U}H\\,dA\\right|\\le r.\n\\]\nConsequently any family of such local corner deletions, with its stated outer radii tending to zero and a positive inner radius at each stage, has limit zero. The inner and outer radii need not have a fixed ratio, and the family need not be nested. This conclusion concerns precisely the containments and boundary regularity stated in the task.\n\nFor rectangles, compare the proper \\(R_{a,b}\\) with the proper \\(D_r\\), whose signed integral is zero. Their difference inside the corner disk has absolute integral at most \\(r\\): to obtain this bound using only proper annuli, first choose \\(0<\\delta<\\min(a,b,r)\\). Outside that disk, the omitted vertical and horizontal strips have total area at most \\(a+b\\), while \\(|H|\\le1/r\\). Therefore\n\\[\n|J(a,b)|\\le r+\\frac{a+b}{r}.\n\\]\nWhen \\(a+b\\le1\\), choose \\(r=\\sqrt{a+b}\\) to get\n\\[\n|J(a,b)|\\le2\\sqrt{a+b}\\longrightarrow0.\n\\]\nThis is a joint limit independent of the aspect ratio. For any requested \\(\\varepsilon>0\\), choosing positive cutoffs with\n\\[\na+b<\\min\\{1,\\varepsilon^2/4\\}\n\\]\nsuffices for strict error below \\(\\varepsilon\\).\n\nFor a direct iterated calculation, at fixed \\(x>0\\),\n\\[\n\\begin{gathered}\n\\int_0^1H(x,y)\\,dy\\\\\n=\\frac2{\\sqrt{1+x^2}}-\\operatorname{arsinh}(1/x).\n\\end{gathered}\n\\]\nAn outer primitive is\n\\[\n\\begin{gathered}\nP(x)=\\operatorname{arsinh}x\\\\\n-x\\operatorname{arsinh}(1/x).\n\\end{gathered}\n\\]\nIt satisfies \\(P(1)=0\\). As \\(x\\downarrow0\\), both terms tend to zero: for \\(0<x\\le1\\),\n\\[\n\\begin{gathered}\n0\\le x\\operatorname{arsinh}(1/x)\\\\\n\\le x\\log(3/x)\\longrightarrow0.\n\\end{gathered}\n\\]\nFor example, \\(\\log u\\le2\\sqrt u\\) for \\(u\\ge1\\) follows by integrating \\(1/u\\le1/\\sqrt u\\). This proves the needed logarithmic endpoint limit. The y-first iterated integral is therefore zero; the exchanged order is its negative by the kernel's antisymmetry, and is also zero.\n\nThus this unbounded function has controlled absolute tails, a zero radial/local-corner value in the stated class, a zero joint rectangular value, and agreeing iterated values. These conclusions were proved from proper integrals and explicit bounds, rather than from continuity at the singular corner.",
  "transfer": "Change the square to the nonsquare rectangle \\([0,2]\\times[0,1]\\), keeping \\(H\\). Determine the common improper value and both iterated values. Does the square's cancellation still prove zero? Adapt the rectangular cutoff error bound, including the correct areas of both omitted strips.",
  "transferSolution": "The extra strip \\([1,2]\\times[0,1]\\) is proper and bounded away from the singularity. The unit-square part has the zero value already proved. The strip integrand is positive in its interior, so the new answer is positive, not zero.\n\nMore generally, for side lengths \\(A,B>0\\), direct y-first integration gives\n\\[\n\\begin{gathered}\nL(A,B)=B\\operatorname{arsinh}(A/B)\\\\\n-A\\operatorname{arsinh}(B/A).\n\\end{gathered}\n\\]\nIndeed the inner slice is\n\\[\n\\begin{gathered}\n2B/\\sqrt{x^2+B^2}\\\\\n-\\operatorname{arsinh}(B/x),\n\\end{gathered}\n\\]\nwith outer primitive\n\\[\n\\begin{gathered}\nB\\operatorname{arsinh}(x/B)\\\\\n-x\\operatorname{arsinh}(B/x).\n\\end{gathered}\n\\]\nIts lower endpoint is zero by the same logarithmic estimate. At \\(A=2\\), \\(B=1\\), the value is\n\\[\n\\begin{gathered}\nL=\\operatorname{arsinh}2\\\\\n-2\\operatorname{arsinh}(1/2)>0.\n\\end{gathered}\n\\]\nReversing the order gives that same formula; the explicit corner-tail comparison also establishes the joint value.\n\nFor a radial cutoff \\(0<r\\le1\\), the unit-square portion still has zero proper integral and the extra strip is unchanged, so its proper integral equals \\(L\\). For a rectangular cutoff with lower bounds \\(a,b>0\\), the missing vertical strip has area at most \\(a\\) and the horizontal strip at most \\(2b\\). The same proper comparison gives\n\\[\n\\begin{gathered}\n|J_{2,1}(a,b)-L|\\\\\n\\le r+(a+2b)/r.\n\\end{gathered}\n\\]\nFor \\(a+2b\\le1\\), choosing \\(r=\\sqrt{a+2b}\\) gives error at most \\(2\\sqrt{a+2b}\\). The absolute corner-tail estimate still controls local deletions confined within radius \\(r\\le1\\); only the far-away geometry and strip areas changed."
}
```

### What to check before changing integration order

Name the region and the integral being defined. On a fixed proper cutoff region, ordinary continuity and Fubini suffice. Passing to a singular-domain value is another step: state the limiting procedure and prove the needed control. One symmetric cancellation is compatible with divergent absolute mass in the main example. In the changed task, a vanishing absolute corner tail controls a stated class of local deletions, and a separate strip estimate controls independent rectangular cutoffs. Those are proved conclusions for those classes, rather than a claim about every possible exhaustion.

