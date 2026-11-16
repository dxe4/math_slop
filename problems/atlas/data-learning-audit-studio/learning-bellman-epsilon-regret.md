# Bellman value and the cost of constant exploration

*Difficulty 3 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 7 of 9*

A discounted one-state MDP has two actions. Both return to the same state; action $a$ gives reward $1$ and action $b$ gives reward $0$. Let $\gamma=0.8$. Find $V^*$ and both optimal $Q$-values. Then suppose $\varepsilon$-greedy selects the greedy action with probability $1-\varepsilon$ and otherwise chooses uniformly from both actions. Compute its expected one-step reward and expected $T$-step undiscounted regret relative to always choosing $a$.

<details>
<summary>Hint 1</summary>

Solve $V^*=\max\{1+\gamma V^*,\,\gamma V^*\}$

</details>

<details>
<summary>Hint 2</summary>

The random branch still chooses $a$ half the time

</details>

<details>
<summary>Hint 3</summary>

Regret here compares cumulative undiscounted rewards over a finite horizon

</details>

<details>
<summary>Worked solution</summary>

The optimal Bellman equation is $V^*=1+0.8V^*$, because action $a$ has one more immediate reward than $b$ for the same continuation. Thus $V^*=5$. Then $Q^*(a)=1+0.8(5)=5$ and $Q^*(b)=0+0.8(5)=4$. Under the stated $\varepsilon$-greedy convention, $a$ is chosen with probability $1-\varepsilon+\varepsilon/2=1-\varepsilon/2$, so expected reward per step is $1-\varepsilon/2$. Always choosing $a$ earns $1$ per step; expected finite-horizon undiscounted regret is $T[1-(1-\varepsilon/2)]=\varepsilon T/2$. Constant $\varepsilon$ therefore creates linear regret in this simple stationary bandit-like case. This does not analyze decaying $\varepsilon$ or changing-state exploration.

**Answer.** $V^*=5$, $Q^*(a)=5$, $Q^*(b)=4$; expected reward is $1-\varepsilon/2$ and $T$-step regret is $\varepsilon T/2$.

</details>

*Tags: Bellman equation, epsilon-greedy, exploration, regret*
