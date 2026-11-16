var e=`---
parent_id: book-stochastic-processes-paths
chapter_id: continuous-time-markov-chains
title: "Continuous-time Markov Chains"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Continuous-time Markov Chains

A transition matrix describes what happens after one discrete update. A continuous-time model must also say when updates occur. A machine may fail at a rate per hour and be repaired at another rate, while observations are taken at arbitrary real times. Transition probabilities remain dimensionless, but their infinitesimal rates have units of inverse time.

The distinction between a clock tick and an actual state change matters. A useful construction allows a clock tick to leave the state unchanged. This produces an exact transition law, rather than a small-step approximation, and makes the connection with [Poisson Processes](poisson-processes.md) explicit. Preparation also includes finite-state chains, matrix multiplication, exponential functions and elementary differential equations. The state space in the main theorems is finite.

## Rates and the generator

**Definition 7.1 (finite rate matrix).** A generator $Q=(q_{ij})$ on a finite state space has $q_{ij}\\ge0$ for $j\\ne i$ and
$$
q_{ii}=-\\sum_{j\\ne i}q_{ij}.
$$
Write $q_i=-q_{ii}$ for the total exit rate. Row sums are zero, rather than one. If time is measured in hours, a rate $q_i=2$ means that the mean holding time, when positive, is one-half hour. It does not mean that a transition probability equals two.

A time-homogeneous transition function is a family $P(t)$ of stochastic matrices, $t\\ge0$, with $P(0)=I$ and $P(s+t)=P(s)P(t)$. Its generator is the entrywise derivative at zero:
$$
Q=\\lim_{h\\downarrow0}\\frac{P(h)-I}{h}.
$$
The finite-rate construction below proves existence of such a transition function for every finite rate matrix.

For small positive $h$, $P_{ij}(h)=q_{ij}h+o(h)$ when $j\\ne i$, while $P_{ii}(h)=1-q_i h+o(h)$. These are local approximations. Using $I+hQ$ at a large time step can give negative diagonal entries and does not describe the exact process.

## Uniformisation constructs the path law

**Theorem 7.2 (uniformisation).** Choose $\\lambda\\ge\\max_iq_i$ with $\\lambda>0$, and define $R=I+Q/\\lambda$. Let $Z_n$ be a discrete Markov chain with transition matrix $R$. Independently, let $N(t)$ be a Poisson process of rate $\\lambda$. Then $X_t=Z_{N(t)}$ has transition matrices
$$
P(t)=e^{-\\lambda t}\\sum_{n=0}^{\\infty}\\frac{(\\lambda t)^n}{n!}R^n
=e^{tQ}.
$$
The process has finitely many clock ticks on every bounded interval and therefore cannot make infinitely many state changes there.

**Proof.** The off-diagonal entries of $R$ are nonnegative. Its diagonal entries are $1-q_i/\\lambda\\ge0$, and its row sums are one. Conditional on $N(t)=n$, the transition law is $R^n$. Averaging over the Poisson probabilities gives the series, whose entries are nonnegative and whose row sums are one.

The series converges absolutely because the Poisson weights sum to one and entries of $R^n$ lie between zero and one. Since $Q=\\lambda(R-I)$ and $R$ commutes with $I$, the exponential series gives $e^{tQ}=e^{-\\lambda t}e^{\\lambda tR}$, proving the identity.

For $s,t\\ge0$, multiplication of the absolutely convergent series and the binomial identity give $P(s)P(t)=P(s+t)$. Equivalently, the Poisson clock has independent stationary increments and the discrete chain applies the corresponding number of further transitions. Differentiating at zero gives $Q$. Finally, a Poisson variable on a bounded interval is finite almost surely, and the number of actual state changes is no greater than its number of ticks. ∎

If $Q=0$, the process stays at its initial state; any positive $\\lambda$ in this construction merely generates null updates. More generally, different eligible choices of $\\lambda$ produce the same $e^{tQ}$ and the same intended process law, although they introduce different numbers of artificial ticks.

## Actual holding times and jump destinations

Starting in state $i$ with $q_i>0$, uniformisation remains at that state at a tick with probability $1-q_i/\\lambda$. Therefore the probability of no actual exit by time $t$ is
$$
E[(1-q_i/\\lambda)^{N(t)}]
=e^{-q_i t}.
$$
The holding time is exponential with rate $q_i$. Conditional on an exit, its destination $j\\ne i$ has probability $q_{ij}/q_i$. This follows by summing the geometric sequence of null ticks before the first non-null update. The same calculation factors the holding-time law from the destination probabilities.

**Definition 7.3 (embedded jump chain).** On states with positive exit rate, the successive distinct states form a discrete chain with transition probabilities $J_{ij}=q_{ij}/q_i$ for $j\\ne i$, and $J_{ii}=0$. An absorbing state with $q_i=0$ has an infinite holding time and can be given a holding row when a total discrete matrix is useful.

The jump chain answers where the process moves when it moves. It does not record the time spent in each state. Consequently its stationary law generally differs from the continuous-time stationary law.

**Worked example 7.4 (different speeds change occupation).** A machine switches from working to failed at rate $\\alpha=1$ per day and from failed to working at rate $\\beta=3$ per day. Its jump chain alternates deterministically, visiting each label equally often. But the mean working spell is one day and the mean failed spell is one-third day. The continuous-time stationary probabilities are $3/4$ working and $1/4$ failed. Equal numbers of visits do not imply equal fractions of elapsed time.

## Kolmogorov equations

**Theorem 7.5 (forward and backward equations).** For a finite rate matrix,
$$
P'(t)=QP(t)=P(t)Q,\\qquad P(0)=I.
$$
The solution is unique and equals $e^{tQ}$.

**Proof.** On a bounded time interval, the finite-dimensional exponential series and its derivative converge uniformly. Termwise differentiation gives $P'(t)=Qe^{tQ}=e^{tQ}Q$. If $F'(t)=F(t)Q$ and $F(0)=I$, differentiate $F(t)e^{-tQ}$. The product rule gives zero, so the product is identically $I$ and $F(t)=e^{tQ}$. The left-multiplication equation is handled similarly. ∎

For an initial probability row $\\mu$, the row $\\mu(t)=\\mu P(t)$ satisfies $\\mu'(t)=\\mu(t)Q$. Thus its $j$th derivative is incoming mass flow minus outgoing mass flow. The forward equation tracks the destination coordinate; the backward equation tracks the effect of the starting state. In finite dimensions both are valid without summability complications.

**Worked example 7.6 (two-state transition probabilities).** With states working and failed,
$$
Q=\\begin{pmatrix}-\\alpha&\\alpha\\\\\\beta&-\\beta\\end{pmatrix}.
$$
Let $u(t)=P(X_t=\\text{failed}\\mid X_0=\\text{working})$. The forward equation is $u'(t)=\\alpha(1-u(t))-\\beta u(t)$ with $u(0)=0$. Hence
$$
u(t)=\\frac{\\alpha}{\\alpha+\\beta}\\left(1-e^{-(\\alpha+\\beta)t}\\right).
$$
The probability of still working is its complement. In Example 7.4, the failed probability after one day is $(1-e^{-4})/4$, not the one-step failure approximation $\\alpha t=1$. The exact law accounts for possible failure and repair within that day.

## Stationarity and detailed balance

**Theorem 7.7 (stationary generator equation).** A probability row $\\pi$ is invariant for every $P(t)$ if and only if $\\pi Q=0$.

**Proof.** If $\\pi P(t)=\\pi$ for every $t$, differentiation at zero gives $\\pi Q=0$. Conversely, $\\pi Q=0$ implies $\\pi R=\\pi$ for a uniformisation matrix. Thus $\\pi R^n=\\pi$ for every $n$, and averaging with the Poisson weights gives $\\pi P(t)=\\pi$. ∎

Detailed balance, $\\pi_iq_{ij}=\\pi_jq_{ji}$ for distinct states, implies $\\pi Q=0$ by summing incoming and outgoing flows. It is sufficient, not necessary: a directed three-cycle with equal clockwise rates has uniform stationary law but no reverse off-diagonal rates.

If the finite rate graph is irreducible, $R$ is irreducible as well, and it has a unique stationary probability by the finite-chain results. Its stationary equation is exactly $\\pi Q=0$. Choosing $\\lambda>\\max_iq_i$ makes every diagonal of $R$ positive. The discrete convergence theorem and the Poisson mixture then give convergence to $\\pi$ in continuous time. Random holding times remove the deterministic parity obstruction seen in an alternating discrete chain.

## Convert between jump frequencies and time frequencies

For a finite irreducible chain with at least two states, every exit rate is positive. Let $\\pi$ be its continuous-time stationary law and put $\\bar q=\\sum_i\\pi_iq_i$. The jump-chain stationary law is
$$
\\nu_i=\\frac{\\pi_iq_i}{\\bar q}.
$$
Indeed, for any destination $j$,
$$
(\\nu J)_j
=\\frac1{\\bar q}\\sum_{i\\ne j}\\pi_iq_{ij}
=\\frac{\\pi_jq_j}{\\bar q}=\\nu_j,
$$
where the middle equality uses $\\pi Q=0$. States with faster departure rates produce more jumps per unit of stationary time. Conversely, starting from a stationary jump law $\\nu$, weight it by the mean holding time $1/q_i$ and normalise:
$$
\\pi_i=\\frac{\\nu_i/q_i}{\\sum_j\\nu_j/q_j}.
$$
These formulas require positive exit rates; an absorbing state cannot be treated by division by its zero rate.

**Worked example 7.9 (three speeds on a directed cycle).** A chain moves only clockwise through states zero, one and two, with respective exit rates one, two and four per hour. Its jump chain cycles deterministically, so its stationary visit frequencies are one-third each. Weighting by holding means gives continuous-time stationary probabilities proportional to $(1,1/2,1/4)$, namely $(4/7,2/7,1/7)$. The three clockwise stationary flows all equal $4/7$ per hour. Reverse flows are zero, so this is stationary without being reversible.

Observing the chain at fixed clock times targets elapsed-time occupation. Recording only the states immediately after actual jumps targets the jump chain. Recording uniformisation ticks targets yet another observation convention, including null updates. A data analysis must identify which record has been collected before interpreting its empirical frequencies as a stationary law.

## The generator measures expected change

For a real function $f$ on the finite state space,
$$
(Qf)(i)=\\sum_{j\\ne i}q_{ij}\\{f(j)-f(i)\\}.
$$
The diagonal identity makes the two forms equivalent. Each term is a rate multiplied by a change in the observed quantity, so $Qf$ has units of that quantity per time unit.

**Proposition 7.10 (finite-state expected-change identity).** Starting at state $i$,
$$
E_i f(X_t)-f(i)=\\int_0^t E_i(Qf)(X_s)\\,ds.
$$

**Proof.** The expected value is the $i$th coordinate of $P(t)f$. Its derivative is the corresponding coordinate of $P(t)Qf$, by the Kolmogorov equation. Integrating from zero to $t$ gives the identity. All functions are bounded on the finite state space, so the finite sums and time integral are well-defined and may be interchanged. ∎

This identity contains more information than the mean holding-time description. In the pure-death example, choose $f(i)=i$, the number of survivors. Its generator is $Qf(i)=-i$. Therefore the mean survivor count satisfies $m'(t)=-m(t)$ and, starting at two, equals $2e^{-t}$. This agrees with the independent-component calculation and explains why the rate out of state two is twice that out of state one.

Conditioning the expected-change identity at an earlier time also shows that
$$
f(X_t)-f(X_0)-\\int_0^t(Qf)(X_s)\\,ds
$$
is a martingale for the natural filtration. The Markov property applies the same identity starting from the observed state, and its conditional future increment has mean zero. Finite-state boundedness guarantees integrability on each bounded time interval. Stopping this process at an unbounded random time still requires the extra hypotheses developed in the martingale chapter.

## Hitting equations in real time

For a target $A$, take $e_i=E_i\\tau_A$ and suppose it is finite. From a state $i\\notin A$ with positive exit rate, first wait a mean $1/q_i$ and then jump according to $J$. Consequently
$$
e_i=\\frac1{q_i}+\\sum_{j\\ne i}\\frac{q_{ij}}{q_i}e_j,
\\qquad (Qe)_i=-1.
$$
For a probability of reaching $A$ before a disjoint $B$, the same conditioning omits the waiting-time term and gives $(Qh)_i=0$ outside the boundaries. Hitting probabilities depend on jump destinations; mean times also depend on rates. Finite irreducibility and a nonempty target ensure finite mean hitting time, since the finite jump chain has finite mean hitting steps and its positive holding means have a finite maximum.

**Worked example 7.8 (pure death).** Let $q_{21}=2$, $q_{10}=1$, and zero absorbing, with all other off-diagonal rates zero. The time to zero from two is the sum of independent exponential holding times of rates two and one, and has mean $1/2+1=3/2$. The equations give $e_0=0$, $e_1=1$, and $2(e_1-e_2)=-1$, hence $e_2=3/2$.

One realisation of this model takes two independent components, each with exponential lifetime of rate one, and counts survivors. The chance both survive to time $t$ is $e^{-2t}$. The chance exactly one survives is $2e^{-t}(1-e^{-t})$. This supplies a transition-law calculation independent of the mean-time equation and identifies what a state counts.

## Why finiteness matters

On countably many states, exit rates may be unbounded and no common finite uniformisation rate may exist. A pure-birth model with rates $q_{n,n+1}=2^n$, starting at zero, has expected total time for infinitely many jumps equal to $\\sum_{n\\ge0}2^{-n}=2$. Its independent nonnegative holding-time sum is therefore finite almost surely. Infinitely many jumps can accumulate in finite time: this is explosion.

The finite generator theorem does not cover that model. A countable-state construction needs a nonexplosion argument or an explicit description of what happens at explosion. Merely checking nonnegative off-diagonal entries and zero row sums does not supply those missing hypotheses. Later queueing models state their rate assumptions before using stationary equations.

## A finite-horizon jump-count bound

The uniformisation construction also gives an explicit pathwise resource bound. Choose a rate at least as large as every exit rate and drive the chain by a Poisson clock of that rate. Each clock mark applies the stochastic transition matrix used above; some marks leave the state unchanged. Hence the number of actual state changes before a fixed time is at most the number of Poisson marks, on the same constructed path. This proves nonexplosion directly and bounds expected actual jumps by rate times elapsed time.

It gives a tail bound too. For any positive tilt, exponential Markov inequality bounds the probability of at least k jumps by $\\exp\\{\\lambda t(e^u-1)-uk\\}$, where $\\lambda$ is the dominating clock rate and $u>0$. Minimizing this elementary expression gives a useful Poisson upper-tail estimate when k exceeds the clock mean. The bound concerns the chosen dominating rate; it need not be sharp for a chain spending most of its time in low-rate states. An infinite-state generator without a uniform exit-rate bound does not inherit this construction automatically.

## Exercises

### Exercise 7.1
<a id="continuous-time-markov-chains-ex-1"></a>

Is $\\begin{pmatrix}-2&2\\\\3&-3\\end{pmatrix}$ a generator? Find a uniformisation matrix with $\\lambda=4$.

<details><summary>Hint 1</summary>

Check signs and row sums.
</details>
<details><summary>Hint 2</summary>

Use $R=I+Q/4$.
</details>
<details><summary>Solution</summary>

The off-diagonal entries are nonnegative and row sums are zero. The uniformisation matrix is $\\begin{pmatrix}1/2&1/2\\\\3/4&1/4\\end{pmatrix}$, which is stochastic. Its null updates are intentional and do not change the generator.
</details>

### Exercise 7.2
<a id="continuous-time-markov-chains-ex-2"></a>

For that generator, give both mean holding times and the embedded jump matrix.

<details><summary>Hint 1</summary>

Holding means are reciprocals of exit rates.
</details>
<details><summary>Hint 2</summary>

There is only one distinct destination from each state.
</details>
<details><summary>Solution</summary>

The means are $1/2$ and $1/3$ time units. The jump matrix alternates deterministically: $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$. This differs from the uniformisation matrix, which includes artificial self-transitions.
</details>

### Exercise 7.3
<a id="continuous-time-markov-chains-ex-3"></a>

Find the stationary law for rates $\\alpha=2,\\beta=3$ and the probability of state one at time $t$ when starting at zero.

<details><summary>Hint 1</summary>

Solve the scalar forward equation.
</details>
<details><summary>Hint 2</summary>

The equilibrium value is $\\alpha/(\\alpha+\\beta)$.
</details>
<details><summary>Solution</summary>

The stationary row is $(3/5,2/5)$, since the opposite flows both equal $6/5$. Starting at zero, the state-one probability is $(2/5)(1-e^{-5t})$. Its derivative at zero is two, agreeing with the generator entry, while its value remains between zero and one.
</details>

### Exercise 7.4
<a id="continuous-time-markov-chains-ex-4"></a>

Explain why $I+Q$ fails as a one-unit transition matrix for the generator in Exercise 7.1.

<details><summary>Hint 1</summary>

Inspect the diagonal.
</details>
<details><summary>Hint 2</summary>

A local first-order approximation need not remain stochastic at a large step.
</details>
<details><summary>Solution</summary>

The diagonal entries become $-1$ and $-2$, so the matrix contains negative probabilities. Row sums one are insufficient for stochasticity. The exact transition law is $e^Q$, or its nonnegative Poisson mixture, which accounts for multiple jumps during the interval.
</details>

### Exercise 7.5
<a id="continuous-time-markov-chains-ex-5"></a>

Multiply every rate by a constant $c>0$. What happens to the stationary law, jump chain and mean hitting times?

<details><summary>Hint 1</summary>

Compare $e^{tcQ}$ with $e^{(ct)Q}$.
</details>
<details><summary>Hint 2</summary>

Relative destination probabilities divide by the total rate.
</details>
<details><summary>Solution</summary>

The process runs $c$ times as fast. The stationary equation $\\pi cQ=0$ has the same solutions, and $cq_{ij}/(cq_i)=q_{ij}/q_i$ leaves the jump chain unchanged. Hitting-time distributions are divided by $c$ under the common path coupling, so their finite means are divided by $c$ as well.
</details>

### Exercise 7.6
<a id="continuous-time-markov-chains-ex-6"></a>

Prove that rate detailed balance implies stationarity.

<details><summary>Hint 1</summary>

Separate the diagonal term in $(\\pi Q)_j$.
</details>
<details><summary>Hint 2</summary>

Total incoming flow equals total outgoing flow.
</details>
<details><summary>Solution</summary>

For each $j$, $\\sum_{i\\ne j}\\pi_iq_{ij}=\\sum_{i\\ne j}\\pi_jq_{ji}=\\pi_jq_j$. Adding $\\pi_jq_{jj}=-\\pi_jq_j$ gives $(\\pi Q)_j=0$. The generator theorem then implies $\\pi P(t)=\\pi$ for all times. Normalisation and nonnegativity of $\\pi$ are still required.
</details>

### Exercise 7.7
<a id="continuous-time-markov-chains-ex-7"></a>

For the pure-death example, calculate the probability of absorption by time $t$ from state two.

<details><summary>Hint 1</summary>

Use the independent-component interpretation.
</details>
<details><summary>Hint 2</summary>

Both components must have died.
</details>
<details><summary>Solution</summary>

Each lifetime is at most $t$ with probability $1-e^{-t}$. Independence gives $(1-e^{-t})^2$. Equivalently, subtract the probabilities of two and one survivors from one: $1-e^{-2t}-2e^{-t}(1-e^{-t})$. The expressions agree and approach one as time increases.
</details>

### Exercise 7.8
<a id="continuous-time-markov-chains-ex-8"></a>

Why can the stationary jump frequencies differ from stationary fractions of elapsed time?

<details><summary>Hint 1</summary>

Visits have different mean durations.
</details>
<details><summary>Hint 2</summary>

Use the alternating machine example.
</details>
<details><summary>Solution</summary>

The jump chain counts each completed visit once, regardless of its length. Continuous-time occupation weights visits by their duration. With exit rates one and three, jump visits alternate equally often, but the mean durations are one and one-third. The continuous-time weights are therefore three-quarters and one-quarter. Counting jumps without holding times changes the quantity being estimated.
</details>

### Exercise 7.9
<a id="continuous-time-markov-chains-ex-9"></a>

State a condition that prevents explosion in a countable-state chain, using a dominating Poisson clock.

<details><summary>Hint 1</summary>

A common finite bound on all exit rates permits uniformisation.
</details>
<details><summary>Hint 2</summary>

Compare actual jumps with clock ticks on a bounded interval.
</details>
<details><summary>Solution</summary>

If $\\sup_iq_i\\le\\lambda<\\infty$, use $R=I+Q/\\lambda$ on the countable state space and an independent rate-$\\lambda$ clock. There are finitely many ticks on every bounded interval almost surely, hence finitely many actual changes. This is a sufficient condition, not a necessary one; some unbounded-rate chains are also nonexplosive but require another argument.
</details>

### Exercise 7.10
<a id="continuous-time-markov-chains-ex-10"></a>

For first arrival in $A$, derive $(Qe)_i=-1$ outside $A$ and state the boundary condition and finiteness assumption.

<details><summary>Hint 1</summary>

Condition on the first actual exit.
</details>
<details><summary>Hint 2</summary>

The initial holding mean is $1/q_i$.
</details>
<details><summary>Solution</summary>

Assume $E_i\\tau_A<\\infty$ for the states considered and $q_i>0$ outside $A$. First-step conditioning gives $e_i=1/q_i+\\sum_{j\\ne i}(q_{ij}/q_i)e_j$. Multiplying by $q_i$ and moving the left side gives $\\sum_jq_{ij}e_j=-1$. At $i\\in A$, $e_i=0$ because time zero counts as arrival. An inaccessible target or an absorbing non-target state violates the finite-mean assumptions.
</details>

## Sources and continuation

This is an original finite-state construction and exercise set. The book’s references to Norris, *Markov Chains*, and Grimmett and Stirzaker, *Probability and Random Processes*, cover the broader theory. Birth-death and queueing models use the same rate equations; infinite-state stationary formulas also require normalisation and nonexplosion.

## Summary

A generator contains rates, with nonnegative off-diagonal entries and zero row sums. Uniformisation constructs an exact path law and transition semigroup from a stochastic matrix and Poisson clock. Holding times, jump destinations and elapsed-time occupation are distinct. Matrix exponentials solve both Kolmogorov equations, stationarity is $\\pi Q=0$, and real-time hitting equations include the holding-time contribution. Infinite state spaces need additional control of explosion.
`;export{e as default};