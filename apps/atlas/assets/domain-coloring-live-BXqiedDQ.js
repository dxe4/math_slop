var e=`---
id: visual-lab-domain-coloring
title: "Complex Functions in Colour"
level: undergraduate
estimated_minutes: 35
license: CC BY-SA 4.0
---

# Complex Functions in Colour

A real-valued function of one variable can be drawn in the plane. A complex function takes two real coordinates in and returns two real coordinates, so its graph would need four dimensions. **Domain colouring** keeps the input plane visible and encodes the output with colour and brightness.

[Open the runnable domain-colouring experiment](#/labs?lab=visual-lab-domain-coloring)

## The visual code

Write a nonzero output in polar form:

$f(z) = |f(z)| \\exp(i arg f(z))$.

The experiment uses two independent channels:

- hue records $arg f(z)$, the output direction;
- repeated light and dark rings record $log_{2} |f(z)|$, the output scale.

A trip around the colour wheel is a change of $2\\pi$ in argument. Crossing one complete magnitude band doubles or halves the modulus. Zeros become dark points because $|f(z)| \\to 0$; poles are surrounded by bands of rapidly increasing magnitude.

This encoding is periodic on purpose. It does not give an absolute magnitude at a glance, but it makes multiplicative change, winding, zeros, and poles unusually easy to see. Hovering the experiment reports precise numerical values when you need them.

## Investigation 1 — Count a zero

Choose $f(z)=z^{2}-1$ and reset the view.

1. Locate the two dark points.
2. Drag a mental loop counterclockwise around only the point at $z=1$.
3. Watch the hue. It runs through one complete cycle.
4. Now draw a much larger loop enclosing both zeros. The hue cycles twice.

This is the argument principle in its simplest setting. Let the curve be the positively oriented, piecewise smooth simple boundary of a bounded region, and let $f$ be meromorphic on a neighborhood of its closure, with no zeros or poles on the boundary. Then the net change of a continuous argument along the image curve is

$2\\pi (number of zeros - number of poles)$,

where multiplicity is counted. General oriented contour sums require winding-number weights; an arbitrary self-intersecting curve cannot be interpreted by an unqualified inside count. For $z^{2}-1=(z-1)(z+1)$, each factor contributes one turn around its own zero, and a positive simple loop containing both collects two turns. The [argument-principle chapter](/books/complex-analysis/argument-principle-rouche/) states and proves the precise result.

**Prediction.** What would the colours do around a double zero such as $f(z)=(z-1)^{2}$? They would complete two hue cycles on even a small loop around $1$.

## Investigation 2 — A pole reverses winding

Choose $f(z)=1/z$. Move around the origin counterclockwise. If $z=re^{i\\theta }$, then

$1/z = r^{-1}e^{-i\\theta }$.

The magnitude is inverted and the argument changes sign. The hue therefore moves around its wheel in the opposite direction. The origin is a pole of order one, contributing winding number $-1$.

Zoom toward the origin. The pattern repeats at every scale because reciprocal inversion has no preferred length. This is a visual example of scale invariance.

## Investigation 3 — Read an exponential

Choose $f(z)=\\exp(z)$ and write $z=x+iy$. Euler's formula gives

$\\exp(x+iy)=e^{x}(\\cos y+i \\sin y)$.

Before looking, predict the picture:

- changing $x$ should change magnitude but not hue;
- changing $y$ should change hue but not magnitude;
- moving vertically by $2\\pi$ should return exactly the same output.

The rendered stripes make all three facts visible. Horizontal motion crosses magnitude bands. Vertical motion turns through hue. The entire pattern repeats after a vertical displacement of $2\\pi$.

## Why analytic maps preserve tiny angles

Near a point $z_{0}$ where $f′(z_{0})\\ne 0$, differentiability says

$f(z_{0}+h) = f(z_{0}) + f′(z_{0})h + error$,

with $error/|h| \\to 0$. Multiplication by the nonzero complex number $f′(z_{0})$ is a rotation followed by a uniform scaling. Therefore, at sufficiently small scales, an analytic function preserves oriented angles. This is **conformality**.

For the Möbius map $(z-1)/(z+1)$, the derivative is $2/(z+1)^2$. In particular its zero at $1$ is a regular conformal point, with derivative $1/2$. The output's phase is undefined exactly at a zero, so the colour texture can have a meeting point there even though the map preserves infinitesimal angles. The finite pole at $-1$ is outside the ordinary holomorphic plane-domain statement. Critical points, such as zero for $z^2$, fail the nonzero-derivative hypothesis for a different reason. See [Conformal Maps and Möbius Transformations](/books/complex-analysis/conformal-mobius/).

## Challenges

1. For $f(z)=\\sin z$, locate at least three zeros and estimate their spacing. Explain the pattern from the real sine function.
2. The Möbius map $(z-1)/(z+1)$ has one zero and one pole. What total winding should a very large circle have? Check the colours, then justify your answer.
3. Suppose a loop encloses two zeros and one pole, all simple. Predict its net colour cycles and direction.
4. Domain colourings can be misleading near a branch cut. Explain why a single-valued picture of $\\sqrt{z}$ must make a discontinuous choice somewhere.

## Check your understanding

- A place where all hues meet is a candidate zero or pole; brightness and nearby magnitude bands distinguish them.
- Hue winding counts local multiplicity with sign.
- Analytic functions are locally rotation-plus-scaling away from critical points.
- A picture suggests structure. The factorization, derivative, or argument principle explains why the structure must occur.

## Accessible route and numerical boundary

All function and contour choices use labelled native controls. Focus the plot and use the arrow keys to pan, plus or minus to zoom, and R to restore the canonical view. The sample-value table reports the selected function at five inputs without relying on hue or brightness. Its values are rounded floating-point approximations, not exact symbolic values. Colour carries spatial information that five rows cannot reproduce; use the table to inspect numerical samples and the companion derivations for claims about zeros, poles and conformality. Pixel sampling, clipping and finite precision can hide small features.

The colour backends mask exponential inputs with $|\\operatorname{Re}z|>40$, sine inputs with $|\\operatorname{Im}z|>40$, numerically unresolved pole neighborhoods and nonfinite evaluations in grey. They do not draw a clamped exponential or sine as if it were the exact function. Magnitude bands have a display floor of $10^{-12}$; subfloor values do not resolve further bands. The numerical table evaluates the original formula when representable and can therefore report a value outside the colour range; unrepresentable exponential overflow or underflow is marked undefined, not identified as a mathematical pole or zero. Grey itself has no analytic classification.
`;export{e as default};