# Compare an expectation with the outcome range

*Medium · [Statistics and probability](index.md)*

X equals $-1$ with probability 2/3 and 2 with probability 1/3. Let Y=3X+5. Return expected\_Y, minimum\_Y and maximum\_Y.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"expected_Y":"5","minimum_Y":"2","maximum_Y":"11"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Transform both possible X values.

</details>

<details>
<summary>Hint 2</summary>

Compute a weighted average of the two Y values.

</details>

<details>
<summary>Worked solution</summary>

An expectation can lie strictly between possible outcomes without itself being possible.

1. Y takes values two and eleven with probabilities two thirds and one third.
2. Its expectation is $2(2/3)+11(1/3)=5$.
3. The minimum is two and maximum eleven; the expected value five is not a possible realized outcome.

</details>
