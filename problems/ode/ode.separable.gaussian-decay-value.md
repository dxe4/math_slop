# Evaluate a Gaussian-shaped solution

*Medium · [Differential equations problems](index.md)*

Solve $y^{\prime}(t)=-2ty(t)$, $y(0)=3$, and report $y(1)$. Absolute error at most $10^{-6}$ is accepted.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"1.103638323514","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The logarithmic derivative is a linear function of time.

</details>

<details>
<summary>Hint 2</summary>

Integrate that function, then impose the initial amplitude.

</details>

<details>
<summary>Worked solution</summary>

Integrating the logarithmic derivative produces a quadratic exponent.

1. Separation yields $\log|y|=-t^2+C$, and the positive initial value gives $y(t)=3e^{-t^2}$.
2. Its derivative is $-2t\cdot3e^{-t^2}=-2ty$, and $y(0)=3$.
3. Therefore $y(1)=3/e\approx1.103638323514$.

</details>
