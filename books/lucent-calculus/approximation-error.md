# Approximation, conditioning, and an error budget

**Prerequisites:** [Taylor series](taylor-series.md), [numerical integration](numerical-integration.md), and the [mean value theorem](mean-value.md). **Outcomes:** distinguish three sources of error; choose a method to meet a tolerance; explain why a reliable formula may produce an unreliable calculation; certify an integral without an elementary antiderivative.

A numerical answer is useful when its precision matches the question. Reporting twelve decimal places does not establish twelve correct decimal places. Suppose a sensor reports a length, a formula transforms that length, and a computer approximates the formula. There are at least three questions: how uncertain was the measurement, how accurately does the formula model the system, and how accurately was the formula evaluated? Calculus gives tools for the first and third questions. The second also needs evidence about the physical situation.

## What an error statement actually promises

If a computation produces A as an approximation to Q, an **absolute error bound** is |Q−A|≤ε. A **relative error bound** compares |Q−A| with |Q| and is useful when Q is nonzero and its scale matters. An absolute error of 0.01 metres may be excellent for a bridge and unacceptable for a machine part. A relative error is meaningless when the true quantity is zero; use an absolute tolerance there.

An **a priori** bound follows from assumptions before the approximation is computed. The midpoint bound M₂(b−a)³/(24n²), for example, follows from a bound on the second derivative. An **a posteriori** estimate uses computed values, often comparing two resolutions. An estimate can be useful without being a rigorous bound. Agreement between n and 2n rectangles does not by itself rule out a narrow feature missed by both grids.

An error budget assigns tolerances to independent steps without assuming their errors cancel. If |Q−Q_model|≤ε_model, |Q_model−Q_exact-input|≤ε_input, and |Q_exact-input−A|≤ε_compute, the triangle inequality gives |Q−A|≤ε_model+ε_input+ε_compute. The terms need not be statistically independent for this worst-case inequality. Probabilistic error combination requires additional assumptions and is a different claim.

## Worked example 1: a volume measurement

A spherical object has measured radius r₀=10 cm, with |r−10|≤0.02 cm. Its volume model is V(r)=4πr³/3. The derivative is V′(r)=4πr², so on [9.98,10.02], the mean value theorem gives

|V(r)−V(10)|≤4π(10.02)²·0.02<25.24 cm³.

The familiar differential estimate dV≈4πr₀²dr gives about 25.13 cm³. That is a useful local estimate, but the derivative bound gives the promised worst-case guarantee. The nominal volume is about 4188.79 cm³; radius uncertainty dominates the last two decimal places. Rounding the nominal volume to many digits would obscure the information we actually possess.

The dimensionless relative sensitivity is rV′(r)/V(r)=3. For sufficiently small relative radius changes, the relative volume change is approximately three times as large. This factor describes the problem's sensitivity, not the skill of the programmer. A more accurate implementation cannot recover unmeasured input information.

## Visual laboratory 1: local sensitivity has a scale

**Predict:** near r=1, which grows faster as h doubles: the tangent's predicted volume change or the discrepancy from the tangent? Expand (1+h)³ before moving the slider.

```mathviz
scene "Sensitivity and the leftover quadratic error";
domain 0.4 1.6;
range 0 4.5;
param h = 0.2 from -0.5 to 0.5;
fn volume(x) = x^3;
fn local(x) = 1+3*(x-1);
plot volume color blue;
plot local color teal;
point measured = (1+h,(1+h)^3) color rose;
segment error from (1+h,1+3*h) to (1+h,(1+h)^3) color amber;
```

**Explore:** try h=0.4, 0.2, 0.1 and their negatives. The volume has been divided by 4π/3, so the ordinate is r³. **Explain:** exact change is 3h+3h²+h³, and tangent error is 3h²+h³. Negative h does not make the leading error negative. **Transfer:** replace the cube by the square root, adjust the tangent, and explain how the domain restricts an admissible uncertainty interval. A local approximation needs a neighbourhood on which the function is defined.

## Worked example 2: certify a non-elementary integral

We want I=∫₀¹ exp(−x²) dx with absolute error below 0.00002. “There is no elementary antiderivative” does not mean the integral cannot be evaluated accurately. The exponential series gives

exp(−x²)=1−x²+x⁴/2!−x⁶/3!+⋯.

For each x in [0,1], these alternating term magnitudes decrease, and the error after degree 2N has magnitude at most x^(2N+2)/(N+1)!. Integrating the absolute pointwise bound gives

|I−Σ from k=0 to N of (−1)^k/[k!(2k+1)]|≤1/[(N+1)!(2N+3)].

This argument integrates a finite polynomial plus a bounded remainder; it does not silently exchange an infinite sum with an integral. Taking N=6 gives a bound 1/(5040·15)=1/75600≈0.00001323, which meets the target. The polynomial integral is approximately 0.746836035. We therefore know I lies within 0.00001323 of that value. A bound need not be tight to be useful.

How would midpoint integration compare? The second derivative is (4x²−2)exp(−x²). On [0,1], |4x²−2|≤2 and exp(−x²)≤1, so |f″|≤2. Midpoint error is at most 1/(12n²). Choosing n=65 gives 1/50700≈0.00001973. Either method meets the specified target. Their cost depends on how the library evaluates exponentials and polynomials; accuracy alone does not settle the engineering choice.

## Visual laboratory 2: a small error needs its own graph

**Predict:** the degree-four polynomial P₄=1−x²+x⁴/2 lies above or below exp(−x²) on (0,1]? What sign should its error have?

```mathviz
scene "Expose an approximation error directly";
domain 0 1;
range -0.2 0.04;
param scale = 1 from 0.1 to 1;
fn error(x) = exp(-(scale*x)^2)-(1-(scale*x)^2+(scale*x)^4/2);
fn bound(x) = -(scale*x)^6/6;
fn zero(x) = 0;
plot error color rose;
plot bound color amber;
plot zero color teal;
```

**Explore:** halve scale and compare errors at x=1. Here scale selects a smaller physical interval while keeping the screen coordinate fixed. **Explain:** the next omitted term is negative, and the alternating remainder lies between −(scale·x)⁶/6 and zero. **Transfer:** edit the polynomial to include its sixth-degree term; change the bound and its sign accordingly. State the interval on which your alternating-term argument works. A graph of an error reveals structure hidden when two large function values overlap.

## Worked example 3: cancellation is a property of the calculation

For small positive x, consider q(x)=[√(1+x)−1]/x. Algebra gives the identical expression q(x)=1/[√(1+x)+1] for x≠0. Both formulas approach 1/2. The first subtracts two nearly equal floating-point numbers, then divides by the small x. The subtraction can destroy relative accuracy in the small numerator; the second expression avoids that cancellation.

This is distinct from conditioning. The mathematical q near zero changes gently with x. A poor evaluation formula can lose precision even for a well-conditioned problem. Conversely, computing a nearly singular model very accurately does not make it insensitive to uncertain data. Numerical differentiation has a related tradeoff: a difference quotient's truncation error decreases as its step shrinks, while subtractive cancellation and evaluation noise may increase. “Make the step as small as possible” is not a general algorithm.

## Design a step size from competing errors

Suppose \(f\) is three times differentiable on \([a-h,a+h]\), with \(|f'''|\le M\), and each observed value differs from the true \(f\) value by at most \(\eta\). The centered estimate is \(D_h=[f_{\rm obs}(a+h)-f_{\rm obs}(a-h)]/(2h)\). Taylor's theorem on each side, with the third-order remainder, shows that the *noise-free* centered quotient differs from \(f'(a)\) by at most \(Mh^2/6\). The two observation errors contribute at most \((\eta+\eta)/(2h)=\eta/h\). Therefore

\[
|D_h-f'(a)|\le \frac{Mh^2}{6}+\frac{\eta}{h}.
\]

The first term grows with \(h\) and the second grows as \(h\) approaches zero. If \(M>0\) and \(\eta>0\), differentiating this *upper bound* gives a minimum at \(h=(3\eta/M)^{1/3}\), provided the chosen \(h\) fits the interval where the assumptions hold. This is an optimal choice for the bound, not a claim that the actual error must attain it. With \(M=6\) and \(\eta=10^{-6}\), \(h\approx0.00794\) and the bound is about \(0.000189\). At \(h=0.001\) the noise contribution alone is \(0.001\), so making the interval eight times smaller weakens the guarantee.

```mathviz
scene "A finite difference has two error scales";
domain 0.001 0.03;
range 0 0.003;
param eta = 0.000001 from 0.0000001 to 0.000002;
param M = 6 from 1 to 10;
fn truncation(x) = M*x^2/6;
fn noise(x) = eta/x;
fn total(x) = truncation(x)+noise(x);
plot truncation color blue;
plot noise color rose;
plot total color teal;
```

**Predict.** Which side of the window is dominated by measurement error? **Explore.** Double η with the control, then locate the new minimum of the teal bound. **Explain.** The cubic-root formula predicts how the best h moves as data quality changes. **Transfer.** A colleague proposes a one-sided difference instead. Derive its truncation and noise terms under an |f″| bound; the powers of h differ, so the best step need not obey the same cubic-root rule. The graph displays a bound function, not a measurement of the true derivative error.

```exercise
{"id":"calc-error-step-choice","type":"written","prompt":"Assume |f‴|≤3 and each of two function observations has absolute error at most 0.000003. Derive a guaranteed error bound for the centered difference, find the step minimizing that bound, and explain why the result does not certify the actual error equals the bound.","hints":["Use Mh²/6+η/h with the given M and η.","Set the derivative Mh/3−η/h² to zero; check a minimum."],"rubric":["Obtains h²/2+0.000003/h","Solves h³=0.000003 and gives h≈0.01442","Checks the balance/minimum and interval assumption","Separates an upper bound from actual error"],"solution":"The guaranteed error is at most (3h²)/6+0.000003/h=h²/2+0.000003/h. Its derivative is h−0.000003/h², so the positive critical point satisfies h³=0.000003 and is h≈0.01442. The second derivative is 1+0.000006/h³>0. This choice is valid only if [a−h,a+h] lies in the interval supporting the third-derivative bound. The actual truncation and observation errors may be smaller or cancel; minimizing their worst-case sum does not identify their realized values."}
```

## Optional clinic: turn a derivative report into an optimizer certificate

Allow a separate, untimed session for this continuation; its duration remains uncalibrated and outside the published route budget. The centered-difference argument above already explains how to bound a derivative error. Now decide when that report can certify the **value and location of a supplied optimizer candidate**. This does not require a convergence theorem for the algorithm that produced the point.

Use the actual objective \(f:\mathbb R\to\mathbb R\). Assume \(f\in C^2(\mathbb R)\) and a **justified global bound**
\[
f''(x)\ge m>0\qquad(x\in\mathbb R).
\]
The number \(m\) is supplied with its proof or certificate. A derivative report \(v\) at a supplied point \(q\) must have a justified finite uncertainty \(\tau\ge0\):
\[
|v-f'(q)|\le\tau.
\]
Set the finite quantity \(\rho=|v|+\tau\). A small printed derivative is not itself a bound on the true derivative, and a curvature bound on a stencil is not a global curvature bound.

```visual-story
{
  "id": "derivative-report-certificate",
  "title": "When does a derivative report certify an optimizer?",
  "prompt": "Name the actual objective, justify where its curvature bound holds, then turn a derivative report and its uncertainty into value and location guarantees.",
  "stages": [
    {
      "title": "A small derivative can occur far away",
      "body": "Use \\(f(x)=x^2/(1+x^2)\\) on \\(\\mathbb R\\), with unique minimum zero at the origin. The supplied point is \\(n\\ge1\\). The rose segment has slope \\(f'(n)\\); the amber strip is \\(K=[-1/2,1/2]\\). The tol control is a requested derivative tolerance, not an objective-value tolerance. A finite viewport cannot establish a whole-line claim.",
      "question": "Given any positive derivative tolerance and any requested distance bound, choose a point where the derivative meets that tolerance but the point is farther away and its value gap stays at least one half. Could a positive curvature bound known only on the amber interval certify this point?",
      "checkpoint": {
        "hint": "Differentiate the quotient. For \\(n\\ge1\\), compare its derivative with \\(2/n^3\\). Check where \\(f''\\) is positive before applying a curvature constant.",
        "explanation": "For \\(n\\ge1\\),\n\\[\n\\begin{gathered}\nf'(n)=\\frac{2n}{(1+n^2)^2}\\\\\n\\le\\frac2{n^3}\\longrightarrow0,\n\\end{gathered}\n\\]\nwhile\n\\[\nf(n)\\ge\\tfrac12,\\qquad |n-0|=n.\n\\]\nFor any supplied \\(s>0\\) and \\(r>0\\), choose an integer\n\\[\nn>\\max\\{1,r,(2/s)^{1/3}\\}.\n\\]\nThen \\(|f'(n)|<s\\), but its distance exceeds \\(r\\) and its value gap is at least \\(1/2\\). A small exact derivative alone gives neither requested conclusion.\n\nThe second derivative is\n\\[\nf''(x)=\\frac{2(1-3x^2)}{(1+x^2)^3}.\n\\]\nOn \\(K\\), its numerator is at least \\(1/2\\) and denominator at most \\(125/64\\), so\n\\[\n\\begin{gathered}\nf''(x)\\ge32/125>0\\\\\n(x\\in K).\n\\end{gathered}\n\\]\nThat bound does not apply along the whole segment from zero to this supplied point. In fact \\(f''(1)<0\\). Curvature known only after confinement cannot itself establish confinement from a distant derivative report.",
        "criteria": [
          "Constructs a point after both requested tolerances are supplied.",
          "Proves the derivative estimate and persistent value gap on the whole line.",
          "States exactly where the positive curvature bound holds.",
          "Does not convert a local curvature fact into a global solver certificate."
        ]
      },
      "scene": "scene \"A small derivative outside the region with known curvature\";\ndomain -1 21; range -0.05 1.05;\nparam n=8 from 1 to 20; param tol=0.01 from 0.0001 to 0.1;\nfn base(x)=x^2/(1+x^2);\nlet grad=2*n/(1+n^2)^2;\nplot base color blue;\npolygon local_strip=(-0.5,-0.05),(0.5,-0.05),(0.5,1.05),(-0.5,1.05) color amber;\npoint minimum=(0,0) color teal; point supplied=(n,base(n)) color rose;\nsegment derivative_direction from (n,base(n)) to (n+1,base(n)+grad) color rose;\nmeasure derivative_size=abs(grad); measure derivative_tolerance_margin=tol-abs(grad);\nmeasure objective_gap=base(n); measure actual_distance=n;\nmeasure local_curvature_lower_bound=32/125; measure curvature_region_margin=0.5-n;",
      "focus": [
        "curve-base",
        "polygon-local_strip",
        "point-supplied",
        "line-derivative_direction"
      ]
    },
    {
      "title": "Convert an exact derivative using global curvature",
      "body": "Minimize \\(F_m(x)=mx^2/2\\) on \\(\\mathbb R\\), with \\(m>0\\). Here the mu control is a proved global curvature lower bound \\(m\\), and the derivative at the supplied point \\(q\\) is known exactly. The amber strip marks a requested strict distance \\(r\\); the violet line marks a requested value gap \\(\\Delta\\), controlled by tol. The short teal segment has the true derivative as its slope.",
      "question": "Derive a derivative-size threshold for each requested target. Which target permits equality? Compare m=1,q=0.08 with m=0.1,q=0.8: can the same exact derivative size give different value and distance errors? What is required when Delta=0?",
      "checkpoint": {
        "hint": "Write \\(g=mq\\). Express \\(mq^2/2\\) and \\(|q|\\) using \\(|g|\\) and the supplied \\(m\\). The constant applies everywhere to this objective.",
        "explanation": "For the exact derivative \\(g=mq\\),\n\\[\n\\begin{gathered}\nF_m(q)-F_m(0)=\\frac{|g|^2}{2m},\\\\\n|q|=\\frac{|g|}{m}.\n\\end{gathered}\n\\]\nThus a non-strict requested value gap \\(\\Delta\\ge0\\) is certified by\n\\[\n|g|^2/(2m)\\le\\Delta,\n\\]\nand a requested strict distance \\(r>0\\) by\n\\[\n|g|<mr.\n\\]\nIn this quadratic example the identities make the tests exact. The general theorem below gives sufficient bounds for other globally curved objectives.\n\nBoth requested points have \\(|g|=0.08\\). At \\(m=1,q=0.08\\), the value gap is \\(0.0032\\) and distance \\(0.08\\). At \\(m=0.1,q=0.8\\), they are \\(0.032\\) and \\(0.8\\). A derivative size alone omits the curvature scale.\n\nSince \\(m>0\\), the value target \\(\\Delta=0\\) requires \\(g=0\\), hence \\(q=0\\). A zero value-target margin is allowed; a strict distance target needs a positive location-target margin. The lower bound must be justified for the actual objective on the declared domain; the positive local curvature in the preceding stage did not provide this global premise.",
        "criteria": [
          "Derives both identities from the exact derivative.",
          "Chooses the derivative threshold after the value or location target is specified.",
          "Treats non-strict value and strict location targets differently, including zero value tolerance.",
          "Uses the supplied global curvature scale rather than derivative size alone."
        ]
      },
      "scene": "scene \"An exact derivative and a known global curvature scale\";\ndomain -1.2 1.2; range -0.1 1.6;\nparam mu=1 from 0.1 to 2; param q=0.08 from -1 to 1;\nparam tol=0.005 from 0 to 0.1; param r=0.1 from 0.01 to 1;\nlet grad=mu*q;\nfn base(x)=mu*x^2/2;\nplot base color blue;\npolygon requested_strip=(-r,-0.1),(r,-0.1),(r,1.6),(-r,1.6) color amber;\nsegment value_target from (-1.2,tol) to (1.2,tol) color violet;\npoint minimum=(0,0) color rose; point supplied=(q,base(q)) color teal;\nsegment derivative_direction from (q,base(q)) to (q+0.1,base(q)+0.1*grad) color teal;\nmeasure global_curvature_lower_bound=mu; measure derivative_size=abs(grad);\nmeasure value_gap_certificate=grad^2/(2*mu); measure value_target_margin=tol-grad^2/(2*mu);\nmeasure location_certificate=abs(grad)/mu; measure location_target_margin=r-abs(grad)/mu;\nmeasure actual_value_gap=base(q); measure actual_distance=abs(q);",
      "focus": [
        "curve-base",
        "polygon-requested_strip",
        "point-supplied",
        "line-derivative_direction"
      ]
    },
    {
      "title": "Account for uncertainty before stopping",
      "body": "Keep the globally curved quadratic objective, but now a supplied point has a report \\(v=mq+\\tau e\\), where \\(|e|\\le1\\) and finite \\(\\tau\\ge0\\). The derivative is uncertain by the stipulated bound \\(\\tau\\). The short teal segment has the reported slope \\(v\\); it need not be the true tangent. Choose the value and location targets before deciding how much uncertainty is affordable. The mu and tol controls again record \\(m\\) and \\(\\Delta\\).",
      "question": "Derive the two certificates from v and tau. When does uncertainty alone prevent either certificate, regardless of the reported value? Test q=1/16,tau=1/8,direction=-1/2,m=1,Delta=1/128,r=1/8. Then find a valid report for a genuinely accurate point where both sufficient bounds fail. Does a zero report establish an exact derivative?",
      "checkpoint": {
        "hint": "The true derivative size is at most \\(\\rho=|v|+\\tau\\). For this quadratic compare \\(|q|\\) with \\(\\rho/m\\) and \\(mq^2/2\\) with \\(\\rho^2/(2m)\\). Treat a zero requested value gap separately from a strict distance target.",
        "explanation": "The report uncertainty cannot be omitted. Since \\(\\rho=|v|+\\tau\\ge\\tau\\),\n\\[\n\\begin{gathered}\n\\delta_{\\rm cert}\\ge\\tau^2/(2m),\\\\\nr_{\\rm cert}\\ge\\tau/m.\n\\end{gathered}\n\\]\nIf \\(\\tau^2/(2m)>\\Delta\\), no reported value can pass this value certificate. If \\(\\tau\\ge mr\\), no reported value can pass the strict location certificate. Equality in the first comparison can still pass when \\(v=0\\); equality in the second cannot establish a strict distance target.\n\nThe report premise gives\n\\[\n|F_m'(q)|\\le |v|+\\tau=\\rho.\n\\]\nConsequently\n\\[\n\\begin{gathered}\nF_m(q)-F_m(0)\\\\\n\\le\\frac{\\rho^2}{2m},\\\\\n|q|\\le\\frac\\rho m.\n\\end{gathered}\n\\]\nFor requested finite \\(\\Delta\\ge0\\) and \\(r>0\\), the complete sufficient decisions are\n\\[\n\\begin{gathered}\n\\frac{\\rho^2}{2m}\\le\\Delta,\\\\\n\\frac\\rho m<r.\n\\end{gathered}\n\\]\nA zero value-target margin is allowed; a strict location certificate needs a positive location-target margin. At \\(q=\\tau=0\\), both errors and both bounds are exactly zero, so the value target \\(\\Delta=0\\) is certified.\n\nThe bounds are sharp as worst-case statements. For \\(q>0\\), reporting \\(v=mq-\\tau\\) with \\(0\\le\\tau\\le mq\\) gives \\(\\rho=mq\\), attaining both bounds. Other admissible report errors can make them conservative.\n\nAt the defaults, \\(v=0.07\\), \\(\\rho=0.08\\), the value bound is \\(0.0032\\le0.005\\), and the distance bound is \\(0.08<0.1\\). Holding a small derivative size fixed while reducing \\(m\\) can enlarge both certified errors. The numerical value of \\(m\\) must come from the actual objective and its declared domain, not from a convenient control setting.\n\nIf a sufficient inequality fails, these bounds leave that target undecided. They do not prove an actual error exceeds its target. For \\(q=1/16\\), \\(\\tau=1/8\\), \\(e=-1/2\\), and \\(m=1\\), the report is zero but \\(\\rho=1/8\\). The value bound \\(1/128\\) equals the requested value tolerance and passes; the location bound \\(1/8\\) equals the strict radius and does not pass. The actual point has distance \\(1/16\\) and value gap \\(1/512\\), meeting both targets. A zero report did not eliminate its stipulated uncertainty or prove the true derivative was zero.\n\nFor \\(q=0.08\\), \\(m=1\\), \\(\\tau=0.04\\), and \\(e=1\\), both sufficient bounds fail at the authored targets, although the true value gap remains \\(0.0032\\) and the true distance \\(0.08\\). The theorem below derives the same certificates without knowing a quadratic optimizer in advance.",
        "criteria": [
          "Includes the uncertainty tau when bounding the true derivative.",
          "Uses a justified positive global curvature constant for the actual objective.",
          "Checks whether uncertainty alone has exhausted either target budget.",
          "Allows equality for the non-strict value target but requires a strict distance margin.",
          "Distinguishes sharp worst-case bounds from equality at every setting.",
          "Treats exact zero and failed sufficient inequalities correctly."
        ]
      },
      "scene": "scene \"A derivative report, its uncertainty, and two optimizer targets\";\ndomain -1.2 1.2; range -0.1 1.6;\nparam mu=1 from 0.1 to 2; param q=0.08 from -1 to 1;\nparam tau=0.01 from 0 to 0.2; param direction=-1 from -1 to 1;\nparam tol=0.005 from 0 to 0.1; param r=0.1 from 0.01 to 1;\nlet report=mu*q+tau*direction; let rho=abs(report)+tau;\nfn base(x)=mu*x^2/2;\nplot base color blue;\npolygon requested_strip=(-r,-0.1),(r,-0.1),(r,1.6),(-r,1.6) color amber;\nsegment value_target from (-1.2,tol) to (1.2,tol) color violet;\npoint minimum=(0,0) color rose; point supplied=(q,base(q)) color teal;\nsegment reported_direction from (q,base(q)) to (q+0.1,base(q)+0.1*report) color teal;\nmeasure global_curvature_lower_bound=mu; measure reported_derivative=report;\nmeasure derivative_uncertainty=tau; measure actual_report_error=abs(report-mu*q);\nmeasure certified_derivative_size=rho;\nmeasure value_gap_certificate=rho^2/(2*mu); measure value_target_margin=tol-rho^2/(2*mu);\nmeasure location_certificate=rho/mu; measure location_target_margin=r-rho/mu;\nmeasure actual_value_gap=base(q); measure actual_distance=abs(q);",
      "focus": [
        "curve-base",
        "polygon-requested_strip",
        "point-supplied",
        "line-reported_direction"
      ]
    }
  ]
}
```

### Existence, uniqueness, and the two certificates

The global hypothesis gives an optimizer before we use any report. By the mean value theorem, for \(x>0\),
\[
f'(x)\ge f'(0)+mx,
\]
and for \(x<0\), the reversed comparison gives
\[
f'(x)\le f'(0)+mx.
\]
Thus \(f'\) takes both signs. It is continuous and strictly increasing, so it has exactly one zero \(p\). Its sign is negative to the left of \(p\) and positive to the right. The mean value theorem applied to \(f\) then proves that \(p\) is the unique global minimizer.

Taylor's theorem and the global lower bound imply, for every \(y\in\mathbb R\),
\[
\begin{gathered}
f(y)\ge f(q)+f'(q)(y-q)\\
+\frac m2(y-q)^2.
\end{gathered}
\]
Completing this lower quadratic gives
\[
f(y)\ge f(q)-\frac{|f'(q)|^2}{2m}.
\]
Take \(y=p\) and use \(|f'(q)|\le\rho\):
\[
0\le f(q)-f(p)\le\frac{\rho^2}{2m}.
\]
For location, apply the mean value theorem to \(f'\) between \(p\) and \(q\). Since \(f'(p)=0\) and \(f''\ge m\),
\[
|q-p|\le\frac{|f'(q)|}{m}\le\frac\rho m.
\]
The case \(q=p\) is immediate. Both statements hold for any supplied point and any report satisfying the premises.

For a requested value tolerance \(\Delta\ge0\), the sufficient stopping decision is
\[
\rho^2/(2m)\le\Delta.
\]
For a requested strict location tolerance \(r>0\), use
\[
\rho<mr.
\]
These are finite, reviewable decisions. A failed sufficient bound leaves actual accuracy undecided. The positive global curvature is essential to this proof; strict convexity alone does not supply a numerical \(m\), and a positive second derivative only at the supplied point does not control the segment to an unknown optimizer.

Boyd and Vandenberghe's author-hosted [*Convex Optimization*, inequalities (9.9)–(9.10)](https://www.seas.ucla.edu/~vandenbe/cvxbook/bv_cvxbook.pdf), printed page 460, develops the objective-gap certificate under a positive curvature bound. The one-dimensional existence and sharper distance argument here are proved directly with the mean value theorem.

### Keep the error meanings and units separate

If \(x\) has units \(X\) and the objective has units \(F\), then \(v,\tau,\rho\) have units \(F/X\), and \(m\) has units \(F/X^2\). Consequently \(\rho^2/(2m)\) has objective units \(F\), while \(\rho/m\) has location units \(X\). A function-observation uncertainty \(\eta\) has units \(F\). Its contribution \(\eta/h\), and the truncation term \(Mh^2/6\), both have derivative units \(F/X\). The third-derivative bound \(M\) is required only on the finite-difference stencil; the positive lower bound \(m\) has the separate global role stated above.

An observation-error bound concerns reported values of the same objective at the sampled points. It is not a uniform perturbation bound between two objectives. If this derivative certificate supplies the \(\delta\)-approximate-optimizer premise in the [optimizer-location clinic](../lucent-analysis/counterexamples.md#untimed-clinic-choose-an-error-budget-for-an-optimizer-location), it must be applied to the **actual optimized objective** \(\widetilde f\), with its own report, smoothness and global curvature proof. A reference objective's derivative does not certify a different perturbed objective. In particular, this \(C^2\) theorem does not automatically apply to the nonsmooth tent examples there.

### Unary notebook: observations to a solver-value tolerance

Use \(F(x)=x^2+x^4\). Its second derivative is globally at least \(m=2\). For the permitted \(|q|\le0.2\) and \(0<h\le0.1\), each stencil lies in \([-0.3,0.3]\), where
\[
|F'''(x)|=|24x|\le7.2=M.
\]
The exact observation errors are stipulated as \(\eta e_+\) and \(\eta e_-\), with \(|e_\pm|\le1\); ep and em control these signs and sizes. Thus every permitted setting satisfies the observation model, including \(\eta=0\). An actual numerical evaluator would need its own justified observation bound, including relevant evaluation error.

Predict the eight outputs, then run. The third is a check of the simulated derivative-error bound; the sixth allows equality for the value target, while the eighth must be positive for the strict location target.

```notebook
param q=0.01 from -0.2 to 0.2;
param h=0.01 from 0.001 to 0.1;
param eta=0.000001 from 0 to 0.0001;
param ep=1 from -1 to 1;
param em=-1 from -1 to 1;
fn objective(x)=x^2+x^4;
fn slope(x)=2*x+4*x^3;
let mu=2;
let M=7.2;
let requested_gap=0.0002;
let requested_radius=0.015;
let right=objective(q+h)+eta*ep;
let left=objective(q-h)+eta*em;
let report=(right-left)/(2*h);
let tau=M*h^2/6+eta/h;
let rho=abs(report)+tau;
let value_certificate=rho^2/(2*mu);
let location_certificate=rho/mu;
show report;
show tau;
show tau-abs(report-slope(q));
show rho;
show value_certificate;
show requested_gap-value_certificate;
show location_certificate;
show requested_radius-location_certificate;
```

Derive before comparing decimals:
\[
\begin{gathered}
D_h=2q+4q^3+4qh^2,\\
v=D_h+\eta(e_+-e_-)/(2h),\\
\tau=1.2h^2+\eta/h.
\end{gathered}
\]
The exact clean bias is \(4qh^2\); the uniform \(M\)-bound is valid even when it is conservative. At the defaults both requested targets pass. Increase \(h\) to \(0.1\), holding the supplied point, observations' uncertainty and targets fixed. Both sufficient inequalities then fail, although the actual point still has distance \(0.01<0.015\) and value gap \(0.00010001<0.0002\). Setting \(\eta=0\) removes observation noise; it does not generally remove truncation error. The displayed uniform truncation bound remains positive for every allowed \(h>0\), even at \(q=0\), where the exact clean bias vanishes. The quotient at \(h=0\) is undefined and is excluded.

**Edit the objective, then rejustify the constants.** Change the objective to \(3x^2+x^4\), its slope to \(6x+4x^3\), and mu to \(6\). Keep \(M=7.2\): adding the quadratic term changes the global second derivative but leaves the third derivative unchanged. Recheck both targets. A larger curvature constant alone does not predict a smaller value certificate when the derivative report and objective have also changed. This editable check remains a polynomial problem; the independent nonlinear task below requires its own proof and has no controls.

### Independent task: certify a nonlinear optimizer without finding its formula

```exercise
{
  "id": "calc-error-nonlinear-optimizer-report",
  "type": "written",
  "prompt": "Independent changed nonlinear optimum. Minimize\n\\[\nF(x)=e^x+x^2\\qquad(x\\in\\mathbb R).\n\\]\nA solver supplies \\(q=-7/20\\). At \\(q\\pm h\\), function observations have justified absolute errors at most \\(\\eta=10^{-6}\\). Consider the admissible errors \\(+\\eta\\) at the right point and \\(-\\eta\\) at the left point.\n\n(a) Prove existence and uniqueness of the optimizer \\(p\\), and justify a global curvature bound \\(m=2\\). For \\(h=1/100\\) and \\(h=1/10\\), justify \\(M=1\\) on each finite-difference stencil. Explain why these two constants cover different regions and different derivatives.\n\n(b) Derive the actual centered report \\(v_h\\), its justified derivative uncertainty \\(\\tau_h\\), and \\(\\rho_h=|v_h|+\\tau_h\\). Decide whether the displayed certificates establish both\n\\[\n\\begin{gathered}\nF(q)-F(p)\\le10^{-5},\\\\\n|q-p|<3/1000\n\\end{gathered}\n\\]\nfor each step. Prove your comparisons with rational Taylor bounds; decimal software output alone is not a proof.\n\n(c) Independently bracket \\(p\\) between \\(-352/1000\\) and \\(-351/1000\\). Use this to establish actual distance below \\(2/1000\\) and actual value gap below \\(6\\cdot10^{-6}\\). What does the failed certificate at the larger step tell you about those actual errors?\n\n(d) State what an additional uniform objective-perturbation bound would measure. Why cannot a two-observation error bound be substituted for it?",
  "hints": [
    "For \\(0<t<1\\), alternating partial sums \\(T_k(t)=\\sum_{j=0}^k(-t)^j/j!\\) give \\(T_5(t)<e^{-t}<T_4(t)\\), and \\(T_5(t)<e^{-t}<T_6(t)\\).",
    "Exact subtraction gives \\(v_h=e^q\\sinh(h)/h+2q+\\eta/h\\). Here \\(\\tau_h=h^2/6+\\eta/h\\). For \\(0<h\\le1/10\\), prove \\(1+h^2/6<\\sinh(h)/h<1+h^2/6+h^4/119\\).",
    "Use \\(70468/10^5<e^{-7/20}<70470/10^5\\) to show \\(\\rho_{1/100}<1/200\\) and \\(\\rho_{1/10}>3/400\\).",
    "At the two bracket endpoints, compare \\(e^{-t}\\) with \\(2t\\). On the negative interval between \\(p\\) and \\(q\\), \\(F''\\le3\\); Taylor around \\(p\\), where \\(F'(p)=0\\), bounds the actual value gap."
  ],
  "rubric": [
    "Proves existence/uniqueness and correctly separates global second-derivative curvature from stencil-only third-derivative control.",
    "Derives the actual observation-to-derivative report including both signed observation errors.",
    "Converts a justified derivative uncertainty to both optimizer certificates with the correct strictness.",
    "Uses independent rational bounds to prove both step decisions.",
    "Brackets the unknown optimizer and proves actual accuracy despite a failed sufficient certificate.",
    "Distinguishes two-point observation error from a common-domain objective perturbation."
  ],
  "solution": "Since \\(F''(x)=e^x+2\\ge2\\) on all of \\(\\mathbb R\\), the global theorem supplies a unique minimizer \\(p\\). Equivalently, \\(F'=e^x+2x\\) is strictly increasing, changes sign, and vanishes exactly once. Both stencils lie in \\([-1,0]\\). On each stencil, \\(F'''=e^x\\le1\\), so the local bound \\(M=1\\) is valid. The global constant \\(m=2\\) supports the optimizer certificate; \\(M=1\\) controls only the derivative approximation on those two stencils.\n\nThe exact clean quotient is\n\\[\nD_h=e^q\\frac{\\sinh h}{h}+2q.\n\\]\nThe specified observation errors add \\(\\eta/h\\), so\n\\[\n\\begin{gathered}\nv_h=e^q\\frac{\\sinh h}{h}+2q+\\frac\\eta h,\\\\\n\\tau_h=\\frac{h^2}{6}+\\frac\\eta h,\\\\\n\\rho_h=|v_h|+\\tau_h.\n\\end{gathered}\n\\]\nThese formulas include both observation errors. The resulting certificates are\n\\[\n\\begin{gathered}\nF(q)-F(p)\\le\\rho_h^2/4,\\\\\n|q-p|\\le\\rho_h/2.\n\\end{gathered}\n\\]\n\nHere is a rational proof of the step comparisons. Alternating sums \\(T_5(7/20)\\) and \\(T_6(7/20)\\) imply\n\\[\n\\frac{70468}{10^5}<e^{-7/20}<\\frac{70470}{10^5}.\n\\]\nAlso\n\\[\n\\frac{\\sinh h}{h}=1+\\frac{h^2}{6}+\\frac{h^4}{120}+\\cdots.\n\\]\nFor \\(0<h\\le1/10\\), ratios of successive terms after \\(h^4/120\\) are at most \\(1/4200\\). Their positive tail is bounded by a geometric series, whose total is less than \\(h^4/119\\). Thus\n\\[\n\\begin{gathered}\n1+h^2/6<\\sinh(h)/h\\\\\n<1+h^2/6+h^4/119.\n\\end{gathered}\n\\]\nThese rational bounds show \\(v_h>0\\) at both requested steps. Substituting the upper bounds at \\(h=1/100\\) gives\n\\[\n\\rho_{1/100}<1/200.\n\\]\nTherefore the value bound is less than \\(1/160000<10^{-5}\\), and the location bound is less than \\(1/400<3/1000\\). Both requested targets are certified.\n\nAt \\(h=1/10\\), substituting the lower bounds gives\n\\[\n\\rho_{1/10}>3/400.\n\\]\nIts displayed value bound consequently exceeds \\(9/640000>10^{-5}\\), and its displayed location bound exceeds \\(3/800>3/1000\\). Neither sufficient certificate passes. This is a statement about the two displayed upper bounds, not a lower bound on either actual error.\n\nTo assess actual accuracy independently, exact alternating-polynomial evaluations give\n\\[\n\\begin{gathered}\nT_4(352/1000)\\\\\n=0.703322640384<0.704,\\\\\nT_5(351/1000)\\\\\n=0.703981281360652075\\\\\n>0.702.\n\\end{gathered}\n\\]\nThese terminating decimals represent rational polynomial values. Hence \\(F'(-0.352)<0<F'(-0.351)\\). Strict monotonicity brackets the unique zero \\(p\\) between those numbers. Since \\(q=-0.35\\), its actual distance from \\(p\\) is strictly below \\(0.002\\). On the segment between them, \\(F''=e^x+2<3\\). Taylor's theorem at \\(p\\) now gives\n\\[\n\\begin{gathered}\n0\\le F(q)-F(p)\\\\\n<\\tfrac32(0.002)^2\\\\\n=6\\cdot10^{-6}.\n\\end{gathered}\n\\]\nThus the point meets both actual targets at both step sizes, despite the failed bounds at the larger step.\n\nObservation error \\(\\eta\\) bounds two reported values relative to this same objective. A uniform objective-perturbation bound controls two different functions at every input in a declared common domain. Two observations do not establish such a bound. The derivative certificate applies to the actual smooth objective with the justified global curvature; it cannot be transferred to a different or nonsmooth objective merely by using its reference gradient.",
  "transfer": "A colleague uses the global curvature of \\(x^2\\) but measures the derivative of a different fitted objective whose derivative may have a corner. Which premise is missing? State exactly what would be needed before this report could supply the fitted objective's solver-value tolerance.",
  "transferSolution": "The certificate requires the report to approximate the derivative of the objective actually being minimized, and requires the stated global smoothness and positive curvature bound for that same objective on the relevant declared domain. Curvature of \\(x^2\\) alone supplies neither fact for a different fitted objective. A corner also violates this particular \\(C^2\\) theorem. A separately proved optimizer certificate for that fitted objective could supply a solver-value tolerance, but no such certificate follows from the reference gradient alone."
}
```

**Delayed retrieval.** Given only a supplied candidate, a derivative report and a claimed tolerance, list the premises still needed to certify a value gap and a location. State which bounds concern the full objective and which concern its sampling stencil. Explain why a failed certificate can coexist with actual accuracy.

## Practice: from a desired guarantee to a method

1. A computed mass is 250 g with an absolute error bound of 0.5 g. Give the relative error bound using the true mass, which is unknown but lies in the certified interval.
2. If r=3±0.01 metres, bound the error in the area πr² by the mean value theorem. Compare the differential estimate.
3. Use a Taylor polynomial to approximate ∫₀^(1/2) exp(−x²) dx with certified error below 0.00001. Use as few terms as the displayed alternating bound requires.
4. How many midpoint intervals guarantee error at most 0.0001 for ∫₀¹ exp(−x²) dx using |f″|≤2?
5. An input contribution is bounded by 0.003 and a model contribution by 0.004. A final absolute tolerance is 0.01. What numerical tolerance is sufficient? Why may errors not simply be subtracted?
6. Rationalize [√(9+h)−3]/h, find its limit at zero, and explain the computational advantage.
7. Two approximations agree to ten displayed decimal places. Construct a reason this need not certify ten correct decimal places. Use a shared modeling error or a function missed by the samples.
8. Prove that if |f′|≤M on an interval containing a and a+h, then input uncertainty |h|≤δ gives output error at most Mδ. Identify the hypotheses needed for the mean value theorem.

<details><summary>Hints: choose the relevant kind of error</summary>

1. First bound the denominator in |error|/|true mass| from below. 2. Bound 2πr on the full uncertainty interval. 3. Integrate the omitted term; the upper limit contributes an additional power. 4. Solve an inequality for the integer n, then round upward. 5. Use the triangle inequality. 6. Multiply numerator and denominator by the conjugate. 7. Agreement checks consistency between methods, not the correctness of shared assumptions. 8. Apply the theorem separately for h positive, negative, and zero.

</details>

<details><summary>Full solutions</summary>

1. The true mass is at least 249.5 g, so relative error is at most 0.5/249.5=1/499≈0.002004, or 0.2004%. Dividing by 250 gives a nominal relative estimate, slightly smaller than the guaranteed bound.
2. Since r lies in [2.99,3.01], |ΔA|≤2π·3.01·0.01=0.0602π m². The differential estimate is 0.06π m². The difference accounts for the derivative changing over the uncertainty interval.
3. Take P₄=1−x²+x⁴/2. Its integral is 1/2−(1/2)³/3+(1/2)⁵/10=443/960≈0.46145833. The integrated remainder is at most (1/2)⁷/(6·7)=1/5376≈0.0001860, too large. Including −x⁶/6 gives 443/960−1/5376≈0.46127232, with error at most (1/2)⁹/(24·9)=1/110592≈0.0000090423, meeting the target. Two fewer terms cannot meet it using this bound.
4. Require 1/(12n²)≤0.0001, so n≥√(10000/12)≈28.868. The smallest sufficient integer is 29.
5. A computational bound of 0.003 is sufficient because 0.003+0.004+0.003=0.01. Unknown errors might have the same sign; cancellation cannot be promised without additional information.
6. For h≠0, the expression equals 1/[√(9+h)+3], tending to 1/6. The second form avoids subtracting nearly equal numbers. Its real domain near zero is harmless, but the original expression also excludes h=0.
7. Both methods could integrate the wrong density after a unit conversion mistake. Alternatively, a narrow positive bump lying between every sampled point can have positive integral while both sample-based sums are zero. Neither agreement nor a finite picture excludes such possibilities without regularity or modeling checks.
8. Assume f is continuous on the closed interval with endpoints a and a+h and differentiable on its interior. For h≠0, some c between them satisfies f(a+h)−f(a)=f′(c)h. Taking absolute values gives at most M|h|≤Mδ. For h=0 the result is immediate. A derivative bound valid only at a does not provide the same guarantee.

</details>

**Next:** use this distinction between evidence and guarantees in the [modelling capstone](modelling-capstone.md). For deeper justification of uniform remainder control, see [exchanging limits in real analysis](../lucent-analysis/exchanging-limits.md). The curriculum connections are Taylor approximation and numerical integration in the [MIT single-variable syllabus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/); the scenarios and solutions here are original.
