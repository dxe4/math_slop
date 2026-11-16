# Distinguish a series sum from an unchanged tail

*Easy · [Calculus](index.md)*

A convergent series has sum $3$. Prepend a single term 5, leaving all original terms in order. What is the new series sum?

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Every new partial sum after the first is five plus an old partial sum.

</details>

<details>
<summary>Hint 2</summary>

Take the limit of that relation.

</details>

<details>
<summary>Worked solution</summary>

A finite prefix changes a series value even though it does not change convergence.

1. The new partial sums are 5+S\_n for the old partial sums S\_n.
2. Their limit is 5+3.
3. Thus the new sum is 8.

</details>
