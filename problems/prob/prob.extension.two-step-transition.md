# Reach state one after two steps

*Medium · [Probability problems](index.md)*

A time-homogeneous Markov chain on $\{0,1\}$ has row-stochastic transition matrix $P=\begin{pmatrix}1/2&1/2\\1&0\end{pmatrix}$, with $P_{ij}=P(X_{n+1}=j\mid X_n=i)$. Starting at $X_0=0$, find $P(X_2=1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the two-step probability from the stated initial state and transition matrix only."}}
```

<details>
<summary>Hint 1</summary>

Split the event according to the state after one step.

</details>

<details>
<summary>Hint 2</summary>

For each intermediate state, multiply the transition probabilities along its two-step path, then add the disjoint path masses.

</details>

<details>
<summary>Worked solution</summary>

Sum over the intermediate state.

1. Through intermediate state zero, the path $0\to0\to1$ has probability $(1/2)(1/2)=1/4$ by the Markov property.
2. Through state one, the path $0\to1\to1$ has probability $(1/2)0=0$ because state one returns to zero.
3. These are the only two intermediate possibilities, so $P(X_2=1)=1/4$. The initial state is fixed, not sampled from a stationary law.

Only the path $0\to0\to1$ contributes, with probability $1/4$.

</details>
