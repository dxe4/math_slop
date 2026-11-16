# Divide a negative integer with canonical remainder

*Medium · [Number theory](index.md)*

Find quotient and remainder for $-87=7q+r$ with 0&lt;=r&lt;7. Return quotient and remainder.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"quotient":"-13","remainder":"4"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The quotient must put the remainder at least zero.

</details>

<details>
<summary>Hint 2</summary>

Compare the neighboring multiples negative eighty-four and negative ninety-one.

</details>

<details>
<summary>Worked solution</summary>

The canonical remainder requires the lower neighboring multiple for a negative dividend.

1. Using q=-12 would leave remainder -3, outside the required range.
2. Using q=-13 gives $7q=-91$ and remainder four.
3. Thus $-87=7(-13)+4$ with the required remainder bounds.

</details>
