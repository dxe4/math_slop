# Brownian increment covariance

*Difficulty 4 of 5 · [Probability modeling](index.md) · exercise 12 of 15*

For standard Brownian motion with $\operatorname{Cov}(B_s,B_t)=\min(s,t)$, compute $\operatorname{Var}(B_t-B_s)$ for $0\le s\le t$ and $\operatorname{Cov}(B_t-B_s,B_s)$. Interpret both results.

<details>
<summary>Hint 1</summary>

Expand variance of a difference

</details>

<details>
<summary>Hint 2</summary>

Use $\min(s,t)=s$

</details>

<details>
<summary>Worked solution</summary>

$\operatorname{Var}(B_t-B_s)=\operatorname{Var}(B_t)+\operatorname{Var}(B_s)-2\operatorname{Cov}(B_t,B_s)=t+s-2s=t-s$. Also $\operatorname{Cov}(B_t-B_s,B_s)=\operatorname{Cov}(B_t,B_s)-\operatorname{Var}(B_s)=s-s=0$. Brownian increments are jointly Gaussian with the past, so this zero covariance corresponds to independence; the increment has variance equal to elapsed time.

**Answer.** Variance $t-s$ and covariance $0$; the future increment is independent of $B_s$ and scales with elapsed time.

</details>

*Tags: Brownian motion, covariance, independent increments*
