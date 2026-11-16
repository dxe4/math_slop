# Stationary mass in a symmetric two-state chain

*Medium · [Probability problems](index.md)*

A homogeneous chain on ordered states $0,1$ has row transition matrix $P=\begin{pmatrix}3/4&1/4\\1/4&3/4\end{pmatrix}$. Find its stationary probability of state $0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the state-zero mass of the stationary probability vector only."}}
```

<details>
<summary>Hint 1</summary>

Write a stationary row vector as $(a,1-a)$.

</details>

<details>
<summary>Hint 2</summary>

Use the state-zero coordinate of $\pi P=\pi$ together with probability normalisation.

</details>

<details>
<summary>Worked solution</summary>

Solve the stationarity equation rather than infer convergence from symmetry.

1. For $\pi=(a,1-a)$, stationarity in coordinate zero is $a=(3/4)a+(1/4)(1-a)$.
2. This reduces to $a=(1/2)a+1/4$, whose unique solution is $a=1/2$.
3. The vector $(1/2,1/2)$ is nonnegative, normalised, and multiplication by $P$ leaves it unchanged, so the required stationary mass is $1/2$.

Stationarity and normalisation give equal masses $1/2$.

</details>
