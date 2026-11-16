# Variance from two raw moments

*Easy · [Probability problems](index.md)*

A real variable satisfies $E[X]=3$ and $E[X^2]=13$. Find $\operatorname{Var}(X)$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the variance from these moments only; it does not grade a proof of Jensen's inequality."}}
```

<details>
<summary>Hint 1</summary>

Use the second-moment identity for variance.

</details>

<details>
<summary>Hint 2</summary>

Subtract the square of the first moment from the second moment, respecting the order of operations.

</details>

<details>
<summary>Worked solution</summary>

Variance is the second raw moment minus the squared mean.

1. The finite second moment ensures square integrability and hence a well-defined variance.
2. The identity is $\operatorname{Var}(X)=E[X^2]-(E[X])^2$.
3. Substituting gives $13-3^2=13-9=4$, which is nonnegative as required.

The variance is $13-9=4$.

</details>
