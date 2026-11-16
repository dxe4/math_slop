# Keep covariance for identical variables

*Medium · [Probability problems](index.md)*

Let $X$ be a fair zero-one indicator and set $Y=X$. Find $\operatorname{Var}(X+Y)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The variables are identical, not independent.

</details>

<details>
<summary>Hint 2</summary>

Simplify their sum before applying a variance rule.

</details>

<details>
<summary>Worked solution</summary>

Perfect dependence changes the scaling of a sum.

1. Since $Y=X$, the sum is $2X$.
2. A fair indicator has variance $1/4$.
3. Hence $\operatorname{Var}(X+Y)=4\operatorname{Var}(X)=1$.

</details>
