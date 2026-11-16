# Compare two affine tariffs on their physical domain

*Medium · [Foundations bridge](index.md)*

For a nonnegative duration t hours, plan A costs $5+2t$ and plan B costs $1+3t$ in pounds. Give all t for which A costs no more than B.

```answer
{"answer":{"kind":"interval","expected":"[4,infinity)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Translate “no more” to a non-strict inequality.

</details>

<details>
<summary>Hint 2</summary>

Solve it and intersect with t≥0.

</details>

<details>
<summary>Worked solution</summary>

A cost comparison is an inequality constrained by the quantity’s domain.

1. The condition is 5+2t≤1+3t.
2. Subtracting 2t+1 gives 4≤t.
3. This already satisfies t≥0, so the complete interval is \[4,∞).

</details>
