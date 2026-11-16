# Count covariance pairs in equal-size clusters

*Easy · [Statistics and probability](index.md)*

There are $m\ge1$ independent clusters with $k\ge1$ observations each. Each observation has variance $\sigma^2$, and each distinct pair in the same cluster has covariance $\rho\sigma^2$; assume such a covariance model exists. Derive the variance of the grand mean of all $mk$ observations, retaining the $k=1$ case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the variance of one cluster sum.

</details>

<details>
<summary>Hint 2</summary>

Count ordered off-diagonal pairs before combining the independent cluster sums.

</details>

<details>
<summary>Model proof</summary>

Within-cluster covariances survive the grand averaging.

1. A cluster sum has $k$ diagonal variance terms and $k(k-1)$ ordered off-diagonal covariance terms. Its variance is $\sigma^2[k+k(k-1)\rho]$.
2. Independence of clusters makes the variance of their combined sum $m$ times this value.
3. Dividing by $(mk)^2$ gives $\operatorname{Var}(\bar X)=\sigma^2[1+(k-1)\rho]/(mk)$. If $k=1$ there are no off-diagonal terms and the formula becomes $\sigma^2/m$.

**Self-assessment rubric**

- Count the ordered within-cluster covariance terms.
- Use independence only between clusters.
- Normalize the total and preserve the one-observation boundary case.

</details>
