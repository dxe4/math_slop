var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: conic-focus-directrix-computation
title: "Conic Focus–Directrix Computation"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Conic Focus–Directrix Computation

This earlier reading remains available with its original exercises and learner identity. The current computational route is [Conic Predicates](conic-predicates.md); full geometric classification and focus/directrix equivalence are proved in [Conics in Coordinates](../conics-solids-projections/conics-in-coordinates.md).

Every nondegenerate parabola or hyperbola, and every noncircular ellipse, can be defined by a single geometric rule: the locus of points whose distance to a fixed point (the focus) is a constant multiple (the eccentricity) of their distance to a fixed line (the directrix). This definition unifies ellipses, parabolas, and hyperbolas in one formula, and it connects the algebraic classification of the previous chapter to the physical applications of optics and orbital mechanics. This chapter derives the standard equations from the focus--directrix definition, analyzes the formulas near the parabolic limit, and shows how to compute center and semiaxes robustly.

## The focus--directrix definition

Let $F$ be a point, $D$ a line not containing $F$, and $e>0$ a real number. The **conic** with focus $F$, directrix $D$, and eccentricity $e$ is the set of points $P$ satisfying

$$PF=e\\cdot\\operatorname{dist}(P,D).$$

The type of conic is determined by $e$:

- $0<e<1$: **ellipse**;
- $e=1$: **parabola**;
- $e>1$: **hyperbola**.

## Derivation for a standard configuration

Place the focus at $(0,0)$ and the directrix at $x=1$. Then $PF=\\sqrt{x^{2}+y^{2}}$ and $\\operatorname{dist}(P,D)=\\lvert x-1\\rvert$. The defining equation is

$$\\sqrt{x^{2}+y^{2}}=e\\lvert x-1\\rvert.$$

Squaring both sides gives

$$x^{2}+y^{2}=e^{2}(x-1)^{2}.$$

Rearranging:

$$(1-e^{2})x^{2}+y^{2}+2e^{2}x-e^{2}=0.$$

## Ellipse: $0<e<1$

When $e<1$, the coefficient $1-e^{2}$ is positive. Completing the square in $x$:

$$(1-e^{2})\\left(x+\\frac{e^{2}}{1-e^{2}}\\right)^{2}+y^{2}=\\frac{e^{2}}{1-e^{2}}.$$

The center is at

$$h=-\\frac{e^{2}}{1-e^{2}}.$$

The horizontal semiaxis is

$$a=\\frac{e}{1-e^{2}},$$

and the vertical semiaxis is

$$b=\\frac{e}{\\sqrt{1-e^{2}}}.$$

The foci are at $(h\\pm c,0)$ where $c=\\sqrt{a^{2}-b^{2}}=ae$.

## Parabola: $e=1$

When $e=1$, the $x^{2}$ term vanishes. The equation becomes

$$y^{2}=1-2x,$$

or $x=\\frac{1-y^{2}}{2}$. This is a left-opening parabola with vertex at $(1/2,0)$. The focus is at $(0,0)$ and the directrix is $x=1$, consistent with the construction.

## Hyperbola: $e>1$

When $e>1$, the coefficient $1-e^{2}$ is negative. Write $e^{2}-1>0$ and rearrange:

$$(e^{2}-1)\\left(x-\\frac{e^{2}}{e^{2}-1}\\right)^{2}-y^{2}=\\frac{e^{2}}{e^{2}-1}.$$

The center is at

$$h=\\frac{e^{2}}{e^{2}-1}.$$

The transverse semiaxis is

$$a=\\frac{e}{e^{2}-1},$$

and the conjugate semiaxis is

$$b=\\frac{e}{\\sqrt{e^{2}-1}}.$$

## Numerical ill-conditioning near $e=1$

As $e$ approaches $1$ from below, the ellipse center $h=-e^{2}/(1-e^{2})$ recedes to $-\\infty$ and the semiaxes $a$ and $b$ grow without bound. The parabola, which lives at $e=1$, has no center and a completely different parametrization. Computing ellipse parameters for $e=0.999$ involves subtracting nearly equal numbers in $1-e^{2}$, which loses precision.

For the exact locus, do not silently replace $e\\ne1$ by a parabola. Compute $1-e^{2}$ as $(1-e)(1+e)$ when that factorization is more accurate, retain the squared implicit equation, or use higher precision. A parabolic parametrization can be a useful local approximation only after specifying a spatial region and an error bound; it is not the same conic. A library should document whether it returns the exact locus or such an approximation.

## Common errors

- **Using the ellipse formula for $e\\geq 1$ or the hyperbola formula for $e\\leq 1$.** The formulas are valid only in their respective regimes. A routine that does not check $e$ may produce negative denominators or imaginary semiaxes.
- **Subtracting nearly equal numbers near $e=1$.** The expression $1-e^{2}$ loses significance when $e$ is close to $1$. Factor it as $(1-e)(1+e)$, retain a stable implicit representation, or raise precision; use a parabola only as a declared local approximation with an error model.
- **Confusing the squared residual with the distance residual.** The squared equation $x^{2}+y^{2}-e^{2}(x-1)^{2}=0$ is useful for algebra, but its magnitude scales quadratically with coordinates. The unsquared distance residual $\\sqrt{x^{2}+y^{2}}-e\\lvert x-1\\rvert$ matches the defining units.
- **Forgetting the standard nondegeneracy hypothesis $F\\notin D$.** If it is dropped, the ratio locus generally degenerates rather than becoming inconsistent: its exact form depends on $e$.

## Practice exercises with solutions

### Exercise 1
For focus $(0,0)$, directrix $x=1$, and $e=1/2$, find the center, semiaxes, and vertices of the ellipse.

**Solution.** $h=-(1/4)/(3/4)=-1/3$. $a=(1/2)/(3/4)=2/3$. $b=(1/2)/\\sqrt{3/4}=1/\\sqrt{3}$. The vertices are at $(h\\pm a,0)=(-1,0)$ and $(1/3,0)$.

### Exercise 2
Show that the vertex of the parabola with focus $(0,0)$ and directrix $x=1$ is equidistant from the focus and the directrix.

**Solution.** The vertex is at $(1/2,0)$. Its distance to the focus is $1/2$, and its distance to the directrix $x=1$ is also $1/2$.

### Exercise 3
For $e=2$, find the center and asymptotes of the hyperbola with focus $(0,0)$ and directrix $x=1$.

**Solution.** $h=4/3$, $a=2/3$, $b=2/\\sqrt{3}$. The standard form is

$$\\frac{(x-4/3)^{2}}{4/9}-\\frac{y^{2}}{4/3}=1.$$

The asymptotes are $y=\\pm\\frac{b}{a}(x-h)=\\pm\\sqrt{3}(x-4/3)$.

### Exercise 4
Drop the standard hypothesis $F\\notin D$. For $F=(0,0)$ and $D$ the line $x=0$, classify the locus $PF=e\\,\\operatorname{dist}(P,D)$.

**Solution.** Squaring gives $x^{2}+y^{2}=e^{2}x^{2}$, or $y^{2}=(e^{2}-1)x^{2}$. If $0<e<1$, the only point is the focus. If $e=1$, the locus is the entire $x$-axis. If $e>1$, it is the union of the two lines $y=\\pm\\sqrt{e^{2}-1}x$. Thus the excluded case produces degenerate loci, not a contradiction.

### Exercise 5
A comet trajectory is modeled as a conic with focus at the Sun and eccentricity $e=1.1$. Is the orbit bound or unbound? What is the sign of the energy?

**Solution.** In the ideal Newtonian attractive two-body inverse-square model, with potential energy normalized to zero at infinity, $e>1$ describes a hyperbolic unbound orbit and its total specific orbital energy is positive. The sign conclusion depends on that dynamical model; eccentricity alone is only a geometric parameter.

## Looking backward and forward

This chapter derived the standard equations of ellipses, parabolas, and hyperbolas from the focus--directrix definition. The formulas for center and semiaxes are exact, but they become ill-conditioned as the eccentricity approaches $1$. Use an implicit representation, more accurate denominator evaluation, or higher precision for the exact conic; use a parabolic parametrization only as a declared local approximation on a specified spatial region with an error bound. This online summary clarification leaves the retained draft PDF unchanged.

The next chapter, **Three-Dimensional Predicates**, extends the ideas of lines, planes, and distances to $\\mathbb{R}^{3}$. The cross product, scalar triple product, and plane-line intersection formulas are direct analogues of the planar tools developed here, and they share the same sensitivity to near-degenerate cases.
`;export{e as default};