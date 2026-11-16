# Motion, arc length, and curvature

## Prerequisites and outcomes

You need the chain rule, definite integrals, parametric curves, and the length and dot product of vectors. After this chapter you should be able to distinguish speed from velocity, compute distance travelled, derive and use planar curvature, and explain which quantities change when the same path is traversed on a different clock. Allow two study sessions: one for the exposition and experiments, and one for the problems.

The guiding question is practical: **when a particle accelerates, is it speeding up, changing direction, or both?** A drawing of its path alone cannot answer. We need both geometry and timing.

## Position becomes motion

A planar position function is **r**(t) = (x(t), y(t)). If its coordinates are differentiable, its velocity is **v** = **r**′ = (x′, y′). The scalar speed is

v = |**v**| = √(x′² + y′²).

When second derivatives exist, acceleration is **a** = **r**″. Bold **v** denotes a vector; unbold v denotes its nonnegative magnitude. Speed has units of distance/time and acceleration has units of distance/time². Neither acceleration nor velocity is generally the line joining the particle to the origin.

For a continuously differentiable position on [a, b], the distance travelled is

L = ∫ₐᵇ |**r**′(t)| dt.

Small time intervals contribute approximately speed × elapsed time; adding and passing to a limit gives this formula. Piecewise continuously differentiable motion is treated by adding lengths of pieces. The formula counts retracing. In contrast, displacement is **r**(b) − **r**(a); its magnitude can be zero even when distance is large.

A parametrization is **regular** where **r**′ ≠ **0**. On a regular interval the accumulated arc length s(t) satisfies ds/dt = v > 0, so it provides an increasing alternative parameter. The unit tangent is **T** = **r**′/v: direction of travel with the speed removed.

## Curvature measures turning per distance

For a twice continuously differentiable regular curve, define

κ = |d**T**/ds| = |**T**′|/v.

Curvature has units of inverse distance. It measures how much the direction changes per unit distance, so merely traversing a bend faster does not increase its curvature. A straight line has κ = 0. A circle of radius R has κ = 1/R.

Here is a derivation of the useful computational formula. Write **r**′ = v**T**, then differentiate:

**a** = v′**T** + v**T**′.

Since **T**·**T** = 1, differentiation gives **T**·**T**′ = 0. Thus the two terms are perpendicular. The first changes speed; the second turns the velocity. Taking the absolute planar determinant of **r**′ and **a** eliminates the parallel term, giving

|x′y″ − y′x″| = v²|**T**′| = v³κ.

Consequently,

κ = |x′y″ − y′x″| / (x′² + y′²)^(3/2).

The denominator must be nonzero. When κ > 0, define the principal normal **N** = **T**′/|**T**′|. The acceleration decomposition becomes

**a** = v′**T** + v²κ**N**.

Its tangential component is signed: v′ can be negative. Its normal component has magnitude v²κ. At κ = 0 the principal normal may be undefined, although the turning contribution is zero. For a circle, v²κ = v²/R is the familiar centripetal acceleration.

## Worked example 1: a parabola, with distance and bending

Take **r**(t) = (t, t²/2), 0 ≤ t ≤ 2. Then **r**′ = (1,t), **r**″ = (0,1), and v = √(1+t²). Because the first coordinate derivative is 1, regularity holds everywhere.

Using an antiderivative that can be checked by differentiation,

L = [t√(1+t²)/2 + ln(t+√(1+t²))/2]₀²

= √5 + ln(2+√5)/2 ≈ 2.958.

The displacement is (2,2), of magnitude √8 ≈ 2.828, smaller than the distance along the bend. Meanwhile κ = 1/(1+t²)^(3/2): the vertex bends most sharply even though the particle moves more slowly there.

At t = 1, v = √2, v′ = 1/√2, κ = 1/(2√2), **T** = (1,1)/√2, and **N** = (−1,1)/√2. Therefore

v′**T** + v²κ**N** = (1/2,1/2) + (−1/2,1/2) = (0,1),

agreeing with the direct second derivative. Acceleration need not point along motion.

## Visual laboratory: a circle with an adjustable clock

The blue circle is the path, the rose point is position, the teal segment shows 0.25 times velocity, and the amber segment shows 0.15 times acceleration. Segment endpoints show vector direction; their different scale factors mean their displayed lengths cannot be compared directly.

```mathviz
scene "Same circular path, different motion";
domain -4 4;
range -4 4;
coordinates equal;
param R = 2 from 0.5 to 2.5;
param w = 1 from 0.2 to 2;
param t = 0 from 0 to 8;
parametric circle(x) = (R*cos(x),R*sin(x)) from 0 to 2*pi color blue;
point particle = (R*cos(w*t),R*sin(w*t)) color rose;
segment velocity from (R*cos(w*t),R*sin(w*t)) to (R*cos(w*t)-0.25*R*w*sin(w*t),R*sin(w*t)+0.25*R*w*cos(w*t)) color teal;
segment acceleration from (R*cos(w*t),R*sin(w*t)) to (R*cos(w*t)-0.15*R*w^2*cos(w*t),R*sin(w*t)-0.15*R*w^2*sin(w*t)) color amber;
animate t from 0 to 8 duration 10;
```

**Predict.** Holding R fixed, what happens to speed, acceleration magnitude, and curvature if w doubles?

**Explore.** Set R = 1 and compare w = 0.5 with w = 1. Pause at t = 0 to compare vectors at the same position. Then change R while keeping w fixed.

**Explain.** Doubling w doubles speed and quadruples acceleration; curvature stays 1/R. At fixed w, a larger circle requires greater speed and greater acceleration, despite its smaller curvature.

**Transfer.** Edit the source to introduce a speed parameter V, replacing each w by V/R. Predict how increasing R now affects acceleration, then derive the result before running your edit.

## Worked example 2: a circle that speeds up

For uniform circular motion **r**(t) = (R cos(wt), R sin(wt)), where R > 0 and w > 0, differentiation gives v = Rw and **a** = −w²**r**. Hence acceleration is inward with magnitude Rw² = v²/R, while curvature is 1/R.

Now use **r**(t) = (2cos(t²), 2sin(t²)) for t > 0. The path remains a circle of radius 2, but its angular speed is 2t. Let **e**ᵣ = (cos(t²),sin(t²)) and **e**θ = (−sin(t²),cos(t²)). Then

**v** = 4t**e**θ, v = 4t, and **a** = 4**e**θ − 8t²**e**ᵣ.

The tangential acceleration is 4; the inward acceleration has magnitude 8t². The curvature formula still gives 1/2. From t = 1 to t = 2 the travelled distance is ∫₁²4t dt = 6. At t = 0 the velocity vanishes, so this parametrization is not regular there and the quotient formula for curvature cannot be applied at that time.

## Visual laboratory: the circle that matches a bend

For a regular curve with κ > 0, its **osculating circle** has radius ρ = 1/κ and center **r** + ρ**N**. It matches position, tangent, and curvature locally; it generally does not coincide with the whole curve.

For (t,bt²) with b > 0, write Q = 1+4b²t². The radius is Q^(3/2)/(2b), and the center is (−4b²t³, 3bt²+1/(2b)). These formulas drive this scene.

```mathviz
scene "A parabola and its osculating circle";
domain -6 6;
range -1 7;
coordinates equal;
param b = 0.5 from 0.3 to 1.2;
param t = 0 from -0.7 to 0.7;
parametric parabola(x) = (x,b*x^2) from -2 to 2 color blue;
parametric contact_circle(x) = (-4*b^2*t^3+(1+4*b^2*t^2)^(3/2)*cos(x)/(2*b),3*b*t^2+1/(2*b)+(1+4*b^2*t^2)^(3/2)*sin(x)/(2*b)) from 0 to 2*pi color amber;
point contact = (t,b*t^2) color rose;
point centre = (-4*b^2*t^3,3*b*t^2+1/(2*b)) color violet;
segment radius from (t,b*t^2) to (-4*b^2*t^3,3*b*t^2+1/(2*b)) color teal;
```

**Predict.** At fixed b, does the matching circle grow or shrink as |t| increases?

**Explore.** Compare t = 0, 0.35, and 0.7. Then return to zero and change b. Equal coordinate scales preserve angles and circles.

**Explain.** Here κ = 2b/(1+4b²t²)^(3/2), so curvature falls away from the vertex and radius grows. At the vertex, κ = 2b. A finite display illustrates contact but cannot prove equality of curvatures.

**Transfer.** Replace the parabola with (x,x³). Explain why its origin has no finite osculating circle: the curvature there is zero. Derive new center formulas before editing the circle.

## Worked example 3: changing clocks and losing regularity

Let **q**(u) = **r**(φ(u)), where **r** is twice continuously differentiable and regular, and φ is twice continuously differentiable with φ′ ≠ 0. The chain rule gives

**q**′ = **r**′(φ)φ′, **q**″ = **r**″(φ)(φ′)² + **r**′(φ)φ″.

The curvature numerator gains |φ′|³ and the denominator gains the same factor. Thus curvature at corresponding points is unchanged. A monotone change of variable also preserves length over corresponding intervals, including decreasing clocks when bounds are reversed.

Consider **r**(t) = (t,t²) and φ(u) = u³. Then **q**(u) = (u³,u⁶) draws the same parabola, but **q**′(0) = **0**. Its curvature quotient at zero is 0/0. This is a failure of the clock's regularity, not a cusp in the underlying parabola: the regular parametrization **r** has curvature 2 at its vertex. Always inspect the hypotheses before interpreting a failed formula geometrically.

## An inverse design question: choose speed from a bend

The normal acceleration identity can be read backwards. If a vehicle must keep its normal acceleration below a specified limit \(A>0\) along a regular planar path, then at a point of curvature \(\kappa>0\) its speed must satisfy \(v\le\sqrt{A/\kappa}\). This is a *pointwise* restriction: a variable-speed plan may go faster where the path is straighter. The inequality says nothing by itself about tangential acceleration, braking distance, traction, or whether the proposed speed profile can be achieved. Those require additional physical assumptions.

For the graph \(y=bx^2\) with \(b>0\), \(\kappa(x)=2b/(1+4b^2x^2)^{3/2}\). The maximum is \(2b\) at the vertex. Thus a single constant speed valid over the whole displayed arc satisfies \(v\le\sqrt{A/(2b)}\). If \(b\) has units of inverse metres, \(\kappa\) has inverse-metre units and \(A/\kappa\) has units \(\mathrm{m}^2/\mathrm{s}^2\), as a squared speed should. At \(x=1/(2b)\), curvature falls to \(2b/(2\sqrt2)\), allowing a speed larger by a factor \(\sqrt{2\sqrt2}\) under the normal-acceleration constraint alone. Do not infer the permitted speed merely from how sharp the curve looks under unequal axis scales.

```exercise
{"id":"calc-curvature-design","type":"written","prompt":"A planar path is y=x²/100 with coordinates in metres. A design limit is 2 m/s² of normal acceleration. Find the largest constant speed justified by this limit on the full path, and the local limit at x=50 m. Explain one additional condition needed before calling either speed safe for a real vehicle.","hints":["Use b=1/100 m⁻¹ and κ(x)=2b/(1+4b²x²)^(3/2).","At x=50, the denominator is 2^(3/2)."],"rubric":["Finds the maximum curvature at the vertex","Computes the global constant-speed bound as 10 m/s","Computes the local bound at x=50 as 10·2^(3/4) m/s","Names a relevant unmodelled condition without claiming the acceleration bound is a full safety certificate"],"solution":"Here b=0.01 m⁻¹, so κ(0)=0.02 m⁻¹ is the maximum. The global constant-speed condition v²κ≤2 gives v≤sqrt(2/0.02)=10 m/s. At x=50, 4b²x²=1 and κ=0.02/2^(3/2); hence v≤sqrt(2·2^(3/2)/0.02)=10·2^(3/4)≈16.82 m/s. These are bounds from normal acceleration only. Braking, tangential acceleration, road friction, and the ability to change from one speed to another can impose stricter limits."}
```

## Exercises

1. **Fluency.** For **r**(t) = (3t,4t), 0 ≤ t ≤ 2, find velocity, speed, acceleration, length, and curvature.
2. **Retracing.** For **r**(t) = (cos(t),sin(t)), 0 ≤ t ≤ 4π, compare distance, displacement, and the length of the visible circle.
3. **Derivation.** Derive κ = |f″|/(1+f′²)^(3/2) for the graph parametrization (t,f(t)). State its hypotheses.
4. **Application.** A vehicle takes a radius-50-m circular bend at 10 m/s. Find normal acceleration. Repeat at 20 m/s.
5. **Calculation.** For **r**(t) = (3cos(t),sin(t)), find curvature at t = 0 and t = π/2. Which location bends more sharply?
6. **Diagnosis.** A student says constant speed implies zero acceleration. Give a counterexample and identify the missing distinction.
7. **Proof.** For regular twice continuously differentiable motion, prove v′ = (**v**·**a**)/v. Deduce what perpendicular velocity and acceleration imply about speed on an interval.
8. **Simulation design.** Modify the first scene to use angular position t². State the correct velocity and acceleration components and explain what happens at zero.
9. **Challenge.** Is **r**(t) = (t²,t³) regular at zero? Find its curvature for t ≠ 0 and its limiting behavior. Compare with worked example 3.

<details><summary>Hints — open after a first attempt</summary>

1. The derivative is a constant vector.
2. Count complete revolutions.
3. Substitute x′ = 1 and x″ = 0.
4. Use v²/R and keep the units.
5. Simplify the determinant before substituting.
6. Revisit uniform circular motion.
7. Differentiate v² = **v**·**v**.
8. Differentiate both the trigonometric expressions and their inner argument.
9. Factor powers of |t| out of the denominator.

</details>

<details><summary>Full solutions</summary>

1. **v** = (3,4), v = 5, **a** = (0,0), L = ∫₀²5 dt = 10, and κ = 0/125 = 0. The particle moves without changing either speed or direction.
2. Speed is 1, so distance is 4π. Initial and final positions are (1,0), so displacement is (0,0). The visible circle has circumference 2π and is traversed twice.
3. With f twice continuously differentiable, (t,f(t)) is regular because its first derivative component is 1. The determinant numerator is |f″| and speed cubed is (1+f′²)^(3/2), giving the stated formula.
4. At 10 m/s, normal acceleration is 100/50 = 2 m/s². At 20 m/s it is 400/50 = 8 m/s². Doubling speed quadruples the turning acceleration.
5. Velocity is (−3sin(t),cos(t)) and acceleration is (−3cos(t),−sin(t)); the determinant is 3. Hence κ = 3/(9sin²(t)+cos²(t))^(3/2). At zero κ = 3; at π/2 κ = 1/9. The major-axis endpoint (3,0) bends more sharply.
6. For (cos(t),sin(t)), speed is always 1 but acceleration is (−cos(t),−sin(t)), of magnitude 1. Constant speed fixes the magnitude of velocity, while its direction can change.
7. Differentiation gives 2vv′ = 2**v**·**a**. Divide by 2v, allowed by regularity. If **v**·**a** = 0 throughout an interval, v′ = 0 there, so the mean value theorem implies constant speed on that interval.
8. Use position (Rcos(t²),Rsin(t²)), velocity (−2Rt sin(t²),2Rt cos(t²)), and acceleration (−2Rsin(t²)−4Rt²cos(t²),2Rcos(t²)−4Rt²sin(t²)). Substitute these in the segment endpoints with the same display scales. At zero velocity vanishes; acceleration is (0,2R). The motion is not regular there.
9. Both velocity components vanish at zero. Elsewhere the numerator is |(2t)(6t)−(3t²)(2)| = 6t² and the denominator is |t|³(4+9t²)^(3/2). Thus κ = 6/[|t|(4+9t²)^(3/2)] → ∞ as t → 0. This curve has a cusp; the stationary parametrization of the smooth parabola in example 3 has a finite curvature limit instead.

</details>

## Further reading

The standard topics and notation can be compared with OpenStax's [Arc Length and Curvature](https://openstax.org/books/calculus-volume-3/pages/3-3-arc-length-and-curvature) and [Motion in Space](https://openstax.org/books/calculus-volume-3/pages/3-4-motion-in-space). Their three-dimensional extension replaces the planar determinant with the magnitude of a cross product.

## Extension: surface area of revolution

Arc length also measures the width of a narrow strip on a curved surface. Revolve a meridian curve (x(t),y(t)) about the x-axis, with y(t) ≥ 0. Assume the parametrization is continuously differentiable and regular on [a,b]. Requiring x to be strictly monotone is a convenient sufficient condition that prevents repeated surface bands. More general curves require checking overlap explicitly; tracing the same meridian twice doubles the integral without creating additional surface.

Join nearby meridian points by a straight segment of length ℓ. Rotating it generates a conical frustum whose lateral area is π(y₁+y₂)ℓ: average circumference times slant length. As the segments shrink, average radius approaches y and slant length approaches ds. Adding these contributions and taking the limit gives

A = ∫ 2πy ds = 2π∫ₐᵇ y(t)√(x′(t)²+y′(t)²) dt.

This computes curved area, excluding any closing end disks. For a nonnegative C¹ graph y = f(x), the formula becomes A = 2π∫ f(x)√(1+f′(x)²) dx. Using dx alone instead of ds would ignore the strip's slope. Around the y-axis, the radius is |x| instead. Radius means distance to the axis, never a signed coordinate. Piecewise smooth surfaces can be split into pieces, avoiding duplicated areas. Compare the standard formula in [OpenStax's parametric calculus section](https://openstax.org/books/calculus-volume-2/pages/7-2-calculus-of-parametric-curves).

### Worked example: the area of a sphere

Rotate the upper semicircle (x(t),y(t)) = (Rcos(t),Rsin(t)), 0 ≤ t ≤ π, with R > 0. Its speed is R, its radius from the axis is Rsin(t), and it is regular even at the poles. Thus

A = 2πR²∫₀^π sin(t) dt = 2πR²[−cos(t)]₀^π = 4πR².

The equivalent graph y = √(R²−x²) has unbounded derivatives at its endpoints; the regular parametrization avoids applying the graph formula outside its C¹ hypotheses. Doubling R quadruples area, consistent with square-length units.

### Experiment: inspect the meridian and its rotating radius

This is a **two-dimensional meridian view**, not a rendered three-dimensional surface. The rose arc generates a spherical cap; the teal segment is the radius of its boundary ring.

```mathviz
scene "Sphere meridian and cap boundary radius";
domain -3 3;
range -0.5 3;
coordinates equal;
param R = 2 from 0.5 to 2.5;
param fraction = 0.5 from 0.05 to 1;
parametric meridian(x) = (R*cos(x),R*sin(x)) from 0 to pi color blue;
parametric cap_arc(x) = (R*cos(x),R*sin(x)) from 0 to pi*fraction color rose;
point boundary = (R*cos(pi*fraction),R*sin(pi*fraction)) color amber;
segment ring_radius from (R*cos(pi*fraction),0) to (R*cos(pi*fraction),R*sin(pi*fraction)) color teal;
```

**Predict.** Does half the angular sweep generate half the sphere's area? Does a quarter generate a quarter?

**Explore.** Compare fraction = 0.25, 0.5, and 1, then double R while keeping fraction fixed.

**Explain.** Integration through angle β gives cap area 2πR²(1−cos(β)); its fraction of total area is (1−cos(β))/2. Angular fraction and area fraction generally differ.

**Transfer.** Express cap area using its axial height H = R−Rcos(β). Explain why it equals 2πRH despite the changing ring radius.

### Surface-area practice

10. Rotate y = (r/h)x for 0 ≤ x ≤ h about the x-axis, with r,h > 0. Find the cone's lateral area. Compare with rotating y = r on the same interval to make a cylinder.
11. On a radius-R sphere, find the area between the planes x = u and x = v, where −R ≤ u < v ≤ R. Evaluate for R = 3, u = −1, v = 2. Do not include planar closing disks.

<details><summary>Hints</summary>

10. The cone's graph has constant slope r/h. 11. In the semicircle parametrization, dx = −Rsin(t) dt; account for the reversed orientation.

</details>

<details><summary>Full solutions</summary>

10. Cone area is 2π∫₀ʰ (rx/h)√(1+r²/h²) dx = πrh√(1+r²/h²) = πr√(h²+r²). The square root is the slant height. The cylinder has zero graph slope, giving 2π∫₀ʰ r dx = 2πrh. Neither includes its base or end disks.
11. Substituting dx = −Rsin(t) dt into the spherical area integral and reversing bounds gives A = 2πR∫ᵤᵛ dx = 2πR(v−u). Therefore A = 2π·3·3 = 18π square units. Only the band's axial width matters; two equal-width bands on the same sphere have equal curved areas.

</details>
