# Calculate a signed prediction error

*Medium · [Statistics and probability](index.md)*

The supplied line is $\widehat y=2+3x$. At x=4 an observed outcome is 11. Return prediction and residual, defining residual=observed-predicted.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"prediction":"14","residual":"-3"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the line at the observed predictor.

</details>

<details>
<summary>Hint 2</summary>

Subtract predicted from observed, keeping the sign.

</details>

<details>
<summary>Worked solution</summary>

A residual is a signed deviation from the supplied predictive line.

1. At x equal to four, the prediction is $2+3(4)=14$.
2. The residual is $11-14=-3$.
3. The negative sign means the observation lies below the predicted value; no causal interpretation is implied.

</details>
