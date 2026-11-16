# Variance of a Brownian increment

*Easy · [Probability problems](index.md)*

Let $(B_t)_{t\ge0}$ be standard Brownian motion with $B_0=0$. Find $\operatorname{Var}(B_3-B_1)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks this increment variance for standard Brownian normalisation only."}}
```

<details>
<summary>Hint 1</summary>

A standard Brownian increment over $[s,t]$ is centred normal with variance $t-s$.

</details>

<details>
<summary>Hint 2</summary>

Use the elapsed time between the two endpoints, not the sum of their individual variances.

</details>

<details>
<summary>Worked solution</summary>

Brownian increment variance equals the interval length.

1. The increment law is $B_t-B_s\sim N(0,t-s)$ for $0\le s<t$.
2. The interval here has endpoints one and three, so its length is $3-1=2$.
3. Thus $\operatorname{Var}(B_3-B_1)=2$. The values $B_3$ and $B_1$ themselves are not independent.

Its variance is the interval length two.

</details>
