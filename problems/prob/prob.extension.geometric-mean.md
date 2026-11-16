# Mean number of trials through success

*Easy · [Probability problems](index.md)*

Let $T$ count independent Bernoulli trials through the first success, with success probability $1/5$ on every trial. Using the geometric waiting-time law, find $E[T]$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Checks the mean for the trials-through-success convention only."}}
```

<details>
<summary>Hint 1</summary>

Distinguish the number of trials including success from the number of failures before success.

</details>

<details>
<summary>Hint 2</summary>

For the trials-through-success geometric law, the mean is the reciprocal of the success parameter.

</details>

<details>
<summary>Worked solution</summary>

Apply the geometric mean with the correct counting convention.

1. Here $T$ has support $\{1,2,\ldots\}$, with tail $P(T>k)=(4/5)^k$ for integers $k\ge0$.
2. For a positive integer-valued variable, $T=\sum_{k\ge0}\mathbf1_{\{T>k\}}$; monotone convergence gives $E[T]=\sum_{k\ge0}P(T>k)$.
3. The convergent geometric series is $\sum_{k\ge0}(4/5)^k=1/(1-4/5)=5$. Counting only failures would instead give $E[T-1]=4$.

The tail-sum geometric series is $1/(1-4/5)=5$.

</details>
