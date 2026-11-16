# Parametric curves and polar coordinates: geometry in motion

## Preparation and purpose

Review the [chain rule](derivative-rules.md), [integration applications](fundamental-theorem.md), and [trigonometric functions](../lucent-refresher/elementary-functions.md). You should be comfortable with radians and sin² t + cos² t = 1. Study this chapter in two sessions: motion and tangents, then length and polar area.

You will describe curves that are not function graphs, distinguish a curve's shape from its traversal, calculate tangents and speed, and choose intervals that prevent accidental double counting. The editable scenes are small simulations: changing a parameter changes the mathematical model, while playing a time parameter shows how the model evolves.

## Position is a pair of functions

A graph y = f(x) assigns just one height to each horizontal coordinate. A parametrization gives a position γ(t) = (x(t), y(t)). Different parameter values may share an x-coordinate, share a whole point, or trace the same path repeatedly. The parameter may represent time, an angle, or simply an index along the curve.

For example, γ(t) = (2 cos t, sin t), 0 ≤ t ≤ 2π, traces an ellipse once counterclockwise. Eliminating t gives x²/4 + y² = 1, but this Cartesian equation loses the direction, starting point, and speed of traversal. Those are features of the parametrization, not just the visible image.

When coordinate derivatives exist, **velocity** is γ′(t) = (x′(t), y′(t)) and **speed** is its magnitude √(x′² + y′²). Velocity has direction; speed is a nonnegative scalar. Acceleration is γ″(t). Constant speed does not imply zero acceleration: a particle moving around a circle continually changes direction.

### Visual laboratory: stretch the orbit and inspect velocity

```mathviz
scene "An ellipse and its moving velocity segment";
domain -4 4;
range -4 4;
coordinates equal;
param a = 2 from 0.5 to 3;
param b = 1 from 0.5 to 2;
param t = 0.8 from 0 to 6.283185307179586;
parametric orbit(x) = (a*cos(x),b*sin(x)) from 0 to 2*pi color blue;
point particle = (a*cos(t),b*sin(t)) color rose;
segment velocity from (a*cos(t),b*sin(t)) to (a*cos(t)-0.4*a*sin(t),b*sin(t)+0.4*b*cos(t)) color amber;
animate t from 0 to 6.283185307179586 duration 10;
```

**Predict.** For a = 2 and b = 1, is the particle faster at the top of the ellipse or at its rightmost point? Is the velocity directed toward the origin?

**Explore.** Play or scrub t, then set a = b. The amber segment starts at the particle and ends at position plus 0.4 times velocity. Its length therefore represents 0.4 times speed. Equal coordinate scaling makes angles and lengths visually meaningful.

**Explain.** At t = 0, velocity is (0, b); at t = π/2 it is (−a, 0). Motion is faster at the top when a > b. Velocity is tangent to the ellipse; its direction is different from the radius segment in general. When a = b, the speed is constant.

**Transfer.** Replace t by 2*t in both the particle coordinates and every position and direction expression of the velocity segment. Then double the velocity displacement: its endpoint becomes (a*cos(2*t) − 0.8*a*sin(2*t), b*sin(2*t) + 0.8*b*cos(2*t)). Derive how traversal count and speed change over the same time interval before playing the edited scene.

In scene code, `x` is the local curve parameter inside a `parametric` declaration; the separately declared `t` controls the displayed particle. The curve is sampled over its own parameter interval, while the particle responds to the slider or animation clock.

## Tangents through the chain rule

If x and y are continuously differentiable near t₀ and x′(t₀) ≠ 0, x is locally invertible and

dy/dx = y′(t₀)/x′(t₀).

If x′(t₀) = 0 but y′(t₀) ≠ 0, the tangent is vertical. When both derivatives vanish, the quotient is inconclusive: the image might have a cusp or might be a perfectly smooth curve with an inconvenient clock.

If the coordinate functions are twice continuously differentiable and x′ ≠ 0, another chain-rule application gives

d²y/dx² = [d/dt(y′/x′)]/x′.

The second derivative is not y″/x″. Each differentiation with respect to x requires division by dx/dt.

## Worked example 1: slope, concavity, and speed are different

For x = 2 cos t and y = sin t, x′ = −2 sin t and y′ = cos t. Away from sin t = 0,

dy/dx = −(1/2)cot t,

d²y/dx² = [(1/2)csc² t]/(−2 sin t) = −1/(4 sin³ t).

At t = π/4, the slope is −1/2 and the speed is √(4 sin² t + cos² t) = √(5/2). Across the upper half of the ellipse, sin t > 0, so the graph is concave downward. At t = 0, x′ = 0 while y′ = 1: the tangent is vertical. A vertical tangent can occur at an ordinary smooth point.

### Visual laboratory: a stopped clock or a geometric cusp?

```mathviz
scene "A cusp and its limiting tangent";
domain -0.5 2.5;
range -2 2;
coordinates equal;
param t = 0.6 from -1.2 to 1.2;
parametric cusp(x) = (x^2,x^3) from -1.2 to 1.2 color blue;
point moving = (t^2,t^3) color rose;
segment tangentline from (t^2-0.4,t^3-0.6*t) to (t^2+0.4,t^3+0.6*t) color amber;
```

**Predict.** What happens to the slope as the point approaches the origin from negative and positive t? Does a limiting horizontal tangent imply that the path is a smooth graph through the origin?

**Explore.** Move t through zero. The segment uses the already simplified slope 3t/2, so it remains defined at zero. It does not numerically divide two vanishing derivatives.

**Explain.** Eliminating t gives y² = x³ with x ≥ 0. Two branches meet in a cusp. Both limiting slopes are zero, while velocity (2t, 3t²) vanishes at zero. The horizontal tangent line exists in this limiting sense; the image still has a cusp.

**Transfer.** Change the curve to (x³, x⁶) and the point to (t³, t⁶). Its image is the smooth parabola y = x² despite zero velocity at t = 0. Replace the tangent segment using slope 2t³. Explain why zero velocity alone cannot diagnose a cusp.

## Arc length measures travel

For a continuously differentiable parametrization on [α, β], the path length is

L = ∫ from α to β of √(x′(t)² + y′(t)²) dt.

Piecewise continuously differentiable paths are handled by summing lengths over their pieces. The formula follows by approximating small displacements with velocity times a small parameter change and taking the limit of polygonal lengths. A derivative need not be nonzero at every point for this integral to remain valid.

Length counts traversal. For (2 cos t, 2 sin t), the speed is two. Over [0, 2π] the length is 4π; over [0, 4π] it is 8π although the visible circle is unchanged. Reparametrizing a path by a continuously differentiable monotone change that runs through the original interval exactly once preserves length: the chain-rule factor in speed is balanced by substitution in the integral. Reversing direction also preserves length because speed uses an absolute magnitude.

## Worked example 2: one astroid arc

Let x(t) = cos³ t and y(t) = sin³ t on [0, π/2]. The derivatives are −3 cos² t sin t and 3 sin² t cos t. Therefore

speed = 3√(cos⁴ t sin² t + sin⁴ t cos² t) = 3|sin t cos t|.

Both sine and cosine are nonnegative on this interval, so the absolute value may be removed. The arc length is

∫₀^(π/2) 3 sin t cos t dt = (3/2)[sin² t]₀^(π/2) = 3/2.

The full astroid has four congruent arcs and perimeter six. Velocity vanishes at the arc endpoints; the length calculation is still valid. Removing the absolute value over a full revolution instead would make positive and negative contributions cancel, incorrectly giving zero travel.

## Polar coordinates describe direction and distance

Polar coordinates use x = r cos θ and y = r sin θ. Angles are in radians. A positive radius travels distance r along direction θ; a negative radius travels |r| in the opposite direction. Thus (r, θ) and (−r, θ + π) describe the same point. The origin has no unique angle.

A polar equation r = f(θ) becomes a genuine parametric curve (f(θ)cos θ, f(θ)sin θ). It can have loops, self-intersections, or repeated traversal, so identifying its parameter interval is part of the mathematics.

### Visual laboratory: from a circle to a cardioid to an inner loop

```mathviz
scene "A polar family and its radius segment";
domain -4 4;
range -4 4;
coordinates equal;
param a = 1 from 0.3 to 1.5;
param b = 1 from 0 to 2;
param t = 0.8 from 0 to 6.283185307179586;
fn radiusvalue(x) = a+b*cos(x);
parametric polarcurve(x) = (radiusvalue(x)*cos(x),radiusvalue(x)*sin(x)) from 0 to 2*pi color teal;
point marker = (radiusvalue(t)*cos(t),radiusvalue(t)*sin(t)) color rose;
segment radiusline from (0,0) to (radiusvalue(t)*cos(t),radiusvalue(t)*sin(t)) color amber;
animate t from 0 to 6.283185307179586 duration 12;
```

**Predict.** What shape appears when b = 0? When a = b, at which angle does the curve reach the origin? What changes when b exceeds a?

**Explore.** Compare (a, b) = (1, 0), (1, 1), and (1, 2). Scrub through θ = π. In the last case the radius is negative, placing the marker on the positive horizontal axis.

**Explain.** The minimum radius is a − b. At equality it reaches zero at π, producing a cardioid cusp. When b > a, a range of negative radii generates an inner loop. The amber segment shows position, not velocity.

**Transfer.** Replace cos by sin everywhere in `radiusvalue`. Predict the rotation before running the scene. Then find the new angle where a = b gives radius zero.

## Polar area and the need to count regions

Suppose r is continuous and nonnegative on [α, β], with 0 ≤ β − α ≤ 2π. The radial region 0 ≤ ρ ≤ r(θ) has area

A = (1/2)∫ from α to β of r(θ)² dθ.

A narrow sector has area r² Δθ/2; summing and taking a limit explains both the square and the factor one-half. If 0 ≤ r_inner ≤ r_outer, subtract their squares inside the integral to obtain the area between them.

For negative radii or repeated loops, partition the angular interval and identify the geometric regions before interpreting the integral. Integrating r² through repeated traces counts multiplicity; it need not equal the area of the union of the visible regions.

## Worked example 3: cardioid area and a double-counting trap

For r = 1 + cos θ on [0, 2π], the radius is nonnegative and the sweep covers its radial region once. Using cos² θ = (1 + cos 2θ)/2,

A = (1/2)∫₀^(2π) (1 + 2 cos θ + cos² θ) dθ = (1/2)(2π + 0 + π) = 3π/2.

For r = 2 cos θ, multiplying by r gives x² + y² = 2x, or (x − 1)² + y² = 1. It is a unit circle centered at (1, 0). Use −π/2 ≤ θ ≤ π/2, where r ≥ 0, to trace it once and obtain area π. Integrating over [0, 2π] gives 2π because that parametrization traces the same circle twice.

If r is continuously differentiable, differentiating its Cartesian coordinates gives speed √(r² + (dr/dθ)²). Thus polar arc length is ∫√(r² + r′²) dθ over the chosen traversal interval. Area and length have different integrands and different units; neither formula can be inferred from the other by removing a square.

## Conics from one distance rule

An ellipse, parabola, and hyperbola can all be described without starting from three unrelated equations. Fix a **focus** at the origin and a vertical **directrix** \(x=d\), with \(d>0\). A point \(P=(x,y)\) belongs to the conic of eccentricity \(e>0\) when its distance to the focus equals \(e\) times its distance to the directrix:

\[
\sqrt{x^2+y^2}=e|x-d|.
\]

On the side \(x<d\), set \(r=\sqrt{x^2+y^2}\) and \(x=r\cos\theta\). The distance rule becomes \(r=e(d-r\cos\theta)\), hence

\[
r=\frac{ed}{1+e\cos\theta},
\]
provided the denominator is positive and \(x<d\).

This derivation explains both the polar formula and its domain. Squaring the original distance equation gives \((1-e^2)x^2+y^2+2e^2dx-e^2d^2=0\). Completing the square shows an ellipse when \(0<e<1\); at \(e=1\) the \(x^2\) term disappears and the curve is a parabola; when \(e>1\) the quadratic terms have opposite signs, producing a hyperbola. For \(e>1\) the displayed polar formula traces only the part left of the directrix where it is valid. The branch to the right satisfies a different sign equation. The denominator approaching zero corresponds to points escaping toward an asymptote; a viewport clipping the graph does not create an endpoint.

**Worked case: derive instead of remembering the parabola.** Put \(e=1,d=2\). Then \(r=2/(1+\cos\theta)\), so \(r+x=2\). Since \(r\ge0\), square \(r=2-x\) to get \(x^2+y^2=(2-x)^2\), or \(y^2=4-4x\). The vertex is \((1,0)\), the focus is \((0,0)\), and the directrix is \(x=2\). The equation opens left, consistent with a point becoming farther from the directrix as it moves left. Check the branch condition \(x\le1<2\); no extraneous portion was introduced by squaring.

```mathviz
scene "A focus, directrix, and changing eccentricity";
domain -5 3;
range -5 5;
coordinates equal;
param eccentricity = 0.6 from 0.2 to 1.7;
param angle = 0.8 from -2 to 2;
param d = 2 from 1 to 2.5;
fn radiusvalue(x) = eccentricity*d/(1+eccentricity*cos(x));
parametric left_arc(x) = (radiusvalue(x)*cos(x),radiusvalue(x)*sin(x)) from -2 to 2 color blue;
point focus = (0,0) color rose;
point selected = (radiusvalue(angle)*cos(angle),radiusvalue(angle)*sin(angle)) color teal;
segment directrix from (d,-5) to (d,5) color amber;
segment focus_distance from (0,0) to (radiusvalue(angle)*cos(angle),radiusvalue(angle)*sin(angle)) color rose;
segment directrix_distance from (radiusvalue(angle)*cos(angle),radiusvalue(angle)*sin(angle)) to (d,radiusvalue(angle)*sin(angle)) color teal;
```

**Predict.** Hold d and angle fixed. Does changing e alter the ratio of the two colored distances or only their lengths? **Explore.** Try e=0.6,1,1.5. The scene shows only angles from −2 to 2; for e<1 that is an arc of a closed ellipse, not the whole ellipse. **Explain.** Compute the two lengths from the coordinates and prove their ratio is e wherever the formula is defined. **Transfer.** Move the directrix from d=2 to d=1 while keeping e=1. Derive the new vertex before dragging the slider. Then describe why the vertical line is still a geometric condition, rather than a decorative axis.

```exercise
{"id":"calc-conic-focus-directrix","type":"written","prompt":"A conic has focus at the origin, directrix x=3, and eccentricity 1/2. Derive its Cartesian equation and identify its center and horizontal semiaxis. Explain why squaring your distance equation did not add points on the wrong side of the directrix.","hints":["Begin with sqrt(x²+y²)=(3−x)/2 on the x<3 branch.","Complete the square in (3/4)x²+(3/2)x+y²−9/4=0."],"rubric":["Derives the focus–directrix equation with the correct branch","Completes the square correctly","Finds center (−1,0) and horizontal semiaxis 2","Checks that the resulting ellipse lies entirely left of x=3"],"solution":"The distance rule is sqrt(x²+y²)=(3−x)/2 for x<3. Squaring and simplifying gives (3/4)x²+y²+(3/2)x−9/4=0, hence (3/4)(x+1)²+y²=3. In standard form, (x+1)²/4+y²/3=1. The center is (−1,0) and the horizontal semiaxis is 2, so every point has x between −3 and 1. This is strictly less than 3, and both sides of the unsquared equation are nonnegative; therefore no wrong-side point was introduced."}
```

## Exercises

1. For (3 cos t, 2 sin t), find slope and speed at t = π/4.
2. For (t², t³), find first and second derivatives with respect to x when t ≠ 0. Describe the origin.
3. For (t³, t⁶), eliminate t and explain why zero velocity at zero does not create a cusp.
4. Find the length of (2 cos t, 2 sin t) on [0, 4π] and compare it with the circumference of its image.
5. For k > 0, find the area and perimeter of r = k(1 + cos θ).
6. Explain why using [0, 2π] for r = 2 cos θ doubles its area integral. Give an interval that traces it once.
7. Find the area inside r = 2 and outside r = 1 + cos θ.
8. A circle appears elliptical in a plot whose horizontal and vertical scales differ. Which mathematical conclusions about lengths and angles become unreliable from appearance alone?
9. Modify the first simulation to display two points on the unit circle, one at angle 2πt and the other at angle 2πt², for 0 ≤ t ≤ 1. Compare their speeds at t = 1/4 and identify when their positions coincide.

<details><summary>First hints: choose the representation</summary>

1. Differentiate coordinates first. 2. Apply the chain rule twice. 3. Express y as a function of x. 4. Integrate speed, retaining the full interval. 5. Area scales quadratically and length linearly. 6. Convert to Cartesian coordinates or inspect the period of the position. 7. Check which radius is larger before subtracting squares. 8. Think about unequal stretching of the two axes. 9. Differentiate each angle, then use unit-circle speed.

</details>

<details><summary>Second hints: decisive formulas</summary>

2. The first slope is 3t/2; divide its t-derivative by 2t. 5. Polar speed simplifies to 2k|cos(θ/2)|. 6. Both Cartesian coordinates have period π. 7. The circle's area is 4π and the cardioid's is 3π/2. 9. Equality of positions requires the angle difference to be an integer multiple of 2π.

</details>

<details><summary>Full solutions</summary>

1. The slope is (2 cos t)/(−3 sin t), hence −2/3 at π/4. Speed is √(9 sin² t + 4 cos² t) = √(13/2).
2. dy/dx = 3t/2 and d²y/dx² = 3/(4t) for t ≠ 0. At zero the quotient formulas fail; the image y² = x³ has a cusp with horizontal limiting tangent.
3. Since x = t³, y = t⁶ = x². The image is the smooth parabola. Both coordinate derivatives vanish at zero because this parametrization temporarily has zero speed; its image has no cusp.
4. Speed is two, so length is 8π. The visible circle has circumference 4π and is traversed twice.
5. Area is k² times the unit cardioid area, giving 3πk²/2. Polar speed is √[k²(1 + cos θ)² + k²sin² θ] = 2k|cos(θ/2)|. Its integral on [0, 2π] is 8k.
6. Position is (2cos² θ, 2sin θ cos θ) = (1 + cos 2θ, sin 2θ). As θ runs through a 2π interval, the ordinary circle angle 2θ runs through 4π. The interval [−π/2, π/2] traces it once with nonnegative radius, yielding area π.
7. Since 0 ≤ 1 + cos θ ≤ 2, the cardioid lies inside the circle as a radial region. The required area is (1/2)∫₀^(2π) [4 − (1 + cos θ)²] dθ = 4π − 3π/2 = 5π/2.
8. Unequal scaling changes apparent angles, slopes, and ratios of lengths in different directions. Read coordinates and compute these quantities, or enforce equal coordinate scaling. Incidence and intersection locations in coordinate terms remain meaningful.
9. Set a = b = 1 so the background orbit is the unit circle. Set the t slider bounds to zero and one, replace the original particle with two named points (cos(2*pi*t),sin(2*pi*t)) and (cos(2*pi*t^2),sin(2*pi*t^2)), and remove the original amber velocity segment. Their speeds are 2π and 4πt, so at t = 1/4 they are 2π and π. Position equality requires t − t² to be an integer. On [0, 1] this expression lies in [0, 1/4], so it must be zero; they coincide only at t = 0 and t = 1. Adjust the animation to the new slider interval too.

</details>

## Recap and a modelling habit

Before calculating, state the coordinate functions, parameter interval, and traversal count. Then distinguish position, velocity, speed, and geometric image. A zero derivative can indicate a clock effect; a closed picture can hide repeated travel; a squared radius can hide overlapping regions. Use the visual to form a prediction, then use derivatives and integrals to justify it. Complete the [course assessments](assessments.md) by recording assumptions alongside each answer.

For university lectures and further practice, see [MIT 18.01SC: Parametric Equations and Polar Coordinates](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/part-c-parametric-equations-and-polar-coordinates/) and [OpenStax Calculus Volume 2, Chapter 7](https://openstax.org/books/calculus-volume-2/pages/7-introduction). The explanations and exercises here are independently written.
