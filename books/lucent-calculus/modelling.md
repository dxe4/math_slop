# 5. Optimisation, rates, and approximation

Derivatives answer practical questions only after we decide what the quantities mean. This chapter moves repeatedly between a situation, an equation, a calculation, and an interpretation. The same tangent that measures an instantaneous rate also gives a local model and suggests an algorithm for finding roots.

**Prerequisites:** the chain rule, implicit differentiation, critical points, concavity, and the extreme value theorem. Allow two study sessions plus an exercise session.

**Outcomes:** construct a model with units and a feasible domain; justify a global optimum; relate rates through a shared time variable; give a numerical guarantee for a linear approximation; perform Newton steps and recognize failure.

## 1. The model comes before its derivative

An optimization model has an **objective**, which we maximise or minimise, and **constraints**, which describe allowable choices. A formula without its domain is an incomplete model. State assumptions too: a rectangle might have negligible fence thickness, and a cost model might ignore transport.

For a continuous objective on a closed bounded interval, the extreme value theorem guarantees a largest and smallest value. Find interior points where the derivative is zero or undefined, evaluate them and the endpoints, and compare. A second derivative test classifies local behavior; it does not compare every feasible choice. On an open or unbounded interval, an optimum may fail to exist.

### Worked example 1: fencing beside a wall

Twenty metres of fencing enclose three sides of a rectangle. Let x metres be each side perpendicular to the wall, and y metres the remaining side. The constraint 2x+y=20 gives

A(x)=x(20−2x), with 0≤x≤10.

The endpoints describe degenerate rectangles. Including them makes the existence argument convenient; our final solution must have positive dimensions. Since A′(x)=20−4x, the only interior critical point is x=5. The three candidates give A(0)=0, A(5)=50, and A(10)=0. The global maximum is therefore **50 m²**, with perpendicular sides 5 m and the parallel side 10 m.

There is another useful calculation: A(x)=50−2(x−5)². A construction error of 0.1 m in x loses just 0.02 m², provided the remaining side is adjusted to maintain the constraint. The optimum is fairly tolerant of small mistakes because the first-order change vanishes there.

### Visual laboratory: move away from the optimum

**Predict.** Will moving the perpendicular side from 5 to 6 lose more area than moving it from 5 to 4? Sketch the signs of the slopes first.

```mathviz
scene "Area and sensitivity under a fixed fence budget";
domain 0 10;
range -10 60;
param a = 5 from 0 to 10;
fn area(x) = x*(20-2*x);
plot area color blue;
tangent area at a;
```

**Explore.** Move a through 4, 5, and 6. Record the area and tangent slope by calculation, using the display to compare them. Try a=0 and a=10 and interpret these shapes physically.

**Explain.** The equal losses come from the square in 50−2(x−5)². Positive slope means increasing x improves the area locally; after x=5, the negative slope reverses that advice. A horizontal tangent identifies a candidate, while the endpoint comparison establishes the global answer.

**Transfer.** Replace the budget 20 by 30 in the editor, change the domain to `0 15`, the range to `-10 130`, and the parameter's upper bound to 15. Derive the new optimum before inspecting it. More generally, budget B gives x=B/4 and maximum B²/8. Doubling the budget quadruples the area.

## 2. Related rates use a shared clock

When quantities change together, label them as functions of time even if you later suppress “(t)”. Differentiate a relation that holds throughout the motion. Only afterwards insert values that hold at one instant. This order preserves the chain-rule factors representing the rates.

### Worked example 2: a sliding ladder

A rigid 5 m ladder has foot position x(t) and top height y(t). While both ends stay in contact with perpendicular surfaces,

x²+y²=25, so 2x x′+2y y′=0.

At x=3 m, the positive height is y=4 m. If the foot moves outward at x′=0.2 m/s, then y′=−(3/4)(0.2)=−0.15 m/s. The sign says the top moves down. Its downward speed is 0.15 m/s, a positive magnitude.

The factor dy/dx=−x/y compares height with horizontal displacement; dy/dt compares height with time. The chain rule connects them. As y approaches zero, the predicted |y′| becomes large if x′ stays fixed. This warns us that the assumed contact and driving conditions may stop describing a physical ladder near the floor.

### Worked example 3: filling a conical tank

A tank has height 6 m and top radius 3 m. Similar triangles give r=h/2 for water depth h, so its volume is V=πr²h/3=πh³/12. Differentiate to obtain V′=(πh²/4)h′.

When water enters at 2 m³/min and h=2 m, the depth rises at h′=2/π m/min. The same incoming volume produces slower height increases at greater depths because the horizontal cross-section is larger. The relation r=h/2 is a geometric constraint, not a claim that either quantity stays constant.

## 3. A useful approximation needs an error statement

Differentiability at a says

f(a+h)=f(a)+f′(a)h+r(h), where r(h)/h→0.

Thus L(a+h)=f(a)+f′(a)h captures the first-order change. The differential dy=f′(a)h is a prediction for the actual change Δy=f(a+h)−f(a); the two are not generally equal. Differentiability alone gives no universal numerical radius within which a chosen accuracy holds.

If f is twice continuously differentiable on the interval between a and a+h and |f″|≤M there, Taylor’s theorem gives

|f(a+h)−L(a+h)|≤M h²/2.

We will develop Taylor’s theorem later. Here its hypotheses and conclusion are the tool: bound curvature over the **whole interval**, then turn an input step into an error guarantee. Concavity supplies the direction of error: concave functions lie below their tangents, convex functions above them on an interval with that concavity.

### Worked example 4: estimating a square root

For f(x)=√x at a=4, f(4)=2 and f′(4)=1/4. Hence √4.08≈2+0.08/4=2.02. On [4,4.08], |f″(x)|=1/(4x^(3/2))≤1/32. The error is at most (0.08)²/64=0.0001. Concavity makes 2.02 an overestimate, so

2.0199≤√4.08≤2.02.

This is stronger than reporting many calculator digits: it specifies what is guaranteed and why.

### Visual laboratory: measuring the discarded error

**Predict.** For exp(u) approximated at zero by 1+u, should the error be positive on both sides? If the maximum input displacement halves, approximately how does the error change?

```mathviz
scene "Linearisation error and a certified upper bound";
domain -1 1;
range -0.1 1.5;
param h = 0.5 from 0.05 to 1;
fn error(x) = exp(h*x)-1-h*x;
fn bound(x) = exp(h)*(h*x)^2/2;
plot error color blue;
plot bound color amber;
```

**Explore.** The horizontal coordinate x is normalized: the actual input is u=h*x. Thus the display covers −h≤u≤h. Compare h=1, 0.5, and 0.25, especially at x=±1. The amber curve bounds the error because exp(u)≤exp(h) throughout that interval.

**Explain.** Convexity gives error≥0; Taylor’s bound gives error≤exp(h)u²/2. Halving h makes the dominant quadratic error about one quarter as large, although the factor exp(h) also changes. Overlapping pixels do not mean the error is exactly zero.

**Transfer.** Replace the error expression by `cos(h*x)-1`, the bound expression by `(h*x)^2/2`, and the range by `-0.6 0.6`. The error now lies below zero. Add a third function equal to minus the bound to show the lower envelope. Prove the enclosure using |cos(u)|≤1.

## 4. Newton’s method reuses the tangent

To solve f(x)=0, replace f near the current guess x_n by its tangent. Setting that tangent equal to zero gives

x_(n+1)=x_n−f(x_n)/f′(x_n).

For f(x)=x²−2 and x₀=1, the first two steps are 3/2 and 17/12. The residual at 17/12 is 1/144. Since √2 and 17/12 both lie in [1,2], where f′≥2, the mean value theorem even gives |17/12−√2|≤1/288.

A nonzero derivative is necessary for each quotient, but does not guarantee convergence. For f(x)=x³−2x+2, a start at 0 moves to 1 and then back to 0 forever. Small step size also needs interpretation: rounding can make an iteration stop changing. Check the residual, and use a bracket or derivative bounds when available. [Approximation and error budgets](approximation-error.md) develops error budgets; the [modelling capstone](modelling-capstone.md) applies root finding and a bisection error guarantee to a falling-body problem.

The same modeling discipline applies when a faster path is not a shorter path. In the [road-and-field recitation](calculus-i-ii-recitation.md), the decision variable is where to leave the road; a stationary calculation gives a physical answer only after checking its allowed interval. The recitation changes one geometric parameter until the optimum moves to a boundary. Predict that transition before reading its derivation.

## Common misconceptions

- **“Solve f′=0 and the problem is finished.”** The domain, undefined derivatives, endpoints, and comparison still matter.
- **“Insert all numbers immediately.”** An instantaneous value is not a constant throughout a motion.
- **“The tangent gives the actual change.”** Its error is usually nonzero and depends on interval size and curvature.
- **“A good-looking graph proves accuracy.”** Sampling suggests behavior; inequalities establish guarantees.

## Exercises

1. A rectangle has perimeter 36 m. Find its maximum area with a complete global justification.
2. Minimise C(x)=x+9/x for x>0. Explain why an unbounded domain still permits a global minimum here.
3. A sphere has radius increasing at 0.1 cm/s. Find its volume rate when r=3 cm.
4. In the conical tank above, what is the height rate at h=4 m? Explain its ratio to the rate at h=2 m.
5. Approximate ln(1.02) at 1. Give a rigorous error bound and decide which side of the true value the approximation lies on.
6. For exp(h)≈1+h with |h|≤0.1, find a uniform error bound. Is error at most 0.001 guaranteed by this bound?
7. Apply two Newton steps to x³−2 starting from 1. Explain why starting from zero is invalid.
8. A student substitutes x=3 into x²+y²=25 before differentiating and concludes y′=0. Diagnose the error precisely.

<details>
<summary>Staged hints — open before the solutions</summary>

1. First eliminate one side using the perimeter. Then compare the vertex and both degenerate endpoints.
2. First solve C′=0. Then inspect its sign on either side, rather than assuming compactness.
3. Start with V=4πr³/3. Remember that r depends on time.
4. Reuse V′=(πh²/4)h′. Compare cross-sectional areas.
5. Use (ln x)′=1/x and (ln x)″=−1/x². Bound the second derivative on [1,1.02].
6. Use M=exp(0.1). Compare M(0.1)²/2 with the requested tolerance.
7. Compute f′ before substituting a guess. Keep fractions for the second step.
8. Ask which relation holds for all nearby times and which holds only at the selected instant.

</details>

<details>
<summary>Full solutions</summary>

1. The other side is 18−x and A=18x−x² on [0,18]. A′=18−2x vanishes at 9. The continuous objective attains extrema, and the candidate values are 0, 81, and 0. The maximum is 81 m² for a 9 m square.
2. C′=1−9/x² is negative for 0<x<3 and positive for x>3. Thus C decreases to C(3)=6 and then increases, proving a global minimum of 6. Also C→∞ as x→0+ and as x→∞; no smaller limiting value escapes at either end.
3. V′=4πr²r′=4π·9·0.1=3.6π cm³/s. The positive sign describes increasing volume. Omitting r′ would calculate sensitivity to radius, not a rate per second.
4. At h=4, 2=(π·16/4)h′, giving h′=1/(2π) m/min. This is one quarter of 2/π: doubling depth doubles radius and quadruples cross-sectional area.
5. L(1.02)=0+1·0.02=0.02. Since |f″|≤1, the absolute error is at most 0.0002. Concavity gives ln(1.02)≤0.02, so 0.0198≤ln(1.02)≤0.02.
6. Taylor gives error≤exp(0.1)/200≈0.005526. This does not guarantee 0.001. Indeed at h=0.1 the error is approximately 0.005170, exceeding that tolerance. A sufficient smaller step follows by requiring exp(0.1)h²/2≤0.001 while retaining |h|≤0.1.
7. x₁=1−(1−2)/3=4/3. Then f(4/3)=10/27 and f′(4/3)=16/3, so x₂=4/3−5/72=91/72. At zero the derivative 3x² vanishes and f(0)=−2, making the Newton quotient undefined.
8. Replacing the function x(t) by its value 3 incorrectly asserts that the foot stays at that position throughout the motion. Differentiate the identity first: 2x x′+2y y′=0. At x=3 and y=4 this gives y′=−3x′/4, which is zero only if the instantaneous foot rate is zero.

</details>

## Further study

The university sequence connects to [MIT 18.01SC: optimisation, related rates, and Newton’s method](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/). For additional explanations and practice, read OpenStax [related rates](https://openstax.org/books/calculus-volume-1/pages/4-1-related-rates), [linear approximations](https://openstax.org/books/calculus-volume-1/pages/4-2-linear-approximations-and-differentials), and [applied optimisation](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems). These are supplementary readings; the exposition and exercises above are original.
