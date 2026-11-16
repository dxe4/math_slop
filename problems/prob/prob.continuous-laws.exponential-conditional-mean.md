# Mean remaining time after an exponential wait

*Medium · [Probability problems](index.md)*

Let $X$ have the exponential distribution with rate $2$, so $P(X>t)=e^{-2t}$ for $t\ge0$. Find $E[X\mid X>1]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Identify the conditional distribution of the additional waiting time beyond the observed threshold.

</details>

<details>
<summary>Hint 2</summary>

Use the ratio of survival probabilities to justify that conditional distribution.

</details>

<details>
<summary>Worked solution</summary>

The exponential survival ratio leaves the same residual waiting law.

1. For $t\ge0$, $P(X-1>t\mid X>1)=e^{-2(t+1)}/e^{-2}=e^{-2t}$.
2. Thus the conditional residual $X-1$ is exponential with rate $2$, whose mean is $\int_0^\infty e^{-2t}\,dt=1/2$.
3. Adding the elapsed unit gives $E[X\mid X>1]=1+1/2=3/2$.

</details>
