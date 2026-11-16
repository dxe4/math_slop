var e=`---
id: visual-lab-complex-maps
title: "Complex Maps as Living Grids"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Visual lab: Complex maps as living grids

This lab turns a complex function into a geometric deformation. A learner should be able to predict what the map does, change parameters, and connect visual features to magnitude, argument, zeros, poles, and conformality.

## Learning goals

- interpret $z=x+iy$ as a point and a vector;
- see multiplication as scale plus rotation;
- distinguish mapping the domain grid from coloring function values;
- identify zeros, poles, branch behavior, and critical points;
- explain why holomorphic maps preserve small angles where $f'(z)\\ne 0$.

## View A — Deform the grid

Sample vertical and horizontal domain lines:

Vertical: $z(t)=c+it$. Horizontal: $z(t)=t+ic$.

Map every sampled vertex through $w=f(z)$, then draw the resulting polylines in the output plane. Use adaptive subdivision: split a segment when its mapped midpoint deviates too far from the straight chord or when its screen length is large. Do not connect across nonfinite values or suspected poles.

Recommended functions:

1. $f(z)=az+b$: similarity plus translation;
2. $f(z)=z^{2}$: doubles arguments and squares radii;
3. $f(z)=1/z$: inverts radii and negates arguments;
4. $f(z)=\\exp(z)$: wraps vertical translation into rotation;
5. $f(z)=z+c/z$: combines identity with inversion;
6. $f(z)=(z-a)/(z-b)$: Möbius transformation.

### Expected observations

- Under $z^{2}$, perpendicular grid curves remain perpendicular away from zero, but the derivative vanishes at zero and the local scale collapses.
- Under $1/z$, circles and lines map to circles or lines; the origin is a pole and must not be joined across.
- Under $\\exp(z)$, vertical lines become circles centered at zero and horizontal lines become rays. A vertical shift of $2\\pi i$ gives the same output.

## View B — Domain coloring

Color each input pixel $z$ using $w=f(z)$:

- hue = $arg(w)/(2\\pi )$ wrapped to $[0,1)$;
- brightness = a periodic or monotone function of $log|w|$;
- optional thin contours mark integer steps of argument and log-magnitude.

A robust brightness choice is

$value = 0.55 + 0.25 \\cos(2\\pi log_{2}|w|)$,

clamped and combined with a smooth magnitude envelope. Repeated rings then represent multiplicative factors of two.

Zeros show all hues converging while brightness falls inward. Poles reverse magnitude direction. Around a zero of order $n$, hue cycles $n$ times during one circuit.

## Complex arithmetic for a shader

Represent a complex number as \`vec2(re, im)\`.

\`\`\`glsl
vec2 cMul(vec2 a, vec2 b) {
    return vec2(a.x*b.x - a.y*b.y,
                a.x*b.y + a.y*b.x);
}

vec2 cDiv(vec2 a, vec2 b) {
    float d = dot(b, b);
    return vec2(a.x*b.x + a.y*b.y,
                a.y*b.x - a.x*b.y) / d;
}

vec2 cExp(vec2 z) {
    float r = exp(z.x);
    return r * vec2(cos(z.y), sin(z.y));
}
\`\`\`

Guard division when \`dot(b,b)\` is below a scale-aware threshold. A fixed world-space epsilon will behave poorly under zoom.

## Controls

- function selector;
- complex parameters $a,b,c$ with plane handles and numeric inputs;
- pan and logarithmic zoom;
- grid density and adaptive tolerance;
- domain-coloring contours on/off;
- derivative overlay showing local rotation $\\arg f'(z)$ and scale $|f'(z)|$;
- trace point displaying $z$, $f(z)$, magnitudes, and arguments;
- animate one parameter along a loop.

Keyboard reset should restore a documented canonical view. All controls need accessible text values; color alone must not carry zero/pole meaning.

## Experiments

### 1. Multiplication is rotation plus scale

Set $f(z)=az$, drag $a$ around the unit circle, and track one vector. Predict output angle before moving. Then change $|a|$. Verify that all lengths scale equally and all angles rotate equally.

### 2. Count a zero’s order

Compare $z$, $z^{2}$, and $z^{3}$. Move once around a small circle centered at zero and count hue cycles. Relate the count to the change in argument.

### 3. Watch conformality fail

For $z^{2}$, inspect grid intersections away from and at zero. Away from zero, small right angles remain right angles. At zero, the derivative is zero; scale and local one-to-one behavior fail.

### 4. Möbius maps preserve generalized circles

Use $(z-a)/(z-b)$. Drag a circle in the domain and observe its image. When the circle passes through the pole $b$, its image becomes a line. Test angle preservation at intersections away from the pole.

### 5. Branch behavior

Implement principal square root with argument in $(-\\pi ,\\pi ]$. Cross the negative real axis and observe the jump. Explain why no single-valued continuous square-root branch can exist on the punctured plane without a cut.

## Assessment prompts

1. Predict the image under $exp$ of a horizontal strip of height $2\\pi$.
2. Explain why the domain coloring of $1/z$ reverses hue direction around zero.
3. Find where $f(z)=z+c/z$ has critical points by solving $f'(z)=0$, then locate their visual signature.
4. Distinguish a pole from a large finite value using behavior under zoom.

## Numerical and rendering cautions

- Use high precision on CPU-generated grid geometry when deeply zoomed; fragment \`highp\` still has limits.
- Clip or mark nonfinite outputs rather than saturating them into misleading edges.
- Adaptive curves need a recursion or segment cap.
- Anti-alias contour lines with screen-space derivatives (\`fwidth\`) where supported.
- When phase is undefined near zero, fade saturation and show an explicit zero marker.
- Preserve aspect ratio so angles and circles remain meaningful.

The lab succeeds when users can narrate the geometry before they touch the controls, then use the visual to test that narration.

`;export{e as default};