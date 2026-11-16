# Apply a supplied squeeze bound to oscillation

*Easy · [Calculus](index.md)*

Using −\|x\|≤x sin(1/x)≤\|x\| for x≠0, find $\lim_{x\to0}x\sin(1/x)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Both bounding functions have the same limit.

</details>

<details>
<summary>Hint 2</summary>

The oscillation remains between those shrinking bounds.

</details>

<details>
<summary>Worked solution</summary>

Squeeze controls an oscillatory expression without requiring its oscillatory factor to converge.

1. As x→0, both −\|x\| and \|x\| tend to zero.
2. The given inequalities hold throughout the punctured domain.
3. The squeeze theorem gives the limit 0.

</details>
