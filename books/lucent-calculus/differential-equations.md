# Differential equations: laws of change become simulations

## Outcomes and preparation

You will translate a rate assumption into an initial-value problem, solve separable equations without losing equilibrium solutions, use a phase line to predict long-term behavior, and explain Euler and fourth-order Runge–Kutta approximations. You will also build an editable simulation and test whether its numerical behavior matches the mathematics. Prerequisites are derivatives, integration by substitution and partial fractions, exponentials, and Taylor approximation. Plan two or three sessions; return to the numerical experiments after doing the calculations.

A differential equation specifies how a state changes. A solution supplies the state itself over an interval. In \(y'(t)=F(t,y(t))\), the right side is a rule for the derivative at each possible time and state. The initial condition \(y(t_0)=y_0\) selects a trajectory when suitable uniqueness conditions hold.

## From a situation to an equation

Write down the state, its units, the time unit, and the assumptions before solving. If a well-mixed drink cools in a room held at temperature A, a simple model assumes its temperature changes at a rate proportional to its excess above A:

$$
T'=-k(T-A),\qquad k>0.
$$

Here \(k\) has units of inverse time. The minus sign predicts cooling above room temperature and warming below it. Constant \(A\), constant \(k\), and uniform temperature throughout the drink are modeling assumptions. The equation can be solved perfectly while those assumptions remain imperfect descriptions of a real mug.

A classical solution is a differentiable function on an interval that satisfies both the equation and initial condition. Check a proposed solution by differentiating and substituting, then checking the initial value and its interval of definition. Merely finding a plausible-looking curve is insufficient.

If \(F\) is continuous near \((t_0,y_0)\), a local solution exists. If \(F\) is also locally Lipschitz in \(y\) there, it is locally unique; continuous \(\partial F/\partial y\) on a neighborhood is a useful sufficient condition. These are local statements. Solutions can leave the region or become unbounded in finite time.

## Separation, including the solutions division hides

For \(y'=g(t)h(y)\), first find zeros of \(h\). Each zero \(c\) gives an equilibrium \(y(t)=c\). On an interval where \(h(y)\ne0\), divide and integrate:

$$
\int\frac{dy}{h(y)}=\int g(t)\,dt+C.
$$

The justification is the chain rule: if \(H'(y)=1/h(y)\), then \(dH(y(t))/dt=g(t)\). Recovering \(y\) may require restricting a logarithm or choosing a branch. Always check the resulting function in the original equation.

### Worked example 1: cooling with measured data

A drink starts at \(80^\circ\mathrm C\) in a \(20^\circ\mathrm C\) room and reaches \(50^\circ\mathrm C\) after \(10\) minutes. Separating gives \(\ln|T-20|=-kt+C\). Since the initial excess is positive,

$$
T(t)=20+60e^{-kt}.
$$

The measurement gives \(30=60e^{-10k}\), so \(k=\ln(2)/10\) per minute. To reach \(35^\circ\mathrm C\), solve \(15=60e^{-kt}\); this gives \(t=\ln(4)/k=20\) minutes. Check: \(T'=-60ke^{-kt}=-k(T-20)\), and \(T(0)=80\). The constant solution \(T=20\) was excluded when we divided by \(T-20\) but remains a valid solution for a different initial condition.

## When separation is awkward: a linear equation

If the ambient temperature \(A(t)\) changes, the same proportional response assumption gives \(T'+kT=kA(t)\). The equation is linear but no longer autonomous. Multiplying by \(e^{kt}\) turns the left side into one derivative:

\[
\frac{d}{dt}\bigl(e^{kt}T\bigr)
=e^{kt}(T'+kT)=ke^{kt}A(t).
\]

Integrating from zero to \(t\) and using \(T(0)=T_0\) yields

\[
T(t)=e^{-kt}\left[T_0+k\int_0^t e^{ks}A(s)\,ds\right].
\]

This **integrating factor** is chosen to make the product rule match the coefficient of \(T\). It is not a mnemonic independent of verification. The formula assumes \(A\) is continuous on the interval of interest, and \(k\) is a fixed positive constant. For a general equation \(y'+p(t)y=q(t)\), choose \(\mu(t)=\exp(\int p(t)\,dt)\) on an interval where \(p\) is continuous. Then \((\mu y)'=\mu q\). Integrate, impose the initial condition, and check the result.

**Worked contrast.** Let \(k=1/2\) per minute and let a room warm at \(1^\circ\mathrm C\) per minute, \(A(t)=20+t\), with \(t\) in minutes. Seek a particular solution \(T_p=a+t\). Substitution gives \(1+(a+t)/2=(20+t)/2\), so \(a=18\). The full solution is \(T(t)=18+t+Ce^{-t/2}\). For \(T(0)=80\), \(C=62\). Its derivative is \(1-31e^{-t/2}\), while \(-(T-A)/2=-(-2+62e^{-t/2})/2\) gives the same expression. At large time the drink trails the rising room by about \(2^\circ\mathrm C\); the fixed-room formula's limit of \(20^\circ\mathrm C\) would answer the wrong model.

```notebook
# Change k or the warming rate in both definitions.
param k = 0.5 from 0.1 to 2;
fn ambient(x) = 20+x;
fn temperature(x) = ambient(x)-1/k+(80-20+1/k)*exp(-k*x);
show temperature(4);
plot ambient from 0 to 10;
plot temperature from 0 to 10;
```

**Predict → inspect → explain.** Before changing k, decide whether larger k makes the temperature track a rising room more closely. Inspect the displayed curves and value at four minutes. Then derive the long-time lag 1/k; the plot alone cannot establish an asymptote. For a room warming at rate c instead, change `ambient(x)` to `20+c*x` and derive T_p=20+cx−c/k before editing the temperature function. The source must change consistently in both places; a visualization cannot repair an inconsistent model.

```exercise
{"id":"calc-ode-varying-ambient","type":"written","prompt":"A room cools according to A(t)=30−2t degrees Celsius for 0≤t≤5 minutes. An object follows T′=−(T−A)/4 and starts at T(0)=50. Solve, verify, and explain why the constant-ambient cooling formula is unsuitable.","hints":["Write T′+T/4=A/4 and try a particular solution a−2t.","The homogeneous term is Ce^(−t/4); use the initial value after finding a."],"rubric":["Uses the changing ambient temperature in the differential equation","Finds a correct particular and homogeneous solution","Applies T(0)=50 and verifies by substitution","Explains the modelling difference from fixed ambient"],"solution":"Try T_p=a−2t. Substitution gives −2+(a−2t)/4=(30−2t)/4, hence a=38. Thus T=38−2t+Ce^(−t/4). The initial value gives C=12. Differentiating yields T′=−2−3e^(−t/4), while −[T−(30−2t)]/4=−[8+12e^(−t/4)]/4 gives the same result. A constant-ambient formula would assume A′=0, contrary to the stated room temperature; over the interval its prediction answers a different model."}
```

## Autonomous equations and phase lines

An equation \(y'=f(y)\) is autonomous: time does not appear explicitly. Draw its equilibrium values on a state axis and mark the sign of \(f\) between them. Positive \(f\) means motion toward larger \(y\); negative \(f\) means motion toward smaller \(y\). An equilibrium is attracting if nearby trajectories approach it forward in time and repelling if they move away. For \(C^1\) functions, \(f'(c)<0\) implies local attraction and \(f'(c)>0\) implies repulsion; \(f'(c)=0\) requires further analysis.

### Worked example 2: limited population growth

The logistic model is \(P'=rP(1-P/K)\), where \(r>0\) and \(K>0\). The factors represent growth proportional to population and a reduction as population approaches a carrying capacity \(K\). Equilibria are \(0\) and \(K\). The derivative is positive for \(0<P<K\) and negative for \(P>K\), so every positive initial population moves toward \(K\). Zero repels small positive populations.

For \(P\ne0,K\), partial fractions give

$$
\frac1{P(1-P/K)}=\frac1P+\frac1{K-P}.
$$

Integrating yields \(\ln|P|-\ln|K-P|=rt+C\). With initial \(P_0>0\), the resulting solution, including \(P_0=K\) by direct substitution, is

$$
P(t)=\frac{K}{1+(K/P_0-1)e^{-rt}},\qquad t\ge0.
$$

The denominator stays positive for forward time, and \(P\to K\). For \(K=1000\), \(P_0=100\), and \(r=0.4\) per year, half-capacity occurs when \(1+9e^{-0.4t}=2\), hence \(t=\ln(9)/0.4\approx5.49\) years. This calculation describes the model, whose fixed environment assumption would need evidence in an application.

## Experiment 1: write a population simulation

```mathviz
scene "A logistic law generates its trajectory";
domain 0 8;
range 0 6;
param r = 0.7 from 0.1 to 2;
param capacity = 2 from 0.5 to 3;
param fraction = 0.2 from 0.05 to 1.8;
param n = 96 from 32 to 256;
field growth(x,y) = (1,r*y*(1-y/capacity));
flow growth from (0,fraction*capacity) time 8 steps floor(n) color rose;
fn exact(x) = capacity/(1+(1/fraction-1)*exp(-r*x));
plot exact color blue;
fn equilibrium(x) = capacity;
plot equilibrium color amber;
```

**Predict.** Set fraction below one, then above one. Predict the direction of motion and its eventual destination. Increasing r should change the timescale, not the carrying capacity.

**Explore.** Vary all four controls. Compare the rose numerical trajectory with the blue exact solution. The horizontal component of the field is 1, so its x-coordinate is elapsed time; the vertical component is the population law. Arrows show local directions, while the trajectory integrates those directions.

**Explain.** Use the phase-line signs to explain why a true solution starting between zero and capacity cannot cross either equilibrium when uniqueness holds. Agreement of two drawn curves is evidence limited by resolution.

**Transfer.** Edit the vertical component to `r*y` and the exact formula to `fraction*capacity*exp(r*x)`. Predict the loss of the positive equilibrium. Then restore the source and test how changing only capacity affects the population as a fraction of capacity. The `flow` command uses RK4, not Euler.

## Euler's method is repeated local linearization

For step \(h>0\), set \(t_{n+1}=t_n+h\) and

$$
y_{n+1}=y_n+hF(t_n,y_n).
$$

This walks along the tangent predicted by the equation, then recomputes the slope at the new approximate state. If the exact solution has a bounded second derivative, one step started from the exact state has error \(O(h^2)\). On a fixed finite time interval, with suitable Lipschitz control and bounded derivatives, accumulated global error is \(O(h)\). Halving \(h\) therefore approximately halves the final error once the asymptotic regime is reached. These order statements do not supply numerical error constants.

### Worked example 3: Euler and RK4 on decay

Solve \(y'=-2y,\ y(0)=1\). The exact solution is \(e^{-2t}\). With \(h=0.25\), Euler multiplies the state by \(1-2h=0.5\), giving \(y_1=0.5,\ y_2=0.25\) at \(t=0.5\). The exact value there is \(e^{-1}\approx0.367879\), so Euler substantially underestimates it.

Classical fourth-order Runge–Kutta uses four slopes:

$$
\begin{aligned}
k_1&=F(t_n,y_n),\\
k_2&=F(t_n+h/2,y_n+hk_1/2),\\
k_3&=F(t_n+h/2,y_n+hk_2/2),\\
k_4&=F(t_n+h,y_n+hk_3),\\
y_{n+1}&=y_n+\frac h6(k_1+2k_2+2k_3+k_4).
\end{aligned}
$$

Starting from \(y_0=1\) with \(h=0.25\) gives slopes \(-2,-1.5,-1.625,-1.1875\). Thus \(y_1=0.606770833\), close to \(e^{-0.5}\approx0.606530660\). Under sufficient smoothness and stability on a fixed interval, RK4 has one-step error \(O(h^5)\) and global error \(O(h^4)\). Four slope evaluations cost more per step, but can buy much better accuracy. A high order does not remove stability restrictions.

## Visual argument: when the simulation invents oscillation

The rose polygonal curve joins the Euler values \(y_n=(1-2h)^n\) at times \(nh\). At \(h=0.5\), interpret the initial value as \(y_0=1\) and every subsequent value as zero, consistently with the recurrence.

```visual-story
{
  "id": "euler-decay-stability",
  "title": "Accuracy, positivity, and stability are different questions",
  "prompt": "The exact solution of y′ = −2y stays positive and decays. Decide which of those properties Euler's recurrence inherits before changing the step size.",
  "stages": [
    {
      "title": "Begin with a positive multiplier",
      "body": "Start Euler's recurrence for y′=−2y from y₀=1 with h=0.2. Compute the discrete states before using the exact curve as a separate accuracy check.",
      "question": "Compute y₁, y₂, and y₃. Which fact gives positivity, and what separate calculation would measure accuracy at t = 0.6?",
      "checkpoint": {
        "hint": "Rewrite the update as yₙ₊₁=(1−2h)yₙ. Compare y₃ with the exact value e^(−2·0.6); do not use sign preservation as an error estimate.",
        "explanation": "Here 1−2h=0.6, so y₁=0.6, y₂=0.36, and y₃=0.216. Positivity follows because every update multiplies a positive state by the positive number 0.6. Accuracy is separate: at t=0.6 the exact value is e^(−1.2)≈0.3012, so one can measure the absolute error |0.216−e^(−1.2)|≈0.0852 (or state a relative error). Correct sign and decay do not certify a small error.",
        "criteria": [
          "I derived the multiplier 0.6 from the Euler update.",
          "I computed the three iterates 0.6, 0.36, and 0.216.",
          "I compared with e^(−1.2) separately from checking positivity."
        ]
      },
      "transition": "none",
      "focus": ["curve-exact_curve", "curve-euler_curve"],
      "scene": [
        "scene \"Euler decay with a positive multiplier\";",
        "domain 0 4;",
        "range -3 3;",
        "param h = 0.2 from 0.05 to 1.2;",
        "fn exact(x) = exp(-2*x);",
        "fn approximation(x) = (1-2*h)^floor(x/h)*(1-2*(x-h*floor(x/h)));",
        "measure euler_multiplier = 1-2*h;",
        "plot exact color blue as exact_curve;",
        "plot approximation color rose as euler_curve;"
      ]
    },
    {
      "title": "Take a coarser positive step",
      "body": "Increase the step to h=0.4. Use the recurrence to classify sign and long-run magnitude, then make an independent one-step comparison with the exact solution.",
      "question": "Why do positivity and decay hold here while the relative error after one step is worse than the graph's shared endpoint might suggest?",
      "checkpoint": {
        "hint": "Compute 1−2h and compare y₁ with e^(−0.8). A multiplier between zero and one answers qualitative questions but does not bound the error.",
        "explanation": "The Euler multiplier is 1−2(0.4)=0.2. Thus every positive iterate stays positive and the sequence tends to zero, so positivity and asymptotic stability both hold. But after one step Euler gives 0.2 while the exact value is e^(−0.8)≈0.4493. The qualitative tests say neither how close these numbers are nor what relative error is acceptable. A curve passing through the shared initial value adds no accuracy certificate.",
        "criteria": [
          "I computed the multiplier 0.2.",
          "I separated positivity and decay from numerical accuracy.",
          "I compared 0.2 with e^(−0.8) rather than judging closeness by appearance."
        ]
      },
      "transition": "transform",
      "focus": ["curve-exact_curve", "curve-euler_curve"],
      "scene": [
        "scene \"Stable does not mean accurate\";",
        "domain 0 4;",
        "range -3 3;",
        "param h = 0.4 from 0.05 to 1.2;",
        "fn exact(x) = exp(-2*x);",
        "fn approximation(x) = (1-2*h)^floor(x/h)*(1-2*(x-h*floor(x/h)));",
        "measure euler_multiplier = 1-2*h;",
        "plot exact color blue as exact_curve;",
        "plot approximation color rose as euler_curve;"
      ]
    },
    {
      "title": "Cross the positivity threshold",
      "body": "Set h=0.6, past the sign-preservation threshold. Classify the recurrence from the sign and magnitude of its multiplier before revealing the plotted polygon.",
      "question": "Use the sign and magnitude of 1−2h to explain how a method can be stable while violating positivity.",
      "checkpoint": {
        "hint": "At h=0.6, evaluate 1−2h. Its absolute value controls decay of magnitudes; its sign controls alternation.",
        "explanation": "For h=0.6 the multiplier is −0.2. Since |−0.2|<1, |yₙ|=(0.2)ⁿ|y₀| tends to zero, so the recurrence is asymptotically stable. Because the multiplier is negative, every nonzero step reverses sign. The exact solution e^(−2t) stays positive, so this alternating sign is a numerical artifact. Stability of magnitudes and preservation of positivity are distinct properties.",
        "criteria": [
          "I found the multiplier −0.2.",
          "I used magnitude below one to justify stability.",
          "I used the negative sign to explain artificial alternation.",
          "I did not call stability an accuracy guarantee."
        ]
      },
      "transition": "compare",
      "focus": ["curve-exact_curve", "curve-euler_curve"],
      "scene": [
        "scene \"Stable numerical oscillation\";",
        "domain 0 4;",
        "range -3 3;",
        "param h = 0.6 from 0.05 to 1.2;",
        "fn exact(x) = exp(-2*x);",
        "fn approximation(x) = (1-2*h)^floor(x/h)*(1-2*(x-h*floor(x/h)));",
        "measure euler_multiplier = 1-2*h;",
        "plot exact color blue as exact_curve;",
        "plot approximation color rose as euler_curve;"
      ]
    },
    {
      "title": "Locate the stability boundary",
      "body": "Use h=1 as a boundary probe, then solve the stability and nonnegativity inequalities for every positive step size rather than extrapolating from finitely many iterates.",
      "question": "Solve |1−2h| < 1 and 0 ≤ 1−2h separately. Which interval guarantees stability, and which guarantees preservation of nonnegative states? When are positive states preserved strictly?",
      "checkpoint": {
        "hint": "At the displayed value the multiplier is 1−2. For the general result, keep h>0 while solving the strict absolute-value inequality and the non-strict sign inequality separately.",
        "explanation": "At h=1 the multiplier is −1, so the iterates alternate without shrinking; the boundary is not asymptotically stable. Solving |1−2h|<1 gives −1<1−2h<1, hence 0<h<1. Solving 0≤1−2h with h>0 gives 0<h≤1/2, which preserves nonnegativity. Strictly positive input stays strictly positive only for 0<h<1/2; at equality the next iterate is zero. Thus nonnegativity preservation is stricter than stability. The plotted finite prefix illustrates h=1, while the inequalities prove the full ranges.",
        "criteria": [
          "I recognized multiplier −1 as a non-decaying boundary case.",
          "I solved stability as the strict interval 0<h<1.",
          "I distinguished nonnegativity on 0<h≤1/2 from strict positivity on 0<h<1/2.",
          "I kept the strict and non-strict endpoints distinct."
        ]
      },
      "transition": "indicate",
      "focus": ["curve-euler_curve"],
      "scene": [
        "scene \"The strict stability boundary\";",
        "domain 0 4;",
        "range -3 3;",
        "param h = 1 from 0.05 to 1.2;",
        "fn exact(x) = exp(-2*x);",
        "fn approximation(x) = (1-2*h)^floor(x/h)*(1-2*(x-h*floor(x/h)));",
        "measure euler_multiplier = 1-2*h;",
        "plot exact color blue as exact_curve;",
        "plot approximation color rose as euler_curve;"
      ]
    },
    {
      "title": "Transfer the mechanism to fast decay",
      "body": "Replace the rate 2 by an editable positive rate λ. Derive the restrictions from the dimensionless product λh before testing the displayed fast-decay case. To keep both ordinary and extreme traces legible, this scene plots every ordinate as y/S with one positive scale S reported below; multiply a plotted ordinate by S to recover the raw y-value.",
      "question": "For λ = 10, derive the largest h preserving nonnegativity, the strict-positive range, and the open interval for stability. Test h = 0.12 only after predicting its behavior, and explain why a common linear display scale changes neither recurrence.",
      "checkpoint": {
        "hint": "Euler gives yₙ₊₁=(1−λh)yₙ. Solve 1−λh≥0 and |1−λh|<1, then substitute λ=10 and evaluate the multiplier at h=0.12.",
        "explanation": "Nonnegativity requires 1−λh≥0, so for λ=10 it requires 0<h≤0.1; strict positivity requires 0<h<0.1 because equality sends the next iterate to zero. Asymptotic stability requires |1−λh|<1, so it requires 0<h<0.2. At h=0.12 the multiplier is 1−10(0.12)=−0.2: magnitudes decay, but signs alternate. The step is stable and does not preserve nonnegativity. At these defaults S=1. At extreme controls both exact and Euler ordinates are divided by the same positive S only for display, so signs, zeros, relative vertical comparisons, the raw recurrence, and the fifth-iterate readout are unchanged. Neither threshold asserts that the approximation meets a chosen accuracy tolerance.",
        "criteria": [
          "I distinguished nonnegativity on 0<h≤0.1 from strict positivity on 0<h<0.1.",
          "I derived stability as 0<h<0.2.",
          "I predicted stable alternation from the multiplier −0.2 at h=0.12.",
          "I kept stability, positivity, and accuracy separate."
        ]
      },
      "transition": "camera",
      "focus": ["curve-exact_curve", "curve-euler_curve"],
      "scene": [
        "scene \"Fast decay on the common vertical scale y/S\";",
        "domain 0 1;",
        "range -1.2 1.2;",
        "param lambda = 10 from 5 to 15;",
        "param h = 0.12 from 0.03 to 0.18;",
        "let multiplier = 1-lambda*h;",
        "let trace_steps = floor(1/h)+1;",
        "let raw_growth_bound = abs(multiplier)^trace_steps;",
        "let scale_factor = (1+raw_growth_bound+abs(1-raw_growth_bound))/2;",
        "fn exact_scaled(x) = exp(-lambda*x)/scale_factor;",
        "fn euler_scaled(x) = multiplier^floor(x/h)*(1-lambda*(x-h*floor(x/h)))/scale_factor;",
        "measure euler_multiplier = multiplier;",
        "measure vertical_scale = scale_factor;",
        "measure fifth_iterate = multiplier^5;",
        "plot exact_scaled color blue as exact_curve;",
        "plot euler_scaled color rose as euler_curve;"
      ]
    }
  ]
}
```

For decay \(y'=-\lambda y\), Euler is asymptotically stable precisely when \(|1-\lambda h|<1\), equivalently \(0<\lambda h<2\). Preservation of nonnegative states requires the stricter \(0\le\lambda h\le1\); strictly positive states remain strictly positive only when \(0<\lambda h<1\), because equality sends the next iterate to zero. The recurrence inequalities prove this general classification; the multiplier readout checks the selected controls but a finite numerical trace cannot prove all cases.

The final scene uses a proved, scene-only linear display scale rather than fitting sampled values. Put \(q=1-\lambda h\), \(N=\lfloor1/h\rfloor+1\), and \(S=\max(1,|q|^N)\). On \([0,1]\), each Euler segment lies between consecutive vertices \(q^j\) and \(q^{j+1}\), with \(j+1\le N\), so its raw magnitude is at most \(S\). The exact value satisfies \(0<e^{-\lambda t}\le1\le S\). Thus plotting both curves as \(y/S\) inside \([-1.2,1.2]\) preserves the complete traces, including every legal extreme, while stable defaults retain \(S=1\). The scale readout reports \(S\); the fifth-iterate readout remains the actual raw value \(q^5\). Multiplying a plotted ordinate by \(S\) recovers its raw ordinate. This common positive division is a display scaling, not a changed recurrence or nonlinear transformation. None of the stability conditions supplies an accuracy tolerance.

```exercise
{"id":"calc-r3-ode-stability-choice","type":"choice","prompt":"For Euler applied to \\(y'=-50y\\) with \\(h=0.03\\) and \\(y_0>0\\), which conclusion follows from the recurrence?","options":[{"label":"The iterates stay positive because the exact solution stays positive.","correct":false,"feedback":"Euler has its own recurrence. Its multiplier is negative at this step size, regardless of the exact solution's sign."},{"label":"The iterates decay in magnitude but alternate sign; the method is stable here and does not preserve positivity.","correct":true,"feedback":"Yes. The multiplier is 1−50(0.03)=−0.5: its magnitude is below one but its sign is negative."},{"label":"The iterates grow because the Euler multiplier is negative.","correct":false,"feedback":"A negative multiplier makes signs alternate; growth depends on its magnitude, which is 0.5 here."}],"hints":["Compute 1−λh, then inspect its sign and absolute value separately."]}
```

```exercise
{"id":"calc-r3-ode-uniqueness","type":"written","prompt":"On \\(t\\ge0\\), a student divides \\(y'=2\\sqrt{|y|}\\) by \\(2\\sqrt{|y|}\\) and concludes that \\(y(0)=0\\) has only \\(y=t^2\\). Construct a second solution, explain what division lost, and identify the failed uniqueness hypothesis.","hints":["Try a function that stays zero until time c≥0 and then follows a translated square.","Check differentiability at the joining time; a piecewise formula alone is not enough."],"rubric":["Gives both the zero solution and a delayed nonzero solution with c≥0","Checks the equation and derivative at the join","Identifies division by zero at y=0 as the lost case","Explains lack of local Lipschitz control in y near zero"],"solution":"The zero function satisfies the equation. For any \\(c\\ge0\\), set \\(y(t)=0\\) for \\(0\\le t\\le c\\) and \\(y(t)=(t-c)^2\\) for \\(t\\ge c\\). Both one-sided derivatives at \\(c\\) are \\(0\\). For \\(t>c\\), \\(y'=2(t-c)=2\\sqrt{|y|}\\); before \\(c\\), both sides vanish. These distinct solutions share \\(y(0)=0\\). Dividing by \\(\\sqrt{|y|}\\) at \\(y=0\\) discards waiting solutions. The right side is continuous but not locally Lipschitz in \\(y\\) near zero, so the usual uniqueness condition is absent.","transfer":"Changed case on \\(t\\ge0\\): compare y′=3|y|^{2/3}, y(0)=0. Construct a delayed solution and verify the join; explain why the same division issue remains.","transferSolution":"For \\(c\\ge0\\), set \\(y=0\\) on \\(0\\le t\\le c\\) and \\(y=(t-c)^3\\) on \\(t\\ge c\\). The one-sided derivatives at \\(c\\) are \\(0\\). For \\(t>c\\), \\(y'=3(t-c)^2=3|y|^{2/3}\\); before \\(c\\), both sides vanish. Dividing by \\(|y|^{2/3}\\) at \\(y=0\\) again loses valid solutions; the right side is not locally Lipschitz there."}
```

## Building and checking your own model

For a nonautonomous scalar equation \(y'=F(t,y)\), the two-dimensional autonomous field \((x',y')=(1,F(x,y))\) uses \(x\) as the clock. For example, `field law(x,y) = (1,x-y);` encodes \(y'=t-y\), and `flow law from (0,1) time 4 steps 128 color teal;` integrates it. This is an embedding into time-state space, not the phase plane of two independent physical populations.

Test a simulation against an exact solution when available, an equilibrium, units, and expected signs. Repeat with twice as many steps. Monitor quantities the model should preserve and inspect long-time behavior separately. Fixed-step RK4 has no automatic certified tolerance here. Singularities, rapid transients, cancellation, and floating-point rounding can defeat an attractive plot. Change one modeling assumption or numerical control at a time so the experiment answers a clear question.

## Exercises

1. Verify \(y(t)=3e^{2t}\) solves \(y'=2y,\ y(0)=3\), and state its maximal real interval.
2. Solve \(y'=y^2,\ y(0)=1\). Explain why local existence does not imply existence for every positive time.
3. Find every equilibrium of \(y'=y(y-2)\). Classify each using a phase line.
4. For logistic growth with \(K=600,\ P_0=200,\ r=0.3\), find the time to \(P=400\).
5. Apply two Euler steps with \(h=0.1\) to \(y'=t+y,\ y(0)=1\). Show the slopes used.
6. Determine the Euler stability and positivity step ranges for \(y'=-50y\) with positive initial data. Is \(h=0.03\) stable? Is it positivity preserving?
7. On \(t\ge0\), show that \(y'=2\sqrt{|y|},\ y(0)=0\) has both the zero solution and a solution that remains zero until any chosen \(c\ge0\) and then grows. Which uniqueness hypothesis fails?
8. A numerical trajectory differs at \(t=2\) by \(0.0016\) when RK4 steps are halved. Assuming the leading global error is \(Ch^4\), estimate the finer error. State why the estimate is not a proof.

<details><summary>Hints</summary>

1. Differentiate and substitute. 2. Separate before the denominator vanishes. 3. Check the three intervals separated by 0 and 2. 4. Solve the logistic denominator equation. 5. Recompute both time and state. 6. Use the one-step multiplier. 7. Try (t−c)² after time c and check the joining derivative. 8. Compare Ch⁴ with C(h/2)⁴.

</details>

<details><summary>Full solutions</summary>

1. The derivative is \(6e^{2t}=2y\) and \(y(0)=3\). The function satisfies the equation for every real \(t\), so its maximal real interval is \((-\infty,\infty)\).
2. Integration gives \(-1/y=t+C\); the initial value gives \(C=-1\). Thus \(y=1/(1-t)\) on \((-\infty,1)\). It diverges as \(t\to1^-\) and cannot continue through \(t=1\) as a finite classical solution.
3. Equilibria are \(0\) and \(2\). The right side is positive below \(0\), negative between \(0\) and \(2\), and positive above \(2\). Nearby motion points toward \(0\) from both sides and away from \(2\): \(0\) is attracting and \(2\) repelling.
4. \(P(t)=600/(1+2e^{-0.3t})\). Setting \(P=400\) gives \(2e^{-0.3t}=1/2\), hence \(t=\ln(4)/0.3\approx4.62\) time units.
5. Initially the slope is \(0+1=1\), so \(y_1=1.1\) at \(t_1=0.1\). The next slope is \(0.1+1.1=1.2\), so \(y_2=1.22\) at \(t_2=0.2\).
6. Stability requires \(0<h<2/50=0.04\). Nonnegative iterates require \(0<h\le1/50=0.02\). At \(h=0.03\), the multiplier is \(-0.5\), so the sequence decays in magnitude but alternates sign. It is stable but violates positivity.
7. On \(t\ge0\), define \(y=0\) for \(t\le c\) and \(y=(t-c)^2\) for \(t\ge c\), where \(c\ge0\). At \(c\) the one-sided derivatives are both zero. Afterwards \(y'=2(t-c)=2\sqrt{|y|}\), and before \(c\) both sides vanish. These distinct solutions share \(y(0)=0\). The right side is continuous but not locally Lipschitz in \(y\) at zero.
8. The coarse leading error is sixteen times the finer one, so their difference has magnitude fifteen times the finer error. The estimate is \(0.0016/15\approx0.0001067\). Higher-order effects, insufficient resolution, or instability can invalidate the assumed \(h^4\) model; this gives no certified bound.

</details>

## Further study

Compare initial-value modeling with [MIT 18.01SC, introduction to differential equations](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/resources/mit18_01scf10_ses39a/) and [OpenStax Calculus Volume 2, Chapter 4](https://openstax.org/books/calculus-volume-2/pages/4-introduction). [MIT 18.03SC numerical methods](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/unit-i-first-order-differential-equations/numerical-methods/) provides a route to a dedicated differential-equations course. The computational experiments here extend the introductory material.
