# Calculus II examination and oral defence

**Core route:** complete the [recitation](calculus-ii-recitation.md), the [problem set](calculus-ii-problem-set.md), and the required Calculus II chapters through series, polar and parametric curves, first-order differential equations, curvature, and error bounds. The optional [complex oscillation](complex-oscillation.md) and [modelling capstone](modelling-capstone.md) are valuable extensions after this exam; they are not prerequisites.

Allow **120 minutes**, then 30 minutes for self-review. Show definitions, hypotheses, a method choice, and enough algebra to make each conclusion auditable. An unsupported answer earns little credit. Calculators or the notebook may check finite arithmetic, but a plot or finite table cannot replace a convergence argument. Attempt all seven core problems before opening any solution.

## Problem 1 — two singular ends, one substitution (15 points)

Evaluate \(I=\int_0^\infty [\sqrt{x}(1+x)]^{-1}\,dx\). Prove first that the integral exists under its improper definition, identifying the behavior at zero and infinity. Then make one substitution that evaluates it. State why substituting infinite limits directly into an antiderivative would skip part of the proof.

```exercise
{"id":"calc2-exam-improper-two-ends","type":"written","prompt":"Establish convergence and evaluate the improper integral from zero to infinity of 1/[sqrt(x)(1+x)]. Show separate endpoint reasoning and a finite-interval substitution.","hints":["Near zero compare with x^(−1/2); at infinity compare with x^(−3/2).","Use x=t² only on finite truncated intervals."],"rubric":["Splits the two improper endpoints and proves both converge","Uses the correct comparisons","Substitutes x=t² and obtains 2/(1+t²)","Evaluates the limit as pi and explains finite-before-infinite reasoning"],"solution":"Split at x=1. On (0,1], the integrand is at most x^(−1/2), whose singular integral converges. On [1,infinity), it is at most x^(−3/2), whose tail converges. For finite 0<epsilon<R set x=t²; the integral is 2∫ from sqrt(epsilon) to sqrt(R) of dt/(1+t²). Independent convergence permits both limits, yielding 2[arctan(infinity)−arctan(0)]=pi. A formal endpoint substitution before checking both limits would not establish that the improper integral exists."}
```

## Problem 2 — a slowly varying conditional series (15 points)

Classify \(\sum_{n=1}^{\infty}(-1)^{n-1}\ln(n+1)/n\). Prove every condition you use. A classmate says the ratio of magnitudes tends to one, so the series diverges; identify the exact error. State a first-omitted-term bound after \(N\) terms for sufficiently large \(N\).

```exercise
{"id":"calc2-exam-log-series","type":"written","prompt":"Classify sum (−1)^(n−1)ln(n+1)/n, prove the alternating and absolute-value claims, diagnose a ratio limit of one, and give a remainder bound.","hints":["Differentiate f(x)=ln(x+1)/x and show ln(1+x)>x/(1+x).","For n≥2, ln(n+1)>1, so compare the unsigned terms with 1/n."],"rubric":["Shows ln(n+1)/n decreases eventually and tends to zero","Proves signed convergence by the alternating theorem","Proves absolute divergence by comparison","States a valid first-omitted-term bound","Explains why ratio limit one is inconclusive"],"solution":"Let b(x)=ln(x+1)/x. Its derivative has numerator x/(x+1)−ln(x+1), negative for x>0 because g(x)=ln(1+x)−x/(1+x) starts at zero and has derivative x/(1+x)²>0. Also ln(n+1)/n→0, for example by L’Hôpital on the corresponding real function. Hence the alternating theorem gives convergence and |R_N|≤ln(N+2)/(N+1). For n≥2, ln(n+1)>1, so b_n≥1/n and the unsigned sum diverges. The series is conditional. A ratio limit equal to one gives no conclusion under the ratio test."}
```

## Problem 3 — certify a local approximation (15 points)

Approximate \(\sin(0.3)\) using its Maclaurin series. Among odd-degree partial sums \(T_1,T_3,T_5,\ldots\), find the smallest degree whose **alternating first-omitted-term bound** guarantees error below \(10^{-5}\). Report the approximation and its certified error interval. Explain why merely plotting the polynomial and sine at screen resolution would not be a certificate.

```exercise
{"id":"calc2-exam-sine-certificate","type":"written","prompt":"Use the sine Maclaurin series to find the smallest odd degree meeting error below 0.00001 at x=0.3 by the alternating next-term bound. Give the value and interval.","hints":["After T_3 the first omitted magnitude is 0.3^5/5!; after T_5 it is 0.3^7/7!.","The omitted term after T_5 is negative."],"rubric":["Checks next-term bounds for T_1, T_3, and T_5","Selects degree five","Computes 0.29552025","Gives a one-sided interval using the alternating sign","Separates visual agreement from a guarantee"],"solution":"T_1 has next-term bound 0.3³/3!=0.0045. T_3 has bound 0.3⁵/5!=0.00002025, still above 0.00001. T_5=0.3−0.3³/6+0.3⁵/120=0.29552025. Its next term is −0.3⁷/7!, of magnitude about 0.0000000434, so 0.29552025−0.3⁷/5040 ≤ sin(0.3) ≤ 0.29552025. Degree five is the smallest of these odd degrees certified by this bound. Overlap on a plot is limited by pixels and does not provide this inequality."}
```

## Problem 4 — the shape and traversal of an arch (15 points)

A point follows \(\gamma(t)=(t-\sin t,\ 1-\cos t)\), \(0\le t\le2\pi\). Sketch the curve, find the distance traveled over this interval, and find the area between this arch and the horizontal axis. Explain why speed vanishes at its endpoints and why a vanishing velocity, by itself, cannot classify a geometric cusp. For extra geometric evidence, expand the coordinates near \(t=0\).

```exercise
{"id":"calc2-exam-cycloid-arch","type":"written","prompt":"For gamma(t)=(t−sin t,1−cos t) on [0,2pi], compute travelled length and area under the arch, then discuss stationary endpoints and local cusp evidence.","hints":["Speed simplifies using 2−2cos t=4sin²(t/2).","Area is integral of y(t)x′(t)dt; near zero x is cubic and y is quadratic."],"rubric":["Finds speed 2sin(t/2) and length 8","Uses area integral ∫(1−cos t)²dt and obtains 3pi","Identifies zero endpoint velocity without treating it as sufficient cusp proof","Uses local expansions x≈t³/6 and y≈t²/2 to support the cusp claim"],"solution":"Velocity is (1−cos t,sin t), whose magnitude is sqrt(2−2cos t)=2sin(t/2) on [0,2pi]. Length is ∫ from 0 to 2pi of 2sin(t/2)dt=8. Since x′=1−cos t≥0, the area under one arch is ∫ y x′dt=∫(1−cos t)²dt=2pi+pi=3pi. Velocity vanishes at t=0 and 2pi. That alone is not a cusp test: the clock for a smooth parabola can also stop. Near zero, Taylor expansions give x=t³/6+O(t⁵) and y=t²/2+O(t⁴), so the two nearby branches meet at the origin with a vertical limiting tangent and a cusp when the curve is extended through t=0."}
```

## Problem 5 — an exact orbit and a misleading numerical one (15 points)

A population model uses \(P'=P(2-P)\) with \(P(0)=1/2\). Identify its equilibria and phase-line arrows, solve the initial-value problem, and prove the positive exact solution cannot cross \(P=2\). Then take two forward Euler steps of length \(h=1\). Explain the discrepancy between the numerical orbit and the theorem. What change to the computation would you test first, and what would that test still fail to prove?

```exercise
{"id":"calc2-exam-logistic-euler","type":"written","prompt":"Analyze P′=P(2−P), P(0)=1/2: equilibria, exact solution and no-crossing claim, then two Euler steps of size one and interpretation.","hints":["Write the logistic solution as 2/[1+C exp(−2t)] and fit C.","Euler uses P_(n+1)=P_n+P_n(2−P_n) for h=1."],"rubric":["Finds equilibria zero and two with correct phase-line signs","Finds P(t)=2/(1+3e^(−2t))","Justifies staying below two using the formula or uniqueness","Computes Euler values 1.25 and 2.1875","Explains numerical overshoot and limits of step refinement"],"solution":"The right side is negative for P<0, positive for 0<P<2, and negative for P>2. Thus zero repels positive states and two attracts them. Separation or the logistic formula gives P(t)=2/[1+3e^(−2t)] for t≥0. Its denominator exceeds one, so 0<P(t)<2 at every finite positive time; uniqueness also forbids a crossing of the equilibrium. Euler gives P_1=0.5+0.5(1.5)=1.25 and P_2=1.25+1.25(0.75)=2.1875. The overshoot is an artifact of a large finite step. Halving the step and comparing at the same times is a useful diagnostic, but finite agreement alone cannot certify a global error or prove the differential equation is a good population model."}
```

## Problem 6 — choose a bound, not just a small number (15 points)

You estimate \(f'(a)\) by \([f_{\mathrm{obs}}(a+h)-f_{\mathrm{obs}}(a-h)]/(2h)\). Assume \(|f'''|\le6\) on the relevant interval and each observation has absolute error at most \(10^{-6}\). Derive the worst-case bound as a function of \(h\), find the positive step that minimizes it, and give a guaranteed numerical bound to three significant figures. Explain the interval assumption and why \(h\to0\) is not justified.

```exercise
{"id":"calc2-exam-difference-budget","type":"written","prompt":"With |f‴|≤6 and observation error at most 10^(−6) at each endpoint, bound a centered derivative estimate, minimize the bound in h, and explain its scope.","hints":["The Taylor contribution is Mh²/6; the two observation errors contribute eta/h.","Minimize h²+10^(−6)/h, so 2h³=10^(−6)."],"rubric":["Derives E(h)≤h²+10^(−6)/h","Finds h=(5×10^(−7))^(1/3)≈0.00794","Obtains bound about 0.000189","Checks that the derivative bound holds on [a−h,a+h]","Explains why smaller h magnifies observation error"],"solution":"Taylor expansion on both sides yields truncation error at most Mh²/6=h². The two observation errors contribute at most [eta+eta]/(2h)=eta/h=10^(−6)/h. Hence E(h)≤h²+10^(−6)/h. The derivative of this upper bound is 2h−10^(−6)/h², so the positive minimizer satisfies h³=5×10^(−7), giving h≈0.00794. The bound is about 0.000189. This guarantee applies only when the stated third-derivative bound covers [a−h,a+h]. The noise term grows without bound in the worst-case estimate as h→0, so ever smaller steps are not automatically better."}
```

## Problem 7 — rotate a conic definition (10 points)

A conic has focus at the origin, directrix \(y=-2\), and eccentricity \(1\). Derive its Cartesian equation directly from the distance rule and identify its vertex. Then derive a polar equation \(r(\theta)\) on the side \(y>-2\). State which angle must be excluded from the finite polar formula and explain what happens geometrically there. Check that squaring the distance equation has not introduced an unwanted branch.

```exercise
{"id":"calc2-exam-rotated-conic","type":"written","prompt":"A conic has focus (0,0), directrix y=−2, and eccentricity one. Derive its Cartesian and polar equations, vertex, excluded polar angle, and branch check.","hints":["On the side y>−2, distance to directrix is y+2.","Use r=sqrt(x²+y²) and y=r sin(theta)."],"rubric":["Derives sqrt(x²+y²)=y+2 on the correct side","Obtains y=x²/4−1 and vertex (0,−1)","Obtains r=2/[1−sin(theta)] and excludes theta=pi/2 modulo 2pi","Checks the Cartesian curve has y≥−1>−2 and interprets the excluded direction"],"solution":"For y>−2, the distance rule is sqrt(x²+y²)=y+2. Squaring gives x²+y²=y²+4y+4, so y=x²/4−1, a parabola opening upward with vertex (0,−1). In polar coordinates r=y+2=r sin(theta)+2, hence r=2/[1−sin(theta)]. The denominator is zero when theta=pi/2 modulo 2pi; along that upward direction the parabola escapes to arbitrarily large radius, so no finite point is lost. The Cartesian equation gives y≥−1, always above the directrix, and both sides of the unsquared distance equation are nonnegative. Squaring therefore added no wrong-side branch."}
```

## Self-review and oral defence

Award the listed points only when the reasoning in the rubric appears in your own solution. Mark each line of work as definition, hypothesis, computation, or interpretation; identify one step you could defend orally without the page open. Reattempt two missed outcomes a day later with altered values. A useful oral question is: **Which of your seven results could a finite simulation strongly suggest while still failing to prove, and what mathematical statement supplies the proof?**

**Optional extension, outside the 100-point core.** Compare the frequency envelope of \(\cos(3t)+\cos(3.4t)\) with a single sinusoid and design a measurement that distinguishes them. This follows [complex oscillation](complex-oscillation.md) and is not required for the core exam.
