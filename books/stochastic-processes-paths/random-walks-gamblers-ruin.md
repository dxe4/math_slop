
# Random Walks and Gambler’s Ruin

A walker takes one step right or one step left at each integer time. Even this small model distinguishes several questions: where the walker is at a fixed time, whether a target is ever reached, which of two targets is reached first, and how long the journey lasts. A positive average displacement does not rule out ruin. Almost-sure eventual arrival does not imply a finite expected waiting time.

Preparation is [Discrete-time Markov Chains](finite-markov-chains.md), especially first-step equations and their boundary conditions. Increments below are independent unless a different assumption is explicitly stated. The proofs use finite sums, geometric series, elementary conditioning and the probability book’s laws of large numbers. We justify absorption before solving equations, because an algebraic solution alone need not represent the desired hitting probability.

## A walk is a path law

**Definition 5.1 (simple random walk).** Fix an initial integer $i$, take independent variables $\xi_1,\xi_2,\ldots$ with $P(\xi_k=1)=p$ and $P(\xi_k=-1)=q=1-p$, and put
$$
S_0=i,\qquad S_n=i+\sum_{k=1}^n\xi_k.
$$
Unless stated otherwise, $0<p<1$. Its natural filtration is $\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$. Position is Markov because the next increment is independent of the recorded past. A walk with persistent directions usually requires position and direction together as its state.

At a fixed time, $S_n=i+2B_n-n$, where $B_n$ is binomial with parameters $n,p$. Therefore $E S_n=i+n(p-q)$ and $\operatorname{Var}(S_n)=4npq$. Position and time have matching parity: $S_n-i\equiv n\pmod2$. These identities describe fixed times. Substituting a random time into a fixed-time distribution without an additional argument generally changes the law.

**Worked example 5.2 (endpoint versus first arrival).** Start at zero with a fair walk. At time four the probability of position two is $\binom43/16=1/4$. First reaching two at time four allows only the histories $-+++$ and $+-++$, giving probability $2/16=1/8$. The history $++-+$ ends at two but already visited it at time two. A statement about the endpoint counts more paths than a first-arrival statement.

## Stop at either of two barriers

Fix an integer $N\ge2$ and $i\in\{0,\ldots,N\}$. Write
$$
\tau=\inf\{n\ge0:S_n\in\{0,N\}\},\qquad h_i=P_i(S_\tau=N).
$$
Time zero is included: $h_0=0$, $h_N=1$, and the duration is zero when the initial state is a barrier. The stopped walk stays at its reached barrier. It is a finite Markov chain with two absorbing classes, so it does not have one stationary law attracting every starting distribution.

**Lemma 5.3 (finite absorption).** The time $\tau$ is almost surely finite and has finite expectation.

**Proof.** From any interior state, $N$ consecutive upward increments force arrival at $N$ within the next $N$ steps. Their probability is $p^N>0$. Independence of future increments gives, conditional on survival to a block boundary,
$$
P_i(\tau>(k+1)N\mid\tau>kN)\le1-p^N.
$$
Consequently $P_i(\tau>kN)\le(1-p^N)^k$. This tends to zero, proving absorption. Grouping the tail-sum formula into blocks gives
$$
E_i\tau=\sum_{n\ge0}P_i(\tau>n)
\le N\sum_{k\ge0}(1-p^N)^k=N/p^N<\infty.
$$
The crude upper bound establishes integrability, even though it is usually a poor numerical estimate. ∎

This argument needs the finite interval and a forcing path of common finite length. It cannot be carried unchanged to an unbounded walk: no common finite block length forces absorption from every surviving position. Neither the word Markov nor the existence of a boundary is sufficient by itself.

## Solve the harmonic equation

Conditioning on the first increment gives
$$
h_i=ph_{i+1}+qh_{i-1},\qquad 1\le i<N.
$$
The boundary values are part of the problem. The recurrence alone has many solutions.

**Theorem 5.4 (ruin probabilities).** Under these assumptions,
$$
h_i=\begin{cases}
i/N,&p=q=1/2,\\
(1-r^i)/(1-r^N),&p\ne q,\quad r=q/p.
\end{cases}
$$

**Proof.** Rearrange the harmonic equation as $p(h_{i+1}-h_i)=q(h_i-h_{i-1})$. With $d_i=h_i-h_{i-1}$, this reads $d_{i+1}=rd_i$. If $r=1$, all differences are equal and $Nd_1=h_N-h_0=1$. This gives $h_i=i/N$. Otherwise summing geometric differences gives $h_i=d_1(1-r^i)/(1-r)$. The boundary condition at $N$ determines $d_1$ and proves the formula.

For uniqueness, subtract two solutions to get a harmonic function $w$ with zero boundary values. A positive interior maximum would force both neighbours to share it, because $p,q$ are strictly positive. Repetition would reach a zero boundary, a contradiction. Applying the same argument to $-w$ rules out a negative minimum. Thus the solution is unique and must equal the hitting probability already known to exist. ∎

**Worked example 5.5 (favourable odds still permit ruin).** Take $p=3/5$, $q=2/5$, $N=4$, $i=1$. Then $r=2/3$ and
$$
h_1=\frac{1-2/3}{1-16/81}=\frac{27}{65}.
$$
Ruin has probability $38/65$, greater than one-half despite the favourable individual step. The starting point is close to the losing boundary. Starting instead at two gives $h_2=9/13$. The initial state and the locations of both barriers matter.

The fair formula can also be understood by linear interpolation between boundary values: every interior value is the average of its neighbours. In the biased case the differences form a geometric progression. This is a useful connection between local transition mechanisms and the shape of a global probability function.

## Expected duration is a different equation

Put $e_i=E_i\tau$. Finiteness has already been proved. First-step conditioning gives
$$
e_0=e_N=0,\qquad e_i=1+pe_{i+1}+qe_{i-1}.
$$
The added one counts the first step. Omitting it would solve a hitting-probability equation rather than a duration problem.

**Theorem 5.6 (mean absorption time).** For a fair walk, $e_i=i(N-i)$. For $p\ne q$,
$$
e_i=\frac{Nh_i-i}{p-q}.
$$

**Proof.** Direct expansion verifies the fair formula and its zero boundary values. The difference of two solutions is harmonic with zero boundaries; the maximum argument proves uniqueness.

For unequal probabilities, write $d=p-q$. The pathwise identity
$$
S_\tau=i+\sum_{k\ge1}\xi_k\mathbf1_{\{\tau\ge k\}}
$$
has an absolutely integrable sum, because the sum of the absolute values is $\tau$. Expectation can therefore pass through the series. The event $\{\tau\ge k\}$ uses only increments before time $k$ and is independent of $\xi_k$. Hence
$$
E_iS_\tau=i+d\sum_{k\ge1}P_i(\tau\ge k)=i+dE_i\tau.
$$
Absorption is at zero or $N$, so $E_iS_\tau=Nh_i$. Rearrangement proves the claim. ∎

**Worked example 5.7 (duration and units).** A fair walk starting at three between zero and ten has winning probability $3/10$ and mean duration $3(10-3)=21$ steps. If each step takes four seconds, mean physical duration is eighty-four seconds. In Example 5.5 the mean is $(4\cdot27/65-1)/(1/5)=43/13$ steps. These expectations average winning and losing runs together; they are not durations conditional on a win.

The biased formula is a $0/0$ expression at fairness. Its derivation divides by the drift, so the fair case must be handled separately. Also note that the sign of its numerator matches the sign of the drift. A negative expected duration would indicate an arithmetic error or a formula used outside its assumptions.

## Removing the upper barrier

Run the walk on all integers and ask whether zero is ever reached from $i\ge1$. For $N>i$, the events $\{\tau_0<\tau_N\}$ increase as $N$ increases. A path reaching zero at finite time has a finite maximum before that arrival, so it belongs to one of these events. Their union is exactly $\{\tau_0<\infty\}$.

Continuity of probability and Theorem 5.4 therefore give
$$
P_i(\tau_0<\infty)=
\begin{cases}1,&p\le q,\\(q/p)^i,&p>q.\end{cases}
$$
For fairness, $1-i/N\to1$. For $p<q$, $r>1$ and $h_i\to0$. For $p>q$, $r<1$ and $h_i\to1-r^i$. This is a limiting argument about increasing events; it is not an instruction to substitute infinity into a finite-state linear system.

For the fair unrestricted walk, zero is reached almost surely from one, but its expected hitting time is infinite. Otherwise the absolutely integrable increment-sum calculation above would give $E_1S_{\tau_0}=1$, since the drift is zero. Yet $S_{\tau_0}=0$ almost surely, a contradiction. The integrability hypothesis in a stopping argument cannot be replaced by almost-sure finiteness.

Starting at zero, a fair walk moves first to one or minus one. Symmetry gives an almost-sure return from either. Applying the Markov property after each return yields infinitely many returns almost surely. The first-return time still has infinite mean. Recurrence and positive recurrence therefore describe different phenomena.

## Mean time on the half-line

The same barrier limit can determine an expectation, provided the order of limits is justified. Suppose $p<q$ and start at $i\ge1$. On a single underlying increment sequence, let $\tau^{(N)}=\tau_0\wedge\tau_N$ for $N>i$. Nearest-neighbour motion implies $\tau_N\le\tau_{N+1}$ whenever the latter occurs, so $\tau^{(N)}$ increases with $N$. Since $\tau_0$ is almost surely finite, each realised path reaching zero eventually has its maximum below $N$, and then $\tau^{(N)}=\tau_0$. Therefore $\tau^{(N)}\uparrow\tau_0$ almost surely.

Monotone convergence applies to these nonnegative times even before their limit is known to have finite mean. Write $h_i^{(N)}$ for the finite-barrier winning probability. The preceding duration formula yields
$$
E_i\tau_0=\lim_{N\to\infty}
\frac{Nh_i^{(N)}-i}{p-q}.
$$
Here $r=q/p>1$ and $h_i^{(N)}=(r^i-1)/(r^N-1)$. An exponential denominator dominates its linear numerator, so $Nh_i^{(N)}\to0$. It follows that
$$
E_i\tau_0=\frac{i}{q-p},\qquad p<q.
$$
This is a theorem about the mean arrival time, not a claim that each path moves down at a constant speed. Some paths first travel far upward. Their contributions are already included in the expectation and in the limiting finite-interval argument.

For fairness, the same monotone sequence gives $E_i\tau^{(N)}=i(N-i)\to\infty$. This is a second proof of the infinite mean. For upward drift, the arrival time is infinite with positive probability, and its extended expectation is therefore infinite. These three cases show precisely how a small drift can change a waiting-time question even when eventual arrival remains certain.

**Worked example 5.8 (a finite mean with long possible excursions).** Take $p=2/5,q=3/5$, initial state three, and no upper barrier. Eventual arrival at zero has probability one, and its mean time is $3/(1/5)=15$ steps. There is no finite deterministic deadline: for every integer $m$, the first $m$ steps can all point upward with positive probability $(2/5)^m$. A finite expectation does not imply bounded support. If a model declares a physical step duration of two minutes, expected arrival time becomes thirty minutes, while its distribution still has arbitrarily long possible durations.

The calculation also explains why a finite-barrier approximation can underestimate waiting time. Stopping a path when it reaches the artificial upper barrier truncates an excursion that the half-line walk would continue. Increasing the barrier permits longer excursions and raises the mean toward its half-line limit. Monotonicity comes from coupling all approximations through the same increments, rather than comparing unrelated simulated samples.

## What changes when the model changes

With $p=0$ the path moves down deterministically, reaching zero in $i$ steps. With $p=1$ it moves up deterministically and never reaches zero from a positive start. The formulas involving $q/p$ excluded these endpoints because they divide by $p$; their deterministic answers come directly from the path law. An explicit endpoint calculation is preferable to silently extending a derivation through division by zero.

If winning probabilities depend on position, first-step conditioning remains valid but gives $h_i=p_i h_{i+1}+(1-p_i)h_{i-1}$. The increments are no longer identically distributed, so the constant-drift stopped-sum identity does not have the same form. If choices depend on unrecorded past outcomes, position alone may cease to be Markov. The state must then retain enough information to describe the next transition. These are changes in mathematical assumptions, not merely changes in numerical parameters.

## Conditioning a walk changes its transition law

For a fair walk on the integers from zero to $N$, stopped at either endpoint, let $h(i)=i/N$ be the probability of eventual absorption at $N$. Conditional on that successful absorption, an interior next-step probability is the original transition probability multiplied by $h(j)/h(i)$. This follows by Bayes’ rule and the Markov property: after moving to $j$, success has probability $h(j)$, while its probability from the current state is $h(i)$.

Thus the conditioned upward probability is $(i+1)/(2i)$ and the downward probability is $(i-1)/(2i)$. They sum to one, and from state one the conditioned walk cannot step to zero. The apparent upward drift is a selection effect induced by conditioning on future success, not a new claim that the original fair increments were biased.

The construction is a finite-state Doob transform. It also explains why drawing only paths that reach the upper endpoint cannot be used to estimate the unconditioned transition probabilities: the retained path law is explicitly different.

## Exercises

### Exercise 5.1
<a id="random-walks-gamblers-ruin-ex-1"></a>

For a fair walk started at two, calculate $P(S_5=3)$ and explain why $P(S_5=2)=0$.

<details><summary>Hint 1</summary>

Count upward increments.
</details>
<details><summary>Hint 2</summary>

Solve $2+2B_5-5=3$.
</details>
<details><summary>Solution</summary>

The required upward count is three, so the first probability is $\binom53/2^5=5/16$. After five steps the displacement is odd, whereas position two would give displacement zero. Thus its probability is zero. No first-arrival restriction has been imposed on either event.
</details>

### Exercise 5.2
<a id="random-walks-gamblers-ruin-ex-2"></a>

A fair gambler starts at four and stops at zero or twelve. Find the winning probability and expected duration.

<details><summary>Hint 1</summary>

Use the same barriers in two different equations.
</details>
<details><summary>Hint 2</summary>

Use $h_i=i/N$ and $e_i=i(N-i)$.
</details>
<details><summary>Solution</summary>

With $i=4,N=12$, the winning probability is $1/3$ and the mean duration is $4\cdot8=32$ plays. The mean is unconditional, averaging both terminal outcomes. A conditional mean among winning paths would require another calculation.
</details>

### Exercise 5.3
<a id="random-walks-gamblers-ruin-ex-3"></a>

Take $p=2/3$, barriers zero and three, and initial state one. Compute the winning probability and mean duration exactly.

<details><summary>Hint 1</summary>

Compute the ratio $q/p$ first.
</details>
<details><summary>Hint 2</summary>

Use $E S_\tau=i+(p-q)E\tau$ after finding the hitting probability.
</details>
<details><summary>Solution</summary>

Here $r=1/2$, giving $h_1=(1-1/2)/(1-1/8)=4/7$. The drift is $1/3$, so $e_1=(3\cdot4/7-1)/(1/3)=15/7$. The expected terminal position is $12/7$, exceeding the initial position by the positive drift multiplied by the mean duration.
</details>

### Exercise 5.4
<a id="random-walks-gamblers-ruin-ex-4"></a>

Prove uniqueness of the finite duration equations without solving them.

<details><summary>Hint 1</summary>

Subtract two solutions.
</details>
<details><summary>Hint 2</summary>

The constant one disappears.
</details>
<details><summary>Solution</summary>

The difference $w$ satisfies zero boundaries and $w_i=pw_{i+1}+qw_{i-1}$. A positive interior maximum forces both neighbours to share it, since both coefficients are positive. Propagating reaches a zero boundary, a contradiction. Applying the argument to $-w$ gives $w=0$. This proves at most one finite solution; Lemma 5.3 separately establishes existence of the actual finite expected time.
</details>

### Exercise 5.5
<a id="random-walks-gamblers-ruin-ex-5"></a>

At each clock tick the walker stays put with probability $s\in[0,1)$ and otherwise takes a fair step. Find the winning probability and mean clock time.

<details><summary>Hint 1</summary>

Include holding in the first-step equations.
</details>
<details><summary>Hint 2</summary>

Move $s e_i$ to the left side.
</details>
<details><summary>Solution</summary>

The probability equation is $h_i=s h_i+(1-s)(h_{i-1}+h_{i+1})/2$. Cancelling $1-s$ gives $h_i=i/N$. The duration equation becomes $e_i=1/(1-s)+(e_{i-1}+e_{i+1})/2$, yielding $e_i=i(N-i)/(1-s)$. Holding changes elapsed time but leaves the sequence of actual moves fair. At $s=1$, interior absorption never occurs and cancellation would be invalid.
</details>

### Exercise 5.6
<a id="random-walks-gamblers-ruin-ex-6"></a>

For $p=3/5$ on all integers, find the chance of ever reaching zero from three. Compare with the ruin probability when the upper barrier is five.

<details><summary>Hint 1</summary>

An upper stopping barrier removes some paths that could return later.
</details>
<details><summary>Hint 2</summary>

Compare $r^3$ with $1-h_3$ at $N=5$.
</details>
<details><summary>Solution</summary>

With $r=2/3$, the unrestricted probability is $8/27$. The finite-barrier probability is $(r^3-r^5)/(1-r^5)=40/211$, which is smaller. Paths first visiting five may return to zero later in the unrestricted experiment, but the finite experiment has already stopped them as wins. The two calculations concern different events.
</details>

### Exercise 5.7
<a id="random-walks-gamblers-ruin-ex-7"></a>

Explain why almost-sure finite arrival at zero from one for a fair unrestricted walk is compatible with infinite mean duration.

<details><summary>Hint 1</summary>

Assume finite mean and examine the stopped increment sum.
</details>
<details><summary>Hint 2</summary>

The terminal position is zero, while each increment has mean zero.
</details>
<details><summary>Solution</summary>

Finite mean would give $\sum_{k\ge1}E|\xi_k\mathbf1_{\{\tau_0\ge k\}}|=E\tau_0<\infty$. Termwise expectation would then be legitimate. Each expected increment is zero because survival to step $k$ uses only the preceding increments. This would imply $E_1S_{\tau_0}=1$, contradicting the terminal position zero. Thus the mean is infinite. Almost-sure finiteness constrains the tail limit, whereas finite mean requires a summable tail.
</details>

### Exercise 5.8
<a id="random-walks-gamblers-ruin-ex-8"></a>

Give an explicit finite bound for the mean absorption time using blocks of $N$ steps.

<details><summary>Hint 1</summary>

Use a forcing sequence of upward increments.
</details>
<details><summary>Hint 2</summary>

Bound survival after $k$ blocks by a geometric sequence.
</details>
<details><summary>Solution</summary>

Conditional on survival, the next $N$ increments are all upward with probability $p^N$. Such a sequence must hit the upper barrier. Thus $P(\tau>kN)\le(1-p^N)^k$. Grouping the tail sum in blocks gives $E_i\tau\le N\sum_{k\ge0}(1-p^N)^k=N/p^N$. This establishes integrability without claiming the bound is sharp. The actual expected duration may be much smaller.
</details>

### Exercise 5.9
<a id="random-walks-gamblers-ruin-ex-9"></a>

Which arguments need revision if increments are $+2$ or $-1$ and the game stops on crossing the upper threshold?

<details><summary>Hint 1</summary>

The walker can jump over the threshold.
</details>
<details><summary>Hint 2</summary>

Ask whether the terminal position on a win is always $N$.
</details>
<details><summary>Solution</summary>

A jump from $N-1$ can end at $N+1$. The probability equation uses $h_{i+2}$ and needs values above the threshold; the nearest-neighbour recurrence no longer applies. Winning can end at $N$ or $N+1$, so $E S_\tau=Nh_i$ is false. A stopped increment identity may still hold under integrability, but its terminal expectation must account for overshoot. Changing just the drift in the old formula would not repair these differences.
</details>

### Exercise 5.10
<a id="random-walks-gamblers-ruin-ex-10"></a>

Why does $S_n/n\to0$ not by itself prove infinitely many visits to zero?

<details><summary>Hint 1</summary>

Scaled displacement does not specify exact visits.
</details>
<details><summary>Hint 2</summary>

Consider a positive deterministic sequence with sublinear growth.
</details>
<details><summary>Solution</summary>

The sequence $x_n=\lceil\sqrt n\rceil$ has $x_n/n\to0$ but never equals zero for positive $n$. It is not a simple-walk counterexample; it shows why that limiting statement alone cannot imply recurrence. Fair-walk recurrence instead follows from finite-barrier hitting probabilities, an increasing union of events, symmetry and the Markov property after successive returns.
</details>

## Sources and continuation

These proofs and exercises are original Euler treatments of the classical ruin model. For the broader theory consult the book’s references to Grimmett and Stirzaker, *Probability and Random Processes*, and Norris, *Markov Chains*. [Martingales and Stopping](martingales-and-stopping.md) generalises the stopped-increment reasoning. Queueing and branching models use related first-step arguments with different transition mechanisms and state spaces.

## Summary

Endpoints, first arrivals and stopped terminal laws are different objects. Finite ruin probabilities solve a harmonic equation with boundary values; durations solve an inhomogeneous equation. A forcing-path bound justifies integrability before expectations are exchanged. Removing a barrier requires a limiting event argument. A fair unrestricted walk reaches the origin almost surely but can have infinite expected arrival time.
