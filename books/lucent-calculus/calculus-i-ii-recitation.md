# Recitation B. The fastest route is a theorem and a model

**Place in the route:** after the Mean Value Theorem, global optimization, related rates, and the FTC; revisit when studying numerical integration. Bring a sketch and units. The answer is less valuable than the chain of decisions that makes it defensible.

## A rescue route with two speeds

A rescuer starts at a point on a straight road. A person is 4 km away from the road and 10 km farther along it than the rescuer's starting position. The rescuer can run at 5 km/h along the road and cross the open field at 3 km/h. Assume straight-line travel in each region, constant speeds, negligible turning time, and that leaving the road occurs between the start and the point closest to the person. Where should the rescuer leave the road to arrive as quickly as possible?

Let \(s\in[0,10]\) be kilometres run on the road before turning. Then the field segment has horizontal component \(10-s\) km and perpendicular component 4 km. Distance in the field is \(\sqrt{(10-s)^2+16}\) km. Divide each distance by its own speed:

\[
T(s)=\frac{s}{5}+\frac{\sqrt{(10-s)^2+16}}{3}\quad\text{hours}.
\]

**Pause and predict.** Is leaving immediately best because the direct route is shorter, or is running all the way to the closest road point best because the road is faster? Estimate one intermediate choice before calculating. The shortest *distance* and shortest *time* are different objectives.

Differentiating on \((0,10)\) gives

\[
T'(s)=\frac15-\frac{10-s}{3\sqrt{(10-s)^2+16}},
\qquad
T''(s)=\frac{16}{3((10-s)^2+16)^{3/2}}>0.
\]

The second derivative proves strict convexity, so an interior zero of \(T'\) is the unique interior minimum candidate and the derivative increases through it. Solve the first-derivative equation without losing the sign condition \(10-s\ge0\): writing \(u=10-s\), \(3\sqrt{u^2+16}=5u\) gives \(9u^2+144=25u^2\), so \(u=3\) and \(s=7\). Substitution into the *unsquared* equation confirms the root. The candidate is feasible.

At \(s=7\), \(T=7/5+5/3=46/15\) h. At the endpoints, \(T(0)=\sqrt{116}/3\) h and \(T(10)=2+4/3=10/3\) h. Strict convexity plus the derivative sign establishes a unique global minimum at \(s=7\); the endpoint values provide a useful independent check. Running to the point directly opposite the person is slower despite the fast road, because the final 4 km still takes time. Leaving immediately spends too long in the slow field.

```mathviz
scene "Road distance versus total arrival time";
domain 0 10;
range 2.5 7;
param s = 7 from 0 to 10;
param h = 4 from 1 to 8;
fn travel(x) = x/5+sqrt((10-x)^2+h^2)/3;
plot travel color blue;
tangent travel at s;
```

**Explore:** hold \(h=4\) and compare \(s=0,7,10\). Then increase \(h\) and predict the new minimiser before moving \(s\). The graph shows a time function, not the road and field geometry itself. Use a sketch on paper for the route. **Explain:** the slope is the marginal change in arrival time from moving the turn-off point, and the formula for \(T''\) proves the single-bowl shape. **Transfer:** double both speeds; explain what changes in the minimising \(s\) and in the minimum time.

The same question can be made into a reusable calculation in the notebook. The parameters are constrained so road speed remains greater than field speed. Change a control, rerun the whole program, and compare the sampled table with the derivative argument. The table's lowest row need not be the true minimiser because the optimum can lie between samples.

```notebook
param road = 5 from 4 to 8;
param field = 3 from 1 to 3;
param h = 4 from 1 to 8;
let d = 10;
fn arrival(x) = x/road+sqrt((d-x)^2+h^2)/field;
table arrival from 0 to d count 11;
plot arrival from 0 to d;
```

**Language challenge:** replace the eleven-row table by 21 rows. Record when the apparent best row changes, then use \(T'\) to locate the true optimum. This distinguishes a computational search grid from a theorem about the continuous feasible interval.

## General case: a boundary decision

With road speed \(v_r>v_g>0\), perpendicular distance \(h>0\), and road-offset \(d>0\), the same reasoning gives

\[
T(s)=\frac{s}{v_r}+\frac{\sqrt{(d-s)^2+h^2}}{v_g},\quad 0\le s\le d.
\]

The interior stationary condition is \((d-s)/\sqrt{(d-s)^2+h^2}=v_g/v_r\). The left side cannot exceed one; the speed inequality makes an interior solution possible in principle. Solving gives the candidate

\[
s_0=d-\frac{h v_g}{\sqrt{v_r^2-v_g^2}}.
\]

Because \(T''(s)=h^2/[v_g((d-s)^2+h^2)^{3/2}]>0\), the constrained minimiser is \(s_*=\max\{0,s_0\}\). If \(s_0<0\), the derivative is already positive at the left endpoint and the best feasible choice is to leave immediately. If \(s_0=0\), the endpoint is the stationary point. This is why “solve \(T'=0\)” is not a complete optimization method.

```exercise
{"id":"calc-rescue-boundary","type":"written","prompt":"Keep road speed \\(5\\) km/h, field speed \\(3\\) km/h, and road offset \\(10\\) km. If perpendicular distance becomes \\(16\\) km, locate the fastest feasible turn-off and justify the boundary decision.","hints":["The unconstrained formula has h*3/sqrt(25-9) = 3h/4.","For h=16, the stationary formula produces a negative road distance."],"rubric":["Uses a time objective with speed and distance units","Computes unconstrained s0=10-12=-2 km","Recognises s cannot be negative","Uses positive second derivative or derivative sign to justify s=0 globally"],"solution":"For \\(0\\le s\\le10\\), \\(T(s)=s/5+\\sqrt{(10-s)^2+16^2}/3\\). Its derivative increases because \\(T\\prime\\prime(s)=16^2/[3((10-s)^2+16^2)^{3/2}]>0\\). The formal stationary input is \\(s_0=10-16\\cdot3/\\sqrt{25-9}=-2\\) km, outside the feasible domain. Therefore \\(T\\prime>0\\) throughout \\([0,10]\\) and the global minimum is at \\(s=0\\): leave immediately."}
```

## Accumulated time and sensitivity

The road leg is simple here because speed is constant. If road speed varies with position \(r(x)>0\), time for a small road distance \(dx\) is approximately \(dx/r(x)\), so the model becomes \(T(s)=\int_0^s1/r(x)\,dx+\sqrt{(d-s)^2+h^2}/v_g\). The FTC gives derivative \(1/r(s)\) for the first term when \(r\) is continuous and positive. The stationary condition now compares the current reciprocal road speed with the marginal field-time saving. A travel-time integral is built from a physical contribution; it is not obtained by integrating distance itself.

As a concrete check, let \(r(x)=5+x/10\) km/h for \(0\le x\le10\). The road time is \(\int_0^s dx/(5+x/10)=10\ln(1+s/50)\) hours, where the factor 10 has the appropriate units under the numerical-kilometre convention. Differentiate to recover \(1/(5+s/10)\). A midpoint quadrature may estimate the road leg, but a certified error needs a bound on the second derivative of its integrand; a visually stable decimal alone does not supply that guarantee.

**Change the problem one day later:** Suppose running in the field is faster than running on the road, \(v_g>v_r\). Check the sign of \(T'\) over the feasible interval instead of inserting speeds into the earlier square-root formula, whose denominator would no longer be real. Show that leaving immediately is optimal. This new case tests whether the reasoning survived beyond the algebraic template.
