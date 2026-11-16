
# Scalar Comparison, Invariant Regions, and Blow-Up

A scalar differential equation has only one state coordinate, but it already contains most of the logical hazards of nonlinear dynamics: equilibria lost by division, solutions that reach infinity in finite time, nonunique departure from a boundary, parameter thresholds, and numerical steps that leave a physically invariant interval.

The advantage of one dimension is order. Two distinct unique solutions cannot cross, and inequalities can trap an unknown solution between simpler ones. This chapter turns that order into comparison, global bounds, blow-up tests, and auditable computations.

Local prerequisites are the integral formulation and local existence/uniqueness theorem from [Models, Well-Posedness, and Continuation](models-wellposedness.md), elementary integration, and inequalities.

## 1. Phase-line analysis before separation

For an autonomous equation

$$x'=f(x),$$

an equilibrium is a zero of f. If f is continuous, its sign is constant on every open interval between consecutive zeros. A positive sign points right and a negative sign points left.

Suppose f is locally Lipschitz. A non-equilibrium solution cannot reach an equilibrium in finite time and then cross it. If it reached x star at time T, it would share the same data at T as the equilibrium solution. Uniqueness would force them to agree on a neighborhood and, by continuation, throughout their common interval.

This conclusion fails without uniqueness. For x'=2 square root of max(x,0), a solution can stay at zero and then leave.

### Monotone bounded orbits

Let x(t) remain in an interval where f has one sign. Then x is monotone. If it is also bounded, it has a finite limit ell as t tends to its maximal forward endpoint or infinity.

If the endpoint is infinity and f is continuous, then f(ell)=0. Otherwise, if f(ell)>0, continuity gives a positive lower bound for x' near ell, preventing convergence; the negative case is similar. Thus bounded scalar autonomous trajectories approach equilibria.

This argument does not give a rate. Near a simple stable zero with f'(ell)<0, linearization gives exponential local decay. Near f(x)=-x cubed, decay is algebraic.

## 2. Separation as an implicit theorem

Let f be continuous and nonzero on interval I. Fix x0 in I and define

$$F(x)=\int_{x_0}^x\frac{ds}{f(s)}.$$

Then F'=1/f has one sign, so F is strictly monotone and locally invertible. If x(t) stays in I and solves x'=f(x), the chain rule gives

$$\frac{d}{dt}F(x(t))=1.$$

Therefore

$$F(x(t))=t-t_0,\qquad x(t)=F^{-1}(t-t_0)$$

on the interval where the inverse exists.

This version records what informal separation often hides:

- equilibria are excluded from I and must be listed first;
- the inverse range determines the maximal time interval;
- signs and branches are fixed by I and x0;
- an antiderivative formula need not invert to elementary functions.

### Logistic equation

For

$$x'=rx(1-x/K)$$

with r,K positive, equilibria are 0 and K. On 0<x<K, partial fractions give

$$\frac1{x(1-x/K)}=\frac1x+\frac1{K-x}.$$

Integration yields

$$\log\frac{x}{K-x}=rt+C,$$

and initial x0 in (0,K) gives

$$x(t)=\frac K{1+(K/x_0-1)e^{-rt}}.$$

The formula verifies that (0,K) is invariant and x tends to K. Phase-line reasoning established both conclusions before algebra and also covers x0=0 or K, which division discarded.

For x0>K, the same formula has a coefficient between -1 and 0 and remains valid forward, decreasing toward K. For x0<0, the denominator can vanish forward; the polynomial model then has a mathematical blow-up outside its physical population domain.

## 3. First-crossing comparison

Consider scalar equations

$$x'=f(t,x),\qquad y'=g(t,y)$$

with unique solutions. A useful comparison statement is:

**Theorem 2.1 (Strict comparison).** Suppose x(t0)<y(t0) and

$$f(t,s)<g(t,s)$$

through a region containing both trajectories. Then x(t)<y(t) while both remain in the region.

**Proof.** If not, there is a first contact time T with x(T)=y(T) and x<y earlier. The difference d=y-x has d(T)=0 and is positive before T, so its left derivative at T cannot be positive; more carefully, the upper-left rate is nonpositive. But at contact,

$$d'(T)=g(T,x(T))-f(T,x(T))>0,$$

a contradiction.

Nonstrict comparison needs more care because derivatives can agree at first contact. One route perturbs the upper equation by epsilon, applies strict comparison, and lets epsilon decrease to zero using continuous dependence.

### Same vector field, ordered initial data

If f is locally Lipschitz and x0<y0, unique solutions of x'=f(t,x) satisfy x(t)<y(t) on their common interval. If they met, uniqueness from the meeting data would make them identical backward to t0.

This order preservation is special to scalar states. In several dimensions, no canonical total order exists; comparison requires a cone and quasimonotone structure.

## 4. Subsolutions and supersolutions

A differentiable lower function alpha satisfies

$$\alpha'\le f(t,\alpha),$$

and an upper function beta satisfies

$$\beta'\ge f(t,\beta).$$

Under local Lipschitz conditions and alpha(t0)<=x0<=beta(t0), comparison gives

$$\alpha(t)\le x(t)\le\beta(t)$$

while the functions share their domain and region.

For

$$x'=-x+\sin t,$$

constant bounds -1 and 1 are barriers:

$$\begin{aligned}x=1:&\quad f=-1+\sin t\le0,\\x=-1:&\quad f=1+\sin t\ge0.\end{aligned}$$

Thus [-1,1] is forward invariant. A sharper bound can use variation of constants, but the barrier already proves global boundedness.

Barriers need not solve the equation. This is valuable for PDE maximum principles and differential inequalities.

## 5. Invariant intervals with moving boundaries

Let an allowed interval move:

$$a(t)\le x\le b(t).$$

A sufficient inward-pointing condition is

$$f(t,a(t))\ge a'(t),\qquad f(t,b(t))\le b'(t).$$

The lower boundary does not outrun the solution upward, and the vector field at the upper boundary does not outrun that boundary. Comparison with a and b traps the state.

For positivity, take a(t)=0. If f(t,0)>=0 and uniqueness holds, nonnegative initial data stay nonnegative. If f(t,0)=0, zero is itself a solution and nonnegative states cannot cross it.

For vector systems, a rectangular invariant region requires an inward condition on each face, with other coordinates ranging through the face. A single radial sign check is not sufficient.

## 6. Gronwall as comparison with a linear equation

Suppose nonnegative u satisfies

$$u'(t)\le a(t)u(t)+b(t)$$

with integrable a and b. Multiply by the integrating factor

$$\exp\left[-\int_{t_0}^t a(s)\,ds\right].$$

After integration,

$$u(t)\le u(t_0)e^{\int_{t_0}^t a(s)\,ds}+\int_{t_0}^t e^{\int_s^t a(r)\,dr}b(s)\,ds.$$

For constant a=L and b=B,

$$u(t)\le e^{L(t-t_0)}u_0+\frac B L\bigl[e^{L(t-t_0)}-1\bigr]$$

when L is nonzero.

Applications include:

- continuous dependence on initial data;
- perturbation and residual bounds;
- uniqueness by setting u0 and b to zero;
- global existence under at-most-linear growth;
- numerical global-error estimates.

The bound can be pessimistic. Replacing a stable sign structure by absolute values may turn true decay into exp(Lt) growth.

## 7. A global-existence criterion

Suppose $f$ is defined on the full state strip $[t_0,T]\times\mathbb R$, is continuous, locally Lipschitz in $x$, and has at-most-linear growth:

$$|f(t,x)|\le A(t)+B(t)|x|$$

with $A$ and $B$ integrable on the time interval. Then every solution continues throughout that strip. If the state domain is a proper open subset of $\mathbb R$, the estimate only prevents norm blow-up: a bounded solution can still reach the domain boundary.

Indeed,

$$|x(t)|\le|x_0|+\int_{t_0}^t[A(s)+B(s)|x(s)|]\,ds,$$

and Gronwall gives a finite bound on every finite interval. The continuation theorem then rules out finite escape.

Polynomial vector fields of degree greater than one do not satisfy a global linear-growth bound. Some still have global solutions because a sign or energy points inward; others blow up.

### Dissipative cubic

For x'=-x cubed+p(t), with |p(t)|<=P, use Young’s inequality:

$$xp\le\tfrac12x^4+C(P).$$

Then for V=x squared/2,

$$V'=-x^4+xp\le-\tfrac12x^4+C(P).$$

Outside a sufficiently large interval V decreases. This absorbing estimate prevents forward blow-up even though the raw polynomial has cubic growth.

## 8. Integral blow-up criterion

Consider x'=f(x), x0 positive, with f positive and continuous for x>=x0. Separation gives the time to reach X:

$$t(X)-t_0=\int_{x_0}^X\frac{ds}{f(s)}.$$

Therefore:

- if integral from x0 to infinity of 1/f is finite, the solution reaches infinity in that finite time;
- if the integral diverges, it cannot reach infinity in finite forward time.

This is an Osgood-type criterion for the scalar autonomous problem.

Examples:

- x'=x to p with p>1 blows up in time x0 to (1-p)/(p-1);
- p=1 gives exponential growth for all finite times;
- 0<p<1 grows algebraically and globally forward.

Finite-time divergence is a mathematical property of the ideal equation. A physical model usually fails before an actual infinite state.

## 9. Blow-up lower and upper bounds

Exact separation may be unavailable. Comparison transfers known blow-up.

If x'>=c x to p for x above M, with c positive and p>1, compare to y'=c y to p. Once x reaches M, the lower comparison blows up in finite time, forcing x to become unbounded no later if the comparison hypotheses hold.

Conversely, if x'<=A+B x for nonnegative x, Gronwall prevents finite-time blow-up.

Direction matters. An upper comparison by a blowing-up function does not prove the smaller solution blows up; a lower comparison does.

## 10. Bihari and non-Lipschitz uniqueness boundaries

Suppose a difference u satisfies

$$u(t)\le\int_{t_0}^t\omega(u(s))\,ds,$$

where omega is increasing, positive away from zero, and

$$\int_{0^+}\frac{ds}{\omega(s)}=\infty.$$

An Osgood–Bihari argument forces u=0. For omega(s)=Ls this recovers Gronwall uniqueness. For omega(s)=s log(1/s) near zero, the integral still diverges and can support uniqueness despite failure of a Lipschitz bound.

For omega(s)=square root of s, the integral near zero is finite, consistent with waiting-time nonuniqueness.

Local Lipschitz is convenient, not the exact boundary of uniqueness.

## 11. Parameter thresholds on the phase line

For

$$x'=f(x,\mu),$$

equilibria are curves in the (mu,x) plane. At a hyperbolic equilibrium f_x is nonzero, the implicit function theorem continues the branch locally and its stability cannot change without f_x passing through zero.

The harvest equation

$$x'=x(1-x)-H$$

has equilibria

$$x=\frac{1\pm\sqrt{1-4H}}2$$

for H<=1/4. At H=1/4 they coalesce. Below the threshold the larger branch is stable and the smaller unstable. Above it, the vector field is negative for every x, so a positive state falls toward and through zero unless a physical extinction boundary changes the model.

A slowly time-varying H is a nonautonomous problem. The static equilibrium diagram does not determine delay, rate-induced tipping, or noise-driven escape.

## 12. Positivity and numerical steps

For x'=-lambda x with lambda positive, the exact flow preserves positivity. Euler gives

$$x_{n+1}=(1-h\lambda)x_n.$$

It preserves nonnegativity only for h lambda<=1. Absolute stability permits h lambda<2, so a step can be stable in magnitude yet alternate signs, violating a physical positivity invariant.

For logistic growth, Euler gives

$$x_{n+1}=x_n+hrx_n(1-x_n/K).$$

Large h can overshoot K or become negative even from x in [0,K]. A refinement plot should tabulate minimum, maximum, and invariant-interval violations, not only endpoint error.

Implicit Euler for x'=-lambda x has multiplier 1/(1+h lambda), positive for every h. Method choice can encode a qualitative property.

## 13. Scalar event audits

Suppose a model stops when x reaches zero. A discrete step that jumps from positive to negative should not be accepted as a negative physical state and then continued. Treat extinction time as a root of x_h(t) within the step, locate it using dense output or a bracketed interpolation, apply the declared terminal or switching rule, and report event-time refinement.

If the exact vector field makes zero an invariant equilibrium, a unique positive solution may never reach it in finite time. A computed finite crossing then diagnoses numerical error or a different event model.

## 14. Worked synthesis: a forced threshold model

Consider

$$x'=x^2+q(t),\qquad x(0)=x_0>0,$$

with 0<=q(t)<=Q.

Lower comparison with y'=y squared proves that x blows up no later than 1/x0. Upper comparison with z'=z squared+Q gives x<=z while both exist. Since z blows up at

$$T_z=\int_{x_0}^{\infty}\frac{ds}{s^2+Q},$$

x cannot blow up before T_z: otherwise a finite z would bound an unbounded x. Thus

$$T_z\le T_x\le1/x_0.$$

Neither comparison identifies the exact time unless q is one of the bounding functions. Because x' is positive, x is monotone.

Separation is unavailable when q varies, but comparison supplies a finite-time conclusion. If q can be negative, the lower bound must change; an interval bound on q should be propagated into distinct sub- and supersolutions.

Numerically, refine the event defined by x=M for several large M. If times stabilize toward a limit as M increases and h decreases, that supports the analytical blow-up time. Stopping at floating-point overflow would mix mathematical escape with machine range.

## A vector comparison theorem needs an order hypothesis

Scalar first-contact arguments do not extend to arbitrary vector fields by comparing every component independently. A sufficient vector hypothesis is cooperativity: on a rectangular state region, the derivative of each component with respect to every other state component is nonnegative. Holding one coordinate fixed and increasing the other coordinates then cannot decrease that component of the vector field.

Suppose a nonautonomous vector field is continuous in time and continuously differentiable in state, with this off-diagonal sign property and a uniform derivative bound on a compact time-state rectangle. Let differentiable lower and upper trajectories lie in its interior, satisfy the componentwise subsolution and supersolution inequalities, and start in componentwise order. Then that order persists as long as both trajectories remain in the rectangle.

To prove it, perturb the upper trajectory upward in every component by $\epsilon e^{Ct}$. On the finite interval, choose the perturbation small enough to stay in the stated region. If each matrix derivative entry is bounded in magnitude by $L$ and there are $n$ components, choose $C>nL$. The perturbation's derivative exceeds the possible change of the vector field by a strictly positive amount, so the perturbed path is a strict supersolution.

At a first componentwise contact, one component of the lower path equals the corresponding upper component, while every other lower component is no larger. Cooperativity compares the vector-field component at these two states in the required direction. The lower component's derivative is strictly smaller than the perturbed upper component's derivative. But reaching zero for the first time from a negative difference requires a nonnegative derivative at that contact. This contradiction prevents contact. Finally let the perturbation tend to zero to recover the non-strict comparison result.

The finite time interval, common rectangle and strict perturbation all have roles. A tangential first contact alone need not give a contradiction without the perturbation or another uniqueness argument. A nonrectangular domain may not contain the componentwise joining paths used to exploit the derivative sign. The theorem should be applied on a region where those comparisons are legitimate.

**Worked example: cooperative exchange.** For $x'=-x+y$, $y'=x-y$, both off-diagonal derivatives equal one. Ordered initial vectors remain ordered by the theorem. The sum of each solution's coordinates is constant, while their difference decays at rate two. The explicit solution therefore also shows nonnegative starting coordinates remain nonnegative and approach their common mean. In this example positivity and order preservation are both true, but they are different properties.

**Worked counterexample: positivity without comparison.** Consider $x'=x(1-y)$ and $y'=-y$ in the nonnegative quadrant. The quadrant is invariant: the first coordinate remains its initial value times a positive exponential, and the second decays. Compare starts $(1,0)$ and $(1,1)$, which are componentwise ordered. The first trajectory has horizontal coordinate $e^t$. The second has horizontal coordinate $\exp[t-(1-e^{-t})]$, which is smaller for every positive time. Their horizontal order reverses immediately. The off-diagonal derivative of the first equation is minus the first coordinate, so cooperativity fails exactly where the comparison proof would need it.

This extension clarifies the limit of scalar intuition in compartment models. Boundary signs may prove that populations stay nonnegative while competitive interactions prevent monotonic dependence on all initial populations. Before importing an ordered scalar bound into a vector mechanism, specify which coordinate order or invariant cone the dynamics actually respects.

## Exercises with worked solutions

<a id="scalar-comparison-invariant-regions-ex-1"></a>

### 1. A complete phase line

Analyze x'=x(x-1)(2-x) for every initial interval.

<details><summary>Hint 1</summary>

List all roots and one sign in each complementary interval.

</details>

<details><summary>Hint 2</summary>

Equilibria are uniqueness barriers, and each start remains in a bounded interval.

</details>

<details><summary>Full solution</summary>

**Solution.** Equilibria are 0,1,2. Signs are positive on (-infinity,0), negative on (0,1), positive on (1,2), and negative on (2,infinity). Thus 0 attracts from both sides; 1 repels on both sides; and 2 attracts from both sides. Starts below 0 rise toward 0, starts in (0,1) decrease toward 0, starts in (1,2) increase toward 2, and starts above 2 decrease toward 2. In every case an equilibrium barrier and uniqueness trap the forward orbit in a bounded interval, so every solution is global forward.

</details>

<a id="scalar-comparison-invariant-regions-ex-2"></a>

### 2. Comparison with decay

Suppose x is nonnegative and x'<=-2x+3 exp(-t), x(0)=1. Give an explicit upper bound.

<details><summary>Hint 1</summary>

Solve the equality comparison equation with the same initial value.

</details>

<details><summary>Hint 2</summary>

Use an integrating factor and preserve the direction of the upper bound.

</details>

<details><summary>Full solution</summary>

**Solution.** Solve the comparison equation y'=-2y+3exp(-t), y(0)=1. Variation of constants gives

$$y=e^{-2t}+3e^{-2t}\int_0^t e^s\,ds=3e^{-t}-2e^{-2t}.$$

Comparison gives 0<=x(t)<=y(t) while the hypotheses hold.

</details>

<a id="scalar-comparison-invariant-regions-ex-3"></a>

### 3. Moving upper barrier

For x'=t-x, show that b(t)=t+1 is an upper barrier (not an exact trajectory) and find an exact lower trajectory.

<details><summary>Hint 1</summary>

Compare the candidate derivative with the vector field evaluated on the candidate.

</details>

<details><summary>Hint 2</summary>

An upper barrier may satisfy a strict inequality instead of the original equation.

</details>

<details><summary>Full solution</summary>

**Solution.** b'=1 and t-b=-1, so b is not an exact solution, but it is an upper barrier because the required inequality is b'>=f(t,b), and $1\geq-1$. The exact particular solution t-1 satisfies derivative 1 and t-(t-1)=1, so a(t)=t-1 is a solution and can serve as a lower barrier when the initial value lies above it. This problem illustrates that barriers need not be tight or solve the equation.

</details>

<a id="scalar-comparison-invariant-regions-ex-4"></a>

### 4. Blow-up integral

Does x'=x log x, x(0)>1, blow up in finite time?

<details><summary>Hint 1</summary>

Use the exact inverse-speed integral to infinity.

</details>

<details><summary>Hint 2</summary>

Substitute the logarithm of the state; the resulting reciprocal integral diverges.

</details>

<details><summary>Full solution</summary>

**Solution.** The time integral is

$$\int_{x_0}^{\infty}\frac{dx}{x\log x}.$$

Substitute u=log x; it becomes integral from log x0 to infinity du/u, which diverges. Therefore growth is faster than exponential in one sense but still does not reach infinity at a finite time. The exact solution has log x=(log x0)exp(t).

</details>

<a id="scalar-comparison-invariant-regions-ex-5"></a>

### 5. A one-sided global bound

Suppose x f(t,x)<=C(1+x squared) for all states. Prove no finite-time norm blow-up for a scalar solution.

<details><summary>Hint 1</summary>

Differentiate one plus the squared scalar state.

</details>

<details><summary>Hint 2</summary>

Gronwall prevents finite norm escape while the stated domain has no other boundary.

</details>

<details><summary>Full solution</summary>

**Solution.** With V=1+x squared, V'=2x f(t,x)<=2C V. Gronwall gives V(t)<=V(t0)exp(2C elapsed time) on every finite interval. Hence |x| remains finite, and local continuation extends the solution while the vector field domain has no other boundary.

</details>

<a id="scalar-comparison-invariant-regions-ex-6"></a>

### 6. Numerical positivity versus stability

For x'=-8x, choose a step that is absolutely stable for Euler but violates positivity.

<details><summary>Hint 1</summary>

Compare absolute value contraction with a nonnegative numerical multiplier.

</details>

<details><summary>Hint 2</summary>

A multiplier between minus one and zero is stable in magnitude but flips sign.

</details>

<details><summary>Full solution</summary>

**Solution.** Absolute stability requires |1-8h|<1, so 0<h<1/4. Positivity requires 1-8h>=0, so h<=1/8. Any h between 1/8 and 1/4 works; for example h=0.2 gives multiplier -0.6. The numerical magnitude decays but signs alternate.

</details>

<a id="scalar-comparison-invariant-regions-ex-7"></a>

### 7. Repair a comparison error

“Because x'<=x squared and y'=y squared blows up, x must blow up.”

<details><summary>Hint 1</summary>

Check which side of the proposed bound the unknown solution occupies.

</details>

<details><summary>Hint 2</summary>

A stationary positive solution is bounded above by a blowing-up comparison without blowing up itself.

</details>

<details><summary>Full solution</summary>

**Solution.** An upper bound by a blowing-up solution does not force the smaller solution to blow up; x'=0 with positive x is a counterexample while 0<=x squared. To prove blow-up, one needs a lower comparison by a function known to blow up, plus ordered initial data and comparison hypotheses.

</details>

<a id="scalar-comparison-invariant-regions-ex-8"></a>

### 8. Non-Lipschitz does not mean nonunique

Why is failure of a Lipschitz test not proof of nonuniqueness?

<details><summary>Hint 1</summary>

Failure of a sufficient hypothesis is not the negation of the conclusion.

</details>

<details><summary>Hint 2</summary>

The reciprocal-modulus condition or an explicit exhaustion argument can decide cases where Lipschitz continuity fails.

</details>

<details><summary>Full solution</summary>

**Solution.** Lipschitz continuity is sufficient, not necessary. Weaker Osgood moduli can force uniqueness when the reciprocal-modulus integral diverges. A nonunique example must exhibit distinct solutions or invoke a theorem whose failure condition is also sufficient in that setting.

</details>

<!-- optional-scalar-futures:start -->
<a id="scalar-comparison-invariant-regions-ex-9"></a>

### 9. Optional — Does the formula list every possible future?

Verifying a formula proves membership in a solution set. This exercise asks a different question: have we found **every** admissible future? It applies the separation and reciprocal-integral ideas in Sections 2, 8 and 10. The waiting-family construction is familiar; the extra work is exhaustion and maximality.

**Preparation and scope.** Use monotonicity, continuity and an infimum to identify a zero set; separate only where the field is nonzero; check a one-sided derivative at a join. A forward classical solution means $y\in C^1([0,T))$, $T>0$, with $y(0)=0$, values in the stated state domain and the equation at every time, using the right derivative at $0$. It is **maximal forward** if it has no extension to a larger interval $[0,T')$ inside that same state domain. Negative time, weak solutions and changes of boundary policy are outside this question. Allow roughly 45–60 minutes as an editorial estimate, not an observed completion time.

**(a) Exhaust the familiar family.** On the full real state line set

$$
F_0(y)=\sqrt{\max(y,0)}.
$$

Classify all maximal forward solutions of $y'=F_0(y)$, $y(0)=0$. The known candidates are the zero solution and, for finite $\tau\ge0$,

$$
y_\tau(t)=
\begin{cases}
0,&0\le t\le\tau,\\
\dfrac{(t-\tau)^2}{4},&t>\tau.
\end{cases}
$$

Start with an arbitrary solution and prove that no other form is possible. Check the join and the full maximal interval. Then audit the unpatched candidate $q_\tau(t)=(t-\tau)^2/4$: for which real $t$ does it satisfy the equation, and which $\tau\ge0$ also satisfy the initial datum? Explain why adding the zero solution to the surviving unpatched formulas still need not give an exhaustive answer.

**(b) A changed logarithmic task.** Keep zero as an interior initial state, but now use the fixed open domain

$$
\Omega=(-e^{-1},e^{-1}),\qquad
F_\alpha(y)=
\begin{cases}
0,&-e^{-1}<y\le0,\\
y[\log(1/y)]^\alpha,&0<y<e^{-1},
\end{cases}
\qquad \alpha\in\{1,2\}.
$$

For each of these two fields, prove continuity at zero and show that local Lipschitz continuity fails there. Classify **all** maximal forward classical solutions from $y(0)=0$, with both necessity and construction arguments. For $0<\eta<e^{-1}$ compute the improper integral

$$
\int_{0+}^{\eta}\frac{ds}{s[\log(1/s)]^\alpha}.
$$

Explain its relation to departure from zero. If a nonzero future exists, check its joining derivative and identify the maximal endpoint: does it blow up, leave the specified state domain at a finite value, or continue globally? A failed sufficient uniqueness test is not an answer.

<details><summary>Hint 1: departure and exhaustion</summary>

**Optional hint for (a).** The field is nonnegative. If a solution is positive anywhere, put $\tau=\inf\{t:y(t)>0\}$. Prove that it is zero before $\tau$ and positive at every later time of its interval. Only then differentiate $\sqrt{y(t)}$.

</details>

<details><summary>Hint 2: logarithmic clocks</summary>

**Optional hint for (b).** Use the same zero-set argument. On the sole positive interval put $v=\log(1/y)>1$. It satisfies $v'=-v^\alpha$. For $\alpha=1$ compare its value at a fixed later time with its limit at a finite departure time. For $\alpha=2$, differentiate $1/v$. To check the join write $u=t-\tau>0$, then $s=1/u$; the relevant quantities are $s e^{-s}$ and $s^2e^{-s}$.

</details>

<details><summary>Full solution</summary>

**Complete answer to (a): necessity.** Because $F_0\ge0$, every solution is nondecreasing and $y(t)\ge y(0)=0$. If it is not identically zero, choose a time where it is positive and let $\tau$ be the infimum of all such times. Then $0\le\tau<T$. Continuity gives $y(\tau)=0$: a positive value there would give earlier positive values, except at $\tau=0$, where the initial datum already gives zero. Nonnegativity and the definition of the infimum give $y=0$ on $[0,\tau]$. For every $t>\tau$ there is a positive value at an earlier time between $\tau$ and $t$; monotonicity therefore gives $y(t)>0$. This rules out both return to zero and repeated waiting blocks without assuming uniqueness.

On $(\tau,T)$ the chain rule is legal and gives

$$
\frac{d}{dt}\sqrt{y(t)}=
\frac{y'(t)}{2\sqrt{y(t)}}=\frac12.
$$

Thus, for $\tau<r<t<T$,

$$
\sqrt{y(t)}-\sqrt{y(r)}=\frac{t-r}{2}.
$$

Let $r\downarrow\tau$. Continuity gives $\sqrt{y(r)}\to0$, forcing $y(t)=(t-\tau)^2/4$. Separation has not divided away the preceding zero segment. Every nonzero solution is a restriction of one of the listed waiting curves.

**Construction and maximality.** Before departure the derivative and field are both zero. After departure, $y_\tau'=(t-\tau)/2=\sqrt{y_\tau}$. At the join the right difference quotient is $h^2/(4h)=h/4\to0$, and the positive-branch derivative $h/2$ also tends to zero. For $\tau>0$ these match the left derivative; for $\tau=0$ they give the required right derivative at the initial endpoint. Hence the curve is $C^1$ and satisfies the equation through the join. The zero function is checked separately. Every displayed solution is finite at every finite time and extends to $[0,\infty)$. Any shorter restriction is extendible, so the complete maximal-forward list is exactly the zero solution and all finite-delay $y_\tau$, each on $[0,\infty)$. The ordinary real equation $y'=\sqrt y$ has the same nonnegative forward trajectories from zero.

For the unpatched parabola,

$$
q_\tau'(t)=\frac{t-\tau}{2},\qquad
F_0(q_\tau(t))=\frac{|t-\tau|}{2}.
$$

Equality holds exactly when $t\ge\tau$. Also $q_\tau(0)=\tau^2/4=0$ forces $\tau=0$. The immediate parabola and the equilibrium zero therefore pass their checks, but omit every genuinely delayed future. Substitution verifies the supplied candidate; the arbitrary-solution argument proves exhaustion.

**Complete answer to (b): regularity and the common zero set.** Write $y=e^{-v}$ on the positive side. As $y\downarrow0$, $v\to\infty$ and $F_\alpha(y)=e^{-v}v^\alpha\to0$, agreeing with the zero extension on the negative side. For instance, $e^v\ge v^4/24$ gives this limit for both fixed exponents. But

$$
\frac{|F_\alpha(y)-F_\alpha(0)|}{|y|}
=[\log(1/y)]^\alpha\longrightarrow\infty,
$$

so neither field is locally Lipschitz at zero. Both fields are nonnegative on $\Omega$. The preceding monotone zero-set proof applies unchanged: a nonzero solution has one finite departure time $\tau$, is zero through $\tau$, and is positive on $(\tau,T)$. There,

$$
v=\log(1/y)>1,\qquad
v'=-\frac{y'}{y}=-v^\alpha,\qquad
v(t)\longrightarrow\infty\quad(t\downarrow\tau).
$$

**The case $\alpha=1$.** Fix $t_1\in(\tau,T)$. Solving $v'=-v$ on that positive interval gives

$$
v(t)=v(t_1)e^{t_1-t}.
$$

Its limit as $t\downarrow\tau$ is finite, contradicting the required infinite limit. No positive interval can exist. The only maximal forward solution is therefore $y\equiv0$ on $[0,\infty)$. A shorter zero restriction extends globally. This proves uniqueness at the specified datum despite failure of local Lipschitz continuity; failure of that sufficient condition alone would establish neither uniqueness nor nonuniqueness.

**The case $\alpha=2$: necessity.** Now $w=1/v$ satisfies $w'=1$ and $w(t)\to0$ as $t\downarrow\tau$. Consequently

$$
w(t)=t-\tau,\qquad
Y_\tau(t)=
\begin{cases}
0,&0\le t\le\tau,\\
\exp\!\left(-\dfrac{1}{t-\tau}\right),&\tau<t<\tau+1.
\end{cases}
$$

The positive branch is forced, not guessed. The condition $v>1$ is exactly $0<t-\tau<1$. Thus a nonzero solution cannot stay in $\Omega$ beyond $\tau+1$, and every such solution on a shorter interval is a restriction of this curve.

**Construction, join and maximality.** For every finite $\tau\ge0$ the displayed curve has the initial datum. With $u=t-\tau\in(0,1)$ its positive-branch derivative is

$$
Y_\tau'(t)=\frac{e^{-1/u}}{u^2}
=Y_\tau(t)[\log(1/Y_\tau(t))]^2.
$$

At departure, the right difference quotient is $e^{-1/u}/u$ and the positive-branch derivative is $e^{-1/u}/u^2$. Put $s=1/u$. Since $e^s\ge s^4/24$,

$$
0\le s e^{-s}\le\frac{24}{s^3}\longrightarrow0,
\qquad
0\le s^2e^{-s}\le\frac{24}{s^2}\longrightarrow0.
$$

The value, joining derivative and limiting derivatives match the zero segment, giving a $C^1$ solution through every join, with the one-sided interpretation when $\tau=0$.

As $t\uparrow T=\tau+1$, the state tends to $e^{-1}$, a finite value **excluded** from $\Omega$. Any extension to $[0,T')$ with $T'>T$ would include time $T$; continuity would force the prohibited state $Y_\tau(T)=e^{-1}$. Hence each finite-delay branch is maximal exactly on $[0,\tau+1)$. This is finite-state **domain exit, not blow-up**. Every shorter restriction extends to that endpoint. Together with the global zero solution, these are all maximal forward futures for $\alpha=2$. Extending the field or changing the allowed state domain would pose a different continuation problem.

**The reciprocal clocks.** For $0<\varepsilon<\eta<e^{-1}$ substitute $z=\log(1/s)$:

$$
\int_\varepsilon^\eta\frac{ds}{s[\log(1/s)]^\alpha}
=\int_{\log(1/\eta)}^{\log(1/\varepsilon)}\frac{dz}{z^\alpha}.
$$

For $\alpha=1$ the right side is
$\log\log(1/\varepsilon)-\log\log(1/\eta)\to\infty$.
For $\alpha=2$ it is
$1/\log(1/\eta)-1/\log(1/\varepsilon)\to1/\log(1/\eta)$.
The finite clock in the second case agrees with the proved elapsed time $t-\tau=1/\log(1/y(t))$; the divergent clock in the first forbids departure from zero at any finite time. For comparison, the square-root departure clock is $\int_0^\eta ds/\sqrt s=2\sqrt\eta$. These are clocks near an equilibrium, whereas Section 8 examines the clock to infinity from a positive initial state.

**Logical boundary.** The conclusions above follow from the two fixed autonomous fields, their signs, their zero sets and the separated clocks. The existing Osgood–Bihari sufficient criterion remains useful, but we have not asserted a general converse: a finite reciprocal integral in an unrelated failed modulus test does not by itself prove nonuniqueness. We have not assumed that $F_2$ is increasing on the whole positive interval or supplied a global modulus bound there. A solver's returned list, a numerical trajectory or a small residual would not replace the exhaustion and maximality arguments.

**Source and scope note.** Autonomous inverse-clock separation and equilibrium patching are standard; see Gerald Teschl, [Ordinary Differential Equations and Dynamical Systems, author-hosted preliminary version](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf), Section 1.3, printed pages 9–11. The fixed logarithmic classifications and domain/join arguments above are worked here explicitly. No symbolic solver or kernel output, numerical completeness claim, or learner-effectiveness result is asserted.
</details>

<!-- optional-scalar-futures:end -->

<a id="scalar-comparison-invariant-regions-ex-10"></a>
### 10. Cooperative exchange with removal

For $x'=-2x+y$, $y'=x-2y$, derive the transition matrix and prove preservation of componentwise order and nonnegativity for nonnegative time.

<details><summary>Hint 1</summary>

Separate the matrix into minus twice the identity plus the coordinate-swap matrix.

</details>
<details><summary>Hint 2</summary>

The swap matrix squares to the identity, so its exponential has hyperbolic cosine and sine entries.

</details>
<details><summary>Full solution</summary>

The transition matrix is $e^{-2t}\begin{pmatrix}\cosh t&\sinh t\\\sinh t&\cosh t\end{pmatrix}$. Its entries are nonnegative for nonnegative time. Multiplying an initially nonnegative difference vector therefore gives a nonnegative difference at every later time, proving order preservation. Taking the lower trajectory zero proves positivity. From start $(1,0)$, the coordinates are $(e^{-t}+e^{-3t})/2$ and $(e^{-t}-e^{-3t})/2$. Both are nonnegative; their sum decays at rate one. This agrees with the cooperative off-diagonal derivative condition while distinguishing it from mere invariance of one boundary.

</details>

## Computation audit

For a scalar numerical experiment, publish:

- exact equilibria and phase-line signs;
- proven invariant interval or positivity condition;
- maximal-time or blow-up integral when available;
- event threshold and root-location policy;
- h, h/2, h/4 endpoint and event-time table;
- minimum and maximum numerical state;
- whether the method’s update preserves the invariant interval;
- residual or exact comparison;
- overflow and stopping rules separated from mathematical blow-up.

## Dependency ledger

- Local uniqueness made scalar solution order strict and prevented equilibrium crossing.
- Continuity fixed phase-line signs and made bounded monotone limits equilibria.
- Separation used a nonzero vector field on one branch and let inverse range determine maximal time.
- First-contact arguments and epsilon perturbation powered comparison.
- Gronwall compared differential errors with a linear envelope.
- At-most-linear growth or a dissipative Lyapunov estimate prevented finite escape.
- The reciprocal-growth integral distinguished finite blow-up from unbounded infinite-time growth.
- Numerical positivity required a stronger step condition than absolute stability.
