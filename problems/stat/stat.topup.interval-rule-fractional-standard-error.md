# Apply a supplied interval rule exactly

*Medium · [Statistics and probability](index.md)*

A stipulated interval rule is estimate plus or minus $2\,SE$. With estimate 15 and SE=3/2, return lower and upper. Only endpoints under this supplied rule are requested; no exact coverage percentage is asserted.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"12","upper":"18"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Multiply the standard error by two first.

</details>

<details>
<summary>Hint 2</summary>

Subtract and add the same resulting margin.

</details>

<details>
<summary>Worked solution</summary>

Computing a rule does not establish its coverage.

1. The supplied margin is $2(3/2)=3$.
2. The lower endpoint is twelve and the upper endpoint eighteen.
3. The interval is $[12,18]$; a coverage claim would require a justified sampling model for the procedure.

</details>
