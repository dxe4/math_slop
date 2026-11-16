# Find the first integer index passing a growth threshold

*Medium · [Foundations bridge](index.md)*

A quantity is Q\_n=100(3/2)ⁿ for integer n≥0. Find the smallest n for which $Q_n\ge300$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Divide the target by the starting quantity.

</details>

<details>
<summary>Hint 2</summary>

Compare nearby integer powers, using monotonic growth to establish minimality.

</details>

<details>
<summary>Worked solution</summary>

A real exponent threshold must be rounded to the first allowed discrete index.

1. The condition is (3/2)ⁿ≥3.
2. At n=2 the factor is 9/4&lt;3, while at n=3 it is 27/8&gt;3.
3. Since the factor increases with n, all smaller nonnegative indices also fail. The first valid n is 3.

</details>
