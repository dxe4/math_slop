var e=`---
id: deep-dive-operations-research-systems
title: "Operations Research: Allocation, Flows, Queues, and Inventory"
license: CC BY-SA 4.0
---

# Operations Research: Allocation, Flows, Queues, and Inventory

Before reading: [Finite-Dimensional Linear Algebra: Structure and Proof](/resources/library:book-linear-algebra-structure-proofs/), [Graph Theory](/resources/library:book-graph-theory/). The focused continuation is [Operating models: allocation and flow certificates](/resources/library:deep-dive-operations-allocation-and-flow-certificates/); original notes remain with this retained reading.

Focused readings: [allocation and flow certificates](./operations-allocation-and-flow-certificates.md) and [queues, inventory and uncertainty](./operations-queues-inventory-and-uncertainty.md). This earlier complete reading keeps its original models, review questions, headings and saved-work identities.

Operations research turns an operating question into a feasible-set, objective, uncertainty, and implementation problem. Its strength is not the word “optimal.” Its strength is the complete chain from assumptions to a plan, a certificate, and a stress test.

This deep dive develops linear allocation, network flow, queues, and inventory as one family of constrained balance problems. It assumes linear algebra, elementary calculus, and probability. Every numerical result names its units and operating regime.

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

## 2. Linear allocation and an exact certificate

Consider two activities:

$$maximize z=5x+4y$$

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

### Residual networks

After sending flow, a residual edge records how much more can travel forward; a reverse residual edge records how much previously assigned flow can be canceled. Reverse edges are essential. A greedy early path may use scarce capacity that a later rerouting needs.

Edmonds–Karp repeatedly chooses a shortest residual $s-t$ path by edge count, augments by its minimum residual capacity, and stops when no path remains. At termination, vertices reachable from $s$ define a minimum cut. With integer capacities, all computed flows remain integers because each bottleneck is integer.

### Static-flow boundary

A static edge capacity such as “20 vehicles per minute” ignores travel time and may ignore congestion, spillback, direction changes, and shared intersection phases. Time-expanded networks copy nodes across time steps and connect carryover and movement arcs, but discretization can become large. A maximum flow is not a causal estimate of how building a road changes demand.

### Shortest path versus maximum flow

Shortest path chooses one least-cost route under additive edge costs. Maximum flow distributes quantity across routes under capacities. Min-cost flow combines conservation, capacity, supply/demand, and per-unit costs. Confusing the questions produces absurd results: the shortest relief route may carry only one truck; the highest-capacity routes may be much longer.

## 4. Queues: variability near capacity

Queue notation describes arrival process, service distribution, number of servers, system capacity, population, and discipline. **M/M/1** means Poisson arrivals, independent exponential service, one server, usually infinite room and first-come-first-served unless qualified.

Let arrival rate be $\\lambda$ customers/hour and service rate be $\\mu$ customers/hour. Utilization is $\\rho=\\lambda/\\mu$. When $\\rho<1$, the stationary number-in-system distribution is

$$P(N=n)=(1-\\rho)\\rho^{n}$$

Then

$$L=\\rho/(1-\\rho)$$

$$W=L/\\lambda=1/(\\mu-\\lambda)$$

$$W_{q}=W-1/\\mu=\\lambda/[\\mu(\\mu-\\lambda)]$$

### Worked clinic desk

Suppose $\\lambda=9/hour$, $\\mu=12/hour$. Then $\\rho=0.75$, $L=3$ customers, $W=1/3 hour=20 minutes$, and mean service time is 5 minutes, so $W_{q}=15 minutes$.

If $\\lambda$ is estimated as $9\\pm1/hour$ while $\\mu=12$, the modeled mean system time ranges from $1/(12-8)=15 minutes$ to $1/(12-10)=30 minutes$. Symmetric rate uncertainty produces asymmetric wait uncertainty. At $\\lambda=12$, the stationary formulas cease to exist.

### Little's law without memorylessness

For a stable conserved customer population,

$$L=\\lambda W$$

It holds far beyond M/M/1 when long-run averages exist and boundary effects vanish. If a cafeteria has throughput 80 people/hour and mean time inside 0.25 hour, average number inside is 20. Little's law alone does not tell how much time is waiting versus service or how variable the queue is.

### Multiple servers

In an M/M/c queue, total service capacity is $c\\mu$, so stability requires $\\lambda<c\\mu$, but waiting is not obtained by replacing $\\mu$ with $c\\mu$ in the M/M/1 formula. When $n<c$, the departure rate is $n\\mu$; when $n\\ge c$, it is $c\\mu$. The Erlang-C formula follows from this birth-death chain. Pooling often reduces delay relative to isolated servers, but skills, travel, priorities, and correlated outages can reverse operational conclusions.

### Queue validation

Check interarrival and service-time distributions with time-order plots, not only histograms. Test rate stability across hour and day. Record abandonment and blocking; otherwise throughput differs from attempted arrivals. Check dependence: a large job may create several follow-up jobs. Simulate scheduled and priority rules when Markov formulas do not fit, and validate the simulator against an exact case before trusting a complex one.

Average waiting can hide tail and group disparity. Report quantiles, probability of exceeding a meaningful threshold, abandonment, and results by declared class where appropriate.

## 5. Inventory as a balance plus timing problem

At review times, an inventory balance is

$$I_{t+1}=I_{t}+Q_{t}-D_{t}$$

with conventions needed for whether demand before replenishment can be backlogged, lost, or partially served. The **inventory position** may include on-hand stock plus outstanding orders minus backorders; confusing it with on-hand inventory leads to duplicate ordering.

### Economic order quantity

Under constant deterministic demand $D$ units/year, order setup cost $K$ currency/order, holding cost $h$ currency/(unit·year), instantaneous replenishment, no shortage, and no quantity discount, average annual relevant cost is

$$C(Q)=KD/Q+hQ/2$$

The unique minimizer is

$$Q*=\\sqrt{2KD/h}$$

Take $D=2400 units/year$, $K=50 currency/order$, $h=6 currency/(unit\\cdot year)$. Then

$$Q*=\\sqrt{2\\times 2400\\times 50/6}=\\sqrt{40000}=200 units$$

There are 12 orders/year. Annual setup cost is $50\\times 12=600$; average inventory is 100, so holding cost is also 600. Equality of the two relevant cost components is a check at the optimum.

### EOQ sensitivity

Because $Q*$ depends on a square root, a 10% relative change in $D$ creates about a 5% relative change in $Q*$ locally. Cost is flatter near the optimum than the order quantity itself: an approximate quantity can have almost optimal modeled cost. This is operationally important when package sizes force rounding.

### Single-period uncertain demand

For a perishable item ordered once, let demand have distribution $D$, selling price $p$, unit cost $c$, and salvage $s$, with $p>c>s$. Underage cost is $C_{u}=p-c$; overage cost is $C_{o}=c-s$. The newsvendor optimum satisfies the critical fractile

$$P(D\\le Q*) \\ge C_{u}/(C_{u}+C_{o})$$

with the smallest such $Q*$ for a discrete distribution.

Why? Increasing $Q$ by one gains $C_{u}$ when demand exceeds current stock and loses $C_{o}$ when it does not. Order until the weighted marginal gain changes sign.

### Worked discrete demand

Demand is 10, 20, or 30 with probabilities 0.2, 0.5, 0.3. Let $p=9$, $c=5$, $s=1$. Then $C_{u}=4$, $C_{o}=4$, and target fractile is 0.5. The cumulative probabilities at 10 and 20 are 0.2 and 0.7, so the smallest order reaching 0.5 is 20.

Those probabilities are model inputs, not timeless facts. Promotions, substitution, censoring from past stockouts, and changing customer populations can bias them. If past sales equal inventory during stockouts, observed sales underestimate demand.

### Reorder points and service

With lead-time demand mean $m$ and standard deviation $s_{L}$, a reorder point of $m+zs_{L}$ sometimes targets a normal-approximation cycle service level $\\Phi(z)$. It does not automatically target fill rate, expected shortage, or customer waiting, and it assumes an appropriate lead-time demand law. State the service metric rather than saying “95% safe.”

## 6. Scheduling and dynamic information

In deterministic single-machine scheduling, each job may have processing time $p_{j}$, release time $r_{j}$, due date $d_{j}$, weight $w_{j}$, and completion time $C_{j}$. Objectives such as makespan, total completion time, maximum lateness, and weighted tardiness encode different priorities.

When all jobs are available on one machine and preemption is forbidden, ordering by shortest processing time minimizes total completion time. An adjacent-swap proof suffices: if consecutive jobs have $p_{i}>p_{j}$, swapping them changes the contribution of their completion times by $p_{j}-p_{i}<0$, so every inversion can be removed.

This theorem fails for weighted completion time, release dates, sequence-dependent setups, multiple machines, precedence constraints, and objectives centered on due dates. A rule is never merely “efficient”; name the exact criterion and setting.

Dynamic decisions distinguish **here-and-now** variables chosen before uncertainty from **recourse** variables chosen after observing it. A staffing plan may be fixed weekly while shift reassignment responds daily. Giving a model access to future demand when evaluating a policy creates perfect-information bias.

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

## 8. Simulation: an experiment on a model

Discrete-event simulation represents event times and state transitions. A queue simulation should specify:

- interarrival generator and units;
- service generator and dependence;
- discipline, priorities, capacity, and abandonment;
- warm-up removal or initial-state interpretation;
- run length, independent replications, and random seeds;
- estimands and uncertainty intervals;
- invariants such as arrivals = completions + abandoned + remaining.

Validate against M/M/1 formulas in a stable case before adding schedules or priorities. A simulation interval measures Monte Carlo uncertainty conditional on the simulator and input law. It does not include model discrepancy unless explicitly designed to.

Common random numbers—using matched random streams for two policies—can reduce variance of their difference when responses are positively correlated. Do not treat every event within one run as an independent replication.

## 9. An integrated example: relief-stock network

A depot must choose stock $Q$, then route available units after one of several demand scenarios occurs. The first-stage holding cost discourages excess stock; second-stage flow sends supply through capacity-limited roads; unserved demand incurs a declared penalty.

The formulation combines:

- inventory balance at the depot;
- network-flow conservation;
- a here-and-now order quantity;
- scenario-specific recourse flows;
- expected, robust, or regret-based objectives.

An audit asks whether road capacity is simultaneous or daily aggregate, whether demand locations are represented fairly, whether the penalty reflects human consequences, whether scenarios cover correlated road failure and demand surges, and whether stock expiry is modeled. The optimizer can return a certified solution to the written problem while those questions remain open.

## 10. Fully worked review

### A. Dual certificate

For $\\max 3x+2y$ with $x+y\\le 4$, $2x+y\\le 6$, $x,y\\ge 0$, show $(2,2)$ is optimal.

**Solution.** It is feasible and has value 10. Multipliers 1 on each constraint give coefficient bounds $1+2=3$ for $x$ and $1+1=2$ for $y$, and total upper bound $4+6=10$. Equality certifies optimality.

### B. Queue boundary

An M/M/1 desk has $\\lambda=11/hour$, $\\mu=10/hour$. Find steady-state mean waiting.

**Solution.** No finite steady-state mean exists under the model because $\\rho=1.1\\ge 1$; the stationary geometric distribution cannot normalize. Substituting into $1/(\\mu-\\lambda)$ would give a negative number, signaling use outside the formula's domain.

### C. Inventory dimensions

Check dimensions of $\\sqrt{2KD/h}$.

**Solution.** $K$ has currency/order, $D$ has units/time, and $h$ has currency/(unit·time). Treating “order” as a counting event, $KD/h$ has $unit^{2}$; its square root has units, as an order quantity should.

### D. Flow sensitivity

In the five-edge network above, increase capacity $a\\to t$ from 2 to 3. Must max flow rise?

**Solution.** No. The cut $\\{s\\}$ still has capacity 7, and the previous flow of 7 remains feasible, so maximum flow remains exactly 7. Increasing a nonbinding or downstream edge cannot overcome the source cut.

### E. Causal boundary

A hospital adds staff on historically busy days, and those days still have longer waits. Does the data show added staff caused longer waits?

**Solution.** No. Staffing responds to anticipated demand, so demand severity confounds the association. A causal analysis needs an assignment mechanism, design, or defensible adjustment; an operational queue model can simulate conditional scenarios but does not identify effects automatically.

## 11. Deployment checklist

Before calling a plan operational:

- verify every variable is available at its decision time;
- confirm units, sign conventions, balances, and integrality;
- produce a feasibility and, where possible, optimality certificate;
- inspect active constraints and sensitivity ranges;
- compare at least one alternate objective and uncertainty representation;
- validate rate, demand, and network assumptions on held-out periods;
- report average, tail, and distributional outcomes;
- test disruptions, data delays, and solver failure;
- name a monitoring threshold and fallback action;
- state which causal or welfare conclusions are not supported.

The [Decision Systems Laboratory](#/labs?lab=visual-lab-decision-systems) computes exact max-flow certificates and queue sensitivity tables. The [trustworthy modeling recipe](#/item/recipe-trustworthy-model-compute-validate) carries this checklist into a complete project. Financial risk and contingent claims continue in [Financial Mathematics: Pricing, Portfolios, and Model Risk](#/item/deep-dive-financial-mathematics-pricing-risk).
`;export{e as default};