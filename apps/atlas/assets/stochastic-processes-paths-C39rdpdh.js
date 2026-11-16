var e=`---
id: book-stochastic-processes-paths
title: "Stochastic Processes: States, Arrivals, Paths, and Fair Games"
level: advanced-undergraduate
estimated_minutes: 430
license: CC BY-SA 4.0
---

# Stochastic Processes: States, Arrivals, Paths, and Fair Games

A stochastic process is a family of random variables $(X_{t})_{t\\in T}$ on one probability space. The index may be discrete or continuous time; values may be finite states, counts, vectors, or functions. This book organizes the subject by the structure imposed on dependence: Markov memory, independent increments, renewal, filtration, or continuous-path noise.

The book begins at L3 with [Probability: Models, Bounds, and Proofs](probability-models-proofs.md) and elementary linear algebra. Its continuous-path continuation is L4; the [reader guide](stochastic-processes-paths/front-matter/reader-guide.md) states preparation separately for each part. Begin with the five-chapter discrete route: [process laws](stochastic-processes-paths/specifying-a-process.md), [chains](stochastic-processes-paths/finite-markov-chains.md), [classes and hitting](stochastic-processes-paths/classes-hitting-times-stationarity.md), [coupling](stochastic-processes-paths/coupling-and-convergence.md), and [random walks](stochastic-processes-paths/random-walks-gamblers-ruin.md).

## Four-part reading sequence

**Discrete time (L3):** [1. Specifying a Process](stochastic-processes-paths/specifying-a-process.md), [2. Discrete-time Markov Chains](stochastic-processes-paths/finite-markov-chains.md), [3. Classes, Hitting Times and Stationarity](stochastic-processes-paths/classes-hitting-times-stationarity.md), [4. Coupling and Convergence](stochastic-processes-paths/coupling-and-convergence.md), [5. Random Walks and Gambler’s Ruin](stochastic-processes-paths/random-walks-gamblers-ruin.md).

**Arrivals and queues (L3):** [6. Poisson Processes](stochastic-processes-paths/poisson-processes.md), [7. Continuous-time Markov Chains](stochastic-processes-paths/continuous-time-markov-chains.md), [8. Birth-death Processes and Queues](stochastic-processes-paths/birth-death-processes-queues.md), [9. Renewal Processes](stochastic-processes-paths/renewal-processes.md).

**Martingales (L3–L4):** [10. Martingales and Stopping](stochastic-processes-paths/martingales-and-stopping.md), [11. Branching Processes](stochastic-processes-paths/branching-processes.md), [12. Martingale Convergence and Applications](stochastic-processes-paths/martingale-convergence-applications.md).

**Continuous paths (L4):** [13. Brownian Motion](stochastic-processes-paths/brownian-motion.md), [14. Path Properties and the Reflection Principle](stochastic-processes-paths/path-properties-reflection-principle.md), [15. The Ito Integral](stochastic-processes-paths/stochastic-integration-orientation.md), [16. SDEs, Diffusions and Generators](stochastic-processes-paths/sdes-diffusions-generators.md).

The original topic overview below remains a companion to this reading sequence. Its headings group ideas rather than replace the chapter identities above.

## 1. Specifying a process

A list of one-time distributions does not determine a process. Consider fair bits $X_{t}$. They might be independent across time, constant with $X_{t}=X_{0}$, or alternate deterministically. Every time marginal is Bernoulli one half, but path behavior differs completely.

Finite-dimensional distributions give the joint law of $(X_{t_1},\\ldots,X_{t_k})$ for every finite set of indices. When these laws are permutation-consistent and compatible under marginalisation, the Kolmogorov extension theorem constructs a process on the product space (under the usual measurable-space hypotheses). Path regularity—continuity, right-continuity, bounded variation—is additional information and usually requires a separate modification theorem.

The natural filtration $F_{t}=\\sigma (X_{s}:s\\le t)$ records the history revealed by time $t$. An adapted process never uses future information at the present time.

## 2. Finite Markov chains

A time-homogeneous Markov chain with transition matrix $P$ satisfies, almost surely,

$\\mathbb{P}(X_{n+1}=j \\mid \\mathcal{F}_{n})=P(X_n,j)$.

On a history event of positive probability this is the familiar statement that the conditional chance of the next state depends on the history only through its current state. The almost-sure form avoids dividing by the probability of an impossible history.

The Chapman–Kolmogorov equations state $P^{m+n}=P^{m}P^{n}$. They follow by conditioning on the intermediate state:

$\\mathbb{P}_{i}(X_{m+n}=j)=\\sum_{k} \\mathbb{P}_{i}(X_{m}=k)\\mathbb{P}_{k}(X_{n}=j)$.

States communicate when each can reach the other with positive probability. A finite irreducible chain has a unique stationary distribution $\\pi$ with $\\pi P=\\pi$. Aperiodicity is additionally needed for ordinary convergence $P^{n}(i,\\cdot )\\to \\pi$; without it, Cesàro averages may converge while time slices oscillate.

### Return-time formula

For a finite irreducible chain, every state is positive recurrent and the mean positive return time to state $i$ is $1/\\pi_{i}$. Intuitively, a long stationary path spends fraction $\\pi_{i}$ of time at $i$, so visits arrive at mean spacing $1/\\pi_{i}$. A complete proof uses regeneration at visits and a law of large numbers.

### Hitting equations

Let $h(i)=\\mathbb{P}_{i}(T_{A}<T_{B})$. For states outside target sets,

$h(i)=\\sum_{j} \\mathbb{P}_{ij} h(j)$

with boundary values one on $A$ and zero on $B$. Expected hitting times solve

$e(i)=1+\\sum_{j}\\mathbb{P}_{ij} e(j)$

away from the target, with zero on it. These linear equations express first-step analysis. Without an almost-sure hitting condition they can be nonunique even on a finite state space; the hitting probability is the minimal nonnegative solution.

## 3. Coupling and convergence

A coupling of laws $\\mu ,\\nu$ is a joint pair $(X,Y)$ with those marginals. For any event $A$,

$\\lvert \\mathbb{P}(X\\in A)-\\mathbb{P}(Y\\in A)\\rvert \\le \\mathbb{P}(X\\ne Y)$.

Taking the supremum gives the coupling inequality for total variation. A maximal coupling attains equality at one time.

For Markov chains, construct copies from different starts so that after a meeting time $T$ they move together. Then

$\\lVert P^{n}(x,\\cdot )-P^{n}(y,\\cdot ) \\rVert_{TV}\\le \\mathbb{P}(T>n)$.

This is a proof method only after each copy’s marginal transition law has been verified. Driving two chains with a shared random number may fail to couple or may even violate a marginal if the update rule is careless.

## 4. Poisson processes

A homogeneous Poisson process of rate $\\lambda >0$ has $N(0)=0$, stationary independent increments, and count law

$\\mathbb{P}(N(t)=k)=e^{-\\lambda t}(\\lambda t)^{k}/k!$.

Its interarrival times are iid exponential random variables. To derive the first waiting law,

$\\mathbb{P}(T_{1}>t)=\\mathbb{P}(N(t)=0)=e^{-\\lambda t}$.

For later arrivals, the strong Markov property at each arrival time restarts the process independently with the same rate. Consequently the interarrival times are iid exponential variables, and the $n$th arrival is their sum and has a gamma distribution. Independent increments stated only at deterministic times do not, by themselves, justify silently restarting at a random time; that is precisely the role of the strong Markov step.

### Superposition and thinning

Independent Poisson processes of rates $\\lambda_{1},\\lambda_{2}$ superpose to rate $\\lambda_{1}+\\lambda_{2}$: independent increment counts add, and sums of independent Poisson variables are Poisson. If each arrival is independently retained with probability $p$, retained and discarded processes are independent Poisson processes of rates $p\\lambda$ and $(1-p)\\lambda$.

The thinning claim fails if retention depends on congestion or on earlier arrivals. “Randomly label each point independently” is a material hypothesis.

## 5. Renewal processes

Let positive iid interarrival times $W_{i}$ have finite mean $m>0$. Set $S_{0}=0$ and $S_{n}=\\sum_{i=1}^{n}W_{i}$. The renewal count is

$N(t)=\\max\\{n\\ge 0:S_{n}\\le t\\}$.

The elementary renewal theorem says

$\\mathbb{E}[N(t)]/t\\to 1/m$.

The strong law also gives $N(t)/t\\to 1/m$ almost surely. Indeed, $S_{n}/n\\to m$ and $S_{N(t)}\\le t<S_{N(t)+1}$ squeeze the inverse count; positivity and finite mean ensure that $N(t)\\to\\infty$.

Poisson is the special memoryless renewal process. General renewals exhibit the inspection paradox: a stationary-time observation oversamples long intervals. In the non-arithmetic continuous setting, if interarrival $W$ has finite second moment, the interval containing a time sampled from the equilibrium renewal process has the length-biased law

$\\mathbb{P}(W^{\\mathrm{lb}}\\in dw)=\\frac{w\\,\\mathbb{P}(W\\in dw)}{\\mathbb{E}[W]}$

and mean $\\mathbb{E}[W^{2}]/\\mathbb{E}[W]$. An observation at a fixed early time in a process started with a renewal at zero need not yet have this equilibrium law, and arithmetic models require the corresponding lattice version.

## 6. Martingales and stopping

An integrable adapted process is a martingale if $\\mathbb{E}[M_{n+1} \\mid F_{n}]=M_{n}$. It is a submartingale when the conditional expectation is at least the present value.

For iid mean-zero increments $\\xi_{i}$, $S_{n}=\\sum \\xi_{i}$ is a martingale. If increments have variance $\\sigma^{2}$, then $S_{n}^{2}-n\\sigma^{2}$ is a martingale:

$\\mathbb{E}[S_{n+1}^{2} \\mid F_{n}]=S_{n}^{2}+2S_{n}\\mathbb{E}[\\xi_{n+1} \\mid F_{n}]+\\mathbb{E}[\\xi_{n+1}^{2}]=S_{n}^{2}+\\sigma^{2}$.

If $T$ is bounded, $\\mathbb{E}[M_{T}]=\\mathbb{E}[M_{0}]$. One proof writes

$M_{T}=M_{0}+\\sum_{k\\ge 1}\\mathbf{1}_{T\\ge k}(M_{k}-M_{k-1})$.

For bounded $T$, the sum is finite. The indicator $\\mathbf{1}_{T\\ge k}$ is known at time $k-1$, and the conditional expected increment is zero. Taking expectations eliminates every term.

Unbounded stopping requires extra hypotheses. A strategy that doubles a stake until a win has apparently certain eventual profit but unbounded exposure and no integrable dominating bound. Optional stopping is a theorem family, not a betting incantation.

## 7. Brownian motion

Standard Brownian motion $(B_{t})_{t\\ge 0}$ starts at zero, has independent increments, $B_{t}-B_{s}\\sim \\mathcal{N}(0,t-s)$, and continuous paths. Its covariance is

$\\mathbb{E}[B_{s}B_{t}]=\\min(s,t)$.

For $s\\le t$, write $B_{t}=B_{s}+(B_{t}-B_{s})$; the increment is independent of $B_{s}$ and mean zero, giving covariance $\\mathbb{E}[B_{s}^{2}]=s$.

Brownian paths are continuous but almost surely nowhere differentiable. If partitions of $[0,t]$ have mesh tending to zero, the sums of squared Brownian increments converge to $t$ in probability; along standard nested sequences such as dyadic partitions, convergence also holds almost surely. Ordinary continuously differentiable paths have quadratic variation zero. This is why stochastic calculus obeys a different chain rule.

Brownian scaling says $(B_{ct})_{t}$ has the same finite-dimensional distributions as $(\\sqrt{c}B_{t})_{t}$. It formalizes diffusive $\\sqrt{time}$ spread and connects rescaled random walks to Brownian motion through invariance principles.

## 8. Stochastic integration orientation

For a predictable square-integrable step process $H_t=\\xi_k$ on $(t_k,t_{k+1}]$, where $\\xi_k$ is measurable with respect to the information at time $t_k$, define

$\\int_{0}^{T} H_{t} dB_{t} = \\sum_{k} \\xi_k(B_{t_{k+1}}-B_{t_k})$.

Left endpoints ensure the coefficient uses no future increment. Independence and conditional mean zero yield the Itô isometry

$\\mathbb{E}[(\\int H dB)^{2}]=\\mathbb{E}[\\int H^{2}dt]$.

The general Itô integral is an $L^{2}$ limit of such step integrals. It is not a pathwise Riemann–Stieltjes integral against a bounded-variation curve.

For sufficiently integrable coefficients and $f\\in C^{2}$, Itô’s formula for $dX_{t}=b_{t}dt+\\sigma_{t}dB_{t}$ includes a quadratic-variation correction:

$df(X_{t})=f'(X_{t})dX_{t}+(1/2)f''(X_{t})\\sigma_{t}^{2}dt$.

For $f(x)=x^{2}$ and $X=B$, this gives $d(B_{t}^{2})=2B_{t}dB_{t}+dt$, matching that $B_{t}^{2}-t$ is a martingale. This section is an orientation, not a substitute for construction, localization, or existence theory for stochastic differential equations.

## Worked exercises

### 1. A periodic chain

For transition matrix $[[0,1],[1,0]]$, find a stationary distribution and explain nonconvergence.

**Answer.** $(1/2,1/2)$ is stationary. From state 0, the law alternates between point masses at 0 and 1, so it does not converge.

### 2. Hitting recurrence

A fair walk on $\\{0,…,N\\}$ stops at the endpoints. Verify $h(i)=i/N$ is the chance to hit $N$ first.

**Answer.** It has boundary values 0 and 1, and for interior $i$, $(h(i-1)+h(i+1))/2=i/N=h(i)$. Uniqueness of the finite linear boundary problem completes the proof.

### 3. Poisson thinning

A rate-12 stream independently marks each arrival urgent with probability $1/4$. What are the urgent and nonurgent rates?

**Answer.** Thinning gives independent Poisson streams of rates 3 and 9 per original time unit.

### 4. Square martingale

For a fair $\\pm 1$ walk, verify $S_{n}^{2}-n$ has constant expectation.

**Answer.** The conditional calculation above shows it is a martingale. Hence its expectation equals $S_{0}^{2}=0$, so $\\mathbb{E}[S_{n}^{2}]=n$.

### 5. Brownian covariance

Find $\\operatorname{Var}(B_{t}-B_{s})$ for $0\\le s\\le t$ from the covariance formula.

**Answer.** $t+s-2\\min(s,t)=t-s$, agreeing with the increment law.

### 6. Same marginals, different paths

Let $Z$ be a fair bit. Compare the processes $X_n=Z$ and a sequence $Y_n$ of iid fair bits. Do they have the same one-time marginals? Find $\\mathbb{P}(X_0=X_1)$ and $\\mathbb{P}(Y_0=Y_1)$.

**Answer.** Both processes have Bernoulli one-half at every fixed time. The constant process satisfies $\\mathbb{P}(X_0=X_1)=1$, whereas independence gives $\\mathbb{P}(Y_0=Y_1)=1/2$. One-time marginals therefore do not determine a process law.

### 7. Renewal inversion

Assume positive iid interarrivals have finite mean $m$. Which inequalities connect $N(t)$ to the renewal epochs?

**Answer.** By definition,

$S_{N(t)}\\le t<S_{N(t)+1}$.

After dividing by $N(t)$ and $N(t)+1$ as appropriate, the strong law $S_n/n\\to m$ squeezes $t/N(t)$ toward $m$, hence $N(t)/t\\to 1/m$ almost surely.

### 8. A stopping-time warning

For a simple symmetric random walk, let $T$ be the first time the walk reaches $1$. Why does almost-sure finiteness of $T$ not justify $\\mathbb{E}[S_T]=\\mathbb{E}[S_0]$?

**Answer.** Although $T<\\infty$ almost surely, $\\mathbb{E}[T]=\\infty$ and the stopped family is not uniformly integrable. Optional stopping needs a bounded time or another explicit integrability condition; here $S_T=1$ while $S_0=0$.

### 9. Brownian quadratic variation

For an equal partition of $[0,t]$ into $n$ pieces, find the expectation of the sum of squared Brownian increments.

**Answer.** Each increment has variance $t/n$ and mean zero, so its expected square is $t/n$. Summing $n$ terms gives $t$, consistent with the quadratic-variation limit.

### 10. Itô correction

Use Itô’s formula to identify the drift of $e^{B_t}$.

**Answer.** With $f(x)=e^x$, both derivatives equal $e^x$, so

$d(e^{B_t})=e^{B_t}\\,dB_t+\\tfrac12 e^{B_t}\\,dt$.

Thus $e^{B_t}$ has positive drift, while $e^{B_t-t/2}$ is a martingale under the usual integrability conditions.

## Continuation and audit points

Next study recurrence on countable chains, reversibility and spectral gaps, point processes and compensators, ergodic theory, Lévy processes, semimartingales, stochastic differential equations, and SPDEs. Standard references include Norris for chains, Ross for introductory processes, and texts by Revuz–Yor, Karatzas–Shreve, and Ethier–Kurtz for advanced paths. Claims about extension, strong Markov arguments, renewal limits, and general Itô integration deserve a full measure-theoretic course before research use.
`;export{e as default};