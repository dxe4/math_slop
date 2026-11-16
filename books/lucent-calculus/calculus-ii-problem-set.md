# Calculus II problem set: series, geometry, and dynamics

**Prerequisites:** the [boundaries and tails recitation](calculus-ii-recitation.md) and the required Calculus II chapters through [power series](taylor-series.md), [parametric and polar curves](parametric-polar.md), [differential equations](differential-equations.md), and [curvature](motion-curvature.md). Budget several study sessions. Write a method decision and its hypotheses before calculating; include the domain, endpoint, or interval of every final claim. Submit your own reasoning before opening hints or worked solutions.

This set retrieves ideas after their first lesson. Problems 1–2 consolidate methods; 3–4 ask you to transfer a representation; 5–6 require choosing a region or computation strategy. A correct number with an invalid test or unexamined domain is incomplete.

## 1. A changing forcing term

An idealized temperature difference \(y(t)\) satisfies \(y'+2y=2t\), \(y(0)=0\), for \(t\ge0\). Find \(y(t)\) by an integrating factor, verify both conditions, and describe its long-time relation to the forcing \(t\). Explain why pretending that \(t\) is a constant during separation would solve a different problem.

```exercise
{"id":"calc2-set-varying-forcing","type":"written","prompt":"Solve y′+2y=2t, y(0)=0. Show an integrating-factor derivation and a direct verification; interpret the long-time offset from t.","hints":["Multiply by e^(2t) so the left side is a product derivative.","A particular solution of the form at+b is possible."],"rubric":["Finds the integrating factor and integrates correctly","Uses y(0)=0","Verifies the differential equation","Finds y−t→−1/2 and explains why forcing is time dependent"],"solution":"Multiplying by e^(2t) gives (e^(2t)y)′=2t e^(2t). Integration by parts, or a trial particular solution, gives y=t−1/2+C e^(−2t). The initial value makes C=1/2. Then y′=1−e^(−2t), and 2y=2t−1+e^(−2t), so y′+2y=2t; y(0)=0. As t grows, y−t→−1/2, a persistent lag. Treating t as a constant would change the stated nonautonomous equation."}
```

## 2. A test must fit its terms

Classify \(\sum_{n=1}^{\infty}(-1)^{n-1}n/(n^2+1)\) as absolute, conditional, or divergent. A student applies the ratio test, gets a limit of one, and writes “diverges.” Diagnose the logic. Then give a guaranteed alternating error bound after \(N\) terms without calculating the sum.

```exercise
{"id":"calc2-set-conditional-series","type":"written","prompt":"Classify sum (−1)^(n−1)n/(n²+1), diagnose a ratio-test result of one, and state a justified bound for the remainder after N terms.","hints":["Differentiate x/(x²+1) to check decreasing magnitudes for x≥1.","Compare the absolute terms below with 1/(2n)."],"rubric":["Checks magnitudes decrease to zero","Concludes signed convergence by alternating-series theorem","Proves absolute divergence by a correct comparison","States |R_N|≤(N+1)/((N+1)²+1)","Explains that ratio limit one is inconclusive"],"solution":"For x≥1, derivative of x/(x²+1) is (1−x²)/(x²+1)²≤0; the terms tend to zero. Thus the alternating series converges, with |R_N| at most the first omitted magnitude (N+1)/((N+1)²+1). For n≥1, n²+1≤2n², so n/(n²+1)≥1/(2n); the unsigned series diverges. Convergence is conditional. A ratio-test limit of one has no conclusion and cannot contradict these separate arguments."}
```

## 3. An endpoint survives a series but not its derivative

Let \(F(x)=\sum_{n=1}^{\infty}(x-1)^n/(n^2 3^n)\). Find its radius and full interval of convergence. Differentiate term by term only where the theorem permits it, then classify the resulting derivative series at both original endpoints *as series*. Do not infer differentiability of \(F\) at an endpoint solely from convergence of that derivative series.

```exercise
{"id":"calc2-set-series-endpoints","type":"written","prompt":"For F(x)=sum from n=1 to infinity of (x−1)^n/(n² 3^n), find the radius and endpoint behavior. Differentiate inside the open radius and classify the derivative series at x=−2 and x=4.","hints":["The root or ratio limit gives |x−1|/3.","The derivative coefficients lose one power of n."],"rubric":["Finds radius 3 and original convergence interval [−2,4]","Differentiates only for −2<x<4","Identifies conditional convergence of derivative series at −2","Identifies divergence of derivative series at 4","Does not assert endpoint differentiability without a separate argument"],"solution":"The ratio of successive absolute original terms tends to |x−1|/3, so R=3. At x=−2 and 4 the original absolute terms are 1/n²; both endpoints converge, giving [−2,4]. For −2<x<4, termwise differentiation yields sum (x−1)^(n−1)/(n 3^n). At −2 it becomes (−1)^(n−1)/(3n), conditionally convergent. At 4 it becomes 1/(3n), divergent. The interior differentiation theorem alone does not decide whether the function has an endpoint derivative."}
```

## 4. A curve stops on its clock

The regular curve \(\gamma(t)=(t,t^3)\) changes concavity at the origin. Find its tangent and curvature there, and explain the geometry. Now use the clock \(t=u^3\), obtaining \(q(u)=(u^3,u^9)\). Why does the curvature quotient for \(q\) give \(0/0\) at \(u=0\)? Does the image suddenly gain a cusp?

```exercise
{"id":"calc2-set-curvature-clock","type":"written","prompt":"For gamma(t)=(t,t³), find curvature and tangent at zero. Reparametrize with t=u³ and explain the failed quotient at u=0 without calling the image a cusp.","hints":["Use x′=1, y′=3t², and y″=6t in the determinant formula.","The change of clock has derivative zero at u=0."],"rubric":["Computes curvature |6t|/(1+9t⁴)^(3/2)","Identifies horizontal tangent and zero curvature at the origin","Notes q′(0)=0 and failed regularity","Separates a stationary parametrization from the smooth image"],"solution":"For gamma, velocity is (1,3t²) and acceleration (0,6t), so curvature is |6t|/(1+9t⁴)^(3/2). At zero the tangent is horizontal and curvature is zero; the graph y=x³ has a smooth inflection there, with no finite osculating circle. For q(u)=(u³,u⁹), q′(0)=(0,0), so the usual quotient has zero denominator and its regularity hypothesis fails. Its image remains the same smooth graph; a clock stopping does not create a geometric cusp."}
```

## 5. A loop that a squared radius hides

Use the polar curve \(r=1+2\cos\theta\). First determine the angular interval where \(r<0\), and explain how negative radius places the inner loop. Find the area *inside that inner loop only*. State why integrating \(r^2/2\) over an entire revolution does not answer the same question.

Open the [editable polar family](parametric-polar.md) with \(a=1,b=2\). Predict the loop interval before scrubbing the point, then use the algebra to justify what the visual suggests.

```exercise
{"id":"calc2-set-polar-inner-loop","type":"written","prompt":"For r=1+2cos(theta), locate the negative-radius interval and compute the inner-loop area. Explain why a full-turn polar integral counts more than the inner loop.","hints":["r<0 exactly when 2pi/3<theta<4pi/3.","Expand (1+2cos theta)² as 3+4cos theta+2cos(2theta)."],"rubric":["Finds the negative-radius interval","Uses one-half of the integral of r² over that interval","Obtains pi−3sqrt(3)/2","Explains interval/traversal rather than treating r² as a region selector"],"solution":"The radius is negative for 2pi/3<theta<4pi/3; it is zero at the endpoints, which bound the inner loop. Its area is (1/2)∫ from 2pi/3 to 4pi/3 of (1+2cos theta)² dtheta. The integrand expands to 3+4cos theta+2cos(2theta), whose antiderivative is 3theta+4sin theta+sin(2theta). Evaluation gives half of [2pi−3sqrt(3)], namely pi−3sqrt(3)/2. A full-turn integral includes other traced regions; squaring r removes its sign but does not select the desired loop."}
```

## 6. Transform the infinite interval before approximating

You need \(I=\int_1^\infty 1/(1+x^2)\,dx\) to within \(5\times10^{-5}\), and a program offers only midpoint quadrature on finite intervals. Use \(u=1/x\) on each finite \([1,R]\), then pass to the limit to obtain an integral on \([0,1]\). Show that the transformed integrand has \(|f''|\le2\) there and choose the smallest integer \(n\) guaranteed by the standard midpoint bound \(M(b-a)^3/(24n^2)\). Give the exact value of \(I\) as an independent check.

```exercise
{"id":"calc2-set-improper-to-finite","type":"written","prompt":"Transform I=integral from 1 to infinity of 1/(1+x²) into a finite integral. Use a second-derivative bound to guarantee midpoint error below 0.00005, and give the exact value.","hints":["With u=1/x, dx=−du/u² and 1+x²=(1+u²)/u².","For f(u)=1/(1+u²), f″=(6u²−2)/(1+u²)³; use |f″|≤2 on [0,1]."],"rubric":["Derives I=integral from 0 to 1 of 1/(1+u²) du","Justifies |f″|≤2","Uses 1/(12n²)<0.00005 and obtains n=41 as the smallest sufficient integer","Checks I=pi/4 and distinguishes a bound from observed agreement"],"solution":"For finite R, u=1/x sends [1,R] to [1,1/R] and the integrand times dx to −du/(1+u²). Letting R→infinity yields I=∫ from 0 to 1 du/(1+u²). Here f″=(6u²−2)/(1+u²)³, whose absolute value is at most 2 on [0,1] (write z=u²: when the numerator is positive, (1+z)³−(3z−1)=2+3z²+z³≥0; the negative case is immediate). The midpoint error is at most 2/(24n²)=1/(12n²). At n=40 this exceeds 0.00005; at n=41 it is about 0.00004957, so 41 is the smallest sufficient integer under this bound. Direct integration gives arctan(1)−arctan(0)=pi/4."}
```

**After your proof, inspect the finite calculation.** The notebook binds an approximate quadrature result and reuses it in a second expression. Change the rectangle count to 20 and 82, then compare the observed residuals with your certified bounds. Agreement with \(\pi/4\) is a check of the computation; the second-derivative argument supplies the guarantee.

```notebook
fn g(x) = 1/(1+x^2);
integrate g from 0 to 1 count 41 as quadrature;
show quadrature;
show pi/4-quadrature;
```

## After feedback: a changed problem

Pick one solved problem and change an assumption that breaks the original method: make a series endpoint conditional, reverse a polar traversal, or replace a fixed forcing with a time-dependent one. Write a short new problem, its correct answer, and the first false answer a classmate might give. The revision should explain why the old method's hypotheses changed. This is preparation for the [Calculus II examination](calculus-ii-examination.md).
