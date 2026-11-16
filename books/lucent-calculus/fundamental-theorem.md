# 7. The fundamental theorem and its applications

**Prerequisites:** continuity, the chain rule, antiderivatives, signed Riemann integrals, and the mean value theorem. Allow two study sessions: first understand accumulation; then practise building models.

**Learning outcomes.** You should be able to state both parts of the fundamental theorem with hypotheses, differentiate an integral with moving endpoints, distinguish displacement from distance, construct area and volume integrals, and check a model through units and limiting cases.

## Accumulation becomes a function

Imagine a meter reporting a flow rate f(t) in litres per minute. The integral from a to x records litres accumulated since time a. Changing x changes the reading, so

A(x) = ∫_a^x f(t) dt

is a function. The letter t is a bound variable: replacing every t inside the integral by s changes nothing. In contrast, x specifies the endpoint and remains a free input. If the flow reverses, f becomes negative and the accumulated amount decreases. An accumulation function need not increase.

**Fundamental theorem, differentiation form.** If f is continuous on [a,b], then A is continuous on [a,b], differentiable on (a,b), and A′(x)=f(x) there. Endpoint derivatives, when desired, are one-sided.

The guided story below asks you to build the short-interval estimate that proves this statement. Record that argument before reading the proof debrief after the story.

**Fundamental theorem, evaluation form.** If f is continuous on [a,b] and F is continuous on [a,b] with F′=f on (a,b), then

∫_a^b f(x) dx = F(b)−F(a).

Indeed, F−A has derivative zero, so the mean value theorem makes it constant. Evaluate at a and b to obtain the formula. The theorem connects an integral defined through sums to an antiderivative found through differentiation.

### Guided visual argument: recover an instantaneous rate from a history

The stages below keep one rate and one starting point while changing the endpoint and then the representation. First reason from signed area; only afterward compare the accumulation curve's secant and tangent. The final stage changes the rate family, so memorising the first sign pattern is not enough.

```visual-story
{
  "id": "ftc-rate-from-accumulation",
  "title": "How a history remembers the rate at its moving edge",
  "prompt": "An accumulated total mixes the entire past, yet its derivative recovers the current rate. Track which part of the picture changes when the endpoint moves a small distance.",
  "stages": [
    {
      "title": "Read the rate before the total",
      "body": "Begin with the rate f(t)=t²−1 and the marked endpoint x=0.75. Read the zero and the current height before any accumulation rectangles appear.",
      "question": "What is the exact current rate at x=0.75? What does that local value tell you—and not tell you—about the accumulated total?",
      "checkpoint": {
        "hint": "Evaluate (3/4)²−1, then separate a value at one endpoint from an integral over a whole interval.",
        "explanation": "The current rate is f(3/4)=9/16−1=−7/16. This says that an accumulation function with moving edge x has instantaneous slope −7/16 there, once the FTC hypotheses are established. A single endpoint height determines neither the sign nor the magnitude of the past total. Here the interval-wide fact f(t)<0 for 0≤t≤3/4 does prove that the total is negative, but its exact value still requires accumulation.",
        "criteria": [
          "Computes the current rate as −7/16.",
          "Separates the endpoint rate from the total accumulated history.",
          "Separates one local rate from interval-wide sign information about the integral."
        ]
      },
      "transition": "none",
      "focus": ["curve-rate", "point-current"],
      "scene": [
        "scene \"1. Begin with the changing rate\";",
        "domain 0 2.1;",
        "range -1.2 3.5;",
        "param b = 0.75 from 0.1 to 2;",
        "fn rate(x) = x^2-1;",
        "plot rate color blue;",
        "point current = (b,rate(b));"
      ]
    },
    {
      "title": "Accumulate signed contributions",
      "body": "Now display midpoint rectangles for A(x)=∫₀ˣ(t²−1)dt. Use their signs to predict the total, but use the antiderivative to determine it exactly.",
      "question": "What is A(0.75) exactly, and why is a finite rectangle display not a proof of that value?",
      "checkpoint": {
        "hint": "Use A(x)=x³/3−x and substitute x=3/4 with a common denominator.",
        "explanation": "An antiderivative gives A(3/4)=(3/4)³/3−3/4=9/64−48/64=−39/64. The negative sign agrees with the rate being below the axis on the whole interval. The displayed midpoint rectangles are a finite approximation; increasing their count refines numerical evidence but does not itself establish the exact integral or convergence.",
        "criteria": [
          "Computes A(3/4)=−39/64 exactly.",
          "Connects the negative sign to signed area below the axis.",
          "Distinguishes a finite quadrature display from exact evaluation."
        ]
      },
      "transition": "reveal",
      "focus": ["curve-rate", "rectangle-area", "point-current"],
      "scene": [
        "scene \"2. Signed area records the history\";",
        "domain 0 2.1;",
        "range -1.2 3.5;",
        "param b = 0.75 from 0.1 to 2;",
        "param n = 20 from 4 to 64;",
        "fn rate(x) = x^2-1;",
        "plot rate color blue;",
        "riemann rate from 0 to b count n as area;",
        "point current = (b,rate(b));"
      ]
    },
    {
      "title": "Separate present rate from past total",
      "body": "Move the endpoint to x=1.5, beyond the zero of the rate. Split the signed history at t=1 so that the earlier and later contributions can be compared exactly.",
      "question": "What are the negative contribution, positive contribution, total accumulation, and current rate? Explain the apparently different signs.",
      "checkpoint": {
        "hint": "Evaluate A(1), A(3/2)−A(1), and f(3/2) separately.",
        "explanation": "From 0 to 1 the contribution is A(1)=1/3−1=−2/3. From 1 to 3/2 it is A(3/2)−A(1)=−3/8+2/3=7/24. Hence the total is −2/3+7/24=−3/8, while the current rate is f(3/2)=9/4−1=5/4>0. The accumulation is currently increasing, but the recent positive area has not yet repaid the earlier negative deficit.",
        "criteria": [
          "Finds the negative contribution −2/3 and positive contribution 7/24.",
          "Combines them to obtain A(3/2)=−3/8.",
          "Computes the current rate 5/4.",
          "Distinguishes the sign of a present derivative from the sign of past accumulation."
        ]
      },
      "transition": "transform",
      "focus": ["curve-rate", "point-current", "rectangle-area"],
      "scene": [
        "scene \"3. A positive present can follow a negative history\";",
        "domain 0 2.1;",
        "range -1.2 3.5;",
        "param b = 1.5 from 0.1 to 2;",
        "param n = 24 from 4 to 64;",
        "fn rate(x) = x^2-1;",
        "plot rate color blue;",
        "riemann rate from 0 to b count n as area;",
        "point current = (b,rate(b));"
      ]
    },
    {
      "title": "Change from area to slope",
      "body": "Plot the accumulation function beside the rate. A secant over a short endpoint increment h represents the average signed height of the newly added strip.",
      "question": "Why should the new strip's average height approach the left-edge height f(x) when f is continuous?",
      "checkpoint": {
        "hint": "Subtract f(x) inside the short-interval average and use continuity to bound the difference uniformly near x.",
        "explanation": "For h≠0, [A(x+h)−A(x)]/h=(1/h)∫ₓˣ⁺ʰf(t)dt, with the same identity for negative h under the signed-integral convention. Subtracting f(x) gives (1/h)∫ₓˣ⁺ʰ[f(t)−f(x)]dt. Given ε>0, continuity at x supplies η>0 such that |t−x|<η implies |f(t)−f(x)|<ε. Whenever 0<|h|<η, every t between x and x+h meets that condition, so the absolute difference of the average from f(x) is at most ε. Thus the quotient tends to f(x); tangent appearance is not the proof.",
        "criteria": [
          "Writes the difference quotient as a short-interval average.",
          "Subtracts f(x) and invokes continuity at x.",
          "Handles both signs of h through the signed-integral convention.",
          "Concludes from an inequality rather than the drawn tangent."
        ]
      },
      "transition": "compare",
      "focus": ["curve-rate", "curve-total", "line-finite_slope", "line-local_slope"],
      "scene": [
        "scene \"4. The accumulation curve has the current rate as slope\";",
        "domain 0 2.7;",
        "range -2 8;",
        "param b = 1.5 from 0.1 to 2;",
        "param h = 0.35 from 0.05 to 0.6;",
        "fn rate(x) = x^2-1;",
        "fn total(x) = x^3/3-x;",
        "plot rate color blue;",
        "plot total color amber;",
        "secant total at b step h as finite_slope;",
        "tangent total at b as local_slope;"
      ]
    },
    {
      "title": "Test what the theorem depends on",
      "body": "Change the family to f(t)=t²−c and A(x)=x³/3−cx. At the authored settings c=0.25 and x=0.75, recompute the present rate and the past total rather than importing the earlier signs.",
      "question": "What are f(0.75), A(0.75), and the tangent slope exactly? Why can their signs differ?",
      "checkpoint": {
        "hint": "Use c=1/4 and x=3/4. Differentiate A separately before comparing it with f.",
        "explanation": "At c=1/4 and x=3/4, f(x)=9/16−1/4=5/16>0. The total is A(x)=x³/3−x/4=9/64−3/16=−3/64<0. Differentiating gives A′(x)=x²−1/4, so the tangent slope is 5/16>0, exactly the current rate. The total still records an earlier negative deficit even though its current derivative is positive. This polynomial check illustrates the general FTC mechanism, whose proof depends on continuity rather than this formula.",
        "criteria": [
          "Computes f(3/4)=5/16 and A(3/4)=−3/64.",
          "Derives the tangent slope A′(3/4)=5/16.",
          "Explains why a negative total can have a positive derivative.",
          "Separates the polynomial illustration from the general continuity proof."
        ]
      },
      "transition": "transform",
      "focus": ["curve-rate", "curve-total", "line-finite_slope", "line-local_slope"],
      "scene": [
        "scene \"5. A changed rate tests the invariant mechanism\";",
        "domain 0 2.7;",
        "range -2 8;",
        "param c = 0.25 from 0.1 to 1.5;",
        "param b = 0.75 from 0.1 to 2;",
        "param h = 0.25 from 0.05 to 0.6;",
        "fn rate(x) = x^2-c;",
        "fn total(x) = x^3/3-c*x;",
        "plot rate color blue;",
        "plot total color amber;",
        "secant total at b step h as finite_slope;",
        "tangent total at b as local_slope;"
      ]
    }
  ]
}
```

### Proof debrief: the short interval controls the new slope

Subtracting accumulations cancels their shared interval:

\[
\frac{A(x+h)-A(x)}{h}=\frac1h\int_x^{x+h} f(t)\,dt.
\]

After subtracting \(f(x)\), the absolute difference is at most the largest value of \(|f(t)-f(x)|\) between \(x\) and \(x+h\). Continuity at \(x\) makes that bound approach zero. The argument works for negative \(h\) too because reversing the integral cancels the negative denominator. This proves the differentiation form from an inequality; an appealing rectangle sketch alone does not.

### Link a changing signed area to its derivative

The next two views share a red endpoint \(x\). Before moving it, predict whether the accumulated total can still be negative **after** the current rate becomes positive. Also predict whether the amber finite secant on the accumulation graph has exactly the same slope as the violet tangent. The controls change the offset \(c\), endpoint \(x\), and positive increment \(h\); both graphs and every readout come from one Rust calculation.

```investigation
ftc-accumulation
```

In this family \(f(t)=t^2-c\) and \(A(x)=\int_0^x f(t)\,dt=x^3/3-cx\). The rose region below the axis contributes negatively, and the teal region above contributes positively. The rate changes sign at \(t=\sqrt c\), but \(A(x)\) can remain below zero until the earlier deficit is repaid. For \(c=1\), at \(x=3/2\) the current rate is \(5/4>0\) while the accumulated total is \(-3/8<0\). In the second view, the tangent's exact slope is \(f(x)\), irrespective of the height \(A(x)\) itself.

<details><summary>Reveal the finite-increment calculation</summary>

The amber band spans \([x,x+h]\). For this polynomial, subtracting the exact accumulated values gives

$$
\frac{A(x+h)-A(x)}{h}
=x^2+xh+\frac{h^2}{3}-c
=f(x)+xh+\frac{h^2}{3}.
$$

Thus the finite secant slope differs from the tangent slope by \(xh+h^2/3\). With \(x\) fixed, this tends to zero as \(h\to0^+\), illustrating the FTC derivative statement. The general theorem above uses continuity and handles both signs of \(h\); this one polynomial computation is an example, not its proof. The filled curves are sampled for display, while the readouts use the exact polynomial identities.

</details>

```exercise
{"id":"calc-ftc-linked-signed-transfer","type":"written","prompt":"For f(t)=t²−1 and A(x)=∫₀ˣf(t)dt, use x=3/2 and h=1/4. Compute the current rate, signed accumulation, negative and positive area contributions, and finite secant quotient [A(x+h)−A(x)]/h. Which two signs differ, and why does the secant slope exceed the tangent slope?","hints":["The rate crosses zero at t=1; split the accumulation there.","Use A(x)=x³/3−x and the exact quotient formula before using decimals."],"rubric":["Finds f(3/2)=5/4 and A(3/2)=−3/8","Separates negative contribution −2/3 and positive contribution 7/24","Finds secant quotient 79/48 and tangent slope 5/4","Explains their difference 19/48 from xh+h²/3","Distinguishes the sign of a current rate from the sign of accumulated history"],"solution":"The rate is f(3/2)=9/4−1=5/4>0. Accumulation is A(3/2)=(3/2)³/3−3/2=9/8−12/8=−3/8. The negative part through t=1 is A(1)=−2/3, and the later positive part is A(3/2)−A(1)=7/24. Their sum is −3/8: the current rate is positive but the earlier negative area still dominates. The secant quotient is x²+xh+h²/3−1=9/4+3/8+1/48−1=79/48. The tangent slope is f(x)=5/4=60/48, so the finite excess is 19/48=xh+h²/3.","transfer":"Changed family: use c=1/4, x=3/4, and h=1/4. Determine the rate zero, current rate, signed total, and finite quotient. Is the total already positive when the rate is positive?","transferSolution":"The rate zero is √c=1/2. At x=3/4, f(x)=9/16−1/4=5/16>0, while A(x)=x³/3−x/4=9/64−3/16=−3/64<0. The earlier negative contribution has not yet been repaid. The finite quotient is x²+xh+h²/3−c=9/16+3/16+1/48−1/4=25/48. Its difference from the tangent slope 5/16 is 5/24=xh+h²/3."}
```

```notebook
fn rate(x) = x^2;
fn total(x) = x^3/3;
diff total as recovered_rate;
show recovered_rate(2);
integrate rate from 0 to 2 count 40 as midpoint_estimate;
show total(2)-total(0);
show midpoint_estimate-(total(2)-total(0));
plot rate from 0 to 2;
```

The derivative and antiderivative expression agree algebraically for this polynomial. The bound `midpoint_estimate` is an approximate floating-point value; reusing it does not make it an exact integral. For x² on [0,2], the midpoint estimate is 8/3−2/(3n²), so at n=40 the shortfall is 1/2400. Change the cell count and predict the effect before running it: doubling n divides this error by four. This numerical relationship is proved by summing the finite squares, not by seeing the displayed decimals converge.

```exercise
{"id":"calc-ftc-meaning","type":"choice","prompt":"The notebook's midpoint result for ∫₀²x²dx differs slightly from 8/3. What explains the difference?","options":[{"label":"The Fundamental Theorem is only approximate.","correct":false,"feedback":"The theorem gives the exact integral; the finite midpoint quadrature is approximate."},{"label":"The notebook uses a finite midpoint sum, whose error here is 2/(3n²).","correct":true,"feedback":"Yes. The exact antiderivative evaluation is 8/3."},{"label":"The rate function is discontinuous.","correct":false,"feedback":"x² is continuous everywhere; the difference comes from finite quadrature."}],"hints":["Separate a limit-defined integral from a finite sum of rectangles."]}
```

An indefinite integral describes the family F+C on an interval; a definite integral is a number. A constant cancels in F(b)−F(a), but cannot be omitted when recovering a function from an initial condition.

## Worked example 1: two moving boundaries

Let B(x)=∫_(sin x)^(x²) exp(t²) dt. We do not need an elementary antiderivative. Choose A(u)=∫_0^u exp(t²) dt and rewrite B=A(x²)−A(sin x). The theorem and chain rule give

B′(x)=2x exp(x⁴)−cos(x) exp(sin²x).

The upper boundary contributes positively; the lower boundary contributes negatively. Each boundary also has its own speed. Generally, for continuous f on an interval containing the endpoint values and differentiable u,v,

(d/dx)∫_(u(x))^(v(x)) f(t) dt = f(v(x))v′(x)−f(u(x))u′(x).

This formula assumes the integrand depends only on t. An integrand such as exp(xt) has additional x-dependence and requires a different theorem. Reversed endpoints are permitted by the signed-integral convention.

## Laboratory: slopes measure the current rate

```mathviz
scene "Accumulation can rise and fall";
domain -2 2;
range -2 4;
param a = 0.5 from -1.7 to 1.7;
fn rate(x) = x^2-1;
fn total(x) = x^3/3-x;
plot rate color blue;
plot total color amber;
tangent total at a;
```

**Predict:** mark the intervals where the amber accumulation should decrease before moving a. **Explore:** compare its tangent slope with the blue height at a=−1.4, 0, and 1.4. **Explain:** total′(a)=a²−1; therefore its local maximum is at −1 and local minimum at 1. The curves' heights need not agree. **Transfer:** edit the rate to x²−c and the total to x³/3−c*x, adding `param c = 1 from 0.2 to 2;`. Derive the stationary points before testing your prediction. Numerical tangents illustrate the exact derivative; they do not prove it.

## Worked example 2: displacement and distance

A particle moves with velocity v(t)=t−1 metres per second for 0≤t≤3. Its displacement is ∫_0^3(t−1)dt=3/2 metres. However, it first moves backwards, stops at t=1, and then moves forwards. Distance travelled is

∫_0^3 |t−1|dt = ∫_0^1(1−t)dt + ∫_1^3(t−1)dt = 1/2+2 = 5/2 metres.

A zero of velocity tells us where to check for a direction change. We split only when its sign actually changes. The displacement can vanish even when the particle travels a substantial distance.

## Worked example 3: area, slices, and volume

The graphs y=x and y=x² intersect when x=x², giving x=0 and x=1. Between those points x≥x². A narrow vertical strip has height x−x² and width dx, so the enclosed area is

∫_0^1(x−x²)dx = [x²/2−x³/3]_0^1 = 1/6.

For intersecting curves in general, geometric area is ∫|f−g|; locate intersections and determine which curve lies above the other on each interval.

Rotate this region around the x-axis. A perpendicular slice becomes a washer: its outer radius is x and its inner radius is x². Subtract disk areas, giving

V = π∫_0^1[x²−(x²)²]dx = π(1/3−1/5) = 2π/15.

The tempting expression π(x−x²)² describes a disk with the strip's height as radius, a different object. For a rotation around y=−1, the radii become x+1 and x²+1: measure distances from the actual axis.

More generally V=∫A(x)dx when A(x) is a suitable continuous cross-sectional area. A cylindrical shell instead contributes 2π(radius)(height)(thickness). Around the y-axis the same original region gives 2π∫_0^1 x(x−x²)dx=π/6. A diagram should determine the slice before algebra determines the answer.

```mathviz
scene "Area accumulates the vertical gap";
domain 0 1.1;
range -0.05 1.1;
param b = 0.65 from 0.1 to 1;
param n = 12 from 2 to 64;
fn upper(x) = x;
fn lower(x) = x^2;
fn gap(x) = upper(x)-lower(x);
plot upper color blue;
plot lower color violet;
plot gap color teal;
riemann gap from 0 to b count n;
```

**Predict:** where is the gap greatest, and does that locate the greatest accumulated area? **Explore:** vary b, then increase the integer rectangle count n. The rectangles approximate the area between the original curves by moving each vertical gap to the baseline. **Explain:** gap′=1−2x, but accumulated area has derivative gap, which stays nonnegative. Its largest value on [0,1] occurs at b=1. **Transfer:** change the two functions to x and x³, retain the definition of gap, and compute the new area exactly. Explain why the gap maximum and the accumulated maximum are different questions.

## Worked example 4: work and average values

A spring requires force F(x)=80x newtons when stretched x metres from equilibrium. Slowly stretching it from 0.1 to 0.3 metres requires

W=∫_0.1^0.3 80x dx = 40(0.3²−0.1²)=3.2 joules.

Each short displacement contributes force times displacement. Multiplying the final force by the whole displacement overestimates the work because the force was smaller earlier. The model assumes a Hooke-law spring over this range and ignores energy loss.

The average value of continuous f over [a,b], with a<b, is f_avg=(1/(b−a))∫_a^b f. It is the constant height producing the same signed accumulation. For f(x)=x² on [0,b], b>0, the average is b²/3, whereas the midpoint value is b²/4. Averaging endpoint values gives b²/2, another different quantity. Continuity guarantees at least one c with f(c)=f_avg: the average lies between the minimum and maximum, and the intermediate value theorem fills the gap.

```mathviz
scene "A constant height with equal total area";
domain 0 3;
range -0.3 9.5;
param b = 2 from 0.3 to 3;
fn f(x) = x^2;
fn mean(x) = b^2/3;
plot f color blue;
plot mean color amber;
riemann f from 0 to b count 40;
```

**Predict:** should the blue curve meet the mean before or after b/2? **Explore:** change b and track the intersection. **Explain:** c=b/√3>b/2 and b times the mean equals b³/3. The displayed blue rectangles approximate that exact area. **Transfer:** edit f to x³ and mean to b³/4. Derive the new ratio c/b and explain why the averaging interval must remain [0,b].

## Model checks and common mistakes

An integral of a rate has units of rate times input: metres/second times seconds gives metres. Volume formulas need square units inside the integrand and length units from dx. Check signs, endpoints, and units before integrating. A plot helps identify a proposed ordering; solving the intersection equations justifies it. Neither crossing curves nor an excluded singularity can be ignored because an antiderivative looks convenient.

## Numerical evaluation and inverse problems

An integral can define a useful function without an elementary formula. To evaluate it numerically, choose a rule and an error guarantee. If f is twice continuously differentiable on [a,b] and |f″|≤M, the composite midpoint rule with n equal cells has absolute error at most M(b−a)³/(24n²). The corresponding trapezoid bound is M(b−a)³/(12n²). For x² on [0,1], M=2, so 10 midpoint cells guarantee error at most 1/1200<0.001. The [numerical integration chapter](numerical-integration.md) derives these bounds and compares methods. Merely increasing the displayed count supplies no certified tolerance without such an argument.

Accumulation also reverses a rate equation: if y′=r(x) and y(a)=y₀, then y(x)=y₀+∫_a^x r(t)dt for continuous r. When the rate depends on y itself, this becomes a differential equation. For example, y′=ky has solutions y=Ce^(kx). Dividing by y during separation temporarily excludes y=0; retain that equilibrium and verify every candidate by differentiation. We develop these models in the [differential equations chapter](differential-equations.md).

## Exercises

1. Differentiate H(x)=∫_1^(sin x) √(1+t²)dt, stating why the theorem applies.
2. Differentiate K(x)=∫_x^(2x) t³dt two ways.
3. Find the average of x² on [0,3] and all points there attaining it.
4. Find the geometric area between x and x³ on [−1,1]. Explain the signed integral's value.
5. Rotate the region under √x, 0≤x≤4, about the x-axis. Find the volume.
6. Rotate the region between x and x², 0≤x≤1, about y=−1. Find the volume.
7. A spring obeys F=120x newtons. Find the work from x=0.2 to 0.5 metres and the average force over that displacement.
8. Let f(t)=−1 for t<0 and f(t)=1 for t≥0. Compute A(x)=∫_0^x f(t)dt and decide whether A′(0) exists.
9. For v(t)=2t−4 on [0,5], compute displacement and total distance, including units if t is seconds and v is metres per second.
10. Recover y from y′=3x²−2, y(1)=4 using an accumulation integral.

<details>
<summary>First hints: choose the mathematical object</summary>

1–2. Treat endpoints as functions, and attach a speed to each. 3. Average over the interval's length. 4. Separate at intersections. 5–6. Draw one perpendicular slice. 7. Integrate force over displacement. 8. Compute each side separately. 9. Identify the turning time. 10. Accumulate from the known initial input.

</details>

<details>
<summary>Second hints: set up the calculations</summary>

1. The outer accumulated function has derivative √(1+u²). 2. Use 2(2x)³−x³. 3. Divide ∫_0^3 x²dx by 3. 4. Use symmetry on |x−x³|. 5. Square √x. 6. Subtract (x²+1)² from (x+1)². 7. Divide work by 0.3 to get average force. 8. Be careful with reversed endpoints for negative x. 9. Split at t=2. 10. Begin with y(x)=4+∫_1^x(3t²−2)dt.

</details>

<details>
<summary>Full solutions</summary>

1. The integrand is continuous on the real line, so H′(x)=√(1+sin²x)cos x by the theorem and chain rule.
2. Endpoint differentiation gives 16x³−x³=15x³. Direct integration gives K(x)=[t⁴/4]_x^(2x)=15x⁴/4; differentiating agrees, including negative x.
3. The average is (1/3)[x³/3]_0^3=3. Solve x²=3; only x=√3 belongs to [0,3].
4. The area is 2∫_0^1(x−x³)dx=2(1/2−1/4)=1/2. The signed integral is zero because x−x³ is odd; its positive and negative contributions cancel.
5. Disk area is πx, so V=π[x²/2]_0^4=8π cubic units.
6. V=π∫_0^1(x²−x⁴+2x−2x²)dx=π(1−1/3−1/5)=7π/15 cubic units.
7. W=60(0.5²−0.2²)=12.6 joules. Average force is 12.6/0.3=42 newtons, which lies between the endpoint forces 24 and 60 newtons.
8. For x≥0, A=x; for x<0, A=−∫_x^0(−1)dt=−x. Thus A=|x|, with left derivative −1 and right derivative 1 at zero. Continuity of f failed there.
9. Displacement is [t²−4t]_0^5=5 metres. Backwards distance is 4 metres and forwards distance is 9 metres, so total distance is 13 metres.
10. Integration gives y=4+(x³−2x)−(1−2)=x³−2x+5. Differentiation recovers the rate and substitution gives y(1)=4.

</details>

**Further study:** compare the theorem's two forms in [OpenStax, Fundamental Theorem of Calculus](https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus), then practise modeling with [MIT 18.01SC, the definite integral and its applications](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-3-the-definite-integral-and-its-applications/). These are supplementary readings; the examples and explanations above are original.
