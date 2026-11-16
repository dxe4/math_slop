# Find a strictly interior grid point

*Medium · [Real analysis](index.md)*

Find the integer k such that $7/12<k/120<3/5$.

```answer
{"answer":{"kind":"integer","expected":"71","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Multiply the whole double inequality by the positive denominator.

</details>

<details>
<summary>Hint 2</summary>

Neither endpoint is allowed.

</details>

<details>
<summary>Worked solution</summary>

A sufficiently fine rational grid contains a strictly interior point.

1. The bounds become 70&lt;k&lt;72.
2. There is exactly one integer strictly between seventy and seventy-two, namely seventy-one.
3. Consequently 71/120 is the unique grid point with the stated denominator in this interval.

</details>
