
# Birth-death Processes and Queues

A queue length changes when customers arrive or service finishes. Knowing its present length is enough to describe its future only under suitable assumptions about arrival and service mechanisms. Independent exponential clocks provide one such model. General service distributions usually require additional state, such as the remaining service times. A birth-death model is therefore a mathematical assumption about information, rather than a universal description of waiting.

Preparation is [Continuous-time Markov Chains](continuous-time-markov-chains.md), geometric series and elementary expectation. Finite examples are L3. The countable-state queue results retain their explicit nonexplosion and normalisation hypotheses; these matter before any stationary formula is interpreted as a long-run operating prediction.

## Local rates and a nonexplosive construction

**Definition 8.1 (birth-death rates).** On states $0,1,2,\ldots$, let transitions from $n$ to $n+1$ have rate $\lambda_n\ge0$, and from $n\ge1$ to $n-1$ have rate $\mu_n\ge0$. Put $\mu_0=0$ and $q_{nn}=-(\lambda_n+\mu_n)$. All other off-diagonal rates are zero. A finite-capacity version uses states through $K$ and $\lambda_K=0$.

A state counts the number present, including customers in service. Thus a departure can occur from state one, but not from zero. Arrival intensity and completed-service intensity need not be equal at a particular state, even when the process has a stationary law.

If the rates have a common finite upper bound on $\lambda_n+\mu_n$, uniformisation constructs a nonexplosive process. This sufficient condition applies to every M/M/c queue with a fixed finite number of servers and constant arrival rate. No bounded-rate argument is being claimed for arbitrary birth-death chains; rapidly increasing birth rates can produce explosion.

**Definition 8.2 (stationary weights).** Assume $\lambda_n>0$ for every $n$ and $\mu_n>0$ for every $n\ge1$. Define
$$
w_0=1,\qquad
w_n=\frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}.
$$
When $Z=\sum_{n\ge0}w_n<\infty$, the candidate stationary probabilities are $\pi_n=w_n/Z$.

## Why adjacent balance is sufficient

**Theorem 8.3 (bounded-rate stationary law).** For a birth-death chain with bounded total rates and the strict positivity assumptions above, $Z<\infty$ gives a stationary probability $\pi_n=w_n/Z$. Conversely, any stationary probability must have these weights.

**Proof.** The product definition gives $\pi_n\lambda_n=\pi_{n+1}\mu_{n+1}$. These adjacent equalities equate incoming and outgoing flows at every state, including the boundary zero, so $\pi Q=0$.

To justify stationarity beyond formal equations, choose a dominating finite uniformisation rate $a$. The countable matrix $R=I+Q/a$ is stochastic. Adjacent balance gives $\pi R=\pi$, with all sums nonnegative and absolutely bounded by a probability total. Hence $\pi R^k=\pi$ for every $k$. The nonnegative Poisson mixture defining $P(t)$ gives $\pi P(t)=\pi$.

Conversely, bounded rates permit differentiating the stationary identity at zero and give $\pi Q=0$. At state zero this says $\pi_0\lambda_0=\pi_1\mu_1$. At state one the equality and stationarity imply $\pi_1\lambda_1=\pi_2\mu_2$. Induction propagates adjacent balance. Positivity and normalisation then force the stated weights and a finite sum. ∎

The boundary equation is essential. On a line with no reflecting endpoint, one can discuss nonzero probability currents; the zero-state boundary here forces the adjacent stationary current to vanish. A divergent weight sum is not fixed by choosing an arbitrary finite normalising constant.

## The M/M/1 queue

Arrivals form a Poisson process of rate $\lambda>0$. A single server gives independent exponential service durations of rate $\mu>0$, independently of arrivals. Service continues whenever the queue is nonempty. Memorylessness makes the number present Markov, with $\lambda_n=\lambda$ and $\mu_n=\mu$ for $n\ge1$.

Put $\rho=\lambda/\mu$. The weights are $\rho^n$, and they normalise exactly when $\rho<1$. In that case
$$
\pi_n=(1-\rho)\rho^n,\qquad
E_\pi L=\frac{\rho}{1-\rho}.
$$
The expectation follows by differentiating the geometric series on $0\le\rho<1$, or by summing the tail probabilities $P_\pi(L\ge n)=\rho^n$.

For $\rho\ge1$, there is no stationary probability of this form, and by Theorem 8.3 there is no stationary probability at all. At equality the absence of a stationary probability does not mean that the queue increases monotonically or never empties. Recurrence and finite stationary occupation are different questions.

**Worked example 8.4 (spare capacity and a long tail).** Suppose $\lambda=3$ arrivals per hour and $\mu=4$ services per hour. Then $\rho=3/4$, the stationary empty probability is $1/4$, and the mean number present is three. The probability of at least ten present is $(3/4)^{10}$. A mean of three does not rule out much longer queues. These are stationary model probabilities; starting an empty system at time zero does not immediately place it in equilibrium.

## Busy periods and waiting targets

When $\lambda<\mu$, the time until the M/M/1 queue next empties from $i$ customers has mean $i/(\mu-\lambda)$. Before reaching zero, potential transitions occur at rate $\lambda+\mu$ and their embedded steps go up with probability $\lambda/(\lambda+\mu)$ and down with probability $\mu/(\lambda+\mu)$. The half-line random-walk result therefore gives mean step count $i(\lambda+\mu)/(\mu-\lambda)$. Independent exponential holding means are $1/(\lambda+\mu)$, giving the claimed duration. The jump construction can take the holding times independently of the jump directions, so conditioning on the step count justifies the multiplication.

A stationary arrival to a first-come, first-served queue sees the stationary number distribution. For the independent Poisson arrival stream, this is the Poisson-arrivals-see-time-averages property; we cite that arrival-sampling theorem rather than infer it from stationarity alone. Given $n$ already present, memorylessness gives expected time to completion $(n+1)/\mu$. Averaging gives
$$
E W=\frac1{\mu-\lambda},\qquad
E W_q=\frac{\rho}{\mu-\lambda}.
$$
The first includes the arriving customer's service; the second excludes it. Their difference is $1/\mu$.

**Worked example 8.5 (three different durations).** With rates three and four per hour, a busy period started by one customer has mean one hour. A stationary arriving customer's mean time in the system is also one hour, while its mean waiting time before service is three-quarters of an hour. The equal first two numbers arise from different calculations and do not identify their distributions or conditioning events.

## Several servers: M/M/c

Let $c\ge1$ identical servers work independently at rate $\mu$ each. The total completed-service rate at state $n$ is $\min(n,c)\mu$. Arrivals still have rate $\lambda$. Put $a=\lambda/\mu$ and $\rho=\lambda/(c\mu)$. Product weights give
$$
w_n=\frac{a^n}{n!}\quad(0\le n\le c),\qquad
w_{c+k}=\frac{a^c}{c!}\rho^k\quad(k\ge0).
$$
They normalise precisely for $\rho<1$, with
$$
Z=\sum_{n=0}^{c-1}\frac{a^n}{n!}
+\frac{a^c}{c!(1-\rho)}.
$$
The stationary probability that an independent Poisson arrival must wait is
$$
C=\frac{a^c}{c!(1-\rho)Z}.
$$
Indeed waiting occurs exactly when at least $c$ customers are present; summing that geometric stationary tail gives the formula, and the cited arrival-sampling property transfers it to arrivals.

The mean queue length, excluding service, is $L_q=C\rho/(1-\rho)$. This follows by summing $k\pi_{c+k}$ over $k\ge0$. The mean waiting time is $W_q=C/(c\mu-\lambda)$. One way to see this without an unexplained formula is to condition on an arrival finding $c+k$ present. It needs $k+1$ completions before starting service, each of mean $1/(c\mu)$ while all servers remain busy. Averaging the stationary geometric tail gives the result.

**Worked example 8.6 (two servers).** Take $\lambda=2$ per hour, $\mu=2$ per hour per server and $c=2$. Then $a=1,\rho=1/2$, and $Z=1+1+(1/2)/(1/2)=3$. Thus $\pi_0=1/3$ and $C=1/3$. The mean queue length is $1/3$, waiting time is $1/6$ hour, and mean time including service is $1/6+1/2=2/3$ hour.

## Capacity, discipline and model limits

A capacity $K$ makes the state space finite. For an M/M/1/K model, accepted arrivals occur at rate $\lambda$ only below $K$; attempted arrivals finding $K$ are rejected and do not change the state. The stationary weights remain $\rho^n$ but are summed only through $K$, so they normalise for every positive rate pair, including $\rho=1$.

At $\rho=1$ the finite-capacity law is uniform on its $K+1$ states. The stationary rejection probability of an attempted Poisson arrival is $\pi_K$. The accepted throughput is $\lambda(1-\pi_K)$ and equals the stationary departure rate. A rejected customer has no sojourn in the system; statistics conditional on acceptance must use that selection rule.

Priority, abandonment, finite sources and nonexponential service alter the transition mechanism. In particular, arbitrary service times with the same mean do not make the queue length an M/M/1 chain. The formulas above answer questions under the declared exponential model; they are not guarantees for every system with matching average arrival and service rates.

## Accepted customers and flow accounting

For finite capacity, it is useful to derive a time summary conditional on admission rather than assigning a waiting time to rejected customers. In M/M/1/K, a Poisson attempted arrival sees state $n$ with probability $\pi_n$. Admission is the event $n<K$, so its conditional distribution is $\pi_n/(1-\pi_K)$ on $0,\ldots,K-1$. With first-come, first-served exponential service, an admitted customer finding $n$ present needs $n+1$ service completions before its own departure. Its conditional mean sojourn is $(n+1)/\mu$.

Consequently the admitted-customer mean sojourn is
$$
W_{\rm adm}
=\frac{\sum_{n=0}^{K-1}(n+1)\pi_n}
{\mu(1-\pi_K)}.
$$
This calculation explicitly states the arrival law, admission rule and service discipline. It does not treat rejected attempts as customers who departed instantly.

Adjacent balance also proves a flow relation without assuming that every attempted arrival succeeds:
$$
\lambda\sum_{n=0}^{K-1}\pi_n
=\mu\sum_{n=1}^K\pi_n.
$$
The left side is accepted throughput, and the right side is completed-service throughput. Multiplying the balance identity for the edge from $n$ to $n+1$ by $n+1$ and summing gives
$$
\lambda\sum_{n=0}^{K-1}(n+1)\pi_n
=\mu\sum_{n=1}^Kn\pi_n.
$$
Thus mean number present equals accepted throughput multiplied by mean admitted sojourn. Here this relationship is obtained directly from the finite stationary equations and the conditional service calculation.

**Worked example 8.7 (one place and no waiting room).** With capacity one, equal arrival and service rates two per hour give $\pi_0=\pi_1=1/2$. Half of attempted arrivals are rejected, and accepted throughput is one per hour. An admitted customer finds the system empty and spends mean one-half hour in service. The stationary mean number present is one-half, exactly throughput times admitted sojourn. Dividing that number by the attempted rate instead would give one-quarter hour, which is not the mean duration experienced by admitted customers.

These distinctions also guide data collection. A log of completed customers excludes rejected attempts, customers still waiting at the end and possibly those who abandoned. Its empirical duration distribution therefore need not be the distribution of all attempted arrivals. Even under an exact queueing model, the observation protocol determines which conditional quantity a sample can estimate.

The stationary formulas describe operating conditions after equilibrium has been imposed or approached. During a transient build-up from an empty state, arrival counts and departures need not have matching expectations over a finite interval. The conservation identity is instead initial population plus accepted arrivals minus departures equals final population. That pathwise bookkeeping remains valid when equilibrium formulas do not apply.

## A finite buffer can conceal an unstable infinite queue

Give an M/M/1 queue a capacity $K$, rejecting arrivals when the system is full. Detailed balance makes its stationary masses proportional to $\rho^j$ for $0\le j\le K$, where $\rho$ is the arrival-to-service ratio. Every finite capacity has a stationary law, even when arrivals exceed service.

When $\rho<1$, the normalised finite-buffer law approaches the infinite geometric stationary law as capacity grows. At $\rho=1$, the finite law is uniform, and the probability of every fixed finite collection of queue lengths tends to zero. For $\rho>1$, its mass likewise moves toward larger capacities rather than converging to a probability law on the nonnegative integers.

Thus finite-state stationarity does not prove positive recurrence of an infinite-capacity model. A capacity limit needs tightness of its stationary laws, which fails in those latter cases. Simulating a bounded queue for a long time can only explore the bounded model; it cannot establish stability of the unbounded queue by displaying a settled finite histogram.

## Exercises

### Exercise 8.1
<a id="birth-death-processes-queues-ex-1"></a>

Find the stationary probabilities and mean length for an M/M/1 queue with arrival rate two and service rate five per hour.

<details>
<summary>Hint 1</summary>

Form the utilisation ratio.
</details>
<details>
<summary>Hint 2</summary>

Sum a geometric probability law.
</details>
<details>
<summary>Solution</summary>

Here $\rho=2/5$. The stationary probabilities are $(3/5)(2/5)^n$ and their mean is $(2/5)/(3/5)=2/3$ customers. The law describes the total present, including service. The stability inequality holds strictly; no truncation of the infinite queue has been introduced.
</details>

### Exercise 8.2
<a id="birth-death-processes-queues-ex-2"></a>

For the preceding queue find the mean stationary sojourn, waiting time and one-customer busy period.

<details>
<summary>Hint 1</summary>

Distinguish time including service from time before service.
</details>
<details>
<summary>Hint 2</summary>

Use the difference between the service and arrival rates.
</details>
<details>
<summary>Solution</summary>

The mean sojourn is $1/(5-2)=1/3$ hour. Mean waiting is $(2/5)/(5-2)=2/15$ hour; their difference is 1/5 hour, the mean service duration. A busy period from one has mean 1/3 hour as well, but refers to the time until the entire system empties, rather than the completion time of a tagged stationary arrival.
</details>

### Exercise 8.3
<a id="birth-death-processes-queues-ex-3"></a>

Why does the stationary product formula fail at arrival rate equal to service rate on an infinite M/M/1 queue?

<details>
<summary>Hint 1</summary>

Inspect the unnormalised weights.
</details>
<details>
<summary>Hint 2</summary>

There are infinitely many copies of one.
</details>
<details>
<summary>Solution</summary>

Every weight $\rho^n$ equals one, so the sum is infinite. Adjacent balance forces every stationary mass to equal the mass at zero. A positive common mass cannot sum to one, while zero common mass gives total zero. Thus no stationary probability exists; this does not imply that paths increase at every transition.
</details>

### Exercise 8.4
<a id="birth-death-processes-queues-ex-4"></a>

Derive the M/M/1/K stationary law when the rates are equal.

<details>
<summary>Hint 1</summary>

Finite capacity changes the normalising sum.
</details>
<details>
<summary>Hint 2</summary>

There are K+1 allowed states.
</details>
<details>
<summary>Solution</summary>

All product weights are one, hence $\pi_n=1/(K+1)$ for n from zero through K. The boundary at K suppresses accepted births. This is consistent with finite-state stationarity even though the corresponding infinite-state chain has no stationary probability. For Poisson attempted arrivals the rejection probability is 1/(K+1).
</details>

### Exercise 8.5
<a id="birth-death-processes-queues-ex-5"></a>

In the two-server example calculate the fraction of time each number zero, one and two has stationary mass.

<details>
<summary>Hint 1</summary>

Use the product weights before the geometric tail.
</details>
<details>
<summary>Hint 2</summary>

The normaliser is three.
</details>
<details>
<summary>Solution</summary>

The masses are $\pi_0=1/3$, $\pi_1=1/3$ and $\pi_2=1/6$. The remaining mass 1/6 lies above two; consequently the probability of at least two present is 1/3. The state two includes two customers receiving service with no waiting customer, but a new arrival finding that state must wait.
</details>

### Exercise 8.6
<a id="birth-death-processes-queues-ex-6"></a>

Prove that the candidate birth-death weights obey stationary adjacent balance.

<details>
<summary>Hint 1</summary>

Take the ratio of consecutive product weights.
</details>
<details>
<summary>Hint 2</summary>

Normalisation cancels.
</details>
<details>
<summary>Solution</summary>

The ratio $w_{n+1}/w_n$ is $\lambda_n/\mu_{n+1}$. Thus $\pi_n\lambda_n=\pi_{n+1}\mu_{n+1}$. Summing neighbouring flows gives $\pi Q=0$, including the zero boundary. To deduce an invariant transition law on infinitely many states, also justify nonexplosion and the semigroup step; the bounded-rate uniformisation proof in the chapter supplies both for its stated setting.
</details>

### Exercise 8.7
<a id="birth-death-processes-queues-ex-7"></a>

Explain why a queue length alone need not be Markov when service durations are deterministic.

<details>
<summary>Hint 1</summary>

An ongoing service has an age.
</details>
<details>
<summary>Hint 2</summary>

Compare two histories with the same number present.
</details>
<details>
<summary>Solution</summary>

With one customer in service, the next departure is almost immediate if nearly all its fixed service duration has elapsed, but far away if service just began. Both histories have the same queue length and different conditional futures. Recording the residual service time restores relevant state information. Replacing the deterministic mean by an exponential rate would describe a different process.
</details>

### Exercise 8.8
<a id="birth-death-processes-queues-ex-8"></a>

Find the stationary departure rate in M/M/1 when rho is below one.

<details>
<summary>Hint 1</summary>

Service occurs only when the queue is nonempty.
</details>
<details>
<summary>Hint 2</summary>

The busy probability equals rho.
</details>
<details>
<summary>Solution</summary>

The mean completed-service intensity is $\mu P(L>0)=\mu\rho=\lambda$. This matches accepted arrivals in the unbounded stable model. It does not assert equality of arrival and departure counts on each finite interval: their difference equals the change in the number present. Boundary customers account for that finite-interval discrepancy.
</details>

### Exercise 8.9
<a id="birth-death-processes-queues-ex-9"></a>

Derive the mean number waiting in M/M/c from its geometric stationary tail.

<details>
<summary>Hint 1</summary>

Write n=c+k.
</details>
<details>
<summary>Hint 2</summary>

Sum k rho^k over nonnegative k.
</details>
<details>
<summary>Solution</summary>

The tail mass is $\pi_{c+k}=\pi_c\rho^k$ and $C=\pi_c/(1-\rho)$. Thus $L_q=\pi_c\rho/(1-\rho)^2=C\rho/(1-\rho)$. This counts only customers beyond the c service positions. Including all customers requires adding the mean number of busy servers, which in stationarity is lambda/mu by the flow identity.
</details>

### Exercise 8.10
<a id="birth-death-processes-queues-ex-10"></a>

Which assumptions are needed to identify the probability that an arrival sees a full finite-capacity queue with $\pi_K$?

<details>
<summary>Hint 1</summary>

Time sampling and arrival sampling are different.
</details>
<details>
<summary>Hint 2</summary>

The arrival clock is independent and Poisson.
</details>
<details>
<summary>Solution</summary>

The equality uses the Poisson-arrivals-see-time-averages theorem for the independent stationary attempted-arrival process. Stationarity alone does not prove it for arbitrary arrival mechanisms. Scheduled arrivals, state-dependent arrival rates or sampling only accepted customers can induce different observed distributions. Here attempted arrivals at capacity are counted in the rejection statistic even though they produce no state change.
</details>

## Sources and continuation

The finite and bounded-rate proofs and exercises are original Euler treatments. Norris, *Markov Chains*, supplies the broader Markov theory; standard queueing texts give the cited Poisson-arrival sampling theorem. The assumptions about exponential durations, observation units and stationarity are part of every queue calculation here. [Renewal Processes](renewal-processes.md) develops nonexponential cycle durations without silently keeping the same Markov state.

## Summary

Birth-death rates describe neighbouring moves. Adjacent balance produces product weights, but stationarity also requires normalisation and an appropriate nonexplosive construction. M/M/1 stability is strict spare service capacity; M/M/c uses total capacity and a geometric tail beyond its service positions. Busy periods, waiting and total sojourn are different targets. Finite capacity admits stationarity at equal rates while introducing rejection and conditioning on acceptance.
