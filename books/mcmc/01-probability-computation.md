# 01. Why MCMC

## Learning goals and prerequisites

This chapter needs only elementary probability, sums, integrals, and algebra. By its end, you should be able to name the probability distribution being studied, name a numerical question about it, and distinguish the uncertainty *in that distribution* from uncertainty caused by computing with a finite number of draws. You will calculate one target exactly, check that a small Markov chain preserves another, and see why the number of simulated states alone is a poor measure of accuracy. Later chapters develop the probability, algorithms, and diagnostics that this first map leaves open.

## 1. Questions that require averaging

Suppose a component has an unknown failure probability $\theta$. An engineer may want $\Pr(\theta>0.02\mid\text{test data})$, rather than a single best guess for $\theta$. A physicist may want the mean energy of a material at equilibrium. A planner may want the expected loss of a proposed action under uncertain future demand. These sound different, but each asks for an average of a function $f$ under a specified probability distribution $\pi$:

$$
\mu_f=\mathbb E_\pi[f(X)].
$$

For the engineer, $f(\theta)$ is the indicator of $\theta>0.02$ and $\pi$ is a posterior distribution conditional on data. For the physicist, $f$ is an energy function and $\pi$ is an equilibrium law. For the planner, $f$ is a loss function with the proposed action held fixed. The symbol $\mu_f$ denotes the answer: a number, not another simulated draw. The same target can support many questions, but the accuracy of a computed answer depends on its particular $f$.

Keep the objects separate. Observed test results are data; $\theta$ is a model parameter; $X$ is a state drawn from a distribution over parameters or physical configurations; $f(X)$ is the quantity recorded from that state. In Bayesian work the posterior itself depends on the model, prior, and observed data. Sampling cannot rescue an incorrect model for those data. This distinction between model construction and computation is central to the broader [Bayesian workflow of Gelman and colleagues](https://arxiv.org/html/2011.01808v1).

## 2. The target and the quantity of interest

For a finite set of states, averaging is an ordinary weighted sum: $\mu_f=\sum_x f(x)\pi(x)$. For a density relative to ordinary volume, it is $\mu_f=\int f(x)\pi(x)\,dx$. We will use $\pi$ for a target distribution or its density and say which interpretation applies. The expectation exists as a finite number when $\sum_x|f(x)|\pi(x)<\infty$, or, in the continuous case, $\int|f(x)|\pi(x)\,dx<\infty$. [Chapter 02](02-probability.md) gives the measure-based version and explains what changes under a transformation.

Often we can calculate only nonnegative *relative weights* $\widetilde\pi(x)$. Their normalizer is

$$
Z=\sum_x\widetilde\pi(x)\quad\text{or}\quad Z=\int\widetilde\pi(x)\,dx,
\qquad \pi(x)=\frac{\widetilde\pi(x)}{Z}.
$$

The requirement $0<Z<\infty$ matters. If it fails, the proportional expression defines no probability distribution. Provided it holds, multiplication of every weight by the same positive constant leaves $\pi$ and every $\mu_f$ unchanged. It changes $Z$, however, so a method that estimates a normalizing constant or compares model evidence cannot simply discard that scale. In Bayesian examples, a likelihood times a prior often supplies $\widetilde\pi$; [Chapter 03](03-bayesian-targets.md) develops this construction and its propriety conditions.

The central computational problem is now sharp: calculate an expectation under $\pi$ when $Z$ and the expectation are too expensive to obtain directly. MCMC is one possible tool for that problem, not its definition.

## 3. Worked example: enumeration before simulation

Let $X$ take values $0,1,2$ with respective unnormalized weights $1,3,2$. The normalizer is $Z=1+3+2=6$, so $\pi=(1/6,1/2,1/3)$. The unique mode is $1$, because it has the greatest probability. But the mean, second moment, and upper-state probability answer different questions:

$$
\mathbb E[X]=\frac{0+3+4}{6}=\frac76,
\qquad \mathbb E[X^2]=\frac{0+3+8}{6}=\frac{11}{6},
\qquad \Pr(X=2)=\frac13.
$$

The variance is $11/6-(7/6)^2=17/36$. In particular, $\mathbb E[X^2]\ne(\mathbb E[X])^2$. Evaluating a nonlinear quantity at the mean discards the spread that the question depends on.

Suppose the action $a$ is a real-valued prediction of $X$ and loss is $(X-a)^2$. Expand around the mean $m=\mathbb E[X]$:

$$
\mathbb E[(X-a)^2]
=\mathbb E[((X-m)+(m-a))^2]
=\operatorname{Var}(X)+(m-a)^2,
$$

because $\mathbb E[X-m]=0$. Thus the least-loss real action is $a=7/6$. If actions are restricted to $0,1,2$, the closest one is $1$. Here the constrained action happens to equal the mode; that coincidence is a property of this loss and these numbers, not a general rule. A different loss could select another action. Nor does the mode alone give $\Pr(X=2)$ or $\mathbb E[X^2]$.

Optimization remains useful. A mode can locate a high-density region or initialize computation. It does not describe how probability mass is distributed over all states. In a continuous distribution, a mode is a *density maximum*; the probability of that single point is usually zero. For a $d$-dimensional standard normal $G$, the density peaks at the origin, while $\mathbb E\|G\|^2=d$ because its $d$ coordinates each have second moment one. This is one reason the geometry of a typical draw can differ from the geometry of a mode; [Chapter 02](02-probability.md) returns to the distinction.

The [chapter figure](figures/01.svg) gives a continuous counterpart: a mixture $0.25N(-2,0.25^2)+0.75N(1,1)$ has mean $0.25(-2)+0.75(1)=0.25$. Its narrow component creates the tallest density peak despite carrying only one quarter of the probability. The curve illustrates a different target from our three-state calculation, with the same distinction between density height and averaged mass.

## 4. Why numerical integration is a choice, not a synonym for MCMC

For three states, enumeration is exact and preferable. Some continuous integrals also have closed forms; one-dimensional numerical quadrature can be highly accurate. A grid with $m$ points in each of $d$ coordinates has $m^d$ points, which soon becomes costly. That count describes a tensor grid, not a theorem that every deterministic integration technique must fail in high dimension. Structure can permit sparse, analytic, or specialized methods.

Another option is to generate independent draws directly from $\pi$. Sometimes this is easy. For a large posterior known only up to a normalizer, it may be hard even when evaluating relative density at a proposed state is feasible. Importance sampling draws from an easier distribution and reweights; it can work brilliantly when its proposal covers the important regions, and fail when important weights are rare. [Chapter 05](05-monte-carlo.md) develops both independent Monte Carlo and importance sampling.

MCMC constructs dependent draws by repeatedly changing a state. Its appeal is that a transition can sometimes use relative density values without knowing $Z$. That fact does not promise efficiency. A transition might barely move, miss a separated region, or cost too much per useful draw. As dimension grows, the target's geometry, the variance of $f$, and the cost of a transition all matter even when a familiar Monte Carlo error formula contains $N^{-1/2}$ with no dimension in its exponent.

There is therefore no useful method ranking without a task and a cost measure. If a one-dimensional integral is cheaply evaluated by quadrature, building a Markov chain adds unnecessary randomness. If exact independent draws are available, their lack of serial correlation makes them a natural benchmark. If only a high-dimensional unnormalized density can be evaluated, a carefully designed chain may make previously inaccessible averages practical. In each case, compare the error for the *same* $f$ at roughly the same computational cost, including density evaluations, gradient calculations, or physical simulation time as appropriate.

## 5. Independent draws set the accuracy benchmark

Assume $X_1,\ldots,X_N$ are independent draws from $\pi$ and $f(X_i)$ has finite variance $\sigma_f^2$. The Monte Carlo estimate is

$$
\widehat\mu_{f,N}=\frac1N\sum_{i=1}^N f(X_i),
\qquad
\operatorname{Var}(\widehat\mu_{f,N})=\frac{\sigma_f^2}{N}.
$$

The variance identity is exact: all off-diagonal covariances vanish. Its standard deviation, $\sigma_f/\sqrt N$, is the *Monte Carlo standard error* (MCSE) when $\sigma_f$ is known. The strong law of large numbers needs only $\mathbb E|f(X)|<\infty$ for the average to approach $\mu_f$ almost surely. Under finite variance, the usual iid central limit theorem additionally gives an approximately normal scaled error for large $N$. Neither result says the error must decrease on every new draw.

For the three-state example with $f(x)=x$, $\sigma_f=\sqrt{17/36}\approx0.6872$. At $N=3600$ independent draws, the exact standard deviation of their mean is $\sqrt{17/(36\cdot3600)}\approx0.01145$. The distribution of $X$ has *not* narrowed: its standard deviation remains $0.6872$. Computation reduces uncertainty about our numerical estimate of the mean; it does not add data to reduce uncertainty about the underlying state.

If instead $f(x)=\mathbf1\{x=2\}$, then $\mu_f=1/3$ and $\sigma_f^2=(1/3)(2/3)=2/9$. Its iid MCSE at $N=3600$ is about $0.00786$. The same set of draws has different numerical accuracy for the mean state and the tail probability. Estimating a much rarer event can be harder still, even though its indicator is bounded. Thus “how many samples?” needs the companion question “for which quantity, and to what tolerance?”

Here $N$ is the number of simulated draws, not the number of observed data points. Four times as many independent draws halves the MCSE at equal per-draw cost and unchanged variance. A better integrator may be worth more than four times the work. [Geyer's lecture notes](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf) frame Monte Carlo error as an accuracy question about averages rather than about how plausible one draw looks.

Usually $\sigma_f$ is unknown and must also be estimated. With independent draws and finite variance, the ordinary sample variance provides a familiar estimate, though it too fluctuates. A displayed “95% interval” formed from an estimated standard error is an approximate repeated-run statement under its assumptions, not a probability guarantee that this particular interval contains the truth. Heavy tails can make the variance nonexistent or the normal approximation poor; rare events can produce a string of zeros that hides the event entirely. Later error calculations must respect those limitations instead of treating a small estimated standard error as an automatic badge of accuracy.

## 6. A Markov chain samples by moving

A Markov chain has the following property: conditional on the entire history, the next state's distribution depends only on the current state. Here we use the same transition rule at every step. On a finite state space, put these conditional probabilities in a row-stochastic matrix $P$: $P_{xy}=\Pr(X_{t+1}=y\mid X_t=x)$. A probability row vector $\pi$ is *invariant* if $\pi P=\pi$. If $X_t$ already has law $\pi$, one more transition leaves its law $\pi$. This says nothing about an individual path staying fixed. Nor does invariance by itself ensure that a chain started elsewhere can visit all relevant states. [Levin and Peres, with Wilmer](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf) develop the finite-chain theory behind those qualifications; [Chapters 07](07-finite-chains.md) and [08](08-convergence.md) take it up here.

### Worked example: one target, persistent draws

Consider states $0,1$ and

$$
P=\begin{pmatrix}0.9&0.1\\0.2&0.8\end{pmatrix}.
$$

Writing the stationary probability of state $1$ as $p$, balance requires $p=0.1(1-p)+0.8p$, hence $p=1/3$. Direct multiplication confirms

$$
(2/3,1/3)P=(2/3,1/3).
$$

For $f(x)=x$, the target mean is $1/3$ and stationary variance is $2/9$. Yet a run of ones often contains several adjacent ones: from state $1$, the chance of another $1$ is $0.8$. That clustering changes the precision of the average. If we start at zero, the first-step law is $(0.9,0.1)$, not $(2/3,1/3)$. More generally, with $X_0=0$,

$$
\Pr(X_t=1)=\frac13(1-0.7^t).
$$

To see this, let $p_t=\Pr(X_t=1)$. The update is $p_{t+1}=0.1+0.7p_t$. Its fixed point is $1/3$, and the deviation from it is multiplied by $0.7$ each step. At $t=0$ the formula gives zero, as it must. This example's two states communicate and it has self-transitions, so its law approaches $\pi$ from either start. That behavior does not follow from invariance alone: the identity matrix leaves *every* distribution invariant but never leaves its starting state.

The initial transient also affects a finite average. If we retain $X_1,\ldots,X_N$ after starting at $X_0=0$, linearity of expectation gives

$$
\mathbb E[\overline X_N]
=\frac13-\frac{0.7(1-0.7^N)}{0.9N}.
$$

The second term is an exact, negative initialization bias in this example. It decays with run length, but its size is governed by the transition's movement rate. Discarding an arbitrary number of early states is not a general cure for slow exploration: a chain that has not reached a relevant mode after a long time may still look settled within the region it found.

## 7. Dependence changes the computation bill

For a stationary sequence $Y_t=f(X_t)$ with finite second moments, write $\gamma_k=\operatorname{Cov}(Y_0,Y_k)$. Counting the $N-k$ pairs of observations separated by lag $k$ gives the exact identity

$$
\operatorname{Var}\!\left(\frac1N\sum_{t=1}^N Y_t\right)
=\frac1N\left[\gamma_0+2\sum_{k=1}^{N-1}\left(1-\frac{k}{N}\right)\gamma_k\right].
$$

This assumes stationarity and only uses covariance algebra; it is not yet a central limit theorem. If $\sum_{k\ge1}|\gamma_k|<\infty$, then $N$ times this variance tends to $\gamma_0+2\sum_{k\ge1}\gamma_k$. A normal approximation to the error requires additional conditions. Positive covariance inflates variance relative to iid draws with the same marginal distribution. Negative covariance can reduce it, so “dependence is bad” is too broad.

For the two-state chain, $f(x)-1/3$ is an eigenfunction of the transition with eigenvalue $0.7$. Indeed, the expected next centered value, given either current state, is $0.7$ times the current centered value. Applying this $k$ times and averaging under stationarity gives $\gamma_k=(2/9)0.7^k$. Hence

$$
\operatorname{Var}(\overline X_N)
=\frac{2}{9N}\left[1+2\sum_{k=1}^{N-1}
\left(1-\frac{k}{N}\right)0.7^k\right].
$$

The limiting multiplier over iid variance is $1+2\sum_{k\ge1}0.7^k=(1+0.7)/(1-0.7)=17/3$. At $N=1000$, the *large-$N$ approximation* to the MCSE is $\sqrt{(2/9)(17/3)/1000}\approx0.0355$; the iid benchmark is $\sqrt{(2/9)/1000}\approx0.0149$. These figures assume stationary initialization for the variance calculation. Starting at zero introduces a separate transient error, visible in $\Pr(X_t=1)$ above.

The ratio suggests an “effective” iid count near $N/(17/3)$ for this particular $f$ and large $N$. It is an interpretation of an asymptotic variance, not a literal number of independent samples hidden in the path. A different $f$ can have different correlations, and estimating the ratio from a short, poorly explored run is itself difficult. [Chapter 13](13-mc-error.md) develops valid MCSE estimation and effective sample size; [Chapter 14](14-diagnostics.md) explains why diagnostics provide evidence about particular failures, never a universal certificate of convergence.

### 7.1 A correct target can still produce an uninformative run

The distinction between a stationary variance formula and the accuracy of a finite run is emphasized in [Geyer's notes, Section 1.6.2](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf). We can make it visible without a complicated target. Slow our two-state chain by using its transition $P$ with probability $\varepsilon$, and otherwise keeping the state. With $I$ the identity matrix and $0<\varepsilon\le1$, the resulting transition is

$$
P_\varepsilon=(1-\varepsilon)I+\varepsilon P
=\begin{pmatrix}1-0.1\varepsilon&0.1\varepsilon\\0.2\varepsilon&1-0.2\varepsilon\end{pmatrix}.
$$

It has exactly the same invariant law because $\pi P_\varepsilon=(1-\varepsilon)\pi+\varepsilon\pi=\pi$. Both states still communicate for every permitted $\varepsilon$. The conditional mean now satisfies $p_{t+1}=0.1\varepsilon+(1-0.3\varepsilon)p_t$, so its deviation from $1/3$ shrinks by $\lambda=1-0.3\varepsilon$ per step. Substituting this $\lambda$ for $0.7$ in the earlier derivations gives

$$
\mathbb E[\overline X_N\mid X_0=0]
=\frac13-\frac{\lambda(1-\lambda^N)}{3N(1-\lambda)},
\qquad
\tau=\frac{1+\lambda}{1-\lambda}.
$$

Here $\tau$ is the limiting stationary variance multiplier, not an exact finite-run error bar. Now set $\varepsilon=0.01$ and retain $N=1000$ transitions after $X_0=0$. The probability of never leaving zero is exactly

$$
\Pr(X_1=\cdots=X_{1000}=0\mid X_0=0)
=(1-0.1\varepsilon)^{1000}=0.999^{1000}\approx0.3677.
$$

On more than a third of such runs, the estimated mean is zero despite a target mean of $1/3$. The ordinary sample variance is also zero; treating these states as independent would report a zero standard error. That is evidence of an uninformative computation, not perfect precision. Even averaged over all runs, the estimate has expectation about $0.2280$ at this budget, owing to initialization. Stationary initialization would remove that bias but would still leave dependence and a substantial chance of a constant trace.

For the slowed chain $\tau\approx665.7$, compared with $17/3\approx5.667$ originally. This comparison describes long-run efficiency at equal cost per recorded transition. It does not justify a normal approximation at $N=1000$: here $\lambda^{1000}\approx0.0496$ and the finite-run corrections remain material. The exact stationary covariance sum from Section 7 still applies with $0.7$ replaced by $\lambda$; it describes a different initialization from the all-zero-start calculation. The example turns “enough iterations” into a question about movement on the available timescale, even for a perfectly proper, elementary target.

## 8. Where the method came from

The [1953 paper by Metropolis, Arianna Rosenbluth, Marshall Rosenbluth, Augusta Teller, and Edward Teller](https://bayes.wustl.edu/Manual/EquationOfState.pdf) studied statistical-physics averages. It describes a ratio-of-integrals problem, acceptance rules for proposed moves, retaining the current state when a proposal is rejected, and a practical tradeoff in choosing move size. [Hastings's 1970 paper](https://academic.oup.com/biomet/article-abstract/57/1/97/284580) presented a broader Markov-chain sampling method. Those papers are landmarks, not an exhaustive history of the underlying ideas.

The modern name *Markov chain Monte Carlo* highlights two pieces: a transition rule produces a Markov chain, and averages along its path approximate expectations. In a Metropolis-type update a ratio of unnormalized target values can cancel $Z$. That cancellation is valuable, but a correct acceptance rule and adequate exploration still need proof and checking; [Chapter 09](09-metropolis-hastings.md) derives the rule for asymmetric proposals. When a move is rejected, the unchanged state counts as the next state. Deleting repeated states would generally change the time average and its target. The physical and Bayesian settings share this computational structure even though their scientific models differ.

## 9. What “exact” leaves unresolved

It helps to distinguish four scalar quantities for a reported expectation. Let $\mu_{\rm science}$ be the ideal quantity for the scientific system, $\mu_{\rm model}$ the expectation under the chosen mathematical model, $\mu_{\rm numeric}$ the expectation under the target actually implemented after any numerical approximation, and $\mu_{\rm kernel}$ the expectation under the transition's invariant law when that law exists and is unique. Let $\widehat\mu_N$ be the finite-run estimate. Then the following is only an accounting identity:

$$
\widehat\mu_N-\mu_{\rm science}
=(\mu_{\rm model}-\mu_{\rm science})
+(\mu_{\rm numeric}-\mu_{\rm model})
+(\mu_{\rm kernel}-\mu_{\rm numeric})
+(\widehat\mu_N-\mu_{\rm kernel}).
$$

It does not assert that the terms are independent, observable, or that their variances add. The first gap can reflect an inadequate likelihood, prior, or physical assumption. The second can come from a discretized differential equation or an approximate likelihood. The third can come from a wrong transition, such as a missing Jacobian or an omitted state region. The final term includes finite-run fluctuation and, when initialization is not stationary, transient bias. Coding mistakes can enter several gaps, depending on what the code changes.

For example, suppose a physical sensor is systematically miscalibrated. Even an exactly sampled posterior under a model that assumes perfect calibration can give a precise answer to the wrong scientific question. Separately, if an inference program replaces an expensive forward model by a coarse numerical approximation, sampling the resulting posterior perfectly still leaves discretization error relative to the intended posterior. Finally, a chain may have the right formal invariant law but stay in one basin for the entire computation. These three outcomes can produce reassuringly smooth traces for different reasons; the remedy depends on which layer failed.

Calling an MCMC kernel *exact-invariant* means that, under stated mathematical and implementation assumptions, its invariant law is the specified target. It does not mean each state is an independent exact draw, nor that a finite run has zero error. Conversely, a biased discretized method might mix fast but target a nearby, rather than identical, law. More iterations can reduce finite-run error under appropriate ergodicity and variance conditions. They cannot generally repair a wrong likelihood, omitted transformation factor, or a transition trapped in one disconnected class. Model checks, algorithm checks, multiple exploratory runs, and estimand-specific MCSE address different pieces; none is a proof that every piece is correct.

## 10. A first reproducible experiment and a route through the book

The standard-library script [ch01.py](examples/ch01.py) prints the exact three-state mean, a seeded iid estimate, and a seeded two-state-chain estimate. It also compares the original and slowed chains at the fixed $N=1000$ budget from Section 7.1, printing their exact finite-run expectations from zero, probabilities of an all-zero run, and stationary theoretical MCSEs. Those stationary MCSEs do not describe the runs initialized at zero. Change the seed and run length, then compare each estimate with its own exact target. Do not compare raw errors from targets with different scales. Predict what quadrupling the iid run length should do to the *spread over repeated runs*, then try several seeds. One longer run can accidentally have a larger absolute error: the square-root rule describes variability across runs, not monotone improvement along one path.

In the browser's independent Monte Carlo lab, hold the integrand frequency $k$ fixed while comparing $N$ with $4N$ draws for the integral of $\sin(k\pi x)$ on $[0,1]$. Use, for example, 500 and 2000 draws, within the lab's 5000-draw maximum. Then repeat with different seeds. Record $k$, the exact integral shown, seed, run length, observed error, and estimated standard error. The lab is a bounded teaching simulation; its plotted finite draws do not prove a limit theorem or validate an MCMC implementation.

<div class="mcmc-lab" data-lab="monte-carlo"></div>

Readers mainly building models can proceed through [probability](02-probability.md), [Bayesian targets](03-bayesian-targets.md), and [workflow](17-workflow.md), returning to sampler theory as needed. Readers interested in algorithm proofs can continue to [independent Monte Carlo](05-monte-carlo.md), [finite chains](07-finite-chains.md), and [Metropolis–Hastings](09-metropolis-hastings.md). Physics applications reappear in [lattice systems](41-physics.md); comparisons among modern methods culminate in the [sampler laboratory](47-benchmark-lab.md). Whatever route you take, begin an experiment by writing down its $\pi$, $f$, seed, work budget, and numerical accuracy goal. Keep scientific uncertainty and computational error on separate lines of your report.

## Exercises

<div class="exercise" id="mcmc-01-probability-computation-ex-1">

1. Multiply every unnormalized weight in the three-state example by $19$. Find the new normalizer and mean. Explain which quantity changed.

<details>
<summary>Solution</summary>

The weights become $(19,57,38)$ and $Z=19+57+38=114$. Dividing by $114$ gives $(1/6,1/2,1/3)$ again, so $\mathbb E[X]=7/6$. Only the scale of the unnormalized weights and their normalizer changed.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-2">

2. Compute $\mathbb E[X^2]$ and $(\mathbb E[X])^2$ in the three-state example. What does their difference measure?

<details>
<summary>Solution</summary>

$\mathbb E[X^2]=(3+8)/6=11/6=66/36$, while $(\mathbb E[X])^2=49/36$. Their difference is $17/36=\operatorname{Var}(X)$. Replacing $X$ by its mean before squaring would lose this variance.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-3">

3. With independent draws, unchanged variance, and equal cost per draw, how should $N$ change to halve an MCSE? Does that reduce uncertainty in the target distribution?

<details>
<summary>Solution</summary>

Because MCSE is $\sigma_f/\sqrt N$, use $4N$ draws. This gives a more precise *numerical average*; it does not change $\pi$ or its uncertainty. Reducing uncertainty in a posterior generally requires more informative data or a changed model, not merely more draws.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-4">

4. Multiply $(2/3,1/3)$ by the two-state $P$, then multiply $(1,0)$ by $P$. Why are the results different?

<details>
<summary>Solution</summary>

The first product is $( (2/3)0.9+(1/3)0.2,\ (2/3)0.1+(1/3)0.8)=(2/3,1/3)$. The second is $(0.9,0.1)$. Invariance concerns a particular *input distribution*, not every starting distribution or an unchanging path.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-5">

5. Let $P$ be the identity matrix on states $0,1$. Show that every distribution is invariant. Could one path started at $0$ estimate the mean under target $(1/2,1/2)$?

<details>
<summary>Solution</summary>

For any row distribution $\nu$, $\nu P=\nu$. But a path started at zero is $0,0,0,\ldots$, so its average for $f(x)=x$ is always zero, while the target mean is $1/2$. The chain cannot reach state one. Invariance without the needed ability to explore the target is insufficient.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-6">

6. Classify each issue: a missing parameter-dependent factor in a likelihood, a chain rarely moving between two modes, and an unusually high average in one otherwise accurate finite run. Give a useful check for each; say when simply running longer helps. What changes if the omitted factor is a positive constant with respect to the parameters?

<details>
<summary>Solution</summary>

A missing parameter-dependent likelihood factor generally changes the implemented target: inspect the probability expression against the scientific data-generating assumptions and check it on simple cases. A positive factor constant in the parameters cancels when normalizing the posterior, although it matters for the normalizing constant and may matter for comparing models. Rare mode switching is an exploration problem: compare dispersed runs, examine mode occupancy and transitions, and consider a better kernel; more iterations help only if the chain can reach both modes on a feasible timescale. A finite random fluctuation is Monte Carlo variability: estimate uncertainty for the particular average, or repeat independent runs. Under valid convergence and variance conditions, a longer run reduces this last source of variability. A favorable diagnostic number alone certifies none of the three issues away.

</details>

</div>

<div class="exercise" id="mcmc-01-probability-computation-ex-7">

7. For $P_\varepsilon$ in Section 7.1, start at $X_0=0$ with $\varepsilon=0.01$. Find the smallest retained length $N$ for which the probability of an all-zero run is at most $0.05$. Would this length guarantee a reliable estimate of the target mean?

<details>
<summary>Solution</summary>

Solve $0.999^N\le0.05$. Because $\log(0.999)<0$, this means $N\ge\log(0.05)/\log(0.999)\approx2994.234$, hence the smallest integer is $2995$. This controls only the probability of never leaving the starting state. A single visit to state one can still leave the occupancy average far from $1/3$; neither repeated movement nor a particular numerical accuracy has been guaranteed. The threshold is a calculation about this known chain, not a general stopping rule.

</details>

</div>

## Key takeaways

An MCMC project begins with a distribution $\pi$ and a function $f$ whose expectation matters. Relative target weights are enough for some samplers, provided they define a proper law. Optimization, integration, and simulation answer different questions. A transition may preserve the right distribution while a finite path remains dependent or insufficiently explored. Report model assumptions, numerical target, transition, run length, and uncertainty for each reported estimand.
