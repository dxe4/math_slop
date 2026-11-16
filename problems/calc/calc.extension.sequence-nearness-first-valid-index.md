# Find the first discrete index meeting a convergence tolerance

*Medium · [Calculus](index.md)*

For a\_n=n/(n+1), n≥1, find the smallest integer n such that $|a_n-1|<1/100$.

```answer
{"answer":{"kind":"integer","expected":100,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Rewrite the error before solving the inequality.

</details>

<details>
<summary>Hint 2</summary>

The inequality is strict, so its integer boundary needs care.

</details>

<details>
<summary>Worked solution</summary>

Convergence can be quantified by the first index with a specified tail error.

1. The error is 1/(n+1).
2. The strict inequality 1/(n+1)&lt;1/100 gives n+1&gt;100, or n&gt;99.
3. The first integer index is 100; at n=99 equality would fail the strict tolerance.

</details>
