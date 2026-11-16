var e=`---
id: visual-lab-numerical-error-approximation
title: "Numerical Error & Approximation Laboratory"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Numerical Error & Approximation Laboratory

This static, deterministic instrument compares two numerical questions on $[-1,1]$: how interpolation nodes change polynomial error, and how uniform versus adaptive Simpson quadrature allocates work. [Open the live laboratory](#/labs?lab=visual-lab-numerical-error-approximation). Every experiment is also fully described by the tables and text below.

## Interpolation experiment

Choose a target:

- Runge function $1/(1+25x^2)$;
- smooth mixed wave $\\sin(\\pi x)+x/3$;
- nonsmooth corner $|x|$.

Choose polynomial degree 2 through 12 and either equally spaced nodes or Chebyshev extrema. The pure engine constructs normalized barycentric weights and evaluates the unique interpolating polynomial. At a node it returns the declared data value directly, avoiding a zero denominator.

The graph distinguishes:

- solid line: target formula;
- dashed line: interpolating polynomial;
- labeled circles: nodes;
- vertical marker: largest absolute error on a fixed 241-point audit grid.

The accompanying table lists target, interpolant, and absolute error at nine fixed probe points. Color is redundant with line style and labels.

### What the indicators mean

The displayed maximum error and Lebesgue value are sampled over 241 fixed points. They are deterministic comparison indicators, not proved continuous maxima. The Lebesgue indicator measures amplification of perturbations in node values for the chosen geometry. Barycentric evaluation addresses stable computation of the interpolant; it cannot repair an ill-conditioned node layout.

**Investigation.** Select the Runge function and degree 10. Compare equally spaced and Chebyshev nodes. The first can oscillate near endpoints; the second clusters nodes there and lowers the sampled amplification. This does not prove every Chebyshev interpolant beats every equally spaced one for every target.

## Quadrature experiment

Choose one integrand with an analytic reference:

| integrand | exact integral on $[-1,1]$ | reason to try it |
|---|---|---|
| $x^2$ | $2/3$ | Simpson polynomial exactness benchmark |
| $1/(1+25x^2)$ | $2 atan(5)/5$ | narrow central peak |
| $|x|$ | $1$ | nonsmooth corner |
| $sin^2(12x)$ | $1-\\sin(24)/24$ | under-resolved oscillation risk |

Uniform composite Simpson uses an even number of panels from 2 through 64. Adaptive Simpson compares one interval with its two halves, subdivides deterministically, and stops at requested estimator tolerance or at explicit depth/work limits. Its maximum is 256 leaves and depth 12.

The summary table separates:

- analytic reference value;
- computed estimate;
- actual error against this known reference;
- adaptive estimator value;
- evaluation count and bounded stop state.

The complete leaf table lists every interval, contribution, estimated local error, and depth. It is the nonvisual equivalent of the shaded subdivision strip and remains usable if Canvas is absent.

## Estimator boundary

Adaptive agreement is not a theorem for arbitrary functions. If a narrow bump or oscillation is missed by all sampled points, related estimates can agree while both are wrong. These presets provide analytic truth so the learner can compare actual and estimated error directly.

## Keyboard and motion behavior

All controls are labeled native form controls. When the canvas has focus:

- arrow keys change polynomial degree;
- \`Home\` sets degree 2 and $End$ sets degree 12;
- $N$ toggles node placement;
- $I$ cycles interpolation targets and $Shift+I$ reverses;
- $R$ resets every control.

The laboratory has no animation or uncontrolled loop. Every state is static, including under reduced-motion preferences. Rendering uses 241 curve samples and at most 256 adaptive intervals.

## Worked checks

**1. Why should the quadratic Simpson error be near zero?** Simpson's rule is exact through polynomial degree three in exact arithmetic, so $x^2$ is an implementation benchmark. Tiny displayed error can remain from binary rounding.

**2. Why distinguish estimated and actual error?** Actual error needs the reference truth, which is rarely known in a real problem. An estimator uses related approximations and assumptions. The presets let learners see when those quantities agree or diverge.

**3. Why is a 241-point maximum not exact?** A continuous error function could peak between probe points. The fixed grid makes comparisons reproducible; a proof of a global maximum needs analysis or verified enclosure.

## Continue

Use the error-landscape deep dive for a low-prerequisite conceptual route, the numerical first-course book for interpolation and quadrature derivations, and the method-selection recipe for a full error-budget workflow after central integration.
`;export{e as default};