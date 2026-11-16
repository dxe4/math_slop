var e=`---
id: visual-lab-decision-systems
title: "Decision Systems Laboratory: Flow, Queues, and Portfolio Trade-offs"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Decision Systems Laboratory: Flow, Queues, and Portfolio Trade-offs

This exact interactive instrument compares three kinds of constrained decision model:

- maximum flow through a capacitated network;
- load and delay in an ideal M/M/1 queue;
- mean and variance for two hypothetical return series.

Open the [live laboratory](#/labs?lab=visual-lab-decision-systems). Every control is a labeled native select or range input. Every mathematical result appears in a semantic table. No pointer gesture, animation, Canvas, or color distinction is required. The URL stores a validated state so a shared link reconstructs the same calculation.

The three modes share one lesson: a number is conditional on a representation, assumptions, units, and objective. “Maximum,” “mean wait,” and “portfolio variance” do not become recommendations merely because they are computed exactly.

## Mode 1 — Network maximum flow

A directed network has source $s$, sink $t$, integer capacities $c_e$, and edge flows $f_e$. Feasibility requires

$0\\le f_e\\le c_e$

and conservation at every intermediate node:

$total inflow = total outflow$.

For any source-sink cut $S$, total flow cannot exceed capacity of edges leaving $S$. The max-flow/min-cut theorem states that maximum feasible flow equals minimum cut capacity.

### What the engine computes

The dependency-free engine implements deterministic Edmonds–Karp:

1. start with zero flow;
2. construct forward and reverse residual capacities;
3. find a shortest residual source-sink path by edge count;
4. augment by the smallest residual capacity on the path;
5. repeat until no residual path exists;
6. collect nodes still reachable from the source;
7. return that cut, every edge flow, residual capacity, augmentation ledger, and exact cut equality.

All preset capacities are safe nonnegative integers. The model also requires the sum of all edge capacities to be at most JavaScript's maximum safe integer, so every nonnegative partial capacity sum, cut sum and flow magnitude stays in the exact integer range. Checking each edge alone would not ensure exact aggregate sums. Validation rejects missing nodes, self-loops, duplicate directed pairs, duplicate edge IDs, fractional or unsafe capacities, and an unsafe capacity total.

### Relief depot example

The relief preset has capacities:

| Edge | Capacity (pallets/day) |
| --- | ---: |
| $S\\to A$ | 4 |
| $S\\to B$ | 3 |
| $A\\to B$ | 2 |
| $A\\to T$ | 2 |
| $B\\to T$ | 5 |

One feasible flow sends 2 on $S-A-T$, 2 on $S-A-B-T$, and 3 on $S-B-T$, total 7. The cut containing only $S$ has capacity $4+3=7$. A feasible lower bound and cut upper bound match, proving optimality.

The table identifies each cut edge in text. If color rendering disappears, the certificate remains complete.

### Guided investigation: capacity that does nothing

Inspect the relief cut. Suppose $A\\to T$ rises from 2 to 3 while source edges stay at total capacity 7. The maximum cannot rise because every flow must cross the same source cut. This is a sensitivity result: not every locally enlarged edge relieves the active bottleneck.

The lab's static flow does **not** model travel time, congestion, queues on roads, correlated failures, bidirectional interference, changing demand, or the causal effect of construction. “7 pallets/day” is exact for the declared graph, not for an unverified real logistics system.

## Mode 2 — M/M/1 queue boundary

The queue mode takes arrival rate $\\lambda$ and service rate $\\mu$, both in customers per hour. It assumes:

- Poisson arrivals at unchanged rate;
- independent exponential service times at unchanged rate;
- one server;
- independence between arrivals and service;
- unlimited waiting room and no abandonment;
- a steady-state regime.

Utilization is dimensionless:

$\\rho =\\lambda /\\mu$.

When $0\\le \\rho <1$, the stationary number in system is geometric:

$P(N=n)=(1-\\rho )\\rho ^n$.

The engine returns

$L=\\rho /(1-\\rho )=\\lambda /(\\mu -\\lambda )$,

$W=1/(\\mu -\\lambda )$,

$L_q=\\rho ^{2}/(1-\\rho )$,

$W_q=\\lambda /[\\mu (\\mu -\\lambda )]$,

and $P(N=0)=1-\\rho$.

It also checks Little's law $L=\\lambda W$. When $\\lambda \\ge \\mu$, no stationary geometric distribution normalizes, so stationary metrics are withheld with an explicit \`unstable\` status. The engine never displays a negative wait from extending $1/(\\mu -\\lambda )$ beyond its domain.

### Worked example

At $\\lambda =8/hour$, $\\mu =10/hour$,

$\\rho =0.8$, $W=1/2 hour=30 minutes$,

$W_q=8/[10(2)]=0.4 hour=24 minutes$,

$L=8\\times 0.5=4$, $L_q=8\\times 0.4=3.2$.

The remaining 6 minutes is mean service time $1/\\mu$.

### Guided investigation: approach capacity

Keep service 10 and increase arrivals through 7, 8, 9, 10. Modeled system times are 20, 30, 60 minutes, and unavailable in steady state. Equal one-customer/hour steps do not create equal delay steps. Near the stability boundary, sensitivity diverges.

Now compare $(\\lambda ,\\mu )=(8,10)$ with $(16,20)$. Both have 80% utilization, but second system time is $1/(20-16)=0.25 hour=15 minutes$. The dimensionless load is the same; the service time scale differs.

### Interpretation boundary

The displayed mean is not a 90th percentile or maximum. It may not describe a finite opening period, schedule, multiple-server pool, priority queue, balking, abandonment, or correlated surge. Changing service capacity may change demand or routing, so this conditional queue calculation is not a causal staffing effect.

## Mode 3 — Two-asset moment trade-off

> **Education only—not financial advice.** All assets and moments are hypothetical. The lab does not forecast returns, assess suitability, limit losses, or recommend a weight.

Let random returns have mean vector $m$ and covariance matrix $\\sum$. For weights $w$,

$E[w^TR]=w^Tm$,

$\\operatorname{Var}(w^TR)=w^T\\sum w$.

For weight $w$ in Asset A and $1-w$ in Asset B,

$variance = w^{2}\\sigma _A^{2}+(1-w)^{2}\\sigma _B^{2}+2w(1-w)\\rho \\sigma _A\\sigma _B$.

The engine validates $0\\le w\\le 1$, nonnegative standard deviations, finite inputs, and $-1\\le \\rho \\le 1$. It returns each of the three variance terms separately and a full table at ten-percentage-point weights.

### Worked scenario

Means are 4% and 8%; standard deviations 10% and 20%; correlation 0.25. At $w=0.6$, modeled mean is

$0.6(0.04)+0.4(0.08)=0.056$, or 5.6%.

Variance contributions are

$0.6^{2}(0.1^{2})=0.0036$,

$0.4^{2}(0.2^{2})=0.0064$,

$2(0.6)(0.4)(0.25)(0.1)(0.2)=0.0024$.

Total variance is $0.0124$, and standard deviation is approximately 11.14%.

### Guided investigation: dependence stress

Keep marginal means and standard deviations fixed while switching correlation from 0.25 to 0.85. At 60% weight in A, covariance contribution rises from 0.0024 to 0.00816, so total modeled variance rises. Diversification depends on dependence, which can change during common shocks.

Zero correlation is not general independence. Mean and covariance omit skewness, tail dependence, illiquidity, leverage, path dependence, estimation error, and regime shift. A standard deviation is not maximum possible loss. The lab deliberately has no “best” or “recommended” marker.

## Exactness and uncertainty are different

The engine is deterministic: identical validated state produces identical output. Integer flow certificates use the bounded safe-integer arithmetic described above; queue and portfolio formulas use ordinary IEEE floating arithmetic, so their displayed values include rounding.

This computational exactness does not make inputs exact. A road capacity may be estimated. Arrival rates may change. Covariance inputs may be noisy or nonstationary. The result table should be paired with sensitivity and validation, not decorated with extra decimal places.

## Keyboard and accessibility contract

All interaction uses native controls:

- Tab and Shift+Tab move between experiment and parameter controls;
- arrow keys operate selects and range inputs using browser conventions;
- every range has a text output showing value and unit;
- updated status is announced through a polite live region;
- tables have captions, column headers, and row headers;
- selected rows use \`aria-current\` plus visible text where relevant;
- the utilization meter has a text label and percentage;
- no animation occurs, so reduced-motion users receive the same static state;
- warnings and cut membership appear as words, not color alone.

If CSS, color, or a graphical meter is unavailable, all equations and numerical tables remain readable. The lab does not capture arrow keys for a custom graphic.

## Worked checks

### 1. Cut certificate

A feasible flow has value 8 and a cut has capacity 8. What follows?

**Answer.** Every flow is at most the cut capacity, while the feasible flow shows at least 8 is possible. Therefore maximum flow and minimum cut both equal 8.

### 2. Queue invalidity

Why does $\\lambda =12$, $\\mu =10$ not give $W=-0.5 hour$?

**Answer.** The formula is derived only for $\\lambda <\\mu$, when a stationary distribution exists. At load 1.2, the ideal queue is unstable; a negative algebraic output has no waiting-time meaning.

### 3. Portfolio covariance

Can unit-standard-deviation assets have correlation 1.2?

**Answer.** No. Correlation lies in $[-1,1]$ by Cauchy–Schwarz. The resulting matrix would not be positive semidefinite and cannot be a covariance matrix.

### 4. Advice boundary

One weight has lower displayed standard deviation than another. Is it preferable for a learner?

**Answer.** The lab cannot decide. It lacks a person's goals, liabilities, horizon, jurisdiction, costs, constraints, and risk capacity, and the moments are hypothetical. It establishes only a conditional comparison under supplied inputs.

## Continue

The [Operations Research deep dive](#/item/deep-dive-operations-research-systems) derives flow, queue, and inventory models. The [Financial Mathematics deep dive](#/item/deep-dive-financial-mathematics-pricing-risk) separates no-arbitrage pricing from physical risk and advice. The [Sensitivity, Identifiability, and Validation deep dive](#/item/deep-dive-sensitivity-identifiability-validation) shows how to stress model inputs and decisions. The [trustworthy modeling recipe](#/item/recipe-trustworthy-model-compute-validate) provides a complete deployment audit.
`;export{e as default};