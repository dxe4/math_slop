var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: dynamic-stochastic-decisions
title: "Dynamic and Stochastic Decisions"
level: advanced-undergraduate
estimated_minutes: 105
license: CC BY-SA 4.0
status: draft
---

# Dynamic and Stochastic Decisions

## Dependencies and aims

This chapter uses conditional probability, optimization, and finite-state dynamic programming. It distinguishes here-and-now choices, recourse, policies, forecasts, and perfect-information benchmarks.

## Decisions through time

Let state evolve as $x_{t+1}=F_t(x_t,a_t,w_t)$. **Definition (policy).** A policy chooses $a_t=π_t(I_t)$ from information available at time $t$. The objective may minimize

$E[Σ_{t=0}^{T-1}c_t(x_t,a_t)+c_T(x_T)]$.

Allowing $a_t$ to depend on future $w$ produces a clairvoyant benchmark, not an implementable policy. Information constraints are mathematical constraints.

## Bellman's principle

**Proposition 9.1 (finite-horizon Bellman recursion).** For a finite Markov decision process with state $s$, action $a$, transition $P(s'|s,a)$, cost $c(s,a)$, and finite horizon, define terminal value $V_T$. Backward recursion is

$V_t(s)=\\min_a[c_t(s,a)+Σ_s'P(s'|s,a)V_{t+1}(s')]$.

The proof conditions on the first action and next state. If the remaining policy were not optimal for the reached state and time, replacing it would improve the original plan, a contradiction.

The Markov property is relative to the chosen state. If past information predicts the future after conditioning on $s$, the state is incomplete.

## Discounted infinite horizon

For bounded rewards and $0≤γ<1$, Bellman optimality operator

\\[(TV)(s)=\\max_a[r(s,a)+γΣP(s'|s,a)V(s')]\\]

is a $γ$-contraction in sup norm. Banach's fixed-point theorem gives a unique fixed value and convergence of value iteration. The conclusion does not directly cover $γ=1$, unbounded rewards, continuous spaces without regularity, or partial observability.

## Scenario trees and recourse

A two-stage stochastic program chooses $x$ before uncertainty $ξ$, then $y(ξ)$ after observing it:

$\\min c^Tx+E[Q(x,ξ)]$.

Scenario copies sharing the same information history must have identical decisions—**nonanticipativity**. Violating it gives each scenario knowledge of which future occurred.

Expected-value models need credible probabilities. Robust models optimize against a set $U$; regret compares with hindsight action. Each answers a different question.

### Worked information value

Two actions have losses $(4,15)$ and $(7,9)$ in low/high states, each probability one-half. Expected losses are 9.5 and 8, so choose the second without information. With perfect state information, choose losses 4 and 9, average 6.5. Expected value of perfect information is $8-6.5=1.5$. A real forecast cannot be worth more under this model, but may cost more, arrive late, or be wrong.

## Risk-sensitive objectives

Expected loss can hide tails. Worst-case loss can be driven by an implausible edge of $U$. Conditional value-at-risk and entropic criteria encode different tail preferences. State loss sign, time horizon, distribution, and decision authority. Optimization of a risk measure does not validate its probability model.

## State design and sufficient information

A state is not merely the variables convenient to plot. It must contain enough
information that, conditional on the state and current action, the distribution
of the next state and reward does not depend on the earlier history. Inventory
on hand may be insufficient when outstanding orders have different delivery
dates; the pipeline vector must enter the state. A patient's current score may
be insufficient when treatment history changes response.

A useful diagnostic is to find two histories mapped to the same proposed state
and ask whether they imply the same feasible actions, transition law, and
one-step cost. If not, either enlarge the state or model partial observation.
Calling an incomplete summary "Markov" does not make Bellman's recursion valid.

### Worked finite-horizon policy

There are two states, healthy $H$ and failed $F$, with $F$ absorbing and
terminal failure cost 10. At time zero in $H$, action \`maintain\` costs 2 and
leaves failure probability 0.1; action \`wait\` costs 0 and leaves failure
probability 0.4. With one transition remaining,

$Q(H,maintain)=2+0.1(10)=3$,
$Q(H,wait)=0+0.4(10)=4$.

Maintenance is optimal even though its immediate cost is larger. If a model
chose \`wait\` only on simulated paths that later remained healthy, it would use
future outcomes and understate policy cost.

## Contraction, error bounds, and stopping

For discounted finite-state problems, contraction gives more than convergence.
If $V*$ is the fixed point and $V_{k+1}=TV_k$, then

$\\lVert V_k-V*\\rVert_\\infty \\leq \\gamma^k \\lVert V_0-V*\\rVert_\\infty$.

The computable Bellman residual also yields

$\\lVert V-V*\\rVert_\\infty \\leq \\lVert TV-V\\rVert_\\infty/(1-\\gamma)$.

Thus a residual of $10^{-4}$ at $\\gamma=0.99$ certifies only a value error at most
$0.01$, not $10^{-4}$. A small value error need not preserve the greedy action
when two actions are nearly tied; decision-margin reporting is essential.

## Two-stage stochastic programming

For scenarios $\\omega$ with probabilities $p_\\omega$, a deterministic equivalent
introduces recourse copy $y_\\omega$ for each scenario but a single first-stage
decision $x$. In a multistage tree, decisions at nodes with the same observed
history must coincide. These nonanticipativity constraints are what distinguish
a policy from a collection of hindsight solutions.

Three common benchmarks should not be confused:

- the **wait-and-see** value optimizes separately after seeing each scenario;
- the **stochastic solution** chooses a feasible nonanticipative policy;
- the **expected-value solution** replaces uncertain inputs by their means and
  then evaluates that fixed decision under the full distribution.

For minimization, wait-and-see is a lower bound on the stochastic value. The
expected-value solution can be worse, but the mean-input model may even produce
an action infeasible in individual scenarios.

### Worked recourse calculation

Choose capacity $x\\geq 0$ at cost $2x$. Demand is 1 or 3 with equal probability;
unmet demand after observing it costs $5(d-x)_+$. The candidate breakpoints are
0, 1, and 3. Expected costs are 10 at $x=0$, $2+5=7$ at $x=1$, and 6 at $x=3$,
so full capacity is optimal. The mean-demand shortcut uses demand 2 and also
chooses $x=2$, with true expected cost $4+2.5=6.5$; it misses the stochastic
optimum. With perfect information, choose 1 or 3 after seeing demand, for
expected cost 4, a bound unattainable by the here-and-now decision.

## Partial observation and belief states

When the physical state is hidden, a policy based only on the latest noisy
observation is generally not Markov. Under a specified hidden Markov model, the
posterior belief $b_t(s)=P(s_t=s | I_t)$ is a sufficient state. Bayes updating
then precedes the decision. This converts the problem to a fully observed
belief-state MDP, usually continuous even when the hidden state is finite.

The construction is only as valid as the transition and observation models.
Distribution shift or strategic measurement behavior can invalidate the
belief update while the dynamic program remains numerically exact.

## Common failure modes

- **Hindsight leakage:** scenario-specific first-stage decisions create a
  perfect-information lower bound, not an implementable policy.
- **Mean scenario substitution:** nonlinear costs make the decision at mean
  inputs differ from the stochastic optimum.
- **Incomplete state:** omitted pipeline, history, or belief information breaks
  the Markov recursion.
- **Discount as a technical trick:** $\\gamma<1$ changes how future outcomes are
  valued and must be substantively justified.
- **Residual without policy margin:** a converged value may still leave action
  choice fragile near a tie.
- **Risk measure without calibration:** optimizing CVaR precisely does not make
  tail probabilities credible.

## A value approximation needs a policy guarantee

In a finite discounted cost problem, let an approximate value function differ from the optimal value by at most $\\delta$ at every state. Form a policy by minimising immediate cost plus discounted expected approximate continuation value. The continuation term for each action differs from its optimal counterpart by at most the discount factor times $\\delta$, because an expectation cannot exceed the uniform error bound. Comparing the selected action with the truly best action introduces this error twice. Its one-step optimality loss is therefore at most $2\\gamma\\delta$.

The full policy loss accumulates over time. Let its value be $V^\\pi$. Using the Bellman equation for that fixed policy, add and subtract the optimal continuation value. The one-step comparison gives

$$
0\\le V^\\pi(s)-V_*(s)
\\le 2\\gamma\\delta+\\gamma\\|V^\\pi-V_*\\|_\\infty.
$$

Taking the maximum and rearranging yields the policy bound $2\\gamma\\delta/(1-\\gamma)$. Bounded costs, finite states and actions, and a discount strictly below one ensure these value functions are finite. Combining this with the earlier Bellman-residual bound gives an explicit, though often conservative, policy-loss estimate from a computed value residual. A discount close to one amplifies both steps of the argument.

This is different from exact action recovery. If the optimal action's advantage over every other action is larger than twice the continuation-error bound, the approximate greedy rule chooses that action. Near a tie, it can choose differently while still having a small cost loss. Thus a policy report should distinguish a guarantee about total cost from a guarantee about the identity of each chosen action.

## Constraints across time can require another state variable

Suppose a service operation has a total budget for the remaining horizon. Two histories may lead to the same equipment condition but different remaining budgets. They cannot be combined into a single state if the next feasible actions depend on how much has already been spent. Include the remaining budget in the state, and update it when an action is taken. The terminal condition must also state whether unused budget has value or whether exceeding the budget is prohibited.

An expected-budget constraint is different from a pathwise budget. A policy can meet an average spending limit while overspending in some scenarios and underspending in others. Replacing a pathwise restriction by an expectation enlarges the policy set and can lower the reported expected cost. That mathematical improvement may represent permission the real decision maker does not possess.

**Worked comparison.** An emergency action costs ten and is needed with probability one tenth. A policy that always acts when needed spends one on average but ten on the paths where it acts. An expected budget of one admits it; a strict per-path budget of one forbids it. The arithmetic is consistent under both models. Their difference is the timing and interpretation of the resource requirement, which must be specified before applying Bellman's recursion or scenario optimization.

The same principle applies to fairness, inventory, emissions, and risk limits. Some can be represented by an augmented state, others by constraints on an entire distribution of outcomes. Writing a penalty in a one-period reward does not automatically reproduce the intended multistage restriction. State design should follow the admissible policy and information structure, rather than the convenience of a particular recursion.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="dynamic-stochastic-decisions-ex-1"></a>

Explain why a policy tuned using realized future demand has
   perfect-information bias, and give the corresponding feasibility violation.

<details>
<summary>Hint 1</summary>

Specify the information available at each decision time.

</details>
<details>
<summary>Hint 2</summary>

Scenario-dependent first actions generally violate nonanticipativity.

</details>
<details>
<summary>Full solution</summary>

It conditions today's action on a demand not in today's information set. In a scenario tree it assigns different actions to nodes sharing the same observed history, violating nonanticipativity.

</details>

### Exercise 2
<a id="dynamic-stochastic-decisions-ex-2"></a>

For the one-step maintenance example, recompute the action if maintenance
   cost is 3.5. State the decision margin.

<details>
<summary>Hint 1</summary>

Compare maintenance cost with expected failure cost in the given state.

</details>
<details>
<summary>Hint 2</summary>

The action gap is the difference of the two conditional costs.

</details>
<details>
<summary>Full solution</summary>

Maintenance costs $3.5+1=4.5$, while waiting costs 4, so wait is optimal by margin 0.5.

</details>

### Exercise 3
<a id="dynamic-stochastic-decisions-ex-3"></a>

Derive finite-horizon Bellman recursion by conditioning on the first action
   and next state.

<details>
<summary>Hint 1</summary>

Fix the first action and condition on the next state.

</details>
<details>
<summary>Hint 2</summary>

Optimise the remaining admissible policy only after conditioning.

</details>
<details>
<summary>Full solution</summary>

Fix the first action $a$; immediate cost is $c_t(s,a)$ and conditional expected optimal continuation is $\\sum P(s'|s,a)V_{t+1}(s')$. Minimizing over feasible $a$ gives the recursion; replacing any nonoptimal continuation lowers total cost.

</details>

### Exercise 4
<a id="dynamic-stochastic-decisions-ex-4"></a>

Give two histories with equal on-hand inventory but different outstanding
   orders, showing that on-hand stock alone is not a Markov state.

<details>
<summary>Hint 1</summary>

Choose two histories with different replenishment arrival dates.

</details>
<details>
<summary>Hint 2</summary>

Equal current stock need not imply equal transition distributions.

</details>
<details>
<summary>Full solution</summary>

History A has on-hand 2 and three units arriving tomorrow; history B has on-hand 2 and no pipeline. Their next inventory distributions and optimal orders differ, so the pipeline vector must enter state.

</details>

### Exercise 5
<a id="dynamic-stochastic-decisions-ex-5"></a>

Prove the discounted Bellman optimality operator is a $\\gamma$-contraction in
   sup norm for bounded finite-state value functions.

<details>
<summary>Hint 1</summary>

Bound the difference of two minima by the largest actionwise difference.

</details>
<details>
<summary>Hint 2</summary>

A probability-weighted average is bounded by the sup norm.

</details>
<details>
<summary>Full solution</summary>

For each state, $|\\max_a f_a-\\max_a g_a|\\leq \\max_a|f_a-g_a|\\leq \\gamma\\lVert V-W\\rVert_\\infty$; maximizing over states proves contraction. The same inequality holds with minima.

</details>

### Exercise 6
<a id="dynamic-stochastic-decisions-ex-6"></a>

If $\\gamma=0.9$ and a value function has Bellman residual 0.02, give the
   certified sup-norm error bound.

<details>
<summary>Hint 1</summary>

Use the residual divided by one minus the discount factor.

</details>
<details>
<summary>Hint 2</summary>

Keep the units of the value function throughout the calculation.

</details>
<details>
<summary>Full solution</summary>

The bound is $0.02/(1-0.9)=0.2$.

</details>

### Exercise 7
<a id="dynamic-stochastic-decisions-ex-7"></a>

With $\\gamma=0.99$, explain why residual $10^{-4}$ does not certify value error
   $10^{-4}$.

<details>
<summary>Hint 1</summary>

Write the same residual error bound at the larger discount factor.

</details>
<details>
<summary>Hint 2</summary>

A denominator near zero amplifies the residual.

</details>
<details>
<summary>Full solution</summary>

The residual bound divides by $1-\\gamma=0.01$, giving $0.01$; discounting amplifies the certificate by 100.

</details>

### Exercise 8
<a id="dynamic-stochastic-decisions-ex-8"></a>

For a fixed policy, write its Bellman equations in matrix form and prove the
   system has a unique solution when $\\gamma<1$.

<details>
<summary>Hint 1</summary>

Write the transition matrix for the fixed policy.

</details>
<details>
<summary>Hint 2</summary>

The inverse can be justified by a convergent discounted geometric series.

</details>
<details>
<summary>Full solution</summary>

$V_\\pi=r_\\pi+\\gamma P_\\pi V_\\pi$, so $(I-\\gamma P_\\pi)V_\\pi=r_\\pi$. Since the spectral radius of stochastic $P_\\pi$ is at most one, $I-\\gamma P_\\pi$ is invertible for $\\gamma<1$ (also by the Neumann series).

</details>

### Exercise 9
<a id="dynamic-stochastic-decisions-ex-9"></a>

Recompute the chapter's two-action information-value example when the high
   state has probability 0.8.

<details>
<summary>Hint 1</summary>

Reweight each action cost before minimising.

</details>
<details>
<summary>Hint 2</summary>

For perfect information, minimise in each state before averaging.

</details>
<details>
<summary>Full solution</summary>

Expected losses are 12.8 and 8.6, so choose the second. Perfect-information expected loss is 8; EVPI is $8.6-8=0.6$.

</details>

### Exercise 10
<a id="dynamic-stochastic-decisions-ex-10"></a>

Prove that expected value of perfect information is nonnegative in any
    finite minimization problem.

<details>
<summary>Hint 1</summary>

Every fixed action remains an option after information is revealed.

</details>
<details>
<summary>Hint 2</summary>

Take the statewise minimum first and then its expectation.

</details>
<details>
<summary>Full solution</summary>

For every state $\\xi$, the hindsight minimum is at most the loss of any fixed action. Taking expectations and then minimizing fixed actions preserves $E[\\min_a L(a,\\xi)] \\leq \\min_a E[L(a,\\xi)]$; their difference is nonnegative.

</details>

### Exercise 11
<a id="dynamic-stochastic-decisions-ex-11"></a>

In the capacity recourse example, calculate the stochastic optimum, the
    expected-value solution's true cost, and the wait-and-see value.

<details>
<summary>Hint 1</summary>

Write expected recourse as a piecewise-linear function of capacity.

</details>
<details>
<summary>Hint 2</summary>

Evaluate its slope on each demand interval and compare the mean-demand decision.

</details>
<details>
<summary>Full solution</summary>

Costs at $x=0,1,3$ are 10, 7, and 6, so $x=3$ is stochastic-optimal. The mean-demand choice $x=2$ costs 6.5 under the distribution. Wait-and-see chooses capacity equal to demand and averages costs 2 and 6, giving 4.

</details>

### Exercise 12
<a id="dynamic-stochastic-decisions-ex-12"></a>

Write a deterministic equivalent for a two-scenario problem with a shared
    first-stage $x$ and scenario recourse $y_1,y_2$. Identify the
    nonanticipativity condition.

<details>
<summary>Hint 1</summary>

Use a common first-stage variable in both scenarios.

</details>
<details>
<summary>Hint 2</summary>

Allow second-stage decisions to differ only after the scenario is observed.

</details>
<details>
<summary>Full solution</summary>

One form is $\\min c^Tx+p_1q_1^Ty_1+p_2q_2^Ty_2$ subject to first-stage constraints and $W_i y_i \\geq h_i-T_i x$. A single shared $x$ is the nonanticipativity condition; scenario copies would require $x_1=x_2$.

</details>

### Exercise 13
<a id="dynamic-stochastic-decisions-ex-13"></a>

Construct a two-stage example where replacing uncertain demand by its mean
    gives a strictly suboptimal first-stage action.

<details>
<summary>Hint 1</summary>

Choose a recourse penalty that is asymmetric between shortage and excess.

</details>
<details>
<summary>Hint 2</summary>

The mean alone cannot encode which side of a kink carries probability mass.

</details>
<details>
<summary>Full solution</summary>

The chapter capacity example suffices: mean demand 2 chooses $x=2$ but the stochastic optimum is $x=3$, with costs 6.5 and 6.

</details>

### Exercise 14
<a id="dynamic-stochastic-decisions-ex-14"></a>

Distinguish robust worst-case optimization, expected-cost optimization,
    and minimax regret by writing their objective forms for losses $L(a,\\xi)$.

<details>
<summary>Hint 1</summary>

Keep the same loss array while changing the aggregation operator.

</details>
<details>
<summary>Hint 2</summary>

Regret subtracts the best action for each scenario before taking the worst case.

</details>
<details>
<summary>Full solution</summary>

Expected cost is $\\min_a E[L(a,\\xi)]$; robust worst case is $\\min_a \\sup_{\\xi \\in U}L(a,\\xi)$; minimax regret is $\\min_a \\sup_{\\xi \\in U}[L(a,\\xi)-\\min_b L(b,\\xi)]$.

</details>

### Exercise 15
<a id="dynamic-stochastic-decisions-ex-15"></a>

For losses 0, 2, and 20 with probabilities 0.8, 0.15, and 0.05, compute
    expected loss and the 90%-CVaR under the convention averaging the worst ten
    percent of probability mass.

<details>
<summary>Hint 1</summary>

Sort outcomes from largest loss to smallest.

</details>
<details>
<summary>Hint 2</summary>

The worst tenth includes the entire top atom and part of the next atom.

</details>
<details>
<summary>Full solution</summary>

Expected loss is $0.15(2)+0.05(20)=1.3$. The worst 5% has loss 20 and the next 5% is half of the loss-2 mass, so 90%-CVaR is $[0.05(20)+0.05(2)]/0.10=11$.

</details>

### Exercise 16
<a id="dynamic-stochastic-decisions-ex-16"></a>

Describe the belief-state update for a finite hidden Markov model after an
    action and observation. State the conditional-independence assumptions.

<details>
<summary>Hint 1</summary>

First predict the hidden state through the action-dependent transition.

</details>
<details>
<summary>Hint 2</summary>

Multiply by the observation likelihood and normalize only when its probability is positive.

</details>
<details>
<summary>Full solution</summary>

Predict $\\tilde{b}(s')=\\sum_{s} P(s'|s,a)b(s)$, then update $b'(s')$ proportional to $P(o|s',a)\\tilde{b}(s')$. This assumes controlled Markov transitions and observations conditionally independent of earlier history given current/next state and action.

</details>

### Exercise 17
<a id="dynamic-stochastic-decisions-ex-17"></a>

Diagnose a value-iteration report that stops when successive iterates
    differ by $10^{-3}$ but omits $\\gamma$, action gaps, and model units.

<details>
<summary>Hint 1</summary>

Convert an iterate difference into a value bound using the discount.

</details>
<details>
<summary>Hint 2</summary>

Even a small value bound can leave an action undecided when its gap is small.

</details>
<details>
<summary>Full solution</summary>

Without $\\gamma$, successive-difference tolerance has no useful error conversion; without action gaps it does not certify policy stability; without units it does not express decision significance. Report a Bellman residual and $residual/(1-\\gamma)$ bound.

</details>

### Exercise 18
<a id="dynamic-stochastic-decisions-ex-18"></a>

Design an out-of-sample policy audit that detects hindsight leakage,
    distribution shift, state insufficiency, and fragile action switches.

<details>
<summary>Hint 1</summary>

Define information timestamps, target distribution and state diagnostics.

</details>
<details>
<summary>Hint 2</summary>

Evaluate frozen policies on independent future scenarios and perturb near action switches.

</details>
<details>
<summary>Full solution</summary>

Freeze a policy before chronologically held-out scenarios; enforce information timestamps; test whether residual history predicts transitions after conditioning on state; stress transition/observation distributions; and report action gaps plus switch surfaces under plausible perturbations.

</details>

## Project

Build a finite-horizon decision model with at least three states, two actions,
and a two-stage uncertainty tree. Label the information available at every
node and encode nonanticipativity explicitly. Solve by backward induction and
by a deterministic-equivalent scenario formulation, verifying equal objective
values. Compare expected cost, worst-case loss, minimax regret, and a declared
CVaR convention; also compute the wait-and-see lower bound and expected-value
solution. Audit one deliberately incomplete state, one hindsight-leaking
implementation, and one distribution-shift stress case. Provide action gaps,
Bellman residuals, seeded scenario provenance, and text tables for all visual
summaries without presenting any criterion as universally best.

## Summary

Bellman recursion conditions decisions on available information, and discounted contraction converts a residual into a value bound. Model uncertainty and hindsight leakage remain separate issues. Network models next make conservation and interaction structure explicit.
`;export{e as default};