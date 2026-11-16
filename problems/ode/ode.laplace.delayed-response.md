# Keep a transform time delay

*Medium · [Differential equations problems](index.md)*

A causal function has Laplace transform $e^{-2s}/(s+1)$. Report its value at $t=3$ with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"0.367879441171","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The exponential factor in the transform delays the original causal response.

</details>

<details>
<summary>Hint 2</summary>

Use elapsed time after the delay, not the absolute observation time, in the decaying exponential.

</details>

<details>
<summary>Worked solution</summary>

The transform shift places an exponential response after a two-unit delay.

1. Without the delay, $1/(s+1)$ is the transform of $e^{-t}$ for nonnegative time.
2. The factor $e^{-2s}$ gives zero before time two and $e^{-(t-2)}$ afterward; substituting into the transform integral recovers the delayed factor.
3. At $t=3$, the value is $e^{-1}\approx0.367879441171$.

</details>
