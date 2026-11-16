
# Queues, Inventory, and Service Systems

## Dependencies and objectives

This chapter uses stochastic processes, calculus, and balance laws. It derives canonical results and identifies the operating assumptions that make them transferable.

## Little's law

**Proposition 11.1 (customer-time balance).** Over horizon $[0,T]$, the area under number-in-system curve equals accumulated customer time, up to boundary contributions from customers present at the endpoints. If throughput, mean number, and mean sojourn converge and boundary terms divided by $T$ vanish, then

$L=λW$.

Poisson arrivals are unnecessary. Consistent population definitions and stability are necessary. Attempted arrivals differ from throughput when blocking or abandonment occurs.

## M/M/1

With Poisson rate $λ$, exponential service rate $μ$, one server, independence, and steady rates, birth-death balance gives

$π_{n+1}μ=π_nλ$.

Thus $π_n=π_0ρ^n$, $ρ=λ/μ$. Normalization is possible exactly when $ρ<1$, yielding $π_0=1-ρ$. Consequently

$L=ρ/(1-ρ)$, $W=1/(μ-λ)$, $W_q=λ/[μ(μ-λ)]$.

Near $ρ=1$, sensitivity diverges. Negative results from substituting $λ>μ$ are not waits; they indicate a violated domain.

### Worked service desk

At $λ=9\,\text{/hour}$, $μ=12\,\text{/hour}$, utilization is 0.75, system time 20 minutes, service time 5 minutes, and queue wait 15 minutes. Raising arrivals to 10 with unchanged service raises system time to 30 minutes. A modest load change causes a large delay change.

Scheduled arrivals, multiple servers, priorities, general service times, abandonment, and transient opening hours require other models or simulation.

## EOQ

With deterministic demand $D$, setup cost $K$, holding cost $h$, instantaneous replenishment, no shortage, and no discount,

$C(Q)=KD/Q+hQ/2$.

Because $C''(Q)=2KD/Q³>0$ and costs diverge as $Q\to 0$ or $∞$, unique minimizer is

$Q*=\sqrt{2KD/h}$.

At the optimum, setup and holding components are equal. The square-root response makes modeled cost relatively flat near the optimum, useful when package sizes force discrete choices.

## Newsvendor

For a single period with selling price $p$, unit cost $c$, salvage $s$, $p>c>s$, underage cost is $C_u=p-c$ and overage $C_o=c-s$. Marginal comparison gives critical fractile

\[F(Q*)≥C_u/(C_u+C_o)\]

with the smallest qualifying $Q*$ for discrete demand. Past censored sales during stockouts do not reveal full demand. Tail probabilities, substitution, and season shift belong in validation.

## Service metrics and equity

Average wait can improve while worst-group wait worsens. Cycle service level, fill rate, expected shortage, and probability of delay are distinct. State one in operational units and show distributional outcomes. “95% service” is incomplete.

## Pathwise Little's law

Let customer $j$ arrive at $a_j$, depart at $d_j$, and spend $W_j=d_j-a_j$
in the chosen system. The area under $N(t)$, the number present, counts one unit
of area for every unit of every customer's residence time. Over a finite
horizon, customers crossing an endpoint contribute truncated residence times.
After division by $T$, if arrival throughput and averages converge and endpoint
terms vanish, the identity becomes $L=\lambda W$. This is a conservation
result, not a Poisson formula.

Definitions must align. If $N(t)$ includes customers in service, then $W$
includes service. If $N_q(t)$ counts only waiting customers, Little's law gives
$L_q=\lambda W_q$ with the same admitted-throughput population. Applying the
attempted arrival rate after blocking or abandonment silently changes the
population.

### Worked finite-horizon area

Three completed customers spend 2, 4, and 3 minutes in a system during a
10-minute window, with no endpoint-crossing customers. The area under $N(t)$
is 9 customer-minutes, so time-average number is $L_T=0.9$. Throughput is
$\lambda_T=3/10$ customers per minute and mean sojourn is 3 minutes, giving
$\lambda_T W_T=0.9$ exactly.

## M/M/1 distributions and sensitivity

By PASTA (Poisson arrivals see time averages), an arrival sees $n$ customers
with probability $\pi_n$. Under first-come, first-served (FCFS) service,
memorylessness makes its conditional system time the sum of $n+1$ independent
exponential($\mu$) service times. The resulting
steady-state system time has mean $1/(\mu-\lambda)$; in fact its survival
function is $P(W>t)=\exp[-(\mu-\lambda)t]$. PASTA and exponential service are
needed for this distributional statement, as is the FCFS convention used in
the conditional argument; none is needed for the pathwise Little identity.

Differentiating $W=(\mu-\lambda)^{-1}$ gives
$dW/d\lambda=(\mu-\lambda)^{-2}$. Its elasticity with respect to arrival rate is
$\lambda/(\mu-\lambda)=\rho/(1-\rho)$, which diverges at the stability boundary.
A point forecast far from the boundary can therefore become operationally
fragile after a modest rate error.

### Worked capacity margin

At $\lambda=18\,\text{/hour}$, one server with $\mu=24\,\text{/hour}$ gives $W=1/6$ hour, or ten
minutes. If arrival rate was underestimated by ten percent, $\lambda=19.8$ and
$W=1/4.2$ hour, about 14.29 minutes: a ten-percent input error causes a
forty-three-percent delay increase. The relevant diagnostic is the margin
$\mu-\lambda$, not utilization rounded to one decimal place.

## Beyond exponential service

For an M/G/1 queue with Poisson arrivals, independent service times $S$, one
work-conserving server, and nonpreemptive FCFS service, the
Pollaczek--Khinchine mean-wait formula is

$W_q=\lambda E[S^2]/(2(1-\rho))$, where $\rho=\lambda E[S] < 1$.

Two services with the same mean can therefore have different waits because
the second moment matters. This formula does not cover multiple servers,
state-dependent arrivals, priorities, or correlated service. Simulation is a
useful extension only after validating it against exact cases and checking
warm-up, horizon, replication uncertainty, and event ordering.

## Inventory loss functions

For continuous demand $D$ and order $Q$, expected newsvendor cost (up to terms
independent of $Q$) is

$C(Q)=C_o E[(Q-D)_+] + C_u E[(D-Q)_+]$.

Where differentiable, $C'(Q)=C_o F(Q)-C_u(1-F(Q))$; setting it to zero yields
$F(Q)=C_u/(C_u+C_o)$. For discrete demand, a flat interval or jump may create
multiple minimizers, so use the smallest quantile meeting the critical ratio
and compare adjacent choices. The ratio depends on incremental consequences,
not on average revenue labels.

EOQ sensitivity is deliberately mild: if $Q=cQ*$, then

$C(Q)/C(Q*)=(c+c^{-1})/2$.

Ordering twenty percent too high ($c=1.2$) increases modeled relevant cost by
only about 1.67 percent. That robustness does not rescue the model if demand is
seasonal or replenishment is delayed.

## Common failure modes

- **Steady state by assertion:** a stationary formula is meaningless when the
  system is unstable or the day is dominated by opening transients.
- **Arrival-rate substitution:** attempted, admitted, completed, and effective
  arrival rates differ under blocking, balking, abandonment, and rework.
- **Mean-only validation:** variable service can dominate delay even when mean
  service time is correct.
- **Metric ambiguity:** probability of no stockout, fill rate, and mean shortage
  answer different questions.
- **Censored demand as demand:** recorded sales under stockout are a lower bound
  on desired demand.
- **Simulation precision without model validity:** narrow Monte Carlo error bars
  do not include misspecified arrivals, priorities, or behavior.

## Finite capacity changes both stability and the arrival rate to report

An infinite-buffer queue and a finite-capacity service system answer different questions. Consider Poisson attempted arrivals, exponential service, one server, and room for at most $K$ customers including the one in service. An arrival finding the system full is rejected immediately. The state is now a finite birth–death chain: the upward rate is the arrival rate below capacity and zero at capacity; the downward rate is the service rate above zero.

Detailed balance gives stationary probabilities proportional to powers of the rate ratio. For ratio different from one, normalization gives

$$
\pi_n=\frac{(1-\rho)\rho^n}{1-\rho^{K+1}},
\qquad 0\le n\le K.
$$

At equal rates the stationary law is uniform on these states, obtained directly by equal neighbouring probabilities. This finite system has a stationary distribution even when the attempted arrival rate exceeds service capacity, because excess customers are lost. That is not evidence that an infinite queue at the same rates would be stable.

By the Poisson arrival observation property, the blocking probability is the full-state probability. The admitted arrival rate is therefore the attempted rate multiplied by one minus that probability. Little's law for the customers actually entering uses this admitted rate, not the larger attempted rate. A report that combines admitted occupancy with attempted arrivals understates mean time in the system.

**Worked example: no waiting room.** With capacity one, attempted rate two per hour and service rate three per hour, the occupied probability is two fifths. The admitted rate is six fifths per hour. Mean occupancy divided by admitted rate is one third of an hour, exactly the mean service time because admitted customers never wait. Dividing by the attempted rate instead gives one fifth of an hour, a false duration for admitted customers. The difference comes from rejected arrivals, not from an approximation in Little's law.

## A service-level promise requires a tail statement

Under the stationary FCFS infinite-buffer assumptions used above, system time has exponential survival with rate equal to service rate minus arrival rate. To keep the probability of exceeding a target duration below a chosen probability $\alpha$, the rate margin must be at least $\log(1/\alpha)$ divided by that duration. This follows by taking logarithms of the survival inequality, with the sign change handled by its negative exponent.

A mean duration target and a high-percentile target consequently require different margins. A mean of ten minutes does not imply that almost everyone leaves within ten minutes. In the exponential model the probability of exceeding the mean is approximately 37 percent. Changing the arrival process, service distribution, service discipline, or opening transient changes the tail calculation even if the average rate remains the same.

## Sales under stockout do not reveal demand

If available inventory is $Q$ and latent demand is $D$, observed sales may be only the smaller of those two quantities. Repeated observations of sales equal to capacity show that demand reached at least capacity; they do not reveal how far demand exceeded it. Fitting a demand distribution as though every such observation were an uncensored demand value can understate both the mean and the upper tail.

This creates feedback: a low inventory choice suppresses observed sales, which can make a naive forecast recommend low inventory again. A defensible observation model distinguishes uncensored sales, stockout indicators, replenishments, substitutions, and lost demand that is actually recorded. The newsvendor quantile formula remains a correct conditional optimization result, but its input must describe demand rather than a policy-dependent lower bound on demand.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="queues-inventory-service-ex-1"></a>

Use the finite-horizon area identity to prove Little's law under explicitly
   stated convergence and negligible-boundary assumptions.

<details>
<summary>Hint 1</summary>

Integrate the number present over the observation window.

</details>
<details>
<summary>Hint 2</summary>

Separate complete customer rectangles from arrivals or departures crossing the endpoints.

</details>
<details>
<summary>Full solution</summary>

Integrating the number present counts each customer's residence contribution. Divide by $T$; if endpoint residual divided by $T$ vanishes, completed throughput tends to $\lambda$, and completed mean time tends to $W$, then the time average tends to $L=\lambda W$.

</details>

### Exercise 2
<a id="queues-inventory-service-ex-2"></a>

During 20 minutes, five completed customers have system times 3, 4, 8, 2,
   and 3 minutes, with no endpoint crossings. Compute $L_T$, $\lambda_T$, and
   $W_T$, and verify the identity.

<details>
<summary>Hint 1</summary>

Sum the five system times before dividing by the window length.

</details>
<details>
<summary>Hint 2</summary>

Use the same admitted and completed customer population in all three quantities.

</details>
<details>
<summary>Full solution</summary>

Total residence is 20 customer-minutes, so $L_T=1$. Throughput is $5/20=0.25\,\text{/minute}$ and $W_T=4$ minutes; their product is 1.

</details>

### Exercise 3
<a id="queues-inventory-service-ex-3"></a>

Explain why using attempted arrivals in $L=\lambda W$ is wrong for a loss
   system whose $W$ is measured only for admitted customers.

<details>
<summary>Hint 1</summary>

Check which arrival count matches the measured waiting-time population.

</details>
<details>
<summary>Hint 2</summary>

Blocked customers contribute neither admitted throughput nor those system times.

</details>
<details>
<summary>Full solution</summary>

The population in $L$ and $W$ contains only admitted customers, so its conserved flow is admitted throughput. Attempted arrivals include rejected entities that contribute no residence area.

</details>

### Exercise 4
<a id="queues-inventory-service-ex-4"></a>

Derive the M/M/1 stationary probabilities and explain precisely why they
   cannot normalize at $\rho\geq 1$.

<details>
<summary>Hint 1</summary>

Use the adjacent-state balance relation of the birth-death chain.

</details>
<details>
<summary>Hint 2</summary>

Normalising the geometric sequence requires a ratio strictly less than one.

</details>
<details>
<summary>Full solution</summary>

Detailed balance gives $\pi_n=\pi_0 \rho^n$. The geometric sum is $1/(1-\rho)$ only for $\rho<1$, giving $\pi_0=1-\rho$; for $\rho\geq 1$ it diverges and no stationary probability mass normalizes.

</details>

### Exercise 5
<a id="queues-inventory-service-ex-5"></a>

For $\lambda=9\,\text{/hour}$ and $\mu=12\,\text{/hour}$, compute $L$, $L_q$, $W$, and $W_q$,
   checking units and Little's law.

<details>
<summary>Hint 1</summary>

Compute utilisation first and check it is below one.

</details>
<details>
<summary>Hint 2</summary>

Convert rates to compatible time units before comparing L with lambda times W.

</details>
<details>
<summary>Full solution</summary>

$\rho=0.75$; $L=3$, $L_q=2.25$, $W=1/3\text{ hour}=20\text{ minutes}$, and $W_q=0.25\text{ hour}=15\text{ minutes}$. Both $\lambda W=3$ and $\lambda W_q=2.25$ hold.

</details>

### Exercise 6
<a id="queues-inventory-service-ex-6"></a>

Find $dW/d\lambda$ and the arrival-rate elasticity of M/M/1 system time.
   Evaluate the elasticity at $\rho=0.8$.

<details>
<summary>Hint 1</summary>

Differentiate the reciprocal capacity margin.

</details>
<details>
<summary>Hint 2</summary>

Normalise the derivative by arrival rate and system time for elasticity.

</details>
<details>
<summary>Full solution</summary>

$dW/d\lambda=(\mu-\lambda)^{-2}$ and elasticity is $\lambda/(\mu-\lambda)=\rho/(1-\rho)$. At 0.8 it is 4.

</details>

### Exercise 7
<a id="queues-inventory-service-ex-7"></a>

Under the M/M/1 system-time survival function, find the 95th percentile at
   $\lambda=9\,\text{/hour}$, $\mu=12\,\text{/hour}$.

<details>
<summary>Hint 1</summary>

Set the survival probability to five percent.

</details>
<details>
<summary>Hint 2</summary>

Solve the exponential equation using the natural logarithm.

</details>
<details>
<summary>Full solution</summary>

Solve $\exp[-3t]=0.05$, with $t$ in hours: $t=-\log(0.05)/3=0.9986$ hour, about 59.9 minutes.

</details>

### Exercise 8
<a id="queues-inventory-service-ex-8"></a>

An M/G/1 service time is 1 minute or 9 minutes with equal probability.
   Compute its first two moments and compare its mean-queue formula with a
   deterministic five-minute service at the same arrival rate.

<details>
<summary>Hint 1</summary>

Compute the mean of the square as well as the square of the mean.

</details>
<details>
<summary>Hint 2</summary>

The M/G/1 waiting formula depends on the second moment, so equal means do not suffice.

</details>
<details>
<summary>Full solution</summary>

$E[S]=5$ minutes and $E[S^2]=(1+81)/2=41$ minute-squared. Deterministic five-minute service has second moment 25, so at the same $\lambda$ and $\rho$, the variable service has $41/25$ times the mean queue wait.

</details>

### Exercise 9
<a id="queues-inventory-service-ex-9"></a>

Explain which assumptions in Exercise 8 are needed for the
   Pollaczek--Khinchine formula and which are not implied by data on moments.

<details>
<summary>Hint 1</summary>

Read the arrival, service and discipline assumptions separately.

</details>
<details>
<summary>Hint 2</summary>

Moment observations alone do not establish Poisson arrivals or independent service times.

</details>
<details>
<summary>Full solution</summary>

The formula needs Poisson arrivals, independent identically distributed service, one work-conserving server, the stated discipline conditions, and $\rho<1$. Matching two moments does not establish independence, stationarity, or arrival assumptions.

</details>

### Exercise 10
<a id="queues-inventory-service-ex-10"></a>

With $D=2400$, $K=50$, and $h=6$, compute EOQ and annual relevant cost.

<details>
<summary>Hint 1</summary>

Differentiate annual setup-plus-holding cost.

</details>
<details>
<summary>Hint 2</summary>

Check units and evaluate both terms at the positive stationary point.

</details>
<details>
<summary>Full solution</summary>

$Q^*=\sqrt{2(2400)(50)/6}=200$; setup and holding each cost 600, total 1200 per year.

</details>

### Exercise 11
<a id="queues-inventory-service-ex-11"></a>

Prove the EOQ relative-cost identity $C(cQ*)/C(Q*)=(c+c^{-1})/2$.

<details>
<summary>Hint 1</summary>

Substitute c times the optimal quantity in each cost term.

</details>
<details>
<summary>Hint 2</summary>

At the optimum the two relevant cost contributions are equal.

</details>
<details>
<summary>Full solution</summary>

At the optimum the two cost terms are equal, say $H$. At $cQ*$ they become $H/c$ and $cH$; divide their sum by $2H$.

</details>

### Exercise 12
<a id="queues-inventory-service-ex-12"></a>

Use Exercise 11 to compute the modeled cost increase from ordering 20%
    above EOQ.

<details>
<summary>Hint 1</summary>

Set the multiplier c to 1.2 in the exact relative-cost expression.

</details>
<details>
<summary>Hint 2</summary>

Compare the resulting ratio with one, rather than reporting the order-size change as the cost change.

</details>
<details>
<summary>Full solution</summary>

$(1.2+1/1.2)/2=1.01667$, an increase of about 1.67%.

</details>

### Exercise 13
<a id="queues-inventory-service-ex-13"></a>

Demand values 10, 20, 30 have probabilities 0.2, 0.5, 0.3 and
    $C_u=C_o$. Find the smallest optimal discrete newsvendor order and compare
    expected mismatch costs at all three choices.

<details>
<summary>Hint 1</summary>

Compute expected shortage and excess at each candidate quantity.

</details>
<details>
<summary>Hint 2</summary>

A discrete median need not be a single point; the smallest optimum is requested.

</details>
<details>
<summary>Full solution</summary>

The target quantile is 0.5, first reached at 20. Expected absolute mismatch is 11 at $Q=10$, 5 at $Q=20$, and 9 at $Q=30$, in common cost units, so 20 is uniquely best among them.

</details>

### Exercise 14
<a id="queues-inventory-service-ex-14"></a>

For normal demand with mean 100 and standard deviation 15, find
    the newsvendor order expression when the critical ratio is 0.8. A numerical
    standard-normal quantile may be left as $\Phi^{-1}(0.8)$.

<details>
<summary>Hint 1</summary>

Set the demand CDF equal to the critical ratio.

</details>
<details>
<summary>Hint 2</summary>

Transform the standard-normal quantile back to demand units.

</details>
<details>
<summary>Full solution</summary>

$Q*=100+15 \Phi^{-1}(0.8)$, approximately $112.6$ because the quantile is about $0.842$.

</details>

### Exercise 15
<a id="queues-inventory-service-ex-15"></a>

Construct a demand/sales example showing why sales censored by inventory
    cannot identify the upper demand tail.

<details>
<summary>Hint 1</summary>

Hold stock fixed and change only demand above stock.

</details>
<details>
<summary>Hint 2</summary>

Both latent values are mapped to the same recorded sales count.

</details>
<details>
<summary>Full solution</summary>

If stock is 10, latent demands 10, 20, and 100 all record sales of 10. The observed data cannot distinguish their upper tail without availability or substitution information.

</details>

### Exercise 16
<a id="queues-inventory-service-ex-16"></a>

Distinguish cycle service level, fill rate, expected shortage, and
    probability of delay with one sentence or formula each.

<details>
<summary>Hint 1</summary>

Identify whether each metric concerns a probability, fraction or expected amount.

</details>
<details>
<summary>Hint 2</summary>

A cycle-level stockout probability differs from a unit-level fill fraction.

</details>
<details>
<summary>Full solution</summary>

Cycle service is $P(D\leq Q)$; fill rate is expected immediately filled units divided by expected requested units; expected shortage is $E[(D-Q)_+]$; probability of delay is the fraction of arrivals finding all service capacity occupied.

</details>

### Exercise 17
<a id="queues-inventory-service-ex-17"></a>

A simulation reports mean wait $2.00 \pm 0.01$ minutes
    in an exact M/M/1 test case whose truth is 5 minutes. Diagnose the
    report and propose a debugging order.

<details>
<summary>Hint 1</summary>

Separate simulation precision from accuracy against an exact reference.

</details>
<details>
<summary>Hint 2</summary>

Check model parameters, time units, event logic and warm-up before increasing replications.

</details>
<details>
<summary>Full solution</summary>

The narrow interval measures simulation sampling error around the wrong value. First verify parameters/units, then event ordering and warm-up, compare short path traces, check Little's law, and only then increase replications.

</details>

### Exercise 18
<a id="queues-inventory-service-ex-18"></a>

Design a service-system validation experiment that tests stability,
    warm-up, event ordering, replication error, and one distributional metric.

<details>
<summary>Hint 1</summary>

Choose independently controlled cases for each source of error.

</details>
<details>
<summary>Hint 2</summary>

Specify an exact reference, initial condition, event ties, replication scheme and target quantile.

</details>
<details>
<summary>Full solution</summary>

Run below, near, and above the theoretical stability boundary; discard and vary warm-up; test simultaneous arrival/departure rules on a hand trace; use independent seeded replications with intervals; and compare a wait quantile or tail probability with the exact M/M/1 law.

</details>

## Project

Audit a real or synthetic service-and-inventory system. Define attempted and
admitted arrivals, throughput, abandonment, queue population, time origin,
priority discipline, stockout behavior, and at least two non-equivalent service
metrics. Implement a seeded event simulation and validate pathwise Little's
law plus the exact M/M/1 mean and one quantile before adding general service or
abandonment. Include warm-up and horizon sensitivity, confidence intervals
across independent replications, an unstable stress test, and a text table for
every plot. For an inventory layer, compare EOQ or newsvendor predictions with
the simulation and document where censored demand makes validation impossible.

## Summary

Queue and inventory formulae depend on the population, stability, distribution and cost definitions. Exact algebra does not validate those assumptions. Strategic interaction next adds decisions whose consequences depend on other decision makers.
