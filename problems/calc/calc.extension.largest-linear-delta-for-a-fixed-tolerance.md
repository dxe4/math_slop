# Find a sharp epsilon-delta radius for a linear map

*Medium · [Calculus](index.md)*

For ε=1/5, find the largest δ&gt;0 such that $|x-1|<\delta\Rightarrow|(3x+2)-5|<1/5$ for all real x.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":15},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The output error is exactly three times the input error.

</details>

<details>
<summary>Hint 2</summary>

Verify the boundary radius works with strict inequalities, then rule out every larger radius.

</details>

<details>
<summary>Worked solution</summary>

A sharp radius must satisfy the implication and be maximal.

1. The output error equals 3\|x−1\|. Taking δ=1/15 makes every allowed error strictly less than 1/5.
2. If δ&gt;1/15, choose a positive input error h strictly between 1/15 and δ. Then x=1+h satisfies the premise but has output error 3h&gt;1/5.
3. Therefore the largest valid radius is 1/15.

</details>
