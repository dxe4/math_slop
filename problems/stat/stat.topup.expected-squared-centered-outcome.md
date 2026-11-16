# Apply expectation to a nonlinear transformation

*Medium · [Statistics and probability](index.md)*

X takes values $-2,1,4$ with probabilities 1/4,1/2,1/4. Find E((X-1)^2).

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":2},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the transformed outcome at every possible X.

</details>

<details>
<summary>Hint 2</summary>

Weight transformed values by the original probabilities.

</details>

<details>
<summary>Worked solution</summary>

Expectation of a transformation uses transformed outcomes rather than transforming the expectation.

1. The transformed values are nine, zero and nine.
2. Their weighted sum is $9/4+0+9/4$.
3. Thus the expectation is $9/2$; replacing X by its mean before squaring would not give this result.

</details>
