# 21. Dynamic HMC and NUTS

Hamiltonian Monte Carlo needs time to travel, but more travel does not always produce more information. A trajectory can curve back toward its origin after consuming hundreds of gradient evaluations. The No-U-Turn Sampler, NUTS, makes trajectory length part of the transition itself. Its central achievement is combining this decision with a valid rule for selecting the next state.

**Learning goals.** Derive an endpoint turning test; explain why reversible integration does not justify arbitrary stopping; follow binary trajectory expansion; distinguish slice and multinomial selection; and interpret warmup and computational cost.

**Prerequisites.** Review [Hamiltonian Monte Carlo](20-hmc.md), [slice sampling](11-slice.md), and [Metropolis–Hastings](09-metropolis-hastings.md). The discussions of [adaptation](15-adaptation.md) and [Monte Carlo error](13-mc-error.md) will help separate correctness from efficiency.

## 21.1 The duration problem

Let the proper target density on unconstrained Euclidean coordinates be proportional to $e^{-U(q)}$. Introduce momentum $p\sim N(0,M)$, where the constant symmetric positive-definite matrix $M$ is the **momentum covariance**. Then

$$
H(q,p)=U(q)+\frac12p^TM^{-1}p,
\qquad \dot q=M^{-1}p,\qquad \dot p=-\nabla U(q).
$$

Assume the gradient exists where trajectories are constructed and the leapfrog updates are well defined. The algebraic ingredients used below are reversibility and volume preservation of the integrator. These alone do not constitute an ergodicity theorem for every differentiable target.

With fixed step size $\epsilon$ and $L$ integration steps, the nominal duration is $T=L\epsilon$. Small $T$ often means a small displacement. Excessive $T$ can mean repeated travel through already explored regions. Moreover, a duration appropriate in one part of a posterior may be inappropriate elsewhere. Changing the duration based on the current trajectory is therefore attractive.

There are two distinct changes one might make. A dynamic transition can choose its length by a fixed rule involving the evolving trajectory. Once that rule is specified, it defines one Markov kernel. Warmup adaptation instead changes the rule's numerical parameters across iterations. Dynamic lengths can continue after warmup even when step size and mass matrix have been frozen.

### Worked example: a clock with an inconvenient period

Take $U(q)=q^2/2$, $M=1$, and initial state $(q_0,p_0)=(0,1)$. Hamilton's equations give $\ddot q=-q$, hence

$$
q(t)=\sin t,\qquad p(t)=\cos t.
$$

The following values use exact dynamics, so numerical integration error cannot explain the changing usefulness of the endpoints.

| Duration | Position | Momentum | Displacement times final velocity |
|---|---:|---:|---:|
| $\pi/4$ | $0.7071$ | $0.7071$ | $0.5000$ |
| $\pi/2$ | $1$ | $0$ | $0$ |
| $3\pi/4$ | $0.7071$ | $-0.7071$ | $-0.5000$ |
| $2\pi$ | $0$ | $1$ | $0$ |

At $3\pi/4$ the particle is already returning toward its initial position. At $2\pi$ it has traveled an entire orbit and returned. For an arbitrary starting position and newly sampled momentum, a full period still returns the position exactly. Refreshing momentum cannot rescue an algorithm that always integrates this exact full period: its position never changes.

With numerical trajectories, cost grows roughly with $T/\epsilon$, subject to gradient caching and implementation details. Thus the final row would be particularly poor movement per gradient. A turning test tries to detect when further extension loses its geometric purpose. It does not seek the largest possible Euclidean jump at any price.

## 21.2 Deriving an endpoint turning test

Write $q_-$ and $q_+$ for the chronologically earliest and latest positions in a trajectory, and let $\Delta=q_+-q_-$. Fix the left endpoint while extending the right by a positive time $s$. Then

$$
\left.\frac{d}{ds}\frac12\|q(t_++s)-q_-\|^2\right|_{s=0}
=\Delta^TM^{-1}p_+.
$$

To extend the left endpoint backward, use $q(t_--s)$ while fixing $q_+$. The minus sign in the time argument cancels the minus sign in the displacement:

$$
\left.\frac{d}{ds}\frac12\|q_+-q(t_--s)\|^2\right|_{s=0}
=\Delta^TM^{-1}p_-.
$$

A Euclidean endpoint test therefore permits extension while both products are nonnegative. A negative value says that extending that end would locally decrease endpoint separation. With $M=I$, these become the familiar displacement–momentum products.

This calculation specifies the distance being differentiated. If squared distance is instead measured by $\Delta^TA\Delta$ for a fixed symmetric positive-definite $A$, the derivatives of half squared distance become $\Delta^TAM^{-1}p_\pm$. Consequently, formulas involving $p$ or $M^{-1}p$ are not interchangeable without identifying the metric convention.

A U-turn does not require returning to a previous position. Nor does every coordinate need to reverse direction. In two dimensions, a strongly negative contribution in one direction can outweigh a positive contribution in another. The test summarizes movement of the whole vector relative to its endpoints.

The oscillator table examined one end with the other held at its origin. A complete NUTS transition tests a hierarchy of trajectory segments. The first negative product in that table is therefore an illustration of geometry, not a complete prediction of NUTS tree depth.

## 21.3 Why “stop and take the endpoint” needs another argument

Suppose an algorithm integrates forward until its first detected U-turn, proposes the endpoint, and applies $\min(1,e^{-H_{\mathrm{new}}+H_{\mathrm{old}}})$. The fixed-length HMC proof cannot simply be reused.

For a fixed number of leapfrog steps, reversing momentum and applying the same number of steps recovers the starting state. With a state-dependent number, the proposed endpoint may trigger a different stopping time when used as the next starting point. The complete proposal map need not be an involution, even though each individual integration step is reversible.

A useful audit asks: **from the proposed state, which random choices reconstruct the same proposal, and with what probability?** The answer must account for stopping as well as integration. Energy ratios alone do not supply a missing reverse proposal probability.

As a simpler analogy, imagine a reversible walk along numbered sites that stops at the first site satisfying a condition measured relative to its starting point. Changing the starting site changes the condition. Retracing the path remains possible physically, but the algorithm may decline to retrace it. This is the distinction between reversing a path and reversing a sampling procedure.

Dynamic HMC resolves the difficulty by augmenting the construction with a random trajectory and an appropriate state-selection rule. Neither an arbitrary stopping heuristic nor a correct categorical sampler proves the combined kernel correct. The generation and selection mechanisms must fit together.

### An exact counterexample: always select the turning point

The missing argument can cause bias even with perfect integration. Start the standard Gaussian oscillator in stationarity: $q_0$ and the refreshed $p_0$ are independent $N(0,1)$ variables. Consider this deliberately incorrect rule: follow the exact forward trajectory until its first positive-time extremum of position, and return that position. This is the first turning threshold relative to the starting position, apart from the probability-zero case $p_0=0$.

The orbit is a circle with radius $r=\sqrt{q_0^2+p_0^2}$. Motion initially follows the sign of $p_0$, so the selected position is

$$
q_\star=\operatorname{sign}(p_0)\sqrt{q_0^2+p_0^2},
\qquad p_\star=0.
$$

Energy is unchanged; an energy-only acceptance rule would accept with probability one. Yet

$$
\mathbb E[q_\star^2]
=\mathbb E[q_0^2]+\mathbb E[p_0^2]=2,
$$

where the target requires $\mathbb E[q^2]=1$. One transition has already destroyed stationarity. In phase space, the stopped map collapses each semicircle onto its extremum and loses the starting phase; a fixed-time Hamiltonian map does neither. This independently derived example makes concrete the reversibility warning in [Hoffman and Gelman, Section 3.1](https://jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf). It concerns the continuous turning threshold, not a claim that every discretely stopped method has exactly this second moment. NUTS avoids this rule by constructing admissible trajectory components and selecting among them.

## 21.4 The original slice construction

The original NUTS algorithms introduce $u\mid z_0\sim\operatorname{Uniform}(0,e^{-H(z_0)})$, where $z=(q,p)$. A state is slice-eligible when $u\leq e^{-H(z)}$. The simplified algorithm selects uniformly from an admissible candidate set. Admissibility additionally requires that generating the same augmented trajectory and candidate set have equal probabilities when rooted at any candidate. Slice eligibility alone is insufficient. The efficient algorithm retains slice augmentation but uses progressive selection. These distinctions and the candidate-set conditions appear in [Hoffman and Gelman, Sections 3.1.1–3.1.2](https://jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf).

The augmentation itself is easy to check:

$$
\int_0^\infty \mathbf{1}\{0<u<e^{-H(z)}\}\,du=e^{-H(z)}.
$$

Conditioning on $u$ makes the continuous joint density constant over the slice. This explains why eligible candidates can have equal selection weights even when their numerical energies differ. In floating point, draw $V$ uniformly on $(0,1)$ and calculate

$$
\log u=-H(z_0)+\log V.
$$

Compare $\log u$ with $-H(z)$; do not exponentiate a very large energy merely to compare two tiny numbers.

For a concrete eligibility calculation, suppose relative energies are $0,0.4,1.2$ and the slice threshold is $\log u=-0.7$, using the same energy offset throughout. The first two states satisfy the inequality, while the third fails. If both surviving states belong to an admissible component, their within-component probabilities are $1/2$ each. Merely listing these energy values tells us nothing about whether the component satisfies the trajectory-generation conditions.

There are thus two questions for each visited state: does it lie in the slice, and may its component participate in this transition? Keeping separate fields for these questions is a useful implementation discipline. A count of eligible states cannot substitute for a validity flag.

## 21.5 Reading a binary trajectory

Consider a root at time index $0$. Assume all relevant checks pass through three doublings. Choose directions forward, backward, forward. The newly integrated indices are:

| Doubling | Direction | New indices in integration order | Complete chronological indices |
|---|---|---|---|
| 1 | Forward | $1$ | $0,1$ |
| 2 | Backward | $-1,-2$ | $-2,-1,0,1$ |
| 3 | Forward | $2,3,4,5$ | $-2,-1,0,1,2,3,4,5$ |

The visit order is $0,1,-1,-2,2,3,4,5$; the chronological order differs. A reversed integration direction must therefore update the earliest endpoint, not simply the most recently stored array element.

Under this chapter's convention, depth $d$ means $d$ completed doublings starting from one root. The full tree contains $2^d$ states and requires $2^d-1$ new leapfrog steps. Thus depth three means eight states and seven new steps. Software counters can use different conventions, and a partially constructed subtree can terminate early. Always read the definition before converting reported depth to exact work.

A compact subtree summary can retain its two endpoint phase-space states, one sampled representative, a candidate count or total weight, and validity information. Momentum-sum criteria need an accumulated momentum as well. Merging summaries lets a recursive algorithm avoid storing every position.

The representative is a random variable. It summarizes selection probabilities, whereas the endpoints summarize geometric extent. Confusing these roles would make termination depend on whichever interior point happened to win a random selection. The tree's boundaries must remain available independently of its representative.

## 21.6 Recursive validity is part of the algorithm

In the efficient original slice algorithm, an internally invalid newly built subtree cannot replace the retained candidate. A valid new subtree can contribute before the combined outer trajectory triggers termination. Its recursive merges select by eligible counts; its top-level extension uses $\min(1,n_{\mathrm{new}}/n_{\mathrm{old}})$. The order of these operations matters. See [Hoffman and Gelman, Algorithm 3](https://jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf).

To understand why “stop” needs more than one meaning, suppose the currently retained trajectory contains four states. A proposed extension would add another four. If the extension's own two-state child turns back, its recursive construction can report failure before completing all four states. The calling level must honor that report. It cannot reinterpret whatever prefix was computed as an ordinary valid four-state extension.

In a different situation, both children of the extension pass their required checks, and the extension is valid. Combining it with the retained trajectory may then reveal a turn across the larger interval. The decision to stop further growth is distinct from a finding that the newly built subtree was itself invalid. A blanket instruction to discard every last doubling would erase this distinction; a blanket instruction to retain every computed point would erase it in the opposite direction.

These cases explain why a short pseudocode fragment saying “double until a U-turn” is incomplete. A full specification needs the recursion's return values, the ordering of candidate updates, and the treatment of each termination path. The executable example later deliberately isolates selection arithmetic rather than disguising this missing work as a complete sampler.

## 21.7 Multinomial components and progressive updates

Multinomial trajectory sampling assigns weights $w_i=e^{-H(z_i)}$ inside a valid component. A representative can be maintained without storing every state. Betancourt distinguishes an unbiased merge, which selects the new component with probability $W_B/(W_A+W_B)$, from biased progressive extension, which uses $\min(1,W_B/W_A)$. Their roles in dynamic trajectory constructions differ; the final progressively updated representative need not be a categorical draw over the final tree. See [Betancourt, Appendices A.3–A.5](https://arxiv.org/html/1701.02434v2).

Here is the elementary identity behind an unbiased merge. Assume the representative of component $A$ already selects state $i$ with probability $w_i/W_A$, and similarly for $B$. Choose the component using its total weight. For $i\in A$,

$$
\Pr(i)=\frac{W_A}{W_A+W_B}\frac{w_i}{W_A}
=\frac{w_i}{W_A+W_B}.
$$

The same calculation holds for $B$. Repeating this argument proves the reservoir identity by induction, conditional on the specified components and weights. It says nothing by itself about whether those components were constructed with a valid dynamic stopping rule.

### Worked example: three energies and two replacement rules

Let energies relative to an arbitrary common offset be $0,\log 2,\log 4$. Their weights are $1,1/2,1/4$, totaling $7/4$. Desired probabilities are therefore $4/7,2/7,1/7$.

Start with the first state. On adding the second, replace the representative with probability

$$
\frac{1/2}{1+1/2}=\frac13.
$$

On adding the third, replace it with probability

$$
\frac{1/4}{1+1/2+1/4}=\frac17.
$$

The final first-state probability is $(2/3)(6/7)=4/7$. The second-state probability is $(1/3)(6/7)=2/7$, and the third receives $1/7$. This is an exact finite probability calculation, independent of Hamiltonian dynamics.

Now let a retained component have weight $6$ and a new component weight $2$. An unbiased merge replaces with probability $2/8=1/4$. Biased progressive extension replaces with probability $2/6=1/3$. These operations visibly differ. The adjective “biased” describes a preference in the progressive transition, not a claim that the properly constructed full Markov kernel has the wrong invariant distribution.

| Construction | Auxiliary slice | Within valid component | Top-level selection | Termination |
|---|---|---|---|---|
| Simplified original NUTS | Yes | Equal eligible-state weights | Uniform draw on admissible set | Original recursive checks |
| Efficient original NUTS | Yes | Count-based unbiased merges | Biased progressive count update | Original recursive checks |
| Multinomial dynamic HMC discussed here | No | Energy-weighted unbiased merges | Biased progressive weight update | Specified recursive generalized checks |

The table identifies the algorithm family described here; individual software implementations should be checked against their own specification. Mixing columns does not establish a new correct algorithm.

## 21.8 Momentum sums and implementation differences

The Stan development source inspected for this chapter uses endpoint velocities $p^\sharp=M^{-1}p$ and a discrete accumulated momentum $\rho$. Its continuation test requires both $(p_-^\sharp)^T\rho>0$ and $(p_+^\sharp)^T\rho>0$. It also checks configurations spanning subtree boundaries, in addition to the merged interval. This observation concerns the mutable [Stan `base_nuts.hpp` development source](https://github.com/stan-dev/stan/blob/develop/src/stan/mcmc/hmc/nuts/base_nuts.hpp), inspected September 26, 2026; it is not a pinned release specification.

For intuition, exact constant-mass dynamics satisfy

$$
q_+-q_-=M^{-1}\int_{t_-}^{t_+}p(t)\,dt.
$$

An accumulated momentum therefore contains information related to displacement, but the equivalence depends on the metric and on the integration or quadrature convention. In particular, $\Delta^TM^{-1}p_+$ from our Euclidean-distance derivation is not automatically the same scalar as $\rho^TM^{-1}p_+$.

We can identify the exact continuous analogue. Write $\rho_{\mathrm{cont}}=\int p(t)\,dt$, so $\Delta=M^{-1}\rho_{\mathrm{cont}}$. Measure squared separation by $\Delta^TM\Delta$. The endpoint derivatives of half this quantity are

$$
\Delta^Tp_\pm=\rho_{\mathrm{cont}}^TM^{-1}p_\pm.
$$

Thus the continuous momentum-integral products match this $M$-weighted distance convention. This follows by setting $A=M$ in Section 21.2, using the integral relation discussed by [Betancourt, Appendix A.4.2](https://arxiv.org/html/1701.02434v2). Replacing the integral by the implementation's discrete sum still changes the numerical criterion.

Even matching the scalar formula would not match the whole implementation. One must also match which subintervals are tested, how endpoint contributions enter accumulated sums, strict versus non-strict inequalities, and when an invalid subtree's candidate is excluded. These details are mathematical inputs to the kernel, not cosmetic software choices.

A sensible code review starts by writing down the exact variant and its invariance argument. Tests of Gaussian means can detect some bugs, but they cannot establish that every recursive termination path preserves the target.

## 21.9 Warmup changes the numerical problem

Stan's documented warmup uses an initial interval for step-size adjustment, expanding windows for metric estimation, and a final interval for step-size adjustment. Step size also adapts during the metric-estimation windows. Its covariance estimate corresponds to $M^{-1}$ under this chapter's convention. The parameters are then frozen for sampling. These operational details are described in the [Stan 2.37 Reference Manual, MCMC sampling](https://mc-stan.org/docs/2_37/reference-manual/mcmc.html).

The covariance convention can be checked on a Gaussian independently. If $q\sim N(0,\Sigma)$, then

$$
\ddot q=-M^{-1}\Sigma^{-1}q.
$$

Choosing $M=\Sigma^{-1}$ makes the matrix multiplying $q$ the identity. Choosing $M=\Sigma$ instead generally squares the disparity between coordinate scales. This is why a setting named “inverse metric” deserves careful reading.

Step-size adaptation commonly works on $\log\epsilon$, so positivity is automatic. Dual averaging uses accumulated acceptance-statistic error and a smoothed log step size. If integration quality falls below its target, the feedback generally favors smaller steps. A metric update changes the dynamics, so step size must be adjusted in the new geometry as well.

For dynamic HMC, an acceptance statistic summarizes integration quality across visited states; it is not necessarily the fraction of final draws that moved. For a specified set $S_m$ of integrated states in transition $m$, write

$$
a_m=\frac{1}{|S_m|}\sum_{z\in S_m}
\min\{1,\exp[H(z_0)-H(z)]\}.
$$

The inspected Stan source includes all newly integrated states, even in subtrees excluded from final selection. [Stan source, acceptance aggregation](https://github.com/stan-dev/stan/blob/develop/src/stan/mcmc/hmc/nuts/base_nuts.hpp). In contrast, original Algorithm 6 uses states explored during the final doubling. The aggregation set is part of the adaptation specification; it should be named when comparing implementations.

### Following the dual-averaging arithmetic

Let $\delta\in(0,1)$ be the target statistic. For one uninterrupted adaptation interval, set $\bar h_0=0$, choose $\epsilon_0>0$, and let $\mu=\log(10\epsilon_0)$. After transition $m$, update

$$
\begin{aligned}
\eta_m&=\frac{1}{m+t_0},\\
\bar h_m&=(1-\eta_m)\bar h_{m-1}+\eta_m(\delta-a_m),\\
x_m&=\mu-\frac{\sqrt m}{\gamma}\bar h_m,\\
\bar x_m&=m^{-\kappa}x_m+(1-m^{-\kappa})\bar x_{m-1}.
\end{aligned}
$$

Here $\gamma>0$, $t_0\geq0$, and $1/2<\kappa\leq1$; take $\bar x_0=0$, whose value is overwritten at $m=1$. Use $e^{x_m}$ for the next adapting transition and freeze $e^{\bar x_{N_w}}$ after $N_w$ updates. These recurrences and the original acceptance-statistic choice are from [Hoffman and Gelman, Section 3.2 and Algorithm 6](https://jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf).

For a checkable arithmetic example, choose $\epsilon_0=0.1$, so $\mu=0$, and set $\delta=0.8$, $\gamma=0.05$, $t_0=10$, $\kappa=0.75$. Feed in the hypothetical statistics $0.6,0.7,0.9,0.8$. These are supplied numbers, not the result of running NUTS.

| Update $m$ | $a_m$ | $\bar h_m$ | Next adapting step $e^{x_m}$ | Smoothed step $e^{\bar x_m}$ |
|---|---:|---:|---:|---:|
| 1 | 0.6 | 0.018182 | 0.695144 | 0.695144 |
| 2 | 0.7 | 0.025000 | 0.493069 | 0.566734 |
| 3 | 0.9 | 0.015385 | 0.586878 | 0.575484 |
| 4 | 0.8 | 0.014286 | 0.564718 | 0.571655 |

For example, $\bar h_2=[(0.8-0.6)+(0.8-0.7)]/12=0.025$, yielding $x_2=-\sqrt2(0.025)/0.05$. The first step exceeds $\epsilon_0$ despite a below-target statistic because shrinkage is toward $10\epsilon_0$. A below-target observation pushes downward relative to an otherwise identical update with a higher statistic; it need not make the sequence decrease monotonically. Likewise, meeting the target at update 4 does not erase accumulated error. If this illustrative interval ended there, the frozen step would be $0.571655$, not the last unsmoothed value. The arithmetic illustrates the controller without asserting that four updates suffice for useful adaptation.

Freezing parameters separates adaptation from the sampling kernel, but the first retained state can still be far from representative. Discarding warmup does not prove initialization bias has disappeared. The finite-run questions remain those of [convergence diagnostics](14-diagnostics.md).

## 21.10 Cost and a bounded component laboratory

Suppose one run generates shallow trees, another deep trees with stable energies, and a third shallow trees that repeatedly stop because numerical integration fails. Depth alone cannot rank them. The first may move efficiently or barely move; the second may need long trajectories; the third has a concrete numerical problem.

Compare effective sample size per gradient and per second for scientifically relevant functions. A depth cap bounds computation, but increasing it cannot repair a funnel's changing curvature or guarantee travel between isolated modes. Smaller steps may resolve local numerical instability while increasing the gradient cost of each trajectory. These tradeoffs lead into [HMC diagnostics and difficult geometry](22-hmc-diagnostics.md).

The following **fixed-length HMC** lab uses ten leapfrog steps per proposal. Vary the step size and observe acceptance, movement, and the displayed energy error. This changes both numerical resolution and nominal duration $T=10\epsilon$, so it does not isolate the effect of duration. Switch between identity mass and $M=\operatorname{diag}(1,25)$ to compare the effect of equalizing the target's frequencies. Use the exact oscillator table above to isolate duration without integration error. The lab motivates tuning questions; it does not implement NUTS tree construction or its candidate rules.

<div class="mcmc-lab" data-lab="hmc"></div>

Run `python examples/ch21.py` for exact oscillator values, a simulation of the deliberately incorrect turning-point rule, the dual-averaging table, and 60,000 independent repetitions of the three-state reservoir experiment. The script prints theoretical moments or probabilities beside empirical estimates, including the reservoir's marginal binomial standard errors. These bounded calculations illustrate separate components; they do not implement NUTS or diagnose MCMC convergence.

The reservoir's core operation is short:

```python
weight_total += new_weight
if rng.random() < new_weight / weight_total:
    representative = new_label
```

The surrounding script validates its small input and uses relative energies. Subtracting the minimum energy before exponentiating multiplies every weight by the same positive constant and leaves probabilities unchanged in exact arithmetic. Extremely small relative weights can still underflow to zero; the reservoir skips zero weights and requires a positive finite total. This samples the represented weights, with any underflowed probabilities lost. Production implementations with many log weights typically use log-sum-exp accumulation.

The mathematical separation is now clear. A correctly specified dynamic HMC method can preserve the intended target despite finite leapfrog steps. Finite trajectories and finite chains still have Monte Carlo error and possible initialization error. Floating-point failures require handling, and a misspecified probability model remains misspecified regardless of sampling quality.

## 21.11 Exercises with solutions

<div class="exercise" id="mcmc-21-nuts-ex-1">

### Exercise 1: extending the left endpoint

Derive the derivative of half squared Euclidean endpoint separation when the left endpoint moves backward by time $s$. Explain why the answer has a positive sign.

<details>
<summary>Solution</summary>

Let $D(s)=q_+-q(t_--s)$. The chain rule gives $D'(0)=\dot q(t_-)=M^{-1}p_-$. Consequently $\frac{d}{ds}\|D(s)\|^2/2|_{s=0}=\Delta^TM^{-1}p_-$. One minus sign comes from subtracting the left position, and the other from running its time backward. Their product is positive.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-2">

### Exercise 2: a different oscillator origin

For the standard oscillator with $q_0=p_0=1$, find the first forward turning time relative to the fixed initial position. Compare it with the chapter's example.

<details>
<summary>Solution</summary>

The solution is $q(t)=\cos t+\sin t$ and $p(t)=\cos t-\sin t$. The relevant product is $(\cos t+\sin t-1)(\cos t-\sin t)$. For $0<t<\pi/4$, both factors are positive. At $\pi/4$ the momentum vanishes and position reaches $\sqrt{2}$. Just afterward, displacement is still positive while momentum is negative. Thus the first turning threshold is $\pi/4$, compared with $\pi/2$ for $q_0=0,p_0=1$. A discrete test detects a crossing only at its inspected times.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-3">

### Exercise 3: large absolute energies

Compute multinomial probabilities for energies $1000,1001,1002$ without exponentiating their negatives directly.

<details>
<summary>Solution</summary>

Subtract $1000$. The weights become $1,e^{-1},e^{-2}$ and total approximately $1.503215$. Their probabilities are approximately $0.665241$, $0.244728$, and $0.090031$. The omitted common factor $e^{-1000}$ cancels algebraically. Computing it first risks underflow and can turn every weight into zero.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-4">

### Exercise 4: merging representatives

Prove the two-component reservoir identity for positive weights. Then explain whether it proves correctness of a dynamic HMC transition.

<details>
<summary>Solution</summary>

Suppose a representative from $A$ has probabilities $w_i/W_A$ and one from $B$ has probabilities $w_j/W_B$. Choose the component with probabilities $W_A/(W_A+W_B)$ and $W_B/(W_A+W_B)$. Multiplication gives $w_k/(W_A+W_B)$ for every state in either component. This proves the conditional selection distribution. It does not establish the distribution of the components, reversibility of their generation, or admissibility under stopping. Those require the trajectory construction argument.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-5">

### Exercise 5: audit a proposed shortcut

A colleague stops forward integration at the first U-turn and applies ordinary endpoint HMC acceptance. They justify this by leapfrog reversibility. Identify the missing argument without asserting that every imaginable stopping rule must fail.

<details>
<summary>Solution</summary>

They must establish the reverse probability of the complete proposal, including the state-dependent stopping decision. Reversing momentum and taking the same number of steps reverses integration, but the proposed algorithm might choose a different number from the new root. A valid augmented construction, an appropriate proposal-ratio argument, or special structure proving reversibility would resolve the gap. Leapfrog reversibility by itself does not.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-6">

### Exercise 6: compare computational value

Run A gives ESS $400$ at $20{,}000$ gradient evaluations; run B gives ESS $700$ at $70{,}000$. Which is more efficient, and what information is missing?

<details>
<summary>Solution</summary>

The efficiencies are $0.020$ and $0.010$ ESS per gradient. Run A is twice as efficient for the measured estimand, although B has lower Monte Carlo error if both ESS estimates are trustworthy and everything else is comparable. Missing information includes the estimand, initialization, numerical failures, chain agreement, uncertainty in the ESS estimates, and elapsed time. Passing available diagnostics would support use of the comparison without proving complete exploration.

</details>

</div>

<div class="exercise" id="mcmc-21-nuts-ex-7">

### Exercise 7: why a correct mean can hide the stopping error

Derive the density of $q_\star$ in Section 21.3's incorrect turning-point rule. Does checking only its mean detect the error?

<details>
<summary>Solution</summary>

The independent standard Gaussian pair $(q_0,p_0)$ has polar density $r e^{-r^2/2}/(2\pi)$ for $r>0$. Integrating over angle gives radius density $r e^{-r^2/2}$. The sign of $p_0$ is independent of the radius and has probability $1/2$ for each sign. Thus

$$
f_\star(x)=\frac{|x|}{2}e^{-x^2/2},\qquad x\in\mathbb R.
$$

This symmetric density has mean zero, just like the target, but has second moment 2 and vanishes at zero. A mean-only check misses the error. The analytic density establishes the discrepancy; finite simulation merely illustrates it.

</details>

</div>

## 21.12 Key takeaways and sources

Dynamic duration is only one part of NUTS. Correctness also depends on how trajectory components are generated, checked, and used to select the next state. Endpoint geometry motivates stopping; recursive validity makes that stopping compatible with sampling. Slice eligibility, multinomial weights, unbiased reservoir merges, and biased progressive extensions are distinct operations.

Automatic tuning reduces manual choices but leaves questions about geometry, initialization, computational efficiency, and scientific adequacy. Measure useful information per cost and retain the distinction between invariance and finite-run reliability.

The four primary references used here are [Hoffman and Gelman's original NUTS paper](https://jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf), [Betancourt's conceptual HMC treatment and technical appendices](https://arxiv.org/html/1701.02434v2), the [Stan 2.37 Reference Manual](https://mc-stan.org/docs/2_37/reference-manual/mcmc.html), and the inspected [Stan development implementation](https://github.com/stan-dev/stan/blob/develop/src/stan/mcmc/hmc/nuts/base_nuts.hpp). Consult a pinned implementation and its full algorithmic specification before attempting a complete NUTS implementation.
