# Within-branch and between-branch variance

*Medium · [Probability problems](index.md)*

A fair bit $H$ selects two conditional laws of a square-integrable variable $X$. Their means are $0$ at $H=0$ and $2$ at $H=1$, and both conditional variances are $1$. Find $\operatorname{Var}(X)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the unconditional variance from the stated conditional moments only."}}
```

<details>
<summary>Hint 1</summary>

Conditional variance alone does not include variation between conditional means.

</details>

<details>
<summary>Hint 2</summary>

Use total variance, or recover each conditional second moment and then calculate the unconditional first and second moments.

</details>

<details>
<summary>Worked solution</summary>

Combine conditional second moments before subtracting the squared overall mean.

1. The overall mean is $(1/2)0+(1/2)2=1$.
2. In each branch, $E[X^2\mid H=h]=\operatorname{Var}(X\mid H=h)+(E[X\mid H=h])^2$. These second moments are one and five.
3. Thus $E[X^2]=(1+5)/2=3$ and $\operatorname{Var}(X)=3-1^2=2$. Equivalently, the average within-branch variance one and the variance of the branch means one add to two.

The overall second moment is three and the mean is one, yielding variance two.

</details>
