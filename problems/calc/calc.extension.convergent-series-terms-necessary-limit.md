# Read the necessary term limit of a convergent series

*Easy · [Calculus](index.md)*

The real series $\sum_{n=1}^\infty a_n$ converges. What must lim a\_n be?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A term is the difference of two consecutive partial sums.

</details>

<details>
<summary>Hint 2</summary>

Both partial-sum sequences have the same finite limit.

</details>

<details>
<summary>Worked solution</summary>

Consecutive differences of a convergent partial-sum sequence vanish.

1. Let S\_n be the nth partial sum, tending to S.
2. Then a\_n=S\_n−S\_{n−1} tends to S−S.
3. The necessary term limit is 0.

</details>
