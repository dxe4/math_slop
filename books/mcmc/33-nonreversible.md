# 33. Nonreversible and continuous-time samplers

A sampler can preserve a probability distribution while carrying probability steadily around a loop. It can also move continuously, changing direction only at random events. These possibilities expand the design space beyond the reversible proposals of Metropolis–Hastings. They also change what we must record: a sequence of turning points is usually insufficient for estimating a target expectation.

**Learning goals.** Construct a simple lifted chain; identify the cancellation that preserves a zig-zag target; simulate a Gaussian event clock; distinguish time averages from event averages; separate invariance, exploration, and computational error.

**Prerequisites.** [Finite chains](07-finite-chains.md), [general-state convergence](08-convergence.md), [Metropolis–Hastings](09-metropolis-hastings.md), and [Monte Carlo error](13-mc-error.md). Gradients and auxiliary velocities from [Langevin methods](19-langevin.md) and [HMC](20-hmc.md) provide useful context.

## 33.1 Stationarity can carry a current

Consider three states arranged clockwise, with transition probability $0.8$ to the next state and $0.2$ to remain in place. Every column of the transition matrix sums to one, so the uniform distribution is invariant. Indeed, each state receives mass $0.8/3$ from its predecessor and $0.2/3$ from itself, totaling $1/3$.

Nevertheless, probability flows clockwise without a corresponding counterclockwise flow. Define the stationary current along an ordered pair by

$$
J(x,y)=\pi(x)P(x,y)-\pi(y)P(y,x).
$$

Stationarity requires $\sum_y J(x,y)=0$: total outgoing current balances incoming current at each state. Detailed balance requires the stronger statement $J(x,y)=0$ for every pair. Here each clockwise edge carries current $0.8/3$. The currents circulate without accumulating anywhere.

The self-loops make the chain aperiodic; clockwise movement makes it irreducible. Those properties, together with the finite state space, establish convergence from every initial distribution. Invariance alone would not have established it. Removing the self-loops gives a deterministic three-cycle that is still invariant under a uniform start but whose distribution never converges from a fixed state.

Persistence can reduce the repeated retracing of recent steps, but it does not imply a universal improvement in estimation. The useful comparison concerns a specified observable, its variance, and the cost of obtaining it. A historical development of persistent lifted sampling is [Diaconis, Holmes, and Neal, *Analysis of a Non-Reversible Markov Chain Sampler*](https://glizen.com/radfordneal/nonrev.abstract.html).

## 33.2 Lifting a chain with a direction

Let the position space be $\{1,\ldots,m\}$ with strictly positive target probabilities. Add a direction $v\in\{-1,+1\}$ and define

$$
\widetilde\pi(x,v)=\frac{\pi(x)}2.
$$

From $(x,v)$ propose $x+v$. Accept with probability

$$
\alpha(x,v)=\min\left\{1,\frac{\pi(x+v)}{\pi(x)}\right\},
$$

retaining $v$. On rejection stay at $x$ and reverse direction. Set $\pi(0)=\pi(m+1)=0$, so endpoints automatically reflect through a rejection.

This resembles Metropolis, but the directional proposal is not a symmetric proposal on positions. Its justification is an incoming-mass calculation on the enlarged state space. Mass arriving at $(x,v)$ comes from movement out of $(x-v,v)$ and rejection out of $(x,-v)$. The respective amounts are

$$
\frac12\min\{\pi(x-v),\pi(x)\},\qquad
\frac12\left[\pi(x)-\min\{\pi(x-v),\pi(x)\}\right].
$$

They sum to $\pi(x)/2$, including at an endpoint with the zero extension. Thus the lifted target is invariant, and its position marginal is the desired target.

Write $R(x,v)=(x,-v)$. For this particular kernel $K$, one can also verify the skew balance relation

$$
\widetilde\pi(s)K(s,t)
=\widetilde\pi(Rt)K(Rt,Rs).
$$

The reverse comparison includes velocity reversal. This relation is not ordinary detailed balance on the enlarged state space. Specifying the involution and the transition rule is essential: an unspecified appeal to “skew balance” proves nothing.

Periodicity still needs attention. Every transition changes the parity of $x+\mathbf 1\{v=+1\}$, so this kernel is periodic. Replacing it by $\varepsilon I+(1-\varepsilon)K$, with $0<\varepsilon<1$, preserves invariance and supplies self-loops. Such laziness addresses periodicity but cannot repair disconnected support.

## 33.3 A continuous trajectory has its own clock

A piecewise deterministic Markov process, or PDMP, combines deterministic motion with random changes. For the samplers here, the state is $(X,V)$. Between events,

$$
X_{t+s}=X_t+sV_t,
$$

and velocity stays constant. At an event, velocity changes according to a rule depending on the current position and velocity.

An intensity $\lambda(x,v)$ has units of events per unit time. Conditional on the present state, an event occurs in a short interval of length $dt$ with probability $\lambda(x,v)dt+o(dt)$. Unlike an acceptance probability, an intensity can exceed one. Multiplying it by a sufficiently small duration produces a probability approximation.

The generator describes the instantaneous expected change of a test function. For a single deterministic velocity update $F$,

$$
Lf(x,v)=v\cdot\nabla_x f(x,v)
+\lambda(x,v)\{f(x,Fv)-f(x,v)\}.
$$

The first term transports the particle. The second accounts for jumps in velocity. Establishing $\int Lf\,d\mu=0$ identifies a candidate stationary law, but turning that identity into invariance requires a well-defined nonexplosive process and appropriate generator-domain conditions. It is not an ergodicity theorem.

For finite zig-zag velocities, continuously differentiable potentials give locally bounded canonical rates. On any finite time interval, bounded speed confines positions to a compact set, on which these rates are bounded. Consequently infinitely many events cannot accumulate in finite time. More general rates and flows require their own existence checks.

## 33.4 Deriving the zig-zag cancellation

Suppose $U:\mathbb R^d\to\mathbb R$ is continuously differentiable and

$$
\pi(x)=Z^{-1}e^{-U(x)},\qquad 0<Z<\infty.
$$

Let velocities be uniform on $\{-1,+1\}^d$. An event of type $i$ flips coordinate $i$ through the map $F_i$. The generator is

$$
Lf=v\cdot\nabla_x f+
\sum_{i=1}^d\lambda_i(x,v)\{f(x,F_iv)-f(x,v)\}.
$$

The needed identity is

$$
\lambda_i(x,v)-\lambda_i(x,F_iv)=v_i\partial_i U(x).
$$

The canonical choice is $\lambda_i(x,v)=[v_i\partial_i U(x)]_+$, where $[a]_+=\max(a,0)$. Additional nonnegative rates $\gamma_i$ preserve the identity if $\gamma_i(x,v)=\gamma_i(x,F_iv)$. Take these additional rates continuous so that the local boundedness and nonexplosion argument still applies. The construction and its event simulation are developed by [Bierkens, Fearnhead, and Roberts, Section 2](https://arxiv.org/html/1607.03188).

Here is the cancellation explicitly. Take $f$ continuously differentiable in position with compact support, separately for each velocity. Integration by parts has no boundary contribution and gives

$$
\int v\cdot\nabla_x f(x,v)\pi(x)\,dx
=\int f(x,v)v\cdot\nabla U(x)\pi(x)\,dx.
$$

For the jump term, sum over uniform velocities and replace $v$ by $F_iv$ in the incoming part. Since a flip is a bijection, its integrated contribution becomes

$$
2^{-d}\sum_v\int f(x,v)
\{\lambda_i(x,F_iv)-\lambda_i(x,v)\}\pi(x)\,dx.
$$

The rate identity makes this the negative of coordinate $i$'s transport contribution. Summing over coordinates yields zero. With the process and domain assumptions mentioned above, the invariant law is position density $\pi$ times the uniform velocity law.

The signs have a physical interpretation. Moving toward increasing $U$, hence decreasing density, raises the chance of reversing the offending velocity coordinate. Moving downhill contributes no canonical flip rate. Random turning points maintain the required occupation density without rejecting a proposed position.

Still, successful cancellation says only that the proposed distribution can persist. Whether trajectories from practical initial states explore it adequately requires irreducibility and recurrence analysis. Extra symmetric flips change exploration while leaving the cancellation untouched.

## 33.5 Bounces, geometry, and refreshment

The bouncy particle sampler uses a velocity distribution $\rho$ invariant under orthogonal transformations, such as a centered isotropic Gaussian or the uniform law on a sphere. Its bounce intensity is

$$
\lambda(x,v)=[v\cdot\nabla U(x)]_+.
$$

At a bounce with $g=\nabla U(x)\ne0$, reflect velocity:

$$
R_xv=v-2\frac{v\cdot g}{\|g\|^2}g.
$$

Decomposing velocity into normal and tangential components shows what happens: the normal component changes sign, while the tangential component remains. Hence $\|R_xv\|=\|v\|$, $(R_xv)\cdot g=-v\cdot g$, and the absolute determinant of the reflection is one. At $g=0$ the bounce rate is zero, so the formula need not be evaluated.

To see the cancellation, change variables $v\mapsto R_xv$ in the integrated incoming bounce term. Reflection preserves $\rho$; this follows from orthogonal invariance even when $\rho$ is a sphere measure without a Lebesgue density. The resulting coefficient of $f(x,v)$ is

$$
\lambda(x,R_xv)-\lambda(x,v)
=[-v\cdot g]_+-[v\cdot g]_+=-v\cdot g.
$$

It cancels the transport coefficient $v\cdot\nabla U(x)$ under the product law $\pi(x)\,dx\,\rho(dv)$, with suitable integrable test functions and the earlier process conditions.

One may independently refresh velocity from $\rho$ at a constant positive rate. Refreshment preserves the product target because it replaces the auxiliary variable by its target distribution. It also breaks deterministic constraints that bounces alone can retain. The construction appears in [Bouchard-Côté, Vollmer, and Doucet, *The Bouncy Particle Sampler*](https://arxiv.org/abs/1510.02451).

Positive refreshment is useful, but a general convergence theorem still needs assumptions on the target and dynamics. For instance, [Deligiannidis, Bouchard-Côté, and Doucet, Theorem 3.1](https://arxiv.org/pdf/1705.04579) treat uniform sphere velocities and impose smoothness, tail, curvature, and refreshment-rate conditions for exponential ergodicity. The theorem is more specific than positivity of the refreshment rate alone.

### 33.5.1 A region that bounces can never reach

Consider a standard Gaussian position target in two dimensions and unit-speed velocities, with no refreshment. Define the scalar angular momentum

$$
\ell(x,v)=x_1v_2-x_2v_1.
$$

During a flight, $\ell(x+sv,v)=\ell(x,v)$ because the added cross terms cancel. At a bounce the Gaussian gradient is $x$, so $R_xv=v-cx$ for a scalar $c$, and again $\ell(x,R_xv)=\ell(x,v)$. Thus both flights and bounces preserve $\ell$ exactly.

Start from $x=(1,0)$ and $v=(0,1)$. Then $\ell=1$ forever, and $|\ell|\le\|x\|\|v\|=\|x\|$ forces $\|X_t\|\ge1$. The trajectory never enters the unit disk, although the target assigns it probability

$$
\Pr_\pi(\|X\|<1)=\int_0^1 r e^{-r^2/2}\,dr
=1-e^{-1/2}\approx0.39347.
$$

Consequently the time average of that disk's indicator is zero for every horizon. Increasing runtime cannot fix this obstruction. An independent velocity refresh can change $\ell$ and remove the conserved quantity. This calculation makes the Gaussian failure discussed in [Bouchard-Côté, Vollmer, and Doucet, Section 4.1](https://arxiv.org/pdf/1510.02451) explicit for a bounded observable.

## 33.6 Exact simulation means integrating the hazard

Along a deterministic path starting from $(x,v)$, write $\lambda(s)=\lambda(x+sv,v)$. Conditional survival until time $t$ is

$$
\Pr(\tau>t)=\exp\{-H(t)\},\qquad
H(t)=\int_0^t\lambda(s)\,ds.
$$

Draw $E\sim\operatorname{Exp}(1)$ and solve $H(\tau)=E$, using the first crossing if necessary. If cumulative hazard remains below $E$ forever, that clock never rings. Holding the initial intensity fixed and drawing an exponential with that rate is wrong whenever the intensity changes along the flow.

For multiple event types, simulate conditionally independent competing clocks along the same deterministic path and take the earliest. A constant-rate refreshment clock competes in exactly this way. Following the chosen event, velocities change and future intensities must be updated.

When inversion is unavailable, thinning uses an upper intensity $\bar\lambda(s)$ whose integrated hazard can be simulated. At a candidate time accept the event with probability $\lambda(s)/\bar\lambda(s)$. The bound must dominate over the entire interval for which it is used.

```text
while physical time remains:
    choose a future expiry no later than the final observation horizon
    construct a dominating rate valid up to that expiry
    simulate a candidate, or set its time to infinity if none occurs
    if the candidate lies at or after expiry:
        record and advance along the flow to expiry
    else:
        record and advance along the flow to the candidate
        evaluate the true rate and verify domination
        accept a true event with probability true_rate / bound_rate
        if accepted, update velocity
    rebuild the bound from the current state if time remains
```

Rejected candidates consume physical time and advance position. They are rejected events, not rejected moves. Discarding the elapsed interval changes the trajectory law. Likewise, clipping an excessive acceptance ratio to one does not repair an invalid bound.

A bound identically zero on its validity interval means no candidate can occur there: advance directly to expiry without dividing by zero. Checking domination at candidate points is a useful failure detector, but cannot establish domination between them. The bound needs a mathematical justification before simulation. This use of finite validity intervals follows [Bouchard-Côté, Vollmer, and Doucet, Section 2.3.2](https://arxiv.org/pdf/1510.02451).

“Exact” here means that the mathematical algorithm simulates the specified continuous-time process without a time-discretization approximation. Floating-point arithmetic remains. Numerical quadrature of the hazard or approximate root solving introduces additional errors that require explicit control.

### 33.6.1 Constructing a bound over an entire interval

In one dimension with $v\in\{-1,+1\}$, suppose $U$ is twice continuously differentiable and $|U''(y)|\le L$ on the whole segment $y=x+sv$, $0\le s\le\delta$. Since

$$
\frac{d}{ds}\{vU'(x+sv)\}=U''(x+sv),
$$

we have $vU'(x+sv)\le vU'(x)+Ls$. The positive-part function preserves this inequality and satisfies $[a+b]_+\le[a]_++b$ for $b\ge0$. Therefore a valid constant bound is

$$
\lambda(x+sv,v)\le[vU'(x)]_++L\delta=:B,
\qquad 0\le s\le\delta.
$$

This is a simple specialization of derivative-based computational bounds in [Bierkens, Fearnhead, and Roberts, Section 3](https://arxiv.org/html/1607.03188). The number $L$ must bound the whole segment; substituting $|U''(x)|$ without controlling its subsequent growth is insufficient.

For $U(x)=x^2/2$, the exact rate along a flight is $[vx+s]_+$, which is nondecreasing. Its endpoint supplies the tighter bound $B=[vx+\delta]_+$. When $B>0$, propose $S=E/B$ with $E\sim\operatorname{Exp}(1)$. If $S<\delta$, advance by $S$ and accept a flip with probability $[vx+S]_+/B$; otherwise advance by $\delta$ without a flip. Here $x$ and $v$ in the ratio denote the segment's initial state. Rebuild after either outcome, including a rejection.

For example, from $(x,v)=(0,1)$ with $\delta=1$, $B=1$. A threshold $E=1/2$ produces a candidate at time $1/2$ with flip probability $1/2$. If rejected, the particle is at $x=1/2$ and still moves right. From $(1,-1)$ with $\delta=1/2$, $B=0$, so it coasts to $x=1/2$ without an event. These are exact steps of the continuous-time process in ideal arithmetic. The interval length controls computational work, rather than approximating the trajectory by a time-stepping scheme.

## 33.7 Worked example: a Gaussian zig-zag clock

For a standard Gaussian target in one dimension, $U(x)=x^2/2$, and $v\in\{-1,+1\}$. Define $a=vx$. Along the flow,

$$
\lambda(s)=[v(x+sv)]_+=[a+s]_+.
$$

If $a\ge0$, then $H(t)=at+t^2/2$, so

$$
\tau=\sqrt{a^2+2E}-a
=\frac{2E}{\sqrt{a^2+2E}+a}.
$$

The rationalized expression avoids subtracting nearly equal large numbers. To also avoid overflow in $a^2$, the script evaluates the square root with `hypot(a, sqrt(2)*sqrt(E))` and divides $E$ by half the root plus $a/2$. If $a<0$, the particle first moves downhill for $-a$ units of time with zero hazard. Subsequently the accumulated hazard is $(t+a)^2/2$, giving

$$
\tau=-a+\sqrt{2E}.
$$

Take $x=1$, $v=1$, and $E=1$. Then $\tau=\sqrt3-1\approx0.732$, the event position is $\sqrt3$, and velocity flips to $-1$. Starting instead with $x=1$, $v=-1$, and the same exponential threshold gives $\tau=1+\sqrt2\approx2.414$. The particle crosses zero without any chance of a bounce, reaches $-\sqrt2$, and reverses.

After each event it travels through the center before the next outward excursion. This geometric structure explains why turning points disproportionately occupy the tails. It also supplies a regenerative description: successive outward excursion magnitudes are $\sqrt{2E}$ for independent exponential thresholds. Finite mean cycle durations make time occupation limits accessible in this particular example, beyond the general invariance calculation.

More explicitly, start a cycle at $(0,+1)$ and end at the next return to that same state. Let $A_+$ and $A_-$ be the positive and negative excursion magnitudes, independently distributed as $A=\sqrt{2E}$. The cycle duration is $D=2(A_++A_-)$; its integrated squared position is $Q=2(A_+^3+A_-^3)/3$. These cycles are independent, with finite mean duration and reward. Their long-run reward per time is

$$
\frac{\mathbb E[Q]}{\mathbb E[D]}
=\frac{\mathbb E[A^3]}{3\mathbb E[A]}=1,
$$

because $A$ has density $a e^{-a^2/2}$ for $a>0$, $\mathbb E[A]=\sqrt{\pi/2}$, and $\mathbb E[A^3]=3\sqrt{\pi/2}$. Two flips occur per cycle, so their long-run rate is $2/\mathbb E[D]=1/\sqrt{2\pi}\approx0.39894$. This renewal-reward calculation gives a direct Gaussian justification of the occupation estimator used by [Bierkens, Fearnhead, and Roberts, Section 6.1](https://arxiv.org/html/1607.03188). A plausible simulation output alone would not establish that limit.

## 33.8 Worked example: a two-dimensional bounce

Let $U(x)=\|x\|^2/2$, start at $x=(1,0)$, and take $v=(1,1)/\sqrt2$. The gradient is $(1,0)$, so the initial bounce intensity is $1/\sqrt2$. If a bounce occurred at this location, reflection would give $(-1,1)/\sqrt2$: its horizontal component reverses and its speed stays one.

An actual event happens later. Along the path,

$$
v\cdot\nabla U(x+sv)=x\cdot v+s\|v\|^2
=\frac1{\sqrt2}+s.
$$

With $E=1$, solve $t/\sqrt2+t^2/2=1$:

$$
\tau=\sqrt{5/2}-1/\sqrt2\approx0.874.
$$

The event position is approximately $(1.618,0.618)$, so the reflection normal is this new position, not the initial vector $(1,0)$. Substituting the event position into the reflection formula gives velocity approximately $(-0.99845,0.05564)$. Its norm remains one, and its dot product with the event gradient reverses sign.

This calculation exposes two implementation mistakes at once. Freezing the initial intensity would give a different waiting time, and reflecting with the initial gradient would use the wrong surface normal. Exact event simulation updates both the clock and geometry along the trajectory.

## 33.9 Occupation estimates and the event-sampling trap

For an integrable observable $h$, the natural continuous-time estimate is

$$
\widehat\mu_T=\frac1T\int_0^T h(X_t)\,dt.
$$

Under an appropriate ergodic theorem it converges to $\mathbb E_\pi[h]$. A straight segment of duration $\Delta$, starting at $x$ with velocity $v$, contributes

$$
\int_0^\Delta(x+vs)\,ds=x\Delta+\frac{v\Delta^2}2,
$$

and

$$
\int_0^\Delta(x+vs)^2\,ds
=x^2\Delta+xv\Delta^2+\frac{v^2\Delta^3}3.
$$

Multiplying the segment's starting value $h(x)$ by its duration is generally only a quadrature approximation. Position moves throughout the segment. At a fixed horizon, include the truncated final segment: dropping it makes the observation period depend incorrectly on the last completed event.

The Gaussian example quantifies the event-sampling error. At stationarity, events near $(x,v)$ occur at a rate proportional to $\pi(x)\lambda(x,v)/2$. Summing over velocities gives position density at events proportional to

$$
\phi(x)\frac{[x]_++[-x]_+}{2}
=\frac12|x|\phi(x).
$$

This intensity-weighting statement assumes a stationary process with finite positive mean event intensity; an event-index limit also needs the corresponding ergodicity. For the Gaussian regenerative example these conditions hold. Position is unchanged by a bounce, so before-event and after-event position laws coincide.

The event second moment therefore is

$$
\frac{\int x^2|x|\phi(x)\,dx}{\int |x|\phi(x)\,dx}=2,
$$

whereas the time second moment is one. Longer simulation will make the event average increasingly persuasive about the wrong target. Observations on a regular time grid avoid this intensity weighting, subject to suitable convergence assumptions for the sampled process; they remain correlated.

## 33.10 A reproducible experiment and a scoped lab

Run the companion [Python example](examples/ch33.py):

```text
python examples/ch33.py
```

It uses only the standard library. The inversion experiment uses three fixed seeds and horizons of 2,000 and 20,000. It starts at zero with positive velocity, stores linear segments, solves every event clock analytically, and integrates the first two moments exactly along each segment up to floating-point error. A defensive event cap bounds its work.

The script then simulates the same Gaussian process by the interval thinning construction in Section 33.6.1, with interval caps $0.5$, $1$, and $2$. It prints accepted events, candidates, bound constructions, the occupation second moment, and events per unit time. The latter should approach $1/\sqrt{2\pi}$. Rejections and bound expiries are retained as segment boundaries, so all elapsed time contributes to the estimator. Changing the interval cap changes work and the seeded random path; it does not change the ideal target process. The program also checks clock inversion, polynomial segment integration, and the BPS geometry used above.

Compare the time mean with zero, the time second moment with one, and the event second moment with two. Increasing the horizon should reduce typical discrepancies, though individual errors need not decrease monotonically. The fixed initial state also means finite-horizon estimates need not be unbiased.

For the second moment, the script splits segments at twenty equal physical-time batch boundaries and reports the standard deviation of batch averages divided by $\sqrt{20}$. This is an illustrative batch standard error. It relies on batches being long enough to make their remaining dependence negligible and on suitable limiting theory; twenty batches do not certify either assumption. Compare independent seeds and several batch widths before treating such uncertainty estimates as reliable.

Use the following finite-chain lab to revisit the distinction between a stationary distribution and movement toward it. Change **Initial state** among 0, 1, and 2, and increase **Samples / iterations**. Its three curves show exact state probabilities under a fixed transition matrix; observe that different initial distributions approach the same probabilities. The matrix is displayed but cannot be edited. These curves are distribution evolution, rather than simulated trajectories. The lab does not simulate a PDMP or implement the occupation estimator above. The companion script is the continuous-time experiment.

<div class="mcmc-lab" data-lab="markov"></div>

## 33.11 Error, cost, and connections

Continuous-time methods separate several questions. The model determines $U$. The generator argument identifies the invariant law. Valid inversion or thinning simulates the intended process. Ergodic and variance theory concern long-run estimation. Finite runtime and initialization still cause error even when there is no numerical time step.

For comparisons, report physical horizon, actual events, thinning candidates, gradient evaluations, and elapsed computation. Event counts alone conceal expensive rejected candidates or bound construction. An autocorrelation calculation on bounce positions describes the event chain; it cannot simply be labeled target ESS. Use observables integrated over equal time blocks or suitably sampled regular-time trajectories and account for their dependence. [Chapter 47](47-benchmark-lab.md) develops comparisons by estimand and cost.

Stationary currents also arise in diffusions. Starting with overdamped Langevin dynamics, add a drift $\gamma$ satisfying $\nabla\cdot(\pi\gamma)=0$. In the stationary Fokker–Planck equation, this contributes $-\nabla\cdot(\pi\gamma)=0$, so suitable smoothness, boundary, and existence conditions preserve the stationary density. Variance properties under stated hypotheses are studied by [Duncan, Lelièvre, and Pavliotis](https://www.ma.ic.ac.uk/~pavl/nonreversible.pdf). A discretization of that diffusion can still have a biased invariant law.

Factorized event rates and control variates can reduce the cost of evaluating large-data hazards. They require valid bounds and an accounting of preprocessing work. Their exactness is a property of the full construction, not a consequence of using an unbiased gradient estimate by itself. [Chapter 34](34-scalable.md) contrasts such approaches with stochastic-gradient approximations.

## 33.12 Exercises with worked solutions

<div class="exercise" id="mcmc-33-nonreversible-ex-1">

### Exercise 1: Current and convergence

For the lazy clockwise three-cycle, compute the invariant probabilities and clockwise currents. Explain what changes when the move probability becomes one.

<details>
<summary>Solution</summary>

Each column sums to one, hence $\pi(x)=1/3$. Each clockwise current is $0.8/3$ because there is no counterclockwise transition. With probability one of moving, uniformity remains invariant but the chain has period three. Starting at one state produces point masses rotating forever, so marginal convergence fails despite stationarity of a uniform start.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-2">

### Exercise 2: Enumerate the lifted chain

Use target probabilities $(1,2,1)/4$ on three positions. List transitions and check incoming mass at $(2,+1)$ and $(1,+1)$.

<details>
<summary>Solution</summary>

The transitions are $(1,+)\to(2,+)$ with probability one; $(2,+)\to(3,+)$ or $(2,-)$ with probability one-half each; $(3,+)\to(3,-)$ surely; $(3,-)\to(2,-)$ surely; $(2,-)\to(1,-)$ or $(2,+)$ with probability one-half each; and $(1,-)\to(1,+)$ surely. Incoming mass at $(2,+)$ is $1/8+(1/4)(1/2)=1/4$. At $(1,+)$ it is $1/8$ from the endpoint reversal. These equal their lifted target masses. The other states follow by reflection symmetry. Laziness breaks the parity alternation while preserving these masses.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-3">

### Exercise 3: Verify the rate identity

Show that canonical zig-zag rates satisfy the cancellation identity. Give an additional flip rate that preserves it.

<details>
<summary>Solution</summary>

For every real $a$, $[a]_+-[-a]_+=a$. Taking $a=v_i\partial_iU$ proves the identity because $F_i$ reverses $v_i$. A constant $c_i\ge0$ added to both rates cancels from their difference. More generally any nonnegative $\gamma_i$ unchanged by $F_i$ works. Integration by parts gives positive transport contribution $f v_i\partial_iU$, while velocity relabeling gives its negative from jumps. This proves infinitesimal invariance under the stated domain assumptions, not convergence.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-4">

### Exercise 4: Invert a clock

Derive the Gaussian waiting time when $a=-3$ and the exponential threshold is $E=2$. Explain why using an exponential clock with the initial intensity fails.

<details>
<summary>Solution</summary>

The intensity is zero for the first three time units. Thereafter the cumulative hazard is $(t-3)^2/2$. Solving $(t-3)^2/2=2$ yields $t=5$. An exponential clock frozen at initial intensity zero would never ring, ignoring the later uphill movement. For nonnegative $a$, solving $at+t^2/2=E$ gives the other branch, whose rationalized form avoids cancellation.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-5">

### Exercise 5: Calculate the wrong limiting moment

Evaluate the second moment of the Gaussian event-position distribution explicitly.

<details>
<summary>Solution</summary>

Normalizing constants and the factor two from symmetry cancel, leaving

$$
\frac{\int_0^\infty x^3e^{-x^2/2}\,dx}
{\int_0^\infty xe^{-x^2/2}\,dx}.
$$

Set $u=x^2/2$. The denominator is $\int_0^\infty e^{-u}du=1$ and the numerator is $2\int_0^\infty ue^{-u}du=2$. Thus the ratio is two. Equal event weights overrepresent locations with greater event intensity; no increase in event count corrects that change of measure.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-6">

### Exercise 6: Audit a thinning implementation

A program clips acceptance ratios above one, omits rejected candidates from elapsed time, and discards the final incomplete segment. Identify the three errors and their remedies.

<details>
<summary>Solution</summary>

A ratio above one reveals a failed domination assumption. Clipping cannot reconstruct the events the deficient candidate process missed. Stop and replace the bound using a valid construction; recompute the affected simulation from a point for which correctness is justified, rather than silently retaining its history. Rejected candidates still advance time and position, because they belong to the dominating clock. Finally, integrate the trajectory through the specified horizon, truncating its last segment. These fixes address different errors: the event law, the physical clock, and the estimator's observation interval.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-7">

### Exercise 7: A valid bound that becomes zero

For the Gaussian zig-zag, start at $x=2$, $v=-1$ and use consecutive intervals of length one. Give the first two endpoint bounds. Does a zero first bound mean the next flip occurs at infinite time?

<details>
<summary>Solution</summary>

The first bound is $[-2+1]_+=0$, so the particle coasts from $2$ to $1$. Rebuilding gives $[-1+1]_+=0$, so it coasts from $1$ to $0$. At zero the next interval has bound $[0+1]_+=1$. The initial zero bounds exclude events only until their respective expiries. The future rate becomes positive after crossing zero, and its integrated hazard diverges, so a flip eventually occurs almost surely. Using one frozen zero bound forever would be invalid.

</details>

</div>

<div class="exercise" id="mcmc-33-nonreversible-ex-8">

### Exercise 8: Detect an invariant obstruction

In the two-dimensional Gaussian BPS with unit speed and no refreshment, start from $x=(r,0)$, $v=(0,1)$ with $r>0$. Which disk is inaccessible, and what is its target probability?

<details>
<summary>Solution</summary>

The conserved scalar is $\ell=r$. Since $|\ell|\le\|x\|\|v\|=\|x\|$, the open disk of radius $r$ cannot be entered. Its standard Gaussian probability is $1-e^{-r^2/2}$. Its indicator therefore has time average zero on this trajectory and a strictly positive target expectation. Refreshing only the sign of velocity would preserve $|\ell|$ and would not fix this obstruction; an independent draw from the full circle can change it.

</details>

</div>

## Key takeaways

Nonzero circulating currents are compatible with stationarity. Lifting makes persistence part of the Markov state. Zig-zag flips and bouncy reflections preserve a product target through an explicit cancellation with deterministic transport, while ergodicity remains a separate question. Exact hazard simulation removes time-step bias only when inversion or domination is valid. For estimation, retain the clock: the Gaussian example has time second moment one and event second moment two.
