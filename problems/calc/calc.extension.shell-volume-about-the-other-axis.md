# Use cylindrical shells for a different rotation axis

*Medium · [Calculus](index.md)*

Rotate the region $0\le x\le1$, $x^2\le y\le x$ about the y-axis. Find its volume divided by π using vertical shells.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A shell has radius x and height x−x².

</details>

<details>
<summary>Hint 2</summary>

Include the circumference factor 2πx before integrating.

</details>

<details>
<summary>Worked solution</summary>

Changing the rotation axis changes the geometric slice factor.

1. The shell formula is V=2π∫₀¹x(x−x²)dx.
2. The integral is 1/3−1/4=1/12.
3. Thus V/π=2×1/12=1/6.

</details>
