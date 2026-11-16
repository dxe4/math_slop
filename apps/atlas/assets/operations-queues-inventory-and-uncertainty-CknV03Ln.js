var e=`---
id: deep-dive-operations-queues-inventory-and-uncertainty
title: "Operating models: queues, inventory and uncertainty"
license: CC BY-SA 4.0
---

# Operating models: queues, inventory and uncertainty

Read rates, observation conventions and time scales before using a queue or inventory formula; prove the positive EOQ optimum under its stated assumptions.

Before reading: [Introduction to Probability](/resources/library:book-introduction-to-probability/).

## 4. Queues: variability near capacity

Queue notation describes arrival process, service distribution, number of servers, system capacity, population, and discipline. **M/M/1** means Poisson arrivals, independent exponential service, one server, usually infinite room and first-come-first-served unless qualified.

Let arrival rate be $\\lambda$ customers/hour and service rate be $\\mu$ customers/hour. Utilization is $\\rho=\\lambda/\\mu$. When $\\rho<1$, the stationary number-in-system distribution is

$$P(N=n)=(1-\\rho)\\rho^{n}$$

Then

$$L=\\rho/(1-\\rho)$$

$$W=L/\\lambda=1/(\\mu-\\lambda)$$

$$W_{q}=W-1/\\mu=\\lambda/[\\mu(\\mu-\\lambda)]$$

### Worked example: a clinic desk

Suppose $\\lambda=9/hour$, $\\mu=12/hour$. Then $\\rho=0.75$, $L=3$ customers, $W=1/3 hour=20 minutes$, and mean service time is 5 minutes, so $W_{q}=15 minutes$.

If $\\lambda$ is estimated as $9\\pm1/hour$ while $\\mu=12$, the modeled mean system time ranges from $1/(12-8)=15 minutes$ to $1/(12-10)=30 minutes$. Symmetric rate uncertainty produces asymmetric wait uncertainty. At $\\lambda=12$, the stationary formulas cease to exist.

### Little's law without memorylessness

For a stable conserved customer population,

$$L=\\lambda W$$

It holds far beyond M/M/1 when long-run averages exist and boundary effects vanish. If a cafeteria has throughput 80 people/hour and mean time inside 0.25 hour, average number inside is 20. Little's law alone does not tell how much time is waiting versus service or how variable the queue is.

If arrivals can be rejected or abandon the system, the population in Little’s law must be specified. The throughput is the rate entering and completing the population whose time is measured; it need not equal the externally offered arrival rate. Including rejected customers in that rate while measuring only admitted customers’ time mixes different populations. The infinite-room M/M/1 formulas above assume that no arrivals are rejected and that the stable system has the stated stationary regime.

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

$$Q^\\star=\\sqrt{2KD/h}$$

Take $D=2400 units/year$, $K=50 currency/order$, $h=6 currency/(unit\\cdot year)$. Then

$$Q^\\star=\\sqrt{2\\times 2400\\times 50/6}=\\sqrt{40000}=200 units$$

There are 12 orders/year. Annual setup cost is $50\\times 12=600$; average inventory is 100, so holding cost is also 600. Equality of the two relevant cost components is a check at the optimum.

### Why the positive order quantity is the unique minimizer

For this claim assume $K,D,h>0$ and require $Q>0$. Write $Q^\\star=\\sqrt{2KD/h}$. The defining identity $KD=h(Q^\\star)^2/2$ gives the exact difference

$$C(Q)-C(Q^\\star)=\\frac{h}{2Q}(Q-Q^\\star)^2.$$

The denominator and $h$ are positive, so the difference is nonnegative and vanishes exactly when $Q=Q^\\star$. This proves global minimality and uniqueness without choosing among stationary points. It also identifies the assumptions hidden by the square-root formula. With zero demand or zero setup cost the positive-domain problem can have an unattained boundary infimum instead; with zero holding cost there is no finite balancing quantity. Those limiting models need their own decision rules. The result concerns the two stated annual cost components and does not include stockout, delivery, financing or capacity costs unless they are explicitly added to the objective.

### EOQ sensitivity

Because $Q^\\star$ depends on a square root, a 10% relative change in $D$ creates about a 5% relative change in $Q^\\star$ locally. Cost is flatter near the optimum than the order quantity itself: an approximate quantity can have almost optimal modeled cost. This is operationally important when package sizes force rounding.

### Single-period uncertain demand

For a perishable item ordered once, let demand have distribution $D$, selling price $p$, unit cost $c$, and salvage $s$, with $p>c>s$. Underage cost is $C_{u}=p-c$; overage cost is $C_{o}=c-s$. The newsvendor optimum satisfies the critical fractile

$$P(D\\le Q^\\star) \\ge C_{u}/(C_{u}+C_{o})$$

with the smallest such $Q^\\star$ for a discrete distribution.

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

## Exercise 1: Queue boundary

An M/M/1 desk has $\\lambda=11/hour$, $\\mu=10/hour$. Find steady-state mean waiting.

**Hint 1.** Identify the condition needed to normalize the stationary geometric distribution.

**Hint 2.** Compare the arrival and service rates before substituting into any stationary waiting-time formula. A negative denominator signals a failed model hypothesis.

**Solution.** No finite steady-state mean exists under the model because $\\rho=1.1\\ge 1$; the stationary geometric distribution cannot normalize. Substituting into $1/(\\mu-\\lambda)$ would give a negative number, signaling use outside the formula's domain.

## Exercise 2: Inventory dimensions

Check dimensions of $\\sqrt{2KD/h}$.

**Hint 1.** Keep the unit of order size separate from the unit of time.

**Hint 2.** Treat the number of orders as a count, cancel the currency and time factors, and inspect the unit before taking the square root.

**Solution.** $K$ has currency/order, $D$ has units/time, and $h$ has currency/(unit·time). Treating “order” as a counting event, $KD/h$ has $unit^{2}$; its square root has units, as an order quantity should.


## Summary

State when stationary waiting formulas apply, distinguish throughput from offered demand, prove the inventory optimum on its positive domain, and name the information and uncertainty assumptions of a larger operating model.
`;export{e as default};