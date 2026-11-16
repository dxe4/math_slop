# Separate a zero-coefficient parameter case

*Medium · [Foundations bridge](index.md)*

For which real parameter values k does $(k-1)x=2k$ have no real solution x? Return the set of parameter values.

```answer
{"answer":{"kind":"set","expected":["1"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A nonzero coefficient of x always gives exactly one real solution.

</details>

<details>
<summary>Hint 2</summary>

Examine the parameter where that coefficient becomes zero.

</details>

<details>
<summary>Worked solution</summary>

A parameter-dependent division needs its zero case separated first.

1. If k≠1, division gives x=2k/(k−1), so a solution exists.
2. If k=1, the equation becomes 0x=2, which has no solution.
3. Thus the parameter set is {1}.

</details>
