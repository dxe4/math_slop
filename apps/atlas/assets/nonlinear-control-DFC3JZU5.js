var e=`---
parent_id: book-control-theory
chapter_id: nonlinear-control
title: "Nonlinear Control: Energy, Coordinates and Internal Dynamics"
level: graduate
estimated_minutes: 440
license: CC BY-SA 4.0
---

# Nonlinear Control: Energy, Coordinates and Internal Dynamics

A nonlinear plant can admit effective feedback even when its linearisation loses an input direction. Conversely, a formally cancelled output equation can conceal unstable internal motion. This chapter proves local and global energy constructions, a scalar-input control-Lyapunov formula and a two-stage backstepping theorem. Exact examples identify the coordinate domains, actuator assumptions and internal dynamics behind each construction.

Preparation is [Lyapunov stability](lyapunov-stability.md), local ODE existence and the inverse-function theorem. The default plant is control-affine, $\\dot x=f(x)+g(x)u$, on an open subset of Euclidean space. The drift and input fields are locally Lipschitz, and differentiability is imposed where Lie derivatives or coordinate changes are used. An equilibrium under feedback must satisfy the closed-loop equation at the origin; a stabilizing formula cannot compensate for an incorrectly declared equilibrium.

## A feedback law also needs existence and a domain

For a locally Lipschitz feedback, the closed-loop vector field is locally Lipschitz and has unique local solutions. A proper energy sublevel on which its derivative is nonpositive can prevent escape and extend solutions forward. A continuous feedback only gives a continuous vector field; existence follows locally, but uniqueness requires an additional hypothesis. Discontinuous feedback requires a specified solution convention and a separate analysis.

These distinctions matter even for a simple formula containing division. If an input coefficient can vanish, an algebraic cancellation may define a controller only on one component of its nonzero set. A trajectory must be proved to remain in that component before the formula supplies a global result. Likewise, a coordinate transformation justified by an inverse-function theorem is initially local. Writing its inverse without a domain does not extend that theorem to all states.

Unless an actuator constraint is explicitly imposed, the controls in this chapter are real-valued and unbounded. A feedback that grows cubically with the state can satisfy a global energy theorem in that mathematical model while being infeasible for a bounded physical actuator. An invariant sublevel on which the command stays allowed can instead produce a valid local constrained statement. The derivative calculation and the feasibility calculation must cover the same trajectory region.

## Exponential stabilization survives a quadratic remainder locally

Suppose the origin is an equilibrium of the smooth plant, and its linearisation is $\\dot x=Ax+Bu$. Choose a matrix feedback $u=Kx$ for which $A+BK$ is Hurwitz. Differentiability gives the actual closed-loop form $(A+BK)x+r(x)$, with $\\|r(x)\\|/\\|x\\|$ tending to zero at the origin. Let $P\\succ0$ solve a quadratic Lyapunov equation with right-hand side minus identity. Then

$$\\dot V=-\\|x\\|^2+2x^TPr(x).$$

In a sufficiently small ball the remainder norm is at most $\\|x\\|/(4\\|P\\|)$, so the derivative is at most minus half the squared norm. Choose an energy ellipsoid contained in that ball. Its boundary cannot be crossed outward, and norm equivalence gives exponential convergence. The proof therefore supplies a local result even when the feedback is linear; it does not require exact cancellation of the nonlinear terms.

A stabilizable linearisation is sufficient for this construction, but not necessary for nonlinear controllability. A missing first-order direction can arise through sequential motions. Conversely, an unstable uncontrollable linear mode rules out exponential stabilization by a differentiable feedback whose first-order closed-loop matrix retains that mode. This is a statement about that feedback regularity and that exponential criterion, not an unrestricted impossibility theorem for every nonlinear or time-dependent controller.

### Worked example: a pendulum near one orientation

For angle and angular velocity satisfying $\\dot q=v$, $\\dot v=-\\sin q+u$, the input enters the second derivative with coefficient one. The cancellation feedback $u=\\sin q-aq-bv$, with positive constants, gives the exact linear equation $\\ddot q+b\\dot q+aq=0$ when the angle is represented on the real line. Thus every real initial angle converges to zero in that unwrapped mathematical model.

On the physical circle, the command proportional to the unwrapped angle is not a single-valued continuous function of the physical orientation. A local angular chart around the chosen orientation makes it a valid local controller. The distinction is topological, not a failure of the algebra. A global physical feedback requires a consistent angle representation, possibly memory or switching, and a theorem matching that representation.

For bounded torque one can select a sufficiently small quadratic closed-loop energy ellipsoid so that the cancellation command remains within its limit. Continuity of the command and its zero value at the target ensure such a neighbourhood exists when the bound is positive. Invariance of the ellipsoid then proves that saturation never activates there. Outside it, replacing the command by a saturation creates a different nonlinear equation, so the exact linear convergence proof no longer applies unchanged.

## Control-Lyapunov decrease chooses a direction before a formula

Let $V$ be continuously differentiable and positive definite, and write $a(x)=\\nabla V(x)f(x)$ and $b(x)=\\nabla V(x)g(x)$ for a scalar input. At a nonzero state, some unconstrained input makes the energy derivative negative exactly when either $b$ is nonzero or $a$ is already negative. A control-Lyapunov function has this property at every nonzero state in its declared domain.

The simple condition reveals what happens where the input cannot instantaneously change the energy. At a point with $b=0$, the drift must already decrease it. Increasing feedback gain cannot repair a positive drift derivative at that point using this particular energy. A different energy, a different control architecture or a weaker convergence criterion may be needed.

For a scalar unconstrained input define

$$k(x)=\\begin{cases}
-\\dfrac{a(x)+\\sqrt{a(x)^2+b(x)^4}}{b(x)},&b(x)\\ne0,\\\\
0,&b(x)=0.
\\end{cases}$$

Where the denominator is nonzero, substitution gives $a+bk=-\\sqrt{a^2+b^4}<0$. At a nonzero point with zero denominator, the control-Lyapunov condition gives $a<0$, and the chosen zero input still decreases the energy. Thus the formula proves a strict pointwise derivative inequality on the punctured domain.

Continuity across a nonzero zero-denominator point follows by rationalizing the numerator. In a neighbourhood where $a$ remains negative, its expression becomes $b^4/(\\sqrt{a^2+b^4}-a)$, and after division by $b$ the feedback tends to zero cubically in $b$. This proof identifies why the sign of the drift at such a point is essential; treating the formula as ordinary division by zero would hide its removable limit.

At the origin a further small-control condition is needed. It says that for every positive command tolerance there is a state neighbourhood in which each nonzero state admits some command smaller than that tolerance making the derivative negative. If $b\\ne0$ and $a>0$, this implies $a/|b|$ tends to zero near the origin: any decreasing command has magnitude greater than that ratio. If $a\\le0$, rationalization bounds the formula's magnitude by $|b|$. If $a>0$, the inequality $\\sqrt{a^2+b^4}\\le a+b^2$ bounds it by $2a/|b|+|b|$. Continuity of $b$, its zero value at the equilibrium, and the small-control property therefore show $k(x)\\to0$.

Continuity is only the first part of a feedback theorem. Under regularity making the resulting closed-loop field locally Lipschitz, strict energy decrease gives local asymptotic stability by the usual compact-annulus argument. If the energy is proper on the whole space, its sublevels are compact and forward invariant, so solutions are global and the same argument gives global attraction. If only continuity is known, one must state existence and the solution interpretation separately rather than claim uniqueness from the formula alone.

### Worked example: a cubic drift with and without an actuator limit

For $\\dot x=x^3+u$, choose $V=x^2/2$. Here $a=x^4$ and $b=x$, so the preceding formula can be written, away from zero, as $-x^3-x\\sqrt{x^4+1}$. It extends smoothly through zero. The closed-loop derivative is $-x\\sqrt{x^4+1}$, and the energy derivative is strictly negative away from zero. The proper quadratic energy prevents escape and proves global asymptotic stability for the unbounded actuator model.

There is also a simpler cancellation feedback $u=-x^3-x$, producing exact exponential decay. Its command magnitude grows cubically. If the actuator magnitude is bounded by $M$, then for any positive state with $x^3>M$ the derivative remains positive under every allowed input. No allowed controller can make the state move towards zero at those states. In particular no global attraction theorem on the entire real line is possible for that bounded-input plant.

On a symmetric interval where $|x|^3+|x|\\le M$, the simpler feedback is admissible and the closed-loop decay keeps the state in the interval. This supplies a constrained local result directly. Saturating the global formula outside that interval is a possible implementation choice, but it does not enlarge the proved region merely by leaving the formula well defined.

## Backstepping converts a virtual action into a real one

Consider the smooth strict-feedback system

$$\\dot x=f(x)+gz,\\qquad \\dot z=u,$$

where $x$ may be a vector, $z$ is scalar and the constant vector $g$ has compatible dimension. Suppose a smooth virtual feedback $z=\\alpha(x)$ and a positive definite proper energy $W(x)$ satisfy

$$\\nabla W(x)[f(x)+g\\alpha(x)]\\le-\\sigma(x),$$

with continuous positive definite $\\sigma$. Assume $\\alpha(0)=0$ and the origin is the intended equilibrium. Define the tracking error $e=z-\\alpha(x)$ and total energy $V=W+e^2/2$. The first subsystem contributes at most $-\\sigma+e\\nabla Wg$. The error derivative is $u-D\\alpha(x)[f(x)+gz]$. Choose

$$u=D\\alpha(x)[f(x)+gz]-\\nabla W(x)g-ce,\\qquad c>0.$$

The cross terms cancel exactly and give $\\dot V\\le-\\sigma(x)-ce^2$. This calculation is the backstepping mechanism: the real input forces the extra state to track a virtual stabilizing input while compensating for the derivative of that desired input. Omitting the derivative term generally leaves an uncancelled drift in the error equation.

The map between $(x,z)$ and $(x,e)$ is globally invertible with inverse $z=e+\\alpha(x)$. A bounded energy sublevel bounds $x$ by properness of $W$, bounds $e$, and then bounds $z$ by continuity of $\\alpha$ on that bounded compact state region. Thus the total energy is proper in the original coordinates too. With smooth data the closed-loop is locally Lipschitz, compact sublevels prevent escape, and strict decrease gives global asymptotic stability.

For state-dependent nonzero input coefficients one can adapt the construction by dividing by those coefficients, but the domain and lower bounds need to be stated. Higher-order strict-feedback chains repeat the same idea with more error coordinates. The algebra grows because each virtual control must be differentiated through the preceding dynamics. Those extensions are not implied merely by writing the two-stage formula for a system that lacks the required triangular structure.

### Worked example: a cubic first stage

For $\\dot x=x^3+z$, $\\dot z=u$, take virtual input $\\alpha=-x^3-x$ and $W=x^2/2$. The virtual system is $\\dot x=-x$, so its energy derivative is $-x^2$. Define $e=z+x^3+x$. Backstepping gives

$$u=(-3x^2-1)(x^3+z)-x-ce.$$

Direct differentiation gives $\\dot V=-x^2-ce^2$ for $V=x^2/2+e^2/2$. The coordinate map is global and the energy proper, proving global asymptotic stability in the unbounded-input model. The polynomial command can become large; a bounded actuator restricts the theorem to an invariant sublevel on which its magnitude is allowed.

This construction differs from trying to force $z$ instantly to the virtual input. The extra integrator means $z$ cannot jump, so the tracking error stores an additional transient. Its energy and cross-term cancellation are what control that transient. At a state with $x=0$ but $z\\ne0$, the first-stage energy derivative alone vanishes; the augmented energy still decreases through its error term. This is why stabilizing the virtual subsystem was only the first step.

## Input-output cancellation can leave an unstable hidden subsystem

For a smooth output $y=h(x)$, differentiate along the plant. If the input first enters the rth derivative with a nonzero coefficient, the output has relative degree r on that region. Write that derivative as $a(x)+b(x)u$. Feedback $u=(v-a)/b$ produces the chosen linear output equation as long as the trajectory remains in the region where the coefficient is nonzero and the derivatives define valid coordinates.

If the relative degree equals the state dimension and the output-derivative map is locally invertible, this is a local full-state coordinate transformation and linearization. If the relative degree is smaller, internal coordinates remain. Their dynamics when the output and its required derivatives are constrained to zero are the zero dynamics. Stable output error does not force those internal coordinates to converge unless their dynamics support that conclusion.

For example consider $\\dot x_1=u$, $\\dot x_2=x_2+x_1^2$ and output $y=x_1$. Choosing $u=-x_1$ makes the measured output decay exponentially. But from $x_1=0$, a nonzero second state grows as $e^t x_2(0)$. The zero dynamics are unstable and the full state is not stabilized. There is no contradiction: the controller achieved only the output equation it was designed to impose.

Changing the output can change the relative degree and zero dynamics, so these are properties of the input-output choice, not just an unordered list of plant poles. Exact cancellation also relies on the drift model; an unknown term remains as a forcing in the designed equation. An energy robustness estimate can bound such an error on a declared region, whereas algebraic cancellation alone supplies no tolerance to it.

## Sequential motions can create a missing direction

The drift-free system $\\dot x_1=u_1$, $\\dot x_2=u_2$, $\\dot x_3=x_1u_2-x_2u_1$ has a linearisation at the origin whose third component cannot be actuated. Nevertheless move first in the first coordinate, then in the second, then reverse the first move and reverse the second. A rectangular loop of side lengths $a$ and $b$ returns the first two coordinates to their starting values and changes the third by $2ab$, with sign controlled by loop orientation.

This exact computation proves a nonlinear reachability mechanism missing from the linearised model. For small target third displacement the loop sides scale with its square root, so intermediate excursions can be larger than the final displacement. Reachability with bounded controls, minimum transfer time and stabilization by a smooth static law remain separate questions.

Brockett's necessary condition is a named input here: under its smooth finite-dimensional hypotheses, smooth time-independent asymptotic stabilization requires an openness condition on the plant's state/input velocity map near the equilibrium. The nonholonomic system violates it, so the reachability loop does not imply existence of that particular feedback class. Time-dependent, discontinuous or hybrid controllers require their own hypotheses and solution conventions. The exact loop calculation above is direct; the general topological obstruction is not claimed as proved by it.

## Exercises with staged help

### 1. A local remainder certificate

Suppose $\\dot x=A_cx+r(x)$, $A_c^TP+PA_c=-I$, and $\\|r(x)\\|\\le L\\|x\\|^2$ on a ball. Find a radius giving $\\dot V\\le-\\|x\\|^2/2$.

<details><summary>Hint 1</summary>

Bound the cross term with the operator norm of the energy matrix.

</details>
<details><summary>Hint 2</summary>

Require its cubic upper bound to be at most half the quadratic loss.

</details>
<details><summary>Full solution</summary>

The derivative is at most $-\\|x\\|^2+2\\|P\\|L\\|x\\|^3$. Any radius at most $1/(4\\|P\\|L)$ within the stated ball works when $L>0$. If $L=0$ there is no restriction from this remainder. To obtain an invariant neighbourhood, choose an energy ellipsoid contained in that ball rather than assuming the ball itself is invariant.

</details>

### 2. A failed energy choice

For the scalar plant $\\dot x=x+u x^2$, can $V=x^2/2$ be a control-Lyapunov function on the punctured real line? What input size is required near zero to decrease it?

<details><summary>Hint 1</summary>

Compute the drift and input contributions to the energy derivative.

</details>
<details><summary>Hint 2</summary>

Divide the strict decrease condition by the positive squared state.

</details>
<details><summary>Full solution</summary>

Here $a=x^2$ and $b=x^3$, nonzero at every nonzero state, so some unbounded input decreases the energy pointwise. But the condition is $1+ux<0$, requiring input magnitude greater than $1/|x|$. The small-control property fails. In particular the pointwise control-Lyapunov condition alone does not give a continuous stabilizer vanishing at the origin through the stated formula.

</details>

### 3. Rationalizing the formula

At a point where $a<0$ and $b$ tends to zero, prove the universal formula tends to zero.

<details><summary>Hint 1</summary>

Multiply numerator and denominator by the conjugate expression.

</details>
<details><summary>Hint 2</summary>

The remaining denominator stays bounded away from zero near the chosen point.

</details>
<details><summary>Full solution</summary>

The numerator $a+\\sqrt{a^2+b^4}$ equals $b^4/(\\sqrt{a^2+b^4}-a)$. The feedback is therefore $-b^3/(\\sqrt{a^2+b^4}-a)$, which tends to zero because the denominator tends to $-2a>0$. This establishes continuity across a nonzero point with zero input-energy derivative and strictly negative drift-energy derivative.

</details>

### 4. A bounded cubic actuator

For $\\dot x=x^3+u$, $|u|\\le2$, give an invariant interval for $u=-x^3-x$ and show why no bounded-input law globally attracts every positive state.

<details><summary>Hint 1</summary>

Check the cancellation command on the unit interval.

</details>
<details><summary>Hint 2</summary>

For sufficiently large positive state, even the most negative input cannot reverse the drift.

</details>
<details><summary>Full solution</summary>

On $[-1,1]$ the command magnitude is at most two and the exact closed-loop is $\\dot x=-x$, which preserves that interval. If $x>\\sqrt[3]{2}$, every allowed input gives positive derivative. Starting there the state cannot move back through that boundary towards zero; indeed it remains increasing while the solution exists. Thus the local admissible controller has no global attraction consequence for the bounded-input plant.

</details>

### 5. Backstepping cancellation

For $\\dot x=z$, $\\dot z=u$, take virtual law $\\alpha=-x$ and $W=x^2/2$. Derive the backstepping feedback with error gain one.

<details><summary>Hint 1</summary>

The error is $e=z+x$.

</details>
<details><summary>Hint 2</summary>

Include the derivative of the virtual law and the energy cross-term cancellation.

</details>
<details><summary>Full solution</summary>

The formula gives $u=-z-x-e=-2x-2z$. Since $\\dot x=-x+e$ and $\\dot e=-x-e$, the derivative of $(x^2+e^2)/2$ is $-x^2-e^2$. The closed-loop matrix has characteristic polynomial $s^2+2s+2$, consistent with exponential convergence. Omitting the virtual-law derivative would produce a different error equation.

</details>

### 6. Properness after backstepping

Prove that $W(x)+(z-\\alpha(x))^2/2$ has compact sublevels if $W$ is proper and continuous and $\\alpha$ is continuous.

<details><summary>Hint 1</summary>

A sublevel first bounds the original state through the first term.

</details>
<details><summary>Hint 2</summary>

Continuity bounds the virtual command on the resulting compact set.

</details>
<details><summary>Full solution</summary>

A fixed sublevel bounds $W$, placing $x$ in a compact set. It also bounds the error $z-\\alpha(x)$. The continuous virtual command is bounded on that compact set, hence $z$ is bounded too. The sublevel is closed by continuity and bounded in finite dimensions, so it is compact. This is the forward-completeness ingredient used with the derivative estimate.

</details>

### 7. An unstable zero dynamics

For $\\dot x_1=u$, $\\dot x_2=x_2+x_1^2$, prove that stabilizing the output $x_1$ does not stabilize the full state under $u=-x_1$.

<details><summary>Hint 1</summary>

Use initial output equal to zero.

</details>
<details><summary>Hint 2</summary>

That output stays zero while the internal equation simplifies.

</details>
<details><summary>Full solution</summary>

With $x_1(0)=0$, the feedback keeps $x_1=0$ forever. The remaining equation is $\\dot x_2=x_2$, so every nonzero internal initial state grows exponentially. Arbitrarily small such states leave a fixed neighbourhood. Therefore the origin of the full system is unstable despite exact output regulation.

</details>

### 8. A singular cancellation region

For $\\dot x=xu$ and desired equation $\\dot x=-x+1$, what is the cancellation feedback and why is it not a global controller on the real line?

<details><summary>Hint 1</summary>

Solve for the input away from the zero coefficient.

</details>
<details><summary>Hint 2</summary>

At zero, every finite input gives the same plant velocity.

</details>
<details><summary>Full solution</summary>

Away from zero the command is $u=-1+1/x$. It is singular at zero, where the actual plant has zero derivative under every finite input while the desired equation asks for derivative one. No finite extension can implement that desired equation there. Even a local result away from zero must show the trajectory remains in the command's domain.

</details>

### 9. A nonholonomic loop

Starting at the origin, apply the four rectangular motions of side lengths $a,b$ in the nonholonomic example. Compute the third-coordinate change on each leg.

<details><summary>Hint 1</summary>

Use $dx_3=x_1dx_2-x_2dx_1$.

</details>
<details><summary>Hint 2</summary>

Only the second and third legs contribute for this ordering.

</details>
<details><summary>Full solution</summary>

The first leg has second coordinate zero and gives zero. The second has first coordinate $a$ and contributes $ab$. The third has second coordinate $b$ and first displacement minus $a$, contributing another $ab$. The fourth has first coordinate zero and contributes zero. The net third displacement is $2ab$ while the first two return to zero. Reversing orientation reverses the sign.

</details>

### 10. A claim about global linearization

Repair the claim that a relative-degree calculation always proves global full-state exponential stabilization.

<details><summary>Hint 1</summary>

List the domain conditions behind division and the coordinate map.

</details>
<details><summary>Hint 2</summary>

If the relative degree is smaller than the dimension, some coordinates remain internal.

</details>
<details><summary>Full solution</summary>

State that the cancellation produces the selected output equation on the region where its input coefficient is nonzero and the required coordinate map is valid. Full-state stabilization additionally requires control of internal dynamics, admissible feedback and forward existence. Global exponential stabilization needs global coordinate and norm estimates as well as a global trajectory domain. A local inverse-function theorem and a stable output polynomial alone prove none of those global additions.

</details>

## Sources and onward reading

Sontag, *Mathematical Control Theory*, develops control-Lyapunov functions and nonlinear feedback; Khalil, *Nonlinear Systems*, treats relative degree, zero dynamics and backstepping. The universal scalar-input formula and the named Brockett obstruction have different hypotheses and conclusions. Here the formula's energy and continuity calculations, the two-stage backstepping proof and the loop displacement are direct arguments. The general topological obstruction is an explicitly named further theorem. Continue to [Kalman filtering](kalman-filtering.md) for estimation under a probabilistic information model.
`;export{e as default};