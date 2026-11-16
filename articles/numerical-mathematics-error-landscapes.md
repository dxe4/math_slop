
# Error Landscapes: Why More Digits and More Points Can Hurt

**Before reading.** Read [Functions, Domains, and Graphs](../books/algebra-and-functions/functions-domain-graphs.md) and [Estimation and Number Sense](../books/number-and-arithmetic/estimation-number-sense.md). These are preparation for the ideas used below.

## An accessible route

This deep dive assumes functions, graphs, and scientific notation. It uses no proof-based calculus until an optional explanation. The goal is to see that numerical error has shape: it can shrink, flatten, or grow as a step changes.

## Three boxes, not one

Imagine measuring a curved arch and estimating its height between marks.

- **Input box:** measurements may be rounded or noisy.
- **Approximation box:** a line or polynomial stands in for the unknown curve.
- **Arithmetic box:** a computer stores and combines finitely many digits.

If an answer is wrong, adding sample points helps only the approximation box. More arithmetic digits help only the arithmetic box. Neither repairs a biased ruler or the wrong mathematical model.

## Cancellation: information lost by subtraction

Suppose a three-digit decimal machine computes

$$\sqrt{1.01}-1$$

If the square root rounds to $1.00$, subtraction returns zero, even though the exact result is positive. The exact identity

$$\sqrt{1+x}-1 = x/(\sqrt{1+x}+1)$$

avoids subtracting nearby leading digits. With $x=0.01$, it divides $0.01$ by about $2.00$, retaining the scale $0.005$.

The lesson is not “never subtract.” If two uncertain measured lengths are nearly equal and their difference is the desired answer, the question itself may be sensitive. A clever formula cannot reconstruct digits that the measurements did not contain.

## The U-shaped differentiation experiment

To estimate slope at x, compare nearby values:

$$[f(x+h)-f(x-h)]/(2h)$$

When h is large, a secant sees too much curvature. Shrinking h makes it more local. But when h becomes tiny, the two function values become nearly equal; rounding in their subtraction is divided by tiny h.

A typical table looks like this:

| h | curvature/truncation effect | rounding/noise effect | total behavior |
|---:|---:|---:|---|
| $10^{-1}$ | visible | tiny | error decreases if h shrinks |
| $10^{-4}$ | small | small | near best region |
| $10^{-10}$ | tiny in theory | amplified | error grows |

The exact turning point depends on the function, scale, formula, and input precision. “Use the smallest h” is therefore not a rule.

## More interpolation points can make a worse curve

Take the smooth function

$f(x)=1/(1+25x^{2})$ on $[-1,1]$.

Force one polynomial through equally spaced points. As degree grows, the polynomial can oscillate wildly near the endpoints even though it matches every selected point. This is the Runge phenomenon.

Move the nodes so they cluster near the endpoints, using Chebyshev geometry, and the worst oscillation is much smaller. Nothing about the target function changed. The information was sampled in a better geometry.

This separates two choices:

- a stable evaluation formula computes the chosen interpolant reliably;
- a good node set makes the interpolation problem less sensitive.

Fixing one does not automatically fix the other.

## Integration can miss what it never samples

Suppose an integrand is zero at every point a quadrature rule samples but has a narrow positive bump between them. Coarse and refined estimates might agree at zero while the true area is positive.

Adaptive methods subdivide where nested estimates disagree. They are powerful for visible variation, but no finite sampling rule can detect every arbitrary hidden bump without assumptions. A guarantee names smoothness, derivative bounds, monotonicity, or another structure.

For known difficult features:

- split at a corner or discontinuity;
- transform an endpoint singularity;
- locate and resolve a narrow scale;
- use oscillatory structure rather than pretending it is smooth low-frequency data.

## Exact, estimated, and observed error

Keep these labels separate:

- **exact reference error:** possible when an analytic answer or exact small case is known;
- **proved bound:** follows from a theorem whose hypotheses have been checked;
- **estimated error:** produced by comparing related approximations under a model;
- **observed difference:** merely the gap between two runs.

An observed difference can be zero because both methods are right, both are wrong in the same way, or displayed rounding hides the difference.

## A screen-free experiment

Use index cards for nodes on a number line. Place five equally spaced cards, then five cards clustered near the ends. On a table, record the target and polynomial estimate at fixed probe points. The cards encode node geometry; the numerical rows contain all information needed without a graph.

For integration, list every accepted interval, its estimate, and its error estimate. Narrow intervals near a peak show where the algorithm spent work. Color can decorate this table but cannot replace interval labels or depths.

## Worked checks

**Worked example.**

**1. Relative-error boundary.** The exact answer is zero and an approximation is $10^{-8}$. What is relative error?

**Solution.** It is undefined because division by exact zero is impossible. Report absolute error and a meaningful external scale.

**2. Agreement.** Two methods print $0.314159$. Has six-digit accuracy been established?

**Solution.** No. They may share a formula, data, or failure and differ after the displayed digits. Compare against a bound, exact case, or meaningfully independent method and preserve unrounded diagnostics.

**3. More points.** Why does matching more data not logically imply smaller error everywhere?

**Solution.** The new polynomial satisfies more point constraints, but behavior between points depends on node geometry and target smoothness. Global oscillation can grow even while every sampled residual is zero.

## Practice lab with solutions

<a id="deep-dive-numerical-mathematics-error-landscapes-ex-1"></a>

**Exercise 1.**

**1. Stable reformulation.** Evaluate
\((1-\cos x)/x^2\) for small nonzero \(x\) without subtracting two nearby
numbers.
<details>
<summary>Hint 1</summary>

Direct subtraction of one and cosine is unstable when both are nearly equal.
</details>
<details>
<summary>Hint 2</summary>

Use the conjugate identity to rewrite the numerator through sine squared before evaluating small x.
</details>
<details>
<summary>Solution</summary>

Multiply numerator and denominator by \(1+\cos x\):

\[
\frac{1-\cos x}{x^2}
=\frac{\sin^2x}{x^2(1+\cos x)}
=\frac{(\sin x/x)^2}{1+\cos x}.
\]

The latter tends to \(1/2\) and usually retains more floating-point
information near zero.

</details>

<a id="deep-dive-numerical-mathematics-error-landscapes-ex-2"></a>

**Exercise 2.**

**2. Observed order.** Errors at mesh widths \(h, h/2, h/4\) are
\(0.040,\ 0.010,\ 0.0026\). Estimate the order from consecutive ratios.
<details>
<summary>Hint 1</summary>

For an order-p error, halving h should change error by a factor near two to the p.
</details>
<details>
<summary>Hint 2</summary>

Form the two successive error ratios and compare them with powers of two, allowing rounding noise.
</details>
<details>
<summary>Solution</summary>

Ratios are \(4\) and about \(3.85\). Since halving \(h\) reduces
an order-\(p\) error by \(2^p\), the evidence is consistent with second order.
The slight mismatch is evidence to investigate, not a reason to round the data
into exact agreement.

</details>

### Further practice

**3. Shared failure.** Two quadrature routines return the same value because
they use the same sampled nodes. What independent check would be useful?

**Solution.** Change the node family or transform and split the interval at
known features; for a manufactured integrand, compare with an exact integral.
Agreement between wrappers around the same rule is not independent evidence.

**4. Stop rule.** A refinement table has stopped changing at the scale of the
input measurements. Should arithmetic precision be increased first?

**Solution.** No conclusion follows without an error budget. If input
uncertainty dominates, extra arithmetic digits cannot improve the physical
answer. Preserve the plateau and report the controlling scale.

**5. Condition versus algorithm.** Solving the same linear system with two
stable algorithms gives nearly identical answers, but a tiny change in measured
data changes both answers greatly. What is the leading diagnosis?

**Solution.** Agreement between stable algorithms makes an implementation
difference less likely. Shared sensitivity to the input points toward an
ill-conditioned mathematical problem. Estimate a condition number or perturb
inputs on their justified uncertainty scale. Replacing one stable solver with
another cannot remove sensitivity inherent in the map from data to solution.

## Error-landscape checklist

Ask what changes when resolution increases. If error falls at the predicted rate, you may be entering an asymptotic regime. If it flattens, arithmetic or data uncertainty may dominate. If it grows, instability, cancellation, nonsmoothness, or a bug may be active. The shape of this table is evidence; a theorem explains when the shape supports a bound.
