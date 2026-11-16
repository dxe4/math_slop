
# Poisson Processes

## Motivation: counting rare events

Many real-world phenomena involve events that occur "randomly in time" with a constant average rate: radioactive decays, phone calls to a switchboard, customers arriving at a queue, particles hitting a detector. The **Poisson process** is the fundamental model for such counting processes. Its mathematical elegance comes from the **memoryless property** of the exponential distribution, which makes the process restart afresh after each event.

## Definition and basic properties

A **counting process** here has càdlàg, nondecreasing, integer-valued paths. A **homogeneous Poisson process** with rate $\lambda>0$ is a counting process $(N(t))_{t\ge0}$ satisfying:

1. $N(0) = 0$.
2. **Independent increments:** for $0 \le t_{1} < t_{2} < \dots < t_{k}$, the increments $N(t_{2})-N(t_{1}), \dots, N(t_{k})-N(t_{k-1})$ are independent.
3. **Stationary increments:** the distribution of $N(t+s)-N(s)$ depends only on $t$.
4. **Poisson count law:** for all $t \ge 0$ and $k \ge 0$,
   $$\mathbb{P}(N(t)=k) = e^{-\lambda t} \frac{(\lambda t)^{k}}{k!}.$$

**Theorem 6.3 (interarrival times).** Let $T_{1} = \inf\{t > 0 : N(t) = 1\}$ be the time of the first arrival, and $T_{n} = \inf\{t > 0 : N(t) = n\}$ the time of the $n$th arrival. Define the interarrival times $W_{1} = T_{1}$ and $W_{n} = T_{n} - T_{n-1}$ for $n \ge 2$. Then $(W_{n})_{n \ge 1}$ are i.i.d. $\text{Exponential}(\lambda)$ random variables.

**Proof.** For the first waiting time,
$$\mathbb{P}(W_{1} > t) = \mathbb{P}(N(t)=0) = e^{-\lambda t},$$
so $W_{1} \sim \text{Exponential}(\lambda)$.

For the second waiting time, use the **strong Markov property** at time $T_{1}$. The process $(N(T_{1}+t) - N(T_{1}))_{t \ge 0}$ is independent of $\mathcal{F}_{T_{1}}$ and has the same law as $(N(t))_{t \ge 0}$. Therefore $W_{2}$ is independent of $W_{1}$ and also $\text{Exponential}(\lambda)$. Repeating this argument gives the result. We use the standard strong Markov theorem for Poisson processes here; its proof from the deterministic-time increment axioms requires an approximation of stopping times and is not reproduced in this orientation chapter.

**Critical point.** Independent increments stated only at deterministic times do not, by themselves, justify restarting at a random time. The strong Markov property at $T_{1}$ is precisely what licenses the restart. Without it, the argument would be circular.

**Corollary 6.4.** The $n$th arrival time $T_{n} = W_{1} + \dots + W_{n}$ has a **gamma distribution** with shape $n$ and rate $\lambda$:
$$\mathbb{P}(T_{n} \le t) = 1 - \sum_{k=0}^{n-1} e^{-\lambda t} \frac{(\lambda t)^{k}}{k!}.$$

## Superposition and thinning

**Theorem 6.5 (superposition).** Let $N_{1}$ and $N_{2}$ be independent Poisson processes with rates $\lambda_{1}$ and $\lambda_{2}$. Then $N(t) = N_{1}(t) + N_{2}(t)$ is a Poisson process with rate $\lambda_{1} + \lambda_{2}$.

**Proof.** The sum has independent increments because $N_{1}$ and $N_{2}$ do and they are independent. The sum of independent Poisson variables is Poisson, so $N(t) \sim \text{Poisson}((\lambda_{1}+\lambda_{2})t)$.

**Theorem 6.6 (thinning).** Let $N$ be a Poisson process with rate $\lambda$. Suppose each arrival is independently retained with probability $p$ and discarded with probability $1-p$. Then the retained process $N^{\text{ret}}$ and the discarded process $N^{\text{disc}}$ are independent Poisson processes with rates $p\lambda$ and $(1-p)\lambda$.

**Proof by conditioning (completed below).** Condition on $N(t)=n$. The number of retained arrivals is $\text{Binomial}(n,p)$, and the number discarded is $\text{Binomial}(n,1-p)$. Using the Poisson law for $N(t)$ and summing over $n$, one finds that $N^{\text{ret}}(t)$ and $N^{\text{disc}}(t)$ are independent Poisson variables with means $p\lambda t$ and $(1-p)\lambda t$. The independence of increments follows from the independence of the retention decisions.

**Common error.** The thinning claim fails if retention depends on the history of the process or on congestion. "Randomly label each point independently" is a material hypothesis. If you discard every other arrival deterministically, the retained process is not Poisson.

## Worked example: compound Poisson process

Let $N$ be a Poisson process with rate $\lambda$, and let $(Y_{n})_{n \ge 1}$ be i.i.d. random variables independent of $N$. The **compound Poisson process**
$$X(t) = \sum_{n=1}^{N(t)} Y_{n}$$
models the total claim amount in insurance, the total service requirement in a queue, or the total displacement in a random walk with random jump times.

**Moment generating function.** For $t\ge0$ and every $\theta$ for which $\mathbb E[e^{\theta Y_1}]<\infty$,
$$\mathbb{E}[e^{\theta X(t)}] = \exp\left(\lambda t (\mathbb{E}[e^{\theta Y_{1}}] - 1)\right).$$

**Proof.** Condition on $N(t)$:
$$\mathbb{E}[e^{\theta X(t)}] = \sum_{n=0}^{\infty} \mathbb{P}(N(t)=n) \mathbb{E}[e^{\theta(Y_{1}+\dots+Y_{n})}] = \sum_{n=0}^{\infty} e^{-\lambda t} \frac{(\lambda t)^{n}}{n!} (\phi_{Y}(\theta))^{n},$$
where $\phi_{Y}(\theta) = \mathbb{E}[e^{\theta Y_{1}}]$. Summing the series gives the result.

**Mean and variance.** If $\mathbb E|Y_1|<\infty$, conditioning on $N(t)$ gives $\mathbb E[X(t)]=\lambda t\,\mathbb E[Y_1]$. If also $\mathbb E[Y_1^2]<\infty$, the conditional-variance identity gives

$$\operatorname{Var}(X(t))=\mathbb E[N(t)]\operatorname{Var}(Y_1)+\operatorname{Var}(N(t))(\mathbb E[Y_1])^2
=\lambda t\,\mathbb E[Y_1^2].$$

These moment formulas do not require the moment generating function to be finite in a neighborhood of zero.

## Worked example: Poisson thinning in practice

A customer service centre receives calls at a rate of $12$ per hour. Each call is independently classified as urgent with probability $1/4$ and routine with probability $3/4$.

By the thinning theorem, urgent calls form a Poisson process with rate $p\lambda = (1/4)(12) = 3$ per hour, and routine calls form an independent Poisson process with rate $(1-p)\lambda = 9$ per hour.

The probability of exactly $2$ urgent calls in one hour is
$$\mathbb{P}(N^{\text{urgent}}(1)=2) = e^{-3} \frac{3^{2}}{2!} = \frac{9e^{-3}}{2} \approx 0.224.$$

The probability of no urgent calls and exactly $5$ routine calls in one hour is, by independence,
$$\mathbb{P}(N^{\text{urgent}}(1)=0) \mathbb{P}(N^{\text{routine}}(1)=5) = e^{-3} \cdot e^{-9} \frac{9^{5}}{5!} = e^{-12} \frac{59049}{120} \approx 0.00302.$$

## Common errors

**Error 1: Using deterministic thinning.** If you classify arrivals by a deterministic rule (e.g., "every third arrival is urgent"), the resulting process is not Poisson. The independence of retention decisions is essential.

**Error 2: Forgetting the strong Markov property.** One cannot simply assert that the process restarts at a random time. The strong Markov property must be verified or cited.

**Error 3: Confusing rate and mean.** The rate $\lambda$ is the expected number of events per unit time. The mean of $N(t)$ is $\lambda t$, not $\lambda$.


## Constructing the process from exponential clocks

Take independent exponential variables $W_j$ of rate $\lambda$, put $T_n=\sum_{j=1}^nW_j$, and define $N(t)=\max\{n:T_n\le t\}$. The strong law gives $T_n/n\to1/\lambda>0$, so there are finitely many arrivals in every bounded interval almost surely. The counting paths are right-continuous and have jumps of size one.

For ordered arrival locations $0<t_1<\cdots<t_n<t$, the density of the first $n$ exponential gaps multiplied by the chance that the next gap extends beyond $t$ is
$$
\lambda^ne^{-\lambda t_n}e^{-\lambda(t-t_n)}
=\lambda^ne^{-\lambda t}.
$$
The ordered simplex has volume $t^n/n!$. Integrating gives the Poisson mass $e^{-\lambda t}(\lambda t)^n/n!$. This also proves that, conditional on the count $n$, the ordered arrival times have constant density $n!/t^n$ on that simplex: they are the order statistics of $n$ independent uniform locations.

For several disjoint adjacent intervals, prescribe their counts and integrate the same constant density separately over the ordered simplexes in each interval. The volumes multiply. The resulting joint mass is the product of the Poisson masses with their interval lengths. This establishes independent stationary increments for the constructed process, rather than assuming them from a marginal Poisson distribution.

Restarting after the $n$th arrival now follows directly from independence of the remaining gap sequence. More general stopping times need the stopping-time approximation argument of a strong Markov theorem. The distinction prevents a circular proof in which random-time independence is inferred merely from deterministic-time independence.

## Full joint thinning calculation

For retained count $R$ and discarded count $D$ on an interval of length $t$, condition on the total and use independent marks. Their joint probability generating function for $0\le z,w\le1$ is
$$
E[z^Rw^D]
=E[(pz+(1-p)w)^{N(t)}]
=\exp\{\lambda t(pz+(1-p)w-1)\}.
$$
This factors into $\exp\{p\lambda t(z-1)\}$ times $\exp\{(1-p)\lambda t(w-1)\}$. Uniqueness of generating functions proves independence and both Poisson laws. Apply this reasoning to each disjoint time interval; independence of the original increments and of all marks gives joint independent increments of the two resulting processes. Thus the theorem concerns whole processes, not only a pair of counts at one chosen time.

Conditional on a fixed total, retained and discarded counts are negatively dependent because they sum to that total. Their unconditional independence comes from mixing over the Poisson total. Confusing the conditional and unconditional statements would make the theorem look contradictory.

## Worked example: locating arrivals inside an interval

Given exactly three arrivals in a two-hour interval, the first arrival time has survival probability $(1-s/2)^3$ for $0\le s\le2$. All three uniform locations must exceed $s$. Its conditional mean is the integral of that survival function, namely one-half hour. It is not exponential under this conditioning: the known total changes the information and gives an upper endpoint.

## Compensated counts and changing rates

The process $M_t=N(t)-\lambda t$ is an integrable martingale for the Poisson history, because the future increment is independent of that history and has mean $\lambda(t-s)$. Also $\operatorname{Cov}(N(s),N(t))=\lambda\min(s,t)$, obtained by splitting the later count into the earlier count and an independent increment.

For a deterministic nonnegative locally integrable intensity $r(u)$, put $\Lambda(t)=\int_0^tr(u)\,du$ and time-change a unit-rate Poisson process: $N(t)=N_0(\Lambda(t))$. Counts have mean $\Lambda(t)$ and independent increments, but increments are stationary only when the integrated intensity has the corresponding translation property. Random state-dependent intensities need a different conditional construction.

**Worked example: a scheduled intensity.** If intensity over the first hour is $r(u)=2+u$ per hour with $u$ measured in hours, its integrated mean is $5/2$. No arrival in that hour has probability $e^{-5/2}$. Using the endpoint intensity three as the total mean would ignore the rate's variation over the interval.

## Practice exercises

### Exercise 1
<a id="poisson-processes-ex-1"></a>

Let $N$ be a Poisson process with rate $\lambda = 2$. Find $\mathbb{P}(N(1)=3 \mid N(2)=5)$.

<details>
<summary>Hint 1</summary>

Use independent increments on the two unit intervals.

Condition on independent counts in disjoint intervals or on the total count.

</details>

<details>
<summary>Hint 2</summary>

Condition their independent Poisson counts on the sum five; derive the resulting binomial law.

Use the Poisson mass formula and cancel the common exponential factors.

</details>

<details>
<summary>Solution</summary>

By the independent increments property, $N(1)$ and $N(2)-N(1)$ are independent, and $N(2)-N(1) \sim \text{Poisson}(2)$. Given $N(2)=5$, the conditional distribution of $N(1)$ is $\text{Binomial}(5, 1/2)$, because each of the $5$ events is independently equally likely to fall in $[0,1]$ or $(1,2]$. Thus
$$\mathbb{P}(N(1)=3 \mid N(2)=5) = \binom{5}{3} \left(\frac{1}{2}\right)^{5} = \frac{10}{32} = \frac{5}{16} = 0.3125.$$

</details>


### Exercise 2
<a id="poisson-processes-ex-2"></a>

Show that the sum of independent Poisson random variables $X \sim \text{Poisson}(\lambda)$ and $Y \sim \text{Poisson}(\mu)$ is $X+Y \sim \text{Poisson}(\lambda+\mu)$.

<details>
<summary>Hint 1</summary>

Factor the joint probability generating function using independence.

Condition on independent counts in disjoint intervals or on the total count.

</details>

<details>
<summary>Hint 2</summary>

Multiply exp(lambda(z−1)) and exp(mu(z−1)); compare coefficients or identify the Poisson generating function.

Use the Poisson mass formula and cancel the common exponential factors.

</details>

<details>
<summary>Solution</summary>

Compute the probability generating function:
$$\mathbb{E}[z^{X+Y}] = \mathbb{E}[z^{X}] \mathbb{E}[z^{Y}] = e^{\lambda(z-1)} e^{\mu(z-1)} = e^{(\lambda+\mu)(z-1)},$$
which is the pgf of $\text{Poisson}(\lambda+\mu)$. Since the pgf determines the distribution, $X+Y \sim \text{Poisson}(\lambda+\mu)$.

</details>


### Exercise 3
<a id="poisson-processes-ex-3"></a>

For a Poisson process with rate $\lambda$, find the conditional distribution of the first arrival time $T_{1}$ given that $N(t)=1$.


The conditional law is considered for $t>0$, so its denominator is positive.

<details>
<summary>Hint 1</summary>

For 0≤s≤t, express the event of an arrival by s and exactly one by t using two increments.

Condition on independent counts in disjoint intervals or on the total count.

</details>

<details>
<summary>Hint 2</summary>

Divide lambda s exp(−lambda t) by lambda t exp(−lambda t); the conditioning requires t>0.

Use the Poisson mass formula and cancel the common exponential factors.

</details>

<details>
<summary>Solution</summary>

For $0 \le s \le t$,
$$\mathbb{P}(T_{1} \le s \mid N(t)=1) = \frac{\mathbb{P}(N(s)=1, N(t)-N(s)=0)}{\mathbb{P}(N(t)=1)} = \frac{\lambda s e^{-\lambda s} \cdot e^{-\lambda(t-s)}}{\lambda t e^{-\lambda t}} = \frac{s}{t}.$$
Thus $T_{1}$ is uniformly distributed on $[0,t]$ given $N(t)=1$.

</details>


### Exercise 4
<a id="poisson-processes-ex-4"></a>

Find $\operatorname{Cov}(N(2),N(5))$ for rate three.

<details>
<summary>Hint 1</summary>

Separate the later independent increment.
</details>
<details>
<summary>Hint 2</summary>

The earlier count has variance six.
</details>
<details>
<summary>Solution</summary>

The covariance is $\operatorname{Var}(N(2))=6$. The increment from two to five is independent of the earlier count and has zero covariance with it. The two total counts are therefore dependent despite independent disjoint increments.
</details>

### Exercise 5
<a id="poisson-processes-ex-5"></a>

Given $N(4)=2$, find the probability both arrivals occur after time one.

<details>
<summary>Hint 1</summary>

Use conditional uniform locations.
</details>
<details>
<summary>Hint 2</summary>

Each location exceeds one with probability three-quarters.
</details>
<details>
<summary>Solution</summary>

The probability is $(3/4)^2=9/16$. Ordering the locations does not change the event that both exceed one. This is a conditional calculation and does not treat the arrival times as independent exponentials after conditioning on the total.
</details>

### Exercise 6
<a id="poisson-processes-ex-6"></a>

Show that retained and discarded counts have negative covariance given a total $n$.

<details>
<summary>Hint 1</summary>

Their sum is fixed.
</details>
<details>
<summary>Hint 2</summary>

One is n minus the other.
</details>
<details>
<summary>Solution</summary>

Given the total, $D=n-R$ and $R$ is binomial with variance $np(1-p)$. Thus $\operatorname{Cov}(R,D\mid N=n)=-np(1-p)$. Unconditional covariance is zero because the random Poisson total contributes the compensating between-total variation.
</details>

### Exercise 7
<a id="poisson-processes-ex-7"></a>

Prove the compensated-count martingale identity.

<details>
<summary>Hint 1</summary>

Condition on the information at time s.
</details>
<details>
<summary>Hint 2</summary>

The increment has mean lambda times its interval length.
</details>
<details>
<summary>Solution</summary>

Independent increments give $E[N(t)-N(s)\mid\mathcal F_s]=\lambda(t-s)$. Rearranging yields $E[N(t)-\lambda t\mid\mathcal F_s]=N(s)-\lambda s$. Counts are integrable at each finite time, completing the martingale conditions.
</details>

### Exercise 8
<a id="poisson-processes-ex-8"></a>

Why does retaining every second point not give a rate-halved Poisson process?

<details>
<summary>Hint 1</summary>

Look at successive retained gaps.
</details>
<details>
<summary>Hint 2</summary>

They sum two exponential gaps.
</details>
<details>
<summary>Solution</summary>

Each retained interarrival is gamma with shape two and the original rate, rather than exponential. Its mean is doubled, but memorylessness fails. Matching the mean rate does not supply the Poisson independent-increment law.
</details>

### Exercise 9
<a id="poisson-processes-ex-9"></a>

For compound Poisson marks of constant value five, compute mean and variance at time t.

<details>
<summary>Hint 1</summary>

The process equals five times the count.
</details>
<details>
<summary>Hint 2</summary>

Variance scales by the square.
</details>
<details>
<summary>Solution</summary>

The mean is $5\lambda t$ and variance $25\lambda t$. The general formula $\lambda t E[Y^2]$ agrees since $Y^2=25$. Using only the variance of a mark, which is zero, would omit randomness in the number of marks.
</details>

### Exercise 10
<a id="poisson-processes-ex-10"></a>

For deterministic intensity r(u)=2u on [0,3], find the probability of no arrivals and mean total count.

<details>
<summary>Hint 1</summary>

Integrate the intensity.
</details>
<details>
<summary>Hint 2</summary>

The cumulative mean is nine.
</details>
<details>
<summary>Solution</summary>

The mean is $\int_0^3 2u\,du=9$, and no arrivals has probability $e^{-9}$. This nonhomogeneous process has independent increments but not stationary increments: equally long intervals at later times have larger expected counts.
</details>


## A proved stopping-time restart

The exponential-clock construction above proves restarting after arrival indices. A general random time still needs a stopping-time argument. Here is that complementary result, which also makes precise the earlier strong Markov citation. Work with the natural filtration $\mathcal F_t=\sigma(N(u):u\le t)$, and its associated stopping-time sigma-algebra. An enlargement of the filtration is allowed only if the required future-increment independence from its past remains true.

**Theorem 6.1 (finite-stopping-time restart).** If $T<\infty$ almost surely is a stopping time, then for every finite list $0<t_1<\cdots<t_k$, the vector $(N(T+t_i)-N(T))_{i=1}^k$ is independent of $\mathcal F_T$ and has the same distribution as $(N(t_i))_{i=1}^k$.

**Proof.** At deterministic $t$, the future increment vector is independent of the past sigma-algebra: finite past cylinder events satisfy this by independent increments, and the pi-lambda theorem extends it to the sigma-algebra they generate. For a dyadic mesh $\delta$, round $T$ upwards to $T_\delta=\delta\lceil T/\delta\rceil$. This is a countably valued stopping time, $T_\delta\ge T$, and $\mathcal F_T\subseteq\mathcal F_{T_\delta}$. For $A\in\mathcal F_T$, each event $A\cap\{T_\delta=j\delta\}$ belongs to $\mathcal F_{j\delta}$.

Apply deterministic increment independence on each of these disjoint events and sum. For every bounded function $g$ on the nonnegative integer vectors, the result is

$$E[1_Ag((N(T_\delta+t_i)-N(T_\delta))_i)]
=P(A)E[g((N(t_i))_i)].$$

The countable sum is justified because $T_\delta$ is finite almost surely and $g$ is bounded. Along decreasing dyadic meshes, $T_\delta\downarrow T$. Right-continuity gives convergence of all the finitely many coordinates. Integer-valued convergence makes the vectors eventually equal on each path, so arbitrary bounded $g$ also converges. Bounded convergence passes the identity to the limit. Taking indicator functions for $g$ proves both the law and independence. ∎

For the arrival time $T_n$, finiteness follows from $P(T_n>t)=P(N(t)<n)\to0$. It is a stopping time because $\{T_n\le t\}=\{N(t)\ge n\}$. The restart theorem therefore applies, rather than merely resembling an informal “fresh start” claim. A last arrival before a fixed future horizon is different: deciding that it is last generally requires future information, so the stopping-time proof cannot be applied to it.

**Lemma 6.2 (simple jumps from the count axioms).** Almost surely all jumps have size one.

**Proof.** On $[0,H]$, divide time into $m$ equal pieces. If $X$ is Poisson with mean $u$, then $P(X\ge2)\le E[X(X-1)]/2=u^2/2$. The union bound therefore gives probability at most $\lambda^2H^2/(2m)$ that some partition increment has size at least two. A jump of size at least two in $(0,H]$ would force that event for every such partition. Its probability is thus bounded by a quantity tending to zero, and is zero. There is no jump at zero because $N(0)=0$ and paths are right-continuous. Take a countable union over positive integer $H$. ∎

This lemma justifies identifying the time the count first reaches $n$ with the $n$th single arrival. A path assumption and a marginal count law should not be allowed to conceal a simultaneous-arrival exception. There are only finitely many jumps on a bounded horizon because its total count is finite.

## Units and the scope of a count model

Rates have reciprocal time units; a Poisson mean is the dimensionless product $\lambda t$. For eighteen events per hour over ten minutes, the parameter is $18/6=3$. Converting the rate to $3/10$ per minute and retaining ten minutes gives the same product. Exponents such as $e^{-\lambda t}$ cannot change when one rewrites the same duration using different units. In a compound process, multiplying event counts by jump sizes gives the units of the accumulated quantity, and its variance has squared units.

Independent increments describe the declared filtration and unconditioned law. Conditioning on the final total changes intermediate count laws to binomial or multinomial laws, and the resulting disjoint counts are no longer independent under that conditional law. A state-dependent intensity can also create dependence between the past and future unconditioned increments. It therefore requires a different process construction, even if a short-time mean resembles the constant-rate formula.

The compensated process has zero conditional mean increments, but this is not a license to stop at any random time and retain its expectation. An unbounded stopping argument must control the stopped values and justify its limiting expectations. The distinction will reappear in martingales, queues and Brownian motion; preserving it here prevents an elementary count calculation from being mistaken for a general stopping theorem.

## Sources

The preserved exponential-clock construction and all original exercises remain above. Robert Gallager's primary [MIT course notes](https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/pages/course-notes/), chapter 2, and James Norris's author [Markov Chains source page](https://www.statslab.cam.ac.uk/~jrn10/Markov/), section 2.4, provide further treatments. These links were verified for attribution. The complementary stopping-time proof, scope explanations and staged hints are original.

## Summary

Independent exponential gaps construct the Poisson path law and conditional uniform arrival locations. Independent marks split the process into independent Poisson streams, although counts are dependent conditional on their total. Compensated counts are martingales. Compound marks retain uncertainty in the count, and deterministic time changes permit varying intensities without importing stationary increments. Continue to continuous-time chains, queues and renewal processes for different transition or waiting mechanisms.

Continue to [Continuous-time Markov Chains](continuous-time-markov-chains.md), where Poisson events supply a clock for state changes.
