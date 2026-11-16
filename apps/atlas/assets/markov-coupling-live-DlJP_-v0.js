var e=`---
id: visual-lab-markov-coupling
title: "Markov Mixing & Coupling Observatory"
level: undergraduate
estimated_minutes: 95
license: CC BY-SA 4.0
---

# Markov Mixing & Coupling Observatory

This live Canvas instrument studies a two-state Markov chain in three synchronized ways:

1. an exact recurrence for the distribution from each initial state;
2. one reproducible pair of coupled sample paths;
3. a numerical table containing the same information without relying on the picture.

The distinction is essential. A sampled path is one random realization. The distribution curves are calculations implied by the transition model. Neither proves that a real system obeys that model.

## The model

The states are labeled 0 and 1. Let

$\\alpha =P(X_{t+1}=1 | X_t=0)$

and

$\\beta =P(X_{t+1}=0 | X_t=1)$.

The transition matrix, with current state indexing rows, is

$P=[[1-\\alpha , \\alpha ],[\\beta ,1-\\beta ]]$.

Both parameters must lie in $[0,1]$. Rows then sum to one. Use the sliders or boundary presets to edit them.

If $q_t=P(X_t=1)$, condition on the present state:

$q_{t+1}=P(next 1 | current 0)P(current 0)$

$+P(next 1 | current 1)P(current 1)$

$=\\alpha (1-q_t)+(1-\\beta )q_t$

$=\\alpha +(1-\\alpha -\\beta )q_t$.

This exact recurrence drives the blue and violet curves and every number in the table.

## Stationarity and contraction

A stationary value satisfies $q=\\alpha +(1-\\alpha -\\beta )q$. When $\\alpha +\\beta >0$,

$\\pi _1=\\alpha /(\\alpha +\\beta )$.

Subtracting this fixed point from the recurrence gives

$q_{t+1}-\\pi _1=(1-\\alpha -\\beta )(q_t-\\pi _1)$.

Therefore

$q_t-\\pi _1=(1-\\alpha -\\beta )^t(q_0-\\pi _1)$.

The second eigenvalue $\\lambda _{2}=1-\\alpha -\\beta$ controls the behavior. Its absolute value controls contraction. Its sign controls whether the error approaches stationarity from one side or alternates around it.

For binary distributions, total-variation distance equals the absolute difference in probability of state 1. Starting one copy at 0 and another at 1 therefore gives

$TV_t=|1-\\alpha -\\beta |^t$.

The displayed “TV≤.01” value is the first integer $t$ at which this exact distance is at most $0.01$. It says “never” when the contraction magnitude is one.

## The seeded coupling

A coupling puts two chains on one probability space while preserving each chain’s transition law. At each step the lab maximally couples two Bernoulli next-state distributions.

For Bernoulli probabilities $p$ and $q$, assign mass $\\min(p,q)$ to $(1,1)$ and mass $\\min(1-p,1-q)$ to $(0,0)$. The remaining mass is assigned to $(1,0)$ if $p>q$, or $(0,1)$ if $q>p$. The first marginal has probability

$\\min(p,q)+\\max(p-q,0)=p$

of being one, and similarly the second marginal has probability $q$. The mismatch probability is exactly $|p-q|$, which is minimal among all couplings.

After the chains meet, their transition probabilities agree and the construction keeps them together. The cyan marker shows the first sample meeting. A different seed can produce a different time. Do not replace the exact total-variation curve by one meeting observation.

The internal seeded generator provides repeatable teaching paths and pure tests. It is neither a cryptographic source nor a claim of production-quality randomness.

## Presets as counterexamples

- **Mixing:** $\\alpha =.2, \\beta =.3$; the second eigenvalue is \`.5\`, so extreme-start distance halves each step.
- **Fast:** $\\alpha =\\beta =.5$; both rows are identical, so the initial state is forgotten in one step.
- **Sticky:** low switching rates create long sample runs and slow contraction.
- **Oscillating:** $\\alpha +\\beta >1$ makes the second eigenvalue negative; exact probabilities cross the stationary line.
- **Absorbing:** one switching probability is zero. The chain is reducible, and one state traps the process.
- **Alternating:** $\\alpha =\\beta =1$. The stationary law is half-half, but a point-mass start alternates forever. Stationarity alone does not imply convergence.

At $\\alpha =\\beta =0$, both states absorb and every mixture is stationary; there is no unique stationary probability. The lab labels this boundary rather than dividing by zero.

## Keyboard, pointer, and reduced motion

Focus the canvas, which acts as a time slider:

- Right arrow, Space, Enter, or S advances one step;
- Left arrow rewinds one step;
- P runs or pauses;
- R or Home resets;
- clicking or tapping horizontally selects a time.

The slider exposes its minimum, maximum, current time, and exact numerical state to assistive technology. The control panel also contains native sliders and buttons. If reduced motion is requested, automatic running is disabled while manual stepping remains available.

The canvas does not encode meaning by color alone: paths occupy labeled $X$ and $Y$ lanes, states have numerical levels, the meeting has a dashed marker, and the exact values appear in a table. If Canvas is unavailable, the mathematical experiment remains usable through controls, status, and table.

## Experiments

### 1. Verify a closed form

Choose Mixing and start at time zero. The table’s total-variation values should be $1, 1/2, 1/4, 1/8,\\ldots$. Any deviation would refute the implementation because $\\lambda _{2}=.5$.

### 2. Separate meeting from mixing

Choose Sticky. Change seeds and compare sample meeting times. The exact curves remain unchanged because a seed affects the displayed coupling realization, not the model’s law.

### 3. Observe signed eigenvalue behavior

Choose Oscillating. The two probability curves switch sides around the stationary line while their separation shrinks. The sign of $\\lambda _{2}$ explains crossing; its magnitude explains shrinking.

### 4. Break a false theorem

Choose Alternating. A stationary distribution exists, but the exact laws from starts 0 and 1 never converge. This refutes “every finite irreducible chain converges to stationarity.” Aperiodicity is missing.

### 5. Absorption and nonuniqueness

Set both parameters to zero. Confirm that each sample stays at its initial state, total variation remains one, and stationarity is labeled nonunique.

## Worked checks

### 1. Stationary value

For $\\alpha =.12, \\beta =.28$, find $\\pi _1$ and $\\lambda _{2}$.

**Answer.** $\\pi _1=.12/.40=.3$; $\\lambda _{2}=1-.12-.28=.6$.

### 2. Mixing threshold

For $|\\lambda _{2}|=.5$, when do extreme starts have total variation at most \`.01\`?

**Answer.** Need $.5^t\\le .01$. Since $.5^6=.015625$ and $.5^7=.0078125$, the first time is 7.

### 3. Negative eigenvalue

What happens for $\\alpha =.8, \\beta =.7$?

**Answer.** $\\lambda _{2}=-.5$, so distance halves while the signed error alternates. The stationary state-one probability is $.8/1.5=8/15$.

### 4. Coupling inequality

Why does a coalescent coupling give $TV\\le P(X_t\\ne Y_t)$?

**Answer.** For any event, its two membership indicators can differ only when the coupled variables differ. Bound the difference of probabilities, then take the supremum over events.

## Continue

The standard course develops Markov transition matrices and Poisson processes. The stochastic-processes book adds general state spaces, hitting equations, renewal, Brownian motion, and martingales. The programming course exposes the seeded algorithms and property tests behind this instrument.

`;export{e as default};