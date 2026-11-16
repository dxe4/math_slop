# Absorption on the first step

*Easy · [Probability problems](index.md)*

A time-homogeneous Markov chain starts at state $0$. From $0$ it moves to absorbing state $1$ with probability $1/3$, otherwise staying at $0$. Find the probability of absorption on its first step.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks first-step absorption from zero only; no eventual hitting probability is requested."}}
```

<details>
<summary>Hint 1</summary>

The initial state is outside the absorbing set.

</details>

<details>
<summary>Hint 2</summary>

First-step absorption is precisely the specified transition into state one; later attempts do not belong to this event.

</details>

<details>
<summary>Worked solution</summary>

Read the appropriate initial transition.

1. Since $X_0=0$, absorption has not already occurred at time zero.
2. Absorption on the first step is the event $X_1=1$.
3. The given transition probability is $P_{01}=1/3$, which is the answer. This event differs from eventual absorption after any number of steps.

First-step absorption has probability $1/3$.

</details>
