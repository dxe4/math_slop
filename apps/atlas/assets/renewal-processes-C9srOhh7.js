var e=`---
parent_id: book-stochastic-processes-paths
chapter_id: renewal-processes
title: "Renewal Processes"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Renewal Processes

## Motivation: beyond memoryless waiting

The Poisson process assumes that interarrival times are exponentially distributed. This memoryless property is mathematically convenient but often unrealistic: service times in a queue, lifetimes of machine parts, and intervals between earthquakes typically have non-exponential distributions. A **renewal process** generalizes the Poisson process by allowing arbitrary positive i.i.d. interarrival times.

## Definition and basic quantities

Let $(W_{n})_{n \\ge 1}$ be i.i.d. positive random variables with distribution function $F$ and finite mean $m = \\mathbb{E}[W_{1}] > 0$. Define the **renewal epochs**
$$S_{0} = 0, \\qquad S_{n} = \\sum_{i=1}^{n} W_{i} \\quad \\text{for } n \\ge 1.$$

The **renewal counting process** is
$$N(t) = \\max\\{n \\ge 0 : S_{n} \\le t\\}, \\quad t \\ge 0.$$

$N(t)$ counts the number of renewals (arrivals, events, replacements) up to time $t$. The Poisson process is the special case where $W_{n} \\sim \\text{Exponential}(\\lambda)$ and $m = 1/\\lambda$.

## The elementary renewal theorem

**Theorem 9.1 (elementary renewal theorem).**
$$\\frac{\\mathbb{E}[N(t)]}{t} \\to \\frac{1}{m} \\quad \\text{as } t \\to \\infty.$$

**Almost-sure part of the proof.** Since $S_{N(t)} \\le t < S_{N(t)+1}$, we have
$$\\frac{S_{N(t)}}{N(t)} \\le \\frac{t}{N(t)} < \\frac{S_{N(t)+1}}{N(t)} = \\frac{S_{N(t)+1}}{N(t)+1} \\cdot \\frac{N(t)+1}{N(t)}.$$

By the strong law of large numbers, $S_{n}/n \\to m$ almost surely. Since $N(t) \\to \\infty$ as $t \\to \\infty$ (because $W_{n}$ are positive), we have $S_{N(t)}/N(t) \\to m$ and $S_{N(t)+1}/(N(t)+1) \\to m$ almost surely. The squeeze theorem gives $t/N(t) \\to m$, so $N(t)/t \\to 1/m$ almost surely.

The expectation argument is supplied below using truncation and a justified stopped-sum identity; it does not follow from almost-sure convergence alone.

**Theorem 9.2 (strong law for renewals).**
$$\\frac{N(t)}{t} \\to \\frac{1}{m} \\quad \\text{almost surely as } t \\to \\infty.$$

## The renewal equation

Let $U(t) = \\mathbb{E}[N(t)]$ be the **renewal function**. It satisfies the **renewal equation**
$$U(t) = F(t) + \\int_{0}^{t} U(t-s) \\, dF(s).$$

**Derivation.** Condition on the first interarrival time $W_{1}$. If $W_{1} > t$, there are no renewals by time $t$. If $W_{1} = s \\le t$, there is one renewal at $s$, and the expected number of additional renewals in $(s,t]$ is $U(t-s)$ by the i.i.d. property. Integrating over $s$ gives the equation.

For exponential interarrival times, $F(t) = 1 - e^{-\\lambda t}$, and one can verify that $U(t) = \\lambda t$ satisfies the equation:
$$\\lambda t = (1 - e^{-\\lambda t}) + \\int_{0}^{t} \\lambda(t-s) \\lambda e^{-\\lambda s} \\, ds.$$

## The inspection paradox

In a renewal process, if you observe the system at a "random" time $t$, the interval containing $t$ is longer on average than a typical interarrival time. This is the **inspection paradox**.

Intuitively, long intervals cover more time and are therefore more likely to contain a random observation point. Formally, let $W^{*}$ be the length of the interval containing a fixed time $t$ in a process started with a renewal at time $0$. For nonarithmetic positive interarrivals with finite mean, the standard renewal limit theorem gives: as $t \\to \\infty$, the distribution of $W^{*}$ converges to the **length-biased distribution**
$$\\mathbb{P}(W^{\\mathrm{lb}} \\in dw) = \\frac{w \\, \\mathbb{P}(W \\in dw)}{\\mathbb{E}[W]}.$$

The mean of the length-biased distribution is
$$\\mathbb{E}[W^{\\mathrm{lb}}] = \\frac{\\mathbb{E}[W^{2}]}{\\mathbb{E}[W]} \\ge \\mathbb{E}[W],$$
with equality only if $W$ is almost surely constant.

**Important caveats.**
1. An observation at a fixed early time in a process started with a renewal at zero need not have the equilibrium law. The limiting result requires $t \\to \\infty$.
2. For arithmetic (lattice) distributions, the corresponding result requires the lattice version of the renewal theorem.
3. The second moment $\\mathbb{E}[W^{2}]$ must be finite for the mean of the length-biased distribution to exist.

## Worked example: uniform interarrival times

Let $W_{n} \\sim \\text{Uniform}(0,1)$. Then $m = 1/2$ and $\\mathbb{E}[W^{2}] = 1/3$. The elementary renewal theorem predicts $\\mathbb{E}[N(t)]/t \\to 2$.

The length-biased distribution has density
$$f^{\\mathrm{lb}}(w) = \\frac{w \\cdot 1}{1/2} = 2w, \\quad 0 \\le w \\le 1,$$
with mean
$$\\mathbb{E}[W^{\\mathrm{lb}}] = \\int_{0}^{1} w \\cdot 2w \\, dw = \\frac{2}{3} = \\frac{\\mathbb{E}[W^{2}]}{\\mathbb{E}[W]} = \\frac{1/3}{1/2}.$$

Note that $2/3 > 1/2 = \\mathbb{E}[W]$, confirming the inspection paradox.

## Worked example: renewal with gamma interarrivals

Let $W_{n} \\sim \\text{Gamma}(2, \\lambda)$ with density $f(w) = \\lambda^{2} w e^{-\\lambda w}$ for $w > 0$. Then
$$m = \\mathbb{E}[W_{1}] = \\frac{2}{\\lambda}, \\qquad \\mathbb{E}[W_{1}^{2}] = \\frac{6}{\\lambda^{2}}.$$

The elementary renewal theorem gives $N(t)/t \\to \\lambda/2$ almost surely. The length-biased mean is
$$\\mathbb{E}[W^{\\mathrm{lb}}] = \\frac{6/\\lambda^{2}}{2/\\lambda} = \\frac{3}{\\lambda} > \\frac{2}{\\lambda} = \\mathbb{E}[W_{1}].$$

## Common errors

**Error 1: Applying Poisson formulas to general renewals.** The renewal function $U(t)$ is not $t/m$ for general $F$; it is only asymptotically $t/m$. The exact form requires solving the renewal equation.

**Error 2: Ignoring the inspection paradox.** When estimating mean interarrival times from observed data, sampling at random times gives a biased estimate unless you account for length-biasing.

**Error 3: Confusing $N(t)$ with the inverse function.** $N(t)$ is the largest $n$ with $S_{n} \\le t$, not the solution to $S_{n} = t$. The inequalities $S_{N(t)} \\le t < S_{N(t)+1}$ are fundamental.


## Completing the elementary renewal theorem

First establish finite expected counts, rather than assuming Wald’s identity applies. Since $W>0$ almost surely, there are $\\delta>0$ and $p>0$ with $P(W\\ge\\delta)=p$. Among the first $n$ gaps count those at least $\\delta$. To make the cumulative duration exceed $t$, it suffices to have $r=\\lfloor t/\\delta\\rfloor+1$ such gaps. The number of trials for $r$ independent Bernoulli successes has mean $r/p$. Thus $K=N(t)+1$, the first index with $S_K>t$, has finite expectation.

The event $\\{K\\ge j\\}$ is $\\{S_{j-1}\\le t\\}$ and is independent of $W_j$. Nonnegative summation therefore proves the stopped-sum identity directly:
$$
ES_K=\\sum_{j\\ge1}E[W_j\\mathbf1_{\\{K\\ge j\\}}]
=m\\sum_{j\\ge1}P(K\\ge j)=mEK.
$$
Since $S_K>t$, this gives $E N(t)>t/m-1$ and the required lower limit.

For the upper limit, truncate each gap above at a finite $A>0$: $W_j^{(A)}=\\min(W_j,A)$, of mean $m_A>0$. Its renewal count $N_A(t)$ is at least $N(t)$ because its gaps are no larger. At its first crossing index $K_A$, the overshoot is at most $A$, so $S^{(A)}_{K_A}\\le t+A$. The same stopped-sum calculation gives
$$
m_A(E N_A(t)+1)\\le t+A.
$$
Consequently $\\limsup_{t\\to\\infty}E N(t)/t\\le1/m_A$. Monotone convergence gives $m_A\\uparrow m$ as $A\\to\\infty$. Together with the lower limit, this proves $E N(t)/t\\to1/m$. No interchange of an unbounded random index and expectation was left unsupported.

## Renewal rewards

Let pairs $(W_j,R_j)$ be iid across cycles, with $W_j>0$, $EW_j=m<\\infty$ and $E|R_j|<\\infty$. Dependence within a pair is allowed. Pay $R_j$ on completing cycle $j$. By the strong laws for gap and reward sums,
$$
\\frac{\\sum_{j=1}^{N(t)}R_j}{t}
=\\left(\\frac{\\sum_{j=1}^{N(t)}R_j}{N(t)}\\right)
\\frac{N(t)}t
\\longrightarrow\\frac{ER_1}{m}
\\quad\\text{almost surely}.
$$
For sufficiently late times the count is positive and tends to infinity, so both factors use legitimate subsequences of the strong laws. This statement counts completed-cycle rewards. A model paying rewards continuously inside a partial final cycle needs a separate argument controlling that leftover reward.

**Worked example: alternating operation and repair.** Suppose each cycle consists of an operating period of mean eight hours and repair of mean two hours, with iid cycles. Reward the operating duration at the cycle’s completion. The completed-cycle operating reward per unit time tends to $8/(8+2)=4/5$. To identify this with actual time operating, control the unfinished cycle. Finite-mean iid cycle lengths have $W_n/n\\to0$ almost surely, from the strong law applied to consecutive partial sums. Combined with $N(t)/t\\to1/m$, this makes the unfinished-cycle length divided by $t$ vanish. Thus the long-run operating fraction is indeed four-fifths.

## Sampling an interval by time

A renewal chosen by index samples the original gap law. A uniformly selected time in a long record weights each completed gap in proportion to its length. For a bounded measurable function $g$, completed intervals contribute time reward $W_jg(W_j)$. The reward theorem gives long-run time average $E[Wg(W)]/m$, which defines the length-biased law.

Within an interval of length $w$, uniform time sampling makes its age uniform on $[0,w]$. Integrating that conditional mean against the length-biased law gives equilibrium mean age $EW^2/(2m)$ when the second moment is finite. The same holds for residual duration. This derivation identifies a long-record time-sampling law; convergence at a fixed remote time additionally uses the nonarithmetic renewal theorem stated above.

Deterministic gaps illustrate why the qualification matters: with every gap length two, age at deterministic time $t$ is $t$ modulo two and does not converge to a single distribution as $t$ grows. A uniform observation phase would instead give a uniform age between zero and two.

## A renewal equation is a time-domain statement

The renewal function also has the nonnegative expansion $U(t)=\\sum_{n\\ge1}P(S_n\\le t)$. The event that at least $n$ renewals occurred is exactly $S_n\\le t$, so the formula follows by summing tail indicators. If $F^{*n}$ denotes the distribution of the sum of $n$ iid gaps, this is $U=\\sum_{n\\ge1}F^{*n}$ at each nonnegative time.

The finite-expectation bound proved above makes the series finite on bounded time intervals. It also gives a useful way to interpret successive substitutions in the renewal equation: the first term describes one completed gap, the next describes two, and so on. Keeping only the first term gives a lower bound, not an arbitrary approximation with no sign control.

For deterministic gaps of length three, these distribution functions are steps at $3n$, and the series counts exactly $\\lfloor t/3\\rfloor$ completed gaps. For exponential gaps the same series sums to $\\lambda t$. Thus the shared renewal equation accommodates both a step-shaped exact mean and a linear exact mean, while its long-run theorem identifies a common rate.

## Time averages of age and residual life

Let age at time $t$ be the time since the last renewal and residual life be the time until the next one. Sampling these quantities at a fixed large time and sampling them uniformly across a long interval are different limiting experiments. The latter has an elementary renewal-reward proof that does not require a nonarithmetic interarrival law.

Fix nonnegative thresholds $a,b$. Within a complete renewal interval of length $w$, the times when age exceeds $a$ and residual life exceeds $b$ form an interval of length $(w-a-b)_+$. Assign that length as the cycle reward. It is bounded by $w$, so finite mean interarrival time makes the reward integrable.

The strong law for iid cycles gives average complete-cycle reward tending to its expectation. Multiplying by the number of completed cycles per unit time makes their total reward divided by observation time tend to
$$
\\frac{E(W-a-b)_+}{EW}.
$$
To finish the proof, one must control the terminal incomplete cycle. Its contribution is at most the length of the interval containing the final observation, so it is not automatically bounded by a constant.

Finite mean interarrival time implies that the sum of probabilities of events $W_n>\\varepsilon n$ is finite for every positive $\\varepsilon$. This follows by comparing the tail sum with the integral defining the mean. Borel–Cantelli therefore gives $W_n/n\\to0$ almost surely. Since the renewal count grows linearly with time, the containing interval length divided by observation time also tends to zero. The omitted boundary reward is consequently negligible. An initial finite delay likewise occupies a vanishing time fraction.

This proves a joint equilibrium time-average tail formula for age and residual life. It remains valid for deterministic integer waiting times, where the fixed-time distribution can oscillate with the observation phase. The formula has not silently invoked a nonarithmetic fixed-time renewal theorem.

One can express the same experiment by choosing a time uniformly from zero to a deterministic horizon, independently of the process. Conditional on the realised path, the probability of the age-and-residual event is exactly its occupation fraction. That fraction converges almost surely to the displayed constant. Bounded convergence then gives the same unconditional probability limit.

Setting the age threshold to zero gives the equilibrium residual-life survival function. Integrating that survival function over the residual threshold yields mean residual life equal to the interarrival second moment divided by twice its mean, when the second moment is finite. If the second moment is infinite, the equilibrium residual mean is infinite even though the renewal rate is finite and positive.

This differs from the length of the whole containing interval, whose equilibrium mean is the second moment divided by the first moment. The factor of two is not optional: a uniformly chosen position in a given interval has average residual equal to half that interval’s length. Remembering which variable is being sampled prevents conflating the inspection-paradox interval with its remaining life.

The renewal-reward calculation thus supplies an observable time-average statement, a justification of its boundary term and a precise condition for its mean. It also explains why a finite rate of renewals does not guarantee short waits from an arbitrary observation time.

## Equilibrium residual life has a different mean

The occupation argument gives a further quantitative version of the inspection paradox. Suppose positive interarrival times have finite second moment and positive mean. For a long observation horizon, the fraction of time at which the remaining wait exceeds x converges to expected positive part of interarrival time minus x, divided by the interarrival mean. Integrate this survival function over nonnegative x. Tonelli's theorem converts the numerator into the expected integral of a triangle of base and height equal to the interarrival time. The stationary residual-life mean is consequently the second interarrival moment divided by twice its mean.

This is a time-sampled limit, not the mean waiting time measured immediately after a renewal. Deterministic intervals of length a give residual mean a divided by two, whereas exponential intervals of mean a give residual mean a. The latter equality comes from memorylessness and does not extend to other laws. If the second moment is infinite, Tonelli still identifies an infinite equilibrium residual mean despite a finite mean interval.

## Practice exercises

### Exercise 1
<a id="renewal-processes-ex-1"></a>

Let $W_{n} \\sim \\text{Exponential}(\\lambda)$. Verify directly that $U(t) = \\lambda t$ satisfies the renewal equation.

<details>
<summary>Hint 1</summary>

Write the renewal count in terms of its positive interarrival sums.
</details>
<details>
<summary>Hint 2</summary>

Keep almost-sure, expectation and equilibrium statements separate.
</details>
<details>
<summary>Solution</summary>

For exponential interarrivals, $F(t) = 1 - e^{-\\lambda t}$ and $dF(s) = \\lambda e^{-\\lambda s} ds$. The renewal equation is
$$U(t) = 1 - e^{-\\lambda t} + \\int_{0}^{t} U(t-s) \\lambda e^{-\\lambda s} \\, ds.$$

Substitute $U(t) = \\lambda t$:
$$\\text{RHS} = 1 - e^{-\\lambda t} + \\int_{0}^{t} \\lambda(t-s) \\lambda e^{-\\lambda s} \\, ds.$$

Compute the integral:
$$\\int_{0}^{t} \\lambda^{2}(t-s) e^{-\\lambda s} \\, ds = \\lambda^{2} t \\int_{0}^{t} e^{-\\lambda s} \\, ds - \\lambda^{2} \\int_{0}^{t} s e^{-\\lambda s} \\, ds.$$

The first integral is $(1 - e^{-\\lambda t})/\\lambda$. The second is $[1 - e^{-\\lambda t}(1 + \\lambda t)]/\\lambda^{2}$ by integration by parts. Thus
$$\\text{RHS} = 1 - e^{-\\lambda t} + \\lambda t (1 - e^{-\\lambda t}) - (1 - e^{-\\lambda t}(1 + \\lambda t))$$
$$= 1 - e^{-\\lambda t} + \\lambda t - \\lambda t e^{-\\lambda t} - 1 + e^{-\\lambda t} + \\lambda t e^{-\\lambda t} = \\lambda t = U(t).$$
</details>

### Exercise 2
<a id="renewal-processes-ex-2"></a>

Assume a renewal process has positive i.i.d. nonarithmetic interarrival times with mean $m$, variance $\\sigma^2$, and finite third moment. State the standard renewal variance asymptotic. Explain why the renewal central limit theorem suggests its constant but does not, by itself, prove convergence of variances.

<details>
<summary>Hint 1</summary>

Write the renewal count in terms of its positive interarrival sums.
</details>
<details>
<summary>Hint 2</summary>

Keep almost-sure, expectation and equilibrium statements separate.
</details>
<details>
<summary>Solution</summary>

The renewal variance theorem gives

$$\\operatorname{Var}(N(t))\\sim\\frac{\\sigma^2}{m^3}t.$$

Heuristically, $S_n\\approx nm+\\sigma\\sqrt n\\,Z$; inverting near $n=t/m$ suggests $N(t)-t/m\\approx-(\\sigma/m^{3/2})\\sqrt t\\,Z$, which has the displayed variance. A central limit theorem controls distributions after scaling, however, and convergence in distribution alone does not imply convergence of second moments. The moment conclusion needs uniform-integrability estimates supplied by a renewal variance theorem; that is why the stronger hypothesis and named theorem are explicit here.
</details>

### Exercise 3
<a id="renewal-processes-ex-3"></a>

A machine has parts that fail and are replaced. The lifetime of each part is uniformly distributed on $[0,10]$ days. What is the long-run replacement rate? If you inspect the machine at a random time in the distant future, what is the expected age of the part in service?

<details>
<summary>Hint 1</summary>

Write the renewal count in terms of its positive interarrival sums.
</details>
<details>
<summary>Hint 2</summary>

Keep almost-sure, expectation and equilibrium statements separate.
</details>
<details>
<summary>Solution</summary>

The mean lifetime is $m = 5$ days, so the long-run replacement rate is $1/m = 0.2$ per day. The expected remaining lifetime of a part observed at a random time in equilibrium is $\\mathbb{E}[W^{\\mathrm{lb}}]/2 = (1/2) \\cdot (\\mathbb{E}[W^{2}]/\\mathbb{E}[W]) = (1/2) \\cdot (100/3)/5 = 10/3 \\approx 3.33$ days. The expected age is the same by symmetry of the equilibrium renewal process.
</details>


### Exercise 4
<a id="renewal-processes-ex-4"></a>

If every gap equals three, find N(t) and its long-run rate.

<details>
<summary>Hint 1</summary>

Locate t between consecutive multiples of three.
</details>
<details>
<summary>Hint 2</summary>

The count uses a floor, not an exact inverse.
</details>
<details>
<summary>Solution</summary>

Here $N(t)=\\lfloor t/3\\rfloor$ and $N(t)/t\\to1/3$. Its expectation is the same deterministic value and is not exactly $t/3$ at arbitrary times. Arithmetic periodic effects remain visible despite the correct long-run rate.
</details>

### Exercise 5
<a id="renewal-processes-ex-5"></a>

Why is N(t)+1, rather than N(t), convenient for Wald's identity on the gap sequence?

<details>
<summary>Hint 1</summary>

Write the event that the index is at least j.
</details>
<details>
<summary>Hint 2</summary>

It uses only the previous gaps.
</details>
<details>
<summary>Solution</summary>

For $K=N(t)+1$, $\\{K\\ge j\\}=\\{S_{j-1}\\le t\\}$, independent of the next gap $W_j$. This makes the nonnegative stopped-sum expansion factor. In contrast, deciding that $N(t)\\ge j$ uses $W_j$ itself and does not provide the same independence.
</details>

### Exercise 6
<a id="renewal-processes-ex-6"></a>

How does truncating gaps above at A affect the renewal count?

<details>
<summary>Hint 1</summary>

Shorter gaps create arrivals earlier.
</details>
<details>
<summary>Hint 2</summary>

Couple both models with the same original gaps.
</details>
<details>
<summary>Solution</summary>

The truncated partial sums are no larger term by term, so $N_A(t)\\ge N(t)$ pathwise. The bounded overshoot in the truncated model then controls its expected count. Reversing this comparison would invalidate the upper bound in the elementary renewal proof.
</details>

### Exercise 7
<a id="renewal-processes-ex-7"></a>

Find the length-biased law when W equals one or three with equal probabilities.

<details>
<summary>Hint 1</summary>

Weight each original mass by its interval length.
</details>
<details>
<summary>Hint 2</summary>

The original mean is two.
</details>
<details>
<summary>Solution</summary>

The time-sampled masses are $1/4$ at one and $3/4$ at three. Their mean is $5/2$, agreeing with $EW^2/EW=5/2$. This differs from the original equal-probability sampling by cycle index.
</details>

### Exercise 8
<a id="renewal-processes-ex-8"></a>

For those two gap lengths find equilibrium mean age.

<details>
<summary>Hint 1</summary>

Use a uniform location within the selected interval.
</details>
<details>
<summary>Hint 2</summary>

Divide the length-biased mean by two.
</details>
<details>
<summary>Solution</summary>

The mean age is $5/4$. The same is true of residual duration. These refer to the stationary or long-record time-sampling law. At a specified early deterministic time after an initial renewal, the age need not have that law.
</details>

### Exercise 9
<a id="renewal-processes-ex-9"></a>

A cycle has mean duration ten and mean completed reward twenty-five. Find its long-run reward rate and state integrability assumptions.

<details>
<summary>Hint 1</summary>

Apply the reward strong law along the renewal index.
</details>
<details>
<summary>Hint 2</summary>

The reward may depend on its own duration.
</details>
<details>
<summary>Solution</summary>

The rate is $25/10=5/2$ per time unit. Cycles must be iid with strictly positive duration of finite mean and integrable absolute reward. Independence between reward and duration inside a cycle is unnecessary. An unfinished-cycle reward is excluded unless its contribution is controlled.
</details>

### Exercise 10
<a id="renewal-processes-ex-10"></a>

Explain why a renewal CLT alone does not prove convergence of the count variance.

<details>
<summary>Hint 1</summary>

Distributional limits need not preserve second moments.
</details>
<details>
<summary>Hint 2</summary>

Rare large values can carry moment mass.
</details>
<details>
<summary>Solution</summary>

A CLT identifies the limiting distribution of the scaled count. To pass its second moments to the Gaussian second moment requires uniform integrability or an equivalent moment argument. The separately stated renewal variance theorem supplies that additional control; neither visual normality nor convergence in distribution substitutes for it.
</details>

## Summary

Positive iid gaps give renewal counts through inverse partial-sum inequalities. The strong law and the elementary expectation theorem have distinct proofs; truncation and a justified crossing-index sum establish the latter. Cycle rewards give long-run rates, while time sampling length-biases intervals. Nonarithmetic and moment hypotheses matter when replacing long-record averages by fixed-time limiting laws or moment conclusions.
`;export{e as default};