var e=`---
parent_id: book-stochastic-processes-paths
chapter_id: brownian-motion
title: "Brownian Motion"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Brownian Motion

## Motivation: the limit of random walks

Imagine a particle that takes many small independent steps. As the step size shrinks and the number of steps grows, the particle's position converges to a continuous random path. This limiting process, **Brownian motion**, is the fundamental continuous-time stochastic process. It models diffusion, stock prices, genetic drift, and quantum fluctuations. Its paths are continuous but almost surely nowhere differentiable, making it the canonical example of a process that requires stochastic calculus.

## Definition

A **standard Brownian motion** (or Wiener process) $(B_{t})_{t \\ge 0}$ is a stochastic process satisfying:

1. $B_{0} = 0$.
2. **Independent increments:** for $0 \\le t_{1} < t_{2} < \\dots < t_{k}$, the increments $B_{t_{2}}-B_{t_{1}}, \\dots, B_{t_{k}}-B_{t_{k-1}}$ are independent.
3. **Gaussian increments:** $B_{t} - B_{s} \\sim \\mathcal{N}(0, t-s)$ for $0 \\le s < t$.
4. **Continuous paths:** $t \\mapsto B_{t}(\\omega)$ is continuous for almost every $\\omega$.

**Existence.** The following is the standard construction using the Kolmogorov extension and continuity theorems. The fdds are determined by the increment properties: for $t_{1} < \\dots < t_{k}$, the vector $(B_{t_{1}}, \\dots, B_{t_{k}})$ is jointly Gaussian with mean zero and covariance $\\operatorname{Cov}(B_{t_{i}}, B_{t_{j}}) = \\min(t_{i}, t_{j})$. The Kolmogorov extension theorem constructs a process with these fdds on the product space. A separate modification theorem (Kolmogorov–Chentsov) upgrades to continuous paths.

## Covariance structure

**Theorem 13.3.** For $0 \\le s \\le t$,
$$\\mathbb{E}[B_{s} B_{t}] = \\min(s,t) = s.$$

**Proof.** Write $B_{t} = B_{s} + (B_{t} - B_{s})$. The increment $B_{t} - B_{s}$ is independent of $B_{s}$ and has mean zero. Thus
$$\\mathbb{E}[B_{s} B_{t}] = \\mathbb{E}[B_{s}^{2}] + \\mathbb{E}[B_{s}(B_{t}-B_{s})] = s + 0 = s.$$

The covariance matrix of $(B_{t_{1}}, \\dots, B_{t_{k}})$ is $(\\min(t_{i}, t_{j}))_{i,j}$.

## Path properties

Brownian motion paths are extraordinarily irregular:

**Theorem 13.5 (nowhere differentiability; cited classical result).** Almost surely, $t \\mapsto B_{t}$ is nowhere differentiable.

**Quadratic variation.** For a partition $0 = t_{0} < t_{1} < \\dots < t_{n} = t$ with mesh $\\max_{i} (t_{i} - t_{i-1}) \\to 0$,
$$\\sum_{i=1}^{n} (B_{t_{i}} - B_{t_{i-1}})^{2} \\to t \\quad \\text{in probability}.$$

Along standard nested sequences such as dyadic partitions, convergence also holds almost surely.

**Why this matters.** For a continuously differentiable function $f$, the analogous sum converges to $0$ because $(f(t_{i}) - f(t_{i-1}))^{2} \\approx (f'(t_{i-1}))^{2} (t_{i}-t_{i-1})^{2}$, and summing gives $O(\\max (t_{i}-t_{i-1})) \\to 0$. Brownian motion's nonzero quadratic variation is why the Itô calculus has a second-order correction term.

## Brownian scaling

**Theorem 13.6 (scaling).** For any $c > 0$, the process $(B_{ct})_{t \\ge 0}$ has the same finite-dimensional distributions as $(\\sqrt{c} B_{t})_{t \\ge 0}$.

**Proof.** Both are Gaussian processes with mean zero. Check covariances:
$$\\mathbb{E}[B_{cs} B_{ct}] = \\min(cs, ct) = c \\min(s,t) = \\mathbb{E}[(\\sqrt{c} B_{s})(\\sqrt{c} B_{t})].$$

Since mean and covariance determine a Gaussian process, the fdds agree.

**Interpretation.** Brownian motion spreads like $\\sqrt{\\text{time}}$. After time $t$, the typical displacement is of order $\\sqrt{t}$. This diffusive scaling connects to the functional central limit theorem: if $S_n$ has i.i.d. increments with mean $0$ and finite variance $\\sigma^2$, then the rescaled path $(S_{\\lfloor nt\\rfloor}/\\sqrt n)_{t\\ge0}$ converges in distribution (in the usual Skorokhod path space) to $(\\sigma B_t)_{t\\ge0}$.

## Worked example: hitting probabilities for Brownian motion

Let $a, b > 0$ and let $T = \\inf\\{t \\ge 0 : B_{t} \\in \\{-a, b\\}\\}$. Find $\\mathbb{P}(B_{T} = b)$.

The time $T$ is generally unbounded, so apply optional stopping first at the bounded times $T\\wedge n$. Since $B_t^2-t$ is a martingale,
$$\\mathbb{E}[B_{T \\wedge n}^{2}] = \\mathbb{E}[T \\wedge n].$$
Continuity gives $|B_{T\\wedge n}|\\le\\max(a,b)$, so monotone convergence yields $\\mathbb E[T]\\le\\max(a,b)^2<\\infty$ and in particular $T<\\infty$ almost surely. Optional stopping for $B_t$ at $T\\wedge n$ gives $\\mathbb E[B_{T\\wedge n}]=0$. The same bound permits dominated convergence, hence $\\mathbb E[B_T]=0$. If $p=\\mathbb P(B_T=b)$, then

$$0=bp-a(1-p),$$

so $p=a/(a+b)$.

## Worked example: computing $\\operatorname{Var}(B_{t}-B_{s})$

For $0 \\le s \\le t$,
$$\\operatorname{Var}(B_{t} - B_{s}) = \\mathbb{E}[(B_{t} - B_{s})^{2}] = \\mathbb{E}[B_{t}^{2}] - 2\\mathbb{E}[B_{s}B_{t}] + \\mathbb{E}[B_{s}^{2}] = t - 2s + s = t - s.$$

This agrees with the increment law $B_{t} - B_{s} \\sim \\mathcal{N}(0, t-s)$.

## Common errors

**Error 1: Treating $dB_{t}/dt$ as an ordinary derivative.** Brownian paths are almost surely nowhere differentiable. Expressions like $dB_{t}/dt$ have no pointwise meaning.

**Error 2: Ignoring quadratic variation.** In ordinary calculus, $(df)^{2}$ is negligible. In stochastic calculus, $(dB_{t})^{2} = dt$ in the appropriate mean-square sense. This is why Itô's formula has a second-order term.

**Error 3: Applying the chain rule blindly.** For $f(B_{t})$, the ordinary chain rule $df = f'(B_{t}) dB_{t}$ is incorrect. The correct Itô formula includes a $(1/2)f''(B_{t}) dt$ term.


## Preparation and Gaussian conditional laws

This is the L4 continuous-path part of the book. Use the probability book’s Gaussian vectors and convergence chapters and the martingale part here. The Gaussian construction cites the Kolmogorov extension and Kolmogorov–Chentsov theorems; it does not claim that arbitrary consistent marginals automatically yield continuous paths.

For $s<t$, independence of the future increment gives the conditional law
$$
B_t\\mid\\mathcal F_s\\sim N(B_s,t-s).
$$
Thus Brownian motion is Markov for its natural filtration. Its martingale property follows by taking the conditional mean. The square-compensated martingale is proved in Exercise 1, and the exponential martingale in Exercise 3. In each case the relevant finite moments come from the Gaussian law, not from a formal differential symbol.

A finite set of Brownian observations can be generated through independent normal increments whose variances are the time differences. Sampling independent normals of variances equal to the observation times would have the correct marginals but the wrong process covariance. Construction through increments preserves the entire selected finite-dimensional law.

## A full quadratic-variation calculation

Take a deterministic partition of $[0,T]$, and write $\\Delta_i=t_i-t_{i-1}$. Its Brownian increments are independent centred normals with variances $\\Delta_i$. Since a centred normal of variance $v$ has fourth moment $3v^2$, its squared value has variance $2v^2$. Therefore
$$
Q_\\pi=\\sum_i(B_{t_i}-B_{t_{i-1}})^2,\\qquad
EQ_\\pi=T,\\qquad
\\operatorname{Var}(Q_\\pi)=2\\sum_i\\Delta_i^2
\\le2T|\\pi|.
$$
As mesh $|\\pi|\\to0$, this proves $Q_\\pi\\to T$ in L2, and hence in probability. The argument covers arbitrary deterministic partition sequences with shrinking mesh.

For dyadic partitions, $|\\pi_n|=T2^{-n}$. Chebyshev gives
$$
P(|Q_{\\pi_n}-T|>\\varepsilon)\\le
2T^2\\,2^{-n}/\\varepsilon^2.
$$
The probabilities are summable. Borel–Cantelli applied to each reciprocal integer tolerance proves almost-sure convergence along that whole dyadic sequence. The conclusion is tied to the specified sequence; it is not an assertion of simultaneous almost-sure convergence along every possible random partition.

If a continuous path had finite variation $V$ on $[0,T]$, its squared-increment sum would be at most the largest absolute increment times $V$. Uniform continuity would force that product to zero. On the probability-one event of positive dyadic Brownian quadratic variation, finite variation is therefore impossible. This proves infinite variation on each fixed positive interval. Intersecting over rational intervals gives the corresponding local statement simultaneously.

Infinite variation alone does not prove nowhere differentiability. A continuous function may have infinite total variation while having derivatives at some points. The cited nowhere-differentiability theorem is stronger and requires its own argument.

## Worked example: integrated Brownian displacement

The ordinary time integral $I_T=\\int_0^TB_s\\,ds$ exists pathwise by continuity. It is different from an integral with respect to $dB_s$. Its mean is zero and
$$
EI_T^2=\\int_0^T\\int_0^T\\min(s,t)\\,ds\\,dt=T^3/3.
$$
Finite Gaussian second moments justify the double expectation integral. Riemann sums are Gaussian and converge in L2 to the integral; their limiting characteristic functions therefore identify a centred Gaussian law of variance $T^3/3$.

This describes accumulated position over time. Brownian endpoint variance grows linearly in $T$, while the variance of accumulated position grows cubically. These quantities have different units and answer different questions despite using the same underlying path.

## Worked example: a pinned Gaussian bridge

Fix $T>0$ and define $C_s=B_s-(s/T)B_T$ for $0\\le s\\le T$. This centred Gaussian process is zero at both endpoints, and
$$
\\operatorname{Cov}(C_s,C_t)=\\min(s,t)-st/T.
$$
Also $\\operatorname{Cov}(C_s,B_T)=s-(s/T)T=0$. Every finite vector of bridge values is jointly Gaussian with $B_T$, so it is independent of that endpoint. Thus
$$
B_s=(s/T)B_T+C_s
$$
separates the endpoint contribution from an independent random bridge.

Conditioning on $B_T=y$ gives mean $(s/T)y$ and variance $s(1-s/T)$. At halfway time this is $T/4$, despite the endpoints being known. The path is not determined by its endpoints; the reflection chapter uses this remaining uncertainty to compute hidden barrier crossings.

## Conditional statements and pathwise statements

For each fixed $t$, the event $B_t=0$ has probability zero when $t>0$. This does not imply that the path never returns to zero, because the possible return time is random and ranges over uncountably many times. Likewise, equal finite-dimensional laws identify a process law on its specified path sigma-algebra, rather than a pointwise equality between two separately sampled processes.

The scaling theorem can be strengthened from finite-dimensional equality to equality of continuous-path laws, since continuous paths are determined by their rational-time values. It still does not assert $B_{ct}=\\sqrt c B_t$ on the original realised path. Distributional symmetries should not be converted into simultaneous pathwise identities.

## Practice exercises

### Exercise 1
<a id="brownian-motion-ex-1"></a>

Show that $B_{t}^{2} - t$ is a martingale with respect to the natural filtration of Brownian motion.

<details>
<summary>Hint 1</summary>

Expand the future square around the present value.

Separate the increment after time s from the information already observed.

</details>

<details>
<summary>Hint 2</summary>

Condition on the present filtration; the future increment has mean zero and second moment t−s.

Use its centred Gaussian law and its stated variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $s < t$,
$$\\mathbb{E}[B_{t}^{2} \\mid \\mathcal{F}_{s}] = \\mathbb{E}[(B_{s} + (B_{t}-B_{s}))^{2} \\mid \\mathcal{F}_{s}] = B_{s}^{2} + 2B_{s}\\mathbb{E}[B_{t}-B_{s}] + \\mathbb{E}[(B_{t}-B_{s})^{2}] = B_{s}^{2} + (t-s).$$
Therefore $\\mathbb{E}[B_{t}^{2} - t \\mid \\mathcal{F}_{s}] = B_{s}^{2} - s$.

</details>

### Exercise 2
<a id="brownian-motion-ex-2"></a>

For an equal partition of $[0,t]$ into $n$ pieces, find the expectation of $\\sum_{i=1}^{n} (B_{t_{i}} - B_{t_{i-1}})^{2}$.

<details>
<summary>Hint 1</summary>

Compute the second moment of one centred normal increment.

Separate the increment after time s from the information already observed.

</details>

<details>
<summary>Hint 2</summary>

Each interval has length t/n, and expectation is additive even before using independence.

Use its centred Gaussian law and its stated variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each increment $B_{t_{i}} - B_{t_{i-1}}$ has variance $t/n$ and mean zero. Thus $\\mathbb{E}[(B_{t_{i}} - B_{t_{i-1}})^{2}] = t/n$. Summing $n$ terms gives $\\mathbb{E}[\\sum_{i=1}^{n} (B_{t_{i}} - B_{t_{i-1}})^{2}] = t$, consistent with the quadratic-variation limit.

</details>

### Exercise 3
<a id="brownian-motion-ex-3"></a>

Let $M_{t} = e^{\\theta B_{t} - \\theta^{2}t/2}$ for $\\theta \\in \\mathbb{R}$. Show that $(M_{t})_{t \\ge 0}$ is a martingale.

<details>
<summary>Hint 1</summary>

Factor the exponential at time s out of the conditional expectation.

Separate the increment after time s from the information already observed.

</details>

<details>
<summary>Hint 2</summary>

Apply the normal moment-generating function to the independent future increment.

Use its centred Gaussian law and its stated variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $s < t$, since $B_{t} - B_{s} \\sim \\mathcal{N}(0, t-s)$ is independent of $\\mathcal{F}_{s}$,
$$\\mathbb{E}[M_{t} \\mid \\mathcal{F}_{s}] = M_{s} \\mathbb{E}[e^{\\theta(B_{t}-B_{s}) - \\theta^{2}(t-s)/2}] = M_{s} e^{-\\theta^{2}(t-s)/2} e^{\\theta^{2}(t-s)/2} = M_{s}.$$

This is the **exponential martingale** of Brownian motion.

</details>

### Exercise 4
<a id="brownian-motion-ex-4"></a>

Find the covariance of $B_3-B_1$ and $B_4-B_2$.

<details>
<summary>Hint 1</summary>

Split into increments on disjoint unit intervals.
</details>
<details>
<summary>Hint 2</summary>

Only the overlap from two to three contributes.
</details>
<details>
<summary>Solution</summary>

The shared increment $B_3-B_2$ has variance one, and every other cross term has zero covariance by independent increments. Thus the covariance is one. Overlapping increments are not independent, even though increments on disjoint intervals are.
</details>

### Exercise 5
<a id="brownian-motion-ex-5"></a>

Find the conditional mean and variance of B_5 given the Brownian history through time two.

<details>
<summary>Hint 1</summary>

Separate the future increment.
</details>
<details>
<summary>Hint 2</summary>

It has variance three.
</details>
<details>
<summary>Solution</summary>

The conditional law is $N(B_2,3)$. Its mean is the observed $B_2$ and its variance is three. Conditioning on an even larger sigma-algebra containing future information could change this law, so the filtration is part of the statement.
</details>

### Exercise 6
<a id="brownian-motion-ex-6"></a>

Compute the variance of the dyadic quadratic-variation sum on [0,T] at level n.

<details>
<summary>Hint 1</summary>

Each squared normal increment has variance twice its variance squared.
</details>
<details>
<summary>Hint 2</summary>

There are 2^n equal intervals.
</details>
<details>
<summary>Solution</summary>

The variance is $2\\cdot2^n(T/2^n)^2=2T^2 2^{-n}$. This summable sequence of probability-error bounds yields almost-sure convergence along the dyadic partitions after Chebyshev and Borel–Cantelli.
</details>

### Exercise 7
<a id="brownian-motion-ex-7"></a>

For the bridge on [0,4], calculate its variance at time one and its covariance between times one and three.

<details>
<summary>Hint 1</summary>

Use min(s,t)-st/T.
</details>
<details>
<summary>Hint 2</summary>

The fixed final endpoint removes some covariance.
</details>
<details>
<summary>Solution</summary>

The variance at one is $1-1/4=3/4$. The covariance between one and three is $1-3/4=1/4$. Both differ from the unconditioned Brownian values. A bridge has correlated increments and must not be treated as a fresh Brownian motion.
</details>

### Exercise 8
<a id="brownian-motion-ex-8"></a>

Determine the mean and variance of the time integral of B_s over [0,2].

<details>
<summary>Hint 1</summary>

Integrate the covariance over a square.
</details>
<details>
<summary>Hint 2</summary>

The variance is T cubed over three.
</details>
<details>
<summary>Solution</summary>

The mean is zero and variance is $8/3$. The integral is an ordinary pathwise time integral with a Gaussian law. It is not $\\int_0^2 1\\,dB_s$, whose value is $B_2$ and whose variance is two.
</details>

### Exercise 9
<a id="brownian-motion-ex-9"></a>

Does Brownian scaling imply B_4=2 B_1 on the same sample path?

<details>
<summary>Hint 1</summary>

Compare covariance if that identity held.
</details>
<details>
<summary>Hint 2</summary>

Its actual covariance with B_1 is one.
</details>
<details>
<summary>Solution</summary>

No. The variables have the same marginal distribution, but $\\operatorname{Cov}(B_4,B_1)=1$, whereas the proposed identity would give covariance two. Scaling is equality of suitable process laws after rescaling, not a pathwise identity using the same times of one trajectory.
</details>

### Exercise 10
<a id="brownian-motion-ex-10"></a>

Why does nonzero quadratic variation rule out finite variation for a continuous Brownian path?

<details>
<summary>Hint 1</summary>

Use uniform continuity on a compact interval.
</details>
<details>
<summary>Hint 2</summary>

Bound squared increments by maximum increment times absolute increments.
</details>
<details>
<summary>Solution</summary>

For finite total variation V, the quadratic sum is at most V times the largest absolute increment, tending to zero as mesh shrinks. Brownian dyadic sums instead tend almost surely to the positive horizon. Thus a Brownian path cannot have finite variation there. The argument does not alone prove nowhere differentiability.
</details>

## Looking backward and forward

Brownian motion is the continuous-time limit of random walks and the building block of stochastic calculus. Its paths are continuous but highly irregular, requiring new mathematical tools.

In Chapter 10, "Martingales and Stopping," we developed discrete-time martingale theory. Brownian motion is the canonical continuous-time martingale, and many of the same principles apply: optional stopping, convergence, and the relationship between quadratic variation and variance.

In Chapter 15, "The Ito Integral," we will define the Itô integral and derive Itô's formula. The quadratic variation of Brownian motion is the key ingredient that distinguishes stochastic calculus from ordinary calculus.

## Preparation and the information carried by a path

This is the L4 continuous-path part of the book. Gaussian vectors, conditional expectation, convergence in probability and $L^2$, and elementary martingale inequalities are needed. Measure-theoretic existence results are identified explicitly. The preceding discrete-time chapters do not require this entire preparation. Fix a probability space and the completed, right-continuous natural filtration of Brownian motion. When another filtration is used, we require that $B$ remain Brownian relative to it: increments after $s$ must be independent of the whole $\\mathcal F_s$, not merely of earlier Brownian coordinates. Revealing $B_1$ at time zero destroys that property.

**Definition 13.1 (three kinds of convergence).** A sequence $Y_n$ converges to $Y$ in $L^2$ when $\\mathbb E|Y_n-Y|^2\\to0$, in probability when $\\mathbb P(|Y_n-Y|>\\varepsilon)\\to0$ for every positive $\\varepsilon$, and almost surely when the realised sequence converges outside one null event. The first implies the second by Markov's inequality. Neither implication supplies almost-sure convergence of the entire sequence without more information. A path property has a single exceptional event for all times to which the statement applies.

The existence paragraph above invokes two advanced results, not a proof of them. The Kolmogorov extension theorem applies to consistent Gaussian laws on real coordinate spaces. The Kolmogorov–Chentsov theorem supplies a continuous modification: Brownian increments satisfy $\\mathbb E|B_t-B_s|^{2m}=c_m|t-s|^m$, so its moment criterion applies on bounded intervals for $m>1$. Taking a countable intersection over integer horizons gives continuity on every bounded interval simultaneously. We select that version throughout. The nowhere-differentiability theorem is also imported. Positive quadratic variation alone proves neither failure of the derivative at every time nor its failure at a specified time.

A modification agrees at each fixed time almost surely. Indistinguishable processes agree at every time outside one common null event. If two continuous processes are modifications, they are indistinguishable: intersect equality events over nonnegative rational times, then pass to all real times by continuity. Without continuity this fails. A process with a single spike at a continuously distributed random time can be zero at every fixed time almost surely while each realised path has a spike. Specifying a continuous version therefore matters for formulas involving the whole path.

## Gaussian laws from independent increments

**Proposition 13.2.** Every finite vector of Brownian coordinates is jointly Gaussian, with covariance kernel $\\min(s,t)$.

For $0<t_1<\\cdots<t_k$, put $G_j=B_{t_j}-B_{t_{j-1}}$, where $t_0=0$. These are independent centred normal variables of variances $t_j-t_{j-1}$. Each $B_{t_i}$ is their partial sum. Every linear combination of coordinates is consequently a linear combination of independent normals, and hence normal. This establishes joint Gaussianity rather than inferring it from marginal normality alone. Repeated times repeat coordinates; time zero is deterministic. The earlier covariance proof completes the claim.

The matrix $K_{ij}=\\min(t_i,t_j)$ is positive semidefinite because
\\[
 \\sum_{i,j}a_i a_jK_{ij}
 =\\int_0^\\infty\\left(\\sum_i a_i1_{[0,t_i]}(u)\\right)^2\\,du\\ge0
\\]
for all real $a_i$. It is therefore an admissible Gaussian covariance. Marginalising a Gaussian vector deletes covariance rows and columns, so these laws are consistent. This verifies hypotheses for the extension theorem but does not replace the separate continuity theorem.

For disjoint intervals $[s,t]$ and $[u,v]$ with $t\\le u$, four covariance terms give
\\[
 \\operatorname{Cov}(B_t-B_s,B_v-B_u)=t-t-s+s=0.
\\]
Joint Gaussianity turns zero covariance into independence. A non-Gaussian model need not share that implication. Brownian values themselves are not independent: for $0<s<t$ their covariance is $s$. Independent new noise is compatible with strongly associated accumulated positions.

**Worked example 13.3 (Gaussian prediction).** Given $B_2=x$, the identity $B_5=B_2+G$, with $G\\sim N(0,3)$ independent of $\\mathcal F_2$, gives conditional law $N(x,3)$. Its mean is $x$ and its variance three. This is a regular conditional kernel, not a ratio involving the zero probability of $\\{B_2=x\\}$. Unconditionally total variance is $2+3=5$, as required. Observing the position removes past uncertainty while leaving the future increment's variance.

## Quadratic variation with declared partitions

**Theorem 13.4.** Fix $T>0$. For a deterministic finite partition $\\pi$ of $[0,T]$, put $h_i=t_i-t_{i-1}$ and $Q_\\pi=\\sum_i(B_{t_i}-B_{t_{i-1}})^2$. Then
\\[
 \\mathbb E Q_\\pi=T,\\qquad
 \\mathbb E|Q_\\pi-T|^2=2\\sum_i h_i^2\\le2T|\\pi|.
\\]
Thus every deterministic partition sequence of vanishing mesh gives convergence to $T$ in $L^2$ and in probability.

A centred normal increment of variance $h$ has fourth moment $3h^2$, so its square has variance $2h^2$. Distinct squared increments are independent. Summing their means and variances proves both identities. Finally $h_i^2\\le|\\pi|h_i$. Arbitrarily selecting partitions after inspecting an entire path is a different problem; this proof does not justify it.

On dyadic partitions of this fixed interval, Chebyshev gives
\\[
 \\mathbb P(|Q_n-T|>\\varepsilon)\\le2T^2\\,2^{-n}/\\varepsilon^2.
\\]
The series is finite. Borel–Cantelli, then an intersection over positive rational $\\varepsilon$, proves almost-sure convergence along the full dyadic sequence. Nestedness alone was not the estimate: summability of the variance bound was. Intersecting additionally over countably many horizons is legitimate; simply intersecting over every real horizon is not.

**Worked example 13.4 (a finite accuracy bound).** For $T=2$ and $n$ equal pieces, quadratic variation has mean two and variance $8/n$, hence root-mean-square error $\\sqrt{8/n}$. For the Chebyshev upper bound on error exceeding $0.2$ to be at most $0.1$, require $8/(0.04n)\\le0.1$, or $n\\ge2000$. This is sufficient, not sharp. It does not assert that exactly ten per cent of paths fail. It separates finite random error from the deterministic limit, and it supplies no automatic inference guarantee for noisy or dependent measurements.

## What positive quadratic variation rules out

If a continuous deterministic path $x$ has finite total variation $V$ on $[0,T]$, then
\\[
 \\sum_i(\\Delta_i x)^2\\le\\max_i|\\Delta_i x|\\sum_i|\\Delta_i x|
 \\le\\max_i|\\Delta_i x|V.
\\]
Uniform continuity makes the last expression tend to zero as mesh decreases. On the probability-one event where a Brownian path is continuous and its dyadic quadratic variation tends to $T>0$, finite variation is impossible. Apply the same proof to rational subintervals and take a countable intersection; every nonempty interval contains such a subinterval, so variation is infinite on every nonempty interval. This is enough to explain why bounded-variation integration cannot provide the general Brownian chain rule, without pretending to prove nowhere differentiability.

The notation $(dB_t)^2=dt$ in the earlier common-errors discussion abbreviates a quadratic-variation limit. A Brownian differential is not a real number whose square equals a time increment. Over one interval the squared increment is random and need not equal its length. What concentrates is the sum of many squared increments. The mean-square assertion concerns those sums, not an equality between infinitesimals. This distinction is essential when higher-order terms are estimated rigorously.

## Scaling, shifts and equality in law

For fixed $c>0$, set $W_t=c^{-1/2}B_{ct}$. Paths are continuous, the initial value is zero, and disjoint increments remain independent. An increment over $[s,t]$ has variance $c^{-1}c(t-s)=t-s$ and zero mean, hence the standard normal increment law. Thus $W$ is Brownian. This checks the whole definition and complements the earlier covariance proof. It does not assert the pathwise identity $B_{ct}(\\omega)=\\sqrt cB_t(\\omega)$ in the original realisation.

For deterministic $s$, the process $B_{s+t}-B_s$ is Brownian and independent of $\\mathcal F_s$. Replacing $s$ by a random time requires the strong Markov theorem and a stopping-time hypothesis, developed next. A last time selected using future observations may fail that hypothesis. Information is therefore part of a process model even before stochastic integration begins.

**Worked example 13.5 (a pinned path).** Define $\\beta_t=B_t-tB_1$ on $[0,1]$. It is continuous and Gaussian, with
\\[
 \\mathbb E[\\beta_s\\beta_t]=\\min(s,t)-st,\\qquad
 \\operatorname{Var}(\\beta_t)=t(1-t).
\\]
Expand the four products to obtain the covariance: the two cross terms are each $-st$, and the final term is $+st$. Both endpoints vanish. This Brownian bridge is not Brownian motion; terminal pinning couples increments and changes their variances. Also $\\operatorname{Cov}(\\beta_s,B_1)=s-s=0$. Joint Gaussianity shows every finite bridge vector is independent of $B_1$, identifying its law as the regular Gaussian conditional law given a terminal value of zero. No division by a point probability is involved.

## Stopping calculations and their scope

The original two-boundary example first stops at bounded times and then takes limits. It uses continuous-time bounded optional sampling for square-integrable Brownian martingales, an advanced imported theorem here. It does not invoke an unrestricted optional-stopping rule for arbitrary unbounded times. The bound on the stopped spatial values and the resulting integrability of the exit time justify the later limits. Assuming the terminal expectation before establishing those controls would be circular.

The same argument gives the exact mean exit time. Dominated convergence for $B_{T\\wedge n}^2$ and monotone convergence for $T\\wedge n$ imply $\\mathbb ET=\\mathbb EB_T^2$. With upper-exit probability $a/(a+b)$, this is
\\[
 b^2\\frac a{a+b}+a^2\\frac b{a+b}=ab.
\\]
For $(-a,a)$ the mean exit time is $a^2$, in agreement with diffusive scaling. A single upper barrier on an unbounded half-line has a different answer: its hitting time is almost surely finite but has infinite mean. The next chapter derives that distinction explicitly.

It is equally important to separate the random-walk limit mentioned in the original motivation from these exact Brownian calculations. Donsker's functional central limit theorem, for iid mean-zero finite-variance increments and the stated path-space convention, is an imported advanced theorem. A one-time central limit theorem alone does not prove it: tightness must control oscillations between the inspected times. A plotted discretisation supplies neither tightness nor a path-regularity theorem.

## Further exercises with full support

<a id="brownian-motion-ex-11"></a>
### Exercise 13.11: increment covariance

For $0\\le s<t\\le u<v$, derive the covariance of $B_t-B_s$ and $B_v-B_u$, and explain independence.

<details>
<summary>Hint 1</summary>

Expand into four coordinate covariances.

</details>

<details>
<summary>Hint 2</summary>

Use the minimum kernel, then invoke joint Gaussianity.

</details>

<details>
<summary>Solution</summary>

The covariance is $\\min(t,v)-\\min(t,u)-\\min(s,v)+\\min(s,u)=t-t-s+s=0$. Both increments belong to a joint Gaussian vector, whose characteristic function factors when their covariance is zero. They are independent, including the touching-endpoint case $t=u$. Zero covariance without joint Gaussianity would not establish independence.

</details>

<a id="brownian-motion-ex-12"></a>
### Exercise 13.12: a nonuniform partition

A deterministic partition of $[0,T]$ has lengths $h_i>0$ summing to $T$. Find the mean-square error of its Brownian quadratic-variation sum and a mesh bound.

<details>
<summary>Hint 1</summary>

Use the fourth normal moment for each increment square.

</details>

<details>
<summary>Hint 2</summary>

Independent squares have additive variances.

</details>

<details>
<summary>Solution</summary>

For $G_i\\sim N(0,h_i)$, $\\mathbb EG_i^2=h_i$ and $\\operatorname{Var}(G_i^2)=3h_i^2-h_i^2=2h_i^2$. The sum has mean $T$, so its mean-square error is $2\\sum_i h_i^2\\le2T\\max_i h_i$. Shrinking deterministic meshes therefore give $L^2$ and probability convergence. This does not cover arbitrary path-selected partitions.

</details>

<a id="brownian-motion-ex-13"></a>
### Exercise 13.13: dyadic convergence

Prove quadratic variation along dyadic partitions of a fixed $[0,T]$ converges almost surely.

<details>
<summary>Hint 1</summary>

Apply Chebyshev with the dyadic variance.

</details>

<details>
<summary>Hint 2</summary>

Use Borel–Cantelli at reciprocal-integer tolerances.

</details>

<details>
<summary>Solution</summary>

For every integer $k\\ge1$, $\\sum_n\\mathbb P(|Q_n-T|>1/k)\\le2T^2k^2\\sum_n2^{-n}<\\infty$. Borel–Cantelli gives only finitely many failures for each $k$, almost surely. The countable intersection over $k$ still has probability one, and on it $Q_n\\to T$. No intersection over uncountably many tolerances or arbitrary partitions is required.

</details>

<a id="brownian-motion-ex-14"></a>
### Exercise 13.14: scaling exit times

Let $\\tau_a=\\inf\\{t:|B_t|=a\\}$, $a>0$. Show $\\tau_a\\stackrel d=a^2\\tau_1$ and compute its expectation.

<details>
<summary>Hint 1</summary>

Rescale both space and time.

</details>

<details>
<summary>Hint 2</summary>

Relate the exit event for B to that for the rescaled standard Brownian motion.

</details>

<details>
<summary>Solution</summary>

The process $W_t=B_{a^2t}/a$ is Brownian. Its exit from $(-1,1)$ occurs at $\\tau_a/a^2$ under this construction, proving the law identity. The stopped-square calculation gives $\\mathbb E\\tau_1=1$, hence $\\mathbb E\\tau_a=a^2$. The law identity does not equate two separately defined hitting times on the same unscaled path.

</details>

<a id="brownian-motion-ex-15"></a>
### Exercise 13.15: bridge increments

For $\\beta_t=B_t-tB_1$, compute $\\operatorname{Cov}(\\beta_{1/4},\\beta_{3/4}-\\beta_{1/2})$ and decide independence.

<details>
<summary>Hint 1</summary>

Apply the bridge covariance kernel twice.

</details>

<details>
<summary>Hint 2</summary>

Disjoint intervals do not guarantee independent bridge increments.

</details>

<details>
<summary>Solution</summary>

The covariance is $(1/4-3/16)-(1/4-1/8)=1/16-1/8=-1/16$. Nonzero covariance proves dependence. The terminal constraint couples the increments, even though all variables are built from a Brownian path. Joint Gaussianity would establish independence only if the covariance vanished.

</details>

<a id="brownian-motion-ex-16"></a>
### Exercise 13.16: continuous versions

Prove two continuous modifications of the same process are indistinguishable on $[0,T]$.

<details>
<summary>Hint 1</summary>

Enforce equality at all rational times first.

</details>

<details>
<summary>Hint 2</summary>

Use continuity to fill the gaps on a common probability-one event.

</details>

<details>
<summary>Solution</summary>

Intersect the equality events over rational times in the interval and the two continuity events. This countable intersection has probability one. For any real $t$ on this event, approximate $t$ by rational times; equality there and continuity give equality at $t$. This holds simultaneously for all $t$, proving indistinguishability. Continuity is the step that avoids an invalid uncountable intersection.

</details>

<a id="brownian-motion-ex-17"></a>
### Exercise 13.17: finite variation

Prove a continuous finite-variation path has zero quadratic variation along every vanishing-mesh partition sequence, and apply this to Brownian motion.

<details>
<summary>Hint 1</summary>

Use the largest absolute increment as a common bound.

</details>

<details>
<summary>Hint 2</summary>

Combine finite total variation with uniform continuity.

</details>

<details>
<summary>Solution</summary>

If total variation is $V<\\infty$, then $\\sum(\\Delta x)^2\\le V\\max|\\Delta x|$. Uniform continuity makes the maximum tend to zero. On the Brownian probability-one event where dyadic quadratic variation on $[0,T]$ tends to $T>0$, finite variation is impossible. This proof does not by itself establish nowhere differentiability.

</details>

## Sources

The original definitions, covariance and scaling proofs, worked examples and three exercises remain. Euler's real-analysis chapter “Stochastic Processes and Brownian Motion”, in modules/textbooks/real_analysis/chapters/42-stochastic-processes.qmd, is a reference connection rather than copied text.

For advanced theorem scope see Pitman and Yor, [A Guide to Brownian Motion and Related Stochastic Processes](https://www.stat.berkeley.edu/~aldous/205B/pitman_yor_guide_bm.pdf), sections 3–5, and Lawler, [Stochastic Calculus: An Introduction with Applications](https://www.math.uchicago.edu/~lawler/finbook.pdf), sections 2.4–2.10. Extension, continuity modification, nowhere differentiability, bounded continuous-time optional sampling and the functional central limit theorem are identified imports; the elementary calculations above have their displayed proofs.


## Summary

Brownian motion combines Gaussian independent increments with a continuous version. Covariances determine its finite Gaussian laws, and deterministic partition calculations prove quadratic variation with explicit L2 error and a dyadic almost-sure conclusion. Gaussian bridges retain uncertainty between pinned endpoints. Ordinary time integrals and stochastic integrals are different objects. Scaling, fixed-time null events and pathwise claims require their correct probability interpretation. Continue to reflection and the Ito integral for barrier events and stochastic accumulation.
`;export{e as default};