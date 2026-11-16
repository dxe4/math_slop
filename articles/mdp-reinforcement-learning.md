
# Decisions over Time: Markov Decision Processes and Reinforcement Learning

**Before reading.** Read [Specifying a Process](../books/stochastic-processes-paths/specifying-a-process.md), [Finite Markov Chains](../books/stochastic-processes-paths/finite-markov-chains.md) and [Convexity, Optimality, and Dual Certificates](../books/optimization-backprop-from-scratch/convexity-optimality-duality.md). These are preparation for the ideas used below.

Prediction asks what will happen. Control asks what to do when today's action changes tomorrow's information and opportunities. Reinforcement learning (RL) studies algorithms that learn such decisions from interaction; the mathematical object underneath most introductory RL is a Markov decision process (MDP).

This deep dive develops that object before discussing algorithms. It assumes conditional probability, expectation, finite sums, basic optimization, and comfort with recursive definitions. Control theory is useful context: it highlights stability, partial observation, constraints, and model mismatch that a reward-maximizing slogan can hide.

## 1. State is a modeling commitment

A finite discounted MDP is a tuple

$$(S,A,P,r,\gamma)$$

where $S$ is a finite state set, $A(s)$ is the available action set, $P(s'|s,a)$ is a transition distribution, $r(s,a,s')$ is a bounded one-step reward, and $0\le \gamma<1$ is a discount factor. At time $t$, the agent observes $S_{t}$, chooses $A_{t}$, receives $R_{t+1}=r(S_{t},A_{t},S_{t+1})$, and moves according to $P$.

The Markov assumption is

$$\Pr(S_{t+1}=s' | S_{0},A_{0},\ldots,S_{t},A_{t})=P(s'|S_{t},A_{t})$$

It does not say that the physical world has no memory. It says the chosen state contains all history needed for the modeled next-step distribution. If a medical state omits accumulated dose, or a queueing state omits jobs already in service, the displayed process may not be Markov. Enlarging the state can repair the model; treating observations as states can instead produce a partially observable MDP.

A stationary randomized policy $\pi(a|s)$ is a probability distribution over actions at each state. Starting at time $t$, define the discounted return

$$G_{t}=\sum_{k=0}^\infty \gamma^{k} R_{t+k+1}$$

Bounded rewards and $\gamma<1$ make this series absolutely bounded. Continuing undiscounted tasks need different hypotheses, such as average-reward recurrence conditions. Episodic tasks with $\gamma=1$ require termination or other conditions ensuring finite returns. Results below should not be silently transferred to those settings.

## 2. Values satisfy Bellman expectation equations

For a policy $\pi$, the state value and action value are

$$V^\pi(s)=E_\pi[G_{t} | S_{t}=s]$$

$$Q^\pi(s,a)=E_\pi[G_{t} | S_{t}=s,A_{t}=a]$$

Condition once on the next action and state:

$$V^\pi(s)=\sum_{a} \pi(a|s) \sum_{s'} P(s'|s,a)[r(s,a,s')+\gamma V^\pi(s')]$$

This is the Bellman expectation equation. In vector form it is

$$V^\pi=r^\pi+\gamma P^\pi V^\pi$$

so, for a finite discounted MDP,

$$V^\pi=(I-\gamma P^\pi)^{-1}r^\pi$$

The inverse exists because every eigenvalue of a stochastic matrix has magnitude at most one while $\gamma<1$. Solving this linear system is **policy evaluation** when the model is known.

### Worked example: maintenance or operation

There are states $H$ (healthy) and $F$ (failed). State $F$ is absorbing with zero reward. At $H$, action **maintain** costs $1$ and returns to $H$ surely. Action **run** gives reward $2$, then returns to $H$ with probability $3/4$ and moves to $F$ with probability $1/4$. Let $\gamma=0.9$.

Under the always-maintain policy,

$V(H)=-1+0.9V(H)$, so $V(H)=-10$.

Under always-run,

$V(H)=2+0.9(3/4)V(H)$, hence

$$V(H)=2/(1-0.675)=80/13\approx6.154$$

This comparison is valid only for the stated reward and transition model. Changing the failure cost, adding repair, or imposing a safety constraint changes the decision problem; none is encoded implicitly.

## 3. Optimality and dynamic programming

Define $V*(s)=\sup_\pi V^\pi(s)$. For a finite discounted MDP, a deterministic stationary optimal policy exists, and

$$V*(s)=\max_{a\in A(s)} \sum_{s'}P(s'|s,a)[r(s,a,s')+\gamma V*(s')]$$

Let the Bellman optimality operator be

$$(TV)(s)=\max_{a} \sum_{s'}P(s'|s,a)[r(s,a,s')+\gamma V(s')]$$

For the sup norm,

$$\lVert TV-TW\rVert_\infty\le \gamma\lVert V-W\rVert_\infty$$

Indeed, replacing a maximum by the action maximizing either side bounds the difference by a weighted average of $\gamma|V(s')-W(s')|$. Thus $T$ is a contraction. The contraction mapping theorem gives a unique fixed point $V*$, and value iteration $V_{k+1}=TV_{k}$ converges from every initial vector with error at most $\gamma^{k}\lVert V_{0}-V*\rVert_\infty$.

Returning to the maintenance example at $V*(H)=80/13$,

$Q*(H,run)=80/13$, while

$$Q*(H,maintain)=-1+0.9(80/13)=59/13$$

So **run** is optimal for this deliberately small model. The calculation audits both the candidate value and its greedy action.

Policy iteration alternates exact or approximate policy evaluation with a greedy improvement step. In finite discounted models, exact policy iteration reaches an optimal policy after finitely many strict improvements. Value iteration and policy iteration are planning methods: they assume access to $P$ and $r$.

## 4. Learning values from sampled transitions

When the model is unknown but transitions can be sampled, temporal-difference learning replaces an unavailable expectation by a sample. For a fixed policy, tabular TD(0) uses

$$V(S_{t}) ← V(S_{t})+\alpha_{t}[R_{t+1}+\gamma V(S_{t+1})-V(S_{t})]$$

The bracket is the TD error. Its sample target is noisy even when $V$ is correct, but its conditional expectation matches the Bellman residual under on-policy sampling.

Tabular Q-learning uses

$$Q(S_{t},A_{t}) ← Q(S_{t},A_{t})+\alpha_{t}[R_{t+1}+\gamma \max_{a} Q(S_{t+1},a)-Q(S_{t},A_{t})]$$

The familiar convergence theorem is not “Q-learning always works.” In a finite stationary discounted MDP with bounded rewards, every state-action pair visited infinitely often, and per-pair step sizes satisfying

$\sum_{t} \alpha_{t}(s,a)=\infty$ and $\sum_{t} \alpha_{t}(s,a)^{2}<\infty$,

tabular Q-learning converges to $Q*$ with probability one. Constant learning rates, changing dynamics, inadequate coverage, continuous states, and nonlinear approximation fall outside this statement.

With function approximation, three ingredients can interact badly: bootstrapped targets, off-policy data, and approximation. This “deadly triad” can cause divergence even when each ingredient is useful. Target networks and replay buffers may improve empirical behavior, but they do not turn an arbitrary nonlinear training run into a contraction proof.

## 5. Exploration is an information problem

An action can be valuable because it earns reward and because it reveals information. In a $K$-armed stochastic bandit, action $a$ produces rewards with unknown mean $\mu_{a}$; there is no evolving state. Regret through horizon $T$ is

$$Regret(T)=T \max_{a} \mu_{a}-E[\sum_{t=1}^{T} R_{t}]$$

An $\varepsilon$-greedy rule chooses a currently greedy arm most of the time and a random arm with probability $\varepsilon$. Constant $\varepsilon$ keeps exploring forever and typically creates linear regret from persistent random choices. A decaying schedule can improve asymptotics only if it still gathers enough evidence. Upper-confidence and posterior-sampling methods encode uncertainty more directly, under their own stochastic assumptions.

In an MDP, exploration also changes which future states become reachable. “Try every action” is not a safety principle: a single exploratory action may be irreversible or harmful. Constrained MDPs, offline evaluation, conservative policies, simulators, and human oversight are separate tools, not consequences of the Bellman equation.

## 6. Approximation, optimization, and control are different layers

Large problems represent $V$, $Q$, or a policy by parameters $\theta$. Define $J(\theta)=\operatorname{E}_{\pi_{\theta}}[\sum_{t=0}^{\infty}\gamma^{t}R_{t+1}]$. When the expectation below draws an ordinary, **undiscounted-occupancy** trajectory from the initial distribution, a policy-gradient identity has the schematic form

$$\nabla_{\theta} J(\theta)=\operatorname{E}_{\pi_{\theta}}[\sum_{t} \gamma^{t} Q^{\pi_{\theta}}(S_{t},A_{t})\nabla_{\theta} \log \pi_{\theta}(A_{t}|S_{t})]$$

Here the factor $\gamma^{t}$ is explicit; it must not be inserted again by also sampling from a discounted occupancy measure. With the alternative normalized discounted-occupancy convention, the same theorem is written without the time sum and with a convention-dependent constant factor. Stating the convention prevents accidental double discounting.

A baseline depending on state can reduce variance without changing the expectation, because

$$\sum_{a} \pi_\theta(a|s)\nabla_\theta \log \pi_\theta(a|s)=\nabla_\theta\sum_{a}\pi_\theta(a|s)=0$$

This identity does not imply the objective is convex, that finite batches give the exact gradient, or that an optimized reward captures the intended outcome. Four audits remain distinct:

1. **Model audit:** Is the state sufficiently Markov, and are transitions stationary enough?
2. **Statistical audit:** Does the collected distribution cover decisions the learned policy will make?
3. **Optimization audit:** Did the numerical procedure find a useful parameter value?
4. **Control audit:** Is the resulting closed-loop behavior stable, safe, and constraint-satisfying under perturbation?

An observational association is not a causal effect merely because an action variable appears in a dataset. Offline policy evaluation requires identification or coverage assumptions; hidden confounding can invalidate it.

## 7. Failure modes and boundary cases

- **Non-Markov observations:** identical readings can hide different histories and futures.
- **Reward misspecification:** a proxy can be optimized while the intended outcome deteriorates.
- **Distribution shift:** the learned policy changes the state-action distribution generating later data.
- **Extrapolation in offline RL:** a maximization operator favors actions whose values are poorly estimated.
- **Partial observability:** a memoryless policy over observations may be fundamentally insufficient.
- **Average reward versus discounting:** taking $\gamma$ “close to one” does not automatically prove an average-reward result.
- **Empirical success versus guarantee:** performance in a fixed simulator is evidence about that experiment, not every deployment environment.

## 8. Worked practice

<a id="deep-dive-mdp-reinforcement-learning-ex-1"></a>

### Exercise 1: verify contraction carefully

Show that for finite action sets,

$$|\max_{a} x_{a}-\max_{a} y_{a}|\le \max_{a}|x_{a}-y_{a}|$$

then use it to prove the Bellman contraction bound.


<details>
<summary>Hint 1</summary>

Choose an action that maximizes the first array and compare its entry in the second.
</details>
<details>
<summary>Hint 2</summary>

That gives one inequality; exchange the arrays to obtain the absolute-value bound, then apply discounting.
</details>
<details>
<summary>Solution</summary>

Let $a_{x}$ maximize $x$. Then $\max x-\max y\le x_{a_{x}}-y_{a_{x}}\le \max|x-y|$. Swap $x,y$ for the reverse inequality. Apply this with action returns; transition probabilities sum to one, so each return difference is at most $\gamma\lVert V-W\rVert_\infty$.

</details>

<a id="deep-dive-mdp-reinforcement-learning-ex-2"></a>

### Exercise 2: one value-iteration step

For the maintenance example, start with $V_{0}(H)=V_{0}(F)=0$. Compute $V_{1}(H)$ and $V_{2}(H)$.


<details>
<summary>Hint 1</summary>

Start value iteration from zero and compute both state values after one Bellman update.
</details>
<details>
<summary>Hint 2</summary>

For the next healthy-state update, compare maintain with run using the stated transition probabilities and discount.
</details>
<details>
<summary>Solution</summary>

$V_{1}(H)=\max\{-1,2\}=2$ and $V_{1}(F)=0$. Next, maintain gives $-1+0.9(2)=0.8$; run gives $2+0.9(3/4)(2)=3.35$. Thus $V_{2}(H)=3.35$.

</details>

### Exercise 3: why one terminal convention matters

Suppose $F$ pays reward $-20$ on every step while remaining absorbing. Find $V(F)$ for $\gamma=0.9$. Contrast this with a one-time reward of $-20$ on entry followed by zero.

**Solution.** Repeated reward gives $V(F)=-20+0.9V(F)=-200$. A one-time transition penalty contributes $-20$ only when entering; after entry the terminal continuation is zero. Confusing these conventions changes values by an order of magnitude.

### Exercise 4: check a TD update

Let $\gamma=0.9$, $\alpha=0.2$, current $V(H)=5$, next state $F$ have value $0$, and observed reward be $2$. Find the new $V(H)$.

**Solution.** The TD error is $2+0.9(0)-5=-3$. The update gives $5+0.2(-3)=4.4$. One transition does not prove the old value was wrong; it supplies a noisy update.

### Exercise 5: a baseline has zero expected score term

For a two-action policy with probabilities $p_{\theta}$ and $1-p_{\theta}$, verify directly that $\operatorname{E}_{A\sim\pi_{\theta}}[b(s)\nabla_{\theta} \log \pi_{\theta}(A|s)]=0$.

**Solution.** The expectation is $b[p\nabla\log p+(1-p)\nabla\log(1-p)] = b[\nabla p+\nabla(1-p)]=0$, wherever the log derivatives are defined. The baseline changes variance, not the expected policy-gradient term.

### Exercise 6: diagnose an invalid claim

A Q-network has low Bellman error on a logged dataset, so its greedy policy is declared safe and optimal. List three missing links.

**Solution.** The logs may not cover greedy actions; low empirical residual need not control residual off the logged distribution; approximation and maximization can amplify errors; hidden confounding can defeat counterfactual evaluation; and reward optimality is not safety. Any three distinguish the mathematical gaps.

## Where to go next

Use [Mathematics for Machine Learning](#/courses/atlas-mathematics-for-machine-learning) for the linear algebra, probability, optimization, and generalization spine. The [Markov Coupling Laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling) develops convergence for fixed Markov chains; compare that passive process with action-dependent MDP transitions. The [Trustworthy Predictive Modeling Recipe](recipe-trustworthy-predictive-model.md) shows the split and audit discipline needed before sequential decisions. For deeper study, continue to stochastic approximation, partially observable control, robust and constrained MDPs, bandit theory, and system identification.
