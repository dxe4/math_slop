# Stationarity on a deterministic three-cycle

*Medium · [Probability problems](index.md)*

A deterministic chain cycles $0\to1\to2\to0$. Find its stationary probability of state $2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks a stationary probability only; convergence from a fixed state is not asserted."}}
```

<details>
<summary>Hint 1</summary>

A stationary vector is unchanged when the transition cyclically shifts its coordinates.

</details>

<details>
<summary>Hint 2</summary>

Write the incoming-mass equation at each state and then normalise.

</details>

<details>
<summary>Worked solution</summary>

Cyclic invariance forces the three masses to agree.

1. The stationarity equations are $\pi_0=\pi_2$, $\pi_1=\pi_0$ and $\pi_2=\pi_1$, because each state has exactly one deterministic predecessor.
2. Thus all three masses equal a common value $a$.
3. Normalisation gives $3a=1$, so the stationary mass of state two is $1/3$. This law is invariant even though the chain is periodic.

The invariant masses are all $1/3$.

</details>
