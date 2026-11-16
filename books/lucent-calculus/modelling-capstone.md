# Modelling capstone: build, test, explain

**Prerequisites:** derivatives, definite integrals, [differential equations](differential-equations.md), and [error budgets](approximation-error.md). **Outcomes:** turn a verbal question into a transparent mathematical model; connect an exact solution to a simulation; interpret parameters and units; test predictions against limiting cases; communicate what a visual experiment can and cannot establish.

A model is a deliberately limited account of a situation. Its quality depends on the question it answers. We will study a falling object with resistance proportional to velocity. This is a useful mathematical idealization in suitable regimes, but it is not a universal law for falling objects. The purpose is to practise the entire chain from an assumption to a calculation, a visual experiment, and a statement of uncertainty.

## The modelling brief

A sensor is released from rest. We want to predict its downward speed and distance after a specified time, determine when it reaches a fraction of its terminal speed, and compare the prediction with a numerical simulation. Take downward as the positive direction. Let m>0 be mass in kilograms, g>0 gravitational acceleration in metres per second squared, and b>0 a linear resistance coefficient in kilograms per second. Assume constant m, g, and b, and ignore buoyancy, wind, rotation, and changes in the surrounding fluid.

Newton's second law becomes m v′=mg−bv, with v(0)=0. The minus sign is a modeling decision: for positive downward velocity, resistance points upward. The equation also predicts a downward resisting force for an object moving upward, which is consistent with resistance opposing motion. Every term in the force equation has units kg·m/s². Dividing by mass gives v′=g−(b/m)v, whose terms have acceleration units.

Define the time scale τ=m/b and terminal speed V=gτ. The equation is v′=(V−v)/τ. The equilibrium v=V is stable: below V, acceleration is positive; above V, acceleration is negative. This sign argument predicts the broad behavior before we solve anything.

## Worked model: solve, integrate, and interpret

For v≠V, separation gives dv/(V−v)=dt/τ. Integrating yields −ln|V−v|=t/τ+C. Applying the initial condition and rearranging gives

v(t)=V(1−exp(−t/τ)), for t≥0.

We should verify the result even after a successful derivation. Its derivative is (V/τ)exp(−t/τ), and (V−v)/τ is the same expression. At zero the velocity is zero. As t→∞, velocity approaches V from below; it never reaches V at finite time. Division by V−v during separation temporarily excludes the equilibrium solution, so a complete treatment also records v(t)=V when v(0)=V.

Let s(0)=0 and s′=v. Integrating from zero to t gives

s(t)=V[t−τ(1−exp(−t/τ))].

With τ=2 s, V=20 m/s, and t=4 s, velocity is 20(1−exp(−2))≈17.293 m/s, while distance is 20[4−2(1−exp(−2))]≈45.413 m. Distance divided by elapsed time gives average speed. For this strictly increasing downward speed, the average is smaller than the current speed. The time-average velocity here is about 11.353 m/s, lower than the final speed.

To reach 90% of terminal speed, solve 0.9=1−exp(−t/τ). Thus t=τ ln 10, approximately 4.605 s when τ=2 s. If mass increases while b is fixed, both τ and V increase. If V is held fixed while τ changes in a mathematical comparison, g=V/τ changes too. A slider experiment must state which physical parameters are being held constant.

## Visual laboratory 1: the same shape on different scales

**Predict:** for fixed V, does increasing τ raise or lower speed at a specified positive time? Which quantity stays unchanged?

```mathviz
scene "A falling body's speed and terminal limit";
domain 0 12;
range 0 45;
param terminal = 20 from 5 to 40;
param tau = 2 from 0.5 to 5;
param t = 4 from 0 to 12;
fn speed(x) = terminal*(1-exp(-x/tau));
fn terminal_line(x) = terminal;
plot speed color blue;
plot terminal_line color amber;
point observed = (t,terminal*(1-exp(-t/tau))) color rose;
```

**Explore:** compare τ=1,2,4 while terminal remains 20. Record the value at t=τ by setting t manually. **Explain:** every curve reaches the same fraction 1−exp(−1)≈0.6321 of terminal speed at one time constant. **Transfer:** change the initial speed to v₀=30 by editing the formula to V+(v₀−V)exp(−x/τ). Predict which initial speeds produce upward or downward curves before running them. The function tends to V from either side.

Introduce dimensionless variables u=v/V and z=t/τ. Then du/dz=1−u, u(0)=0, and u=1−exp(−z). All positive parameter choices reduce to the same dimensionless graph. This is a stronger explanation than noticing that several plotted curves “look similar”: it identifies exactly how to rescale them.

## A simulation as an independently checkable calculation

The engine integrates autonomous two-component fields. To simulate the dimensionless equation while displaying time horizontally, add the state z with dz/ds=1 and du/ds=1−u. The evolution parameter s equals z when z(0)=0. A field in the (z,u) plane then has components (1,1−u). This embedding is useful whenever a first-order equation depends on an explicitly tracked time coordinate.

## Visual laboratory 2: compare a numerical trajectory with a formula

**Predict:** the trajectory beginning at (0,0) should approach which horizontal line? Can it overshoot in the exact mathematical model?

```mathviz
scene "A simulated relaxation beside its exact solution";
domain 0 8;
range -0.2 1.4;
param t = 4 from 0 to 8;
param n = 100 from 10 to 300;
animate t from 0 to 8 duration 10;
field relaxation(x,y) = (1,1-y);
flow relaxation from (0,0) time t steps floor(n) color rose;
fn exact(x) = 1-exp(-x);
fn terminal(x) = 1;
plot exact color teal;
plot terminal color amber;
```

**Explore:** pause animation and compare n=10,50,200 at the same final time. The flow uses a fourth-order Runge–Kutta method with fixed steps. **Explain:** agreement is evidence about this particular computation. It does not prove a universal error bound, and overlap at screen resolution does not mean equality. **Transfer:** change the field's second component to 1−y² and remove or replace the old exact curve. Explain why the old formula is no longer a valid reference. For an initial value y=0, the new exact solution is tanh(z), which can be expressed with exponentials if desired; it is not a built-in function in this language.

## Cross-checks that reveal different kinds of mistakes

First check units: the exponent t/τ must be dimensionless. Next check initial conditions and limits. For small t/τ, expand exp(−t/τ)=1−t/τ+t²/(2τ²)−⋯. Then v(t)=gt−gt²/(2τ)+⋯ and s(t)=gt²/2−gt³/(6τ)+⋯. The earliest motion agrees with constant gravitational acceleration, because resistance is initially zero. At large t, s(t)≈V(t−τ), consistent with nearly constant terminal speed.

Finally consider the limit b→0 with m and g fixed. Here τ→∞ and V=gτ→∞, so substituting “infinite terminal speed” into a graph is not meaningful. Instead use the expansion V(1−exp(−t/τ))=gτ[t/τ+O(τ⁻²)]→gt for fixed t. The resulting distance tends to gt²/2. Keeping related parameters linked is essential when taking a physical limit.

## A competing resistance law with the same endpoints

The linear-resistance assumption is testable. For downward motion with \(v\ge0\), another plausible model is \(mv'=mg-cv^2\), where \(c>0\) has units kg/m. Define \(V=\sqrt{mg/c}\) and \(\tau=V/g\). These definitions give \(v'=(V/\tau)[1-(v/V)^2]\). With \(u=v/V\) and \(z=t/\tau\), the initial-value problem becomes

\[
\frac{du}{dz}=1-u^2,\qquad u(0)=0.
\]

Separation on \(0\le u<1\) gives \(\tfrac12\ln[(1+u)/(1-u)]=z\), hence \(u=(e^{2z}-1)/(e^{2z}+1)=\tanh z\). The initial condition and the equation can be checked by differentiating this quotient. Integrating speed gives \(s(t)=V\tau\ln(\cosh(t/\tau))\), where \(\cosh z=(e^z+e^{-z})/2\). Both this model and the earlier linear model start with acceleration \(g\) and approach terminal speed \(V\) if we match their \(V\) and \(\tau\). They disagree at intermediate times.

At \(z=\ln2\), the linear model has \(u=1/2\), while the quadratic model has \(u=(4-1)/(4+1)=3/5\). More generally put \(q=e^{-z}\), so \(0<q<1\) for \(z>0\). Their difference is

\[
\tanh z-(1-e^{-z})=\frac{q(1-q)^2}{1+q^2}>0.
\]

The quadratic model predicts greater speed for every positive matched dimensionless time, despite sharing the initial slope and final speed. This is a useful warning against validating a model with only two endpoint checks. A measured midcourse speed, with a stated uncertainty interval, could distinguish them if that interval excludes one prediction. It would not, by itself, prove either resistance law universal.

```mathviz
scene "Two resistance laws with a common start and limit";
domain 0 3;
range 0 1.2;
param z = 0.7 from 0 to 3;
fn linear(x) = 1-exp(-x);
fn quadratic(x) = (exp(2*x)-1)/(exp(2*x)+1);
fn terminal(x) = 1;
plot linear color blue;
plot quadratic color teal;
plot terminal color amber;
point linear_observation = (z,linear(z)) color rose;
point quadratic_observation = (z,quadratic(z)) color violet;
```

**Predict.** Can two curves with the same initial slope and terminal limit still be separated at z=ln 2? **Explore.** Move z and compare the two marked speeds. **Explain.** Use the factorized positive difference above to prove what the plot suggests. **Transfer.** Change the initial speed to a positive fraction of V. Derive both new dimensionless solutions before editing the scene. Say which parameters a real experiment would have to measure independently and where your models cease to apply.

```exercise
{"id":"calc-model-competing-drag","type":"written","prompt":"At dimensionless time z=ln 2, an experiment measures u=0.60 with a guaranteed uncertainty of ±0.02. Compare the matched linear and quadratic resistance models. Which prediction is excluded by this observation, and what further evidence would you seek before choosing a law?","hints":["Linear u=1−e^(−z); quadratic u=(e^(2z)−1)/(e^(2z)+1).","The measured interval is [0.58,0.62]; distinguish rejection of one prediction from proof of a whole model."],"rubric":["Computes linear prediction 0.50","Computes quadratic prediction 0.60","Uses the uncertainty interval to exclude the linear prediction only","Proposes further time points or independent parameter checks and states the limits of the inference"],"solution":"At z=ln 2, e^(−z)=1/2 and e^(2z)=4. The linear model predicts 0.50; the quadratic model predicts (4−1)/(4+1)=0.60. The certified observation interval [0.58,0.62] excludes 0.50 and includes 0.60, so it rejects this matched linear prediction but does not establish the quadratic law for all speeds and settings. Measure additional times and accelerations, check the V and τ calibration independently, and test whether c remains stable under changed conditions."}
```

## Your investigation and deliverable

Produce a short written report and two saved scene sources. Begin with a question that can be answered, such as “How long does it take to travel 30 metres under this model?” State assumptions and units; derive the governing equation; solve what can be solved; use a numerical method for an equation without a convenient explicit solution. Include at least three parameter choices, a table of predictions, one limiting-case check, and one limitation that would matter in an experiment. Record which sliders represent independent physical inputs.

For the 30-metre question with τ=2 and V=20, solve F(t)=20[t−2(1−exp(−t/2))]−30=0. F is continuous, F(0)<0, and F grows without bound. For t>0, F′(t)=v(t)>0, so the positive root exists and is unique. Bisection on [3,4] works because F(3)<0 and F(4)>0. Newton's method is also possible starting away from zero; starting at zero fails because F′(0)=0. A report should explain that choice, not merely print a root from software.

## Practice and oral-defence questions

1. Derive v(t) for arbitrary initial velocity v₀. Verify the formula and classify monotonicity relative to V.
2. Find the time to reach 95% of terminal speed from rest. Compare with the 90% time without choosing units.
3. Derive the distance formula for general v₀ and s(0)=s₀.
4. For τ=2 and V=20, show that the time to fall 30 m lies between 3 and 4 seconds. How many bisections of that interval guarantee a midpoint error at most 0.001 s?
5. Compute two forward Euler steps with step size h=0.5 for u′=1−u, u(0)=0. Compare with the exact value at z=1.
6. Show that Euler's values approach 1 monotonically from below when 0<h≤1. What happens for 1<h<2? What fails when h>2?
7. Explain why doubling mass at fixed b and g does not double speed at every fixed time. Compare the small-time and long-time regimes.
8. Design one observation capable of challenging the linear-resistance assumption. Distinguish a parameter-fitting error from a model-structure error.

<details><summary>Hints: connect every claim to an equation</summary>

1. Apply separation to V−v or verify an exponential candidate. 2. Solve exp(−t/τ)=0.05. 3. Integrate from zero rather than adding an unexplained constant. 4. Use ln or exponentials only for arithmetic; the interval-width guarantee is independent of derivative estimates. 5. Euler adds h times the current slope. 6. Set eₙ=1−uₙ and find its recurrence. 7. Both V and τ change with mass. 8. A fitted constant can shift a curve; a systematically wrong relationship between acceleration and velocity may require a different equation.

</details>

<details><summary>Full solutions</summary>

1. v(t)=V+(v₀−V)exp(−t/τ). Its derivative is −(v₀−V)exp(−t/τ)/τ, equal to (V−v)/τ. It starts at v₀, increases when v₀<V, decreases when v₀>V, and is constant when v₀=V.
2. t₉₅=τ ln20. Its ratio to t₉₀ is ln20/ln10≈1.3010, independently of τ. The extra time is τ ln2; another five percentage points near equilibrium take substantial time because acceleration has decreased.
3. s(t)=s₀+Vt+(v₀−V)τ(1−exp(−t/τ)). Differentiating verifies v, and substitution at zero verifies s₀.
4. s(3)=20[1+2exp(−1.5)]≈28.925 m and s(4)≈45.413 m. Continuity and strict increase give one root between them. After k bisections the retained interval has width 2⁻ᵏ seconds; its midpoint error is at most 2⁻ᵏ⁻¹. Thus k=9 suffices because 1/1024<0.001; k=8 does not meet the guarantee.
5. u₁=0+0.5(1−0)=0.5; u₂=0.5+0.5(1−0.5)=0.75. Exact u(1)=1−exp(−1)≈0.63212, so Euler overestimates by about 0.11788. The step size is large enough that the error is visible.
6. uₙ₊₁=(1−h)uₙ+h, so eₙ₊₁=(1−h)eₙ and eₙ=(1−h)ⁿ. For 0<h≤1, errors are nonnegative and nonincreasing, giving monotone approach (h=1 reaches equilibrium in one numerical step). For 1<h<2, signs alternate while magnitudes decrease. For h>2, |1−h|>1 and errors grow. At h=2 they oscillate without decay. Numerical behavior can contradict the smooth model when a step is unsuitable.
7. Doubling m doubles both τ and V. At fixed t the speed becomes 2V[1−exp(−t/(2τ))], which is not twice V[1−exp(−t/τ)]. For small t both are approximately gt, independent of mass. At long times the terminal speeds have ratio two.
8. Measure velocity and acceleration across a range of speeds under consistent conditions. The model predicts acceleration g−(b/m)v, a straight-line relation. Random scatter or a shifted slope may be compatible with measurement noise or a different b; systematic curvature suggests a nonlinear resistance law. This observation needs sufficiently accurate acceleration estimates, since numerical differentiation amplifies measurement noise.

</details>

**Assessment rubric:** question and assumptions 15%; correct derivation and units 25%; reproducible editable scenes 15%; error analysis and independent checks 20%; explanation of observations and limitations 15%; clear report and complete source 10%. Visual decoration carries no separate marks. The report succeeds when another learner can reproduce the computation and understand which claims follow from mathematics and which depend on assumptions.

For the next step, study stability through further differential-equation models, or strengthen the limit arguments in [real analysis](../lucent-analysis/course-guide.md). The differential-equation foundation is covered in [OpenStax Calculus Volume 2](https://openstax.org/details/books/calculus-volume-2); this capstone and its assessment are original.
