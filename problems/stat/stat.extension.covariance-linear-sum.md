# Covariance linear sum

*Easy · [Statistics and probability](index.md)*

Suppose $\operatorname{Var}(X)=2$, $\operatorname{Var}(Y)=3$, and $\operatorname{Cov}(X,Y)=1$. What is $\operatorname{Var}(X+Y)$?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Expand the square of the sum of the centered variables.

</details>

<details>
<summary>Hint 2</summary>

There are two cross-products; do not discard them without a zero-covariance assumption.

</details>

<details>
<summary>Worked solution</summary>

Include covariance when adding variances.

1. Centering and expanding yields $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y)$.
2. Substitution gives $2+3+2\cdot1=7$.
3. The answer is $7$, rather than the variance sum $5$. Independence is not assumed and would be inconsistent with the stated nonzero covariance.

</details>
