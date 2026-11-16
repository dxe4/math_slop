# Use reflection symmetry of a three-dimensional ball

*Easy · [Calculus](index.md)*

What fraction of a ball centered at zero lies in $x\ge0,y\ge0,z\ge0$? Boundaries have zero volume; return the exact fraction.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each coordinate reflection preserves the ball and volume.

</details>

<details>
<summary>Hint 2</summary>

The three signs give eight congruent octants.

</details>

<details>
<summary>Worked solution</summary>

Independent coordinate signs partition the ball into equal-volume pieces.

1. There are 2³=8 sign combinations.
2. Reflection symmetry makes their interior volumes equal.
3. The first octant therefore contains 1/8 of the total volume.

</details>
