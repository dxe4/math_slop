# Locate the first factorial with a given valuation

*Medium · [Computational arithmetic problems](index.md)*

Find the least positive integer $n$ for which the exponent of five in $n!$ is at least $100$.

```answer
{"answer":{"kind":"integer","expected":"405","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The valuation is nondecreasing and changes only at multiples of five.

</details>

<details>
<summary>Hint 2</summary>

Bracket the threshold near $400!$ and inspect the next multiple.

</details>

<details>
<summary>Worked solution</summary>

Monotonicity plus the first subsequent jump proves minimality.

1. At $n=400$ the valuation is $80+16+3=99$. It remains $99$ for $401\leq n\leq404$.
2. At $405$ the valuation is $81+16+3=100$.
3. All smaller $n$ have valuation at most $99$ by monotonicity, so the least is $405$.

</details>
