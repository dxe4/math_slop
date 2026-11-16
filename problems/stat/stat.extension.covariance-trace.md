# Covariance trace

*Easy · [Statistics and probability](index.md)*

A two-variable covariance matrix $\Sigma$ has diagonal entries $2$ and $5$. The trace is the sum of diagonal entries. What is $\operatorname{tr}(\Sigma)$?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Locate the entries that contribute to the trace.

</details>

<details>
<summary>Hint 2</summary>

The off-diagonal covariance is not needed for this sum.

</details>

<details>
<summary>Worked solution</summary>

The trace sums the component variances.

1. By definition $\operatorname{tr}(\Sigma)=\Sigma_{11}+\Sigma_{22}$.
2. The stated entries give $\operatorname{tr}(\Sigma)=2+5=7$.
3. No off-diagonal value enters this calculation; it would matter for the variance of a sum or other contrast.

</details>
