# Aggregate two prediction errors

*Medium · [Statistics and probability](index.md)*

For the supplied line $\widehat y=2+3x$, two observations are (1,6) and (3,13). Find the sum of squared residuals, using residual=y-prediction.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Compute a separate prediction for each x.

</details>

<details>
<summary>Hint 2</summary>

Square each residual before summing.

</details>

<details>
<summary>Worked solution</summary>

The same line can produce different errors at different observations.

1. At x equal to one the prediction is five and the residual is one.
2. At x equal to three the prediction is eleven and the residual is two.
3. The squared-residual sum is $1^2+2^2=5$.

</details>
