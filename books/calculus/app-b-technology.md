# Appendix B — Technology and reproducible mathematics {#sec-technology}

Technology expands the questions we can explore, but it also introduces sampling, rounding, and representation errors. A responsible workflow separates conjecture, computation, and justification. Record software versions, parameters, domains, and tolerances so another learner can reproduce the result.

## Graphing windows and sampling

A graph is a finite set of samples joined or rasterized. It can miss narrow spikes and rapid oscillations. The function $\sin(1000x)$ may look constant when sampled at unfortunate points, while $(x^2-1)/(x-1)$ may look continuous because a single missing point is smaller than a pixel.

Before trusting a plot:

1. state the domain and expected scale;
2. inspect multiple windows and resolutions;
3. mark known discontinuities and asymptotes explicitly;
4. compare with algebraic limits and derivatives;
5. label axes, units, and transformations.

Plots in this book use a color-blind-conscious palette and direct captions. Color is never the only encoding when line type, panel placement, or labels can carry the distinction.

## Numerical differentiation

The centered difference
$$
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}
$$
usually has smaller truncation error than a one-sided difference of the same step. Yet making $h$ arbitrarily small is not always better: subtracting nearly equal floating-point numbers causes cancellation, while roundoff is magnified by division by $h$.

Perform a step study over several powers of ten. A typical error decreases, reaches a minimum, then grows. Compare against a symbolic derivative when available, but do not tune the method only to one convenient test function.

## Numerical integration

For a mesh-refinement study, compute approximations with $n$, $2n$, and $4n$ subintervals. Smooth functions often exhibit predictable error ratios, as visualized in [Figure 7.1](07-integration-techniques.md#fig-quadrature). Discontinuities, corners, endpoint singularities, or oscillations can destroy those rates.

Adaptive methods refine where an error estimator finds difficulty. They still need maximum-work and tolerance settings and can be fooled by poorly sampled oscillation. For improper integrals, transform or truncate with a justified tail bound rather than passing an infinite symbol blindly.

## Computer algebra

A computer algebra system can simplify, differentiate, integrate, and expand series, but output inherits implicit branch and domain conventions. Verification routines include:

- differentiate a proposed antiderivative and simplify the difference;
- substitute exact values and high-precision numerical samples away from singularities;
- compare series coefficients with derivatives at the center;
- check solutions in the original equation, not only a transformed one;
- inspect excluded points introduced by division or cancellation.

An expression that looks different may be equivalent. Conversely, expressions that agree at several samples may differ globally. Symbolic and numerical checks complement rather than replace a proof.

## The Plotnine figure workflow

All analytic visuals in this book are produced by `figures.py`. The script uses deterministic arrays, an explicit output directory, typed public functions, descriptive labels, and high-resolution PNG export. To regenerate from the book directory, run:

```bash
MPLCONFIGDIR="$(mktemp -d)" python3 figures.py
```

Every figure has alternative text in its Markdown reference and an interpretive paragraph in the chapter. The source script is part of the publication: readers can inspect sampled domains, formulas, palette choices, and resolution.

For a code-first route, continue to the [Python laboratories for
calculus](app-h-python-laboratory.md). Its thirty self-contained blocks are
automatically parsed and executed during validation, while seventeen paired
Plotnine figures expose convergence, cancellation, stability, and uncertainty.
The blocks are printed rather than evaluated during Quarto rendering, so the
HTML and PDF remain reproducible without a notebook server.

## Reproducible calculation record

For a substantial numerical result, retain:

- mathematical model and units;
- algorithm and stopping criterion;
- initial conditions, mesh, or random seed;
- software and relevant package versions;
- raw precision before final rounding;
- an independent check or limiting case;
- a statement distinguishing computational evidence from theorem.

This record is small compared with the cost of reconstructing an unexplained result.

## Accessibility checklist

Use captions that state the figure's mathematical point. Provide alternative text that describes structure rather than saying “graph.” Avoid red–green-only contrasts, tiny labels, dense grids, and legends that require repeated visual search. For tables, provide headers and keep complex formulas in surrounding prose. For PDF, inspect page breaks and scaling; for HTML, inspect navigation, math, and text at narrow widths.

<div class="callout callout-warning">
<p class="callout-title">Technology pitfall</p>

More digits are not more knowledge. Round according to measurement uncertainty or a justified error bound, and preserve exact forms such as $\pi/3$ when they carry structure.

</div>
