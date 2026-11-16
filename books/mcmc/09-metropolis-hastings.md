# 09. Metropolis–Hastings

Metropolis–Hastings (MH) turns a distribution that we can *evaluate* into a Markov chain that we can *simulate*. Its central trick is to propose a move using a convenient rule, then correct the directional imbalance in that rule by sometimes staying put. The resulting transition preserves the desired distribution under precise conditions. Preservation is an algebraic fact about a kernel; obtaining a useful estimate from a finite run requires more work.

**Learning goals.** By the end of this chapter you should be able to derive the acceptance probability from probability flow, calculate an MH transition matrix, correct an asymmetric proposal, preserve rejected states in an estimate, and identify why invariance alone does not establish exploration or finite-run accuracy.

**Prerequisites.** We use densities and changes of variables from [Chapter 02](02-probability.md), log arithmetic from [Chapter 04](04-numerics.md), Monte Carlo averages from [Chapter 05](05-monte-carlo.md), and invariant kernels from [Chapter 07](07-finite-chains.md). The convergence theory of [Chapter 08](08-convergence.md) is useful later, but the derivation here needs only detailed balance.

## 9.1 The computational contract

Suppose the desired probability density is

$$
\pi(x)=\frac{\widetilde\pi(x)}{Z},\qquad
Z=\int\widetilde\pi(x)\,\mu(dx),\qquad 0<Z<\infty.
$$

The reference measure $\mu$ might be counting measure on a finite set or Lebesgue measure on a continuous space. The condition on $Z$ matters: an improper target does not become a probability distribution merely because an algorithm can compute ratios. Often $Z$ is hard to calculate, while $\widetilde\pi(x)$ is easy to evaluate at chosen states.

Choose a proposal density $q(y\mid x)$, normalized in $y$ for each current state $x$. One iteration starts at $X_t=x$, draws $Y\sim q(\cdot\mid x)$, and sets $X_{t+1}=Y$ with a calculated probability. Otherwise $X_{t+1}=x$. This last case is a genuine transition: the repeated $x$ belongs in the trajectory and in any average over iterations. A proposal is a suggestion, not a draw from $\pi$. In Hastings's generalization of the original Metropolis method, the rule may prefer one direction over the other; the acceptance probability accounts for that preference [Hastings (1970)](https://academic.oup.com/biomet/article-abstract/57/1/97/284580).

To implement the usual density form of MH we need to simulate $q(\cdot\mid x)$ and evaluate both $q(y\mid x)$ and $q(x\mid y)$ for a proposed pair. We also need target values only up to the same positive constant. The proposal is allowed to be crude, although a proposal that rarely travels to important regions may produce a poor computation. In particular, an iteration budget is a budget of *transitions*, including rejected ones. Initialization chooses $X_0$; it does not alter the formula for subsequent transitions. Estimation uses the resulting states, typically through $N^{-1}\sum_{t=1}^N f(X_t)$ after a specified warmup period.

## 9.2 Deriving the acceptance probability from flow

Take two distinct states $x,y$ with $\pi(x)>0$ and $q(y\mid x)>0$. Before acceptance, the stationary forward proposal flow is $A=\pi(x)q(y\mid x)$; the reverse flow is $B=\pi(y)q(x\mid y)$. If we accept the larger flow only often enough to match the smaller, the *accepted* flow in each direction is $\min(A,B)$. Hence

$$
\alpha(x,y)
=\min\!\left\{1,\frac{\pi(y)q(x\mid y)}{\pi(x)q(y\mid x)}\right\}
=\min\!\left\{1,\frac{\widetilde\pi(y)q(x\mid y)}{\widetilde\pi(x)q(y\mid x)}\right\}.
$$

If the reverse numerator is zero, the proposal is rejected. Pairs for which $q(y\mid x)=0$ are never generated from $x$, so their ratio need not be evaluated. A proposed point outside target support has $\widetilde\pi(y)=0$ and is rejected. The target normalizer $Z$ cancels because it is the *same* in both target densities. A proposal normalizing factor that depends on its starting point generally does not cancel.

The construction gives the off-diagonal detailed-balance identity

$$
\pi(x)q(y\mid x)\alpha(x,y)
=\min\{A,B\}
=\pi(y)q(x\mid y)\alpha(y,x).
$$

The full transition kernel also includes the mass of rejected proposals:

$$
P(x,dy)=q(y\mid x)\alpha(x,y)\mu(dy)
+r(x)\delta_x(dy),\qquad
r(x)=1-\int q(y\mid x)\alpha(x,y)\,\mu(dy).
$$

For a discrete space, the first term can itself include accepted proposals of $y=x$; the second term is rejection. Both count as staying. Because the off-diagonal flows match and the diagonal is its own reverse, integrating $\pi(dx)P(x,dy)$ over $x$ gives $\pi(dy)$. Thus $\pi$ is invariant. This proof neither claims that $\pi$ is the only invariant distribution nor that a chain started elsewhere approaches it. Reversibility is a sufficient construction here, not a requirement for every MCMC method. The accepted-flow argument and the distinction between invariance and convergence are developed more generally by [Roberts and Rosenthal (2004)](https://arxiv.org/pdf/math/0404033).

## 9.3 Worked example A: an entire finite kernel

Let states be $1,2,3$, with target probabilities and proposal rows

$$
\pi=\left(\tfrac12,\tfrac13,\tfrac16\right),\qquad
Q=\begin{pmatrix}
0&3/4&1/4\\
1/2&0&1/2\\
1/4&3/4&0
\end{pmatrix}.
$$

The rows of $Q$ sum to one, but $Q$ is not symmetric. For the pair $1,2$, the proposed stationary flows are $(1/2)(3/4)=3/8$ forward and $(1/3)(1/2)=1/6$ reverse. Their ratio is $4/9$, so $\alpha(1,2)=4/9$ and $\alpha(2,1)=1$. Do the same calculation for all unordered pairs:

| Pair | Flow in first direction | Flow in reverse | Accepted flow each way | Acceptances |
|:---|---:|---:|---:|:---|
| $1\leftrightarrow2$ | $3/8$ | $1/6$ | $1/6$ | $\alpha_{12}=4/9,\ \alpha_{21}=1$ |
| $1\leftrightarrow3$ | $1/8$ | $1/24$ | $1/24$ | $\alpha_{13}=1/3,\ \alpha_{31}=1$ |
| $2\leftrightarrow3$ | $1/6$ | $1/8$ | $1/8$ | $\alpha_{23}=3/4,\ \alpha_{32}=1$ |

Multiply each proposal probability by its acceptance probability, then fill each diagonal with the row's remaining probability. The resulting MH kernel is

$$
P=\begin{pmatrix}
7/12&1/3&1/12\\
1/2&1/8&3/8\\
1/4&3/4&0
\end{pmatrix}.
$$

For example, $P_{11}=1-(3/4)(4/9)-(1/4)(1/3)=7/12$. A direct stationarity check for state 1 gives

$$
(\pi P)_1=(1/2)(7/12)+(1/3)(1/2)+(1/6)(1/4)
=7/24+4/24+1/24=1/2.
$$

The other columns give $1/3$ and $1/6$. This calculation verifies the *specified matrix*, without relying on a histogram or a long simulation. If we dropped the proposal ratio and used $\min(1,\pi(y)/\pi(x))$, the $1\to2$ accepted flow would be $(3/8)(2/3)=1/4$, whereas the $2\to1$ flow would remain $1/6$. The target flow would no longer balance. More decisively, the resulting matrix $P_{\rm wrong}$ gives $\pi P_{\rm wrong}=(5/12,11/24,1/8)\ne\pi$. Failure of detailed balance alone would not rule out invariance for a general nonreversible kernel; this multiplication does. Notice how this error is detectable before writing a sampler.

## 9.4 Two familiar proposal families

For an additive random walk, draw $\varepsilon$ from a density $g$ and propose $Y=x+\varepsilon$. Then $q(y\mid x)=g(y-x)$. If $g(u)=g(-u)$ for every $u$, the reverse and forward proposal densities agree, leaving $\alpha(x,y)=\min\{1,\widetilde\pi(y)/\widetilde\pi(x)\}$. A fixed-scale centered Gaussian increment is one example. A Gaussian centered at $x$ whose variance depends on $x$ generally *does not* have equal forward and reverse densities; each direction uses a different variance and normalizing factor.

For an independence proposal, draw $Y$ from a fixed density $g(y)$ without consulting $x$. Now $q(y\mid x)=g(y)$ and $q(x\mid y)=g(x)$, so, where $g$ is positive,

$$
\alpha(x,y)=\min\!\left\{1,
\frac{\pi(y)/g(y)}{\pi(x)/g(x)}\right\}.
$$

The proposals may be independent across iterations, but the retained states generally are not: a rejection repeats the old state, and the chance of rejection depends on it. The proposal must cover target regions we expect to sample. A proposal with weak tails compared with the target can lead to long holding periods at target extremes, even though the algebra still makes $\pi$ invariant where the chain can move. [Roberts and Rosenthal, Section 2.1](https://arxiv.org/pdf/math/0404033), distinguish random-walk and independence proposals; [Robert's examples](https://arxiv.org/html/1504.01896v3) illustrate scale-dependent movement.

An acceptance fraction close to one is not itself a quality criterion. With an extremely small random-walk step, nearly every proposal can be accepted while the chain travels negligible distance over a finite run. Conversely, a large step can be rejected frequently. The useful question is how accurately the chain estimates a particular target quantity for a given cost; [Chapters 12](12-kernel-design.md) and [13](13-mc-error.md) develop that comparison.

## 9.5 Worked example B: a positive parameter

Suppose the target is a Gamma distribution with shape 3 and rate 2,

$$
\widetilde\pi(x)=x^2e^{-2x}\mathbf1_{\{x>0\}}.
$$

Its known mean is $3/2$ and variance is $3/4$. An additive normal random walk sometimes proposes a nonpositive value; simply reject it and the original symmetric proposal remains valid. A tempting alternative is to keep drawing until $Y>0$. That is a *different* conditional proposal. If an $N(x,\sigma^2)$ draw is truncated to positive values, then for $y>0$ its density is $\phi((y-x)/\sigma)/(\sigma\Phi(x/\sigma))$. The Gaussian numerators match between directions, but $\Phi(x/\sigma)$ and $\Phi(y/\sigma)$ do not. Its Hastings correction is $\Phi(x/\sigma)/\Phi(y/\sigma)$ in $q(x\mid y)/q(y\mid x)$. Clipping a negative draw to zero is different again: it creates an atom at zero, and a continuous-density ratio alone does not describe that mixed proposal.

A multiplicative move stays positive: draw $\varepsilon\sim N(0,\sigma^2)$ and set $Y=x e^\varepsilon$. For $x,y>0$, changing variables from $\varepsilon=\log(y/x)$ to $y$ gives

$$
q(y\mid x)=\frac{1}{y\sigma\sqrt{2\pi}}
\exp\!\left[-\frac{\{\log(y/x)\}^2}{2\sigma^2}\right].
$$

The exponent has the same value in reverse, but the leading Jacobian is $1/x$ instead of $1/y$. Consequently $q(x\mid y)/q(y\mid x)=y/x$, and

$$
\log\frac{\widetilde\pi(y)q(x\mid y)}
{\widetilde\pi(x)q(y\mid x)}
=3\log(y/x)-2(y-x).
$$

At $x=1,y=2$ the ratio is $8e^{-2}\approx1.083$, so this proposal is accepted with probability one. Omitting the Hastings term gives $4e^{-2}\approx0.541$, which is materially different. This discrepancy is not a subtle finite-sample issue; it defines a different transition kernel.

There is another way to derive the same rule. Put $z=\log x$ and run a symmetric Gaussian random walk in $z$. The transformed target includes the Jacobian $dx/dz=e^z$:

$$
\widetilde\pi_z(z)=\widetilde\pi_x(e^z)e^z
=\exp(3z-2e^z).
$$

Its symmetric-proposal log ratio is $3(z'-z)-2(e^{z'}-e^z)$, exactly the expression above. The two derivations agree because they describe the same proposed move in different coordinates. This is a practical consistency check for Jacobian signs; [Chapter 02](02-probability.md) gives the general transformation rule.

### 9.5.1 Which distribution does the missing correction preserve?

We can go beyond saying that a missing factor is wrong. Suppose a proposal satisfies

$$
h(x)q(y\mid x)=h(y)q(x\mid y)
$$

for some positive function $h$. The function $h$ need not integrate to one. If we incorrectly accept using only $\min\{1,\widetilde\pi(y)/\widetilde\pi(x)\}$, the accepted flow under density proportional to $\widetilde\pi(x)h(x)$ is proportional to

$$
h(x)q(y\mid x)\min\{\widetilde\pi(x),\widetilde\pi(y)\}.
$$

This is symmetric in $x,y$. Therefore the erroneous algorithm preserves $\rho(x)\propto\widetilde\pi(x)h(x)$, provided $0<\int\widetilde\pi h\,d\mu<\infty$. This deduction applies the same detailed-balance construction as [Roberts and Rosenthal, Section 2.1](https://arxiv.org/pdf/math/0404033); it identifies an invariant law, without promising rapid exploration.

For the lognormal random walk, $h(x)=1/x$: the products $q(y\mid x)/x$ and $q(x\mid y)/y$ agree. Thus the missing correction in our Gamma example preserves

$$
\rho(x)\propto x e^{-2x}\mathbf1_{\{x>0\}},
$$

a Gamma distribution with shape 2 and rate 2. Its mean is $1$ and variance is $1/2$. The same result follows in log coordinates: the erroneous acceptance rule uses $\exp(2z-2e^z)$ as a density in $z$, so transforming back divides by $x$. The Jacobian role in lognormal proposals is also illustrated in [Robert, Section 4](https://arxiv.org/html/1504.01896v3).

For the positive truncated-normal proposal, take $h(x)=\Phi(x/\sigma)$ instead. Omitting its correction preserves $\rho(x)\propto\widetilde\pi(x)\Phi(x/\sigma)$, tilting the intended target toward larger positive values. Unlike an ordinary finite-run fluctuation, either error remains when the run grows. The script includes a deliberately broken Gamma run beside the correct one, with each compared to its analytically identified invariant moments. Smooth traces and apparently stable moments can describe the wrong distribution.

## 9.6 Invariance does not ensure travel

Consider a target uniform over two disjoint intervals, $[0,1]\cup[3,4]$, and a proposal that can move by at most $1/2$. A chain beginning in the first interval cannot cross the zero-density gap to the second interval in one accepted step, nor in any number of accepted steps. The usual MH flow proof still makes the full uniform target invariant: if a chain were initialized from that target, the initial mass in each interval would remain there. It does not make the chain from a fixed point explore both components. The identity kernel is the limiting, especially stark example: every distribution is invariant, and no state ever changes.

Reverse support matters too. If $q(y\mid x)>0$ but $q(x\mid y)=0$, the MH acceptance probability for $x\to y$ is zero whenever $\pi(x)>0$. This is the price of using this reversible correction: a one-way proposal cannot create a one-way accepted flow. Checking only that a proposal can point toward important regions is insufficient; the reverse probability has to be available for accepted movement.

Finally, even universal acceptance does not imply ordinary convergence. On two states with uniform target, propose the *other* state deterministically. Both moves have acceptance one; the transition matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$. The target is invariant, but a chain started at state 1 alternates forever. Its distribution at time $t$ does not settle to the target because the chain is periodic. Time averages converge to the uniform expectation for every real-valued function on these two states, which illustrates why distributional convergence and average convergence should also be kept distinct. Conditions for general-state convergence, including irreducibility and aperiodicity where appropriate, belong to [Chapter 08](08-convergence.md). No acceptance statistic can replace those conditions.

## 9.7 Why rejected states stay in the sample

The finite kernel above makes the effect of deleting repeated states visible. Define the probability of *actually leaving* state $x$ as $a(x)=1-P(x,\{x\})$. This is the escape probability. It is not always the same as the probability of accepting a proposal, because on a discrete space an accepted proposal can equal the current state. For our example, $Q$ has no self-proposals, so the two probabilities coincide and

$$
a=(5/12,7/8,1).
$$

If we record only changed states, the resulting jump chain has transition probabilities $J(x,y)=P(x,y)/a(x)$ for $y\ne x$. On a finite irreducible chain with at least two states, $a(x)>0$, and its invariant law is

$$
\pi_J(x)=\frac{\pi(x)a(x)}{\sum_z\pi(z)a(z)}.
$$

To check this, the stationary jump flow from $x$ to $y$ is proportional to $\pi(x)a(x)P(x,y)/a(x)=\pi(x)P(x,y)$; the latter balances in both directions for MH. Here $\sum_z\pi(z)a(z)=2/3$, giving $\pi_J=(5/16,7/16,1/4)$. Thus the fraction of *jumps* that visit state 1 tends to $5/16$ under the usual finite-chain assumptions, whereas the target fraction of *iterations* at state 1 is $1/2$. Deleting rejections overrepresents states that are easy to leave. The general jump-chain identity and its estimation implications are studied by [Rosenthal and coauthors](https://arxiv.org/html/1910.13316v3).

Compression is safe if holding times are retained. Suppose the stored record is $(V_k,M_k)$, where $V_k$ is the state in run $k$ (different from the preceding run, but possibly seen earlier) and $M_k$ is the number of consecutive recorded iterations at that state. Then the original average is exactly

$$
\frac{\sum_k M_k f(V_k)}{\sum_k M_k}.
$$

If sampling stops partway through a holding period, record only its observed length. For a complete holding period begun at $x$, the homogeneous chain has

$$
\Pr(M=m\mid x)=(1-a(x))^{m-1}a(x),\qquad
\mathbb E[M\mid x]=1/a(x),\qquad m=1,2,\ldots.
$$

It stays for $m-1$ transitions before escaping. In example A these expected lengths are $12/5,8/7,1$. This explains inverse-escape weighting: on the finite irreducible jump chain,

$$
\frac{\sum_{k=1}^K f(V_k)/a(V_k)}{\sum_{k=1}^K1/a(V_k)}
\longrightarrow\sum_x\pi(x)f(x)
\quad\text{almost surely}.
$$

Indeed, applying the finite-chain time-average law to numerator and denominator cancels the factor $a(x)$ in $\pi_J(x)$. These weights use expected holding lengths, so they do **not** reconstruct a particular finite trace exactly; observed multiplicities do. The geometric law and ratio estimator are given in [Rosenthal and coauthors, Proposition 3 and Theorem 12](https://arxiv.org/html/1910.13316v3). Estimating unknown escape probabilities poorly can itself cause serious error. The simplest reliable implementation retains one state per iteration, rejected or accepted.

## 9.8 A small, stable implementation

The runnable standard-library script [examples/ch09.py](examples/ch09.py) constructs the finite kernel and runs a seeded lognormal random walk for the Gamma target. Its essential continuous step is:

```python
log_y = math.log(x) + sigma * rng.gauss(0.0, 1.0)
y = math.exp(log_y)
delta = gamma_log_target(y) - log_target_x + log_y - math.log(x)
if math.log(1.0 - rng.random()) <= min(0.0, delta):
    x, log_target_x = y, gamma_log_target(y)
samples.append(x)  # append after the decision, including a rejection
```

The displayed fragment omits the script's overflow and input checks so that the direction of the correction is easy to see. In the full script, the current log target is cached, the initial state must have finite log density, and a NaN log ratio raises an error. An out-of-support proposal has log target $-\infty$ and should be rejected. Comparing $\log U$ to $\min(0,\Delta)$ avoids exponentiating a large positive or negative log ratio. Using $U=1-\texttt{rng.random()}$ avoids the possible endpoint $U=0$, whose logarithm is undefined. The non-strict comparison also accepts when $U=1$ and the acceptance probability is one. The script records every post-transition state and counts accepted proposals separately. Each of its two runs uses 30,000 transitions, a fixed seed, and bounded runtime; the first 3,000 are designated warmup before computing displayed moments.

This is a teaching implementation, not a complete library sampler. A floating-point program cannot literally implement the real-number proof; exceptional magnitudes need explicit handling. The script rejects unrepresentable extreme proposed values and reports empirical mean, variance, and acceptance fraction. A result numerically near $(1.5,0.75)$ is a useful sanity check, but one run cannot certify either the kernel derivation or the size of Monte Carlo error. The finite matrix calculation is the stronger algebraic check for that example.

## 9.9 Lab: change the proposal scale

Use the interactive Metropolis lab to hold its target and seed fixed while comparing a small, an intermediate, and a large proposal scale. Inspect both the trace and histogram. Record the reported acceptance fraction, but also ask how far the chain travels and how the reported mean and variance change across finite runs. Resetting the seed makes the comparison easier to interpret, though the runs still share randomness and do not provide independent error estimates. The lab targets a standard normal, starts at zero, and removes no warmup. It reports the mean, variance, lag-one autocorrelation, and acceptance fraction; its controls set proposal scale, iteration count, and seed. It illustrates scale and rejection; it is not an implementation of the asymmetric Gamma proposal above.

<div class="mcmc-lab" data-lab="metropolis"></div>

The companion [accepted-flow figure](figures/09.svg) shows a separate two-state example: proposed stationary flows $0.48$ and $0.08$ are both reduced to accepted flow $0.08$. The forward acceptance is $1/6$ and the reverse acceptance is one. In the lab's trace, flat segments represent repeated states and their time allocation. Removing them changes the empirical weighting even when the sequence of visited locations looks plausible.

### 9.9.1 Proposal correction: a mean that hides the error {#sec-991-proposal-correction-a-mean-that-hides-the-error}

The normal lab uses a symmetric proposal. Now connect the finite matrix calculation in Section 9.3 with the wrong-target argument in Section 9.5.1. On the path $1-2-3-4$, assign target weights $w=(1,3,3,1)$, so the intended law is $\pi=w/8$. From state $i$, propose a uniformly chosen neighbor. The degrees are $d=(1,2,2,1)$: $q(2\mid1)=1$, but $q(1\mid2)=1/2$. An undirected edge does not make the proposal probabilities symmetric.

**Predict before opening the audit or running the lab.** Compare a programmer's rule $\alpha_0(i,j)=\min(1,w_j/w_i)$ with the full Hastings rule. Which needs to reject more often on $2\to1$? Will increasing the run length repair an omitted proposal ratio? Find the target mean state label and the target probability of the boundary event $B=\{1,4\}$. Decide which statistic could expose excess weight in the interior.

<details>
<summary>Exact audit: ratios, kernels, and the wrong invariant law</summary>

On an edge, $q(j\mid i)=1/d_i$ and $q(i\mid j)=1/d_j$. Hence

$$
\alpha_+(i,j)=\min\left(1,\frac{w_jd_i}{w_id_j}\right).
$$

For $2\to1$, the correct acceptance is $2/3$, compared with the erroneous $1/3$. Multiplying by the proposal probability $1/2$ gives transition probabilities $1/3$ and $1/6$. Both rules accept $1\to2$ with probability one. Including rejection on the diagonal, their kernels are

$$
P_+=\begin{pmatrix}
0&1&0&0\\
1/3&1/6&1/2&0\\
0&1/2&1/6&1/3\\
0&0&1&0
\end{pmatrix},\qquad
P_0=\begin{pmatrix}
0&1&0&0\\
1/6&1/3&1/2&0\\
0&1/2&1/3&1/6\\
0&0&1&0
\end{pmatrix}.
$$

Across the first edge, the correct target flows are $(1/8)(1)=(3/8)(1/3)=1/8$. The erroneous rule instead sends target flow $1/8$ toward state 2 but only $(3/8)(1/6)=1/16$ back. Direct multiplication settles invariance without relying on reversibility as a necessary condition:

$$
\pi P_+=\pi,\qquad \pi P_0=(1,7,7,1)/16\ne\pi.
$$

What does the erroneous rule preserve? Uniform-neighbor proposals are reversible with weights $h_i=d_i$, as in the graph walk of [Chapter 07](07-finite-chains.md). Applying Section 9.5.1 gives $\rho_i\propto w_id_i$. More explicitly, for every edge,

$$
\rho_i=\frac{w_id_i}{\sum_k w_kd_k},\qquad
\rho_i(P_0)_{ij}=\frac{\min(w_i,w_j)}{\sum_k w_kd_k}
=\rho_j(P_0)_{ji}.
$$

Thus $\rho=(1,6,6,1)/14$. This is a derivation for an undirected connected graph with positive weights, not an assumption that all broken samplers have this bias. Both path kernels here are irreducible and have interior self-loops, so both are aperiodic and converge to their respective invariant laws. The correct stationary boundary probability is $1/4$; the erroneous one is $1/7$. Yet reflection symmetry makes **both stationary mean labels $5/2$**. A mean check can miss this exact error. The graph-walk identity is developed by [Aldous and Fill, Section 3.2](https://www.stat.berkeley.edu/~aldous/RWG/Book_Ralph/Ch3.S2.html); the acceptance and flow construction is [Roberts and Rosenthal, Section 2.1](https://arxiv.org/pdf/math/0404033). The matrices and comparisons above follow by direct calculation.

</details>

**Run a controlled comparison.** Start at state 1 with 20 iterations, then increase the count to 400 and 5,000. Repeat with another seed and then an interior start. For each rule, distinguish these three quantities:

$$
b_t=\Pr(X_t\in B),\qquad
\mathbb E[A_t]=\frac1t\sum_{s=1}^t b_s,\qquad
A_t=\frac1t\sum_{s=1}^t\mathbf1_{\{X_s\in B\}}.
$$

The lab propagates a probability vector for $b_t$ and averages those probabilities for $\mathbb E[A_t]$. Separately, it proposes and accepts random moves for one realization of $A_t$. Every count refers to **post-transition states $X_1,\ldots,X_n$**, including rejections; $X_0$ is excluded. The exact curves use floating-point matrix arithmetic and no simulation. Changing the seed changes the random paths, while both exact curves remain fixed. The two sampler paths share uniforms for reproducibility and are not independent replications.

<div class="mcmc-lab" data-lab="balance"></div>

**Explain what changed.** Why can the teal curve be close to its invariant probability before the orange curve reaches it? Why can the purple curve disagree with both? When a long erroneous run gives a state mean near 2.5, identify an exact calculation that still disproves its intended target. Explain which effects a longer run can reduce and which it cannot.

<details>
<summary>Explanation and an independent numerical checkpoint</summary>

The last-time probability $b_t$ forgets earlier steps, while $\mathbb E[A_t]$ retains their initialization effects. The realized $A_t$ also has random error from one dependent path. A longer run can reduce these two finite-run effects under this finite-chain setup, but its invariant law remains the law of its kernel. Here the erroneous average converges to $1/7$, retaining boundary bias $1/7-1/4=-3/28$; a mean near 2.5 does not repair it.

There is a second way to verify the curves without multiplying four-state matrices. A boundary state always moves to the interior. From either interior state, the chance of moving to $B$ is $a=1/3$ for the correct rule and $a=1/6$ for the erroneous rule. Thus $b_{t+1}=a(1-b_t)$. From $X_0=1$, $b_0=1$, so

$$
b_t=\frac{a}{1+a}+\frac{1}{1+a}(-a)^t.
$$

After two transitions the exact final boundary probabilities are $1/3$ and $1/6$, but the expected fractions over $X_1,X_2$ are $1/6$ and $1/12$, because the first post-transition state cannot be a boundary. This distinguishes a late marginal from an average even before randomness enters. More generally, from this start,

$$
\mathbb E_+[A_n]=\frac14-\frac{3}{16n}\{1-(-1/3)^n\},\qquad
\mathbb E_0[A_n]=\frac17-\frac{6}{49n}\{1-(-1/6)^n\}.
$$

Changing to an interior start changes $b_0$ and the finite-time curves, but not either invariant probability. The recurrence applies because both interior states have the same probability of moving to $B$; that simplification need not hold on another graph.

</details>

## 9.10 From a correct kernel to an estimate

There are four different questions to ask of an MH calculation. First, does the algebra produce the stated invariant target? Pairwise flow and a small exactly computed kernel can answer this. Second, can the chain travel through all relevant target regions, and under what convergence assumptions? Proposal support and geometry answer part of this, while [Chapter 08](08-convergence.md) gives formal conditions. Third, did the program implement the intended kernel in finite precision? Known-target checks, independent ratio derivations, and exceptional-value tests help. Fourth, how uncertain is the finite-run estimate? Dependence between states means an iid standard error from [Chapter 05](05-monte-carlo.md) is generally inappropriate; [Chapters 13](13-mc-error.md) and [14](14-diagnostics.md) develop Monte Carlo error and diagnostics.

Different starting locations can reveal poor exploration, especially on targets with separated regions, but agreement across runs is evidence rather than proof of convergence. Warmup has no universal guaranteed length. If proposal tuning uses preliminary iterations, freeze the proposal before treating later iterations as a fixed-kernel run; [Chapter 15](15-adaptation.md) treats adaptation itself. The same acceptance construction will reappear when [Gibbs sampling](10-gibbs.md) or kernel composition gives a more structured move, and when [Langevin](19-langevin.md) and [Hamiltonian](20-hmc.md) methods make proposals informed by target geometry.

## Exercises

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-1">

### 1. The balance calculation

Assume $\pi$ is proper, $q$ is normalized, and the directed proposal flows $A,B$ are positive. Derive the two accepted flows and explain why a diagonal balance calculation adds no new condition. Which conclusion follows by integrating over the first argument?

<details>
<summary>Solution</summary>

The forward flow is $A\min(1,B/A)=\min(A,B)$. The reverse is $B\min(1,A/B)=\min(A,B)$. A diagonal pair is its own reverse, including both accepted self-proposals and rejection mass. Thus the full kernel obeys detailed balance. Integrating $\pi(dx)P(x,dy)=\pi(dy)P(y,dx)$ over $x$ and using $\int P(y,dx)=1$ gives $\pi P=\pi$. This establishes invariance, not convergence from every start.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-2">

### 2. Build the three-state matrix

Recompute the six off-diagonal entries in worked example A from $\pi$ and $Q$. Fill in the diagonal entries by row sums, then check the second column of $\pi P$.

<details>
<summary>Solution</summary>

The off-diagonal rows are $(P_{12},P_{13})=(1/3,1/12)$, $(P_{21},P_{23})=(1/2,3/8)$, and $(P_{31},P_{32})=(1/4,3/4)$. The diagonals are $7/12,1/8,0$. For column 2, $(1/2)(1/3)+(1/3)(1/8)+(1/6)(3/4)=1/6+1/24+1/8=1/3$.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-3">

### 3. Truncation is a proposal change

A programmer repeatedly draws $Y\sim N(x,\sigma^2)$ until $Y>0$, then accepts using only the positive target ratio. State the missing proposal correction and give a simpler valid alternative that keeps the original Gaussian symmetry.

<details>
<summary>Solution</summary>

The accepted positive draw has $q(y\mid x)=\phi((y-x)/\sigma)/(\sigma\Phi(x/\sigma))$. Therefore $q(x\mid y)/q(y\mid x)=\Phi(x/\sigma)/\Phi(y/\sigma)$, which must multiply the target ratio. Alternatively, draw once from the untruncated Gaussian and reject any nonpositive proposal. Then the original Gaussian proposal is symmetric on the real line, and a negative proposal has zero target density.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-4">

### 4. General Gamma shape and rate

For $\widetilde\pi(x)=x^{k-1}e^{-bx}\mathbf1_{\{x>0\}}$, $k,b>0$, derive the log MH ratio for $Y=x e^\varepsilon$ with symmetric $\varepsilon$. Verify it by transforming to $z=\log x$.

<details>
<summary>Solution</summary>

The target log ratio contributes $(k-1)\log(y/x)-b(y-x)$, and the proposal contributes $\log(y/x)$. Their sum is $k\log(y/x)-b(y-x)$. In log coordinates the target is proportional to $\exp(kz-be^z)$ because the Jacobian adds $z$; a symmetric proposal gives log ratio $k(z'-z)-b(e^{z'}-e^z)$.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-5">

### 5. Jumps versus time

In example A, find the limiting fraction of changed-state records at state 1. A stored trace has consecutive-state run lengths $(1,3),(2,1),(1,2),(3,2)$. Compute its iteration average of $f(x)=\mathbf1_{\{x=1\}}$.

<details>
<summary>Solution</summary>

The jump-chain fraction is $\pi_J(1)=5/16$. For the stored finite trace, the numerator is $3+2=5$ and the total number of iterations is $3+1+2+2=8$, so the original iteration average is $5/8$. The finite trace need not equal either stationary value. Discarding run lengths would give $2/4=1/2$ for these four records and would change the statistic.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-6">

### 6. Perfect acceptance, poor convergence

Construct a two-state MH chain with acceptance one and an invariant uniform target whose distribution does not converge from a fixed start. Name one code check that probes a different issue from algebraic invariance.

<details>
<summary>Solution</summary>

Propose the other state deterministically. The proposal is symmetric, so every move is accepted, and $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ preserves $(1/2,1/2)$. Starting from state 1 gives alternating point masses, so the time-$t$ distribution does not converge. As a separate implementation check, one could simulate from several initial states and inspect traces for travel through all important regions; this cannot prove convergence, but it can expose a support or coding failure that a balance identity alone misses.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-7">

### 7. Identify the wrong target

For the Gamma$(k,\text{rate }b)$ target of Exercise 4, suppose the lognormal proposal is used but its Hastings factor is omitted. For $k>1$, identify the resulting invariant density and mean. What fails in this argument when $0<k\le1$?

<details>
<summary>Solution</summary>

The proposal is reversible against $h(x)=1/x$, so the erroneous rule preserves density proportional to $x^{k-2}e^{-bx}$ when it is normalizable. For $k>1$ this is Gamma$(k-1,\text{rate }b)$, with mean $(k-1)/b$, instead of $k/b$. For $0<k\le1$, its integral diverges near zero because $k-2\le-1$. The detailed-balance expression then defines no probability density; the original proper Gamma target does not rescue the missing correction. This argument alone is not a full recurrence classification of the erroneous chain.

</details>

</div>

<div class="exercise" id="mcmc-09-metropolis-hastings-ex-8">

### 8. Transfer to a different graph

Without running the path lab, consider a five-state star: state 3 is joined to states 1, 2, 4, and 5; there are no other edges. The target weights are $(1,2,3,2,1)$, and the proposal again chooses a neighbor uniformly. Derive both acceptance probabilities on $1\leftrightarrow3$, identify the invariant law of the erroneous target-only rule, and select an event that detects its error. Would the stationary mean state label detect it? Give one balance check using the intended target.

<details>
<summary>Solution</summary>

The degrees are $(1,1,4,1,1)$. Correct acceptance on $1\to3$ is $\min(1,3/4)=3/4$ and on $3\to1$ is $\min(1,4/3)=1$. The corresponding transition probabilities are $3/4$ and $1/4$. With the intended target $(1,2,3,2,1)/9$, both edge flows are $1/12$.

The erroneous rule accepts $1\to3$ with probability one, but $3\to1$ with probability $1/3$. Its transition probabilities are one and $1/12$. Under the intended target those flows are $1/9$ and $1/36$, unequal. Its invariant weights are target weight times degree: $(1,2,12,2,1)/18$. Hub mass is therefore $2/3$ instead of the intended $1/3$. Both invariant laws are symmetric about label 3, so both have mean 3. The hub event exposes a discrepancy that the mean misses. Each chain is connected and has self-loops, so the finite-chain convergence result applies. This graph has different degrees and acceptances from the path; copying the path's factor 2 would fail.

</details>

</div>

## Key takeaways

- MH accepts a proposed $x\to y$ using both the target ratio and the *reverse-to-forward* proposal ratio. Their product can be evaluated without the target normalizer.
- Matching accepted flow proves invariance of the full kernel, including rejection mass. It does not prove uniqueness, exploration, or a small finite-run error.
- A rejected proposal repeats the current state. Removing repeats changes time weights unless their holding lengths are retained.
- Positive transformations and truncated proposals require their correct Jacobian or normalization factors. Derive the ratio in both directions before coding.
- Proposal scale and acceptance fraction are clues about movement, never certificates of convergence.

## References

1. W. K. Hastings (1970), [“Monte Carlo sampling methods using Markov chains and their applications”](https://academic.oup.com/biomet/article-abstract/57/1/97/284580), *Biometrika* 57, 97–109. Publisher record for the generalization and historical attribution.
2. C. P. Robert (2016), [“The Metropolis–Hastings algorithm”](https://arxiv.org/html/1504.01896v3). Proposal families and illustrative implementation discussion.
3. G. O. Roberts and J. S. Rosenthal (2004), [“General state space Markov chains and MCMC algorithms”](https://arxiv.org/pdf/math/0404033). Reversibility and convergence conditions.
4. J. S. Rosenthal, A. Dote, K. Dabiri, H. Tamura, S. Chen, and A. Sheikholeslami, [“Jump Markov Chains and Rejection-Free Metropolis Algorithms”](https://arxiv.org/html/1910.13316v3). Jump-chain weighting and estimation.
