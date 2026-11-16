# 17. Related rates and mathematical design

## What this chapter should enable you to do

Use this chapter after differentiation, implicit differentiation, and the extreme value theorem. Allow two study sessions: one for moving systems and one for design. You should finish able to translate a verbal situation into a constraint, differentiate a relation between changing quantities, distinguish an instantaneous prediction from a complete motion, and justify a global optimum on a physical domain.

Calculus becomes useful in a model only after we identify what can change and what must remain fixed. A ladder has a fixed length but moving endpoints. A tank has a fixed shape but changing water depth. A container design has a prescribed volume but a selectable radius. In each case the equation expresses a constraint; differentiation reveals how the constraint restricts change.

## The distinction between a quantity and its present value

Write a changing distance as x(t), even when the time argument is subsequently suppressed. The statement x=3 means that the distance is three units at a particular instant. It does not mean x is constant. Consequently, differentiating x² gives 2x x′, whereas differentiating the number 9 gives zero. Substitute the observed value only after differentiating the relation that holds over an interval of time.

Every model needs assumptions. We will treat lengths and volumes as differentiable functions of time, use rigid geometric objects, and neglect deformation, leakage, and mechanical failure. These are choices to inspect, not invisible facts. A prediction becomes unreliable when the mechanism maintaining its assumptions stops working.

## Worked example 1: a sliding ladder

A rigid 5 m ladder rests against a vertical wall on level ground. Its foot moves away from the wall at 0.5 m/s. How fast is its top moving when the foot is 3 m from the wall?

Let x be the horizontal distance of the foot and y the height of the top. While both ends remain in contact,

x²+y²=25.

Differentiate with respect to time: 2x x′+2y y′=0, so y′=−(x/y)x′. At the specified instant y=√(25−9)=4 m. Therefore y′=−(3/4)(0.5)=−0.375 m/s. The negative sign means downward motion; the speed is the positive magnitude 0.375 m/s.

Notice that x/y is dimensionless. Multiplying it by a horizontal speed produces a vertical speed. As x approaches 5, the formula predicts unbounded downward speed if x′ remains fixed. This is a warning about the model: a real ladder need not maintain wall contact and constant foot speed all the way to the ground.

```mathviz
scene "One rigid ladder, two changing distances";
domain -1 6;
range -1 6;
coordinates equal;
param a = 3 from 0.2 to 4.9;
segment floorline from (0,0) to (5.5,0) color white;
segment wallline from (0,0) to (0,5.5) color white;
segment ladder from (a,0) to (0,sqrt(25-a^2)) color amber;
point foot = (a,0) color teal;
point top = (0,sqrt(25-a^2)) color rose;
```

**Predict.** Compare positions a=1 and a=4. With the same outward foot speed, where will the top fall faster?

**Explore.** Move a through those positions, keeping track of the horizontal and vertical legs. The slider selects a configuration; it does not prescribe the elapsed time between configurations.

**Explain.** Calculate x/y in both positions. A near-horizontal ladder has a large ratio, so the vertical speed has greater magnitude. The picture suggests this relation; implicit differentiation establishes it.

**Transfer.** Replace 25 by 100 in the source and adjust the axes and slider bounds for a 10 m ladder. At x=6 m and x′=0.5 m/s, determine y′ before viewing the new configuration. Why is it unchanged from the worked example?

## Worked example 2: filling a cone

An inverted conical tank is 4 m tall and has top radius 2 m. Water enters at q=0.5 m³/min. Assume a level water surface and no outflow. Similar triangles give the water-surface radius r=h/2 at every depth h. Thus

V=(π/3)r²h=πh³/12,

and differentiation gives q=dV/dt=(πh²/4)h′. Therefore h′=4q/(πh²). At h=2 m, the depth increases at 1/(2π) m/min, approximately 0.159 m/min.

The factor πh²/4 is the horizontal cross-sectional area of the water surface. More generally, in a tank with cross-sectional area A(h), a thin extra layer has volume approximately A(h)Δh; hence V′(h)=A(h) and h′=q/A(h). This explains why equal volume inflow raises the surface more slowly in a wider region.

```mathviz
scene "Depth rises faster in the narrow part";
domain 0.3 4;
range 0 4;
param q = 0.5 from 0.1 to 1.5;
param depth = 2 from 0.7 to 4;
fn rise(x) = 4*q/(pi*x^2);
plot rise color teal;
point current = (depth,rise(depth)) color rose;
```

**Predict.** If the depth doubles and the inflow stays fixed, does the rise rate halve, quarter, or remain unchanged?

**Explore.** Compare depth=1 and depth=2; then double q. The horizontal axis is depth in metres and the vertical axis is rise rate in metres per minute. Large rates near the tip may lie above the window.

**Explain.** The inverse-square dependence comes from the cross-sectional area, not directly from the cone's cubic volume. Doubling h quarters h′; doubling q doubles h′.

**Transfer.** Change the source to describe a cylindrical tank of radius 2 m. The rate graph should become the horizontal line q/(4π). Explain which geometric feature makes the depth irrelevant.

## Optimization requires a feasible set

A stationary point is a candidate, not a conclusion. A complete design argument specifies the objective, constraints, feasible domain, and units; then it investigates interior critical points, endpoints, and any relevant limiting behavior. Continuity on a closed bounded interval guarantees that extrema exist. On an open or unbounded domain, existence requires an additional argument.

An equation such as “volume is fixed” removes a degree of freedom. Substitute that constraint into the objective before optimizing. Do not differentiate the objective while pretending dependent design variables are independent.

## Worked example 3: material for a cylindrical container

Design a closed cylinder of volume V=2π m³. Let r>0 be its radius and h>0 its height. Ignore seams and material thickness. Suppose top and bottom material have relative cost k per square metre, while side material has relative cost 1. Then

πr²h=V, h=V/(πr²), C(r)=2πkr²+2V/r.

Here C has units of the chosen material-cost unit. The derivative is C′(r)=4πkr−2V/r². The only positive stationary radius satisfies r³=V/(2πk). Moreover C″(r)=4πk+4V/r³>0 for r>0, provided V,k>0. The derivative is therefore strictly increasing. Since C tends to infinity as r approaches either zero or infinity, this stationary point is the unique global minimum.

For equal material costs k=1, r=1 m and h=2 m. At the optimum the height equals the diameter. With unequal costs the relation becomes h=2kr. Expensive ends favor a smaller radius and a taller cylinder.

```mathviz
scene "How a cost assumption changes the design";
domain 0.35 2.8;
range 0 100;
param volume = 6.283185307 from 1 to 12;
param k = 1 from 0.5 to 3;
fn cost(x) = 2*pi*k*x^2+2*volume/x;
plot cost color violet;
point optimum = ((volume/(2*pi*k))^(1/3),cost((volume/(2*pi*k))^(1/3))) color rose;
```

**Predict.** As k increases, predict which way the optimum moves and how the optimal height changes.

**Explore.** Hold volume fixed while changing k, then hold k fixed while changing volume. The plotted horizontal variable is radius, not time. Some large costs exceed the displayed range.

**Explain.** The formula r∗=(V/(2πk))^(1/3) separates two competing effects. Its logarithmic derivative gives dr∗/r∗=(1/3)dV/V−(1/3)dk/k for infinitesimal changes. A small 3% increase in V produces approximately a 1% increase in optimal radius when k is fixed.

**Transfer.** Suppose manufacturing restricts 1.2≤r≤2 for V=2π and k=1. The unconstrained optimum is infeasible. Since C′>0 throughout this interval, the best feasible choice is r=1.2. The smallest cost on the visible curve is not automatically the best feasible design.

The [road-and-field recitation](calculus-i-ii-recitation.md) provides a less formulaic design choice: two routes trade shorter distance against different speeds. Its parameter variation makes the unconstrained stationary location cross the feasible boundary. Decide where the switch occurs before opening that derivation.

## Exercises

1. A 13 m ladder has foot distance 5 m and outward speed 0.4 m/s. Find the top's velocity, including its sign and units.
2. A student substitutes x=3 into x²+y²=25 and then differentiates 9+y²=25 to conclude y′=0. Identify precisely why the step fails.
3. In the conical tank above, find the rise rate at h=1 when q=0.25 m³/min. How does it change at h=2 with the same inflow?
4. The cone initially contains water to depth 1 m. With q=0.5 m³/min, derive h(t) until the tank fills, and find the filling time.
5. A rectangle has perimeter 20 m. Find the maximum possible area and justify the global conclusion, including degenerate endpoint configurations.
6. For the closed cylinder with V=2π and k=4, find optimal r and h, and explain the shape change relative to k=1.
7. For V=2π and k=1, optimize the cylinder subject to 0.4≤r≤0.8. Justify why a stationary-point search alone would miss the answer.
8. A design's required volume increases by 6%, with k fixed. Estimate the percentage change in optimal radius, then compute its exact multiplicative change. Distinguish approximation from equality.
9. If the conical tank drains at 0.2 m³/min while inflow is 0.5 m³/min, find h′ at h=2. State an assumption needed to treat the drain rate as constant.

<details><summary>Hints</summary>

1. Find the height before evaluating y′=−xx′/y.
2. Ask whether x=3 holds over a time interval or at one instant.
3. Use h′=4q/(πh²); retain the square on h.
4. Integrate the constant volume rate, then invert V=πh³/12.
5. Eliminate one side using the perimeter; inspect [0,10].
6. Use r³=V/(2πk), followed by the volume constraint.
7. Determine the sign of C′ throughout the allowed interval.
8. Compare the differential estimate with 1.06^(1/3).
9. Replace inflow by net volume change, and inspect the physical drain mechanism.

</details>

<details><summary>Full solutions</summary>

1. The top height is √(169−25)=12 m. Thus y′=−5(0.4)/12=−1/6 m/s: the top moves downward at 1/6 m/s.
2. The original identity holds at nearby times, whereas x=3 generally does not. Substitution removes a changing term before its derivative is taken. Differentiating the identity first gives 2xx′+2yy′=0; the value 3 then belongs in x, not in place of the whole function before differentiation.
3. At h=1, h′=4(0.25)/π=1/π m/min. At h=2, h′=1/(4π) m/min. The wider cross section reduces the rise rate by a factor of four.
4. Initial volume is π/12 m³, so V(t)=π/12+t/2. Consequently h(t)=(1+6t/π)^(1/3) m when t is measured in minutes. Setting h=4 gives 64=1+6t/π, hence t=21π/2 min. The formula is valid only until overflow begins.
5. If one side is x, the other is 10−x, and A=x(10−x), with 0≤x≤10. A′=10−2x vanishes only at x=5. The derivative changes from positive to negative; the endpoints have area zero. The unique maximum is 25 m² for a square of side 5 m. The degenerate endpoints are included to compare limiting configurations.
6. The radius is 4^(−1/3) m, approximately 0.630 m. The height is 2/r²=2·4^(2/3) m, approximately 5.040 m. Equivalently h=8r. Expensive ends reduce the optimal end area while the required volume forces a taller side.
7. Here C′=4π(r−1/r²)<0 whenever 0<r<1. Cost decreases across the entire feasible interval, so r=0.8 m is optimal. The height is 2/(0.8)²=3.125 m. There is no interior stationary point in this interval; the minimum occurs at its right endpoint.
8. The differential estimate is a 6%/3=2% increase. Exactly, r_new/r_old=1.06^(1/3), approximately 1.01961, so the increase is about 1.961%. The differential gives the tangent approximation to the cube-root dependence.
9. The net rate is 0.3 m³/min. Therefore h′=4(0.3)/(π·4)=0.3/π m/min. A pump maintaining a fixed discharge could support the constant-drain assumption; a gravity outlet commonly has a depth-dependent discharge and needs a different model.

</details>

## Further study and readiness check

For parallel treatments and additional problems, use [OpenStax, Related Rates](https://openstax.org/books/calculus-volume-1/pages/4-1-related-rates), [OpenStax, Applied Optimization Problems](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems), and [MIT 18.01SC, Applications of Differentiation](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/).

Before proceeding, explain without a diagram why the cone rises more slowly at greater depth, and without a graph why the cylinder optimum is global. A successful explanation identifies the governing equation, its assumptions, and the derivative that answers the question.
