var e=`---
parent_id: book-control-theory
chapter_id: sampled-data-mpc
title: "Sampled-Data Control and Model Predictive Control"
level: graduate
estimated_minutes: 440
license: CC BY-SA 4.0
---

# Sampled-Data Control and Model Predictive Control

A controller implemented at a sequence of times has a different closed-loop model from a continuously updated feedback. A predictive controller adds another distinction: it solves a finite future problem, applies only its first action, measures again and repeats. This chapter derives the exact held plant and proves a finite-horizon MPC stability theorem. The theorem includes terminal feasibility and a decreasing terminal cost; a successful optimization at one instant alone supplies neither property.

Preparation is [transition matrices](transition-matrices-linear-systems.md), quadratic Lyapunov functions, [LQR](linear-quadratic-regulation.md) and [robust input bounds](robust-sampled-control.md). All states are finite-dimensional. Unless stated otherwise the model and measured state are exact, the sampling period is fixed and positive, and the optimization is solved exactly. Later sections explain which conclusions require changes when these assumptions change.

## A held input produces an exact discrete plant

Consider a continuous linear plant with constant matrices and an input constant on each sampling interval. Integrating the variation-of-constants formula from a sampling time gives

$$x_{k+1}=A_hx_k+B_hu_k,\\qquad
A_h=e^{Ah},\\quad B_h=\\int_0^h e^{As}B\\,ds.$$

This identity is exact for zero-order hold. It assumes no delay between measurement and application. The formula for the integral remains valid for singular drift matrices. A matrix inverse shortcut is therefore optional, not part of the model definition. The block exponential of the augmented constant-input system gives both matrices without an invertibility assumption.

At an intermediate time the state is $e^{A\\tau}x_k+B_\\tau u_k$, with the same integral formula at duration $\\tau$. Discrete endpoint constraints and continuous-time constraints are different requirements. A continuous state bound can be imposed through this entire curve or a sufficient enclosure of it. Checking only the next measured endpoint leaves the intermediate curve unrestricted.

The input is already bounded throughout a hold if its held value obeys the actuator bound. A state-dependent actuator limit, on the other hand, can change within the interval and needs its own continuous feasibility condition. The information contract is equally concrete: a state measured at the beginning of an interval can choose its held input; a measurement arriving at the end cannot be used retroactively for that interval.

### Worked example: reusing a continuous scalar gain

For the unstable scalar plant $x'=x+u$, continuous feedback $u=-2x$ yields exact continuous decay. Holding instead the sampled value $u_k=-2x_k$ gives multiplier $2-e^h$. It is Schur precisely when $0<h<\\log 3$. Thus an arbitrarily long hold cannot inherit the continuous proof.

The within-hold curve is $x(kh+\\tau)=(2-e^\\tau)x_k$. Under that strict stability range its absolute multiplier on the whole interval is at most one, since $2-e^\\tau$ decreases from one to a number strictly above minus one. Consequently a symmetric state interval is also preserved between samples for this particular scalar loop. This extra conclusion follows from the explicit curve; it was not supplied by endpoint stability alone.

With actuator magnitude at most one, the unsaturated sampled law is valid on the interval $|x_k|\\le1/2$. Endpoint contraction keeps successive samples there, while the held command remains within its bound throughout each interval. Outside that interval the actual saturated map changes. The local proof says nothing about a larger attraction region until that nonlinear map is analysed.

## Sampling a quadratic cost also has a model

For a continuous running cost with state weight $Q\\succeq0$ and input weight $R\\succ0$, the exact cost of one hold is obtained by integrating the continuous state curve. It is a quadratic form in the pair of initial state and held input:

$$\\ell_h(x,u)=x^TQ_hx+2x^TN_hu+u^TR_hu.$$

Here $Q_h$ integrates $e^{A^T\\tau}Qe^{A\\tau}$, $N_h$ integrates $e^{A^T\\tau}QB_\\tau$, and $R_h$ is $hR$ plus the integral of $B_\\tau^TQB_\\tau$. The joint quadratic matrix is nonnegative because it is the integral of the original nonnegative running cost. The input block is positive definite since it dominates $hR$.

These formulas show why a cross term appears even when the continuous cost has none. Replacing the exact stage cost by $h(x^TQx+u^TRu)$ defines a different discrete optimization problem. That approximation may be useful, but its minimizer is not automatically the minimizer of the continuous held-input objective. An exact discrete LQR design can handle the cross term by completing its input square or using the corresponding Riccati formula.

For example a scalar integrator has $x(\\tau)=x+\\tau u$. Integrating $qx(\\tau)^2+ru^2$ gives $qhx^2+qh^2xu+(rh+qh^3/3)u^2$. The half coefficient of the mixed term is therefore the cross matrix. The extra cubic input term records state displacement during the interval; omitting it underweights inputs that move the state rapidly.

## The finite prediction problem specifies its feasible domain

Write the discrete plant as $x^+=Fx+Gu$. Let $X$ and $U$ be closed state and input constraint sets containing the origin. Fix a horizon of at least one step, a nonnegative continuous stage cost, a closed terminal set and a nonnegative continuous terminal cost. For each initial state choose a sequence of inputs whose predicted states obey the dynamics, whose intermediate states and inputs obey their constraints, and whose terminal state lies in the terminal set. The objective is the sum of stage costs plus terminal cost.

The feasible domain $X_N$ is the set of initial states admitting at least one such sequence. An optimizer exists, for example, when $U$ is compact, the constraints are closed and the costs and dynamics are continuous. Indeed the feasible input sequences form a closed subset of a finite product of compact sets, and the objective is continuous there. This is an existence argument, not a uniqueness claim. Strict convexity of the condensed objective and convex constraints supply uniqueness in familiar quadratic cases.

If the input set is unbounded, coercivity and a closed feasible set can replace compactness. If a terminal equality is inconsistent with the dynamics, no finite objective formula creates feasibility. An optimization routine reporting failure can reflect a genuine infeasible state, a numerical failure, or both; the mathematical controller must declare what happens in that event rather than silently assuming the optimizer always exists.

The receding-horizon law selects a minimizing sequence at the current state, applies its first input and discards the remainder after the next measurement. A deterministic tie-breaking or a measurable selection may be needed to define a single feedback. For the nominal stability proof any minimizing choice satisfying the stated conditions works. The theorem does not need the optimizer to vary differentiably with state.

## Terminal ingredients make shifting feasible

Suppose a terminal feedback $\\kappa_f$ maps every point of the terminal set to an allowed input, keeps its successor in the terminal set, and satisfies

$$V_f(Fx+G\\kappa_f(x))-V_f(x)\\le-\\ell(x,\\kappa_f(x)).$$

The terminal set is contained in the ordinary state constraint set. The feedback need only be defined on that set for this theorem. These assumptions jointly say that a feasible terminal state has an admissible continuation whose remaining cost is bounded by the terminal cost. A positive terminal penalty without such a continuation is not enough.

Let an optimal sequence at the current state have predicted states from step zero through step $N$. After its first input is applied, exact dynamics put the real successor at its predicted first state. Shift the remaining inputs one place forward and append the terminal feedback at the old terminal state. Every shifted intermediate constraint is inherited from the old plan; terminal invariance supplies the new final constraint. This proves recursive feasibility for every initial state in the feasible domain.

Compare the shifted candidate cost with the old optimal cost. All shared intermediate terms cancel. The new terminal stage and terminal-cost difference are nonpositive by the terminal inequality. Thus the new optimal value satisfies

$$V_N(x^+)-V_N(x)\\le-\\ell(x,u_0^*(x)).$$

The inequality uses an upper bound on the new optimum supplied by a feasible shifted candidate; the candidate need not itself be optimal. This distinction is the reason the simple argument can handle active constraints and changes of optimizer. The proof also shows why a model mismatch is consequential: if the measured successor differs from the predicted first state, the shifted sequence need not be feasible from that new state.

## What the decreasing value proves

Assume the stage cost dominates a positive constant times squared state norm on the feasible domain. Summing the decrease inequality gives a finite sum of squared state norms along the closed loop, bounded by the initial optimal value. A nonnegative summable sequence tends to zero, so the sampled state converges to the origin. Recursive feasibility ensures the sequence exists at every future step.

For stability, one additionally needs a local upper bound on the value that tends to zero with the initial state. If $V_N(x)\\le c_2\\|x\\|^2$ near the origin and $V_N(x)\\ge c_1\\|x\\|^2$, monotonicity yields $\\|x_k\\|^2\\le(c_2/c_1)\\|x_0\\|^2$. This proves Lyapunov stability relative to the feasible domain. Together with convergence it gives asymptotic stability there. An upper comparison function tending to zero can replace the quadratic bound.

In the usual terminal quadratic construction such a local upper bound is explicit. Suppose the terminal set contains a neighbourhood of zero, the terminal policy is linear and its quadratic cost satisfies the terminal inequality. From an initial state in a sufficiently small invariant terminal neighbourhood, apply that policy for the entire prediction horizon. Telescoping the terminal inequality bounds its prediction cost by the initial terminal cost, hence bounds the optimal value above by that quadratic form. The lower bound comes from the first stage's positive state penalty.

If the state weight is only semidefinite, the sum argument proves convergence of the penalized output, not automatically of the full state. Detectability plus suitable boundedness or an augmented Lyapunov argument can recover a stronger result, but those extra hypotheses need proof. Similarly a terminal set containing only the origin can support recursive feasibility yet fail to contain any neighbourhood for a short uncontrollable horizon. The domain and the stability interpretation must be stated together.

### Worked example: a constrained scalar integrator

Take $x^+=x+u$, state and input bounds of magnitude two and one, respectively, and stage cost $x^2+u^2$. Choose terminal feedback $\\kappa_f(x)=-x/2$, terminal set $|x|\\le1$ and terminal cost $V_f(x)=2x^2$. On that set the feedback is allowed and its successor is $x/2$, again in the terminal set. Its terminal-cost change is $-3x^2/2$, while the stage cost is $5x^2/4$. The required terminal inequality therefore holds strictly away from zero.

For horizon one, the terminal constraint asks for $|x+u|\\le1$. Every allowed initial state has an allowed input meeting it. The objective is $x^2+u^2+2(x+u)^2$. Its unconstrained minimizer is $-2x/3$. For $|x|\\le3/2$ this obeys the actuator bound and its terminal state has magnitude at most one half. For larger allowed states the minimizer clips to $-\\operatorname{sign}(x)$; its terminal state still has magnitude at most one. These statements follow from convexity of the scalar quadratic on the feasible interval.

The resulting feedback is therefore the clipped unconstrained minimizer on the full allowed state interval. The nominal state moves towards zero, recursive feasibility follows either directly or from the shift proof, and the value decreases by at least the current squared state. The terminal cost here is a valid upper bound on a local continuation, although it is not the infinite-horizon optimal value. Exact terminal optimality was never required by the theorem.

## A quadratic terminal region can be constructed explicitly

For a stabilizing linear terminal law $u=Kx$, suppose a positive matrix satisfies the discrete Lyapunov inequality with the chosen quadratic stage cost. Select an ellipsoid $x^TPx\\le\\rho$ small enough to satisfy every state and input inequality. For a state row $a^Tx\\le b$ with positive margin at zero, its maximum on the ellipsoid is $\\sqrt{\\rho a^TP^{-1}a}$. For an input row substitute $Kx$ and use the same formula. Zero rows impose no radius restriction when their scalar inequality is already satisfied.

The energy inequality implies that the terminal ellipsoid is invariant and supplies the terminal decrease condition. Thus one finite set of algebraic inequalities constructs both ingredients. A stabilizing discrete Riccati solution gives equality in the terminal decrease formula for its quadratic cost. A Lyapunov solution for any stabilizing feedback also works with a suitable weight, so optimal terminal design is not necessary.

The ellipsoid is generally conservative for polytopic constraints. A maximal admissible invariant set may be larger, and a longer horizon can enlarge the feasible domain even when the terminal set is unchanged. Neither fact changes the local theorem. Enlarging a terminal set without checking its feedback feasibility and invariance can destroy the shift argument, even if a few trajectories remain within the enlarged set.

### Worked example: horizon enlarges reachability to a terminal equality

For the scalar integrator with input magnitude at most one, no intermediate state bound, and terminal equality zero, an $N$-step feasible sequence exists precisely when $|x|\\le N$. Necessity follows by summing the bounded inputs. Sufficiency follows by choosing the constant input $-x/N$, whose magnitude is allowed. Thus the feasible domains strictly enlarge with the horizon.

With stage cost $u^2$ alone, the same constant sequence is the unique minimum-energy sequence by Cauchy–Schwarz, and its first receding action is $-x/N$. For fixed finite $N$ the resulting closed-loop multiplier is $1-1/N$, stable for every positive integer horizon. But the stage cost lacks a positive state lower bound, so the general state-summability theorem above cannot be invoked unchanged. The explicit scalar calculation proves stability in this example by a different argument. This is a useful reminder that failure of a sufficient hypothesis is not failure of the controller.

## Disturbances, delays and incomplete optimization change the proof

A bounded model error can move a nominal successor outside a constraint that was predicted exactly on its boundary. Nominal MPC is therefore not automatically robustly feasible. One remedy is tube MPC: combine a nominal plan with an error feedback whose disturbance-driven error remains in a robust invariant set. Tighten state and input constraints by that error set, so every actual trajectory is feasible whenever the nominal tightened plan is feasible. Establishing the error invariant set and the terminal tightened continuation is part of that remedy, rather than an optional afterthought.

In a linear example with error recursion $e^+=(F+GK)e+w$, a compact disturbance set and a Schur error matrix, the infinite sum of propagated disturbance sets is bounded and invariant when properly closed. A finite outer enclosure can be used if its invariance is proved. The disturbance-free nominal cost decrease does not imply actual convergence to zero under persistent nonzero disturbances; an invariant neighbourhood is the appropriate typical conclusion.

An actuator delay can instead be represented by adding queued inputs to the state. The prediction must use the currently committed input before optimizing later entries. A feedback designed for the undelayed plant does not acquire this augmentation merely by being evaluated more slowly. Variable computation time similarly changes which control is held on which interval and must enter the state/input timing contract.

Exact minimization is stronger than the shift proof needs. A feasible new sequence with cost no greater than the shifted candidate preserves the same decrease inequality. This observation supports a stored feasible plan and an improvement procedure: optimization can stop early while retaining a certified feasible incumbent. It does not justify applying an arbitrary unfinished iterate, which may violate constraints or have a larger cost. Numerical tolerances require explicit allowances in both feasibility and the decrease estimate.

## Exercises with staged help

### 1. A double-integrator hold

Derive the exact held model for $q'=v$, $v'=u$ over a period $h$.

<details><summary>Hint 1</summary>

Integrate velocity first while the input is constant.

</details>
<details><summary>Hint 2</summary>

The position integral includes the linearly changing velocity.

</details>
<details><summary>Full solution</summary>

Velocity becomes $v+hu$ and position becomes $q+hv+h^2u/2$. Hence $F=\\begin{pmatrix}1&h\\\\0&1\\end{pmatrix}$ and $G=(h^2/2,h)^T$. The formula is exact for a constant input on the interval, not for an arbitrary varying input with the same initial value.

</details>

### 2. An intersample overshoot

For the double integrator on an interval of length two, start at position zero and velocity one and hold input minus one. Show that both position endpoints are zero but the position exceeds $0.4$ between them.

<details><summary>Hint 1</summary>

Write the exact quadratic position curve.

</details>
<details><summary>Hint 2</summary>

Its derivative vanishes at the midpoint.

</details>
<details><summary>Full solution</summary>

Position is $\\tau-\\tau^2/2$, zero at zero and two and equal to one half at time one. Thus endpoint satisfaction of a position bound $q\\le0.4$ does not ensure its continuous satisfaction. This counterexample uses an exact held trajectory, without approximation error.

</details>

### 3. Exact sampled cost

For $x'=u$ and running cost $x^2+u^2$, identify the three scalar cost coefficients over one hold.

<details><summary>Hint 1</summary>

Expand the square of $x+\\tau u$.

</details>
<details><summary>Hint 2</summary>

The convention writes the mixed term as twice the cross coefficient.

</details>
<details><summary>Full solution</summary>

Integration gives $hx^2+h^2xu+(h+h^3/3)u^2$. Therefore $Q_h=h$, $N_h=h^2/2$ and $R_h=h+h^3/3$. The positive input term from state displacement is part of the continuous held-input objective.

</details>

### 4. Terminal energy

For $x^+=x+u$, terminal law $u=-x/2$ and stage cost $x^2+u^2$, find the smallest coefficient $p$ making $V_f=px^2$ satisfy the terminal decrease inequality.

<details><summary>Hint 1</summary>

The terminal successor is half the current state.

</details>
<details><summary>Hint 2</summary>

Compare the energy loss with $5x^2/4$.

</details>
<details><summary>Full solution</summary>

The cost change is $-3px^2/4$. It dominates the required stage loss exactly when $3p/4\\ge5/4$, so the smallest coefficient is $5/3$. The chapter's choice two is valid with slack. This algebra alone does not choose an actuator-feasible terminal set; that is a separate condition.

</details>

### 5. Shifted sequence

Write the feasible candidate at the next state for a horizon-three plan with inputs $u_0,u_1,u_2$ and terminal state $x_3$.

<details><summary>Hint 1</summary>

The first planned action has already been applied.

</details>
<details><summary>Hint 2</summary>

Append the terminal policy at the old terminal state.

</details>
<details><summary>Full solution</summary>

The next candidate is $u_1,u_2,\\kappa_f(x_3)$. Its initial state is the old predicted $x_1$ under exact dynamics. Old feasibility covers the first two stages, and terminal feedback feasibility and invariance cover the last input and new terminal state. A disturbance moving the measured state away from $x_1$ breaks this direct inheritance.

</details>

### 6. Feasible scalar optimizer

Derive the horizon-one feedback for the constrained quadratic integrator worked example, including its active-input region.

<details><summary>Hint 1</summary>

Differentiate the unconstrained quadratic in the input.

</details>
<details><summary>Hint 2</summary>

Project its minimizer onto the feasible input interval, checking the terminal bound too.

</details>
<details><summary>Full solution</summary>

The derivative is $6u+4x$, giving $u=-2x/3$. For $|x|\\le3/2$ it is allowed and yields terminal $x/3$. For $3/2<|x|\\le2$, the closest feasible input is $-\\operatorname{sign}(x)$; its terminal magnitude is $|x|-1\\le1$. Thus the law is clipping at magnitude one throughout the allowed domain. Convexity makes these feasible minimizers global and unique.

</details>

### 7. From decrease to convergence

Suppose $V(x_{k+1})\\le V(x_k)-c\\|x_k\\|^2$, $c>0$ and $V\\ge0$. Prove sampled-state convergence and state the extra local condition needed for stability.

<details><summary>Hint 1</summary>

Sum the inequalities through a finite horizon.

</details>
<details><summary>Hint 2</summary>

A summable nonnegative sequence tends to zero, but this alone is not a uniform small-initial-state estimate.

</details>
<details><summary>Full solution</summary>

Telescoping gives $c\\sum_{k=0}^{m}\\|x_k\\|^2\\le V(x_0)$. Letting $m$ increase proves summability and hence convergence to zero. For stability one can require lower and local upper quadratic bounds on $V$, yielding a bound on every state proportional to the initial norm. More generally appropriate comparison functions with an upper bound tending to zero suffice.

</details>

### 8. A terminal ellipsoid

Let $P=\\operatorname{diag}(1,4)$ and terminal input $u=(1,2)x$ with magnitude bound one. Find the largest energy radius allowed by this input row alone.

<details><summary>Hint 1</summary>

Evaluate the row times the inverse matrix times its transpose.

</details>
<details><summary>Hint 2</summary>

The row's maximum squared on the ellipsoid is the radius times that scalar.

</details>
<details><summary>Full solution</summary>

The scalar is $1+4/4=2$, so the radius is at most one half. This only certifies input feasibility. A discrete Lyapunov decrease and any state inequalities must also hold before calling this a terminal invariant set.

</details>

### 9. Persistent model error

The error recursion is $e_{k+1}=ae_k+w_k$, with $|a|<1$ and $|w_k|\\le d$. Find a symmetric robust invariant interval and explain why zero convergence is not generally available.

<details><summary>Hint 1</summary>

Require the next error bound to be no larger than the proposed radius.

</details>
<details><summary>Hint 2</summary>

A constant allowed disturbance supplies a counterexample to exact zero convergence.

</details>
<details><summary>Full solution</summary>

The interval of radius $d/(1-|a|)$ is invariant since $|a|R+d=R$. Starting inside it keeps every error inside. For a nonzero constant disturbance and, for example, nonnegative $a<1$, the equilibrium is $d/(1-a)$ rather than zero. Robust feasibility should use this neighbourhood when tightening constraints; nominal asymptotic convergence does not remove the forcing.

</details>

### 10. Early optimization termination

Give a sufficient rule for replacing exact minimization while retaining the nominal cost-decrease proof. Explain why feasibility alone is weaker.

<details><summary>Hint 1</summary>

The proof compares the new plan with a particular shifted feasible plan.

</details>
<details><summary>Hint 2</summary>

Keep a feasible incumbent whose objective does not exceed that comparison cost.

</details>
<details><summary>Full solution</summary>

Store the shifted plan, append the terminal action and accept only a feasible replacement with no larger objective. Use that accepted plan's first input and repeat the argument with its stored cost. The cancellation and terminal inequality still imply a stage-cost decrease for the sequence of accepted plan costs. An arbitrary feasible plan can have a larger objective than the shifted plan, so feasibility by itself supplies no such decrease. Approximate arithmetic requires corresponding explicit slack bounds rather than an assertion of exact inequalities.

</details>

## Sources and onward reading

The finite-horizon shift argument is the standard nominal constrained MPC construction; a detailed reference is Rawlings, Mayne and Diehl, *Model Predictive Control: Theory, Computation, and Design*, in its chapters on terminal ingredients and stability. The proof here covers the stated exact-model setting directly. Tube constructions, nonlinear constraint qualifications and robust optimization require additional hypotheses beyond that theorem. Continue to [nonlinear control](nonlinear-control.md) for nonlinear stabilization, and to the retained robust-control reading for the original bridge exercises on sampling and saturation.
`;export{e as default};