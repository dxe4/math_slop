# Local linear approximation: evaluate local approximation

*Medium · [Calculus](index.md)*

For $f(x)=\sqrt{x}$, use $f(25)=5$ and $f^{\prime}(25)=1/10$. What value does its linearization at $25$ predict for $\sqrt{26}$? Give the predicted value exactly; it is an approximation to $\sqrt{26}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":51,"denominator":10},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

The input change from $25$ to $26$ is $1$.

</details>

<details>
<summary>Hint 2</summary>

Add derivative times input change to the known function value.

</details>

<details>
<summary>Worked solution</summary>

At $26$ it predicts $L(26)=5+1/10=51/10$, without claiming exact equality with $\sqrt{26}$.

1. The tangent model is $L(x)=5+(x-25)/10$.
2. At $26$ it predicts $L(26)=5+1/10=51/10$, without claiming exact equality with $\sqrt{26}$.

</details>
