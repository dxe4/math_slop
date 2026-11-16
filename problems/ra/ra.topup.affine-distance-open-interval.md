# Translate a strict affine distance condition into an interval

*Medium · [Real analysis](index.md)*

Write the set of real x satisfying $|2x-3|<5/2$ as a single interval.

```answer
{"answer":{"kind":"interval","expected":"(1/4,11/4)","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Replace the absolute-value inequality with a double inequality.

</details>

<details>
<summary>Hint 2</summary>

Dividing by the positive coefficient preserves both directions.

</details>

<details>
<summary>Worked solution</summary>

A strict distance condition yields two excluded endpoints.

1. The inequality is equivalent to -5/2&lt;2x-3&lt;5/2.
2. Adding three gives 1/2&lt;2x&lt;11/2, and dividing by two gives 1/4&lt;x&lt;11/4.
3. The interval is (1/4,11/4), with both endpoints excluded.

</details>
