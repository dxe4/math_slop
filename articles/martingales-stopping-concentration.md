
# Martingales, Stopping, and Concentration

**Before reading.** Read [Outer Measure and Measurability](../books/measure-and-integration/outer-measure-and-measurability.md) and [Specifying a Process](../books/stochastic-processes-paths/specifying-a-process.md). These are preparation for the ideas used below.

Martingales formalize a process with no predictable drift relative to declared information. They connect fair games, sequential evidence, randomized algorithms, concentration inequalities, harmonic functions, and stochastic integration. Their power comes with a recurring warning: information and integrability hypotheses are part of every result.

This deep dive assumes conditional expectation and discrete stochastic processes. It proves bounded optional stopping and a bounded-difference concentration result, then maps the limits of those tools.

## 1. Filtrations and the martingale condition

A filtration $(F_{n})$ is an increasing family of sigma-algebras. A process $M_{n}$ is adapted if $M_{n}$ is known at time $n$. It is a martingale when each $M_{n}$ is integrable and

$E[M_{n+1}|F_{n}]=M_{n}$ almost surely.

The condition depends on information. A card-game payoff can be a martingale for an observer who sees only past draws and not for an observer who secretly knows the deck order.

For independent mean-zero increments $\xi_{k}$, the partial sums $S_{n}=\sum_{k\le n}\xi_{k}$ form a martingale in their natural filtration. If $E[\xi_{k}^{2}]=\sigma^{2}$, then

$$M_{n}=S_{n}^{2}-n\sigma^{2}$$

is another. Expand $(S_{n}+\xi_{n+1})^{2}$ and condition: the cross term vanishes and the square contributes $\sigma^{2}$.

## 2. Martingale transforms: a fair strategy stays fair

Let $H_{n}$ be a bounded predictable process, meaning $H_{n}$ is known at time $n-1$. If $M_{n}$ is a martingale, define gain

$$G_{n}=\sum_{k=1}^{n} H_{k}(M_{k}-M_{k-1})$$

Then $G_{n}$ is a martingale. Conditional on $F_{n-1}$, the stake $H_{n}$ is fixed and the next martingale increment has mean zero.

Predictability forbids choosing a stake after seeing the next outcome. Boundedness can be relaxed under integrability conditions, but deleting it casually enables undefined expectations.

## 3. Stopping times

A random time $T$ is a stopping time when $\{T\le n\}\in F_{n}$ for every $n$. At time $n$ one can decide whether stopping has occurred without future data. First hitting times are stopping times. “The last time the walk visits zero” is generally not: recognizing the last visit requires knowing the future.

The stopped process $M_{n\land T}$ is a martingale under standard integrability conditions. Its increment is

$$M_{n\land T}-M_{(n-1)\land T}=1_{T\ge n}(M_{n}-M_{n-1})$$

The indicator is $F_{n-1}$-measurable, so its conditional expected increment is zero.

## 4. Bounded optional stopping

**Theorem.** If $M_{n}$ is a martingale and $T\le N$ almost surely for a fixed $N$, then $E[M_{T}]=E[M_{0}]$.

**Proof.** Telescope with stopped increments:

$$M_{T}=M_{0}+\sum_{n=1}^{N} 1_{T\ge n}(M_{n}-M_{n-1})$$

Each summand is integrable. Using the tower property and predictability,

$$E[1_{T\ge n}(M_{n}-M_{n-1})]$$

$$=E[1_{T\ge n} E[M_{n}-M_{n-1}|F_{n-1}]]=0$$

Summing proves the claim.

There are many extensions: bounded martingales, uniformly integrable stopped families, or controlled increments with finite expected stopping time. They are different theorems. “Stopping cannot change expectation” without a condition is false.

## 5. Gambler’s ruin from a martingale


**Worked example.**
Let a fair walk start at integer $i$ between 0 and $N$, and let $T$ be its first hit of either boundary. Apply bounded stopping first to $T\land n$:

$$E[S_{T\land n}]=i$$

Because the stopped positions lie in $[0,N]$ and $T<\infty$ almost surely, dominated convergence gives $E[S_{T}]=i$. If $p=P(S_{T}=N)$, then

$E[S_{T}]=Np+0(1-p)=i$, so $p=i/N$.

To find duration, use $S_{n}^{2}-n$. Again stop at $T\land n$, then justify the limit. Since $S_{T}^{2}$ is bounded and the finite-state absorption time has finite expectation,

$$E[S_{T}^{2}-T]=i^{2}$$

Now $E[S_{T}^{2}]=N^{2}(i/N)=Ni$, hence $E[T]=i(N-i)$.

The limit justification is doing real work. Applying optional stopping directly to an unbounded $T$ without it would be incomplete.

## 6. A failed doubling strategy

Bet one unit on a fair coin. After each loss, double the next stake and stop at the first win. If a win occurs after $k$ losses, the net gain is one unit. Since a win eventually occurs with probability one, why is this not free money?

The required stake is unbounded, total possible loss is unbounded, and the stopping time/stopped gains are not uniformly integrable in the needed way. With finite capital or table limits there is positive probability of ruin. The strategy changes the distribution of rare losses, not the underlying expectation theorem.

This counterexample is a useful audit: whenever optional stopping seems to manufacture value, inspect bounds, integrability, and the event of never stopping.

## 7. Exponential supermartingales

Suppose martingale differences $D_{k}=M_{k}-M_{k-1}$ satisfy $E[D_{k}|F_{k-1}]=0$ and $|D_{k}|\le c_{k}$. A conditional version of Hoeffding’s lemma gives

$$E[e^{\theta D_{k}}|F_{k-1}]\le e^{\theta^{2}c_{k}^{2}/2}$$

Therefore

$$Z_{n}=\exp(\theta(M_{n}-M_{0})-(\theta^{2}/2)\sum_{k\le n}c_{k}^{2})$$

is a nonnegative supermartingale: its next conditional expectation is at most its present value.

Markov’s inequality gives, for $t>0$,

$$P(M_{n}-M_{0}\ge t)\le \exp(-\theta t+(\theta^{2}/2)\sum c_{k}^{2})$$

Optimizing at $\theta=t/\sum c_{k}^{2}$ yields the Azuma–Hoeffding bound

$$P(M_{n}-M_{0}\ge t)\le \exp(-t^{2}/(2\sum c_{k}^{2}))$$

Apply the same argument to $-M$ for a two-sided bound. The result controls deviations under bounded increments; heavy-tailed increments require other tools.

## 8. Doob martingales and bounded differences

Let independent inputs $X₁,\ldots,X_{n}$ determine an output $Y=f(X₁,\ldots,X_{n})$. Reveal inputs sequentially and define

$$M_{k}=E[Y|X₁,\ldots,X_{k}]$$

Then $(M_{k})$ is a martingale, with $M_{0}=E[Y]$ and $M_{n}=Y$. If changing input $k$ while holding others fixed can alter $f$ by at most $c_{k}$, the martingale increments can be controlled, leading to McDiarmid’s bounded-difference inequality.

Example: the number of occupied bins after throwing independent balls changes by at most one when one ball’s destination changes. Concentration follows even though occupancy indicators are dependent.

## 9. Continuous-time orientation

Brownian motion $B_{t}$ is a martingale. So is $B_{t}^{2}-t$. For each real $\theta$,

$$\exp(\theta B_{t}-\theta^{2}t/2)$$

is a martingale. The correction cancels the Gaussian moment-generating growth. Stopping this exponential martingale, under justified localization and integrability, gives boundary-crossing bounds.

In continuous time, local martingales need not be true martingales. A localizing sequence makes each stopped process a martingale, but expectations can still fall in the limit. Stochastic-calculus arguments must distinguish these categories.

## Worked exercises

### 1. Predictable stake

<a id="deep-dive-martingales-stopping-concentration-ex-1"></a>

**Exercise 1.**

Why may $H_{n}$ depend on $M_{n-1}$ but not on $M_{n}-M_{n-1}$?


<details>
<summary>Hint 1</summary>

Predictability means a stake is chosen from information available before the next increment.
</details>
<details>
<summary>Hint 2</summary>

Compare dependence on the previous value with dependence on the as-yet-unseen increment.
</details>
<details>
<summary>Solution</summary>

The stake must be known before the next increment. Dependence on the realized increment would use future information and invalidate pulling $H_{n}$ outside the conditional expectation.

</details>

### 2. A non-stopping time

<a id="deep-dive-martingales-stopping-concentration-ex-2"></a>

**Exercise 2.**

For a finite horizon 10, is “the last time at zero before time 10” a stopping time?


<details>
<summary>Hint 1</summary>

A stopping-time decision at time t must use only observations up to t.
</details>
<details>
<summary>Hint 2</summary>

Ask whether another visit to zero could occur after t but before the fixed horizon.
</details>
<details>
<summary>Solution</summary>

Generally no. At an earlier time one cannot know whether another zero occurs before 10 without seeing the future.

</details>

### 3. Ruin probability

A fair walk starts at 4 between walls 0 and 10. Find upper-wall probability and expected duration.

**Answer.** Probability $4/10=0.4$; expected time $4(10-4)=24$ steps.

### 4. Azuma scale

If 100 martingale increments satisfy $|D_{k}|\le 1$, bound $P(M_{100}-M_{0}\ge 20)$.

**Answer.** $\sum c_{k}^{2}=100$, so the bound is $\exp(-20^{2}/(2\cdot 100))=e^{-2}\approx0.1353$. It is an upper bound, not an exact tail.

### 5. Constant mean is insufficient

Does $E[X_{n}]=0$ for every $n$ make $X_{n}$ a martingale?

**Answer.** No. A martingale requires adaptation, integrability, and the conditional identity. A process can have zero marginal means while its past predicts its next value.

## Onward ladder

Next topics include submartingale inequalities, martingale convergence, uniform integrability, predictable quadratic variation, compensators, continuous local martingales, semimartingales, and stochastic integration. Recheck every optional-stopping or concentration result against its exact filtration, tail, and increment assumptions.

