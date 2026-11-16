# Reverse an exponent comparison for a base below one

*Medium · [Foundations bridge](index.md)*

Solve $(1/2)^x\ge1/8$ over the real numbers. Return an interval.

```answer
{"answer":{"kind":"interval","expected":"(-infinity,3]","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Express 1/8 with the same base as the left side.

</details>

<details>
<summary>Hint 2</summary>

A base strictly between zero and one makes its exponential strictly decreasing.

</details>

<details>
<summary>Worked solution</summary>

The monotonic direction depends on whether the base exceeds one.

1. The right side is (1/2)³.
2. Because the exponential with base 1/2 is decreasing, (1/2)^x≥(1/2)³ means x≤3.
3. The solution is (−∞,3\], including equality.

</details>
