# Scale and shift a variance

*Easy · [Probability problems](index.md)*

A random variable $X$ has variance $2$. Find $\operatorname{Var}(3X-2)$.

```answer
{"answer":{"kind":"integer","expected":18,"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A constant shift does not change deviations from the mean.

</details>

<details>
<summary>Hint 2</summary>

A scalar multiplication squares its effect on variance.

</details>

<details>
<summary>Worked solution</summary>

Centered deviations scale by the linear coefficient only.

1. The centered form of $3X-2$ is $3(X-E[X])$.
2. Squaring this deviation introduces a factor of $9$.
3. Therefore $\operatorname{Var}(3X-2)=9\operatorname{Var}(X)=18$.

</details>
