
# Multistep, Stiff, and Differential-Algebraic Methods

## Numerical scope and prerequisites

The prerequisite chapters are **Initial-Value Methods: Stability Before
Speed** (`initial-value-methods`) and **Nonlinear Systems, Jacobians, and
Globalization** (`nonlinear-systems-globalization`). We use one-step methods,
absolute stability, adaptive error control, matrix factorizations, and
globalized Newton solves. This chapter does not develop general
differential-equation modeling, phase portraits, control, or physical
interpretation. Its target is narrower: once an ODE or differential-algebraic
equation has been specified, how do history-based and implicit algorithms
approximate it, and what evidence supports the result?

Three error ledgers interact:

1. time-discretization defect and propagated global error;
2. nonlinear and linear algebra error inside each implicit step;
3. algebraic-constraint residual and consistency error for a DAE.

A stable step does not guarantee an accurate step. A small nonlinear residual
does not bound time error. A small differential residual does not excuse a
violated algebraic constraint.

## Linear multistep formulas

**Definition 11.1 (Linear multistep formula).** For an integer $s\ge1$, real coefficients with $\alpha_s\ne0$, a fixed positive step $h$, and $t_{n+j}=t_n+jh$, an $s$-step linear multistep method has the form

\[
\sum_{j=0}^{s}\alpha_j y_{n+j}
=h\sum_{j=0}^{s}\beta_j f(t_{n+j},y_{n+j}).
\]

Define the polynomials

\[
\rho(\zeta)=\sum_{j=0}^{s}\alpha_j\zeta^j,
\qquad
\sigma(\zeta)=\sum_{j=0}^{s}\beta_j\zeta^j.
\]

The method is consistent at first order when

\[
\rho(1)=0,
\qquad
\rho'(1)=\sigma(1).
\]

The first identity preserves constants; the second matches the first derivative
term in a Taylor expansion. Higher-order conditions match additional powers of
\(h\). Coefficients alone do not produce convergence: perturbations in the
history recurrence must also remain controlled.

## Zero-stability and the root condition

Set the right-hand side to zero. The homogeneous recurrence is governed by
\(\rho\). A fixed linear multistep method is **zero-stable** when every root of
\(\rho(\zeta)\) lies in \(\lvert \zeta\rvert\le 1\) and every root on the unit circle is simple.

Why simple? A repeated unit root creates polynomial growth in the step number.
For the recurrence

\[
y_{n+2}-2y_{n+1}+y_n=0,
\]

the characteristic polynomial is \((\zeta-1)^{2}\). With perturbed starts
\(y_0=0\) and \(y_1=\epsilon\), the solution is \(y_n=n\cdot \epsilon\). Over a fixed time
interval, \(n\) is proportional to \(1/h\), so a starting perturbation can grow
without a uniform bound as the grid is refined.

**Theorem 1 (Dahlquist equivalence principle; cited).** For a fixed linear multistep formula in
the standard fixed-step setting, with a sufficiently regular Lipschitz ODE and
convergent starting values, convergence is equivalent to consistency plus
zero-stability.

The setup matters. Variable steps change coefficients and introduce step-ratio
conditions. Discontinuous events invalidate an old smooth history. Finite-
precision coefficient generation can perturb the recurrence. Quoting the
fixed-step theorem does not settle those cases.

## Adams formulas and a worked explicit step

Adams-Bashforth methods integrate an interpolant through previous derivative
values. The two-step formula is

\[
y_{n+2}=y_{n+1}
+h\left(\frac32f_{n+1}-\frac12f_n\right).
\]

It needs a starting value \(y_1\) from a one-step method of compatible accuracy.
A poor start can dominate early global error even when every later formula is
implemented correctly.

### Worked Adams-Bashforth step

**Example 11.1 (An Adams–Bashforth step).**

For \(y'=-y\) with \(h=0.1\), take exact starting values
\(y_0=1\) and \(y_1=\exp(-0.1)\approx 0.9048374\). Then
\(f_0=-1\) and \(f_1\approx -0.9048374\). The formula gives

\[
y_2=0.9048374
+0.1\left[\frac32(-0.9048374)-\frac12(-1)\right]
\approx0.8191118.
\]

The exact value is \(\exp(-0.2)\approx 0.8187308\), so the one-step displayed error is
about \(3.81\times 10^{-4}\). This is an observed value with an unusually accurate start,
not the global error constant for every problem.

Adams-Moulton formulas include the new derivative and are implicit. A
predictor can supply an initial guess, but a predictor-corrector pair is not
automatically converged after one correction. Report how the implicit equation
was solved.

## Backward differentiation formulas

BDF methods differentiate an interpolant through recent solution values and
evaluate the ODE at the new state. BDF2 is

\[
\frac{3y_{n+1}-4y_n+y_{n-1}}{2h}
=f(t_{n+1},y_{n+1}).
\]

For nonlinear \(f\), define the step residual

\[
G(y)=3y-4y_n+y_{n-1}-2h f(t_{n+1},y)
\]

and solve \(G(y)=0\) by a safeguarded Newton or related method. Its Jacobian is

\[
G_y=3I-2h f_y.
\]

The time method assumes this nonlinear problem is solved accurately enough.
The algebraic tolerance should normally be smaller than the local
time-discretization target after scaling, but solving many decimal orders
beyond that target wastes work.

## Absolute stability for multistep methods

Apply the formula to \(y'=\lambda\cdot y\) and set \(z=h\cdot \lambda\). Trial solutions
\(y_n=\zeta^n\) satisfy

\[
\rho(\zeta)-z\sigma(\zeta)=0.
\]

Absolute stability requires all roots to lie inside the unit disk, with any
unit-modulus roots simple under the method's boundary convention. Unlike a
one-step method, there are several roots: one principal mode and possible
parasitic modes.

No A-stable linear multistep method has order greater than two. Backward Euler
and BDF2 are A-stable; higher-order BDF formulas retain useful sectors rather
than the entire left half-plane, and BDF formulas beyond order six lose
zero-stability. These are method boundaries, not claims that higher order is
always worse. The spectrum, accuracy target, step variation, and nonlinear
work determine the useful choice.

### Worked stiff BDF2 recurrence

**Example 11.2 (A stiff BDF2 recurrence).**

Take \(y'=-100y\) and \(h=0.1\), so \(z=-10\). Start with one backward Euler step:

\(y_0=1\) and \(y_1=1/(1+10)=1/11\).

BDF2 gives

\[
(3-2h\lambda)y_2=4y_1-y_0.
\]

Here the denominator is \(3-2(-10)=23\), so

\[
y_2=\frac{4/11-1}{23}
=-\frac7{253}
\approx-0.027668.
\]

The exact \(y(0.2)=\exp(-20)\) is about \(2.06\times 10^{-9}\). The numerical value is stable
in the sense that the stiff mode is being damped, but it is not accurate at
this coarse step and even has the wrong sign. Stability prevents explosive
growth; it does not resolve the fast transient.

## Stiffness, damping, and order reduction

A problem is stiff relative to a method and accuracy goal when explicit
stability forces steps much smaller than the timescale on which the desired
solution changes. A large negative eigenvalue is evidence, not a complete
definition. Nonnormality, changing Jacobians, nonlinear transients, and multiple
units complicate a scalar test-equation diagnosis.

Backward Euler strongly damps very negative test modes because
\(R(z)=1/(1-z)\) tends to zero as \(z\) tends down the negative real axis.
The trapezoidal rule is A-stable but has \(R(z)=(1+z/2)/(1-z/2)\), which tends
to \(-1\). It can preserve a small alternating numerical remnant of a very stiff
mode. Both methods are stable on the left half-plane, but their stiff damping
differs.

High formal order can reduce in stiff, nonautonomous, or constrained problems,
especially with incompatible boundary or stage data. A refinement table should
therefore measure observed order in the intended regime. Fitting an order from
two coarse runs is weak evidence; use several levels and account for nonlinear
solve and reference-solution error.

## Variable steps and history management

Changing \(h\) invalidates coefficients derived for equal spacing. Production
multistep methods generate variable-step coefficients from recent time ratios,
often using divided differences or a Nordsieck vector of scaled derivatives.
Zero-stability can impose bounds on abrupt step-ratio changes. Reusing fixed-
step coefficients on a variable grid changes the method.

Each accepted value carries history. After a rejected step, event, discontinuity,
or parameter reset, the history may need reconstruction. Crossing a jump with
old derivative values can destroy formal order and create ringing. Restart with
a suitable one-step method and rebuild history.

An error controller compares a local estimate with component scales such as
\(\mathrm{atol}_i+\mathrm{rtol}_i\cdot \max(\lvert y_i\rvert,\lvert y_{i,\mathrm{new}}\rvert)\). The controller must also limit order
changes, step ratios, and repeated rejection. A requested tolerance is not an
achieved global bound.

## Implicit-step nonlinear algebra

At each implicit step, distinguish:

- prediction error in the initial Newton guess;
- nonlinear residual \(G(y)\);
- linear residual inside each Newton correction;
- Jacobian approximation or reuse error;
- time-discretization error.

Reusing a Jacobian or factorization can save work while Newton convergence is
healthy. Refresh it when convergence slows, step size changes substantially, or
the model changes. Globalization protects against a poor predictor or local
model. A failed nonlinear solve means the time step failed; silently accepting
the last iterate invalidates the error estimator.

For a scaled residual, a bound on \(\lVert G_y(y)^{-1}\rVert\) bounds the Newton correction
at the sampled iterate. Turning residual size into distance from a nonlinear
root needs a verified local error bound, for example one obtained from
inverse-function hypotheses over a neighborhood. Without that conditioning
information, a small \(\lVert G\rVert\) is only a backward statement for the step equation.

## Differential-algebraic equations

A mass-matrix system has form

\[
M(t,y)y'=F(t,y),
\]

where \(M\) may be singular. Some components then impose algebraic constraints
rather than independent evolution equations. A common semi-explicit form is

\[
y'=f(t,y,z),\qquad 0=g(t,y,z).
\]

If \(g_z\) is nonsingular near the solution, the implicit-function theorem can
locally determine \(z\) from \(t,y\). This is the standard index-one setting for
the displayed partition. The concept of DAE index depends on formulation and
regularity; higher-index constraints may require differentiation and can cause
order reduction and severe sensitivity. Algebraically equivalent reformulations
need not be numerically equivalent.

Initial values must be **consistent**. At minimum, \(g(t_0,y_0,z_0)=0\). For
higher-index systems, differentiated constraints and hidden velocity or force
conditions may also be required. Projecting an arbitrary initial point onto one
visible constraint does not prove full consistency.

## Worked index-one backward Euler step

**Example 11.3 (An index-one backward Euler step).**

Consider the specified numerical system

\[
y'=-y+z,\qquad 0=y+z-1,
\]

with consistent start \(y_0=0,z_0=1\). Backward Euler with \(h=0.1\) solves the
coupled equations

\[
\frac{y_1-y_0}{h}=-y_1+z_1,
\qquad y_1+z_1=1.
\]

Substitute \(z_1=1-y_1\):

\[
y_1=h(1-2y_1),
\qquad
y_1=\frac{h}{1+2h}=\frac1{12}.
\]

Thus \(z_1=11/12\), and the algebraic constraint is satisfied exactly in exact
arithmetic. Eliminating \(z\) gives \(y'=1-2y\), whose exact value at \(t=0.1\) is
\((1-\exp(-0.2))/2\approx 0.090635\); backward Euler gives \(0.083333\). Constraint
satisfaction and time accuracy are distinct.

If a code advances \(y\) using old \(z_0=1\) and leaves \(z\) unchanged, it gets
\(y_1=0.1,z_1=1\), violating the constraint by 0.1. Small differential-step
error cannot justify that algebraic drift.

## Coupled Newton systems for a DAE

For a backward Euler semi-explicit step, the residuals can be written

\[
R_1=y-y_n-h f(t_{n+1},y,z),
\qquad
R_2=g(t_{n+1},y,z).
\]

Newton corrections solve a block system with Jacobian

\[
\begin{pmatrix}
I-hf_y&-hf_z\\
g_y&g_z
\end{pmatrix}.
\]

Its conditioning reflects both dynamics and constraints. Scaling differential
and algebraic rows is essential when their units differ. Eliminating \(z\) via a
Schur complement can be efficient when \(g_z\) is well conditioned; near
singularity it can amplify error and signal an index or formulation problem.

For constrained mechanical systems, differentiating a position constraint can
reveal velocity and acceleration constraints. Direct integration may drift.
Projection can restore a constraint after a step, but may change order, energy,
or momentum. Stabilization parameters introduce another timescale. Report
which constraint level is enforced and what structure the correction changes.

## Events, inequality switches, and nonsmoothness

Contact, saturation, switching, or data discontinuities create nonsmooth
events. Locate an event with a bracketed root solve, advance to the event,
apply the declared reset, and restart history. Stepping over it and interpolating
a high-order history as though the solution were smooth can create false order.

Event-time error can dominate state error. Two implementations may agree at
grid points yet disagree on the switch time. Record event tolerances, direction
filters, simultaneous-event policy, and whether rejected steps reuse any stale
algebra.

## Verification and evidence ledger

For a multistep or DAE computation, record:

- formula family, order, coefficients, and variable-step representation;
- starting and restart method;
- accepted/rejected steps, order changes, and step-ratio limits;
- scaled local estimator and controller parameters;
- nonlinear iterations, Jacobian refreshes, and linear residuals;
- differential and algebraic residual histories;
- initial consistency procedure and constraint projection;
- event brackets, reset rules, and history restart;
- endpoint changes under tighter tolerance and smaller maximum step;
- a manufactured solution or independent reference when available.

For an order study, tighten inner solve tolerances enough that time error
dominates. For a stiff study, vary both tolerance and stability-limited maximum
step. For a DAE, inspect every constraint separately; a single combined norm can
hide one badly scaled violation.

## Common failure diagnostics

- **A parasitic alternating mode persists:** inspect the multistep roots,
  starting values, and step changes.
- **The solver is stable but visibly inaccurate:** the step resolves stability
  but not the transient or output scale.
- **Newton iterations increase after a step change:** refresh the Jacobian,
  improve prediction, or reduce the step.
- **Constraint residual drifts while ODE residual is small:** solve the coupled
  DAE or apply a justified projection; do not tighten only the ODE tolerance.
- **Observed order collapses:** check stiffness, nonsmooth events, inconsistent
  starts, variable-step coefficients, and inner solve error.
- **Repeated rejections reach a minimum step:** return failure with diagnostics;
  do not label the last state converged.
- **A higher BDF order becomes unstable:** compare the actual stability sector
  and step ratios with the Jacobian spectrum.
- **Restart changes the trajectory:** old history may have crossed an event or
  encoded inconsistent derivatives.


## Derivations that distinguish stability claims

A proof of zero-stability for the homogeneous fixed recurrence can be understood using its characteristic modes. A simple root $\zeta$ contributes $c\zeta^n$; a root of multiplicity $m$ contributes polynomials in $n$ of degree up to $m-1$ multiplied by $\zeta^n$. If $|\zeta|<1$, the polynomial factor is dominated by exponential decay and the mode remains bounded. A simple unit root also remains bounded. A root outside the unit circle, or a repeated unit root, supplies initial data with unbounded growth. The representation follows from the Jordan form of the finite-dimensional companion matrix. For a fixed formula the map from starting perturbations to mode coefficients is fixed, giving a uniform bound in the step index under the root condition.

That argument proves the linear homogeneous part. The full equivalence theorem additionally controls forced defects through discrete convolutions and the Lipschitz nonlinearity. We use that standard theorem as a cited result under the fixed-step and starting-value assumptions already stated. Its converse cannot be transferred to unrestricted variable-step coefficients merely because every individual coefficient set passes an isolated root test: products of changing propagation matrices require their own bound.

**Proposition 2 (BDF2 order and zero-stability).** The stated BDF2 formula is second-order consistent and zero-stable on a fixed uniform grid.

*Proof.* Expand about $t_{n+1}$:
$$
y_n=y_{n+1}-hy'_{n+1}+\tfrac12h^2y''_{n+1}
-\tfrac16h^3y'''_{n+1}+O(h^4),
$$
$$
y_{n-1}=y_{n+1}-2hy'_{n+1}+2h^2y''_{n+1}
-\tfrac43h^3y'''_{n+1}+O(h^4).
$$
Therefore $(3y_{n+1}-4y_n+y_{n-1})/(2h)
=y'_{n+1}-h^2y'''_{n+1}/3+O(h^3)$.
This is a divided defect of order two when sufficient derivatives are bounded. The characteristic polynomial is $3\zeta^2-4\zeta+1=(3\zeta-1)(\zeta-1)$; its roots are $1/3$ and the simple unit root $1$. The root condition holds. ∎

**Proposition 3 (BDF2 A-stability).** For every $\operatorname{Re}z<0$, both roots of $(3-2z)\zeta^2-4\zeta+1=0$ have modulus less than one. At $z=0$ the only unit root is simple.

*Proof.* A root is nonzero. If $|\zeta|\ge1$, put $w=1/\zeta=x+\mathrm i y$, so $x^2+y^2\le1$. The root relation gives $z=(3-4w+w^2)/2$, and hence
$$\operatorname{Re}z=\frac{3-4x+x^2-y^2}{2}
\ge(1-x)^2\ge0.$$
This contradicts a strictly negative real part. Equality with zero requires $x=1,y=0$, giving $\zeta=1,z=0$. The roots at zero are the two roots already computed. The leading coefficient does not vanish in the left half-plane. Thus the closed-half-plane scalar boundedness condition also follows. ∎

This proof concerns a fixed linear test recurrence. It does not establish positivity of every BDF2 value; the worked stiff example already disproves that broader statement. It also does not establish a good initial transient when a low-order starting step creates a large error. Both root damping and starting accuracy must be reported.

For an index-one DAE, the local reduction can be made explicit. If $g_z$ is invertible, write $z=\varphi(t,y)$ by the implicit-function theorem. Differentiating $g(t,y,\varphi(t,y))=0$ gives $\varphi_y=-g_z^{-1}g_y$. The reduced differential Jacobian is therefore
$$f_y-f_zg_z^{-1}g_y.$$
This is the same coupling that appears in the block Newton system's Schur complement. Near singular $g_z$, elimination amplifies sensitivity, so a small constraint residual need not imply a small algebraic-variable error. The condition on $g_z$ is local and does not assert global elimination or absence of other branches.

A reproducible multistep computation must store time stamps as well as values. Equal-length arrays without their actual times cannot reconstruct variable-step weights. Likewise, an event restart needs a recorded event time and reset state, rather than an unexplained shortened history. These are mathematical inputs to the formula, not merely optional logging fields.

## Practice with fully worked solutions

### Exercise 1: Compute an Adams-Bashforth value
<a id="multistep-stiff-dae-methods-ex-1"></a>

For \(y'=-2y\), \(h=0.05\),
\(y_0=1\), and exact \(y_1=\exp(-0.1)\approx 0.9048374\), compute the AB2 value \(y_2\).

<details>
<summary>Hint 1</summary>

**Hint.** Compute the stored derivative values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply the two Adams weights.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here \(f_0=-2\) and \(f_1=-1.8096748\). Therefore

\[
y_2=y_1+0.05\left(\frac32f_1-\frac12f_0\right)
=0.9048374+0.05(-2.7145122+1)
\approx0.8191118.
\]

The exact value at \(t=0.1\) after two steps is \(\exp(-0.2)\approx 0.8187308\), so the
error is about \(3.81\times 10^{-4}\).

</details>

### Exercise 2: Test zero-stability
<a id="multistep-stiff-dae-methods-ex-2"></a>

The homogeneous recurrence is
\(y_{n+2}-2y_{n+1}+y_n=0\). Show why it is not zero-stable and compute the
response to \(y_0=0,y_1=\epsilon\).

<details>
<summary>Hint 1</summary>

**Hint.** Factor the characteristic polynomial.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A repeated unit root produces growth proportional to the step index.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its polynomial is \(\rho(\zeta)=\zeta^{2}-2\zeta+1=(\zeta-1)^{2}\). The
unit root one is repeated, violating the root condition. The general solution
is \(c_1+c_2\cdot n\). The starts give \(c_1=0,c_2=\epsilon\), hence
\(y_n=n\cdot \epsilon\). Perturbation growth is unbounded as the number of steps grows.

</details>

### Exercise 3: Compute a stiff BDF2 step
<a id="multistep-stiff-dae-methods-ex-3"></a>

For \(y'=-50y\), \(h=0.1\), start with backward
Euler values \(y_0=1\) and \(y_1=1/6\). Find \(y_2\).

<details>
<summary>Hint 1</summary>

**Hint.** Collect the new value in the BDF equation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the exact starting fraction.

</details>

<details>
<summary>Solution</summary>

**Solution.** BDF2 gives
\((3-2h\cdot \lambda)y_2=4y_1-y_0\). Here
\(3-2(0.1)(-50)=13\) and \(4/6-1=-1/3\). Therefore

\(y_2=(-1/3)/13=-1/39\approx -0.025641\).

The exact value \(\exp(-10)\approx 4.54\times 10^{-5}\) is positive and much smaller. The step is
damping rather than exploding, but it does not resolve the fast mode.

</details>

### Exercise 4: Solve the index-one step
<a id="multistep-stiff-dae-methods-ex-4"></a>

For the worked DAE, repeat backward Euler with
\(h=0.25\) and \(y_0=0,z_0=1\).

<details>
<summary>Hint 1</summary>

**Hint.** Eliminate the algebraic variable.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve the reduced backward Euler equation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The coupled equations reduce to
\(y_1=h(1-2y_1)\), so

\(y_1=h/(1+2h)=0.25/1.5=1/6\).

Then \(z_1=1-y_1=5/6\). The constraint residual is exactly zero in exact
arithmetic. The exact reduced solution gives
\(y(0.25)=(1-\exp(-0.5))/2\approx 0.196735\), so constraint exactness does not imply
time exactness.

</details>

### Exercise 5: Budget an inner solve
<a id="multistep-stiff-dae-methods-ex-5"></a>

On the accepted neighborhood of a selected step
root \(y_{*}\), a verified local error bound gives
\(\lVert y-y_{*}\rVert \le 20\lVert G(y)\rVert\). To keep state error caused by the final nonlinear
residual below \(1\times 10^{-6}\), what residual bound is sufficient?

<details>
<summary>Hint 1</summary>

**Hint.** Apply the given error inequality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide the allowed error by its factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the stated residual-to-root bound. It is sufficient to
require

\(\lVert G\rVert \le 1\times 10^{-6}/20 = 5\times 10^{-8}\).

This controls algebraic error under the verified local error-bound hypothesis.
A bound on \(\lVert G_y(y)^{-1}\rVert\) only at the final iterate would instead bound the
Newton correction; by itself it would not certify distance to a nonlinear
root. The calculation says nothing about the separate time-discretization
error.

</details>

### Exercise 6: Repair history after an event
<a id="multistep-stiff-dae-methods-ex-6"></a>

A four-step formula crosses a jump in the
right-hand side at \(t=t_e\). Why is continuing with the four pre-event history
values invalid, and what is a defensible restart?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the lost smooth history.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Restart at the located event and rebuild the new branch.

</details>

<details>
<summary>Solution</summary>

**Solution.** The order derivation interpolates a smooth recent history. Values
and derivatives from before the jump represent a different local branch and
pollute the post-event formula, so fixed-step order conditions do not justify
the continuation. Bracket and locate \(t_e\), advance to it, apply the declared
state or parameter reset, then take enough steps with an appropriate one-step
method to rebuild post-event history before restoring the multistep order.

</details>

## Forward connection

Finite-volume, finite-element, and nonlinear field discretizations often
produce stiff mass-matrix or DAE systems after spatial approximation. The
numerical lessons transfer—root conditions, implicit Jacobians, consistent
constraints, and nested error budgets—without replacing the separate analysis
of the underlying differential model.


## Further exercises

### Exercise 7: BDF2 roots
<a id="multistep-stiff-dae-methods-ex-7"></a>

Compute the homogeneous BDF2 roots and explain their roles.

<details>
<summary>Hint 1</summary>

**Hint.** Set the right-hand side to zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Factor the resulting quadratic.

</details>

<details>
<summary>Solution</summary>

**Solution.** The polynomial is $(3\zeta-1)(\zeta-1)$, giving roots $1/3$ and $1$. The first is a decaying parasitic mode; the simple unit root carries the constant principal mode. Both satisfy the fixed-step zero-stability condition.

</details>

### Exercise 8: BDF2 consistency
<a id="multistep-stiff-dae-methods-ex-8"></a>

Verify $\rho(1)=0$ and $\rho'(1)=\sigma(1)$ for normalized BDF2.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\rho(\zeta)=3\zeta^2-4\zeta+1$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The matching sigma is twice zeta squared.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $\sigma(\zeta)=2\zeta^2$, one gets $\rho(1)=3-4+1=0$ and $\rho'(1)=6-4=2=\sigma(1)$. Multiplying every coefficient by the same nonzero constant does not change the method or the consistency conclusion.

</details>

### Exercise 9: Reduced DAE dynamics
<a id="multistep-stiff-dae-methods-ex-9"></a>

For $y'=-y+z$, $g=y+z-1=0$, compute the reduced Jacobian using the implicit-function formula.

<details>
<summary>Hint 1</summary>

**Hint.** Find the four scalar partial derivatives.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Substitute them into the Schur-complement expression.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $f_y=-1$, $f_z=1$, $g_y=g_z=1$, so $f_y-f_zg_z^{-1}g_y=-2$. Elimination gives $z=1-y$ and $y'=1-2y$, confirming the formula. The algebraic relation is globally solvable in this example.

</details>

### Exercise 10: Variable-grid AB2
<a id="multistep-stiff-dae-methods-ex-10"></a>

Let the current step be $h$ and the preceding step be $k>0$. Integrate the linear interpolant of derivatives through $t_n$ and $t_n-k$ over $[t_n,t_n+h]$.

<details>
<summary>Hint 1</summary>

**Hint.** Write the interpolant as $f_n+(t-t_n)(f_n-f_{n-1})/k$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Integrate its constant and linear terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** The update is $y_{n+1}=y_n+h(1+h/(2k))f_n-h^2f_{n-1}/(2k)$. At $h=k$ it becomes ordinary AB2. Reusing the fixed-step weights when $h\ne k$ generally implements a different formula and loses this interpolation derivation.

</details>

## Sources

Driscoll and Braun, [Zero-stability of multistep methods](https://fncbook.com/zerostability/) and [Stiffness](https://fncbook.com/stiffness/), give the fixed-step equivalence theorem and second Dahlquist barrier. The complete proofs of those general theorems are external dependencies; the BDF2 order, root and A-stability calculations are proved here. Hairer and Wanner's *Solving Ordinary Differential Equations II* is further reading for variable-step stiff and DAE methods; an exact edition or theorem locator for that further material is not asserted.

## Summary

History introduces several recurrence modes, so multistep convergence needs consistency and zero-stability as well as accurate starting values. BDF2 gives a concrete second-order A-stable example whose values need not remain positive. Variable steps require new coefficients and disciplined restarts. DAEs couple differential error to consistent constraints and block algebra. The next chapter uses geometric structure to choose integrators for oscillatory Hamiltonian problems.
