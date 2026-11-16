var e=`---
parent_id: book-control-theory
chapter_id: dynamic-programming-hjb
title: "Dynamic Programming and Hamilton–Jacobi–Bellman Verification"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Dynamic Programming and Hamilton–Jacobi–Bellman Verification

Pontryagin conditions describe an extremal trajectory. Dynamic programming compares the best remaining cost from every state and time. This chapter proves the deterministic continuation principle, derives the classical HJB equation, and proves verification and residual bounds. Explicit nonsmooth examples show why a value function need not have ordinary derivatives even when the plant is simple.

Preparation is the state/input contract, common-existence ODE estimates, multivariable differentiation and the [normal Pontryagin argument](optimal-control-variations.md). The main setting has a fixed finite horizon and no additional state constraints. A feasible region, if used for a bound, must contain every trajectory to which that bound is applied.

## The value function compares admissible continuations

For initial time and state, define the value as the infimum of running cost plus terminal cost over admissible future controls. The deterministic state follows its well-posed ODE. Suppose the input class is closed under restriction and concatenation, and that the relevant controls and states have common finite-horizon existence. An infimum is allowed without assuming an optimal control is attained.

Fix an intermediate time. Every complete control consists of a prefix and a continuation. Its continuation cost is at least the value at the state reached by that prefix. Taking infima therefore bounds the original value below by the infimum of prefix cost plus that continuation value.

For the opposite inequality, choose any prefix and then choose a continuation within an arbitrary positive error of the value at its particular endpoint. Concatenation gives a complete admissible control with cost at most the prefix expression plus that error. Taking the prefix infimum and sending the error to zero proves

$$V(t,x)=\\inf_u\\left\\{\\int_t^s L(\\tau,x(\\tau),u(\\tau))d\\tau
+V(s,x(s))\\right\\}.$$

No measurable family of optimal continuations was required for this deterministic equality: one chooses an approximately optimal tail for one chosen prefix endpoint at a time. Selecting a feedback function over all states is an additional construction with its own measurability and well-posedness requirements.

The admissible continuations must be the same problem. Giving the prefix knowledge of a future disturbance, dropping an endpoint constraint in the tail, or restarting with a different resource budget changes the value being compared. State augmentation can restore the correct continuation problem when remaining resources or information belong in the state.

## Continuity follows from uniform trajectory comparisons

Suppose the field is uniformly Lipschitz in state on a common compact trajectory region, and the running and terminal costs are Lipschitz in state there. Comparing two trajectories driven by the same input gives a Gronwall state bound. Integrating the cost difference then gives a uniform constant times their initial-state distance, independent of the particular admissible input in that region.

Taking the infimum in both directions proves local state-Lipschitz continuity of the value. The argument assumes the same controls remain admissible from the nearby states and their paths remain in the common region. State constraints can break that convenient comparison near a viability boundary.

Lipschitz continuity does not imply differentiability. Competing optimal policies can create corners where the best choice changes. The Bellman principle remains meaningful there because it compares finite costs rather than differentiating the value.

## The classical HJB equation has a definite sign convention

Assume temporarily that the value is continuously differentiable. Let the control set be compact and the field/cost continuous, with uniform local bounds. Apply the continuation identity over a short interval using any constant input value. Expanding the value at the nearby endpoint gives a nonnegative first-order excess

$$V_t+L(t,x,u)+\\nabla V\\cdot f(t,x,u)\\ge0$$

for every choice of input. The minimum of those expressions is therefore nonnegative.

For the reverse inequality, take a prefix within an error smaller than first order in the interval length of the prefix infimum. Uniform bounds keep its state within an order-interval-length neighbourhood, even if its input varies measurably. Uniform continuity of the value derivatives and field/cost lets the averaged first-order expression be bounded below by its minimum at the starting state. The continuation equality forces that minimum to be nonpositive. Combining the two conclusions gives

$$-V_t=\\min_{u\\in U}\\{L(t,x,u)+\\nabla V\\cdot f(t,x,u)\\},
\\qquad V(T,x)=\\Phi(x).$$

This is the minimum-cost sign convention. Replacing the cost by reward or using a negative Hamiltonian changes the displayed signs. Deriving them from the short-time equality is safer than comparing isolated formulas from different conventions.

Compact input sets ensured attainment of each instantaneous minimum and uniform short-time estimates in that derivation. Coercive unbounded-input examples can also be treated, but require their own existence/growth control. A verification identity can establish those explicit examples without pretending the compact-input argument applied unchanged.

## Verification converts a candidate into a global value bound

Let a continuously differentiable candidate satisfy terminal value no greater than the terminal cost, and suppose its time derivative plus running cost plus its state gradient paired with velocity is nonnegative for every admissible input. Along any admissible trajectory, the chain rule makes that inequality a bound on the derivative of the candidate plus accumulated running cost. Integrating proves that the candidate's starting value is a lower bound on every feasible cost, hence on the value.

If the terminal values agree and a control selector realises equality along an admissible trajectory, its cost equals that lower bound. The candidate is the value and the selector is optimal from that start. This proves global optimality by comparison with every feasible input; it is stronger than stationarity along one extremal.

The selector must produce an admissible well-defined state trajectory. An instantaneous minimiser can be discontinuous, nonunique or incompatible with a state boundary. A formal argmin symbol alone does not resolve those issues. It is enough for verification to exhibit one admissible equality trajectory from the state being considered; claiming an optimal feedback over a domain requires that construction over the domain.

There is a complementary upper-bound statement. A candidate with terminal value above the terminal cost and a chosen admissible policy making the derivative-plus-cost nonpositive bounds that policy's cost above, and therefore also bounds the optimal value above. Lower certificates and upper policy costs can bracket a value without solving the HJB equation exactly.

## A scalar quadratic candidate can be checked completely

**Worked example: integrator with terminal penalty.** For $x'=u$, running cost $u^2/2$ and terminal cost $x^2/2$, allow square-integrable real inputs. Put $\\tau=T-t$ and propose

$$V(t,x)=\\frac{x^2}{2(1+\\tau)}.$$

Its input Hamiltonian is a quadratic minimised at $u=-x/(1+\\tau)$. Its time derivative is positive and equals the negative of that minimum, verifying the stated HJB sign. The terminal value is the required penalty. The resulting state is $x(s)=x(1+T-s)/(1+T-t)$, so its input is constant over the remaining horizon and admissible. The verification theorem proves the candidate's global value.

This example uses unbounded input with a coercive quadratic cost, rather than the compact-input hypothesis of the preceding derivation. All required minimisers and trajectories were established directly. The quadratic value is also the scalar Riccati solution from the LQR chapter.

In several dimensions, substituting a quadratic candidate into HJB and minimising the input square gives the matrix Riccati equation. That computation identifies a possible value form, while the LQR construction proves existence of its full-interval coefficient and the verification identity proves its meaning. A quadratic ansatz alone is not an independent general existence theorem.

## A simple value function can have a genuine corner

**Worked example: minimise terminal absolute error.** For an integrator with input in the interval from minus one to one and zero running cost, the reachable terminal states form the interval of radius $\\tau$ around the current state. The smallest terminal absolute value is therefore

$$V(t,x)=\\max(|x|-\\tau,0).$$

An admissible optimal trajectory moves toward zero at unit speed until it arrives, then uses zero input. If the remaining time is insufficient, it continues toward zero until the terminal time. This direct reachability argument proves the value without differentiating it.

In the positive and negative outer regions, its time derivative is one and gradient is respectively one or minus one, making the Hamiltonian minimum minus one. In the inner cone the value and derivatives are zero. At the two cone boundaries it has a corner. No globally classical derivative can be assigned there to repair the equation; the finite dynamic-programming equality remains valid.

## Viscosity tests retain the comparison direction at a corner

Write the equation as $F(t,x,V_t,\\nabla V)=-V_t-\\min_u(L+\\nabla V\\cdot f)=0$. A viscosity subsolution uses a smooth function touching the candidate from above and requires its substituted $F$ to be nonpositive. A supersolution uses a touching function from below and requires the opposite inequality. A solution has both properties and the terminal condition in the stated boundary sense.

The directions follow from continuation. At an upper touching, replacing future value by the upper test function gives the same first-order inequality for every constant control as in the classical derivation. Thus the test's time derivative plus minimum Hamiltonian is nonnegative, equivalent to $F\\le0$. At a lower touching, an approximately optimal prefix gives the reverse inequality. No derivative of the value itself is required.

For the absolute-error example at a positive cone boundary, the local function is the maximum of zero and $x+t-T$. Smooth lower tests have gradient pair $(a,a)$ with $0\\le a\\le1$. Substitution gives minus $a$ plus its absolute value, zero. There is no differentiable upper support at a genuine convex corner with two distinct slopes. The negative cone boundary has the analogous gradient pair $(a,-a)$. Thus the explicit value satisfies the viscosity conditions directly.

General uniqueness is a separate comparison theorem. Under a compact input set, globally bounded uniformly continuous field/cost with a common state-Lipschitz bound, and bounded uniformly continuous terminal data on the full state space, the standard first-order HJB comparison principle identifies the bounded uniformly continuous viscosity solution uniquely. That comparison theorem is an explicit general input here; its doubling-variable proof is not replaced by the corner calculation. State constraints, unbounded data and growth classes need their corresponding versions.

## Saturation creates a moving policy boundary

**Worked example: bounded quadratic terminal control.** For an integrator, input bound $M$, running cost $ru^2/2$ with positive $r$ and terminal penalty $x^2/2$, Jensen's inequality says the least input effort for a fixed endpoint is attained by a constant input. Optimising that constant gives $\\operatorname{clip}[-x/(r+\\tau),-M,M]$ and value

$$V(t,x)=\\begin{cases}
\\dfrac{rx^2}{2(r+\\tau)},&|x|\\le M(r+\\tau),\\\\
\\dfrac12(|x|-M\\tau)^2+\\dfrac12r\\tau M^2,&|x|>M(r+\\tau).
\\end{cases}$$

The two formulas and their first derivatives match at the boundary. In the inner region the minimum is the unconstrained quadratic input; outside it the optimal input is the appropriate magnitude endpoint. Substitution verifies HJB on both regions and the terminal penalty. The explicit constant-input trajectory supplies admissibility and equality, so verification gives a second proof of the value.

This is a case where clipping is valid because the entire coupled optimum and its boundary were derived. It does not justify pointwise clipping of an arbitrary nonlinear optimal trajectory while retaining its old state or costate. The switching boundary depends on both state and remaining time.

## Smooth values connect to Pontryagin costates under stronger assumptions

If the value is twice differentiable and a smooth interior minimising selector exists, differentiate the HJB identity in state. Terms involving the selector derivative cancel by input stationarity. Along the optimal trajectory, the value gradient then satisfies the adjoint equation with terminal gradient of the terminal cost. Thus it is a Pontryagin costate in this smooth setting.

At a corner there may be several limiting gradients and several optimal continuations. The equality between a single ordinary gradient and a costate is no longer a literal formula. Necessary trajectory conditions remain useful, but they do not supply a differentiable global value surface. The regularity and selection hypotheses explain where the two methods agree and where additional nonsmooth theory is needed.

## Uniform residuals give quantitative value and policy bounds

Suppose a differentiable approximate candidate has terminal error at most $\\delta$ and absolute HJB residual at most $\\epsilon$ throughout a region containing every compared trajectory. For any input, its derivative-plus-running-cost is at least minus that residual bound. Integration gives the lower value bound equal to the candidate minus $\\delta+\\epsilon\\tau$.

If an admissible selector attains the candidate's Hamiltonian minimum, its derivative-plus-cost is at most the same residual bound. Its policy cost is therefore no larger than candidate plus $\\delta+\\epsilon\\tau$. Combining the inequalities proves

$$|V-W|\\le\\delta+\\epsilon\\tau,\\qquad
J_{\\rm policy}-V\\le2(\\delta+\\epsilon\\tau).$$

The residual is a uniform theorem hypothesis, not merely the largest value at a finite set of sampled points. The selector and all comparison paths must remain in its domain. Terminal error has cost units; residual has cost-per-time units, explaining the horizon factor. A long horizon can make a seemingly small residual insufficient for a desired value tolerance.

## Discretisation and state constraints require additional contracts

Finite-state Bellman recursion is exact for its finite transition model. A grid approximation to a continuous HJB equation introduces state interpolation, control discretisation and time error. Nonnegative interpolation weights can preserve monotonicity, but a convergence claim additionally needs consistency, stability and an applicable comparison theorem. A small grid residual does not itself bound the continuous value uniformly.

With $N$ grid points in each of $n$ state coordinates, a full tensor grid already contains $N^n$ states. This explains the rapid growth of direct value computations. Approximation can be essential, but its error and policy admissibility need to be stated rather than inferred from a visually smooth surface.

State constraints also change the boundary problem. An instantaneous minimiser over the original input set may drive the state outside the admissible region. Such a selector fails the upper verification argument even if its formal PDE expression is small. The value must use viable continuations and the correct constrained boundary interpretation. Those restrictions are part of the problem, not an optional final check after a policy has been declared optimal.

## Exercises with staged hints and full solutions

<a id="dynamic-programming-hjb-ex-1"></a>
### Exercise 1: no attained optimum is needed for continuation

Which step proves the Bellman upper inequality when the tail value is only an infimum?

<details><summary>Hint 1</summary>

Choose a tail whose cost is within a positive error of that infimum.

</details>
<details><summary>Hint 2</summary>

Concatenate it with one chosen prefix before taking limits.

</details>
<details><summary>Full solution</summary>

For a fixed prefix endpoint, choose an epsilon-optimal admissible tail. Concatenation gives a complete control with cost at most the prefix expression plus epsilon. Taking the prefix infimum and sending epsilon to zero gives the required inequality. One does not need an exactly optimal tail or a measurable optimal selector over every possible endpoint to prove this deterministic equality.

</details>

<a id="dynamic-programming-hjb-ex-2"></a>
### Exercise 2: the lower-verification sign

State the derivative-plus-cost and terminal inequalities that make a differentiable candidate a lower value bound.

<details><summary>Hint 1</summary>

Integrate the chain rule along every feasible input.

</details>
<details><summary>Hint 2</summary>

Its terminal candidate must not exceed the actual terminal charge.

</details>
<details><summary>Full solution</summary>

Require $W_t+L+\\nabla W\\cdot f\\ge0$ for every admissible input and $W(T,x)\\le\\Phi(x)$. Integration gives $W(t,x)\\le\\int L+W(T,x(T))\\le J(u)$. Taking the infimum proves $W\\le V$. Equality for one admissible selector then proves optimality, rather than merely a lower bound.

</details>

<a id="dynamic-programming-hjb-ex-3"></a>
### Exercise 3: bounded Hamiltonian minimisation

Minimise $ru^2/2+pu$ over $[-M,M]$ for positive $r$.

<details><summary>Hint 1</summary>

Complete the square in the scalar input.

</details>
<details><summary>Hint 2</summary>

Project its unconstrained minimiser onto the allowed interval.

</details>
<details><summary>Full solution</summary>

The minimiser is $\\operatorname{clip}(-p/r,-M,M)$. Strict positive curvature gives uniqueness. In HJB the slope is the value gradient at the current state and time, while in Pontryagin it is the relevant costate contribution. The scalar minimisation alone does not establish that a proposed gradient or costate belongs to an admissible optimal trajectory.

</details>

<a id="dynamic-programming-hjb-ex-4"></a>
### Exercise 4: verify the quadratic candidate

For the unbounded integrator example, compute the minimum Hamiltonian and compare it with the candidate's time derivative.

<details><summary>Hint 1</summary>

The state gradient is the state divided by one plus remaining time.

</details>
<details><summary>Hint 2</summary>

Minimising a unit input square gives minus half the squared gradient.

</details>
<details><summary>Full solution</summary>

The minimum is $-x^2/[2(1+\\tau)^2]$, while the time derivative is positive $x^2/[2(1+\\tau)^2]$. Thus minus that derivative equals the minimum, with the stated sign convention. The terminal value and explicit feedback trajectory complete verification; the PDE substitution alone would not establish admissibility.

</details>

<a id="dynamic-programming-hjb-ex-5"></a>
### Exercise 5: absolute-error value

With current state two and remaining time one half, find the minimum terminal absolute error under unit input bound.

<details><summary>Hint 1</summary>

The largest possible motion toward zero is the remaining time.

</details>
<details><summary>Hint 2</summary>

The reachable terminal interval does not contain zero.

</details>
<details><summary>Full solution</summary>

The minimum error is three halves, attained by input minus one throughout. No control can move farther than one half in that time, so the lower bound is exact. This direct endpoint argument proves the value even though the full value surface has nondifferentiable boundaries elsewhere.

</details>

<a id="dynamic-programming-hjb-ex-6"></a>
### Exercise 6: a saturated quadratic region

Take unit weights/bound, remaining time one and current state three in the bounded quadratic example. Compute value and optimal input.

<details><summary>Hint 1</summary>

Compare the state magnitude with the moving boundary two.

</details>
<details><summary>Hint 2</summary>

Use the saturated branch's terminal error and running effort.

</details>
<details><summary>Full solution</summary>

The state is outside the boundary, so optimal input is minus one. Terminal state is two. The cost is half of four plus half of one, giving five halves. The unbounded constant-input formula would demand magnitude three halves and is infeasible. The derived bounded value accounts for that constraint rather than retaining the unbounded cost.

</details>

<a id="dynamic-programming-hjb-ex-7"></a>
### Exercise 7: a lower test at the corner

At the positive absolute-error cone boundary, substitute a lower touching gradient pair $(a,a)$ with $0\\le a\\le1$ into the viscosity operator.

<details><summary>Hint 1</summary>

The zero-cost bounded-input minimum of the state-gradient term is minus its absolute value.

</details>
<details><summary>Hint 2</summary>

The operator is minus the time derivative minus that minimum.

</details>
<details><summary>Full solution</summary>

The operator is $-a+|a|=0$. It satisfies the supersolution inequality required for a lower touching test. At a genuine convex corner there is no differentiable upper support with one slope matching both active affine pieces, so no contradictory classical derivative is required. The definition tests supports, not an invented derivative of the corner.

</details>

<a id="dynamic-programming-hjb-ex-8"></a>
### Exercise 8: value gradient along the scalar optimum

Show that the quadratic example's value gradient is constant along its optimal trajectory and agrees with its adjoint equation.

<details><summary>Hint 1</summary>

Divide the explicit state trajectory by one plus its remaining time.

</details>
<details><summary>Hint 2</summary>

The running cost has no state derivative, so the scalar adjoint is constant.

</details>
<details><summary>Full solution</summary>

Along a trajectory starting at time zero, $x(t)/(1+T-t)=x_0/(1+T)$. Thus the value gradient is constant and its terminal value equals terminal state, the derivative of the quadratic terminal penalty. Its derivative is zero, matching the adjoint equation. This agreement uses the smooth value and explicit optimum, not a universal differentiability assertion.

</details>

<a id="dynamic-programming-hjb-ex-9"></a>
### Exercise 9: a residual budget

Terminal error is at most one hundredth, uniform residual at most two hundredths and remaining horizon three. Give the value and policy-regret bounds.

<details><summary>Hint 1</summary>

Combine the terminal allowance with residual times horizon.

</details>
<details><summary>Hint 2</summary>

The policy-regret bound compares both sides of the value bracket.

</details>
<details><summary>Full solution</summary>

The value allowance is seven hundredths and the stated policy-regret allowance fourteen hundredths. They require a uniform residual over every relevant path and an admissible Hamiltonian-minimising policy. Values sampled only at finitely many grid points do not establish the uniform hypothesis.

</details>

<a id="dynamic-programming-hjb-ex-10"></a>
### Exercise 10: a state-boundary failure

An instantaneous minimiser drives a constrained state outside its permitted domain. Which part of the upper verification argument fails?

<details><summary>Hint 1</summary>

The equality trajectory must belong to the feasible comparison class.

</details>
<details><summary>Hint 2</summary>

A pointwise minimum over an oversized input set can select a nonviable continuation.

</details>
<details><summary>Full solution</summary>

There is no admissible policy trajectory attaining the proposed equality, so its formal cost cannot be used as a feasible upper bound or optimum. The constrained value must use viable continuations and the corresponding boundary interpretation. A formal minimum over inputs that leave the domain may still produce a lower relaxation, but it does not solve the constrained control problem.

</details>

## Chapter synthesis

Continuation proves Bellman's equality without assuming attained optima. Classical differentiation gives HJB, while verification and residual inequalities supply global bounds. Corners require viscosity tests with a comparison theorem, and admissible selectors, boundary conditions and information timing remain part of every optimal-policy claim.
`;export{e as default};