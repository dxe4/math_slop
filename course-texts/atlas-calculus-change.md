
# Calculus as Change and Accumulation — Overview

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-calculus-change) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Calculus answers two reciprocal questions:

- Given a quantity, how fast is it changing now?
- Given its rate of change, how much change has accumulated?

The derivative and integral are not isolated tricks. They are limiting answers to these questions, and the fundamental theorem explains why the answers undo each other.

**Eight-hour route.** Treat each module as one 90-minute meeting: 30 minutes to read and reconstruct an example, 40 minutes on its check and matching workshop below, and 20 minutes to explain the result and correct errors. Reserve two further hours for the drag-model capstone and cumulative assessment. Before Module 1, use [Function Machines Before Formulas](../articles/functions-before-formulas.md) if function notation is shaky. The [epsilon–delta guide](../articles/epsilon-delta-limits.md) gives a rigorous repair for limits; the [calculus geometry lab](../apps/atlas/index.html#/labs?lab=visual-lab-calculus-geometry) lets you compare secants and tangents. [Proof-Safe Real Analysis](#/books/proof-safe-real-analysis) is a later proof-led route, not a prerequisite for this first pass.

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Limits and local change | 1–2 | [Continuity and differentiation](../books/proof-safe-real-analysis/continuity-differentiation.md) as a proof extension | Limit estimate and local-linearization error statement |
| 2. Accumulation | 3 | [Riemann integration](../books/proof-safe-real-analysis/riemann-integration.md) | Riemann-sum table with units and a substitution derivation |
| 3. Reciprocity | 4 | [Fundamental theorem and boundaries](../books/proof-safe-real-analysis/fundamental-theorem-and-absolute-continuity.md) | Fundamental-theorem explanation and one hypothesis failure |
| 4. Synthesis | Workshops, assessment, capstone | [Counterexample atlas](../books/proof-safe-real-analysis/counterexample-atlas-and-capstones.md) | Drag-model report with analytic and numerical checks |

## Module 1 — Approximation and limits

### Secant lines become tangents

For a function $f$, the average rate from $x$ to $x+h$ is

$[f(x+h)-f(x)]/h$.

This is a secant slope. To obtain instantaneous change at $x$, let nonzero $h$ approach zero. If the quotient approaches one value, define

$f'(x) = \lim_{h\to 0} [f(x+h)-f(x)]/h$.

For $f(x)=x^{2}$, the quotient is

$[(x+h)^{2}-x^{2}]/h = 2x+h$,

so the limit is $2x$. We cancel $h$ while it is nonzero; the limit then lets it approach zero.

### A limit is a guarantee

Saying $f(x)\to L$ as $x\to a$ means outputs can be forced as close to $L$ as desired by taking inputs sufficiently close—but not necessarily equal—to $a$. The value $f(a)$ may disagree or be undefined.

Example: $(x^{2}-1)/(x-1)$ is undefined at 1, but for $x\ne 1$ it equals $x+1$, so its limit at 1 is 2. A removable hole changes a point value, not nearby behavior.

### Continuity

$f$ is continuous at $a$ when three facts agree:

1. $f(a)$ exists;
2. $\lim_{x\to a} f(x)$ exists;
3. that limit equals $f(a)$.

Continuity lets limits pass through the function. It is also the hypothesis behind the intermediate value theorem: a continuous graph moving from below a height to above it must reach that height.

### Check your understanding

1. Why can a function have a limit at a point where it is undefined?
2. Calculate the limit of $(x^{2}-4)/(x-2)$ as $x\to 2$.
3. A graph jumps at $x=3$. Which continuity condition fails?

Answers: (1) limits inspect nearby inputs; (2) factor to $x+2$, yielding 4; (3) the two-sided limit does not exist, even if a point value is assigned.

## Module 2 — Derivatives as local models

### The local linearization

If $f$ is differentiable at $a$, then near $a$,

$f(a+h) \approx f(a) + f'(a)h$.

The derivative is the coefficient of the best first-order approximation. This interpretation unifies slope, velocity, marginal cost, sensitivity, and error propagation.

Example: estimate $\sqrt{4.1}$. Let $f(x)=\sqrt{x}$ near $a=4$. Since $f(4)=2$ and $f'(4)=1/4$,

$\sqrt{4.1} \approx 2 + (1/4)(0.1) = 2.025$.

The actual value is about 2.02485.

### Rules come from local composition

If $u$ changes by approximately $u'(x)h$, and $f$ changes by approximately $f'(u)$ times its input change, then

$d/dx f(u(x)) = f'(u(x))u'(x)$.

This chain rule is unit conversion for local rates. If volume depends on radius and radius depends on time, then volume change per time equals volume change per radius times radius change per time.

### Optimization is sign analysis

At an interior differentiable local extremum, $f'(x)=0$, but a zero derivative is only a candidate. Classify it using sign changes, convexity, or direct comparison.

**Example.** A rectangle with perimeter 20 has sides $x$ and $10-x$; area is

$A(x)=x(10-x)=10x-x^{2}$, for $0\le x\le 10$.

$A'(x)=10-2x$, so the candidate is $x=5$. The derivative is positive before 5 and negative after, and endpoints have area zero, so the square gives the global maximum area 25.

The domain constraint is part of the model; ignoring endpoints can lose the true optimum.

### Rates with units

If distance is kilometers and time is hours, velocity has km/hour. If $C(q)$ is dollars to produce $q$ items, $C'(q)$ is dollars per item. Units often reveal a chain-rule omission or an implausible equation.

### Check your understanding

1. Linearize $1/x$ near $x=2$ and estimate $1/2.1$.
2. If $A=\pi r^{2}$ and $dr/dt=0.3 cm/s$ at $r=5 cm$, find $dA/dt$ with units.
3. Give a function where $f'(0)=0$ but 0 is neither a maximum nor a minimum.

Answers: (1) $1/2-(1/4)(0.1)=0.475$; (2) $2\pi r dr/dt=3\pi cm^{2}/s$; (3) $f(x)=x^{3}$.

## Module 3 — Integrals as accumulation

### From finite sums to total change

Suppose a rate $v(t)$ varies. Divide a time interval into pieces of width $\Delta t$. On a short piece, change is approximately $v(t_{i})\Delta t$. Summing gives

$\sum v(t_{i})\Delta t$.

As the largest piece width approaches zero, if these sums approach a stable value, that limit is the definite integral.

$\int_{a}^{b} v(t) dt$ is signed accumulation, not automatically geometric area. Negative rate contributes negative change.

### Units and averages

Rate times input-width gives output units. Integrating liters/minute over minutes gives liters. The average value of $f$ on $[a,b]$ is

$f_{\mathrm{avg}} = (1/(b-a)) \int_{a}^{b} f(x) dx$.

It is the constant height with the same signed accumulation.

### Substitution reverses the chain rule

Because the derivative of $F(g(x))$ is $F'(g(x))g'(x)$, an integral containing an inner function and its derivative can be rewritten.

Example:

$\int 2x \cos(x^{2}) dx$.

Set $u=x^{2}$, so $du=2x dx$. Then the integral is $\int \cos(u)du=\sin(u)+C=\sin(x^{2})+C$.

Always transform bounds too in a definite integral, or transform back before evaluation.

### Integration by parts

Reverse the product rule:

$\int u dv = uv - \int v du$.

Choose $u$ to become simpler when differentiated and $dv$ to integrate cleanly. For example,

$\int x e^x dx = xe^x - \int e^x dx = e^x(x-1)+C$.

### Check your understanding

1. If acceleration is m/s², what are the units of its time integral?
2. Evaluate $\int_{0}^{1} 3x^{2} dx$ as total accumulation and average value.
3. Evaluate $\int x/(1+x^{2}) dx$.

Answers: (1) m/s, change in velocity; (2) total 1 and average 1; (3) $(1/2)\ln(1+x^{2})+C$.

## Module 4 — Why differentiation and integration undo each other

Define an accumulation function

$A(x)=\int_{a}^{x} f(t)dt$.

Increase $x$ by a small $h$. The added accumulation is

$A(x+h)-A(x)=\int_{x}^{x+h} f(t)dt$.

If $f$ is continuous, on a tiny interval it is nearly constant at $f(x)$, so the added amount is approximately $f(x)h$. Dividing by $h$ and shrinking the interval gives

$A'(x)=f(x)$.

This is the first fundamental theorem. Accumulating a rate creates a function whose derivative is that rate.

If $F'=f$, then the net change in $F$ is

$\int_{a}^{b} f(x)dx = F(b)-F(a)$.

This is the evaluation form. It turns a limit of sums into endpoint subtraction because antiderivatives already encode accumulation.

### Moving boundaries

If

$H(x)=\int_{u(x)}^{v(x)} f(t)dt$,

then

$H'(x)=f(v(x))v'(x)-f(u(x))u'(x)$.

The upper edge adds material; the lower edge removes it. The chain rule scales how fast each boundary moves.

### Differential equations

A differential equation specifies a rate and asks for the accumulated state. If $y'=ky$, then separating and integrating suggests $y=Ce^{kt}$. The constant is determined by an initial condition. Exponential growth is not assumed arbitrarily; it follows from change proportional to current amount.

For $y'=r(1-y/K)y$, growth is approximately exponential when $y$ is small, slows near carrying capacity $K$, and has equilibria at $0$ and $K$. Exact formulas are less important than the sign and scale of the rate.

### Capstone: a falling object with drag

Construct a model for downward velocity $v(t)$ under gravity and linear drag:

$m v' = mg-cv$, with $v(0)=0$.

Tasks:

1. Check every term has force units.
2. Find the equilibrium velocity and explain its stability.
3. Solve for $v(t)$ or verify that $v(t)=(mg/c)(1-e^{-ct/m})$ satisfies the equation.
4. Integrate velocity to obtain distance fallen.
5. Identify where the model becomes inadequate.

Key result: terminal velocity is $mg/c$; deviations from it decay like $e^{-ct/m}$. Model limitations include drag not remaining linear at high speed, variation of air density, and treating gravity as constant.

## Practice protocol

Complete `calculus-change-accumulation` in the solved bank. For each problem, write three lines after solving:

1. the quantity and its units;
2. the mathematical operation and why it fits;
3. a reason the answer is plausible.

## Four workshops that turn the outline into practice

The four modules above introduce the ideas. Spend about one hour on each workshop below before consulting its solution. Keep a page of failed attempts: a wrong expression with a diagnosed reason teaches more than a copied final answer.

### Workshop A — A limit need not be a derivative

For $f(x)=|x|$ at zero, the difference quotient is $|h|/h$. It equals 1 for positive $h$ and $-1$ for negative $h$. Both one-sided limits exist, but they differ, so $f'(0)$ does not exist. The graph has a corner, yet $f$ is continuous at zero because $|x|\to0$ as $x\to0$. Continuity is therefore necessary for differentiability, but not sufficient.

Try the same test for $g(x)=x|x|$. For $h>0$, $g(h)/h=h$; for $h<0$, $g(h)/h=-h$. Both approach zero. Thus $g'(0)=0$ even though the formula for $g$ changes across zero. What matters is the limit of the quotient, not whether one symbolic rule covers both sides.

**Boundary problem.** On the domain $[0,\infty)$, what does “derivative at zero” mean for $\sqrt{x}$? A two-sided derivative is unavailable because negative inputs are outside the domain. The right-hand quotient is $\sqrt{h}/h=1/\sqrt{h}$, which grows without bound. There is no finite right derivative. State the domain whenever you use a limit at its edge.

### Workshop B — From approximation to an error claim

Linearization of $\sqrt{x}$ at 4 gave $\sqrt{4.1}\approx2.025$. To assess its reliability, use the second derivative $f''(x)=-1/(4x^{3/2})$. On $[4,4.1]$, its absolute value is at most $1/32$. Taylor's theorem with a remainder, when available, gives

$$|\sqrt{4.1}-2.025|\le\frac{1}{2}\frac{1}{32}(0.1)^2=0.00015625.$$

The decimal estimate is now accompanied by a bound. The guarantee depends on the interval and the smoothness of $f$ there; it is not a generic promise that every tangent approximation is this accurate. If Taylor's theorem is new, verify the weaker claim by squaring $2.024$ and $2.026$ to trap $\sqrt{4.1}$ between them. That alternative uses order rather than a derivative theorem.

**Try it.** Approximate $\sqrt{9.2}$ from the tangent at 9. The derivative is $1/(2\sqrt{9})=1/6$, so the approximation is $3+0.2/6=3.0333\ldots$. Since the square-root graph is concave down for positive inputs, its tangent lies above the graph; the approximation should be slightly high. This directional check is often more useful than another decimal place.

### Workshop C — Watch an integral emerge from sums

Let a particle's velocity be $v(t)=2t$ metres per second on $0\le t\le3$. Divide the interval into $n$ equal pieces of width $3/n$. A left-endpoint estimate of displacement is

$$L_n=\sum_{i=0}^{n-1}2\frac{3i}{n}\frac{3}{n}=\frac{18}{n^2}\frac{n(n-1)}{2}=9\left(1-\frac1n\right).$$

The right-endpoint estimate is $R_n=9(1+1/n)$. Because $v$ increases, every lower sum is at most the true displacement and every upper sum is at least it. Both approach 9 metres, so the integral is 9 metres. The signed displacement and total distance agree here because velocity never becomes negative. For $v(t)=2t-3$ on the same interval, signed displacement is zero while total distance is positive; split at the zero $t=1.5$ to calculate distance.

**Solution for the split.** The negative triangular area on $[0,1.5]$ has magnitude $\tfrac12(1.5)(3)=2.25$ metres; the positive triangle on $[1.5,3]$ also has area 2.25 metres. Signed displacement is $-2.25+2.25=0$ metres, whereas distance traveled is $4.5$ metres.

### Workshop D — Complete the drag model

Assume $m>0$, $c>0$, constant $g>0$, downward positive, and release from rest. Rewrite $mv'=mg-cv$ as $v'=g-(c/m)v$. Its equilibrium is $v_{\infty}=mg/c$. Let $w=v-v_{\infty}$. Then $w'=-(c/m)w$ and $w(0)=-v_{\infty}$, giving

$$v(t)=\frac{mg}{c}\bigl(1-e^{-ct/m}\bigr).$$

Velocity has length/time units: $mg/c$ does too if $c$ has mass/time units. With $s(0)=0$, accumulated distance is

$$s(t)=\frac{mg}{c}t-\frac{m^2g}{c^2}\bigl(1-e^{-ct/m}\bigr).$$

Differentiate this expression to recover $v(t)$; differentiate $v(t)$ and substitute into the original equation. At $t=0$ both $v$ and $s$ are zero. As $t\to\infty$, velocity approaches $mg/c$, while distance continues to grow. The time scale $m/c$ measures how quickly the transient decays. These checks catch sign mistakes that a plausible-looking exponential can hide.

## Cumulative assessment and feedback

1. Give an example of a continuous function that is not differentiable at a point, and justify both claims from limits.
2. For $F(x)=\int_1^{x^2}(1+t^2)\,dt$, find $F'(x)$ and state the theorem and chain rule used.
3. A tank receives water at $r(t)=4-t$ litres/minute for $0\le t\le6$. Find net volume change and total amount that flowed across the inlet, allowing a negative rate to represent outflow.
4. In the drag model, explain why doubling $c$ halves terminal velocity but also changes the time scale. Do not assume the distance after a fixed time halves.

**Answers and repairs.** (1) $|x|$ at zero, as in Workshop A; a drawing alone is insufficient. (2) $F'(x)=(1+x^4)2x$; the fundamental theorem differentiates the accumulation at its upper limit, and the chain rule differentiates $x^2$. (3) The integral of $4-t$ from 0 to 6 is $24-18=6$ litres net. The rate changes sign at $t=4$: inflow is the triangle or trapezoid area $\int_0^4(4-t)dt=8$ litres, outflow magnitude is $\int_4^6(t-4)dt=2$ litres, so total movement is 10 litres. (4) Terminal velocity is proportional to $1/c$ and time scale is $m/c$; stronger drag reduces the eventual speed and makes approach to it faster. If an answer to 3 reports 6 litres as total movement, revisit the difference between signed accumulation and absolute accumulation before continuing.
