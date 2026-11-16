var e=`---
id: deep-dive-models-before-answers
title: "Models Before Answers: A First Encounter with Applied Mathematics"
license: CC BY-SA 4.0
---

# Models Before Answers: A First Encounter with Applied Mathematics

A town has one bridge, a busy clinic, a reservoir, and a limited budget. Should it widen the bridge, change appointment times, store more water, or keep money available for surprises? A calculator cannot answer until someone decides what matters, what can change, what is uncertain, and what evidence would reveal a mistake.

That act of making a useful, inspectable simplification is **mathematical modeling**. A model is not a miniature truth machine. It is a deliberately limited representation made for a stated question. The same bridge can have a geometry model for strength, a queue model for delay, a network model for rerouting, a finance model for borrowing, and a game model for how travelers respond. None is “the model of the bridge.” Each keeps different features because it serves a different purpose.

This first encounter assumes only ordinary arithmetic. It introduces units and scale, flows and queues, decisions and uncertainty, sensitivity, identifiability, validation, and causal boundaries. Later resources make the algebra and proofs precise.

## Begin with a decision sentence

Before writing an equation, complete this sentence:

> We will use information available at ___ to choose or estimate ___, judged by ___, for ___, while respecting ___ .

For a clinic it might read: “At the start of each week, use past arrival counts to choose the number of appointment slots, judged by waiting time and unused staff hours, for the next four weeks, while respecting staffing and safety constraints.”

That sentence names five different things:

- the **information boundary** says what is genuinely known when the calculation is made;
- the **decision or target** says what output is wanted;
- the **criterion** says what counts as good;
- the **population, place, and horizon** say where the claim applies;
- the **constraints** record what is impossible, unsafe, illegal, or unacceptable.

If these are missing, a beautiful answer can solve the wrong problem. A model that minimizes average waiting may create intolerable waits for a small group. A forecast using information recorded after the decision time is not an honest forecast. A cheapest plan may be infeasible because a constraint was omitted.

## A stock-and-flow model in a bathtub


**Worked example.**
Think of water in a bathtub. Let $V$ be the volume of water, measured in litres. Water enters at $q_{\\mathrm{in}}$ litres per minute and leaves at $q_{\\mathrm{out}}$ litres per minute. Over one minute,

$$change \\in V = q_{\\mathrm{in}} - q_{\\mathrm{out}}$$

The units audit is immediate: litres per minute times minutes gives litres. Adding a volume to a flow would be meaningless without a time interval.

Suppose $V=80 L$, $q_{\\mathrm{in}}=6 L/\\min$, and $q_{\\mathrm{out}}=4 L/\\min$. After five minutes, if the rates remain constant,

$$V_{\\mathrm{new}} = 80 L + (6-4) L/\\min \\times 5 \\min = 90 L$$

This answer depends on assumptions: the drain rate is constant, the tap stays open, there is no overflow, and “five minutes later” begins after the rates have settled. If the drain rate grows with water depth, the constant-rate calculation is only a local approximation.

Stocks and flows appear in reservoirs, inventories, populations, infections, bank balances, and energy systems. The meanings differ, but the balance habit survives:

$$new stock = old stock + inflow - outflow + production - loss$$

## Units can reject an equation before data do

Suppose someone proposes that travel distance is $d = v + t$, where $v$ is speed and $t$ is time. The right side adds kilometres per hour to hours. It has no physical meaning. The familiar $d=vt$ passes because $(kilometres/hour)\\times hours=kilometres$.

A formula passing a units check need not be correct. Both $d=vt$ and $d=7vt$ have the right dimensions. Units are a strong filter, not a complete proof.

Unit-free ratios often reveal the real control knob. If a store receives $20$ items per day and sells $18$ per day, the net change is $2$ items per day. If it receives $2000$ and sells $1800$, the net change is $200$, but the relative imbalance is the same:

$$(inflow-outflow)/inflow = 0.10$$

This ratio is **dimensionless**: changing items per day to items per hour does not change it. Nondimensionalization replaces raw quantities with ratios to characteristic scales. It helps compare a village clinic with a city hospital and exposes which combinations of parameters govern behavior.

## A queue is not just its average

At a kiosk, customers arrive at an average rate of $8$ per hour and service can finish $10$ per hour. The utilization ratio is

$$\\rho = arrival rate / service rate = 8/10 = 0.8$$

Capacity exceeds the average demand, yet a queue still forms because arrivals and service are uneven. In a particular idealized random queue called **M/M/1**, with independent Poisson arrivals, independent exponential service times, one server, an unlimited waiting room, and a steady rate, the mean time in the system is

$$W = 1/(\\mu-\\lambda)$$

Here $\\lambda=8/hour$ and $\\mu=10/hour$, so $W=1/2 hour=30 minutes$. If arrivals rise to $9/hour$, the idealized mean becomes one hour. A 12.5% rise in arrivals doubles the mean. Near a capacity boundary, averages become extremely sensitive.

The formula is not universal. Scheduled arrivals, priority service, abandonment, finite opening hours, multiple servers, and correlated surges can change it. If $\\lambda\\ge \\mu$, the steady-state formula is invalid: the idealized queue has no stable long-run distribution. Reporting a negative “wait” from the algebra would be a failure to check assumptions.

## A network can reveal a bottleneck

Imagine relief supplies traveling from a depot $S$ to a shelter $T$ along roads with daily capacities. One route can carry 4 pallets; another can carry 3. Shared roads may prevent simply adding every number. A **flow network** records junctions, directed roads, capacity constraints, and conservation at intermediate junctions.

A feasible flow never exceeds a road capacity, never sends a negative amount, and has inflow equal to outflow at every intermediate node. A **cut** separates $S$ from $T$; all flow must cross it. Therefore the capacity of any cut is an upper bound on total flow. The max-flow/min-cut theorem says the largest feasible flow equals the smallest cut capacity.

That equality is useful because it gives both a plan and a certificate. A flow of 7 shows that at least 7 pallets are possible. A cut of capacity 7 shows that 8 are impossible under the declared network. If a road is missing from the data, the certificate applies to the representation, not automatically to the real transport system.

## Decisions need objectives and alternatives

Suppose a workshop can make tables and shelves. Each product uses labor and wood. A **linear program** might choose nonnegative quantities $x$ and $y$ to maximize a declared contribution

$$maximize 40x + 30y$$

subject to

$2x+y \\le 40$ labor-hours,

$x+2y \\le 50$ wood-units,

$$x\\ge 0, y\\ge 0$$

The feasible region contains all choices respecting the constraints. A maximizing corner is a mathematical conclusion about this model. It is not yet a recommendation: the coefficients may omit setup time, worker fatigue, uncertain demand, quality, or distributional consequences. “Optimal” always means optimal for a named objective over a named feasible set.

The **shadow price** of a constraint describes how the optimum changes after a small relaxation, while the current active set remains valid. It is a local sensitivity, not the market price of the resource and not permission to ignore a hard safety limit.

## Uncertainty is more than adding error bars

There are several different unknowns:

- **measurement uncertainty:** the recorded arrival count or concentration is noisy;
- **process variability:** future arrivals genuinely fluctuate;
- **parameter uncertainty:** a rate is estimated from limited data;
- **model discrepancy:** the chosen equations omit mechanisms;
- **scenario uncertainty:** policy, climate, behavior, or technology may change;
- **decision uncertainty:** people value outcomes differently or costs are incompletely specified.

Combining all of these into one unexplained “±10%” hides their meanings. A useful analysis says which quantities vary, how the variation was obtained, whether it is probabilistic or scenario-based, and what conclusion remains stable.

One elementary method is a scenario table. For a stock with demand 18, 20, or 25 units per day, compute outcomes under each. Do not attach probabilities unless evidence and a sampling model justify them. A worst-case plan guards against a declared set of possibilities; it says nothing about possibilities outside that set.

## Sensitivity asks “what if the input moves?”

For a calculation $y=f(x)$, sensitivity describes how $y$ changes when $x$ changes. If a one-unit increase in $x$ changes $y$ by about three units near the current point, the local sensitivity is about 3.

Return time for a fixed distance is $t=d/v$. With $d=120 km$ and $v=60 km/h$, time is 2 hours. Raising speed to 61 gives $120/61\\approx1.967$ hours, a reduction of about 2 minutes. Raising speed from 20 to 21 on the same distance reduces time by about 17 minutes. The same one-unit speed change matters differently at different operating points.

Sensitivity is not uncertainty. A parameter can be influential but known accurately, or uncertain but almost irrelevant to the decision. A good report pairs an uncertainty range with a sensitivity calculation.

## Identifiability asks “could the data distinguish the causes?”

Suppose a population grows approximately as

$$next count = survival fraction \\times current count + births$$

If we observe only one current count and one next count, many pairs of survival and births produce the same result. For current count 100 and next count 110, survival $0.9$ with 20 births and survival $0.8$ with 30 births both fit exactly. The parameters are not identifiable from those observations alone.

More precise measurements of the same combined total may not solve the problem. We need different information: individual survival follow-up, birth records, repeated interventions, or structural assumptions. Identifiability is about what the observation map can distinguish even with perfect noiseless data. Stable estimation asks the further question of what noise does to that distinction.

## Validation tries to make the model fail usefully

Fitting asks whether a model can reproduce data used to tune it. Validation asks whether it succeeds on checks that matter for its intended use. Useful checks include:

1. **dimensional and balance checks:** do units, signs, and conservation laws work?
2. **limiting cases:** does zero inflow, infinite capacity, or no noise give the expected simpler behavior?
3. **held-out prediction:** does a frozen procedure predict genuinely unused observations?
4. **external comparison:** does it work in another time, place, or measurement system?
5. **residual diagnosis:** is remaining error patterned by time, group, or operating regime?
6. **decision stress test:** would reasonable changes in inputs or values reverse the decision?

A model can predict well and still explain badly. A curve can interpolate every observed point and behave absurdly just outside them. Validation evidence is always tied to a scope; it does not prove truth.

## Association, intervention, and strategy

If umbrella sales and traffic accidents rise together, umbrellas do not necessarily cause accidents. Rain affects both. A predictive association answers “what tends to accompany what?” A causal question asks “what would happen under an intervention?” It needs a design or assumptions that rule out alternative explanations.

Strategic systems add another boundary: people may respond to the model or policy. A navigation app changes routes; a queue priority changes arrival behavior; a price changes demand. Game theory represents participants, available strategies, preferences, and information. An equilibrium is a stable pattern relative to those assumptions, not proof that the outcome is fair, unique, desirable, or likely to be learned.

## Financial models are conditional calculations, not advice

Interest mathematics, portfolios, and derivative pricing are applied models. A one-period no-arbitrage model can derive a replication cost from a small set of traded payoffs. That is a conditional statement: if the assets can be traded as assumed, costs and constraints have the stated form, and no arbitrage is available, then inconsistent prices would permit a specified trade.

It is not a forecast of which asset will rise. A volatility estimate is not a promise. Historical covariance can change, losses can exceed a chosen risk summary, and leverage or liquidity constraints can make a paper trade impossible. Toy examples in the Atlas are for learning mathematics; they are never individualized investment, lending, tax, or legal advice.

## Practice: worked checks

### 1. Audit a stock calculation

<a id="deep-dive-models-before-answers-ex-1"></a>

**Exercise 1.**

A tank starts with 300 litres. Inflow is 12 litres per minute and outflow is 15 litres per minute for 20 minutes. Find the modeled final volume and name one failure boundary.


<details>
<summary>Hint 1</summary>

Compute the net flow rate before changing the starting tank volume.
</details>
<details>
<summary>Hint 2</summary>

Multiply that signed rate by twenty minutes and check the result stays within the tank model’s domain.
</details>
<details>
<summary>Solution</summary>

Net flow is $-3 L/\\min$; over 20 minutes the change is $-60 L$, so the modeled final volume is $240 L$. The result assumes both rates remain constant and the tank does not reach a physical boundary. If the pump intake fails below a particular depth, the calculation no longer applies.

</details>

### 2. Compare utilization

<a id="deep-dive-models-before-answers-ex-2"></a>

**Exercise 2.**

Two desks have $(\\lambda,\\mu)=(4,5)$ customers per hour and $(40,50)$ customers per hour. What ratio is shared, and what is not determined by it?


<details>
<summary>Hint 1</summary>

Utilization is arrival rate divided by service rate for each desk.
</details>
<details>
<summary>Hint 2</summary>

Equal ratios do not imply equal wait times; compare the absolute time scales under the stated queue model.
</details>
<details>
<summary>Solution</summary>

Both have $\\rho=0.8$. The ratio describes relative load, but not actual time scale: under the M/M/1 assumptions, the first mean system time is $1/(5-4)=1 hour$, while the second is $1/(50-40)=0.1 hour$. The assumptions may fail for either desk.

</details>

### 3. Detect non-identifiability

An observation determines only $a+b=12$. Can it identify $a$ and $b$ separately?

**Answer.** No. Every pair $(a,12-a)$ gives the same observation. Another independent measurement or constraint is required. Repeating the same sum more precisely does not create a second independent equation.

### 4. Separate prediction from intervention

A dataset shows neighborhoods with more bus stops have more pedestrians. Does adding a stop necessarily create the observed difference?

**Answer.** No. Density, land use, and where transit agencies place stops may affect both. The association can support a prediction under similar conditions but does not by itself identify the effect of installing a stop.

## Continue

The [Applied Modeling standard course](#/item/course-applied-modeling-standard) builds the mathematical spine. The [Operations Research deep dive](#/item/deep-dive-operations-research-systems) studies optimization, queues, networks, and inventory. The [Financial Mathematics deep dive](#/item/deep-dive-financial-mathematics-pricing-risk) separates no-arbitrage pricing from forecasting and advice. The [Decision Systems Laboratory](#/labs?lab=visual-lab-decision-systems) provides exact tables for flow, queue, and portfolio trade-offs. The [trustworthy modeling recipe](#/item/recipe-trustworthy-model-compute-validate) turns the habits here into a reusable audit.
`;export{e as default};