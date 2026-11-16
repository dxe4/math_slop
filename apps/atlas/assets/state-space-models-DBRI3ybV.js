var e=`---
parent_id: book-control-theory
chapter_id: state-space-models
title: "State-Space Models: Inputs, Information and Interconnection"
level: graduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# State-Space Models: Inputs, Information and Interconnection

A control model must say what can be chosen, what evolves, what is measured and what information is available when a choice is made. An equation alone does not establish those roles. This chapter defines a state-space contract, proves the well-posedness and coordinate statements needed to use it, and derives linear models with their local approximation limits.

Preparation is the ODE integral formulation, local Lipschitz uniqueness, the multivariable chain rule and finite-dimensional linear algebra. State estimation, controllability and optimal design are developed later. Here the objective is to know exactly which mathematical system those later arguments concern.

## State, input and measured output have different roles

Write a finite-dimensional model as $x'=f(t,x,u)$ and $y=h(t,x,u)$. The state is the information about the past needed to determine future state and output once the future input is supplied. The input is an admissible external choice or forcing; the measured output is the specified function of state and possibly current input. The state dimension, input dimension, output dimension, time domain and state domain belong to the model.

For a deterministic well-posed state equation, two histories reaching the same state at the same time have the same future under the same future input. This follows from uniqueness. Equal measured outputs do not imply equal states or equal futures. In a double integrator, two particles can have the same position and different velocities. A position-only observation merges their current readings while their future positions immediately differ under the same applied acceleration.

An incomplete summary should not be called a state merely because it is convenient to plot. Outstanding inventory orders need their arrival schedule; a delayed feedback law may need a history segment; a hysteretic material may need an internal variable. Some such models have a finite augmented state, while others are genuinely infinite dimensional. A state choice is a modeling assertion about sufficient information.

## Admissible inputs determine the solution class

Inputs can be continuous, piecewise continuous or merely measurable with local integrability bounds. These choices affect the meaning of the differential equation. With a jump in an input, the state may remain continuous while its derivative jumps, so a globally continuously differentiable state is too restrictive. The natural statement is then an absolutely continuous state satisfying its integral equation and the differential equation almost everywhere.

For a precise local existence setup, assume the input is measurable and essentially bounded on each finite time interval. Suppose the composed field is measurable in time, continuous in state, bounded by an integrable function on each compact state region, and Lipschitz in state there with an integrable time-dependent bound. On a sufficiently short interval, the integral of that Lipschitz bound is below one. The Volterra integral map is a contraction on a closed uniform path ball, with self-mapping supplied by the integrable field bound. It gives a unique continuous fixed point; its integral representation makes it absolutely continuous and gives the equation almost everywhere.

Continuation concatenates such intervals while the state remains in a compact subset of the domain. A linear-growth bound gives global existence on every finite input interval. These are Carathéodory solution assumptions. Continuous input and a continuous field recover the classical continuously differentiable case. An impulse model requires a different input and jump convention; a Dirac impulse is not an ordinary locally integrable function to which this statement can be applied unchanged.

For a linear system with constant real matrices,

$$x'=Ax+Bu,\\qquad y=Cx+Du,$$

the solution exists globally for locally integrable input and finite initial state. The state is absolutely continuous. The term $Du$ is direct feedthrough: it can make the measured output jump when the input jumps, even though the stored state does not. A measurement protocol must specify which of these quantities it records and at what time.

## Coordinate changes preserve a state model when their inverse is retained

For an invertible constant state transformation $z=Tx$, differentiation gives the transformed matrices

$$\\widetilde A=TAT^{-1},\\quad\\widetilde B=TB,\\quad
\\widetilde C=CT^{-1},\\quad\\widetilde D=D.$$

The input and output remain the same physical objects. Initial states must transform as well. These identities prove a one-to-one correspondence of state trajectories and preserve every input-output response under the corresponding initial condition. Matrix entries change, but a mere coordinate change has not created a different plant.

A nonlinear state diffeomorphism uses the chain rule: the new velocity is the coordinate Jacobian times the old velocity, evaluated through the inverse state map. The output must be transformed through that inverse too. Local invertibility gives only a local state chart; a singular transformation cannot be used at the singular state without further analysis.

Discarding coordinates is not an invertible change. A proposed reduced state must have a closed evolution: two original states with the same summary must give the same summary velocity under the same input. Position alone in a double integrator fails that condition because its velocity depends on the omitted component. A lower-dimensional model may still be a useful approximation, but its validity needs an approximation argument rather than an inverse-coordinate identity.

## A mechanical model keeps force and position units explicit

**Worked example: mass, damping and a spring.** Let a positive mass move under a spring with positive stiffness, nonnegative viscous damping and applied force input. Using displacement and velocity as state gives

$$
\\begin{pmatrix}q'\\\\v'\\end{pmatrix}
=\\begin{pmatrix}0&1\\\\-k/m&-c/m\\end{pmatrix}
\\begin{pmatrix}q\\\\v\\end{pmatrix}
+\\begin{pmatrix}0\\\\1/m\\end{pmatrix}u,
\\qquad y=\\begin{pmatrix}1&0\\end{pmatrix}\\begin{pmatrix}q\\\\v\\end{pmatrix}.
$$

The input is force, not acceleration; the mass factor converts it. Position output has no direct feedthrough. For a constant reference force, the equilibrium displacement is that force divided by stiffness and the equilibrium velocity is zero. Shifting both the state and input to deviations leaves the same linear matrices.

The stored mechanical energy is mass times velocity squared over two plus stiffness times displacement squared over two. Its derivative is input force times velocity minus the damping loss. If the chosen output were velocity instead, that input-output pair would display the power balance directly. Position sensing and power-conjugate velocity output are different measurement choices for the same state dynamics.

An impulsive force changes momentum discontinuously. It is outside the locally integrable force class used above unless a measure-input interpretation is supplied. One can model it by a declared velocity jump equal to impulse divided by mass, then restart the ordinary evolution. A solver that silently smooths an impulse solves a modified input problem.

## A physical domain can terminate a bounded state trajectory

**Worked example: variable-volume mixing.** Let the state be positive fluid volume and solute mass. With inflow, outflow and inflow concentration as inputs, perfect mixing gives

$$V'=q_{\\rm in}-q_{\\rm out},\\qquad
m'=q_{\\rm in}c_{\\rm in}-q_{\\rm out}\\frac mV,
\\qquad y=\\frac mV.$$

The state domain includes the strict condition of positive volume. Local uniqueness holds away from zero volume under the stated input regularity, but a draining trajectory can reach the domain boundary with bounded volume and mass. A global theorem on all of Euclidean state space is therefore not available just because the formula looks smooth at ordinary operating points.

On the positive-volume domain, concentration and volume form an alternative state chart. Substituting mass equal to volume times concentration and differentiating gives concentration velocity equal to inflow divided by volume times the difference between incoming and current concentration. Outflow cancels from that displayed concentration equation, but still changes volume and therefore later concentration response. Dropping volume while claiming the same state model would lose that dependence.

Two tanks with the same present concentration and different volumes generally react differently to the same inflow. Concentration is a measured output; it is not by itself sufficient state information in this variable-volume model. The example also shows why a sensor's smooth output formula and the state equation share a domain restriction.

## Stored energy and direct feedthrough need not coincide

**Worked example: an electrical storage element.** For a capacitor with positive capacitance and a positive parallel resistance, use charge as state and applied current as input. Its equation is charge velocity equal to input minus charge divided by the resistance-capacitance product. The capacitor voltage is charge divided by capacitance. The stored energy is charge squared over twice capacitance, and its derivative is capacitor voltage times input current minus squared capacitor voltage divided by resistance.

If the measured terminal voltage additionally includes a nonnegative series resistance times the input current, that measurement has direct feedthrough. The added series term changes the measured output without adding an independent storage state in this ideal model. The energy derivative is then no larger than input current times measured voltage, with the difference representing the additional nonnegative resistance term.

This balance is a conditional statement about the chosen port and ideal elements. It does not infer parameter values or rule out omitted dynamics in a real circuit. It prepares passivity reasoning later while showing that the output matrix and feedthrough term have physical roles rather than being arbitrary array positions.

## Linearisation is a finite local approximation

For an autonomous smooth model, choose a constant operating state and input satisfying the equilibrium equation. Write deviations from them. The first derivatives give matrices $A=f_x$, $B=f_u$, $C=h_x$ and $D=h_u$ evaluated at that operating pair. The deviation model is its linear part plus remainder terms.

With two continuous derivatives and a uniform second-derivative bound in a neighbourhood, the multivariable Taylor remainder is bounded by a constant times the squared norm of the combined state/input deviation. With only one continuous derivative, the justified remainder is little-o of the deviation norm; a quadratic bound cannot be assumed without stronger regularity.

Compare the nonlinear and linearised state responses to the same small input deviation and matching initial state. Subtracting their equations leaves the linear matrix acting on the state error plus the nonlinear remainder evaluated on the nonlinear trajectory. If both state and input deviations remain uniformly below a small scale on a fixed horizon, Gronwall bounds the difference by a constant times that scale squared times the corresponding finite-horizon exponential factor. The constants require a common neighbourhood; the estimate stops when the nonlinear path leaves it.

This proves a finite-time approximation. It is not a uniform infinite-time or global constraint theorem. Linearisation about a nonstationary reference trajectory instead gives time-dependent derivative matrices and requires subtracting that actual reference solution. Subtracting an arbitrary curve introduces its equation defect as another forcing term.

## Feedback must define a closed equation before it can stabilise one

A feedback law must use information available at the time of actuation. State feedback requires an available state or an explicitly analysed estimator. Output feedback uses the measured output and possibly an internal controller state. A policy that selects an earlier action after inspecting a future disturbance is a hindsight construction, not an admissible causal controller under the usual information pattern.

Direct feedthrough can create an algebraic loop. For the static law $u=-Ky$ and plant output $y=Cx+Du$, eliminating the output gives

$$ (I+KD)u=-KCx.$$

If the displayed matrix is invertible, this defines a unique instantaneous input and hence a closed state equation. If it is singular, there may be no compatible input or more than one. In a scalar example with output equal to state minus input and feedback input equal to minus output, compatibility requires the state to be zero; away from it no instantaneous solution exists. With output simply minus input, the same feedback equation imposes no restriction on input at all, so a plant whose state velocity is that input has no unique closed evolution.

For a nonlinear feedthrough relation, a local implicit-function argument requires an invertible derivative with respect to the unknown input. This well-posedness question comes before stability or performance. A gain that gives attractive eigenvalues after an invalid algebraic elimination has not defined a controller for the original interconnection.

## Admissibility includes constraints and implementation meaning

An amplitude-bounded input need not keep the state in its safe region. For the scalar integrator with input magnitude at most one and state required at most one, a constant positive input starting just below the boundary violates the state constraint after a short time. Input and state constraints are joint restrictions on admissible trajectories. A nominal model on all real states may describe mathematical continuation beyond a physical limit without authorising it.

Two state realisations can also have the same input-output responses without being related by an invertible same-dimensional coordinate change. Appending an unobserved autonomous decaying state changes the state dimension but leaves a zero-initial input-output map unchanged. Minimal realisation questions require controllability and observability, developed later. Presenting one realisation does not prove it is the unique internal mechanism.

The model contract should therefore record state and input domains, solution class, initial-state convention, measured output, information timing, algebraic compatibility and constraints. These are mathematical assumptions needed by later design theorems. Keeping them explicit lets a control calculation address the intended system rather than an accidentally altered set of trajectories.

## Exercises with staged hints and full solutions

<a id="state-space-models-ex-1"></a>
### Exercise 1: an insufficient observation

Two double-integrator states have position zero and velocities one and two. Under zero input, compare their position outputs at later time and explain why position alone is not a state.

<details><summary>Hint 1</summary>

Zero acceleration preserves each initial velocity.

</details>
<details><summary>Hint 2</summary>

Equal proposed states and equal future inputs would have to give equal futures in a closed deterministic state model.

</details>
<details><summary>Full solution</summary>

The positions are $t$ and $2t$. Their initial outputs agree, but later outputs differ under the same zero input. A position-only summary omits velocity, which determines its derivative. Augmenting with velocity restores the ordinary state description. The output can still be position alone; observability from a time history is a different later question.

</details>

<a id="state-space-models-ex-2"></a>
### Exercise 2: a step input

For $x'=u$, zero initial state and an input jumping from zero to one at time one, describe state regularity and the equation's meaning.

<details><summary>Hint 1</summary>

Integrate the input rather than requiring a continuous derivative everywhere.

</details>
<details><summary>Hint 2</summary>

The state has a corner at the jump time but remains continuous.

</details>
<details><summary>Full solution</summary>

The state is zero up to time one and $t-1$ afterward. It is absolutely continuous and satisfies the equation almost everywhere, but is not continuously differentiable across the input jump. Changing the input's assigned value at that one time does not change its integral solution. If the output has a nonzero feedthrough coefficient, that output can jump as well.

</details>

<a id="state-space-models-ex-3"></a>
### Exercise 3: scale a scalar state

For $x'=-2x+3u$, $y=4x+u$, set $z=5x$. Find the transformed matrices and initial-state map.

<details><summary>Hint 1</summary>

Multiply the state equation by five and replace the old state using the inverse map.

</details>
<details><summary>Hint 2</summary>

The input and output units themselves have not been changed.

</details>
<details><summary>Full solution</summary>

The transformed equation is $z'=-2z+15u$ and output is $y=(4/5)z+u$. The new initial state is five times the old initial state. The feedthrough remains one. These formulas preserve every input-output response with corresponding initial data; keeping the old output coefficient four would instead describe a different measured quantity.

</details>

<a id="state-space-models-ex-4"></a>
### Exercise 4: concentration coordinates

Derive the concentration equation in the variable-volume model and identify its domain.

<details><summary>Hint 1</summary>

Differentiate the quotient of mass by volume.

</details>
<details><summary>Hint 2</summary>

Insert both balance laws before cancelling outflow terms.

</details>
<details><summary>Full solution</summary>

Writing concentration as $c=m/V$ gives $c'=(m'V-mV')/V^2=q_{\\rm in}(c_{\\rm in}-c)/V$. The transformation between $(V,m)$ and $(V,c)$ is invertible only for positive volume. Outflow cancels from this formula but changes the remaining volume equation, so it can still affect future concentration response. Eliminating volume altogether is not an equivalent state transformation.

</details>

<a id="state-space-models-ex-5"></a>
### Exercise 5: mechanical operating point

For positive stiffness and constant force $F$, compute the mass-spring-damper equilibrium and its position output.

<details><summary>Hint 1</summary>

At equilibrium both displacement velocity and acceleration vanish.

</details>
<details><summary>Hint 2</summary>

The damping term vanishes there, leaving the spring balance.

</details>
<details><summary>Full solution</summary>

Velocity is zero and spring force balances the input, so displacement is $F/k$. The position output is that displacement. The mass and damping affect transients but not this static balance. Shifting the input by $F$ and the displacement by $F/k$ gives the same deviation matrices. This assumes positive stiffness; with zero stiffness the same nonzero force has no constant-position equilibrium.

</details>

<a id="state-space-models-ex-6"></a>
### Exercise 6: a well-posed algebraic loop

For scalar output $y=2x+3u$ and feedback $u=-ky$, determine when instantaneous input is uniquely defined.

<details><summary>Hint 1</summary>

Substitute the output into the feedback equation.

</details>
<details><summary>Hint 2</summary>

The coefficient on the unknown input must be nonzero.

</details>
<details><summary>Full solution</summary>

The equation is $(1+3k)u=-2kx$. For $k\\ne-1/3$ it gives one input $u=-2kx/(1+3k)$. At the excluded gain, compatibility requires $x=0$; at nonzero state there is no solution, and at zero state the instantaneous equation alone leaves the input undetermined. Algebraic compatibility must therefore be checked before computing a closed-loop stability matrix.

</details>

<a id="state-space-models-ex-7"></a>
### Exercise 7: a nonlinear linearisation

Linearise $x'=-x+x^2+u$ and $y=x^2+u$ at the zero state and zero input, and state the exact remainders.

<details><summary>Hint 1</summary>

Differentiate each expression with respect to state and input at the operating pair.

</details>
<details><summary>Hint 2</summary>

The quadratic state term has zero first derivative there.

</details>
<details><summary>Full solution</summary>

The matrices are $A=-1$, $B=1$, $C=0$, $D=1$. Both state and output remainders are exactly $x^2$. Thus the linearised measured output contains no first-order state information at zero, even though the nonlinear output depends on state. The approximation is local; the positive quadratic state term also creates behavior away from zero that the stable linear coefficient does not describe globally.

</details>

<a id="state-space-models-ex-8"></a>
### Exercise 8: an unobserved appended state

Append $w'=-w$ to the integrator $x'=u$, $y=x$. Why does this preserve its input-output map while changing its realisation?

<details><summary>Hint 1</summary>

The new coordinate enters neither the old state equation nor the measured output.

</details>
<details><summary>Hint 2</summary>

An invertible coordinate change cannot change the state dimension.

</details>
<details><summary>Full solution</summary>

For corresponding initial $x$, every input gives exactly the same $x$ and output, regardless of the appended coordinate's value. The augmented system has two state coordinates instead of one, so it is not related to the original by an invertible same-dimensional state transformation. It contains an unobserved internal mode. Input-output agreement alone therefore does not prove a unique or minimal internal model.

</details>

<a id="state-space-models-ex-9"></a>
### Exercise 9: admissible input versus safe state

For $x'=u$, $x(0)=0.9$, input magnitude at most one and state constrained to be at most one, analyse constant input one.

<details><summary>Hint 1</summary>

The input satisfies its amplitude bound exactly.

</details>
<details><summary>Hint 2</summary>

Integrate the state and locate the first boundary time.

</details>
<details><summary>Full solution</summary>

The state is $0.9+t$. It reaches one at time one tenth and violates the state constraint afterwards. Thus an amplitude-admissible input need not give an admissible constrained trajectory. A constrained design must account for the state boundary, and a mathematical integrator solution beyond it does not establish physical permission to continue.

</details>

<a id="state-space-models-ex-10"></a>
### Exercise 10: causality of a terminal target

A target is revealed only at terminal time. Why is choosing a constant integrator input equal to that target divided by the horizon a hindsight policy unless the target is known earlier?

<details><summary>Hint 1</summary>

List the information available when the initial input is selected.

</details>
<details><summary>Hint 2</summary>

A formula can reach the target pathwise while using unavailable future information.

</details>
<details><summary>Full solution</summary>

From zero initial state that constant input would reach the target exactly, but its earlier value depends on information not yet observed. It is not an admissible causal policy under the stated revelation rule. It can serve as a perfect-information benchmark. If the target is announced at the start, the information pattern changes and the same formula can become an admissible open-loop input, subject to amplitude and state constraints.

</details>

## Chapter synthesis

A state-space model joins dynamics, information, admissibility and measurement. Integral well-posedness handles realistic input regularity, invertible coordinates preserve the model, and linearisation gives a controlled local approximation. Feedthrough compatibility and state constraints must be established before a feedback formula becomes a legitimate closed system.
`;export{e as default};