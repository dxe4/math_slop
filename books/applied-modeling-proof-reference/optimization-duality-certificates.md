
# Optimization, Duality, and Certificates

## Why an optimizer needs a proof object

An optimization result is not merely a vector printed by software. A decision-quality result needs four distinguishable objects: a precisely scoped objective, a feasible candidate, a bound showing how far that candidate could be from optimal, and a sensitivity account explaining what happens when the model changes. This chapter develops those objects for convex and linear problems. The formulas are conditional on the written feasible set and objective; they cannot decide whether an objective represents the people or systems affected by the decision.

We assume finite-dimensional linear algebra and differentiable convex functions. Let $C$ be a feasible set and consider $\min_{x \in C} f(x)$. Before solving, record units, sign conventions, time horizon, uncertain inputs, and whether decision variables are continuous or indivisible. A numerically excellent solution to the wrong feasible set is still wrong.

## Convexity and first-order certificates

**Definition 8.1 (convexity).** A set $C$ is convex if $tx+(1-t)y$ belongs to $C$ whenever $x,y$ do and $0\leq t\leq 1$. A function $f:C\to R$ is convex if

$f(tx+(1-t)y) \leq t f(x)+(1-t)f(y)$.

**Proposition 8.2 (supporting optimality certificate).** For differentiable convex $f$ on a convex domain, the supporting inequality $f(y) \geq f(x)+\nabla f(x)^{\mathsf T}(y-x)$ holds. Therefore a feasible $x*$ satisfying $\nabla f(x*)^{\mathsf T}(y-x*) \geq 0$ for every feasible $y$ is globally minimizing. If $x*$ lies in the interior, this reduces to $\nabla f(x*)=0$. Strict convexity gives at most one minimizer, not existence; existence still needs compactness, coercivity, or another attainment argument.

### Worked projection

Minimize $(1/2)\lVert x-a\rVert^2$ over a closed convex set $C$. At its projection $p$, the first-order condition is $(p-a)^{\mathsf T}(y-p)\geq 0$ for all $y \in C$. Expanding squared distance gives

$\lVert a-y\rVert^2 = \lVert a-p\rVert^2+\lVert y-p\rVert^2-2(a-p)^{\mathsf T}(y-p) \geq \lVert a-p\rVert^2$.

Thus the variational inequality is both a certificate and a geometric explanation. If $C=\{x:x\geq 0\}$ coordinatewise, the solution is $p_i=\max(a_i,0)$.

## Lagrangians and KKT conditions

For convex inequalities $g_i(x)\leq 0$ and affine equalities $Ax=b$, define

$L(x,\lambda,\nu)=f(x)+\sum_{i} \lambda_i g_i(x)+\nu^{\mathsf T}(Ax-b)$.

The Karush--Kuhn--Tucker conditions are primal feasibility, dual feasibility $\lambda_i\geq 0$, stationarity $\nabla f(x)+\sum_{i} \lambda_i \nabla g_i(x)+A^{\mathsf T} \nu=0$, and complementary slackness $\lambda_i g_i(x)=0$.

For a convex differentiable problem, any KKT point is globally optimal: convexity lower-bounds $f(y)$ by its affine support, stationarity substitutes constraint gradients, and feasibility plus nonnegative multipliers makes the remaining expression nonnegative. Under a constraint qualification such as Slater's condition, KKT is also necessary. Without a qualification, an optimum can exist while no multiplier satisfies the equations.

### Worked resource allocation

Minimize $(x-3)^2+(y-2)^2$ subject to $x+y\leq 3$. The unconstrained point $(3,2)$ is infeasible, so the constraint binds. With $g=x+y-3$, stationarity gives $2(x-3)+\lambda=0$ and $2(y-2)+\lambda=0$. Hence $x-y=1$; together with $x+y=3$ this gives $(x,y)=(2,1)$ and $\lambda=2$. The multiplier has units of objective per unit of the resource bound. Increasing the bound by $\delta$ decreases optimal value at first order by approximately $2 \delta$. Rescaling the constraint rescales $\lambda$, so raw multipliers are convention-dependent.

## Linear programs and primal--dual bounds

For the primal $\max c^{\mathsf T} x$ subject to $Ax\leq b$, $x\geq 0$, the dual is $\min b^{\mathsf T} y$ subject to $A^{\mathsf T} y\geq c$, $y\geq 0$. If both points are feasible,

$c^{\mathsf T} x \leq x^{\mathsf T} A^{\mathsf T} y = y^{\mathsf T} A x \leq y^{\mathsf T} b$.

The first inequality uses $A^{\mathsf T} y-c\geq 0$ and $x\geq 0$; the second uses $b-Ax\geq 0$ and $y\geq 0$. Every primal feasible value is a lower bound and every dual feasible value an upper bound. Equality certifies optimality without trusting the algorithm that found either point.

### Worked exact certificate

Maximize $3x+2y$ subject to $x+y\leq 4$, $2x+y\leq 6$, $x,y\geq 0$. Candidate $(2,2)$ has value 10. Dual multipliers $(1,1)$ satisfy the coefficient bounds $(3,2)$ and give bound $4+6=10$. Equality proves both are optimal. Complementary slackness explains why both resources bind.

Strong duality says that, under the usual finite-dimensional LP hypotheses, an attained finite optimum has a matching dual optimum. For general convex programs, equality needs additional regularity. A reported duality gap is meaningful only after primal and dual feasibility residuals and numerical tolerances are stated.

## Infeasibility, unboundedness, and alternatives

Farkas' lemma gives an exclusive alternative: either there exists $x\geq 0$ with $Ax=b$, or there exists $y$ with $A^{\mathsf T} y\geq 0$ and $b^{\mathsf T} y<0$, but not both. The second vector proves infeasibility because a feasible $x$ would imply $b^{\mathsf T} y=x^{\mathsf T} A^{\mathsf T} y\geq 0$, a contradiction. An infeasibility certificate should be independently checkable.

Unboundedness is different. A feasible ray $x+t d$, $t\geq 0$, with $Ad\leq 0$, $d\geq 0$, and $c^{\mathsf T} d>0$ proves a maximization LP unbounded. In applications it often exposes a missing capacity, conservation law, budget, or sign restriction. It can also accurately describe the written model. Diagnose formulation before blaming the algorithm.

## Sensitivity, integrality, and multiple objectives

Dual multipliers are local marginal values only while the active set and regularity remain stable. Large perturbations can switch constraints, and uncertain coefficients can reverse a recommendation. Report a parametric value curve and decision-switch boundaries rather than extending a derivative indefinitely.

If decisions are indivisible, the continuous relaxation gives a bound but not necessarily an implementable plan. Rounding can violate coupled constraints. An integrality gap compares the discrete optimum with the relaxation bound; it is a property of the formulation and instance, not simply solver error.

For multiple criteria $f_1,\dots,f_k$, a weighted sum $\sum w_k f_k(x)$ requires declared scales and value judgments. A solution is Pareto efficient if no feasible alternative improves every criterion and strictly improves at least one. Varying positive weights reveals supported efficient points, but can miss nonsupported points in nonconvex sets. Hard constraints may represent nonnegotiable limits more transparently than huge penalties.

## Common errors and diagnostics

- **Stationary means optimal:** false without convexity or another global argument.
- **KKT is always necessary:** false when a constraint qualification fails.
- **Small objective change means close decisions:** a flat objective can permit widely separated near-optima.
- **Dual variables are causal effects:** they are sensitivities inside the declared model.
- **Solver success proves feasibility:** independently recompute residuals and integrality.
- **A penalty is a requirement:** a finite penalty permits violation; a hard constraint forbids it.
- **One objective is neutral:** objective choice and scaling encode priorities.

## The first-course continuation

[Linear Programming and Optimisation](#/books/linear-programming-optimisation) develops simplex, degeneracy, two-phase initialisation, strong duality, sensitivity and network applications. This modeling chapter retains its feasible plans and exact bounds as examples of the distinction between a solved formulation and a defensible application.

## A finite penalty and a hard requirement answer different questions

Consider minimising the square of the distance from a production target two, subject to production at most one. The constrained optimum is one. Replace the constraint by a squared violation penalty with any finite positive coefficient. On the violating side the penalised objective is $(x-2)^2+M(x-1)^2$, whose minimiser is $(M+2)/(M+1)$. This is strictly greater than one for every finite coefficient. Increasing the coefficient makes the violation smaller, but it never makes this penalised solution exactly feasible. The example shows why a very large penalty cannot be described as a hard operational limit without further analysis.

Some penalties are exact under explicit multiplier assumptions. Suppose a convex minimisation problem has a primal optimum and nonnegative optimal multipliers for its inequality constraints, giving a matching dual lower bound. Penalise each positive violation by a common coefficient strictly larger than every such multiplier. For any decision in the unchanged base domain, the penalised objective is at least its Lagrangian value. More precisely, each violating constraint contributes a strictly positive excess coefficient times its violation, while a satisfied constraint contributes a nonnegative excess over its nonpositive Lagrangian term. The Lagrangian is globally bounded below by the optimum. Therefore every infeasible decision has strictly larger penalised value than the constrained optimum, while a constrained optimiser attains that optimum with zero penalty.

This proves exactness for a linear positive-part penalty under the stated dual attainment hypothesis. It does not determine a usable coefficient before the multiplier is known, and it does not remove numerical conditioning difficulties. A coefficient equal to the largest multiplier may permit infeasible ties. The squared penalty in the first example has different mathematics near zero violation, which is why the same argument does not apply to it.

## A relaxation supplies a bound before it supplies a plan

Suppose an indivisible decision can only take a finite set of values, and enlarge that set to a convex relaxation. For minimisation, the relaxed optimum is a lower bound on the discrete optimum because minimising over more alternatives cannot increase the value. Any feasible discrete plan is an upper bound. Their difference brackets the maximum possible improvement still available in the written model.

**Worked application: two indivisible deliveries.** Each delivery requires one vehicle and yields benefit three. The shared fuel budget permits at most one and a half vehicle units in a continuous relaxation, but only one whole vehicle in the actual decision. The relaxation benefit is four and a half, while the best implementable benefit is three. Rounding the relaxed vehicle count upward violates the budget; rounding downward happens to be feasible in this one-dimensional example. In a multi-resource model, independent rounding can break a different constraint or destroy a balance equation. The bound remains useful even when no general rounding rule is justified.

A gap is meaningful only when its endpoints concern the same objective convention and the same original data. A lower bound from a relaxed model with altered costs cannot be paired automatically with an incumbent under the original costs. Relative gaps also require a declared denominator, especially near zero or when the objective can change sign. An absolute gap has simpler units and often clearer operational meaning.

## Certification cannot choose the objective's meaning

A mathematical certificate establishes a statement about a formulated problem. It cannot decide whether a waiting-time average gives adequate weight to rare severe delays, whether a budget is legitimate, or whether two outcomes should be traded at a fixed exchange rate. Those choices enter before optimization through the objective, constraints, uncertainty representation, and feasible actions.

For example, an exact optimum of a weighted sum may change when one outcome is recorded in a different unit unless its weight is converted at the same time. Positive weights guarantee a Pareto-efficient minimiser when a minimiser exists: any feasible point improving every criterion and strictly improving one would lower the weighted sum, a contradiction. This proof explains the efficiency claim, but supplies no preference argument for the chosen weights. Reporting several efficient alternatives and the assumptions supporting their certificates often informs a decision better than hiding those assumptions behind one precise number.

## Exercises

<a id="complete-solutions"></a>

### Exercise 1
<a id="optimization-duality-certificates-ex-1"></a>

Prove the supporting inequality implies global optimality under the variational inequality on a convex feasible set.

<details>
<summary>Hint 1</summary>

Apply the supporting inequality to an arbitrary feasible comparison point.

</details>
<details>
<summary>Hint 2</summary>

The variational inequality makes its linear term nonnegative.

</details>
<details>
<summary>Full solution</summary>

Convexity gives $f(y)\geq f(x*)+\nabla f(x*)^{\mathsf T}(y-x*)$. The variational inequality makes the second term nonnegative for every feasible $y$, hence $f(y)\geq f(x*)$ globally.

</details>

### Exercise 2
<a id="optimization-duality-certificates-ex-2"></a>

Project $a=(-2,3,-1)$ onto the nonnegative orthant under squared Euclidean distance.

<details>
<summary>Hint 1</summary>

The squared objective separates by coordinate.

</details>
<details>
<summary>Hint 2</summary>

Each negative target coordinate is closest to the boundary zero.

</details>
<details>
<summary>Full solution</summary>

Orthant projection acts coordinatewise, replacing negative coordinates by zero. The answer is $(0,3,0)$; each coordinate separately minimizes $(x_i-a_i)^2$ over $x_i\geq 0$.

</details>

### Exercise 3
<a id="optimization-duality-certificates-ex-3"></a>

Minimize $x^2+4y^2$ subject to $x+y=1$; derive the multiplier and verify directly.

<details>
<summary>Hint 1</summary>

Eliminate one variable or solve stationarity with one equality multiplier.

</details>
<details>
<summary>Hint 2</summary>

Verify the equality and the sign convention of the multiplier independently.

</details>
<details>
<summary>Full solution</summary>

With $L=x^2+4y^2+\nu(x+y-1)$, stationarity gives $2x+\nu=0$, $8y+\nu=0$, so $x=4y$. Feasibility gives $(x,y)=(4/5,1/5)$ and $\nu=-8/5$. Substitution into $y=1-x$ yields the same unique convex minimum.

</details>

### Exercise 4
<a id="optimization-duality-certificates-ex-4"></a>

Solve the worked resource-allocation problem when the bound is 4, and compare the exact value change with the multiplier prediction from bound 3.

<details>
<summary>Hint 1</summary>

Solve the new constrained quadratic exactly.

</details>
<details>
<summary>Hint 2</summary>

Compare a finite change with the old local derivative prediction.

</details>
<details>
<summary>Full solution</summary>

Stationarity with $x+y=4$ gives $x-y=1$, hence $(5/2,3/2)$. Its objective is $1/2$, versus 2 at bound 3, a decrease of 1.5. The old multiplier predicts 2; it is only a local derivative because the multiplier changes.

</details>

### Exercise 5
<a id="optimization-duality-certificates-ex-5"></a>

State all KKT conditions for minimizing $x^2+y^2$ subject to $1-x-y\leq 0$ and solve them.

<details>
<summary>Hint 1</summary>

Use a nonnegative multiplier for the written less-than inequality.

</details>
<details>
<summary>Hint 2</summary>

Check feasibility, stationarity and complementary slackness together.

</details>
<details>
<summary>Full solution</summary>

Put $g=1-x-y\leq 0$. KKT gives feasibility, $\lambda\geq 0$, $2x-\lambda=0$, $2y-\lambda=0$, and $\lambda(1-x-y)=0$. The origin is infeasible, so the constraint binds: $x=y=1/2$, $\lambda=1$.

</details>

### Exercise 6
<a id="optimization-duality-certificates-ex-6"></a>

Give a one-dimensional optimum for which the usual KKT multiplier does not exist because the active constraint has zero gradient.

<details>
<summary>Hint 1</summary>

Use a constraint that permits only one point but has zero derivative there.

</details>
<details>
<summary>Hint 2</summary>

A nonzero objective gradient cannot be cancelled by that constraint gradient.

</details>
<details>
<summary>Full solution</summary>

Minimize $f(x)=x$ subject to $g(x)=x^2\leq 0$. Zero is the only feasible point, but stationarity requires $1+\lambda(0)=0$, impossible. The active gradient vanishes and Slater fails.

</details>

### Exercise 7
<a id="optimization-duality-certificates-ex-7"></a>

Derive the dual of $\max 2x+y$ subject to $x+y\leq 3$, $x\leq 2$, $x,y\geq 0$ and give an equal-value certificate at $(2,1)$.

<details>
<summary>Hint 1</summary>

Assign one nonnegative dual variable to each upper bound.

</details>
<details>
<summary>Hint 2</summary>

Check all coefficient inequalities before comparing the objectives.

</details>
<details>
<summary>Full solution</summary>

The dual is $\min 3u+2v$ subject to $u+v\geq 2$, $u\geq 1$, $u,v\geq 0$. At $(u,v)=(1,1)$ its value is 5, matching $2(2)+1=5$ at primal $(2,1)$.

</details>

### Exercise 8
<a id="optimization-duality-certificates-ex-8"></a>

Prove weak LP duality line by line, naming the sign assumption used in each inequality.

<details>
<summary>Hint 1</summary>

Start with primal feasibility multiplied by nonnegative dual weights.

</details>
<details>
<summary>Hint 2</summary>

Use the dual coefficient inequality multiplied by nonnegative primal coordinates.

</details>
<details>
<summary>Full solution</summary>

Dual feasibility gives $A^Ty-c\geq 0$; dotting with $x\geq 0$ gives $c^Tx\leq x^TA^Ty$. Primal feasibility gives $b-Ax\geq 0$; dotting with $y\geq 0$ gives $y^TAx\leq y^Tb$. Combining proves the claim.

</details>

### Exercise 9
<a id="optimization-duality-certificates-ex-9"></a>

For the worked $3x+2y$ program, use complementary slackness to recover the primal candidate from its dual certificate.

<details>
<summary>Hint 1</summary>

Identify which dual variables and primal coordinates are strictly positive.

</details>
<details>
<summary>Hint 2</summary>

Complementary slackness forces the corresponding constraints to equality.

</details>
<details>
<summary>Full solution</summary>

Both dual variables are positive, so both primal slacks vanish: $x+y=4$ and $2x+y=6$. Thus $x=2$, $y=2$, and nonnegativity holds.

</details>

### Exercise 10
<a id="optimization-duality-certificates-ex-10"></a>

Certify that $x\geq 0$, $x=-1$ is infeasible using Farkas' alternative.

<details>
<summary>Hint 1</summary>

Multiply the equality by a sign that contradicts nonnegativity.

</details>
<details>
<summary>Hint 2</summary>

A certificate is an algebraic contradiction for every putatively feasible point.

</details>
<details>
<summary>Full solution</summary>

Take scalar $A=1$, $b=-1$, and certificate $y=1$. Then $A^Ty=1\geq 0$ while $b^Ty=-1<0$, proving infeasibility.

</details>

### Exercise 11
<a id="optimization-duality-certificates-ex-11"></a>

Give a feasible improving ray proving $\max x+y$ subject to $x-y\leq 1$, $x,y\geq 0$ is unbounded.

<details>
<summary>Hint 1</summary>

Search for a nonnegative direction preserving the difference x minus y.

</details>
<details>
<summary>Hint 2</summary>

A feasible ray also needs a strictly positive objective slope.

</details>
<details>
<summary>Full solution</summary>

$(0,0)$ is feasible and $d=(1,1)$ satisfies $(1,-1)^Td=0\leq 0$, $d\geq 0$, and improves the objective by 2 per unit. Thus $(t,t)$ proves unboundedness.

</details>

### Exercise 12
<a id="optimization-duality-certificates-ex-12"></a>

Distinguish infeasible, unbounded, and finite-but-unattained problems with one mathematical example of each.

<details>
<summary>Hint 1</summary>

Distinguish an empty feasible set from a feasible improving ray.

</details>
<details>
<summary>Hint 2</summary>

For nonattainment use an open domain; a finite LP optimum on its usual closed polyhedron is attained.

</details>
<details>
<summary>Full solution</summary>

Infeasible: minimize zero with $x\geq 1,x\leq 0$. Unbounded: minimize $-x$ over $x\geq 0$. Finite but unattained: minimize $x$ over open set $x>0$; the infimum zero is not feasible.

</details>

### Exercise 13
<a id="optimization-duality-certificates-ex-13"></a>

Show that multiplying an inequality constraint by $\alpha>0$ divides its KKT multiplier by $\alpha$.

<details>
<summary>Hint 1</summary>

Write stationarity before and after rescaling the constraint.

</details>
<details>
<summary>Hint 2</summary>

The product of multiplier and constraint gradient must remain unchanged.

</details>
<details>
<summary>Full solution</summary>

Replacing $g$ by $\alpha g$ changes stationarity contribution to $\tilde{\lambda} \alpha \nabla g$. Equality requires $\tilde{\lambda}=\lambda/\alpha$; signs and complementary slackness are preserved.

</details>

### Exercise 14
<a id="optimization-duality-certificates-ex-14"></a>

A verified primal-feasible point has value 17.2 and a verified dual-feasible point has value 17.5. What is certified, and what is not?

<details>
<summary>Hint 1</summary>

Use the maximisation primal and dual bound directions stated in the chapter.

</details>
<details>
<summary>Hint 2</summary>

A reported pair inconsistent with weak duality cannot certify its claimed interval.

</details>
<details>
<summary>Full solution</summary>

For maximization, verified primal feasibility places the optimum in $[17.2,17.5]$, so the absolute gap is at most 0.3. This does not certify uniqueness, decision stability, model validity, or unverified numerical feasibility.

</details>

### Exercise 15
<a id="optimization-duality-certificates-ex-15"></a>

Maximize $x+y$ with $2x+2y\leq 3$, first continuously and then with nonnegative integer variables; compute the gap.

<details>
<summary>Hint 1</summary>

The continuous problem constrains only the sum.

</details>
<details>
<summary>Hint 2</summary>

For integer variables that sum is an integer, so tighten its upper bound accordingly.

</details>
<details>
<summary>Full solution</summary>

Continuously, $x+y\leq 1.5$, so optimum value is 1.5. With nonnegative integers, $x+y\leq 1$, so value is 1. The additive integrality gap is 0.5 (ratio 1.5 under that convention).

</details>

### Exercise 16
<a id="optimization-duality-certificates-ex-16"></a>

Find all Pareto-efficient points for minimizing $(x,1-x)$ over $0\leq x\leq 1$ and explain why none is intrinsically preferred.

<details>
<summary>Hint 1</summary>

Compare improving one component with the resulting change in the other.

</details>
<details>
<summary>Hint 2</summary>

Pareto efficiency is a partial order and does not supply preference weights.

</details>
<details>
<summary>Full solution</summary>

Every $x \in [0,1]$ is efficient: decreasing the first coordinate increases the second and conversely. Selection needs preferences or constraints not supplied by Pareto efficiency.

</details>

### Exercise 17
<a id="optimization-duality-certificates-ex-17"></a>

Diagnose a report that gives six decimal places for an optimum but omits units, feasibility residuals, a bound, and sensitivity.

<details>
<summary>Hint 1</summary>

An objective value alone leaves several logical claims undecided.

</details>
<details>
<summary>Hint 2</summary>

Request the actual feasible point, bound, units and parameter assumptions.

</details>
<details>
<summary>Full solution</summary>

Decimal precision is not a certificate. State model and units, independently evaluated residuals, a primal--dual or other bound, tolerances, and perturbations reflecting coefficient uncertainty; otherwise implementability and robustness are unknown.

</details>

### Exercise 18
<a id="optimization-duality-certificates-ex-18"></a>

Design a perturbation audit for an allocation model whose recommendation changes when two objective coefficients nearly tie.

<details>
<summary>Hint 1</summary>

Track the difference between the competing objective contributions.

</details>
<details>
<summary>Hint 2</summary>

Find the perturbation boundary where the preferred allocation switches.

</details>
<details>
<summary>Full solution</summary>

Define the coefficient difference and credible range; solve a grid and interval endpoints; record switch surfaces, objective gaps between the best two allocations, active constraints, dual bounds, and residuals. Audit structural alternatives separately.

</details>

## Project

Build and audit a resource-allocation model with at least four activities, three capacity constraints, two competing objectives, and one indivisible decision. Supply a units-and-scope table, an independently checked feasible plan, a continuous relaxation, primal and dual certificates with residuals, and an integer implementation with its integrality gap. Trace a two-parameter switch map for uncertain objective coefficients, compare weighted-sum and hard-constraint treatments of the second objective, and construct one deliberately infeasible variant with a checkable alternative certificate. End with a claim ledger separating mathematical optimality, numerical tolerance, empirical input uncertainty, and value judgments.

## Summary

A feasible plan and a matching bound certify the written optimization problem. They do not justify its coefficients or objective. Dynamic decisions next add information timing, recourse and policy evaluation.
