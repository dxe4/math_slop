var e=`---
id: deep-dive-operations-allocation-and-flow-certificates
title: "Operating models: allocation and flow certificates"
license: CC BY-SA 4.0
---

# Operating models: allocation and flow certificates

Turn a feasible allocation or flow into a proved optimum, and keep sensitivity, integrality and causal questions separate.

Before reading: [Linear Algebra: Structure and Proofs](/resources/library:book-linear-algebra-structure-proofs/), [Graph Theory](/resources/library:book-graph-theory/).

## 1. Formulate the operation before optimizing

An OR model needs six ledgers.

1. **Decision variables:** quantities the decision-maker can actually set, at the time they are set.
2. **State and demand:** quantities inherited from the system or revealed later.
3. **Constraints:** physical, temporal, contractual, safety, and policy limits.
4. **Objective:** the declared measure of performance, including whose outcomes count.
5. **Uncertainty:** scenarios, probability model, ambiguity set, or explicit omission.
6. **implementation:** integrality, information delay, solver time, recourse, and monitoring.

Suppose a food bank allocates boxes to three sites. Variables may be shipped boxes, not “need.” A constraint may be van capacity, not a social preference. An objective minimizing unserved registered requests does not measure unregistered need. The mathematics can audit the written allocation without resolving the normative definition of need.

### Units audit

If $x_{j}$ is batches/week and coefficient $a_{ij}$ is staff-hours/batch, then $a_{ij}x_{j}$ is staff-hours/week. The right side of that constraint must have the same unit. A dual multiplier for that constraint has objective-units per staff-hour. Write units into the data table before passing it to a solver.

## Worked example: linear allocation and an exact certificate

Consider two activities:

$$\\text{maximize }z=5x+4y.$$

subject to

$$6x+4y\\le 24$$

$$x+2y\\le 6$$

$$x,y\\ge 0$$

The first constraint might be machine-hours per day and the second technician-hours per day after consistent scaling. The feasible corner where both bind solves

$3x+2y=12$, $x+2y=6$,

so $x=3$, $y=1.5$, with objective $z=21$.

To certify this without relying on a drawing, find nonnegative multipliers $u,v$ for the constraints such that

$6u+v\\ge 5$, $4u+2v\\ge 4$.

Take $u=3/4$, $v=1/2$. Both inequalities hold with equality. Then every feasible plan satisfies

$$5x+4y \\le u(6x+4y)+v(x+2y) \\le 24u+6v=21$$

The feasible plan attains 21, so it is optimal. The multipliers give a checkable upper-bound certificate.

### Sensitivity range

If the first capacity increases from 24 to $24+\\delta$ while the same two constraints remain active, solve

$6x+4y=24+\\delta$, $x+2y=6$.

The solution is $x=3+\\delta/4$, $y=1.5-\\delta/8$; the objective becomes $21+(3/4)\\delta$. This agrees with multiplier $u=3/4$. But feasibility requires $y\\ge 0$, so this basis cannot remain valid beyond $\\delta=12$. A shadow price without its validity range invites extrapolation error.

### Integer and indivisible actions

If $x,y$ must be whole batches, $(3,1.5)$ is infeasible. Checking nearby integer points gives $(3,1)$ with value 19 and $(2,2)$ with value 18. Rounding each coordinate independently can violate a constraint or miss the best discrete plan. The continuous optimum remains an upper bound, while a discrete feasible plan is a lower bound for maximization. A full integer-optimization treatment belongs to the numerical-optimization shelf; here the important operational boundary is to declare indivisibility before implementation.

### Multiple objectives

Cost, delay, reliability, equity, emissions, and staff burden rarely collapse naturally into one number. Three honest approaches are:

- treat essential requirements as constraints and optimize one remaining objective;
- report a Pareto frontier of nondominated plans;
- use a weighted objective with units normalized and weights exposed to stakeholders.

A point is Pareto-dominated if another feasible plan is no worse on every listed criterion and strictly better on at least one. Pareto efficiency does not select a morally preferred point; it only removes plainly dominated choices relative to the listed criteria.

## 3. Network flow from conservation

Let a directed graph have source $s$, sink $t$, edge capacities $c_{e}\\ge 0$, and flows $0\\le f_{e}\\le c_{e}$. At every intermediate node, inflow equals outflow. The flow value is total net outflow from $s$.

Consider edges:

- $s\\to a$ capacity 4,
- $s\\to b$ capacity 3,
- $a\\to b$ capacity 2,
- $a\\to t$ capacity 2,
- $b\\to t$ capacity 5.

Send 2 along $s-a-t$, 2 along $s-a-b-t$, and 3 along $s-b-t$. Every constraint holds and total value is 7. The cut $\\{s\\}$ has capacity $4+3=7$, so no flow can exceed 7. This flow and cut are a primal-dual certificate pair.

The cut bound follows directly from conservation. Sum the balance equations over a set $S$ containing $s$ but not $t$: internal edges cancel. The flow value is the sum crossing out of $S$ minus the sum crossing into it, so

$$|f|=\\sum_{e\\in\\delta^+(S)}f_e-\\sum_{e\\in\\delta^-(S)}f_e\\le\\sum_{e\\in\\delta^+(S)}c_e.$$

The last step uses nonnegative incoming flow and the outgoing capacity bounds. Thus an equal-valued feasible flow and cut certify a global optimum without requiring an optimality claim from a solver.

### Residual networks

After sending flow, a residual edge records how much more can travel forward; a reverse residual edge records how much previously assigned flow can be canceled. Reverse edges are essential. A greedy early path may use scarce capacity that a later rerouting needs.

Edmonds–Karp repeatedly chooses a shortest residual $s-t$ path by edge count, augments by its minimum residual capacity, and stops when no path remains. At termination, vertices reachable from $s$ define a minimum cut. With integer capacities, all computed flows remain integers because each bottleneck is integer.

### Static-flow boundary

A static edge capacity such as “20 vehicles per minute” ignores travel time and may ignore congestion, spillback, direction changes, and shared intersection phases. Time-expanded networks copy nodes across time steps and connect carryover and movement arcs, but discretization can become large. A maximum flow is not a causal estimate of how building a road changes demand.

### Shortest path versus maximum flow

Shortest path chooses one least-cost route under additive edge costs. Maximum flow distributes quantity across routes under capacities. Min-cost flow combines conservation, capacity, supply/demand, and per-unit costs. Confusing the questions produces absurd results: the shortest relief route may carry only one truck; the highest-capacity routes may be much longer.

## 7. Decisions under uncertainty

Suppose action $a$ has loss $L(a,\\xi)$ under state $\\xi$.

- expected-loss optimization minimizes $\\sum p_\\xi L(a,\\xi)$ for a stated probability model;
- worst-case optimization minimizes $\\max_{\\xi\\in U}L(a,\\xi)$ over a stated set;
- chance constraints require a constraint with at least a stated probability;
- minimax regret compares each action with the hindsight-best action in each state.

### Worked regret table

Two capacities \`Small\` and \`Large\` have costs:

| Demand state | Small | Large |
| --- | ---: | ---: |
| Low | 4 | 7 |
| High | 15 | 9 |

Statewise best costs are 4 and 9. Regrets are $(0,6)$ for Small and $(3,0)$ for Large, so maximum regrets are 6 and 3. Large is minimax-regret optimal. This conclusion does not use probabilities, but it depends completely on the two scenarios and cost table. Adding an extreme state or revising costs can change it.

Expected value of perfect information compares the best expected loss available after learning the state with the best expected loss before. It is an upper bound on what one should pay for perfect information under the same model; a real data source is delayed, noisy, and partial.

## Exercise 1: Dual certificate

For $\\max 3x+2y$ with $x+y\\le 4$, $2x+y\\le 6$, $x,y\\ge 0$, show $(2,2)$ is optimal.

**Hint 1.** Check the proposed point against both constraints before computing its objective.

**Hint 2.** Add the two constraints with nonnegative weights. Compare the resulting coefficient of each nonnegative decision variable with its objective coefficient.

**Solution.** It is feasible and has value 10. Multipliers 1 on each constraint give coefficient bounds $1+2=3$ for $x$ and $1+1=2$ for $y$, and total upper bound $4+6=10$. Equality certifies optimality.

## Exercise 2: Flow sensitivity

In the five-edge network above, increase capacity $a\\to t$ from 2 to 3. Must max flow rise?

**Hint 1.** Use a cut to bound every feasible flow, even after the changed edge capacity.

**Hint 2.** Ask whether the changed edge crosses the source cut, then check whether the old feasible flow remains allowed.

**Solution.** No. The cut $\\{s\\}$ still has capacity 7, and the previous flow of 7 remains feasible, so maximum flow remains exactly 7. Increasing a nonbinding or downstream edge cannot overcome the source cut.

## Exercise 3: Causal boundary

A hospital adds staff on historically busy days, and those days still have longer waits. Does the data show added staff caused longer waits?

**Hint 1.** Identify why staffing levels differ between the observed days.

**Hint 2.** Separate a conditional operational calculation from an intervention claim; ask which common cause changes both staffing and waiting.

**Solution.** No. Staffing responds to anticipated demand, so demand severity confounds the association. A causal analysis needs an assignment mechanism, design, or defensible adjustment; an operational queue model can simulate conditional scenarios but does not identify effects automatically.


## Summary

Produce a feasible point and a matching upper bound, interpret a flow-cut certificate, and state why an operational association alone does not identify a causal effect.
`;export{e as default};